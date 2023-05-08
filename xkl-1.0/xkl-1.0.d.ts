
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Xkl-1.0
 */

import type xlib from '@girs/xlib-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Xkl {

/**
 * The listener action modes:
 */
enum EngineListenModes {
    /**
     * The listener process should handle the per-window states
     *                       and all the related activity
     */
    MANAGE_WINDOW_STATES,
    /**
     * Just track the state and pass it to the application above.
     */
    TRACK_KEYBOARD_STATE,
    /**
     * The listener process should help backend to maintain the configuration
     *                  (manually switch layouts etc).
     */
    MANAGE_LAYOUTS,
}
/**
 * The type of the keyboard state change
 */
enum EngineStateChange {
    /**
     * Group was changed
     */
    GROUP_CHANGED,
    /**
     * Indicators were changed
     */
    INDICATORS_CHANGED,
}
/**
 * A set of flags used to indicate the capabilities of the active backend
 * @bitfield 
 */
enum EngineFeatures {
    /**
     * Backend allows to toggls indicators on/off
     */
    CAN_TOGGLE_INDICATORS,
    /**
     * Backend allows writing ASCII representation of the configuration
     */
    CAN_OUTPUT_CONFIG_AS_ASCII,
    /**
     * Backend allows writing binary representation of the configuration
     */
    CAN_OUTPUT_CONFIG_AS_BINARY,
    /**
     * Backend supports multiple layouts
     */
    MULTIPLE_LAYOUTS_SUPPORTED,
    /**
     * Backend requires manual configuration, some daemon should do
     *                                   xkl_start_listen(engine,XKLL_MANAGE_LAYOUTS);
     */
    REQUIRES_MANUAL_LAYOUT_MANAGEMENT,
    /**
     * Backend supports device discovery, can notify
     */
    DEVICE_DISCOVERY,
}
const MAX_CI_DESC_LENGTH: number
const MAX_CI_NAME_LENGTH: number
const MAX_CI_SHORT_DESC_LENGTH: number
/**
 * Get localized country name, from ISO code
 * @param code ISO 3166 Alpha 2 code: 2 chars, uppercase (US, RU, FR, ...)
 * @returns localized country name (USA, Russia, France, ... translated)
 */
function get_country_name(code: string | null): string | null
/**
 * Get localized language name, from ISO code
 * @param code ISO 639 2B or 2T code: 3 chars, lowercase (eng, rus, fra, ...)
 * @returns localized country name (English, Russiam, French, ... translated)
 */
function get_language_name(code: string | null): string | null
function get_last_error(): string | null
/**
 * Restores XKB from the property saved by xkl_backup_names_prop
 * @param engine the engine
 * @returns TRUE on success
 */
function restore_names_prop(engine: Engine): boolean
/**
 * Sets maximum debug level.
 * Message of the level more than the one set here - will be ignored
 * @param level new debug level
 */
function set_debug_level(level: number): void
/**
 * Callback type used for enumerating keyboard models, layouts, variants, options
 * @callback 
 * @param config the config registry
 * @param item the item from registry
 * @param data anything which can be stored into the pointer
 */
interface ConfigItemProcessFunc {
    (config: ConfigRegistry, item: ConfigItem, data: any): void
}
/**
 * Callback type used for enumerating layouts/variants for countries/languages
 * @callback 
 * @param config the config registry
 * @param item the item from registry
 * @param subitem the item from registry
 * @param data anything which can be stored into the pointer
 */
interface TwoConfigItemsProcessFunc {
    (config: ConfigRegistry, item: ConfigItem, subitem: ConfigItem, data: any): void
}
module ConfigItem {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ConfigItem {

    // Own fields of Xkl-1.0.Xkl.ConfigItem

    parent: GObject.Object
    name: number[]
    short_description: number[]
    description: number[]

    // Owm methods of Xkl-1.0.Xkl.ConfigItem

