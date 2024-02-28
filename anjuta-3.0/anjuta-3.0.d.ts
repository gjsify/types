/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './anjuta-3.0-ambient.d.ts';
import './anjuta-3.0-import.d.ts';
/**
 * Anjuta-3.0
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
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
import type Atk from '@girs/atk-1.0';
import type Gdl from '@girs/gdl-3';

export namespace Anjuta {
    /**
     * Specifies if the entry corresponds to a frame or a button.
     * Buttons are added to the last frame that appears before the button entry
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
    enum CommandQueueExecuteMode {
        AUTOMATIC,
        MANUAL,
    }
    /**
     * Possibly errors that can occur during charset conversion
     */
    class ConvertError extends GLib.Error {
        // Own fields of Anjuta-3.0.ConvertError

        /**
         * The charset couldn't be autodetected
         */
        FAILED: number;

        // Constructors of Anjuta-3.0.ConvertError

        constructor(options: { message: string; code: number });

        // Owm methods of Anjuta-3.0.ConvertError

        static quark(): GLib.Quark;
    }

    enum LauncherOutputType {
        STDOUT,
        STDERR,
        PTY,
    }
    /**
     * Possible errors when parsing a plugin file
     */
    class PluginDescriptionParseError extends GLib.Error {
        // Own fields of Anjuta-3.0.PluginDescriptionParseError

        /**
         * Syntax of plugin file is invalid
         */
        SYNTAX: number;
        /**
         * Invalid escape sequence
         */
        ESCAPES: number;
        /**
         * Invalid characters
         */
        CHARS: number;

        // Constructors of Anjuta-3.0.PluginDescriptionParseError

        constructor(options: { message: string; code: number });

        // Owm methods of Anjuta-3.0.PluginDescriptionParseError

        static quark(): GLib.Quark;
    }

    class PluginManagerError extends GLib.Error {
        // Own fields of Anjuta-3.0.PluginManagerError

        /**
         * The factory for the plugin couldn't be found
         */
        MISSING_FACTORY: number;
        /**
         * Unknown error
         */
        ERROR_UNKNOWN: number;

        // Constructors of Anjuta-3.0.PluginManagerError

        constructor(options: { message: string; code: number });

        // Owm methods of Anjuta-3.0.PluginManagerError

        static quark(): GLib.Quark;
    }

    /**
     * Error codes returned by anjuta profile functions.
     */
    class ProfileError extends GLib.Error {
        // Own fields of Anjuta-3.0.ProfileError

        /**
         * Fail to read xml plugins list file.
         */
        URI_READ_FAILED: number;
        /**
         * Fail to write xml plugins list file.
         */
        URI_WRITE_FAILED: number;
        PLUGIN_MISSING: number;

        // Constructors of Anjuta-3.0.ProfileError

        constructor(options: { message: string; code: number });

        // Owm methods of Anjuta-3.0.ProfileError

        static quark(): GLib.Quark;
    }

    enum ProjectValueType {
        STRING,
        LIST,
        BOOLEAN,
        MAP,
    }
    enum SerializerMode {
        READ,
        WRITE,
    }
    enum SessionPhase {
        START,
        FIRST,
        NORMAL,
        LAST,
        END,
    }
    class ShellError extends GLib.Error {
        // Own fields of Anjuta-3.0.ShellError

        EXIST: number;

        // Constructors of Anjuta-3.0.ShellError

        constructor(options: { message: string; code: number });

        // Owm methods of Anjuta-3.0.ShellError

        static quark(): GLib.Quark;
    }

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
    function cclosure_marshal_VOID__BOXED_ENUM(
        closure: GObject.Closure,
        return_value: GObject.Value,
        n_param_values: number,
        param_values: GObject.Value,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__INT_INT_ULONG(
        closure: GObject.Closure,
        return_value: GObject.Value,
        n_param_values: number,
        param_values: GObject.Value,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__INT_OBJECT(
        closure: GObject.Closure,
        return_value: GObject.Value,
        n_param_values: number,
        param_values: GObject.Value,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__INT_STRING(
        closure: GObject.Closure,
        return_value: GObject.Value,
        n_param_values: number,
        param_values: GObject.Value,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__POINTER_OBJECT(
        closure: GObject.Closure,
        return_value: GObject.Value,
        n_param_values: number,
        param_values: GObject.Value,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__STRING_BOXED(
        closure: GObject.Closure,
        return_value: GObject.Value,
        n_param_values: number,
        param_values: GObject.Value,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__STRING_INT(
        closure: GObject.Closure,
        return_value: GObject.Value,
        n_param_values: number,
        param_values: GObject.Value,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__STRING_INT_STRING(
        closure: GObject.Closure,
        return_value: GObject.Value,
        n_param_values: number,
        param_values: GObject.Value,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__STRING_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value,
        n_param_values: number,
        param_values: GObject.Value,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * Check if autogen version 5 is installed.
     * @returns %TRUE if autogen is installed.
     */
    function check_autogen(): boolean;
    function convert_error_quark(): GLib.Quark;
    function convert_from_utf8(content: string, len: number, encoding: Encoding, new_len: number): string;
    function convert_to_utf8(content: string, len: number, encoding: Encoding, new_len: number): string;
    function encoding_get_current(): Encoding;
    function encoding_get_from_charset(charset: string): Encoding;
    function encoding_get_from_index(index: number): Encoding;
    function encoding_get_utf8(): Encoding;
    function pkg_config_get_version(_package: string): string;
    function pkg_config_ignore_package(name: string): boolean;
    function plugin_description_parse_error_quark(): GLib.Quark;
    function plugin_manager_error_quark(): GLib.Quark;
    function profile_error_quark(): GLib.Quark;
    function res_get_data_dir(): string;
    function res_get_data_file(pixfile: string): string;
    function res_get_doc_dir(): string;
    function res_get_doc_file(docfile: string): string;
    function res_get_help_dir(): string;
    function res_get_help_dir_locale(locale: string): string;
    function res_get_help_file(helpfile: string): string;
    function res_get_help_file_locale(helpfile: string, locale: string): string;
    function res_get_pixmap_dir(): string;
    function res_get_pixmap_file(pixfile: string): string;
    function res_help_search(word: string): void;
    function res_url_show(url: string): void;
    function shell_error_quark(): GLib.Quark;
    function util_color_from_string(val: string, r: number, g: number, b: number): void;
    function util_convert_to_utf8(str: string): string;
    /**
     * Copies `src` to `dest` and shows a dialog error in case is needed.
     * @param src the file where copy
     * @param dest the path to copy the @src
     * @param show_error %TRUE to show a dialog error
     * @returns %TRUE if there was an error copying the file.
     */
    function util_copy_file(src: string, dest: string, show_error: boolean): boolean;
    function util_create_dir(d: string): boolean;
    function util_dialog_input(parent: Gtk.Window, label: string, default_value: string, value: string): boolean;
    function util_diff(uri: string, text: string): boolean;
    function util_escape_quotes(str: string): string;
    function util_execute_shell(dir: string, command: string): GLib.Pid;
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
    function util_get_file_info_mime_type(info: Gio.FileInfo): string;
    function util_get_file_mime_type(file: Gio.File): string;
    function util_get_local_path_from_uri(uri: string): string;
    function util_get_real_path(path: string): string;
    function util_get_user_mail(): string;
    function util_help_display(parent: Gtk.Widget, doc_id: string, item: string): void;
    function util_install_files(names: string): boolean;
    /**
     * Return %TRUE if the file is an anjuta project file. It is implemented by
     * checking only the file extension. So it does not check the existence
     * of the file. But it is working on an URI if it does not containt a
     * fragment.
     * @param filename the file name
     * @returns %TRUE if the file is a project file, else %FALSE
     */
    function util_is_project_file(filename: string): boolean;
    /**
     * Return %TRUE if the file is an template project file. It is implemented by
     * checking only the file extension. So it does not check the existence
     * of the file. But it is working on an URI if it does not containt a
     * fragment.
     * @param filename the file name
     * @returns %TRUE if the file is a template file, else %FALSE
     */
    function util_is_template_file(filename: string): boolean;
    function util_package_is_installed(lib: string, show: boolean): boolean;
    /**
     * Parse arguments from a string to a GList.
     * @param string arguments
     * @returns A newly allocated GList of strings.
     */
    function util_parse_args_from_string(string: string): string[];
    function util_prog_is_installed(prog: string, show: boolean): boolean;
    function util_replace_home_dir_with_tilde(uri: string): string;
    function util_set_anjuta_prefix(name: string): void;
    function util_set_user_mail(id: string): void;
    /**
     * Expand environment variables $(var_name) and tilde (~) in the input string.
     * @param string input string
     * @returns a newly-allocated string that must be freed with g_free().
     */
    function util_shell_expand(string: string): string;
    function util_str_middle_truncate(string: string, truncate_length: number): string;
    function util_string_from_color(r: number, g: number, b: number): string;
    function util_string_from_type(map: UtilStringMap, type: number): string;
    function util_type_from_string(map: UtilStringMap, str: string): number;
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
    interface AutogenFunc {
        (autogen: Autogen, data?: any | null): void;
    }
    interface AutogenOutputFunc {
        (output: string, data?: any | null): void;
    }
    interface CompletionFilterFunc {
        (item?: any | null): boolean;
    }
    interface CompletionNameFunc {
        (item?: any | null): string;
    }
    interface LauncherOutputCallback {
        (launcher: Launcher, output_type: LauncherOutputType, chars: string): void;
    }
    interface PluginDescriptionLineFunc {
        (df: PluginDescription, key: string, locale: string, value: string, data?: any | null): void;
    }
    interface PluginDescriptionSectionFunc {
        (df: PluginDescription, name: string): void;
    }
    interface PluginValueAdded {
        (plugin: Plugin, name: string, value: GObject.Value): void;
    }
    interface PluginValueRemoved {
        (plugin: Plugin, name: string): void;
    }
    interface PreferencesCallback {
        (pr: Preferences, key: string, data?: any | null): boolean;
    }
    interface ProjectNodeForeachFunc {
        (node: ProjectNode): void;
    }
    interface ProjectNodeTraverseFunc {
        (node: ProjectNode, data?: any | null): boolean;
    }
    interface SavePromptSaveFunc {
        (save_prompt: SavePrompt, item?: any | null): boolean;
    }
    interface TokenForeachFunc {
        (token: Token, data?: any | null): void;
    }
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
    enum ProjectPropertyFlags {
        READ_ONLY,
        READ_WRITE,
        HIDDEN,
        STATIC,
    }
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
    module AsyncCommand {
        // Constructor properties interface
    }

    class AsyncCommand extends Command {
        // Owm methods of Anjuta-3.0.AsyncCommand

        static get_error_message(command: Command): string;
        /**
         * Set the error message this async command resulted in
         * @param command AnjutaAsyncCommand object
         * @param error_message The error message that should be used
         */
        static set_error_message(command: Command, error_message: string): void;

        // Owm methods of Anjuta-3.0.AsyncCommand

        /**
         * Locks the command's built-in mutex.
         */
        lock(): void;
        /**
         * Unlocks the command's built-in mutex.
         */
        unlock(): void;
    }

    module AsyncNotify {
        // Signal callback interfaces

        interface Finished {
            (): void;
        }

        // Constructor properties interface
    }

    class AsyncNotify extends GObject.Object {
        // Constructors of Anjuta-3.0.AsyncNotify

        static ['new'](): AsyncNotify;

        // Owm methods of Anjuta-3.0.AsyncNotify

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

    module Autogen {
        // Constructor properties interface
    }

    /**
     * A GObject wrapper for running GNU autogen.
     */
    class Autogen extends GObject.Object {
        // Constructors of Anjuta-3.0.Autogen

        static ['new'](): Autogen;

        // Owm methods of Anjuta-3.0.Autogen

        /**
         * Remove all library pathes.
         */
        clear_library_path(): void;
        /**
         * Asynchronously execute autogen to generate the output, calling `func` when the
         * process is completed.
         * @param func A function called when autogen is terminated
         * @returns %TRUE if the file has been processed without error.
         */
        execute(func?: AutogenFunc | null): boolean;
        /**
         * Get the list of all directories searched for files included in the autogen
         * templates.
         * @returns A list of directories. The content and the list itself are owned by the #AnjutaAutogen object and should not be modified or freed.
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
         * `start_marker` and `end_marker` must be %NULL.
         * @param filename name of the input template file
         * @param start_marker start marker string
         * @param end_marker end marker string
         * @returns %TRUE if the file has been read without error.
         */
        set_input_file(filename: string, start_marker?: string | null, end_marker?: string | null): boolean;
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
         * @returns %TRUE if there is no error.
         */
        set_output_callback(func: AutogenOutputFunc): boolean;
        /**
         * Define the name of the generated file.
         * @param filename name of the generated file
         * @returns %TRUE if the file has been set without error.
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
         * @returns %TRUE if the file has been written without error,
         */
        write_definition_file(values: GLib.HashTable<string, string>): boolean;
    }

    module CModule {
        // Constructor properties interface
    }

    class CModule extends GObject.TypeModule {
        // Constructors of Anjuta-3.0.CModule

        static ['new'](path: string, name: string): CModule;

        // Owm methods of Anjuta-3.0.CModule

        /**
         * Receives the error that occured when the module was loaded
         * @returns %TRUE if there was an Error, %FALSE otherwise
         */
        get_last_error(): boolean;
    }

    module CPluginFactory {
        // Constructor properties interface
    }

    class CPluginFactory extends GObject.Object {
        // Constructors of Anjuta-3.0.CPluginFactory

        static ['new'](): CPluginFactory;

        // Owm methods of Anjuta-3.0.CPluginFactory

        /**
         * Delete a #AnjutaCPluginFactory object.
         */
        free(): void;
    }

    module CellRendererCaptionedImage {
        // Constructor properties interface
    }

    class CellRendererCaptionedImage extends Gtk.CellRenderer {
        // Own properties of Anjuta-3.0.CellRendererCaptionedImage

        pixbuf: GdkPixbuf.Pixbuf;
        text: string;

        // Own fields of Anjuta-3.0.CellRendererCaptionedImage

        image: Gtk.CellRenderer;
        caption: Gtk.CellRenderer;

        // Constructors of Anjuta-3.0.CellRendererCaptionedImage

        static ['new'](): CellRendererCaptionedImage;
    }

    module CellRendererDiff {
        // Constructor properties interface
    }

    class CellRendererDiff extends Gtk.CellRenderer {
        // Own properties of Anjuta-3.0.CellRendererDiff

        diff: string;

        // Constructors of Anjuta-3.0.CellRendererDiff

        static ['new'](): CellRendererDiff;

        // Owm methods of Anjuta-3.0.CellRendererDiff

        set_diff(diff: string): void;
    }

    module CloseButton {
        // Constructor properties interface
    }

    class CloseButton extends Gtk.Button {
        // Constructors of Anjuta-3.0.CloseButton

        static ['new'](): CloseButton;
    }

    module ColumnTextView {
        // Constructor properties interface
    }

    class ColumnTextView extends Gtk.Box {
        // Constructors of Anjuta-3.0.ColumnTextView

        static ['new'](): ColumnTextView;

        // Owm methods of Anjuta-3.0.ColumnTextView

        get_text(): string;
    }

    module Command {
        // Signal callback interfaces

        interface CommandFinished {
            (return_code: number): void;
        }

        interface CommandStarted {
            (): void;
        }

        interface DataArrived {
            (): void;
        }

        interface Progress {
            (progress: number): void;
        }

        // Constructor properties interface
    }

    class Command extends GObject.Object {
        // Owm methods of Anjuta-3.0.Command

        /**
         * Cancels a running command.
         */
        cancel(): void;
        /**
         * Get the error message from the command, if there is one. This method is
         * normally used from a ::command-finished handler to report errors to the user
         * when a command finishes.
         * @returns Error message string that must be freed when no longer needed. If no error is set, return %NULL.
         */
        get_error_message(): string | null;
        is_running(): boolean;
        /**
         * Used by base classes derived from #AnjutaCommand to emit the
         * ::command-finished signal. This method should not be used by client code or
         * #AnjutaCommand objects that are not base classes.
         * @param return_code The returned code that is passed to the notify callback
         */
        notify_complete(return_code: number): void;
        /**
         * Used by base classes derived from #AnjutaCommand to emit the ::data-arrived
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
         * #AnjutaCommand subclasses should override this method to determine how they
         * call ::run, which actually does the command's legwork.
         */
        start(): void;
        /**
         * Sets up any monitoring needed for commands that should start themselves
         * automatically in response to some event.
         * @returns %TRUE if automatic starting is supported by the command and no errors were encountered; %FALSE if automatic starting is unsupported or on error.
         */
        start_automatic_monitor(): boolean;
        /**
         * Stops automatic monitoring for self executing commands. For commands that
         * do not support self-starting, this function does nothing.
         */
        stop_automatic_monitor(): void;
    }

    module CommandBar {
        // Constructor properties interface
    }

    class CommandBar extends Gtk.Notebook {
        // Own properties of Anjuta-3.0.CommandBar

        max_text_width: number;
        maxTextWidth: number;

        // Constructors of Anjuta-3.0.CommandBar

        static ['new'](): CommandBar;

        // Owm methods of Anjuta-3.0.CommandBar

        /**
         * Adds a group of entries to an AnjutaCommandBar.
         * @param group_name A unique name for this group of entries
         * @param entries A list of entries to add
         * @param user_data User data to pass to the entry callback
         */
        add_action_group(group_name: string, entries: CommandBarEntry[], user_data?: any | null): void;
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

    module CommandQueue {
        // Signal callback interfaces

        interface Finished {
            (): void;
        }

        // Constructor properties interface
    }

    class CommandQueue extends GObject.Object {
        // Constructors of Anjuta-3.0.CommandQueue

        static ['new'](mode: CommandQueueExecuteMode): CommandQueue;

        // Owm methods of Anjuta-3.0.CommandQueue

        /**
         * Adds a command to the Queue and starts it if there are no other commands
         * waiting
         * @param command The command to add
         */
        push(command: Command): void;
        start(): boolean;
    }

    module Completion {
        // Constructor properties interface
    }

    class Completion extends GObject.Object {
        // Own properties of Anjuta-3.0.Completion

        case_sensitive: boolean;
        caseSensitive: boolean;

        // Owm methods of Anjuta-3.0.Completion

        /**
         * Add an item to the completion.
         * @param item the item to be added.
         */
        add_item(item?: any | null): void;
        /**
         * Clear all items added to the completion.
         */
        clear(): void;
        get_case_sensitive(): boolean;
        set_case_sensitive(case_sensitive: boolean): void;
        set_item_destroy_func(item_destroy_func?: GLib.DestroyNotify | null): void;
    }

    module Dock {
        // Constructor properties interface
    }

    class Dock extends Gdl.Dock {
        // Constructors of Anjuta-3.0.Dock

        static ['new'](): Dock;

        // Owm methods of Anjuta-3.0.Dock

        /**
         * Adds a pane, with optional #AnjutaCommandBar entries, to an AnjutaDock. This
         * method adds a pane with no grip that cannot be closed, floating or iconified.
         * @param pane_name A unique name for this pane
         * @param pane_label Label to display in this pane's grip
         * @param stock_icon Stock icon to display in this pane's grip
         * @param pane The #AnjutaDockPane to add to the dock. The dock takes ownership of 	  the pane object.
         * @param placement A #GdlDockPlacement value indicating where the pane should be 		   placed
         * @param entries #AnjutaCommandBar entries 		 for this pane. Can be %NULL
         * @param user_data User data to pass to the entry callback
         * @returns %TRUE if the pane was added, or %FALSE if a pane with the same name already exists in the dock
         */
        add_pane(
            pane_name: string,
            pane_label: string,
            stock_icon: string,
            pane: DockPane,
            placement: Gdl.DockPlacement,
            entries?: CommandBarEntry[] | null,
            user_data?: any | null,
        ): boolean;
        /**
         * Does the same thing as anjuta_dock_add_pane, but allows GDL dock behavior
         * flags to be specified.
         * @param pane_name A unique name for this pane
         * @param pane_label Label to display in this pane's grip
         * @param stock_icon Stock icon to display in this pane's grip
         * @param pane The #AnjutaDockPane to add to the dock. The dock takes ownership of 	  the pane object.
         * @param placement A #GdlDockPlacement value indicating where the pane should be 		   placed
         * @param entries #AnjutaCommandBar entries 		 for this pane. Can be %NULL
         * @param user_data User data to pass to the entry callback
         * @param behavior Any combination of #GdlDockItemBehavior flags
         * @returns %TRUE if the pane was added, or %FALSE if a pane with the same name already exists in the dock
         */
        add_pane_full(
            pane_name: string,
            pane_label: string,
            stock_icon: string,
            pane: DockPane,
            placement: Gdl.DockPlacement,
            entries: CommandBarEntry[] | null,
            user_data: any | null,
            behavior: Gdl.DockItemBehavior,
        ): boolean;
        get_command_bar(): CommandBar | null;
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
         * Adds a pane, with optional #AnjutaCommandBar entries, to an AnjutaDock. This
         * method adds a pane with no grip that cannot be closed, floating or iconified.
         * If there was an old command pane, that pane is removed in favour of the new pane.
         * @param pane_name A unique name for this pane
         * @param pane_label Label to display in this pane's grip
         * @param stock_icon Stock icon to display in this pane's grip
         * @param pane The #AnjutaDockPane to add to the dock. The dock takes ownership of 	  the pane object.
         * @param placement A #GdlDockPlacement value indicating where the pane should be 		   placed
         * @param entries #AnjutaCommandBar entries 		 for this pane. Can be %NULL
         * @param user_data User data to pass to the entry callback
         */
        replace_command_pane(
            pane_name: string,
            pane_label: string,
            stock_icon: string,
            pane: DockPane,
            placement: Gdl.DockPlacement,
            entries?: CommandBarEntry[] | null,
            user_data?: any | null,
        ): void;
        /**
         * Associates an #AnjutaCommandBar with this dock. Command bars can be used to
         * provide different sets of commands based on the currently visible pane.
         * @param command_bar An #AnjutaCommandBar to associate with this dock
         */
        set_command_bar(command_bar: CommandBar): void;
        /**
         * Makes the given pane visible
         * @param pane Name of the pane to show
         */
        show_pane(pane: DockPane): void;
    }

    module DockPane {
        // Signal callback interfaces

        interface MultipleSelectionChanged {
            (): void;
        }

        interface SingleSelectionChanged {
            (): void;
        }

        // Constructor properties interface
    }

    abstract class DockPane extends GObject.Object {
        // Own properties of Anjuta-3.0.DockPane

        plugin: Plugin;

        // Owm methods of Anjuta-3.0.DockPane

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

    module DropEntry {
        // Constructor properties interface
    }

    class DropEntry extends Entry {
        // Constructors of Anjuta-3.0.DropEntry

        static ['new'](): DropEntry;
    }

    module Entry {
        // Constructor properties interface
    }

    class Entry extends Gtk.Entry {
        // Own properties of Anjuta-3.0.Entry

        help_text: string;
        helpText: string;

        // Constructors of Anjuta-3.0.Entry

        static ['new'](): Entry;

        // Owm methods of Anjuta-3.0.Entry

        dup_text(): string;
        get_text(): string;
        is_showing_help_text(): boolean;
        /**
         * Sets the text on the entry, showing the help text if the text is empty.
         * @param text The new text
         */
        set_text(text: string): void;
    }

    module EnvironmentEditor {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    class EnvironmentEditor extends Gtk.Bin {
        // Constructors of Anjuta-3.0.EnvironmentEditor

        static ['new'](): EnvironmentEditor;

        // Owm methods of Anjuta-3.0.EnvironmentEditor

        reset(): void;
        set_variable(variable: string): void;
    }

    module FileDropEntry {
        // Constructor properties interface
    }

    class FileDropEntry extends DropEntry {
        // Own properties of Anjuta-3.0.FileDropEntry

        relative_path: string;
        relativePath: string;

        // Constructors of Anjuta-3.0.FileDropEntry

        static ['new'](): FileDropEntry;

        // Owm methods of Anjuta-3.0.FileDropEntry

        set_relative_path(path: string): void;
    }

    module FileList {
        // Constructor properties interface
    }

    class FileList extends Gtk.Box {
        // Own properties of Anjuta-3.0.FileList

        relative_path: string;
        relativePath: string;
        show_add_button: boolean;
        showAddButton: boolean;

        // Constructors of Anjuta-3.0.FileList

        static ['new'](): FileList;

        // Owm methods of Anjuta-3.0.FileList

        clear(): void;
        set_relative_path(path: string): void;
    }

    module LanguageProvider {
        // Constructor properties interface
    }

    class LanguageProvider extends GObject.Object {
        // Owm methods of Anjuta-3.0.LanguageProvider

        /**
         * Complete the function name
         * @param iprov IAnjutaProvider object
         * @param iter the cursor
         * @param data the ProposalData
         */
        activate(iprov: GObject.Object, iter: GObject.Object, data?: any | null): void;
        /**
         * Searches for a calltip context
         * @param itip whether a tooltip is crrently shown
         * @param iter current cursor position
         * @param scope_context_ch language-specific context characters                    the end is marked with a '0' character
         * @returns name of the method to show a calltip for or %NULL
         */
        get_calltip_context(itip: GObject.Object, iter: GObject.Object, scope_context_ch: string): string;
        /**
         * Search for the current typed word
         * @param editor IAnjutaEditor object
         * @param iter current cursor position
         * @param start_iter return location for the start_iter (if a preword was found)
         * @param word_characters
         * @returns The current word (needs to be freed) or %NULL if no word was found
         */
        get_pre_word(
            editor: GObject.Object,
            iter: GObject.Object,
            start_iter: GObject.Object,
            word_characters: string,
        ): string | null;
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

    module Launcher {
        // Signal callback interfaces

        interface Busy {
            (busy: boolean): void;
        }

        interface ChildExited {
            (child_pid: number, status: number, time: number): void;
        }

        // Constructor properties interface
    }

    class Launcher extends GObject.Object {
        // Constructors of Anjuta-3.0.Launcher

        static ['new'](): Launcher;

        // Owm methods of Anjuta-3.0.Launcher

        /**
         * Gets the Process ID of the child being executed.
         * @returns Process ID of the child.
         */
        get_child_pid(): number;
        /**
         * Tells if the laucher is currently executing any command.
         * @returns %TRUE if launcher is busy, otherwise %FALSE.
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

    module PkgConfigChooser {
        // Signal callback interfaces

        interface PackageActivated {
            (_package: string): void;
        }

        interface PackageDeactivated {
            (_package: string): void;
        }

        // Constructor properties interface
    }

    class PkgConfigChooser extends Gtk.TreeView {
        // Constructors of Anjuta-3.0.PkgConfigChooser

        static ['new'](): PkgConfigChooser;

        // Owm methods of Anjuta-3.0.PkgConfigChooser

        get_selected_package(): string;
        show_active_column(show_column: boolean): void;
        show_active_only(show_selected: boolean): void;
    }

    module PkgScanner {
        // Constructor properties interface
    }

    class PkgScanner extends AsyncCommand {
        // Own properties of Anjuta-3.0.PkgScanner

        'package': string;
        version: string;

        // Constructors of Anjuta-3.0.PkgScanner

        static ['new'](_package: string, version: string): PkgScanner;

        // Owm methods of Anjuta-3.0.PkgScanner

        get_package(): string;
        get_version(): string;
    }

    module Plugin {
        // Signal callback interfaces

        interface Activated {
            (): void;
        }

        interface Deactivated {
            (): void;
        }

        // Constructor properties interface
    }

    class Plugin extends GObject.Object {
        // Own properties of Anjuta-3.0.Plugin

        /**
         * The #AnjutaShell object associated with this plugin
         */
        shell: Shell;

        // Owm methods of Anjuta-3.0.Plugin

        /**
         * Activates the plugin by calling activate() virtual method. All plugins
         * should derive their classes from this virtual class and implement this
         * method.
         * If the plugin implements IAnjutaPreferences, it is prompted to install
         * it's preferences.
         * @returns %TRUE if sucessfully activated, %FALSE otherwise.
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
         * Deactivates the plugin by calling deactivate() virtual method. All plugins
         * should derive their classes from this virtual class and implement this
         * method.
         * @returns %TRUE if sucessfully activated, %FALSE otherwise.
         */
        deactivate(): boolean;
        get_shell(): Shell;
        /**
         * Returns %TRUE if the plugin has been activated.
         * @returns %TRUE if activated, %FALSE otherwise.
         */
        is_active(): boolean;
        /**
         * Removes the watch represented by `id` (which was returned by
         * anjuta_plugin_add_watch()).
         * @param id Watch id to remove.
         * @param send_remove If true, calls value_removed callback.
         */
        remove_watch(id: number, send_remove: boolean): void;
    }

    module PluginHandle {
        // Constructor properties interface
    }

    class PluginHandle extends GObject.Object {
        // Own properties of Anjuta-3.0.PluginHandle

        readonly about: string;
        readonly can_load: boolean;
        readonly canLoad: boolean;
        readonly can_unload: boolean;
        readonly canUnload: boolean;
        readonly checked: boolean;
        readonly dependencies: any;
        readonly dependency_names: any;
        readonly dependencyNames: any;
        readonly dependents: any;
        readonly description: any;
        readonly icon_path: string;
        readonly iconPath: string;
        readonly id: string;
        readonly interfaces: any;
        readonly language: string;
        readonly name: string;
        readonly path: string;
        readonly resident: boolean;
        readonly resolve_pass: number;
        readonly resolvePass: number;
        readonly user_activatable: boolean;
        readonly userActivatable: boolean;

        // Constructors of Anjuta-3.0.PluginHandle

        static ['new'](plugin_desc_path: string): PluginHandle;

        // Owm methods of Anjuta-3.0.PluginHandle

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
        set_can_load(can_load: boolean): void;
        set_can_unload(can_unload: boolean): void;
        set_checked(checked: boolean): void;
        set_resolve_pass(resolve_pass: boolean): void;
        unresolve_dependencies(): void;
    }

    module PluginManager {
        // Signal callback interfaces

        interface PluginActivated {
            (object: any | null, p0: Plugin): void;
        }

        interface PluginDeactivated {
            (object: any | null, p0: Plugin): void;
        }

        // Constructor properties interface
    }

    class PluginManager extends GObject.Object {
        // Own properties of Anjuta-3.0.PluginManager

        readonly activated_plugins: any;
        readonly activatedPlugins: any;
        readonly available_plugins: any;
        readonly availablePlugins: any;
        readonly profiles: any;
        shell: GObject.Object;
        status: Status;

        // Owm methods of Anjuta-3.0.PluginManager

        /**
         * Get the list of plugins loaded when there is a choice between several
         * ones without asking the user.
         *
         * The list format is returned as a string with the format detailed in
         * anjuta_plugin_manager_set_remembered_plugins().
         * @returns a newly-allocated string that must be freed with g_free().
         */
        get_remembered_plugins(): string;
        /**
         * Searches if a currently loaded plugins implements
         * the given interface.
         * @param iface_name The interface implemented by the object to be found
         * @returns %TRUE is the plugin is currently loaded.
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
         * @param plugin_object A #AnjutaPlugin object
         * @returns %TRUE if the plugin has been unloaded. %FALSE if the plugin is already or cannot be unloaded.
         */
        unload_plugin(plugin_object: GObject.Object): boolean;
        /**
         * Unload the plugin corresponding to the given handle. If the plugin is
         * already unloaded, nothing will be done.
         * @param handle A #AnjutaPluginHandle
         * @returns %TRUE is the plugin is unloaded. %FALSE if a corresponding plugin does not exist or if the plugin cannot be unloaded.
         */
        unload_plugin_by_handle(handle: PluginHandle): boolean;
    }

    module Preferences {
        // Constructor properties interface
    }

    class Preferences extends GObject.Object {
        // Constructors of Anjuta-3.0.Preferences

        static ['new'](plugin_manager: PluginManager, common_schema_id: string): Preferences;

        // Owm methods of Anjuta-3.0.Preferences

        add_from_builder(
            builder: Gtk.Builder,
            settings: Gio.Settings,
            glade_widget_name: string,
            stitle: string,
            icon_filename: string,
        ): void;
        is_dialog_created(): boolean;
        /**
         * This will register all the properties names of the format described above
         * without considering the UI. Useful if you have the widgets shown elsewhere
         * but you want them to be part of preferences system.
         * @param builder GtkBuilder object containing the properties widgets.
         * @param settings
         * @param parent Parent widget in the builder object
         */
        register_all_properties_from_builder_xml(
            builder: Gtk.Builder,
            settings: Gio.Settings,
            parent: Gtk.Widget,
        ): void;
        /**
         * This registers only one widget. The widget could be shown elsewhere.
         * The widget needs to fulfill the properties described in
         * #anjuta_preferences_add_page documentation.
         * @param settings the #GSettings object associated with that property
         * @param object Widget to register
         * @param key Property key
         * @returns %TRUE if sucessful.
         */
        register_property(settings: Gio.Settings, object: Gtk.Widget, key: string): boolean;
        remove_page(page_name: string): void;
    }

    module PreferencesDialog {
        // Constructor properties interface
    }

    class PreferencesDialog extends Gtk.Dialog {
        // Constructors of Anjuta-3.0.PreferencesDialog

        static ['new'](): PreferencesDialog;

        // Owm methods of Anjuta-3.0.PreferencesDialog

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

    module Profile {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        interface Descoped {
            (): void;
        }

        interface PluginAdded {
            (plugin?: any | null): void;
        }

        interface PluginRemoved {
            (plugin?: any | null): void;
        }

        interface Scoped {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Stores a plugin list.
     */
    class Profile extends GObject.Object {
        // Own properties of Anjuta-3.0.Profile

        plugin_manager: PluginManager;
        pluginManager: PluginManager;
        profile_name: string;
        profileName: string;
        sync_file: Gio.File;
        syncFile: Gio.File;

        // Constructors of Anjuta-3.0.Profile

        static ['new'](name: string, plugin_manager: PluginManager): Profile;

        // Owm methods of Anjuta-3.0.Profile

        /**
         * Add one plugin into the profile plugin list.
         * @param plugin a #AnjutaPluginHandle.
         */
        add_plugin(plugin: PluginHandle): void;
        /**
         * Add all plugins inscribed in the xml file into the profile plugin list.
         * @param profile_xml_file xml file containing plugin list.
         * @param exclude_from_sync %TRUE if these plugins shouldn't be saved in user session.
         * @returns %TRUE on success, %FALSE otherwise.
         */
        add_plugins_from_xml(profile_xml_file: Gio.File, exclude_from_sync: boolean): boolean;
        /**
         * Get the profile name.
         * @returns the profile name.
         */
        get_name(): string;
        /**
         * Check if a plugin is included in the profile plugin list.
         * @param plugin a #AnjutaPluginHandle
         * @returns %TRUE if the plugin is included in the list.
         */
        has_plugin(plugin: PluginHandle): boolean;
        /**
         * Load the profile
         * @returns TRUE on success, FALSE otherwise.
         */
        load(): boolean;
        /**
         * Remove one plugin from the profile plugin list.
         * @param plugin a #AnjutaPluginHandle.
         */
        remove_plugin(plugin: PluginHandle): void;
        /**
         * Define the file used to save plugins list.
         * @param sync_file file used to save profile.
         */
        set_sync_file(sync_file: Gio.File): void;
        /**
         * Save the current plugins list in the xml file set with anjuta_profile_set_sync_file().
         * @returns %TRUE on success, %FALSE otherwise.
         */
        sync(): boolean;
        /**
         * Unload the profile
         * @returns TRUE on success, FALSE otherwise.
         */
        unload(): boolean;
    }

    module ProfileManager {
        // Signal callback interfaces

        interface ProfilePopped {
            (profile: Profile): void;
        }

        interface ProfilePushed {
            (profile: Profile): void;
        }

        // Constructor properties interface
    }

    /**
     * Stores stack of #AnjutaProfile.
     */
    class ProfileManager extends GObject.Object {
        // Own properties of Anjuta-3.0.ProfileManager

        plugin_manager: PluginManager;
        pluginManager: PluginManager;

        // Constructors of Anjuta-3.0.ProfileManager

        static ['new'](plugin_manager: PluginManager): ProfileManager;

        // Owm methods of Anjuta-3.0.ProfileManager

        /**
         * Close the #AnjutaProfileManager causing "descoped" to be emitted and
         * all queued and previous profiles to be released. This function is to be used
         * when destroying an Anjuta instance.
         */
        close(): void;
        /**
         * Freeze the plugin manager. In this state, plugins can be added and removed
         * from the stack without triggering any change in the current profile. It is
         * possible to freeze the manager several times but it will be back in its normal
         * state only after as much call of anjuta_profile_manager_thaw().
         */
        freeze(): void;
        /**
         * Return the current profile.
         * @returns a #AnjutaProfile object or %NULL if the profile stack is empty.
         */
        get_current(): Profile | null;
        /**
         * Remove a profile from the profile manager stack. If the manager is not
         * frozen, only the current profile can be removed. It will be unloaded and
         * the previous profile will be loaded.
         * If the manager is frozen, the current profile or the last pushed profile
         * can be removed.
         * @param profile the #AnjutaProfile to remove.
         * @returns %TRUE on success, %FALSE otherwise.
         */
        pop(profile: Profile): boolean;
        /**
         * Add a new profile at the top of the profile manager stack. If the profile
         * manager is not frozen, this new profile will be loaded immediatly and
         * become the current profile.
         * @param profile the new #AnjutaProfile.
         * @returns %TRUE on success, %FALSE otherwise.
         */
        push(profile: Profile): boolean;
        /**
         * Put back the plugin manager in its normal mode after calling
         * anjuta_profile_manager_freeze(). It will load a new profile if one has been
         * added while the manager was frozen.
         * @returns %TRUE on success, %FALSE otherwise.
         */
        thaw(): boolean;
    }

    module ProjectNode {
        // Signal callback interfaces

        interface Loaded {
            (object: any | null, p0: GLib.Error): void;
        }

        interface Updated {
            (object: any | null, p0: GLib.Error): void;
        }

        // Constructor properties interface
    }

    /**
     * The #AnjutaProjectNode struct contains private data only, and should
     * accessed using the functions below.
     */
    class ProjectNode extends GObject.InitiallyUnowned {
        // Own properties of Anjuta-3.0.ProjectNode

        file: Gio.File;
        name: string;
        state: ProjectNodeState;
        type: ProjectNodeType;

        // Owm methods of Anjuta-3.0.ProjectNode

        append(node: ProjectNode): ProjectNode;
        check(): void;
        children_foreach(func: ProjectNodeForeachFunc): void;
        children_traverse(func: ProjectNodeTraverseFunc): ProjectNode;
        clear_state(state: ProjectNodeState): boolean;
        dump(): void;
        first_child(): ProjectNode;
        foreach(order: GLib.TraverseType, func: ProjectNodeForeachFunc): void;
        get_file(): Gio.File;
        get_full_type(): ProjectNodeType;
        get_group_from_file(directory: Gio.File): ProjectNode;
        get_map_property(id: string, name: string): ProjectProperty;
        get_name(): string;
        get_node_type(): ProjectNodeType;
        get_properties(): ProjectProperty[];
        get_properties_info(): ProjectPropertyInfo[];
        get_property(id: string): ProjectProperty;
        get_property_info(id: string): ProjectPropertyInfo;
        get_source_from_file(file: Gio.File): ProjectNode;
        get_state(): ProjectNodeState;
        insert_after(sibling: ProjectNode | null, node: ProjectNode): ProjectNode;
        insert_before(sibling: ProjectNode | null, node: ProjectNode): ProjectNode;
        insert_property(info: ProjectPropertyInfo, property: ProjectProperty): ProjectProperty;
        insert_property_info(info: ProjectPropertyInfo): ProjectPropertyInfo;
        last_child(): ProjectNode;
        next_sibling(): ProjectNode;
        nth_child(n: number): ProjectNode;
        parent(): ProjectNode;
        parent_type(type: ProjectNodeType): ProjectNode;
        prepend(node: ProjectNode): ProjectNode;
        prev_sibling(): ProjectNode;
        remove(): ProjectNode;
        remove_property(property: ProjectProperty): ProjectProperty;
        root(): ProjectNode;
        set_state(state: ProjectNodeState): boolean;
        traverse(order: GLib.TraverseType, func: ProjectNodeTraverseFunc): ProjectNode;
    }

    module SavePrompt {
        // Constructor properties interface
    }

    class SavePrompt extends Gtk.MessageDialog {
        // Constructors of Anjuta-3.0.SavePrompt

        static ['new'](parent: Gtk.Window): SavePrompt;

        // Owm methods of Anjuta-3.0.SavePrompt

        get_items_count(): number;
    }

    module Serializer {
        // Constructor properties interface
    }

    class Serializer extends GObject.Object {
        // Own properties of Anjuta-3.0.Serializer

        filepath: string;
        mode: SerializerMode;

        // Constructors of Anjuta-3.0.Serializer

        static ['new'](filepath: string, mode: SerializerMode): Serializer;

        // Owm methods of Anjuta-3.0.Serializer

        read_float(name: string, value: number): boolean;
        read_int(name: string, value: number): boolean;
        read_string(name: string, value: string, replace: boolean): boolean;
        write_float(name: string, value: number): boolean;
        write_int(name: string, value: number): boolean;
        write_string(name: string, value: string): boolean;
    }

    module Session {
        // Constructor properties interface
    }

    class Session extends GObject.Object {
        // Constructors of Anjuta-3.0.Session

        static ['new'](session_directory: string): Session;

        // Owm methods of Anjuta-3.0.Session

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
         * @param fragment fragment part of the URI if existing, can be %NULL
         * @returns A new GFile that has to be freed with g_object_unref().
         */
        get_file_from_relative_uri(uri: string, fragment?: string | null): Gio.File;
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
         * @returns A string that has to be freed with g_free().
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

    module Status {
        // Signal callback interfaces

        interface Busy {
            (object: boolean): void;
        }

        // Constructor properties interface
    }

    class Status extends Gtk.Box {
        // Constructors of Anjuta-3.0.Status

        static ['new'](): Status;

        // Owm methods of Anjuta-3.0.Status

        add_widget(widget: Gtk.Widget): void;
        busy_pop(): void;
        busy_push(): void;
        clear_stack(): void;
        disable_splash(disable_splash: boolean): void;
        pop(): void;
        progress_add_ticks(ticks: number): void;
        progress_increment_ticks(ticks: number, text: string): void;
        progress_pulse(text: string): void;
        progress_reset(): void;
        progress_tick(icon: GdkPixbuf.Pixbuf, text: string): void;
        set_splash(splash_file: string, splash_progress_position: number): void;
        set_title(title: string): void;
        set_title_window(window: Gtk.Widget): void;
    }

    module SyncCommand {
        // Constructor properties interface
    }

    class SyncCommand extends Command {}

    module Tabber {
        // Constructor properties interface
    }

    class Tabber extends Gtk.Container {
        // Own properties of Anjuta-3.0.Tabber

        notebook: GObject.Object;

        // Constructors of Anjuta-3.0.Tabber

        static ['new'](notebook: Gtk.Notebook): Tabber;

        // Owm methods of Anjuta-3.0.Tabber

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

    module TokenFile {
        // Constructor properties interface
    }

    class TokenFile extends GObject.Object {
        // Constructors of Anjuta-3.0.TokenFile

        static ['new'](file: Gio.File): TokenFile;

        // Owm methods of Anjuta-3.0.TokenFile

        free(): void;
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
        move(new_file: Gio.File): void;
        save(): boolean;
        unload(): boolean;
        /**
         * Update the file with all changed token starting from `token`. The function can
         * return an error if the token is not in the file.
         * @param token Token to update.
         * @returns %TRUE is the update is done without error.
         */
        update(token: Token): boolean;
    }

    module TreeComboBox {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        interface Popdown {
            (): void;
        }

        interface Popup {
            (): void;
        }

        // Constructor properties interface
    }

    class TreeComboBox extends Gtk.ToggleButton {
        // Own properties of Anjuta-3.0.TreeComboBox

        model: Gtk.TreeModel;

        // Constructors of Anjuta-3.0.TreeComboBox

        static ['new'](): TreeComboBox;

        // Owm methods of Anjuta-3.0.TreeComboBox

        get_active_iter(iter: Gtk.TreeIter): boolean;
        set_active(index: number): void;
        set_active_iter(iter: Gtk.TreeIter): void;
        set_invalid_text(str: string): void;
        set_model(model: Gtk.TreeModel): void;
        set_valid_function(func: Gtk.TreeModelFilterVisibleFunc): void;
    }

    module UI {
        // Constructor properties interface
    }

    class UI extends Gtk.UIManager {
        // Constructors of Anjuta-3.0.UI

        static ['new'](): UI;

        // Owm methods of Anjuta-3.0.UI

        static load_accels(filename: string): void;
        static save_accels(filename: string): void;

        // Owm methods of Anjuta-3.0.UI

        /**
         * Activates the action `action_name` in the #GtkActionGroup `action_group`.
         * "ActionGroupName/ActionName". Note that it will only work if the group has
         * been added using methods in #AnjutaUI.
         * @param action_group Action group.
         * @param action_name Action name.
         */
        activate_action_by_group(action_group: Gtk.ActionGroup, action_name: string): void;
        /**
         * Activates the action represented by `action_path`. The path is in the form
         * "ActionGroupName/ActionName". Note that it will only work if the group has
         * been added using methods in #AnjutaUI.
         * @param action_path Path of the action in the form "GroupName/ActionName"
         */
        activate_action_by_path(action_path: string): void;
        /**
         * This is similar to anjuta_ui_add_action_group_entries(), except that
         * it adds #GtkActionGroup object `action_group` directly. All actions in this
         * group are automatically registered in #AnjutaUI and can be retrieved
         * normally with anjuta_ui_get_action().
         * @param action_group_name Untranslated name of the action group.
         * @param action_group_label Translated label of the action group.
         * @param action_group #GtkActionGroup object to add.
         * @param can_customize
         */
        add_action_group(
            action_group_name: string,
            action_group_label: string,
            action_group: Gtk.ActionGroup,
            can_customize: boolean,
        ): void;
        /**
         * #GtkAction objects are created from the #GtkActionEntry structures and
         * added to the UI Manager. "activate" signal of #GtkAction is connected for
         * all the action objects using the callback in the entry structure and the
         * `user_data` passed here.
         *
         * This group of actions are registered with the name `action_group_name`
         * in #AnjutaUI. A #GtkAction object from this action group can be later
         * retrieved by anjuta_ui_get_action() using `action_group_name` and action name.
         * `action_group_label` is used as the display name for the action group in
         * UI manager dialog where action shortcuts are configured.
         * @param action_group_name Untranslated name of the action group.
         * @param action_group_label Translated label of the action group.
         * @param entries An array of action entries.
         * @param translation_domain The translation domain used to translated the entries. It is usually the GETTEXT_PACKAGE macro in a project.
         * @param can_customize If true the actions are customizable by user.
         * @param user_data User data to pass to action objects. This is the data that will come as user_data in "activate" signal of the actions.
         * @returns A #GtkActionGroup object holding all the action objects.
         */
        add_action_group_entries(
            action_group_name: string,
            action_group_label: string,
            entries: Gtk.ActionEntry[],
            translation_domain: string,
            can_customize: boolean,
            user_data?: any | null,
        ): Gtk.ActionGroup;
        /**
         * This is similar to anjuta_ui_add_action_group_entries(), except that
         * it adds #GtkToggleAction objects after creating them from the `entries`.
         * @param action_group_name Untranslated name of the action group.
         * @param action_group_label Translated label of the action group.
         * @param entries An array of action entries.
         * @param translation_domain The translation domain used to translated the entries. It is usually the GETTEXT_PACKAGE macro in a project.
         * @param can_customize
         * @param user_data User data to pass to action objects. This is the data that will come as user_data in "activate" signal of the actions.
         * @returns A #GtkActionGroup object holding all the action objects.
         */
        add_toggle_action_group_entries(
            action_group_name: string,
            action_group_label: string,
            entries: Gtk.ToggleActionEntry[],
            translation_domain: string,
            can_customize: boolean,
            user_data?: any | null,
        ): Gtk.ActionGroup;
        /**
         * Dumps the current UI XML tree in STDOUT. Useful for debugging.
         */
        dump_tree(): void;
        /**
         * Creates an accel editor widget and returns it. It should be added to
         * container and displayed to users.
         * @returns a #GtkWidget containing the editor.
         */
        get_accel_editor(): Gtk.Widget;
        /**
         * Returns the #GtkAccelGroup object associated with this UI manager.
         * @returns A #GtkAccelGroup object.
         */
        get_accel_group(): Gtk.AccelGroup;
        /**
         * Returns the action object with the name `action_name` in `action_group_name`.
         * Note that it will be only sucessully returned if the group has been added
         * using methods in #AnjutaUI.
         * @param action_group_name Group name.
         * @param action_name Action name.
         * @returns A #GtkAction object
         */
        get_action(action_group_name: string, action_name: string): Gtk.Action;
        /**
         * This returns the IconFactory object. All icons should be registered using
         * this icon factory. Read the documentation for #GtkIconFactory on how to
         * use it.
         * @returns The #GtkIconFactory object used by it
         */
        get_icon_factory(): Gtk.IconFactory;
        /**
         * Merges XML UI definition in `ui_filename`. UI elements defined in the xml
         * are merged with existing UI elements in UI manager. The format of the
         * file content is the standard XML UI definition tree. For more detail,
         * read the documentation for #GtkUIManager.
         * @param ui_filename UI file to merge into UI manager.
         * @returns Integer merge ID
         */
        merge(ui_filename: string): number;
        /**
         * Removes a previous added action group. All actions in this group are
         * also unregistered from UI manager.
         * @param action_group #GtkActionGroup object to remove.
         */
        remove_action_group(action_group: Gtk.ActionGroup): void;
        unload_accels(): void;
        /**
         * Unmerges UI with the ID value `id` (returned by anjuta_ui_merge() when
         * it was merged. For more detail, read the documentation for #GtkUIManager.
         * @param id Merge ID returned by anjuta_ui_merge().
         */
        unmerge(id: number): void;
    }

    module VcsStatusTreeView {
        // Constructor properties interface
    }

    class VcsStatusTreeView extends Gtk.TreeView {
        // Own properties of Anjuta-3.0.VcsStatusTreeView

        conflicted_selectable: boolean;
        conflictedSelectable: boolean;
        show_status: boolean;
        showStatus: boolean;
        status_codes: VcsStatus;
        statusCodes: VcsStatus;

        // Constructors of Anjuta-3.0.VcsStatusTreeView

        static ['new'](): VcsStatusTreeView;

        // Owm methods of Anjuta-3.0.VcsStatusTreeView

        add(path: string, status: VcsStatus, selected: boolean): void;
        destroy(): void;
        select_all(): void;
        unselect_all(): void;
    }

    class AsyncCommandClass {}

    class AsyncCommandPriv {}

    class AsyncNotifyClass {}

    class AsyncNotifyPriv {}

    class AutogenClass {}

    class CModuleClass {}

    class CPluginFactoryClass {}

    class CellRendererCaptionedImageClass {}

    class CellRendererDiffClass {}

    class CellRendererDiffPrivate {}

    class CloseButtonClass {}

    class CloseButtonClassPrivate {}

    class ColumnTextViewClass {}

    class ColumnTextViewPriv {}

    class CommandBarClass {}

    /**
     * AnjutaCommandBarEntry is used to add a set of frames and actions to a command
     * bar.
     */
    class CommandBarEntry {
        // Own fields of Anjuta-3.0.CommandBarEntry

        type: CommandBarEntryType;
        action_name: string;
        label: string;
        tooltip: string;
        stock_icon: string;
        callback: GObject.Callback;
    }

    class CommandBarPriv {}

    class CommandClass {}

    class CommandPriv {}

    class CommandQueueClass {}

    class CommandQueuePriv {}

    class CompletionClass {}

    class CompletionPrivate {}

    class DockClass {}

    class DockPaneClass {}

    class DockPanePriv {}

    class DockPriv {}

    class DropEntryClass {}

    class Encoding {
        // Owm methods of Anjuta-3.0.Encoding

        static get_current(): Encoding;
        static get_from_charset(charset: string): Encoding;
        static get_from_index(index: number): Encoding;
        static get_utf8(): Encoding;

        // Owm methods of Anjuta-3.0.Encoding

        /**
         * Makes a copy of the given encoding.
         * This function is used by language bindings.
         * @returns a new #AnjutaEncoding.
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

    class EntryClass {}

    class EntryPriv {}

    class EnvironmentEditorClass {}

    class FileDropEntryClass {}

    class FileDropEntryPriv {}

    class FileListClass {}

    class FileListPriv {}

    class LanguageProposalData {
        // Own fields of Anjuta-3.0.LanguageProposalData

        name: string;
        info: string;
        is_func: boolean;
        has_para: boolean;

        // Constructors of Anjuta-3.0.LanguageProposalData

        constructor(
            properties?: Partial<{
                name: string;
                info: string;
                is_func: boolean;
                has_para: boolean;
                type: unknown;
            }>,
        );

        static ['new'](name: string): LanguageProposalData;

        // Owm methods of Anjuta-3.0.LanguageProposalData

        /**
         * Free the given proposal data
         */
        free(): void;
    }

    class LanguageProviderClass {}

    class LanguageProviderPriv {}

    class LauncherClass {}

    class LauncherPriv {}

    class PkgConfigChooserClass {}

    class PkgConfigChooserPrivate {}

    class PkgScannerClass {}

    class PkgScannerPrivate {}

    class PluginClass {}

    class PluginDescription {
        // Constructors of Anjuta-3.0.PluginDescription

        constructor(filename: string);

        static ['new'](filename: string): PluginDescription;

        static new_from_string(data: string): PluginDescription;

        // Owm methods of Anjuta-3.0.PluginDescription

        copy(): PluginDescription;
        /**
         * Frees the #AnjutaPluginDescription instance.
         */
        free(): void;
        /**
         * Returns the value of key as boolean in the given section.
         * @param section Section name.
         * @param keyname Key name.
         * @param val Pointer to value to store retured value.
         * @returns %TRUE if sucessful, otherwise %FALSE.
         */
        get_boolean(section: string, keyname: string, val: boolean): boolean;
        /**
         * Returns the value of key as integer in the given section.
         * @param section Section name.
         * @param keyname Key name.
         * @param val Pointer to value to store retured value.
         * @returns %TRUE if sucessful, otherwise %FALSE.
         */
        get_integer(section: string, keyname: string, val: number): boolean;
        /**
         * Returns the value of key in the given section in current locale.
         * @param section Section name.
         * @param keyname Key name.
         * @param val Pointer to value to store retured value.
         * @returns %TRUE if sucessful, otherwise %FALSE.
         */
        get_locale_string(section: string, keyname: string, val: string): boolean;
        /**
         * Retrieves the value of a key (in the given section) for the given locale.
         * The value returned in `val` must be freed after use.
         * @param section_name Name of the section.
         * @param keyname Name of the key.
         * @param locale The locale for which the value is to be retrieved.
         * @returns %TRUE if sucessful, otherwise %FALSE.
         */
        get_raw(section_name: string, keyname: string, locale: string): boolean;
        /**
         * Returns the value of key in the given section.
         * @param section Section name.
         * @param keyname Key name.
         * @param val Pointer to value to store retured value.
         * @returns %TRUE if sucessful, otherwise %FALSE.
         */
        get_string(section: string, keyname: string, val: string): boolean;
        /**
         * Override the value of a key in the description. This can be removed using
         * the function anjuta_plugin_description_remove().
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
        to_string(): string | null;
    }

    class PluginHandleClass {}

    class PluginHandlePriv {}

    class PluginManagerClass {}

    class PluginManagerPriv {}

    class PluginPrivate {}

    class PreferencesClass {}

    class PreferencesDialogClass {}

    class PreferencesDialogPrivate {}

    class PreferencesPriv {}

    class ProfileClass {}

    class ProfileManagerClass {}

    class ProfileManagerPriv {}

    class ProfilePriv {}

    class ProjectNodeClass {}

    class ProjectNodeInfo {
        // Own fields of Anjuta-3.0.ProjectNodeInfo

        mime_type: string;

        // Constructors of Anjuta-3.0.ProjectNodeInfo

        constructor(type: ProjectNodeType, name: string, mime_type: string);

        static ['new'](type: ProjectNodeType, name: string, mime_type: string): ProjectNodeInfo;

        // Owm methods of Anjuta-3.0.ProjectNodeInfo

        copy(): ProjectNodeInfo;
        free(): void;
        mime(): string;
        name(): string;
        property_help_id(): string;
        type(): ProjectNodeType;
    }

    class ProjectProperty {
        // Own fields of Anjuta-3.0.ProjectProperty

        name: string;
        value: string;
        user_data: any;

        // Constructors of Anjuta-3.0.ProjectProperty

        constructor(value: string, name?: string | null, user_data?: any | null);

        static ['new'](value: string, name?: string | null, user_data?: any | null): ProjectProperty;

        // Owm methods of Anjuta-3.0.ProjectProperty

        copy(): ProjectProperty;
        free(): void;
    }

    class ProjectPropertyInfo {
        // Own fields of Anjuta-3.0.ProjectPropertyInfo

        id: string;
        name: string;
        type: ProjectValueType;
        flags: ProjectPropertyFlags;
        description: string;
        user_data: any;

        // Constructors of Anjuta-3.0.ProjectPropertyInfo

        constructor(
            id: string,
            name: string,
            type: ProjectValueType,
            flags: ProjectPropertyFlags,
            description: string,
            default_value: ProjectProperty,
            user_data?: any | null,
        );

        static ['new'](
            id: string,
            name: string,
            type: ProjectValueType,
            flags: ProjectPropertyFlags,
            description: string,
            default_value: ProjectProperty,
            user_data?: any | null,
        ): ProjectPropertyInfo;

        // Owm methods of Anjuta-3.0.ProjectPropertyInfo

        copy(): ProjectPropertyInfo;
        free(): void;
    }

    class Property {}

    class SavePromptClass {}

    class SavePromptPrivate {}

    class SerializerClass {}

    class SerializerPrivate {}

    class SessionClass {}

    class SessionPriv {}

    class ShellIface {}

    class StatusClass {}

    class StatusPriv {}

    class SyncCommandClass {}

    class TabberClass {}

    class TabberPriv {}

    class Token {
        // Owm methods of Anjuta-3.0.Token

        check(): boolean;
        clear_flags(flags: number): void;
        compare(tokenb: Token): boolean;
        dump(): void;
        dump_link(): void;
        evaluate(): string;
        evaluate_name(): string;
        get_flags(): number;
        get_length(): number;
        get_string(): string;
        get_type(): number;
        is_empty(): boolean;
        remove_item(): void;
        set_flags(flags: number): void;
        set_length(length: number): void;
        set_string(value: string, length: number): void;
        set_type(type: number): void;
    }

    class TokenFileClass {}

    class TokenFileLocation {
        // Own fields of Anjuta-3.0.TokenFileLocation

        filename: string;
        line: number;
        column: number;

        // Constructors of Anjuta-3.0.TokenFileLocation

        constructor(
            properties?: Partial<{
                filename: string;
                line: number;
                column: number;
            }>,
        );
    }

    class TokenStream {
        // Owm methods of Anjuta-3.0.TokenStream

        /**
         * Append an already existing token in the output stream.
         * @param token a #AnjutaToken object.
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
         * @returns The parent stream or %NULL if there is no parent.
         */
        get_parent(): TokenStream | null;
        /**
         * Return the root token for the output stream.
         * @returns The output root token.
         */
        get_root(): Token;
        /**
         * Destroy the stream object and return the parent stream if it exists.
         * @returns The parent stream or %NULL if there is no parent.
         */
        pop(): TokenStream | null;
        /**
         * Read token from the input stream and write the content as a C string in the
         * buffer passed as argument.
         * @param buffer a character buffer to fill with token data.
         * @param max_size the size of the buffer.
         * @returns The number of characters written in the buffer.
         */
        read(buffer: string, max_size: number): number;
    }

    class TokenStyle {
        // Owm methods of Anjuta-3.0.TokenStyle

        format(list: Token): void;
        free(): void;
        update(list: Token): void;
    }

    class TreeComboBoxClass {}

    class TreeComboBoxPrivate {}

    class UIClass {}

    class UIPrivate {}

    class UtilStringMap {
        // Own fields of Anjuta-3.0.UtilStringMap

        type: number;
        name: string;

        // Constructors of Anjuta-3.0.UtilStringMap

        constructor(
            properties?: Partial<{
                type: number;
                name: string;
            }>,
        );
    }

    class VcsStatusTreeViewClass {}

    class VcsStatusTreeViewPriv {}

    interface Shell {
        // Owm methods of Anjuta-3.0.Shell

        /**
         * Sets a value in the shell with the given name. Any previous value will
         * be overridden. "value_added" signal will be emitted. Objects connecting
         * to this signal can then update their data according to the new value.
         * @param name Name of the value
         * @param value Value to add
         */
        add_value(name: string, value: GObject.Value): void;
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
        add_widget_custom(
            widget: Gtk.Widget,
            name: string,
            title: string,
            stock_id: string,
            label: Gtk.Widget,
            placement: ShellPlacement,
        ): void;
        /**
         * Adds `widget` in the shell. The `placement` tells where the widget should
         * appear, but generally it will be overridden by the container
         * (dock, notebook, GtkContainer etc.) saved layout.
         *
         * Normally just use anjuta_shell_add_widget() because you do not
         * use locking.
         * @param widget Then widget to add
         * @param name Name of the widget. None translated string used to identify it in the shell.
         * @param title Translated string which is displayed along side the widget when required (eg. as window title or notebook tab label).
         * @param stock_id Icon stock ID. Could be null.
         * @param placement Placement of the widget in shell.
         * @param locked Whether to lock that widget (do not use this, it's only 			useful to some stock plugins
         */
        add_widget_full(
            widget: Gtk.Widget,
            name: string,
            title: string,
            stock_id: string,
            placement: ShellPlacement,
            locked: boolean,
        ): void;
        /**
         * Freezes addition of any UI elements (widgets) in the shell. All widget
         * additions are queued for later additions when freeze count reaches 0.
         * Any number of this function can be called and each call will increase
         * the freeze count. anjuta_shell_thaw() will reduce the freeze count by
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
         * anjuta_plugins_get_interface() which takes the type directly.
         * @param iface_name The interface implemented by the object to be found
         * @returns A plugin object implementing the primary interface or %NULL.
         */
        get_object<T = GObject.Object>(iface_name: string): T;
        /**
         * Retrieves the #AnjutaPluginManager object associated with the shell.
         * @returns The #AnjutaPluginManager object.
         */
        get_plugin_manager(): PluginManager;
        /**
         * Retrieves the #AnjutaPreferences object associated with the shell.
         * @returns The #AnjutaPreferences object.
         */
        get_preferences(): Preferences;
        /**
         * Retrieves the #AnjutaProfileManager object associated with the shell.
         * @returns The #AnjutaProfileManager object.
         */
        get_profile_manager(): ProfileManager;
        /**
         * Retrieves the #AnjutaStatus object associated with the shell.
         * @returns The #AnjutaStatus object.
         */
        get_status(): Status;
        /**
         * Retrieves the #AnjutaUI object associated with the shell.
         * @returns The #AnjutaUI object.
         */
        get_ui(): UI;
        /**
         * Gets a value from the shell with the given name. The value will be set
         * in the passed value pointer.
         * @param name Name of the value to get
         * @param value Value to get
         */
        get_value(name: string, value: GObject.Value): void;
        /**
         * If the widget is dockable, it hides it.
         * @param widget a #GtkWidget to hide.
         */
        hide_dockable_widget(widget: Gtk.Widget): void;
        /**
         * If the widget is dockable, it iconifies it.
         * @param widget a #GtkWidget to iconify.
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
         * with #anjuta_shell_add_widget.
         * @param widget The widget to remove
         */
        remove_widget(widget: Gtk.Widget): void;
        save_prompt(prompt: SavePrompt): void;
        /**
         * Decrease the count of files that need to be saved
         */
        saving_pop(): void;
        /**
         * Increase the count of files that need to be saved
         */
        saving_push(): void;
        session_load(session_directory: string): void;
        session_save(session_directory: string): void;
        /**
         * If the widget was hidden or iconified, it will make it visible.
         * @param widget a #GtkWidget to show.
         */
        show_dockable_widget(widget: Gtk.Widget): void;
        /**
         * Reduces the freeze count by one and performs pending widget additions
         * when the count reaches 0.
         */
        thaw(): void;
        /**
         * Unmaximizes the UI which was previously maximized by
         * #anjuta_shell_maximize_widget
         */
        unmaximize(): void;

        // Own virtual methods of Anjuta-3.0.Shell

        /**
         * Sets a value in the shell with the given name. Any previous value will
         * be overridden. "value_added" signal will be emitted. Objects connecting
         * to this signal can then update their data according to the new value.
         * @param name Name of the value
         * @param value Value to add
         */
        vfunc_add_value(name: string, value: GObject.Value): void;
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
        vfunc_add_widget_custom(
            widget: Gtk.Widget,
            name: string,
            title: string,
            stock_id: string,
            label: Gtk.Widget,
            placement: ShellPlacement,
        ): void;
        /**
         * Adds `widget` in the shell. The `placement` tells where the widget should
         * appear, but generally it will be overridden by the container
         * (dock, notebook, GtkContainer etc.) saved layout.
         *
         * Normally just use anjuta_shell_add_widget() because you do not
         * use locking.
         * @param widget Then widget to add
         * @param name Name of the widget. None translated string used to identify it in the shell.
         * @param title Translated string which is displayed along side the widget when required (eg. as window title or notebook tab label).
         * @param stock_id Icon stock ID. Could be null.
         * @param placement Placement of the widget in shell.
         * @param locked Whether to lock that widget (do not use this, it's only 			useful to some stock plugins
         */
        vfunc_add_widget_full(
            widget: Gtk.Widget,
            name: string,
            title: string,
            stock_id: string,
            placement: ShellPlacement,
            locked: boolean,
        ): void;
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
         * anjuta_plugins_get_interface() which takes the type directly.
         * @param iface_name The interface implemented by the object to be found
         */
        vfunc_get_object<T = GObject.Object>(iface_name: string): T;
        /**
         * Retrieves the #AnjutaPluginManager object associated with the shell.
         */
        vfunc_get_plugin_manager(): PluginManager;
        /**
         * Retrieves the #AnjutaPreferences object associated with the shell.
         */
        vfunc_get_preferences(): Preferences;
        /**
         * Retrieves the #AnjutaProfileManager object associated with the shell.
         */
        vfunc_get_profile_manager(): ProfileManager;
        /**
         * Retrieves the #AnjutaStatus object associated with the shell.
         */
        vfunc_get_status(): Status;
        /**
         * Retrieves the #AnjutaUI object associated with the shell.
         */
        vfunc_get_ui(): UI;
        /**
         * Gets a value from the shell with the given name. The value will be set
         * in the passed value pointer.
         * @param name Name of the value to get
         * @param value Value to get
         */
        vfunc_get_value(name: string, value: GObject.Value): void;
        /**
         * If the widget is dockable, it hides it.
         * @param widget a #GtkWidget to hide.
         */
        vfunc_hide_dockable_widget(widget: Gtk.Widget): void;
        /**
         * If the widget is dockable, it iconifies it.
         * @param widget a #GtkWidget to iconify.
         */
        vfunc_iconify_dockable_widget(widget: Gtk.Widget): void;
        vfunc_load_session(phase: SessionPhase, session: Session): void;
        /**
         * Maximizes a widget so it will occupy all the possible space.
         * @param widget_name Name of the widget to be maximized.
         */
        vfunc_maximize_widget(widget_name: string): void;
        /**
         * Make sure the widget is visible to user. If the widget is hidden, it will
         * be shown. If it is not visible to user, it will be made visible.
         * @param widget The widget to present
         */
        vfunc_present_widget(widget: Gtk.Widget): void;
        /**
         * Removes a value from the shell with the given name. "value_removed" signal
         * will be emitted. Objects connecting to this signal can then update their
         * data/internal-state accordingly.
         * @param name Name of the value to remove
         */
        vfunc_remove_value(name: string): void;
        /**
         * Removes the widget from shell. The widget should have been added before
         * with #anjuta_shell_add_widget.
         * @param widget The widget to remove
         */
        vfunc_remove_widget(widget: Gtk.Widget): void;
        vfunc_save_prompt(save_prompt: SavePrompt): void;
        vfunc_save_session(phase: SessionPhase, session: Session): void;
        /**
         * Decrease the count of files that need to be saved
         */
        vfunc_saving_pop(): void;
        /**
         * Increase the count of files that need to be saved
         */
        vfunc_saving_push(): void;
        /**
         * If the widget was hidden or iconified, it will make it visible.
         * @param widget a #GtkWidget to show.
         */
        vfunc_show_dockable_widget(widget: Gtk.Widget): void;
        /**
         * Unmaximizes the UI which was previously maximized by
         * #anjuta_shell_maximize_widget
         */
        vfunc_unmaximize(): void;
        vfunc_value_added(name: string, value: GObject.Value): void;
        vfunc_value_removed(name: string): void;
    }

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
