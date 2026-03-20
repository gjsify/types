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
import type GtkSource from '@girs/gtksource-3.0';
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

export namespace Gtef {
    /**
     * Gtef-2
     */

    /**
     * @gir-type Enum
     */
    export namespace CompressionType {
        export const $gtype: GObject.GType<CompressionType>;
    }

    /**
     * @gir-type Enum
     * @since 1.0
     */
    enum CompressionType {
        /**
         * plain text.
         */
        NONE,
        /**
         * gzip compression.
         */
        GZIP,
    }

    /**
     * An error code used with the `GTEF_FILE_LOADER_ERROR` domain.
     * @gir-type Struct
     */
    class FileLoaderError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * The file is too big.
         */
        static TOO_BIG: number;
        /**
         * It is not possible to
         *   detect the encoding automatically.
         */
        static ENCODING_AUTO_DETECTION_FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * An error code used with the `GTEF_FILE_SAVER_ERROR` domain.
     * @gir-type Struct
     */
    class FileSaverError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * The buffer contains invalid
         *   characters.
         */
        static INVALID_CHARS: number;
        /**
         * The file is externally
         *   modified.
         */
        static EXTERNALLY_MODIFIED: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace NewlineType {
        export const $gtype: GObject.GType<NewlineType>;
    }

    /**
     * @gir-type Enum
     * @since 1.0
     */
    enum NewlineType {
        /**
         * line feed, used on UNIX.
         */
        LF,
        /**
         * carriage return, used on Mac.
         */
        CR,
        /**
         * carriage return followed by a line feed, used
         *   on Windows.
         */
        CR_LF,
    }

    /**
     * @gir-type Enum
     */
    export namespace SelectionType {
        export const $gtype: GObject.GType<SelectionType>;
    }

    /**
     * @gir-type Enum
     * @since 1.0
     */
    enum SelectionType {
        /**
         * No selection.
         */
        NO_SELECTION,
        /**
         * The start and end selection bounds are on
         *   the same line.
         */
        ON_SAME_LINE,
        /**
         * The selection spans multiple lines.
         */
        MULTIPLE_LINES,
    }

    /**
     * A wrapper function for `g_action_map_add_action_entries()` that checks
     * duplicates.
     *
     * This function first checks - for each entry - that the `action_map` doesn't
     * already contain a {@link Gio.Action} with the same name. A warning is printed if an old
     * action will be dropped. In any case, it then calls
     * `g_action_map_add_action_entries()` with the same arguments as passed to this
     * function.
     *
     * This function also checks if there are duplicates in the `entries` array
     * itself.
     * @param action_map a {@link Gio.ActionMap}.
     * @param entries a pointer to           the first item in an array of {@link Gio.ActionEntry} structs.
     * @param user_data the user data for signal connections.
     * @since 2.0
     */
    function action_map_add_action_entries_check_dups(
        action_map: Gio.ActionMap,
        entries: Gio.ActionEntry[],
        user_data?: any | null,
    ): void;
    /**
     * Gets a list of all encodings known by {@link Gtef.Encoding}.
     * @returns a list of {@link Gtef.Encoding}'s.
     * @since 2.0
     */
    function encoding_get_all(): Encoding[];
    /**
     * Gets the list of default candidate encodings to try when loading a file. See
     * `gtk_source_file_loader_set_candidate_encodings()`.
     *
     * This function returns a different list depending on the current locale (i.e.
     * language, country and default encoding). The UTF-8 encoding and the current
     * locale encoding are guaranteed to be present in the returned list.
     * @returns the list of default candidate encodings.
     * @since 2.0
     */
    function encoding_get_default_candidates(): Encoding[];
    function file_loader_error_quark(): GLib.Quark;
    function file_saver_error_quark(): GLib.Quark;
    /**
     * Gets the indentation, as a string, of the line at `iter`. `iter` can be
     * anywhere in the line.
     *
     * Possible use-case: to implement an action that inserts some text in a
     * {@link Gtk.TextBuffer}. If the text to insert spans multiple lines, it is usually
     * desired to keep the same indentation level.
     * @param iter a {@link Gtk.TextIter}.
     * @returns the line indentation at `iter`. Free with `g_free()`.
     * @since 2.0
     */
    function iter_get_line_indentation(iter: Gtk.TextIter): string;
    /**
     * @param menu_item a {@link Gtk.MenuItem}.
     * @returns the long description of `menu_item`, previously set with   `gtef_menu_item_set_long_description()`.
     * @since 2.0
     */
    function menu_item_get_long_description(menu_item: Gtk.MenuItem): string | null;
    /**
     * Sets an icon to a {@link Gtk.MenuItem}.
     *
     * If the child widget of `item` is already a {@link Gtk.Box}, all {@link Gtk.Image} widgets
     * inside that box are first destroyed. A {@link Gtk.Image} for `icon_name` is then
     * inserted to the box.
     *
     * If the child widget of `item` is not a {@link Gtk.Box} (it's usually the
     * {@link Gtk.AccelLabel}), it is replaced by a new {@link Gtk.Box} and the initial child widget
     * is inserted to the {@link Gtk.Box}, alongside the icon.
     *
     * As a consequence, if you want to call functions on the {@link Gtk.AccelLabel}, it's
     * easier to do it before calling this function.
     * @param item a {@link Gtk.MenuItem}.
     * @param icon_name an icon name.
     * @since 2.0
     */
    function menu_item_set_icon_name(item: Gtk.MenuItem, icon_name: string): void;
    /**
     * Sets the long description of `menu_item`. A possible use-case is to display it
     * in a {@link Gtk.Statusbar}, or as a tooltip.
     * @param menu_item a {@link Gtk.MenuItem}.
     * @param long_description the long description, or `null` to unset it.
     * @since 2.0
     */
    function menu_item_set_long_description(menu_item: Gtk.MenuItem, long_description?: string | null): void;
    /**
     * This function initializes the metadata manager.
     *
     * The `metadata_path` must be different for each process. It is advised for your
     * application to rely on {@link Gio.Application} process uniqueness.
     *
     * A good place to store the metadata is in a sub-directory of the user data
     * directory. See `g_get_user_data_dir()`.
     * @param metadata_path the filename where the metadata is stored.
     * @since 1.0
     */
    function metadata_manager_init(metadata_path: string): void;
    /**
     * This function saves synchronously metadata if they need to be saved, and
     * frees the internal data of the metadata manager.
     * @since 1.0
     */
    function metadata_manager_shutdown(): void;
    /**
     * Gets the URI of `item`. `item` must be a child of `menu`. `menu` must be a
     * {@link Gtk.RecentChooserMenu}.
     *
     * This function has been written because the value returned by
     * `gtk_recent_chooser_get_current_uri()` is not updated when {@link Gtk.MenuItem}'s of a
     * {@link Gtk.RecentChooserMenu} are selected/deselected.
     * @param menu a {@link Gtk.RecentChooserMenu}.
     * @param item a {@link Gtk.MenuItem}.
     * @returns the URI of `item`. Free with `g_free()` when no longer needed.
     * @since 2.0
     */
    function utils_recent_chooser_menu_get_item_uri(menu: Gtk.RecentChooserMenu, item: Gtk.MenuItem): string;
    /**
     * @gir-type Flags
     */
    export namespace FileSaverFlags {
        export const $gtype: GObject.GType<FileSaverFlags>;
    }

    /**
     * Flags to define the behavior of a {@link Gtef.FileSaver}.
     * @gir-type Flags
     * @since 1.0
     */
    enum FileSaverFlags {
        /**
         * No flags.
         */
        NONE,
        /**
         * Ignore invalid characters.
         */
        IGNORE_INVALID_CHARS,
        /**
         * Save file despite external modifications.
         */
        IGNORE_MODIFICATION_TIME,
        /**
         * Create a backup before saving the file.
         */
        CREATE_BACKUP,
    }

