/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type GtkSource from '@girs/gtksource-3.0';
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

export namespace Gtef {
    /**
     * Gtef-2
     */

    export namespace CompressionType {
        export const $gtype: GObject.GType<CompressionType>;
    }

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
     * An error code used with the %GTEF_FILE_LOADER_ERROR domain.
     */
    class FileLoaderError extends GLib.Error {
        static $gtype: GObject.GType<FileLoaderError>;

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
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * An error code used with the %GTEF_FILE_SAVER_ERROR domain.
     */
    class FileSaverError extends GLib.Error {
        static $gtype: GObject.GType<FileSaverError>;

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
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    export namespace NewlineType {
        export const $gtype: GObject.GType<NewlineType>;
    }

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

    export namespace SelectionType {
        export const $gtype: GObject.GType<SelectionType>;
    }

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
     * A wrapper function for g_action_map_add_action_entries() that checks
     * duplicates.
     *
     * This function first checks - for each entry - that the `action_map` doesn't
     * already contain a #GAction with the same name. A warning is printed if an old
     * action will be dropped. In any case, it then calls
     * g_action_map_add_action_entries() with the same arguments as passed to this
     * function.
     *
     * This function also checks if there are duplicates in the `entries` array
     * itself.
     * @param action_map a #GActionMap.
     * @param entries a pointer to           the first item in an array of #GActionEntry structs.
     * @param user_data the user data for signal connections.
     */
    function action_map_add_action_entries_check_dups(
        action_map: Gio.ActionMap,
        entries: Gio.ActionEntry[],
        user_data?: any | null,
    ): void;
    /**
     * Gets a list of all encodings known by #GtefEncoding.
     * @returns a list of #GtefEncoding's.
     */
    function encoding_get_all(): Encoding[];
    /**
     * Gets the list of default candidate encodings to try when loading a file. See
     * gtk_source_file_loader_set_candidate_encodings().
     *
     * This function returns a different list depending on the current locale (i.e.
     * language, country and default encoding). The UTF-8 encoding and the current
     * locale encoding are guaranteed to be present in the returned list.
     * @returns the list of default candidate encodings.
     */
    function encoding_get_default_candidates(): Encoding[];
    function file_loader_error_quark(): GLib.Quark;
    function file_saver_error_quark(): GLib.Quark;
    /**
     * Gets the indentation, as a string, of the line at `iter`. `iter` can be
     * anywhere in the line.
     *
     * Possible use-case: to implement an action that inserts some text in a
     * #GtkTextBuffer. If the text to insert spans multiple lines, it is usually
     * desired to keep the same indentation level.
     * @param iter a #GtkTextIter.
     * @returns the line indentation at @iter. Free with g_free().
     */
    function iter_get_line_indentation(iter: Gtk.TextIter): string;
    function menu_item_get_long_description(menu_item: Gtk.MenuItem): string | null;
    /**
     * Sets an icon to a #GtkMenuItem.
     *
     * If the child widget of `item` is already a #GtkBox, all #GtkImage widgets
     * inside that box are first destroyed. A #GtkImage for `icon_name` is then
     * inserted to the box.
     *
     * If the child widget of `item` is not a #GtkBox (it's usually the
     * #GtkAccelLabel), it is replaced by a new #GtkBox and the initial child widget
     * is inserted to the #GtkBox, alongside the icon.
     *
     * As a consequence, if you want to call functions on the #GtkAccelLabel, it's
     * easier to do it before calling this function.
     * @param item a #GtkMenuItem.
     * @param icon_name an icon name.
     */
    function menu_item_set_icon_name(item: Gtk.MenuItem, icon_name: string): void;
    /**
     * Sets the long description of `menu_item`. A possible use-case is to display it
     * in a #GtkStatusbar, or as a tooltip.
     * @param menu_item a #GtkMenuItem.
     * @param long_description the long description, or %NULL to unset it.
     */
    function menu_item_set_long_description(menu_item: Gtk.MenuItem, long_description?: string | null): void;
    /**
     * This function initializes the metadata manager.
     *
     * The `metadata_path` must be different for each process. It is advised for your
     * application to rely on #GApplication process uniqueness.
     *
     * A good place to store the metadata is in a sub-directory of the user data
     * directory. See g_get_user_data_dir().
     * @param metadata_path the filename where the metadata is stored.
     */
    function metadata_manager_init(metadata_path: string): void;
    /**
     * This function saves synchronously metadata if they need to be saved, and
     * frees the internal data of the metadata manager.
     */
    function metadata_manager_shutdown(): void;
    /**
     * Gets the URI of `item`. `item` must be a child of `menu`. `menu` must be a
     * #GtkRecentChooserMenu.
     *
     * This function has been written because the value returned by
     * gtk_recent_chooser_get_current_uri() is not updated when #GtkMenuItem's of a
     * #GtkRecentChooserMenu are selected/deselected.
     * @param menu a #GtkRecentChooserMenu.
     * @param item a #GtkMenuItem.
     * @returns the URI of @item. Free with g_free() when no longer needed.
     */
    function utils_recent_chooser_menu_get_item_uri(menu: Gtk.RecentChooserMenu, item: Gtk.MenuItem): string;
    /**
     * Flags to define the behavior of a #GtefFileSaver.
     */

