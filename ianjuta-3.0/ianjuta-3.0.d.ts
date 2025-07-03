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
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type Anjuta from '@girs/anjuta-3.0';
import type Gdl from '@girs/gdl-3';

export namespace IAnjuta {
    /**
     * IAnjuta-3.0
     */

    /**
     * The enumeration is used to speficy the disered build operation
     */

    /**
     * The enumeration is used to speficy the disered build operation
     */
    export namespace BuildableCommand {
        export const $gtype: GObject.GType<BuildableCommand>;
    }

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
    class BuilderError extends GLib.Error {
        static $gtype: GObject.GType<BuilderError>;

        // Static fields

        /**
         * Build succeeded
         */
        static SUCCEED: number;
        /**
         * Build failed
         */
        static FAILED: number;
        /**
         * Build was canceld
         */
        static CANCELED: number;
        /**
         * Build aborted
         */
        static ABORTED: number;
        /**
         * Build interruped
         */
        static INTERRUPTED: number;
        /**
         * Build interruped
         */
        static TERMINATED: number;
        /**
         * The specified target is unknown
         */
        static UNKNOWN_TARGET: number;
        /**
         * Unknown Error
         */
        static UNKNOWN_ERROR: number;
        /**
         * Other Error (no unknown ;-))
         */
        static OTHER_ERROR: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * Defines which breakpoint characteristics are supported by the debugger
     * backend.
     */

    /**
     * Defines which breakpoint characteristics are supported by the debugger
     * backend.
     */
    export namespace DebuggerBreakpointMethod {
        export const $gtype: GObject.GType<DebuggerBreakpointMethod>;
    }

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

    /**
     * This enumeration defined various characteristics of the breakpoint.
     */
    export namespace DebuggerBreakpointType {
        export const $gtype: GObject.GType<DebuggerBreakpointType>;
    }

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
    class DebuggerError extends GLib.Error {
        static $gtype: GObject.GType<DebuggerError>;

        // Static fields

        /**
         * No error
         */
        static OK: number;
        /**
         * Debugger is not ready to execute the command
         */
        static NOT_READY: number;
        /**
         * Debugger is not is running state
         */
        static NOT_RUNNING: number;
        /**
         * Debugger is not is stopped state
         */
        static NOT_STOPPED: number;
        /**
         * Debugger is not is loaded state
         */
        static NOT_LOADED: number;
        /**
         * Debugger is not in started state
         */
        static NOT_STARTED: number;
        /**
         * Debugger is not connected:
         */
        static NOT_CONNECTED: number;
        /**
         * Corresponding function is not implemented
         */
        static NOT_IMPLEMENTED: number;
        /**
         * Operation has been cancelled
         */
        static CANCEL: number;
        /**
         * Debugger cannot create variable
         */
        static UNABLE_TO_CREATE_VARIABLE: number;
        /**
         * Debugger cannot access memory
         */
        static UNABLE_TO_ACCESS_MEMORY: number;
        /**
         * Debugger cannot open file
         */
        static UNABLE_TO_OPEN_FILE: number;
        /**
         * Debugger cannot debug such file
         */
        static UNSUPPORTED_FILE_TYPE: number;
        /**
         * Debugger is too old
         */
        static UNSUPPORTED_VERSION: number;
        /**
         * Debugger cannot be found
         */
        static UNABLE_TO_FIND_DEBUGGER: number;
        /**
         * Command has already been executed
         */
        static ALREADY_DONE: number;
        /**
         * Program cannot be found
         */
        static PROGRAM_NOT_FOUND: number;
        /**
         * Unable to connect to debugger
         */
        static UNABLE_TO_CONNECT: number;
        /**
         * Unknown error
         */
        static UNKNOWN_ERROR: number;
        /**
         * other error
         */
        static OTHER_ERROR: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * This enumeration is used to defined the kind of output in
     * #IAnjutaDebuggerOutputCallback
     */

    /**
     * This enumeration is used to defined the kind of output in
     * #IAnjutaDebuggerOutputCallback
     */
    export namespace DebuggerOutputType {
        export const $gtype: GObject.GType<DebuggerOutputType>;
    }

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

    /**
     * This enumeration is used to defined the different state of the debugger.
     */
    export namespace DebuggerState {
        export const $gtype: GObject.GType<DebuggerState>;
    }

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
    class DocumentManagerError extends GLib.Error {
        static $gtype: GObject.GType<DocumentManagerError>;

        // Static fields

        static DOESNT_EXIST: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * This enumeration is used to specify the type of text. Note that not all
     * editors implement this.
     */

    /**
     * This enumeration is used to specify the type of text. Note that not all
     * editors implement this.
     */
    export namespace EditorAttribute {
        export const $gtype: GObject.GType<EditorAttribute>;
    }

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
    class EditorError extends GLib.Error {
        static $gtype: GObject.GType<EditorError>;

        // Static fields

        static DOESNT_EXIST: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * This enumeration is used to specify the type of text. Note that not all
     * editors implement this.
     */

    /**
     * This enumeration is used to specify the type of text. Note that not all
     * editors implement this.
     */
    export namespace EditorLineModeType {
        export const $gtype: GObject.GType<EditorLineModeType>;
    }

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
    class EnvironmentError extends GLib.Error {
        static $gtype: GObject.GType<EnvironmentError>;

        // Static fields

        static CONFIG: number;
        static OTHER_ERROR: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * This enumeration is used to specify the appearance of the indicator
     */

    /**
     * This enumeration is used to specify the appearance of the indicator
     */
    export namespace IndicableIndicator {
        export const $gtype: GObject.GType<IndicableIndicator>;
    }

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
    class MarkableError extends GLib.Error {
        static $gtype: GObject.GType<MarkableError>;

        // Static fields

        static INVALID_LOCATION: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * This enumeration is used to specify the pixmap used for the marker
     */

    /**
     * This enumeration is used to specify the pixmap used for the marker
     */
    export namespace MarkableMarker {
        export const $gtype: GObject.GType<MarkableMarker>;
    }

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
    class MessageManagerError extends GLib.Error {
        static $gtype: GObject.GType<MessageManagerError>;

        // Static fields

        static DOESNT_EXIST: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * Speficy the type ot the message added to the message view
     */

    /**
     * Speficy the type ot the message added to the message view
     */
    export namespace MessageViewType {
        export const $gtype: GObject.GType<MessageViewType>;
    }

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
    class PluginFactoryError extends GLib.Error {
        static $gtype: GObject.GType<PluginFactoryError>;

        // Static fields

