
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
enum ConvertError {
    /**
     * The charset couldn't be autodetected
     */
    FAILED,
}
enum LauncherOutputType {
    STDOUT,
    STDERR,
    PTY,
}
/**
 * Possible errors when parsing a plugin file
 */
enum PluginDescriptionParseError {
    /**
     * Syntax of plugin file is invalid
     */
    SYNTAX,
    /**
     * Invalid escape sequence
     */
    ESCAPES,
    /**
     * Invalid characters
     */
    CHARS,
}
enum PluginManagerError {
    /**
     * The factory for the plugin couldn't be found
     */
    MISSING_FACTORY,
    /**
     * Unknown error
     */
    ERROR_UNKNOWN,
}
/**
 * Error codes returned by anjuta profile functions.
 */
enum ProfileError {
    /**
     * Fail to read xml plugins list file.
     */
    URI_READ_FAILED,
    /**
     * Fail to write xml plugins list file.
     */
    URI_WRITE_FAILED,
    PLUGIN_MISSING,
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
enum ShellError {
    EXIST,
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
const SYSTEM_PROFILE_NAME: string | null
const VCS_DEFAULT_STATUS_CODES: number
function cclosure_marshal_VOID__BOXED_ENUM(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: any | null, marshal_data: any | null): void
function cclosure_marshal_VOID__INT_INT_ULONG(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: any | null, marshal_data: any | null): void
function cclosure_marshal_VOID__INT_OBJECT(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: any | null, marshal_data: any | null): void
function cclosure_marshal_VOID__INT_STRING(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: any | null, marshal_data: any | null): void
function cclosure_marshal_VOID__POINTER_OBJECT(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: any | null, marshal_data: any | null): void
function cclosure_marshal_VOID__STRING_BOXED(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: any | null, marshal_data: any | null): void
function cclosure_marshal_VOID__STRING_INT(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: any | null, marshal_data: any | null): void
function cclosure_marshal_VOID__STRING_INT_STRING(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: any | null, marshal_data: any | null): void
function cclosure_marshal_VOID__STRING_POINTER(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: any | null, marshal_data: any | null): void
/**
 * Check if autogen version 5 is installed.
 * @returns %TRUE if autogen is installed.
 */
function check_autogen(): boolean
function convert_error_quark(): GLib.Quark
function convert_from_utf8(content: string | null, len: number, encoding: Encoding, new_len: number): string | null
function convert_to_utf8(content: string | null, len: number, encoding: Encoding, new_len: number): string | null
function encoding_get_current(): Encoding
function encoding_get_from_charset(charset: string | null): Encoding
function encoding_get_from_index(index: number): Encoding
function encoding_get_utf8(): Encoding
function pkg_config_get_version(package: string | null): string | null
function pkg_config_ignore_package(name: string | null): boolean
function plugin_description_parse_error_quark(): GLib.Quark
function plugin_manager_error_quark(): GLib.Quark
function profile_error_quark(): GLib.Quark
function res_get_data_dir(): string | null
function res_get_data_file(pixfile: string | null): string | null
function res_get_doc_dir(): string | null
function res_get_doc_file(docfile: string | null): string | null
function res_get_help_dir(): string | null
function res_get_help_dir_locale(locale: string | null): string | null
function res_get_help_file(helpfile: string | null): string | null
function res_get_help_file_locale(helpfile: string | null, locale: string | null): string | null
function res_get_pixmap_dir(): string | null
function res_get_pixmap_file(pixfile: string | null): string | null
function res_help_search(word: string | null): void
function res_url_show(url: string | null): void
function shell_error_quark(): GLib.Quark
function util_color_from_string(val: string | null, r: number, g: number, b: number): void
function util_convert_to_utf8(str: string | null): string | null
/**
 * Copies `src` to `dest` and shows a dialog error in case is needed.
 * @param src the file where copy
 * @param dest the path to copy the `src`
 * @param show_error %TRUE to show a dialog error
 * @returns %TRUE if there was an error copying the file.
 */
function util_copy_file(src: string | null, dest: string | null, show_error: boolean): boolean
function util_create_dir(d: string | null): boolean
function util_dialog_input(parent: Gtk.Window, label: string | null, default_value: string | null, value: string | null): boolean
function util_diff(uri: string | null, text: string | null): boolean
function util_escape_quotes(str: string | null): string | null
function util_execute_shell(dir: string | null, command: string | null): GLib.Pid
function util_execute_terminal_shell(dir: string | null, command: string | null): GLib.Pid
/**
 * Create a new file corresponding to arg, unlike g_file_new_for_commandline_arg,
 * keeps symbolic links in path name.
 * @param arg URI or relative or absolute file path
 * @returns A new GFile object
 */
function util_file_new_for_commandline_arg(arg: string | null): Gio.File
function util_get_a_tmp_file(): string | null
/**
 * Get current working directory, unlike g_get_current_dir, keeps symbolic links
 * in path name.
 * @returns The current working directory.
 */
function util_get_current_dir(): string | null
function util_get_file_info_mime_type(info: Gio.FileInfo): string | null
function util_get_file_mime_type(file: Gio.File): string | null
function util_get_local_path_from_uri(uri: string | null): string | null
function util_get_real_path(path: string | null): string | null
function util_get_user_mail(): string | null
function util_help_display(parent: Gtk.Widget, doc_id: string | null, item: string | null): void
function util_install_files(names: string): boolean
/**
 * Return %TRUE if the file is an anjuta project file. It is implemented by
 * checking only the file extension. So it does not check the existence
 * of the file. But it is working on an URI if it does not containt a
 * fragment.
 * @param filename the file name
 * @returns %TRUE if the file is a project file, else %FALSE
 */
function util_is_project_file(filename: string | null): boolean
/**
 * Return %TRUE if the file is an template project file. It is implemented by
 * checking only the file extension. So it does not check the existence
 * of the file. But it is working on an URI if it does not containt a
 * fragment.
 * @param filename the file name
 * @returns %TRUE if the file is a template file, else %FALSE
 */
function util_is_template_file(filename: string | null): boolean
function util_package_is_installed(lib: string | null, show: boolean): boolean
/**
 * Parse arguments from a string to a GList.
 * @param string arguments
 * @returns A newly allocated GList of strings.
 */
function util_parse_args_from_string(string: string | null): string[]
function util_prog_is_installed(prog: string | null, show: boolean): boolean
function util_replace_home_dir_with_tilde(uri: string | null): string | null
function util_set_anjuta_prefix(name: string | null): void
function util_set_user_mail(id: string | null): void
/**
 * Expand environment variables $(var_name) and tilde (~) in the input string.
 * @param string input string
 * @returns a newly-allocated string that must be freed with g_free().
 */
function util_shell_expand(string: string | null): string | null
function util_str_middle_truncate(string: string | null, truncate_length: number): string | null
function util_string_from_color(r: number, g: number, b: number): string | null
function util_string_from_type(map: UtilStringMap, type: number): string | null
function util_type_from_string(map: UtilStringMap, str: string | null): number
function util_uri_get_dirname(uri: string | null): string | null
/**
 * Retrieves the user's preferred shell.
 * @returns A newly allocated string that is the path to the shell.
 */
function util_user_shell(): string | null
/**
 * Retrieves the user's preferred terminal.
 * @returns A newly allocated strings list. The first argument is the terminal program name. The following are the arguments needed to execute a command. The list has to be freed with g_strfreev
 */
function util_user_terminal(): string[]
/**
 * This function is called when the autogen process is completed.
 * @callback 
 * @param autogen #AnjutaAutogen object.
 * @param data user data passed to the callback.
 */
interface AutogenFunc {
    (autogen: Autogen, data: any | null): void
}
/**
 * This function is called each time there is new data from autogen.
 * @callback 
 * @param output data generated by autogen.
 * @param data user data passed to the callback.
 */
interface AutogenOutputFunc {
    (output: string | null, data: any | null): void
}
interface CompletionFilterFunc {
    (item: any | null): boolean
}
interface CompletionNameFunc {
    (item: any | null): string | null
}
/**
 * This callback is called when new characters arrive from the launcher
 * execution.
 * @callback 
 * @param launcher a #AnjutaLauncher object
 * @param output_type Type of the output
 * @param chars Characters being outputed
 */
interface LauncherOutputCallback {
    (launcher: Launcher, output_type: LauncherOutputType, chars: string | null): void
}
interface PluginDescriptionLineFunc {
    (df: PluginDescription, key: string | null, locale: string | null, value: string | null, data: any | null): void
}
interface PluginDescriptionSectionFunc {
    (df: PluginDescription, name: string | null): void
}
/**
 * The callback to pass to anjuta_plugin_add_watch(). When a `name` value
 * is added to shell by another plugin, this callback will be called.
 * @callback 
 * @param plugin The #AnjutaPlugin based plugin
 * @param name name of value being added.
 * @param value value of value being added.
 */
interface PluginValueAdded {
    (plugin: Plugin, name: string | null, value: any): void
}
/**
 * The callback to pass to anjuta_plugin_add_watch(). When the `name` value
 * is removed from the shell (by the plugin exporting this value), this
 * callback will be called.
 * @callback 
 * @param plugin The #AnjutaPlugin based plugin
 * @param name name of value being added.
 */
interface PluginValueRemoved {
    (plugin: Plugin, name: string | null): void
}
interface PreferencesCallback {
    (pr: Preferences, key: string | null, data: any | null): boolean
}
interface ProjectNodeForeachFunc {
    (node: ProjectNode): void
}
interface ProjectNodeTraverseFunc {
    (node: ProjectNode, data: any | null): boolean
}
interface SavePromptSaveFunc {
    (save_prompt: SavePrompt, item: any | null): boolean
}
interface TokenForeachFunc {
    (token: Token, data: any | null): void
}
module Shell {

    // Signal callback interfaces

    /**
     * Signal callback interface for `load-session`
     */
    interface LoadSessionSignalCallback {
        ($obj: Shell, object: number, p0: GObject.Object): void
    }

    /**
     * Signal callback interface for `save-prompt`
     */
    interface SavePromptSignalCallback {
        ($obj: Shell, object: GObject.Object): void
    }

    /**
     * Signal callback interface for `save-session`
     */
    interface SaveSessionSignalCallback {
        ($obj: Shell, object: number, p0: GObject.Object): void
    }

    /**
     * Signal callback interface for `value-added`
     */
    interface ValueAddedSignalCallback {
        ($obj: Shell, object: string | null, p0: any): void
    }

