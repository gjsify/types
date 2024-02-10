/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './webkit2webextension-4.0-ambient.d.ts';
import './webkit2webextension-4.0-import.d.ts';
/**
 * WebKit2WebExtension-4.0
 */

import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type JavaScriptCore from '@girs/javascriptcore-4.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace WebKit2WebExtension {
    /**
     * Enum values used to denote the various levels of console messages.
     */
    enum ConsoleMessageLevel {
        /**
         * Information message.
         */
        INFO,
        /**
         * Log message.
         */
        LOG,
        /**
         * Warning message.
         */
        WARNING,
        /**
         * Error message.
         */
        ERROR,
        /**
         * Debug message.
         */
        DEBUG,
    }
    /**
     * Enum values used to denote the various sources of console messages.
     */
    enum ConsoleMessageSource {
        /**
         * Message produced by JavaScript.
         */
        JAVASCRIPT,
        /**
         * Network messages.
         */
        NETWORK,
        /**
         * Messages produced by console API.
         */
        CONSOLE_API,
        /**
         * Security messages.
         */
        SECURITY,
        /**
         * Other messages.
         */
        OTHER,
    }
    /**
     * Enum values used to denote the stock actions for
     * #WebKitContextMenuItem&lt;!-- --&gt;s
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
     * Used to indicate a particular stage in form submission. See
     * #WebKitWebPage::will-submit-form.
     */
    enum FormSubmissionStep {
        /**
         * indicates the form's
         * DOM submit event is about to be emitted.
         */
        SEND_DOM_EVENT,
        /**
         * indicates the form is about
         * to be submitted.
         */
        COMPLETE,
    }
    /**
     * Enum values used to denote errors happening when sending user messages.
     */
    enum UserMessageError {
        /**
         * The message was not handled by the receiver.
         */
        USER_MESSAGE_UNHANDLED_MESSAGE,
    }
    const DOM_CSS_RULE_CHARSET_RULE: number;
    const DOM_CSS_RULE_FONT_FACE_RULE: number;
    const DOM_CSS_RULE_IMPORT_RULE: number;
    const DOM_CSS_RULE_MEDIA_RULE: number;
    const DOM_CSS_RULE_PAGE_RULE: number;
    const DOM_CSS_RULE_STYLE_RULE: number;
    const DOM_CSS_RULE_UNKNOWN_RULE: number;
    const DOM_CSS_VALUE_CSS_CUSTOM: number;
    const DOM_CSS_VALUE_CSS_INHERIT: number;
    const DOM_CSS_VALUE_CSS_PRIMITIVE_VALUE: number;
    const DOM_CSS_VALUE_CSS_VALUE_LIST: number;
    const DOM_ELEMENT_ALLOW_KEYBOARD_INPUT: number;
    const DOM_EVENT_AT_TARGET: number;
    const DOM_EVENT_BLUR: number;
    const DOM_EVENT_BUBBLING_PHASE: number;
    const DOM_EVENT_CAPTURING_PHASE: number;
    const DOM_EVENT_CHANGE: number;
    const DOM_EVENT_CLICK: number;
    const DOM_EVENT_DBLCLICK: number;
    const DOM_EVENT_DRAGDROP: number;
    const DOM_EVENT_FOCUS: number;
    const DOM_EVENT_KEYDOWN: number;
    const DOM_EVENT_KEYPRESS: number;
    const DOM_EVENT_KEYUP: number;
    const DOM_EVENT_MOUSEDOWN: number;
    const DOM_EVENT_MOUSEDRAG: number;
    const DOM_EVENT_MOUSEMOVE: number;
    const DOM_EVENT_MOUSEOUT: number;
    const DOM_EVENT_MOUSEOVER: number;
    const DOM_EVENT_MOUSEUP: number;
    const DOM_EVENT_NONE: number;
    const DOM_EVENT_SELECT: number;
    const DOM_KEYBOARD_EVENT_KEY_LOCATION_LEFT: number;
    const DOM_KEYBOARD_EVENT_KEY_LOCATION_NUMPAD: number;
    const DOM_KEYBOARD_EVENT_KEY_LOCATION_RIGHT: number;
    const DOM_KEYBOARD_EVENT_KEY_LOCATION_STANDARD: number;
    const DOM_NODE_ATTRIBUTE_NODE: number;
    const DOM_NODE_CDATA_SECTION_NODE: number;
    const DOM_NODE_COMMENT_NODE: number;
    const DOM_NODE_DOCUMENT_FRAGMENT_NODE: number;
    const DOM_NODE_DOCUMENT_NODE: number;
    const DOM_NODE_DOCUMENT_POSITION_CONTAINED_BY: number;
    const DOM_NODE_DOCUMENT_POSITION_CONTAINS: number;
    const DOM_NODE_DOCUMENT_POSITION_DISCONNECTED: number;
    const DOM_NODE_DOCUMENT_POSITION_FOLLOWING: number;
    const DOM_NODE_DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    const DOM_NODE_DOCUMENT_POSITION_PRECEDING: number;
    const DOM_NODE_DOCUMENT_TYPE_NODE: number;
    const DOM_NODE_ELEMENT_NODE: number;
    const DOM_NODE_ENTITY_NODE: number;
    const DOM_NODE_ENTITY_REFERENCE_NODE: number;
    /**
     * Accept the node. Use this macro as return value of webkit_dom_node_filter_accept_node()
     * implementation to accept the given #WebKitDOMNode
     */
    const DOM_NODE_FILTER_ACCEPT: number;
    /**
     * Reject the node. Use this macro as return value of webkit_dom_node_filter_accept_node()
     * implementation to reject the given #WebKitDOMNode. The children of the given node will
     * be rejected too.
     */
    const DOM_NODE_FILTER_REJECT: number;
    /**
     * Show all nodes.
     */
    const DOM_NODE_FILTER_SHOW_ALL: number;
    /**
     * Show #WebKitDOMAttr nodes.
     */
    const DOM_NODE_FILTER_SHOW_ATTRIBUTE: number;
    /**
     * Show #WebKitDOMCDataSection nodes.
     */
    const DOM_NODE_FILTER_SHOW_CDATA_SECTION: number;
    /**
     * Show #WebKitDOMComment nodes.
     */
    const DOM_NODE_FILTER_SHOW_COMMENT: number;
    /**
     * Show #WebKitDOMDocument nodes.
     */
    const DOM_NODE_FILTER_SHOW_DOCUMENT: number;
    /**
     * Show #WebKitDOMDocumentFragment nodes.
     */
    const DOM_NODE_FILTER_SHOW_DOCUMENT_FRAGMENT: number;
    /**
     * Show #WebKitDOMDocumentType nodes.
     */
    const DOM_NODE_FILTER_SHOW_DOCUMENT_TYPE: number;
    /**
     * Show #WebKitDOMElement nodes.
     */
    const DOM_NODE_FILTER_SHOW_ELEMENT: number;
    /**
     * Show #WebKitDOMEntity nodes.
     */
    const DOM_NODE_FILTER_SHOW_ENTITY: number;
    /**
     * Show #WebKitDOMEntityReference nodes.
     */
    const DOM_NODE_FILTER_SHOW_ENTITY_REFERENCE: number;
    /**
     * Show #WebKitDOMNotation nodes.
     */
    const DOM_NODE_FILTER_SHOW_NOTATION: number;
    /**
     * Show #WebKitDOMProcessingInstruction nodes.
     */
    const DOM_NODE_FILTER_SHOW_PROCESSING_INSTRUCTION: number;
    /**
     * Show #WebKitDOMText nodes.
     */
    const DOM_NODE_FILTER_SHOW_TEXT: number;
    /**
     * Skip the node. Use this macro as return value of webkit_dom_node_filter_accept_node()
     * implementation to skip the given #WebKitDOMNode. The children of the given node will
     * not be skipped.
     */
    const DOM_NODE_FILTER_SKIP: number;
    const DOM_NODE_PROCESSING_INSTRUCTION_NODE: number;
    const DOM_NODE_TEXT_NODE: number;
    const DOM_RANGE_END_TO_END: number;
    const DOM_RANGE_END_TO_START: number;
    const DOM_RANGE_NODE_AFTER: number;
    const DOM_RANGE_NODE_BEFORE: number;
    const DOM_RANGE_NODE_BEFORE_AND_AFTER: number;
    const DOM_RANGE_NODE_INSIDE: number;
    const DOM_RANGE_START_TO_END: number;
    const DOM_RANGE_START_TO_START: number;
    const DOM_XPATH_RESULT_ANY_TYPE: number;
    const DOM_XPATH_RESULT_ANY_UNORDERED_NODE_TYPE: number;
    const DOM_XPATH_RESULT_BOOLEAN_TYPE: number;
    const DOM_XPATH_RESULT_FIRST_ORDERED_NODE_TYPE: number;
    const DOM_XPATH_RESULT_NUMBER_TYPE: number;
    const DOM_XPATH_RESULT_ORDERED_NODE_ITERATOR_TYPE: number;
    const DOM_XPATH_RESULT_ORDERED_NODE_SNAPSHOT_TYPE: number;
    const DOM_XPATH_RESULT_STRING_TYPE: number;
    const DOM_XPATH_RESULT_UNORDERED_NODE_ITERATOR_TYPE: number;
    const DOM_XPATH_RESULT_UNORDERED_NODE_SNAPSHOT_TYPE: number;
    interface WebExtensionInitializeFunction {
        (extension: WebExtension): void;
    }
    interface WebExtensionInitializeWithUserDataFunction {
        (extension: WebExtension, user_data: GLib.Variant): void;
    }
    /**
     * Enum values with flags representing the context of a #WebKitHitTestResult.
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
    module ContextMenu {
        // Constructor properties interface
    }

    /**
     * Represents the context menu in a #WebKitWebView.
     *
     * #WebKitContextMenu represents a context menu containing
     * #WebKitContextMenuItem&lt;!-- --&gt;s in a #WebKitWebView.
     *
     * When a #WebKitWebView is about to display the context menu, it
     * emits the #WebKitWebView::context-menu signal, which has the
     * #WebKitContextMenu as an argument. You can modify it, adding new
     * submenus that you can create with webkit_context_menu_new(), adding
     * new #WebKitContextMenuItem&lt;!-- --&gt;s with
     * webkit_context_menu_prepend(), webkit_context_menu_append() or
     * webkit_context_menu_insert(), maybe after having removed the
     * existing ones with webkit_context_menu_remove_all().
     */
    class ContextMenu extends GObject.Object {
        // Constructors of WebKit2WebExtension-4.0.ContextMenu

        static ['new'](): ContextMenu;

        static new_with_items(items: ContextMenuItem[]): ContextMenu;

        // Owm methods of WebKit2WebExtension-4.0.ContextMenu

        /**
         * Adds `item` at the end of the `menu`.
         * @param item the #WebKitContextMenuItem to add
         */
        append(item: ContextMenuItem): void;
        /**
         * Gets the first item in the `menu`.
         * @returns the first #WebKitContextMenuItem of @menu,    or %NULL if the #WebKitContextMenu is empty.
         */
        first(): ContextMenuItem;
        /**
         * Gets the #GdkEvent that triggered the context menu. This function only returns a valid
         * #GdkEvent when called for a #WebKitContextMenu passed to #WebKitWebView::context-menu
         * signal; in all other cases, %NULL is returned.
         *
         * The returned #GdkEvent is expected to be one of the following types:
         * &lt;itemizedlist&gt;
         * &lt;listitem&gt;&lt;para&gt;
         * a #GdkEventButton of type %GDK_BUTTON_PRESS when the context menu was triggered with mouse.
         * &lt;/para&gt;&lt;/listitem&gt;
         * &lt;listitem&gt;&lt;para&gt;
         * a #GdkEventKey of type %GDK_KEY_PRESS if the keyboard was used to show the menu.
         * &lt;/para&gt;&lt;/listitem&gt;
         * &lt;listitem&gt;&lt;para&gt;
         * a generic #GdkEvent of type %GDK_NOTHING when the #GtkWidget::popup-menu signal was used to show the context menu.
         * &lt;/para&gt;&lt;/listitem&gt;
         * &lt;/itemizedlist&gt;
         * @returns the menu event or %NULL.
         */
        get_event(): Gdk.Event;
        /**
         * Gets the item at the given position in the `menu`.
         * @param position the position of the item, counting from 0
         * @returns the #WebKitContextMenuItem at position @position in @menu,    or %NULL if the position is off the end of the @menu.
         */
        get_item_at_position(position: number): ContextMenuItem;
        /**
         * Returns the item list of `menu`.
         * @returns a #GList of    #WebKitContextMenuItem&lt;!-- --&gt;s
         */
        get_items(): ContextMenuItem[];
        /**
         * Gets the length of the `menu`.
         * @returns the number of #WebKitContextMenuItem&lt;!-- --&gt;s in @menu
         */
        get_n_items(): number;
        /**
         * Gets the user data of `menu`.
         *
         * This function can be used from the UI Process to get user data previously set
         * from the Web Process with webkit_context_menu_set_user_data().
         * @returns the user data of @menu, or %NULL if @menu doesn't have user data
         */
        get_user_data(): GLib.Variant;
        /**
         * Inserts `item` into the `menu` at the given position.
         *
         * If `position` is negative, or is larger than the number of items
         * in the #WebKitContextMenu, the item is added on to the end of
         * the `menu`. The first position is 0.
         * @param item the #WebKitContextMenuItem to add
         * @param position the position to insert the item
         */
        insert(item: ContextMenuItem, position: number): void;
        /**
         * Gets the last item in the `menu`.
         * @returns the last #WebKitContextMenuItem of @menu,    or %NULL if the #WebKitContextMenu is empty.
         */
        last(): ContextMenuItem;
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
        move_item(item: ContextMenuItem, position: number): void;
        /**
         * Adds `item` at the beginning of the `menu`.
         * @param item the #WebKitContextMenuItem to add
         */
        prepend(item: ContextMenuItem): void;
        /**
         * Removes `item` from the `menu`.
         *
         * See also webkit_context_menu_remove_all() to remove all items.
         * @param item the #WebKitContextMenuItem to remove
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
         * that can be retrieved from the UI Process using webkit_context_menu_get_user_data().
         * If the `user_data` #GVariant is floating, it is consumed.
         * @param user_data a #GVariant
         */
        set_user_data(user_data: GLib.Variant): void;
    }

    module ContextMenuItem {
        // Constructor properties interface
    }

    /**
     * One item of a #WebKitContextMenu.
     *
     * The #WebKitContextMenu is composed of #WebKitContextMenuItem&lt;!--
     * --&gt;s. These items can be created from a #GtkAction, from a
     * #WebKitContextMenuAction or from a #WebKitContextMenuAction and a
     * label. These #WebKitContextMenuAction&lt;!-- --&gt;s denote stock actions
     * for the items. You can also create separators and submenus.
     */
    class ContextMenuItem extends GObject.InitiallyUnowned {
        // Constructors of WebKit2WebExtension-4.0.ContextMenuItem

        static ['new'](action: Gtk.Action): ContextMenuItem;

        static new_from_gaction(action: Gio.Action, label: string, target?: GLib.Variant | null): ContextMenuItem;

        static new_from_stock_action(action: ContextMenuAction): ContextMenuItem;

        static new_from_stock_action_with_label(action: ContextMenuAction, label: string): ContextMenuItem;

        static new_separator(): ContextMenuItem;

        static new_with_submenu(label: string, submenu: ContextMenu): ContextMenuItem;

        // Owm methods of WebKit2WebExtension-4.0.ContextMenuItem

        /**
         * Gets the action associated to `item` as a #GtkAction.
         * @returns the #GtkAction associated to the #WebKitContextMenuItem,    or %NULL if @item is a separator.
         */
        get_action(): Gtk.Action;
        /**
         * Gets the action associated to `item` as a #GAction.
         * @returns the #GAction associated to the #WebKitContextMenuItem,    or %NULL if @item is a separator.
         */
        get_gaction(): Gio.Action;
        /**
         * Gets the #WebKitContextMenuAction of `item`.
         *
         * If the #WebKitContextMenuItem was not
         * created for a stock action %WEBKIT_CONTEXT_MENU_ACTION_CUSTOM will be
         * returned. If the #WebKitContextMenuItem is a separator %WEBKIT_CONTEXT_MENU_ACTION_NO_ACTION
         * will be returned.
         * @returns the #WebKitContextMenuAction of @item
         */
        get_stock_action(): ContextMenuAction;
        /**
         * Gets the submenu of `item`.
         * @returns the #WebKitContextMenu representing the submenu of    @item or %NULL if @item doesn't have a submenu.
         */
        get_submenu(): ContextMenu;
        /**
         * Checks whether `item` is a separator.
         * @returns %TRUE is @item is a separator or %FALSE otherwise
         */
        is_separator(): boolean;
        /**
         * Sets or replaces the `item` submenu.
         *
         * If `submenu` is %NULL the current
         * submenu of `item` is removed.
         * @param submenu a #WebKitContextMenu
         */
        set_submenu(submenu?: ContextMenu | null): void;
    }

    module DOMAttr {
        // Constructor properties interface
    }

    class DOMAttr extends DOMNode {
        // Own properties of WebKit2WebExtension-4.0.DOMAttr

        readonly local_name: string;
        readonly localName: string;
        readonly name: string;
        readonly namespace_uri: string;
        readonly namespaceUri: string;
        readonly owner_element: DOMElement;
        readonly ownerElement: DOMElement;
        readonly prefix: string;
        readonly specified: boolean;
        value: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMAttr

        get_local_name(): string;
        get_name(): string;
        get_namespace_uri(): string;
        get_owner_element(): DOMElement;
        get_prefix(): string;
        get_specified(): boolean;
        get_value(): string;
        set_value(value: string): void;
    }

    module DOMBlob {
        // Constructor properties interface
    }

    class DOMBlob extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMBlob

        readonly size: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMBlob

        get_size(): number;
    }

    module DOMCDATASection {
        // Constructor properties interface
    }

    class DOMCDATASection extends DOMText {}

    module DOMCSSRule {
        // Constructor properties interface
    }

    class DOMCSSRule extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMCSSRule

        css_text: string;
        cssText: string;
        readonly parent_rule: DOMCSSRule;
        readonly parentRule: DOMCSSRule;
        readonly parent_style_sheet: DOMCSSStyleSheet;
        readonly parentStyleSheet: DOMCSSStyleSheet;
        readonly type: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMCSSRule

        get_css_text(): string;
        get_parent_rule(): DOMCSSRule;
        get_parent_style_sheet(): DOMCSSStyleSheet;
        get_rule_type(): number;
        set_css_text(value: string): void;
    }

    module DOMCSSRuleList {
        // Constructor properties interface
    }

    class DOMCSSRuleList extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMCSSRuleList

        readonly length: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMCSSRuleList

        get_length(): number;
        item(index: number): DOMCSSRule;
    }

    module DOMCSSStyleDeclaration {
        // Constructor properties interface
    }

    class DOMCSSStyleDeclaration extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMCSSStyleDeclaration

        css_text: string;
        cssText: string;
        readonly length: number;
        readonly parent_rule: DOMCSSRule;
        readonly parentRule: DOMCSSRule;

        // Owm methods of WebKit2WebExtension-4.0.DOMCSSStyleDeclaration

        get_css_text(): string;
        get_length(): number;
        get_parent_rule(): DOMCSSRule;
        get_property_priority(propertyName: string): string;
        get_property_shorthand(propertyName: string): string;
        get_property_value(propertyName: string): string;
        is_property_implicit(propertyName: string): boolean;
        item(index: number): string;
        remove_property(propertyName: string): string;
        set_css_text(value: string): void;
        set_property(propertyName: string, value: string, priority: string): void;
    }

    module DOMCSSStyleSheet {
        // Constructor properties interface
    }

    class DOMCSSStyleSheet extends DOMStyleSheet {
        // Own properties of WebKit2WebExtension-4.0.DOMCSSStyleSheet

        readonly css_rules: DOMCSSRuleList;
        readonly cssRules: DOMCSSRuleList;
        readonly owner_rule: DOMCSSRule;
        readonly ownerRule: DOMCSSRule;
        readonly rules: DOMCSSRuleList;

        // Owm methods of WebKit2WebExtension-4.0.DOMCSSStyleSheet

        add_rule(selector: string, style: string, index: number): number;
        delete_rule(index: number): void;
        get_css_rules(): DOMCSSRuleList;
        get_owner_rule(): DOMCSSRule;
        get_rules(): DOMCSSRuleList;
        insert_rule(rule: string, index: number): number;
        remove_rule(index: number): void;
    }

    module DOMCSSValue {
        // Constructor properties interface
    }

    class DOMCSSValue extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMCSSValue

        css_text: string;
        cssText: string;
        readonly css_value_type: number;
        readonly cssValueType: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMCSSValue

        get_css_text(): string;
        get_css_value_type(): number;
        set_css_text(value: string): void;
    }

    module DOMCharacterData {
        // Constructor properties interface
    }

    class DOMCharacterData extends DOMNode {
        // Own properties of WebKit2WebExtension-4.0.DOMCharacterData

        data: string;
        readonly length: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMCharacterData

        append_data(data: string): void;
        delete_data(offset: number, length: number): void;
        get_data(): string;
        get_length(): number;
        insert_data(offset: number, data: string): void;
        replace_data(offset: number, length: number, data: string): void;
        set_data(value: string): void;
        substring_data(offset: number, length: number): string;
    }

    module DOMClientRect {
        // Constructor properties interface
    }

    class DOMClientRect extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMClientRect

        readonly bottom: number;
        readonly height: number;
        readonly left: number;
        readonly right: number;
        readonly top: number;
        readonly width: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMClientRect

        /**
         * Returns the bottom coordinate of `self,` relative to the viewport.
         * @returns A #gfloat
         */
        get_bottom(): number;
        /**
         * Returns the height of `self`.
         * @returns A #gfloat
         */
        get_height(): number;
        /**
         * Returns the left coordinate of `self,` relative to the viewport.
         * @returns A #gfloat
         */
        get_left(): number;
        /**
         * Returns the right coordinate of `self,` relative to the viewport.
         * @returns A #gfloat
         */
        get_right(): number;
        /**
         * Returns the top coordinate of `self,` relative to the viewport.
         * @returns A #gfloat
         */
        get_top(): number;
        /**
         * Returns the width of `self`.
         * @returns A #gfloat
         */
        get_width(): number;
    }

    module DOMClientRectList {
        // Constructor properties interface
    }

    class DOMClientRectList extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMClientRectList

        readonly length: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMClientRectList

        /**
         * Returns the number of #WebKitDOMClientRect objects that `self` contains.
         * @returns A #gulong
         */
        get_length(): number;
        /**
         * Returns the #WebKitDOMClientRect object that `self` contains at `index`.
         * @param index A #gulong
         * @returns A #WebKitDOMClientRect
         */
        item(index: number): DOMClientRect;
    }

    module DOMComment {
        // Constructor properties interface
    }

    class DOMComment extends DOMCharacterData {}

    module DOMDOMImplementation {
        // Constructor properties interface
    }

    class DOMDOMImplementation extends DOMObject {
        // Owm methods of WebKit2WebExtension-4.0.DOMDOMImplementation

        create_css_style_sheet(title: string, media: string): DOMCSSStyleSheet;
        create_document(
            namespaceURI: string | null,
            qualifiedName: string,
            doctype?: DOMDocumentType | null,
        ): DOMDocument;
        create_document_type(qualifiedName: string, publicId: string, systemId: string): DOMDocumentType;
        create_html_document(title: string): DOMHTMLDocument;
        has_feature(feature: string, version: string): boolean;
    }

    module DOMDOMSelection {
        // Constructor properties interface
    }

    class DOMDOMSelection extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMDOMSelection

        readonly anchor_node: DOMNode;
        readonly anchorNode: DOMNode;
        readonly anchor_offset: number;
        readonly anchorOffset: number;
        readonly base_node: DOMNode;
        readonly baseNode: DOMNode;
        readonly base_offset: number;
        readonly baseOffset: number;
        readonly extent_node: DOMNode;
        readonly extentNode: DOMNode;
        readonly extent_offset: number;
        readonly extentOffset: number;
        readonly focus_node: DOMNode;
        readonly focusNode: DOMNode;
        readonly focus_offset: number;
        readonly focusOffset: number;
        readonly is_collapsed: boolean;
        readonly isCollapsed: boolean;
        readonly range_count: number;
        readonly rangeCount: number;
        readonly type: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMDOMSelection

        add_range(range: DOMRange): void;
        collapse(node: DOMNode, offset: number): void;
        collapse_to_end(): void;
        collapse_to_start(): void;
        contains_node(node: DOMNode, allowPartial: boolean): boolean;
        delete_from_document(): void;
        empty(): void;
        extend(node: DOMNode, offset: number): void;
        get_anchor_node(): DOMNode;
        get_anchor_offset(): number;
        get_base_node(): DOMNode;
        get_base_offset(): number;
        get_extent_node(): DOMNode;
        get_extent_offset(): number;
        get_focus_node(): DOMNode;
        get_focus_offset(): number;
        get_is_collapsed(): boolean;
        get_range_at(index: number): DOMRange;
        get_range_count(): number;
        get_selection_type(): string;
        modify(alter: string, direction: string, granularity: string): void;
        remove_all_ranges(): void;
        select_all_children(node: DOMNode): void;
        set_base_and_extent(baseNode: DOMNode, baseOffset: number, extentNode: DOMNode, extentOffset: number): void;
        set_position(node: DOMNode, offset: number): void;
    }

    module DOMDOMTokenList {
        // Constructor properties interface
    }

    class DOMDOMTokenList extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMDOMTokenList

        readonly length: number;
        value: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMDOMTokenList

        contains(token: string): boolean;
        get_length(): number;
        get_value(): string;
        item(index: number): string;
        replace(token: string, newToken: string): void;
        set_value(value: string): void;
        toggle(token: string, force: boolean): boolean;
    }

    module DOMDOMWindow {
        // Constructor properties interface
    }

    class DOMDOMWindow extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMDOMWindow

        readonly closed: boolean;
        default_status: string;
        defaultStatus: string;
        readonly device_pixel_ratio: number;
        readonly devicePixelRatio: number;
        readonly document: DOMDocument;
        readonly frame_element: DOMElement;
        readonly frameElement: DOMElement;
        readonly frames: DOMDOMWindow;
        readonly inner_height: number;
        readonly innerHeight: number;
        readonly inner_width: number;
        readonly innerWidth: number;
        readonly length: number;
        name: string;
        readonly offscreen_buffering: boolean;
        readonly offscreenBuffering: boolean;
        readonly opener: DOMDOMWindow;
        readonly orientation: number;
        readonly outer_height: number;
        readonly outerHeight: number;
        readonly outer_width: number;
        readonly outerWidth: number;
        readonly page_x_offset: number;
        readonly pageXOffset: number;
        readonly page_y_offset: number;
        readonly pageYOffset: number;
        readonly parent: DOMDOMWindow;
        readonly screen_left: number;
        readonly screenLeft: number;
        readonly screen_top: number;
        readonly screenTop: number;
        readonly screen_x: number;
        readonly screenX: number;
        readonly screen_y: number;
        readonly screenY: number;
        readonly scroll_x: number;
        readonly scrollX: number;
        readonly scroll_y: number;
        readonly scrollY: number;
        readonly self: DOMDOMWindow;
        status: string;
        readonly top: DOMDOMWindow;
        readonly window: DOMDOMWindow;

        // Owm methods of WebKit2WebExtension-4.0.DOMDOMWindow

        alert(message: string): void;
        blur(): void;
        capture_events(): void;
        close(): void;
        confirm(message: string): boolean;
        find(
            string: string,
            caseSensitive: boolean,
            backwards: boolean,
            wrap: boolean,
            wholeWord: boolean,
            searchInFrames: boolean,
            showDialog: boolean,
        ): boolean;
        focus(): void;
        get_closed(): boolean;
        get_computed_style(element: DOMElement, pseudoElement?: string | null): DOMCSSStyleDeclaration;
        get_default_status(): string;
        get_device_pixel_ratio(): number;
        get_document(): DOMDocument;
        get_frame_element(): DOMElement;
        get_frames(): DOMDOMWindow;
        get_inner_height(): number;
        get_inner_width(): number;
        get_length(): number;
        get_name(): string;
        get_offscreen_buffering(): boolean;
        get_opener(): DOMDOMWindow;
        get_orientation(): number;
        get_outer_height(): number;
        get_outer_width(): number;
        get_page_x_offset(): number;
        get_page_y_offset(): number;
        get_parent(): DOMDOMWindow;
        get_screen_left(): number;
        get_screen_top(): number;
        get_screen_x(): number;
        get_screen_y(): number;
        get_scroll_x(): number;
        get_scroll_y(): number;
        get_selection(): DOMDOMSelection;
        get_self(): DOMDOMWindow;
        get_status(): string;
        get_top(): DOMDOMWindow;
        get_window(): DOMDOMWindow;
        move_by(x: number, y: number): void;
        move_to(x: number, y: number): void;
        print(): void;
        prompt(message: string, defaultValue: string): string;
        release_events(): void;
        resize_by(x: number, y: number): void;
        resize_to(width: number, height: number): void;
        scroll_by(x: number, y: number): void;
        scroll_to(x: number, y: number): void;
        set_default_status(value: string): void;
        set_name(value: string): void;
        set_status(value: string): void;
        stop(): void;
        webkit_message_handlers_post_message(handler: string, message: string): boolean;
    }

    module DOMDocument {
        // Constructor properties interface
    }

    class DOMDocument extends DOMNode {
        // Own properties of WebKit2WebExtension-4.0.DOMDocument

        readonly active_element: DOMElement;
        readonly activeElement: DOMElement;
        readonly anchors: DOMHTMLCollection;
        readonly applets: DOMHTMLCollection;
        readonly body: DOMHTMLElement;
        readonly character_set: string;
        readonly characterSet: string;
        charset: string;
        readonly child_element_count: number;
        readonly childElementCount: number;
        readonly children: DOMHTMLCollection;
        readonly compat_mode: string;
        readonly compatMode: string;
        readonly content_type: string;
        readonly contentType: string;
        cookie: string;
        readonly current_script: DOMHTMLScriptElement;
        readonly currentScript: DOMHTMLScriptElement;
        readonly default_view: DOMDOMWindow;
        readonly defaultView: DOMDOMWindow;
        design_mode: string;
        designMode: string;
        dir: string;
        readonly doctype: DOMDocumentType;
        readonly document_element: DOMElement;
        readonly documentElement: DOMElement;
        document_uri: string;
        documentUri: string;
        readonly domain: string;
        readonly embeds: DOMHTMLCollection;
        readonly first_element_child: DOMElement;
        readonly firstElementChild: DOMElement;
        readonly forms: DOMHTMLCollection;
        readonly head: DOMHTMLHeadElement;
        readonly hidden: boolean;
        readonly images: DOMHTMLCollection;
        readonly implementation: DOMDOMImplementation;
        readonly input_encoding: string;
        readonly inputEncoding: string;
        readonly last_element_child: DOMElement;
        readonly lastElementChild: DOMElement;
        readonly last_modified: string;
        readonly lastModified: string;
        readonly links: DOMHTMLCollection;
        readonly origin: string;
        readonly plugins: DOMHTMLCollection;
        readonly pointer_lock_element: DOMElement;
        readonly pointerLockElement: DOMElement;
        readonly preferred_stylesheet_set: string;
        readonly preferredStylesheetSet: string;
        readonly ready_state: string;
        readonly readyState: string;
        readonly referrer: string;
        readonly scripts: DOMHTMLCollection;
        readonly scrolling_element: DOMElement;
        readonly scrollingElement: DOMElement;
        selected_stylesheet_set: string;
        selectedStylesheetSet: string;
        readonly style_sheets: DOMStyleSheetList;
        readonly styleSheets: DOMStyleSheetList;
        title: string;
        readonly url: string;
        readonly visibility_state: string;
        readonly visibilityState: string;
        readonly webkit_current_full_screen_element: DOMElement;
        readonly webkitCurrentFullScreenElement: DOMElement;
        readonly webkit_full_screen_keyboard_input_allowed: boolean;
        readonly webkitFullScreenKeyboardInputAllowed: boolean;
        readonly webkit_fullscreen_element: DOMElement;
        readonly webkitFullscreenElement: DOMElement;
        readonly webkit_fullscreen_enabled: boolean;
        readonly webkitFullscreenEnabled: boolean;
        readonly webkit_is_full_screen: boolean;
        readonly webkitIsFullScreen: boolean;
        readonly xml_encoding: string;
        readonly xmlEncoding: string;
        xml_standalone: boolean;
        xmlStandalone: boolean;
        xml_version: string;
        xmlVersion: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMDocument

        adopt_node(source: DOMNode): DOMNode;
        caret_range_from_point(x: number, y: number): DOMRange;
        create_attribute(name: string): DOMAttr;
        create_attribute_ns(namespaceURI: string | null, qualifiedName: string): DOMAttr;
        create_cdata_section(data: string): DOMCDATASection;
        create_comment(data: string): DOMComment;
        create_css_style_declaration(): DOMCSSStyleDeclaration;
        create_document_fragment(): DOMDocumentFragment;
        create_element(tagName: string): DOMElement;
        create_element_ns(namespaceURI: string | null, qualifiedName: string): DOMElement;
        /**
         * This function has been removed from the DOM spec and it just returns %NULL.
         * @param name A #gchar
         * @returns A #WebKitDOMEntityReference
         */
        create_entity_reference(name?: string | null): DOMEntityReference;
        create_event(eventType: string): DOMEvent;
        create_expression(expression: string, resolver: DOMXPathNSResolver): DOMXPathExpression;
        create_node_iterator(
            root: DOMNode,
            whatToShow: number,
            filter: DOMNodeFilter | null,
            expandEntityReferences: boolean,
        ): DOMNodeIterator;
        create_ns_resolver(nodeResolver: DOMNode): DOMXPathNSResolver;
        create_processing_instruction(target: string, data: string): DOMProcessingInstruction;
        create_range(): DOMRange;
        create_text_node(data: string): DOMText;
        create_tree_walker(
            root: DOMNode,
            whatToShow: number,
            filter: DOMNodeFilter | null,
            expandEntityReferences: boolean,
        ): DOMTreeWalker;
        element_from_point(x: number, y: number): DOMElement;
        evaluate(
            expression: string,
            contextNode: DOMNode,
            resolver: DOMXPathNSResolver | null,
            type: number,
            inResult?: DOMXPathResult | null,
        ): DOMXPathResult;
        exec_command(command: string, userInterface: boolean, value: string): boolean;
        exit_pointer_lock(): void;
        get_active_element(): DOMElement;
        get_anchors(): DOMHTMLCollection;
        get_applets(): DOMHTMLCollection;
        get_body(): DOMHTMLElement;
        get_character_set(): string;
        get_charset(): string;
        get_child_element_count(): number;
        get_children(): DOMHTMLCollection;
        get_compat_mode(): string;
        get_content_type(): string;
        get_cookie(): string;
        get_current_script(): DOMHTMLScriptElement;
        get_default_charset(): string;
        get_default_view(): DOMDOMWindow;
        get_design_mode(): string;
        get_dir(): string;
        get_doctype(): DOMDocumentType;
        get_document_element(): DOMElement;
        get_document_uri(): string;
        get_domain(): string;
        get_element_by_id(elementId: string): DOMElement;
        get_elements_by_class_name(class_name: string): DOMNodeList;
        get_elements_by_class_name_as_html_collection(classNames: string): DOMHTMLCollection;
        get_elements_by_name(elementName: string): DOMNodeList;
        get_elements_by_tag_name(tag_name: string): DOMNodeList;
        get_elements_by_tag_name_as_html_collection(tagname: string): DOMHTMLCollection;
        get_elements_by_tag_name_ns(namespace_uri: string, tag_name: string): DOMNodeList;
        get_elements_by_tag_name_ns_as_html_collection(namespaceURI: string, localName: string): DOMHTMLCollection;
        get_embeds(): DOMHTMLCollection;
        get_first_element_child(): DOMElement;
        get_forms(): DOMHTMLCollection;
        get_head(): DOMHTMLHeadElement;
        get_hidden(): boolean;
        get_images(): DOMHTMLCollection;
        get_implementation(): DOMDOMImplementation;
        get_input_encoding(): string;
        get_last_element_child(): DOMElement;
        get_last_modified(): string;
        get_links(): DOMHTMLCollection;
        get_origin(): string;
        get_override_style(element: DOMElement, pseudoElement?: string | null): DOMCSSStyleDeclaration;
        get_plugins(): DOMHTMLCollection;
        get_pointer_lock_element(): DOMElement;
        /**
         * This function has been removed and does nothing.
         * @returns A #gchar
         */
        get_preferred_stylesheet_set(): string;
        get_ready_state(): string;
        get_referrer(): string;
        get_scripts(): DOMHTMLCollection;
        get_scrolling_element(): DOMElement;
        /**
         * This function has been removed and does nothing.
         * @returns A #gchar
         */
        get_selected_stylesheet_set(): string;
        get_style_sheets(): DOMStyleSheetList;
        get_title(): string;
        get_url(): string;
        get_visibility_state(): string;
        get_webkit_current_fullscreen_element(): DOMElement;
        get_webkit_fullscreen_element(): DOMElement;
        get_webkit_fullscreen_enabled(): boolean;
        get_webkit_fullscreen_keyboard_input_allowed(): boolean;
        get_webkit_is_fullscreen(): boolean;
        get_xml_encoding(): string;
        get_xml_standalone(): boolean;
        get_xml_version(): string;
        has_focus(): boolean;
        import_node(importedNode: DOMNode, deep: boolean): DOMNode;
        query_command_enabled(command: string): boolean;
        query_command_indeterm(command: string): boolean;
        query_command_state(command: string): boolean;
        query_command_supported(command: string): boolean;
        query_command_value(command: string): string;
        query_selector(selectors: string): DOMElement;
        query_selector_all(selectors: string): DOMNodeList;
        set_body(value: DOMHTMLElement): void;
        set_charset(value: string): void;
        set_cookie(value: string): void;
        set_design_mode(value: string): void;
        set_dir(value: string): void;
        set_document_uri(value: string): void;
        /**
         * This function has been removed and does nothing.
         * @param value A #gchar
         */
        set_selected_stylesheet_set(value: string): void;
        set_title(value: string): void;
        set_xml_standalone(value: boolean): void;
        set_xml_version(value: string): void;
        webkit_cancel_fullscreen(): void;
        webkit_exit_fullscreen(): void;
    }

    module DOMDocumentFragment {
        // Constructor properties interface
    }

    class DOMDocumentFragment extends DOMNode {
        // Own properties of WebKit2WebExtension-4.0.DOMDocumentFragment

        readonly child_element_count: number;
        readonly childElementCount: number;
        readonly children: DOMHTMLCollection;
        readonly first_element_child: DOMElement;
        readonly firstElementChild: DOMElement;
        readonly last_element_child: DOMElement;
        readonly lastElementChild: DOMElement;

        // Owm methods of WebKit2WebExtension-4.0.DOMDocumentFragment

        get_child_element_count(): number;
        get_children(): DOMHTMLCollection;
        get_element_by_id(elementId: string): DOMElement;
        get_first_element_child(): DOMElement;
        get_last_element_child(): DOMElement;
        query_selector(selectors: string): DOMElement;
        query_selector_all(selectors: string): DOMNodeList;
    }

    module DOMDocumentType {
        // Constructor properties interface
    }

    class DOMDocumentType extends DOMNode {
        // Own properties of WebKit2WebExtension-4.0.DOMDocumentType

        readonly entities: DOMNamedNodeMap;
        readonly internal_subset: string;
        readonly internalSubset: string;
        readonly name: string;
        readonly notations: DOMNamedNodeMap;
        readonly public_id: string;
        readonly publicId: string;
        readonly system_id: string;
        readonly systemId: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMDocumentType

        get_entities(): DOMNamedNodeMap;
        get_internal_subset(): string;
        get_name(): string;
        get_notations(): DOMNamedNodeMap;
        get_public_id(): string;
        get_system_id(): string;
    }

    module DOMElement {
        // Constructor properties interface
    }

    class DOMElement extends DOMNode {
        // Own properties of WebKit2WebExtension-4.0.DOMElement

        readonly attributes: DOMNamedNodeMap;
        readonly child_element_count: number;
        readonly childElementCount: number;
        readonly children: DOMHTMLCollection;
        readonly class_list: DOMDOMTokenList;
        readonly classList: DOMDOMTokenList;
        class_name: string;
        className: string;
        readonly client_height: number;
        readonly clientHeight: number;
        readonly client_left: number;
        readonly clientLeft: number;
        readonly client_top: number;
        readonly clientTop: number;
        readonly client_width: number;
        readonly clientWidth: number;
        readonly first_element_child: DOMElement;
        readonly firstElementChild: DOMElement;
        id: string;
        inner_html: string;
        innerHtml: string;
        readonly last_element_child: DOMElement;
        readonly lastElementChild: DOMElement;
        readonly local_name: string;
        readonly localName: string;
        readonly namespace_uri: string;
        readonly namespaceUri: string;
        readonly next_element_sibling: DOMElement;
        readonly nextElementSibling: DOMElement;
        readonly offset_height: number;
        readonly offsetHeight: number;
        readonly offset_left: number;
        readonly offsetLeft: number;
        readonly offset_parent: DOMElement;
        readonly offsetParent: DOMElement;
        readonly offset_top: number;
        readonly offsetTop: number;
        readonly offset_width: number;
        readonly offsetWidth: number;
        outer_html: string;
        outerHtml: string;
        readonly prefix: string;
        readonly previous_element_sibling: DOMElement;
        readonly previousElementSibling: DOMElement;
        readonly scroll_height: number;
        readonly scrollHeight: number;
        scroll_left: number;
        scrollLeft: number;
        scroll_top: number;
        scrollTop: number;
        readonly scroll_width: number;
        readonly scrollWidth: number;
        readonly style: DOMCSSStyleDeclaration;
        readonly tag_name: string;
        readonly tagName: string;
        readonly webkit_region_overset: string;
        readonly webkitRegionOverset: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMElement

        blur(): void;
        closest(selectors: string): DOMElement;
        focus(): void;
        get_attribute(name: string): string;
        get_attribute_node(name: string): DOMAttr;
        get_attribute_node_ns(namespaceURI: string, localName: string): DOMAttr;
        get_attribute_ns(namespaceURI: string, localName: string): string;
        get_attributes(): DOMNamedNodeMap;
        /**
         * Returns a #WebKitDOMClientRect representing the size and position of `self`
         * relative to the viewport.
         * @returns A #WebKitDOMClientRect
         */
        get_bounding_client_rect(): DOMClientRect;
        get_child_element_count(): number;
        get_children(): DOMHTMLCollection;
        get_class_list(): DOMDOMTokenList;
        get_class_name(): string;
        get_client_height(): number;
        get_client_left(): number;
        /**
         * Returns a collection of #WebKitDOMClientRect objects, each of which describe
         * the size and position of a CSS border box relative to the viewport.
         * @returns A #WebKitDOMClientRectList
         */
        get_client_rects(): DOMClientRectList;
        get_client_top(): number;
        get_client_width(): number;
        get_elements_by_class_name(class_name: string): DOMNodeList;
        get_elements_by_class_name_as_html_collection(name: string): DOMHTMLCollection;
        get_elements_by_tag_name(tag_name: string): DOMNodeList;
        get_elements_by_tag_name_as_html_collection(name: string): DOMHTMLCollection;
        get_elements_by_tag_name_ns(namespace_uri: string, tag_name: string): DOMNodeList;
        get_elements_by_tag_name_ns_as_html_collection(namespaceURI: string, localName: string): DOMHTMLCollection;
        get_first_element_child(): DOMElement;
        get_id(): string;
        get_inner_html(): string;
        get_last_element_child(): DOMElement;
        get_local_name(): string;
        get_namespace_uri(): string;
        get_next_element_sibling(): DOMElement;
        get_offset_height(): number;
        get_offset_left(): number;
        get_offset_parent(): DOMElement;
        get_offset_top(): number;
        get_offset_width(): number;
        get_outer_html(): string;
        get_prefix(): string;
        get_previous_element_sibling(): DOMElement;
        get_scroll_height(): number;
        get_scroll_left(): number;
        get_scroll_top(): number;
        get_scroll_width(): number;
        get_style(): DOMCSSStyleDeclaration;
        get_tag_name(): string;
        /**
         * CSS Regions support has been removed. This function does nothing.
         * @returns %NULL
         */
        get_webkit_region_overset(): string;
        has_attribute(name: string): boolean;
        has_attribute_ns(namespaceURI: string, localName: string): boolean;
        has_attributes(): boolean;
        /**
         * Get whether the element is an HTML input element that has been filled automatically.
         * @returns whether @element has been filled automatically.
         */
        html_input_element_get_auto_filled(): boolean;
        /**
         * Get whether `element` is an HTML text input element that has been edited by a user action.
         * @returns whether @element has been edited by a user action.
         */
        html_input_element_is_user_edited(): boolean;
        /**
         * Set whether the element is an HTML input element that has been filled automatically.
         * If `element` is not an HTML input element this function does nothing.
         * @param auto_filled value to set
         */
        html_input_element_set_auto_filled(auto_filled: boolean): void;
        /**
         * Set the value of an HTML input element as if it had been edited by
         * the user, triggering a change event. If `element` is not an HTML input
         * element this function does nothing.
         * @param value the text to set
         */
        html_input_element_set_editing_value(value: string): void;
        insert_adjacent_element(where: string, element: DOMElement): DOMElement;
        insert_adjacent_html(where: string, html: string): void;
        insert_adjacent_text(where: string, text: string): void;
        matches(selectors: string): boolean;
        query_selector(selectors: string): DOMElement;
        query_selector_all(selectors: string): DOMNodeList;
        remove(): void;
        remove_attribute(name: string): void;
        remove_attribute_node(oldAttr: DOMAttr): DOMAttr;
        remove_attribute_ns(namespaceURI: string, localName: string): void;
        request_pointer_lock(): void;
        scroll_by_lines(lines: number): void;
        scroll_by_pages(pages: number): void;
        scroll_into_view(alignWithTop: boolean): void;
        scroll_into_view_if_needed(centerIfNeeded: boolean): void;
        set_attribute(name: string, value: string): void;
        set_attribute_node(newAttr: DOMAttr): DOMAttr;
        set_attribute_node_ns(newAttr: DOMAttr): DOMAttr;
        set_attribute_ns(namespaceURI: string | null, qualifiedName: string, value: string): void;
        set_class_name(value: string): void;
        set_id(value: string): void;
        set_inner_html(value: string): void;
        set_outer_html(value: string): void;
        set_scroll_left(value: number): void;
        set_scroll_top(value: number): void;
        webkit_matches_selector(selectors: string): boolean;
        webkit_request_fullscreen(): void;
    }

    module DOMEntityReference {
        // Constructor properties interface
    }

    class DOMEntityReference extends DOMNode {}

    module DOMEvent {
        // Constructor properties interface
    }

    class DOMEvent extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMEvent

        readonly bubbles: boolean;
        cancel_bubble: boolean;
        cancelBubble: boolean;
        readonly cancelable: boolean;
        readonly current_target: DOMEventTarget;
        readonly currentTarget: DOMEventTarget;
        readonly event_phase: number;
        readonly eventPhase: number;
        return_value: boolean;
        returnValue: boolean;
        readonly src_element: DOMEventTarget;
        readonly srcElement: DOMEventTarget;
        readonly target: DOMEventTarget;
        readonly time_stamp: number;
        readonly timeStamp: number;
        readonly type: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMEvent

        get_bubbles(): boolean;
        get_cancel_bubble(): boolean;
        get_cancelable(): boolean;
        get_current_target(): DOMEventTarget;
        get_event_phase(): number;
        get_event_type(): string;
        get_return_value(): boolean;
        get_src_element(): DOMEventTarget;
        get_target(): DOMEventTarget;
        get_time_stamp(): number;
        init_event(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean): void;
        prevent_default(): void;
        set_cancel_bubble(value: boolean): void;
        set_return_value(value: boolean): void;
        stop_propagation(): void;
    }

    module DOMFile {
        // Constructor properties interface
    }

    class DOMFile extends DOMBlob {
        // Own properties of WebKit2WebExtension-4.0.DOMFile

        readonly name: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMFile

        get_name(): string;
    }

    module DOMFileList {
        // Constructor properties interface
    }

    class DOMFileList extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMFileList

        readonly length: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMFileList

        get_length(): number;
        item(index: number): DOMFile;
    }

    module DOMHTMLAnchorElement {
        // Constructor properties interface
    }

    class DOMHTMLAnchorElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLAnchorElement

        charset: string;
        coords: string;
        hash: string;
        host: string;
        hostname: string;
        href: string;
        hreflang: string;
        name: string;
        pathname: string;
        port: string;
        protocol: string;
        rel: string;
        rev: string;
        search: string;
        shape: string;
        target: string;
        text: string;
        type: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLAnchorElement

        get_charset(): string;
        get_coords(): string;
        get_hash(): string;
        get_host(): string;
        get_hostname(): string;
        get_href(): string;
        get_hreflang(): string;
        get_name(): string;
        get_pathname(): string;
        get_port(): string;
        get_protocol(): string;
        get_rel(): string;
        get_rev(): string;
        get_search(): string;
        get_shape(): string;
        get_target(): string;
        get_text(): string;
        get_type_attr(): string;
        set_charset(value: string): void;
        set_coords(value: string): void;
        set_hash(value: string): void;
        set_host(value: string): void;
        set_hostname(value: string): void;
        set_href(value: string): void;
        set_hreflang(value: string): void;
        set_name(value: string): void;
        set_pathname(value: string): void;
        set_port(value: string): void;
        set_protocol(value: string): void;
        set_rel(value: string): void;
        set_rev(value: string): void;
        set_search(value: string): void;
        set_shape(value: string): void;
        set_target(value: string): void;
        set_text(value: string): void;
        set_type_attr(value: string): void;
    }

    module DOMHTMLAppletElement {
        // Constructor properties interface
    }

    class DOMHTMLAppletElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLAppletElement

        align: string;
        alt: string;
        archive: string;
        code: string;
        code_base: string;
        codeBase: string;
        height: string;
        hspace: number;
        name: string;
        object: string;
        vspace: number;
        width: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLAppletElement

        get_align(): string;
        get_alt(): string;
        get_archive(): string;
        get_code(): string;
        get_code_base(): string;
        get_height(): string;
        get_hspace(): number;
        get_name(): string;
        get_object(): string;
        get_vspace(): number;
        get_width(): string;
        set_align(value: string): void;
        set_alt(value: string): void;
        set_archive(value: string): void;
        set_code(value: string): void;
        set_code_base(value: string): void;
        set_height(value: string): void;
        set_hspace(value: number): void;
        set_name(value: string): void;
        set_object(value: string): void;
        set_vspace(value: number): void;
        set_width(value: string): void;
    }

    module DOMHTMLAreaElement {
        // Constructor properties interface
    }

    class DOMHTMLAreaElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLAreaElement

        alt: string;
        coords: string;
        hash: string;
        host: string;
        hostname: string;
        href: string;
        no_href: boolean;
        noHref: boolean;
        pathname: string;
        port: string;
        protocol: string;
        search: string;
        shape: string;
        target: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLAreaElement

        get_alt(): string;
        get_coords(): string;
        get_hash(): string;
        get_host(): string;
        get_hostname(): string;
        get_href(): string;
        get_no_href(): boolean;
        get_pathname(): string;
        get_port(): string;
        get_protocol(): string;
        get_search(): string;
        get_shape(): string;
        get_target(): string;
        set_alt(value: string): void;
        set_coords(value: string): void;
        set_hash(value: string): void;
        set_host(value: string): void;
        set_hostname(value: string): void;
        set_href(value: string): void;
        set_no_href(value: boolean): void;
        set_pathname(value: string): void;
        set_port(value: string): void;
        set_protocol(value: string): void;
        set_search(value: string): void;
        set_shape(value: string): void;
        set_target(value: string): void;
    }

    module DOMHTMLBRElement {
        // Constructor properties interface
    }

    class DOMHTMLBRElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLBRElement

        clear: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLBRElement

        get_clear(): string;
        set_clear(value: string): void;
    }

    module DOMHTMLBaseElement {
        // Constructor properties interface
    }

    class DOMHTMLBaseElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLBaseElement

        href: string;
        target: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLBaseElement

        get_href(): string;
        get_target(): string;
        set_href(value: string): void;
        set_target(value: string): void;
    }

    module DOMHTMLBaseFontElement {
        // Constructor properties interface
    }

    class DOMHTMLBaseFontElement extends DOMHTMLElement {
        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLBaseFontElement

        /**
         * This function has been removed from the DOM spec and it just returns %NULL.
         * @returns A #gchar
         */
        get_color(): string;
        /**
         * This function has been removed from the DOM spec and it just returns %NULL.
         * @returns A #gchar
         */
        get_face(): string;
        /**
         * This function has been removed from the DOM spec and it just returns 0.
         * @returns A #glong
         */
        get_size(): number;
        /**
         * This function has been removed from the DOM spec and it does nothing.
         * @param value A #gchar
         */
        set_color(value: string): void;
        /**
         * This function has been removed from the DOM spec and it does nothing.
         * @param value A #gchar
         */
        set_face(value: string): void;
        /**
         * This function has been removed from the DOM spec and it does nothing.
         * @param value A #glong
         */
        set_size(value: number): void;
    }

    module DOMHTMLBodyElement {
        // Constructor properties interface
    }

    class DOMHTMLBodyElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLBodyElement

        a_link: string;
        aLink: string;
        background: string;
        bg_color: string;
        bgColor: string;
        link: string;
        text: string;
        v_link: string;
        vLink: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLBodyElement

        get_a_link(): string;
        get_background(): string;
        get_bg_color(): string;
        get_link(): string;
        get_text(): string;
        get_v_link(): string;
        set_a_link(value: string): void;
        set_background(value: string): void;
        set_bg_color(value: string): void;
        set_link(value: string): void;
        set_text(value: string): void;
        set_v_link(value: string): void;
    }

    module DOMHTMLButtonElement {
        // Constructor properties interface
    }

    class DOMHTMLButtonElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLButtonElement

        autofocus: boolean;
        disabled: boolean;
        readonly form: DOMHTMLFormElement;
        name: string;
        type: string;
        value: string;
        readonly will_validate: boolean;
        readonly willValidate: boolean;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLButtonElement

        get_autofocus(): boolean;
        get_button_type(): string;
        get_disabled(): boolean;
        get_form(): DOMHTMLFormElement;
        get_name(): string;
        get_value(): string;
        get_will_validate(): boolean;
        set_autofocus(value: boolean): void;
        set_button_type(value: string): void;
        set_disabled(value: boolean): void;
        set_name(value: string): void;
        set_value(value: string): void;
    }

    module DOMHTMLCanvasElement {
        // Constructor properties interface
    }

    class DOMHTMLCanvasElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLCanvasElement

        height: number;
        width: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLCanvasElement

        get_height(): number;
        get_width(): number;
        set_height(value: number): void;
        set_width(value: number): void;
    }

    module DOMHTMLCollection {
        // Constructor properties interface
    }

    class DOMHTMLCollection extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLCollection

        readonly length: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLCollection

        get_length(): number;
        item(index: number): DOMNode;
        named_item(name: string): DOMNode;
    }

    module DOMHTMLDListElement {
        // Constructor properties interface
    }

    class DOMHTMLDListElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLDListElement

        compact: boolean;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLDListElement

        get_compact(): boolean;
        set_compact(value: boolean): void;
    }

    module DOMHTMLDirectoryElement {
        // Constructor properties interface
    }

    class DOMHTMLDirectoryElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLDirectoryElement

        compact: boolean;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLDirectoryElement

        get_compact(): boolean;
        set_compact(value: boolean): void;
    }

    module DOMHTMLDivElement {
        // Constructor properties interface
    }

    class DOMHTMLDivElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLDivElement

        align: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLDivElement

        get_align(): string;
        set_align(value: string): void;
    }

    module DOMHTMLDocument {
        // Constructor properties interface
    }

    class DOMHTMLDocument extends DOMDocument {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLDocument

        alink_color: string;
        alinkColor: string;
        bg_color: string;
        bgColor: string;
        dir: string;
        fg_color: string;
        fgColor: string;
        readonly height: number;
        link_color: string;
        linkColor: string;
        vlink_color: string;
        vlinkColor: string;
        readonly width: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLDocument

        capture_events(): void;
        clear(): void;
        close(): void;
        get_alink_color(): string;
        get_bg_color(): string;
        get_compat_mode(): string;
        get_design_mode(): string;
        get_dir(): string;
        get_embeds(): DOMHTMLCollection;
        get_fg_color(): string;
        get_height(): number;
        get_link_color(): string;
        get_plugins(): DOMHTMLCollection;
        get_scripts(): DOMHTMLCollection;
        get_vlink_color(): string;
        get_width(): number;
        release_events(): void;
        set_alink_color(value: string): void;
        set_bg_color(value: string): void;
        set_design_mode(value: string): void;
        set_dir(value: string): void;
        set_fg_color(value: string): void;
        set_link_color(value: string): void;
        set_vlink_color(value: string): void;
    }

    module DOMHTMLElement {
        // Constructor properties interface
    }

    class DOMHTMLElement extends DOMElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLElement

        access_key: string;
        accessKey: string;
        content_editable: string;
        contentEditable: string;
        dir: string;
        draggable: boolean;
        hidden: boolean;
        inner_text: string;
        innerText: string;
        readonly is_content_editable: boolean;
        readonly isContentEditable: boolean;
        lang: string;
        outer_text: string;
        outerText: string;
        spellcheck: boolean;
        tab_index: number;
        tabIndex: number;
        title: string;
        translate: boolean;
        webkitdropzone: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLElement

        click(): void;
        get_access_key(): string;
        get_children(): DOMHTMLCollection;
        get_content_editable(): string;
        get_dir(): string;
        get_draggable(): boolean;
        get_hidden(): boolean;
        get_inner_html(): string;
        get_inner_text(): string;
        get_is_content_editable(): boolean;
        get_lang(): string;
        get_outer_html(): string;
        get_outer_text(): string;
        get_spellcheck(): boolean;
        get_tab_index(): number;
        get_title(): string;
        get_translate(): boolean;
        get_webkitdropzone(): string;
        set_access_key(value: string): void;
        set_content_editable(value: string): void;
        set_dir(value: string): void;
        set_draggable(value: boolean): void;
        set_hidden(value: boolean): void;
        set_inner_html(contents: string): void;
        set_inner_text(value: string): void;
        set_lang(value: string): void;
        set_outer_html(contents: string): void;
        set_outer_text(value: string): void;
        set_spellcheck(value: boolean): void;
        set_tab_index(value: number): void;
        set_title(value: string): void;
        set_translate(value: boolean): void;
        set_webkitdropzone(value: string): void;
    }

    module DOMHTMLEmbedElement {
        // Constructor properties interface
    }

    class DOMHTMLEmbedElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLEmbedElement

        align: string;
        height: number;
        name: string;
        src: string;
        type: string;
        width: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLEmbedElement

        get_align(): string;
        get_height(): number;
        get_name(): string;
        get_src(): string;
        get_type_attr(): string;
        get_width(): number;
        set_align(value: string): void;
        set_height(value: number): void;
        set_name(value: string): void;
        set_src(value: string): void;
        set_type_attr(value: string): void;
        set_width(value: number): void;
    }

    module DOMHTMLFieldSetElement {
        // Constructor properties interface
    }

    class DOMHTMLFieldSetElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLFieldSetElement

        readonly form: DOMHTMLFormElement;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLFieldSetElement

        get_form(): DOMHTMLFormElement;
    }

    module DOMHTMLFontElement {
        // Constructor properties interface
    }

    class DOMHTMLFontElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLFontElement

        color: string;
        face: string;
        size: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLFontElement

        get_color(): string;
        get_face(): string;
        get_size(): string;
        set_color(value: string): void;
        set_face(value: string): void;
        set_size(value: string): void;
    }

    module DOMHTMLFormElement {
        // Constructor properties interface
    }

    class DOMHTMLFormElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLFormElement

        accept_charset: string;
        acceptCharset: string;
        action: string;
        readonly elements: DOMHTMLCollection;
        encoding: string;
        enctype: string;
        readonly length: number;
        method: string;
        name: string;
        target: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLFormElement

        get_accept_charset(): string;
        get_action(): string;
        get_elements(): DOMHTMLCollection;
        get_encoding(): string;
        get_enctype(): string;
        get_length(): number;
        get_method(): string;
        get_name(): string;
        get_target(): string;
        reset(): void;
        set_accept_charset(value: string): void;
        set_action(value: string): void;
        set_encoding(value: string): void;
        set_enctype(value: string): void;
        set_method(value: string): void;
        set_name(value: string): void;
        set_target(value: string): void;
        submit(): void;
    }

    module DOMHTMLFrameElement {
        // Constructor properties interface
    }

    class DOMHTMLFrameElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLFrameElement

        readonly content_document: DOMDocument;
        readonly contentDocument: DOMDocument;
        readonly content_window: DOMDOMWindow;
        readonly contentWindow: DOMDOMWindow;
        frame_border: string;
        frameBorder: string;
        readonly height: number;
        long_desc: string;
        longDesc: string;
        margin_height: string;
        marginHeight: string;
        margin_width: string;
        marginWidth: string;
        name: string;
        no_resize: boolean;
        noResize: boolean;
        scrolling: string;
        src: string;
        readonly width: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLFrameElement

        get_content_document(): DOMDocument;
        get_content_window(): DOMDOMWindow;
        get_frame_border(): string;
        get_height(): number;
        get_long_desc(): string;
        get_margin_height(): string;
        get_margin_width(): string;
        get_name(): string;
        get_no_resize(): boolean;
        get_scrolling(): string;
        get_src(): string;
        get_width(): number;
        set_frame_border(value: string): void;
        set_long_desc(value: string): void;
        set_margin_height(value: string): void;
        set_margin_width(value: string): void;
        set_name(value: string): void;
        set_no_resize(value: boolean): void;
        set_scrolling(value: string): void;
        set_src(value: string): void;
    }

    module DOMHTMLFrameSetElement {
        // Constructor properties interface
    }

    class DOMHTMLFrameSetElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLFrameSetElement

        cols: string;
        rows: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLFrameSetElement

        get_cols(): string;
        get_rows(): string;
        set_cols(value: string): void;
        set_rows(value: string): void;
    }

    module DOMHTMLHRElement {
        // Constructor properties interface
    }

    class DOMHTMLHRElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLHRElement

        align: string;
        no_shade: boolean;
        noShade: boolean;
        size: string;
        width: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLHRElement

        get_align(): string;
        get_no_shade(): boolean;
        get_size(): string;
        get_width(): string;
        set_align(value: string): void;
        set_no_shade(value: boolean): void;
        set_size(value: string): void;
        set_width(value: string): void;
    }

    module DOMHTMLHeadElement {
        // Constructor properties interface
    }

    class DOMHTMLHeadElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLHeadElement

        profile: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLHeadElement

        get_profile(): string;
        set_profile(value: string): void;
    }

    module DOMHTMLHeadingElement {
        // Constructor properties interface
    }

    class DOMHTMLHeadingElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLHeadingElement

        align: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLHeadingElement

        get_align(): string;
        set_align(value: string): void;
    }

    module DOMHTMLHtmlElement {
        // Constructor properties interface
    }

    class DOMHTMLHtmlElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLHtmlElement

        version: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLHtmlElement

        get_version(): string;
        set_version(value: string): void;
    }

    module DOMHTMLIFrameElement {
        // Constructor properties interface
    }

    class DOMHTMLIFrameElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLIFrameElement

        align: string;
        readonly content_document: DOMDocument;
        readonly contentDocument: DOMDocument;
        readonly content_window: DOMDOMWindow;
        readonly contentWindow: DOMDOMWindow;
        frame_border: string;
        frameBorder: string;
        height: string;
        long_desc: string;
        longDesc: string;
        margin_height: string;
        marginHeight: string;
        margin_width: string;
        marginWidth: string;
        name: string;
        scrolling: string;
        src: string;
        width: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLIFrameElement

        get_align(): string;
        get_content_document(): DOMDocument;
        get_content_window(): DOMDOMWindow;
        get_frame_border(): string;
        get_height(): string;
        get_long_desc(): string;
        get_margin_height(): string;
        get_margin_width(): string;
        get_name(): string;
        get_scrolling(): string;
        get_src(): string;
        get_width(): string;
        set_align(value: string): void;
        set_frame_border(value: string): void;
        set_height(value: string): void;
        set_long_desc(value: string): void;
        set_margin_height(value: string): void;
        set_margin_width(value: string): void;
        set_name(value: string): void;
        set_scrolling(value: string): void;
        set_src(value: string): void;
        set_width(value: string): void;
    }

    module DOMHTMLImageElement {
        // Constructor properties interface
    }

    class DOMHTMLImageElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLImageElement

        align: string;
        alt: string;
        border: string;
        readonly complete: boolean;
        height: number;
        hspace: number;
        is_map: boolean;
        isMap: boolean;
        long_desc: string;
        longDesc: string;
        lowsrc: string;
        name: string;
        readonly natural_height: number;
        readonly naturalHeight: number;
        readonly natural_width: number;
        readonly naturalWidth: number;
        src: string;
        use_map: string;
        useMap: string;
        vspace: number;
        width: number;
        readonly x: number;
        readonly y: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLImageElement

        get_align(): string;
        get_alt(): string;
        get_border(): string;
        get_complete(): boolean;
        get_height(): number;
        get_hspace(): number;
        get_is_map(): boolean;
        get_long_desc(): string;
        get_lowsrc(): string;
        get_name(): string;
        get_natural_height(): number;
        get_natural_width(): number;
        get_src(): string;
        get_use_map(): string;
        get_vspace(): number;
        get_width(): number;
        get_x(): number;
        get_y(): number;
        set_align(value: string): void;
        set_alt(value: string): void;
        set_border(value: string): void;
        set_height(value: number): void;
        set_hspace(value: number): void;
        set_is_map(value: boolean): void;
        set_long_desc(value: string): void;
        set_lowsrc(value: string): void;
        set_name(value: string): void;
        set_src(value: string): void;
        set_use_map(value: string): void;
        set_vspace(value: number): void;
        set_width(value: number): void;
    }

    module DOMHTMLInputElement {
        // Constructor properties interface
    }

    class DOMHTMLInputElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLInputElement

        accept: string;
        align: string;
        alt: string;
        autofocus: boolean;
        capture: string;
        checked: boolean;
        default_checked: boolean;
        defaultChecked: boolean;
        default_value: string;
        defaultValue: string;
        disabled: boolean;
        readonly files: DOMFileList;
        readonly form: DOMHTMLFormElement;
        height: number;
        indeterminate: boolean;
        max_length: number;
        maxLength: number;
        multiple: boolean;
        name: string;
        read_only: boolean;
        readOnly: boolean;
        size: number;
        src: string;
        type: string;
        use_map: string;
        useMap: string;
        value: string;
        width: number;
        readonly will_validate: boolean;
        readonly willValidate: boolean;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLInputElement

        get_accept(): string;
        get_align(): string;
        get_alt(): string;
        get_auto_filled(): boolean;
        get_autofocus(): boolean;
        get_capture(): boolean;
        get_capture_type(): string;
        get_checked(): boolean;
        get_default_checked(): boolean;
        get_default_value(): string;
        get_disabled(): boolean;
        get_files(): DOMFileList;
        get_form(): DOMHTMLFormElement;
        get_height(): number;
        get_indeterminate(): boolean;
        get_input_type(): string;
        get_max_length(): number;
        get_multiple(): boolean;
        get_name(): string;
        get_read_only(): boolean;
        get_size(): number;
        get_src(): string;
        get_use_map(): string;
        get_value(): string;
        get_width(): number;
        get_will_validate(): boolean;
        is_edited(): boolean;
        select(): void;
        set_accept(value: string): void;
        set_align(value: string): void;
        set_alt(value: string): void;
        set_auto_filled(value: boolean): void;
        set_autofocus(value: boolean): void;
        set_capture_type(value: string): void;
        set_checked(value: boolean): void;
        set_default_checked(value: boolean): void;
        set_default_value(value: string): void;
        set_disabled(value: boolean): void;
        set_editing_value(value: string): void;
        set_files(value: DOMFileList): void;
        set_height(value: number): void;
        set_indeterminate(value: boolean): void;
        set_input_type(value: string): void;
        set_max_length(value: number): void;
        set_multiple(value: boolean): void;
        set_name(value: string): void;
        set_read_only(value: boolean): void;
        set_size(value: number): void;
        set_src(value: string): void;
        set_use_map(value: string): void;
        set_value(value: string): void;
        set_width(value: number): void;
    }

    module DOMHTMLLIElement {
        // Constructor properties interface
    }

    class DOMHTMLLIElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLLIElement

        type: string;
        value: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLLIElement

        get_type_attr(): string;
        get_value(): number;
        set_type_attr(value: string): void;
        set_value(value: number): void;
    }

    module DOMHTMLLabelElement {
        // Constructor properties interface
    }

    class DOMHTMLLabelElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLLabelElement

        readonly form: DOMHTMLFormElement;
        html_for: string;
        htmlFor: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLLabelElement

        get_form(): DOMHTMLFormElement;
        get_html_for(): string;
        set_html_for(value: string): void;
    }

    module DOMHTMLLegendElement {
        // Constructor properties interface
    }

    class DOMHTMLLegendElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLLegendElement

        align: string;
        readonly form: DOMHTMLFormElement;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLLegendElement

        get_align(): string;
        get_form(): DOMHTMLFormElement;
        set_align(value: string): void;
    }

    module DOMHTMLLinkElement {
        // Constructor properties interface
    }

    class DOMHTMLLinkElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLLinkElement

        charset: string;
        disabled: boolean;
        href: string;
        hreflang: string;
        media: string;
        rel: string;
        rev: string;
        readonly sheet: DOMStyleSheet;
        readonly sizes: DOMDOMTokenList;
        target: string;
        type: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLLinkElement

        get_charset(): string;
        get_disabled(): boolean;
        get_href(): string;
        get_hreflang(): string;
        get_media(): string;
        get_rel(): string;
        get_rev(): string;
        get_sheet(): DOMStyleSheet;
        get_sizes(): DOMDOMTokenList;
        get_target(): string;
        get_type_attr(): string;
        set_charset(value: string): void;
        set_disabled(value: boolean): void;
        set_href(value: string): void;
        set_hreflang(value: string): void;
        set_media(value: string): void;
        set_rel(value: string): void;
        set_rev(value: string): void;
        set_sizes(value: string): void;
        set_target(value: string): void;
        set_type_attr(value: string): void;
    }

    module DOMHTMLMapElement {
        // Constructor properties interface
    }

    class DOMHTMLMapElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLMapElement

        readonly areas: DOMHTMLCollection;
        name: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLMapElement

        get_areas(): DOMHTMLCollection;
        get_name(): string;
        set_name(value: string): void;
    }

    module DOMHTMLMarqueeElement {
        // Constructor properties interface
    }

    class DOMHTMLMarqueeElement extends DOMHTMLElement {
        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLMarqueeElement

        start(): void;
        stop(): void;
    }

    module DOMHTMLMenuElement {
        // Constructor properties interface
    }

    class DOMHTMLMenuElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLMenuElement

        compact: boolean;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLMenuElement

        get_compact(): boolean;
        set_compact(value: boolean): void;
    }

    module DOMHTMLMetaElement {
        // Constructor properties interface
    }

    class DOMHTMLMetaElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLMetaElement

        content: string;
        http_equiv: string;
        httpEquiv: string;
        name: string;
        scheme: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLMetaElement

        get_content(): string;
        get_http_equiv(): string;
        get_name(): string;
        get_scheme(): string;
        set_content(value: string): void;
        set_http_equiv(value: string): void;
        set_name(value: string): void;
        set_scheme(value: string): void;
    }

    module DOMHTMLModElement {
        // Constructor properties interface
    }

    class DOMHTMLModElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLModElement

        cite: string;
        date_time: string;
        dateTime: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLModElement

        get_cite(): string;
        get_date_time(): string;
        set_cite(value: string): void;
        set_date_time(value: string): void;
    }

    module DOMHTMLOListElement {
        // Constructor properties interface
    }

    class DOMHTMLOListElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLOListElement

        compact: boolean;
        start: number;
        type: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLOListElement

        get_compact(): boolean;
        get_start(): number;
        get_type_attr(): string;
        set_compact(value: boolean): void;
        set_start(value: number): void;
        set_type_attr(value: string): void;
    }

    module DOMHTMLObjectElement {
        // Constructor properties interface
    }

    class DOMHTMLObjectElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLObjectElement

        align: string;
        archive: string;
        border: string;
        code: string;
        code_base: string;
        codeBase: string;
        code_type: string;
        codeType: string;
        readonly content_document: DOMDocument;
        readonly contentDocument: DOMDocument;
        data: string;
        declare: boolean;
        readonly form: DOMHTMLFormElement;
        height: string;
        hspace: number;
        name: string;
        standby: string;
        type: string;
        use_map: string;
        useMap: string;
        vspace: number;
        width: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLObjectElement

        get_align(): string;
        get_archive(): string;
        get_border(): string;
        get_code(): string;
        get_code_base(): string;
        get_code_type(): string;
        get_content_document(): DOMDocument;
        get_data(): string;
        get_declare(): boolean;
        get_form(): DOMHTMLFormElement;
        get_height(): string;
        get_hspace(): number;
        get_name(): string;
        get_standby(): string;
        get_type_attr(): string;
        get_use_map(): string;
        get_vspace(): number;
        get_width(): string;
        set_align(value: string): void;
        set_archive(value: string): void;
        set_border(value: string): void;
        set_code(value: string): void;
        set_code_base(value: string): void;
        set_code_type(value: string): void;
        set_data(value: string): void;
        set_declare(value: boolean): void;
        set_height(value: string): void;
        set_hspace(value: number): void;
        set_name(value: string): void;
        set_standby(value: string): void;
        set_type_attr(value: string): void;
        set_use_map(value: string): void;
        set_vspace(value: number): void;
        set_width(value: string): void;
    }

    module DOMHTMLOptGroupElement {
        // Constructor properties interface
    }

    class DOMHTMLOptGroupElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLOptGroupElement

        disabled: boolean;
        label: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLOptGroupElement

        get_disabled(): boolean;
        get_label(): string;
        set_disabled(value: boolean): void;
        set_label(value: string): void;
    }

    module DOMHTMLOptionElement {
        // Constructor properties interface
    }

    class DOMHTMLOptionElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLOptionElement

        default_selected: boolean;
        defaultSelected: boolean;
        disabled: boolean;
        readonly form: DOMHTMLFormElement;
        readonly index: number;
        label: string;
        selected: boolean;
        readonly text: string;
        value: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLOptionElement

        get_default_selected(): boolean;
        get_disabled(): boolean;
        get_form(): DOMHTMLFormElement;
        get_index(): number;
        get_label(): string;
        get_selected(): boolean;
        get_text(): string;
        get_value(): string;
        set_default_selected(value: boolean): void;
        set_disabled(value: boolean): void;
        set_label(value: string): void;
        set_selected(value: boolean): void;
        set_value(value: string): void;
    }

    module DOMHTMLOptionsCollection {
        // Constructor properties interface
    }

    class DOMHTMLOptionsCollection extends DOMHTMLCollection {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLOptionsCollection

        readonly length: number;
        selected_index: number;
        selectedIndex: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLOptionsCollection

        get_length(): number;
        get_selected_index(): number;
        named_item(name: string): DOMNode;
        set_selected_index(value: number): void;
    }

    module DOMHTMLParagraphElement {
        // Constructor properties interface
    }

    class DOMHTMLParagraphElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLParagraphElement

        align: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLParagraphElement

        get_align(): string;
        set_align(value: string): void;
    }

    module DOMHTMLParamElement {
        // Constructor properties interface
    }

    class DOMHTMLParamElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLParamElement

        name: string;
        type: string;
        value: string;
        value_type: string;
        valueType: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLParamElement

        get_name(): string;
        get_type_attr(): string;
        get_value(): string;
        get_value_type(): string;
        set_name(value: string): void;
        set_type_attr(value: string): void;
        set_value(value: string): void;
        set_value_type(value: string): void;
    }

    module DOMHTMLPreElement {
        // Constructor properties interface
    }

    class DOMHTMLPreElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLPreElement

        width: number;
        wrap: boolean;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLPreElement

        get_width(): number;
        get_wrap(): boolean;
        set_width(value: number): void;
        set_wrap(value: boolean): void;
    }

    module DOMHTMLQuoteElement {
        // Constructor properties interface
    }

    class DOMHTMLQuoteElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLQuoteElement

        cite: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLQuoteElement

        get_cite(): string;
        set_cite(value: string): void;
    }

    module DOMHTMLScriptElement {
        // Constructor properties interface
    }

    class DOMHTMLScriptElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLScriptElement

        charset: string;
        defer: boolean;
        event: string;
        html_for: string;
        htmlFor: string;
        src: string;
        text: string;
        type: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLScriptElement

        get_charset(): string;
        get_defer(): boolean;
        get_event(): string;
        get_html_for(): string;
        get_src(): string;
        get_text(): string;
        get_type_attr(): string;
        set_charset(value: string): void;
        set_defer(value: boolean): void;
        set_event(value: string): void;
        set_html_for(value: string): void;
        set_src(value: string): void;
        set_text(value: string): void;
        set_type_attr(value: string): void;
    }

    module DOMHTMLSelectElement {
        // Constructor properties interface
    }

    class DOMHTMLSelectElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLSelectElement

        autofocus: boolean;
        disabled: boolean;
        readonly form: DOMHTMLFormElement;
        length: number;
        multiple: boolean;
        name: string;
        readonly options: DOMHTMLOptionsCollection;
        selected_index: number;
        selectedIndex: number;
        size: number;
        readonly type: string;
        value: string;
        readonly will_validate: boolean;
        readonly willValidate: boolean;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLSelectElement

        add(element: DOMHTMLElement, before: DOMHTMLElement): void;
        get_autofocus(): boolean;
        get_disabled(): boolean;
        get_form(): DOMHTMLFormElement;
        get_length(): number;
        get_multiple(): boolean;
        get_name(): string;
        get_options(): DOMHTMLOptionsCollection;
        get_select_type(): string;
        get_selected_index(): number;
        get_size(): number;
        get_value(): string;
        get_will_validate(): boolean;
        item(index: number): DOMNode;
        named_item(name: string): DOMNode;
        remove(index: number): void;
        set_autofocus(value: boolean): void;
        set_disabled(value: boolean): void;
        set_length(value: number): void;
        set_multiple(value: boolean): void;
        set_name(value: string): void;
        set_selected_index(value: number): void;
        set_size(value: number): void;
        set_value(value: string): void;
    }

    module DOMHTMLStyleElement {
        // Constructor properties interface
    }

    class DOMHTMLStyleElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLStyleElement

        disabled: boolean;
        media: string;
        readonly sheet: DOMStyleSheet;
        type: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLStyleElement

        get_disabled(): boolean;
        get_media(): string;
        get_sheet(): DOMStyleSheet;
        get_type_attr(): string;
        set_disabled(value: boolean): void;
        set_media(value: string): void;
        set_type_attr(value: string): void;
    }

    module DOMHTMLTableCaptionElement {
        // Constructor properties interface
    }

    class DOMHTMLTableCaptionElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLTableCaptionElement

        align: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLTableCaptionElement

        get_align(): string;
        set_align(value: string): void;
    }

    module DOMHTMLTableCellElement {
        // Constructor properties interface
    }

    class DOMHTMLTableCellElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLTableCellElement

        abbr: string;
        align: string;
        axis: string;
        bg_color: string;
        bgColor: string;
        readonly cell_index: number;
        readonly cellIndex: number;
        ch: string;
        ch_off: string;
        chOff: string;
        col_span: number;
        colSpan: number;
        headers: string;
        height: string;
        no_wrap: boolean;
        noWrap: boolean;
        row_span: number;
        rowSpan: number;
        scope: string;
        v_align: string;
        vAlign: string;
        width: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLTableCellElement

        get_abbr(): string;
        get_align(): string;
        get_axis(): string;
        get_bg_color(): string;
        get_cell_index(): number;
        get_ch(): string;
        get_ch_off(): string;
        get_col_span(): number;
        get_headers(): string;
        get_height(): string;
        get_no_wrap(): boolean;
        get_row_span(): number;
        get_scope(): string;
        get_v_align(): string;
        get_width(): string;
        set_abbr(value: string): void;
        set_align(value: string): void;
        set_axis(value: string): void;
        set_bg_color(value: string): void;
        set_ch(value: string): void;
        set_ch_off(value: string): void;
        set_col_span(value: number): void;
        set_headers(value: string): void;
        set_height(value: string): void;
        set_no_wrap(value: boolean): void;
        set_row_span(value: number): void;
        set_scope(value: string): void;
        set_v_align(value: string): void;
        set_width(value: string): void;
    }

    module DOMHTMLTableColElement {
        // Constructor properties interface
    }

    class DOMHTMLTableColElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLTableColElement

        align: string;
        ch: string;
        ch_off: string;
        chOff: string;
        span: number;
        v_align: string;
        vAlign: string;
        width: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLTableColElement

        get_align(): string;
        get_ch(): string;
        get_ch_off(): string;
        get_span(): number;
        get_v_align(): string;
        get_width(): string;
        set_align(value: string): void;
        set_ch(value: string): void;
        set_ch_off(value: string): void;
        set_span(value: number): void;
        set_v_align(value: string): void;
        set_width(value: string): void;
    }

    module DOMHTMLTableElement {
        // Constructor properties interface
    }

    class DOMHTMLTableElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLTableElement

        align: string;
        bg_color: string;
        bgColor: string;
        border: string;
        readonly caption: DOMHTMLTableCaptionElement;
        cell_padding: string;
        cellPadding: string;
        cell_spacing: string;
        cellSpacing: string;
        readonly rows: DOMHTMLCollection;
        rules: string;
        summary: string;
        readonly t_bodies: DOMHTMLCollection;
        readonly tBodies: DOMHTMLCollection;
        readonly t_foot: DOMHTMLTableSectionElement;
        readonly tFoot: DOMHTMLTableSectionElement;
        readonly t_head: DOMHTMLTableSectionElement;
        readonly tHead: DOMHTMLTableSectionElement;
        width: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLTableElement

        create_caption(): DOMHTMLElement;
        create_t_foot(): DOMHTMLElement;
        create_t_head(): DOMHTMLElement;
        delete_caption(): void;
        delete_row(index: number): void;
        delete_t_foot(): void;
        delete_t_head(): void;
        get_align(): string;
        get_bg_color(): string;
        get_border(): string;
        get_caption(): DOMHTMLTableCaptionElement;
        get_cell_padding(): string;
        get_cell_spacing(): string;
        get_rows(): DOMHTMLCollection;
        get_rules(): string;
        get_summary(): string;
        get_t_bodies(): DOMHTMLCollection;
        get_t_foot(): DOMHTMLTableSectionElement;
        get_t_head(): DOMHTMLTableSectionElement;
        get_width(): string;
        insert_row(index: number): DOMHTMLElement;
        set_align(value: string): void;
        set_bg_color(value: string): void;
        set_border(value: string): void;
        set_caption(value: DOMHTMLTableCaptionElement): void;
        set_cell_padding(value: string): void;
        set_cell_spacing(value: string): void;
        set_rules(value: string): void;
        set_summary(value: string): void;
        set_t_foot(value: DOMHTMLTableSectionElement): void;
        set_t_head(value: DOMHTMLTableSectionElement): void;
        set_width(value: string): void;
    }

    module DOMHTMLTableRowElement {
        // Constructor properties interface
    }

    class DOMHTMLTableRowElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLTableRowElement

        align: string;
        bg_color: string;
        bgColor: string;
        readonly cells: DOMHTMLCollection;
        ch: string;
        ch_off: string;
        chOff: string;
        readonly row_index: number;
        readonly rowIndex: number;
        readonly section_row_index: number;
        readonly sectionRowIndex: number;
        v_align: string;
        vAlign: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLTableRowElement

        delete_cell(index: number): void;
        get_align(): string;
        get_bg_color(): string;
        get_cells(): DOMHTMLCollection;
        get_ch(): string;
        get_ch_off(): string;
        get_row_index(): number;
        get_section_row_index(): number;
        get_v_align(): string;
        insert_cell(index: number): DOMHTMLElement;
        set_align(value: string): void;
        set_bg_color(value: string): void;
        set_ch(value: string): void;
        set_ch_off(value: string): void;
        set_v_align(value: string): void;
    }

    module DOMHTMLTableSectionElement {
        // Constructor properties interface
    }

    class DOMHTMLTableSectionElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLTableSectionElement

        align: string;
        ch: string;
        ch_off: string;
        chOff: string;
        readonly rows: DOMHTMLCollection;
        v_align: string;
        vAlign: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLTableSectionElement

        delete_row(index: number): void;
        get_align(): string;
        get_ch(): string;
        get_ch_off(): string;
        get_rows(): DOMHTMLCollection;
        get_v_align(): string;
        insert_row(index: number): DOMHTMLElement;
        set_align(value: string): void;
        set_ch(value: string): void;
        set_ch_off(value: string): void;
        set_v_align(value: string): void;
    }

    module DOMHTMLTextAreaElement {
        // Constructor properties interface
    }

    class DOMHTMLTextAreaElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLTextAreaElement

        autofocus: boolean;
        cols: number;
        default_value: string;
        defaultValue: string;
        disabled: boolean;
        readonly form: DOMHTMLFormElement;
        name: string;
        read_only: boolean;
        readOnly: boolean;
        rows: number;
        selection_end: number;
        selectionEnd: number;
        selection_start: number;
        selectionStart: number;
        readonly type: string;
        value: string;
        readonly will_validate: boolean;
        readonly willValidate: boolean;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLTextAreaElement

        get_area_type(): string;
        get_autofocus(): boolean;
        get_cols(): number;
        get_default_value(): string;
        get_disabled(): boolean;
        get_form(): DOMHTMLFormElement;
        get_name(): string;
        get_read_only(): boolean;
        get_rows(): number;
        get_selection_end(): number;
        get_selection_start(): number;
        get_value(): string;
        get_will_validate(): boolean;
        is_edited(): boolean;
        select(): void;
        set_autofocus(value: boolean): void;
        set_cols(value: number): void;
        set_default_value(value: string): void;
        set_disabled(value: boolean): void;
        set_name(value: string): void;
        set_read_only(value: boolean): void;
        set_rows(value: number): void;
        set_selection_end(value: number): void;
        set_selection_range(start: number, end: number, direction: string): void;
        set_selection_start(value: number): void;
        set_value(value: string): void;
    }

    module DOMHTMLTitleElement {
        // Constructor properties interface
    }

    class DOMHTMLTitleElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLTitleElement

        text: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLTitleElement

        get_text(): string;
        set_text(value: string): void;
    }

    module DOMHTMLUListElement {
        // Constructor properties interface
    }

    class DOMHTMLUListElement extends DOMHTMLElement {
        // Own properties of WebKit2WebExtension-4.0.DOMHTMLUListElement

        compact: boolean;
        type: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMHTMLUListElement

        get_compact(): boolean;
        get_type_attr(): string;
        set_compact(value: boolean): void;
        set_type_attr(value: string): void;
    }

    module DOMKeyboardEvent {
        // Constructor properties interface
    }

    class DOMKeyboardEvent extends DOMUIEvent {
        // Own properties of WebKit2WebExtension-4.0.DOMKeyboardEvent

        readonly alt_graph_key: boolean;
        readonly altGraphKey: boolean;
        readonly alt_key: boolean;
        readonly altKey: boolean;
        readonly ctrl_key: boolean;
        readonly ctrlKey: boolean;
        readonly key_identifier: string;
        readonly keyIdentifier: string;
        readonly key_location: number;
        readonly keyLocation: number;
        readonly meta_key: boolean;
        readonly metaKey: boolean;
        readonly shift_key: boolean;
        readonly shiftKey: boolean;

        // Owm methods of WebKit2WebExtension-4.0.DOMKeyboardEvent

        get_alt_graph_key(): boolean;
        get_alt_key(): boolean;
        get_ctrl_key(): boolean;
        get_key_identifier(): string;
        get_key_location(): number;
        get_meta_key(): boolean;
        get_modifier_state(keyIdentifierArg: string): boolean;
        get_shift_key(): boolean;
        init_keyboard_event(
            type: string,
            canBubble: boolean,
            cancelable: boolean,
            view: DOMDOMWindow,
            keyIdentifier: string,
            location: number,
            ctrlKey: boolean,
            altKey: boolean,
            shiftKey: boolean,
            metaKey: boolean,
            altGraphKey: boolean,
        ): void;
    }

    module DOMMediaList {
        // Constructor properties interface
    }

    class DOMMediaList extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMMediaList

        readonly length: number;
        media_text: string;
        mediaText: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMMediaList

        append_medium(newMedium: string): void;
        delete_medium(oldMedium: string): void;
        get_length(): number;
        get_media_text(): string;
        item(index: number): string;
        set_media_text(value: string): void;
    }

    module DOMMouseEvent {
        // Constructor properties interface
    }

    class DOMMouseEvent extends DOMUIEvent {
        // Own properties of WebKit2WebExtension-4.0.DOMMouseEvent

        readonly alt_key: boolean;
        readonly altKey: boolean;
        readonly button: number;
        readonly client_x: number;
        readonly clientX: number;
        readonly client_y: number;
        readonly clientY: number;
        readonly ctrl_key: boolean;
        readonly ctrlKey: boolean;
        readonly from_element: DOMNode;
        readonly fromElement: DOMNode;
        readonly meta_key: boolean;
        readonly metaKey: boolean;
        readonly offset_x: number;
        readonly offsetX: number;
        readonly offset_y: number;
        readonly offsetY: number;
        readonly related_target: DOMEventTarget;
        readonly relatedTarget: DOMEventTarget;
        readonly screen_x: number;
        readonly screenX: number;
        readonly screen_y: number;
        readonly screenY: number;
        readonly shift_key: boolean;
        readonly shiftKey: boolean;
        readonly to_element: DOMNode;
        readonly toElement: DOMNode;
        readonly x: number;
        readonly y: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMMouseEvent

        get_alt_key(): boolean;
        get_button(): number;
        get_client_x(): number;
        get_client_y(): number;
        get_ctrl_key(): boolean;
        get_from_element(): DOMNode;
        get_meta_key(): boolean;
        get_offset_x(): number;
        get_offset_y(): number;
        get_related_target(): DOMEventTarget;
        get_screen_x(): number;
        get_screen_y(): number;
        get_shift_key(): boolean;
        get_to_element(): DOMNode;
        get_x(): number;
        get_y(): number;
        init_mouse_event(
            type: string,
            canBubble: boolean,
            cancelable: boolean,
            view: DOMDOMWindow,
            detail: number,
            screenX: number,
            screenY: number,
            clientX: number,
            clientY: number,
            ctrlKey: boolean,
            altKey: boolean,
            shiftKey: boolean,
            metaKey: boolean,
            button: number,
            relatedTarget: DOMEventTarget,
        ): void;
    }

    module DOMNamedNodeMap {
        // Constructor properties interface
    }

    class DOMNamedNodeMap extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMNamedNodeMap

        readonly length: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMNamedNodeMap

        get_length(): number;
        get_named_item(name: string): DOMNode;
        get_named_item_ns(namespaceURI: string, localName: string): DOMNode;
        item(index: number): DOMNode;
        remove_named_item(name: string): DOMNode;
        remove_named_item_ns(namespaceURI: string, localName: string): DOMNode;
        set_named_item(node: DOMNode): DOMNode;
        set_named_item_ns(node: DOMNode): DOMNode;
    }

    module DOMNode {
        // Constructor properties interface
    }

    class DOMNode extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMNode

        readonly base_uri: string;
        readonly baseUri: string;
        readonly child_nodes: DOMNodeList;
        readonly childNodes: DOMNodeList;
        readonly first_child: DOMNode;
        readonly firstChild: DOMNode;
        readonly last_child: DOMNode;
        readonly lastChild: DOMNode;
        readonly next_sibling: DOMNode;
        readonly nextSibling: DOMNode;
        readonly node_name: string;
        readonly nodeName: string;
        readonly node_type: number;
        readonly nodeType: number;
        node_value: string;
        nodeValue: string;
        readonly owner_document: DOMDocument;
        readonly ownerDocument: DOMDocument;
        readonly parent_element: DOMElement;
        readonly parentElement: DOMElement;
        readonly parent_node: DOMNode;
        readonly parentNode: DOMNode;
        readonly previous_sibling: DOMNode;
        readonly previousSibling: DOMNode;
        text_content: string;
        textContent: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMNode

        /**
         * Get the #WebKitDOMNode for the DOM node referenced by `value`.
         * @param value a #JSCValue
         */
        static for_js_value(value: JavaScriptCore.Value): DOMNode;

        // Owm methods of WebKit2WebExtension-4.0.DOMNode

        append_child(newChild: DOMNode): DOMNode;
        clone_node(deep: boolean): DOMNode;
        clone_node_with_error(deep: boolean): DOMNode;
        compare_document_position(other: DOMNode): number;
        contains(other: DOMNode): boolean;
        get_base_uri(): string;
        get_child_nodes(): DOMNodeList;
        get_first_child(): DOMNode;
        get_last_child(): DOMNode;
        get_local_name(): string;
        get_namespace_uri(): string;
        get_next_sibling(): DOMNode;
        get_node_name(): string;
        get_node_type(): number;
        get_node_value(): string;
        get_owner_document(): DOMDocument;
        get_parent_element(): DOMElement;
        get_parent_node(): DOMNode;
        get_prefix(): string;
        get_previous_sibling(): DOMNode;
        get_text_content(): string;
        has_child_nodes(): boolean;
        insert_before(newChild: DOMNode, refChild?: DOMNode | null): DOMNode;
        is_default_namespace(namespaceURI: string): boolean;
        is_equal_node(other: DOMNode): boolean;
        is_same_node(other: DOMNode): boolean;
        is_supported(feature: string, version: string): boolean;
        lookup_namespace_uri(prefix: string): string;
        lookup_prefix(namespaceURI: string): string;
        normalize(): void;
        remove_child(oldChild: DOMNode): DOMNode;
        replace_child(newChild: DOMNode, oldChild: DOMNode): DOMNode;
        set_node_value(value: string): void;
        set_prefix(value: string): void;
        set_text_content(value: string): void;
    }

    module DOMNodeIterator {
        // Constructor properties interface
    }

    class DOMNodeIterator extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMNodeIterator

        readonly filter: DOMNodeFilter;
        readonly pointer_before_reference_node: boolean;
        readonly pointerBeforeReferenceNode: boolean;
        readonly reference_node: DOMNode;
        readonly referenceNode: DOMNode;
        readonly root: DOMNode;
        readonly what_to_show: number;
        readonly whatToShow: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMNodeIterator

        detach(): void;
        /**
         * This function has been removed from the DOM spec and it just returns %FALSE.
         * @returns A #gboolean                                                                                                                                                                       *
         */
        get_expand_entity_references(): boolean;
        get_filter(): DOMNodeFilter;
        get_pointer_before_reference_node(): boolean;
        get_reference_node(): DOMNode;
        get_root(): DOMNode;
        get_what_to_show(): number;
        next_node(): DOMNode;
        previous_node(): DOMNode;
    }

    module DOMNodeList {
        // Constructor properties interface
    }

    class DOMNodeList extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMNodeList

        readonly length: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMNodeList

        get_length(): number;
        item(index: number): DOMNode;
    }

    module DOMObject {
        // Constructor properties interface
    }

    class DOMObject extends GObject.Object {
        // Own properties of WebKit2WebExtension-4.0.DOMObject

        core_object: any;
        coreObject: any;

        // Own fields of WebKit2WebExtension-4.0.DOMObject

        parentInstance: GObject.Object;
    }

    module DOMProcessingInstruction {
        // Constructor properties interface
    }

    class DOMProcessingInstruction extends DOMCharacterData {
        // Own properties of WebKit2WebExtension-4.0.DOMProcessingInstruction

        readonly sheet: DOMStyleSheet;
        readonly target: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMProcessingInstruction

        get_sheet(): DOMStyleSheet;
        get_target(): string;
    }

    module DOMRange {
        // Constructor properties interface
    }

    class DOMRange extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMRange

        readonly collapsed: boolean;
        readonly common_ancestor_container: DOMNode;
        readonly commonAncestorContainer: DOMNode;
        readonly end_container: DOMNode;
        readonly endContainer: DOMNode;
        readonly end_offset: number;
        readonly endOffset: number;
        readonly start_container: DOMNode;
        readonly startContainer: DOMNode;
        readonly start_offset: number;
        readonly startOffset: number;
        readonly text: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMRange

        clone_contents(): DOMDocumentFragment;
        clone_range(): DOMRange;
        collapse(toStart: boolean): void;
        compare_boundary_points(how: number, sourceRange: DOMRange): number;
        compare_node(refNode: DOMNode): number;
        compare_point(refNode: DOMNode, offset: number): number;
        create_contextual_fragment(html: string): DOMDocumentFragment;
        delete_contents(): void;
        detach(): void;
        expand(unit: string): void;
        extract_contents(): DOMDocumentFragment;
        get_collapsed(): boolean;
        get_common_ancestor_container(): DOMNode;
        get_end_container(): DOMNode;
        get_end_offset(): number;
        get_start_container(): DOMNode;
        get_start_offset(): number;
        get_text(): string;
        insert_node(newNode: DOMNode): void;
        intersects_node(refNode: DOMNode): boolean;
        is_point_in_range(refNode: DOMNode, offset: number): boolean;
        select_node(refNode: DOMNode): void;
        select_node_contents(refNode: DOMNode): void;
        set_end(refNode: DOMNode, offset: number): void;
        set_end_after(refNode: DOMNode): void;
        set_end_before(refNode: DOMNode): void;
        set_start(refNode: DOMNode, offset: number): void;
        set_start_after(refNode: DOMNode): void;
        set_start_before(refNode: DOMNode): void;
        surround_contents(newParent: DOMNode): void;
        to_string(): string;
    }

    module DOMStyleSheet {
        // Constructor properties interface
    }

    class DOMStyleSheet extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMStyleSheet

        disabled: boolean;
        readonly href: string;
        readonly media: DOMMediaList;
        readonly owner_node: DOMNode;
        readonly ownerNode: DOMNode;
        readonly parent_style_sheet: DOMStyleSheet;
        readonly parentStyleSheet: DOMStyleSheet;
        readonly title: string;
        readonly type: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMStyleSheet

        get_content_type(): string;
        get_disabled(): boolean;
        get_href(): string;
        get_media(): DOMMediaList;
        get_owner_node(): DOMNode;
        get_parent_style_sheet(): DOMStyleSheet;
        get_title(): string;
        set_disabled(value: boolean): void;
    }

    module DOMStyleSheetList {
        // Constructor properties interface
    }

    class DOMStyleSheetList extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMStyleSheetList

        readonly length: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMStyleSheetList

        get_length(): number;
        item(index: number): DOMStyleSheet;
    }

    module DOMText {
        // Constructor properties interface
    }

    class DOMText extends DOMCharacterData {
        // Own properties of WebKit2WebExtension-4.0.DOMText

        readonly whole_text: string;
        readonly wholeText: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMText

        get_whole_text(): string;
        replace_whole_text(content: string): DOMText;
        split_text(offset: number): DOMText;
    }

    module DOMTreeWalker {
        // Constructor properties interface
    }

    class DOMTreeWalker extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMTreeWalker

        readonly current_node: DOMNode;
        readonly currentNode: DOMNode;
        readonly filter: DOMNodeFilter;
        readonly root: DOMNode;
        readonly what_to_show: number;
        readonly whatToShow: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMTreeWalker

        first_child(): DOMNode;
        get_current_node(): DOMNode;
        /**
         * This function has been removed from the DOM spec and it just returns %FALSE.
         * @returns A #gboolean
         */
        get_expand_entity_references(): boolean;
        get_filter(): DOMNodeFilter;
        get_root(): DOMNode;
        get_what_to_show(): number;
        last_child(): DOMNode;
        next_node(): DOMNode;
        next_sibling(): DOMNode;
        parent_node(): DOMNode;
        previous_node(): DOMNode;
        previous_sibling(): DOMNode;
        set_current_node(value: DOMNode): void;
    }

    module DOMUIEvent {
        // Constructor properties interface
    }

    class DOMUIEvent extends DOMEvent {
        // Own properties of WebKit2WebExtension-4.0.DOMUIEvent

        readonly char_code: number;
        readonly charCode: number;
        readonly detail: number;
        readonly key_code: number;
        readonly keyCode: number;
        readonly layer_x: number;
        readonly layerX: number;
        readonly layer_y: number;
        readonly layerY: number;
        readonly page_x: number;
        readonly pageX: number;
        readonly page_y: number;
        readonly pageY: number;
        readonly view: DOMDOMWindow;

        // Owm methods of WebKit2WebExtension-4.0.DOMUIEvent

        get_char_code(): number;
        get_detail(): number;
        get_key_code(): number;
        get_layer_x(): number;
        get_layer_y(): number;
        get_page_x(): number;
        get_page_y(): number;
        get_view(): DOMDOMWindow;
        init_ui_event(type: string, canBubble: boolean, cancelable: boolean, view: DOMDOMWindow, detail: number): void;
    }

    module DOMWheelEvent {
        // Constructor properties interface
    }

    class DOMWheelEvent extends DOMMouseEvent {
        // Own properties of WebKit2WebExtension-4.0.DOMWheelEvent

        readonly wheel_delta: number;
        readonly wheelDelta: number;
        readonly wheel_delta_x: number;
        readonly wheelDeltaX: number;
        readonly wheel_delta_y: number;
        readonly wheelDeltaY: number;

        // Owm methods of WebKit2WebExtension-4.0.DOMWheelEvent

        get_wheel_delta(): number;
        get_wheel_delta_x(): number;
        get_wheel_delta_y(): number;
        init_wheel_event(
            wheelDeltaX: number,
            wheelDeltaY: number,
            view: DOMDOMWindow,
            screenX: number,
            screenY: number,
            clientX: number,
            clientY: number,
            ctrlKey: boolean,
            altKey: boolean,
            shiftKey: boolean,
            metaKey: boolean,
        ): void;
    }

    module DOMXPathExpression {
        // Constructor properties interface
    }

    class DOMXPathExpression extends DOMObject {
        // Owm methods of WebKit2WebExtension-4.0.DOMXPathExpression

        evaluate(contextNode: DOMNode, type: number, inResult: DOMXPathResult): DOMXPathResult;
    }

    module DOMXPathResult {
        // Constructor properties interface
    }

    class DOMXPathResult extends DOMObject {
        // Own properties of WebKit2WebExtension-4.0.DOMXPathResult

        readonly boolean_value: boolean;
        readonly booleanValue: boolean;
        readonly invalid_iterator_state: boolean;
        readonly invalidIteratorState: boolean;
        readonly number_value: number;
        readonly numberValue: number;
        readonly result_type: number;
        readonly resultType: number;
        readonly single_node_value: DOMNode;
        readonly singleNodeValue: DOMNode;
        readonly snapshot_length: number;
        readonly snapshotLength: number;
        readonly string_value: string;
        readonly stringValue: string;

        // Owm methods of WebKit2WebExtension-4.0.DOMXPathResult

        get_boolean_value(): boolean;
        get_invalid_iterator_state(): boolean;
        get_number_value(): number;
        get_result_type(): number;
        get_single_node_value(): DOMNode;
        get_snapshot_length(): number;
        get_string_value(): string;
        iterate_next(): DOMNode;
        snapshot_item(index: number): DOMNode;
    }

    module Frame {
        // Constructor properties interface
    }

    /**
     * A web page frame.
     *
     * Each `WebKitWebPage` has at least one main frame, and can have any number
     * of subframes.
     */
    class Frame extends GObject.Object {
        // Owm methods of WebKit2WebExtension-4.0.Frame

        /**
         * Gets the process-unique identifier of this #WebKitFrame. No other
         * frame in the same web process will have the same ID; however, frames
         * in other web processes may.
         * @returns the identifier of @frame
         */
        get_id(): number;
        /**
         * Get the JavaScript execution context of `frame`. Use this function to bridge
         * between the WebKit and JavaScriptCore APIs.
         * @returns the #JSCContext for the JavaScript execution context of @frame.
         */
        get_js_context(): JavaScriptCore.Context;
        /**
         * Get the JavaScript execution context of `frame` for the given #WebKitScriptWorld.
         * @param world a #WebKitScriptWorld
         * @returns the #JSCContext for the JavaScript execution context of @frame for @world.
         */
        get_js_context_for_script_world(world: ScriptWorld): JavaScriptCore.Context;
        /**
         * Get a #JSCValue referencing the given DOM object. The value is created in the JavaScript execution
         * context of `frame`.
         * @param dom_object a #WebKitDOMObject
         * @returns the #JSCValue referencing @dom_object.
         */
        get_js_value_for_dom_object(dom_object: DOMObject): JavaScriptCore.Value;
        /**
         * Get a #JSCValue referencing the given DOM object. The value is created in the JavaScript execution
         * context of `frame` for the given #WebKitScriptWorld.
         * @param dom_object a #WebKitDOMObject
         * @param world a #WebKitScriptWorld
         * @returns the #JSCValue referencing @dom_object
         */
        get_js_value_for_dom_object_in_script_world(dom_object: DOMObject, world: ScriptWorld): JavaScriptCore.Value;
        /**
         * Gets the current active URI of `frame`.
         * @returns the current active URI of @frame or %NULL if nothing has been    loaded yet.
         */
        get_uri(): string;
        /**
         * Gets whether `frame` is the main frame of a #WebKitWebPage
         * @returns %TRUE if @frame is a main frame or %FALSE otherwise
         */
        is_main_frame(): boolean;
    }

    module HitTestResult {
        // Constructor properties interface
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
     */
    class HitTestResult extends GObject.Object {
        // Own properties of WebKit2WebExtension-4.0.HitTestResult

        /**
         * Bitmask of #WebKitHitTestResultContext flags representing
         * the context of the #WebKitHitTestResult.
         */
        context: number;
        /**
         * The URI of the image if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE
         * is present in #WebKitHitTestResult:context
         */
        image_uri: string;
        /**
         * The URI of the image if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE
         * is present in #WebKitHitTestResult:context
         */
        imageUri: string;
        /**
         * The label of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        link_label: string;
        /**
         * The label of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        linkLabel: string;
        /**
         * The title of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        link_title: string;
        /**
         * The title of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        linkTitle: string;
        /**
         * The URI of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        link_uri: string;
        /**
         * The URI of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        linkUri: string;
        /**
         * The URI of the media if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA
         * is present in #WebKitHitTestResult:context
         */
        media_uri: string;
        /**
         * The URI of the media if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA
         * is present in #WebKitHitTestResult:context
         */
        mediaUri: string;

        // Owm methods of WebKit2WebExtension-4.0.HitTestResult

        /**
         * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_EDITABLE flag is present in
         * #WebKitHitTestResult:context.
         * @returns %TRUE if there's an editable element at the coordinates of the @hit_test_result,    or %FALSE otherwise
         */
        context_is_editable(): boolean;
        /**
         * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE flag is present in
         * #WebKitHitTestResult:context.
         * @returns %TRUE if there's an image element in the coordinates of the Hit Test,    or %FALSE otherwise
         */
        context_is_image(): boolean;
        /**
         * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK flag is present in
         * #WebKitHitTestResult:context.
         * @returns %TRUE if there's a link element in the coordinates of the Hit Test,    or %FALSE otherwise
         */
        context_is_link(): boolean;
        /**
         * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA flag is present in
         * #WebKitHitTestResult:context.
         * @returns %TRUE if there's a media element in the coordinates of the Hit Test,    or %FALSE otherwise
         */
        context_is_media(): boolean;
        /**
         * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SCROLLBAR flag is present in
         * #WebKitHitTestResult:context.
         * @returns %TRUE if there's a scrollbar element at the coordinates of the @hit_test_result,    or %FALSE otherwise
         */
        context_is_scrollbar(): boolean;
        /**
         * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SELECTION flag is present in
         * #WebKitHitTestResult:context.
         * @returns %TRUE if there's a selected element at the coordinates of the @hit_test_result,    or %FALSE otherwise
         */
        context_is_selection(): boolean;
        /**
         * Gets the value of the #WebKitHitTestResult:context property.
         * @returns a bitmask of #WebKitHitTestResultContext flags
         */
        get_context(): number;
        /**
         * Gets the value of the #WebKitHitTestResult:image-uri property.
         * @returns the URI of the image element in the coordinates of the Hit Test,    or %NULL if there isn't an image element in @hit_test_result context
         */
        get_image_uri(): string;
        /**
         * Gets the value of the #WebKitHitTestResult:link-label property.
         * @returns the label of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context or the    link element doesn't have a label
         */
        get_link_label(): string;
        /**
         * Gets the value of the #WebKitHitTestResult:link-title property.
         * @returns the title of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context or the    link element doesn't have a title
         */
        get_link_title(): string;
        /**
         * Gets the value of the #WebKitHitTestResult:link-uri property.
         * @returns the URI of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context
         */
        get_link_uri(): string;
        /**
         * Gets the value of the #WebKitHitTestResult:media-uri property.
         * @returns the URI of the media element in the coordinates of the Hit Test,    or %NULL if there isn't a media element in @hit_test_result context
         */
        get_media_uri(): string;
    }

    module ScriptWorld {
        // Signal callback interfaces

        interface WindowObjectCleared {
            (page: WebPage, frame: Frame): void;
        }

        // Constructor properties interface
    }

    class ScriptWorld extends GObject.Object {
        // Constructors of WebKit2WebExtension-4.0.ScriptWorld

        static ['new'](): ScriptWorld;

        static new_with_name(name: string): ScriptWorld;

        // Owm methods of WebKit2WebExtension-4.0.ScriptWorld

        /**
         * Get the default #WebKitScriptWorld. This is the normal script world
         * where all scripts are executed by default.
         * You can get the JavaScript execution context of a #WebKitScriptWorld
         * for a given #WebKitFrame with webkit_frame_get_javascript_context_for_script_world().
         */
        static get_default(): ScriptWorld;

        // Owm methods of WebKit2WebExtension-4.0.ScriptWorld

        /**
         * Get the name of a #WebKitScriptWorld.
         * @returns the name of @world
         */
        get_name(): string;
    }

    module URIRequest {
        // Constructor properties interface
    }

    /**
     * Represents a URI request.
     *
     * A #WebKitURIRequest can be created with a URI using the
     * webkit_uri_request_new() method, and you can get the URI of an
     * existing request with the webkit_uri_request_get_uri() one.
     */
    class URIRequest extends GObject.Object {
        // Own properties of WebKit2WebExtension-4.0.URIRequest

        /**
         * The URI to which the request will be made.
         */
        uri: string;

        // Constructors of WebKit2WebExtension-4.0.URIRequest

        static ['new'](uri: string): URIRequest;

        // Owm methods of WebKit2WebExtension-4.0.URIRequest

        /**
         * Get the HTTP headers of a #WebKitURIRequest as a #SoupMessageHeaders.
         * @returns a #SoupMessageHeaders with the HTTP headers of @request    or %NULL if @request is not an HTTP request.
         */
        get_http_headers(): Soup.MessageHeaders;
        /**
         * Get the HTTP method of the #WebKitURIRequest.
         * @returns the HTTP method of the #WebKitURIRequest or %NULL if @request is not    an HTTP request.
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

    module URIResponse {
        // Constructor properties interface
    }

    /**
     * Represents an URI response.
     *
     * A #WebKitURIResponse contains information such as the URI, the
     * status code, the content length, the mime type, the HTTP status or
     * the suggested filename.
     */
    class URIResponse extends GObject.Object {
        // Own properties of WebKit2WebExtension-4.0.URIResponse

        /**
         * The expected content length of the response.
         */
        readonly content_length: number;
        /**
         * The expected content length of the response.
         */
        readonly contentLength: number;
        /**
         * The HTTP headers of the response, or %NULL if the response is not an HTTP response.
         */
        readonly http_headers: Soup.MessageHeaders;
        /**
         * The HTTP headers of the response, or %NULL if the response is not an HTTP response.
         */
        readonly httpHeaders: Soup.MessageHeaders;
        /**
         * The MIME type of the response.
         */
        readonly mime_type: string;
        /**
         * The MIME type of the response.
         */
        readonly mimeType: string;
        /**
         * The status code of the response as returned by the server.
         */
        readonly status_code: number;
        /**
         * The status code of the response as returned by the server.
         */
        readonly statusCode: number;
        /**
         * The suggested filename for the URI response.
         */
        readonly suggested_filename: string;
        /**
         * The suggested filename for the URI response.
         */
        readonly suggestedFilename: string;
        /**
         * The URI for which the response was made.
         */
        readonly uri: string;

        // Owm methods of WebKit2WebExtension-4.0.URIResponse

        /**
         * Get the expected content length of the #WebKitURIResponse.
         *
         * It can be 0 if the server provided an incorrect or missing Content-Length.
         * @returns the expected content length of @response.
         */
        get_content_length(): number;
        /**
         * Get the HTTP headers of a #WebKitURIResponse as a #SoupMessageHeaders.
         * @returns a #SoupMessageHeaders with the HTTP headers of @response    or %NULL if @response is not an HTTP response.
         */
        get_http_headers(): Soup.MessageHeaders;
        /**
         * Gets the MIME type of the response.
         * @returns MIME type, as a string.
         */
        get_mime_type(): string;
        /**
         * Get the status code of the #WebKitURIResponse.
         *
         * Get the status code of the #WebKitURIResponse as returned by
         * the server. It will normally be a #SoupKnownStatusCode, for
         * example %SOUP_STATUS_OK, though the server can respond with any
         * unsigned integer.
         * @returns the status code of @response
         */
        get_status_code(): number;
        /**
         * Get the suggested filename for `response`.
         *
         * Get the suggested filename for `response,` as specified by
         * the 'Content-Disposition' HTTP header, or %NULL if it's not
         * present.
         * @returns the suggested filename or %NULL if    the 'Content-Disposition' HTTP header is not present.
         */
        get_suggested_filename(): string;
        /**
         * Gets the URI which resulted in the response.
         * @returns response URI, as a string.
         */
        get_uri(): string;
    }

    module UserMessage {
        // Constructor properties interface
    }

    /**
     * Message that can be sent between the UI process and web process extensions.
     *
     * A WebKitUserMessage is a message that can be used for the communication between the UI process
     * and web process extensions. A WebKitUserMessage always has a name, and it can also include parameters and
     * UNIX file descriptors. Messages can be sent from a #WebKitWebContext to all web process extensions,
     * from a web process extension to its corresponding #WebKitWebContext, and from a #WebKitWebView to its
     * corresponding #WebKitWebPage (and vice versa). One to one messages can be replied to directly with
     * webkit_user_message_send_reply().
     */
    class UserMessage extends GObject.InitiallyUnowned {
        // Own properties of WebKit2WebExtension-4.0.UserMessage

        /**
         * The UNIX file descriptors of the user message.
         */
        fd_list: Gio.UnixFDList;
        /**
         * The UNIX file descriptors of the user message.
         */
        fdList: Gio.UnixFDList;
        /**
         * The name of the user message.
         */
        name: string;
        /**
         * The parameters of the user message as a #GVariant, or %NULL
         * if the message doesn't include parameters. Note that only complete types are
         * allowed.
         */
        parameters: GLib.Variant;

        // Constructors of WebKit2WebExtension-4.0.UserMessage

        static ['new'](name: string, parameters?: GLib.Variant | null): UserMessage;

        static new_with_fd_list(
            name: string,
            parameters?: GLib.Variant | null,
            fd_list?: Gio.UnixFDList | null,
        ): UserMessage;

        // Owm methods of WebKit2WebExtension-4.0.UserMessage

        /**
         * Gets the quark for the domain of user message errors.
         */
        static error_quark(): GLib.Quark;

        // Owm methods of WebKit2WebExtension-4.0.UserMessage

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
         * You can only send a reply to a #WebKitUserMessage that has been
         * received.
         * @param reply a #WebKitUserMessage to send as reply
         */
        send_reply(reply: UserMessage): void;
    }

    module WebEditor {
        // Signal callback interfaces

        interface SelectionChanged {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Access to editing capabilities of a #WebKitWebPage.
     *
     * The WebKitWebEditor provides access to various editing capabilities of
     * a #WebKitWebPage such as a possibility to react to the current selection in
     * #WebKitWebPage.
     */
    class WebEditor extends GObject.Object {
        // Owm methods of WebKit2WebExtension-4.0.WebEditor

        /**
         * Gets the #WebKitWebPage that is associated with the #WebKitWebEditor.
         * @returns the associated #WebKitWebPage
         */
        get_page(): WebPage;
    }

    module WebExtension {
        // Signal callback interfaces

        interface PageCreated {
            (web_page: WebPage): void;
        }

        interface UserMessageReceived {
            (message: UserMessage): void;
        }

        // Constructor properties interface
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
     */
    class WebExtension extends GObject.Object {
        // Owm methods of WebKit2WebExtension-4.0.WebExtension

        /**
         * Get the web page of the given `page_id`.
         * @param page_id the identifier of the #WebKitWebPage to get
         * @returns the #WebKitWebPage for the given @page_id, or %NULL if the    identifier doesn't correspond to an existing web page.
         */
        get_page(page_id: number): WebPage;
        /**
         * Send `message` to the #WebKitWebContext corresponding to `extension`. If `message` is floating, it's consumed.
         *
         * If you don't expect any reply, or you simply want to ignore it, you can pass %NULL as `calback`.
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_extension_send_message_to_context_finish() to get the message reply.
         * @param message a #WebKitUserMessage
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL
         */
        send_message_to_context(
            message: UserMessage,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finish an asynchronous operation started with webkit_web_extension_send_message_to_context().
         * @param result a #GAsyncResult
         * @returns a #WebKitUserMessage with the reply or %NULL in case of error.
         */
        send_message_to_context_finish(result: Gio.AsyncResult): UserMessage;
    }

    module WebFormManager {
        // Signal callback interfaces

        interface FormControlsAssociated {
            (frame: Frame, elements: JavaScriptCore.Value[]): void;
        }

        interface WillSendSubmitEvent {
            (form: JavaScriptCore.Value, source_frame: Frame, target_frame: Frame): void;
        }

        interface WillSubmitForm {
            (form: JavaScriptCore.Value, source_frame: Frame, target_frame: Frame): void;
        }

        // Constructor properties interface
    }

    /**
     * Form manager of a #WebKitWebPage in a #WebKitScriptWorld
     */
    class WebFormManager extends GObject.Object {
        // Owm methods of WebKit2WebExtension-4.0.WebFormManager

        /**
         * Set the value of an HTML input element as if it had been edited by
         * the user, triggering a change event, and set it as filled automatically.
         * If `element` is not an HTML input element this function does nothing.
         * @param element a #JSCValue
         * @param value the text to set
         */
        static input_element_auto_fill(element: JavaScriptCore.Value, value: string): void;
        /**
         * Get whether `element` is an HTML input element that has been filled automatically.
         * @param element a #JSCValue
         */
        static input_element_is_auto_filled(element: JavaScriptCore.Value): boolean;
        /**
         * Get whether `element` is an HTML text input element that has been edited by a user action.
         * @param element a #JSCValue
         */
        static input_element_is_user_edited(element: JavaScriptCore.Value): boolean;
    }

    module WebHitTestResult {
        // Constructor properties interface
    }

    /**
     * Result of a Hit Test (Web Process Extensions).
     *
     * WebKitWebHitTestResult extends #WebKitHitTestResult to provide information
     * about the #WebKitDOMNode in the coordinates of the Hit Test.
     */
    class WebHitTestResult extends HitTestResult {
        // Own properties of WebKit2WebExtension-4.0.WebHitTestResult

        /**
         * The #WebKitDOMNode
         */
        node: DOMNode;

        // Owm methods of WebKit2WebExtension-4.0.WebHitTestResult

        /**
         * Get the #JSCValue for the DOM node in `world` at the coordinates of the Hit Test.
         * @param world a #WebKitScriptWorld, or %NULL to use the default
         * @returns a #JSCValue for the DOM node, or %NULL
         */
        get_js_node(world?: ScriptWorld | null): JavaScriptCore.Value | null;
        /**
         * Get the #WebKitDOMNode in the coordinates of the Hit Test.
         * @returns a #WebKitDOMNode
         */
        get_node(): DOMNode;
    }

    module WebPage {
        // Signal callback interfaces

        interface ConsoleMessageSent {
            (console_message: ConsoleMessage): void;
        }

        interface ContextMenu {
            (context_menu: ContextMenu, hit_test_result: WebHitTestResult): boolean;
        }

        interface DocumentLoaded {
            (): void;
        }

        interface FormControlsAssociated {
            (elements: DOMElement[]): void;
        }

        interface FormControlsAssociatedForFrame {
            (elements: DOMElement[], frame: Frame): void;
        }

        interface SendRequest {
            (request: URIRequest, redirected_response: URIResponse): boolean;
        }

        interface UserMessageReceived {
            (message: UserMessage): boolean;
        }

        interface WillSubmitForm {
            (
                form: DOMElement,
                step: FormSubmissionStep,
                source_frame: Frame,
                target_frame: Frame,
                text_field_names: string[],
                text_field_values: string[],
            ): void;
        }

        // Constructor properties interface
    }

    /**
     * A loaded web page.
     */
    class WebPage extends GObject.Object {
        // Own properties of WebKit2WebExtension-4.0.WebPage

        /**
         * The current active URI of the #WebKitWebPage.
         */
        readonly uri: string;

        // Owm methods of WebKit2WebExtension-4.0.WebPage

        /**
         * Get the #WebKitDOMDocument currently loaded in `web_page`
         * @returns the #WebKitDOMDocument currently loaded, or %NULL    if no document is currently loaded.
         */
        get_dom_document(): DOMDocument;
        /**
         * Gets the #WebKitWebEditor of a #WebKitWebPage.
         * @returns the #WebKitWebEditor
         */
        get_editor(): WebEditor;
        /**
         * Get the #WebKitWebFormManager of `web_page` in `world`.
         * @param world a #WebKitScriptWorld
         * @returns a #WebKitWebFormManager
         */
        get_form_manager(world?: ScriptWorld | null): WebFormManager;
        /**
         * Get the identifier of the #WebKitWebPage
         * @returns the identifier of @web_page
         */
        get_id(): number;
        /**
         * Returns the main frame of a #WebKitWebPage.
         * @returns the #WebKitFrame that is the main frame of @web_page
         */
        get_main_frame(): Frame;
        /**
         * Returns the current active URI of `web_page`.
         *
         * You can monitor the active URI by connecting to the notify::uri
         * signal of `web_page`.
         * @returns the current active URI of @web_view or %NULL if nothing has been    loaded yet.
         */
        get_uri(): string;
        /**
         * Send `message` to the #WebKitWebView corresponding to `web_page`. If `message` is floating, it's consumed.
         *
         * If you don't expect any reply, or you simply want to ignore it, you can pass %NULL as `callback`.
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_page_send_message_to_view_finish() to get the message reply.
         * @param message a #WebKitUserMessage
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL
         */
        send_message_to_view(
            message: UserMessage,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finish an asynchronous operation started with webkit_web_page_send_message_to_view().
         * @param result a #GAsyncResult
         * @returns a #WebKitUserMessage with the reply or %NULL in case of error.
         */
        send_message_to_view_finish(result: Gio.AsyncResult): UserMessage;
    }

    class ConsoleMessage {
        // Owm methods of WebKit2WebExtension-4.0.ConsoleMessage

        /**
         * Make a copy of `console_message`.
         * @returns A copy of passed in #WebKitConsoleMessage
         */
        copy(): ConsoleMessage;
        /**
         * Free the #WebKitConsoleMessage
         */
        free(): void;
        /**
         * Gets the log level of a #WebKitConsoleMessage
         * @returns a #WebKitConsoleMessageLevel indicating the log level of @console_message
         */
        get_level(): ConsoleMessageLevel;
        /**
         * Gets the line number of a #WebKitConsoleMessage
         * @returns the line number of @console_message
         */
        get_line(): number;
        /**
         * Gets the source of a #WebKitConsoleMessage
         * @returns a #WebKitConsoleMessageSource indicating the source of @console_message
         */
        get_source(): ConsoleMessageSource;
        /**
         * Gets the source identifier of a #WebKitConsoleMessage
         * @returns the source identifier of @console_message
         */
        get_source_id(): string;
        /**
         * Gets the text message of a #WebKitConsoleMessage
         * @returns the text message of @console_message
         */
        get_text(): string;
    }

    class ContextMenuClass {}

    class ContextMenuItemClass {}

    class ContextMenuItemPrivate {}

    class ContextMenuPrivate {}

    class DOMAttrClass {}

    class DOMBlobClass {}

    class DOMCDATASectionClass {}

    class DOMCSSRuleClass {}

    class DOMCSSRuleListClass {}

    class DOMCSSStyleDeclarationClass {}

    class DOMCSSStyleSheetClass {}

    class DOMCSSValueClass {}

    class DOMCharacterDataClass {}

    class DOMClientRectClass {}

    class DOMClientRectListClass {}

    class DOMCommentClass {}

    class DOMDOMImplementationClass {}

    class DOMDOMSelectionClass {}

    class DOMDOMTokenListClass {}

    class DOMDOMWindowClass {}

    class DOMDocumentClass {}

    class DOMDocumentFragmentClass {}

    class DOMDocumentTypeClass {}

    class DOMElementClass {}

    class DOMEntityReferenceClass {}

    class DOMEventClass {}

    class DOMEventTargetIface {}

    class DOMFileClass {}

    class DOMFileListClass {}

    class DOMHTMLAnchorElementClass {}

    class DOMHTMLAppletElementClass {}

    class DOMHTMLAreaElementClass {}

    class DOMHTMLBRElementClass {}

    class DOMHTMLBaseElementClass {}

    class DOMHTMLBaseFontElementClass {}

    class DOMHTMLBodyElementClass {}

    class DOMHTMLButtonElementClass {}

    class DOMHTMLCanvasElementClass {}

    class DOMHTMLCollectionClass {}

    class DOMHTMLDListElementClass {}

    class DOMHTMLDirectoryElementClass {}

    class DOMHTMLDivElementClass {}

    class DOMHTMLDocumentClass {}

    class DOMHTMLElementClass {}

    class DOMHTMLEmbedElementClass {}

    class DOMHTMLFieldSetElementClass {}

    class DOMHTMLFontElementClass {}

    class DOMHTMLFormElementClass {}

    class DOMHTMLFrameElementClass {}

    class DOMHTMLFrameSetElementClass {}

    class DOMHTMLHRElementClass {}

    class DOMHTMLHeadElementClass {}

    class DOMHTMLHeadingElementClass {}

    class DOMHTMLHtmlElementClass {}

    class DOMHTMLIFrameElementClass {}

    class DOMHTMLImageElementClass {}

    class DOMHTMLInputElementClass {}

    class DOMHTMLLIElementClass {}

    class DOMHTMLLabelElementClass {}

    class DOMHTMLLegendElementClass {}

    class DOMHTMLLinkElementClass {}

    class DOMHTMLMapElementClass {}

    class DOMHTMLMarqueeElementClass {}

    class DOMHTMLMenuElementClass {}

    class DOMHTMLMetaElementClass {}

    class DOMHTMLModElementClass {}

    class DOMHTMLOListElementClass {}

    class DOMHTMLObjectElementClass {}

    class DOMHTMLOptGroupElementClass {}

    class DOMHTMLOptionElementClass {}

    class DOMHTMLOptionsCollectionClass {}

    class DOMHTMLParagraphElementClass {}

    class DOMHTMLParamElementClass {}

    class DOMHTMLPreElementClass {}

    class DOMHTMLQuoteElementClass {}

    class DOMHTMLScriptElementClass {}

    class DOMHTMLSelectElementClass {}

    class DOMHTMLStyleElementClass {}

    class DOMHTMLTableCaptionElementClass {}

    class DOMHTMLTableCellElementClass {}

    class DOMHTMLTableColElementClass {}

    class DOMHTMLTableElementClass {}

    class DOMHTMLTableRowElementClass {}

    class DOMHTMLTableSectionElementClass {}

    class DOMHTMLTextAreaElementClass {}

    class DOMHTMLTitleElementClass {}

    class DOMHTMLUListElementClass {}

    class DOMKeyboardEventClass {}

    class DOMMediaListClass {}

    class DOMMouseEventClass {}

    class DOMNamedNodeMapClass {}

    class DOMNodeClass {}

    class DOMNodeFilterIface {}

    class DOMNodeIteratorClass {}

    class DOMNodeListClass {}

    class DOMObjectClass {}

    class DOMProcessingInstructionClass {}

    class DOMRangeClass {}

    class DOMStyleSheetClass {}

    class DOMStyleSheetListClass {}

    class DOMTextClass {}

    class DOMTreeWalkerClass {}

    class DOMUIEventClass {}

    class DOMWheelEventClass {}

    class DOMXPathExpressionClass {}

    class DOMXPathNSResolverIface {}

    class DOMXPathResultClass {}

    class FrameClass {}

    class FramePrivate {}

    class HitTestResultClass {}

    class HitTestResultPrivate {}

    class ScriptWorldClass {}

    class ScriptWorldPrivate {}

    class URIRequestClass {}

    class URIRequestPrivate {}

    class URIResponseClass {}

    class URIResponsePrivate {}

    class UserMessageClass {}

    class UserMessagePrivate {}

    class WebEditorClass {}

    class WebEditorPrivate {}

    class WebExtensionClass {}

    class WebExtensionPrivate {}

    class WebFormManagerClass {}

    class WebHitTestResultClass {}

    class WebHitTestResultPrivate {}

    class WebPageClass {}

    class WebPagePrivate {}

    interface DOMEventTarget {
        // Owm methods of WebKit2WebExtension-4.0.DOMEventTarget

        add_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
        /**
         * Version of webkit_dom_event_target_add_event_listener() using a closure
         * instead of a callbacks for easier binding in other languages.
         * @param event_name A #gchar
         * @param handler A #GClosure
         * @param use_capture A #gboolean
         * @returns a #gboolean
         */
        add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        dispatch_event(event: DOMEvent): boolean;
        remove_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
        /**
         * Version of webkit_dom_event_target_remove_event_listener() using a closure
         * instead of a callbacks for easier binding in other languages.
         * @param event_name A #gchar
         * @param handler A #GClosure
         * @param use_capture A #gboolean
         * @returns a #gboolean
         */
        remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;

        // Own virtual methods of WebKit2WebExtension-4.0.DOMEventTarget

        vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_dispatch_event(event: DOMEvent): boolean;
        vfunc_remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
    }

    interface DOMNodeFilter {
        // Owm methods of WebKit2WebExtension-4.0.DOMNodeFilter

        accept_node(node: DOMNode): number;

        // Own virtual methods of WebKit2WebExtension-4.0.DOMNodeFilter

        vfunc_accept_node(node: DOMNode): number;
    }

    interface DOMXPathNSResolver {
        // Owm methods of WebKit2WebExtension-4.0.DOMXPathNSResolver

        lookup_namespace_uri(prefix: string): string;

        // Own virtual methods of WebKit2WebExtension-4.0.DOMXPathNSResolver

        vfunc_lookup_namespace_uri(prefix: string): string;
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

export default WebKit2WebExtension;
// END
