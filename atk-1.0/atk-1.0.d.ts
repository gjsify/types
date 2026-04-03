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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Atk {
    /**
     * Atk-1.0
     */

    /**
     * @gir-type Enum
     */
    export namespace CoordType {
        export const $gtype: GObject.GType<CoordType>;
    }

    /**
     * Specifies how xy coordinates are to be interpreted. Used by functions such
     * as `atk_component_get_position()` and `atk_text_get_character_extents()`
     * @gir-type Enum
     */
    enum CoordType {
        /**
         * specifies xy coordinates relative to the screen
         */
        SCREEN,
        /**
         * specifies xy coordinates relative to the widget's
         * top-level window
         */
        WINDOW,
        /**
         * specifies xy coordinates relative to the widget's
         * immediate parent. Since: 2.30
         */
        PARENT,
    }

    /**
     * @gir-type Enum
     */
    export namespace KeyEventType {
        export const $gtype: GObject.GType<KeyEventType>;
    }

    /**
     * Specifies the type of a keyboard evemt.
     * @gir-type Enum
     */
    enum KeyEventType {
        /**
         * specifies a key press event
         */
        PRESS,
        /**
         * specifies a key release event
         */
        RELEASE,
        /**
         * Not a valid value; specifies end of enumeration
         */
        LAST_DEFINED,
    }

    /**
     * @gir-type Enum
     */
    export namespace Layer {
        export const $gtype: GObject.GType<Layer>;
    }

    /**
     * Describes the layer of a component
     *
     * These enumerated "layer values" are used when determining which UI
     * rendering layer a component is drawn into, which can help in making
     * determinations of when components occlude one another.
     * @gir-type Enum
     */
    enum Layer {
        /**
         * The object does not have a layer
         */
        INVALID,
        /**
         * This layer is reserved for the desktop background
         */
        BACKGROUND,
        /**
         * This layer is used for Canvas components
         */
        CANVAS,
        /**
         * This layer is normally used for components
         */
        WIDGET,
        /**
         * This layer is used for layered components
         */
        MDI,
        /**
         * This layer is used for popup components, such as menus
         */
        POPUP,
        /**
         * This layer is reserved for future use.
         */
        OVERLAY,
        /**
         * This layer is used for toplevel windows.
         */
        WINDOW,
    }

    /**
     * @gir-type Enum
     */
    export namespace Live {
        export const $gtype: GObject.GType<Live>;
    }

    /**
     * Enumeration used to indicate a type of live region and how assertive it
     * should be in terms of speaking notifications. Currently, this is only used
     * for "notification" events, but it may be used for additional purposes
     * in the future.
     * @gir-type Enum
     * @since 2.50
     */
    enum Live {
        /**
         * No live region.
         */
        NONE,
        /**
         * This live region should be considered polite.
         */
        POLITE,
        /**
         * This live region should be considered assertive.
         */
        ASSERTIVE,
    }

    /**
     * @gir-type Enum
     */
    export namespace RelationType {
        export const $gtype: GObject.GType<RelationType>;
    }

    /**
     * Describes the type of the relation
     * @gir-type Enum
     */
    enum RelationType {
        /**
         * Not used, represens "no relationship" or an error condition.
         */
        NULL,
        /**
         * Indicates an object controlled by one or more target objects.
         */
        CONTROLLED_BY,
        /**
         * Indicates an object is an controller for one or more target objects.
         */
        CONTROLLER_FOR,
        /**
         * Indicates an object is a label for one or more target objects.
         */
        LABEL_FOR,
        /**
         * Indicates an object is labelled by one or more target objects.
         */
        LABELLED_BY,
        /**
         * Indicates an object is a member of a group of one or more target objects.
         */
        MEMBER_OF,
        /**
         * Indicates an object is a cell in a treetable which is displayed because a cell in the same column is expanded and identifies that cell.
         */
        NODE_CHILD_OF,
        /**
         * Indicates that the object has content that flows logically to another
         *  AtkObject in a sequential way, (for instance text-flow).
         */
        FLOWS_TO,
        /**
         * Indicates that the object has content that flows logically from
         *  another AtkObject in a sequential way, (for instance text-flow).
         */
        FLOWS_FROM,
        /**
         * Indicates a subwindow attached to a component but otherwise has no connection in  the UI heirarchy to that component.
         */
        SUBWINDOW_OF,
        /**
         * Indicates that the object visually embeds
         *  another object's content, i.e. this object's content flows around
         *  another's content.
         */
        EMBEDS,
        /**
         * Reciprocal of {@link Atk.RelationType.EMBEDS}, indicates that
         *  this object's content is visualy embedded in another object.
         */
        EMBEDDED_BY,
        /**
         * Indicates that an object is a popup for another object.
         */
        POPUP_FOR,
        /**
         * Indicates that an object is a parent window of another object.
         */
        PARENT_WINDOW_OF,
        /**
         * Reciprocal of {@link Atk.RelationType.DESCRIPTION_FOR}. Indicates that one
         * or more target objects provide descriptive information about this object. This relation
         * type is most appropriate for information that is not essential as its presentation may
         * be user-configurable and/or limited to an on-demand mechanism such as an assistive
         * technology command. For brief, essential information such as can be found in a widget's
         * on-screen label, use {@link Atk.RelationType.LABELLED_BY}. For an on-screen error message, use
         * {@link Atk.RelationType.ERROR_MESSAGE}. For lengthy extended descriptive information contained in
         * an on-screen object, consider using {@link Atk.RelationType.DETAILS} as assistive technologies may
         * provide a means for the user to navigate to objects containing detailed descriptions so
         * that their content can be more closely reviewed.
         */
        DESCRIBED_BY,
        /**
         * Reciprocal of {@link Atk.RelationType.DESCRIBED_BY}. Indicates that this
         * object provides descriptive information about the target object(s). See also
         * {@link Atk.RelationType.DETAILS_FOR} and {@link Atk.RelationType.ERROR_FOR}.
         */
        DESCRIPTION_FOR,
        /**
         * Indicates an object is a cell in a treetable and is expanded to display other cells in the same column.
         */
        NODE_PARENT_OF,
        /**
         * Reciprocal of {@link Atk.RelationType.DETAILS_FOR}. Indicates that this object has a
         * detailed or extended description, the contents of which can be found in the
         * target object(s). This relation type is most appropriate for information
         * that is sufficiently lengthy as to make navigation to the container of that
         * information desirable. For less verbose information suitable for
         * announcement only, see {@link Atk.RelationType.DESCRIBED_BY}. If the detailed
         * information describes an error condition, {@link Atk.RelationType.ERROR_FOR} should be
         * used instead.
         */
        DETAILS,
        /**
         * Reciprocal of {@link Atk.RelationType.DETAILS}. Indicates that this object provides a
         * detailed or extended description about the target object(s). See also
         * {@link Atk.RelationType.DESCRIPTION_FOR} and {@link Atk.RelationType.ERROR_FOR}.
         */
        DETAILS_FOR,
        /**
         * Reciprocal of {@link Atk.RelationType.ERROR_FOR}. Indicates that this object has one or
         * more errors, the nature of which is described in the contents of the target
         * object(s). Objects that have this relation type should also contain
         * {@link Atk.StateType.INVALID_ENTRY} in their {@link Atk.StateSet}.
         */
        ERROR_MESSAGE,
        /**
         * Reciprocal of {@link Atk.RelationType.ERROR_MESSAGE}. Indicates that this object
         * contains an error message describing an invalid condition in the target
         * object(s).
         */
        ERROR_FOR,
        /**
         * Not used, this value indicates the end of the enumeration.
         */
        LAST_DEFINED,
    }

    /**
     * @gir-type Enum
     */
    export namespace Role {
        export const $gtype: GObject.GType<Role>;
    }

    /**
     * Describes the role of an object
     *
     * These are the built-in enumerated roles that UI components can have
     * in ATK.  Other roles may be added at runtime, so an AtkRole >=
     * {@link Atk.Role.LAST_DEFINED} is not necessarily an error.
     * @gir-type Enum
     */
    enum Role {
        /**
         * Invalid role
         */
        INVALID,
        /**
         * A label which represents an accelerator
         */
        ACCELERATOR_LABEL,
        /**
         * An object which is an alert to the user. Assistive Technologies typically respond to ATK_ROLE_ALERT by reading the entire onscreen contents of containers advertising this role.  Should be used for warning dialogs, etc.
         */
        ALERT,
        /**
         * An object which is an animated image
         */
        ANIMATION,
        /**
         * An arrow in one of the four cardinal directions
         */
        ARROW,
        /**
         * An object that displays a calendar and allows the user to select a date
         */
        CALENDAR,
        /**
         * An object that can be drawn into and is used to trap events
         */
        CANVAS,
        /**
         * A choice that can be checked or unchecked and provides a separate indicator for the current state
         */
        CHECK_BOX,
        /**
         * A menu item with a check box
         */
        CHECK_MENU_ITEM,
        /**
         * A specialized dialog that lets the user choose a color
         */
        COLOR_CHOOSER,
        /**
         * The header for a column of data
         */
        COLUMN_HEADER,
        /**
         * A collapsible list of choices the user can select from
         */
        COMBO_BOX,
        /**
         * An object whose purpose is to allow a user to edit a date
         */
        DATE_EDITOR,
        /**
         * An inconifed internal frame within a DESKTOP_PANE
         */
        DESKTOP_ICON,
        /**
         * A pane that supports internal frames and iconified versions of those internal frames
         */
        DESKTOP_FRAME,
        /**
         * An object whose purpose is to allow a user to set a value
         */
        DIAL,
        /**
         * A top level window with title bar and a border
         */
        DIALOG,
        /**
         * A pane that allows the user to navigate through and select the contents of a directory
         */
        DIRECTORY_PANE,
        /**
         * An object used for drawing custom user interface elements
         */
        DRAWING_AREA,
        /**
         * A specialized dialog that lets the user choose a file
         */
        FILE_CHOOSER,
        /**
         * A object that fills up space in a user interface
         */
        FILLER,
        /**
         * A specialized dialog that lets the user choose a font
         */
        FONT_CHOOSER,
        /**
         * A top level window with a title bar, border, menubar, etc.
         */
        FRAME,
        /**
         * A pane that is guaranteed to be painted on top of all panes beneath it
         */
        GLASS_PANE,
        /**
         * A document container for HTML, whose children represent the document content
         */
        HTML_CONTAINER,
        /**
         * A small fixed size picture, typically used to decorate components
         */
        ICON,
        /**
         * An object whose primary purpose is to display an image
         */
        IMAGE,
        /**
         * A frame-like object that is clipped by a desktop pane
         */
        INTERNAL_FRAME,
        /**
         * An object used to present an icon or short string in an interface
         */
        LABEL,
        /**
         * A specialized pane that allows its children to be drawn in layers, providing a form of stacking order
         */
        LAYERED_PANE,
        /**
         * An object that presents a list of objects to the user and allows the user to select one or more of them
         */
        LIST,
        /**
         * An object that represents an element of a list
         */
        LIST_ITEM,
        /**
         * An object usually found inside a menu bar that contains a list of actions the user can choose from
         */
        MENU,
        /**
         * An object usually drawn at the top of the primary dialog box of an application that contains a list of menus the user can choose from
         */
        MENU_BAR,
        /**
         * An object usually contained in a menu that presents an action the user can choose
         */
        MENU_ITEM,
        /**
         * A specialized pane whose primary use is inside a DIALOG
         */
        OPTION_PANE,
        /**
         * An object that is a child of a page tab list
         */
        PAGE_TAB,
        /**
         * An object that presents a series of panels (or page tabs), one at a time, through some mechanism provided by the object
         */
        PAGE_TAB_LIST,
        /**
         * A generic container that is often used to group objects
         */
        PANEL,
        /**
         * A text object uses for passwords, or other places where the text content is not shown visibly to the user
         */
        PASSWORD_TEXT,
        /**
         * A temporary window that is usually used to offer the user a list of choices, and then hides when the user selects one of those choices
         */
        POPUP_MENU,
        /**
         * An object used to indicate how much of a task has been completed
         */
        PROGRESS_BAR,
        /**
         * An object the user can manipulate to tell the application to do something
         */
        BUTTON,
        /**
         * A specialized check box that will cause other radio buttons in the same group to become unchecked when this one is checked
         */
        RADIO_BUTTON,
        /**
         * A check menu item which belongs to a group. At each instant exactly one of the radio menu items from a group is selected
         */
        RADIO_MENU_ITEM,
        /**
         * A specialized pane that has a glass pane and a layered pane as its children
         */
        ROOT_PANE,
        /**
         * The header for a row of data
         */
        ROW_HEADER,
        /**
         * An object usually used to allow a user to incrementally view a large amount of data.
         */
        SCROLL_BAR,
        /**
         * An object that allows a user to incrementally view a large amount of information
         */
        SCROLL_PANE,
        /**
         * An object usually contained in a menu to provide a visible and logical separation of the contents in a menu
         */
        SEPARATOR,
        /**
         * An object that allows the user to select from a bounded range
         */
        SLIDER,
        /**
         * A specialized panel that presents two other panels at the same time
         */
        SPLIT_PANE,
        /**
         * An object used to get an integer or floating point number from the user
         */
        SPIN_BUTTON,
        /**
         * An object which reports messages of minor importance to the user
         */
        STATUSBAR,
        /**
         * An object used to represent information in terms of rows and columns
         */
        TABLE,
        /**
         * A cell in a table
         */
        TABLE_CELL,
        /**
         * The header for a column of a table
         */
        TABLE_COLUMN_HEADER,
        /**
         * The header for a row of a table
         */
        TABLE_ROW_HEADER,
        /**
         * A menu item used to tear off and reattach its menu
         */
        TEAR_OFF_MENU_ITEM,
        /**
         * An object that represents an accessible terminal.
         */
        TERMINAL,
        /**
         * An interactive widget that supports multiple lines of text and
         * optionally accepts user input, but whose purpose is not to solicit user input.
         * Thus ATK_ROLE_TEXT is appropriate for the text view in a plain text editor
         * but inappropriate for an input field in a dialog box or web form. For widgets
         * whose purpose is to solicit input from the user, see ATK_ROLE_ENTRY and
         * ATK_ROLE_PASSWORD_TEXT. For generic objects which display a brief amount of
         * textual information, see ATK_ROLE_STATIC.
         */
        TEXT,
        /**
         * A specialized push button that can be checked or unchecked, but does not provide a separate indicator for the current state
         */
        TOGGLE_BUTTON,
        /**
         * A bar or palette usually composed of push buttons or toggle buttons
         */
        TOOL_BAR,
        /**
         * An object that provides information about another object
         */
        TOOL_TIP,
        /**
         * An object used to represent hierarchical information to the user
         */
        TREE,
        /**
         * An object capable of expanding and collapsing rows as well as showing
         * multiple columns of data.
         */
        TREE_TABLE,
        /**
         * The object contains some Accessible information, but its role is not known
         */
        UNKNOWN,
        /**
         * An object usually used in a scroll pane
         */
        VIEWPORT,
        /**
         * A top level window with no title or border.
         */
        WINDOW,
        /**
         * An object that serves as a document header.
         */
        HEADER,
        /**
         * An object that serves as a document footer.
         */
        FOOTER,
        /**
         * An object which contains a paragraph of text content.
         */
        PARAGRAPH,
        /**
         * An object which describes margins and tab stops, etc. for text objects
         * which it controls (should have CONTROLLER_FOR relation to such).
         */
        RULER,
        /**
         * The object is an application object, which may contain `ATK_ROLE_FRAME`
         * objects or other types of accessibles.  The root accessible of any
         * application's ATK hierarchy should have ATK_ROLE_APPLICATION.
         */
        APPLICATION,
        /**
         * The object is a dialog or list containing items for insertion into an entry
         * widget, for instance a list of words for completion of a text entry.
         */
        AUTOCOMPLETE,
        /**
         * The object is an editable text object in a toolbar.
         */
        EDIT_BAR,
        /**
         * The object is an embedded container within a document or panel.  This role
         * is a grouping "hint" indicating that the contained objects share a context.
         */
        EMBEDDED,
        /**
         * The object is a component whose textual content may be entered or modified
         * by the user, provided `ATK_STATE_EDITABLE` is present.
         */
        ENTRY,
        /**
         * The object is a graphical depiction of quantitative data. It may contain
         * multiple subelements whose attributes and/or description may be queried to
         * obtain both the quantitative data and information about how the data is
         * being presented. The LABELLED_BY relation is particularly important in
         * interpreting objects of this type, as is the accessible-description
         * property.
         */
        CHART,
        /**
         * The object contains descriptive information, usually textual, about another
         * user interface element such as a table, chart, or image.
         */
        CAPTION,
        /**
         * The object is a visual frame or container which contains a view of document
         * content. Document frames may occur within another Document instance, in
         * which case the second document may be said to be embedded in the containing
         * instance. HTML frames are often ROLE_DOCUMENT_FRAME. Either this object, or
         * a singleton descendant, should implement the Document interface.
         */
        DOCUMENT_FRAME,
        /**
         * The object serves as a heading for content which follows it in a document. The 'heading level' of the heading, if available, may be obtained by querying the object's attributes.
         */
        HEADING,
        /**
         * The object is a containing instance which encapsulates a page of
         * information. `ATK_ROLE_PAGE` is used in documents and content which support a
         * paginated navigation model.
         */
        PAGE,
        /**
         * The object is a containing instance of document content which constitutes a
         * particular 'logical' section of the document. The type of content within a
         * section, and the nature of the section division itself, may be obtained by
         * querying the object's attributes. Sections may be nested.
         */
        SECTION,
        /**
         * The object is redundant with another object in the hierarchy, and is
         * exposed for purely technical reasons.  Objects of this role should normally
         * be ignored by clients.
         */
        REDUNDANT_OBJECT,
        /**
         * The object is a container for form controls, for instance as part of a web
         * form or user-input form within a document.  This role is primarily a
         * tag/convenience for clients when navigating complex documents, it is not
         * expected that ordinary GUI containers will always have ATK_ROLE_FORM.
         */
        FORM,
        /**
         * The object is a hypertext anchor, i.e. a "link" in a hypertext document.
         * Such objects are distinct from 'inline' content which may also use the
         * Hypertext/Hyperlink interfaces to indicate the range/location within a text
         * object where an inline or embedded object lies.
         */
        LINK,
        /**
         * The object is a window or similar viewport which is used to allow
         * composition or input of a 'complex character', in other words it is an
         * "input method window."
         */
        INPUT_METHOD_WINDOW,
        /**
         * A row in a table.
         */
        TABLE_ROW,
        /**
         * An object that represents an element of a tree.
         */
        TREE_ITEM,
        /**
         * A document frame which contains a spreadsheet.
         */
        DOCUMENT_SPREADSHEET,
        /**
         * A document frame which contains a presentation or slide content.
         */
        DOCUMENT_PRESENTATION,
        /**
         * A document frame which contains textual content, such as found in a word
         * processing application.
         */
        DOCUMENT_TEXT,
        /**
         * A document frame which contains HTML or other markup suitable for display
         * in a web browser.
         */
        DOCUMENT_WEB,
        /**
         * A document frame which contains email content to be displayed or composed
         * either in plain text or HTML.
         */
        DOCUMENT_EMAIL,
        /**
         * An object found within a document and designed to present a comment, note,
         * or other annotation. In some cases, this object might not be visible until
         * activated.
         */
        COMMENT,
        /**
         * A non-collapsible list of choices the user can select from.
         */
        LIST_BOX,
        /**
         * A group of related widgets. This group typically has a label.
         */
        GROUPING,
        /**
         * An image map object. Usually a graphic with multiple hotspots, where
         * each hotspot can be activated resulting in the loading of another
         * document or section of a document.
         */
        IMAGE_MAP,
        /**
         * A transitory object designed to present a message to the user, typically
         * at the desktop level rather than inside a particular application.
         */
        NOTIFICATION,
        /**
         * An object designed to present a message to the user within an existing
         * window.
         */
        INFO_BAR,
        /**
         * A bar that serves as a level indicator to, for instance, show the strength of a
         * password or the state of a battery.
         */
        LEVEL_BAR,
        /**
         * A bar that serves as the title of a window or a dialog.
         */
        TITLE_BAR,
        /**
         * An object which contains a text section that is quoted from another source.
         */
        BLOCK_QUOTE,
        /**
         * An object which represents an audio element.
         */
        AUDIO,
        /**
         * An object which represents a video element.
         */
        VIDEO,
        /**
         * A definition of a term or concept.
         */
        DEFINITION,
        /**
         * A section of a page that consists of a composition that forms an independent
         * part of a document, page, or site. Examples: A blog entry, a news story,
         * a forum post.
         */
        ARTICLE,
        /**
         * A region of a web page intended as a * navigational landmark. This is
         * designed to allow Assistive Technologies to provide quick navigation
         * among key regions within a * document.
         */
        LANDMARK,
        /**
         * A text widget or container holding log content, such as chat history
         * and error logs. In this role there is a relationship between the arrival
         * of new items in the log and the reading order. The log contains a
         * meaningful sequence and new information is added only to the end of
         * the log, not at arbitrary points.
         */
        LOG,
        /**
         * A container where non-essential information changes frequently. Common
         * usages of marquee include stock tickers * and ad banners. The primary
         * difference between a marquee and a log is that logs usually have a
         * meaningful order or sequence of important content changes.
         */
        MARQUEE,
        /**
         * A text widget or container that holds a mathematical expression.
         */
        MATH,
        /**
         * A widget whose purpose is to display a rating, such as the number of
         * stars associated with a song in a media player. Objects of this role should
         * also implement AtkValue.
         */
        RATING,
        /**
         * An object containing a numerical counter which indicates an amount of
         * elapsed time from a start point, or the time remaining until an end point.
         */
        TIMER,
        /**
         * An object that represents a list of term-value groups. A term-value group
         * represents an individual description and consist of one or more names
         * (ATK_ROLE_DESCRIPTION_TERM) followed by one or more values
         * (ATK_ROLE_DESCRIPTION_VALUE). For each list, there should not be
         * more than one group with the same term name.
         */
        DESCRIPTION_LIST,
        /**
         * An object that represents a term or phrase with a corresponding definition.
         */
        DESCRIPTION_TERM,
        /**
         * An object that represents the description, definition or value of a term.
         */
        DESCRIPTION_VALUE,
        /**
         * A generic non-container object whose purpose is to display a brief
         * amount of information to the user and whose role is known by the
         * implementor but lacks semantic value for the user. Examples in which
         * {@link Atk.Role.STATIC} is appropriate include the message displayed in a message box
         * and an image used as an alternative means to display text. {@link Atk.Role.STATIC}
         * should not be applied to widgets which are traditionally interactive, objects
         * which display a significant amount of content, or any object which has an
         * accessible relation pointing to another object. Implementors should expose the
         * displayed information through the accessible name of the object. If doing so seems
         * inappropriate, it may indicate that a different role should be used. For
         * labels which describe another widget, see {@link Atk.Role.LABEL}. For text views, see
         * {@link Atk.Role.TEXT}. For generic containers, see {@link Atk.Role.PANEL}. For objects whose
         * role is not known by the implementor, see {@link Atk.Role.UNKNOWN}.
         */
        STATIC,
        /**
         * An object that represents a mathematical fraction.
         */
        MATH_FRACTION,
        /**
         * An object that represents a mathematical expression displayed with a
         * radical.
         */
        MATH_ROOT,
        /**
         * An object that contains text that is displayed as a subscript.
         */
        SUBSCRIPT,
        /**
         * An object that contains text that is displayed as a superscript.
         */
        SUPERSCRIPT,
        /**
         * An object that contains the text of a footnote.
         */
        FOOTNOTE,
        /**
         * Content previously deleted or proposed to be deleted, e.g. in revision
         * history or a content view providing suggestions from reviewers.
         */
        CONTENT_DELETION,
        /**
         * Content previously inserted or proposed to be inserted, e.g. in revision
         * history or a content view providing suggestions from reviewers.
         */
        CONTENT_INSERTION,
        /**
         * A run of content that is marked or highlighted, such as for reference
         *  purposes, or to call it out as having a special purpose. If the marked
         * content has an associated section in the document elaborating on the
         * reason for the mark, then {@link Atk.RelationType.DETAILS} should be used on the mark
         * to point to that associated section. In addition, the reciprocal relation
         * {@link Atk.RelationType.DETAILS_FOR} should be used on the associated content section
         * to point back to the mark.
         */
        MARK,
        /**
         * A container for content that is called out as a proposed change from
         * the current version of the document, such as by a reviewer of the
         * content. This role should include either {@link Atk.Role.CONTENT_DELETION} and/or
         * {@link Atk.Role.CONTENT_INSERTION} children, in any order, to indicate what the
         * actual change is.
         */
        SUGGESTION,
        /**
         * A specialized push button to open a menu.
         */
        PUSH_BUTTON_MENU,
        /**
         * A switch that can be toggled on/off.
         */
        SWITCH,
        /**
         * not a valid role, used for finding end of the enumeration
         */
        LAST_DEFINED,
        PUSH_BUTTON,
    }

    /**
     * @gir-type Enum
     */
    export namespace ScrollType {
        export const $gtype: GObject.GType<ScrollType>;
    }

    /**
     * Specifies where an object should be placed on the screen when using scroll_to.
     * @gir-type Enum
     * @since 2.30
     */
    enum ScrollType {
        /**
         * Scroll the object vertically and horizontally to bring
         *   its top left corner to the top left corner of the window.
         */
        TOP_LEFT,
        /**
         * Scroll the object vertically and horizontally to
         *   bring its bottom right corner to the bottom right corner of the window.
         */
        BOTTOM_RIGHT,
        /**
         * Scroll the object vertically to bring its top edge to
         *   the top edge of the window.
         */
        TOP_EDGE,
        /**
         * Scroll the object vertically to bring its bottom
         *   edge to the bottom edge of the window.
         */
        BOTTOM_EDGE,
        /**
         * Scroll the object vertically and horizontally to bring
         *   its left edge to the left edge of the window.
         */
        LEFT_EDGE,
        /**
         * Scroll the object vertically and horizontally to
         *   bring its right edge to the right edge of the window.
         */
        RIGHT_EDGE,
        /**
         * Scroll the object vertically and horizontally so that
         *   as much as possible of the object becomes visible. The exact placement is
         *   determined by the application.
         */
        ANYWHERE,
    }

    /**
     * @gir-type Enum
     */
    export namespace StateType {
        export const $gtype: GObject.GType<StateType>;
    }

    /**
     * The possible types of states of an object
     * @gir-type Enum
     */
    enum StateType {
        /**
         * Indicates an invalid state - probably an error condition.
         */
        INVALID,
        /**
         * Indicates a window is currently the active window, or an object is the active subelement within a container or table. ATK_STATE_ACTIVE should not be used for objects which have ATK_STATE_FOCUSABLE or ATK_STATE_SELECTABLE: Those objects should use ATK_STATE_FOCUSED and ATK_STATE_SELECTED respectively. ATK_STATE_ACTIVE is a means to indicate that an object which is not focusable and not selectable is the currently-active item within its parent container.
         */
        ACTIVE,
        /**
         * Indicates that the object is 'armed', i.e. will be activated by if a pointer button-release event occurs within its bounds.  Buttons often enter this state when a pointer click occurs within their bounds, as a precursor to activation. ATK_STATE_ARMED has been deprecated since ATK-2.16 and should not be used in newly-written code.
         */
        ARMED,
        /**
         * Indicates the current object is busy, i.e. onscreen representation is in the process of changing, or the object is temporarily unavailable for interaction due to activity already in progress.  This state may be used by implementors of Document to indicate that content loading is underway.  It also may indicate other 'pending' conditions; clients may wish to interrogate this object when the ATK_STATE_BUSY flag is removed.
         */
        BUSY,
        /**
         * Indicates this object is currently checked, for instance a checkbox is 'non-empty'.
         */
        CHECKED,
        /**
         * Indicates that this object no longer has a valid backing widget (for instance, if its peer object has been destroyed)
         */
        DEFUNCT,
        /**
         * Indicates that this object can contain text, and that the
         * user can change the textual contents of this object by editing those contents
         * directly. For an object which is expected to be editable due to its type, but
         * which cannot be edited due to the application or platform preventing the user
         * from doing so, that object's {@link Atk.StateSet} should lack ATK_STATE_EDITABLE and
         * should contain ATK_STATE_READ_ONLY.
         */
        EDITABLE,
        /**
         * Indicates that this object is enabled, i.e. that it currently reflects some application state. Objects that are "greyed out" may lack this state, and may lack the STATE_SENSITIVE if direct user interaction cannot cause them to acquire STATE_ENABLED. See also: ATK_STATE_SENSITIVE
         */
        ENABLED,
        /**
         * Indicates this object allows progressive disclosure of its children
         */
        EXPANDABLE,
        /**
         * Indicates this object its expanded - see ATK_STATE_EXPANDABLE above
         */
        EXPANDED,
        /**
         * Indicates this object can accept keyboard focus, which means all events resulting from typing on the keyboard will normally be passed to it when it has focus
         */
        FOCUSABLE,
        /**
         * Indicates this object currently has the keyboard focus
         */
        FOCUSED,
        /**
         * Indicates the orientation of this object is horizontal; used, for instance, by objects of ATK_ROLE_SCROLL_BAR.  For objects where vertical/horizontal orientation is especially meaningful.
         */
        HORIZONTAL,
        /**
         * Indicates this object is minimized and is represented only by an icon
         */
        ICONIFIED,
        /**
         * Indicates something must be done with this object before the user can interact with an object in a different window
         */
        MODAL,
        /**
         * Indicates this (text) object can contain multiple lines of text
         */
        MULTI_LINE,
        /**
         * Indicates this object allows more than one of its children to be selected at the same time, or in the case of text objects, that the object supports non-contiguous text selections.
         */
        MULTISELECTABLE,
        /**
         * Indicates this object paints every pixel within its rectangular region.
         */
        OPAQUE,
        /**
         * Indicates this object is currently pressed.
         */
        PRESSED,
        /**
         * Indicates the size of this object is not fixed
         */
        RESIZABLE,
        /**
         * Indicates this object is the child of an object that allows its children to be selected and that this child is one of those children that can be selected
         */
        SELECTABLE,
        /**
         * Indicates this object is the child of an object that allows its children to be selected and that this child is one of those children that has been selected
         */
        SELECTED,
        /**
         * Indicates this object is sensitive, e.g. to user interaction.
         * STATE_SENSITIVE usually accompanies STATE_ENABLED for user-actionable controls,
         * but may be found in the absence of STATE_ENABLED if the current visible state of the
         * control is "disconnected" from the application state.  In such cases, direct user interaction
         * can often result in the object gaining STATE_SENSITIVE, for instance if a user makes
         * an explicit selection using an object whose current state is ambiguous or undefined.
         * `see` STATE_ENABLED, STATE_INDETERMINATE.
         */
        SENSITIVE,
        /**
         * Indicates this object, the object's parent, the object's parent's parent, and so on,
         * are all 'shown' to the end-user, i.e. subject to "exposure" if blocking or obscuring objects do not interpose
         * between this object and the top of the window stack.
         */
        SHOWING,
        /**
         * Indicates this (text) object can contain only a single line of text
         */
        SINGLE_LINE,
        /**
         * Indicates that the information returned for this object may no longer be
         * synchronized with the application state.  This is implied if the object has STATE_TRANSIENT,
         * and can also occur towards the end of the object peer's lifecycle. It can also be used to indicate that
         * the index associated with this object has changed since the user accessed the object (in lieu of
         * "index-in-parent-changed" events).
         */
        STALE,
        /**
         * Indicates this object is transient, i.e. a snapshot which may not emit events when its
         * state changes.  Data from objects with ATK_STATE_TRANSIENT should not be cached, since there may be no
         * notification given when the cached data becomes obsolete.
         */
        TRANSIENT,
        /**
         * Indicates the orientation of this object is vertical
         */
        VERTICAL,
        /**
         * Indicates this object is visible, e.g. has been explicitly marked for exposure to the user.
         * **note**: {@link Atk.StateType.VISIBLE} is no guarantee that the object is actually unobscured on the screen, only
         * that it is 'potentially' visible, barring obstruction, being scrolled or clipped out of the
         * field of view, or having an ancestor container that has not yet made visible.
         * A widget is potentially onscreen if it has both {@link Atk.StateType.VISIBLE} and {@link Atk.StateType.SHOWING}.
         * The absence of {@link Atk.StateType.VISIBLE} and {@link Atk.StateType.SHOWING} is semantically equivalent to saying
         * that an object is 'hidden'.  See also {@link Atk.StateType.TRUNCATED}, which applies if an object with
         * {@link Atk.StateType.VISIBLE} and {@link Atk.StateType.SHOWING} set lies within a viewport which means that its
         * contents are clipped, e.g. a truncated spreadsheet cell or
         * an image within a scrolling viewport.  Mostly useful for screen-review and magnification
         * algorithms.
         */
        VISIBLE,
        /**
         * Indicates that "active-descendant-changed" event
         * is sent when children become 'active' (i.e. are selected or navigated to onscreen).
         * Used to prevent need to enumerate all children in very large containers, like tables.
         * The presence of STATE_MANAGES_DESCENDANTS is an indication to the client.
         * that the children should not, and need not, be enumerated by the client.
         * Objects implementing this state are expected to provide relevant state
         * notifications to listening clients, for instance notifications of visibility
         * changes and activation of their contained child objects, without the client
         * having previously requested references to those children.
         */
        MANAGES_DESCENDANTS,
        /**
         * Indicates that the value, or some other quantifiable
         * property, of this AtkObject cannot be fully determined. In the case of a large
         * data set in which the total number of items in that set is unknown (e.g. 1 of
         * 999+), implementors should expose the currently-known set size (999) along
         * with this state. In the case of a check box, this state should be used to
         * indicate that the check box is a tri-state check box which is currently
         * neither checked nor unchecked.
         */
        INDETERMINATE,
        /**
         * Indicates that an object is truncated, e.g. a text value in a speradsheet cell.
         */
        TRUNCATED,
        /**
         * Indicates that explicit user interaction with an object is required by the user interface, e.g. a required field in a "web-form" interface.
         */
        REQUIRED,
        /**
         * Indicates that the object has encountered an error condition due to failure of input validation. For instance, a form control may acquire this state in response to invalid or malformed user input.
         */
        INVALID_ENTRY,
        /**
         * Indicates that the object in question implements some form of ¨typeahead¨ or
         * pre-selection behavior whereby entering the first character of one or more sub-elements
         * causes those elements to scroll into view or become selected.  Subsequent character input
         * may narrow the selection further as long as one or more sub-elements match the string.
         * This state is normally only useful and encountered on objects that implement Selection.
         * In some cases the typeahead behavior may result in full or partial ¨completion¨ of
         * the data in the input field, in which case these input events may trigger text-changed
         * events from the AtkText interface.  This state supplants `ATK_ROLE_AUTOCOMPLETE`.
         */
        SUPPORTS_AUTOCOMPLETION,
        /**
         * Indicates that the object in question supports text selection. It should only be exposed on objects which implement the Text interface, in order to distinguish this state from `ATK_STATE_SELECTABLE`, which infers that the object in question is a selectable child of an object which implements Selection. While similar, text selection and subelement selection are distinct operations.
         */
        SELECTABLE_TEXT,
        /**
         * Indicates that the object is the "default" active component, i.e. the object which is activated by an end-user press of the "Enter" or "Return" key.  Typically a "close" or "submit" button.
         */
        DEFAULT,
        /**
         * Indicates that the object changes its appearance dynamically as an inherent part of its presentation.  This state may come and go if an object is only temporarily animated on the way to a 'final' onscreen presentation.
         * **note**: some applications, notably content viewers, may not be able to detect
         * all kinds of animated content.  Therefore the absence of this state should not
         * be taken as definitive evidence that the object's visual representation is
         * static; this state is advisory.
         */
        ANIMATED,
        /**
         * Indicates that the object (typically a hyperlink) has already been 'activated', and/or its backing data has already been downloaded, rendered, or otherwise "visited".
         */
        VISITED,
        /**
         * Indicates this object has the potential to be  checked, such as a checkbox
         * or toggle-able table cell.
         */
        CHECKABLE,
        /**
         * Indicates that the object has a popup context menu or sub-level menu which
         * may or may not be showing. This means that activation renders conditional
         * content.  Note that ordinary tooltips are not considered popups in this
         * context.
         */
        HAS_POPUP,
        /**
         * Indicates this object has a tooltip.
         */
        HAS_TOOLTIP,
        /**
         * Indicates that a widget which is ENABLED and SENSITIVE has a value which
         * can be read, but not modified, by the user. Note that this state should only
         * be applied to widget types whose value is normally directly user modifiable,
         * such as check boxes, radio buttons, spin buttons, text input fields, and
         * combo boxes, as a means to convey that the expected interaction with that
         * widget is not possible. When the expected interaction with a widget does not
         * include modification by the user, as is the case with labels and containers,
         * ATK_STATE_READ_ONLY should not be applied. See also ATK_STATE_EDITABLE.
         */
        READ_ONLY,
        /**
         * Indicates this object is collapsed.
         */
        COLLAPSED,
        /**
         * Not a valid state, used for finding end of enumeration
         */
        LAST_DEFINED,
    }

    /**
     * @gir-type Enum
     */
    export namespace TextAttribute {
        export const $gtype: GObject.GType<TextAttribute>;
    }

    /**
     * Describes the text attributes supported
     * @gir-type Enum
     */
    enum TextAttribute {
        /**
         * Invalid attribute, like bad spelling or grammar.
         */
        INVALID,
        /**
         * The pixel width of the left margin
         */
        LEFT_MARGIN,
        /**
         * The pixel width of the right margin
         */
        RIGHT_MARGIN,
        /**
         * The number of pixels that the text is indented
         */
        INDENT,
        /**
         * Either "true" or "false" indicating whether text is visible or not.
         */
        INVISIBLE,
        /**
         * Either "true" or "false" indicating whether text is editable or not.
         */
        EDITABLE,
        /**
         * Pixels of blank space to leave above each newline-terminated line.
         */
        PIXELS_ABOVE_LINES,
        /**
         * Pixels of blank space to leave below each newline-terminated line.
         */
        PIXELS_BELOW_LINES,
        /**
         * Pixels of blank space to leave between wrapped lines inside the same newline-terminated line (paragraph).
         */
        PIXELS_INSIDE_WRAP,
        /**
         * "true" or "false" whether to make the background color for each character the height of the highest font used on the current line, or the height of the font used for the current character.
         */
        BG_FULL_HEIGHT,
        /**
         * Number of pixels that the characters are risen above the baseline. See also ATK_TEXT_ATTR_TEXT_POSITION.
         */
        RISE,
        /**
         * "none", "single", "double", "low", or "error"
         */
        UNDERLINE,
        /**
         * "true" or "false" whether the text is strikethrough
         */
        STRIKETHROUGH,
        /**
         * The size of the characters in points. eg: 10
         */
        SIZE,
        /**
         * The scale of the characters. The value is a string representation of a double
         */
        SCALE,
        /**
         * The weight of the characters.
         */
        WEIGHT,
        /**
         * The language used
         */
        LANGUAGE,
        /**
         * The font family name
         */
        FAMILY_NAME,
        /**
         * The background color. The value is an RGB value of the format "%u,%u,%u"
         */
        BG_COLOR,
        /**
         * The foreground color. The value is an RGB value of the format "%u,%u,%u"
         */
        FG_COLOR,
        /**
         * "true" if a `GdkBitmap` is set for stippling the background color.
         */
        BG_STIPPLE,
        /**
         * "true" if a `GdkBitmap` is set for stippling the foreground color.
         */
        FG_STIPPLE,
        /**
         * The wrap mode of the text, if any. Values are "none", "char", "word", or "word_char".
         */
        WRAP_MODE,
        /**
         * The direction of the text, if set. Values are "none", "ltr" or "rtl"
         */
        DIRECTION,
        /**
         * The justification of the text, if set. Values are "left", "right", "center" or "fill"
         */
        JUSTIFICATION,
        /**
         * The stretch of the text, if set. Values are "ultra_condensed", "extra_condensed", "condensed", "semi_condensed", "normal", "semi_expanded", "expanded", "extra_expanded" or "ultra_expanded"
         */
        STRETCH,
        /**
         * The capitalization variant of the text, if set. Values are "normal" or "small_caps"
         */
        VARIANT,
        /**
         * The slant style of the text, if set. Values are "normal", "oblique" or "italic"
         */
        STYLE,
        /**
         * The vertical position with respect to the baseline. Values are "baseline", "super", or "sub". Note that a super or sub text attribute refers to position with respect to the baseline of the prior character.
         */
        TEXT_POSITION,
        /**
         * A run of content that is marked or highlighted, such as for reference
         * purposes, or to call it out as having a special purpose that is clear from
         * context. This is similar to ATK_ROLE_MARK, but this is used where it may
         * apply to a partial span of text in an object, rather than to an entire
         * object. Values are "true" or "false".
         */
        MARK,
        /**
         * not a valid text attribute, used for finding end of enumeration
         */
        LAST_DEFINED,
    }

    /**
     * @gir-type Enum
     */
    export namespace TextBoundary {
        export const $gtype: GObject.GType<TextBoundary>;
    }

    /**
     * Text boundary types used for specifying boundaries for regions of text.
     * This enumeration is deprecated since 2.9.4 and should not be used. Use
     * AtkTextGranularity with `atk_text_get_string_at_offset` instead.
     * @gir-type Enum
     */
    enum TextBoundary {
        /**
         * Boundary is the boundary between characters
         * (including non-printing characters)
         */
        CHAR,
        /**
         * Boundary is the start (i.e. first character) of a word.
         */
        WORD_START,
        /**
         * Boundary is the end (i.e. last
         * character) of a word.
         */
        WORD_END,
        /**
         * Boundary is the first character in a sentence.
         */
        SENTENCE_START,
        /**
         * Boundary is the last (terminal)
         * character in a sentence; in languages which use "sentence stop"
         * punctuation such as English, the boundary is thus the '.', '?', or
         * similar terminal punctuation character.
         */
        SENTENCE_END,
        /**
         * Boundary is the initial character of the content or a
         * character immediately following a newline, linefeed, or return character.
         */
        LINE_START,
        /**
         * Boundary is the linefeed, or return
         * character.
         */
        LINE_END,
    }

    /**
     * @gir-type Enum
     */
    export namespace TextClipType {
        export const $gtype: GObject.GType<TextClipType>;
    }

    /**
     * Describes the type of clipping required.
     * @gir-type Enum
     */
    enum TextClipType {
        /**
         * No clipping to be done
         */
        NONE,
        /**
         * Text clipped by min coordinate is omitted
         */
        MIN,
        /**
         * Text clipped by max coordinate is omitted
         */
        MAX,
        /**
         * Only text fully within mix/max bound is retained
         */
        BOTH,
    }

    /**
     * @gir-type Enum
     */
    export namespace TextGranularity {
        export const $gtype: GObject.GType<TextGranularity>;
    }

    /**
     * Text granularity types used for specifying the granularity of the region of
     * text we are interested in.
     * @gir-type Enum
     */
    enum TextGranularity {
        /**
         * Granularity is defined by the boundaries between characters
         * (including non-printing characters)
         */
        CHAR,
        /**
         * Granularity is defined by the boundaries of a word,
         * starting at the beginning of the current word and finishing at the beginning of
         * the following one, if present.
         */
        WORD,
        /**
         * Granularity is defined by the boundaries of a sentence,
         * starting at the beginning of the current sentence and finishing at the beginning of
         * the following one, if present.
         */
        SENTENCE,
        /**
         * Granularity is defined by the boundaries of a line,
         * starting at the beginning of the current line and finishing at the beginning of
         * the following one, if present.
         */
        LINE,
        /**
         * Granularity is defined by the boundaries of a paragraph,
         * starting at the beginning of the current paragraph and finishing at the beginning of
         * the following one, if present.
         */
        PARAGRAPH,
    }

    /**
     * @gir-type Enum
     */
    export namespace ValueType {
        export const $gtype: GObject.GType<ValueType>;
    }

    /**
     * Default types for a given value. Those are defined in order to
     * easily get localized strings to describe a given value or a given
     * subrange, using `atk_value_type_get_localized_name()`.
     * @gir-type Enum
     */
    enum ValueType {
        VERY_WEAK,
        WEAK,
        ACCEPTABLE,
        STRONG,
        VERY_STRONG,
        VERY_LOW,
        LOW,
        MEDIUM,
        HIGH,
        VERY_HIGH,
        VERY_BAD,
        BAD,
        GOOD,
        VERY_GOOD,
        BEST,
        LAST_DEFINED,
    }

    /**
     * Like `atk_get_binary_age()`, but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     * @since 2.7.4
     */
    const BINARY_AGE: number;
    /**
     * Like `atk_get_interface_age()`, but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     * @since 2.7.4
     */
    const INTERFACE_AGE: number;
    /**
     * Like `atk_get_major_version()`, but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     * @since 2.7.4
     */
    const MAJOR_VERSION: number;
    /**
     * Like `atk_get_micro_version()`, but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     * @since 2.7.4
     */
    const MICRO_VERSION: number;
    /**
     * Like `atk_get_minor_version()`, but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     * @since 2.7.4
     */
    const MINOR_VERSION: number;
    /**
     * A macro that should be defined by the user prior to including
     * the atk/atk.h header.
     * The definition should be one of the predefined ATK version
     * macros: `ATK_VERSION_2_12`, `ATK_VERSION_2_14`,...
     *
     * This macro defines the earliest version of ATK that the package is
     * required to be able to compile against.
     *
     * If the compiler is configured to warn about the use of deprecated
     * functions, then using functions that were deprecated in version
     * `ATK_VERSION_MIN_REQUIRED` or earlier will cause warnings (but
     * using functions deprecated in later releases will not).
     * @since 2.14
     */
    const VERSION_MIN_REQUIRED: number;
    /**
     * Frees the memory used by an {@link Atk.AttributeSet}, including all its
     * `AtkAttributes`.
     * @param attrib_set The {@link Atk.AttributeSet} to free
     */
    function attribute_set_free(attrib_set: AttributeSet): void;
    /**
     * Cause the focus tracker functions which have been specified to be
     * executed for the object.
     * @param object an {@link Atk.Object}
     * @deprecated since 2.9.4: Focus tracking has been dropped as a feature to be implemented by ATK itself. As {@link Atk.Object.SignalSignatures.focus_event | Atk.Object::focus-event} was deprecated in favor of a {@link Atk.Object.SignalSignatures.state_change | Atk.Object::state-change} signal, in order to notify a focus change on your implementation, you can use `atk_object_notify_state_change()` instead.
     */
    function focus_tracker_notify(object: Object): void;
    /**
     * Returns the binary age as passed to libtool when building the ATK
     * library the process is running against.
     * @returns the binary age of the ATK library
     * @since 2.8
     */
    function get_binary_age(): number;
    /**
     * Gets a default implementation of the {@link Atk.ObjectFactory}/type
     * registry.
     * Note: For most toolkit maintainers, this will be the correct
     * registry for registering new {@link Atk.Object} factories. Following
     * a call to this function, maintainers may call `atk_registry_set_factory_type()`
     * to associate an {@link Atk.ObjectFactory} subclass with the GType of objects
     * for whom accessibility information will be provided.
     * @returns a default implementation of the {@link Atk.ObjectFactory}/type registry
     */
    function get_default_registry(): Registry;
    /**
     * Gets the currently focused object.
     * @returns the currently focused object for the current application
     * @since 1.6
     */
    function get_focus_object(): Object;
    /**
     * Returns the interface age as passed to libtool when building the
     * ATK library the process is running against.
     * @returns the interface age of the ATK library
     * @since 2.8
     */
    function get_interface_age(): number;
    /**
     * Returns the major version number of the ATK library.  (e.g. in ATK
     * version 2.7.4 this is 2.)
     *
     * This function is in the library, so it represents the ATK library
     * your code is running against. In contrast, the #ATK_MAJOR_VERSION
     * macro represents the major version of the ATK headers you have
     * included when compiling your code.
     * @returns the major version number of the ATK library
     * @since 2.8
     */
    function get_major_version(): number;
    /**
     * Returns the micro version number of the ATK library.  (e.g. in ATK
     * version 2.7.4 this is 4.)
     *
     * This function is in the library, so it represents the ATK library
     * your code is are running against. In contrast, the
     * #ATK_MICRO_VERSION macro represents the micro version of the ATK
     * headers you have included when compiling your code.
     * @returns the micro version number of the ATK library
     * @since 2.8
     */
    function get_micro_version(): number;
    /**
     * Returns the minor version number of the ATK library.  (e.g. in ATK
     * version 2.7.4 this is 7.)
     *
     * This function is in the library, so it represents the ATK library
     * your code is are running against. In contrast, the
     * #ATK_MINOR_VERSION macro represents the minor version of the ATK
     * headers you have included when compiling your code.
     * @returns the minor version number of the ATK library
     * @since 2.8
     */
    function get_minor_version(): number;
    /**
     * Gets the root accessible container for the current application.
     * @returns the root accessible container for the current application
     */
    function get_root(): Object;
    /**
     * Gets name string for the GUI toolkit implementing ATK for this application.
     * @returns name string for the GUI toolkit implementing ATK for this application
     */
    function get_toolkit_name(): string;
    /**
     * Gets version string for the GUI toolkit implementing ATK for this application.
     * @returns version string for the GUI toolkit implementing ATK for this application
     */
    function get_toolkit_version(): string;
    /**
     * Gets the current version for ATK.
     * @returns version string for ATK
     * @since 1.20
     */
    function get_version(): string;
    /**
     * Get the {@link Atk.RelationType} type corresponding to a relation name.
     * @param name a string which is the (non-localized) name of an ATK relation type.
     * @returns the {@link Atk.RelationType} enumerated type corresponding to the specified name,          or #ATK_RELATION_NULL if no matching relation type is found.
     */
    function relation_type_for_name(name: string): RelationType;
    /**
     * Gets the description string describing the {@link Atk.RelationType} `type`.
     * @param type The {@link Atk.RelationType} whose name is required
     * @returns the string describing the AtkRelationType
     */
    function relation_type_get_name(type: RelationType | null): string;
    /**
     * Associate `name` with a new {@link Atk.RelationType}
     * @param name a name string
     * @returns an {@link Atk.RelationType} associated with `name`
     */
    function relation_type_register(name: string): RelationType;
    /**
     * Removes the specified focus tracker from the list of functions
     * to be called when any object receives focus.
     * @param tracker_id the id of the focus tracker to remove
     * @deprecated since 2.9.4: Focus tracking has been dropped as a feature   to be implemented by ATK itself. If you need focus tracking on your   implementation, subscribe to the {@link Atk.Object.SignalSignatures.state_change | Atk.Object::state-change} "focused"   signal.
     */
    function remove_focus_tracker(tracker_id: number): void;
    /**
     * `listener_id` is the value returned by `atk_add_global_event_listener`
     * when you registered that event listener.
     *
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. ATK implementors are discouraged from
     * reimplementing this method.
     *
     * Toolkit implementor note: this method is not intended to be used by
     * ATK implementors but by ATK consumers.
     *
     * Removes the specified event listener
     * @param listener_id the id of the event listener to remove
     */
    function remove_global_event_listener(listener_id: number): void;
    /**
     * `listener_id` is the value returned by `atk_add_key_event_listener`
     * when you registered that event listener.
     *
     * Removes the specified event listener.
     * @param listener_id the id of the event listener to remove
     */
    function remove_key_event_listener(listener_id: number): void;
    /**
     * Get the {@link Atk.Role} type corresponding to a rolew name.
     * @param name a string which is the (non-localized) name of an ATK role.
     * @returns the {@link Atk.Role} enumerated type corresponding to the specified name,          or #ATK_ROLE_INVALID if no matching role is found.
     */
    function role_for_name(name: string): Role;
    /**
     * Gets the localized description string describing the {@link Atk.Role} `role`.
     * @param role The {@link Atk.Role} whose localized name is required
     * @returns the localized string describing the AtkRole
     */
    function role_get_localized_name(role: Role | null): string;
    /**
     * Gets the description string describing the {@link Atk.Role} `role`.
     * @param role The {@link Atk.Role} whose name is required
     * @returns the string describing the AtkRole
     */
    function role_get_name(role: Role | null): string;
    /**
     * Registers the role specified by `name`. `name` must be a meaningful
     * name. So it should not be empty, or consisting on whitespaces.
     * @param name a character string describing the new role.
     * @returns an {@link Atk.Role} for the new role if added properly. ATK_ROLE_INVALID in case of error.
     * @deprecated Since 2.12. If your application/toolkit doesn't find a suitable role for a specific object defined at {@link Atk.Role}, please submit a bug in order to add a new role to the specification.
     */
    function role_register(name: string): Role;
    /**
     * Gets the {@link Atk.StateType} corresponding to the description string `name`.
     * @param name a character string state name
     * @returns an {@link Atk.StateType} corresponding to `name`
     */
    function state_type_for_name(name: string): StateType;
    /**
     * Gets the description string describing the {@link Atk.StateType} `type`.
     * @param type The {@link Atk.StateType} whose name is required
     * @returns the string describing the AtkStateType
     */
    function state_type_get_name(type: StateType | null): string;
    /**
     * Register a new object state.
     * @param name a character string describing the new state.
     * @returns an {@link Atk.State} value for the new state.
     */
    function state_type_register(name: string): StateType;
    /**
     * Get the {@link Atk.TextAttribute} type corresponding to a text attribute name.
     * @param name a string which is the (non-localized) name of an ATK text attribute.
     * @returns the {@link Atk.TextAttribute} enumerated type corresponding to the specified          name, or #ATK_TEXT_ATTRIBUTE_INVALID if no matching text attribute          is found.
     */
    function text_attribute_for_name(name: string): TextAttribute;
    /**
     * Gets the name corresponding to the {@link Atk.TextAttribute}
     * @param attr The {@link Atk.TextAttribute} whose name is required
     * @returns a string containing the name; this string should not be freed
     */
    function text_attribute_get_name(attr: TextAttribute | null): string;
    /**
     * Gets the value for the index of the {@link Atk.TextAttribute}
     * @param attr The {@link Atk.TextAttribute} for which a value is required
     * @param index_ The index of the required value
     * @returns a string containing the value; this string should not be freed; `null` is returned if there are no values maintained for the attr value.
     */
    function text_attribute_get_value(attr: TextAttribute | null, index_: number): string | null;
    /**
     * Associate `name` with a new {@link Atk.TextAttribute}
     * @param name a name string
     * @returns an {@link Atk.TextAttribute} associated with `name`
     */
    function text_attribute_register(name: string): TextAttribute;
    /**
     * Frees the memory associated with an array of AtkTextRange. It is assumed
     * that the array was returned by the function atk_text_get_bounded_ranges
     * and is NULL terminated.
     * @param ranges A pointer to an array of {@link Atk.TextRange} which is   to be freed.
     * @since 1.3
     */
    function text_free_ranges(ranges: TextRange[]): void;
    /**
     * Gets the localized description string describing the {@link Atk.ValueType} `value_type`.
     * @param value_type The {@link Atk.ValueType} whose localized name is required
     * @returns the localized string describing the {@link Atk.ValueType}
     */
    function value_type_get_localized_name(value_type: ValueType | null): string;
    /**
     * Gets the description string describing the {@link Atk.ValueType} `value_type`.
     * @param value_type The {@link Atk.ValueType} whose name is required
     * @returns the string describing the {@link Atk.ValueType}
     */
    function value_type_get_name(value_type: ValueType | null): string;
    /**
     * @gir-type Callback
     */
    interface EventListener {
        (obj: Object): void;
    }
    /**
     * @gir-type Callback
     */
    interface EventListenerInit {
        (): void;
    }
    /**
     * @gir-type Callback
     */
    interface FocusHandler {
        (object: Object, focus_in: boolean): void;
    }
    /**
     * @gir-type Callback
     */
    interface Function {
        (user_data?: any | null): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface KeySnoopFunc {
        (event: KeyEventStruct): number;
    }
    /**
     * @gir-type Callback
     */
    interface PropertyChangeHandler {
        (obj: Object, vals: PropertyValues): void;
    }
    /**
     * @gir-type Flags
     */
    export namespace HyperlinkStateFlags {
        export const $gtype: GObject.GType<HyperlinkStateFlags>;
    }

    /**
     * Describes the type of link
     * @gir-type Flags
     */
    enum HyperlinkStateFlags {
        /**
         * Link is inline
         */
        INLINE,
    }

    namespace GObjectAccessible {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::accessible-component-layer': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-component-mdi-zorder': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-help-text': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-hypertext-nlinks': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-id': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-parent': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption-object': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-summary': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This object class is derived from AtkObject and can be used as a basis implementing accessible objects.
     *
     * This object class is derived from AtkObject. It can be used as a
     * basis for implementing accessible objects for GObjects which are
     * not derived from GtkWidget. One example of its use is in providing
     * an accessible object for GnomeCanvasItem in the GAIL library.
     * @gir-type Class
     */
    class GObjectAccessible extends Object {
        static $gtype: GObject.GType<GObjectAccessible>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GObjectAccessible.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GObjectAccessible.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GObjectAccessible.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GObjectAccessible.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GObjectAccessible.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GObjectAccessible.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GObjectAccessible.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GObjectAccessible.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the accessible object for the specified `obj`.
         * @param obj a {@link GObject.Object}
         */
        static for_object(obj: GObject.Object): Object;

        // Methods

        /**
         * Gets the GObject for which `obj` is the accessible object.
         * @returns a {@link GObject.Object} which is the object for which `obj` is the accessible object
         */
        get_object<T = GObject.Object>(): T;
    }

    namespace Hyperlink {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The signal link-activated is emitted when a link is activated.
             * @signal
             * @run-last
             */
            'link-activated': () => void;
            'notify::end-index': (pspec: GObject.ParamSpec) => void;
            'notify::number-of-anchors': (pspec: GObject.ParamSpec) => void;
            'notify::selected-link': (pspec: GObject.ParamSpec) => void;
            'notify::start-index': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Action.ConstructorProps {
            end_index: number;
            endIndex: number;
            number_of_anchors: number;
            numberOfAnchors: number;
            selected_link: boolean;
            selectedLink: boolean;
            start_index: number;
            startIndex: number;
        }
    }

    /**
     * An ATK object which encapsulates a link or set of links in a hypertext document.
     *
     * An ATK object which encapsulates a link or set of links (for
     * instance in the case of client-side image maps) in a hypertext
     * document.  It may implement the AtkAction interface.  AtkHyperlink
     * may also be used to refer to inline embedded content, since it
     * allows specification of a start and end offset within the host
     * AtkHypertext object.
     * @gir-type Class
     */
    class Hyperlink extends GObject.Object implements Action {
        static $gtype: GObject.GType<Hyperlink>;

        // Properties

        /**
         * @read-only
         */
        get end_index(): number;
        /**
         * @read-only
         */
        get endIndex(): number;
        /**
         * @read-only
         */
        get number_of_anchors(): number;
        /**
         * @read-only
         */
        get numberOfAnchors(): number;
        /**
         * Selected link
         * @deprecated since 1.8: Please use ATK_STATE_FOCUSABLE for all links, and ATK_STATE_FOCUSED for focused links.
         * @read-only
         */
        get selected_link(): boolean;
        /**
         * Selected link
         * @deprecated since 1.8: Please use ATK_STATE_FOCUSABLE for all links, and ATK_STATE_FOCUSED for focused links.
         * @read-only
         */
        get selectedLink(): boolean;
        /**
         * @read-only
         */
        get start_index(): number;
        /**
         * @read-only
         */
        get startIndex(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Hyperlink.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Hyperlink.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Hyperlink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Hyperlink.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Hyperlink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Hyperlink.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Hyperlink.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Hyperlink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Gets the index with the hypertext document at which this link ends.
         * @virtual
         */
        vfunc_get_end_index(): number;
        /**
         * Gets the number of anchors associated with this hyperlink.
         * @virtual
         */
        vfunc_get_n_anchors(): number;
        /**
         * Returns the item associated with this hyperlinks nth anchor.
         * For instance, the returned {@link Atk.Object} will implement {@link Atk.Text}
         * if `link_` is a text hyperlink, {@link Atk.Image} if `link_` is an image
         * hyperlink etc.
         *
         * Multiple anchors are primarily used by client-side image maps.
         * @param i a (zero-index) integer specifying the desired anchor
         * @virtual
         */
        vfunc_get_object(i: number): Object;
        /**
         * Gets the index with the hypertext document at which this link begins.
         * @virtual
         */
        vfunc_get_start_index(): number;
        /**
         * Get a the URI associated with the anchor specified
         * by `i` of `link_`.
         *
         * Multiple anchors are primarily used by client-side image maps.
         * @param i a (zero-index) integer specifying the desired anchor
         * @virtual
         */
        vfunc_get_uri(i: number): string;
        /**
         * Determines whether this AtkHyperlink is selected
         * @virtual
         */
        vfunc_is_selected_link(): boolean;
        /**
         * Since the document that a link is associated with may have changed
         * this method returns `true` if the link is still valid (with
         * respect to the document it references) and `false` otherwise.
         * @virtual
         */
        vfunc_is_valid(): boolean;
        /**
         * @virtual
         */
        vfunc_link_activated(): void;
        /**
         * @virtual
         */
        vfunc_link_state(): number;

        // Methods

        /**
         * Gets the index with the hypertext document at which this link ends.
         * @returns the index with the hypertext document at which this link ends
         */
        get_end_index(): number;
        /**
         * Gets the number of anchors associated with this hyperlink.
         * @returns the number of anchors associated with this hyperlink
         */
        get_n_anchors(): number;
        /**
         * Returns the item associated with this hyperlinks nth anchor.
         * For instance, the returned {@link Atk.Object} will implement {@link Atk.Text}
         * if `link_` is a text hyperlink, {@link Atk.Image} if `link_` is an image
         * hyperlink etc.
         *
         * Multiple anchors are primarily used by client-side image maps.
         * @param i a (zero-index) integer specifying the desired anchor
         * @returns an {@link Atk.Object} associated with this hyperlinks i-th anchor
         */
        get_object(i: number): Object;
        /**
         * Gets the index with the hypertext document at which this link begins.
         * @returns the index with the hypertext document at which this link begins
         */
        get_start_index(): number;
        /**
         * Get a the URI associated with the anchor specified
         * by `i` of `link_`.
         *
         * Multiple anchors are primarily used by client-side image maps.
         * @param i a (zero-index) integer specifying the desired anchor
         * @returns a string specifying the URI
         */
        get_uri(i: number): string;
        /**
         * Indicates whether the link currently displays some or all of its
         *           content inline.  Ordinary HTML links will usually return
         *           `false`, but an inline &lt;src&gt; HTML element will return
         *           `true`.
         * @returns whether or not this link displays its content inline.
         */
        is_inline(): boolean;
        /**
         * Determines whether this AtkHyperlink is selected
         * @returns True if the AtkHyperlink is selected, False otherwise
         */
        is_selected_link(): boolean;
        /**
         * Since the document that a link is associated with may have changed
         * this method returns `true` if the link is still valid (with
         * respect to the document it references) and `false` otherwise.
         * @returns whether or not this link is still valid
         */
        is_valid(): boolean;
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @returns `true` if success, `false` otherwise
         */
        do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a description string, or `null` if `action` does not implement this interface.
         */
        get_description(i: number): string | null;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         * @param i the action index corresponding to the action to be performed
         * @returns the keybinding which can be used to activate this action, or `null` if there is no keybinding for this action.
         */
        get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @returns a the number of actions, or 0 if `action` does not implement this interface.
         */
        get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via `atk_action_do_action()` may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_name(i: number): string | null;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @returns a gboolean representing if the description was successfully set;
         */
        set_description(i: number, desc: string): boolean;
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_description(i: number): string | null;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @virtual
         */
        vfunc_get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via `atk_action_do_action()` may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_name(i: number): string | null;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @virtual
         */
        vfunc_set_description(i: number, desc: string): boolean;
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
         * a [floating][floating-ref] object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating][floating-ref] reference.
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
         * [floating][floating-ref] reference, if `object` has a floating reference.
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

    namespace Misc {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A set of ATK utility functions for thread locking
     *
     * A set of utility functions for thread locking. This interface and
     * all his related methods are deprecated since 2.12.
     * @gir-type Class
     */
    class Misc extends GObject.Object {
        static $gtype: GObject.GType<Misc>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Misc.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Misc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Misc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Misc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Misc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Misc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Misc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Misc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Obtain the singleton instance of AtkMisc for this application.
         */
        static get_instance(): Misc;

        // Virtual methods

        /**
         * Take the thread mutex for the GUI toolkit,
         * if one exists.
         * (This method is implemented by the toolkit ATK implementation layer;
         *  for instance, for GTK+, GAIL implements this via GDK_THREADS_ENTER).
         * @virtual
         */
        vfunc_threads_enter(): void;
        /**
         * Release the thread mutex for the GUI toolkit,
         * if one exists. This method, and atk_misc_threads_enter,
         * are needed in some situations by threaded application code which
         * services ATK requests, since fulfilling ATK requests often
         * requires calling into the GUI toolkit.  If a long-running or
         * potentially blocking call takes place inside such a block, it should
         * be bracketed by atk_misc_threads_leave/atk_misc_threads_enter calls.
         * (This method is implemented by the toolkit ATK implementation layer;
         *  for instance, for GTK+, GAIL implements this via GDK_THREADS_LEAVE).
         * @virtual
         */
        vfunc_threads_leave(): void;

        // Methods

        /**
         * Take the thread mutex for the GUI toolkit,
         * if one exists.
         * (This method is implemented by the toolkit ATK implementation layer;
         *  for instance, for GTK+, GAIL implements this via GDK_THREADS_ENTER).
         */
        threads_enter(): void;
        /**
         * Release the thread mutex for the GUI toolkit,
         * if one exists. This method, and atk_misc_threads_enter,
         * are needed in some situations by threaded application code which
         * services ATK requests, since fulfilling ATK requests often
         * requires calling into the GUI toolkit.  If a long-running or
         * potentially blocking call takes place inside such a block, it should
         * be bracketed by atk_misc_threads_leave/atk_misc_threads_enter calls.
         * (This method is implemented by the toolkit ATK implementation layer;
         *  for instance, for GTK+, GAIL implements this via GDK_THREADS_LEAVE).
         */
        threads_leave(): void;
    }

    namespace NoOpObject {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::accessible-component-layer': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-component-mdi-zorder': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-help-text': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-hypertext-nlinks': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-id': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-parent': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption-object': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-summary': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Object.ConstructorProps,
                Action.ConstructorProps,
                Component.ConstructorProps,
                Document.ConstructorProps,
                EditableText.ConstructorProps,
                Hypertext.ConstructorProps,
                Image.ConstructorProps,
                Selection.ConstructorProps,
                Table.ConstructorProps,
                TableCell.ConstructorProps,
                Text.ConstructorProps,
                Value.ConstructorProps,
                Window.ConstructorProps {}
    }

    /**
     * An AtkObject which purports to implement all ATK interfaces.
     *
     * An AtkNoOpObject is an AtkObject which purports to implement all
     * ATK interfaces. It is the type of AtkObject which is created if an
     * accessible object is requested for an object type for which no
     * factory type is specified.
     * @gir-type Class
     */
    class NoOpObject
        extends Object
        implements
            Action,
            Component,
            Document,
            EditableText,
            Hypertext,
            Image,
            Selection,
            Table,
            TableCell,
            Text,
            Value,
            Window
    {
        static $gtype: GObject.GType<NoOpObject>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NoOpObject.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NoOpObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](obj: GObject.Object): NoOpObject;

        // Signals

        /** @signal */
        connect<K extends keyof NoOpObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NoOpObject.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof NoOpObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NoOpObject.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof NoOpObject.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NoOpObject.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * @read-only
         * @category Inherited from Atk.Object
         */
        get accessible_component_layer(): number;
        /**
         * @read-only
         * @category Inherited from Atk.Object
         */
        get accessibleComponentLayer(): number;
        /**
         * @read-only
         * @category Inherited from Atk.Object
         */
        get accessible_component_mdi_zorder(): number;
        /**
         * @read-only
         * @category Inherited from Atk.Object
         */
        get accessibleComponentMdiZorder(): number;
        /** @category Inherited from Atk.Object */
        get accessible_description(): string;
        set accessible_description(val: string);
        /** @category Inherited from Atk.Object */
        get accessibleDescription(): string;
        set accessibleDescription(val: string);
        /** @category Inherited from Atk.Object */
        get accessible_help_text(): string;
        set accessible_help_text(val: string);
        /** @category Inherited from Atk.Object */
        get accessibleHelpText(): string;
        set accessibleHelpText(val: string);
        /**
         * @read-only
         * @category Inherited from Atk.Object
         */
        get accessible_hypertext_nlinks(): number;
        /**
         * @read-only
         * @category Inherited from Atk.Object
         */
        get accessibleHypertextNlinks(): number;
        /** @category Inherited from Atk.Object */
        get accessible_id(): string;
        set accessible_id(val: string);
        /** @category Inherited from Atk.Object */
        get accessibleId(): string;
        set accessibleId(val: string);
        /** @category Inherited from Atk.Object */
        get accessible_name(): string;
        set accessible_name(val: string);
        /** @category Inherited from Atk.Object */
        get accessibleName(): string;
        set accessibleName(val: string);
        /** @category Inherited from Atk.Object */
        get accessible_parent(): Object;
        set accessible_parent(val: Object);
        /** @category Inherited from Atk.Object */
        get accessibleParent(): Object;
        set accessibleParent(val: Object);
        /** @category Inherited from Atk.Object */
        get accessible_role(): Role;
        set accessible_role(val: Role);
        /** @category Inherited from Atk.Object */
        get accessibleRole(): Role;
        set accessibleRole(val: Role);
        /**
         * Table caption.
         * @deprecated Since 1.3. Use table-caption-object instead.
         * @category Inherited from Atk.Object
         */
        get accessible_table_caption(): string;
        set accessible_table_caption(val: string);
        /**
         * Table caption.
         * @deprecated Since 1.3. Use table-caption-object instead.
         * @category Inherited from Atk.Object
         */
        get accessibleTableCaption(): string;
        set accessibleTableCaption(val: string);
        /** @category Inherited from Atk.Object */
        get accessible_table_caption_object(): Object;
        set accessible_table_caption_object(val: Object);
        /** @category Inherited from Atk.Object */
        get accessibleTableCaptionObject(): Object;
        set accessibleTableCaptionObject(val: Object);
        /**
         * Accessible table column description.
         * @deprecated Since 2.12. Use `atk_table_get_column_description()` and `atk_table_set_column_description()` instead.
         * @category Inherited from Atk.Object
         */
        get accessible_table_column_description(): string;
        set accessible_table_column_description(val: string);
        /**
         * Accessible table column description.
         * @deprecated Since 2.12. Use `atk_table_get_column_description()` and `atk_table_set_column_description()` instead.
         * @category Inherited from Atk.Object
         */
        get accessibleTableColumnDescription(): string;
        set accessibleTableColumnDescription(val: string);
        /**
         * Accessible table column header.
         * @deprecated Since 2.12. Use `atk_table_get_column_header()` and `atk_table_set_column_header()` instead.
         * @category Inherited from Atk.Object
         */
        get accessible_table_column_header(): Object;
        set accessible_table_column_header(val: Object);
        /**
         * Accessible table column header.
         * @deprecated Since 2.12. Use `atk_table_get_column_header()` and `atk_table_set_column_header()` instead.
         * @category Inherited from Atk.Object
         */
        get accessibleTableColumnHeader(): Object;
        set accessibleTableColumnHeader(val: Object);
        /**
         * Accessible table row description.
         * @deprecated Since 2.12. Use `atk_table_get_row_description()` and `atk_table_set_row_description()` instead.
         * @category Inherited from Atk.Object
         */
        get accessible_table_row_description(): string;
        set accessible_table_row_description(val: string);
        /**
         * Accessible table row description.
         * @deprecated Since 2.12. Use `atk_table_get_row_description()` and `atk_table_set_row_description()` instead.
         * @category Inherited from Atk.Object
         */
        get accessibleTableRowDescription(): string;
        set accessibleTableRowDescription(val: string);
        /**
         * Accessible table row header.
         * @deprecated Since 2.12. Use `atk_table_get_row_header()` and `atk_table_set_row_header()` instead.
         * @category Inherited from Atk.Object
         */
        get accessible_table_row_header(): Object;
        set accessible_table_row_header(val: Object);
        /**
         * Accessible table row header.
         * @deprecated Since 2.12. Use `atk_table_get_row_header()` and `atk_table_set_row_header()` instead.
         * @category Inherited from Atk.Object
         */
        get accessibleTableRowHeader(): Object;
        set accessibleTableRowHeader(val: Object);
        /** @category Inherited from Atk.Object */
        get accessible_table_summary(): Object;
        set accessible_table_summary(val: Object);
        /** @category Inherited from Atk.Object */
        get accessibleTableSummary(): Object;
        set accessibleTableSummary(val: Object);
        /**
         * Numeric value of this object, in case being and AtkValue.
         * @deprecated Since 2.12. Use `atk_value_get_value_and_text()` to get the value, and value-changed signal to be notified on their value changes.
         * @category Inherited from Atk.Object
         */
        get accessible_value(): number;
        set accessible_value(val: number);
        /**
         * Numeric value of this object, in case being and AtkValue.
         * @deprecated Since 2.12. Use `atk_value_get_value_and_text()` to get the value, and value-changed signal to be notified on their value changes.
         * @category Inherited from Atk.Object
         */
        get accessibleValue(): number;
        set accessibleValue(val: number);
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @returns `true` if success, `false` otherwise
         */
        do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a description string, or `null` if `action` does not implement this interface.
         */
        get_description(i: number): string | null;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.get_description
        get_description(...args: never[]): any;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         * @param i the action index corresponding to the action to be performed
         * @returns the keybinding which can be used to activate this action, or `null` if there is no keybinding for this action.
         */
        get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @returns a the number of actions, or 0 if `action` does not implement this interface.
         */
        get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via `atk_action_do_action()` may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_name(i: number): string | null;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.get_name
        get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @returns a gboolean representing if the description was successfully set;
         */
        set_description(i: number, desc: string): boolean;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.set_description
        set_description(...args: never[]): any;
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_description(i: number): string | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_get_description
        vfunc_get_description(...args: never[]): any;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @virtual
         */
        vfunc_get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via `atk_action_do_action()` may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_name(i: number): string | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_get_name
        vfunc_get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @virtual
         */
        vfunc_set_description(i: number, desc: string): boolean;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_set_description
        vfunc_set_description(...args: never[]): any;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` indicating whether the specified point is within the extent of the `component` or not
         */
        contains(x: number, y: number, coord_type: CoordType | null): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @returns An alpha value from 0 to 1.0, inclusive.
         */
        get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_extents(coord_type: CoordType | null): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @returns an {@link Atk.Layer} which is the layer of the component
         */
        get_layer(): Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_position(coord_type: CoordType | null): [number, number];
        /**
         * @param args
         */
        // Conflicted with Atk.TableCell.get_position
        get_position(...args: never[]): any;
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @returns `true` if successful, `false` otherwise.
         */
        grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns a reference to the accessible child, if one exists
         */
        ref_accessible_at_point(x: number, y: number, coord_type: CoordType | null): Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         */
        remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_to(type: ScrollType | null): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: CoordType | null, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType | null): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @returns `true` or `false` whether or not the position was set or not
         */
        set_position(x: number, y: number, coord_type: CoordType | null): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @returns `true` or `false` whether the size was set or not
         */
        set_size(width: number, height: number): boolean;
        /**
         * @param bounds
         * @virtual
         */
        vfunc_bounds_changed(bounds: Rectangle): void;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_contains(x: number, y: number, coord_type: CoordType): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @virtual
         */
        vfunc_get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_extents(coord_type: CoordType): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @virtual
         */
        vfunc_get_layer(): Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @virtual
         */
        vfunc_get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_position(coord_type: CoordType): [number, number];
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.TableCell.vfunc_get_position
        vfunc_get_position(...args: never[]): any;
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         * @virtual
         */
        vfunc_get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @virtual
         */
        vfunc_grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         * @virtual
         */
        vfunc_remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @virtual
         */
        vfunc_scroll_to(type: ScrollType): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @virtual
         */
        vfunc_scroll_to_point(coords: CoordType, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @virtual
         */
        vfunc_set_position(x: number, y: number, coord_type: CoordType): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @virtual
         */
        vfunc_set_size(width: number, height: number): boolean;
        /**
         * Retrieves the value of the given `attribute_name` inside `document`.
         * @param attribute_name a character string representing the name of the attribute   whose value is being queried.
         * @returns a string value associated with the named    attribute for this document, or `null` if a value for    `attribute_name` has not been specified for this document.
         */
        get_attribute_value(attribute_name: string): string | null;
        /**
         * Gets an AtkAttributeSet which describes document-wide
         *          attributes as name-value pairs.
         * @returns An AtkAttributeSet containing the explicitly          set name-value-pair attributes associated with this document          as a whole.
         */
        get_attributes(): AttributeSet;
        /**
         * Retrieves the current page number inside `document`.
         * @returns the current page number inside `document`, or -1 if   not implemented, not know by the implementor, or irrelevant.
         */
        get_current_page_number(): number;
        /**
         * Gets a %gpointer that points to an instance of the DOM.  It is
         * up to the caller to check atk_document_get_type to determine
         * how to cast this pointer.
         * @returns a %gpointer that points to an instance of the DOM.
         */
        get_document(): any | null;
        /**
         * Gets a string indicating the document type.
         * @returns a string indicating the document type
         */
        get_document_type(): string;
        /**
         * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
         *          of the content of this document instance.  Individual
         *          text substrings or images within this document may have
         *          a different locale, see atk_text_get_attributes and
         *          atk_image_get_image_locale.
         * @returns a UTF-8 string indicating the POSIX-style LC_MESSAGES          locale of the document content as a whole, or NULL if          the document content does not specify a locale.
         */
        get_locale(): string;
        /**
         * Retrieves the total number of pages inside `document`.
         * @returns total page count of `document`, or -1 if not implemented,   not know by the implementor or irrelevant.
         */
        get_page_count(): number;
        /**
         * Returns an array of AtkTextSelections within this document.
         * @returns a GArray of AtkTextSelection structures representing the selection.
         */
        get_text_selections(): TextSelection[];
        /**
         * Sets the value for the given `attribute_name` inside `document`.
         * @param attribute_name a character string representing the name of the attribute   whose value is being set.
         * @param attribute_value a string value to be associated with `attribute_name`.
         * @returns `true` if `attribute_value` is successfully associated   with `attribute_name` for this `document`, and `false` if if the   document does not allow the attribute to be modified
         */
        set_attribute_value(attribute_name: string, attribute_value: string): boolean;
        /**
         * Makes 1 or more selections within this document denoted by the given
         * array of AtkTextSelections. Any existing physical selection (inside or
         * outside this document) is replaced by the new selections. All objects within
         * the given selection ranges must be descendants of this document. Otherwise
         * FALSE will be returned.
         * @param selections a GArray of AtkTextSelections              to be selected.
         * @returns TRUE if the selection was made successfully; FALSE otherwise.
         */
        set_text_selections(selections: TextSelection[]): boolean;
        /**
         * Retrieves the current page number inside `document`.
         * @virtual
         */
        vfunc_get_current_page_number(): number;
        /**
         * Gets a %gpointer that points to an instance of the DOM.  It is
         * up to the caller to check atk_document_get_type to determine
         * how to cast this pointer.
         * @virtual
         */
        vfunc_get_document(): any | null;
        /**
         * Retrieves the value of the given `attribute_name` inside `document`.
         * @param attribute_name a character string representing the name of the attribute   whose value is being queried.
         * @virtual
         */
        vfunc_get_document_attribute_value(attribute_name: string): string | null;
        /**
         * Gets an AtkAttributeSet which describes document-wide
         *          attributes as name-value pairs.
         * @virtual
         */
        vfunc_get_document_attributes(): AttributeSet;
        /**
         * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
         *          of the content of this document instance.  Individual
         *          text substrings or images within this document may have
         *          a different locale, see atk_text_get_attributes and
         *          atk_image_get_image_locale.
         * @virtual
         */
        vfunc_get_document_locale(): string;
        /**
         * Gets a string indicating the document type.
         * @virtual
         */
        vfunc_get_document_type(): string;
        /**
         * Retrieves the total number of pages inside `document`.
         * @virtual
         */
        vfunc_get_page_count(): number;
        /**
         * Returns an array of AtkTextSelections within this document.
         * @virtual
         */
        vfunc_get_text_selections(): TextSelection[];
        /**
         * Sets the value for the given `attribute_name` inside `document`.
         * @param attribute_name a character string representing the name of the attribute   whose value is being set.
         * @param attribute_value a string value to be associated with `attribute_name`.
         * @virtual
         */
        vfunc_set_document_attribute(attribute_name: string, attribute_value: string): boolean;
        /**
         * Makes 1 or more selections within this document denoted by the given
         * array of AtkTextSelections. Any existing physical selection (inside or
         * outside this document) is replaced by the new selections. All objects within
         * the given selection ranges must be descendants of this document. Otherwise
         * FALSE will be returned.
         * @param selections a GArray of AtkTextSelections              to be selected.
         * @virtual
         */
        vfunc_set_text_selections(selections: TextSelection[]): boolean;
        /**
         * Copy text from `start_pos` up to, but not including `end_pos`
         * to the clipboard.
         * @param start_pos start position
         * @param end_pos end position
         */
        copy_text(start_pos: number, end_pos: number): void;
        /**
         * Copy text from `start_pos` up to, but not including `end_pos`
         * to the clipboard and then delete from the widget.
         * @param start_pos start position
         * @param end_pos end position
         */
        cut_text(start_pos: number, end_pos: number): void;
        /**
         * Delete text `start_pos` up to, but not including `end_pos`.
         * @param start_pos start position
         * @param end_pos end position
         */
        delete_text(start_pos: number, end_pos: number): void;
        /**
         * Insert text at a given position.
         * @param string the text to insert
         * @param length the length of text to insert, in bytes
         * @param position The caller initializes this to the position at which to insert the text. After the call it points at the position after the newly inserted text.
         */
        insert_text(string: string, length: number, position: number): void;
        /**
         * Paste text from clipboard to specified `position`.
         * @param position position to paste
         */
        paste_text(position: number): void;
        /**
         * Sets the attributes for a specified range. See the ATK_ATTRIBUTE
         * macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes
         * that can be set. Note that other attributes that do not have corresponding
         * ATK_ATTRIBUTE macros may also be set for certain text widgets.
         * @param attrib_set an {@link Atk.AttributeSet}
         * @param start_offset start of range in which to set attributes
         * @param end_offset end of range in which to set attributes
         * @returns `true` if attributes successfully set for the specified range, otherwise `false`
         */
        set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean;
        /**
         * Set text contents of `text`.
         * @param string string to set for text contents of `text`
         */
        set_text_contents(string: string): void;
        /**
         * Copy text from `start_pos` up to, but not including `end_pos`
         * to the clipboard.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_copy_text(start_pos: number, end_pos: number): void;
        /**
         * Copy text from `start_pos` up to, but not including `end_pos`
         * to the clipboard and then delete from the widget.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_cut_text(start_pos: number, end_pos: number): void;
        /**
         * Delete text `start_pos` up to, but not including `end_pos`.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_delete_text(start_pos: number, end_pos: number): void;
        /**
         * Insert text at a given position.
         * @param string the text to insert
         * @param length the length of text to insert, in bytes
         * @param position The caller initializes this to the position at which to insert the text. After the call it points at the position after the newly inserted text.
         * @virtual
         */
        vfunc_insert_text(string: string, length: number, position: number): void;
        /**
         * Paste text from clipboard to specified `position`.
         * @param position position to paste
         * @virtual
         */
        vfunc_paste_text(position: number): void;
        /**
         * Sets the attributes for a specified range. See the ATK_ATTRIBUTE
         * macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes
         * that can be set. Note that other attributes that do not have corresponding
         * ATK_ATTRIBUTE macros may also be set for certain text widgets.
         * @param attrib_set an {@link Atk.AttributeSet}
         * @param start_offset start of range in which to set attributes
         * @param end_offset end of range in which to set attributes
         * @virtual
         */
        vfunc_set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean;
        /**
         * Set text contents of `text`.
         * @param string string to set for text contents of `text`
         * @virtual
         */
        vfunc_set_text_contents(string: string): void;
        /**
         * Gets the link in this hypertext document at index
         * `link_index`
         * @param link_index an integer specifying the desired link
         * @returns the link in this hypertext document at index `link_index`
         */
        get_link(link_index: number): Hyperlink;
        /**
         * Gets the index into the array of hyperlinks that is associated with
         * the character specified by `char_index`.
         * @param char_index a character index
         * @returns an index into the array of hyperlinks in `hypertext`, or -1 if there is no hyperlink associated with this character.
         */
        get_link_index(char_index: number): number;
        /**
         * Gets the number of links within this hypertext document.
         * @returns the number of links within this hypertext document
         */
        get_n_links(): number;
        /**
         * Gets the link in this hypertext document at index
         * `link_index`
         * @param link_index an integer specifying the desired link
         * @virtual
         */
        vfunc_get_link(link_index: number): Hyperlink;
        /**
         * Gets the index into the array of hyperlinks that is associated with
         * the character specified by `char_index`.
         * @param char_index a character index
         * @virtual
         */
        vfunc_get_link_index(char_index: number): number;
        /**
         * Gets the number of links within this hypertext document.
         * @virtual
         */
        vfunc_get_n_links(): number;
        /**
         * @param link_index
         * @virtual
         */
        vfunc_link_selected(link_index: number): void;
        /**
         * Get a textual description of this image.
         * @returns a string representing the image description
         */
        get_image_description(): string;
        /**
         * Retrieves the locale identifier associated to the {@link Atk.Image}.
         * @returns a string corresponding to the POSIX   `LC_MESSAGES` locale used by the image description, or   `null` if the image does not specify a locale.
         */
        get_image_locale(): string | null;
        /**
         * Gets the position of the image in the form of a point specifying the
         * images top-left corner.
         *
         * If the position can not be obtained (e.g. missing support), x and y are set
         * to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_image_position(coord_type: CoordType | null): [number, number];
        /**
         * Get the width and height in pixels for the specified image.
         * The values of `width` and `height` are returned as -1 if the
         * values cannot be obtained (for instance, if the object is not onscreen).
         *
         * If the size can not be obtained (e.g. missing support), x and y are set
         * to -1.
         */
        get_image_size(): [number, number];
        /**
         * Sets the textual description for this image.
         * @param description a string description to set for `image`
         * @returns boolean TRUE, or FALSE if operation could not be completed.
         */
        set_image_description(description: string): boolean;
        /**
         * Get a textual description of this image.
         * @virtual
         */
        vfunc_get_image_description(): string;
        /**
         * Retrieves the locale identifier associated to the {@link Atk.Image}.
         * @virtual
         */
        vfunc_get_image_locale(): string | null;
        /**
         * Gets the position of the image in the form of a point specifying the
         * images top-left corner.
         *
         * If the position can not be obtained (e.g. missing support), x and y are set
         * to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_image_position(coord_type: CoordType): [number, number];
        /**
         * Get the width and height in pixels for the specified image.
         * The values of `width` and `height` are returned as -1 if the
         * values cannot be obtained (for instance, if the object is not onscreen).
         *
         * If the size can not be obtained (e.g. missing support), x and y are set
         * to -1.
         * @virtual
         */
        vfunc_get_image_size(): [number, number];
        /**
         * Sets the textual description for this image.
         * @param description a string description to set for `image`
         * @virtual
         */
        vfunc_set_image_description(description: string): boolean;
        /**
         * Adds the specified accessible child of the object to the
         * object's selection.
         * @param i a `gint` specifying the child index.
         * @returns TRUE if success, FALSE otherwise.
         */
        add_selection(i: number): boolean;
        /**
         * Clears the selection in the object so that no children in the object
         * are selected.
         * @returns TRUE if success, FALSE otherwise.
         */
        clear_selection(): boolean;
        /**
         * Gets the number of accessible children currently selected.
         * Note: callers should not rely on `null` or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * `atk_get_accessible_value()` convenience method.
         * @returns a gint representing the number of items selected, or 0 if `selection` does not implement this interface.
         */
        get_selection_count(): number;
        /**
         * Determines if the current child of this object is selected
         * Note: callers should not rely on `null` or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * `atk_get_accessible_value()` convenience method.
         * @param i a `gint` specifying the child index.
         * @returns a gboolean representing the specified child is selected, or 0 if `selection` does not implement this interface.
         */
        is_child_selected(i: number): boolean;
        /**
         * Gets a reference to the accessible object representing the specified
         * selected child of the object.
         * Note: callers should not rely on `null` or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * `atk_get_accessible_value()` convenience method.
         * @param i a `gint` specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
         * @returns an {@link Atk.Object} representing the selected accessible, or `null` if `selection` does not implement this interface.
         */
        ref_selection(i: number): Object | null;
        /**
         * Removes the specified child of the object from the object's selection.
         * @param i a `gint` specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
         * @returns TRUE if success, FALSE otherwise.
         */
        remove_selection(i: number): boolean;
        /**
         * Causes every child of the object to be selected if the object
         * supports multiple selections.
         * @returns TRUE if success, FALSE otherwise.
         */
        select_all_selection(): boolean;
        /**
         * Adds the specified accessible child of the object to the
         * object's selection.
         * @param i a `gint` specifying the child index.
         * @virtual
         */
        vfunc_add_selection(i: number): boolean;
        /**
         * Clears the selection in the object so that no children in the object
         * are selected.
         * @virtual
         */
        vfunc_clear_selection(): boolean;
        /**
         * Gets the number of accessible children currently selected.
         * Note: callers should not rely on `null` or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * `atk_get_accessible_value()` convenience method.
         * @virtual
         */
        vfunc_get_selection_count(): number;
        /**
         * Determines if the current child of this object is selected
         * Note: callers should not rely on `null` or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * `atk_get_accessible_value()` convenience method.
         * @param i a `gint` specifying the child index.
         * @virtual
         */
        vfunc_is_child_selected(i: number): boolean;
        /**
         * Gets a reference to the accessible object representing the specified
         * selected child of the object.
         * Note: callers should not rely on `null` or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * `atk_get_accessible_value()` convenience method.
         * @param i a `gint` specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
         * @virtual
         */
        vfunc_ref_selection(i: number): Object | null;
        /**
         * Removes the specified child of the object from the object's selection.
         * @param i a `gint` specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
         * @virtual
         */
        vfunc_remove_selection(i: number): boolean;
        /**
         * Causes every child of the object to be selected if the object
         * supports multiple selections.
         * @virtual
         */
        vfunc_select_all_selection(): boolean;
        /**
         * @virtual
         */
        vfunc_selection_changed(): void;
        /**
         * Adds the specified `column` to the selection.
         * @param column a `gint` representing a column in `table`
         * @returns a gboolean representing if the column was successfully added to the selection, or 0 if value does not implement this interface.
         */
        add_column_selection(column: number): boolean;
        /**
         * Adds the specified `row` to the selection.
         * @param row a `gint` representing a row in `table`
         * @returns a gboolean representing if row was successfully added to selection, or 0 if value does not implement this interface.
         */
        add_row_selection(row: number): boolean;
        /**
         * Gets the caption for the `table`.
         * @returns a AtkObject* representing the table caption, or `null` if value does not implement this interface.
         */
        get_caption(): Object | null;
        /**
         * Gets a `gint` representing the column at the specified `index_`.
         * @param index_ a `gint` representing an index in `table`
         * @returns a gint representing the column at the specified index, or -1 if the table does not implement this method.
         */
        get_column_at_index(index_: number): number;
        /**
         * Gets the description text of the specified `column` in the table
         * @param column a `gint` representing a column in `table`
         * @returns a gchar* representing the column description, or `null` if value does not implement this interface.
         */
        get_column_description(column: number): string;
        /**
         * Gets the number of columns occupied by the accessible object
         * at the specified `row` and `column` in the `table`.
         * @param row a `gint` representing a row in `table`
         * @param column a `gint` representing a column in `table`
         * @returns a gint representing the column extent at specified position, or 0 if value does not implement this interface.
         */
        get_column_extent_at(row: number, column: number): number;
        /**
         * Gets the column header of a specified column in an accessible table.
         * @param column a `gint` representing a column in the table
         * @returns a AtkObject* representing the specified column header, or `null` if value does not implement this interface.
         */
        get_column_header(column: number): Object | null;
        /**
         * Gets a `gint` representing the index at the specified `row` and
         * `column`.
         * @param row a `gint` representing a row in `table`
         * @param column a `gint` representing a column in `table`
         * @returns a `gint` representing the index at specified position. The value -1 is returned if the object at row,column is not a child of table or table does not implement this interface.
         */
        get_index_at(row: number, column: number): number;
        /**
         * Gets the number of columns in the table.
         * @returns a gint representing the number of columns, or 0 if value does not implement this interface.
         */
        get_n_columns(): number;
        /**
         * Gets the number of rows in the table.
         * @returns a gint representing the number of rows, or 0 if value does not implement this interface.
         */
        get_n_rows(): number;
        /**
         * Gets a `gint` representing the row at the specified `index_`.
         * @param index_ a `gint` representing an index in `table`
         * @returns a gint representing the row at the specified index, or -1 if the table does not implement this method.
         */
        get_row_at_index(index_: number): number;
        /**
         * Gets the description text of the specified row in the table
         * @param row a `gint` representing a row in `table`
         * @returns a gchar* representing the row description, or `null` if value does not implement this interface.
         */
        get_row_description(row: number): string | null;
        /**
         * Gets the number of rows occupied by the accessible object
         * at a specified `row` and `column` in the `table`.
         * @param row a `gint` representing a row in `table`
         * @param column a `gint` representing a column in `table`
         * @returns a gint representing the row extent at specified position, or 0 if value does not implement this interface.
         */
        get_row_extent_at(row: number, column: number): number;
        /**
         * Gets the row header of a specified row in an accessible table.
         * @param row a `gint` representing a row in the table
         * @returns a AtkObject* representing the specified row header, or `null` if value does not implement this interface.
         */
        get_row_header(row: number): Object | null;
        /**
         * Gets the selected columns of the table by initializing **selected with
         * the selected column numbers. This array should be freed by the caller.
         * @param selected a `gint`** that is to contain the selected columns numbers
         * @returns a gint representing the number of selected columns, or %0 if value does not implement this interface.
         */
        get_selected_columns(selected: number): number;
        /**
         * Gets the selected rows of the table by initializing **selected with
         * the selected row numbers. This array should be freed by the caller.
         * @param selected a `gint`** that is to contain the selected row numbers
         * @returns a gint representing the number of selected rows, or zero if value does not implement this interface.
         */
        get_selected_rows(selected: number): number;
        /**
         * Gets the summary description of the table.
         * @returns a AtkObject* representing a summary description of the table, or zero if value does not implement this interface.
         */
        get_summary(): Object;
        /**
         * Gets a boolean value indicating whether the specified `column`
         * is selected
         * @param column a `gint` representing a column in `table`
         * @returns a gboolean representing if the column is selected, or 0 if value does not implement this interface.
         */
        is_column_selected(column: number): boolean;
        /**
         * Gets a boolean value indicating whether the specified `row`
         * is selected
         * @param row a `gint` representing a row in `table`
         * @returns a gboolean representing if the row is selected, or 0 if value does not implement this interface.
         */
        is_row_selected(row: number): boolean;
        /**
         * Gets a boolean value indicating whether the accessible object
         * at the specified `row` and `column` is selected
         * @param row a `gint` representing a row in `table`
         * @param column a `gint` representing a column in `table`
         * @returns a gboolean representing if the cell is selected, or 0 if value does not implement this interface.
         */
        is_selected(row: number, column: number): boolean;
        /**
         * Get a reference to the table cell at `row`, `column`. This cell
         * should implement the interface {@link Atk.TableCell}
         * @param row a `gint` representing a row in `table`
         * @param column a `gint` representing a column in `table`
         * @returns an {@link Atk.Object} representing the referred to accessible
         */
        ref_at(row: number, column: number): Object;
        /**
         * Adds the specified `column` to the selection.
         * @param column a `gint` representing a column in `table`
         * @returns a gboolean representing if the column was successfully removed from the selection, or 0 if value does not implement this interface.
         */
        remove_column_selection(column: number): boolean;
        /**
         * Removes the specified `row` from the selection.
         * @param row a `gint` representing a row in `table`
         * @returns a gboolean representing if the row was successfully removed from the selection, or 0 if value does not implement this interface.
         */
        remove_row_selection(row: number): boolean;
        /**
         * Sets the caption for the table.
         * @param caption a {@link Atk.Object} representing the caption to set for `table`
         */
        set_caption(caption: Object): void;
        /**
         * Sets the description text for the specified `column` of the `table`.
         * @param column a `gint` representing a column in `table`
         * @param description a `gchar` representing the description text to set for the specified `column` of the `table`
         */
        set_column_description(column: number, description: string): void;
        /**
         * Sets the specified column header to `header`.
         * @param column a `gint` representing a column in `table`
         * @param header an {@link Atk.Table}
         */
        set_column_header(column: number, header: Object): void;
        /**
         * Sets the description text for the specified `row` of `table`.
         * @param row a `gint` representing a row in `table`
         * @param description a `gchar` representing the description text to set for the specified `row` of `table`
         */
        set_row_description(row: number, description: string): void;
        /**
         * Sets the specified row header to `header`.
         * @param row a `gint` representing a row in `table`
         * @param header an {@link Atk.Table}
         */
        set_row_header(row: number, header: Object): void;
        /**
         * Sets the summary description of the table.
         * @param accessible an {@link Atk.Object} representing the summary description to set for `table`
         */
        set_summary(accessible: Object): void;
        /**
         * Adds the specified `column` to the selection.
         * @param column a `gint` representing a column in `table`
         * @virtual
         */
        vfunc_add_column_selection(column: number): boolean;
        /**
         * Adds the specified `row` to the selection.
         * @param row a `gint` representing a row in `table`
         * @virtual
         */
        vfunc_add_row_selection(row: number): boolean;
        /**
         * @param column
         * @param num_deleted
         * @virtual
         */
        vfunc_column_deleted(column: number, num_deleted: number): void;
        /**
         * @param column
         * @param num_inserted
         * @virtual
         */
        vfunc_column_inserted(column: number, num_inserted: number): void;
        /**
         * @virtual
         */
        vfunc_column_reordered(): void;
        /**
         * Gets the caption for the `table`.
         * @virtual
         */
        vfunc_get_caption(): Object | null;
        /**
         * Gets a `gint` representing the column at the specified `index_`.
         * @param index_ a `gint` representing an index in `table`
         * @virtual
         */
        vfunc_get_column_at_index(index_: number): number;
        /**
         * Gets the description text of the specified `column` in the table
         * @param column a `gint` representing a column in `table`
         * @virtual
         */
        vfunc_get_column_description(column: number): string;
        /**
         * Gets the number of columns occupied by the accessible object
         * at the specified `row` and `column` in the `table`.
         * @param row a `gint` representing a row in `table`
         * @param column a `gint` representing a column in `table`
         * @virtual
         */
        vfunc_get_column_extent_at(row: number, column: number): number;
        /**
         * Gets the column header of a specified column in an accessible table.
         * @param column a `gint` representing a column in the table
         * @virtual
         */
        vfunc_get_column_header(column: number): Object | null;
        /**
         * Gets a `gint` representing the index at the specified `row` and
         * `column`.
         * @param row a `gint` representing a row in `table`
         * @param column a `gint` representing a column in `table`
         * @virtual
         */
        vfunc_get_index_at(row: number, column: number): number;
        /**
         * Gets the number of columns in the table.
         * @virtual
         */
        vfunc_get_n_columns(): number;
        /**
         * Gets the number of rows in the table.
         * @virtual
         */
        vfunc_get_n_rows(): number;
        /**
         * Gets a `gint` representing the row at the specified `index_`.
         * @param index_ a `gint` representing an index in `table`
         * @virtual
         */
        vfunc_get_row_at_index(index_: number): number;
        /**
         * Gets the description text of the specified row in the table
         * @param row a `gint` representing a row in `table`
         * @virtual
         */
        vfunc_get_row_description(row: number): string | null;
        /**
         * Gets the number of rows occupied by the accessible object
         * at a specified `row` and `column` in the `table`.
         * @param row a `gint` representing a row in `table`
         * @param column a `gint` representing a column in `table`
         * @virtual
         */
        vfunc_get_row_extent_at(row: number, column: number): number;
        /**
         * Gets the row header of a specified row in an accessible table.
         * @param row a `gint` representing a row in the table
         * @virtual
         */
        vfunc_get_row_header(row: number): Object | null;
        /**
         * Gets the selected columns of the table by initializing **selected with
         * the selected column numbers. This array should be freed by the caller.
         * @param selected a `gint`** that is to contain the selected columns numbers
         * @virtual
         */
        vfunc_get_selected_columns(selected: number): number;
        /**
         * Gets the selected rows of the table by initializing **selected with
         * the selected row numbers. This array should be freed by the caller.
         * @param selected a `gint`** that is to contain the selected row numbers
         * @virtual
         */
        vfunc_get_selected_rows(selected: number): number;
        /**
         * Gets the summary description of the table.
         * @virtual
         */
        vfunc_get_summary(): Object;
        /**
         * Gets a boolean value indicating whether the specified `column`
         * is selected
         * @param column a `gint` representing a column in `table`
         * @virtual
         */
        vfunc_is_column_selected(column: number): boolean;
        /**
         * Gets a boolean value indicating whether the specified `row`
         * is selected
         * @param row a `gint` representing a row in `table`
         * @virtual
         */
        vfunc_is_row_selected(row: number): boolean;
        /**
         * Gets a boolean value indicating whether the accessible object
         * at the specified `row` and `column` is selected
         * @param row a `gint` representing a row in `table`
         * @param column a `gint` representing a column in `table`
         * @virtual
         */
        vfunc_is_selected(row: number, column: number): boolean;
        /**
         * @virtual
         */
        vfunc_model_changed(): void;
        /**
         * Get a reference to the table cell at `row`, `column`. This cell
         * should implement the interface {@link Atk.TableCell}
         * @param row a `gint` representing a row in `table`
         * @param column a `gint` representing a column in `table`
         * @virtual
         */
        vfunc_ref_at(row: number, column: number): Object;
        /**
         * Adds the specified `column` to the selection.
         * @param column a `gint` representing a column in `table`
         * @virtual
         */
        vfunc_remove_column_selection(column: number): boolean;
        /**
         * Removes the specified `row` from the selection.
         * @param row a `gint` representing a row in `table`
         * @virtual
         */
        vfunc_remove_row_selection(row: number): boolean;
        /**
         * @param row
         * @param num_deleted
         * @virtual
         */
        vfunc_row_deleted(row: number, num_deleted: number): void;
        /**
         * @param row
         * @param num_inserted
         * @virtual
         */
        vfunc_row_inserted(row: number, num_inserted: number): void;
        /**
         * @virtual
         */
        vfunc_row_reordered(): void;
        /**
         * Sets the caption for the table.
         * @param caption a {@link Atk.Object} representing the caption to set for `table`
         * @virtual
         */
        vfunc_set_caption(caption: Object): void;
        /**
         * Sets the description text for the specified `column` of the `table`.
         * @param column a `gint` representing a column in `table`
         * @param description a `gchar` representing the description text to set for the specified `column` of the `table`
         * @virtual
         */
        vfunc_set_column_description(column: number, description: string): void;
        /**
         * Sets the specified column header to `header`.
         * @param column a `gint` representing a column in `table`
         * @param header an {@link Atk.Table}
         * @virtual
         */
        vfunc_set_column_header(column: number, header: Object): void;
        /**
         * Sets the description text for the specified `row` of `table`.
         * @param row a `gint` representing a row in `table`
         * @param description a `gchar` representing the description text to set for the specified `row` of `table`
         * @virtual
         */
        vfunc_set_row_description(row: number, description: string): void;
        /**
         * Sets the specified row header to `header`.
         * @param row a `gint` representing a row in `table`
         * @param header an {@link Atk.Table}
         * @virtual
         */
        vfunc_set_row_header(row: number, header: Object): void;
        /**
         * Sets the summary description of the table.
         * @param accessible an {@link Atk.Object} representing the summary description to set for `table`
         * @virtual
         */
        vfunc_set_summary(accessible: Object): void;
        /**
         * Returns the column headers as an array of cell accessibles.
         * @returns a GPtrArray of AtkObjects representing the column header cells.
         */
        get_column_header_cells(): Object[];
        /**
         * Returns the number of columns occupied by this cell accessible.
         * @returns a gint representing the number of columns occupied by this cell, or 0 if the cell does not implement this method.
         */
        get_column_span(): number;
        /**
         * Gets the row and column indexes and span of this cell accessible.
         *
         * Note: If the object does not implement this function, then, by default, atk
         * will implement this function by calling get_row_span and get_column_span
         * on the object.
         * @returns TRUE if successful; FALSE otherwise.
         */
        get_row_column_span(): [boolean, number, number, number, number];
        /**
         * Returns the row headers as an array of cell accessibles.
         * @returns a GPtrArray of AtkObjects representing the row header cells.
         */
        get_row_header_cells(): Object[];
        /**
         * Returns the number of rows occupied by this cell accessible.
         * @returns a gint representing the number of rows occupied by this cell, or 0 if the cell does not implement this method.
         */
        get_row_span(): number;
        /**
         * Returns a reference to the accessible of the containing table.
         * @returns the atk object for the containing table.
         */
        get_table(): Object;
        /**
         * Returns the column headers as an array of cell accessibles.
         * @virtual
         */
        vfunc_get_column_header_cells(): Object[];
        /**
         * Returns the number of columns occupied by this cell accessible.
         * @virtual
         */
        vfunc_get_column_span(): number;
        /**
         * Gets the row and column indexes and span of this cell accessible.
         *
         * Note: If the object does not implement this function, then, by default, atk
         * will implement this function by calling get_row_span and get_column_span
         * on the object.
         * @virtual
         */
        vfunc_get_row_column_span(): [boolean, number, number, number, number];
        /**
         * Returns the row headers as an array of cell accessibles.
         * @virtual
         */
        vfunc_get_row_header_cells(): Object[];
        /**
         * Returns the number of rows occupied by this cell accessible.
         * @virtual
         */
        vfunc_get_row_span(): number;
        /**
         * Returns a reference to the accessible of the containing table.
         * @virtual
         */
        vfunc_get_table(): Object;
        /**
         * Get the ranges of text in the specified bounding box.
         * @param rect An AtkTextRectangle giving the dimensions of the bounding box.
         * @param coord_type Specify whether coordinates are relative to the screen or widget window.
         * @param x_clip_type Specify the horizontal clip type.
         * @param y_clip_type Specify the vertical clip type.
         * @returns Array of AtkTextRange. The last          element of the array returned by this function will be NULL.
         */
        get_bounded_ranges(
            rect: TextRectangle,
            coord_type: CoordType | null,
            x_clip_type: TextClipType | null,
            y_clip_type: TextClipType | null,
        ): TextRange[];
        /**
         * Gets the offset of the position of the caret (cursor).
         * @returns the character offset of the position of the caret or -1 if          the caret is not located inside the element or in the case of          any other failure.
         */
        get_caret_offset(): number;
        /**
         * Gets the specified text.
         * @param offset a character offset within `text`
         * @returns the character at `offset` or 0 in the case of failure.
         */
        get_character_at_offset(offset: number): string;
        /**
         * Gets the character count.
         * @returns the number of characters or -1 in case of failure.
         */
        get_character_count(): number;
        /**
         * If the extent can not be obtained (e.g. missing support), all of x, y, width,
         * height are set to -1.
         *
         * Get the bounding box containing the glyph representing the character at
         *     a particular text offset.
         * @param offset The offset of the text character for which bounding information is required.
         * @param coords specify whether coordinates are relative to the screen or widget window
         */
        get_character_extents(offset: number, coords: CoordType | null): [number, number, number, number];
        /**
         * Creates an {@link Atk.AttributeSet} which consists of the default values of
         * attributes for the text. See the enum AtkTextAttribute for types of text
         * attributes that can be returned. Note that other attributes may also be
         * returned.
         * @returns an {@link Atk.AttributeSet} which contains the default text          attributes for this {@link Atk.Text}. This {@link Atk.AttributeSet} should be freed by          a call to `atk_attribute_set_free()`.
         */
        get_default_attributes(): AttributeSet;
        /**
         * Gets the number of selected regions.
         * @returns The number of selected regions, or -1 in the case of failure.
         */
        get_n_selections(): number;
        /**
         * Gets the offset of the character located at coordinates `x` and `y`. `x` and `y`
         * are interpreted as being relative to the screen or this widget's window
         * depending on `coords`.
         * @param x screen x-position of character
         * @param y screen y-position of character
         * @param coords specify whether coordinates are relative to the screen or widget window
         * @returns the offset to the character which is located at  the specified          `x` and `y` coordinates of -1 in case of failure.
         */
        get_offset_at_point(x: number, y: number, coords: CoordType | null): number;
        /**
         * Get the bounding box for text within the specified range.
         *
         * If the extents can not be obtained (e.g. or missing support), the rectangle
         * fields are set to -1.
         * @param start_offset The offset of the first text character for which boundary        information is required.
         * @param end_offset The offset of the text character after the last character        for which boundary information is required.
         * @param coord_type Specify whether coordinates are relative to the screen or widget window.
         */
        get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType | null): TextRectangle;
        /**
         * Creates an {@link Atk.AttributeSet} which consists of the attributes explicitly
         * set at the position `offset` in the text. `start_offset` and `end_offset` are
         * set to the start and end of the range around `offset` where the attributes are
         * invariant. Note that `end_offset` is the offset of the first character
         * after the range.  See the enum AtkTextAttribute for types of text
         * attributes that can be returned. Note that other attributes may also be
         * returned.
         * @param offset the character offset at which to get the attributes, -1 means the offset of the character to be inserted at the caret location.
         * @returns an {@link Atk.AttributeSet} which contains the attributes         explicitly set at `offset`. This {@link Atk.AttributeSet} should be freed by         a call to `atk_attribute_set_free()`.
         */
        get_run_attributes(offset: number): [AttributeSet, number, number];
        /**
         * Gets the text from the specified selection.
         * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
         * @returns a newly allocated string containing the selected text. Use `g_free()`          to free the returned string.
         */
        get_selection(selection_num: number): [string, number, number];
        /**
         * Gets a portion of the text exposed through an {@link Atk.Text} according to a given `offset`
         * and a specific `granularity`, along with the start and end offsets defining the
         * boundaries of such a portion of text.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_CHAR the character at the
         * offset is returned.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_WORD the returned string
         * is from the word start at or before the offset to the word start after
         * the offset.
         *
         * The returned string will contain the word at the offset if the offset
         * is inside a word and will contain the word before the offset if the
         * offset is not inside a word.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_SENTENCE the returned string
         * is from the sentence start at or before the offset to the sentence
         * start after the offset.
         *
         * The returned string will contain the sentence at the offset if the offset
         * is inside a sentence and will contain the sentence before the offset
         * if the offset is not inside a sentence.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_LINE the returned string
         * is from the line start at or before the offset to the line
         * start after the offset.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_PARAGRAPH the returned string
         * is from the start of the paragraph at or before the offset to the start
         * of the following paragraph after the offset.
         * @param offset position
         * @param granularity An {@link Atk.TextGranularity}
         * @returns a newly allocated string containing the text at          the `offset` bounded by the specified `granularity`. Use `g_free()`          to free the returned string.  Returns `null` if the offset is invalid          or no implementation is available.
         */
        get_string_at_offset(offset: number, granularity: TextGranularity | null): [string | null, number, number];
        /**
         * Gets the specified text.
         * @param start_offset a starting character offset within `text`
         * @param end_offset an ending character offset within `text`, or -1 for the end of the string.
         * @returns a newly allocated string containing the text from `start_offset` up          to, but not including `end_offset`. Use `g_free()` to free the returned          string.
         */
        get_text(start_offset: number, end_offset: number): string;
        /**
         * Gets the specified text.
         * @param offset position
         * @param boundary_type An {@link Atk.TextBoundary}
         * @returns a newly allocated string containing the text after `offset` bounded          by the specified `boundary_type`. Use `g_free()` to free the returned          string.
         */
        get_text_after_offset(offset: number, boundary_type: TextBoundary | null): [string, number, number];
        /**
         * Gets the specified text.
         *
         * If the boundary_type if ATK_TEXT_BOUNDARY_CHAR the character at the
         * offset is returned.
         *
         * If the boundary_type is ATK_TEXT_BOUNDARY_WORD_START the returned string
         * is from the word start at or before the offset to the word start after
         * the offset.
         *
         * The returned string will contain the word at the offset if the offset
         * is inside a word and will contain the word before the offset if the
         * offset is not inside a word.
         *
         * If the boundary type is ATK_TEXT_BOUNDARY_SENTENCE_START the returned
         * string is from the sentence start at or before the offset to the sentence
         * start after the offset.
         *
         * The returned string will contain the sentence at the offset if the offset
         * is inside a sentence and will contain the sentence before the offset
         * if the offset is not inside a sentence.
         *
         * If the boundary type is ATK_TEXT_BOUNDARY_LINE_START the returned
         * string is from the line start at or before the offset to the line
         * start after the offset.
         * @param offset position
         * @param boundary_type An {@link Atk.TextBoundary}
         * @returns a newly allocated string containing the text at `offset` bounded          by the specified `boundary_type`. Use `g_free()` to free the returned          string.
         */
        get_text_at_offset(offset: number, boundary_type: TextBoundary | null): [string, number, number];
        /**
         * Gets the specified text.
         * @param offset position
         * @param boundary_type An {@link Atk.TextBoundary}
         * @returns a newly allocated string containing the text before `offset` bounded          by the specified `boundary_type`. Use `g_free()` to free the returned          string.
         */
        get_text_before_offset(offset: number, boundary_type: TextBoundary | null): [string, number, number];
        /**
         * Makes a substring of `text` visible on the screen by scrolling all necessary parents.
         * @param start_offset start offset in the `text`
         * @param end_offset end offset in the `text`, or -1 for the end of the text.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType | null): boolean;
        /**
         * Move the top-left of a substring of `text` to a given position of the screen
         * by scrolling all necessary parents.
         * @param start_offset start offset in the `text`
         * @param end_offset end offset in the `text`, or -1 for the end of the text.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_substring_to_point(
            start_offset: number,
            end_offset: number,
            coords: CoordType | null,
            x: number,
            y: number,
        ): boolean;
        /**
         * Sets the caret (cursor) position to the specified `offset`.
         *
         * In the case of rich-text content, this method should either grab focus
         * or move the sequential focus navigation starting point (if the application
         * supports this concept) as if the user had clicked on the new caret position.
         * Typically, this means that the target of this operation is the node containing
         * the new caret position or one of its ancestors. In other words, after this
         * method is called, if the user advances focus, it should move to the first
         * focusable node following the new caret position.
         *
         * Calling this method should also scroll the application viewport in a way
         * that matches the behavior of the application's typical caret motion or tab
         * navigation as closely as possible. This also means that if the application's
         * caret motion or focus navigation does not trigger a scroll operation, this
         * method should not trigger one either. If the application does not have a caret
         * motion or focus navigation operation, this method should try to scroll the new
         * caret position into view while minimizing unnecessary scroll motion.
         * @param offset the character offset of the new caret position
         * @returns `true` if successful, `false` otherwise.
         */
        set_caret_offset(offset: number): boolean;
        /**
         * Changes the start and end offset of the specified selection.
         * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
         * @param start_offset the new starting character offset of the selection
         * @param end_offset the new end position of (e.g. offset immediately past) the selection
         * @returns `true` if successful, `false` otherwise
         */
        set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
        /**
         * Get the ranges of text in the specified bounding box.
         * @param rect An AtkTextRectangle giving the dimensions of the bounding box.
         * @param coord_type Specify whether coordinates are relative to the screen or widget window.
         * @param x_clip_type Specify the horizontal clip type.
         * @param y_clip_type Specify the vertical clip type.
         * @virtual
         */
        vfunc_get_bounded_ranges(
            rect: TextRectangle,
            coord_type: CoordType,
            x_clip_type: TextClipType,
            y_clip_type: TextClipType,
        ): TextRange[];
        /**
         * Gets the offset of the position of the caret (cursor).
         * @virtual
         */
        vfunc_get_caret_offset(): number;
        /**
         * Gets the specified text.
         * @param offset a character offset within `text`
         * @virtual
         */
        vfunc_get_character_at_offset(offset: number): string;
        /**
         * Gets the character count.
         * @virtual
         */
        vfunc_get_character_count(): number;
        /**
         * If the extent can not be obtained (e.g. missing support), all of x, y, width,
         * height are set to -1.
         *
         * Get the bounding box containing the glyph representing the character at
         *     a particular text offset.
         * @param offset The offset of the text character for which bounding information is required.
         * @param coords specify whether coordinates are relative to the screen or widget window
         * @virtual
         */
        vfunc_get_character_extents(offset: number, coords: CoordType): [number, number, number, number];
        /**
         * Creates an {@link Atk.AttributeSet} which consists of the default values of
         * attributes for the text. See the enum AtkTextAttribute for types of text
         * attributes that can be returned. Note that other attributes may also be
         * returned.
         * @virtual
         */
        vfunc_get_default_attributes(): AttributeSet;
        /**
         * Gets the number of selected regions.
         * @virtual
         */
        vfunc_get_n_selections(): number;
        /**
         * Gets the offset of the character located at coordinates `x` and `y`. `x` and `y`
         * are interpreted as being relative to the screen or this widget's window
         * depending on `coords`.
         * @param x screen x-position of character
         * @param y screen y-position of character
         * @param coords specify whether coordinates are relative to the screen or widget window
         * @virtual
         */
        vfunc_get_offset_at_point(x: number, y: number, coords: CoordType): number;
        /**
         * Get the bounding box for text within the specified range.
         *
         * If the extents can not be obtained (e.g. or missing support), the rectangle
         * fields are set to -1.
         * @param start_offset The offset of the first text character for which boundary        information is required.
         * @param end_offset The offset of the text character after the last character        for which boundary information is required.
         * @param coord_type Specify whether coordinates are relative to the screen or widget window.
         * @virtual
         */
        vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType): TextRectangle;
        /**
         * Creates an {@link Atk.AttributeSet} which consists of the attributes explicitly
         * set at the position `offset` in the text. `start_offset` and `end_offset` are
         * set to the start and end of the range around `offset` where the attributes are
         * invariant. Note that `end_offset` is the offset of the first character
         * after the range.  See the enum AtkTextAttribute for types of text
         * attributes that can be returned. Note that other attributes may also be
         * returned.
         * @param offset the character offset at which to get the attributes, -1 means the offset of the character to be inserted at the caret location.
         * @virtual
         */
        vfunc_get_run_attributes(offset: number): [AttributeSet, number, number];
        /**
         * Gets the text from the specified selection.
         * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
         * @virtual
         */
        vfunc_get_selection(selection_num: number): [string, number, number];
        /**
         * Gets a portion of the text exposed through an {@link Atk.Text} according to a given `offset`
         * and a specific `granularity`, along with the start and end offsets defining the
         * boundaries of such a portion of text.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_CHAR the character at the
         * offset is returned.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_WORD the returned string
         * is from the word start at or before the offset to the word start after
         * the offset.
         *
         * The returned string will contain the word at the offset if the offset
         * is inside a word and will contain the word before the offset if the
         * offset is not inside a word.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_SENTENCE the returned string
         * is from the sentence start at or before the offset to the sentence
         * start after the offset.
         *
         * The returned string will contain the sentence at the offset if the offset
         * is inside a sentence and will contain the sentence before the offset
         * if the offset is not inside a sentence.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_LINE the returned string
         * is from the line start at or before the offset to the line
         * start after the offset.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_PARAGRAPH the returned string
         * is from the start of the paragraph at or before the offset to the start
         * of the following paragraph after the offset.
         * @param offset position
         * @param granularity An {@link Atk.TextGranularity}
         * @virtual
         */
        vfunc_get_string_at_offset(offset: number, granularity: TextGranularity): [string | null, number, number];
        /**
         * Gets the specified text.
         * @param start_offset a starting character offset within `text`
         * @param end_offset an ending character offset within `text`, or -1 for the end of the string.
         * @virtual
         */
        vfunc_get_text(start_offset: number, end_offset: number): string;
        /**
         * Gets the specified text.
         * @param offset position
         * @param boundary_type An {@link Atk.TextBoundary}
         * @virtual
         */
        vfunc_get_text_after_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
        /**
         * Gets the specified text.
         *
         * If the boundary_type if ATK_TEXT_BOUNDARY_CHAR the character at the
         * offset is returned.
         *
         * If the boundary_type is ATK_TEXT_BOUNDARY_WORD_START the returned string
         * is from the word start at or before the offset to the word start after
         * the offset.
         *
         * The returned string will contain the word at the offset if the offset
         * is inside a word and will contain the word before the offset if the
         * offset is not inside a word.
         *
         * If the boundary type is ATK_TEXT_BOUNDARY_SENTENCE_START the returned
         * string is from the sentence start at or before the offset to the sentence
         * start after the offset.
         *
         * The returned string will contain the sentence at the offset if the offset
         * is inside a sentence and will contain the sentence before the offset
         * if the offset is not inside a sentence.
         *
         * If the boundary type is ATK_TEXT_BOUNDARY_LINE_START the returned
         * string is from the line start at or before the offset to the line
         * start after the offset.
         * @param offset position
         * @param boundary_type An {@link Atk.TextBoundary}
         * @virtual
         */
        vfunc_get_text_at_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
        /**
         * Gets the specified text.
         * @param offset position
         * @param boundary_type An {@link Atk.TextBoundary}
         * @virtual
         */
        vfunc_get_text_before_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
        /**
         * Makes a substring of `text` visible on the screen by scrolling all necessary parents.
         * @param start_offset start offset in the `text`
         * @param end_offset end offset in the `text`, or -1 for the end of the text.
         * @param type specify where the object should be made visible.
         * @virtual
         */
        vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
        /**
         * Move the top-left of a substring of `text` to a given position of the screen
         * by scrolling all necessary parents.
         * @param start_offset start offset in the `text`
         * @param end_offset end offset in the `text`, or -1 for the end of the text.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @virtual
         */
        vfunc_scroll_substring_to_point(
            start_offset: number,
            end_offset: number,
            coords: CoordType,
            x: number,
            y: number,
        ): boolean;
        /**
         * Sets the caret (cursor) position to the specified `offset`.
         *
         * In the case of rich-text content, this method should either grab focus
         * or move the sequential focus navigation starting point (if the application
         * supports this concept) as if the user had clicked on the new caret position.
         * Typically, this means that the target of this operation is the node containing
         * the new caret position or one of its ancestors. In other words, after this
         * method is called, if the user advances focus, it should move to the first
         * focusable node following the new caret position.
         *
         * Calling this method should also scroll the application viewport in a way
         * that matches the behavior of the application's typical caret motion or tab
         * navigation as closely as possible. This also means that if the application's
         * caret motion or focus navigation does not trigger a scroll operation, this
         * method should not trigger one either. If the application does not have a caret
         * motion or focus navigation operation, this method should try to scroll the new
         * caret position into view while minimizing unnecessary scroll motion.
         * @param offset the character offset of the new caret position
         * @virtual
         */
        vfunc_set_caret_offset(offset: number): boolean;
        /**
         * Changes the start and end offset of the specified selection.
         * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
         * @param start_offset the new starting character offset of the selection
         * @param end_offset the new end position of (e.g. offset immediately past) the selection
         * @virtual
         */
        vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
        /**
         * @virtual
         */
        vfunc_text_attributes_changed(): void;
        /**
         * @param location
         * @virtual
         */
        vfunc_text_caret_moved(location: number): void;
        /**
         * the signal handler which is executed when there is a
         *   text change. This virtual function is deprecated sice 2.9.4 and
         *   it should not be overriden.
         * @param position
         * @param length
         * @virtual
         */
        vfunc_text_changed(position: number, length: number): void;
        /**
         * @virtual
         */
        vfunc_text_selection_changed(): void;
        /**
         * Gets the value of this object.
         */
        get_current_value(): unknown;
        /**
         * Gets the minimum increment by which the value of this object may be
         * changed.  If zero, the minimum increment is undefined, which may
         * mean that it is limited only by the floating point precision of the
         * platform.
         * @returns the minimum increment by which the value of this object may be changed. zero if undefined.
         */
        get_increment(): number;
        /**
         * Gets the maximum value of this object.
         */
        get_maximum_value(): unknown;
        /**
         * Gets the minimum increment by which the value of this object may be changed.  If zero,
         * the minimum increment is undefined, which may mean that it is limited only by the
         * floating point precision of the platform.
         */
        get_minimum_increment(): unknown;
        /**
         * Gets the minimum value of this object.
         */
        get_minimum_value(): unknown;
        /**
         * Gets the range of this object.
         * @returns a newly allocated {@link Atk.Range} that represents the minimum, maximum and descriptor (if available) of `obj`. NULL if that range is not defined.
         */
        get_range(): Range | null;
        /**
         * Gets the list of subranges defined for this object. See {@link Atk.Value}
         * introduction for examples of subranges and when to expose them.
         * @returns an {@link GLib.SList} of {@link Atk.Range} which each of the subranges defined for this object. Free the returns list with `g_slist_free()`.
         */
        get_sub_ranges(): Range[];
        /**
         * Gets the current value and the human readable text alternative of
         * `obj`. `text` is a newly created string, that must be freed by the
         * caller. Can be NULL if no descriptor is available.
         */
        get_value_and_text(): [number, string];
        /**
         * Sets the value of this object.
         * @param value a {@link GObject.Value} which is the desired new accessible value.
         * @returns `true` if new value is successfully set, `false` otherwise.
         */
        set_current_value(value: GObject.Value | any): boolean;
        /**
         * Sets the value of this object.
         *
         * This method is intended to provide a way to change the value of the
         * object. In any case, it is possible that the value can't be
         * modified (ie: a read-only component). If the value changes due this
         * call, it is possible that the text could change, and will trigger
         * an {@link Atk.Value.SignalSignatures.value_changed | Atk.Value::value-changed} signal emission.
         *
         * Note for implementors: the deprecated `atk_value_set_current_value()`
         * method returned TRUE or FALSE depending if the value was assigned
         * or not. In the practice several implementors were not able to
         * decide it, and returned TRUE in any case. For that reason it is not
         * required anymore to return if the value was properly assigned or
         * not.
         * @param new_value a double which is the desired new accessible value.
         */
        set_value(new_value: number): void;
        /**
         * Gets the value of this object.
         * @virtual
         */
        vfunc_get_current_value(): unknown;
        /**
         * Gets the minimum increment by which the value of this object may be
         * changed.  If zero, the minimum increment is undefined, which may
         * mean that it is limited only by the floating point precision of the
         * platform.
         * @virtual
         */
        vfunc_get_increment(): number;
        /**
         * Gets the maximum value of this object.
         * @virtual
         */
        vfunc_get_maximum_value(): unknown;
        /**
         * Gets the minimum increment by which the value of this object may be changed.  If zero,
         * the minimum increment is undefined, which may mean that it is limited only by the
         * floating point precision of the platform.
         * @virtual
         */
        vfunc_get_minimum_increment(): unknown;
        /**
         * Gets the minimum value of this object.
         * @virtual
         */
        vfunc_get_minimum_value(): unknown;
        /**
         * Gets the range of this object.
         * @virtual
         */
        vfunc_get_range(): Range | null;
        /**
         * Gets the list of subranges defined for this object. See {@link Atk.Value}
         * introduction for examples of subranges and when to expose them.
         * @virtual
         */
        vfunc_get_sub_ranges(): Range[];
        /**
         * Gets the current value and the human readable text alternative of
         * `obj`. `text` is a newly created string, that must be freed by the
         * caller. Can be NULL if no descriptor is available.
         * @virtual
         */
        vfunc_get_value_and_text(): [number, string];
        /**
         * Sets the value of this object.
         * @param value a {@link GObject.Value} which is the desired new accessible value.
         * @virtual
         */
        vfunc_set_current_value(value: GObject.Value | any): boolean;
        /**
         * Sets the value of this object.
         *
         * This method is intended to provide a way to change the value of the
         * object. In any case, it is possible that the value can't be
         * modified (ie: a read-only component). If the value changes due this
         * call, it is possible that the text could change, and will trigger
         * an {@link Atk.Value.SignalSignatures.value_changed | Atk.Value::value-changed} signal emission.
         *
         * Note for implementors: the deprecated `atk_value_set_current_value()`
         * method returned TRUE or FALSE depending if the value was assigned
         * or not. In the practice several implementors were not able to
         * decide it, and returned TRUE in any case. For that reason it is not
         * required anymore to return if the value was properly assigned or
         * not.
         * @param new_value a double which is the desired new accessible value.
         * @virtual
         */
        vfunc_set_value(new_value: number): void;
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
         * a [floating][floating-ref] object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating][floating-ref] reference.
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
         * [floating][floating-ref] reference, if `object` has a floating reference.
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
        /**
         * Adds a relationship of the specified type with the specified target.
         * @param relationship The {@link Atk.RelationType} of the relation
         * @param target The {@link Atk.Object} which is to be the target of the relation.
         * @returns TRUE if the relationship is added.
         */
        add_relationship(relationship: RelationType | null, target: Object): boolean;
        /**
         * Gets the accessible id of the accessible.
         * @returns a character string representing the accessible id of the object, or NULL if no such string was set.
         */
        get_accessible_id(): string;
        /**
         * Gets the help text associated with the accessible.
         * @returns a character string representing the help text or the object, or NULL if no such string was set.
         */
        get_help_text(): string;
        /**
         * Gets the 0-based index of this accessible in its parent; returns -1 if the
         * accessible does not have an accessible parent.
         * @returns an integer which is the index of the accessible in its parent
         */
        get_index_in_parent(): number;
        /**
         * Gets the number of accessible children of the accessible.
         * @returns an integer representing the number of accessible children of the accessible.
         */
        get_n_accessible_children(): number;
        /**
         * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
         * of `accessible`.
         * @returns a UTF-8 string indicating the POSIX-style LC_MESSAGES          locale of `accessible`.
         */
        get_object_locale(): string;
        /**
         * Gets the accessible parent of the accessible. By default this is
         * the one assigned with `atk_object_set_parent()`, but it is assumed
         * that ATK implementors have ways to get the parent of the object
         * without the need of assigning it manually with
         * `atk_object_set_parent()`, and will return it with this method.
         *
         * If you are only interested on the parent assigned with
         * `atk_object_set_parent()`, use `atk_object_peek_parent()`.
         * @returns an {@link Atk.Object} representing the accessible parent of the accessible
         */
        get_parent(): Object;
        /**
         * Gets the role of the accessible.
         * @returns an {@link Atk.Role} which is the role of the accessible
         */
        get_role(): Role;
        /**
         * This function is called when implementing subclasses of {@link Atk.Object}.
         * It does initialization required for the new object. It is intended
         * that this function should called only in the ..._new() functions used
         * to create an instance of a subclass of {@link Atk.Object}
         * @param data a `gpointer` which identifies the object for which the AtkObject was created.
         */
        initialize(data?: any | null): void;
        /**
         * Emits a state-change signal for the specified state.
         *
         * Note that as a general rule when the state of an existing object changes,
         * emitting a notification is expected.
         * @param state an {@link Atk.State} whose state is changed
         * @param value a gboolean which indicates whether the state is being set on or off
         */
        notify_state_change(state: State, value: boolean): void;
        /**
         * Gets the accessible parent of the accessible, if it has been
         * manually assigned with atk_object_set_parent. Otherwise, this
         * function returns `null`.
         *
         * This method is intended as an utility for ATK implementors, and not
         * to be exposed to accessible tools. See `atk_object_get_parent()` for
         * further reference.
         * @returns an {@link Atk.Object} representing the accessible parent of the accessible if assigned
         */
        peek_parent(): Object;
        /**
         * Gets a reference to the specified accessible child of the object.
         * The accessible children are 0-based so the first accessible child is
         * at index 0, the second at index 1 and so on.
         * @param i a gint representing the position of the child, starting from 0
         * @returns an {@link Atk.Object} representing the specified accessible child of the accessible.
         */
        ref_accessible_child(i: number): Object;
        /**
         * Gets the {@link Atk.RelationSet} associated with the object.
         * @returns an {@link Atk.RelationSet} representing the relation set of the object.
         */
        ref_relation_set(): RelationSet;
        /**
         * Gets a reference to the state set of the accessible; the caller must
         * unreference it when it is no longer needed.
         * @returns a reference to an {@link Atk.StateSet} which is the state set of the accessible
         */
        ref_state_set(): StateSet;
        /**
         * Removes a property change handler.
         * @param handler_id a guint which identifies the handler to be removed.
         */
        remove_property_change_handler(handler_id: number): void;
        /**
         * Removes a relationship of the specified type with the specified target.
         * @param relationship The {@link Atk.RelationType} of the relation
         * @param target The {@link Atk.Object} which is the target of the relation to be removed.
         * @returns TRUE if the relationship is removed.
         */
        remove_relationship(relationship: RelationType | null, target: Object): boolean;
        /**
         * Sets the accessible ID of the accessible.  This is not meant to be presented
         * to the user, but to be an ID which is stable over application development.
         * Typically, this is the gtkbuilder ID. Such an ID will be available for
         * instance to identify a given well-known accessible object for tailored screen
         * reading, or for automatic regression testing.
         * @param id a character string to be set as the accessible id
         */
        set_accessible_id(id: string): void;
        /**
         * Sets the help text associated with the accessible. This can be used to
         * expose context-sensitive information to help a user understand how to
         * interact with the object. You can't set the help text to NULL.
         * This is reserved for the initial value. If you want to set the name to
         * an empty value, you can use "".
         * @param help_text a character string to be set as the accessible's help text
         */
        set_help_text(help_text: string): void;
        /**
         * Sets the accessible name of the accessible. You can't set the name
         * to NULL. This is reserved for the initial value. In this aspect
         * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
         * a empty value you can use "".
         * @param name a character string to be set as the accessible name
         */
        set_name(name: string): void;
        /**
         * Sets the accessible parent of the accessible. `parent` can be NULL.
         * @param parent an {@link Atk.Object} to be set as the accessible parent
         */
        set_parent(parent: Object): void;
        /**
         * Sets the role of the accessible.
         * @param role an {@link Atk.Role} to be set as the role
         */
        set_role(role: Role | null): void;
        /**
         * @param child
         * @virtual
         */
        vfunc_active_descendant_changed(child?: any | null): void;
        /**
         * @param change_index
         * @param changed_child
         * @virtual
         */
        vfunc_children_changed(change_index: number, changed_child?: any | null): void;
        /**
         * The signal handler which is executed when there is a
         *   focus event for an object. This virtual function is deprecated
         *   since 2.9.4 and it should not be overriden. Use
         *   the {@link Atk.Object.SignalSignatures.state_change | Atk.Object::state-change} "focused" signal instead.
         * @param focus_in
         * @virtual
         */
        vfunc_focus_event(focus_in: boolean): void;
        /**
         * Get a list of properties applied to this object as a whole, as an {@link Atk.AttributeSet} consisting of
         * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
         * as distinct from strongly-typed object data available via other get/set methods.
         * Not all objects have explicit "name-value pair" {@link Atk.AttributeSet} properties.
         * @virtual
         */
        vfunc_get_attributes(): AttributeSet;
        /**
         * Gets the 0-based index of this accessible in its parent; returns -1 if the
         * accessible does not have an accessible parent.
         * @virtual
         */
        vfunc_get_index_in_parent(): number;
        /**
         * @virtual
         */
        vfunc_get_n_children(): number;
        /**
         * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
         * of `accessible`.
         * @virtual
         */
        vfunc_get_object_locale(): string;
        /**
         * Gets the accessible parent of the accessible. By default this is
         * the one assigned with `atk_object_set_parent()`, but it is assumed
         * that ATK implementors have ways to get the parent of the object
         * without the need of assigning it manually with
         * `atk_object_set_parent()`, and will return it with this method.
         *
         * If you are only interested on the parent assigned with
         * `atk_object_set_parent()`, use `atk_object_peek_parent()`.
         * @virtual
         */
        vfunc_get_parent(): Object;
        /**
         * Gets the role of the accessible.
         * @virtual
         */
        vfunc_get_role(): Role;
        /**
         * This function is called when implementing subclasses of {@link Atk.Object}.
         * It does initialization required for the new object. It is intended
         * that this function should called only in the ..._new() functions used
         * to create an instance of a subclass of {@link Atk.Object}
         * @param data a `gpointer` which identifies the object for which the AtkObject was created.
         * @virtual
         */
        vfunc_initialize(data?: any | null): void;
        /**
         * @param values
         * @virtual
         */
        vfunc_property_change(values: PropertyValues): void;
        /**
         * Gets the {@link Atk.RelationSet} associated with the object.
         * @virtual
         */
        vfunc_ref_relation_set(): RelationSet;
        /**
         * Gets a reference to the state set of the accessible; the caller must
         * unreference it when it is no longer needed.
         * @virtual
         */
        vfunc_ref_state_set(): StateSet;
        /**
         * Removes a property change handler.
         * @param handler_id a guint which identifies the handler to be removed.
         * @virtual
         */
        vfunc_remove_property_change_handler(handler_id: number): void;
        /**
         * Sets the accessible name of the accessible. You can't set the name
         * to NULL. This is reserved for the initial value. In this aspect
         * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
         * a empty value you can use "".
         * @param name a character string to be set as the accessible name
         * @virtual
         */
        vfunc_set_name(name: string): void;
        /**
         * Sets the accessible parent of the accessible. `parent` can be NULL.
         * @param parent an {@link Atk.Object} to be set as the accessible parent
         * @virtual
         */
        vfunc_set_parent(parent: Object): void;
        /**
         * Sets the role of the accessible.
         * @param role an {@link Atk.Role} to be set as the role
         * @virtual
         */
        vfunc_set_role(role: Role): void;
        /**
         * @param name
         * @param state_set
         * @virtual
         */
        vfunc_state_change(name: string, state_set: boolean): void;
        /**
         * @virtual
         */
        vfunc_visible_data_changed(): void;
    }

    namespace NoOpObjectFactory {
        // Signal signatures
        interface SignalSignatures extends ObjectFactory.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ObjectFactory.ConstructorProps {}
    }

    /**
     * The AtkObjectFactory which creates an AtkNoOpObject.
     *
     * The AtkObjectFactory which creates an AtkNoOpObject. An instance of
     * this is created by an AtkRegistry if no factory type has not been
     * specified to create an accessible object of a particular type.
     * @gir-type Class
     */
    class NoOpObjectFactory extends ObjectFactory {
        static $gtype: GObject.GType<NoOpObjectFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NoOpObjectFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NoOpObjectFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NoOpObjectFactory;

        // Signals

        /** @signal */
        connect<K extends keyof NoOpObjectFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NoOpObjectFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof NoOpObjectFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NoOpObjectFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof NoOpObjectFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NoOpObjectFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed': (arg0: Object) => void;
            /**
             * The "announcement" signal can be emitted to pass an announcement on to
             * be read by a screen reader.
             *
             * Depcrecated (2.50): Use AtkObject::notification instead.
             * @signal
             * @since 2.46
             * @run-last
             */
            announcement: (arg0: string) => void;
            /**
             * The "attribute-changed" signal should be emitted when one of an object's
             * attributes changes.
             * @signal
             * @since 2.52
             * @run-last
             */
            'attribute-changed': (arg0: string, arg1: string) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed': (arg0: number, arg1: Object) => void;
            /**
             * The signal "focus-event" is emitted when an object gained or lost
             * focus.
             * @signal
             * @deprecated since 2.9.4: Use the {@link Atk.Object.SignalSignatures.state_change | Atk.Object::state-change} signal instead.
             * @run-last
             */
            'focus-event': (arg0: boolean) => void;
            /**
             * The "notification" signal can be emitted to pass an announcement on to
             * be read by a screen reader.
             * @signal
             * @since 2.50
             * @run-last
             */
            notification: (arg0: string, arg1: number) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change': (arg0: PropertyValues) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change': (arg0: string, arg1: boolean) => void;
            /**
             * The "visible-data-changed" signal is emitted when the visual
             * appearance of the object changed.
             * @signal
             * @run-last
             */
            'visible-data-changed': () => void;
            'notify::accessible-component-layer': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-component-mdi-zorder': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-help-text': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-hypertext-nlinks': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-id': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-parent': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption-object': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-summary': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-value': (pspec: GObject.ParamSpec) => void;
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed::accessible-component-layer': (arg0: Object) => void;
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed::accessible-component-mdi-zorder': (arg0: Object) => void;
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed::accessible-description': (arg0: Object) => void;
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed::accessible-help-text': (arg0: Object) => void;
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed::accessible-hypertext-nlinks': (arg0: Object) => void;
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed::accessible-id': (arg0: Object) => void;
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed::accessible-name': (arg0: Object) => void;
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed::accessible-parent': (arg0: Object) => void;
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed::accessible-role': (arg0: Object) => void;
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed::accessible-table-caption': (arg0: Object) => void;
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed::accessible-table-caption-object': (arg0: Object) => void;
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed::accessible-table-column-description': (arg0: Object) => void;
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed::accessible-table-column-header': (arg0: Object) => void;
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed::accessible-table-row-description': (arg0: Object) => void;
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed::accessible-table-row-header': (arg0: Object) => void;
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed::accessible-table-summary': (arg0: Object) => void;
            /**
             * The "active-descendant-changed" signal is emitted by an object
             * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
             * object in the object changes. For instance, a table will emit the
             * signal when the cell in the table which has focus changes.
             * @signal
             * @detailed
             * @run-last
             */
            'active-descendant-changed::accessible-value': (arg0: Object) => void;
            [key: `active-descendant-changed::${string}`]: (arg0: Object) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed::accessible-component-layer': (arg0: number, arg1: Object) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed::accessible-component-mdi-zorder': (arg0: number, arg1: Object) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed::accessible-description': (arg0: number, arg1: Object) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed::accessible-help-text': (arg0: number, arg1: Object) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed::accessible-hypertext-nlinks': (arg0: number, arg1: Object) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed::accessible-id': (arg0: number, arg1: Object) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed::accessible-name': (arg0: number, arg1: Object) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed::accessible-parent': (arg0: number, arg1: Object) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed::accessible-role': (arg0: number, arg1: Object) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed::accessible-table-caption': (arg0: number, arg1: Object) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed::accessible-table-caption-object': (arg0: number, arg1: Object) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed::accessible-table-column-description': (arg0: number, arg1: Object) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed::accessible-table-column-header': (arg0: number, arg1: Object) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed::accessible-table-row-description': (arg0: number, arg1: Object) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed::accessible-table-row-header': (arg0: number, arg1: Object) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed::accessible-table-summary': (arg0: number, arg1: Object) => void;
            /**
             * The signal "children-changed" is emitted when a child is added or
             * removed from an object. It supports two details: "add" and
             * "remove"
             * @signal
             * @detailed
             * @run-last
             */
            'children-changed::accessible-value': (arg0: number, arg1: Object) => void;
            [key: `children-changed::${string}`]: (arg0: number, arg1: Object) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change::accessible-component-layer': (arg0: PropertyValues) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change::accessible-component-mdi-zorder': (arg0: PropertyValues) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change::accessible-description': (arg0: PropertyValues) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change::accessible-help-text': (arg0: PropertyValues) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change::accessible-hypertext-nlinks': (arg0: PropertyValues) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change::accessible-id': (arg0: PropertyValues) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change::accessible-name': (arg0: PropertyValues) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change::accessible-parent': (arg0: PropertyValues) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change::accessible-role': (arg0: PropertyValues) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change::accessible-table-caption': (arg0: PropertyValues) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change::accessible-table-caption-object': (arg0: PropertyValues) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change::accessible-table-column-description': (arg0: PropertyValues) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change::accessible-table-column-header': (arg0: PropertyValues) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change::accessible-table-row-description': (arg0: PropertyValues) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change::accessible-table-row-header': (arg0: PropertyValues) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change::accessible-table-summary': (arg0: PropertyValues) => void;
            /**
             * The signal "property-change" is emitted when an object's property
             * value changes. `arg1` contains an {@link Atk.PropertyValues} with the name
             * and the new value of the property whose value has changed. Note
             * that, as with GObject notify, getting this signal does not
             * guarantee that the value of the property has actually changed; it
             * may also be emitted when the setter of the property is called to
             * reinstate the previous value.
             *
             * Toolkit implementor note: ATK implementors should use
             * `g_object_notify()` to emit property-changed
             * notifications. {@link Atk.Object.SignalSignatures.property_changed | Atk.Object::property-changed} is needed by the
             * implementation of `atk_add_global_event_listener()` because GObject
             * notify doesn't support emission hooks.
             * @signal
             * @detailed
             * @run-last
             */
            'property-change::accessible-value': (arg0: PropertyValues) => void;
            [key: `property-change::${string}`]: (arg0: PropertyValues) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change::accessible-component-layer': (arg0: string, arg1: boolean) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change::accessible-component-mdi-zorder': (arg0: string, arg1: boolean) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change::accessible-description': (arg0: string, arg1: boolean) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change::accessible-help-text': (arg0: string, arg1: boolean) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change::accessible-hypertext-nlinks': (arg0: string, arg1: boolean) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change::accessible-id': (arg0: string, arg1: boolean) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change::accessible-name': (arg0: string, arg1: boolean) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change::accessible-parent': (arg0: string, arg1: boolean) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change::accessible-role': (arg0: string, arg1: boolean) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change::accessible-table-caption': (arg0: string, arg1: boolean) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change::accessible-table-caption-object': (arg0: string, arg1: boolean) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change::accessible-table-column-description': (arg0: string, arg1: boolean) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change::accessible-table-column-header': (arg0: string, arg1: boolean) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change::accessible-table-row-description': (arg0: string, arg1: boolean) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change::accessible-table-row-header': (arg0: string, arg1: boolean) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change::accessible-table-summary': (arg0: string, arg1: boolean) => void;
            /**
             * The "state-change" signal is emitted when an object's state
             * changes.  The detail value identifies the state type which has
             * changed.
             * @signal
             * @detailed
             * @run-last
             */
            'state-change::accessible-value': (arg0: string, arg1: boolean) => void;
            [key: `state-change::${string}`]: (arg0: string, arg1: boolean) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            accessible_component_layer: number;
            accessibleComponentLayer: number;
            accessible_component_mdi_zorder: number;
            accessibleComponentMdiZorder: number;
            accessible_description: string;
            accessibleDescription: string;
            accessible_help_text: string;
            accessibleHelpText: string;
            accessible_hypertext_nlinks: number;
            accessibleHypertextNlinks: number;
            accessible_id: string;
            accessibleId: string;
            accessible_name: string;
            accessibleName: string;
            accessible_parent: Object;
            accessibleParent: Object;
            accessible_role: Role;
            accessibleRole: Role;
            accessible_table_caption: string;
            accessibleTableCaption: string;
            accessible_table_caption_object: Object;
            accessibleTableCaptionObject: Object;
            accessible_table_column_description: string;
            accessibleTableColumnDescription: string;
            accessible_table_column_header: Object;
            accessibleTableColumnHeader: Object;
            accessible_table_row_description: string;
            accessibleTableRowDescription: string;
            accessible_table_row_header: Object;
            accessibleTableRowHeader: Object;
            accessible_table_summary: Object;
            accessibleTableSummary: Object;
            accessible_value: number;
            accessibleValue: number;
        }
    }

    /**
     * The base object class for the Accessibility Toolkit API.
     *
     * This class is the primary class for accessibility support via the
     * Accessibility ToolKit (ATK).  Objects which are instances of
     * {@link Atk.Object} (or instances of AtkObject-derived types) are queried
     * for properties which relate basic (and generic) properties of a UI
     * component such as name and description.  Instances of {@link Atk.Object}
     * may also be queried as to whether they implement other ATK
     * interfaces (e.g. {@link Atk.Action}, {@link Atk.Component}, etc.), as appropriate
     * to the role which a given UI component plays in a user interface.
     *
     * All UI components in an application which provide useful
     * information or services to the user must provide corresponding
     * {@link Atk.Object} instances on request (in GTK+, for instance, usually on
     * a call to `gtk_widget_get_accessible` ()), either via ATK support
     * built into the toolkit for the widget class or ancestor class, or
     * in the case of custom widgets, if the inherited {@link Atk.Object}
     * implementation is insufficient, via instances of a new {@link Atk.Object}
     * subclass.
     *
     * See {@link AtkObjectFactory}, {@link AtkRegistry}.  (GTK+ users see also
     * `GtkAccessible`).
     * @gir-type Class
     */
    class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;

        // Properties

        /**
         * @read-only
         */
        get accessible_component_layer(): number;
        /**
         * @read-only
         */
        get accessibleComponentLayer(): number;
        /**
         * @read-only
         */
        get accessible_component_mdi_zorder(): number;
        /**
         * @read-only
         */
        get accessibleComponentMdiZorder(): number;
        get accessible_description(): string;
        set accessible_description(val: string);
        get accessibleDescription(): string;
        set accessibleDescription(val: string);
        get accessible_help_text(): string;
        set accessible_help_text(val: string);
        get accessibleHelpText(): string;
        set accessibleHelpText(val: string);
        /**
         * @read-only
         */
        get accessible_hypertext_nlinks(): number;
        /**
         * @read-only
         */
        get accessibleHypertextNlinks(): number;
        get accessible_id(): string;
        set accessible_id(val: string);
        get accessibleId(): string;
        set accessibleId(val: string);
        get accessible_name(): string;
        set accessible_name(val: string);
        get accessibleName(): string;
        set accessibleName(val: string);
        get accessible_parent(): Object;
        set accessible_parent(val: Object);
        get accessibleParent(): Object;
        set accessibleParent(val: Object);
        get accessible_role(): Role;
        set accessible_role(val: Role);
        get accessibleRole(): Role;
        set accessibleRole(val: Role);
        /**
         * Table caption.
         * @deprecated Since 1.3. Use table-caption-object instead.
         */
        get accessible_table_caption(): string;
        set accessible_table_caption(val: string);
        /**
         * Table caption.
         * @deprecated Since 1.3. Use table-caption-object instead.
         */
        get accessibleTableCaption(): string;
        set accessibleTableCaption(val: string);
        get accessible_table_caption_object(): Object;
        set accessible_table_caption_object(val: Object);
        get accessibleTableCaptionObject(): Object;
        set accessibleTableCaptionObject(val: Object);
        /**
         * Accessible table column description.
         * @deprecated Since 2.12. Use `atk_table_get_column_description()` and `atk_table_set_column_description()` instead.
         */
        get accessible_table_column_description(): string;
        set accessible_table_column_description(val: string);
        /**
         * Accessible table column description.
         * @deprecated Since 2.12. Use `atk_table_get_column_description()` and `atk_table_set_column_description()` instead.
         */
        get accessibleTableColumnDescription(): string;
        set accessibleTableColumnDescription(val: string);
        /**
         * Accessible table column header.
         * @deprecated Since 2.12. Use `atk_table_get_column_header()` and `atk_table_set_column_header()` instead.
         */
        get accessible_table_column_header(): Object;
        set accessible_table_column_header(val: Object);
        /**
         * Accessible table column header.
         * @deprecated Since 2.12. Use `atk_table_get_column_header()` and `atk_table_set_column_header()` instead.
         */
        get accessibleTableColumnHeader(): Object;
        set accessibleTableColumnHeader(val: Object);
        /**
         * Accessible table row description.
         * @deprecated Since 2.12. Use `atk_table_get_row_description()` and `atk_table_set_row_description()` instead.
         */
        get accessible_table_row_description(): string;
        set accessible_table_row_description(val: string);
        /**
         * Accessible table row description.
         * @deprecated Since 2.12. Use `atk_table_get_row_description()` and `atk_table_set_row_description()` instead.
         */
        get accessibleTableRowDescription(): string;
        set accessibleTableRowDescription(val: string);
        /**
         * Accessible table row header.
         * @deprecated Since 2.12. Use `atk_table_get_row_header()` and `atk_table_set_row_header()` instead.
         */
        get accessible_table_row_header(): Object;
        set accessible_table_row_header(val: Object);
        /**
         * Accessible table row header.
         * @deprecated Since 2.12. Use `atk_table_get_row_header()` and `atk_table_set_row_header()` instead.
         */
        get accessibleTableRowHeader(): Object;
        set accessibleTableRowHeader(val: Object);
        get accessible_table_summary(): Object;
        set accessible_table_summary(val: Object);
        get accessibleTableSummary(): Object;
        set accessibleTableSummary(val: Object);
        /**
         * Numeric value of this object, in case being and AtkValue.
         * @deprecated Since 2.12. Use `atk_value_get_value_and_text()` to get the value, and value-changed signal to be notified on their value changes.
         */
        get accessible_value(): number;
        set accessible_value(val: number);
        /**
         * Numeric value of this object, in case being and AtkValue.
         * @deprecated Since 2.12. Use `atk_value_get_value_and_text()` to get the value, and value-changed signal to be notified on their value changes.
         */
        get accessibleValue(): number;
        set accessibleValue(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Object.SignalSignatures;

        // Fields

        description: string;
        name: string;
        role: Role;
        relation_set: RelationSet;
        layer: Layer;

        // Constructors

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Object.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param child
         * @virtual
         */
        vfunc_active_descendant_changed(child?: any | null): void;
        /**
         * @param change_index
         * @param changed_child
         * @virtual
         */
        vfunc_children_changed(change_index: number, changed_child?: any | null): void;
        /**
         * The signal handler which is executed when there is a
         *   focus event for an object. This virtual function is deprecated
         *   since 2.9.4 and it should not be overriden. Use
         *   the {@link Atk.Object.SignalSignatures.state_change | Atk.Object::state-change} "focused" signal instead.
         * @param focus_in
         * @virtual
         */
        vfunc_focus_event(focus_in: boolean): void;
        /**
         * Get a list of properties applied to this object as a whole, as an {@link Atk.AttributeSet} consisting of
         * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
         * as distinct from strongly-typed object data available via other get/set methods.
         * Not all objects have explicit "name-value pair" {@link Atk.AttributeSet} properties.
         * @virtual
         */
        vfunc_get_attributes(): AttributeSet;
        /**
         * Gets the accessible description of the accessible.
         * @virtual
         */
        vfunc_get_description(): string;
        /**
         * Gets the 0-based index of this accessible in its parent; returns -1 if the
         * accessible does not have an accessible parent.
         * @virtual
         */
        vfunc_get_index_in_parent(): number;
        /**
         * Gets the layer of the accessible.
         * @virtual
         */
        vfunc_get_layer(): Layer;
        /**
         * Gets the zorder of the accessible. The value G_MININT will be returned
         * if the layer of the accessible is not ATK_LAYER_MDI.
         * @virtual
         */
        vfunc_get_mdi_zorder(): number;
        /**
         * @virtual
         */
        vfunc_get_n_children(): number;
        /**
         * Gets the accessible name of the accessible.
         * @virtual
         */
        vfunc_get_name(): string;
        /**
         * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
         * of `accessible`.
         * @virtual
         */
        vfunc_get_object_locale(): string;
        /**
         * Gets the accessible parent of the accessible. By default this is
         * the one assigned with `atk_object_set_parent()`, but it is assumed
         * that ATK implementors have ways to get the parent of the object
         * without the need of assigning it manually with
         * `atk_object_set_parent()`, and will return it with this method.
         *
         * If you are only interested on the parent assigned with
         * `atk_object_set_parent()`, use `atk_object_peek_parent()`.
         * @virtual
         */
        vfunc_get_parent(): Object;
        /**
         * Gets the role of the accessible.
         * @virtual
         */
        vfunc_get_role(): Role;
        /**
         * This function is called when implementing subclasses of {@link Atk.Object}.
         * It does initialization required for the new object. It is intended
         * that this function should called only in the ..._new() functions used
         * to create an instance of a subclass of {@link Atk.Object}
         * @param data a `gpointer` which identifies the object for which the AtkObject was created.
         * @virtual
         */
        vfunc_initialize(data?: any | null): void;
        /**
         * @param values
         * @virtual
         */
        vfunc_property_change(values: PropertyValues): void;
        /**
         * Gets the {@link Atk.RelationSet} associated with the object.
         * @virtual
         */
        vfunc_ref_relation_set(): RelationSet;
        /**
         * Gets a reference to the state set of the accessible; the caller must
         * unreference it when it is no longer needed.
         * @virtual
         */
        vfunc_ref_state_set(): StateSet;
        /**
         * Removes a property change handler.
         * @param handler_id a guint which identifies the handler to be removed.
         * @virtual
         */
        vfunc_remove_property_change_handler(handler_id: number): void;
        /**
         * Sets the accessible description of the accessible. You can't set
         * the description to NULL. This is reserved for the initial value. In
         * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
         * the name to a empty value you can use "".
         * @param description a character string to be set as the accessible description
         * @virtual
         */
        vfunc_set_description(description: string): void;
        /**
         * Sets the accessible name of the accessible. You can't set the name
         * to NULL. This is reserved for the initial value. In this aspect
         * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
         * a empty value you can use "".
         * @param name a character string to be set as the accessible name
         * @virtual
         */
        vfunc_set_name(name: string): void;
        /**
         * Sets the accessible parent of the accessible. `parent` can be NULL.
         * @param parent an {@link Atk.Object} to be set as the accessible parent
         * @virtual
         */
        vfunc_set_parent(parent: Object): void;
        /**
         * Sets the role of the accessible.
         * @param role an {@link Atk.Role} to be set as the role
         * @virtual
         */
        vfunc_set_role(role: Role): void;
        /**
         * @param name
         * @param state_set
         * @virtual
         */
        vfunc_state_change(name: string, state_set: boolean): void;
        /**
         * @virtual
         */
        vfunc_visible_data_changed(): void;

        // Methods

        /**
         * Adds a relationship of the specified type with the specified target.
         * @param relationship The {@link Atk.RelationType} of the relation
         * @param target The {@link Atk.Object} which is to be the target of the relation.
         * @returns TRUE if the relationship is added.
         */
        add_relationship(relationship: RelationType | null, target: Object): boolean;
        /**
         * Gets the accessible id of the accessible.
         * @returns a character string representing the accessible id of the object, or NULL if no such string was set.
         */
        get_accessible_id(): string;
        /**
         * Get a list of properties applied to this object as a whole, as an {@link Atk.AttributeSet} consisting of
         * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
         * as distinct from strongly-typed object data available via other get/set methods.
         * Not all objects have explicit "name-value pair" {@link Atk.AttributeSet} properties.
         * @returns an {@link Atk.AttributeSet} consisting of all explicit properties/annotations applied to the object, or an empty set if the object has no name-value pair attributes assigned to it. This #atkattributeset should be freed by a call to `atk_attribute_set_free()`.
         */
        get_attributes(): AttributeSet;
        /**
         * Gets the accessible description of the accessible.
         * @returns a character string representing the accessible description of the accessible.
         */
        get_description(): string;
        /**
         * Gets the help text associated with the accessible.
         * @returns a character string representing the help text or the object, or NULL if no such string was set.
         */
        get_help_text(): string;
        /**
         * Gets the 0-based index of this accessible in its parent; returns -1 if the
         * accessible does not have an accessible parent.
         * @returns an integer which is the index of the accessible in its parent
         */
        get_index_in_parent(): number;
        /**
         * Gets the layer of the accessible.
         * @returns an {@link Atk.Layer} which is the layer of the accessible
         */
        get_layer(): Layer;
        /**
         * Gets the zorder of the accessible. The value G_MININT will be returned
         * if the layer of the accessible is not ATK_LAYER_MDI.
         * @returns a gint which is the zorder of the accessible, i.e. the depth at which the component is shown in relation to other components in the same container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the number of accessible children of the accessible.
         * @returns an integer representing the number of accessible children of the accessible.
         */
        get_n_accessible_children(): number;
        /**
         * Gets the accessible name of the accessible.
         * @returns a character string representing the accessible name of the object.
         */
        get_name(): string;
        /**
         * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
         * of `accessible`.
         * @returns a UTF-8 string indicating the POSIX-style LC_MESSAGES          locale of `accessible`.
         */
        get_object_locale(): string;
        /**
         * Gets the accessible parent of the accessible. By default this is
         * the one assigned with `atk_object_set_parent()`, but it is assumed
         * that ATK implementors have ways to get the parent of the object
         * without the need of assigning it manually with
         * `atk_object_set_parent()`, and will return it with this method.
         *
         * If you are only interested on the parent assigned with
         * `atk_object_set_parent()`, use `atk_object_peek_parent()`.
         * @returns an {@link Atk.Object} representing the accessible parent of the accessible
         */
        get_parent(): Object;
        /**
         * Gets the role of the accessible.
         * @returns an {@link Atk.Role} which is the role of the accessible
         */
        get_role(): Role;
        /**
         * This function is called when implementing subclasses of {@link Atk.Object}.
         * It does initialization required for the new object. It is intended
         * that this function should called only in the ..._new() functions used
         * to create an instance of a subclass of {@link Atk.Object}
         * @param data a `gpointer` which identifies the object for which the AtkObject was created.
         */
        initialize(data?: any | null): void;
        /**
         * Emits a state-change signal for the specified state.
         *
         * Note that as a general rule when the state of an existing object changes,
         * emitting a notification is expected.
         * @param state an {@link Atk.State} whose state is changed
         * @param value a gboolean which indicates whether the state is being set on or off
         */
        notify_state_change(state: State, value: boolean): void;
        /**
         * Gets the accessible parent of the accessible, if it has been
         * manually assigned with atk_object_set_parent. Otherwise, this
         * function returns `null`.
         *
         * This method is intended as an utility for ATK implementors, and not
         * to be exposed to accessible tools. See `atk_object_get_parent()` for
         * further reference.
         * @returns an {@link Atk.Object} representing the accessible parent of the accessible if assigned
         */
        peek_parent(): Object;
        /**
         * Gets a reference to the specified accessible child of the object.
         * The accessible children are 0-based so the first accessible child is
         * at index 0, the second at index 1 and so on.
         * @param i a gint representing the position of the child, starting from 0
         * @returns an {@link Atk.Object} representing the specified accessible child of the accessible.
         */
        ref_accessible_child(i: number): Object;
        /**
         * Gets the {@link Atk.RelationSet} associated with the object.
         * @returns an {@link Atk.RelationSet} representing the relation set of the object.
         */
        ref_relation_set(): RelationSet;
        /**
         * Gets a reference to the state set of the accessible; the caller must
         * unreference it when it is no longer needed.
         * @returns a reference to an {@link Atk.StateSet} which is the state set of the accessible
         */
        ref_state_set(): StateSet;
        /**
         * Removes a property change handler.
         * @param handler_id a guint which identifies the handler to be removed.
         */
        remove_property_change_handler(handler_id: number): void;
        /**
         * Removes a relationship of the specified type with the specified target.
         * @param relationship The {@link Atk.RelationType} of the relation
         * @param target The {@link Atk.Object} which is the target of the relation to be removed.
         * @returns TRUE if the relationship is removed.
         */
        remove_relationship(relationship: RelationType | null, target: Object): boolean;
        /**
         * Sets the accessible ID of the accessible.  This is not meant to be presented
         * to the user, but to be an ID which is stable over application development.
         * Typically, this is the gtkbuilder ID. Such an ID will be available for
         * instance to identify a given well-known accessible object for tailored screen
         * reading, or for automatic regression testing.
         * @param id a character string to be set as the accessible id
         */
        set_accessible_id(id: string): void;
        /**
         * Sets the accessible description of the accessible. You can't set
         * the description to NULL. This is reserved for the initial value. In
         * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
         * the name to a empty value you can use "".
         * @param description a character string to be set as the accessible description
         */
        set_description(description: string): void;
        /**
         * Sets the help text associated with the accessible. This can be used to
         * expose context-sensitive information to help a user understand how to
         * interact with the object. You can't set the help text to NULL.
         * This is reserved for the initial value. If you want to set the name to
         * an empty value, you can use "".
         * @param help_text a character string to be set as the accessible's help text
         */
        set_help_text(help_text: string): void;
        /**
         * Sets the accessible name of the accessible. You can't set the name
         * to NULL. This is reserved for the initial value. In this aspect
         * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
         * a empty value you can use "".
         * @param name a character string to be set as the accessible name
         */
        set_name(name: string): void;
        /**
         * Sets the accessible parent of the accessible. `parent` can be NULL.
         * @param parent an {@link Atk.Object} to be set as the accessible parent
         */
        set_parent(parent: Object): void;
        /**
         * Sets the role of the accessible.
         * @param role an {@link Atk.Role} to be set as the role
         */
        set_role(role: Role | null): void;
    }

    namespace ObjectFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The base object class for a factory used to
     *  create accessible objects for objects of a specific GType.
     *
     * This class is the base object class for a factory used to create an
     * accessible object for a specific GType. The function
     * `atk_registry_set_factory_type()` is normally called to store in the
     * registry the factory type to be used to create an accessible of a
     * particular GType.
     * @gir-type Class
     */
    class ObjectFactory extends GObject.Object {
        static $gtype: GObject.GType<ObjectFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ObjectFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ObjectFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ObjectFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ObjectFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ObjectFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ObjectFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Inform `factory` that it is no longer being used to create
         * accessibles. When called, `factory` may need to inform
         * `AtkObjects` which it has created that they need to be re-instantiated.
         * Note: primarily used for runtime replacement of `AtkObjectFactorys`
         * in object registries.
         * @virtual
         */
        vfunc_invalidate(): void;

        // Methods

        /**
         * Provides an {@link Atk.Object} that implements an accessibility interface
         * on behalf of `obj`
         * @param obj a {@link GObject.Object}
         * @returns an {@link Atk.Object} that implements an accessibility interface on behalf of `obj`
         */
        create_accessible(obj: GObject.Object): Object;
        /**
         * Gets the GType of the accessible which is created by the factory.
         * @returns the type of the accessible which is created by the `factory`. The value G_TYPE_INVALID is returned if no type if found.
         */
        get_accessible_type(): GObject.GType;
        /**
         * Inform `factory` that it is no longer being used to create
         * accessibles. When called, `factory` may need to inform
         * `AtkObjects` which it has created that they need to be re-instantiated.
         * Note: primarily used for runtime replacement of `AtkObjectFactorys`
         * in object registries.
         */
        invalidate(): void;
    }

    namespace Plug {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::accessible-component-layer': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-component-mdi-zorder': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-help-text': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-hypertext-nlinks': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-id': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-parent': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption-object': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-summary': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps, Component.ConstructorProps {}
    }

    /**
     * Toplevel for embedding into other processes
     *
     * See {@link AtkSocket}
     * @gir-type Class
     */
    class Plug extends Object implements Component {
        static $gtype: GObject.GType<Plug>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Plug.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Plug.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Plug;

        // Signals

        /** @signal */
        connect<K extends keyof Plug.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plug.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Plug.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plug.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Plug.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Plug.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_get_object_id(): string;

        // Methods

        /**
         * Gets the unique ID of an {@link Atk.Plug} object, which can be used to
         * embed inside of an {@link Atk.Socket} using `atk_socket_embed()`.
         *
         * Internally, this calls a class function that should be registered
         * by the IPC layer (usually at-spi2-atk). The implementor of an
         * {@link Atk.Plug} object should call this function (after atk-bridge is
         * loaded) and pass the value to the process implementing the
         * {@link Atk.Socket}, so it could embed the plug.
         * @returns the unique ID for the plug
         */
        get_id(): string;
        /**
         * Sets `child` as accessible child of `plug` and `plug` as accessible parent of
         * `child`. `child` can be NULL.
         *
         * In some cases, one can not use the AtkPlug type directly as accessible
         * object for the toplevel widget of the application. For instance in the gtk
         * case, GtkPlugAccessible can not inherit both from GtkWindowAccessible and
         * from AtkPlug. In such a case, one can create, in addition to the standard
         * accessible object for the toplevel widget, an AtkPlug object, and make the
         * former the child of the latter by calling `atk_plug_set_child()`.
         * @param child an {@link Atk.Object} to be set as accessible child of `plug`.
         */
        set_child(child: Object): void;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` indicating whether the specified point is within the extent of the `component` or not
         */
        contains(x: number, y: number, coord_type: CoordType | null): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @returns An alpha value from 0 to 1.0, inclusive.
         */
        get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_extents(coord_type: CoordType | null): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @returns an {@link Atk.Layer} which is the layer of the component
         */
        get_layer(): Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_position(coord_type: CoordType | null): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @returns `true` if successful, `false` otherwise.
         */
        grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns a reference to the accessible child, if one exists
         */
        ref_accessible_at_point(x: number, y: number, coord_type: CoordType | null): Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         */
        remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_to(type: ScrollType | null): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: CoordType | null, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType | null): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @returns `true` or `false` whether or not the position was set or not
         */
        set_position(x: number, y: number, coord_type: CoordType | null): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @returns `true` or `false` whether the size was set or not
         */
        set_size(width: number, height: number): boolean;
        /**
         * @param bounds
         * @virtual
         */
        vfunc_bounds_changed(bounds: Rectangle): void;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_contains(x: number, y: number, coord_type: CoordType): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @virtual
         */
        vfunc_get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_extents(coord_type: CoordType): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @virtual
         */
        vfunc_get_layer(): Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @virtual
         */
        vfunc_get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_position(coord_type: CoordType): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         * @virtual
         */
        vfunc_get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @virtual
         */
        vfunc_grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         * @virtual
         */
        vfunc_remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @virtual
         */
        vfunc_scroll_to(type: ScrollType): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @virtual
         */
        vfunc_scroll_to_point(coords: CoordType, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @virtual
         */
        vfunc_set_position(x: number, y: number, coord_type: CoordType): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @virtual
         */
        vfunc_set_size(width: number, height: number): boolean;
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
         * a [floating][floating-ref] object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating][floating-ref] reference.
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
         * [floating][floating-ref] reference, if `object` has a floating reference.
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

    namespace Registry {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An object used to store the GType of the
     * factories used to create an accessible object for an object of a
     * particular GType.
     *
     * The AtkRegistry is normally used to create appropriate ATK "peers"
     * for user interface components.  Application developers usually need
     * only interact with the AtkRegistry by associating appropriate ATK
     * implementation classes with GObject classes via the
     * atk_registry_set_factory_type call, passing the appropriate GType
     * for application custom widget classes.
     * @gir-type Class
     */
    class Registry extends GObject.Object {
        static $gtype: GObject.GType<Registry>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Registry.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Registry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Registry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Registry.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Registry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Registry.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Registry.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Registry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets an {@link Atk.ObjectFactory} appropriate for creating `AtkObjects`
         * appropriate for `type`.
         * @param type a {@link GObject.GType} with which to look up the associated {@link Atk.ObjectFactory}
         * @returns an {@link Atk.ObjectFactory} appropriate for creating `AtkObjects` appropriate for `type`.
         */
        get_factory(type: GObject.GType): ObjectFactory;
        /**
         * Provides a {@link GObject.GType} indicating the {@link Atk.ObjectFactory} subclass
         * associated with `type`.
         * @param type a {@link GObject.GType} with which to look up the associated {@link Atk.ObjectFactory} subclass
         * @returns a {@link GObject.GType} associated with type `type`
         */
        get_factory_type(type: GObject.GType): GObject.GType;
        /**
         * Associate an {@link Atk.ObjectFactory} subclass with a {@link GObject.GType}. Note:
         * The associated `factory_type` will thereafter be responsible for
         * the creation of new {@link Atk.Object} implementations for instances
         * appropriate for `type`.
         * @param type an {@link Atk.Object} type
         * @param factory_type an {@link Atk.ObjectFactory} type to associate with `type`.  Must implement AtkObject appropriate for `type`.
         */
        set_factory_type(type: GObject.GType, factory_type: GObject.GType): void;
    }

    namespace Relation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::relation-type': (pspec: GObject.ParamSpec) => void;
            'notify::target': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            relation_type: RelationType;
            relationType: RelationType;
            target: GObject.ValueArray;
        }
    }

    /**
     * An object used to describe a relation between a
     *  object and one or more other objects.
     *
     * An AtkRelation describes a relation between an object and one or
     * more other objects. The actual relations that an object has with
     * other objects are defined as an AtkRelationSet, which is a set of
     * AtkRelations.
     * @gir-type Class
     */
    class Relation extends GObject.Object {
        static $gtype: GObject.GType<Relation>;

        // Properties

        get relation_type(): RelationType;
        set relation_type(val: RelationType);
        get relationType(): RelationType;
        set relationType(val: RelationType);
        get target(): GObject.ValueArray;
        set target(val: GObject.ValueArray);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Relation.SignalSignatures;

        // Fields

        relationship: RelationType;

        // Constructors

        constructor(properties?: Partial<Relation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](targets: Object[], relationship: RelationType): Relation;

        // Signals

        /** @signal */
        connect<K extends keyof Relation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Relation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Relation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Relation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Relation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Relation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds the specified AtkObject to the target for the relation, if it is
         * not already present.  See also `atk_object_add_relationship()`.
         * @param target an {@link Atk.Object}
         */
        add_target(target: Object): void;
        /**
         * Gets the type of `relation`
         * @returns the type of `relation`
         */
        get_relation_type(): RelationType;
        /**
         * Gets the target list of `relation`
         * @returns the target list of `relation`
         */
        get_target(): Object[];
        /**
         * Remove the specified AtkObject from the target for the relation.
         * @param target an {@link Atk.Object}
         * @returns TRUE if the removal is successful.
         */
        remove_target(target: Object): boolean;
    }

    namespace RelationSet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A set of AtkRelations, normally the set of
     *  AtkRelations which an AtkObject has.
     *
     * The AtkRelationSet held by an object establishes its relationships
     * with objects beyond the normal "parent/child" hierarchical
     * relationships that all user interface objects have.
     * AtkRelationSets establish whether objects are labelled or
     * controlled by other components, share group membership with other
     * components (for instance within a radio-button group), or share
     * content which "flows" between them, among other types of possible
     * relationships.
     * @gir-type Class
     */
    class RelationSet extends GObject.Object {
        static $gtype: GObject.GType<RelationSet>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RelationSet.SignalSignatures;

        // Fields

        relations: any[];

        // Constructors

        constructor(properties?: Partial<RelationSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RelationSet;

        // Signals

        /** @signal */
        connect<K extends keyof RelationSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RelationSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RelationSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RelationSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RelationSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RelationSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a new relation to the current relation set if it is not already
         * present.
         * This function ref's the AtkRelation so the caller of this function
         * should unref it to ensure that it will be destroyed when the AtkRelationSet
         * is destroyed.
         * @param relation an {@link Atk.Relation}
         */
        add(relation: Relation): void;
        /**
         * Add a new relation of the specified type with the specified target to
         * the current relation set if the relation set does not contain a relation
         * of that type. If it is does contain a relation of that typea the target
         * is added to the relation.
         * @param relationship an {@link Atk.RelationType}
         * @param target an {@link Atk.Object}
         */
        add_relation_by_type(relationship: RelationType | null, target: Object): void;
        /**
         * Determines whether the relation set contains a relation that matches the
         * specified type.
         * @param relationship an {@link Atk.RelationType}
         * @returns `true` if `relationship` is the relationship type of a relation in `set`, `false` otherwise
         */
        contains(relationship: RelationType | null): boolean;
        /**
         * Determines whether the relation set contains a relation that
         * matches the specified pair formed by type `relationship` and object
         * `target`.
         * @param relationship an {@link Atk.RelationType}
         * @param target an {@link Atk.Object}
         * @returns `true` if `set` contains a relation with the relationship type `relationship` with an object `target`, `false` otherwise
         */
        contains_target(relationship: RelationType | null, target: Object): boolean;
        /**
         * Determines the number of relations in a relation set.
         * @returns an integer representing the number of relations in the set.
         */
        get_n_relations(): number;
        /**
         * Determines the relation at the specified position in the relation set.
         * @param i a gint representing a position in the set, starting from 0.
         * @returns a {@link Atk.Relation}, which is the relation at position i in the set.
         */
        get_relation(i: number): Relation;
        /**
         * Finds a relation that matches the specified type.
         * @param relationship an {@link Atk.RelationType}
         * @returns an {@link Atk.Relation}, which is a relation matching the specified type.
         */
        get_relation_by_type(relationship: RelationType | null): Relation;
        /**
         * Removes a relation from the relation set.
         * This function unref's the {@link Atk.Relation} so it will be deleted unless there
         * is another reference to it.
         * @param relation an {@link Atk.Relation}
         */
        remove(relation: Relation): void;
    }

    namespace Socket {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::accessible-component-layer': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-component-mdi-zorder': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-help-text': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-hypertext-nlinks': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-id': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-parent': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption-object': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-summary': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps, Component.ConstructorProps {}
    }

    /**
     * Container for AtkPlug objects from other processes
     *
     * Together with {@link Atk.Plug}, {@link Atk.Socket} provides the ability to embed
     * accessibles from one process into another in a fashion that is
     * transparent to assistive technologies. {@link Atk.Socket} works as the
     * container of {@link Atk.Plug}, embedding it using the method
     * `atk_socket_embed()`. Any accessible contained in the {@link Atk.Plug} will
     * appear to the assistive technologies as being inside the
     * application that created the {@link Atk.Socket}.
     *
     * The communication between a {@link Atk.Socket} and a {@link Atk.Plug} is done by
     * the IPC layer of the accessibility framework, normally implemented
     * by the D-Bus based implementation of AT-SPI (at-spi2). If that is
     * the case, at-spi-atk2 is the responsible to implement the abstract
     * methods `atk_plug_get_id()` and `atk_socket_embed()`, so an ATK
     * implementor shouldn't reimplement them. The process that contains
     * the {@link Atk.Plug} is responsible to send the ID returned by
     * `atk_plug_id()` to the process that contains the {@link Atk.Socket}, so it
     * could call the method `atk_socket_embed()` in order to embed it.
     *
     * For the same reasons, an implementor doesn't need to implement
     * `atk_object_get_n_accessible_children()` and
     * `atk_object_ref_accessible_child()`. All the logic related to those
     * functions will be implemented by the IPC layer.
     *
     * See {@link AtkPlug}
     * @gir-type Class
     */
    class Socket extends Object implements Component {
        static $gtype: GObject.GType<Socket>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Socket.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Socket.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Socket;

        // Signals

        /** @signal */
        connect<K extends keyof Socket.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Socket.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Socket.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Socket.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Socket.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Socket.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Embeds the children of an {@link Atk.Plug} as the children of the
         * {@link Atk.Socket}. The plug may be in the same process or in a different
         * process.
         *
         * The class item used by this function should be filled in by the IPC
         * layer (usually at-spi2-atk). The implementor of the AtkSocket
         * should call this function and pass the id for the plug as returned
         * by `atk_plug_get_id()`.  It is the responsibility of the application
         * to pass the plug id on to the process implementing the {@link Atk.Socket}
         * as needed.
         * @param plug_id the ID of an {@link Atk.Plug}
         * @virtual
         */
        vfunc_embed(plug_id: string): void;

        // Methods

        /**
         * Embeds the children of an {@link Atk.Plug} as the children of the
         * {@link Atk.Socket}. The plug may be in the same process or in a different
         * process.
         *
         * The class item used by this function should be filled in by the IPC
         * layer (usually at-spi2-atk). The implementor of the AtkSocket
         * should call this function and pass the id for the plug as returned
         * by `atk_plug_get_id()`.  It is the responsibility of the application
         * to pass the plug id on to the process implementing the {@link Atk.Socket}
         * as needed.
         * @param plug_id the ID of an {@link Atk.Plug}
         */
        embed(plug_id: string): void;
        /**
         * Determines whether or not the socket has an embedded plug.
         * @returns TRUE if a plug is embedded in the socket
         */
        is_occupied(): boolean;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` indicating whether the specified point is within the extent of the `component` or not
         */
        contains(x: number, y: number, coord_type: CoordType | null): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @returns An alpha value from 0 to 1.0, inclusive.
         */
        get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_extents(coord_type: CoordType | null): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @returns an {@link Atk.Layer} which is the layer of the component
         */
        get_layer(): Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_position(coord_type: CoordType | null): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @returns `true` if successful, `false` otherwise.
         */
        grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns a reference to the accessible child, if one exists
         */
        ref_accessible_at_point(x: number, y: number, coord_type: CoordType | null): Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         */
        remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_to(type: ScrollType | null): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: CoordType | null, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType | null): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @returns `true` or `false` whether or not the position was set or not
         */
        set_position(x: number, y: number, coord_type: CoordType | null): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @returns `true` or `false` whether the size was set or not
         */
        set_size(width: number, height: number): boolean;
        /**
         * @param bounds
         * @virtual
         */
        vfunc_bounds_changed(bounds: Rectangle): void;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_contains(x: number, y: number, coord_type: CoordType): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @virtual
         */
        vfunc_get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_extents(coord_type: CoordType): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @virtual
         */
        vfunc_get_layer(): Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @virtual
         */
        vfunc_get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_position(coord_type: CoordType): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         * @virtual
         */
        vfunc_get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @virtual
         */
        vfunc_grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         * @virtual
         */
        vfunc_remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @virtual
         */
        vfunc_scroll_to(type: ScrollType): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @virtual
         */
        vfunc_scroll_to_point(coords: CoordType, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @virtual
         */
        vfunc_set_position(x: number, y: number, coord_type: CoordType): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @virtual
         */
        vfunc_set_size(width: number, height: number): boolean;
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
         * a [floating][floating-ref] object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating][floating-ref] reference.
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
         * [floating][floating-ref] reference, if `object` has a floating reference.
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

    namespace StateSet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An AtkStateSet contains the states of an object.
     *
     * An AtkStateSet is a read-only representation of the full set of `AtkStates`
     * that apply to an object at a given time. This set is not meant to be
     * modified, but rather created when `atk_object_ref_state_set`() is called.
     * @gir-type Class
     */
    class StateSet extends GObject.Object {
        static $gtype: GObject.GType<StateSet>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StateSet.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StateSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StateSet;

        // Signals

        /** @signal */
        connect<K extends keyof StateSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StateSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StateSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StateSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StateSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StateSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds the state of the specified type to the state set if it is not already
         * present.
         *
         * Note that because an {@link Atk.StateSet} is a read-only object, this method should
         * be used to add a state to a newly-created set which will then be returned by
         * `atk_object_ref_state_set`. It should not be used to modify the existing state
         * of an object. See also `atk_object_notify_state_change`.
         * @param type an {@link Atk.StateType}
         * @returns `true` if  the state for `type` is not already in `set`.
         */
        add_state(type: StateType | null): boolean;
        /**
         * Adds the states of the specified types to the state set.
         *
         * Note that because an {@link Atk.StateSet} is a read-only object, this method should
         * be used to add states to a newly-created set which will then be returned by
         * `atk_object_ref_state_set`. It should not be used to modify the existing state
         * of an object. See also `atk_object_notify_state_change`.
         * @param types an array of {@link Atk.StateType}
         */
        add_states(types: StateType[] | null): void;
        /**
         * Constructs the intersection of the two sets, returning `null` if the
         * intersection is empty.
         * @param compare_set another {@link Atk.StateSet}
         * @returns a new {@link Atk.StateSet} which is the intersection of the two sets.
         */
        and_sets(compare_set: StateSet): StateSet;
        /**
         * Removes all states from the state set.
         */
        clear_states(): void;
        /**
         * Checks whether the state for the specified type is in the specified set.
         * @param type an {@link Atk.StateType}
         * @returns `true` if `type` is the state type is in `set`.
         */
        contains_state(type: StateType | null): boolean;
        /**
         * Checks whether the states for all the specified types are in the
         * specified set.
         * @param types an array of {@link Atk.StateType}
         * @returns `true` if all the states for `type` are in `set`.
         */
        contains_states(types: StateType[] | null): boolean;
        /**
         * Checks whether the state set is empty, i.e. has no states set.
         * @returns `true` if `set` has no states set, otherwise `false`
         */
        is_empty(): boolean;
        /**
         * Constructs the union of the two sets.
         * @param compare_set another {@link Atk.StateSet}
         * @returns a new {@link Atk.StateSet} which is the union of the two sets, returning `null` is empty.
         */
        or_sets(compare_set: StateSet): StateSet | null;
        /**
         * Removes the state for the specified type from the state set.
         *
         * Note that because an {@link Atk.StateSet} is a read-only object, this method should
         * be used to remove a state to a newly-created set which will then be returned
         * by `atk_object_ref_state_set`. It should not be used to modify the existing
         * state of an object. See also `atk_object_notify_state_change`.
         * @param type an `AtkType`
         * @returns `true` if `type` was the state type is in `set`.
         */
        remove_state(type: StateType | null): boolean;
        /**
         * Constructs the exclusive-or of the two sets, returning `null` is empty.
         * The set returned by this operation contains the states in exactly
         * one of the two sets.
         * @param compare_set another {@link Atk.StateSet}
         * @returns a new {@link Atk.StateSet} which contains the states which are in exactly one of the two sets.
         */
        xor_sets(compare_set: StateSet): StateSet;
    }

    namespace Util {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A set of ATK utility functions for event and toolkit support.
     *
     * A set of ATK utility functions which are used to support event
     * registration of various types, and obtaining the 'root' accessible
     * of a process and information about the current ATK implementation
     * and toolkit version.
     * @gir-type Class
     */
    class Util extends GObject.Object {
        static $gtype: GObject.GType<Util>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Util.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Util.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Util.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Util.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Util.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Util.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Util.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Util.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    /**
     * @gir-type Alias
     */
    type ActionIface = typeof Action;
    /**
     * AtkAttribute is a string name/value pair representing a generic
     * attribute. This can be used to expose additional information from
     * an accessible object as a whole (see `atk_object_get_attributes()`)
     * or an document (see `atk_document_get_attributes()`). In the case of
     * text attributes (see `atk_text_get_default_attributes()`),
     * {@link Atk.TextAttribute} enum defines all the possible text attribute
     * names. You can use `atk_text_attribute_get_name()` to get the string
     * name from the enum value. See also `atk_text_attribute_for_name()`
     * and `atk_text_attribute_get_value()` for more information.
     *
     * A string name/value pair representing a generic attribute.
     * @gir-type Struct
     */
    class Attribute {
        static $gtype: GObject.GType<Attribute>;

        // Fields

        name: string;
        value: string;

        // Constructors

        constructor(
            properties?: Partial<{
                name: string;
                value: string;
            }>,
        );

        // Static methods

        /**
         * Frees the memory used by an {@link Atk.AttributeSet}, including all its
         * `AtkAttributes`.
         * @param attrib_set The {@link Atk.AttributeSet} to free
         */
        static set_free(attrib_set: AttributeSet): void;
    }

    /**
     * @gir-type Alias
     */
    type ComponentIface = typeof Component;
    /**
     * @gir-type Alias
     */
    type DocumentIface = typeof Document;
    /**
     * @gir-type Alias
     */
    type EditableTextIface = typeof EditableText;
    /**
     * @gir-type Alias
     */
    type GObjectAccessibleClass = typeof GObjectAccessible;
    /**
     * @gir-type Alias
     */
    type HyperlinkClass = typeof Hyperlink;
    /**
     * @gir-type Alias
     */
    type HyperlinkImplIface = typeof HyperlinkImpl;
    /**
     * @gir-type Alias
     */
    type HypertextIface = typeof Hypertext;
    /**
     * @gir-type Alias
     */
    type ImageIface = typeof Image;
    /**
     * @gir-type Struct
     */
    abstract class Implementor {
        static $gtype: GObject.GType<Implementor>;

        // Methods

        /**
         * Gets a reference to an object's {@link Atk.Object} implementation, if
         * the object implements `AtkObjectIface`
         * @returns a reference to an object's {@link Atk.Object} implementation
         */
        ref_accessible(): Object;
    }

    /**
     * Encapsulates information about a key event.
     * @gir-type Struct
     */
    class KeyEventStruct {
        static $gtype: GObject.GType<KeyEventStruct>;

        // Fields

        type: number;
        state: number;
        keyval: number;
        length: number;
        string: string;
        keycode: number;
        timestamp: number;

        // Constructors

        constructor(
            properties?: Partial<{
                type: number;
                state: number;
                keyval: number;
                length: number;
                string: string;
                keycode: number;
                timestamp: number;
            }>,
        );
    }

    /**
     * @gir-type Alias
     */
    type MiscClass = typeof Misc;
    /**
     * @gir-type Alias
     */
    type NoOpObjectClass = typeof NoOpObject;
    /**
     * @gir-type Alias
     */
    type NoOpObjectFactoryClass = typeof NoOpObjectFactory;
    /**
     * @gir-type Alias
     */
    type ObjectClass = typeof Object;
    /**
     * @gir-type Alias
     */
    type ObjectFactoryClass = typeof ObjectFactory;
    /**
     * @gir-type Alias
     */
    type PlugClass = typeof Plug;
    /**
     * Note: `old_value` field of {@link Atk.PropertyValues} will not contain a
     * valid value. This is a field defined with the purpose of contain
     * the previous value of the property, but is not used anymore.
     * @gir-type Struct
     */
    class PropertyValues {
        static $gtype: GObject.GType<PropertyValues>;

        // Fields

        property_name: string;
    }

    /**
     * A given range or subrange, to be used with {@link Atk.Value}
     *
     * {@link Atk.Range} are used on {@link Atk.Value}, in order to represent the full
     * range of a given component (for example an slider or a range
     * control), or to define each individual subrange this full range is
     * splitted if available. See {@link Atk.Value} documentation for further
     * details.
     * @gir-type Struct
     */
    class Range {
        static $gtype: GObject.GType<Range>;

        // Constructors

        constructor(lower_limit: number, upper_limit: number, description: string);

        static ['new'](lower_limit: number, upper_limit: number, description: string): Range;

        // Methods

        /**
         * Returns a new {@link Atk.Range} that is a exact copy of `src`
         * @returns a new {@link Atk.Range} copy of `src`
         */
        copy(): Range;
        /**
         * Free `range`
         */
        free(): void;
        /**
         * Returns the human readable description of `range`
         * @returns the human-readable description of `range`
         */
        get_description(): string;
        /**
         * Returns the lower limit of `range`
         * @returns the lower limit of `range`
         */
        get_lower_limit(): number;
        /**
         * Returns the upper limit of `range`
         * @returns the upper limit of `range`
         */
        get_upper_limit(): number;
    }

    /**
     * A data structure for holding a rectangle. Those coordinates are
     * relative to the component top-level parent.
     * @gir-type Struct
     */
    class Rectangle {
        static $gtype: GObject.GType<Rectangle>;

        // Fields

        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );
    }

    /**
     * @gir-type Alias
     */
    type RegistryClass = typeof Registry;
    /**
     * @gir-type Alias
     */
    type RelationClass = typeof Relation;
    /**
     * @gir-type Alias
     */
    type RelationSetClass = typeof RelationSet;
    /**
     * @gir-type Alias
     */
    type SelectionIface = typeof Selection;
    /**
     * @gir-type Alias
     */
    type SocketClass = typeof Socket;
    /**
     * @gir-type Alias
     */
    type StateSetClass = typeof StateSet;
    /**
     * @gir-type Alias
     */
    type StreamableContentIface = typeof StreamableContent;
    /**
     * @gir-type Alias
     */
    type TableCellIface = typeof TableCell;
    /**
     * @gir-type Alias
     */
    type TableIface = typeof Table;
    /**
     * @gir-type Alias
     */
    type TextIface = typeof Text;
    /**
     * A structure used to describe a text range.
     * @gir-type Struct
     */
    class TextRange {
        static $gtype: GObject.GType<TextRange>;

        // Fields

        bounds: TextRectangle;
        start_offset: number;
        end_offset: number;
        content: string;

        // Constructors

        constructor(
            properties?: Partial<{
                bounds: TextRectangle;
                start_offset: number;
                end_offset: number;
                content: string;
            }>,
        );
    }

    /**
     * A structure used to store a rectangle used by AtkText.
     * @gir-type Struct
     */
    class TextRectangle {
        static $gtype: GObject.GType<TextRectangle>;

        // Fields

        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );
    }

    /**
     * This structure represents a single  text selection within a document. This
     * selection is defined by two points in the content, where each one is defined
     * by an AtkObject supporting the AtkText interface and a character offset
     * relative to it.
     *
     * The end object must appear after the start object in the accessibility tree,
     * i.e. the end object must be reachable from the start object by navigating
     * forward (next, first child etc).
     *
     * This struct also contains a `start_is_active` boolean, to communicate if the
     * start of the selection is the active point or not.
     *
     * The active point corresponds to the user's focus or point of interest. The
     * user moves the active point to expand or collapse the range. The anchor
     * point is the other point of the range and typically remains constant. In
     * most cases, anchor is the start of the range and active is the end. However,
     * when selecting backwards (e.g. pressing shift+left arrow in a text field),
     * the start of the range is the active point, as the user moves this to
     * manipulate the selection.
     * @gir-type Struct
     * @since 2.52
     */
    class TextSelection {
        static $gtype: GObject.GType<TextSelection>;

        // Fields

        start_object: Object;
        start_offset: number;
        end_object: Object;
        end_offset: number;
        start_is_active: boolean;
    }

    /**
     * @gir-type Alias
     */
    type UtilClass = typeof Util;
    /**
     * @gir-type Alias
     */
    type ValueIface = typeof Value;
    /**
     * @gir-type Alias
     */
    type WindowIface = typeof Window;
    namespace Action {
        /**
         * Interface for implementing Action.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Perform the specified action on the object.
             * @param i the action index corresponding to the action to be performed
             * @virtual
             */
            vfunc_do_action(i: number): boolean;
            /**
             * Returns a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @virtual
             */
            vfunc_get_description(i: number): string | null;
            /**
             * Gets the keybinding which can be used to activate this action, if one
             * exists. The string returned should contain localized, human-readable,
             * key sequences as they would appear when displayed on screen. It must
             * be in the format "mnemonic;sequence;shortcut".
             *
             * - The mnemonic key activates the object if it is presently enabled onscreen.
             *   This typically corresponds to the underlined letter within the widget.
             *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
             *   a button.
             * - The sequence is the full list of keys which invoke the action even if the
             *   relevant element is not currently shown on screen. For instance, for a menu
             *   item the sequence is the keybindings used to open the parent menus before
             *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
             *   traditional "New..." menu item.
             * - The shortcut, if it exists, will invoke the same action without showing
             *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
             *   traditional "New..." menu item.
             *
             * Example: For a traditional "New..." menu item, the expected return value
             * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
             * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
             * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
             * @param i the action index corresponding to the action to be performed
             * @virtual
             */
            vfunc_get_keybinding(i: number): string | null;
            /**
             * Returns the localized name of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @virtual
             */
            vfunc_get_localized_name(i: number): string | null;
            /**
             * Gets the number of accessible actions available on the object.
             * If there are more than one, the first one is considered the
             * "default" action of the object.
             * @virtual
             */
            vfunc_get_n_actions(): number;
            /**
             * Returns a non-localized string naming the specified action of the
             * object. This name is generally not descriptive of the end result
             * of the action, but instead names the 'interaction type' which the
             * object supports. By convention, the above strings should be used to
             * represent the actions which correspond to the common point-and-click
             * interaction techniques of the same name: i.e.
             * "click", "press", "release", "drag", "drop", "popup", etc.
             * The "popup" action should be used to pop up a context menu for the
             * object, if one exists.
             *
             * For technical reasons, some toolkits cannot guarantee that the
             * reported action is actually 'bound' to a nontrivial user event;
             * i.e. the result of some actions via `atk_action_do_action()` may be
             * NIL.
             * @param i the action index corresponding to the action to be performed
             * @virtual
             */
            vfunc_get_name(i: number): string | null;
            /**
             * Sets a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @param desc the description to be assigned to this action
             * @virtual
             */
            vfunc_set_description(i: number, desc: string): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ActionNamespace {
        $gtype: GObject.GType<Action>;
        prototype: Action;
    }
    /**
     * The ATK interface provided by UI components
     * which the user can activate/interact with.
     *
     * {@link Atk.Action} should be implemented by instances of {@link Atk.Object} classes
     * with which the user can interact directly, i.e. buttons,
     * checkboxes, scrollbars, e.g. components which are not "passive"
     * providers of UI information.
     *
     * Exceptions: when the user interaction is already covered by another
     * appropriate interface such as {@link Atk.EditableText} (insert/delete text,
     * etc.) or {@link Atk.Value} (set value) then these actions should not be
     * exposed by {@link Atk.Action} as well.
     *
     * Though most UI interactions on components should be invocable via
     * keyboard as well as mouse, there will generally be a close mapping
     * between "mouse actions" that are possible on a component and the
     * AtkActions.  Where mouse and keyboard actions are redundant in
     * effect, {@link Atk.Action} should expose only one action rather than
     * exposing redundant actions if possible.  By convention we have been
     * using "mouse centric" terminology for {@link Atk.Action} names.
     * @gir-type Interface
     */
    interface Action extends GObject.Object, Action.Interface {
        // Methods

        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @returns `true` if success, `false` otherwise
         */
        do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a description string, or `null` if `action` does not implement this interface.
         */
        get_description(i: number): string | null;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         * @param i the action index corresponding to the action to be performed
         * @returns the keybinding which can be used to activate this action, or `null` if there is no keybinding for this action.
         */
        get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @returns a the number of actions, or 0 if `action` does not implement this interface.
         */
        get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via `atk_action_do_action()` may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_name(i: number): string | null;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @returns a gboolean representing if the description was successfully set;
         */
        set_description(i: number, desc: string): boolean;
    }

    export const Action: ActionNamespace & {
        new (): Action; // This allows `obj instanceof Action`
    };

    namespace Component {
        /**
         * Interface for implementing Component.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param bounds
             * @virtual
             */
            vfunc_bounds_changed(bounds: Rectangle): void;
            /**
             * Checks whether the specified point is within the extent of the `component`.
             *
             * Toolkit implementor note: ATK provides a default implementation for
             * this virtual method. In general there are little reason to
             * re-implement it.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @virtual
             */
            vfunc_contains(x: number, y: number, coord_type: CoordType): boolean;
            /**
             * Returns the alpha value (i.e. the opacity) for this
             * `component`, on a scale from 0 (fully transparent) to 1.0
             * (fully opaque).
             * @virtual
             */
            vfunc_get_alpha(): number;
            /**
             * Gets the rectangle which gives the extent of the `component`.
             *
             * If the extent can not be obtained (e.g. a non-embedded plug or missing
             * support), all of x, y, width, height are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @virtual
             */
            vfunc_get_extents(coord_type: CoordType): [number, number, number, number];
            /**
             * Gets the layer of the component.
             * @virtual
             */
            vfunc_get_layer(): Layer;
            /**
             * Gets the zorder of the component. The value G_MININT will be returned
             * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
             * @virtual
             */
            vfunc_get_mdi_zorder(): number;
            /**
             * Gets the position of `component` in the form of
             * a point specifying `component`'s top-left corner.
             *
             * If the position can not be obtained (e.g. a non-embedded plug or missing
             * support), x and y are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @virtual
             */
            vfunc_get_position(coord_type: CoordType): [number, number];
            /**
             * Gets the size of the `component` in terms of width and height.
             *
             * If the size can not be obtained (e.g. a non-embedded plug or missing
             * support), width and height are set to -1.
             * @virtual
             */
            vfunc_get_size(): [number, number];
            /**
             * Grabs focus for this `component`.
             * @virtual
             */
            vfunc_grab_focus(): boolean;
            /**
             * Gets a reference to the accessible child, if one exists, at the
             * coordinate point specified by `x` and `y`.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @virtual
             */
            vfunc_ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
            /**
             * Remove the handler specified by `handler_id` from the list of
             * functions to be executed when this object receives focus events
             * (in or out).
             * @param handler_id the handler id of the focus handler to be removed from `component`
             * @virtual
             */
            vfunc_remove_focus_handler(handler_id: number): void;
            /**
             * Makes `component` visible on the screen by scrolling all necessary parents.
             *
             * Contrary to atk_component_set_position, this does not actually move
             * `component` in its parent, this only makes the parents scroll so that the
             * object shows up on the screen, given its current position within the parents.
             * @param type specify where the object should be made visible.
             * @virtual
             */
            vfunc_scroll_to(type: ScrollType): boolean;
            /**
             * Move the top-left of `component` to a given position of the screen by
             * scrolling all necessary parents.
             * @param coords specify whether coordinates are relative to the screen or to the parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             * @virtual
             */
            vfunc_scroll_to_point(coords: CoordType, x: number, y: number): boolean;
            /**
             * Sets the extents of `component`.
             * @param x x coordinate
             * @param y y coordinate
             * @param width width to set for `component`
             * @param height height to set for `component`
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @virtual
             */
            vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
            /**
             * Sets the position of `component`.
             *
             * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
             * this just moves `component` in its parent.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
             * @virtual
             */
            vfunc_set_position(x: number, y: number, coord_type: CoordType): boolean;
            /**
             * Set the size of the `component` in terms of width and height.
             * @param width width to set for `component`
             * @param height height to set for `component`
             * @virtual
             */
            vfunc_set_size(width: number, height: number): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ComponentNamespace {
        $gtype: GObject.GType<Component>;
        prototype: Component;
    }
    /**
     * The ATK interface provided by UI components
     * which occupy a physical area on the screen.
     * which the user can activate/interact with.
     *
     * {@link Atk.Component} should be implemented by most if not all UI elements
     * with an actual on-screen presence, i.e. components which can be
     * said to have a screen-coordinate bounding box.  Virtually all
     * widgets will need to have {@link Atk.Component} implementations provided
     * for their corresponding {@link Atk.Object} class.  In short, only UI
     * elements which are *not* GUI elements will omit this ATK interface.
     *
     * A possible exception might be textual information with a
     * transparent background, in which case text glyph bounding box
     * information is provided by {@link Atk.Text}.
     * @gir-type Interface
     */
    interface Component extends GObject.Object, Component.Interface {
        // Methods

        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` indicating whether the specified point is within the extent of the `component` or not
         */
        contains(x: number, y: number, coord_type: CoordType | null): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @returns An alpha value from 0 to 1.0, inclusive.
         */
        get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_extents(coord_type: CoordType | null): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @returns an {@link Atk.Layer} which is the layer of the component
         */
        get_layer(): Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_position(coord_type: CoordType | null): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @returns `true` if successful, `false` otherwise.
         */
        grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns a reference to the accessible child, if one exists
         */
        ref_accessible_at_point(x: number, y: number, coord_type: CoordType | null): Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         */
        remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_to(type: ScrollType | null): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: CoordType | null, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType | null): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @returns `true` or `false` whether or not the position was set or not
         */
        set_position(x: number, y: number, coord_type: CoordType | null): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @returns `true` or `false` whether the size was set or not
         */
        set_size(width: number, height: number): boolean;
    }

    export const Component: ComponentNamespace & {
        new (): Component; // This allows `obj instanceof Component`
    };

    namespace Document {
        /**
         * Interface for implementing Document.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Retrieves the current page number inside `document`.
             * @virtual
             */
            vfunc_get_current_page_number(): number;
            /**
             * Gets a %gpointer that points to an instance of the DOM.  It is
             * up to the caller to check atk_document_get_type to determine
             * how to cast this pointer.
             * @virtual
             */
            vfunc_get_document(): any | null;
            /**
             * Retrieves the value of the given `attribute_name` inside `document`.
             * @param attribute_name a character string representing the name of the attribute   whose value is being queried.
             * @virtual
             */
            vfunc_get_document_attribute_value(attribute_name: string): string | null;
            /**
             * Gets an AtkAttributeSet which describes document-wide
             *          attributes as name-value pairs.
             * @virtual
             */
            vfunc_get_document_attributes(): AttributeSet;
            /**
             * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
             *          of the content of this document instance.  Individual
             *          text substrings or images within this document may have
             *          a different locale, see atk_text_get_attributes and
             *          atk_image_get_image_locale.
             * @virtual
             */
            vfunc_get_document_locale(): string;
            /**
             * Gets a string indicating the document type.
             * @virtual
             */
            vfunc_get_document_type(): string;
            /**
             * Retrieves the total number of pages inside `document`.
             * @virtual
             */
            vfunc_get_page_count(): number;
            /**
             * Returns an array of AtkTextSelections within this document.
             * @virtual
             */
            vfunc_get_text_selections(): TextSelection[];
            /**
             * Sets the value for the given `attribute_name` inside `document`.
             * @param attribute_name a character string representing the name of the attribute   whose value is being set.
             * @param attribute_value a string value to be associated with `attribute_name`.
             * @virtual
             */
            vfunc_set_document_attribute(attribute_name: string, attribute_value: string): boolean;
            /**
             * Makes 1 or more selections within this document denoted by the given
             * array of AtkTextSelections. Any existing physical selection (inside or
             * outside this document) is replaced by the new selections. All objects within
             * the given selection ranges must be descendants of this document. Otherwise
             * FALSE will be returned.
             * @param selections a GArray of AtkTextSelections              to be selected.
             * @virtual
             */
            vfunc_set_text_selections(selections: TextSelection[]): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentNamespace {
        $gtype: GObject.GType<Document>;
        prototype: Document;
    }
    /**
     * The ATK interface which represents the toplevel
     *  container for document content.
     *
     * The AtkDocument interface should be supported by any object whose
     * content is a representation or view of a document.  The AtkDocument
     * interface should appear on the toplevel container for the document
     * content; however AtkDocument instances may be nested (i.e. an
     * AtkDocument may be a descendant of another AtkDocument) in those
     * cases where one document contains "embedded content" which can
     * reasonably be considered a document in its own right.
     * @gir-type Interface
     */
    interface Document extends GObject.Object, Document.Interface {
        // Methods

        /**
         * Retrieves the value of the given `attribute_name` inside `document`.
         * @param attribute_name a character string representing the name of the attribute   whose value is being queried.
         * @returns a string value associated with the named    attribute for this document, or `null` if a value for    `attribute_name` has not been specified for this document.
         */
        get_attribute_value(attribute_name: string): string | null;
        /**
         * Gets an AtkAttributeSet which describes document-wide
         *          attributes as name-value pairs.
         * @returns An AtkAttributeSet containing the explicitly          set name-value-pair attributes associated with this document          as a whole.
         */
        get_attributes(): AttributeSet;
        /**
         * Retrieves the current page number inside `document`.
         * @returns the current page number inside `document`, or -1 if   not implemented, not know by the implementor, or irrelevant.
         */
        get_current_page_number(): number;
        /**
         * Gets a %gpointer that points to an instance of the DOM.  It is
         * up to the caller to check atk_document_get_type to determine
         * how to cast this pointer.
         * @returns a %gpointer that points to an instance of the DOM.
         */
        get_document(): any | null;
        /**
         * Gets a string indicating the document type.
         * @returns a string indicating the document type
         */
        get_document_type(): string;
        /**
         * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
         *          of the content of this document instance.  Individual
         *          text substrings or images within this document may have
         *          a different locale, see atk_text_get_attributes and
         *          atk_image_get_image_locale.
         * @returns a UTF-8 string indicating the POSIX-style LC_MESSAGES          locale of the document content as a whole, or NULL if          the document content does not specify a locale.
         */
        get_locale(): string;
        /**
         * Retrieves the total number of pages inside `document`.
         * @returns total page count of `document`, or -1 if not implemented,   not know by the implementor or irrelevant.
         */
        get_page_count(): number;
        /**
         * Returns an array of AtkTextSelections within this document.
         * @returns a GArray of AtkTextSelection structures representing the selection.
         */
        get_text_selections(): TextSelection[];
        /**
         * Sets the value for the given `attribute_name` inside `document`.
         * @param attribute_name a character string representing the name of the attribute   whose value is being set.
         * @param attribute_value a string value to be associated with `attribute_name`.
         * @returns `true` if `attribute_value` is successfully associated   with `attribute_name` for this `document`, and `false` if if the   document does not allow the attribute to be modified
         */
        set_attribute_value(attribute_name: string, attribute_value: string): boolean;
        /**
         * Makes 1 or more selections within this document denoted by the given
         * array of AtkTextSelections. Any existing physical selection (inside or
         * outside this document) is replaced by the new selections. All objects within
         * the given selection ranges must be descendants of this document. Otherwise
         * FALSE will be returned.
         * @param selections a GArray of AtkTextSelections              to be selected.
         * @returns TRUE if the selection was made successfully; FALSE otherwise.
         */
        set_text_selections(selections: TextSelection[]): boolean;
    }

    export const Document: DocumentNamespace & {
        new (): Document; // This allows `obj instanceof Document`
    };

    namespace EditableText {
        /**
         * Interface for implementing EditableText.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Copy text from `start_pos` up to, but not including `end_pos`
             * to the clipboard.
             * @param start_pos start position
             * @param end_pos end position
             * @virtual
             */
            vfunc_copy_text(start_pos: number, end_pos: number): void;
            /**
             * Copy text from `start_pos` up to, but not including `end_pos`
             * to the clipboard and then delete from the widget.
             * @param start_pos start position
             * @param end_pos end position
             * @virtual
             */
            vfunc_cut_text(start_pos: number, end_pos: number): void;
            /**
             * Delete text `start_pos` up to, but not including `end_pos`.
             * @param start_pos start position
             * @param end_pos end position
             * @virtual
             */
            vfunc_delete_text(start_pos: number, end_pos: number): void;
            /**
             * Insert text at a given position.
             * @param string the text to insert
             * @param length the length of text to insert, in bytes
             * @param position The caller initializes this to the position at which to insert the text. After the call it points at the position after the newly inserted text.
             * @virtual
             */
            vfunc_insert_text(string: string, length: number, position: number): void;
            /**
             * Paste text from clipboard to specified `position`.
             * @param position position to paste
             * @virtual
             */
            vfunc_paste_text(position: number): void;
            /**
             * Sets the attributes for a specified range. See the ATK_ATTRIBUTE
             * macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes
             * that can be set. Note that other attributes that do not have corresponding
             * ATK_ATTRIBUTE macros may also be set for certain text widgets.
             * @param attrib_set an {@link Atk.AttributeSet}
             * @param start_offset start of range in which to set attributes
             * @param end_offset end of range in which to set attributes
             * @virtual
             */
            vfunc_set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean;
            /**
             * Set text contents of `text`.
             * @param string string to set for text contents of `text`
             * @virtual
             */
            vfunc_set_text_contents(string: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface EditableTextNamespace {
        $gtype: GObject.GType<EditableText>;
        prototype: EditableText;
    }
    /**
     * The ATK interface implemented by components containing user-editable text content.
     *
     * {@link Atk.EditableText} should be implemented by UI components which
     * contain text which the user can edit, via the {@link Atk.Object}
     * corresponding to that component (see {@link Atk.Object}).
     *
     * {@link Atk.EditableText} is a subclass of {@link Atk.Text}, and as such, an object
     * which implements {@link Atk.EditableText} is by definition an {@link Atk.Text}
     * implementor as well.
     *
     * See {@link AtkText}
     * @gir-type Interface
     */
    interface EditableText extends GObject.Object, EditableText.Interface {
        // Methods

        /**
         * Copy text from `start_pos` up to, but not including `end_pos`
         * to the clipboard.
         * @param start_pos start position
         * @param end_pos end position
         */
        copy_text(start_pos: number, end_pos: number): void;
        /**
         * Copy text from `start_pos` up to, but not including `end_pos`
         * to the clipboard and then delete from the widget.
         * @param start_pos start position
         * @param end_pos end position
         */
        cut_text(start_pos: number, end_pos: number): void;
        /**
         * Delete text `start_pos` up to, but not including `end_pos`.
         * @param start_pos start position
         * @param end_pos end position
         */
        delete_text(start_pos: number, end_pos: number): void;
        /**
         * Insert text at a given position.
         * @param string the text to insert
         * @param length the length of text to insert, in bytes
         * @param position The caller initializes this to the position at which to insert the text. After the call it points at the position after the newly inserted text.
         */
        insert_text(string: string, length: number, position: number): void;
        /**
         * Paste text from clipboard to specified `position`.
         * @param position position to paste
         */
        paste_text(position: number): void;
        /**
         * Sets the attributes for a specified range. See the ATK_ATTRIBUTE
         * macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes
         * that can be set. Note that other attributes that do not have corresponding
         * ATK_ATTRIBUTE macros may also be set for certain text widgets.
         * @param attrib_set an {@link Atk.AttributeSet}
         * @param start_offset start of range in which to set attributes
         * @param end_offset end of range in which to set attributes
         * @returns `true` if attributes successfully set for the specified range, otherwise `false`
         */
        set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean;
        /**
         * Set text contents of `text`.
         * @param string string to set for text contents of `text`
         */
        set_text_contents(string: string): void;
    }

    export const EditableText: EditableTextNamespace & {
        new (): EditableText; // This allows `obj instanceof EditableText`
    };

    namespace HyperlinkImpl {
        /**
         * Interface for implementing HyperlinkImpl.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets the hyperlink associated with this object.
             * @virtual
             */
            vfunc_get_hyperlink(): Hyperlink;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface HyperlinkImplNamespace {
        $gtype: GObject.GType<HyperlinkImpl>;
        prototype: HyperlinkImpl;
    }
    /**
     * A queryable interface which allows AtkHyperlink instances
     * associated with an AtkObject to be obtained.  AtkHyperlinkImpl
     * corresponds to AT-SPI's Hyperlink interface, and differs from
     * AtkHyperlink in that AtkHyperlink is an object type, rather than an
     * interface, and thus cannot be directly queried. FTW
     * @gir-type Interface
     */
    interface HyperlinkImpl extends GObject.Object, HyperlinkImpl.Interface {
        // Methods

        /**
         * Gets the hyperlink associated with this object.
         * @returns an AtkHyperlink object which points to this implementing AtkObject.
         */
        get_hyperlink(): Hyperlink;
    }

    export const HyperlinkImpl: HyperlinkImplNamespace & {
        new (): HyperlinkImpl; // This allows `obj instanceof HyperlinkImpl`
    };

    namespace Hypertext {
        /**
         * Interface for implementing Hypertext.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets the link in this hypertext document at index
             * `link_index`
             * @param link_index an integer specifying the desired link
             * @virtual
             */
            vfunc_get_link(link_index: number): Hyperlink;
            /**
             * Gets the index into the array of hyperlinks that is associated with
             * the character specified by `char_index`.
             * @param char_index a character index
             * @virtual
             */
            vfunc_get_link_index(char_index: number): number;
            /**
             * Gets the number of links within this hypertext document.
             * @virtual
             */
            vfunc_get_n_links(): number;
            /**
             * @param link_index
             * @virtual
             */
            vfunc_link_selected(link_index: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface HypertextNamespace {
        $gtype: GObject.GType<Hypertext>;
        prototype: Hypertext;
    }
    /**
     * The ATK interface which provides standard mechanism for manipulating hyperlinks.
     *
     * An interface used for objects which implement linking between
     * multiple resource or content locations, or multiple 'markers'
     * within a single document.  A Hypertext instance is associated with
     * one or more Hyperlinks, which are associated with particular
     * offsets within the Hypertext's included content.  While this
     * interface is derived from Text, there is no requirement that
     * Hypertext instances have textual content; they may implement Image
     * as well, and Hyperlinks need not have non-zero text offsets.
     * @gir-type Interface
     */
    interface Hypertext extends GObject.Object, Hypertext.Interface {
        // Methods

        /**
         * Gets the link in this hypertext document at index
         * `link_index`
         * @param link_index an integer specifying the desired link
         * @returns the link in this hypertext document at index `link_index`
         */
        get_link(link_index: number): Hyperlink;
        /**
         * Gets the index into the array of hyperlinks that is associated with
         * the character specified by `char_index`.
         * @param char_index a character index
         * @returns an index into the array of hyperlinks in `hypertext`, or -1 if there is no hyperlink associated with this character.
         */
        get_link_index(char_index: number): number;
        /**
         * Gets the number of links within this hypertext document.
         * @returns the number of links within this hypertext document
         */
        get_n_links(): number;
    }

    export const Hypertext: HypertextNamespace & {
        new (): Hypertext; // This allows `obj instanceof Hypertext`
    };

    namespace Image {
        /**
         * Interface for implementing Image.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Get a textual description of this image.
             * @virtual
             */
            vfunc_get_image_description(): string;
            /**
             * Retrieves the locale identifier associated to the {@link Atk.Image}.
             * @virtual
             */
            vfunc_get_image_locale(): string | null;
            /**
             * Gets the position of the image in the form of a point specifying the
             * images top-left corner.
             *
             * If the position can not be obtained (e.g. missing support), x and y are set
             * to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @virtual
             */
            vfunc_get_image_position(coord_type: CoordType): [number, number];
            /**
             * Get the width and height in pixels for the specified image.
             * The values of `width` and `height` are returned as -1 if the
             * values cannot be obtained (for instance, if the object is not onscreen).
             *
             * If the size can not be obtained (e.g. missing support), x and y are set
             * to -1.
             * @virtual
             */
            vfunc_get_image_size(): [number, number];
            /**
             * Sets the textual description for this image.
             * @param description a string description to set for `image`
             * @virtual
             */
            vfunc_set_image_description(description: string): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ImageNamespace {
        $gtype: GObject.GType<Image>;
        prototype: Image;
    }
    /**
     * The ATK Interface implemented by components
     *  which expose image or pixmap content on-screen.
     *
     * {@link Atk.Image} should be implemented by {@link Atk.Object} subtypes on behalf of
     * components which display image/pixmap information onscreen, and
     * which provide information (other than just widget borders, etc.)
     * via that image content.  For instance, icons, buttons with icons,
     * toolbar elements, and image viewing panes typically should
     * implement {@link Atk.Image}.
     *
     * {@link Atk.Image} primarily provides two types of information: coordinate
     * information (useful for screen review mode of screenreaders, and
     * for use by onscreen magnifiers), and descriptive information.  The
     * descriptive information is provided for alternative, text-only
     * presentation of the most significant information present in the
     * image.
     * @gir-type Interface
     */
    interface Image extends GObject.Object, Image.Interface {
        // Methods

        /**
         * Get a textual description of this image.
         * @returns a string representing the image description
         */
        get_image_description(): string;
        /**
         * Retrieves the locale identifier associated to the {@link Atk.Image}.
         * @returns a string corresponding to the POSIX   `LC_MESSAGES` locale used by the image description, or   `null` if the image does not specify a locale.
         */
        get_image_locale(): string | null;
        /**
         * Gets the position of the image in the form of a point specifying the
         * images top-left corner.
         *
         * If the position can not be obtained (e.g. missing support), x and y are set
         * to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_image_position(coord_type: CoordType | null): [number, number];
        /**
         * Get the width and height in pixels for the specified image.
         * The values of `width` and `height` are returned as -1 if the
         * values cannot be obtained (for instance, if the object is not onscreen).
         *
         * If the size can not be obtained (e.g. missing support), x and y are set
         * to -1.
         */
        get_image_size(): [number, number];
        /**
         * Sets the textual description for this image.
         * @param description a string description to set for `image`
         * @returns boolean TRUE, or FALSE if operation could not be completed.
         */
        set_image_description(description: string): boolean;
    }

    export const Image: ImageNamespace & {
        new (): Image; // This allows `obj instanceof Image`
    };

    namespace ImplementorIface {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ImplementorIfaceNamespace {
        $gtype: GObject.GType<ImplementorIface>;
        prototype: ImplementorIface;
    }
    /**
     * The AtkImplementor interface is implemented by objects for which
     * AtkObject peers may be obtained via calls to
     * iface->(ref_accessible)(implementor);
     * @gir-type Interface
     */
    interface ImplementorIface extends GObject.Object {}

    export const ImplementorIface: ImplementorIfaceNamespace & {
        new (): ImplementorIface; // This allows `obj instanceof ImplementorIface`
    };

    namespace Selection {
        /**
         * Interface for implementing Selection.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Adds the specified accessible child of the object to the
             * object's selection.
             * @param i a `gint` specifying the child index.
             * @virtual
             */
            vfunc_add_selection(i: number): boolean;
            /**
             * Clears the selection in the object so that no children in the object
             * are selected.
             * @virtual
             */
            vfunc_clear_selection(): boolean;
            /**
             * Gets the number of accessible children currently selected.
             * Note: callers should not rely on `null` or on a zero value for
             * indication of whether AtkSelectionIface is implemented, they should
             * use type checking/interface checking macros or the
             * `atk_get_accessible_value()` convenience method.
             * @virtual
             */
            vfunc_get_selection_count(): number;
            /**
             * Determines if the current child of this object is selected
             * Note: callers should not rely on `null` or on a zero value for
             * indication of whether AtkSelectionIface is implemented, they should
             * use type checking/interface checking macros or the
             * `atk_get_accessible_value()` convenience method.
             * @param i a `gint` specifying the child index.
             * @virtual
             */
            vfunc_is_child_selected(i: number): boolean;
            /**
             * Gets a reference to the accessible object representing the specified
             * selected child of the object.
             * Note: callers should not rely on `null` or on a zero value for
             * indication of whether AtkSelectionIface is implemented, they should
             * use type checking/interface checking macros or the
             * `atk_get_accessible_value()` convenience method.
             * @param i a `gint` specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
             * @virtual
             */
            vfunc_ref_selection(i: number): Object | null;
            /**
             * Removes the specified child of the object from the object's selection.
             * @param i a `gint` specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
             * @virtual
             */
            vfunc_remove_selection(i: number): boolean;
            /**
             * Causes every child of the object to be selected if the object
             * supports multiple selections.
             * @virtual
             */
            vfunc_select_all_selection(): boolean;
            /**
             * @virtual
             */
            vfunc_selection_changed(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SelectionNamespace {
        $gtype: GObject.GType<Selection>;
        prototype: Selection;
    }
    /**
     * The ATK interface implemented by container objects whose {@link Atk.Object} children can be selected.
     *
     * {@link Atk.Selection} should be implemented by UI components with children
     * which are exposed by `atk_object_ref_child` and
     * `atk_object_get_n_children`, if the use of the parent UI component
     * ordinarily involves selection of one or more of the objects
     * corresponding to those {@link Atk.Object} children - for example,
     * selectable lists.
     *
     * Note that other types of "selection" (for instance text selection)
     * are accomplished a other ATK interfaces - {@link Atk.Selection} is limited
     * to the selection/deselection of children.
     * @gir-type Interface
     */
    interface Selection extends GObject.Object, Selection.Interface {
        // Methods

        /**
         * Adds the specified accessible child of the object to the
         * object's selection.
         * @param i a `gint` specifying the child index.
         * @returns TRUE if success, FALSE otherwise.
         */
        add_selection(i: number): boolean;
        /**
         * Clears the selection in the object so that no children in the object
         * are selected.
         * @returns TRUE if success, FALSE otherwise.
         */
        clear_selection(): boolean;
        /**
         * Gets the number of accessible children currently selected.
         * Note: callers should not rely on `null` or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * `atk_get_accessible_value()` convenience method.
         * @returns a gint representing the number of items selected, or 0 if `selection` does not implement this interface.
         */
        get_selection_count(): number;
        /**
         * Determines if the current child of this object is selected
         * Note: callers should not rely on `null` or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * `atk_get_accessible_value()` convenience method.
         * @param i a `gint` specifying the child index.
         * @returns a gboolean representing the specified child is selected, or 0 if `selection` does not implement this interface.
         */
        is_child_selected(i: number): boolean;
        /**
         * Gets a reference to the accessible object representing the specified
         * selected child of the object.
         * Note: callers should not rely on `null` or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * `atk_get_accessible_value()` convenience method.
         * @param i a `gint` specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
         * @returns an {@link Atk.Object} representing the selected accessible, or `null` if `selection` does not implement this interface.
         */
        ref_selection(i: number): Object | null;
        /**
         * Removes the specified child of the object from the object's selection.
         * @param i a `gint` specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
         * @returns TRUE if success, FALSE otherwise.
         */
        remove_selection(i: number): boolean;
        /**
         * Causes every child of the object to be selected if the object
         * supports multiple selections.
         * @returns TRUE if success, FALSE otherwise.
         */
        select_all_selection(): boolean;
    }

    export const Selection: SelectionNamespace & {
        new (): Selection; // This allows `obj instanceof Selection`
    };

    namespace StreamableContent {
        /**
         * Interface for implementing StreamableContent.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets the character string of the specified mime type. The first mime
             * type is at position 0, the second at position 1, and so on.
             * @param i a gint representing the position of the mime type starting from 0
             * @virtual
             */
            vfunc_get_mime_type(i: number): string;
            /**
             * Gets the number of mime types supported by this object.
             * @virtual
             */
            vfunc_get_n_mime_types(): number;
            /**
             * Gets the content in the specified mime type.
             * @param mime_type a gchar* representing the mime type
             * @virtual
             */
            vfunc_get_stream(mime_type: string): GLib.IOChannel;
            /**
             * Get a string representing a URI in IETF standard format
             * (see http://www.ietf.org/rfc/rfc2396.txt) from which the object's content
             * may be streamed in the specified mime-type, if one is available.
             * If mime_type is NULL, the URI for the default (and possibly only) mime-type is
             * returned.
             *
             * Note that it is possible for get_uri to return NULL but for
             * get_stream to work nonetheless, since not all GIOChannels connect to URIs.
             * @param mime_type a gchar* representing the mime type, or NULL to request a URI for the default mime type.
             * @virtual
             */
            vfunc_get_uri(mime_type: string): string | null;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface StreamableContentNamespace {
        $gtype: GObject.GType<StreamableContent>;
        prototype: StreamableContent;
    }
    /**
     * The ATK interface which provides access to streamable content.
     *
     * An interface whereby an object allows its backing content to be
     * streamed to clients.  Typical implementors would be images or
     * icons, HTML content, or multimedia display/rendering widgets.
     *
     * Negotiation of content type is allowed. Clients may examine the
     * backing data and transform, convert, or parse the content in order
     * to present it in an alternate form to end-users.
     *
     * The AtkStreamableContent interface is particularly useful for
     * saving, printing, or post-processing entire documents, or for
     * persisting alternate views of a document. If document content
     * itself is being serialized, stored, or converted, then use of the
     * AtkStreamableContent interface can help address performance
     * issues. Unlike most ATK interfaces, this interface is not strongly
     * tied to the current user-agent view of the a particular document,
     * but may in some cases give access to the underlying model data.
     * @gir-type Interface
     */
    interface StreamableContent extends GObject.Object, StreamableContent.Interface {
        // Methods

        /**
         * Gets the character string of the specified mime type. The first mime
         * type is at position 0, the second at position 1, and so on.
         * @param i a gint representing the position of the mime type starting from 0
         * @returns a gchar* representing the specified mime type; the caller should not free the character string.
         */
        get_mime_type(i: number): string;
        /**
         * Gets the number of mime types supported by this object.
         * @returns a gint which is the number of mime types supported by the object.
         */
        get_n_mime_types(): number;
        /**
         * Gets the content in the specified mime type.
         * @param mime_type a gchar* representing the mime type
         * @returns A {@link GLib.IOChannel} which contains the content in the specified mime type.
         */
        get_stream(mime_type: string): GLib.IOChannel;
        /**
         * Get a string representing a URI in IETF standard format
         * (see http://www.ietf.org/rfc/rfc2396.txt) from which the object's content
         * may be streamed in the specified mime-type, if one is available.
         * If mime_type is NULL, the URI for the default (and possibly only) mime-type is
         * returned.
         *
         * Note that it is possible for get_uri to return NULL but for
         * get_stream to work nonetheless, since not all GIOChannels connect to URIs.
         * @param mime_type a gchar* representing the mime type, or NULL to request a URI for the default mime type.
         * @returns Returns a string representing a URI, or `null` if no corresponding URI can be constructed.
         */
        get_uri(mime_type: string): string | null;
    }

    export const StreamableContent: StreamableContentNamespace & {
        new (): StreamableContent; // This allows `obj instanceof StreamableContent`
    };

    namespace Table {
        /**
         * Interface for implementing Table.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Adds the specified `column` to the selection.
             * @param column a `gint` representing a column in `table`
             * @virtual
             */
            vfunc_add_column_selection(column: number): boolean;
            /**
             * Adds the specified `row` to the selection.
             * @param row a `gint` representing a row in `table`
             * @virtual
             */
            vfunc_add_row_selection(row: number): boolean;
            /**
             * @param column
             * @param num_deleted
             * @virtual
             */
            vfunc_column_deleted(column: number, num_deleted: number): void;
            /**
             * @param column
             * @param num_inserted
             * @virtual
             */
            vfunc_column_inserted(column: number, num_inserted: number): void;
            /**
             * @virtual
             */
            vfunc_column_reordered(): void;
            /**
             * Gets the caption for the `table`.
             * @virtual
             */
            vfunc_get_caption(): Object | null;
            /**
             * Gets a `gint` representing the column at the specified `index_`.
             * @param index_ a `gint` representing an index in `table`
             * @virtual
             */
            vfunc_get_column_at_index(index_: number): number;
            /**
             * Gets the description text of the specified `column` in the table
             * @param column a `gint` representing a column in `table`
             * @virtual
             */
            vfunc_get_column_description(column: number): string;
            /**
             * Gets the number of columns occupied by the accessible object
             * at the specified `row` and `column` in the `table`.
             * @param row a `gint` representing a row in `table`
             * @param column a `gint` representing a column in `table`
             * @virtual
             */
            vfunc_get_column_extent_at(row: number, column: number): number;
            /**
             * Gets the column header of a specified column in an accessible table.
             * @param column a `gint` representing a column in the table
             * @virtual
             */
            vfunc_get_column_header(column: number): Object | null;
            /**
             * Gets a `gint` representing the index at the specified `row` and
             * `column`.
             * @param row a `gint` representing a row in `table`
             * @param column a `gint` representing a column in `table`
             * @virtual
             */
            vfunc_get_index_at(row: number, column: number): number;
            /**
             * Gets the number of columns in the table.
             * @virtual
             */
            vfunc_get_n_columns(): number;
            /**
             * Gets the number of rows in the table.
             * @virtual
             */
            vfunc_get_n_rows(): number;
            /**
             * Gets a `gint` representing the row at the specified `index_`.
             * @param index_ a `gint` representing an index in `table`
             * @virtual
             */
            vfunc_get_row_at_index(index_: number): number;
            /**
             * Gets the description text of the specified row in the table
             * @param row a `gint` representing a row in `table`
             * @virtual
             */
            vfunc_get_row_description(row: number): string | null;
            /**
             * Gets the number of rows occupied by the accessible object
             * at a specified `row` and `column` in the `table`.
             * @param row a `gint` representing a row in `table`
             * @param column a `gint` representing a column in `table`
             * @virtual
             */
            vfunc_get_row_extent_at(row: number, column: number): number;
            /**
             * Gets the row header of a specified row in an accessible table.
             * @param row a `gint` representing a row in the table
             * @virtual
             */
            vfunc_get_row_header(row: number): Object | null;
            /**
             * Gets the selected columns of the table by initializing **selected with
             * the selected column numbers. This array should be freed by the caller.
             * @param selected a `gint`** that is to contain the selected columns numbers
             * @virtual
             */
            vfunc_get_selected_columns(selected: number): number;
            /**
             * Gets the selected rows of the table by initializing **selected with
             * the selected row numbers. This array should be freed by the caller.
             * @param selected a `gint`** that is to contain the selected row numbers
             * @virtual
             */
            vfunc_get_selected_rows(selected: number): number;
            /**
             * Gets the summary description of the table.
             * @virtual
             */
            vfunc_get_summary(): Object;
            /**
             * Gets a boolean value indicating whether the specified `column`
             * is selected
             * @param column a `gint` representing a column in `table`
             * @virtual
             */
            vfunc_is_column_selected(column: number): boolean;
            /**
             * Gets a boolean value indicating whether the specified `row`
             * is selected
             * @param row a `gint` representing a row in `table`
             * @virtual
             */
            vfunc_is_row_selected(row: number): boolean;
            /**
             * Gets a boolean value indicating whether the accessible object
             * at the specified `row` and `column` is selected
             * @param row a `gint` representing a row in `table`
             * @param column a `gint` representing a column in `table`
             * @virtual
             */
            vfunc_is_selected(row: number, column: number): boolean;
            /**
             * @virtual
             */
            vfunc_model_changed(): void;
            /**
             * Get a reference to the table cell at `row`, `column`. This cell
             * should implement the interface {@link Atk.TableCell}
             * @param row a `gint` representing a row in `table`
             * @param column a `gint` representing a column in `table`
             * @virtual
             */
            vfunc_ref_at(row: number, column: number): Object;
            /**
             * Adds the specified `column` to the selection.
             * @param column a `gint` representing a column in `table`
             * @virtual
             */
            vfunc_remove_column_selection(column: number): boolean;
            /**
             * Removes the specified `row` from the selection.
             * @param row a `gint` representing a row in `table`
             * @virtual
             */
            vfunc_remove_row_selection(row: number): boolean;
            /**
             * @param row
             * @param num_deleted
             * @virtual
             */
            vfunc_row_deleted(row: number, num_deleted: number): void;
            /**
             * @param row
             * @param num_inserted
             * @virtual
             */
            vfunc_row_inserted(row: number, num_inserted: number): void;
            /**
             * @virtual
             */
            vfunc_row_reordered(): void;
            /**
             * Sets the caption for the table.
             * @param caption a {@link Atk.Object} representing the caption to set for `table`
             * @virtual
             */
            vfunc_set_caption(caption: Object): void;
            /**
             * Sets the description text for the specified `column` of the `table`.
             * @param column a `gint` representing a column in `table`
             * @param description a `gchar` representing the description text to set for the specified `column` of the `table`
             * @virtual
             */
            vfunc_set_column_description(column: number, description: string): void;
            /**
             * Sets the specified column header to `header`.
             * @param column a `gint` representing a column in `table`
             * @param header an {@link Atk.Table}
             * @virtual
             */
            vfunc_set_column_header(column: number, header: Object): void;
            /**
             * Sets the description text for the specified `row` of `table`.
             * @param row a `gint` representing a row in `table`
             * @param description a `gchar` representing the description text to set for the specified `row` of `table`
             * @virtual
             */
            vfunc_set_row_description(row: number, description: string): void;
            /**
             * Sets the specified row header to `header`.
             * @param row a `gint` representing a row in `table`
             * @param header an {@link Atk.Table}
             * @virtual
             */
            vfunc_set_row_header(row: number, header: Object): void;
            /**
             * Sets the summary description of the table.
             * @param accessible an {@link Atk.Object} representing the summary description to set for `table`
             * @virtual
             */
            vfunc_set_summary(accessible: Object): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface TableNamespace {
        $gtype: GObject.GType<Table>;
        prototype: Table;
    }
    /**
     * The ATK interface implemented for UI components which contain tabular or row/column information.
     *
     * {@link Atk.Table} should be implemented by components which present
     * elements ordered via rows and columns.  It may also be used to
     * present tree-structured information if the nodes of the trees can
     * be said to contain multiple "columns".  Individual elements of an
     * {@link Atk.Table} are typically referred to as "cells". Those cells should
     * implement the interface {@link Atk.TableCell}, but `Atk` doesn't require
     * them to be direct children of the current {@link Atk.Table}. They can be
     * grand-children, grand-grand-children etc. {@link Atk.Table} provides the
     * API needed to get a individual cell based on the row and column
     * numbers.
     *
     * Children of {@link Atk.Table} are frequently "lightweight" objects, that
     * is, they may not have backing widgets in the host UI toolkit.  They
     * are therefore often transient.
     *
     * Since tables are often very complex, {@link Atk.Table} includes provision
     * for offering simplified summary information, as well as row and
     * column headers and captions.  Headers and captions are `AtkObjects`
     * which may implement other interfaces ({@link Atk.Text}, {@link Atk.Image}, etc.) as
     * appropriate.  {@link Atk.Table} summaries may themselves be (simplified)
     * `AtkTables`, etc.
     *
     * Note for implementors: in the past, {@link Atk.Table} required that all the
     * cells should be direct children of {@link Atk.Table}, and provided some
     * index based methods to request the cells. The practice showed that
     * that forcing made {@link Atk.Table} implementation complex, and hard to
     * expose other kind of children, like rows or captions. Right now,
     * index-based methods are deprecated.
     * @gir-type Interface
     */
    interface Table extends GObject.Object, Table.Interface {
        // Methods

        /**
         * Adds the specified `column` to the selection.
         * @param column a `gint` representing a column in `table`
         * @returns a gboolean representing if the column was successfully added to the selection, or 0 if value does not implement this interface.
         */
        add_column_selection(column: number): boolean;
        /**
         * Adds the specified `row` to the selection.
         * @param row a `gint` representing a row in `table`
         * @returns a gboolean representing if row was successfully added to selection, or 0 if value does not implement this interface.
         */
        add_row_selection(row: number): boolean;
        /**
         * Gets the caption for the `table`.
         * @returns a AtkObject* representing the table caption, or `null` if value does not implement this interface.
         */
        get_caption(): Object | null;
        /**
         * Gets a `gint` representing the column at the specified `index_`.
         * @param index_ a `gint` representing an index in `table`
         * @returns a gint representing the column at the specified index, or -1 if the table does not implement this method.
         */
        get_column_at_index(index_: number): number;
        /**
         * Gets the description text of the specified `column` in the table
         * @param column a `gint` representing a column in `table`
         * @returns a gchar* representing the column description, or `null` if value does not implement this interface.
         */
        get_column_description(column: number): string;
        /**
         * Gets the number of columns occupied by the accessible object
         * at the specified `row` and `column` in the `table`.
         * @param row a `gint` representing a row in `table`
         * @param column a `gint` representing a column in `table`
         * @returns a gint representing the column extent at specified position, or 0 if value does not implement this interface.
         */
        get_column_extent_at(row: number, column: number): number;
        /**
         * Gets the column header of a specified column in an accessible table.
         * @param column a `gint` representing a column in the table
         * @returns a AtkObject* representing the specified column header, or `null` if value does not implement this interface.
         */
        get_column_header(column: number): Object | null;
        /**
         * Gets a `gint` representing the index at the specified `row` and
         * `column`.
         * @param row a `gint` representing a row in `table`
         * @param column a `gint` representing a column in `table`
         * @returns a `gint` representing the index at specified position. The value -1 is returned if the object at row,column is not a child of table or table does not implement this interface.
         */
        get_index_at(row: number, column: number): number;
        /**
         * Gets the number of columns in the table.
         * @returns a gint representing the number of columns, or 0 if value does not implement this interface.
         */
        get_n_columns(): number;
        /**
         * Gets the number of rows in the table.
         * @returns a gint representing the number of rows, or 0 if value does not implement this interface.
         */
        get_n_rows(): number;
        /**
         * Gets a `gint` representing the row at the specified `index_`.
         * @param index_ a `gint` representing an index in `table`
         * @returns a gint representing the row at the specified index, or -1 if the table does not implement this method.
         */
        get_row_at_index(index_: number): number;
        /**
         * Gets the description text of the specified row in the table
         * @param row a `gint` representing a row in `table`
         * @returns a gchar* representing the row description, or `null` if value does not implement this interface.
         */
        get_row_description(row: number): string | null;
        /**
         * Gets the number of rows occupied by the accessible object
         * at a specified `row` and `column` in the `table`.
         * @param row a `gint` representing a row in `table`
         * @param column a `gint` representing a column in `table`
         * @returns a gint representing the row extent at specified position, or 0 if value does not implement this interface.
         */
        get_row_extent_at(row: number, column: number): number;
        /**
         * Gets the row header of a specified row in an accessible table.
         * @param row a `gint` representing a row in the table
         * @returns a AtkObject* representing the specified row header, or `null` if value does not implement this interface.
         */
        get_row_header(row: number): Object | null;
        /**
         * Gets the selected columns of the table by initializing **selected with
         * the selected column numbers. This array should be freed by the caller.
         * @param selected a `gint`** that is to contain the selected columns numbers
         * @returns a gint representing the number of selected columns, or %0 if value does not implement this interface.
         */
        get_selected_columns(selected: number): number;
        /**
         * Gets the selected rows of the table by initializing **selected with
         * the selected row numbers. This array should be freed by the caller.
         * @param selected a `gint`** that is to contain the selected row numbers
         * @returns a gint representing the number of selected rows, or zero if value does not implement this interface.
         */
        get_selected_rows(selected: number): number;
        /**
         * Gets the summary description of the table.
         * @returns a AtkObject* representing a summary description of the table, or zero if value does not implement this interface.
         */
        get_summary(): Object;
        /**
         * Gets a boolean value indicating whether the specified `column`
         * is selected
         * @param column a `gint` representing a column in `table`
         * @returns a gboolean representing if the column is selected, or 0 if value does not implement this interface.
         */
        is_column_selected(column: number): boolean;
        /**
         * Gets a boolean value indicating whether the specified `row`
         * is selected
         * @param row a `gint` representing a row in `table`
         * @returns a gboolean representing if the row is selected, or 0 if value does not implement this interface.
         */
        is_row_selected(row: number): boolean;
        /**
         * Gets a boolean value indicating whether the accessible object
         * at the specified `row` and `column` is selected
         * @param row a `gint` representing a row in `table`
         * @param column a `gint` representing a column in `table`
         * @returns a gboolean representing if the cell is selected, or 0 if value does not implement this interface.
         */
        is_selected(row: number, column: number): boolean;
        /**
         * Get a reference to the table cell at `row`, `column`. This cell
         * should implement the interface {@link Atk.TableCell}
         * @param row a `gint` representing a row in `table`
         * @param column a `gint` representing a column in `table`
         * @returns an {@link Atk.Object} representing the referred to accessible
         */
        ref_at(row: number, column: number): Object;
        /**
         * Adds the specified `column` to the selection.
         * @param column a `gint` representing a column in `table`
         * @returns a gboolean representing if the column was successfully removed from the selection, or 0 if value does not implement this interface.
         */
        remove_column_selection(column: number): boolean;
        /**
         * Removes the specified `row` from the selection.
         * @param row a `gint` representing a row in `table`
         * @returns a gboolean representing if the row was successfully removed from the selection, or 0 if value does not implement this interface.
         */
        remove_row_selection(row: number): boolean;
        /**
         * Sets the caption for the table.
         * @param caption a {@link Atk.Object} representing the caption to set for `table`
         */
        set_caption(caption: Object): void;
        /**
         * Sets the description text for the specified `column` of the `table`.
         * @param column a `gint` representing a column in `table`
         * @param description a `gchar` representing the description text to set for the specified `column` of the `table`
         */
        set_column_description(column: number, description: string): void;
        /**
         * Sets the specified column header to `header`.
         * @param column a `gint` representing a column in `table`
         * @param header an {@link Atk.Table}
         */
        set_column_header(column: number, header: Object): void;
        /**
         * Sets the description text for the specified `row` of `table`.
         * @param row a `gint` representing a row in `table`
         * @param description a `gchar` representing the description text to set for the specified `row` of `table`
         */
        set_row_description(row: number, description: string): void;
        /**
         * Sets the specified row header to `header`.
         * @param row a `gint` representing a row in `table`
         * @param header an {@link Atk.Table}
         */
        set_row_header(row: number, header: Object): void;
        /**
         * Sets the summary description of the table.
         * @param accessible an {@link Atk.Object} representing the summary description to set for `table`
         */
        set_summary(accessible: Object): void;
    }

    export const Table: TableNamespace & {
        new (): Table; // This allows `obj instanceof Table`
    };

    namespace TableCell {
        /**
         * Interface for implementing TableCell.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Returns the column headers as an array of cell accessibles.
             * @virtual
             */
            vfunc_get_column_header_cells(): Object[];
            /**
             * Returns the number of columns occupied by this cell accessible.
             * @virtual
             */
            vfunc_get_column_span(): number;
            /**
             * Retrieves the tabular position of this cell.
             * @virtual
             */
            vfunc_get_position(): [boolean, number, number];
            /**
             * Gets the row and column indexes and span of this cell accessible.
             *
             * Note: If the object does not implement this function, then, by default, atk
             * will implement this function by calling get_row_span and get_column_span
             * on the object.
             * @virtual
             */
            vfunc_get_row_column_span(): [boolean, number, number, number, number];
            /**
             * Returns the row headers as an array of cell accessibles.
             * @virtual
             */
            vfunc_get_row_header_cells(): Object[];
            /**
             * Returns the number of rows occupied by this cell accessible.
             * @virtual
             */
            vfunc_get_row_span(): number;
            /**
             * Returns a reference to the accessible of the containing table.
             * @virtual
             */
            vfunc_get_table(): Object;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    export interface TableCellNamespace {
        $gtype: GObject.GType<TableCell>;
        prototype: TableCell;
    }
    /**
     * The ATK interface implemented for a cell inside a two-dimentional {@link Atk.Table}
     *
     * Being {@link Atk.Table} a component which present elements ordered via rows
     * and columns, an {@link Atk.TableCell} is the interface which each of those
     * elements, so "cells" should implement.
     *
     * See {@link AtkTable}
     * @gir-type Interface
     */
    interface TableCell extends Object, TableCell.Interface {
        // Methods

        /**
         * Returns the column headers as an array of cell accessibles.
         * @returns a GPtrArray of AtkObjects representing the column header cells.
         */
        get_column_header_cells(): Object[];
        /**
         * Returns the number of columns occupied by this cell accessible.
         * @returns a gint representing the number of columns occupied by this cell, or 0 if the cell does not implement this method.
         */
        get_column_span(): number;
        /**
         * Retrieves the tabular position of this cell.
         * @returns TRUE if successful; FALSE otherwise.
         */
        get_position(): [boolean, number, number];
        /**
         * Gets the row and column indexes and span of this cell accessible.
         *
         * Note: If the object does not implement this function, then, by default, atk
         * will implement this function by calling get_row_span and get_column_span
         * on the object.
         * @returns TRUE if successful; FALSE otherwise.
         */
        get_row_column_span(): [boolean, number, number, number, number];
        /**
         * Returns the row headers as an array of cell accessibles.
         * @returns a GPtrArray of AtkObjects representing the row header cells.
         */
        get_row_header_cells(): Object[];
        /**
         * Returns the number of rows occupied by this cell accessible.
         * @returns a gint representing the number of rows occupied by this cell, or 0 if the cell does not implement this method.
         */
        get_row_span(): number;
        /**
         * Returns a reference to the accessible of the containing table.
         * @returns the atk object for the containing table.
         */
        get_table(): Object;
    }

    export const TableCell: TableCellNamespace & {
        new (): TableCell; // This allows `obj instanceof TableCell`
    };

    namespace Text {
        /**
         * Interface for implementing Text.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Adds a selection bounded by the specified offsets.
             * @param start_offset the starting character offset of the selected region
             * @param end_offset the offset of the first character after the selected region.
             * @virtual
             */
            vfunc_add_selection(start_offset: number, end_offset: number): boolean;
            /**
             * Get the ranges of text in the specified bounding box.
             * @param rect An AtkTextRectangle giving the dimensions of the bounding box.
             * @param coord_type Specify whether coordinates are relative to the screen or widget window.
             * @param x_clip_type Specify the horizontal clip type.
             * @param y_clip_type Specify the vertical clip type.
             * @virtual
             */
            vfunc_get_bounded_ranges(
                rect: TextRectangle,
                coord_type: CoordType,
                x_clip_type: TextClipType,
                y_clip_type: TextClipType,
            ): TextRange[];
            /**
             * Gets the offset of the position of the caret (cursor).
             * @virtual
             */
            vfunc_get_caret_offset(): number;
            /**
             * Gets the specified text.
             * @param offset a character offset within `text`
             * @virtual
             */
            vfunc_get_character_at_offset(offset: number): string;
            /**
             * Gets the character count.
             * @virtual
             */
            vfunc_get_character_count(): number;
            /**
             * If the extent can not be obtained (e.g. missing support), all of x, y, width,
             * height are set to -1.
             *
             * Get the bounding box containing the glyph representing the character at
             *     a particular text offset.
             * @param offset The offset of the text character for which bounding information is required.
             * @param coords specify whether coordinates are relative to the screen or widget window
             * @virtual
             */
            vfunc_get_character_extents(offset: number, coords: CoordType): [number, number, number, number];
            /**
             * Creates an {@link Atk.AttributeSet} which consists of the default values of
             * attributes for the text. See the enum AtkTextAttribute for types of text
             * attributes that can be returned. Note that other attributes may also be
             * returned.
             * @virtual
             */
            vfunc_get_default_attributes(): AttributeSet;
            /**
             * Gets the number of selected regions.
             * @virtual
             */
            vfunc_get_n_selections(): number;
            /**
             * Gets the offset of the character located at coordinates `x` and `y`. `x` and `y`
             * are interpreted as being relative to the screen or this widget's window
             * depending on `coords`.
             * @param x screen x-position of character
             * @param y screen y-position of character
             * @param coords specify whether coordinates are relative to the screen or widget window
             * @virtual
             */
            vfunc_get_offset_at_point(x: number, y: number, coords: CoordType): number;
            /**
             * Get the bounding box for text within the specified range.
             *
             * If the extents can not be obtained (e.g. or missing support), the rectangle
             * fields are set to -1.
             * @param start_offset The offset of the first text character for which boundary        information is required.
             * @param end_offset The offset of the text character after the last character        for which boundary information is required.
             * @param coord_type Specify whether coordinates are relative to the screen or widget window.
             * @virtual
             */
            vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType): TextRectangle;
            /**
             * Creates an {@link Atk.AttributeSet} which consists of the attributes explicitly
             * set at the position `offset` in the text. `start_offset` and `end_offset` are
             * set to the start and end of the range around `offset` where the attributes are
             * invariant. Note that `end_offset` is the offset of the first character
             * after the range.  See the enum AtkTextAttribute for types of text
             * attributes that can be returned. Note that other attributes may also be
             * returned.
             * @param offset the character offset at which to get the attributes, -1 means the offset of the character to be inserted at the caret location.
             * @virtual
             */
            vfunc_get_run_attributes(offset: number): [AttributeSet, number, number];
            /**
             * Gets the text from the specified selection.
             * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
             * @virtual
             */
            vfunc_get_selection(selection_num: number): [string, number, number];
            /**
             * Gets a portion of the text exposed through an {@link Atk.Text} according to a given `offset`
             * and a specific `granularity`, along with the start and end offsets defining the
             * boundaries of such a portion of text.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_CHAR the character at the
             * offset is returned.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_WORD the returned string
             * is from the word start at or before the offset to the word start after
             * the offset.
             *
             * The returned string will contain the word at the offset if the offset
             * is inside a word and will contain the word before the offset if the
             * offset is not inside a word.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_SENTENCE the returned string
             * is from the sentence start at or before the offset to the sentence
             * start after the offset.
             *
             * The returned string will contain the sentence at the offset if the offset
             * is inside a sentence and will contain the sentence before the offset
             * if the offset is not inside a sentence.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_LINE the returned string
             * is from the line start at or before the offset to the line
             * start after the offset.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_PARAGRAPH the returned string
             * is from the start of the paragraph at or before the offset to the start
             * of the following paragraph after the offset.
             * @param offset position
             * @param granularity An {@link Atk.TextGranularity}
             * @virtual
             */
            vfunc_get_string_at_offset(offset: number, granularity: TextGranularity): [string | null, number, number];
            /**
             * Gets the specified text.
             * @param start_offset a starting character offset within `text`
             * @param end_offset an ending character offset within `text`, or -1 for the end of the string.
             * @virtual
             */
            vfunc_get_text(start_offset: number, end_offset: number): string;
            /**
             * Gets the specified text.
             * @param offset position
             * @param boundary_type An {@link Atk.TextBoundary}
             * @virtual
             */
            vfunc_get_text_after_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
            /**
             * Gets the specified text.
             *
             * If the boundary_type if ATK_TEXT_BOUNDARY_CHAR the character at the
             * offset is returned.
             *
             * If the boundary_type is ATK_TEXT_BOUNDARY_WORD_START the returned string
             * is from the word start at or before the offset to the word start after
             * the offset.
             *
             * The returned string will contain the word at the offset if the offset
             * is inside a word and will contain the word before the offset if the
             * offset is not inside a word.
             *
             * If the boundary type is ATK_TEXT_BOUNDARY_SENTENCE_START the returned
             * string is from the sentence start at or before the offset to the sentence
             * start after the offset.
             *
             * The returned string will contain the sentence at the offset if the offset
             * is inside a sentence and will contain the sentence before the offset
             * if the offset is not inside a sentence.
             *
             * If the boundary type is ATK_TEXT_BOUNDARY_LINE_START the returned
             * string is from the line start at or before the offset to the line
             * start after the offset.
             * @param offset position
             * @param boundary_type An {@link Atk.TextBoundary}
             * @virtual
             */
            vfunc_get_text_at_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
            /**
             * Gets the specified text.
             * @param offset position
             * @param boundary_type An {@link Atk.TextBoundary}
             * @virtual
             */
            vfunc_get_text_before_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
            /**
             * Removes the specified selection.
             * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
             * @virtual
             */
            vfunc_remove_selection(selection_num: number): boolean;
            /**
             * Makes a substring of `text` visible on the screen by scrolling all necessary parents.
             * @param start_offset start offset in the `text`
             * @param end_offset end offset in the `text`, or -1 for the end of the text.
             * @param type specify where the object should be made visible.
             * @virtual
             */
            vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
            /**
             * Move the top-left of a substring of `text` to a given position of the screen
             * by scrolling all necessary parents.
             * @param start_offset start offset in the `text`
             * @param end_offset end offset in the `text`, or -1 for the end of the text.
             * @param coords specify whether coordinates are relative to the screen or to the parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             * @virtual
             */
            vfunc_scroll_substring_to_point(
                start_offset: number,
                end_offset: number,
                coords: CoordType,
                x: number,
                y: number,
            ): boolean;
            /**
             * Sets the caret (cursor) position to the specified `offset`.
             *
             * In the case of rich-text content, this method should either grab focus
             * or move the sequential focus navigation starting point (if the application
             * supports this concept) as if the user had clicked on the new caret position.
             * Typically, this means that the target of this operation is the node containing
             * the new caret position or one of its ancestors. In other words, after this
             * method is called, if the user advances focus, it should move to the first
             * focusable node following the new caret position.
             *
             * Calling this method should also scroll the application viewport in a way
             * that matches the behavior of the application's typical caret motion or tab
             * navigation as closely as possible. This also means that if the application's
             * caret motion or focus navigation does not trigger a scroll operation, this
             * method should not trigger one either. If the application does not have a caret
             * motion or focus navigation operation, this method should try to scroll the new
             * caret position into view while minimizing unnecessary scroll motion.
             * @param offset the character offset of the new caret position
             * @virtual
             */
            vfunc_set_caret_offset(offset: number): boolean;
            /**
             * Changes the start and end offset of the specified selection.
             * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
             * @param start_offset the new starting character offset of the selection
             * @param end_offset the new end position of (e.g. offset immediately past) the selection
             * @virtual
             */
            vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
            /**
             * @virtual
             */
            vfunc_text_attributes_changed(): void;
            /**
             * @param location
             * @virtual
             */
            vfunc_text_caret_moved(location: number): void;
            /**
             * the signal handler which is executed when there is a
             *   text change. This virtual function is deprecated sice 2.9.4 and
             *   it should not be overriden.
             * @param position
             * @param length
             * @virtual
             */
            vfunc_text_changed(position: number, length: number): void;
            /**
             * @virtual
             */
            vfunc_text_selection_changed(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface TextNamespace {
        $gtype: GObject.GType<Text>;
        prototype: Text;

        /**
         * Frees the memory associated with an array of AtkTextRange. It is assumed
         * that the array was returned by the function atk_text_get_bounded_ranges
         * and is NULL terminated.
         * @param ranges A pointer to an array of {@link Atk.TextRange} which is   to be freed.
         */
        free_ranges(ranges: TextRange[]): void;
    }
    /**
     * The ATK interface implemented by components with text content.
     *
     * {@link Atk.Text} should be implemented by `AtkObjects` on behalf of widgets
     * that have text content which is either attributed or otherwise
     * non-trivial.  `AtkObjects` whose text content is simple,
     * unattributed, and very brief may expose that content via
     * `atk_object_get_name` instead; however if the text is editable,
     * multi-line, typically longer than three or four words, attributed,
     * selectable, or if the object already uses the 'name' ATK property
     * for other information, the {@link Atk.Text} interface should be used to
     * expose the text content.  In the case of editable text content,
     * {@link Atk.EditableText} (a subtype of the {@link Atk.Text} interface) should be
     * implemented instead.
     *
     *  {@link Atk.Text} provides not only traversal facilities and change
     * notification for text content, but also caret tracking and glyph
     * bounding box calculations.  Note that the text strings are exposed
     * as UTF-8, and are therefore potentially multi-byte, and
     * caret-to-byte offset mapping makes no assumptions about the
     * character length; also bounding box glyph-to-offset mapping may be
     * complex for languages which use ligatures.
     * @gir-type Interface
     */
    interface Text extends GObject.Object, Text.Interface {
        // Methods

        /**
         * Adds a selection bounded by the specified offsets.
         * @param start_offset the starting character offset of the selected region
         * @param end_offset the offset of the first character after the selected region.
         * @returns `true` if successful, `false` otherwise
         */
        add_selection(start_offset: number, end_offset: number): boolean;
        /**
         * Get the ranges of text in the specified bounding box.
         * @param rect An AtkTextRectangle giving the dimensions of the bounding box.
         * @param coord_type Specify whether coordinates are relative to the screen or widget window.
         * @param x_clip_type Specify the horizontal clip type.
         * @param y_clip_type Specify the vertical clip type.
         * @returns Array of AtkTextRange. The last          element of the array returned by this function will be NULL.
         */
        get_bounded_ranges(
            rect: TextRectangle,
            coord_type: CoordType | null,
            x_clip_type: TextClipType | null,
            y_clip_type: TextClipType | null,
        ): TextRange[];
        /**
         * Gets the offset of the position of the caret (cursor).
         * @returns the character offset of the position of the caret or -1 if          the caret is not located inside the element or in the case of          any other failure.
         */
        get_caret_offset(): number;
        /**
         * Gets the specified text.
         * @param offset a character offset within `text`
         * @returns the character at `offset` or 0 in the case of failure.
         */
        get_character_at_offset(offset: number): string;
        /**
         * Gets the character count.
         * @returns the number of characters or -1 in case of failure.
         */
        get_character_count(): number;
        /**
         * If the extent can not be obtained (e.g. missing support), all of x, y, width,
         * height are set to -1.
         *
         * Get the bounding box containing the glyph representing the character at
         *     a particular text offset.
         * @param offset The offset of the text character for which bounding information is required.
         * @param coords specify whether coordinates are relative to the screen or widget window
         */
        get_character_extents(offset: number, coords: CoordType | null): [number, number, number, number];
        /**
         * Creates an {@link Atk.AttributeSet} which consists of the default values of
         * attributes for the text. See the enum AtkTextAttribute for types of text
         * attributes that can be returned. Note that other attributes may also be
         * returned.
         * @returns an {@link Atk.AttributeSet} which contains the default text          attributes for this {@link Atk.Text}. This {@link Atk.AttributeSet} should be freed by          a call to `atk_attribute_set_free()`.
         */
        get_default_attributes(): AttributeSet;
        /**
         * Gets the number of selected regions.
         * @returns The number of selected regions, or -1 in the case of failure.
         */
        get_n_selections(): number;
        /**
         * Gets the offset of the character located at coordinates `x` and `y`. `x` and `y`
         * are interpreted as being relative to the screen or this widget's window
         * depending on `coords`.
         * @param x screen x-position of character
         * @param y screen y-position of character
         * @param coords specify whether coordinates are relative to the screen or widget window
         * @returns the offset to the character which is located at  the specified          `x` and `y` coordinates of -1 in case of failure.
         */
        get_offset_at_point(x: number, y: number, coords: CoordType | null): number;
        /**
         * Get the bounding box for text within the specified range.
         *
         * If the extents can not be obtained (e.g. or missing support), the rectangle
         * fields are set to -1.
         * @param start_offset The offset of the first text character for which boundary        information is required.
         * @param end_offset The offset of the text character after the last character        for which boundary information is required.
         * @param coord_type Specify whether coordinates are relative to the screen or widget window.
         */
        get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType | null): TextRectangle;
        /**
         * Creates an {@link Atk.AttributeSet} which consists of the attributes explicitly
         * set at the position `offset` in the text. `start_offset` and `end_offset` are
         * set to the start and end of the range around `offset` where the attributes are
         * invariant. Note that `end_offset` is the offset of the first character
         * after the range.  See the enum AtkTextAttribute for types of text
         * attributes that can be returned. Note that other attributes may also be
         * returned.
         * @param offset the character offset at which to get the attributes, -1 means the offset of the character to be inserted at the caret location.
         * @returns an {@link Atk.AttributeSet} which contains the attributes         explicitly set at `offset`. This {@link Atk.AttributeSet} should be freed by         a call to `atk_attribute_set_free()`.
         */
        get_run_attributes(offset: number): [AttributeSet, number, number];
        /**
         * Gets the text from the specified selection.
         * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
         * @returns a newly allocated string containing the selected text. Use `g_free()`          to free the returned string.
         */
        get_selection(selection_num: number): [string, number, number];
        /**
         * Gets a portion of the text exposed through an {@link Atk.Text} according to a given `offset`
         * and a specific `granularity`, along with the start and end offsets defining the
         * boundaries of such a portion of text.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_CHAR the character at the
         * offset is returned.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_WORD the returned string
         * is from the word start at or before the offset to the word start after
         * the offset.
         *
         * The returned string will contain the word at the offset if the offset
         * is inside a word and will contain the word before the offset if the
         * offset is not inside a word.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_SENTENCE the returned string
         * is from the sentence start at or before the offset to the sentence
         * start after the offset.
         *
         * The returned string will contain the sentence at the offset if the offset
         * is inside a sentence and will contain the sentence before the offset
         * if the offset is not inside a sentence.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_LINE the returned string
         * is from the line start at or before the offset to the line
         * start after the offset.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_PARAGRAPH the returned string
         * is from the start of the paragraph at or before the offset to the start
         * of the following paragraph after the offset.
         * @param offset position
         * @param granularity An {@link Atk.TextGranularity}
         * @returns a newly allocated string containing the text at          the `offset` bounded by the specified `granularity`. Use `g_free()`          to free the returned string.  Returns `null` if the offset is invalid          or no implementation is available.
         */
        get_string_at_offset(offset: number, granularity: TextGranularity | null): [string | null, number, number];
        /**
         * Gets the specified text.
         * @param start_offset a starting character offset within `text`
         * @param end_offset an ending character offset within `text`, or -1 for the end of the string.
         * @returns a newly allocated string containing the text from `start_offset` up          to, but not including `end_offset`. Use `g_free()` to free the returned          string.
         */
        get_text(start_offset: number, end_offset: number): string;
        /**
         * Gets the specified text.
         * @param offset position
         * @param boundary_type An {@link Atk.TextBoundary}
         * @returns a newly allocated string containing the text after `offset` bounded          by the specified `boundary_type`. Use `g_free()` to free the returned          string.
         */
        get_text_after_offset(offset: number, boundary_type: TextBoundary | null): [string, number, number];
        /**
         * Gets the specified text.
         *
         * If the boundary_type if ATK_TEXT_BOUNDARY_CHAR the character at the
         * offset is returned.
         *
         * If the boundary_type is ATK_TEXT_BOUNDARY_WORD_START the returned string
         * is from the word start at or before the offset to the word start after
         * the offset.
         *
         * The returned string will contain the word at the offset if the offset
         * is inside a word and will contain the word before the offset if the
         * offset is not inside a word.
         *
         * If the boundary type is ATK_TEXT_BOUNDARY_SENTENCE_START the returned
         * string is from the sentence start at or before the offset to the sentence
         * start after the offset.
         *
         * The returned string will contain the sentence at the offset if the offset
         * is inside a sentence and will contain the sentence before the offset
         * if the offset is not inside a sentence.
         *
         * If the boundary type is ATK_TEXT_BOUNDARY_LINE_START the returned
         * string is from the line start at or before the offset to the line
         * start after the offset.
         * @param offset position
         * @param boundary_type An {@link Atk.TextBoundary}
         * @returns a newly allocated string containing the text at `offset` bounded          by the specified `boundary_type`. Use `g_free()` to free the returned          string.
         */
        get_text_at_offset(offset: number, boundary_type: TextBoundary | null): [string, number, number];
        /**
         * Gets the specified text.
         * @param offset position
         * @param boundary_type An {@link Atk.TextBoundary}
         * @returns a newly allocated string containing the text before `offset` bounded          by the specified `boundary_type`. Use `g_free()` to free the returned          string.
         */
        get_text_before_offset(offset: number, boundary_type: TextBoundary | null): [string, number, number];
        /**
         * Removes the specified selection.
         * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
         * @returns `true` if successful, `false` otherwise
         */
        remove_selection(selection_num: number): boolean;
        /**
         * Makes a substring of `text` visible on the screen by scrolling all necessary parents.
         * @param start_offset start offset in the `text`
         * @param end_offset end offset in the `text`, or -1 for the end of the text.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType | null): boolean;
        /**
         * Move the top-left of a substring of `text` to a given position of the screen
         * by scrolling all necessary parents.
         * @param start_offset start offset in the `text`
         * @param end_offset end offset in the `text`, or -1 for the end of the text.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_substring_to_point(
            start_offset: number,
            end_offset: number,
            coords: CoordType | null,
            x: number,
            y: number,
        ): boolean;
        /**
         * Sets the caret (cursor) position to the specified `offset`.
         *
         * In the case of rich-text content, this method should either grab focus
         * or move the sequential focus navigation starting point (if the application
         * supports this concept) as if the user had clicked on the new caret position.
         * Typically, this means that the target of this operation is the node containing
         * the new caret position or one of its ancestors. In other words, after this
         * method is called, if the user advances focus, it should move to the first
         * focusable node following the new caret position.
         *
         * Calling this method should also scroll the application viewport in a way
         * that matches the behavior of the application's typical caret motion or tab
         * navigation as closely as possible. This also means that if the application's
         * caret motion or focus navigation does not trigger a scroll operation, this
         * method should not trigger one either. If the application does not have a caret
         * motion or focus navigation operation, this method should try to scroll the new
         * caret position into view while minimizing unnecessary scroll motion.
         * @param offset the character offset of the new caret position
         * @returns `true` if successful, `false` otherwise.
         */
        set_caret_offset(offset: number): boolean;
        /**
         * Changes the start and end offset of the specified selection.
         * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
         * @param start_offset the new starting character offset of the selection
         * @param end_offset the new end position of (e.g. offset immediately past) the selection
         * @returns `true` if successful, `false` otherwise
         */
        set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    }

    export const Text: TextNamespace & {
        new (): Text; // This allows `obj instanceof Text`
    };

    namespace Value {
        /**
         * Interface for implementing Value.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets the value of this object.
             * @virtual
             */
            vfunc_get_current_value(): unknown;
            /**
             * Gets the minimum increment by which the value of this object may be
             * changed.  If zero, the minimum increment is undefined, which may
             * mean that it is limited only by the floating point precision of the
             * platform.
             * @virtual
             */
            vfunc_get_increment(): number;
            /**
             * Gets the maximum value of this object.
             * @virtual
             */
            vfunc_get_maximum_value(): unknown;
            /**
             * Gets the minimum increment by which the value of this object may be changed.  If zero,
             * the minimum increment is undefined, which may mean that it is limited only by the
             * floating point precision of the platform.
             * @virtual
             */
            vfunc_get_minimum_increment(): unknown;
            /**
             * Gets the minimum value of this object.
             * @virtual
             */
            vfunc_get_minimum_value(): unknown;
            /**
             * Gets the range of this object.
             * @virtual
             */
            vfunc_get_range(): Range | null;
            /**
             * Gets the list of subranges defined for this object. See {@link Atk.Value}
             * introduction for examples of subranges and when to expose them.
             * @virtual
             */
            vfunc_get_sub_ranges(): Range[];
            /**
             * Gets the current value and the human readable text alternative of
             * `obj`. `text` is a newly created string, that must be freed by the
             * caller. Can be NULL if no descriptor is available.
             * @virtual
             */
            vfunc_get_value_and_text(): [number, string];
            /**
             * Sets the value of this object.
             * @param value a {@link GObject.Value} which is the desired new accessible value.
             * @virtual
             */
            vfunc_set_current_value(value: GObject.Value | any): boolean;
            /**
             * Sets the value of this object.
             *
             * This method is intended to provide a way to change the value of the
             * object. In any case, it is possible that the value can't be
             * modified (ie: a read-only component). If the value changes due this
             * call, it is possible that the text could change, and will trigger
             * an {@link Atk.Value.SignalSignatures.value_changed | Atk.Value::value-changed} signal emission.
             *
             * Note for implementors: the deprecated `atk_value_set_current_value()`
             * method returned TRUE or FALSE depending if the value was assigned
             * or not. In the practice several implementors were not able to
             * decide it, and returned TRUE in any case. For that reason it is not
             * required anymore to return if the value was properly assigned or
             * not.
             * @param new_value a double which is the desired new accessible value.
             * @virtual
             */
            vfunc_set_value(new_value: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ValueNamespace {
        $gtype: GObject.GType<Value>;
        prototype: Value;
    }
    /**
     * The ATK interface implemented by valuators and components which display or select a value from a bounded range of values.
     *
     * {@link Atk.Value} should be implemented for components which either display
     * a value from a bounded range, or which allow the user to specify a
     * value from a bounded range, or both. For instance, most sliders and
     * range controls, as well as dials, should have {@link Atk.Object}
     * representations which implement {@link Atk.Value} on the component's
     * behalf. `AtKValues` may be read-only, in which case attempts to
     * alter the value return would fail.
     *
     * <refsect1 id="current-value-text">
     * <title>On the subject of current value text</title>
     * <para>
     * In addition to providing the current value, implementors can
     * optionally provide an end-user-consumable textual description
     * associated with this value. This description should be included
     * when the numeric value fails to convey the full, on-screen
     * representation seen by users.
     * </para>
     *
     * <example>
     * <title>Password strength</title>
     * A password strength meter whose value changes as the user types
     * their new password. Red is used for values less than 4.0, yellow
     * for values between 4.0 and 7.0, and green for values greater than
     * 7.0. In this instance, value text should be provided by the
     * implementor. Appropriate value text would be "weak", "acceptable,"
     * and "strong" respectively.
     * </example>
     *
     * A level bar whose value changes to reflect the battery charge. The
     * color remains the same regardless of the charge and there is no
     * on-screen text reflecting the fullness of the battery. In this
     * case, because the position within the bar is the only indication
     * the user has of the current charge, value text should not be
     * provided by the implementor.
     *
     * <refsect2 id="implementor-notes">
     * <title>Implementor Notes</title>
     * <para>
     * Implementors should bear in mind that assistive technologies will
     * likely prefer the value text provided over the numeric value when
     * presenting a widget's value. As a result, strings not intended for
     * end users should not be exposed in the value text, and strings
     * which are exposed should be localized. In the case of widgets which
     * display value text on screen, for instance through a separate label
     * in close proximity to the value-displaying widget, it is still
     * expected that implementors will expose the value text using the
     * above API.
     * </para>
     *
     * <para>
     * {@link Atk.Value} should NOT be implemented for widgets whose displayed
     * value is not reflective of a meaningful amount. For instance, a
     * progress pulse indicator whose value alternates between 0.0 and 1.0
     * to indicate that some process is still taking place should not
     * implement {@link Atk.Value} because the current value does not reflect
     * progress towards completion.
     * </para>
     * </refsect2>
     * </refsect1>
     *
     * <refsect1 id="ranges">
     * <title>On the subject of ranges</title>
     * <para>
     * In addition to providing the minimum and maximum values,
     * implementors can optionally provide details about subranges
     * associated with the widget. These details should be provided by the
     * implementor when both of the following are communicated visually to
     * the end user:
     * </para>
     * <itemizedlist>
     *   <listitem>The existence of distinct ranges such as "weak",
     *   "acceptable", and "strong" indicated by color, bar tick marks,
     *   and/or on-screen text.</listitem>
     *   <listitem>Where the current value stands within a given subrange,
     *   for instance illustrating progression from very "weak" towards
     *   nearly "acceptable" through changes in shade and/or position on
     *   the bar within the "weak" subrange.</listitem>
     * </itemizedlist>
     * <para>
     * If both of the above do not apply to the widget, it should be
     * sufficient to expose the numeric value, along with the value text
     * if appropriate, to make the widget accessible.
     * </para>
     *
     * <refsect2 id="ranges-implementor-notes">
     * <title>Implementor Notes</title>
     * <para>
     * If providing subrange details is deemed necessary, all possible
     * values of the widget are expected to fall within one of the
     * subranges defined by the implementor.
     * </para>
     * </refsect2>
     * </refsect1>
     *
     * <refsect1 id="localization">
     * <title>On the subject of localization of end-user-consumable text
     * values</title>
     * <para>
     * Because value text and subrange descriptors are human-consumable,
     * implementors are expected to provide localized strings which can be
     * directly presented to end users via their assistive technology. In
     * order to simplify this for implementors, implementors can use
     * `atk_value_type_get_localized_name()` with the following
     * already-localized constants for commonly-needed values can be used:
     * </para>
     *
     * <itemizedlist>
     *   <listitem>ATK_VALUE_VERY_WEAK</listitem>
     *   <listitem>ATK_VALUE_WEAK</listitem>
     *   <listitem>ATK_VALUE_ACCEPTABLE</listitem>
     *   <listitem>ATK_VALUE_STRONG</listitem>
     *   <listitem>ATK_VALUE_VERY_STRONG</listitem>
     *   <listitem>ATK_VALUE_VERY_LOW</listitem>
     *   <listitem>ATK_VALUE_LOW</listitem>
     *   <listitem>ATK_VALUE_MEDIUM</listitem>
     *   <listitem>ATK_VALUE_HIGH</listitem>
     *   <listitem>ATK_VALUE_VERY_HIGH</listitem>
     *   <listitem>ATK_VALUE_VERY_BAD</listitem>
     *   <listitem>ATK_VALUE_BAD</listitem>
     *   <listitem>ATK_VALUE_GOOD</listitem>
     *   <listitem>ATK_VALUE_VERY_GOOD</listitem>
     *   <listitem>ATK_VALUE_BEST</listitem>
     *   <listitem>ATK_VALUE_SUBSUBOPTIMAL</listitem>
     *   <listitem>ATK_VALUE_SUBOPTIMAL</listitem>
     *   <listitem>ATK_VALUE_OPTIMAL</listitem>
     * </itemizedlist>
     * <para>
     * Proposals for additional constants, along with their use cases,
     * should be submitted to the GNOME Accessibility Team.
     * </para>
     * </refsect1>
     *
     * <refsect1 id="changes">
     * <title>On the subject of changes</title>
     * <para>
     * Note that if there is a textual description associated with the new
     * numeric value, that description should be included regardless of
     * whether or not it has also changed.
     * </para>
     * </refsect1>
     * @gir-type Interface
     */
    interface Value extends GObject.Object, Value.Interface {
        // Methods

        /**
         * Gets the value of this object.
         */
        get_current_value(): unknown;
        /**
         * Gets the minimum increment by which the value of this object may be
         * changed.  If zero, the minimum increment is undefined, which may
         * mean that it is limited only by the floating point precision of the
         * platform.
         * @returns the minimum increment by which the value of this object may be changed. zero if undefined.
         */
        get_increment(): number;
        /**
         * Gets the maximum value of this object.
         */
        get_maximum_value(): unknown;
        /**
         * Gets the minimum increment by which the value of this object may be changed.  If zero,
         * the minimum increment is undefined, which may mean that it is limited only by the
         * floating point precision of the platform.
         */
        get_minimum_increment(): unknown;
        /**
         * Gets the minimum value of this object.
         */
        get_minimum_value(): unknown;
        /**
         * Gets the range of this object.
         * @returns a newly allocated {@link Atk.Range} that represents the minimum, maximum and descriptor (if available) of `obj`. NULL if that range is not defined.
         */
        get_range(): Range | null;
        /**
         * Gets the list of subranges defined for this object. See {@link Atk.Value}
         * introduction for examples of subranges and when to expose them.
         * @returns an {@link GLib.SList} of {@link Atk.Range} which each of the subranges defined for this object. Free the returns list with `g_slist_free()`.
         */
        get_sub_ranges(): Range[];
        /**
         * Gets the current value and the human readable text alternative of
         * `obj`. `text` is a newly created string, that must be freed by the
         * caller. Can be NULL if no descriptor is available.
         */
        get_value_and_text(): [number, string];
        /**
         * Sets the value of this object.
         * @param value a {@link GObject.Value} which is the desired new accessible value.
         * @returns `true` if new value is successfully set, `false` otherwise.
         */
        set_current_value(value: GObject.Value | any): boolean;
        /**
         * Sets the value of this object.
         *
         * This method is intended to provide a way to change the value of the
         * object. In any case, it is possible that the value can't be
         * modified (ie: a read-only component). If the value changes due this
         * call, it is possible that the text could change, and will trigger
         * an {@link Atk.Value.SignalSignatures.value_changed | Atk.Value::value-changed} signal emission.
         *
         * Note for implementors: the deprecated `atk_value_set_current_value()`
         * method returned TRUE or FALSE depending if the value was assigned
         * or not. In the practice several implementors were not able to
         * decide it, and returned TRUE in any case. For that reason it is not
         * required anymore to return if the value was properly assigned or
         * not.
         * @param new_value a double which is the desired new accessible value.
         */
        set_value(new_value: number): void;
    }

    export const Value: ValueNamespace & {
        new (): Value; // This allows `obj instanceof Value`
    };

    namespace Window {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    export interface WindowNamespace {
        $gtype: GObject.GType<Window>;
        prototype: Window;
    }
    /**
     * The ATK Interface provided by UI components that represent a top-level window.
     *
     * {@link Atk.Window} should be implemented by the UI elements that represent
     * a top-level window, such as the main window of an application or
     * dialog.
     *
     * See {@link AtkObject}
     * @gir-type Interface
     */
    interface Window extends Object {}

    export const Window: WindowNamespace & {
        new (): Window; // This allows `obj instanceof Window`
    };

    /**
     * This is a singly-linked list (a {@link GLib.SList}) of {@link Atk.Attribute}. It is
     * used by `atk_text_get_run_attributes()`,
     * `atk_text_get_default_attributes()`,
     * `atk_editable_text_set_run_attributes()`,
     * `atk_document_get_attributes()` and `atk_object_get_attributes()`
     * @gir-type Alias
     */
    type AttributeSet = GLib.SList;
    /**
     * An AtkState describes a single state of an object.
     *
     * An AtkState describes a single state of an object. The full set of states
     * that apply to an object at a given time are contained in its {@link Atk.StateSet}.
     *
     * See `atk_object_ref_state_set` and `atk_object_notify_state_change`
     * @gir-type Alias
     */
    type State = number;
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

export default Atk;

// END
