// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Caribou-1.0
 */

import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';

export namespace Caribou {

enum ModifierState {
    NONE,
    LATCHED,
    LOCKED,
}
enum ScanGrouping {
    NONE,
    SUBGROUPS,
    ROWS,
    LINEAR,
}
interface KeyButtonCallback {
    (keybuttoncode: number, pressed: boolean): void
}
interface IScannableItem_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Caribou-1.0.Caribou.IScannableItem

    scanStepping?: boolean | null
    scanSelected?: boolean | null
}

interface IScannableItem extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.IScannableItem

    scanStepping: boolean
    scanSelected: boolean

    // Owm methods of Caribou-1.0.Caribou.IScannableItem

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class IScannableItem {

    // Own properties of Caribou-1.0.Caribou.IScannableItem

    static name: string
    static $gtype: GObject.GType<IScannableItem>

    // Constructors of Caribou-1.0.Caribou.IScannableItem

    constructor(config?: IScannableItem_ConstructProps) 
    _init(config?: IScannableItem_ConstructProps): void
}

interface IScannableGroup_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Caribou-1.0.Caribou.IScannableGroup

    scanGrouping?: ScanGrouping | null
}

/**
 * Signal callback interface for `selected-item-changed`
 */
interface IScannableGroup_SelectedItemChangedSignalCallback {
    (selectedItem?: IScannableItem | null): void
}

/**
 * Signal callback interface for `step-item-changed`
 */
interface IScannableGroup_StepItemChangedSignalCallback {
    (stepItem?: IScannableItem | null): void
}

/**
 * Signal callback interface for `scan-cleared`
 */
interface IScannableGroup_ScanClearedSignalCallback {
    (): void
}

interface IScannableGroup extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.IScannableGroup

    scanGrouping: ScanGrouping

    // Owm methods of Caribou-1.0.Caribou.IScannableGroup

    childSelect(): IScannableItem | null
    scanReset(): void
    getScanChildren(): IScannableItem[]
    childStep(cycles: number): IScannableItem | null
    getStepPath(): IScannableItem[]
    getSelectedPath(): IScannableItem[]
    getScanGrouping(): ScanGrouping
    setScanGrouping(value: ScanGrouping): void

    // Own signals of Caribou-1.0.Caribou.IScannableGroup

    connect(sigName: "selected-item-changed", callback: IScannableGroup_SelectedItemChangedSignalCallback): number
    on(sigName: "selected-item-changed", callback: IScannableGroup_SelectedItemChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selected-item-changed", callback: IScannableGroup_SelectedItemChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selected-item-changed", callback: IScannableGroup_SelectedItemChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "selected-item-changed", ...args: any[]): void
    connect(sigName: "step-item-changed", callback: IScannableGroup_StepItemChangedSignalCallback): number
    on(sigName: "step-item-changed", callback: IScannableGroup_StepItemChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "step-item-changed", callback: IScannableGroup_StepItemChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "step-item-changed", callback: IScannableGroup_StepItemChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "step-item-changed", ...args: any[]): void
    connect(sigName: "scan-cleared", callback: IScannableGroup_ScanClearedSignalCallback): number
    on(sigName: "scan-cleared", callback: IScannableGroup_ScanClearedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scan-cleared", callback: IScannableGroup_ScanClearedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scan-cleared", callback: IScannableGroup_ScanClearedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "scan-cleared", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.IScannableGroup

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

class IScannableGroup {

    // Own properties of Caribou-1.0.Caribou.IScannableGroup

    static name: string
    static $gtype: GObject.GType<IScannableGroup>

    // Constructors of Caribou-1.0.Caribou.IScannableGroup

    constructor(config?: IScannableGroup_ConstructProps) 
    _init(config?: IScannableGroup_ConstructProps): void
}

interface IKeyboardObject_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `key-clicked`
 */
interface IKeyboardObject_KeyClickedSignalCallback {
    (key: KeyModel): void
}

/**
 * Signal callback interface for `key-pressed`
 */
interface IKeyboardObject_KeyPressedSignalCallback {
    (key: KeyModel): void
}

/**
 * Signal callback interface for `key-released`
 */
interface IKeyboardObject_KeyReleasedSignalCallback {
    (key: KeyModel): void
}

interface IKeyboardObject extends GObject.Object {

    // Owm methods of Caribou-1.0.Caribou.IKeyboardObject

    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]

    // Own signals of Caribou-1.0.Caribou.IKeyboardObject

    connect(sigName: "key-clicked", callback: IKeyboardObject_KeyClickedSignalCallback): number
    on(sigName: "key-clicked", callback: IKeyboardObject_KeyClickedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: IKeyboardObject_KeyClickedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: IKeyboardObject_KeyClickedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "key-clicked", ...args: any[]): void
    connect(sigName: "key-pressed", callback: IKeyboardObject_KeyPressedSignalCallback): number
    on(sigName: "key-pressed", callback: IKeyboardObject_KeyPressedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: IKeyboardObject_KeyPressedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: IKeyboardObject_KeyPressedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "key-pressed", ...args: any[]): void
    connect(sigName: "key-released", callback: IKeyboardObject_KeyReleasedSignalCallback): number
    on(sigName: "key-released", callback: IKeyboardObject_KeyReleasedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-released", callback: IKeyboardObject_KeyReleasedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-released", callback: IKeyboardObject_KeyReleasedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "key-released", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.IKeyboardObject

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.IKeyboardObject

    static name: string
    static $gtype: GObject.GType<IKeyboardObject>

    // Constructors of Caribou-1.0.Caribou.IKeyboardObject

    constructor(config?: IKeyboardObject_ConstructProps) 
    _init(config?: IKeyboardObject_ConstructProps): void
}

interface DisplayAdapter_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Caribou-1.0.Caribou.DisplayAdapter

    display?: Gdk.Display | null
}

