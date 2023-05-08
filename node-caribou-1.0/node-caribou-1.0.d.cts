
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Caribou-1.0
 */

import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';

export enum ModifierState {
    NONE,
    LATCHED,
    LOCKED,
}
export enum ScanGrouping {
    NONE,
    SUBGROUPS,
    ROWS,
    LINEAR,
}
export interface KeyButtonCallback {
    (keybuttoncode: number, pressed: boolean): void
}
export module IScannableItem {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.IScannableItem

        scanStepping?: boolean | null
        scanSelected?: boolean | null
    }

}

export interface IScannableItem extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.IScannableItem

    scanStepping: boolean
    scanSelected: boolean
    __gtype__: number

    // Owm methods of Caribou-1.0.Caribou.IScannableItem

    // Has conflict: getScanStepping(): boolean
    // Has conflict: setScanStepping(value: boolean): void
    // Has conflict: getScanSelected(): boolean
    // Has conflict: setScanSelected(value: boolean): void

    // Own virtual methods of Caribou-1.0.Caribou.IScannableItem

    getScanStepping(): boolean
    setScanStepping(value: boolean): void
    getScanSelected(): boolean
    setScanSelected(value: boolean): void

    // Class property signals of Caribou-1.0.Caribou.IScannableItem

    connect(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): number
    on(sigName: "notify::scan-stepping", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scan-stepping", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scan-stepping", ...args: any[]): void
    connect(sigName: "notify::scan-selected", callback: (...args: any[]) => void): number
    on(sigName: "notify::scan-selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scan-selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scan-selected", ...args: any[]): void
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

export class IScannableItem {

    // Own properties of Caribou-1.0.Caribou.IScannableItem

    static name: string

    // Constructors of Caribou-1.0.Caribou.IScannableItem

    constructor(config?: IScannableItem.ConstructorProperties) 
    _init(config?: IScannableItem.ConstructorProperties): void
}

export module IScannableGroup {

    // Signal callback interfaces

    /**
     * Signal callback interface for `selected-item-changed`
     */
    export interface SelectedItemChangedSignalCallback {
        (selectedItem?: IScannableItem | null): void
    }

    /**
     * Signal callback interface for `step-item-changed`
     */
    export interface StepItemChangedSignalCallback {
        (stepItem?: IScannableItem | null): void
    }

    /**
     * Signal callback interface for `scan-cleared`
     */
    export interface ScanClearedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.IScannableGroup

        scanGrouping?: ScanGrouping | null
    }

}