    /**
     * Flags to define the behavior of a #GtefFileSaver.
     */
    export namespace FileSaverFlags {
        export const $gtype: GObject.GType<FileSaverFlags>;
    }

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
     * The folding state at a certain line in the #GtkTextBuffer.
     *
     * Since #GtefGutterRendererFolds has a flat view of the folding tree, some
     * states can be combined; for example, %GTEF_GUTTER_RENDERER_FOLDS_STATE_END
     * and %GTEF_GUTTER_RENDERER_FOLDS_STATE_CONTINUE.
     */

    /**
     * The folding state at a certain line in the #GtkTextBuffer.
     *
     * Since #GtefGutterRendererFolds has a flat view of the folding tree, some
     * states can be combined; for example, %GTEF_GUTTER_RENDERER_FOLDS_STATE_END
     * and %GTEF_GUTTER_RENDERER_FOLDS_STATE_CONTINUE.
     */
    export namespace GutterRendererFoldsState {
        export const $gtype: GObject.GType<GutterRendererFoldsState>;
    }

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
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ActionInfoCentralStore extends GObject.Object {
        static $gtype: GObject.GType<ActionInfoCentralStore>;

        // Constructors

        constructor(properties?: Partial<ActionInfoCentralStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

        static get_instance(): ActionInfoCentralStore;

        // Methods

        lookup(action_name: string): ActionInfo;
    }

    namespace ActionInfoStore {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application: Gtk.Application;
        }
    }

    class ActionInfoStore extends GObject.Object {
        static $gtype: GObject.GType<ActionInfoStore>;

        // Properties

        /**
         * The associated #GtkApplication. #GtefActionInfoStore has a weak
         * reference to the #GtkApplication.
         */
        get application(): Gtk.Application;

        // Constructors

        constructor(properties?: Partial<ActionInfoStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](application?: Gtk.Application | null): ActionInfoStore;

        // Methods

        /**
         * Inserts `info` into `store` and into the #GtefActionInfoCentralStore. Both the
         * `store` and central store must <emphasis>not</emphasis> already contain a
         * #GtefActionInfo with the same action name. The stores take their own
         * reference on `info`.
         * @param info a #GtefActionInfo.
         */
        add(info: ActionInfo): void;
        /**
         * Calls gtef_action_info_store_add() for each entry.
         *
         * If `translation_domain` is not %NULL, g_dgettext() is used to translate the
         * `label` and `tooltip` of each entry before setting them to the #GtefActionInfo.
         *
         * An API similar to g_action_map_add_action_entries().
         * @param entries a pointer to the first item in an array of #GtefActionInfoEntry structs.
         * @param translation_domain a gettext domain, or %NULL.
         */
        add_entries(entries: ActionInfoEntry[], translation_domain?: string | null): void;
        /**
         * Checks that all #GtefActionInfo's of `store` have been used by
         * gtef_action_info_store_create_menu_item(). If not, a warning is printed and
         * might indicate dead code.
         *
         * You probably want to call this function on the store returned by
         * gtef_application_get_app_action_info_store(). But it can also be useful for a
         * store provided by a library, to easily see which actions you don't use.
         */
        check_all_used(): void;
        /**
         * Creates a new #GtkMenuItem for `action_name`. The `store` must contain a
         * #GtefActionInfo for `action_name`.
         *
         * gtk_actionable_set_action_name() is called on the menu item with
         * `action_name`. The label is set with the #GtkMenuItem:use-underline property
         * enabled. The first accelerator is set to the #GtkAccelLabel of the menu item.
         * The icon is set. And the tooltip is set with
         * gtef_menu_item_set_long_description().
         *
         * If #GtefActionInfoStore:application is non-%NULL, this function also calls
         * gtk_application_set_accels_for_action() with the accelerators returned by
         * gtef_action_info_get_accels() (this will erase previously set accelerators
         * for that action, if any).
         * @param action_name an action name.
         * @returns a new #GtkMenuItem for @action_name.
         */
        create_menu_item(action_name: string): Gtk.Widget;
        get_application(): Gtk.Application | null;
        lookup(action_name: string): ActionInfo;
    }

    namespace Application {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application: Gtk.Application;
        }
    }

    class Application extends GObject.Object {
        static $gtype: GObject.GType<Application>;

        // Properties

        /**
         * The #GtkApplication.
         */
        get application(): Gtk.Application;

        // Constructors

        constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

        /**
         * Convenience function that calls g_application_get_default() followed by
         * gtef_application_get_from_gtk_application(). The object returned by
         * g_application_get_default() must be a #GtkApplication.
         */
        static get_default(): Application;
        /**
         * Returns the #GtefApplication of `gtk_app`. The returned object is guaranteed
         * to be the same for the lifetime of `gtk_app`.
         * @param gtk_app a #GtkApplication.
         */
        static get_from_gtk_application(gtk_app: Gtk.Application): Application;

        // Methods

        /**
         * Returns an initially empty #GtefActionInfoStore reserved for the
         * application-specific actions. Libraries should not add #GtefActionInfo's to
         * this store. Libraries should provide their own store if they want to share
         * #GtefActionInfo's.
         * @returns the #GtefActionInfoStore reserved for the application.
         */
        get_app_action_info_store(): ActionInfoStore;
        get_application(): Gtk.Application;
        /**
         * Calls g_application_open() with a single file and an empty hint.
         * @param file a #GFile.
         */
        open_simple(file: Gio.File): void;
    }

