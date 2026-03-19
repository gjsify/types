/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type xlib from '@girs/xlib-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Xkl {
    /**
     * Xkl-1.0
     */

    export namespace EngineListenModes {
        export const $gtype: GObject.GType<EngineListenModes>;
    }

    /**
     * The listener action modes:
     * @gir-type Enum
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

    export namespace EngineStateChange {
        export const $gtype: GObject.GType<EngineStateChange>;
    }

    /**
     * The type of the keyboard state change
     * @gir-type Enum
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

    const MAX_CI_DESC_LENGTH: number;
    const MAX_CI_NAME_LENGTH: number;
    const MAX_CI_SHORT_DESC_LENGTH: number;
    /**
     * Get localized country name, from ISO code
     * @param code ISO 3166 Alpha 2 code: 2 chars, uppercase (US, RU, FR, ...)
     * @returns localized country name (USA, Russia, France, ... translated)
     */
    function get_country_name(code: string): string;
    /**
     * Get localized language name, from ISO code
     * @param code ISO 639 2B or 2T code: 3 chars, lowercase (eng, rus, fra, ...)
     * @returns localized country name (English, Russiam, French, ... translated)
     */
    function get_language_name(code: string): string;
    /**
     * @returns the text message (statically allocated) of the last error
     */
    function get_last_error(): string;
    /**
     * Restores XKB from the property saved by xkl_backup_names_prop
     * @param engine the engine
     * @returns TRUE on success
     */
    function restore_names_prop(engine: Engine): boolean;
    /**
     * Sets maximum debug level.
     * Message of the level more than the one set here - will be ignored
     * @param level new debug level
     */
    function set_debug_level(level: number): void;
    /**
     * @gir-type Callback
     */
    interface ConfigItemProcessFunc {
        (config: ConfigRegistry, item: ConfigItem, data: any): void;
    }
    /**
     * @gir-type Callback
     */
    interface TwoConfigItemsProcessFunc {
        (config: ConfigRegistry, item: ConfigItem, subitem: ConfigItem, data: any): void;
    }
    export namespace EngineFeatures {
        export const $gtype: GObject.GType<EngineFeatures>;
    }

    /**
     * A set of flags used to indicate the capabilities of the active backend
     * @gir-type Flags
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

    namespace ConfigItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ConfigItem extends GObject.Object {
        static $gtype: GObject.GType<ConfigItem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ConfigItem.SignalSignatures;

        // Fields

        name: number[];
        short_description: number[];
        description: number[];

        // Constructors

        constructor(properties?: Partial<ConfigItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ConfigItem;

        // Signals

        /** @signal */
        connect<K extends keyof ConfigItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ConfigItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ConfigItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ConfigItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ConfigItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ConfigItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The `description` field of a XklConfigItem. This is mostly useful for language bindings, in C you can manipulate the member directly.
         */
        get_description(): string;
        /**
         * @returns The `name` field of a XklConfigItem. This is mostly useful for language bindings, in C you can manipulate the member directly.
         */
        get_name(): string;
        /**
         * @returns The `short_description` field of a XklConfigItem. This is mostly useful for language bindings, in C you can manipulate the member directly.
         */
        get_short_description(): string;
        /**
         * Change the `description` field of a XklConfigItem. This is mostly useful for
         * language bindings, in C you can manipulate the member directly.
         * @param description Description (max. 192        characters); can be NULL.
         */
        set_description(description?: string | null): void;
        /**
         * Change the `name` field of a XklConfigItem. This is mostly useful for
         * language bindings, in C you can manipulate the member directly.
         * @param name Name (max. 32 characters); can be NULL.
         */
        set_name(name?: string | null): void;
        /**
         * Change the `short_description` field of a XklConfigItem. This is mostly useful for
         * language bindings, in C you can manipulate the member directly.
         * @param short_description Short Description (max. 10        characters); can be NULL.
         */
        set_short_description(short_description?: string | null): void;
    }

    namespace ConfigRec {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ConfigRec extends GObject.Object {
        static $gtype: GObject.GType<ConfigRec>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ConfigRec.SignalSignatures;

        // Fields

        model: string;
        layouts: string[];
        variants: string[];
        options: string[];

        // Constructors

        constructor(properties?: Partial<ConfigRec.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ConfigRec;

        // Signals

        /** @signal */
        connect<K extends keyof ConfigRec.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ConfigRec.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ConfigRec.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ConfigRec.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ConfigRec.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ConfigRec.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Writes some XKB configuration into XKM/XKB/... file
         * @param engine the engine
         * @param file_name name of the file to create
         * @param data valid XKB configuration description. Can be NULL
         * @param binary flag indicating whether the output file should be binary
         */
        static write_to_file(engine: Engine, file_name: string, data: ConfigRec, binary: boolean): boolean;

        // Methods

        /**
         * Activates some XKB configuration
         * description. Can be NULL
         * @param engine the engine
         * @returns TRUE on success
         */
        activate(engine: Engine): boolean;
        /**
         * Compares two records
         * @param data2 another record
         * @returns TRUE if records are same
         */
        equals(data2: ConfigRec): boolean;
        /**
         * Loads the current XKB configuration (from backup)
         * @param engine the engine
         * @returns TRUE on success
         */
        get_from_backup(engine: Engine): boolean;
        /**
         * Gets the XKB configuration from any root window property
         * @param rules_atom_name atom name of the root window property to read
         * @param rules_file_out pointer to hold the file name
         * @param engine the engine
         * @returns TRUE on success
         */
        get_from_root_window_property(rules_atom_name: xlib.Atom, rules_file_out: string, engine: Engine): boolean;
        /**
         * Loads the current XKB configuration (from X server)
         * @param engine the engine
         * @returns TRUE on success
         */
        get_from_server(engine: Engine): boolean;
        /**
         * Resets the record (equal to Destroy and Init)
         */
        reset(): void;
        /**
         * Sets a new layout list.
         *
         * Frees the previous layout list. This is primarily useful for bindings, in C
         * you can manipulate the `layouts` record member directly.
         * @param new_layouts zero terminated list of new layout names.
         */
        set_layouts(new_layouts: string[]): void;
        /**
         * Sets a new model.
         *
         * Frees the previous model. This is primarily useful for bindings, in C
         * you can manipulate the `model` record member directly.
         * @param new_model new keyboard name.
         */
        set_model(new_model: string): void;
        /**
         * Sets a new option list.
         *
         * Frees the previous option list. This is primarily useful for bindings, in C
         * you can manipulate the `options` record member directly.
         * @param new_options zero terminated list of new option names.
         */
        set_options(new_options: string[]): void;
        /**
         * Saves the XKB configuration into any root window property
         * @param rules_atom_name atom name of the root window property to write
         * @param rules_file rules file name
         * @param engine the engine
         * @returns TRUE on success
         */
        set_to_root_window_property(rules_atom_name: xlib.Atom, rules_file: string, engine: Engine): boolean;
        /**
         * Sets a new variant list.
         *
         * Frees the previous variant list. This is primarily useful for bindings, in C
         * you can manipulate the `variants` record member directly.
         * @param new_variants zero terminated list of new variant names.
         */
        set_variants(new_variants: string[]): void;
    }

    namespace ConfigRegistry {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::engine': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            engine: Engine;
        }
    }

    /**
     * @gir-type Class
     */
    class ConfigRegistry extends GObject.Object {
        static $gtype: GObject.GType<ConfigRegistry>;

        // Properties

        get engine(): Engine;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ConfigRegistry.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ConfigRegistry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ConfigRegistry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ConfigRegistry.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ConfigRegistry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ConfigRegistry.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ConfigRegistry.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ConfigRegistry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Create new XklConfig
         * @param engine the engine to use for accessing X in all the operations (like accessing root window properties etc)
         */
        static get_instance(engine: Engine): ConfigRegistry;

        // Methods

        /**
         * Loads a keyboard layout information from the XML configuration registry.
         * @param item pointer to a XklConfigItem containing the name of the keyboard layout. On successfull return, the descriptions are filled.
         * @returns TRUE if appropriate element was found and loaded
         */
        find_layout(item: ConfigItem): boolean;
        /**
         * Loads a keyboard model information from the XML configuration registry.
         * @param item pointer to a XklConfigItem containing the name of the keyboard model. On successfull return, the descriptions are filled.
         * @returns TRUE if appropriate element was found and loaded
         */
        find_model(item: ConfigItem): boolean;
        /**
         * Loads a keyboard option information from the XML configuration
         * registry.
         * @param option_group_name name of the option group
         * @param item pointer to a XklConfigItem containing the name of the keyboard option. On successfull return, the descriptions are filled.
         * @returns TRUE if appropriate element was found and loaded
         */
        find_option(option_group_name: string, item: ConfigItem): boolean;
        /**
         * Loads a keyboard option group information from the XML configuration
         * registry.
         * @param item pointer to a XklConfigItem containing the name of the keyboard option group. On successfull return, the descriptions are filled.
         * @returns TRUE if appropriate element was found and loaded
         */
        find_option_group(item: ConfigItem): boolean;
        /**
         * Loads a keyboard layout variant information from the XML configuration
         * registry.
         * @param layout_name name of the parent layout
         * @param item pointer to a XklConfigItem containing the name of the keyboard layout variant. On successfull return, the descriptions are filled.
         * @returns TRUE if appropriate element was found and loaded
         */
        find_variant(layout_name: string, item: ConfigItem): boolean;
        /**
         * Enumerates countries for which layouts are available,
         * from the XML configuration registry
         * @param func callback to call for every ISO 3166 country code
         */
        foreach_country(func: ConfigItemProcessFunc): void;
        /**
         * Enumerates keyboard layout variants for the country,
         * from the XML configuration registry
         * @param country_code country ISO code for which variants will be listed
         * @param func callback to call for every country variant
         */
        foreach_country_variant(country_code: string, func: TwoConfigItemsProcessFunc): void;
        /**
         * Enumerates languages for which layouts are available,
         * from the XML configuration registry
         * @param func callback to call for every ISO 639-2 country code
         */
        foreach_language(func: ConfigItemProcessFunc): void;
        /**
         * Enumerates keyboard layout variants for the language,
         * from the XML configuration registry
         * @param language_code language ISO code for which variants will be listed
         * @param func callback to call for every country variant
         */
        foreach_language_variant(language_code: string, func: TwoConfigItemsProcessFunc): void;
        /**
         * Enumerates keyboard layouts from the XML configuration registry
         * @param func callback to call for every layout
         */
        foreach_layout(func: ConfigItemProcessFunc): void;
        /**
         * Enumerates keyboard layout variants from the XML configuration registry
         * @param layout_name layout name for which variants will be listed
         * @param func callback to call for every layout variant
         */
        foreach_layout_variant(layout_name: string, func: ConfigItemProcessFunc): void;
        /**
         * Enumerates keyboard models from the XML configuration registry
         * @param func callback to call for every model
         */
        foreach_model(func: ConfigItemProcessFunc): void;
        /**
         * Enumerates keyboard options from the XML configuration registry
         * @param option_group_name option group name for which variants will be listed
         * @param func callback to call for every option
         */
        foreach_option(option_group_name: string, func: ConfigItemProcessFunc): void;
        /**
         * Enumerates keyboard option groups from the XML configuration registry
         * @param func callback to call for every option group
         */
        foreach_option_group(func: ConfigItemProcessFunc): void;
        /**
         * Loads XML configuration registry. The name is taken from X server
         * (for XKB/libxkbfile, from the root window property)
         * @param if_extras_needed whether exotic materials (layouts, options) should be loaded as well
         * @returns TRUE on success
         */
        load(if_extras_needed: boolean): boolean;
        /**
         * Enumerates keyboard layout/variants that match the pattern.
         * The layout/variant is considered as matching if one of the following
         * is true:
         * 1. Country description (from the country list or name) contains pattern as substring
         * 2. Language description (from the language list or name) contains pattern as substring
         * @param pattern pattern to search for (NULL means "all")
         * @param func callback to call for every matching layout/variant
         */
        search_by_pattern(pattern: string, func: TwoConfigItemsProcessFunc): void;
    }

    namespace Engine {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            'X-config-changed': () => void;
            /**
             * @signal
             */
            'X-new-device': () => void;
            /**
             * @signal
             */
            'X-state-changed': (arg0: EngineStateChange, arg1: number, arg2: boolean) => void;
            /**
             * @signal
             */
            'new-toplevel-window': (arg0: number, arg1: number) => number;
            'notify::backend-name': (pspec: GObject.ParamSpec) => void;
            'notify::default-group': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::features': (pspec: GObject.ParamSpec) => void;
            'notify::indicators-handling': (pspec: GObject.ParamSpec) => void;
            'notify::max-num-groups': (pspec: GObject.ParamSpec) => void;
            'notify::num-groups': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-groups-mask': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            backendName: string;
            default_group: number;
            defaultGroup: number;
            display: any;
            features: EngineFeatures;
            indicators_handling: boolean;
            indicatorsHandling: boolean;
            max_num_groups: number;
            maxNumGroups: number;
            num_groups: number;
            numGroups: number;
            secondary_groups_mask: number;
            secondaryGroupsMask: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Engine extends GObject.Object {
        static $gtype: GObject.GType<Engine>;

        // Properties

        get backendName(): string;
        get default_group(): number;
        get defaultGroup(): number;
        get display(): any;
        get features(): EngineFeatures;
        get indicators_handling(): boolean;
        get indicatorsHandling(): boolean;
        get max_num_groups(): number;
        get maxNumGroups(): number;
        get num_groups(): number;
        get numGroups(): number;
        get secondary_groups_mask(): number;
        get secondaryGroupsMask(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Engine.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Engine.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Engine.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Engine.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Engine.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Engine.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Engine.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Engine.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param closure
         * @param return_value
         * @param n_param_values
         * @param param_values
         * @param invocation_hint
         * @param marshal_data
         */
        static INT__LONG_LONG(
            closure: GObject.Closure,
            return_value: GObject.Value | any,
            n_param_values: number,
            param_values: GObject.Value | any,
            invocation_hint: any,
            marshal_data: any,
        ): void;
        /**
         * @param closure
         * @param return_value
         * @param n_param_values
         * @param param_values
         * @param invocation_hint
         * @param marshal_data
         */
        static VOID__ENUM_INT_BOOLEAN(
            closure: GObject.Closure,
            return_value: GObject.Value | any,
            n_param_values: number,
            param_values: GObject.Value | any,
            invocation_hint: any,
            marshal_data: any,
        ): void;
        /**
         * Get the instance of the XklEngine. Within a process, there is always once instance.
         * @param display the X display used by the application
         */
        static get_instance(display: xlib.Display): Engine;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_config_notify(): void;
        /**
         * @virtual
         */
        vfunc_new_device_notify(): void;
        /**
         * @param win
         * @param parent
         * @virtual
         */
        vfunc_new_window_notify(win: xlib.Window, parent: xlib.Window): number;
        /**
         * @param change_type
         * @param group
         * @param restore
         * @virtual
         */
        vfunc_state_notify(change_type: EngineStateChange, group: number, restore: boolean): void;

        // Methods

        /**
         * Allows to switch (once) to the secondary group
         */
        allow_one_switch_to_secondary_group(): void;
        /**
         * Backups current XKB configuration into some property -
         * if this property is not defined yet.
         * @returns TRUE on success
         */
        backup_names_prop(): boolean;
        /**
         * Drops the state of a given window (of its "App window").
         * @param win target window
         */
        delete_state(win: xlib.Window): void;
        /**
         * Processes X events. Should be included into the main event cycle of an
         * application. One of the most important functions.
         * @param evt delivered X event
         * @returns 0 if the event it processed - 1 otherwise
         */
        filter_events(evt: xlib.XEvent): number;
        /**
         * What kind of backend is used
         * @returns some string id of the backend
         */
        get_backend_name(): string;
        /**
         * @returns current state of the keyboard. Returned value is a statically allocated buffer, should not be freed.
         */
        get_current_state(): State;
        /**
         * @returns currently focused window
         */
        get_current_window(): xlib.Window;
        /**
         * @returns saved group id of the current window.
         */
        get_current_window_group(): number;
        /**
         * Returns the default group set on window creation
         * If -1, no default group is used
         * @returns the default group
         */
        get_default_group(): number;
        /**
         * Provides information regarding available backend features
         * (combination of XKLF_* constants)
         * @returns ORed XKLF_* constants
         */
        get_features(): number;
        /**
         * @returns the array of group names for the current XKB configuration (keyboard). This array is static, should not be freed
         */
        get_groups_names(): string[];
        /**
         * @returns the value of the parameter: perform indicator handling
         */
        get_indicators_handling(): boolean;
        /**
         * @returns the array of indicator names for the current XKB configuration (keyboard). This array is static, should not be freed
         */
        get_indicators_names(): string[];
        /**
         * Provides the information on maximum number of simultaneously supported
         * groups (layouts)
         * @returns maximum number of the groups in configuration,         0 if no restrictions.
         */
        get_max_num_groups(): number;
        /**
         * Calculates next group id. Does not change the state of anything.
         * @returns next group id
         */
        get_next_group(): number;
        /**
         * @returns the total number of groups in the current configuration (keyboard)
         */
        get_num_groups(): number;
        /**
         * Calculates prev group id. Does not change the state of anything.
         * @returns prev group id
         */
        get_prev_group(): number;
        /**
         * @returns the secondary group mask
         */
        get_secondary_groups_mask(): number;
        /**
         * Finds the state for a given window (for its "App window").
         * @param win window to query
         * @param state_out structure to store the state
         * @returns TRUE on success, otherwise FALSE (the error message can be obtained using xkl_GetLastError).
         */
        get_state(win: xlib.Window, state_out: State): boolean;
        /**
         * @param win X window
         * @returns the window title of some window or NULL. If not NULL, it should be freed with XFree
         */
        get_window_title(win: xlib.Window): string;
        /**
         * Grabs some key
         * @param keycode keycode
         * @param modifiers bitmask of modifiers
         * @returns TRUE on success
         */
        grab_key(keycode: number, modifiers: number): boolean;
        /**
         * @returns the value of the parameter: group per application
         */
        is_group_per_toplevel_window(): boolean;
        /**
         * Checks whether 2 windows have the same topmost window
         * @param win1 first window
         * @param win2 second window
         * @returns TRUE is windows are in the same application
         */
        is_window_from_same_toplevel_window(win1: xlib.Window, win2: xlib.Window): boolean;
        /**
         * @param win window to get the transparent flag from.
         * @returns TRUE if the window is "transparent"
         */
        is_window_transparent(win: xlib.Window): boolean;
        /**
         * Locks the group. Can be used after xkl_GetXXXGroup functions
         * @param group group number for locking
         */
        lock_group(group: number): void;
        /**
         * Temporary pauses listening for XKB-related events
         */
        pause_listen(): number;
        /**
         * Resumes listening for XKB-related events
         */
        resume_listen(): number;
        /**
         * Stores ths state for a given window
         * @param win target window
         * @param state new state of the window
         */
        save_state(win: xlib.Window, state: State): void;
        /**
         * Configures the default group set on window creation.
         * If -1, no default group is used
         * @param group default group
         */
        set_default_group(group: number): void;
        /**
         * Sets the configuration parameter: group per application
         * @param is_global new parameter value
         */
        set_group_per_toplevel_window(is_global: boolean): void;
        /**
         * Sets the configuration parameter: perform indicators handling
         * @param whether_handle new parameter value
         */
        set_indicators_handling(whether_handle: boolean): void;
        /**
         * Sets the secondary groups (one bit per group).
         * Secondary groups require explicit "allowance" for switching
         * @param mask new group mask
         */
        set_secondary_groups_mask(mask: number): void;
        /**
         * Sets the "transparent" flag. It means focus switching onto
         * this window will never change the state.
         * @param win window do set the flag for.
         * @param transparent if true, the windows is transparent.
         */
        set_window_transparent(win: xlib.Window, transparent: boolean): void;
        /**
         * Starts listening for XKB-related events
         * @param flags any combination of XKLL_* constants
         */
        start_listen(flags: number): number;
        /**
         * Stops listening for XKB-related events
         * @param flags any combination of XKLL_* constants
         */
        stop_listen(flags: number): number;
        /**
         * Ungrabs some key
         * @param keycode keycode
         * @param modifiers bitmask of modifiers
         * @returns TRUE on success
         */
        ungrab_key(keycode: number, modifiers: number): boolean;
    }

    /**
     * @gir-type Alias
     */
    type ConfigItemClass = typeof ConfigItem;
    /**
     * @gir-type Alias
     */
    type ConfigRecClass = typeof ConfigRec;
    /**
     * @gir-type Alias
     */
    type ConfigRegistryClass = typeof ConfigRegistry;
    /**
     * @gir-type Struct
     */
    abstract class ConfigRegistryPrivate {
        static $gtype: GObject.GType<ConfigRegistryPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type EngineClass = typeof Engine;
    /**
     * @gir-type Struct
     */
    abstract class EnginePrivate {
        static $gtype: GObject.GType<EnginePrivate>;
    }

    /**
     * @gir-type Struct
     */
    class State {
        static $gtype: GObject.GType<State>;

        // Fields

        group: number;
        indicators: number;

        // Constructors

        constructor(
            properties?: Partial<{
                group: number;
                indicators: number;
            }>,
        );
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

export default Xkl;

// END