export interface IScannableGroup extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.IScannableGroup

    scanGrouping: ScanGrouping
    __gtype__: number

    // Owm methods of Caribou-1.0.Caribou.IScannableGroup

    // Has conflict: childSelect(): IScannableItem | null
    // Has conflict: scanReset(): void
    // Has conflict: getScanChildren(): IScannableItem[]
    // Has conflict: childStep(cycles: number): IScannableItem | null
    // Has conflict: getStepPath(): IScannableItem[]
    // Has conflict: getSelectedPath(): IScannableItem[]
    // Has conflict: getScanGrouping(): ScanGrouping
    // Has conflict: setScanGrouping(value: ScanGrouping): void

    // Own virtual methods of Caribou-1.0.Caribou.IScannableGroup

    childSelect(): IScannableItem | null
    scanReset(): void
    getScanChildren(): IScannableItem[]
    childStep(cycles: number): IScannableItem | null
    getStepPath(): IScannableItem[]
    getSelectedPath(): IScannableItem[]
    getScanGrouping(): ScanGrouping
    setScanGrouping(value: ScanGrouping): void

    // Own signals of Caribou-1.0.Caribou.IScannableGroup

    connect(sigName: "selected-item-changed", callback: IScannableGroup.SelectedItemChangedSignalCallback): number
    on(sigName: "selected-item-changed", callback: IScannableGroup.SelectedItemChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selected-item-changed", callback: IScannableGroup.SelectedItemChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selected-item-changed", callback: IScannableGroup.SelectedItemChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "selected-item-changed", ...args: any[]): void
    connect(sigName: "step-item-changed", callback: IScannableGroup.StepItemChangedSignalCallback): number
    on(sigName: "step-item-changed", callback: IScannableGroup.StepItemChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "step-item-changed", callback: IScannableGroup.StepItemChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "step-item-changed", callback: IScannableGroup.StepItemChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "step-item-changed", ...args: any[]): void
    connect(sigName: "scan-cleared", callback: IScannableGroup.ScanClearedSignalCallback): number
    on(sigName: "scan-cleared", callback: IScannableGroup.ScanClearedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scan-cleared", callback: IScannableGroup.ScanClearedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scan-cleared", callback: IScannableGroup.ScanClearedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "scan-cleared", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.IScannableGroup

    connect(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): number
    on(sigName: "notify::scan-grouping", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scan-grouping", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scan-grouping", ...args: any[]): void
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

export class IScannableGroup {

    // Own properties of Caribou-1.0.Caribou.IScannableGroup

    static name: string

    // Constructors of Caribou-1.0.Caribou.IScannableGroup

    constructor(config?: IScannableGroup.ConstructorProperties) 
    _init(config?: IScannableGroup.ConstructorProperties): void
}

export module IKeyboardObject {

    // Signal callback interfaces

    /**
     * Signal callback interface for `key-clicked`
     */
    export interface KeyClickedSignalCallback {
        (key: KeyModel): void
    }

    /**
     * Signal callback interface for `key-pressed`
     */
    export interface KeyPressedSignalCallback {
        (key: KeyModel): void
    }

    /**
     * Signal callback interface for `key-released`
     */
    export interface KeyReleasedSignalCallback {
        (key: KeyModel): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface IKeyboardObject extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.IKeyboardObject

    __gtype__: number

    // Owm methods of Caribou-1.0.Caribou.IKeyboardObject

    // Has conflict: getChildren(): IKeyboardObject[]
    // Has conflict: getKeys(): KeyModel[]

    // Own virtual methods of Caribou-1.0.Caribou.IKeyboardObject

    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]

    // Own signals of Caribou-1.0.Caribou.IKeyboardObject

    connect(sigName: "key-clicked", callback: IKeyboardObject.KeyClickedSignalCallback): number
    on(sigName: "key-clicked", callback: IKeyboardObject.KeyClickedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: IKeyboardObject.KeyClickedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: IKeyboardObject.KeyClickedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "key-clicked", ...args: any[]): void
    connect(sigName: "key-pressed", callback: IKeyboardObject.KeyPressedSignalCallback): number
    on(sigName: "key-pressed", callback: IKeyboardObject.KeyPressedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: IKeyboardObject.KeyPressedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: IKeyboardObject.KeyPressedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "key-pressed", ...args: any[]): void
    connect(sigName: "key-released", callback: IKeyboardObject.KeyReleasedSignalCallback): number
    on(sigName: "key-released", callback: IKeyboardObject.KeyReleasedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-released", callback: IKeyboardObject.KeyReleasedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-released", callback: IKeyboardObject.KeyReleasedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "key-released", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.IKeyboardObject

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

export class IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.IKeyboardObject

    static name: string

    // Constructors of Caribou-1.0.Caribou.IKeyboardObject

    constructor(config?: IKeyboardObject.ConstructorProperties) 
    _init(config?: IKeyboardObject.ConstructorProperties): void
}

export module DisplayAdapter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `modifiers-changed`
     */
    export interface ModifiersChangedSignalCallback {
        (modifiers: number): void
    }

    /**
     * Signal callback interface for `group-changed`
     */
    export interface GroupChangedSignalCallback {
        (gid: number, group: string | null, variant: string | null): void
    }

    /**
     * Signal callback interface for `config-changed`
     */
    export interface ConfigChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.DisplayAdapter

        display?: Gdk.Display | null
    }

}

export interface DisplayAdapter {

    // Own properties of Caribou-1.0.Caribou.DisplayAdapter

    readonly display: Gdk.Display
    __gtype__: number

    // Owm methods of Caribou-1.0.Caribou.DisplayAdapter

    // Has conflict: keyvalPress(keyval: number): void
    // Has conflict: keyvalRelease(keyval: number): void
    // Has conflict: modLock(mask: number): void
    // Has conflict: modUnlock(mask: number): void
    // Has conflict: modLatch(mask: number): void
    // Has conflict: modUnlatch(mask: number): void
    // Has conflict: getCurrentGroup(): [ /* returnType */ number, /* groupName */ string | null, /* variantName */ string | null ]
    // Has conflict: getGroups(): [ /* groupNames */ string[], /* variantNames */ string[] ]
    // Has conflict: registerKeyFunc(keyval: number, func?: KeyButtonCallback | null): void
    // Has conflict: registerButtonFunc(button: number, func?: KeyButtonCallback | null): void
    getDisplay(): Gdk.Display

    // Own virtual methods of Caribou-1.0.Caribou.DisplayAdapter

