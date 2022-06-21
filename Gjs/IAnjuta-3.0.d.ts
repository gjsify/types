// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * IAnjuta-3.0
 */

import type * as Gjs from './Gjs';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';
import type Anjuta from './Anjuta-3.0';
import type Gdl from './Gdl-3';

export namespace IAnjuta {

/**
 * The enumeration is used to speficy the disered build operation
 */
enum BuildableCommand {
    /**
     * Compile source
     */
    COMMAND_COMPILE,
    /**
     * Build file (normally using make)
     */
    COMMAND_BUILD,
    /**
     * make dist
     */
    COMMAND_BUILD_TARBALL,
    /**
     * make install
     */
    COMMAND_INSTALL,
    /**
     * ./configure
     */
    COMMAND_CONFIGURE,
    /**
     * ./autogen.sh
     */
    COMMAND_GENERATE,
    /**
     * make clean
     */
    COMMAND_CLEAN,
    /**
     * ./hello
     */
    COMMAND_EXECUTE,
    /**
     * check whether object files are up-to-date
     */
    COMMAND_IS_BUILT,
    COMMAND_AUTORECONF,
    /**
     * make distclean
     */
    COMMAND_DISTCLEAN,
    /**
     * make check
     */
    COMMAND_CHECK,
    /**
     * size of enum
     */
    N_COMMANDS,
}
/**
 * Possible build errors
 */
enum BuilderError {
    /**
     * Build succeeded
     */
    SUCCEED,
    /**
     * Build failed
     */
    FAILED,
    /**
     * Build was canceld
     */
    CANCELED,
    /**
     * Build aborted
     */
    ABORTED,
    /**
     * Build interruped
     */
    INTERRUPTED,
    /**
     * Build interruped
     */
    TERMINATED,
    /**
     * The specified target is unknown
     */
    UNKNOWN_TARGET,
    /**
     * Unknown Error
     */
    UNKNOWN_ERROR,
    /**
     * Other Error (no unknown ;-))
     */
    OTHER_ERROR,
}
/**
 * Defines which breakpoint characteristics are supported by the debugger
 * backend.
 */
enum DebuggerBreakpointMethod {
    /**
     * Allow to set breakpoint on address
     */
    SET_AT_ADDRESS,
    /**
     * Allow to set breakpoint on function name
     */
    SET_AT_FUNCTION,
    /**
     * Allow to disable breakpoint
     */
    ENABLE,
    /**
     * Allow to ignore breakpoint
     */
    IGNORE,
    /**
     * Allow to add a condition on breakpoint
     */
    CONDITION,
}
/**
 * This enumeration defined various characteristics of the breakpoint.
 */
enum DebuggerBreakpointType {
    /**
     * Set for removed breakpoint
     */
    REMOVED,
    /**
     * Set for changed breakpoint
     */
    UPDATED,
    /**
     * Set on source line
     */
    ON_LINE,
    /**
     * Set on an addresse
     */
    ON_ADDRESS,
    /**
     * Set on a function name
     */
    ON_FUNCTION,
    /**
     * Set on read access
     */
    ON_READ,
    /**
     * Set on write access
     */
    ON_WRITE,
    /**
     * Has enable information
     */
    WITH_ENABLE,
    /**
     * Has ignore information,
     */
    WITH_IGNORE,
    /**
     * Has counter information
     */
    WITH_TIME,
    /**
     * Has a condition
     */
    WITH_CONDITION,
    /**
     * Temporary breakpoint, automatically removed when triggered
     */
    WITH_TEMPORARY,
    /**
     * Pending breakpoint
     */
    WITH_PENDING,
}
/**
 * This enumeration is used to defined the error returned by the debugger
 * backend.
 */
enum DebuggerError {
    /**
     * No error
     */
    OK,
    /**
     * Debugger is not ready to execute the command
     */
    NOT_READY,
    /**
     * Debugger is not is running state
     */
    NOT_RUNNING,
    /**
     * Debugger is not is stopped state
     */
    NOT_STOPPED,
    /**
     * Debugger is not is loaded state
     */
    NOT_LOADED,
    /**
     * Debugger is not in started state
     */
    NOT_STARTED,
    /**
     * Debugger is not connected:
     */
    NOT_CONNECTED,
    /**
     * Corresponding function is not implemented
     */
    NOT_IMPLEMENTED,
    /**
     * Operation has been cancelled
     */
    CANCEL,
    /**
     * Debugger cannot create variable
     */
    UNABLE_TO_CREATE_VARIABLE,
    /**
     * Debugger cannot access memory
     */
    UNABLE_TO_ACCESS_MEMORY,
    /**
     * Debugger cannot open file
     */
    UNABLE_TO_OPEN_FILE,
    /**
     * Debugger cannot debug such file
     */
    UNSUPPORTED_FILE_TYPE,
    /**
     * Debugger is too old
     */
    UNSUPPORTED_VERSION,
    /**
     * Debugger cannot be found
     */
    UNABLE_TO_FIND_DEBUGGER,
    /**
     * Command has already been executed
     */
    ALREADY_DONE,
    /**
     * Program cannot be found
     */
    PROGRAM_NOT_FOUND,
    /**
     * Unable to connect to debugger
     */
    UNABLE_TO_CONNECT,
    /**
     * Unknown error
     */
    UNKNOWN_ERROR,
    /**
     * other error
     */
    OTHER_ERROR,
}
/**
 * This enumeration is used to defined the kind of output in
 * #IAnjutaDebuggerOutputCallback
 */
enum DebuggerOutputType {
    /**
     * Output from debugger
     */
    OUTPUT,
    /**
     * Warning from debugger
     */
    WARNING_OUTPUT,
    /**
     * Error from debugger
     */
    ERROR_OUTPUT,
    /**
     * Additional message from debugger
     */
    INFO_OUTPUT,
}
/**
 * This enumeration is used to defined the different state of the debugger.
 */
enum DebuggerState {
    /**
     * Debugger is executing a command, it can enter in another
     *                         at the end of the command.
     */
    BUSY,
    /**
     * Debugger is stopped.
     */
    STOPPED,
    /**
     * Debugger is started but no program is loaded.
     */
    STARTED,
    /**
     * Debugger is started and has a program loaded.
     */
    PROGRAM_LOADED,
    /**
     * Debugger is started and has a program stopped.
     */
    PROGRAM_STOPPED,
    /**
     * Debugger is started and has a program running.
     */
    PROGRAM_RUNNING,
}
enum DocumentManagerError {
    DOESNT_EXIST,
}
/**
 * This enumeration is used to specify the type of text. Note that not all
 * editors implement this.
 */
enum EditorAttribute {
    /**
     * Normal text
     */
    TEXT,
    /**
     * A keyword of the programming language
     */
    KEYWORD,
    /**
     * A comment
     */
    COMMENT,
    /**
     * A string
     */
    STRING,
}
enum EditorError {
    DOESNT_EXIST,
}
/**
 * This enumeration is used to specify the type of text. Note that not all
 * editors implement this.
 */
enum EditorLineModeType {
    /**
     * Line-Feed (Unix)
     */
    LF,
    /**
     * Carat return (Max)
     */
    CR,
    /**
     * Caret return + line-feed (Windows)
     */
    CRLF,
}
/**
 * Possible build errors
 */
enum EnvironmentError {
    CONFIG,
    OTHER_ERROR,
}
/**
 * This enumeration is used to specify the appearance of the indicator
 */
enum IndicableIndicator {
    /**
     * No indicator
     */
    NONE,
    /**
     * Important indicator
     */
    IMPORTANT,
    /**
     * Warning indicator
     */
    WARNING,
    /**
     * Critical indicator
     */
    CRITICAL,
}
enum MarkableError {
    INVALID_LOCATION,
}
/**
 * This enumeration is used to specify the pixmap used for the marker
 */
enum MarkableMarker {
    /**
     * Mark a particular line
     */
    LINEMARKER,
    /**
     * A bookmark
     */
    BOOKMARK,
    /**
     * An (error) message
     */
    MESSAGE,
    /**
     * a disabled breakpoint
     */
    BREAKPOINT_DISABLED,
    /**
     * a enabled breakpoint
     */
    BREAKPOINT_ENABLED,
    /**
     * Marks the program counter position
     */
    PROGRAM_COUNTER,
}
enum MessageManagerError {
    DOESNT_EXIST,
}
/**
 * Speficy the type ot the message added to the message view
 */
enum MessageViewType {
    /**
     * Normal message
     */
    TYPE_NORMAL,
    /**
     * Info message (highlighed)
     */
    TYPE_INFO,
    /**
     * Warning message
     */
    TYPE_WARNING,
    /**
     * Error message
     */
    TYPE_ERROR,
}
/**
 * These enumeration is used to specify errors.
 */
enum PluginFactoryError {
    OK,
    /**
     * Module file location is
     * missing in .plugin file
     */
    MISSING_LOCATION,
    /**
     * Plugin type (just after
     * double colon following location) is missing in .plugin file
     */
    MISSING_TYPE,
    /**
     * Module file name not found,
     * plugin module is probably not installed
     */
    MISSING_MODULE,
    /**
     * Module file cannot be
     * loaded, not a shared library perhaps
     */
    INVALID_MODULE,
    /**
     * Module does not contain
     * registration function, library is not an anjuta plugin or
     * is not for the right version
     */
    MISSING_FUNCTION,
    /**
     * Module has not registered
     * 	plugin type, library is not an anjuta plugin or not for
     * the right version
     */
    INVALID_TYPE,
    /**
     * Another error
     */
    UNKNOWN_ERROR,
}
enum ProjectError {
    ERROR_SUCCESS,
    ERROR_DOESNT_EXIST,
    ERROR_ALREADY_EXISTS,
    ERROR_VALIDATION_FAILED,
    ERROR_PROJECT_MALFORMED,
    ERROR_WRONG_PARENT,
    ERROR_NOT_SUPPORTED,
    ERROR_GENERAL_FAILURE,
}
enum ProjectProbe {
    PROBE_FILES,
    PROBE_MAKE_FILES,
    PROBE_PROJECT_FILES,
}
/**
 * Symbol Fields. Used to define and retrieve results from query. Each of
 * these fields are either integer or string. Use the right method to
 * retrieve them. That is, for integer use ianjuta_symbol_get_int(),
 * for string use ianjuta_symbol_get_string(), and for boolean use
 * ianjuta_symbol_get_boolean(). Some fields can be in both forms,
 * e.g. #IANJUTA_SYMBOL_FIELD_TYPE.
 */
enum SymbolField {
    /**
     * Integer. A unique ID of the symbol
     */
    FIELD_ID,
    /**
     * String. Name of the symbol
     */
    FIELD_NAME,
    /**
     * Integer. The file line number where the symbol is found.
     */
    FIELD_FILE_POS,
    FILED_SCOPE_DEF_ID,
    /**
     * Boolean: TRUE if symbol is within file scope,
     *     otherwise FALSE.
     */
    FIELD_FILE_SCOPE,
    /**
     * String. Signature of a method, if symbol is a funtion.
     *     Namely, the arguments list of the funtion.
     */
    FIELD_SIGNATURE,
    /**
     * String. Return type of a method, if symbol is a function.
     */
    FIELD_RETURNTYPE,
    /**
     * Both string and Integer. Type attribute of a symbol.
     *     In string form, it is name of the type in string form.
     *     In integer form, it is IAnjutaSymbolType enumerator value.
     */
    FIELD_TYPE,
    /**
     * type_name attribute of a symbol.
     *     If a type could be "class" then its type_name may be "MyFooClass" etc.
     */
    FIELD_TYPE_NAME,
    /**
     * String. The relative path to the file where the symbol is found.
     */
    FIELD_FILE_PATH,
    /**
     * String. The project name to which the symbol belongs to.
     */
    FIELD_PROJECT_NAME,
    /**
     * String. The project version to which the symbol belongs to.
     */
    FIELD_PROJECT_VERSION,
    /**
     * String. Implementation attribute of a symbol. It may be
     *     "pure virtual", "virtual", etc.
     */
    FIELD_IMPLEMENTATION,
    /**
     * String. Access attribute of a symbol.
     *     It may be "public", "private" etc.
     */
    FIELD_ACCESS,
    /**
     * Kind attribute of a symbol, such as
     *     "enumerator", "namespace", "class" etc.
     */
    FIELD_KIND,
    /**
     * Boolean. TRUE if symbol is
     *     a scope container, such as namespace, class, struct etc., otherwise
     *     FALSE.
     */
    FIELD_IS_CONTAINER,
    /**
     * The end marker.
     */
    FIELD_END,
}
/**
 * Sets the database to use for the query. System database is where
 * all system library symbols are found. While project database is where
 * currently open project's symbols are found.
 */
enum SymbolQueryDb {
    /**
     * Select project database.
     */
    DB_PROJECT,
    /**
     * Select system database.
     */
    DB_SYSTEM,
}
/**
 * Defines file scope of symbols to query.
 */
enum SymbolQueryFileScope {
    /**
     * Ignore file scope
     */
    SEARCH_FS_IGNORE,
    /**
     * Only public symbols visible to rest of project.
     */
    SEARCH_FS_PUBLIC,
    /**
     * Only private symbols visible inside a file.
     */
    SEARCH_FS_PRIVATE,
}
/**
 * This parameter determines the mode of query execution. By default,
 * IANJUTA_SYMBOL_QUERY_MODE_SYNC is selected.
 */
enum SymbolQueryMode {
    /**
     * Syncronous query. The result is immediately
     *     available as retrun value of search call.
     */
    MODE_SYNC,
    /**
     * Asynchronous query. The search call
     *     return immediately and result delievered as a signal later. The actual
     *     query is done in a separate thread.
     */
    MODE_ASYNC,
    /**
     * If the database is busy
     *     scanning, then the query is performed later when database is ready.
     *     It returns NULL and result is delivered through async-result signal.
     *     Only query can stay queued, so calling search multiple times would
     *     result in only the last one being active.
     */
    MODE_QUEUED,
}
/**
 * Names of query that defined what kind of query it is.
 */
enum SymbolQueryName {
    /**
     * Query to perform basic substring search.
     */
    SEARCH,
    /**
     * Query to get all symbols
     */
    SEARCH_ALL,
    /**
     * Query to perform substring search in a file.
     */
    SEARCH_FILE,
    /**
     * Query to perform substring search in a scope.
     */
    SEARCH_IN_SCOPE,
    /**
     * Query to find the symbol of given ID.
     */
    SEARCH_ID,
    /**
     * Query to find members of a scope (eg. class).
     */
    SEARCH_MEMBERS,
    /**
     * Query to get parents of a class.
     */
    SEARCH_CLASS_PARENTS,
    /**
     * Query to find scope name of a file position.
     */
    SEARCH_SCOPE,
    /**
     * Query to get the parent scope of a symbol.
     */
    SEARCH_PARENT_SCOPE,
    /**
     * Query to get the parent scope of a symbol in the file.
     */
    SEARCH_PARENT_SCOPE_FILE,
}
enum SymbolType {
    /**
     * None spedified.
     */
    TYPE_NONE,
    /**
     * Unknown type.
     */
    TYPE_UNDEF,
    /**
     * Class declaration
     */
    TYPE_CLASS,
    /**
     * Enum declaration
     */
    TYPE_ENUM,
    /**
     * Enumerator value
     */
    TYPE_ENUMERATOR,
    /**
     * Field (Java only)
     */
    TYPE_FIELD,
    /**
     * Function definition
     */
    TYPE_FUNCTION,
    /**
     * Interface (Java only)
     */
    TYPE_INTERFACE,
    /**
     * Member variable of class/struct
     */
    TYPE_MEMBER,
    /**
     * Class method (Java only)
     */
    TYPE_METHOD,
    /**
     * Namespace declaration
     */
    TYPE_NAMESPACE,
    /**
     * Package (Java only)
     */
    TYPE_PACKAGE,
    /**
     * Function prototype
     */
    TYPE_PROTOTYPE,
    /**
     * Struct declaration
     */
    TYPE_STRUCT,
    /**
     * Typedef
     */
    TYPE_TYPEDEF,
    /**
     * Union
     */
    TYPE_UNION,
    /**
     * Variable
     */
    TYPE_VARIABLE,
    /**
     * Extern or forward declaration
     */
    TYPE_EXTERNVAR,
    /**
     * Macro (without arguments)
     */
    TYPE_MACRO,
    /**
     * Parameterized macro
     */
    TYPE_MACRO_WITH_ARG,
    /**
     * File (Pseudo tag)
     */
    TYPE_FILE,
    /**
     * Other (non C/C++/Java tag)
     */
    TYPE_OTHER,
    /**
     * types which are subjected to create a scope.
     */
    TYPE_SCOPE_CONTAINER,
    /**
     * Maximum value, used as end marker.
     */
    TYPE_MAX,
}
/**
 * These enumeration is used to specify errors.
 */
enum VcsError {
    UNKOWN_ERROR,
}
/**
 * Name of debugging configutation.
 */
const BUILDER_CONFIGURATION_DEBUG: string
/**
 * Name of optimized configutation.
 */
const BUILDER_CONFIGURATION_OPTIMIZED: string
/**
 * Name of profiling configutation.
 */
const BUILDER_CONFIGURATION_PROFILING: string
/**
 * Build directory uri. It is the same than the project_root_uri for
 * in source build.
 */
const BUILDER_ROOT_URI: string
/**
 * Anjuta shell value set by document manager to the current document
 */
const DOCUMENT_MANAGER_CURRENT_DOCUMENT: string
/**
 * Integer key, defines the number a space for one indentation step.
 */
const EDITOR_INDENT_WIDTH_KEY: string
/**
 * Schema id used to store common editor settings.
 */
const EDITOR_PREF_SCHEMA: string
/**
 * Integer key, defines the size of a tabulation in spaces.
 */
const EDITOR_TAB_WIDTH_KEY: string
/**
 * Boolean key, true is tabs has to be used for indenting.
 */
const EDITOR_USE_TABS_KEY: string
/**
 * Anjuta shell value set by file manager to the selected file.
 */
const FILE_MANAGER_SELECTED_FILE: string
/**
 * Boolean key, true is adding '(' after function call autocompletion
 */
const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_BRACE_AFTER_FUNC: string
/**
 * Boolean key, true is adding ')' after function call autocompletion
 */
const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_CLOSEBRACE_AFTER_FUNC: string
/**
 * Boolean key, true is code completion is enable.
 */
const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_ENABLE: string
/**
 * Boolean key, true is adding a space after function call autocompletion
 */
const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_SPACE_AFTER_FUNC: string
/**
 * Boolean key, true is calltips has to be shown.
 */
const LANGUAGE_PROVIDER_PREF_CALLTIP_ENABLE: string
/**
 * Anjuta shell value set by project manager to the current project object
 * which implement #IAnjutaProject interface.
 */
const PROJECT_MANAGER_CURRENT_PROJECT: string
/**
 * Anjuta shell value set by project manager to the current uri.
 */
const PROJECT_MANAGER_CURRENT_URI: string
/**
 * Anjuta shell value set by project manager to the project root uri.
 */
const PROJECT_MANAGER_PROJECT_ROOT_URI: string
function buildable_error_quark(): GLib.Quark
function builder_error_quark(): GLib.Quark
function debug_manager_error_quark(): GLib.Quark
function debugger_breakpoint_error_quark(): GLib.Quark
function debugger_error_quark(): GLib.Quark
function debugger_instruction_error_quark(): GLib.Quark
function debugger_memory_error_quark(): GLib.Quark
function debugger_register_error_quark(): GLib.Quark
function debugger_variable_error_quark(): GLib.Quark
function document_error_quark(): GLib.Quark
function document_manager_error_quark(): GLib.Quark
function editor_assist_error_quark(): GLib.Quark
function editor_cell_error_quark(): GLib.Quark
function editor_cell_style_error_quark(): GLib.Quark
function editor_comment_error_quark(): GLib.Quark
function editor_convert_error_quark(): GLib.Quark
function editor_error_quark(): GLib.Quark
function editor_factory_error_quark(): GLib.Quark
function editor_folds_error_quark(): GLib.Quark
function editor_glade_signal_error_quark(): GLib.Quark
function editor_goto_error_quark(): GLib.Quark
function editor_hover_error_quark(): GLib.Quark
function editor_language_error_quark(): GLib.Quark
function editor_line_mode_error_quark(): GLib.Quark
function editor_search_error_quark(): GLib.Quark
function editor_selection_error_quark(): GLib.Quark
function editor_tip_error_quark(): GLib.Quark
function editor_view_error_quark(): GLib.Quark
function editor_zoom_error_quark(): GLib.Quark
function environment_error_quark(): GLib.Quark
function file_error_quark(): GLib.Quark
function file_loader_error_quark(): GLib.Quark
function file_manager_error_quark(): GLib.Quark
function file_savable_error_quark(): GLib.Quark
function glade_error_quark(): GLib.Quark
function help_error_quark(): GLib.Quark
function indenter_error_quark(): GLib.Quark
function indicable_error_quark(): GLib.Quark
function iterable_error_quark(): GLib.Quark
function iterable_tree_error_quark(): GLib.Quark
function language_error_quark(): GLib.Quark
function language_provider_error_quark(): GLib.Quark
function loader_error_quark(): GLib.Quark
function markable_error_quark(): GLib.Quark
function message_manager_error_quark(): GLib.Quark
function message_view_error_quark(): GLib.Quark
function plugin_factory_error_quark(): GLib.Quark
function preferences_error_quark(): GLib.Quark
function print_error_quark(): GLib.Quark
function project_backend_error_quark(): GLib.Quark
function project_chooser_error_quark(): GLib.Quark
function project_error_quark(): GLib.Quark
function project_manager_error_quark(): GLib.Quark
function provider_error_quark(): GLib.Quark
function snippets_manager_error_quark(): GLib.Quark
function stream_error_quark(): GLib.Quark
function stream_loader_error_quark(): GLib.Quark
function stream_savable_error_quark(): GLib.Quark
function symbol_error_quark(): GLib.Quark
function symbol_manager_error_quark(): GLib.Quark
function symbol_query_error_quark(): GLib.Quark
function terminal_error_quark(): GLib.Quark
function todo_error_quark(): GLib.Quark
function vcs_error_quark(): GLib.Quark
function wizard_error_quark(): GLib.Quark
interface BuilderCallback {
    (sender: GObject.Object, command: BuilderHandle, err: GLib.Error): void
}
/**
 * This callback function is used to return a #IAnjutaBreakpointItem.
 * @callback 
 * @param data a #IAnjutaBreakpointItem object
 * @param err error
 */
interface DebuggerBreakpointCallback {
    (data: DebuggerBreakpointItem, err: GLib.Error): void
}
/**
 * This callback function is used only by #ianjuta_debugger_callback with a
 * NULL data.
 * @callback 
 * @param data data
 * @param err error
 */
interface DebuggerCallback {
    (data: object | null, err: GLib.Error): void
}
/**
 * This callback function is used by several debugger functions. The data is
 * a string
 * @callback 
 * @param value string
 * @param err error
 */
interface DebuggerGCharCallback {
    (value: string, err: GLib.Error): void
}
/**
 * This callback function is used to return a #IAnjutaDebuggerInstructionDisassembly.
 * @callback 
 * @param data a #IAnjutaDebuggerInstructionDisassembly object
 * @param err error
 */
interface DebuggerInstructionCallback {
    (data: DebuggerInstructionDisassembly, err: GLib.Error): void
}
/**
 * This callback function is used to return a #IAnjutaDebuggerMemoryBlock.
 * @callback 
 * @param data a #IAnjutaDebuggerMemoryBlock object
 * @param err error
 */
interface DebuggerMemoryCallback {
    (data: DebuggerMemoryBlock, err: GLib.Error): void
}
/**
 * This callback function is used only by #ianjuta_debugger_callback with a
 * NULL data.
 * @callback 
 * @param type kind of output
 * @param output string
 */
interface DebuggerOutputCallback {
    (type: DebuggerOutputType, output: string): void
}
/**
 * This callback function is used to return a #IAnjutaDebuggerVariableObject.
 * @callback 
 * @param data a #IAnjutaDebuggerVariableObject object
 * @param err error
 */
interface DebuggerVariableCallback {
    (data: DebuggerVariableObject, err: GLib.Error): void
}
/**
 * Called when diff data comes from ianjuta_vcs_diff.
 * @callback 
 * @param file File being diffed
 * @param diff Diff data
 */
interface VcsDiffCallback {
    (file: Gio.File, diff: string): void
}
/**
 * Callback called for each status record returned by
 * ianjuta_vcs_query_status.
 * @callback 
 * @param file File representing the file for which status is given
 * @param status #AnjutaVcsStatus for the file represented by `file`.
 */
interface VcsStatusCallback {
    (file: Gio.File, status: Anjuta.VcsStatus): void
}
interface Buildable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Buildable {

    // Owm methods of IAnjuta-3.0.IAnjuta.Buildable

    /**
     * fixme
     * @param uri fixme
     */
    build(uri: string): void
    /**
     * fixme
     * @param uri fixme
     */
    clean(uri: string): void
    /**
     * fixme
     * @param uri fixme
     */
    configure(uri: string): void
    /**
     * fixme
     * @param uri fixme
     */
    execute(uri: string): void
    /**
     * fixme
     * @param uri fixme
     */
    generate(uri: string): void
    /**
     * Retrieves the currently set command override.
     * @param command_id Command to get override.
     */
    get_command(command_id: BuildableCommand): string
    /**
     * fixme
     * @param uri fixme
     */
    install(uri: string): void
    /**
     * Resets the command overrides to defaults.
     */
    reset_commands(): void
    /**
     * Overrides the default command for the given command.
     * @param command_id Command to override.
     * @param command Build command to override.
     */
    set_command(command_id: BuildableCommand, command: string): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Buildable