/**
 * Signal callback interface for `modifiers-changed`
 */
interface DisplayAdapter_ModifiersChangedSignalCallback {
    (modifiers: number): void
}

/**
 * Signal callback interface for `group-changed`
 */
interface DisplayAdapter_GroupChangedSignalCallback {
    (gid: number, group: string, variant: string): void
}

/**
 * Signal callback interface for `config-changed`
 */
interface DisplayAdapter_ConfigChangedSignalCallback {
    (): void
}

interface DisplayAdapter {

    // Own properties of Caribou-1.0.Caribou.DisplayAdapter

    readonly display: Gdk.Display

    // Owm methods of Caribou-1.0.Caribou.DisplayAdapter

    keyvalPress(keyval: number): void
    keyvalRelease(keyval: number): void
    modLock(mask: number): void
    modUnlock(mask: number): void
    modLatch(mask: number): void
    modUnlatch(mask: number): void
    getCurrentGroup(): [ /* returnType */ number, /* groupName */ string, /* variantName */ string ]
    getGroups(): [ /* groupNames */ string[], /* variantNames */ string[] ]
    registerKeyFunc(keyval: number, func?: KeyButtonCallback | null): void
    registerButtonFunc(button: number, func?: KeyButtonCallback | null): void
    getDisplay(): Gdk.Display

    // Own signals of Caribou-1.0.Caribou.DisplayAdapter