    keyvalPress(keyval: number): void
    keyvalRelease(keyval: number): void
    modLock(mask: number): void
    modUnlock(mask: number): void
    modLatch(mask: number): void
    modUnlatch(mask: number): void
    getCurrentGroup(): [ /* returnType */ number, /* groupName */ string | null, /* variantName */ string | null ]
    getGroups(): [ /* groupNames */ string[], /* variantNames */ string[] ]
    registerKeyFunc(keyval: number, func?: KeyButtonCallback | null): void
    registerButtonFunc(button: number, func?: KeyButtonCallback | null): void

    // Own signals of Caribou-1.0.Caribou.DisplayAdapter

    connect(sigName: "modifiers-changed", callback: DisplayAdapter.ModifiersChangedSignalCallback): number
    on(sigName: "modifiers-changed", callback: DisplayAdapter.ModifiersChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "modifiers-changed", callback: DisplayAdapter.ModifiersChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "modifiers-changed", callback: DisplayAdapter.ModifiersChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "modifiers-changed", ...args: any[]): void
    connect(sigName: "group-changed", callback: DisplayAdapter.GroupChangedSignalCallback): number
    on(sigName: "group-changed", callback: DisplayAdapter.GroupChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-changed", callback: DisplayAdapter.GroupChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-changed", callback: DisplayAdapter.GroupChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "group-changed", group: string | null, variant: string | null, ...args: any[]): void
    connect(sigName: "config-changed", callback: DisplayAdapter.ConfigChangedSignalCallback): number
    on(sigName: "config-changed", callback: DisplayAdapter.ConfigChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "config-changed", callback: DisplayAdapter.ConfigChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "config-changed", callback: DisplayAdapter.ConfigChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "config-changed", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.DisplayAdapter

    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
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

export class DisplayAdapter extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.DisplayAdapter

    static name: string

    // Constructors of Caribou-1.0.Caribou.DisplayAdapter

    constructor(config?: DisplayAdapter.ConstructorProperties) 
    _init(config?: DisplayAdapter.ConstructorProperties): void
    static setDefault(adapter: DisplayAdapter): boolean
    static getDefault(): DisplayAdapter
}

export module NullAdapter {

    // Constructor properties interface

    export interface ConstructorProperties extends DisplayAdapter.ConstructorProperties {
    }

}

export interface NullAdapter {

    // Own properties of Caribou-1.0.Caribou.NullAdapter

    __gtype__: number

    // Class property signals of Caribou-1.0.Caribou.NullAdapter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class NullAdapter extends DisplayAdapter {

    // Own properties of Caribou-1.0.Caribou.NullAdapter

    static name: string

    // Constructors of Caribou-1.0.Caribou.NullAdapter

    constructor(config?: NullAdapter.ConstructorProperties) 
    constructor() 
    static new(): NullAdapter
    _init(config?: NullAdapter.ConstructorProperties): void
}

export module XAdapter {

    // Constructor properties interface

    export interface ConstructorProperties extends DisplayAdapter.ConstructorProperties {
    }

}

export interface XAdapter {

    // Own properties of Caribou-1.0.Caribou.XAdapter

    __gtype__: number

    // Class property signals of Caribou-1.0.Caribou.XAdapter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class XAdapter extends DisplayAdapter {

    // Own properties of Caribou-1.0.Caribou.XAdapter

    static name: string

    // Constructors of Caribou-1.0.Caribou.XAdapter

    constructor(config?: XAdapter.ConstructorProperties) 
    constructor() 
    static new(): XAdapter
    _init(config?: XAdapter.ConstructorProperties): void
}

export module KeyboardModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `group-added`
     */
    export interface GroupAddedSignalCallback {
        (name: string | null): void
    }

    /**
     * Signal callback interface for `group-removed`
     */
    export interface GroupRemovedSignalCallback {
        (name: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends IKeyboardObject.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.KeyboardModel

        activeGroup?: string | null
        keyboardType?: string | null
        keyboardFile?: string | null
    }

}

export interface KeyboardModel extends IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.KeyboardModel

    activeGroup: string | null
    readonly keyboardType: string | null
    readonly keyboardFile: string | null
    __gtype__: number

    // Owm methods of Caribou-1.0.Caribou.KeyboardModel

    getGroups(): string[]
    getGroup(groupName: string | null): GroupModel
    getActiveGroup(): string | null
    getKeyboardType(): string | null
    getKeyboardFile(): string | null

    // Own signals of Caribou-1.0.Caribou.KeyboardModel

