
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
import type GstPbutils from '@girs/gstpbutils-1.0';
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstAudio from '@girs/gstaudio-1.0';
import type Gio from '@girs/gio-2.0';

export namespace GstValidate {

    /**
     * GstValidate-1.0
     */


    /**
     * @gir-type Enum
     */
    export namespace ActionReturn {
        export const $gtype: GObject.GType<ActionReturn>;
    }

    /**
     * GST_VALIDATE_EXECUTE_ACTION_ERROR:
     * GST_VALIDATE_EXECUTE_ACTION_OK:
     * GST_VALIDATE_EXECUTE_ACTION_ASYNC:
     * GST_VALIDATE_EXECUTE_ACTION_ERROR_REPORTED:
     * GST_VALIDATE_EXECUTE_ACTION_IN_PROGRESS:
     * GST_VALIDATE_EXECUTE_ACTION_NONE:
     * GST_VALIDATE_EXECUTE_ACTION_DONE:
     * @gir-type Enum
     */
    enum ActionReturn {
        ERROR,
        OK,
        ASYNC,
        /**
         * The action will be executed asynchronously without blocking further
         * actions to be executed
         */
        NON_BLOCKING,
        INTERLACED,
        ERROR_REPORTED,
        IN_PROGRESS,
        NONE,
        DONE,
    }


    /**
     * @gir-type Enum
     */
    export namespace InterceptionReturn {
        export const $gtype: GObject.GType<InterceptionReturn>;
    }

    /**
     * @gir-type Enum
     */
    enum InterceptionReturn {
        /**
         * The report will be completely ignored.
         */
        DROP,
        /**
         * The report will be kept by the reporter,
         *                              but not reported to the runner.
         */
        KEEP,
        /**
         * The report will be kept by the reporter
         *                                and reported to the runner.
         */
        REPORT,
    }


    /**
     * @gir-type Enum
     */
    export namespace ReportLevel {
        export const $gtype: GObject.GType<ReportLevel>;
    }

    /**
     * @gir-type Enum
     */
    enum ReportLevel {
        CRITICAL,
        WARNING,
        ISSUE,
        IGNORE,
        UNKNOWN,
        EXPECTED,
        NUM_ENTRIES,
    }


    /**
     * @gir-type Enum
     */
    export namespace ReportingDetails {
        export const $gtype: GObject.GType<ReportingDetails>;
    }

    /**
     * Setting the reporting level allows to control the way issues are reported
     * when calling `gst_validate_runner_printf`.
     * 
     * The reporting level can be set through the "GST_VALIDATE_REPORTING_DETAILS"
     * environment variable, as  a comma-separated list of (optional) object categories / names
     * and levels. No object category / name sets the global level.
     * 
     * Examples: GST_VALIDATE_REPORTING_DETAILS=synthetic,h264parse:all
     *           GST_VALIDATE_REPORTING_DETAILS=none,h264parse::sink_0:synthetic
     * @gir-type Enum
     */
    enum ReportingDetails {
        /**
         * No reporting level known,
         * reporting will default to the global reporting level.
         */
        UNKNOWN,
        /**
         * No debugging level specified or desired. Used to deactivate
         *  debugging output.
         */
        NONE,
        /**
         * Summary of the issues found, with no
         *  details.
         */
        SYNTHETIC,
        /**
         * If set as the default level, similar
         *  issues can be reported multiple times for different subchains.
         *  If set as the level for a particular object (my_object:subchain), validate
         *  will report the issues where the object is the first to report an issue for
         *  a subchain.
         */
        SUBCHAIN,
        /**
         * If set as the default level, all the
         * distinct issues for all the monitors will be reported.
         * If set as the level for a particular object, all the distinct issues for this object
         * will be reported.
         * Note that if the same issue happens twice on the same object, up until this
         * level that issue is only reported once.
         */
        MONITOR,
        /**
         * All the issues will be reported, even those
         * that repeat themselves inside the same object. This can be *very* verbose if
         * set globally.
         */
        ALL,
        /**
         * Sythetic for not fatal issues and detailed for
         * others
         */
        SMART,
        COUNT,
    }


    const UNKNOWN_BOOL: number;

    const UNKNOWN_UINT64: number;

    /**
     * Get a time value for the `name` parameter of an action. This
     * method should be called to retrieve and compute a timed value of a given
     * action. It will first try to retrieve the value as a double,
     * then get it as a string and execute any formula taking into account
     * the 'position' and 'duration' variables. And it will always convert that
     * value to a GstClockTime.
     * @param scenario The {@link GstValidate.Scenario} from which to get a time            for a parameter of an action
     * @param action The action from which to retrieve the time for `name`          parameter.
     * @param name The name of the parameter for which to retrieve a time
     * @returns `true` if the time value could be retrieved/computed or `false` otherwise
     */
    function action_get_clocktime(scenario: Scenario, action: Action, name: string): [boolean, Gst.ClockTime];

    /**
     * @param r 
     */
    function action_return_get_name(r: ActionReturn): string;

    function deinit(): void;

    /**
     * @param element 
     * @param klass 
     */
    function element_has_klass(element: Gst.Element, klass: string): boolean;

    /**
     * Check if `element` matches one of the 'target-element-name',
     * 'target-element-klass' or 'target-element-factory-name' defined in `s`.
     * @param element a {@link Gst.Element} to check
     * @param s a {@link Gst.Structure} to use for matching
     * @returns `true` if it matches, `false` otherwise or if `s` doesn't contain any target-element field.
     */
    function element_matches_target(element: Gst.Element, s: Gst.Structure): boolean;

    /**
     * Executes `action`
     * @param action_type The {@link GstValidate.ActionType} to execute
     * @param action The {@link GstValidate.Action} to execute
     */
    function execute_action(action_type: ActionType, action: Action): number;

    function fail_on_missing_plugin(): boolean;

    /**
     * @param type_name 
     */
    function get_action_type(type_name: string): ActionType;

    function has_colored_output(): boolean;

    /**
     * Initializes GstValidate. Call this before any usage of GstValidate.
     * You should take care of initializing GStreamer before calling this
     * function.
     */
    function init(): void;

    function init_debug(): void;

    function is_initialized(): boolean;

    /**
     * @param issue_id The issue id
     * @returns The issue if found or NULL otherwise
     */
    function issue_from_id(issue_id: IssueId): Issue | null;

    /**
     * @param scenarios 
     * @param num_scenarios 
     * @param output_file 
     */
    function list_scenarios(scenarios: string, num_scenarios: number, output_file: string): boolean;

    /**
     * @param ref 
     * @param compared 
     */
    function media_descriptors_compare(ref: MediaDescriptor, compared: MediaDescriptor): boolean;

    /**
     * @param reporter 
     * @param object 
     * @param property 
     * @param value 
     * @param optional 
     */
    function object_set_property(reporter: Reporter, object: GObject.Object, property: string, value: GObject.Value | any, optional: boolean): ActionReturn;

    /**
     * @param reporter The {@link GstValidate.Reporter} to use to report errors
     * @param object The {@link GObject.Object} to set the property on
     * @param property The name of the property to set
     * @param value The value to set the property to
     * @param flags The {@link GstValidate.ObjectSetPropertyFlags} to use
     * @since 1.24
     */
    function object_set_property_full(reporter: Reporter, object: GObject.Object, property: string, value: GObject.Value | any, flags: ObjectSetPropertyFlags): ActionReturn;

    /**
     * @param monitor 
     */
    function override_registry_attach_overrides(monitor: Monitor): void;

    function override_registry_preload(): number;

    /**
     * Return the configuration specific to `plugin`, or the "core" one if `plugin`
     * is `NULL`
     * @param plugin a {@link Gst.Plugin}, or `NULL`
     * @returns a list of {@link Gst.Structure}
     */
    function plugin_get_config(plugin: Gst.Plugin): Gst.Structure[];

    /**
     * Print `message` to the GstValidate logging system
     * @param action The source object to log
     * @param message The message to print out in the GstValidate logging system
     */
    function print_action(action: Action | null, message: string): void;

    /**
     * Prints the action types details wanted in `wanted_types`
     * @param wanted_types (optional):  List of types to be printed
     * @returns True if all types could be printed
     */
    function print_action_types(wanted_types: string[]): boolean;

    function print_issues(): void;

    /**
     * @param position 
     * @param duration 
     * @param rate 
     * @param extra_info 
     */
    function print_position(position: Gst.ClockTime, duration: Gst.ClockTime, rate: number, extra_info: string): void;

