/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Atk-1.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Atk {

/**
 * Specifies how xy coordinates are to be interpreted. Used by functions such
 * as atk_component_get_position() and atk_text_get_character_extents()
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
 * Specifies the type of a keyboard evemt.
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
 * Describes the layer of a component
 * 
 * These enumerated "layer values" are used when determining which UI
 * rendering layer a component is drawn into, which can help in making
 * determinations of when components occlude one another.
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
 * Describes the type of the relation
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
     * Reciprocal of %ATK_RELATION_EMBEDS, indicates that
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
     * Reciprocal of %ATK_RELATION_DESCRIPTION_FOR. Indicates that one
     * or more target objects provide descriptive information about this object. This relation
     * type is most appropriate for information that is not essential as its presentation may
     * be user-configurable and/or limited to an on-demand mechanism such as an assistive
     * technology command. For brief, essential information such as can be found in a widget's
     * on-screen label, use %ATK_RELATION_LABELLED_BY. For an on-screen error message, use
     * %ATK_RELATION_ERROR_MESSAGE. For lengthy extended descriptive information contained in
     * an on-screen object, consider using %ATK_RELATION_DETAILS as assistive technologies may
     * provide a means for the user to navigate to objects containing detailed descriptions so
     * that their content can be more closely reviewed.
     */
    DESCRIBED_BY,
    /**
     * Reciprocal of %ATK_RELATION_DESCRIBED_BY. Indicates that this
     * object provides descriptive information about the target object(s). See also
     * %ATK_RELATION_DETAILS_FOR and %ATK_RELATION_ERROR_FOR.
     */
    DESCRIPTION_FOR,
    /**
     * Indicates an object is a cell in a treetable and is expanded to display other cells in the same column.
     */
    NODE_PARENT_OF,
    /**
     * Reciprocal of %ATK_RELATION_DETAILS_FOR. Indicates that this object
     * has a detailed or extended description, the contents of which can be found in the target
     * object(s). This relation type is most appropriate for information that is sufficiently
     * lengthy as to make navigation to the container of that information desirable. For less
     * verbose information suitable for announcement only, see %ATK_RELATION_DESCRIBED_BY. If
     * the detailed information describes an error condition, %ATK_RELATION_ERROR_FOR should be
     * used instead. `Since:` ATK-2.26.
     */
    DETAILS,
    /**
     * Reciprocal of %ATK_RELATION_DETAILS. Indicates that this object
     * provides a detailed or extended description about the target object(s). See also
     * %ATK_RELATION_DESCRIPTION_FOR and %ATK_RELATION_ERROR_FOR. `Since:` ATK-2.26.
     */
    DETAILS_FOR,
    /**
     * Reciprocal of %ATK_RELATION_ERROR_FOR. Indicates that this object
     * has one or more errors, the nature of which is described in the contents of the target
     * object(s). Objects that have this relation type should also contain %ATK_STATE_INVALID_ENTRY
     * in their #AtkStateSet. `Since:` ATK-2.26.
     */
    ERROR_MESSAGE,
    /**
     * Reciprocal of %ATK_RELATION_ERROR_MESSAGE. Indicates that this object
     * contains an error message describing an invalid condition in the target object(s). `Since:`
     * ATK_2.26.
     */
    ERROR_FOR,
    /**
     * Not used, this value indicates the end of the enumeration.
     */
    LAST_DEFINED,
}
/**
 * Describes the role of an object
 * 
 * These are the built-in enumerated roles that UI components can have
 * in ATK.  Other roles may be added at runtime, so an AtkRole >=
 * %ATK_ROLE_LAST_DEFINED is not necessarily an error.
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
    PUSH_BUTTON,
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
     * An object that represents an accessible terminal.  (Since: 0.6)
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
     * An object capable of expanding and collapsing rows as well as showing multiple columns of data.   (Since: 0.7)
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
     * An object that serves as a document header. (Since: 1.1.1)
     */
    HEADER,
    /**
     * An object that serves as a document footer.  (Since: 1.1.1)
     */
    FOOTER,
    /**
     * An object which is contains a paragraph of text content.   (Since: 1.1.1)
     */
    PARAGRAPH,
    /**
     * An object which describes margins and tab stops, etc. for text objects which it controls (should have CONTROLLER_FOR relation to such).   (Since: 1.1.1)
     */
    RULER,
    /**
     * The object is an application object, which may contain `ATK_ROLE_FRAME` objects or other types of accessibles.  The root accessible of any application's ATK hierarchy should have ATK_ROLE_APPLICATION.   (Since: 1.1.4)
     */
    APPLICATION,
    /**
     * The object is a dialog or list containing items for insertion into an entry widget, for instance a list of words for completion of a text entry.   (Since: 1.3)
     */
    AUTOCOMPLETE,
    /**
     * The object is an editable text object in a toolbar.  (Since: 1.5)
     */
    EDIT_BAR,
    /**
     * The object is an embedded container within a document or panel.  This role is a grouping "hint" indicating that the contained objects share a context.  (Since: 1.7.2)
     */
    EMBEDDED,
    /**
     * The object is a component whose textual content may be entered or modified by the user, provided `ATK_STATE_EDITABLE` is present.   (Since: 1.11)
     */
    ENTRY,
    /**
     * The object is a graphical depiction of quantitative data. It may contain multiple subelements whose attributes and/or description may be queried to obtain both the quantitative data and information about how the data is being presented. The LABELLED_BY relation is particularly important in interpreting objects of this type, as is the accessible-description property.  (Since: 1.11)
     */
    CHART,
    /**
     * The object contains descriptive information, usually textual, about another user interface element such as a table, chart, or image.  (Since: 1.11)
     */
    CAPTION,
    /**
     * The object is a visual frame or container which contains a view of document content. Document frames may occur within another Document instance, in which case the second document may be said to be embedded in the containing instance. HTML frames are often ROLE_DOCUMENT_FRAME. Either this object, or a singleton descendant, should implement the Document interface.  (Since: 1.11)
     */
    DOCUMENT_FRAME,
    /**
     * The object serves as a heading for content which follows it in a document. The 'heading level' of the heading, if availabe, may be obtained by querying the object's attributes.
     */
    HEADING,
    /**
     * The object is a containing instance which encapsulates a page of information. `ATK_ROLE_PAGE` is used in documents and content which support a paginated navigation model.  (Since: 1.11)
     */
    PAGE,
    /**
     * The object is a containing instance of document content which constitutes a particular 'logical' section of the document. The type of content within a section, and the nature of the section division itself, may be obtained by querying the object's attributes. Sections may be nested. (Since: 1.11)
     */
    SECTION,
    /**
     * The object is redundant with another object in the hierarchy, and is exposed for purely technical reasons.  Objects of this role should normally be ignored by clients. (Since: 1.11)
     */
    REDUNDANT_OBJECT,
    /**
     * The object is a container for form controls, for instance as part of a
     * web form or user-input form within a document.  This role is primarily a tag/convenience for
     * clients when navigating complex documents, it is not expected that ordinary GUI containers will
     * always have ATK_ROLE_FORM. (Since: 1.12.0)
     */
    FORM,
    /**
     * The object is a hypertext anchor, i.e. a "link" in a
     * hypertext document.  Such objects are distinct from 'inline'
     * content which may also use the Hypertext/Hyperlink interfaces
     * to indicate the range/location within a text object where
     * an inline or embedded object lies.  (Since: 1.12.1)
     */
    LINK,
    /**
     * The object is a window or similar viewport
     * which is used to allow composition or input of a 'complex character',
     * in other words it is an "input method window." (Since: 1.12.1)
     */
    INPUT_METHOD_WINDOW,
    /**
     * A row in a table.  (Since: 2.1.0)
     */
    TABLE_ROW,
    /**
     * An object that represents an element of a tree.  (Since: 2.1.0)
     */
    TREE_ITEM,
    /**
     * A document frame which contains a spreadsheet.  (Since: 2.1.0)
     */
    DOCUMENT_SPREADSHEET,
    /**
     * A document frame which contains a presentation or slide content.  (Since: 2.1.0)
     */
    DOCUMENT_PRESENTATION,
    /**
     * A document frame which contains textual content, such as found in a word processing application.  (Since: 2.1.0)
     */
    DOCUMENT_TEXT,
    /**
     * A document frame which contains HTML or other markup suitable for display in a web browser.  (Since: 2.1.0)
     */
    DOCUMENT_WEB,
    /**
     * A document frame which contains email content to be displayed or composed either in plain text or HTML.  (Since: 2.1.0)
     */
    DOCUMENT_EMAIL,
    /**
     * An object found within a document and designed to present a comment, note, or other annotation. In some cases, this object might not be visible until activated.  (Since: 2.1.0)
     */
    COMMENT,
    /**
     * A non-collapsible list of choices the user can select from. (Since: 2.1.0)
     */
    LIST_BOX,
    /**
     * A group of related widgets. This group typically has a label. (Since: 2.1.0)
     */
    GROUPING,
    /**
     * An image map object. Usually a graphic with multiple hotspots, where each hotspot can be activated resulting in the loading of another document or section of a document. (Since: 2.1.0)
     */
    IMAGE_MAP,
    /**
     * A transitory object designed to present a message to the user, typically at the desktop level rather than inside a particular application.  (Since: 2.1.0)
     */
    NOTIFICATION,
    /**
     * An object designed to present a message to the user within an existing window. (Since: 2.1.0)
     */
    INFO_BAR,
    /**
     * A bar that serves as a level indicator to, for instance, show the strength of a password or the state of a battery.  (Since: 2.7.3)
     */
    LEVEL_BAR,
    /**
     * A bar that serves as the title of a window or a
     * dialog. (Since: 2.12)
     */
    TITLE_BAR,
    /**
     * An object which contains a text section
     * that is quoted from another source. (Since: 2.12)
     */
    BLOCK_QUOTE,
    /**
     * An object which represents an audio element. (Since: 2.12)
     */
    AUDIO,
    /**
     * An object which represents a video element. (Since: 2.12)
     */
    VIDEO,
    /**
     * A definition of a term or concept. (Since: 2.12)
     */
    DEFINITION,
    /**
     * A section of a page that consists of a
     * composition that forms an independent part of a document, page, or
     * site. Examples: A blog entry, a news story, a forum post. (Since: 2.12)
     */
    ARTICLE,
    /**
     * A region of a web page intended as a
     * navigational landmark. This is designed to allow Assistive
     * Technologies to provide quick navigation among key regions within a
     * document. (Since: 2.12)
     */
    LANDMARK,
    /**
     * A text widget or container holding log content, such
     * as chat history and error logs. In this role there is a
     * relationship between the arrival of new items in the log and the
     * reading order. The log contains a meaningful sequence and new
     * information is added only to the end of the log, not at arbitrary
     * points. (Since: 2.12)
     */
    LOG,
    /**
     * A container where non-essential information
     * changes frequently. Common usages of marquee include stock tickers
     * and ad banners. The primary difference between a marquee and a log
     * is that logs usually have a meaningful order or sequence of
     * important content changes. (Since: 2.12)
     */
    MARQUEE,
    /**
     * A text widget or container that holds a mathematical
     * expression. (Since: 2.12)
     */
    MATH,
    /**
     * A widget whose purpose is to display a rating,
     * such as the number of stars associated with a song in a media
     * player. Objects of this role should also implement
     * AtkValue. (Since: 2.12)
     */
    RATING,
    /**
     * An object containing a numerical counter which
     * indicates an amount of elapsed time from a start point, or the time
     * remaining until an end point. (Since: 2.12)
     */
    TIMER,
    /**
     * An object that represents a list of
     * term-value groups. A term-value group represents a individual
     * description and consist of one or more names
     * (ATK_ROLE_DESCRIPTION_TERM) followed by one or more values
     * (ATK_ROLE_DESCRIPTION_VALUE). For each list, there should not be
     * more than one group with the same term name. (Since: 2.12)
     */
    DESCRIPTION_LIST,
    /**
     * An object that represents a term or phrase
     * with a corresponding definition. (Since: 2.12)
     */
    DESCRIPTION_TERM,
    /**
     * An object that represents the
     * description, definition or value of a term. (Since: 2.12)
     */
    DESCRIPTION_VALUE,
    /**
     * A generic non-container object whose purpose is to display a
     * brief amount of information to the user and whose role is known by the
     * implementor but lacks semantic value for the user. Examples in which
     * %ATK_ROLE_STATIC is appropriate include the message displayed in a message box
     * and an image used as an alternative means to display text. %ATK_ROLE_STATIC
     * should not be applied to widgets which are traditionally interactive, objects
     * which display a significant amount of content, or any object which has an
     * accessible relation pointing to another object. Implementors should expose the
     * displayed information through the accessible name of the object. If doing so seems
     * inappropriate, it may indicate that a different role should be used. For
     * labels which describe another widget, see %ATK_ROLE_LABEL. For text views, see
     * %ATK_ROLE_TEXT. For generic containers, see %ATK_ROLE_PANEL. For objects whose
     * role is not known by the implementor, see %ATK_ROLE_UNKNOWN. (Since: 2.16)
     */
    STATIC,
    /**
     * An object that represents a mathematical fraction.
     * (Since: 2.16)
     */
    MATH_FRACTION,
    /**
     * An object that represents a mathematical expression
     * displayed with a radical. (Since: 2.16)
     */
    MATH_ROOT,
    /**
     * An object that contains text that is displayed as a
     * subscript. (Since: 2.16)
     */
    SUBSCRIPT,
    /**
     * An object that contains text that is displayed as a
     * superscript. (Since: 2.16)
     */
    SUPERSCRIPT,
    /**
     * An object that contains the text of a footnote. (Since: 2.26)
     */
    FOOTNOTE,
    /**
     * Content previously deleted or proposed to be
     * deleted, e.g. in revision history or a content view providing suggestions
     * from reviewers. (Since: 2.34)
     */
    CONTENT_DELETION,
    /**
     * Content previously inserted or proposed to be
     * inserted, e.g. in revision history or a content view providing suggestions
     * from reviewers. (Since: 2.34)
     */
    CONTENT_INSERTION,
    /**
     * A run of content that is marked or highlighted, such as for
     * reference purposes, or to call it out as having a special purpose. If the
     * marked content has an associated section in the document elaborating on the
     * reason for the mark, then %ATK_RELATION_DETAILS should be used on the mark
     * to point to that associated section. In addition, the reciprocal relation
     * %ATK_RELATION_DETAILS_FOR should be used on the associated content section
     * to point back to the mark. (Since: 2.36)
     */
    MARK,
    /**
     * A container for content that is called out as a proposed
     * change from the current version of the document, such as by a reviewer of the
     * content. This role should include either %ATK_ROLE_CONTENT_DELETION and/or
     * %ATK_ROLE_CONTENT_INSERTION children, in any order, to indicate what the
     * actual change is. (Since: 2.36)
     */
    SUGGESTION,
    /**
     * not a valid role, used for finding end of the enumeration
     */
    LAST_DEFINED,
}
/**
 * Specifies where an object should be placed on the screen when using scroll_to.
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
 * The possible types of states of an object
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
     * from doing so, that object's #AtkStateSet should lack ATK_STATE_EDITABLE and
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
     * **note**: %ATK_STATE_VISIBLE is no guarantee that the object is actually unobscured on the screen, only
     * that it is 'potentially' visible, barring obstruction, being scrolled or clipped out of the
     * field of view, or having an ancestor container that has not yet made visible.
     * A widget is potentially onscreen if it has both %ATK_STATE_VISIBLE and %ATK_STATE_SHOWING.
     * The absence of %ATK_STATE_VISIBLE and %ATK_STATE_SHOWING is semantically equivalent to saying
     * that an object is 'hidden'.  See also %ATK_STATE_TRUNCATED, which applies if an object with
     * %ATK_STATE_VISIBLE and %ATK_STATE_SHOWING set lies within a viewport which means that its
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
     * Indicates that the object in question supports text selection. It should only be exposed on objects which implement the Text interface, in order to distinguish this state from `ATK_STATE_SELECTABLE,` which infers that the object in question is a selectable child of an object which implements Selection. While similar, text selection and subelement selection are distinct operations.
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
     * Indicates this object has the potential to be
     *  checked, such as a checkbox or toggle-able table cell. `Since:`
     *  ATK-2.12
     */
    CHECKABLE,
    /**
     * Indicates that the object has a popup context
     * menu or sub-level menu which may or may not be showing. This means
     * that activation renders conditional content.  Note that ordinary
     * tooltips are not considered popups in this context. `Since:` ATK-2.12
     */
    HAS_POPUP,
    /**
     * Indicates this object has a tooltip. `Since:` ATK-2.16
     */
    HAS_TOOLTIP,
    /**
     * Indicates that a widget which is ENABLED and SENSITIVE
     * has a value which can be read, but not modified, by the user. Note that this
     * state should only be applied to widget types whose value is normally directly
     * user modifiable, such as check boxes, radio buttons, spin buttons, text input
     * fields, and combo boxes, as a means to convey that the expected interaction
     * with that widget is not possible. When the expected interaction with a
     * widget does not include modification by the user, as is the case with
     * labels and containers, ATK_STATE_READ_ONLY should not be applied. See also
     * ATK_STATE_EDITABLE. `Since:` ATK-2-16
     */
    READ_ONLY,
    /**
     * Indicates this object is collapsed. `Since:` ATK-2.38
     */
    COLLAPSED,
    /**
     * Not a valid state, used for finding end of enumeration
     */
    LAST_DEFINED,
}
/**
 * Describes the text attributes supported
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
     * Either "true" or "false" indicating whether text is visible or not
     */
    INVISIBLE,
    /**
     * Either "true" or "false" indicating whether text is editable or not
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
     * "true" if a #GdkBitmap is set for stippling the background color.
     */
    BG_STIPPLE,
    /**
     * "true" if a #GdkBitmap is set for stippling the foreground color.
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
     * not a valid text attribute, used for finding end of enumeration
     */
    LAST_DEFINED,
}
/**
 * Text boundary types used for specifying boundaries for regions of text.
 * This enumeration is deprecated since 2.9.4 and should not be used. Use
 * AtkTextGranularity with #atk_text_get_string_at_offset instead.
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
 * Describes the type of clipping required.
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
 * Text granularity types used for specifying the granularity of the region of
 * text we are interested in.
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
 * Default types for a given value. Those are defined in order to
 * easily get localized strings to describe a given value or a given
 * subrange, using atk_value_type_get_localized_name().
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
 * Describes the type of link
 */