    connect(sigName: "group-added", callback: KeyboardModel.GroupAddedSignalCallback): number
    on(sigName: "group-added", callback: KeyboardModel.GroupAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-added", callback: KeyboardModel.GroupAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-added", callback: KeyboardModel.GroupAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "group-added", ...args: any[]): void
    connect(sigName: "group-removed", callback: KeyboardModel.GroupRemovedSignalCallback): number
    on(sigName: "group-removed", callback: KeyboardModel.GroupRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-removed", callback: KeyboardModel.GroupRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-removed", callback: KeyboardModel.GroupRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "group-removed", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.KeyboardModel

    connect(sigName: "notify::active-group", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-group", ...args: any[]): void
    connect(sigName: "notify::keyboard-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::keyboard-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::keyboard-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::keyboard-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::keyboard-type", ...args: any[]): void
    connect(sigName: "notify::keyboard-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::keyboard-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::keyboard-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::keyboard-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::keyboard-file", ...args: any[]): void
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

export class KeyboardModel extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.KeyboardModel

    static name: string

    // Constructors of Caribou-1.0.Caribou.KeyboardModel

    constructor(config?: KeyboardModel.ConstructorProperties) 
    constructor() 
    static new(): KeyboardModel
    _init(config?: KeyboardModel.ConstructorProperties): void
}

export module KeyboardService {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface KeyboardService {

    // Own properties of Caribou-1.0.Caribou.KeyboardService

    __gtype__: number

    // Owm methods of Caribou-1.0.Caribou.KeyboardService

    // Has conflict: setCursorLocation(x: number, y: number, w: number, h: number): void
    // Has conflict: setEntryLocation(x: number, y: number, w: number, h: number): void
    // Has conflict: show(timestamp: number): void
    // Has conflict: hide(timestamp: number): void
    registerKeyboard(name: string | null): void
    // Has conflict: nameLost(name: string | null): void

    // Own virtual methods of Caribou-1.0.Caribou.KeyboardService

    setCursorLocation(x: number, y: number, w: number, h: number): void
    setEntryLocation(x: number, y: number, w: number, h: number): void
    show(timestamp: number): void
    hide(timestamp: number): void
    nameLost(name: string | null): void

    // Class property signals of Caribou-1.0.Caribou.KeyboardService

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

export class KeyboardService extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.KeyboardService

    static name: string

    // Constructors of Caribou-1.0.Caribou.KeyboardService

    constructor(config?: KeyboardService.ConstructorProperties) 
    _init(config?: KeyboardService.ConstructorProperties): void
}

export module GroupModel {

    // Constructor properties interface

    export interface ConstructorProperties extends IKeyboardObject.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.GroupModel

        activeLevel?: string | null
    }

}

export interface GroupModel extends IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.GroupModel

    activeLevel: string | null
    __gtype__: number

    // Own fields of Caribou-1.0.Caribou.GroupModel

    group: string | null
    variant: string | null

    // Owm methods of Caribou-1.0.Caribou.GroupModel

    getLevels(): string[]
    getLevel(levelName: string | null): LevelModel
    getActiveLevel(): string | null

    // Class property signals of Caribou-1.0.Caribou.GroupModel

    connect(sigName: "notify::active-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-level", ...args: any[]): void
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

export class GroupModel extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.GroupModel

    static name: string

    // Constructors of Caribou-1.0.Caribou.GroupModel

    constructor(config?: GroupModel.ConstructorProperties) 
    constructor(group: string | null, variant: string | null) 
    static new(group: string | null, variant: string | null): GroupModel
    _init(config?: GroupModel.ConstructorProperties): void
    static createGroupName(group: string | null, variant: string | null): string | null
}

export module LevelModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `level-toggled`
     */
    export interface LevelToggledSignalCallback {
        (newLevel: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends IKeyboardObject.ConstructorProperties, ScannableGroup.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.LevelModel

        mode?: string | null
    }

}

export interface LevelModel extends IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.LevelModel

    mode: string | null
    __gtype__: number

    // Owm methods of Caribou-1.0.Caribou.LevelModel

    getRows(): RowModel[]
    getMode(): string | null

    // Conflicting methods

    getScanChildren(): IScannableItem[]

    // Overloads of getScanChildren

    getScanChildren(): IScannableItem[]
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null

    // Overloads of childSelect

    childSelect(): IScannableItem | null
    childSelect(): IScannableItem | null

    // Own signals of Caribou-1.0.Caribou.LevelModel

