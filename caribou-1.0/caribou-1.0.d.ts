
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
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
module IScannableItem {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.IScannableItem

        scan_stepping?: boolean | null
        scan_selected?: boolean | null
    }

}

interface IScannableItem extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.IScannableItem

    scan_stepping: boolean
    scan_selected: boolean

    // Owm methods of Caribou-1.0.Caribou.IScannableItem

    get_scan_stepping(): boolean
    set_scan_stepping(value: boolean): void
    get_scan_selected(): boolean
    set_scan_selected(value: boolean): void

    // Own virtual methods of Caribou-1.0.Caribou.IScannableItem

    vfunc_get_scan_stepping(): boolean
    vfunc_set_scan_stepping(value: boolean): void
    vfunc_get_scan_selected(): boolean
    vfunc_set_scan_selected(value: boolean): void

    // Class property signals of Caribou-1.0.Caribou.IScannableItem

    connect(sigName: "notify::scan-stepping", callback: (($obj: IScannableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-stepping", callback: (($obj: IScannableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scan-stepping", ...args: any[]): void
    connect(sigName: "notify::scan-selected", callback: (($obj: IScannableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-selected", callback: (($obj: IScannableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scan-selected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IScannableItem {

    // Own properties of Caribou-1.0.Caribou.IScannableItem

    static name: string
    static $gtype: GObject.GType<IScannableItem>

    // Constructors of Caribou-1.0.Caribou.IScannableItem

    constructor(config?: IScannableItem.ConstructorProperties) 
    _init(config?: IScannableItem.ConstructorProperties): void
}

module IScannableGroup {

    // Signal callback interfaces

    /**
     * Signal callback interface for `selected-item-changed`
     */
    interface SelectedItemChangedSignalCallback {
        ($obj: IScannableGroup, selected_item?: IScannableItem | null): void
    }

    /**
     * Signal callback interface for `step-item-changed`
     */
    interface StepItemChangedSignalCallback {
        ($obj: IScannableGroup, step_item?: IScannableItem | null): void
    }

    /**
     * Signal callback interface for `scan-cleared`
     */
    interface ScanClearedSignalCallback {
        ($obj: IScannableGroup): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.IScannableGroup

        scan_grouping?: ScanGrouping | null
    }

}

interface IScannableGroup extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.IScannableGroup

    scan_grouping: ScanGrouping

    // Owm methods of Caribou-1.0.Caribou.IScannableGroup

    child_select(): IScannableItem | null
    scan_reset(): void
    get_scan_children(): IScannableItem[]
    child_step(cycles: number): IScannableItem | null
    get_step_path(): IScannableItem[]
    get_selected_path(): IScannableItem[]
    get_scan_grouping(): ScanGrouping
    set_scan_grouping(value: ScanGrouping): void

    // Own virtual methods of Caribou-1.0.Caribou.IScannableGroup

    vfunc_child_select(): IScannableItem | null
    vfunc_scan_reset(): void
    vfunc_get_scan_children(): IScannableItem[]
    vfunc_child_step(cycles: number): IScannableItem | null
    vfunc_get_step_path(): IScannableItem[]
    vfunc_get_selected_path(): IScannableItem[]
    vfunc_get_scan_grouping(): ScanGrouping
    vfunc_set_scan_grouping(value: ScanGrouping): void

    // Own signals of Caribou-1.0.Caribou.IScannableGroup

    connect(sigName: "selected-item-changed", callback: IScannableGroup.SelectedItemChangedSignalCallback): number
    connect_after(sigName: "selected-item-changed", callback: IScannableGroup.SelectedItemChangedSignalCallback): number
    emit(sigName: "selected-item-changed", selected_item?: IScannableItem | null, ...args: any[]): void
    connect(sigName: "step-item-changed", callback: IScannableGroup.StepItemChangedSignalCallback): number
    connect_after(sigName: "step-item-changed", callback: IScannableGroup.StepItemChangedSignalCallback): number
    emit(sigName: "step-item-changed", step_item?: IScannableItem | null, ...args: any[]): void
    connect(sigName: "scan-cleared", callback: IScannableGroup.ScanClearedSignalCallback): number
    connect_after(sigName: "scan-cleared", callback: IScannableGroup.ScanClearedSignalCallback): number
    emit(sigName: "scan-cleared", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.IScannableGroup

    connect(sigName: "notify::scan-grouping", callback: (($obj: IScannableGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-grouping", callback: (($obj: IScannableGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scan-grouping", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IScannableGroup {

    // Own properties of Caribou-1.0.Caribou.IScannableGroup

    static name: string
    static $gtype: GObject.GType<IScannableGroup>

    // Constructors of Caribou-1.0.Caribou.IScannableGroup

    constructor(config?: IScannableGroup.ConstructorProperties) 
    _init(config?: IScannableGroup.ConstructorProperties): void
}

module IKeyboardObject {

    // Signal callback interfaces

    /**
     * Signal callback interface for `key-clicked`
     */
    interface KeyClickedSignalCallback {
        ($obj: IKeyboardObject, key: KeyModel): void
    }

    /**
     * Signal callback interface for `key-pressed`
     */
    interface KeyPressedSignalCallback {
        ($obj: IKeyboardObject, key: KeyModel): void
    }

    /**
     * Signal callback interface for `key-released`
     */
    interface KeyReleasedSignalCallback {
        ($obj: IKeyboardObject, key: KeyModel): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface IKeyboardObject extends GObject.Object {

    // Owm methods of Caribou-1.0.Caribou.IKeyboardObject

    get_children(): IKeyboardObject[]
    get_keys(): KeyModel[]

    // Own virtual methods of Caribou-1.0.Caribou.IKeyboardObject

    vfunc_get_children(): IKeyboardObject[]
    vfunc_get_keys(): KeyModel[]

    // Own signals of Caribou-1.0.Caribou.IKeyboardObject

    connect(sigName: "key-clicked", callback: IKeyboardObject.KeyClickedSignalCallback): number
    connect_after(sigName: "key-clicked", callback: IKeyboardObject.KeyClickedSignalCallback): number
    emit(sigName: "key-clicked", key: KeyModel, ...args: any[]): void
    connect(sigName: "key-pressed", callback: IKeyboardObject.KeyPressedSignalCallback): number
    connect_after(sigName: "key-pressed", callback: IKeyboardObject.KeyPressedSignalCallback): number
    emit(sigName: "key-pressed", key: KeyModel, ...args: any[]): void
    connect(sigName: "key-released", callback: IKeyboardObject.KeyReleasedSignalCallback): number
    connect_after(sigName: "key-released", callback: IKeyboardObject.KeyReleasedSignalCallback): number
    emit(sigName: "key-released", key: KeyModel, ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.IKeyboardObject

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.IKeyboardObject

    static name: string
    static $gtype: GObject.GType<IKeyboardObject>

    // Constructors of Caribou-1.0.Caribou.IKeyboardObject

    constructor(config?: IKeyboardObject.ConstructorProperties) 
    _init(config?: IKeyboardObject.ConstructorProperties): void
}

module DisplayAdapter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `modifiers-changed`
     */
    interface ModifiersChangedSignalCallback {
        ($obj: DisplayAdapter, modifiers: number): void
    }

    /**
     * Signal callback interface for `group-changed`
     */
    interface GroupChangedSignalCallback {
        ($obj: DisplayAdapter, gid: number, group: string | null, variant: string | null): void
    }

    /**
     * Signal callback interface for `config-changed`
     */
    interface ConfigChangedSignalCallback {
        ($obj: DisplayAdapter): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.DisplayAdapter

        display?: Gdk.Display | null
    }

}

interface DisplayAdapter {

    // Own properties of Caribou-1.0.Caribou.DisplayAdapter

    readonly display: Gdk.Display

    // Owm methods of Caribou-1.0.Caribou.DisplayAdapter

    keyval_press(keyval: number): void
    keyval_release(keyval: number): void
    mod_lock(mask: number): void
    mod_unlock(mask: number): void
    mod_latch(mask: number): void
    mod_unlatch(mask: number): void
    get_current_group(): [ /* returnType */ number, /* group_name */ string | null, /* variant_name */ string | null ]
    get_groups(): [ /* group_names */ string[], /* variant_names */ string[] ]
    register_key_func(keyval: number, func?: KeyButtonCallback | null): void
    register_button_func(button: number, func?: KeyButtonCallback | null): void
    get_display(): Gdk.Display

    // Own virtual methods of Caribou-1.0.Caribou.DisplayAdapter

    vfunc_keyval_press(keyval: number): void
    vfunc_keyval_release(keyval: number): void
    vfunc_mod_lock(mask: number): void
    vfunc_mod_unlock(mask: number): void
    vfunc_mod_latch(mask: number): void
    vfunc_mod_unlatch(mask: number): void
    vfunc_get_current_group(): [ /* returnType */ number, /* group_name */ string | null, /* variant_name */ string | null ]
    vfunc_get_groups(): [ /* group_names */ string[], /* variant_names */ string[] ]
    vfunc_register_key_func(keyval: number, func?: KeyButtonCallback | null): void
    vfunc_register_button_func(button: number, func?: KeyButtonCallback | null): void

    // Own signals of Caribou-1.0.Caribou.DisplayAdapter

    connect(sigName: "modifiers-changed", callback: DisplayAdapter.ModifiersChangedSignalCallback): number
    connect_after(sigName: "modifiers-changed", callback: DisplayAdapter.ModifiersChangedSignalCallback): number
    emit(sigName: "modifiers-changed", modifiers: number, ...args: any[]): void
    connect(sigName: "group-changed", callback: DisplayAdapter.GroupChangedSignalCallback): number
    connect_after(sigName: "group-changed", callback: DisplayAdapter.GroupChangedSignalCallback): number
    emit(sigName: "group-changed", gid: number, group: string | null, variant: string | null, ...args: any[]): void
    connect(sigName: "config-changed", callback: DisplayAdapter.ConfigChangedSignalCallback): number
    connect_after(sigName: "config-changed", callback: DisplayAdapter.ConfigChangedSignalCallback): number
    emit(sigName: "config-changed", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.DisplayAdapter

    connect(sigName: "notify::display", callback: (($obj: DisplayAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: DisplayAdapter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DisplayAdapter extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.DisplayAdapter

    static name: string
    static $gtype: GObject.GType<DisplayAdapter>

    // Constructors of Caribou-1.0.Caribou.DisplayAdapter

    constructor(config?: DisplayAdapter.ConstructorProperties) 
    _init(config?: DisplayAdapter.ConstructorProperties): void
    static set_default(adapter: DisplayAdapter): boolean
    static get_default(): DisplayAdapter
}

module NullAdapter {

    // Constructor properties interface

    interface ConstructorProperties extends DisplayAdapter.ConstructorProperties {
    }

}

interface NullAdapter {

    // Class property signals of Caribou-1.0.Caribou.NullAdapter

    connect(sigName: "notify::display", callback: (($obj: NullAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: NullAdapter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NullAdapter extends DisplayAdapter {

    // Own properties of Caribou-1.0.Caribou.NullAdapter

    static name: string
    static $gtype: GObject.GType<NullAdapter>

    // Constructors of Caribou-1.0.Caribou.NullAdapter

    constructor(config?: NullAdapter.ConstructorProperties) 
    constructor() 
    static new(): NullAdapter
    _init(config?: NullAdapter.ConstructorProperties): void
}

module XAdapter {

    // Constructor properties interface

    interface ConstructorProperties extends DisplayAdapter.ConstructorProperties {
    }

}

interface XAdapter {

    // Class property signals of Caribou-1.0.Caribou.XAdapter

    connect(sigName: "notify::display", callback: (($obj: XAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: XAdapter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XAdapter extends DisplayAdapter {

    // Own properties of Caribou-1.0.Caribou.XAdapter

    static name: string
    static $gtype: GObject.GType<XAdapter>

    // Constructors of Caribou-1.0.Caribou.XAdapter

    constructor(config?: XAdapter.ConstructorProperties) 
    constructor() 
    static new(): XAdapter
    _init(config?: XAdapter.ConstructorProperties): void
}

module KeyboardModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `group-added`
     */
    interface GroupAddedSignalCallback {
        ($obj: KeyboardModel, name: string | null): void
    }

    /**
     * Signal callback interface for `group-removed`
     */
    interface GroupRemovedSignalCallback {
        ($obj: KeyboardModel, name: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends IKeyboardObject.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.KeyboardModel

        active_group?: string | null
        keyboard_type?: string | null
        keyboard_file?: string | null
    }

}

interface KeyboardModel extends IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.KeyboardModel

    active_group: string | null
    readonly keyboard_type: string | null
    readonly keyboard_file: string | null

    // Owm methods of Caribou-1.0.Caribou.KeyboardModel

    get_groups(): string[]
    get_group(group_name: string | null): GroupModel
    get_active_group(): string | null
    get_keyboard_type(): string | null
    get_keyboard_file(): string | null

    // Own signals of Caribou-1.0.Caribou.KeyboardModel

    connect(sigName: "group-added", callback: KeyboardModel.GroupAddedSignalCallback): number
    connect_after(sigName: "group-added", callback: KeyboardModel.GroupAddedSignalCallback): number
    emit(sigName: "group-added", name: string | null, ...args: any[]): void
    connect(sigName: "group-removed", callback: KeyboardModel.GroupRemovedSignalCallback): number
    connect_after(sigName: "group-removed", callback: KeyboardModel.GroupRemovedSignalCallback): number
    emit(sigName: "group-removed", name: string | null, ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.KeyboardModel

    connect(sigName: "notify::active-group", callback: (($obj: KeyboardModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-group", callback: (($obj: KeyboardModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-group", ...args: any[]): void
    connect(sigName: "notify::keyboard-type", callback: (($obj: KeyboardModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keyboard-type", callback: (($obj: KeyboardModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keyboard-type", ...args: any[]): void
    connect(sigName: "notify::keyboard-file", callback: (($obj: KeyboardModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keyboard-file", callback: (($obj: KeyboardModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keyboard-file", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class KeyboardModel extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.KeyboardModel

    static name: string
    static $gtype: GObject.GType<KeyboardModel>

    // Constructors of Caribou-1.0.Caribou.KeyboardModel

    constructor(config?: KeyboardModel.ConstructorProperties) 
    constructor() 
    static new(): KeyboardModel
    _init(config?: KeyboardModel.ConstructorProperties): void
}

module KeyboardService {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface KeyboardService {

    // Owm methods of Caribou-1.0.Caribou.KeyboardService

    set_cursor_location(x: number, y: number, w: number, h: number): void
    set_entry_location(x: number, y: number, w: number, h: number): void
    show(timestamp: number): void
    hide(timestamp: number): void
    register_keyboard(name: string | null): void
    name_lost(name: string | null): void

    // Own virtual methods of Caribou-1.0.Caribou.KeyboardService

    vfunc_set_cursor_location(x: number, y: number, w: number, h: number): void
    vfunc_set_entry_location(x: number, y: number, w: number, h: number): void
    vfunc_show(timestamp: number): void
    vfunc_hide(timestamp: number): void
    vfunc_name_lost(name: string | null): void

    // Class property signals of Caribou-1.0.Caribou.KeyboardService

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class KeyboardService extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.KeyboardService

    static name: string
    static $gtype: GObject.GType<KeyboardService>

    // Constructors of Caribou-1.0.Caribou.KeyboardService

    constructor(config?: KeyboardService.ConstructorProperties) 
    _init(config?: KeyboardService.ConstructorProperties): void
}

module GroupModel {

    // Constructor properties interface

    interface ConstructorProperties extends IKeyboardObject.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.GroupModel

        active_level?: string | null
    }

}

interface GroupModel extends IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.GroupModel

    active_level: string | null

    // Own fields of Caribou-1.0.Caribou.GroupModel

    group: string | null
    variant: string | null

    // Owm methods of Caribou-1.0.Caribou.GroupModel

    get_levels(): string[]
    get_level(level_name: string | null): LevelModel
    get_active_level(): string | null

    // Class property signals of Caribou-1.0.Caribou.GroupModel

    connect(sigName: "notify::active-level", callback: (($obj: GroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-level", callback: (($obj: GroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GroupModel extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.GroupModel

    static name: string
    static $gtype: GObject.GType<GroupModel>

    // Constructors of Caribou-1.0.Caribou.GroupModel

    constructor(config?: GroupModel.ConstructorProperties) 
    constructor(group: string | null, variant: string | null) 
    static new(group: string | null, variant: string | null): GroupModel
    _init(config?: GroupModel.ConstructorProperties): void
    static create_group_name(group: string | null, variant: string | null): string | null
}

module LevelModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `level-toggled`
     */
    interface LevelToggledSignalCallback {
        ($obj: LevelModel, new_level: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends IKeyboardObject.ConstructorProperties, ScannableGroup.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.LevelModel

        mode?: string | null
    }

}

interface LevelModel extends IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.LevelModel

    mode: string | null

    // Owm methods of Caribou-1.0.Caribou.LevelModel

    get_rows(): RowModel[]
    get_mode(): string | null

    // Own signals of Caribou-1.0.Caribou.LevelModel

    connect(sigName: "level-toggled", callback: LevelModel.LevelToggledSignalCallback): number
    connect_after(sigName: "level-toggled", callback: LevelModel.LevelToggledSignalCallback): number
    emit(sigName: "level-toggled", new_level: string | null, ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.LevelModel

    connect(sigName: "notify::mode", callback: (($obj: LevelModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: LevelModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LevelModel extends ScannableGroup {

    // Own properties of Caribou-1.0.Caribou.LevelModel

    static name: string
    static $gtype: GObject.GType<LevelModel>

    // Constructors of Caribou-1.0.Caribou.LevelModel

    constructor(config?: LevelModel.ConstructorProperties) 
    constructor(mode: string | null) 
    static new(mode: string | null): LevelModel
    _init(config?: LevelModel.ConstructorProperties): void
}

module RowModel {

    // Constructor properties interface

    interface ConstructorProperties extends IScannableItem.ConstructorProperties, IKeyboardObject.ConstructorProperties, ScannableGroup.ConstructorProperties {
    }

}

interface RowModel extends IScannableItem, IKeyboardObject {

    // Owm methods of Caribou-1.0.Caribou.RowModel

    get_columns(): ColumnModel[]

    // Class property signals of Caribou-1.0.Caribou.RowModel

    connect(sigName: "notify::scan-stepping", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-stepping", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scan-stepping", ...args: any[]): void
    connect(sigName: "notify::scan-selected", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-selected", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scan-selected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RowModel extends ScannableGroup {

    // Own properties of Caribou-1.0.Caribou.RowModel

    static name: string
    static $gtype: GObject.GType<RowModel>

    // Constructors of Caribou-1.0.Caribou.RowModel

    constructor(config?: RowModel.ConstructorProperties) 
    constructor() 
    static new(): RowModel
    _init(config?: RowModel.ConstructorProperties): void
}

module KeyModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `key-hold-end`
     */
    interface KeyHoldEndSignalCallback {
        ($obj: KeyModel): void
    }

    /**
     * Signal callback interface for `key-hold`
     */
    interface KeyHoldSignalCallback {
        ($obj: KeyModel): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends IScannableItem.ConstructorProperties, IKeyboardObject.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.KeyModel

        align?: string | null
        width?: number | null
        toggle?: string | null
        repeatable?: boolean | null
        is_modifier?: boolean | null
        show_subkeys?: boolean | null
        name?: string | null
        keyval?: number | null
        text?: string | null
        label?: string | null
    }

}

interface KeyModel extends IScannableItem, IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.KeyModel

    align: string | null
    width: number
    toggle: string | null
    repeatable: boolean
    is_modifier: boolean
    show_subkeys: boolean
    name: string | null
    keyval: number
    text: string | null
    label: string | null

    // Own fields of Caribou-1.0.Caribou.KeyModel

    modifier_state: ModifierState

    // Owm methods of Caribou-1.0.Caribou.KeyModel

    press(): void
    release(): void
    get_extended_keys(): KeyModel[]
    activate(): void
    get_align(): string | null
    set_align(value: string | null): void
    get_width(): number
    set_width(value: number): void
    get_toggle(): string | null
    set_toggle(value: string | null): void
    get_repeatable(): boolean
    set_repeatable(value: boolean): void
    get_is_modifier(): boolean
    set_is_modifier(value: boolean): void
    get_show_subkeys(): boolean
    get_name(): string | null
    get_keyval(): number
    get_text(): string | null
    get_label(): string | null
    set_label(value: string | null): void

    // Own signals of Caribou-1.0.Caribou.KeyModel

    connect(sigName: "key-hold-end", callback: KeyModel.KeyHoldEndSignalCallback): number
    connect_after(sigName: "key-hold-end", callback: KeyModel.KeyHoldEndSignalCallback): number
    emit(sigName: "key-hold-end", ...args: any[]): void
    connect(sigName: "key-hold", callback: KeyModel.KeyHoldSignalCallback): number
    connect_after(sigName: "key-hold", callback: KeyModel.KeyHoldSignalCallback): number
    emit(sigName: "key-hold", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.KeyModel

    connect(sigName: "notify::align", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::align", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::align", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::toggle", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::toggle", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::toggle", ...args: any[]): void
    connect(sigName: "notify::repeatable", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeatable", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::repeatable", ...args: any[]): void
    connect(sigName: "notify::is-modifier", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-modifier", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-modifier", ...args: any[]): void
    connect(sigName: "notify::show-subkeys", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-subkeys", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-subkeys", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::keyval", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keyval", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keyval", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::scan-stepping", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-stepping", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scan-stepping", ...args: any[]): void
    connect(sigName: "notify::scan-selected", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-selected", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scan-selected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class KeyModel extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.KeyModel

    static name: string
    static $gtype: GObject.GType<KeyModel>

    // Constructors of Caribou-1.0.Caribou.KeyModel

    constructor(config?: KeyModel.ConstructorProperties) 
    constructor(name: string | null, text?: string | null) 
    static new(name: string | null, text?: string | null): KeyModel
    _init(config?: KeyModel.ConstructorProperties): void
}

module ColumnModel {

    // Constructor properties interface

    interface ConstructorProperties extends IScannableItem.ConstructorProperties, IKeyboardObject.ConstructorProperties, ScannableGroup.ConstructorProperties {
    }

}

interface ColumnModel extends IScannableItem, IKeyboardObject {

    // Owm methods of Caribou-1.0.Caribou.ColumnModel

    get_key(index: number): KeyModel
    first_key(): KeyModel

    // Class property signals of Caribou-1.0.Caribou.ColumnModel

    connect(sigName: "notify::scan-stepping", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-stepping", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scan-stepping", ...args: any[]): void
    connect(sigName: "notify::scan-selected", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-selected", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scan-selected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ColumnModel extends ScannableGroup {

    // Own properties of Caribou-1.0.Caribou.ColumnModel

    static name: string
    static $gtype: GObject.GType<ColumnModel>

    // Constructors of Caribou-1.0.Caribou.ColumnModel

    constructor(config?: ColumnModel.ConstructorProperties) 
    constructor() 
    static new(): ColumnModel
    _init(config?: ColumnModel.ConstructorProperties): void
}

module Scanner {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.Scanner

        bind_settings?: boolean | null
        scan_grouping?: number | null
        scan_enabled?: boolean | null
        step_time?: number | null
        switch_device?: string | null
        keyboard_key?: string | null
        mouse_button?: number | null
        scan_cycles?: number | null
        autorestart?: boolean | null
        inverse_scanning?: boolean | null
    }

}

interface Scanner {

    // Own properties of Caribou-1.0.Caribou.Scanner

    readonly bind_settings: boolean
    scan_grouping: number
    scan_enabled: boolean
    step_time: number
    switch_device: string | null
    keyboard_key: string | null
    mouse_button: number
    scan_cycles: number
    autorestart: boolean
    inverse_scanning: boolean

    // Owm methods of Caribou-1.0.Caribou.Scanner

    set_keyboard(keyboard: KeyboardModel): void
    reset(): void
    get_bind_settings(): boolean
    get_scan_grouping(): number
    set_scan_grouping(value: number): void
    get_scan_enabled(): boolean
    set_scan_enabled(value: boolean): void
    get_step_time(): number
    set_step_time(value: number): void
    get_switch_device(): string | null
    set_switch_device(value: string | null): void
    get_keyboard_key(): string | null
    set_keyboard_key(value: string | null): void
    get_mouse_button(): number
    set_mouse_button(value: number): void
    get_scan_cycles(): number
    set_scan_cycles(value: number): void
    get_autorestart(): boolean
    set_autorestart(value: boolean): void
    get_inverse_scanning(): boolean
    set_inverse_scanning(value: boolean): void

    // Class property signals of Caribou-1.0.Caribou.Scanner

    connect(sigName: "notify::bind-settings", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind-settings", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bind-settings", ...args: any[]): void
    connect(sigName: "notify::scan-grouping", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-grouping", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scan-grouping", ...args: any[]): void
    connect(sigName: "notify::scan-enabled", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-enabled", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scan-enabled", ...args: any[]): void
    connect(sigName: "notify::step-time", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::step-time", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::step-time", ...args: any[]): void
    connect(sigName: "notify::switch-device", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::switch-device", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::switch-device", ...args: any[]): void
    connect(sigName: "notify::keyboard-key", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keyboard-key", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keyboard-key", ...args: any[]): void
    connect(sigName: "notify::mouse-button", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mouse-button", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mouse-button", ...args: any[]): void
    connect(sigName: "notify::scan-cycles", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-cycles", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scan-cycles", ...args: any[]): void
    connect(sigName: "notify::autorestart", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autorestart", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::autorestart", ...args: any[]): void
    connect(sigName: "notify::inverse-scanning", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inverse-scanning", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inverse-scanning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Scanner extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.Scanner

    static name: string
    static $gtype: GObject.GType<Scanner>

    // Constructors of Caribou-1.0.Caribou.Scanner

    constructor(config?: Scanner.ConstructorProperties) 
    constructor() 
    static new(): Scanner
    _init(config?: Scanner.ConstructorProperties): void
}

module ScannableGroup {

    // Constructor properties interface

    interface ConstructorProperties extends IScannableGroup.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface ScannableGroup extends IScannableGroup {

    // Owm methods of Caribou-1.0.Caribou.ScannableGroup

    get_scan_children(): IScannableItem[]
    child_select(): IScannableItem | null

    // Own virtual methods of Caribou-1.0.Caribou.ScannableGroup

    vfunc_get_scan_children(): IScannableItem[]
    vfunc_child_select(): IScannableItem | null

    // Class property signals of Caribou-1.0.Caribou.ScannableGroup

    connect(sigName: "notify::scan-grouping", callback: (($obj: ScannableGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-grouping", callback: (($obj: ScannableGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scan-grouping", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ScannableGroup extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.ScannableGroup

    static name: string
    static $gtype: GObject.GType<ScannableGroup>

    // Constructors of Caribou-1.0.Caribou.ScannableGroup

    constructor(config?: ScannableGroup.ConstructorProperties) 
    _init(config?: ScannableGroup.ConstructorProperties): void
}

interface DisplayAdapterClass {

    // Own fields of Caribou-1.0.Caribou.DisplayAdapterClass

    keyval_press: (keyval: number) => void
    keyval_release: (keyval: number) => void
    mod_lock: (mask: number) => void
    mod_unlock: (mask: number) => void
    mod_latch: (mask: number) => void
    mod_unlatch: (mask: number) => void
    get_current_group: () => [ /* returnType */ number, /* group_name */ string | null, /* variant_name */ string | null ]
    get_groups: () => [ /* group_names */ string[], /* variant_names */ string[] ]
    register_key_func: (keyval: number, func?: KeyButtonCallback | null) => void
    register_button_func: (button: number, func?: KeyButtonCallback | null) => void
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

    set_cursor_location: (x: number, y: number, w: number, h: number) => void
    set_entry_location: (x: number, y: number, w: number, h: number) => void
    show: (timestamp: number) => void
    hide: (timestamp: number) => void
    name_lost: (name: string | null) => void
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

    get_scan_children: () => IScannableItem[]
    child_select: () => IScannableItem | null
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

    get_scan_stepping: () => boolean
    set_scan_stepping: (value: boolean) => void
    get_scan_selected: () => boolean
    set_scan_selected: (value: boolean) => void
}

abstract class IScannableItemIface {

    // Own properties of Caribou-1.0.Caribou.IScannableItemIface

    static name: string
}

interface IScannableGroupIface {

    // Own fields of Caribou-1.0.Caribou.IScannableGroupIface

    child_select: () => IScannableItem | null
    scan_reset: () => void
    get_scan_children: () => IScannableItem[]
    child_step: (cycles: number) => IScannableItem | null
    get_step_path: () => IScannableItem[]
    get_selected_path: () => IScannableItem[]
    get_scan_grouping: () => ScanGrouping
    set_scan_grouping: (value: ScanGrouping) => void
}

abstract class IScannableGroupIface {

    // Own properties of Caribou-1.0.Caribou.IScannableGroupIface

    static name: string
}

interface IKeyboardObjectIface {

    // Own fields of Caribou-1.0.Caribou.IKeyboardObjectIface

    get_children: () => IKeyboardObject[]
    get_keys: () => KeyModel[]
}

abstract class IKeyboardObjectIface {

    // Own properties of Caribou-1.0.Caribou.IKeyboardObjectIface

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

export default Caribou;
// END