    get_description(): string | null
    get_name(): string | null
    get_short_description(): string | null
    /**
     * Change the `description` field of a XklConfigItem. This is mostly useful for
     * language bindings, in C you can manipulate the member directly.
     * @param description Description (max. 192        characters); can be NULL.
     */
    set_description(description: string | null): void
    /**
     * Change the `name` field of a XklConfigItem. This is mostly useful for
     * language bindings, in C you can manipulate the member directly.
     * @param name Name (max. 32 characters); can be NULL.
     */
    set_name(name: string | null): void
    /**
     * Change the `short_description` field of a XklConfigItem. This is mostly useful for
     * language bindings, in C you can manipulate the member directly.
     * @param short_description Short Description (max. 10        characters); can be NULL.
     */
    set_short_description(short_description: string | null): void

    // Class property signals of Xkl-1.0.Xkl.ConfigItem

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ConfigItem extends GObject.Object {

    // Own properties of Xkl-1.0.Xkl.ConfigItem

    static name: string
    static $gtype: GObject.GType<ConfigItem>

    // Constructors of Xkl-1.0.Xkl.ConfigItem

    constructor(config?: ConfigItem.ConstructorProperties) 
    /**
     * Create new XklConfigItem
     * @constructor 
     * @returns new instance
     */
    constructor() 
    /**
     * Create new XklConfigItem
     * @constructor 
     * @returns new instance
     */
    static new(): ConfigItem
    _init(config?: ConfigItem.ConstructorProperties): void
}

module ConfigRec {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ConfigRec {

    // Own fields of Xkl-1.0.Xkl.ConfigRec

    parent: GObject.Object
    model: string | null
    layouts: string[]
    variants: string[]
    options: string[]

    // Owm methods of Xkl-1.0.Xkl.ConfigRec

    /**
     * Activates some XKB configuration
     * description. Can be NULL
     * @param engine the engine
     * @returns TRUE on success
     */
    activate(engine: Engine): boolean
    /**
     * Compares two records
     * @param data2 another record
     * @returns TRUE if records are same
     */
    equals(data2: ConfigRec): boolean
    /**
     * Loads the current XKB configuration (from backup)
     * @param engine the engine
     * @returns TRUE on success
     */
    get_from_backup(engine: Engine): boolean
    /**
     * Gets the XKB configuration from any root window property
     * @param rules_atom_name atom name of the root window property to read
     * @param rules_file_out pointer to hold the file name
     * @param engine the engine
     * @returns TRUE on success
     */
    get_from_root_window_property(rules_atom_name: xlib.Atom, rules_file_out: string | null, engine: Engine): boolean
    /**
     * Loads the current XKB configuration (from X server)
     * @param engine the engine
     * @returns TRUE on success
     */
    get_from_server(engine: Engine): boolean
    /**
     * Resets the record (equal to Destroy and Init)
     */
    reset(): void
    /**
     * Sets a new layout list.
     * 
     * Frees the previous layout list. This is primarily useful for bindings, in C
     * you can manipulate the `layouts` record member directly.
     * @param new_layouts zero terminated list of new layout names.
     */
    set_layouts(new_layouts: string[]): void
    /**
     * Sets a new model.
     * 
     * Frees the previous model. This is primarily useful for bindings, in C
     * you can manipulate the `model` record member directly.
     * @param new_model new keyboard name.
     */
    set_model(new_model: string | null): void
    /**
     * Sets a new option list.
     * 
     * Frees the previous option list. This is primarily useful for bindings, in C
     * you can manipulate the `options` record member directly.
     * @param new_options zero terminated list of new option names.
     */
    set_options(new_options: string[]): void
    /**
     * Saves the XKB configuration into any root window property
     * @param rules_atom_name atom name of the root window property to write
     * @param rules_file rules file name
     * @param engine the engine
     * @returns TRUE on success
     */
    set_to_root_window_property(rules_atom_name: xlib.Atom, rules_file: string | null, engine: Engine): boolean
    /**
     * Sets a new variant list.
     * 
     * Frees the previous variant list. This is primarily useful for bindings, in C
     * you can manipulate the `variants` record member directly.
     * @param new_variants zero terminated list of new variant names.
     */
    set_variants(new_variants: string[]): void

