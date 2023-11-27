
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './webkitwebextension-6.0-ambient.d.ts';
import './webkitwebextension-6.0-import.d.ts';
/**
 * WebKitWebExtension-6.0
 */

import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type JavaScriptCore from '@girs/javascriptcore-6.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';

/**
 * Enum values used to denote the stock actions for
 * #WebKitContextMenuItem<!-- -->s
 */
export enum ContextMenuAction {
    /**
     * No action, used by separator menu items.
     */
    NO_ACTION,
    /**
     * Open current link.
     */
    OPEN_LINK,
    /**
     * Open current link in a new window.
     */
    OPEN_LINK_IN_NEW_WINDOW,
    /**
     * Download link destination.
     */
    DOWNLOAD_LINK_TO_DISK,
    /**
     * Copy link location to the clipboard.
     */
    COPY_LINK_TO_CLIPBOARD,
    /**
     * Open current image in a new window.
     */
    OPEN_IMAGE_IN_NEW_WINDOW,
    /**
     * Download current image.
     */
    DOWNLOAD_IMAGE_TO_DISK,
    /**
     * Copy current image to the clipboard.
     */
    COPY_IMAGE_TO_CLIPBOARD,
    /**
     * Copy current image location to the clipboard.
     */
    COPY_IMAGE_URL_TO_CLIPBOARD,
    /**
     * Open current frame in a new window.
     */
    OPEN_FRAME_IN_NEW_WINDOW,
    /**
     * Load the previous history item.
     */
    GO_BACK,
    /**
     * Load the next history item.
     */
    GO_FORWARD,
    /**
     * Stop any ongoing loading operation.
     */
    STOP,
    /**
     * Reload the contents of current view.
     */
    RELOAD,
    /**
     * Copy current selection the clipboard.
     */
    COPY,
    /**
     * Cut current selection to the clipboard.
     */
    CUT,
    /**
     * Paste clipboard contents.
     */
    PASTE,
    /**
     * Delete current selection.
     */
    DELETE,
    /**
     * Select all text.
     */
    SELECT_ALL,
    /**
     * Input methods menu.
     */
    INPUT_METHODS,
    /**
     * Unicode menu.
     */
    UNICODE,
    /**
     * A proposed replacement for a misspelled word.
     */
    SPELLING_GUESS,
    /**
     * An indicator that spellchecking found no proposed replacements.
     */
    NO_GUESSES_FOUND,
    /**
     * Causes the spellchecker to ignore the word for this session.
     */
    IGNORE_SPELLING,
    /**
     * Causes the spellchecker to add the word to the dictionary.
     */
    LEARN_SPELLING,
    /**
     * Ignore grammar.
     */
    IGNORE_GRAMMAR,
    /**
     * Font options menu.
     */
    FONT_MENU,
    /**
     * Bold.
     */
    BOLD,
    /**
     * Italic.
     */
    ITALIC,
    /**
     * Underline.
     */
    UNDERLINE,
    /**
     * Outline.
     */
    OUTLINE,
    /**
     * Open current element in the inspector.
     */
    INSPECT_ELEMENT,
    /**
     * Open current video element in a new window.
     */
    OPEN_VIDEO_IN_NEW_WINDOW,
    /**
     * Open current audio element in a new window.
     */
    OPEN_AUDIO_IN_NEW_WINDOW,
    /**
     * Copy video link location in to the clipboard.
     */
    COPY_VIDEO_LINK_TO_CLIPBOARD,
    /**
     * Copy audio link location in to the clipboard.
     */
    COPY_AUDIO_LINK_TO_CLIPBOARD,
    /**
     * Enable or disable media controls.
     */
    TOGGLE_MEDIA_CONTROLS,
    /**
     * Enable or disable media loop.
     */
    TOGGLE_MEDIA_LOOP,
    /**
     * Show current video element in fullscreen mode.
     */
    ENTER_VIDEO_FULLSCREEN,
    /**
     * Play current media element.
     */
    MEDIA_PLAY,
    /**
     * Pause current media element.
     */
    MEDIA_PAUSE,
    /**
     * Mute current media element.
     */
    MEDIA_MUTE,
    /**
     * Download video to disk. Since 2.2
     */
    DOWNLOAD_VIDEO_TO_DISK,
    /**
     * Download audio to disk. Since 2.2
     */
    DOWNLOAD_AUDIO_TO_DISK,
    /**
     * Insert an emoji. Since 2.26
     */
    INSERT_EMOJI,
    /**
     * Paste clipboard contents as plain text. Since 2.30
     */
    PASTE_AS_PLAIN_TEXT,
    /**
     * Custom action defined by applications.
     */
    CUSTOM,
}
/**
 * Enum values used to denote errors happening when sending user messages.
 */
export enum UserMessageError {
    /**
     * The message was not handled by the receiver.
     */
    USER_MESSAGE_UNHANDLED_MESSAGE,
}
/**
 * Enum values with flags representing the context of a #WebKitHitTestResult.
 * @bitfield 
 */
export enum HitTestResultContext {
    /**
     * anywhere in the document.
     */
    DOCUMENT,
    /**
     * a hyperlink element.
     */
    LINK,
    /**
     * an image element.
     */
    IMAGE,
    /**
     * a video or audio element.
     */
    MEDIA,
    /**
     * an editable element
     */
    EDITABLE,
    /**
     * a scrollbar element.
     */
    SCROLLBAR,
    /**
     * a selected element. Since 2.8
     */
    SELECTION,
}
/**
 * Type definition for a function that will be called to initialize
 * the web extension when the web process starts.
 * @callback 
 * @param extension a #WebKitWebExtension
 */
export interface WebExtensionInitializeFunction {
    (extension: WebExtension): void
}
/**
 * Type definition for a function that will be called to initialize
 * the web extensions when the web process starts, and which receives
 * as additional argument the user data set with
 * webkit_web_context_set_web_extensions_initialization_user_data().
 * @callback 
 * @param extension a #WebKitWebExtension
 * @param user_data a #GVariant
 */
export interface WebExtensionInitializeWithUserDataFunction {
    (extension: WebExtension, user_data: GLib.Variant): void
}
export module ContextMenu {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ContextMenu {

    // Owm methods of WebKitWebExtension-6.0.WebKitWebExtension.ContextMenu