    /**
     * @gir-type Flags
     */
    export namespace GutterRendererFoldsState {
        export const $gtype: GObject.GType<GutterRendererFoldsState>;
    }

    /**
     * The folding state at a certain line in the {@link Gtk.TextBuffer}.
     *
     * Since {@link Gtef.GutterRendererFolds} has a flat view of the folding tree, some
     * states can be combined; for example, {@link Gtef.GutterRendererFoldsState.END}
     * and {@link Gtef.GutterRendererFoldsState.CONTINUE}.
     * @gir-type Flags
     * @since 1.0
     */
    enum GutterRendererFoldsState {
        /**
         * No code folding here.
         */
        NONE,
        /**
         * Start of currently folded
         *   fold region.
         */
        START_FOLDED,
        /**
         * Start of currently opened
         *   fold region.
         */
        START_OPENED,
        /**
         * Fold region continues.
         */
        CONTINUE,
        /**
         * End of fold region.
         */
        END,
    }

    namespace ActionInfoCentralStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ActionInfoCentralStore extends GObject.Object {
        static $gtype: GObject.GType<ActionInfoCentralStore>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ActionInfoCentralStore.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ActionInfoCentralStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ActionInfoCentralStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ActionInfoCentralStore.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ActionInfoCentralStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ActionInfoCentralStore.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ActionInfoCentralStore.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ActionInfoCentralStore.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_instance(): ActionInfoCentralStore;

        // Methods

        /**
         * @param action_name an action name.
         * @returns the found {@link Gtef.ActionInfo}, or `null`.
         */
        lookup(action_name: string): ActionInfo;
    }