    namespace ApplicationWindow {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application_window: Gtk.ApplicationWindow;
            applicationWindow: Gtk.ApplicationWindow;
            statusbar: Gtk.Statusbar;
        }
    }

    class ApplicationWindow extends GObject.Object {
        static $gtype: GObject.GType<ApplicationWindow>;

        // Properties

        /**
         * The #GtkApplicationWindow.
         */
        get application_window(): Gtk.ApplicationWindow;
        /**
         * The #GtkApplicationWindow.
         */
        get applicationWindow(): Gtk.ApplicationWindow;
        /**
         * The #GtkStatusbar. %NULL by default.
         */
        get statusbar(): Gtk.Statusbar;
        set statusbar(val: Gtk.Statusbar);

        // Constructors

        constructor(properties?: Partial<ApplicationWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

        /**
         * Returns the #GtefApplicationWindow of `gtk_window`. The returned object is
         * guaranteed to be the same for the lifetime of `gtk_window`.
         * @param gtk_window a #GtkApplicationWindow.
         */
        static get_from_gtk_application_window(gtk_window: Gtk.ApplicationWindow): ApplicationWindow;

        // Methods

        /**
         * Connect to the #GtefMenuShell::menu-item-selected and
         * #GtefMenuShell::menu-item-deselected signals of `gtef_menu_shell` to push/pop
         * the long description of #GtkMenuItem's to the
         * #GtefApplicationWindow:statusbar.
         *
         * The long description is retrieved with gtef_menu_item_get_long_description().
         * So gtef_menu_item_set_long_description() must have been called, which is the
         * case if the #GtkMenuItem has been created with the functions available in
         * #GtefActionInfoStore.
         * @param gtef_menu_shell a #GtefMenuShell.
         */
        connect_menu_to_statusbar(gtef_menu_shell: MenuShell): void;
        /**
         * An alternative to gtk_recent_chooser_set_show_tips(). Shows the full path in
         * the #GtefApplicationWindow:statusbar when a #GtkMenuItem of `menu` is
         * selected.
         *
         * The full path is retrieved with
         * gtef_utils_recent_chooser_menu_get_item_uri().
         * @param menu a #GtkRecentChooserMenu.
         */
        connect_recent_chooser_menu_to_statusbar(menu: Gtk.RecentChooserMenu): void;
        /**
         * Creates a #GtkMenuItem with a simple and generic #GtkRecentChooserMenu as
         * submenu.
         *
         * The #GtkRecentChooser is configured to show files only recently used with the
         * current application, as returned by g_get_application_name(). If recent files
         * are added to the default #GtkRecentManager with
         * gtk_recent_manager_add_item(), the files will normally show up in the
         * #GtkRecentChooserMenu.
         *
         * The #GtkRecentChooserMenu is connected to the statusbar with
         * gtef_application_window_connect_recent_chooser_menu_to_statusbar().
         *
         * When the #GtkRecentChooser::item-activated signal is emitted,
         * gtef_application_open_simple() is called, so the #GApplication must have the
         * %G_APPLICATION_HANDLES_OPEN flag set.
         * @returns a new #GtkMenuItem.
         */
        create_open_recent_menu_item(): Gtk.Widget;
        get_application_window(): Gtk.ApplicationWindow;
        get_statusbar(): Gtk.Statusbar | null;
        /**
         * Sets the #GtefApplicationWindow:statusbar property.
         * @param statusbar a #GtkStatusbar, or %NULL.
         */
        set_statusbar(statusbar?: Gtk.Statusbar | null): void;
    }

    namespace Buffer {
        // Signal callback interfaces

        interface GtefCursorMoved {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GtkSource.Buffer.ConstructorProps {
            gtef_style_scheme_id: string;
            gtefStyleSchemeId: string;
            gtef_title: string;
            gtefTitle: string;
        }
    }

    class Buffer extends GtkSource.Buffer {
        static $gtype: GObject.GType<Buffer>;

        // Properties

        /**
         * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
         * useful for binding it to a #GSettings key.
         *
         * When the #GtkSourceBuffer:style-scheme is %NULL,
         * #GtefBuffer:gtef-style-scheme-id contains the empty string.
         */
        get gtef_style_scheme_id(): string;
        set gtef_style_scheme_id(val: string);
        /**
         * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
         * useful for binding it to a #GSettings key.
         *
         * When the #GtkSourceBuffer:style-scheme is %NULL,
         * #GtefBuffer:gtef-style-scheme-id contains the empty string.
         */
        get gtefStyleSchemeId(): string;
        set gtefStyleSchemeId(val: string);
        /**
         * The buffer title. See gtef_buffer_get_title().
         */
        get gtef_title(): string;
        /**
         * The buffer title. See gtef_buffer_get_title().
         */
        get gtefTitle(): string;

        // Constructors

        constructor(properties?: Partial<Buffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Buffer;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'gtef-cursor-moved', callback: (_source: this) => void): number;
        connect_after(signal: 'gtef-cursor-moved', callback: (_source: this) => void): number;
        emit(signal: 'gtef-cursor-moved'): void;

        // Virtual methods

        vfunc_gtef_cursor_moved(): void;

        // Methods

