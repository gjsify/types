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
 */
interface DebuggerBreakpointCallback {
    (data: DebuggerBreakpointItem, err: GLib.Error): void
}
/**
 * This callback function is used only by #ianjuta_debugger_callback with a
 * NULL data.
 */
interface DebuggerCallback {
    (data: object | null, err: GLib.Error): void
}
/**
 * This callback function is used by several debugger functions. The data is
 * a string
 */
interface DebuggerGCharCallback {
    (value: string, err: GLib.Error): void
}
/**
 * This callback function is used to return a #IAnjutaDebuggerInstructionDisassembly.
 */
interface DebuggerInstructionCallback {
    (data: DebuggerInstructionDisassembly, err: GLib.Error): void
}
/**
 * This callback function is used to return a #IAnjutaDebuggerMemoryBlock.
 */
interface DebuggerMemoryCallback {
    (data: DebuggerMemoryBlock, err: GLib.Error): void
}
/**
 * This callback function is used only by #ianjuta_debugger_callback with a
 * NULL data.
 */
interface DebuggerOutputCallback {
    (type: DebuggerOutputType, output: string): void
}
/**
 * This callback function is used to return a #IAnjutaDebuggerVariableObject.
 */
interface DebuggerVariableCallback {
    (data: DebuggerVariableObject, err: GLib.Error): void
}
/**
 * Called when diff data comes from ianjuta_vcs_diff.
 */
interface VcsDiffCallback {
    (file: Gio.File, diff: string): void
}
/**
 * Callback called for each status record returned by
 * ianjuta_vcs_query_status.
 */
