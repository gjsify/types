/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * IAnjuta-3.0
 */

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
function buildableErrorQuark(): GLib.Quark
function builderErrorQuark(): GLib.Quark
function debugManagerErrorQuark(): GLib.Quark
function debuggerBreakpointErrorQuark(): GLib.Quark
function debuggerErrorQuark(): GLib.Quark
function debuggerInstructionErrorQuark(): GLib.Quark
function debuggerMemoryErrorQuark(): GLib.Quark
function debuggerRegisterErrorQuark(): GLib.Quark
function debuggerVariableErrorQuark(): GLib.Quark
function documentErrorQuark(): GLib.Quark
function documentManagerErrorQuark(): GLib.Quark
function editorAssistErrorQuark(): GLib.Quark
function editorCellErrorQuark(): GLib.Quark
function editorCellStyleErrorQuark(): GLib.Quark
function editorCommentErrorQuark(): GLib.Quark
function editorConvertErrorQuark(): GLib.Quark
function editorErrorQuark(): GLib.Quark
function editorFactoryErrorQuark(): GLib.Quark
function editorFoldsErrorQuark(): GLib.Quark
function editorGladeSignalErrorQuark(): GLib.Quark
function editorGotoErrorQuark(): GLib.Quark
function editorHoverErrorQuark(): GLib.Quark
function editorLanguageErrorQuark(): GLib.Quark
function editorLineModeErrorQuark(): GLib.Quark
function editorSearchErrorQuark(): GLib.Quark
function editorSelectionErrorQuark(): GLib.Quark
function editorTipErrorQuark(): GLib.Quark
function editorViewErrorQuark(): GLib.Quark
function editorZoomErrorQuark(): GLib.Quark
function environmentErrorQuark(): GLib.Quark
function fileErrorQuark(): GLib.Quark
function fileLoaderErrorQuark(): GLib.Quark
function fileManagerErrorQuark(): GLib.Quark
function fileSavableErrorQuark(): GLib.Quark
function gladeErrorQuark(): GLib.Quark
function helpErrorQuark(): GLib.Quark
function indenterErrorQuark(): GLib.Quark
function indicableErrorQuark(): GLib.Quark
function iterableErrorQuark(): GLib.Quark
function iterableTreeErrorQuark(): GLib.Quark
function languageErrorQuark(): GLib.Quark
function languageProviderErrorQuark(): GLib.Quark
function loaderErrorQuark(): GLib.Quark
function markableErrorQuark(): GLib.Quark
function messageManagerErrorQuark(): GLib.Quark
function messageViewErrorQuark(): GLib.Quark
function pluginFactoryErrorQuark(): GLib.Quark
function preferencesErrorQuark(): GLib.Quark
function printErrorQuark(): GLib.Quark
function projectBackendErrorQuark(): GLib.Quark
function projectChooserErrorQuark(): GLib.Quark
function projectErrorQuark(): GLib.Quark
function projectManagerErrorQuark(): GLib.Quark
function providerErrorQuark(): GLib.Quark
function snippetsManagerErrorQuark(): GLib.Quark
function streamErrorQuark(): GLib.Quark
function streamLoaderErrorQuark(): GLib.Quark
function streamSavableErrorQuark(): GLib.Quark
function symbolErrorQuark(): GLib.Quark
function symbolManagerErrorQuark(): GLib.Quark
function symbolQueryErrorQuark(): GLib.Quark
function terminalErrorQuark(): GLib.Quark
function todoErrorQuark(): GLib.Quark
function vcsErrorQuark(): GLib.Quark
function wizardErrorQuark(): GLib.Quark
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
     * @param commandId Command to get override.
     */
    getCommand(commandId: BuildableCommand): string
    /**
     * fixme
     * @param uri fixme
     */
    install(uri: string): void
    /**
     * Resets the command overrides to defaults.
     */
    resetCommands(): void
    /**
     * Overrides the default command for the given command.
     * @param commandId Command to override.
     * @param command Build command to override.
     */
    setCommand(commandId: BuildableCommand, command: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Builder {
    /* Methods of IAnjuta-3.0.IAnjuta.Builder */
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
    getUriConfiguration(uri: string): string
    /**
     * List all defined configuration. These names returned are
     * the internal non localized names for the following
     * predefined configuration: Debug, Profiling, Optimized.
     * The default configuration has no name and is not returned.
     */
    listConfiguration(): string[]
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
     * @param uri uri of the target
     */
    start(uri: string): boolean
    /**
     * Start the debugger of the given uri
     * @param server server (IP address:port)
     * @param uri uri of the local target
     */
    startRemote(server: string, uri: string): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.DebugManager */
    connect(sigName: "breakpoint-changed", callback: ((object?: object | null) => void)): number
    on(sigName: "breakpoint-changed", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "breakpoint-changed", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "breakpoint-changed", callback: (object?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "breakpoint-changed", object?: object | null): void
    connect(sigName: "debugger-started", callback: (() => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: ((object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "location-changed", callback: ((object: number, p0: string, p1: number) => void)): number
    on(sigName: "location-changed", callback: (object: number, p0: string, p1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "location-changed", callback: (object: number, p0: string, p1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "location-changed", callback: (object: number, p0: string, p1: number) => void): NodeJS.EventEmitter
    emit(sigName: "location-changed", object: number, p0: string, p1: number): void
    connect(sigName: "program-exited", callback: (() => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (() => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: ((object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (() => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-started", callback: (() => void)): number
    on(sigName: "program-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-started"): void
    connect(sigName: "program-stopped", callback: (() => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "program-unloaded", callback: (() => void)): number
    on(sigName: "program-unloaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-unloaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-unloaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-unloaded"): void
    connect(sigName: "sharedlib-event", callback: (() => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: ((object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Debugger {
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    abort(): boolean
    /**
     * Attach to an already running process.
     * @param pid pid of the process to debug
     * @param sourceSearchDirectories List of directories to search for 		      source files.
     */
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     * @param server remote server
     * @param args command line argument of the program
     * @param terminal TRUE if the program need a terminal
     * @param stop TRUE if program is stopped at the beginning
     */
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Disable debugger log.
     */
    disableLog(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
     * @param log MessageView used by log
     */
    enableLog(log: MessageView): void
    /**
     * Exit from the currently loaded program.
     */
    exit(): boolean
    /**
     * Get the current state of the debugger
     */
    getState(): DebuggerState
    /**
     * It defines how to handle signal received by the program.
     * @param name signal name
     * @param stop TRUE if we need to stop signal
     * @param print TRUE if we display a message when the signal is emitted
     * @param ignore TRUE if we ignore the signal
     */
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    interrupt(): boolean
    /**
     * Load a program in the debugger.
     * @param file filename
     * @param mimeType mime type of the file
     * @param sourceSearchDirectories List of directories to search for 		      source files.
     */
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
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
    runFrom(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     * @param file target file name
     * @param line target line in file
     */
    runTo(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     * @param command command
     */
    sendCommand(command: string): boolean
    /**
     * Set environment variable
     * @param env List environment variable
     */
    setEnvironment(env: string): boolean
    /**
     * Set the current frame.
     * @param frame frame number
     */
    setFrame(frame: number): boolean
    /**
     * Set the current thread.
     * @param thread thread number
     */
    setThread(thread: number): boolean
    /**
     * Set program working directory.
     * @param dir working program directory
     */
    setWorkingDirectory(dir: string): boolean
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
    stepIn(): boolean
    /**
     * Execute the currently loaded program until it goes out of the
     * current procedure.
     */
    stepOut(): boolean
    /**
     * Execute one C instruction, without entering in procedure, of
     * the program currently loaded.
     */
    stepOver(): boolean
    /**
     * Unload a program.
     */
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: ((object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (() => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: ((object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (() => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (() => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: ((object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (() => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (() => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (() => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: ((object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
}
class DebuggerBreakpoint {
    /* Methods of IAnjuta-3.0.IAnjuta.DebuggerBreakpoint */
    /**
     * Return all implemented methods.
     */
    implementBreakpoint(): number
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    abort(): boolean
    /**
     * Attach to an already running process.
     * @param pid pid of the process to debug
     * @param sourceSearchDirectories List of directories to search for 		      source files.
     */
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     * @param server remote server
     * @param args command line argument of the program
     * @param terminal TRUE if the program need a terminal
     * @param stop TRUE if program is stopped at the beginning
     */
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Disable debugger log.
     */
    disableLog(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
     * @param log MessageView used by log
     */
    enableLog(log: MessageView): void
    /**
     * Exit from the currently loaded program.
     */
    exit(): boolean
    /**
     * Get the current state of the debugger
     */
    getState(): DebuggerState
    /**
     * It defines how to handle signal received by the program.
     * @param name signal name
     * @param stop TRUE if we need to stop signal
     * @param print TRUE if we display a message when the signal is emitted
     * @param ignore TRUE if we ignore the signal
     */
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    interrupt(): boolean
    /**
     * Load a program in the debugger.
     * @param file filename
     * @param mimeType mime type of the file
     * @param sourceSearchDirectories List of directories to search for 		      source files.
     */
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
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
    runFrom(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     * @param file target file name
     * @param line target line in file
     */
    runTo(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     * @param command command
     */
    sendCommand(command: string): boolean
    /**
     * Set environment variable
     * @param env List environment variable
     */
    setEnvironment(env: string): boolean
    /**
     * Set the current frame.
     * @param frame frame number
     */
    setFrame(frame: number): boolean
    /**
     * Set the current thread.
     * @param thread thread number
     */
    setThread(thread: number): boolean
    /**
     * Set program working directory.
     * @param dir working program directory
     */
    setWorkingDirectory(dir: string): boolean
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
    stepIn(): boolean
    /**
     * Execute the currently loaded program until it goes out of the
     * current procedure.
     */
    stepOut(): boolean
    /**
     * Execute one C instruction, without entering in procedure, of
     * the program currently loaded.
     */
    stepOver(): boolean
    /**
     * Unload a program.
     */
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: ((object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (() => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: ((object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (() => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (() => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: ((object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (() => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (() => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (() => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: ((object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class DebuggerInstruction {
    /* Methods of IAnjuta-3.0.IAnjuta.DebuggerInstruction */
    /**
     * Restart the program starting from address address
     * @param address Run from this addresss
     */
    runFromAddress(address: number): boolean
    /**
     * Start the program until it reachs the address address
     * @param address Run to this addresss
     */
    runToAddress(address: number): boolean
    /**
     * Execute one assembler instruction in the program.
     */
    stepInInstruction(): boolean
    /**
     * Execute one assembler instruction in the program, if the instruction
     * is a function call, continues until the function returns.
     */
    stepOverInstruction(): boolean
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    abort(): boolean
    /**
     * Attach to an already running process.
     * @param pid pid of the process to debug
     * @param sourceSearchDirectories List of directories to search for 		      source files.
     */
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     * @param server remote server
     * @param args command line argument of the program
     * @param terminal TRUE if the program need a terminal
     * @param stop TRUE if program is stopped at the beginning
     */
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Disable debugger log.
     */
    disableLog(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
     * @param log MessageView used by log
     */
    enableLog(log: MessageView): void
    /**
     * Exit from the currently loaded program.
     */
    exit(): boolean
    /**
     * Get the current state of the debugger
     */
    getState(): DebuggerState
    /**
     * It defines how to handle signal received by the program.
     * @param name signal name
     * @param stop TRUE if we need to stop signal
     * @param print TRUE if we display a message when the signal is emitted
     * @param ignore TRUE if we ignore the signal
     */
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    interrupt(): boolean
    /**
     * Load a program in the debugger.
     * @param file filename
     * @param mimeType mime type of the file
     * @param sourceSearchDirectories List of directories to search for 		      source files.
     */
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
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
    runFrom(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     * @param file target file name
     * @param line target line in file
     */
    runTo(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     * @param command command
     */
    sendCommand(command: string): boolean
    /**
     * Set environment variable
     * @param env List environment variable
     */
    setEnvironment(env: string): boolean
    /**
     * Set the current frame.
     * @param frame frame number
     */
    setFrame(frame: number): boolean
    /**
     * Set the current thread.
     * @param thread thread number
     */
    setThread(thread: number): boolean
    /**
     * Set program working directory.
     * @param dir working program directory
     */
    setWorkingDirectory(dir: string): boolean
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
    stepIn(): boolean
    /**
     * Execute the currently loaded program until it goes out of the
     * current procedure.
     */
    stepOut(): boolean
    /**
     * Execute one C instruction, without entering in procedure, of
     * the program currently loaded.
     */
    stepOver(): boolean
    /**
     * Unload a program.
     */
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: ((object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (() => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: ((object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (() => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (() => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: ((object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (() => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (() => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (() => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: ((object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class DebuggerMemory {
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    abort(): boolean
    /**
     * Attach to an already running process.
     * @param pid pid of the process to debug
     * @param sourceSearchDirectories List of directories to search for 		      source files.
     */
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     * @param server remote server
     * @param args command line argument of the program
     * @param terminal TRUE if the program need a terminal
     * @param stop TRUE if program is stopped at the beginning
     */
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Disable debugger log.
     */
    disableLog(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
     * @param log MessageView used by log
     */
    enableLog(log: MessageView): void
    /**
     * Exit from the currently loaded program.
     */
    exit(): boolean
    /**
     * Get the current state of the debugger
     */
    getState(): DebuggerState
    /**
     * It defines how to handle signal received by the program.
     * @param name signal name
     * @param stop TRUE if we need to stop signal
     * @param print TRUE if we display a message when the signal is emitted
     * @param ignore TRUE if we ignore the signal
     */
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    interrupt(): boolean
    /**
     * Load a program in the debugger.
     * @param file filename
     * @param mimeType mime type of the file
     * @param sourceSearchDirectories List of directories to search for 		      source files.
     */
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
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
    runFrom(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     * @param file target file name
     * @param line target line in file
     */
    runTo(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     * @param command command
     */
    sendCommand(command: string): boolean
    /**
     * Set environment variable
     * @param env List environment variable
     */
    setEnvironment(env: string): boolean
    /**
     * Set the current frame.
     * @param frame frame number
     */
    setFrame(frame: number): boolean
    /**
     * Set the current thread.
     * @param thread thread number
     */
    setThread(thread: number): boolean
    /**
     * Set program working directory.
     * @param dir working program directory
     */
    setWorkingDirectory(dir: string): boolean
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
    stepIn(): boolean
    /**
     * Execute the currently loaded program until it goes out of the
     * current procedure.
     */
    stepOut(): boolean
    /**
     * Execute one C instruction, without entering in procedure, of
     * the program currently loaded.
     */
    stepOver(): boolean
    /**
     * Unload a program.
     */
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: ((object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (() => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: ((object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (() => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (() => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: ((object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (() => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (() => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (() => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: ((object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class DebuggerRegister {
    /* Methods of IAnjuta-3.0.IAnjuta.DebuggerRegister */
    /**
     * Change the value of one register. Only the num and value field are used.
     * @param value Modified register with a new value
     */
    writeRegister(value: DebuggerRegisterData): boolean
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    abort(): boolean
    /**
     * Attach to an already running process.
     * @param pid pid of the process to debug
     * @param sourceSearchDirectories List of directories to search for 		      source files.
     */
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     * @param server remote server
     * @param args command line argument of the program
     * @param terminal TRUE if the program need a terminal
     * @param stop TRUE if program is stopped at the beginning
     */
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Disable debugger log.
     */
    disableLog(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
     * @param log MessageView used by log
     */
    enableLog(log: MessageView): void
    /**
     * Exit from the currently loaded program.
     */
    exit(): boolean
    /**
     * Get the current state of the debugger
     */
    getState(): DebuggerState
    /**
     * It defines how to handle signal received by the program.
     * @param name signal name
     * @param stop TRUE if we need to stop signal
     * @param print TRUE if we display a message when the signal is emitted
     * @param ignore TRUE if we ignore the signal
     */
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    interrupt(): boolean
    /**
     * Load a program in the debugger.
     * @param file filename
     * @param mimeType mime type of the file
     * @param sourceSearchDirectories List of directories to search for 		      source files.
     */
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
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
    runFrom(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     * @param file target file name
     * @param line target line in file
     */
    runTo(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     * @param command command
     */
    sendCommand(command: string): boolean
    /**
     * Set environment variable
     * @param env List environment variable
     */
    setEnvironment(env: string): boolean
    /**
     * Set the current frame.
     * @param frame frame number
     */
    setFrame(frame: number): boolean
    /**
     * Set the current thread.
     * @param thread thread number
     */
    setThread(thread: number): boolean
    /**
     * Set program working directory.
     * @param dir working program directory
     */
    setWorkingDirectory(dir: string): boolean
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
    stepIn(): boolean
    /**
     * Execute the currently loaded program until it goes out of the
     * current procedure.
     */
    stepOut(): boolean
    /**
     * Execute one C instruction, without entering in procedure, of
     * the program currently loaded.
     */
    stepOver(): boolean
    /**
     * Unload a program.
     */
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: ((object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (() => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: ((object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (() => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (() => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: ((object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (() => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (() => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (() => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: ((object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class DebuggerVariable {
    /* Methods of IAnjuta-3.0.IAnjuta.DebuggerVariable */
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
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    /**
     * Quit the debugger as fast as possible.
     */
    abort(): boolean
    /**
     * Attach to an already running process.
     * @param pid pid of the process to debug
     * @param sourceSearchDirectories List of directories to search for 		      source files.
     */
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    /**
     * Connect to a remote debugger and run program
     * @param server remote server
     * @param args command line argument of the program
     * @param terminal TRUE if the program need a terminal
     * @param stop TRUE if program is stopped at the beginning
     */
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Disable debugger log.
     */
    disableLog(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
     * @param log MessageView used by log
     */
    enableLog(log: MessageView): void
    /**
     * Exit from the currently loaded program.
     */
    exit(): boolean
    /**
     * Get the current state of the debugger
     */
    getState(): DebuggerState
    /**
     * It defines how to handle signal received by the program.
     * @param name signal name
     * @param stop TRUE if we need to stop signal
     * @param print TRUE if we display a message when the signal is emitted
     * @param ignore TRUE if we ignore the signal
     */
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     */
    interrupt(): boolean
    /**
     * Load a program in the debugger.
     * @param file filename
     * @param mimeType mime type of the file
     * @param sourceSearchDirectories List of directories to search for 		      source files.
     */
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
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
    runFrom(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     * @param file target file name
     * @param line target line in file
     */
    runTo(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     * @param command command
     */
    sendCommand(command: string): boolean
    /**
     * Set environment variable
     * @param env List environment variable
     */
    setEnvironment(env: string): boolean
    /**
     * Set the current frame.
     * @param frame frame number
     */
    setFrame(frame: number): boolean
    /**
     * Set the current thread.
     * @param thread thread number
     */
    setThread(thread: number): boolean
    /**
     * Set program working directory.
     * @param dir working program directory
     */
    setWorkingDirectory(dir: string): boolean
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
    stepIn(): boolean
    /**
     * Execute the currently loaded program until it goes out of the
     * current procedure.
     */
    stepOut(): boolean
    /**
     * Execute one C instruction, without entering in procedure, of
     * the program currently loaded.
     */
    stepOver(): boolean
    /**
     * Unload a program.
     */
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: ((object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (() => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: ((object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (() => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (() => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: ((object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (() => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (() => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (() => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: ((object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Document {
    /* Methods of IAnjuta-3.0.IAnjuta.Document */
    /**
     * Begins the mark of undoable action. Calls to this are stacked and
     * each must be ended with ianjuta_document_end_action().
     */
    beginUndoAction(): void
    /**
     * Can the editor redo the last operation?
     */
    canRedo(): boolean
    /**
     * Can the editor undo the last operation?
     */
    canUndo(): boolean
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
    endUndoAction(): void
    /**
     * Allows obtaining of the filename the editor was loaded from.
     */
    getFilename(): string
    /**
     * Grabs the focus.
     */
    grabFocus(): void
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
    /* Signals of IAnjuta-3.0.IAnjuta.Document */
    /**
     * This signal is emitted when the document assumes the UI must be updated
     * because some internal state of the document has changed. For example, if
     * current line position is changed, it needs to be reflected to the UI.
     */
    connect(sigName: "update-ui", callback: (() => void)): number
    on(sigName: "update-ui", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-ui", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-ui", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "update-ui"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class DocumentManager {
    /* Methods of IAnjuta-3.0.IAnjuta.DocumentManager */
    addBookmark(file: Gio.File, line: number): void
    /**
     * Creates a new editor buffer of the given name and sets the given
     * content as its initial content.
     * @param name Name of the editor buffer.
     * @param content Initial content of the buffer.
     */
    addBuffer(name: string, content: string): Editor
    /**
     * Adds a document to the document manager. This will open a new
     * Notebook tab and show the document there
     * @param document the document to add
     */
    addDocument(document: Document): void
    /**
     * Finds the document that has the file  loaded. Only
     * the editor that matches the file will be searched.
     * @param file The file to find.
     */
    findDocumentWithFile(file: Gio.File): Document
    /**
     * Gets the current document.
     */
    getCurrentDocument(): Document
    /**
     * Gets a list of widgets for open documents. Each widget is
     * a GTK_WIDGET(IAnjutaDocument*)
     */
    getDocWidgets(): Gtk.Widget[]
    /**
     * Given the short filename, finds the file of the filename, if the
     * editor that has it loaded is found. If there is no editor that has
     * this file opened, returns NULL.
     * @param filename short filename
     */
    getFile(filename: string): Gio.File
    /**
     * Loads the given file if not loaded yet, set its editor as current editor
     * and moves cursor to the given line in the editor.
     * @param file file to go to.
     * @param lineno the line number in the file to go to.
     */
    gotoFileLine(file: Gio.File, lineno: number): Editor
    /**
     * Loads the given file if not loaded yet, set its editor as current editor
     * and moves cursor to the given line in the editor. Optionally also marks
     * the line with line marker if `mark` is given TRUE.
     * @param file file to go to.
     * @param lineno the line number in the file to go to.
     * @param mark TRUE if the line should be marked with a marker.
     */
    gotoFileLineMark(file: Gio.File, lineno: number, mark: boolean): Editor
    /**
     * Closes and removes the given document. If `save_before` is TRUE, also
     * saves the document before closing.
     * @param document Document to close.
     * @param saveBefore If true, saves the document before closing.
     */
    removeDocument(document: Document, saveBefore: boolean): boolean
    /**
     * Sets the given document as current document.
     * @param document the document to set as current.
     */
    setCurrentDocument(document: Document): void
    /* Signals of IAnjuta-3.0.IAnjuta.DocumentManager */
    /**
     * Emitted when a document was added to the document manager.
     * @param doc The #IAnjutaDocument that was added.
     */
    connect(sigName: "document-added", callback: ((doc: Document) => void)): number
    on(sigName: "document-added", callback: (doc: Document) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "document-added", callback: (doc: Document) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "document-added", callback: (doc: Document) => void): NodeJS.EventEmitter
    emit(sigName: "document-added", doc: Document): void
    /**
     * Emitted when a document was removed from the document manager.
     * @param doc The #IAnjutaDocument that was removed.
     */
    connect(sigName: "document-removed", callback: ((doc: Document) => void)): number
    on(sigName: "document-removed", callback: (doc: Document) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "document-removed", callback: (doc: Document) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "document-removed", callback: (doc: Document) => void): NodeJS.EventEmitter
    emit(sigName: "document-removed", doc: Document): void
    static name: string
}
class Editor {
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     */
    eraseAll(): void
    getColumn(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    getCurrentWord(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    getEndPosition(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    getIndentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    getLength(): number
    /**
     * fixme
     * @param line fixme
     */
    getLineBeginPosition(line: number): Iterable
    /**
     * fixme
     * @param line fixme
     */
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    getLineno(): number
    getOffset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    getOverwrite(): boolean
    /**
     * Get current caret position.
     */
    getPosition(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    getStartPosition(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    getTabsize(): number
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
    getText(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    getTextAll(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    getUseSpaces(): boolean
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoEnd(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @param lineno line number where carat will be moved.
     */
    gotoLine(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @param position Character position where carat will be moved.
     */
    gotoPosition(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoStart(): void
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
     * @param autoIndent TRUE to enable auto-indent, FALSE to disable
     */
    setAutoIndent(autoIndent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @param indentsize Indentation size in spaces
     */
    setIndentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @param menu Popupmenu
     */
    setPopupMenu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @param tabsize Tabsize in spaces
     */
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     * @param added TRUE if added, FALSE if deleted.
     * @param length Length of the text changed.
     * @param lines Number of lines added or removed.
     * @param text The text added or removed.
     * @param obj Self
     */
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     * @param ch The character that has been added.
     * @param obj Self
     */
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     * @param code The code that has been added or NULL.
     * @param obj Self
     */
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param signalName Name of the signal.
     * @param handlerName Name of the signal handler.
     * @param object Name of the object to be passed.
     * @param swap The "swap" signal property.
     * @param after The "after" signal property.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param widgetName Name of the widget that will become a member of the class.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     * @param doubleClick whether the line marks gutter was double clicked
     */
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
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
     * @param provider a IAnjutaProvider
     * @param proposals a list of IAnjutaProposals
     * @param preWord the word before the cursor
     * @param finished whether is was the last call in an async operation
     */
    proposals(provider: Provider, proposals: EditorAssistProposal[], preWord: string, finished: boolean): void
    remove(provider: Provider): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     */
    eraseAll(): void
    getColumn(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    getCurrentWord(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    getEndPosition(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    getIndentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    getLength(): number
    /**
     * fixme
     * @param line fixme
     */
    getLineBeginPosition(line: number): Iterable
    /**
     * fixme
     * @param line fixme
     */
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    getLineno(): number
    getOffset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    getOverwrite(): boolean
    /**
     * Get current caret position.
     */
    getPosition(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    getStartPosition(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    getTabsize(): number
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
    getText(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    getTextAll(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    getUseSpaces(): boolean
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoEnd(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @param lineno line number where carat will be moved.
     */
    gotoLine(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @param position Character position where carat will be moved.
     */
    gotoPosition(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoStart(): void
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
     * @param autoIndent TRUE to enable auto-indent, FALSE to disable
     */
    setAutoIndent(autoIndent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @param indentsize Indentation size in spaces
     */
    setIndentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @param menu Popupmenu
     */
    setPopupMenu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @param tabsize Tabsize in spaces
     */
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.EditorAssist */
    /**
     * This signal is emitted when the autocompletion is cancelled due to various
     * reasons. The provider should avoid to call ianjuta_editor_assist_proposals() after
     * this signal.
     */
    connect(sigName: "cancelled", callback: (() => void)): number
    on(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cancelled"): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     * @param added TRUE if added, FALSE if deleted.
     * @param length Length of the text changed.
     * @param lines Number of lines added or removed.
     * @param text The text added or removed.
     * @param obj Self
     */
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     * @param ch The character that has been added.
     * @param obj Self
     */
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     * @param code The code that has been added or NULL.
     * @param obj Self
     */
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param signalName Name of the signal.
     * @param handlerName Name of the signal handler.
     * @param object Name of the object to be passed.
     * @param swap The "swap" signal property.
     * @param after The "after" signal property.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param widgetName Name of the widget that will become a member of the class.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     * @param doubleClick whether the line marks gutter was double clicked
     */
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorCell {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorCell */
    getAttribute(): EditorAttribute
    /**
     * Returns the byte of the unicode character in this cell at given
     * index `char_index`. `char_index` can vary from 0 to length of the
     * unicode string minus 1. Out of range index is not allowed
     * (asserted) and return is undefined.
     * 
     * Since there is dynamic allocation of unicode character string
     * involved in ianjuta_editor_cell_get_character(), this function
     * is mainly useful for fast iteration (such as copying data).
     * @param charIndex 
     */
    getChar(charIndex: number): number
    /**
     * Returns the unicode character in this cell. A NULL terminated
     * string is returned that is the multibyte unicode character.
     * NULL is returned if the cell does not have any character.
     */
    getCharacter(): string
    /**
     * Gets the length of the cell in bytes. That is, length of the
     * unicode character.
     */
    getLength(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorCellStyle {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorCellStyle */
    getBackgroundColor(): string
    getColor(): string
    getFontDescription(): string
    /* Methods of IAnjuta-3.0.IAnjuta.EditorCell */
    getAttribute(): EditorAttribute
    /**
     * Returns the byte of the unicode character in this cell at given
     * index `char_index`. `char_index` can vary from 0 to length of the
     * unicode string minus 1. Out of range index is not allowed
     * (asserted) and return is undefined.
     * 
     * Since there is dynamic allocation of unicode character string
     * involved in ianjuta_editor_cell_get_character(), this function
     * is mainly useful for fast iteration (such as copying data).
     * @param charIndex 
     */
    getChar(charIndex: number): number
    /**
     * Returns the unicode character in this cell. A NULL terminated
     * string is returned that is the multibyte unicode character.
     * NULL is returned if the cell does not have any character.
     */
    getCharacter(): string
    /**
     * Gets the length of the cell in bytes. That is, length of the
     * unicode character.
     */
    getLength(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
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
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     */
    eraseAll(): void
    getColumn(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    getCurrentWord(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    getEndPosition(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    getIndentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    getLength(): number
    /**
     * fixme
     * @param line fixme
     */
    getLineBeginPosition(line: number): Iterable
    /**
     * fixme
     * @param line fixme
     */
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    getLineno(): number
    getOffset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    getOverwrite(): boolean
    /**
     * Get current caret position.
     */
    getPosition(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    getStartPosition(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    getTabsize(): number
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
    getText(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    getTextAll(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    getUseSpaces(): boolean
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoEnd(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @param lineno line number where carat will be moved.
     */
    gotoLine(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @param position Character position where carat will be moved.
     */
    gotoPosition(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoStart(): void
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
     * @param autoIndent TRUE to enable auto-indent, FALSE to disable
     */
    setAutoIndent(autoIndent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @param indentsize Indentation size in spaces
     */
    setIndentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @param menu Popupmenu
     */
    setPopupMenu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @param tabsize Tabsize in spaces
     */
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     * @param added TRUE if added, FALSE if deleted.
     * @param length Length of the text changed.
     * @param lines Number of lines added or removed.
     * @param text The text added or removed.
     * @param obj Self
     */
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     * @param ch The character that has been added.
     * @param obj Self
     */
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     * @param code The code that has been added or NULL.
     * @param obj Self
     */
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param signalName Name of the signal.
     * @param handlerName Name of the signal handler.
     * @param object Name of the object to be passed.
     * @param swap The "swap" signal property.
     * @param after The "after" signal property.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param widgetName Name of the widget that will become a member of the class.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     * @param doubleClick whether the line marks gutter was double clicked
     */
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorConvert {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorConvert */
    /**
     * change characters from start position to end position to lowercase
     * @param startPosition Start position.
     * @param endPosition End position.
     */
    toLower(startPosition: Iterable, endPosition: Iterable): void
    /**
     * change characters from start position to end position to uppercase.
     * @param startPosition Start position.
     * @param endPosition End position.
     */
    toUpper(startPosition: Iterable, endPosition: Iterable): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     */
    eraseAll(): void
    getColumn(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    getCurrentWord(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    getEndPosition(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    getIndentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    getLength(): number
    /**
     * fixme
     * @param line fixme
     */
    getLineBeginPosition(line: number): Iterable
    /**
     * fixme
     * @param line fixme
     */
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    getLineno(): number
    getOffset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    getOverwrite(): boolean
    /**
     * Get current caret position.
     */
    getPosition(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    getStartPosition(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    getTabsize(): number
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
    getText(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    getTextAll(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    getUseSpaces(): boolean
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoEnd(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @param lineno line number where carat will be moved.
     */
    gotoLine(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @param position Character position where carat will be moved.
     */
    gotoPosition(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoStart(): void
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
     * @param autoIndent TRUE to enable auto-indent, FALSE to disable
     */
    setAutoIndent(autoIndent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @param indentsize Indentation size in spaces
     */
    setIndentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @param menu Popupmenu
     */
    setPopupMenu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @param tabsize Tabsize in spaces
     */
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     * @param added TRUE if added, FALSE if deleted.
     * @param length Length of the text changed.
     * @param lines Number of lines added or removed.
     * @param text The text added or removed.
     * @param obj Self
     */
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     * @param ch The character that has been added.
     * @param obj Self
     */
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     * @param code The code that has been added or NULL.
     * @param obj Self
     */
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param signalName Name of the signal.
     * @param handlerName Name of the signal handler.
     * @param object Name of the object to be passed.
     * @param swap The "swap" signal property.
     * @param after The "after" signal property.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param widgetName Name of the widget that will become a member of the class.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     * @param doubleClick whether the line marks gutter was double clicked
     */
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorFactory {
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorFolds {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorFolds */
    closeAll(): void
    openAll(): void
    toggleCurrent(): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     */
    eraseAll(): void
    getColumn(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    getCurrentWord(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    getEndPosition(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    getIndentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    getLength(): number
    /**
     * fixme
     * @param line fixme
     */
    getLineBeginPosition(line: number): Iterable
    /**
     * fixme
     * @param line fixme
     */
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    getLineno(): number
    getOffset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    getOverwrite(): boolean
    /**
     * Get current caret position.
     */
    getPosition(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    getStartPosition(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    getTabsize(): number
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
    getText(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    getTextAll(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    getUseSpaces(): boolean
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoEnd(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @param lineno line number where carat will be moved.
     */
    gotoLine(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @param position Character position where carat will be moved.
     */
    gotoPosition(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoStart(): void
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
     * @param autoIndent TRUE to enable auto-indent, FALSE to disable
     */
    setAutoIndent(autoIndent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @param indentsize Indentation size in spaces
     */
    setIndentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @param menu Popupmenu
     */
    setPopupMenu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @param tabsize Tabsize in spaces
     */
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     * @param added TRUE if added, FALSE if deleted.
     * @param length Length of the text changed.
     * @param lines Number of lines added or removed.
     * @param text The text added or removed.
     * @param obj Self
     */
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     * @param ch The character that has been added.
     * @param obj Self
     */
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     * @param code The code that has been added or NULL.
     * @param obj Self
     */
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param signalName Name of the signal.
     * @param handlerName Name of the signal handler.
     * @param object Name of the object to be passed.
     * @param swap The "swap" signal property.
     * @param after The "after" signal property.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param widgetName Name of the widget that will become a member of the class.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     * @param doubleClick whether the line marks gutter was double clicked
     */
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorGladeSignal {
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     */
    eraseAll(): void
    getColumn(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    getCurrentWord(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    getEndPosition(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    getIndentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    getLength(): number
    /**
     * fixme
     * @param line fixme
     */
    getLineBeginPosition(line: number): Iterable
    /**
     * fixme
     * @param line fixme
     */
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    getLineno(): number
    getOffset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    getOverwrite(): boolean
    /**
     * Get current caret position.
     */
    getPosition(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    getStartPosition(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    getTabsize(): number
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
    getText(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    getTextAll(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    getUseSpaces(): boolean
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoEnd(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @param lineno line number where carat will be moved.
     */
    gotoLine(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @param position Character position where carat will be moved.
     */
    gotoPosition(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoStart(): void
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
     * @param autoIndent TRUE to enable auto-indent, FALSE to disable
     */
    setAutoIndent(autoIndent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @param indentsize Indentation size in spaces
     */
    setIndentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @param menu Popupmenu
     */
    setPopupMenu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @param tabsize Tabsize in spaces
     */
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.EditorGladeSignal */
    /**
     * Emitted when a signal was received per drag & drop
     * @param iter a IAnjutaIterable of the position where drop happens
     * @param signalData Signal data in form "widget:signal:handler", e.g. "GtkToggleButton:toggled:on_toggle_button_toggled"
     */
    connect(sigName: "drop", callback: ((iter: Iterable, signalData: string) => void)): number
    on(sigName: "drop", callback: (iter: Iterable, signalData: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drop", callback: (iter: Iterable, signalData: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drop", callback: (iter: Iterable, signalData: string) => void): NodeJS.EventEmitter
    emit(sigName: "drop", iter: Iterable, signalData: string): void
    /**
     * Emitted when a signal is dragged over the editor
     * @param iter a IAnjutaIterable of the position where drop would happen
     */
    connect(sigName: "drop-possible", callback: ((iter: Iterable) => boolean)): number
    on(sigName: "drop-possible", callback: (iter: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drop-possible", callback: (iter: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drop-possible", callback: (iter: Iterable) => void): NodeJS.EventEmitter
    emit(sigName: "drop-possible", iter: Iterable): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     * @param added TRUE if added, FALSE if deleted.
     * @param length Length of the text changed.
     * @param lines Number of lines added or removed.
     * @param text The text added or removed.
     * @param obj Self
     */
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     * @param ch The character that has been added.
     * @param obj Self
     */
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     * @param code The code that has been added or NULL.
     * @param obj Self
     */
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param signalName Name of the signal.
     * @param handlerName Name of the signal handler.
     * @param object Name of the object to be passed.
     * @param swap The "swap" signal property.
     * @param after The "after" signal property.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param widgetName Name of the widget that will become a member of the class.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     * @param doubleClick whether the line marks gutter was double clicked
     */
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorGoto {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorGoto */
    /**
     * Moves cursor to the end of the current block
     */
    endBlock(): void
    /**
     * Moves cursor to matching brace
     */
    matchingBrace(): void
    /**
     * Moves cursor to the start of the current block
     */
    startBlock(): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     */
    eraseAll(): void
    getColumn(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    getCurrentWord(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    getEndPosition(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    getIndentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    getLength(): number
    /**
     * fixme
     * @param line fixme
     */
    getLineBeginPosition(line: number): Iterable
    /**
     * fixme
     * @param line fixme
     */
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    getLineno(): number
    getOffset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    getOverwrite(): boolean
    /**
     * Get current caret position.
     */
    getPosition(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    getStartPosition(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    getTabsize(): number
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
    getText(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    getTextAll(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    getUseSpaces(): boolean
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoEnd(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @param lineno line number where carat will be moved.
     */
    gotoLine(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @param position Character position where carat will be moved.
     */
    gotoPosition(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoStart(): void
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
     * @param autoIndent TRUE to enable auto-indent, FALSE to disable
     */
    setAutoIndent(autoIndent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @param indentsize Indentation size in spaces
     */
    setIndentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @param menu Popupmenu
     */
    setPopupMenu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @param tabsize Tabsize in spaces
     */
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     * @param added TRUE if added, FALSE if deleted.
     * @param length Length of the text changed.
     * @param lines Number of lines added or removed.
     * @param text The text added or removed.
     * @param obj Self
     */
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     * @param ch The character that has been added.
     * @param obj Self
     */
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     * @param code The code that has been added or NULL.
     * @param obj Self
     */
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param signalName Name of the signal.
     * @param handlerName Name of the signal handler.
     * @param object Name of the object to be passed.
     * @param swap The "swap" signal property.
     * @param after The "after" signal property.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param widgetName Name of the widget that will become a member of the class.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     * @param doubleClick whether the line marks gutter was double clicked
     */
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorHover {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorHover */
    /**
     * Show `info` as tooltip
     * @param position 
     * @param info String to display
     */
    display(position: Iterable, info: string): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     */
    eraseAll(): void
    getColumn(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    getCurrentWord(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    getEndPosition(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    getIndentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    getLength(): number
    /**
     * fixme
     * @param line fixme
     */
    getLineBeginPosition(line: number): Iterable
    /**
     * fixme
     * @param line fixme
     */
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    getLineno(): number
    getOffset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    getOverwrite(): boolean
    /**
     * Get current caret position.
     */
    getPosition(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    getStartPosition(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    getTabsize(): number
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
    getText(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    getTextAll(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    getUseSpaces(): boolean
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoEnd(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @param lineno line number where carat will be moved.
     */
    gotoLine(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @param position Character position where carat will be moved.
     */
    gotoPosition(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoStart(): void
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
     * @param autoIndent TRUE to enable auto-indent, FALSE to disable
     */
    setAutoIndent(autoIndent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @param indentsize Indentation size in spaces
     */
    setIndentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @param menu Popupmenu
     */
    setPopupMenu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @param tabsize Tabsize in spaces
     */
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.EditorHover */
    /**
     * User moved the mouse away - can be used to clean up things done in
     * #IAnjutaEditorHover::hover-over
     * @param position IAnjutaEditorCell specifying the position the mouse was over
     */
    connect(sigName: "hover-leave", callback: ((position: Iterable) => void)): number
    on(sigName: "hover-leave", callback: (position: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hover-leave", callback: (position: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hover-leave", callback: (position: Iterable) => void): NodeJS.EventEmitter
    emit(sigName: "hover-leave", position: Iterable): void
    /**
     * The mouse is held for a moment over `position`. This can be used to show
     * all tooltip.
     * @param position IAnjutaEditorCell specifying the position the mouse is over
     */
    connect(sigName: "hover-over", callback: ((position: Iterable) => void)): number
    on(sigName: "hover-over", callback: (position: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hover-over", callback: (position: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hover-over", callback: (position: Iterable) => void): NodeJS.EventEmitter
    emit(sigName: "hover-over", position: Iterable): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     * @param added TRUE if added, FALSE if deleted.
     * @param length Length of the text changed.
     * @param lines Number of lines added or removed.
     * @param text The text added or removed.
     * @param obj Self
     */
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     * @param ch The character that has been added.
     * @param obj Self
     */
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     * @param code The code that has been added or NULL.
     * @param obj Self
     */
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param signalName Name of the signal.
     * @param handlerName Name of the signal handler.
     * @param object Name of the object to be passed.
     * @param swap The "swap" signal property.
     * @param after The "after" signal property.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param widgetName Name of the widget that will become a member of the class.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     * @param doubleClick whether the line marks gutter was double clicked
     */
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorLanguage {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorLanguage */
    /**
     * Return the name of the currently used language
     */
    getLanguage(): string
    getLanguageName(language: string): string
    /**
     * Return a list of languages supported by the editor
     * Note: These list contains the names in the form
     * the editor implementation knows them
     */
    getSupportedLanguages(): string[]
    /**
     * Force the editor to use a given language
     * @param language Language
     */
    setLanguage(language: string): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     */
    eraseAll(): void
    getColumn(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    getCurrentWord(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    getEndPosition(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    getIndentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    getLength(): number
    /**
     * fixme
     * @param line fixme
     */
    getLineBeginPosition(line: number): Iterable
    /**
     * fixme
     * @param line fixme
     */
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    getLineno(): number
    getOffset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    getOverwrite(): boolean
    /**
     * Get current caret position.
     */
    getPosition(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    getStartPosition(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    getTabsize(): number
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
    getText(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    getTextAll(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    getUseSpaces(): boolean
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoEnd(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @param lineno line number where carat will be moved.
     */
    gotoLine(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @param position Character position where carat will be moved.
     */
    gotoPosition(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoStart(): void
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
     * @param autoIndent TRUE to enable auto-indent, FALSE to disable
     */
    setAutoIndent(autoIndent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @param indentsize Indentation size in spaces
     */
    setIndentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @param menu Popupmenu
     */
    setPopupMenu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @param tabsize Tabsize in spaces
     */
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.EditorLanguage */
    /**
     * the language of the editor changed to `language`
     * @param language new language
     */
    connect(sigName: "language-changed", callback: ((language: string) => void)): number
    on(sigName: "language-changed", callback: (language: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "language-changed", callback: (language: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "language-changed", callback: (language: string) => void): NodeJS.EventEmitter
    emit(sigName: "language-changed", language: string): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     * @param added TRUE if added, FALSE if deleted.
     * @param length Length of the text changed.
     * @param lines Number of lines added or removed.
     * @param text The text added or removed.
     * @param obj Self
     */
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     * @param ch The character that has been added.
     * @param obj Self
     */
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     * @param code The code that has been added or NULL.
     * @param obj Self
     */
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param signalName Name of the signal.
     * @param handlerName Name of the signal handler.
     * @param object Name of the object to be passed.
     * @param swap The "swap" signal property.
     * @param after The "after" signal property.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param widgetName Name of the widget that will become a member of the class.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     * @param doubleClick whether the line marks gutter was double clicked
     */
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorLineMode {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorLineMode */
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
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     */
    eraseAll(): void
    getColumn(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    getCurrentWord(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    getEndPosition(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    getIndentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    getLength(): number
    /**
     * fixme
     * @param line fixme
     */
    getLineBeginPosition(line: number): Iterable
    /**
     * fixme
     * @param line fixme
     */
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    getLineno(): number
    getOffset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    getOverwrite(): boolean
    /**
     * Get current caret position.
     */
    getPosition(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    getStartPosition(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    getTabsize(): number
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
    getText(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    getTextAll(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    getUseSpaces(): boolean
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoEnd(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @param lineno line number where carat will be moved.
     */
    gotoLine(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @param position Character position where carat will be moved.
     */
    gotoPosition(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoStart(): void
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
     * @param autoIndent TRUE to enable auto-indent, FALSE to disable
     */
    setAutoIndent(autoIndent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @param indentsize Indentation size in spaces
     */
    setIndentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @param menu Popupmenu
     */
    setPopupMenu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @param tabsize Tabsize in spaces
     */
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     * @param added TRUE if added, FALSE if deleted.
     * @param length Length of the text changed.
     * @param lines Number of lines added or removed.
     * @param text The text added or removed.
     * @param obj Self
     */
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     * @param ch The character that has been added.
     * @param obj Self
     */
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     * @param code The code that has been added or NULL.
     * @param obj Self
     */
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param signalName Name of the signal.
     * @param handlerName Name of the signal handler.
     * @param object Name of the object to be passed.
     * @param swap The "swap" signal property.
     * @param after The "after" signal property.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param widgetName Name of the widget that will become a member of the class.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     * @param doubleClick whether the line marks gutter was double clicked
     */
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorSearch {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorSearch */
    /**
     * Search backward from end to start
     * @param search String to search for
     * @param caseSensitive 
     * @param start Where to search from
     * @param end Where to stop searching
     */
    backward(search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
    /**
     * Search forward from start to end
     * @param search String to search for
     * @param caseSensitive 
     * @param start Where to search from
     * @param end Where to stop searching
     */
    forward(search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     */
    eraseAll(): void
    getColumn(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    getCurrentWord(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    getEndPosition(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    getIndentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    getLength(): number
    /**
     * fixme
     * @param line fixme
     */
    getLineBeginPosition(line: number): Iterable
    /**
     * fixme
     * @param line fixme
     */
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    getLineno(): number
    getOffset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    getOverwrite(): boolean
    /**
     * Get current caret position.
     */
    getPosition(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    getStartPosition(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    getTabsize(): number
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
    getText(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    getTextAll(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    getUseSpaces(): boolean
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoEnd(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @param lineno line number where carat will be moved.
     */
    gotoLine(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @param position Character position where carat will be moved.
     */
    gotoPosition(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoStart(): void
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
     * @param autoIndent TRUE to enable auto-indent, FALSE to disable
     */
    setAutoIndent(autoIndent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @param indentsize Indentation size in spaces
     */
    setIndentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @param menu Popupmenu
     */
    setPopupMenu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @param tabsize Tabsize in spaces
     */
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     * @param added TRUE if added, FALSE if deleted.
     * @param length Length of the text changed.
     * @param lines Number of lines added or removed.
     * @param text The text added or removed.
     * @param obj Self
     */
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     * @param ch The character that has been added.
     * @param obj Self
     */
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     * @param code The code that has been added or NULL.
     * @param obj Self
     */
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param signalName Name of the signal.
     * @param handlerName Name of the signal handler.
     * @param object Name of the object to be passed.
     * @param swap The "swap" signal property.
     * @param after The "after" signal property.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param widgetName Name of the widget that will become a member of the class.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     * @param doubleClick whether the line marks gutter was double clicked
     */
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
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
    hasSelection(): boolean
    /**
     * Replaces currently selected text with the `text`. Only `length` amount
     * of characters are used from `text` buffer to replace.
     * @param text Replacement text.
     * @param length Length of the text to used in `text`.
     */
    replace(text: string, length: number): void
    selectAll(): void
    /**
     * Selects current block of code. The definition of block of code
     * depends on highlight mode used (programming language). Some
     * highlight mode does not have block concept, in that case this
     * method does not do anything.
     */
    selectBlock(): void
    /**
     * Select current function block. The definition of function block
     * depends on highlight mode used (programming language). Some
     * highlight mode does not have function concept, in that case this
     * method does not do anything.
     */
    selectFunction(): void
    /**
     * Select characters between start and end. Start and end don't have to
     * be ordered.
     * @param start Begin of selection
     * @param end End of selection
     * @param scroll Scroll selection onscreen
     */
    set(start: Iterable, end: Iterable, scroll: boolean): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     */
    eraseAll(): void
    getColumn(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    getCurrentWord(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    getEndPosition(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    getIndentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    getLength(): number
    /**
     * fixme
     * @param line fixme
     */
    getLineBeginPosition(line: number): Iterable
    /**
     * fixme
     * @param line fixme
     */
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    getLineno(): number
    getOffset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    getOverwrite(): boolean
    /**
     * Get current caret position.
     */
    getPosition(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    getStartPosition(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    getTabsize(): number
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
    getText(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    getTextAll(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    getUseSpaces(): boolean
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoEnd(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @param lineno line number where carat will be moved.
     */
    gotoLine(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @param position Character position where carat will be moved.
     */
    gotoPosition(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoStart(): void
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
     * @param autoIndent TRUE to enable auto-indent, FALSE to disable
     */
    setAutoIndent(autoIndent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @param indentsize Indentation size in spaces
     */
    setIndentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @param menu Popupmenu
     */
    setPopupMenu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @param tabsize Tabsize in spaces
     */
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     * @param added TRUE if added, FALSE if deleted.
     * @param length Length of the text changed.
     * @param lines Number of lines added or removed.
     * @param text The text added or removed.
     * @param obj Self
     */
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     * @param ch The character that has been added.
     * @param obj Self
     */
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     * @param code The code that has been added or NULL.
     * @param obj Self
     */
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param signalName Name of the signal.
     * @param handlerName Name of the signal handler.
     * @param object Name of the object to be passed.
     * @param swap The "swap" signal property.
     * @param after The "after" signal property.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param widgetName Name of the widget that will become a member of the class.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     * @param doubleClick whether the line marks gutter was double clicked
     */
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
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
     * @param tips list of alternative tips.
     * @param position Tip position.
     */
    show(tips: string[], position: Iterable): void
    visible(): boolean
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     */
    eraseAll(): void
    getColumn(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    getCurrentWord(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    getEndPosition(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    getIndentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    getLength(): number
    /**
     * fixme
     * @param line fixme
     */
    getLineBeginPosition(line: number): Iterable
    /**
     * fixme
     * @param line fixme
     */
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    getLineno(): number
    getOffset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    getOverwrite(): boolean
    /**
     * Get current caret position.
     */
    getPosition(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    getStartPosition(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    getTabsize(): number
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
    getText(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    getTextAll(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    getUseSpaces(): boolean
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoEnd(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @param lineno line number where carat will be moved.
     */
    gotoLine(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @param position Character position where carat will be moved.
     */
    gotoPosition(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoStart(): void
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
     * @param autoIndent TRUE to enable auto-indent, FALSE to disable
     */
    setAutoIndent(autoIndent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @param indentsize Indentation size in spaces
     */
    setIndentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @param menu Popupmenu
     */
    setPopupMenu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @param tabsize Tabsize in spaces
     */
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     * @param added TRUE if added, FALSE if deleted.
     * @param length Length of the text changed.
     * @param lines Number of lines added or removed.
     * @param text The text added or removed.
     * @param obj Self
     */
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     * @param ch The character that has been added.
     * @param obj Self
     */
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     * @param code The code that has been added or NULL.
     * @param obj Self
     */
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param signalName Name of the signal.
     * @param handlerName Name of the signal handler.
     * @param object Name of the object to be passed.
     * @param swap The "swap" signal property.
     * @param after The "after" signal property.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param widgetName Name of the widget that will become a member of the class.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     * @param doubleClick whether the line marks gutter was double clicked
     */
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
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
    getCount(): number
    /**
     * Removes currently focused editor view. It does not remove the
     * last view of the editor. That is, if currently there is only
     * one view of the editor, this function does nothing.
     */
    removeCurrent(): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     */
    eraseAll(): void
    getColumn(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    getCurrentWord(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    getEndPosition(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    getIndentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    getLength(): number
    /**
     * fixme
     * @param line fixme
     */
    getLineBeginPosition(line: number): Iterable
    /**
     * fixme
     * @param line fixme
     */
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    getLineno(): number
    getOffset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    getOverwrite(): boolean
    /**
     * Get current caret position.
     */
    getPosition(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    getStartPosition(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    getTabsize(): number
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
    getText(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    getTextAll(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    getUseSpaces(): boolean
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoEnd(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @param lineno line number where carat will be moved.
     */
    gotoLine(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @param position Character position where carat will be moved.
     */
    gotoPosition(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoStart(): void
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
     * @param autoIndent TRUE to enable auto-indent, FALSE to disable
     */
    setAutoIndent(autoIndent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @param indentsize Indentation size in spaces
     */
    setIndentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @param menu Popupmenu
     */
    setPopupMenu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @param tabsize Tabsize in spaces
     */
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     * @param added TRUE if added, FALSE if deleted.
     * @param length Length of the text changed.
     * @param lines Number of lines added or removed.
     * @param text The text added or removed.
     * @param obj Self
     */
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     * @param ch The character that has been added.
     * @param obj Self
     */
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     * @param code The code that has been added or NULL.
     * @param obj Self
     */
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param signalName Name of the signal.
     * @param handlerName Name of the signal handler.
     * @param object Name of the object to be passed.
     * @param swap The "swap" signal property.
     * @param after The "after" signal property.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param widgetName Name of the widget that will become a member of the class.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     * @param doubleClick whether the line marks gutter was double clicked
     */
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
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
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     */
    eraseAll(): void
    getColumn(): number
    /**
     * Obtains the word on which carat is currently on.
     */
    getCurrentWord(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     */
    getEndPosition(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     */
    getIndentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     */
    getLength(): number
    /**
     * fixme
     * @param line fixme
     */
    getLineBeginPosition(line: number): Iterable
    /**
     * fixme
     * @param line fixme
     */
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     */
    getLineno(): number
    getOffset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     */
    getOverwrite(): boolean
    /**
     * Get current caret position.
     */
    getPosition(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     */
    getStartPosition(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     */
    getTabsize(): number
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
    getText(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     */
    getTextAll(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     */
    getUseSpaces(): boolean
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoEnd(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @param lineno line number where carat will be moved.
     */
    gotoLine(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @param position Character position where carat will be moved.
     */
    gotoPosition(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     */
    gotoStart(): void
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
     * @param autoIndent TRUE to enable auto-indent, FALSE to disable
     */
    setAutoIndent(autoIndent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @param indentsize Indentation size in spaces
     */
    setIndentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @param menu Popupmenu
     */
    setPopupMenu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @param tabsize Tabsize in spaces
     */
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    /**
     * The signal is emitted when the user presses backspace
     */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    /**
     * This signal is emitted when any text change happens in editor.
     * The changes begin at `position`. `text` is not garanteed to be NULL
     * terminated. Use `length` to read the text. `lines` represent the
     * number of line breaks in the added or removed text.
     * @param added TRUE if added, FALSE if deleted.
     * @param length Length of the text changed.
     * @param lines Number of lines added or removed.
     * @param text The text added or removed.
     * @param obj Self
     */
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    /**
     * This signal is emitted when any character is added inside the editor.
     * The newly added character is `ch` which has been inserted at `position`.
     * @param ch The character that has been added.
     * @param obj Self
     */
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    /**
     * This signal is emitted when code is changed inside the editor.
     * When such information is availabe, `position` stores the position where `code` was added.
     * @param code The code that has been added or NULL.
     * @param obj Self
     */
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    /**
     * The signal is a hint that the cursor was moved.
     */
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param signalName Name of the signal.
     * @param handlerName Name of the signal handler.
     * @param object Name of the object to be passed.
     * @param swap The "swap" signal property.
     * @param after The "after" signal property.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    /**
     * This signal is emitted when code for a widget must be generated.
     * @param widgetName Name of the widget that will become a member of the class.
     * @param filename Path for the .ui file that generated the signal.
     * @param obj Self
     */
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    /**
     * The signal is emitted when the user clicks on a marker
     * @param doubleClick whether the line marks gutter was double clicked
     */
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Environment {
    /* Methods of IAnjuta-3.0.IAnjuta.Environment */
    /**
     * Convert a directory in the environment to a directory outside.
     * It is useful when the environment use chroot. Take care that
     * the input directory string is freed using g_free but and you need to
     * free the output string when not needed.
     * @param dir A directory path in the environment
     */
    getRealDirectory(dir: string): string
    /**
     * Override a command to work in another build environment
     * @param dirp a pointer on the working directory
     * @param argvp a pointer on a NULL terminated string array     containing the command name in argv[0] and all    its argument
     * @param envp a pointer on a NULL terminated string array    containing all additional environment variable    used by the command
     */
    override(dirp: string, argvp: string, envp: string): boolean
    static name: string
}
class File {
    /* Methods of IAnjuta-3.0.IAnjuta.File */
    /**
     * Returns the file that was opened with ianjuta_file_open().
     */
    getFile(): Gio.File
    /**
     * The implementor opens the given file.
     * @param file file to open.
     */
    open(file: Gio.File): void
    /* Signals of IAnjuta-3.0.IAnjuta.File */
    /**
     * This signal is emitted when the content is loaded completely.
     */
    connect(sigName: "opened", callback: (() => void)): number
    on(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "opened"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class FileLoader {
    /* Methods of IAnjuta-3.0.IAnjuta.FileLoader */
    peekInterface(file: Gio.File): string
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class FileManager {
    /* Methods of IAnjuta-3.0.IAnjuta.FileManager */
    /**
     * fixme
     * @param rootUri fixme
     */
    setRoot(rootUri: string): void
    /**
     * fixme.
     * @param file File to select
     */
    setSelected(file: Gio.File): void
    /* Signals of IAnjuta-3.0.IAnjuta.FileManager */
    /**
     * fixme
     * @param err Error propagation and reporting.
     */
    connect(sigName: "section-changed", callback: ((err: Gio.File) => void)): number
    on(sigName: "section-changed", callback: (err: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (err: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (err: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "section-changed", err: Gio.File): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class FileSavable {
    /* Methods of IAnjuta-3.0.IAnjuta.FileSavable */
    /**
     * Return is the file is in conflict. It means the file
     * has been modified externally and the user needs to
     * tell which version he wants to use.
     */
    isConflict(): boolean
    /**
     * Returns the dirty status of the content.
     */
    isDirty(): boolean
    /**
     * Return is the file is read-only
     */
    isReadOnly(): boolean
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
    saveAs(file: Gio.File): void
    /**
     * if `dirty` is TRUE, sets dirty for the content. Save point will be
     * left and the content will be considered not saved. Otherwise,
     * content will considered saved and save-point will be entered.
     * @param dirty Whether the file was edited or not
     */
    setDirty(dirty: boolean): void
    /* Methods of IAnjuta-3.0.IAnjuta.File */
    /**
     * Returns the file that was opened with ianjuta_file_open().
     */
    getFile(): Gio.File
    /**
     * The implementor opens the given file.
     * @param file file to open.
     */
    open(file: Gio.File): void
    /* Signals of IAnjuta-3.0.IAnjuta.FileSavable */
    /**
     * This signal is emitted when the content is saved.
     * @param file file where the content is saved or NULL if save failed
     */
    connect(sigName: "saved", callback: ((file: Gio.File) => void)): number
    on(sigName: "saved", callback: (file: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "saved", callback: (file: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "saved", callback: (file: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "saved", file: Gio.File): void
    connect(sigName: "update-save-ui", callback: (() => void)): number
    on(sigName: "update-save-ui", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-save-ui", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-save-ui", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "update-save-ui"): void
    /* Signals of IAnjuta-3.0.IAnjuta.File */
    /**
     * This signal is emitted when the content is loaded completely.
     */
    connect(sigName: "opened", callback: (() => void)): number
    on(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "opened"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Glade {
    /* Methods of IAnjuta-3.0.IAnjuta.Glade */
    addAssociation(master: string, slave: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Help {
    /* Methods of IAnjuta-3.0.IAnjuta.Help */
    /**
     * Search for string `query` in the help and display the result
     * @param query string to search in the help
     */
    search(query: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Indenter {
    /* Methods of IAnjuta-3.0.IAnjuta.Indenter */
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
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Indicable {
    /* Methods of IAnjuta-3.0.IAnjuta.Indicable */
    /**
     * Clear all indicators
     */
    clear(): void
    /**
     * Set an indicator
     * @param beginLocation Location where the indication should start
     * @param endLocation Location where the indication should end
     * @param indicator the indicator to use
     */
    set(beginLocation: Iterable, endLocation: Iterable, indicator: IndicableIndicator): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Iterable {
    /* Methods of IAnjuta-3.0.IAnjuta.Iterable */
    /**
     * Assigns the iter position from `src_iter`.
     * @param srcIter Source iter from which to copy the assignment.
     */
    assign(srcIter: Iterable): void
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
    getLength(): number
    /**
     * Index of the current iter in the iterable. It will be
     * from 0 to length - 1 (ianjuta_iter_get_length()) if iter is pointed
     * at valid element. It will return -1 if iter is pointed at end-iter.
     */
    getPosition(): number
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
    setPosition(position: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
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
    hasChildren(): boolean
    /**
     * Set iter position to parent of curernt iter. If there is no parent,
     * returns FALSE (current iter position is not changed)
     */
    parent(): boolean
    /* Methods of IAnjuta-3.0.IAnjuta.Iterable */
    /**
     * Assigns the iter position from `src_iter`.
     * @param srcIter Source iter from which to copy the assignment.
     */
    assign(srcIter: Iterable): void
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
    getLength(): number
    /**
     * Index of the current iter in the iterable. It will be
     * from 0 to length - 1 (ianjuta_iter_get_length()) if iter is pointed
     * at valid element. It will return -1 if iter is pointed at end-iter.
     */
    getPosition(): number
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
    setPosition(position: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Language {
    /* Methods of IAnjuta-3.0.IAnjuta.Language */
    /**
     * Conviniece method to get the id directly from the editor
     * @param editor An object implementing IAnjutaEditorLanguage
     */
    getFromEditor(editor: EditorLanguage): LanguageId
    getFromMimeType(mimeType: string): LanguageId
    getFromString(string: string): LanguageId
    getLanguages(): number[]
    getMakeTarget(id: LanguageId): string
    getName(id: LanguageId): string
    /**
     * Conviniece method to get the name directly from the editor
     * @param editor An object implementing IAnjutaEditorLanguage
     */
    getNameFromEditor(editor: EditorLanguage): string
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class LanguageProvider {
    /* Methods of IAnjuta-3.0.IAnjuta.LanguageProvider */
    /**
     * Searches for a calltip in the cache
     * @param callContext name of the method to show a calltip
     */
    getCalltipCache(callContext: string): string[]
    /**
     * Searches for a calltip context
     * @param iter current cursor position
     */
    getCalltipContext(iter: Iterable): string
    /**
     * Creates a new calltip
     * @param callContext name of the method to create a new calltip
     * @param iter current cursor position
     */
    newCalltip(callContext: string, iter: Iterable): void
    /**
     * Show completion for the context at position `iter`. The provider should
     * call ianjuta_editor_assist_proposals here to add proposals to the list.
     * 
     * Note that this is called after every character typed and the list of proposals
     * has to be completely renewed.
     * @param iter the text iter where the provider should be populated
     */
    populateCompletions(iter: Iterable): Iterable | null
    /* Methods of IAnjuta-3.0.IAnjuta.Provider */
    /**
     * Show completion for the context at position `iter`
     * @param iter position where the completion occurs
     * @param data data assigned to the proposal
     */
    activate(iter: Iterable, data?: object | null): void
    /**
     * Return a (translatable) name for the provider
     */
    getName(): string
    /**
     * Get the iter where the current completion started
     */
    getStartIter(): Iterable
    /**
     * Show completion for the context at position `iter`. The provider should
     * call ianjuta_editor_assist_proposals here to add proposals to the list.
     * 
     * Note that this is called after every character typed and the list of proposals
     * has to be completely renewed.
     * @param iter the text iter where the provider should be populated
     */
    populate(iter: Iterable): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Loader {
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Markable {
    /* Methods of IAnjuta-3.0.IAnjuta.Markable */
    /**
     * Delete the `marker` from all locations.
     * @param marker Marker to delete.
     */
    deleteAllMarkers(marker: MarkableMarker): void
    /**
     * Check if the `marker` is set at the given `location`.
     * @param location Location to check.
     * @param marker Marker to check.
     */
    isMarkerSet(location: number, marker: MarkableMarker): boolean
    /**
     * Location where a marker is set could have moved by some operation in
     * the implementation. To retrieve the correct location where the marker
     * has moved, pass the handle retured by ianjuta_markable_mark() to this
     * method.
     * @param handle Handle of location.
     */
    locationFromHandle(handle: number): number
    /**
     * Marks the specified location with the given marker type. Location is
     * implementation depenedent. For example, for an editor location means
     * lines where markers are set.
     * @param location Location at which the marker to set.
     * @param marker Type of marker to be used
     * @param tooltip optional tooltip displayed with the marker
     */
    mark(location: number, marker: MarkableMarker, tooltip?: string | null): number
    /**
     * Clears the `marker` at given `location`.
     * @param location Location where the marker is set.
     * @param marker The marker to unset.
     */
    unmark(location: number, marker: MarkableMarker): void
    /* Signals of IAnjuta-3.0.IAnjuta.Markable */
    /**
     * The signal is emitted when the user clicks on a marker
     * @param doubleClick whether the marker was double clicked
     * @param location location of the clicked marker
     */
    connect(sigName: "marker-clicked", callback: ((doubleClick: boolean, location: number) => void)): number
    on(sigName: "marker-clicked", callback: (doubleClick: boolean, location: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "marker-clicked", callback: (doubleClick: boolean, location: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "marker-clicked", callback: (doubleClick: boolean, location: number) => void): NodeJS.EventEmitter
    emit(sigName: "marker-clicked", doubleClick: boolean, location: number): void
    static name: string
}
class MessageManager {
    /* Methods of IAnjuta-3.0.IAnjuta.MessageManager */
    /**
     * Remove view from the message-manager. The view
     * will become invalid.
     * @param view The view to remove
     */
    removeView(view: MessageView): void
    /**
     * Set view to be on top of the notebook.
     * @param view A message view
     */
    setCurrentView(view: MessageView): void
    /**
     * Sets the icon of view.
     * @param view A message view
     * @param icon Sets the icon of view.
     */
    setViewIcon(view: MessageView, icon: GdkPixbuf.PixbufAnimation): void
    /**
     * Sets the icon of view.
     * @param view A message view
     * @param icon Sets the icon of view.
     */
    setViewIconFromStock(view: MessageView, icon: string): void
    /**
     * Sets the title of view.
     * @param view A message view
     * @param title Sets the title of view.
     */
    setViewTitle(view: MessageView, title: string): void
    static name: string
}
class MessageView {
    /* Methods of IAnjuta-3.0.IAnjuta.MessageView */
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
    bufferAppend(text: string): void
    /**
     * Clear all messages in buffer
     */
    clear(): void
    /**
     * Get the currently selected message
     */
    getCurrentMessage(): string
    /**
     * Select next message (of type INFO, WARNING or ERROR)
     */
    selectNext(): void
    /**
     * Select previous message
     */
    selectPrevious(): void
    /* Signals of IAnjuta-3.0.IAnjuta.MessageView */
    /**
     * Emitted when #ianjuta_message_view_buffer_append found a newline
     * @param line the current line
     */
    connect(sigName: "buffer-flushed", callback: ((line: string) => void)): number
    on(sigName: "buffer-flushed", callback: (line: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffer-flushed", callback: (line: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffer-flushed", callback: (line: string) => void): NodeJS.EventEmitter
    emit(sigName: "buffer-flushed", line: string): void
    /**
     * Emitted when the user clicks on a message
     * @param message text of the clicked message
     */
    connect(sigName: "message-clicked", callback: ((message: string) => void)): number
    on(sigName: "message-clicked", callback: (message: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message-clicked", callback: (message: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message-clicked", callback: (message: string) => void): NodeJS.EventEmitter
    emit(sigName: "message-clicked", message: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class PluginFactory {
    static name: string
}
class Preferences {
    /* Methods of IAnjuta-3.0.IAnjuta.Preferences */
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
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
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
    printPreview(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Project {
    /* Methods of IAnjuta-3.0.IAnjuta.Project */
    /**
     * Create a new node and insert it after sibling
     * @param parent Parent
     * @param sibling Sibling
     * @param type Node type
     * @param file Optional file object for the node
     * @param name Optional name for the node
     */
    addNodeAfter(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null): Anjuta.ProjectNode
    /**
     * Create a new node and insert it before sibling
     * @param parent Parent
     * @param sibling Sibling
     * @param type Node type
     * @param file Optional file object for the node
     * @param name Optional name for the node
     */
    addNodeBefore(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null): Anjuta.ProjectNode
    /**
     * Return a list of possible node;
     */
    getNodeInfo(): Anjuta.ProjectNodeInfo[]
    /**
     * Get root_node
     */
    getRoot(): Anjuta.ProjectNode
    /**
     * Return TRUE if the project is loaded;
     */
    isLoaded(): boolean
    /**
     * Reload a project node
     * @param node Project node to reload
     */
    loadNode(node: Anjuta.ProjectNode): boolean
    /**
     * Remove a node
     * @param node Node
     */
    removeNode(node: Anjuta.ProjectNode): boolean
    /**
     * Remove a property of the node
     * @param node Node
     * @param id Property
     * @param name Name for map property
     */
    removeProperty(node: Anjuta.ProjectNode, id: string, name?: string | null): boolean
    /**
     * Save a project node
     * @param node Project node to save
     */
    saveNode(node: Anjuta.ProjectNode): boolean
    /**
     * Change a properties on node.
     * @param node Node
     * @param id Property
     * @param name Name for map property
     * @param value Value
     */
    setProperty(node: Anjuta.ProjectNode, id: string, name: string | null, value: string): Anjuta.ProjectProperty | null
    /* Signals of IAnjuta-3.0.IAnjuta.Project */
    /**
     * This signal is emitted when the project is changed on the disk. The
     * corresponding node has to be reloaded.
     * @param node Node to be reloaded.
     */
    connect(sigName: "file-changed", callback: ((node?: object | null) => void)): number
    on(sigName: "file-changed", callback: (node?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "file-changed", callback: (node?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "file-changed", callback: (node?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "file-changed", node?: object | null): void
    /**
     * This signal is emitted when a node is changed by a function of this
     * interface. The error argument is not NULL if the change was not
     * possible. The corresponding node need to be saved.
     * @param node Changed node.
     * @param error Error while changing node
     */
    connect(sigName: "node-changed", callback: ((node: object | null, error: GLib.Error) => void)): number
    on(sigName: "node-changed", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-changed", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-changed", callback: (node: object | null, error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "node-changed", node: object | null, error: GLib.Error): void
    /**
     * This signal is emitted when a node is loaded. It returns an error if the
     * load operation fail.
     * @param node Loaded node.
     * @param error Error while loading node
     */
    connect(sigName: "node-loaded", callback: ((node: object | null, error: GLib.Error) => void)): number
    on(sigName: "node-loaded", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-loaded", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-loaded", callback: (node: object | null, error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "node-loaded", node: object | null, error: GLib.Error): void
    /**
     * This signal is emitted when a node is saved. It returns an error if the
     * save operation fail.
     * @param node Saved node.
     * @param error Error while saving node
     */
    connect(sigName: "node-saved", callback: ((node: object | null, error: GLib.Error) => void)): number
    on(sigName: "node-saved", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-saved", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-saved", callback: (node: object | null, error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "node-saved", node: object | null, error: GLib.Error): void
    static name: string
}
class ProjectBackend {
    /* Methods of IAnjuta-3.0.IAnjuta.ProjectBackend */
    /**
     * Create a new Anjuta project.
     * @param file Project file or directory
     */
    newProject(file: Gio.File): Project
    /**
     * Check if the directory contains a project supported by this
     * backend.
     * @param directory Project file or directory
     */
    probe(directory: Gio.File): number
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class ProjectChooser {
    /* Methods of IAnjuta-3.0.IAnjuta.ProjectChooser */
    /**
     * Gets the currently selected element in the project chooser.
     */
    getSelected(): Gio.File
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
     * @param childType Select one element type: source, group or target
     */
    setProjectModel(manager: ProjectManager, childType: Anjuta.ProjectNodeType): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.ProjectChooser */
    /**
     * Emitted when the selected node is changed.
     */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class ProjectManager {
    /* Methods of IAnjuta-3.0.IAnjuta.ProjectManager */
    /**
     * Prompts the user to add a new group to the project. The user can select
     * a parent group different from the one set as default.
     * @param name Group name or URI.
     * @param defaultGroup A #GFile corresponding to the default parent group or 				%NULL if don't care.
     */
    addGroup(name: string, defaultGroup?: Gio.File | null): Gio.File
    /**
     * Prompts the user to add a file to the project. If the user selects
     * multiple files only the first source file is returned.
     * 
     * You can add non existing file. In this case the element_added
     * signal will be emitted with a non existing file. So it is
     * up to the caller to reemit this signal later when the file
     * is created.
     * @param name Source name or URI.
     * @param defaultTarget A #GFile corresponding to the default target or group or 				%NULL if you don't care.
     */
    addSource(name: string, defaultTarget?: Gio.File | null): Gio.File
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
    addSourceQuiet(name: string, target: Gio.File): Gio.File
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
     * @param defaultTarget A #GFile corresponding to the default target or group or 				%NULL if don't care.
     */
    addSources(names: string[], defaultTarget?: Gio.File | null): Gio.File[]
    /**
     * Prompts the user to add a new target to the project. The user can select
     * a parent group different from the one set as default.
     * @param name Target name or URI.
     * @param defaultGroup A #GFile corresponding to the default parent group or 				%NULL if don't care.
     */
    addTarget(name: string, defaultGroup?: Gio.File | null): Gio.File
    /**
     * Gets the capabilites of project whether it can add group, target
     * sources etc.
     */
    getCapabilities(): number
    /**
     * Recursively gets the list of all children below the corresponding
     * parent having the specify type.
     * @param parent A #GFile corresponding to the parent.
     * @param childrenType Select one element type: source, group or target
     */
    getChildren(parent: Gio.File, childrenType: number): Gio.File[]
    /**
     * Gets the current project.
     */
    getCurrentProject(): Project
    /**
     * Get a list of all elements of this type in the project.
     * @param elementType Select one element type: source, group or target
     */
    getElements(elementType: Anjuta.ProjectNodeType): Gio.File[]
    getPackages(): string[]
    /**
     * Gets the currently selected element in the project manager view.
     */
    getSelected(): Gio.File
    /**
     * Get the type of the corresponding target: program, library...
     * @param target A #GFile corresponding to a target
     */
    getTargetType(target: Gio.File): Anjuta.ProjectNodeType
    /**
     * Get a list of targets in the project with the corresponding type.
     * @param targetType type of the target
     */
    getTargets(targetType: Anjuta.ProjectNodeType): Gio.File[]
    /**
     * Gets whether a project is currently opened.
     */
    isOpen(): boolean
    /**
     * Remove a source file from the project. If the file is used in several
     * targets, it is removed from all targets. The file could be removed from
     * the disk.
     * @param file A #GFile that will be removed from the project
     */
    removeFile(file: Gio.File): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.ProjectManager */
    connect(sigName: "element-added", callback: ((object: Gio.File) => void)): number
    on(sigName: "element-added", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (object: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "element-added", object: Gio.File): void
    connect(sigName: "element-removed", callback: ((object: Gio.File) => void)): number
    on(sigName: "element-removed", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (object: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "element-removed", object: Gio.File): void
    connect(sigName: "element-selected", callback: ((object: Gio.File) => void)): number
    on(sigName: "element-selected", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-selected", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-selected", callback: (object: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "element-selected", object: Gio.File): void
    connect(sigName: "project-loaded", callback: ((object: GLib.Error) => void)): number
    on(sigName: "project-loaded", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "project-loaded", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "project-loaded", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "project-loaded", object: GLib.Error): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Provider {
    /* Methods of IAnjuta-3.0.IAnjuta.Provider */
    /**
     * Show completion for the context at position `iter`
     * @param iter position where the completion occurs
     * @param data data assigned to the proposal
     */
    activate(iter: Iterable, data?: object | null): void
    /**
     * Return a (translatable) name for the provider
     */
    getName(): string
    /**
     * Get the iter where the current completion started
     */
    getStartIter(): Iterable
    /**
     * Show completion for the context at position `iter`. The provider should
     * call ianjuta_editor_assist_proposals here to add proposals to the list.
     * 
     * Note that this is called after every character typed and the list of proposals
     * has to be completely renewed.
     * @param iter the text iter where the provider should be populated
     */
    populate(iter: Iterable): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class SnippetsManager {
    /* Methods of IAnjuta-3.0.IAnjuta.SnippetsManager */
    /**
     * Insert snippet in the current editor.
     * @param key Trigger-key of the snippet
     * @param editingSession If after inserting the snippet there should be an editing session. Mark as FALSE if not interested in the dynamic capabilities of the snippet.
     */
    insert(key: string, editingSession: boolean): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Stream {
    /* Methods of IAnjuta-3.0.IAnjuta.Stream */
    /**
     * The implementor opens the given stream.
     * @param stream Stream to open from.
     */
    open(stream?: object | null): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class StreamLoader {
    /* Methods of IAnjuta-3.0.IAnjuta.StreamLoader */
    /**
     * Peeks the stream and determines the interface which can load
     * this stream.
     * @param stream Stream to load
     */
    peekInterface(stream?: object | null): string
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class StreamSavable {
    /* Methods of IAnjuta-3.0.IAnjuta.StreamSavable */
    save(stream?: object | null): void
    /* Methods of IAnjuta-3.0.IAnjuta.Stream */
    /**
     * The implementor opens the given stream.
     * @param stream Stream to open from.
     */
    open(stream?: object | null): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Symbol {
    /* Methods of IAnjuta-3.0.IAnjuta.Symbol */
    /**
     * Retreives the boolean value of a boolean `field`.
     * @param field The field to retrieve.
     */
    getBoolean(field: SymbolField): boolean
    /**
     * A convenience method to get a small icon (16x16) representing the symbol
     * kind. You *need* a query with fields #IANJUTA_SYMBOL_FIELD_ACCESS and
     * #IANJUTA_SYMBOL_FIELD_KIND selected.
     */
    getIcon(): GdkPixbuf.Pixbuf
    /**
     * Retreives the integer value of an integer `field`.
     * @param field The field to retrieve.
     */
    getInt(field: SymbolField): number
    /**
     * Retreives the string value of a string `field`.
     * @param field The field to retrieve.
     */
    getString(field: SymbolField): string
    /**
     * A convenience method to get value of #IANJUTA_SYMBOL_FIELD_TYPE
     * field typecasted to IAnjutaSymbolType. Numerical value is unchanged.
     */
    getSymType(): SymbolType
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class SymbolManager {
    /* Methods of IAnjuta-3.0.IAnjuta.SymbolManager */
    /**
     * Activates the package for searches in the global symbol database.
     * @param pkgName Name of the package to activate. The colon char must be avoided.
     * @param pkgVersion Version of the package. The colon char must be avoided.
     */
    activatePackage(pkgName: string, pkgVersion: string): boolean
    /**
     * Deactivates all activate packages
     */
    deactivateAll(): void
    /**
     * Deactivates the package if it was found. If package is NULL, deactivate all
     * packages.
     * @param pkgName name of the package. The colon char must be avoided.
     * @param pkgVersion Version of the package. The colon char must be avoided.
     */
    deactivatePackage(pkgName: string, pkgVersion: string): void
    /* Signals of IAnjuta-3.0.IAnjuta.SymbolManager */
    connect(sigName: "prj-scan-end", callback: ((object: number) => void)): number
    on(sigName: "prj-scan-end", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "prj-scan-end", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "prj-scan-end", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "prj-scan-end", object: number): void
    connect(sigName: "sys-scan-end", callback: ((object: number) => void)): number
    on(sigName: "sys-scan-end", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sys-scan-end", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sys-scan-end", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "sys-scan-end", object: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class SymbolQuery {
    /* Methods of IAnjuta-3.0.IAnjuta.SymbolQuery */
    cancel(): void
    /**
     * Sets the fields of Query.
     * @param nFields Then number of fields to retrieve.
     * @param fields The fields to retrieve in the query. The array length must   be `n_fields`.
     */
    setFields(nFields: number, fields: SymbolField): void
    /**
     * Sets the filescope search of Query.
     * @param filescopeSearch The filescope to search.
     */
    setFileScope(filescopeSearch: SymbolQueryFileScope): void
    /**
     * Sets the bit mask of symbol type filters. if `include_types` is TRUE,
     * symbols satisfying the given symbol types are selected, otherwise
     * they are excluded.
     * @param filters The mode of query.
     * @param includeTypes TRUE if filter is positive, FALSE if reversed.
     */
    setFilters(filters: SymbolType, includeTypes: boolean): void
    /**
     * Sets the field with which result of query is grouped. As a result
     * there will be no duplicates of with this field.
     * @param field The field to group results.
     */
    setGroupBy(field: SymbolField): void
    /**
     * Sets the limit of Query results. No more than `limit` results are
     * returned.
     * @param limit The limit of query.
     */
    setLimit(limit: number): void
    /**
     * Sets the mode of Query.
     * @param mode The mode of query.
     */
    setMode(mode: SymbolQueryMode): void
    /**
     * Sets the offset index of Query results.
     * @param offset Offset of the resultset.
     */
    setOffset(offset: number): void
    /**
     * Sets the field with which result of query is ordered.
     * @param field The field to order the result.
     */
    setOrderBy(field: SymbolField): void
    /* Signals of IAnjuta-3.0.IAnjuta.SymbolQuery */
    connect(sigName: "async-result", callback: ((object: GObject.Object) => void)): number
    on(sigName: "async-result", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "async-result", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "async-result", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "async-result", object: GObject.Object): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Terminal {
    /* Methods of IAnjuta-3.0.IAnjuta.Terminal */
    /**
     * Run the command in a terminal, setting the working directory
     * and environment variables.
     * @param directory Working directory
     * @param command Command executed followed by arguments
     * @param environment List of additional environment variables
     */
    executeCommand(directory: string, command: string, environment: string[]): number
    /* Signals of IAnjuta-3.0.IAnjuta.Terminal */
    connect(sigName: "child-exited", callback: ((object: number, p0: number) => void)): number
    on(sigName: "child-exited", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-exited", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-exited", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-exited", object: number, p0: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Todo {
    /* Methods of IAnjuta-3.0.IAnjuta.Todo */
    load(file: Gio.File): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Vcs {
    /* Methods of IAnjuta-3.0.IAnjuta.Vcs */
    /**
     * Add files to the VCS repository.
     * @param files List of List of files, represented as #Gfile objects, to add
     * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
     */
    add(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    /**
     * Check out a copy of a code repository.
     * @param repositoryLocation Location of repository to check out
     * @param dest Destination of checked out copy
     * @param cancel An optional #GCancellable object to cancel the operation, or NULL
     * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
     */
    checkout(repositoryLocation: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify): void
    /**
     * Remove files from the VCS repository.
     * @param files List of files, represented as #Gfile objects, to remove
     * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
     */
    remove(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    /* Signals of IAnjuta-3.0.IAnjuta.Vcs */
    connect(sigName: "status-changed", callback: (() => void)): number
    on(sigName: "status-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "status-changed"): void
    static name: string
}
class Wizard {
    /* Methods of IAnjuta-3.0.IAnjuta.Wizard */
    /**
     * Called when the wizard should start after some user action
     */
    activate(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
abstract class BuildableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.BuildableIface */
    gIface: GObject.TypeInterface
    build: (obj: Buildable, uri: string) => void
    clean: (obj: Buildable, uri: string) => void
    configure: (obj: Buildable, uri: string) => void
    execute: (obj: Buildable, uri: string) => void
    generate: (obj: Buildable, uri: string) => void
    getCommand: (obj: Buildable, commandId: BuildableCommand) => string
    install: (obj: Buildable, uri: string) => void
    resetCommands: (obj: Buildable) => void
    setCommand: (obj: Buildable, commandId: BuildableCommand, command: string) => void
    static name: string
}
abstract class BuilderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.BuilderIface */
    gIface: GObject.TypeInterface
    cancel: (obj: Builder, handle: BuilderHandle) => void
    getUriConfiguration: (obj: Builder, uri: string) => string
    listConfiguration: (obj: Builder) => string[]
    static name: string
}
abstract class DebugManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebugManagerIface */
    gIface: GObject.TypeInterface
    breakpointChanged: (obj: DebugManager, breakpoint: DebuggerBreakpointItem) => void
    debuggerStarted: (obj: DebugManager) => void
    debuggerStopped: (obj: DebugManager, err: GLib.Error) => void
    frameChanged: (obj: DebugManager, frame: number, thread: number) => void
    locationChanged: (obj: DebugManager, address: number, uri: string, line: number) => void
    programExited: (obj: DebugManager) => void
    programLoaded: (obj: DebugManager) => void
    programMoved: (obj: DebugManager, pid: number, tid: number, address: number, file: string, line: number) => void
    programRunning: (obj: DebugManager) => void
    programStarted: (obj: DebugManager) => void
    programStopped: (obj: DebugManager) => void
    programUnloaded: (obj: DebugManager) => void
    sharedlibEvent: (obj: DebugManager) => void
    signalReceived: (obj: DebugManager, name: string, description: string) => void
    quit: (obj: DebugManager) => boolean
    start: (obj: DebugManager, uri: string) => boolean
    startRemote: (obj: DebugManager, server: string, uri: string) => boolean
    static name: string
}
abstract class DebuggerBreakpointIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerBreakpointIface */
    gIface: DebuggerIface
    implementBreakpoint: (obj: DebuggerBreakpoint) => number
    static name: string
}
class DebuggerBreakpointItem {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerBreakpointItem */
    /**
     * type see #IAnjutaBreakpointType enumeration
     */
    type: number
    /**
     * unique identifier
     */
    id: number
    /**
     * source file where is the breakpoint
     */
    file: string
    /**
     * corresponding source file line number
     */
    line: number
    /**
     * corresponding function name
     */
    function_: string
    /**
     * corresponding address
     */
    address: number
    /**
     * TRUE if the breakpoint is enabled
     */
    enable: boolean
    /**
     * TRUE if the breakpoint is ignored
     */
    ignore: number
    /**
     * Count how many time the breakpoint is triggered
     */
    times: number
    /**
     * Additional condition for triggering the breakpoint
     */
    condition: string
    /**
     * TRUE if the breakpoint is temporary
     */
    temporary: boolean
    /**
     * TRUE if the breakpoint is pending
     */
    pending: boolean
    static name: string
}
class DebuggerFrame {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerFrame */
    /**
     * Thread identifier.
     */
    thread: number
    /**
     * Level of the frame, 0 is the topmost one.
     */
    level: number
    /**
     * List of argument of the caller.
     */
    args: string
    /**
     * Source file name where is the program counter.
     */
    file: string
    /**
     * Line number in the file above.
     */
    line: number
    /**
     * Function name where is the program counter.
     */
    function_: string
    /**
     * Library name where is the program counter.
     */
    library: string
    /**
     * Address of the program counter.
     */
    address: number
    static name: string
}
abstract class DebuggerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerIface */
    gIface: GObject.TypeInterface
    debuggerReady: (obj: Debugger, state: DebuggerState) => void
    debuggerStarted: (obj: Debugger) => void
    debuggerStopped: (obj: Debugger, err: GLib.Error) => void
    frameChanged: (obj: Debugger, frame: number, thread: number) => void
    programExited: (obj: Debugger) => void
    programLoaded: (obj: Debugger) => void
    programMoved: (obj: Debugger, pid: number, tid: number, address: number, file: string, line: number) => void
    programRunning: (obj: Debugger) => void
    programStopped: (obj: Debugger) => void
    sharedlibEvent: (obj: Debugger) => void
    signalReceived: (obj: Debugger, name: string, description: string) => void
    abort: (obj: Debugger) => boolean
    attach: (obj: Debugger, pid: number, sourceSearchDirectories: string[]) => boolean
    connect: (obj: Debugger, server: string, args: string, terminal: boolean, stop: boolean) => boolean
    disableLog: (obj: Debugger) => void
    enableLog: (obj: Debugger, log: MessageView) => void
    exit: (obj: Debugger) => boolean
    getState: (obj: Debugger) => DebuggerState
    handleSignal: (obj: Debugger, name: string, stop: boolean, print: boolean, ignore: boolean) => boolean
    interrupt: (obj: Debugger) => boolean
    load: (obj: Debugger, file: string, mimeType: string, sourceSearchDirectories: string[]) => boolean
    quit: (obj: Debugger) => boolean
    run: (obj: Debugger) => boolean
    runFrom: (obj: Debugger, file: string, line: number) => boolean
    runTo: (obj: Debugger, file: string, line: number) => boolean
    sendCommand: (obj: Debugger, command: string) => boolean
    setEnvironment: (obj: Debugger, env: string) => boolean
    setFrame: (obj: Debugger, frame: number) => boolean
    setThread: (obj: Debugger, thread: number) => boolean
    setWorkingDirectory: (obj: Debugger, dir: string) => boolean
    start: (obj: Debugger, args: string, terminal: boolean, stop: boolean) => boolean
    stepIn: (obj: Debugger) => boolean
    stepOut: (obj: Debugger) => boolean
    stepOver: (obj: Debugger) => boolean
    unload: (obj: Debugger) => boolean
    static name: string
}
class DebuggerInstructionALine {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionALine */
    /**
     * Address of the line
     */
    address: number
    /**
     * Optional label
     */
    label: string
    /**
     * Diassembled instruction on the line
     */
    text: string
    static name: string
}
class DebuggerInstructionDisassembly {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionDisassembly */
    /**
     * Number of line
     */
    size: number
    /**
     * Array of all lines
     */
    data: DebuggerInstructionALine[]
    static name: string
}
abstract class DebuggerInstructionIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionIface */
    gIface: DebuggerIface
    runFromAddress: (obj: DebuggerInstruction, address: number) => boolean
    runToAddress: (obj: DebuggerInstruction, address: number) => boolean
    stepInInstruction: (obj: DebuggerInstruction) => boolean
    stepOverInstruction: (obj: DebuggerInstruction) => boolean
    static name: string
}
class DebuggerMemoryBlock {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerMemoryBlock */
    address: number
    length: number
    data: string
    static name: string
}
abstract class DebuggerMemoryIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerMemoryIface */
    gIface: DebuggerIface
    static name: string
}
class DebuggerRegisterData {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerRegisterData */
    /**
     * register identifier
     */
    num: number
    /**
     * register name
     */
    name: string
    /**
     * register value
     */
    value: string
    static name: string
}
abstract class DebuggerRegisterIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerRegisterIface */
    gIface: DebuggerIface
    writeRegister: (obj: DebuggerRegister, value: DebuggerRegisterData) => boolean
    static name: string
}
abstract class DebuggerVariableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerVariableIface */
    gIface: DebuggerIface
    assign: (obj: DebuggerVariable, name: string, value: string) => boolean
    destroy: (obj: DebuggerVariable, name: string) => boolean
    static name: string
}
class DebuggerVariableObject {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerVariableObject */
    /**
     * unique variable object name created by backend
     */
    name: string
    /**
     * corresponding variable name or expression
     */
    expression: string
    /**
     * variable type
     */
    type: string
    /**
     * variable value
     */
    value: string
    /**
     * TRUE if the variable has changed
     */
    changed: boolean
    /**
     * TRUE if the variable is outside current scope
     */
    exited: boolean
    /**
     * TRUE if the variable has been removed
     */
    deleted: boolean
    /**
     * Number of variable children, -1 if unknown
     */
    children: number
    /**
     * TRUE if the children value is wrong
     */
    hasMore: boolean
    static name: string
}
abstract class DocumentIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DocumentIface */
    gIface: GObject.TypeInterface
    updateUi: (obj: Document) => void
    beginUndoAction: (obj: Document) => void
    canRedo: (obj: Document) => boolean
    canUndo: (obj: Document) => boolean
    clear: (obj: Document) => void
    copy: (obj: Document) => void
    cut: (obj: Document) => void
    endUndoAction: (obj: Document) => void
    getFilename: (obj: Document) => string
    grabFocus: (obj: Document) => void
    paste: (obj: Document) => void
    redo: (obj: Document) => void
    undo: (obj: Document) => void
    static name: string
}
abstract class DocumentManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DocumentManagerIface */
    gIface: GObject.TypeInterface
    documentAdded: (obj: DocumentManager, doc: Document) => void
    documentRemoved: (obj: DocumentManager, doc: Document) => void
    addBookmark: (obj: DocumentManager, file: Gio.File, line: number) => void
    addBuffer: (obj: DocumentManager, name: string, content: string) => Editor
    addDocument: (obj: DocumentManager, document: Document) => void
    findDocumentWithFile: (obj: DocumentManager, file: Gio.File) => Document
    getCurrentDocument: (obj: DocumentManager) => Document
    getDocWidgets: (obj: DocumentManager) => Gtk.Widget[]
    getFile: (obj: DocumentManager, filename: string) => Gio.File
    gotoFileLine: (obj: DocumentManager, file: Gio.File, lineno: number) => Editor
    gotoFileLineMark: (obj: DocumentManager, file: Gio.File, lineno: number, mark: boolean) => Editor
    removeDocument: (obj: DocumentManager, document: Document, saveBefore: boolean) => boolean
    setCurrentDocument: (obj: DocumentManager, document: Document) => void
    static name: string
}
abstract class EditorAssistIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorAssistIface */
    gIface: EditorIface
    cancelled: (obj: EditorAssist) => void
    add: (obj: EditorAssist, provider: Provider) => void
    invoke: (obj: EditorAssist, provider: Provider) => void
    proposals: (obj: EditorAssist, provider: Provider, proposals: EditorAssistProposal[], preWord: string, finished: boolean) => void
    remove: (obj: EditorAssist, provider: Provider) => void
    static name: string
}
class EditorAssistProposal {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorAssistProposal */
    label: string
    markup: string
    info: string
    text: string
    icon: GdkPixbuf.Pixbuf
    data: object
    static name: string
}
abstract class EditorCellIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorCellIface */
    gIface: GObject.TypeInterface
    getAttribute: (obj: EditorCell) => EditorAttribute
    getChar: (obj: EditorCell, charIndex: number) => number
    getCharacter: (obj: EditorCell) => string
    getLength: (obj: EditorCell) => number
    static name: string
}
abstract class EditorCellStyleIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorCellStyleIface */
    gIface: EditorCellIface
    getBackgroundColor: (obj: EditorCellStyle) => string
    getColor: (obj: EditorCellStyle) => string
    getFontDescription: (obj: EditorCellStyle) => string
    static name: string
}
abstract class EditorCommentIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorCommentIface */
    gIface: EditorIface
    block: (obj: EditorComment) => void
    box: (obj: EditorComment) => void
    stream: (obj: EditorComment) => void
    static name: string
}
abstract class EditorConvertIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorConvertIface */
    gIface: EditorIface
    toLower: (obj: EditorConvert, startPosition: Iterable, endPosition: Iterable) => void
    toUpper: (obj: EditorConvert, startPosition: Iterable, endPosition: Iterable) => void
    static name: string
}
abstract class EditorFactoryIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorFactoryIface */
    gIface: GObject.TypeInterface
    static name: string
}
abstract class EditorFoldsIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorFoldsIface */
    gIface: EditorIface
    closeAll: (obj: EditorFolds) => void
    openAll: (obj: EditorFolds) => void
    toggleCurrent: (obj: EditorFolds) => void
    static name: string
}
abstract class EditorGladeSignalIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorGladeSignalIface */
    gIface: EditorIface
    drop: (obj: EditorGladeSignal, iterator: Iterable, signalData: string) => void
    dropPossible: (obj: EditorGladeSignal, iterator: Iterable) => boolean
    static name: string
}
abstract class EditorGotoIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorGotoIface */
    gIface: EditorIface
    endBlock: (obj: EditorGoto) => void
    matchingBrace: (obj: EditorGoto) => void
    startBlock: (obj: EditorGoto) => void
    static name: string
}
abstract class EditorHoverIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorHoverIface */
    gIface: EditorIface
    hoverLeave: (obj: EditorHover, position: Iterable) => void
    hoverOver: (obj: EditorHover, position: Iterable) => void
    display: (obj: EditorHover, position: Iterable, info: string) => void
    static name: string
}
abstract class EditorIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorIface */
    gIface: GObject.TypeInterface
    backspace: (obj: Editor) => void
    changed: (obj: Editor, position: Iterable, added: boolean, length: number, lines: number, text: string) => void
    charAdded: (obj: Editor, position: Iterable, ch: number) => void
    codeChanged: (obj: Editor, position: Iterable, code: string) => void
    cursorMoved: (obj: Editor) => void
    gladeCallbackAdd: (obj: Editor, widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string) => void
    gladeMemberAdd: (obj: Editor, widgetTypename: string, widgetName: string, filename: string) => void
    lineMarksGutterClicked: (obj: Editor, location: number) => void
    append: (obj: Editor, text: string, length: number) => void
    erase: (obj: Editor, positionStart: Iterable, positionEnd: Iterable) => void
    eraseAll: (obj: Editor) => void
    getColumn: (obj: Editor) => number
    getCurrentWord: (obj: Editor) => string
    getEndPosition: (obj: Editor) => Iterable
    getIndentsize: (obj: Editor) => number
    getLength: (obj: Editor) => number
    getLineBeginPosition: (obj: Editor, line: number) => Iterable
    getLineEndPosition: (obj: Editor, line: number) => Iterable
    getLineFromPosition: (obj: Editor, position: Iterable) => number
    getLineno: (obj: Editor) => number
    getOffset: (obj: Editor) => number
    getOverwrite: (obj: Editor) => boolean
    getPosition: (obj: Editor) => Iterable
    getStartPosition: (obj: Editor) => Iterable
    getTabsize: (obj: Editor) => number
    getText: (obj: Editor, begin: Iterable, end: Iterable) => string
    getTextAll: (obj: Editor) => string
    getUseSpaces: (obj: Editor) => boolean
    gotoEnd: (obj: Editor) => void
    gotoLine: (obj: Editor, lineno: number) => void
    gotoPosition: (obj: Editor, position: Iterable) => void
    gotoStart: (obj: Editor) => void
    insert: (obj: Editor, position: Iterable, text: string, length: number) => void
    setAutoIndent: (obj: Editor, autoIndent: boolean) => void
    setIndentsize: (obj: Editor, indentsize: number) => void
    setPopupMenu: (obj: Editor, menu: Gtk.Widget) => void
    setTabsize: (obj: Editor, tabsize: number) => void
    setUseSpaces: (obj: Editor, useSpaces: boolean) => void
    static name: string
}
abstract class EditorLanguageIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorLanguageIface */
    gIface: EditorIface
    languageChanged: (obj: EditorLanguage, language: string) => void
    getLanguage: (obj: EditorLanguage) => string
    getLanguageName: (obj: EditorLanguage, language: string) => string
    getSupportedLanguages: (obj: EditorLanguage) => string[]
    setLanguage: (obj: EditorLanguage, language: string) => void
    static name: string
}
abstract class EditorLineModeIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorLineModeIface */
    gIface: EditorIface
    convert: (obj: EditorLineMode, mode: EditorLineModeType) => void
    fix: (obj: EditorLineMode) => void
    get: (obj: EditorLineMode) => EditorLineModeType
    set: (obj: EditorLineMode, mode: EditorLineModeType) => void
    static name: string
}
abstract class EditorSearchIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorSearchIface */
    gIface: EditorIface
    backward: (obj: EditorSearch, search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell) => [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
    forward: (obj: EditorSearch, search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell) => [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
    static name: string
}
abstract class EditorSelectionIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorSelectionIface */
    gIface: EditorIface
    get: (obj: EditorSelection) => string
    hasSelection: (obj: EditorSelection) => boolean
    replace: (obj: EditorSelection, text: string, length: number) => void
    selectAll: (obj: EditorSelection) => void
    selectBlock: (obj: EditorSelection) => void
    selectFunction: (obj: EditorSelection) => void
    set: (obj: EditorSelection, start: Iterable, end: Iterable, scroll: boolean) => void
    static name: string
}
abstract class EditorTipIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorTipIface */
    gIface: EditorIface
    cancel: (obj: EditorTip) => void
    show: (obj: EditorTip, tips: string[], position: Iterable) => void
    visible: (obj: EditorTip) => boolean
    static name: string
}
abstract class EditorViewIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorViewIface */
    gIface: EditorIface
    create: (obj: EditorView) => void
    getCount: (obj: EditorView) => number
    removeCurrent: (obj: EditorView) => void
    static name: string
}
abstract class EditorZoomIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorZoomIface */
    gIface: EditorIface
    in_: (obj: EditorZoom) => void
    out: (obj: EditorZoom) => void
    static name: string
}
abstract class EnvironmentIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EnvironmentIface */
    gIface: GObject.TypeInterface
    getRealDirectory: (obj: Environment, dir: string) => string
    override: (obj: Environment, dirp: string, argvp: string, envp: string) => boolean
    static name: string
}
abstract class FileIface {
    /* Fields of IAnjuta-3.0.IAnjuta.FileIface */
    gIface: GObject.TypeInterface
    opened: (obj: File) => void
    getFile: (obj: File) => Gio.File
    open: (obj: File, file: Gio.File) => void
    static name: string
}
abstract class FileLoaderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.FileLoaderIface */
    gIface: LoaderIface
    peekInterface: (obj: FileLoader, file: Gio.File) => string
    static name: string
}
abstract class FileManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.FileManagerIface */
    gIface: GObject.TypeInterface
    sectionChanged: (obj: FileManager, file: Gio.File) => void
    setRoot: (obj: FileManager, rootUri: string) => void
    setSelected: (obj: FileManager, file: Gio.File) => void
    static name: string
}
abstract class FileSavableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.FileSavableIface */
    gIface: FileIface
    saved: (obj: FileSavable, file: Gio.File) => void
    updateSaveUi: (obj: FileSavable) => void
    isConflict: (obj: FileSavable) => boolean
    isDirty: (obj: FileSavable) => boolean
    isReadOnly: (obj: FileSavable) => boolean
    save: (obj: FileSavable) => void
    saveAs: (obj: FileSavable, file: Gio.File) => void
    setDirty: (obj: FileSavable, dirty: boolean) => void
    static name: string
}
abstract class GladeIface {
    /* Fields of IAnjuta-3.0.IAnjuta.GladeIface */
    gIface: GObject.TypeInterface
    addAssociation: (obj: Glade, master: string, slave: string) => void
    static name: string
}
abstract class HelpIface {
    /* Fields of IAnjuta-3.0.IAnjuta.HelpIface */
    gIface: GObject.TypeInterface
    search: (obj: Help, query: string) => void
    static name: string
}
abstract class IndenterIface {
    /* Fields of IAnjuta-3.0.IAnjuta.IndenterIface */
    gIface: GObject.TypeInterface
    indent: (obj: Indenter, start: Iterable, end: Iterable) => void
    static name: string
}
abstract class IndicableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.IndicableIface */
    gIface: GObject.TypeInterface
    clear: (obj: Indicable) => void
    set: (obj: Indicable, beginLocation: Iterable, endLocation: Iterable, indicator: IndicableIndicator) => void
    static name: string
}
abstract class IterableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.IterableIface */
    gIface: GObject.TypeInterface
    assign: (obj: Iterable, srcIter: Iterable) => void
    clone: (obj: Iterable) => Iterable
    compare: (obj: Iterable, iter2: Iterable) => number
    diff: (obj: Iterable, iter2: Iterable) => number
    first: (obj: Iterable) => boolean
    getLength: (obj: Iterable) => number
    getPosition: (obj: Iterable) => number
    last: (obj: Iterable) => boolean
    next: (obj: Iterable) => boolean
    previous: (obj: Iterable) => boolean
    setPosition: (obj: Iterable, position: number) => boolean
    static name: string
}
abstract class IterableTreeIface {
    /* Fields of IAnjuta-3.0.IAnjuta.IterableTreeIface */
    gIface: IterableIface
    children: (obj: IterableTree) => boolean
    hasChildren: (obj: IterableTree) => boolean
    parent: (obj: IterableTree) => boolean
    static name: string
}
abstract class LanguageIface {
    /* Fields of IAnjuta-3.0.IAnjuta.LanguageIface */
    gIface: GObject.TypeInterface
    getFromEditor: (obj: Language, editor: EditorLanguage) => LanguageId
    getFromMimeType: (obj: Language, mimeType: string) => LanguageId
    getFromString: (obj: Language, string: string) => LanguageId
    getLanguages: (obj: Language) => number[]
    getMakeTarget: (obj: Language, id: LanguageId) => string
    getName: (obj: Language, id: LanguageId) => string
    getNameFromEditor: (obj: Language, editor: EditorLanguage) => string
    static name: string
}
abstract class LanguageProviderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.LanguageProviderIface */
    gIface: ProviderIface
    getCalltipCache: (obj: LanguageProvider, callContext: string) => string[]
    getCalltipContext: (obj: LanguageProvider, iter: Iterable) => string
    newCalltip: (obj: LanguageProvider, callContext: string, iter: Iterable) => void
    populateCompletions: (obj: LanguageProvider, iter: Iterable) => Iterable | null
    static name: string
}
abstract class LoaderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.LoaderIface */
    gIface: GObject.TypeInterface
    static name: string
}
abstract class MarkableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.MarkableIface */
    gIface: GObject.TypeInterface
    markerClicked: (obj: Markable, doubleClick: boolean, location: number) => void
    deleteAllMarkers: (obj: Markable, marker: MarkableMarker) => void
    isMarkerSet: (obj: Markable, location: number, marker: MarkableMarker) => boolean
    locationFromHandle: (obj: Markable, handle: number) => number
    mark: (obj: Markable, location: number, marker: MarkableMarker, tooltip?: string | null) => number
    unmark: (obj: Markable, location: number, marker: MarkableMarker) => void
    static name: string
}
abstract class MessageManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.MessageManagerIface */
    gIface: GObject.TypeInterface
    removeView: (obj: MessageManager, view: MessageView) => void
    setCurrentView: (obj: MessageManager, view: MessageView) => void
    setViewIcon: (obj: MessageManager, view: MessageView, icon: GdkPixbuf.PixbufAnimation) => void
    setViewIconFromStock: (obj: MessageManager, view: MessageView, icon: string) => void
    setViewTitle: (obj: MessageManager, view: MessageView, title: string) => void
    static name: string
}
abstract class MessageViewIface {
    /* Fields of IAnjuta-3.0.IAnjuta.MessageViewIface */
    gIface: GObject.TypeInterface
    bufferFlushed: (obj: MessageView, line: string) => void
    messageClicked: (obj: MessageView, message: string) => void
    append: (obj: MessageView, type: MessageViewType, summary: string, details: string) => void
    bufferAppend: (obj: MessageView, text: string) => void
    clear: (obj: MessageView) => void
    getCurrentMessage: (obj: MessageView) => string
    selectNext: (obj: MessageView) => void
    selectPrevious: (obj: MessageView) => void
    static name: string
}
abstract class PluginFactoryIface {
    /* Fields of IAnjuta-3.0.IAnjuta.PluginFactoryIface */
    gIface: GObject.TypeInterface
    static name: string
}
abstract class PreferencesIface {
    /* Fields of IAnjuta-3.0.IAnjuta.PreferencesIface */
    gIface: GObject.TypeInterface
    merge: (obj: Preferences, prefs: Anjuta.Preferences) => void
    unmerge: (obj: Preferences, prefs: Anjuta.Preferences) => void
    static name: string
}
abstract class PrintIface {
    /* Fields of IAnjuta-3.0.IAnjuta.PrintIface */
    gIface: GObject.TypeInterface
    print: (obj: Print) => void
    printPreview: (obj: Print) => void
    static name: string
}
abstract class ProjectBackendIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProjectBackendIface */
    gIface: GObject.TypeInterface
    newProject: (obj: ProjectBackend, file: Gio.File) => Project
    probe: (obj: ProjectBackend, directory: Gio.File) => number
    static name: string
}
abstract class ProjectChooserIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProjectChooserIface */
    gIface: GObject.TypeInterface
    changed: (obj: ProjectChooser) => void
    getSelected: (obj: ProjectChooser) => Gio.File
    setProjectModel: (obj: ProjectChooser, manager: ProjectManager, childType: Anjuta.ProjectNodeType) => boolean
    static name: string
}
abstract class ProjectIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProjectIface */
    gIface: GObject.TypeInterface
    fileChanged: (obj: Project, node?: object | null) => void
    nodeChanged: (obj: Project, node: object | null, error: GLib.Error) => void
    nodeLoaded: (obj: Project, node: object | null, error: GLib.Error) => void
    nodeSaved: (obj: Project, node: object | null, error: GLib.Error) => void
    addNodeAfter: (obj: Project, parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null) => Anjuta.ProjectNode
    addNodeBefore: (obj: Project, parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null) => Anjuta.ProjectNode
    getNodeInfo: (obj: Project) => Anjuta.ProjectNodeInfo[]
    getRoot: (obj: Project) => Anjuta.ProjectNode
    isLoaded: (obj: Project) => boolean
    loadNode: (obj: Project, node: Anjuta.ProjectNode) => boolean
    removeNode: (obj: Project, node: Anjuta.ProjectNode) => boolean
    removeProperty: (obj: Project, node: Anjuta.ProjectNode, id: string, name?: string | null) => boolean
    saveNode: (obj: Project, node: Anjuta.ProjectNode) => boolean
    setProperty: (obj: Project, node: Anjuta.ProjectNode, id: string, name: string | null, value: string) => Anjuta.ProjectProperty | null
    static name: string
}
abstract class ProjectManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProjectManagerIface */
    gIface: GObject.TypeInterface
    elementAdded: (obj: ProjectManager, element: Gio.File) => void
    elementRemoved: (obj: ProjectManager, element: Gio.File) => void
    elementSelected: (obj: ProjectManager, element: Gio.File) => void
    projectLoaded: (obj: ProjectManager, error: GLib.Error) => void
    addGroup: (obj: ProjectManager, name: string, defaultGroup?: Gio.File | null) => Gio.File
    addSource: (obj: ProjectManager, name: string, defaultTarget?: Gio.File | null) => Gio.File
    addSourceQuiet: (obj: ProjectManager, name: string, target: Gio.File) => Gio.File
    addSources: (obj: ProjectManager, names: string[], defaultTarget?: Gio.File | null) => Gio.File[]
    addTarget: (obj: ProjectManager, name: string, defaultGroup?: Gio.File | null) => Gio.File
    getCapabilities: (obj: ProjectManager) => number
    getChildren: (obj: ProjectManager, parent: Gio.File, childrenType: number) => Gio.File[]
    getCurrentProject: (obj: ProjectManager) => Project
    getElements: (obj: ProjectManager, elementType: Anjuta.ProjectNodeType) => Gio.File[]
    getPackages: (obj: ProjectManager) => string[]
    getSelected: (obj: ProjectManager) => Gio.File
    getTargetType: (obj: ProjectManager, target: Gio.File) => Anjuta.ProjectNodeType
    getTargets: (obj: ProjectManager, targetType: Anjuta.ProjectNodeType) => Gio.File[]
    isOpen: (obj: ProjectManager) => boolean
    removeFile: (obj: ProjectManager, file: Gio.File) => boolean
    static name: string
}
abstract class ProviderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProviderIface */
    gIface: GObject.TypeInterface
    activate: (obj: Provider, iter: Iterable, data?: object | null) => void
    getName: (obj: Provider) => string
    getStartIter: (obj: Provider) => Iterable
    populate: (obj: Provider, iter: Iterable) => void
    static name: string
}
abstract class SnippetsManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.SnippetsManagerIface */
    gIface: GObject.TypeInterface
    insert: (obj: SnippetsManager, key: string, editingSession: boolean) => boolean
    static name: string
}
abstract class StreamIface {
    /* Fields of IAnjuta-3.0.IAnjuta.StreamIface */
    gIface: GObject.TypeInterface
    open: (obj: Stream, stream?: object | null) => void
    static name: string
}
abstract class StreamLoaderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.StreamLoaderIface */
    gIface: LoaderIface
    peekInterface: (obj: StreamLoader, stream?: object | null) => string
    static name: string
}
abstract class StreamSavableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.StreamSavableIface */
    gIface: StreamIface
    save: (obj: StreamSavable, stream?: object | null) => void
    static name: string
}
abstract class SymbolIface {
    /* Fields of IAnjuta-3.0.IAnjuta.SymbolIface */
    gIface: GObject.TypeInterface
    getBoolean: (obj: Symbol, field: SymbolField) => boolean
    getIcon: (obj: Symbol) => GdkPixbuf.Pixbuf
    getInt: (obj: Symbol, field: SymbolField) => number
    getString: (obj: Symbol, field: SymbolField) => string
    getSymType: (obj: Symbol) => SymbolType
    static name: string
}
abstract class SymbolManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.SymbolManagerIface */
    gIface: GObject.TypeInterface
    prjScanEnd: (obj: SymbolManager, processId: number) => void
    sysScanEnd: (obj: SymbolManager, processId: number) => void
    activatePackage: (obj: SymbolManager, pkgName: string, pkgVersion: string) => boolean
    deactivateAll: (obj: SymbolManager) => void
    deactivatePackage: (obj: SymbolManager, pkgName: string, pkgVersion: string) => void
    static name: string
}
abstract class SymbolQueryIface {
    /* Fields of IAnjuta-3.0.IAnjuta.SymbolQueryIface */
    gIface: GObject.TypeInterface
    asyncResult: (obj: SymbolQuery, result: GObject.Object) => void
    cancel: (obj: SymbolQuery) => void
    setFields: (obj: SymbolQuery, nFields: number, fields: SymbolField) => void
    setFileScope: (obj: SymbolQuery, filescopeSearch: SymbolQueryFileScope) => void
    setFilters: (obj: SymbolQuery, filters: SymbolType, includeTypes: boolean) => void
    setGroupBy: (obj: SymbolQuery, field: SymbolField) => void
    setLimit: (obj: SymbolQuery, limit: number) => void
    setMode: (obj: SymbolQuery, mode: SymbolQueryMode) => void
    setOffset: (obj: SymbolQuery, offset: number) => void
    setOrderBy: (obj: SymbolQuery, field: SymbolField) => void
    static name: string
}
abstract class TerminalIface {
    /* Fields of IAnjuta-3.0.IAnjuta.TerminalIface */
    gIface: GObject.TypeInterface
    childExited: (obj: Terminal, pid: number, status: number) => void
    executeCommand: (obj: Terminal, directory: string, command: string, environment: string[]) => number
    static name: string
}
abstract class TodoIface {
    /* Fields of IAnjuta-3.0.IAnjuta.TodoIface */
    gIface: GObject.TypeInterface
    load: (obj: Todo, file: Gio.File) => void
    static name: string
}
abstract class VcsIface {
    /* Fields of IAnjuta-3.0.IAnjuta.VcsIface */
    gIface: GObject.TypeInterface
    statusChanged: (obj: Vcs) => void
    add: (obj: Vcs, files: Gio.File[], notify: Anjuta.AsyncNotify) => void
    checkout: (obj: Vcs, repositoryLocation: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify) => void
    remove: (obj: Vcs, files: Gio.File[], notify: Anjuta.AsyncNotify) => void
    static name: string
}
abstract class WizardIface {
    /* Fields of IAnjuta-3.0.IAnjuta.WizardIface */
    gIface: GObject.TypeInterface
    activate: (obj: Wizard) => void
    static name: string
}
    type BuilderHandle = object
    type LanguageId = number
}
export default IAnjuta;