        /**
         * Returns the #GtefFile of `buffer`. The returned object is guaranteed to be the
         * same for the lifetime of `buffer`.
         * @returns the associated #GtefFile.
         */
        get_file(): File;
        get_selection_type(): SelectionType;
        get_style_scheme_id(): string;
        /**
         * Returns a title suitable for a #GtkWindow title. It contains (in that order):
         * - '*' if the buffer is modified;
         * - the #GtefFile:short-name;
         * - the directory path in parenthesis if the #GtefFile:location isn't
         *   %NULL.
         * @returns the @buffer title. Free the return value with g_free() when no longer needed.
         */
        get_title(): string;
        /**
         * Returns whether `buffer` is untouched.
         *
         * This function is for example useful to know if we can re-use this buffer to
         * load a file, instead of opening a new tab or window.
         *
         * For this function to return %TRUE, the `buffer` must be empty, non-modified,
         * the undo/redo #GtkSourceBuffer history must be empty, and the
         * #GtefFile:location must be %NULL.
         * @returns %TRUE if @buffer has not been touched, %FALSE otherwise.
         */
        is_untouched(): boolean;
        /**
         * Sets the #GtefBuffer:gtef-style-scheme-id property.
         *
         * The #GtkSourceStyleScheme is taken from the default
         * #GtkSourceStyleSchemeManager as returned by
         * gtk_source_style_scheme_manager_get_default().
         * @param style_scheme_id the new value.
         */
        set_style_scheme_id(style_scheme_id: string): void;
    }

    namespace File {
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

    class File extends GObject.Object {
        static $gtype: GObject.GType<File>;

        // Properties

        /**
         * The compression type.
         */
        get compression_type(): CompressionType;
        /**
         * The compression type.
         */
        get compressionType(): CompressionType;
        /**
         * The character encoding, initially %NULL. After a successful file
         * loading or saving operation, the encoding is non-%NULL.
         */
        get encoding(): Encoding;
        /**
         * The location.
         */
        get location(): Gio.File;
        set location(val: Gio.File);
        /**
         * The line ending type.
         */
        get newline_type(): NewlineType;
        /**
         * The line ending type.
         */
        get newlineType(): NewlineType;
        /**
         * Whether the file is read-only or not. The value of this property is
         * not updated automatically (there is no file monitors).
         */
        get read_only(): boolean;
        /**
         * Whether the file is read-only or not. The value of this property is
         * not updated automatically (there is no file monitors).
         */
        get readOnly(): boolean;
        /**
         * The file short name. See gtef_file_get_short_name().
         */
        get short_name(): string;
        /**
         * The file short name. See gtef_file_get_short_name().
         */
        get shortName(): string;

        // Constructors

        constructor(properties?: Partial<File.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): File;

        // Methods

        /**
         * Checks synchronously the file on disk, to know whether the file is externally
         * modified, or has been deleted, and whether the file is read-only.
         *
         * #GtefFile doesn't create a #GFileMonitor to track those properties, so
         * this function needs to be called instead. Creating lots of #GFileMonitor's
         * would take lots of resources.
         *
         * Since this function is synchronous, it is advised to call it only on local
         * files. See gtef_file_is_local().
         */
        check_file_on_disk(): void;
        get_compression_type(): CompressionType;
        /**
         * The encoding is initially %NULL. After a successful file loading or saving
         * operation, the encoding is non-%NULL.
         * @returns the character encoding.
         */
        get_encoding(): Encoding;
        get_file_metadata(): FileMetadata;
        get_location(): Gio.File;
        get_newline_type(): NewlineType;
        /**
         * Gets the `file` short name. If the #GtefFile:location isn't %NULL,
         * returns its display-name (see #G_FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME).
         * Otherwise returns "Untitled File N", with N the Nth untitled file of the
         * application, starting at 1. When an untitled file is closed, its number is
         * released and can be used by a later untitled file.
         * @returns the @file short name.
         */
        get_short_name(): string;
        /**
         * Returns whether the file has been deleted. If the
         * #GtefFile:location is %NULL, returns %FALSE.
         *
         * To have an up-to-date value, you must first call
         * gtef_file_check_file_on_disk().
         * @returns whether the file has been deleted.
         */
        is_deleted(): boolean;
        /**
         * Returns whether the file is externally modified. If the
         * #GtefFile:location is %NULL, returns %FALSE.
         *
         * To have an up-to-date value, you must first call
         * gtef_file_check_file_on_disk().
         * @returns whether the file is externally modified.
         */
        is_externally_modified(): boolean;
        /**
         * Returns whether the file is local. If the #GtefFile:location is %NULL,
         * returns %FALSE.
         * @returns whether the file is local.
         */
        is_local(): boolean;
        /**
         * Returns whether the file is read-only. If the
         * #GtefFile:location is %NULL, returns %FALSE.
         *
         * To have an up-to-date value, you must first call
         * gtef_file_check_file_on_disk().
         * @returns whether the file is read-only.
         */
        is_readonly(): boolean;
        /**
         * Sets the location.
         * @param location the new #GFile, or %NULL.
         */
        set_location(location?: Gio.File | null): void;
    }

    namespace FileLoader {
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

    class FileLoader extends GObject.Object {
        static $gtype: GObject.GType<FileLoader>;

        // Properties

