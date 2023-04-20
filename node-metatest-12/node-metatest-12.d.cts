
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
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

export enum ContextTestType {
    HEADLESS,
    VKMS,
    NESTED,
}
export enum ContextTestFlag {
    NONE,
    TEST_CLIENT,
    NO_X11,
}
export enum TestRunFlags {
    NONE,
    CAN_SKIP,
}
export module ContextTest {

    // Signal callback interfaces

    /**
     * Signal callback interface for `after-tests`
     */
    export interface AfterTestsSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `before-tests`
     */
    export interface BeforeTestsSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `run-tests`
     */
    export interface RunTestsSignalCallback {
        (): number
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Meta.Context.ConstructorProperties {
    }

}

export interface ContextTest {

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
}

export class ContextTest extends Meta.Context {

    // Own properties of MetaTest-12.MetaTest.ContextTest

    static name: string

    // Constructors of MetaTest-12.MetaTest.ContextTest

    constructor(config?: ContextTest.ConstructorProperties) 
    _init(config?: ContextTest.ConstructorProperties): void
}

export module TestMonitor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface TestMonitor {

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
}

export class TestMonitor extends GObject.Object {

    // Own properties of MetaTest-12.MetaTest.TestMonitor

    static name: string

    // Constructors of MetaTest-12.MetaTest.TestMonitor

    constructor(config?: TestMonitor.ConstructorProperties) 
    constructor(context: Meta.Context, width: number, height: number, refreshRate: number) 
    static new(context: Meta.Context, width: number, height: number, refreshRate: number): TestMonitor
    _init(config?: TestMonitor.ConstructorProperties): void
}

export interface ContextTestClass {
}

export abstract class ContextTestClass {

    // Own properties of MetaTest-12.MetaTest.ContextTestClass

    static name: string
}

export interface TestMonitorClass {

    // Own fields of MetaTest-12.MetaTest.TestMonitorClass

    parentClass: GObject.ObjectClass
}

export abstract class TestMonitorClass {

    // Own properties of MetaTest-12.MetaTest.TestMonitorClass

    static name: string
}