enum HyperlinkStateFlags {
    /**
     * Link is inline
     */
    INLINE,
}
/**
 * Like atk_get_binary_age(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
const BINARY_AGE: number
/**
 * Like atk_get_interface_age(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
const INTERFACE_AGE: number
/**
 * Like atk_get_major_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
const MAJOR_VERSION: number
/**
 * Like atk_get_micro_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
const MICRO_VERSION: number
/**
 * Like atk_get_minor_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
const MINOR_VERSION: number
/**
 * A macro that should be defined by the user prior to including
 * the atk/atk.h header.
 * The definition should be one of the predefined ATK version
 * macros: %ATK_VERSION_2_12, %ATK_VERSION_2_14,...
 * 
 * This macro defines the earliest version of ATK that the package is
 * required to be able to compile against.
 * 
 * If the compiler is configured to warn about the use of deprecated
 * functions, then using functions that were deprecated in version
 * %ATK_VERSION_MIN_REQUIRED or earlier will cause warnings (but
 * using functions deprecated in later releases will not).
 */
const VERSION_MIN_REQUIRED: number
function attributeSetFree(attribSet: AttributeSet): void
function focusTrackerNotify(object: Object): void
function getBinaryAge(): number
function getDefaultRegistry(): Registry
function getFocusObject(): Object
function getInterfaceAge(): number
function getMajorVersion(): number
function getMicroVersion(): number
function getMinorVersion(): number
function getRoot(): Object
function getToolkitName(): string
function getToolkitVersion(): string
function getVersion(): string
function relationTypeForName(name: string): RelationType
function relationTypeGetName(type: RelationType): string
function relationTypeRegister(name: string): RelationType
function removeFocusTracker(trackerId: number): void
function removeGlobalEventListener(listenerId: number): void
function removeKeyEventListener(listenerId: number): void
function roleForName(name: string): Role
function roleGetLocalizedName(role: Role): string
function roleGetName(role: Role): string
function roleRegister(name: string): Role
function stateTypeForName(name: string): StateType
function stateTypeGetName(type: StateType): string
function stateTypeRegister(name: string): StateType
function textAttributeForName(name: string): TextAttribute
function textAttributeGetName(attr: TextAttribute): string
function textAttributeGetValue(attr: TextAttribute, index: number): string | null
function textAttributeRegister(name: string): TextAttribute
function textFreeRanges(ranges: TextRange[]): void
function valueTypeGetLocalizedName(valueType: ValueType): string
function valueTypeGetName(valueType: ValueType): string
/**
 * A function which is called when an object emits a matching event,
 * as used in #atk_add_focus_tracker.
 * Currently the only events for which object-specific handlers are
 * supported are events of type "focus:".  Most clients of ATK will prefer to
 * attach signal handlers for the various ATK signals instead.
 * 
 * see atk_add_focus_tracker.
 */
interface EventListener {
    (obj: Object): void
}
/**
 * An #AtkEventListenerInit function is a special function that is
 * called in order to initialize the per-object event registration system
 * used by #AtkEventListener, if any preparation is required.
 * 
 * see atk_focus_tracker_init.
 */
interface EventListenerInit {
    (): void
}
/**
 * The type of callback function used for
 * atk_component_add_focus_handler() and
 * atk_component_remove_focus_handler()
 */
interface FocusHandler {
    (object: Object, focusIn: boolean): void
}
/**
 * An AtkFunction is a function definition used for padding which has
 * been added to class and interface structures to allow for expansion
 * in the future.
 */
interface Function {
    (): boolean
}
/**
 * An #AtkKeySnoopFunc is a type of callback which is called whenever a key event occurs,
 * if registered via atk_add_key_event_listener.  It allows for pre-emptive
 * interception of key events via the return code as described below.
 */
interface KeySnoopFunc {
    (event: KeyEventStruct): number
}
/**
 * An AtkPropertyChangeHandler is a function which is executed when an
 * AtkObject's property changes value. It is specified in a call to
 * atk_object_connect_property_change_handler().
 */
