
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
import type Gdl from '@girs/gdl-3';

export namespace Anjuta {

    /**
     * Anjuta-3.0
     */


    /**
     * @gir-type Enum
     */
    export namespace CommandBarEntryType {
        export const $gtype: GObject.GType<CommandBarEntryType>;
    }

    /**
     * Specifies if the entry corresponds to a frame or a button.
     * Buttons are added to the last frame that appears before the button entry
     * @gir-type Enum
     */
    enum CommandBarEntryType {
        /**
         * This entry should create a frame in the
         * 								action bar. The entry's action name and
         * 								callback are ignored.
         */
        FRAME,
        /**
         * This entry adds a button to the action bar,
         * 								 either to the last frame to appear in the
         * 								 entry list before this entry, or to the top
         * 								 of the bar if no frames were previously
         * 								 added.
         */
        BUTTON,
    }


    /**
     * @gir-type Enum
     */
    export namespace CommandQueueExecuteMode {
        export const $gtype: GObject.GType<CommandQueueExecuteMode>;
    }

    /**
     * @gir-type Enum
     */
    enum CommandQueueExecuteMode {
        AUTOMATIC,
        MANUAL,
    }


    /**
     * Possibly errors that can occur during charset conversion
     * @gir-type Struct
     */
    class ConvertError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * The charset couldn't be autodetected
         */
        static FAILED: number;