    /**
     * Signal callback interface for `value-removed`
     */
    interface ValueRemovedSignalCallback {
        ($obj: Shell, object: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Shell {

    // Owm methods of Anjuta-3.0.Anjuta.Shell

    /**
     * Sets a value in the shell with the given name. Any previous value will
     * be overridden. "value_added" signal will be emitted. Objects connecting
     * to this signal can then update their data according to the new value.
     * @param name Name of the value
     * @param value Value to add
     */
    add_value(name: string | null, value: any): void
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
    add_widget(widget: Gtk.Widget, name: string | null, title: string | null, stock_id: string | null, placement: ShellPlacement): void
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
    add_widget_custom(widget: Gtk.Widget, name: string | null, title: string | null, stock_id: string | null, label: Gtk.Widget, placement: ShellPlacement): void
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
    add_widget_full(widget: Gtk.Widget, name: string | null, title: string | null, stock_id: string | null, placement: ShellPlacement, locked: boolean): void
    /**
     * Freezes addition of any UI elements (widgets) in the shell. All widget
     * additions are queued for later additions when freeze count reaches 0.
     * Any number of this function can be called and each call will increase
     * the freeze count. anjuta_shell_thaw() will reduce the freeze count by
     * 1 and real thawing happens when the count reaches 0.
     */
    freeze(): void
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
    get_object(iface_name: string | null): GObject.Object
    /**
     * Retrieves the #AnjutaPluginManager object associated with the shell.
     * @returns The #AnjutaPluginManager object.
     */
    get_plugin_manager(): PluginManager
    /**
     * Retrieves the #AnjutaPreferences object associated with the shell.
     * @returns The #AnjutaPreferences object.
     */
    get_preferences(): Preferences
    /**
     * Retrieves the #AnjutaProfileManager object associated with the shell.
     * @returns The #AnjutaProfileManager object.
     */
    get_profile_manager(): ProfileManager
    /**
     * Retrieves the #AnjutaStatus object associated with the shell.
     * @returns The #AnjutaStatus object.
     */
    get_status(): Status
    /**
     * Retrieves the #AnjutaUI object associated with the shell.
     * @returns The #AnjutaUI object.
     */
    get_ui(): UI
    /**
     * Gets a value from the shell with the given name. The value will be set
     * in the passed value pointer.
     * @param name Name of the value to get
     * @param value Value to get
     */
    get_value(name: string | null, value: any): void
    /**
     * If the widget is dockable, it hides it.
     * @param widget a #GtkWidget to hide.
     */
    hide_dockable_widget(widget: Gtk.Widget): void
    /**
     * If the widget is dockable, it iconifies it.
     * @param widget a #GtkWidget to iconify.
     */
    iconify_dockable_widget(widget: Gtk.Widget): void
    /**
     * Maximizes a widget so it will occupy all the possible space.
     * @param widget_name Name of the widget to be maximized.
     */
    maximize_widget(widget_name: string | null): void
    /**
     * Make sure the widget is visible to user. If the widget is hidden, it will
     * be shown. If it is not visible to user, it will be made visible.
     * @param widget The widget to present
     */
    present_widget(widget: Gtk.Widget): void
    /**
     * Removes a value from the shell with the given name. "value_removed" signal
     * will be emitted. Objects connecting to this signal can then update their
     * data/internal-state accordingly.
     * @param name Name of the value to remove
     */
    remove_value(name: string | null): void
    /**
     * Removes the widget from shell. The widget should have been added before
     * with #anjuta_shell_add_widget.
     * @param widget The widget to remove
     */
    remove_widget(widget: Gtk.Widget): void
    save_prompt(prompt: SavePrompt): void
    /**
     * Decrease the count of files that need to be saved
     */
    saving_pop(): void
    /**
     * Increase the count of files that need to be saved
     */
    saving_push(): void
    session_load(session_directory: string | null): void
    session_save(session_directory: string | null): void
    /**
     * If the widget was hidden or iconified, it will make it visible.
     * @param widget a #GtkWidget to show.
     */
    show_dockable_widget(widget: Gtk.Widget): void
    /**
     * Reduces the freeze count by one and performs pending widget additions
     * when the count reaches 0.
     */
    thaw(): void
    /**
     * Unmaximizes the UI which was previously maximized by
     * #anjuta_shell_maximize_widget
     */
    unmaximize(): void

    // Own virtual methods of Anjuta-3.0.Anjuta.Shell

    /**
     * Sets a value in the shell with the given name. Any previous value will
     * be overridden. "value_added" signal will be emitted. Objects connecting
     * to this signal can then update their data according to the new value.
     * @virtual 
     * @param name Name of the value
     * @param value Value to add
     */
    vfunc_add_value(name: string | null, value: any): void
    /**
     * Adds `widget` in the shell. The `placement` tells where the widget should
     * appear, but generally it will be overridden by the container
     * (dock, notebook, GtkContainer etc.) saved layout.
     * 
     * Using this method you can pass a custom widget as label.
     * @virtual 
     * @param widget Then widget to add
     * @param name Name of the widget. None translated string used to identify it in the shell.
     * @param title title of the widget (translated)
     * @param stock_id Icon stock ID. Could be null.
     * @param label Label widget to use
     * @param placement Placement of the widget in shell.
     */
    vfunc_add_widget_custom(widget: Gtk.Widget, name: string | null, title: string | null, stock_id: string | null, label: Gtk.Widget, placement: ShellPlacement): void
    /**
     * Adds `widget` in the shell. The `placement` tells where the widget should
     * appear, but generally it will be overridden by the container
     * (dock, notebook, GtkContainer etc.) saved layout.
     * 
     * Normally just use anjuta_shell_add_widget() because you do not
     * use locking.
     * @virtual 
     * @param widget Then widget to add
     * @param name Name of the widget. None translated string used to identify it in the shell.
     * @param title Translated string which is displayed along side the widget when required (eg. as window title or notebook tab label).
     * @param stock_id Icon stock ID. Could be null.
     * @param placement Placement of the widget in shell.
     * @param locked Whether to lock that widget (do not use this, it's only 			useful to some stock plugins
     */
    vfunc_add_widget_full(widget: Gtk.Widget, name: string | null, title: string | null, stock_id: string | null, placement: ShellPlacement, locked: boolean): void
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
     * @virtual 
     * @param iface_name The interface implemented by the object to be found
     * @returns A plugin object implementing the primary interface or %NULL.
     */
    vfunc_get_object(iface_name: string | null): GObject.Object
    /**
     * Retrieves the #AnjutaPluginManager object associated with the shell.
     * @virtual 
     * @returns The #AnjutaPluginManager object.
     */
    vfunc_get_plugin_manager(): PluginManager
    /**
     * Retrieves the #AnjutaPreferences object associated with the shell.
     * @virtual 
     * @returns The #AnjutaPreferences object.
     */
    vfunc_get_preferences(): Preferences
    /**
     * Retrieves the #AnjutaProfileManager object associated with the shell.
     * @virtual 
     * @returns The #AnjutaProfileManager object.
     */
    vfunc_get_profile_manager(): ProfileManager
    /**
     * Retrieves the #AnjutaStatus object associated with the shell.
     * @virtual 
     * @returns The #AnjutaStatus object.
     */
    vfunc_get_status(): Status
    /**
     * Retrieves the #AnjutaUI object associated with the shell.
     * @virtual 
     * @returns The #AnjutaUI object.
     */
    vfunc_get_ui(): UI
    /**
     * Gets a value from the shell with the given name. The value will be set
     * in the passed value pointer.
     * @virtual 
     * @param name Name of the value to get
     * @param value Value to get
     */
    vfunc_get_value(name: string | null, value: any): void
    /**
     * If the widget is dockable, it hides it.
     * @virtual 
     * @param widget a #GtkWidget to hide.
     */
    vfunc_hide_dockable_widget(widget: Gtk.Widget): void
    /**
     * If the widget is dockable, it iconifies it.
     * @virtual 
     * @param widget a #GtkWidget to iconify.
     */
    vfunc_iconify_dockable_widget(widget: Gtk.Widget): void
    vfunc_load_session(phase: SessionPhase, session: Session): void
    /**
     * Maximizes a widget so it will occupy all the possible space.
     * @virtual 
     * @param widget_name Name of the widget to be maximized.
     */
    vfunc_maximize_widget(widget_name: string | null): void
    /**
     * Make sure the widget is visible to user. If the widget is hidden, it will
     * be shown. If it is not visible to user, it will be made visible.
     * @virtual 
     * @param widget The widget to present
     */
    vfunc_present_widget(widget: Gtk.Widget): void
    /**
     * Removes a value from the shell with the given name. "value_removed" signal
     * will be emitted. Objects connecting to this signal can then update their
     * data/internal-state accordingly.
     * @virtual 
     * @param name Name of the value to remove
     */
    vfunc_remove_value(name: string | null): void
    /**
     * Removes the widget from shell. The widget should have been added before
     * with #anjuta_shell_add_widget.
     * @virtual 
     * @param widget The widget to remove
     */
    vfunc_remove_widget(widget: Gtk.Widget): void
    vfunc_save_prompt(save_prompt: SavePrompt): void
    vfunc_save_session(phase: SessionPhase, session: Session): void
    /**
     * Decrease the count of files that need to be saved
     * @virtual 
     */
    vfunc_saving_pop(): void
    /**
     * Increase the count of files that need to be saved
     * @virtual 
     */
    vfunc_saving_push(): void
    /**
     * If the widget was hidden or iconified, it will make it visible.
     * @virtual 
     * @param widget a #GtkWidget to show.
     */
    vfunc_show_dockable_widget(widget: Gtk.Widget): void
    /**
     * Unmaximizes the UI which was previously maximized by
     * #anjuta_shell_maximize_widget
     * @virtual 
     */
    vfunc_unmaximize(): void
    vfunc_value_added(name: string | null, value: any): void
    vfunc_value_removed(name: string | null): void

    // Own signals of Anjuta-3.0.Anjuta.Shell

    connect(sigName: "load-session", callback: Shell.LoadSessionSignalCallback): number
    connect_after(sigName: "load-session", callback: Shell.LoadSessionSignalCallback): number
    emit(sigName: "load-session", object: number, p0: GObject.Object, ...args: any[]): void
    connect(sigName: "save-prompt", callback: Shell.SavePromptSignalCallback): number
    connect_after(sigName: "save-prompt", callback: Shell.SavePromptSignalCallback): number
    emit(sigName: "save-prompt", object: GObject.Object, ...args: any[]): void
    connect(sigName: "save-session", callback: Shell.SaveSessionSignalCallback): number
    connect_after(sigName: "save-session", callback: Shell.SaveSessionSignalCallback): number
    emit(sigName: "save-session", object: number, p0: GObject.Object, ...args: any[]): void
    connect(sigName: "value-added", callback: Shell.ValueAddedSignalCallback): number
    connect_after(sigName: "value-added", callback: Shell.ValueAddedSignalCallback): number
    emit(sigName: "value-added", object: string | null, p0: any, ...args: any[]): void
    connect(sigName: "value-removed", callback: Shell.ValueRemovedSignalCallback): number
    connect_after(sigName: "value-removed", callback: Shell.ValueRemovedSignalCallback): number
    emit(sigName: "value-removed", object: string | null, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Shell

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Shell extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Shell

    static name: string
    static $gtype: GObject.GType<Shell>

    // Constructors of Anjuta-3.0.Anjuta.Shell

    constructor(config?: Shell.ConstructorProperties) 
    _init(config?: Shell.ConstructorProperties): void
}

module AsyncCommand {

    // Constructor properties interface

    interface ConstructorProperties extends Command.ConstructorProperties {
    }

}

interface AsyncCommand {

    // Own fields of Anjuta-3.0.Anjuta.AsyncCommand

    parent_instance: Command & GObject.Object
    priv: any

    // Owm methods of Anjuta-3.0.Anjuta.AsyncCommand

    /**
     * Locks the command's built-in mutex.
     */
    lock(): void
    /**
     * Unlocks the command's built-in mutex.
     */
    unlock(): void

    // Class property signals of Anjuta-3.0.Anjuta.AsyncCommand

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AsyncCommand extends Command {

    // Own properties of Anjuta-3.0.Anjuta.AsyncCommand

    static name: string
    static $gtype: GObject.GType<AsyncCommand>

    // Constructors of Anjuta-3.0.Anjuta.AsyncCommand

    constructor(config?: AsyncCommand.ConstructorProperties) 
    _init(config?: AsyncCommand.ConstructorProperties): void
    static get_error_message(command: Command): string | null
    /**
     * Set the error message this async command resulted in
     * @param command AnjutaAsyncCommand object
     * @param error_message The error message that should be used
     */
    static set_error_message(command: Command, error_message: string | null): void
}

module AsyncNotify {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    interface FinishedSignalCallback {
        ($obj: AsyncNotify): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AsyncNotify {

    // Own fields of Anjuta-3.0.Anjuta.AsyncNotify

    parent_instance: GObject.Object
    priv: AsyncNotifyPriv

    // Owm methods of Anjuta-3.0.Anjuta.AsyncNotify

    /**
     * Gets the error set on `self`.
     */
    get_error(): void
    /**
     * Emits the finished signal. This method should only be used by
     * interface methods themselves, not by clients.
     */
    notify_finished(): void
    /**
     * Sets the error for an interface call. This method should only be used by
     * interface implementations themselves, not by clients.
     * @param error Error to set
     */
    set_error(error: GLib.Error): void

    // Own virtual methods of Anjuta-3.0.Anjuta.AsyncNotify

    vfunc_finished(): void

    // Own signals of Anjuta-3.0.Anjuta.AsyncNotify

    connect(sigName: "finished", callback: AsyncNotify.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: AsyncNotify.FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.AsyncNotify

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AsyncNotify extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.AsyncNotify

    static name: string
    static $gtype: GObject.GType<AsyncNotify>

    // Constructors of Anjuta-3.0.Anjuta.AsyncNotify

    constructor(config?: AsyncNotify.ConstructorProperties) 
    /**
     * Creates a new #AnjutaAsyncNotify object.
     * @constructor 
     * @returns a new #AnjutaAsyncNotify instance
     */
    constructor() 
    /**
     * Creates a new #AnjutaAsyncNotify object.
     * @constructor 
     * @returns a new #AnjutaAsyncNotify instance
     */
    static new(): AsyncNotify
    _init(config?: AsyncNotify.ConstructorProperties): void
}

module Autogen {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Autogen {

    // Owm methods of Anjuta-3.0.Anjuta.Autogen

    /**
     * Remove all library pathes.
     */
    clear_library_path(): void
    /**
     * Asynchronously execute autogen to generate the output, calling `func` when the
     * process is completed.
     * @param func A function called when autogen is terminated
     * @returns %TRUE if the file has been processed without error.
     */
    execute(func: AutogenFunc | null): boolean
    /**
     * Get the list of all directories searched for files included in the autogen
     * templates.
     * @returns A list of directories. The content and the list itself are owned by the #AnjutaAutogen object and should not be modified or freed.
     */
    get_library_paths(): string[]
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
    set_input_file(filename: string | null, start_marker: string | null, end_marker: string | null): boolean
    /**
     * Add a new directory in the list of autogen libraries path.
     * 
     * Autogen can include files. These included file will be searched by default
     * in the same directory than the template file. This functions allows you to
     * add other directories.
     * @param directory A path containing autogen library.
     */
    set_library_path(directory: string | null): void
    /**
     * Define that autogen output should be send to a function as soon as it arrives.
     * @param func Function call each time we get new data from autogen
     * @returns %TRUE if there is no error.
     */
    set_output_callback(func: AutogenOutputFunc): boolean
    /**
     * Define the name of the generated file.
     * @param filename name of the generated file
     * @returns %TRUE if the file has been set without error.
     */
    set_output_file(filename: string | null): boolean
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
    write_definition_file(values: GLib.HashTable): boolean

    // Class property signals of Anjuta-3.0.Anjuta.Autogen

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A GObject wrapper for running GNU autogen.
 * @class 
 */
class Autogen extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Autogen

    static name: string
    static $gtype: GObject.GType<Autogen>

    // Constructors of Anjuta-3.0.Anjuta.Autogen

    constructor(config?: Autogen.ConstructorProperties) 
    /**
     * Create a new autogen object.
     * @constructor 
     * @returns A new #AnjutaAutogen object. Free it using g_object_unref.
     */
    constructor() 
    /**
     * Create a new autogen object.
     * @constructor 
     * @returns A new #AnjutaAutogen object. Free it using g_object_unref.
     */
    static new(): Autogen
    _init(config?: Autogen.ConstructorProperties): void
}

module CModule {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.TypePlugin.ConstructorProperties, GObject.TypeModule.ConstructorProperties {
    }

}

interface CModule extends GObject.TypePlugin {

    // Owm methods of Anjuta-3.0.Anjuta.CModule

    /**
     * Receives the error that occured when the module was loaded
     * @returns %TRUE if there was an Error, %FALSE otherwise
     */
    get_last_error(): boolean

    // Conflicting methods

    /**
     * Calls the `use_plugin` function from the #GTypePluginClass of
     * `plugin`.  There should be no need to use this function outside of
     * the GObject type system itself.
     */
    use(): void
    /**
     * Increases the use count of a #GTypeModule by one. If the
     * use count was zero before, the plugin will be loaded.
     * If loading the plugin fails, the use count is reset to
     * its prior value.
     * @returns %FALSE if the plugin needed to be loaded and  loading the plugin failed.
     */
    use(): boolean

    // Overloads of use

    /**
     * Calls the `use_plugin` function from the #GTypePluginClass of
     * `plugin`.  There should be no need to use this function outside of
     * the GObject type system itself.
     */
    use(): void

    // Class property signals of Anjuta-3.0.Anjuta.CModule

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CModule extends GObject.TypeModule {

    // Own properties of Anjuta-3.0.Anjuta.CModule

    static name: string
    static $gtype: GObject.GType<CModule>

    // Constructors of Anjuta-3.0.Anjuta.CModule

    constructor(config?: CModule.ConstructorProperties) 
    /**
     * Create a new #AnjutaCModule object.
     * @constructor 
     * @param path The full path of the module
     * @param name The name of the module
     * @returns a new #AnjutaCModule object.
     */
    constructor(path: string | null, name: string | null) 
    /**
     * Create a new #AnjutaCModule object.
     * @constructor 
     * @param path The full path of the module
     * @param name The name of the module
     * @returns a new #AnjutaCModule object.
     */
    static new(path: string | null, name: string | null): CModule
    _init(config?: CModule.ConstructorProperties): void
}

module CPluginFactory {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface CPluginFactory {

    // Owm methods of Anjuta-3.0.Anjuta.CPluginFactory

    /**
     * Delete a #AnjutaCPluginFactory object.
     */
    free(): void

    // Class property signals of Anjuta-3.0.Anjuta.CPluginFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CPluginFactory extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.CPluginFactory

    static name: string
    static $gtype: GObject.GType<CPluginFactory>

    // Constructors of Anjuta-3.0.Anjuta.CPluginFactory

    constructor(config?: CPluginFactory.ConstructorProperties) 
    /**
     * Create a new #AnjutaCPluginFactory object.
     * @constructor 
     * @returns a new #AnjutaCPluginFactory object.
     */
    constructor() 
    /**
     * Create a new #AnjutaCPluginFactory object.
     * @constructor 
     * @returns a new #AnjutaCPluginFactory object.
     */
    static new(): CPluginFactory
    _init(config?: CPluginFactory.ConstructorProperties): void
}

module CellRendererCaptionedImage {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.CellRenderer.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

        pixbuf?: GdkPixbuf.Pixbuf | null
        text?: string | null
    }

}

interface CellRendererCaptionedImage {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

    pixbuf: GdkPixbuf.Pixbuf
    text: string | null

    // Own fields of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

    parent: Gtk.CellRenderer
    image: Gtk.CellRenderer
    caption: Gtk.CellRenderer

    // Class property signals of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

    connect(sigName: "notify::pixbuf", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CellRendererCaptionedImage extends Gtk.CellRenderer {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

    static name: string
    static $gtype: GObject.GType<CellRendererCaptionedImage>

    // Constructors of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

    constructor(config?: CellRendererCaptionedImage.ConstructorProperties) 
    constructor() 
    static new(): CellRendererCaptionedImage
    _init(config?: CellRendererCaptionedImage.ConstructorProperties): void
}

module CellRendererDiff {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.CellRenderer.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.CellRendererDiff

        diff?: string | null
    }

}

interface CellRendererDiff {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererDiff

    diff: string | null

    // Own fields of Anjuta-3.0.Anjuta.CellRendererDiff

    parent_instance: Gtk.CellRenderer & GObject.InitiallyUnowned
    priv: CellRendererDiffPrivate

    // Owm methods of Anjuta-3.0.Anjuta.CellRendererDiff

    set_diff(diff: string | null): void

    // Class property signals of Anjuta-3.0.Anjuta.CellRendererDiff

    connect(sigName: "notify::diff", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::diff", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::diff", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CellRendererDiff extends Gtk.CellRenderer {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererDiff

    static name: string
    static $gtype: GObject.GType<CellRendererDiff>

    // Constructors of Anjuta-3.0.Anjuta.CellRendererDiff

    constructor(config?: CellRendererDiff.ConstructorProperties) 
    constructor() 
    static new(): CellRendererDiff
    _init(config?: CellRendererDiff.ConstructorProperties): void
}

module CloseButton {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Activatable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Button.ConstructorProperties {
    }

}

interface CloseButton extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {

    // Own fields of Anjuta-3.0.Anjuta.CloseButton

    parent: Gtk.Button & Gtk.Container

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Anjuta-3.0.Anjuta.CloseButton

    connect(sigName: "notify::always-show-image", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-show-image", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-position", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relief", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relief", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-stock", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::related-action", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CloseButton extends Gtk.Button {

    // Own properties of Anjuta-3.0.Anjuta.CloseButton

    static name: string
    static $gtype: GObject.GType<CloseButton>

    // Constructors of Anjuta-3.0.Anjuta.CloseButton

    constructor(config?: CloseButton.ConstructorProperties) 
    constructor() 
    static new(): CloseButton
    _init(config?: CloseButton.ConstructorProperties): void
}

module ColumnTextView {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {
    }

}

interface ColumnTextView extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Anjuta-3.0.Anjuta.ColumnTextView

    parent_instance: Gtk.Box & GObject.InitiallyUnowned
    priv: ColumnTextViewPriv

    // Owm methods of Anjuta-3.0.Anjuta.ColumnTextView

    get_text(): string | null

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Anjuta-3.0.Anjuta.ColumnTextView

    connect(sigName: "notify::baseline-position", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ColumnTextView extends Gtk.Box {

    // Own properties of Anjuta-3.0.Anjuta.ColumnTextView

    static name: string
    static $gtype: GObject.GType<ColumnTextView>

    // Constructors of Anjuta-3.0.Anjuta.ColumnTextView

    constructor(config?: ColumnTextView.ConstructorProperties) 
    constructor() 
    static new(): ColumnTextView

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: ColumnTextView.ConstructorProperties): void
}

module Command {

    // Signal callback interfaces

    /**
     * Signal callback interface for `command-finished`
     */
    interface CommandFinishedSignalCallback {
        ($obj: Command, return_code: number): void
    }

    /**
     * Signal callback interface for `command-started`
     */
    interface CommandStartedSignalCallback {
        ($obj: Command): void
    }

    /**
     * Signal callback interface for `data-arrived`
     */
    interface DataArrivedSignalCallback {
        ($obj: Command): void
    }

    /**
     * Signal callback interface for `progress`
     */
    interface ProgressSignalCallback {
        ($obj: Command, progress: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Command {

    // Own fields of Anjuta-3.0.Anjuta.Command

    parent_instance: GObject.Object
    priv: CommandPriv

    // Owm methods of Anjuta-3.0.Anjuta.Command

    /**
     * Cancels a running command.
     */
    cancel(): void
    /**
     * Get the error message from the command, if there is one. This method is
     * normally used from a ::command-finished handler to report errors to the user
     * when a command finishes.
     * @returns Error message string that must be freed when no longer needed. If no error is set, return %NULL.
     */
    get_error_message(): string | null
    is_running(): boolean
    /**
     * Used by base classes derived from #AnjutaCommand to emit the
     * ::command-finished signal. This method should not be used by client code or
     * #AnjutaCommand objects that are not base classes.
     * @param return_code The returned code that is passed to the notify callback
     */
    notify_complete(return_code: number): void
    /**
     * Used by base classes derived from #AnjutaCommand to emit the ::data-arrived
     * signal. This method should be used by both base command classes and
     * non-base classes as appropriate.
     */
    notify_data_arrived(): void
    /**
     * Emits the ::progress signal. Can be used by both base classes and
     * commands as needed.
     * @param progress The of the command that is passed to the notify callback
     */
    notify_progress(progress: number): void
    /**
     * Command objects use this to set error messages when they encounter some kind
     * of failure.
     * @param error_message Error message.
     */
    set_error_message(error_message: string | null): void
    /**
     * Starts a command. Client code can handle data from the command by connecting
     * to the ::data-arrived signal.
     * 
     * #AnjutaCommand subclasses should override this method to determine how they
     * call ::run, which actually does the command's legwork.
     */
    start(): void
    /**
     * Sets up any monitoring needed for commands that should start themselves
     * automatically in response to some event.
     * @returns %TRUE if automatic starting is supported by the command and no errors were encountered; %FALSE if automatic starting is unsupported or on error.
     */
    start_automatic_monitor(): boolean
    /**
     * Stops automatic monitoring for self executing commands. For commands that
     * do not support self-starting, this function does nothing.
     */
    stop_automatic_monitor(): void

    // Own virtual methods of Anjuta-3.0.Anjuta.Command

    /**
     * Cancels a running command.
     * @virtual 
     */
    vfunc_cancel(): void
    vfunc_command_finished(return_code: number): void
    vfunc_command_started(): void
    vfunc_data_arrived(): void
    /**
     * Get the error message from the command, if there is one. This method is
     * normally used from a ::command-finished handler to report errors to the user
     * when a command finishes.
     * @virtual 
     * @returns Error message string that must be freed when no longer needed. If no error is set, return %NULL.
     */
    vfunc_get_error_message(): string | null
    /**
     * Used by base classes derived from #AnjutaCommand to emit the
     * ::command-finished signal. This method should not be used by client code or
     * #AnjutaCommand objects that are not base classes.
     * @virtual 
     * @param return_code The returned code that is passed to the notify callback
     */
    vfunc_notify_complete(return_code: number): void
    /**
     * Used by base classes derived from #AnjutaCommand to emit the ::data-arrived
     * signal. This method should be used by both base command classes and
     * non-base classes as appropriate.
     * @virtual 
     */
    vfunc_notify_data_arrived(): void
    /**
     * Emits the ::progress signal. Can be used by both base classes and
     * commands as needed.
     * @virtual 
     * @param progress The of the command that is passed to the notify callback
     */
    vfunc_notify_progress(progress: number): void
    vfunc_progress(progress: number): void
    vfunc_run(): number
    /**
     * Command objects use this to set error messages when they encounter some kind
     * of failure.
     * @virtual 
     * @param error_message Error message.
     */
    vfunc_set_error_message(error_message: string | null): void
    /**
     * Starts a command. Client code can handle data from the command by connecting
     * to the ::data-arrived signal.
     * 
     * #AnjutaCommand subclasses should override this method to determine how they
     * call ::run, which actually does the command's legwork.
     * @virtual 
     */
    vfunc_start(): void
    /**
     * Sets up any monitoring needed for commands that should start themselves
     * automatically in response to some event.
     * @virtual 
     * @returns %TRUE if automatic starting is supported by the command and no errors were encountered; %FALSE if automatic starting is unsupported or on error.
     */
    vfunc_start_automatic_monitor(): boolean
    /**
     * Stops automatic monitoring for self executing commands. For commands that
     * do not support self-starting, this function does nothing.
     * @virtual 
     */
    vfunc_stop_automatic_monitor(): void

    // Own signals of Anjuta-3.0.Anjuta.Command

    connect(sigName: "command-finished", callback: Command.CommandFinishedSignalCallback): number
    connect_after(sigName: "command-finished", callback: Command.CommandFinishedSignalCallback): number
    emit(sigName: "command-finished", return_code: number, ...args: any[]): void
    connect(sigName: "command-started", callback: Command.CommandStartedSignalCallback): number
    connect_after(sigName: "command-started", callback: Command.CommandStartedSignalCallback): number
    emit(sigName: "command-started", ...args: any[]): void
    connect(sigName: "data-arrived", callback: Command.DataArrivedSignalCallback): number
    connect_after(sigName: "data-arrived", callback: Command.DataArrivedSignalCallback): number
    emit(sigName: "data-arrived", ...args: any[]): void
    connect(sigName: "progress", callback: Command.ProgressSignalCallback): number
    connect_after(sigName: "progress", callback: Command.ProgressSignalCallback): number
    emit(sigName: "progress", progress: number, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Command

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Command extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Command

    static name: string
    static $gtype: GObject.GType<Command>

    // Constructors of Anjuta-3.0.Anjuta.Command

    constructor(config?: Command.ConstructorProperties) 
    _init(config?: Command.ConstructorProperties): void
}

module CommandBar {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Notebook.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.CommandBar

        max_text_width?: number | null
    }

}

interface CommandBar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Anjuta-3.0.Anjuta.CommandBar

    readonly max_text_width: number

    // Own fields of Anjuta-3.0.Anjuta.CommandBar

    parent_instance: Gtk.Notebook & GObject.InitiallyUnowned
    priv: CommandBarPriv

    // Owm methods of Anjuta-3.0.Anjuta.CommandBar

    /**
     * Adds a group of entries to an AnjutaCommandBar.
     * @param group_name A unique name for this group of entries
     * @param entries A list of entries to add
     * @param user_data User data to pass to the entry callback
     */
    add_action_group(group_name: string | null, entries: CommandBarEntry[], user_data: any | null): void
    /**
     * Removes an action group from an AnjutaCommandBar.
     * @param group_name Name of the action group to remove
     */
    remove_action_group(group_name: string | null): void
    /**
     * Causes the actions in the given group to become visible, replacing the
     * previously visible group.
     * @param group_name The name of the action group to show
     */
    show_action_group(group_name: string | null): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Anjuta-3.0.Anjuta.CommandBar

    connect(sigName: "notify::max-text-width", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-text-width", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-text-width", ...args: any[]): void
    connect(sigName: "notify::enable-popup", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-popup", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-popup", ...args: any[]): void
    connect(sigName: "notify::group-name", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-name", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group-name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::scrollable", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scrollable", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scrollable", ...args: any[]): void
    connect(sigName: "notify::show-border", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-border", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-border", ...args: any[]): void
    connect(sigName: "notify::show-tabs", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-tabs", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-tabs", ...args: any[]): void
    connect(sigName: "notify::tab-pos", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-pos", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab-pos", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CommandBar extends Gtk.Notebook {

    // Own properties of Anjuta-3.0.Anjuta.CommandBar

    static name: string
    static $gtype: GObject.GType<CommandBar>

    // Constructors of Anjuta-3.0.Anjuta.CommandBar

    constructor(config?: CommandBar.ConstructorProperties) 
    /**
     * Creates a new AnjutaCommandBar.
     * @constructor 
     * @returns A new AnjutaCommandBar
     */
    constructor() 
    /**
     * Creates a new AnjutaCommandBar.
     * @constructor 
     * @returns A new AnjutaCommandBar
     */
    static new(): CommandBar
    _init(config?: CommandBar.ConstructorProperties): void
}

module CommandQueue {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    interface FinishedSignalCallback {
        ($obj: CommandQueue): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface CommandQueue {

    // Own fields of Anjuta-3.0.Anjuta.CommandQueue

    parent_instance: GObject.Object
    priv: CommandQueuePriv

    // Owm methods of Anjuta-3.0.Anjuta.CommandQueue

    /**
     * Adds a command to the Queue and starts it if there are no other commands
     * waiting
     * @param command The command to add
     */
    push(command: Command): void
    start(): boolean

    // Own virtual methods of Anjuta-3.0.Anjuta.CommandQueue

    vfunc_finished(): void

    // Own signals of Anjuta-3.0.Anjuta.CommandQueue

    connect(sigName: "finished", callback: CommandQueue.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: CommandQueue.FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.CommandQueue

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CommandQueue extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.CommandQueue

    static name: string
    static $gtype: GObject.GType<CommandQueue>

    // Constructors of Anjuta-3.0.Anjuta.CommandQueue

    constructor(config?: CommandQueue.ConstructorProperties) 
    constructor(mode: CommandQueueExecuteMode) 
    static new(mode: CommandQueueExecuteMode): CommandQueue
    _init(config?: CommandQueue.ConstructorProperties): void
}

module Completion {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.Completion

        case_sensitive?: boolean | null
    }

}

interface Completion {

    // Own properties of Anjuta-3.0.Anjuta.Completion

    case_sensitive: boolean

    // Own fields of Anjuta-3.0.Anjuta.Completion

    parent_instance: GObject.Object
    priv: CompletionPrivate

    // Owm methods of Anjuta-3.0.Anjuta.Completion

    /**
     * Add an item to the completion.
     * @param item the item to be added.
     */
    add_item(item: any | null): void
    /**
     * Clear all items added to the completion.
     */
    clear(): void
    get_case_sensitive(): boolean
    set_case_sensitive(case_sensitive: boolean): void
    set_item_destroy_func(item_destroy_func: GLib.DestroyNotify | null): void

    // Class property signals of Anjuta-3.0.Anjuta.Completion

    connect(sigName: "notify::case-sensitive", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::case-sensitive", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::case-sensitive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Completion extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Completion

    static name: string
    static $gtype: GObject.GType<Completion>

    // Constructors of Anjuta-3.0.Anjuta.Completion

    constructor(config?: Completion.ConstructorProperties) 
    _init(config?: Completion.ConstructorProperties): void
}

module Dock {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gdl.Dock.ConstructorProperties {
    }

}

interface Dock extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    name: any

    // Own fields of Anjuta-3.0.Anjuta.Dock

    parent_instance: Gdl.Dock & GObject.InitiallyUnowned
    priv: any

    // Owm methods of Anjuta-3.0.Anjuta.Dock

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
    add_pane(pane_name: string | null, pane_label: string | null, stock_icon: string | null, pane: DockPane, placement: Gdl.DockPlacement, entries: CommandBarEntry[] | null, user_data: any | null): boolean
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
    add_pane_full(pane_name: string | null, pane_label: string | null, stock_icon: string | null, pane: DockPane, placement: Gdl.DockPlacement, entries: CommandBarEntry[] | null, user_data: any | null, behavior: Gdl.DockItemBehavior): boolean
    get_command_bar(): CommandBar | null
    /**
     * Makes the given pane invisible
     * @param pane Name of the pane to hide
     */
    hide_pane(pane: DockPane): void
    /**
     * Presents the pane to the user by making it the currently active pane in its
     * switcher
     * @param pane Pane to present
     */
    present_pane(pane: DockPane): void
    /**
     * `self` An AnjutaDock
     * Removes a pane from a dock
     * @param pane Name of the pane to remove
     */
    remove_pane(pane: DockPane): void
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
    replace_command_pane(pane_name: string | null, pane_label: string | null, stock_icon: string | null, pane: DockPane, placement: Gdl.DockPlacement, entries: CommandBarEntry[] | null, user_data: any | null): void
    /**
     * Associates an #AnjutaCommandBar with this dock. Command bars can be used to
     * provide different sets of commands based on the currently visible pane.
     * @param command_bar An #AnjutaCommandBar to associate with this dock
     */
    set_command_bar(command_bar: CommandBar): void
    /**
     * Makes the given pane visible
     * @param pane Name of the pane to show
     */
    show_pane(pane: DockPane): void

    // Conflicting methods

    /**
     * Get the top level #GdlDock widget of `object` or %NULL if cannot be found.
     * @returns A #GdlDock or %NULL.
     */
    get_toplevel(): Gdl.Dock | null

    // Overloads of get_toplevel

    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     * @returns the topmost ancestor of @widget, or @widget itself    if there’s no ancestor.
     */
    get_toplevel(): Gtk.Widget
    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     * @returns the topmost ancestor of @widget, or @widget itself    if there’s no ancestor.
     */
    get_toplevel(): Gtk.Widget
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Anjuta-3.0.Anjuta.Dock

    connect(sigName: "notify::default-title", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-title", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-title", ...args: any[]): void
    connect(sigName: "notify::floating", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::floating", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::floating", ...args: any[]): void
    connect(sigName: "notify::floatx", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::floatx", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::floatx", ...args: any[]): void
    connect(sigName: "notify::floaty", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::floaty", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::floaty", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::long-name", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::long-name", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::long-name", ...args: any[]): void
    connect(sigName: "notify::master", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pixbuf-icon", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-icon", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf-icon", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-id", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Dock extends Gdl.Dock {

    // Own properties of Anjuta-3.0.Anjuta.Dock

    static name: string
    static $gtype: GObject.GType<Dock>

    // Constructors of Anjuta-3.0.Anjuta.Dock

    constructor(config?: Dock.ConstructorProperties) 
    /**
     * Creates a new AnjutaDock.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new AnjutaDock.
     * @constructor 
     */
    static new(): Dock
    _init(config?: Dock.ConstructorProperties): void
}

module DockPane {

    // Signal callback interfaces

    /**
     * Signal callback interface for `multiple-selection-changed`
     */
    interface MultipleSelectionChangedSignalCallback {
        ($obj: DockPane): void
    }

    /**
     * Signal callback interface for `single-selection-changed`
     */
    interface SingleSelectionChangedSignalCallback {
        ($obj: DockPane): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.DockPane

        plugin?: Plugin | null
    }

}

interface DockPane {

    // Own properties of Anjuta-3.0.Anjuta.DockPane

    plugin: Plugin

    // Own fields of Anjuta-3.0.Anjuta.DockPane

    parent_instance: GObject.Object
    priv: DockPanePriv

    // Owm methods of Anjuta-3.0.Anjuta.DockPane

    /**
     * Emits the multiple-selection-changed signal.
     */
    notify_multiple_selection_changed(): void
    /**
     * Emits the single-selection-changed signal.
     */
    notify_single_selection_changed(): void
    /**
     * Refreshes the given pane. Subclasses only need to override this method if
     * needed.
     */
    refresh(): void

    // Own virtual methods of Anjuta-3.0.Anjuta.DockPane

    vfunc_multiple_selection_changed(): void
    /**
     * Refreshes the given pane. Subclasses only need to override this method if
     * needed.
     * @virtual 
     */
    vfunc_refresh(): void
    vfunc_single_selection_changed(): void

    // Own signals of Anjuta-3.0.Anjuta.DockPane

    connect(sigName: "multiple-selection-changed", callback: DockPane.MultipleSelectionChangedSignalCallback): number
    connect_after(sigName: "multiple-selection-changed", callback: DockPane.MultipleSelectionChangedSignalCallback): number
    emit(sigName: "multiple-selection-changed", ...args: any[]): void
    connect(sigName: "single-selection-changed", callback: DockPane.SingleSelectionChangedSignalCallback): number
    connect_after(sigName: "single-selection-changed", callback: DockPane.SingleSelectionChangedSignalCallback): number
    emit(sigName: "single-selection-changed", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.DockPane

    connect(sigName: "notify::plugin", callback: (($obj: DockPane, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: DockPane, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plugin", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DockPane extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.DockPane

    static name: string
    static $gtype: GObject.GType<DockPane>

    // Constructors of Anjuta-3.0.Anjuta.DockPane

    constructor(config?: DockPane.ConstructorProperties) 
    _init(config?: DockPane.ConstructorProperties): void
}

module DropEntry {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.CellEditable.ConstructorProperties, Gtk.Editable.ConstructorProperties, Entry.ConstructorProperties {
    }

}

interface DropEntry extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {

    // Own fields of Anjuta-3.0.Anjuta.DropEntry

    parent_instance: Entry & Gtk.Entry & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Class property signals of Anjuta-3.0.Anjuta.DropEntry

    connect(sigName: "notify::help-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::help-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::help-text", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::caps-lock-warning", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-warning", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps-lock-warning", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::inner-border", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inner-border", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inner-border", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-pixbuf", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-pixbuf", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-stock", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-stock", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-stock", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-stock", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::editing-canceled", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DropEntry extends Entry {

    // Own properties of Anjuta-3.0.Anjuta.DropEntry

    static name: string
    static $gtype: GObject.GType<DropEntry>

    // Constructors of Anjuta-3.0.Anjuta.DropEntry

    constructor(config?: DropEntry.ConstructorProperties) 
    constructor() 
    static new(): DropEntry
    _init(config?: DropEntry.ConstructorProperties): void
}

module Entry {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.CellEditable.ConstructorProperties, Gtk.Editable.ConstructorProperties, Gtk.Entry.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.Entry

        help_text?: string | null
    }

}

interface Entry extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {

    // Own properties of Anjuta-3.0.Anjuta.Entry

    help_text: string | null

    // Own fields of Anjuta-3.0.Anjuta.Entry

    parent_instance: Gtk.Entry & GObject.InitiallyUnowned
    priv: EntryPriv

    // Owm methods of Anjuta-3.0.Anjuta.Entry

    dup_text(): string | null
    get_text(): string | null
    is_showing_help_text(): boolean
    /**
     * Sets the text on the entry, showing the help text if the text is empty.
     * @param text The new text
     */
    set_text(text: string | null): void

    // Class property signals of Anjuta-3.0.Anjuta.Entry

    connect(sigName: "notify::help-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::help-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::help-text", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::caps-lock-warning", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-warning", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps-lock-warning", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::inner-border", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inner-border", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inner-border", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-pixbuf", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-pixbuf", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-stock", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-stock", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-stock", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-stock", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::editing-canceled", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Entry extends Gtk.Entry {

    // Own properties of Anjuta-3.0.Anjuta.Entry

    static name: string
    static $gtype: GObject.GType<Entry>

    // Constructors of Anjuta-3.0.Anjuta.Entry

    constructor(config?: Entry.ConstructorProperties) 
    /**
     * Creates a new AnjutaEntry.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new AnjutaEntry.
     * @constructor 
     */
    static new(): Entry
    _init(config?: Entry.ConstructorProperties): void
}

module EnvironmentEditor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: EnvironmentEditor): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {
    }

}

interface EnvironmentEditor extends Atk.ImplementorIface, Gtk.Buildable {

    // Owm methods of Anjuta-3.0.Anjuta.EnvironmentEditor

    reset(): void
    set_variable(variable: string | null): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Own virtual methods of Anjuta-3.0.Anjuta.EnvironmentEditor

    vfunc_changed(): void

    // Own signals of Anjuta-3.0.Anjuta.EnvironmentEditor

    connect(sigName: "changed", callback: EnvironmentEditor.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: EnvironmentEditor.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.EnvironmentEditor

    connect(sigName: "notify::border-width", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EnvironmentEditor extends Gtk.Bin {

    // Own properties of Anjuta-3.0.Anjuta.EnvironmentEditor

    static name: string
    static $gtype: GObject.GType<EnvironmentEditor>

    // Constructors of Anjuta-3.0.Anjuta.EnvironmentEditor

    constructor(config?: EnvironmentEditor.ConstructorProperties) 
    constructor() 
    static new(): EnvironmentEditor
    _init(config?: EnvironmentEditor.ConstructorProperties): void
}

module FileDropEntry {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.CellEditable.ConstructorProperties, Gtk.Editable.ConstructorProperties, DropEntry.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.FileDropEntry

        relative_path?: string | null
    }

}

interface FileDropEntry extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {

    // Own properties of Anjuta-3.0.Anjuta.FileDropEntry

    relative_path: string | null

    // Own fields of Anjuta-3.0.Anjuta.FileDropEntry

    parent_instance: DropEntry & Entry & Gtk.Entry & GObject.InitiallyUnowned
    priv: any

    // Owm methods of Anjuta-3.0.Anjuta.FileDropEntry

    set_relative_path(path: string | null): void

    // Class property signals of Anjuta-3.0.Anjuta.FileDropEntry

    connect(sigName: "notify::relative-path", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relative-path", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relative-path", ...args: any[]): void
    connect(sigName: "notify::help-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::help-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::help-text", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::caps-lock-warning", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-warning", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps-lock-warning", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::inner-border", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inner-border", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inner-border", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-pixbuf", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-pixbuf", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-stock", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-stock", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-stock", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-stock", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::editing-canceled", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileDropEntry extends DropEntry {

    // Own properties of Anjuta-3.0.Anjuta.FileDropEntry

    static name: string
    static $gtype: GObject.GType<FileDropEntry>

    // Constructors of Anjuta-3.0.Anjuta.FileDropEntry

    constructor(config?: FileDropEntry.ConstructorProperties) 
    constructor() 
    static new(): FileDropEntry
    _init(config?: FileDropEntry.ConstructorProperties): void
}

module FileList {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.FileList

        relative_path?: string | null
        show_add_button?: boolean | null
    }

}

interface FileList extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Anjuta-3.0.Anjuta.FileList

    relative_path: string | null
    show_add_button: boolean

    // Own fields of Anjuta-3.0.Anjuta.FileList

    parent_instance: Gtk.Box & GObject.InitiallyUnowned
    priv: FileListPriv

    // Owm methods of Anjuta-3.0.Anjuta.FileList

    clear(): void
    set_relative_path(path: string | null): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Anjuta-3.0.Anjuta.FileList

    connect(sigName: "notify::relative-path", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relative-path", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relative-path", ...args: any[]): void
    connect(sigName: "notify::show-add-button", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-add-button", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-add-button", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileList extends Gtk.Box {

    // Own properties of Anjuta-3.0.Anjuta.FileList

    static name: string
    static $gtype: GObject.GType<FileList>

    // Constructors of Anjuta-3.0.Anjuta.FileList

    constructor(config?: FileList.ConstructorProperties) 
    constructor() 
    static new(): FileList

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: FileList.ConstructorProperties): void
}

module LanguageProvider {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface LanguageProvider {

    // Own fields of Anjuta-3.0.Anjuta.LanguageProvider

    parent: GObject.Object
    priv: LanguageProviderPriv

    // Owm methods of Anjuta-3.0.Anjuta.LanguageProvider

    /**
     * Complete the function name
     * @param iprov IAnjutaProvider object
     * @param iter the cursor
     * @param data the ProposalData
     */
    activate(iprov: GObject.Object, iter: GObject.Object, data: any | null): void
    /**
     * Searches for a calltip context
     * @param itip whether a tooltip is crrently shown
     * @param iter current cursor position
     * @param scope_context_ch language-specific context characters                    the end is marked with a '0' character
     * @returns name of the method to show a calltip for or %NULL
     */
    get_calltip_context(itip: GObject.Object, iter: GObject.Object, scope_context_ch: string | null): string | null
    /**
     * Search for the current typed word
     * @param editor IAnjutaEditor object
     * @param iter current cursor position
     * @param start_iter return location for the start_iter (if a preword was found)
     * @param word_characters 
     * @returns The current word (needs to be freed) or %NULL if no word was found
     */
    get_pre_word(editor: GObject.Object, iter: GObject.Object, start_iter: GObject.Object, word_characters: string | null): string | null
    /**
     * Install the settings for AnjutaLanguageProvider
     * @param ieditor IAnjutaEditor object
     * @param settings the settings
     */
    install(ieditor: GObject.Object, settings: Gio.Settings): void
    /**
     * Show completion for the context at position `iter`. The provider should
     * call anjuta_language_provider_proposals here to add proposals to the list.
     * @param iprov IAnjutaProvider object
     * @param cursor the text iter where the provider should be populated
     */
    populate(iprov: GObject.Object, cursor: GObject.Object): void

    // Class property signals of Anjuta-3.0.Anjuta.LanguageProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LanguageProvider extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.LanguageProvider

    static name: string
    static $gtype: GObject.GType<LanguageProvider>

    // Constructors of Anjuta-3.0.Anjuta.LanguageProvider

    constructor(config?: LanguageProvider.ConstructorProperties) 
    _init(config?: LanguageProvider.ConstructorProperties): void
}

module Launcher {

    // Signal callback interfaces

    /**
     * Signal callback interface for `busy`
     */
    interface BusySignalCallback {
        ($obj: Launcher, busy: boolean): void
    }

    /**
     * Signal callback interface for `child-exited`
     */
    interface ChildExitedSignalCallback {
        ($obj: Launcher, child_pid: number, status: number, time: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Launcher {

    // Own fields of Anjuta-3.0.Anjuta.Launcher

    parent: GObject.Object
    priv: LauncherPriv

    // Owm methods of Anjuta-3.0.Anjuta.Launcher

    /**
     * Gets the Process ID of the child being executed.
     * @returns Process ID of the child.
     */
    get_child_pid(): number
    /**
     * Tells if the laucher is currently executing any command.
     * @returns %TRUE if launcher is busy, otherwise %FALSE.
     */
    is_busy(): boolean
    /**
     * Resets the launcher and kills (SIGTERM) current process, if it is still
     * executing.
     */
    reset(): void
    /**
     * Sends a string to TTY input of the process currently being executed.
     * Mostly useful for entering passwords and other inputs which are directly
     * read from TTY input of the process.
     * @param input_str The string to send to PTY of the process.
     */
    send_ptyin(input_str: string | null): void
    /**
     * Sends a string to Standard input of the process currently being executed.
     * @param input_str The string to send to STDIN of the process.
     */
    send_stdin(input_str: string | null): void
    /**
     * Sends a EOF to Standard input of the process currently being executed.
     */
    send_stdin_eof(): void
    /**
     * Sets if output should buffered or not. By default, it is buffered.
     * @param buffered buffer output.
     * @returns Previous flag value
     */
    set_buffered_output(buffered: boolean): boolean
    /**
     * Set if output is checked for a password prompti. A special dialog box
     * is use to enter it in this case. By default, this behavior is enabled.
     * @param check_passwd check for password.
     * @returns Previous flag value
     */
    set_check_passwd_prompt(check_passwd: boolean): boolean
    /**
     * Sets the character set to use for Input/Output with the process.
     * @param charset Character set to use for Input/Output with the process.
     */
    set_encoding(charset: string | null): void
    /**
     * Sets if input (those given in STDIN) should enabled or disabled. By default,
     * it is disabled.
     * @param echo_on Echo ON flag.
     * @returns Previous flag value
     */
    set_terminal_echo(echo_on: boolean): boolean
    /**
     * When this flag is set, al i/o channels are closed and the child-exit
     * signal is emitted as soon as the child exit. By default, or when this
     * flag is clear, the launcher object wait until the i/o channels are
     * closed.
     * @param terminate_on_exit terminate on exit flag
     * @returns Previous flag value
     */
    set_terminate_on_exit(terminate_on_exit: boolean): boolean
    /**
     * Sends a kernel signal to the process that is being executed.
     * @param sig kernel signal ID (e.g. SIGTERM).
     */
    signal(sig: number): void

    // Own virtual methods of Anjuta-3.0.Anjuta.Launcher

    vfunc_busy(busy_flag: boolean): void
    vfunc_child_exited(child_pid: number, exit_status: number, time_taken_in_seconds: number): void

    // Own signals of Anjuta-3.0.Anjuta.Launcher

    connect(sigName: "busy", callback: Launcher.BusySignalCallback): number
    connect_after(sigName: "busy", callback: Launcher.BusySignalCallback): number
    emit(sigName: "busy", busy: boolean, ...args: any[]): void
    connect(sigName: "child-exited", callback: Launcher.ChildExitedSignalCallback): number
    connect_after(sigName: "child-exited", callback: Launcher.ChildExitedSignalCallback): number
    emit(sigName: "child-exited", child_pid: number, status: number, time: number, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Launcher

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Launcher extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Launcher

    static name: string
    static $gtype: GObject.GType<Launcher>

    // Constructors of Anjuta-3.0.Anjuta.Launcher

    constructor(config?: Launcher.ConstructorProperties) 
    /**
     * Sets if input (those given in STDIN) should enabled or disabled. By default,
     * it is disabled.
     * @constructor 
     * @returns a new instance of #AnjutaLancher class.
     */
    constructor() 
    /**
     * Sets if input (those given in STDIN) should enabled or disabled. By default,
     * it is disabled.
     * @constructor 
     * @returns a new instance of #AnjutaLancher class.
     */
    static new(): Launcher
    _init(config?: Launcher.ConstructorProperties): void
}

module PkgConfigChooser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `package-activated`
     */
    interface PackageActivatedSignalCallback {
        ($obj: PkgConfigChooser, package: string | null): void
    }

    /**
     * Signal callback interface for `package-deactivated`
     */
    interface PackageDeactivatedSignalCallback {
        ($obj: PkgConfigChooser, package: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.TreeView.ConstructorProperties {
    }

}

interface PkgConfigChooser extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own fields of Anjuta-3.0.Anjuta.PkgConfigChooser

    parent_instance: Gtk.TreeView & GObject.InitiallyUnowned
    priv: PkgConfigChooserPrivate

    // Owm methods of Anjuta-3.0.Anjuta.PkgConfigChooser

    get_selected_package(): string | null
    show_active_column(show_column: boolean): void
    show_active_only(show_selected: boolean): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Own virtual methods of Anjuta-3.0.Anjuta.PkgConfigChooser

    vfunc_package_activated(package: string | null): void
    vfunc_package_deactivated(package: string | null): void

    // Own signals of Anjuta-3.0.Anjuta.PkgConfigChooser

    connect(sigName: "package-activated", callback: PkgConfigChooser.PackageActivatedSignalCallback): number
    connect_after(sigName: "package-activated", callback: PkgConfigChooser.PackageActivatedSignalCallback): number
    emit(sigName: "package-activated", package: string | null, ...args: any[]): void
    connect(sigName: "package-deactivated", callback: PkgConfigChooser.PackageDeactivatedSignalCallback): number
    connect_after(sigName: "package-deactivated", callback: PkgConfigChooser.PackageDeactivatedSignalCallback): number
    emit(sigName: "package-deactivated", package: string | null, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.PkgConfigChooser

    connect(sigName: "notify::activate-on-single-click", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::enable-grid-lines", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-grid-lines", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-grid-lines", ...args: any[]): void
    connect(sigName: "notify::enable-search", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-search", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-search", ...args: any[]): void
    connect(sigName: "notify::enable-tree-lines", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tree-lines", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-tree-lines", ...args: any[]): void
    connect(sigName: "notify::expander-column", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expander-column", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expander-column", ...args: any[]): void
    connect(sigName: "notify::fixed-height-mode", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-height-mode", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-height-mode", ...args: any[]): void
    connect(sigName: "notify::headers-clickable", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-clickable", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-clickable", ...args: any[]): void
    connect(sigName: "notify::headers-visible", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-visible", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-visible", ...args: any[]): void
    connect(sigName: "notify::hover-expand", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-expand", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-expand", ...args: any[]): void
    connect(sigName: "notify::hover-selection", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-selection", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-selection", ...args: any[]): void
    connect(sigName: "notify::level-indentation", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level-indentation", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level-indentation", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::rubber-banding", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rubber-banding", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rubber-banding", ...args: any[]): void
    connect(sigName: "notify::rules-hint", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rules-hint", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rules-hint", ...args: any[]): void
    connect(sigName: "notify::search-column", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-column", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-column", ...args: any[]): void
    connect(sigName: "notify::show-expanders", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expanders", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-expanders", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PkgConfigChooser extends Gtk.TreeView {

    // Own properties of Anjuta-3.0.Anjuta.PkgConfigChooser

    static name: string
    static $gtype: GObject.GType<PkgConfigChooser>

    // Constructors of Anjuta-3.0.Anjuta.PkgConfigChooser

    constructor(config?: PkgConfigChooser.ConstructorProperties) 
    constructor() 
    static new(): PkgConfigChooser
    _init(config?: PkgConfigChooser.ConstructorProperties): void
}

module PkgScanner {

    // Constructor properties interface

    interface ConstructorProperties extends AsyncCommand.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.PkgScanner

        package?: string | null
        version?: string | null
    }

}

interface PkgScanner {

    // Own properties of Anjuta-3.0.Anjuta.PkgScanner

    package: string | null
    version: string | null

    // Own fields of Anjuta-3.0.Anjuta.PkgScanner

    parent_instance: AsyncCommand & Command & GObject.Object & GObject.Object
    priv: any

    // Owm methods of Anjuta-3.0.Anjuta.PkgScanner

    get_package(): string | null
    get_version(): string | null

    // Class property signals of Anjuta-3.0.Anjuta.PkgScanner

    connect(sigName: "notify::package", callback: (($obj: PkgScanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package", callback: (($obj: PkgScanner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::package", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: PkgScanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: PkgScanner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PkgScanner extends AsyncCommand {

    // Own properties of Anjuta-3.0.Anjuta.PkgScanner

    static name: string
    static $gtype: GObject.GType<PkgScanner>

    // Constructors of Anjuta-3.0.Anjuta.PkgScanner

    constructor(config?: PkgScanner.ConstructorProperties) 
    constructor(package: string | null, version: string | null) 
    static new(package: string | null, version: string | null): PkgScanner
    _init(config?: PkgScanner.ConstructorProperties): void
}

module Plugin {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activated`
     */
    interface ActivatedSignalCallback {
        ($obj: Plugin): void
    }

    /**
     * Signal callback interface for `deactivated`
     */
    interface DeactivatedSignalCallback {
        ($obj: Plugin): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.Plugin

        /**
         * The #AnjutaShell object associated with this plugin
         */
        shell?: Shell | null
    }

}

interface Plugin {

    // Own fields of Anjuta-3.0.Anjuta.Plugin

    parent: GObject.Object
    shell: Shell

    // Owm methods of Anjuta-3.0.Anjuta.Plugin

    /**
     * Activates the plugin by calling activate() virtual method. All plugins
     * should derive their classes from this virtual class and implement this
     * method.
     * If the plugin implements IAnjutaPreferences, it is prompted to install
     * it's preferences.
     * @returns %TRUE if sucessfully activated, %FALSE otherwise.
     */
    activate(): boolean
    /**
     * Adds a watch for `name` value. When the value is added in shell, the `added`
     * callback will be called and when it is removed, the `removed` callback will
     * be called. The returned ID is used to remove the watch later.
     * @param name Name of the value to watch.
     * @param added Callback to call when the value is added.
     * @param removed Callback to call when the value is removed.
     * @returns Watch ID.
     */
    add_watch(name: string | null, added: PluginValueAdded, removed: PluginValueRemoved): number
    /**
     * Deactivates the plugin by calling deactivate() virtual method. All plugins
     * should derive their classes from this virtual class and implement this
     * method.
     * @returns %TRUE if sucessfully activated, %FALSE otherwise.
     */
    deactivate(): boolean
    get_shell(): Shell
    /**
     * Returns %TRUE if the plugin has been activated.
     * @returns %TRUE if activated, %FALSE otherwise.
     */
    is_active(): boolean
    /**
     * Removes the watch represented by `id` (which was returned by
     * anjuta_plugin_add_watch()).
     * @param id Watch id to remove.
     * @param send_remove If true, calls value_removed callback.
     */
    remove_watch(id: number, send_remove: boolean): void

    // Own virtual methods of Anjuta-3.0.Anjuta.Plugin

    /**
     * Activates the plugin by calling activate() virtual method. All plugins
     * should derive their classes from this virtual class and implement this
     * method.
     * If the plugin implements IAnjutaPreferences, it is prompted to install
     * it's preferences.
     * @virtual 
     * @returns %TRUE if sucessfully activated, %FALSE otherwise.
     */
    vfunc_activate(): boolean
    vfunc_activated(): void
    /**
     * Deactivates the plugin by calling deactivate() virtual method. All plugins
     * should derive their classes from this virtual class and implement this
     * method.
     * @virtual 
     * @returns %TRUE if sucessfully activated, %FALSE otherwise.
     */
    vfunc_deactivate(): boolean
    vfunc_deactivated(): void

    // Own signals of Anjuta-3.0.Anjuta.Plugin

    connect(sigName: "activated", callback: Plugin.ActivatedSignalCallback): number
    connect_after(sigName: "activated", callback: Plugin.ActivatedSignalCallback): number
    emit(sigName: "activated", ...args: any[]): void
    connect(sigName: "deactivated", callback: Plugin.DeactivatedSignalCallback): number
    connect_after(sigName: "deactivated", callback: Plugin.DeactivatedSignalCallback): number
    emit(sigName: "deactivated", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Plugin

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Plugin extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Plugin

    static name: string
    static $gtype: GObject.GType<Plugin>

    // Constructors of Anjuta-3.0.Anjuta.Plugin

    constructor(config?: Plugin.ConstructorProperties) 
    _init(config?: Plugin.ConstructorProperties): void
}

module PluginHandle {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PluginHandle {

    // Own properties of Anjuta-3.0.Anjuta.PluginHandle

    readonly about: string | null
    readonly can_load: boolean
    readonly can_unload: boolean
    readonly checked: boolean
    readonly dependencies: any
    readonly dependency_names: any
    readonly dependents: any
    readonly description: any
    readonly icon_path: string | null
    readonly id: string | null
    readonly interfaces: any
    readonly language: string | null
    readonly name: string | null
    readonly path: string | null
    readonly resident: boolean
    readonly resolve_pass: number
    readonly user_activatable: boolean

    // Own fields of Anjuta-3.0.Anjuta.PluginHandle

    parent_instance: GObject.Object
    priv: PluginHandlePriv

    // Owm methods of Anjuta-3.0.Anjuta.PluginHandle

    get_about(): string | null
    get_can_load(): boolean
    get_can_unload(): boolean
    get_checked(): boolean
    get_description(): PluginDescription
    get_icon_path(): string | null
    get_id(): string | null
    get_language(): string | null
    get_name(): string | null
    get_path(): string | null
    get_resident(): boolean
    get_resolve_pass(): number
    get_user_activatable(): boolean
    set_can_load(can_load: boolean): void
    set_can_unload(can_unload: boolean): void
    set_checked(checked: boolean): void
    set_resolve_pass(resolve_pass: boolean): void
    unresolve_dependencies(): void

    // Class property signals of Anjuta-3.0.Anjuta.PluginHandle

    connect(sigName: "notify::about", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::about", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::about", ...args: any[]): void
    connect(sigName: "notify::can-load", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-load", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-load", ...args: any[]): void
    connect(sigName: "notify::can-unload", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-unload", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-unload", ...args: any[]): void
    connect(sigName: "notify::checked", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::checked", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::checked", ...args: any[]): void
    connect(sigName: "notify::dependencies", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dependencies", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dependencies", ...args: any[]): void
    connect(sigName: "notify::dependency-names", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dependency-names", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dependency-names", ...args: any[]): void
    connect(sigName: "notify::dependents", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dependents", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dependents", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::icon-path", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-path", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-path", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interfaces", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::language", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::resident", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resident", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resident", ...args: any[]): void
    connect(sigName: "notify::resolve-pass", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolve-pass", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resolve-pass", ...args: any[]): void
    connect(sigName: "notify::user-activatable", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-activatable", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-activatable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PluginHandle extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.PluginHandle

    static name: string
    static $gtype: GObject.GType<PluginHandle>

    // Constructors of Anjuta-3.0.Anjuta.PluginHandle

    constructor(config?: PluginHandle.ConstructorProperties) 
    constructor(plugin_desc_path: string | null) 
    static new(plugin_desc_path: string | null): PluginHandle
    _init(config?: PluginHandle.ConstructorProperties): void
}

module PluginManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `plugin-activated`
     */
    interface PluginActivatedSignalCallback {
        ($obj: PluginManager, object: any | null, p0: Plugin): void
    }

    /**
     * Signal callback interface for `plugin-deactivated`
     */
    interface PluginDeactivatedSignalCallback {
        ($obj: PluginManager, object: any | null, p0: Plugin): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.PluginManager

        shell?: GObject.Object | null
        status?: Status | null
    }

}

interface PluginManager {

    // Own properties of Anjuta-3.0.Anjuta.PluginManager

    readonly activated_plugins: any
    readonly available_plugins: any
    readonly profiles: any
    shell: GObject.Object
    status: Status

    // Own fields of Anjuta-3.0.Anjuta.PluginManager

    parent_instance: GObject.Object
    priv: PluginManagerPriv

    // Owm methods of Anjuta-3.0.Anjuta.PluginManager

    /**
     * Get the list of plugins loaded when there is a choice between several
     * ones without asking the user.
     * 
     * The list format is returned as a string with the format detailed in
     * anjuta_plugin_manager_set_remembered_plugins().
     * @returns a newly-allocated string that must be freed with g_free().
     */
    get_remembered_plugins(): string | null
    /**
     * Searches if a currently loaded plugins implements
     * the given interface.
     * @param iface_name The interface implemented by the object to be found
     * @returns %TRUE is the plugin is currently loaded.
     */
    is_active_plugin(iface_name: string | null): boolean
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
    set_remembered_plugins(remembered_plugins: string | null): void
    /**
     * Unload all plugins. Do not take care of the dependencies because all plugins
     * are unloaded anyway.
     */
    unload_all_plugins(): void
    /**
     * Unload the corresponding plugin. The plugin has to be loaded.
     * @param plugin_object A #AnjutaPlugin object
     * @returns %TRUE if the plugin has been unloaded. %FALSE if the plugin is already or cannot be unloaded.
     */
    unload_plugin(plugin_object: GObject.Object): boolean
    /**
     * Unload the plugin corresponding to the given handle. If the plugin is
     * already unloaded, nothing will be done.
     * @param handle A #AnjutaPluginHandle
     * @returns %TRUE is the plugin is unloaded. %FALSE if a corresponding plugin does not exist or if the plugin cannot be unloaded.
     */
    unload_plugin_by_handle(handle: PluginHandle): boolean

    // Own virtual methods of Anjuta-3.0.Anjuta.PluginManager

    vfunc_plugin_activated(handle: PluginHandle, plugin: GObject.Object): void
    vfunc_plugin_deactivated(handle: PluginHandle, plugin: GObject.Object): void

    // Own signals of Anjuta-3.0.Anjuta.PluginManager

    connect(sigName: "plugin-activated", callback: PluginManager.PluginActivatedSignalCallback): number
    connect_after(sigName: "plugin-activated", callback: PluginManager.PluginActivatedSignalCallback): number
    emit(sigName: "plugin-activated", object: any | null, p0: Plugin, ...args: any[]): void
    connect(sigName: "plugin-deactivated", callback: PluginManager.PluginDeactivatedSignalCallback): number
    connect_after(sigName: "plugin-deactivated", callback: PluginManager.PluginDeactivatedSignalCallback): number
    emit(sigName: "plugin-deactivated", object: any | null, p0: Plugin, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.PluginManager

    connect(sigName: "notify::activated-plugins", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activated-plugins", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activated-plugins", ...args: any[]): void
    connect(sigName: "notify::available-plugins", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-plugins", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::available-plugins", ...args: any[]): void
    connect(sigName: "notify::profiles", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::profiles", ...args: any[]): void
    connect(sigName: "notify::shell", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shell", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shell", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PluginManager extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.PluginManager

    static name: string
    static $gtype: GObject.GType<PluginManager>

    // Constructors of Anjuta-3.0.Anjuta.PluginManager

    constructor(config?: PluginManager.ConstructorProperties) 
    _init(config?: PluginManager.ConstructorProperties): void
}

module Preferences {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Preferences {

    // Own fields of Anjuta-3.0.Anjuta.Preferences

    parent: GObject.Object

    // Owm methods of Anjuta-3.0.Anjuta.Preferences

    add_from_builder(builder: Gtk.Builder, settings: Gio.Settings, glade_widget_name: string | null, stitle: string | null, icon_filename: string | null): void
    is_dialog_created(): boolean
    /**
     * This will register all the properties names of the format described above
     * without considering the UI. Useful if you have the widgets shown elsewhere
     * but you want them to be part of preferences system.
     * @param builder GtkBuilder object containing the properties widgets.
     * @param settings 
     * @param parent Parent widget in the builder object
     */
    register_all_properties_from_builder_xml(builder: Gtk.Builder, settings: Gio.Settings, parent: Gtk.Widget): void
    /**
     * This registers only one widget. The widget could be shown elsewhere.
     * The widget needs to fulfill the properties described in
     * #anjuta_preferences_add_page documentation.
     * @param settings the #GSettings object associated with that property
     * @param object Widget to register
     * @param key Property key
     * @returns %TRUE if sucessful.
     */
    register_property(settings: Gio.Settings, object: Gtk.Widget, key: string | null): boolean
    remove_page(page_name: string | null): void

    // Class property signals of Anjuta-3.0.Anjuta.Preferences

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Preferences extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Preferences

    static name: string
    static $gtype: GObject.GType<Preferences>

    // Constructors of Anjuta-3.0.Anjuta.Preferences

    constructor(config?: Preferences.ConstructorProperties) 
    /**
     * Creates a new #AnjutaPreferences object
     * @constructor 
     * @param plugin_manager #AnjutaPluginManager to be used
     * @param common_schema_id Common schema id used for key starting with .
     * @returns A #AnjutaPreferences object.
     */
    constructor(plugin_manager: PluginManager, common_schema_id: string | null) 
    /**
     * Creates a new #AnjutaPreferences object
     * @constructor 
     * @param plugin_manager #AnjutaPluginManager to be used
     * @param common_schema_id Common schema id used for key starting with .
     * @returns A #AnjutaPreferences object.
     */
    static new(plugin_manager: PluginManager, common_schema_id: string | null): Preferences
    _init(config?: Preferences.ConstructorProperties): void
}

module PreferencesDialog {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Dialog.ConstructorProperties {
    }

}

interface PreferencesDialog extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window

    // Own fields of Anjuta-3.0.Anjuta.PreferencesDialog

    parent: Gtk.Dialog & Gtk.Container
    priv: any

    // Owm methods of Anjuta-3.0.Anjuta.PreferencesDialog

    /**
     * Adds a widget page in preferences dialog. Name and icon appears
     * on the left icon list where differnt pages are selected.
     * @param name Name of the preferences page.
     * @param title Title of the page
     * @param icon Icon file name.
     * @param page page widget.
     */
    add_page(name: string | null, title: string | null, icon: GdkPixbuf.Pixbuf, page: Gtk.Widget): void
    /**
     * Removes a preferences page.
     * @param title Name of the preferences page.
     */
    remove_page(title: string | null): void

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Anjuta-3.0.Anjuta.PreferencesDialog

    connect(sigName: "notify::use-header-bar", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PreferencesDialog extends Gtk.Dialog {

    // Own properties of Anjuta-3.0.Anjuta.PreferencesDialog

    static name: string
    static $gtype: GObject.GType<PreferencesDialog>

    // Constructors of Anjuta-3.0.Anjuta.PreferencesDialog

    constructor(config?: PreferencesDialog.ConstructorProperties) 
    /**
     * Creates a new #AnjutaPreferencesDialog object.
     * @constructor 
     * @returns a new #AnjutaPreferencesDialog object.
     */
    constructor() 
    /**
     * Creates a new #AnjutaPreferencesDialog object.
     * @constructor 
     * @returns a new #AnjutaPreferencesDialog object.
     */
    static new(): PreferencesDialog

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     * @returns the new dialog as a #GtkWidget
     */
    static new(): Gtk.Dialog
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     * @returns a new #GtkWindow.
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: PreferencesDialog.ConstructorProperties): void
}

module Profile {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: Profile): void
    }

    /**
     * Signal callback interface for `descoped`
     */
    interface DescopedSignalCallback {
        ($obj: Profile): void
    }

    /**
     * Signal callback interface for `plugin-added`
     */
    interface PluginAddedSignalCallback {
        ($obj: Profile, plugin: any | null): void
    }

    /**
     * Signal callback interface for `plugin-removed`
     */
    interface PluginRemovedSignalCallback {
        ($obj: Profile, plugin: any | null): void
    }

    /**
     * Signal callback interface for `scoped`
     */
    interface ScopedSignalCallback {
        ($obj: Profile): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.Profile

        plugin_manager?: PluginManager | null
        profile_name?: string | null
        sync_file?: Gio.File | null
    }

}

interface Profile {

    // Own properties of Anjuta-3.0.Anjuta.Profile

    plugin_manager: PluginManager
    profile_name: string | null
    sync_file: Gio.File

    // Own fields of Anjuta-3.0.Anjuta.Profile

    parent_instance: GObject.Object
    priv: ProfilePriv

    // Owm methods of Anjuta-3.0.Anjuta.Profile

    /**
     * Add one plugin into the profile plugin list.
     * @param plugin a #AnjutaPluginHandle.
     */
    add_plugin(plugin: PluginHandle): void
    /**
     * Add all plugins inscribed in the xml file into the profile plugin list.
     * @param profile_xml_file xml file containing plugin list.
     * @param exclude_from_sync %TRUE if these plugins shouldn't be saved in user session.
     * @returns %TRUE on success, %FALSE otherwise.
     */
    add_plugins_from_xml(profile_xml_file: Gio.File, exclude_from_sync: boolean): boolean
    /**
     * Get the profile name.
     * @returns the profile name.
     */
    get_name(): string | null
    /**
     * Check if a plugin is included in the profile plugin list.
     * @param plugin a #AnjutaPluginHandle
     * @returns %TRUE if the plugin is included in the list.
     */
    has_plugin(plugin: PluginHandle): boolean
    /**
     * Load the profile
     * @returns TRUE on success, FALSE otherwise.
     */
    load(): boolean
    /**
     * Remove one plugin from the profile plugin list.
     * @param plugin a #AnjutaPluginHandle.
     */
    remove_plugin(plugin: PluginHandle): void
    /**
     * Define the file used to save plugins list.
     * @param sync_file file used to save profile.
     */
    set_sync_file(sync_file: Gio.File): void
    /**
     * Save the current plugins list in the xml file set with anjuta_profile_set_sync_file().
     * @returns %TRUE on success, %FALSE otherwise.
     */
    sync(): boolean
    /**
     * Unload the profile
     * @returns TRUE on success, FALSE otherwise.
     */
    unload(): boolean

    // Own virtual methods of Anjuta-3.0.Anjuta.Profile

    vfunc_changed(): void
    vfunc_descoped(): void
    vfunc_plugin_added(plugin: PluginHandle): void
    vfunc_plugin_removed(plugin: PluginHandle): void
    vfunc_scoped(): void

    // Own signals of Anjuta-3.0.Anjuta.Profile

    connect(sigName: "changed", callback: Profile.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Profile.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "descoped", callback: Profile.DescopedSignalCallback): number
    connect_after(sigName: "descoped", callback: Profile.DescopedSignalCallback): number
    emit(sigName: "descoped", ...args: any[]): void
    connect(sigName: "plugin-added", callback: Profile.PluginAddedSignalCallback): number
    connect_after(sigName: "plugin-added", callback: Profile.PluginAddedSignalCallback): number
    emit(sigName: "plugin-added", plugin: any | null, ...args: any[]): void
    connect(sigName: "plugin-removed", callback: Profile.PluginRemovedSignalCallback): number
    connect_after(sigName: "plugin-removed", callback: Profile.PluginRemovedSignalCallback): number
    emit(sigName: "plugin-removed", plugin: any | null, ...args: any[]): void
    connect(sigName: "scoped", callback: Profile.ScopedSignalCallback): number
    connect_after(sigName: "scoped", callback: Profile.ScopedSignalCallback): number
    emit(sigName: "scoped", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Profile

    connect(sigName: "notify::plugin-manager", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin-manager", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plugin-manager", ...args: any[]): void
    connect(sigName: "notify::profile-name", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profile-name", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::profile-name", ...args: any[]): void
    connect(sigName: "notify::sync-file", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-file", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync-file", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Stores a plugin list.
 * @class 
 */
class Profile extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Profile

    static name: string
    static $gtype: GObject.GType<Profile>

    // Constructors of Anjuta-3.0.Anjuta.Profile

    constructor(config?: Profile.ConstructorProperties) 
    /**
     * Create a new profile.
     * @constructor 
     * @param name the new profile name.
     * @param plugin_manager the #AnjutaPluginManager used by this profile.
     * @returns the new #AnjutaProfile object.
     */
    constructor(name: string | null, plugin_manager: PluginManager) 
    /**
     * Create a new profile.
     * @constructor 
     * @param name the new profile name.
     * @param plugin_manager the #AnjutaPluginManager used by this profile.
     * @returns the new #AnjutaProfile object.
     */
    static new(name: string | null, plugin_manager: PluginManager): Profile
    _init(config?: Profile.ConstructorProperties): void
}

module ProfileManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `profile-popped`
     */
    interface ProfilePoppedSignalCallback {
        ($obj: ProfileManager, profile: Profile): void
    }

    /**
     * Signal callback interface for `profile-pushed`
     */
    interface ProfilePushedSignalCallback {
        ($obj: ProfileManager, profile: Profile): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.ProfileManager

        plugin_manager?: PluginManager | null
    }

}

interface ProfileManager {

    // Own properties of Anjuta-3.0.Anjuta.ProfileManager

    plugin_manager: PluginManager

    // Own fields of Anjuta-3.0.Anjuta.ProfileManager

    parent_instance: GObject.Object
    priv: ProfileManagerPriv

    // Owm methods of Anjuta-3.0.Anjuta.ProfileManager

    /**
     * Close the #AnjutaProfileManager causing "descoped" to be emitted and
     * all queued and previous profiles to be released. This function is to be used
     * when destroying an Anjuta instance.
     */
    close(): void
    /**
     * Freeze the plugin manager. In this state, plugins can be added and removed
     * from the stack without triggering any change in the current profile. It is
     * possible to freeze the manager several times but it will be back in its normal
     * state only after as much call of anjuta_profile_manager_thaw().
     */
    freeze(): void
    /**
     * Return the current profile.
     * @returns a #AnjutaProfile object or %NULL if the profile stack is empty.
     */
    get_current(): Profile | null
    /**
     * Remove a profile from the profile manager stack. If the manager is not
     * frozen, only the current profile can be removed. It will be unloaded and
     * the previous profile will be loaded.
     * If the manager is frozen, the current profile or the last pushed profile
     * can be removed.
     * @param profile the #AnjutaProfile to remove.
     * @returns %TRUE on success, %FALSE otherwise.
     */
    pop(profile: Profile): boolean
    /**
     * Add a new profile at the top of the profile manager stack. If the profile
     * manager is not frozen, this new profile will be loaded immediatly and
     * become the current profile.
     * @param profile the new #AnjutaProfile.
     * @returns %TRUE on success, %FALSE otherwise.
     */
    push(profile: Profile): boolean
    /**
     * Put back the plugin manager in its normal mode after calling
     * anjuta_profile_manager_freeze(). It will load a new profile if one has been
     * added while the manager was frozen.
     * @returns %TRUE on success, %FALSE otherwise.
     */
    thaw(): boolean

    // Own virtual methods of Anjuta-3.0.Anjuta.ProfileManager

    vfunc_profile_popped(profile: Profile): void
    vfunc_profile_pushed(profile: Profile): void

    // Own signals of Anjuta-3.0.Anjuta.ProfileManager

    connect(sigName: "profile-popped", callback: ProfileManager.ProfilePoppedSignalCallback): number
    connect_after(sigName: "profile-popped", callback: ProfileManager.ProfilePoppedSignalCallback): number
    emit(sigName: "profile-popped", profile: Profile, ...args: any[]): void
    connect(sigName: "profile-pushed", callback: ProfileManager.ProfilePushedSignalCallback): number
    connect_after(sigName: "profile-pushed", callback: ProfileManager.ProfilePushedSignalCallback): number
    emit(sigName: "profile-pushed", profile: Profile, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.ProfileManager

    connect(sigName: "notify::plugin-manager", callback: (($obj: ProfileManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin-manager", callback: (($obj: ProfileManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plugin-manager", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Stores stack of #AnjutaProfile.
 * @class 
 */
class ProfileManager extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.ProfileManager

    static name: string
    static $gtype: GObject.GType<ProfileManager>

    // Constructors of Anjuta-3.0.Anjuta.ProfileManager

    constructor(config?: ProfileManager.ConstructorProperties) 
    /**
     * Create a new profile manager.
     * @constructor 
     * @param plugin_manager the #AnjutaPluginManager used by all profiles.
     * @returns the new #AnjutaProfileManager object.
     */
    constructor(plugin_manager: PluginManager) 
    /**
     * Create a new profile manager.
     * @constructor 
     * @param plugin_manager the #AnjutaPluginManager used by all profiles.
     * @returns the new #AnjutaProfileManager object.
     */
    static new(plugin_manager: PluginManager): ProfileManager
    _init(config?: ProfileManager.ConstructorProperties): void
}

module ProjectNode {

    // Signal callback interfaces

    /**
     * Signal callback interface for `loaded`
     */
    interface LoadedSignalCallback {
        ($obj: ProjectNode, object: any | null, p0: GLib.Error): void
    }

    /**
     * Signal callback interface for `updated`
     */
    interface UpdatedSignalCallback {
        ($obj: ProjectNode, object: any | null, p0: GLib.Error): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.ProjectNode

        file?: Gio.File | null
        name?: string | null
        state?: ProjectNodeState | null
        type?: ProjectNodeType | null
    }

}

interface ProjectNode {

    // Own properties of Anjuta-3.0.Anjuta.ProjectNode

    file: Gio.File
    name: string | null
    state: ProjectNodeState
    type: ProjectNodeType

    // Own fields of Anjuta-3.0.Anjuta.ProjectNode

    parent_instance: GObject.InitiallyUnowned

    // Owm methods of Anjuta-3.0.Anjuta.ProjectNode

    append(node: ProjectNode): ProjectNode
    check(): void
    children_foreach(func: ProjectNodeForeachFunc): void
    children_traverse(func: ProjectNodeTraverseFunc): ProjectNode
    clear_state(state: ProjectNodeState): boolean
    dump(): void
    first_child(): ProjectNode
    foreach(order: GLib.TraverseType, func: ProjectNodeForeachFunc): void
    get_file(): Gio.File
    get_full_type(): ProjectNodeType
    get_group_from_file(directory: Gio.File): ProjectNode
    get_map_property(id: string | null, name: string | null): ProjectProperty
    get_name(): string | null
    get_node_type(): ProjectNodeType
    get_properties(): ProjectProperty[]
    get_properties_info(): ProjectPropertyInfo[]
    get_property(id: string | null): ProjectProperty

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string | null, value: any): void
    get_property_info(id: string | null): ProjectPropertyInfo
    get_source_from_file(file: Gio.File): ProjectNode
    get_state(): ProjectNodeState
    insert_after(sibling: ProjectNode | null, node: ProjectNode): ProjectNode
    insert_before(sibling: ProjectNode | null, node: ProjectNode): ProjectNode
    insert_property(info: ProjectPropertyInfo, property: ProjectProperty): ProjectProperty
    insert_property_info(info: ProjectPropertyInfo): ProjectPropertyInfo
    last_child(): ProjectNode
    next_sibling(): ProjectNode
    nth_child(n: number): ProjectNode
    parent(): ProjectNode
    parent_type(type: ProjectNodeType): ProjectNode
    prepend(node: ProjectNode): ProjectNode
    prev_sibling(): ProjectNode
    remove(): ProjectNode
    remove_property(property: ProjectProperty): ProjectProperty
    root(): ProjectNode
    set_state(state: ProjectNodeState): boolean
    traverse(order: GLib.TraverseType, func: ProjectNodeTraverseFunc): ProjectNode

    // Own signals of Anjuta-3.0.Anjuta.ProjectNode

    connect(sigName: "loaded", callback: ProjectNode.LoadedSignalCallback): number
    connect_after(sigName: "loaded", callback: ProjectNode.LoadedSignalCallback): number
    emit(sigName: "loaded", object: any | null, p0: GLib.Error, ...args: any[]): void
    connect(sigName: "updated", callback: ProjectNode.UpdatedSignalCallback): number
    connect_after(sigName: "updated", callback: ProjectNode.UpdatedSignalCallback): number
    emit(sigName: "updated", object: any | null, p0: GLib.Error, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.ProjectNode

    connect(sigName: "notify::file", callback: (($obj: ProjectNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: ProjectNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ProjectNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ProjectNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: ProjectNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: ProjectNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: ProjectNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: ProjectNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #AnjutaProjectNode struct contains private data only, and should
 * accessed using the functions below.
 * @class 
 */
class ProjectNode extends GObject.InitiallyUnowned {

    // Own properties of Anjuta-3.0.Anjuta.ProjectNode

    static name: string
    static $gtype: GObject.GType<ProjectNode>

    // Constructors of Anjuta-3.0.Anjuta.ProjectNode

    constructor(config?: ProjectNode.ConstructorProperties) 
    _init(config?: ProjectNode.ConstructorProperties): void
}

module SavePrompt {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.MessageDialog.ConstructorProperties {
    }

}

interface SavePrompt extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window
    parent_instance: Gtk.Dialog & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Own fields of Anjuta-3.0.Anjuta.SavePrompt

    parent: Gtk.MessageDialog & Gtk.Container
    priv: any

    // Owm methods of Anjuta-3.0.Anjuta.SavePrompt

    get_items_count(): number

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Anjuta-3.0.Anjuta.SavePrompt

    connect(sigName: "notify::buttons", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buttons", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buttons", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::message-area", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-area", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-area", ...args: any[]): void
    connect(sigName: "notify::message-type", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-type", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-type", ...args: any[]): void
    connect(sigName: "notify::secondary-text", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-text", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-text", ...args: any[]): void
    connect(sigName: "notify::secondary-use-markup", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-use-markup", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-use-markup", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::use-header-bar", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SavePrompt extends Gtk.MessageDialog {

    // Own properties of Anjuta-3.0.Anjuta.SavePrompt

    static name: string
    static $gtype: GObject.GType<SavePrompt>

    // Constructors of Anjuta-3.0.Anjuta.SavePrompt

    constructor(config?: SavePrompt.ConstructorProperties) 
    constructor(parent: Gtk.Window) 
    static new(parent: Gtk.Window): SavePrompt

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     * @returns the new dialog as a #GtkWidget
     */
    static new(): Gtk.Dialog
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     * @returns a new #GtkWindow.
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: SavePrompt.ConstructorProperties): void
}

module Serializer {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.Serializer

        filepath?: string | null
        mode?: SerializerMode | null
    }

}

interface Serializer {

    // Own properties of Anjuta-3.0.Anjuta.Serializer

    readonly filepath: string | null
    readonly mode: SerializerMode

    // Own fields of Anjuta-3.0.Anjuta.Serializer

    parent: GObject.Object
    priv: SerializerPrivate

    // Owm methods of Anjuta-3.0.Anjuta.Serializer

    read_float(name: string | null, value: number): boolean
    read_int(name: string | null, value: number): boolean
    read_string(name: string | null, value: string | null, replace: boolean): boolean
    write_float(name: string | null, value: number): boolean
    write_int(name: string | null, value: number): boolean
    write_string(name: string | null, value: string | null): boolean

    // Class property signals of Anjuta-3.0.Anjuta.Serializer

    connect(sigName: "notify::filepath", callback: (($obj: Serializer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filepath", callback: (($obj: Serializer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filepath", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: Serializer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: Serializer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Serializer extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Serializer

    static name: string
    static $gtype: GObject.GType<Serializer>

    // Constructors of Anjuta-3.0.Anjuta.Serializer

    constructor(config?: Serializer.ConstructorProperties) 
    constructor(filepath: string | null, mode: SerializerMode) 
    static new(filepath: string | null, mode: SerializerMode): Serializer
    _init(config?: Serializer.ConstructorProperties): void
}

module Session {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Session {

    // Own fields of Anjuta-3.0.Anjuta.Session

    parent: GObject.Object
    priv: SessionPriv

    // Owm methods of Anjuta-3.0.Anjuta.Session

    /**
     * Clears the session.
     */
    clear(): void
    /**
     * Clears the given section in session object.
     * @param section Section to clear.
     */
    clear_section(section: string | null): void
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
    get_file_from_relative_uri(uri: string | null, fragment: string | null): Gio.File
    /**
     * Get a float `value` of `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     * @returns Key value
     */
    get_float(section: string | null, key: string | null): number
    /**
     * Get an integer `value` of `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     * @returns Key value
     */
    get_int(section: string | null, key: string | null): number
    /**
     * Return an URI relative to the session directory file with an optional
     * fragment.
     * It is useful to keep only relative file paths in a session file to be able
     * to copy the whole project without breaking references.
     * @param file a GFile
     * @param fragment an optional fragment
     * @returns A string that has to be freed with g_free().
     */
    get_relative_uri_from_file(file: Gio.File, fragment: string | null): string | null
    /**
     * Returns the directory corresponding to this session object.
     * @returns session directory
     */
    get_session_directory(): string | null
    /**
     * Gets the session filename corresponding to this session object.
     * @returns session (absolute) filename
     */
    get_session_filename(): string | null
    /**
     * Get a string `value` of `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     * @returns Key value
     */
    get_string(section: string | null, key: string | null): string | null
    /**
     * Set a float `value` to `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     * @param value Key value
     */
    set_float(section: string | null, key: string | null, value: number): void
    /**
     * Set an integer `value` to `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     * @param value Key value
     */
    set_int(section: string | null, key: string | null, value: number): void
    /**
     * Set a string `value` to `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     * @param value Key value
     */
    set_string(section: string | null, key: string | null, value: string | null): void
    /**
     * Synchronizes session object with session file
     */
    sync(): void

    // Class property signals of Anjuta-3.0.Anjuta.Session

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Session extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Session

    static name: string
    static $gtype: GObject.GType<Session>

    // Constructors of Anjuta-3.0.Anjuta.Session

    constructor(config?: Session.ConstructorProperties) 
    /**
     * Created a new session object. `session_directory` is the directory
     * where session information will be stored or loaded in case of existing
     * session.
     * @constructor 
     * @param session_directory Directory where session is loaded from/saved to.
     * @returns an #AnjutaSession Object
     */
    constructor(session_directory: string | null) 
    /**
     * Created a new session object. `session_directory` is the directory
     * where session information will be stored or loaded in case of existing
     * session.
     * @constructor 
     * @param session_directory Directory where session is loaded from/saved to.
     * @returns an #AnjutaSession Object
     */
    static new(session_directory: string | null): Session
    _init(config?: Session.ConstructorProperties): void
}

module Status {

    // Signal callback interfaces

    /**
     * Signal callback interface for `busy`
     */
    interface BusySignalCallback {
        ($obj: Status, object: boolean): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {
    }

}

interface Status extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Anjuta-3.0.Anjuta.Status

    parent: Gtk.Box & Gtk.Container
    priv: StatusPriv

    // Owm methods of Anjuta-3.0.Anjuta.Status

    add_widget(widget: Gtk.Widget): void
    busy_pop(): void
    busy_push(): void
    clear_stack(): void
    disable_splash(disable_splash: boolean): void
    pop(): void
    progress_add_ticks(ticks: number): void
    progress_increment_ticks(ticks: number, text: string | null): void
    progress_pulse(text: string | null): void
    progress_reset(): void
    progress_tick(icon: GdkPixbuf.Pixbuf, text: string | null): void
    set_splash(splash_file: string | null, splash_progress_position: number): void
    set_title(title: string | null): void
    set_title_window(window: Gtk.Widget): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Own virtual methods of Anjuta-3.0.Anjuta.Status

    vfunc_busy(state: boolean): void

    // Own signals of Anjuta-3.0.Anjuta.Status

    connect(sigName: "busy", callback: Status.BusySignalCallback): number
    connect_after(sigName: "busy", callback: Status.BusySignalCallback): number
    emit(sigName: "busy", object: boolean, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Status

    connect(sigName: "notify::baseline-position", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Status extends Gtk.Box {

    // Own properties of Anjuta-3.0.Anjuta.Status

    static name: string
    static $gtype: GObject.GType<Status>

    // Constructors of Anjuta-3.0.Anjuta.Status

    constructor(config?: Status.ConstructorProperties) 
    constructor() 
    static new(): Status

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Status.ConstructorProperties): void
}

module SyncCommand {

    // Constructor properties interface

    interface ConstructorProperties extends Command.ConstructorProperties {
    }

}

interface SyncCommand {

    // Own fields of Anjuta-3.0.Anjuta.SyncCommand

    parent_instance: Command & GObject.Object

    // Class property signals of Anjuta-3.0.Anjuta.SyncCommand

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SyncCommand extends Command {

    // Own properties of Anjuta-3.0.Anjuta.SyncCommand

    static name: string
    static $gtype: GObject.GType<SyncCommand>

    // Constructors of Anjuta-3.0.Anjuta.SyncCommand

    constructor(config?: SyncCommand.ConstructorProperties) 
    _init(config?: SyncCommand.ConstructorProperties): void
}

module Tabber {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.Tabber

        notebook?: GObject.Object | null
    }

}

interface Tabber extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Anjuta-3.0.Anjuta.Tabber

    readonly notebook: GObject.Object

    // Own fields of Anjuta-3.0.Anjuta.Tabber

    parent_instance: Gtk.Container & GObject.InitiallyUnowned
    priv: TabberPriv

    // Owm methods of Anjuta-3.0.Anjuta.Tabber

    /**
     * Append a tab to the AnjutaTabber widget
     * @param tab_label widget used as tab label
     */
    add_tab(tab_label: Gtk.Widget): void
    /**
     * Prepend a tab to the AnjutaTabber widget
     * @param tab_label widget used as tab label
     */
    prepend_tab(tab_label: Gtk.Widget): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Anjuta-3.0.Anjuta.Tabber

    connect(sigName: "notify::notebook", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notebook", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::notebook", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Tabber extends Gtk.Container {

    // Own properties of Anjuta-3.0.Anjuta.Tabber

    static name: string
    static $gtype: GObject.GType<Tabber>

    // Constructors of Anjuta-3.0.Anjuta.Tabber

    constructor(config?: Tabber.ConstructorProperties) 
    /**
     * Creates a new AnjutaTabber widget
     * @constructor 
     * @param notebook the GtkNotebook the tabber should be associated with
     * @returns newly created AnjutaTabber widget
     */
    constructor(notebook: Gtk.Notebook) 
    /**
     * Creates a new AnjutaTabber widget
     * @constructor 
     * @param notebook the GtkNotebook the tabber should be associated with
     * @returns newly created AnjutaTabber widget
     */
    static new(notebook: Gtk.Notebook): Tabber
    _init(config?: Tabber.ConstructorProperties): void
}

module TokenFile {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface TokenFile {

    // Owm methods of Anjuta-3.0.Anjuta.TokenFile

    free(): void
    get_token_location(location: TokenFileLocation, token: Token): boolean
    /**
     * Returns the position of the token in the file. This position is a number
     * which doesn't correspond to a line number or a character but respect the
     * order of token in the file.
     * @param token token
     * @returns The position of the token or 0 if the token is not in the file.
     */
    get_token_position(token: Token): number
    is_dirty(): boolean
    move(new_file: Gio.File): void
    save(): boolean
    unload(): boolean
    /**
     * Update the file with all changed token starting from `token`. The function can
     * return an error if the token is not in the file.
     * @param token Token to update.
     * @returns %TRUE is the update is done without error.
     */
    update(token: Token): boolean

    // Class property signals of Anjuta-3.0.Anjuta.TokenFile

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TokenFile extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.TokenFile

    static name: string
    static $gtype: GObject.GType<TokenFile>

    // Constructors of Anjuta-3.0.Anjuta.TokenFile

    constructor(config?: TokenFile.ConstructorProperties) 
    constructor(file: Gio.File) 
    static new(file: Gio.File): TokenFile
    _init(config?: TokenFile.ConstructorProperties): void
}

module TreeComboBox {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: TreeComboBox): void
    }

    /**
     * Signal callback interface for `popdown`
     */
    interface PopdownSignalCallback {
        ($obj: TreeComboBox): void
    }

    /**
     * Signal callback interface for `popup`
     */
    interface PopupSignalCallback {
        ($obj: TreeComboBox): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Activatable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.CellLayout.ConstructorProperties, Gtk.ToggleButton.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.TreeComboBox

        model?: Gtk.TreeModel | null
    }

}

interface TreeComboBox extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable, Gtk.CellLayout {

    // Own properties of Anjuta-3.0.Anjuta.TreeComboBox

    model: Gtk.TreeModel

    // Own fields of Anjuta-3.0.Anjuta.TreeComboBox

    parent: Gtk.ToggleButton & Gtk.Container

    // Owm methods of Anjuta-3.0.Anjuta.TreeComboBox

    get_active_iter(iter: Gtk.TreeIter): boolean
    set_active(index: number): void

    // Overloads of set_active

    /**
     * Sets the status of the toggle button. Set to %TRUE if you want the
     * GtkToggleButton to be “pressed in”, and %FALSE to raise it.
     * This action causes the #GtkToggleButton::toggled signal and the
     * #GtkButton::clicked signal to be emitted.
     * @param is_active %TRUE or %FALSE.
     */
    set_active(is_active: boolean): void
    set_active_iter(iter: Gtk.TreeIter): void
    set_invalid_text(str: string | null): void
    set_model(model: Gtk.TreeModel): void
    set_valid_function(func: Gtk.TreeModelFilterVisibleFunc): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Own virtual methods of Anjuta-3.0.Anjuta.TreeComboBox

    vfunc_changed(): void

    // Own signals of Anjuta-3.0.Anjuta.TreeComboBox

    connect(sigName: "changed", callback: TreeComboBox.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: TreeComboBox.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "popdown", callback: TreeComboBox.PopdownSignalCallback): number
    connect_after(sigName: "popdown", callback: TreeComboBox.PopdownSignalCallback): number
    emit(sigName: "popdown", ...args: any[]): void
    connect(sigName: "popup", callback: TreeComboBox.PopupSignalCallback): number
    connect_after(sigName: "popup", callback: TreeComboBox.PopupSignalCallback): number
    emit(sigName: "popup", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.TreeComboBox

    connect(sigName: "notify::model", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::draw-indicator", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-indicator", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draw-indicator", ...args: any[]): void
    connect(sigName: "notify::inconsistent", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inconsistent", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inconsistent", ...args: any[]): void
    connect(sigName: "notify::always-show-image", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-show-image", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-position", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relief", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relief", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-stock", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::related-action", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeComboBox extends Gtk.ToggleButton {

    // Own properties of Anjuta-3.0.Anjuta.TreeComboBox

    static name: string
    static $gtype: GObject.GType<TreeComboBox>

    // Constructors of Anjuta-3.0.Anjuta.TreeComboBox

    constructor(config?: TreeComboBox.ConstructorProperties) 
    constructor() 
    static new(): TreeComboBox
    _init(config?: TreeComboBox.ConstructorProperties): void
}

module UI {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, Gtk.UIManager.ConstructorProperties {
    }

}

interface UI extends Gtk.Buildable {

    // Own fields of Anjuta-3.0.Anjuta.UI

    parent: Gtk.UIManager & GObject.Object
    priv: UIPrivate

    // Owm methods of Anjuta-3.0.Anjuta.UI

    /**
     * Activates the action `action_name` in the #GtkActionGroup `action_group`.
     * "ActionGroupName/ActionName". Note that it will only work if the group has
     * been added using methods in #AnjutaUI.
     * @param action_group Action group.
     * @param action_name Action name.
     */
    activate_action_by_group(action_group: Gtk.ActionGroup, action_name: string | null): void
    /**
     * Activates the action represented by `action_path`. The path is in the form
     * "ActionGroupName/ActionName". Note that it will only work if the group has
     * been added using methods in #AnjutaUI.
     * @param action_path Path of the action in the form "GroupName/ActionName"
     */
    activate_action_by_path(action_path: string | null): void
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
    add_action_group(action_group_name: string | null, action_group_label: string | null, action_group: Gtk.ActionGroup, can_customize: boolean): void
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
    add_action_group_entries(action_group_name: string | null, action_group_label: string | null, entries: Gtk.ActionEntry[], translation_domain: string | null, can_customize: boolean, user_data: any | null): Gtk.ActionGroup
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
    add_toggle_action_group_entries(action_group_name: string | null, action_group_label: string | null, entries: Gtk.ToggleActionEntry[], translation_domain: string | null, can_customize: boolean, user_data: any | null): Gtk.ActionGroup
    /**
     * Dumps the current UI XML tree in STDOUT. Useful for debugging.
     */
    dump_tree(): void
    /**
     * Creates an accel editor widget and returns it. It should be added to
     * container and displayed to users.
     * @returns a #GtkWidget containing the editor.
     */
    get_accel_editor(): Gtk.Widget
    /**
     * Returns the #GtkAccelGroup object associated with this UI manager.
     * @returns A #GtkAccelGroup object.
     */
    get_accel_group(): Gtk.AccelGroup
    /**
     * Returns the action object with the name `action_name` in `action_group_name`.
     * Note that it will be only sucessully returned if the group has been added
     * using methods in #AnjutaUI.
     * @param action_group_name Group name.
     * @param action_name Action name.
     * @returns A #GtkAction object
     */
    get_action(action_group_name: string | null, action_name: string | null): Gtk.Action

    // Overloads of get_action

    /**
     * Looks up an action by following a path. See gtk_ui_manager_get_widget()
     * for more information about paths.
     * @param path a path
     * @returns the action whose proxy widget is found by following the path,     or %NULL if no widget was found.
     */
    get_action(path: string | null): Gtk.Action
    /**
     * This returns the IconFactory object. All icons should be registered using
     * this icon factory. Read the documentation for #GtkIconFactory on how to
     * use it.
     * @returns The #GtkIconFactory object used by it
     */
    get_icon_factory(): Gtk.IconFactory
    /**
     * Merges XML UI definition in `ui_filename`. UI elements defined in the xml
     * are merged with existing UI elements in UI manager. The format of the
     * file content is the standard XML UI definition tree. For more detail,
     * read the documentation for #GtkUIManager.
     * @param ui_filename UI file to merge into UI manager.
     * @returns Integer merge ID
     */
    merge(ui_filename: string | null): number
    /**
     * Removes a previous added action group. All actions in this group are
     * also unregistered from UI manager.
     * @param action_group #GtkActionGroup object to remove.
     */
    remove_action_group(action_group: Gtk.ActionGroup): void
    unload_accels(): void
    /**
     * Unmerges UI with the ID value `id` (returned by anjuta_ui_merge() when
     * it was merged. For more detail, read the documentation for #GtkUIManager.
     * @param id Merge ID returned by anjuta_ui_merge().
     */
    unmerge(id: number): void

    // Class property signals of Anjuta-3.0.Anjuta.UI

    connect(sigName: "notify::add-tearoffs", callback: (($obj: UI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-tearoffs", callback: (($obj: UI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::add-tearoffs", ...args: any[]): void
    connect(sigName: "notify::ui", callback: (($obj: UI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ui", callback: (($obj: UI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ui", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UI extends Gtk.UIManager {

    // Own properties of Anjuta-3.0.Anjuta.UI

    static name: string
    static $gtype: GObject.GType<UI>

    // Constructors of Anjuta-3.0.Anjuta.UI

    constructor(config?: UI.ConstructorProperties) 
    /**
     * Creates a new instance of #AnjutaUI.
     * @constructor 
     * @returns A #AnjutaUI object
     */
    constructor() 
    /**
     * Creates a new instance of #AnjutaUI.
     * @constructor 
     * @returns A #AnjutaUI object
     */
    static new(): UI

    // Overloads of new

    /**
     * Creates a new ui manager object.
     * @constructor 
     * @returns a new ui manager object.
     */
    static new(): Gtk.UIManager
    _init(config?: UI.ConstructorProperties): void
    static load_accels(filename: string | null): void
    static save_accels(filename: string | null): void
}

module VcsStatusTreeView {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.TreeView.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.VcsStatusTreeView

        conflicted_selectable?: boolean | null
        show_status?: boolean | null
        status_codes?: VcsStatus | null
    }

}

interface VcsStatusTreeView extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of Anjuta-3.0.Anjuta.VcsStatusTreeView

    readonly conflicted_selectable: boolean
    show_status: boolean
    readonly status_codes: VcsStatus

    // Own fields of Anjuta-3.0.Anjuta.VcsStatusTreeView

    parent_instance: Gtk.TreeView & GObject.InitiallyUnowned
    priv: VcsStatusTreeViewPriv

    // Owm methods of Anjuta-3.0.Anjuta.VcsStatusTreeView

    add(path: string | null, status: VcsStatus, selected: boolean): void

    // Overloads of add

    /**
     * Adds `widget` to `container`. Typically used for simple containers
     * such as #GtkWindow, #GtkFrame, or #GtkButton; for more complicated
     * layout containers such as #GtkBox or #GtkGrid, this function will
     * pick default packing parameters that may not be correct.  So
     * consider functions such as gtk_box_pack_start() and
     * gtk_grid_attach() as an alternative to gtk_container_add() in
     * those cases. A widget may be added to only one container at a time;
     * you can’t place the same widget inside two different containers.
     * 
     * Note that some containers, such as #GtkScrolledWindow or #GtkListBox,
     * may add intermediate children between the added widget and the
     * container.
     * @param widget a widget to be placed inside `container`
     */
    add(widget: Gtk.Widget): void
    destroy(): void
    select_all(): void
    unselect_all(): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Anjuta-3.0.Anjuta.VcsStatusTreeView

    connect(sigName: "notify::conflicted-selectable", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::conflicted-selectable", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::conflicted-selectable", ...args: any[]): void
    connect(sigName: "notify::show-status", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-status", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-status", ...args: any[]): void
    connect(sigName: "notify::status-codes", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-codes", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status-codes", ...args: any[]): void
    connect(sigName: "notify::activate-on-single-click", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::enable-grid-lines", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-grid-lines", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-grid-lines", ...args: any[]): void
    connect(sigName: "notify::enable-search", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-search", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-search", ...args: any[]): void
    connect(sigName: "notify::enable-tree-lines", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tree-lines", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-tree-lines", ...args: any[]): void
    connect(sigName: "notify::expander-column", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expander-column", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expander-column", ...args: any[]): void
    connect(sigName: "notify::fixed-height-mode", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-height-mode", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-height-mode", ...args: any[]): void
    connect(sigName: "notify::headers-clickable", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-clickable", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-clickable", ...args: any[]): void
    connect(sigName: "notify::headers-visible", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-visible", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-visible", ...args: any[]): void
    connect(sigName: "notify::hover-expand", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-expand", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-expand", ...args: any[]): void
    connect(sigName: "notify::hover-selection", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-selection", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-selection", ...args: any[]): void
    connect(sigName: "notify::level-indentation", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level-indentation", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level-indentation", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::rubber-banding", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rubber-banding", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rubber-banding", ...args: any[]): void
    connect(sigName: "notify::rules-hint", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rules-hint", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rules-hint", ...args: any[]): void
    connect(sigName: "notify::search-column", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-column", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-column", ...args: any[]): void
    connect(sigName: "notify::show-expanders", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expanders", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-expanders", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VcsStatusTreeView extends Gtk.TreeView {

    // Own properties of Anjuta-3.0.Anjuta.VcsStatusTreeView

    static name: string
    static $gtype: GObject.GType<VcsStatusTreeView>

    // Constructors of Anjuta-3.0.Anjuta.VcsStatusTreeView

    constructor(config?: VcsStatusTreeView.ConstructorProperties) 
    constructor() 
    static new(): VcsStatusTreeView
    _init(config?: VcsStatusTreeView.ConstructorProperties): void
}

interface AsyncCommandClass {

    // Own fields of Anjuta-3.0.Anjuta.AsyncCommandClass

    parent_class: CommandClass
}

abstract class AsyncCommandClass {

    // Own properties of Anjuta-3.0.Anjuta.AsyncCommandClass

    static name: string
}

interface AsyncCommandPriv {
}

class AsyncCommandPriv {

    // Own properties of Anjuta-3.0.Anjuta.AsyncCommandPriv

    static name: string
}

interface AsyncNotifyClass {

    // Own fields of Anjuta-3.0.Anjuta.AsyncNotifyClass

    parent_class: GObject.ObjectClass
    finished: (self: AsyncNotify) => void
}

abstract class AsyncNotifyClass {

    // Own properties of Anjuta-3.0.Anjuta.AsyncNotifyClass

    static name: string
}

interface AsyncNotifyPriv {
}

class AsyncNotifyPriv {

    // Own properties of Anjuta-3.0.Anjuta.AsyncNotifyPriv

    static name: string
}

interface AutogenClass {
}

abstract class AutogenClass {

    // Own properties of Anjuta-3.0.Anjuta.AutogenClass

    static name: string
}

interface CModuleClass {
}

abstract class CModuleClass {

    // Own properties of Anjuta-3.0.Anjuta.CModuleClass

    static name: string
}

interface CPluginFactoryClass {
}

abstract class CPluginFactoryClass {

    // Own properties of Anjuta-3.0.Anjuta.CPluginFactoryClass

    static name: string
}

interface CellRendererCaptionedImageClass {

    // Own fields of Anjuta-3.0.Anjuta.CellRendererCaptionedImageClass

    parent_class: Gtk.CellRendererClass
}

abstract class CellRendererCaptionedImageClass {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererCaptionedImageClass

    static name: string
}

interface CellRendererDiffClass {

    // Own fields of Anjuta-3.0.Anjuta.CellRendererDiffClass

    parent_class: Gtk.CellRendererClass
}

abstract class CellRendererDiffClass {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererDiffClass

    static name: string
}

interface CellRendererDiffPrivate {
}

class CellRendererDiffPrivate {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererDiffPrivate

    static name: string
}

interface CloseButtonClass {

    // Own fields of Anjuta-3.0.Anjuta.CloseButtonClass

    parent_class: Gtk.ButtonClass
    priv: CloseButtonClassPrivate
}

abstract class CloseButtonClass {

    // Own properties of Anjuta-3.0.Anjuta.CloseButtonClass

    static name: string
}

interface CloseButtonClassPrivate {
}

class CloseButtonClassPrivate {

    // Own properties of Anjuta-3.0.Anjuta.CloseButtonClassPrivate

    static name: string
}

interface ColumnTextViewClass {

    // Own fields of Anjuta-3.0.Anjuta.ColumnTextViewClass

    parent_class: Gtk.BoxClass
}

abstract class ColumnTextViewClass {

    // Own properties of Anjuta-3.0.Anjuta.ColumnTextViewClass

    static name: string
}

interface ColumnTextViewPriv {
}

class ColumnTextViewPriv {

    // Own properties of Anjuta-3.0.Anjuta.ColumnTextViewPriv

    static name: string
}

interface CommandBarClass {

    // Own fields of Anjuta-3.0.Anjuta.CommandBarClass

    parent_class: Gtk.NotebookClass
}

abstract class CommandBarClass {

    // Own properties of Anjuta-3.0.Anjuta.CommandBarClass

    static name: string
}

interface CommandBarEntry {

    // Own fields of Anjuta-3.0.Anjuta.CommandBarEntry

    /**
     * The type of action
     * @field 
     */
    type: CommandBarEntryType
    /**
     * The name of the action for this entry
     * @field 
     */
    action_name: string | null
    /**
     * The display label for this entry
     * @field 
     */
    label: string | null
    tooltip: string | null
    /**
     * The stock icon to display for this entry
     * @field 
     */
    stock_icon: string | null
    /**
     * Function to call when this entry's action is activated
     * @field 
     */
    callback: GObject.Callback
}

/**
 * AnjutaCommandBarEntry is used to add a set of frames and actions to a command
 * bar.
 * @record 
 */
class CommandBarEntry {

    // Own properties of Anjuta-3.0.Anjuta.CommandBarEntry

    static name: string
}

interface CommandBarPriv {
}

class CommandBarPriv {

    // Own properties of Anjuta-3.0.Anjuta.CommandBarPriv

    static name: string
}

interface CommandClass {

    // Own fields of Anjuta-3.0.Anjuta.CommandClass

    parent_class: GObject.ObjectClass
    run: (self: Command) => number
    start: (self: Command) => void
    cancel: (self: Command) => void
    notify_data_arrived: (self: Command) => void
    notify_complete: (self: Command, return_code: number) => void
    notify_progress: (self: Command, progress: number) => void
    set_error_message: (self: Command, error_message: string | null) => void
    get_error_message: (self: Command) => string | null
    start_automatic_monitor: (self: Command) => boolean
    stop_automatic_monitor: (self: Command) => void
    data_arrived: (command: Command) => void
    command_started: (command: Command) => void
    command_finished: (command: Command, return_code: number) => void
    progress: (command: Command, progress: number) => void
}

abstract class CommandClass {

    // Own properties of Anjuta-3.0.Anjuta.CommandClass

    static name: string
}

interface CommandPriv {
}

class CommandPriv {

    // Own properties of Anjuta-3.0.Anjuta.CommandPriv

    static name: string
}

interface CommandQueueClass {

    // Own fields of Anjuta-3.0.Anjuta.CommandQueueClass

    parent_class: GObject.ObjectClass
    finished: (queue: CommandQueue) => void
}

abstract class CommandQueueClass {

    // Own properties of Anjuta-3.0.Anjuta.CommandQueueClass

    static name: string
}

interface CommandQueuePriv {
}

class CommandQueuePriv {

    // Own properties of Anjuta-3.0.Anjuta.CommandQueuePriv

    static name: string
}

interface CompletionClass {

    // Own fields of Anjuta-3.0.Anjuta.CompletionClass

    parent_class: GObject.ObjectClass
}

abstract class CompletionClass {

    // Own properties of Anjuta-3.0.Anjuta.CompletionClass

    static name: string
}

interface CompletionPrivate {
}

class CompletionPrivate {

    // Own properties of Anjuta-3.0.Anjuta.CompletionPrivate

    static name: string
}

interface DockClass {

    // Own fields of Anjuta-3.0.Anjuta.DockClass

    parent_class: Gdl.DockClass
}

abstract class DockClass {

    // Own properties of Anjuta-3.0.Anjuta.DockClass

    static name: string
}

interface DockPaneClass {

    // Own fields of Anjuta-3.0.Anjuta.DockPaneClass

    parent_class: GObject.ObjectClass
    refresh: (self: DockPane) => void
    single_selection_changed: (self: DockPane) => void
    multiple_selection_changed: (self: DockPane) => void
}

abstract class DockPaneClass {

    // Own properties of Anjuta-3.0.Anjuta.DockPaneClass

    static name: string
}

interface DockPanePriv {
}

class DockPanePriv {

    // Own properties of Anjuta-3.0.Anjuta.DockPanePriv

    static name: string
}

interface DockPriv {
}

class DockPriv {

    // Own properties of Anjuta-3.0.Anjuta.DockPriv

    static name: string
}

interface DropEntryClass {

    // Own fields of Anjuta-3.0.Anjuta.DropEntryClass

    parent_class: EntryClass
}

abstract class DropEntryClass {

    // Own properties of Anjuta-3.0.Anjuta.DropEntryClass

    static name: string
}

interface Encoding {

    // Owm methods of Anjuta-3.0.Anjuta.Encoding

    /**
     * Makes a copy of the given encoding.
     * This function is used by language bindings.
     * @returns a new #AnjutaEncoding.
     */
    copy(): Encoding
    /**
     * Frees the resources allocated by the given encoding.
     * This function is used by language bindings.
     */
    free(): void
    get_charset(): string | null
    get_name(): string | null
    to_string(): string | null
}

class Encoding {

    // Own properties of Anjuta-3.0.Anjuta.Encoding

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.Encoding

    static get_current(): Encoding
    static get_from_charset(charset: string | null): Encoding
    static get_from_index(index: number): Encoding
    static get_utf8(): Encoding
}

interface EntryClass {

    // Own fields of Anjuta-3.0.Anjuta.EntryClass

    parent_class: Gtk.EntryClass
}

abstract class EntryClass {

    // Own properties of Anjuta-3.0.Anjuta.EntryClass

    static name: string
}

interface EntryPriv {
}

class EntryPriv {

    // Own properties of Anjuta-3.0.Anjuta.EntryPriv

    static name: string
}

interface EnvironmentEditorClass {

    // Own fields of Anjuta-3.0.Anjuta.EnvironmentEditorClass

    parent_class: Gtk.BinClass
    changed: (self: EnvironmentEditor) => void
}

abstract class EnvironmentEditorClass {

    // Own properties of Anjuta-3.0.Anjuta.EnvironmentEditorClass

    static name: string
}

interface FileDropEntryClass {

    // Own fields of Anjuta-3.0.Anjuta.FileDropEntryClass

    parent_class: DropEntryClass
}

abstract class FileDropEntryClass {

    // Own properties of Anjuta-3.0.Anjuta.FileDropEntryClass

    static name: string
}

interface FileDropEntryPriv {
}

class FileDropEntryPriv {

    // Own properties of Anjuta-3.0.Anjuta.FileDropEntryPriv

    static name: string
}

interface FileListClass {

    // Own fields of Anjuta-3.0.Anjuta.FileListClass

    parent_class: Gtk.BoxClass
}

abstract class FileListClass {

    // Own properties of Anjuta-3.0.Anjuta.FileListClass

    static name: string
}

interface FileListPriv {
}

class FileListPriv {

    // Own properties of Anjuta-3.0.Anjuta.FileListPriv

    static name: string
}

interface LanguageProposalData {

    // Own fields of Anjuta-3.0.Anjuta.LanguageProposalData

    /**
     * Name of the object
     * @field 
     */
    name: string | null
    /**
     * Info about the object
     * @field 
     */
    info: string | null
    /**
     * If this is a function
     * @field 
     */
    is_func: boolean
    /**
     * If the function has at least one parameters
     * @field 
     */
    has_para: boolean

    // Owm methods of Anjuta-3.0.Anjuta.LanguageProposalData

    /**
     * Free the given proposal data
     */
    free(): void
}

class LanguageProposalData {

    // Own properties of Anjuta-3.0.Anjuta.LanguageProposalData

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.LanguageProposalData

    constructor(name: string | null) 
    static new(name: string | null): LanguageProposalData
}

interface LanguageProviderClass {

    // Own fields of Anjuta-3.0.Anjuta.LanguageProviderClass

    parent_class: GObject.ObjectClass
}

abstract class LanguageProviderClass {

    // Own properties of Anjuta-3.0.Anjuta.LanguageProviderClass

    static name: string
}

interface LanguageProviderPriv {
}

class LanguageProviderPriv {

    // Own properties of Anjuta-3.0.Anjuta.LanguageProviderPriv

    static name: string
}

interface LauncherClass {

    // Own fields of Anjuta-3.0.Anjuta.LauncherClass

    parent_class: GObject.ObjectClass
    child_exited: (launcher: Launcher, child_pid: number, exit_status: number, time_taken_in_seconds: number) => void
    busy: (launcher: Launcher, busy_flag: boolean) => void
}

abstract class LauncherClass {

    // Own properties of Anjuta-3.0.Anjuta.LauncherClass

    static name: string
}

interface LauncherPriv {
}

class LauncherPriv {

    // Own properties of Anjuta-3.0.Anjuta.LauncherPriv

    static name: string
}

interface PkgConfigChooserClass {

    // Own fields of Anjuta-3.0.Anjuta.PkgConfigChooserClass

    parent_class: Gtk.TreeViewClass
    package_activated: (self: PkgConfigChooser, package: string | null) => void
    package_deactivated: (self: PkgConfigChooser, package: string | null) => void
}

abstract class PkgConfigChooserClass {

    // Own properties of Anjuta-3.0.Anjuta.PkgConfigChooserClass

    static name: string
}

interface PkgConfigChooserPrivate {
}

class PkgConfigChooserPrivate {

    // Own properties of Anjuta-3.0.Anjuta.PkgConfigChooserPrivate

    static name: string
}

interface PkgScannerClass {

    // Own fields of Anjuta-3.0.Anjuta.PkgScannerClass

    parent_class: AsyncCommandClass
}

abstract class PkgScannerClass {

    // Own properties of Anjuta-3.0.Anjuta.PkgScannerClass

    static name: string
}

interface PkgScannerPrivate {
}

class PkgScannerPrivate {

    // Own properties of Anjuta-3.0.Anjuta.PkgScannerPrivate

    static name: string
}

interface PluginClass {

    // Own fields of Anjuta-3.0.Anjuta.PluginClass

    parent_class: GObject.ObjectClass
    activated: (plugin: Plugin) => void
    deactivated: (plugin: Plugin) => void
    activate: (plugin: Plugin) => boolean
    deactivate: (plugin: Plugin) => boolean
}

abstract class PluginClass {

    // Own properties of Anjuta-3.0.Anjuta.PluginClass

    static name: string
}

interface PluginDescription {

    // Owm methods of Anjuta-3.0.Anjuta.PluginDescription

    copy(): PluginDescription
    /**
     * Frees the #AnjutaPluginDescription instance.
     */
    free(): void
    /**
     * Returns the value of key as boolean in the given section.
     * @param section Section name.
     * @param keyname Key name.
     * @param val Pointer to value to store retured value.
     * @returns %TRUE if sucessful, otherwise %FALSE.
     */
    get_boolean(section: string | null, keyname: string | null, val: boolean): boolean
    /**
     * Returns the value of key as integer in the given section.
     * @param section Section name.
     * @param keyname Key name.
     * @param val Pointer to value to store retured value.
     * @returns %TRUE if sucessful, otherwise %FALSE.
     */
    get_integer(section: string | null, keyname: string | null, val: number): boolean
    /**
     * Returns the value of key in the given section in current locale.
     * @param section Section name.
     * @param keyname Key name.
     * @param val Pointer to value to store retured value.
     * @returns %TRUE if sucessful, otherwise %FALSE.
     */
    get_locale_string(section: string | null, keyname: string | null, val: string | null): boolean
    /**
     * Retrieves the value of a key (in the given section) for the given locale.
     * The value returned in `val` must be freed after use.
     * @param section_name Name of the section.
     * @param keyname Name of the key.
     * @param locale The locale for which the value is to be retrieved.
     * @returns %TRUE if sucessful, otherwise %FALSE.
     */
    get_raw(section_name: string | null, keyname: string | null, locale: string | null): [ /* returnType */ boolean, /* val */ string | null ]
    /**
     * Returns the value of key in the given section.
     * @param section Section name.
     * @param keyname Key name.
     * @param val Pointer to value to store retured value.
     * @returns %TRUE if sucessful, otherwise %FALSE.
     */
    get_string(section: string | null, keyname: string | null, val: string | null): boolean
    /**
     * Override the value of a key in the description. This can be removed using
     * the function anjuta_plugin_description_remove().
     * @param section_name Section name.
     * @param keyname Key name.
     * @param val Pointer to value to store retured value.
     * @returns TRUE if sucessful, otherwise FALSE.
     */
    override(section_name: string | null, keyname: string | null, val: string | null): boolean
    /**
     * Remove a key from the description.
     * @param section_name Section name.
     * @param keyname Key name.
     * @returns TRUE if sucessful, otherwise FALSE.
     */
    remove(section_name: string | null, keyname: string | null): boolean
    /**
     * Converts the description detains into string format, usually for
     * saving it in a file.
     * @returns The string representation of the description. The returned values must be freed after use.
     */
    to_string(): string | null
}

class PluginDescription {

    // Own properties of Anjuta-3.0.Anjuta.PluginDescription

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.PluginDescription

    constructor(filename: string | null) 
    static new(filename: string | null): PluginDescription
    /**
     * Parses the given plugin description data (usally read from the plugin
     * description file and creates an instance of #AnjutaPluginDescription.
     * The format of the content string is similar to .ini format.
     * @constructor 
     * @param data The data to parse. The format of the data is .ini style.
     * @returns a new #AnjutaPluginDescription object
     */
    static new_from_string(data: string | null): PluginDescription
}

interface PluginHandleClass {

    // Own fields of Anjuta-3.0.Anjuta.PluginHandleClass

    parent_class: GObject.ObjectClass
}

abstract class PluginHandleClass {

    // Own properties of Anjuta-3.0.Anjuta.PluginHandleClass

    static name: string
}

interface PluginHandlePriv {
}

class PluginHandlePriv {

    // Own properties of Anjuta-3.0.Anjuta.PluginHandlePriv

    static name: string
}

interface PluginManagerClass {

    // Own fields of Anjuta-3.0.Anjuta.PluginManagerClass

    parent_class: GObject.ObjectClass
    plugin_activated: (self: PluginManager, handle: PluginHandle, plugin: GObject.Object) => void
    plugin_deactivated: (self: PluginManager, handle: PluginHandle, plugin: GObject.Object) => void
}

abstract class PluginManagerClass {

    // Own properties of Anjuta-3.0.Anjuta.PluginManagerClass

    static name: string
}

interface PluginManagerPriv {
}

class PluginManagerPriv {

    // Own properties of Anjuta-3.0.Anjuta.PluginManagerPriv

    static name: string
}

interface PluginPrivate {
}

class PluginPrivate {

    // Own properties of Anjuta-3.0.Anjuta.PluginPrivate

    static name: string
}

interface PreferencesClass {

    // Own fields of Anjuta-3.0.Anjuta.PreferencesClass

    parent: GObject.ObjectClass
}

abstract class PreferencesClass {

    // Own properties of Anjuta-3.0.Anjuta.PreferencesClass

    static name: string
}

interface PreferencesDialogClass {

    // Own fields of Anjuta-3.0.Anjuta.PreferencesDialogClass

    parent: Gtk.DialogClass
}

abstract class PreferencesDialogClass {

    // Own properties of Anjuta-3.0.Anjuta.PreferencesDialogClass

    static name: string
}

interface PreferencesDialogPrivate {
}

class PreferencesDialogPrivate {

    // Own properties of Anjuta-3.0.Anjuta.PreferencesDialogPrivate

    static name: string
}

interface PreferencesPriv {
}

class PreferencesPriv {

    // Own properties of Anjuta-3.0.Anjuta.PreferencesPriv

    static name: string
}

interface ProfileClass {

    // Own fields of Anjuta-3.0.Anjuta.ProfileClass

    parent_class: GObject.ObjectClass
    plugin_added: (self: Profile, plugin: PluginHandle) => void
    plugin_removed: (self: Profile, plugin: PluginHandle) => void
    changed: (self: Profile) => void
    descoped: (self: Profile) => void
    scoped: (self: Profile) => void
}

abstract class ProfileClass {

    // Own properties of Anjuta-3.0.Anjuta.ProfileClass

    static name: string
}

interface ProfileManagerClass {

    // Own fields of Anjuta-3.0.Anjuta.ProfileManagerClass

    parent_class: GObject.ObjectClass
    profile_pushed: (self: ProfileManager, profile: Profile) => void
    profile_popped: (self: ProfileManager, profile: Profile) => void
}

abstract class ProfileManagerClass {

    // Own properties of Anjuta-3.0.Anjuta.ProfileManagerClass

    static name: string
}

interface ProfileManagerPriv {
}

class ProfileManagerPriv {

    // Own properties of Anjuta-3.0.Anjuta.ProfileManagerPriv

    static name: string
}

interface ProfilePriv {
}

class ProfilePriv {

    // Own properties of Anjuta-3.0.Anjuta.ProfilePriv

    static name: string
}

interface ProjectNodeClass {

    // Own fields of Anjuta-3.0.Anjuta.ProjectNodeClass

    parent_class: GObject.InitiallyUnownedClass
    updated: (error: GLib.Error) => void
    loaded: (error: GLib.Error) => void
}

abstract class ProjectNodeClass {

    // Own properties of Anjuta-3.0.Anjuta.ProjectNodeClass

    static name: string
}

interface ProjectNodeInfo {

    // Own fields of Anjuta-3.0.Anjuta.ProjectNodeInfo

    type: ProjectNodeType
    name: string | null
    mime_type: string | null
    property_help_id: string | null

    // Owm methods of Anjuta-3.0.Anjuta.ProjectNodeInfo

    copy(): ProjectNodeInfo
    free(): void
    mime(): string | null
}

class ProjectNodeInfo {

    // Own properties of Anjuta-3.0.Anjuta.ProjectNodeInfo

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.ProjectNodeInfo

    constructor(type: ProjectNodeType, name: string | null, mime_type: string | null) 
    static new(type: ProjectNodeType, name: string | null, mime_type: string | null): ProjectNodeInfo
}

interface ProjectProperty {

    // Own fields of Anjuta-3.0.Anjuta.ProjectProperty

    name: string | null
    value: string | null
    info: ProjectPropertyInfo
    user_data: any

    // Owm methods of Anjuta-3.0.Anjuta.ProjectProperty

    copy(): ProjectProperty
    free(): void
}

class ProjectProperty {

    // Own properties of Anjuta-3.0.Anjuta.ProjectProperty

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.ProjectProperty

    constructor(value: string | null, name: string | null, user_data: any | null) 
    static new(value: string | null, name: string | null, user_data: any | null): ProjectProperty
}

interface ProjectPropertyInfo {

    // Own fields of Anjuta-3.0.Anjuta.ProjectPropertyInfo

    id: string | null
    name: string | null
    type: ProjectValueType
    flags: ProjectPropertyFlags
    description: string | null
    default_value: ProjectProperty
    user_data: any

    // Owm methods of Anjuta-3.0.Anjuta.ProjectPropertyInfo

    copy(): ProjectPropertyInfo
    free(): void
}

class ProjectPropertyInfo {

    // Own properties of Anjuta-3.0.Anjuta.ProjectPropertyInfo

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.ProjectPropertyInfo

    constructor(id: string | null, name: string | null, type: ProjectValueType, flags: ProjectPropertyFlags, description: string | null, default_value: ProjectProperty, user_data: any | null) 
    static new(id: string | null, name: string | null, type: ProjectValueType, flags: ProjectPropertyFlags, description: string | null, default_value: ProjectProperty, user_data: any | null): ProjectPropertyInfo
}

interface Property {
}

class Property {

    // Own properties of Anjuta-3.0.Anjuta.Property

    static name: string
}

interface SavePromptClass {

    // Own fields of Anjuta-3.0.Anjuta.SavePromptClass

    parent_class: Gtk.MessageDialogClass
}

abstract class SavePromptClass {

    // Own properties of Anjuta-3.0.Anjuta.SavePromptClass

    static name: string
}

interface SavePromptPrivate {
}

class SavePromptPrivate {

    // Own properties of Anjuta-3.0.Anjuta.SavePromptPrivate

    static name: string
}

interface SerializerClass {

    // Own fields of Anjuta-3.0.Anjuta.SerializerClass

    parent_class: GObject.ObjectClass
}

abstract class SerializerClass {

    // Own properties of Anjuta-3.0.Anjuta.SerializerClass

    static name: string
}

interface SerializerPrivate {
}

class SerializerPrivate {

    // Own properties of Anjuta-3.0.Anjuta.SerializerPrivate

    static name: string
}

interface SessionClass {

    // Own fields of Anjuta-3.0.Anjuta.SessionClass

    parent_class: GObject.ObjectClass
}

abstract class SessionClass {

    // Own properties of Anjuta-3.0.Anjuta.SessionClass

    static name: string
}

interface SessionPriv {
}

class SessionPriv {

    // Own properties of Anjuta-3.0.Anjuta.SessionPriv

    static name: string
}

interface ShellIface {

    // Own fields of Anjuta-3.0.Anjuta.ShellIface

    g_iface: GObject.TypeInterface
    value_added: (shell: Shell, name: string | null, value: any) => void
    value_removed: (shell: Shell, name: string | null) => void
    save_session: (shell: Shell, phase: SessionPhase, session: Session) => void
    load_session: (shell: Shell, phase: SessionPhase, session: Session) => void
    save_prompt: (shell: Shell, save_prompt: SavePrompt) => void
    get_status: (shell: Shell) => Status
    get_ui: (shell: Shell) => UI
    get_preferences: (shell: Shell) => Preferences
    get_plugin_manager: (shell: Shell) => PluginManager
    get_profile_manager: (shell: Shell) => ProfileManager
    add_widget_full: (shell: Shell, widget: Gtk.Widget, name: string | null, title: string | null, stock_id: string | null, placement: ShellPlacement, locked: boolean) => void
    add_widget_custom: (shell: Shell, widget: Gtk.Widget, name: string | null, title: string | null, stock_id: string | null, label: Gtk.Widget, placement: ShellPlacement) => void
    remove_widget: (shell: Shell, widget: Gtk.Widget) => void
    present_widget: (shell: Shell, widget: Gtk.Widget) => void
    iconify_dockable_widget: (shell: Shell, widget: Gtk.Widget) => void
    hide_dockable_widget: (shell: Shell, widget: Gtk.Widget) => void
    show_dockable_widget: (shell: Shell, widget: Gtk.Widget) => void
    maximize_widget: (shell: Shell, widget_name: string | null) => void
    unmaximize: (shell: Shell) => void
    add_value: (shell: Shell, name: string | null, value: any) => void
    get_value: (shell: Shell, name: string | null, value: any) => void
    remove_value: (shell: Shell, name: string | null) => void
    saving_push: (shell: Shell) => void
    saving_pop: (shell: Shell) => void
    get_object: (shell: Shell, iface_name: string | null) => GObject.Object
}

abstract class ShellIface {

    // Own properties of Anjuta-3.0.Anjuta.ShellIface

    static name: string
}

interface StatusClass {

    // Own fields of Anjuta-3.0.Anjuta.StatusClass

    parent_class: Gtk.BoxClass
    busy: (status: Status, state: boolean) => void
}

abstract class StatusClass {

    // Own properties of Anjuta-3.0.Anjuta.StatusClass

    static name: string
}

interface StatusPriv {
}

class StatusPriv {

    // Own properties of Anjuta-3.0.Anjuta.StatusPriv

    static name: string
}

interface SyncCommandClass {

    // Own fields of Anjuta-3.0.Anjuta.SyncCommandClass

    parent_class: CommandClass
}

abstract class SyncCommandClass {

    // Own properties of Anjuta-3.0.Anjuta.SyncCommandClass

    static name: string
}

interface TabberClass {

    // Own fields of Anjuta-3.0.Anjuta.TabberClass

    parent_class: Gtk.ContainerClass
}

abstract class TabberClass {

    // Own properties of Anjuta-3.0.Anjuta.TabberClass

    static name: string
}

interface TabberPriv {
}

class TabberPriv {

    // Own properties of Anjuta-3.0.Anjuta.TabberPriv

    static name: string
}

interface Token {

    // Owm methods of Anjuta-3.0.Anjuta.Token

    check(): boolean
    clear_flags(flags: number): void
    compare(tokenb: Token): boolean
    dump(): void
    dump_link(): void
    evaluate(): string | null
    evaluate_name(): string | null
    get_flags(): number
    get_length(): number
    get_string(): string | null
    get_type(): number
    is_empty(): boolean
    remove_item(): void
    set_flags(flags: number): void
    set_length(length: number): void
    set_string(value: string | null, length: number): void
    set_type(type: number): void
}

class Token {

    // Own properties of Anjuta-3.0.Anjuta.Token

    static name: string
}

interface TokenFileClass {
}

abstract class TokenFileClass {

    // Own properties of Anjuta-3.0.Anjuta.TokenFileClass

    static name: string
}

interface TokenFileLocation {

    // Own fields of Anjuta-3.0.Anjuta.TokenFileLocation

    filename: string | null
    line: number
    column: number
}

class TokenFileLocation {

    // Own properties of Anjuta-3.0.Anjuta.TokenFileLocation

    static name: string
}

interface TokenStream {

    // Owm methods of Anjuta-3.0.Anjuta.TokenStream

    /**
     * Append an already existing token in the output stream.
     * @param token a #AnjutaToken object.
     */
    append_token(token: Token): void
    /**
     * Return the current directory.
     * @returns The current directory.
     */
    get_current_directory(): Gio.File
    /**
     * Return the current file.
     * @returns The current file.
     */
    get_current_file(): Gio.File
    /**
     * Return the parent stream
     * @returns The parent stream or %NULL if there is no parent.
     */
    get_parent(): TokenStream | null
    /**
     * Return the root token for the output stream.
     * @returns The output root token.
     */
    get_root(): Token
    /**
     * Destroy the stream object and return the parent stream if it exists.
     * @returns The parent stream or %NULL if there is no parent.
     */
    pop(): TokenStream | null
    /**
     * Read token from the input stream and write the content as a C string in the
     * buffer passed as argument.
     * @param buffer a character buffer to fill with token data.
     * @param max_size the size of the buffer.
     * @returns The number of characters written in the buffer.
     */
    read(buffer: string | null, max_size: number): number
}

class TokenStream {

    // Own properties of Anjuta-3.0.Anjuta.TokenStream

    static name: string
}

interface TokenStyle {

    // Owm methods of Anjuta-3.0.Anjuta.TokenStyle

    format(list: Token): void
    free(): void
    update(list: Token): void
}

class TokenStyle {

    // Own properties of Anjuta-3.0.Anjuta.TokenStyle

    static name: string
}

interface TreeComboBoxClass {

    // Own fields of Anjuta-3.0.Anjuta.TreeComboBoxClass

    changed: (combo: TreeComboBox) => void
}

abstract class TreeComboBoxClass {

    // Own properties of Anjuta-3.0.Anjuta.TreeComboBoxClass

    static name: string
}

interface TreeComboBoxPrivate {
}

class TreeComboBoxPrivate {

    // Own properties of Anjuta-3.0.Anjuta.TreeComboBoxPrivate

    static name: string
}

interface UIClass {

    // Own fields of Anjuta-3.0.Anjuta.UIClass

    parent: Gtk.UIManagerClass
}

abstract class UIClass {

    // Own properties of Anjuta-3.0.Anjuta.UIClass

    static name: string
}

interface UIPrivate {
}

class UIPrivate {

    // Own properties of Anjuta-3.0.Anjuta.UIPrivate

    static name: string
}

interface UtilStringMap {

    // Own fields of Anjuta-3.0.Anjuta.UtilStringMap

    type: number
    name: string | null
}

class UtilStringMap {

    // Own properties of Anjuta-3.0.Anjuta.UtilStringMap

    static name: string
}

interface VcsStatusTreeViewClass {

    // Own fields of Anjuta-3.0.Anjuta.VcsStatusTreeViewClass

    parent_class: Gtk.TreeViewClass
}

abstract class VcsStatusTreeViewClass {

    // Own properties of Anjuta-3.0.Anjuta.VcsStatusTreeViewClass

    static name: string
}

interface VcsStatusTreeViewPriv {
}

class VcsStatusTreeViewPriv {

    // Own properties of Anjuta-3.0.Anjuta.VcsStatusTreeViewPriv

    static name: string
}

    type GluePlugin = GObject.TypeModule
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

export default Anjuta;
// END