    // Class property signals of Xkl-1.0.Xkl.ConfigRec

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ConfigRec extends GObject.Object {

    // Own properties of Xkl-1.0.Xkl.ConfigRec

    static name: string
    static $gtype: GObject.GType<ConfigRec>

    // Constructors of Xkl-1.0.Xkl.ConfigRec

    constructor(config?: ConfigRec.ConstructorProperties) 
    /**
     * Create new XklConfigRec
     * @constructor 
     * @returns new instance
     */
    constructor() 
    /**
     * Create new XklConfigRec
     * @constructor 
     * @returns new instance
     */
    static new(): ConfigRec
    _init(config?: ConfigRec.ConstructorProperties): void
    /**
     * Writes some XKB configuration into XKM/XKB/... file
     * @param engine the engine
     * @param file_name name of the file to create
     * @param data valid XKB configuration description. Can be NULL
     * @param binary flag indicating whether the output file should be binary
     * @returns TRUE on success
     */
    static write_to_file(engine: Engine, file_name: string | null, data: ConfigRec, binary: boolean): boolean
}

module ConfigRegistry {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Xkl-1.0.Xkl.ConfigRegistry

        engine?: Engine | null
    }

}

interface ConfigRegistry {

    // Own properties of Xkl-1.0.Xkl.ConfigRegistry

    readonly engine: Engine

    // Own fields of Xkl-1.0.Xkl.ConfigRegistry

    parent: GObject.Object

    // Owm methods of Xkl-1.0.Xkl.ConfigRegistry

    /**
     * Loads a keyboard layout information from the XML configuration registry.
     * @param item pointer to a XklConfigItem containing the name of the keyboard layout. On successfull return, the descriptions are filled.
     * @returns TRUE if appropriate element was found and loaded
     */
    find_layout(item: ConfigItem): boolean
    /**
     * Loads a keyboard model information from the XML configuration registry.
     * @param item pointer to a XklConfigItem containing the name of the keyboard model. On successfull return, the descriptions are filled.
     * @returns TRUE if appropriate element was found and loaded
     */
    find_model(item: ConfigItem): boolean
    /**
     * Loads a keyboard option information from the XML configuration
     * registry.
     * @param option_group_name name of the option group
     * @param item pointer to a XklConfigItem containing the name of the keyboard option. On successfull return, the descriptions are filled.
     * @returns TRUE if appropriate element was found and loaded
     */
    find_option(option_group_name: string | null, item: ConfigItem): boolean
    /**
     * Loads a keyboard option group information from the XML configuration
     * registry.
     * @param item pointer to a XklConfigItem containing the name of the keyboard option group. On successfull return, the descriptions are filled.
     * @returns TRUE if appropriate element was found and loaded
     */
    find_option_group(item: ConfigItem): boolean
    /**
     * Loads a keyboard layout variant information from the XML configuration
     * registry.
     * @param layout_name name of the parent layout
     * @param item pointer to a XklConfigItem containing the name of the keyboard layout variant. On successfull return, the descriptions are filled.
     * @returns TRUE if appropriate element was found and loaded
     */
    find_variant(layout_name: string | null, item: ConfigItem): boolean
    /**
     * Enumerates countries for which layouts are available,
     * from the XML configuration registry
     * @param func callback to call for every ISO 3166 country code
     */
    foreach_country(func: ConfigItemProcessFunc): void
    /**
     * Enumerates keyboard layout variants for the country,
     * from the XML configuration registry
     * @param country_code country ISO code for which variants will be listed
     * @param func callback to call for every country variant
     */
    foreach_country_variant(country_code: string | null, func: TwoConfigItemsProcessFunc): void
    /**
     * Enumerates languages for which layouts are available,
     * from the XML configuration registry
     * @param func callback to call for every ISO 639-2 country code
     */
    foreach_language(func: ConfigItemProcessFunc): void
    /**
     * Enumerates keyboard layout variants for the language,
     * from the XML configuration registry
     * @param language_code language ISO code for which variants will be listed
     * @param func callback to call for every country variant
     */
    foreach_language_variant(language_code: string | null, func: TwoConfigItemsProcessFunc): void
    /**
     * Enumerates keyboard layouts from the XML configuration registry
     * @param func callback to call for every layout
     */
    foreach_layout(func: ConfigItemProcessFunc): void
    /**
     * Enumerates keyboard layout variants from the XML configuration registry
     * @param layout_name layout name for which variants will be listed
     * @param func callback to call for every layout variant
     */
    foreach_layout_variant(layout_name: string | null, func: ConfigItemProcessFunc): void
    /**
     * Enumerates keyboard models from the XML configuration registry
     * @param func callback to call for every model
     */
    foreach_model(func: ConfigItemProcessFunc): void
    /**
     * Enumerates keyboard options from the XML configuration registry
     * @param option_group_name option group name for which variants will be listed
     * @param func callback to call for every option
     */
    foreach_option(option_group_name: string | null, func: ConfigItemProcessFunc): void
    /**
     * Enumerates keyboard option groups from the XML configuration registry
     * @param func callback to call for every option group
     */
    foreach_option_group(func: ConfigItemProcessFunc): void
    /**
     * Loads XML configuration registry. The name is taken from X server
     * (for XKB/libxkbfile, from the root window property)
     * @param if_extras_needed whether exotic materials (layouts, options) should be loaded as well
     * @returns TRUE on success
     */
    load(if_extras_needed: boolean): boolean
    /**
     * Enumerates keyboard layout/variants that match the pattern.
     * The layout/variant is considered as matching if one of the following
     * is true:
     * 1. Country description (from the country list or name) contains pattern as substring
     * 2. Language description (from the language list or name) contains pattern as substring
     * @param pattern pattern to search for (NULL means "all")
     * @param func callback to call for every matching layout/variant
     */
    search_by_pattern(pattern: string | null, func: TwoConfigItemsProcessFunc): void