    /**
     * Register a new action type to the action type system. If the action type already
     * exists, it will be overridden by the new definition
     * @param type_name The name of the new action type to add
     * @param implementer_namespace The namespace of the implementer of the action type.                         That should always be the name of the GstPlugin as                         retrieved with `gst_plugin_get_name` when the action type                         is registered inside a plugin.
     * @param _function The function to be called to execute the action
     * @param parameters The {@link GstValidate.ActionParameter} usable as parameter of the type
     * @param description A description of the new type
     * @param flags The {@link GstValidate.ActionTypeFlags} to set on the new action type
     * @returns The newly created action type or the already registered action type if it had a higher rank
     */
    function register_action_type(type_name: string, implementer_namespace: string, _function: ExecuteAction, parameters: ActionParameter[] | null, description: string, flags: ActionTypeFlags): ActionType;

    /**
     * @param plugin The {@link Gst.Plugin} that register the action type,                        or NULL for a static element.
     * @param type_name The name of the new action type to add
     * @param rank The ranking of that implementation of the action type called        `type_name`. If an action type has been registered with the same        name with a higher rank, the new implementation will not be used,        and the already registered action type is returned.        If the already registered implementation has a lower rank, the        new implementation will be used and returned.
     * @param _function The function to be called to execute the action
     * @param parameters The {@link GstValidate.ActionParameter} usable as parameter of the type
     * @param description A description of the new type
     * @param flags The {@link GstValidate.ActionTypeFlags} to be set on the new action type
     * @returns The newly created action type or the already registered action type if it had a higher rank
     */
    function register_action_type_dynamic(plugin: Gst.Plugin | null, type_name: string, rank: Gst.Rank, _function: ExecuteAction, parameters: ActionParameter[] | null, description: string, flags: ActionTypeFlags): ActionType;

    /**
     * @param incom 
     * @param local_vars 
     * @param in_string 
     * @param flags 
     */
    function replace_variables_in_string(incom: null, local_vars: Gst.Structure, in_string: string, flags: StructureResolveVariablesFlags): string;

    function report_init(): void;

    /**
     * @param level_name 
     */
    function report_level_from_name(level_name: string): ReportLevel;

    /**
     * @param level 
     */
    function report_level_get_name(level: ReportLevel): string;

    /**
     * @param structure 
     */
    function set_globals(structure: Gst.Structure): void;

    /**
     * @param testfile 
     * @param use_fakesinks 
     */
    function setup_test_file(testfile: string, use_fakesinks: boolean): Gst.Structure;

    function spin_on_fault_signals(): void;

    /**
     * @param source 
     * @param structure 
     * @param local_variables 
     * @param flags 
     */
    function structure_resolve_variables(source: null, structure: Gst.Structure, local_variables: Gst.Structure, flags: StructureResolveVariablesFlags): void;

    /**
     * @param vars 
     * @param struct_file 
     */
    function structure_set_variables_from_struct_file(vars: Gst.Structure, struct_file: string): void;

    /**
     * @param type The {@link GObject.GType} of the enum we are trying to retrieve the enum value from
     * @param str_enum The string representation of the value
     * @returns `true` on success `false` otherwise
     */
    function utils_enum_from_str(type: GObject.GType, str_enum: string): [boolean, number];

    /**
     * @param type The {@link GObject.GType} of the flags we are trying to retrieve the flags from
     * @param str_flags The string representation of the value
     * @returns The flags set in `str_flags`
     */
    function utils_flags_from_str(type: GObject.GType, str_flags: string): number;

    /**
     * Get `name` from `structure` as a {@link Gst.ClockTime}, it handles various types
     * for the value, if it is a double, it considers the value to be in second
     * it can be a gint, gint64 a guint, a gint64.
     * @param structure A {@link Gst.Structure} to retrieve `name` as a GstClockTime.
     * @param name The name of the field containing a {@link Gst.ClockTime}
     * @returns `true` in case of success, `false` otherwise.
     */
    function utils_get_clocktime(structure: Gst.Structure, name: string): [boolean, Gst.ClockTime];

    /**
     * @param str A GstStructure
     * @param fieldname A fieldname containing a GstValueList or is not defined
     * @returns An array of strings from the GstValueList defined in `fieldname`
     */
    function utils_get_strv(str: Gst.Structure, fieldname: string): string[];

    /**
     * @param testfile 
     * @param use_fakesinks 
     */
    function utils_test_file_get_meta(testfile: string, use_fakesinks: boolean): Gst.Structure;

    /**
     * @gir-type Callback
     */
    interface ExecuteAction {
        (scenario: Scenario, action: Action): number;
    }

    /**
     * @gir-type Callback
     */
    interface OverrideBufferHandler {
        (override: Override, pad_monitor: Monitor, buffer: Gst.Buffer): void;
    }

    /**
     * @gir-type Callback
     */
    interface OverrideElementAddedHandler {
        (override: Override, bin_monitor: Monitor, new_child: Gst.Element): void;
    }

    /**
     * @gir-type Callback
     */
    interface OverrideEventHandler {
        (override: Override, pad_monitor: Monitor, event: Gst.Event): void;
    }

    /**
     * @gir-type Callback
     */
    interface OverrideGetCapsHandler {
        (override: Override, pad_monitor: Monitor, caps: Gst.Caps): void;
    }

    /**
     * @gir-type Callback
     */
    interface OverrideQueryHandler {
        (override: Override, pad_monitor: Monitor, query: Gst.Query): void;
    }

    /**
     * @gir-type Callback
     */
    interface OverrideSetCapsHandler {
        (override: Override, pad_monitor: Monitor, caps: Gst.Caps): void;
    }

    /**
     * @gir-type Callback
     */
    interface ParseVariableFunc {
        (name: string, value: number): number;
    }

    /**
     * @gir-type Callback
     */
    interface PrepareAction {
        (action: Action): number;
    }

    /**
     * @gir-type Flags
     */
    export namespace ActionTypeFlags {
        export const $gtype: GObject.GType<ActionTypeFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum ActionTypeFlags {
        /**
         * No special flag
         */
        NONE,
        /**
         * The action is a config
         */
        CONFIG,
        /**
         * The action can be executed ASYNC
         */
        ASYNC,
        /**
         * The action can be executed asynchronously but without blocking further
         * actions execution.
         */
        NON_BLOCKING,
        INTERLACED,
        /**
         * The action will be executed on 'element-added'
         *                                                 for a particular element type if no playback-time
         *                                                 is specified
         */
        CAN_EXECUTE_ON_ADDITION,
        /**
         * The pipeline will need to be synchronized with the clock
         *                                        for that action type to be used.
         */
        NEEDS_CLOCK,
        /**
         * Do not consider the non execution of the action
         *                                                   as a fatal error.
         */
        NO_EXECUTION_NOT_FATAL,
        /**
         * The action can use the 'optional' keyword. Such action
         *                                            instances will have the #GST_VALIDATE_ACTION_TYPE_NO_EXECUTION_NOT_FATAL
         *                                            flag set and won't be considered as fatal if they fail.
         */
        CAN_BE_OPTIONAL,
        DOESNT_NEED_PIPELINE,
        /**
         * The action can be used in config files even if it is not strictly a config
         *                                              action (ie. it needs a scenario to run).
         */
        HANDLED_IN_CONFIG,
        /**
         * The action is checking some state from objects in the pipeline. It means that it can
         * be used as 'check' in different action which have a `check` "sub action", such as the 'wait' action type.
         * This implies that the action can be executed from any thread and not only from the scenario thread as other
         * types.
         */
        CHECK,
    }


    /**
     * @gir-type Flags
     */
    export namespace DebugFlags {
        export const $gtype: GObject.GType<DebugFlags>;
    }

    /**
     * GST_VALIDATE_FATAL_DEFAULT:
     * GST_VALIDATE_FATAL_ISSUES:
     * GST_VALIDATE_FATAL_WARNINGS:
     * GST_VALIDATE_FATAL_CRITICALS:
     * GST_VALIDATE_PRINT_ISSUES:
     * GST_VALIDATE_PRINT_WARNINGS:
     * GST_VALIDATE_PRINT_CRITICALS:
     * @gir-type Flags
     */
    enum DebugFlags {
        FATAL_DEFAULT,
        FATAL_ISSUES,
        FATAL_WARNINGS,
        FATAL_CRITICALS,
        PRINT_ISSUES,
        PRINT_WARNINGS,
        PRINT_CRITICALS,
    }


    /**
     * @gir-type Flags
     */
    export namespace IssueFlags {
        export const $gtype: GObject.GType<IssueFlags>;
    }