interface PropertyChangeHandler {
    (obj: Object, vals: PropertyValues): void
}
class Action {
    /* Methods of Atk-1.0.Atk.Action */
    /**
     * Perform the specified action on the object.
     */
    doAction(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     */
    getDescription(i: number): string | null
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
     */
    getKeybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     */
    getLocalizedName(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    getNActions(): number
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
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     */
    getName(i: number): string | null
    /**
     * Sets a description of the specified action of the object.
     */
    setDescription(i: number, desc: string): boolean
    static name: string
}
class Component {
    /* Methods of Atk-1.0.Atk.Component */
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     */
    contains(x: number, y: number, coordType: CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    getAlpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     */
    getExtents(coordType: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the layer of the component.
     */
    getLayer(): Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     */
    getMdiZorder(): number
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     */
    getPosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    grabFocus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     */
    refAccessibleAtPoint(x: number, y: number, coordType: CoordType): Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     */
    removeFocusHandler(handlerId: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     */
    scrollTo(type: ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     */
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     */
    setExtents(x: number, y: number, width: number, height: number, coordType: CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     */
    setPosition(x: number, y: number, coordType: CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     */
    setSize(width: number, height: number): boolean
    /* Signals of Atk-1.0.Atk.Component */
    /**
     * The 'bounds-changed" signal is emitted when the bposition or
     * size of the component changes.
     */
    connect(sigName: "bounds-changed", callback: ((arg1: Rectangle) => void)): number
    on(sigName: "bounds-changed", callback: (arg1: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (arg1: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (arg1: Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    static name: string
}
class Document {
    /* Methods of Atk-1.0.Atk.Document */
    /**
     * Retrieves the value of the given `attribute_name` inside `document`.
     */
    getAttributeValue(attributeName: string): string | null
    /**
     * Gets an AtkAttributeSet which describes document-wide
     *          attributes as name-value pairs.
     */
    getAttributes(): AttributeSet
    /**
     * Retrieves the current page number inside `document`.
     */
    getCurrentPageNumber(): number
    /**
     * Gets a %gpointer that points to an instance of the DOM.  It is
     * up to the caller to check atk_document_get_type to determine
     * how to cast this pointer.
     */
    getDocument(): object | null
    /**
     * Gets a string indicating the document type.
     */
    getDocumentType(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     *          of the content of this document instance.  Individual
     *          text substrings or images within this document may have
     *          a different locale, see atk_text_get_attributes and
     *          atk_image_get_image_locale.
     */
    getLocale(): string
    /**
     * Retrieves the total number of pages inside `document`.
     */
    getPageCount(): number
    /**
     * Sets the value for the given `attribute_name` inside `document`.
     */
    setAttributeValue(attributeName: string, attributeValue: string): boolean
    /* Signals of Atk-1.0.Atk.Document */
    /**
     * The 'load-complete' signal is emitted when a pending load of
     * a static document has completed.  This signal is to be
     * expected by ATK clients if and when AtkDocument implementors
     * expose ATK_STATE_BUSY.  If the state of an AtkObject which
     * implements AtkDocument does not include ATK_STATE_BUSY, it
     * should be safe for clients to assume that the AtkDocument's
     * static contents are fully loaded into the container.
     * (Dynamic document contents should be exposed via other
     * signals.)
     */
    connect(sigName: "load-complete", callback: (() => void)): number
    on(sigName: "load-complete", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-complete", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-complete", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "load-complete"): void
    /**
     * The 'load-stopped' signal is emitted when a pending load of
     * document contents is cancelled, paused, or otherwise
     * interrupted by the user or application logic.  It should not
     * however be emitted while waiting for a resource (for instance
     * while blocking on a file or network read) unless a
     * user-significant timeout has occurred.
     */
    connect(sigName: "load-stopped", callback: (() => void)): number
    on(sigName: "load-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "load-stopped"): void
    /**
     * The 'page-changed' signal is emitted when the current page of
     * a document changes, e.g. pressing page up/down in a document
     * viewer.
     */
    connect(sigName: "page-changed", callback: ((pageNumber: number) => void)): number
    on(sigName: "page-changed", callback: (pageNumber: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-changed", callback: (pageNumber: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-changed", callback: (pageNumber: number) => void): NodeJS.EventEmitter
    emit(sigName: "page-changed", pageNumber: number): void
    /**
     * The 'reload' signal is emitted when the contents of a
     * document is refreshed from its source.  Once 'reload' has
     * been emitted, a matching 'load-complete' or 'load-stopped'
     * signal should follow, which clients may await before
     * interrogating ATK for the latest document content.
     */
    connect(sigName: "reload", callback: (() => void)): number
    on(sigName: "reload", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reload", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reload", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reload"): void
    static name: string
}
class EditableText {
    /* Methods of Atk-1.0.Atk.EditableText */
    /**
     * Copy text from `start_pos` up to, but not including `end_pos`
     * to the clipboard.
     */
    copyText(startPos: number, endPos: number): void
    /**
     * Copy text from `start_pos` up to, but not including `end_pos`
     * to the clipboard and then delete from the widget.
     */
    cutText(startPos: number, endPos: number): void
    /**
     * Delete text `start_pos` up to, but not including `end_pos`.
     */
    deleteText(startPos: number, endPos: number): void
    /**
     * Insert text at a given position.
     */
    insertText(string: string, length: number, position: number): void
    /**
     * Paste text from clipboard to specified `position`.
     */
    pasteText(position: number): void
    /**
     * Sets the attributes for a specified range. See the ATK_ATTRIBUTE
     * macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes
     * that can be set. Note that other attributes that do not have corresponding
     * ATK_ATTRIBUTE macros may also be set for certain text widgets.
     */
    setRunAttributes(attribSet: AttributeSet, startOffset: number, endOffset: number): boolean
    /**
     * Set text contents of `text`.
     */
    setTextContents(string: string): void
    static name: string
}
class HyperlinkImpl {
    /* Methods of Atk-1.0.Atk.HyperlinkImpl */
    /**
     * Gets the hyperlink associated with this object.
     */
    getHyperlink(): Hyperlink
    static name: string
}
class Hypertext {
    /* Methods of Atk-1.0.Atk.Hypertext */
    /**
     * Gets the link in this hypertext document at index
     * `link_index`
     */
    getLink(linkIndex: number): Hyperlink
    /**
     * Gets the index into the array of hyperlinks that is associated with
     * the character specified by `char_index`.
     */
    getLinkIndex(charIndex: number): number
    /**
     * Gets the number of links within this hypertext document.
     */
    getNLinks(): number
    /* Signals of Atk-1.0.Atk.Hypertext */
    /**
     * The "link-selected" signal is emitted by an AtkHyperText
     * object when one of the hyperlinks associated with the object
     * is selected.
     */
    connect(sigName: "link-selected", callback: ((arg1: number) => void)): number
    on(sigName: "link-selected", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "link-selected", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "link-selected", callback: (arg1: number) => void): NodeJS.EventEmitter
    emit(sigName: "link-selected", arg1: number): void
    static name: string
}
class Image {
    /* Methods of Atk-1.0.Atk.Image */
    /**
     * Get a textual description of this image.
     */
    getImageDescription(): string
    /**
     * Retrieves the locale identifier associated to the #AtkImage.
     */
    getImageLocale(): string | null
    /**
     * Gets the position of the image in the form of a point specifying the
     * images top-left corner.
     * 
     * If the position can not be obtained (e.g. missing support), x and y are set
     * to -1.
     */
    getImagePosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Get the width and height in pixels for the specified image.
     * The values of `width` and `height` are returned as -1 if the
     * values cannot be obtained (for instance, if the object is not onscreen).
     * 
     * If the size can not be obtained (e.g. missing support), x and y are set
     * to -1.
     */
    getImageSize(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Sets the textual description for this image.
     */
    setImageDescription(description: string): boolean
    static name: string
}
class ImplementorIface {
    static name: string
}
class Selection {
    /* Methods of Atk-1.0.Atk.Selection */
    /**
     * Adds the specified accessible child of the object to the
     * object's selection.
     */
    addSelection(i: number): boolean
    /**
     * Clears the selection in the object so that no children in the object
     * are selected.
     */
    clearSelection(): boolean
    /**
     * Gets the number of accessible children currently selected.
     * Note: callers should not rely on %NULL or on a zero value for
     * indication of whether AtkSelectionIface is implemented, they should
     * use type checking/interface checking macros or the
     * atk_get_accessible_value() convenience method.
     */
    getSelectionCount(): number
    /**
     * Determines if the current child of this object is selected
     * Note: callers should not rely on %NULL or on a zero value for
     * indication of whether AtkSelectionIface is implemented, they should
     * use type checking/interface checking macros or the
     * atk_get_accessible_value() convenience method.
     */
    isChildSelected(i: number): boolean
    /**
     * Gets a reference to the accessible object representing the specified
     * selected child of the object.
     * Note: callers should not rely on %NULL or on a zero value for
     * indication of whether AtkSelectionIface is implemented, they should
     * use type checking/interface checking macros or the
     * atk_get_accessible_value() convenience method.
     */
    refSelection(i: number): Object | null
    /**
     * Removes the specified child of the object from the object's selection.
     */
    removeSelection(i: number): boolean
    /**
     * Causes every child of the object to be selected if the object
     * supports multiple selections.
     */
    selectAllSelection(): boolean
    /* Signals of Atk-1.0.Atk.Selection */
    /**
     * The "selection-changed" signal is emitted by an object which
     * implements AtkSelection interface when the selection changes.
     */
    connect(sigName: "selection-changed", callback: (() => void)): number
    on(sigName: "selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "selection-changed"): void
    static name: string
}
class StreamableContent {
    /* Methods of Atk-1.0.Atk.StreamableContent */
    /**
     * Gets the character string of the specified mime type. The first mime
     * type is at position 0, the second at position 1, and so on.
     */
    getMimeType(i: number): string
    /**
     * Gets the number of mime types supported by this object.
     */
    getNMimeTypes(): number
    /**
     * Gets the content in the specified mime type.
     */
    getStream(mimeType: string): GLib.IOChannel
    /**
     * Get a string representing a URI in IETF standard format
     * (see http://www.ietf.org/rfc/rfc2396.txt) from which the object's content
     * may be streamed in the specified mime-type, if one is available.
     * If mime_type is NULL, the URI for the default (and possibly only) mime-type is
     * returned.
     * 
     * Note that it is possible for get_uri to return NULL but for
     * get_stream to work nonetheless, since not all GIOChannels connect to URIs.
     */
    getUri(mimeType: string): string | null
    static name: string
}
class Table {
    /* Methods of Atk-1.0.Atk.Table */
    /**
     * Adds the specified `column` to the selection.
     */
    addColumnSelection(column: number): boolean
    /**
     * Adds the specified `row` to the selection.
     */
    addRowSelection(row: number): boolean
    /**
     * Gets the caption for the `table`.
     */
    getCaption(): Object | null
    /**
     * Gets a #gint representing the column at the specified `index_`.
     */
    getColumnAtIndex(index: number): number
    /**
     * Gets the description text of the specified `column` in the table
     */
    getColumnDescription(column: number): string
    /**
     * Gets the number of columns occupied by the accessible object
     * at the specified `row` and `column` in the `table`.
     */
    getColumnExtentAt(row: number, column: number): number
    /**
     * Gets the column header of a specified column in an accessible table.
     */
    getColumnHeader(column: number): Object | null
    /**
     * Gets a #gint representing the index at the specified `row` and
     * `column`.
     */
    getIndexAt(row: number, column: number): number
    /**
     * Gets the number of columns in the table.
     */
    getNColumns(): number
    /**
     * Gets the number of rows in the table.
     */
    getNRows(): number
    /**
     * Gets a #gint representing the row at the specified `index_`.
     */
    getRowAtIndex(index: number): number
    /**
     * Gets the description text of the specified row in the table
     */
    getRowDescription(row: number): string | null
    /**
     * Gets the number of rows occupied by the accessible object
     * at a specified `row` and `column` in the `table`.
     */
    getRowExtentAt(row: number, column: number): number
    /**
     * Gets the row header of a specified row in an accessible table.
     */
    getRowHeader(row: number): Object | null
    /**
     * Gets the selected columns of the table by initializing **selected with
     * the selected column numbers. This array should be freed by the caller.
     */
    getSelectedColumns(selected: number): number
    /**
     * Gets the selected rows of the table by initializing **selected with
     * the selected row numbers. This array should be freed by the caller.
     */
    getSelectedRows(selected: number): number
    /**
     * Gets the summary description of the table.
     */
    getSummary(): Object
    /**
     * Gets a boolean value indicating whether the specified `column`
     * is selected
     */
    isColumnSelected(column: number): boolean
    /**
     * Gets a boolean value indicating whether the specified `row`
     * is selected
     */
    isRowSelected(row: number): boolean
    /**
     * Gets a boolean value indicating whether the accessible object
     * at the specified `row` and `column` is selected
     */
    isSelected(row: number, column: number): boolean
    /**
     * Get a reference to the table cell at `row,` `column`. This cell
     * should implement the interface #AtkTableCell
     */
    refAt(row: number, column: number): Object
    /**
     * Adds the specified `column` to the selection.
     */
    removeColumnSelection(column: number): boolean
    /**
     * Removes the specified `row` from the selection.
     */
    removeRowSelection(row: number): boolean
    /**
     * Sets the caption for the table.
     */
    setCaption(caption: Object): void
    /**
     * Sets the description text for the specified `column` of the `table`.
     */
    setColumnDescription(column: number, description: string): void
    /**
     * Sets the specified column header to `header`.
     */
    setColumnHeader(column: number, header: Object): void
    /**
     * Sets the description text for the specified `row` of `table`.
     */
    setRowDescription(row: number, description: string): void
    /**
     * Sets the specified row header to `header`.
     */
    setRowHeader(row: number, header: Object): void
    /**
     * Sets the summary description of the table.
     */
    setSummary(accessible: Object): void
    /* Signals of Atk-1.0.Atk.Table */
    /**
     * The "column-deleted" signal is emitted by an object which
     * implements the AtkTable interface when a column is deleted.
     */
    connect(sigName: "column-deleted", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "column-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-deleted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "column-deleted", arg1: number, arg2: number): void
    /**
     * The "column-inserted" signal is emitted by an object which
     * implements the AtkTable interface when a column is inserted.
     */
    connect(sigName: "column-inserted", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "column-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-inserted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "column-inserted", arg1: number, arg2: number): void
    /**
     * The "column-reordered" signal is emitted by an object which
     * implements the AtkTable interface when the columns are
     * reordered.
     */
    connect(sigName: "column-reordered", callback: (() => void)): number
    on(sigName: "column-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-reordered", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "column-reordered"): void
    /**
     * The "model-changed" signal is emitted by an object which
     * implements the AtkTable interface when the model displayed by
     * the table changes.
     */
    connect(sigName: "model-changed", callback: (() => void)): number
    on(sigName: "model-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "model-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "model-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "model-changed"): void
    /**
     * The "row-deleted" signal is emitted by an object which
     * implements the AtkTable interface when a row is deleted.
     */
    connect(sigName: "row-deleted", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "row-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-deleted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-deleted", arg1: number, arg2: number): void
    /**
     * The "row-inserted" signal is emitted by an object which
     * implements the AtkTable interface when a row is inserted.
     */
    connect(sigName: "row-inserted", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "row-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", arg1: number, arg2: number): void
    /**
     * The "row-reordered" signal is emitted by an object which
     * implements the AtkTable interface when the rows are
     * reordered.
     */
    connect(sigName: "row-reordered", callback: (() => void)): number
    on(sigName: "row-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-reordered", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "row-reordered"): void
    static name: string
}
interface TableCell_ConstructProps extends Object_ConstructProps {
}
class TableCell {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Role
    /**
     * Table caption.
     */
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    /**
     * Accessible table column description.
     */
    accessibleTableColumnDescription: string
    /**
     * Accessible table column header.
     */
    accessibleTableColumnHeader: Object
    /**
     * Accessible table row description.
     */
    accessibleTableRowDescription: string
    /**
     * Accessible table row header.
     */
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    /**
     * Numeric value of this object, in case being and AtkValue.
     */
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessibleParent: Object
    readonly role: Role
    readonly relationSet: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.TableCell */
    /**
     * Returns the column headers as an array of cell accessibles.
     */
    getColumnHeaderCells(): Object[]
    /**
     * Returns the number of columns occupied by this cell accessible.
     */
    getColumnSpan(): number
    /**
     * Retrieves the tabular position of this cell.
     */
    getPosition(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    /**
     * Gets the row and column indexes and span of this cell accessible.
     * 
     * Note: If the object does not implement this function, then, by default, atk
     * will implement this function by calling get_row_span and get_column_span
     * on the object.
     */
    getRowColumnSpan(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* rowSpan */ number, /* columnSpan */ number ]
    /**
     * Returns the row headers as an array of cell accessibles.
     */
    getRowHeaderCells(): Object[]
    /**
     * Returns the number of rows occupied by this cell accessible.
     */
    getRowSpan(): number
    /**
     * Returns a reference to the accessible of the containing table.
     */
    getTable(): Object
    /* Methods of Atk-1.0.Atk.Object */
    /**
     * Adds a relationship of the specified type with the specified target.
     */
    addRelationship(relationship: RelationType, target: Object): boolean
    /**
     * Gets the accessible id of the accessible.
     */
    getAccessibleId(): string
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    getAttributes(): AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    getDescription(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    getIndexInParent(): number
    /**
     * Gets the layer of the accessible.
     */
    getLayer(): Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    getMdiZorder(): number
    /**
     * Gets the number of accessible children of the accessible.
     */
    getNAccessibleChildren(): number
    /**
     * Gets the accessible name of the accessible.
     */
    getName(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    getObjectLocale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    getParent(): Object
    /**
     * Gets the role of the accessible.
     */
    getRole(): Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     */
    initialize(data?: object | null): void
    /**
     * Emits a state-change signal for the specified state.
     * 
     * Note that as a general rule when the state of an existing object changes,
     * emitting a notification is expected.
     */
    notifyStateChange(state: State, value: boolean): void
    /**
     * Gets the accessible parent of the accessible, if it has been
     * manually assigned with atk_object_set_parent. Otherwise, this
     * function returns %NULL.
     * 
     * This method is intended as an utility for ATK implementors, and not
     * to be exposed to accessible tools. See atk_object_get_parent() for
     * further reference.
     */
    peekParent(): Object
    /**
     * Gets a reference to the specified accessible child of the object.
     * The accessible children are 0-based so the first accessible child is
     * at index 0, the second at index 1 and so on.
     */
    refAccessibleChild(i: number): Object
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    refRelationSet(): RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    refStateSet(): StateSet
    /**
     * Removes a property change handler.
     */
    removePropertyChangeHandler(handlerId: number): void
    /**
     * Removes a relationship of the specified type with the specified target.
     */
    removeRelationship(relationship: RelationType, target: Object): boolean
    /**
     * Sets the accessible ID of the accessible.  This is not meant to be presented
     * to the user, but to be an ID which is stable over application development.
     * Typically, this is the gtkbuilder ID. Such an ID will be available for
     * instance to identify a given well-known accessible object for tailored screen
     * reading, or for automatic regression testing.
     */
    setAccessibleId(name: string): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     */
    setDescription(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     */
    setName(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     */
    setParent(parent: Object): void
    /**
     * Sets the role of the accessible.
     */
    setRole(role: Role): void
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of Atk-1.0.Atk.Object */
    /**
     * The "active-descendant-changed" signal is emitted by an object
     * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
     * object in the object changes. For instance, a table will emit the
     * signal when the cell in the table which has focus changes.
     */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Object): void
    /**
     * The signal "children-changed" is emitted when a child is added or
     * removed form an object. It supports two details: "add" and
     * "remove"
     */
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    /**
     * The signal "focus-event" is emitted when an object gained or lost
     * focus.
     */
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    /**
     * The signal "property-change" is emitted when an object's property
     * value changes. `arg1` contains an #AtkPropertyValues with the name
     * and the new value of the property whose value has changed. Note
     * that, as with GObject notify, getting this signal does not
     * guarantee that the value of the property has actually changed; it
     * may also be emitted when the setter of the property is called to
     * reinstate the previous value.
     * 
     * Toolkit implementor note: ATK implementors should use
     * g_object_notify() to emit property-changed
     * notifications. #AtkObject::property-changed is needed by the
     * implementation of atk_add_global_event_listener() because GObject
     * notify doesn't support emission hooks.
     */
    connect(sigName: "property-change", callback: ((arg1: PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: PropertyValues): void
    /**
     * The "state-change" signal is emitted when an object's state
     * changes.  The detail value identifies the state type which has
     * changed.
     */
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    /**
     * The "visible-data-changed" signal is emitted when the visual
     * appearance of the object changed.
     */
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TableCell_ConstructProps)
    _init (config?: TableCell_ConstructProps): void
    static $gtype: GObject.Type
}
class Text {
    /* Methods of Atk-1.0.Atk.Text */
    /**
     * Adds a selection bounded by the specified offsets.
     */
    addSelection(startOffset: number, endOffset: number): boolean
    /**
     * Get the ranges of text in the specified bounding box.
     */
    getBoundedRanges(rect: TextRectangle, coordType: CoordType, xClipType: TextClipType, yClipType: TextClipType): TextRange[]
    /**
     * Gets the offset of the position of the caret (cursor).
     */
    getCaretOffset(): number
    /**
     * Gets the specified text.
     */
    getCharacterAtOffset(offset: number): number
    /**
     * Gets the character count.
     */
    getCharacterCount(): number
    /**
     * If the extent can not be obtained (e.g. missing support), all of x, y, width,
     * height are set to -1.
     * 
     * Get the bounding box containing the glyph representing the character at
     *     a particular text offset.
     */
    getCharacterExtents(offset: number, coords: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Creates an #AtkAttributeSet which consists of the default values of
     * attributes for the text. See the enum AtkTextAttribute for types of text
     * attributes that can be returned. Note that other attributes may also be
     * returned.
     */
    getDefaultAttributes(): AttributeSet
    /**
     * Gets the number of selected regions.
     */
    getNSelections(): number
    /**
     * Gets the offset of the character located at coordinates `x` and `y`. `x` and `y`
     * are interpreted as being relative to the screen or this widget's window
     * depending on `coords`.
     */
    getOffsetAtPoint(x: number, y: number, coords: CoordType): number
    /**
     * Get the bounding box for text within the specified range.
     * 
     * If the extents can not be obtained (e.g. or missing support), the rectangle
     * fields are set to -1.
     */
    getRangeExtents(startOffset: number, endOffset: number, coordType: CoordType): /* rect */ TextRectangle
    /**
     * Creates an #AtkAttributeSet which consists of the attributes explicitly
     * set at the position `offset` in the text. `start_offset` and `end_offset` are
     * set to the start and end of the range around `offset` where the attributes are
     * invariant. Note that `end_offset` is the offset of the first character
     * after the range.  See the enum AtkTextAttribute for types of text
     * attributes that can be returned. Note that other attributes may also be
     * returned.
     */
    getRunAttributes(offset: number): [ /* returnType */ AttributeSet, /* startOffset */ number, /* endOffset */ number ]
    /**
     * Gets the text from the specified selection.
     */
    getSelection(selectionNum: number): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    /**
     * Gets a portion of the text exposed through an #AtkText according to a given `offset`
     * and a specific `granularity,` along with the start and end offsets defining the
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
     */
    getStringAtOffset(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* startOffset */ number, /* endOffset */ number ]
    /**
     * Gets the specified text.
     */
    getText(startOffset: number, endOffset: number): string
    /**
     * Gets the specified text.
     */
    getTextAfterOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
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
     */
    getTextAtOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    /**
     * Gets the specified text.
     */
    getTextBeforeOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    /**
     * Removes the specified selection.
     */
    removeSelection(selectionNum: number): boolean
    /**
     * Makes a substring of `text` visible on the screen by scrolling all necessary parents.
     */
    scrollSubstringTo(startOffset: number, endOffset: number, type: ScrollType): boolean
    /**
     * Move the top-left of a substring of `text` to a given position of the screen
     * by scrolling all necessary parents.
     */
    scrollSubstringToPoint(startOffset: number, endOffset: number, coords: CoordType, x: number, y: number): boolean
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
     */
    setCaretOffset(offset: number): boolean
    /**
     * Changes the start and end offset of the specified selection.
     */
    setSelection(selectionNum: number, startOffset: number, endOffset: number): boolean
    /* Signals of Atk-1.0.Atk.Text */
    /**
     * The "text-attributes-changed" signal is emitted when the text
     * attributes of the text of an object which implements AtkText
     * changes.
     */
    connect(sigName: "text-attributes-changed", callback: (() => void)): number
    on(sigName: "text-attributes-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-attributes-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-attributes-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "text-attributes-changed"): void
    /**
     * The "text-caret-moved" signal is emitted when the caret
     * position of the text of an object which implements AtkText
     * changes.
     */
    connect(sigName: "text-caret-moved", callback: ((arg1: number) => void)): number
    on(sigName: "text-caret-moved", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-caret-moved", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-caret-moved", callback: (arg1: number) => void): NodeJS.EventEmitter
    emit(sigName: "text-caret-moved", arg1: number): void
    /**
     * The "text-changed" signal is emitted when the text of the
     * object which implements the AtkText interface changes, This
     * signal will have a detail which is either "insert" or
     * "delete" which identifies whether the text change was an
     * insertion or a deletion.
     */
    connect(sigName: "text-changed", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "text-changed", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-changed", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-changed", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "text-changed", arg1: number, arg2: number): void
    /**
     * The "text-insert" signal is emitted when a new text is
     * inserted. If the signal was not triggered by the user
     * (e.g. typing or pasting text), the "system" detail should be
     * included.
     */
    connect(sigName: "text-insert", callback: ((arg1: number, arg2: number, arg3: string) => void)): number
    on(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void): NodeJS.EventEmitter
    emit(sigName: "text-insert", arg1: number, arg2: number, arg3: string): void
    /**
     * The "text-remove" signal is emitted when a new text is
     * removed. If the signal was not triggered by the user
     * (e.g. typing or pasting text), the "system" detail should be
     * included.
     */
    connect(sigName: "text-remove", callback: ((arg1: number, arg2: number, arg3: string) => void)): number
    on(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void): NodeJS.EventEmitter
    emit(sigName: "text-remove", arg1: number, arg2: number, arg3: string): void
    /**
     * The "text-selection-changed" signal is emitted when the
     * selected text of an object which implements AtkText changes.
     */
    connect(sigName: "text-selection-changed", callback: (() => void)): number
    on(sigName: "text-selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-selection-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "text-selection-changed"): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory associated with an array of AtkTextRange. It is assumed
     * that the array was returned by the function atk_text_get_bounded_ranges
     * and is NULL terminated.
     */
    static freeRanges(ranges: TextRange[]): void
}
class Value {
    /* Methods of Atk-1.0.Atk.Value */
    /**
     * Gets the value of this object.
     */
    getCurrentValue(): /* value */ any
    /**
     * Gets the minimum increment by which the value of this object may be
     * changed.  If zero, the minimum increment is undefined, which may
     * mean that it is limited only by the floating point precision of the
     * platform.
     */
    getIncrement(): number
    /**
     * Gets the maximum value of this object.
     */
    getMaximumValue(): /* value */ any
    /**
     * Gets the minimum increment by which the value of this object may be changed.  If zero,
     * the minimum increment is undefined, which may mean that it is limited only by the
     * floating point precision of the platform.
     */
    getMinimumIncrement(): /* value */ any
    /**
     * Gets the minimum value of this object.
     */
    getMinimumValue(): /* value */ any
    /**
     * Gets the range of this object.
     */
    getRange(): Range | null
    /**
     * Gets the list of subranges defined for this object. See #AtkValue
     * introduction for examples of subranges and when to expose them.
     */
    getSubRanges(): Range[]
    /**
     * Gets the current value and the human readable text alternative of
     * `obj`. `text` is a newly created string, that must be freed by the
     * caller. Can be NULL if no descriptor is available.
     */
    getValueAndText(): [ /* value */ number, /* text */ string | null ]
    /**
     * Sets the value of this object.
     */
    setCurrentValue(value: any): boolean
    /**
     * Sets the value of this object.
     * 
     * This method is intended to provide a way to change the value of the
     * object. In any case, it is possible that the value can't be
     * modified (ie: a read-only component). If the value changes due this
     * call, it is possible that the text could change, and will trigger
     * an #AtkValue::value-changed signal emission.
     * 
     * Note for implementors: the deprecated atk_value_set_current_value()
     * method returned TRUE or FALSE depending if the value was assigned
     * or not. In the practice several implementors were not able to
     * decide it, and returned TRUE in any case. For that reason it is not
     * required anymore to return if the value was properly assigned or
     * not.
     */
    setValue(newValue: number): void
    /* Signals of Atk-1.0.Atk.Value */
    /**
     * The 'value-changed' signal is emitted when the current value
     * that represent the object changes. `value` is the numerical
     * representation of this new value.  `text` is the human
     * readable text alternative of `value,` and can be NULL if it is
     * not available. Note that if there is a textual description
     * associated with the new numeric value, that description
     * should be included regardless of whether or not it has also
     * changed.
     * 
     * Example: a password meter whose value changes as the user
     * types their new password. Appropiate value text would be
     * "weak", "acceptable" and "strong".
     */
    connect(sigName: "value-changed", callback: ((value: number, text: string) => void)): number
    on(sigName: "value-changed", callback: (value: number, text: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (value: number, text: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (value: number, text: string) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", value: number, text: string): void
    static name: string
}
interface Window_ConstructProps extends Object_ConstructProps {
}
class Window {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Role
    /**
     * Table caption.
     */
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    /**
     * Accessible table column description.
     */
    accessibleTableColumnDescription: string
    /**
     * Accessible table column header.
     */
    accessibleTableColumnHeader: Object
    /**
     * Accessible table row description.
     */
    accessibleTableRowDescription: string
    /**
     * Accessible table row header.
     */
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    /**
     * Numeric value of this object, in case being and AtkValue.
     */
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessibleParent: Object
    readonly role: Role
    readonly relationSet: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Object */
    /**
     * Adds a relationship of the specified type with the specified target.
     */
    addRelationship(relationship: RelationType, target: Object): boolean
    /**
     * Gets the accessible id of the accessible.
     */
    getAccessibleId(): string
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    getAttributes(): AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    getDescription(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    getIndexInParent(): number
    /**
     * Gets the layer of the accessible.
     */
    getLayer(): Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    getMdiZorder(): number
    /**
     * Gets the number of accessible children of the accessible.
     */
    getNAccessibleChildren(): number
    /**
     * Gets the accessible name of the accessible.
     */
    getName(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    getObjectLocale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    getParent(): Object
    /**
     * Gets the role of the accessible.
     */
    getRole(): Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     */
    initialize(data?: object | null): void
    /**
     * Emits a state-change signal for the specified state.
     * 
     * Note that as a general rule when the state of an existing object changes,
     * emitting a notification is expected.
     */
    notifyStateChange(state: State, value: boolean): void
    /**
     * Gets the accessible parent of the accessible, if it has been
     * manually assigned with atk_object_set_parent. Otherwise, this
     * function returns %NULL.
     * 
     * This method is intended as an utility for ATK implementors, and not
     * to be exposed to accessible tools. See atk_object_get_parent() for
     * further reference.
     */
    peekParent(): Object
    /**
     * Gets a reference to the specified accessible child of the object.
     * The accessible children are 0-based so the first accessible child is
     * at index 0, the second at index 1 and so on.
     */
    refAccessibleChild(i: number): Object
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    refRelationSet(): RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    refStateSet(): StateSet
    /**
     * Removes a property change handler.
     */
    removePropertyChangeHandler(handlerId: number): void
    /**
     * Removes a relationship of the specified type with the specified target.
     */
    removeRelationship(relationship: RelationType, target: Object): boolean
    /**
     * Sets the accessible ID of the accessible.  This is not meant to be presented
     * to the user, but to be an ID which is stable over application development.
     * Typically, this is the gtkbuilder ID. Such an ID will be available for
     * instance to identify a given well-known accessible object for tailored screen
     * reading, or for automatic regression testing.
     */
    setAccessibleId(name: string): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     */
    setDescription(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     */
    setName(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     */
    setParent(parent: Object): void
    /**
     * Sets the role of the accessible.
     */
    setRole(role: Role): void
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of Atk-1.0.Atk.Window */
    /**
     * The signal #AtkWindow::activate is emitted when a window
     * becomes the active window of the application or session.
     */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    /**
     * The signal #AtkWindow::create is emitted when a new window
     * is created.
     */
    connect(sigName: "create", callback: (() => void)): number
    on(sigName: "create", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "create"): void
    /**
     * The signal #AtkWindow::deactivate is emitted when a window is
     * no longer the active window of the application or session.
     */
    connect(sigName: "deactivate", callback: (() => void)): number
    on(sigName: "deactivate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deactivate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deactivate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "deactivate"): void
    /**
     * The signal #AtkWindow::destroy is emitted when a window is
     * destroyed.
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /**
     * The signal #AtkWindow::maximize is emitted when a window
     * is maximized.
     */
    connect(sigName: "maximize", callback: (() => void)): number
    on(sigName: "maximize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "maximize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "maximize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "maximize"): void
    /**
     * The signal #AtkWindow::minimize is emitted when a window
     * is minimized.
     */
    connect(sigName: "minimize", callback: (() => void)): number
    on(sigName: "minimize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "minimize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "minimize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "minimize"): void
    /**
     * The signal #AtkWindow::move is emitted when a window
     * is moved.
     */
    connect(sigName: "move", callback: (() => void)): number
    on(sigName: "move", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "move"): void
    /**
     * The signal #AtkWindow::resize is emitted when a window
     * is resized.
     */
    connect(sigName: "resize", callback: (() => void)): number
    on(sigName: "resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resize"): void
    /**
     * The signal #AtkWindow::restore is emitted when a window
     * is restored.
     */
    connect(sigName: "restore", callback: (() => void)): number
    on(sigName: "restore", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "restore", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "restore", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "restore"): void
    /* Signals of Atk-1.0.Atk.Object */
    /**
     * The "active-descendant-changed" signal is emitted by an object
     * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
     * object in the object changes. For instance, a table will emit the
     * signal when the cell in the table which has focus changes.
     */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Object): void
    /**
     * The signal "children-changed" is emitted when a child is added or
     * removed form an object. It supports two details: "add" and
     * "remove"
     */
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    /**
     * The signal "focus-event" is emitted when an object gained or lost
     * focus.
     */
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    /**
     * The signal "property-change" is emitted when an object's property
     * value changes. `arg1` contains an #AtkPropertyValues with the name
     * and the new value of the property whose value has changed. Note
     * that, as with GObject notify, getting this signal does not
     * guarantee that the value of the property has actually changed; it
     * may also be emitted when the setter of the property is called to
     * reinstate the previous value.
     * 
     * Toolkit implementor note: ATK implementors should use
     * g_object_notify() to emit property-changed
     * notifications. #AtkObject::property-changed is needed by the
     * implementation of atk_add_global_event_listener() because GObject
     * notify doesn't support emission hooks.
     */
    connect(sigName: "property-change", callback: ((arg1: PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: PropertyValues): void
    /**
     * The "state-change" signal is emitted when an object's state
     * changes.  The detail value identifies the state type which has
     * changed.
     */
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    /**
     * The "visible-data-changed" signal is emitted when the visual
     * appearance of the object changed.
     */
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    static $gtype: GObject.Type
}
interface GObjectAccessible_ConstructProps extends Object_ConstructProps {
}
class GObjectAccessible {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Role
    /**
     * Table caption.
     */
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    /**
     * Accessible table column description.
     */
    accessibleTableColumnDescription: string
    /**
     * Accessible table column header.
     */
    accessibleTableColumnHeader: Object
    /**
     * Accessible table row description.
     */
    accessibleTableRowDescription: string
    /**
     * Accessible table row header.
     */
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    /**
     * Numeric value of this object, in case being and AtkValue.
     */
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessibleParent: Object
    readonly role: Role
    readonly relationSet: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    /**
     * Gets the GObject for which `obj` is the accessible object.
     */
    getObject(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    /**
     * Adds a relationship of the specified type with the specified target.
     */
    addRelationship(relationship: RelationType, target: Object): boolean
    /**
     * Gets the accessible id of the accessible.
     */
    getAccessibleId(): string
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    getAttributes(): AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    getDescription(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    getIndexInParent(): number
    /**
     * Gets the layer of the accessible.
     */
    getLayer(): Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    getMdiZorder(): number
    /**
     * Gets the number of accessible children of the accessible.
     */
    getNAccessibleChildren(): number
    /**
     * Gets the accessible name of the accessible.
     */
    getName(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    getObjectLocale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    getParent(): Object
    /**
     * Gets the role of the accessible.
     */
    getRole(): Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     */
    initialize(data?: object | null): void
    /**
     * Emits a state-change signal for the specified state.
     * 
     * Note that as a general rule when the state of an existing object changes,
     * emitting a notification is expected.
     */
    notifyStateChange(state: State, value: boolean): void
    /**
     * Gets the accessible parent of the accessible, if it has been
     * manually assigned with atk_object_set_parent. Otherwise, this
     * function returns %NULL.
     * 
     * This method is intended as an utility for ATK implementors, and not
     * to be exposed to accessible tools. See atk_object_get_parent() for
     * further reference.
     */
    peekParent(): Object
    /**
     * Gets a reference to the specified accessible child of the object.
     * The accessible children are 0-based so the first accessible child is
     * at index 0, the second at index 1 and so on.
     */
    refAccessibleChild(i: number): Object
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    refRelationSet(): RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    refStateSet(): StateSet
    /**
     * Removes a property change handler.
     */
    removePropertyChangeHandler(handlerId: number): void
    /**
     * Removes a relationship of the specified type with the specified target.
     */
    removeRelationship(relationship: RelationType, target: Object): boolean
    /**
     * Sets the accessible ID of the accessible.  This is not meant to be presented
     * to the user, but to be an ID which is stable over application development.
     * Typically, this is the gtkbuilder ID. Such an ID will be available for
     * instance to identify a given well-known accessible object for tailored screen
     * reading, or for automatic regression testing.
     */
    setAccessibleId(name: string): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     */
    setDescription(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     */
    setName(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     */
    setParent(parent: Object): void
    /**
     * Sets the role of the accessible.
     */
    setRole(role: Role): void
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of Atk-1.0.Atk.Object */
    /**
     * The "active-descendant-changed" signal is emitted by an object
     * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
     * object in the object changes. For instance, a table will emit the
     * signal when the cell in the table which has focus changes.
     */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Object): void
    /**
     * The signal "children-changed" is emitted when a child is added or
     * removed form an object. It supports two details: "add" and
     * "remove"
     */
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    /**
     * The signal "focus-event" is emitted when an object gained or lost
     * focus.
     */
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    /**
     * The signal "property-change" is emitted when an object's property
     * value changes. `arg1` contains an #AtkPropertyValues with the name
     * and the new value of the property whose value has changed. Note
     * that, as with GObject notify, getting this signal does not
     * guarantee that the value of the property has actually changed; it
     * may also be emitted when the setter of the property is called to
     * reinstate the previous value.
     * 
     * Toolkit implementor note: ATK implementors should use
     * g_object_notify() to emit property-changed
     * notifications. #AtkObject::property-changed is needed by the
     * implementation of atk_add_global_event_listener() because GObject
     * notify doesn't support emission hooks.
     */
    connect(sigName: "property-change", callback: ((arg1: PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: PropertyValues): void
    /**
     * The "state-change" signal is emitted when an object's state
     * changes.  The detail value identifies the state type which has
     * changed.
     */
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    /**
     * The "visible-data-changed" signal is emitted when the visual
     * appearance of the object changed.
     */
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GObjectAccessible_ConstructProps)
    _init (config?: GObjectAccessible_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gets the accessible object for the specified `obj`.
     */
    static forObject(obj: GObject.Object): Object
    static $gtype: GObject.Type
}
interface Hyperlink_ConstructProps extends GObject.Object_ConstructProps {
}
class Hyperlink {
    /* Properties of Atk-1.0.Atk.Hyperlink */
    readonly endIndex: number
    readonly numberOfAnchors: number
    /**
     * Selected link
     */
    readonly selectedLink: boolean
    readonly startIndex: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Hyperlink */
    /**
     * Gets the index with the hypertext document at which this link ends.
     */
    getEndIndex(): number
    /**
     * Gets the number of anchors associated with this hyperlink.
     */
    getNAnchors(): number
    /**
     * Returns the item associated with this hyperlinks nth anchor.
     * For instance, the returned #AtkObject will implement #AtkText
     * if `link_` is a text hyperlink, #AtkImage if `link_` is an image
     * hyperlink etc.
     * 
     * Multiple anchors are primarily used by client-side image maps.
     */
    getObject(i: number): Object
    /**
     * Gets the index with the hypertext document at which this link begins.
     */
    getStartIndex(): number
    /**
     * Get a the URI associated with the anchor specified
     * by `i` of `link_`.
     * 
     * Multiple anchors are primarily used by client-side image maps.
     */
    getUri(i: number): string
    /**
     * Indicates whether the link currently displays some or all of its
     *           content inline.  Ordinary HTML links will usually return
     *           %FALSE, but an inline &lt;src&gt; HTML element will return
     *           %TRUE.
     */
    isInline(): boolean
    /**
     * Determines whether this AtkHyperlink is selected
     */
    isSelectedLink(): boolean
    /**
     * Since the document that a link is associated with may have changed
     * this method returns %TRUE if the link is still valid (with
     * respect to the document it references) and %FALSE otherwise.
     */
    isValid(): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Methods of Atk-1.0.Atk.Action */
    /**
     * Perform the specified action on the object.
     */
    doAction(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     */
    getDescription(i: number): string | null
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
     */
    getKeybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     */
    getLocalizedName(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    getNActions(): number
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
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     */
    getName(i: number): string | null
    /**
     * Sets a description of the specified action of the object.
     */
    setDescription(i: number, desc: string): boolean
    /* Signals of Atk-1.0.Atk.Hyperlink */
    /**
     * The signal link-activated is emitted when a link is activated.
     */
    connect(sigName: "link-activated", callback: (() => void)): number
    on(sigName: "link-activated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "link-activated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "link-activated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "link-activated"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::end-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::number-of-anchors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number-of-anchors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::number-of-anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::number-of-anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::number-of-anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selected-link", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-link", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selected-link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selected-link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selected-link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Hyperlink_ConstructProps)
    _init (config?: Hyperlink_ConstructProps): void
    static $gtype: GObject.Type
}
interface Misc_ConstructProps extends GObject.Object_ConstructProps {
}
class Misc {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Misc */
    /**
     * Take the thread mutex for the GUI toolkit,
     * if one exists.
     * (This method is implemented by the toolkit ATK implementation layer;
     *  for instance, for GTK+, GAIL implements this via GDK_THREADS_ENTER).
     */
    threadsEnter(): void
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
    threadsLeave(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Misc_ConstructProps)
    _init (config?: Misc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Obtain the singleton instance of AtkMisc for this application.
     */
    static getInstance(): Misc
    static $gtype: GObject.Type
}
interface NoOpObject_ConstructProps extends Object_ConstructProps {
}
class NoOpObject {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Role
    /**
     * Table caption.
     */
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    /**
     * Accessible table column description.
     */
    accessibleTableColumnDescription: string
    /**
     * Accessible table column header.
     */
    accessibleTableColumnHeader: Object
    /**
     * Accessible table row description.
     */
    accessibleTableRowDescription: string
    /**
     * Accessible table row header.
     */
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    /**
     * Numeric value of this object, in case being and AtkValue.
     */
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessibleParent: Object
    readonly role: Role
    readonly relationSet: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Object */
    /**
     * Adds a relationship of the specified type with the specified target.
     */
    addRelationship(relationship: RelationType, target: Object): boolean
    /**
     * Gets the accessible id of the accessible.
     */
    getAccessibleId(): string
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    getAttributes(): AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    getDescription(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    getIndexInParent(): number
    /**
     * Gets the layer of the accessible.
     */
    getLayer(): Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    getMdiZorder(): number
    /**
     * Gets the number of accessible children of the accessible.
     */
    getNAccessibleChildren(): number
    /**
     * Gets the accessible name of the accessible.
     */
    getName(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    getObjectLocale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    getParent(): Object
    /**
     * Gets the role of the accessible.
     */
    getRole(): Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     */
    initialize(data?: object | null): void
    /**
     * Emits a state-change signal for the specified state.
     * 
     * Note that as a general rule when the state of an existing object changes,
     * emitting a notification is expected.
     */
    notifyStateChange(state: State, value: boolean): void
    /**
     * Gets the accessible parent of the accessible, if it has been
     * manually assigned with atk_object_set_parent. Otherwise, this
     * function returns %NULL.
     * 
     * This method is intended as an utility for ATK implementors, and not
     * to be exposed to accessible tools. See atk_object_get_parent() for
     * further reference.
     */
    peekParent(): Object
    /**
     * Gets a reference to the specified accessible child of the object.
     * The accessible children are 0-based so the first accessible child is
     * at index 0, the second at index 1 and so on.
     */
    refAccessibleChild(i: number): Object
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    refRelationSet(): RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    refStateSet(): StateSet
    /**
     * Removes a property change handler.
     */
    removePropertyChangeHandler(handlerId: number): void
    /**
     * Removes a relationship of the specified type with the specified target.
     */
    removeRelationship(relationship: RelationType, target: Object): boolean
    /**
     * Sets the accessible ID of the accessible.  This is not meant to be presented
     * to the user, but to be an ID which is stable over application development.
     * Typically, this is the gtkbuilder ID. Such an ID will be available for
     * instance to identify a given well-known accessible object for tailored screen
     * reading, or for automatic regression testing.
     */
    setAccessibleId(name: string): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     */
    setDescription(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     */
    setName(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     */
    setParent(parent: Object): void
    /**
     * Sets the role of the accessible.
     */
    setRole(role: Role): void
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Methods of Atk-1.0.Atk.Action */
    /**
     * Perform the specified action on the object.
     */
    doAction(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     */
    getDescription(i: number): string | null
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
     */
    getKeybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     */
    getLocalizedName(i: number): string | null
    /**
     * Gets the number of accessible actions available on the object.
     * If there are more than one, the first one is considered the
     * "default" action of the object.
     */
    getNActions(): number
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
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     */
    getName(i: number): string | null
    /**
     * Sets a description of the specified action of the object.
     */
    setDescription(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     */
    contains(x: number, y: number, coordType: CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    getAlpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     */
    getExtents(coordType: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     */
    getPosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    grabFocus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     */
    refAccessibleAtPoint(x: number, y: number, coordType: CoordType): Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     */
    removeFocusHandler(handlerId: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     */
    scrollTo(type: ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     */
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     */
    setExtents(x: number, y: number, width: number, height: number, coordType: CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     */
    setPosition(x: number, y: number, coordType: CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     */
    setSize(width: number, height: number): boolean
    /* Methods of Atk-1.0.Atk.Document */
    /**
     * Retrieves the value of the given `attribute_name` inside `document`.
     */
    getAttributeValue(attributeName: string): string | null
    /**
     * Retrieves the current page number inside `document`.
     */
    getCurrentPageNumber(): number
    /**
     * Gets a %gpointer that points to an instance of the DOM.  It is
     * up to the caller to check atk_document_get_type to determine
     * how to cast this pointer.
     */
    getDocument(): object | null
    /**
     * Gets a string indicating the document type.
     */
    getDocumentType(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     *          of the content of this document instance.  Individual
     *          text substrings or images within this document may have
     *          a different locale, see atk_text_get_attributes and
     *          atk_image_get_image_locale.
     */
    getLocale(): string
    /**
     * Retrieves the total number of pages inside `document`.
     */
    getPageCount(): number
    /**
     * Sets the value for the given `attribute_name` inside `document`.
     */
    setAttributeValue(attributeName: string, attributeValue: string): boolean
    /* Methods of Atk-1.0.Atk.EditableText */
    /**
     * Copy text from `start_pos` up to, but not including `end_pos`
     * to the clipboard.
     */
    copyText(startPos: number, endPos: number): void
    /**
     * Copy text from `start_pos` up to, but not including `end_pos`
     * to the clipboard and then delete from the widget.
     */
    cutText(startPos: number, endPos: number): void
    /**
     * Delete text `start_pos` up to, but not including `end_pos`.
     */
    deleteText(startPos: number, endPos: number): void
    /**
     * Insert text at a given position.
     */
    insertText(string: string, length: number, position: number): void
    /**
     * Paste text from clipboard to specified `position`.
     */
    pasteText(position: number): void
    /**
     * Sets the attributes for a specified range. See the ATK_ATTRIBUTE
     * macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes
     * that can be set. Note that other attributes that do not have corresponding
     * ATK_ATTRIBUTE macros may also be set for certain text widgets.
     */
    setRunAttributes(attribSet: AttributeSet, startOffset: number, endOffset: number): boolean
    /**
     * Set text contents of `text`.
     */
    setTextContents(string: string): void
    /* Methods of Atk-1.0.Atk.Hypertext */
    /**
     * Gets the link in this hypertext document at index
     * `link_index`
     */
    getLink(linkIndex: number): Hyperlink
    /**
     * Gets the index into the array of hyperlinks that is associated with
     * the character specified by `char_index`.
     */
    getLinkIndex(charIndex: number): number
    /**
     * Gets the number of links within this hypertext document.
     */
    getNLinks(): number
    /* Methods of Atk-1.0.Atk.Image */
    /**
     * Get a textual description of this image.
     */
    getImageDescription(): string
    /**
     * Retrieves the locale identifier associated to the #AtkImage.
     */
    getImageLocale(): string | null
    /**
     * Gets the position of the image in the form of a point specifying the
     * images top-left corner.
     * 
     * If the position can not be obtained (e.g. missing support), x and y are set
     * to -1.
     */
    getImagePosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Get the width and height in pixels for the specified image.
     * The values of `width` and `height` are returned as -1 if the
     * values cannot be obtained (for instance, if the object is not onscreen).
     * 
     * If the size can not be obtained (e.g. missing support), x and y are set
     * to -1.
     */
    getImageSize(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Sets the textual description for this image.
     */
    setImageDescription(description: string): boolean
    /* Methods of Atk-1.0.Atk.Selection */
    /**
     * Adds the specified accessible child of the object to the
     * object's selection.
     */
    addSelection(i: number): boolean
    /**
     * Clears the selection in the object so that no children in the object
     * are selected.
     */
    clearSelection(): boolean
    /**
     * Gets the number of accessible children currently selected.
     * Note: callers should not rely on %NULL or on a zero value for
     * indication of whether AtkSelectionIface is implemented, they should
     * use type checking/interface checking macros or the
     * atk_get_accessible_value() convenience method.
     */
    getSelectionCount(): number
    /**
     * Determines if the current child of this object is selected
     * Note: callers should not rely on %NULL or on a zero value for
     * indication of whether AtkSelectionIface is implemented, they should
     * use type checking/interface checking macros or the
     * atk_get_accessible_value() convenience method.
     */
    isChildSelected(i: number): boolean
    /**
     * Gets a reference to the accessible object representing the specified
     * selected child of the object.
     * Note: callers should not rely on %NULL or on a zero value for
     * indication of whether AtkSelectionIface is implemented, they should
     * use type checking/interface checking macros or the
     * atk_get_accessible_value() convenience method.
     */
    refSelection(i: number): Object | null
    /**
     * Removes the specified child of the object from the object's selection.
     */
    removeSelection(i: number): boolean
    /**
     * Causes every child of the object to be selected if the object
     * supports multiple selections.
     */
    selectAllSelection(): boolean
    /* Methods of Atk-1.0.Atk.Table */
    /**
     * Adds the specified `column` to the selection.
     */
    addColumnSelection(column: number): boolean
    /**
     * Adds the specified `row` to the selection.
     */
    addRowSelection(row: number): boolean
    /**
     * Gets the caption for the `table`.
     */
    getCaption(): Object | null
    /**
     * Gets a #gint representing the column at the specified `index_`.
     */
    getColumnAtIndex(index: number): number
    /**
     * Gets the description text of the specified `column` in the table
     */
    getColumnDescription(column: number): string
    /**
     * Gets the number of columns occupied by the accessible object
     * at the specified `row` and `column` in the `table`.
     */
    getColumnExtentAt(row: number, column: number): number
    /**
     * Gets the column header of a specified column in an accessible table.
     */
    getColumnHeader(column: number): Object | null
    /**
     * Gets a #gint representing the index at the specified `row` and
     * `column`.
     */
    getIndexAt(row: number, column: number): number
    /**
     * Gets the number of columns in the table.
     */
    getNColumns(): number
    /**
     * Gets the number of rows in the table.
     */
    getNRows(): number
    /**
     * Gets a #gint representing the row at the specified `index_`.
     */
    getRowAtIndex(index: number): number
    /**
     * Gets the description text of the specified row in the table
     */
    getRowDescription(row: number): string | null
    /**
     * Gets the number of rows occupied by the accessible object
     * at a specified `row` and `column` in the `table`.
     */
    getRowExtentAt(row: number, column: number): number
    /**
     * Gets the row header of a specified row in an accessible table.
     */
    getRowHeader(row: number): Object | null
    /**
     * Gets the selected columns of the table by initializing **selected with
     * the selected column numbers. This array should be freed by the caller.
     */
    getSelectedColumns(selected: number): number
    /**
     * Gets the selected rows of the table by initializing **selected with
     * the selected row numbers. This array should be freed by the caller.
     */
    getSelectedRows(selected: number): number
    /**
     * Gets the summary description of the table.
     */
    getSummary(): Object
    /**
     * Gets a boolean value indicating whether the specified `column`
     * is selected
     */
    isColumnSelected(column: number): boolean
    /**
     * Gets a boolean value indicating whether the specified `row`
     * is selected
     */
    isRowSelected(row: number): boolean
    /**
     * Gets a boolean value indicating whether the accessible object
     * at the specified `row` and `column` is selected
     */
    isSelected(row: number, column: number): boolean
    /**
     * Get a reference to the table cell at `row,` `column`. This cell
     * should implement the interface #AtkTableCell
     */
    refAt(row: number, column: number): Object
    /**
     * Adds the specified `column` to the selection.
     */
    removeColumnSelection(column: number): boolean
    /**
     * Removes the specified `row` from the selection.
     */
    removeRowSelection(row: number): boolean
    /**
     * Sets the caption for the table.
     */
    setCaption(caption: Object): void
    /**
     * Sets the description text for the specified `column` of the `table`.
     */
    setColumnDescription(column: number, description: string): void
    /**
     * Sets the specified column header to `header`.
     */
    setColumnHeader(column: number, header: Object): void
    /**
     * Sets the description text for the specified `row` of `table`.
     */
    setRowDescription(row: number, description: string): void
    /**
     * Sets the specified row header to `header`.
     */
    setRowHeader(row: number, header: Object): void
    /**
     * Sets the summary description of the table.
     */
    setSummary(accessible: Object): void
    /* Methods of Atk-1.0.Atk.TableCell */
    /**
     * Returns the column headers as an array of cell accessibles.
     */
    getColumnHeaderCells(): Object[]
    /**
     * Returns the number of columns occupied by this cell accessible.
     */
    getColumnSpan(): number
    /**
     * Retrieves the tabular position of this cell.
     */
    getPosition(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    /**
     * Gets the row and column indexes and span of this cell accessible.
     * 
     * Note: If the object does not implement this function, then, by default, atk
     * will implement this function by calling get_row_span and get_column_span
     * on the object.
     */
    getRowColumnSpan(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* rowSpan */ number, /* columnSpan */ number ]
    /**
     * Returns the row headers as an array of cell accessibles.
     */
    getRowHeaderCells(): Object[]
    /**
     * Returns the number of rows occupied by this cell accessible.
     */
    getRowSpan(): number
    /**
     * Returns a reference to the accessible of the containing table.
     */
    getTable(): Object
    /* Methods of Atk-1.0.Atk.Text */
    /**
     * Adds a selection bounded by the specified offsets.
     */
    addSelection(startOffset: number, endOffset: number): boolean
    /**
     * Get the ranges of text in the specified bounding box.
     */
    getBoundedRanges(rect: TextRectangle, coordType: CoordType, xClipType: TextClipType, yClipType: TextClipType): TextRange[]
    /**
     * Gets the offset of the position of the caret (cursor).
     */
    getCaretOffset(): number
    /**
     * Gets the specified text.
     */
    getCharacterAtOffset(offset: number): number
    /**
     * Gets the character count.
     */
    getCharacterCount(): number
    /**
     * If the extent can not be obtained (e.g. missing support), all of x, y, width,
     * height are set to -1.
     * 
     * Get the bounding box containing the glyph representing the character at
     *     a particular text offset.
     */
    getCharacterExtents(offset: number, coords: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Creates an #AtkAttributeSet which consists of the default values of
     * attributes for the text. See the enum AtkTextAttribute for types of text
     * attributes that can be returned. Note that other attributes may also be
     * returned.
     */
    getDefaultAttributes(): AttributeSet
    /**
     * Gets the number of selected regions.
     */
    getNSelections(): number
    /**
     * Gets the offset of the character located at coordinates `x` and `y`. `x` and `y`
     * are interpreted as being relative to the screen or this widget's window
     * depending on `coords`.
     */
    getOffsetAtPoint(x: number, y: number, coords: CoordType): number
    /**
     * Get the bounding box for text within the specified range.
     * 
     * If the extents can not be obtained (e.g. or missing support), the rectangle
     * fields are set to -1.
     */
    getRangeExtents(startOffset: number, endOffset: number, coordType: CoordType): /* rect */ TextRectangle
    /**
     * Creates an #AtkAttributeSet which consists of the attributes explicitly
     * set at the position `offset` in the text. `start_offset` and `end_offset` are
     * set to the start and end of the range around `offset` where the attributes are
     * invariant. Note that `end_offset` is the offset of the first character
     * after the range.  See the enum AtkTextAttribute for types of text
     * attributes that can be returned. Note that other attributes may also be
     * returned.
     */
    getRunAttributes(offset: number): [ /* returnType */ AttributeSet, /* startOffset */ number, /* endOffset */ number ]
    /**
     * Gets the text from the specified selection.
     */
    getSelection(selectionNum: number): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    /**
     * Gets a portion of the text exposed through an #AtkText according to a given `offset`
     * and a specific `granularity,` along with the start and end offsets defining the
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
     */
    getStringAtOffset(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* startOffset */ number, /* endOffset */ number ]
    /**
     * Gets the specified text.
     */
    getText(startOffset: number, endOffset: number): string
    /**
     * Gets the specified text.
     */
    getTextAfterOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
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
     */
    getTextAtOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    /**
     * Gets the specified text.
     */
    getTextBeforeOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    /**
     * Removes the specified selection.
     */
    removeSelection(selectionNum: number): boolean
    /**
     * Makes a substring of `text` visible on the screen by scrolling all necessary parents.
     */
    scrollSubstringTo(startOffset: number, endOffset: number, type: ScrollType): boolean
    /**
     * Move the top-left of a substring of `text` to a given position of the screen
     * by scrolling all necessary parents.
     */
    scrollSubstringToPoint(startOffset: number, endOffset: number, coords: CoordType, x: number, y: number): boolean
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
     */
    setCaretOffset(offset: number): boolean
    /**
     * Changes the start and end offset of the specified selection.
     */
    setSelection(selectionNum: number, startOffset: number, endOffset: number): boolean
    /* Methods of Atk-1.0.Atk.Value */
    /**
     * Gets the value of this object.
     */
    getCurrentValue(): /* value */ any
    /**
     * Gets the minimum increment by which the value of this object may be
     * changed.  If zero, the minimum increment is undefined, which may
     * mean that it is limited only by the floating point precision of the
     * platform.
     */
    getIncrement(): number
    /**
     * Gets the maximum value of this object.
     */
    getMaximumValue(): /* value */ any
    /**
     * Gets the minimum increment by which the value of this object may be changed.  If zero,
     * the minimum increment is undefined, which may mean that it is limited only by the
     * floating point precision of the platform.
     */
    getMinimumIncrement(): /* value */ any
    /**
     * Gets the minimum value of this object.
     */
    getMinimumValue(): /* value */ any
    /**
     * Gets the range of this object.
     */
    getRange(): Range | null
    /**
     * Gets the list of subranges defined for this object. See #AtkValue
     * introduction for examples of subranges and when to expose them.
     */
    getSubRanges(): Range[]
    /**
     * Gets the current value and the human readable text alternative of
     * `obj`. `text` is a newly created string, that must be freed by the
     * caller. Can be NULL if no descriptor is available.
     */
    getValueAndText(): [ /* value */ number, /* text */ string | null ]
    /**
     * Sets the value of this object.
     */
    setCurrentValue(value: any): boolean
    /**
     * Sets the value of this object.
     * 
     * This method is intended to provide a way to change the value of the
     * object. In any case, it is possible that the value can't be
     * modified (ie: a read-only component). If the value changes due this
     * call, it is possible that the text could change, and will trigger
     * an #AtkValue::value-changed signal emission.
     * 
     * Note for implementors: the deprecated atk_value_set_current_value()
     * method returned TRUE or FALSE depending if the value was assigned
     * or not. In the practice several implementors were not able to
     * decide it, and returned TRUE in any case. For that reason it is not
     * required anymore to return if the value was properly assigned or
     * not.
     */
    setValue(newValue: number): void
    /* Signals of Atk-1.0.Atk.Object */
    /**
     * The "active-descendant-changed" signal is emitted by an object
     * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
     * object in the object changes. For instance, a table will emit the
     * signal when the cell in the table which has focus changes.
     */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Object): void
    /**
     * The signal "children-changed" is emitted when a child is added or
     * removed form an object. It supports two details: "add" and
     * "remove"
     */
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    /**
     * The signal "focus-event" is emitted when an object gained or lost
     * focus.
     */
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    /**
     * The signal "property-change" is emitted when an object's property
     * value changes. `arg1` contains an #AtkPropertyValues with the name
     * and the new value of the property whose value has changed. Note
     * that, as with GObject notify, getting this signal does not
     * guarantee that the value of the property has actually changed; it
     * may also be emitted when the setter of the property is called to
     * reinstate the previous value.
     * 
     * Toolkit implementor note: ATK implementors should use
     * g_object_notify() to emit property-changed
     * notifications. #AtkObject::property-changed is needed by the
     * implementation of atk_add_global_event_listener() because GObject
     * notify doesn't support emission hooks.
     */
    connect(sigName: "property-change", callback: ((arg1: PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: PropertyValues): void
    /**
     * The "state-change" signal is emitted when an object's state
     * changes.  The detail value identifies the state type which has
     * changed.
     */
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    /**
     * The "visible-data-changed" signal is emitted when the visual
     * appearance of the object changed.
     */
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    /**
     * The 'bounds-changed" signal is emitted when the bposition or
     * size of the component changes.
     */
    connect(sigName: "bounds-changed", callback: ((arg1: Rectangle) => void)): number
    on(sigName: "bounds-changed", callback: (arg1: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (arg1: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (arg1: Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    /* Signals of Atk-1.0.Atk.Document */
    /**
     * The 'load-complete' signal is emitted when a pending load of
     * a static document has completed.  This signal is to be
     * expected by ATK clients if and when AtkDocument implementors
     * expose ATK_STATE_BUSY.  If the state of an AtkObject which
     * implements AtkDocument does not include ATK_STATE_BUSY, it
     * should be safe for clients to assume that the AtkDocument's
     * static contents are fully loaded into the container.
     * (Dynamic document contents should be exposed via other
     * signals.)
     */
    connect(sigName: "load-complete", callback: (() => void)): number
    on(sigName: "load-complete", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-complete", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-complete", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "load-complete"): void
    /**
     * The 'load-stopped' signal is emitted when a pending load of
     * document contents is cancelled, paused, or otherwise
     * interrupted by the user or application logic.  It should not
     * however be emitted while waiting for a resource (for instance
     * while blocking on a file or network read) unless a
     * user-significant timeout has occurred.
     */
    connect(sigName: "load-stopped", callback: (() => void)): number
    on(sigName: "load-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "load-stopped"): void
    /**
     * The 'page-changed' signal is emitted when the current page of
     * a document changes, e.g. pressing page up/down in a document
     * viewer.
     */
    connect(sigName: "page-changed", callback: ((pageNumber: number) => void)): number
    on(sigName: "page-changed", callback: (pageNumber: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-changed", callback: (pageNumber: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-changed", callback: (pageNumber: number) => void): NodeJS.EventEmitter
    emit(sigName: "page-changed", pageNumber: number): void
    /**
     * The 'reload' signal is emitted when the contents of a
     * document is refreshed from its source.  Once 'reload' has
     * been emitted, a matching 'load-complete' or 'load-stopped'
     * signal should follow, which clients may await before
     * interrogating ATK for the latest document content.
     */
    connect(sigName: "reload", callback: (() => void)): number
    on(sigName: "reload", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reload", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reload", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reload"): void
    /* Signals of Atk-1.0.Atk.Hypertext */
    /**
     * The "link-selected" signal is emitted by an AtkHyperText
     * object when one of the hyperlinks associated with the object
     * is selected.
     */
    connect(sigName: "link-selected", callback: ((arg1: number) => void)): number
    on(sigName: "link-selected", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "link-selected", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "link-selected", callback: (arg1: number) => void): NodeJS.EventEmitter
    emit(sigName: "link-selected", arg1: number): void
    /* Signals of Atk-1.0.Atk.Selection */
    /**
     * The "selection-changed" signal is emitted by an object which
     * implements AtkSelection interface when the selection changes.
     */
    connect(sigName: "selection-changed", callback: (() => void)): number
    on(sigName: "selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "selection-changed"): void
    /* Signals of Atk-1.0.Atk.Table */
    /**
     * The "column-deleted" signal is emitted by an object which
     * implements the AtkTable interface when a column is deleted.
     */
    connect(sigName: "column-deleted", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "column-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-deleted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "column-deleted", arg1: number, arg2: number): void
    /**
     * The "column-inserted" signal is emitted by an object which
     * implements the AtkTable interface when a column is inserted.
     */
    connect(sigName: "column-inserted", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "column-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-inserted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "column-inserted", arg1: number, arg2: number): void
    /**
     * The "column-reordered" signal is emitted by an object which
     * implements the AtkTable interface when the columns are
     * reordered.
     */
    connect(sigName: "column-reordered", callback: (() => void)): number
    on(sigName: "column-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-reordered", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "column-reordered"): void
    /**
     * The "model-changed" signal is emitted by an object which
     * implements the AtkTable interface when the model displayed by
     * the table changes.
     */
    connect(sigName: "model-changed", callback: (() => void)): number
    on(sigName: "model-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "model-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "model-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "model-changed"): void
    /**
     * The "row-deleted" signal is emitted by an object which
     * implements the AtkTable interface when a row is deleted.
     */
    connect(sigName: "row-deleted", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "row-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-deleted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-deleted", arg1: number, arg2: number): void
    /**
     * The "row-inserted" signal is emitted by an object which
     * implements the AtkTable interface when a row is inserted.
     */
    connect(sigName: "row-inserted", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "row-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", arg1: number, arg2: number): void
    /**
     * The "row-reordered" signal is emitted by an object which
     * implements the AtkTable interface when the rows are
     * reordered.
     */
    connect(sigName: "row-reordered", callback: (() => void)): number
    on(sigName: "row-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-reordered", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "row-reordered"): void
    /* Signals of Atk-1.0.Atk.Text */
    /**
     * The "text-attributes-changed" signal is emitted when the text
     * attributes of the text of an object which implements AtkText
     * changes.
     */
    connect(sigName: "text-attributes-changed", callback: (() => void)): number
    on(sigName: "text-attributes-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-attributes-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-attributes-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "text-attributes-changed"): void
    /**
     * The "text-caret-moved" signal is emitted when the caret
     * position of the text of an object which implements AtkText
     * changes.
     */
    connect(sigName: "text-caret-moved", callback: ((arg1: number) => void)): number
    on(sigName: "text-caret-moved", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-caret-moved", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-caret-moved", callback: (arg1: number) => void): NodeJS.EventEmitter
    emit(sigName: "text-caret-moved", arg1: number): void
    /**
     * The "text-changed" signal is emitted when the text of the
     * object which implements the AtkText interface changes, This
     * signal will have a detail which is either "insert" or
     * "delete" which identifies whether the text change was an
     * insertion or a deletion.
     */
    connect(sigName: "text-changed", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "text-changed", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-changed", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-changed", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "text-changed", arg1: number, arg2: number): void
    /**
     * The "text-insert" signal is emitted when a new text is
     * inserted. If the signal was not triggered by the user
     * (e.g. typing or pasting text), the "system" detail should be
     * included.
     */
    connect(sigName: "text-insert", callback: ((arg1: number, arg2: number, arg3: string) => void)): number
    on(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void): NodeJS.EventEmitter
    emit(sigName: "text-insert", arg1: number, arg2: number, arg3: string): void
    /**
     * The "text-remove" signal is emitted when a new text is
     * removed. If the signal was not triggered by the user
     * (e.g. typing or pasting text), the "system" detail should be
     * included.
     */
    connect(sigName: "text-remove", callback: ((arg1: number, arg2: number, arg3: string) => void)): number
    on(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void): NodeJS.EventEmitter
    emit(sigName: "text-remove", arg1: number, arg2: number, arg3: string): void
    /**
     * The "text-selection-changed" signal is emitted when the
     * selected text of an object which implements AtkText changes.
     */
    connect(sigName: "text-selection-changed", callback: (() => void)): number
    on(sigName: "text-selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-selection-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "text-selection-changed"): void
    /* Signals of Atk-1.0.Atk.Value */
    /**
     * The 'value-changed' signal is emitted when the current value
     * that represent the object changes. `value` is the numerical
     * representation of this new value.  `text` is the human
     * readable text alternative of `value,` and can be NULL if it is
     * not available. Note that if there is a textual description
     * associated with the new numeric value, that description
     * should be included regardless of whether or not it has also
     * changed.
     * 
     * Example: a password meter whose value changes as the user
     * types their new password. Appropiate value text would be
     * "weak", "acceptable" and "strong".
     */
    connect(sigName: "value-changed", callback: ((value: number, text: string) => void)): number
    on(sigName: "value-changed", callback: (value: number, text: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (value: number, text: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (value: number, text: string) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", value: number, text: string): void
    /* Signals of Atk-1.0.Atk.Window */
    /**
     * The signal #AtkWindow::activate is emitted when a window
     * becomes the active window of the application or session.
     */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    /**
     * The signal #AtkWindow::create is emitted when a new window
     * is created.
     */
    connect(sigName: "create", callback: (() => void)): number
    on(sigName: "create", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "create"): void
    /**
     * The signal #AtkWindow::deactivate is emitted when a window is
     * no longer the active window of the application or session.
     */
    connect(sigName: "deactivate", callback: (() => void)): number
    on(sigName: "deactivate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deactivate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deactivate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "deactivate"): void
    /**
     * The signal #AtkWindow::destroy is emitted when a window is
     * destroyed.
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /**
     * The signal #AtkWindow::maximize is emitted when a window
     * is maximized.
     */
    connect(sigName: "maximize", callback: (() => void)): number
    on(sigName: "maximize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "maximize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "maximize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "maximize"): void
    /**
     * The signal #AtkWindow::minimize is emitted when a window
     * is minimized.
     */
    connect(sigName: "minimize", callback: (() => void)): number
    on(sigName: "minimize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "minimize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "minimize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "minimize"): void
    /**
     * The signal #AtkWindow::move is emitted when a window
     * is moved.
     */
    connect(sigName: "move", callback: (() => void)): number
    on(sigName: "move", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "move"): void
    /**
     * The signal #AtkWindow::resize is emitted when a window
     * is resized.
     */
    connect(sigName: "resize", callback: (() => void)): number
    on(sigName: "resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resize"): void
    /**
     * The signal #AtkWindow::restore is emitted when a window
     * is restored.
     */
    connect(sigName: "restore", callback: (() => void)): number
    on(sigName: "restore", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "restore", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "restore", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "restore"): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NoOpObject_ConstructProps)
    _init (config?: NoOpObject_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(obj: GObject.Object): NoOpObject
    /**
     * Frees the memory associated with an array of AtkTextRange. It is assumed
     * that the array was returned by the function atk_text_get_bounded_ranges
     * and is NULL terminated.
     */
    static freeRanges(ranges: TextRange[]): void
    static $gtype: GObject.Type
}
interface NoOpObjectFactory_ConstructProps extends ObjectFactory_ConstructProps {
}
class NoOpObjectFactory {
    /* Fields of Atk-1.0.Atk.ObjectFactory */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.ObjectFactory */
    /**
     * Provides an #AtkObject that implements an accessibility interface
     * on behalf of `obj`
     */
    createAccessible(obj: GObject.Object): Object
    /**
     * Gets the GType of the accessible which is created by the factory.
     */
    getAccessibleType(): GObject.Type
    /**
     * Inform `factory` that it is no longer being used to create
     * accessibles. When called, `factory` may need to inform
     * #AtkObjects which it has created that they need to be re-instantiated.
     * Note: primarily used for runtime replacement of #AtkObjectFactorys
     * in object registries.
     */
    invalidate(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NoOpObjectFactory_ConstructProps)
    _init (config?: NoOpObjectFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NoOpObjectFactory
    static $gtype: GObject.Type
}
interface Object_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Atk-1.0.Atk.Object */
    accessibleDescription?: string
    accessibleName?: string
    accessibleParent?: Object
    accessibleRole?: Role
    /**
     * Table caption.
     */
    accessibleTableCaption?: string
    accessibleTableCaptionObject?: Object
    /**
     * Accessible table column description.
     */
    accessibleTableColumnDescription?: string
    /**
     * Accessible table column header.
     */
    accessibleTableColumnHeader?: Object
    /**
     * Accessible table row description.
     */
    accessibleTableRowDescription?: string
    /**
     * Accessible table row header.
     */
    accessibleTableRowHeader?: Object
    accessibleTableSummary?: Object
    /**
     * Numeric value of this object, in case being and AtkValue.
     */
    accessibleValue?: number
}
class Object {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleParent: Object
    accessibleRole: Role
    /**
     * Table caption.
     */
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    /**
     * Accessible table column description.
     */
    accessibleTableColumnDescription: string
    /**
     * Accessible table column header.
     */
    accessibleTableColumnHeader: Object
    /**
     * Accessible table row description.
     */
    accessibleTableRowDescription: string
    /**
     * Accessible table row header.
     */
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    /**
     * Numeric value of this object, in case being and AtkValue.
     */
    accessibleValue: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Object */
    /**
     * Adds a relationship of the specified type with the specified target.
     */
    addRelationship(relationship: RelationType, target: Object): boolean
    /**
     * Gets the accessible id of the accessible.
     */
    getAccessibleId(): string
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    getAttributes(): AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    getDescription(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    getIndexInParent(): number
    /**
     * Gets the layer of the accessible.
     */
    getLayer(): Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    getMdiZorder(): number
    /**
     * Gets the number of accessible children of the accessible.
     */
    getNAccessibleChildren(): number
    /**
     * Gets the accessible name of the accessible.
     */
    getName(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    getObjectLocale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    getParent(): Object
    /**
     * Gets the role of the accessible.
     */
    getRole(): Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     */
    initialize(data?: object | null): void
    /**
     * Emits a state-change signal for the specified state.
     * 
     * Note that as a general rule when the state of an existing object changes,
     * emitting a notification is expected.
     */
    notifyStateChange(state: State, value: boolean): void
    /**
     * Gets the accessible parent of the accessible, if it has been
     * manually assigned with atk_object_set_parent. Otherwise, this
     * function returns %NULL.
     * 
     * This method is intended as an utility for ATK implementors, and not
     * to be exposed to accessible tools. See atk_object_get_parent() for
     * further reference.
     */
    peekParent(): Object
    /**
     * Gets a reference to the specified accessible child of the object.
     * The accessible children are 0-based so the first accessible child is
     * at index 0, the second at index 1 and so on.
     */
    refAccessibleChild(i: number): Object
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    refRelationSet(): RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    refStateSet(): StateSet
    /**
     * Removes a property change handler.
     */
    removePropertyChangeHandler(handlerId: number): void
    /**
     * Removes a relationship of the specified type with the specified target.
     */
    removeRelationship(relationship: RelationType, target: Object): boolean
    /**
     * Sets the accessible ID of the accessible.  This is not meant to be presented
     * to the user, but to be an ID which is stable over application development.
     * Typically, this is the gtkbuilder ID. Such an ID will be available for
     * instance to identify a given well-known accessible object for tailored screen
     * reading, or for automatic regression testing.
     */
    setAccessibleId(name: string): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     */
    setDescription(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     */
    setName(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     */
    setParent(parent: Object): void
    /**
     * Sets the role of the accessible.
     */
    setRole(role: Role): void
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of Atk-1.0.Atk.Object */
    /**
     * The "active-descendant-changed" signal is emitted by an object
     * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
     * object in the object changes. For instance, a table will emit the
     * signal when the cell in the table which has focus changes.
     */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Object): void
    /**
     * The signal "children-changed" is emitted when a child is added or
     * removed form an object. It supports two details: "add" and
     * "remove"
     */
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    /**
     * The signal "focus-event" is emitted when an object gained or lost
     * focus.
     */
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    /**
     * The signal "property-change" is emitted when an object's property
     * value changes. `arg1` contains an #AtkPropertyValues with the name
     * and the new value of the property whose value has changed. Note
     * that, as with GObject notify, getting this signal does not
     * guarantee that the value of the property has actually changed; it
     * may also be emitted when the setter of the property is called to
     * reinstate the previous value.
     * 
     * Toolkit implementor note: ATK implementors should use
     * g_object_notify() to emit property-changed
     * notifications. #AtkObject::property-changed is needed by the
     * implementation of atk_add_global_event_listener() because GObject
     * notify doesn't support emission hooks.
     */
    connect(sigName: "property-change", callback: ((arg1: PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: PropertyValues): void
    /**
     * The "state-change" signal is emitted when an object's state
     * changes.  The detail value identifies the state type which has
     * changed.
     */
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    /**
     * The "visible-data-changed" signal is emitted when the visual
     * appearance of the object changed.
     */
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    static $gtype: GObject.Type
}
interface ObjectFactory_ConstructProps extends GObject.Object_ConstructProps {
}
class ObjectFactory {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.ObjectFactory */
    /**
     * Provides an #AtkObject that implements an accessibility interface
     * on behalf of `obj`
     */
    createAccessible(obj: GObject.Object): Object
    /**
     * Gets the GType of the accessible which is created by the factory.
     */
    getAccessibleType(): GObject.Type
    /**
     * Inform `factory` that it is no longer being used to create
     * accessibles. When called, `factory` may need to inform
     * #AtkObjects which it has created that they need to be re-instantiated.
     * Note: primarily used for runtime replacement of #AtkObjectFactorys
     * in object registries.
     */
    invalidate(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ObjectFactory_ConstructProps)
    _init (config?: ObjectFactory_ConstructProps): void
    static $gtype: GObject.Type
}
interface Plug_ConstructProps extends Object_ConstructProps {
}
class Plug {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Role
    /**
     * Table caption.
     */
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    /**
     * Accessible table column description.
     */
    accessibleTableColumnDescription: string
    /**
     * Accessible table column header.
     */
    accessibleTableColumnHeader: Object
    /**
     * Accessible table row description.
     */
    accessibleTableRowDescription: string
    /**
     * Accessible table row header.
     */
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    /**
     * Numeric value of this object, in case being and AtkValue.
     */
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessibleParent: Object
    readonly role: Role
    readonly relationSet: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Plug */
    /**
     * Gets the unique ID of an #AtkPlug object, which can be used to
     * embed inside of an #AtkSocket using atk_socket_embed().
     * 
     * Internally, this calls a class function that should be registered
     * by the IPC layer (usually at-spi2-atk). The implementor of an
     * #AtkPlug object should call this function (after atk-bridge is
     * loaded) and pass the value to the process implementing the
     * #AtkSocket, so it could embed the plug.
     */
    getId(): string
    /**
     * Sets `child` as accessible child of `plug` and `plug` as accessible parent of
     * `child`. `child` can be NULL.
     * 
     * In some cases, one can not use the AtkPlug type directly as accessible
     * object for the toplevel widget of the application. For instance in the gtk
     * case, GtkPlugAccessible can not inherit both from GtkWindowAccessible and
     * from AtkPlug. In such a case, one can create, in addition to the standard
     * accessible object for the toplevel widget, an AtkPlug object, and make the
     * former the child of the latter by calling atk_plug_set_child().
     */
    setChild(child: Object): void
    /* Methods of Atk-1.0.Atk.Object */
    /**
     * Adds a relationship of the specified type with the specified target.
     */
    addRelationship(relationship: RelationType, target: Object): boolean
    /**
     * Gets the accessible id of the accessible.
     */
    getAccessibleId(): string
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    getAttributes(): AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    getDescription(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    getIndexInParent(): number
    /**
     * Gets the layer of the accessible.
     */
    getLayer(): Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    getMdiZorder(): number
    /**
     * Gets the number of accessible children of the accessible.
     */
    getNAccessibleChildren(): number
    /**
     * Gets the accessible name of the accessible.
     */
    getName(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    getObjectLocale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    getParent(): Object
    /**
     * Gets the role of the accessible.
     */
    getRole(): Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     */
    initialize(data?: object | null): void
    /**
     * Emits a state-change signal for the specified state.
     * 
     * Note that as a general rule when the state of an existing object changes,
     * emitting a notification is expected.
     */
    notifyStateChange(state: State, value: boolean): void
    /**
     * Gets the accessible parent of the accessible, if it has been
     * manually assigned with atk_object_set_parent. Otherwise, this
     * function returns %NULL.
     * 
     * This method is intended as an utility for ATK implementors, and not
     * to be exposed to accessible tools. See atk_object_get_parent() for
     * further reference.
     */
    peekParent(): Object
    /**
     * Gets a reference to the specified accessible child of the object.
     * The accessible children are 0-based so the first accessible child is
     * at index 0, the second at index 1 and so on.
     */
    refAccessibleChild(i: number): Object
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    refRelationSet(): RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    refStateSet(): StateSet
    /**
     * Removes a property change handler.
     */
    removePropertyChangeHandler(handlerId: number): void
    /**
     * Removes a relationship of the specified type with the specified target.
     */
    removeRelationship(relationship: RelationType, target: Object): boolean
    /**
     * Sets the accessible ID of the accessible.  This is not meant to be presented
     * to the user, but to be an ID which is stable over application development.
     * Typically, this is the gtkbuilder ID. Such an ID will be available for
     * instance to identify a given well-known accessible object for tailored screen
     * reading, or for automatic regression testing.
     */
    setAccessibleId(name: string): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     */
    setDescription(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     */
    setName(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     */
    setParent(parent: Object): void
    /**
     * Sets the role of the accessible.
     */
    setRole(role: Role): void
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Methods of Atk-1.0.Atk.Component */
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     */
    contains(x: number, y: number, coordType: CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    getAlpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     */
    getExtents(coordType: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     */
    getPosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    grabFocus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     */
    refAccessibleAtPoint(x: number, y: number, coordType: CoordType): Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     */
    removeFocusHandler(handlerId: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     */
    scrollTo(type: ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     */
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     */
    setExtents(x: number, y: number, width: number, height: number, coordType: CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     */
    setPosition(x: number, y: number, coordType: CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     */
    setSize(width: number, height: number): boolean
    /* Signals of Atk-1.0.Atk.Object */
    /**
     * The "active-descendant-changed" signal is emitted by an object
     * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
     * object in the object changes. For instance, a table will emit the
     * signal when the cell in the table which has focus changes.
     */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Object): void
    /**
     * The signal "children-changed" is emitted when a child is added or
     * removed form an object. It supports two details: "add" and
     * "remove"
     */
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    /**
     * The signal "focus-event" is emitted when an object gained or lost
     * focus.
     */
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    /**
     * The signal "property-change" is emitted when an object's property
     * value changes. `arg1` contains an #AtkPropertyValues with the name
     * and the new value of the property whose value has changed. Note
     * that, as with GObject notify, getting this signal does not
     * guarantee that the value of the property has actually changed; it
     * may also be emitted when the setter of the property is called to
     * reinstate the previous value.
     * 
     * Toolkit implementor note: ATK implementors should use
     * g_object_notify() to emit property-changed
     * notifications. #AtkObject::property-changed is needed by the
     * implementation of atk_add_global_event_listener() because GObject
     * notify doesn't support emission hooks.
     */
    connect(sigName: "property-change", callback: ((arg1: PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: PropertyValues): void
    /**
     * The "state-change" signal is emitted when an object's state
     * changes.  The detail value identifies the state type which has
     * changed.
     */
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    /**
     * The "visible-data-changed" signal is emitted when the visual
     * appearance of the object changed.
     */
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    /**
     * The 'bounds-changed" signal is emitted when the bposition or
     * size of the component changes.
     */
    connect(sigName: "bounds-changed", callback: ((arg1: Rectangle) => void)): number
    on(sigName: "bounds-changed", callback: (arg1: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (arg1: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (arg1: Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Plug_ConstructProps)
    _init (config?: Plug_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Plug
    static $gtype: GObject.Type
}
interface Registry_ConstructProps extends GObject.Object_ConstructProps {
}
class Registry {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Registry */
    /**
     * Gets an #AtkObjectFactory appropriate for creating #AtkObjects
     * appropriate for `type`.
     */
    getFactory(type: GObject.Type): ObjectFactory
    /**
     * Provides a #GType indicating the #AtkObjectFactory subclass
     * associated with `type`.
     */
    getFactoryType(type: GObject.Type): GObject.Type
    /**
     * Associate an #AtkObjectFactory subclass with a #GType. Note:
     * The associated `factory_type` will thereafter be responsible for
     * the creation of new #AtkObject implementations for instances
     * appropriate for `type`.
     */
    setFactoryType(type: GObject.Type, factoryType: GObject.Type): void
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Registry_ConstructProps)
    _init (config?: Registry_ConstructProps): void
    static $gtype: GObject.Type
}
interface Relation_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Atk-1.0.Atk.Relation */
    relationType?: RelationType
    target?: GObject.ValueArray
}
class Relation {
    /* Properties of Atk-1.0.Atk.Relation */
    relationType: RelationType
    target: GObject.ValueArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Relation */
    /**
     * Adds the specified AtkObject to the target for the relation, if it is
     * not already present.  See also atk_object_add_relationship().
     */
    addTarget(target: Object): void
    /**
     * Gets the type of `relation`
     */
    getRelationType(): RelationType
    /**
     * Gets the target list of `relation`
     */
    getTarget(): Object[]
    /**
     * Remove the specified AtkObject from the target for the relation.
     */
    removeTarget(target: Object): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Relation_ConstructProps)
    _init (config?: Relation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(targets: Object[], relationship: RelationType): Relation
    static $gtype: GObject.Type
}
interface RelationSet_ConstructProps extends GObject.Object_ConstructProps {
}
class RelationSet {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.RelationSet */
    /**
     * Add a new relation to the current relation set if it is not already
     * present.
     * This function ref's the AtkRelation so the caller of this function
     * should unref it to ensure that it will be destroyed when the AtkRelationSet
     * is destroyed.
     */
    add(relation: Relation): void
    /**
     * Add a new relation of the specified type with the specified target to
     * the current relation set if the relation set does not contain a relation
     * of that type. If it is does contain a relation of that typea the target
     * is added to the relation.
     */
    addRelationByType(relationship: RelationType, target: Object): void
    /**
     * Determines whether the relation set contains a relation that matches the
     * specified type.
     */
    contains(relationship: RelationType): boolean
    /**
     * Determines whether the relation set contains a relation that
     * matches the specified pair formed by type `relationship` and object
     * `target`.
     */
    containsTarget(relationship: RelationType, target: Object): boolean
    /**
     * Determines the number of relations in a relation set.
     */
    getNRelations(): number
    /**
     * Determines the relation at the specified position in the relation set.
     */
    getRelation(i: number): Relation
    /**
     * Finds a relation that matches the specified type.
     */
    getRelationByType(relationship: RelationType): Relation
    /**
     * Removes a relation from the relation set.
     * This function unref's the #AtkRelation so it will be deleted unless there
     * is another reference to it.
     */
    remove(relation: Relation): void
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RelationSet_ConstructProps)
    _init (config?: RelationSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RelationSet
    static $gtype: GObject.Type
}
interface Socket_ConstructProps extends Object_ConstructProps {
}
class Socket {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Role
    /**
     * Table caption.
     */
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    /**
     * Accessible table column description.
     */
    accessibleTableColumnDescription: string
    /**
     * Accessible table column header.
     */
    accessibleTableColumnHeader: Object
    /**
     * Accessible table row description.
     */
    accessibleTableRowDescription: string
    /**
     * Accessible table row header.
     */
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    /**
     * Numeric value of this object, in case being and AtkValue.
     */
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessibleParent: Object
    readonly role: Role
    readonly relationSet: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Socket */
    /**
     * Embeds the children of an #AtkPlug as the children of the
     * #AtkSocket. The plug may be in the same process or in a different
     * process.
     * 
     * The class item used by this function should be filled in by the IPC
     * layer (usually at-spi2-atk). The implementor of the AtkSocket
     * should call this function and pass the id for the plug as returned
     * by atk_plug_get_id().  It is the responsibility of the application
     * to pass the plug id on to the process implementing the #AtkSocket
     * as needed.
     */
    embed(plugId: string): void
    /**
     * Determines whether or not the socket has an embedded plug.
     */
    isOccupied(): boolean
    /* Methods of Atk-1.0.Atk.Object */
    /**
     * Adds a relationship of the specified type with the specified target.
     */
    addRelationship(relationship: RelationType, target: Object): boolean
    /**
     * Gets the accessible id of the accessible.
     */
    getAccessibleId(): string
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     */
    getAttributes(): AttributeSet
    /**
     * Gets the accessible description of the accessible.
     */
    getDescription(): string
    /**
     * Gets the 0-based index of this accessible in its parent; returns -1 if the
     * accessible does not have an accessible parent.
     */
    getIndexInParent(): number
    /**
     * Gets the layer of the accessible.
     */
    getLayer(): Layer
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     */
    getMdiZorder(): number
    /**
     * Gets the number of accessible children of the accessible.
     */
    getNAccessibleChildren(): number
    /**
     * Gets the accessible name of the accessible.
     */
    getName(): string
    /**
     * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
     * of `accessible`.
     */
    getObjectLocale(): string
    /**
     * Gets the accessible parent of the accessible. By default this is
     * the one assigned with atk_object_set_parent(), but it is assumed
     * that ATK implementors have ways to get the parent of the object
     * without the need of assigning it manually with
     * atk_object_set_parent(), and will return it with this method.
     * 
     * If you are only interested on the parent assigned with
     * atk_object_set_parent(), use atk_object_peek_parent().
     */
    getParent(): Object
    /**
     * Gets the role of the accessible.
     */
    getRole(): Role
    /**
     * This function is called when implementing subclasses of #AtkObject.
     * It does initialization required for the new object. It is intended
     * that this function should called only in the ..._new() functions used
     * to create an instance of a subclass of #AtkObject
     */
    initialize(data?: object | null): void
    /**
     * Emits a state-change signal for the specified state.
     * 
     * Note that as a general rule when the state of an existing object changes,
     * emitting a notification is expected.
     */
    notifyStateChange(state: State, value: boolean): void
    /**
     * Gets the accessible parent of the accessible, if it has been
     * manually assigned with atk_object_set_parent. Otherwise, this
     * function returns %NULL.
     * 
     * This method is intended as an utility for ATK implementors, and not
     * to be exposed to accessible tools. See atk_object_get_parent() for
     * further reference.
     */
    peekParent(): Object
    /**
     * Gets a reference to the specified accessible child of the object.
     * The accessible children are 0-based so the first accessible child is
     * at index 0, the second at index 1 and so on.
     */
    refAccessibleChild(i: number): Object
    /**
     * Gets the #AtkRelationSet associated with the object.
     */
    refRelationSet(): RelationSet
    /**
     * Gets a reference to the state set of the accessible; the caller must
     * unreference it when it is no longer needed.
     */
    refStateSet(): StateSet
    /**
     * Removes a property change handler.
     */
    removePropertyChangeHandler(handlerId: number): void
    /**
     * Removes a relationship of the specified type with the specified target.
     */
    removeRelationship(relationship: RelationType, target: Object): boolean
    /**
     * Sets the accessible ID of the accessible.  This is not meant to be presented
     * to the user, but to be an ID which is stable over application development.
     * Typically, this is the gtkbuilder ID. Such an ID will be available for
     * instance to identify a given well-known accessible object for tailored screen
     * reading, or for automatic regression testing.
     */
    setAccessibleId(name: string): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     */
    setDescription(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     */
    setName(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     */
    setParent(parent: Object): void
    /**
     * Sets the role of the accessible.
     */
    setRole(role: Role): void
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Methods of Atk-1.0.Atk.Component */
    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     */
    contains(x: number, y: number, coordType: CoordType): boolean
    /**
     * Returns the alpha value (i.e. the opacity) for this
     * `component,` on a scale from 0 (fully transparent) to 1.0
     * (fully opaque).
     */
    getAlpha(): number
    /**
     * Gets the rectangle which gives the extent of the `component`.
     * 
     * If the extent can not be obtained (e.g. a non-embedded plug or missing
     * support), all of x, y, width, height are set to -1.
     */
    getExtents(coordType: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     */
    getPosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Grabs focus for this `component`.
     */
    grabFocus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     */
    refAccessibleAtPoint(x: number, y: number, coordType: CoordType): Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     */
    removeFocusHandler(handlerId: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     */
    scrollTo(type: ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     */
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     */
    setExtents(x: number, y: number, width: number, height: number, coordType: CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     */
    setPosition(x: number, y: number, coordType: CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     */
    setSize(width: number, height: number): boolean
    /* Signals of Atk-1.0.Atk.Object */
    /**
     * The "active-descendant-changed" signal is emitted by an object
     * which has the state ATK_STATE_MANAGES_DESCENDANTS when the focus
     * object in the object changes. For instance, a table will emit the
     * signal when the cell in the table which has focus changes.
     */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Object): void
    /**
     * The signal "children-changed" is emitted when a child is added or
     * removed form an object. It supports two details: "add" and
     * "remove"
     */
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    /**
     * The signal "focus-event" is emitted when an object gained or lost
     * focus.
     */
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    /**
     * The signal "property-change" is emitted when an object's property
     * value changes. `arg1` contains an #AtkPropertyValues with the name
     * and the new value of the property whose value has changed. Note
     * that, as with GObject notify, getting this signal does not
     * guarantee that the value of the property has actually changed; it
     * may also be emitted when the setter of the property is called to
     * reinstate the previous value.
     * 
     * Toolkit implementor note: ATK implementors should use
     * g_object_notify() to emit property-changed
     * notifications. #AtkObject::property-changed is needed by the
     * implementation of atk_add_global_event_listener() because GObject
     * notify doesn't support emission hooks.
     */
    connect(sigName: "property-change", callback: ((arg1: PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: PropertyValues): void
    /**
     * The "state-change" signal is emitted when an object's state
     * changes.  The detail value identifies the state type which has
     * changed.
     */
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    /**
     * The "visible-data-changed" signal is emitted when the visual
     * appearance of the object changed.
     */
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    /**
     * The 'bounds-changed" signal is emitted when the bposition or
     * size of the component changes.
     */
    connect(sigName: "bounds-changed", callback: ((arg1: Rectangle) => void)): number
    on(sigName: "bounds-changed", callback: (arg1: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (arg1: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (arg1: Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Socket_ConstructProps)
    _init (config?: Socket_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Socket
    static $gtype: GObject.Type
}
interface StateSet_ConstructProps extends GObject.Object_ConstructProps {
}
class StateSet {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.StateSet */
    /**
     * Adds the state of the specified type to the state set if it is not already
     * present.
     * 
     * Note that because an #AtkStateSet is a read-only object, this method should
     * be used to add a state to a newly-created set which will then be returned by
     * #atk_object_ref_state_set. It should not be used to modify the existing state
     * of an object. See also #atk_object_notify_state_change.
     */
    addState(type: StateType): boolean
    /**
     * Adds the states of the specified types to the state set.
     * 
     * Note that because an #AtkStateSet is a read-only object, this method should
     * be used to add states to a newly-created set which will then be returned by
     * #atk_object_ref_state_set. It should not be used to modify the existing state
     * of an object. See also #atk_object_notify_state_change.
     */
    addStates(types: StateType[]): void
    /**
     * Constructs the intersection of the two sets, returning %NULL if the
     * intersection is empty.
     */
    andSets(compareSet: StateSet): StateSet
    /**
     * Removes all states from the state set.
     */
    clearStates(): void
    /**
     * Checks whether the state for the specified type is in the specified set.
     */
    containsState(type: StateType): boolean
    /**
     * Checks whether the states for all the specified types are in the
     * specified set.
     */
    containsStates(types: StateType[]): boolean
    /**
     * Checks whether the state set is empty, i.e. has no states set.
     */
    isEmpty(): boolean
    /**
     * Constructs the union of the two sets.
     */
    orSets(compareSet: StateSet): StateSet | null
    /**
     * Removes the state for the specified type from the state set.
     * 
     * Note that because an #AtkStateSet is a read-only object, this method should
     * be used to remove a state to a newly-created set which will then be returned
     * by #atk_object_ref_state_set. It should not be used to modify the existing
     * state of an object. See also #atk_object_notify_state_change.
     */
    removeState(type: StateType): boolean
    /**
     * Constructs the exclusive-or of the two sets, returning %NULL is empty.
     * The set returned by this operation contains the states in exactly
     * one of the two sets.
     */
    xorSets(compareSet: StateSet): StateSet
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StateSet_ConstructProps)
    _init (config?: StateSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StateSet
    static $gtype: GObject.Type
}
interface Util_ConstructProps extends GObject.Object_ConstructProps {
}
class Util {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Util_ConstructProps)
    _init (config?: Util_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ActionIface {
    /* Fields of Atk-1.0.Atk.ActionIface */
    readonly doAction: (action: Action, i: number) => boolean
    readonly getNActions: (action: Action) => number
    readonly getDescription: (action: Action, i: number) => string | null
    readonly getName: (action: Action, i: number) => string | null
    readonly getKeybinding: (action: Action, i: number) => string | null
    readonly setDescription: (action: Action, i: number, desc: string) => boolean
    readonly getLocalizedName: (action: Action, i: number) => string | null
    static name: string
}
class Attribute {
    /* Fields of Atk-1.0.Atk.Attribute */
    /**
     * The attribute name.
     */
    readonly name: string
    /**
     * the value of the attribute, represented as a string.
     */
    readonly value: string
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory used by an #AtkAttributeSet, including all its
     * #AtkAttributes.
     */
    static setFree(attribSet: AttributeSet): void
}
abstract class ComponentIface {
    /* Fields of Atk-1.0.Atk.ComponentIface */
    readonly contains: (component: Component, x: number, y: number, coordType: CoordType) => boolean
    readonly refAccessibleAtPoint: (component: Component, x: number, y: number, coordType: CoordType) => Object | null
    readonly getExtents: (component: Component, coordType: CoordType) => [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    readonly getPosition: (component: Component, coordType: CoordType) => [ /* x */ number | null, /* y */ number | null ]
    readonly getSize: (component: Component) => [ /* width */ number | null, /* height */ number | null ]
    readonly grabFocus: (component: Component) => boolean
    readonly removeFocusHandler: (component: Component, handlerId: number) => void
    readonly setExtents: (component: Component, x: number, y: number, width: number, height: number, coordType: CoordType) => boolean
    readonly setPosition: (component: Component, x: number, y: number, coordType: CoordType) => boolean
    readonly setSize: (component: Component, width: number, height: number) => boolean
    readonly getLayer: (component: Component) => Layer
    readonly getMdiZorder: (component: Component) => number
    readonly boundsChanged: (component: Component, bounds: Rectangle) => void
    readonly getAlpha: (component: Component) => number
    readonly scrollTo: (component: Component, type: ScrollType) => boolean
    readonly scrollToPoint: (component: Component, coords: CoordType, x: number, y: number) => boolean
    static name: string
}
abstract class DocumentIface {
    /* Fields of Atk-1.0.Atk.DocumentIface */
    readonly parent: GObject.TypeInterface
    readonly getDocumentType: (document: Document) => string
    readonly getDocument: (document: Document) => object | null
    readonly getDocumentLocale: (document: Document) => string
    readonly getDocumentAttributes: (document: Document) => AttributeSet
    readonly getDocumentAttributeValue: (document: Document, attributeName: string) => string | null
    readonly setDocumentAttribute: (document: Document, attributeName: string, attributeValue: string) => boolean
    readonly getCurrentPageNumber: (document: Document) => number
    readonly getPageCount: (document: Document) => number
    static name: string
}
abstract class EditableTextIface {
    /* Fields of Atk-1.0.Atk.EditableTextIface */
    readonly parentInterface: GObject.TypeInterface
    readonly setRunAttributes: (text: EditableText, attribSet: AttributeSet, startOffset: number, endOffset: number) => boolean
    readonly setTextContents: (text: EditableText, string: string) => void
    readonly insertText: (text: EditableText, string: string, length: number, position: number) => void
    readonly copyText: (text: EditableText, startPos: number, endPos: number) => void
    readonly cutText: (text: EditableText, startPos: number, endPos: number) => void
    readonly deleteText: (text: EditableText, startPos: number, endPos: number) => void
    readonly pasteText: (text: EditableText, position: number) => void
    static name: string
}
abstract class GObjectAccessibleClass {
    /* Fields of Atk-1.0.Atk.GObjectAccessibleClass */
    readonly parentClass: ObjectClass
    readonly pad1: Function
    readonly pad2: Function
    static name: string
}
abstract class HyperlinkClass {
    /* Fields of Atk-1.0.Atk.HyperlinkClass */
    readonly parent: GObject.ObjectClass
    readonly getUri: (link: Hyperlink, i: number) => string
    readonly getObject: (link: Hyperlink, i: number) => Object
    readonly getEndIndex: (link: Hyperlink) => number
    readonly getStartIndex: (link: Hyperlink) => number
    readonly isValid: (link: Hyperlink) => boolean
    readonly getNAnchors: (link: Hyperlink) => number
    readonly linkState: (link: Hyperlink) => number
    readonly isSelectedLink: (link: Hyperlink) => boolean
    readonly linkActivated: (link: Hyperlink) => void
    readonly pad1: Function
    static name: string
}
abstract class HyperlinkImplIface {
    /* Fields of Atk-1.0.Atk.HyperlinkImplIface */
    readonly parent: GObject.TypeInterface
    readonly getHyperlink: (impl: HyperlinkImpl) => Hyperlink
    static name: string
}
abstract class HypertextIface {
    /* Fields of Atk-1.0.Atk.HypertextIface */
    readonly parent: GObject.TypeInterface
    readonly getLink: (hypertext: Hypertext, linkIndex: number) => Hyperlink
    readonly getNLinks: (hypertext: Hypertext) => number
    readonly getLinkIndex: (hypertext: Hypertext, charIndex: number) => number
    readonly linkSelected: (hypertext: Hypertext, linkIndex: number) => void
    static name: string
}
abstract class ImageIface {
    /* Fields of Atk-1.0.Atk.ImageIface */
    readonly parent: GObject.TypeInterface
    readonly getImagePosition: (image: Image, coordType: CoordType) => [ /* x */ number | null, /* y */ number | null ]
    readonly getImageDescription: (image: Image) => string
    readonly getImageSize: (image: Image) => [ /* width */ number | null, /* height */ number | null ]
    readonly setImageDescription: (image: Image, description: string) => boolean
    readonly getImageLocale: (image: Image) => string | null
    static name: string
}
class Implementor {
    /* Methods of Atk-1.0.Atk.Implementor */
    /**
     * Gets a reference to an object's #AtkObject implementation, if
     * the object implements #AtkObjectIface
     */
    refAccessible(): Object
    static name: string
}
class KeyEventStruct {
    /* Fields of Atk-1.0.Atk.KeyEventStruct */
    /**
     * An AtkKeyEventType, generally one of ATK_KEY_EVENT_PRESS or ATK_KEY_EVENT_RELEASE
     */
    readonly type: number
    /**
     * A bitmask representing the state of the modifier keys immediately after the event takes place.
     * The meaning of the bits is currently defined to match the bitmask used by GDK in
     * GdkEventType.state, see
     * http://developer.gnome.org/doc/API/2.0/gdk/gdk-Event-Structures.html#GdkEventKey
     */
    readonly state: number
    /**
     * A guint representing a keysym value corresponding to those used by GDK and X11: see
     * /usr/X11/include/keysymdef.h.
     */
    readonly keyval: number
    /**
     * The length of member #string.
     */
    readonly length: number
    /**
     * A string containing one of the following: either a string approximating the text that would
     * result from this keypress, if the key is a control or graphic character, or a symbolic name for this keypress.
     * Alphanumeric and printable keys will have the symbolic key name in this string member, for instance "A". "0",
     * "semicolon", "aacute".  Keypad keys have the prefix "KP".
     */
    readonly string: string
    /**
     * The raw hardware code that generated the key event.  This field is raraly useful.
     */
    readonly keycode: number
    /**
     * A timestamp in milliseconds indicating when the event occurred.
     * These timestamps are relative to a starting point which should be considered arbitrary,
     * and only used to compare the dispatch times of events to one another.
     */
    readonly timestamp: number
    static name: string
}
abstract class MiscClass {
    /* Fields of Atk-1.0.Atk.MiscClass */
    readonly parent: GObject.ObjectClass
    readonly threadsEnter: (misc: Misc) => void
    readonly threadsLeave: (misc: Misc) => void
    readonly vfuncs: object[]
    static name: string
}
abstract class NoOpObjectClass {
    /* Fields of Atk-1.0.Atk.NoOpObjectClass */
    readonly parentClass: ObjectClass
    static name: string
}
abstract class NoOpObjectFactoryClass {
    /* Fields of Atk-1.0.Atk.NoOpObjectFactoryClass */
    readonly parentClass: ObjectFactoryClass
    static name: string
}
abstract class ObjectClass {
    /* Fields of Atk-1.0.Atk.ObjectClass */
    readonly parent: GObject.ObjectClass
    readonly getName: (accessible: Object) => string
    readonly getDescription: (accessible: Object) => string
    readonly getParent: (accessible: Object) => Object
    readonly getNChildren: (accessible: Object) => number
    readonly getIndexInParent: (accessible: Object) => number
    readonly refRelationSet: (accessible: Object) => RelationSet
    readonly getRole: (accessible: Object) => Role
    readonly getLayer: (accessible: Object) => Layer
    readonly getMdiZorder: (accessible: Object) => number
    readonly refStateSet: (accessible: Object) => StateSet
    readonly setName: (accessible: Object, name: string) => void
    readonly setDescription: (accessible: Object, description: string) => void
    readonly setParent: (accessible: Object, parent: Object) => void
    readonly setRole: (accessible: Object, role: Role) => void
    readonly removePropertyChangeHandler: (accessible: Object, handlerId: number) => void
    readonly initialize: (accessible: Object, data?: object | null) => void
    readonly childrenChanged: (accessible: Object, changeIndex: number, changedChild?: object | null) => void
    readonly focusEvent: (accessible: Object, focusIn: boolean) => void
    readonly propertyChange: (accessible: Object, values: PropertyValues) => void
    readonly stateChange: (accessible: Object, name: string, stateSet: boolean) => void
    readonly visibleDataChanged: (accessible: Object) => void
    readonly activeDescendantChanged: (accessible: Object, child?: object | null) => void
    readonly getAttributes: (accessible: Object) => AttributeSet
    readonly getObjectLocale: (accessible: Object) => string
    readonly pad1: Function
    static name: string
}
abstract class ObjectFactoryClass {
    /* Fields of Atk-1.0.Atk.ObjectFactoryClass */
    readonly parentClass: GObject.ObjectClass
    readonly invalidate: (factory: ObjectFactory) => void
    readonly getAccessibleType: () => GObject.Type
    readonly pad1: Function
    readonly pad2: Function
    static name: string
}
abstract class PlugClass {
    /* Fields of Atk-1.0.Atk.PlugClass */
    readonly parentClass: ObjectClass
    readonly getObjectId: (obj: Plug) => string
    static name: string
}
class PropertyValues {
    /* Fields of Atk-1.0.Atk.PropertyValues */
    /**
     * The name of the ATK property which has changed.
     */
    readonly propertyName: string
    /**
     * NULL. This field is not used anymore.
     */
    readonly oldValue: any
    /**
     * The new value of the named property.
     */
    readonly newValue: any
    static name: string
}
class Range {
    /* Methods of Atk-1.0.Atk.Range */
    /**
     * Returns a new #AtkRange that is a exact copy of `src`
     */
    copy(): Range
    /**
     * Free `range`
     */
    free(): void
    /**
     * Returns the human readable description of `range`
     */
    getDescription(): string
    /**
     * Returns the lower limit of `range`
     */
    getLowerLimit(): number
    /**
     * Returns the upper limit of `range`
     */
    getUpperLimit(): number
    static name: string
    static new(lowerLimit: number, upperLimit: number, description: string): Range
    constructor(lowerLimit: number, upperLimit: number, description: string)
    /* Static methods and pseudo-constructors */
    static new(lowerLimit: number, upperLimit: number, description: string): Range
}
class Rectangle {
    /* Fields of Atk-1.0.Atk.Rectangle */
    /**
     * X coordinate of the left side of the rectangle.
     */
    readonly x: number
    /**
     * Y coordinate of the top side of the rectangle.
     */
    readonly y: number
    /**
     * width of the rectangle.
     */
    readonly width: number
    /**
     * height of the rectangle.
     */
    readonly height: number
    static name: string
}
abstract class RegistryClass {
    /* Fields of Atk-1.0.Atk.RegistryClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class RelationClass {
    /* Fields of Atk-1.0.Atk.RelationClass */
    readonly parent: GObject.ObjectClass
    static name: string
}
abstract class RelationSetClass {
    /* Fields of Atk-1.0.Atk.RelationSetClass */
    readonly parent: GObject.ObjectClass
    readonly pad1: Function
    readonly pad2: Function
    static name: string
}
abstract class SelectionIface {
    /* Fields of Atk-1.0.Atk.SelectionIface */
    readonly parent: GObject.TypeInterface
    readonly addSelection: (selection: Selection, i: number) => boolean
    readonly clearSelection: (selection: Selection) => boolean
    readonly refSelection: (selection: Selection, i: number) => Object | null
    readonly getSelectionCount: (selection: Selection) => number
    readonly isChildSelected: (selection: Selection, i: number) => boolean
    readonly removeSelection: (selection: Selection, i: number) => boolean
    readonly selectAllSelection: (selection: Selection) => boolean
    readonly selectionChanged: (selection: Selection) => void
    static name: string
}
abstract class SocketClass {
    /* Fields of Atk-1.0.Atk.SocketClass */
    readonly parentClass: ObjectClass
    readonly embed: (obj: Socket, plugId: string) => void
    static name: string
}
abstract class StateSetClass {
    /* Fields of Atk-1.0.Atk.StateSetClass */
    readonly parent: GObject.ObjectClass
    static name: string
}
abstract class StreamableContentIface {
    /* Fields of Atk-1.0.Atk.StreamableContentIface */
    readonly parent: GObject.TypeInterface
    readonly getNMimeTypes: (streamable: StreamableContent) => number
    readonly getMimeType: (streamable: StreamableContent, i: number) => string
    readonly getStream: (streamable: StreamableContent, mimeType: string) => GLib.IOChannel
    readonly getUri: (streamable: StreamableContent, mimeType: string) => string | null
    readonly pad1: Function
    readonly pad2: Function
    readonly pad3: Function
    static name: string
}
abstract class TableCellIface {
    /* Fields of Atk-1.0.Atk.TableCellIface */
    readonly getColumnSpan: (cell: TableCell) => number
    readonly getColumnHeaderCells: (cell: TableCell) => Object[]
    readonly getPosition: (cell: TableCell) => [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    readonly getRowSpan: (cell: TableCell) => number
    readonly getRowHeaderCells: (cell: TableCell) => Object[]
    readonly getRowColumnSpan: (cell: TableCell) => [ /* returnType */ boolean, /* row */ number, /* column */ number, /* rowSpan */ number, /* columnSpan */ number ]
    readonly getTable: (cell: TableCell) => Object
    static name: string
}
abstract class TableIface {
    /* Fields of Atk-1.0.Atk.TableIface */
    readonly parent: GObject.TypeInterface
    readonly refAt: (table: Table, row: number, column: number) => Object
    readonly getIndexAt: (table: Table, row: number, column: number) => number
    readonly getColumnAtIndex: (table: Table, index: number) => number
    readonly getRowAtIndex: (table: Table, index: number) => number
    readonly getNColumns: (table: Table) => number
    readonly getNRows: (table: Table) => number
    readonly getColumnExtentAt: (table: Table, row: number, column: number) => number
    readonly getRowExtentAt: (table: Table, row: number, column: number) => number
    readonly getCaption: (table: Table) => Object | null
    readonly getColumnDescription: (table: Table, column: number) => string
    readonly getColumnHeader: (table: Table, column: number) => Object | null
    readonly getRowDescription: (table: Table, row: number) => string | null
    readonly getRowHeader: (table: Table, row: number) => Object | null
    readonly getSummary: (table: Table) => Object
    readonly setCaption: (table: Table, caption: Object) => void
    readonly setColumnDescription: (table: Table, column: number, description: string) => void
    readonly setColumnHeader: (table: Table, column: number, header: Object) => void
    readonly setRowDescription: (table: Table, row: number, description: string) => void
    readonly setRowHeader: (table: Table, row: number, header: Object) => void
    readonly setSummary: (table: Table, accessible: Object) => void
    readonly getSelectedColumns: (table: Table, selected: number) => number
    readonly getSelectedRows: (table: Table, selected: number) => number
    readonly isColumnSelected: (table: Table, column: number) => boolean
    readonly isRowSelected: (table: Table, row: number) => boolean
    readonly isSelected: (table: Table, row: number, column: number) => boolean
    readonly addRowSelection: (table: Table, row: number) => boolean
    readonly removeRowSelection: (table: Table, row: number) => boolean
    readonly addColumnSelection: (table: Table, column: number) => boolean
    readonly removeColumnSelection: (table: Table, column: number) => boolean
    readonly rowInserted: (table: Table, row: number, numInserted: number) => void
    readonly columnInserted: (table: Table, column: number, numInserted: number) => void
    readonly rowDeleted: (table: Table, row: number, numDeleted: number) => void
    readonly columnDeleted: (table: Table, column: number, numDeleted: number) => void
    readonly rowReordered: (table: Table) => void
    readonly columnReordered: (table: Table) => void
    readonly modelChanged: (table: Table) => void
    static name: string
}
abstract class TextIface {
    /* Fields of Atk-1.0.Atk.TextIface */
    readonly parent: GObject.TypeInterface
    readonly getText: (text: Text, startOffset: number, endOffset: number) => string
    readonly getTextAfterOffset: (text: Text, offset: number, boundaryType: TextBoundary) => [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    readonly getTextAtOffset: (text: Text, offset: number, boundaryType: TextBoundary) => [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    readonly getCharacterAtOffset: (text: Text, offset: number) => number
    readonly getTextBeforeOffset: (text: Text, offset: number, boundaryType: TextBoundary) => [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    readonly getCaretOffset: (text: Text) => number
    readonly getRunAttributes: (text: Text, offset: number) => [ /* returnType */ AttributeSet, /* startOffset */ number, /* endOffset */ number ]
    readonly getDefaultAttributes: (text: Text) => AttributeSet
    readonly getCharacterExtents: (text: Text, offset: number, coords: CoordType) => [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    readonly getCharacterCount: (text: Text) => number
    readonly getOffsetAtPoint: (text: Text, x: number, y: number, coords: CoordType) => number
    readonly getNSelections: (text: Text) => number
    readonly getSelection: (text: Text, selectionNum: number) => [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    readonly addSelection: (text: Text, startOffset: number, endOffset: number) => boolean
    readonly removeSelection: (text: Text, selectionNum: number) => boolean
    readonly setSelection: (text: Text, selectionNum: number, startOffset: number, endOffset: number) => boolean
    readonly setCaretOffset: (text: Text, offset: number) => boolean
    readonly textChanged: (text: Text, position: number, length: number) => void
    readonly textCaretMoved: (text: Text, location: number) => void
    readonly textSelectionChanged: (text: Text) => void
    readonly textAttributesChanged: (text: Text) => void
    readonly getRangeExtents: (text: Text, startOffset: number, endOffset: number, coordType: CoordType) => /* rect */ TextRectangle
    readonly getBoundedRanges: (text: Text, rect: TextRectangle, coordType: CoordType, xClipType: TextClipType, yClipType: TextClipType) => TextRange[]
    readonly getStringAtOffset: (text: Text, offset: number, granularity: TextGranularity) => [ /* returnType */ string | null, /* startOffset */ number, /* endOffset */ number ]
    readonly scrollSubstringTo: (text: Text, startOffset: number, endOffset: number, type: ScrollType) => boolean
    readonly scrollSubstringToPoint: (text: Text, startOffset: number, endOffset: number, coords: CoordType, x: number, y: number) => boolean
    static name: string
}
class TextRange {
    /* Fields of Atk-1.0.Atk.TextRange */
    /**
     * A rectangle giving the bounds of the text range
     */
    readonly bounds: TextRectangle
    /**
     * The start offset of a AtkTextRange
     */
    readonly startOffset: number
    /**
     * The end offset of a AtkTextRange
     */
    readonly endOffset: number
    /**
     * The text in the text range
     */
    readonly content: string
    static name: string
}
class TextRectangle {
    /* Fields of Atk-1.0.Atk.TextRectangle */
    /**
     * The horizontal coordinate of a rectangle
     */
    readonly x: number
    /**
     * The vertical coordinate of a rectangle
     */
    readonly y: number
    /**
     * The width of a rectangle
     */
    readonly width: number
    /**
     * The height of a rectangle
     */
    readonly height: number
    static name: string
}
abstract class UtilClass {
    /* Fields of Atk-1.0.Atk.UtilClass */
    readonly parent: GObject.ObjectClass
    readonly removeGlobalEventListener: (listenerId: number) => void
    readonly removeKeyEventListener: (listenerId: number) => void
    readonly getToolkitName: () => string
    readonly getToolkitVersion: () => string
    static name: string
}
abstract class ValueIface {
    /* Fields of Atk-1.0.Atk.ValueIface */
    readonly parent: GObject.TypeInterface
    readonly getCurrentValue: (obj: Value) => /* value */ any
    readonly getMaximumValue: (obj: Value) => /* value */ any
    readonly getMinimumValue: (obj: Value) => /* value */ any
    readonly setCurrentValue: (obj: Value, value: any) => boolean
    readonly getMinimumIncrement: (obj: Value) => /* value */ any
    readonly getValueAndText: (obj: Value) => [ /* value */ number, /* text */ string | null ]
    readonly getRange: (obj: Value) => Range | null
    readonly getIncrement: (obj: Value) => number
    readonly getSubRanges: (obj: Value) => Range[]
    readonly setValue: (obj: Value, newValue: number) => void
    static name: string
}
abstract class WindowIface {
    /* Fields of Atk-1.0.Atk.WindowIface */
    readonly parent: GObject.TypeInterface
    static name: string
}
    type AttributeSet = any[]
    type State = number
}
export default Atk;