    /**
     * fixme
     * @virtual 
     * @param uri fixme
     */
    vfunc_build(uri: string): void
    /**
     * fixme
     * @virtual 
     * @param uri fixme
     */
    vfunc_clean(uri: string): void
    /**
     * fixme
     * @virtual 
     * @param uri fixme
     */
    vfunc_configure(uri: string): void
    /**
     * fixme
     * @virtual 
     * @param uri fixme
     */
    vfunc_execute(uri: string): void
    /**
     * fixme
     * @virtual 
     * @param uri fixme
     */
    vfunc_generate(uri: string): void
    /**
     * Retrieves the currently set command override.
     * @virtual 
     * @param command_id Command to get override.
     */
    vfunc_get_command(command_id: BuildableCommand): string
    /**
     * fixme
     * @virtual 
     * @param uri fixme
     */
    vfunc_install(uri: string): void
    /**
     * Resets the command overrides to defaults.
     * @virtual 
     */
    vfunc_reset_commands(): void
    /**
     * Overrides the default command for the given command.
     * @virtual 
     * @param command_id Command to override.
     * @param command Build command to override.
     */
    vfunc_set_command(command_id: BuildableCommand, command: string): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Buildable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Buildable extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Buildable

    static name: string
    static $gtype: GObject.GType<Buildable>

    // Constructors of IAnjuta-3.0.IAnjuta.Buildable