    /**
     * GST_VALIDATE_ISSUE_FLAGS_NONE: No special flags for the issue type
     * GST_VALIDATE_ISSUE_FLAGS_FULL_DETAILS: Always show all occurrences of the issue in full details
     * GST_VALIDATE_ISSUE_FLAGS_NO_BACKTRACE: Do not generate backtrace for the issue type
     * @gir-type Flags
     */
    enum IssueFlags {
        NONE,
        FULL_DETAILS,
        NO_BACKTRACE,
        /**
         * Always generate backtrace, even if not a critical issue
         */
        FORCE_BACKTRACE,
    }


    /**
     * @gir-type Flags
     */
    export namespace MediaDescriptorWriterFlags {
        export const $gtype: GObject.GType<MediaDescriptorWriterFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum MediaDescriptorWriterFlags {
        NONE,
        NO_PARSER,
        FULL,
        HANDLE_GLOGS,
    }


    /**
     * @gir-type Flags
     */
    export namespace ObjectSetPropertyFlags {
        export const $gtype: GObject.GType<ObjectSetPropertyFlags>;
    }

    /**
     * @gir-type Flags
     * @since 1.24
     */
    enum ObjectSetPropertyFlags {
        /**
         * The property is optional, if it
         * is not found on the object, nothing happens.
         */
        OPTIONAL,
        /**
         * Do not check that after
         * setting the property, the value is the one we set.
         */
        NO_VALUE_CHECK,
    }


    /**
     * @gir-type Flags
     */
    export namespace StructureResolveVariablesFlags {
        export const $gtype: GObject.GType<StructureResolveVariablesFlags>;
    }

    /**
     * @gir-type Flags
     * @since 1.20
     */
    enum StructureResolveVariablesFlags {
        ALL,
        LOCAL_ONLY,
        NO_FAILURE,
        NO_EXPRESSION,
    }


    /**
     * @gir-type Flags
     */
    export namespace VerbosityFlags {
        export const $gtype: GObject.GType<VerbosityFlags>;
    }

    /**
     * Defines the level of verbosity of -validate (ie, printing on stdout).
     * @gir-type Flags
     */
    enum VerbosityFlags {
        NONE,
        POSITION,
        MESSAGES,
        PROPS_CHANGES,
        NEW_ELEMENTS,
        ALL,
    }


    namespace BinMonitor {
        // Signal signatures
        interface SignalSignatures extends ElementMonitor.SignalSignatures {
            "notify::handles-states": (pspec: GObject.ParamSpec) => void;
            "notify::object": (pspec: GObject.ParamSpec) => void;
            "notify::pipeline": (pspec: GObject.ParamSpec) => void;
            "notify::validate-parent": (pspec: GObject.ParamSpec) => void;
            "notify::validate-runner": (pspec: GObject.ParamSpec) => void;
            "notify::verbosity": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ElementMonitor.ConstructorProps, Reporter.ConstructorProps {
            handles_states: boolean;
            handlesStates: boolean;
        }
    }

    /**
     * GStreamer Validate BinMonitor class.
     * 
     * Class that wraps a {@link Gst.Bin} for Validate checks
     * @gir-type Class
     */
    class BinMonitor extends ElementMonitor implements Reporter {
        static $gtype: GObject.GType<BinMonitor>;

        // Properties
        /**
         * @read-only
         * @default false
         */
        get handles_states(): boolean;