        /**
         * The #GtefBuffer to load the content into. The #GtefFileLoader object
         * has a weak reference to the buffer.
         */
        get buffer(): Buffer;
        /**
         * The chunk size, in bytes. The content is loaded chunk by chunk. It
         * permits to avoid allocating a too big contiguous memory area, as well
         * as reporting progress information after each chunk read.
         *
         * A small chunk size is better when loading a remote file with a slow
         * connection. For local files, the chunk size can be larger.
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
         */
        get chunkSize(): number;
        set chunkSize(val: number);
        /**
         * The #GtefFile. The #GtefFileLoader object has a weak
         * reference to the file.
         */
        get file(): File;
        /**
         * The #GFile to load. By default the location is taken from the
         * #GtefFile at construction time.
         */
        get location(): Gio.File;
        /**
         * The maximum content size, in bytes. Keep in mind that all the
         * content is loaded in memory, and when loaded into a #GtkTextBuffer
         * it takes more memory than just the content size.
         *
         * Set to -1 for unlimited size.
         */
        get max_size(): number;
        set max_size(val: number);
        /**
         * The maximum content size, in bytes. Keep in mind that all the
         * content is loaded in memory, and when loaded into a #GtkTextBuffer
         * it takes more memory than just the content size.
         *
         * Set to -1 for unlimited size.
         */
        get maxSize(): number;
        set maxSize(val: number);

        // Constructors

        constructor(properties?: Partial<FileLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Buffer, file: File): FileLoader;

        // Methods

        get_buffer(): Buffer | null;
        get_chunk_size(): number;
        get_encoding(): Encoding | null;
        get_file(): File | null;
        get_location(): Gio.File | null;
        get_max_size(): number;
        get_newline_type(): NewlineType;
        /**
         * Loads asynchronously the file content into the #GtefBuffer.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
         * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
         */
        load_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
        ): Promise<boolean>;
        /**
         * Loads asynchronously the file content into the #GtefBuffer.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
         * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        load_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            progress_callback: Gio.FileProgressCallback | null,
            progress_callback_notify: GLib.DestroyNotify | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Loads asynchronously the file content into the #GtefBuffer.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
         * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        load_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Finishes a file loading started with gtef_file_loader_load_async().
         * @param result a #GAsyncResult.
         * @returns whether the content has been loaded successfully.
         */
        load_finish(result: Gio.AsyncResult): boolean;
        set_chunk_size(chunk_size: number): void;
        set_max_size(max_size: number): void;
    }

    namespace FileMetadata {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            file: File;
        }
    }

    class FileMetadata extends GObject.Object {
        static $gtype: GObject.GType<FileMetadata>;

        // Properties

        /**
         * The #GtefFile that the metadata belong to.
         */
        get file(): File;

        // Constructors

        constructor(properties?: Partial<FileMetadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file: File): FileMetadata;

        // Methods

