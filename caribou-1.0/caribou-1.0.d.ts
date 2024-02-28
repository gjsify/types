/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './caribou-1.0-ambient.d.ts';
import './caribou-1.0-import.d.ts';
/**
 * Caribou-1.0
 */

import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
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
        (keybuttoncode: number, pressed: boolean): void;
    }
    module DisplayAdapter {
        // Signal callback interfaces

        interface ModifiersChanged {
            (modifiers: number): void;
        }

        interface GroupChanged {
            (gid: number, group: string, variant: string): void;
        }

        interface ConfigChanged {
            (): void;
        }

        // Constructor properties interface
    }

    abstract class DisplayAdapter extends GObject.Object {
        // Own properties of Caribou-1.0.DisplayAdapter

        display: Gdk.Display;

        // Owm methods of Caribou-1.0.DisplayAdapter

        static set_default(adapter: DisplayAdapter): boolean;
        static get_default(): DisplayAdapter;

        // Owm methods of Caribou-1.0.DisplayAdapter

        keyval_press(keyval: number): void;
        keyval_release(keyval: number): void;
        mod_lock(mask: number): void;
        mod_unlock(mask: number): void;
        mod_latch(mask: number): void;
        mod_unlatch(mask: number): void;
        get_current_group(): number;
        get_groups(): void;
        register_key_func(keyval: number, func: KeyButtonCallback): void;
        register_button_func(button: number, func: KeyButtonCallback): void;
        get_display(): Gdk.Display;
    }

    module NullAdapter {
        // Constructor properties interface
    }

    class NullAdapter extends DisplayAdapter {
        // Constructors of Caribou-1.0.NullAdapter

        static ['new'](): NullAdapter;
    }

    module XAdapter {
        // Constructor properties interface
    }

    class XAdapter extends DisplayAdapter {
        // Constructors of Caribou-1.0.XAdapter

        static ['new'](): XAdapter;
    }

    module KeyboardModel {
        // Signal callback interfaces

        interface GroupAdded {
            (name: string): void;
        }

        interface GroupRemoved {
            (name: string): void;
        }

        // Constructor properties interface
    }

    class KeyboardModel extends GObject.Object {
        // Own properties of Caribou-1.0.KeyboardModel

        active_group: string;
        activeGroup: string;
        keyboard_type: string;
        keyboardType: string;
        keyboard_file: string;
        keyboardFile: string;

        // Constructors of Caribou-1.0.KeyboardModel

        static ['new'](): KeyboardModel;

        // Owm methods of Caribou-1.0.KeyboardModel

        get_groups(): string[];
        get_group(group_name: string): GroupModel;
        get_active_group(): string;
        get_keyboard_type(): string;
        get_keyboard_file(): string;
    }

    module KeyboardService {
        // Constructor properties interface
    }

    abstract class KeyboardService extends GObject.Object {
        // Owm methods of Caribou-1.0.KeyboardService

        set_cursor_location(x: number, y: number, w: number, h: number): void;
        set_entry_location(x: number, y: number, w: number, h: number): void;
        show(timestamp: number): void;
        hide(timestamp: number): void;
        register_keyboard(name: string): void;
        name_lost(name: string): void;
    }

    module GroupModel {
        // Constructor properties interface
    }

    class GroupModel extends GObject.Object {
        // Own properties of Caribou-1.0.GroupModel

        active_level: string;
        activeLevel: string;

        // Own fields of Caribou-1.0.GroupModel

        group: string;
        variant: string;

        // Constructors of Caribou-1.0.GroupModel

        static ['new'](group: string, variant: string): GroupModel;

        // Owm methods of Caribou-1.0.GroupModel

        static create_group_name(group: string, variant: string): string;

        // Owm methods of Caribou-1.0.GroupModel

        get_levels(): string[];
        get_level(level_name: string): LevelModel;
        get_active_level(): string;
    }

    module LevelModel {
        // Signal callback interfaces

        interface LevelToggled {
            (new_level: string): void;
        }

        // Constructor properties interface
    }

    class LevelModel extends ScannableGroup {
        // Own properties of Caribou-1.0.LevelModel

        mode: string;

        // Constructors of Caribou-1.0.LevelModel

        static ['new'](mode: string): LevelModel;

        // Owm methods of Caribou-1.0.LevelModel

        get_rows(): RowModel[];
        get_mode(): string;
    }

    module RowModel {
        // Constructor properties interface
    }

    class RowModel extends ScannableGroup {
        // Constructors of Caribou-1.0.RowModel

        static ['new'](): RowModel;

        // Owm methods of Caribou-1.0.RowModel

        get_columns(): ColumnModel[];
    }

    module KeyModel {
        // Signal callback interfaces

        interface KeyHoldEnd {
            (): void;
        }

        interface KeyHold {
            (): void;
        }

        // Constructor properties interface
    }

    class KeyModel extends GObject.Object {
        // Own properties of Caribou-1.0.KeyModel

        align: string;
        width: number;
        toggle: string;
        repeatable: boolean;
        is_modifier: boolean;
        isModifier: boolean;
        show_subkeys: boolean;
        showSubkeys: boolean;
        name: string;
        keyval: number;
        text: string;
        label: string;

        // Own fields of Caribou-1.0.KeyModel

        modifier_state: ModifierState;

        // Constructors of Caribou-1.0.KeyModel

        static ['new'](name: string, text: string): KeyModel;

        // Owm methods of Caribou-1.0.KeyModel

        press(): void;
        release(): void;
        get_extended_keys(): KeyModel[];
        activate(): void;
        get_align(): string;
        set_align(value: string): void;
        get_width(): number;
        set_width(value: number): void;
        get_toggle(): string;
        set_toggle(value: string): void;
        get_repeatable(): boolean;
        set_repeatable(value: boolean): void;
        get_is_modifier(): boolean;
        set_is_modifier(value: boolean): void;
        get_show_subkeys(): boolean;
        get_name(): string;
        get_keyval(): number;
        get_text(): string;
        get_label(): string;
        set_label(value: string): void;
    }

    module ColumnModel {
        // Constructor properties interface
    }

    class ColumnModel extends ScannableGroup {
        // Constructors of Caribou-1.0.ColumnModel

        static ['new'](): ColumnModel;

        // Owm methods of Caribou-1.0.ColumnModel

        get_key(index: number): KeyModel;
        first_key(): KeyModel;
    }

    module Scanner {
        // Constructor properties interface
    }

    class Scanner extends GObject.Object {
        // Own properties of Caribou-1.0.Scanner

        bind_settings: boolean;
        bindSettings: boolean;
        scan_grouping: number;
        scanGrouping: number;
        scan_enabled: boolean;
        scanEnabled: boolean;
        step_time: number;
        stepTime: number;
        switch_device: string;
        switchDevice: string;
        keyboard_key: string;
        keyboardKey: string;
        mouse_button: number;
        mouseButton: number;
        scan_cycles: number;
        scanCycles: number;
        autorestart: boolean;
        inverse_scanning: boolean;
        inverseScanning: boolean;

        // Constructors of Caribou-1.0.Scanner

        static ['new'](): Scanner;

        // Owm methods of Caribou-1.0.Scanner

        set_keyboard(keyboard: KeyboardModel): void;
        reset(): void;
        get_bind_settings(): boolean;
        get_scan_grouping(): number;
        set_scan_grouping(value: number): void;
        get_scan_enabled(): boolean;
        set_scan_enabled(value: boolean): void;
        get_step_time(): number;
        set_step_time(value: number): void;
        get_switch_device(): string;
        set_switch_device(value: string): void;
        get_keyboard_key(): string;
        set_keyboard_key(value: string): void;
        get_mouse_button(): number;
        set_mouse_button(value: number): void;
        get_scan_cycles(): number;
        set_scan_cycles(value: number): void;
        get_autorestart(): boolean;
        set_autorestart(value: boolean): void;
        get_inverse_scanning(): boolean;
        set_inverse_scanning(value: boolean): void;
    }

    module ScannableGroup {
        // Constructor properties interface
    }

    abstract class ScannableGroup extends GObject.Object {
        // Owm methods of Caribou-1.0.ScannableGroup

        get_scan_children(): IScannableItem[];
        child_select(): IScannableItem;
    }

    class DisplayAdapterClass {}

    class DisplayAdapterPrivate {}

    class NullAdapterClass {}

    class NullAdapterPrivate {}

    class XAdapterClass {}

    class XAdapterPrivate {}

    class KeyboardModelClass {}

    class KeyboardModelPrivate {}

    class KeyboardServiceClass {}

    class KeyboardServicePrivate {}

    class GroupModelClass {}

    class GroupModelPrivate {}

    class LevelModelClass {}

    class LevelModelPrivate {}

    class RowModelClass {}

    class RowModelPrivate {}

    class KeyModelClass {}

    class KeyModelPrivate {}

    class ColumnModelClass {}

    class ColumnModelPrivate {}

    class ScannerClass {}

    class ScannerPrivate {}

    class ScannableGroupClass {}

    class ScannableGroupPrivate {}

    class IScannableItemIface {}

    class IScannableGroupIface {}

    class IKeyboardObjectIface {}

    interface IScannableItem {
        // Own properties of Caribou-1.0.IScannableItem

        scan_stepping: boolean;
        scanStepping: boolean;
        scan_selected: boolean;
        scanSelected: boolean;

        // Owm methods of Caribou-1.0.IScannableItem

        get_scan_stepping(): boolean;
        set_scan_stepping(value: boolean): void;
        get_scan_selected(): boolean;
        set_scan_selected(value: boolean): void;

        // Own virtual methods of Caribou-1.0.IScannableItem

        vfunc_get_scan_stepping(): boolean;
        vfunc_set_scan_stepping(value: boolean): void;
        vfunc_get_scan_selected(): boolean;
        vfunc_set_scan_selected(value: boolean): void;
    }

    interface IScannableGroup {
        // Own properties of Caribou-1.0.IScannableGroup

        scan_grouping: ScanGrouping;
        scanGrouping: ScanGrouping;

        // Owm methods of Caribou-1.0.IScannableGroup

        child_select(): IScannableItem;
        scan_reset(): void;
        get_scan_children(): IScannableItem[];
        child_step(cycles: number): IScannableItem;
        get_step_path(): IScannableItem[];
        get_selected_path(): IScannableItem[];
        get_scan_grouping(): ScanGrouping;
        set_scan_grouping(value: ScanGrouping): void;

        // Own virtual methods of Caribou-1.0.IScannableGroup

        vfunc_child_select(): IScannableItem;
        vfunc_scan_reset(): void;
        vfunc_get_scan_children(): IScannableItem[];
        vfunc_child_step(cycles: number): IScannableItem;
        vfunc_get_step_path(): IScannableItem[];
        vfunc_get_selected_path(): IScannableItem[];
        vfunc_get_scan_grouping(): ScanGrouping;
        vfunc_set_scan_grouping(value: ScanGrouping): void;
    }

    interface IKeyboardObject {
        // Owm methods of Caribou-1.0.IKeyboardObject

        get_children(): IKeyboardObject[];
        get_keys(): KeyModel[];

        // Own virtual methods of Caribou-1.0.IKeyboardObject

        vfunc_get_children(): IKeyboardObject[];
        vfunc_get_keys(): KeyModel[];
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

export default Caribou;
// END
