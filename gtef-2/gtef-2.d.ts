/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gtef-2-ambient.d.ts';
import './gtef-2-import.d.ts';
/**
 * Gtef-2
 */

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
        // Own fields of Gtef-2.FileLoaderError

        /**
         * The file is too big.
         */
        TOO_BIG: number;
        /**
         * It is not possible to
         *   detect the encoding automatically.
         */
        ENCODING_AUTO_DETECTION_FAILED: number;

        // Constructors of Gtef-2.FileLoaderError

        constructor(options: { message: string; code: number });

        // Owm methods of Gtef-2.FileLoaderError

        static quark(): GLib.Quark;
    }

    /**
     * An error code used with the %GTEF_FILE_SAVER_ERROR domain.
     */
    class FileSaverError extends GLib.Error {
        // Own fields of Gtef-2.FileSaverError

        /**
         * The buffer contains invalid
         *   characters.
         */
        INVALID_CHARS: number;
        /**
         * The file is externally
         *   modified.
         */
        EXTERNALLY_MODIFIED: number;

        // Constructors of Gtef-2.FileSaverError

        constructor(options: { message: string; code: number });

        // Owm methods of Gtef-2.FileSaverError

        static quark(): GLib.Quark;
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
    module ActionInfoCentralStore {
        // Constructor properties interface
    }

    class ActionInfoCentralStore extends GObject.Object {
        // Owm methods of Gtef-2.ActionInfoCentralStore

        static get_instance(): ActionInfoCentralStore;

        // Owm methods of Gtef-2.ActionInfoCentralStore

        lookup(action_name: string): ActionInfo;
    }

    module ActionInfoStore {
        // Constructor properties interface
    }

    class ActionInfoStore extends GObject.Object {
        // Own properties of Gtef-2.ActionInfoStore

        /**
         * The associated #GtkApplication. #GtefActionInfoStore has a weak
         * reference to the #GtkApplication.
         */
        application: Gtk.Application;

        // Constructors of Gtef-2.ActionInfoStore

        static ['new'](application?: Gtk.Application | null): ActionInfoStore;

        // Owm methods of Gtef-2.ActionInfoStore

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

    module Application {
        // Constructor properties interface
    }

    class Application extends GObject.Object {
        // Own properties of Gtef-2.Application

        /**
         * The #GtkApplication.
         */
        application: Gtk.Application;

        // Owm methods of Gtef-2.Application

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

        // Owm methods of Gtef-2.Application

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

    module ApplicationWindow {
        // Constructor properties interface
    }

    class ApplicationWindow extends GObject.Object {
        // Own properties of Gtef-2.ApplicationWindow

        /**
         * The #GtkApplicationWindow.
         */
        application_window: Gtk.ApplicationWindow;
        /**
         * The #GtkApplicationWindow.
         */
        applicationWindow: Gtk.ApplicationWindow;
        /**
         * The #GtkStatusbar. %NULL by default.
         */
        statusbar: Gtk.Statusbar;

        // Owm methods of Gtef-2.ApplicationWindow

        /**
         * Returns the #GtefApplicationWindow of `gtk_window`. The returned object is
         * guaranteed to be the same for the lifetime of `gtk_window`.
         * @param gtk_window a #GtkApplicationWindow.
         */
        static get_from_gtk_application_window(gtk_window: Gtk.ApplicationWindow): ApplicationWindow;

        // Owm methods of Gtef-2.ApplicationWindow

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

    module Buffer {
        // Signal callback interfaces

        interface GtefCursorMoved {
            (): void;
        }

        // Constructor properties interface
    }

    class Buffer extends GtkSource.Buffer {
        // Own properties of Gtef-2.Buffer

        /**
         * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
         * useful for binding it to a #GSettings key.
         *
         * When the #GtkSourceBuffer:style-scheme is %NULL,
         * #GtefBuffer:gtef-style-scheme-id contains the empty string.
         */
        gtef_style_scheme_id: string;
        /**
         * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
         * useful for binding it to a #GSettings key.
         *
         * When the #GtkSourceBuffer:style-scheme is %NULL,
         * #GtefBuffer:gtef-style-scheme-id contains the empty string.
         */
        gtefStyleSchemeId: string;
        /**
         * The buffer title. See gtef_buffer_get_title().
         */
        readonly gtef_title: string;
        /**
         * The buffer title. See gtef_buffer_get_title().
         */
        readonly gtefTitle: string;

        // Constructors of Gtef-2.Buffer

        static ['new'](): Buffer;

        // Owm methods of Gtef-2.Buffer

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

    module File {
        // Constructor properties interface
    }

    class File extends GObject.Object {
        // Own properties of Gtef-2.File

        /**
         * The compression type.
         */
        readonly compression_type: CompressionType;
        /**
         * The compression type.
         */
        readonly compressionType: CompressionType;
        /**
         * The character encoding, initially %NULL. After a successful file
         * loading or saving operation, the encoding is non-%NULL.
         */
        readonly encoding: Encoding;
        /**
         * The location.
         */
        location: Gio.File;
        /**
         * The line ending type.
         */
        readonly newline_type: NewlineType;
        /**
         * The line ending type.
         */
        readonly newlineType: NewlineType;
        /**
         * Whether the file is read-only or not. The value of this property is
         * not updated automatically (there is no file monitors).
         */
        readonly read_only: boolean;
        /**
         * Whether the file is read-only or not. The value of this property is
         * not updated automatically (there is no file monitors).
         */
        readonly readOnly: boolean;
        /**
         * The file short name. See gtef_file_get_short_name().
         */
        readonly short_name: string;
        /**
         * The file short name. See gtef_file_get_short_name().
         */
        readonly shortName: string;

        // Constructors of Gtef-2.File

        static ['new'](): File;

        // Owm methods of Gtef-2.File

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

    module FileLoader {
        // Constructor properties interface
    }

    class FileLoader extends GObject.Object {
        // Own properties of Gtef-2.FileLoader

        /**
         * The #GtefBuffer to load the content into. The #GtefFileLoader object
         * has a weak reference to the buffer.
         */
        buffer: Buffer;
        /**
         * The chunk size, in bytes. The content is loaded chunk by chunk. It
         * permits to avoid allocating a too big contiguous memory area, as well
         * as reporting progress information after each chunk read.
         *
         * A small chunk size is better when loading a remote file with a slow
         * connection. For local files, the chunk size can be larger.
         */
        chunk_size: number;
        /**
         * The chunk size, in bytes. The content is loaded chunk by chunk. It
         * permits to avoid allocating a too big contiguous memory area, as well
         * as reporting progress information after each chunk read.
         *
         * A small chunk size is better when loading a remote file with a slow
         * connection. For local files, the chunk size can be larger.
         */
        chunkSize: number;
        /**
         * The #GtefFile. The #GtefFileLoader object has a weak
         * reference to the file.
         */
        file: File;
        /**
         * The #GFile to load. By default the location is taken from the
         * #GtefFile at construction time.
         */
        location: Gio.File;
        /**
         * The maximum content size, in bytes. Keep in mind that all the
         * content is loaded in memory, and when loaded into a #GtkTextBuffer
         * it takes more memory than just the content size.
         *
         * Set to -1 for unlimited size.
         */
        max_size: number;
        /**
         * The maximum content size, in bytes. Keep in mind that all the
         * content is loaded in memory, and when loaded into a #GtkTextBuffer
         * it takes more memory than just the content size.
         *
         * Set to -1 for unlimited size.
         */
        maxSize: number;

        // Constructors of Gtef-2.FileLoader

        static ['new'](buffer: Buffer, file: File): FileLoader;

        // Owm methods of Gtef-2.FileLoader

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
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        load_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a file loading started with gtef_file_loader_load_async().
         * @param result a #GAsyncResult.
         * @returns whether the content has been loaded successfully.
         */
        load_finish(result: Gio.AsyncResult): boolean;
        set_chunk_size(chunk_size: number): void;
        set_max_size(max_size: number): void;
    }

    module FileMetadata {
        // Constructor properties interface
    }

    class FileMetadata extends GObject.Object {
        // Own properties of Gtef-2.FileMetadata

        /**
         * The #GtefFile that the metadata belong to.
         */
        file: File;

        // Constructors of Gtef-2.FileMetadata

        static ['new'](file: File): FileMetadata;

        // Owm methods of Gtef-2.FileMetadata

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
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        load_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        save_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
    }

    module FileSaver {
        // Constructor properties interface
    }

    class FileSaver extends GObject.Object {
        // Own properties of Gtef-2.FileSaver

        /**
         * The #GtefBuffer to save. The #GtefFileSaver object has a weak
         * reference to the buffer.
         */
        buffer: GtkSource.Buffer;
        /**
         * The compression type.
         */
        compression_type: GtkSource.CompressionType;
        /**
         * The compression type.
         */
        compressionType: GtkSource.CompressionType;
        /**
         * The file's encoding.
         */
        encoding: Encoding;
        /**
         * The #GtefFile. The #GtefFileSaver object has a weak
         * reference to the file.
         */
        file: File;
        /**
         * File saving flags.
         */
        flags: FileSaverFlags;
        /**
         * The #GFile where to save the buffer. By default the location is taken
         * from the #GtefFile at construction time.
         */
        location: Gio.File;
        /**
         * The newline type.
         */
        newline_type: GtkSource.NewlineType;
        /**
         * The newline type.
         */
        newlineType: GtkSource.NewlineType;

        // Own fields of Gtef-2.FileSaver

        object: GObject.Object;

        // Constructors of Gtef-2.FileSaver

        static ['new'](buffer: Buffer, file: File): FileSaver;

        static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver;

        // Owm methods of Gtef-2.FileSaver

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
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        save_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        set_compression_type(compression_type: CompressionType): void;
        /**
         * Sets the encoding. If `encoding` is %NULL, the UTF-8 encoding will be set.
         * By default the encoding is taken from the #GtefFile.
         * @param encoding the new encoding, or %NULL for UTF-8.
         */
        set_encoding(encoding?: Encoding | null): void;
        set_flags(flags: FileSaverFlags): void;
        /**
         * Sets the newline type. By default the newline type is taken from the
         * #GtefFile.
         * @param newline_type the new newline type.
         */
        set_newline_type(newline_type: NewlineType): void;
    }

    module FoldRegion {
        // Constructor properties interface
    }

    class FoldRegion extends GObject.Object {
        // Own properties of Gtef-2.FoldRegion

        /**
         * The #GtkTextBuffer where the fold region is applied. The
         * #GtefFoldRegion object has a weak reference to the buffer.
         */
        buffer: Gtk.TextBuffer;
        /**
         * Whether the #GtefFoldRegion is folded or not.
         */
        folded: boolean;

        // Constructors of Gtef-2.FoldRegion

        static ['new'](buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter): FoldRegion;

        // Owm methods of Gtef-2.FoldRegion

        /**
         * Obtains iterators pointing to the start and end of the #GtefFoldRegion.
         * @returns %TRUE on success, %FALSE otherwise.
         */
        get_bounds(): boolean;
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

    module GutterRendererFolds {
        // Constructor properties interface
    }

    class GutterRendererFolds extends GtkSource.GutterRenderer {
        // Constructors of Gtef-2.GutterRendererFolds

        static ['new'](): GutterRendererFolds;

        // Owm methods of Gtef-2.GutterRendererFolds

        /**
         * Sets the folding state of the next cell to be drawn.
         *
         * This function is intended to be called from a subclass' draw method before
         * chaining-up to its parent's draw method.
         * @param state a #GtefGutterRendererFoldsState.
         */
        set_state(state: GutterRendererFoldsState): void;
    }

    module InfoBar {
        // Constructor properties interface
    }

    class InfoBar extends Gtk.InfoBar {
        // Constructors of Gtef-2.InfoBar

        static ['new'](): InfoBar;

        static new_simple(msg_type: Gtk.MessageType, primary_msg: string, secondary_msg?: string | null): InfoBar;

        // Owm methods of Gtef-2.InfoBar

        /**
         * Utility function to create a #GtkLabel suitable for a #GtkInfoBar. The
         * wrapping and alignment is configured. The label is also set as selectable,
         * for example to copy an error message and search an explanation on the web.
         */
        static create_label(): Gtk.Label;

        // Owm methods of Gtef-2.InfoBar

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
    }

    module MenuShell {
        // Signal callback interfaces

        interface MenuItemDeselected {
            (menu_item: Gtk.MenuItem): void;
        }

        interface MenuItemSelected {
            (menu_item: Gtk.MenuItem): void;
        }

        // Constructor properties interface
    }

    class MenuShell extends GObject.Object {
        // Own properties of Gtef-2.MenuShell

        /**
         * The #GtkMenuShell.
         */
        menu_shell: Gtk.MenuShell;
        /**
         * The #GtkMenuShell.
         */
        menuShell: Gtk.MenuShell;

        // Owm methods of Gtef-2.MenuShell

        /**
         * Returns the #GtefMenuShell of `gtk_menu_shell`. The returned object is
         * guaranteed to be the same for the lifetime of `gtk_menu_shell`.
         * @param gtk_menu_shell a #GtkMenuShell.
         */
        static get_from_gtk_menu_shell(gtk_menu_shell: Gtk.MenuShell): MenuShell;

        // Owm methods of Gtef-2.MenuShell

        get_menu_shell(): Gtk.MenuShell;
    }

    module Tab {
        // Constructor properties interface
    }

    class Tab extends Gtk.Grid {
        // Constructors of Gtef-2.Tab

        static ['new'](main_widget: Gtk.Widget): Tab;

        // Owm methods of Gtef-2.Tab

        /**
         * Attaches `info_bar` to `tab,` above the main widget.
         *
         * If several info bars are added, the first one will be at the top, the second
         * one below the first info bar, etc. With the main widget of `tab` at the
         * bottom.
         * @param info_bar a #GtkInfoBar.
         */
        add_info_bar(info_bar: Gtk.InfoBar): void;
    }

    module View {
        // Constructor properties interface
    }

    class View extends GtkSource.View {
        // Constructors of Gtef-2.View

        static ['new'](): View;

        // Owm methods of Gtef-2.View

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
    }

    class ActionInfo {
        // Constructors of Gtef-2.ActionInfo

        constructor(properties?: Partial<{}>);

        static ['new'](): ActionInfo;

        static new_from_entry(info_entry: ActionInfoEntry, translation_domain?: string | null): ActionInfo;

        // Owm methods of Gtef-2.ActionInfo

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

    class ActionInfoCentralStoreClass {
        // Own fields of Gtef-2.ActionInfoCentralStoreClass

        padding: any[];
    }

    class ActionInfoCentralStorePrivate {}

    /**
     * This struct defines a set of information for a single action. It is for use
     * with gtef_action_info_store_add_entries().
     *
     * Like #GActionEntry, it is permissible to use an incomplete initialiser in
     * order to leave some of the later values as %NULL. Additional optional fields
     * may be added in the future.
     */
    class ActionInfoEntry {
        // Own fields of Gtef-2.ActionInfoEntry

        action_name: string;
        icon_name: string;
        label: string;
        accel: string;
        tooltip: string;

        // Constructors of Gtef-2.ActionInfoEntry

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

    class ActionInfoStoreClass {
        // Own fields of Gtef-2.ActionInfoStoreClass

        padding: any[];
    }

    class ActionInfoStorePrivate {}

    class ApplicationClass {
        // Own fields of Gtef-2.ApplicationClass

        padding: any[];
    }

    class ApplicationPrivate {}

    class ApplicationWindowClass {
        // Own fields of Gtef-2.ApplicationWindowClass

        padding: any[];
    }

    class ApplicationWindowPrivate {}

    class BufferClass {
        // Own fields of Gtef-2.BufferClass

        padding: any[];
    }

    class Encoding {
        // Constructors of Gtef-2.Encoding

        constructor(properties?: Partial<{}>);

        static ['new'](charset: string): Encoding;

        static new_from_locale(): Encoding;

        static new_utf8(): Encoding;

        // Owm methods of Gtef-2.Encoding

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

        // Owm methods of Gtef-2.Encoding

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

    class FileClass {
        // Own fields of Gtef-2.FileClass

        padding: any[];
    }

    class FileLoaderClass {
        // Own fields of Gtef-2.FileLoaderClass

        padding: any[];
    }

    class FileMetadataClass {
        // Own fields of Gtef-2.FileMetadataClass

        padding: any[];
    }

    class FileSaverClass {
        // Own fields of Gtef-2.FileSaverClass

        padding: any[];
    }

    class FileSaverPrivate {}

    class FoldRegionClass {
        // Own fields of Gtef-2.FoldRegionClass

        padding: any[];
    }

    class GutterRendererFoldsClass {
        // Own fields of Gtef-2.GutterRendererFoldsClass

        padding: any[];
    }

    class InfoBarClass {
        // Own fields of Gtef-2.InfoBarClass

        padding: any[];
    }

    class MenuShellClass {
        // Own fields of Gtef-2.MenuShellClass

        padding: any[];
    }

    class MenuShellPrivate {}

    class TabClass {
        // Own fields of Gtef-2.TabClass

        padding: any[];
    }

    class ViewClass {
        // Own fields of Gtef-2.ViewClass

        padding: any[];
    }

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