    /**
     * Adds `item` at the end of the `menu`.
     * @param item the #WebKitContextMenuItem to add
     */
    append(item: ContextMenuItem): void
    /**
     * Gets the first item in the `menu`.
     * @returns the first #WebKitContextMenuItem of @menu,    or %NULL if the #WebKitContextMenu is empty.
     */
    first(): ContextMenuItem
    /**
     * Gets the #GdkEvent that triggered the context menu. This function only returns a valid
     * #GdkEvent when called for a #WebKitContextMenu passed to #WebKitWebView::context-menu
     * signal; in all other cases, %NULL is returned.
     * 
     * The returned #GdkEvent is expected to be one of the following types:
     * <itemizedlist>
     * <listitem><para>
     * a #GdkEventButton of type %GDK_BUTTON_PRESS when the context menu was triggered with mouse.
     * </para></listitem>
     * <listitem><para>
     * a #GdkEventKey of type %GDK_KEY_PRESS if the keyboard was used to show the menu.
     * </para></listitem>
     * <listitem><para>
     * a generic #GdkEvent of type %GDK_NOTHING when the #GtkWidget::popup-menu signal was used to show the context menu.
     * </para></listitem>
     * </itemizedlist>
     * @returns the menu event or %NULL.
     */
    get_event(): Gdk.Event
    /**
     * Gets the item at the given position in the `menu`.
     * @param position the position of the item, counting from 0
     * @returns the #WebKitContextMenuItem at position @position in @menu,    or %NULL if the position is off the end of the @menu.
     */
    get_item_at_position(position: number): ContextMenuItem
    /**
     * Returns the item list of `menu`.
     * @returns a #GList of    #WebKitContextMenuItem<!-- -->s
     */
    get_items(): ContextMenuItem[]
    /**
     * Gets the length of the `menu`.
     * @returns the number of #WebKitContextMenuItem<!-- -->s in @menu
     */
    get_n_items(): number
    /**
     * Gets the user data of `menu`.
     * 
     * This function can be used from the UI Process to get user data previously set
     * from the Web Process with webkit_context_menu_set_user_data().
     * @returns the user data of @menu, or %NULL if @menu doesn't have user data
     */
    get_user_data(): GLib.Variant
    /**
     * Inserts `item` into the `menu` at the given position.
     * 
     * If `position` is negative, or is larger than the number of items
     * in the #WebKitContextMenu, the item is added on to the end of
     * the `menu`. The first position is 0.
     * @param item the #WebKitContextMenuItem to add
     * @param position the position to insert the item
     */
    insert(item: ContextMenuItem, position: number): void
    /**
     * Gets the last item in the `menu`.
     * @returns the last #WebKitContextMenuItem of @menu,    or %NULL if the #WebKitContextMenu is empty.
     */
    last(): ContextMenuItem
    /**
     * Moves `item` to the given position in the `menu`.
     * 
     * If `position` is negative, or is larger than the number of items
     * in the #WebKitContextMenu, the item is added on to the end of
     * the `menu`.
     * The first position is 0.
     * @param item the #WebKitContextMenuItem to add
     * @param position the new position to move the item
     */
    move_item(item: ContextMenuItem, position: number): void
    /**
     * Adds `item` at the beginning of the `menu`.
     * @param item the #WebKitContextMenuItem to add
     */
    prepend(item: ContextMenuItem): void
    /**
     * Removes `item` from the `menu`.
     * 
     * See also webkit_context_menu_remove_all() to remove all items.
     * @param item the #WebKitContextMenuItem to remove
     */
    remove(item: ContextMenuItem): void
    /**
     * Removes all items of the `menu`.
     */
    remove_all(): void
    /**
     * Sets user data to `menu`.
     * 
     * This function can be used from a Web Process extension to set user data
     * that can be retrieved from the UI Process using webkit_context_menu_get_user_data().
     * If the `user_data` #GVariant is floating, it is consumed.
     * @param user_data a #GVariant
     */
    set_user_data(user_data: GLib.Variant): void

    // Class property signals of WebKitWebExtension-6.0.WebKitWebExtension.ContextMenu

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents the context menu in a #WebKitWebView.
 * 
 * #WebKitContextMenu represents a context menu containing
 * #WebKitContextMenuItem<!-- -->s in a #WebKitWebView.
 * 
 * When a #WebKitWebView is about to display the context menu, it
 * emits the #WebKitWebView::context-menu signal, which has the
 * #WebKitContextMenu as an argument. You can modify it, adding new
 * submenus that you can create with webkit_context_menu_new(), adding
 * new #WebKitContextMenuItem<!-- -->s with
 * webkit_context_menu_prepend(), webkit_context_menu_append() or
 * webkit_context_menu_insert(), maybe after having removed the
 * existing ones with webkit_context_menu_remove_all().
 * @class 
 */
export class ContextMenu extends GObject.Object {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.ContextMenu

    static name: string
    static $gtype: GObject.GType<ContextMenu>

    // Constructors of WebKitWebExtension-6.0.WebKitWebExtension.ContextMenu

    constructor(config?: ContextMenu.ConstructorProperties) 
    /**
     * Creates a new #WebKitContextMenu object.
     * 
     * Creates a new #WebKitContextMenu object to be used as a submenu of an existing
     * #WebKitContextMenu. The context menu of a #WebKitWebView is created by the view
     * and passed as an argument of #WebKitWebView::context-menu signal.
     * To add items to the menu use webkit_context_menu_prepend(),
     * webkit_context_menu_append() or webkit_context_menu_insert().
     * See also webkit_context_menu_new_with_items() to create a #WebKitContextMenu with
     * a list of initial items.
     * @constructor 
     * @returns The newly created #WebKitContextMenu object
     */
    constructor() 
    /**
     * Creates a new #WebKitContextMenu object.
     * 
     * Creates a new #WebKitContextMenu object to be used as a submenu of an existing
     * #WebKitContextMenu. The context menu of a #WebKitWebView is created by the view
     * and passed as an argument of #WebKitWebView::context-menu signal.
     * To add items to the menu use webkit_context_menu_prepend(),
     * webkit_context_menu_append() or webkit_context_menu_insert().
     * See also webkit_context_menu_new_with_items() to create a #WebKitContextMenu with
     * a list of initial items.
     * @constructor 
     * @returns The newly created #WebKitContextMenu object
     */
    static new(): ContextMenu
    /**
     * Creates a new #WebKitContextMenu object with the given items.
     * 
     * Creates a new #WebKitContextMenu object to be used as a submenu of an existing
     * #WebKitContextMenu with the given initial items.
     * See also webkit_context_menu_new()
     * @constructor 
     * @param items a #GList of #WebKitContextMenuItem
     * @returns The newly created #WebKitContextMenu object
     */
    static new_with_items(items: ContextMenuItem[]): ContextMenu
    _init(config?: ContextMenu.ConstructorProperties): void
}

export module ContextMenuItem {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
    }

}

export interface ContextMenuItem {

    // Owm methods of WebKitWebExtension-6.0.WebKitWebExtension.ContextMenuItem

    /**
     * Gets the action associated to `item` as a #GAction.
     * @returns the #GAction associated to the #WebKitContextMenuItem,    or %NULL if @item is a separator.
     */
    get_gaction(): Gio.Action
    /**
     * Gets the #WebKitContextMenuAction of `item`.
     * 
     * If the #WebKitContextMenuItem was not
     * created for a stock action %WEBKIT_CONTEXT_MENU_ACTION_CUSTOM will be
     * returned. If the #WebKitContextMenuItem is a separator %WEBKIT_CONTEXT_MENU_ACTION_NO_ACTION
     * will be returned.
     * @returns the #WebKitContextMenuAction of @item
     */
    get_stock_action(): ContextMenuAction
    /**
     * Gets the submenu of `item`.
     * @returns the #WebKitContextMenu representing the submenu of    @item or %NULL if @item doesn't have a submenu.
     */
    get_submenu(): ContextMenu
    /**
     * Checks whether `item` is a separator.
     * @returns %TRUE is @item is a separator or %FALSE otherwise
     */
    is_separator(): boolean
    /**
     * Sets or replaces the `item` submenu.
     * 
     * If `submenu` is %NULL the current
     * submenu of `item` is removed.
     * @param submenu a #WebKitContextMenu
     */
    set_submenu(submenu: ContextMenu | null): void

    // Class property signals of WebKitWebExtension-6.0.WebKitWebExtension.ContextMenuItem

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * One item of a #WebKitContextMenu.
 * 
 * The #WebKitContextMenu is composed of #WebKitContextMenuItem<!--
 * -->s. These items can be created from a #GtkAction, from a
 * #WebKitContextMenuAction or from a #WebKitContextMenuAction and a
 * label. These #WebKitContextMenuAction<!-- -->s denote stock actions
 * for the items. You can also create separators and submenus.
 * @class 
 */
export class ContextMenuItem extends GObject.InitiallyUnowned {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.ContextMenuItem

    static name: string
    static $gtype: GObject.GType<ContextMenuItem>

    // Constructors of WebKitWebExtension-6.0.WebKitWebExtension.ContextMenuItem