    connect(sigName: "level-toggled", callback: LevelModel.LevelToggledSignalCallback): number
    on(sigName: "level-toggled", callback: LevelModel.LevelToggledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "level-toggled", callback: LevelModel.LevelToggledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "level-toggled", callback: LevelModel.LevelToggledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "level-toggled", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.LevelModel

    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
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

export class LevelModel extends ScannableGroup {

    // Own properties of Caribou-1.0.Caribou.LevelModel

    static name: string

    // Constructors of Caribou-1.0.Caribou.LevelModel

    constructor(config?: LevelModel.ConstructorProperties) 
    constructor(mode: string | null) 
    static new(mode: string | null): LevelModel
    _init(config?: LevelModel.ConstructorProperties): void
}

export module RowModel {

    // Constructor properties interface

    export interface ConstructorProperties extends IScannableItem.ConstructorProperties, IKeyboardObject.ConstructorProperties, ScannableGroup.ConstructorProperties {
    }

}

export interface RowModel extends IScannableItem, IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.RowModel

    __gtype__: number

    // Owm methods of Caribou-1.0.Caribou.RowModel

    getColumns(): ColumnModel[]

    // Conflicting methods

    getScanChildren(): IScannableItem[]

    // Overloads of getScanChildren

    getScanChildren(): IScannableItem[]
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null

    // Overloads of childSelect

    childSelect(): IScannableItem | null
    childSelect(): IScannableItem | null

    // Class property signals of Caribou-1.0.Caribou.RowModel

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): number
    on(sigName: "notify::scan-stepping", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scan-stepping", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scan-stepping", ...args: any[]): void
    connect(sigName: "notify::scan-selected", callback: (...args: any[]) => void): number
    on(sigName: "notify::scan-selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scan-selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scan-selected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class RowModel extends ScannableGroup {

    // Own properties of Caribou-1.0.Caribou.RowModel

    static name: string

    // Constructors of Caribou-1.0.Caribou.RowModel

    constructor(config?: RowModel.ConstructorProperties) 
    constructor() 
    static new(): RowModel
    _init(config?: RowModel.ConstructorProperties): void
}

export module KeyModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `key-hold-end`
     */
    export interface KeyHoldEndSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `key-hold`
     */
    export interface KeyHoldSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends IScannableItem.ConstructorProperties, IKeyboardObject.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.KeyModel

        align?: string | null
        width?: number | null
        toggle?: string | null
        repeatable?: boolean | null
        isModifier?: boolean | null
        showSubkeys?: boolean | null
        name?: string | null
        keyval?: number | null
        text?: string | null
        label?: string | null
    }

}