        /**
         * Gets the value of a metadata stored in the `metadata` object memory.
         * @param key the name of the metadata.
         * @returns the value of the metadata, or %NULL if the metadata   doesn't exist. Free with g_free().
         */
        get(key: string): string | null;
        get_file(): File;
        /**
         * Loads synchronously the metadata from #GtefFile:location. The loaded
         * metadata values can then be accessed with gtef_file_metadata_get().
         *
         * If the metadata are loaded successfully, this function deletes all previous
         * metadata stored in the `metadata` object memory.
         *
         * The file at #GtefFile:location, if non-%NULL, must exist on the
         * filesystem, otherwise an error is returned.
         *
         * If #GtefFile:location is %NULL, %FALSE is simply returned.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns whether the metadata was loaded successfully.
         */
        load(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * The asynchronous version of gtef_file_metadata_load().
         *
         * If the metadata is loaded from the metadata manager (i.e. not with GVfs),
         * this function loads the metadata synchronously. A future version might fix
         * this.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        load_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * The asynchronous version of gtef_file_metadata_load().
         *
         * If the metadata is loaded from the metadata manager (i.e. not with GVfs),
         * this function loads the metadata synchronously. A future version might fix
         * this.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        load_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * The asynchronous version of gtef_file_metadata_load().
         *
         * If the metadata is loaded from the metadata manager (i.e. not with GVfs),
         * this function loads the metadata synchronously. A future version might fix
         * this.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        load_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Finishes the metadata loading started with gtef_file_metadata_load_async().
         * @param result a #GAsyncResult.
         * @returns whether the metadata was loaded successfully.
         */
        load_finish(result: Gio.AsyncResult): boolean;
        /**
         * Saves synchronously the metadata for #GtefFile:location.
         *
         * The file at #GtefFile:location, if non-%NULL, must exist on the
         * filesystem, otherwise an error is returned.
         *
         * If #GtefFile:location is %NULL, %FALSE is simply returned.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns whether the metadata was saved successfully.
         */
        save(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * The asynchronous version of gtef_file_metadata_save().
         *
         * If the metadata is saved with the metadata manager (i.e. not with GVfs), this
         * function saves the metadata synchronously. A future version might fix this.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        save_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * The asynchronous version of gtef_file_metadata_save().
         *
         * If the metadata is saved with the metadata manager (i.e. not with GVfs), this
         * function saves the metadata synchronously. A future version might fix this.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        save_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * The asynchronous version of gtef_file_metadata_save().
         *
         * If the metadata is saved with the metadata manager (i.e. not with GVfs), this
         * function saves the metadata synchronously. A future version might fix this.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        save_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Finishes the metadata saving started with gtef_file_metadata_save_async().
         * @param result a #GAsyncResult.
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
         * @param value the value of the metadata, or %NULL to unset.
         */
        set(key: string, value?: string | null): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
    }

    namespace FileSaver {
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

    class FileSaver extends GObject.Object {
        static $gtype: GObject.GType<FileSaver>;

        // Properties

        /**
         * The #GtefBuffer to save. The #GtefFileSaver object has a weak
         * reference to the buffer.
         */
        get buffer(): GtkSource.Buffer;
        /**
         * The compression type.
         */
        get compression_type(): GtkSource.CompressionType;
        set compression_type(val: GtkSource.CompressionType);
        /**
         * The compression type.
         */
        get compressionType(): GtkSource.CompressionType;
        set compressionType(val: GtkSource.CompressionType);
        /**
         * The file's encoding.
         */
        get encoding(): Encoding;
        set encoding(val: Encoding);
        /**
         * The #GtefFile. The #GtefFileSaver object has a weak
         * reference to the file.
         */
        get file(): File;
        /**
         * File saving flags.
         */
        get flags(): FileSaverFlags;
        set flags(val: FileSaverFlags);
        /**
         * The #GFile where to save the buffer. By default the location is taken
         * from the #GtefFile at construction time.
         */
        get location(): Gio.File;
        /**
         * The newline type.
         */
        get newline_type(): GtkSource.NewlineType;
        set newline_type(val: GtkSource.NewlineType);
        /**
         * The newline type.
         */
        get newlineType(): GtkSource.NewlineType;
        set newlineType(val: GtkSource.NewlineType);

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<FileSaver.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Buffer, file: File): FileSaver;

        static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver;

        // Methods

        get_buffer(): Buffer;
        get_compression_type(): CompressionType;
        get_encoding(): Encoding;
        get_file(): File;
        get_flags(): FileSaverFlags;
        get_location(): Gio.File;
        get_newline_type(): NewlineType;
        /**
         * Saves asynchronously the buffer into the file. See the #GAsyncResult
         * documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
         * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
         */
        save_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
        ): Promise<boolean>;
        /**
         * Saves asynchronously the buffer into the file. See the #GAsyncResult
         * documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
         * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        save_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            progress_callback: Gio.FileProgressCallback | null,
            progress_callback_notify: GLib.DestroyNotify | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Saves asynchronously the buffer into the file. See the #GAsyncResult
         * documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
         * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        save_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Finishes a file saving started with gtef_file_saver_save_async().
         *
         * If the file has been saved successfully, the following #GtefFile
         * properties will be updated: the location, the encoding, the newline type and
         * the compression type.
         *
         * gtk_text_buffer_set_modified() is called with %FALSE if the file has been
         * saved successfully.
         * @param result a #GAsyncResult.
         * @returns whether the file was saved successfully.
         */
        save_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the compression type. By default the compression type is taken from the
         * #GtefFile.
         * @param compression_type the new compression type.
         */
        set_compression_type(compression_type: CompressionType | null): void;
        /**
         * Sets the encoding. If `encoding` is %NULL, the UTF-8 encoding will be set.
         * By default the encoding is taken from the #GtefFile.
         * @param encoding the new encoding, or %NULL for UTF-8.
         */
        set_encoding(encoding?: Encoding | null): void;
        set_flags(flags: FileSaverFlags | null): void;
        /**
         * Sets the newline type. By default the newline type is taken from the
         * #GtefFile.
         * @param newline_type the new newline type.
         */
        set_newline_type(newline_type: NewlineType | null): void;
    }

    namespace FoldRegion {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Gtk.TextBuffer;
            folded: boolean;
        }
    }

    class FoldRegion extends GObject.Object {
        static $gtype: GObject.GType<FoldRegion>;

        // Properties

        /**
         * The #GtkTextBuffer where the fold region is applied. The
         * #GtefFoldRegion object has a weak reference to the buffer.
         */
        get buffer(): Gtk.TextBuffer;
        /**
         * Whether the #GtefFoldRegion is folded or not.
         */
        get folded(): boolean;
        set folded(val: boolean);

        // Constructors

        constructor(properties?: Partial<FoldRegion.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter): FoldRegion;

        // Methods

        /**
         * Obtains iterators pointing to the start and end of the #GtefFoldRegion.
         * @returns %TRUE on success, %FALSE otherwise.
         */
        get_bounds(): [boolean, Gtk.TextIter, Gtk.TextIter];
        get_buffer(): Gtk.TextBuffer | null;
        get_folded(): boolean;
        /**
         * Sets the start and end of the #GtefFoldRegion.
         * @param start a #GtkTextIter.
         * @param end a #GtkTextIter.
         */
        set_bounds(start: Gtk.TextIter, end: Gtk.TextIter): void;
        /**
         * Folds or unfolds the region.
         * @param folded the new value.
         */
        set_folded(folded: boolean): void;
    }

    namespace GutterRendererFolds {
        // Constructor properties interface

        interface ConstructorProps extends GtkSource.GutterRenderer.ConstructorProps {}
    }