    // Class property signals of Xkl-1.0.Xkl.ConfigRegistry

    connect(sigName: "notify::engine", callback: (($obj: ConfigRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::engine", callback: (($obj: ConfigRegistry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::engine", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ConfigRegistry extends GObject.Object {

    // Own properties of Xkl-1.0.Xkl.ConfigRegistry

    static name: string
    static $gtype: GObject.GType<ConfigRegistry>

    // Constructors of Xkl-1.0.Xkl.ConfigRegistry

    constructor(config?: ConfigRegistry.ConstructorProperties) 
    _init(config?: ConfigRegistry.ConstructorProperties): void
    /**
     * Create new XklConfig
     * @param engine the engine to use for accessing X in all the operations (like accessing root window properties etc)
     * @returns new instance
     */
    static get_instance(engine: Engine): ConfigRegistry
}

module Engine {

    // Signal callback interfaces

    /**
     * Signal callback interface for `X-config-changed`
     */
    interface XConfigChangedSignalCallback {
        ($obj: Engine): void
    }

    /**
     * Signal callback interface for `X-new-device`
     */
    interface XNewDeviceSignalCallback {
        ($obj: Engine): void
    }

    /**
     * Signal callback interface for `X-state-changed`
     */
    interface XStateChangedSignalCallback {
        ($obj: Engine, object: EngineStateChange, p0: number, p1: boolean): void
    }

    /**
     * Signal callback interface for `new-toplevel-window`
     */
    interface NewToplevelWindowSignalCallback {
        ($obj: Engine, object: number, p0: number): number
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Xkl-1.0.Xkl.Engine

        display?: any | null
    }

}

interface Engine {

    // Own properties of Xkl-1.0.Xkl.Engine

    readonly backendName: string | null
    readonly default_group: number
    readonly display: any
    readonly features: EngineFeatures
    readonly indicators_handling: boolean
    readonly max_num_groups: number
    readonly num_groups: number
    readonly secondary_groups_mask: number

    // Own fields of Xkl-1.0.Xkl.Engine

    parent: GObject.Object

    // Owm methods of Xkl-1.0.Xkl.Engine

    /**
     * Allows to switch (once) to the secondary group
     */
    allow_one_switch_to_secondary_group(): void
    /**
     * Backups current XKB configuration into some property -
     * if this property is not defined yet.
     * @returns TRUE on success
     */
    backup_names_prop(): boolean
    /**
     * Drops the state of a given window (of its "App window").
     * @param win target window
     */
    delete_state(win: xlib.Window): void
    /**
     * Processes X events. Should be included into the main event cycle of an
     * application. One of the most important functions.
     * @param evt delivered X event
     * @returns 0 if the event it processed - 1 otherwise
     */
    filter_events(evt: xlib.XEvent): number
    /**
     * What kind of backend is used
     * @returns some string id of the backend
     */
    get_backend_name(): string | null
    get_current_state(): State
    get_current_window(): xlib.Window
    get_current_window_group(): number
    /**
     * Returns the default group set on window creation
     * If -1, no default group is used
     * @returns the default group
     */
    get_default_group(): number
    /**
     * Provides information regarding available backend features
     * (combination of XKLF_* constants)
     * @returns ORed XKLF_* constants
     */
    get_features(): number
    get_groups_names(): string[]
    get_indicators_handling(): boolean
    get_indicators_names(): string[]
    /**
     * Provides the information on maximum number of simultaneously supported
     * groups (layouts)
     * @returns maximum number of the groups in configuration,         0 if no restrictions.
     */
    get_max_num_groups(): number
    /**
     * Calculates next group id. Does not change the state of anything.
     * @returns next group id
     */
    get_next_group(): number
    get_num_groups(): number
    /**
     * Calculates prev group id. Does not change the state of anything.
     * @returns prev group id
     */
    get_prev_group(): number
    get_secondary_groups_mask(): number
    /**
     * Finds the state for a given window (for its "App window").
     * @param win window to query
     * @param state_out structure to store the state
     * @returns TRUE on success, otherwise FALSE (the error message can be obtained using xkl_GetLastError).
     */
    get_state(win: xlib.Window, state_out: State): boolean
    get_window_title(win: xlib.Window): string | null
    /**
     * Grabs some key
     * @param keycode keycode
     * @param modifiers bitmask of modifiers
     * @returns TRUE on success
     */
    grab_key(keycode: number, modifiers: number): boolean
    is_group_per_toplevel_window(): boolean
    /**
     * Checks whether 2 windows have the same topmost window
     * @param win1 first window
     * @param win2 second window
     * @returns TRUE is windows are in the same application
     */
    is_window_from_same_toplevel_window(win1: xlib.Window, win2: xlib.Window): boolean
    is_window_transparent(win: xlib.Window): boolean
    /**
     * Locks the group. Can be used after xkl_GetXXXGroup functions
     * @param group group number for locking
     */
    lock_group(group: number): void
    /**
     * Temporary pauses listening for XKB-related events
     * @returns 0
     */
    pause_listen(): number
    /**
     * Resumes listening for XKB-related events
     * @returns 0
     */
    resume_listen(): number
    /**
     * Stores ths state for a given window
     * @param win target window
     * @param state new state of the window
     */
    save_state(win: xlib.Window, state: State): void
    /**
     * Configures the default group set on window creation.
     * If -1, no default group is used
     * @param group default group
     */
    set_default_group(group: number): void
    /**
     * Sets the configuration parameter: group per application
     * @param is_global new parameter value
     */
    set_group_per_toplevel_window(is_global: boolean): void
    /**
     * Sets the configuration parameter: perform indicators handling
     * @param whether_handle new parameter value
     */
    set_indicators_handling(whether_handle: boolean): void
    /**
     * Sets the secondary groups (one bit per group).
     * Secondary groups require explicit "allowance" for switching
     * @param mask new group mask
     */
    set_secondary_groups_mask(mask: number): void
    /**
     * Sets the "transparent" flag. It means focus switching onto
     * this window will never change the state.
     * @param win window do set the flag for.
     * @param transparent if true, the windows is transparent.
     */
    set_window_transparent(win: xlib.Window, transparent: boolean): void
    /**
     * Starts listening for XKB-related events
     * @param flags any combination of XKLL_* constants
     * @returns 0
     */
    start_listen(flags: number): number
    /**
     * Stops listening for XKB-related events
     * @param flags any combination of XKLL_* constants
     * @returns 0
     */
    stop_listen(flags: number): number
    /**
     * Ungrabs some key
     * @param keycode keycode
     * @param modifiers bitmask of modifiers
     * @returns TRUE on success
     */
    ungrab_key(keycode: number, modifiers: number): boolean

    // Own virtual methods of Xkl-1.0.Xkl.Engine

    vfunc_config_notify(): void
    vfunc_new_device_notify(): void
    vfunc_new_window_notify(win: xlib.Window, parent: xlib.Window): number
    vfunc_state_notify(change_type: EngineStateChange, group: number, restore: boolean): void

    // Own signals of Xkl-1.0.Xkl.Engine

    connect(sigName: "X-config-changed", callback: Engine.XConfigChangedSignalCallback): number
    connect_after(sigName: "X-config-changed", callback: Engine.XConfigChangedSignalCallback): number
    emit(sigName: "X-config-changed", ...args: any[]): void
    connect(sigName: "X-new-device", callback: Engine.XNewDeviceSignalCallback): number
    connect_after(sigName: "X-new-device", callback: Engine.XNewDeviceSignalCallback): number
    emit(sigName: "X-new-device", ...args: any[]): void
    connect(sigName: "X-state-changed", callback: Engine.XStateChangedSignalCallback): number
    connect_after(sigName: "X-state-changed", callback: Engine.XStateChangedSignalCallback): number
    emit(sigName: "X-state-changed", object: EngineStateChange, p0: number, p1: boolean, ...args: any[]): void
    connect(sigName: "new-toplevel-window", callback: Engine.NewToplevelWindowSignalCallback): number
    connect_after(sigName: "new-toplevel-window", callback: Engine.NewToplevelWindowSignalCallback): number
    emit(sigName: "new-toplevel-window", object: number, p0: number, ...args: any[]): void

    // Class property signals of Xkl-1.0.Xkl.Engine

    connect(sigName: "notify::backendName", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backendName", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backendName", ...args: any[]): void
    connect(sigName: "notify::default-group", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-group", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-group", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::features", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::features", ...args: any[]): void
    connect(sigName: "notify::indicators-handling", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indicators-handling", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indicators-handling", ...args: any[]): void
    connect(sigName: "notify::max-num-groups", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-num-groups", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-num-groups", ...args: any[]): void
    connect(sigName: "notify::num-groups", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-groups", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::num-groups", ...args: any[]): void
    connect(sigName: "notify::secondary-groups-mask", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-groups-mask", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-groups-mask", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Engine extends GObject.Object {

    // Own properties of Xkl-1.0.Xkl.Engine

    static name: string
    static $gtype: GObject.GType<Engine>

    // Constructors of Xkl-1.0.Xkl.Engine

    constructor(config?: Engine.ConstructorProperties) 
    _init(config?: Engine.ConstructorProperties): void
    static INT__LONG_LONG(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any): void
    static VOID__ENUM_INT_BOOLEAN(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any): void
    /**
     * Get the instance of the XklEngine. Within a process, there is always once instance.
     * @param display the X display used by the application
     * @returns the singleton instance
     */
    static get_instance(display: xlib.Display): Engine
}

interface ConfigItemClass {

    // Own fields of Xkl-1.0.Xkl.ConfigItemClass

    parent_class: GObject.ObjectClass
}

abstract class ConfigItemClass {

    // Own properties of Xkl-1.0.Xkl.ConfigItemClass

    static name: string
}

interface ConfigRecClass {

    // Own fields of Xkl-1.0.Xkl.ConfigRecClass

    parent_class: GObject.ObjectClass
}

abstract class ConfigRecClass {

    // Own properties of Xkl-1.0.Xkl.ConfigRecClass

    static name: string
}

interface ConfigRegistryClass {

    // Own fields of Xkl-1.0.Xkl.ConfigRegistryClass

    parent_class: GObject.ObjectClass
}

abstract class ConfigRegistryClass {

    // Own properties of Xkl-1.0.Xkl.ConfigRegistryClass

    static name: string
}

interface ConfigRegistryPrivate {
}

class ConfigRegistryPrivate {

    // Own properties of Xkl-1.0.Xkl.ConfigRegistryPrivate

    static name: string
}

interface EngineClass {

    // Own fields of Xkl-1.0.Xkl.EngineClass

    parent_class: GObject.ObjectClass
    config_notify: (engine: Engine) => void
    new_window_notify: (engine: Engine, win: xlib.Window, parent: xlib.Window) => number
    state_notify: (engine: Engine, change_type: EngineStateChange, group: number, restore: boolean) => void
    new_device_notify: (engine: Engine) => void
}

abstract class EngineClass {

    // Own properties of Xkl-1.0.Xkl.EngineClass

    static name: string
}

interface EnginePrivate {
}

class EnginePrivate {

    // Own properties of Xkl-1.0.Xkl.EnginePrivate

    static name: string
}

interface State {

    // Own fields of Xkl-1.0.Xkl.State

    group: number
    indicators: number
}

class State {

    // Own properties of Xkl-1.0.Xkl.State

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

export default Xkl;
// END