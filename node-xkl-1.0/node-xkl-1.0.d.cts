
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Xkl-1.0
 */

import type xlib from '@girs/xlib-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

/**
 * The listener action modes:
 */
export enum EngineListenModes {
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
export enum EngineStateChange {
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
export enum EngineFeatures {
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
export const MAX_CI_DESC_LENGTH: number
export const MAX_CI_NAME_LENGTH: number
export const MAX_CI_SHORT_DESC_LENGTH: number
/**
 * Get localized country name, from ISO code
 * @param code ISO 3166 Alpha 2 code: 2 chars, uppercase (US, RU, FR, ...)
 * @returns localized country name (USA, Russia, France, ... translated)
 */
export function getCountryName(code: string | null): string | null
/**
 * Get localized language name, from ISO code
 * @param code ISO 639 2B or 2T code: 3 chars, lowercase (eng, rus, fra, ...)
 * @returns localized country name (English, Russiam, French, ... translated)
 */
export function getLanguageName(code: string | null): string | null
export function getLastError(): string | null
/**
 * Restores XKB from the property saved by xkl_backup_names_prop
 * @param engine the engine
 * @returns TRUE on success
 */
export function restoreNamesProp(engine: Engine): boolean
/**
 * Sets maximum debug level.
 * Message of the level more than the one set here - will be ignored
 * @param level new debug level
 */
export function setDebugLevel(level: number): void
/**
 * Callback type used for enumerating keyboard models, layouts, variants, options
 * @callback 
 * @param config the config registry
 * @param item the item from registry
 * @param data anything which can be stored into the pointer
 */
export interface ConfigItemProcessFunc {
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
export interface TwoConfigItemsProcessFunc {
    (config: ConfigRegistry, item: ConfigItem, subitem: ConfigItem, data: any): void
}
export module ConfigItem {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ConfigItem {

    // Own properties of Xkl-1.0.Xkl.ConfigItem

    __gtype__: number

    // Own fields of Xkl-1.0.Xkl.ConfigItem

    parent: GObject.Object
    name: number[]
    shortDescription: number[]
    description: number[]

    // Owm methods of Xkl-1.0.Xkl.ConfigItem

    getDescription(): string | null
    getName(): string | null
    getShortDescription(): string | null
    /**
     * Change the `description` field of a XklConfigItem. This is mostly useful for
     * language bindings, in C you can manipulate the member directly.
     * @param description Description (max. 192        characters); can be NULL.
     */
    setDescription(description: string | null): void
    /**
     * Change the `name` field of a XklConfigItem. This is mostly useful for
     * language bindings, in C you can manipulate the member directly.
     * @param name Name (max. 32 characters); can be NULL.
     */
    setName(name: string | null): void
    /**
     * Change the `short_description` field of a XklConfigItem. This is mostly useful for
     * language bindings, in C you can manipulate the member directly.
     * @param shortDescription Short Description (max. 10        characters); can be NULL.
     */
    setShortDescription(shortDescription: string | null): void

    // Class property signals of Xkl-1.0.Xkl.ConfigItem

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

export class ConfigItem extends GObject.Object {

    // Own properties of Xkl-1.0.Xkl.ConfigItem

    static name: string

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

export module ConfigRec {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ConfigRec {

    // Own properties of Xkl-1.0.Xkl.ConfigRec

    __gtype__: number

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
    getFromBackup(engine: Engine): boolean
    /**
     * Gets the XKB configuration from any root window property
     * @param rulesAtomName atom name of the root window property to read
     * @param rulesFileOut pointer to hold the file name
     * @param engine the engine
     * @returns TRUE on success
     */
    getFromRootWindowProperty(rulesAtomName: xlib.Atom, rulesFileOut: string | null, engine: Engine): boolean
    /**
     * Loads the current XKB configuration (from X server)
     * @param engine the engine
     * @returns TRUE on success
     */
    getFromServer(engine: Engine): boolean
    /**
     * Resets the record (equal to Destroy and Init)
     */
    reset(): void
    /**
     * Sets a new layout list.
     * 
     * Frees the previous layout list. This is primarily useful for bindings, in C
     * you can manipulate the `layouts` record member directly.
     * @param newLayouts zero terminated list of new layout names.
     */
    setLayouts(newLayouts: string[]): void
    /**
     * Sets a new model.
     * 
     * Frees the previous model. This is primarily useful for bindings, in C
     * you can manipulate the `model` record member directly.
     * @param newModel new keyboard name.
     */
    setModel(newModel: string | null): void
    /**
     * Sets a new option list.
     * 
     * Frees the previous option list. This is primarily useful for bindings, in C
     * you can manipulate the `options` record member directly.
     * @param newOptions zero terminated list of new option names.
     */
    setOptions(newOptions: string[]): void
    /**
     * Saves the XKB configuration into any root window property
     * @param rulesAtomName atom name of the root window property to write
     * @param rulesFile rules file name
     * @param engine the engine
     * @returns TRUE on success
     */
    setToRootWindowProperty(rulesAtomName: xlib.Atom, rulesFile: string | null, engine: Engine): boolean
    /**
     * Sets a new variant list.
     * 
     * Frees the previous variant list. This is primarily useful for bindings, in C
     * you can manipulate the `variants` record member directly.
     * @param newVariants zero terminated list of new variant names.
     */
    setVariants(newVariants: string[]): void