        // Constructors
        constructor(options: { message: string, code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace LauncherOutputType {
        export const $gtype: GObject.GType<LauncherOutputType>;
    }

    /**
     * @gir-type Enum
     */
    enum LauncherOutputType {
        STDOUT,
        STDERR,
        PTY,
    }


    /**
     * Possible errors when parsing a plugin file
     * @gir-type Struct
     */
    class PluginDescriptionParseError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * Syntax of plugin file is invalid
         */
        static SYNTAX: number;

        /**
         * Invalid escape sequence
         */
        static ESCAPES: number;

        /**
         * Invalid characters
         */
        static CHARS: number;

        // Constructors
        constructor(options: { message: string, code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Struct
     */
    class PluginManagerError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * The factory for the plugin couldn't be found
         */
        static MISSING_FACTORY: number;

        /**
         * Unknown error
         */
        static ERROR_UNKNOWN: number;

        // Constructors
        constructor(options: { message: string, code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * Error codes returned by anjuta profile functions.
     * @gir-type Struct
     */
    class ProfileError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * Fail to read xml plugins list file.
         */
        static URI_READ_FAILED: number;

        /**
         * Fail to write xml plugins list file.
         */
        static URI_WRITE_FAILED: number;

        static PLUGIN_MISSING: number;

        // Constructors
        constructor(options: { message: string, code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace ProjectValueType {
        export const $gtype: GObject.GType<ProjectValueType>;
    }

    /**
     * @gir-type Enum
     */
    enum ProjectValueType {
        STRING,
        LIST,
        BOOLEAN,
        MAP,
    }


    /**
     * @gir-type Enum
     */
    export namespace SerializerMode {
        export const $gtype: GObject.GType<SerializerMode>;
    }

    /**
     * @gir-type Enum
     */
    enum SerializerMode {
        READ,
        WRITE,
    }


    /**
     * @gir-type Enum
     */
    export namespace SessionPhase {
        export const $gtype: GObject.GType<SessionPhase>;
    }

    /**
     * @gir-type Enum
     */
    enum SessionPhase {
        START,
        FIRST,
        NORMAL,
        LAST,
        END,
    }


    /**
     * @gir-type Struct
     */
    class ShellError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static EXIST: number;

        // Constructors
        constructor(options: { message: string, code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace ShellPlacement {
        export const $gtype: GObject.GType<ShellPlacement>;
    }

    /**
     * @gir-type Enum
     */
    enum ShellPlacement {
        NONE,
        TOP,
        BOTTOM,
        RIGHT,
        LEFT,
        CENTER,
        FLOATING,
    }


    const SYSTEM_PROFILE_NAME: string;

    const VCS_DEFAULT_STATUS_CODES: number;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function cclosure_marshal_VOID__BOXED_ENUM(closure: GObject.Closure, return_value: (GObject.Value | any), n_param_values: number, param_values: (GObject.Value | any), invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function cclosure_marshal_VOID__INT_INT_ULONG(closure: GObject.Closure, return_value: (GObject.Value | any), n_param_values: number, param_values: (GObject.Value | any), invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function cclosure_marshal_VOID__INT_OBJECT(closure: GObject.Closure, return_value: (GObject.Value | any), n_param_values: number, param_values: (GObject.Value | any), invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function cclosure_marshal_VOID__INT_STRING(closure: GObject.Closure, return_value: (GObject.Value | any), n_param_values: number, param_values: (GObject.Value | any), invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function cclosure_marshal_VOID__POINTER_OBJECT(closure: GObject.Closure, return_value: (GObject.Value | any), n_param_values: number, param_values: (GObject.Value | any), invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function cclosure_marshal_VOID__STRING_BOXED(closure: GObject.Closure, return_value: (GObject.Value | any), n_param_values: number, param_values: (GObject.Value | any), invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function cclosure_marshal_VOID__STRING_INT(closure: GObject.Closure, return_value: (GObject.Value | any), n_param_values: number, param_values: (GObject.Value | any), invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function cclosure_marshal_VOID__STRING_INT_STRING(closure: GObject.Closure, return_value: (GObject.Value | any), n_param_values: number, param_values: (GObject.Value | any), invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function cclosure_marshal_VOID__STRING_POINTER(closure: GObject.Closure, return_value: (GObject.Value | any), n_param_values: number, param_values: (GObject.Value | any), invocation_hint: null, marshal_data: null): void;

    /**
     * Check if autogen version 5 is installed.
     * @returns `true` if autogen is installed.
     */
    function check_autogen(): boolean;

    function convert_error_quark(): GLib.Quark;

    /**
     * @param content 
     * @param len 
     * @param encoding 
     * @param new_len 
     */
    function convert_from_utf8(content: string, len: (bigint | number), encoding: Encoding, new_len: (bigint | number)): string;

    /**
     * @param content 
     * @param len 
     * @param encoding 
     * @param new_len 
     */
    function convert_to_utf8(content: string, len: (bigint | number), encoding: Encoding, new_len: (bigint | number)): string;

    function encoding_get_current(): Encoding;

    /**
     * @param charset 
     */
    function encoding_get_from_charset(charset: string): Encoding;

    /**
     * @param index 
     */
    function encoding_get_from_index(index: number): Encoding;

    function encoding_get_utf8(): Encoding;

    /**
     * @param _package 
     */
    function pkg_config_get_version(_package: string): string;

    /**
     * @param name 
     */
    function pkg_config_ignore_package(name: string): boolean;

    function plugin_description_parse_error_quark(): GLib.Quark;

    function plugin_manager_error_quark(): GLib.Quark;

    function profile_error_quark(): GLib.Quark;

    function res_get_data_dir(): string;

    /**
     * @param pixfile 
     */
    function res_get_data_file(pixfile: string): string;

    function res_get_doc_dir(): string;

    /**
     * @param docfile 
     */
    function res_get_doc_file(docfile: string): string;

    function res_get_help_dir(): string;

    /**
     * @param locale 
     */
    function res_get_help_dir_locale(locale: string): string;

    /**
     * @param helpfile 
     */
    function res_get_help_file(helpfile: string): string;

    /**
     * @param helpfile 
     * @param locale 
     */
    function res_get_help_file_locale(helpfile: string, locale: string): string;

    function res_get_pixmap_dir(): string;

    /**
     * @param pixfile 
     */
    function res_get_pixmap_file(pixfile: string): string;

    /**
     * @param word 
     */
    function res_help_search(word: string): void;

    /**
     * @param url 
     */
    function res_url_show(url: string): void;

    function shell_error_quark(): GLib.Quark;

    /**
     * @param val 
     * @param r 
     * @param g 
     * @param b 
     */
    function util_color_from_string(val: string, r: number, g: number, b: number): void;

    /**
     * @param str 
     */
    function util_convert_to_utf8(str: string): string;

    /**
     * Copies `src` to `dest` and shows a dialog error in case is needed.
     * @param src the file where copy
     * @param dest the path to copy the `src`
     * @param show_error `true` to show a dialog error
     * @returns `true` if there was an error copying the file.
     */
    function util_copy_file(src: string, dest: string, show_error: boolean): boolean;

    /**
     * @param d 
     */
    function util_create_dir(d: string): boolean;

    /**
     * @param parent 
     * @param label 
     * @param default_value 
     * @param value 
     */
    function util_dialog_input(parent: Gtk.Window, label: string, default_value: string, value: string): boolean;

    /**
     * @param uri 
     * @param text 
     */
    function util_diff(uri: string, text: string): boolean;

    /**
     * @param str 
     */
    function util_escape_quotes(str: string): string;

    /**
     * @param dir 
     * @param command 
     */
    function util_execute_shell(dir: string, command: string): GLib.Pid;

    /**
     * @param dir 
     * @param command 
     */
    function util_execute_terminal_shell(dir: string, command: string): GLib.Pid;

    /**
     * Create a new file corresponding to arg, unlike g_file_new_for_commandline_arg,
     * keeps symbolic links in path name.
     * @param arg URI or relative or absolute file path
     * @returns A new GFile object
     */
    function util_file_new_for_commandline_arg(arg: string): Gio.File;

    function util_get_a_tmp_file(): string;

    /**
     * Get current working directory, unlike g_get_current_dir, keeps symbolic links
     * in path name.
     * @returns The current working directory.
     */
    function util_get_current_dir(): string;

    /**
     * @param info 
     */
    function util_get_file_info_mime_type(info: Gio.FileInfo): string;

    /**
     * @param file 
     */
    function util_get_file_mime_type(file: Gio.File): string;

    /**
     * @param uri 
     */
    function util_get_local_path_from_uri(uri: string): string;

    /**
     * @param path 
     */
    function util_get_real_path(path: string): string;

    function util_get_user_mail(): string;

    /**
     * @param parent 
     * @param doc_id 
     * @param item 
     */
    function util_help_display(parent: Gtk.Widget, doc_id: string, item: string): void;

    /**
     * @param names 
     */
    function util_install_files(names: string): boolean;

    /**
     * Return `true` if the file is an anjuta project file. It is implemented by
     * checking only the file extension. So it does not check the existence
     * of the file. But it is working on an URI if it does not containt a
     * fragment.
     * @param filename the file name
     * @returns `true` if the file is a project file, else `false`
     */
    function util_is_project_file(filename: string): boolean;

    /**
     * Return `true` if the file is an template project file. It is implemented by
     * checking only the file extension. So it does not check the existence
     * of the file. But it is working on an URI if it does not containt a
     * fragment.
     * @param filename the file name
     * @returns `true` if the file is a template file, else `false`
     */
    function util_is_template_file(filename: string): boolean;

    /**
     * @param lib 
     * @param show 
     */
    function util_package_is_installed(lib: string, show: boolean): boolean;

    /**
     * Parse arguments from a string to a GList.
     * @param string arguments
     * @returns A newly allocated GList of strings.
     */
    function util_parse_args_from_string(string: string): string[];

    /**
     * @param prog 
     * @param show 
     */
    function util_prog_is_installed(prog: string, show: boolean): boolean;

    /**
     * @param uri 
     */
    function util_replace_home_dir_with_tilde(uri: string): string;

    /**
     * @param name 
     */
    function util_set_anjuta_prefix(name: string): void;

    /**
     * @param id 
     */
    function util_set_user_mail(id: string): void;

    /**
     * Expand environment variables $(var_name) and tilde (~) in the input string.
     * @param string input string
     * @returns a newly-allocated string that must be freed with `g_free()`.
     */
    function util_shell_expand(string: string): string;

    /**
     * @param string 
     * @param truncate_length 
     */
    function util_str_middle_truncate(string: string, truncate_length: number): string;

    /**
     * @param r 
     * @param g 
     * @param b 
     */
    function util_string_from_color(r: number, g: number, b: number): string;

    /**
     * @param map 
     * @param type 
     */
    function util_string_from_type(map: UtilStringMap, type: number): string;

    /**
     * @param map 
     * @param str 
     */
    function util_type_from_string(map: UtilStringMap, str: string): number;

    /**
     * @param uri 
     */
    function util_uri_get_dirname(uri: string): string;

    /**
     * Retrieves the user's preferred shell.
     * @returns A newly allocated string that is the path to the shell.
     */
    function util_user_shell(): string;

    /**
     * Retrieves the user's preferred terminal.
     * @returns A newly allocated strings list. The first argument is the terminal program name. The following are the arguments needed to execute a command. The list has to be freed with g_strfreev
     */
    function util_user_terminal(): string[];

    /**
     * @gir-type Callback
     */
    interface AutogenFunc {
        (autogen: Autogen, data: null): void;
    }

    /**
     * @gir-type Callback
     */
    interface AutogenOutputFunc {
        (output: string, data: null): void;
    }

    /**
     * @gir-type Callback
     */
    interface CompletionFilterFunc {
        (item: null): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface CompletionNameFunc {
        (item: null): string;
    }

    /**
     * @gir-type Callback
     */
    interface LauncherOutputCallback {
        (launcher: Launcher, output_type: LauncherOutputType, chars: string): void;
    }

    /**
     * @gir-type Callback
     */
    interface PluginDescriptionLineFunc {
        (df: PluginDescription, key: string, locale: string, value: string, data: null): void;
    }

    /**
     * @gir-type Callback
     */
    interface PluginDescriptionSectionFunc {
        (df: PluginDescription, name: string): void;
    }

    /**
     * @gir-type Callback
     */
    interface PluginValueAdded {
        (plugin: Plugin, name: string, value: unknown): void;
    }

    /**
     * @gir-type Callback
     */
    interface PluginValueRemoved {
        (plugin: Plugin, name: string): void;
    }

    /**
     * @gir-type Callback
     */
    interface PreferencesCallback {
        (pr: Preferences, key: string, data: null): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface ProjectNodeForeachFunc {
        (node: ProjectNode): void;
    }

    /**
     * @gir-type Callback
     */
    interface ProjectNodeTraverseFunc {
        (node: ProjectNode, data: null): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface SavePromptSaveFunc {
        (save_prompt: SavePrompt, item: null): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface TokenForeachFunc {
        (token: Token, data: null): void;
    }

    /**
     * @gir-type Flags
     */
    export namespace ProjectNodeState {
        export const $gtype: GObject.GType<ProjectNodeState>;
    }

    /**
     * @gir-type Flags
     */
    enum ProjectNodeState {
        OK,
        MODIFIED,
        INCOMPLETE,
        LOADING,
        REMOVED,
        CAN_ADD_GROUP,
        CAN_ADD_TARGET,
        CAN_ADD_SOURCE,
        CAN_ADD_MODULE,
        CAN_ADD_PACKAGE,
        CAN_REMOVE,
        CAN_SAVE,
        REMOVE_FILE,
    }


    /**
     * @gir-type Flags
     */
    export namespace ProjectNodeType {
        export const $gtype: GObject.GType<ProjectNodeType>;
    }

    /**
     * @gir-type Flags
     */
    enum ProjectNodeType {
        UNKNOWN,
        SHAREDLIB,
        STATICLIB,
        PROGRAM,
        PYTHON,
        JAVA,
        LISP,
        HEADER,
        MAN,
        INFO,
        GENERIC,
        DATA,
        EXTRA,
        INTLTOOL,
        CONFIGURE,
        IDL,
        MKENUMS,
        GENMARSHAL,
        SCRIPT,
        ROOT_GROUP,
        LT_MODULE,
        PROXY,
        PROJECT,
        PRIMARY,
        EXECUTABLE,
        READ_ONLY,
        FRAME,
        ID_MASK,
        FLAG_MASK,
        TYPE_MASK,
        ROOT,
        GROUP,
        TARGET,
        SOURCE,
        MODULE,
        PACKAGE,
        VARIABLE,
        OBJECT,
    }


    /**
     * @gir-type Flags
     */
    export namespace ProjectPropertyFlags {
        export const $gtype: GObject.GType<ProjectPropertyFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum ProjectPropertyFlags {
        READ_ONLY,
        READ_WRITE,
        HIDDEN,
        STATIC,
    }


    /**
     * @gir-type Flags
     */
    export namespace TokenType {
        export const $gtype: GObject.GType<TokenType>;
    }

    /**
     * @gir-type Flags
     */
    enum TokenType {
        NONE,
        EOL,
        COMMA,
        TYPE,
        FIRST,
        FILE,
        MACRO,
        CONTENT,
        ARGUMENT,
        VALUE,
        EOV,
        PARSED,
        KEYWORD,
        OPERATOR,
        NAME,
        VARIABLE,
        DEFINITION,
        STATEMENT,
        NUMBER,
        JUNK,
        COMMENT,
        OPEN_QUOTE,
        CLOSE_QUOTE,
        ESCAPE,
        FUNCTION,
        SPACE,
        START,
        NEXT,
        LAST,
        ITEM,
        STRING,
        ERROR,
        WORD,
        LIST,
        ANY,
        USER,
        FLAGS,
        PUBLIC_FLAGS,
        IRRELEVANT,
        OPEN,
        CLOSE,
        SIGNIFICANT,
        PRIVATE_FLAGS,
        CASE_INSENSITIVE,
        STATIC,
        REMOVED,
        ADDED,
    }


    /**
     * @gir-type Flags
     */
    export namespace VcsStatus {
        export const $gtype: GObject.GType<VcsStatus>;
    }

    /**
     * @gir-type Flags
     */
    enum VcsStatus {
        MODIFIED,
        ADDED,
        DELETED,
        CONFLICTED,
        UPTODATE,
        LOCKED,
        MISSING,
        UNVERSIONED,
        IGNORED,
        ALL,
    }


    namespace AsyncCommand {
        // Signal signatures
        interface SignalSignatures extends Command.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends Command.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class AsyncCommand extends Command {
        static $gtype: GObject.GType<AsyncCommand>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AsyncCommand.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AsyncCommand.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof AsyncCommand.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AsyncCommand.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AsyncCommand.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AsyncCommand.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AsyncCommand.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AsyncCommand.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param command AnjutaAsyncCommand object
         */
        static get_error_message(command: Command): string;

        /**
         * Set the error message this async command resulted in
         * @param command AnjutaAsyncCommand object
         * @param error_message The error message that should be used
         */
        static set_error_message(command: Command, error_message: string): void;

        // Methods
        /**
         * Locks the command's built-in mutex.
         */
        lock(): void;

        /**
         * Unlocks the command's built-in mutex.
         */
        unlock(): void;
    }


    namespace AsyncNotify {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Notifies clients that the requested task has finished.
             * @signal
             */
            finished: () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class AsyncNotify extends GObject.Object {
        static $gtype: GObject.GType<AsyncNotify>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AsyncNotify.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AsyncNotify.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): AsyncNotify;

        // Signals
        /** @signal */
        connect<K extends keyof AsyncNotify.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AsyncNotify.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AsyncNotify.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AsyncNotify.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AsyncNotify.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AsyncNotify.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_finished(): void;

        // Methods
        /**
         * Gets the error set on `self`.
         */
        get_error(): void;

        /**
         * Emits the finished signal. This method should only be used by
         * interface methods themselves, not by clients.
         */
        notify_finished(): void;

        /**
         * Sets the error for an interface call. This method should only be used by
         * interface implementations themselves, not by clients.
         * @param error Error to set
         */
        set_error(error: GLib.Error): void;
    }


    namespace Autogen {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * A GObject wrapper for running GNU autogen.
     * @gir-type Class
     */
    class Autogen extends GObject.Object {
        static $gtype: GObject.GType<Autogen>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Autogen.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Autogen.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Autogen;

        // Signals
        /** @signal */
        connect<K extends keyof Autogen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Autogen.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Autogen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Autogen.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Autogen.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Autogen.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Remove all library pathes.
         */
        clear_library_path(): void;

        /**
         * Asynchronously execute autogen to generate the output, calling `func` when the
         * process is completed.
         * @param func A function called when autogen is terminated
         * @returns `true` if the file has been processed without error.
         */
        execute(func: (AutogenFunc | null)): boolean;

        /**
         * Get the list of all directories searched for files included in the autogen
         * templates.
         * @returns A list of directories. The content and the list itself are owned by the {@link Anjuta.Autogen} object and should not be modified or freed.
         */
        get_library_paths(): string[];

        /**
         * Read an autogen template file, optionally adding autogen markers.
         * 
         * To be recognized as an autogen template, the first line has to contain:
         * - the start marker
         * - "autogen5 template"
         * - the end marker
         * 
         * These markers are a custom sequence of up to 7 characters delimiting
         * the start and the end of autogen variables and macros.
         * 
         * This function can add this line using the value of `start_marker` and
         * `end_marker`. If this line is already present in the file,
         * `start_marker` and `end_marker` must be `null`.
         * @param filename name of the input template file
         * @param start_marker start marker string
         * @param end_marker end marker string
         * @returns `true` if the file has been read without error.
         */
        set_input_file(filename: string, start_marker: (string | null), end_marker: (string | null)): boolean;

        /**
         * Add a new directory in the list of autogen libraries path.
         * 
         * Autogen can include files. These included file will be searched by default
         * in the same directory than the template file. This functions allows you to
         * add other directories.
         * @param directory A path containing autogen library.
         */
        set_library_path(directory: string): void;

        /**
         * Define that autogen output should be send to a function as soon as it arrives.
         * @param func Function call each time we get new data from autogen
         * @returns `true` if there is no error.
         */
        set_output_callback(func: AutogenOutputFunc): boolean;

        /**
         * Define the name of the generated file.
         * @param filename name of the generated file
         * @returns `true` if the file has been set without error.
         */
        set_output_file(filename: string): boolean;

        /**
         * Write the autogen definition file. The definition file defined variables
         * those will be used, typically replaced, in the template files.
         * 
         * The hash table keys are the names of the variables. The name can include an
         * index in square bracket, by example "members[0]". All values are strings but
         * but they could include children using braces, by example
         * "{count=2; list="aa bb"}".
         * 
         * The file is created in a temporary directory and removed when the object
         * is destroyed.
         * @param values A hash table containing all definitions
         * @returns `true` if the file has been written without error,
         */
        write_definition_file(values: ({ [key: string]: any } | GLib.HashTable<string, string>)): boolean;
    }


    namespace CModule {
        // Signal signatures
        interface SignalSignatures extends GObject.TypeModule.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.TypeModule.ConstructorProps, GObject.TypePlugin.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class CModule extends GObject.TypeModule implements GObject.TypePlugin {
        static $gtype: GObject.GType<CModule>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CModule.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CModule.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](path: string, name: string): CModule;

        // Signals
        /** @signal */
        connect<K extends keyof CModule.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CModule.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CModule.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CModule.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CModule.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CModule.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Receives the error that occured when the module was loaded
         * @returns `true` if there was an Error, `false` otherwise
         */
        get_last_error(): boolean;

        /**
         * Calls the `complete_interface_info` function from the
         * {@link GObject.TypePluginClass} of `plugin`. There should be no need to use this
         * function outside of the GObject type system itself.
         * @param instance_type the {@link GObject.GType} of an instantiatable type to which the interface  is added
         * @param interface_type the {@link GObject.GType} of the interface whose info is completed
         * @param info the {@link GObject.InterfaceInfo} to fill in
         */
        complete_interface_info(instance_type: GObject.GType, interface_type: GObject.GType, info: GObject.InterfaceInfo): void;

        /**
         * Calls the `complete_type_info` function from the {@link GObject.TypePluginClass} of `plugin`.
         * There should be no need to use this function outside of the GObject
         * type system itself.
         * @param g_type the {@link GObject.GType} whose info is completed
         * @param info the {@link GObject.TypeInfo} struct to fill in
         * @param value_table the {@link GObject.TypeValueTable} to fill in
         */
        complete_type_info(g_type: GObject.GType, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void;

        /**
         * Calls the `unuse_plugin` function from the {@link GObject.TypePluginClass} of
         * `plugin`.  There should be no need to use this function outside of
         * the GObject type system itself.
         */
        unuse(): void;

        /**
         * Calls the `use_plugin` function from the {@link GObject.TypePluginClass} of
         * `plugin`.  There should be no need to use this function outside of
         * the GObject type system itself.
         */
        use(): void;

        /**
         * @param args 
         */
        // Conflicted with GObject.TypeModule.use
        use(...args: never[]): any;
    }


    namespace CPluginFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class CPluginFactory extends GObject.Object {
        static $gtype: GObject.GType<CPluginFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CPluginFactory.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CPluginFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): CPluginFactory;

        // Signals
        /** @signal */
        connect<K extends keyof CPluginFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CPluginFactory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CPluginFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CPluginFactory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CPluginFactory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CPluginFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Delete a {@link Anjuta.CPluginFactory} object.
         */
        free(): void;
    }


    namespace CellRendererCaptionedImage {
        // Signal signatures
        interface SignalSignatures extends Gtk.CellRenderer.SignalSignatures {
            "notify::pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-set": (pspec: GObject.ParamSpec) => void;
            "notify::editing": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::is-expanded": (pspec: GObject.ParamSpec) => void;
            "notify::is-expander": (pspec: GObject.ParamSpec) => void;
            "notify::mode": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::xpad": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::ypad": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.CellRenderer.ConstructorProps {
            pixbuf: GdkPixbuf.Pixbuf;
            text: string;
        }
    }

    /**
     * @gir-type Class
     */
    class CellRendererCaptionedImage extends Gtk.CellRenderer {
        static $gtype: GObject.GType<CellRendererCaptionedImage>;

        // Properties
        get pixbuf(): GdkPixbuf.Pixbuf;
        set pixbuf(val: GdkPixbuf.Pixbuf);

        get text(): string;
        set text(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CellRendererCaptionedImage.SignalSignatures;

        // Fields
        image: Gtk.CellRenderer;

        caption: Gtk.CellRenderer;

        // Constructors
        constructor(properties?: Partial<CellRendererCaptionedImage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): CellRendererCaptionedImage;

        // Signals
        /** @signal */
        connect<K extends keyof CellRendererCaptionedImage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellRendererCaptionedImage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CellRendererCaptionedImage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellRendererCaptionedImage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CellRendererCaptionedImage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CellRendererCaptionedImage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace CellRendererDiff {
        // Signal signatures
        interface SignalSignatures extends Gtk.CellRenderer.SignalSignatures {
            "notify::diff": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-set": (pspec: GObject.ParamSpec) => void;
            "notify::editing": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::is-expanded": (pspec: GObject.ParamSpec) => void;
            "notify::is-expander": (pspec: GObject.ParamSpec) => void;
            "notify::mode": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::xpad": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::ypad": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.CellRenderer.ConstructorProps {
            diff: string;
        }
    }

    /**
     * @gir-type Class
     */
    class CellRendererDiff extends Gtk.CellRenderer {
        static $gtype: GObject.GType<CellRendererDiff>;

        // Properties
        /**
         * @write-only
         */
        set diff(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CellRendererDiff.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CellRendererDiff.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): CellRendererDiff;

        // Signals
        /** @signal */
        connect<K extends keyof CellRendererDiff.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellRendererDiff.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CellRendererDiff.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellRendererDiff.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CellRendererDiff.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CellRendererDiff.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param diff 
         */
        set_diff(diff: string): void;
    }


    namespace CloseButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            "notify::always-show-image": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::image-position": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::relief": (pspec: GObject.ParamSpec) => void;
            "notify::use-stock": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::action-target": (pspec: GObject.ParamSpec) => void;
            "notify::related-action": (pspec: GObject.ParamSpec) => void;
            "notify::use-action-appearance": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Button.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class CloseButton extends Gtk.Button implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<CloseButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CloseButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CloseButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): CloseButton;

        // Signals
        /** @signal */
        connect<K extends keyof CloseButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CloseButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CloseButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CloseButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CloseButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CloseButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get action_name(): (string | null);
        set action_name(val: (string | null));

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get actionName(): (string | null);
        set actionName(val: (string | null));

        /** @category Inherited from Gtk.Actionable */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);

        /** @category Inherited from Gtk.Actionable */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get related_action(): Gtk.Action;
        set related_action(val: Gtk.Action);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get relatedAction(): Gtk.Action;
        set relatedAction(val: Gtk.Action);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get use_action_appearance(): boolean;
        set use_action_appearance(val: boolean);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get useActionAppearance(): boolean;
        set useActionAppearance(val: boolean);

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @returns the action name, or `null` if none is set
         */
        get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         */
        set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         */
        set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         * 
         * `detailed_action_name` is a string in the format accepted by
         * `g_action_parse_detailed_name()`.
         * 
         * (Note that prior to version 3.22.25,
         * this function is only usable for actions with a simple "s" target, and
         * `detailed_action_name` must be of the form `"action::target"` where
         * `action` is the action name and `target` is the string to use
         * as the target.)
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @virtual
         */
        vfunc_get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         * @virtual
         */
        vfunc_set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         * @virtual
         */
        vfunc_set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * This is a utility function for {@link Gtk.Activatable} implementors.
         * 
         * When implementing {@link Gtk.Activatable} you must call this when
         * handling changes of the {@link Gtk.Activatable.related_action}, and
         * you must also use this to break references in {@link GObject.Object}->dispose().
         * 
         * This function adds a reference to the currently set related
         * action for you, it also makes sure the {@link Gtk.Activatable}->update()
         * method is called when the related {@link Gtk.Action} properties change
         * and registers to the action’s proxy list.
         * 
         * > Be careful to call this before setting the local
         * > copy of the {@link Gtk.Action} property, since this function uses
         * > `gtk_activatable_get_related_action()` to retrieve the
         * > previous action.
         * @param action the {@link Gtk.Action} to set
         */
        do_set_related_action(action: Gtk.Action): void;

        /**
         * Gets the related {@link Gtk.Action} for `activatable`.
         * @returns the related {@link Gtk.Action} if one is set.
         */
        get_related_action(): Gtk.Action;

        /**
         * Gets whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * @returns whether `activatable` uses its actions appearance.
         */
        get_use_action_appearance(): boolean;

        /**
         * Sets the related action on the `activatable` object.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the {@link Gtk.Activatable.related_action}
         * > property and call `gtk_activatable_do_set_related_action()` when it changes.
         * @param action the {@link Gtk.Action} to set
         */
        set_related_action(action: Gtk.Action): void;

        /**
         * Sets whether this activatable should reset its layout and appearance
         * when setting the related action or when the action changes appearance
         * 
         * > {@link Gtk.Activatable} implementors need to handle the
         * > {@link Gtk.Activatable.use_action_appearance} property and call
         * > `gtk_activatable_sync_action_properties()` to update `activatable`
         * > if needed.
         * @param use_appearance whether to use the actions appearance
         */
        set_use_action_appearance(use_appearance: boolean): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         */
        sync_action_properties(action: (Gtk.Action | null)): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         * @virtual
         */
        vfunc_sync_action_properties(action: (Gtk.Action | null)): void;

        /**
         * Called to update the activatable when its related action’s properties change.
         * You must check the {@link Gtk.Activatable.use_action_appearance} property only apply action
         * properties that are meant to effect the appearance accordingly.
         * @param action 
         * @param property_name 
         * @virtual
         */
        vfunc_update(action: Gtk.Action, property_name: string): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace ColumnTextView {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class ColumnTextView extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ColumnTextView>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColumnTextView.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColumnTextView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ColumnTextView;

        // Signals
        /** @signal */
        connect<K extends keyof ColumnTextView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColumnTextView.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColumnTextView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColumnTextView.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColumnTextView.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColumnTextView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_text(): string;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace Command {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Indicates that the command has completed. Clients should at least handle
             * this signal to unref the command object.
             * 
             * <note>
             *  <para>
             *   Sublasses that override the method for this signal should chain up to
             *   the parent implementation to ensure proper handling of running/not
             *   running states.
             * </para>
             * </note>
             * @signal
             * @run-first
             */
            "command-finished": (arg0: number) => void;
            /**
             * @signal
             * @run-first
             */
            "command-started": () => void;
            /**
             * Notifies clients that the command has processed data that is ready to
             * be used.
             * @signal
             * @run-last
             */
            "data-arrived": () => void;
            /**
             * Notifies clients of changes in progress during command execution.
             * @signal
             * @run-first
             */
            progress: (arg0: number) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class Command extends GObject.Object {
        static $gtype: GObject.GType<Command>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Command.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Command.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Command.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Command.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Command.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Command.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Command.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Command.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Cancels a running command.
         * @virtual
         */
        vfunc_cancel(): void;

        /**
         * @param return_code 
         * @virtual
         */
        vfunc_command_finished(return_code: number): void;

        /**
         * @virtual
         */
        vfunc_command_started(): void;

        /**
         * @virtual
         */
        vfunc_data_arrived(): void;

        /**
         * Get the error message from the command, if there is one. This method is
         * normally used from a ::command-finished handler to report errors to the user
         * when a command finishes.
         * @virtual
         */
        vfunc_get_error_message(): (string | null);

        /**
         * Used by base classes derived from {@link Anjuta.Command} to emit the
         * ::command-finished signal. This method should not be used by client code or
         * {@link Anjuta.Command} objects that are not base classes.
         * @param return_code The returned code that is passed to the notify callback
         * @virtual
         */
        vfunc_notify_complete(return_code: number): void;

        /**
         * Used by base classes derived from {@link Anjuta.Command} to emit the ::data-arrived
         * signal. This method should be used by both base command classes and
         * non-base classes as appropriate.
         * @virtual
         */
        vfunc_notify_data_arrived(): void;

        /**
         * Emits the ::progress signal. Can be used by both base classes and
         * commands as needed.
         * @param progress The of the command that is passed to the notify callback
         * @virtual
         */
        vfunc_notify_progress(progress: number): void;

        /**
         * @param progress 
         * @virtual
         */
        vfunc_progress(progress: number): void;

        /**
         * @virtual
         */
        vfunc_run(): number;

        /**
         * Command objects use this to set error messages when they encounter some kind
         * of failure.
         * @param error_message Error message.
         * @virtual
         */
        vfunc_set_error_message(error_message: string): void;

        /**
         * Starts a command. Client code can handle data from the command by connecting
         * to the ::data-arrived signal.
         * 
         * {@link Anjuta.Command} subclasses should override this method to determine how they
         * call ::run, which actually does the command's legwork.
         * @virtual
         */
        vfunc_start(): void;

        /**
         * Sets up any monitoring needed for commands that should start themselves
         * automatically in response to some event.
         * @virtual
         */
        vfunc_start_automatic_monitor(): boolean;

        /**
         * Stops automatic monitoring for self executing commands. For commands that
         * do not support self-starting, this function does nothing.
         * @virtual
         */
        vfunc_stop_automatic_monitor(): void;

        // Methods
        /**
         * Cancels a running command.
         */
        cancel(): void;

        /**
         * Get the error message from the command, if there is one. This method is
         * normally used from a ::command-finished handler to report errors to the user
         * when a command finishes.
         * @returns Error message string that must be freed when no longer needed. If no error is set, return `null`.
         */
        get_error_message(): (string | null);

        /**
         * @returns `true` if the command is currently running; `false` otherwise.
         */
        is_running(): boolean;

        /**
         * Used by base classes derived from {@link Anjuta.Command} to emit the
         * ::command-finished signal. This method should not be used by client code or
         * {@link Anjuta.Command} objects that are not base classes.
         * @param return_code The returned code that is passed to the notify callback
         */
        notify_complete(return_code: number): void;

        /**
         * Used by base classes derived from {@link Anjuta.Command} to emit the ::data-arrived
         * signal. This method should be used by both base command classes and
         * non-base classes as appropriate.
         */
        notify_data_arrived(): void;

        /**
         * Emits the ::progress signal. Can be used by both base classes and
         * commands as needed.
         * @param progress The of the command that is passed to the notify callback
         */
        notify_progress(progress: number): void;

        /**
         * Command objects use this to set error messages when they encounter some kind
         * of failure.
         * @param error_message Error message.
         */
        set_error_message(error_message: string): void;

        /**
         * Starts a command. Client code can handle data from the command by connecting
         * to the ::data-arrived signal.
         * 
         * {@link Anjuta.Command} subclasses should override this method to determine how they
         * call ::run, which actually does the command's legwork.
         */
        start(): void;

        /**
         * Sets up any monitoring needed for commands that should start themselves
         * automatically in response to some event.
         * @returns `true` if automatic starting is supported by the command and no errors were encountered; `false` if automatic starting is unsupported or on error.
         */
        start_automatic_monitor(): boolean;

        /**
         * Stops automatic monitoring for self executing commands. For commands that
         * do not support self-starting, this function does nothing.
         */
        stop_automatic_monitor(): void;
    }


    namespace CommandBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Notebook.SignalSignatures {
            "notify::max-text-width": (pspec: GObject.ParamSpec) => void;
            "notify::enable-popup": (pspec: GObject.ParamSpec) => void;
            "notify::group-name": (pspec: GObject.ParamSpec) => void;
            "notify::page": (pspec: GObject.ParamSpec) => void;
            "notify::scrollable": (pspec: GObject.ParamSpec) => void;
            "notify::show-border": (pspec: GObject.ParamSpec) => void;
            "notify::show-tabs": (pspec: GObject.ParamSpec) => void;
            "notify::tab-pos": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Notebook.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            max_text_width: number;
            maxTextWidth: number;
        }
    }

    /**
     * @gir-type Class
     */
    class CommandBar extends Gtk.Notebook implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<CommandBar>;

        // Properties
        /**
         * @construct-only
         */
        get max_text_width(): number;

        /**
         * @construct-only
         */
        get maxTextWidth(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CommandBar.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CommandBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): CommandBar;

        // Signals
        /** @signal */
        connect<K extends keyof CommandBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CommandBar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CommandBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CommandBar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CommandBar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CommandBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds a group of entries to an AnjutaCommandBar.
         * @param group_name A unique name for this group of entries
         * @param entries A list of entries to add
         * @param user_data User data to pass to the entry callback
         */
        add_action_group(group_name: string, entries: CommandBarEntry[], user_data: null): void;

        /**
         * Removes an action group from an AnjutaCommandBar.
         * @param group_name Name of the action group to remove
         */
        remove_action_group(group_name: string): void;

        /**
         * Causes the actions in the given group to become visible, replacing the
         * previously visible group.
         * @param group_name The name of the action group to show
         */
        show_action_group(group_name: string): void;
    }


    namespace CommandQueue {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            finished: () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class CommandQueue extends GObject.Object {
        static $gtype: GObject.GType<CommandQueue>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CommandQueue.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CommandQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](mode: CommandQueueExecuteMode): CommandQueue;

        // Signals
        /** @signal */
        connect<K extends keyof CommandQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CommandQueue.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CommandQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CommandQueue.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CommandQueue.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CommandQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_finished(): void;

        // Methods
        /**
         * Adds a command to the Queue and starts it if there are no other commands
         * waiting
         * @param command The command to add
         */
        push(command: Command): void;

        start(): boolean;
    }


    namespace Completion {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::case-sensitive": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            case_sensitive: boolean;
            caseSensitive: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Completion extends GObject.Object {
        static $gtype: GObject.GType<Completion>;

        // Properties
        get case_sensitive(): boolean;
        set case_sensitive(val: boolean);

        get caseSensitive(): boolean;
        set caseSensitive(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Completion.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Completion.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Completion.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Completion.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Completion.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Completion.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Completion.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Completion.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Add an item to the completion.
         * @param item the item to be added.
         */
        add_item(item: null): void;

        /**
         * Clear all items added to the completion.
         */
        clear(): void;

        get_case_sensitive(): boolean;

        /**
         * @param case_sensitive 
         */
        set_case_sensitive(case_sensitive: boolean): void;

        set_item_destroy_func(): void;
    }


    namespace Dock {
        // Signal signatures
        interface SignalSignatures extends Gdl.Dock.SignalSignatures {
            "notify::default-title": (pspec: GObject.ParamSpec) => void;
            "notify::floating": (pspec: GObject.ParamSpec) => void;
            "notify::floatx": (pspec: GObject.ParamSpec) => void;
            "notify::floaty": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::long-name": (pspec: GObject.ParamSpec) => void;
            "notify::master": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::pixbuf-icon": (pspec: GObject.ParamSpec) => void;
            "notify::stock-id": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gdl.Dock.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class Dock extends Gdl.Dock implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Dock>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Dock.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Dock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Dock;

        // Signals
        /** @signal */
        connect<K extends keyof Dock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Dock.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Dock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Dock.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Dock.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Dock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds a pane, with optional {@link Anjuta.CommandBar} entries, to an AnjutaDock. This
         * method adds a pane with no grip that cannot be closed, floating or iconified.
         * @param pane_name A unique name for this pane
         * @param pane_label Label to display in this pane's grip
         * @param stock_icon Stock icon to display in this pane's grip
         * @param pane The {@link Anjuta.DockPane} to add to the dock. The dock takes ownership of 	  the pane object.
         * @param placement A {@link Gdl.DockPlacement} value indicating where the pane should be 		   placed
         * @param entries {@link Anjuta.CommandBar} entries 		 for this pane. Can be `null`
         * @param user_data User data to pass to the entry callback
         * @returns `true` if the pane was added, or `false` if a pane with the same name already exists in the dock
         */
        add_pane(pane_name: string, pane_label: string, stock_icon: string, pane: DockPane, placement: Gdl.DockPlacement, entries: (CommandBarEntry[] | null), user_data: null): boolean;

        /**
         * Does the same thing as anjuta_dock_add_pane, but allows GDL dock behavior
         * flags to be specified.
         * @param pane_name A unique name for this pane
         * @param pane_label Label to display in this pane's grip
         * @param stock_icon Stock icon to display in this pane's grip
         * @param pane The {@link Anjuta.DockPane} to add to the dock. The dock takes ownership of 	  the pane object.
         * @param placement A {@link Gdl.DockPlacement} value indicating where the pane should be 		   placed
         * @param entries {@link Anjuta.CommandBar} entries 		 for this pane. Can be `null`
         * @param user_data User data to pass to the entry callback
         * @param behavior Any combination of {@link Gdl.DockItemBehavior} flags
         * @returns `true` if the pane was added, or `false` if a pane with the same name already exists in the dock
         */
        add_pane_full(pane_name: string, pane_label: string, stock_icon: string, pane: DockPane, placement: Gdl.DockPlacement, entries: (CommandBarEntry[] | null), user_data: null, behavior: Gdl.DockItemBehavior): boolean;

        /**
         * @returns the {@link Anjuta.CommandBar} associated with this dock or `null`.
         */
        get_command_bar(): (CommandBar | null);

        /**
         * Makes the given pane invisible
         * @param pane Name of the pane to hide
         */
        hide_pane(pane: DockPane): void;

        /**
         * Presents the pane to the user by making it the currently active pane in its
         * switcher
         * @param pane Pane to present
         */
        present_pane(pane: DockPane): void;

        /**
         * `self` An AnjutaDock
         * Removes a pane from a dock
         * @param pane Name of the pane to remove
         */
        remove_pane(pane: DockPane): void;

        /**
         * Adds a pane, with optional {@link Anjuta.CommandBar} entries, to an AnjutaDock. This
         * method adds a pane with no grip that cannot be closed, floating or iconified.
         * If there was an old command pane, that pane is removed in favour of the new pane.
         * @param pane_name A unique name for this pane
         * @param pane_label Label to display in this pane's grip
         * @param stock_icon Stock icon to display in this pane's grip
         * @param pane The {@link Anjuta.DockPane} to add to the dock. The dock takes ownership of 	  the pane object.
         * @param placement A {@link Gdl.DockPlacement} value indicating where the pane should be 		   placed
         * @param entries {@link Anjuta.CommandBar} entries 		 for this pane. Can be `null`
         * @param user_data User data to pass to the entry callback
         */
        replace_command_pane(pane_name: string, pane_label: string, stock_icon: string, pane: DockPane, placement: Gdl.DockPlacement, entries: (CommandBarEntry[] | null), user_data: null): void;

        /**
         * Associates an {@link Anjuta.CommandBar} with this dock. Command bars can be used to
         * provide different sets of commands based on the currently visible pane.
         * @param command_bar An {@link Anjuta.CommandBar} to associate with this dock
         */
        set_command_bar(command_bar: CommandBar): void;

        /**
         * Makes the given pane visible
         * @param pane Name of the pane to show
         */
        show_pane(pane: DockPane): void;
    }


    namespace DockPane {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted by pane subclasses to notify clients that the set
             * of selected items in the pane has changed.
             * @signal
             * @run-first
             */
            "multiple-selection-changed": () => void;
            /**
             * This signal is emitted by pane subclasses to notify clients that
             * the user has selected an item. This signal should be used when users are
             * expected to only select one item at a time.
             * @signal
             * @run-first
             */
            "single-selection-changed": () => void;
            "notify::plugin": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            plugin: Plugin;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class DockPane extends GObject.Object {
        static $gtype: GObject.GType<DockPane>;

        // Properties
        get plugin(): Plugin;
        set plugin(val: Plugin);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockPane.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DockPane.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DockPane.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockPane.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DockPane.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockPane.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DockPane.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DockPane.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_multiple_selection_changed(): void;

        /**
         * Refreshes the given pane. Subclasses only need to override this method if
         * needed.
         * @virtual
         */
        vfunc_refresh(): void;

        /**
         * @virtual
         */
        vfunc_single_selection_changed(): void;

        // Methods
        /**
         * Emits the multiple-selection-changed signal.
         */
        notify_multiple_selection_changed(): void;

        /**
         * Emits the single-selection-changed signal.
         */
        notify_single_selection_changed(): void;

        /**
         * Refreshes the given pane. Subclasses only need to override this method if
         * needed.
         */
        refresh(): void;
    }


    namespace DropEntry {
        // Signal signatures
        interface SignalSignatures extends Entry.SignalSignatures {
            "notify::help-text": (pspec: GObject.ParamSpec) => void;
            "notify::activates-default": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::caps-lock-warning": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::enable-emoji-completion": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::inner-border": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char-set": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite-mode": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::populate-all": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::progress-fraction": (pspec: GObject.ParamSpec) => void;
            "notify::progress-pulse-step": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-offset": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::selection-bound": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-emoji-icon": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::text-length": (pspec: GObject.ParamSpec) => void;
            "notify::truncate-multiline": (pspec: GObject.ParamSpec) => void;
            "notify::visibility": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Entry.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Editable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class DropEntry extends Entry implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {
        static $gtype: GObject.GType<DropEntry>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DropEntry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DropEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DropEntry;

        // Signals
        /** @signal */
        connect<K extends keyof DropEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DropEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DropEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DropEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DropEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DropEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace Entry {
        // Signal signatures
        interface SignalSignatures extends Gtk.Entry.SignalSignatures {
            "notify::help-text": (pspec: GObject.ParamSpec) => void;
            "notify::activates-default": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::caps-lock-warning": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::enable-emoji-completion": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::inner-border": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char-set": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite-mode": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::populate-all": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::progress-fraction": (pspec: GObject.ParamSpec) => void;
            "notify::progress-pulse-step": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-offset": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::selection-bound": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-emoji-icon": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::text-length": (pspec: GObject.ParamSpec) => void;
            "notify::truncate-multiline": (pspec: GObject.ParamSpec) => void;
            "notify::visibility": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Entry.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Editable.ConstructorProps {
            help_text: string;
            helpText: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Entry extends Gtk.Entry implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {
        static $gtype: GObject.GType<Entry>;

        // Properties
        get help_text(): string;
        set help_text(val: string);

        get helpText(): string;
        set helpText(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Entry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Entry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Entry;

        // Signals
        /** @signal */
        connect<K extends keyof Entry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Entry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Entry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Entry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Entry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Entry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns A copy of the contents of the entry. If the entry is empty, the returned string will be empty. The returned string must be freed when no longer needed.
         */
        dup_text(): string;

        /**
         * @returns The contents of the entry. If the entry is empty, the help text will be displayed and an empty string will be returned.
         */
        get_text(): string;

        /**
         * @returns Whether the entry is showing its help text. In practice, if this method returns `true`, it means that the user has not entered anything.
         */
        is_showing_help_text(): boolean;

        /**
         * Sets the text on the entry, showing the help text if the text is empty.
         * @param text The new text
         */
        set_text(text: string): void;

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: (Gdk.Event | null)): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: (Gdk.Event | null)): void;

        /**
         * Copies the contents of the currently selected content in the editable and
         * puts it on the clipboard.
         */
        copy_clipboard(): void;

        /**
         * Removes the contents of the currently selected content in the editable and
         * puts it on the clipboard.
         */
        cut_clipboard(): void;

        /**
         * Deletes the currently selected text of the editable.
         * This call doesn’t do anything if there is no selected text.
         */
        delete_selection(): void;

        /**
         * Deletes a sequence of characters. The characters that are deleted are
         * those characters at positions from `start_pos` up to, but not including
         * `end_pos`. If `end_pos` is negative, then the characters deleted
         * are those from `start_pos` to the end of the text.
         * 
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         */
        delete_text(start_pos: number, end_pos: number): void;

        /**
         * Retrieves a sequence of characters. The characters that are retrieved
         * are those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the characters
         * retrieved are those characters from `start_pos` to the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of text
         * @param end_pos end of text
         * @returns a pointer to the contents of the widget as a      string. This string is allocated by the {@link Gtk.Editable}      implementation and should be freed by the caller.
         */
        get_chars(start_pos: number, end_pos: number): string;

        /**
         * Retrieves whether `editable` is editable. See
         * `gtk_editable_set_editable()`.
         * @returns `true` if `editable` is editable.
         */
        get_editable(): boolean;

        /**
         * Retrieves the current position of the cursor relative to the start
         * of the content of the editable.
         * 
         * Note that this position is in characters, not in bytes.
         * @returns the cursor position
         */
        get_position(): number;

        /**
         * Retrieves the selection bound of the editable. start_pos will be filled
         * with the start of the selection and `end_pos` with end. If no text was
         * selected both will be identical and `false` will be returned.
         * 
         * Note that positions are specified in characters, not bytes.
         * @returns `true` if an area is selected, `false` otherwise
         */
        get_selection_bounds(): [boolean, number, number];

        /**
         * Inserts `new_text_length` bytes of `new_text` into the contents of the
         * widget, at position `position`.
         * 
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly inserted text.
         * @param new_text the text to append
         * @param new_text_length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         */
        insert_text(new_text: string, new_text_length: number, position: number): number;

        /**
         * Pastes the content of the clipboard to the current position of the
         * cursor in the editable.
         */
        paste_clipboard(): void;

        /**
         * Selects a region of text. The characters that are selected are
         * those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the
         * characters selected are those characters from `start_pos` to
         * the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of region
         * @param end_pos end of region
         */
        select_region(start_pos: number, end_pos: number): void;

        /**
         * Determines if the user can edit the text in the editable
         * widget or not.
         * @param is_editable `true` if the user is allowed to edit the text   in the widget
         */
        set_editable(is_editable: boolean): void;

        /**
         * Sets the cursor position in the editable to the given value.
         * 
         * The cursor is displayed before the character with the given (base 0)
         * index in the contents of the editable. The value must be less than or
         * equal to the number of characters in the editable. A value of -1
         * indicates that the position should be set after the last character
         * of the editable. Note that `position` is in characters, not in bytes.
         * @param position the position of the cursor
         */
        set_position(position: number): void;

        /**
         * @virtual
         */
        vfunc_changed(): void;

        /**
         * Deletes a sequence of characters. The characters that are deleted are
         * those characters at positions from `start_pos` up to, but not including
         * `end_pos`. If `end_pos` is negative, then the characters deleted
         * are those from `start_pos` to the end of the text.
         * 
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_delete_text(start_pos: number, end_pos: number): void;

        /**
         * Deletes a sequence of characters. The characters that are deleted are
         * those characters at positions from `start_pos` up to, but not including
         * `end_pos`. If `end_pos` is negative, then the characters deleted
         * are those from `start_pos` to the end of the text.
         * 
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_do_delete_text(start_pos: number, end_pos: number): void;

        /**
         * Inserts `new_text_length` bytes of `new_text` into the contents of the
         * widget, at position `position`.
         * 
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly inserted text.
         * @param new_text the text to append
         * @param new_text_length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         * @virtual
         */
        vfunc_do_insert_text(new_text: string, new_text_length: number, position: number): number;

        /**
         * Retrieves a sequence of characters. The characters that are retrieved
         * are those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the characters
         * retrieved are those characters from `start_pos` to the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of text
         * @param end_pos end of text
         * @virtual
         */
        vfunc_get_chars(start_pos: number, end_pos: number): string;

        /**
         * Retrieves the current position of the cursor relative to the start
         * of the content of the editable.
         * 
         * Note that this position is in characters, not in bytes.
         * @virtual
         */
        vfunc_get_position(): number;

        /**
         * Retrieves the selection bound of the editable. start_pos will be filled
         * with the start of the selection and `end_pos` with end. If no text was
         * selected both will be identical and `false` will be returned.
         * 
         * Note that positions are specified in characters, not bytes.
         * @virtual
         */
        vfunc_get_selection_bounds(): [boolean, number, number];

        /**
         * Inserts `new_text_length` bytes of `new_text` into the contents of the
         * widget, at position `position`.
         * 
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly inserted text.
         * @param new_text the text to append
         * @param new_text_length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         * @virtual
         */
        vfunc_insert_text(new_text: string, new_text_length: number, position: number): number;

        /**
         * Sets the cursor position in the editable to the given value.
         * 
         * The cursor is displayed before the character with the given (base 0)
         * index in the contents of the editable. The value must be less than or
         * equal to the number of characters in the editable. A value of -1
         * indicates that the position should be set after the last character
         * of the editable. Note that `position` is in characters, not in bytes.
         * @param position the position of the cursor
         * @virtual
         */
        vfunc_set_position(position: number): void;

        /**
         * Selects a region of text. The characters that are selected are
         * those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the
         * characters selected are those characters from `start_pos` to
         * the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of region
         * @param end_pos end of region
         * @virtual
         */
        vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
    }


    namespace EnvironmentEditor {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            /**
             * The ::changed signal is emitted when an environment variable
             * is changed (include deleted variables)
             * @signal
             * @run-last
             */
            changed: () => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class EnvironmentEditor extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<EnvironmentEditor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EnvironmentEditor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EnvironmentEditor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): EnvironmentEditor;

        // Signals
        /** @signal */
        connect<K extends keyof EnvironmentEditor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EnvironmentEditor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EnvironmentEditor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EnvironmentEditor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EnvironmentEditor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EnvironmentEditor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_changed(): void;

        // Methods
        reset(): void;

        /**
         * @param variable 
         */
        set_variable(variable: string): void;
    }


    namespace FileDropEntry {
        // Signal signatures
        interface SignalSignatures extends DropEntry.SignalSignatures {
            "notify::relative-path": (pspec: GObject.ParamSpec) => void;
            "notify::help-text": (pspec: GObject.ParamSpec) => void;
            "notify::activates-default": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::caps-lock-warning": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::enable-emoji-completion": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::inner-border": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char-set": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite-mode": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::populate-all": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::progress-fraction": (pspec: GObject.ParamSpec) => void;
            "notify::progress-pulse-step": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-offset": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::selection-bound": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-emoji-icon": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::text-length": (pspec: GObject.ParamSpec) => void;
            "notify::truncate-multiline": (pspec: GObject.ParamSpec) => void;
            "notify::visibility": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends DropEntry.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Editable.ConstructorProps {
            relative_path: string;
            relativePath: string;
        }
    }

    /**
     * @gir-type Class
     */
    class FileDropEntry extends DropEntry implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {
        static $gtype: GObject.GType<FileDropEntry>;

        // Properties
        get relative_path(): string;
        set relative_path(val: string);

        get relativePath(): string;
        set relativePath(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileDropEntry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FileDropEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): FileDropEntry;

        // Signals
        /** @signal */
        connect<K extends keyof FileDropEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileDropEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FileDropEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileDropEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FileDropEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileDropEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param path 
         */
        set_relative_path(path: string): void;
    }


    namespace FileList {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::relative-path": (pspec: GObject.ParamSpec) => void;
            "notify::show-add-button": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            relative_path: string;
            relativePath: string;
            show_add_button: boolean;
            showAddButton: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class FileList extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<FileList>;

        // Properties
        get relative_path(): string;
        set relative_path(val: string);

        get relativePath(): string;
        set relativePath(val: string);

        get show_add_button(): boolean;
        set show_add_button(val: boolean);

        get showAddButton(): boolean;
        set showAddButton(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileList.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FileList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): FileList;

        // Signals
        /** @signal */
        connect<K extends keyof FileList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FileList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FileList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        clear(): void;

        /**
         * @param path 
         */
        set_relative_path(path: string): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace LanguageProvider {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class LanguageProvider extends GObject.Object {
        static $gtype: GObject.GType<LanguageProvider>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LanguageProvider.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LanguageProvider.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof LanguageProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LanguageProvider.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LanguageProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LanguageProvider.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LanguageProvider.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LanguageProvider.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Complete the function name
         * @param iprov IAnjutaProvider object
         * @param iter the cursor
         * @param data the ProposalData
         */
        activate(iprov: GObject.Object, iter: GObject.Object, data: null): void;

        /**
         * Searches for a calltip context
         * @param itip whether a tooltip is crrently shown
         * @param iter current cursor position
         * @param scope_context_ch language-specific context characters                    the end is marked with a '0' character
         * @returns name of the method to show a calltip for or `null`
         */
        get_calltip_context(itip: GObject.Object, iter: GObject.Object, scope_context_ch: string): string;

        /**
         * Search for the current typed word
         * @param editor IAnjutaEditor object
         * @param iter current cursor position
         * @param start_iter return location for the start_iter (if a preword was found)
         * @param word_characters 
         * @returns The current word (needs to be freed) or `null` if no word was found
         */
        get_pre_word(editor: GObject.Object, iter: GObject.Object, start_iter: GObject.Object, word_characters: string): (string | null);

        /**
         * Install the settings for AnjutaLanguageProvider
         * @param ieditor IAnjutaEditor object
         * @param settings the settings
         */
        install(ieditor: GObject.Object, settings: Gio.Settings): void;

        /**
         * Show completion for the context at position `iter`. The provider should
         * call anjuta_language_provider_proposals here to add proposals to the list.
         * @param iprov IAnjutaProvider object
         * @param cursor the text iter where the provider should be populated
         */
        populate(iprov: GObject.Object, cursor: GObject.Object): void;
    }


    namespace Launcher {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a child starts after a call to one execute function
             * (busy is `true`) or when a child exits and all i/o channels are
             * closed (busy is `false`).
             * @signal
             * @run-first
             */
            busy: (arg0: boolean) => void;
            /**
             * Emitted when the child has exited and all i/o channels have
             * been closed. If the terminate on exit flag is set, the i/o
             * channels are automatically closed when the child exit.
             * You need to use WEXITSTATUS and friend to get the child exit
             * code from the status returned.
             * @signal
             * @run-first
             */
            "child-exited": (arg0: number, arg1: number, arg2: number) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class Launcher extends GObject.Object {
        static $gtype: GObject.GType<Launcher>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Launcher.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Launcher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Launcher;

        // Signals
        /** @signal */
        connect<K extends keyof Launcher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Launcher.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Launcher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Launcher.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Launcher.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Launcher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param busy_flag 
         * @virtual
         */
        vfunc_busy(busy_flag: boolean): void;

        /**
         * @param child_pid 
         * @param exit_status 
         * @param time_taken_in_seconds 
         * @virtual
         */
        vfunc_child_exited(child_pid: number, exit_status: number, time_taken_in_seconds: number): void;

        // Methods
        /**
         * Gets the Process ID of the child being executed.
         * @returns Process ID of the child.
         */
        get_child_pid(): number;

        /**
         * Tells if the laucher is currently executing any command.
         * @returns `true` if launcher is busy, otherwise `false`.
         */
        is_busy(): boolean;

        /**
         * Resets the launcher and kills (SIGTERM) current process, if it is still
         * executing.
         */
        reset(): void;

        /**
         * Sends a string to TTY input of the process currently being executed.
         * Mostly useful for entering passwords and other inputs which are directly
         * read from TTY input of the process.
         * @param input_str The string to send to PTY of the process.
         */
        send_ptyin(input_str: string): void;

        /**
         * Sends a string to Standard input of the process currently being executed.
         * @param input_str The string to send to STDIN of the process.
         */
        send_stdin(input_str: string): void;

        /**
         * Sends a EOF to Standard input of the process currently being executed.
         */
        send_stdin_eof(): void;

        /**
         * Sets if output should buffered or not. By default, it is buffered.
         * @param buffered buffer output.
         * @returns Previous flag value
         */
        set_buffered_output(buffered: boolean): boolean;

        /**
         * Set if output is checked for a password prompti. A special dialog box
         * is use to enter it in this case. By default, this behavior is enabled.
         * @param check_passwd check for password.
         * @returns Previous flag value
         */
        set_check_passwd_prompt(check_passwd: boolean): boolean;

        /**
         * Sets the character set to use for Input/Output with the process.
         * @param charset Character set to use for Input/Output with the process.
         */
        set_encoding(charset: string): void;

        /**
         * Sets if input (those given in STDIN) should enabled or disabled. By default,
         * it is disabled.
         * @param echo_on Echo ON flag.
         * @returns Previous flag value
         */
        set_terminal_echo(echo_on: boolean): boolean;

        /**
         * When this flag is set, al i/o channels are closed and the child-exit
         * signal is emitted as soon as the child exit. By default, or when this
         * flag is clear, the launcher object wait until the i/o channels are
         * closed.
         * @param terminate_on_exit terminate on exit flag
         * @returns Previous flag value
         */
        set_terminate_on_exit(terminate_on_exit: boolean): boolean;

        /**
         * Sends a kernel signal to the process that is being executed.
         * @param sig kernel signal ID (e.g. SIGTERM).
         */
        signal(sig: number): void;
    }


    namespace PkgConfigChooser {
        // Signal signatures
        interface SignalSignatures extends Gtk.TreeView.SignalSignatures {
            /**
             * The ::package-activated signal is emitted when a package is activated in the list
             * @signal
             */
            "package-activated": (arg0: string) => void;
            /**
             * The ::package-activated signal is emitted when a package is deactivated in the list
             * @signal
             */
            "package-deactivated": (arg0: string) => void;
            "notify::activate-on-single-click": (pspec: GObject.ParamSpec) => void;
            "notify::enable-grid-lines": (pspec: GObject.ParamSpec) => void;
            "notify::enable-search": (pspec: GObject.ParamSpec) => void;
            "notify::enable-tree-lines": (pspec: GObject.ParamSpec) => void;
            "notify::expander-column": (pspec: GObject.ParamSpec) => void;
            "notify::fixed-height-mode": (pspec: GObject.ParamSpec) => void;
            "notify::headers-clickable": (pspec: GObject.ParamSpec) => void;
            "notify::headers-visible": (pspec: GObject.ParamSpec) => void;
            "notify::hover-expand": (pspec: GObject.ParamSpec) => void;
            "notify::hover-selection": (pspec: GObject.ParamSpec) => void;
            "notify::level-indentation": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::reorderable": (pspec: GObject.ParamSpec) => void;
            "notify::rubber-banding": (pspec: GObject.ParamSpec) => void;
            "notify::rules-hint": (pspec: GObject.ParamSpec) => void;
            "notify::search-column": (pspec: GObject.ParamSpec) => void;
            "notify::show-expanders": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-column": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscroll-policy": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll-policy": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.TreeView.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class PkgConfigChooser extends Gtk.TreeView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<PkgConfigChooser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PkgConfigChooser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PkgConfigChooser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): PkgConfigChooser;

        // Signals
        /** @signal */
        connect<K extends keyof PkgConfigChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PkgConfigChooser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PkgConfigChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PkgConfigChooser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PkgConfigChooser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PkgConfigChooser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param _package 
         * @virtual
         */
        vfunc_package_activated(_package: string): void;

        /**
         * @param _package 
         * @virtual
         */
        vfunc_package_deactivated(_package: string): void;

        // Methods
        get_selected_package(): string;

        /**
         * @param show_column 
         */
        show_active_column(show_column: boolean): void;

        /**
         * @param show_selected 
         */
        show_active_only(show_selected: boolean): void;

        /**
         * Horizontal {@link Gtk.Adjustment} of the scrollable widget. This adjustment is
         * shared between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Verical {@link Gtk.Adjustment} of the scrollable widget. This adjustment is shared
         * between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @returns `true` if `border` has been set
         */
        get_border(): [boolean, Gtk.Border];

        /**
         * Retrieves the {@link Gtk.Adjustment} used for horizontal scrolling.
         * @returns horizontal {@link Gtk.Adjustment}.
         */
        get_hadjustment(): Gtk.Adjustment;

        /**
         * Gets the horizontal {@link Gtk.ScrollablePolicy}.
         * @returns The horizontal {@link Gtk.ScrollablePolicy}.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Retrieves the {@link Gtk.Adjustment} used for vertical scrolling.
         * @returns vertical {@link Gtk.Adjustment}.
         */
        get_vadjustment(): Gtk.Adjustment;

        /**
         * Gets the vertical {@link Gtk.ScrollablePolicy}.
         * @returns The vertical {@link Gtk.ScrollablePolicy}.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Sets the horizontal adjustment of the {@link Gtk.Scrollable}.
         * @param hadjustment a {@link Gtk.Adjustment}
         */
        set_hadjustment(hadjustment: (Gtk.Adjustment | null)): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * horizontal scrolling should start below the minimum width or
         * below the natural width.
         * @param policy the horizontal {@link Gtk.ScrollablePolicy}
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Sets the vertical adjustment of the {@link Gtk.Scrollable}.
         * @param vadjustment a {@link Gtk.Adjustment}
         */
        set_vadjustment(vadjustment: (Gtk.Adjustment | null)): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * vertical scrolling should start below the minimum height or
         * below the natural height.
         * @param policy the vertical {@link Gtk.ScrollablePolicy}
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @virtual
         */
        vfunc_get_border(): [boolean, Gtk.Border];
    }


    namespace PkgScanner {
        // Signal signatures
        interface SignalSignatures extends AsyncCommand.SignalSignatures {
            "notify::package": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends AsyncCommand.ConstructorProps {
            "package": string;
            version: string;
        }
    }

    /**
     * @gir-type Class
     */
    class PkgScanner extends AsyncCommand {
        static $gtype: GObject.GType<PkgScanner>;

        // Properties
        get "package"(): string;
        set "package"(val: string);

        get version(): string;
        set version(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PkgScanner.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PkgScanner.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](_package: string, version: string): PkgScanner;

        // Signals
        /** @signal */
        connect<K extends keyof PkgScanner.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PkgScanner.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PkgScanner.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PkgScanner.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PkgScanner.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PkgScanner.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_package(): string;

        get_version(): string;
    }


    namespace Plugin {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            activated: () => void;
            /**
             * @signal
             * @run-first
             */
            deactivated: () => void;
            "notify::shell": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            shell: Shell;
        }
    }

    /**
     * @gir-type Class
     */
    class Plugin extends GObject.Object {
        static $gtype: GObject.GType<Plugin>;

        // Properties
        /**
         * The {@link Anjuta.Shell} object associated with this plugin
         */
        get shell(): Shell;
        set shell(val: Shell);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Plugin.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Plugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Plugin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Plugin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Plugin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Plugin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Activates the plugin by calling `activate()` virtual method. All plugins
         * should derive their classes from this virtual class and implement this
         * method.
         * If the plugin implements IAnjutaPreferences, it is prompted to install
         * it's preferences.
         * @virtual
         */
        vfunc_activate(): boolean;

        /**
         * @virtual
         */
        vfunc_activated(): void;

        /**
         * Deactivates the plugin by calling `deactivate()` virtual method. All plugins
         * should derive their classes from this virtual class and implement this
         * method.
         * @virtual
         */
        vfunc_deactivate(): boolean;

        /**
         * @virtual
         */
        vfunc_deactivated(): void;

        // Methods
        /**
         * Activates the plugin by calling `activate()` virtual method. All plugins
         * should derive their classes from this virtual class and implement this
         * method.
         * If the plugin implements IAnjutaPreferences, it is prompted to install
         * it's preferences.
         * @returns `true` if sucessfully activated, `false` otherwise.
         */
        activate(): boolean;

        /**
         * Adds a watch for `name` value. When the value is added in shell, the `added`
         * callback will be called and when it is removed, the `removed` callback will
         * be called. The returned ID is used to remove the watch later.
         * @param name Name of the value to watch.
         * @param added Callback to call when the value is added.
         * @param removed Callback to call when the value is removed.
         * @returns Watch ID.
         */
        add_watch(name: string, added: PluginValueAdded, removed: PluginValueRemoved): number;

        /**
         * Deactivates the plugin by calling `deactivate()` virtual method. All plugins
         * should derive their classes from this virtual class and implement this
         * method.
         * @returns `true` if sucessfully activated, `false` otherwise.
         */
        deactivate(): boolean;

        /**
         * @returns The {@link Anjuta.Shell} object associated with this plugin
         */
        get_shell(): Shell;

        /**
         * Returns `true` if the plugin has been activated.
         * @returns `true` if activated, `false` otherwise.
         */
        is_active(): boolean;

        /**
         * Removes the watch represented by `id` (which was returned by
         * `anjuta_plugin_add_watch()`).
         * @param id Watch id to remove.
         * @param send_remove If true, calls value_removed callback.
         */
        remove_watch(id: number, send_remove: boolean): void;
    }


    namespace PluginHandle {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::about": (pspec: GObject.ParamSpec) => void;
            "notify::can-load": (pspec: GObject.ParamSpec) => void;
            "notify::can-unload": (pspec: GObject.ParamSpec) => void;
            "notify::checked": (pspec: GObject.ParamSpec) => void;
            "notify::dependencies": (pspec: GObject.ParamSpec) => void;
            "notify::dependency-names": (pspec: GObject.ParamSpec) => void;
            "notify::dependents": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::icon-path": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::interfaces": (pspec: GObject.ParamSpec) => void;
            "notify::language": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
            "notify::resident": (pspec: GObject.ParamSpec) => void;
            "notify::resolve-pass": (pspec: GObject.ParamSpec) => void;
            "notify::user-activatable": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            about: string;
            can_load: boolean;
            canLoad: boolean;
            can_unload: boolean;
            canUnload: boolean;
            checked: boolean;
            dependencies: never;
            dependency_names: never;
            dependencyNames: never;
            dependents: never;
            description: never;
            icon_path: string;
            iconPath: string;
            id: string;
            interfaces: never;
            language: string;
            name: string;
            path: string;
            resident: boolean;
            resolve_pass: number;
            resolvePass: number;
            user_activatable: boolean;
            userActivatable: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class PluginHandle extends GObject.Object {
        static $gtype: GObject.GType<PluginHandle>;

        // Properties
        /**
         * @read-only
         */
        get about(): string;

        /**
         * @read-only
         */
        get can_load(): boolean;

        /**
         * @read-only
         */
        get canLoad(): boolean;

        /**
         * @read-only
         */
        get can_unload(): boolean;

        /**
         * @read-only
         */
        get canUnload(): boolean;

        /**
         * @read-only
         */
        get checked(): boolean;

        /**
         * @read-only
         */
        get dependencies(): null;

        /**
         * @read-only
         */
        get dependency_names(): null;

        /**
         * @read-only
         */
        get dependencyNames(): null;

        /**
         * @read-only
         */
        get dependents(): null;

        /**
         * @read-only
         */
        get description(): null;

        /**
         * @read-only
         */
        get icon_path(): string;

        /**
         * @read-only
         */
        get iconPath(): string;

        /**
         * @read-only
         */
        get id(): string;

        /**
         * @read-only
         */
        get interfaces(): null;

        /**
         * @read-only
         */
        get language(): string;

        /**
         * @read-only
         */
        get name(): string;

        /**
         * @read-only
         */
        get path(): string;

        /**
         * @read-only
         */
        get resident(): boolean;

        /**
         * @read-only
         */
        get resolve_pass(): number;

        /**
         * @read-only
         */
        get resolvePass(): number;

        /**
         * @read-only
         */
        get user_activatable(): boolean;

        /**
         * @read-only
         */
        get userActivatable(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PluginHandle.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PluginHandle.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](plugin_desc_path: string): PluginHandle;

        // Signals
        /** @signal */
        connect<K extends keyof PluginHandle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PluginHandle.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PluginHandle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PluginHandle.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PluginHandle.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PluginHandle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_about(): string;

        get_can_load(): boolean;

        get_can_unload(): boolean;

        get_checked(): boolean;

        get_description(): PluginDescription;

        get_icon_path(): string;

        get_id(): string;

        get_language(): string;

        get_name(): string;

        get_path(): string;

        get_resident(): boolean;

        get_resolve_pass(): number;

        get_user_activatable(): boolean;

        /**
         * @param can_load 
         */
        set_can_load(can_load: boolean): void;

        /**
         * @param can_unload 
         */
        set_can_unload(can_unload: boolean): void;

        /**
         * @param checked 
         */
        set_checked(checked: boolean): void;

        /**
         * @param resolve_pass 
         */
        set_resolve_pass(resolve_pass: boolean): void;

        unresolve_dependencies(): void;
    }


    namespace PluginManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "plugin-activated": (arg0: null, arg1: Plugin) => void;
            /**
             * @signal
             * @run-first
             */
            "plugin-deactivated": (arg0: null, arg1: Plugin) => void;
            "notify::activated-plugins": (pspec: GObject.ParamSpec) => void;
            "notify::available-plugins": (pspec: GObject.ParamSpec) => void;
            "notify::profiles": (pspec: GObject.ParamSpec) => void;
            "notify::shell": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            activated_plugins: never;
            activatedPlugins: never;
            available_plugins: never;
            availablePlugins: never;
            profiles: never;
            shell: GObject.Object;
            status: Status;
        }
    }

    /**
     * @gir-type Class
     */
    class PluginManager extends GObject.Object {
        static $gtype: GObject.GType<PluginManager>;

        // Properties
        /**
         * @read-only
         */
        get activated_plugins(): null;

        /**
         * @read-only
         */
        get activatedPlugins(): null;

        /**
         * @read-only
         */
        get available_plugins(): null;

        /**
         * @read-only
         */
        get availablePlugins(): null;

        /**
         * @read-only
         */
        get profiles(): null;

        get shell(): GObject.Object;
        set shell(val: GObject.Object);

        get status(): Status;
        set status(val: Status);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PluginManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PluginManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PluginManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PluginManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PluginManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PluginManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PluginManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PluginManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param handle 
         * @param plugin 
         * @virtual
         */
        vfunc_plugin_activated(handle: PluginHandle, plugin: GObject.Object): void;

        /**
         * @param handle 
         * @param plugin 
         * @virtual
         */
        vfunc_plugin_deactivated(handle: PluginHandle, plugin: GObject.Object): void;

        // Methods
        /**
         * Get the list of plugins loaded when there is a choice between several
         * ones without asking the user.
         * 
         * The list format is returned as a string with the format detailed in
         * `anjuta_plugin_manager_set_remembered_plugins()`.
         * @returns a newly-allocated string that must be freed with `g_free()`.
         */
        get_remembered_plugins(): string;

        /**
         * Searches if a currently loaded plugins implements
         * the given interface.
         * @param iface_name The interface implemented by the object to be found
         * @returns `true` is the plugin is currently loaded.
         */
        is_active_plugin(iface_name: string): boolean;

        /**
         * Set the list of plugins loaded when there is a choice between several
         * ones without asking the user.
         * The list is a string composed of elements separated by ';'. Each element
         * is defined with "key=value", where key is the list of possible plugins and
         * the value is the choosen plugin.
         * 
         * By the example the following element
         * <programlisting>
         *   anjuta-symbol-browser:SymbolBrowserPlugin,anjuta-symbol-db:SymbolDBPlugin,=anjuta-symbol-db:SymbolDBPlugin;
         * </programlisting>
         * means if Anjuta has to choose between SymbolBrowserPlugin and
         * SymbolDBPlugin, it will choose SymbolDBPlugin.
         * @param remembered_plugins A list of prefered plugins
         */
        set_remembered_plugins(remembered_plugins: string): void;

        /**
         * Unload all plugins. Do not take care of the dependencies because all plugins
         * are unloaded anyway.
         */
        unload_all_plugins(): void;

        /**
         * Unload the corresponding plugin. The plugin has to be loaded.
         * @param plugin_object A {@link Anjuta.Plugin} object
         * @returns `true` if the plugin has been unloaded. `false` if the plugin is already or cannot be unloaded.
         */
        unload_plugin(plugin_object: GObject.Object): boolean;

        /**
         * Unload the plugin corresponding to the given handle. If the plugin is
         * already unloaded, nothing will be done.
         * @param handle A {@link Anjuta.PluginHandle}
         * @returns `true` is the plugin is unloaded. `false` if a corresponding plugin does not exist or if the plugin cannot be unloaded.
         */
        unload_plugin_by_handle(handle: PluginHandle): boolean;
    }


    namespace Preferences {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class Preferences extends GObject.Object {
        static $gtype: GObject.GType<Preferences>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Preferences.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Preferences.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](plugin_manager: PluginManager, common_schema_id: string): Preferences;

        // Signals
        /** @signal */
        connect<K extends keyof Preferences.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Preferences.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Preferences.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Preferences.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Preferences.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Preferences.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param builder 
         * @param settings 
         * @param glade_widget_name 
         * @param stitle 
         * @param icon_filename 
         */
        add_from_builder(builder: Gtk.Builder, settings: Gio.Settings, glade_widget_name: string, stitle: string, icon_filename: string): void;

        is_dialog_created(): boolean;

        /**
         * This will register all the properties names of the format described above
         * without considering the UI. Useful if you have the widgets shown elsewhere
         * but you want them to be part of preferences system.
         * @param builder GtkBuilder object containing the properties widgets.
         * @param settings 
         * @param parent Parent widget in the builder object
         */
        register_all_properties_from_builder_xml(builder: Gtk.Builder, settings: Gio.Settings, parent: Gtk.Widget): void;

        /**
         * This registers only one widget. The widget could be shown elsewhere.
         * The widget needs to fulfill the properties described in
         * `anjuta_preferences_add_page` documentation.
         * @param settings the {@link Gio.Settings} object associated with that property
         * @param object Widget to register
         * @param key Property key
         * @returns `true` if sucessful.
         */
        register_property(settings: Gio.Settings, object: Gtk.Widget, key: string): boolean;

        /**
         * @param page_name 
         */
        remove_page(page_name: string): void;
    }


    namespace PreferencesDialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Dialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class PreferencesDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PreferencesDialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreferencesDialog.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PreferencesDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): PreferencesDialog;

        // Signals
        /** @signal */
        connect<K extends keyof PreferencesDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreferencesDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PreferencesDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreferencesDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PreferencesDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PreferencesDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds a widget page in preferences dialog. Name and icon appears
         * on the left icon list where differnt pages are selected.
         * @param name Name of the preferences page.
         * @param title Title of the page
         * @param icon Icon file name.
         * @param page page widget.
         */
        add_page(name: string, title: string, icon: GdkPixbuf.Pixbuf, page: Gtk.Widget): void;

        /**
         * Removes a preferences page.
         * @param title Name of the preferences page.
         */
        remove_page(title: string): void;
    }


    namespace Profile {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a plugin is added or removed from the list.
             * @signal
             * @run-first
             */
            changed: () => void;
            /**
             * @signal
             * @run-first
             */
            descoped: () => void;
            /**
             * Emitted when a plugin is added in the list.
             * @signal
             * @run-first
             */
            "plugin-added": (arg0: null) => void;
            /**
             * Emitted when a plugin is removed from the list.
             * @signal
             * @run-first
             */
            "plugin-removed": (arg0: null) => void;
            /**
             * @signal
             * @run-first
             */
            scoped: () => void;
            "notify::plugin-manager": (pspec: GObject.ParamSpec) => void;
            "notify::profile-name": (pspec: GObject.ParamSpec) => void;
            "notify::sync-file": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            plugin_manager: PluginManager;
            pluginManager: PluginManager;
            profile_name: string;
            profileName: string;
            sync_file: Gio.File;
            syncFile: Gio.File;
        }
    }

    /**
     * Stores a plugin list.
     * @gir-type Class
     */
    class Profile extends GObject.Object {
        static $gtype: GObject.GType<Profile>;

        // Properties
        get plugin_manager(): PluginManager;
        set plugin_manager(val: PluginManager);

        get pluginManager(): PluginManager;
        set pluginManager(val: PluginManager);

        get profile_name(): string;
        set profile_name(val: string);

        get profileName(): string;
        set profileName(val: string);

        get sync_file(): Gio.File;
        set sync_file(val: Gio.File);

        get syncFile(): Gio.File;
        set syncFile(val: Gio.File);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Profile.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Profile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string, plugin_manager: PluginManager): Profile;

        // Signals
        /** @signal */
        connect<K extends keyof Profile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Profile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Profile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Profile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Profile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Profile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_changed(): void;

        /**
         * @virtual
         */
        vfunc_descoped(): void;

        /**
         * @param plugin 
         * @virtual
         */
        vfunc_plugin_added(plugin: PluginHandle): void;

        /**
         * @param plugin 
         * @virtual
         */
        vfunc_plugin_removed(plugin: PluginHandle): void;

        /**
         * @virtual
         */
        vfunc_scoped(): void;

        // Methods
        /**
         * Add one plugin into the profile plugin list.
         * @param plugin a {@link Anjuta.PluginHandle}.
         */
        add_plugin(plugin: PluginHandle): void;

        /**
         * Add all plugins inscribed in the xml file into the profile plugin list.
         * @param profile_xml_file xml file containing plugin list.
         * @param exclude_from_sync `true` if these plugins shouldn't be saved in user session.
         * @returns `true` on success, `false` otherwise.
         */
        add_plugins_from_xml(profile_xml_file: Gio.File, exclude_from_sync: boolean): boolean;

        /**
         * Get the profile name.
         * @returns the profile name.
         */
        get_name(): string;

        /**
         * Check if a plugin is included in the profile plugin list.
         * @param plugin a {@link Anjuta.PluginHandle}
         * @returns `true` if the plugin is included in the list.
         */
        has_plugin(plugin: PluginHandle): boolean;

        /**
         * Load the profile
         * @returns TRUE on success, FALSE otherwise.
         */
        load(): boolean;

        /**
         * Remove one plugin from the profile plugin list.
         * @param plugin a {@link Anjuta.PluginHandle}.
         */
        remove_plugin(plugin: PluginHandle): void;

        /**
         * Define the file used to save plugins list.
         * @param sync_file file used to save profile.
         */
        set_sync_file(sync_file: Gio.File): void;

        /**
         * Save the current plugins list in the xml file set with `anjuta_profile_set_sync_file()`.
         * @returns `true` on success, `false` otherwise.
         */
        sync(): boolean;

        /**
         * Unload the profile
         * @returns TRUE on success, FALSE otherwise.
         */
        unload(): boolean;
    }


    namespace ProfileManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a profile is removed from the stack. If the profile manager
             * is not frozen, the current profile will be unloaded and the previous one
             * will be loaded.
             * @signal
             * @run-first
             */
            "profile-popped": (arg0: Profile) => void;
            /**
             * Emitted when a profile is added in the stack. If the profile manager is
             * not frozen, the current profile will be unloaded and the new one
             * will be loaded.
             * @signal
             * @run-first
             */
            "profile-pushed": (arg0: Profile) => void;
            "notify::plugin-manager": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            plugin_manager: PluginManager;
            pluginManager: PluginManager;
        }
    }

    /**
     * Stores stack of {@link Anjuta.Profile}.
     * @gir-type Class
     */
    class ProfileManager extends GObject.Object {
        static $gtype: GObject.GType<ProfileManager>;

        // Properties
        get plugin_manager(): PluginManager;
        set plugin_manager(val: PluginManager);

        get pluginManager(): PluginManager;
        set pluginManager(val: PluginManager);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProfileManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ProfileManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](plugin_manager: PluginManager): ProfileManager;

        // Signals
        /** @signal */
        connect<K extends keyof ProfileManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProfileManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ProfileManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProfileManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ProfileManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProfileManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param profile 
         * @virtual
         */
        vfunc_profile_popped(profile: Profile): void;

        /**
         * @param profile 
         * @virtual
         */
        vfunc_profile_pushed(profile: Profile): void;

        // Methods
        /**
         * Close the {@link Anjuta.ProfileManager} causing "descoped" to be emitted and
         * all queued and previous profiles to be released. This function is to be used
         * when destroying an Anjuta instance.
         */
        close(): void;

        /**
         * Freeze the plugin manager. In this state, plugins can be added and removed
         * from the stack without triggering any change in the current profile. It is
         * possible to freeze the manager several times but it will be back in its normal
         * state only after as much call of `anjuta_profile_manager_thaw()`.
         */
        freeze(): void;

        /**
         * Return the current profile.
         * @returns a {@link Anjuta.Profile} object or `null` if the profile stack is empty.
         */
        get_current(): (Profile | null);

        /**
         * Remove a profile from the profile manager stack. If the manager is not
         * frozen, only the current profile can be removed. It will be unloaded and
         * the previous profile will be loaded.
         * If the manager is frozen, the current profile or the last pushed profile
         * can be removed.
         * @param profile the {@link Anjuta.Profile} to remove.
         * @returns `true` on success, `false` otherwise.
         */
        pop(profile: Profile): boolean;

        /**
         * Add a new profile at the top of the profile manager stack. If the profile
         * manager is not frozen, this new profile will be loaded immediatly and
         * become the current profile.
         * @param profile the new {@link Anjuta.Profile}.
         * @returns `true` on success, `false` otherwise.
         */
        push(profile: Profile): boolean;

        /**
         * Put back the plugin manager in its normal mode after calling
         * `anjuta_profile_manager_freeze()`. It will load a new profile if one has been
         * added while the manager was frozen.
         * @returns `true` on success, `false` otherwise.
         */
        thaw(): boolean;
    }


    namespace ProjectNode {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            loaded: (arg0: null, arg1: GLib.Error) => void;
            /**
             * @signal
             * @run-last
             */
            updated: (arg0: null, arg1: GLib.Error) => void;
            "notify::file": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            file: Gio.File;
            name: string;
            state: ProjectNodeState;
            type: ProjectNodeType;
        }
    }

    /**
     * The {@link Anjuta.ProjectNode} struct contains private data only, and should
     * accessed using the functions below.
     * @gir-type Class
     */
    class ProjectNode extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<ProjectNode>;

        // Properties
        get file(): Gio.File;
        set file(val: Gio.File);

        get name(): string;
        set name(val: string);

        get state(): ProjectNodeState;
        set state(val: ProjectNodeState);

        get type(): ProjectNodeType;
        set type(val: ProjectNodeType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProjectNode.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ProjectNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ProjectNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProjectNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ProjectNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProjectNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ProjectNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProjectNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param node 
         */
        append(node: ProjectNode): ProjectNode;

        check(): void;

        /**
         * @param func 
         */
        children_foreach(func: ProjectNodeForeachFunc): void;

        /**
         * @param func 
         */
        children_traverse(func: ProjectNodeTraverseFunc): ProjectNode;

        /**
         * @param state 
         */
        clear_state(state: ProjectNodeState): boolean;

        dump(): void;

        first_child(): ProjectNode;

        /**
         * @param order 
         * @param func 
         */
        foreach(order: GLib.TraverseType, func: ProjectNodeForeachFunc): void;

        get_file(): Gio.File;

        get_full_type(): ProjectNodeType;

        /**
         * @param directory Directory to search in
         */
        get_group_from_file(directory: Gio.File): ProjectNode;

        /**
         * @param id 
         * @param name 
         */
        get_map_property(id: string, name: string): ProjectProperty;

        get_name(): string;

        get_node_type(): ProjectNodeType;

        get_properties(): ProjectProperty[];

        get_properties_info(): ProjectPropertyInfo[];

        /**
         * @param id Property identifier
         */
        get_property(id: string): ProjectProperty;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.get_property
        get_property(...args: never[]): any;

        /**
         * @param id Property identifier
         */
        get_property_info(id: string): ProjectPropertyInfo;

        /**
         * @param file The file to query the source for
         */
        get_source_from_file(file: Gio.File): ProjectNode;

        get_state(): ProjectNodeState;

        /**
         * @param sibling 
         * @param node 
         */
        insert_after(sibling: (ProjectNode | null), node: ProjectNode): ProjectNode;

        /**
         * @param sibling 
         * @param node 
         */
        insert_before(sibling: (ProjectNode | null), node: ProjectNode): ProjectNode;

        /**
         * @param info 
         * @param property 
         */
        insert_property(info: ProjectPropertyInfo, property: ProjectProperty): ProjectProperty;

        /**
         * @param info 
         */
        insert_property_info(info: ProjectPropertyInfo): ProjectPropertyInfo;

        last_child(): ProjectNode;

        next_sibling(): ProjectNode;

        /**
         * @param n 
         */
        nth_child(n: number): ProjectNode;

        parent(): ProjectNode;

        /**
         * @param type 
         */
        parent_type(type: ProjectNodeType): ProjectNode;

        /**
         * @param node 
         */
        prepend(node: ProjectNode): ProjectNode;

        prev_sibling(): ProjectNode;

        remove(): ProjectNode;

        /**
         * @param property 
         */
        remove_property(property: ProjectProperty): ProjectProperty;

        root(): ProjectNode;

        /**
         * @param state 
         */
        set_state(state: ProjectNodeState): boolean;

        /**
         * @param order 
         * @param func 
         */
        traverse(order: GLib.TraverseType, func: ProjectNodeTraverseFunc): ProjectNode;
    }


    namespace SavePrompt {
        // Signal signatures
        interface SignalSignatures extends Gtk.MessageDialog.SignalSignatures {
            "notify::buttons": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::message-area": (pspec: GObject.ParamSpec) => void;
            "notify::message-type": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-text": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-use-markup": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::use-markup": (pspec: GObject.ParamSpec) => void;
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.MessageDialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class SavePrompt extends Gtk.MessageDialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<SavePrompt>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SavePrompt.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SavePrompt.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](parent: Gtk.Window): SavePrompt;

        // Conflicted with Gtk.Dialog.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof SavePrompt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SavePrompt.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SavePrompt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SavePrompt.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SavePrompt.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SavePrompt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_items_count(): number;
    }


    namespace Serializer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::filepath": (pspec: GObject.ParamSpec) => void;
            "notify::mode": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            filepath: string;
            mode: SerializerMode;
        }
    }

    /**
     * @gir-type Class
     */
    class Serializer extends GObject.Object {
        static $gtype: GObject.GType<Serializer>;

        // Properties
        /**
         * @construct-only
         */
        get filepath(): string;

        /**
         * @construct-only
         */
        get mode(): SerializerMode;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Serializer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Serializer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](filepath: string, mode: SerializerMode): Serializer;

        // Signals
        /** @signal */
        connect<K extends keyof Serializer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Serializer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Serializer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Serializer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Serializer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Serializer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param name 
         * @param value 
         */
        read_float(name: string, value: number): boolean;

        /**
         * @param name 
         * @param value 
         */
        read_int(name: string, value: number): boolean;

        /**
         * @param name 
         * @param value 
         * @param replace 
         */
        read_string(name: string, value: string, replace: boolean): boolean;

        /**
         * @param name 
         * @param value 
         */
        write_float(name: string, value: number): boolean;

        /**
         * @param name 
         * @param value 
         */
        write_int(name: string, value: number): boolean;

        /**
         * @param name 
         * @param value 
         */
        write_string(name: string, value: string): boolean;
    }


    namespace Session {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class Session extends GObject.Object {
        static $gtype: GObject.GType<Session>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Session.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](session_directory: string): Session;

        // Signals
        /** @signal */
        connect<K extends keyof Session.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Session.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Session.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Session.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Clears the session.
         */
        clear(): void;

        /**
         * Clears the given section in session object.
         * @param section Section to clear.
         */
        clear_section(section: string): void;

        /**
         * Return a GFile corresponding to the URI and and optional fragment,
         * normally read from a session key.
         * The path is expected to be relative to the session directory but it works
         * with an absolute URI, in this case it returns the same file than
         * g_file_new_for_uri.
         * It is useful to keep only relative file paths in a session file to be able
         * to copy the whole project without breaking references.
         * @param uri a relative URI from a key
         * @param fragment fragment part of the URI if existing, can be `null`
         * @returns A new GFile that has to be freed with `g_object_unref()`.
         */
        get_file_from_relative_uri(uri: string, fragment: (string | null)): Gio.File;

        /**
         * Get a float `value` of `key` in given `section`.
         * @param section Section.
         * @param key Key name.
         * @returns Key value
         */
        get_float(section: string, key: string): number;

        /**
         * Get an integer `value` of `key` in given `section`.
         * @param section Section.
         * @param key Key name.
         * @returns Key value
         */
        get_int(section: string, key: string): number;

        /**
         * Return an URI relative to the session directory file with an optional
         * fragment.
         * It is useful to keep only relative file paths in a session file to be able
         * to copy the whole project without breaking references.
         * @param file a GFile
         * @param fragment an optional fragment
         * @returns A string that has to be freed with `g_free()`.
         */
        get_relative_uri_from_file(file: Gio.File, fragment: string): string;

        /**
         * Returns the directory corresponding to this session object.
         * @returns session directory
         */
        get_session_directory(): string;

        /**
         * Gets the session filename corresponding to this session object.
         * @returns session (absolute) filename
         */
        get_session_filename(): string;

        /**
         * Get a string `value` of `key` in given `section`.
         * @param section Section.
         * @param key Key name.
         * @returns Key value
         */
        get_string(section: string, key: string): string;

        /**
         * Set a float `value` to `key` in given `section`.
         * @param section Section.
         * @param key Key name.
         * @param value Key value
         */
        set_float(section: string, key: string, value: number): void;

        /**
         * Set an integer `value` to `key` in given `section`.
         * @param section Section.
         * @param key Key name.
         * @param value Key value
         */
        set_int(section: string, key: string, value: number): void;

        /**
         * Set a string `value` to `key` in given `section`.
         * @param section Section.
         * @param key Key name.
         * @param value Key value
         */
        set_string(section: string, key: string, value: string): void;

        /**
         * Synchronizes session object with session file
         */
        sync(): void;
    }


    namespace Status {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            busy: (arg0: boolean) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class Status extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Status>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Status.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Status.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Status;

        // Signals
        /** @signal */
        connect<K extends keyof Status.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Status.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Status.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Status.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Status.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Status.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param state 
         * @virtual
         */
        vfunc_busy(state: boolean): void;

        // Methods
        /**
         * @param widget 
         */
        add_widget(widget: Gtk.Widget): void;

        busy_pop(): void;

        busy_push(): void;

        clear_stack(): void;

        /**
         * @param disable_splash 
         */
        disable_splash(disable_splash: boolean): void;

        pop(): void;

        /**
         * @param ticks 
         */
        progress_add_ticks(ticks: number): void;

        /**
         * @param ticks 
         * @param text 
         */
        progress_increment_ticks(ticks: number, text: string): void;

        /**
         * @param text 
         */
        progress_pulse(text: string): void;

        progress_reset(): void;

        /**
         * @param icon 
         * @param text 
         */
        progress_tick(icon: GdkPixbuf.Pixbuf, text: string): void;

        /**
         * @param splash_file 
         * @param splash_progress_position 
         */
        set_splash(splash_file: string, splash_progress_position: number): void;

        /**
         * @param title 
         */
        set_title(title: string): void;

        /**
         * @param window 
         */
        set_title_window(window: Gtk.Widget): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace SyncCommand {
        // Signal signatures
        interface SignalSignatures extends Command.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends Command.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class SyncCommand extends Command {
        static $gtype: GObject.GType<SyncCommand>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SyncCommand.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SyncCommand.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof SyncCommand.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SyncCommand.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SyncCommand.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SyncCommand.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SyncCommand.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SyncCommand.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace Tabber {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            "notify::notebook": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Container.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            notebook: GObject.Object;
        }
    }

    /**
     * @gir-type Class
     */
    class Tabber extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Tabber>;

        // Properties
        /**
         * @construct-only
         */
        set notebook(val: GObject.Object);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Tabber.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Tabber.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](notebook: Gtk.Notebook): Tabber;

        // Signals
        /** @signal */
        connect<K extends keyof Tabber.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tabber.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Tabber.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tabber.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Tabber.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Tabber.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Append a tab to the AnjutaTabber widget
         * @param tab_label widget used as tab label
         */
        add_tab(tab_label: Gtk.Widget): void;

        /**
         * Prepend a tab to the AnjutaTabber widget
         * @param tab_label widget used as tab label
         */
        prepend_tab(tab_label: Gtk.Widget): void;
    }


    namespace TokenFile {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class TokenFile extends GObject.Object {
        static $gtype: GObject.GType<TokenFile>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TokenFile.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TokenFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](file: Gio.File): TokenFile;

        // Signals
        /** @signal */
        connect<K extends keyof TokenFile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TokenFile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TokenFile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TokenFile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TokenFile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TokenFile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        free(): void;

        /**
         * @param location 
         * @param token 
         */
        get_token_location(location: TokenFileLocation, token: Token): boolean;

        /**
         * Returns the position of the token in the file. This position is a number
         * which doesn't correspond to a line number or a character but respect the
         * order of token in the file.
         * @param token token
         * @returns The position of the token or 0 if the token is not in the file.
         */
        get_token_position(token: Token): number;

        is_dirty(): boolean;

        /**
         * @param new_file 
         */
        move(new_file: Gio.File): void;

        save(): boolean;

        unload(): boolean;

        /**
         * Update the file with all changed token starting from `token`. The function can
         * return an error if the token is not in the file.
         * @param token Token to update.
         * @returns `true` is the update is done without error.
         */
        update(token: Token): boolean;
    }


    namespace TreeComboBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.ToggleButton.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            changed: () => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            popdown: () => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            popup: () => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::draw-indicator": (pspec: GObject.ParamSpec) => void;
            "notify::inconsistent": (pspec: GObject.ParamSpec) => void;
            "notify::always-show-image": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::image-position": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::relief": (pspec: GObject.ParamSpec) => void;
            "notify::use-stock": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ToggleButton.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellLayout.ConstructorProps {
            model: Gtk.TreeModel;
        }
    }

    /**
     * @gir-type Class
     */
    class TreeComboBox extends Gtk.ToggleButton implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable, Gtk.CellLayout {
        static $gtype: GObject.GType<TreeComboBox>;

        // Properties
        get model(): Gtk.TreeModel;
        set model(val: Gtk.TreeModel);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TreeComboBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TreeComboBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): TreeComboBox;

        // Signals
        /** @signal */
        connect<K extends keyof TreeComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeComboBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TreeComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeComboBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TreeComboBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TreeComboBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_changed(): void;

        // Methods
        /**
         * @param iter 
         */
        get_active_iter(iter: Gtk.TreeIter): boolean;

        /**
         * @param index 
         */
        set_active(index: number): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.ToggleButton.set_active
        set_active(...args: never[]): any;

        /**
         * @param iter 
         */
        set_active_iter(iter: Gtk.TreeIter): void;

        /**
         * @param str 
         */
        set_invalid_text(str: string): void;

        /**
         * @param model 
         */
        set_model(model: Gtk.TreeModel): void;

        /**
         * @param func 
         */
        set_valid_function(func: Gtk.TreeModelFilterVisibleFunc): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         */
        add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         */
        clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         */
        clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @returns the cell area used by `cell_layout`, or `null` in case no cell area is used.
         */
        get_area(): (Gtk.CellArea | null);

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @returns a list of cell renderers. The list, but not the renderers has     been newly allocated and should be freed with `g_list_free()`     when no longer needed.
         */
        get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         */
        reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         */
        set_cell_data_func(cell: Gtk.CellRenderer, func: (Gtk.CellLayoutDataFunc | null)): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         * @virtual
         */
        vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         * @virtual
         */
        vfunc_clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         * @virtual
         */
        vfunc_clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @virtual
         */
        vfunc_get_area(): (Gtk.CellArea | null);

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @virtual
         */
        vfunc_get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         * @virtual
         */
        vfunc_reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         * @virtual
         */
        vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func: (Gtk.CellLayoutDataFunc | null)): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace UI {
        // Signal signatures
        interface SignalSignatures extends Gtk.UIManager.SignalSignatures {
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::ui": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.UIManager.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class UI extends Gtk.UIManager implements Gtk.Buildable {
        static $gtype: GObject.GType<UI>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UI.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UI.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): UI;

        // Signals
        /** @signal */
        connect<K extends keyof UI.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UI.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UI.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UI.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UI.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UI.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param filename 
         */
        static load_accels(filename: string): void;

        /**
         * @param filename 
         */
        static save_accels(filename: string): void;

        // Methods
        /**
         * Activates the action `action_name` in the {@link Gtk.ActionGroup} `action_group`.
         * "ActionGroupName/ActionName". Note that it will only work if the group has
         * been added using methods in {@link Anjuta.UI}.
         * @param action_group Action group.
         * @param action_name Action name.
         */
        activate_action_by_group(action_group: Gtk.ActionGroup, action_name: string): void;

        /**
         * Activates the action represented by `action_path`. The path is in the form
         * "ActionGroupName/ActionName". Note that it will only work if the group has
         * been added using methods in {@link Anjuta.UI}.
         * @param action_path Path of the action in the form "GroupName/ActionName"
         */
        activate_action_by_path(action_path: string): void;

        /**
         * This is similar to `anjuta_ui_add_action_group_entries()`, except that
         * it adds {@link Gtk.ActionGroup} object `action_group` directly. All actions in this
         * group are automatically registered in {@link Anjuta.UI} and can be retrieved
         * normally with `anjuta_ui_get_action()`.
         * @param action_group_name Untranslated name of the action group.
         * @param action_group_label Translated label of the action group.
         * @param action_group {@link Gtk.ActionGroup} object to add.
         * @param can_customize 
         */
        add_action_group(action_group_name: string, action_group_label: string, action_group: Gtk.ActionGroup, can_customize: boolean): void;

        /**
         * {@link Gtk.Action} objects are created from the {@link Gtk.ActionEntry} structures and
         * added to the UI Manager. "activate" signal of {@link Gtk.Action} is connected for
         * all the action objects using the callback in the entry structure and the
         * `user_data` passed here.
         * 
         * This group of actions are registered with the name `action_group_name`
         * in {@link Anjuta.UI}. A {@link Gtk.Action} object from this action group can be later
         * retrieved by `anjuta_ui_get_action()` using `action_group_name` and action name.
         * `action_group_label` is used as the display name for the action group in
         * UI manager dialog where action shortcuts are configured.
         * @param action_group_name Untranslated name of the action group.
         * @param action_group_label Translated label of the action group.
         * @param entries An array of action entries.
         * @param translation_domain The translation domain used to translated the entries. It is usually the GETTEXT_PACKAGE macro in a project.
         * @param can_customize If true the actions are customizable by user.
         * @param user_data User data to pass to action objects. This is the data that will come as user_data in "activate" signal of the actions.
         * @returns A {@link Gtk.ActionGroup} object holding all the action objects.
         */
        add_action_group_entries(action_group_name: string, action_group_label: string, entries: Gtk.ActionEntry[], translation_domain: string, can_customize: boolean, user_data: null): Gtk.ActionGroup;

        /**
         * This is similar to `anjuta_ui_add_action_group_entries()`, except that
         * it adds {@link Gtk.ToggleAction} objects after creating them from the `entries`.
         * @param action_group_name Untranslated name of the action group.
         * @param action_group_label Translated label of the action group.
         * @param entries An array of action entries.
         * @param translation_domain The translation domain used to translated the entries. It is usually the GETTEXT_PACKAGE macro in a project.
         * @param can_customize 
         * @param user_data User data to pass to action objects. This is the data that will come as user_data in "activate" signal of the actions.
         * @returns A {@link Gtk.ActionGroup} object holding all the action objects.
         */
        add_toggle_action_group_entries(action_group_name: string, action_group_label: string, entries: Gtk.ToggleActionEntry[], translation_domain: string, can_customize: boolean, user_data: null): Gtk.ActionGroup;

        /**
         * Dumps the current UI XML tree in STDOUT. Useful for debugging.
         */
        dump_tree(): void;

        /**
         * Creates an accel editor widget and returns it. It should be added to
         * container and displayed to users.
         * @returns a {@link Gtk.Widget} containing the editor.
         */
        get_accel_editor(): Gtk.Widget;

        /**
         * Returns the {@link Gtk.AccelGroup} object associated with this UI manager.
         * @returns A {@link Gtk.AccelGroup} object.
         */
        get_accel_group(): Gtk.AccelGroup;

        /**
         * Returns the action object with the name `action_name` in `action_group_name`.
         * Note that it will be only sucessully returned if the group has been added
         * using methods in {@link Anjuta.UI}.
         * @param action_group_name Group name.
         * @param action_name Action name.
         * @returns A {@link Gtk.Action} object
         */
        get_action(action_group_name: string, action_name: string): Gtk.Action;

        /**
         * @param args 
         */
    // Conflicted with Gtk.UIManager.get_action
        get_action(...args: never[]): any;

        /**
         * This returns the IconFactory object. All icons should be registered using
         * this icon factory. Read the documentation for {@link Gtk.IconFactory} on how to
         * use it.
         * @returns The {@link Gtk.IconFactory} object used by it
         */
        get_icon_factory(): Gtk.IconFactory;

        /**
         * Merges XML UI definition in `ui_filename`. UI elements defined in the xml
         * are merged with existing UI elements in UI manager. The format of the
         * file content is the standard XML UI definition tree. For more detail,
         * read the documentation for {@link Gtk.UIManager}.
         * @param ui_filename UI file to merge into UI manager.
         * @returns Integer merge ID
         */
        merge(ui_filename: string): number;

        /**
         * Removes a previous added action group. All actions in this group are
         * also unregistered from UI manager.
         * @param action_group {@link Gtk.ActionGroup} object to remove.
         */
        remove_action_group(action_group: Gtk.ActionGroup): void;

        unload_accels(): void;

        /**
         * Unmerges UI with the ID value `id` (returned by `anjuta_ui_merge()` when
         * it was merged. For more detail, read the documentation for {@link Gtk.UIManager}.
         * @param id Merge ID returned by `anjuta_ui_merge()`.
         */
        unmerge(id: number): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, null];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @returns the name set with `gtk_buildable_set_name()`
         */
        get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         */
        parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk.Builder, name: string, value: (GObject.Value | any)): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        set_name(name: string): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @virtual
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, never];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         * @virtual
         */
        vfunc_set_name(name: string): void;
    }


    namespace VcsStatusTreeView {
        // Signal signatures
        interface SignalSignatures extends Gtk.TreeView.SignalSignatures {
            "notify::conflicted-selectable": (pspec: GObject.ParamSpec) => void;
            "notify::show-status": (pspec: GObject.ParamSpec) => void;
            "notify::status-codes": (pspec: GObject.ParamSpec) => void;
            "notify::activate-on-single-click": (pspec: GObject.ParamSpec) => void;
            "notify::enable-grid-lines": (pspec: GObject.ParamSpec) => void;
            "notify::enable-search": (pspec: GObject.ParamSpec) => void;
            "notify::enable-tree-lines": (pspec: GObject.ParamSpec) => void;
            "notify::expander-column": (pspec: GObject.ParamSpec) => void;
            "notify::fixed-height-mode": (pspec: GObject.ParamSpec) => void;
            "notify::headers-clickable": (pspec: GObject.ParamSpec) => void;
            "notify::headers-visible": (pspec: GObject.ParamSpec) => void;
            "notify::hover-expand": (pspec: GObject.ParamSpec) => void;
            "notify::hover-selection": (pspec: GObject.ParamSpec) => void;
            "notify::level-indentation": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::reorderable": (pspec: GObject.ParamSpec) => void;
            "notify::rubber-banding": (pspec: GObject.ParamSpec) => void;
            "notify::rules-hint": (pspec: GObject.ParamSpec) => void;
            "notify::search-column": (pspec: GObject.ParamSpec) => void;
            "notify::show-expanders": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-column": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscroll-policy": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll-policy": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.TreeView.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            conflicted_selectable: boolean;
            conflictedSelectable: boolean;
            show_status: boolean;
            showStatus: boolean;
            status_codes: VcsStatus;
            statusCodes: VcsStatus;
        }
    }

    /**
     * @gir-type Class
     */
    class VcsStatusTreeView extends Gtk.TreeView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<VcsStatusTreeView>;

        // Properties
        /**
         * @construct-only
         */
        get conflicted_selectable(): boolean;

        /**
         * @construct-only
         */
        get conflictedSelectable(): boolean;

        get show_status(): boolean;
        set show_status(val: boolean);

        get showStatus(): boolean;
        set showStatus(val: boolean);

        /**
         * @construct-only
         */
        get status_codes(): VcsStatus;

        /**
         * @construct-only
         */
        get statusCodes(): VcsStatus;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VcsStatusTreeView.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VcsStatusTreeView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): VcsStatusTreeView;

        // Signals
        /** @signal */
        connect<K extends keyof VcsStatusTreeView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcsStatusTreeView.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof VcsStatusTreeView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcsStatusTreeView.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof VcsStatusTreeView.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcsStatusTreeView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param path 
         * @param status 
         * @param selected 
         */
        add(path: string, status: VcsStatus, selected: boolean): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Container.add
        add(...args: never[]): any;

        destroy(): void;

        select_all(): void;

        unselect_all(): void;

        /**
         * Horizontal {@link Gtk.Adjustment} of the scrollable widget. This adjustment is
         * shared between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Verical {@link Gtk.Adjustment} of the scrollable widget. This adjustment is shared
         * between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @returns `true` if `border` has been set
         */
        get_border(): [boolean, Gtk.Border];

        /**
         * Retrieves the {@link Gtk.Adjustment} used for horizontal scrolling.
         * @returns horizontal {@link Gtk.Adjustment}.
         */
        get_hadjustment(): Gtk.Adjustment;

        /**
         * Gets the horizontal {@link Gtk.ScrollablePolicy}.
         * @returns The horizontal {@link Gtk.ScrollablePolicy}.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Retrieves the {@link Gtk.Adjustment} used for vertical scrolling.
         * @returns vertical {@link Gtk.Adjustment}.
         */
        get_vadjustment(): Gtk.Adjustment;

        /**
         * Gets the vertical {@link Gtk.ScrollablePolicy}.
         * @returns The vertical {@link Gtk.ScrollablePolicy}.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Sets the horizontal adjustment of the {@link Gtk.Scrollable}.
         * @param hadjustment a {@link Gtk.Adjustment}
         */
        set_hadjustment(hadjustment: (Gtk.Adjustment | null)): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * horizontal scrolling should start below the minimum width or
         * below the natural width.
         * @param policy the horizontal {@link Gtk.ScrollablePolicy}
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Sets the vertical adjustment of the {@link Gtk.Scrollable}.
         * @param vadjustment a {@link Gtk.Adjustment}
         */
        set_vadjustment(vadjustment: (Gtk.Adjustment | null)): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * vertical scrolling should start below the minimum height or
         * below the natural height.
         * @param policy the vertical {@link Gtk.ScrollablePolicy}
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @virtual
         */
        vfunc_get_border(): [boolean, Gtk.Border];
    }


    /**
     * @gir-type Alias
     */
    type AsyncCommandClass = typeof AsyncCommand;

    /**
     * @gir-type Struct
     */
    abstract class AsyncCommandPriv {
        static $gtype: GObject.GType<AsyncCommandPriv>;
    }


    /**
     * @gir-type Alias
     */
    type AsyncNotifyClass = typeof AsyncNotify;

    /**
     * @gir-type Struct
     */
    abstract class AsyncNotifyPriv {
        static $gtype: GObject.GType<AsyncNotifyPriv>;
    }


    /**
     * @gir-type Alias
     */
    type AutogenClass = typeof Autogen;

    /**
     * @gir-type Alias
     */
    type CModuleClass = typeof CModule;

    /**
     * @gir-type Alias
     */
    type CPluginFactoryClass = typeof CPluginFactory;

    /**
     * @gir-type Alias
     */
    type CellRendererCaptionedImageClass = typeof CellRendererCaptionedImage;

    /**
     * @gir-type Alias
     */
    type CellRendererDiffClass = typeof CellRendererDiff;

    /**
     * @gir-type Struct
     */
    abstract class CellRendererDiffPrivate {
        static $gtype: GObject.GType<CellRendererDiffPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type CloseButtonClass = typeof CloseButton;

    /**
     * @gir-type Struct
     */
    abstract class CloseButtonClassPrivate {
        static $gtype: GObject.GType<CloseButtonClassPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ColumnTextViewClass = typeof ColumnTextView;

    /**
     * @gir-type Struct
     */
    abstract class ColumnTextViewPriv {
        static $gtype: GObject.GType<ColumnTextViewPriv>;
    }


    /**
     * @gir-type Alias
     */
    type CommandBarClass = typeof CommandBar;

    /**
     * AnjutaCommandBarEntry is used to add a set of frames and actions to a command
     * bar.
     * @gir-type Struct
     */
    class CommandBarEntry {
        static $gtype: GObject.GType<CommandBarEntry>;

        // Fields
        type: CommandBarEntryType;

        action_name: string;

        label: string;

        tooltip: string;

        stock_icon: string;

        callback: GObject.Callback;
    }


    /**
     * @gir-type Struct
     */
    abstract class CommandBarPriv {
        static $gtype: GObject.GType<CommandBarPriv>;
    }


    /**
     * @gir-type Alias
     */
    type CommandClass = typeof Command;

    /**
     * @gir-type Struct
     */
    abstract class CommandPriv {
        static $gtype: GObject.GType<CommandPriv>;
    }


    /**
     * @gir-type Alias
     */
    type CommandQueueClass = typeof CommandQueue;

    /**
     * @gir-type Struct
     */
    abstract class CommandQueuePriv {
        static $gtype: GObject.GType<CommandQueuePriv>;
    }


    /**
     * @gir-type Alias
     */
    type CompletionClass = typeof Completion;

    /**
     * @gir-type Struct
     */
    abstract class CompletionPrivate {
        static $gtype: GObject.GType<CompletionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DockClass = typeof Dock;

    /**
     * @gir-type Alias
     */
    type DockPaneClass = typeof DockPane;

    /**
     * @gir-type Struct
     */
    abstract class DockPanePriv {
        static $gtype: GObject.GType<DockPanePriv>;
    }


    /**
     * @gir-type Struct
     */
    abstract class DockPriv {
        static $gtype: GObject.GType<DockPriv>;
    }


    /**
     * @gir-type Alias
     */
    type DropEntryClass = typeof DropEntry;

    /**
     * @gir-type Struct
     */
    class Encoding {
        static $gtype: GObject.GType<Encoding>;

        // Static methods
        static get_current(): Encoding;

        /**
         * @param charset 
         */
        static get_from_charset(charset: string): Encoding;

        /**
         * @param index 
         */
        static get_from_index(index: number): Encoding;

        static get_utf8(): Encoding;

        // Methods
        /**
         * Makes a copy of the given encoding.
         * This function is used by language bindings.
         * @returns a new {@link Anjuta.Encoding}.
         */
        copy(): Encoding;

        /**
         * Frees the resources allocated by the given encoding.
         * This function is used by language bindings.
         */
        free(): void;

        get_charset(): string;

        get_name(): string;

        to_string(): string;
    }


    /**
     * @gir-type Alias
     */
    type EntryClass = typeof Entry;

    /**
     * @gir-type Struct
     */
    abstract class EntryPriv {
        static $gtype: GObject.GType<EntryPriv>;
    }


    /**
     * @gir-type Alias
     */
    type EnvironmentEditorClass = typeof EnvironmentEditor;

    /**
     * @gir-type Alias
     */
    type FileDropEntryClass = typeof FileDropEntry;

    /**
     * @gir-type Struct
     */
    abstract class FileDropEntryPriv {
        static $gtype: GObject.GType<FileDropEntryPriv>;
    }


    /**
     * @gir-type Alias
     */
    type FileListClass = typeof FileList;

    /**
     * @gir-type Struct
     */
    abstract class FileListPriv {
        static $gtype: GObject.GType<FileListPriv>;
    }


    /**
     * @gir-type Struct
     */
    class LanguageProposalData {
        static $gtype: GObject.GType<LanguageProposalData>;

        // Fields
        name: string;

        info: string;

        is_func: boolean;

        has_para: boolean;

        // Constructors

        constructor(properties?: Partial<{
            name: string;
            info: string;
            is_func: boolean;
            has_para: boolean;
            type: unknown;
        }>);

        static ["new"](name: string): LanguageProposalData;

        // Methods
        /**
         * Free the given proposal data
         */
        free(): void;
    }


    /**
     * @gir-type Alias
     */
    type LanguageProviderClass = typeof LanguageProvider;

    /**
     * @gir-type Struct
     */
    abstract class LanguageProviderPriv {
        static $gtype: GObject.GType<LanguageProviderPriv>;
    }


    /**
     * @gir-type Alias
     */
    type LauncherClass = typeof Launcher;

    /**
     * @gir-type Struct
     */
    abstract class LauncherPriv {
        static $gtype: GObject.GType<LauncherPriv>;
    }


    /**
     * @gir-type Alias
     */
    type PkgConfigChooserClass = typeof PkgConfigChooser;

    /**
     * @gir-type Struct
     */
    abstract class PkgConfigChooserPrivate {
        static $gtype: GObject.GType<PkgConfigChooserPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PkgScannerClass = typeof PkgScanner;

    /**
     * @gir-type Struct
     */
    abstract class PkgScannerPrivate {
        static $gtype: GObject.GType<PkgScannerPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PluginClass = typeof Plugin;

    /**
     * @gir-type Struct
     */
    class PluginDescription {
        static $gtype: GObject.GType<PluginDescription>;

        // Constructors
        constructor(filename: string);

        static ["new"](filename: string): PluginDescription;

        static new_from_string(data: string): PluginDescription;

        // Methods
        copy(): PluginDescription;

        /**
         * Frees the {@link Anjuta.PluginDescription} instance.
         */
        free(): void;

        /**
         * Returns the value of key as boolean in the given section.
         * @param section Section name.
         * @param keyname Key name.
         * @param val Pointer to value to store retured value.
         * @returns `true` if sucessful, otherwise `false`.
         */
        get_boolean(section: string, keyname: string, val: boolean): boolean;

        /**
         * Returns the value of key as integer in the given section.
         * @param section Section name.
         * @param keyname Key name.
         * @param val Pointer to value to store retured value.
         * @returns `true` if sucessful, otherwise `false`.
         */
        get_integer(section: string, keyname: string, val: number): boolean;

        /**
         * Returns the value of key in the given section in current locale.
         * @param section Section name.
         * @param keyname Key name.
         * @param val Pointer to value to store retured value.
         * @returns `true` if sucessful, otherwise `false`.
         */
        get_locale_string(section: string, keyname: string, val: string): boolean;

        /**
         * Retrieves the value of a key (in the given section) for the given locale.
         * The value returned in `val` must be freed after use.
         * @param section_name Name of the section.
         * @param keyname Name of the key.
         * @param locale The locale for which the value is to be retrieved.
         * @returns `true` if sucessful, otherwise `false`.
         */
        get_raw(section_name: string, keyname: string, locale: string): [boolean, string];

        /**
         * Returns the value of key in the given section.
         * @param section Section name.
         * @param keyname Key name.
         * @param val Pointer to value to store retured value.
         * @returns `true` if sucessful, otherwise `false`.
         */
        get_string(section: string, keyname: string, val: string): boolean;

        /**
         * Override the value of a key in the description. This can be removed using
         * the function `anjuta_plugin_description_remove()`.
         * @param section_name Section name.
         * @param keyname Key name.
         * @param val Pointer to value to store retured value.
         * @returns TRUE if sucessful, otherwise FALSE.
         */
        override(section_name: string, keyname: string, val: string): boolean;

        /**
         * Remove a key from the description.
         * @param section_name Section name.
         * @param keyname Key name.
         * @returns TRUE if sucessful, otherwise FALSE.
         */
        remove(section_name: string, keyname: string): boolean;

        /**
         * Converts the description detains into string format, usually for
         * saving it in a file.
         * @returns The string representation of the description. The returned values must be freed after use.
         */
        to_string(): (string | null);
    }


    /**
     * @gir-type Alias
     */
    type PluginHandleClass = typeof PluginHandle;

    /**
     * @gir-type Struct
     */
    abstract class PluginHandlePriv {
        static $gtype: GObject.GType<PluginHandlePriv>;
    }


    /**
     * @gir-type Alias
     */
    type PluginManagerClass = typeof PluginManager;

    /**
     * @gir-type Struct
     */
    abstract class PluginManagerPriv {
        static $gtype: GObject.GType<PluginManagerPriv>;
    }


    /**
     * @gir-type Struct
     */
    abstract class PluginPrivate {
        static $gtype: GObject.GType<PluginPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PreferencesClass = typeof Preferences;

    /**
     * @gir-type Alias
     */
    type PreferencesDialogClass = typeof PreferencesDialog;

    /**
     * @gir-type Struct
     */
    abstract class PreferencesDialogPrivate {
        static $gtype: GObject.GType<PreferencesDialogPrivate>;
    }


    /**
     * @gir-type Struct
     */
    abstract class PreferencesPriv {
        static $gtype: GObject.GType<PreferencesPriv>;
    }


    /**
     * @gir-type Alias
     */
    type ProfileClass = typeof Profile;

    /**
     * @gir-type Alias
     */
    type ProfileManagerClass = typeof ProfileManager;

    /**
     * @gir-type Struct
     */
    abstract class ProfileManagerPriv {
        static $gtype: GObject.GType<ProfileManagerPriv>;
    }


    /**
     * @gir-type Struct
     */
    abstract class ProfilePriv {
        static $gtype: GObject.GType<ProfilePriv>;
    }


    /**
     * @gir-type Alias
     */
    type ProjectNodeClass = typeof ProjectNode;

    /**
     * @gir-type Struct
     */
    class ProjectNodeInfo {
        static $gtype: GObject.GType<ProjectNodeInfo>;

        // Fields
        mime_type: string;

        // Constructors
        constructor(type: ProjectNodeType, name: string, mime_type: string);

        static ["new"](type: ProjectNodeType, name: string, mime_type: string): ProjectNodeInfo;

        // Methods
        copy(): ProjectNodeInfo;

        free(): void;

        mime(): string;

        name(): string;

        property_help_id(): string;

        type(): ProjectNodeType;
    }


    /**
     * @gir-type Struct
     */
    class ProjectProperty {
        static $gtype: GObject.GType<ProjectProperty>;

        // Fields
        name: string;

        value: string;

        user_data: null;

        // Constructors
        constructor(value: string, name: (string | null), user_data: null);

        static ["new"](value: string, name: (string | null), user_data: null): ProjectProperty;

        // Methods
        copy(): ProjectProperty;

        free(): void;
    }


    /**
     * @gir-type Struct
     */
    class ProjectPropertyInfo {
        static $gtype: GObject.GType<ProjectPropertyInfo>;

        // Fields
        id: string;

        name: string;

        type: ProjectValueType;

        flags: ProjectPropertyFlags;

        description: string;

        user_data: null;

        // Constructors
        constructor(id: string, name: string, type: ProjectValueType, flags: ProjectPropertyFlags, description: string, default_value: ProjectProperty, user_data: null);

        static ["new"](id: string, name: string, type: ProjectValueType, flags: ProjectPropertyFlags, description: string, default_value: ProjectProperty, user_data: null): ProjectPropertyInfo;

        // Methods
        copy(): ProjectPropertyInfo;

        free(): void;
    }


    /**
     * @gir-type Struct
     */
    abstract class Property {
        static $gtype: GObject.GType<Property>;
    }


    /**
     * @gir-type Alias
     */
    type SavePromptClass = typeof SavePrompt;

    /**
     * @gir-type Struct
     */
    abstract class SavePromptPrivate {
        static $gtype: GObject.GType<SavePromptPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SerializerClass = typeof Serializer;

    /**
     * @gir-type Struct
     */
    abstract class SerializerPrivate {
        static $gtype: GObject.GType<SerializerPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SessionClass = typeof Session;

    /**
     * @gir-type Struct
     */
    abstract class SessionPriv {
        static $gtype: GObject.GType<SessionPriv>;
    }


    /**
     * @gir-type Alias
     */
    type ShellIface = typeof Shell;

    /**
     * @gir-type Alias
     */
    type StatusClass = typeof Status;

    /**
     * @gir-type Struct
     */
    abstract class StatusPriv {
        static $gtype: GObject.GType<StatusPriv>;
    }


    /**
     * @gir-type Alias
     */
    type SyncCommandClass = typeof SyncCommand;

    /**
     * @gir-type Alias
     */
    type TabberClass = typeof Tabber;

    /**
     * @gir-type Struct
     */
    abstract class TabberPriv {
        static $gtype: GObject.GType<TabberPriv>;
    }


    /**
     * @gir-type Struct
     */
    abstract class Token {
        static $gtype: GObject.GType<Token>;

        // Methods
        check(): boolean;

        /**
         * @param flags 
         */
        clear_flags(flags: number): void;

        /**
         * @param tokenb 
         */
        compare(tokenb: Token): boolean;

        dump(): void;

        dump_link(): void;

        evaluate(): string;

        evaluate_name(): string;

        free(): Token;

        get_flags(): number;

        get_length(): number;

        get_string(): string;

        get_type(): number;

        is_empty(): boolean;

        remove_item(): void;

        /**
         * @param flags 
         */
        set_flags(flags: number): void;

        /**
         * @param length 
         */
        set_length(length: (bigint | number)): void;

        /**
         * @param value 
         * @param length 
         */
        set_string(value: string, length: (bigint | number)): void;

        /**
         * @param type 
         */
        set_type(type: number): void;
    }


    /**
     * @gir-type Alias
     */
    type TokenFileClass = typeof TokenFile;

    /**
     * @gir-type Struct
     */
    class TokenFileLocation {
        static $gtype: GObject.GType<TokenFileLocation>;

        // Fields
        filename: string;

        line: number;

        column: number;

        // Constructors

        constructor(properties?: Partial<{
            filename: string;
            line: number;
            column: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    abstract class TokenStream {
        static $gtype: GObject.GType<TokenStream>;

        // Methods
        /**
         * Append an already existing token in the output stream.
         * @param token a {@link Anjuta.Token} object.
         */
        append_token(token: Token): void;

        /**
         * Return the current directory.
         * @returns The current directory.
         */
        get_current_directory(): Gio.File;

        /**
         * Return the current file.
         * @returns The current file.
         */
        get_current_file(): Gio.File;

        /**
         * Return the parent stream
         * @returns The parent stream or `null` if there is no parent.
         */
        get_parent(): (TokenStream | null);

        /**
         * Return the root token for the output stream.
         * @returns The output root token.
         */
        get_root(): Token;

        /**
         * Destroy the stream object and return the parent stream if it exists.
         * @returns The parent stream or `null` if there is no parent.
         */
        pop(): (TokenStream | null);

        /**
         * Read token from the input stream and write the content as a C string in the
         * buffer passed as argument.
         * @param buffer a character buffer to fill with token data.
         * @param max_size the size of the buffer.
         * @returns The number of characters written in the buffer.
         */
        read(buffer: string, max_size: (bigint | number)): number;
    }


    /**
     * @gir-type Struct
     */
    abstract class TokenStyle {
        static $gtype: GObject.GType<TokenStyle>;

        // Methods
        /**
         * @param list 
         */
        format(list: Token): void;

        free(): void;

        /**
         * @param list 
         */
        update(list: Token): void;
    }


    /**
     * @gir-type Alias
     */
    type TreeComboBoxClass = typeof TreeComboBox;

    /**
     * @gir-type Struct
     */
    abstract class TreeComboBoxPrivate {
        static $gtype: GObject.GType<TreeComboBoxPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type UIClass = typeof UI;

    /**
     * @gir-type Struct
     */
    abstract class UIPrivate {
        static $gtype: GObject.GType<UIPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class UtilStringMap {
        static $gtype: GObject.GType<UtilStringMap>;

        // Fields
        type: number;

        name: string;

        // Constructors

        constructor(properties?: Partial<{
            type: number;
            name: string;
        }>);
    }


    /**
     * @gir-type Alias
     */
    type VcsStatusTreeViewClass = typeof VcsStatusTreeView;

    /**
     * @gir-type Struct
     */
    abstract class VcsStatusTreeViewPriv {
        static $gtype: GObject.GType<VcsStatusTreeViewPriv>;
    }


    namespace Shell {
        /**
         * Interface for implementing Shell.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Sets a value in the shell with the given name. Any previous value will
             * be overridden. "value_added" signal will be emitted. Objects connecting
             * to this signal can then update their data according to the new value.
             * @param name Name of the value
             * @param value Value to add
             * @virtual
             */
            vfunc_add_value(name: string, value: unknown): void;

            /**
             * Adds `widget` in the shell. The `placement` tells where the widget should
             * appear, but generally it will be overridden by the container
             * (dock, notebook, GtkContainer etc.) saved layout.
             * 
             * Using this method you can pass a custom widget as label.
             * @param widget Then widget to add
             * @param name Name of the widget. None translated string used to identify it in the shell.
             * @param title title of the widget (translated)
             * @param stock_id Icon stock ID. Could be null.
             * @param label Label widget to use
             * @param placement Placement of the widget in shell.
             * @virtual
             */
            vfunc_add_widget_custom(widget: Gtk.Widget, name: string, title: string, stock_id: string, label: Gtk.Widget, placement: ShellPlacement): void;

            /**
             * Adds `widget` in the shell. The `placement` tells where the widget should
             * appear, but generally it will be overridden by the container
             * (dock, notebook, GtkContainer etc.) saved layout.
             * 
             * Normally just use `anjuta_shell_add_widget()` because you do not
             * use locking.
             * @param widget Then widget to add
             * @param name Name of the widget. None translated string used to identify it in the shell.
             * @param title Translated string which is displayed along side the widget when required (eg. as window title or notebook tab label).
             * @param stock_id Icon stock ID. Could be null.
             * @param placement Placement of the widget in shell.
             * @param locked Whether to lock that widget (do not use this, it's only 			useful to some stock plugins
             * @virtual
             */
            vfunc_add_widget_full(widget: Gtk.Widget, name: string, title: string, stock_id: string, placement: ShellPlacement, locked: boolean): void;

            /**
             * Searches the currently available plugins to find the one which
             * implements the given interface as primary interface and returns it. If
             * the plugin is not yet loaded, it will be loaded and activated.
             * The returned object is garanteed to be an implementor of the
             * interface (as exported by the plugin metafile). It only searches
             * from the pool of plugin objects loaded in this shell and can only search
             * by primary interface. If there are more objects implementing this primary
             * interface, user might be prompted to select one from them (and might give
             * the option to use it as default for future queries). A typical usage of this
             * function is:
             * <programlisting>
             * GObject *docman =
             *     anjuta_plugins_get_object (shell, "IAnjutaDocumentManager", error);
             * </programlisting>
             * Notice that this function takes the interface name string as string, unlike
             * `anjuta_plugins_get_interface()` which takes the type directly.
             * @param iface_name The interface implemented by the object to be found
             * @virtual
             */
            vfunc_get_object<T = GObject.Object>(iface_name: string): T;

            /**
             * Retrieves the {@link Anjuta.PluginManager} object associated with the shell.
             * @virtual
             */
            vfunc_get_plugin_manager(): PluginManager;

            /**
             * Retrieves the {@link Anjuta.Preferences} object associated with the shell.
             * @virtual
             */
            vfunc_get_preferences(): Preferences;

            /**
             * Retrieves the {@link Anjuta.ProfileManager} object associated with the shell.
             * @virtual
             */
            vfunc_get_profile_manager(): ProfileManager;

            /**
             * Retrieves the {@link Anjuta.Status} object associated with the shell.
             * @virtual
             */
            vfunc_get_status(): Status;

            /**
             * Retrieves the {@link Anjuta.UI} object associated with the shell.
             * @virtual
             */
            vfunc_get_ui(): UI;

            /**
             * Gets a value from the shell with the given name. The value will be set
             * in the passed value pointer.
             * @param name Name of the value to get
             * @param value Value to get
             * @virtual
             */
            vfunc_get_value(name: string, value: unknown): void;

            /**
             * If the widget is dockable, it hides it.
             * @param widget a {@link Gtk.Widget} to hide.
             * @virtual
             */
            vfunc_hide_dockable_widget(widget: Gtk.Widget): void;

            /**
             * If the widget is dockable, it iconifies it.
             * @param widget a {@link Gtk.Widget} to iconify.
             * @virtual
             */
            vfunc_iconify_dockable_widget(widget: Gtk.Widget): void;

            /**
             * @param phase 
             * @param session 
             * @virtual
             */
            vfunc_load_session(phase: SessionPhase, session: Session): void;

            /**
             * Maximizes a widget so it will occupy all the possible space.
             * @param widget_name Name of the widget to be maximized.
             * @virtual
             */
            vfunc_maximize_widget(widget_name: string): void;

            /**
             * Make sure the widget is visible to user. If the widget is hidden, it will
             * be shown. If it is not visible to user, it will be made visible.
             * @param widget The widget to present
             * @virtual
             */
            vfunc_present_widget(widget: Gtk.Widget): void;

            /**
             * Removes a value from the shell with the given name. "value_removed" signal
             * will be emitted. Objects connecting to this signal can then update their
             * data/internal-state accordingly.
             * @param name Name of the value to remove
             * @virtual
             */
            vfunc_remove_value(name: string): void;

            /**
             * Removes the widget from shell. The widget should have been added before
             * with `anjuta_shell_add_widget`.
             * @param widget The widget to remove
             * @virtual
             */
            vfunc_remove_widget(widget: Gtk.Widget): void;

            /**
             * @param save_prompt 
             * @virtual
             */
            vfunc_save_prompt(save_prompt: SavePrompt): void;

            /**
             * @param phase 
             * @param session 
             * @virtual
             */
            vfunc_save_session(phase: SessionPhase, session: Session): void;

            /**
             * Decrease the count of files that need to be saved
             * @virtual
             */
            vfunc_saving_pop(): void;

            /**
             * Increase the count of files that need to be saved
             * @virtual
             */
            vfunc_saving_push(): void;

            /**
             * If the widget was hidden or iconified, it will make it visible.
             * @param widget a {@link Gtk.Widget} to show.
             * @virtual
             */
            vfunc_show_dockable_widget(widget: Gtk.Widget): void;

            /**
             * Unmaximizes the UI which was previously maximized by
             * `anjuta_shell_maximize_widget`
             * @virtual
             */
            vfunc_unmaximize(): void;

            /**
             * @param name 
             * @param value 
             * @virtual
             */
            vfunc_value_added(name: string, value: unknown): void;

            /**
             * @param name 
             * @virtual
             */
            vfunc_value_removed(name: string): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface ShellNamespace {
        $gtype: GObject.GType<Shell>;
        prototype: Shell;
    }
    /**
     * @gir-type Interface
     */
    interface Shell extends GObject.Object, Shell.Interface {

        // Methods
        /**
         * Sets a value in the shell with the given name. Any previous value will
         * be overridden. "value_added" signal will be emitted. Objects connecting
         * to this signal can then update their data according to the new value.
         * @param name Name of the value
         * @param value Value to add
         */
        add_value(name: string, value: (GObject.Value | any)): void;

        /**
         * Adds `widget` in the shell. The `placement` tells where the widget should
         * appear, but generally it will be overridden by the container
         * (dock, notebook, GtkContainer etc.) saved layout.
         * @param widget Then widget to add
         * @param name Name of the widget. None translated string used to identify it in the shell.
         * @param title Translated string which is displayed along side the widget when required (eg. as window title or notebook tab label).
         * @param stock_id Icon stock ID. Could be null.
         * @param placement Placement of the widget in shell.
         */
        add_widget(widget: Gtk.Widget, name: string, title: string, stock_id: string, placement: ShellPlacement): void;

        /**
         * Adds `widget` in the shell. The `placement` tells where the widget should
         * appear, but generally it will be overridden by the container
         * (dock, notebook, GtkContainer etc.) saved layout.
         * 
         * Using this method you can pass a custom widget as label.
         * @param widget Then widget to add
         * @param name Name of the widget. None translated string used to identify it in the shell.
         * @param title title of the widget (translated)
         * @param stock_id Icon stock ID. Could be null.
         * @param label Label widget to use
         * @param placement Placement of the widget in shell.
         */
        add_widget_custom(widget: Gtk.Widget, name: string, title: string, stock_id: string, label: Gtk.Widget, placement: ShellPlacement): void;

        /**
         * Adds `widget` in the shell. The `placement` tells where the widget should
         * appear, but generally it will be overridden by the container
         * (dock, notebook, GtkContainer etc.) saved layout.
         * 
         * Normally just use `anjuta_shell_add_widget()` because you do not
         * use locking.
         * @param widget Then widget to add
         * @param name Name of the widget. None translated string used to identify it in the shell.
         * @param title Translated string which is displayed along side the widget when required (eg. as window title or notebook tab label).
         * @param stock_id Icon stock ID. Could be null.
         * @param placement Placement of the widget in shell.
         * @param locked Whether to lock that widget (do not use this, it's only 			useful to some stock plugins
         */
        add_widget_full(widget: Gtk.Widget, name: string, title: string, stock_id: string, placement: ShellPlacement, locked: boolean): void;

        /**
         * Freezes addition of any UI elements (widgets) in the shell. All widget
         * additions are queued for later additions when freeze count reaches 0.
         * Any number of this function can be called and each call will increase
         * the freeze count. `anjuta_shell_thaw()` will reduce the freeze count by
         * 1 and real thawing happens when the count reaches 0.
         */
        freeze(): void;

        /**
         * Searches the currently available plugins to find the one which
         * implements the given interface as primary interface and returns it. If
         * the plugin is not yet loaded, it will be loaded and activated.
         * The returned object is garanteed to be an implementor of the
         * interface (as exported by the plugin metafile). It only searches
         * from the pool of plugin objects loaded in this shell and can only search
         * by primary interface. If there are more objects implementing this primary
         * interface, user might be prompted to select one from them (and might give
         * the option to use it as default for future queries). A typical usage of this
         * function is:
         * <programlisting>
         * GObject *docman =
         *     anjuta_plugins_get_object (shell, "IAnjutaDocumentManager", error);
         * </programlisting>
         * Notice that this function takes the interface name string as string, unlike
         * `anjuta_plugins_get_interface()` which takes the type directly.
         * @param iface_name The interface implemented by the object to be found
         * @returns A plugin object implementing the primary interface or `null`.
         */
        get_object<T = GObject.Object>(iface_name: string): T;

        /**
         * Retrieves the {@link Anjuta.PluginManager} object associated with the shell.
         * @returns The {@link Anjuta.PluginManager} object.
         */
        get_plugin_manager(): PluginManager;

        /**
         * Retrieves the {@link Anjuta.Preferences} object associated with the shell.
         * @returns The {@link Anjuta.Preferences} object.
         */
        get_preferences(): Preferences;

        /**
         * Retrieves the {@link Anjuta.ProfileManager} object associated with the shell.
         * @returns The {@link Anjuta.ProfileManager} object.
         */
        get_profile_manager(): ProfileManager;

        /**
         * Retrieves the {@link Anjuta.Status} object associated with the shell.
         * @returns The {@link Anjuta.Status} object.
         */
        get_status(): Status;

        /**
         * Retrieves the {@link Anjuta.UI} object associated with the shell.
         * @returns The {@link Anjuta.UI} object.
         */
        get_ui(): UI;

        /**
         * Gets a value from the shell with the given name. The value will be set
         * in the passed value pointer.
         * @param name Name of the value to get
         * @param value Value to get
         */
        get_value(name: string, value: (GObject.Value | any)): void;

        /**
         * If the widget is dockable, it hides it.
         * @param widget a {@link Gtk.Widget} to hide.
         */
        hide_dockable_widget(widget: Gtk.Widget): void;

        /**
         * If the widget is dockable, it iconifies it.
         * @param widget a {@link Gtk.Widget} to iconify.
         */
        iconify_dockable_widget(widget: Gtk.Widget): void;

        /**
         * Maximizes a widget so it will occupy all the possible space.
         * @param widget_name Name of the widget to be maximized.
         */
        maximize_widget(widget_name: string): void;

        /**
         * Make sure the widget is visible to user. If the widget is hidden, it will
         * be shown. If it is not visible to user, it will be made visible.
         * @param widget The widget to present
         */
        present_widget(widget: Gtk.Widget): void;

        /**
         * Removes a value from the shell with the given name. "value_removed" signal
         * will be emitted. Objects connecting to this signal can then update their
         * data/internal-state accordingly.
         * @param name Name of the value to remove
         */
        remove_value(name: string): void;

        /**
         * Removes the widget from shell. The widget should have been added before
         * with `anjuta_shell_add_widget`.
         * @param widget The widget to remove
         */
        remove_widget(widget: Gtk.Widget): void;

        /**
         * @param prompt 
         */
        save_prompt(prompt: SavePrompt): void;

        /**
         * Decrease the count of files that need to be saved
         */
        saving_pop(): void;

        /**
         * Increase the count of files that need to be saved
         */
        saving_push(): void;

        /**
         * @param session_directory 
         */
        session_load(session_directory: string): void;

        /**
         * @param session_directory 
         */
        session_save(session_directory: string): void;

        /**
         * If the widget was hidden or iconified, it will make it visible.
         * @param widget a {@link Gtk.Widget} to show.
         */
        show_dockable_widget(widget: Gtk.Widget): void;

        /**
         * Reduces the freeze count by one and performs pending widget additions
         * when the count reaches 0.
         */
        thaw(): void;

        /**
         * Unmaximizes the UI which was previously maximized by
         * `anjuta_shell_maximize_widget`
         */
        unmaximize(): void;
    }


    export const Shell: ShellNamespace & {
        new (): Shell; // This allows `obj instanceof Shell`
    };

    /**
     * @gir-type Alias
     */
    type GluePlugin = GObject.TypeModule;

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

export default Anjuta;

// END