    connect(sigName: "modifiers-changed", callback: DisplayAdapter_ModifiersChangedSignalCallback): number
    on(sigName: "modifiers-changed", callback: DisplayAdapter_ModifiersChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "modifiers-changed", callback: DisplayAdapter_ModifiersChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "modifiers-changed", callback: DisplayAdapter_ModifiersChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "modifiers-changed", ...args: any[]): void
    connect(sigName: "group-changed", callback: DisplayAdapter_GroupChangedSignalCallback): number
    on(sigName: "group-changed", callback: DisplayAdapter_GroupChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-changed", callback: DisplayAdapter_GroupChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-changed", callback: DisplayAdapter_GroupChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "group-changed", group: string, variant: string, ...args: any[]): void
    connect(sigName: "config-changed", callback: DisplayAdapter_ConfigChangedSignalCallback): number
    on(sigName: "config-changed", callback: DisplayAdapter_ConfigChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "config-changed", callback: DisplayAdapter_ConfigChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "config-changed", callback: DisplayAdapter_ConfigChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "config-changed", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.DisplayAdapter

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

class DisplayAdapter extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.DisplayAdapter

    static name: string
    static $gtype: GObject.GType<DisplayAdapter>

    // Constructors of Caribou-1.0.Caribou.DisplayAdapter

    constructor(config?: DisplayAdapter_ConstructProps) 
    _init(config?: DisplayAdapter_ConstructProps): void
    static setDefault(adapter: DisplayAdapter): boolean
    static getDefault(): DisplayAdapter
}

interface NullAdapter_ConstructProps extends DisplayAdapter_ConstructProps {
}

interface NullAdapter {

    // Class property signals of Caribou-1.0.Caribou.NullAdapter

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

class NullAdapter extends DisplayAdapter {

    // Own properties of Caribou-1.0.Caribou.NullAdapter

    static name: string
    static $gtype: GObject.GType<NullAdapter>

    // Constructors of Caribou-1.0.Caribou.NullAdapter

    constructor(config?: NullAdapter_ConstructProps) 
    constructor() 
    static new(): NullAdapter
    _init(config?: NullAdapter_ConstructProps): void
}

interface XAdapter_ConstructProps extends DisplayAdapter_ConstructProps {
}

interface XAdapter {

    // Class property signals of Caribou-1.0.Caribou.XAdapter

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

class XAdapter extends DisplayAdapter {

    // Own properties of Caribou-1.0.Caribou.XAdapter

    static name: string
    static $gtype: GObject.GType<XAdapter>

    // Constructors of Caribou-1.0.Caribou.XAdapter

    constructor(config?: XAdapter_ConstructProps) 
    constructor() 
    static new(): XAdapter
    _init(config?: XAdapter_ConstructProps): void
}

interface KeyboardModel_ConstructProps extends IKeyboardObject_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Caribou-1.0.Caribou.KeyboardModel

    activeGroup?: string | null
    keyboardType?: string | null
    keyboardFile?: string | null
}

/**
 * Signal callback interface for `group-added`
 */
interface KeyboardModel_GroupAddedSignalCallback {
    (name: string): void
}

/**
 * Signal callback interface for `group-removed`
 */
interface KeyboardModel_GroupRemovedSignalCallback {
    (name: string): void
}

interface KeyboardModel extends IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.KeyboardModel

    activeGroup: string
    readonly keyboardType: string
    readonly keyboardFile: string

    // Owm methods of Caribou-1.0.Caribou.KeyboardModel

    getGroups(): string[]
    getGroup(groupName: string): GroupModel
    getActiveGroup(): string
    getKeyboardType(): string
    getKeyboardFile(): string

    // Own signals of Caribou-1.0.Caribou.KeyboardModel

    connect(sigName: "group-added", callback: KeyboardModel_GroupAddedSignalCallback): number
    on(sigName: "group-added", callback: KeyboardModel_GroupAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-added", callback: KeyboardModel_GroupAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-added", callback: KeyboardModel_GroupAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "group-added", ...args: any[]): void
    connect(sigName: "group-removed", callback: KeyboardModel_GroupRemovedSignalCallback): number
    on(sigName: "group-removed", callback: KeyboardModel_GroupRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-removed", callback: KeyboardModel_GroupRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-removed", callback: KeyboardModel_GroupRemovedSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class KeyboardModel extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.KeyboardModel

    static name: string
    static $gtype: GObject.GType<KeyboardModel>

    // Constructors of Caribou-1.0.Caribou.KeyboardModel

    constructor(config?: KeyboardModel_ConstructProps) 
    constructor() 
    static new(): KeyboardModel
    _init(config?: KeyboardModel_ConstructProps): void
}

interface KeyboardService_ConstructProps extends GObject.Object_ConstructProps {
}

interface KeyboardService {