    // Class property signals of Xkl-1.0.Xkl.ConfigRec

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

export class ConfigRec extends GObject.Object {

    // Own properties of Xkl-1.0.Xkl.ConfigRec

    static name: string

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
     * @param fileName name of the file to create
     * @param data valid XKB configuration description. Can be NULL
     * @param binary flag indicating whether the output file should be binary
     * @returns TRUE on success
     */
    static writeToFile(engine: Engine, fileName: string | null, data: ConfigRec, binary: boolean): boolean
}

export module ConfigRegistry {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Xkl-1.0.Xkl.ConfigRegistry

        engine?: Engine | null
    }

}

export interface ConfigRegistry {

    // Own properties of Xkl-1.0.Xkl.ConfigRegistry

    readonly engine: Engine
    __gtype__: number

    // Own fields of Xkl-1.0.Xkl.ConfigRegistry

    parent: GObject.Object

    // Owm methods of Xkl-1.0.Xkl.ConfigRegistry

    /**
     * Loads a keyboard layout information from the XML configuration registry.
     * @param item pointer to a XklConfigItem containing the name of the keyboard layout. On successfull return, the descriptions are filled.
     * @returns TRUE if appropriate element was found and loaded
     */
    findLayout(item: ConfigItem): boolean
    /**
     * Loads a keyboard model information from the XML configuration registry.
     * @param item pointer to a XklConfigItem containing the name of the keyboard model. On successfull return, the descriptions are filled.
     * @returns TRUE if appropriate element was found and loaded
     */
    findModel(item: ConfigItem): boolean
    /**
     * Loads a keyboard option information from the XML configuration
     * registry.
     * @param optionGroupName name of the option group
     * @param item pointer to a XklConfigItem containing the name of the keyboard option. On successfull return, the descriptions are filled.
     * @returns TRUE if appropriate element was found and loaded
     */
    findOption(optionGroupName: string | null, item: ConfigItem): boolean
    /**
     * Loads a keyboard option group information from the XML configuration
     * registry.
     * @param item pointer to a XklConfigItem containing the name of the keyboard option group. On successfull return, the descriptions are filled.
     * @returns TRUE if appropriate element was found and loaded
     */
    findOptionGroup(item: ConfigItem): boolean
    /**
     * Loads a keyboard layout variant information from the XML configuration
     * registry.
     * @param layoutName name of the parent layout
     * @param item pointer to a XklConfigItem containing the name of the keyboard layout variant. On successfull return, the descriptions are filled.
     * @returns TRUE if appropriate element was found and loaded
     */
    findVariant(layoutName: string | null, item: ConfigItem): boolean
    /**
     * Enumerates countries for which layouts are available,
     * from the XML configuration registry
     * @param func callback to call for every ISO 3166 country code
     */
    foreachCountry(func: ConfigItemProcessFunc): void
    /**
     * Enumerates keyboard layout variants for the country,
     * from the XML configuration registry
     * @param countryCode country ISO code for which variants will be listed
     * @param func callback to call for every country variant
     */
    foreachCountryVariant(countryCode: string | null, func: TwoConfigItemsProcessFunc): void
    /**
     * Enumerates languages for which layouts are available,
     * from the XML configuration registry
     * @param func callback to call for every ISO 639-2 country code
     */
    foreachLanguage(func: ConfigItemProcessFunc): void
    /**
     * Enumerates keyboard layout variants for the language,
     * from the XML configuration registry
     * @param languageCode language ISO code for which variants will be listed
     * @param func callback to call for every country variant
     */
    foreachLanguageVariant(languageCode: string | null, func: TwoConfigItemsProcessFunc): void
    /**
     * Enumerates keyboard layouts from the XML configuration registry
     * @param func callback to call for every layout
     */
    foreachLayout(func: ConfigItemProcessFunc): void
    /**
     * Enumerates keyboard layout variants from the XML configuration registry
     * @param layoutName layout name for which variants will be listed
     * @param func callback to call for every layout variant
     */
    foreachLayoutVariant(layoutName: string | null, func: ConfigItemProcessFunc): void
    /**
     * Enumerates keyboard models from the XML configuration registry
     * @param func callback to call for every model
     */
    foreachModel(func: ConfigItemProcessFunc): void
    /**
     * Enumerates keyboard options from the XML configuration registry
     * @param optionGroupName option group name for which variants will be listed
     * @param func callback to call for every option
     */
    foreachOption(optionGroupName: string | null, func: ConfigItemProcessFunc): void
    /**
     * Enumerates keyboard option groups from the XML configuration registry
     * @param func callback to call for every option group
     */
    foreachOptionGroup(func: ConfigItemProcessFunc): void
    /**
     * Loads XML configuration registry. The name is taken from X server
     * (for XKB/libxkbfile, from the root window property)
     * @param ifExtrasNeeded whether exotic materials (layouts, options) should be loaded as well
     * @returns TRUE on success
     */
    load(ifExtrasNeeded: boolean): boolean
    /**
     * Enumerates keyboard layout/variants that match the pattern.
     * The layout/variant is considered as matching if one of the following
     * is true:
     * 1. Country description (from the country list or name) contains pattern as substring
     * 2. Language description (from the language list or name) contains pattern as substring
     * @param pattern pattern to search for (NULL means "all")
     * @param func callback to call for every matching layout/variant
     */
    searchByPattern(pattern: string | null, func: TwoConfigItemsProcessFunc): void

