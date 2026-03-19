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
import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type JavaScriptCore from '@girs/javascriptcore-6.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace WebKitWebProcessExtension {
    /**
     * WebKitWebProcessExtension-6.0
     */

    /**
     * Enum values used to denote the stock actions for
     * {@link WebKitWebProcessExtension.ContextMenuItem}<!-- -->s
     * @gir-type Enum
     */
    enum ContextMenuAction {
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
     * @gir-type Enum
     * @since 2.28
     */
    enum UserMessageError {
        /**
         * The message was not handled by the receiver.
         */
        USER_MESSAGE_UNHANDLED_MESSAGE,
    }

    /**
     * @gir-type Callback
     */
    interface WebProcessExtensionInitializeFunction {
        (extension: WebProcessExtension): void;
    }
    /**
     * @gir-type Callback
     */
    interface WebProcessExtensionInitializeWithUserDataFunction {
        (extension: WebProcessExtension, user_data: GLib.Variant): void;
    }
    /**
     * Enum values with flags representing the context of a {@link WebKitWebProcessExtension.HitTestResult}.
     * @gir-type Flags
     */
    enum HitTestResultContext {
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

    namespace ContextMenu {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Represents the context menu in a `WebKitWebView`.
     *
     * {@link WebKitWebProcessExtension.ContextMenu} represents a context menu containing
     * {@link WebKitWebProcessExtension.ContextMenuItem}<!-- -->s in a `WebKitWebView`.
     *
     * When a `WebKitWebView` is about to display the context menu, it
     * emits the `WebKitWebView::context-menu` signal, which has the
     * {@link WebKitWebProcessExtension.ContextMenu} as an argument. You can modify it, adding new
     * submenus that you can create with `webkit_context_menu_new()`, adding
     * new {@link WebKitWebProcessExtension.ContextMenuItem}<!-- -->s with
     * `webkit_context_menu_prepend()`, `webkit_context_menu_append()` or
     * `webkit_context_menu_insert()`, maybe after having removed the
     * existing ones with `webkit_context_menu_remove_all()`.
     * @gir-type Class
     */
    class ContextMenu extends GObject.Object {
        static $gtype: GObject.GType<ContextMenu>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContextMenu.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ContextMenu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ContextMenu;

        static new_with_items(items: ContextMenuItem[]): ContextMenu;

        // Signals

        /** @signal */
        connect<K extends keyof ContextMenu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContextMenu.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ContextMenu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContextMenu.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ContextMenu.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ContextMenu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds `item` at the end of the `menu`.
         * @param item the {@link WebKitWebProcessExtension.ContextMenuItem} to add
         */
        append(item: ContextMenuItem): void;
        /**
         * Gets the first item in the `menu`.
         * @returns the first {@link WebKitWebProcessExtension.ContextMenuItem} of `menu`,    or `null` if the {@link WebKitWebProcessExtension.ContextMenu} is empty.
         */
        first(): ContextMenuItem;
        /**
         * Gets the {@link Gdk.Event} that triggered the context menu. This function only returns a valid
         * {@link Gdk.Event} when called for a {@link WebKitWebProcessExtension.ContextMenu} passed to `WebKitWebView::context-menu`
         * signal; in all other cases, `null` is returned.
         *
         * The returned {@link Gdk.Event} is expected to be one of the following types:
         * <itemizedlist>
         * <listitem><para>
         * a `GdkEventButton` of type {@link Gdk.EventType.BUTTON_PRESS} when the context menu was triggered with mouse.
         * </para></listitem>
         * <listitem><para>
         * a `GdkEventKey` of type {@link Gdk.EventType.KEY_PRESS} if the keyboard was used to show the menu.
         * </para></listitem>
         * <listitem><para>
         * a generic {@link Gdk.Event} of type `GDK_NOTHING` when the {@link Gtk.Widget.SignalSignatures.popup_menu | Gtk.Widget::popup-menu} signal was used to show the context menu.
         * </para></listitem>
         * </itemizedlist>
         * @returns the menu event or `null`.
         */
        get_event(): Gdk.Event;
        /**
         * Gets the item at the given position in the `menu`.
         * @param position the position of the item, counting from 0
         * @returns the {@link WebKitWebProcessExtension.ContextMenuItem} at position `position` in `menu`,    or `null` if the position is off the end of the `menu`.
         */
        get_item_at_position(position: number): ContextMenuItem;
        /**
         * Returns the item list of `menu`.
         * @returns a {@link GLib.List} of    {@link WebKitWebProcessExtension.ContextMenuItem}<!-- -->s
         */
        get_items(): ContextMenuItem[];
        /**
         * Gets the length of the `menu`.
         * @returns the number of {@link WebKitWebProcessExtension.ContextMenuItem}<!-- -->s in `menu`
         */
        get_n_items(): number;
        /**
         * Gets the user data of `menu`.
         *
         * This function can be used from the UI Process to get user data previously set
         * from the Web Process with `webkit_context_menu_set_user_data()`.
         * @returns the user data of `menu`, or `null` if `menu` doesn't have user data
         */
        get_user_data(): GLib.Variant;
        /**
         * Inserts `item` into the `menu` at the given position.
         *
         * If `position` is negative, or is larger than the number of items
         * in the {@link WebKitWebProcessExtension.ContextMenu}, the item is added on to the end of
         * the `menu`. The first position is 0.
         * @param item the {@link WebKitWebProcessExtension.ContextMenuItem} to add
         * @param position the position to insert the item
         */
        insert(item: ContextMenuItem, position: number): void;
        /**
         * Gets the last item in the `menu`.
         * @returns the last {@link WebKitWebProcessExtension.ContextMenuItem} of `menu`,    or `null` if the {@link WebKitWebProcessExtension.ContextMenu} is empty.
         */
        last(): ContextMenuItem;
        /**
         * Moves `item` to the given position in the `menu`.
         *
         * If `position` is negative, or is larger than the number of items
         * in the {@link WebKitWebProcessExtension.ContextMenu}, the item is added on to the end of
         * the `menu`.
         * The first position is 0.
         * @param item the {@link WebKitWebProcessExtension.ContextMenuItem} to add
         * @param position the new position to move the item
         */
        move_item(item: ContextMenuItem, position: number): void;
        /**
         * Adds `item` at the beginning of the `menu`.
         * @param item the {@link WebKitWebProcessExtension.ContextMenuItem} to add
         */
        prepend(item: ContextMenuItem): void;
        /**
         * Removes `item` from the `menu`.
         *
         * See also `webkit_context_menu_remove_all()` to remove all items.
         * @param item the {@link WebKitWebProcessExtension.ContextMenuItem} to remove
         */
        remove(item: ContextMenuItem): void;
        /**
         * Removes all items of the `menu`.
         */
        remove_all(): void;
        /**
         * Sets user data to `menu`.
         *
         * This function can be used from a Web Process extension to set user data
         * that can be retrieved from the UI Process using `webkit_context_menu_get_user_data()`.
         * If the `user_data` {@link GLib.Variant} is floating, it is consumed.
         * @param user_data a {@link GLib.Variant}
         */
        set_user_data(user_data: GLib.Variant): void;
    }

    namespace ContextMenuItem {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {}
    }

    /**
     * One item of a {@link WebKitWebProcessExtension.ContextMenu}.
     *
     * The {@link WebKitWebProcessExtension.ContextMenu} is composed of {@link WebKitWebProcessExtension.ContextMenuItem}<!--
     * -->s. These items can be created from a `GtkAction`, from a
     * {@link WebKitWebProcessExtension.ContextMenuAction} or from a {@link WebKitWebProcessExtension.ContextMenuAction} and a
     * label. These {@link WebKitWebProcessExtension.ContextMenuAction}<!-- -->s denote stock actions
     * for the items. You can also create separators and submenus.
     * @gir-type Class
     */
    class ContextMenuItem extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<ContextMenuItem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContextMenuItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ContextMenuItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_gaction(action: Gio.Action, label: string, target?: GLib.Variant | null): ContextMenuItem;

        static new_from_stock_action(action: ContextMenuAction): ContextMenuItem;

        static new_from_stock_action_with_label(action: ContextMenuAction, label: string): ContextMenuItem;

        static new_separator(): ContextMenuItem;

        static new_with_submenu(label: string, submenu: ContextMenu): ContextMenuItem;

        // Signals

        /** @signal */
        connect<K extends keyof ContextMenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContextMenuItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ContextMenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContextMenuItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ContextMenuItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ContextMenuItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the action associated to `item` as a {@link Gio.Action}.
         * @returns the {@link Gio.Action} associated to the {@link WebKitWebProcessExtension.ContextMenuItem},    or `null` if `item` is a separator.
         */
        get_gaction(): Gio.Action;
        /**
         * Gets the {@link WebKitWebProcessExtension.ContextMenuAction} of `item`.
         *
         * If the {@link WebKitWebProcessExtension.ContextMenuItem} was not
         * created for a stock action {@link WebKitWebProcessExtension.ContextMenuAction.CUSTOM} will be
         * returned. If the {@link WebKitWebProcessExtension.ContextMenuItem} is a separator {@link WebKitWebProcessExtension.ContextMenuAction.NO_ACTION}
         * will be returned.
         * @returns the {@link WebKitWebProcessExtension.ContextMenuAction} of `item`
         */
        get_stock_action(): ContextMenuAction;
        /**
         * Gets the submenu of `item`.
         * @returns the {@link WebKitWebProcessExtension.ContextMenu} representing the submenu of    `item` or `null` if `item` doesn't have a submenu.
         */
        get_submenu(): ContextMenu;
        /**
         * Checks whether `item` is a separator.
         * @returns `true` is `item` is a separator or `false` otherwise
         */
        is_separator(): boolean;
        /**
         * Sets or replaces the `item` submenu.
         *
         * If `submenu` is `null` the current
         * submenu of `item` is removed.
         * @param submenu a {@link WebKitWebProcessExtension.ContextMenu}
         */
        set_submenu(submenu?: ContextMenu | null): void;
    }

    namespace Frame {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A web page frame.
     *
     * Each {@link WebKitWebProcessExtension.WebPage} has at least one main frame, and can have any number
     * of subframes.
     * @gir-type Class
     * @since 2.26
     */
    class Frame extends GObject.Object {
        static $gtype: GObject.GType<Frame>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Frame.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Frame.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Frame.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Frame.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Frame.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Frame.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Frame.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Frame.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the process-unique identifier of this {@link WebKitWebProcessExtension.Frame}. No other
         * frame in the same web process will have the same ID; however, frames
         * in other web processes may.
         * @returns the identifier of `frame`
         */
        get_id(): number;
        /**
         * Get the JavaScript execution context of `frame`. Use this function to bridge
         * between the WebKit and JavaScriptCore APIs.
         * @returns the {@link JavaScriptCore.Context} for the JavaScript execution context of `frame`.
         */
        get_js_context(): JavaScriptCore.Context;
        /**
         * Get the JavaScript execution context of `frame` for the given {@link WebKitWebProcessExtension.ScriptWorld}.
         * @param world a {@link WebKitWebProcessExtension.ScriptWorld}
         * @returns the {@link JavaScriptCore.Context} for the JavaScript execution context of `frame` for `world`.
         */
        get_js_context_for_script_world(world: ScriptWorld): JavaScriptCore.Context;
        /**
         * Gets the current active URI of `frame`.
         * @returns the current active URI of `frame` or `null` if nothing has been    loaded yet.
         */
        get_uri(): string;
        /**
         * Gets whether `frame` is the main frame of a {@link WebKitWebProcessExtension.WebPage}
         * @returns `true` if `frame` is a main frame or `false` otherwise
         */
        is_main_frame(): boolean;
    }

    namespace HitTestResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::image-uri': (pspec: GObject.ParamSpec) => void;
            'notify::link-label': (pspec: GObject.ParamSpec) => void;
            'notify::link-title': (pspec: GObject.ParamSpec) => void;
            'notify::link-uri': (pspec: GObject.ParamSpec) => void;
            'notify::media-uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: number;
            image_uri: string;
            imageUri: string;
            link_label: string;
            linkLabel: string;
            link_title: string;
            linkTitle: string;
            link_uri: string;
            linkUri: string;
            media_uri: string;
            mediaUri: string;
        }
    }

    /**
     * Result of a Hit Test.
     *
     * A Hit Test is an operation to get context information about a given
     * point in a `WebKitWebView`. {@link WebKitWebProcessExtension.HitTestResult} represents the
     * result of a Hit Test. It provides context information about what is
     * at the coordinates of the Hit Test, such as if there's a link,
     * an image or a media.
     *
     * You can get the context of the HitTestResult with
     * `webkit_hit_test_result_get_context()` that returns a bitmask of
     * {@link WebKitWebProcessExtension.HitTestResultContext} flags. You can also use
     * `webkit_hit_test_result_context_is_link()`, `webkit_hit_test_result_context_is_image()` and
     * `webkit_hit_test_result_context_is_media()` to determine whether there's
     * a link, image or a media element at the coordinates of the Hit Test.
     * Note that it's possible that several {@link WebKitWebProcessExtension.HitTestResultContext} flags
     * are active at the same time, for example if there's a link containing an image.
     *
     * When the mouse is moved over a `WebKitWebView` a Hit Test is performed
     * for the mouse coordinates and `WebKitWebView::mouse-target-changed`
     * signal is emitted with a {@link WebKitWebProcessExtension.HitTestResult}.
     * @gir-type Class
     */
    class HitTestResult extends GObject.Object {
        static $gtype: GObject.GType<HitTestResult>;

        // Properties

        /**
         * Bitmask of {@link WebKitWebProcessExtension.HitTestResultContext} flags representing
         * the context of the {@link WebKitWebProcessExtension.HitTestResult}.
         */
        get context(): number;
        /**
         * The URI of the image if flag {@link WebKitWebProcessExtension.HitTestResultContext.IMAGE}
         * is present in {@link WebKitWebProcessExtension.HitTestResult.context}
         */
        get image_uri(): string;
        /**
         * The URI of the image if flag {@link WebKitWebProcessExtension.HitTestResultContext.IMAGE}
         * is present in {@link WebKitWebProcessExtension.HitTestResult.context}
         */
        get imageUri(): string;
        /**
         * The label of the link if flag {@link WebKitWebProcessExtension.HitTestResultContext.LINK}
         * is present in {@link WebKitWebProcessExtension.HitTestResult.context}
         */
        get link_label(): string;
        /**
         * The label of the link if flag {@link WebKitWebProcessExtension.HitTestResultContext.LINK}
         * is present in {@link WebKitWebProcessExtension.HitTestResult.context}
         */
        get linkLabel(): string;
        /**
         * The title of the link if flag {@link WebKitWebProcessExtension.HitTestResultContext.LINK}
         * is present in {@link WebKitWebProcessExtension.HitTestResult.context}
         */
        get link_title(): string;
        /**
         * The title of the link if flag {@link WebKitWebProcessExtension.HitTestResultContext.LINK}
         * is present in {@link WebKitWebProcessExtension.HitTestResult.context}
         */
        get linkTitle(): string;
        /**
         * The URI of the link if flag {@link WebKitWebProcessExtension.HitTestResultContext.LINK}
         * is present in {@link WebKitWebProcessExtension.HitTestResult.context}
         */
        get link_uri(): string;
        /**
         * The URI of the link if flag {@link WebKitWebProcessExtension.HitTestResultContext.LINK}
         * is present in {@link WebKitWebProcessExtension.HitTestResult.context}
         */
        get linkUri(): string;
        /**
         * The URI of the media if flag {@link WebKitWebProcessExtension.HitTestResultContext.MEDIA}
         * is present in {@link WebKitWebProcessExtension.HitTestResult.context}
         */
        get media_uri(): string;
        /**
         * The URI of the media if flag {@link WebKitWebProcessExtension.HitTestResultContext.MEDIA}
         * is present in {@link WebKitWebProcessExtension.HitTestResult.context}
         */
        get mediaUri(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HitTestResult.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HitTestResult.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof HitTestResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HitTestResult.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HitTestResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HitTestResult.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HitTestResult.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HitTestResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets whether {@link WebKitWebProcessExtension.HitTestResultContext.EDITABLE} flag is present in
         * {@link WebKitWebProcessExtension.HitTestResult.context}.
         * @returns `true` if there's an editable element at the coordinates of the `hit_test_result`,    or `false` otherwise
         */
        context_is_editable(): boolean;
        /**
         * Gets whether {@link WebKitWebProcessExtension.HitTestResultContext.IMAGE} flag is present in
         * {@link WebKitWebProcessExtension.HitTestResult.context}.
         * @returns `true` if there's an image element in the coordinates of the Hit Test,    or `false` otherwise
         */
        context_is_image(): boolean;
        /**
         * Gets whether {@link WebKitWebProcessExtension.HitTestResultContext.LINK} flag is present in
         * {@link WebKitWebProcessExtension.HitTestResult.context}.
         * @returns `true` if there's a link element in the coordinates of the Hit Test,    or `false` otherwise
         */
        context_is_link(): boolean;
        /**
         * Gets whether {@link WebKitWebProcessExtension.HitTestResultContext.MEDIA} flag is present in
         * {@link WebKitWebProcessExtension.HitTestResult.context}.
         * @returns `true` if there's a media element in the coordinates of the Hit Test,    or `false` otherwise
         */
        context_is_media(): boolean;
        /**
         * Gets whether {@link WebKitWebProcessExtension.HitTestResultContext.SCROLLBAR} flag is present in
         * {@link WebKitWebProcessExtension.HitTestResult.context}.
         * @returns `true` if there's a scrollbar element at the coordinates of the `hit_test_result`,    or `false` otherwise
         */
        context_is_scrollbar(): boolean;
        /**
         * Gets whether {@link WebKitWebProcessExtension.HitTestResultContext.SELECTION} flag is present in
         * {@link WebKitWebProcessExtension.HitTestResult.context}.
         * @returns `true` if there's a selected element at the coordinates of the `hit_test_result`,    or `false` otherwise
         */
        context_is_selection(): boolean;
        /**
         * Gets the value of the {@link WebKitWebProcessExtension.HitTestResult.context} property.
         * @returns a bitmask of {@link WebKitWebProcessExtension.HitTestResultContext} flags
         */
        get_context(): number;
        /**
         * Gets the value of the {@link WebKitWebProcessExtension.HitTestResult.image_uri} property.
         * @returns the URI of the image element in the coordinates of the Hit Test,    or `null` if there isn't an image element in `hit_test_result` context
         */
        get_image_uri(): string;
        /**
         * Gets the value of the {@link WebKitWebProcessExtension.HitTestResult.link_label} property.
         * @returns the label of the link element in the coordinates of the Hit Test,    or `null` if there isn't a link element in `hit_test_result` context or the    link element doesn't have a label
         */
        get_link_label(): string;
        /**
         * Gets the value of the {@link WebKitWebProcessExtension.HitTestResult.link_title} property.
         * @returns the title of the link element in the coordinates of the Hit Test,    or `null` if there isn't a link element in `hit_test_result` context or the    link element doesn't have a title
         */
        get_link_title(): string;
        /**
         * Gets the value of the {@link WebKitWebProcessExtension.HitTestResult.link_uri} property.
         * @returns the URI of the link element in the coordinates of the Hit Test,    or `null` if there isn't a link element in `hit_test_result` context
         */
        get_link_uri(): string;
        /**
         * Gets the value of the {@link WebKitWebProcessExtension.HitTestResult.media_uri} property.
         * @returns the URI of the media element in the coordinates of the Hit Test,    or `null` if there isn't a media element in `hit_test_result` context
         */
        get_media_uri(): string;
    }

    namespace ScriptWorld {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the JavaScript window object in a {@link WebKitWebProcessExtension.ScriptWorld} has been
             * cleared. This is the preferred place to set custom properties on the window
             * object using the JavaScriptCore API. You can get the window object of `frame`
             * from the JavaScript execution context of `world` that is returned by
             * `webkit_frame_get_js_context_for_script_world()`.
             * @signal
             * @since 2.2
             */
            'window-object-cleared': (arg0: WebPage, arg1: Frame) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ScriptWorld extends GObject.Object {
        static $gtype: GObject.GType<ScriptWorld>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScriptWorld.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ScriptWorld.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ScriptWorld;

        static new_with_name(name: string): ScriptWorld;

        // Signals

        /** @signal */
        connect<K extends keyof ScriptWorld.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScriptWorld.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ScriptWorld.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScriptWorld.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ScriptWorld.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ScriptWorld.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get the default {@link WebKitWebProcessExtension.ScriptWorld}. This is the normal script world
         * where all scripts are executed by default.
         * You can get the JavaScript execution context of a {@link WebKitWebProcessExtension.ScriptWorld}
         * for a given {@link WebKitWebProcessExtension.Frame} with `webkit_frame_get_javascript_context_for_script_world()`.
         */
        static get_default(): ScriptWorld;

        // Methods

        /**
         * Get the name of a {@link WebKitWebProcessExtension.ScriptWorld}.
         * @returns the name of `world`
         */
        get_name(): string;
    }

    namespace URIRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            uri: string;
        }
    }

    /**
     * Represents a URI request.
     *
     * A {@link WebKitWebProcessExtension.URIRequest} can be created with a URI using the
     * `webkit_uri_request_new()` method, and you can get the URI of an
     * existing request with the `webkit_uri_request_get_uri()` one.
     * @gir-type Class
     */
    class URIRequest extends GObject.Object {
        static $gtype: GObject.GType<URIRequest>;

        // Properties

        /**
         * The URI to which the request will be made.
         */
        get uri(): string;
        set uri(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: URIRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<URIRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): URIRequest;

        // Signals

        /** @signal */
        connect<K extends keyof URIRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, URIRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof URIRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, URIRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof URIRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<URIRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the HTTP headers of a {@link WebKitWebProcessExtension.URIRequest} as a {@link Soup.MessageHeaders}.
         * @returns a {@link Soup.MessageHeaders} with the HTTP headers of `request`    or `null` if `request` is not an HTTP request.
         */
        get_http_headers(): Soup.MessageHeaders;
        /**
         * Get the HTTP method of the {@link WebKitWebProcessExtension.URIRequest}.
         * @returns the HTTP method of the {@link WebKitWebProcessExtension.URIRequest} or `null` if `request` is not    an HTTP request.
         */
        get_http_method(): string;
        /**
         * Obtains the request URI.
         * @returns request URI, as a string.
         */
        get_uri(): string;
        /**
         * Set the URI of `request`
         * @param uri an URI
         */
        set_uri(uri: string): void;
    }

    namespace URIResponse {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::content-length': (pspec: GObject.ParamSpec) => void;
            'notify::http-headers': (pspec: GObject.ParamSpec) => void;
            'notify::mime-type': (pspec: GObject.ParamSpec) => void;
            'notify::status-code': (pspec: GObject.ParamSpec) => void;
            'notify::suggested-filename': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            content_length: number;
            contentLength: number;
            http_headers: Soup.MessageHeaders;
            httpHeaders: Soup.MessageHeaders;
            mime_type: string;
            mimeType: string;
            status_code: number;
            statusCode: number;
            suggested_filename: string;
            suggestedFilename: string;
            uri: string;
        }
    }

    /**
     * Represents an URI response.
     *
     * A {@link WebKitWebProcessExtension.URIResponse} contains information such as the URI, the
     * status code, the content length, the mime type, the HTTP status or
     * the suggested filename.
     * @gir-type Class
     */
    class URIResponse extends GObject.Object {
        static $gtype: GObject.GType<URIResponse>;

        // Properties

        /**
         * The expected content length of the response.
         */
        get content_length(): number;
        /**
         * The expected content length of the response.
         */
        get contentLength(): number;
        /**
         * The HTTP headers of the response, or `null` if the response is not an HTTP response.
         * @since 2.6
         */
        get http_headers(): Soup.MessageHeaders;
        /**
         * The HTTP headers of the response, or `null` if the response is not an HTTP response.
         * @since 2.6
         */
        get httpHeaders(): Soup.MessageHeaders;
        /**
         * The MIME type of the response.
         */
        get mime_type(): string;
        /**
         * The MIME type of the response.
         */
        get mimeType(): string;
        /**
         * The status code of the response as returned by the server.
         */
        get status_code(): number;
        /**
         * The status code of the response as returned by the server.
         */
        get statusCode(): number;
        /**
         * The suggested filename for the URI response.
         */
        get suggested_filename(): string;
        /**
         * The suggested filename for the URI response.
         */
        get suggestedFilename(): string;
        /**
         * The URI for which the response was made.
         */
        get uri(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: URIResponse.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<URIResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof URIResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, URIResponse.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof URIResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, URIResponse.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof URIResponse.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<URIResponse.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the expected content length of the {@link WebKitWebProcessExtension.URIResponse}.
         *
         * It can be 0 if the server provided an incorrect or missing Content-Length.
         * @returns the expected content length of `response`.
         */
        get_content_length(): number;
        /**
         * Get the HTTP headers of a {@link WebKitWebProcessExtension.URIResponse} as a {@link Soup.MessageHeaders}.
         * @returns a {@link Soup.MessageHeaders} with the HTTP headers of `response`    or `null` if `response` is not an HTTP response.
         */
        get_http_headers(): Soup.MessageHeaders;
        /**
         * Gets the MIME type of the response.
         * @returns MIME type, as a string.
         */
        get_mime_type(): string;
        /**
         * Get the status code of the {@link WebKitWebProcessExtension.URIResponse}.
         *
         * Get the status code of the {@link WebKitWebProcessExtension.URIResponse} as returned by
         * the server. It will normally be a `SoupKnownStatusCode`, for
         * example {@link Soup.Status.OK}, though the server can respond with any
         * unsigned integer.
         * @returns the status code of `response`
         */
        get_status_code(): number;
        /**
         * Get the suggested filename for `response`.
         *
         * Get the suggested filename for `response`, as specified by
         * the 'Content-Disposition' HTTP header, or `null` if it's not
         * present.
         * @returns the suggested filename or `null` if    the 'Content-Disposition' HTTP header is not present.
         */
        get_suggested_filename(): string;
        /**
         * Gets the URI which resulted in the response.
         * @returns response URI, as a string.
         */
        get_uri(): string;
    }

    namespace UserMessage {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            'notify::fd-list': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parameters': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            fd_list: Gio.UnixFDList;
            fdList: Gio.UnixFDList;
            name: string;
            parameters: GLib.Variant;
        }
    }

    /**
     * Message that can be sent between the UI process and web process extensions.
     *
     * A WebKitUserMessage is a message that can be used for the communication between the UI process
     * and web process extensions. A WebKitUserMessage always has a name, and it can also include parameters and
     * UNIX file descriptors. Messages can be sent from a `WebKitWebContext` to all web process extensions,
     * from a web process extension to its corresponding `WebKitWebContext`, and from a `WebKitWebView` to its
     * corresponding {@link WebKitWebProcessExtension.WebPage} (and vice versa). One to one messages can be replied to directly with
     * `webkit_user_message_send_reply()`.
     * @gir-type Class
     * @since 2.28
     */
    class UserMessage extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<UserMessage>;

        // Properties

        /**
         * The UNIX file descriptors of the user message.
         * @since 2.28
         */
        get fd_list(): Gio.UnixFDList;
        /**
         * The UNIX file descriptors of the user message.
         * @since 2.28
         */
        get fdList(): Gio.UnixFDList;
        /**
         * The name of the user message.
         * @since 2.28
         */
        get name(): string;
        /**
         * The parameters of the user message as a {@link GLib.Variant}, or `null`
         * if the message doesn't include parameters. Note that only complete types are
         * allowed.
         * @since 2.28
         */
        get parameters(): GLib.Variant;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserMessage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UserMessage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, parameters?: GLib.Variant | null): UserMessage;

        static new_with_fd_list(
            name: string,
            parameters?: GLib.Variant | null,
            fd_list?: Gio.UnixFDList | null,
        ): UserMessage;

        // Signals

        /** @signal */
        connect<K extends keyof UserMessage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserMessage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserMessage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserMessage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserMessage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserMessage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the quark for the domain of user message errors.
         */
        static error_quark(): GLib.Quark;

        // Methods

        /**
         * Get the `message` list of file descritpor.
         * @returns the message list of file descriptors
         */
        get_fd_list(): Gio.UnixFDList | null;
        /**
         * Get the `message` name.
         * @returns the message name
         */
        get_name(): string;
        /**
         * Get the `message` parameters.
         * @returns the message parameters
         */
        get_parameters(): GLib.Variant | null;
        /**
         * Send a reply to an user message.
         *
         * If `reply` is floating, it's consumed.
         * You can only send a reply to a {@link WebKitWebProcessExtension.UserMessage} that has been
         * received.
         * @param reply a {@link WebKitWebProcessExtension.UserMessage} to send as reply
         */
        send_reply(reply: UserMessage): void;
    }

    namespace WebEditor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted for every selection change inside a {@link WebKitWebProcessExtension.WebPage}
             * as well as for every caret position change as the caret is a collapsed
             * selection.
             * @signal
             * @since 2.10
             */
            'selection-changed': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Access to editing capabilities of a {@link WebKitWebProcessExtension.WebPage}.
     *
     * The WebKitWebEditor provides access to various editing capabilities of
     * a {@link WebKitWebProcessExtension.WebPage} such as a possibility to react to the current selection in
     * {@link WebKitWebProcessExtension.WebPage}.
     * @gir-type Class
     * @since 2.10
     */
    class WebEditor extends GObject.Object {
        static $gtype: GObject.GType<WebEditor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebEditor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebEditor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebEditor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebEditor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebEditor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebEditor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebEditor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebEditor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the {@link WebKitWebProcessExtension.WebPage} that is associated with the {@link WebKitWebProcessExtension.WebEditor}.
         * @returns the associated {@link WebKitWebProcessExtension.WebPage}
         */
        get_page(): WebPage;
    }

    namespace WebFormManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted after form elements (or form associated elements) are associated to `frame`.
             * This is useful to implement form auto filling for web pages where form fields are added
             * dynamically. This signal might be emitted multiple times for the same frame.
             *
             * Note that this signal could be also emitted when form controls are moved between forms. In
             * that case, the `elements` array carries the list of those elements which have moved.
             *
             * Clients should take a reference to the members of the `elements` array if it is desired to
             * keep them alive after the signal handler returns.
             * @signal
             * @since 2.40
             */
            'form-controls-associated': (arg0: Frame, arg1: JavaScriptCore.Value[]) => void;
            /**
             * This signal is emitted when the DOM submit event is about to be fired for `form`.
             * JavaScript code may rely on the submit event to detect that the user has clicked
             * on a submit button, and to possibly cancel the form submission before
             * {@link WebKitWebProcessExtension.WebFormManager.SignalSignatures.will_submit_form | WebKitWebProcessExtension.WebFormManager::will-submit-form} signal is emitted.
             * However, beware that, for historical reasons, the submit event is not emitted at
             * all if the form submission is triggered by JavaScript. For these reasons,
             * this signal may not be used to reliably detect whether a form will be submitted.
             * Instead, use it to detect if a user has clicked on a form's submit button even if
             * JavaScript later cancels the form submission, or to read the values of the form's
             * fields even if JavaScript later clears certain fields before submitting. This may
             * be needed, for example, to implement a robust browser password manager, as some
             * misguided websites may use such techniques to attempt to thwart password managers.
             * @signal
             * @since 2.40
             */
            'will-send-submit-event': (arg0: JavaScriptCore.Value, arg1: Frame, arg2: Frame) => void;
            /**
             * This signal is emitted when `form` will imminently be submitted. It can no longer
             * be cancelled. This event always occurs immediately before a form is submitted to
             * its target, so use this event to reliably detect when a form is submitted. This
             * signal is emitted after {@link WebKitWebProcessExtension.WebFormManager.SignalSignatures.will_send_submit_event | WebKitWebProcessExtension.WebFormManager::will-send-submit-event} if that
             * signal is emitted.
             * @signal
             * @since 2.40
             */
            'will-submit-form': (arg0: JavaScriptCore.Value, arg1: Frame, arg2: Frame) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Form manager of a {@link WebKitWebProcessExtension.WebPage} in a {@link WebKitWebProcessExtension.ScriptWorld}
     * @gir-type Class
     * @since 2.40
     */
    class WebFormManager extends GObject.Object {
        static $gtype: GObject.GType<WebFormManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebFormManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebFormManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebFormManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebFormManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebFormManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebFormManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebFormManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebFormManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Set the value of an HTML input element as if it had been edited by
         * the user, triggering a change event, and set it as filled automatically.
         * If `element` is not an HTML input element this function does nothing.
         * @param element a {@link JavaScriptCore.Value}
         * @param value the text to set
         */
        static input_element_auto_fill(element: JavaScriptCore.Value, value: string): void;
        /**
         * Get whether `element` is an HTML input element that has been filled automatically.
         * @param element a {@link JavaScriptCore.Value}
         */
        static input_element_is_auto_filled(element: JavaScriptCore.Value): boolean;
        /**
         * Get whether `element` is an HTML text input element that has been edited by a user action.
         * @param element a {@link JavaScriptCore.Value}
         */
        static input_element_is_user_edited(element: JavaScriptCore.Value): boolean;
    }

    namespace WebHitTestResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Result of a Hit Test (Web Process Extensions).
     *
     * WebKitWebHitTestResult extends {@link WebKitWebProcessExtension.HitTestResult} to provide information
     * about the `WebKitDOMNode` in the coordinates of the Hit Test.
     * @gir-type Class
     * @since 2.8
     */
    class WebHitTestResult extends GObject.Object {
        static $gtype: GObject.GType<WebHitTestResult>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebHitTestResult.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebHitTestResult.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebHitTestResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebHitTestResult.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebHitTestResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebHitTestResult.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebHitTestResult.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebHitTestResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Check whether there is an editable element at the hit test position.
         *
         * Checks whether {@link WebKitWebProcessExtension.HitTestResultContext.EDITABLE} flag is present in
         * the context flags.
         * @returns `true` if the hit test covers an editable element or `false` otherwise.
         */
        context_is_editable(): boolean;
        /**
         * Check whether there is an image element at the hit test position.
         *
         * Checks whether {@link WebKitWebProcessExtension.HitTestResultContext.IMAGE} flag is present in
         * the context flags.
         * @returns `true` if the hit test covers an image element or `false` otherwise.
         */
        context_is_image(): boolean;
        /**
         * Check whether there is a link element at the hit test position.
         *
         * Checks whether {@link WebKitWebProcessExtension.HitTestResultContext.LINK} flag is present in
         * the context flags.
         * @returns `true` if the hit test covers a link element or `false` otherwise.
         */
        context_is_link(): boolean;
        /**
         * Check whether there is a media element at the hit test position.
         *
         * Checks whether {@link WebKitWebProcessExtension.HitTestResultContext.MEDIA} flag is present in
         * the context flags.
         * @returns `true` if the hit test covers a media element or `false` otherwise.
         */
        context_is_media(): boolean;
        /**
         * Check whether there is a scrollbar at the hit test position.
         *
         * Checks whether {@link WebKitWebProcessExtension.HitTestResultContext.SCROLLBAR} flag is present in
         * the context flags.
         * @returns `true` if the hit test covers a scrollbar or `false` otherwise.
         */
        context_is_scrollbar(): boolean;
        /**
         * Check whether there is a selected element at the hit test position.
         *
         * Checks whether {@link WebKitWebProcessExtension.HitTestResultContext.SELECTION} flag is present in
         * the context flags.
         * @returns `true` if the hit test covers a selected element or `false` otherwise.
         */
        context_is_selection(): boolean;
        /**
         * Gets the the context flags for the hit test result.
         * @returns a bitmask of {@link WebKitWebProcessExtension.HitTestResultContext} flags
         */
        get_context(): number;
        /**
         * Obtains the URI associated with the image element at the hit test position.
         * @returns the URI of the image element, or `null` if the hit test does not cover an image element.
         */
        get_image_uri(): string;
        /**
         * Get the {@link JavaScriptCore.Value} for the DOM node in `world` at the coordinates of the Hit Test.
         * @param world a {@link WebKitWebProcessExtension.ScriptWorld}, or `null` to use the default
         * @returns a {@link JavaScriptCore.Value} for the DOM node, or `null`
         */
        get_js_node(world?: ScriptWorld | null): JavaScriptCore.Value | null;
        /**
         * Obtains the label associated with the link element at the hit test position.
         * @returns the label of the link element, or `null` if the hit test does not cover a link element    or the link element does not have a label.
         */
        get_link_label(): string;
        /**
         * Obtains the title associated with the link element at the hit test position.
         * @returns the title of the link element, or `null` if the hit test does not cover a link element    or the link element does not have a title.
         */
        get_link_title(): string;
        /**
         * Obtains the URI associated with the link element at the hit test position.
         * @returns the URI of the link element, or `null` if the hit test does not cover a link element.
         */
        get_link_uri(): string;
        /**
         * Obtains the URI associated with the media element at the hit test position.
         * @returns the URI of the media element, or `null` if the hit test does not cover a media element.
         */
        get_media_uri(): string;
    }

    namespace WebPage {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted before a context menu is displayed in the UI Process to
             * give the application a chance to customize the proposed menu,
             * build its own context menu or pass user data to the UI Process.
             * This signal is useful when the information available in the UI Process
             * is not enough to build or customize the context menu, for example, to
             * add menu entries depending on the node at the coordinates of the
             * `hit_test_result`. Otherwise, it's recommended to use `WebKitWebView::context-menu`
             * signal instead.
             * @signal
             * @since 2.8
             */
            'context-menu': (arg0: ContextMenu, arg1: WebHitTestResult) => boolean | void;
            /**
             * This signal is emitted when the DOM document of a {@link WebKitWebProcessExtension.WebPage} has been
             * loaded.
             *
             * You can wait for this signal to get the DOM document
             * @signal
             */
            'document-loaded': () => void;
            /**
             * This signal is emitted when `request` is about to be sent to
             * the server. This signal can be used to modify the {@link WebKitWebProcessExtension.URIRequest}
             * that will be sent to the server. You can also cancel the resource load
             * operation by connecting to this signal and returning `true`.
             *
             * In case of a server redirection this signal is
             * emitted again with the `request` argument containing the new
             * request to be sent to the server due to the redirection and the
             * `redirected_response` parameter containing the response
             * received by the server for the initial request.
             *
             * Modifications to the {@link WebKitWebProcessExtension.URIRequest} and its associated
             * {@link Soup.MessageHeaders} will be taken into account when the request
             * is sent over the network.
             * @signal
             */
            'send-request': (arg0: URIRequest, arg1: URIResponse) => boolean | void;
            /**
             * This signal is emitted when a {@link WebKitWebProcessExtension.UserMessage} is received from the
             * `WebKitWebView` corresponding to `web_page`. You can reply to the message
             * using `webkit_user_message_send_reply()`.
             *
             * You can handle the user message asynchronously by calling `g_object_ref()` on
             * `message` and returning `true`. If the last reference of `message` is removed
             * and the message has been replied, the operation in the `WebKitWebView` will
             * finish with error {@link WebKitWebProcessExtension.UserMessageError.USER_MESSAGE_UNHANDLED_MESSAGE}.
             * @signal
             * @since 2.28
             */
            'user-message-received': (arg0: UserMessage) => boolean | void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            uri: string;
        }
    }

    /**
     * A loaded web page.
     * @gir-type Class
     */
    class WebPage extends GObject.Object {
        static $gtype: GObject.GType<WebPage>;

        // Properties

        /**
         * The current active URI of the {@link WebKitWebProcessExtension.WebPage}.
         */
        get uri(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebPage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebPage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebPage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebPage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebPage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the {@link WebKitWebProcessExtension.WebEditor} of a {@link WebKitWebProcessExtension.WebPage}.
         * @returns the {@link WebKitWebProcessExtension.WebEditor}
         */
        get_editor(): WebEditor;
        /**
         * Get the {@link WebKitWebProcessExtension.WebFormManager} of `web_page` in `world`.
         * @param world a {@link WebKitWebProcessExtension.ScriptWorld}
         * @returns a {@link WebKitWebProcessExtension.WebFormManager}
         */
        get_form_manager(world?: ScriptWorld | null): WebFormManager;
        /**
         * Get the identifier of the {@link WebKitWebProcessExtension.WebPage}
         * @returns the identifier of `web_page`
         */
        get_id(): number;
        /**
         * Returns the main frame of a {@link WebKitWebProcessExtension.WebPage}.
         * @returns the {@link WebKitWebProcessExtension.Frame} that is the main frame of `web_page`
         */
        get_main_frame(): Frame;
        /**
         * Returns the current active URI of `web_page`.
         *
         * You can monitor the active URI by connecting to the notify::uri
         * signal of `web_page`.
         * @returns the current active URI of `web_view` or `null` if nothing has been    loaded yet.
         */
        get_uri(): string;
        /**
         * Send `message` to the `WebKitWebView` corresponding to `web_page`. If `message` is floating, it's consumed.
         *
         * If you don't expect any reply, or you simply want to ignore it, you can pass `null` as `callback`.
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_page_send_message_to_view_finish()` to get the message reply.
         * @param message a {@link WebKitWebProcessExtension.UserMessage}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        send_message_to_view(
            message: UserMessage,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<UserMessage>;
        /**
         * Send `message` to the `WebKitWebView` corresponding to `web_page`. If `message` is floating, it's consumed.
         *
         * If you don't expect any reply, or you simply want to ignore it, you can pass `null` as `callback`.
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_page_send_message_to_view_finish()` to get the message reply.
         * @param message a {@link WebKitWebProcessExtension.UserMessage}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`
         */
        send_message_to_view(
            message: UserMessage,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Send `message` to the `WebKitWebView` corresponding to `web_page`. If `message` is floating, it's consumed.
         *
         * If you don't expect any reply, or you simply want to ignore it, you can pass `null` as `callback`.
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_page_send_message_to_view_finish()` to get the message reply.
         * @param message a {@link WebKitWebProcessExtension.UserMessage}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`
         */
        send_message_to_view(
            message: UserMessage,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<UserMessage> | void;
        /**
         * Finish an asynchronous operation started with `webkit_web_page_send_message_to_view()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link WebKitWebProcessExtension.UserMessage} with the reply or `null` in case of error.
         */
        send_message_to_view_finish(result: Gio.AsyncResult): UserMessage;
    }

    namespace WebProcessExtension {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted when a new {@link WebKitWebProcessExtension.WebPage} is created in
             * the Web Process.
             * @signal
             * @since 2.40
             */
            'page-created': (arg0: WebPage) => void;
            /**
             * This signal is emitted when a {@link WebKitWebProcessExtension.UserMessage} is received from the
             * `WebKitWebContext` corresponding to `extension`. Messages sent by `WebKitWebContext`
             * are always broadcasted to all web extensions and they can't be
             * replied to. Calling `webkit_user_message_send_reply()` will do nothing.
             * @signal
             * @since 2.40
             */
            'user-message-received': (arg0: UserMessage) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Represents an extension of the web process.
     *
     * WebKitWebProcessExtension is a loadable module for the web process. It allows you to execute code in the
     * web process and being able to use the DOM API, to change any request or to inject custom
     * JavaScript code, for example.
     *
     * To create a WebKitWebProcessExtension you should write a module with an initialization function that could
     * be either `webkit_web_process_extension_initialize()` with prototype {@link WebKitWebProcessExtension.WebProcessExtensionInitializeFunction} or
     * `webkit_web_process_extension_initialize_with_user_data()` with prototype {@link WebKitWebProcessExtension.WebProcessExtensionInitializeWithUserDataFunction}.
     * This function has to be public and it has to use the #G_MODULE_EXPORT macro. It is called when the
     * web process is initialized.
     *
     * ```c
     * static void
     * web_page_created_callback (WebKitWebProcessExtension *extension,
     *                            WebKitWebPage             *web_page,
     *                            gpointer                   user_data)
     * {
     *     g_print ("Page %d created for %s\n",
     *              webkit_web_page_get_id (web_page),
     *              webkit_web_page_get_uri (web_page));
     * }
     *
     * G_MODULE_EXPORT void
     * webkit_web_process_extension_initialize (WebKitWebProcessExtension *extension)
     * {
     *     g_signal_connect (extension, "page-created",
     *                       G_CALLBACK (web_page_created_callback),
     *                       NULL);
     * }
     * ```
     *
     * The previous piece of code shows a trivial example of an extension that notifies when
     * a {@link WebKitWebProcessExtension.WebPage} is created.
     *
     * WebKit has to know where it can find the created WebKitWebProcessExtension. To do so you
     * should use the `webkit_web_context_set_web_extensions_directory()` function. The signal
     * `WebKitWebContext::initialize-web-extensions` is the recommended place to call it.
     *
     * To provide the initialization data used by the `webkit_web_process_extension_initialize_with_user_data()`
     * function, you have to call `webkit_web_context_set_web_extensions_initialization_user_data()` with
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
     * @gir-type Class
     * @since 2.40
     */
    class WebProcessExtension extends GObject.Object {
        static $gtype: GObject.GType<WebProcessExtension>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebProcessExtension.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebProcessExtension.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebProcessExtension.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebProcessExtension.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebProcessExtension.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebProcessExtension.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebProcessExtension.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebProcessExtension.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the web page of the given `page_id`.
         * @param page_id the identifier of the {@link WebKitWebProcessExtension.WebPage} to get
         * @returns the {@link WebKitWebProcessExtension.WebPage} for the given `page_id`, or `null` if the    identifier doesn't correspond to an existing web page.
         */
        get_page(page_id: number): WebPage;
        /**
         * Send `message` to the `WebKitWebContext` corresponding to `extension`. If `message` is floating, it's consumed.
         *
         * If you don't expect any reply, or you simply want to ignore it, you can pass `null` as `calback`.
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_process_extension_send_message_to_context_finish()` to get the message reply.
         * @param message a {@link WebKitWebProcessExtension.UserMessage}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        send_message_to_context(
            message: UserMessage,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<UserMessage>;
        /**
         * Send `message` to the `WebKitWebContext` corresponding to `extension`. If `message` is floating, it's consumed.
         *
         * If you don't expect any reply, or you simply want to ignore it, you can pass `null` as `calback`.
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_process_extension_send_message_to_context_finish()` to get the message reply.
         * @param message a {@link WebKitWebProcessExtension.UserMessage}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`
         */
        send_message_to_context(
            message: UserMessage,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Send `message` to the `WebKitWebContext` corresponding to `extension`. If `message` is floating, it's consumed.
         *
         * If you don't expect any reply, or you simply want to ignore it, you can pass `null` as `calback`.
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_process_extension_send_message_to_context_finish()` to get the message reply.
         * @param message a {@link WebKitWebProcessExtension.UserMessage}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`
         */
        send_message_to_context(
            message: UserMessage,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<UserMessage> | void;
        /**
         * Finish an asynchronous operation started with `webkit_web_process_extension_send_message_to_context()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link WebKitWebProcessExtension.UserMessage} with the reply or `null` in case of error.
         */
        send_message_to_context_finish(result: Gio.AsyncResult): UserMessage;
    }

    /**
     * @gir-type Alias
     */
    type ContextMenuClass = typeof ContextMenu;
    /**
     * @gir-type Alias
     */
    type ContextMenuItemClass = typeof ContextMenuItem;
    /**
     * @gir-type Alias
     */
    type FrameClass = typeof Frame;
    /**
     * @gir-type Alias
     */
    type HitTestResultClass = typeof HitTestResult;
    /**
     * @gir-type Alias
     */
    type ScriptWorldClass = typeof ScriptWorld;
    /**
     * @gir-type Alias
     */
    type URIRequestClass = typeof URIRequest;
    /**
     * @gir-type Alias
     */
    type URIResponseClass = typeof URIResponse;
    /**
     * @gir-type Alias
     */
    type UserMessageClass = typeof UserMessage;
    /**
     * @gir-type Alias
     */
    type WebEditorClass = typeof WebEditor;
    /**
     * @gir-type Alias
     */
    type WebFormManagerClass = typeof WebFormManager;
    /**
     * @gir-type Alias
     */
    type WebHitTestResultClass = typeof WebHitTestResult;
    /**
     * @gir-type Alias
     */
    type WebPageClass = typeof WebPage;
    /**
     * @gir-type Alias
     */
    type WebProcessExtensionClass = typeof WebProcessExtension;
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

export default WebKitWebProcessExtension;

// END