    // Owm methods of Caribou-1.0.Caribou.KeyboardService

    setCursorLocation(x: number, y: number, w: number, h: number): void
    setEntryLocation(x: number, y: number, w: number, h: number): void
    show(timestamp: number): void
    hide(timestamp: number): void
    registerKeyboard(name: string): void
    nameLost(name: string): void

    // Class property signals of Caribou-1.0.Caribou.KeyboardService

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class KeyboardService extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.KeyboardService

    static name: string
    static $gtype: GObject.GType<KeyboardService>

    // Constructors of Caribou-1.0.Caribou.KeyboardService

    constructor(config?: KeyboardService_ConstructProps) 
    _init(config?: KeyboardService_ConstructProps): void
}

interface GroupModel_ConstructProps extends IKeyboardObject_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Caribou-1.0.Caribou.GroupModel

    activeLevel?: string | null
}

interface GroupModel extends IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.GroupModel

    activeLevel: string

    // Own fields of Caribou-1.0.Caribou.GroupModel

    group: string
    variant: string

    // Owm methods of Caribou-1.0.Caribou.GroupModel

    getLevels(): string[]
    getLevel(levelName: string): LevelModel
    getActiveLevel(): string

    // Class property signals of Caribou-1.0.Caribou.GroupModel

    connect(sigName: "notify::active-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GroupModel extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.GroupModel

    static name: string
    static $gtype: GObject.GType<GroupModel>

    // Constructors of Caribou-1.0.Caribou.GroupModel

    constructor(config?: GroupModel_ConstructProps) 
    constructor(group: string, variant: string) 
    static new(group: string, variant: string): GroupModel
    _init(config?: GroupModel_ConstructProps): void
    static createGroupName(group: string, variant: string): string
}

interface LevelModel_ConstructProps extends IKeyboardObject_ConstructProps, ScannableGroup_ConstructProps {

    // Own constructor properties of Caribou-1.0.Caribou.LevelModel

    mode?: string | null
}

/**
 * Signal callback interface for `level-toggled`
 */
interface LevelModel_LevelToggledSignalCallback {
    (newLevel: string): void
}

interface LevelModel extends IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.LevelModel

    mode: string

    // Owm methods of Caribou-1.0.Caribou.LevelModel

    getRows(): RowModel[]
    getMode(): string

    // Own signals of Caribou-1.0.Caribou.LevelModel

