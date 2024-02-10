/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './devhelp-3.0-ambient.d.ts';
import './devhelp-3.0-import.d.ts';
/**
 * Devhelp-3.0
 */

import type WebKit2 from '@girs/webkit2-4.1';
import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type JavaScriptCore from '@girs/javascriptcore-4.1';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Devhelp {
    /**
     * The type of the content the link points to.
     */
    enum LinkType {
        /**
         * The top-level page of a #DhBook.
         */
        BOOK,
        /**
         * A page.
         */
        PAGE,
        /**
         * Another kind of keyword.
         */
        KEYWORD,
        /**
         * A function keyword.
         */
        FUNCTION,
        /**
         * A struct keyword.
         */
        STRUCT,
        /**
         * A macro keyword.
         */
        MACRO,
        /**
         * An enum keyword.
         */
        ENUM,
        /**
         * A typedef keyword.
         */
        TYPEDEF,
        /**
         * A property keyword.
         */
        PROPERTY,
        /**
         * A signal keyword.
         */
        SIGNAL,
    }
    /**
     * Binds `sidebar` and `notebook:`
     * - When the #DhSidebar::link-selected signal is emitted, open the URI in the
     *   active #DhWebView.
     * - On #GtkNotebook::switch-page or when the user clicks on a link, calls
     *   dh_sidebar_select_uri() with the new active URI.
     *
     * You need to call this function when the #DhNotebook is empty, i.e. before
     * adding the first #DhTab.
     *
     * Note that this function doesn't take a “self” window parameter, to be more
     * flexible: it is possible to have several pairs of #DhSidebar/#DhNotebook per
     * window, to show different #DhProfile's.
     * @param sidebar a #DhSidebar.
     * @param notebook an empty #DhNotebook.
     */
    function application_window_bind_sidebar_and_notebook(sidebar: Sidebar, notebook: Notebook): void;
    /**
     * Free the resources allocated by Devhelp. For example it unrefs the singleton
     * objects.
     *
     * It is not mandatory to call this function, it's just to be friendlier to
     * memory debugging tools. This function is meant to be called at the end of
     * main(). It can be called several times.
     */
    function finalize(): void;
    /**
     * Initializes the Devhelp library (e.g. for the internationalization).
     *
     * This function can be called several times, but is meant to be called at the
     * beginning of main(), before any other Devhelp function call.
     *
     * Since version 3.38, this function enables the WebKitGTK sandbox by calling
     * webkit_web_context_set_sandbox_enabled() on the default #WebKitWebContext.
     */
    function init(): void;
    function link_type_to_string(link_type: LinkType): string;
    enum LinkFlags {
        /**
         * No flags set.
         */
        NONE,
        /**
         * The symbol that the link points to is deprecated.
         */
        DEPRECATED,
    }
    module AssistantView {
        // Signal callback interfaces

        interface OpenUri {
            (uri: string): void;
        }

        // Constructor properties interface
    }

    class AssistantView extends WebKit2.WebView {
        // Constructors of Devhelp-3.0.AssistantView

        static ['new'](): AssistantView;

        // Owm methods of Devhelp-3.0.AssistantView

        /**
         * Search for `str` in the current assistant view.
         * @param str the search query.
         * @returns %TRUE if @str was found, %FALSE otherwise.
         */
        search(str: string): boolean;
        /**
         * Open `link` in the assistant view, if %NULL the view will be blanked.
         * @param link a #DhLink to set or %NULL.
         * @returns %TRUE if the requested link is open, %FALSE otherwise.
         */
        set_link(link?: Link | null): boolean;
    }

    module Book {
        // Signal callback interfaces

        interface Deleted {
            (): void;
        }

        interface Updated {
            (): void;
        }

        // Constructor properties interface
    }

    class Book extends GObject.Object {
        // Constructors of Devhelp-3.0.Book

        static ['new'](index_file: Gio.File): Book;

        // Owm methods of Devhelp-3.0.Book

        /**
         * Compares the #DhBook's by their IDs, with g_ascii_strcasecmp().
         * @param b a #DhBook.
         * @returns an integer less than, equal to, or greater than zero, if @a is &lt;, == or &gt; than @b.
         */
        cmp_by_id(b: Book): number;
        /**
         * Compares the #DhBook's by their title.
         * @param b a #DhBook.
         * @returns an integer less than, equal to, or greater than zero, if @a is &lt;, == or &gt; than @b.
         */
        cmp_by_title(b: Book): number;
        get_completion(): Completion;
        /**
         * Gets the book ID. In the Devhelp index file format version 2, it is actually
         * the “name”, not the ID, but “book ID” is clearer, “book name” can be confused
         * with the title.
         * @returns the book ID.
         */
        get_id(): string;
        get_index_file(): Gio.File;
        get_language(): string;
        get_links(): Link[];
        get_title(): string;
        /**
         * Gets the general structure of the book, as a tree. The tree contains only
         * #DhLink's of type %DH_LINK_TYPE_BOOK or %DH_LINK_TYPE_PAGE. The other
         * #DhLink's are not contained in the tree. To have a list of
         * &lt;emphasis&gt;all&lt;/emphasis&gt; #DhLink's part of the book, you need to call
         * dh_book_get_links().
         * @returns the tree of #DhLink's part of @book.
         */
        get_tree(): GLib.Node;
    }

    module BookList {
        // Signal callback interfaces

        interface AddBook {
            (book: Book): void;
        }

        interface RemoveBook {
            (book: Book): void;
        }

        // Constructor properties interface
    }

    class BookList extends GObject.Object {
        // Constructors of Devhelp-3.0.BookList

        static ['new'](): BookList;

        // Owm methods of Devhelp-3.0.BookList

        /**
         * Gets the default #DhBookList object. It is created with #DhBookListBuilder,
         * dh_book_list_builder_add_default_sub_book_lists() is called, and
         * dh_book_list_builder_read_books_disabled_setting() is called with the default
         * #DhSettings object as returned by dh_settings_get_default().
         */
        static get_default(): BookList;

        // Owm methods of Devhelp-3.0.BookList

        /**
         * Emits the #DhBookList::add-book signal.
         *
         * It is a programmer error to call this function if `book` is already inserted
         * in `book_list`.
         * @param book a #DhBook.
         */
        add_book(book: Book): void;
        /**
         * Gets the list of #DhBook's part of `book_list,` in no particular order. Each
         * book ID in the list is unique (see dh_book_get_id()).
         * @returns the #GList of #DhBook's part of @book_list.
         */
        get_books(): Book[];
        /**
         * Emits the #DhBookList::remove-book signal.
         *
         * It is a programmer error to call this function if `book` is not present in
         * `book_list`.
         * @param book a #DhBook.
         */
        remove_book(book: Book): void;
    }

    module BookListBuilder {
        // Constructor properties interface
    }

    class BookListBuilder extends GObject.Object {
        // Constructors of Devhelp-3.0.BookListBuilder

        static ['new'](): BookListBuilder;

        // Owm methods of Devhelp-3.0.BookListBuilder

        /**
         * Creates the default #DhBookListDirectory's and adds them to `builder` with
         * dh_book_list_builder_add_sub_book_list().
         *
         * It creates and adds a #DhBookListDirectory for the following directories (in
         * that order):
         * - `$XDG_DATA_HOME/doc/`
         * - `$XDG_DATA_HOME/gtk-doc/html/`
         * - `$XDG_DATA_HOME/devhelp/books/`
         * - For each directory in `$XDG_DATA_DIRS`:
         *   - `$xdg_data_dir/doc/`
         *   - `$xdg_data_dir/gtk-doc/html/`
         *   - `$xdg_data_dir/devhelp/books/`
         *
         * See g_get_user_data_dir() and g_get_system_data_dirs().
         *
         * Additionally, if the libdevhelp has been compiled with the `flatpak_build`
         * option, it creates and adds a #DhBookListDirectory for the following
         * directories (in that order, after the above ones):
         * - `/run/host/usr/share/doc/`
         * - `/run/host/usr/share/gtk-doc/html/`
         * - `/run/host/usr/share/devhelp/books/`
         *
         * The exact list of directories is subject to change, it is not part of the
         * API.
         */
        add_default_sub_book_lists(): void;
        /**
         * Adds `sub_book_list`.
         *
         * The #DhBookList object that will be created with
         * dh_book_list_builder_create_object() will contain all the sub-#DhBookList's
         * added with this function (and it will listen to their signals). The
         * sub-#DhBookList's must be added in order of decreasing priority (the first
         * sub-#DhBookList added has the highest priority). The priority is used in case
         * of book ID conflicts (see dh_book_get_id()).
         * @param sub_book_list a #DhBookList.
         */
        add_sub_book_list(sub_book_list: BookList): void;
        /**
         * Creates the #DhBookList. It actually creates a subclass of #DhBookList, but
         * the subclass is not exposed to the public API.
         * @returns the newly created #DhBookList object.
         */
        create_object(): BookList;
        /**
         * Sets the #DhSettings object from which to read the "books-disabled"
         * #GSettings key. If `settings` is %NULL or if this function isn't called, then
         * the #DhBookList object that will be created with
         * dh_book_list_builder_create_object() will not read a "books-disabled"
         * setting.
         *
         * With #DhBookListBuilder it is not possible to read the "books-disabled"
         * settings from several #DhSettings objects and combine them. Only the last
         * call to this function is taken into account when creating the #DhBookList
         * with dh_book_list_builder_create_object().
         * @param settings a #DhSettings, or %NULL.
         */
        read_books_disabled_setting(settings?: Settings | null): void;
    }

    module BookListDirectory {
        // Constructor properties interface
    }

    class BookListDirectory extends BookList {
        // Own properties of Devhelp-3.0.BookListDirectory

        /**
         * The directory, as a #GFile, containing a set of Devhelp books.
         */
        directory: Gio.File;

        // Constructors of Devhelp-3.0.BookListDirectory

        static ['new'](directory: Gio.File): BookListDirectory;

        // Owm methods of Devhelp-3.0.BookListDirectory

        get_directory(): Gio.File;
    }

    module BookManager {
        // Constructor properties interface
    }

    class BookManager extends GObject.Object {
        // Constructors of Devhelp-3.0.BookManager

        static ['new'](): BookManager;

        // Owm methods of Devhelp-3.0.BookManager

        populate(): void;
    }

    module BookTree {
        // Signal callback interfaces

        interface LinkSelected {
            (link: Link): void;
        }

        // Constructor properties interface
    }

    class BookTree extends Gtk.TreeView {
        // Own properties of Devhelp-3.0.BookTree

        /**
         * The #DhProfile. If set to %NULL, the default profile as returned by
         * dh_profile_get_default() is used.
         */
        profile: Profile;

        // Constructors of Devhelp-3.0.BookTree

        static ['new'](profile?: Profile | null): BookTree;

        // Owm methods of Devhelp-3.0.BookTree

        get_profile(): Profile;
        get_selected_link(): Link | null;
        /**
         * Selects the row corresponding to `uri`. It searches in the tree a #DhLink
         * being at `uri` (if it's an exact match), or containing `uri` (if `uri` contains
         * an anchor).
         * @param uri the URI to select.
         */
        select_uri(uri: string): void;
    }

    module Completion {
        // Constructor properties interface
    }

    class Completion extends GObject.Object {
        // Constructors of Devhelp-3.0.Completion

        static ['new'](): Completion;

        // Owm methods of Devhelp-3.0.Completion

        /**
         * The same as dh_completion_complete(), but aggregated for several
         * #DhCompletion objects.
         * @param completion_objects a #GList of   #DhCompletion objects.
         * @param prefix the string to complete.
         */
        static aggregate_complete(completion_objects: Completion[] | null, prefix: string): string | null;

        // Owm methods of Devhelp-3.0.Completion

        /**
         * Adds a string to the `completion` object.
         *
         * After adding all the strings you need to call dh_completion_sort().
         * @param str a string.
         */
        add_string(str: string): void;
        /**
         * This function does the equivalent of:
         * 1. Searches the data structure of `completion` to find all strings that have
         *    `prefix` as prefix.
         * 2. From the list found at step 1, find the longest prefix that still matches
         *    all the strings in the list.
         *
         * This function assumes that `prefix` and the strings contained in `completion`
         * are in UTF-8. If all the strings are valid UTF-8, then the return value will
         * also be valid UTF-8 (it won't return a partial multi-byte character).
         * @param prefix the string to complete.
         * @returns the completed prefix, or %NULL if a longer prefix has not been found. Free with g_free() when no longer needed.
         */
        complete(prefix: string): string | null;
        /**
         * Sorts all the strings. It is required to call this function after adding
         * strings with dh_completion_add_string().
         */
        sort(): void;
    }

    module KeywordModel {
        // Constructor properties interface
    }

    class KeywordModel extends GObject.Object {
        // Constructors of Devhelp-3.0.KeywordModel

        static ['new'](): KeywordModel;

        // Owm methods of Devhelp-3.0.KeywordModel

        /**
         * Searches in the #DhBookList of `profile` the list of #DhLink's that correspond
         * to `search_string,` and fills the `model` with that list (erasing the previous
         * content).
         *
         * Attention, when calling this function the `model` needs to be disconnected
         * from the #GtkTreeView, because the #GtkTreeModel signals are not emitted, to
         * improve the performances (sending a lot of signals is slow) and have a
         * simpler implementation. The previous row selection is anyway no longer
         * relevant.
         *
         * Note that there is a maximum number of matches (configured internally). When
         * the maximum is reached the search is stopped, to avoid blocking the GUI
         * (since this function runs synchronously) if the `search_string` contains for
         * example only one character. (And it is anyway not very useful to show to the
         * user tens of thousands search results).
         * @param search_string a search query.
         * @param current_book_id the ID of the book currently shown, or %NULL.
         * @param profile a #DhProfile, or %NULL for the default profile.
         * @returns the #DhLink that matches exactly @search_string, or %NULL if no such #DhLink was found within the maximum number of matches.
         */
        filter(search_string: string, current_book_id?: string | null, profile?: Profile | null): Link | null;
    }

    module Notebook {
        // Constructor properties interface
    }

    class Notebook extends Gtk.Notebook {
        // Own properties of Devhelp-3.0.Notebook

        /**
         * The #DhProfile. If set to %NULL, the default profile as returned by
         * dh_profile_get_default() is used.
         */
        profile: Profile;

        // Constructors of Devhelp-3.0.Notebook

        static ['new'](profile?: Profile | null): Notebook;

        // Owm methods of Devhelp-3.0.Notebook

        get_active_tab(): Tab | null;
        get_active_web_view(): WebView | null;
        get_all_web_views(): WebView[];
        get_profile(): Profile;
        /**
         * Creates a new #DhTab and #DhTabLabel and appends them to the #GtkNotebook.
         *
         * The #DhWebView will have the same #DhProfile as `notebook`.
         * @param uri the URI to open, or %NULL for a blank page.
         * @param switch_focus whether to call gtk_notebook_set_current_page() on the new   tab.
         */
        open_new_tab(uri: string | null, switch_focus: boolean): void;
    }

    module Profile {
        // Constructor properties interface
    }

    class Profile extends GObject.Object {
        // Owm methods of Devhelp-3.0.Profile

        /**
         * Gets the default #DhProfile object. It has the default #DhSettings object as
         * returned by dh_settings_get_default(), and the default #DhBookList object as
         * returned by dh_book_list_get_default().
         */
        static get_default(): Profile;

        // Owm methods of Devhelp-3.0.Profile

        /**
         * Gets the #DhBookList object of `profile`. The returned object is guaranteed to
         * be the same for the lifetime of `profile`.
         * @returns the #DhBookList of @profile.
         */
        get_book_list(): BookList;
        /**
         * Gets the #DhSettings object of `profile`. The returned object is guaranteed to
         * be the same for the lifetime of `profile`.
         * @returns the #DhSettings of @profile.
         */
        get_settings(): Settings;
    }

    module ProfileBuilder {
        // Constructor properties interface
    }

    class ProfileBuilder extends GObject.Object {
        // Constructors of Devhelp-3.0.ProfileBuilder

        static ['new'](): ProfileBuilder;

        // Owm methods of Devhelp-3.0.ProfileBuilder

        create_object(): Profile;
        /**
         * Sets the #DhBookList object.
         *
         * If you don't call this function, the default #DhBookList object as returned
         * by dh_book_list_get_default() will be used.
         * @param book_list a #DhBookList.
         */
        set_book_list(book_list: BookList): void;
        /**
         * Sets the #DhSettings object.
         *
         * If you don't call this function, the default #DhSettings object as returned
         * by dh_settings_get_default() will be used.
         * @param settings a #DhSettings.
         */
        set_settings(settings: Settings): void;
    }

    module SearchBar {
        // Constructor properties interface
    }

    class SearchBar extends Gtk.SearchBar {
        // Own properties of Devhelp-3.0.SearchBar

        /**
         * The associated #DhNotebook. #DhSearchBar has a strong reference to
         * the #DhNotebook.
         */
        notebook: Notebook;

        // Constructors of Devhelp-3.0.SearchBar

        static ['new'](notebook: Notebook): SearchBar;

        // Owm methods of Devhelp-3.0.SearchBar

        get_notebook(): Notebook;
        /**
         * Grabs the focus to the #DhSearchBar search entry and selects its text.
         */
        grab_focus_to_search_entry(): void;
    }

    module Settings {
        // Signal callback interfaces

        interface BooksDisabledChanged {
            (): void;
        }

        interface FontsChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class Settings extends GObject.Object {
        // Own properties of Devhelp-3.0.Settings

        /**
         * Font for text with fixed width, such as code examples.
         *
         * This property is independent of #DhSettings:use-system-fonts.
         */
        fixed_font: string;
        /**
         * Font for text with fixed width, such as code examples.
         *
         * This property is independent of #DhSettings:use-system-fonts.
         */
        fixedFont: string;
        /**
         * Whether books should be grouped by programming language in the UI.
         */
        group_books_by_language: boolean;
        /**
         * Whether books should be grouped by programming language in the UI.
         */
        groupBooksByLanguage: boolean;
        /**
         * Whether to use the system default fonts.
         */
        use_system_fonts: boolean;
        /**
         * Whether to use the system default fonts.
         */
        useSystemFonts: boolean;
        /**
         * Font for text with variable width.
         *
         * This property is independent of #DhSettings:use-system-fonts.
         */
        variable_font: string;
        /**
         * Font for text with variable width.
         *
         * This property is independent of #DhSettings:use-system-fonts.
         */
        variableFont: string;

        // Owm methods of Devhelp-3.0.Settings

        /**
         * Gets the default #DhSettings object. It has the default #GSettings paths (see
         * #DhSettingsBuilder) and dh_settings_bind_all() has been called.
         */
        static get_default(): Settings;

        // Owm methods of Devhelp-3.0.Settings

        /**
         * Binds all the #DhSettings properties to their corresponding #GSettings keys.
         */
        bind_all(): void;
        /**
         * Binds the #DhSettings:use-system-fonts, #DhSettings:variable-font and
         * #DhSettings:fixed-font properties to their corresponding #GSettings keys.
         */
        bind_fonts(): void;
        /**
         * Binds the #DhSettings:group-books-by-language property to the corresponding
         * #GSettings key.
         */
        bind_group_books_by_language(): void;
        /**
         * Tells `settings` to not emit the #DhSettings::books-disabled-changed signal
         * until dh_settings_thaw_books_disabled_changed() is called.
         *
         * A bit like g_object_freeze_notify(), except that there is no freeze count.
         *
         * This function is useful if you call dh_settings_set_book_enabled() several
         * times in a row.
         */
        freeze_books_disabled_changed(): void;
        /**
         * Warning: you probably want to use the dh_settings_get_selected_fonts()
         * function instead, to take into account the #DhSettings:use-system-fonts
         * property.
         * @returns the value of the #DhSettings:fixed-font property.
         */
        get_fixed_font(): string;
        get_group_books_by_language(): boolean;
        /**
         * If #DhSettings:use-system-fonts is %TRUE, returns the system fonts. Otherwise
         * returns the values of the #DhSettings:variable-font and
         * #DhSettings:fixed-font properties.
         */
        get_selected_fonts(): void;
        get_use_system_fonts(): boolean;
        /**
         * Warning: you probably want to use the dh_settings_get_selected_fonts()
         * function instead, to take into account the #DhSettings:use-system-fonts
         * property.
         * @returns the value of the #DhSettings:variable-font property.
         */
        get_variable_font(): string;
        /**
         * Returns whether `book` is enabled according to the "books-disabled" #GSettings
         * key. If the `book` ID is present in "books-disabled", this function returns
         * %FALSE, otherwise %TRUE is returned.
         * @param book a #DhBook.
         * @returns whether @book is enabled.
         */
        is_book_enabled(book: Book): boolean;
        /**
         * Modifies the "books-disabled" #GSettings key. It adds or removes the `book` ID
         * from "books-disabled".
         * @param book a #DhBook.
         * @param enabled the new value.
         */
        set_book_enabled(book: Book, enabled: boolean): void;
        /**
         * Sets the #DhSettings:fixed-font property.
         * @param fixed_font the new value.
         */
        set_fixed_font(fixed_font: string): void;
        /**
         * Sets the #DhSettings:group-books-by-language property.
         * @param group_books_by_language the new value.
         */
        set_group_books_by_language(group_books_by_language: boolean): void;
        /**
         * Sets the #DhSettings:use-system-fonts property.
         * @param use_system_fonts the new value.
         */
        set_use_system_fonts(use_system_fonts: boolean): void;
        /**
         * Sets the #DhSettings:variable-font property.
         * @param variable_font the new value.
         */
        set_variable_font(variable_font: string): void;
        /**
         * Stops the effect of dh_settings_freeze_books_disabled_changed(), and emits
         * the #DhSettings::books-disabled-changed signal.
         *
         * A bit like g_object_thaw_notify(), except that there is no freeze count.
         */
        thaw_books_disabled_changed(): void;
    }

    module SettingsBuilder {
        // Constructor properties interface
    }

    class SettingsBuilder extends GObject.Object {
        // Constructors of Devhelp-3.0.SettingsBuilder

        static ['new'](): SettingsBuilder;

        // Owm methods of Devhelp-3.0.SettingsBuilder

        create_object(): Settings;
        /**
         * Sets the path for the "contents" schema.
         *
         * If you don't call this function, the default path for this schema will be
         * used.
         * @param contents_path the path for the "contents" schema.
         */
        set_contents_path(contents_path: string): void;
        /**
         * Sets the path for the "fonts" schema.
         *
         * If you don't call this function, the default path for this schema will be
         * used.
         * @param fonts_path the path for the "fonts" schema.
         */
        set_fonts_path(fonts_path: string): void;
    }

    module Sidebar {
        // Signal callback interfaces

        interface LinkSelected {
            (link: Link): void;
        }

        // Constructor properties interface
    }

    class Sidebar extends Gtk.Grid {
        // Own properties of Devhelp-3.0.Sidebar

        /**
         * The #DhProfile. If set to %NULL, the default profile as returned by
         * dh_profile_get_default() is used.
         */
        profile: Profile;

        // Constructors of Devhelp-3.0.Sidebar

        static ['new'](book_manager?: BookManager | null): Sidebar;

        // Owm methods of Devhelp-3.0.Sidebar

        static new2(profile?: Profile | null): Sidebar;

        // Owm methods of Devhelp-3.0.Sidebar

        get_profile(): Profile;
        /**
         * Note: the return value of this function is not necessarily the same as the
         * last #DhLink emitted by the #DhSidebar::link-selected signal. See the
         * documentation of #DhSidebar::link-selected.
         * @returns the currently selected #DhLink in the visible #GtkTreeView of @sidebar, or %NULL if the selection is empty or if a language group row is selected. Unref with dh_link_unref() when no longer needed.
         */
        get_selected_link(): Link | null;
        /**
         * Calls dh_book_tree_select_uri().
         * @param uri the URI to select.
         */
        select_uri(uri: string): void;
        /**
         * Gives the focus to the search entry.
         */
        set_search_focus(): void;
        set_search_string(str: string): void;
    }

    module Tab {
        // Constructor properties interface
    }

    class Tab extends Gtk.Grid {
        // Own properties of Devhelp-3.0.Tab

        /**
         * The #DhWebView of the tab. If set to %NULL a #DhWebView is created
         * with the default #DhProfile.
         */
        web_view: WebView;
        /**
         * The #DhWebView of the tab. If set to %NULL a #DhWebView is created
         * with the default #DhProfile.
         */
        webView: WebView;

        // Constructors of Devhelp-3.0.Tab

        static ['new'](web_view?: WebView | null): Tab;

        // Owm methods of Devhelp-3.0.Tab

        get_web_view(): WebView;
    }

    module TabLabel {
        // Constructor properties interface
    }

    class TabLabel extends Gtk.Grid {
        // Own properties of Devhelp-3.0.TabLabel

        /**
         * The associated #DhTab. #DhTabLabel has a weak reference to the
         * #DhTab.
         */
        tab: Tab;

        // Constructors of Devhelp-3.0.TabLabel

        static ['new'](tab: Tab): TabLabel;

        // Owm methods of Devhelp-3.0.TabLabel

        get_tab(): Tab | null;
    }

    module WebView {
        // Signal callback interfaces

        interface OpenNewTab {
            (uri: string): void;
        }

        // Constructor properties interface
    }

    class WebView extends WebKit2.WebView {
        // Own properties of Devhelp-3.0.WebView

        /**
         * The #DhProfile. If set to %NULL, the default profile as returned by
         * dh_profile_get_default() is used.
         */
        profile: Profile;

        // Constructors of Devhelp-3.0.WebView

        static ['new'](profile?: Profile | null): WebView;

        // Owm methods of Devhelp-3.0.WebView

        can_reset_zoom(): boolean;
        can_zoom_in(): boolean;
        can_zoom_out(): boolean;
        /**
         * An enhanced getter function for the #WebKitWebView:title property: when that
         * property is the empty string or %NULL, this function returns “Empty Page”
         * (translated).
         * @returns the title of @view, suitable for a tab label or window title.
         */
        get_devhelp_title(): string;
        get_profile(): Profile;
        /**
         * Reset the text size to the normal size.
         */
        reset_zoom(): void;
        /**
         * Like webkit_find_controller_search_next(), but takes into account whether
         * dh_web_view_set_search_text() has been called.
         */
        search_next(): void;
        /**
         * Like webkit_find_controller_search_previous(), but takes into account whether
         * dh_web_view_set_search_text() has been called.
         */
        search_previous(): void;
        /**
         * A more convenient API (for Devhelp needs) than #WebKitFindController. If
         * `search_text` is not empty, it calls webkit_find_controller_search() if not
         * already done. If `search_text` is empty or %NULL, it calls
         * webkit_find_controller_search_finish().
         * @param search_text the search string, or %NULL.
         */
        set_search_text(search_text?: string | null): void;
        /**
         * Makes the text larger.
         */
        zoom_in(): void;
        /**
         * Makes the text smaller.
         */
        zoom_out(): void;
    }

    class AssistantViewClass {
        // Own fields of Devhelp-3.0.AssistantViewClass

        padding: any[];
    }

    class BookClass {
        // Own fields of Devhelp-3.0.BookClass

        padding: any[];
    }

    class BookListBuilderClass {
        // Own fields of Devhelp-3.0.BookListBuilderClass

        padding: any[];
    }

    class BookListBuilderPrivate {}

    class BookListClass {}

    class BookListDirectoryClass {
        // Own fields of Devhelp-3.0.BookListDirectoryClass

        padding: any[];
    }

    class BookListDirectoryPrivate {}

    class BookListPrivate {}

    class BookManagerClass {
        // Own fields of Devhelp-3.0.BookManagerClass

        padding: any[];
    }

    class BookTreeClass {
        // Own fields of Devhelp-3.0.BookTreeClass

        padding: any[];
    }

    class CompletionClass {
        // Own fields of Devhelp-3.0.CompletionClass

        padding: any[];
    }

    class CompletionPrivate {}

    class KeywordModelClass {
        // Own fields of Devhelp-3.0.KeywordModelClass

        padding: any[];
    }

    class Link {
        // Constructors of Devhelp-3.0.Link

        constructor(type: LinkType, book_link: Link, name: string, relative_url: string);

        static ['new'](type: LinkType, book_link: Link, name: string, relative_url: string): Link;

        static new_book(base_path: string, book_id: string, book_title: string, relative_url: string): Link;

        // Owm methods of Devhelp-3.0.Link

        /**
         * This function permits to know if `link` belongs to a certain page.
         *
         * `page_id` is usually the HTML filename without the `.html` extension. More
         * generally, `page_id` must be a relative URL (relative to the book base path),
         * without the anchor nor the file extension.
         *
         * For example if `link` has the relative URL `"DhLink.html#dh-link-ref"`, then
         * this function will return %TRUE if the `page_id` is `"DhLink"`.
         * @param page_id a page ID, i.e. the filename without its extension.
         * @returns whether @link belongs to @page_id.
         */
        belongs_to_page(page_id: string): boolean;
        /**
         * Compares the links `a` and `b`. This function is used to determine in which
         * order the links should be displayed.
         * @param b a #DhLink.
         * @returns an integer less than zero if @a should appear before @b; zero if there are no preferences; an integer greater than zero if @b should appear before @a.
         */
        compare(b: Link): number;
        get_book_id(): string;
        get_book_title(): string;
        get_flags(): LinkFlags;
        get_link_type(): LinkType;
        get_name(): string;
        /**
         * Gets the `link` URI, by concateneting the book base path with the `link`
         * relative URL.
         * @returns the @link URI, or %NULL if getting the URI failed. Free with g_free() when no longer needed.
         */
        get_uri(): string | null;
        match_relative_url(relative_url: string): boolean;
        /**
         * Increases the reference count of `link`.
         *
         * Not thread-safe.
         * @returns the @link.
         */
        ref(): Link;
        /**
         * Sets the flags of the link.
         * @param flags the new flags of the link.
         */
        set_flags(flags: LinkFlags): void;
        /**
         * Decreases the reference count of `link`.
         *
         * Not thread-safe.
         */
        unref(): void;
    }

    class NotebookClass {
        // Own fields of Devhelp-3.0.NotebookClass

        padding: any[];
    }

    class NotebookPrivate {}

    class ProfileBuilderClass {
        // Own fields of Devhelp-3.0.ProfileBuilderClass

        padding: any[];
    }

    class ProfileBuilderPrivate {}

    class ProfileClass {
        // Own fields of Devhelp-3.0.ProfileClass

        padding: any[];
    }

    class ProfilePrivate {}

    class SearchBarClass {
        // Own fields of Devhelp-3.0.SearchBarClass

        padding: any[];
    }

    class SearchBarPrivate {}

    class SettingsBuilderClass {
        // Own fields of Devhelp-3.0.SettingsBuilderClass

        padding: any[];
    }

    class SettingsBuilderPrivate {}

    class SettingsClass {
        // Own fields of Devhelp-3.0.SettingsClass

        padding: any[];
    }

    class SettingsPrivate {}

    class SidebarClass {
        // Own fields of Devhelp-3.0.SidebarClass

        padding: any[];
    }

    class TabClass {
        // Own fields of Devhelp-3.0.TabClass

        padding: any[];
    }

    class TabLabelClass {
        // Own fields of Devhelp-3.0.TabLabelClass

        padding: any[];
    }

    class TabLabelPrivate {}

    class TabPrivate {}

    class WebViewClass {
        // Own fields of Devhelp-3.0.WebViewClass

        padding: any[];
    }

    class WebViewPrivate {}

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

export default Devhelp;
// END