    // Class property signals of Xkl-1.0.Xkl.ConfigRegistry

    connect(sigName: "notify::engine", callback: (...args: any[]) => void): number
    on(sigName: "notify::engine", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::engine", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::engine", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::engine", ...args: any[]): void
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

export class ConfigRegistry extends GObject.Object {

    // Own properties of Xkl-1.0.Xkl.ConfigRegistry

    static name: string

    // Constructors of Xkl-1.0.Xkl.ConfigRegistry

    constructor(config?: ConfigRegistry.ConstructorProperties) 
    _init(config?: ConfigRegistry.ConstructorProperties): void
    /**
     * Create new XklConfig
     * @param engine the engine to use for accessing X in all the operations (like accessing root window properties etc)
     * @returns new instance
     */
    static getInstance(engine: Engine): ConfigRegistry
}

export module Engine {

    // Signal callback interfaces

    /**
     * Signal callback interface for `X-config-changed`
     */
    export interface XConfigChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `X-new-device`
     */
    export interface XNewDeviceSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `X-state-changed`
     */
    export interface XStateChangedSignalCallback {
        (object: EngineStateChange, p0: number, p1: boolean): void
    }

    /**
     * Signal callback interface for `new-toplevel-window`
     */
    export interface NewToplevelWindowSignalCallback {
        (object: number, p0: number): number
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Xkl-1.0.Xkl.Engine

        display?: any | null
    }

}

export interface Engine {

    // Own properties of Xkl-1.0.Xkl.Engine

    readonly backendName: string | null
    readonly defaultGroup: number
    readonly display: any
    readonly features: EngineFeatures
    readonly indicatorsHandling: boolean
    readonly maxNumGroups: number
    readonly numGroups: number
    readonly secondaryGroupsMask: number
    __gtype__: number

    // Own fields of Xkl-1.0.Xkl.Engine

    parent: GObject.Object

    // Owm methods of Xkl-1.0.Xkl.Engine

    /**
     * Allows to switch (once) to the secondary group
     */
    allowOneSwitchToSecondaryGroup(): void
    /**
     * Backups current XKB configuration into some property -
     * if this property is not defined yet.
     * @returns TRUE on success
     */
    backupNamesProp(): boolean
    /**
     * Drops the state of a given window (of its "App window").
     * @param win target window
     */
    deleteState(win: xlib.Window): void
    /**
     * Processes X events. Should be included into the main event cycle of an
     * application. One of the most important functions.
     * @param evt delivered X event
     * @returns 0 if the event it processed - 1 otherwise
     */
    filterEvents(evt: xlib.XEvent): number
    /**
     * What kind of backend is used
     * @returns some string id of the backend
     */
    getBackendName(): string | null
    getCurrentState(): State
    getCurrentWindow(): xlib.Window
    getCurrentWindowGroup(): number
    /**
     * Returns the default group set on window creation
     * If -1, no default group is used
     * @returns the default group
     */
    getDefaultGroup(): number
    /**
     * Provides information regarding available backend features
     * (combination of XKLF_* constants)
     * @returns ORed XKLF_* constants
     */
    getFeatures(): number
    getGroupsNames(): string[]
    getIndicatorsHandling(): boolean
    getIndicatorsNames(): string[]
    /**
     * Provides the information on maximum number of simultaneously supported
     * groups (layouts)
     * @returns maximum number of the groups in configuration,         0 if no restrictions.
     */
    getMaxNumGroups(): number
    /**
     * Calculates next group id. Does not change the state of anything.
     * @returns next group id
     */
    getNextGroup(): number
    getNumGroups(): number
    /**
     * Calculates prev group id. Does not change the state of anything.
     * @returns prev group id
     */
    getPrevGroup(): number
    getSecondaryGroupsMask(): number
    /**
     * Finds the state for a given window (for its "App window").
     * @param win window to query
     * @param stateOut structure to store the state
     * @returns TRUE on success, otherwise FALSE (the error message can be obtained using xkl_GetLastError).
     */
    getState(win: xlib.Window, stateOut: State): boolean
    getWindowTitle(win: xlib.Window): string | null
    /**
     * Grabs some key
     * @param keycode keycode
     * @param modifiers bitmask of modifiers
     * @returns TRUE on success
     */
    grabKey(keycode: number, modifiers: number): boolean
    isGroupPerToplevelWindow(): boolean
    /**
     * Checks whether 2 windows have the same topmost window
     * @param win1 first window
     * @param win2 second window
     * @returns TRUE is windows are in the same application
     */
    isWindowFromSameToplevelWindow(win1: xlib.Window, win2: xlib.Window): boolean
    isWindowTransparent(win: xlib.Window): boolean
    /**
     * Locks the group. Can be used after xkl_GetXXXGroup functions
     * @param group group number for locking
     */
    lockGroup(group: number): void
    /**
     * Temporary pauses listening for XKB-related events
     * @returns 0
     */
    pauseListen(): number
    /**
     * Resumes listening for XKB-related events
     * @returns 0
     */
    resumeListen(): number
    /**
     * Stores ths state for a given window
     * @param win target window
     * @param state new state of the window
     */
    saveState(win: xlib.Window, state: State): void
    /**
     * Configures the default group set on window creation.
     * If -1, no default group is used
     * @param group default group
     */
    setDefaultGroup(group: number): void
    /**
     * Sets the configuration parameter: group per application
     * @param isGlobal new parameter value
     */
    setGroupPerToplevelWindow(isGlobal: boolean): void
    /**
     * Sets the configuration parameter: perform indicators handling
     * @param whetherHandle new parameter value
     */
    setIndicatorsHandling(whetherHandle: boolean): void
    /**
     * Sets the secondary groups (one bit per group).
     * Secondary groups require explicit "allowance" for switching
     * @param mask new group mask
     */
    setSecondaryGroupsMask(mask: number): void
    /**
     * Sets the "transparent" flag. It means focus switching onto
     * this window will never change the state.
     * @param win window do set the flag for.
     * @param transparent if true, the windows is transparent.
     */
    setWindowTransparent(win: xlib.Window, transparent: boolean): void
    /**
     * Starts listening for XKB-related events
     * @param flags any combination of XKLL_* constants
     * @returns 0
     */
    startListen(flags: number): number
    /**
     * Stops listening for XKB-related events
     * @param flags any combination of XKLL_* constants
     * @returns 0
     */
    stopListen(flags: number): number
    /**
     * Ungrabs some key
     * @param keycode keycode
     * @param modifiers bitmask of modifiers
     * @returns TRUE on success
     */
    ungrabKey(keycode: number, modifiers: number): boolean

    // Own virtual methods of Xkl-1.0.Xkl.Engine

    configNotify(): void
    newDeviceNotify(): void
    newWindowNotify(win: xlib.Window, parent: xlib.Window): number
    stateNotify(changeType: EngineStateChange, group: number, restore: boolean): void

    // Own signals of Xkl-1.0.Xkl.Engine

    connect(sigName: "X-config-changed", callback: Engine.XConfigChangedSignalCallback): number
    on(sigName: "X-config-changed", callback: Engine.XConfigChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "X-config-changed", callback: Engine.XConfigChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "X-config-changed", callback: Engine.XConfigChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "X-config-changed", ...args: any[]): void
    connect(sigName: "X-new-device", callback: Engine.XNewDeviceSignalCallback): number
    on(sigName: "X-new-device", callback: Engine.XNewDeviceSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "X-new-device", callback: Engine.XNewDeviceSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "X-new-device", callback: Engine.XNewDeviceSignalCallback): NodeJS.EventEmitter
    emit(sigName: "X-new-device", ...args: any[]): void
    connect(sigName: "X-state-changed", callback: Engine.XStateChangedSignalCallback): number
    on(sigName: "X-state-changed", callback: Engine.XStateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "X-state-changed", callback: Engine.XStateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "X-state-changed", callback: Engine.XStateChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "X-state-changed", p0: number, p1: boolean, ...args: any[]): void
    connect(sigName: "new-toplevel-window", callback: Engine.NewToplevelWindowSignalCallback): number
    on(sigName: "new-toplevel-window", callback: Engine.NewToplevelWindowSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-toplevel-window", callback: Engine.NewToplevelWindowSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-toplevel-window", callback: Engine.NewToplevelWindowSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-toplevel-window", p0: number, ...args: any[]): void

    // Class property signals of Xkl-1.0.Xkl.Engine

    connect(sigName: "notify::backendName", callback: (...args: any[]) => void): number
    on(sigName: "notify::backendName", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backendName", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backendName", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backendName", ...args: any[]): void
    connect(sigName: "notify::default-group", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-group", ...args: any[]): void
    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::features", callback: (...args: any[]) => void): number
    on(sigName: "notify::features", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::features", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::features", ...args: any[]): void
    connect(sigName: "notify::indicators-handling", callback: (...args: any[]) => void): number
    on(sigName: "notify::indicators-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::indicators-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::indicators-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::indicators-handling", ...args: any[]): void
    connect(sigName: "notify::max-num-groups", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-num-groups", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-num-groups", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-num-groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-num-groups", ...args: any[]): void
    connect(sigName: "notify::num-groups", callback: (...args: any[]) => void): number
    on(sigName: "notify::num-groups", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::num-groups", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::num-groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::num-groups", ...args: any[]): void
    connect(sigName: "notify::secondary-groups-mask", callback: (...args: any[]) => void): number
    on(sigName: "notify::secondary-groups-mask", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::secondary-groups-mask", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::secondary-groups-mask", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::secondary-groups-mask", ...args: any[]): void
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

export class Engine extends GObject.Object {

    // Own properties of Xkl-1.0.Xkl.Engine

    static name: string

    // Constructors of Xkl-1.0.Xkl.Engine

    constructor(config?: Engine.ConstructorProperties) 
    _init(config?: Engine.ConstructorProperties): void
    static iNTLONGLONG(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: any, marshalData: any): void
    static vOIDENUMINTBOOLEAN(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: any, marshalData: any): void
    /**
     * Get the instance of the XklEngine. Within a process, there is always once instance.
     * @param display the X display used by the application
     * @returns the singleton instance
     */
    static getInstance(display: xlib.Display): Engine
}

export interface ConfigItemClass {

    // Own fields of Xkl-1.0.Xkl.ConfigItemClass

    parentClass: GObject.ObjectClass
}

export abstract class ConfigItemClass {

    // Own properties of Xkl-1.0.Xkl.ConfigItemClass

    static name: string
}

export interface ConfigRecClass {

    // Own fields of Xkl-1.0.Xkl.ConfigRecClass

    parentClass: GObject.ObjectClass
}

export abstract class ConfigRecClass {

    // Own properties of Xkl-1.0.Xkl.ConfigRecClass

    static name: string
}

export interface ConfigRegistryClass {

    // Own fields of Xkl-1.0.Xkl.ConfigRegistryClass

    parentClass: GObject.ObjectClass
}

export abstract class ConfigRegistryClass {

    // Own properties of Xkl-1.0.Xkl.ConfigRegistryClass

    static name: string
}

export interface ConfigRegistryPrivate {
}

export class ConfigRegistryPrivate {

    // Own properties of Xkl-1.0.Xkl.ConfigRegistryPrivate

    static name: string
}

export interface EngineClass {

    // Own fields of Xkl-1.0.Xkl.EngineClass

    parentClass: GObject.ObjectClass
    configNotify: (engine: Engine) => void
    newWindowNotify: (engine: Engine, win: xlib.Window, parent: xlib.Window) => number
    stateNotify: (engine: Engine, changeType: EngineStateChange, group: number, restore: boolean) => void
    newDeviceNotify: (engine: Engine) => void
}

export abstract class EngineClass {

    // Own properties of Xkl-1.0.Xkl.EngineClass

    static name: string
}

export interface EnginePrivate {
}

export class EnginePrivate {

    // Own properties of Xkl-1.0.Xkl.EnginePrivate

    static name: string
}

export interface State {

    // Own fields of Xkl-1.0.Xkl.State

    group: number
    indicators: number
}

export class State {

    // Own properties of Xkl-1.0.Xkl.State

    static name: string
}