    class GutterRendererFolds extends GtkSource.GutterRenderer {
        static $gtype: GObject.GType<GutterRendererFolds>;

        // Constructors

        constructor(properties?: Partial<GutterRendererFolds.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GutterRendererFolds;

        // Methods

        /**
         * Sets the folding state of the next cell to be drawn.
         *
         * This function is intended to be called from a subclass' draw method before
         * chaining-up to its parent's draw method.
         * @param state a #GtefGutterRendererFoldsState.
         */
        set_state(state: GutterRendererFoldsState | null): void;
    }

    namespace InfoBar {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.InfoBar.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    class InfoBar extends Gtk.InfoBar implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<InfoBar>;

        // Constructors

        constructor(properties?: Partial<InfoBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): InfoBar;

        static new_simple(msg_type: Gtk.MessageType, primary_msg: string, secondary_msg?: string | null): InfoBar;

        // Static methods

        /**
         * Utility function to create a #GtkLabel suitable for a #GtkInfoBar. The
         * wrapping and alignment is configured. The label is also set as selectable,
         * for example to copy an error message and search an explanation on the web.
         */
        static create_label(): Gtk.Label;

        // Methods

        /**
         * Calls gtk_info_bar_set_show_close_button(), and additionnally closes the
         * `info_bar` when the #GtkInfoBar::response signal is received with the
         * `response_id` %GTK_RESPONSE_CLOSE.
         */
        add_close_button(): void;
        /**
         * Adds `content` to `info_bar`.
         *
         * #GtefInfoBar has an internal container, to be able to add the icon and add
         * primary or secondary messages. The internal container is added to the content
         * area, as returned by gtk_info_bar_get_content_area(). So if you use a
         * #GtefInfoBar and you need to add a custom #GtkWidget, it is better to use
         * this function instead of adding the #GtkWidget directly to the content area.
         * @param content a #GtkWidget.
         */
        add_content_widget(content: Gtk.Widget): void;
        /**
         * Adds an icon on the left, determined by the message type. So before calling
         * this function, gtk_info_bar_set_message_type() must have been called.
         *
         * The icon is not updated when the message type changes. Another #GtefInfoBar
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

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    namespace MenuShell {
        // Signal callback interfaces

        interface MenuItemDeselected {
            (menu_item: Gtk.MenuItem): void;
        }

        interface MenuItemSelected {
            (menu_item: Gtk.MenuItem): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            menu_shell: Gtk.MenuShell;
            menuShell: Gtk.MenuShell;
        }
    }

    class MenuShell extends GObject.Object {
        static $gtype: GObject.GType<MenuShell>;

        // Properties

        /**
         * The #GtkMenuShell.
         */
        get menu_shell(): Gtk.MenuShell;
        /**
         * The #GtkMenuShell.
         */
        get menuShell(): Gtk.MenuShell;

        // Constructors

        constructor(properties?: Partial<MenuShell.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'menu-item-deselected', callback: (_source: this, menu_item: Gtk.MenuItem) => void): number;
        connect_after(
            signal: 'menu-item-deselected',
            callback: (_source: this, menu_item: Gtk.MenuItem) => void,
        ): number;
        emit(signal: 'menu-item-deselected', menu_item: Gtk.MenuItem): void;
        connect(signal: 'menu-item-selected', callback: (_source: this, menu_item: Gtk.MenuItem) => void): number;
        connect_after(signal: 'menu-item-selected', callback: (_source: this, menu_item: Gtk.MenuItem) => void): number;
        emit(signal: 'menu-item-selected', menu_item: Gtk.MenuItem): void;

        // Static methods

        /**
         * Returns the #GtefMenuShell of `gtk_menu_shell`. The returned object is
         * guaranteed to be the same for the lifetime of `gtk_menu_shell`.
         * @param gtk_menu_shell a #GtkMenuShell.
         */
        static get_from_gtk_menu_shell(gtk_menu_shell: Gtk.MenuShell): MenuShell;

        // Virtual methods

        vfunc_menu_item_deselected(menu_item: Gtk.MenuItem): void;
        vfunc_menu_item_selected(menu_item: Gtk.MenuItem): void;

        // Methods

        get_menu_shell(): Gtk.MenuShell;
    }

    namespace Tab {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    class Tab extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Tab>;

        // Constructors

        constructor(properties?: Partial<Tab.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](main_widget: Gtk.Widget): Tab;
        // Conflicted with Gtk.Grid.new

        static ['new'](...args: never[]): any;

        // Methods

        /**
         * Attaches `info_bar` to `tab,` above the main widget.
         *
         * If several info bars are added, the first one will be at the top, the second
         * one below the first info bar, etc. With the main widget of `tab` at the
         * bottom.
         * @param info_bar a #GtkInfoBar.
         */
        add_info_bar(info_bar: Gtk.InfoBar): void;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    namespace View {
        // Constructor properties interface

        interface ConstructorProps
            extends GtkSource.View.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Scrollable.ConstructorProps {}
    }

    class View extends GtkSource.View implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<View>;

        // Constructors