    namespace ActionInfoStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::application': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application: Gtk.Application;
        }
    }

    /**
     * @gir-type Class
     */
    class ActionInfoStore extends GObject.Object {
        static $gtype: GObject.GType<ActionInfoStore>;

        // Properties

        /**
         * The associated {@link Gtk.Application}. {@link Gtef.ActionInfoStore} has a weak
         * reference to the {@link Gtk.Application}.
         * @since 2.0
         * @construct-only
         */
        get application(): Gtk.Application;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ActionInfoStore.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ActionInfoStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](application?: Gtk.Application | null): ActionInfoStore;

        // Signals

        /** @signal */
        connect<K extends keyof ActionInfoStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ActionInfoStore.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ActionInfoStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ActionInfoStore.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ActionInfoStore.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ActionInfoStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Inserts `info` into `store` and into the {@link Gtef.ActionInfoCentralStore}. Both the
         * `store` and central store must <emphasis>not</emphasis> already contain a
         * {@link Gtef.ActionInfo} with the same action name. The stores take their own
         * reference on `info`.
         * @param info a {@link Gtef.ActionInfo}.
         */
        add(info: ActionInfo): void;
        /**
         * Calls `gtef_action_info_store_add()` for each entry.
         *
         * If `translation_domain` is not `null`, `g_dgettext()` is used to translate the
         * `label` and `tooltip` of each entry before setting them to the {@link Gtef.ActionInfo}.
         *
         * An API similar to `g_action_map_add_action_entries()`.
         * @param entries a pointer to the first item in an array of {@link Gtef.ActionInfoEntry} structs.
         * @param translation_domain a gettext domain, or `null`.
         */
        add_entries(entries: ActionInfoEntry[], translation_domain?: string | null): void;
        /**
         * Checks that all {@link Gtef.ActionInfo}'s of `store` have been used by
         * `gtef_action_info_store_create_menu_item()`. If not, a warning is printed and
         * might indicate dead code.
         *
         * You probably want to call this function on the store returned by
         * `gtef_application_get_app_action_info_store()`. But it can also be useful for a
         * store provided by a library, to easily see which actions you don't use.
         */
        check_all_used(): void;
        /**
         * Creates a new {@link Gtk.MenuItem} for `action_name`. The `store` must contain a
         * {@link Gtef.ActionInfo} for `action_name`.
         *
         * `gtk_actionable_set_action_name()` is called on the menu item with
         * `action_name`. The label is set with the {@link Gtk.MenuItem.use_underline} property
         * enabled. The first accelerator is set to the {@link Gtk.AccelLabel} of the menu item.
         * The icon is set. And the tooltip is set with
         * `gtef_menu_item_set_long_description()`.
         *
         * If {@link Gtef.ActionInfoStore.application} is non-`null`, this function also calls
         * `gtk_application_set_accels_for_action()` with the accelerators returned by
         * `gtef_action_info_get_accels()` (this will erase previously set accelerators
         * for that action, if any).
         * @param action_name an action name.
         * @returns a new {@link Gtk.MenuItem} for `action_name`.
         */
        create_menu_item(action_name: string): Gtk.Widget;
        /**
         * @returns the associated {@link Gtk.Application}, or `null`.
         */
        get_application(): Gtk.Application | null;
        /**
         * @param action_name an action name.
         * @returns the found {@link Gtef.ActionInfo}, or `null`.
         */
        lookup(action_name: string): ActionInfo;
    }

    namespace Application {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::application': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application: Gtk.Application;
        }
    }

    /**
     * @gir-type Class
     */
    class Application extends GObject.Object {
        static $gtype: GObject.GType<Application>;

        // Properties

        /**
         * The {@link Gtk.Application}.
         * @since 2.0
         * @construct-only
         */
        get application(): Gtk.Application;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Application.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Application.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Application.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Convenience function that calls `g_application_get_default()` followed by
         * `gtef_application_get_from_gtk_application()`. The object returned by
         * `g_application_get_default()` must be a {@link Gtk.Application}.
         */
        static get_default(): Application;
        /**
         * Returns the {@link Gtef.Application} of `gtk_app`. The returned object is guaranteed
         * to be the same for the lifetime of `gtk_app`.
         * @param gtk_app a {@link Gtk.Application}.
         */
        static get_from_gtk_application(gtk_app: Gtk.Application): Application;

        // Methods

        /**
         * Returns an initially empty {@link Gtef.ActionInfoStore} reserved for the
         * application-specific actions. Libraries should not add {@link Gtef.ActionInfo}'s to
         * this store. Libraries should provide their own store if they want to share
         * {@link Gtef.ActionInfo}'s.
         * @returns the {@link Gtef.ActionInfoStore} reserved for the application.
         */
        get_app_action_info_store(): ActionInfoStore;
        /**
         * @returns the {@link Gtk.Application} of `gtef_app`.
         */
        get_application(): Gtk.Application;
        /**
         * Calls `g_application_open()` with a single file and an empty hint.
         * @param file a {@link Gio.File}.
         */
        open_simple(file: Gio.File): void;
    }

    namespace ApplicationWindow {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::application-window': (pspec: GObject.ParamSpec) => void;
            'notify::statusbar': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application_window: Gtk.ApplicationWindow;
            applicationWindow: Gtk.ApplicationWindow;
            statusbar: Gtk.Statusbar;
        }
    }

    /**
     * @gir-type Class
     */
    class ApplicationWindow extends GObject.Object {
        static $gtype: GObject.GType<ApplicationWindow>;

        // Properties

        /**
         * The {@link Gtk.ApplicationWindow}.
         * @since 2.0
         * @construct-only
         */
        get application_window(): Gtk.ApplicationWindow;
        /**
         * The {@link Gtk.ApplicationWindow}.
         * @since 2.0
         * @construct-only
         */
        get applicationWindow(): Gtk.ApplicationWindow;
        /**
         * The {@link Gtk.Statusbar}. `null` by default.
         * @since 2.0
         */
        get statusbar(): Gtk.Statusbar;
        set statusbar(val: Gtk.Statusbar);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ApplicationWindow.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ApplicationWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ApplicationWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ApplicationWindow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ApplicationWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ApplicationWindow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ApplicationWindow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ApplicationWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the {@link Gtef.ApplicationWindow} of `gtk_window`. The returned object is
         * guaranteed to be the same for the lifetime of `gtk_window`.
         * @param gtk_window a {@link Gtk.ApplicationWindow}.
         */
        static get_from_gtk_application_window(gtk_window: Gtk.ApplicationWindow): ApplicationWindow;

        // Methods

        /**
         * Connect to the {@link Gtef.MenuShell.SignalSignatures.menu_item_selected | Gtef.MenuShell::menu-item-selected} and
         * {@link Gtef.MenuShell.SignalSignatures.menu_item_deselected | Gtef.MenuShell::menu-item-deselected} signals of `gtef_menu_shell` to push/pop
         * the long description of {@link Gtk.MenuItem}'s to the
         * {@link Gtef.ApplicationWindow.statusbar}.
         *
         * The long description is retrieved with `gtef_menu_item_get_long_description()`.
         * So `gtef_menu_item_set_long_description()` must have been called, which is the
         * case if the {@link Gtk.MenuItem} has been created with the functions available in
         * {@link Gtef.ActionInfoStore}.
         * @param gtef_menu_shell a {@link Gtef.MenuShell}.
         */
        connect_menu_to_statusbar(gtef_menu_shell: MenuShell): void;
        /**
         * An alternative to `gtk_recent_chooser_set_show_tips()`. Shows the full path in
         * the {@link Gtef.ApplicationWindow.statusbar} when a {@link Gtk.MenuItem} of `menu` is
         * selected.
         *
         * The full path is retrieved with
         * `gtef_utils_recent_chooser_menu_get_item_uri()`.
         * @param menu a {@link Gtk.RecentChooserMenu}.
         */
        connect_recent_chooser_menu_to_statusbar(menu: Gtk.RecentChooserMenu): void;
        /**
         * Creates a {@link Gtk.MenuItem} with a simple and generic {@link Gtk.RecentChooserMenu} as
         * submenu.
         *
         * The {@link Gtk.RecentChooser} is configured to show files only recently used with the
         * current application, as returned by `g_get_application_name()`. If recent files
         * are added to the default {@link Gtk.RecentManager} with
         * `gtk_recent_manager_add_item()`, the files will normally show up in the
         * {@link Gtk.RecentChooserMenu}.
         *
         * The {@link Gtk.RecentChooserMenu} is connected to the statusbar with
         * `gtef_application_window_connect_recent_chooser_menu_to_statusbar()`.
         *
         * When the {@link Gtk.RecentChooser.SignalSignatures.item_activated | Gtk.RecentChooser::item-activated} signal is emitted,
         * `gtef_application_open_simple()` is called, so the {@link Gio.Application} must have the
         * {@link Gio.ApplicationFlags.HANDLES_OPEN} flag set.
         * @returns a new {@link Gtk.MenuItem}.
         */
        create_open_recent_menu_item(): Gtk.Widget;
        /**
         * @returns the {@link Gtk.ApplicationWindow} of `gtef_window`.
         */
        get_application_window(): Gtk.ApplicationWindow;
        /**
         * @returns the {@link Gtef.ApplicationWindow.statusbar}.
         */
        get_statusbar(): Gtk.Statusbar | null;
        /**
         * Sets the {@link Gtef.ApplicationWindow.statusbar} property.
         * @param statusbar a {@link Gtk.Statusbar}, or `null`.
         */
        set_statusbar(statusbar?: Gtk.Statusbar | null): void;
    }

    namespace Buffer {
        // Signal signatures
        interface SignalSignatures extends GtkSource.Buffer.SignalSignatures {
            /**
             * The ::gtef-cursor-moved signal is emitted when the insert mark is
             * moved explicitely or when the buffer changes (insert/delete).
             *
             * A typical use-case for this signal is to update the cursor position
             * in a statusbar.
             * @signal
             * @since 2.0
             * @run-first
             */
            'gtef-cursor-moved': () => void;
            'notify::gtef-style-scheme-id': (pspec: GObject.ParamSpec) => void;
            'notify::gtef-title': (pspec: GObject.ParamSpec) => void;
            'notify::can-redo': (pspec: GObject.ParamSpec) => void;
            'notify::can-undo': (pspec: GObject.ParamSpec) => void;
            'notify::highlight-matching-brackets': (pspec: GObject.ParamSpec) => void;
            'notify::highlight-syntax': (pspec: GObject.ParamSpec) => void;
            'notify::implicit-trailing-newline': (pspec: GObject.ParamSpec) => void;
            'notify::language': (pspec: GObject.ParamSpec) => void;
            'notify::max-undo-levels': (pspec: GObject.ParamSpec) => void;
            'notify::style-scheme': (pspec: GObject.ParamSpec) => void;
            'notify::undo-manager': (pspec: GObject.ParamSpec) => void;
            'notify::copy-target-list': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-position': (pspec: GObject.ParamSpec) => void;
            'notify::has-selection': (pspec: GObject.ParamSpec) => void;
            'notify::paste-target-list': (pspec: GObject.ParamSpec) => void;
            'notify::tag-table': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GtkSource.Buffer.ConstructorProps {
            gtef_style_scheme_id: string;
            gtefStyleSchemeId: string;
            gtef_title: string;
            gtefTitle: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Buffer extends GtkSource.Buffer {
        static $gtype: GObject.GType<Buffer>;

        // Properties

        /**
         * The {@link GtkSource.Buffer.style_scheme} ID, as a string. This property is
         * useful for binding it to a {@link Gio.Settings} key.
         *
         * When the {@link GtkSource.Buffer.style_scheme} is `null`,
         * {@link Gtef.Buffer.gtef_style_scheme_id} contains the empty string.
         * @since 2.0
         */
        get gtef_style_scheme_id(): string;
        set gtef_style_scheme_id(val: string);
        /**
         * The {@link GtkSource.Buffer.style_scheme} ID, as a string. This property is
         * useful for binding it to a {@link Gio.Settings} key.
         *
         * When the {@link GtkSource.Buffer.style_scheme} is `null`,
         * {@link Gtef.Buffer.gtef_style_scheme_id} contains the empty string.
         * @since 2.0
         */
        get gtefStyleSchemeId(): string;
        set gtefStyleSchemeId(val: string);
        /**
         * The buffer title. See `gtef_buffer_get_title()`.
         * @since 2.0
         * @read-only
         */
        get gtef_title(): string;
        /**
         * The buffer title. See `gtef_buffer_get_title()`.
         * @since 2.0
         * @read-only
         */
        get gtefTitle(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Buffer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Buffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Buffer;

        // Signals

        /** @signal */
        connect<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Buffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_gtef_cursor_moved(): void;

        // Methods

        /**
         * Returns the {@link Gtef.File} of `buffer`. The returned object is guaranteed to be the
         * same for the lifetime of `buffer`.
         * @returns the associated {@link Gtef.File}.
         */
        get_file(): File;
        /**
         * @returns the current {@link Gtef.SelectionType}.
         */
        get_selection_type(): SelectionType;
        /**
         * @returns the {@link Gtef.Buffer.gtef_style_scheme_id}. Free with `g_free()`.
         */
        get_style_scheme_id(): string;
        /**
         * Returns a title suitable for a {@link Gtk.Window} title. It contains (in that order):
         * - '*' if the buffer is modified;
         * - the {@link Gtef.File.short_name};
         * - the directory path in parenthesis if the {@link Gtef.File.location} isn't
         *   `null`.
         * @returns the `buffer` title. Free the return value with `g_free()` when no longer needed.
         */
        get_title(): string;
        /**
         * Returns whether `buffer` is untouched.
         *
         * This function is for example useful to know if we can re-use this buffer to
         * load a file, instead of opening a new tab or window.
         *
         * For this function to return `true`, the `buffer` must be empty, non-modified,
         * the undo/redo {@link GtkSource.Buffer} history must be empty, and the
         * {@link Gtef.File.location} must be `null`.
         * @returns `true` if `buffer` has not been touched, `false` otherwise.
         */
        is_untouched(): boolean;
        /**
         * Sets the {@link Gtef.Buffer.gtef_style_scheme_id} property.
         *
         * The {@link GtkSource.StyleScheme} is taken from the default
         * {@link GtkSource.StyleSchemeManager} as returned by
         * `gtk_source_style_scheme_manager_get_default()`.
         * @param style_scheme_id the new value.
         */
        set_style_scheme_id(style_scheme_id: string): void;
    }

    namespace File {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::compression-type': (pspec: GObject.ParamSpec) => void;
            'notify::encoding': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::newline-type': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::short-name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            compression_type: CompressionType;
            compressionType: CompressionType;
            encoding: Encoding;
            location: Gio.File;
            newline_type: NewlineType;
            newlineType: NewlineType;
            read_only: boolean;
            readOnly: boolean;
            short_name: string;
            shortName: string;
        }
    }

    /**
     * @gir-type Class
     */
    class File extends GObject.Object {
        static $gtype: GObject.GType<File>;

        // Properties

        /**
         * The compression type.
         * @since 1.0
         * @read-only
         */
        get compression_type(): CompressionType;
        /**
         * The compression type.
         * @since 1.0
         * @read-only
         */
        get compressionType(): CompressionType;
        /**
         * The character encoding, initially `null`. After a successful file
         * loading or saving operation, the encoding is non-`null`.
         * @since 1.0
         * @read-only
         */
        get encoding(): Encoding;
        /**
         * The location.
         * @since 1.0
         */
        get location(): Gio.File;
        set location(val: Gio.File);
        /**
         * The line ending type.
         * @since 1.0
         * @read-only
         */
        get newline_type(): NewlineType;
        /**
         * The line ending type.
         * @since 1.0
         * @read-only
         */
        get newlineType(): NewlineType;
        /**
         * Whether the file is read-only or not. The value of this property is
         * not updated automatically (there is no file monitors).
         * @since 1.0
         * @read-only
         */
        get read_only(): boolean;
        /**
         * Whether the file is read-only or not. The value of this property is
         * not updated automatically (there is no file monitors).
         * @since 1.0
         * @read-only
         */
        get readOnly(): boolean;
        /**
         * The file short name. See `gtef_file_get_short_name()`.
         * @since 1.0
         * @read-only
         */
        get short_name(): string;
        /**
         * The file short name. See `gtef_file_get_short_name()`.
         * @since 1.0
         * @read-only
         */
        get shortName(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: File.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<File.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): File;

        // Signals

        /** @signal */
        connect<K extends keyof File.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, File.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof File.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, File.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof File.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<File.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Checks synchronously the file on disk, to know whether the file is externally
         * modified, or has been deleted, and whether the file is read-only.
         *
         * {@link Gtef.File} doesn't create a {@link Gio.FileMonitor} to track those properties, so
         * this function needs to be called instead. Creating lots of {@link Gio.FileMonitor}'s
         * would take lots of resources.
         *
         * Since this function is synchronous, it is advised to call it only on local
         * files. See `gtef_file_is_local()`.
         */
        check_file_on_disk(): void;
        /**
         * @returns the compression type.
         */
        get_compression_type(): CompressionType;
        /**
         * The encoding is initially `null`. After a successful file loading or saving
         * operation, the encoding is non-`null`.
         * @returns the character encoding.
         */
        get_encoding(): Encoding;
        /**
         * @returns the associated {@link Gtef.FileMetadata}.
         */
        get_file_metadata(): FileMetadata;
        /**
         * @returns the {@link Gio.File}.
         */
        get_location(): Gio.File;
        /**
         * @returns the newline type.
         */
        get_newline_type(): NewlineType;
        /**
         * Gets the `file` short name. If the {@link Gtef.File.location} isn't `null`,
         * returns its display-name (see #G_FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME).
         * Otherwise returns "Untitled File N", with N the Nth untitled file of the
         * application, starting at 1. When an untitled file is closed, its number is
         * released and can be used by a later untitled file.
         * @returns the `file` short name.
         */
        get_short_name(): string;
        /**
         * Returns whether the file has been deleted. If the
         * {@link Gtef.File.location} is `null`, returns `false`.
         *
         * To have an up-to-date value, you must first call
         * `gtef_file_check_file_on_disk()`.
         * @returns whether the file has been deleted.
         */
        is_deleted(): boolean;
        /**
         * Returns whether the file is externally modified. If the
         * {@link Gtef.File.location} is `null`, returns `false`.
         *
         * To have an up-to-date value, you must first call
         * `gtef_file_check_file_on_disk()`.
         * @returns whether the file is externally modified.
         */
        is_externally_modified(): boolean;
        /**
         * Returns whether the file is local. If the {@link Gtef.File.location} is `null`,
         * returns `false`.
         * @returns whether the file is local.
         */
        is_local(): boolean;
        /**
         * Returns whether the file is read-only. If the
         * {@link Gtef.File.location} is `null`, returns `false`.
         *
         * To have an up-to-date value, you must first call
         * `gtef_file_check_file_on_disk()`.
         * @returns whether the file is read-only.
         */
        is_readonly(): boolean;
        /**
         * Sets the location.
         * @param location the new {@link Gio.File}, or `null`.
         */
        set_location(location?: Gio.File | null): void;
    }

    namespace FileLoader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::chunk-size': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::max-size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            chunk_size: number;
            chunkSize: number;
            file: File;
            location: Gio.File;
            max_size: number;
            maxSize: number;
        }
    }

    /**
     * @gir-type Class
     */
    class FileLoader extends GObject.Object {
        static $gtype: GObject.GType<FileLoader>;

        // Properties

        /**
         * The {@link Gtef.Buffer} to load the content into. The {@link Gtef.FileLoader} object
         * has a weak reference to the buffer.
         * @since 1.0
         * @construct-only
         */
        get buffer(): Buffer;
        /**
         * The chunk size, in bytes. The content is loaded chunk by chunk. It
         * permits to avoid allocating a too big contiguous memory area, as well
         * as reporting progress information after each chunk read.
         *
         * A small chunk size is better when loading a remote file with a slow
         * connection. For local files, the chunk size can be larger.
         * @since 1.0
         */
        get chunk_size(): number;
        set chunk_size(val: number);
        /**
         * The chunk size, in bytes. The content is loaded chunk by chunk. It
         * permits to avoid allocating a too big contiguous memory area, as well
         * as reporting progress information after each chunk read.
         *
         * A small chunk size is better when loading a remote file with a slow
         * connection. For local files, the chunk size can be larger.
         * @since 1.0
         */
        get chunkSize(): number;
        set chunkSize(val: number);
        /**
         * The {@link Gtef.File}. The {@link Gtef.FileLoader} object has a weak
         * reference to the file.
         * @since 1.0
         * @construct-only
         */
        get file(): File;
        /**
         * The {@link Gio.File} to load. By default the location is taken from the
         * {@link Gtef.File} at construction time.
         * @since 1.0
         * @construct-only
         */
        get location(): Gio.File;
        /**
         * The maximum content size, in bytes. Keep in mind that all the
         * content is loaded in memory, and when loaded into a {@link Gtk.TextBuffer}
         * it takes more memory than just the content size.
         *
         * Set to -1 for unlimited size.
         * @since 1.0
         */
        get max_size(): number;
        set max_size(val: number);
        /**
         * The maximum content size, in bytes. Keep in mind that all the
         * content is loaded in memory, and when loaded into a {@link Gtk.TextBuffer}
         * it takes more memory than just the content size.
         *
         * Set to -1 for unlimited size.
         * @since 1.0
         */
        get maxSize(): number;
        set maxSize(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileLoader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Buffer, file: File): FileLoader;

        // Signals

        /** @signal */
        connect<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the {@link Gtef.Buffer} to load the content into.
         */
        get_buffer(): Buffer | null;
        /**
         * @returns the chunk size.
         */
        get_chunk_size(): number;
        /**
         * @returns the detected file encoding, or `null`.
         */
        get_encoding(): Encoding | null;
        /**
         * @returns the {@link Gtef.File}.
         */
        get_file(): File | null;
        /**
         * @returns the {@link Gio.File} to load.
         */
        get_location(): Gio.File | null;
        /**
         * @returns the maximum content size, or -1 for unlimited.
         */
        get_max_size(): number;
        /**
         * @returns the detected newline type.
         */
        get_newline_type(): NewlineType;
        /**
         * Loads asynchronously the file content into the {@link Gtef.Buffer}.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param progress_callback function to call back with   progress information, or `null` if progress information is not needed.
         * @param progress_callback_notify function to call on   `progress_callback_data` when the `progress_callback` is no longer needed, or   `null`.
         */
        load_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
        ): globalThis.Promise<boolean>;
        /**
         * Loads asynchronously the file content into the {@link Gtef.Buffer}.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param progress_callback function to call back with   progress information, or `null` if progress information is not needed.
         * @param progress_callback_notify function to call on   `progress_callback_data` when the `progress_callback` is no longer needed, or   `null`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        load_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            progress_callback: Gio.FileProgressCallback | null,
            progress_callback_notify: GLib.DestroyNotify | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Loads asynchronously the file content into the {@link Gtef.Buffer}.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param progress_callback function to call back with   progress information, or `null` if progress information is not needed.
         * @param progress_callback_notify function to call on   `progress_callback_data` when the `progress_callback` is no longer needed, or   `null`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        load_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes a file loading started with `gtef_file_loader_load_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns whether the content has been loaded successfully.
         */
        load_finish(result: Gio.AsyncResult): boolean;
        /**
         * @param chunk_size the new chunk size.
         */
        set_chunk_size(chunk_size: number): void;
        /**
         * @param max_size the new maximum size, or -1 for unlimited.
         */
        set_max_size(max_size: number): void;
    }

    namespace FileMetadata {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::file': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            file: File;
        }
    }

    /**
     * @gir-type Class
     */
    class FileMetadata extends GObject.Object {
        static $gtype: GObject.GType<FileMetadata>;

        // Properties

        /**
         * The {@link Gtef.File} that the metadata belong to.
         * @since 1.0
         * @construct-only
         */
        get file(): File;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileMetadata.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileMetadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file: File): FileMetadata;

        // Signals

        /** @signal */
        connect<K extends keyof FileMetadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileMetadata.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileMetadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileMetadata.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileMetadata.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileMetadata.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the value of a metadata stored in the `metadata` object memory.
         * @param key the name of the metadata.
         * @returns the value of the metadata, or `null` if the metadata   doesn't exist. Free with `g_free()`.
         */
        get(key: string): string | null;
        /**
         * @returns the {@link Gtef.File} that the metadata belong to.
         */
        get_file(): File;
        /**
         * Loads synchronously the metadata from {@link Gtef.File.location}. The loaded
         * metadata values can then be accessed with `gtef_file_metadata_get()`.
         *
         * If the metadata are loaded successfully, this function deletes all previous
         * metadata stored in the `metadata` object memory.
         *
         * The file at {@link Gtef.File.location}, if non-`null`, must exist on the
         * filesystem, otherwise an error is returned.
         *
         * If {@link Gtef.File.location} is `null`, `false` is simply returned.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns whether the metadata was loaded successfully.
         */
        load(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * The asynchronous version of `gtef_file_metadata_load()`.
         *
         * If the metadata is loaded from the metadata manager (i.e. not with GVfs),
         * this function loads the metadata synchronously. A future version might fix
         * this.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        load_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * The asynchronous version of `gtef_file_metadata_load()`.
         *
         * If the metadata is loaded from the metadata manager (i.e. not with GVfs),
         * this function loads the metadata synchronously. A future version might fix
         * this.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        load_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * The asynchronous version of `gtef_file_metadata_load()`.
         *
         * If the metadata is loaded from the metadata manager (i.e. not with GVfs),
         * this function loads the metadata synchronously. A future version might fix
         * this.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        load_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the metadata loading started with `gtef_file_metadata_load_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns whether the metadata was loaded successfully.
         */
        load_finish(result: Gio.AsyncResult): boolean;
        /**
         * Saves synchronously the metadata for {@link Gtef.File.location}.
         *
         * The file at {@link Gtef.File.location}, if non-`null`, must exist on the
         * filesystem, otherwise an error is returned.
         *
         * If {@link Gtef.File.location} is `null`, `false` is simply returned.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns whether the metadata was saved successfully.
         */
        save(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * The asynchronous version of `gtef_file_metadata_save()`.
         *
         * If the metadata is saved with the metadata manager (i.e. not with GVfs), this
         * function saves the metadata synchronously. A future version might fix this.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        save_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * The asynchronous version of `gtef_file_metadata_save()`.
         *
         * If the metadata is saved with the metadata manager (i.e. not with GVfs), this
         * function saves the metadata synchronously. A future version might fix this.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        save_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * The asynchronous version of `gtef_file_metadata_save()`.
         *
         * If the metadata is saved with the metadata manager (i.e. not with GVfs), this
         * function saves the metadata synchronously. A future version might fix this.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        save_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the metadata saving started with `gtef_file_metadata_save_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns whether the metadata was saved successfully.
         */
        save_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the value of a metadata. It's preferable that `key` starts with a
         * namespace, to not get metadata conflicts between applications.
         *
         * This function just stores the new metadata value in the `metadata` object
         * memory.
         * @param key the name of the metadata.
         * @param value the value of the metadata, or `null` to unset.
         */
        set(key: string, value?: string | null): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
    }

    namespace FileSaver {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::compression-type': (pspec: GObject.ParamSpec) => void;
            'notify::encoding': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::newline-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: GtkSource.Buffer;
            compression_type: GtkSource.CompressionType;
            compressionType: GtkSource.CompressionType;
            encoding: Encoding;
            file: File;
            flags: FileSaverFlags;
            location: Gio.File;
            newline_type: GtkSource.NewlineType;
            newlineType: GtkSource.NewlineType;
        }
    }

    /**
     * @gir-type Class
     */
    class FileSaver extends GObject.Object {
        static $gtype: GObject.GType<FileSaver>;

        // Properties

        /**
         * The {@link Gtef.Buffer} to save. The {@link Gtef.FileSaver} object has a weak
         * reference to the buffer.
         * @since 1.0
         * @construct-only
         */
        get buffer(): GtkSource.Buffer;
        /**
         * The compression type.
         * @since 1.0
         */
        get compression_type(): GtkSource.CompressionType;
        set compression_type(val: GtkSource.CompressionType);
        /**
         * The compression type.
         * @since 1.0
         */
        get compressionType(): GtkSource.CompressionType;
        set compressionType(val: GtkSource.CompressionType);
        /**
         * The file's encoding.
         * @since 1.0
         */
        get encoding(): Encoding;
        set encoding(val: Encoding);
        /**
         * The {@link Gtef.File}. The {@link Gtef.FileSaver} object has a weak
         * reference to the file.
         * @since 1.0
         * @construct-only
         */
        get file(): File;
        /**
         * File saving flags.
         * @since 1.0
         */
        get flags(): FileSaverFlags;
        set flags(val: FileSaverFlags);
        /**
         * The {@link Gio.File} where to save the buffer. By default the location is taken
         * from the {@link Gtef.File} at construction time.
         * @since 1.0
         * @construct-only
         */
        get location(): Gio.File;
        /**
         * The newline type.
         * @since 1.0
         */
        get newline_type(): GtkSource.NewlineType;
        set newline_type(val: GtkSource.NewlineType);
        /**
         * The newline type.
         * @since 1.0
         */
        get newlineType(): GtkSource.NewlineType;
        set newlineType(val: GtkSource.NewlineType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileSaver.SignalSignatures;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<FileSaver.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Buffer, file: File): FileSaver;

        static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver;

        // Signals

        /** @signal */
        connect<K extends keyof FileSaver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSaver.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileSaver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSaver.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileSaver.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileSaver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the {@link Gtef.Buffer} to save.
         */
        get_buffer(): Buffer;
        /**
         * @returns the compression type.
         */
        get_compression_type(): CompressionType;
        /**
         * @returns the encoding.
         */
        get_encoding(): Encoding;
        /**
         * @returns the {@link Gtef.File}.
         */
        get_file(): File;
        /**
         * @returns the flags.
         */
        get_flags(): FileSaverFlags;
        /**
         * @returns the {@link Gio.File} where to save the buffer to.
         */
        get_location(): Gio.File;
        /**
         * @returns the newline type.
         */
        get_newline_type(): NewlineType;
        /**
         * Saves asynchronously the buffer into the file. See the {@link Gio.AsyncResult}
         * documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param progress_callback function to call back with   progress information, or `null` if progress information is not needed.
         * @param progress_callback_notify function to call on   `progress_callback_data` when the `progress_callback` is no longer needed, or   `null`.
         */
        save_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
        ): globalThis.Promise<boolean>;
        /**
         * Saves asynchronously the buffer into the file. See the {@link Gio.AsyncResult}
         * documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param progress_callback function to call back with   progress information, or `null` if progress information is not needed.
         * @param progress_callback_notify function to call on   `progress_callback_data` when the `progress_callback` is no longer needed, or   `null`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        save_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            progress_callback: Gio.FileProgressCallback | null,
            progress_callback_notify: GLib.DestroyNotify | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Saves asynchronously the buffer into the file. See the {@link Gio.AsyncResult}
         * documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param progress_callback function to call back with   progress information, or `null` if progress information is not needed.
         * @param progress_callback_notify function to call on   `progress_callback_data` when the `progress_callback` is no longer needed, or   `null`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        save_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes a file saving started with `gtef_file_saver_save_async()`.
         *
         * If the file has been saved successfully, the following {@link Gtef.File}
         * properties will be updated: the location, the encoding, the newline type and
         * the compression type.
         *
         * `gtk_text_buffer_set_modified()` is called with `false` if the file has been
         * saved successfully.
         * @param result a {@link Gio.AsyncResult}.
         * @returns whether the file was saved successfully.
         */
        save_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the compression type. By default the compression type is taken from the
         * {@link Gtef.File}.
         * @param compression_type the new compression type.
         */
        set_compression_type(compression_type: CompressionType | null): void;
        /**
         * Sets the encoding. If `encoding` is `null`, the UTF-8 encoding will be set.
         * By default the encoding is taken from the {@link Gtef.File}.
         * @param encoding the new encoding, or `null` for UTF-8.
         */
        set_encoding(encoding?: Encoding | null): void;
        /**
         * @param flags the new flags.
         */
        set_flags(flags: FileSaverFlags | null): void;
        /**
         * Sets the newline type. By default the newline type is taken from the
         * {@link Gtef.File}.
         * @param newline_type the new newline type.
         */
        set_newline_type(newline_type: NewlineType | null): void;
    }

    namespace FoldRegion {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::folded': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Gtk.TextBuffer;
            folded: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class FoldRegion extends GObject.Object {
        static $gtype: GObject.GType<FoldRegion>;

        // Properties

        /**
         * The {@link Gtk.TextBuffer} where the fold region is applied. The
         * {@link Gtef.FoldRegion} object has a weak reference to the buffer.
         * @since 1.0
         * @construct-only
         */
        get buffer(): Gtk.TextBuffer;
        /**
         * Whether the {@link Gtef.FoldRegion} is folded or not.
         * @since 1.0
         */
        get folded(): boolean;
        set folded(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FoldRegion.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FoldRegion.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter): FoldRegion;

        // Signals

        /** @signal */
        connect<K extends keyof FoldRegion.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FoldRegion.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FoldRegion.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FoldRegion.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FoldRegion.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FoldRegion.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Obtains iterators pointing to the start and end of the {@link Gtef.FoldRegion}.
         * @returns `true` on success, `false` otherwise.
         */
        get_bounds(): [boolean, Gtk.TextIter, Gtk.TextIter];
        /**
         * @returns the {@link Gtk.TextBuffer} where the fold region   is applied.
         */
        get_buffer(): Gtk.TextBuffer | null;
        /**
         * @returns whether the {@link Gtef.FoldRegion} is folded.
         */
        get_folded(): boolean;
        /**
         * Sets the start and end of the {@link Gtef.FoldRegion}.
         * @param start a {@link Gtk.TextIter}.
         * @param end a {@link Gtk.TextIter}.
         */
        set_bounds(start: Gtk.TextIter, end: Gtk.TextIter): void;
        /**
         * Folds or unfolds the region.
         * @param folded the new value.
         */
        set_folded(folded: boolean): void;
    }

    namespace GutterRendererFolds {
        // Signal signatures
        interface SignalSignatures extends GtkSource.GutterRenderer.SignalSignatures {
            'notify::alignment-mode': (pspec: GObject.ParamSpec) => void;
            'notify::background-rgba': (pspec: GObject.ParamSpec) => void;
            'notify::background-set': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::view': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::window-type': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::xpad': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
            'notify::ypad': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GtkSource.GutterRenderer.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GutterRendererFolds extends GtkSource.GutterRenderer {
        static $gtype: GObject.GType<GutterRendererFolds>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GutterRendererFolds.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GutterRendererFolds.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GutterRendererFolds;

        // Signals

        /** @signal */
        connect<K extends keyof GutterRendererFolds.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRendererFolds.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GutterRendererFolds.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRendererFolds.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GutterRendererFolds.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GutterRendererFolds.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Sets the folding state of the next cell to be drawn.
         *
         * This function is intended to be called from a subclass' draw method before
         * chaining-up to its parent's draw method.
         * @param state a {@link Gtef.GutterRendererFoldsState}.
         */
        set_state(state: GutterRendererFoldsState | null): void;
    }

    namespace InfoBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.InfoBar.SignalSignatures {
            'notify::message-type': (pspec: GObject.ParamSpec) => void;
            'notify::revealed': (pspec: GObject.ParamSpec) => void;
            'notify::show-close-button': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.InfoBar.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class InfoBar extends Gtk.InfoBar implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<InfoBar>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InfoBar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InfoBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): InfoBar;

        static new_simple(msg_type: Gtk.MessageType, primary_msg: string, secondary_msg?: string | null): InfoBar;

        // Signals

        /** @signal */
        connect<K extends keyof InfoBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfoBar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof InfoBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfoBar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof InfoBar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InfoBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Utility function to create a {@link Gtk.Label} suitable for a {@link Gtk.InfoBar}. The
         * wrapping and alignment is configured. The label is also set as selectable,
         * for example to copy an error message and search an explanation on the web.
         */
        static create_label(): Gtk.Label;

        // Methods

        /**
         * Calls `gtk_info_bar_set_show_close_button()`, and additionnally closes the
         * `info_bar` when the {@link Gtk.InfoBar.SignalSignatures.response | Gtk.InfoBar::response} signal is received with the
         * `response_id` {@link Gtk.ResponseType.CLOSE}.
         */
        add_close_button(): void;
        /**
         * Adds `content` to `info_bar`.
         *
         * {@link Gtef.InfoBar} has an internal container, to be able to add the icon and add
         * primary or secondary messages. The internal container is added to the content
         * area, as returned by `gtk_info_bar_get_content_area()`. So if you use a
         * {@link Gtef.InfoBar} and you need to add a custom {@link Gtk.Widget}, it is better to use
         * this function instead of adding the {@link Gtk.Widget} directly to the content area.
         * @param content a {@link Gtk.Widget}.
         */
        add_content_widget(content: Gtk.Widget): void;
        /**
         * Adds an icon on the left, determined by the message type. So before calling
         * this function, `gtk_info_bar_set_message_type()` must have been called.
         *
         * The icon is not updated when the message type changes. Another {@link Gtef.InfoBar}
         * must be created in that case.
         */
        add_icon(): void;
        /**
         * Adds a primary message.
         * @param primary_msg a primary message.
         */
        add_primary_message(primary_msg: string): void;
        /**
         * Adds a secondary message.
         * @param secondary_msg a secondary message.
         */
        add_secondary_message(secondary_msg: string): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
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
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
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
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace MenuShell {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::menu-item-deselected signal is emitted when the
             * {@link Gtk.MenuItem.SignalSignatures.deselect | Gtk.MenuItem::deselect} signal is emitted on a {@link Gtk.MenuItem} belonging
             * (directly or indirectly through submenus) to `gtef_menu_shell`.
             * @signal
             * @since 2.0
             * @run-first
             */
            'menu-item-deselected': (arg0: Gtk.MenuItem) => void;
            /**
             * The ::menu-item-selected signal is emitted when the
             * {@link Gtk.MenuItem.SignalSignatures.select | Gtk.MenuItem::select} signal is emitted on a {@link Gtk.MenuItem} belonging
             * (directly or indirectly through submenus) to `gtef_menu_shell`.
             * @signal
             * @since 2.0
             * @run-first
             */
            'menu-item-selected': (arg0: Gtk.MenuItem) => void;
            'notify::menu-shell': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            menu_shell: Gtk.MenuShell;
            menuShell: Gtk.MenuShell;
        }
    }

    /**
     * @gir-type Class
     */
    class MenuShell extends GObject.Object {
        static $gtype: GObject.GType<MenuShell>;

        // Properties

        /**
         * The {@link Gtk.MenuShell}.
         * @since 2.0
         * @construct-only
         */
        get menu_shell(): Gtk.MenuShell;
        /**
         * The {@link Gtk.MenuShell}.
         * @since 2.0
         * @construct-only
         */
        get menuShell(): Gtk.MenuShell;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuShell.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MenuShell.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MenuShell.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuShell.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MenuShell.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuShell.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MenuShell.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MenuShell.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the {@link Gtef.MenuShell} of `gtk_menu_shell`. The returned object is
         * guaranteed to be the same for the lifetime of `gtk_menu_shell`.
         * @param gtk_menu_shell a {@link Gtk.MenuShell}.
         */
        static get_from_gtk_menu_shell(gtk_menu_shell: Gtk.MenuShell): MenuShell;

        // Virtual methods

        /**
         * @param menu_item
         * @virtual
         */
        vfunc_menu_item_deselected(menu_item: Gtk.MenuItem): void;
        /**
         * @param menu_item
         * @virtual
         */
        vfunc_menu_item_selected(menu_item: Gtk.MenuItem): void;

        // Methods

        /**
         * @returns the {@link Gtk.MenuShell} of `gtef_menu_shell`.
         */
        get_menu_shell(): Gtk.MenuShell;
    }

    namespace Tab {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            'notify::baseline-row': (pspec: GObject.ParamSpec) => void;
            'notify::column-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::column-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::row-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::row-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Tab extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Tab>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Tab.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Tab.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](main_widget: Gtk.Widget): Tab;
        // Conflicted with Gtk.Grid.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof Tab.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tab.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Tab.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tab.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Tab.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Tab.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Attaches `info_bar` to `tab`, above the main widget.
         *
         * If several info bars are added, the first one will be at the top, the second
         * one below the first info bar, etc. With the main widget of `tab` at the
         * bottom.
         * @param info_bar a {@link Gtk.InfoBar}.
         */
        add_info_bar(info_bar: Gtk.InfoBar): void;
        /**
         * The orientation of the orientable.
         * @since 2.16
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
        set_orientation(orientation: Gtk.Orientation | null): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
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
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
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
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace View {
        // Signal signatures
        interface SignalSignatures extends GtkSource.View.SignalSignatures {
            'notify::auto-indent': (pspec: GObject.ParamSpec) => void;
            'notify::background-pattern': (pspec: GObject.ParamSpec) => void;
            'notify::completion': (pspec: GObject.ParamSpec) => void;
            'notify::draw-spaces': (pspec: GObject.ParamSpec) => void;
            'notify::highlight-current-line': (pspec: GObject.ParamSpec) => void;
            'notify::indent-on-tab': (pspec: GObject.ParamSpec) => void;
            'notify::indent-width': (pspec: GObject.ParamSpec) => void;
            'notify::insert-spaces-instead-of-tabs': (pspec: GObject.ParamSpec) => void;
            'notify::right-margin-position': (pspec: GObject.ParamSpec) => void;
            'notify::show-line-marks': (pspec: GObject.ParamSpec) => void;
            'notify::show-line-numbers': (pspec: GObject.ParamSpec) => void;
            'notify::show-right-margin': (pspec: GObject.ParamSpec) => void;
            'notify::smart-backspace': (pspec: GObject.ParamSpec) => void;
            'notify::smart-home-end': (pspec: GObject.ParamSpec) => void;
            'notify::space-drawer': (pspec: GObject.ParamSpec) => void;
            'notify::tab-width': (pspec: GObject.ParamSpec) => void;
            'notify::accepts-tab': (pspec: GObject.ParamSpec) => void;
            'notify::bottom-margin': (pspec: GObject.ParamSpec) => void;
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-visible': (pspec: GObject.ParamSpec) => void;
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::im-module': (pspec: GObject.ParamSpec) => void;
            'notify::indent': (pspec: GObject.ParamSpec) => void;
            'notify::input-hints': (pspec: GObject.ParamSpec) => void;
            'notify::input-purpose': (pspec: GObject.ParamSpec) => void;
            'notify::justification': (pspec: GObject.ParamSpec) => void;
            'notify::left-margin': (pspec: GObject.ParamSpec) => void;
            'notify::monospace': (pspec: GObject.ParamSpec) => void;
            'notify::overwrite': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-above-lines': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-below-lines': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-inside-wrap': (pspec: GObject.ParamSpec) => void;
            'notify::populate-all': (pspec: GObject.ParamSpec) => void;
            'notify::right-margin': (pspec: GObject.ParamSpec) => void;
            'notify::tabs': (pspec: GObject.ParamSpec) => void;
            'notify::top-margin': (pspec: GObject.ParamSpec) => void;
            'notify::wrap-mode': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                GtkSource.View.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Scrollable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class View extends GtkSource.View implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<View>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: View.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<View.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): View;

        // Signals

        /** @signal */
        connect<K extends keyof View.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, View.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof View.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, View.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof View.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<View.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Copies the clipboard.
         */
        copy_clipboard(): void;
        /**
         * Cuts the clipboard and then scrolls to the cursor position.
         */
        cut_clipboard(): void;
        /**
         * Deletes the text currently selected in the {@link Gtk.TextBuffer} associated
         * to the view and then scrolls to the cursor position.
         */
        delete_selection(): void;
        /**
         * Places the cursor at the position returned by
         * `gtk_text_buffer_get_iter_at_line()`, and scrolls to that position.
         * @param line a line number, counting from 0.
         * @returns `true` if the cursor has been moved exactly to `line`, `false` if that   line didn't exist.
         */
        goto_line(line: number): boolean;
        /**
         * Places the cursor at the position returned by
         * `gtk_text_buffer_get_iter_at_line_offset()`, and scrolls to that position.
         * @param line a line number, counting from 0.
         * @param line_offset the line offset, in characters (not bytes).
         * @returns `true` if the cursor has been moved exactly to `line` and   `line_offset`, `false` if that position didn't exist.
         */
        goto_line_offset(line: number, line_offset: number): boolean;
        /**
         * Pastes the clipboard and then scrolls to the cursor position.
         */
        paste_clipboard(): void;
        /**
         * Scrolls the `view` to the cursor position.
         */
        scroll_to_cursor(): void;
        /**
         * Selects all the text.
         */
        select_all(): void;
        /**
         * Selects the lines between `start_line` and `end_line` included, counting from
         * zero. And then scrolls to the cursor.
         *
         * Possible use-case: line numbers coming from a compilation output, to go to
         * the place where a warning or error occurred.
         * @param start_line start of the region to select.
         * @param end_line end of the region to select.
         */
        select_lines(start_line: number, end_line: number): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
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
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
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
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    /**
     * @gir-type Struct
     */
    class ActionInfo {
        static $gtype: GObject.GType<ActionInfo>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): ActionInfo;

        static new_from_entry(info_entry: ActionInfoEntry, translation_domain?: string | null): ActionInfo;

        // Methods

        /**
         * @returns a copy of `info`. The copy will have a reference count of one.
         */
        copy(): ActionInfo;
        /**
         * Returns the accelerators. This function never returns `null`, it always
         * returns a `null`-terminated array, to be suitable for
         * `gtk_application_set_accels_for_action()`.
         * @returns a `null`-terminated array of accelerators in the format understood by `gtk_accelerator_parse()`.
         */
        get_accels(): string[];
        /**
         * @returns the action name, or `null`. Example: `"win.save"`.
         */
        get_action_name(): string | null;
        /**
         * @returns the icon name, or `null`.
         */
        get_icon_name(): string | null;
        /**
         * @returns the label (i.e. a short description), or `null`.
         */
        get_label(): string | null;
        /**
         * @returns the tooltip (i.e. a long description), or `null`.
         */
        get_tooltip(): string | null;
        /**
         * Increments the reference count of `info` by one.
         * @returns the passed in `info`.
         */
        ref(): ActionInfo;
        /**
         * A function similar to `gtk_application_set_accels_for_action()`.
         *
         * `accels` must not be `null`, it must be a `null`-terminated array, to be
         * consistent with `gtk_application_set_accels_for_action()`.
         * @param accels a `null`-terminated array of accelerators in the format understood by `gtk_accelerator_parse()`.
         */
        set_accels(accels: string[]): void;
        /**
         * Sets the action name, for example `"win.save"`.
         * @param action_name the action name.
         */
        set_action_name(action_name: string): void;
        /**
         * @param icon_name the icon name, or `null`.
         */
        set_icon_name(icon_name?: string | null): void;
        /**
         * @param label the label (i.e. a short description), or `null`.
         */
        set_label(label?: string | null): void;
        /**
         * @param tooltip the tooltip (i.e. a long description), or `null`.
         */
        set_tooltip(tooltip?: string | null): void;
        /**
         * Decrements the reference count of `info` by one. If the reference count drops
         * to 0, `info` is freed.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type ActionInfoCentralStoreClass = typeof ActionInfoCentralStore;
    /**
     * @gir-type Struct
     */
    abstract class ActionInfoCentralStorePrivate {
        static $gtype: GObject.GType<ActionInfoCentralStorePrivate>;
    }

    /**
     * This struct defines a set of information for a single action. It is for use
     * with `gtef_action_info_store_add_entries()`.
     *
     * Like {@link Gio.ActionEntry}, it is permissible to use an incomplete initialiser in
     * order to leave some of the later values as `null`. Additional optional fields
     * may be added in the future.
     * @gir-type Struct
     * @since 2.0
     */
    class ActionInfoEntry {
        static $gtype: GObject.GType<ActionInfoEntry>;

        // Fields

        action_name: string;
        icon_name: string;
        label: string;
        accel: string;
        tooltip: string;

        // Constructors

        constructor(
            properties?: Partial<{
                action_name: string;
                icon_name: string;
                label: string;
                accel: string;
                tooltip: string;
            }>,
        );
    }

    /**
     * @gir-type Alias
     */
    type ActionInfoStoreClass = typeof ActionInfoStore;
    /**
     * @gir-type Struct
     */
    abstract class ActionInfoStorePrivate {
        static $gtype: GObject.GType<ActionInfoStorePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ApplicationClass = typeof Application;
    /**
     * @gir-type Struct
     */
    abstract class ApplicationPrivate {
        static $gtype: GObject.GType<ApplicationPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ApplicationWindowClass = typeof ApplicationWindow;
    /**
     * @gir-type Struct
     */
    abstract class ApplicationWindowPrivate {
        static $gtype: GObject.GType<ApplicationWindowPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type BufferClass = typeof Buffer;
    /**
     * @gir-type Struct
     */
    class Encoding {
        static $gtype: GObject.GType<Encoding>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](charset: string): Encoding;

        static new_from_locale(): Encoding;

        static new_utf8(): Encoding;

        // Static methods

        /**
         * Gets a list of all encodings known by {@link Gtef.Encoding}.
         */
        static get_all(): Encoding[];
        /**
         * Gets the list of default candidate encodings to try when loading a file. See
         * `gtk_source_file_loader_set_candidate_encodings()`.
         *
         * This function returns a different list depending on the current locale (i.e.
         * language, country and default encoding). The UTF-8 encoding and the current
         * locale encoding are guaranteed to be present in the returned list.
         */
        static get_default_candidates(): Encoding[];

        // Methods

        /**
         * @returns a copy of `enc`.
         */
        copy(): Encoding;
        /**
         * @param enc2 a {@link Gtef.Encoding}, or `null`.
         * @returns whether `enc1` and `enc2` are equals.
         */
        equals(enc2?: Encoding | null): boolean;
        free(): void;
        /**
         * Gets the character set of the {@link Gtef.Encoding}, such as "UTF-8" or "ISO-8859-1".
         * @returns the character set of the {@link Gtef.Encoding}.
         */
        get_charset(): string;
        /**
         * Gets the name of the {@link Gtef.Encoding} such as "Unicode" or "Western".
         * @returns the name of the {@link Gtef.Encoding}.
         */
        get_name(): string;
        /**
         * @returns whether `enc` is a UTF-8 encoding.
         */
        is_utf8(): boolean;
        /**
         * Returns the encoding name with the charset in parenthesis, for example
         * "Unicode (UTF-8)". If the name is unknown, just the charset is returned.
         * @returns a string representation. Free with `g_free()` when no longer needed.
         */
        to_string(): string;
    }

    /**
     * @gir-type Alias
     */
    type FileClass = typeof File;
    /**
     * @gir-type Alias
     */
    type FileLoaderClass = typeof FileLoader;
    /**
     * @gir-type Alias
     */
    type FileMetadataClass = typeof FileMetadata;
    /**
     * @gir-type Alias
     */
    type FileSaverClass = typeof FileSaver;
    /**
     * @gir-type Struct
     */
    abstract class FileSaverPrivate {
        static $gtype: GObject.GType<FileSaverPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FoldRegionClass = typeof FoldRegion;
    /**
     * @gir-type Alias
     */
    type GutterRendererFoldsClass = typeof GutterRendererFolds;
    /**
     * @gir-type Alias
     */
    type InfoBarClass = typeof InfoBar;
    /**
     * @gir-type Alias
     */
    type MenuShellClass = typeof MenuShell;
    /**
     * @gir-type Struct
     */
    abstract class MenuShellPrivate {
        static $gtype: GObject.GType<MenuShellPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TabClass = typeof Tab;
    /**
     * @gir-type Alias
     */
    type ViewClass = typeof View;
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

export default Gtef;

// END