interface VcsStatusCallback {
    (file: Gio.File, status: Anjuta.VcsStatus): void
}
class Buildable {
    /* Methods of IAnjuta-3.0.IAnjuta.Buildable */
    /**
     * fixme
     */
    build(uri: string): void
    /**
     * fixme
     */
    clean(uri: string): void
    /**
     * fixme
     */
    configure(uri: string): void
    /**
     * fixme
     */
    execute(uri: string): void
    /**
     * fixme
     */
    generate(uri: string): void
    /**
     * Retrieves the currently set command override.
     */
    get_command(command_id: BuildableCommand): string
    /**
     * fixme
     */
    install(uri: string): void
    /**
     * Resets the command overrides to defaults.
     */
    reset_commands(): void
    /**
     * Overrides the default command for the given command.
     */
    set_command(command_id: BuildableCommand, command: string): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Buildable */
    /**
     * fixme
     */
    vfunc_build(uri: string): void
    /**
     * fixme
     */
    vfunc_clean(uri: string): void
    /**
     * fixme
     */
    vfunc_configure(uri: string): void
    /**
     * fixme
     */
    vfunc_execute(uri: string): void
    /**
     * fixme
     */
    vfunc_generate(uri: string): void
    /**
     * Retrieves the currently set command override.
     */
    vfunc_get_command(command_id: BuildableCommand): string
    /**
     * fixme
     */
    vfunc_install(uri: string): void
    /**
     * Resets the command overrides to defaults.
     */
    vfunc_reset_commands(): void
    /**
     * Overrides the default command for the given command.
     */
    vfunc_set_command(command_id: BuildableCommand, command: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Builder {
    /* Methods of IAnjuta-3.0.IAnjuta.Builder */
    /**
     * Cancel specified command. The callback function will not
     * be called.
     */
    cancel(handle: BuilderHandle): void
    /**
     * Get the configuration corresponding to the target uri.
     */
    get_uri_configuration(uri: string): string
    /**
     * List all defined configuration. These names returned are
     * the internal non localized names for the following
     * predefined configuration: Debug, Profiling, Optimized.
     * The default configuration has no name and is not returned.
     */
    list_configuration(): string[]
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Builder */
    /**
     * Cancel specified command. The callback function will not
     * be called.
     */
    vfunc_cancel(handle: BuilderHandle): void
    /**
     * Get the configuration corresponding to the target uri.
     */
    vfunc_get_uri_configuration(uri: string): string
    /**
     * List all defined configuration. These names returned are
     * the internal non localized names for the following
     * predefined configuration: Debug, Profiling, Optimized.
     * The default configuration has no name and is not returned.
     */
    vfunc_list_configuration(): string[]
    static name: string
}
class DebugManager {
    /* Methods of IAnjuta-3.0.IAnjuta.DebugManager */
    /**
     * Quit the debugger, can wait until the debugger is ready.
     */
    quit(): boolean
    /**
     * Start the debugger of the given uri
     */
    start(uri: string): boolean
    /**
     * Start the debugger of the given uri
     */
    start_remote(server: string, uri: string): boolean
    /* Virtual methods of IAnjuta-3.0.IAnjuta.DebugManager */
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
     */
    vfunc_quit(): boolean
    vfunc_sharedlib_event(): void
    vfunc_signal_received(name: string, description: string): void
    /**
     * Start the debugger of the given uri
     */
    vfunc_start(uri: string): boolean
    /**
     * Start the debugger of the given uri
     */
    vfunc_start_remote(server: string, uri: string): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.DebugManager */
    connect(sigName: "breakpoint-changed", callback: (($obj: DebugManager, object?: object | null) => void)): number
    connect_after(sigName: "breakpoint-changed", callback: (($obj: DebugManager, object?: object | null) => void)): number
    emit(sigName: "breakpoint-changed", object?: object | null): void
    connect(sigName: "debugger-started", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebugManager, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebugManager, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebugManager, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebugManager, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "location-changed", callback: (($obj: DebugManager, object: number, p0: string, p1: number) => void)): number
    connect_after(sigName: "location-changed", callback: (($obj: DebugManager, object: number, p0: string, p1: number) => void)): number
    emit(sigName: "location-changed", object: number, p0: string, p1: number): void
    connect(sigName: "program-exited", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebugManager, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebugManager, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-running"): void
    connect(sigName: "program-started", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-started", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-started"): void
    connect(sigName: "program-stopped", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-stopped"): void
    connect(sigName: "program-unloaded", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-unloaded", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-unloaded"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebugManager, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebugManager, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Debugger {
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    abort(): boolean
    /**
     * Attach to an already running process.
     */
    attach(pid: number, source_search_directories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     */
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Disable debugger log.
     */
    disable_log(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
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
     */
    handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    interrupt(): boolean
    /**
     * Load a program in the debugger.
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
     */
    run_from(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     */
    run_to(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     */
    send_command(command: string): boolean
    /**
     * Set environment variable
     */
    set_environment(env: string): boolean
    /**
     * Set the current frame.
     */
    set_frame(frame: number): boolean
    /**
     * Set the current thread.
     */
    set_thread(thread: number): boolean
    /**
     * Set program working directory.
     */
    set_working_directory(dir: string): boolean
    /**
     * Start a loaded program under debugger control.
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
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    vfunc_abort(): boolean
    /**
     * Attach to an already running process.
     */
    vfunc_attach(pid: number, source_search_directories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     */
    vfunc_connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfunc_debugger_ready(state: DebuggerState): void
    vfunc_debugger_started(): void
    vfunc_debugger_stopped(err: GLib.Error): void
    /**
     * Disable debugger log.
     */
    vfunc_disable_log(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
     */
    vfunc_enable_log(log: MessageView): void
    /**
     * Exit from the currently loaded program.
     */
    vfunc_exit(): boolean
    vfunc_frame_changed(frame: number, thread: number): void
    /**
     * Get the current state of the debugger
     */
    vfunc_get_state(): DebuggerState
    /**
     * It defines how to handle signal received by the program.
     */
    vfunc_handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    vfunc_interrupt(): boolean
    /**
     * Load a program in the debugger.
     */
    vfunc_load(file: string, mime_type: string, source_search_directories: string[]): boolean
    vfunc_program_exited(): void
    vfunc_program_loaded(): void
    vfunc_program_moved(pid: number, tid: number, address: number, file: string, line: number): void
    vfunc_program_running(): void
    vfunc_program_stopped(): void
    /**
     * Quit the debugger, can wait until the debugger is ready.
     */
    vfunc_quit(): boolean
    /**
     * Run the program currently loaded.
     */
    vfunc_run(): boolean
    /**
     * Execute the program from a new position.
     * This function is optional.
     */
    vfunc_run_from(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     */
    vfunc_run_to(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     */
    vfunc_send_command(command: string): boolean
    /**
     * Set environment variable
     */
    vfunc_set_environment(env: string): boolean
    /**
     * Set the current frame.
     */
    vfunc_set_frame(frame: number): boolean
    /**
     * Set the current thread.
     */
    vfunc_set_thread(thread: number): boolean
    /**
     * Set program working directory.
     */
    vfunc_set_working_directory(dir: string): boolean
    vfunc_sharedlib_event(): void
    vfunc_signal_received(name: string, description: string): void
    /**
     * Start a loaded program under debugger control.
     */
    vfunc_start(args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Execute a single C instruction of the program currently loaded.
     */
    vfunc_step_in(): boolean
    /**
     * Execute the currently loaded program until it goes out of the
     * current procedure.
     */
    vfunc_step_out(): boolean
    /**
     * Execute one C instruction, without entering in procedure, of
     * the program currently loaded.
     */
    vfunc_step_over(): boolean
    /**
     * Unload a program.
     */
    vfunc_unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: Debugger, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: Debugger, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: Debugger) => void)): number
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: Debugger, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: Debugger, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: Debugger, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: Debugger, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: Debugger) => void)): number
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: Debugger) => void)): number
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: Debugger, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: Debugger, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: Debugger) => void)): number
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: Debugger) => void)): number
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: Debugger) => void)): number
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: Debugger, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: Debugger, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
}
class DebuggerBreakpoint {
    /* Methods of IAnjuta-3.0.IAnjuta.DebuggerBreakpoint */
    /**
     * Return all implemented methods.
     */
    implement_breakpoint(): number
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    abort(): boolean
    /**
     * Attach to an already running process.
     */
    attach(pid: number, source_search_directories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     */
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Disable debugger log.
     */
    disable_log(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
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
     */
    handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    interrupt(): boolean
    /**
     * Load a program in the debugger.
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
     */
    run_from(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     */
    run_to(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     */
    send_command(command: string): boolean
    /**
     * Set environment variable
     */
    set_environment(env: string): boolean
    /**
     * Set the current frame.
     */
    set_frame(frame: number): boolean
    /**
     * Set the current thread.
     */
    set_thread(thread: number): boolean
    /**
     * Set program working directory.
     */
    set_working_directory(dir: string): boolean
    /**
     * Start a loaded program under debugger control.
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
    /* Virtual methods of IAnjuta-3.0.IAnjuta.DebuggerBreakpoint */
    /**
     * Return all implemented methods.
     */
    vfunc_implement_breakpoint(): number
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    vfunc_abort(): boolean
    /**
     * Attach to an already running process.
     */
    vfunc_attach(pid: number, source_search_directories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     */
    vfunc_connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfunc_debugger_ready(state: DebuggerState): void
    vfunc_debugger_started(): void
    vfunc_debugger_stopped(err: GLib.Error): void
    /**
     * Disable debugger log.
     */
    vfunc_disable_log(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
     */
    vfunc_enable_log(log: MessageView): void
    /**
     * Exit from the currently loaded program.
     */
    vfunc_exit(): boolean
    vfunc_frame_changed(frame: number, thread: number): void
    /**
     * Get the current state of the debugger
     */
    vfunc_get_state(): DebuggerState
    /**
     * It defines how to handle signal received by the program.
     */
    vfunc_handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    vfunc_interrupt(): boolean
    /**
     * Load a program in the debugger.
     */
    vfunc_load(file: string, mime_type: string, source_search_directories: string[]): boolean
    vfunc_program_exited(): void
    vfunc_program_loaded(): void
    vfunc_program_moved(pid: number, tid: number, address: number, file: string, line: number): void
    vfunc_program_running(): void
    vfunc_program_stopped(): void
    /**
     * Quit the debugger, can wait until the debugger is ready.
     */
    vfunc_quit(): boolean
    /**
     * Run the program currently loaded.
     */
    vfunc_run(): boolean
    /**
     * Execute the program from a new position.
     * This function is optional.
     */
    vfunc_run_from(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     */
    vfunc_run_to(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     */
    vfunc_send_command(command: string): boolean
    /**
     * Set environment variable
     */
    vfunc_set_environment(env: string): boolean
    /**
     * Set the current frame.
     */
    vfunc_set_frame(frame: number): boolean
    /**
     * Set the current thread.
     */
    vfunc_set_thread(thread: number): boolean
    /**
     * Set program working directory.
     */
    vfunc_set_working_directory(dir: string): boolean
    vfunc_sharedlib_event(): void
    vfunc_signal_received(name: string, description: string): void
    /**
     * Start a loaded program under debugger control.
     */
    vfunc_start(args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Execute a single C instruction of the program currently loaded.
     */
    vfunc_step_in(): boolean
    /**
     * Execute the currently loaded program until it goes out of the
     * current procedure.
     */
    vfunc_step_out(): boolean
    /**
     * Execute one C instruction, without entering in procedure, of
     * the program currently loaded.
     */
    vfunc_step_over(): boolean
    /**
     * Unload a program.
     */
    vfunc_unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerBreakpoint, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: DebuggerBreakpoint, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerBreakpoint, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebuggerBreakpoint, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebuggerBreakpoint, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebuggerBreakpoint, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebuggerBreakpoint, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebuggerBreakpoint, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebuggerBreakpoint, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebuggerBreakpoint, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class DebuggerInstruction {
    /* Methods of IAnjuta-3.0.IAnjuta.DebuggerInstruction */
    /**
     * Restart the program starting from address address
     */
    run_from_address(address: number): boolean
    /**
     * Start the program until it reachs the address address
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
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    abort(): boolean
    /**
     * Attach to an already running process.
     */
    attach(pid: number, source_search_directories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     */
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Disable debugger log.
     */
    disable_log(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
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
     */
    handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    interrupt(): boolean
    /**
     * Load a program in the debugger.
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
     */
    run_from(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     */
    run_to(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     */
    send_command(command: string): boolean
    /**
     * Set environment variable
     */
    set_environment(env: string): boolean
    /**
     * Set the current frame.
     */
    set_frame(frame: number): boolean
    /**
     * Set the current thread.
     */
    set_thread(thread: number): boolean
    /**
     * Set program working directory.
     */
    set_working_directory(dir: string): boolean
    /**
     * Start a loaded program under debugger control.
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
    /* Virtual methods of IAnjuta-3.0.IAnjuta.DebuggerInstruction */
    /**
     * Restart the program starting from address address
     */
    vfunc_run_from_address(address: number): boolean
    /**
     * Start the program until it reachs the address address
     */
    vfunc_run_to_address(address: number): boolean
    /**
     * Execute one assembler instruction in the program.
     */
    vfunc_step_in_instruction(): boolean
    /**
     * Execute one assembler instruction in the program, if the instruction
     * is a function call, continues until the function returns.
     */
    vfunc_step_over_instruction(): boolean
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    vfunc_abort(): boolean
    /**
     * Attach to an already running process.
     */
    vfunc_attach(pid: number, source_search_directories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     */
    vfunc_connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfunc_debugger_ready(state: DebuggerState): void
    vfunc_debugger_started(): void
    vfunc_debugger_stopped(err: GLib.Error): void
    /**
     * Disable debugger log.
     */
    vfunc_disable_log(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
     */
    vfunc_enable_log(log: MessageView): void
    /**
     * Exit from the currently loaded program.
     */
    vfunc_exit(): boolean
    vfunc_frame_changed(frame: number, thread: number): void
    /**
     * Get the current state of the debugger
     */
    vfunc_get_state(): DebuggerState
    /**
     * It defines how to handle signal received by the program.
     */
    vfunc_handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    vfunc_interrupt(): boolean
    /**
     * Load a program in the debugger.
     */
    vfunc_load(file: string, mime_type: string, source_search_directories: string[]): boolean
    vfunc_program_exited(): void
    vfunc_program_loaded(): void
    vfunc_program_moved(pid: number, tid: number, address: number, file: string, line: number): void
    vfunc_program_running(): void
    vfunc_program_stopped(): void
    /**
     * Quit the debugger, can wait until the debugger is ready.
     */
    vfunc_quit(): boolean
    /**
     * Run the program currently loaded.
     */
    vfunc_run(): boolean
    /**
     * Execute the program from a new position.
     * This function is optional.
     */
    vfunc_run_from(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     */
    vfunc_run_to(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     */
    vfunc_send_command(command: string): boolean
    /**
     * Set environment variable
     */
    vfunc_set_environment(env: string): boolean
    /**
     * Set the current frame.
     */
    vfunc_set_frame(frame: number): boolean
    /**
     * Set the current thread.
     */
    vfunc_set_thread(thread: number): boolean
    /**
     * Set program working directory.
     */
    vfunc_set_working_directory(dir: string): boolean
    vfunc_sharedlib_event(): void
    vfunc_signal_received(name: string, description: string): void
    /**
     * Start a loaded program under debugger control.
     */
    vfunc_start(args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Execute a single C instruction of the program currently loaded.
     */
    vfunc_step_in(): boolean
    /**
     * Execute the currently loaded program until it goes out of the
     * current procedure.
     */
    vfunc_step_out(): boolean
    /**
     * Execute one C instruction, without entering in procedure, of
     * the program currently loaded.
     */
    vfunc_step_over(): boolean
    /**
     * Unload a program.
     */
    vfunc_unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerInstruction, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: DebuggerInstruction, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerInstruction, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebuggerInstruction, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebuggerInstruction, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebuggerInstruction, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebuggerInstruction, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebuggerInstruction, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebuggerInstruction, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebuggerInstruction, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class DebuggerMemory {
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    abort(): boolean
    /**
     * Attach to an already running process.
     */
    attach(pid: number, source_search_directories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     */
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Disable debugger log.
     */
    disable_log(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
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
     */
    handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    interrupt(): boolean
    /**
     * Load a program in the debugger.
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
     */
    run_from(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     */
    run_to(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     */
    send_command(command: string): boolean
    /**
     * Set environment variable
     */
    set_environment(env: string): boolean
    /**
     * Set the current frame.
     */
    set_frame(frame: number): boolean
    /**
     * Set the current thread.
     */
    set_thread(thread: number): boolean
    /**
     * Set program working directory.
     */
    set_working_directory(dir: string): boolean
    /**
     * Start a loaded program under debugger control.
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
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    vfunc_abort(): boolean
    /**
     * Attach to an already running process.
     */
    vfunc_attach(pid: number, source_search_directories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     */
    vfunc_connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfunc_debugger_ready(state: DebuggerState): void
    vfunc_debugger_started(): void
    vfunc_debugger_stopped(err: GLib.Error): void
    /**
     * Disable debugger log.
     */
    vfunc_disable_log(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
     */
    vfunc_enable_log(log: MessageView): void
    /**
     * Exit from the currently loaded program.
     */
    vfunc_exit(): boolean
    vfunc_frame_changed(frame: number, thread: number): void
    /**
     * Get the current state of the debugger
     */
    vfunc_get_state(): DebuggerState
    /**
     * It defines how to handle signal received by the program.
     */
    vfunc_handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    vfunc_interrupt(): boolean
    /**
     * Load a program in the debugger.
     */
    vfunc_load(file: string, mime_type: string, source_search_directories: string[]): boolean
    vfunc_program_exited(): void
    vfunc_program_loaded(): void
    vfunc_program_moved(pid: number, tid: number, address: number, file: string, line: number): void
    vfunc_program_running(): void
    vfunc_program_stopped(): void
    /**
     * Quit the debugger, can wait until the debugger is ready.
     */
    vfunc_quit(): boolean
    /**
     * Run the program currently loaded.
     */
    vfunc_run(): boolean
    /**
     * Execute the program from a new position.
     * This function is optional.
     */
    vfunc_run_from(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     */
    vfunc_run_to(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     */
    vfunc_send_command(command: string): boolean
    /**
     * Set environment variable
     */
    vfunc_set_environment(env: string): boolean
    /**
     * Set the current frame.
     */
    vfunc_set_frame(frame: number): boolean
    /**
     * Set the current thread.
     */
    vfunc_set_thread(thread: number): boolean
    /**
     * Set program working directory.
     */
    vfunc_set_working_directory(dir: string): boolean
    vfunc_sharedlib_event(): void
    vfunc_signal_received(name: string, description: string): void
    /**
     * Start a loaded program under debugger control.
     */
    vfunc_start(args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Execute a single C instruction of the program currently loaded.
     */
    vfunc_step_in(): boolean
    /**
     * Execute the currently loaded program until it goes out of the
     * current procedure.
     */
    vfunc_step_out(): boolean
    /**
     * Execute one C instruction, without entering in procedure, of
     * the program currently loaded.
     */
    vfunc_step_over(): boolean
    /**
     * Unload a program.
     */
    vfunc_unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerMemory, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: DebuggerMemory, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerMemory, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebuggerMemory, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebuggerMemory, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebuggerMemory, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebuggerMemory, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebuggerMemory, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebuggerMemory, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebuggerMemory, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class DebuggerRegister {
    /* Methods of IAnjuta-3.0.IAnjuta.DebuggerRegister */
    /**
     * Change the value of one register. Only the num and value field are used.
     */
    write_register(value: DebuggerRegisterData): boolean
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    abort(): boolean
    /**
     * Attach to an already running process.
     */
    attach(pid: number, source_search_directories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     */
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Disable debugger log.
     */
    disable_log(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
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
     */
    handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    interrupt(): boolean
    /**
     * Load a program in the debugger.
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
     */
    run_from(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     */
    run_to(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     */
    send_command(command: string): boolean
    /**
     * Set environment variable
     */
    set_environment(env: string): boolean
    /**
     * Set the current frame.
     */
    set_frame(frame: number): boolean
    /**
     * Set the current thread.
     */
    set_thread(thread: number): boolean
    /**
     * Set program working directory.
     */
    set_working_directory(dir: string): boolean
    /**
     * Start a loaded program under debugger control.
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
    /* Virtual methods of IAnjuta-3.0.IAnjuta.DebuggerRegister */
    /**
     * Change the value of one register. Only the num and value field are used.
     */
    vfunc_write_register(value: DebuggerRegisterData): boolean
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    vfunc_abort(): boolean
    /**
     * Attach to an already running process.
     */
    vfunc_attach(pid: number, source_search_directories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     */
    vfunc_connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfunc_debugger_ready(state: DebuggerState): void
    vfunc_debugger_started(): void
    vfunc_debugger_stopped(err: GLib.Error): void
    /**
     * Disable debugger log.
     */
    vfunc_disable_log(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
     */
    vfunc_enable_log(log: MessageView): void
    /**
     * Exit from the currently loaded program.
     */
    vfunc_exit(): boolean
    vfunc_frame_changed(frame: number, thread: number): void
    /**
     * Get the current state of the debugger
     */
    vfunc_get_state(): DebuggerState
    /**
     * It defines how to handle signal received by the program.
     */
    vfunc_handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    vfunc_interrupt(): boolean
    /**
     * Load a program in the debugger.
     */
    vfunc_load(file: string, mime_type: string, source_search_directories: string[]): boolean
    vfunc_program_exited(): void
    vfunc_program_loaded(): void
    vfunc_program_moved(pid: number, tid: number, address: number, file: string, line: number): void
    vfunc_program_running(): void
    vfunc_program_stopped(): void
    /**
     * Quit the debugger, can wait until the debugger is ready.
     */
    vfunc_quit(): boolean
    /**
     * Run the program currently loaded.
     */
    vfunc_run(): boolean
    /**
     * Execute the program from a new position.
     * This function is optional.
     */
    vfunc_run_from(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     */
    vfunc_run_to(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     */
    vfunc_send_command(command: string): boolean
    /**
     * Set environment variable
     */
    vfunc_set_environment(env: string): boolean
    /**
     * Set the current frame.
     */
    vfunc_set_frame(frame: number): boolean
    /**
     * Set the current thread.
     */
    vfunc_set_thread(thread: number): boolean
    /**
     * Set program working directory.
     */
    vfunc_set_working_directory(dir: string): boolean
    vfunc_sharedlib_event(): void
    vfunc_signal_received(name: string, description: string): void
    /**
     * Start a loaded program under debugger control.
     */
    vfunc_start(args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Execute a single C instruction of the program currently loaded.
     */
    vfunc_step_in(): boolean
    /**
     * Execute the currently loaded program until it goes out of the
     * current procedure.
     */
    vfunc_step_out(): boolean
    /**
     * Execute one C instruction, without entering in procedure, of
     * the program currently loaded.
     */
    vfunc_step_over(): boolean
    /**
     * Unload a program.
     */
    vfunc_unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerRegister, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: DebuggerRegister, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerRegister, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebuggerRegister, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebuggerRegister, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebuggerRegister, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebuggerRegister, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebuggerRegister, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebuggerRegister, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebuggerRegister, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class DebuggerVariable {
    /* Methods of IAnjuta-3.0.IAnjuta.DebuggerVariable */
    /**
     * Set the value of one variable or child object.
     */
    assign(name: string, value: string): boolean
    /**
     * Delete a previously created variable or child object
     * including its own children.
     */
    destroy(name: string): boolean
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    abort(): boolean
    /**
     * Attach to an already running process.
     */
    attach(pid: number, source_search_directories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     */
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Disable debugger log.
     */
    disable_log(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
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
     */
    handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    interrupt(): boolean
    /**
     * Load a program in the debugger.
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
     */
    run_from(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     */
    run_to(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     */
    send_command(command: string): boolean
    /**
     * Set environment variable
     */
    set_environment(env: string): boolean
    /**
     * Set the current frame.
     */
    set_frame(frame: number): boolean
    /**
     * Set the current thread.
     */
    set_thread(thread: number): boolean
    /**
     * Set program working directory.
     */
    set_working_directory(dir: string): boolean
    /**
     * Start a loaded program under debugger control.
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
    /* Virtual methods of IAnjuta-3.0.IAnjuta.DebuggerVariable */
    /**
     * Set the value of one variable or child object.
     */
    vfunc_assign(name: string, value: string): boolean
    /**
     * Delete a previously created variable or child object
     * including its own children.
     */
    vfunc_destroy(name: string): boolean
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    vfunc_abort(): boolean
    /**
     * Attach to an already running process.
     */
    vfunc_attach(pid: number, source_search_directories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     */
    vfunc_connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfunc_debugger_ready(state: DebuggerState): void
    vfunc_debugger_started(): void
    vfunc_debugger_stopped(err: GLib.Error): void
    /**
     * Disable debugger log.
     */
    vfunc_disable_log(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
     */
    vfunc_enable_log(log: MessageView): void
    /**
     * Exit from the currently loaded program.
     */
    vfunc_exit(): boolean
    vfunc_frame_changed(frame: number, thread: number): void
    /**
     * Get the current state of the debugger
     */
    vfunc_get_state(): DebuggerState
    /**
     * It defines how to handle signal received by the program.
     */
    vfunc_handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    vfunc_interrupt(): boolean
    /**
     * Load a program in the debugger.
     */
    vfunc_load(file: string, mime_type: string, source_search_directories: string[]): boolean
    vfunc_program_exited(): void
    vfunc_program_loaded(): void
    vfunc_program_moved(pid: number, tid: number, address: number, file: string, line: number): void
    vfunc_program_running(): void
    vfunc_program_stopped(): void
    /**
     * Quit the debugger, can wait until the debugger is ready.
     */
    vfunc_quit(): boolean
    /**
     * Run the program currently loaded.
     */
    vfunc_run(): boolean
    /**
     * Execute the program from a new position.
     * This function is optional.
     */
    vfunc_run_from(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     */
    vfunc_run_to(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     */
    vfunc_send_command(command: string): boolean
    /**
     * Set environment variable
     */
    vfunc_set_environment(env: string): boolean
    /**
     * Set the current frame.
     */
    vfunc_set_frame(frame: number): boolean
    /**
     * Set the current thread.
     */
    vfunc_set_thread(thread: number): boolean
    /**
     * Set program working directory.
     */
    vfunc_set_working_directory(dir: string): boolean
    vfunc_sharedlib_event(): void
    vfunc_signal_received(name: string, description: string): void
    /**
     * Start a loaded program under debugger control.
     */
    vfunc_start(args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Execute a single C instruction of the program currently loaded.
     */
    vfunc_step_in(): boolean
    /**
     * Execute the currently loaded program until it goes out of the
     * current procedure.
     */
    vfunc_step_out(): boolean
    /**
     * Execute one C instruction, without entering in procedure, of
     * the program currently loaded.
     */
    vfunc_step_over(): boolean
    /**
     * Unload a program.
     */
    vfunc_unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerVariable, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: DebuggerVariable, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerVariable, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebuggerVariable, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebuggerVariable, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebuggerVariable, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebuggerVariable, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebuggerVariable, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebuggerVariable, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebuggerVariable, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Document {
    /* Methods of IAnjuta-3.0.IAnjuta.Document */
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
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Document */
    /**
     * Begins the mark of undoable action. Calls to this are stacked and
     * each must be ended with ianjuta_document_end_action().
     */
    vfunc_begin_undo_action(): void
    /**
     * Can the editor redo the last operation?
     */
    vfunc_can_redo(): boolean
    /**
     * Can the editor undo the last operation?
     */
    vfunc_can_undo(): boolean
    /**
     * Clear selection
     */
    vfunc_clear(): void
    /**
     * Copy selection to clipboard.
     */
    vfunc_copy(): void
    /**
     * Cut selection to clipboard.
     */
    vfunc_cut(): void
    /**
     * Ends the mark of undoable action.
     */
    vfunc_end_undo_action(): void
    /**
     * Allows obtaining of the filename the editor was loaded from.
     */
    vfunc_get_filename(): string
    /**
     * Grabs the focus.
     */
    vfunc_grab_focus(): void
    /**
     * Paste clipboard at current position.
     */
    vfunc_paste(): void
    /**
     * Redo last undo operation
     */
    vfunc_redo(): void
    /**
     * Undo last operation
     */
    vfunc_undo(): void
    vfunc_update_ui(): void
    /* Signals of IAnjuta-3.0.IAnjuta.Document */
    /**
     * This signal is emitted when the document assumes the UI must be updated
     * because some internal state of the document has changed. For example, if
     * current line position is changed, it needs to be reflected to the UI.
     */
    connect(sigName: "update-ui", callback: (($obj: Document) => void)): number
    connect_after(sigName: "update-ui", callback: (($obj: Document) => void)): number
    emit(sigName: "update-ui"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class DocumentManager {
    /* Methods of IAnjuta-3.0.IAnjuta.DocumentManager */
    add_bookmark(file: Gio.File, line: number): void
    /**
     * Creates a new editor buffer of the given name and sets the given
     * content as its initial content.
     */
    add_buffer(name: string, content: string): Editor
    /**
     * Adds a document to the document manager. This will open a new
     * Notebook tab and show the document there
     */
    add_document(document: Document): void
    /**
     * Finds the document that has the file  loaded. Only
     * the editor that matches the file will be searched.
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
     */
    get_file(filename: string): Gio.File
    /**
     * Loads the given file if not loaded yet, set its editor as current editor
     * and moves cursor to the given line in the editor.
     */
    goto_file_line(file: Gio.File, lineno: number): Editor
    /**
     * Loads the given file if not loaded yet, set its editor as current editor
     * and moves cursor to the given line in the editor. Optionally also marks
     * the line with line marker if `mark` is given TRUE.
     */
    goto_file_line_mark(file: Gio.File, lineno: number, mark: boolean): Editor
    /**
     * Closes and removes the given document. If `save_before` is TRUE, also
     * saves the document before closing.
     */
    remove_document(document: Document, save_before: boolean): boolean
    /**
     * Sets the given document as current document.
     */
    set_current_document(document: Document): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.DocumentManager */
    vfunc_add_bookmark(file: Gio.File, line: number): void
    /**
     * Creates a new editor buffer of the given name and sets the given
     * content as its initial content.
     */
    vfunc_add_buffer(name: string, content: string): Editor
    /**
     * Adds a document to the document manager. This will open a new
     * Notebook tab and show the document there
     */
    vfunc_add_document(document: Document): void
    vfunc_document_added(doc: Document): void
    vfunc_document_removed(doc: Document): void
    /**
     * Finds the document that has the file  loaded. Only
     * the editor that matches the file will be searched.
     */
    vfunc_find_document_with_file(file: Gio.File): Document
    /**
     * Gets the current document.
     */
    vfunc_get_current_document(): Document
    /**
     * Gets a list of widgets for open documents. Each widget is
     * a GTK_WIDGET(IAnjutaDocument*)
     */
    vfunc_get_doc_widgets(): Gtk.Widget[]
    /**
     * Given the short filename, finds the file of the filename, if the
     * editor that has it loaded is found. If there is no editor that has
     * this file opened, returns NULL.
     */
    vfunc_get_file(filename: string): Gio.File
    /**
     * Loads the given file if not loaded yet, set its editor as current editor
     * and moves cursor to the given line in the editor.
     */
    vfunc_goto_file_line(file: Gio.File, lineno: number): Editor
    /**
     * Loads the given file if not loaded yet, set its editor as current editor
     * and moves cursor to the given line in the editor. Optionally also marks
     * the line with line marker if `mark` is given TRUE.
     */
    vfunc_goto_file_line_mark(file: Gio.File, lineno: number, mark: boolean): Editor
    /**
     * Closes and removes the given document. If `save_before` is TRUE, also
     * saves the document before closing.
     */
    vfunc_remove_document(document: Document, save_before: boolean): boolean
    /**
     * Sets the given document as current document.
     */
    vfunc_set_current_document(document: Document): void
    /* Signals of IAnjuta-3.0.IAnjuta.DocumentManager */
    /**
     * Emitted when a document was added to the document manager.
     */
    connect(sigName: "document-added", callback: (($obj: DocumentManager, doc: Document) => void)): number
    connect_after(sigName: "document-added", callback: (($obj: DocumentManager, doc: Document) => void)): number
    emit(sigName: "document-added", doc: Document): void
    /**
     * Emitted when a document was removed from the document manager.
     */
    connect(sigName: "document-removed", callback: (($obj: DocumentManager, doc: Document) => void)): number
    connect_after(sigName: "document-removed", callback: (($obj: DocumentManager, doc: Document) => void)): number
    emit(sigName: "document-removed", doc: Document): void
    static name: string
}
class Editor {
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    get_line_begin_position(line: number): Iterable
    /**
     * fixme
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
     */
    goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
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
     */
    insert(position: Iterable, text: string, length: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    vfunc_erase_all(): void
    vfunc_get_column(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    vfunc_get_current_word(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    vfunc_get_end_position(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    vfunc_get_indentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    vfunc_get_length(): number
    /**
     * fixme
     */
    vfunc_get_line_begin_position(line: number): Iterable
    /**
     * fixme
     */
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    vfunc_get_overwrite(): boolean
    /**
     * Get current caret position.
     */
    vfunc_get_position(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    vfunc_get_start_position(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    vfunc_get_tabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     */
    vfunc_get_text(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    vfunc_get_text_all(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_end(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     */
    vfunc_goto_position(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_start(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     */
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    vfunc_set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    vfunc_set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (($obj: Editor) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: Editor) => void)): number
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     */
    connect(sigName: "changed", callback: (($obj: Editor, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Editor, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     */
    connect(sigName: "char-added", callback: (($obj: Editor, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: Editor, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     */
    connect(sigName: "code-changed", callback: (($obj: Editor, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: Editor, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (($obj: Editor) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: Editor) => void)): number
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-callback-add", callback: (($obj: Editor, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: Editor, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-member-add", callback: (($obj: Editor, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: Editor, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     */
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: Editor, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: Editor, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
}
class EditorAssist {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorAssist */
    add(provider: Provider): void
    invoke(provider: Provider): void
    /**
     * Add the list of proposals for the current population. You can add
     * proposals async as long as the last call sets finished to TRUE. That
     * is usually called by the IAnjutaProvider after it was triggered by
     * ianjuta_provider_populate()
     */
    proposals(provider: Provider, proposals: EditorAssistProposal[], pre_word: string, finished: boolean): void
    remove(provider: Provider): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    get_line_begin_position(line: number): Iterable
    /**
     * fixme
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
     */
    goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
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
     */
    insert(position: Iterable, text: string, length: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.EditorAssist */
    vfunc_add(provider: Provider): void
    vfunc_cancelled(): void
    vfunc_invoke(provider: Provider): void
    /**
     * Add the list of proposals for the current population. You can add
     * proposals async as long as the last call sets finished to TRUE. That
     * is usually called by the IAnjutaProvider after it was triggered by
     * ianjuta_provider_populate()
     */
    vfunc_proposals(provider: Provider, proposals: EditorAssistProposal[], pre_word: string, finished: boolean): void
    vfunc_remove(provider: Provider): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    vfunc_erase_all(): void
    vfunc_get_column(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    vfunc_get_current_word(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    vfunc_get_end_position(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    vfunc_get_indentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    vfunc_get_length(): number
    /**
     * fixme
     */
    vfunc_get_line_begin_position(line: number): Iterable
    /**
     * fixme
     */
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    vfunc_get_overwrite(): boolean
    /**
     * Get current caret position.
     */
    vfunc_get_position(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    vfunc_get_start_position(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    vfunc_get_tabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     */
    vfunc_get_text(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    vfunc_get_text_all(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_end(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     */
    vfunc_goto_position(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_start(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     */
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    vfunc_set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    vfunc_set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.EditorAssist */
    /**
     * This signal is emitted when the autocompletion is cancelled due to various
     * reasons. The provider should avoid to call ianjuta_editor_assist_proposals() after
     * this signal.
     */
    connect(sigName: "cancelled", callback: (($obj: EditorAssist) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: EditorAssist) => void)): number
    emit(sigName: "cancelled"): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (($obj: EditorAssist) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorAssist) => void)): number
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     */
    connect(sigName: "changed", callback: (($obj: EditorAssist, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorAssist, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     */
    connect(sigName: "char-added", callback: (($obj: EditorAssist, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorAssist, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     */
    connect(sigName: "code-changed", callback: (($obj: EditorAssist, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorAssist, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (($obj: EditorAssist) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorAssist) => void)): number
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-callback-add", callback: (($obj: EditorAssist, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorAssist, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-member-add", callback: (($obj: EditorAssist, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorAssist, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     */
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorAssist, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorAssist, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class EditorCell {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorCell */
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
    /* Virtual methods of IAnjuta-3.0.IAnjuta.EditorCell */
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
     */
    vfunc_get_char(char_index: number): number
    /**
     * Returns the unicode character in this cell. A NULL terminated
     * string is returned that is the multibyte unicode character.
     * NULL is returned if the cell does not have any character.
     */
    vfunc_get_character(): string
    /**
     * Gets the length of the cell in bytes. That is, length of the
     * unicode character.
     */
    vfunc_get_length(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class EditorCellStyle {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorCellStyle */
    get_background_color(): string
    get_color(): string
    get_font_description(): string
    /* Methods of IAnjuta-3.0.IAnjuta.EditorCell */
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
    /* Virtual methods of IAnjuta-3.0.IAnjuta.EditorCellStyle */
    vfunc_get_background_color(): string
    vfunc_get_color(): string
    vfunc_get_font_description(): string
    /* Virtual methods of IAnjuta-3.0.IAnjuta.EditorCell */
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
     */
    vfunc_get_char(char_index: number): number
    /**
     * Returns the unicode character in this cell. A NULL terminated
     * string is returned that is the multibyte unicode character.
     * NULL is returned if the cell does not have any character.
     */
    vfunc_get_character(): string
    /**
     * Gets the length of the cell in bytes. That is, length of the
     * unicode character.
     */
    vfunc_get_length(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class EditorComment {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorComment */
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
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    get_line_begin_position(line: number): Iterable
    /**
     * fixme
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
     */
    goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
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
     */
    insert(position: Iterable, text: string, length: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.EditorComment */
    /**
     * Comment/Uncomment out selected block
     */
    vfunc_block(): void
    /**
     * Comment/Uncomment out selected block
     */
    vfunc_box(): void
    /**
     * Comment/Uncomment out selected block
     */
    vfunc_stream(): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    vfunc_erase_all(): void
    vfunc_get_column(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    vfunc_get_current_word(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    vfunc_get_end_position(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    vfunc_get_indentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    vfunc_get_length(): number
    /**
     * fixme
     */
    vfunc_get_line_begin_position(line: number): Iterable
    /**
     * fixme
     */
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    vfunc_get_overwrite(): boolean
    /**
     * Get current caret position.
     */
    vfunc_get_position(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    vfunc_get_start_position(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    vfunc_get_tabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     */
    vfunc_get_text(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    vfunc_get_text_all(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_end(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     */
    vfunc_goto_position(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_start(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     */
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    vfunc_set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    vfunc_set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (($obj: EditorComment) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorComment) => void)): number
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     */
    connect(sigName: "changed", callback: (($obj: EditorComment, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorComment, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     */
    connect(sigName: "char-added", callback: (($obj: EditorComment, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorComment, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     */
    connect(sigName: "code-changed", callback: (($obj: EditorComment, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorComment, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (($obj: EditorComment) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorComment) => void)): number
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-callback-add", callback: (($obj: EditorComment, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorComment, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-member-add", callback: (($obj: EditorComment, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorComment, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     */
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorComment, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorComment, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class EditorConvert {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorConvert */
    /**
     * change characters from start position to end position to lowercase
     */
    to_lower(start_position: Iterable, end_position: Iterable): void
    /**
     * change characters from start position to end position to uppercase.
     */
    to_upper(start_position: Iterable, end_position: Iterable): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    get_line_begin_position(line: number): Iterable
    /**
     * fixme
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
     */
    goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
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
     */
    insert(position: Iterable, text: string, length: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.EditorConvert */
    /**
     * change characters from start position to end position to lowercase
     */
    vfunc_to_lower(start_position: Iterable, end_position: Iterable): void
    /**
     * change characters from start position to end position to uppercase.
     */
    vfunc_to_upper(start_position: Iterable, end_position: Iterable): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    vfunc_erase_all(): void
    vfunc_get_column(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    vfunc_get_current_word(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    vfunc_get_end_position(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    vfunc_get_indentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    vfunc_get_length(): number
    /**
     * fixme
     */
    vfunc_get_line_begin_position(line: number): Iterable
    /**
     * fixme
     */
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    vfunc_get_overwrite(): boolean
    /**
     * Get current caret position.
     */
    vfunc_get_position(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    vfunc_get_start_position(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    vfunc_get_tabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     */
    vfunc_get_text(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    vfunc_get_text_all(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_end(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     */
    vfunc_goto_position(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_start(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     */
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    vfunc_set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    vfunc_set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (($obj: EditorConvert) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorConvert) => void)): number
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     */
    connect(sigName: "changed", callback: (($obj: EditorConvert, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorConvert, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     */
    connect(sigName: "char-added", callback: (($obj: EditorConvert, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorConvert, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     */
    connect(sigName: "code-changed", callback: (($obj: EditorConvert, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorConvert, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (($obj: EditorConvert) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorConvert) => void)): number
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-callback-add", callback: (($obj: EditorConvert, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorConvert, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-member-add", callback: (($obj: EditorConvert, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorConvert, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     */
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorConvert, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorConvert, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class EditorFactory {
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class EditorFolds {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorFolds */
    close_all(): void
    open_all(): void
    toggle_current(): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    get_line_begin_position(line: number): Iterable
    /**
     * fixme
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
     */
    goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
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
     */
    insert(position: Iterable, text: string, length: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.EditorFolds */
    vfunc_close_all(): void
    vfunc_open_all(): void
    vfunc_toggle_current(): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    vfunc_erase_all(): void
    vfunc_get_column(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    vfunc_get_current_word(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    vfunc_get_end_position(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    vfunc_get_indentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    vfunc_get_length(): number
    /**
     * fixme
     */
    vfunc_get_line_begin_position(line: number): Iterable
    /**
     * fixme
     */
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    vfunc_get_overwrite(): boolean
    /**
     * Get current caret position.
     */
    vfunc_get_position(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    vfunc_get_start_position(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    vfunc_get_tabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     */
    vfunc_get_text(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    vfunc_get_text_all(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_end(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     */
    vfunc_goto_position(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_start(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     */
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    vfunc_set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    vfunc_set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (($obj: EditorFolds) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorFolds) => void)): number
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     */
    connect(sigName: "changed", callback: (($obj: EditorFolds, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorFolds, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     */
    connect(sigName: "char-added", callback: (($obj: EditorFolds, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorFolds, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     */
    connect(sigName: "code-changed", callback: (($obj: EditorFolds, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorFolds, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (($obj: EditorFolds) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorFolds) => void)): number
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-callback-add", callback: (($obj: EditorFolds, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorFolds, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-member-add", callback: (($obj: EditorFolds, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorFolds, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     */
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorFolds, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorFolds, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class EditorGladeSignal {
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    get_line_begin_position(line: number): Iterable
    /**
     * fixme
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
     */
    goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
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
     */
    insert(position: Iterable, text: string, length: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.EditorGladeSignal */
    vfunc_drop(iterator: Iterable, signal_data: string): void
    vfunc_drop_possible(iterator: Iterable): boolean
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    vfunc_erase_all(): void
    vfunc_get_column(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    vfunc_get_current_word(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    vfunc_get_end_position(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    vfunc_get_indentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    vfunc_get_length(): number
    /**
     * fixme
     */
    vfunc_get_line_begin_position(line: number): Iterable
    /**
     * fixme
     */
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    vfunc_get_overwrite(): boolean
    /**
     * Get current caret position.
     */
    vfunc_get_position(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    vfunc_get_start_position(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    vfunc_get_tabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     */
    vfunc_get_text(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    vfunc_get_text_all(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_end(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     */
    vfunc_goto_position(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_start(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     */
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    vfunc_set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    vfunc_set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.EditorGladeSignal */
    /**
     * Emitted when a signal was received per drag & drop
     */
    connect(sigName: "drop", callback: (($obj: EditorGladeSignal, iter: Iterable, signal_data: string) => void)): number
    connect_after(sigName: "drop", callback: (($obj: EditorGladeSignal, iter: Iterable, signal_data: string) => void)): number
    emit(sigName: "drop", iter: Iterable, signal_data: string): void
    /**
     * Emitted when a signal is dragged over the editor
     */
    connect(sigName: "drop-possible", callback: (($obj: EditorGladeSignal, iter: Iterable) => boolean)): number
    connect_after(sigName: "drop-possible", callback: (($obj: EditorGladeSignal, iter: Iterable) => boolean)): number
    emit(sigName: "drop-possible", iter: Iterable): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (($obj: EditorGladeSignal) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorGladeSignal) => void)): number
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     */
    connect(sigName: "changed", callback: (($obj: EditorGladeSignal, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorGladeSignal, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     */
    connect(sigName: "char-added", callback: (($obj: EditorGladeSignal, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorGladeSignal, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     */
    connect(sigName: "code-changed", callback: (($obj: EditorGladeSignal, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorGladeSignal, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (($obj: EditorGladeSignal) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorGladeSignal) => void)): number
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-callback-add", callback: (($obj: EditorGladeSignal, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorGladeSignal, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-member-add", callback: (($obj: EditorGladeSignal, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorGladeSignal, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     */
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorGladeSignal, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorGladeSignal, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class EditorGoto {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorGoto */
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
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    get_line_begin_position(line: number): Iterable
    /**
     * fixme
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
     */
    goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
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
     */
    insert(position: Iterable, text: string, length: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.EditorGoto */
    /**
     * Moves cursor to the end of the current block
     */
    vfunc_end_block(): void
    /**
     * Moves cursor to matching brace
     */
    vfunc_matching_brace(): void
    /**
     * Moves cursor to the start of the current block
     */
    vfunc_start_block(): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    vfunc_erase_all(): void
    vfunc_get_column(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    vfunc_get_current_word(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    vfunc_get_end_position(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    vfunc_get_indentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    vfunc_get_length(): number
    /**
     * fixme
     */
    vfunc_get_line_begin_position(line: number): Iterable
    /**
     * fixme
     */
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    vfunc_get_overwrite(): boolean
    /**
     * Get current caret position.
     */
    vfunc_get_position(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    vfunc_get_start_position(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    vfunc_get_tabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     */
    vfunc_get_text(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    vfunc_get_text_all(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_end(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     */
    vfunc_goto_position(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_start(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     */
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    vfunc_set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    vfunc_set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (($obj: EditorGoto) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorGoto) => void)): number
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     */
    connect(sigName: "changed", callback: (($obj: EditorGoto, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorGoto, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     */
    connect(sigName: "char-added", callback: (($obj: EditorGoto, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorGoto, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     */
    connect(sigName: "code-changed", callback: (($obj: EditorGoto, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorGoto, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (($obj: EditorGoto) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorGoto) => void)): number
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-callback-add", callback: (($obj: EditorGoto, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorGoto, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-member-add", callback: (($obj: EditorGoto, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorGoto, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     */
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorGoto, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorGoto, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class EditorHover {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorHover */
    /**
     * Show `info` as tooltip
     */
    display(position: Iterable, info: string): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    get_line_begin_position(line: number): Iterable
    /**
     * fixme
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
     */
    goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
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
     */
    insert(position: Iterable, text: string, length: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.EditorHover */
    /**
     * Show `info` as tooltip
     */
    vfunc_display(position: Iterable, info: string): void
    vfunc_hover_leave(position: Iterable): void
    vfunc_hover_over(position: Iterable): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    vfunc_erase_all(): void
    vfunc_get_column(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    vfunc_get_current_word(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    vfunc_get_end_position(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    vfunc_get_indentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    vfunc_get_length(): number
    /**
     * fixme
     */
    vfunc_get_line_begin_position(line: number): Iterable
    /**
     * fixme
     */
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    vfunc_get_overwrite(): boolean
    /**
     * Get current caret position.
     */
    vfunc_get_position(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    vfunc_get_start_position(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    vfunc_get_tabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     */
    vfunc_get_text(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    vfunc_get_text_all(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_end(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     */
    vfunc_goto_position(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_start(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     */
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    vfunc_set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    vfunc_set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.EditorHover */
    /**
     * User moved the mouse away - can be used to clean up things done in
     * #IAnjutaEditorHover::hover-over
     */
    connect(sigName: "hover-leave", callback: (($obj: EditorHover, position: Iterable) => void)): number
    connect_after(sigName: "hover-leave", callback: (($obj: EditorHover, position: Iterable) => void)): number
    emit(sigName: "hover-leave", position: Iterable): void
    /**
     * The mouse is held for a moment over `position`. This can be used to show
     * all tooltip.
     */
    connect(sigName: "hover-over", callback: (($obj: EditorHover, position: Iterable) => void)): number
    connect_after(sigName: "hover-over", callback: (($obj: EditorHover, position: Iterable) => void)): number
    emit(sigName: "hover-over", position: Iterable): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (($obj: EditorHover) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorHover) => void)): number
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     */
    connect(sigName: "changed", callback: (($obj: EditorHover, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorHover, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     */
    connect(sigName: "char-added", callback: (($obj: EditorHover, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorHover, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     */
    connect(sigName: "code-changed", callback: (($obj: EditorHover, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorHover, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (($obj: EditorHover) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorHover) => void)): number
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-callback-add", callback: (($obj: EditorHover, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorHover, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-member-add", callback: (($obj: EditorHover, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorHover, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     */
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorHover, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorHover, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class EditorLanguage {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorLanguage */
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
     */
    set_language(language: string): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    get_line_begin_position(line: number): Iterable
    /**
     * fixme
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
     */
    goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
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
     */
    insert(position: Iterable, text: string, length: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.EditorLanguage */
    /**
     * Return the name of the currently used language
     */
    vfunc_get_language(): string
    vfunc_get_language_name(language: string): string
    /**
     * Return a list of languages supported by the editor
     * Note: These list contains the names in the form
     * the editor implementation knows them
     */
    vfunc_get_supported_languages(): string[]
    vfunc_language_changed(language: string): void
    /**
     * Force the editor to use a given language
     */
    vfunc_set_language(language: string): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    vfunc_erase_all(): void
    vfunc_get_column(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    vfunc_get_current_word(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    vfunc_get_end_position(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    vfunc_get_indentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    vfunc_get_length(): number
    /**
     * fixme
     */
    vfunc_get_line_begin_position(line: number): Iterable
    /**
     * fixme
     */
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    vfunc_get_overwrite(): boolean
    /**
     * Get current caret position.
     */
    vfunc_get_position(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    vfunc_get_start_position(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    vfunc_get_tabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     */
    vfunc_get_text(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    vfunc_get_text_all(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_end(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     */
    vfunc_goto_position(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_start(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     */
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    vfunc_set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    vfunc_set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.EditorLanguage */
    /**
     * the language of the editor changed to `language`
     */
    connect(sigName: "language-changed", callback: (($obj: EditorLanguage, language: string) => void)): number
    connect_after(sigName: "language-changed", callback: (($obj: EditorLanguage, language: string) => void)): number
    emit(sigName: "language-changed", language: string): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (($obj: EditorLanguage) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorLanguage) => void)): number
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     */
    connect(sigName: "changed", callback: (($obj: EditorLanguage, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorLanguage, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     */
    connect(sigName: "char-added", callback: (($obj: EditorLanguage, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorLanguage, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     */
    connect(sigName: "code-changed", callback: (($obj: EditorLanguage, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorLanguage, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (($obj: EditorLanguage) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorLanguage) => void)): number
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-callback-add", callback: (($obj: EditorLanguage, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorLanguage, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-member-add", callback: (($obj: EditorLanguage, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorLanguage, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     */
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorLanguage, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorLanguage, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class EditorLineMode {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorLineMode */
    /**
     * Set the line ending mode to the given `mode` and convert all line end
     * characters in the buffer to `mode` line end characters.
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
     */
    set(mode: EditorLineModeType): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    get_line_begin_position(line: number): Iterable
    /**
     * fixme
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
     */
    goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
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
     */
    insert(position: Iterable, text: string, length: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.EditorLineMode */
    /**
     * Set the line ending mode to the given `mode` and convert all line end
     * characters in the buffer to `mode` line end characters.
     */
    vfunc_convert(mode: EditorLineModeType): void
    /**
     * Convert EOL characters to majority of line mode. This is helpful
     * when the buffer contains mixed line modes and we want to fix it.
     */
    vfunc_fix(): void
    /**
     * Get current line ending mode. It is auto-detected from the
     * buffer contents.
     */
    vfunc_get(): EditorLineModeType
    /**
     * Set the line ending mode to the given `mode`. Existing line end
     * characters in the buffer are not touched. Only the newly added
     * texts will have `mode` line end characters.
     */
    vfunc_set(mode: EditorLineModeType): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    vfunc_erase_all(): void
    vfunc_get_column(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    vfunc_get_current_word(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    vfunc_get_end_position(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    vfunc_get_indentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    vfunc_get_length(): number
    /**
     * fixme
     */
    vfunc_get_line_begin_position(line: number): Iterable
    /**
     * fixme
     */
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    vfunc_get_overwrite(): boolean
    /**
     * Get current caret position.
     */
    vfunc_get_position(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    vfunc_get_start_position(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    vfunc_get_tabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     */
    vfunc_get_text(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    vfunc_get_text_all(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_end(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     */
    vfunc_goto_position(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_start(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     */
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    vfunc_set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    vfunc_set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (($obj: EditorLineMode) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorLineMode) => void)): number
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     */
    connect(sigName: "changed", callback: (($obj: EditorLineMode, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorLineMode, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     */
    connect(sigName: "char-added", callback: (($obj: EditorLineMode, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorLineMode, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     */
    connect(sigName: "code-changed", callback: (($obj: EditorLineMode, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorLineMode, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (($obj: EditorLineMode) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorLineMode) => void)): number
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-callback-add", callback: (($obj: EditorLineMode, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorLineMode, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-member-add", callback: (($obj: EditorLineMode, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorLineMode, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     */
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorLineMode, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorLineMode, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class EditorSearch {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorSearch */
    /**
     * Search backward from end to start
     */
    backward(search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]
    /**
     * Search forward from start to end
     */
    forward(search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    get_line_begin_position(line: number): Iterable
    /**
     * fixme
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
     */
    goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
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
     */
    insert(position: Iterable, text: string, length: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.EditorSearch */
    /**
     * Search backward from end to start
     */
    vfunc_backward(search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]
    /**
     * Search forward from start to end
     */
    vfunc_forward(search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    vfunc_erase_all(): void
    vfunc_get_column(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    vfunc_get_current_word(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    vfunc_get_end_position(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    vfunc_get_indentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    vfunc_get_length(): number
    /**
     * fixme
     */
    vfunc_get_line_begin_position(line: number): Iterable
    /**
     * fixme
     */
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    vfunc_get_overwrite(): boolean
    /**
     * Get current caret position.
     */
    vfunc_get_position(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    vfunc_get_start_position(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    vfunc_get_tabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     */
    vfunc_get_text(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    vfunc_get_text_all(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_end(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     */
    vfunc_goto_position(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_start(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     */
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    vfunc_set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    vfunc_set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (($obj: EditorSearch) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorSearch) => void)): number
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     */
    connect(sigName: "changed", callback: (($obj: EditorSearch, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorSearch, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     */
    connect(sigName: "char-added", callback: (($obj: EditorSearch, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorSearch, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     */
    connect(sigName: "code-changed", callback: (($obj: EditorSearch, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorSearch, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (($obj: EditorSearch) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorSearch) => void)): number
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-callback-add", callback: (($obj: EditorSearch, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorSearch, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-member-add", callback: (($obj: EditorSearch, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorSearch, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     */
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorSearch, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorSearch, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class EditorSelection {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorSelection */
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
     */
    set(start: Iterable, end: Iterable, scroll: boolean): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    get_line_begin_position(line: number): Iterable
    /**
     * fixme
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
     */
    goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
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
     */
    insert(position: Iterable, text: string, length: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.EditorSelection */
    /**
     * Gets curerntly selected text in editor.
     */
    vfunc_get(): string
    /**
     * Returns TRUE if editor has any text selected. The selection
     * positions can be retrieved with ianjuta_editor_selection_get_start()
     * and ianjuta_editor_selection_get_end().
     */
    vfunc_has_selection(): boolean
    /**
     * Replaces currently selected text with the `text`. Only `length` amount
     * of characters are used from `text` buffer to replace.
     */
    vfunc_replace(text: string, length: number): void
    vfunc_select_all(): void
    /**
     * Selects current block of code. The definition of block of code
     * depends on highlight mode used (programming language). Some
     * highlight mode does not have block concept, in that case this
     * method does not do anything.
     */
    vfunc_select_block(): void
    /**
     * Select current function block. The definition of function block
     * depends on highlight mode used (programming language). Some
     * highlight mode does not have function concept, in that case this
     * method does not do anything.
     */
    vfunc_select_function(): void
    /**
     * Select characters between start and end. Start and end don't have to
     * be ordered.
     */
    vfunc_set(start: Iterable, end: Iterable, scroll: boolean): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    vfunc_erase_all(): void
    vfunc_get_column(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    vfunc_get_current_word(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    vfunc_get_end_position(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    vfunc_get_indentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    vfunc_get_length(): number
    /**
     * fixme
     */
    vfunc_get_line_begin_position(line: number): Iterable
    /**
     * fixme
     */
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    vfunc_get_overwrite(): boolean
    /**
     * Get current caret position.
     */
    vfunc_get_position(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    vfunc_get_start_position(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    vfunc_get_tabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     */
    vfunc_get_text(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    vfunc_get_text_all(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_end(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     */
    vfunc_goto_position(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_start(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     */
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    vfunc_set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    vfunc_set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (($obj: EditorSelection) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorSelection) => void)): number
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     */
    connect(sigName: "changed", callback: (($obj: EditorSelection, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorSelection, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     */
    connect(sigName: "char-added", callback: (($obj: EditorSelection, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorSelection, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     */
    connect(sigName: "code-changed", callback: (($obj: EditorSelection, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorSelection, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (($obj: EditorSelection) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorSelection) => void)): number
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-callback-add", callback: (($obj: EditorSelection, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorSelection, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-member-add", callback: (($obj: EditorSelection, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorSelection, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     */
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorSelection, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorSelection, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class EditorTip {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorTip */
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
     */
    show(tips: string[], position: Iterable): void
    visible(): boolean
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    get_line_begin_position(line: number): Iterable
    /**
     * fixme
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
     */
    goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
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
     */
    insert(position: Iterable, text: string, length: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.EditorTip */
    /**
     * Cancels the last shown tooltip
     */
    vfunc_cancel(): void
    /**
     * Show tips showing more information on current context. No user feedback
     * is required when tips are shown. `position` indicates
     * the position before which is the known context and after which are
     * the suggestions. Usually the editor would use this to
     * align the choices displayed such that the carat is just at this
     * position when the choices are displayed.
     */
    vfunc_show(tips: string[], position: Iterable): void
    vfunc_visible(): boolean
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    vfunc_erase_all(): void
    vfunc_get_column(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    vfunc_get_current_word(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    vfunc_get_end_position(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    vfunc_get_indentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    vfunc_get_length(): number
    /**
     * fixme
     */
    vfunc_get_line_begin_position(line: number): Iterable
    /**
     * fixme
     */
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    vfunc_get_overwrite(): boolean
    /**
     * Get current caret position.
     */
    vfunc_get_position(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    vfunc_get_start_position(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    vfunc_get_tabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     */
    vfunc_get_text(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    vfunc_get_text_all(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_end(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     */
    vfunc_goto_position(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_start(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     */
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    vfunc_set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    vfunc_set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (($obj: EditorTip) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorTip) => void)): number
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     */
    connect(sigName: "changed", callback: (($obj: EditorTip, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorTip, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     */
    connect(sigName: "char-added", callback: (($obj: EditorTip, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorTip, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     */
    connect(sigName: "code-changed", callback: (($obj: EditorTip, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorTip, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (($obj: EditorTip) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorTip) => void)): number
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-callback-add", callback: (($obj: EditorTip, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorTip, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-member-add", callback: (($obj: EditorTip, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorTip, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     */
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorTip, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorTip, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class EditorView {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorView */
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
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    get_line_begin_position(line: number): Iterable
    /**
     * fixme
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
     */
    goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
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
     */
    insert(position: Iterable, text: string, length: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.EditorView */
    /**
     * Creates a new view for the editor. The newly created view gets
     * the user focus and scrolls to the same location as last view.
     */
    vfunc_create(): void
    /**
     * Total number of views currently present. It will never be less
     * than 1. Invalid return values are considered error condition.
     */
    vfunc_get_count(): number
    /**
     * Removes currently focused editor view. It does not remove the
     * last view of the editor. That is, if currently there is only
     * one view of the editor, this function does nothing.
     */
    vfunc_remove_current(): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    vfunc_erase_all(): void
    vfunc_get_column(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    vfunc_get_current_word(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    vfunc_get_end_position(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    vfunc_get_indentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    vfunc_get_length(): number
    /**
     * fixme
     */
    vfunc_get_line_begin_position(line: number): Iterable
    /**
     * fixme
     */
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    vfunc_get_overwrite(): boolean
    /**
     * Get current caret position.
     */
    vfunc_get_position(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    vfunc_get_start_position(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    vfunc_get_tabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     */
    vfunc_get_text(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    vfunc_get_text_all(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_end(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     */
    vfunc_goto_position(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_start(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     */
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    vfunc_set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    vfunc_set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (($obj: EditorView) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorView) => void)): number
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     */
    connect(sigName: "changed", callback: (($obj: EditorView, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorView, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     */
    connect(sigName: "char-added", callback: (($obj: EditorView, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorView, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     */
    connect(sigName: "code-changed", callback: (($obj: EditorView, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorView, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (($obj: EditorView) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorView) => void)): number
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-callback-add", callback: (($obj: EditorView, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorView, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-member-add", callback: (($obj: EditorView, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorView, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     */
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorView, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorView, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class EditorZoom {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorZoom */
    /**
     * Zoom in
     */
    in(): void
    /**
     * Zoom out
     */
    out(): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    get_line_begin_position(line: number): Iterable
    /**
     * fixme
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
     */
    goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
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
     */
    insert(position: Iterable, text: string, length: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.EditorZoom */
    /**
     * Zoom in
     */
    vfunc_in(): void
    /**
     * Zoom out
     */
    vfunc_out(): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
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
     */
    vfunc_erase_all(): void
    vfunc_get_column(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    vfunc_get_current_word(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    vfunc_get_end_position(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    vfunc_get_indentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    vfunc_get_length(): number
    /**
     * fixme
     */
    vfunc_get_line_begin_position(line: number): Iterable
    /**
     * fixme
     */
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    vfunc_get_overwrite(): boolean
    /**
     * Get current caret position.
     */
    vfunc_get_position(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    vfunc_get_start_position(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    vfunc_get_tabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     */
    vfunc_get_text(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    vfunc_get_text_all(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_end(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_line(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     */
    vfunc_goto_position(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    vfunc_goto_start(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     */
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     */
    vfunc_set_auto_indent(auto_indent: boolean): void
    /**
     * Sets the indentation size of the editor.
     */
    vfunc_set_indentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     */
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     */
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (($obj: EditorZoom) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorZoom) => void)): number
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     */
    connect(sigName: "changed", callback: (($obj: EditorZoom, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorZoom, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     */
    connect(sigName: "char-added", callback: (($obj: EditorZoom, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorZoom, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     */
    connect(sigName: "code-changed", callback: (($obj: EditorZoom, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorZoom, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (($obj: EditorZoom) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorZoom) => void)): number
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-callback-add", callback: (($obj: EditorZoom, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorZoom, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     */
    connect(sigName: "glade-member-add", callback: (($obj: EditorZoom, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorZoom, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     */
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorZoom, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorZoom, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Environment {
    /* Methods of IAnjuta-3.0.IAnjuta.Environment */
    /**
     * Convert a directory in the environment to a directory outside.
     * It is useful when the environment use chroot. Take care that
     * the input directory string is freed using g_free but and you need to
     * free the output string when not needed.
     */
    get_real_directory(dir: string): string
    /**
     * Override a command to work in another build environment
     */
    override(dirp: string, argvp: string, envp: string): boolean
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Environment */
    /**
     * Convert a directory in the environment to a directory outside.
     * It is useful when the environment use chroot. Take care that
     * the input directory string is freed using g_free but and you need to
     * free the output string when not needed.
     */
    vfunc_get_real_directory(dir: string): string
    /**
     * Override a command to work in another build environment
     */
    vfunc_override(dirp: string, argvp: string, envp: string): boolean
    static name: string
}
class File {
    /* Methods of IAnjuta-3.0.IAnjuta.File */
    /**
     * Returns the file that was opened with ianjuta_file_open().
     */
    get_file(): Gio.File
    /**
     * The implementor opens the given file.
     */
    open(file: Gio.File): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.File */
    /**
     * Returns the file that was opened with ianjuta_file_open().
     */
    vfunc_get_file(): Gio.File
    /**
     * The implementor opens the given file.
     */
    vfunc_open(file: Gio.File): void
    vfunc_opened(): void
    /* Signals of IAnjuta-3.0.IAnjuta.File */
    /**
     * This signal is emitted when the content is loaded completely.
     */
    connect(sigName: "opened", callback: (($obj: File) => void)): number
    connect_after(sigName: "opened", callback: (($obj: File) => void)): number
    emit(sigName: "opened"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class FileLoader {
    /* Methods of IAnjuta-3.0.IAnjuta.FileLoader */
    peek_interface(file: Gio.File): string
    /* Virtual methods of IAnjuta-3.0.IAnjuta.FileLoader */
    vfunc_peek_interface(file: Gio.File): string
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class FileManager {
    /* Methods of IAnjuta-3.0.IAnjuta.FileManager */
    /**
     * fixme
     */
    set_root(root_uri: string): void
    /**
     * fixme.
     */
    set_selected(file: Gio.File): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.FileManager */
    vfunc_section_changed(file: Gio.File): void
    /**
     * fixme
     */
    vfunc_set_root(root_uri: string): void
    /**
     * fixme.
     */
    vfunc_set_selected(file: Gio.File): void
    /* Signals of IAnjuta-3.0.IAnjuta.FileManager */
    /**
     * fixme
     */
    connect(sigName: "section-changed", callback: (($obj: FileManager, err: Gio.File) => void)): number
    connect_after(sigName: "section-changed", callback: (($obj: FileManager, err: Gio.File) => void)): number
    emit(sigName: "section-changed", err: Gio.File): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class FileSavable {
    /* Methods of IAnjuta-3.0.IAnjuta.FileSavable */
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
     */
    save_as(file: Gio.File): void
    /**
     * if `dirty` is TRUE, sets dirty for the content. Save point will be
     * left and the content will be considered not saved. Otherwise,
     * content will considered saved and save-point will be entered.
     */
    set_dirty(dirty: boolean): void
    /* Methods of IAnjuta-3.0.IAnjuta.File */
    /**
     * Returns the file that was opened with ianjuta_file_open().
     */
    get_file(): Gio.File
    /**
     * The implementor opens the given file.
     */
    open(file: Gio.File): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.FileSavable */
    /**
     * Return is the file is in conflict. It means the file
     * has been modified externally and the user needs to
     * tell which version he wants to use.
     */
    vfunc_is_conflict(): boolean
    /**
     * Returns the dirty status of the content.
     */
    vfunc_is_dirty(): boolean
    /**
     * Return is the file is read-only
     */
    vfunc_is_read_only(): boolean
    /**
     * Saves the content to the original file from which it was loaded.
     * The signal saved is always emitted even if the save fails.
     */
    vfunc_save(): void
    /**
     * Saves the content to a different File.
     * The signal saved is always emitted even if the save fails.
     */
    vfunc_save_as(file: Gio.File): void
    vfunc_saved(file: Gio.File): void
    /**
     * if `dirty` is TRUE, sets dirty for the content. Save point will be
     * left and the content will be considered not saved. Otherwise,
     * content will considered saved and save-point will be entered.
     */
    vfunc_set_dirty(dirty: boolean): void
    vfunc_update_save_ui(): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.File */
    /**
     * Returns the file that was opened with ianjuta_file_open().
     */
    vfunc_get_file(): Gio.File
    /**
     * The implementor opens the given file.
     */
    vfunc_open(file: Gio.File): void
    vfunc_opened(): void
    /* Signals of IAnjuta-3.0.IAnjuta.FileSavable */
    /**
     * This signal is emitted when the content is saved.
     */
    connect(sigName: "saved", callback: (($obj: FileSavable, file: Gio.File) => void)): number
    connect_after(sigName: "saved", callback: (($obj: FileSavable, file: Gio.File) => void)): number
    emit(sigName: "saved", file: Gio.File): void
    connect(sigName: "update-save-ui", callback: (($obj: FileSavable) => void)): number
    connect_after(sigName: "update-save-ui", callback: (($obj: FileSavable) => void)): number
    emit(sigName: "update-save-ui"): void
    /* Signals of IAnjuta-3.0.IAnjuta.File */
    /**
     * This signal is emitted when the content is loaded completely.
     */
    connect(sigName: "opened", callback: (($obj: FileSavable) => void)): number
    connect_after(sigName: "opened", callback: (($obj: FileSavable) => void)): number
    emit(sigName: "opened"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Glade {
    /* Methods of IAnjuta-3.0.IAnjuta.Glade */
    add_association(master: string, slave: string): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Glade */
    vfunc_add_association(master: string, slave: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Help {
    /* Methods of IAnjuta-3.0.IAnjuta.Help */
    /**
     * Search for string `query` in the help and display the result
     */
    search(query: string): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Help */
    /**
     * Search for string `query` in the help and display the result
     */
    vfunc_search(query: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Indenter {
    /* Methods of IAnjuta-3.0.IAnjuta.Indenter */
    /**
     * Indent the area between `start` and `end` according to the indentation rules
     * of the programming language. Usually implemented by language support plugins.
     * Only one indenter can be loaded at a time.
     * Note: Indenters always affect full lines, so start and end will be moved
     * according to the next line start/end.
     */
    indent(start: Iterable, end: Iterable): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Indenter */
    /**
     * Indent the area between `start` and `end` according to the indentation rules
     * of the programming language. Usually implemented by language support plugins.
     * Only one indenter can be loaded at a time.
     * Note: Indenters always affect full lines, so start and end will be moved
     * according to the next line start/end.
     */
    vfunc_indent(start: Iterable, end: Iterable): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Indicable {
    /* Methods of IAnjuta-3.0.IAnjuta.Indicable */
    /**
     * Clear all indicators
     */
    clear(): void
    /**
     * Set an indicator
     */
    set(begin_location: Iterable, end_location: Iterable, indicator: IndicableIndicator): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Indicable */
    /**
     * Clear all indicators
     */
    vfunc_clear(): void
    /**
     * Set an indicator
     */
    vfunc_set(begin_location: Iterable, end_location: Iterable, indicator: IndicableIndicator): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Iterable {
    /* Methods of IAnjuta-3.0.IAnjuta.Iterable */
    /**
     * Assigns the iter position from `src_iter`.
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
     */
    compare(iter2: Iterable): number
    /**
     * Compares the position of `iter2` with this `obj` and returns difference
     * in position of the two (`obj` - `iter2`).
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
     */
    set_position(position: number): boolean
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Iterable */
    /**
     * Assigns the iter position from `src_iter`.
     */
    vfunc_assign(src_iter: Iterable): void
    /**
     * Clones the iterable. The returned iterable object must be unreffed
     * when done.
     */
    vfunc_clone(): Iterable
    /**
     * Compares the position of `iter2` with this `obj`. Returns -1
     * value if this `obj` is smaller than `iter2`. Returns +1 value
     * if this `obj` is larger than `iter2`. And returns 0 if both are equal.
     * If you want difference of the iter positions, use
     * #ianjuta_iterable_diff(). This method is meant for fast comparision.
     */
    vfunc_compare(iter2: Iterable): number
    /**
     * Compares the position of `iter2` with this `obj` and returns difference
     * in position of the two (`obj` - `iter2`).
     */
    vfunc_diff(iter2: Iterable): number
    /**
     * Set iter to first element position. Returns FALSE if
     * there is no element in the iterable (hence does not have first).
     * The iter points to the first valid item.
     */
    vfunc_first(): boolean
    /**
     * Length of the iterable (number of elements indexable by it).
     */
    vfunc_get_length(): number
    /**
     * Index of the current iter in the iterable. It will be
     * from 0 to length - 1 (ianjuta_iter_get_length()) if iter is pointed
     * at valid element. It will return -1 if iter is pointed at end-iter.
     */
    vfunc_get_position(): number
    /**
     * Set iter position to end-iter (one past last element) position.
     * Returns FALSE if there is no element in the iterable (already
     * at end-iter).
     */
    vfunc_last(): boolean
    /**
     * Set the iter position to next element position. Iter can go until one
     * item past the last item and lands in end-iter. end-iter does not point
     * to any valid item and signifies end of the list. Returns FALSE if iter
     * was already at end-iter (iter can not go past it) and remains pointed
     * to the end-iter.
     */
    vfunc_next(): boolean
    /**
     * Set the iter position to previous element position. Returns FALSE if
     * there is no previous element and the iter remains pointed to the first
     * element.
     */
    vfunc_previous(): boolean
    /**
     * Sets the current position of the iter to `position`. The given `position`
     * must be from 0 to length - 1 (#ianjuta_iter_get_length()) to point to
     * a valid element. Passing `position` < 0 will set it to end-iter. It
     * returns TRUE for the above cases. FLASE will be returned, if
     * out-of-range `position` is passed (`position` > length - 1) and iter is
     * set to end-iter.
     */
    vfunc_set_position(position: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class IterableTree {
    /* Methods of IAnjuta-3.0.IAnjuta.IterableTree */
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
    /* Methods of IAnjuta-3.0.IAnjuta.Iterable */
    /**
     * Assigns the iter position from `src_iter`.
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
     */
    compare(iter2: Iterable): number
    /**
     * Compares the position of `iter2` with this `obj` and returns difference
     * in position of the two (`obj` - `iter2`).
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
     */
    set_position(position: number): boolean
    /* Virtual methods of IAnjuta-3.0.IAnjuta.IterableTree */
    /**
     * Iter position set to first child of current iter. If there is no
     * children, return NULL (iter position is not changed).
     */
    vfunc_children(): boolean
    /**
     * Returns true if current iter has children
     */
    vfunc_has_children(): boolean
    /**
     * Set iter position to parent of curernt iter. If there is no parent,
     * returns FALSE (current iter position is not changed)
     */
    vfunc_parent(): boolean
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Iterable */
    /**
     * Assigns the iter position from `src_iter`.
     */
    vfunc_assign(src_iter: Iterable): void
    /**
     * Clones the iterable. The returned iterable object must be unreffed
     * when done.
     */
    vfunc_clone(): Iterable
    /**
     * Compares the position of `iter2` with this `obj`. Returns -1
     * value if this `obj` is smaller than `iter2`. Returns +1 value
     * if this `obj` is larger than `iter2`. And returns 0 if both are equal.
     * If you want difference of the iter positions, use
     * #ianjuta_iterable_diff(). This method is meant for fast comparision.
     */
    vfunc_compare(iter2: Iterable): number
    /**
     * Compares the position of `iter2` with this `obj` and returns difference
     * in position of the two (`obj` - `iter2`).
     */
    vfunc_diff(iter2: Iterable): number
    /**
     * Set iter to first element position. Returns FALSE if
     * there is no element in the iterable (hence does not have first).
     * The iter points to the first valid item.
     */
    vfunc_first(): boolean
    /**
     * Length of the iterable (number of elements indexable by it).
     */
    vfunc_get_length(): number
    /**
     * Index of the current iter in the iterable. It will be
     * from 0 to length - 1 (ianjuta_iter_get_length()) if iter is pointed
     * at valid element. It will return -1 if iter is pointed at end-iter.
     */
    vfunc_get_position(): number
    /**
     * Set iter position to end-iter (one past last element) position.
     * Returns FALSE if there is no element in the iterable (already
     * at end-iter).
     */
    vfunc_last(): boolean
    /**
     * Set the iter position to next element position. Iter can go until one
     * item past the last item and lands in end-iter. end-iter does not point
     * to any valid item and signifies end of the list. Returns FALSE if iter
     * was already at end-iter (iter can not go past it) and remains pointed
     * to the end-iter.
     */
    vfunc_next(): boolean
    /**
     * Set the iter position to previous element position. Returns FALSE if
     * there is no previous element and the iter remains pointed to the first
     * element.
     */
    vfunc_previous(): boolean
    /**
     * Sets the current position of the iter to `position`. The given `position`
     * must be from 0 to length - 1 (#ianjuta_iter_get_length()) to point to
     * a valid element. Passing `position` < 0 will set it to end-iter. It
     * returns TRUE for the above cases. FLASE will be returned, if
     * out-of-range `position` is passed (`position` > length - 1) and iter is
     * set to end-iter.
     */
    vfunc_set_position(position: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Language {
    /* Methods of IAnjuta-3.0.IAnjuta.Language */
    /**
     * Conviniece method to get the id directly from the editor
     */
    get_from_editor(editor: EditorLanguage): LanguageId
    get_from_mime_type(mime_type: string): LanguageId
    get_from_string(string: string): LanguageId
    get_languages(): number[]
    get_make_target(id: LanguageId): string
    get_name(id: LanguageId): string
    /**
     * Conviniece method to get the name directly from the editor
     */
    get_name_from_editor(editor: EditorLanguage): string
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Language */
    /**
     * Conviniece method to get the id directly from the editor
     */
    vfunc_get_from_editor(editor: EditorLanguage): LanguageId
    vfunc_get_from_mime_type(mime_type: string): LanguageId
    vfunc_get_from_string(string: string): LanguageId
    vfunc_get_languages(): number[]
    vfunc_get_make_target(id: LanguageId): string
    vfunc_get_name(id: LanguageId): string
    /**
     * Conviniece method to get the name directly from the editor
     */
    vfunc_get_name_from_editor(editor: EditorLanguage): string
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class LanguageProvider {
    /* Methods of IAnjuta-3.0.IAnjuta.LanguageProvider */
    /**
     * Searches for a calltip in the cache
     */
    get_calltip_cache(call_context: string): string[]
    /**
     * Searches for a calltip context
     */
    get_calltip_context(iter: Iterable): string
    /**
     * Creates a new calltip
     */
    new_calltip(call_context: string, iter: Iterable): void
    /**
     * Show completion for the context at position `iter`. The provider should
     * call ianjuta_editor_assist_proposals here to add proposals to the list.
     * 
     * Note that this is called after every character typed and the list of proposals
     * has to be completely renewed.
     */
    populate_completions(iter: Iterable): Iterable | null
    /* Methods of IAnjuta-3.0.IAnjuta.Provider */
    /**
     * Show completion for the context at position `iter`
     */
    activate(iter: Iterable, data?: object | null): void
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
     */
    populate(iter: Iterable): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.LanguageProvider */
    /**
     * Searches for a calltip in the cache
     */
    vfunc_get_calltip_cache(call_context: string): string[]
    /**
     * Searches for a calltip context
     */
    vfunc_get_calltip_context(iter: Iterable): string
    /**
     * Creates a new calltip
     */
    vfunc_new_calltip(call_context: string, iter: Iterable): void
    /**
     * Show completion for the context at position `iter`. The provider should
     * call ianjuta_editor_assist_proposals here to add proposals to the list.
     * 
     * Note that this is called after every character typed and the list of proposals
     * has to be completely renewed.
     */
    vfunc_populate_completions(iter: Iterable): Iterable | null
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Provider */
    /**
     * Show completion for the context at position `iter`
     */
    vfunc_activate(iter: Iterable, data?: object | null): void
    /**
     * Return a (translatable) name for the provider
     */
    vfunc_get_name(): string
    /**
     * Get the iter where the current completion started
     */
    vfunc_get_start_iter(): Iterable
    /**
     * Show completion for the context at position `iter`. The provider should
     * call ianjuta_editor_assist_proposals here to add proposals to the list.
     * 
     * Note that this is called after every character typed and the list of proposals
     * has to be completely renewed.
     */
    vfunc_populate(iter: Iterable): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Loader {
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Markable {
    /* Methods of IAnjuta-3.0.IAnjuta.Markable */
    /**
     * Delete the `marker` from all locations.
     */
    delete_all_markers(marker: MarkableMarker): void
    /**
     * Check if the `marker` is set at the given `location`.
     */
    is_marker_set(location: number, marker: MarkableMarker): boolean
    /**
     * Location where a marker is set could have moved by some operation in
     * the implementation. To retrieve the correct location where the marker
     * has moved, pass the handle retured by ianjuta_markable_mark() to this
     * method.
     */
    location_from_handle(handle: number): number
    /**
     * Marks the specified location with the given marker type. Location is
     * implementation depenedent. For example, for an editor location means
     * lines where markers are set.
     */
    mark(location: number, marker: MarkableMarker, tooltip?: string | null): number
    /**
     * Clears the `marker` at given `location`.
     */
    unmark(location: number, marker: MarkableMarker): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Markable */
    /**
     * Delete the `marker` from all locations.
     */
    vfunc_delete_all_markers(marker: MarkableMarker): void
    /**
     * Check if the `marker` is set at the given `location`.
     */
    vfunc_is_marker_set(location: number, marker: MarkableMarker): boolean
    /**
     * Location where a marker is set could have moved by some operation in
     * the implementation. To retrieve the correct location where the marker
     * has moved, pass the handle retured by ianjuta_markable_mark() to this
     * method.
     */
    vfunc_location_from_handle(handle: number): number
    /**
     * Marks the specified location with the given marker type. Location is
     * implementation depenedent. For example, for an editor location means
     * lines where markers are set.
     */
    vfunc_mark(location: number, marker: MarkableMarker, tooltip?: string | null): number
    vfunc_marker_clicked(double_click: boolean, location: number): void
    /**
     * Clears the `marker` at given `location`.
     */
    vfunc_unmark(location: number, marker: MarkableMarker): void
    /* Signals of IAnjuta-3.0.IAnjuta.Markable */
    /**
     * The signal is emitted when the user clicks on a marker
     */
    connect(sigName: "marker-clicked", callback: (($obj: Markable, double_click: boolean, location: number) => void)): number
    connect_after(sigName: "marker-clicked", callback: (($obj: Markable, double_click: boolean, location: number) => void)): number
    emit(sigName: "marker-clicked", double_click: boolean, location: number): void
    static name: string
}
class MessageManager {
    /* Methods of IAnjuta-3.0.IAnjuta.MessageManager */
    /**
     * Remove view from the message-manager. The view
     * will become invalid.
     */
    remove_view(view: MessageView): void
    /**
     * Set view to be on top of the notebook.
     */
    set_current_view(view: MessageView): void
    /**
     * Sets the icon of view.
     */
    set_view_icon(view: MessageView, icon: GdkPixbuf.PixbufAnimation): void
    /**
     * Sets the icon of view.
     */
    set_view_icon_from_stock(view: MessageView, icon: string): void
    /**
     * Sets the title of view.
     */
    set_view_title(view: MessageView, title: string): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.MessageManager */
    /**
     * Remove view from the message-manager. The view
     * will become invalid.
     */
    vfunc_remove_view(view: MessageView): void
    /**
     * Set view to be on top of the notebook.
     */
    vfunc_set_current_view(view: MessageView): void
    /**
     * Sets the icon of view.
     */
    vfunc_set_view_icon(view: MessageView, icon: GdkPixbuf.PixbufAnimation): void
    /**
     * Sets the icon of view.
     */
    vfunc_set_view_icon_from_stock(view: MessageView, icon: string): void
    /**
     * Sets the title of view.
     */
    vfunc_set_view_title(view: MessageView, title: string): void
    static name: string
}
class MessageView {
    /* Methods of IAnjuta-3.0.IAnjuta.MessageView */
    /**
     * Append the message with summary displayed and details displayed as tooltip
     */
    append(type: MessageViewType, summary: string, details: string): void
    /**
     * Appends the text in buffer. Flushes the buffer where a newline is found.
     * by emiiting buffer_flushed signal. The string is expected to be utf8.
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
    /* Virtual methods of IAnjuta-3.0.IAnjuta.MessageView */
    /**
     * Append the message with summary displayed and details displayed as tooltip
     */
    vfunc_append(type: MessageViewType, summary: string, details: string): void
    /**
     * Appends the text in buffer. Flushes the buffer where a newline is found.
     * by emiiting buffer_flushed signal. The string is expected to be utf8.
     */
    vfunc_buffer_append(text: string): void
    vfunc_buffer_flushed(line: string): void
    /**
     * Clear all messages in buffer
     */
    vfunc_clear(): void
    /**
     * Get the currently selected message
     */
    vfunc_get_current_message(): string
    vfunc_message_clicked(message: string): void
    /**
     * Select next message (of type INFO, WARNING or ERROR)
     */
    vfunc_select_next(): void
    /**
     * Select previous message
     */
    vfunc_select_previous(): void
    /* Signals of IAnjuta-3.0.IAnjuta.MessageView */
    /**
     * Emitted when #ianjuta_message_view_buffer_append found a newline
     */
    connect(sigName: "buffer-flushed", callback: (($obj: MessageView, line: string) => void)): number
    connect_after(sigName: "buffer-flushed", callback: (($obj: MessageView, line: string) => void)): number
    emit(sigName: "buffer-flushed", line: string): void
    /**
     * Emitted when the user clicks on a message
     */
    connect(sigName: "message-clicked", callback: (($obj: MessageView, message: string) => void)): number
    connect_after(sigName: "message-clicked", callback: (($obj: MessageView, message: string) => void)): number
    emit(sigName: "message-clicked", message: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class PluginFactory {
    static name: string
}
class Preferences {
    /* Methods of IAnjuta-3.0.IAnjuta.Preferences */
    /**
     * When called, the plugin should install it's preferences
     */
    merge(prefs: Anjuta.Preferences): void
    /**
     * When called, the plugin should uninstall it's preferences
     */
    unmerge(prefs: Anjuta.Preferences): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Preferences */
    /**
     * When called, the plugin should install it's preferences
     */
    vfunc_merge(prefs: Anjuta.Preferences): void
    /**
     * When called, the plugin should uninstall it's preferences
     */
    vfunc_unmerge(prefs: Anjuta.Preferences): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Print {
    /* Methods of IAnjuta-3.0.IAnjuta.Print */
    /**
     * Print the plugin (the file in case of the editor). In most cases this will show
     * a print dialog
     */
    print(): void
    /**
     * Show print preview dialog
     */
    print_preview(): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Print */
    /**
     * Print the plugin (the file in case of the editor). In most cases this will show
     * a print dialog
     */
    vfunc_print(): void
    /**
     * Show print preview dialog
     */
    vfunc_print_preview(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Project {
    /* Methods of IAnjuta-3.0.IAnjuta.Project */
    /**
     * Create a new node and insert it after sibling
     */
    add_node_after(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null): Anjuta.ProjectNode
    /**
     * Create a new node and insert it before sibling
     */
    add_node_before(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null): Anjuta.ProjectNode
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
     */
    load_node(node: Anjuta.ProjectNode): boolean
    /**
     * Remove a node
     */
    remove_node(node: Anjuta.ProjectNode): boolean
    /**
     * Remove a property of the node
     */
    remove_property(node: Anjuta.ProjectNode, id: string, name?: string | null): boolean
    /**
     * Save a project node
     */
    save_node(node: Anjuta.ProjectNode): boolean
    /**
     * Change a properties on node.
     */
    set_property(node: Anjuta.ProjectNode, id: string, name: string | null, value: string): Anjuta.ProjectProperty | null
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Project */
    /**
     * Create a new node and insert it after sibling
     */
    vfunc_add_node_after(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null): Anjuta.ProjectNode
    /**
     * Create a new node and insert it before sibling
     */
    vfunc_add_node_before(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null): Anjuta.ProjectNode
    vfunc_file_changed(node?: object | null): void
    /**
     * Return a list of possible node;
     */
    vfunc_get_node_info(): Anjuta.ProjectNodeInfo[]
    /**
     * Get root_node
     */
    vfunc_get_root(): Anjuta.ProjectNode
    /**
     * Return TRUE if the project is loaded;
     */
    vfunc_is_loaded(): boolean
    /**
     * Reload a project node
     */
    vfunc_load_node(node: Anjuta.ProjectNode): boolean
    vfunc_node_changed(node: object | null, error: GLib.Error): void
    vfunc_node_loaded(node: object | null, error: GLib.Error): void
    vfunc_node_saved(node: object | null, error: GLib.Error): void
    /**
     * Remove a node
     */
    vfunc_remove_node(node: Anjuta.ProjectNode): boolean
    /**
     * Remove a property of the node
     */
    vfunc_remove_property(node: Anjuta.ProjectNode, id: string, name?: string | null): boolean
    /**
     * Save a project node
     */
    vfunc_save_node(node: Anjuta.ProjectNode): boolean
    /**
     * Change a properties on node.
     */
    vfunc_set_property(node: Anjuta.ProjectNode, id: string, name: string | null, value: string): Anjuta.ProjectProperty | null
    /* Signals of IAnjuta-3.0.IAnjuta.Project */
    /**
     * This signal is emitted when the project is changed on the disk. The
     * corresponding node has to be reloaded.
     */
    connect(sigName: "file-changed", callback: (($obj: Project, node?: object | null) => void)): number
    connect_after(sigName: "file-changed", callback: (($obj: Project, node?: object | null) => void)): number
    emit(sigName: "file-changed", node?: object | null): void
    /**
     * This signal is emitted when a node is changed by a function of this
     * interface. The error argument is not NULL if the change was not
     * possible. The corresponding node need to be saved.
     */
    connect(sigName: "node-changed", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    connect_after(sigName: "node-changed", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    emit(sigName: "node-changed", node: object | null, error: GLib.Error): void
    /**
     * This signal is emitted when a node is loaded. It returns an error if the
     * load operation fail.
     */
    connect(sigName: "node-loaded", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    connect_after(sigName: "node-loaded", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    emit(sigName: "node-loaded", node: object | null, error: GLib.Error): void
    /**
     * This signal is emitted when a node is saved. It returns an error if the
     * save operation fail.
     */
    connect(sigName: "node-saved", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    connect_after(sigName: "node-saved", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    emit(sigName: "node-saved", node: object | null, error: GLib.Error): void
    static name: string
}
class ProjectBackend {
    /* Methods of IAnjuta-3.0.IAnjuta.ProjectBackend */
    /**
     * Create a new Anjuta project.
     */
    new_project(file: Gio.File): Project
    /**
     * Check if the directory contains a project supported by this
     * backend.
     */
    probe(directory: Gio.File): number
    /* Virtual methods of IAnjuta-3.0.IAnjuta.ProjectBackend */
    /**
     * Create a new Anjuta project.
     */
    vfunc_new_project(file: Gio.File): Project
    /**
     * Check if the directory contains a project supported by this
     * backend.
     */
    vfunc_probe(directory: Gio.File): number
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class ProjectChooser {
    /* Methods of IAnjuta-3.0.IAnjuta.ProjectChooser */
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
     */
    set_project_model(manager: ProjectManager, child_type: Anjuta.ProjectNodeType): boolean
    /* Virtual methods of IAnjuta-3.0.IAnjuta.ProjectChooser */
    vfunc_changed(): void
    /**
     * Gets the currently selected element in the project chooser.
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
     */
    vfunc_set_project_model(manager: ProjectManager, child_type: Anjuta.ProjectNodeType): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.ProjectChooser */
    /**
     * Emitted when the selected node is changed.
     */
    connect(sigName: "changed", callback: (($obj: ProjectChooser) => void)): number
    connect_after(sigName: "changed", callback: (($obj: ProjectChooser) => void)): number
    emit(sigName: "changed"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class ProjectManager {
    /* Methods of IAnjuta-3.0.IAnjuta.ProjectManager */
    /**
     * Prompts the user to add a new group to the project. The user can select
     * a parent group different from the one set as default.
     */
    add_group(name: string, default_group?: Gio.File | null): Gio.File
    /**
     * Prompts the user to add a file to the project. If the user selects
     * multiple files only the first source file is returned.
     * 
     * You can add non existing file. In this case the element_added
     * signal will be emitted with a non existing file. So it is
     * up to the caller to reemit this signal later when the file
     * is created.
     */
    add_source(name: string, default_target?: Gio.File | null): Gio.File
    /**
     * Adds a file to the project without prompting the user.
     * 
     * You can add non existing file. In this case the element_added
     * signal will be emitted with a non existing file. So it is
     * up to the caller to reemit this signal later when the file
     * is created.
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
     */
    add_sources(names: string[], default_target?: Gio.File | null): Gio.File[]
    /**
     * Prompts the user to add a new target to the project. The user can select
     * a parent group different from the one set as default.
     */
    add_target(name: string, default_group?: Gio.File | null): Gio.File
    /**
     * Gets the capabilites of project whether it can add group, target
     * sources etc.
     */
    get_capabilities(): number
    /**
     * Recursively gets the list of all children below the corresponding
     * parent having the specify type.
     */
    get_children(parent: Gio.File, children_type: number): Gio.File[]
    /**
     * Gets the current project.
     */
    get_current_project(): Project
    /**
     * Get a list of all elements of this type in the project.
     */
    get_elements(element_type: Anjuta.ProjectNodeType): Gio.File[]
    get_packages(): string[]
    /**
     * Gets the currently selected element in the project manager view.
     */
    get_selected(): Gio.File
    /**
     * Get the type of the corresponding target: program, library...
     */
    get_target_type(target: Gio.File): Anjuta.ProjectNodeType
    /**
     * Get a list of targets in the project with the corresponding type.
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
     */
    remove_file(file: Gio.File): boolean
    /* Virtual methods of IAnjuta-3.0.IAnjuta.ProjectManager */
    /**
     * Prompts the user to add a new group to the project. The user can select
     * a parent group different from the one set as default.
     */
    vfunc_add_group(name: string, default_group?: Gio.File | null): Gio.File
    /**
     * Prompts the user to add a file to the project. If the user selects
     * multiple files only the first source file is returned.
     * 
     * You can add non existing file. In this case the element_added
     * signal will be emitted with a non existing file. So it is
     * up to the caller to reemit this signal later when the file
     * is created.
     */
    vfunc_add_source(name: string, default_target?: Gio.File | null): Gio.File
    /**
     * Adds a file to the project without prompting the user.
     * 
     * You can add non existing file. In this case the element_added
     * signal will be emitted with a non existing file. So it is
     * up to the caller to reemit this signal later when the file
     * is created.
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
     */
    vfunc_add_sources(names: string[], default_target?: Gio.File | null): Gio.File[]
    /**
     * Prompts the user to add a new target to the project. The user can select
     * a parent group different from the one set as default.
     */
    vfunc_add_target(name: string, default_group?: Gio.File | null): Gio.File
    vfunc_element_added(element: Gio.File): void
    vfunc_element_removed(element: Gio.File): void
    vfunc_element_selected(element: Gio.File): void
    /**
     * Gets the capabilites of project whether it can add group, target
     * sources etc.
     */
    vfunc_get_capabilities(): number
    /**
     * Recursively gets the list of all children below the corresponding
     * parent having the specify type.
     */
    vfunc_get_children(parent: Gio.File, children_type: number): Gio.File[]
    /**
     * Gets the current project.
     */
    vfunc_get_current_project(): Project
    /**
     * Get a list of all elements of this type in the project.
     */
    vfunc_get_elements(element_type: Anjuta.ProjectNodeType): Gio.File[]
    vfunc_get_packages(): string[]
    /**
     * Gets the currently selected element in the project manager view.
     */
    vfunc_get_selected(): Gio.File
    /**
     * Get the type of the corresponding target: program, library...
     */
    vfunc_get_target_type(target: Gio.File): Anjuta.ProjectNodeType
    /**
     * Get a list of targets in the project with the corresponding type.
     */
    vfunc_get_targets(target_type: Anjuta.ProjectNodeType): Gio.File[]
    /**
     * Gets whether a project is currently opened.
     */
    vfunc_is_open(): boolean
    vfunc_project_loaded(error: GLib.Error): void
    /**
     * Remove a source file from the project. If the file is used in several
     * targets, it is removed from all targets. The file could be removed from
     * the disk.
     */
    vfunc_remove_file(file: Gio.File): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.ProjectManager */
    connect(sigName: "element-added", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    emit(sigName: "element-added", object: Gio.File): void
    connect(sigName: "element-removed", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    emit(sigName: "element-removed", object: Gio.File): void
    connect(sigName: "element-selected", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    connect_after(sigName: "element-selected", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    emit(sigName: "element-selected", object: Gio.File): void
    connect(sigName: "project-loaded", callback: (($obj: ProjectManager, object: GLib.Error) => void)): number
    connect_after(sigName: "project-loaded", callback: (($obj: ProjectManager, object: GLib.Error) => void)): number
    emit(sigName: "project-loaded", object: GLib.Error): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Provider {
    /* Methods of IAnjuta-3.0.IAnjuta.Provider */
    /**
     * Show completion for the context at position `iter`
     */
    activate(iter: Iterable, data?: object | null): void
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
     */
    populate(iter: Iterable): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Provider */
    /**
     * Show completion for the context at position `iter`
     */
    vfunc_activate(iter: Iterable, data?: object | null): void
    /**
     * Return a (translatable) name for the provider
     */
    vfunc_get_name(): string
    /**
     * Get the iter where the current completion started
     */
    vfunc_get_start_iter(): Iterable
    /**
     * Show completion for the context at position `iter`. The provider should
     * call ianjuta_editor_assist_proposals here to add proposals to the list.
     * 
     * Note that this is called after every character typed and the list of proposals
     * has to be completely renewed.
     */
    vfunc_populate(iter: Iterable): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class SnippetsManager {
    /* Methods of IAnjuta-3.0.IAnjuta.SnippetsManager */
    /**
     * Insert snippet in the current editor.
     */
    insert(key: string, editing_session: boolean): boolean
    /* Virtual methods of IAnjuta-3.0.IAnjuta.SnippetsManager */
    /**
     * Insert snippet in the current editor.
     */
    vfunc_insert(key: string, editing_session: boolean): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Stream {
    /* Methods of IAnjuta-3.0.IAnjuta.Stream */
    /**
     * The implementor opens the given stream.
     */
    open(stream?: object | null): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Stream */
    /**
     * The implementor opens the given stream.
     */
    vfunc_open(stream?: object | null): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class StreamLoader {
    /* Methods of IAnjuta-3.0.IAnjuta.StreamLoader */
    /**
     * Peeks the stream and determines the interface which can load
     * this stream.
     */
    peek_interface(stream?: object | null): string
    /* Virtual methods of IAnjuta-3.0.IAnjuta.StreamLoader */
    /**
     * Peeks the stream and determines the interface which can load
     * this stream.
     */
    vfunc_peek_interface(stream?: object | null): string
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class StreamSavable {
    /* Methods of IAnjuta-3.0.IAnjuta.StreamSavable */
    save(stream?: object | null): void
    /* Methods of IAnjuta-3.0.IAnjuta.Stream */
    /**
     * The implementor opens the given stream.
     */
    open(stream?: object | null): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.StreamSavable */
    vfunc_save(stream?: object | null): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Stream */
    /**
     * The implementor opens the given stream.
     */
    vfunc_open(stream?: object | null): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Symbol {
    /* Methods of IAnjuta-3.0.IAnjuta.Symbol */
    /**
     * Retreives the boolean value of a boolean `field`.
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
     */
    get_int(field: SymbolField): number
    /**
     * Retreives the string value of a string `field`.
     */
    get_string(field: SymbolField): string
    /**
     * A convenience method to get value of #IANJUTA_SYMBOL_FIELD_TYPE
     * field typecasted to IAnjutaSymbolType. Numerical value is unchanged.
     */
    get_sym_type(): SymbolType
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Symbol */
    /**
     * Retreives the boolean value of a boolean `field`.
     */
    vfunc_get_boolean(field: SymbolField): boolean
    /**
     * A convenience method to get a small icon (16x16) representing the symbol
     * kind. You *need* a query with fields #IANJUTA_SYMBOL_FIELD_ACCESS and
     * #IANJUTA_SYMBOL_FIELD_KIND selected.
     */
    vfunc_get_icon(): GdkPixbuf.Pixbuf
    /**
     * Retreives the integer value of an integer `field`.
     */
    vfunc_get_int(field: SymbolField): number
    /**
     * Retreives the string value of a string `field`.
     */
    vfunc_get_string(field: SymbolField): string
    /**
     * A convenience method to get value of #IANJUTA_SYMBOL_FIELD_TYPE
     * field typecasted to IAnjutaSymbolType. Numerical value is unchanged.
     */
    vfunc_get_sym_type(): SymbolType
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class SymbolManager {
    /* Methods of IAnjuta-3.0.IAnjuta.SymbolManager */
    /**
     * Activates the package for searches in the global symbol database.
     */
    activate_package(pkg_name: string, pkg_version: string): boolean
    /**
     * Deactivates all activate packages
     */
    deactivate_all(): void
    /**
     * Deactivates the package if it was found. If package is NULL, deactivate all
     * packages.
     */
    deactivate_package(pkg_name: string, pkg_version: string): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.SymbolManager */
    /**
     * Activates the package for searches in the global symbol database.
     */
    vfunc_activate_package(pkg_name: string, pkg_version: string): boolean
    /**
     * Deactivates all activate packages
     */
    vfunc_deactivate_all(): void
    /**
     * Deactivates the package if it was found. If package is NULL, deactivate all
     * packages.
     */
    vfunc_deactivate_package(pkg_name: string, pkg_version: string): void
    vfunc_prj_scan_end(process_id: number): void
    vfunc_sys_scan_end(process_id: number): void
    /* Signals of IAnjuta-3.0.IAnjuta.SymbolManager */
    connect(sigName: "prj-scan-end", callback: (($obj: SymbolManager, object: number) => void)): number
    connect_after(sigName: "prj-scan-end", callback: (($obj: SymbolManager, object: number) => void)): number
    emit(sigName: "prj-scan-end", object: number): void
    connect(sigName: "sys-scan-end", callback: (($obj: SymbolManager, object: number) => void)): number
    connect_after(sigName: "sys-scan-end", callback: (($obj: SymbolManager, object: number) => void)): number
    emit(sigName: "sys-scan-end", object: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class SymbolQuery {
    /* Methods of IAnjuta-3.0.IAnjuta.SymbolQuery */
    cancel(): void
    /**
     * Sets the fields of Query.
     */
    set_fields(n_fields: number, fields: SymbolField): void
    /**
     * Sets the filescope search of Query.
     */
    set_file_scope(filescope_search: SymbolQueryFileScope): void
    /**
     * Sets the bit mask of symbol type filters. if `include_types` is TRUE,
     * symbols satisfying the given symbol types are selected, otherwise
     * they are excluded.
     */
    set_filters(filters: SymbolType, include_types: boolean): void
    /**
     * Sets the field with which result of query is grouped. As a result
     * there will be no duplicates of with this field.
     */
    set_group_by(field: SymbolField): void
    /**
     * Sets the limit of Query results. No more than `limit` results are
     * returned.
     */
    set_limit(limit: number): void
    /**
     * Sets the mode of Query.
     */
    set_mode(mode: SymbolQueryMode): void
    /**
     * Sets the offset index of Query results.
     */
    set_offset(offset: number): void
    /**
     * Sets the field with which result of query is ordered.
     */
    set_order_by(field: SymbolField): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.SymbolQuery */
    vfunc_async_result(result: GObject.Object): void
    vfunc_cancel(): void
    /**
     * Sets the fields of Query.
     */
    vfunc_set_fields(n_fields: number, fields: SymbolField): void
    /**
     * Sets the filescope search of Query.
     */
    vfunc_set_file_scope(filescope_search: SymbolQueryFileScope): void
    /**
     * Sets the bit mask of symbol type filters. if `include_types` is TRUE,
     * symbols satisfying the given symbol types are selected, otherwise
     * they are excluded.
     */
    vfunc_set_filters(filters: SymbolType, include_types: boolean): void
    /**
     * Sets the field with which result of query is grouped. As a result
     * there will be no duplicates of with this field.
     */
    vfunc_set_group_by(field: SymbolField): void
    /**
     * Sets the limit of Query results. No more than `limit` results are
     * returned.
     */
    vfunc_set_limit(limit: number): void
    /**
     * Sets the mode of Query.
     */
    vfunc_set_mode(mode: SymbolQueryMode): void
    /**
     * Sets the offset index of Query results.
     */
    vfunc_set_offset(offset: number): void
    /**
     * Sets the field with which result of query is ordered.
     */
    vfunc_set_order_by(field: SymbolField): void
    /* Signals of IAnjuta-3.0.IAnjuta.SymbolQuery */
    connect(sigName: "async-result", callback: (($obj: SymbolQuery, object: GObject.Object) => void)): number
    connect_after(sigName: "async-result", callback: (($obj: SymbolQuery, object: GObject.Object) => void)): number
    emit(sigName: "async-result", object: GObject.Object): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Terminal {
    /* Methods of IAnjuta-3.0.IAnjuta.Terminal */
    /**
     * Run the command in a terminal, setting the working directory
     * and environment variables.
     */
    execute_command(directory: string, command: string, environment: string[]): number
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Terminal */
    vfunc_child_exited(pid: number, status: number): void
    /**
     * Run the command in a terminal, setting the working directory
     * and environment variables.
     */
    vfunc_execute_command(directory: string, command: string, environment: string[]): number
    /* Signals of IAnjuta-3.0.IAnjuta.Terminal */
    connect(sigName: "child-exited", callback: (($obj: Terminal, object: number, p0: number) => void)): number
    connect_after(sigName: "child-exited", callback: (($obj: Terminal, object: number, p0: number) => void)): number
    emit(sigName: "child-exited", object: number, p0: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Todo {
    /* Methods of IAnjuta-3.0.IAnjuta.Todo */
    load(file: Gio.File): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Todo */
    vfunc_load(file: Gio.File): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
class Vcs {
    /* Methods of IAnjuta-3.0.IAnjuta.Vcs */
    /**
     * Add files to the VCS repository.
     */
    add(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    /**
     * Check out a copy of a code repository.
     */
    checkout(repository_location: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify): void
    /**
     * Remove files from the VCS repository.
     */
    remove(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Vcs */
    /**
     * Add files to the VCS repository.
     */
    vfunc_add(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    /**
     * Check out a copy of a code repository.
     */
    vfunc_checkout(repository_location: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify): void
    /**
     * Remove files from the VCS repository.
     */
    vfunc_remove(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    vfunc_status_changed(): void
    /* Signals of IAnjuta-3.0.IAnjuta.Vcs */
    connect(sigName: "status-changed", callback: (($obj: Vcs) => void)): number
    connect_after(sigName: "status-changed", callback: (($obj: Vcs) => void)): number
    emit(sigName: "status-changed"): void
    static name: string
}
class Wizard {
    /* Methods of IAnjuta-3.0.IAnjuta.Wizard */
    /**
     * Called when the wizard should start after some user action
     */
    activate(): void
    /* Virtual methods of IAnjuta-3.0.IAnjuta.Wizard */
    /**
     * Called when the wizard should start after some user action
     */
    vfunc_activate(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
abstract class BuildableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.BuildableIface */
    readonly g_iface: GObject.TypeInterface
    readonly build: (obj: Buildable, uri: string) => void
    readonly clean: (obj: Buildable, uri: string) => void
    readonly configure: (obj: Buildable, uri: string) => void
    readonly execute: (obj: Buildable, uri: string) => void
    readonly generate: (obj: Buildable, uri: string) => void
    readonly get_command: (obj: Buildable, command_id: BuildableCommand) => string
    readonly install: (obj: Buildable, uri: string) => void
    readonly reset_commands: (obj: Buildable) => void
    readonly set_command: (obj: Buildable, command_id: BuildableCommand, command: string) => void
    static name: string
}
abstract class BuilderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.BuilderIface */
    readonly g_iface: GObject.TypeInterface
    readonly cancel: (obj: Builder, handle: BuilderHandle) => void
    readonly get_uri_configuration: (obj: Builder, uri: string) => string
    readonly list_configuration: (obj: Builder) => string[]
    static name: string
}
abstract class DebugManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebugManagerIface */
    readonly g_iface: GObject.TypeInterface
    readonly breakpoint_changed: (obj: DebugManager, breakpoint: DebuggerBreakpointItem) => void
    readonly debugger_started: (obj: DebugManager) => void
    readonly debugger_stopped: (obj: DebugManager, err: GLib.Error) => void
    readonly frame_changed: (obj: DebugManager, frame: number, thread: number) => void
    readonly location_changed: (obj: DebugManager, address: number, uri: string, line: number) => void
    readonly program_exited: (obj: DebugManager) => void
    readonly program_loaded: (obj: DebugManager) => void
    readonly program_moved: (obj: DebugManager, pid: number, tid: number, address: number, file: string, line: number) => void
    readonly program_running: (obj: DebugManager) => void
    readonly program_started: (obj: DebugManager) => void
    readonly program_stopped: (obj: DebugManager) => void
    readonly program_unloaded: (obj: DebugManager) => void
    readonly sharedlib_event: (obj: DebugManager) => void
    readonly signal_received: (obj: DebugManager, name: string, description: string) => void
    readonly quit: (obj: DebugManager) => boolean
    readonly start: (obj: DebugManager, uri: string) => boolean
    readonly start_remote: (obj: DebugManager, server: string, uri: string) => boolean
    static name: string
}
abstract class DebuggerBreakpointIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerBreakpointIface */
    readonly g_iface: DebuggerIface
    readonly implement_breakpoint: (obj: DebuggerBreakpoint) => number
    static name: string
}
class DebuggerBreakpointItem {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerBreakpointItem */
    /**
     * type see #IAnjutaBreakpointType enumeration
     */
    readonly type: number
    /**
     * unique identifier
     */
    readonly id: number
    /**
     * source file where is the breakpoint
     */
    readonly file: string
    /**
     * corresponding source file line number
     */
    readonly line: number
    /**
     * corresponding function name
     */
    readonly function_: string
    /**
     * corresponding address
     */
    readonly address: number
    /**
     * TRUE if the breakpoint is enabled
     */
    readonly enable: boolean
    /**
     * TRUE if the breakpoint is ignored
     */
    readonly ignore: number
    /**
     * Count how many time the breakpoint is triggered
     */
    readonly times: number
    /**
     * Additional condition for triggering the breakpoint
     */
    readonly condition: string
    /**
     * TRUE if the breakpoint is temporary
     */
    readonly temporary: boolean
    /**
     * TRUE if the breakpoint is pending
     */
    readonly pending: boolean
    static name: string
}
class DebuggerFrame {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerFrame */
    /**
     * Thread identifier.
     */
    readonly thread: number
    /**
     * Level of the frame, 0 is the topmost one.
     */
    readonly level: number
    /**
     * List of argument of the caller.
     */
    readonly args: string
    /**
     * Source file name where is the program counter.
     */
    readonly file: string
    /**
     * Line number in the file above.
     */
    readonly line: number
    /**
     * Function name where is the program counter.
     */
    readonly function_: string
    /**
     * Library name where is the program counter.
     */
    readonly library: string
    /**
     * Address of the program counter.
     */
    readonly address: number
    static name: string
}
abstract class DebuggerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerIface */
    readonly g_iface: GObject.TypeInterface
    readonly debugger_ready: (obj: Debugger, state: DebuggerState) => void
    readonly debugger_started: (obj: Debugger) => void
    readonly debugger_stopped: (obj: Debugger, err: GLib.Error) => void
    readonly frame_changed: (obj: Debugger, frame: number, thread: number) => void
    readonly program_exited: (obj: Debugger) => void
    readonly program_loaded: (obj: Debugger) => void
    readonly program_moved: (obj: Debugger, pid: number, tid: number, address: number, file: string, line: number) => void
    readonly program_running: (obj: Debugger) => void
    readonly program_stopped: (obj: Debugger) => void
    readonly sharedlib_event: (obj: Debugger) => void
    readonly signal_received: (obj: Debugger, name: string, description: string) => void
    readonly abort: (obj: Debugger) => boolean
    readonly attach: (obj: Debugger, pid: number, source_search_directories: string[]) => boolean
    readonly connect: (obj: Debugger, server: string, args: string, terminal: boolean, stop: boolean) => boolean
    readonly disable_log: (obj: Debugger) => void
    readonly enable_log: (obj: Debugger, log: MessageView) => void
    readonly exit: (obj: Debugger) => boolean
    readonly get_state: (obj: Debugger) => DebuggerState
    readonly handle_signal: (obj: Debugger, name: string, stop: boolean, print: boolean, ignore: boolean) => boolean
    readonly interrupt: (obj: Debugger) => boolean
    readonly load: (obj: Debugger, file: string, mime_type: string, source_search_directories: string[]) => boolean
    readonly quit: (obj: Debugger) => boolean
    readonly run: (obj: Debugger) => boolean
    readonly run_from: (obj: Debugger, file: string, line: number) => boolean
    readonly run_to: (obj: Debugger, file: string, line: number) => boolean
    readonly send_command: (obj: Debugger, command: string) => boolean
    readonly set_environment: (obj: Debugger, env: string) => boolean
    readonly set_frame: (obj: Debugger, frame: number) => boolean
    readonly set_thread: (obj: Debugger, thread: number) => boolean
    readonly set_working_directory: (obj: Debugger, dir: string) => boolean
    readonly start: (obj: Debugger, args: string, terminal: boolean, stop: boolean) => boolean
    readonly step_in: (obj: Debugger) => boolean
    readonly step_out: (obj: Debugger) => boolean
    readonly step_over: (obj: Debugger) => boolean
    readonly unload: (obj: Debugger) => boolean
    static name: string
}
class DebuggerInstructionALine {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionALine */
    /**
     * Address of the line
     */
    readonly address: number
    /**
     * Optional label
     */
    readonly label: string
    /**
     * Diassembled instruction on the line
     */
    readonly text: string
    static name: string
}
class DebuggerInstructionDisassembly {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionDisassembly */
    /**
     * Number of line
     */
    readonly size: number
    /**
     * Array of all lines
     */
    readonly data: DebuggerInstructionALine[]
    static name: string
}
abstract class DebuggerInstructionIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionIface */
    readonly g_iface: DebuggerIface
    readonly run_from_address: (obj: DebuggerInstruction, address: number) => boolean
    readonly run_to_address: (obj: DebuggerInstruction, address: number) => boolean
    readonly step_in_instruction: (obj: DebuggerInstruction) => boolean
    readonly step_over_instruction: (obj: DebuggerInstruction) => boolean
    static name: string
}
class DebuggerMemoryBlock {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerMemoryBlock */
    readonly address: number
    readonly length: number
    readonly data: string
    static name: string
}
abstract class DebuggerMemoryIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerMemoryIface */
    readonly g_iface: DebuggerIface
    static name: string
}
class DebuggerRegisterData {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerRegisterData */
    /**
     * register identifier
     */
    readonly num: number
    /**
     * register name
     */
    readonly name: string
    /**
     * register value
     */
    readonly value: string
    static name: string
}
abstract class DebuggerRegisterIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerRegisterIface */
    readonly g_iface: DebuggerIface
    readonly write_register: (obj: DebuggerRegister, value: DebuggerRegisterData) => boolean
    static name: string
}
abstract class DebuggerVariableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerVariableIface */
    readonly g_iface: DebuggerIface
    readonly assign: (obj: DebuggerVariable, name: string, value: string) => boolean
    readonly destroy: (obj: DebuggerVariable, name: string) => boolean
    static name: string
}
class DebuggerVariableObject {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerVariableObject */
    /**
     * unique variable object name created by backend
     */
    readonly name: string
    /**
     * corresponding variable name or expression
     */
    readonly expression: string
    /**
     * variable type
     */
    readonly type: string
    /**
     * variable value
     */
    readonly value: string
    /**
     * TRUE if the variable has changed
     */
    readonly changed: boolean
    /**
     * TRUE if the variable is outside current scope
     */
    readonly exited: boolean
    /**
     * TRUE if the variable has been removed
     */
    readonly deleted: boolean
    /**
     * Number of variable children, -1 if unknown
     */
    readonly children: number
    /**
     * TRUE if the children value is wrong
     */
    readonly has_more: boolean
    static name: string
}
abstract class DocumentIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DocumentIface */
    readonly g_iface: GObject.TypeInterface
    readonly update_ui: (obj: Document) => void
    readonly begin_undo_action: (obj: Document) => void
    readonly can_redo: (obj: Document) => boolean
    readonly can_undo: (obj: Document) => boolean
    readonly clear: (obj: Document) => void
    readonly copy: (obj: Document) => void
    readonly cut: (obj: Document) => void
    readonly end_undo_action: (obj: Document) => void
    readonly get_filename: (obj: Document) => string
    readonly grab_focus: (obj: Document) => void
    readonly paste: (obj: Document) => void
    readonly redo: (obj: Document) => void
    readonly undo: (obj: Document) => void
    static name: string
}
abstract class DocumentManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DocumentManagerIface */
    readonly g_iface: GObject.TypeInterface
    readonly document_added: (obj: DocumentManager, doc: Document) => void
    readonly document_removed: (obj: DocumentManager, doc: Document) => void
    readonly add_bookmark: (obj: DocumentManager, file: Gio.File, line: number) => void
    readonly add_buffer: (obj: DocumentManager, name: string, content: string) => Editor
    readonly add_document: (obj: DocumentManager, document: Document) => void
    readonly find_document_with_file: (obj: DocumentManager, file: Gio.File) => Document
    readonly get_current_document: (obj: DocumentManager) => Document
    readonly get_doc_widgets: (obj: DocumentManager) => Gtk.Widget[]
    readonly get_file: (obj: DocumentManager, filename: string) => Gio.File
    readonly goto_file_line: (obj: DocumentManager, file: Gio.File, lineno: number) => Editor
    readonly goto_file_line_mark: (obj: DocumentManager, file: Gio.File, lineno: number, mark: boolean) => Editor
    readonly remove_document: (obj: DocumentManager, document: Document, save_before: boolean) => boolean
    readonly set_current_document: (obj: DocumentManager, document: Document) => void
    static name: string
}
abstract class EditorAssistIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorAssistIface */
    readonly g_iface: EditorIface
    readonly cancelled: (obj: EditorAssist) => void
    readonly add: (obj: EditorAssist, provider: Provider) => void
    readonly invoke: (obj: EditorAssist, provider: Provider) => void
    readonly proposals: (obj: EditorAssist, provider: Provider, proposals: EditorAssistProposal[], pre_word: string, finished: boolean) => void
    readonly remove: (obj: EditorAssist, provider: Provider) => void
    static name: string
}
class EditorAssistProposal {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorAssistProposal */
    readonly label: string
    readonly markup: string
    readonly info: string
    readonly text: string
    readonly icon: GdkPixbuf.Pixbuf
    readonly data: object
    static name: string
}
abstract class EditorCellIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorCellIface */
    readonly g_iface: GObject.TypeInterface
    readonly get_attribute: (obj: EditorCell) => EditorAttribute
    readonly get_char: (obj: EditorCell, char_index: number) => number
    readonly get_character: (obj: EditorCell) => string
    readonly get_length: (obj: EditorCell) => number
    static name: string
}
abstract class EditorCellStyleIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorCellStyleIface */
    readonly g_iface: EditorCellIface
    readonly get_background_color: (obj: EditorCellStyle) => string
    readonly get_color: (obj: EditorCellStyle) => string
    readonly get_font_description: (obj: EditorCellStyle) => string
    static name: string
}
abstract class EditorCommentIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorCommentIface */
    readonly g_iface: EditorIface
    readonly block: (obj: EditorComment) => void
    readonly box: (obj: EditorComment) => void
    readonly stream: (obj: EditorComment) => void
    static name: string
}
abstract class EditorConvertIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorConvertIface */
    readonly g_iface: EditorIface
    readonly to_lower: (obj: EditorConvert, start_position: Iterable, end_position: Iterable) => void
    readonly to_upper: (obj: EditorConvert, start_position: Iterable, end_position: Iterable) => void
    static name: string
}
abstract class EditorFactoryIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorFactoryIface */
    readonly g_iface: GObject.TypeInterface
    static name: string
}
abstract class EditorFoldsIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorFoldsIface */
    readonly g_iface: EditorIface
    readonly close_all: (obj: EditorFolds) => void
    readonly open_all: (obj: EditorFolds) => void
    readonly toggle_current: (obj: EditorFolds) => void
    static name: string
}
abstract class EditorGladeSignalIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorGladeSignalIface */
    readonly g_iface: EditorIface
    readonly drop: (obj: EditorGladeSignal, iterator: Iterable, signal_data: string) => void
    readonly drop_possible: (obj: EditorGladeSignal, iterator: Iterable) => boolean
    static name: string
}
abstract class EditorGotoIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorGotoIface */
    readonly g_iface: EditorIface
    readonly end_block: (obj: EditorGoto) => void
    readonly matching_brace: (obj: EditorGoto) => void
    readonly start_block: (obj: EditorGoto) => void
    static name: string
}
abstract class EditorHoverIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorHoverIface */
    readonly g_iface: EditorIface
    readonly hover_leave: (obj: EditorHover, position: Iterable) => void
    readonly hover_over: (obj: EditorHover, position: Iterable) => void
    readonly display: (obj: EditorHover, position: Iterable, info: string) => void
    static name: string
}
abstract class EditorIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorIface */
    readonly g_iface: GObject.TypeInterface
    readonly backspace: (obj: Editor) => void
    readonly changed: (obj: Editor, position: Iterable, added: boolean, length: number, lines: number, text: string) => void
    readonly char_added: (obj: Editor, position: Iterable, ch: number) => void
    readonly code_changed: (obj: Editor, position: Iterable, code: string) => void
    readonly cursor_moved: (obj: Editor) => void
    readonly glade_callback_add: (obj: Editor, widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string) => void
    readonly glade_member_add: (obj: Editor, widget_typename: string, widget_name: string, filename: string) => void
    readonly line_marks_gutter_clicked: (obj: Editor, location: number) => void
    readonly append: (obj: Editor, text: string, length: number) => void
    readonly erase: (obj: Editor, position_start: Iterable, position_end: Iterable) => void
    readonly erase_all: (obj: Editor) => void
    readonly get_column: (obj: Editor) => number
    readonly get_current_word: (obj: Editor) => string
    readonly get_end_position: (obj: Editor) => Iterable
    readonly get_indentsize: (obj: Editor) => number
    readonly get_length: (obj: Editor) => number
    readonly get_line_begin_position: (obj: Editor, line: number) => Iterable
    readonly get_line_end_position: (obj: Editor, line: number) => Iterable
    readonly get_line_from_position: (obj: Editor, position: Iterable) => number
    readonly get_lineno: (obj: Editor) => number
    readonly get_offset: (obj: Editor) => number
    readonly get_overwrite: (obj: Editor) => boolean
    readonly get_position: (obj: Editor) => Iterable
    readonly get_start_position: (obj: Editor) => Iterable
    readonly get_tabsize: (obj: Editor) => number
    readonly get_text: (obj: Editor, begin: Iterable, end: Iterable) => string
    readonly get_text_all: (obj: Editor) => string
    readonly get_use_spaces: (obj: Editor) => boolean
    readonly goto_end: (obj: Editor) => void
    readonly goto_line: (obj: Editor, lineno: number) => void
    readonly goto_position: (obj: Editor, position: Iterable) => void
    readonly goto_start: (obj: Editor) => void
    readonly insert: (obj: Editor, position: Iterable, text: string, length: number) => void
    readonly set_auto_indent: (obj: Editor, auto_indent: boolean) => void
    readonly set_indentsize: (obj: Editor, indentsize: number) => void
    readonly set_popup_menu: (obj: Editor, menu: Gtk.Widget) => void
    readonly set_tabsize: (obj: Editor, tabsize: number) => void
    readonly set_use_spaces: (obj: Editor, use_spaces: boolean) => void
    static name: string
}
abstract class EditorLanguageIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorLanguageIface */
    readonly g_iface: EditorIface
    readonly language_changed: (obj: EditorLanguage, language: string) => void
    readonly get_language: (obj: EditorLanguage) => string
    readonly get_language_name: (obj: EditorLanguage, language: string) => string
    readonly get_supported_languages: (obj: EditorLanguage) => string[]
    readonly set_language: (obj: EditorLanguage, language: string) => void
    static name: string
}
abstract class EditorLineModeIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorLineModeIface */
    readonly g_iface: EditorIface
    readonly convert: (obj: EditorLineMode, mode: EditorLineModeType) => void
    readonly fix: (obj: EditorLineMode) => void
    readonly get: (obj: EditorLineMode) => EditorLineModeType
    readonly set: (obj: EditorLineMode, mode: EditorLineModeType) => void
    static name: string
}
abstract class EditorSearchIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorSearchIface */
    readonly g_iface: EditorIface
    readonly backward: (obj: EditorSearch, search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell) => [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]
    readonly forward: (obj: EditorSearch, search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell) => [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]
    static name: string
}
abstract class EditorSelectionIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorSelectionIface */
    readonly g_iface: EditorIface
    readonly get: (obj: EditorSelection) => string
    readonly has_selection: (obj: EditorSelection) => boolean
    readonly replace: (obj: EditorSelection, text: string, length: number) => void
    readonly select_all: (obj: EditorSelection) => void
    readonly select_block: (obj: EditorSelection) => void
    readonly select_function: (obj: EditorSelection) => void
    readonly set: (obj: EditorSelection, start: Iterable, end: Iterable, scroll: boolean) => void
    static name: string
}
abstract class EditorTipIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorTipIface */
    readonly g_iface: EditorIface
    readonly cancel: (obj: EditorTip) => void
    readonly show: (obj: EditorTip, tips: string[], position: Iterable) => void
    readonly visible: (obj: EditorTip) => boolean
    static name: string
}
abstract class EditorViewIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorViewIface */
    readonly g_iface: EditorIface
    readonly create: (obj: EditorView) => void
    readonly get_count: (obj: EditorView) => number
    readonly remove_current: (obj: EditorView) => void
    static name: string
}
abstract class EditorZoomIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorZoomIface */
    readonly g_iface: EditorIface
    readonly in_: (obj: EditorZoom) => void
    readonly out: (obj: EditorZoom) => void
    static name: string
}
abstract class EnvironmentIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EnvironmentIface */
    readonly g_iface: GObject.TypeInterface
    readonly get_real_directory: (obj: Environment, dir: string) => string
    readonly override: (obj: Environment, dirp: string, argvp: string, envp: string) => boolean
    static name: string
}
abstract class FileIface {
    /* Fields of IAnjuta-3.0.IAnjuta.FileIface */
    readonly g_iface: GObject.TypeInterface
    readonly opened: (obj: File) => void
    readonly get_file: (obj: File) => Gio.File
    readonly open: (obj: File, file: Gio.File) => void
    static name: string
}
abstract class FileLoaderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.FileLoaderIface */
    readonly g_iface: LoaderIface
    readonly peek_interface: (obj: FileLoader, file: Gio.File) => string
    static name: string
}
abstract class FileManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.FileManagerIface */
    readonly g_iface: GObject.TypeInterface
    readonly section_changed: (obj: FileManager, file: Gio.File) => void
    readonly set_root: (obj: FileManager, root_uri: string) => void
    readonly set_selected: (obj: FileManager, file: Gio.File) => void
    static name: string
}
abstract class FileSavableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.FileSavableIface */
    readonly g_iface: FileIface
    readonly saved: (obj: FileSavable, file: Gio.File) => void
    readonly update_save_ui: (obj: FileSavable) => void
    readonly is_conflict: (obj: FileSavable) => boolean
    readonly is_dirty: (obj: FileSavable) => boolean
    readonly is_read_only: (obj: FileSavable) => boolean
    readonly save: (obj: FileSavable) => void
    readonly save_as: (obj: FileSavable, file: Gio.File) => void
    readonly set_dirty: (obj: FileSavable, dirty: boolean) => void
    static name: string
}
abstract class GladeIface {
    /* Fields of IAnjuta-3.0.IAnjuta.GladeIface */
    readonly g_iface: GObject.TypeInterface
    readonly add_association: (obj: Glade, master: string, slave: string) => void
    static name: string
}
abstract class HelpIface {
    /* Fields of IAnjuta-3.0.IAnjuta.HelpIface */
    readonly g_iface: GObject.TypeInterface
    readonly search: (obj: Help, query: string) => void
    static name: string
}
abstract class IndenterIface {
    /* Fields of IAnjuta-3.0.IAnjuta.IndenterIface */
    readonly g_iface: GObject.TypeInterface
    readonly indent: (obj: Indenter, start: Iterable, end: Iterable) => void
    static name: string
}
abstract class IndicableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.IndicableIface */
    readonly g_iface: GObject.TypeInterface
    readonly clear: (obj: Indicable) => void
    readonly set: (obj: Indicable, begin_location: Iterable, end_location: Iterable, indicator: IndicableIndicator) => void
    static name: string
}
abstract class IterableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.IterableIface */
    readonly g_iface: GObject.TypeInterface
    readonly assign: (obj: Iterable, src_iter: Iterable) => void
    readonly clone: (obj: Iterable) => Iterable
    readonly compare: (obj: Iterable, iter2: Iterable) => number
    readonly diff: (obj: Iterable, iter2: Iterable) => number
    readonly first: (obj: Iterable) => boolean
    readonly get_length: (obj: Iterable) => number
    readonly get_position: (obj: Iterable) => number
    readonly last: (obj: Iterable) => boolean
    readonly next: (obj: Iterable) => boolean
    readonly previous: (obj: Iterable) => boolean
    readonly set_position: (obj: Iterable, position: number) => boolean
    static name: string
}
abstract class IterableTreeIface {
    /* Fields of IAnjuta-3.0.IAnjuta.IterableTreeIface */
    readonly g_iface: IterableIface
    readonly children: (obj: IterableTree) => boolean
    readonly has_children: (obj: IterableTree) => boolean
    readonly parent: (obj: IterableTree) => boolean
    static name: string
}
abstract class LanguageIface {
    /* Fields of IAnjuta-3.0.IAnjuta.LanguageIface */
    readonly g_iface: GObject.TypeInterface
    readonly get_from_editor: (obj: Language, editor: EditorLanguage) => LanguageId
    readonly get_from_mime_type: (obj: Language, mime_type: string) => LanguageId
    readonly get_from_string: (obj: Language, string: string) => LanguageId
    readonly get_languages: (obj: Language) => number[]
    readonly get_make_target: (obj: Language, id: LanguageId) => string
    readonly get_name: (obj: Language, id: LanguageId) => string
    readonly get_name_from_editor: (obj: Language, editor: EditorLanguage) => string
    static name: string
}
abstract class LanguageProviderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.LanguageProviderIface */
    readonly g_iface: ProviderIface
    readonly get_calltip_cache: (obj: LanguageProvider, call_context: string) => string[]
    readonly get_calltip_context: (obj: LanguageProvider, iter: Iterable) => string
    readonly new_calltip: (obj: LanguageProvider, call_context: string, iter: Iterable) => void
    readonly populate_completions: (obj: LanguageProvider, iter: Iterable) => Iterable | null
    static name: string
}
abstract class LoaderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.LoaderIface */
    readonly g_iface: GObject.TypeInterface
    static name: string
}
abstract class MarkableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.MarkableIface */
    readonly g_iface: GObject.TypeInterface
    readonly marker_clicked: (obj: Markable, double_click: boolean, location: number) => void
    readonly delete_all_markers: (obj: Markable, marker: MarkableMarker) => void
    readonly is_marker_set: (obj: Markable, location: number, marker: MarkableMarker) => boolean
    readonly location_from_handle: (obj: Markable, handle: number) => number
    readonly mark: (obj: Markable, location: number, marker: MarkableMarker, tooltip?: string | null) => number
    readonly unmark: (obj: Markable, location: number, marker: MarkableMarker) => void
    static name: string
}
abstract class MessageManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.MessageManagerIface */
    readonly g_iface: GObject.TypeInterface
    readonly remove_view: (obj: MessageManager, view: MessageView) => void
    readonly set_current_view: (obj: MessageManager, view: MessageView) => void
    readonly set_view_icon: (obj: MessageManager, view: MessageView, icon: GdkPixbuf.PixbufAnimation) => void
    readonly set_view_icon_from_stock: (obj: MessageManager, view: MessageView, icon: string) => void
    readonly set_view_title: (obj: MessageManager, view: MessageView, title: string) => void
    static name: string
}
abstract class MessageViewIface {
    /* Fields of IAnjuta-3.0.IAnjuta.MessageViewIface */
    readonly g_iface: GObject.TypeInterface
    readonly buffer_flushed: (obj: MessageView, line: string) => void
    readonly message_clicked: (obj: MessageView, message: string) => void
    readonly append: (obj: MessageView, type: MessageViewType, summary: string, details: string) => void
    readonly buffer_append: (obj: MessageView, text: string) => void
    readonly clear: (obj: MessageView) => void
    readonly get_current_message: (obj: MessageView) => string
    readonly select_next: (obj: MessageView) => void
    readonly select_previous: (obj: MessageView) => void
    static name: string
}
abstract class PluginFactoryIface {
    /* Fields of IAnjuta-3.0.IAnjuta.PluginFactoryIface */
    readonly g_iface: GObject.TypeInterface
    static name: string
}
abstract class PreferencesIface {
    /* Fields of IAnjuta-3.0.IAnjuta.PreferencesIface */
    readonly g_iface: GObject.TypeInterface
    readonly merge: (obj: Preferences, prefs: Anjuta.Preferences) => void
    readonly unmerge: (obj: Preferences, prefs: Anjuta.Preferences) => void
    static name: string
}
abstract class PrintIface {
    /* Fields of IAnjuta-3.0.IAnjuta.PrintIface */
    readonly g_iface: GObject.TypeInterface
    readonly print: (obj: Print) => void
    readonly print_preview: (obj: Print) => void
    static name: string
}
abstract class ProjectBackendIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProjectBackendIface */
    readonly g_iface: GObject.TypeInterface
    readonly new_project: (obj: ProjectBackend, file: Gio.File) => Project
    readonly probe: (obj: ProjectBackend, directory: Gio.File) => number
    static name: string
}
abstract class ProjectChooserIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProjectChooserIface */
    readonly g_iface: GObject.TypeInterface
    readonly changed: (obj: ProjectChooser) => void
    readonly get_selected: (obj: ProjectChooser) => Gio.File
    readonly set_project_model: (obj: ProjectChooser, manager: ProjectManager, child_type: Anjuta.ProjectNodeType) => boolean
    static name: string
}
abstract class ProjectIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProjectIface */
    readonly g_iface: GObject.TypeInterface
    readonly file_changed: (obj: Project, node?: object | null) => void
    readonly node_changed: (obj: Project, node: object | null, error: GLib.Error) => void
    readonly node_loaded: (obj: Project, node: object | null, error: GLib.Error) => void
    readonly node_saved: (obj: Project, node: object | null, error: GLib.Error) => void
    readonly add_node_after: (obj: Project, parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null) => Anjuta.ProjectNode
    readonly add_node_before: (obj: Project, parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null) => Anjuta.ProjectNode
    readonly get_node_info: (obj: Project) => Anjuta.ProjectNodeInfo[]
    readonly get_root: (obj: Project) => Anjuta.ProjectNode
    readonly is_loaded: (obj: Project) => boolean
    readonly load_node: (obj: Project, node: Anjuta.ProjectNode) => boolean
    readonly remove_node: (obj: Project, node: Anjuta.ProjectNode) => boolean
    readonly remove_property: (obj: Project, node: Anjuta.ProjectNode, id: string, name?: string | null) => boolean
    readonly save_node: (obj: Project, node: Anjuta.ProjectNode) => boolean
    readonly set_property: (obj: Project, node: Anjuta.ProjectNode, id: string, name: string | null, value: string) => Anjuta.ProjectProperty | null
    static name: string
}
abstract class ProjectManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProjectManagerIface */
    readonly g_iface: GObject.TypeInterface
    readonly element_added: (obj: ProjectManager, element: Gio.File) => void
    readonly element_removed: (obj: ProjectManager, element: Gio.File) => void
    readonly element_selected: (obj: ProjectManager, element: Gio.File) => void
    readonly project_loaded: (obj: ProjectManager, error: GLib.Error) => void
    readonly add_group: (obj: ProjectManager, name: string, default_group?: Gio.File | null) => Gio.File
    readonly add_source: (obj: ProjectManager, name: string, default_target?: Gio.File | null) => Gio.File
    readonly add_source_quiet: (obj: ProjectManager, name: string, target: Gio.File) => Gio.File
    readonly add_sources: (obj: ProjectManager, names: string[], default_target?: Gio.File | null) => Gio.File[]
    readonly add_target: (obj: ProjectManager, name: string, default_group?: Gio.File | null) => Gio.File
    readonly get_capabilities: (obj: ProjectManager) => number
    readonly get_children: (obj: ProjectManager, parent: Gio.File, children_type: number) => Gio.File[]
    readonly get_current_project: (obj: ProjectManager) => Project
    readonly get_elements: (obj: ProjectManager, element_type: Anjuta.ProjectNodeType) => Gio.File[]
    readonly get_packages: (obj: ProjectManager) => string[]
    readonly get_selected: (obj: ProjectManager) => Gio.File
    readonly get_target_type: (obj: ProjectManager, target: Gio.File) => Anjuta.ProjectNodeType
    readonly get_targets: (obj: ProjectManager, target_type: Anjuta.ProjectNodeType) => Gio.File[]
    readonly is_open: (obj: ProjectManager) => boolean
    readonly remove_file: (obj: ProjectManager, file: Gio.File) => boolean
    static name: string
}
abstract class ProviderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProviderIface */
    readonly g_iface: GObject.TypeInterface
    readonly activate: (obj: Provider, iter: Iterable, data?: object | null) => void
    readonly get_name: (obj: Provider) => string
    readonly get_start_iter: (obj: Provider) => Iterable
    readonly populate: (obj: Provider, iter: Iterable) => void
    static name: string
}
abstract class SnippetsManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.SnippetsManagerIface */
    readonly g_iface: GObject.TypeInterface
    readonly insert: (obj: SnippetsManager, key: string, editing_session: boolean) => boolean
    static name: string
}
abstract class StreamIface {
    /* Fields of IAnjuta-3.0.IAnjuta.StreamIface */
    readonly g_iface: GObject.TypeInterface
    readonly open: (obj: Stream, stream?: object | null) => void
    static name: string
}
abstract class StreamLoaderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.StreamLoaderIface */
    readonly g_iface: LoaderIface
    readonly peek_interface: (obj: StreamLoader, stream?: object | null) => string
    static name: string
}
abstract class StreamSavableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.StreamSavableIface */
    readonly g_iface: StreamIface
    readonly save: (obj: StreamSavable, stream?: object | null) => void
    static name: string
}
abstract class SymbolIface {
    /* Fields of IAnjuta-3.0.IAnjuta.SymbolIface */
    readonly g_iface: GObject.TypeInterface
    readonly get_boolean: (obj: Symbol, field: SymbolField) => boolean
    readonly get_icon: (obj: Symbol) => GdkPixbuf.Pixbuf
    readonly get_int: (obj: Symbol, field: SymbolField) => number
    readonly get_string: (obj: Symbol, field: SymbolField) => string
    readonly get_sym_type: (obj: Symbol) => SymbolType
    static name: string
}
abstract class SymbolManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.SymbolManagerIface */
    readonly g_iface: GObject.TypeInterface
    readonly prj_scan_end: (obj: SymbolManager, process_id: number) => void
    readonly sys_scan_end: (obj: SymbolManager, process_id: number) => void
    readonly activate_package: (obj: SymbolManager, pkg_name: string, pkg_version: string) => boolean
    readonly deactivate_all: (obj: SymbolManager) => void
    readonly deactivate_package: (obj: SymbolManager, pkg_name: string, pkg_version: string) => void
    static name: string
}
abstract class SymbolQueryIface {
    /* Fields of IAnjuta-3.0.IAnjuta.SymbolQueryIface */
    readonly g_iface: GObject.TypeInterface
    readonly async_result: (obj: SymbolQuery, result: GObject.Object) => void
    readonly cancel: (obj: SymbolQuery) => void
    readonly set_fields: (obj: SymbolQuery, n_fields: number, fields: SymbolField) => void
    readonly set_file_scope: (obj: SymbolQuery, filescope_search: SymbolQueryFileScope) => void
    readonly set_filters: (obj: SymbolQuery, filters: SymbolType, include_types: boolean) => void
    readonly set_group_by: (obj: SymbolQuery, field: SymbolField) => void
    readonly set_limit: (obj: SymbolQuery, limit: number) => void
    readonly set_mode: (obj: SymbolQuery, mode: SymbolQueryMode) => void
    readonly set_offset: (obj: SymbolQuery, offset: number) => void
    readonly set_order_by: (obj: SymbolQuery, field: SymbolField) => void
    static name: string
}
abstract class TerminalIface {
    /* Fields of IAnjuta-3.0.IAnjuta.TerminalIface */
    readonly g_iface: GObject.TypeInterface
    readonly child_exited: (obj: Terminal, pid: number, status: number) => void
    readonly execute_command: (obj: Terminal, directory: string, command: string, environment: string[]) => number
    static name: string
}
abstract class TodoIface {
    /* Fields of IAnjuta-3.0.IAnjuta.TodoIface */
    readonly g_iface: GObject.TypeInterface
    readonly load: (obj: Todo, file: Gio.File) => void
    static name: string
}
abstract class VcsIface {
    /* Fields of IAnjuta-3.0.IAnjuta.VcsIface */
    readonly g_iface: GObject.TypeInterface
    readonly status_changed: (obj: Vcs) => void
    readonly add: (obj: Vcs, files: Gio.File[], notify: Anjuta.AsyncNotify) => void
    readonly checkout: (obj: Vcs, repository_location: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify) => void
    readonly remove: (obj: Vcs, files: Gio.File[], notify: Anjuta.AsyncNotify) => void
    static name: string
}
abstract class WizardIface {
    /* Fields of IAnjuta-3.0.IAnjuta.WizardIface */
    readonly g_iface: GObject.TypeInterface
    readonly activate: (obj: Wizard) => void
    static name: string
}
    type BuilderHandle = object
    type LanguageId = number
}
export default IAnjuta;