        constructor(properties?: Partial<View.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): View;

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
         * Deletes the text currently selected in the #GtkTextBuffer associated
         * to the view and then scrolls to the cursor position.
         */
        delete_selection(): void;
        /**
         * Places the cursor at the position returned by
         * gtk_text_buffer_get_iter_at_line(), and scrolls to that position.
         * @param line a line number, counting from 0.
         * @returns %TRUE if the cursor has been moved exactly to @line, %FALSE if that   line didn't exist.
         */
        goto_line(line: number): boolean;
        /**
         * Places the cursor at the position returned by
         * gtk_text_buffer_get_iter_at_line_offset(), and scrolls to that position.
         * @param line a line number, counting from 0.
         * @param line_offset the line offset, in characters (not bytes).
         * @returns %TRUE if the cursor has been moved exactly to @line and   @line_offset, %FALSE if that position didn't exist.
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

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    class ActionInfo {
        static $gtype: GObject.GType<ActionInfo>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): ActionInfo;

        static new_from_entry(info_entry: ActionInfoEntry, translation_domain?: string | null): ActionInfo;

        // Methods

        copy(): ActionInfo;
        /**
         * Returns the accelerators. This function never returns %NULL, it always
         * returns a %NULL-terminated array, to be suitable for
         * gtk_application_set_accels_for_action().
         * @returns a %NULL-terminated array of accelerators in the format understood by gtk_accelerator_parse().
         */
        get_accels(): string[];
        get_action_name(): string | null;
        get_icon_name(): string | null;
        get_label(): string | null;
        get_tooltip(): string | null;
        /**
         * Increments the reference count of `info` by one.
         * @returns the passed in @info.
         */
        ref(): ActionInfo;
        /**
         * A function similar to gtk_application_set_accels_for_action().
         *
         * `accels` must not be %NULL, it must be a %NULL-terminated array, to be
         * consistent with gtk_application_set_accels_for_action().
         * @param accels a %NULL-terminated array of accelerators in the format understood by gtk_accelerator_parse().
         */
        set_accels(accels: string[]): void;
        /**
         * Sets the action name, for example `"win.save"`.
         * @param action_name the action name.
         */
        set_action_name(action_name: string): void;
        set_icon_name(icon_name?: string | null): void;
        set_label(label?: string | null): void;
        set_tooltip(tooltip?: string | null): void;
        /**
         * Decrements the reference count of `info` by one. If the reference count drops
         * to 0, `info` is freed.
         */
        unref(): void;
    }

    type ActionInfoCentralStoreClass = typeof ActionInfoCentralStore;
    abstract class ActionInfoCentralStorePrivate {
        static $gtype: GObject.GType<ActionInfoCentralStorePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * This struct defines a set of information for a single action. It is for use
     * with gtef_action_info_store_add_entries().
     *
     * Like #GActionEntry, it is permissible to use an incomplete initialiser in
     * order to leave some of the later values as %NULL. Additional optional fields
     * may be added in the future.
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
        _init(...args: any[]): void;
    }

    type ActionInfoStoreClass = typeof ActionInfoStore;
    abstract class ActionInfoStorePrivate {
        static $gtype: GObject.GType<ActionInfoStorePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ApplicationClass = typeof Application;
    abstract class ApplicationPrivate {
        static $gtype: GObject.GType<ApplicationPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ApplicationWindowClass = typeof ApplicationWindow;
    abstract class ApplicationWindowPrivate {
        static $gtype: GObject.GType<ApplicationWindowPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type BufferClass = typeof Buffer;
    class Encoding {
        static $gtype: GObject.GType<Encoding>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](charset: string): Encoding;

        static new_from_locale(): Encoding;

        static new_utf8(): Encoding;

        // Static methods

        /**
         * Gets a list of all encodings known by #GtefEncoding.
         */
        static get_all(): Encoding[];
        /**
         * Gets the list of default candidate encodings to try when loading a file. See
         * gtk_source_file_loader_set_candidate_encodings().
         *
         * This function returns a different list depending on the current locale (i.e.
         * language, country and default encoding). The UTF-8 encoding and the current
         * locale encoding are guaranteed to be present in the returned list.
         */
        static get_default_candidates(): Encoding[];

        // Methods

        copy(): Encoding;
        equals(enc2?: Encoding | null): boolean;
        free(): void;
        /**
         * Gets the character set of the #GtefEncoding, such as "UTF-8" or "ISO-8859-1".
         * @returns the character set of the #GtefEncoding.
         */
        get_charset(): string;
        /**
         * Gets the name of the #GtefEncoding such as "Unicode" or "Western".
         * @returns the name of the #GtefEncoding.
         */
        get_name(): string;
        is_utf8(): boolean;
        /**
         * Returns the encoding name with the charset in parenthesis, for example
         * "Unicode (UTF-8)". If the name is unknown, just the charset is returned.
         * @returns a string representation. Free with g_free() when no longer needed.
         */
        to_string(): string;
    }

    type FileClass = typeof File;
    type FileLoaderClass = typeof FileLoader;
    type FileMetadataClass = typeof FileMetadata;
    type FileSaverClass = typeof FileSaver;
    abstract class FileSaverPrivate {
        static $gtype: GObject.GType<FileSaverPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FoldRegionClass = typeof FoldRegion;
    type GutterRendererFoldsClass = typeof GutterRendererFolds;
    type InfoBarClass = typeof InfoBar;
    type MenuShellClass = typeof MenuShell;
    abstract class MenuShellPrivate {
        static $gtype: GObject.GType<MenuShellPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TabClass = typeof Tab;
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