    constructor(config?: Buildable_ConstructProps) 
    _init(config?: Buildable_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Builder_ConstructProps extends GObject.Object_ConstructProps {
}

interface Builder {

    // Owm methods of IAnjuta-3.0.IAnjuta.Builder

    /**
     * Cancel specified command. The callback function will not
     * be called.
     * @param handle handle of the command to cancel
     */
    cancel(handle: BuilderHandle): void
    /**
     * Get the configuration corresponding to the target uri.
     * @param uri target uri
     */
    get_uri_configuration(uri: string): string
    /**
     * List all defined configuration. These names returned are
     * the internal non localized names for the following
     * predefined configuration: Debug, Profiling, Optimized.
     * The default configuration has no name and is not returned.
     */
    list_configuration(): string[]

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Builder

    /**
     * Cancel specified command. The callback function will not
     * be called.
     * @virtual 
     * @param handle handle of the command to cancel
     */
    vfunc_cancel(handle: BuilderHandle): void
    /**
     * Get the configuration corresponding to the target uri.
     * @virtual 
     * @param uri target uri
     */
    vfunc_get_uri_configuration(uri: string): string
    /**
     * List all defined configuration. These names returned are
     * the internal non localized names for the following
     * predefined configuration: Debug, Profiling, Optimized.
     * The default configuration has no name and is not returned.
     * @virtual 
     */
    vfunc_list_configuration(): string[]

    // Class property signals of IAnjuta-3.0.IAnjuta.Builder

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Builder extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Builder

    static name: string
    static $gtype: GObject.GType<Builder>

    // Constructors of IAnjuta-3.0.IAnjuta.Builder

    constructor(config?: Builder_ConstructProps) 
    _init(config?: Builder_ConstructProps): void
}

interface DebugManager_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `breakpoint-changed`
 */
interface DebugManager_BreakpointChangedSignalCallback {
    ($obj: DebugManager, object: object | null): void
}

/**
 * Signal callback interface for `debugger-started`
 */
interface DebugManager_DebuggerStartedSignalCallback {
    ($obj: DebugManager): void
}

/**
 * Signal callback interface for `debugger-stopped`
 */
interface DebugManager_DebuggerStoppedSignalCallback {
    ($obj: DebugManager, object: GLib.Error): void
}

/**
 * Signal callback interface for `frame-changed`
 */
interface DebugManager_FrameChangedSignalCallback {
    ($obj: DebugManager, object: number, p0: number): void
}

/**
 * Signal callback interface for `location-changed`
 */
interface DebugManager_LocationChangedSignalCallback {
    ($obj: DebugManager, object: number, p0: string, p1: number): void
}

/**
 * Signal callback interface for `program-exited`
 */
interface DebugManager_ProgramExitedSignalCallback {
    ($obj: DebugManager): void
}

/**
 * Signal callback interface for `program-loaded`
 */
interface DebugManager_ProgramLoadedSignalCallback {
    ($obj: DebugManager): void
}

/**
 * Signal callback interface for `program-moved`
 */
interface DebugManager_ProgramMovedSignalCallback {
    ($obj: DebugManager, object: number, p0: number, p1: number, p2: string, p3: number): void
}

/**
 * Signal callback interface for `program-running`
 */
interface DebugManager_ProgramRunningSignalCallback {
    ($obj: DebugManager): void
}

/**
 * Signal callback interface for `program-started`
 */
interface DebugManager_ProgramStartedSignalCallback {
    ($obj: DebugManager): void
}

/**
 * Signal callback interface for `program-stopped`
 */
interface DebugManager_ProgramStoppedSignalCallback {
    ($obj: DebugManager): void
}

/**
 * Signal callback interface for `program-unloaded`
 */
interface DebugManager_ProgramUnloadedSignalCallback {
    ($obj: DebugManager): void
}

/**
 * Signal callback interface for `sharedlib-event`
 */
interface DebugManager_SharedlibEventSignalCallback {
    ($obj: DebugManager): void
}

/**
 * Signal callback interface for `signal-received`
 */
interface DebugManager_SignalReceivedSignalCallback {
    ($obj: DebugManager, object: string, p0: string): void
}

interface DebugManager {

    // Owm methods of IAnjuta-3.0.IAnjuta.DebugManager

    /**
     * Quit the debugger, can wait until the debugger is ready.
     */
    quit(): boolean
    /**
     * Start the debugger of the given uri
     * @param uri uri of the target
     */
    start(uri: string): boolean
    /**
     * Start the debugger of the given uri
     * @param server server (IP address:port)
     * @param uri uri of the local target
     */
    start_remote(server: string, uri: string): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.DebugManager

    vfunc_breakpoint_changed(breakpoint: DebuggerBreakpointItem): void
    vfunc_debugger_started(): void
    vfunc_debugger_stopped(err: GLib.Error): void
    vfunc_frame_changed(frame: number, thread: number): void
    vfunc_location_changed(address: number, uri: string, line: number): void
    vfunc_program_exited(): void
    vfunc_program_loaded(): void
    vfunc_program_moved(pid: number, tid: number, address: number, file: string, line: number): void
    vfunc_program_running(): void
    vfunc_program_started(): void
    vfunc_program_stopped(): void
    vfunc_program_unloaded(): void
    /**
     * Quit the debugger, can wait until the debugger is ready.
     * @virtual 
     */
    vfunc_quit(): boolean
    vfunc_sharedlib_event(): void
    vfunc_signal_received(name: string, description: string): void
    /**
     * Start the debugger of the given uri
     * @virtual 
     * @param uri uri of the target
     */
    vfunc_start(uri: string): boolean
    /**
     * Start the debugger of the given uri
     * @virtual 
     * @param server server (IP address:port)
     * @param uri uri of the local target
     */
    vfunc_start_remote(server: string, uri: string): boolean

    // Own signals of IAnjuta-3.0.IAnjuta.DebugManager

    connect(sigName: "breakpoint-changed", callback: DebugManager_BreakpointChangedSignalCallback): number
    connect_after(sigName: "breakpoint-changed", callback: DebugManager_BreakpointChangedSignalCallback): number
    emit(sigName: "breakpoint-changed", object: object | null, ...args: any[]): void
    connect(sigName: "debugger-started", callback: DebugManager_DebuggerStartedSignalCallback): number
    connect_after(sigName: "debugger-started", callback: DebugManager_DebuggerStartedSignalCallback): number
    emit(sigName: "debugger-started", ...args: any[]): void
    connect(sigName: "debugger-stopped", callback: DebugManager_DebuggerStoppedSignalCallback): number
    connect_after(sigName: "debugger-stopped", callback: DebugManager_DebuggerStoppedSignalCallback): number
    emit(sigName: "debugger-stopped", object: GLib.Error, ...args: any[]): void
    connect(sigName: "frame-changed", callback: DebugManager_FrameChangedSignalCallback): number
    connect_after(sigName: "frame-changed", callback: DebugManager_FrameChangedSignalCallback): number
    emit(sigName: "frame-changed", object: number, p0: number, ...args: any[]): void
    connect(sigName: "location-changed", callback: DebugManager_LocationChangedSignalCallback): number
    connect_after(sigName: "location-changed", callback: DebugManager_LocationChangedSignalCallback): number
    emit(sigName: "location-changed", object: number, p0: string, p1: number, ...args: any[]): void
    connect(sigName: "program-exited", callback: DebugManager_ProgramExitedSignalCallback): number
    connect_after(sigName: "program-exited", callback: DebugManager_ProgramExitedSignalCallback): number
    emit(sigName: "program-exited", ...args: any[]): void
    connect(sigName: "program-loaded", callback: DebugManager_ProgramLoadedSignalCallback): number
    connect_after(sigName: "program-loaded", callback: DebugManager_ProgramLoadedSignalCallback): number
    emit(sigName: "program-loaded", ...args: any[]): void
    connect(sigName: "program-moved", callback: DebugManager_ProgramMovedSignalCallback): number
    connect_after(sigName: "program-moved", callback: DebugManager_ProgramMovedSignalCallback): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number, ...args: any[]): void
    connect(sigName: "program-running", callback: DebugManager_ProgramRunningSignalCallback): number
    connect_after(sigName: "program-running", callback: DebugManager_ProgramRunningSignalCallback): number
    emit(sigName: "program-running", ...args: any[]): void
    connect(sigName: "program-started", callback: DebugManager_ProgramStartedSignalCallback): number
    connect_after(sigName: "program-started", callback: DebugManager_ProgramStartedSignalCallback): number
    emit(sigName: "program-started", ...args: any[]): void
    connect(sigName: "program-stopped", callback: DebugManager_ProgramStoppedSignalCallback): number
    connect_after(sigName: "program-stopped", callback: DebugManager_ProgramStoppedSignalCallback): number
    emit(sigName: "program-stopped", ...args: any[]): void
    connect(sigName: "program-unloaded", callback: DebugManager_ProgramUnloadedSignalCallback): number
    connect_after(sigName: "program-unloaded", callback: DebugManager_ProgramUnloadedSignalCallback): number
    emit(sigName: "program-unloaded", ...args: any[]): void
    connect(sigName: "sharedlib-event", callback: DebugManager_SharedlibEventSignalCallback): number
    connect_after(sigName: "sharedlib-event", callback: DebugManager_SharedlibEventSignalCallback): number
    emit(sigName: "sharedlib-event", ...args: any[]): void
    connect(sigName: "signal-received", callback: DebugManager_SignalReceivedSignalCallback): number
    connect_after(sigName: "signal-received", callback: DebugManager_SignalReceivedSignalCallback): number
    emit(sigName: "signal-received", object: string, p0: string, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.DebugManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DebugManager extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.DebugManager

    static name: string
    static $gtype: GObject.GType<DebugManager>

    // Constructors of IAnjuta-3.0.IAnjuta.DebugManager

    constructor(config?: DebugManager_ConstructProps) 
    _init(config?: DebugManager_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Debugger_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `debugger-ready`
 */
interface Debugger_DebuggerReadySignalCallback {
    ($obj: Debugger, object: DebuggerState): void
}

/**
 * Signal callback interface for `debugger-started`
 */
interface Debugger_DebuggerStartedSignalCallback {
    ($obj: Debugger): void
}

/**
 * Signal callback interface for `debugger-stopped`
 */
interface Debugger_DebuggerStoppedSignalCallback {
    ($obj: Debugger, object: GLib.Error): void
}

/**
 * Signal callback interface for `frame-changed`
 */
interface Debugger_FrameChangedSignalCallback {
    ($obj: Debugger, object: number, p0: number): void
}

/**
 * Signal callback interface for `program-exited`
 */
interface Debugger_ProgramExitedSignalCallback {
    ($obj: Debugger): void
}

/**
 * Signal callback interface for `program-loaded`
 */
interface Debugger_ProgramLoadedSignalCallback {
    ($obj: Debugger): void
}

/**
 * Signal callback interface for `program-moved`
 */
interface Debugger_ProgramMovedSignalCallback {
    ($obj: Debugger, object: number, p0: number, p1: number, p2: string, p3: number): void
}

/**
 * Signal callback interface for `program-running`
 */
interface Debugger_ProgramRunningSignalCallback {
    ($obj: Debugger): void
}

/**
 * Signal callback interface for `program-stopped`
 */
interface Debugger_ProgramStoppedSignalCallback {
    ($obj: Debugger): void
}

/**
 * Signal callback interface for `sharedlib-event`
 */
interface Debugger_SharedlibEventSignalCallback {
    ($obj: Debugger): void
}

/**
 * Signal callback interface for `signal-received`
 */
interface Debugger_SignalReceivedSignalCallback {
    ($obj: Debugger, object: string, p0: string): void
}

interface Debugger {

    // Owm methods of IAnjuta-3.0.IAnjuta.Debugger

    /**
     * Quit the debugger as fast as possible.
     */
    abort(): boolean
    /**
     * Attach to an already running process.
     * @param pid pid of the process to debug
     * @param source_search_directories List of directories to search for 		      source files.
     */
    attach(pid: number, source_search_directories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     * @param server remote server
     * @param args command line argument of the program
     * @param terminal TRUE if the program need a terminal
     * @param stop TRUE if program is stopped at the beginning
     */
    // TODO fix conflict: connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Disable debugger log.
     */
    disable_log(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
     * @param log MessageView used by log
     */
    enable_log(log: MessageView): void
    /**
     * Exit from the currently loaded program.
     */
    exit(): boolean
    /**
     * Get the current state of the debugger
     */
    get_state(): DebuggerState
    /**
     * It defines how to handle signal received by the program.
     * @param name signal name
     * @param stop TRUE if we need to stop signal
     * @param print TRUE if we display a message when the signal is emitted
     * @param ignore TRUE if we ignore the signal
     */
    handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    interrupt(): boolean
    /**
     * Load a program in the debugger.
     * @param file filename
     * @param mime_type mime type of the file
     * @param source_search_directories List of directories to search for 		      source files.
     */
    load(file: string, mime_type: string, source_search_directories: string[]): boolean
    /**
     * Quit the debugger, can wait until the debugger is ready.
     */
    quit(): boolean
    /**
     * Run the program currently loaded.
     */
    run(): boolean
    /**
     * Execute the program from a new position.
     * This function is optional.
     * @param file target file name
     * @param line target line in file
     */
    run_from(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     * @param file target file name
     * @param line target line in file
     */
    run_to(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     * @param command command
     */
    send_command(command: string): boolean
    /**
     * Set environment variable
     * @param env List environment variable
     */
    set_environment(env: string): boolean
    /**
     * Set the current frame.
     * @param frame frame number
     */
    set_frame(frame: number): boolean
    /**
     * Set the current thread.
     * @param thread thread number
     */
    set_thread(thread: number): boolean
    /**
     * Set program working directory.
     * @param dir working program directory
     */
    set_working_directory(dir: string): boolean
    /**
     * Start a loaded program under debugger control.
     * @param args command line argument of the program
     * @param terminal TRUE if the program need a terminal
     * @param stop TRUE if program is stopped at the beginning
     */
    start(args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Execute a single C instruction of the program currently loaded.
     */
    step_in(): boolean
    /**
     * Execute the currently loaded program until it goes out of the
     * current procedure.
     */
    step_out(): boolean
    /**
     * Execute one C instruction, without entering in procedure, of
     * the program currently loaded.
     */
    step_over(): boolean
    /**
     * Unload a program.
     */
    unload(): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Debugger

    /**
     * Quit the debugger as fast as possible.
     * @virtual 
     */
    vfunc_abort(): boolean
    /**
     * Attach to an already running process.
     * @virtual 
     * @param pid pid of the process to debug
     * @param source_search_directories List of directories to search for 		      source files.
     */
    vfunc_attach(pid: number, source_search_directories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     * @virtual 
     * @param server remote server
     * @param args command line argument of the program
     * @param terminal TRUE if the program need a terminal
     * @param stop TRUE if program is stopped at the beginning
     */
    vfunc_connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfunc_debugger_ready(state: DebuggerState): void
    vfunc_debugger_started(): void
    vfunc_debugger_stopped(err: GLib.Error): void
    /**
     * Disable debugger log.
     * @virtual 
     */
    vfunc_disable_log(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
     * @virtual 
     * @param log MessageView used by log
     */
    vfunc_enable_log(log: MessageView): void
    /**
     * Exit from the currently loaded program.
     * @virtual 
     */
    vfunc_exit(): boolean
    vfunc_frame_changed(frame: number, thread: number): void
    /**
     * Get the current state of the debugger
     * @virtual 
     */
    vfunc_get_state(): DebuggerState
    /**
     * It defines how to handle signal received by the program.
     * @virtual 
     * @param name signal name
     * @param stop TRUE if we need to stop signal
     * @param print TRUE if we display a message when the signal is emitted
     * @param ignore TRUE if we ignore the signal
     */
    vfunc_handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     * @virtual 
     */
    vfunc_interrupt(): boolean
    /**
     * Load a program in the debugger.
     * @virtual 
     * @param file filename
     * @param mime_type mime type of the file
     * @param source_search_directories List of directories to search for 		      source files.
     */
    vfunc_load(file: string, mime_type: string, source_search_directories: string[]): boolean
    vfunc_program_exited(): void
    vfunc_program_loaded(): void
    vfunc_program_moved(pid: number, tid: number, address: number, file: string, line: number): void
    vfunc_program_running(): void
    vfunc_program_stopped(): void
    /**
     * Quit the debugger, can wait until the debugger is ready.
     * @virtual 
     */
    vfunc_quit(): boolean
    /**
     * Run the program currently loaded.
     * @virtual 
     */
    vfunc_run(): boolean
    /**
     * Execute the program from a new position.
     * This function is optional.
     * @virtual 
     * @param file target file name
     * @param line target line in file
     */
    vfunc_run_from(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     * @virtual 
     * @param file target file name
     * @param line target line in file
     */
    vfunc_run_to(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     * @virtual 
     * @param command command
     */
    vfunc_send_command(command: string): boolean
    /**
     * Set environment variable
     * @virtual 
     * @param env List environment variable
     */
    vfunc_set_environment(env: string): boolean
    /**
     * Set the current frame.
     * @virtual 
     * @param frame frame number
     */
    vfunc_set_frame(frame: number): boolean
    /**
     * Set the current thread.
     * @virtual 
     * @param thread thread number
     */
    vfunc_set_thread(thread: number): boolean
    /**
     * Set program working directory.
     * @virtual 
     * @param dir working program directory
     */
    vfunc_set_working_directory(dir: string): boolean
    vfunc_sharedlib_event(): void
    vfunc_signal_received(name: string, description: string): void
    /**
     * Start a loaded program under debugger control.
     * @virtual 
     * @param args command line argument of the program
     * @param terminal TRUE if the program need a terminal
     * @param stop TRUE if program is stopped at the beginning
     */
    vfunc_start(args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Execute a single C instruction of the program currently loaded.
     * @virtual 
     */
    vfunc_step_in(): boolean
    /**
     * Execute the currently loaded program until it goes out of the
     * current procedure.
     * @virtual 
     */
    vfunc_step_out(): boolean
    /**
     * Execute one C instruction, without entering in procedure, of
     * the program currently loaded.
     * @virtual 
     */
    vfunc_step_over(): boolean
    /**
     * Unload a program.
     * @virtual 
     */
    vfunc_unload(): boolean

    // Own signals of IAnjuta-3.0.IAnjuta.Debugger

    connect(sigName: "debugger-ready", callback: Debugger_DebuggerReadySignalCallback): number
    connect_after(sigName: "debugger-ready", callback: Debugger_DebuggerReadySignalCallback): number
    emit(sigName: "debugger-ready", object: DebuggerState, ...args: any[]): void
    connect(sigName: "debugger-started", callback: Debugger_DebuggerStartedSignalCallback): number
    connect_after(sigName: "debugger-started", callback: Debugger_DebuggerStartedSignalCallback): number
    emit(sigName: "debugger-started", ...args: any[]): void
    connect(sigName: "debugger-stopped", callback: Debugger_DebuggerStoppedSignalCallback): number
    connect_after(sigName: "debugger-stopped", callback: Debugger_DebuggerStoppedSignalCallback): number
    emit(sigName: "debugger-stopped", object: GLib.Error, ...args: any[]): void
    connect(sigName: "frame-changed", callback: Debugger_FrameChangedSignalCallback): number
    connect_after(sigName: "frame-changed", callback: Debugger_FrameChangedSignalCallback): number
    emit(sigName: "frame-changed", object: number, p0: number, ...args: any[]): void
    connect(sigName: "program-exited", callback: Debugger_ProgramExitedSignalCallback): number
    connect_after(sigName: "program-exited", callback: Debugger_ProgramExitedSignalCallback): number
    emit(sigName: "program-exited", ...args: any[]): void
    connect(sigName: "program-loaded", callback: Debugger_ProgramLoadedSignalCallback): number
    connect_after(sigName: "program-loaded", callback: Debugger_ProgramLoadedSignalCallback): number
    emit(sigName: "program-loaded", ...args: any[]): void
    connect(sigName: "program-moved", callback: Debugger_ProgramMovedSignalCallback): number
    connect_after(sigName: "program-moved", callback: Debugger_ProgramMovedSignalCallback): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number, ...args: any[]): void
    connect(sigName: "program-running", callback: Debugger_ProgramRunningSignalCallback): number
    connect_after(sigName: "program-running", callback: Debugger_ProgramRunningSignalCallback): number
    emit(sigName: "program-running", ...args: any[]): void
    connect(sigName: "program-stopped", callback: Debugger_ProgramStoppedSignalCallback): number
    connect_after(sigName: "program-stopped", callback: Debugger_ProgramStoppedSignalCallback): number
    emit(sigName: "program-stopped", ...args: any[]): void
    connect(sigName: "sharedlib-event", callback: Debugger_SharedlibEventSignalCallback): number
    connect_after(sigName: "sharedlib-event", callback: Debugger_SharedlibEventSignalCallback): number
    emit(sigName: "sharedlib-event", ...args: any[]): void
    connect(sigName: "signal-received", callback: Debugger_SignalReceivedSignalCallback): number
    connect_after(sigName: "signal-received", callback: Debugger_SignalReceivedSignalCallback): number
    emit(sigName: "signal-received", object: string, p0: string, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Debugger

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Debugger extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Debugger

    static name: string
    static $gtype: GObject.GType<Debugger>

    // Constructors of IAnjuta-3.0.IAnjuta.Debugger

    constructor(config?: Debugger_ConstructProps) 
    _init(config?: Debugger_ConstructProps): void
}

interface DebuggerBreakpoint_ConstructProps extends Debugger_ConstructProps, GObject.Object_ConstructProps {
}

interface DebuggerBreakpoint extends Debugger {

    // Owm methods of IAnjuta-3.0.IAnjuta.DebuggerBreakpoint

    /**
     * Return all implemented methods.
     */
    implement_breakpoint(): number

    // Own virtual methods of IAnjuta-3.0.IAnjuta.DebuggerBreakpoint

    /**
     * Return all implemented methods.
     * @virtual 
     */
    vfunc_implement_breakpoint(): number

    // Class property signals of IAnjuta-3.0.IAnjuta.DebuggerBreakpoint

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DebuggerBreakpoint extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerBreakpoint

    static name: string
    static $gtype: GObject.GType<DebuggerBreakpoint>

    // Constructors of IAnjuta-3.0.IAnjuta.DebuggerBreakpoint

    constructor(config?: DebuggerBreakpoint_ConstructProps) 
    _init(config?: DebuggerBreakpoint_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface DebuggerInstruction_ConstructProps extends Debugger_ConstructProps, GObject.Object_ConstructProps {
}

interface DebuggerInstruction extends Debugger {

    // Owm methods of IAnjuta-3.0.IAnjuta.DebuggerInstruction

    /**
     * Restart the program starting from address address
     * @param address Run from this addresss
     */
    run_from_address(address: number): boolean
    /**
     * Start the program until it reachs the address address
     * @param address Run to this addresss
     */
    run_to_address(address: number): boolean
    /**
     * Execute one assembler instruction in the program.
     */
    step_in_instruction(): boolean
    /**
     * Execute one assembler instruction in the program, if the instruction
     * is a function call, continues until the function returns.
     */
    step_over_instruction(): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.DebuggerInstruction

    /**
     * Restart the program starting from address address
     * @virtual 
     * @param address Run from this addresss
     */
    vfunc_run_from_address(address: number): boolean
    /**
     * Start the program until it reachs the address address
     * @virtual 
     * @param address Run to this addresss
     */
    vfunc_run_to_address(address: number): boolean
    /**
     * Execute one assembler instruction in the program.
     * @virtual 
     */
    vfunc_step_in_instruction(): boolean
    /**
     * Execute one assembler instruction in the program, if the instruction
     * is a function call, continues until the function returns.
     * @virtual 
     */
    vfunc_step_over_instruction(): boolean

    // Class property signals of IAnjuta-3.0.IAnjuta.DebuggerInstruction

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DebuggerInstruction extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerInstruction

    static name: string
    static $gtype: GObject.GType<DebuggerInstruction>

    // Constructors of IAnjuta-3.0.IAnjuta.DebuggerInstruction

    constructor(config?: DebuggerInstruction_ConstructProps) 
    _init(config?: DebuggerInstruction_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface DebuggerMemory_ConstructProps extends Debugger_ConstructProps, GObject.Object_ConstructProps {
}

interface DebuggerMemory extends Debugger {

    // Class property signals of IAnjuta-3.0.IAnjuta.DebuggerMemory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DebuggerMemory extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerMemory

    static name: string
    static $gtype: GObject.GType<DebuggerMemory>

    // Constructors of IAnjuta-3.0.IAnjuta.DebuggerMemory

    constructor(config?: DebuggerMemory_ConstructProps) 
    _init(config?: DebuggerMemory_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface DebuggerRegister_ConstructProps extends Debugger_ConstructProps, GObject.Object_ConstructProps {
}

interface DebuggerRegister extends Debugger {

    // Owm methods of IAnjuta-3.0.IAnjuta.DebuggerRegister

    /**
     * Change the value of one register. Only the num and value field are used.
     * @param value Modified register with a new value
     */
    write_register(value: DebuggerRegisterData): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.DebuggerRegister

    /**
     * Change the value of one register. Only the num and value field are used.
     * @virtual 
     * @param value Modified register with a new value
     */
    vfunc_write_register(value: DebuggerRegisterData): boolean

    // Class property signals of IAnjuta-3.0.IAnjuta.DebuggerRegister

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DebuggerRegister extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerRegister

    static name: string
    static $gtype: GObject.GType<DebuggerRegister>

    // Constructors of IAnjuta-3.0.IAnjuta.DebuggerRegister

    constructor(config?: DebuggerRegister_ConstructProps) 
    _init(config?: DebuggerRegister_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface DebuggerVariable_ConstructProps extends Debugger_ConstructProps, GObject.Object_ConstructProps {
}

interface DebuggerVariable extends Debugger {

    // Owm methods of IAnjuta-3.0.IAnjuta.DebuggerVariable

    /**
     * Set the value of one variable or child object.
     * @param name Variable name
     * @param value Variable value
     */
    assign(name: string, value: string): boolean
    /**
     * Delete a previously created variable or child object
     * including its own children.
     * @param name Variable name
     */
    destroy(name: string): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.DebuggerVariable

    /**
     * Set the value of one variable or child object.
     * @virtual 
     * @param name Variable name
     * @param value Variable value
     */
    vfunc_assign(name: string, value: string): boolean
    /**
     * Delete a previously created variable or child object
     * including its own children.
     * @virtual 
     * @param name Variable name
     */
    vfunc_destroy(name: string): boolean

    // Class property signals of IAnjuta-3.0.IAnjuta.DebuggerVariable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DebuggerVariable extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerVariable

    static name: string
    static $gtype: GObject.GType<DebuggerVariable>

    // Constructors of IAnjuta-3.0.IAnjuta.DebuggerVariable

    constructor(config?: DebuggerVariable_ConstructProps) 
    _init(config?: DebuggerVariable_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Document_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `update-ui`
 */
interface Document_UpdateUiSignalCallback {
    ($obj: Document): void
}

interface Document {

    // Owm methods of IAnjuta-3.0.IAnjuta.Document

    /**
     * Begins the mark of undoable action. Calls to this are stacked and
     * each must be ended with ianjuta_document_end_action().
     */
    begin_undo_action(): void
    /**
     * Can the editor redo the last operation?
     */
    can_redo(): boolean
    /**
     * Can the editor undo the last operation?
     */
    can_undo(): boolean
    /**
     * Clear selection
     */
    clear(): void
    /**
     * Copy selection to clipboard.
     */
    copy(): void
    /**
     * Cut selection to clipboard.
     */
    cut(): void
    /**
     * Ends the mark of undoable action.
     */
    end_undo_action(): void
    /**
     * Allows obtaining of the filename the editor was loaded from.
     */
    get_filename(): string
    /**
     * Grabs the focus.
     */
    grab_focus(): void
    /**
     * Paste clipboard at current position.
     */
    paste(): void
    /**
     * Redo last undo operation
     */
    redo(): void
    /**
     * Undo last operation
     */
    undo(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Document

    /**
     * Begins the mark of undoable action. Calls to this are stacked and
     * each must be ended with ianjuta_document_end_action().
     * @virtual 
     */
    vfunc_begin_undo_action(): void
    /**
     * Can the editor redo the last operation?
     * @virtual 
     */
    vfunc_can_redo(): boolean
    /**
     * Can the editor undo the last operation?
     * @virtual 
     */
    vfunc_can_undo(): boolean
    /**
     * Clear selection
     * @virtual 
     */
    vfunc_clear(): void
    /**
     * Copy selection to clipboard.
     * @virtual 
     */
    vfunc_copy(): void
    /**
     * Cut selection to clipboard.
     * @virtual 
     */
    vfunc_cut(): void
    /**
     * Ends the mark of undoable action.
     * @virtual 
     */
    vfunc_end_undo_action(): void
    /**
     * Allows obtaining of the filename the editor was loaded from.
     * @virtual 
     */
    vfunc_get_filename(): string
    /**
     * Grabs the focus.
     * @virtual 
     */
    vfunc_grab_focus(): void
    /**
     * Paste clipboard at current position.
     * @virtual 
     */
    vfunc_paste(): void
    /**
     * Redo last undo operation
     * @virtual 
     */
    vfunc_redo(): void
    /**
     * Undo last operation
     * @virtual 
     */
    vfunc_undo(): void
    vfunc_update_ui(): void

    // Own signals of IAnjuta-3.0.IAnjuta.Document

    connect(sigName: "update-ui", callback: Document_UpdateUiSignalCallback): number
    connect_after(sigName: "update-ui", callback: Document_UpdateUiSignalCallback): number
    emit(sigName: "update-ui", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Document

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Document extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Document

    static name: string
    static $gtype: GObject.GType<Document>

    // Constructors of IAnjuta-3.0.IAnjuta.Document

    constructor(config?: Document_ConstructProps) 
    _init(config?: Document_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface DocumentManager_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `document-added`
 */
interface DocumentManager_DocumentAddedSignalCallback {
    ($obj: DocumentManager, doc: Document): void
}

/**
 * Signal callback interface for `document-removed`
 */
interface DocumentManager_DocumentRemovedSignalCallback {
    ($obj: DocumentManager, doc: Document): void
}

interface DocumentManager {

    // Owm methods of IAnjuta-3.0.IAnjuta.DocumentManager

    add_bookmark(file: Gio.File, line: number): void
    /**
     * Creates a new editor buffer of the given name and sets the given
     * content as its initial content.
     * @param name Name of the editor buffer.
     * @param content Initial content of the buffer.
     */
    add_buffer(name: string, content: string): Editor
    /**
     * Adds a document to the document manager. This will open a new
     * Notebook tab and show the document there
     * @param document the document to add
     */
    add_document(document: Document): void
    /**
     * Finds the document that has the file  loaded. Only
     * the editor that matches the file will be searched.
     * @param file The file to find.
     */
    find_document_with_file(file: Gio.File): Document
    /**
     * Gets the current document.
     */
    get_current_document(): Document
    /**
     * Gets a list of widgets for open documents. Each widget is
     * a GTK_WIDGET(IAnjutaDocument*)
     */
    get_doc_widgets(): Gtk.Widget[]
    /**
     * Given the short filename, finds the file of the filename, if the
     * editor that has it loaded is found. If there is no editor that has
     * this file opened, returns NULL.
     * @param filename short filename
     */
    get_file(filename: string): Gio.File
    /**
     * Loads the given file if not loaded yet, set its editor as current editor
     * and moves cursor to the given line in the editor.
     * @param file file to go to.
     * @param lineno the line number in the file to go to.
     */
    goto_file_line(file: Gio.File, lineno: number): Editor
    /**
     * Loads the given file if not loaded yet, set its editor as current editor
     * and moves cursor to the given line in the editor. Optionally also marks
     * the line with line marker if `mark` is given TRUE.
     * @param file file to go to.
     * @param lineno the line number in the file to go to.
     * @param mark TRUE if the line should be marked with a marker.
     */
    goto_file_line_mark(file: Gio.File, lineno: number, mark: boolean): Editor
    /**
     * Closes and removes the given document. If `save_before` is TRUE, also
     * saves the document before closing.
     * @param document Document to close.
     * @param save_before If true, saves the document before closing.
     */
    remove_document(document: Document, save_before: boolean): boolean
    /**
     * Sets the given document as current document.
     * @param document the document to set as current.
     */
    set_current_document(document: Document): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.DocumentManager

    vfunc_add_bookmark(file: Gio.File, line: number): void
    /**
     * Creates a new editor buffer of the given name and sets the given
     * content as its initial content.
     * @virtual 
     * @param name Name of the editor buffer.
     * @param content Initial content of the buffer.
     */
    vfunc_add_buffer(name: string, content: string): Editor
    /**
     * Adds a document to the document manager. This will open a new
     * Notebook tab and show the document there
     * @virtual 
     * @param document the document to add
     */
    vfunc_add_document(document: Document): void
    vfunc_document_added(doc: Document): void
    vfunc_document_removed(doc: Document): void
    /**
     * Finds the document that has the file  loaded. Only
     * the editor that matches the file will be searched.
     * @virtual 
     * @param file The file to find.
     */
    vfunc_find_document_with_file(file: Gio.File): Document
    /**
     * Gets the current document.
     * @virtual 
     */
    vfunc_get_current_document(): Document
    /**
     * Gets a list of widgets for open documents. Each widget is
     * a GTK_WIDGET(IAnjutaDocument*)
     * @virtual 
     */
    vfunc_get_doc_widgets(): Gtk.Widget[]
    /**
     * Given the short filename, finds the file of the filename, if the
     * editor that has it loaded is found. If there is no editor that has
     * this file opened, returns NULL.
     * @virtual 
     * @param filename short filename
     */
    vfunc_get_file(filename: string): Gio.File
    /**
     * Loads the given file if not loaded yet, set its editor as current editor
     * and moves cursor to the given line in the editor.
     * @virtual 
     * @param file file to go to.
     * @param lineno the line number in the file to go to.
     */
    vfunc_goto_file_line(file: Gio.File, lineno: number): Editor
    /**
     * Loads the given file if not loaded yet, set its editor as current editor
     * and moves cursor to the given line in the editor. Optionally also marks
     * the line with line marker if `mark` is given TRUE.
     * @virtual 
     * @param file file to go to.
     * @param lineno the line number in the file to go to.
     * @param mark TRUE if the line should be marked with a marker.
     */
    vfunc_goto_file_line_mark(file: Gio.File, lineno: number, mark: boolean): Editor
    /**
     * Closes and removes the given document. If `save_before` is TRUE, also
     * saves the document before closing.
     * @virtual 
     * @param document Document to close.
     * @param save_before If true, saves the document before closing.
     */
    vfunc_remove_document(document: Document, save_before: boolean): boolean
    /**
     * Sets the given document as current document.
     * @virtual 
     * @param document the document to set as current.
     */
    vfunc_set_current_document(document: Document): void

    // Own signals of IAnjuta-3.0.IAnjuta.DocumentManager

    connect(sigName: "document-added", callback: DocumentManager_DocumentAddedSignalCallback): number
    connect_after(sigName: "document-added", callback: DocumentManager_DocumentAddedSignalCallback): number
    emit(sigName: "document-added", doc: Document, ...args: any[]): void
    connect(sigName: "document-removed", callback: DocumentManager_DocumentRemovedSignalCallback): number
    connect_after(sigName: "document-removed", callback: DocumentManager_DocumentRemovedSignalCallback): number
    emit(sigName: "document-removed", doc: Document, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.DocumentManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentManager extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.DocumentManager

    static name: string
    static $gtype: GObject.GType<DocumentManager>

    // Constructors of IAnjuta-3.0.IAnjuta.DocumentManager

    constructor(config?: DocumentManager_ConstructProps) 
    _init(config?: DocumentManager_ConstructProps): void
}

interface Editor_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `backspace`
 */
interface Editor_BackspaceSignalCallback {
    ($obj: Editor): void
}

/**
 * Signal callback interface for `changed`
 */
interface Editor_ChangedSignalCallback {
    ($obj: Editor, added: Iterable, length: boolean, lines: number, text: number, obj: string): void
}

/**
 * Signal callback interface for `char-added`
 */
interface Editor_CharAddedSignalCallback {
    ($obj: Editor, ch: Iterable, obj: number): void
}

/**
 * Signal callback interface for `code-changed`
 */
interface Editor_CodeChangedSignalCallback {
    ($obj: Editor, code: Iterable, obj: string): void
}

/**
 * Signal callback interface for `cursor-moved`
 */
interface Editor_CursorMovedSignalCallback {
    ($obj: Editor): void
}

/**
 * Signal callback interface for `glade-callback-add`
 */
interface Editor_GladeCallbackAddSignalCallback {
    ($obj: Editor, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
}

/**
 * Signal callback interface for `glade-member-add`
 */
interface Editor_GladeMemberAddSignalCallback {
    ($obj: Editor, widget_name: string, filename: string, obj: string): void
}

/**
 * Signal callback interface for `line-marks-gutter-clicked`
 */
interface Editor_LineMarksGutterClickedSignalCallback {
    ($obj: Editor, double_click: number): void
}

interface Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.Editor

    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    append(text: string, length: number): void
    erase(position_start: Iterable, position_end: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     */
    erase_all(): void
    get_column(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    get_current_word(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    get_end_position(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    get_indentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    get_length(): number
    /**
     * fixme
     * @param line fixme
     */
    get_line_begin_position(line: number): Iterable
    /**
     * fixme
     * @param line fixme
     */
    get_line_end_position(line: number): Iterable
    get_line_from_position(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    get_lineno(): number
    get_offset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    get_overwrite(): boolean
    /**
     * Get current caret position.
     */
    get_position(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    get_start_position(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    get_tabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     * @param begin Begining iterator
     * @param end End iterator
     */
    get_text(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    get_text_all(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    get_use_spaces(): boolean
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    goto_end(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @param lineno line number where carat will be moved.
     */
    goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @param position Character position where carat will be moved.
     */
    goto_position(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    goto_start(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     * @param position Character position in editor where insert will take place.
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    insert(position: Iterable, text: string, length: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     * @param auto_indent TRUE to enable auto-indent, FALSE to disable
     */
    set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @param indentsize Indentation size in spaces
     */
    set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @param menu Popupmenu
     */
    set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @param tabsize Tabsize in spaces
     */
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Editor

    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
     * @virtual 
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    vfunc_append(text: string, length: number): void
    vfunc_backspace(): void
    vfunc_changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfunc_char_added(position: Iterable, ch: number): void
    vfunc_code_changed(position: Iterable, code: string): void
    vfunc_cursor_moved(): void
    vfunc_erase(position_start: Iterable, position_end: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     * @virtual 
     */
    vfunc_erase_all(): void
    vfunc_get_column(): number
    /**
     * Obtains the word on which carat is currently on.
     * @virtual 
     */
    vfunc_get_current_word(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     * @virtual 
     */
    vfunc_get_end_position(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     * @virtual 
     */
    vfunc_get_indentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     * @virtual 
     */
    vfunc_get_length(): number
    /**
     * fixme
     * @virtual 
     * @param line fixme
     */
    vfunc_get_line_begin_position(line: number): Iterable
    /**
     * fixme
     * @virtual 
     * @param line fixme
     */
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     * @virtual 
     */
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     * @virtual 
     */
    vfunc_get_overwrite(): boolean
    /**
     * Get current caret position.
     * @virtual 
     */
    vfunc_get_position(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     * @virtual 
     */
    vfunc_get_start_position(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     * @virtual 
     */
    vfunc_get_tabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     * @virtual 
     * @param begin Begining iterator
     * @param end End iterator
     */
    vfunc_get_text(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     * @virtual 
     */
    vfunc_get_text_all(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     * @virtual 
     */
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     * @virtual 
     */
    vfunc_goto_end(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @virtual 
     * @param lineno line number where carat will be moved.
     */
    vfunc_goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @virtual 
     * @param position Character position where carat will be moved.
     */
    vfunc_goto_position(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     * @virtual 
     */
    vfunc_goto_start(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     * @virtual 
     * @param position Character position in editor where insert will take place.
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     * @virtual 
     * @param auto_indent TRUE to enable auto-indent, FALSE to disable
     */
    vfunc_set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @virtual 
     * @param indentsize Indentation size in spaces
     */
    vfunc_set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @virtual 
     * @param menu Popupmenu
     */
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @virtual 
     * @param tabsize Tabsize in spaces
     */
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void

    // Own signals of IAnjuta-3.0.IAnjuta.Editor

    connect(sigName: "backspace", callback: Editor_BackspaceSignalCallback): number
    connect_after(sigName: "backspace", callback: Editor_BackspaceSignalCallback): number
    emit(sigName: "backspace", ...args: any[]): void
    connect(sigName: "changed", callback: Editor_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Editor_ChangedSignalCallback): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string, ...args: any[]): void
    connect(sigName: "char-added", callback: Editor_CharAddedSignalCallback): number
    connect_after(sigName: "char-added", callback: Editor_CharAddedSignalCallback): number
    emit(sigName: "char-added", ch: Iterable, obj: number, ...args: any[]): void
    connect(sigName: "code-changed", callback: Editor_CodeChangedSignalCallback): number
    connect_after(sigName: "code-changed", callback: Editor_CodeChangedSignalCallback): number
    emit(sigName: "code-changed", code: Iterable, obj: string, ...args: any[]): void
    connect(sigName: "cursor-moved", callback: Editor_CursorMovedSignalCallback): number
    connect_after(sigName: "cursor-moved", callback: Editor_CursorMovedSignalCallback): number
    emit(sigName: "cursor-moved", ...args: any[]): void
    connect(sigName: "glade-callback-add", callback: Editor_GladeCallbackAddSignalCallback): number
    connect_after(sigName: "glade-callback-add", callback: Editor_GladeCallbackAddSignalCallback): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string, ...args: any[]): void
    connect(sigName: "glade-member-add", callback: Editor_GladeMemberAddSignalCallback): number
    connect_after(sigName: "glade-member-add", callback: Editor_GladeMemberAddSignalCallback): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string, ...args: any[]): void
    connect(sigName: "line-marks-gutter-clicked", callback: Editor_LineMarksGutterClickedSignalCallback): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: Editor_LineMarksGutterClickedSignalCallback): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Editor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Editor extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Editor

    static name: string
    static $gtype: GObject.GType<Editor>

    // Constructors of IAnjuta-3.0.IAnjuta.Editor

    constructor(config?: Editor_ConstructProps) 
    _init(config?: Editor_ConstructProps): void
}

interface EditorAssist_ConstructProps extends Editor_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `cancelled`
 */
interface EditorAssist_CancelledSignalCallback {
    ($obj: EditorAssist): void
}

interface EditorAssist extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorAssist

    add(provider: Provider): void
    invoke(provider: Provider): void
    /**
     * Add the list of proposals for the current population. You can add
     * proposals async as long as the last call sets finished to TRUE. That
     * is usually called by the IAnjutaProvider after it was triggered by
     * ianjuta_provider_populate()
     * @param provider a IAnjutaProvider
     * @param proposals a list of IAnjutaProposals
     * @param pre_word the word before the cursor
     * @param finished whether is was the last call in an async operation
     */
    proposals(provider: Provider, proposals: EditorAssistProposal[], pre_word: string, finished: boolean): void
    remove(provider: Provider): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorAssist

    vfunc_add(provider: Provider): void
    vfunc_cancelled(): void
    vfunc_invoke(provider: Provider): void
    /**
     * Add the list of proposals for the current population. You can add
     * proposals async as long as the last call sets finished to TRUE. That
     * is usually called by the IAnjutaProvider after it was triggered by
     * ianjuta_provider_populate()
     * @virtual 
     * @param provider a IAnjutaProvider
     * @param proposals a list of IAnjutaProposals
     * @param pre_word the word before the cursor
     * @param finished whether is was the last call in an async operation
     */
    vfunc_proposals(provider: Provider, proposals: EditorAssistProposal[], pre_word: string, finished: boolean): void
    vfunc_remove(provider: Provider): void

    // Own signals of IAnjuta-3.0.IAnjuta.EditorAssist

    connect(sigName: "cancelled", callback: EditorAssist_CancelledSignalCallback): number
    connect_after(sigName: "cancelled", callback: EditorAssist_CancelledSignalCallback): number
    emit(sigName: "cancelled", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorAssist

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EditorAssist extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorAssist

    static name: string
    static $gtype: GObject.GType<EditorAssist>

    // Constructors of IAnjuta-3.0.IAnjuta.EditorAssist

    constructor(config?: EditorAssist_ConstructProps) 
    _init(config?: EditorAssist_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface EditorCell_ConstructProps extends GObject.Object_ConstructProps {
}

interface EditorCell {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorCell

    get_attribute(): EditorAttribute
    /**
     * Returns the byte of the unicode character in this cell at given
     * index `char_index`. `char_index` can vary from 0 to length of the
     * unicode string minus 1. Out of range index is not allowed
     * (asserted) and return is undefined.
     * 
     * Since there is dynamic allocation of unicode character string
     * involved in ianjuta_editor_cell_get_character(), this function
     * is mainly useful for fast iteration (such as copying data).
     * @param char_index 
     */
    get_char(char_index: number): number
    /**
     * Returns the unicode character in this cell. A NULL terminated
     * string is returned that is the multibyte unicode character.
     * NULL is returned if the cell does not have any character.
     */
    get_character(): string
    /**
     * Gets the length of the cell in bytes. That is, length of the
     * unicode character.
     */
    get_length(): number

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorCell

    vfunc_get_attribute(): EditorAttribute
    /**
     * Returns the byte of the unicode character in this cell at given
     * index `char_index`. `char_index` can vary from 0 to length of the
     * unicode string minus 1. Out of range index is not allowed
     * (asserted) and return is undefined.
     * 
     * Since there is dynamic allocation of unicode character string
     * involved in ianjuta_editor_cell_get_character(), this function
     * is mainly useful for fast iteration (such as copying data).
     * @virtual 
     * @param char_index 
     */
    vfunc_get_char(char_index: number): number
    /**
     * Returns the unicode character in this cell. A NULL terminated
     * string is returned that is the multibyte unicode character.
     * NULL is returned if the cell does not have any character.
     * @virtual 
     */
    vfunc_get_character(): string
    /**
     * Gets the length of the cell in bytes. That is, length of the
     * unicode character.
     * @virtual 
     */
    vfunc_get_length(): number

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorCell

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EditorCell extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorCell

    static name: string
    static $gtype: GObject.GType<EditorCell>

    // Constructors of IAnjuta-3.0.IAnjuta.EditorCell

    constructor(config?: EditorCell_ConstructProps) 
    _init(config?: EditorCell_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface EditorCellStyle_ConstructProps extends EditorCell_ConstructProps, GObject.Object_ConstructProps {
}

interface EditorCellStyle extends EditorCell {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorCellStyle

    get_background_color(): string
    get_color(): string
    get_font_description(): string

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorCellStyle

    vfunc_get_background_color(): string
    vfunc_get_color(): string
    vfunc_get_font_description(): string

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorCellStyle

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EditorCellStyle extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorCellStyle

    static name: string
    static $gtype: GObject.GType<EditorCellStyle>

    // Constructors of IAnjuta-3.0.IAnjuta.EditorCellStyle

    constructor(config?: EditorCellStyle_ConstructProps) 
    _init(config?: EditorCellStyle_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface EditorComment_ConstructProps extends Editor_ConstructProps, GObject.Object_ConstructProps {
}

interface EditorComment extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorComment

    /**
     * Comment/Uncomment out selected block
     */
    block(): void
    /**
     * Comment/Uncomment out selected block
     */
    box(): void
    /**
     * Comment/Uncomment out selected block
     */
    stream(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorComment

    /**
     * Comment/Uncomment out selected block
     * @virtual 
     */
    vfunc_block(): void
    /**
     * Comment/Uncomment out selected block
     * @virtual 
     */
    vfunc_box(): void
    /**
     * Comment/Uncomment out selected block
     * @virtual 
     */
    vfunc_stream(): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorComment

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EditorComment extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorComment

    static name: string
    static $gtype: GObject.GType<EditorComment>

    // Constructors of IAnjuta-3.0.IAnjuta.EditorComment

    constructor(config?: EditorComment_ConstructProps) 
    _init(config?: EditorComment_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface EditorConvert_ConstructProps extends Editor_ConstructProps, GObject.Object_ConstructProps {
}

interface EditorConvert extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorConvert

    /**
     * change characters from start position to end position to lowercase
     * @param start_position Start position.
     * @param end_position End position.
     */
    to_lower(start_position: Iterable, end_position: Iterable): void
    /**
     * change characters from start position to end position to uppercase.
     * @param start_position Start position.
     * @param end_position End position.
     */
    to_upper(start_position: Iterable, end_position: Iterable): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorConvert

    /**
     * change characters from start position to end position to lowercase
     * @virtual 
     * @param start_position Start position.
     * @param end_position End position.
     */
    vfunc_to_lower(start_position: Iterable, end_position: Iterable): void
    /**
     * change characters from start position to end position to uppercase.
     * @virtual 
     * @param start_position Start position.
     * @param end_position End position.
     */
    vfunc_to_upper(start_position: Iterable, end_position: Iterable): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorConvert

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EditorConvert extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorConvert

    static name: string
    static $gtype: GObject.GType<EditorConvert>

    // Constructors of IAnjuta-3.0.IAnjuta.EditorConvert

    constructor(config?: EditorConvert_ConstructProps) 
    _init(config?: EditorConvert_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface EditorFactory_ConstructProps extends GObject.Object_ConstructProps {
}

interface EditorFactory {

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EditorFactory extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorFactory

    static name: string
    static $gtype: GObject.GType<EditorFactory>

    // Constructors of IAnjuta-3.0.IAnjuta.EditorFactory

    constructor(config?: EditorFactory_ConstructProps) 
    _init(config?: EditorFactory_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface EditorFolds_ConstructProps extends Editor_ConstructProps, GObject.Object_ConstructProps {
}

interface EditorFolds extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorFolds

    close_all(): void
    open_all(): void
    toggle_current(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorFolds

    vfunc_close_all(): void
    vfunc_open_all(): void
    vfunc_toggle_current(): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorFolds

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EditorFolds extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorFolds

    static name: string
    static $gtype: GObject.GType<EditorFolds>

    // Constructors of IAnjuta-3.0.IAnjuta.EditorFolds

    constructor(config?: EditorFolds_ConstructProps) 
    _init(config?: EditorFolds_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface EditorGladeSignal_ConstructProps extends Editor_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `drop`
 */
interface EditorGladeSignal_DropSignalCallback {
    ($obj: EditorGladeSignal, iter: Iterable, signal_data: string): void
}

/**
 * Signal callback interface for `drop-possible`
 */
interface EditorGladeSignal_DropPossibleSignalCallback {
    ($obj: EditorGladeSignal, iter: Iterable): boolean
}

interface EditorGladeSignal extends Editor {

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorGladeSignal

    vfunc_drop(iterator: Iterable, signal_data: string): void
    vfunc_drop_possible(iterator: Iterable): boolean

    // Own signals of IAnjuta-3.0.IAnjuta.EditorGladeSignal

    connect(sigName: "drop", callback: EditorGladeSignal_DropSignalCallback): number
    connect_after(sigName: "drop", callback: EditorGladeSignal_DropSignalCallback): number
    emit(sigName: "drop", iter: Iterable, signal_data: string, ...args: any[]): void
    connect(sigName: "drop-possible", callback: EditorGladeSignal_DropPossibleSignalCallback): number
    connect_after(sigName: "drop-possible", callback: EditorGladeSignal_DropPossibleSignalCallback): number
    emit(sigName: "drop-possible", iter: Iterable, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorGladeSignal

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EditorGladeSignal extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorGladeSignal

    static name: string
    static $gtype: GObject.GType<EditorGladeSignal>

    // Constructors of IAnjuta-3.0.IAnjuta.EditorGladeSignal

    constructor(config?: EditorGladeSignal_ConstructProps) 
    _init(config?: EditorGladeSignal_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface EditorGoto_ConstructProps extends Editor_ConstructProps, GObject.Object_ConstructProps {
}

interface EditorGoto extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorGoto

    /**
     * Moves cursor to the end of the current block
     */
    end_block(): void
    /**
     * Moves cursor to matching brace
     */
    matching_brace(): void
    /**
     * Moves cursor to the start of the current block
     */
    start_block(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorGoto

    /**
     * Moves cursor to the end of the current block
     * @virtual 
     */
    vfunc_end_block(): void
    /**
     * Moves cursor to matching brace
     * @virtual 
     */
    vfunc_matching_brace(): void
    /**
     * Moves cursor to the start of the current block
     * @virtual 
     */
    vfunc_start_block(): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorGoto

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EditorGoto extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorGoto

    static name: string
    static $gtype: GObject.GType<EditorGoto>

    // Constructors of IAnjuta-3.0.IAnjuta.EditorGoto

    constructor(config?: EditorGoto_ConstructProps) 
    _init(config?: EditorGoto_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface EditorHover_ConstructProps extends Editor_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `hover-leave`
 */
interface EditorHover_HoverLeaveSignalCallback {
    ($obj: EditorHover, position: Iterable): void
}

/**
 * Signal callback interface for `hover-over`
 */
interface EditorHover_HoverOverSignalCallback {
    ($obj: EditorHover, position: Iterable): void
}

interface EditorHover extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorHover

    /**
     * Show `info` as tooltip
     * @param position 
     * @param info String to display
     */
    display(position: Iterable, info: string): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorHover

    /**
     * Show `info` as tooltip
     * @virtual 
     * @param position 
     * @param info String to display
     */
    vfunc_display(position: Iterable, info: string): void
    vfunc_hover_leave(position: Iterable): void
    vfunc_hover_over(position: Iterable): void

    // Own signals of IAnjuta-3.0.IAnjuta.EditorHover

    connect(sigName: "hover-leave", callback: EditorHover_HoverLeaveSignalCallback): number
    connect_after(sigName: "hover-leave", callback: EditorHover_HoverLeaveSignalCallback): number
    emit(sigName: "hover-leave", position: Iterable, ...args: any[]): void
    connect(sigName: "hover-over", callback: EditorHover_HoverOverSignalCallback): number
    connect_after(sigName: "hover-over", callback: EditorHover_HoverOverSignalCallback): number
    emit(sigName: "hover-over", position: Iterable, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorHover

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EditorHover extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorHover

    static name: string
    static $gtype: GObject.GType<EditorHover>

    // Constructors of IAnjuta-3.0.IAnjuta.EditorHover

    constructor(config?: EditorHover_ConstructProps) 
    _init(config?: EditorHover_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface EditorLanguage_ConstructProps extends Editor_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `language-changed`
 */
interface EditorLanguage_LanguageChangedSignalCallback {
    ($obj: EditorLanguage, language: string): void
}

interface EditorLanguage extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorLanguage

    /**
     * Return the name of the currently used language
     */
    get_language(): string
    get_language_name(language: string): string
    /**
     * Return a list of languages supported by the editor
     * Note: These list contains the names in the form
     * the editor implementation knows them
     */
    get_supported_languages(): string[]
    /**
     * Force the editor to use a given language
     * @param language Language
     */
    set_language(language: string): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorLanguage

    /**
     * Return the name of the currently used language
     * @virtual 
     */
    vfunc_get_language(): string
    vfunc_get_language_name(language: string): string
    /**
     * Return a list of languages supported by the editor
     * Note: These list contains the names in the form
     * the editor implementation knows them
     * @virtual 
     */
    vfunc_get_supported_languages(): string[]
    vfunc_language_changed(language: string): void
    /**
     * Force the editor to use a given language
     * @virtual 
     * @param language Language
     */
    vfunc_set_language(language: string): void

    // Own signals of IAnjuta-3.0.IAnjuta.EditorLanguage

    connect(sigName: "language-changed", callback: EditorLanguage_LanguageChangedSignalCallback): number
    connect_after(sigName: "language-changed", callback: EditorLanguage_LanguageChangedSignalCallback): number
    emit(sigName: "language-changed", language: string, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorLanguage

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EditorLanguage extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorLanguage

    static name: string
    static $gtype: GObject.GType<EditorLanguage>

    // Constructors of IAnjuta-3.0.IAnjuta.EditorLanguage

    constructor(config?: EditorLanguage_ConstructProps) 
    _init(config?: EditorLanguage_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface EditorLineMode_ConstructProps extends Editor_ConstructProps, GObject.Object_ConstructProps {
}

interface EditorLineMode extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorLineMode

    /**
     * Set the line ending mode to the given `mode` and convert all line end
     * characters in the buffer to `mode` line end characters.
     * @param mode Line mode to convert.
     */
    convert(mode: EditorLineModeType): void
    /**
     * Convert EOL characters to majority of line mode. This is helpful
     * when the buffer contains mixed line modes and we want to fix it.
     */
    fix(): void
    /**
     * Get current line ending mode. It is auto-detected from the
     * buffer contents.
     */
    get(): EditorLineModeType
    /**
     * Set the line ending mode to the given `mode`. Existing line end
     * characters in the buffer are not touched. Only the newly added
     * texts will have `mode` line end characters.
     * @param mode Line mode to set.
     */
    set(mode: EditorLineModeType): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorLineMode

    /**
     * Set the line ending mode to the given `mode` and convert all line end
     * characters in the buffer to `mode` line end characters.
     * @virtual 
     * @param mode Line mode to convert.
     */
    vfunc_convert(mode: EditorLineModeType): void
    /**
     * Convert EOL characters to majority of line mode. This is helpful
     * when the buffer contains mixed line modes and we want to fix it.
     * @virtual 
     */
    vfunc_fix(): void
    /**
     * Get current line ending mode. It is auto-detected from the
     * buffer contents.
     * @virtual 
     */
    vfunc_get(): EditorLineModeType
    /**
     * Set the line ending mode to the given `mode`. Existing line end
     * characters in the buffer are not touched. Only the newly added
     * texts will have `mode` line end characters.
     * @virtual 
     * @param mode Line mode to set.
     */
    vfunc_set(mode: EditorLineModeType): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorLineMode

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EditorLineMode extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorLineMode

    static name: string
    static $gtype: GObject.GType<EditorLineMode>

    // Constructors of IAnjuta-3.0.IAnjuta.EditorLineMode

    constructor(config?: EditorLineMode_ConstructProps) 
    _init(config?: EditorLineMode_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface EditorSearch_ConstructProps extends Editor_ConstructProps, GObject.Object_ConstructProps {
}

interface EditorSearch extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorSearch

    /**
     * Search backward from end to start
     * @param search String to search for
     * @param case_sensitive 
     * @param start Where to search from
     * @param end Where to stop searching
     */
    backward(search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]
    /**
     * Search forward from start to end
     * @param search String to search for
     * @param case_sensitive 
     * @param start Where to search from
     * @param end Where to stop searching
     */
    forward(search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorSearch

    /**
     * Search backward from end to start
     * @virtual 
     * @param search String to search for
     * @param case_sensitive 
     * @param start Where to search from
     * @param end Where to stop searching
     */
    vfunc_backward(search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]
    /**
     * Search forward from start to end
     * @virtual 
     * @param search String to search for
     * @param case_sensitive 
     * @param start Where to search from
     * @param end Where to stop searching
     */
    vfunc_forward(search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorSearch

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EditorSearch extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorSearch

    static name: string
    static $gtype: GObject.GType<EditorSearch>

    // Constructors of IAnjuta-3.0.IAnjuta.EditorSearch

    constructor(config?: EditorSearch_ConstructProps) 
    _init(config?: EditorSearch_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface EditorSelection_ConstructProps extends Editor_ConstructProps, GObject.Object_ConstructProps {
}

interface EditorSelection extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorSelection

    /**
     * Gets curerntly selected text in editor.
     */
    get(): string
    /**
     * Returns TRUE if editor has any text selected. The selection
     * positions can be retrieved with ianjuta_editor_selection_get_start()
     * and ianjuta_editor_selection_get_end().
     */
    has_selection(): boolean
    /**
     * Replaces currently selected text with the `text`. Only `length` amount
     * of characters are used from `text` buffer to replace.
     * @param text Replacement text.
     * @param length Length of the text to used in `text`.
     */
    replace(text: string, length: number): void
    select_all(): void
    /**
     * Selects current block of code. The definition of block of code
     * depends on highlight mode used (programming language). Some
     * highlight mode does not have block concept, in that case this
     * method does not do anything.
     */
    select_block(): void
    /**
     * Select current function block. The definition of function block
     * depends on highlight mode used (programming language). Some
     * highlight mode does not have function concept, in that case this
     * method does not do anything.
     */
    select_function(): void
    /**
     * Select characters between start and end. Start and end don't have to
     * be ordered.
     * @param start Begin of selection
     * @param end End of selection
     * @param scroll Scroll selection onscreen
     */
    set(start: Iterable, end: Iterable, scroll: boolean): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorSelection

    /**
     * Gets curerntly selected text in editor.
     * @virtual 
     */
    vfunc_get(): string
    /**
     * Returns TRUE if editor has any text selected. The selection
     * positions can be retrieved with ianjuta_editor_selection_get_start()
     * and ianjuta_editor_selection_get_end().
     * @virtual 
     */
    vfunc_has_selection(): boolean
    /**
     * Replaces currently selected text with the `text`. Only `length` amount
     * of characters are used from `text` buffer to replace.
     * @virtual 
     * @param text Replacement text.
     * @param length Length of the text to used in `text`.
     */
    vfunc_replace(text: string, length: number): void
    vfunc_select_all(): void
    /**
     * Selects current block of code. The definition of block of code
     * depends on highlight mode used (programming language). Some
     * highlight mode does not have block concept, in that case this
     * method does not do anything.
     * @virtual 
     */
    vfunc_select_block(): void
    /**
     * Select current function block. The definition of function block
     * depends on highlight mode used (programming language). Some
     * highlight mode does not have function concept, in that case this
     * method does not do anything.
     * @virtual 
     */
    vfunc_select_function(): void
    /**
     * Select characters between start and end. Start and end don't have to
     * be ordered.
     * @virtual 
     * @param start Begin of selection
     * @param end End of selection
     * @param scroll Scroll selection onscreen
     */
    vfunc_set(start: Iterable, end: Iterable, scroll: boolean): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorSelection

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EditorSelection extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorSelection

    static name: string
    static $gtype: GObject.GType<EditorSelection>

    // Constructors of IAnjuta-3.0.IAnjuta.EditorSelection

    constructor(config?: EditorSelection_ConstructProps) 
    _init(config?: EditorSelection_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface EditorTip_ConstructProps extends Editor_ConstructProps, GObject.Object_ConstructProps {
}

interface EditorTip extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorTip

    /**
     * Cancels the last shown tooltip
     */
    cancel(): void
    /**
     * Show tips showing more information on current context. No user feedback
     * is required when tips are shown. `position` indicates
     * the position before which is the known context and after which are
     * the suggestions. Usually the editor would use this to
     * align the choices displayed such that the carat is just at this
     * position when the choices are displayed.
     * @param tips list of alternative tips.
     * @param position Tip position.
     */
    show(tips: string[], position: Iterable): void
    visible(): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorTip

    /**
     * Cancels the last shown tooltip
     * @virtual 
     */
    vfunc_cancel(): void
    /**
     * Show tips showing more information on current context. No user feedback
     * is required when tips are shown. `position` indicates
     * the position before which is the known context and after which are
     * the suggestions. Usually the editor would use this to
     * align the choices displayed such that the carat is just at this
     * position when the choices are displayed.
     * @virtual 
     * @param tips list of alternative tips.
     * @param position Tip position.
     */
    vfunc_show(tips: string[], position: Iterable): void
    vfunc_visible(): boolean

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorTip

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EditorTip extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorTip

    static name: string
    static $gtype: GObject.GType<EditorTip>

    // Constructors of IAnjuta-3.0.IAnjuta.EditorTip

    constructor(config?: EditorTip_ConstructProps) 
    _init(config?: EditorTip_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface EditorView_ConstructProps extends Editor_ConstructProps, GObject.Object_ConstructProps {
}

interface EditorView extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorView

    /**
     * Creates a new view for the editor. The newly created view gets
     * the user focus and scrolls to the same location as last view.
     */
    create(): void
    /**
     * Total number of views currently present. It will never be less
     * than 1. Invalid return values are considered error condition.
     */
    get_count(): number
    /**
     * Removes currently focused editor view. It does not remove the
     * last view of the editor. That is, if currently there is only
     * one view of the editor, this function does nothing.
     */
    remove_current(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorView

    /**
     * Creates a new view for the editor. The newly created view gets
     * the user focus and scrolls to the same location as last view.
     * @virtual 
     */
    vfunc_create(): void
    /**
     * Total number of views currently present. It will never be less
     * than 1. Invalid return values are considered error condition.
     * @virtual 
     */
    vfunc_get_count(): number
    /**
     * Removes currently focused editor view. It does not remove the
     * last view of the editor. That is, if currently there is only
     * one view of the editor, this function does nothing.
     * @virtual 
     */
    vfunc_remove_current(): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorView

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EditorView extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorView

    static name: string
    static $gtype: GObject.GType<EditorView>

    // Constructors of IAnjuta-3.0.IAnjuta.EditorView

    constructor(config?: EditorView_ConstructProps) 
    _init(config?: EditorView_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface EditorZoom_ConstructProps extends Editor_ConstructProps, GObject.Object_ConstructProps {
}

interface EditorZoom extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorZoom

    /**
     * Zoom in
     */
    in(): void
    /**
     * Zoom out
     */
    out(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorZoom

    /**
     * Zoom in
     * @virtual 
     */
    vfunc_in(): void
    /**
     * Zoom out
     * @virtual 
     */
    vfunc_out(): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorZoom

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EditorZoom extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorZoom

    static name: string
    static $gtype: GObject.GType<EditorZoom>

    // Constructors of IAnjuta-3.0.IAnjuta.EditorZoom

    constructor(config?: EditorZoom_ConstructProps) 
    _init(config?: EditorZoom_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Environment_ConstructProps extends GObject.Object_ConstructProps {
}

interface Environment {

    // Owm methods of IAnjuta-3.0.IAnjuta.Environment

    /**
     * Convert a directory in the environment to a directory outside.
     * It is useful when the environment use chroot. Take care that
     * the input directory string is freed using g_free but and you need to
     * free the output string when not needed.
     * @param dir A directory path in the environment
     */
    get_real_directory(dir: string): string
    /**
     * Override a command to work in another build environment
     * @param dirp a pointer on the working directory
     * @param argvp a pointer on a NULL terminated string array     containing the command name in argv[0] and all    its argument
     * @param envp a pointer on a NULL terminated string array    containing all additional environment variable    used by the command
     */
    override(dirp: string, argvp: string, envp: string): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Environment

    /**
     * Convert a directory in the environment to a directory outside.
     * It is useful when the environment use chroot. Take care that
     * the input directory string is freed using g_free but and you need to
     * free the output string when not needed.
     * @virtual 
     * @param dir A directory path in the environment
     */
    vfunc_get_real_directory(dir: string): string
    /**
     * Override a command to work in another build environment
     * @virtual 
     * @param dirp a pointer on the working directory
     * @param argvp a pointer on a NULL terminated string array     containing the command name in argv[0] and all    its argument
     * @param envp a pointer on a NULL terminated string array    containing all additional environment variable    used by the command
     */
    vfunc_override(dirp: string, argvp: string, envp: string): boolean

    // Class property signals of IAnjuta-3.0.IAnjuta.Environment

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Environment extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Environment

    static name: string
    static $gtype: GObject.GType<Environment>

    // Constructors of IAnjuta-3.0.IAnjuta.Environment

    constructor(config?: Environment_ConstructProps) 
    _init(config?: Environment_ConstructProps): void
}

interface File_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `opened`
 */
interface File_OpenedSignalCallback {
    ($obj: File): void
}

interface File {

    // Owm methods of IAnjuta-3.0.IAnjuta.File

    /**
     * Returns the file that was opened with ianjuta_file_open().
     */
    get_file(): Gio.File
    /**
     * The implementor opens the given file.
     * @param file file to open.
     */
    open(file: Gio.File): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.File

    /**
     * Returns the file that was opened with ianjuta_file_open().
     * @virtual 
     */
    vfunc_get_file(): Gio.File
    /**
     * The implementor opens the given file.
     * @virtual 
     * @param file file to open.
     */
    vfunc_open(file: Gio.File): void
    vfunc_opened(): void

    // Own signals of IAnjuta-3.0.IAnjuta.File

    connect(sigName: "opened", callback: File_OpenedSignalCallback): number
    connect_after(sigName: "opened", callback: File_OpenedSignalCallback): number
    emit(sigName: "opened", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.File

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class File extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.File

    static name: string
    static $gtype: GObject.GType<File>

    // Constructors of IAnjuta-3.0.IAnjuta.File

    constructor(config?: File_ConstructProps) 
    _init(config?: File_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface FileLoader_ConstructProps extends Loader_ConstructProps, GObject.Object_ConstructProps {
}

interface FileLoader extends Loader {

    // Owm methods of IAnjuta-3.0.IAnjuta.FileLoader

    peek_interface(file: Gio.File): string

    // Own virtual methods of IAnjuta-3.0.IAnjuta.FileLoader

    vfunc_peek_interface(file: Gio.File): string

    // Class property signals of IAnjuta-3.0.IAnjuta.FileLoader

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileLoader extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.FileLoader

    static name: string
    static $gtype: GObject.GType<FileLoader>

    // Constructors of IAnjuta-3.0.IAnjuta.FileLoader

    constructor(config?: FileLoader_ConstructProps) 
    _init(config?: FileLoader_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface FileManager_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `section-changed`
 */
interface FileManager_SectionChangedSignalCallback {
    ($obj: FileManager, err: Gio.File): void
}

interface FileManager {

    // Owm methods of IAnjuta-3.0.IAnjuta.FileManager

    /**
     * fixme
     * @param root_uri fixme
     */
    set_root(root_uri: string): void
    /**
     * fixme.
     * @param file File to select
     */
    set_selected(file: Gio.File): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.FileManager

    vfunc_section_changed(file: Gio.File): void
    /**
     * fixme
     * @virtual 
     * @param root_uri fixme
     */
    vfunc_set_root(root_uri: string): void
    /**
     * fixme.
     * @virtual 
     * @param file File to select
     */
    vfunc_set_selected(file: Gio.File): void

    // Own signals of IAnjuta-3.0.IAnjuta.FileManager

    connect(sigName: "section-changed", callback: FileManager_SectionChangedSignalCallback): number
    connect_after(sigName: "section-changed", callback: FileManager_SectionChangedSignalCallback): number
    emit(sigName: "section-changed", err: Gio.File, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.FileManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileManager extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.FileManager

    static name: string
    static $gtype: GObject.GType<FileManager>

    // Constructors of IAnjuta-3.0.IAnjuta.FileManager

    constructor(config?: FileManager_ConstructProps) 
    _init(config?: FileManager_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface FileSavable_ConstructProps extends File_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `saved`
 */
interface FileSavable_SavedSignalCallback {
    ($obj: FileSavable, file: Gio.File): void
}

/**
 * Signal callback interface for `update-save-ui`
 */
interface FileSavable_UpdateSaveUiSignalCallback {
    ($obj: FileSavable): void
}

interface FileSavable extends File {

    // Owm methods of IAnjuta-3.0.IAnjuta.FileSavable

    /**
     * Return is the file is in conflict. It means the file
     * has been modified externally and the user needs to
     * tell which version he wants to use.
     */
    is_conflict(): boolean
    /**
     * Returns the dirty status of the content.
     */
    is_dirty(): boolean
    /**
     * Return is the file is read-only
     */
    is_read_only(): boolean
    /**
     * Saves the content to the original file from which it was loaded.
     * The signal saved is always emitted even if the save fails.
     */
    save(): void
    /**
     * Saves the content to a different File.
     * The signal saved is always emitted even if the save fails.
     * @param file File to save the content.
     */
    save_as(file: Gio.File): void
    /**
     * if `dirty` is TRUE, sets dirty for the content. Save point will be
     * left and the content will be considered not saved. Otherwise,
     * content will considered saved and save-point will be entered.
     * @param dirty Whether the file was edited or not
     */
    set_dirty(dirty: boolean): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.FileSavable

    /**
     * Return is the file is in conflict. It means the file
     * has been modified externally and the user needs to
     * tell which version he wants to use.
     * @virtual 
     */
    vfunc_is_conflict(): boolean
    /**
     * Returns the dirty status of the content.
     * @virtual 
     */
    vfunc_is_dirty(): boolean
    /**
     * Return is the file is read-only
     * @virtual 
     */
    vfunc_is_read_only(): boolean
    /**
     * Saves the content to the original file from which it was loaded.
     * The signal saved is always emitted even if the save fails.
     * @virtual 
     */
    vfunc_save(): void
    /**
     * Saves the content to a different File.
     * The signal saved is always emitted even if the save fails.
     * @virtual 
     * @param file File to save the content.
     */
    vfunc_save_as(file: Gio.File): void
    vfunc_saved(file: Gio.File): void
    /**
     * if `dirty` is TRUE, sets dirty for the content. Save point will be
     * left and the content will be considered not saved. Otherwise,
     * content will considered saved and save-point will be entered.
     * @virtual 
     * @param dirty Whether the file was edited or not
     */
    vfunc_set_dirty(dirty: boolean): void
    vfunc_update_save_ui(): void

    // Own signals of IAnjuta-3.0.IAnjuta.FileSavable

    connect(sigName: "saved", callback: FileSavable_SavedSignalCallback): number
    connect_after(sigName: "saved", callback: FileSavable_SavedSignalCallback): number
    emit(sigName: "saved", file: Gio.File, ...args: any[]): void
    connect(sigName: "update-save-ui", callback: FileSavable_UpdateSaveUiSignalCallback): number
    connect_after(sigName: "update-save-ui", callback: FileSavable_UpdateSaveUiSignalCallback): number
    emit(sigName: "update-save-ui", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.FileSavable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileSavable extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.FileSavable

    static name: string
    static $gtype: GObject.GType<FileSavable>

    // Constructors of IAnjuta-3.0.IAnjuta.FileSavable

    constructor(config?: FileSavable_ConstructProps) 
    _init(config?: FileSavable_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Glade_ConstructProps extends GObject.Object_ConstructProps {
}

interface Glade {

    // Owm methods of IAnjuta-3.0.IAnjuta.Glade

    add_association(master: string, slave: string): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Glade

    vfunc_add_association(master: string, slave: string): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Glade

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Glade extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Glade

    static name: string
    static $gtype: GObject.GType<Glade>

    // Constructors of IAnjuta-3.0.IAnjuta.Glade

    constructor(config?: Glade_ConstructProps) 
    _init(config?: Glade_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Help_ConstructProps extends GObject.Object_ConstructProps {
}

interface Help {

    // Owm methods of IAnjuta-3.0.IAnjuta.Help

    /**
     * Search for string `query` in the help and display the result
     * @param query string to search in the help
     */
    search(query: string): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Help

    /**
     * Search for string `query` in the help and display the result
     * @virtual 
     * @param query string to search in the help
     */
    vfunc_search(query: string): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Help

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Help extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Help

    static name: string
    static $gtype: GObject.GType<Help>

    // Constructors of IAnjuta-3.0.IAnjuta.Help

    constructor(config?: Help_ConstructProps) 
    _init(config?: Help_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Indenter_ConstructProps extends GObject.Object_ConstructProps {
}

interface Indenter {

    // Owm methods of IAnjuta-3.0.IAnjuta.Indenter

    /**
     * Indent the area between `start` and `end` according to the indentation rules
     * of the programming language. Usually implemented by language support plugins.
     * Only one indenter can be loaded at a time.
     * Note: Indenters always affect full lines, so start and end will be moved
     * according to the next line start/end.
     * @param start Start of the area to indent
     * @param end End of the area to indent
     */
    indent(start: Iterable, end: Iterable): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Indenter

    /**
     * Indent the area between `start` and `end` according to the indentation rules
     * of the programming language. Usually implemented by language support plugins.
     * Only one indenter can be loaded at a time.
     * Note: Indenters always affect full lines, so start and end will be moved
     * according to the next line start/end.
     * @virtual 
     * @param start Start of the area to indent
     * @param end End of the area to indent
     */
    vfunc_indent(start: Iterable, end: Iterable): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Indenter

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Indenter extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Indenter

    static name: string
    static $gtype: GObject.GType<Indenter>

    // Constructors of IAnjuta-3.0.IAnjuta.Indenter

    constructor(config?: Indenter_ConstructProps) 
    _init(config?: Indenter_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Indicable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Indicable {

    // Owm methods of IAnjuta-3.0.IAnjuta.Indicable

    /**
     * Clear all indicators
     */
    clear(): void
    /**
     * Set an indicator
     * @param begin_location Location where the indication should start
     * @param end_location Location where the indication should end
     * @param indicator the indicator to use
     */
    set(begin_location: Iterable, end_location: Iterable, indicator: IndicableIndicator): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Indicable

    /**
     * Clear all indicators
     * @virtual 
     */
    vfunc_clear(): void
    /**
     * Set an indicator
     * @virtual 
     * @param begin_location Location where the indication should start
     * @param end_location Location where the indication should end
     * @param indicator the indicator to use
     */
    vfunc_set(begin_location: Iterable, end_location: Iterable, indicator: IndicableIndicator): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Indicable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Indicable extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Indicable

    static name: string
    static $gtype: GObject.GType<Indicable>

    // Constructors of IAnjuta-3.0.IAnjuta.Indicable

    constructor(config?: Indicable_ConstructProps) 
    _init(config?: Indicable_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Iterable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Iterable {

    // Owm methods of IAnjuta-3.0.IAnjuta.Iterable

    /**
     * Assigns the iter position from `src_iter`.
     * @param src_iter Source iter from which to copy the assignment.
     */
    assign(src_iter: Iterable): void
    /**
     * Clones the iterable. The returned iterable object must be unreffed
     * when done.
     */
    clone(): Iterable
    /**
     * Compares the position of `iter2` with this `obj`. Returns -1
     * value if this `obj` is smaller than `iter2`. Returns +1 value
     * if this `obj` is larger than `iter2`. And returns 0 if both are equal.
     * If you want difference of the iter positions, use
     * #ianjuta_iterable_diff(). This method is meant for fast comparision.
     * @param iter2 Second iter to compare.
     */
    compare(iter2: Iterable): number
    /**
     * Compares the position of `iter2` with this `obj` and returns difference
     * in position of the two (`obj` - `iter2`).
     * @param iter2 Second iter to differenciate.
     */
    diff(iter2: Iterable): number
    /**
     * Set iter to first element position. Returns FALSE if
     * there is no element in the iterable (hence does not have first).
     * The iter points to the first valid item.
     */
    first(): boolean
    /**
     * Length of the iterable (number of elements indexable by it).
     */
    get_length(): number
    /**
     * Index of the current iter in the iterable. It will be
     * from 0 to length - 1 (ianjuta_iter_get_length()) if iter is pointed
     * at valid element. It will return -1 if iter is pointed at end-iter.
     */
    get_position(): number
    /**
     * Set iter position to end-iter (one past last element) position.
     * Returns FALSE if there is no element in the iterable (already
     * at end-iter).
     */
    last(): boolean
    /**
     * Set the iter position to next element position. Iter can go until one
     * item past the last item and lands in end-iter. end-iter does not point
     * to any valid item and signifies end of the list. Returns FALSE if iter
     * was already at end-iter (iter can not go past it) and remains pointed
     * to the end-iter.
     */
    next(): boolean
    /**
     * Set the iter position to previous element position. Returns FALSE if
     * there is no previous element and the iter remains pointed to the first
     * element.
     */
    previous(): boolean
    /**
     * Sets the current position of the iter to `position`. The given `position`
     * must be from 0 to length - 1 (#ianjuta_iter_get_length()) to point to
     * a valid element. Passing `position` < 0 will set it to end-iter. It
     * returns TRUE for the above cases. FLASE will be returned, if
     * out-of-range `position` is passed (`position` > length - 1) and iter is
     * set to end-iter.
     * @param position New position for the iter.
     */
    set_position(position: number): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Iterable

    /**
     * Assigns the iter position from `src_iter`.
     * @virtual 
     * @param src_iter Source iter from which to copy the assignment.
     */
    vfunc_assign(src_iter: Iterable): void
    /**
     * Clones the iterable. The returned iterable object must be unreffed
     * when done.
     * @virtual 
     */
    vfunc_clone(): Iterable
    /**
     * Compares the position of `iter2` with this `obj`. Returns -1
     * value if this `obj` is smaller than `iter2`. Returns +1 value
     * if this `obj` is larger than `iter2`. And returns 0 if both are equal.
     * If you want difference of the iter positions, use
     * #ianjuta_iterable_diff(). This method is meant for fast comparision.
     * @virtual 
     * @param iter2 Second iter to compare.
     */
    vfunc_compare(iter2: Iterable): number
    /**
     * Compares the position of `iter2` with this `obj` and returns difference
     * in position of the two (`obj` - `iter2`).
     * @virtual 
     * @param iter2 Second iter to differenciate.
     */
    vfunc_diff(iter2: Iterable): number
    /**
     * Set iter to first element position. Returns FALSE if
     * there is no element in the iterable (hence does not have first).
     * The iter points to the first valid item.
     * @virtual 
     */
    vfunc_first(): boolean
    /**
     * Length of the iterable (number of elements indexable by it).
     * @virtual 
     */
    vfunc_get_length(): number
    /**
     * Index of the current iter in the iterable. It will be
     * from 0 to length - 1 (ianjuta_iter_get_length()) if iter is pointed
     * at valid element. It will return -1 if iter is pointed at end-iter.
     * @virtual 
     */
    vfunc_get_position(): number
    /**
     * Set iter position to end-iter (one past last element) position.
     * Returns FALSE if there is no element in the iterable (already
     * at end-iter).
     * @virtual 
     */
    vfunc_last(): boolean
    /**
     * Set the iter position to next element position. Iter can go until one
     * item past the last item and lands in end-iter. end-iter does not point
     * to any valid item and signifies end of the list. Returns FALSE if iter
     * was already at end-iter (iter can not go past it) and remains pointed
     * to the end-iter.
     * @virtual 
     */
    vfunc_next(): boolean
    /**
     * Set the iter position to previous element position. Returns FALSE if
     * there is no previous element and the iter remains pointed to the first
     * element.
     * @virtual 
     */
    vfunc_previous(): boolean
    /**
     * Sets the current position of the iter to `position`. The given `position`
     * must be from 0 to length - 1 (#ianjuta_iter_get_length()) to point to
     * a valid element. Passing `position` < 0 will set it to end-iter. It
     * returns TRUE for the above cases. FLASE will be returned, if
     * out-of-range `position` is passed (`position` > length - 1) and iter is
     * set to end-iter.
     * @virtual 
     * @param position New position for the iter.
     */
    vfunc_set_position(position: number): boolean

    // Class property signals of IAnjuta-3.0.IAnjuta.Iterable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Iterable extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Iterable

    static name: string
    static $gtype: GObject.GType<Iterable>

    // Constructors of IAnjuta-3.0.IAnjuta.Iterable

    constructor(config?: Iterable_ConstructProps) 
    _init(config?: Iterable_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface IterableTree_ConstructProps extends Iterable_ConstructProps, GObject.Object_ConstructProps {
}

interface IterableTree extends Iterable {

    // Owm methods of IAnjuta-3.0.IAnjuta.IterableTree

    /**
     * Iter position set to first child of current iter. If there is no
     * children, return NULL (iter position is not changed).
     */
    children(): boolean
    /**
     * Returns true if current iter has children
     */
    has_children(): boolean
    /**
     * Set iter position to parent of curernt iter. If there is no parent,
     * returns FALSE (current iter position is not changed)
     */
    parent(): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.IterableTree

    /**
     * Iter position set to first child of current iter. If there is no
     * children, return NULL (iter position is not changed).
     * @virtual 
     */
    vfunc_children(): boolean
    /**
     * Returns true if current iter has children
     * @virtual 
     */
    vfunc_has_children(): boolean
    /**
     * Set iter position to parent of curernt iter. If there is no parent,
     * returns FALSE (current iter position is not changed)
     * @virtual 
     */
    vfunc_parent(): boolean

    // Class property signals of IAnjuta-3.0.IAnjuta.IterableTree

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IterableTree extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.IterableTree

    static name: string
    static $gtype: GObject.GType<IterableTree>

    // Constructors of IAnjuta-3.0.IAnjuta.IterableTree

    constructor(config?: IterableTree_ConstructProps) 
    _init(config?: IterableTree_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Language_ConstructProps extends GObject.Object_ConstructProps {
}

interface Language {

    // Owm methods of IAnjuta-3.0.IAnjuta.Language

    /**
     * Conviniece method to get the id directly from the editor
     * @param editor An object implementing IAnjutaEditorLanguage
     */
    get_from_editor(editor: EditorLanguage): LanguageId
    get_from_mime_type(mime_type: string): LanguageId
    get_from_string(string: string): LanguageId
    get_languages(): number[]
    get_make_target(id: LanguageId): string
    get_name(id: LanguageId): string
    /**
     * Conviniece method to get the name directly from the editor
     * @param editor An object implementing IAnjutaEditorLanguage
     */
    get_name_from_editor(editor: EditorLanguage): string

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Language

    /**
     * Conviniece method to get the id directly from the editor
     * @virtual 
     * @param editor An object implementing IAnjutaEditorLanguage
     */
    vfunc_get_from_editor(editor: EditorLanguage): LanguageId
    vfunc_get_from_mime_type(mime_type: string): LanguageId
    vfunc_get_from_string(string: string): LanguageId
    vfunc_get_languages(): number[]
    vfunc_get_make_target(id: LanguageId): string
    vfunc_get_name(id: LanguageId): string
    /**
     * Conviniece method to get the name directly from the editor
     * @virtual 
     * @param editor An object implementing IAnjutaEditorLanguage
     */
    vfunc_get_name_from_editor(editor: EditorLanguage): string

    // Class property signals of IAnjuta-3.0.IAnjuta.Language

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Language extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Language

    static name: string
    static $gtype: GObject.GType<Language>

    // Constructors of IAnjuta-3.0.IAnjuta.Language

    constructor(config?: Language_ConstructProps) 
    _init(config?: Language_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface LanguageProvider_ConstructProps extends Provider_ConstructProps, GObject.Object_ConstructProps {
}

interface LanguageProvider extends Provider {

    // Owm methods of IAnjuta-3.0.IAnjuta.LanguageProvider

    /**
     * Searches for a calltip in the cache
     * @param call_context name of the method to show a calltip
     */
    get_calltip_cache(call_context: string): string[]
    /**
     * Searches for a calltip context
     * @param iter current cursor position
     */
    get_calltip_context(iter: Iterable): string
    /**
     * Creates a new calltip
     * @param call_context name of the method to create a new calltip
     * @param iter current cursor position
     */
    new_calltip(call_context: string, iter: Iterable): void
    /**
     * Show completion for the context at position `iter`. The provider should
     * call ianjuta_editor_assist_proposals here to add proposals to the list.
     * 
     * Note that this is called after every character typed and the list of proposals
     * has to be completely renewed.
     * @param iter the text iter where the provider should be populated
     */
    populate_completions(iter: Iterable): Iterable | null

    // Own virtual methods of IAnjuta-3.0.IAnjuta.LanguageProvider

    /**
     * Searches for a calltip in the cache
     * @virtual 
     * @param call_context name of the method to show a calltip
     */
    vfunc_get_calltip_cache(call_context: string): string[]
    /**
     * Searches for a calltip context
     * @virtual 
     * @param iter current cursor position
     */
    vfunc_get_calltip_context(iter: Iterable): string
    /**
     * Creates a new calltip
     * @virtual 
     * @param call_context name of the method to create a new calltip
     * @param iter current cursor position
     */
    vfunc_new_calltip(call_context: string, iter: Iterable): void
    /**
     * Show completion for the context at position `iter`. The provider should
     * call ianjuta_editor_assist_proposals here to add proposals to the list.
     * 
     * Note that this is called after every character typed and the list of proposals
     * has to be completely renewed.
     * @virtual 
     * @param iter the text iter where the provider should be populated
     */
    vfunc_populate_completions(iter: Iterable): Iterable | null

    // Class property signals of IAnjuta-3.0.IAnjuta.LanguageProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LanguageProvider extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.LanguageProvider

    static name: string
    static $gtype: GObject.GType<LanguageProvider>

    // Constructors of IAnjuta-3.0.IAnjuta.LanguageProvider

    constructor(config?: LanguageProvider_ConstructProps) 
    _init(config?: LanguageProvider_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Loader_ConstructProps extends GObject.Object_ConstructProps {
}

interface Loader {

    // Class property signals of IAnjuta-3.0.IAnjuta.Loader

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Loader extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Loader

    static name: string
    static $gtype: GObject.GType<Loader>

    // Constructors of IAnjuta-3.0.IAnjuta.Loader

    constructor(config?: Loader_ConstructProps) 
    _init(config?: Loader_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Markable_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `marker-clicked`
 */
interface Markable_MarkerClickedSignalCallback {
    ($obj: Markable, double_click: boolean, location: number): void
}

interface Markable {

    // Owm methods of IAnjuta-3.0.IAnjuta.Markable

    /**
     * Delete the `marker` from all locations.
     * @param marker Marker to delete.
     */
    delete_all_markers(marker: MarkableMarker): void
    /**
     * Check if the `marker` is set at the given `location`.
     * @param location Location to check.
     * @param marker Marker to check.
     */
    is_marker_set(location: number, marker: MarkableMarker): boolean
    /**
     * Location where a marker is set could have moved by some operation in
     * the implementation. To retrieve the correct location where the marker
     * has moved, pass the handle retured by ianjuta_markable_mark() to this
     * method.
     * @param handle Handle of location.
     */
    location_from_handle(handle: number): number
    /**
     * Marks the specified location with the given marker type. Location is
     * implementation depenedent. For example, for an editor location means
     * lines where markers are set.
     * @param location Location at which the marker to set.
     * @param marker Type of marker to be used
     * @param tooltip optional tooltip displayed with the marker
     */
    mark(location: number, marker: MarkableMarker, tooltip: string | null): number
    /**
     * Clears the `marker` at given `location`.
     * @param location Location where the marker is set.
     * @param marker The marker to unset.
     */
    unmark(location: number, marker: MarkableMarker): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Markable

    /**
     * Delete the `marker` from all locations.
     * @virtual 
     * @param marker Marker to delete.
     */
    vfunc_delete_all_markers(marker: MarkableMarker): void
    /**
     * Check if the `marker` is set at the given `location`.
     * @virtual 
     * @param location Location to check.
     * @param marker Marker to check.
     */
    vfunc_is_marker_set(location: number, marker: MarkableMarker): boolean
    /**
     * Location where a marker is set could have moved by some operation in
     * the implementation. To retrieve the correct location where the marker
     * has moved, pass the handle retured by ianjuta_markable_mark() to this
     * method.
     * @virtual 
     * @param handle Handle of location.
     */
    vfunc_location_from_handle(handle: number): number
    /**
     * Marks the specified location with the given marker type. Location is
     * implementation depenedent. For example, for an editor location means
     * lines where markers are set.
     * @virtual 
     * @param location Location at which the marker to set.
     * @param marker Type of marker to be used
     * @param tooltip optional tooltip displayed with the marker
     */
    vfunc_mark(location: number, marker: MarkableMarker, tooltip: string | null): number
    vfunc_marker_clicked(double_click: boolean, location: number): void
    /**
     * Clears the `marker` at given `location`.
     * @virtual 
     * @param location Location where the marker is set.
     * @param marker The marker to unset.
     */
    vfunc_unmark(location: number, marker: MarkableMarker): void

    // Own signals of IAnjuta-3.0.IAnjuta.Markable

    connect(sigName: "marker-clicked", callback: Markable_MarkerClickedSignalCallback): number
    connect_after(sigName: "marker-clicked", callback: Markable_MarkerClickedSignalCallback): number
    emit(sigName: "marker-clicked", double_click: boolean, location: number, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Markable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Markable extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Markable

    static name: string
    static $gtype: GObject.GType<Markable>

    // Constructors of IAnjuta-3.0.IAnjuta.Markable

    constructor(config?: Markable_ConstructProps) 
    _init(config?: Markable_ConstructProps): void
}

interface MessageManager_ConstructProps extends GObject.Object_ConstructProps {
}

interface MessageManager {

    // Owm methods of IAnjuta-3.0.IAnjuta.MessageManager

    /**
     * Remove view from the message-manager. The view
     * will become invalid.
     * @param view The view to remove
     */
    remove_view(view: MessageView): void
    /**
     * Set view to be on top of the notebook.
     * @param view A message view
     */
    set_current_view(view: MessageView): void
    /**
     * Sets the icon of view.
     * @param view A message view
     * @param icon Sets the icon of view.
     */
    set_view_icon(view: MessageView, icon: GdkPixbuf.PixbufAnimation): void
    /**
     * Sets the icon of view.
     * @param view A message view
     * @param icon Sets the icon of view.
     */
    set_view_icon_from_stock(view: MessageView, icon: string): void
    /**
     * Sets the title of view.
     * @param view A message view
     * @param title Sets the title of view.
     */
    set_view_title(view: MessageView, title: string): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.MessageManager

    /**
     * Remove view from the message-manager. The view
     * will become invalid.
     * @virtual 
     * @param view The view to remove
     */
    vfunc_remove_view(view: MessageView): void
    /**
     * Set view to be on top of the notebook.
     * @virtual 
     * @param view A message view
     */
    vfunc_set_current_view(view: MessageView): void
    /**
     * Sets the icon of view.
     * @virtual 
     * @param view A message view
     * @param icon Sets the icon of view.
     */
    vfunc_set_view_icon(view: MessageView, icon: GdkPixbuf.PixbufAnimation): void
    /**
     * Sets the icon of view.
     * @virtual 
     * @param view A message view
     * @param icon Sets the icon of view.
     */
    vfunc_set_view_icon_from_stock(view: MessageView, icon: string): void
    /**
     * Sets the title of view.
     * @virtual 
     * @param view A message view
     * @param title Sets the title of view.
     */
    vfunc_set_view_title(view: MessageView, title: string): void

    // Class property signals of IAnjuta-3.0.IAnjuta.MessageManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MessageManager extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.MessageManager

    static name: string
    static $gtype: GObject.GType<MessageManager>

    // Constructors of IAnjuta-3.0.IAnjuta.MessageManager

    constructor(config?: MessageManager_ConstructProps) 
    _init(config?: MessageManager_ConstructProps): void
}

interface MessageView_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `buffer-flushed`
 */
interface MessageView_BufferFlushedSignalCallback {
    ($obj: MessageView, line: string): void
}

/**
 * Signal callback interface for `message-clicked`
 */
interface MessageView_MessageClickedSignalCallback {
    ($obj: MessageView, message: string): void
}

interface MessageView {

    // Owm methods of IAnjuta-3.0.IAnjuta.MessageView

    /**
     * Append the message with summary displayed and details displayed as tooltip
     * @param type type of the message
     * @param summary summary of the message
     * @param details details of the message
     */
    append(type: MessageViewType, summary: string, details: string): void
    /**
     * Appends the text in buffer. Flushes the buffer where a newline is found.
     * by emiiting buffer_flushed signal. The string is expected to be utf8.
     * @param text text to show as message
     */
    buffer_append(text: string): void
    /**
     * Clear all messages in buffer
     */
    clear(): void
    /**
     * Get the currently selected message
     */
    get_current_message(): string
    /**
     * Select next message (of type INFO, WARNING or ERROR)
     */
    select_next(): void
    /**
     * Select previous message
     */
    select_previous(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.MessageView

    /**
     * Append the message with summary displayed and details displayed as tooltip
     * @virtual 
     * @param type type of the message
     * @param summary summary of the message
     * @param details details of the message
     */
    vfunc_append(type: MessageViewType, summary: string, details: string): void
    /**
     * Appends the text in buffer. Flushes the buffer where a newline is found.
     * by emiiting buffer_flushed signal. The string is expected to be utf8.
     * @virtual 
     * @param text text to show as message
     */
    vfunc_buffer_append(text: string): void
    vfunc_buffer_flushed(line: string): void
    /**
     * Clear all messages in buffer
     * @virtual 
     */
    vfunc_clear(): void
    /**
     * Get the currently selected message
     * @virtual 
     */
    vfunc_get_current_message(): string
    vfunc_message_clicked(message: string): void
    /**
     * Select next message (of type INFO, WARNING or ERROR)
     * @virtual 
     */
    vfunc_select_next(): void
    /**
     * Select previous message
     * @virtual 
     */
    vfunc_select_previous(): void

    // Own signals of IAnjuta-3.0.IAnjuta.MessageView

    connect(sigName: "buffer-flushed", callback: MessageView_BufferFlushedSignalCallback): number
    connect_after(sigName: "buffer-flushed", callback: MessageView_BufferFlushedSignalCallback): number
    emit(sigName: "buffer-flushed", line: string, ...args: any[]): void
    connect(sigName: "message-clicked", callback: MessageView_MessageClickedSignalCallback): number
    connect_after(sigName: "message-clicked", callback: MessageView_MessageClickedSignalCallback): number
    emit(sigName: "message-clicked", message: string, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.MessageView

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MessageView extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.MessageView

    static name: string
    static $gtype: GObject.GType<MessageView>

    // Constructors of IAnjuta-3.0.IAnjuta.MessageView

    constructor(config?: MessageView_ConstructProps) 
    _init(config?: MessageView_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface PluginFactory_ConstructProps extends GObject.Object_ConstructProps {
}

interface PluginFactory {

    // Class property signals of IAnjuta-3.0.IAnjuta.PluginFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PluginFactory extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.PluginFactory

    static name: string
    static $gtype: GObject.GType<PluginFactory>

    // Constructors of IAnjuta-3.0.IAnjuta.PluginFactory

    constructor(config?: PluginFactory_ConstructProps) 
    _init(config?: PluginFactory_ConstructProps): void
}

interface Preferences_ConstructProps extends GObject.Object_ConstructProps {
}

interface Preferences {

    // Owm methods of IAnjuta-3.0.IAnjuta.Preferences

    /**
     * When called, the plugin should install it's preferences
     * @param prefs AnjutaPreferences to install to
     */
    merge(prefs: Anjuta.Preferences): void
    /**
     * When called, the plugin should uninstall it's preferences
     * @param prefs AnjutaPreferences to install to
     */
    unmerge(prefs: Anjuta.Preferences): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Preferences

    /**
     * When called, the plugin should install it's preferences
     * @virtual 
     * @param prefs AnjutaPreferences to install to
     */
    vfunc_merge(prefs: Anjuta.Preferences): void
    /**
     * When called, the plugin should uninstall it's preferences
     * @virtual 
     * @param prefs AnjutaPreferences to install to
     */
    vfunc_unmerge(prefs: Anjuta.Preferences): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Preferences

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Preferences extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Preferences

    static name: string
    static $gtype: GObject.GType<Preferences>

    // Constructors of IAnjuta-3.0.IAnjuta.Preferences

    constructor(config?: Preferences_ConstructProps) 
    _init(config?: Preferences_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Print_ConstructProps extends GObject.Object_ConstructProps {
}

interface Print {

    // Owm methods of IAnjuta-3.0.IAnjuta.Print

    /**
     * Print the plugin (the file in case of the editor). In most cases this will show
     * a print dialog
     */
    print(): void
    /**
     * Show print preview dialog
     */
    print_preview(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Print

    /**
     * Print the plugin (the file in case of the editor). In most cases this will show
     * a print dialog
     * @virtual 
     */
    vfunc_print(): void
    /**
     * Show print preview dialog
     * @virtual 
     */
    vfunc_print_preview(): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Print

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Print extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Print

    static name: string
    static $gtype: GObject.GType<Print>

    // Constructors of IAnjuta-3.0.IAnjuta.Print

    constructor(config?: Print_ConstructProps) 
    _init(config?: Print_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Project_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `file-changed`
 */
interface Project_FileChangedSignalCallback {
    ($obj: Project, node: object | null): void
}

/**
 * Signal callback interface for `node-changed`
 */
interface Project_NodeChangedSignalCallback {
    ($obj: Project, node: object | null, error: GLib.Error): void
}

/**
 * Signal callback interface for `node-loaded`
 */
interface Project_NodeLoadedSignalCallback {
    ($obj: Project, node: object | null, error: GLib.Error): void
}

/**
 * Signal callback interface for `node-saved`
 */
interface Project_NodeSavedSignalCallback {
    ($obj: Project, node: object | null, error: GLib.Error): void
}

interface Project {

    // Owm methods of IAnjuta-3.0.IAnjuta.Project

    /**
     * Create a new node and insert it after sibling
     * @param parent Parent
     * @param sibling Sibling
     * @param type Node type
     * @param file Optional file object for the node
     * @param name Optional name for the node
     */
    add_node_after(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file: Gio.File | null, name: string | null): Anjuta.ProjectNode
    /**
     * Create a new node and insert it before sibling
     * @param parent Parent
     * @param sibling Sibling
     * @param type Node type
     * @param file Optional file object for the node
     * @param name Optional name for the node
     */
    add_node_before(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file: Gio.File | null, name: string | null): Anjuta.ProjectNode
    /**
     * Return a list of possible node;
     */
    get_node_info(): Anjuta.ProjectNodeInfo[]
    /**
     * Get root_node
     */
    get_root(): Anjuta.ProjectNode
    /**
     * Return TRUE if the project is loaded;
     */
    is_loaded(): boolean
    /**
     * Reload a project node
     * @param node Project node to reload
     */
    load_node(node: Anjuta.ProjectNode): boolean
    /**
     * Remove a node
     * @param node Node
     */
    remove_node(node: Anjuta.ProjectNode): boolean
    /**
     * Remove a property of the node
     * @param node Node
     * @param id Property
     * @param name Name for map property
     */
    remove_property(node: Anjuta.ProjectNode, id: string, name: string | null): boolean
    /**
     * Save a project node
     * @param node Project node to save
     */
    save_node(node: Anjuta.ProjectNode): boolean
    /**
     * Change a properties on node.
     * @param node Node
     * @param id Property
     * @param name Name for map property
     * @param value Value
     */
    set_property(node: Anjuta.ProjectNode, id?: string, name?: string | null, value?: string): Anjuta.ProjectProperty | null

    // Overloads of set_property

    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value?: any): void
    set_property(...args: any[]): any
    set_property(args_or_property_name: any[] | string, value?: any): Anjuta.ProjectProperty | null | void | any

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Project

    /**
     * Create a new node and insert it after sibling
     * @virtual 
     * @param parent Parent
     * @param sibling Sibling
     * @param type Node type
     * @param file Optional file object for the node
     * @param name Optional name for the node
     */
    vfunc_add_node_after(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file: Gio.File | null, name: string | null): Anjuta.ProjectNode
    /**
     * Create a new node and insert it before sibling
     * @virtual 
     * @param parent Parent
     * @param sibling Sibling
     * @param type Node type
     * @param file Optional file object for the node
     * @param name Optional name for the node
     */
    vfunc_add_node_before(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file: Gio.File | null, name: string | null): Anjuta.ProjectNode
    vfunc_file_changed(node: object | null): void
    /**
     * Return a list of possible node;
     * @virtual 
     */
    vfunc_get_node_info(): Anjuta.ProjectNodeInfo[]
    /**
     * Get root_node
     * @virtual 
     */
    vfunc_get_root(): Anjuta.ProjectNode
    /**
     * Return TRUE if the project is loaded;
     * @virtual 
     */
    vfunc_is_loaded(): boolean
    /**
     * Reload a project node
     * @virtual 
     * @param node Project node to reload
     */
    vfunc_load_node(node: Anjuta.ProjectNode): boolean
    vfunc_node_changed(node: object | null, error: GLib.Error): void
    vfunc_node_loaded(node: object | null, error: GLib.Error): void
    vfunc_node_saved(node: object | null, error: GLib.Error): void
    /**
     * Remove a node
     * @virtual 
     * @param node Node
     */
    vfunc_remove_node(node: Anjuta.ProjectNode): boolean
    /**
     * Remove a property of the node
     * @virtual 
     * @param node Node
     * @param id Property
     * @param name Name for map property
     */
    vfunc_remove_property(node: Anjuta.ProjectNode, id: string, name: string | null): boolean
    /**
     * Save a project node
     * @virtual 
     * @param node Project node to save
     */
    vfunc_save_node(node: Anjuta.ProjectNode): boolean
    /**
     * Change a properties on node.
     * @virtual 
     * @param node Node
     * @param id Property
     * @param name Name for map property
     * @param value Value
     */
    vfunc_set_property(node: Anjuta.ProjectNode, id?: string, name?: string | null, value?: string): Anjuta.ProjectProperty | null

    // Overloads of vfunc_set_property

    vfunc_set_property(property_id: number, value?: any, pspec?: GObject.ParamSpec): void
    vfunc_set_property(...args: any[]): any
    vfunc_set_property(args_or_property_id: any[] | number, value?: any, pspec?: GObject.ParamSpec): Anjuta.ProjectProperty | null | void | any

    // Own signals of IAnjuta-3.0.IAnjuta.Project

    connect(sigName: "file-changed", callback: Project_FileChangedSignalCallback): number
    connect_after(sigName: "file-changed", callback: Project_FileChangedSignalCallback): number
    emit(sigName: "file-changed", node: object | null, ...args: any[]): void
    connect(sigName: "node-changed", callback: Project_NodeChangedSignalCallback): number
    connect_after(sigName: "node-changed", callback: Project_NodeChangedSignalCallback): number
    emit(sigName: "node-changed", node: object | null, error: GLib.Error, ...args: any[]): void
    connect(sigName: "node-loaded", callback: Project_NodeLoadedSignalCallback): number
    connect_after(sigName: "node-loaded", callback: Project_NodeLoadedSignalCallback): number
    emit(sigName: "node-loaded", node: object | null, error: GLib.Error, ...args: any[]): void
    connect(sigName: "node-saved", callback: Project_NodeSavedSignalCallback): number
    connect_after(sigName: "node-saved", callback: Project_NodeSavedSignalCallback): number
    emit(sigName: "node-saved", node: object | null, error: GLib.Error, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Project

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Project extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Project

    static name: string
    static $gtype: GObject.GType<Project>

    // Constructors of IAnjuta-3.0.IAnjuta.Project

    constructor(config?: Project_ConstructProps) 
    _init(config?: Project_ConstructProps): void
}

interface ProjectBackend_ConstructProps extends GObject.Object_ConstructProps {
}

interface ProjectBackend {

    // Owm methods of IAnjuta-3.0.IAnjuta.ProjectBackend

    /**
     * Create a new Anjuta project.
     * @param file Project file or directory
     */
    new_project(file: Gio.File): Project
    /**
     * Check if the directory contains a project supported by this
     * backend.
     * @param directory Project file or directory
     */
    probe(directory: Gio.File): number

    // Own virtual methods of IAnjuta-3.0.IAnjuta.ProjectBackend

    /**
     * Create a new Anjuta project.
     * @virtual 
     * @param file Project file or directory
     */
    vfunc_new_project(file: Gio.File): Project
    /**
     * Check if the directory contains a project supported by this
     * backend.
     * @virtual 
     * @param directory Project file or directory
     */
    vfunc_probe(directory: Gio.File): number

    // Class property signals of IAnjuta-3.0.IAnjuta.ProjectBackend

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ProjectBackend extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.ProjectBackend

    static name: string
    static $gtype: GObject.GType<ProjectBackend>

    // Constructors of IAnjuta-3.0.IAnjuta.ProjectBackend

    constructor(config?: ProjectBackend_ConstructProps) 
    _init(config?: ProjectBackend_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface ProjectChooser_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface ProjectChooser_ChangedSignalCallback {
    ($obj: ProjectChooser): void
}

interface ProjectChooser {

    // Owm methods of IAnjuta-3.0.IAnjuta.ProjectChooser

    /**
     * Gets the currently selected element in the project chooser.
     */
    get_selected(): Gio.File
    /**
     * Initialize a project chooser button allowing to select a parent node
     * where you can add the nodes of type child_type.
     * As special cases with
     * <variablelist>
     *   <varlistentry>
     *     <term>ANJUTA_PROJECT_ROOT</term>
     *     <listitem><para>all nodes are included</para></listitem>
     *   </varlistentry>
     *   <varlistentry>
     *     <term>ANJUTA_PROJECT_MODULE</term>
     *     <listitem><para>only modules are included, this can be used
     *     to add a new package. While ANJUTA_PROJECT_PACKAGE allows you
     *     to select a target using a package.</para></listitem>
     *   </varlistentry>
     * </variablelist>
     * @param manager A project manager
     * @param child_type Select one element type: source, group or target
     */
    set_project_model(manager: ProjectManager, child_type: Anjuta.ProjectNodeType): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.ProjectChooser

    vfunc_changed(): void
    /**
     * Gets the currently selected element in the project chooser.
     * @virtual 
     */
    vfunc_get_selected(): Gio.File
    /**
     * Initialize a project chooser button allowing to select a parent node
     * where you can add the nodes of type child_type.
     * As special cases with
     * <variablelist>
     *   <varlistentry>
     *     <term>ANJUTA_PROJECT_ROOT</term>
     *     <listitem><para>all nodes are included</para></listitem>
     *   </varlistentry>
     *   <varlistentry>
     *     <term>ANJUTA_PROJECT_MODULE</term>
     *     <listitem><para>only modules are included, this can be used
     *     to add a new package. While ANJUTA_PROJECT_PACKAGE allows you
     *     to select a target using a package.</para></listitem>
     *   </varlistentry>
     * </variablelist>
     * @virtual 
     * @param manager A project manager
     * @param child_type Select one element type: source, group or target
     */
    vfunc_set_project_model(manager: ProjectManager, child_type: Anjuta.ProjectNodeType): boolean

    // Own signals of IAnjuta-3.0.IAnjuta.ProjectChooser

    connect(sigName: "changed", callback: ProjectChooser_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: ProjectChooser_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.ProjectChooser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ProjectChooser extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.ProjectChooser

    static name: string
    static $gtype: GObject.GType<ProjectChooser>

    // Constructors of IAnjuta-3.0.IAnjuta.ProjectChooser

    constructor(config?: ProjectChooser_ConstructProps) 
    _init(config?: ProjectChooser_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface ProjectManager_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `element-added`
 */
interface ProjectManager_ElementAddedSignalCallback {
    ($obj: ProjectManager, object: Gio.File): void
}

/**
 * Signal callback interface for `element-removed`
 */
interface ProjectManager_ElementRemovedSignalCallback {
    ($obj: ProjectManager, object: Gio.File): void
}

/**
 * Signal callback interface for `element-selected`
 */
interface ProjectManager_ElementSelectedSignalCallback {
    ($obj: ProjectManager, object: Gio.File): void
}

/**
 * Signal callback interface for `project-loaded`
 */
interface ProjectManager_ProjectLoadedSignalCallback {
    ($obj: ProjectManager, object: GLib.Error): void
}

interface ProjectManager {

    // Owm methods of IAnjuta-3.0.IAnjuta.ProjectManager

    /**
     * Prompts the user to add a new group to the project. The user can select
     * a parent group different from the one set as default.
     * @param name Group name or URI.
     * @param default_group A #GFile corresponding to the default parent group or 				%NULL if don't care.
     */
    add_group(name: string, default_group: Gio.File | null): Gio.File
    /**
     * Prompts the user to add a file to the project. If the user selects
     * multiple files only the first source file is returned.
     * 
     * You can add non existing file. In this case the element_added
     * signal will be emitted with a non existing file. So it is
     * up to the caller to reemit this signal later when the file
     * is created.
     * @param name Source name or URI.
     * @param default_target A #GFile corresponding to the default target or group or 				%NULL if you don't care.
     */
    add_source(name: string, default_target: Gio.File | null): Gio.File
    /**
     * Adds a file to the project without prompting the user.
     * 
     * You can add non existing file. In this case the element_added
     * signal will be emitted with a non existing file. So it is
     * up to the caller to reemit this signal later when the file
     * is created.
     * @param name Source name or URI.
     * @param target A #GFile corresponding to the parent target or group.
     */
    add_source_quiet(name: string, target: Gio.File): Gio.File
    /**
     * Prompts the user to add several files to the project. Depending on the
     * project backend, it can be possible that the source files must
     * be located in a particular directory.
     * 
     * You can add non existing file. In this case the element_added
     * signal will be emitted with a non existing file. So it is
     * up to the caller to reemit this signal later when the file
     * is created.
     * @param names Sources name or URI to add.
     * @param default_target A #GFile corresponding to the default target or group or 				%NULL if don't care.
     */
    add_sources(names: string[], default_target: Gio.File | null): Gio.File[]
    /**
     * Prompts the user to add a new target to the project. The user can select
     * a parent group different from the one set as default.
     * @param name Target name or URI.
     * @param default_group A #GFile corresponding to the default parent group or 				%NULL if don't care.
     */
    add_target(name: string, default_group: Gio.File | null): Gio.File
    /**
     * Gets the capabilites of project whether it can add group, target
     * sources etc.
     */
    get_capabilities(): number
    /**
     * Recursively gets the list of all children below the corresponding
     * parent having the specify type.
     * @param parent A #GFile corresponding to the parent.
     * @param children_type Select one element type: source, group or target
     */
    get_children(parent: Gio.File, children_type: number): Gio.File[]
    /**
     * Gets the current project.
     */
    get_current_project(): Project
    /**
     * Get a list of all elements of this type in the project.
     * @param element_type Select one element type: source, group or target
     */
    get_elements(element_type: Anjuta.ProjectNodeType): Gio.File[]
    get_packages(): string[]
    /**
     * Gets the currently selected element in the project manager view.
     */
    get_selected(): Gio.File
    /**
     * Get the type of the corresponding target: program, library...
     * @param target A #GFile corresponding to a target
     */
    get_target_type(target: Gio.File): Anjuta.ProjectNodeType
    /**
     * Get a list of targets in the project with the corresponding type.
     * @param target_type type of the target
     */
    get_targets(target_type: Anjuta.ProjectNodeType): Gio.File[]
    /**
     * Gets whether a project is currently opened.
     */
    is_open(): boolean
    /**
     * Remove a source file from the project. If the file is used in several
     * targets, it is removed from all targets. The file could be removed from
     * the disk.
     * @param file A #GFile that will be removed from the project
     */
    remove_file(file: Gio.File): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.ProjectManager

    /**
     * Prompts the user to add a new group to the project. The user can select
     * a parent group different from the one set as default.
     * @virtual 
     * @param name Group name or URI.
     * @param default_group A #GFile corresponding to the default parent group or 				%NULL if don't care.
     */
    vfunc_add_group(name: string, default_group: Gio.File | null): Gio.File
    /**
     * Prompts the user to add a file to the project. If the user selects
     * multiple files only the first source file is returned.
     * 
     * You can add non existing file. In this case the element_added
     * signal will be emitted with a non existing file. So it is
     * up to the caller to reemit this signal later when the file
     * is created.
     * @virtual 
     * @param name Source name or URI.
     * @param default_target A #GFile corresponding to the default target or group or 				%NULL if you don't care.
     */
    vfunc_add_source(name: string, default_target: Gio.File | null): Gio.File
    /**
     * Adds a file to the project without prompting the user.
     * 
     * You can add non existing file. In this case the element_added
     * signal will be emitted with a non existing file. So it is
     * up to the caller to reemit this signal later when the file
     * is created.
     * @virtual 
     * @param name Source name or URI.
     * @param target A #GFile corresponding to the parent target or group.
     */
    vfunc_add_source_quiet(name: string, target: Gio.File): Gio.File
    /**
     * Prompts the user to add several files to the project. Depending on the
     * project backend, it can be possible that the source files must
     * be located in a particular directory.
     * 
     * You can add non existing file. In this case the element_added
     * signal will be emitted with a non existing file. So it is
     * up to the caller to reemit this signal later when the file
     * is created.
     * @virtual 
     * @param names Sources name or URI to add.
     * @param default_target A #GFile corresponding to the default target or group or 				%NULL if don't care.
     */
    vfunc_add_sources(names: string[], default_target: Gio.File | null): Gio.File[]
    /**
     * Prompts the user to add a new target to the project. The user can select
     * a parent group different from the one set as default.
     * @virtual 
     * @param name Target name or URI.
     * @param default_group A #GFile corresponding to the default parent group or 				%NULL if don't care.
     */
    vfunc_add_target(name: string, default_group: Gio.File | null): Gio.File
    vfunc_element_added(element: Gio.File): void
    vfunc_element_removed(element: Gio.File): void
    vfunc_element_selected(element: Gio.File): void
    /**
     * Gets the capabilites of project whether it can add group, target
     * sources etc.
     * @virtual 
     */
    vfunc_get_capabilities(): number
    /**
     * Recursively gets the list of all children below the corresponding
     * parent having the specify type.
     * @virtual 
     * @param parent A #GFile corresponding to the parent.
     * @param children_type Select one element type: source, group or target
     */
    vfunc_get_children(parent: Gio.File, children_type: number): Gio.File[]
    /**
     * Gets the current project.
     * @virtual 
     */
    vfunc_get_current_project(): Project
    /**
     * Get a list of all elements of this type in the project.
     * @virtual 
     * @param element_type Select one element type: source, group or target
     */
    vfunc_get_elements(element_type: Anjuta.ProjectNodeType): Gio.File[]
    vfunc_get_packages(): string[]
    /**
     * Gets the currently selected element in the project manager view.
     * @virtual 
     */
    vfunc_get_selected(): Gio.File
    /**
     * Get the type of the corresponding target: program, library...
     * @virtual 
     * @param target A #GFile corresponding to a target
     */
    vfunc_get_target_type(target: Gio.File): Anjuta.ProjectNodeType
    /**
     * Get a list of targets in the project with the corresponding type.
     * @virtual 
     * @param target_type type of the target
     */
    vfunc_get_targets(target_type: Anjuta.ProjectNodeType): Gio.File[]
    /**
     * Gets whether a project is currently opened.
     * @virtual 
     */
    vfunc_is_open(): boolean
    vfunc_project_loaded(error: GLib.Error): void
    /**
     * Remove a source file from the project. If the file is used in several
     * targets, it is removed from all targets. The file could be removed from
     * the disk.
     * @virtual 
     * @param file A #GFile that will be removed from the project
     */
    vfunc_remove_file(file: Gio.File): boolean

    // Own signals of IAnjuta-3.0.IAnjuta.ProjectManager

    connect(sigName: "element-added", callback: ProjectManager_ElementAddedSignalCallback): number
    connect_after(sigName: "element-added", callback: ProjectManager_ElementAddedSignalCallback): number
    emit(sigName: "element-added", object: Gio.File, ...args: any[]): void
    connect(sigName: "element-removed", callback: ProjectManager_ElementRemovedSignalCallback): number
    connect_after(sigName: "element-removed", callback: ProjectManager_ElementRemovedSignalCallback): number
    emit(sigName: "element-removed", object: Gio.File, ...args: any[]): void
    connect(sigName: "element-selected", callback: ProjectManager_ElementSelectedSignalCallback): number
    connect_after(sigName: "element-selected", callback: ProjectManager_ElementSelectedSignalCallback): number
    emit(sigName: "element-selected", object: Gio.File, ...args: any[]): void
    connect(sigName: "project-loaded", callback: ProjectManager_ProjectLoadedSignalCallback): number
    connect_after(sigName: "project-loaded", callback: ProjectManager_ProjectLoadedSignalCallback): number
    emit(sigName: "project-loaded", object: GLib.Error, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.ProjectManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ProjectManager extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.ProjectManager

    static name: string
    static $gtype: GObject.GType<ProjectManager>

    // Constructors of IAnjuta-3.0.IAnjuta.ProjectManager

    constructor(config?: ProjectManager_ConstructProps) 
    _init(config?: ProjectManager_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Provider_ConstructProps extends GObject.Object_ConstructProps {
}

interface Provider {

    // Owm methods of IAnjuta-3.0.IAnjuta.Provider

    /**
     * Show completion for the context at position `iter`
     * @param iter position where the completion occurs
     * @param data data assigned to the proposal
     */
    activate(iter: Iterable, data: object | null): void
    /**
     * Return a (translatable) name for the provider
     */
    get_name(): string
    /**
     * Get the iter where the current completion started
     */
    get_start_iter(): Iterable
    /**
     * Show completion for the context at position `iter`. The provider should
     * call ianjuta_editor_assist_proposals here to add proposals to the list.
     * 
     * Note that this is called after every character typed and the list of proposals
     * has to be completely renewed.
     * @param iter the text iter where the provider should be populated
     */
    populate(iter: Iterable): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Provider

    /**
     * Show completion for the context at position `iter`
     * @virtual 
     * @param iter position where the completion occurs
     * @param data data assigned to the proposal
     */
    vfunc_activate(iter: Iterable, data: object | null): void
    /**
     * Return a (translatable) name for the provider
     * @virtual 
     */
    vfunc_get_name(): string
    /**
     * Get the iter where the current completion started
     * @virtual 
     */
    vfunc_get_start_iter(): Iterable
    /**
     * Show completion for the context at position `iter`. The provider should
     * call ianjuta_editor_assist_proposals here to add proposals to the list.
     * 
     * Note that this is called after every character typed and the list of proposals
     * has to be completely renewed.
     * @virtual 
     * @param iter the text iter where the provider should be populated
     */
    vfunc_populate(iter: Iterable): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Provider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Provider extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Provider

    static name: string
    static $gtype: GObject.GType<Provider>

    // Constructors of IAnjuta-3.0.IAnjuta.Provider

    constructor(config?: Provider_ConstructProps) 
    _init(config?: Provider_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface SnippetsManager_ConstructProps extends GObject.Object_ConstructProps {
}

interface SnippetsManager {

    // Owm methods of IAnjuta-3.0.IAnjuta.SnippetsManager

    /**
     * Insert snippet in the current editor.
     * @param key Trigger-key of the snippet
     * @param editing_session If after inserting the snippet there should be an editing session. Mark as FALSE if not interested in the dynamic capabilities of the snippet.
     */
    insert(key: string, editing_session: boolean): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.SnippetsManager

    /**
     * Insert snippet in the current editor.
     * @virtual 
     * @param key Trigger-key of the snippet
     * @param editing_session If after inserting the snippet there should be an editing session. Mark as FALSE if not interested in the dynamic capabilities of the snippet.
     */
    vfunc_insert(key: string, editing_session: boolean): boolean

    // Class property signals of IAnjuta-3.0.IAnjuta.SnippetsManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SnippetsManager extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.SnippetsManager

    static name: string
    static $gtype: GObject.GType<SnippetsManager>

    // Constructors of IAnjuta-3.0.IAnjuta.SnippetsManager

    constructor(config?: SnippetsManager_ConstructProps) 
    _init(config?: SnippetsManager_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Stream_ConstructProps extends GObject.Object_ConstructProps {
}

interface Stream {

    // Owm methods of IAnjuta-3.0.IAnjuta.Stream

    /**
     * The implementor opens the given stream.
     * @param stream Stream to open from.
     */
    open(stream: object | null): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Stream

    /**
     * The implementor opens the given stream.
     * @virtual 
     * @param stream Stream to open from.
     */
    vfunc_open(stream: object | null): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Stream

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Stream extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Stream

    static name: string
    static $gtype: GObject.GType<Stream>

    // Constructors of IAnjuta-3.0.IAnjuta.Stream

    constructor(config?: Stream_ConstructProps) 
    _init(config?: Stream_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface StreamLoader_ConstructProps extends Loader_ConstructProps, GObject.Object_ConstructProps {
}

interface StreamLoader extends Loader {

    // Owm methods of IAnjuta-3.0.IAnjuta.StreamLoader

    /**
     * Peeks the stream and determines the interface which can load
     * this stream.
     * @param stream Stream to load
     */
    peek_interface(stream: object | null): string

    // Own virtual methods of IAnjuta-3.0.IAnjuta.StreamLoader

    /**
     * Peeks the stream and determines the interface which can load
     * this stream.
     * @virtual 
     * @param stream Stream to load
     */
    vfunc_peek_interface(stream: object | null): string

    // Class property signals of IAnjuta-3.0.IAnjuta.StreamLoader

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StreamLoader extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.StreamLoader

    static name: string
    static $gtype: GObject.GType<StreamLoader>

    // Constructors of IAnjuta-3.0.IAnjuta.StreamLoader

    constructor(config?: StreamLoader_ConstructProps) 
    _init(config?: StreamLoader_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface StreamSavable_ConstructProps extends Stream_ConstructProps, GObject.Object_ConstructProps {
}

interface StreamSavable extends Stream {

    // Owm methods of IAnjuta-3.0.IAnjuta.StreamSavable

    save(stream: object | null): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.StreamSavable

    vfunc_save(stream: object | null): void

    // Class property signals of IAnjuta-3.0.IAnjuta.StreamSavable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StreamSavable extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.StreamSavable

    static name: string
    static $gtype: GObject.GType<StreamSavable>

    // Constructors of IAnjuta-3.0.IAnjuta.StreamSavable

    constructor(config?: StreamSavable_ConstructProps) 
    _init(config?: StreamSavable_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Symbol_ConstructProps extends GObject.Object_ConstructProps {
}

interface Symbol {

    // Owm methods of IAnjuta-3.0.IAnjuta.Symbol

    /**
     * Retreives the boolean value of a boolean `field`.
     * @param field The field to retrieve.
     */
    get_boolean(field: SymbolField): boolean
    /**
     * A convenience method to get a small icon (16x16) representing the symbol
     * kind. You *need* a query with fields #IANJUTA_SYMBOL_FIELD_ACCESS and
     * #IANJUTA_SYMBOL_FIELD_KIND selected.
     */
    get_icon(): GdkPixbuf.Pixbuf
    /**
     * Retreives the integer value of an integer `field`.
     * @param field The field to retrieve.
     */
    get_int(field: SymbolField): number
    /**
     * Retreives the string value of a string `field`.
     * @param field The field to retrieve.
     */
    get_string(field: SymbolField): string
    /**
     * A convenience method to get value of #IANJUTA_SYMBOL_FIELD_TYPE
     * field typecasted to IAnjutaSymbolType. Numerical value is unchanged.
     */
    get_sym_type(): SymbolType

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Symbol

    /**
     * Retreives the boolean value of a boolean `field`.
     * @virtual 
     * @param field The field to retrieve.
     */
    vfunc_get_boolean(field: SymbolField): boolean
    /**
     * A convenience method to get a small icon (16x16) representing the symbol
     * kind. You *need* a query with fields #IANJUTA_SYMBOL_FIELD_ACCESS and
     * #IANJUTA_SYMBOL_FIELD_KIND selected.
     * @virtual 
     */
    vfunc_get_icon(): GdkPixbuf.Pixbuf
    /**
     * Retreives the integer value of an integer `field`.
     * @virtual 
     * @param field The field to retrieve.
     */
    vfunc_get_int(field: SymbolField): number
    /**
     * Retreives the string value of a string `field`.
     * @virtual 
     * @param field The field to retrieve.
     */
    vfunc_get_string(field: SymbolField): string
    /**
     * A convenience method to get value of #IANJUTA_SYMBOL_FIELD_TYPE
     * field typecasted to IAnjutaSymbolType. Numerical value is unchanged.
     * @virtual 
     */
    vfunc_get_sym_type(): SymbolType

    // Class property signals of IAnjuta-3.0.IAnjuta.Symbol

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Symbol extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Symbol

    static name: string
    static $gtype: GObject.GType<Symbol>

    // Constructors of IAnjuta-3.0.IAnjuta.Symbol

    constructor(config?: Symbol_ConstructProps) 
    _init(config?: Symbol_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface SymbolManager_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `prj-scan-end`
 */
interface SymbolManager_PrjScanEndSignalCallback {
    ($obj: SymbolManager, object: number): void
}

/**
 * Signal callback interface for `sys-scan-end`
 */
interface SymbolManager_SysScanEndSignalCallback {
    ($obj: SymbolManager, object: number): void
}

interface SymbolManager {

    // Owm methods of IAnjuta-3.0.IAnjuta.SymbolManager

    /**
     * Activates the package for searches in the global symbol database.
     * @param pkg_name Name of the package to activate. The colon char must be avoided.
     * @param pkg_version Version of the package. The colon char must be avoided.
     */
    activate_package(pkg_name: string, pkg_version: string): boolean
    /**
     * Deactivates all activate packages
     */
    deactivate_all(): void
    /**
     * Deactivates the package if it was found. If package is NULL, deactivate all
     * packages.
     * @param pkg_name name of the package. The colon char must be avoided.
     * @param pkg_version Version of the package. The colon char must be avoided.
     */
    deactivate_package(pkg_name: string, pkg_version: string): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.SymbolManager

    /**
     * Activates the package for searches in the global symbol database.
     * @virtual 
     * @param pkg_name Name of the package to activate. The colon char must be avoided.
     * @param pkg_version Version of the package. The colon char must be avoided.
     */
    vfunc_activate_package(pkg_name: string, pkg_version: string): boolean
    /**
     * Deactivates all activate packages
     * @virtual 
     */
    vfunc_deactivate_all(): void
    /**
     * Deactivates the package if it was found. If package is NULL, deactivate all
     * packages.
     * @virtual 
     * @param pkg_name name of the package. The colon char must be avoided.
     * @param pkg_version Version of the package. The colon char must be avoided.
     */
    vfunc_deactivate_package(pkg_name: string, pkg_version: string): void
    vfunc_prj_scan_end(process_id: number): void
    vfunc_sys_scan_end(process_id: number): void

    // Own signals of IAnjuta-3.0.IAnjuta.SymbolManager

    connect(sigName: "prj-scan-end", callback: SymbolManager_PrjScanEndSignalCallback): number
    connect_after(sigName: "prj-scan-end", callback: SymbolManager_PrjScanEndSignalCallback): number
    emit(sigName: "prj-scan-end", object: number, ...args: any[]): void
    connect(sigName: "sys-scan-end", callback: SymbolManager_SysScanEndSignalCallback): number
    connect_after(sigName: "sys-scan-end", callback: SymbolManager_SysScanEndSignalCallback): number
    emit(sigName: "sys-scan-end", object: number, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.SymbolManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SymbolManager extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.SymbolManager

    static name: string
    static $gtype: GObject.GType<SymbolManager>

    // Constructors of IAnjuta-3.0.IAnjuta.SymbolManager

    constructor(config?: SymbolManager_ConstructProps) 
    _init(config?: SymbolManager_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface SymbolQuery_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `async-result`
 */
interface SymbolQuery_AsyncResultSignalCallback {
    ($obj: SymbolQuery, object: GObject.Object): void
}

interface SymbolQuery {

    // Owm methods of IAnjuta-3.0.IAnjuta.SymbolQuery

    cancel(): void
    /**
     * Sets the fields of Query.
     * @param n_fields Then number of fields to retrieve.
     * @param fields The fields to retrieve in the query. The array length must   be `n_fields`.
     */
    set_fields(n_fields: number, fields: SymbolField): void
    /**
     * Sets the filescope search of Query.
     * @param filescope_search The filescope to search.
     */
    set_file_scope(filescope_search: SymbolQueryFileScope): void
    /**
     * Sets the bit mask of symbol type filters. if `include_types` is TRUE,
     * symbols satisfying the given symbol types are selected, otherwise
     * they are excluded.
     * @param filters The mode of query.
     * @param include_types TRUE if filter is positive, FALSE if reversed.
     */
    set_filters(filters: SymbolType, include_types: boolean): void
    /**
     * Sets the field with which result of query is grouped. As a result
     * there will be no duplicates of with this field.
     * @param field The field to group results.
     */
    set_group_by(field: SymbolField): void
    /**
     * Sets the limit of Query results. No more than `limit` results are
     * returned.
     * @param limit The limit of query.
     */
    set_limit(limit: number): void
    /**
     * Sets the mode of Query.
     * @param mode The mode of query.
     */
    set_mode(mode: SymbolQueryMode): void
    /**
     * Sets the offset index of Query results.
     * @param offset Offset of the resultset.
     */
    set_offset(offset: number): void
    /**
     * Sets the field with which result of query is ordered.
     * @param field The field to order the result.
     */
    set_order_by(field: SymbolField): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.SymbolQuery

    vfunc_async_result(result: GObject.Object): void
    vfunc_cancel(): void
    /**
     * Sets the fields of Query.
     * @virtual 
     * @param n_fields Then number of fields to retrieve.
     * @param fields The fields to retrieve in the query. The array length must   be `n_fields`.
     */
    vfunc_set_fields(n_fields: number, fields: SymbolField): void
    /**
     * Sets the filescope search of Query.
     * @virtual 
     * @param filescope_search The filescope to search.
     */
    vfunc_set_file_scope(filescope_search: SymbolQueryFileScope): void
    /**
     * Sets the bit mask of symbol type filters. if `include_types` is TRUE,
     * symbols satisfying the given symbol types are selected, otherwise
     * they are excluded.
     * @virtual 
     * @param filters The mode of query.
     * @param include_types TRUE if filter is positive, FALSE if reversed.
     */
    vfunc_set_filters(filters: SymbolType, include_types: boolean): void
    /**
     * Sets the field with which result of query is grouped. As a result
     * there will be no duplicates of with this field.
     * @virtual 
     * @param field The field to group results.
     */
    vfunc_set_group_by(field: SymbolField): void
    /**
     * Sets the limit of Query results. No more than `limit` results are
     * returned.
     * @virtual 
     * @param limit The limit of query.
     */
    vfunc_set_limit(limit: number): void
    /**
     * Sets the mode of Query.
     * @virtual 
     * @param mode The mode of query.
     */
    vfunc_set_mode(mode: SymbolQueryMode): void
    /**
     * Sets the offset index of Query results.
     * @virtual 
     * @param offset Offset of the resultset.
     */
    vfunc_set_offset(offset: number): void
    /**
     * Sets the field with which result of query is ordered.
     * @virtual 
     * @param field The field to order the result.
     */
    vfunc_set_order_by(field: SymbolField): void

    // Own signals of IAnjuta-3.0.IAnjuta.SymbolQuery

    connect(sigName: "async-result", callback: SymbolQuery_AsyncResultSignalCallback): number
    connect_after(sigName: "async-result", callback: SymbolQuery_AsyncResultSignalCallback): number
    emit(sigName: "async-result", object: GObject.Object, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.SymbolQuery

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SymbolQuery extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.SymbolQuery

    static name: string
    static $gtype: GObject.GType<SymbolQuery>

    // Constructors of IAnjuta-3.0.IAnjuta.SymbolQuery

    constructor(config?: SymbolQuery_ConstructProps) 
    _init(config?: SymbolQuery_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Terminal_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `child-exited`
 */
interface Terminal_ChildExitedSignalCallback {
    ($obj: Terminal, object: number, p0: number): void
}

interface Terminal {

    // Owm methods of IAnjuta-3.0.IAnjuta.Terminal

    /**
     * Run the command in a terminal, setting the working directory
     * and environment variables.
     * @param directory Working directory
     * @param command Command executed followed by arguments
     * @param environment List of additional environment variables
     */
    execute_command(directory: string, command: string, environment: string[]): number

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Terminal

    vfunc_child_exited(pid: number, status: number): void
    /**
     * Run the command in a terminal, setting the working directory
     * and environment variables.
     * @virtual 
     * @param directory Working directory
     * @param command Command executed followed by arguments
     * @param environment List of additional environment variables
     */
    vfunc_execute_command(directory: string, command: string, environment: string[]): number

    // Own signals of IAnjuta-3.0.IAnjuta.Terminal

    connect(sigName: "child-exited", callback: Terminal_ChildExitedSignalCallback): number
    connect_after(sigName: "child-exited", callback: Terminal_ChildExitedSignalCallback): number
    emit(sigName: "child-exited", object: number, p0: number, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Terminal

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Terminal extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Terminal

    static name: string
    static $gtype: GObject.GType<Terminal>

    // Constructors of IAnjuta-3.0.IAnjuta.Terminal

    constructor(config?: Terminal_ConstructProps) 
    _init(config?: Terminal_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Todo_ConstructProps extends GObject.Object_ConstructProps {
}

interface Todo {

    // Owm methods of IAnjuta-3.0.IAnjuta.Todo

    load(file: Gio.File): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Todo

    vfunc_load(file: Gio.File): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Todo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Todo extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Todo

    static name: string
    static $gtype: GObject.GType<Todo>

    // Constructors of IAnjuta-3.0.IAnjuta.Todo

    constructor(config?: Todo_ConstructProps) 
    _init(config?: Todo_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Vcs_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `status-changed`
 */
interface Vcs_StatusChangedSignalCallback {
    ($obj: Vcs): void
}

interface Vcs {

    // Owm methods of IAnjuta-3.0.IAnjuta.Vcs

    /**
     * Add files to the VCS repository.
     * @param files List of List of files, represented as #Gfile objects, to add
     * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
     */
    add(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    /**
     * Check out a copy of a code repository.
     * @param repository_location Location of repository to check out
     * @param dest Destination of checked out copy
     * @param cancel An optional #GCancellable object to cancel the operation, or NULL
     * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
     */
    checkout(repository_location: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify): void
    /**
     * Remove files from the VCS repository.
     * @param files List of files, represented as #Gfile objects, to remove
     * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
     */
    remove(files: Gio.File[], notify: Anjuta.AsyncNotify): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Vcs

    /**
     * Add files to the VCS repository.
     * @virtual 
     * @param files List of List of files, represented as #Gfile objects, to add
     * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
     */
    vfunc_add(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    /**
     * Check out a copy of a code repository.
     * @virtual 
     * @param repository_location Location of repository to check out
     * @param dest Destination of checked out copy
     * @param cancel An optional #GCancellable object to cancel the operation, or NULL
     * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
     */
    vfunc_checkout(repository_location: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify): void
    /**
     * Remove files from the VCS repository.
     * @virtual 
     * @param files List of files, represented as #Gfile objects, to remove
     * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
     */
    vfunc_remove(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    vfunc_status_changed(): void

    // Own signals of IAnjuta-3.0.IAnjuta.Vcs

    connect(sigName: "status-changed", callback: Vcs_StatusChangedSignalCallback): number
    connect_after(sigName: "status-changed", callback: Vcs_StatusChangedSignalCallback): number
    emit(sigName: "status-changed", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Vcs

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Vcs extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Vcs

    static name: string
    static $gtype: GObject.GType<Vcs>

    // Constructors of IAnjuta-3.0.IAnjuta.Vcs

    constructor(config?: Vcs_ConstructProps) 
    _init(config?: Vcs_ConstructProps): void
}

interface Wizard_ConstructProps extends GObject.Object_ConstructProps {
}

interface Wizard {

    // Owm methods of IAnjuta-3.0.IAnjuta.Wizard

    /**
     * Called when the wizard should start after some user action
     */
    activate(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Wizard

    /**
     * Called when the wizard should start after some user action
     * @virtual 
     */
    vfunc_activate(): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Wizard

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Wizard extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Wizard

    static name: string
    static $gtype: GObject.GType<Wizard>

    // Constructors of IAnjuta-3.0.IAnjuta.Wizard

    constructor(config?: Wizard_ConstructProps) 
    _init(config?: Wizard_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface BuildableIface {

    // Own fields of IAnjuta-3.0.IAnjuta.BuildableIface

    g_iface: GObject.TypeInterface
    build: (obj: Buildable, uri: string) => void
    clean: (obj: Buildable, uri: string) => void
    configure: (obj: Buildable, uri: string) => void
    execute: (obj: Buildable, uri: string) => void
    generate: (obj: Buildable, uri: string) => void
    get_command: (obj: Buildable, command_id: BuildableCommand) => string
    install: (obj: Buildable, uri: string) => void
    reset_commands: (obj: Buildable) => void
    set_command: (obj: Buildable, command_id: BuildableCommand, command: string) => void
}

abstract class BuildableIface {

    // Own properties of IAnjuta-3.0.IAnjuta.BuildableIface

    static name: string
}

interface BuilderIface {

    // Own fields of IAnjuta-3.0.IAnjuta.BuilderIface

    g_iface: GObject.TypeInterface
    cancel: (obj: Builder, handle: BuilderHandle) => void
    get_uri_configuration: (obj: Builder, uri: string) => string
    list_configuration: (obj: Builder) => string[]
}

abstract class BuilderIface {

    // Own properties of IAnjuta-3.0.IAnjuta.BuilderIface

    static name: string
}

interface DebugManagerIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DebugManagerIface

    g_iface: GObject.TypeInterface
    breakpoint_changed: (obj: DebugManager, breakpoint: DebuggerBreakpointItem) => void
    debugger_started: (obj: DebugManager) => void
    debugger_stopped: (obj: DebugManager, err: GLib.Error) => void
    frame_changed: (obj: DebugManager, frame: number, thread: number) => void
    location_changed: (obj: DebugManager, address: number, uri: string, line: number) => void
    program_exited: (obj: DebugManager) => void
    program_loaded: (obj: DebugManager) => void
    program_moved: (obj: DebugManager, pid: number, tid: number, address: number, file: string, line: number) => void
    program_running: (obj: DebugManager) => void
    program_started: (obj: DebugManager) => void
    program_stopped: (obj: DebugManager) => void
    program_unloaded: (obj: DebugManager) => void
    sharedlib_event: (obj: DebugManager) => void
    signal_received: (obj: DebugManager, name: string, description: string) => void
    quit: (obj: DebugManager) => boolean
    start: (obj: DebugManager, uri: string) => boolean
    start_remote: (obj: DebugManager, server: string, uri: string) => boolean
}

abstract class DebugManagerIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DebugManagerIface

    static name: string
}

interface DebuggerBreakpointIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerBreakpointIface

    g_iface: DebuggerIface
    implement_breakpoint: (obj: DebuggerBreakpoint) => number
}

abstract class DebuggerBreakpointIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerBreakpointIface

    static name: string
}

interface DebuggerBreakpointItem {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerBreakpointItem

    /**
     * type see #IAnjutaBreakpointType enumeration
     * @field 
     */
    type: number
    /**
     * unique identifier
     * @field 
     */
    id: number
    /**
     * source file where is the breakpoint
     * @field 
     */
    file: string
    /**
     * corresponding source file line number
     * @field 
     */
    line: number
    /**
     * corresponding function name
     * @field 
     */
    function_: string
    /**
     * corresponding address
     * @field 
     */
    address: number
    /**
     * TRUE if the breakpoint is enabled
     * @field 
     */
    enable: boolean
    /**
     * TRUE if the breakpoint is ignored
     * @field 
     */
    ignore: number
    /**
     * Count how many time the breakpoint is triggered
     * @field 
     */
    times: number
    /**
     * Additional condition for triggering the breakpoint
     * @field 
     */
    condition: string
    /**
     * TRUE if the breakpoint is temporary
     * @field 
     */
    temporary: boolean
    /**
     * TRUE if the breakpoint is pending
     * @field 
     */
    pending: boolean
}

/**
 * This structure keeps all information about a breakpoint.
 * @record 
 */
class DebuggerBreakpointItem {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerBreakpointItem

    static name: string
}

interface DebuggerFrame {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerFrame

    /**
     * Thread identifier.
     * @field 
     */
    thread: number
    /**
     * Level of the frame, 0 is the topmost one.
     * @field 
     */
    level: number
    /**
     * List of argument of the caller.
     * @field 
     */
    args: string
    /**
     * Source file name where is the program counter.
     * @field 
     */
    file: string
    /**
     * Line number in the file above.
     * @field 
     */
    line: number
    /**
     * Function name where is the program counter.
     * @field 
     */
    function_: string
    /**
     * Library name where is the program counter.
     * @field 
     */
    library: string
    /**
     * Address of the program counter.
     * @field 
     */
    address: number
}

/**
 * This structure keeps all information about a stack frame.
 * @record 
 */
class DebuggerFrame {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerFrame

    static name: string
}

interface DebuggerIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerIface

    g_iface: GObject.TypeInterface
    debugger_ready: (obj: Debugger, state: DebuggerState) => void
    debugger_started: (obj: Debugger) => void
    debugger_stopped: (obj: Debugger, err: GLib.Error) => void
    frame_changed: (obj: Debugger, frame: number, thread: number) => void
    program_exited: (obj: Debugger) => void
    program_loaded: (obj: Debugger) => void
    program_moved: (obj: Debugger, pid: number, tid: number, address: number, file: string, line: number) => void
    program_running: (obj: Debugger) => void
    program_stopped: (obj: Debugger) => void
    sharedlib_event: (obj: Debugger) => void
    signal_received: (obj: Debugger, name: string, description: string) => void
    abort: (obj: Debugger) => boolean
    attach: (obj: Debugger, pid: number, source_search_directories: string[]) => boolean
    // TODO fix conflict: connect: (obj: Debugger, server: string, args: string, terminal: boolean, stop: boolean) => boolean
    disable_log: (obj: Debugger) => void
    enable_log: (obj: Debugger, log: MessageView) => void
    exit: (obj: Debugger) => boolean
    get_state: (obj: Debugger) => DebuggerState
    handle_signal: (obj: Debugger, name: string, stop: boolean, print: boolean, ignore: boolean) => boolean
    interrupt: (obj: Debugger) => boolean
    load: (obj: Debugger, file: string, mime_type: string, source_search_directories: string[]) => boolean
    quit: (obj: Debugger) => boolean
    run: (obj: Debugger) => boolean
    run_from: (obj: Debugger, file: string, line: number) => boolean
    run_to: (obj: Debugger, file: string, line: number) => boolean
    send_command: (obj: Debugger, command: string) => boolean
    set_environment: (obj: Debugger, env: string) => boolean
    set_frame: (obj: Debugger, frame: number) => boolean
    set_thread: (obj: Debugger, thread: number) => boolean
    set_working_directory: (obj: Debugger, dir: string) => boolean
    start: (obj: Debugger, args: string, terminal: boolean, stop: boolean) => boolean
    step_in: (obj: Debugger) => boolean
    step_out: (obj: Debugger) => boolean
    step_over: (obj: Debugger) => boolean
    unload: (obj: Debugger) => boolean
}

abstract class DebuggerIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerIface

    static name: string
}

interface DebuggerInstructionALine {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionALine

    /**
     * Address of the line
     * @field 
     */
    address: number
    /**
     * Optional label
     * @field 
     */
    label: string
    /**
     * Diassembled instruction on the line
     * @field 
     */
    text: string
}

/**
 * Defines a disassembled line
 * @record 
 */
class DebuggerInstructionALine {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerInstructionALine

    static name: string
}

interface DebuggerInstructionDisassembly {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionDisassembly

    /**
     * Number of line
     * @field 
     */
    size: number
    /**
     * Array of all lines
     * @field 
     */
    data: DebuggerInstructionALine[]
}

/**
 * Represents a block of diassembled instructions
 * @record 
 */
class DebuggerInstructionDisassembly {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerInstructionDisassembly

    static name: string
}

interface DebuggerInstructionIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionIface

    g_iface: DebuggerIface
    run_from_address: (obj: DebuggerInstruction, address: number) => boolean
    run_to_address: (obj: DebuggerInstruction, address: number) => boolean
    step_in_instruction: (obj: DebuggerInstruction) => boolean
    step_over_instruction: (obj: DebuggerInstruction) => boolean
}

abstract class DebuggerInstructionIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerInstructionIface

    static name: string
}

interface DebuggerMemoryBlock {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerMemoryBlock

    address: number
    length: number
    data: string
}

class DebuggerMemoryBlock {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerMemoryBlock

    static name: string
}

interface DebuggerMemoryIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerMemoryIface

    g_iface: DebuggerIface
}

abstract class DebuggerMemoryIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerMemoryIface

    static name: string
}

interface DebuggerRegisterData {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerRegisterData

    /**
     * register identifier
     * @field 
     */
    num: number
    /**
     * register name
     * @field 
     */
    name: string
    /**
     * register value
     * @field 
     */
    value: string
}

/**
 * Defines a register data.
 * @record 
 */
class DebuggerRegisterData {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerRegisterData

    static name: string
}

interface DebuggerRegisterIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerRegisterIface

    g_iface: DebuggerIface
    write_register: (obj: DebuggerRegister, value: DebuggerRegisterData) => boolean
}

abstract class DebuggerRegisterIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerRegisterIface

    static name: string
}

interface DebuggerVariableIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerVariableIface

    g_iface: DebuggerIface
    assign: (obj: DebuggerVariable, name: string, value: string) => boolean
    destroy: (obj: DebuggerVariable, name: string) => boolean
}

abstract class DebuggerVariableIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerVariableIface

    static name: string
}

interface DebuggerVariableObject {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerVariableObject

    /**
     * unique variable object name created by backend
     * @field 
     */
    name: string
    /**
     * corresponding variable name or expression
     * @field 
     */
    expression: string
    /**
     * variable type
     * @field 
     */
    type: string
    /**
     * variable value
     * @field 
     */
    value: string
    /**
     * TRUE if the variable has changed
     * @field 
     */
    changed: boolean
    /**
     * TRUE if the variable is outside current scope
     * @field 
     */
    exited: boolean
    /**
     * TRUE if the variable has been removed
     * @field 
     */
    deleted: boolean
    /**
     * Number of variable children, -1 if unknown
     * @field 
     */
    children: number
    /**
     * TRUE if the children value is wrong
     * @field 
     */
    has_more: boolean
}

/**
 * Defines a variable object.
 * @record 
 */
class DebuggerVariableObject {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerVariableObject

    static name: string
}

interface DocumentIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DocumentIface

    g_iface: GObject.TypeInterface
    update_ui: (obj: Document) => void
    begin_undo_action: (obj: Document) => void
    can_redo: (obj: Document) => boolean
    can_undo: (obj: Document) => boolean
    clear: (obj: Document) => void
    copy: (obj: Document) => void
    cut: (obj: Document) => void
    end_undo_action: (obj: Document) => void
    get_filename: (obj: Document) => string
    grab_focus: (obj: Document) => void
    paste: (obj: Document) => void
    redo: (obj: Document) => void
    undo: (obj: Document) => void
}

abstract class DocumentIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DocumentIface

    static name: string
}

interface DocumentManagerIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DocumentManagerIface

    g_iface: GObject.TypeInterface
    document_added: (obj: DocumentManager, doc: Document) => void
    document_removed: (obj: DocumentManager, doc: Document) => void
    add_bookmark: (obj: DocumentManager, file: Gio.File, line: number) => void
    add_buffer: (obj: DocumentManager, name: string, content: string) => Editor
    add_document: (obj: DocumentManager, document: Document) => void
    find_document_with_file: (obj: DocumentManager, file: Gio.File) => Document
    get_current_document: (obj: DocumentManager) => Document
    get_doc_widgets: (obj: DocumentManager) => Gtk.Widget[]
    get_file: (obj: DocumentManager, filename: string) => Gio.File
    goto_file_line: (obj: DocumentManager, file: Gio.File, lineno: number) => Editor
    goto_file_line_mark: (obj: DocumentManager, file: Gio.File, lineno: number, mark: boolean) => Editor
    remove_document: (obj: DocumentManager, document: Document, save_before: boolean) => boolean
    set_current_document: (obj: DocumentManager, document: Document) => void
}

abstract class DocumentManagerIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DocumentManagerIface

    static name: string
}

interface EditorAssistIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorAssistIface

    g_iface: EditorIface
    cancelled: (obj: EditorAssist) => void
    add: (obj: EditorAssist, provider: Provider) => void
    invoke: (obj: EditorAssist, provider: Provider) => void
    proposals: (obj: EditorAssist, provider: Provider, proposals: EditorAssistProposal[], pre_word: string, finished: boolean) => void
    remove: (obj: EditorAssist, provider: Provider) => void
}

abstract class EditorAssistIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorAssistIface

    static name: string
}

interface EditorAssistProposal {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorAssistProposal

    label: string
    markup: string
    info: string
    text: string
    icon: GdkPixbuf.Pixbuf
    data: object
}

class EditorAssistProposal {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorAssistProposal

    static name: string
}

interface EditorCellIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorCellIface

    g_iface: GObject.TypeInterface
    get_attribute: (obj: EditorCell) => EditorAttribute
    get_char: (obj: EditorCell, char_index: number) => number
    get_character: (obj: EditorCell) => string
    get_length: (obj: EditorCell) => number
}

abstract class EditorCellIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorCellIface

    static name: string
}

interface EditorCellStyleIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorCellStyleIface

    g_iface: EditorCellIface
    get_background_color: (obj: EditorCellStyle) => string
    get_color: (obj: EditorCellStyle) => string
    get_font_description: (obj: EditorCellStyle) => string
}

abstract class EditorCellStyleIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorCellStyleIface

    static name: string
}

interface EditorCommentIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorCommentIface

    g_iface: EditorIface
    block: (obj: EditorComment) => void
    box: (obj: EditorComment) => void
    stream: (obj: EditorComment) => void
}

abstract class EditorCommentIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorCommentIface

    static name: string
}

interface EditorConvertIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorConvertIface

    g_iface: EditorIface
    to_lower: (obj: EditorConvert, start_position: Iterable, end_position: Iterable) => void
    to_upper: (obj: EditorConvert, start_position: Iterable, end_position: Iterable) => void
}

abstract class EditorConvertIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorConvertIface

    static name: string
}

interface EditorFactoryIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorFactoryIface

    g_iface: GObject.TypeInterface
}

abstract class EditorFactoryIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorFactoryIface

    static name: string
}

interface EditorFoldsIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorFoldsIface

    g_iface: EditorIface
    close_all: (obj: EditorFolds) => void
    open_all: (obj: EditorFolds) => void
    toggle_current: (obj: EditorFolds) => void
}

abstract class EditorFoldsIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorFoldsIface

    static name: string
}

interface EditorGladeSignalIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorGladeSignalIface

    g_iface: EditorIface
    drop: (obj: EditorGladeSignal, iterator: Iterable, signal_data: string) => void
    drop_possible: (obj: EditorGladeSignal, iterator: Iterable) => boolean
}

abstract class EditorGladeSignalIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorGladeSignalIface

    static name: string
}

interface EditorGotoIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorGotoIface

    g_iface: EditorIface
    end_block: (obj: EditorGoto) => void
    matching_brace: (obj: EditorGoto) => void
    start_block: (obj: EditorGoto) => void
}

abstract class EditorGotoIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorGotoIface

    static name: string
}

interface EditorHoverIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorHoverIface

    g_iface: EditorIface
    hover_leave: (obj: EditorHover, position: Iterable) => void
    hover_over: (obj: EditorHover, position: Iterable) => void
    display: (obj: EditorHover, position: Iterable, info: string) => void
}

abstract class EditorHoverIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorHoverIface

    static name: string
}

interface EditorIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorIface

    g_iface: GObject.TypeInterface
    backspace: (obj: Editor) => void
    changed: (obj: Editor, position: Iterable, added: boolean, length: number, lines: number, text: string) => void
    char_added: (obj: Editor, position: Iterable, ch: number) => void
    code_changed: (obj: Editor, position: Iterable, code: string) => void
    cursor_moved: (obj: Editor) => void
    glade_callback_add: (obj: Editor, widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string) => void
    glade_member_add: (obj: Editor, widget_typename: string, widget_name: string, filename: string) => void
    line_marks_gutter_clicked: (obj: Editor, location: number) => void
    append: (obj: Editor, text: string, length: number) => void
    erase: (obj: Editor, position_start: Iterable, position_end: Iterable) => void
    erase_all: (obj: Editor) => void
    get_column: (obj: Editor) => number
    get_current_word: (obj: Editor) => string
    get_end_position: (obj: Editor) => Iterable
    get_indentsize: (obj: Editor) => number
    get_length: (obj: Editor) => number
    get_line_begin_position: (obj: Editor, line: number) => Iterable
    get_line_end_position: (obj: Editor, line: number) => Iterable
    get_line_from_position: (obj: Editor, position: Iterable) => number
    get_lineno: (obj: Editor) => number
    get_offset: (obj: Editor) => number
    get_overwrite: (obj: Editor) => boolean
    get_position: (obj: Editor) => Iterable
    get_start_position: (obj: Editor) => Iterable
    get_tabsize: (obj: Editor) => number
    get_text: (obj: Editor, begin: Iterable, end: Iterable) => string
    get_text_all: (obj: Editor) => string
    get_use_spaces: (obj: Editor) => boolean
    goto_end: (obj: Editor) => void
    goto_line: (obj: Editor, lineno: number) => void
    goto_position: (obj: Editor, position: Iterable) => void
    goto_start: (obj: Editor) => void
    insert: (obj: Editor, position: Iterable, text: string, length: number) => void
    set_auto_indent: (obj: Editor, auto_indent: boolean) => void
    set_indentsize: (obj: Editor, indentsize: number) => void
    set_popup_menu: (obj: Editor, menu: Gtk.Widget) => void
    set_tabsize: (obj: Editor, tabsize: number) => void
    set_use_spaces: (obj: Editor, use_spaces: boolean) => void
}

abstract class EditorIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorIface

    static name: string
}

interface EditorLanguageIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorLanguageIface

    g_iface: EditorIface
    language_changed: (obj: EditorLanguage, language: string) => void
    get_language: (obj: EditorLanguage) => string
    get_language_name: (obj: EditorLanguage, language: string) => string
    get_supported_languages: (obj: EditorLanguage) => string[]
    set_language: (obj: EditorLanguage, language: string) => void
}

abstract class EditorLanguageIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorLanguageIface

    static name: string
}

interface EditorLineModeIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorLineModeIface

    g_iface: EditorIface
    convert: (obj: EditorLineMode, mode: EditorLineModeType) => void
    fix: (obj: EditorLineMode) => void
    get: (obj: EditorLineMode) => EditorLineModeType
    set: (obj: EditorLineMode, mode: EditorLineModeType) => void
}

abstract class EditorLineModeIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorLineModeIface

    static name: string
}

interface EditorSearchIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorSearchIface

    g_iface: EditorIface
    backward: (obj: EditorSearch, search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell) => [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]
    forward: (obj: EditorSearch, search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell) => [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]
}

abstract class EditorSearchIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorSearchIface

    static name: string
}

interface EditorSelectionIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorSelectionIface

    g_iface: EditorIface
    get: (obj: EditorSelection) => string
    has_selection: (obj: EditorSelection) => boolean
    replace: (obj: EditorSelection, text: string, length: number) => void
    select_all: (obj: EditorSelection) => void
    select_block: (obj: EditorSelection) => void
    select_function: (obj: EditorSelection) => void
    set: (obj: EditorSelection, start: Iterable, end: Iterable, scroll: boolean) => void
}

abstract class EditorSelectionIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorSelectionIface

    static name: string
}

interface EditorTipIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorTipIface

    g_iface: EditorIface
    cancel: (obj: EditorTip) => void
    show: (obj: EditorTip, tips: string[], position: Iterable) => void
    visible: (obj: EditorTip) => boolean
}

abstract class EditorTipIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorTipIface

    static name: string
}

interface EditorViewIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorViewIface

    g_iface: EditorIface
    create: (obj: EditorView) => void
    get_count: (obj: EditorView) => number
    remove_current: (obj: EditorView) => void
}

abstract class EditorViewIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorViewIface

    static name: string
}

interface EditorZoomIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorZoomIface

    g_iface: EditorIface
    in_: (obj: EditorZoom) => void
    out: (obj: EditorZoom) => void
}

abstract class EditorZoomIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorZoomIface

    static name: string
}

interface EnvironmentIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EnvironmentIface

    g_iface: GObject.TypeInterface
    get_real_directory: (obj: Environment, dir: string) => string
    override: (obj: Environment, dirp: string, argvp: string, envp: string) => boolean
}

abstract class EnvironmentIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EnvironmentIface

    static name: string
}

interface FileIface {

    // Own fields of IAnjuta-3.0.IAnjuta.FileIface

    g_iface: GObject.TypeInterface
    opened: (obj: File) => void
    get_file: (obj: File) => Gio.File
    open: (obj: File, file: Gio.File) => void
}

abstract class FileIface {

    // Own properties of IAnjuta-3.0.IAnjuta.FileIface

    static name: string
}

interface FileLoaderIface {

    // Own fields of IAnjuta-3.0.IAnjuta.FileLoaderIface

    g_iface: LoaderIface
    peek_interface: (obj: FileLoader, file: Gio.File) => string
}

abstract class FileLoaderIface {

    // Own properties of IAnjuta-3.0.IAnjuta.FileLoaderIface

    static name: string
}

interface FileManagerIface {

    // Own fields of IAnjuta-3.0.IAnjuta.FileManagerIface

    g_iface: GObject.TypeInterface
    section_changed: (obj: FileManager, file: Gio.File) => void
    set_root: (obj: FileManager, root_uri: string) => void
    set_selected: (obj: FileManager, file: Gio.File) => void
}

abstract class FileManagerIface {

    // Own properties of IAnjuta-3.0.IAnjuta.FileManagerIface

    static name: string
}

interface FileSavableIface {

    // Own fields of IAnjuta-3.0.IAnjuta.FileSavableIface

    g_iface: FileIface
    saved: (obj: FileSavable, file: Gio.File) => void
    update_save_ui: (obj: FileSavable) => void
    is_conflict: (obj: FileSavable) => boolean
    is_dirty: (obj: FileSavable) => boolean
    is_read_only: (obj: FileSavable) => boolean
    save: (obj: FileSavable) => void
    save_as: (obj: FileSavable, file: Gio.File) => void
    set_dirty: (obj: FileSavable, dirty: boolean) => void
}

abstract class FileSavableIface {

    // Own properties of IAnjuta-3.0.IAnjuta.FileSavableIface

    static name: string
}

interface GladeIface {

    // Own fields of IAnjuta-3.0.IAnjuta.GladeIface

    g_iface: GObject.TypeInterface
    add_association: (obj: Glade, master: string, slave: string) => void
}

abstract class GladeIface {

    // Own properties of IAnjuta-3.0.IAnjuta.GladeIface

    static name: string
}

interface HelpIface {

    // Own fields of IAnjuta-3.0.IAnjuta.HelpIface

    g_iface: GObject.TypeInterface
    search: (obj: Help, query: string) => void
}

abstract class HelpIface {

    // Own properties of IAnjuta-3.0.IAnjuta.HelpIface

    static name: string
}

interface IndenterIface {

    // Own fields of IAnjuta-3.0.IAnjuta.IndenterIface

    g_iface: GObject.TypeInterface
    indent: (obj: Indenter, start: Iterable, end: Iterable) => void
}

abstract class IndenterIface {

    // Own properties of IAnjuta-3.0.IAnjuta.IndenterIface

    static name: string
}

interface IndicableIface {

    // Own fields of IAnjuta-3.0.IAnjuta.IndicableIface

    g_iface: GObject.TypeInterface
    clear: (obj: Indicable) => void
    set: (obj: Indicable, begin_location: Iterable, end_location: Iterable, indicator: IndicableIndicator) => void
}

abstract class IndicableIface {

    // Own properties of IAnjuta-3.0.IAnjuta.IndicableIface

    static name: string
}

interface IterableIface {

    // Own fields of IAnjuta-3.0.IAnjuta.IterableIface

    g_iface: GObject.TypeInterface
    assign: (obj: Iterable, src_iter: Iterable) => void
    clone: (obj: Iterable) => Iterable
    compare: (obj: Iterable, iter2: Iterable) => number
    diff: (obj: Iterable, iter2: Iterable) => number
    first: (obj: Iterable) => boolean
    get_length: (obj: Iterable) => number
    get_position: (obj: Iterable) => number
    last: (obj: Iterable) => boolean
    next: (obj: Iterable) => boolean
    previous: (obj: Iterable) => boolean
    set_position: (obj: Iterable, position: number) => boolean
}

abstract class IterableIface {

    // Own properties of IAnjuta-3.0.IAnjuta.IterableIface

    static name: string
}

interface IterableTreeIface {

    // Own fields of IAnjuta-3.0.IAnjuta.IterableTreeIface

    g_iface: IterableIface
    children: (obj: IterableTree) => boolean
    has_children: (obj: IterableTree) => boolean
    parent: (obj: IterableTree) => boolean
}

abstract class IterableTreeIface {

    // Own properties of IAnjuta-3.0.IAnjuta.IterableTreeIface

    static name: string
}

interface LanguageIface {

    // Own fields of IAnjuta-3.0.IAnjuta.LanguageIface

    g_iface: GObject.TypeInterface
    get_from_editor: (obj: Language, editor: EditorLanguage) => LanguageId
    get_from_mime_type: (obj: Language, mime_type: string) => LanguageId
    get_from_string: (obj: Language, string: string) => LanguageId
    get_languages: (obj: Language) => number[]
    get_make_target: (obj: Language, id: LanguageId) => string
    get_name: (obj: Language, id: LanguageId) => string
    get_name_from_editor: (obj: Language, editor: EditorLanguage) => string
}

abstract class LanguageIface {

    // Own properties of IAnjuta-3.0.IAnjuta.LanguageIface

    static name: string
}

interface LanguageProviderIface {

    // Own fields of IAnjuta-3.0.IAnjuta.LanguageProviderIface

    g_iface: ProviderIface
    get_calltip_cache: (obj: LanguageProvider, call_context: string) => string[]
    get_calltip_context: (obj: LanguageProvider, iter: Iterable) => string
    new_calltip: (obj: LanguageProvider, call_context: string, iter: Iterable) => void
    populate_completions: (obj: LanguageProvider, iter: Iterable) => Iterable | null
}

abstract class LanguageProviderIface {

    // Own properties of IAnjuta-3.0.IAnjuta.LanguageProviderIface

    static name: string
}

interface LoaderIface {

    // Own fields of IAnjuta-3.0.IAnjuta.LoaderIface

    g_iface: GObject.TypeInterface
}

abstract class LoaderIface {

    // Own properties of IAnjuta-3.0.IAnjuta.LoaderIface

    static name: string
}

interface MarkableIface {

    // Own fields of IAnjuta-3.0.IAnjuta.MarkableIface

    g_iface: GObject.TypeInterface
    marker_clicked: (obj: Markable, double_click: boolean, location: number) => void
    delete_all_markers: (obj: Markable, marker: MarkableMarker) => void
    is_marker_set: (obj: Markable, location: number, marker: MarkableMarker) => boolean
    location_from_handle: (obj: Markable, handle: number) => number
    mark: (obj: Markable, location: number, marker: MarkableMarker, tooltip: string | null) => number
    unmark: (obj: Markable, location: number, marker: MarkableMarker) => void
}

abstract class MarkableIface {

    // Own properties of IAnjuta-3.0.IAnjuta.MarkableIface

    static name: string
}

interface MessageManagerIface {

    // Own fields of IAnjuta-3.0.IAnjuta.MessageManagerIface

    g_iface: GObject.TypeInterface
    remove_view: (obj: MessageManager, view: MessageView) => void
    set_current_view: (obj: MessageManager, view: MessageView) => void
    set_view_icon: (obj: MessageManager, view: MessageView, icon: GdkPixbuf.PixbufAnimation) => void
    set_view_icon_from_stock: (obj: MessageManager, view: MessageView, icon: string) => void
    set_view_title: (obj: MessageManager, view: MessageView, title: string) => void
}

abstract class MessageManagerIface {

    // Own properties of IAnjuta-3.0.IAnjuta.MessageManagerIface

    static name: string
}

interface MessageViewIface {

    // Own fields of IAnjuta-3.0.IAnjuta.MessageViewIface

    g_iface: GObject.TypeInterface
    buffer_flushed: (obj: MessageView, line: string) => void
    message_clicked: (obj: MessageView, message: string) => void
    append: (obj: MessageView, type: MessageViewType, summary: string, details: string) => void
    buffer_append: (obj: MessageView, text: string) => void
    clear: (obj: MessageView) => void
    get_current_message: (obj: MessageView) => string
    select_next: (obj: MessageView) => void
    select_previous: (obj: MessageView) => void
}

abstract class MessageViewIface {

    // Own properties of IAnjuta-3.0.IAnjuta.MessageViewIface

    static name: string
}

interface PluginFactoryIface {

    // Own fields of IAnjuta-3.0.IAnjuta.PluginFactoryIface

    g_iface: GObject.TypeInterface
}

abstract class PluginFactoryIface {

    // Own properties of IAnjuta-3.0.IAnjuta.PluginFactoryIface

    static name: string
}

interface PreferencesIface {

    // Own fields of IAnjuta-3.0.IAnjuta.PreferencesIface

    g_iface: GObject.TypeInterface
    merge: (obj: Preferences, prefs: Anjuta.Preferences) => void
    unmerge: (obj: Preferences, prefs: Anjuta.Preferences) => void
}

abstract class PreferencesIface {

    // Own properties of IAnjuta-3.0.IAnjuta.PreferencesIface

    static name: string
}

interface PrintIface {

    // Own fields of IAnjuta-3.0.IAnjuta.PrintIface

    g_iface: GObject.TypeInterface
    print: (obj: Print) => void
    print_preview: (obj: Print) => void
}

abstract class PrintIface {

    // Own properties of IAnjuta-3.0.IAnjuta.PrintIface

    static name: string
}

interface ProjectBackendIface {

    // Own fields of IAnjuta-3.0.IAnjuta.ProjectBackendIface

    g_iface: GObject.TypeInterface
    new_project: (obj: ProjectBackend, file: Gio.File) => Project
    probe: (obj: ProjectBackend, directory: Gio.File) => number
}

abstract class ProjectBackendIface {

    // Own properties of IAnjuta-3.0.IAnjuta.ProjectBackendIface

    static name: string
}

interface ProjectChooserIface {

    // Own fields of IAnjuta-3.0.IAnjuta.ProjectChooserIface

    g_iface: GObject.TypeInterface
    changed: (obj: ProjectChooser) => void
    get_selected: (obj: ProjectChooser) => Gio.File
    set_project_model: (obj: ProjectChooser, manager: ProjectManager, child_type: Anjuta.ProjectNodeType) => boolean
}

abstract class ProjectChooserIface {

    // Own properties of IAnjuta-3.0.IAnjuta.ProjectChooserIface

    static name: string
}

interface ProjectIface {

    // Own fields of IAnjuta-3.0.IAnjuta.ProjectIface

    g_iface: GObject.TypeInterface
    file_changed: (obj: Project, node: object | null) => void
    node_changed: (obj: Project, node: object | null, error: GLib.Error) => void
    node_loaded: (obj: Project, node: object | null, error: GLib.Error) => void
    node_saved: (obj: Project, node: object | null, error: GLib.Error) => void
    add_node_after: (obj: Project, parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file: Gio.File | null, name: string | null) => Anjuta.ProjectNode
    add_node_before: (obj: Project, parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file: Gio.File | null, name: string | null) => Anjuta.ProjectNode
    get_node_info: (obj: Project) => Anjuta.ProjectNodeInfo[]
    get_root: (obj: Project) => Anjuta.ProjectNode
    is_loaded: (obj: Project) => boolean
    load_node: (obj: Project, node: Anjuta.ProjectNode) => boolean
    remove_node: (obj: Project, node: Anjuta.ProjectNode) => boolean
    remove_property: (obj: Project, node: Anjuta.ProjectNode, id: string, name: string | null) => boolean
    save_node: (obj: Project, node: Anjuta.ProjectNode) => boolean
    set_property: (obj: Project, node: Anjuta.ProjectNode, id: string, name: string | null, value: string) => Anjuta.ProjectProperty | null
}

abstract class ProjectIface {

    // Own properties of IAnjuta-3.0.IAnjuta.ProjectIface

    static name: string
}

interface ProjectManagerIface {

    // Own fields of IAnjuta-3.0.IAnjuta.ProjectManagerIface

    g_iface: GObject.TypeInterface
    element_added: (obj: ProjectManager, element: Gio.File) => void
    element_removed: (obj: ProjectManager, element: Gio.File) => void
    element_selected: (obj: ProjectManager, element: Gio.File) => void
    project_loaded: (obj: ProjectManager, error: GLib.Error) => void
    add_group: (obj: ProjectManager, name: string, default_group: Gio.File | null) => Gio.File
    add_source: (obj: ProjectManager, name: string, default_target: Gio.File | null) => Gio.File
    add_source_quiet: (obj: ProjectManager, name: string, target: Gio.File) => Gio.File
    add_sources: (obj: ProjectManager, names: string[], default_target: Gio.File | null) => Gio.File[]
    add_target: (obj: ProjectManager, name: string, default_group: Gio.File | null) => Gio.File
    get_capabilities: (obj: ProjectManager) => number
    get_children: (obj: ProjectManager, parent: Gio.File, children_type: number) => Gio.File[]
    get_current_project: (obj: ProjectManager) => Project
    get_elements: (obj: ProjectManager, element_type: Anjuta.ProjectNodeType) => Gio.File[]
    get_packages: (obj: ProjectManager) => string[]
    get_selected: (obj: ProjectManager) => Gio.File
    get_target_type: (obj: ProjectManager, target: Gio.File) => Anjuta.ProjectNodeType
    get_targets: (obj: ProjectManager, target_type: Anjuta.ProjectNodeType) => Gio.File[]
    is_open: (obj: ProjectManager) => boolean
    remove_file: (obj: ProjectManager, file: Gio.File) => boolean
}

abstract class ProjectManagerIface {

    // Own properties of IAnjuta-3.0.IAnjuta.ProjectManagerIface

    static name: string
}

interface ProviderIface {

    // Own fields of IAnjuta-3.0.IAnjuta.ProviderIface

    g_iface: GObject.TypeInterface
    activate: (obj: Provider, iter: Iterable, data: object | null) => void
    get_name: (obj: Provider) => string
    get_start_iter: (obj: Provider) => Iterable
    populate: (obj: Provider, iter: Iterable) => void
}

abstract class ProviderIface {

    // Own properties of IAnjuta-3.0.IAnjuta.ProviderIface

    static name: string
}

interface SnippetsManagerIface {

    // Own fields of IAnjuta-3.0.IAnjuta.SnippetsManagerIface

    g_iface: GObject.TypeInterface
    insert: (obj: SnippetsManager, key: string, editing_session: boolean) => boolean
}

abstract class SnippetsManagerIface {

    // Own properties of IAnjuta-3.0.IAnjuta.SnippetsManagerIface

    static name: string
}

interface StreamIface {

    // Own fields of IAnjuta-3.0.IAnjuta.StreamIface

    g_iface: GObject.TypeInterface
    open: (obj: Stream, stream: object | null) => void
}

abstract class StreamIface {

    // Own properties of IAnjuta-3.0.IAnjuta.StreamIface

    static name: string
}

interface StreamLoaderIface {

    // Own fields of IAnjuta-3.0.IAnjuta.StreamLoaderIface

    g_iface: LoaderIface
    peek_interface: (obj: StreamLoader, stream: object | null) => string
}

abstract class StreamLoaderIface {

    // Own properties of IAnjuta-3.0.IAnjuta.StreamLoaderIface

    static name: string
}

interface StreamSavableIface {

    // Own fields of IAnjuta-3.0.IAnjuta.StreamSavableIface

    g_iface: StreamIface
    save: (obj: StreamSavable, stream: object | null) => void
}

abstract class StreamSavableIface {

    // Own properties of IAnjuta-3.0.IAnjuta.StreamSavableIface

    static name: string
}

interface SymbolIface {

    // Own fields of IAnjuta-3.0.IAnjuta.SymbolIface

    g_iface: GObject.TypeInterface
    get_boolean: (obj: Symbol, field: SymbolField) => boolean
    get_icon: (obj: Symbol) => GdkPixbuf.Pixbuf
    get_int: (obj: Symbol, field: SymbolField) => number
    get_string: (obj: Symbol, field: SymbolField) => string
    get_sym_type: (obj: Symbol) => SymbolType
}

abstract class SymbolIface {

    // Own properties of IAnjuta-3.0.IAnjuta.SymbolIface

    static name: string
}

interface SymbolManagerIface {

    // Own fields of IAnjuta-3.0.IAnjuta.SymbolManagerIface

    g_iface: GObject.TypeInterface
    prj_scan_end: (obj: SymbolManager, process_id: number) => void
    sys_scan_end: (obj: SymbolManager, process_id: number) => void
    activate_package: (obj: SymbolManager, pkg_name: string, pkg_version: string) => boolean
    deactivate_all: (obj: SymbolManager) => void
    deactivate_package: (obj: SymbolManager, pkg_name: string, pkg_version: string) => void
}

abstract class SymbolManagerIface {

    // Own properties of IAnjuta-3.0.IAnjuta.SymbolManagerIface

    static name: string
}

interface SymbolQueryIface {

    // Own fields of IAnjuta-3.0.IAnjuta.SymbolQueryIface

    g_iface: GObject.TypeInterface
    async_result: (obj: SymbolQuery, result: GObject.Object) => void
    cancel: (obj: SymbolQuery) => void
    set_fields: (obj: SymbolQuery, n_fields: number, fields: SymbolField) => void
    set_file_scope: (obj: SymbolQuery, filescope_search: SymbolQueryFileScope) => void
    set_filters: (obj: SymbolQuery, filters: SymbolType, include_types: boolean) => void
    set_group_by: (obj: SymbolQuery, field: SymbolField) => void
    set_limit: (obj: SymbolQuery, limit: number) => void
    set_mode: (obj: SymbolQuery, mode: SymbolQueryMode) => void
    set_offset: (obj: SymbolQuery, offset: number) => void
    set_order_by: (obj: SymbolQuery, field: SymbolField) => void
}

abstract class SymbolQueryIface {

    // Own properties of IAnjuta-3.0.IAnjuta.SymbolQueryIface

    static name: string
}

interface TerminalIface {

    // Own fields of IAnjuta-3.0.IAnjuta.TerminalIface

    g_iface: GObject.TypeInterface
    child_exited: (obj: Terminal, pid: number, status: number) => void
    execute_command: (obj: Terminal, directory: string, command: string, environment: string[]) => number
}

abstract class TerminalIface {

    // Own properties of IAnjuta-3.0.IAnjuta.TerminalIface

    static name: string
}

interface TodoIface {

    // Own fields of IAnjuta-3.0.IAnjuta.TodoIface

    g_iface: GObject.TypeInterface
    load: (obj: Todo, file: Gio.File) => void
}

abstract class TodoIface {

    // Own properties of IAnjuta-3.0.IAnjuta.TodoIface

    static name: string
}

interface VcsIface {

    // Own fields of IAnjuta-3.0.IAnjuta.VcsIface

    g_iface: GObject.TypeInterface
    status_changed: (obj: Vcs) => void
    add: (obj: Vcs, files: Gio.File[], notify: Anjuta.AsyncNotify) => void
    checkout: (obj: Vcs, repository_location: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify) => void
    remove: (obj: Vcs, files: Gio.File[], notify: Anjuta.AsyncNotify) => void
}

abstract class VcsIface {

    // Own properties of IAnjuta-3.0.IAnjuta.VcsIface

    static name: string
}

interface WizardIface {

    // Own fields of IAnjuta-3.0.IAnjuta.WizardIface

    g_iface: GObject.TypeInterface
    activate: (obj: Wizard) => void
}

abstract class WizardIface {

    // Own properties of IAnjuta-3.0.IAnjuta.WizardIface

    static name: string
}

    type BuilderHandle = object
    type LanguageId = number
}
export default IAnjuta;