    constructor(config?: ContextMenuItem.ConstructorProperties) 
    /**
     * Creates a new #WebKitContextMenuItem for the given `action` and `label`.
     * 
     * On activation
     * `target` will be passed as parameter to the callback.
     * @constructor 
     * @param action a #GAction
     * @param label the menu item label text
     * @param target a #GVariant to use as the action target
     * @returns the newly created #WebKitContextMenuItem object.
     */
    static new_from_gaction(action: Gio.Action, label: string | null, target: GLib.Variant | null): ContextMenuItem
    /**
     * Creates a new #WebKitContextMenuItem for the given stock action.
     * 
     * Stock actions are handled automatically by WebKit so that, for example,
     * when a menu item created with a %WEBKIT_CONTEXT_MENU_ACTION_STOP is
     * activated the action associated will be handled by WebKit and the current
     * load operation will be stopped. You can get the #GAction of a
     * #WebKitContextMenuItem created with a #WebKitContextMenuAction with
     * webkit_context_menu_item_get_gaction() and connect to the #GSimpleAction::activate signal
     * to be notified when the item is activated, but you can't prevent the associated
     * action from being performed.
     * @constructor 
     * @param action a #WebKitContextMenuAction stock action
     * @returns the newly created #WebKitContextMenuItem object.
     */
    static new_from_stock_action(action: ContextMenuAction): ContextMenuItem
    /**
     * Creates a new #WebKitContextMenuItem for the given stock action using the given `label`.
     * 
     * Stock actions have a predefined label, this method can be used to create a
     * #WebKitContextMenuItem for a #WebKitContextMenuAction but using a custom label.
     * @constructor 
     * @param action a #WebKitContextMenuAction stock action
     * @param label a custom label text to use instead of the predefined one
     * @returns the newly created #WebKitContextMenuItem object.
     */
    static new_from_stock_action_with_label(action: ContextMenuAction, label: string | null): ContextMenuItem
    /**
     * Creates a new #WebKitContextMenuItem representing a separator.
     * @constructor 
     * @returns the newly created #WebKitContextMenuItem object.
     */
    static new_separator(): ContextMenuItem
    /**
     * Creates a new #WebKitContextMenuItem using the given `label` with a submenu.
     * @constructor 
     * @param label the menu item label text
     * @param submenu a #WebKitContextMenu to set
     * @returns the newly created #WebKitContextMenuItem object.
     */
    static new_with_submenu(label: string | null, submenu: ContextMenu): ContextMenuItem
    _init(config?: ContextMenuItem.ConstructorProperties): void
}

export module Frame {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Frame {

    // Owm methods of WebKitWebExtension-6.0.WebKitWebExtension.Frame

    /**
     * Gets the process-unique identifier of this #WebKitFrame. No other
     * frame in the same web process will have the same ID; however, frames
     * in other web processes may.
     * @returns the identifier of @frame
     */
    get_id(): number
    /**
     * Get the JavaScript execution context of `frame`. Use this function to bridge
     * between the WebKit and JavaScriptCore APIs.
     * @returns the #JSCContext for the JavaScript execution context of @frame.
     */
    get_js_context(): JavaScriptCore.Context
    /**
     * Get the JavaScript execution context of `frame` for the given #WebKitScriptWorld.
     * @param world a #WebKitScriptWorld
     * @returns the #JSCContext for the JavaScript execution context of @frame for @world.
     */
    get_js_context_for_script_world(world: ScriptWorld): JavaScriptCore.Context
    /**
     * Gets the current active URI of `frame`.
     * @returns the current active URI of @frame or %NULL if nothing has been    loaded yet.
     */
    get_uri(): string | null
    /**
     * Gets whether `frame` is the main frame of a #WebKitWebPage
     * @returns %TRUE if @frame is a main frame or %FALSE otherwise
     */
    is_main_frame(): boolean

    // Class property signals of WebKitWebExtension-6.0.WebKitWebExtension.Frame

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A web page frame.
 * 
 * Each `WebKitWebPage` has at least one main frame, and can have any number
 * of subframes.
 * @class 
 */
export class Frame extends GObject.Object {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.Frame

    static name: string
    static $gtype: GObject.GType<Frame>

    // Constructors of WebKitWebExtension-6.0.WebKitWebExtension.Frame

    constructor(config?: Frame.ConstructorProperties) 
    _init(config?: Frame.ConstructorProperties): void
}

export module HitTestResult {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKitWebExtension-6.0.WebKitWebExtension.HitTestResult

        /**
         * Bitmask of #WebKitHitTestResultContext flags representing
         * the context of the #WebKitHitTestResult.
         */
        context?: number | null
        /**
         * The URI of the image if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE
         * is present in #WebKitHitTestResult:context
         */
        image_uri?: string | null
        /**
         * The label of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        link_label?: string | null
        /**
         * The title of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        link_title?: string | null
        /**
         * The URI of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        link_uri?: string | null
        /**
         * The URI of the media if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA
         * is present in #WebKitHitTestResult:context
         */
        media_uri?: string | null
        /**
         * The URI of the image if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE
         * is present in #WebKitHitTestResult:context
         */
        imageUri?: string | null
        /**
         * The label of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        linkLabel?: string | null
        /**
         * The title of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        linkTitle?: string | null
        /**
         * The URI of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        linkUri?: string | null
        /**
         * The URI of the media if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA
         * is present in #WebKitHitTestResult:context
         */
        mediaUri?: string | null
    }

}

export interface HitTestResult {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.HitTestResult

    /**
     * Bitmask of #WebKitHitTestResultContext flags representing
     * the context of the #WebKitHitTestResult.
     */
    readonly context: number
    /**
     * The URI of the image if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE
     * is present in #WebKitHitTestResult:context
     */
    readonly image_uri: string | null
    /**
     * The URI of the image if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE
     * is present in #WebKitHitTestResult:context
     */
    readonly imageUri: string | null
    /**
     * The label of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    readonly link_label: string | null
    /**
     * The label of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    readonly linkLabel: string | null
    /**
     * The title of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    readonly link_title: string | null
    /**
     * The title of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    readonly linkTitle: string | null
    /**
     * The URI of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    readonly link_uri: string | null
    /**
     * The URI of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    readonly linkUri: string | null
    /**
     * The URI of the media if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA
     * is present in #WebKitHitTestResult:context
     */
    readonly media_uri: string | null
    /**
     * The URI of the media if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA
     * is present in #WebKitHitTestResult:context
     */
    readonly mediaUri: string | null