    connect(sigName: "level-toggled", callback: LevelModel_LevelToggledSignalCallback): number
    on(sigName: "level-toggled", callback: LevelModel_LevelToggledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "level-toggled", callback: LevelModel_LevelToggledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "level-toggled", callback: LevelModel_LevelToggledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "level-toggled", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.LevelModel

    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class LevelModel extends ScannableGroup {

    // Own properties of Caribou-1.0.Caribou.LevelModel

    static name: string
    static $gtype: GObject.GType<LevelModel>

    // Constructors of Caribou-1.0.Caribou.LevelModel

    constructor(config?: LevelModel_ConstructProps) 
    constructor(mode: string) 
    static new(mode: string): LevelModel
    _init(config?: LevelModel_ConstructProps): void
}

interface RowModel_ConstructProps extends IScannableItem_ConstructProps, IKeyboardObject_ConstructProps, ScannableGroup_ConstructProps {
}

interface RowModel extends IScannableItem, IKeyboardObject {

    // Owm methods of Caribou-1.0.Caribou.RowModel

    getColumns(): ColumnModel[]

    // Class property signals of Caribou-1.0.Caribou.RowModel

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

class RowModel extends ScannableGroup {

    // Own properties of Caribou-1.0.Caribou.RowModel

    static name: string
    static $gtype: GObject.GType<RowModel>

    // Constructors of Caribou-1.0.Caribou.RowModel

    constructor(config?: RowModel_ConstructProps) 
    constructor() 
    static new(): RowModel
    _init(config?: RowModel_ConstructProps): void
}

interface KeyModel_ConstructProps extends IScannableItem_ConstructProps, IKeyboardObject_ConstructProps, GObject.Object_ConstructProps {

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

/**
 * Signal callback interface for `key-hold-end`
 */
interface KeyModel_KeyHoldEndSignalCallback {
    (): void
}

/**
 * Signal callback interface for `key-hold`
 */
interface KeyModel_KeyHoldSignalCallback {
    (): void
}

interface KeyModel extends IScannableItem, IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.KeyModel

    align: string
    width: number
    toggle: string
    repeatable: boolean
    isModifier: boolean
    showSubkeys: boolean
    name: string
    keyval: number
    text: string
    label: string

    // Own fields of Caribou-1.0.Caribou.KeyModel

    modifierState: ModifierState

    // Owm methods of Caribou-1.0.Caribou.KeyModel

    press(): void
    release(): void
    getExtendedKeys(): KeyModel[]
    activate(): void
    getAlign(): string
    setAlign(value: string): void
    getWidth(): number
    setWidth(value: number): void
    getToggle(): string
    setToggle(value: string): void
    getRepeatable(): boolean
    setRepeatable(value: boolean): void
    getIsModifier(): boolean
    setIsModifier(value: boolean): void
    getShowSubkeys(): boolean
    getName(): string
    getKeyval(): number
    getText(): string | null
    getLabel(): string
    setLabel(value: string): void

    // Own signals of Caribou-1.0.Caribou.KeyModel

    connect(sigName: "key-hold-end", callback: KeyModel_KeyHoldEndSignalCallback): number
    on(sigName: "key-hold-end", callback: KeyModel_KeyHoldEndSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-hold-end", callback: KeyModel_KeyHoldEndSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-hold-end", callback: KeyModel_KeyHoldEndSignalCallback): NodeJS.EventEmitter
    emit(sigName: "key-hold-end", ...args: any[]): void
    connect(sigName: "key-hold", callback: KeyModel_KeyHoldSignalCallback): number
    on(sigName: "key-hold", callback: KeyModel_KeyHoldSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-hold", callback: KeyModel_KeyHoldSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-hold", callback: KeyModel_KeyHoldSignalCallback): NodeJS.EventEmitter
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

class KeyModel extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.KeyModel

    static name: string
    static $gtype: GObject.GType<KeyModel>

    // Constructors of Caribou-1.0.Caribou.KeyModel

    constructor(config?: KeyModel_ConstructProps) 
    constructor(name: string, text?: string | null) 
    static new(name: string, text?: string | null): KeyModel
    _init(config?: KeyModel_ConstructProps): void
}

interface ColumnModel_ConstructProps extends IScannableItem_ConstructProps, IKeyboardObject_ConstructProps, ScannableGroup_ConstructProps {
}

interface ColumnModel extends IScannableItem, IKeyboardObject {

    // Owm methods of Caribou-1.0.Caribou.ColumnModel

    getKey(index: number): KeyModel
    firstKey(): KeyModel

    // Class property signals of Caribou-1.0.Caribou.ColumnModel

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

class ColumnModel extends ScannableGroup {

    // Own properties of Caribou-1.0.Caribou.ColumnModel

    static name: string
    static $gtype: GObject.GType<ColumnModel>

    // Constructors of Caribou-1.0.Caribou.ColumnModel

    constructor(config?: ColumnModel_ConstructProps) 
    constructor() 
    static new(): ColumnModel
    _init(config?: ColumnModel_ConstructProps): void
}

interface Scanner_ConstructProps extends GObject.Object_ConstructProps {

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

interface Scanner {

    // Own properties of Caribou-1.0.Caribou.Scanner

    readonly bindSettings: boolean
    scanGrouping: number
    scanEnabled: boolean
    stepTime: number
    switchDevice: string
    keyboardKey: string
    mouseButton: number
    scanCycles: number
    autorestart: boolean
    inverseScanning: boolean

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
    getSwitchDevice(): string
    setSwitchDevice(value: string): void
    getKeyboardKey(): string
    setKeyboardKey(value: string): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Scanner extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.Scanner

    static name: string
    static $gtype: GObject.GType<Scanner>

    // Constructors of Caribou-1.0.Caribou.Scanner

    constructor(config?: Scanner_ConstructProps) 
    constructor() 
    static new(): Scanner
    _init(config?: Scanner_ConstructProps): void
}

interface ScannableGroup_ConstructProps extends IScannableGroup_ConstructProps, GObject.Object_ConstructProps {
}

interface ScannableGroup extends IScannableGroup {

    // Owm methods of Caribou-1.0.Caribou.ScannableGroup

    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null

    // Class property signals of Caribou-1.0.Caribou.ScannableGroup

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

class ScannableGroup extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.ScannableGroup

    static name: string
    static $gtype: GObject.GType<ScannableGroup>

    // Constructors of Caribou-1.0.Caribou.ScannableGroup

    constructor(config?: ScannableGroup_ConstructProps) 
    _init(config?: ScannableGroup_ConstructProps): void
}

interface DisplayAdapterClass {

    // Own fields of Caribou-1.0.Caribou.DisplayAdapterClass

    keyvalPress: (keyval: number) => void
    keyvalRelease: (keyval: number) => void
    modLock: (mask: number) => void
    modUnlock: (mask: number) => void
    modLatch: (mask: number) => void
    modUnlatch: (mask: number) => void
    getCurrentGroup: () => [ /* returnType */ number, /* groupName */ string, /* variantName */ string ]
    getGroups: () => [ /* groupNames */ string[], /* variantNames */ string[] ]
    registerKeyFunc: (keyval: number, func?: KeyButtonCallback | null) => void
    registerButtonFunc: (button: number, func?: KeyButtonCallback | null) => void
}

abstract class DisplayAdapterClass {

    // Own properties of Caribou-1.0.Caribou.DisplayAdapterClass

    static name: string
}

interface DisplayAdapterPrivate {
}

class DisplayAdapterPrivate {

    // Own properties of Caribou-1.0.Caribou.DisplayAdapterPrivate

    static name: string
}

interface NullAdapterClass {
}

abstract class NullAdapterClass {

    // Own properties of Caribou-1.0.Caribou.NullAdapterClass

    static name: string
}

interface NullAdapterPrivate {
}

class NullAdapterPrivate {

    // Own properties of Caribou-1.0.Caribou.NullAdapterPrivate

    static name: string
}

interface XAdapterClass {
}

abstract class XAdapterClass {

    // Own properties of Caribou-1.0.Caribou.XAdapterClass

    static name: string
}

interface XAdapterPrivate {
}

class XAdapterPrivate {

    // Own properties of Caribou-1.0.Caribou.XAdapterPrivate

    static name: string
}

interface KeyboardModelClass {
}

abstract class KeyboardModelClass {

    // Own properties of Caribou-1.0.Caribou.KeyboardModelClass

    static name: string
}

interface KeyboardModelPrivate {
}

class KeyboardModelPrivate {

    // Own properties of Caribou-1.0.Caribou.KeyboardModelPrivate

    static name: string
}

interface KeyboardServiceClass {

    // Own fields of Caribou-1.0.Caribou.KeyboardServiceClass

    setCursorLocation: (x: number, y: number, w: number, h: number) => void
    setEntryLocation: (x: number, y: number, w: number, h: number) => void
    show: (timestamp: number) => void
    hide: (timestamp: number) => void
    nameLost: (name: string) => void
}

abstract class KeyboardServiceClass {

    // Own properties of Caribou-1.0.Caribou.KeyboardServiceClass

    static name: string
}

interface KeyboardServicePrivate {
}

class KeyboardServicePrivate {

    // Own properties of Caribou-1.0.Caribou.KeyboardServicePrivate

    static name: string
}

interface GroupModelClass {
}

abstract class GroupModelClass {

    // Own properties of Caribou-1.0.Caribou.GroupModelClass

    static name: string
}

interface GroupModelPrivate {
}

class GroupModelPrivate {

    // Own properties of Caribou-1.0.Caribou.GroupModelPrivate

    static name: string
}

interface LevelModelClass {
}

abstract class LevelModelClass {

    // Own properties of Caribou-1.0.Caribou.LevelModelClass

    static name: string
}

interface LevelModelPrivate {
}

class LevelModelPrivate {

    // Own properties of Caribou-1.0.Caribou.LevelModelPrivate

    static name: string
}

interface RowModelClass {
}

abstract class RowModelClass {

    // Own properties of Caribou-1.0.Caribou.RowModelClass

    static name: string
}

interface RowModelPrivate {
}

class RowModelPrivate {

    // Own properties of Caribou-1.0.Caribou.RowModelPrivate

    static name: string
}

interface KeyModelClass {
}

abstract class KeyModelClass {

    // Own properties of Caribou-1.0.Caribou.KeyModelClass

    static name: string
}

interface KeyModelPrivate {
}

class KeyModelPrivate {

    // Own properties of Caribou-1.0.Caribou.KeyModelPrivate

    static name: string
}

interface ColumnModelClass {
}

abstract class ColumnModelClass {

    // Own properties of Caribou-1.0.Caribou.ColumnModelClass

    static name: string
}

interface ColumnModelPrivate {
}

class ColumnModelPrivate {

    // Own properties of Caribou-1.0.Caribou.ColumnModelPrivate

    static name: string
}

interface ScannerClass {
}

abstract class ScannerClass {

    // Own properties of Caribou-1.0.Caribou.ScannerClass

    static name: string
}

interface ScannerPrivate {
}

class ScannerPrivate {

    // Own properties of Caribou-1.0.Caribou.ScannerPrivate

    static name: string
}

interface ScannableGroupClass {

    // Own fields of Caribou-1.0.Caribou.ScannableGroupClass

    getScanChildren: () => IScannableItem[]
    childSelect: () => IScannableItem | null
}

abstract class ScannableGroupClass {

    // Own properties of Caribou-1.0.Caribou.ScannableGroupClass

    static name: string
}

interface ScannableGroupPrivate {
}

class ScannableGroupPrivate {

    // Own properties of Caribou-1.0.Caribou.ScannableGroupPrivate

    static name: string
}

interface IScannableItemIface {

    // Own fields of Caribou-1.0.Caribou.IScannableItemIface

    getScanStepping: () => boolean
    setScanStepping: (value: boolean) => void
    getScanSelected: () => boolean
    setScanSelected: (value: boolean) => void
}

abstract class IScannableItemIface {

    // Own properties of Caribou-1.0.Caribou.IScannableItemIface

    static name: string
}

interface IScannableGroupIface {

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

abstract class IScannableGroupIface {

    // Own properties of Caribou-1.0.Caribou.IScannableGroupIface

    static name: string
}

interface IKeyboardObjectIface {

    // Own fields of Caribou-1.0.Caribou.IKeyboardObjectIface

    getChildren: () => IKeyboardObject[]
    getKeys: () => KeyModel[]
}

abstract class IKeyboardObjectIface {

    // Own properties of Caribou-1.0.Caribou.IKeyboardObjectIface

    static name: string
}

}
export default Caribou;