        /**
         * @read-only
         * @default false
         */
        get handlesStates(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BinMonitor.SignalSignatures;

        // Fields
        element_monitors: null[];

        scenario: Scenario;

        // Constructors
        constructor(properties?: Partial<BinMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](bin: Gst.Bin, runner: Runner, parent: Monitor | null): BinMonitor;

        // Signals
        /** @signal */
        connect<K extends keyof BinMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BinMonitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof BinMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BinMonitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof BinMonitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BinMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns The {@link GstValidate.Scenario} being executed under `monitor` watch
         */
        get_scenario(): Scenario | null;

        /**
         * Increases the reference count of `object`.
         * 
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;

        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         * 
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
    }


    namespace ElementMonitor {
        // Signal signatures
        interface SignalSignatures extends Monitor.SignalSignatures {
            "notify::object": (pspec: GObject.ParamSpec) => void;
            "notify::pipeline": (pspec: GObject.ParamSpec) => void;
            "notify::validate-parent": (pspec: GObject.ParamSpec) => void;
            "notify::validate-runner": (pspec: GObject.ParamSpec) => void;
            "notify::verbosity": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Monitor.ConstructorProps, Reporter.ConstructorProps {}
    }

    /**
     * GStreamer Validate ElementMonitor class.
     * 
     * Class that wraps a {@link Gst.Element} for Validate checks
     * @gir-type Class
     */
    class ElementMonitor extends Monitor implements Reporter {
        static $gtype: GObject.GType<ElementMonitor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ElementMonitor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ElementMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](element: Gst.Element, runner: Runner, parent: Monitor | null): ElementMonitor;

        // Signals
        /** @signal */
        connect<K extends keyof ElementMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ElementMonitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ElementMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ElementMonitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ElementMonitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ElementMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @construct-only
          * @category Inherited from GstValidate.Reporter
         */
        get validate_runner(): Runner;

        /**
         * @construct-only
          * @category Inherited from GstValidate.Reporter
         */
        get validateRunner(): Runner;

        /**
         * Gets `name` of `reporter`
         * @returns The name of the reporter
         */
        get_name(): string | null;

        /**
         * @returns The {@link Gst.Pipeline}
         */
        get_pipeline(): Gst.Pipeline | null;

        /**
         * @param issue_id The issue id to get the report from
         * @returns The {@link GstValidate.Report}
         */
        get_report(issue_id: IssueId): Report | null;

        get_reporting_level(): ReportingDetails;

        /**
         * Get the list of reports present in the reporter.
         * @returns the list of {@link GstValidate.Report} present in the reporter. The caller should unref each report once it is done with them.
         */
        get_reports(): Report[];

        /**
         * Get the number of reports present in the reporter.
         * @returns the number of reports currently present in `reporter`.
         */
        get_reports_count(): number;

        /**
         * @returns The runner
         */
        get_runner(): Runner | null;

        /**
         * @param name 
         */
        init(name: string): void;

        /**
         * Remove all the {@link GstValidate.Report} from `reporter`. This should be called
         * before unreffing the reporter to break cyclic references.
         */
        purge_reports(): void;

        /**
         * @param issue_id 
         * @param message 
         */
        report_simple(issue_id: IssueId, message: string): void;

        /**
         * Set `reporter` has the 'source' of any g_log happening during the
         * execution. Usually the monitor of the first {@link Gst.Pipeline} is used
         * to handle g_logs.
         * 
         * Basically this function is used in order to start tracking any
         * issue reported with g_log in the process into GstValidate report
         * in the GstValidate reporting system.
         */
        set_handle_g_logs(): void;

        /**
         * Sets `name` on `reporter`
         * @param name The name of the reporter
         */
        set_name(name: string | null): void;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.set_name
        set_name(...args: never[]): any;

        /**
         * @param runner 
         */
        set_runner(runner: Runner): void;

        /**
         * @virtual
         */
        vfunc_get_pipeline(): Gst.Pipeline | null;

        /**
         * @virtual
         */
        vfunc_get_reporting_level(): ReportingDetails;

        /**
         * @param report 
         * @virtual
         */
        vfunc_intercept_report(report: Report): InterceptionReturn;

        /**
         * Increases the reference count of `object`.
         * 
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;

        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         * 
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
    }


    namespace MediaDescriptor {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::validate-runner": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.Object.ConstructorProps, Reporter.ConstructorProps {
            validate_runner: Runner;
            validateRunner: Runner;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class MediaDescriptor extends Gst.Object implements Reporter {
        static $gtype: GObject.GType<MediaDescriptor>;

        // Properties
        /**
         * @construct-only
         */
        get validate_runner(): Runner;

        /**
         * @construct-only
         */
        get validateRunner(): Runner;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaDescriptor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MediaDescriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof MediaDescriptor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediaDescriptor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MediaDescriptor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediaDescriptor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MediaDescriptor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MediaDescriptor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param compared 
         */
        _compare(compared: MediaDescriptor): boolean;

        detects_frames(): boolean;

        get_duration(): Gst.ClockTime;

        get_seekable(): boolean;

        has_frame_info(): boolean;

        /**
         * Gets `name` of `reporter`
         * @returns The name of the reporter
         */
        get_name(): string | null;

        /**
         * @returns The {@link Gst.Pipeline}
         */
        get_pipeline(): Gst.Pipeline | null;

        /**
         * @param issue_id The issue id to get the report from
         * @returns The {@link GstValidate.Report}
         */
        get_report(issue_id: IssueId): Report | null;

        get_reporting_level(): ReportingDetails;

        /**
         * Get the list of reports present in the reporter.
         * @returns the list of {@link GstValidate.Report} present in the reporter. The caller should unref each report once it is done with them.
         */
        get_reports(): Report[];

        /**
         * Get the number of reports present in the reporter.
         * @returns the number of reports currently present in `reporter`.
         */
        get_reports_count(): number;

        /**
         * @returns The runner
         */
        get_runner(): Runner | null;

        /**
         * @param name 
         */
        init(name: string): void;

        /**
         * Remove all the {@link GstValidate.Report} from `reporter`. This should be called
         * before unreffing the reporter to break cyclic references.
         */
        purge_reports(): void;

        /**
         * @param issue_id 
         * @param message 
         */
        report_simple(issue_id: IssueId, message: string): void;

        /**
         * Set `reporter` has the 'source' of any g_log happening during the
         * execution. Usually the monitor of the first {@link Gst.Pipeline} is used
         * to handle g_logs.
         * 
         * Basically this function is used in order to start tracking any
         * issue reported with g_log in the process into GstValidate report
         * in the GstValidate reporting system.
         */
        set_handle_g_logs(): void;

        /**
         * Sets `name` on `reporter`
         * @param name The name of the reporter
         */
        set_name(name: string | null): void;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.set_name
        set_name(...args: never[]): any;

        /**
         * @param runner 
         */
        set_runner(runner: Runner): void;

        /**
         * @virtual
         */
        vfunc_get_pipeline(): Gst.Pipeline | null;

        /**
         * @virtual
         */
        vfunc_get_reporting_level(): ReportingDetails;

        /**
         * @param report 
         * @virtual
         */
        vfunc_intercept_report(report: Report): InterceptionReturn;

        /**
         * Increases the reference count of `object`.
         * 
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;

        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         * 
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
    }


    namespace MediaDescriptorParser {
        // Signal signatures
        interface SignalSignatures extends MediaDescriptor.SignalSignatures {
            "notify::validate-runner": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends MediaDescriptor.ConstructorProps, Reporter.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MediaDescriptorParser extends MediaDescriptor implements Reporter {
        static $gtype: GObject.GType<MediaDescriptorParser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaDescriptorParser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MediaDescriptorParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](runner: Runner, xmlpath: string): MediaDescriptorParser;

        static new_from_xml(runner: Runner, xml: string): MediaDescriptorParser;

        // Signals
        /** @signal */
        connect<K extends keyof MediaDescriptorParser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediaDescriptorParser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MediaDescriptorParser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediaDescriptorParser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MediaDescriptorParser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MediaDescriptorParser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param pad 
         */
        add_stream(pad: Gst.Pad): boolean;

        /**
         * @param taglist 
         */
        add_taglist(taglist: Gst.TagList): boolean;

        all_stream_found(): boolean;

        all_tags_found(): boolean;

        get_xml_path(): string;

        /**
         * @construct-only
          * @category Inherited from GstValidate.Reporter
         */
        get validate_runner(): Runner;

        /**
         * @construct-only
          * @category Inherited from GstValidate.Reporter
         */
        get validateRunner(): Runner;

        /**
         * Gets `name` of `reporter`
         * @returns The name of the reporter
         */
        get_name(): string | null;

        /**
         * @returns The {@link Gst.Pipeline}
         */
        get_pipeline(): Gst.Pipeline | null;

        /**
         * @param issue_id The issue id to get the report from
         * @returns The {@link GstValidate.Report}
         */
        get_report(issue_id: IssueId): Report | null;

        get_reporting_level(): ReportingDetails;

        /**
         * Get the list of reports present in the reporter.
         * @returns the list of {@link GstValidate.Report} present in the reporter. The caller should unref each report once it is done with them.
         */
        get_reports(): Report[];

        /**
         * Get the number of reports present in the reporter.
         * @returns the number of reports currently present in `reporter`.
         */
        get_reports_count(): number;

        /**
         * @returns The runner
         */
        get_runner(): Runner | null;

        /**
         * @param name 
         */
        init(name: string): void;

        /**
         * Remove all the {@link GstValidate.Report} from `reporter`. This should be called
         * before unreffing the reporter to break cyclic references.
         */
        purge_reports(): void;

        /**
         * @param issue_id 
         * @param message 
         */
        report_simple(issue_id: IssueId, message: string): void;

        /**
         * Set `reporter` has the 'source' of any g_log happening during the
         * execution. Usually the monitor of the first {@link Gst.Pipeline} is used
         * to handle g_logs.
         * 
         * Basically this function is used in order to start tracking any
         * issue reported with g_log in the process into GstValidate report
         * in the GstValidate reporting system.
         */
        set_handle_g_logs(): void;

        /**
         * Sets `name` on `reporter`
         * @param name The name of the reporter
         */
        set_name(name: string | null): void;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.set_name
        set_name(...args: never[]): any;

        /**
         * @param runner 
         */
        set_runner(runner: Runner): void;

        /**
         * @virtual
         */
        vfunc_get_pipeline(): Gst.Pipeline | null;

        /**
         * @virtual
         */
        vfunc_get_reporting_level(): ReportingDetails;

        /**
         * @param report 
         * @virtual
         */
        vfunc_intercept_report(report: Report): InterceptionReturn;

        /**
         * Increases the reference count of `object`.
         * 
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;

        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         * 
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
    }


    namespace MediaDescriptorWriter {
        // Signal signatures
        interface SignalSignatures extends MediaDescriptor.SignalSignatures {
            "notify::validate-runner": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends MediaDescriptor.ConstructorProps, Reporter.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MediaDescriptorWriter extends MediaDescriptor implements Reporter {
        static $gtype: GObject.GType<MediaDescriptorWriter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaDescriptorWriter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MediaDescriptorWriter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](runner: Runner, location: string, duration: Gst.ClockTime, seekable: boolean): MediaDescriptorWriter;

        static new_discover(runner: Runner, uri: string, flags: MediaDescriptorWriterFlags): MediaDescriptorWriter;

        // Signals
        /** @signal */
        connect<K extends keyof MediaDescriptorWriter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediaDescriptorWriter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MediaDescriptorWriter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediaDescriptorWriter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MediaDescriptorWriter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MediaDescriptorWriter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param pad 
         * @param buf 
         */
        add_frame(pad: Gst.Pad, buf: Gst.Buffer): boolean;

        /**
         * @param pad 
         */
        add_pad(pad: Gst.Pad): boolean;

        /**
         * @param taglist 
         */
        add_taglist(taglist: Gst.TagList): boolean;

        /**
         * @param stream_id 
         * @param taglist 
         */
        add_tags(stream_id: string, taglist: Gst.TagList): boolean;

        detects_frames(): boolean;

        get_duration(): Gst.ClockTime;

        get_seekable(): boolean;

        get_xml_path(): string;

        serialize(): string;

        /**
         * @param filename 
         */
        write(filename: string): boolean;

        /**
         * @construct-only
          * @category Inherited from GstValidate.Reporter
         */
        get validate_runner(): Runner;

        /**
         * @construct-only
          * @category Inherited from GstValidate.Reporter
         */
        get validateRunner(): Runner;

        /**
         * Gets `name` of `reporter`
         * @returns The name of the reporter
         */
        get_name(): string | null;

        /**
         * @returns The {@link Gst.Pipeline}
         */
        get_pipeline(): Gst.Pipeline | null;

        /**
         * @param issue_id The issue id to get the report from
         * @returns The {@link GstValidate.Report}
         */
        get_report(issue_id: IssueId): Report | null;

        get_reporting_level(): ReportingDetails;

        /**
         * Get the list of reports present in the reporter.
         * @returns the list of {@link GstValidate.Report} present in the reporter. The caller should unref each report once it is done with them.
         */
        get_reports(): Report[];

        /**
         * Get the number of reports present in the reporter.
         * @returns the number of reports currently present in `reporter`.
         */
        get_reports_count(): number;

        /**
         * @returns The runner
         */
        get_runner(): Runner | null;

        /**
         * @param name 
         */
        init(name: string): void;

        /**
         * Remove all the {@link GstValidate.Report} from `reporter`. This should be called
         * before unreffing the reporter to break cyclic references.
         */
        purge_reports(): void;

        /**
         * @param issue_id 
         * @param message 
         */
        report_simple(issue_id: IssueId, message: string): void;

        /**
         * Set `reporter` has the 'source' of any g_log happening during the
         * execution. Usually the monitor of the first {@link Gst.Pipeline} is used
         * to handle g_logs.
         * 
         * Basically this function is used in order to start tracking any
         * issue reported with g_log in the process into GstValidate report
         * in the GstValidate reporting system.
         */
        set_handle_g_logs(): void;

        /**
         * Sets `name` on `reporter`
         * @param name The name of the reporter
         */
        set_name(name: string | null): void;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.set_name
        set_name(...args: never[]): any;

        /**
         * @param runner 
         */
        set_runner(runner: Runner): void;

        /**
         * @virtual
         */
        vfunc_get_pipeline(): Gst.Pipeline | null;

        /**
         * @virtual
         */
        vfunc_get_reporting_level(): ReportingDetails;

        /**
         * @param report 
         * @virtual
         */
        vfunc_intercept_report(report: Report): InterceptionReturn;

        /**
         * Increases the reference count of `object`.
         * 
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;

        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         * 
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
    }


    namespace Monitor {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::object": (pspec: GObject.ParamSpec) => void;
            "notify::pipeline": (pspec: GObject.ParamSpec) => void;
            "notify::validate-parent": (pspec: GObject.ParamSpec) => void;
            "notify::validate-runner": (pspec: GObject.ParamSpec) => void;
            "notify::verbosity": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.Object.ConstructorProps, Reporter.ConstructorProps {
            object: GObject.Object | any;
            pipeline: Gst.Pipeline | null;
            validate_parent: Monitor;
            validateParent: Monitor;
            validate_runner: Runner;
            validateRunner: Runner;
            verbosity: VerbosityFlags;
        }
    }

    /**
     * GStreamer Validate Monitor class.
     * 
     * Class that wraps a {@link GObject.Object} for Validate checks
     * @gir-type Class
     */
    abstract class Monitor extends Gst.Object implements Reporter {
        static $gtype: GObject.GType<Monitor>;

        // Properties
        /**
         * @construct-only
         */
    // This accessor conflicts with a property or field in a parent class or interface.
         object: GObject.Object | any;

        get pipeline(): Gst.Pipeline | null;
        set pipeline(val: Gst.Pipeline | null);

        /**
         * @construct-only
         */
        get validate_parent(): Monitor;

        /**
         * @construct-only
         */
        get validateParent(): Monitor;

        /**
         * @construct-only
         */
        get validate_runner(): Runner;

        /**
         * @construct-only
         */
        get validateRunner(): Runner;

        /**
         * @default GstValidate.VerbosityFlags.POSITION
         */
        get verbosity(): VerbosityFlags;
        set verbosity(val: VerbosityFlags);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Monitor.SignalSignatures;

        // Fields
        target_name: string;

        overrides: GLib.Queue;

        media_descriptor: MediaDescriptor;

        level: ReportingDetails;

        // Constructors
        constructor(properties?: Partial<Monitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Monitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Monitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Monitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Monitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Create a new monitor for `target` and starts monitoring it.
         * @param target The {@link Gst.Object} to create a {@link GstValidate.Monitor} for
         * @param runner The {@link GstValidate.Runner} to use for the new monitor
         * @param parent The parent of the new monitor
         */
        static factory_create(target: Gst.Object, runner: Runner, parent: Monitor | null): Monitor;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_get_element(): Gst.Element | null;

        /**
         * @param media_descriptor 
         * @virtual
         */
        vfunc_set_media_descriptor(media_descriptor: MediaDescriptor): void;

        /**
         * @virtual
         */
        vfunc_setup(): boolean;

        // Methods
        /**
         * @param override 
         */
        attach_override(override: Override): void;

        /**
         * @returns The GstElement associated with `monitor`
         */
        get_element(): Gst.Element | null;

        /**
         * @returns The name of the element associated with `monitor`
         */
        get_element_name(): string | null;

        /**
         * @returns The pipeline in which `monitor` target is in.
         */
        get_pipeline(): Gst.Pipeline | null;

        /**
         * @returns The target object
         */
        get_target(): Gst.Object | null;

        /**
         * @param media_descriptor 
         */
        set_media_descriptor(media_descriptor: MediaDescriptor): void;

        /**
         * Gets `name` of `reporter`
         * @returns The name of the reporter
         */
        get_name(): string | null;

        /**
         * @param issue_id The issue id to get the report from
         * @returns The {@link GstValidate.Report}
         */
        get_report(issue_id: IssueId): Report | null;

        get_reporting_level(): ReportingDetails;

        /**
         * Get the list of reports present in the reporter.
         * @returns the list of {@link GstValidate.Report} present in the reporter. The caller should unref each report once it is done with them.
         */
        get_reports(): Report[];

        /**
         * Get the number of reports present in the reporter.
         * @returns the number of reports currently present in `reporter`.
         */
        get_reports_count(): number;

        /**
         * @returns The runner
         */
        get_runner(): Runner | null;

        /**
         * @param name 
         */
        init(name: string): void;

        /**
         * Remove all the {@link GstValidate.Report} from `reporter`. This should be called
         * before unreffing the reporter to break cyclic references.
         */
        purge_reports(): void;

        /**
         * @param issue_id 
         * @param message 
         */
        report_simple(issue_id: IssueId, message: string): void;

        /**
         * Set `reporter` has the 'source' of any g_log happening during the
         * execution. Usually the monitor of the first {@link Gst.Pipeline} is used
         * to handle g_logs.
         * 
         * Basically this function is used in order to start tracking any
         * issue reported with g_log in the process into GstValidate report
         * in the GstValidate reporting system.
         */
        set_handle_g_logs(): void;

        /**
         * Sets `name` on `reporter`
         * @param name The name of the reporter
         */
        set_name(name: string | null): void;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.set_name
        set_name(...args: never[]): any;

        /**
         * @param runner 
         */
        set_runner(runner: Runner): void;

        /**
         * @virtual
         */
        vfunc_get_pipeline(): Gst.Pipeline | null;

        /**
         * @virtual
         */
        vfunc_get_reporting_level(): ReportingDetails;

        /**
         * @param report 
         * @virtual
         */
        vfunc_intercept_report(report: Report): InterceptionReturn;

        /**
         * Increases the reference count of `object`.
         * 
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;

        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         * 
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
    }


    namespace Override {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::validate-runner": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.Object.ConstructorProps, Reporter.ConstructorProps {
            validate_runner: Runner;
            validateRunner: Runner;
        }
    }

    /**
     * @gir-type Class
     */
    class Override extends Gst.Object implements Reporter {
        static $gtype: GObject.GType<Override>;

        // Properties
        /**
         * @construct-only
         */
        get validate_runner(): Runner;

        /**
         * @construct-only
         */
        get validateRunner(): Runner;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Override.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Override.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Override;

        // Signals
        /** @signal */
        connect<K extends keyof Override.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Override.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Override.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Override.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Override.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Override.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param klass 
         * @param override 
         */
        static register_by_klass(klass: string, override: Override): void;

        /**
         * @param name 
         * @param override 
         */
        static register_by_name(name: string, override: Override): void;

        /**
         * @param gtype 
         * @param override 
         */
        static register_by_type(gtype: GObject.GType, override: Override): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_attached(): void;

        // Methods
        attached(): void;

        /**
         * @param issue_id 
         * @param new_level 
         */
        change_severity(issue_id: IssueId, new_level: ReportLevel): void;

        free(): void;

        /**
         * @param issue_id 
         * @param default_level 
         */
        get_severity(issue_id: IssueId, default_level: ReportLevel): ReportLevel;

        /**
         * Gets `name` of `reporter`
         * @returns The name of the reporter
         */
        get_name(): string | null;

        /**
         * @returns The {@link Gst.Pipeline}
         */
        get_pipeline(): Gst.Pipeline | null;

        /**
         * @param issue_id The issue id to get the report from
         * @returns The {@link GstValidate.Report}
         */
        get_report(issue_id: IssueId): Report | null;

        get_reporting_level(): ReportingDetails;

        /**
         * Get the list of reports present in the reporter.
         * @returns the list of {@link GstValidate.Report} present in the reporter. The caller should unref each report once it is done with them.
         */
        get_reports(): Report[];

        /**
         * Get the number of reports present in the reporter.
         * @returns the number of reports currently present in `reporter`.
         */
        get_reports_count(): number;

        /**
         * @returns The runner
         */
        get_runner(): Runner | null;

        /**
         * @param name 
         */
        init(name: string): void;

        /**
         * Remove all the {@link GstValidate.Report} from `reporter`. This should be called
         * before unreffing the reporter to break cyclic references.
         */
        purge_reports(): void;

        /**
         * @param issue_id 
         * @param message 
         */
        report_simple(issue_id: IssueId, message: string): void;

        /**
         * Set `reporter` has the 'source' of any g_log happening during the
         * execution. Usually the monitor of the first {@link Gst.Pipeline} is used
         * to handle g_logs.
         * 
         * Basically this function is used in order to start tracking any
         * issue reported with g_log in the process into GstValidate report
         * in the GstValidate reporting system.
         */
        set_handle_g_logs(): void;

        /**
         * Sets `name` on `reporter`
         * @param name The name of the reporter
         */
        set_name(name: string | null): void;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.set_name
        set_name(...args: never[]): any;

        /**
         * @param runner 
         */
        set_runner(runner: Runner): void;

        /**
         * @virtual
         */
        vfunc_get_pipeline(): Gst.Pipeline | null;

        /**
         * @virtual
         */
        vfunc_get_reporting_level(): ReportingDetails;

        /**
         * @param report 
         * @virtual
         */
        vfunc_intercept_report(report: Report): InterceptionReturn;

        /**
         * Increases the reference count of `object`.
         * 
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;

        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         * 
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
    }


    namespace PadMonitor {
        // Signal signatures
        interface SignalSignatures extends Monitor.SignalSignatures {
            "notify::object": (pspec: GObject.ParamSpec) => void;
            "notify::pipeline": (pspec: GObject.ParamSpec) => void;
            "notify::validate-parent": (pspec: GObject.ParamSpec) => void;
            "notify::validate-runner": (pspec: GObject.ParamSpec) => void;
            "notify::verbosity": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Monitor.ConstructorProps, Reporter.ConstructorProps {}
    }

    /**
     * GStreamer Validate PadMonitor class.
     * 
     * Class that wraps a {@link Gst.Pad} for Validate checks
     * @gir-type Class
     */
    class PadMonitor extends Monitor implements Reporter {
        static $gtype: GObject.GType<PadMonitor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PadMonitor.SignalSignatures;

        // Fields
        setup: boolean;

        chain_func: Gst.PadChainFunction;

        event_func: Gst.PadEventFunction;

        event_full_func: Gst.PadEventFullFunction;

        query_func: Gst.PadQueryFunction;

        activatemode_func: Gst.PadActivateModeFunction;

        get_range_func: Gst.PadGetRangeFunction;

        pad_probe_id: number;

        // Constructors
        constructor(properties?: Partial<PadMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](pad: Gst.Pad, runner: Runner, parent: ElementMonitor | null): PadMonitor;

        // Signals
        /** @signal */
        connect<K extends keyof PadMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PadMonitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PadMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PadMonitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PadMonitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PadMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @construct-only
          * @category Inherited from GstValidate.Reporter
         */
        get validate_runner(): Runner;

        /**
         * @construct-only
          * @category Inherited from GstValidate.Reporter
         */
        get validateRunner(): Runner;

        /**
         * Gets `name` of `reporter`
         * @returns The name of the reporter
         */
        get_name(): string | null;

        /**
         * @returns The {@link Gst.Pipeline}
         */
        get_pipeline(): Gst.Pipeline | null;

        /**
         * @param issue_id The issue id to get the report from
         * @returns The {@link GstValidate.Report}
         */
        get_report(issue_id: IssueId): Report | null;

        get_reporting_level(): ReportingDetails;

        /**
         * Get the list of reports present in the reporter.
         * @returns the list of {@link GstValidate.Report} present in the reporter. The caller should unref each report once it is done with them.
         */
        get_reports(): Report[];

        /**
         * Get the number of reports present in the reporter.
         * @returns the number of reports currently present in `reporter`.
         */
        get_reports_count(): number;

        /**
         * @returns The runner
         */
        get_runner(): Runner | null;

        /**
         * @param name 
         */
        init(name: string): void;

        /**
         * Remove all the {@link GstValidate.Report} from `reporter`. This should be called
         * before unreffing the reporter to break cyclic references.
         */
        purge_reports(): void;

        /**
         * @param issue_id 
         * @param message 
         */
        report_simple(issue_id: IssueId, message: string): void;

        /**
         * Set `reporter` has the 'source' of any g_log happening during the
         * execution. Usually the monitor of the first {@link Gst.Pipeline} is used
         * to handle g_logs.
         * 
         * Basically this function is used in order to start tracking any
         * issue reported with g_log in the process into GstValidate report
         * in the GstValidate reporting system.
         */
        set_handle_g_logs(): void;

        /**
         * Sets `name` on `reporter`
         * @param name The name of the reporter
         */
        set_name(name: string | null): void;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.set_name
        set_name(...args: never[]): any;

        /**
         * @param runner 
         */
        set_runner(runner: Runner): void;

        /**
         * @virtual
         */
        vfunc_get_pipeline(): Gst.Pipeline | null;

        /**
         * @virtual
         */
        vfunc_get_reporting_level(): ReportingDetails;

        /**
         * @param report 
         * @virtual
         */
        vfunc_intercept_report(report: Report): InterceptionReturn;

        /**
         * Increases the reference count of `object`.
         * 
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;

        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         * 
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
    }


    namespace PipelineMonitor {
        // Signal signatures
        interface SignalSignatures extends BinMonitor.SignalSignatures {
            "notify::handles-states": (pspec: GObject.ParamSpec) => void;
            "notify::object": (pspec: GObject.ParamSpec) => void;
            "notify::pipeline": (pspec: GObject.ParamSpec) => void;
            "notify::validate-parent": (pspec: GObject.ParamSpec) => void;
            "notify::validate-runner": (pspec: GObject.ParamSpec) => void;
            "notify::verbosity": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends BinMonitor.ConstructorProps, Reporter.ConstructorProps {}
    }

    /**
     * GStreamer Validate PipelineMonitor class.
     * 
     * Class that wraps a {@link Gst.Pipeline} for Validate checks
     * @gir-type Class
     */
    class PipelineMonitor extends BinMonitor implements Reporter {
        static $gtype: GObject.GType<PipelineMonitor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PipelineMonitor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PipelineMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](pipeline: Gst.Pipeline, runner: Runner, parent: Monitor | null): PipelineMonitor;

        // Signals
        /** @signal */
        connect<K extends keyof PipelineMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PipelineMonitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PipelineMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PipelineMonitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PipelineMonitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PipelineMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Increases the reference count of `object`.
         * 
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;

        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         * 
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
    }


    namespace Runner {
        // Signal signatures
        interface SignalSignatures extends Gst.Tracer.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "report-added": (arg0: Report) => void;
            /**
             * @signal
             * @run-last
             */
            stopping: () => void;
            "notify::params": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.Tracer.ConstructorProps {
            params: string;
        }
    }

    /**
     * GStreamer Validate Runner class.
     * 
     * Class that manages a Validate test run for some pipeline
     * @gir-type Class
     */
    class Runner extends Gst.Tracer {
        static $gtype: GObject.GType<Runner>;

        // Properties
        /**
         * @default null
         */
        get params(): string;
        set params(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Runner.SignalSignatures;

        // Fields
        object: Gst.Tracer;

        // Constructors
        constructor(properties?: Partial<Runner.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Runner;

        // Signals
        /** @signal */
        connect<K extends keyof Runner.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Runner.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Runner.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Runner.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Runner.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Runner.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param report 
         */
        add_report(report: Report): void;

        /**
         * @param print_result 
         */
        exit(print_result: boolean): number;

        get_default_reporting_level(): ReportingDetails;

        /**
         * @param name 
         */
        get_reporting_level_for_name(name: string): ReportingDetails;

        /**
         * @returns The list of reports
         */
        get_reports(): Report[];

        /**
         * Get the number of reports present in the runner:
         * @returns The number of reports present in the runner.
         */
        get_reports_count(): number;

        /**
         * Prints all the reports on the terminal or on wherever is set
         * in the `GST_VALIDATE_FILE` env variable.
         * @returns 0 if no critical error has been found and 18 if a critical error has been detected. That return value is usually to be used as exit code of the application.
         */
        printf(): number;
    }


    namespace Scenario {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            /**
             * Emitted when an action is done.
             * @signal
             * @since 1.20
             * @run-last
             */
            "action-done": (arg0: Action) => void;
            /**
             * Emitted once all actions have been executed
             * @signal
             * @run-last
             */
            done: () => void;
            /**
             * Emitted when the 'stop' action is fired
             * @signal
             * @since 1.26
             * @run-last
             */
            stopping: () => void;
            "notify::execute-on-idle": (pspec: GObject.ParamSpec) => void;
            "notify::handles-states": (pspec: GObject.ParamSpec) => void;
            "notify::validate-runner": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.Object.ConstructorProps, Reporter.ConstructorProps {
            execute_on_idle: boolean;
            executeOnIdle: boolean;
            handles_states: boolean;
            handlesStates: boolean;
            validate_runner: Runner;
            validateRunner: Runner;
        }
    }

    /**
     * @gir-type Class
     */
    class Scenario extends Gst.Object implements Reporter {
        static $gtype: GObject.GType<Scenario>;

        // Properties
        /**
         * @default false
         */
        get execute_on_idle(): boolean;
        set execute_on_idle(val: boolean);

        /**
         * @default false
         */
        get executeOnIdle(): boolean;
        set executeOnIdle(val: boolean);

        /**
         * @read-only
         * @default false
         */
        get handles_states(): boolean;

        /**
         * @read-only
         * @default false
         */
        get handlesStates(): boolean;

        /**
         * @construct-only
         */
        get validate_runner(): Runner;

        /**
         * @construct-only
         */
        get validateRunner(): Runner;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Scenario.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Scenario.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Scenario.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Scenario.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Scenario.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Scenario.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Scenario.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Scenario.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static deinit(): void;

        /**
         * @param runner The {@link GstValidate.Runner} to use to report issues
         * @param pipeline The pipeline to run the scenario on
         * @param scenario_name The name (or path) of the scenario to run
         */
        static factory_create(runner: Runner, pipeline: Gst.Element, scenario_name: string): Scenario | null;

        // Methods
        /**
         * Executes a seek event on the scenario's pipeline. You should always use
         * this method when you want to execute a seek inside a new action type
         * so that the scenario state is updated taking into account that seek.
         * 
         * For more information you should have a look at `gst_event_new_seek`
         * @param action The seek action to execute
         * @param rate The playback rate of the seek
         * @param format The {@link Gst.Format} of the seek
         * @param flags The {@link Gst.SeekFlags} of the seek
         * @param start_type The {@link Gst.SeekType} of the start value of the seek
         * @param start The start time of the seek
         * @param stop_type The {@link Gst.SeekType} of the stop value of the seek
         * @param stop The stop time of the seek
         * @returns `true` if the seek could be executed, `false` otherwise
         */
        execute_seek(action: Action, rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: Gst.ClockTime, stop_type: Gst.SeekType, stop: Gst.ClockTime): number;

        /**
         * Get remaining actions from `scenario`.
         * @returns A list of {@link GstValidate.Action}.
         */
        get_actions(): Action[];

        /**
         * @returns The {@link Gst.Pipeline} the scenario is running against
         */
        get_pipeline(): Gst.Element | null;

        /**
         * @param args 
         */
    // Conflicted with GstValidate.Reporter.get_pipeline
        get_pipeline(...args: never[]): any;

        /**
         * Get current target state from `scenario`.
         * @returns Current target state.
         */
        get_target_state(): Gst.State;

        /**
         * Gets `name` of `reporter`
         * @returns The name of the reporter
         */
        get_name(): string | null;

        /**
         * @param issue_id The issue id to get the report from
         * @returns The {@link GstValidate.Report}
         */
        get_report(issue_id: IssueId): Report | null;

        get_reporting_level(): ReportingDetails;

        /**
         * Get the list of reports present in the reporter.
         * @returns the list of {@link GstValidate.Report} present in the reporter. The caller should unref each report once it is done with them.
         */
        get_reports(): Report[];

        /**
         * Get the number of reports present in the reporter.
         * @returns the number of reports currently present in `reporter`.
         */
        get_reports_count(): number;

        /**
         * @returns The runner
         */
        get_runner(): Runner | null;

        /**
         * @param name 
         */
        init(name: string): void;

        /**
         * Remove all the {@link GstValidate.Report} from `reporter`. This should be called
         * before unreffing the reporter to break cyclic references.
         */
        purge_reports(): void;

        /**
         * @param issue_id 
         * @param message 
         */
        report_simple(issue_id: IssueId, message: string): void;

        /**
         * Set `reporter` has the 'source' of any g_log happening during the
         * execution. Usually the monitor of the first {@link Gst.Pipeline} is used
         * to handle g_logs.
         * 
         * Basically this function is used in order to start tracking any
         * issue reported with g_log in the process into GstValidate report
         * in the GstValidate reporting system.
         */
        set_handle_g_logs(): void;

        /**
         * Sets `name` on `reporter`
         * @param name The name of the reporter
         */
        set_name(name: string | null): void;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.set_name
        set_name(...args: never[]): any;

        /**
         * @param runner 
         */
        set_runner(runner: Runner): void;

        /**
         * @virtual
         */
        vfunc_get_pipeline(): Gst.Pipeline | null;

        /**
         * @virtual
         */
        vfunc_get_reporting_level(): ReportingDetails;

        /**
         * @param report 
         * @virtual
         */
        vfunc_intercept_report(report: Report): InterceptionReturn;

        /**
         * Increases the reference count of `object`.
         * 
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;

        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         * 
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
    }


    /**
     * The GstValidateAction defined to be executed as part of a scenario
     * 
     * Only access it from the default main context.
     * @gir-type Struct
     */
    class Action {
        static $gtype: GObject.GType<Action>;

        // Fields
        type: string;

        name: string;

        // Constructors
        constructor(scenario: Scenario | null, action_type: ActionType, structure: Gst.Structure, add_to_lists: boolean);

        static ["new"](scenario: Scenario | null, action_type: ActionType, structure: Gst.Structure, add_to_lists: boolean): Action;

        // Static methods
        /**
         * Get a time value for the `name` parameter of an action. This
         * method should be called to retrieve and compute a timed value of a given
         * action. It will first try to retrieve the value as a double,
         * then get it as a string and execute any formula taking into account
         * the 'position' and 'duration' variables. And it will always convert that
         * value to a GstClockTime.
         * @param scenario The {@link GstValidate.Scenario} from which to get a time            for a parameter of an action
         * @param action The action from which to retrieve the time for `name`          parameter.
         * @param name The name of the parameter for which to retrieve a time
         */
        static get_clocktime(scenario: Scenario, action: Action, name: string): [boolean, Gst.ClockTime];

        // Methods
        /**
         * Retrieve the scenario from which `action` is executed.
         * @returns The scenario from which the action is being executed.
         */
        get_scenario(): Scenario | null;

        ref(): Action;

        set_done(): void;

        unref(): void;
    }


    /**
     * @gir-type Struct
     */
    class ActionParameter {
        static $gtype: GObject.GType<ActionParameter>;

        // Fields
        name: string;

        description: string;

        mandatory: boolean;

        types: string;

        possible_variables: string;

        def: string;

        free: GLib.DestroyNotify;
    }


    /**
     * @gir-type Struct
     */
    abstract class ActionPrivate {
        static $gtype: GObject.GType<ActionPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class ActionType {
        static $gtype: GObject.GType<ActionType>;

        // Fields
        name: string;

        implementer_namespace: string;

        prepare: PrepareAction;

        execute: ExecuteAction;

        parameters: ActionParameter[];

        description: string;

        flags: ActionTypeFlags;

        rank: Gst.Rank;
    }


    /**
     * @gir-type Struct
     */
    abstract class ActionTypePrivate {
        static $gtype: GObject.GType<ActionTypePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type BinMonitorClass = typeof BinMonitor;

    /**
     * @gir-type Alias
     */
    type ElementMonitorClass = typeof ElementMonitor;

    /**
     * @gir-type Struct
     */
    class Issue {
        static $gtype: GObject.GType<Issue>;

        // Fields
        issue_id: IssueId;

        summary: string;

        description: string;

        area: string;

        name: string;

        default_level: ReportLevel;

        refcount: number;

        flags: IssueFlags;

        // Constructors
        constructor(issue_id: IssueId, summary: string, description: string, default_level: ReportLevel);

        static ["new"](issue_id: IssueId, summary: string, description: string, default_level: ReportLevel): Issue;

        static new_full(issue_id: IssueId, summary: string, description: string, default_level: ReportLevel, flags: IssueFlags): Issue;

        // Static methods
        /**
         * @param issue_id The issue id
         */
        static from_id(issue_id: IssueId): Issue | null;

        // Methods
        get_id(): number;

        /**
         * Registers `issue` in the issue type system
         */
        register(): void;

        /**
         * @param default_level 
         */
        set_default_level(default_level: ReportLevel): void;
    }


    /**
     * @gir-type Alias
     */
    type MediaDescriptorClass = typeof MediaDescriptor;

    /**
     * @gir-type Alias
     */
    type MediaDescriptorParserClass = typeof MediaDescriptorParser;

    /**
     * @gir-type Struct
     */
    abstract class MediaDescriptorParserPrivate {
        static $gtype: GObject.GType<MediaDescriptorParserPrivate>;
    }


    /**
     * @gir-type Struct
     */
    abstract class MediaDescriptorPrivate {
        static $gtype: GObject.GType<MediaDescriptorPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MediaDescriptorWriterClass = typeof MediaDescriptorWriter;

    /**
     * @gir-type Struct
     */
    abstract class MediaDescriptorWriterPrivate {
        static $gtype: GObject.GType<MediaDescriptorWriterPrivate>;
    }


    /**
     * GStreamer Validate MediaInfo struct.
     * 
     * Stores extracted information about a media
     * @gir-type Struct
     */
    class MediaInfo {
        static $gtype: GObject.GType<MediaInfo>;

        // Fields
        duration: Gst.ClockTime;

        is_image: boolean;

        file_size: number;

        seekable: boolean;

        playback_error: string;

        reverse_playback_error: string;

        track_switch_error: string;

        uri: string;

        discover_only: boolean;

        // Methods
        clear(): void;

        /**
         * @param extracted 
         */
        compare(extracted: MediaInfo): boolean;

        free(): void;

        init(): void;

        /**
         * @param uri 
         * @param discover_only 
         */
        inspect_uri(uri: string, discover_only: boolean): boolean;

        /**
         * @param path 
         */
        save(path: string): boolean;

        /**
         * @param length 
         */
        to_string(length: bigint | number): string;
    }


    /**
     * @gir-type Alias
     */
    type MonitorClass = typeof Monitor;

    /**
     * @gir-type Alias
     */
    type OverrideClass = typeof Override;

    /**
     * @gir-type Struct
     */
    abstract class OverridePrivate {
        static $gtype: GObject.GType<OverridePrivate>;
    }


    /**
     * @gir-type Struct
     */
    class OverrideRegistry {
        static $gtype: GObject.GType<OverrideRegistry>;

        // Fields
        name_overrides: GLib.Queue;

        gtype_overrides: GLib.Queue;

        klass_overrides: GLib.Queue;

        // Static methods
        /**
         * @param monitor 
         */
        static attach_overrides(monitor: Monitor): void;

        static preload(): number;

        // Methods
        /**
         * @returns a list of {@link GstValidate.Override}
         */
        get_override_list(): Override[];
    }


    /**
     * @gir-type Alias
     */
    type PadMonitorClass = typeof PadMonitor;

    /**
     * @gir-type Struct
     */
    abstract class PadSeekData {
        static $gtype: GObject.GType<PadSeekData>;
    }


    /**
     * @gir-type Alias
     */
    type PipelineMonitorClass = typeof PipelineMonitor;

    /**
     * @gir-type Struct
     */
    class Report {
        static $gtype: GObject.GType<Report>;

        // Fields
        level: ReportLevel;

        reporter: Reporter;

        timestamp: Gst.ClockTime;

        message: string;

        shadow_reports: null[];

        repeated_reports: null[];

        reporting_level: ReportingDetails;

        reporter_name: string;

        trace: string;

        dotfile_name: string;

        // Constructors
        constructor(issue: Issue, reporter: Reporter, message: string);

        static ["new"](issue: Issue, reporter: Reporter, message: string): Report;

        // Static methods
        static init(): void;

        // Methods
        /**
         * @param repeated_report 
         */
        add_repeated_report(repeated_report: Report): void;

        check_abort(): boolean;

        /**
         * @returns report dot file name
         */
        get_dotfile_name(): string | null;

        /**
         * @returns report issue
         */
        get_issue(): Issue;

        get_issue_id(): number;

        /**
         * @returns report level
         */
        get_level(): ReportLevel;

        /**
         * @returns report message
         */
        get_message(): string;

        /**
         * @returns report reporter
         */
        get_reporter(): Reporter;

        /**
         * @returns report issue
         */
        get_reporter_name(): string;

        /**
         * @returns reporting level
         */
        get_reporting_level(): ReportingDetails;

        /**
         * @returns report timestamp
         */
        get_timestamp(): Gst.ClockTime;

        /**
         * @returns report backtrace
         */
        get_trace(): string | null;

        print_description(): void;

        print_details(): void;

        print_detected_on(): void;

        print_level(): void;

        printf(): void;

        ref(): Report;

        /**
         * @param master_report 
         */
        set_master_report(master_report: Report): boolean;

        /**
         * @param level 
         */
        set_reporting_level(level: ReportingDetails): void;

        should_print(): boolean;

        unref(): void;
    }


    /**
     * @gir-type Alias
     */
    type ReporterInterface = typeof Reporter;

    /**
     * @gir-type Alias
     */
    type RunnerClass = typeof Runner;

    /**
     * @gir-type Struct
     */
    abstract class RunnerPrivate {
        static $gtype: GObject.GType<RunnerPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ScenarioClass = typeof Scenario;

    /**
     * @gir-type Struct
     */
    abstract class ScenarioPrivate {
        static $gtype: GObject.GType<ScenarioPrivate>;
    }


    /**
     * @gir-type Struct
     */
    abstract class StreamInfo {
        static $gtype: GObject.GType<StreamInfo>;
    }


    namespace Reporter {
        /**
         * Interface for implementing Reporter.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_get_pipeline(): Gst.Pipeline | null;

            /**
             * @virtual
             */
            vfunc_get_reporting_level(): ReportingDetails;

            /**
             * @param report 
             * @virtual
             */
            vfunc_intercept_report(report: Report): InterceptionReturn;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            validate_runner: Runner;
            validateRunner: Runner;
        }
    }

    export interface ReporterNamespace {
        $gtype: GObject.GType<Reporter>;
        prototype: Reporter;
    }
    /**
     * @gir-type Interface
     */
    interface Reporter extends GObject.Object, Reporter.Interface {

        // Properties
        /**
         * @construct-only
         */
        get validate_runner(): Runner;

        /**
         * @construct-only
         */
        get validateRunner(): Runner;

        // Methods
        /**
         * Gets `name` of `reporter`
         * @returns The name of the reporter
         */
        get_name(): string | null;

        /**
         * @returns The {@link Gst.Pipeline}
         */
        get_pipeline(): Gst.Pipeline | null;

        /**
         * @param issue_id The issue id to get the report from
         * @returns The {@link GstValidate.Report}
         */
        get_report(issue_id: IssueId): Report | null;

        get_reporting_level(): ReportingDetails;

        /**
         * Get the list of reports present in the reporter.
         * @returns the list of {@link GstValidate.Report} present in the reporter. The caller should unref each report once it is done with them.
         */
        get_reports(): Report[];

        /**
         * Get the number of reports present in the reporter.
         * @returns the number of reports currently present in `reporter`.
         */
        get_reports_count(): number;

        /**
         * @returns The runner
         */
        get_runner(): Runner | null;

        /**
         * @param name 
         */
        init(name: string): void;

        /**
         * Remove all the {@link GstValidate.Report} from `reporter`. This should be called
         * before unreffing the reporter to break cyclic references.
         */
        purge_reports(): void;

        /**
         * @param issue_id 
         * @param message 
         */
        report_simple(issue_id: IssueId, message: string): void;

        /**
         * Set `reporter` has the 'source' of any g_log happening during the
         * execution. Usually the monitor of the first {@link Gst.Pipeline} is used
         * to handle g_logs.
         * 
         * Basically this function is used in order to start tracking any
         * issue reported with g_log in the process into GstValidate report
         * in the GstValidate reporting system.
         */
        set_handle_g_logs(): void;

        /**
         * Sets `name` on `reporter`
         * @param name The name of the reporter
         */
        set_name(name: string | null): void;

        /**
         * @param runner 
         */
        set_runner(runner: Runner): void;
    }


    export const Reporter: ReporterNamespace & {
        new (): Reporter; // This allows `obj instanceof Reporter`
    };

    /**
     * @gir-type Alias
     */
    type IssueId = GLib.Quark;

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

export default GstValidate;

// END