    // Owm methods of WebKitWebExtension-6.0.WebKitWebExtension.HitTestResult

    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_EDITABLE flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's an editable element at the coordinates of the @hit_test_result,    or %FALSE otherwise
     */
    context_is_editable(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's an image element in the coordinates of the Hit Test,    or %FALSE otherwise
     */
    context_is_image(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's a link element in the coordinates of the Hit Test,    or %FALSE otherwise
     */
    context_is_link(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's a media element in the coordinates of the Hit Test,    or %FALSE otherwise
     */
    context_is_media(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SCROLLBAR flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's a scrollbar element at the coordinates of the @hit_test_result,    or %FALSE otherwise
     */
    context_is_scrollbar(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SELECTION flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's a selected element at the coordinates of the @hit_test_result,    or %FALSE otherwise
     */
    context_is_selection(): boolean
    /**
     * Gets the value of the #WebKitHitTestResult:context property.
     * @returns a bitmask of #WebKitHitTestResultContext flags
     */
    get_context(): number
    /**
     * Gets the value of the #WebKitHitTestResult:image-uri property.
     * @returns the URI of the image element in the coordinates of the Hit Test,    or %NULL if there isn't an image element in @hit_test_result context
     */
    get_image_uri(): string | null
    /**
     * Gets the value of the #WebKitHitTestResult:link-label property.
     * @returns the label of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context or the    link element doesn't have a label
     */
    get_link_label(): string | null
    /**
     * Gets the value of the #WebKitHitTestResult:link-title property.
     * @returns the title of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context or the    link element doesn't have a title
     */
    get_link_title(): string | null
    /**
     * Gets the value of the #WebKitHitTestResult:link-uri property.
     * @returns the URI of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context
     */
    get_link_uri(): string | null
    /**
     * Gets the value of the #WebKitHitTestResult:media-uri property.
     * @returns the URI of the media element in the coordinates of the Hit Test,    or %NULL if there isn't a media element in @hit_test_result context
     */
    get_media_uri(): string | null

    // Class property signals of WebKitWebExtension-6.0.WebKitWebExtension.HitTestResult

    connect(sigName: "notify::context", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::image-uri", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-uri", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-uri", ...args: any[]): void
    connect(sigName: "notify::link-label", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link-label", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::link-label", ...args: any[]): void
    connect(sigName: "notify::link-title", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link-title", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::link-title", ...args: any[]): void
    connect(sigName: "notify::link-uri", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link-uri", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::link-uri", ...args: any[]): void
    connect(sigName: "notify::media-uri", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-uri", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Result of a Hit Test.
 * 
 * A Hit Test is an operation to get context information about a given
 * point in a #WebKitWebView. #WebKitHitTestResult represents the
 * result of a Hit Test. It provides context information about what is
 * at the coordinates of the Hit Test, such as if there's a link,
 * an image or a media.
 * 
 * You can get the context of the HitTestResult with
 * webkit_hit_test_result_get_context() that returns a bitmask of
 * #WebKitHitTestResultContext flags. You can also use
 * webkit_hit_test_result_context_is_link(), webkit_hit_test_result_context_is_image() and
 * webkit_hit_test_result_context_is_media() to determine whether there's
 * a link, image or a media element at the coordinates of the Hit Test.
 * Note that it's possible that several #WebKitHitTestResultContext flags
 * are active at the same time, for example if there's a link containing an image.
 * 
 * When the mouse is moved over a #WebKitWebView a Hit Test is performed
 * for the mouse coordinates and #WebKitWebView::mouse-target-changed
 * signal is emitted with a #WebKitHitTestResult.
 * @class 
 */
export class HitTestResult extends GObject.Object {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.HitTestResult

    static name: string
    static $gtype: GObject.GType<HitTestResult>

    // Constructors of WebKitWebExtension-6.0.WebKitWebExtension.HitTestResult

    constructor(config?: HitTestResult.ConstructorProperties) 
    _init(config?: HitTestResult.ConstructorProperties): void
}

export module ScriptWorld {

    // Signal callback interfaces

    /**
     * Signal callback interface for `window-object-cleared`
     */
    export interface WindowObjectClearedSignalCallback {
        ($obj: ScriptWorld, page: WebPage, frame: Frame): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ScriptWorld {

    // Owm methods of WebKitWebExtension-6.0.WebKitWebExtension.ScriptWorld

    /**
     * Get the name of a #WebKitScriptWorld.
     * @returns the name of @world
     */
    get_name(): string | null

    // Own signals of WebKitWebExtension-6.0.WebKitWebExtension.ScriptWorld

    connect(sigName: "window-object-cleared", callback: ScriptWorld.WindowObjectClearedSignalCallback): number
    connect_after(sigName: "window-object-cleared", callback: ScriptWorld.WindowObjectClearedSignalCallback): number
    emit(sigName: "window-object-cleared", page: WebPage, frame: Frame, ...args: any[]): void

    // Class property signals of WebKitWebExtension-6.0.WebKitWebExtension.ScriptWorld

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ScriptWorld extends GObject.Object {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.ScriptWorld

    static name: string
    static $gtype: GObject.GType<ScriptWorld>

    // Constructors of WebKitWebExtension-6.0.WebKitWebExtension.ScriptWorld

    constructor(config?: ScriptWorld.ConstructorProperties) 
    /**
     * Creates a new isolated #WebKitScriptWorld. Scripts executed in
     * isolated worlds have access to the DOM but not to other variable
     * or functions created by the page.
     * The #WebKitScriptWorld is created with a generated unique name. Use
     * webkit_script_world_new_with_name() if you want to create it with a
     * custom name.
     * You can get the JavaScript execution context of a #WebKitScriptWorld
     * for a given #WebKitFrame with webkit_frame_get_javascript_context_for_script_world().
     * @constructor 
     * @returns a new isolated #WebKitScriptWorld
     */
    constructor() 
    /**
     * Creates a new isolated #WebKitScriptWorld. Scripts executed in
     * isolated worlds have access to the DOM but not to other variable
     * or functions created by the page.
     * The #WebKitScriptWorld is created with a generated unique name. Use
     * webkit_script_world_new_with_name() if you want to create it with a
     * custom name.
     * You can get the JavaScript execution context of a #WebKitScriptWorld
     * for a given #WebKitFrame with webkit_frame_get_javascript_context_for_script_world().
     * @constructor 
     * @returns a new isolated #WebKitScriptWorld
     */
    static new(): ScriptWorld
    /**
     * Creates a new isolated #WebKitScriptWorld with a name. Scripts executed in
     * isolated worlds have access to the DOM but not to other variable
     * or functions created by the page.
     * You can get the JavaScript execution context of a #WebKitScriptWorld
     * for a given #WebKitFrame with webkit_frame_get_javascript_context_for_script_world().
     * @constructor 
     * @param name a name for the script world
     * @returns a new isolated #WebKitScriptWorld
     */
    static new_with_name(name: string | null): ScriptWorld
    _init(config?: ScriptWorld.ConstructorProperties): void
    /**
     * Get the default #WebKitScriptWorld. This is the normal script world
     * where all scripts are executed by default.
     * You can get the JavaScript execution context of a #WebKitScriptWorld
     * for a given #WebKitFrame with webkit_frame_get_javascript_context_for_script_world().
     * @returns the default #WebKitScriptWorld
     */
    static get_default(): ScriptWorld
}

export module URIRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKitWebExtension-6.0.WebKitWebExtension.URIRequest

        /**
         * The URI to which the request will be made.
         */
        uri?: string | null
    }

}

export interface URIRequest {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.URIRequest

    /**
     * The URI to which the request will be made.
     */
    uri: string | null

    // Owm methods of WebKitWebExtension-6.0.WebKitWebExtension.URIRequest

    /**
     * Get the HTTP headers of a #WebKitURIRequest as a #SoupMessageHeaders.
     * @returns a #SoupMessageHeaders with the HTTP headers of @request    or %NULL if @request is not an HTTP request.
     */
    get_http_headers(): Soup.MessageHeaders
    /**
     * Get the HTTP method of the #WebKitURIRequest.
     * @returns the HTTP method of the #WebKitURIRequest or %NULL if @request is not    an HTTP request.
     */
    get_http_method(): string | null
    /**
     * Obtains the request URI.
     * @returns request URI, as a string.
     */
    get_uri(): string | null
    /**
     * Set the URI of `request`
     * @param uri an URI
     */
    set_uri(uri: string | null): void

    // Class property signals of WebKitWebExtension-6.0.WebKitWebExtension.URIRequest

    connect(sigName: "notify::uri", callback: (($obj: URIRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: URIRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a URI request.
 * 
 * A #WebKitURIRequest can be created with a URI using the
 * webkit_uri_request_new() method, and you can get the URI of an
 * existing request with the webkit_uri_request_get_uri() one.
 * @class 
 */
export class URIRequest extends GObject.Object {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.URIRequest

    static name: string
    static $gtype: GObject.GType<URIRequest>

    // Constructors of WebKitWebExtension-6.0.WebKitWebExtension.URIRequest

    constructor(config?: URIRequest.ConstructorProperties) 
    /**
     * Creates a new #WebKitURIRequest for the given URI.
     * @constructor 
     * @param uri an URI
     * @returns a new #WebKitURIRequest
     */
    constructor(uri: string | null) 
    /**
     * Creates a new #WebKitURIRequest for the given URI.
     * @constructor 
     * @param uri an URI
     * @returns a new #WebKitURIRequest
     */
    static new(uri: string | null): URIRequest
    _init(config?: URIRequest.ConstructorProperties): void
}

export module URIResponse {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface URIResponse {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.URIResponse

    /**
     * The expected content length of the response.
     */
    readonly content_length: number
    /**
     * The expected content length of the response.
     */
    readonly contentLength: number
    /**
     * The HTTP headers of the response, or %NULL if the response is not an HTTP response.
     */
    readonly http_headers: Soup.MessageHeaders
    /**
     * The HTTP headers of the response, or %NULL if the response is not an HTTP response.
     */
    readonly httpHeaders: Soup.MessageHeaders
    /**
     * The MIME type of the response.
     */
    readonly mime_type: string | null
    /**
     * The MIME type of the response.
     */
    readonly mimeType: string | null
    /**
     * The status code of the response as returned by the server.
     */
    readonly status_code: number
    /**
     * The status code of the response as returned by the server.
     */
    readonly statusCode: number
    /**
     * The suggested filename for the URI response.
     */
    readonly suggested_filename: string | null
    /**
     * The suggested filename for the URI response.
     */
    readonly suggestedFilename: string | null
    /**
     * The URI for which the response was made.
     */
    readonly uri: string | null

    // Owm methods of WebKitWebExtension-6.0.WebKitWebExtension.URIResponse

    /**
     * Get the expected content length of the #WebKitURIResponse.
     * 
     * It can be 0 if the server provided an incorrect or missing Content-Length.
     * @returns the expected content length of @response.
     */
    get_content_length(): number
    /**
     * Get the HTTP headers of a #WebKitURIResponse as a #SoupMessageHeaders.
     * @returns a #SoupMessageHeaders with the HTTP headers of @response    or %NULL if @response is not an HTTP response.
     */
    get_http_headers(): Soup.MessageHeaders
    /**
     * Gets the MIME type of the response.
     * @returns MIME type, as a string.
     */
    get_mime_type(): string | null
    /**
     * Get the status code of the #WebKitURIResponse.
     * 
     * Get the status code of the #WebKitURIResponse as returned by
     * the server. It will normally be a #SoupKnownStatusCode, for
     * example %SOUP_STATUS_OK, though the server can respond with any
     * unsigned integer.
     * @returns the status code of @response
     */
    get_status_code(): number
    /**
     * Get the suggested filename for `response`.
     * 
     * Get the suggested filename for `response,` as specified by
     * the 'Content-Disposition' HTTP header, or %NULL if it's not
     * present.
     * @returns the suggested filename or %NULL if    the 'Content-Disposition' HTTP header is not present.
     */
    get_suggested_filename(): string | null
    /**
     * Gets the URI which resulted in the response.
     * @returns response URI, as a string.
     */
    get_uri(): string | null

    // Class property signals of WebKitWebExtension-6.0.WebKitWebExtension.URIResponse

    connect(sigName: "notify::content-length", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-length", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-length", ...args: any[]): void
    connect(sigName: "notify::http-headers", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-headers", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::http-headers", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::status-code", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-code", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status-code", ...args: any[]): void
    connect(sigName: "notify::suggested-filename", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suggested-filename", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::suggested-filename", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents an URI response.
 * 
 * A #WebKitURIResponse contains information such as the URI, the
 * status code, the content length, the mime type, the HTTP status or
 * the suggested filename.
 * @class 
 */
export class URIResponse extends GObject.Object {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.URIResponse

    static name: string
    static $gtype: GObject.GType<URIResponse>

    // Constructors of WebKitWebExtension-6.0.WebKitWebExtension.URIResponse

    constructor(config?: URIResponse.ConstructorProperties) 
    _init(config?: URIResponse.ConstructorProperties): void
}

export module UserMessage {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of WebKitWebExtension-6.0.WebKitWebExtension.UserMessage

        /**
         * The UNIX file descriptors of the user message.
         */
        fd_list?: Gio.UnixFDList | null
        /**
         * The name of the user message.
         */
        name?: string | null
        /**
         * The parameters of the user message as a #GVariant, or %NULL
         * if the message doesn't include parameters. Note that only complete types are
         * allowed.
         */
        parameters?: GLib.Variant | null
        /**
         * The UNIX file descriptors of the user message.
         */
        fdList?: Gio.UnixFDList | null
    }

}

export interface UserMessage {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.UserMessage

    /**
     * The UNIX file descriptors of the user message.
     */
    readonly fd_list: Gio.UnixFDList
    /**
     * The UNIX file descriptors of the user message.
     */
    readonly fdList: Gio.UnixFDList
    /**
     * The name of the user message.
     */
    readonly name: string | null
    /**
     * The parameters of the user message as a #GVariant, or %NULL
     * if the message doesn't include parameters. Note that only complete types are
     * allowed.
     */
    readonly parameters: GLib.Variant

    // Owm methods of WebKitWebExtension-6.0.WebKitWebExtension.UserMessage

    /**
     * Get the `message` list of file descritpor.
     * @returns the message list of file descriptors
     */
    get_fd_list(): Gio.UnixFDList | null
    /**
     * Get the `message` name.
     * @returns the message name
     */
    get_name(): string | null
    /**
     * Get the `message` parameters.
     * @returns the message parameters
     */
    get_parameters(): GLib.Variant | null
    /**
     * Send a reply to an user message.
     * 
     * If `reply` is floating, it's consumed.
     * You can only send a reply to a #WebKitUserMessage that has been
     * received.
     * @param reply a #WebKitUserMessage to send as reply
     */
    send_reply(reply: UserMessage): void

    // Class property signals of WebKitWebExtension-6.0.WebKitWebExtension.UserMessage

    connect(sigName: "notify::fd-list", callback: (($obj: UserMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fd-list", callback: (($obj: UserMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fd-list", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: UserMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: UserMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: UserMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: UserMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Message that can be sent between the UI process and web extensions.
 * 
 * A WebKitUserMessage is a message that can be used for the communication between the UI process
 * and web extensions. A WebKitUserMessage always has a name, and it can also include parameters and
 * UNIX file descriptors. Messages can be sent from a #WebKitWebContext to all #WebKitWebExtension<!-- -->s,
 * from a #WebKitWebExtension to its corresponding #WebKitWebContext, and from a #WebKitWebView to its
 * corresponding #WebKitWebPage (and vice versa). One to one messages can be replied to directly with
 * webkit_user_message_send_reply().
 * @class 
 */
export class UserMessage extends GObject.InitiallyUnowned {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.UserMessage

    static name: string
    static $gtype: GObject.GType<UserMessage>

    // Constructors of WebKitWebExtension-6.0.WebKitWebExtension.UserMessage

    constructor(config?: UserMessage.ConstructorProperties) 
    /**
     * Create a new #WebKitUserMessage with `name`.
     * @constructor 
     * @param name the message name
     * @param parameters the message parameters as a #GVariant, or %NULL
     * @returns the newly created #WebKitUserMessage object.
     */
    constructor(name: string | null, parameters: GLib.Variant | null) 
    /**
     * Create a new #WebKitUserMessage with `name`.
     * @constructor 
     * @param name the message name
     * @param parameters the message parameters as a #GVariant, or %NULL
     * @returns the newly created #WebKitUserMessage object.
     */
    static new(name: string | null, parameters: GLib.Variant | null): UserMessage
    /**
     * Create a new #WebKitUserMessage including also a list of UNIX file descriptors to be sent.
     * @constructor 
     * @param name the message name
     * @param parameters the message parameters as a #GVariant
     * @param fd_list the message file descriptors
     * @returns the newly created #WebKitUserMessage object.
     */
    static new_with_fd_list(name: string | null, parameters: GLib.Variant | null, fd_list: Gio.UnixFDList | null): UserMessage
    _init(config?: UserMessage.ConstructorProperties): void
    /**
     * Gets the quark for the domain of user message errors.
     * @returns user message error domain.
     */
    static error_quark(): GLib.Quark
}

export module WebEditor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `selection-changed`
     */
    export interface SelectionChangedSignalCallback {
        ($obj: WebEditor): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WebEditor {

    // Owm methods of WebKitWebExtension-6.0.WebKitWebExtension.WebEditor

    /**
     * Gets the #WebKitWebPage that is associated with the #WebKitWebEditor.
     * @returns the associated #WebKitWebPage
     */
    get_page(): WebPage

    // Own signals of WebKitWebExtension-6.0.WebKitWebExtension.WebEditor

    connect(sigName: "selection-changed", callback: WebEditor.SelectionChangedSignalCallback): number
    connect_after(sigName: "selection-changed", callback: WebEditor.SelectionChangedSignalCallback): number
    emit(sigName: "selection-changed", ...args: any[]): void

    // Class property signals of WebKitWebExtension-6.0.WebKitWebExtension.WebEditor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Access to editing capabilities of a #WebKitWebPage.
 * 
 * The WebKitWebEditor provides access to various editing capabilities of
 * a #WebKitWebPage such as a possibility to react to the current selection in
 * #WebKitWebPage.
 * @class 
 */
export class WebEditor extends GObject.Object {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.WebEditor

    static name: string
    static $gtype: GObject.GType<WebEditor>

    // Constructors of WebKitWebExtension-6.0.WebKitWebExtension.WebEditor

    constructor(config?: WebEditor.ConstructorProperties) 
    _init(config?: WebEditor.ConstructorProperties): void
}

export module WebExtension {

    // Signal callback interfaces

    /**
     * Signal callback interface for `page-created`
     */
    export interface PageCreatedSignalCallback {
        ($obj: WebExtension, web_page: WebPage): void
    }

    /**
     * Signal callback interface for `user-message-received`
     */
    export interface UserMessageReceivedSignalCallback {
        ($obj: WebExtension, message: UserMessage): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WebExtension {

    // Owm methods of WebKitWebExtension-6.0.WebKitWebExtension.WebExtension

    /**
     * Get the web page of the given `page_id`.
     * @param page_id the identifier of the #WebKitWebPage to get
     * @returns the #WebKitWebPage for the given @page_id, or %NULL if the    identifier doesn't correspond to an existing web page.
     */
    get_page(page_id: number): WebPage
    /**
     * Send `message` to the #WebKitWebContext corresponding to `extension`. If `message` is floating, it's consumed.
     * 
     * If you don't expect any reply, or you simply want to ignore it, you can pass %NULL as `calback`.
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_web_extension_send_message_to_context_finish() to get the message reply.
     * @param message a #WebKitUserMessage
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback (nullable): A #GAsyncReadyCallback to call when the request is satisfied or %NULL
     */
    send_message_to_context(message: UserMessage, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_extension_send_message_to_context().
     * @param result a #GAsyncResult
     * @returns a #WebKitUserMessage with the reply or %NULL in case of error.
     */
    send_message_to_context_finish(result: Gio.AsyncResult): UserMessage

    // Own signals of WebKitWebExtension-6.0.WebKitWebExtension.WebExtension

    connect(sigName: "page-created", callback: WebExtension.PageCreatedSignalCallback): number
    connect_after(sigName: "page-created", callback: WebExtension.PageCreatedSignalCallback): number
    emit(sigName: "page-created", web_page: WebPage, ...args: any[]): void
    connect(sigName: "user-message-received", callback: WebExtension.UserMessageReceivedSignalCallback): number
    connect_after(sigName: "user-message-received", callback: WebExtension.UserMessageReceivedSignalCallback): number
    emit(sigName: "user-message-received", message: UserMessage, ...args: any[]): void

    // Class property signals of WebKitWebExtension-6.0.WebKitWebExtension.WebExtension

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents an extension of the WebProcess.
 * 
 * WebKitWebExtension is a loadable module for the WebProcess. It allows you to execute code in the
 * WebProcess and being able to use the DOM API, to change any request or to inject custom
 * JavaScript code, for example.
 * 
 * To create a WebKitWebExtension you should write a module with an initialization function that could
 * be either webkit_web_extension_initialize() with prototype #WebKitWebExtensionInitializeFunction or
 * webkit_web_extension_initialize_with_user_data() with prototype #WebKitWebExtensionInitializeWithUserDataFunction.
 * This function has to be public and it has to use the #G_MODULE_EXPORT macro. It is called when the
 * web process is initialized.
 * 
 * ```c
 * static void
 * web_page_created_callback (WebKitWebExtension *extension,
 *                            WebKitWebPage      *web_page,
 *                            gpointer            user_data)
 * {
 *     g_print ("Page %d created for %s\n",
 *              webkit_web_page_get_id (web_page),
 *              webkit_web_page_get_uri (web_page));
 * }
 * 
 * G_MODULE_EXPORT void
 * webkit_web_extension_initialize (WebKitWebExtension *extension)
 * {
 *     g_signal_connect (extension, "page-created",
 *                       G_CALLBACK (web_page_created_callback),
 *                       NULL);
 * }
 * ```
 * 
 * The previous piece of code shows a trivial example of an extension that notifies when
 * a #WebKitWebPage is created.
 * 
 * WebKit has to know where it can find the created WebKitWebExtension. To do so you
 * should use the webkit_web_context_set_web_extensions_directory() function. The signal
 * #WebKitWebContext::initialize-web-extensions is the recommended place to call it.
 * 
 * To provide the initialization data used by the webkit_web_extension_initialize_with_user_data()
 * function, you have to call webkit_web_context_set_web_extensions_initialization_user_data() with
 * the desired data as parameter. You can see an example of this in the following piece of code:
 * 
 * ```c
 * #define WEB_EXTENSIONS_DIRECTORY // ...
 * 
 * static void
 * initialize_web_extensions (WebKitWebContext *context,
 *                            gpointer          user_data)
 * {
 *   // Web Extensions get a different ID for each Web Process
 *   static guint32 unique_id = 0;
 * 
 *   webkit_web_context_set_web_extensions_directory (
 *      context, WEB_EXTENSIONS_DIRECTORY);
 *   webkit_web_context_set_web_extensions_initialization_user_data (
 *      context, g_variant_new_uint32 (unique_id++));
 * }
 * 
 * int main (int argc, char **argv)
 * {
 *   g_signal_connect (webkit_web_context_get_default (),
 *                    "initialize-web-extensions",
 *                     G_CALLBACK (initialize_web_extensions),
 *                     NULL);
 * 
 *   GtkWidget *view = webkit_web_view_new ();
 * 
 *   // ...
 * }
 * ```
 * @class 
 */
export class WebExtension extends GObject.Object {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.WebExtension

    static name: string
    static $gtype: GObject.GType<WebExtension>

    // Constructors of WebKitWebExtension-6.0.WebKitWebExtension.WebExtension

    constructor(config?: WebExtension.ConstructorProperties) 
    _init(config?: WebExtension.ConstructorProperties): void
}

export module WebFormManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `form-controls-associated`
     */
    export interface FormControlsAssociatedSignalCallback {
        ($obj: WebFormManager, frame: Frame, elements: JavaScriptCore.Value[]): void
    }

    /**
     * Signal callback interface for `will-send-submit-event`
     */
    export interface WillSendSubmitEventSignalCallback {
        ($obj: WebFormManager, form: JavaScriptCore.Value, source_frame: Frame, target_frame: Frame): void
    }

    /**
     * Signal callback interface for `will-submit-form`
     */
    export interface WillSubmitFormSignalCallback {
        ($obj: WebFormManager, form: JavaScriptCore.Value, source_frame: Frame, target_frame: Frame): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WebFormManager {

    // Own fields of WebKitWebExtension-6.0.WebKitWebExtension.WebFormManager

    parent: GObject.Object

    // Own signals of WebKitWebExtension-6.0.WebKitWebExtension.WebFormManager

    connect(sigName: "form-controls-associated", callback: WebFormManager.FormControlsAssociatedSignalCallback): number
    connect_after(sigName: "form-controls-associated", callback: WebFormManager.FormControlsAssociatedSignalCallback): number
    emit(sigName: "form-controls-associated", frame: Frame, elements: JavaScriptCore.Value[], ...args: any[]): void
    connect(sigName: "will-send-submit-event", callback: WebFormManager.WillSendSubmitEventSignalCallback): number
    connect_after(sigName: "will-send-submit-event", callback: WebFormManager.WillSendSubmitEventSignalCallback): number
    emit(sigName: "will-send-submit-event", form: JavaScriptCore.Value, source_frame: Frame, target_frame: Frame, ...args: any[]): void
    connect(sigName: "will-submit-form", callback: WebFormManager.WillSubmitFormSignalCallback): number
    connect_after(sigName: "will-submit-form", callback: WebFormManager.WillSubmitFormSignalCallback): number
    emit(sigName: "will-submit-form", form: JavaScriptCore.Value, source_frame: Frame, target_frame: Frame, ...args: any[]): void

    // Class property signals of WebKitWebExtension-6.0.WebKitWebExtension.WebFormManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Form manager of a #WebKitWebPage in a #WebKitScriptWorld
 * @class 
 */
export class WebFormManager extends GObject.Object {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.WebFormManager

    static name: string
    static $gtype: GObject.GType<WebFormManager>

    // Constructors of WebKitWebExtension-6.0.WebKitWebExtension.WebFormManager

    constructor(config?: WebFormManager.ConstructorProperties) 
    _init(config?: WebFormManager.ConstructorProperties): void
    /**
     * Set the value of an HTML input element as if it had been edited by
     * the user, triggering a change event, and set it as filled automatically.
     * If `element` is not an HTML input element this function does nothing.
     * @param element a #JSCValue
     * @param value the text to set
     */
    static input_element_auto_fill(element: JavaScriptCore.Value, value: string | null): void
    /**
     * Get whether `element` is an HTML input element that has been filled automatically.
     * @param element a #JSCValue
     * @returns %TRUE if @element is an HTML input element that has been filled automatically,    or %FALSE otherwise
     */
    static input_element_is_auto_filled(element: JavaScriptCore.Value): boolean
    /**
     * Get whether `element` is an HTML text input element that has been edited by a user action.
     * @param element a #JSCValue
     * @returns %TRUE if @element is an HTML text input element that has been edited by a user action,    or %FALSE otherwise
     */
    static input_element_is_user_edited(element: JavaScriptCore.Value): boolean
}

export module WebHitTestResult {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WebHitTestResult {

    // Owm methods of WebKitWebExtension-6.0.WebKitWebExtension.WebHitTestResult

    /**
     * Check whether there is an editable element at the hit test position.
     * 
     * Checks whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_EDITABLE flag is present in
     * the context flags.
     * @returns %TRUE if the hit test covers an editable element or %FALSE otherwise.
     */
    context_is_editable(): boolean
    /**
     * Check whether there is an image element at the hit test position.
     * 
     * Checks whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE flag is present in
     * the context flags.
     * @returns %TRUE if the hit test covers an image element or %FALSE otherwise.
     */
    context_is_image(): boolean
    /**
     * Check whether there is a link element at the hit test position.
     * 
     * Checks whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK flag is present in
     * the context flags.
     * @returns %TRUE if the hit test covers a link element or %FALSE otherwise.
     */
    context_is_link(): boolean
    /**
     * Check whether there is a media element at the hit test position.
     * 
     * Checks whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA flag is present in
     * the context flags.
     * @returns %TRUE if the hit test covers a media element or %FALSE otherwise.
     */
    context_is_media(): boolean
    /**
     * Check whether there is a scrollbar at the hit test position.
     * 
     * Checks whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SCROLLBAR flag is present in
     * the context flags.
     * @returns %TRUE if the hit test covers a scrollbar or %FALSE otherwise.
     */
    context_is_scrollbar(): boolean
    /**
     * Check whether there is a selected element at the hit test position.
     * 
     * Checks whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SELECTION flag is present in
     * the context flags.
     * @returns %TRUE if the hit test covers a selected element or %FALSE otherwise.
     */
    context_is_selection(): boolean
    /**
     * Gets the the context flags for the hit test result.
     * @returns a bitmask of #WebKitHitTestResultContext flags
     */
    get_context(): number
    /**
     * Obtains the URI associated with the image element at the hit test position.
     * @returns the URI of the image element, or %NULL if the hit test does not cover an image element.
     */
    get_image_uri(): string | null
    /**
     * Get the #JSCValue for the DOM node in `world` at the coordinates of the Hit Test.
     * @param world a #WebKitScriptWorld, or %NULL to use the default
     * @returns a #JSCValue for the DOM node, or %NULL
     */
    get_js_node(world: ScriptWorld | null): JavaScriptCore.Value | null
    /**
     * Obtains the label associated with the link element at the hit test position.
     * @returns the label of the link element, or %NULL if the hit test does not cover a link element    or the link element does not have a label.
     */
    get_link_label(): string | null
    /**
     * Obtains the title associated with the link element at the hit test position.
     * @returns the title of the link element, or %NULL if the hit test does not cover a link element    or the link element does not have a title.
     */
    get_link_title(): string | null
    /**
     * Obtains the URI associated with the link element at the hit test position.
     * @returns the URI of the link element, or %NULL if the hit test does not cover a link element.
     */
    get_link_uri(): string | null
    /**
     * Obtains the URI associated with the media element at the hit test position.
     * @returns the URI of the media element, or %NULL if the hit test does not cover a media element.
     */
    get_media_uri(): string | null

    // Class property signals of WebKitWebExtension-6.0.WebKitWebExtension.WebHitTestResult

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Result of a Hit Test (Web Process Extensions).
 * 
 * WebKitWebHitTestResult extends #WebKitHitTestResult to provide information
 * about the #WebKitDOMNode in the coordinates of the Hit Test.
 * @class 
 */
export class WebHitTestResult extends GObject.Object {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.WebHitTestResult

    static name: string
    static $gtype: GObject.GType<WebHitTestResult>

    // Constructors of WebKitWebExtension-6.0.WebKitWebExtension.WebHitTestResult

    constructor(config?: WebHitTestResult.ConstructorProperties) 
    _init(config?: WebHitTestResult.ConstructorProperties): void
}

export module WebPage {

    // Signal callback interfaces

    /**
     * Signal callback interface for `context-menu`
     */
    export interface ContextMenuSignalCallback {
        ($obj: WebPage, context_menu: ContextMenu, hit_test_result: WebHitTestResult): boolean
    }

    /**
     * Signal callback interface for `document-loaded`
     */
    export interface DocumentLoadedSignalCallback {
        ($obj: WebPage): void
    }

    /**
     * Signal callback interface for `send-request`
     */
    export interface SendRequestSignalCallback {
        ($obj: WebPage, request: URIRequest, redirected_response: URIResponse): boolean
    }

    /**
     * Signal callback interface for `user-message-received`
     */
    export interface UserMessageReceivedSignalCallback {
        ($obj: WebPage, message: UserMessage): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WebPage {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.WebPage

    /**
     * The current active URI of the #WebKitWebPage.
     */
    readonly uri: string | null

    // Owm methods of WebKitWebExtension-6.0.WebKitWebExtension.WebPage

    /**
     * Gets the #WebKitWebEditor of a #WebKitWebPage.
     * @returns the #WebKitWebEditor
     */
    get_editor(): WebEditor
    /**
     * Get the #WebKitWebFormManager of `web_page` in `world`.
     * @param world a #WebKitScriptWorld
     * @returns a #WebKitWebFormManager
     */
    get_form_manager(world: ScriptWorld | null): WebFormManager
    /**
     * Get the identifier of the #WebKitWebPage
     * @returns the identifier of @web_page
     */
    get_id(): number
    /**
     * Returns the main frame of a #WebKitWebPage.
     * @returns the #WebKitFrame that is the main frame of @web_page
     */
    get_main_frame(): Frame
    /**
     * Returns the current active URI of `web_page`.
     * 
     * You can monitor the active URI by connecting to the notify::uri
     * signal of `web_page`.
     * @returns the current active URI of @web_view or %NULL if nothing has been    loaded yet.
     */
    get_uri(): string | null
    /**
     * Send `message` to the #WebKitWebView corresponding to `web_page`. If `message` is floating, it's consumed.
     * 
     * If you don't expect any reply, or you simply want to ignore it, you can pass %NULL as `callback`.
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_web_page_send_message_to_view_finish() to get the message reply.
     * @param message a #WebKitUserMessage
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback (nullable): A #GAsyncReadyCallback to call when the request is satisfied or %NULL
     */
    send_message_to_view(message: UserMessage, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_page_send_message_to_view().
     * @param result a #GAsyncResult
     * @returns a #WebKitUserMessage with the reply or %NULL in case of error.
     */
    send_message_to_view_finish(result: Gio.AsyncResult): UserMessage

    // Own signals of WebKitWebExtension-6.0.WebKitWebExtension.WebPage

    connect(sigName: "context-menu", callback: WebPage.ContextMenuSignalCallback): number
    connect_after(sigName: "context-menu", callback: WebPage.ContextMenuSignalCallback): number
    emit(sigName: "context-menu", context_menu: ContextMenu, hit_test_result: WebHitTestResult, ...args: any[]): void
    connect(sigName: "document-loaded", callback: WebPage.DocumentLoadedSignalCallback): number
    connect_after(sigName: "document-loaded", callback: WebPage.DocumentLoadedSignalCallback): number
    emit(sigName: "document-loaded", ...args: any[]): void
    connect(sigName: "send-request", callback: WebPage.SendRequestSignalCallback): number
    connect_after(sigName: "send-request", callback: WebPage.SendRequestSignalCallback): number
    emit(sigName: "send-request", request: URIRequest, redirected_response: URIResponse, ...args: any[]): void
    connect(sigName: "user-message-received", callback: WebPage.UserMessageReceivedSignalCallback): number
    connect_after(sigName: "user-message-received", callback: WebPage.UserMessageReceivedSignalCallback): number
    emit(sigName: "user-message-received", message: UserMessage, ...args: any[]): void

    // Class property signals of WebKitWebExtension-6.0.WebKitWebExtension.WebPage

    connect(sigName: "notify::uri", callback: (($obj: WebPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: WebPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A loaded web page.
 * @class 
 */
export class WebPage extends GObject.Object {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.WebPage

    static name: string
    static $gtype: GObject.GType<WebPage>

    // Constructors of WebKitWebExtension-6.0.WebKitWebExtension.WebPage

    constructor(config?: WebPage.ConstructorProperties) 
    _init(config?: WebPage.ConstructorProperties): void
}

export interface ContextMenuClass {

    // Own fields of WebKitWebExtension-6.0.WebKitWebExtension.ContextMenuClass

    parent_class: GObject.ObjectClass
}

export abstract class ContextMenuClass {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.ContextMenuClass

    static name: string
}

export interface ContextMenuItemClass {

    // Own fields of WebKitWebExtension-6.0.WebKitWebExtension.ContextMenuItemClass

    parent_class: GObject.InitiallyUnownedClass
}

export abstract class ContextMenuItemClass {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.ContextMenuItemClass

    static name: string
}

export interface FrameClass {

    // Own fields of WebKitWebExtension-6.0.WebKitWebExtension.FrameClass

    parent_class: GObject.ObjectClass
}

export abstract class FrameClass {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.FrameClass

    static name: string
}

export interface HitTestResultClass {

    // Own fields of WebKitWebExtension-6.0.WebKitWebExtension.HitTestResultClass

    parent_class: GObject.ObjectClass
}

export abstract class HitTestResultClass {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.HitTestResultClass

    static name: string
}

export interface ScriptWorldClass {

    // Own fields of WebKitWebExtension-6.0.WebKitWebExtension.ScriptWorldClass

    parent_class: GObject.ObjectClass
}

export abstract class ScriptWorldClass {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.ScriptWorldClass

    static name: string
}

export interface URIRequestClass {

    // Own fields of WebKitWebExtension-6.0.WebKitWebExtension.URIRequestClass

    parent_class: GObject.ObjectClass
}

export abstract class URIRequestClass {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.URIRequestClass

    static name: string
}

export interface URIResponseClass {

    // Own fields of WebKitWebExtension-6.0.WebKitWebExtension.URIResponseClass

    parent_class: GObject.ObjectClass
}

export abstract class URIResponseClass {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.URIResponseClass

    static name: string
}

export interface UserMessageClass {

    // Own fields of WebKitWebExtension-6.0.WebKitWebExtension.UserMessageClass

    parent_class: GObject.InitiallyUnownedClass
}

export abstract class UserMessageClass {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.UserMessageClass

    static name: string
}

export interface WebEditorClass {

    // Own fields of WebKitWebExtension-6.0.WebKitWebExtension.WebEditorClass

    parent_class: GObject.ObjectClass
}

export abstract class WebEditorClass {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.WebEditorClass

    static name: string
}

export interface WebExtensionClass {

    // Own fields of WebKitWebExtension-6.0.WebKitWebExtension.WebExtensionClass

    parent_class: GObject.ObjectClass
}

export abstract class WebExtensionClass {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.WebExtensionClass

    static name: string
}

export interface WebFormManagerClass {

    // Own fields of WebKitWebExtension-6.0.WebKitWebExtension.WebFormManagerClass

    parent_class: GObject.ObjectClass
}

export abstract class WebFormManagerClass {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.WebFormManagerClass

    static name: string
}

export interface WebHitTestResultClass {

    // Own fields of WebKitWebExtension-6.0.WebKitWebExtension.WebHitTestResultClass

    parent_class: GObject.ObjectClass
}

export abstract class WebHitTestResultClass {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.WebHitTestResultClass

    static name: string
}

export interface WebPageClass {

    // Own fields of WebKitWebExtension-6.0.WebKitWebExtension.WebPageClass

    parent_class: GObject.ObjectClass
}

export abstract class WebPageClass {

    // Own properties of WebKitWebExtension-6.0.WebKitWebExtension.WebPageClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END