export interface KeyModel extends IScannableItem, IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.KeyModel

    align: string | null
    width: number
    toggle: string | null
    repeatable: boolean
    isModifier: boolean
    showSubkeys: boolean
    name: string | null
    keyval: number
    text: string | null
    label: string | null
    __gtype__: number

    // Own fields of Caribou-1.0.Caribou.KeyModel

    modifierState: ModifierState

    // Owm methods of Caribou-1.0.Caribou.KeyModel

    press(): void
    release(): void
    getExtendedKeys(): KeyModel[]
    activate(): void
    getAlign(): string | null
    setAlign(value: string | null): void
    getWidth(): number
    setWidth(value: number): void
    getToggle(): string | null
    setToggle(value: string | null): void
    getRepeatable(): boolean
    setRepeatable(value: boolean): void
    getIsModifier(): boolean
    setIsModifier(value: boolean): void
    getShowSubkeys(): boolean
    getName(): string | null
    getKeyval(): number
    getText(): string | null
    getLabel(): string | null
    setLabel(value: string | null): void

    // Own signals of Caribou-1.0.Caribou.KeyModel

    connect(sigName: "key-hold-end", callback: KeyModel.KeyHoldEndSignalCallback): number
    on(sigName: "key-hold-end", callback: KeyModel.KeyHoldEndSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-hold-end", callback: KeyModel.KeyHoldEndSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-hold-end", callback: KeyModel.KeyHoldEndSignalCallback): NodeJS.EventEmitter
    emit(sigName: "key-hold-end", ...args: any[]): void
    connect(sigName: "key-hold", callback: KeyModel.KeyHoldSignalCallback): number
    on(sigName: "key-hold", callback: KeyModel.KeyHoldSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-hold", callback: KeyModel.KeyHoldSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-hold", callback: KeyModel.KeyHoldSignalCallback): NodeJS.EventEmitter
    emit(sigName: "key-hold", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.KeyModel

    connect(sigName: "notify::align", callback: (...args: any[]) => void): number
    on(sigName: "notify::align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::align", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::toggle", callback: (...args: any[]) => void): number
    on(sigName: "notify::toggle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::toggle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::toggle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::toggle", ...args: any[]): void
    connect(sigName: "notify::repeatable", callback: (...args: any[]) => void): number
    on(sigName: "notify::repeatable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::repeatable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::repeatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::repeatable", ...args: any[]): void
    connect(sigName: "notify::is-modifier", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-modifier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-modifier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-modifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-modifier", ...args: any[]): void
    connect(sigName: "notify::show-subkeys", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-subkeys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-subkeys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-subkeys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-subkeys", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::keyval", callback: (...args: any[]) => void): number
    on(sigName: "notify::keyval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::keyval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::keyval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::keyval", ...args: any[]): void
    connect(sigName: "notify::text", callback: (...args: any[]) => void): number
    on(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::label", callback: (...args: any[]) => void): number
    on(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): number
    on(sigName: "notify::scan-stepping", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scan-stepping", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scan-stepping", ...args: any[]): void
    connect(sigName: "notify::scan-selected", callback: (...args: any[]) => void): number
    on(sigName: "notify::scan-selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scan-selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scan-selected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class KeyModel extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.KeyModel

    static name: string

    // Constructors of Caribou-1.0.Caribou.KeyModel

    constructor(config?: KeyModel.ConstructorProperties) 
    constructor(name: string | null, text?: string | null) 
    static new(name: string | null, text?: string | null): KeyModel
    _init(config?: KeyModel.ConstructorProperties): void
}

export module ColumnModel {

    // Constructor properties interface

    export interface ConstructorProperties extends IScannableItem.ConstructorProperties, IKeyboardObject.ConstructorProperties, ScannableGroup.ConstructorProperties {
    }

}

export interface ColumnModel extends IScannableItem, IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.ColumnModel

    __gtype__: number

    // Owm methods of Caribou-1.0.Caribou.ColumnModel

    getKey(index: number): KeyModel
    firstKey(): KeyModel

    // Conflicting methods

    getScanChildren(): IScannableItem[]

    // Overloads of getScanChildren

    getScanChildren(): IScannableItem[]
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null

    // Overloads of childSelect

    childSelect(): IScannableItem | null
    childSelect(): IScannableItem | null

    // Class property signals of Caribou-1.0.Caribou.ColumnModel

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): number
    on(sigName: "notify::scan-stepping", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scan-stepping", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scan-stepping", ...args: any[]): void
    connect(sigName: "notify::scan-selected", callback: (...args: any[]) => void): number
    on(sigName: "notify::scan-selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scan-selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scan-selected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ColumnModel extends ScannableGroup {

    // Own properties of Caribou-1.0.Caribou.ColumnModel

    static name: string

    // Constructors of Caribou-1.0.Caribou.ColumnModel

    constructor(config?: ColumnModel.ConstructorProperties) 
    constructor() 
    static new(): ColumnModel
    _init(config?: ColumnModel.ConstructorProperties): void
}

export module Scanner {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.Scanner

        bindSettings?: boolean | null
        scanGrouping?: number | null
        scanEnabled?: boolean | null
        stepTime?: number | null
        switchDevice?: string | null
        keyboardKey?: string | null
        mouseButton?: number | null
        scanCycles?: number | null
        autorestart?: boolean | null
        inverseScanning?: boolean | null
    }

}

export interface Scanner {

    // Own properties of Caribou-1.0.Caribou.Scanner

    readonly bindSettings: boolean
    scanGrouping: number
    scanEnabled: boolean
    stepTime: number
    switchDevice: string | null
    keyboardKey: string | null
    mouseButton: number
    scanCycles: number
    autorestart: boolean
    inverseScanning: boolean
    __gtype__: number

    // Owm methods of Caribou-1.0.Caribou.Scanner

    setKeyboard(keyboard: KeyboardModel): void
    reset(): void
    getBindSettings(): boolean
    getScanGrouping(): number
    setScanGrouping(value: number): void
    getScanEnabled(): boolean
    setScanEnabled(value: boolean): void
    getStepTime(): number
    setStepTime(value: number): void
    getSwitchDevice(): string | null
    setSwitchDevice(value: string | null): void
    getKeyboardKey(): string | null
    setKeyboardKey(value: string | null): void
    getMouseButton(): number
    setMouseButton(value: number): void
    getScanCycles(): number
    setScanCycles(value: number): void
    getAutorestart(): boolean
    setAutorestart(value: boolean): void
    getInverseScanning(): boolean
    setInverseScanning(value: boolean): void

    // Class property signals of Caribou-1.0.Caribou.Scanner

    connect(sigName: "notify::bind-settings", callback: (...args: any[]) => void): number
    on(sigName: "notify::bind-settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bind-settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bind-settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bind-settings", ...args: any[]): void
    connect(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): number
    on(sigName: "notify::scan-grouping", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scan-grouping", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scan-grouping", ...args: any[]): void
    connect(sigName: "notify::scan-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::scan-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scan-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scan-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scan-enabled", ...args: any[]): void
    connect(sigName: "notify::step-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::step-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::step-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::step-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::step-time", ...args: any[]): void
    connect(sigName: "notify::switch-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::switch-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::switch-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::switch-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::switch-device", ...args: any[]): void
    connect(sigName: "notify::keyboard-key", callback: (...args: any[]) => void): number
    on(sigName: "notify::keyboard-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::keyboard-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::keyboard-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::keyboard-key", ...args: any[]): void
    connect(sigName: "notify::mouse-button", callback: (...args: any[]) => void): number
    on(sigName: "notify::mouse-button", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mouse-button", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mouse-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mouse-button", ...args: any[]): void
    connect(sigName: "notify::scan-cycles", callback: (...args: any[]) => void): number
    on(sigName: "notify::scan-cycles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scan-cycles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scan-cycles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scan-cycles", ...args: any[]): void
    connect(sigName: "notify::autorestart", callback: (...args: any[]) => void): number
    on(sigName: "notify::autorestart", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autorestart", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autorestart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autorestart", ...args: any[]): void
    connect(sigName: "notify::inverse-scanning", callback: (...args: any[]) => void): number
    on(sigName: "notify::inverse-scanning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::inverse-scanning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::inverse-scanning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::inverse-scanning", ...args: any[]): void
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

export class Scanner extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.Scanner

    static name: string

    // Constructors of Caribou-1.0.Caribou.Scanner

    constructor(config?: Scanner.ConstructorProperties) 
    constructor() 
    static new(): Scanner
    _init(config?: Scanner.ConstructorProperties): void
}

export module ScannableGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends IScannableGroup.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface ScannableGroup extends IScannableGroup {

    // Own properties of Caribou-1.0.Caribou.ScannableGroup

    __gtype__: number

    // Owm methods of Caribou-1.0.Caribou.ScannableGroup

    // Has conflict: getScanChildren(): IScannableItem[]
    // Has conflict: childSelect(): IScannableItem | null

    // Own virtual methods of Caribou-1.0.Caribou.ScannableGroup

    getScanChildren(): IScannableItem[]

    // Overloads of getScanChildren

    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null

    // Overloads of childSelect

    childSelect(): IScannableItem | null

    // Class property signals of Caribou-1.0.Caribou.ScannableGroup

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): number
    on(sigName: "notify::scan-grouping", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scan-grouping", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scan-grouping", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ScannableGroup extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.ScannableGroup

    static name: string

    // Constructors of Caribou-1.0.Caribou.ScannableGroup

    constructor(config?: ScannableGroup.ConstructorProperties) 
    _init(config?: ScannableGroup.ConstructorProperties): void
}

export interface DisplayAdapterClass {

    // Own fields of Caribou-1.0.Caribou.DisplayAdapterClass

    keyvalPress: (keyval: number) => void
    keyvalRelease: (keyval: number) => void
    modLock: (mask: number) => void
    modUnlock: (mask: number) => void
    modLatch: (mask: number) => void
    modUnlatch: (mask: number) => void
    getCurrentGroup: () => [ /* returnType */ number, /* groupName */ string | null, /* variantName */ string | null ]
    getGroups: () => [ /* groupNames */ string[], /* variantNames */ string[] ]
    registerKeyFunc: (keyval: number, func?: KeyButtonCallback | null) => void
    registerButtonFunc: (button: number, func?: KeyButtonCallback | null) => void
}

export abstract class DisplayAdapterClass {

    // Own properties of Caribou-1.0.Caribou.DisplayAdapterClass

    static name: string
}

export interface DisplayAdapterPrivate {
}

export class DisplayAdapterPrivate {

    // Own properties of Caribou-1.0.Caribou.DisplayAdapterPrivate

    static name: string
}

export interface NullAdapterClass {
}

export abstract class NullAdapterClass {

    // Own properties of Caribou-1.0.Caribou.NullAdapterClass

    static name: string
}

export interface NullAdapterPrivate {
}

export class NullAdapterPrivate {

    // Own properties of Caribou-1.0.Caribou.NullAdapterPrivate

    static name: string
}

export interface XAdapterClass {
}

export abstract class XAdapterClass {

    // Own properties of Caribou-1.0.Caribou.XAdapterClass

    static name: string
}

export interface XAdapterPrivate {
}

export class XAdapterPrivate {

    // Own properties of Caribou-1.0.Caribou.XAdapterPrivate

    static name: string
}

export interface KeyboardModelClass {
}

export abstract class KeyboardModelClass {

    // Own properties of Caribou-1.0.Caribou.KeyboardModelClass

    static name: string
}

export interface KeyboardModelPrivate {
}

export class KeyboardModelPrivate {

    // Own properties of Caribou-1.0.Caribou.KeyboardModelPrivate

    static name: string
}

export interface KeyboardServiceClass {

    // Own fields of Caribou-1.0.Caribou.KeyboardServiceClass

    setCursorLocation: (x: number, y: number, w: number, h: number) => void
    setEntryLocation: (x: number, y: number, w: number, h: number) => void
    show: (timestamp: number) => void
    hide: (timestamp: number) => void
    nameLost: (name: string | null) => void
}

export abstract class KeyboardServiceClass {

    // Own properties of Caribou-1.0.Caribou.KeyboardServiceClass

    static name: string
}

export interface KeyboardServicePrivate {
}

export class KeyboardServicePrivate {

    // Own properties of Caribou-1.0.Caribou.KeyboardServicePrivate

    static name: string
}

export interface GroupModelClass {
}

export abstract class GroupModelClass {

    // Own properties of Caribou-1.0.Caribou.GroupModelClass

    static name: string
}

export interface GroupModelPrivate {
}

export class GroupModelPrivate {

    // Own properties of Caribou-1.0.Caribou.GroupModelPrivate

    static name: string
}

export interface LevelModelClass {
}

export abstract class LevelModelClass {

    // Own properties of Caribou-1.0.Caribou.LevelModelClass

    static name: string
}

export interface LevelModelPrivate {
}

export class LevelModelPrivate {

    // Own properties of Caribou-1.0.Caribou.LevelModelPrivate

    static name: string
}

export interface RowModelClass {
}

export abstract class RowModelClass {

    // Own properties of Caribou-1.0.Caribou.RowModelClass

    static name: string
}

export interface RowModelPrivate {
}

export class RowModelPrivate {

    // Own properties of Caribou-1.0.Caribou.RowModelPrivate

    static name: string
}

export interface KeyModelClass {
}

export abstract class KeyModelClass {

    // Own properties of Caribou-1.0.Caribou.KeyModelClass

    static name: string
}

export interface KeyModelPrivate {
}

export class KeyModelPrivate {

    // Own properties of Caribou-1.0.Caribou.KeyModelPrivate

    static name: string
}

export interface ColumnModelClass {
}

export abstract class ColumnModelClass {

    // Own properties of Caribou-1.0.Caribou.ColumnModelClass

    static name: string
}

export interface ColumnModelPrivate {
}

export class ColumnModelPrivate {

    // Own properties of Caribou-1.0.Caribou.ColumnModelPrivate

    static name: string
}

export interface ScannerClass {
}

export abstract class ScannerClass {

    // Own properties of Caribou-1.0.Caribou.ScannerClass

    static name: string
}

export interface ScannerPrivate {
}

export class ScannerPrivate {

    // Own properties of Caribou-1.0.Caribou.ScannerPrivate

    static name: string
}

export interface ScannableGroupClass {

    // Own fields of Caribou-1.0.Caribou.ScannableGroupClass

    getScanChildren: () => IScannableItem[]
    childSelect: () => IScannableItem | null
}

export abstract class ScannableGroupClass {

    // Own properties of Caribou-1.0.Caribou.ScannableGroupClass

    static name: string
}

export interface ScannableGroupPrivate {
}

export class ScannableGroupPrivate {

    // Own properties of Caribou-1.0.Caribou.ScannableGroupPrivate

    static name: string
}

export interface IScannableItemIface {

    // Own fields of Caribou-1.0.Caribou.IScannableItemIface

    getScanStepping: () => boolean
    setScanStepping: (value: boolean) => void
    getScanSelected: () => boolean
    setScanSelected: (value: boolean) => void
}

export abstract class IScannableItemIface {

    // Own properties of Caribou-1.0.Caribou.IScannableItemIface

    static name: string
}

export interface IScannableGroupIface {

    // Own fields of Caribou-1.0.Caribou.IScannableGroupIface

    childSelect: () => IScannableItem | null
    scanReset: () => void
    getScanChildren: () => IScannableItem[]
    childStep: (cycles: number) => IScannableItem | null
    getStepPath: () => IScannableItem[]
    getSelectedPath: () => IScannableItem[]
    getScanGrouping: () => ScanGrouping
    setScanGrouping: (value: ScanGrouping) => void
}

export abstract class IScannableGroupIface {

    // Own properties of Caribou-1.0.Caribou.IScannableGroupIface

    static name: string
}

export interface IKeyboardObjectIface {

    // Own fields of Caribou-1.0.Caribou.IKeyboardObjectIface

    getChildren: () => IKeyboardObject[]
    getKeys: () => KeyModel[]
}

export abstract class IKeyboardObjectIface {

    // Own properties of Caribou-1.0.Caribou.IKeyboardObjectIface

    static name: string
}