        static OK: number;
        /**
         * Module file location is
         * missing in .plugin file
         */
        static MISSING_LOCATION: number;
        /**
         * Plugin type (just after
         * double colon following location) is missing in .plugin file
         */
        static MISSING_TYPE: number;
        /**
         * Module file name not found,
         * plugin module is probably not installed
         */
        static MISSING_MODULE: number;
        /**
         * Module file cannot be
         * loaded, not a shared library perhaps
         */
        static INVALID_MODULE: number;
        /**
         * Module does not contain
         * registration function, library is not an anjuta plugin or
         * is not for the right version
         */
        static MISSING_FUNCTION: number;
        /**
         * Module has not registered
         * 	plugin type, library is not an anjuta plugin or not for
         * the right version
         */
        static INVALID_TYPE: number;
        /**
         * Another error
         */
        static UNKNOWN_ERROR: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    class ProjectError extends GLib.Error {
        static $gtype: GObject.GType<ProjectError>;

        // Static fields

        static ERROR_SUCCESS: number;
        static ERROR_DOESNT_EXIST: number;
        static ERROR_ALREADY_EXISTS: number;
        static ERROR_VALIDATION_FAILED: number;
        static ERROR_PROJECT_MALFORMED: number;
        static ERROR_WRONG_PARENT: number;
        static ERROR_NOT_SUPPORTED: number;
        static ERROR_GENERAL_FAILURE: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    export namespace ProjectProbe {
        export const $gtype: GObject.GType<ProjectProbe>;
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

    /**
     * Symbol Fields. Used to define and retrieve results from query. Each of
     * these fields are either integer or string. Use the right method to
     * retrieve them. That is, for integer use ianjuta_symbol_get_int(),
     * for string use ianjuta_symbol_get_string(), and for boolean use
     * ianjuta_symbol_get_boolean(). Some fields can be in both forms,
     * e.g. #IANJUTA_SYMBOL_FIELD_TYPE.
     */
    export namespace SymbolField {
        export const $gtype: GObject.GType<SymbolField>;
    }

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

    /**
     * Sets the database to use for the query. System database is where
     * all system library symbols are found. While project database is where
     * currently open project's symbols are found.
     */
    export namespace SymbolQueryDb {
        export const $gtype: GObject.GType<SymbolQueryDb>;
    }

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

    /**
     * Defines file scope of symbols to query.
     */
    export namespace SymbolQueryFileScope {
        export const $gtype: GObject.GType<SymbolQueryFileScope>;
    }

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

    /**
     * This parameter determines the mode of query execution. By default,
     * IANJUTA_SYMBOL_QUERY_MODE_SYNC is selected.
     */
    export namespace SymbolQueryMode {
        export const $gtype: GObject.GType<SymbolQueryMode>;
    }

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

    /**
     * Names of query that defined what kind of query it is.
     */
    export namespace SymbolQueryName {
        export const $gtype: GObject.GType<SymbolQueryName>;
    }

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

    export namespace SymbolType {
        export const $gtype: GObject.GType<SymbolType>;
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
    class VcsError extends GLib.Error {
        static $gtype: GObject.GType<VcsError>;

        // Static fields

        static UNKOWN_ERROR: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * Name of debugging configutation.
     */
    const BUILDER_CONFIGURATION_DEBUG: string;
    /**
     * Name of optimized configutation.
     */
    const BUILDER_CONFIGURATION_OPTIMIZED: string;
    /**
     * Name of profiling configutation.
     */
    const BUILDER_CONFIGURATION_PROFILING: string;
    /**
     * Build directory uri. It is the same than the project_root_uri for
     * in source build.
     */
    const BUILDER_ROOT_URI: string;
    /**
     * Anjuta shell value set by document manager to the current document
     */
    const DOCUMENT_MANAGER_CURRENT_DOCUMENT: string;
    /**
     * Integer key, defines the number a space for one indentation step.
     */
    const EDITOR_INDENT_WIDTH_KEY: string;
    /**
     * Schema id used to store common editor settings.
     */
    const EDITOR_PREF_SCHEMA: string;
    /**
     * Integer key, defines the size of a tabulation in spaces.
     */
    const EDITOR_TAB_WIDTH_KEY: string;
    /**
     * Boolean key, true is tabs has to be used for indenting.
     */
    const EDITOR_USE_TABS_KEY: string;
    /**
     * Anjuta shell value set by file manager to the selected file.
     */
    const FILE_MANAGER_SELECTED_FILE: string;
    /**
     * Boolean key, true is adding '(' after function call autocompletion
     */
    const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_BRACE_AFTER_FUNC: string;
    /**
     * Boolean key, true is adding ')' after function call autocompletion
     */
    const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_CLOSEBRACE_AFTER_FUNC: string;
    /**
     * Boolean key, true is code completion is enable.
     */
    const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_ENABLE: string;
    /**
     * Boolean key, true is adding a space after function call autocompletion
     */
    const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_SPACE_AFTER_FUNC: string;
    /**
     * Boolean key, true is calltips has to be shown.
     */
    const LANGUAGE_PROVIDER_PREF_CALLTIP_ENABLE: string;
    /**
     * Anjuta shell value set by project manager to the current project object
     * which implement #IAnjutaProject interface.
     */
    const PROJECT_MANAGER_CURRENT_PROJECT: string;
    /**
     * Anjuta shell value set by project manager to the current uri.
     */
    const PROJECT_MANAGER_CURRENT_URI: string;
    /**
     * Anjuta shell value set by project manager to the project root uri.
     */
    const PROJECT_MANAGER_PROJECT_ROOT_URI: string;
    function buildable_error_quark(): GLib.Quark;
    function builder_error_quark(): GLib.Quark;
    function debug_manager_error_quark(): GLib.Quark;
    function debugger_breakpoint_error_quark(): GLib.Quark;
    function debugger_error_quark(): GLib.Quark;
    function debugger_instruction_error_quark(): GLib.Quark;
    function debugger_memory_error_quark(): GLib.Quark;
    function debugger_register_error_quark(): GLib.Quark;
    function debugger_variable_error_quark(): GLib.Quark;
    function document_error_quark(): GLib.Quark;
    function document_manager_error_quark(): GLib.Quark;
    function editor_assist_error_quark(): GLib.Quark;
    function editor_cell_error_quark(): GLib.Quark;
    function editor_cell_style_error_quark(): GLib.Quark;
    function editor_comment_error_quark(): GLib.Quark;
    function editor_convert_error_quark(): GLib.Quark;
    function editor_error_quark(): GLib.Quark;
    function editor_factory_error_quark(): GLib.Quark;
    function editor_folds_error_quark(): GLib.Quark;
    function editor_glade_signal_error_quark(): GLib.Quark;
    function editor_goto_error_quark(): GLib.Quark;
    function editor_hover_error_quark(): GLib.Quark;
    function editor_language_error_quark(): GLib.Quark;
    function editor_line_mode_error_quark(): GLib.Quark;
    function editor_search_error_quark(): GLib.Quark;
    function editor_selection_error_quark(): GLib.Quark;
    function editor_tip_error_quark(): GLib.Quark;
    function editor_view_error_quark(): GLib.Quark;
    function editor_zoom_error_quark(): GLib.Quark;
    function environment_error_quark(): GLib.Quark;
    function file_error_quark(): GLib.Quark;
    function file_loader_error_quark(): GLib.Quark;
    function file_manager_error_quark(): GLib.Quark;
    function file_savable_error_quark(): GLib.Quark;
    function glade_error_quark(): GLib.Quark;
    function help_error_quark(): GLib.Quark;
    function indenter_error_quark(): GLib.Quark;
    function indicable_error_quark(): GLib.Quark;
    function iterable_error_quark(): GLib.Quark;
    function iterable_tree_error_quark(): GLib.Quark;
    function language_error_quark(): GLib.Quark;
    function language_provider_error_quark(): GLib.Quark;
    function loader_error_quark(): GLib.Quark;
    function markable_error_quark(): GLib.Quark;
    function message_manager_error_quark(): GLib.Quark;
    function message_view_error_quark(): GLib.Quark;
    function plugin_factory_error_quark(): GLib.Quark;
    function preferences_error_quark(): GLib.Quark;
    function print_error_quark(): GLib.Quark;
    function project_backend_error_quark(): GLib.Quark;
    function project_chooser_error_quark(): GLib.Quark;
    function project_error_quark(): GLib.Quark;
    function project_manager_error_quark(): GLib.Quark;
    function provider_error_quark(): GLib.Quark;
    function snippets_manager_error_quark(): GLib.Quark;
    function stream_error_quark(): GLib.Quark;
    function stream_loader_error_quark(): GLib.Quark;
    function stream_savable_error_quark(): GLib.Quark;
    function symbol_error_quark(): GLib.Quark;
    function symbol_manager_error_quark(): GLib.Quark;
    function symbol_query_error_quark(): GLib.Quark;
    function terminal_error_quark(): GLib.Quark;
    function todo_error_quark(): GLib.Quark;
    function vcs_error_quark(): GLib.Quark;
    function wizard_error_quark(): GLib.Quark;
    interface BuilderCallback<A = GObject.Object> {
        (sender: A, command: BuilderHandle, err: GLib.Error): void;
    }
    interface DebuggerBreakpointCallback {
        (data: DebuggerBreakpointItem, err: GLib.Error): void;
    }
    interface DebuggerCallback {
        (data: any | null, err: GLib.Error): void;
    }
    interface DebuggerGCharCallback {
        (value: string, err: GLib.Error): void;
    }
    interface DebuggerInstructionCallback {
        (data: DebuggerInstructionDisassembly, err: GLib.Error): void;
    }
    interface DebuggerMemoryCallback {
        (data: DebuggerMemoryBlock, err: GLib.Error): void;
    }
    interface DebuggerOutputCallback {
        (type: DebuggerOutputType, output: string): void;
    }
    interface DebuggerVariableCallback {
        (data: DebuggerVariableObject, err: GLib.Error): void;
    }
    interface VcsDiffCallback {
        (file: Gio.File, diff: string): void;
    }
    interface VcsStatusCallback {
        (file: Gio.File, status: Anjuta.VcsStatus): void;
    }
    type BuildableIface = typeof Buildable;
    type BuilderIface = typeof Builder;
    type DebugManagerIface = typeof DebugManager;
    type DebuggerBreakpointIface = typeof DebuggerBreakpoint;
    /**
     * This structure keeps all information about a breakpoint.
     */
    class DebuggerBreakpointItem {
        static $gtype: GObject.GType<DebuggerBreakpointItem>;

        // Fields

        type: number;
        id: number;
        file: string;
        line: number;
        'function': string;
        address: number;
        enable: boolean;
        ignore: number;
        times: number;
        condition: string;
        temporary: boolean;
        pending: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                type: number;
                id: number;
                file: string;
                line: number;
                function: string;
                address: number;
                enable: boolean;
                ignore: number;
                times: number;
                condition: string;
                temporary: boolean;
                pending: boolean;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * This structure keeps all information about a stack frame.
     */
    class DebuggerFrame {
        static $gtype: GObject.GType<DebuggerFrame>;

        // Fields

        thread: number;
        level: number;
        args: string;
        file: string;
        line: number;
        'function': string;
        library: string;
        address: number;

        // Constructors

        constructor(
            properties?: Partial<{
                thread: number;
                level: number;
                args: string;
                file: string;
                line: number;
                function: string;
                library: string;
                address: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type DebuggerIface = typeof Debugger;
    /**
     * Defines a disassembled line
     */
    class DebuggerInstructionALine {
        static $gtype: GObject.GType<DebuggerInstructionALine>;

        // Fields

        address: number;
        label: string;
        text: string;

        // Constructors

        constructor(
            properties?: Partial<{
                address: number;
                label: string;
                text: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * Represents a block of diassembled instructions
     */
    class DebuggerInstructionDisassembly {
        static $gtype: GObject.GType<DebuggerInstructionDisassembly>;

        // Fields

        size: number;
        data: DebuggerInstructionALine[];

        // Constructors

        constructor(
            properties?: Partial<{
                size: number;
                data: DebuggerInstructionALine[];
            }>,
        );
        _init(...args: any[]): void;
    }

    type DebuggerInstructionIface = typeof DebuggerInstruction;
    class DebuggerMemoryBlock {
        static $gtype: GObject.GType<DebuggerMemoryBlock>;

        // Fields

        address: number;
        length: number;
        data: string;

        // Constructors

        constructor(
            properties?: Partial<{
                address: number;
                length: number;
                data: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    type DebuggerMemoryIface = typeof DebuggerMemory;
    /**
     * Defines a register data.
     */
    class DebuggerRegisterData {
        static $gtype: GObject.GType<DebuggerRegisterData>;

        // Fields

        num: number;
        name: string;
        value: string;

        // Constructors

        constructor(
            properties?: Partial<{
                num: number;
                name: string;
                value: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    type DebuggerRegisterIface = typeof DebuggerRegister;
    type DebuggerVariableIface = typeof DebuggerVariable;
    /**
     * Defines a variable object.
     */
    class DebuggerVariableObject {
        static $gtype: GObject.GType<DebuggerVariableObject>;

        // Fields

        name: string;
        expression: string;
        type: string;
        value: string;
        changed: boolean;
        exited: boolean;
        deleted: boolean;
        children: number;
        has_more: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                name: string;
                expression: string;
                type: string;
                value: string;
                changed: boolean;
                exited: boolean;
                deleted: boolean;
                children: number;
                has_more: boolean;
            }>,
        );
        _init(...args: any[]): void;
    }

    type DocumentIface = typeof Document;
    type DocumentManagerIface = typeof DocumentManager;
    type EditorAssistIface = typeof EditorAssist;
    class EditorAssistProposal {
        static $gtype: GObject.GType<EditorAssistProposal>;

        // Fields

        label: string;
        markup: string;
        info: string;
        text: string;
        icon: GdkPixbuf.Pixbuf;
        data: any;

        // Constructors

        _init(...args: any[]): void;
    }

    type EditorCellIface = typeof EditorCell;
    type EditorCellStyleIface = typeof EditorCellStyle;
    type EditorCommentIface = typeof EditorComment;
    type EditorConvertIface = typeof EditorConvert;
    type EditorFactoryIface = typeof EditorFactory;
    type EditorFoldsIface = typeof EditorFolds;
    type EditorGladeSignalIface = typeof EditorGladeSignal;
    type EditorGotoIface = typeof EditorGoto;
    type EditorHoverIface = typeof EditorHover;
    type EditorIface = typeof Editor;
    type EditorLanguageIface = typeof EditorLanguage;
    type EditorLineModeIface = typeof EditorLineMode;
    type EditorSearchIface = typeof EditorSearch;
    type EditorSelectionIface = typeof EditorSelection;
    type EditorTipIface = typeof EditorTip;
    type EditorViewIface = typeof EditorView;
    type EditorZoomIface = typeof EditorZoom;
    type EnvironmentIface = typeof Environment;
    type FileIface = typeof File;
    type FileLoaderIface = typeof FileLoader;
    type FileManagerIface = typeof FileManager;
    type FileSavableIface = typeof FileSavable;
    type GladeIface = typeof Glade;
    type HelpIface = typeof Help;
    type IndenterIface = typeof Indenter;
    type IndicableIface = typeof Indicable;
    type IterableIface = typeof Iterable;
    type IterableTreeIface = typeof IterableTree;
    type LanguageIface = typeof Language;
    type LanguageProviderIface = typeof LanguageProvider;
    type LoaderIface = typeof Loader;
    type MarkableIface = typeof Markable;
    type MessageManagerIface = typeof MessageManager;
    type MessageViewIface = typeof MessageView;
    type PluginFactoryIface = typeof PluginFactory;
    type PreferencesIface = typeof Preferences;
    type PrintIface = typeof Print;
    type ProjectBackendIface = typeof ProjectBackend;
    type ProjectChooserIface = typeof ProjectChooser;
    type ProjectIface = typeof Project;
    type ProjectManagerIface = typeof ProjectManager;
    type ProviderIface = typeof Provider;
    type SnippetsManagerIface = typeof SnippetsManager;
    type StreamIface = typeof Stream;
    type StreamLoaderIface = typeof StreamLoader;
    type StreamSavableIface = typeof StreamSavable;
    type SymbolIface = typeof Symbol;
    type SymbolManagerIface = typeof SymbolManager;
    type SymbolQueryIface = typeof SymbolQuery;
    type TerminalIface = typeof Terminal;
    type TodoIface = typeof Todo;
    type VcsIface = typeof Vcs;
    type WizardIface = typeof Wizard;
    namespace Buildable {
        /**
         * Interface for implementing Buildable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * fixme
             * @param uri fixme
             */
            vfunc_build(uri: string): void;
            /**
             * fixme
             * @param uri fixme
             */
            vfunc_clean(uri: string): void;
            /**
             * fixme
             * @param uri fixme
             */
            vfunc_configure(uri: string): void;
            /**
             * fixme
             * @param uri fixme
             */
            vfunc_execute(uri: string): void;
            /**
             * fixme
             * @param uri fixme
             */
            vfunc_generate(uri: string): void;
            /**
             * Retrieves the currently set command override.
             * @param command_id Command to get override.
             */
            vfunc_get_command(command_id: BuildableCommand): string;
            /**
             * fixme
             * @param uri fixme
             */
            vfunc_install(uri: string): void;
            /**
             * Resets the command overrides to defaults.
             */
            vfunc_reset_commands(): void;
            /**
             * Overrides the default command for the given command.
             * @param command_id Command to override.
             * @param command Build command to override.
             */
            vfunc_set_command(command_id: BuildableCommand, command: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface BuildableNamespace {
        $gtype: GObject.GType<Buildable>;
        prototype: Buildable;

        error_quark(): GLib.Quark;
    }
    interface Buildable extends GObject.Object, Buildable.Interface {
        // Methods

        /**
         * fixme
         * @param uri fixme
         */
        build(uri: string): void;
        /**
         * fixme
         * @param uri fixme
         */
        clean(uri: string): void;
        /**
         * fixme
         * @param uri fixme
         */
        configure(uri: string): void;
        /**
         * fixme
         * @param uri fixme
         */
        execute(uri: string): void;
        /**
         * fixme
         * @param uri fixme
         */
        generate(uri: string): void;
        /**
         * Retrieves the currently set command override.
         * @param command_id Command to get override.
         * @returns The overridden command. NULL if no override set.
         */
        get_command(command_id: BuildableCommand | null): string;
        /**
         * fixme
         * @param uri fixme
         */
        install(uri: string): void;
        /**
         * Resets the command overrides to defaults.
         */
        reset_commands(): void;
        /**
         * Overrides the default command for the given command.
         * @param command_id Command to override.
         * @param command Build command to override.
         */
        set_command(command_id: BuildableCommand | null, command: string): void;
    }

    export const Buildable: BuildableNamespace & {
        new (): Buildable; // This allows `obj instanceof Buildable`
    };

    namespace Builder {
        /**
         * Interface for implementing Builder.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Cancel specified command. The callback function will not
             * be called.
             * @param handle handle of the command to cancel
             */
            vfunc_cancel(handle: BuilderHandle): void;
            /**
             * Get the configuration corresponding to the target uri.
             * @param uri target uri
             */
            vfunc_get_uri_configuration(uri: string): string;
            /**
             * List all defined configuration. These names returned are
             * the internal non localized names for the following
             * predefined configuration: Debug, Profiling, Optimized.
             * The default configuration has no name and is not returned.
             */
            vfunc_list_configuration(): string[];
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface BuilderNamespace {
        $gtype: GObject.GType<Builder>;
        prototype: Builder;
    }
    interface Builder extends GObject.Object, Builder.Interface {
        // Methods

        /**
         * Cancel specified command. The callback function will not
         * be called.
         * @param handle handle of the command to cancel
         */
        cancel(handle: BuilderHandle): void;
        /**
         * Get the configuration corresponding to the target uri.
         * @param uri target uri
         * @returns The configuration name or NULL if the corresponding configuration cannot be found.
         */
        get_uri_configuration(uri: string): string;
        /**
         * List all defined configuration. These names returned are
         * the internal non localized names for the following
         * predefined configuration: Debug, Profiling, Optimized.
         * The default configuration has no name and is not returned.
         * @returns a list configuration name. The names are owned by the plugin, so only the list has to be free using g_list_free.
         */
        list_configuration(): string[];
    }

    export const Builder: BuilderNamespace & {
        new (): Builder; // This allows `obj instanceof Builder`
    };

    namespace DebugManager {
        /**
         * Interface for implementing DebugManager.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_breakpoint_changed(breakpoint: DebuggerBreakpointItem): void;
            vfunc_debugger_started(): void;
            vfunc_debugger_stopped(err: GLib.Error): void;
            vfunc_frame_changed(frame: number, thread: number): void;
            vfunc_location_changed(address: number, uri: string, line: number): void;
            vfunc_program_exited(): void;
            vfunc_program_loaded(): void;
            vfunc_program_moved(pid: number, tid: number, address: number, file: string, line: number): void;
            vfunc_program_running(): void;
            vfunc_program_started(): void;
            vfunc_program_stopped(): void;
            vfunc_program_unloaded(): void;
            /**
             * Quit the debugger, can wait until the debugger is ready.
             */
            vfunc_quit(): boolean;
            vfunc_sharedlib_event(): void;
            vfunc_signal_received(name: string, description: string): void;
            /**
             * Start the debugger of the given uri
             * @param uri uri of the target
             */
            vfunc_start(uri: string): boolean;
            /**
             * Start the debugger of the given uri
             * @param server server (IP address:port)
             * @param uri uri of the local target
             */
            vfunc_start_remote(server: string, uri: string): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DebugManagerNamespace {
        $gtype: GObject.GType<DebugManager>;
        prototype: DebugManager;

        error_quark(): GLib.Quark;
    }
    interface DebugManager extends GObject.Object, DebugManager.Interface {
        // Methods

        /**
         * Quit the debugger, can wait until the debugger is ready.
         * @returns TRUE if sucessful, other FALSE.
         */
        quit(): boolean;
        /**
         * Start the debugger of the given uri
         * @param uri uri of the target
         * @returns TRUE if sucessful, other FALSE.
         */
        start(uri: string): boolean;
        /**
         * Start the debugger of the given uri
         * @param server server (IP address:port)
         * @param uri uri of the local target
         * @returns TRUE if sucessful, other FALSE.
         */
        start_remote(server: string, uri: string): boolean;
    }

    export const DebugManager: DebugManagerNamespace & {
        new (): DebugManager; // This allows `obj instanceof DebugManager`
    };

    namespace Debugger {
        /**
         * Interface for implementing Debugger.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Quit the debugger as fast as possible.
             */
            vfunc_abort(): boolean;
            /**
             * Attach to an already running process.
             * @param pid pid of the process to debug
             * @param source_search_directories List of directories to search for 		      source files.
             */
            vfunc_attach(pid: number, source_search_directories: string[]): boolean;
            /**
             * Connect to a remote debugger and run program
             * @param server remote server
             * @param args command line argument of the program
             * @param terminal TRUE if the program need a terminal
             * @param stop TRUE if program is stopped at the beginning
             */
            vfunc_connect(server: string, args: string, terminal: boolean, stop: boolean): boolean;
            vfunc_debugger_ready(state: DebuggerState): void;
            vfunc_debugger_started(): void;
            vfunc_debugger_stopped(err: GLib.Error): void;
            /**
             * Disable debugger log.
             */
            vfunc_disable_log(): void;
            /**
             * Log all debuggers commands, mainly useful for debugging.
             * @param log MessageView used by log
             */
            vfunc_enable_log(log: MessageView): void;
            /**
             * Exit from the currently loaded program.
             */
            vfunc_exit(): boolean;
            vfunc_frame_changed(frame: number, thread: number): void;
            /**
             * Get the current state of the debugger
             */
            vfunc_get_state(): DebuggerState;
            /**
             * It defines how to handle signal received by the program.
             * @param name signal name
             * @param stop TRUE if we need to stop signal
             * @param print TRUE if we display a message when the signal is emitted
             * @param ignore TRUE if we ignore the signal
             */
            vfunc_handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean;
            /**
             * Interrupt the program currently running.
             */
            vfunc_interrupt(): boolean;
            /**
             * Load a program in the debugger.
             * @param file filename
             * @param mime_type mime type of the file
             * @param source_search_directories List of directories to search for 		      source files.
             */
            vfunc_load(file: string, mime_type: string, source_search_directories: string[]): boolean;
            vfunc_program_exited(): void;
            vfunc_program_loaded(): void;
            vfunc_program_moved(pid: number, tid: number, address: number, file: string, line: number): void;
            vfunc_program_running(): void;
            vfunc_program_stopped(): void;
            /**
             * Quit the debugger, can wait until the debugger is ready.
             */
            vfunc_quit(): boolean;
            /**
             * Run the program currently loaded.
             */
            vfunc_run(): boolean;
            /**
             * Execute the program from a new position.
             * This function is optional.
             * @param file target file name
             * @param line target line in file
             */
            vfunc_run_from(file: string, line: number): boolean;
            /**
             * Execute the currently loaded program until it reachs the target
             * line.
             * @param file target file name
             * @param line target line in file
             */
            vfunc_run_to(file: string, line: number): boolean;
            /**
             * Send a command directly to the debugger. Warning, changing the
             * debugger states, by sending a run command by example, will
             * probably gives some troubles in the debug manager.
             * @param command command
             */
            vfunc_send_command(command: string): boolean;
            /**
             * Set environment variable
             * @param env List environment variable
             */
            vfunc_set_environment(env: string): boolean;
            /**
             * Set the current frame.
             * @param frame frame number
             */
            vfunc_set_frame(frame: number): boolean;
            /**
             * Set the current thread.
             * @param thread thread number
             */
            vfunc_set_thread(thread: number): boolean;
            /**
             * Set program working directory.
             * @param dir working program directory
             */
            vfunc_set_working_directory(dir: string): boolean;
            vfunc_sharedlib_event(): void;
            vfunc_signal_received(name: string, description: string): void;
            /**
             * Start a loaded program under debugger control.
             * @param args command line argument of the program
             * @param terminal TRUE if the program need a terminal
             * @param stop TRUE if program is stopped at the beginning
             */
            vfunc_start(args: string, terminal: boolean, stop: boolean): boolean;
            /**
             * Execute a single C instruction of the program currently loaded.
             */
            vfunc_step_in(): boolean;
            /**
             * Execute the currently loaded program until it goes out of the
             * current procedure.
             */
            vfunc_step_out(): boolean;
            /**
             * Execute one C instruction, without entering in procedure, of
             * the program currently loaded.
             */
            vfunc_step_over(): boolean;
            /**
             * Unload a program.
             */
            vfunc_unload(): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DebuggerNamespace {
        $gtype: GObject.GType<Debugger>;
        prototype: Debugger;
    }
    interface Debugger extends GObject.Object, Debugger.Interface {
        // Methods

        /**
         * Quit the debugger as fast as possible.
         * @returns TRUE if sucessful, otherwise FALSE.
         */
        abort(): boolean;
        /**
         * Attach to an already running process.
         * @param pid pid of the process to debug
         * @param source_search_directories List of directories to search for 		      source files.
         * @returns TRUE if sucessful, other FALSE.
         */
        attach(pid: number, source_search_directories: string[]): boolean;
        /**
         * Connect to a remote debugger and run program
         * @param server remote server
         * @param args command line argument of the program
         * @param terminal TRUE if the program need a terminal
         * @param stop TRUE if program is stopped at the beginning
         * @returns TRUE if sucessfull, otherwise FALSE.
         */
        connect(server: string, args: string, terminal: boolean, stop: boolean): boolean;
        connect(...args: never[]): any;
        /**
         * Disable debugger log.
         */
        disable_log(): void;
        /**
         * Log all debuggers commands, mainly useful for debugging.
         * @param log MessageView used by log
         */
        enable_log(log: MessageView): void;
        /**
         * Exit from the currently loaded program.
         * @returns TRUE if sucessful, otherwise FALSE.
         */
        exit(): boolean;
        /**
         * Get the current state of the debugger
         * @returns The current debugger state.
         */
        get_state(): DebuggerState;
        /**
         * It defines how to handle signal received by the program.
         * @param name signal name
         * @param stop TRUE if we need to stop signal
         * @param print TRUE if we display a message when the signal is emitted
         * @param ignore TRUE if we ignore the signal
         * @returns TRUE if sucessful, otherwise FALSE.
         */
        handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean;
        /**
         * Interrupt the program currently running.
         * @returns TRUE if sucessful, otherwise FALSE.
         */
        interrupt(): boolean;
        /**
         * Load a program in the debugger.
         * @param file filename
         * @param mime_type mime type of the file
         * @param source_search_directories List of directories to search for 		      source files.
         * @returns TRUE if sucessful, other FALSE.
         */
        load(file: string, mime_type: string, source_search_directories: string[]): boolean;
        /**
         * Quit the debugger, can wait until the debugger is ready.
         * @returns TRUE if sucessful, other FALSE.
         */
        quit(): boolean;
        /**
         * Run the program currently loaded.
         * @returns TRUE if sucessful, otherwise FALSE.
         */
        run(): boolean;
        /**
         * Execute the program from a new position.
         * This function is optional.
         * @param file target file name
         * @param line target line in file
         * @returns TRUE if sucessful, otherwise FALSE.
         */
        run_from(file: string, line: number): boolean;
        /**
         * Execute the currently loaded program until it reachs the target
         * line.
         * @param file target file name
         * @param line target line in file
         * @returns TRUE if sucessful, otherwise FALSE.
         */
        run_to(file: string, line: number): boolean;
        /**
         * Send a command directly to the debugger. Warning, changing the
         * debugger states, by sending a run command by example, will
         * probably gives some troubles in the debug manager.
         * @param command command
         * @returns TRUE if sucessful, otherwise FALSE.
         */
        send_command(command: string): boolean;
        /**
         * Set environment variable
         * @param env List environment variable
         * @returns TRUE if sucessfull, other FALSE.
         */
        set_environment(env: string): boolean;
        /**
         * Set the current frame.
         * @param frame frame number
         * @returns TRUE if sucessful, otherwise FALSE.
         */
        set_frame(frame: number): boolean;
        /**
         * Set the current thread.
         * @param thread thread number
         * @returns TRUE if sucessful, otherwise FALSE.
         */
        set_thread(thread: number): boolean;
        /**
         * Set program working directory.
         * @param dir working program directory
         * @returns TRUE if sucessful, other FALSE.
         */
        set_working_directory(dir: string): boolean;
        /**
         * Start a loaded program under debugger control.
         * @param args command line argument of the program
         * @param terminal TRUE if the program need a terminal
         * @param stop TRUE if program is stopped at the beginning
         * @returns TRUE if sucessful, other FALSE.
         */
        start(args: string, terminal: boolean, stop: boolean): boolean;
        /**
         * Execute a single C instruction of the program currently loaded.
         * @returns TRUE if sucessful, otherwise FALSE.
         */
        step_in(): boolean;
        /**
         * Execute the currently loaded program until it goes out of the
         * current procedure.
         * @returns TRUE if sucessful, otherwise FALSE.
         */
        step_out(): boolean;
        /**
         * Execute one C instruction, without entering in procedure, of
         * the program currently loaded.
         * @returns TRUE if sucessful, otherwise FALSE.
         */
        step_over(): boolean;
        /**
         * Unload a program.
         * @returns TRUE if sucessfull, otherwise FALSE.
         */
        unload(): boolean;
    }

    export const Debugger: DebuggerNamespace & {
        new (): Debugger; // This allows `obj instanceof Debugger`
    };

    namespace DebuggerBreakpoint {
        /**
         * Interface for implementing DebuggerBreakpoint.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Debugger.Interface {
            // Virtual methods

            /**
             * Return all implemented methods.
             */
            vfunc_implement_breakpoint(): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends Debugger.ConstructorProps {}
    }

    export interface DebuggerBreakpointNamespace {
        $gtype: GObject.GType<DebuggerBreakpoint>;
        prototype: DebuggerBreakpoint;

        error_quark(): GLib.Quark;
    }
    interface DebuggerBreakpoint extends Debugger, DebuggerBreakpoint.Interface {
        // Methods

        /**
         * Return all implemented methods.
         * @returns A OR of #IAnjutaDebuggerBreakpointMethod corresponding to all implemented optional methods.
         */
        implement_breakpoint(): number;
    }

    export const DebuggerBreakpoint: DebuggerBreakpointNamespace & {
        new (): DebuggerBreakpoint; // This allows `obj instanceof DebuggerBreakpoint`
    };

    namespace DebuggerInstruction {
        /**
         * Interface for implementing DebuggerInstruction.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Debugger.Interface {
            // Virtual methods

            /**
             * Restart the program starting from address address
             * @param address Run from this addresss
             */
            vfunc_run_from_address(address: number): boolean;
            /**
             * Start the program until it reachs the address address
             * @param address Run to this addresss
             */
            vfunc_run_to_address(address: number): boolean;
            /**
             * Execute one assembler instruction in the program.
             */
            vfunc_step_in_instruction(): boolean;
            /**
             * Execute one assembler instruction in the program, if the instruction
             * is a function call, continues until the function returns.
             */
            vfunc_step_over_instruction(): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends Debugger.ConstructorProps {}
    }

    export interface DebuggerInstructionNamespace {
        $gtype: GObject.GType<DebuggerInstruction>;
        prototype: DebuggerInstruction;

        error_quark(): GLib.Quark;
    }
    interface DebuggerInstruction extends Debugger, DebuggerInstruction.Interface {
        // Methods

        /**
         * Restart the program starting from address address
         * @param address Run from this addresss
         * @returns TRUE if the request succeed and the callback is called. If FALSE, the callback will not be called.
         */
        run_from_address(address: number): boolean;
        /**
         * Start the program until it reachs the address address
         * @param address Run to this addresss
         * @returns TRUE if the request succeed and the callback is called. If FALSE, the callback will not be called.
         */
        run_to_address(address: number): boolean;
        /**
         * Execute one assembler instruction in the program.
         * @returns TRUE if the request succeed and the callback is called. If FALSE, the callback will not be called.
         */
        step_in_instruction(): boolean;
        /**
         * Execute one assembler instruction in the program, if the instruction
         * is a function call, continues until the function returns.
         * @returns TRUE if the request succeed and the callback is called. If FALSE, the callback will not be called.
         */
        step_over_instruction(): boolean;
    }

    export const DebuggerInstruction: DebuggerInstructionNamespace & {
        new (): DebuggerInstruction; // This allows `obj instanceof DebuggerInstruction`
    };

    namespace DebuggerMemory {
        // Constructor properties interface

        interface ConstructorProps extends Debugger.ConstructorProps {}
    }

    export interface DebuggerMemoryNamespace {
        $gtype: GObject.GType<DebuggerMemory>;
        prototype: DebuggerMemory;

        error_quark(): GLib.Quark;
    }
    interface DebuggerMemory extends Debugger {}

    export const DebuggerMemory: DebuggerMemoryNamespace & {
        new (): DebuggerMemory; // This allows `obj instanceof DebuggerMemory`
    };

    namespace DebuggerRegister {
        /**
         * Interface for implementing DebuggerRegister.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Debugger.Interface {
            // Virtual methods

            /**
             * Change the value of one register. Only the num and value field are used.
             * @param value Modified register with a new value
             */
            vfunc_write_register(value: DebuggerRegisterData): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends Debugger.ConstructorProps {}
    }

    export interface DebuggerRegisterNamespace {
        $gtype: GObject.GType<DebuggerRegister>;
        prototype: DebuggerRegister;

        error_quark(): GLib.Quark;
    }
    interface DebuggerRegister extends Debugger, DebuggerRegister.Interface {
        // Methods

        /**
         * Change the value of one register. Only the num and value field are used.
         * @param value Modified register with a new value
         * @returns TRUE if the request succeed.
         */
        write_register(value: DebuggerRegisterData): boolean;
    }

    export const DebuggerRegister: DebuggerRegisterNamespace & {
        new (): DebuggerRegister; // This allows `obj instanceof DebuggerRegister`
    };

    namespace DebuggerVariable {
        /**
         * Interface for implementing DebuggerVariable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Debugger.Interface {
            // Virtual methods

            /**
             * Set the value of one variable or child object.
             * @param name Variable name
             * @param value Variable value
             */
            vfunc_assign(name: string, value: string): boolean;
            /**
             * Delete a previously created variable or child object
             * including its own children.
             * @param name Variable name
             */
            vfunc_destroy(name: string): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends Debugger.ConstructorProps {}
    }

    export interface DebuggerVariableNamespace {
        $gtype: GObject.GType<DebuggerVariable>;
        prototype: DebuggerVariable;

        error_quark(): GLib.Quark;
    }
    interface DebuggerVariable extends Debugger, DebuggerVariable.Interface {
        // Methods

        /**
         * Set the value of one variable or child object.
         * @param name Variable name
         * @param value Variable value
         * @returns TRUE if the request succeed and the callback is called. If FALSE, the callback will not be called.
         */
        assign(name: string, value: string): boolean;
        /**
         * Delete a previously created variable or child object
         * including its own children.
         * @param name Variable name
         * @returns TRUE if the request succeed and the callback is called. If FALSE, the callback will not be called.
         */
        destroy(name: string): boolean;
    }

    export const DebuggerVariable: DebuggerVariableNamespace & {
        new (): DebuggerVariable; // This allows `obj instanceof DebuggerVariable`
    };

    namespace Document {
        /**
         * Interface for implementing Document.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Begins the mark of undoable action. Calls to this are stacked and
             * each must be ended with ianjuta_document_end_action().
             */
            vfunc_begin_undo_action(): void;
            /**
             * Can the editor redo the last operation?
             */
            vfunc_can_redo(): boolean;
            /**
             * Can the editor undo the last operation?
             */
            vfunc_can_undo(): boolean;
            /**
             * Clear selection
             */
            vfunc_clear(): void;
            /**
             * Copy selection to clipboard.
             */
            vfunc_copy(): void;
            /**
             * Cut selection to clipboard.
             */
            vfunc_cut(): void;
            /**
             * Ends the mark of undoable action.
             */
            vfunc_end_undo_action(): void;
            /**
             * Allows obtaining of the filename the editor was loaded from.
             */
            vfunc_get_filename(): string;
            /**
             * Grabs the focus.
             */
            vfunc_grab_focus(): void;
            /**
             * Paste clipboard at current position.
             */
            vfunc_paste(): void;
            /**
             * Redo last undo operation
             */
            vfunc_redo(): void;
            /**
             * Undo last operation
             */
            vfunc_undo(): void;
            vfunc_update_ui(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentNamespace {
        $gtype: GObject.GType<Document>;
        prototype: Document;

        error_quark(): GLib.Quark;
    }
    interface Document extends GObject.Object, Document.Interface {
        // Methods

        /**
         * Begins the mark of undoable action. Calls to this are stacked and
         * each must be ended with ianjuta_document_end_action().
         */
        begin_undo_action(): void;
        /**
         * Can the editor redo the last operation?
         * @returns TRUE if editor can redo, else FALSE
         */
        can_redo(): boolean;
        /**
         * Can the editor undo the last operation?
         * @returns TRUE if editor can undo, else FALSE
         */
        can_undo(): boolean;
        /**
         * Clear selection
         */
        clear(): void;
        /**
         * Copy selection to clipboard.
         */
        copy(): void;
        /**
         * Cut selection to clipboard.
         */
        cut(): void;
        /**
         * Ends the mark of undoable action.
         */
        end_undo_action(): void;
        /**
         * Allows obtaining of the filename the editor was loaded from.
         * @returns The name of the file. Not to be freed by caller.
         */
        get_filename(): string;
        /**
         * Grabs the focus.
         */
        grab_focus(): void;
        /**
         * Paste clipboard at current position.
         */
        paste(): void;
        /**
         * Redo last undo operation
         */
        redo(): void;
        /**
         * Undo last operation
         */
        undo(): void;
    }

    export const Document: DocumentNamespace & {
        new (): Document; // This allows `obj instanceof Document`
    };

    namespace DocumentManager {
        /**
         * Interface for implementing DocumentManager.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_add_bookmark(file: Gio.File, line: number): void;
            /**
             * Creates a new editor buffer of the given name and sets the given
             * content as its initial content.
             * @param name Name of the editor buffer.
             * @param content Initial content of the buffer.
             */
            vfunc_add_buffer(name: string, content: string): Editor;
            /**
             * Adds a document to the document manager. This will open a new
             * Notebook tab and show the document there
             * @param document the document to add
             */
            vfunc_add_document(document: Document): void;
            vfunc_document_added(doc: Document): void;
            vfunc_document_removed(doc: Document): void;
            /**
             * Finds the document that has the file  loaded. Only
             * the editor that matches the file will be searched.
             * @param file The file to find.
             */
            vfunc_find_document_with_file(file: Gio.File): Document;
            /**
             * Gets the current document.
             */
            vfunc_get_current_document(): Document;
            /**
             * Gets a list of widgets for open documents. Each widget is
             * a GTK_WIDGET(IAnjutaDocument*)
             */
            vfunc_get_doc_widgets(): Gtk.Widget[];
            /**
             * Given the short filename, finds the file of the filename, if the
             * editor that has it loaded is found. If there is no editor that has
             * this file opened, returns NULL.
             * @param filename short filename
             */
            vfunc_get_file(filename: string): Gio.File;
            /**
             * Loads the given file if not loaded yet, set its editor as current editor
             * and moves cursor to the given line in the editor.
             * @param file file to go to.
             * @param lineno the line number in the file to go to.
             */
            vfunc_goto_file_line(file: Gio.File, lineno: number): Editor;
            /**
             * Loads the given file if not loaded yet, set its editor as current editor
             * and moves cursor to the given line in the editor. Optionally also marks
             * the line with line marker if `mark` is given TRUE.
             * @param file file to go to.
             * @param lineno the line number in the file to go to.
             * @param mark TRUE if the line should be marked with a marker.
             */
            vfunc_goto_file_line_mark(file: Gio.File, lineno: number, mark: boolean): Editor;
            /**
             * Closes and removes the given document. If `save_before` is TRUE, also
             * saves the document before closing.
             * @param document Document to close.
             * @param save_before If true, saves the document before closing.
             */
            vfunc_remove_document(document: Document, save_before: boolean): boolean;
            /**
             * Sets the given document as current document.
             * @param document the document to set as current.
             */
            vfunc_set_current_document(document: Document): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentManagerNamespace {
        $gtype: GObject.GType<DocumentManager>;
        prototype: DocumentManager;
    }
    interface DocumentManager extends GObject.Object, DocumentManager.Interface {
        // Methods

        add_bookmark(file: Gio.File, line: number): void;
        /**
         * Creates a new editor buffer of the given name and sets the given
         * content as its initial content.
         * @param name Name of the editor buffer.
         * @param content Initial content of the buffer.
         * @returns the IAnjutaEditor instance that has been added.
         */
        add_buffer(name: string, content: string): Editor;
        /**
         * Adds a document to the document manager. This will open a new
         * Notebook tab and show the document there
         * @param document the document to add
         */
        add_document(document: Document): void;
        /**
         * Finds the document that has the file  loaded. Only
         * the editor that matches the file will be searched.
         * @param file The file to find.
         * @returns the document that corresponds to given file. NULL if there is no editor loaded with this file.
         */
        find_document_with_file(file: Gio.File): Document;
        /**
         * Gets the current document.
         * @returns the currently active document. NULL if none is there.
         */
        get_current_document(): Document;
        /**
         * Gets a list of widgets for open documents. Each widget is
         * a GTK_WIDGET(IAnjutaDocument*)
         * @returns a list of widgets for all open documents. The returned list (but not the data in the list) must be freed after use.
         */
        get_doc_widgets(): Gtk.Widget[];
        /**
         * Given the short filename, finds the file of the filename, if the
         * editor that has it loaded is found. If there is no editor that has
         * this file opened, returns NULL.
         * @param filename short filename
         * @returns the GFile for the given short filename
         */
        get_file(filename: string): Gio.File;
        /**
         * Loads the given file if not loaded yet, set its editor as current editor
         * and moves cursor to the given line in the editor.
         * @param file file to go to.
         * @param lineno the line number in the file to go to.
         * @returns the editor where the mark has been put. NULL if none.
         */
        goto_file_line(file: Gio.File, lineno: number): Editor;
        /**
         * Loads the given file if not loaded yet, set its editor as current editor
         * and moves cursor to the given line in the editor. Optionally also marks
         * the line with line marker if `mark` is given TRUE.
         * @param file file to go to.
         * @param lineno the line number in the file to go to.
         * @param mark TRUE if the line should be marked with a marker.
         * @returns the editor where the mark has been put. NULL if none.
         */
        goto_file_line_mark(file: Gio.File, lineno: number, mark: boolean): Editor;
        /**
         * Closes and removes the given document. If `save_before` is TRUE, also
         * saves the document before closing.
         * @param document Document to close.
         * @param save_before If true, saves the document before closing.
         * @returns TRUE if the document was removed, else FALSE.
         */
        remove_document(document: Document, save_before: boolean): boolean;
        /**
         * Sets the given document as current document.
         * @param document the document to set as current.
         */
        set_current_document(document: Document): void;
    }

    export const DocumentManager: DocumentManagerNamespace & {
        new (): DocumentManager; // This allows `obj instanceof DocumentManager`
    };

    namespace Editor {
        /**
         * Interface for implementing Editor.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Appends `length` characters from `text` buffer at the end of editor
             * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
             * @param text Text to append.
             * @param length Length of @text to use.
             */
            vfunc_append(text: string, length: number): void;
            vfunc_backspace(): void;
            vfunc_changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void;
            vfunc_char_added(position: Iterable, ch: number): void;
            vfunc_code_changed(position: Iterable, code: string): void;
            vfunc_cursor_moved(): void;
            vfunc_erase(position_start: Iterable, position_end: Iterable): void;
            /**
             * Empties the whole editor buffer. There will be zero characters.
             * After the erase operation, none of the active iters are guranteed
             * to be valid.
             */
            vfunc_erase_all(): void;
            vfunc_get_column(): number;
            /**
             * Obtains the word on which carat is currently on.
             */
            vfunc_get_current_word(): string;
            /**
             * Gets the iter positioned at the end of the editor buffer. The
             * returned iter is the end-iter which does not point to any valid
             * character in the buffer (it is pointed one step beyond the last
             * valid character).
             */
            vfunc_get_end_position(): Iterable;
            /**
             * Returns the indentation size in spaces currently used by the
             * editor.
             */
            vfunc_get_indentsize(): number;
            /**
             * Get length of complete text in editor. This will be the total
             * number of bytes in the file or buffer.
             */
            vfunc_get_length(): number;
            /**
             * fixme
             * @param line fixme
             */
            vfunc_get_line_begin_position(line: number): Iterable;
            /**
             * fixme
             * @param line fixme
             */
            vfunc_get_line_end_position(line: number): Iterable;
            vfunc_get_line_from_position(position: Iterable): number;
            /**
             * Obtains current line number on which carat is.
             */
            vfunc_get_lineno(): number;
            vfunc_get_offset(): number;
            /**
             * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
             */
            vfunc_get_overwrite(): boolean;
            /**
             * Get current caret position.
             */
            vfunc_get_position(): Iterable;
            /**
             * Gets the iter positioned at the start of the editor buffer.
             */
            vfunc_get_start_position(): Iterable;
            /**
             * Returns the tabsize (in spaces) currently used by the editor.
             */
            vfunc_get_tabsize(): number;
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
            vfunc_get_text(begin: Iterable, end: Iterable): string;
            /**
             * Gets all text characters in the editor.
             * The characters returned are utf-8 encoded.
             */
            vfunc_get_text_all(): string;
            /**
             * Returns if the editor uses spaces for filling up tab characters.
             */
            vfunc_get_use_spaces(): boolean;
            vfunc_glade_callback_add(
                widget_typename: string,
                signal_name: string,
                handler_name: string,
                object: string,
                swap: boolean,
                after: boolean,
                filename: string,
            ): void;
            vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void;
            /**
             * Carat is moved to the end of editor and text view is scrolled to
             * bring it in viewable area of the editor.
             */
            vfunc_goto_end(): void;
            /**
             * Carat is moved to the given `lineno` line and text view is scrolled to
             * bring it in viewable area of the editor.
             * @param lineno line number where carat will be moved.
             */
            vfunc_goto_line(lineno: number): void;
            /**
             * Carat is moved to the given `position` and text view is scrolled to
             * bring `position` in viewable area of the editor.
             * @param position Character position where carat will be moved.
             */
            vfunc_goto_position(position: Iterable): void;
            /**
             * Carat is moved to the begining of editor and text view is scrolled to
             * bring it in viewable area of the editor.
             */
            vfunc_goto_start(): void;
            /**
             * Inserts `length` characters from `text` buffer at given `position` of
             * editor buffer. If `length` is -1, the whole `text` is used.
             * @param position Character position in editor where insert will take place.
             * @param text Text to append.
             * @param length Length of @text to use.
             */
            vfunc_insert(position: Iterable, text: string, length: number): void;
            vfunc_line_marks_gutter_clicked(location: number): void;
            /**
             * Sets whether the editor should auto-indent itself. A plugin that does
             * custom auto-indent can set this to false and override the preferences
             * setting
             * @param auto_indent TRUE to enable auto-indent, FALSE to disable
             */
            vfunc_set_auto_indent(auto_indent: boolean): void;
            /**
             * Sets the indentation size of the editor.
             * @param indentsize Indentation size in spaces
             */
            vfunc_set_indentsize(indentsize: number): void;
            /**
             * Set Editor popup menu. This is the menu shown in the editor when one
             * right-clicks on it.
             * @param menu Popupmenu
             */
            vfunc_set_popup_menu(menu: Gtk.Widget): void;
            /**
             * Sets the tabsize of the editor.
             * @param tabsize Tabsize in spaces
             */
            vfunc_set_tabsize(tabsize: number): void;
            vfunc_set_use_spaces(use_spaces: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface EditorNamespace {
        $gtype: GObject.GType<Editor>;
        prototype: Editor;
    }
    interface Editor extends GObject.Object, Editor.Interface {
        // Methods

        /**
         * Appends `length` characters from `text` buffer at the end of editor
         * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
         * @param text Text to append.
         * @param length Length of @text to use.
         */
        append(text: string, length: number): void;
        erase(position_start: Iterable, position_end: Iterable): void;
        /**
         * Empties the whole editor buffer. There will be zero characters.
         * After the erase operation, none of the active iters are guranteed
         * to be valid.
         */
        erase_all(): void;
        get_column(): number;
        /**
         * Obtains the word on which carat is currently on.
         * @returns Current word.
         */
        get_current_word(): string;
        /**
         * Gets the iter positioned at the end of the editor buffer. The
         * returned iter is the end-iter which does not point to any valid
         * character in the buffer (it is pointed one step beyond the last
         * valid character).
         * @returns Cell iter set to the end of the editor (end-iter).
         */
        get_end_position(): Iterable;
        /**
         * Returns the indentation size in spaces currently used by the
         * editor.
         * @returns indentation size in number of spaces
         */
        get_indentsize(): number;
        /**
         * Get length of complete text in editor. This will be the total
         * number of bytes in the file or buffer.
         * @returns Text length.
         */
        get_length(): number;
        /**
         * fixme
         * @param line fixme
         * @returns fixme
         */
        get_line_begin_position(line: number): Iterable;
        /**
         * fixme
         * @param line fixme
         * @returns fixme
         */
        get_line_end_position(line: number): Iterable;
        get_line_from_position(position: Iterable): number;
        /**
         * Obtains current line number on which carat is.
         * @returns Line number.
         */
        get_lineno(): number;
        get_offset(): number;
        /**
         * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
         * @returns editor mode.
         */
        get_overwrite(): boolean;
        /**
         * Get current caret position.
         * @returns Iterator that points to the current position.
         */
        get_position(): Iterable;
        /**
         * Gets the iter positioned at the start of the editor buffer.
         * @returns Cell iter set to the begining of the editor.
         */
        get_start_position(): Iterable;
        /**
         * Returns the tabsize (in spaces) currently used by the editor.
         * @returns tabsize in number of spaces
         */
        get_tabsize(): number;
        /**
         * Gets text characters beginning from `begin` (including char
         * pointed by `begin)` and ending with `end` (excluding character
         * pointed by `end)`. The characters returned are utf-8 encoded.
         * The iterators `begin` and `end` could be in either order. The returned
         * text, however, is in right order. If both `begin` and `end` points
         * to the same position, NULL is returned.
         * @param begin Begining iterator
         * @param end End iterator
         * @returns A buffer of utf-8 characters. The returned buffer must be freed when no longer required.
         */
        get_text(begin: Iterable, end: Iterable): string;
        /**
         * Gets all text characters in the editor.
         * The characters returned are utf-8 encoded.
         * @returns A buffer of utf-8 characters containing all text from editor. The returned buffer must be freed when no longer required.
         */
        get_text_all(): string;
        /**
         * Returns if the editor uses spaces for filling up tab characters.
         * @returns TRUE if yes, FALSE if no.
         */
        get_use_spaces(): boolean;
        /**
         * Carat is moved to the end of editor and text view is scrolled to
         * bring it in viewable area of the editor.
         */
        goto_end(): void;
        /**
         * Carat is moved to the given `lineno` line and text view is scrolled to
         * bring it in viewable area of the editor.
         * @param lineno line number where carat will be moved.
         */
        goto_line(lineno: number): void;
        /**
         * Carat is moved to the given `position` and text view is scrolled to
         * bring `position` in viewable area of the editor.
         * @param position Character position where carat will be moved.
         */
        goto_position(position: Iterable): void;
        /**
         * Carat is moved to the begining of editor and text view is scrolled to
         * bring it in viewable area of the editor.
         */
        goto_start(): void;
        /**
         * Inserts `length` characters from `text` buffer at given `position` of
         * editor buffer. If `length` is -1, the whole `text` is used.
         * @param position Character position in editor where insert will take place.
         * @param text Text to append.
         * @param length Length of @text to use.
         */
        insert(position: Iterable, text: string, length: number): void;
        /**
         * Sets whether the editor should auto-indent itself. A plugin that does
         * custom auto-indent can set this to false and override the preferences
         * setting
         * @param auto_indent TRUE to enable auto-indent, FALSE to disable
         */
        set_auto_indent(auto_indent: boolean): void;
        /**
         * Sets the indentation size of the editor.
         * @param indentsize Indentation size in spaces
         */
        set_indentsize(indentsize: number): void;
        /**
         * Set Editor popup menu. This is the menu shown in the editor when one
         * right-clicks on it.
         * @param menu Popupmenu
         */
        set_popup_menu(menu: Gtk.Widget): void;
        /**
         * Sets the tabsize of the editor.
         * @param tabsize Tabsize in spaces
         */
        set_tabsize(tabsize: number): void;
        set_use_spaces(use_spaces: boolean): void;
    }

    export const Editor: EditorNamespace & {
        new (): Editor; // This allows `obj instanceof Editor`
    };

    namespace EditorAssist {
        /**
         * Interface for implementing EditorAssist.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Editor.Interface {
            // Virtual methods

            vfunc_add(provider: Provider): void;
            vfunc_cancelled(): void;
            vfunc_invoke(provider: Provider): void;
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
            vfunc_proposals(
                provider: Provider,
                proposals: EditorAssistProposal[],
                pre_word: string,
                finished: boolean,
            ): void;
            vfunc_remove(provider: Provider): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Editor.ConstructorProps {}
    }

    export interface EditorAssistNamespace {
        $gtype: GObject.GType<EditorAssist>;
        prototype: EditorAssist;

        error_quark(): GLib.Quark;
    }
    interface EditorAssist extends Editor, EditorAssist.Interface {
        // Methods

        add(provider: Provider): void;
        invoke(provider: Provider): void;
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
        proposals(provider: Provider, proposals: EditorAssistProposal[], pre_word: string, finished: boolean): void;
        remove(provider: Provider): void;
    }

    export const EditorAssist: EditorAssistNamespace & {
        new (): EditorAssist; // This allows `obj instanceof EditorAssist`
    };

    namespace EditorCell {
        /**
         * Interface for implementing EditorCell.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_get_attribute(): EditorAttribute;
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
            vfunc_get_char(char_index: number): number;
            /**
             * Returns the unicode character in this cell. A NULL terminated
             * string is returned that is the multibyte unicode character.
             * NULL is returned if the cell does not have any character.
             */
            vfunc_get_character(): string;
            /**
             * Gets the length of the cell in bytes. That is, length of the
             * unicode character.
             */
            vfunc_get_length(): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface EditorCellNamespace {
        $gtype: GObject.GType<EditorCell>;
        prototype: EditorCell;

        error_quark(): GLib.Quark;
    }
    interface EditorCell extends GObject.Object, EditorCell.Interface {
        // Methods

        get_attribute(): EditorAttribute;
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
         * @returns a byte character.
         */
        get_char(char_index: number): number;
        /**
         * Returns the unicode character in this cell. A NULL terminated
         * string is returned that is the multibyte unicode character.
         * NULL is returned if the cell does not have any character.
         * @returns a newly created string representing the cell's unicode character.
         */
        get_character(): string;
        /**
         * Gets the length of the cell in bytes. That is, length of the
         * unicode character.
         * @returns Length of the unicode character.
         */
        get_length(): number;
    }

    export const EditorCell: EditorCellNamespace & {
        new (): EditorCell; // This allows `obj instanceof EditorCell`
    };

    namespace EditorCellStyle {
        /**
         * Interface for implementing EditorCellStyle.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends EditorCell.Interface {
            // Virtual methods

            vfunc_get_background_color(): string;
            vfunc_get_color(): string;
            vfunc_get_font_description(): string;
        }

        // Constructor properties interface

        interface ConstructorProps extends EditorCell.ConstructorProps {}
    }

    export interface EditorCellStyleNamespace {
        $gtype: GObject.GType<EditorCellStyle>;
        prototype: EditorCellStyle;

        error_quark(): GLib.Quark;
    }
    interface EditorCellStyle extends EditorCell, EditorCellStyle.Interface {
        // Methods

        get_background_color(): string;
        get_color(): string;
        get_font_description(): string;
    }

    export const EditorCellStyle: EditorCellStyleNamespace & {
        new (): EditorCellStyle; // This allows `obj instanceof EditorCellStyle`
    };

    namespace EditorComment {
        /**
         * Interface for implementing EditorComment.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Editor.Interface {
            // Virtual methods

            /**
             * Comment/Uncomment out selected block
             */
            vfunc_block(): void;
            /**
             * Comment/Uncomment out selected block
             */
            vfunc_box(): void;
            /**
             * Comment/Uncomment out selected block
             */
            vfunc_stream(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Editor.ConstructorProps {}
    }

    export interface EditorCommentNamespace {
        $gtype: GObject.GType<EditorComment>;
        prototype: EditorComment;

        error_quark(): GLib.Quark;
    }
    interface EditorComment extends Editor, EditorComment.Interface {
        // Methods

        /**
         * Comment/Uncomment out selected block
         */
        block(): void;
        /**
         * Comment/Uncomment out selected block
         */
        box(): void;
        /**
         * Comment/Uncomment out selected block
         */
        stream(): void;
    }

    export const EditorComment: EditorCommentNamespace & {
        new (): EditorComment; // This allows `obj instanceof EditorComment`
    };

    namespace EditorConvert {
        /**
         * Interface for implementing EditorConvert.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Editor.Interface {
            // Virtual methods

            /**
             * change characters from start position to end position to lowercase
             * @param start_position Start position.
             * @param end_position End position.
             */
            vfunc_to_lower(start_position: Iterable, end_position: Iterable): void;
            /**
             * change characters from start position to end position to uppercase.
             * @param start_position Start position.
             * @param end_position End position.
             */
            vfunc_to_upper(start_position: Iterable, end_position: Iterable): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Editor.ConstructorProps {}
    }

    export interface EditorConvertNamespace {
        $gtype: GObject.GType<EditorConvert>;
        prototype: EditorConvert;

        error_quark(): GLib.Quark;
    }
    interface EditorConvert extends Editor, EditorConvert.Interface {
        // Methods

        /**
         * change characters from start position to end position to lowercase
         * @param start_position Start position.
         * @param end_position End position.
         */
        to_lower(start_position: Iterable, end_position: Iterable): void;
        /**
         * change characters from start position to end position to uppercase.
         * @param start_position Start position.
         * @param end_position End position.
         */
        to_upper(start_position: Iterable, end_position: Iterable): void;
    }

    export const EditorConvert: EditorConvertNamespace & {
        new (): EditorConvert; // This allows `obj instanceof EditorConvert`
    };

    namespace EditorFactory {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface EditorFactoryNamespace {
        $gtype: GObject.GType<EditorFactory>;
        prototype: EditorFactory;

        error_quark(): GLib.Quark;
    }
    interface EditorFactory extends GObject.Object {}

    export const EditorFactory: EditorFactoryNamespace & {
        new (): EditorFactory; // This allows `obj instanceof EditorFactory`
    };

    namespace EditorFolds {
        /**
         * Interface for implementing EditorFolds.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Editor.Interface {
            // Virtual methods

            vfunc_close_all(): void;
            vfunc_open_all(): void;
            vfunc_toggle_current(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Editor.ConstructorProps {}
    }

    export interface EditorFoldsNamespace {
        $gtype: GObject.GType<EditorFolds>;
        prototype: EditorFolds;

        error_quark(): GLib.Quark;
    }
    interface EditorFolds extends Editor, EditorFolds.Interface {
        // Methods

        close_all(): void;
        open_all(): void;
        toggle_current(): void;
    }

    export const EditorFolds: EditorFoldsNamespace & {
        new (): EditorFolds; // This allows `obj instanceof EditorFolds`
    };

    namespace EditorGladeSignal {
        /**
         * Interface for implementing EditorGladeSignal.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Editor.Interface {
            // Virtual methods

            vfunc_drop(iterator: Iterable, signal_data: string): void;
            vfunc_drop_possible(iterator: Iterable): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends Editor.ConstructorProps {}
    }

    export interface EditorGladeSignalNamespace {
        $gtype: GObject.GType<EditorGladeSignal>;
        prototype: EditorGladeSignal;

        error_quark(): GLib.Quark;
    }
    interface EditorGladeSignal extends Editor, EditorGladeSignal.Interface {}

    export const EditorGladeSignal: EditorGladeSignalNamespace & {
        new (): EditorGladeSignal; // This allows `obj instanceof EditorGladeSignal`
    };

    namespace EditorGoto {
        /**
         * Interface for implementing EditorGoto.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Editor.Interface {
            // Virtual methods

            /**
             * Moves cursor to the end of the current block
             */
            vfunc_end_block(): void;
            /**
             * Moves cursor to matching brace
             */
            vfunc_matching_brace(): void;
            /**
             * Moves cursor to the start of the current block
             */
            vfunc_start_block(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Editor.ConstructorProps {}
    }

    export interface EditorGotoNamespace {
        $gtype: GObject.GType<EditorGoto>;
        prototype: EditorGoto;

        error_quark(): GLib.Quark;
    }
    interface EditorGoto extends Editor, EditorGoto.Interface {
        // Methods

        /**
         * Moves cursor to the end of the current block
         */
        end_block(): void;
        /**
         * Moves cursor to matching brace
         */
        matching_brace(): void;
        /**
         * Moves cursor to the start of the current block
         */
        start_block(): void;
    }

    export const EditorGoto: EditorGotoNamespace & {
        new (): EditorGoto; // This allows `obj instanceof EditorGoto`
    };

    namespace EditorHover {
        /**
         * Interface for implementing EditorHover.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Editor.Interface {
            // Virtual methods

            /**
             * Show `info` as tooltip
             * @param position
             * @param info String to display
             */
            vfunc_display(position: Iterable, info: string): void;
            vfunc_hover_leave(position: Iterable): void;
            vfunc_hover_over(position: Iterable): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Editor.ConstructorProps {}
    }

    export interface EditorHoverNamespace {
        $gtype: GObject.GType<EditorHover>;
        prototype: EditorHover;

        error_quark(): GLib.Quark;
    }
    interface EditorHover extends Editor, EditorHover.Interface {
        // Methods

        /**
         * Show `info` as tooltip
         * @param position
         * @param info String to display
         */
        display(position: Iterable, info: string): void;
    }

    export const EditorHover: EditorHoverNamespace & {
        new (): EditorHover; // This allows `obj instanceof EditorHover`
    };

    namespace EditorLanguage {
        /**
         * Interface for implementing EditorLanguage.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Editor.Interface {
            // Virtual methods

            /**
             * Return the name of the currently used language
             */
            vfunc_get_language(): string;
            vfunc_get_language_name(language: string): string;
            /**
             * Return a list of languages supported by the editor
             * Note: These list contains the names in the form
             * the editor implementation knows them
             */
            vfunc_get_supported_languages(): string[];
            vfunc_language_changed(language: string): void;
            /**
             * Force the editor to use a given language
             * @param language Language
             */
            vfunc_set_language(language: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Editor.ConstructorProps {}
    }

    export interface EditorLanguageNamespace {
        $gtype: GObject.GType<EditorLanguage>;
        prototype: EditorLanguage;

        error_quark(): GLib.Quark;
    }
    interface EditorLanguage extends Editor, EditorLanguage.Interface {
        // Methods

        /**
         * Return the name of the currently used language
         */
        get_language(): string;
        get_language_name(language: string): string;
        /**
         * Return a list of languages supported by the editor
         * Note: These list contains the names in the form
         * the editor implementation knows them
         */
        get_supported_languages(): string[];
        /**
         * Force the editor to use a given language
         * @param language Language
         */
        set_language(language: string): void;
    }

    export const EditorLanguage: EditorLanguageNamespace & {
        new (): EditorLanguage; // This allows `obj instanceof EditorLanguage`
    };

    namespace EditorLineMode {
        /**
         * Interface for implementing EditorLineMode.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Editor.Interface {
            // Virtual methods

            /**
             * Set the line ending mode to the given `mode` and convert all line end
             * characters in the buffer to `mode` line end characters.
             * @param mode Line mode to convert.
             */
            vfunc_convert(mode: EditorLineModeType): void;
            /**
             * Convert EOL characters to majority of line mode. This is helpful
             * when the buffer contains mixed line modes and we want to fix it.
             */
            vfunc_fix(): void;
            /**
             * Get current line ending mode. It is auto-detected from the
             * buffer contents.
             */
            vfunc_get(): EditorLineModeType;
            /**
             * Set the line ending mode to the given `mode`. Existing line end
             * characters in the buffer are not touched. Only the newly added
             * texts will have `mode` line end characters.
             * @param mode Line mode to set.
             */
            vfunc_set(mode: EditorLineModeType): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Editor.ConstructorProps {}
    }

    export interface EditorLineModeNamespace {
        $gtype: GObject.GType<EditorLineMode>;
        prototype: EditorLineMode;

        error_quark(): GLib.Quark;
    }
    interface EditorLineMode extends Editor, EditorLineMode.Interface {
        // Methods

        /**
         * Set the line ending mode to the given `mode` and convert all line end
         * characters in the buffer to `mode` line end characters.
         * @param mode Line mode to convert.
         */
        convert(mode: EditorLineModeType | null): void;
        /**
         * Convert EOL characters to majority of line mode. This is helpful
         * when the buffer contains mixed line modes and we want to fix it.
         */
        fix(): void;
        /**
         * Get current line ending mode. It is auto-detected from the
         * buffer contents.
         */
        get(): EditorLineModeType;
        /**
         * Set the line ending mode to the given `mode`. Existing line end
         * characters in the buffer are not touched. Only the newly added
         * texts will have `mode` line end characters.
         * @param mode Line mode to set.
         */
        set(mode: EditorLineModeType | null): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
    }

    export const EditorLineMode: EditorLineModeNamespace & {
        new (): EditorLineMode; // This allows `obj instanceof EditorLineMode`
    };

    namespace EditorSearch {
        /**
         * Interface for implementing EditorSearch.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Editor.Interface {
            // Virtual methods

            /**
             * Search backward from end to start
             * @param search String to search for
             * @param case_sensitive
             * @param start Where to search from
             * @param end Where to stop searching
             */
            vfunc_backward(
                search: string,
                case_sensitive: boolean,
                start: EditorCell,
                end: EditorCell,
            ): [boolean, EditorCell, EditorCell];
            /**
             * Search forward from start to end
             * @param search String to search for
             * @param case_sensitive
             * @param start Where to search from
             * @param end Where to stop searching
             */
            vfunc_forward(
                search: string,
                case_sensitive: boolean,
                start: EditorCell,
                end: EditorCell,
            ): [boolean, EditorCell, EditorCell];
        }

        // Constructor properties interface

        interface ConstructorProps extends Editor.ConstructorProps {}
    }

    export interface EditorSearchNamespace {
        $gtype: GObject.GType<EditorSearch>;
        prototype: EditorSearch;

        error_quark(): GLib.Quark;
    }
    interface EditorSearch extends Editor, EditorSearch.Interface {
        // Methods

        /**
         * Search backward from end to start
         * @param search String to search for
         * @param case_sensitive
         * @param start Where to search from
         * @param end Where to stop searching
         */
        backward(
            search: string,
            case_sensitive: boolean,
            start: EditorCell,
            end: EditorCell,
        ): [boolean, EditorCell, EditorCell];
        /**
         * Search forward from start to end
         * @param search String to search for
         * @param case_sensitive
         * @param start Where to search from
         * @param end Where to stop searching
         */
        forward(
            search: string,
            case_sensitive: boolean,
            start: EditorCell,
            end: EditorCell,
        ): [boolean, EditorCell, EditorCell];
    }

    export const EditorSearch: EditorSearchNamespace & {
        new (): EditorSearch; // This allows `obj instanceof EditorSearch`
    };

    namespace EditorSelection {
        /**
         * Interface for implementing EditorSelection.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Editor.Interface {
            // Virtual methods

            /**
             * Gets curerntly selected text in editor.
             */
            vfunc_get(): string;
            /**
             * Returns TRUE if editor has any text selected. The selection
             * positions can be retrieved with ianjuta_editor_selection_get_start()
             * and ianjuta_editor_selection_get_end().
             */
            vfunc_has_selection(): boolean;
            /**
             * Replaces currently selected text with the `text`. Only `length` amount
             * of characters are used from `text` buffer to replace.
             * @param text Replacement text.
             * @param length Length of the text to used in @text.
             */
            vfunc_replace(text: string, length: number): void;
            vfunc_select_all(): void;
            /**
             * Selects current block of code. The definition of block of code
             * depends on highlight mode used (programming language). Some
             * highlight mode does not have block concept, in that case this
             * method does not do anything.
             */
            vfunc_select_block(): void;
            /**
             * Select current function block. The definition of function block
             * depends on highlight mode used (programming language). Some
             * highlight mode does not have function concept, in that case this
             * method does not do anything.
             */
            vfunc_select_function(): void;
            /**
             * Select characters between start and end. Start and end don't have to
             * be ordered.
             * @param start Begin of selection
             * @param end End of selection
             * @param scroll Scroll selection onscreen
             */
            vfunc_set(start: Iterable, end: Iterable, scroll: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Editor.ConstructorProps {}
    }

    export interface EditorSelectionNamespace {
        $gtype: GObject.GType<EditorSelection>;
        prototype: EditorSelection;

        error_quark(): GLib.Quark;
    }
    interface EditorSelection extends Editor, EditorSelection.Interface {
        // Methods

        /**
         * Gets curerntly selected text in editor.
         * @returns A newly allocated buffer of currently selected characters. NULL if there is no selection. The returned buffer must be freed after use.
         */
        get(): string;
        /**
         * Returns TRUE if editor has any text selected. The selection
         * positions can be retrieved with ianjuta_editor_selection_get_start()
         * and ianjuta_editor_selection_get_end().
         * @returns TRUE if there is text selected else FALSE.
         */
        has_selection(): boolean;
        /**
         * Replaces currently selected text with the `text`. Only `length` amount
         * of characters are used from `text` buffer to replace.
         * @param text Replacement text.
         * @param length Length of the text to used in @text.
         */
        replace(text: string, length: number): void;
        select_all(): void;
        /**
         * Selects current block of code. The definition of block of code
         * depends on highlight mode used (programming language). Some
         * highlight mode does not have block concept, in that case this
         * method does not do anything.
         */
        select_block(): void;
        /**
         * Select current function block. The definition of function block
         * depends on highlight mode used (programming language). Some
         * highlight mode does not have function concept, in that case this
         * method does not do anything.
         */
        select_function(): void;
        /**
         * Select characters between start and end. Start and end don't have to
         * be ordered.
         * @param start Begin of selection
         * @param end End of selection
         * @param scroll Scroll selection onscreen
         */
        set(start: Iterable, end: Iterable, scroll: boolean): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
    }

    export const EditorSelection: EditorSelectionNamespace & {
        new (): EditorSelection; // This allows `obj instanceof EditorSelection`
    };

    namespace EditorTip {
        /**
         * Interface for implementing EditorTip.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Editor.Interface {
            // Virtual methods

            /**
             * Cancels the last shown tooltip
             */
            vfunc_cancel(): void;
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
            vfunc_show(tips: string[], position: Iterable): void;
            vfunc_visible(): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends Editor.ConstructorProps {}
    }

    export interface EditorTipNamespace {
        $gtype: GObject.GType<EditorTip>;
        prototype: EditorTip;

        error_quark(): GLib.Quark;
    }
    interface EditorTip extends Editor, EditorTip.Interface {
        // Methods

        /**
         * Cancels the last shown tooltip
         */
        cancel(): void;
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
        show(tips: string[], position: Iterable): void;
        visible(): boolean;
    }

    export const EditorTip: EditorTipNamespace & {
        new (): EditorTip; // This allows `obj instanceof EditorTip`
    };

    namespace EditorView {
        /**
         * Interface for implementing EditorView.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Editor.Interface {
            // Virtual methods

            /**
             * Creates a new view for the editor. The newly created view gets
             * the user focus and scrolls to the same location as last view.
             */
            vfunc_create(): void;
            /**
             * Total number of views currently present. It will never be less
             * than 1. Invalid return values are considered error condition.
             */
            vfunc_get_count(): number;
            /**
             * Removes currently focused editor view. It does not remove the
             * last view of the editor. That is, if currently there is only
             * one view of the editor, this function does nothing.
             */
            vfunc_remove_current(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Editor.ConstructorProps {}
    }

    export interface EditorViewNamespace {
        $gtype: GObject.GType<EditorView>;
        prototype: EditorView;

        error_quark(): GLib.Quark;
    }
    interface EditorView extends Editor, EditorView.Interface {
        // Methods

        /**
         * Creates a new view for the editor. The newly created view gets
         * the user focus and scrolls to the same location as last view.
         */
        create(): void;
        /**
         * Total number of views currently present. It will never be less
         * than 1. Invalid return values are considered error condition.
         */
        get_count(): number;
        /**
         * Removes currently focused editor view. It does not remove the
         * last view of the editor. That is, if currently there is only
         * one view of the editor, this function does nothing.
         */
        remove_current(): void;
    }

    export const EditorView: EditorViewNamespace & {
        new (): EditorView; // This allows `obj instanceof EditorView`
    };

    namespace EditorZoom {
        /**
         * Interface for implementing EditorZoom.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Editor.Interface {
            // Virtual methods

            /**
             * Zoom in
             */
            vfunc_in(): void;
            /**
             * Zoom out
             */
            vfunc_out(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Editor.ConstructorProps {}
    }

    export interface EditorZoomNamespace {
        $gtype: GObject.GType<EditorZoom>;
        prototype: EditorZoom;

        error_quark(): GLib.Quark;
    }
    interface EditorZoom extends Editor, EditorZoom.Interface {
        // Methods

        /**
         * Zoom in
         */
        ['in'](): void;
        /**
         * Zoom out
         */
        out(): void;
    }

    export const EditorZoom: EditorZoomNamespace & {
        new (): EditorZoom; // This allows `obj instanceof EditorZoom`
    };

    namespace Environment {
        /**
         * Interface for implementing Environment.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Convert a directory in the environment to a directory outside.
             * It is useful when the environment use chroot. Take care that
             * the input directory string is freed using g_free but and you need to
             * free the output string when not needed.
             * @param dir A directory path in the environment
             */
            vfunc_get_real_directory(dir: string): string;
            /**
             * Override a command to work in another build environment
             * @param dirp a pointer on the working directory
             * @param argvp a pointer on a NULL terminated string array     containing the command name in argv[0] and all    its argument
             * @param envp a pointer on a NULL terminated string array    containing all additional environment variable    used by the command
             */
            vfunc_override(dirp: string, argvp: string, envp: string): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface EnvironmentNamespace {
        $gtype: GObject.GType<Environment>;
        prototype: Environment;
    }
    interface Environment extends GObject.Object, Environment.Interface {
        // Methods

        /**
         * Convert a directory in the environment to a directory outside.
         * It is useful when the environment use chroot. Take care that
         * the input directory string is freed using g_free but and you need to
         * free the output string when not needed.
         * @param dir A directory path in the environment
         * @returns The directory path outside the environment
         */
        get_real_directory(dir: string): string;
        /**
         * Override a command to work in another build environment
         * @param dirp a pointer on the working directory
         * @param argvp a pointer on a NULL terminated string array     containing the command name in argv[0] and all    its argument
         * @param envp a pointer on a NULL terminated string array    containing all additional environment variable    used by the command
         * @returns FALSE if there is an error.
         */
        override(dirp: string, argvp: string, envp: string): boolean;
    }

    export const Environment: EnvironmentNamespace & {
        new (): Environment; // This allows `obj instanceof Environment`
    };

    namespace File {
        /**
         * Interface for implementing File.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Returns the file that was opened with ianjuta_file_open().
             */
            vfunc_get_file(): Gio.File;
            /**
             * The implementor opens the given file.
             * @param file file to open.
             */
            vfunc_open(file: Gio.File): void;
            vfunc_opened(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface FileNamespace {
        $gtype: GObject.GType<File>;
        prototype: File;

        error_quark(): GLib.Quark;
    }
    interface File extends GObject.Object, File.Interface {
        // Methods

        /**
         * Returns the file that was opened with ianjuta_file_open().
         * @returns The last file opened.
         */
        get_file(): Gio.File;
        /**
         * The implementor opens the given file.
         * @param file file to open.
         */
        open(file: Gio.File): void;
    }

    export const File: FileNamespace & {
        new (): File; // This allows `obj instanceof File`
    };

    namespace FileLoader {
        /**
         * Interface for implementing FileLoader.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_peek_interface(file: Gio.File): string;
        }

        // Constructor properties interface

        interface ConstructorProps extends Loader.ConstructorProps {}
    }

    export interface FileLoaderNamespace {
        $gtype: GObject.GType<FileLoader>;
        prototype: FileLoader;

        error_quark(): GLib.Quark;
    }
    interface FileLoader extends Loader, FileLoader.Interface {
        // Methods

        peek_interface(file: Gio.File): string;
    }

    export const FileLoader: FileLoaderNamespace & {
        new (): FileLoader; // This allows `obj instanceof FileLoader`
    };

    namespace FileManager {
        /**
         * Interface for implementing FileManager.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_section_changed(file: Gio.File): void;
            /**
             * fixme
             * @param root_uri fixme
             */
            vfunc_set_root(root_uri: string): void;
            /**
             * fixme.
             * @param file File to select
             */
            vfunc_set_selected(file: Gio.File): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface FileManagerNamespace {
        $gtype: GObject.GType<FileManager>;
        prototype: FileManager;

        error_quark(): GLib.Quark;
    }
    interface FileManager extends GObject.Object, FileManager.Interface {
        // Methods

        /**
         * fixme
         * @param root_uri fixme
         */
        set_root(root_uri: string): void;
        /**
         * fixme.
         * @param file File to select
         */
        set_selected(file: Gio.File): void;
    }

    export const FileManager: FileManagerNamespace & {
        new (): FileManager; // This allows `obj instanceof FileManager`
    };

    namespace FileSavable {
        /**
         * Interface for implementing FileSavable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends File.Interface {
            // Virtual methods

            /**
             * Return is the file is in conflict. It means the file
             * has been modified externally and the user needs to
             * tell which version he wants to use.
             */
            vfunc_is_conflict(): boolean;
            /**
             * Returns the dirty status of the content.
             */
            vfunc_is_dirty(): boolean;
            /**
             * Return is the file is read-only
             */
            vfunc_is_read_only(): boolean;
            /**
             * Saves the content to the original file from which it was loaded.
             * The signal saved is always emitted even if the save fails.
             */
            vfunc_save(): void;
            /**
             * Saves the content to a different File.
             * The signal saved is always emitted even if the save fails.
             * @param file File to save the content.
             */
            vfunc_save_as(file: Gio.File): void;
            vfunc_saved(file: Gio.File): void;
            /**
             * if `dirty` is TRUE, sets dirty for the content. Save point will be
             * left and the content will be considered not saved. Otherwise,
             * content will considered saved and save-point will be entered.
             * @param dirty Whether the file was edited or not
             */
            vfunc_set_dirty(dirty: boolean): void;
            vfunc_update_save_ui(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends File.ConstructorProps {}
    }

    export interface FileSavableNamespace {
        $gtype: GObject.GType<FileSavable>;
        prototype: FileSavable;

        error_quark(): GLib.Quark;
    }
    interface FileSavable extends File, FileSavable.Interface {
        // Methods

        /**
         * Return is the file is in conflict. It means the file
         * has been modified externally and the user needs to
         * tell which version he wants to use.
         * @returns TRUE if conflict, FALSE otherwise.
         */
        is_conflict(): boolean;
        /**
         * Returns the dirty status of the content.
         * @returns TRUE if dirty, FALSE otherwise.
         */
        is_dirty(): boolean;
        /**
         * Return is the file is read-only
         * @returns TRUE if read-only, FALSE otherwise.
         */
        is_read_only(): boolean;
        /**
         * Saves the content to the original file from which it was loaded.
         * The signal saved is always emitted even if the save fails.
         */
        save(): void;
        /**
         * Saves the content to a different File.
         * The signal saved is always emitted even if the save fails.
         * @param file File to save the content.
         */
        save_as(file: Gio.File): void;
        /**
         * if `dirty` is TRUE, sets dirty for the content. Save point will be
         * left and the content will be considered not saved. Otherwise,
         * content will considered saved and save-point will be entered.
         * @param dirty Whether the file was edited or not
         */
        set_dirty(dirty: boolean): void;
    }

    export const FileSavable: FileSavableNamespace & {
        new (): FileSavable; // This allows `obj instanceof FileSavable`
    };

    namespace Glade {
        /**
         * Interface for implementing Glade.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_add_association(master: string, slave: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface GladeNamespace {
        $gtype: GObject.GType<Glade>;
        prototype: Glade;

        error_quark(): GLib.Quark;
    }
    interface Glade extends GObject.Object, Glade.Interface {
        // Methods

        add_association(master: string, slave: string): void;
    }

    export const Glade: GladeNamespace & {
        new (): Glade; // This allows `obj instanceof Glade`
    };

    namespace Help {
        /**
         * Interface for implementing Help.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Search for string `query` in the help and display the result
             * @param query string to search in the help
             */
            vfunc_search(query: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface HelpNamespace {
        $gtype: GObject.GType<Help>;
        prototype: Help;

        error_quark(): GLib.Quark;
    }
    interface Help extends GObject.Object, Help.Interface {
        // Methods

        /**
         * Search for string `query` in the help and display the result
         * @param query string to search in the help
         */
        search(query: string): void;
    }

    export const Help: HelpNamespace & {
        new (): Help; // This allows `obj instanceof Help`
    };

    namespace Indenter {
        /**
         * Interface for implementing Indenter.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Indent the area between `start` and `end` according to the indentation rules
             * of the programming language. Usually implemented by language support plugins.
             * Only one indenter can be loaded at a time.
             * Note: Indenters always affect full lines, so start and end will be moved
             * according to the next line start/end.
             * @param start Start of the area to indent
             * @param end End of the area to indent
             */
            vfunc_indent(start: Iterable, end: Iterable): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface IndenterNamespace {
        $gtype: GObject.GType<Indenter>;
        prototype: Indenter;

        error_quark(): GLib.Quark;
    }
    interface Indenter extends GObject.Object, Indenter.Interface {
        // Methods

        /**
         * Indent the area between `start` and `end` according to the indentation rules
         * of the programming language. Usually implemented by language support plugins.
         * Only one indenter can be loaded at a time.
         * Note: Indenters always affect full lines, so start and end will be moved
         * according to the next line start/end.
         * @param start Start of the area to indent
         * @param end End of the area to indent
         */
        indent(start: Iterable, end: Iterable): void;
    }

    export const Indenter: IndenterNamespace & {
        new (): Indenter; // This allows `obj instanceof Indenter`
    };

    namespace Indicable {
        /**
         * Interface for implementing Indicable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Clear all indicators
             */
            vfunc_clear(): void;
            /**
             * Set an indicator
             * @param begin_location Location where the indication should start
             * @param end_location Location where the indication should end
             * @param indicator the indicator to use
             */
            vfunc_set(begin_location: Iterable, end_location: Iterable, indicator: IndicableIndicator): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface IndicableNamespace {
        $gtype: GObject.GType<Indicable>;
        prototype: Indicable;

        error_quark(): GLib.Quark;
    }
    interface Indicable extends GObject.Object, Indicable.Interface {
        // Methods

        /**
         * Clear all indicators
         */
        clear(): void;
        /**
         * Set an indicator
         * @param begin_location Location where the indication should start
         * @param end_location Location where the indication should end
         * @param indicator the indicator to use
         */
        set(begin_location: Iterable, end_location: Iterable, indicator: IndicableIndicator | null): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
    }

    export const Indicable: IndicableNamespace & {
        new (): Indicable; // This allows `obj instanceof Indicable`
    };

    namespace Iterable {
        /**
         * Interface for implementing Iterable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Assigns the iter position from `src_iter`.
             * @param src_iter Source iter from which to copy the assignment.
             */
            vfunc_assign(src_iter: Iterable): void;
            /**
             * Clones the iterable. The returned iterable object must be unreffed
             * when done.
             */
            vfunc_clone(): Iterable;
            /**
             * Compares the position of `iter2` with this `obj`. Returns -1
             * value if this `obj` is smaller than `iter2`. Returns +1 value
             * if this `obj` is larger than `iter2`. And returns 0 if both are equal.
             * If you want difference of the iter positions, use
             * #ianjuta_iterable_diff(). This method is meant for fast comparision.
             * @param iter2 Second iter to compare.
             */
            vfunc_compare(iter2: Iterable): number;
            /**
             * Compares the position of `iter2` with this `obj` and returns difference
             * in position of the two (`obj` - `iter2`).
             * @param iter2 Second iter to differenciate.
             */
            vfunc_diff(iter2: Iterable): number;
            /**
             * Set iter to first element position. Returns FALSE if
             * there is no element in the iterable (hence does not have first).
             * The iter points to the first valid item.
             */
            vfunc_first(): boolean;
            /**
             * Length of the iterable (number of elements indexable by it).
             */
            vfunc_get_length(): number;
            /**
             * Index of the current iter in the iterable. It will be
             * from 0 to length - 1 (ianjuta_iter_get_length()) if iter is pointed
             * at valid element. It will return -1 if iter is pointed at end-iter.
             */
            vfunc_get_position(): number;
            /**
             * Set iter position to end-iter (one past last element) position.
             * Returns FALSE if there is no element in the iterable (already
             * at end-iter).
             */
            vfunc_last(): boolean;
            /**
             * Set the iter position to next element position. Iter can go until one
             * item past the last item and lands in end-iter. end-iter does not point
             * to any valid item and signifies end of the list. Returns FALSE if iter
             * was already at end-iter (iter can not go past it) and remains pointed
             * to the end-iter.
             */
            vfunc_next(): boolean;
            /**
             * Set the iter position to previous element position. Returns FALSE if
             * there is no previous element and the iter remains pointed to the first
             * element.
             */
            vfunc_previous(): boolean;
            /**
             * Sets the current position of the iter to `position`. The given `position`
             * must be from 0 to length - 1 (#ianjuta_iter_get_length()) to point to
             * a valid element. Passing `position` < 0 will set it to end-iter. It
             * returns TRUE for the above cases. FLASE will be returned, if
             * out-of-range `position` is passed (`position` > length - 1) and iter is
             * set to end-iter.
             * @param position New position for the iter.
             */
            vfunc_set_position(position: number): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface IterableNamespace {
        $gtype: GObject.GType<Iterable>;
        prototype: Iterable;

        error_quark(): GLib.Quark;
    }
    interface Iterable extends GObject.Object, Iterable.Interface {
        // Methods

        /**
         * Assigns the iter position from `src_iter`.
         * @param src_iter Source iter from which to copy the assignment.
         */
        assign(src_iter: Iterable): void;
        /**
         * Clones the iterable. The returned iterable object must be unreffed
         * when done.
         * @returns A new instance of this iterable pointing at the same location.
         */
        clone(): Iterable;
        /**
         * Compares the position of `iter2` with this `obj`. Returns -1
         * value if this `obj` is smaller than `iter2`. Returns +1 value
         * if this `obj` is larger than `iter2`. And returns 0 if both are equal.
         * If you want difference of the iter positions, use
         * #ianjuta_iterable_diff(). This method is meant for fast comparision.
         * @param iter2 Second iter to compare.
         * @returns 0 if equal, -1 if @obj is smaller than @iter2 or +1 if @obj is larger than @iter2.
         */
        compare(iter2: Iterable): number;
        /**
         * Compares the position of `iter2` with this `obj` and returns difference
         * in position of the two (`obj` - `iter2`).
         * @param iter2 Second iter to differenciate.
         * @returns The position difference of @obj - @iter2
         */
        diff(iter2: Iterable): number;
        /**
         * Set iter to first element position. Returns FALSE if
         * there is no element in the iterable (hence does not have first).
         * The iter points to the first valid item.
         * @returns TRUE if sucessful, other FALSE.
         */
        first(): boolean;
        /**
         * Length of the iterable (number of elements indexable by it).
         * @returns total length of the list.
         */
        get_length(): number;
        /**
         * Index of the current iter in the iterable. It will be
         * from 0 to length - 1 (ianjuta_iter_get_length()) if iter is pointed
         * at valid element. It will return -1 if iter is pointed at end-iter.
         * @returns integer index, or -1 for end-iter.
         */
        get_position(): number;
        /**
         * Set iter position to end-iter (one past last element) position.
         * Returns FALSE if there is no element in the iterable (already
         * at end-iter).
         * @returns TRUE if sucessful, other FALSE.
         */
        last(): boolean;
        /**
         * Set the iter position to next element position. Iter can go until one
         * item past the last item and lands in end-iter. end-iter does not point
         * to any valid item and signifies end of the list. Returns FALSE if iter
         * was already at end-iter (iter can not go past it) and remains pointed
         * to the end-iter.
         * @returns TRUE if sucessful, otherwise FALSE if already at end-iter.
         */
        next(): boolean;
        /**
         * Set the iter position to previous element position. Returns FALSE if
         * there is no previous element and the iter remains pointed to the first
         * element.
         * @returns TRUE if sucessful, other FALSE.
         */
        previous(): boolean;
        /**
         * Sets the current position of the iter to `position`. The given `position`
         * must be from 0 to length - 1 (#ianjuta_iter_get_length()) to point to
         * a valid element. Passing `position` < 0 will set it to end-iter. It
         * returns TRUE for the above cases. FLASE will be returned, if
         * out-of-range `position` is passed (`position` > length - 1) and iter is
         * set to end-iter.
         * @param position New position for the iter.
         * @returns TRUE if successfully set (i.e. @position is within the range or end-iter). otherwise returns FALSE (i.e. @position is out of data range).
         */
        set_position(position: number): boolean;
    }

    export const Iterable: IterableNamespace & {
        new (): Iterable; // This allows `obj instanceof Iterable`
    };

    namespace IterableTree {
        /**
         * Interface for implementing IterableTree.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Iterable.Interface {
            // Virtual methods

            /**
             * Iter position set to first child of current iter. If there is no
             * children, return NULL (iter position is not changed).
             */
            vfunc_children(): boolean;
            /**
             * Returns true if current iter has children
             */
            vfunc_has_children(): boolean;
            /**
             * Set iter position to parent of curernt iter. If there is no parent,
             * returns FALSE (current iter position is not changed)
             */
            vfunc_parent(): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends Iterable.ConstructorProps {}
    }

    export interface IterableTreeNamespace {
        $gtype: GObject.GType<IterableTree>;
        prototype: IterableTree;

        error_quark(): GLib.Quark;
    }
    interface IterableTree extends Iterable, IterableTree.Interface {
        // Methods

        /**
         * Iter position set to first child of current iter. If there is no
         * children, return NULL (iter position is not changed).
         * @returns TRUE if sucessful, otherwise FALSE.
         */
        children(): boolean;
        /**
         * Returns true if current iter has children
         * @returns TRUE if there are children, otherwise FALSE.
         */
        has_children(): boolean;
        /**
         * Set iter position to parent of curernt iter. If there is no parent,
         * returns FALSE (current iter position is not changed)
         * @returns TRUE if sucessful, otherwise FALSE.
         */
        parent(): boolean;
    }

    export const IterableTree: IterableTreeNamespace & {
        new (): IterableTree; // This allows `obj instanceof IterableTree`
    };

    namespace Language {
        /**
         * Interface for implementing Language.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Conviniece method to get the id directly from the editor
             * @param editor An object implementing IAnjutaEditorLanguage
             */
            vfunc_get_from_editor(editor: EditorLanguage): LanguageId;
            vfunc_get_from_mime_type(mime_type: string): LanguageId;
            vfunc_get_from_string(string: string): LanguageId;
            vfunc_get_languages(): number[];
            vfunc_get_make_target(id: LanguageId): string;
            vfunc_get_name(id: LanguageId): string;
            /**
             * Conviniece method to get the name directly from the editor
             * @param editor An object implementing IAnjutaEditorLanguage
             */
            vfunc_get_name_from_editor(editor: EditorLanguage): string;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface LanguageNamespace {
        $gtype: GObject.GType<Language>;
        prototype: Language;

        error_quark(): GLib.Quark;
    }
    interface Language extends GObject.Object, Language.Interface {
        // Methods

        /**
         * Conviniece method to get the id directly from the editor
         * @param editor An object implementing IAnjutaEditorLanguage
         * @returns A valid language id or 0
         */
        get_from_editor(editor: EditorLanguage): LanguageId;
        get_from_mime_type(mime_type: string): LanguageId;
        get_from_string(string: string): LanguageId;
        get_languages(): number[];
        get_make_target(id: LanguageId): string;
        get_name(id: LanguageId): string;
        /**
         * Conviniece method to get the name directly from the editor
         * @param editor An object implementing IAnjutaEditorLanguage
         * @returns A language name or NULL
         */
        get_name_from_editor(editor: EditorLanguage): string;
    }

    export const Language: LanguageNamespace & {
        new (): Language; // This allows `obj instanceof Language`
    };

    namespace LanguageProvider {
        /**
         * Interface for implementing LanguageProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Provider.Interface {
            // Virtual methods

            /**
             * Searches for a calltip in the cache
             * @param call_context name of the method to show a calltip
             */
            vfunc_get_calltip_cache(call_context: string): string[];
            /**
             * Searches for a calltip context
             * @param iter current cursor position
             */
            vfunc_get_calltip_context(iter: Iterable): string;
            /**
             * Creates a new calltip
             * @param call_context name of the method to create a new calltip
             * @param iter current cursor position
             */
            vfunc_new_calltip(call_context: string, iter: Iterable): void;
            /**
             * Show completion for the context at position `iter`. The provider should
             * call ianjuta_editor_assist_proposals here to add proposals to the list.
             *
             * Note that this is called after every character typed and the list of proposals
             * has to be completely renewed.
             * @param iter the text iter where the provider should be populated
             */
            vfunc_populate_completions(iter: Iterable): Iterable | null;
        }

        // Constructor properties interface

        interface ConstructorProps extends Provider.ConstructorProps {}
    }

    export interface LanguageProviderNamespace {
        $gtype: GObject.GType<LanguageProvider>;
        prototype: LanguageProvider;

        error_quark(): GLib.Quark;
    }
    interface LanguageProvider extends Provider, LanguageProvider.Interface {
        // Methods

        /**
         * Searches for a calltip in the cache
         * @param call_context name of the method to show a calltip
         * @returns tips for the          searched name of the method from the cache,          NULL if nothing found
         */
        get_calltip_cache(call_context: string): string[];
        /**
         * Searches for a calltip context
         * @param iter current cursor position
         * @returns name of the method to show a calltip for or NULL
         */
        get_calltip_context(iter: Iterable): string;
        /**
         * Creates a new calltip
         * @param call_context name of the method to create a new calltip
         * @param iter current cursor position
         */
        new_calltip(call_context: string, iter: Iterable): void;
        /**
         * Show completion for the context at position `iter`. The provider should
         * call ianjuta_editor_assist_proposals here to add proposals to the list.
         *
         * Note that this is called after every character typed and the list of proposals
         * has to be completely renewed.
         * @param iter the text iter where the provider should be populated
         * @returns the iter where the provider populated, NULL otherwise
         */
        populate_completions(iter: Iterable): Iterable | null;
    }

    export const LanguageProvider: LanguageProviderNamespace & {
        new (): LanguageProvider; // This allows `obj instanceof LanguageProvider`
    };

    namespace Loader {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface LoaderNamespace {
        $gtype: GObject.GType<Loader>;
        prototype: Loader;

        error_quark(): GLib.Quark;
    }
    interface Loader extends GObject.Object {}

    export const Loader: LoaderNamespace & {
        new (): Loader; // This allows `obj instanceof Loader`
    };

    namespace Markable {
        /**
         * Interface for implementing Markable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Delete the `marker` from all locations.
             * @param marker Marker to delete.
             */
            vfunc_delete_all_markers(marker: MarkableMarker): void;
            /**
             * Check if the `marker` is set at the given `location`.
             * @param location Location to check.
             * @param marker Marker to check.
             */
            vfunc_is_marker_set(location: number, marker: MarkableMarker): boolean;
            /**
             * Location where a marker is set could have moved by some operation in
             * the implementation. To retrieve the correct location where the marker
             * has moved, pass the handle retured by ianjuta_markable_mark() to this
             * method.
             * @param handle Handle of location.
             */
            vfunc_location_from_handle(handle: number): number;
            /**
             * Marks the specified location with the given marker type. Location is
             * implementation depenedent. For example, for an editor location means
             * lines where markers are set.
             * @param location Location at which the marker to set.
             * @param marker Type of marker to be used
             * @param tooltip optional tooltip displayed with the marker
             */
            vfunc_mark(location: number, marker: MarkableMarker, tooltip?: string | null): number;
            vfunc_marker_clicked(double_click: boolean, location: number): void;
            /**
             * Clears the `marker` at given `location`.
             * @param location Location where the marker is set.
             * @param marker The marker to unset.
             */
            vfunc_unmark(location: number, marker: MarkableMarker): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface MarkableNamespace {
        $gtype: GObject.GType<Markable>;
        prototype: Markable;
    }
    interface Markable extends GObject.Object, Markable.Interface {
        // Methods

        /**
         * Delete the `marker` from all locations.
         * @param marker Marker to delete.
         */
        delete_all_markers(marker: MarkableMarker | null): void;
        /**
         * Check if the `marker` is set at the given `location`.
         * @param location Location to check.
         * @param marker Marker to check.
         * @returns TRUE if the marker is set at the location, other false.
         */
        is_marker_set(location: number, marker: MarkableMarker | null): boolean;
        /**
         * Location where a marker is set could have moved by some operation in
         * the implementation. To retrieve the correct location where the marker
         * has moved, pass the handle retured by ianjuta_markable_mark() to this
         * method.
         * @param handle Handle of location.
         * @returns Current location where the marker was set.
         */
        location_from_handle(handle: number): number;
        /**
         * Marks the specified location with the given marker type. Location is
         * implementation depenedent. For example, for an editor location means
         * lines where markers are set.
         * @param location Location at which the marker to set.
         * @param marker Type of marker to be used
         * @param tooltip optional tooltip displayed with the marker
         * @returns Handle of the location marked. Can be used later to obtain new location, if it has been moved due to addetions/deletions in the implementor object.
         */
        mark(location: number, marker: MarkableMarker | null, tooltip?: string | null): number;
        /**
         * Clears the `marker` at given `location`.
         * @param location Location where the marker is set.
         * @param marker The marker to unset.
         */
        unmark(location: number, marker: MarkableMarker | null): void;
    }

    export const Markable: MarkableNamespace & {
        new (): Markable; // This allows `obj instanceof Markable`
    };

    namespace MessageManager {
        /**
         * Interface for implementing MessageManager.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Remove view from the message-manager. The view
             * will become invalid.
             * @param view The view to remove
             */
            vfunc_remove_view(view: MessageView): void;
            /**
             * Set view to be on top of the notebook.
             * @param view A message view
             */
            vfunc_set_current_view(view: MessageView): void;
            /**
             * Sets the icon of view.
             * @param view A message view
             * @param icon Sets the icon of view.
             */
            vfunc_set_view_icon(view: MessageView, icon: GdkPixbuf.PixbufAnimation): void;
            /**
             * Sets the icon of view.
             * @param view A message view
             * @param icon Sets the icon of view.
             */
            vfunc_set_view_icon_from_stock(view: MessageView, icon: string): void;
            /**
             * Sets the title of view.
             * @param view A message view
             * @param title Sets the title of view.
             */
            vfunc_set_view_title(view: MessageView, title: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface MessageManagerNamespace {
        $gtype: GObject.GType<MessageManager>;
        prototype: MessageManager;
    }
    interface MessageManager extends GObject.Object, MessageManager.Interface {
        // Methods

        /**
         * Remove view from the message-manager. The view
         * will become invalid.
         * @param view The view to remove
         */
        remove_view(view: MessageView): void;
        /**
         * Set view to be on top of the notebook.
         * @param view A message view
         */
        set_current_view(view: MessageView): void;
        /**
         * Sets the icon of view.
         * @param view A message view
         * @param icon Sets the icon of view.
         */
        set_view_icon(view: MessageView, icon: GdkPixbuf.PixbufAnimation): void;
        /**
         * Sets the icon of view.
         * @param view A message view
         * @param icon Sets the icon of view.
         */
        set_view_icon_from_stock(view: MessageView, icon: string): void;
        /**
         * Sets the title of view.
         * @param view A message view
         * @param title Sets the title of view.
         */
        set_view_title(view: MessageView, title: string): void;
    }

    export const MessageManager: MessageManagerNamespace & {
        new (): MessageManager; // This allows `obj instanceof MessageManager`
    };

    namespace MessageView {
        /**
         * Interface for implementing MessageView.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Append the message with summary displayed and details displayed as tooltip
             * @param type type of the message
             * @param summary summary of the message
             * @param details details of the message
             */
            vfunc_append(type: MessageViewType, summary: string, details: string): void;
            /**
             * Appends the text in buffer. Flushes the buffer where a newline is found.
             * by emiiting buffer_flushed signal. The string is expected to be utf8.
             * @param text text to show as message
             */
            vfunc_buffer_append(text: string): void;
            vfunc_buffer_flushed(line: string): void;
            /**
             * Clear all messages in buffer
             */
            vfunc_clear(): void;
            /**
             * Get the currently selected message
             */
            vfunc_get_current_message(): string;
            vfunc_message_clicked(message: string): void;
            /**
             * Select next message (of type INFO, WARNING or ERROR)
             */
            vfunc_select_next(): void;
            /**
             * Select previous message
             */
            vfunc_select_previous(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface MessageViewNamespace {
        $gtype: GObject.GType<MessageView>;
        prototype: MessageView;

        error_quark(): GLib.Quark;
    }
    interface MessageView extends GObject.Object, MessageView.Interface {
        // Methods

        /**
         * Append the message with summary displayed and details displayed as tooltip
         * @param type type of the message
         * @param summary summary of the message
         * @param details details of the message
         */
        append(type: MessageViewType | null, summary: string, details: string): void;
        /**
         * Appends the text in buffer. Flushes the buffer where a newline is found.
         * by emiiting buffer_flushed signal. The string is expected to be utf8.
         * @param text text to show as message
         */
        buffer_append(text: string): void;
        /**
         * Clear all messages in buffer
         */
        clear(): void;
        /**
         * Get the currently selected message
         */
        get_current_message(): string;
        /**
         * Select next message (of type INFO, WARNING or ERROR)
         */
        select_next(): void;
        /**
         * Select previous message
         */
        select_previous(): void;
    }

    export const MessageView: MessageViewNamespace & {
        new (): MessageView; // This allows `obj instanceof MessageView`
    };

    namespace PluginFactory {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PluginFactoryNamespace {
        $gtype: GObject.GType<PluginFactory>;
        prototype: PluginFactory;
    }
    interface PluginFactory extends GObject.Object {}

    export const PluginFactory: PluginFactoryNamespace & {
        new (): PluginFactory; // This allows `obj instanceof PluginFactory`
    };

    namespace Preferences {
        /**
         * Interface for implementing Preferences.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * When called, the plugin should install it's preferences
             * @param prefs AnjutaPreferences to install to
             */
            vfunc_merge(prefs: Anjuta.Preferences): void;
            /**
             * When called, the plugin should uninstall it's preferences
             * @param prefs AnjutaPreferences to install to
             */
            vfunc_unmerge(prefs: Anjuta.Preferences): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PreferencesNamespace {
        $gtype: GObject.GType<Preferences>;
        prototype: Preferences;

        error_quark(): GLib.Quark;
    }
    interface Preferences extends GObject.Object, Preferences.Interface {
        // Methods

        /**
         * When called, the plugin should install it's preferences
         * @param prefs AnjutaPreferences to install to
         */
        merge(prefs: Anjuta.Preferences): void;
        /**
         * When called, the plugin should uninstall it's preferences
         * @param prefs AnjutaPreferences to install to
         */
        unmerge(prefs: Anjuta.Preferences): void;
    }

    export const Preferences: PreferencesNamespace & {
        new (): Preferences; // This allows `obj instanceof Preferences`
    };

    namespace Print {
        /**
         * Interface for implementing Print.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Print the plugin (the file in case of the editor). In most cases this will show
             * a print dialog
             */
            vfunc_print(): void;
            /**
             * Show print preview dialog
             */
            vfunc_print_preview(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PrintNamespace {
        $gtype: GObject.GType<Print>;
        prototype: Print;

        error_quark(): GLib.Quark;
    }
    interface Print extends GObject.Object, Print.Interface {
        // Methods

        /**
         * Print the plugin (the file in case of the editor). In most cases this will show
         * a print dialog
         */
        print(): void;
        /**
         * Show print preview dialog
         */
        print_preview(): void;
    }

    export const Print: PrintNamespace & {
        new (): Print; // This allows `obj instanceof Print`
    };

    namespace Project {
        /**
         * Interface for implementing Project.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Create a new node and insert it after sibling
             * @param parent Parent
             * @param sibling Sibling
             * @param type Node type
             * @param file Optional file object for the node
             * @param name Optional name for the node
             */
            vfunc_add_node_after(
                parent: Anjuta.ProjectNode,
                sibling: Anjuta.ProjectNode | null,
                type: Anjuta.ProjectNodeType,
                file?: Gio.File | null,
                name?: string | null,
            ): Anjuta.ProjectNode;
            /**
             * Create a new node and insert it before sibling
             * @param parent Parent
             * @param sibling Sibling
             * @param type Node type
             * @param file Optional file object for the node
             * @param name Optional name for the node
             */
            vfunc_add_node_before(
                parent: Anjuta.ProjectNode,
                sibling: Anjuta.ProjectNode | null,
                type: Anjuta.ProjectNodeType,
                file?: Gio.File | null,
                name?: string | null,
            ): Anjuta.ProjectNode;
            vfunc_file_changed(node?: any | null): void;
            /**
             * Return a list of possible node;
             */
            vfunc_get_node_info(): Anjuta.ProjectNodeInfo[];
            /**
             * Get root_node
             */
            vfunc_get_root(): Anjuta.ProjectNode;
            /**
             * Return TRUE if the project is loaded;
             */
            vfunc_is_loaded(): boolean;
            /**
             * Reload a project node
             * @param node Project node to reload
             */
            vfunc_load_node(node: Anjuta.ProjectNode): boolean;
            vfunc_node_changed(node: any | null, error: GLib.Error): void;
            vfunc_node_loaded(node: any | null, error: GLib.Error): void;
            vfunc_node_saved(node: any | null, error: GLib.Error): void;
            /**
             * Remove a node
             * @param node Node
             */
            vfunc_remove_node(node: Anjuta.ProjectNode): boolean;
            /**
             * Remove a property of the node
             * @param node Node
             * @param id Property
             * @param name Name for map property
             */
            vfunc_remove_property(node: Anjuta.ProjectNode, id: string, name?: string | null): boolean;
            /**
             * Save a project node
             * @param node Project node to save
             */
            vfunc_save_node(node: Anjuta.ProjectNode): boolean;
            /**
             * Change a properties on node.
             * @param node Node
             * @param id Property
             * @param name Name for map property
             * @param value Value
             */
            vfunc_set_property(
                node: Anjuta.ProjectNode,
                id: string,
                name: string | null,
                value: string,
            ): Anjuta.ProjectProperty | null;
            // Conflicted with GObject.Object.vfunc_set_property
            vfunc_set_property(...args: never[]): any;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ProjectNamespace {
        $gtype: GObject.GType<Project>;
        prototype: Project;
    }
    interface Project extends GObject.Object, Project.Interface {
        // Methods

        /**
         * Create a new node and insert it after sibling
         * @param parent Parent
         * @param sibling Sibling
         * @param type Node type
         * @param file Optional file object for the node
         * @param name Optional name for the node
         * @returns The new node, NULL if error
         */
        add_node_after(
            parent: Anjuta.ProjectNode,
            sibling: Anjuta.ProjectNode | null,
            type: Anjuta.ProjectNodeType | null,
            file?: Gio.File | null,
            name?: string | null,
        ): Anjuta.ProjectNode;
        /**
         * Create a new node and insert it before sibling
         * @param parent Parent
         * @param sibling Sibling
         * @param type Node type
         * @param file Optional file object for the node
         * @param name Optional name for the node
         * @returns The new node, NULL if error
         */
        add_node_before(
            parent: Anjuta.ProjectNode,
            sibling: Anjuta.ProjectNode | null,
            type: Anjuta.ProjectNodeType | null,
            file?: Gio.File | null,
            name?: string | null,
        ): Anjuta.ProjectNode;
        /**
         * Return a list of possible node;
         * @returns A list containing information on all node supported by the project.
         */
        get_node_info(): Anjuta.ProjectNodeInfo[];
        /**
         * Get root_node
         * @returns The root node
         */
        get_root(): Anjuta.ProjectNode;
        /**
         * Return TRUE if the project is loaded;
         * @returns TRUE if the project is completely loaded.
         */
        is_loaded(): boolean;
        /**
         * Reload a project node
         * @param node Project node to reload
         * @returns TRUE if the node has been loaded without error
         */
        load_node(node: Anjuta.ProjectNode): boolean;
        /**
         * Remove a node
         * @param node Node
         * @returns TRUE if the node can be removed
         */
        remove_node(node: Anjuta.ProjectNode): boolean;
        /**
         * Remove a property of the node
         * @param node Node
         * @param id Property
         * @param name Name for map property
         * @returns TRUE if the node is removed
         */
        remove_property(node: Anjuta.ProjectNode, id: string, name?: string | null): boolean;
        /**
         * Save a project node
         * @param node Project node to save
         * @returns TRUE if the node has been saved without error
         */
        save_node(node: Anjuta.ProjectNode): boolean;
        /**
         * Change a properties on node.
         * @param node Node
         * @param id Property
         * @param name Name for map property
         * @param value Value
         * @returns The new property of NULL if the property cannot be set
         */
        set_property(
            node: Anjuta.ProjectNode,
            id: string,
            name: string | null,
            value: string,
        ): Anjuta.ProjectProperty | null;
        // Conflicted with GObject.Object.set_property
        set_property(...args: never[]): any;
    }

    export const Project: ProjectNamespace & {
        new (): Project; // This allows `obj instanceof Project`
    };

    namespace ProjectBackend {
        /**
         * Interface for implementing ProjectBackend.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Create a new Anjuta project.
             * @param file Project file or directory
             */
            vfunc_new_project(file: Gio.File): Project;
            /**
             * Check if the directory contains a project supported by this
             * backend.
             * @param directory Project file or directory
             */
            vfunc_probe(directory: Gio.File): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ProjectBackendNamespace {
        $gtype: GObject.GType<ProjectBackend>;
        prototype: ProjectBackend;

        error_quark(): GLib.Quark;
    }
    interface ProjectBackend extends GObject.Object, ProjectBackend.Interface {
        // Methods

        /**
         * Create a new Anjuta project.
         * @param file Project file or directory
         * @returns An object implementing the #IAnjutaProject interface.
         */
        new_project(file: Gio.File): Project;
        /**
         * Check if the directory contains a project supported by this
         * backend.
         * @param directory Project file or directory
         * @returns 0 if the project is invalid and > 0 if the project is valid.
         */
        probe(directory: Gio.File): number;
    }

    export const ProjectBackend: ProjectBackendNamespace & {
        new (): ProjectBackend; // This allows `obj instanceof ProjectBackend`
    };

    namespace ProjectChooser {
        /**
         * Interface for implementing ProjectChooser.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_changed(): void;
            /**
             * Gets the currently selected element in the project chooser.
             */
            vfunc_get_selected(): Gio.File;
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
            vfunc_set_project_model(manager: ProjectManager, child_type: Anjuta.ProjectNodeType): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ProjectChooserNamespace {
        $gtype: GObject.GType<ProjectChooser>;
        prototype: ProjectChooser;

        error_quark(): GLib.Quark;
    }
    interface ProjectChooser extends GObject.Object, ProjectChooser.Interface {
        // Methods

        /**
         * Gets the currently selected element in the project chooser.
         * @returns A #GFile corresponding to the selected element in the project view or %NULL if no valid node is selected. The file is owned by the widget If you want to keep a pointer to the file you must add a refcount using g_object_ref().
         */
        get_selected(): Gio.File;
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
         * @returns TRUE if sucessful, other FALSE.
         */
        set_project_model(manager: ProjectManager, child_type: Anjuta.ProjectNodeType | null): boolean;
    }

    export const ProjectChooser: ProjectChooserNamespace & {
        new (): ProjectChooser; // This allows `obj instanceof ProjectChooser`
    };

    namespace ProjectManager {
        /**
         * Interface for implementing ProjectManager.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Prompts the user to add a new group to the project. The user can select
             * a parent group different from the one set as default.
             * @param name Group name or URI.
             * @param default_group A #GFile corresponding to the default parent group or 				%NULL if don't care.
             */
            vfunc_add_group(name: string, default_group?: Gio.File | null): Gio.File;
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
            vfunc_add_source(name: string, default_target?: Gio.File | null): Gio.File;
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
            vfunc_add_source_quiet(name: string, target: Gio.File): Gio.File;
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
            vfunc_add_sources(names: string[], default_target?: Gio.File | null): Gio.File[];
            /**
             * Prompts the user to add a new target to the project. The user can select
             * a parent group different from the one set as default.
             * @param name Target name or URI.
             * @param default_group A #GFile corresponding to the default parent group or 				%NULL if don't care.
             */
            vfunc_add_target(name: string, default_group?: Gio.File | null): Gio.File;
            vfunc_element_added(element: Gio.File): void;
            vfunc_element_removed(element: Gio.File): void;
            vfunc_element_selected(element: Gio.File): void;
            /**
             * Gets the capabilites of project whether it can add group, target
             * sources etc.
             */
            vfunc_get_capabilities(): number;
            /**
             * Recursively gets the list of all children below the corresponding
             * parent having the specify type.
             * @param parent A #GFile corresponding to the parent.
             * @param children_type Select one element type: source, group or target
             */
            vfunc_get_children(parent: Gio.File, children_type: number): Gio.File[];
            /**
             * Gets the current project.
             */
            vfunc_get_current_project(): Project;
            /**
             * Get a list of all elements of this type in the project.
             * @param element_type Select one element type: source, group or target
             */
            vfunc_get_elements(element_type: Anjuta.ProjectNodeType): Gio.File[];
            vfunc_get_packages(): string[];
            /**
             * Gets the currently selected element in the project manager view.
             */
            vfunc_get_selected(): Gio.File;
            /**
             * Get the type of the corresponding target: program, library...
             * @param target A #GFile corresponding to a target
             */
            vfunc_get_target_type(target: Gio.File): Anjuta.ProjectNodeType;
            /**
             * Get a list of targets in the project with the corresponding type.
             * @param target_type type of the target
             */
            vfunc_get_targets(target_type: Anjuta.ProjectNodeType): Gio.File[];
            /**
             * Gets whether a project is currently opened.
             */
            vfunc_is_open(): boolean;
            vfunc_project_loaded(error: GLib.Error): void;
            /**
             * Remove a source file from the project. If the file is used in several
             * targets, it is removed from all targets. The file could be removed from
             * the disk.
             * @param file A #GFile that will be removed from the project
             */
            vfunc_remove_file(file: Gio.File): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ProjectManagerNamespace {
        $gtype: GObject.GType<ProjectManager>;
        prototype: ProjectManager;

        error_quark(): GLib.Quark;
    }
    interface ProjectManager extends GObject.Object, ProjectManager.Interface {
        // Methods

        /**
         * Prompts the user to add a new group to the project. The user can select
         * a parent group different from the one set as default.
         * @param name Group name or URI.
         * @param default_group A #GFile corresponding to the default parent group or 				%NULL if don't care.
         * @returns A #GFile corresponding to the new group added in the project. You own the returned file; use g_object_unref() to release it.
         */
        add_group(name: string, default_group?: Gio.File | null): Gio.File;
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
         * @returns A #GFile corresponding to the new source file in the project view. You own the returned file; use g_object_unref() to release it.
         */
        add_source(name: string, default_target?: Gio.File | null): Gio.File;
        /**
         * Adds a file to the project without prompting the user.
         *
         * You can add non existing file. In this case the element_added
         * signal will be emitted with a non existing file. So it is
         * up to the caller to reemit this signal later when the file
         * is created.
         * @param name Source name or URI.
         * @param target A #GFile corresponding to the parent target or group.
         * @returns A #GFile corresponding to the new source file in the project view. You own the returned file; use g_object_unref() to release it.
         */
        add_source_quiet(name: string, target: Gio.File): Gio.File;
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
         * @returns A list of #GFile corresponding to all new source files added in the project. You own the list with the the returned files; use g_list_free() and g_object_unref() on each file to release them.
         */
        add_sources(names: string[], default_target?: Gio.File | null): Gio.File[];
        /**
         * Prompts the user to add a new target to the project. The user can select
         * a parent group different from the one set as default.
         * @param name Target name or URI.
         * @param default_group A #GFile corresponding to the default parent group or 				%NULL if don't care.
         * @returns A #GFile corresponding to the new target added in the project. You own the returned file; use g_object_unref() to release it.
         */
        add_target(name: string, default_group?: Gio.File | null): Gio.File;
        /**
         * Gets the capabilites of project whether it can add group, target
         * sources etc.
         * @returns Supported capabilites.
         */
        get_capabilities(): number;
        /**
         * Recursively gets the list of all children below the corresponding
         * parent having the specify type.
         * @param parent A #GFile corresponding to the parent.
         * @param children_type Select one element type: source, group or target
         * @returns The list of #GFile corresponding to all children or %NULL if the element has no children with the corresponding type. Free the returned * list with g_list_free() and the files with g_object_unref().
         */
        get_children(parent: Gio.File, children_type: number): Gio.File[];
        /**
         * Gets the current project.
         * @returns the currently active project. NULL if none is there.
         */
        get_current_project(): Project;
        /**
         * Get a list of all elements of this type in the project.
         * @param element_type Select one element type: source, group or target
         * @returns Get list of #GFile corresponding to all valid elements or %NULL if there are no elements of this type. Free the returned list with g_list_free() and the files with g_object_unref().
         */
        get_elements(element_type: Anjuta.ProjectNodeType | null): Gio.File[];
        get_packages(): string[];
        /**
         * Gets the currently selected element in the project manager view.
         * @returns A #GFile corresponding to the selected element in the project view. You own the returned file; use g_object_unref() to release it.
         */
        get_selected(): Gio.File;
        /**
         * Get the type of the corresponding target: program, library...
         * @param target A #GFile corresponding to a target
         * @returns Return the type of the target.
         */
        get_target_type(target: Gio.File): Anjuta.ProjectNodeType;
        /**
         * Get a list of targets in the project with the corresponding type.
         * @param target_type type of the target
         * @returns A list of #GFile corresponding to each target of the requested type or %NULL if none exists. Free the returned list with g_list_free() and the files with g_object_unref().
         */
        get_targets(target_type: Anjuta.ProjectNodeType | null): Gio.File[];
        /**
         * Gets whether a project is currently opened.
         * @returns %TRUE if a project is opened.
         */
        is_open(): boolean;
        /**
         * Remove a source file from the project. If the file is used in several
         * targets, it is removed from all targets. The file could be removed from
         * the disk.
         * @param file A #GFile that will be removed from the project
         * @returns %TRUE if the file has been removed from the project else %FALSE
         */
        remove_file(file: Gio.File): boolean;
    }

    export const ProjectManager: ProjectManagerNamespace & {
        new (): ProjectManager; // This allows `obj instanceof ProjectManager`
    };

    namespace Provider {
        /**
         * Interface for implementing Provider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Show completion for the context at position `iter`
             * @param iter position where the completion occurs
             * @param data data assigned to the proposal
             */
            vfunc_activate(iter: Iterable, data?: any | null): void;
            /**
             * Return a (translatable) name for the provider
             */
            vfunc_get_name(): string;
            /**
             * Get the iter where the current completion started
             */
            vfunc_get_start_iter(): Iterable;
            /**
             * Show completion for the context at position `iter`. The provider should
             * call ianjuta_editor_assist_proposals here to add proposals to the list.
             *
             * Note that this is called after every character typed and the list of proposals
             * has to be completely renewed.
             * @param iter the text iter where the provider should be populated
             */
            vfunc_populate(iter: Iterable): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ProviderNamespace {
        $gtype: GObject.GType<Provider>;
        prototype: Provider;

        error_quark(): GLib.Quark;
    }
    interface Provider extends GObject.Object, Provider.Interface {
        // Methods

        /**
         * Show completion for the context at position `iter`
         * @param iter position where the completion occurs
         * @param data data assigned to the proposal
         */
        activate(iter: Iterable, data?: any | null): void;
        /**
         * Return a (translatable) name for the provider
         */
        get_name(): string;
        /**
         * Get the iter where the current completion started
         * @returns current start iter
         */
        get_start_iter(): Iterable;
        /**
         * Show completion for the context at position `iter`. The provider should
         * call ianjuta_editor_assist_proposals here to add proposals to the list.
         *
         * Note that this is called after every character typed and the list of proposals
         * has to be completely renewed.
         * @param iter the text iter where the provider should be populated
         */
        populate(iter: Iterable): void;
    }

    export const Provider: ProviderNamespace & {
        new (): Provider; // This allows `obj instanceof Provider`
    };

    namespace SnippetsManager {
        /**
         * Interface for implementing SnippetsManager.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Insert snippet in the current editor.
             * @param key Trigger-key of the snippet
             * @param editing_session If after inserting the snippet there should be an editing session. Mark as FALSE if not interested in the dynamic capabilities of the snippet.
             */
            vfunc_insert(key: string, editing_session: boolean): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SnippetsManagerNamespace {
        $gtype: GObject.GType<SnippetsManager>;
        prototype: SnippetsManager;

        error_quark(): GLib.Quark;
    }
    interface SnippetsManager extends GObject.Object, SnippetsManager.Interface {
        // Methods

        /**
         * Insert snippet in the current editor.
         * @param key Trigger-key of the snippet
         * @param editing_session If after inserting the snippet there should be an editing session. Mark as FALSE if not interested in the dynamic capabilities of the snippet.
         */
        insert(key: string, editing_session: boolean): boolean;
    }

    export const SnippetsManager: SnippetsManagerNamespace & {
        new (): SnippetsManager; // This allows `obj instanceof SnippetsManager`
    };

    namespace Stream {
        /**
         * Interface for implementing Stream.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * The implementor opens the given stream.
             * @param stream Stream to open from.
             */
            vfunc_open(stream?: any | null): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface StreamNamespace {
        $gtype: GObject.GType<Stream>;
        prototype: Stream;

        error_quark(): GLib.Quark;
    }
    interface Stream extends GObject.Object, Stream.Interface {
        // Methods

        /**
         * The implementor opens the given stream.
         * @param stream Stream to open from.
         */
        open(stream?: any | null): void;
    }

    export const Stream: StreamNamespace & {
        new (): Stream; // This allows `obj instanceof Stream`
    };

    namespace StreamLoader {
        /**
         * Interface for implementing StreamLoader.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Peeks the stream and determines the interface which can load
             * this stream.
             * @param stream Stream to load
             */
            vfunc_peek_interface(stream?: any | null): string;
        }

        // Constructor properties interface

        interface ConstructorProps extends Loader.ConstructorProps {}
    }

    export interface StreamLoaderNamespace {
        $gtype: GObject.GType<StreamLoader>;
        prototype: StreamLoader;

        error_quark(): GLib.Quark;
    }
    interface StreamLoader extends Loader, StreamLoader.Interface {
        // Methods

        /**
         * Peeks the stream and determines the interface which can load
         * this stream.
         * @param stream Stream to load
         * @returns Plugin interface name that can load the stream.
         */
        peek_interface(stream?: any | null): string;
    }

    export const StreamLoader: StreamLoaderNamespace & {
        new (): StreamLoader; // This allows `obj instanceof StreamLoader`
    };

    namespace StreamSavable {
        /**
         * Interface for implementing StreamSavable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Stream.Interface {
            // Virtual methods

            vfunc_save(stream?: any | null): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    export interface StreamSavableNamespace {
        $gtype: GObject.GType<StreamSavable>;
        prototype: StreamSavable;

        error_quark(): GLib.Quark;
    }
    interface StreamSavable extends Stream, StreamSavable.Interface {
        // Methods

        save(stream?: any | null): void;
    }

    export const StreamSavable: StreamSavableNamespace & {
        new (): StreamSavable; // This allows `obj instanceof StreamSavable`
    };

    namespace Symbol {
        /**
         * Interface for implementing Symbol.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Retreives the boolean value of a boolean `field`.
             * @param field The field to retrieve.
             */
            vfunc_get_boolean(field: SymbolField): boolean;
            /**
             * A convenience method to get a small icon (16x16) representing the symbol
             * kind. You *need* a query with fields #IANJUTA_SYMBOL_FIELD_ACCESS and
             * #IANJUTA_SYMBOL_FIELD_KIND selected.
             */
            vfunc_get_icon(): GdkPixbuf.Pixbuf;
            /**
             * Retreives the integer value of an integer `field`.
             * @param field The field to retrieve.
             */
            vfunc_get_int(field: SymbolField): number;
            /**
             * Retreives the string value of a string `field`.
             * @param field The field to retrieve.
             */
            vfunc_get_string(field: SymbolField): string;
            /**
             * A convenience method to get value of #IANJUTA_SYMBOL_FIELD_TYPE
             * field typecasted to IAnjutaSymbolType. Numerical value is unchanged.
             */
            vfunc_get_sym_type(): SymbolType;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SymbolNamespace {
        $gtype: GObject.GType<Symbol>;
        prototype: Symbol;

        error_quark(): GLib.Quark;
    }
    interface Symbol extends GObject.Object, Symbol.Interface {
        // Methods

        /**
         * Retreives the boolean value of a boolean `field`.
         * @param field The field to retrieve.
         * @returns The boolean
         */
        get_boolean(field: SymbolField | null): boolean;
        /**
         * A convenience method to get a small icon (16x16) representing the symbol
         * kind. You *need* a query with fields #IANJUTA_SYMBOL_FIELD_ACCESS and
         * #IANJUTA_SYMBOL_FIELD_KIND selected.
         * @returns a Pixbuf icon representing the symbol. Ref the icon if you need to keep it.
         */
        get_icon(): GdkPixbuf.Pixbuf;
        /**
         * Retreives the integer value of an integer `field`.
         * @param field The field to retrieve.
         * @returns The integer
         */
        get_int(field: SymbolField | null): number;
        /**
         * Retreives the string value of a string `field`.
         * @param field The field to retrieve.
         * @returns The string
         */
        get_string(field: SymbolField | null): string;
        /**
         * A convenience method to get value of #IANJUTA_SYMBOL_FIELD_TYPE
         * field typecasted to IAnjutaSymbolType. Numerical value is unchanged.
         * @returns a #IAnjutaSymbolType
         */
        get_sym_type(): SymbolType;
    }

    export const Symbol: SymbolNamespace & {
        new (): Symbol; // This allows `obj instanceof Symbol`
    };

    namespace SymbolManager {
        /**
         * Interface for implementing SymbolManager.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Activates the package for searches in the global symbol database.
             * @param pkg_name Name of the package to activate. The colon char must be avoided.
             * @param pkg_version Version of the package. The colon char must be avoided.
             */
            vfunc_activate_package(pkg_name: string, pkg_version: string): boolean;
            /**
             * Deactivates all activate packages
             */
            vfunc_deactivate_all(): void;
            /**
             * Deactivates the package if it was found. If package is NULL, deactivate all
             * packages.
             * @param pkg_name name of the package. The colon char must be avoided.
             * @param pkg_version Version of the package. The colon char must be avoided.
             */
            vfunc_deactivate_package(pkg_name: string, pkg_version: string): void;
            vfunc_prj_scan_end(process_id: number): void;
            vfunc_sys_scan_end(process_id: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SymbolManagerNamespace {
        $gtype: GObject.GType<SymbolManager>;
        prototype: SymbolManager;

        error_quark(): GLib.Quark;
    }
    interface SymbolManager extends GObject.Object, SymbolManager.Interface {
        // Methods

        /**
         * Activates the package for searches in the global symbol database.
         * @param pkg_name Name of the package to activate. The colon char must be avoided.
         * @param pkg_version Version of the package. The colon char must be avoided.
         * @returns TRUE if the package was loaded (or will be loaded once scanned). FALSE if the version given was newer than the version in the database or the package was not found. In this case, add_package() should be called.
         */
        activate_package(pkg_name: string, pkg_version: string): boolean;
        /**
         * Deactivates all activate packages
         */
        deactivate_all(): void;
        /**
         * Deactivates the package if it was found. If package is NULL, deactivate all
         * packages.
         * @param pkg_name name of the package. The colon char must be avoided.
         * @param pkg_version Version of the package. The colon char must be avoided.
         */
        deactivate_package(pkg_name: string, pkg_version: string): void;
    }

    export const SymbolManager: SymbolManagerNamespace & {
        new (): SymbolManager; // This allows `obj instanceof SymbolManager`
    };

    namespace SymbolQuery {
        /**
         * Interface for implementing SymbolQuery.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_async_result(result: GObject.Object): void;
            vfunc_cancel(): void;
            /**
             * Sets the fields of Query.
             * @param n_fields Then number of fields to retrieve.
             * @param fields The fields to retrieve in the query. The array length must   be @n_fields.
             */
            vfunc_set_fields(n_fields: number, fields: SymbolField): void;
            /**
             * Sets the filescope search of Query.
             * @param filescope_search The filescope to search.
             */
            vfunc_set_file_scope(filescope_search: SymbolQueryFileScope): void;
            /**
             * Sets the bit mask of symbol type filters. if `include_types` is TRUE,
             * symbols satisfying the given symbol types are selected, otherwise
             * they are excluded.
             * @param filters The mode of query.
             * @param include_types TRUE if filter is positive, FALSE if reversed.
             */
            vfunc_set_filters(filters: SymbolType, include_types: boolean): void;
            /**
             * Sets the field with which result of query is grouped. As a result
             * there will be no duplicates of with this field.
             * @param field The field to group results.
             */
            vfunc_set_group_by(field: SymbolField): void;
            /**
             * Sets the limit of Query results. No more than `limit` results are
             * returned.
             * @param limit The limit of query.
             */
            vfunc_set_limit(limit: number): void;
            /**
             * Sets the mode of Query.
             * @param mode The mode of query.
             */
            vfunc_set_mode(mode: SymbolQueryMode): void;
            /**
             * Sets the offset index of Query results.
             * @param offset Offset of the resultset.
             */
            vfunc_set_offset(offset: number): void;
            /**
             * Sets the field with which result of query is ordered.
             * @param field The field to order the result.
             */
            vfunc_set_order_by(field: SymbolField): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SymbolQueryNamespace {
        $gtype: GObject.GType<SymbolQuery>;
        prototype: SymbolQuery;

        error_quark(): GLib.Quark;
    }
    interface SymbolQuery extends GObject.Object, SymbolQuery.Interface {
        // Methods

        cancel(): void;
        /**
         * Sets the fields of Query.
         * @param n_fields Then number of fields to retrieve.
         * @param fields The fields to retrieve in the query. The array length must   be @n_fields.
         */
        set_fields(n_fields: number, fields: SymbolField | null): void;
        /**
         * Sets the filescope search of Query.
         * @param filescope_search The filescope to search.
         */
        set_file_scope(filescope_search: SymbolQueryFileScope | null): void;
        /**
         * Sets the bit mask of symbol type filters. if `include_types` is TRUE,
         * symbols satisfying the given symbol types are selected, otherwise
         * they are excluded.
         * @param filters The mode of query.
         * @param include_types TRUE if filter is positive, FALSE if reversed.
         */
        set_filters(filters: SymbolType | null, include_types: boolean): void;
        /**
         * Sets the field with which result of query is grouped. As a result
         * there will be no duplicates of with this field.
         * @param field The field to group results.
         */
        set_group_by(field: SymbolField | null): void;
        /**
         * Sets the limit of Query results. No more than `limit` results are
         * returned.
         * @param limit The limit of query.
         */
        set_limit(limit: number): void;
        /**
         * Sets the mode of Query.
         * @param mode The mode of query.
         */
        set_mode(mode: SymbolQueryMode | null): void;
        /**
         * Sets the offset index of Query results.
         * @param offset Offset of the resultset.
         */
        set_offset(offset: number): void;
        /**
         * Sets the field with which result of query is ordered.
         * @param field The field to order the result.
         */
        set_order_by(field: SymbolField | null): void;
    }

    export const SymbolQuery: SymbolQueryNamespace & {
        new (): SymbolQuery; // This allows `obj instanceof SymbolQuery`
    };

    namespace Terminal {
        /**
         * Interface for implementing Terminal.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_child_exited(pid: number, status: number): void;
            /**
             * Run the command in a terminal, setting the working directory
             * and environment variables.
             * @param directory Working directory
             * @param command Command executed followed by arguments
             * @param environment List of additional environment variables
             */
            vfunc_execute_command(directory: string, command: string, environment: string[]): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface TerminalNamespace {
        $gtype: GObject.GType<Terminal>;
        prototype: Terminal;

        error_quark(): GLib.Quark;
    }
    interface Terminal extends GObject.Object, Terminal.Interface {
        // Methods

        /**
         * Run the command in a terminal, setting the working directory
         * and environment variables.
         * @param directory Working directory
         * @param command Command executed followed by arguments
         * @param environment List of additional environment variables
         * @returns Process ID
         */
        execute_command(directory: string, command: string, environment: string[]): number;
    }

    export const Terminal: TerminalNamespace & {
        new (): Terminal; // This allows `obj instanceof Terminal`
    };

    namespace Todo {
        /**
         * Interface for implementing Todo.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_load(file: Gio.File): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface TodoNamespace {
        $gtype: GObject.GType<Todo>;
        prototype: Todo;

        error_quark(): GLib.Quark;
    }
    interface Todo extends GObject.Object, Todo.Interface {
        // Methods

        load(file: Gio.File): void;
    }

    export const Todo: TodoNamespace & {
        new (): Todo; // This allows `obj instanceof Todo`
    };

    namespace Vcs {
        /**
         * Interface for implementing Vcs.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Add files to the VCS repository.
             * @param files List of List of files, represented as #Gfile objects, to add
             * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
             */
            vfunc_add(files: Gio.File[], notify: Anjuta.AsyncNotify): void;
            /**
             * Check out a copy of a code repository.
             * @param repository_location Location of repository to check out
             * @param dest Destination of checked out copy
             * @param cancel An optional #GCancellable object to cancel the operation, or NULL
             * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
             */
            vfunc_checkout(
                repository_location: string,
                dest: Gio.File,
                cancel: Gio.Cancellable | null,
                notify: Anjuta.AsyncNotify,
            ): void;
            /**
             * Remove files from the VCS repository.
             * @param files List of files, represented as #Gfile objects, to remove
             * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
             */
            vfunc_remove(files: Gio.File[], notify: Anjuta.AsyncNotify): void;
            vfunc_status_changed(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface VcsNamespace {
        $gtype: GObject.GType<Vcs>;
        prototype: Vcs;
    }
    interface Vcs extends GObject.Object, Vcs.Interface {
        // Methods

        /**
         * Add files to the VCS repository.
         * @param files List of List of files, represented as #Gfile objects, to add
         * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
         */
        add(files: Gio.File[], notify: Anjuta.AsyncNotify): void;
        /**
         * Check out a copy of a code repository.
         * @param repository_location Location of repository to check out
         * @param dest Destination of checked out copy
         * @param cancel An optional #GCancellable object to cancel the operation, or NULL
         * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
         */
        checkout(
            repository_location: string,
            dest: Gio.File,
            cancel: Gio.Cancellable | null,
            notify: Anjuta.AsyncNotify,
        ): void;
        /**
         * Remove files from the VCS repository.
         * @param files List of files, represented as #Gfile objects, to remove
         * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
         */
        remove(files: Gio.File[], notify: Anjuta.AsyncNotify): void;
    }

    export const Vcs: VcsNamespace & {
        new (): Vcs; // This allows `obj instanceof Vcs`
    };

    namespace Wizard {
        /**
         * Interface for implementing Wizard.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Called when the wizard should start after some user action
             */
            vfunc_activate(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface WizardNamespace {
        $gtype: GObject.GType<Wizard>;
        prototype: Wizard;

        error_quark(): GLib.Quark;
    }
    interface Wizard extends GObject.Object, Wizard.Interface {
        // Methods

        /**
         * Called when the wizard should start after some user action
         */
        activate(): void;
    }

    export const Wizard: WizardNamespace & {
        new (): Wizard; // This allows `obj instanceof Wizard`
    };

    type BuilderHandle = any;
    type LanguageId = number;
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

export default IAnjuta;

// END
