// @ts-nocheck

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
 * @bitfield 
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
/**
 * Frees the memory used by an #AtkAttributeSet, including all its
 * #AtkAttributes.
 * @param attribSet The #AtkAttributeSet to free
 */
function attributeSetFree(attribSet: AttributeSet): void
/**
 * Cause the focus tracker functions which have been specified to be
 * executed for the object.
 * @param object an #AtkObject
 */
function focusTrackerNotify(object: Object): void
/**
 * Returns the binary age as passed to libtool when building the ATK
 * library the process is running against.
 */
function getBinaryAge(): number
/**
 * Gets a default implementation of the #AtkObjectFactory/type
 * registry.
 * Note: For most toolkit maintainers, this will be the correct
 * registry for registering new #AtkObject factories. Following
 * a call to this function, maintainers may call atk_registry_set_factory_type()
 * to associate an #AtkObjectFactory subclass with the GType of objects
 * for whom accessibility information will be provided.
 */
function getDefaultRegistry(): Registry
/**
 * Gets the currently focused object.
 */
function getFocusObject(): Object
/**
 * Returns the interface age as passed to libtool when building the
 * ATK library the process is running against.
 */
function getInterfaceAge(): number
/**
 * Returns the major version number of the ATK library.  (e.g. in ATK
 * version 2.7.4 this is 2.)
 * 
 * This function is in the library, so it represents the ATK library
 * your code is running against. In contrast, the #ATK_MAJOR_VERSION
 * macro represents the major version of the ATK headers you have
 * included when compiling your code.
 */
function getMajorVersion(): number
/**
 * Returns the micro version number of the ATK library.  (e.g. in ATK
 * version 2.7.4 this is 4.)
 * 
 * This function is in the library, so it represents the ATK library
 * your code is are running against. In contrast, the
 * #ATK_MICRO_VERSION macro represents the micro version of the ATK
 * headers you have included when compiling your code.
 */
function getMicroVersion(): number
/**
 * Returns the minor version number of the ATK library.  (e.g. in ATK
 * version 2.7.4 this is 7.)
 * 
 * This function is in the library, so it represents the ATK library
 * your code is are running against. In contrast, the
 * #ATK_MINOR_VERSION macro represents the minor version of the ATK
 * headers you have included when compiling your code.
 */
function getMinorVersion(): number
/**
 * Gets the root accessible container for the current application.
 */
function getRoot(): Object
/**
 * Gets name string for the GUI toolkit implementing ATK for this application.
 */
function getToolkitName(): string
/**
 * Gets version string for the GUI toolkit implementing ATK for this application.
 */
function getToolkitVersion(): string
/**
 * Gets the current version for ATK.
 */
function getVersion(): string
/**
 * Get the #AtkRelationType type corresponding to a relation name.
 * @param name a string which is the (non-localized) name of an ATK relation type.
 */
function relationTypeForName(name: string): RelationType
/**
 * Gets the description string describing the #AtkRelationType `type`.
 * @param type The #AtkRelationType whose name is required
 */
function relationTypeGetName(type: RelationType): string
/**
 * Associate `name` with a new #AtkRelationType
 * @param name a name string
 */
function relationTypeRegister(name: string): RelationType
/**
 * Removes the specified focus tracker from the list of functions
 * to be called when any object receives focus.
 * @param trackerId the id of the focus tracker to remove
 */
function removeFocusTracker(trackerId: number): void
/**
 * `listener_id` is the value returned by #atk_add_global_event_listener
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
 * @param listenerId the id of the event listener to remove
 */
function removeGlobalEventListener(listenerId: number): void
/**
 * `listener_id` is the value returned by #atk_add_key_event_listener
 * when you registered that event listener.
 * 
 * Removes the specified event listener.
 * @param listenerId the id of the event listener to remove
 */
function removeKeyEventListener(listenerId: number): void
/**
 * Get the #AtkRole type corresponding to a rolew name.
 * @param name a string which is the (non-localized) name of an ATK role.
 */
function roleForName(name: string): Role
/**
 * Gets the localized description string describing the #AtkRole `role`.
 * @param role The #AtkRole whose localized name is required
 */
function roleGetLocalizedName(role: Role): string
/**
 * Gets the description string describing the #AtkRole `role`.
 * @param role The #AtkRole whose name is required
 */
function roleGetName(role: Role): string
/**
 * Registers the role specified by `name`. `name` must be a meaningful
 * name. So it should not be empty, or consisting on whitespaces.
 * @param name a character string describing the new role.
 */
function roleRegister(name: string): Role
/**
 * Gets the #AtkStateType corresponding to the description string `name`.
 * @param name a character string state name
 */
function stateTypeForName(name: string): StateType
/**
 * Gets the description string describing the #AtkStateType `type`.
 * @param type The #AtkStateType whose name is required
 */
function stateTypeGetName(type: StateType): string
/**
 * Register a new object state.
 * @param name a character string describing the new state.
 */
function stateTypeRegister(name: string): StateType
/**
 * Get the #AtkTextAttribute type corresponding to a text attribute name.
 * @param name a string which is the (non-localized) name of an ATK text attribute.
 */
function textAttributeForName(name: string): TextAttribute
/**
 * Gets the name corresponding to the #AtkTextAttribute
 * @param attr The #AtkTextAttribute whose name is required
 */
function textAttributeGetName(attr: TextAttribute): string
/**
 * Gets the value for the index of the #AtkTextAttribute
 * @param attr The #AtkTextAttribute for which a value is required
 * @param index The index of the required value
 */
function textAttributeGetValue(attr: TextAttribute, index: number): string | null
/**
 * Associate `name` with a new #AtkTextAttribute
 * @param name a name string
 */
function textAttributeRegister(name: string): TextAttribute
/**
 * Frees the memory associated with an array of AtkTextRange. It is assumed
 * that the array was returned by the function atk_text_get_bounded_ranges
 * and is NULL terminated.
 * @param ranges A pointer to an array of #AtkTextRange which is   to be freed.
 */
function textFreeRanges(ranges: TextRange[]): void
/**
 * Gets the localized description string describing the #AtkValueType `value_type`.
 * @param valueType The #AtkValueType whose localized name is required
 */
function valueTypeGetLocalizedName(valueType: ValueType): string
/**
 * Gets the description string describing the #AtkValueType `value_type`.
 * @param valueType The #AtkValueType whose name is required
 */
function valueTypeGetName(valueType: ValueType): string
/**
 * A function which is called when an object emits a matching event,
 * as used in #atk_add_focus_tracker.
 * Currently the only events for which object-specific handlers are
 * supported are events of type "focus:".  Most clients of ATK will prefer to
 * attach signal handlers for the various ATK signals instead.
 * 
 * see atk_add_focus_tracker.
 * @callback 
 * @param obj An #AtkObject instance for whom the callback will be called when the specified event (e.g. 'focus:') takes place.
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
 * @callback 
 */
interface EventListenerInit {
    (): void
}
/**
 * The type of callback function used for
 * atk_component_add_focus_handler() and
 * atk_component_remove_focus_handler()
 * @callback 
 * @param object the #AtkObject that receives/lose the focus
 * @param focusIn TRUE if the object receives the focus
 */
interface FocusHandler {
    (object: Object, focusIn: boolean): void
}
/**
 * An AtkFunction is a function definition used for padding which has
 * been added to class and interface structures to allow for expansion
 * in the future.
 * @callback 
 */
interface Function {
    (): boolean
}
/**
 * An #AtkKeySnoopFunc is a type of callback which is called whenever a key event occurs,
 * if registered via atk_add_key_event_listener.  It allows for pre-emptive
 * interception of key events via the return code as described below.
 * @callback 
 * @param event an AtkKeyEventStruct containing information about the key event for which notification is being given.
 */
interface KeySnoopFunc {
    (event: KeyEventStruct): number
}
/**
 * An AtkPropertyChangeHandler is a function which is executed when an
 * AtkObject's property changes value. It is specified in a call to
 * atk_object_connect_property_change_handler().
 * @callback 
 * @param obj atkobject which property changes
 * @param vals values changed
 */
interface PropertyChangeHandler {
    (obj: Object, vals: PropertyValues): void
}
interface Action_ConstructProps extends GObject.Object_ConstructProps {
}

interface Action {

    // Owm methods of Atk-1.0.Atk.Action

    /**
     * Perform the specified action on the object.
     * @param i the action index corresponding to the action to be performed
     */
    doAction(i: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
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
     * @param i the action index corresponding to the action to be performed
     */
    getKeybinding(i: number): string | null
    /**
     * Returns the localized name of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
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
     * @param i the action index corresponding to the action to be performed
     */
    getName(i: number): string | null
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    setDescription(i: number, desc: string): boolean

    // Class property signals of Atk-1.0.Atk.Action

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #AtkAction should be implemented by instances of #AtkObject classes
 * with which the user can interact directly, i.e. buttons,
 * checkboxes, scrollbars, e.g. components which are not "passive"
 * providers of UI information.
 * 
 * Exceptions: when the user interaction is already covered by another
 * appropriate interface such as #AtkEditableText (insert/delete text,
 * etc.) or #AtkValue (set value) then these actions should not be
 * exposed by #AtkAction as well.
 * 
 * Though most UI interactions on components should be invocable via
 * keyboard as well as mouse, there will generally be a close mapping
 * between "mouse actions" that are possible on a component and the
 * AtkActions.  Where mouse and keyboard actions are redundant in
 * effect, #AtkAction should expose only one action rather than
 * exposing redundant actions if possible.  By convention we have been
 * using "mouse centric" terminology for #AtkAction names.
 * @interface 
 */
class Action extends GObject.Object {

    // Own properties of Atk-1.0.Atk.Action

    static name: string
    static $gtype: GObject.GType<Action>

    // Constructors of Atk-1.0.Atk.Action

    constructor(config?: Action_ConstructProps) 
    _init(config?: Action_ConstructProps): void
}

interface Component_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `bounds-changed`
 */
interface Component_BoundsChangedSignalCallback {
    (arg1: Rectangle): void
}

interface Component {

    // Owm methods of Atk-1.0.Atk.Component

    /**
     * Checks whether the specified point is within the extent of the `component`.
     * 
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. In general there are little reason to
     * re-implement it.
     * @param x x coordinate
     * @param y y coordinate
     * @param coordType specifies whether the coordinates are relative to the screen or to the components top level window
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
     * @param coordType specifies whether the coordinates are relative to the screen or to the components top level window
     */
    getExtents(coordType: CoordType): [ /* x */ number, /* y */ number, /* width */ number, /* height */ number ]
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
     * @param coordType specifies whether the coordinates are relative to the screen or to the components top level window
     */
    getPosition(coordType: CoordType): [ /* x */ number, /* y */ number ]
    /**
     * Gets the size of the `component` in terms of width and height.
     * 
     * If the size can not be obtained (e.g. a non-embedded plug or missing
     * support), width and height are set to -1.
     */
    getSize(): [ /* width */ number, /* height */ number ]
    /**
     * Grabs focus for this `component`.
     */
    grabFocus(): boolean
    /**
     * Gets a reference to the accessible child, if one exists, at the
     * coordinate point specified by `x` and `y`.
     * @param x x coordinate
     * @param y y coordinate
     * @param coordType specifies whether the coordinates are relative to the screen or to the components top level window
     */
    refAccessibleAtPoint(x: number, y: number, coordType: CoordType): Object | null
    /**
     * Remove the handler specified by `handler_id` from the list of
     * functions to be executed when this object receives focus events
     * (in or out).
     * @param handlerId the handler id of the focus handler to be removed from `component`
     */
    removeFocusHandler(handlerId: number): void
    /**
     * Makes `component` visible on the screen by scrolling all necessary parents.
     * 
     * Contrary to atk_component_set_position, this does not actually move
     * `component` in its parent, this only makes the parents scroll so that the
     * object shows up on the screen, given its current position within the parents.
     * @param type specify where the object should be made visible.
     */
    scrollTo(type: ScrollType): boolean
    /**
     * Move the top-left of `component` to a given position of the screen by
     * scrolling all necessary parents.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
     */
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    /**
     * Sets the extents of `component`.
     * @param x x coordinate
     * @param y y coordinate
     * @param width width to set for `component`
     * @param height height to set for `component`
     * @param coordType specifies whether the coordinates are relative to the screen or to the components top level window
     */
    setExtents(x: number, y: number, width: number, height: number, coordType: CoordType): boolean
    /**
     * Sets the position of `component`.
     * 
     * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
     * this just moves `component` in its parent.
     * @param x x coordinate
     * @param y y coordinate
     * @param coordType specifies whether the coordinates are relative to the screen or to the component's top level window
     */
    setPosition(x: number, y: number, coordType: CoordType): boolean
    /**
     * Set the size of the `component` in terms of width and height.
     * @param width width to set for `component`
     * @param height height to set for `component`
     */
    setSize(width: number, height: number): boolean

    // Own signals of Atk-1.0.Atk.Component

    connect(sigName: "bounds-changed", callback: Component_BoundsChangedSignalCallback): number
    on(sigName: "bounds-changed", callback: Component_BoundsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: Component_BoundsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: Component_BoundsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", ...args: any[]): void

    // Class property signals of Atk-1.0.Atk.Component

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #AtkComponent should be implemented by most if not all UI elements
 * with an actual on-screen presence, i.e. components which can be
 * said to have a screen-coordinate bounding box.  Virtually all
 * widgets will need to have #AtkComponent implementations provided
 * for their corresponding #AtkObject class.  In short, only UI
 * elements which are *not* GUI elements will omit this ATK interface.
 * 
 * A possible exception might be textual information with a
 * transparent background, in which case text glyph bounding box
 * information is provided by #AtkText.
 * @interface 
 */
class Component extends GObject.Object {

    // Own properties of Atk-1.0.Atk.Component

    static name: string
    static $gtype: GObject.GType<Component>

    // Constructors of Atk-1.0.Atk.Component

    constructor(config?: Component_ConstructProps) 
    _init(config?: Component_ConstructProps): void
}

interface Document_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `load-complete`
 */
interface Document_LoadCompleteSignalCallback {
    (): void
}

/**
 * Signal callback interface for `load-stopped`
 */
interface Document_LoadStoppedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `page-changed`
 */
interface Document_PageChangedSignalCallback {
    (pageNumber: number): void
}

/**
 * Signal callback interface for `reload`
 */
interface Document_ReloadSignalCallback {
    (): void
}

interface Document {

    // Owm methods of Atk-1.0.Atk.Document

    /**
     * Retrieves the value of the given `attribute_name` inside `document`.
     * @param attributeName a character string representing the name of the attribute   whose value is being queried.
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
     * @param attributeName a character string representing the name of the attribute   whose value is being set.
     * @param attributeValue a string value to be associated with `attribute_name`.
     */
    setAttributeValue(attributeName: string, attributeValue: string): boolean

    // Own signals of Atk-1.0.Atk.Document

    connect(sigName: "load-complete", callback: Document_LoadCompleteSignalCallback): number
    on(sigName: "load-complete", callback: Document_LoadCompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-complete", callback: Document_LoadCompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-complete", callback: Document_LoadCompleteSignalCallback): NodeJS.EventEmitter
    emit(sigName: "load-complete", ...args: any[]): void
    connect(sigName: "load-stopped", callback: Document_LoadStoppedSignalCallback): number
    on(sigName: "load-stopped", callback: Document_LoadStoppedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-stopped", callback: Document_LoadStoppedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-stopped", callback: Document_LoadStoppedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "load-stopped", ...args: any[]): void
    connect(sigName: "page-changed", callback: Document_PageChangedSignalCallback): number
    on(sigName: "page-changed", callback: Document_PageChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-changed", callback: Document_PageChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-changed", callback: Document_PageChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "page-changed", ...args: any[]): void
    connect(sigName: "reload", callback: Document_ReloadSignalCallback): number
    on(sigName: "reload", callback: Document_ReloadSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reload", callback: Document_ReloadSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reload", callback: Document_ReloadSignalCallback): NodeJS.EventEmitter
    emit(sigName: "reload", ...args: any[]): void

    // Class property signals of Atk-1.0.Atk.Document

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The AtkDocument interface should be supported by any object whose
 * content is a representation or view of a document.  The AtkDocument
 * interface should appear on the toplevel container for the document
 * content; however AtkDocument instances may be nested (i.e. an
 * AtkDocument may be a descendant of another AtkDocument) in those
 * cases where one document contains "embedded content" which can
 * reasonably be considered a document in its own right.
 * @interface 
 */
class Document extends GObject.Object {

    // Own properties of Atk-1.0.Atk.Document

    static name: string
    static $gtype: GObject.GType<Document>

    // Constructors of Atk-1.0.Atk.Document

    constructor(config?: Document_ConstructProps) 
    _init(config?: Document_ConstructProps): void
}

interface EditableText_ConstructProps extends GObject.Object_ConstructProps {
}

interface EditableText {

    // Owm methods of Atk-1.0.Atk.EditableText

    /**
     * Copy text from `start_pos` up to, but not including `end_pos`
     * to the clipboard.
     * @param startPos start position
     * @param endPos end position
     */
    copyText(startPos: number, endPos: number): void
    /**
     * Copy text from `start_pos` up to, but not including `end_pos`
     * to the clipboard and then delete from the widget.
     * @param startPos start position
     * @param endPos end position
     */
    cutText(startPos: number, endPos: number): void
    /**
     * Delete text `start_pos` up to, but not including `end_pos`.
     * @param startPos start position
     * @param endPos end position
     */
    deleteText(startPos: number, endPos: number): void
    /**
     * Insert text at a given position.
     * @param string the text to insert
     * @param length the length of text to insert, in bytes
     * @param position The caller initializes this to the position at which to insert the text. After the call it points at the position after the newly inserted text.
     */
    insertText(string: string, length: number, position: number): void
    /**
     * Paste text from clipboard to specified `position`.
     * @param position position to paste
     */
    pasteText(position: number): void
    /**
     * Sets the attributes for a specified range. See the ATK_ATTRIBUTE
     * macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes
     * that can be set. Note that other attributes that do not have corresponding
     * ATK_ATTRIBUTE macros may also be set for certain text widgets.
     * @param attribSet an #AtkAttributeSet
     * @param startOffset start of range in which to set attributes
     * @param endOffset end of range in which to set attributes
     */
    setRunAttributes(attribSet: AttributeSet, startOffset: number, endOffset: number): boolean
    /**
     * Set text contents of `text`.
     * @param string string to set for text contents of `text`
     */
    setTextContents(string: string): void

    // Class property signals of Atk-1.0.Atk.EditableText

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #AtkEditableText should be implemented by UI components which
 * contain text which the user can edit, via the #AtkObject
 * corresponding to that component (see #AtkObject).
 * 
 * #AtkEditableText is a subclass of #AtkText, and as such, an object
 * which implements #AtkEditableText is by definition an #AtkText
 * implementor as well.
 * 
 * See also: #AtkText
 * @interface 
 */
class EditableText extends GObject.Object {

    // Own properties of Atk-1.0.Atk.EditableText

    static name: string
    static $gtype: GObject.GType<EditableText>

    // Constructors of Atk-1.0.Atk.EditableText

    constructor(config?: EditableText_ConstructProps) 
    _init(config?: EditableText_ConstructProps): void
}

interface HyperlinkImpl_ConstructProps extends GObject.Object_ConstructProps {
}

interface HyperlinkImpl {

    // Owm methods of Atk-1.0.Atk.HyperlinkImpl

    /**
     * Gets the hyperlink associated with this object.
     */
    getHyperlink(): Hyperlink

    // Class property signals of Atk-1.0.Atk.HyperlinkImpl

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * AtkHyperlinkImpl allows AtkObjects to refer to their associated
 * AtkHyperlink instance, if one exists.  AtkHyperlinkImpl differs
 * from AtkHyperlink in that AtkHyperlinkImpl is an interface, whereas
 * AtkHyperlink is a object type.  The AtkHyperlinkImpl interface
 * allows a client to query an AtkObject for the availability of an
 * associated AtkHyperlink instance, and obtain that instance.  It is
 * thus particularly useful in cases where embedded content or inline
 * content within a text object is present, since the embedding text
 * object implements AtkHypertext and the inline/embedded objects are
 * exposed as children which implement AtkHyperlinkImpl, in addition
 * to their being obtainable via AtkHypertext:getLink followed by
 * AtkHyperlink:getObject.
 * 
 * The AtkHyperlinkImpl interface should be supported by objects
 * exposed within the hierarchy as children of an AtkHypertext
 * container which correspond to "links" or embedded content within
 * the text.  HTML anchors are not, for instance, normally exposed
 * this way, but embedded images and components which appear inline in
 * the content of a text object are. The AtkHyperlinkIface interface
 * allows a means of determining which children are hyperlinks in this
 * sense of the word, and for obtaining their corresponding
 * AtkHyperlink object, from which the embedding range, URI, etc. can
 * be obtained.
 * 
 * To some extent this interface exists because, for historical
 * reasons, AtkHyperlink was defined as an object type, not an
 * interface.  Thus, in order to interact with AtkObjects via
 * AtkHyperlink semantics, a new interface was required.
 * @interface 
 */
class HyperlinkImpl extends GObject.Object {

    // Own properties of Atk-1.0.Atk.HyperlinkImpl

    static name: string
    static $gtype: GObject.GType<HyperlinkImpl>

    // Constructors of Atk-1.0.Atk.HyperlinkImpl

    constructor(config?: HyperlinkImpl_ConstructProps) 
    _init(config?: HyperlinkImpl_ConstructProps): void
}

interface Hypertext_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `link-selected`
 */
interface Hypertext_LinkSelectedSignalCallback {
    (arg1: number): void
}

interface Hypertext {

    // Owm methods of Atk-1.0.Atk.Hypertext

    /**
     * Gets the link in this hypertext document at index
     * `link_index`
     * @param linkIndex an integer specifying the desired link
     */
    getLink(linkIndex: number): Hyperlink
    /**
     * Gets the index into the array of hyperlinks that is associated with
     * the character specified by `char_index`.
     * @param charIndex a character index
     */
    getLinkIndex(charIndex: number): number
    /**
     * Gets the number of links within this hypertext document.
     */
    getNLinks(): number

    // Own signals of Atk-1.0.Atk.Hypertext

    connect(sigName: "link-selected", callback: Hypertext_LinkSelectedSignalCallback): number
    on(sigName: "link-selected", callback: Hypertext_LinkSelectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "link-selected", callback: Hypertext_LinkSelectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "link-selected", callback: Hypertext_LinkSelectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "link-selected", ...args: any[]): void

    // Class property signals of Atk-1.0.Atk.Hypertext

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * An interface used for objects which implement linking between
 * multiple resource or content locations, or multiple 'markers'
 * within a single document.  A Hypertext instance is associated with
 * one or more Hyperlinks, which are associated with particular
 * offsets within the Hypertext's included content.  While this
 * interface is derived from Text, there is no requirement that
 * Hypertext instances have textual content; they may implement Image
 * as well, and Hyperlinks need not have non-zero text offsets.
 * @interface 
 */
class Hypertext extends GObject.Object {

    // Own properties of Atk-1.0.Atk.Hypertext

    static name: string
    static $gtype: GObject.GType<Hypertext>

    // Constructors of Atk-1.0.Atk.Hypertext

    constructor(config?: Hypertext_ConstructProps) 
    _init(config?: Hypertext_ConstructProps): void
}

interface Image_ConstructProps extends GObject.Object_ConstructProps {
}

interface Image {

    // Owm methods of Atk-1.0.Atk.Image

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
     * @param coordType specifies whether the coordinates are relative to the screen or to the components top level window
     */
    getImagePosition(coordType: CoordType): [ /* x */ number, /* y */ number ]
    /**
     * Get the width and height in pixels for the specified image.
     * The values of `width` and `height` are returned as -1 if the
     * values cannot be obtained (for instance, if the object is not onscreen).
     * 
     * If the size can not be obtained (e.g. missing support), x and y are set
     * to -1.
     */
    getImageSize(): [ /* width */ number, /* height */ number ]
    /**
     * Sets the textual description for this image.
     * @param description a string description to set for `image`
     */
    setImageDescription(description: string): boolean

    // Class property signals of Atk-1.0.Atk.Image

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #AtkImage should be implemented by #AtkObject subtypes on behalf of
 * components which display image/pixmap information onscreen, and
 * which provide information (other than just widget borders, etc.)
 * via that image content.  For instance, icons, buttons with icons,
 * toolbar elements, and image viewing panes typically should
 * implement #AtkImage.
 * 
 * #AtkImage primarily provides two types of information: coordinate
 * information (useful for screen review mode of screenreaders, and
 * for use by onscreen magnifiers), and descriptive information.  The
 * descriptive information is provided for alternative, text-only
 * presentation of the most significant information present in the
 * image.
 * @interface 
 */
class Image extends GObject.Object {

    // Own properties of Atk-1.0.Atk.Image

    static name: string
    static $gtype: GObject.GType<Image>

    // Constructors of Atk-1.0.Atk.Image

    constructor(config?: Image_ConstructProps) 
    _init(config?: Image_ConstructProps): void
}

interface ImplementorIface_ConstructProps extends GObject.Object_ConstructProps {
}

interface ImplementorIface {

    // Class property signals of Atk-1.0.Atk.ImplementorIface

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The AtkImplementor interface is implemented by objects for which
 * AtkObject peers may be obtained via calls to
 * iface->(ref_accessible)(implementor);
 * @interface 
 */
class ImplementorIface extends GObject.Object {

    // Own properties of Atk-1.0.Atk.ImplementorIface

    static name: string
    static $gtype: GObject.GType<ImplementorIface>

    // Constructors of Atk-1.0.Atk.ImplementorIface

    constructor(config?: ImplementorIface_ConstructProps) 
    _init(config?: ImplementorIface_ConstructProps): void
}

interface Selection_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `selection-changed`
 */
interface Selection_SelectionChangedSignalCallback {
    (): void
}

interface Selection {

    // Owm methods of Atk-1.0.Atk.Selection

    /**
     * Adds the specified accessible child of the object to the
     * object's selection.
     * @param i a #gint specifying the child index.
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
     * @param i a #gint specifying the child index.
     */
    isChildSelected(i: number): boolean
    /**
     * Gets a reference to the accessible object representing the specified
     * selected child of the object.
     * Note: callers should not rely on %NULL or on a zero value for
     * indication of whether AtkSelectionIface is implemented, they should
     * use type checking/interface checking macros or the
     * atk_get_accessible_value() convenience method.
     * @param i a #gint specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
     */
    refSelection(i: number): Object | null
    /**
     * Removes the specified child of the object from the object's selection.
     * @param i a #gint specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
     */
    removeSelection(i: number): boolean
    /**
     * Causes every child of the object to be selected if the object
     * supports multiple selections.
     */
    selectAllSelection(): boolean

    // Own signals of Atk-1.0.Atk.Selection

    connect(sigName: "selection-changed", callback: Selection_SelectionChangedSignalCallback): number
    on(sigName: "selection-changed", callback: Selection_SelectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: Selection_SelectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: Selection_SelectionChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "selection-changed", ...args: any[]): void

    // Class property signals of Atk-1.0.Atk.Selection

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #AtkSelection should be implemented by UI components with children
 * which are exposed by #atk_object_ref_child and
 * #atk_object_get_n_children, if the use of the parent UI component
 * ordinarily involves selection of one or more of the objects
 * corresponding to those #AtkObject children - for example,
 * selectable lists.
 * 
 * Note that other types of "selection" (for instance text selection)
 * are accomplished a other ATK interfaces - #AtkSelection is limited
 * to the selection/deselection of children.
 * @interface 
 */
class Selection extends GObject.Object {

    // Own properties of Atk-1.0.Atk.Selection

    static name: string
    static $gtype: GObject.GType<Selection>

    // Constructors of Atk-1.0.Atk.Selection

    constructor(config?: Selection_ConstructProps) 
    _init(config?: Selection_ConstructProps): void
}

interface StreamableContent_ConstructProps extends GObject.Object_ConstructProps {
}

interface StreamableContent {

    // Owm methods of Atk-1.0.Atk.StreamableContent

    /**
     * Gets the character string of the specified mime type. The first mime
     * type is at position 0, the second at position 1, and so on.
     * @param i a gint representing the position of the mime type starting from 0
     */
    getMimeType(i: number): string
    /**
     * Gets the number of mime types supported by this object.
     */
    getNMimeTypes(): number
    /**
     * Gets the content in the specified mime type.
     * @param mimeType a gchar* representing the mime type
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
     * @param mimeType a gchar* representing the mime type, or NULL to request a URI for the default mime type.
     */
    getUri(mimeType: string): string | null

    // Class property signals of Atk-1.0.Atk.StreamableContent

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
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
 * @interface 
 */
class StreamableContent extends GObject.Object {

    // Own properties of Atk-1.0.Atk.StreamableContent

    static name: string
    static $gtype: GObject.GType<StreamableContent>

    // Constructors of Atk-1.0.Atk.StreamableContent

    constructor(config?: StreamableContent_ConstructProps) 
    _init(config?: StreamableContent_ConstructProps): void
}

interface Table_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `column-deleted`
 */
interface Table_ColumnDeletedSignalCallback {
    (arg1: number, arg2: number): void
}

/**
 * Signal callback interface for `column-inserted`
 */
interface Table_ColumnInsertedSignalCallback {
    (arg1: number, arg2: number): void
}

/**
 * Signal callback interface for `column-reordered`
 */
interface Table_ColumnReorderedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `model-changed`
 */
interface Table_ModelChangedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `row-deleted`
 */
interface Table_RowDeletedSignalCallback {
    (arg1: number, arg2: number): void
}

/**
 * Signal callback interface for `row-inserted`
 */
interface Table_RowInsertedSignalCallback {
    (arg1: number, arg2: number): void
}

/**
 * Signal callback interface for `row-reordered`
 */
interface Table_RowReorderedSignalCallback {
    (): void
}

interface Table {

    // Owm methods of Atk-1.0.Atk.Table

    /**
     * Adds the specified `column` to the selection.
     * @param column a #gint representing a column in `table`
     */
    addColumnSelection(column: number): boolean
    /**
     * Adds the specified `row` to the selection.
     * @param row a #gint representing a row in `table`
     */
    addRowSelection(row: number): boolean
    /**
     * Gets the caption for the `table`.
     */
    getCaption(): Object | null
    /**
     * Gets a #gint representing the column at the specified `index_`.
     * @param index a #gint representing an index in `table`
     */
    getColumnAtIndex(index: number): number
    /**
     * Gets the description text of the specified `column` in the table
     * @param column a #gint representing a column in `table`
     */
    getColumnDescription(column: number): string
    /**
     * Gets the number of columns occupied by the accessible object
     * at the specified `row` and `column` in the `table`.
     * @param row a #gint representing a row in `table`
     * @param column a #gint representing a column in `table`
     */
    getColumnExtentAt(row: number, column: number): number
    /**
     * Gets the column header of a specified column in an accessible table.
     * @param column a #gint representing a column in the table
     */
    getColumnHeader(column: number): Object | null
    /**
     * Gets a #gint representing the index at the specified `row` and
     * `column`.
     * @param row a #gint representing a row in `table`
     * @param column a #gint representing a column in `table`
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
     * @param index a #gint representing an index in `table`
     */
    getRowAtIndex(index: number): number
    /**
     * Gets the description text of the specified row in the table
     * @param row a #gint representing a row in `table`
     */
    getRowDescription(row: number): string | null
    /**
     * Gets the number of rows occupied by the accessible object
     * at a specified `row` and `column` in the `table`.
     * @param row a #gint representing a row in `table`
     * @param column a #gint representing a column in `table`
     */
    getRowExtentAt(row: number, column: number): number
    /**
     * Gets the row header of a specified row in an accessible table.
     * @param row a #gint representing a row in the table
     */
    getRowHeader(row: number): Object | null
    /**
     * Gets the selected columns of the table by initializing **selected with
     * the selected column numbers. This array should be freed by the caller.
     * @param selected a #gint** that is to contain the selected columns numbers
     */
    getSelectedColumns(selected: number): number
    /**
     * Gets the selected rows of the table by initializing **selected with
     * the selected row numbers. This array should be freed by the caller.
     * @param selected a #gint** that is to contain the selected row numbers
     */
    getSelectedRows(selected: number): number
    /**
     * Gets the summary description of the table.
     */
    getSummary(): Object
    /**
     * Gets a boolean value indicating whether the specified `column`
     * is selected
     * @param column a #gint representing a column in `table`
     */
    isColumnSelected(column: number): boolean
    /**
     * Gets a boolean value indicating whether the specified `row`
     * is selected
     * @param row a #gint representing a row in `table`
     */
    isRowSelected(row: number): boolean
    /**
     * Gets a boolean value indicating whether the accessible object
     * at the specified `row` and `column` is selected
     * @param row a #gint representing a row in `table`
     * @param column a #gint representing a column in `table`
     */
    isSelected(row: number, column: number): boolean
    /**
     * Get a reference to the table cell at `row,` `column`. This cell
     * should implement the interface #AtkTableCell
     * @param row a #gint representing a row in `table`
     * @param column a #gint representing a column in `table`
     */
    refAt(row: number, column: number): Object
    /**
     * Adds the specified `column` to the selection.
     * @param column a #gint representing a column in `table`
     */
    removeColumnSelection(column: number): boolean
    /**
     * Removes the specified `row` from the selection.
     * @param row a #gint representing a row in `table`
     */
    removeRowSelection(row: number): boolean
    /**
     * Sets the caption for the table.
     * @param caption a #AtkObject representing the caption to set for `table`
     */
    setCaption(caption: Object): void
    /**
     * Sets the description text for the specified `column` of the `table`.
     * @param column a #gint representing a column in `table`
     * @param description a #gchar representing the description text to set for the specified `column` of the `table`
     */
    setColumnDescription(column: number, description: string): void
    /**
     * Sets the specified column header to `header`.
     * @param column a #gint representing a column in `table`
     * @param header an #AtkTable
     */
    setColumnHeader(column: number, header: Object): void
    /**
     * Sets the description text for the specified `row` of `table`.
     * @param row a #gint representing a row in `table`
     * @param description a #gchar representing the description text to set for the specified `row` of `table`
     */
    setRowDescription(row: number, description: string): void
    /**
     * Sets the specified row header to `header`.
     * @param row a #gint representing a row in `table`
     * @param header an #AtkTable
     */
    setRowHeader(row: number, header: Object): void
    /**
     * Sets the summary description of the table.
     * @param accessible an #AtkObject representing the summary description to set for `table`
     */
    setSummary(accessible: Object): void

    // Own signals of Atk-1.0.Atk.Table

    connect(sigName: "column-deleted", callback: Table_ColumnDeletedSignalCallback): number
    on(sigName: "column-deleted", callback: Table_ColumnDeletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-deleted", callback: Table_ColumnDeletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-deleted", callback: Table_ColumnDeletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "column-deleted", arg2: number, ...args: any[]): void
    connect(sigName: "column-inserted", callback: Table_ColumnInsertedSignalCallback): number
    on(sigName: "column-inserted", callback: Table_ColumnInsertedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-inserted", callback: Table_ColumnInsertedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-inserted", callback: Table_ColumnInsertedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "column-inserted", arg2: number, ...args: any[]): void
    connect(sigName: "column-reordered", callback: Table_ColumnReorderedSignalCallback): number
    on(sigName: "column-reordered", callback: Table_ColumnReorderedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-reordered", callback: Table_ColumnReorderedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-reordered", callback: Table_ColumnReorderedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "column-reordered", ...args: any[]): void
    connect(sigName: "model-changed", callback: Table_ModelChangedSignalCallback): number
    on(sigName: "model-changed", callback: Table_ModelChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "model-changed", callback: Table_ModelChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "model-changed", callback: Table_ModelChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "model-changed", ...args: any[]): void
    connect(sigName: "row-deleted", callback: Table_RowDeletedSignalCallback): number
    on(sigName: "row-deleted", callback: Table_RowDeletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-deleted", callback: Table_RowDeletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-deleted", callback: Table_RowDeletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "row-deleted", arg2: number, ...args: any[]): void
    connect(sigName: "row-inserted", callback: Table_RowInsertedSignalCallback): number
    on(sigName: "row-inserted", callback: Table_RowInsertedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: Table_RowInsertedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: Table_RowInsertedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "row-inserted", arg2: number, ...args: any[]): void
    connect(sigName: "row-reordered", callback: Table_RowReorderedSignalCallback): number
    on(sigName: "row-reordered", callback: Table_RowReorderedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-reordered", callback: Table_RowReorderedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-reordered", callback: Table_RowReorderedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "row-reordered", ...args: any[]): void

    // Class property signals of Atk-1.0.Atk.Table

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #AtkTable should be implemented by components which present
 * elements ordered via rows and columns.  It may also be used to
 * present tree-structured information if the nodes of the trees can
 * be said to contain multiple "columns".  Individual elements of an
 * #AtkTable are typically referred to as "cells". Those cells should
 * implement the interface #AtkTableCell, but #Atk doesn't require
 * them to be direct children of the current #AtkTable. They can be
 * grand-children, grand-grand-children etc. #AtkTable provides the
 * API needed to get a individual cell based on the row and column
 * numbers.
 * 
 * Children of #AtkTable are frequently "lightweight" objects, that
 * is, they may not have backing widgets in the host UI toolkit.  They
 * are therefore often transient.
 * 
 * Since tables are often very complex, #AtkTable includes provision
 * for offering simplified summary information, as well as row and
 * column headers and captions.  Headers and captions are #AtkObjects
 * which may implement other interfaces (#AtkText, #AtkImage, etc.) as
 * appropriate.  #AtkTable summaries may themselves be (simplified)
 * #AtkTables, etc.
 * 
 * Note for implementors: in the past, #AtkTable required that all the
 * cells should be direct children of #AtkTable, and provided some
 * index based methods to request the cells. The practice showed that
 * that forcing made #AtkTable implementation complex, and hard to
 * expose other kind of children, like rows or captions. Right now,
 * index-based methods are deprecated.
 * @interface 
 */
class Table extends GObject.Object {

    // Own properties of Atk-1.0.Atk.Table

    static name: string
    static $gtype: GObject.GType<Table>

    // Constructors of Atk-1.0.Atk.Table

    constructor(config?: Table_ConstructProps) 
    _init(config?: Table_ConstructProps): void
}

interface TableCell_ConstructProps extends Object_ConstructProps, GObject.Object_ConstructProps {
}

interface TableCell extends Object {

    // Owm methods of Atk-1.0.Atk.TableCell

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

    // Class property signals of Atk-1.0.Atk.TableCell

    connect(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Being #AtkTable a component which present elements ordered via rows
 * and columns, an #AtkTableCell is the interface which each of those
 * elements, so "cells" should implement.
 * 
 * See also #AtkTable.
 * @interface 
 */
class TableCell extends GObject.Object {

    // Own properties of Atk-1.0.Atk.TableCell

    static name: string
    static $gtype: GObject.GType<TableCell>

    // Constructors of Atk-1.0.Atk.TableCell

    constructor(config?: TableCell_ConstructProps) 
    _init(config?: TableCell_ConstructProps): void
}

interface Text_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `text-attributes-changed`
 */
interface Text_TextAttributesChangedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `text-caret-moved`
 */
interface Text_TextCaretMovedSignalCallback {
    (arg1: number): void
}

/**
 * Signal callback interface for `text-changed`
 */
interface Text_TextChangedSignalCallback {
    (arg1: number, arg2: number): void
}

/**
 * Signal callback interface for `text-insert`
 */
interface Text_TextInsertSignalCallback {
    (arg1: number, arg2: number, arg3: string): void
}

/**
 * Signal callback interface for `text-remove`
 */
interface Text_TextRemoveSignalCallback {
    (arg1: number, arg2: number, arg3: string): void
}

/**
 * Signal callback interface for `text-selection-changed`
 */
interface Text_TextSelectionChangedSignalCallback {
    (): void
}

interface Text {

    // Owm methods of Atk-1.0.Atk.Text

    /**
     * Adds a selection bounded by the specified offsets.
     * @param startOffset the starting character offset of the selected region
     * @param endOffset the offset of the first character after the selected region.
     */
    addSelection(startOffset: number, endOffset: number): boolean
    /**
     * Get the ranges of text in the specified bounding box.
     * @param rect An AtkTextRectangle giving the dimensions of the bounding box.
     * @param coordType Specify whether coordinates are relative to the screen or widget window.
     * @param xClipType Specify the horizontal clip type.
     * @param yClipType Specify the vertical clip type.
     */
    getBoundedRanges(rect: TextRectangle, coordType: CoordType, xClipType: TextClipType, yClipType: TextClipType): TextRange[]
    /**
     * Gets the offset of the position of the caret (cursor).
     */
    getCaretOffset(): number
    /**
     * Gets the specified text.
     * @param offset a character offset within `text`
     */
    getCharacterAtOffset(offset: number): string
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
     * @param offset The offset of the text character for which bounding information is required.
     * @param coords specify whether coordinates are relative to the screen or widget window
     */
    getCharacterExtents(offset: number, coords: CoordType): [ /* x */ number, /* y */ number, /* width */ number, /* height */ number ]
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
     * @param x screen x-position of character
     * @param y screen y-position of character
     * @param coords specify whether coordinates are relative to the screen or widget window
     */
    getOffsetAtPoint(x: number, y: number, coords: CoordType): number
    /**
     * Get the bounding box for text within the specified range.
     * 
     * If the extents can not be obtained (e.g. or missing support), the rectangle
     * fields are set to -1.
     * @param startOffset The offset of the first text character for which boundary        information is required.
     * @param endOffset The offset of the text character after the last character        for which boundary information is required.
     * @param coordType Specify whether coordinates are relative to the screen or widget window.
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
     * @param offset the character offset at which to get the attributes, -1 means the offset of the character to be inserted at the caret location.
     */
    getRunAttributes(offset: number): [ /* returnType */ AttributeSet, /* startOffset */ number, /* endOffset */ number ]
    /**
     * Gets the text from the specified selection.
     * @param selectionNum The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
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
     * @param offset position
     * @param granularity An #AtkTextGranularity
     */
    getStringAtOffset(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* startOffset */ number, /* endOffset */ number ]
    /**
     * Gets the specified text.
     * @param startOffset a starting character offset within `text`
     * @param endOffset an ending character offset within `text,` or -1 for the end of the string.
     */
    getText(startOffset: number, endOffset: number): string
    /**
     * Gets the specified text.
     * @param offset position
     * @param boundaryType An #AtkTextBoundary
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
     * @param offset position
     * @param boundaryType An #AtkTextBoundary
     */
    getTextAtOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    /**
     * Gets the specified text.
     * @param offset position
     * @param boundaryType An #AtkTextBoundary
     */
    getTextBeforeOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    /**
     * Removes the specified selection.
     * @param selectionNum The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
     */
    removeSelection(selectionNum: number): boolean
    /**
     * Makes a substring of `text` visible on the screen by scrolling all necessary parents.
     * @param startOffset start offset in the `text`
     * @param endOffset end offset in the `text,` or -1 for the end of the text.
     * @param type specify where the object should be made visible.
     */
    scrollSubstringTo(startOffset: number, endOffset: number, type: ScrollType): boolean
    /**
     * Move the top-left of a substring of `text` to a given position of the screen
     * by scrolling all necessary parents.
     * @param startOffset start offset in the `text`
     * @param endOffset end offset in the `text,` or -1 for the end of the text.
     * @param coords specify whether coordinates are relative to the screen or to the parent object.
     * @param x x-position where to scroll to
     * @param y y-position where to scroll to
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
     * @param offset the character offset of the new caret position
     */
    setCaretOffset(offset: number): boolean
    /**
     * Changes the start and end offset of the specified selection.
     * @param selectionNum The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
     * @param startOffset the new starting character offset of the selection
     * @param endOffset the new end position of (e.g. offset immediately past) the selection
     */
    setSelection(selectionNum: number, startOffset: number, endOffset: number): boolean

    // Own signals of Atk-1.0.Atk.Text

    connect(sigName: "text-attributes-changed", callback: Text_TextAttributesChangedSignalCallback): number
    on(sigName: "text-attributes-changed", callback: Text_TextAttributesChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-attributes-changed", callback: Text_TextAttributesChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-attributes-changed", callback: Text_TextAttributesChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "text-attributes-changed", ...args: any[]): void
    connect(sigName: "text-caret-moved", callback: Text_TextCaretMovedSignalCallback): number
    on(sigName: "text-caret-moved", callback: Text_TextCaretMovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-caret-moved", callback: Text_TextCaretMovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-caret-moved", callback: Text_TextCaretMovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "text-caret-moved", ...args: any[]): void
    connect(sigName: "text-changed", callback: Text_TextChangedSignalCallback): number
    on(sigName: "text-changed", callback: Text_TextChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-changed", callback: Text_TextChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-changed", callback: Text_TextChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "text-changed", arg2: number, ...args: any[]): void
    connect(sigName: "text-insert", callback: Text_TextInsertSignalCallback): number
    on(sigName: "text-insert", callback: Text_TextInsertSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-insert", callback: Text_TextInsertSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-insert", callback: Text_TextInsertSignalCallback): NodeJS.EventEmitter
    emit(sigName: "text-insert", arg2: number, arg3: string, ...args: any[]): void
    connect(sigName: "text-remove", callback: Text_TextRemoveSignalCallback): number
    on(sigName: "text-remove", callback: Text_TextRemoveSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-remove", callback: Text_TextRemoveSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-remove", callback: Text_TextRemoveSignalCallback): NodeJS.EventEmitter
    emit(sigName: "text-remove", arg2: number, arg3: string, ...args: any[]): void
    connect(sigName: "text-selection-changed", callback: Text_TextSelectionChangedSignalCallback): number
    on(sigName: "text-selection-changed", callback: Text_TextSelectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-selection-changed", callback: Text_TextSelectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-selection-changed", callback: Text_TextSelectionChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "text-selection-changed", ...args: any[]): void

    // Class property signals of Atk-1.0.Atk.Text

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #AtkText should be implemented by #AtkObjects on behalf of widgets
 * that have text content which is either attributed or otherwise
 * non-trivial.  #AtkObjects whose text content is simple,
 * unattributed, and very brief may expose that content via
 * #atk_object_get_name instead; however if the text is editable,
 * multi-line, typically longer than three or four words, attributed,
 * selectable, or if the object already uses the 'name' ATK property
 * for other information, the #AtkText interface should be used to
 * expose the text content.  In the case of editable text content,
 * #AtkEditableText (a subtype of the #AtkText interface) should be
 * implemented instead.
 * 
 *  #AtkText provides not only traversal facilities and change
 * notification for text content, but also caret tracking and glyph
 * bounding box calculations.  Note that the text strings are exposed
 * as UTF-8, and are therefore potentially multi-byte, and
 * caret-to-byte offset mapping makes no assumptions about the
 * character length; also bounding box glyph-to-offset mapping may be
 * complex for languages which use ligatures.
 * @interface 
 */
class Text extends GObject.Object {

    // Own properties of Atk-1.0.Atk.Text

    static name: string
    static $gtype: GObject.GType<Text>

    // Constructors of Atk-1.0.Atk.Text

    constructor(config?: Text_ConstructProps) 
    _init(config?: Text_ConstructProps): void
    /**
     * Frees the memory associated with an array of AtkTextRange. It is assumed
     * that the array was returned by the function atk_text_get_bounded_ranges
     * and is NULL terminated.
     * @param ranges A pointer to an array of #AtkTextRange which is   to be freed.
     */
    static freeRanges(ranges: TextRange[]): void
}

interface Value_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `value-changed`
 */
interface Value_ValueChangedSignalCallback {
    (value: number, text: string): void
}

interface Value {

    // Owm methods of Atk-1.0.Atk.Value

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
    getValueAndText(): [ /* value */ number, /* text */ string ]
    /**
     * Sets the value of this object.
     * @param value a #GValue which is the desired new accessible value.
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
     * @param newValue a double which is the desired new accessible value.
     */
    setValue(newValue: number): void

    // Own signals of Atk-1.0.Atk.Value

    connect(sigName: "value-changed", callback: Value_ValueChangedSignalCallback): number
    on(sigName: "value-changed", callback: Value_ValueChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: Value_ValueChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: Value_ValueChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "value-changed", text: string, ...args: any[]): void

    // Class property signals of Atk-1.0.Atk.Value

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #AtkValue should be implemented for components which either display
 * a value from a bounded range, or which allow the user to specify a
 * value from a bounded range, or both. For instance, most sliders and
 * range controls, as well as dials, should have #AtkObject
 * representations which implement #AtkValue on the component's
 * behalf. #AtKValues may be read-only, in which case attempts to
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
 * #AtkValue should NOT be implemented for widgets whose displayed
 * value is not reflective of a meaningful amount. For instance, a
 * progress pulse indicator whose value alternates between 0.0 and 1.0
 * to indicate that some process is still taking place should not
 * implement #AtkValue because the current value does not reflect
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
 * atk_value_type_get_localized_name() with the following
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
 * @interface 
 */
class Value extends GObject.Object {

    // Own properties of Atk-1.0.Atk.Value

    static name: string
    static $gtype: GObject.GType<Value>

    // Constructors of Atk-1.0.Atk.Value

    constructor(config?: Value_ConstructProps) 
    _init(config?: Value_ConstructProps): void
}

interface Window_ConstructProps extends Object_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `activate`
 */
interface Window_ActivateSignalCallback {
    (): void
}

/**
 * Signal callback interface for `create`
 */
interface Window_CreateSignalCallback {
    (): void
}

/**
 * Signal callback interface for `deactivate`
 */
interface Window_DeactivateSignalCallback {
    (): void
}

/**
 * Signal callback interface for `destroy`
 */
interface Window_DestroySignalCallback {
    (): void
}

/**
 * Signal callback interface for `maximize`
 */
interface Window_MaximizeSignalCallback {
    (): void
}

/**
 * Signal callback interface for `minimize`
 */
interface Window_MinimizeSignalCallback {
    (): void
}

/**
 * Signal callback interface for `move`
 */
interface Window_MoveSignalCallback {
    (): void
}

/**
 * Signal callback interface for `resize`
 */
interface Window_ResizeSignalCallback {
    (): void
}

/**
 * Signal callback interface for `restore`
 */
interface Window_RestoreSignalCallback {
    (): void
}

interface Window extends Object {

    // Own signals of Atk-1.0.Atk.Window

    connect(sigName: "activate", callback: Window_ActivateSignalCallback): number
    on(sigName: "activate", callback: Window_ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: Window_ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: Window_ActivateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "activate", ...args: any[]): void
    connect(sigName: "create", callback: Window_CreateSignalCallback): number
    on(sigName: "create", callback: Window_CreateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create", callback: Window_CreateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create", callback: Window_CreateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "create", ...args: any[]): void
    connect(sigName: "deactivate", callback: Window_DeactivateSignalCallback): number
    on(sigName: "deactivate", callback: Window_DeactivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deactivate", callback: Window_DeactivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deactivate", callback: Window_DeactivateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "deactivate", ...args: any[]): void
    connect(sigName: "destroy", callback: Window_DestroySignalCallback): number
    on(sigName: "destroy", callback: Window_DestroySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: Window_DestroySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: Window_DestroySignalCallback): NodeJS.EventEmitter
    emit(sigName: "destroy", ...args: any[]): void
    connect(sigName: "maximize", callback: Window_MaximizeSignalCallback): number
    on(sigName: "maximize", callback: Window_MaximizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "maximize", callback: Window_MaximizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "maximize", callback: Window_MaximizeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "maximize", ...args: any[]): void
    connect(sigName: "minimize", callback: Window_MinimizeSignalCallback): number
    on(sigName: "minimize", callback: Window_MinimizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "minimize", callback: Window_MinimizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "minimize", callback: Window_MinimizeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "minimize", ...args: any[]): void
    connect(sigName: "move", callback: Window_MoveSignalCallback): number
    on(sigName: "move", callback: Window_MoveSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move", callback: Window_MoveSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move", callback: Window_MoveSignalCallback): NodeJS.EventEmitter
    emit(sigName: "move", ...args: any[]): void
    connect(sigName: "resize", callback: Window_ResizeSignalCallback): number
    on(sigName: "resize", callback: Window_ResizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resize", callback: Window_ResizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resize", callback: Window_ResizeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "resize", ...args: any[]): void
    connect(sigName: "restore", callback: Window_RestoreSignalCallback): number
    on(sigName: "restore", callback: Window_RestoreSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "restore", callback: Window_RestoreSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "restore", callback: Window_RestoreSignalCallback): NodeJS.EventEmitter
    emit(sigName: "restore", ...args: any[]): void

    // Class property signals of Atk-1.0.Atk.Window

    connect(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #AtkWindow should be implemented by the UI elements that represent
 * a top-level window, such as the main window of an application or
 * dialog.
 * @interface 
 */
class Window extends GObject.Object {

    // Own properties of Atk-1.0.Atk.Window

    static name: string
    static $gtype: GObject.GType<Window>

    // Constructors of Atk-1.0.Atk.Window

    constructor(config?: Window_ConstructProps) 
    _init(config?: Window_ConstructProps): void
}

interface GObjectAccessible_ConstructProps extends Object_ConstructProps {
}

interface GObjectAccessible {

    // Own fields of Atk-1.0.Atk.GObjectAccessible

    parent: Object

    // Owm methods of Atk-1.0.Atk.GObjectAccessible

    /**
     * Gets the GObject for which `obj` is the accessible object.
     */
    getObject(): GObject.Object

    // Class property signals of Atk-1.0.Atk.GObjectAccessible

    connect(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This object class is derived from AtkObject. It can be used as a
 * basis for implementing accessible objects for GObjects which are
 * not derived from GtkWidget. One example of its use is in providing
 * an accessible object for GnomeCanvasItem in the GAIL library.
 * @class 
 */
class GObjectAccessible extends Object {

    // Own properties of Atk-1.0.Atk.GObjectAccessible

    static name: string
    static $gtype: GObject.GType<GObjectAccessible>

    // Constructors of Atk-1.0.Atk.GObjectAccessible

    constructor(config?: GObjectAccessible_ConstructProps) 
    _init(config?: GObjectAccessible_ConstructProps): void
    /**
     * Gets the accessible object for the specified `obj`.
     * @param obj a #GObject
     */
    static forObject(obj: GObject.Object): Object
}

interface Hyperlink_ConstructProps extends Action_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `link-activated`
 */
interface Hyperlink_LinkActivatedSignalCallback {
    (): void
}

interface Hyperlink extends Action {

    // Own properties of Atk-1.0.Atk.Hyperlink

    readonly endIndex: number
    readonly numberOfAnchors: number
    /**
     * Selected link
     */
    readonly selectedLink: boolean
    readonly startIndex: number

    // Own fields of Atk-1.0.Atk.Hyperlink

    parent: GObject.Object

    // Owm methods of Atk-1.0.Atk.Hyperlink

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
     * @param i a (zero-index) integer specifying the desired anchor
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
     * @param i a (zero-index) integer specifying the desired anchor
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

    // Own signals of Atk-1.0.Atk.Hyperlink

    connect(sigName: "link-activated", callback: Hyperlink_LinkActivatedSignalCallback): number
    on(sigName: "link-activated", callback: Hyperlink_LinkActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "link-activated", callback: Hyperlink_LinkActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "link-activated", callback: Hyperlink_LinkActivatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "link-activated", ...args: any[]): void

    // Class property signals of Atk-1.0.Atk.Hyperlink

    connect(sigName: "notify::end-index", callback: (...args: any[]) => void): number
    on(sigName: "notify::end-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end-index", ...args: any[]): void
    connect(sigName: "notify::number-of-anchors", callback: (...args: any[]) => void): number
    on(sigName: "notify::number-of-anchors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::number-of-anchors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::number-of-anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::number-of-anchors", ...args: any[]): void
    connect(sigName: "notify::selected-link", callback: (...args: any[]) => void): number
    on(sigName: "notify::selected-link", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selected-link", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selected-link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selected-link", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * An ATK object which encapsulates a link or set of links (for
 * instance in the case of client-side image maps) in a hypertext
 * document.  It may implement the AtkAction interface.  AtkHyperlink
 * may also be used to refer to inline embedded content, since it
 * allows specification of a start and end offset within the host
 * AtkHypertext object.
 * @class 
 */
class Hyperlink extends GObject.Object {

    // Own properties of Atk-1.0.Atk.Hyperlink

    static name: string
    static $gtype: GObject.GType<Hyperlink>

    // Constructors of Atk-1.0.Atk.Hyperlink

    constructor(config?: Hyperlink_ConstructProps) 
    _init(config?: Hyperlink_ConstructProps): void
}

interface Misc_ConstructProps extends GObject.Object_ConstructProps {
}

interface Misc {

    // Own fields of Atk-1.0.Atk.Misc

    parent: GObject.Object

    // Owm methods of Atk-1.0.Atk.Misc

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

    // Class property signals of Atk-1.0.Atk.Misc

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * A set of utility functions for thread locking. This interface and
 * all his related methods are deprecated since 2.12.
 * @class 
 */
class Misc extends GObject.Object {

    // Own properties of Atk-1.0.Atk.Misc

    static name: string
    static $gtype: GObject.GType<Misc>

    // Constructors of Atk-1.0.Atk.Misc

    constructor(config?: Misc_ConstructProps) 
    _init(config?: Misc_ConstructProps): void
    /**
     * Obtain the singleton instance of AtkMisc for this application.
     */
    static getInstance(): Misc
}

interface NoOpObject_ConstructProps extends Action_ConstructProps, Component_ConstructProps, Document_ConstructProps, EditableText_ConstructProps, Hypertext_ConstructProps, Image_ConstructProps, Selection_ConstructProps, Table_ConstructProps, TableCell_ConstructProps, Text_ConstructProps, Value_ConstructProps, Window_ConstructProps, Object_ConstructProps {
}

interface NoOpObject extends Action, Component, Document, EditableText, Hypertext, Image, Selection, Table, TableCell, Text, Value, Window {

    // Own fields of Atk-1.0.Atk.NoOpObject

    parent: Object

    // Conflicting methods

    getDescription(...args: any[]): any
    getName(...args: any[]): any
    setDescription(...args: any[]): any
    getPosition(...args: any[]): any
    addSelection(...args: any[]): any
    vfuncGetDescription(...args: any[]): any
    vfuncGetName(...args: any[]): any
    vfuncSetDescription(...args: any[]): any
    vfuncGetPosition(...args: any[]): any
    vfuncAddSelection(...args: any[]): any

    // Class property signals of Atk-1.0.Atk.NoOpObject

    connect(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * An AtkNoOpObject is an AtkObject which purports to implement all
 * ATK interfaces. It is the type of AtkObject which is created if an
 * accessible object is requested for an object type for which no
 * factory type is specified.
 * @class 
 */
class NoOpObject extends Object {

    // Own properties of Atk-1.0.Atk.NoOpObject

    static name: string
    static $gtype: GObject.GType<NoOpObject>

    // Constructors of Atk-1.0.Atk.NoOpObject

    constructor(config?: NoOpObject_ConstructProps) 
    /**
     * Provides a default (non-functioning stub) #AtkObject.
     * Application maintainers should not use this method.
     * @constructor 
     * @param obj a #GObject
     */
    constructor(obj: GObject.Object) 
    /**
     * Provides a default (non-functioning stub) #AtkObject.
     * Application maintainers should not use this method.
     * @constructor 
     * @param obj a #GObject
     */
    static new(obj: GObject.Object): NoOpObject
    _init(config?: NoOpObject_ConstructProps): void
}

interface NoOpObjectFactory_ConstructProps extends ObjectFactory_ConstructProps {
}

interface NoOpObjectFactory {

    // Own fields of Atk-1.0.Atk.NoOpObjectFactory

    parent: ObjectFactory

    // Class property signals of Atk-1.0.Atk.NoOpObjectFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The AtkObjectFactory which creates an AtkNoOpObject. An instance of
 * this is created by an AtkRegistry if no factory type has not been
 * specified to create an accessible object of a particular type.
 * @class 
 */
class NoOpObjectFactory extends ObjectFactory {

    // Own properties of Atk-1.0.Atk.NoOpObjectFactory

    static name: string
    static $gtype: GObject.GType<NoOpObjectFactory>

    // Constructors of Atk-1.0.Atk.NoOpObjectFactory

    constructor(config?: NoOpObjectFactory_ConstructProps) 
    /**
     * Creates an instance of an #AtkObjectFactory which generates primitive
     * (non-functioning) #AtkObjects.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of an #AtkObjectFactory which generates primitive
     * (non-functioning) #AtkObjects.
     * @constructor 
     */
    static new(): NoOpObjectFactory
    _init(config?: NoOpObjectFactory_ConstructProps): void
}

interface Object_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Atk-1.0.Atk.Object

    accessibleDescription?: string | null
    accessibleName?: string | null
    accessibleParent?: Object | null
    accessibleRole?: Role | null
    /**
     * Table caption.
     */
    accessibleTableCaption?: string | null
    accessibleTableCaptionObject?: Object | null
    /**
     * Accessible table column description.
     */
    accessibleTableColumnDescription?: string | null
    /**
     * Accessible table column header.
     */
    accessibleTableColumnHeader?: Object | null
    /**
     * Accessible table row description.
     */
    accessibleTableRowDescription?: string | null
    /**
     * Accessible table row header.
     */
    accessibleTableRowHeader?: Object | null
    accessibleTableSummary?: Object | null
    /**
     * Numeric value of this object, in case being and AtkValue.
     */
    accessibleValue?: number | null
}

/**
 * Signal callback interface for `active-descendant-changed`
 */
interface Object_ActiveDescendantChangedSignalCallback {
    (arg1: Object): void
}

/**
 * Signal callback interface for `children-changed`
 */
interface Object_ChildrenChangedSignalCallback {
    (arg1: number, arg2: Object): void
}

/**
 * Signal callback interface for `focus-event`
 */
interface Object_FocusEventSignalCallback {
    (arg1: boolean): void
}

/**
 * Signal callback interface for `property-change`
 */
interface Object_PropertyChangeSignalCallback {
    (arg1: PropertyValues): void
}

/**
 * Signal callback interface for `state-change`
 */
interface Object_StateChangeSignalCallback {
    (arg1: string, arg2: boolean): void
}

/**
 * Signal callback interface for `visible-data-changed`
 */
interface Object_VisibleDataChangedSignalCallback {
    (): void
}

interface Object {

    // Own properties of Atk-1.0.Atk.Object

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

    // Own fields of Atk-1.0.Atk.Object

    parent: GObject.Object
    description: string
    name: string
    accessibleParent: Object
    role: Role
    relationSet: RelationSet
    layer: Layer

    // Owm methods of Atk-1.0.Atk.Object

    /**
     * Adds a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is to be the target of the relation.
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
     * @param data a #gpointer which identifies the object for which the AtkObject was created.
     */
    initialize(data: object | null): void
    /**
     * Emits a state-change signal for the specified state.
     * 
     * Note that as a general rule when the state of an existing object changes,
     * emitting a notification is expected.
     * @param state an #AtkState whose state is changed
     * @param value a gboolean which indicates whether the state is being set on or off
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
     * @param i a gint representing the position of the child, starting from 0
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
     * @param handlerId a guint which identifies the handler to be removed.
     */
    removePropertyChangeHandler(handlerId: number): void
    /**
     * Removes a relationship of the specified type with the specified target.
     * @param relationship The #AtkRelationType of the relation
     * @param target The #AtkObject which is the target of the relation to be removed.
     */
    removeRelationship(relationship: RelationType, target: Object): boolean
    /**
     * Sets the accessible ID of the accessible.  This is not meant to be presented
     * to the user, but to be an ID which is stable over application development.
     * Typically, this is the gtkbuilder ID. Such an ID will be available for
     * instance to identify a given well-known accessible object for tailored screen
     * reading, or for automatic regression testing.
     * @param name a character string to be set as the accessible id
     */
    setAccessibleId(name: string): void
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    setDescription(description: string): void
    /**
     * Sets the accessible name of the accessible. You can't set the name
     * to NULL. This is reserved for the initial value. In this aspect
     * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
     * a empty value you can use "".
     * @param name a character string to be set as the accessible name
     */
    setName(name: string): void
    /**
     * Sets the accessible parent of the accessible. `parent` can be NULL.
     * @param parent an #AtkObject to be set as the accessible parent
     */
    setParent(parent: Object): void
    /**
     * Sets the role of the accessible.
     * @param role an #AtkRole to be set as the role
     */
    setRole(role: Role): void

    // Own signals of Atk-1.0.Atk.Object

    connect(sigName: "active-descendant-changed", callback: Object_ActiveDescendantChangedSignalCallback): number
    on(sigName: "active-descendant-changed", callback: Object_ActiveDescendantChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: Object_ActiveDescendantChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: Object_ActiveDescendantChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", ...args: any[]): void
    connect(sigName: "children-changed", callback: Object_ChildrenChangedSignalCallback): number
    on(sigName: "children-changed", callback: Object_ChildrenChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: Object_ChildrenChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: Object_ChildrenChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg2: Object, ...args: any[]): void
    connect(sigName: "focus-event", callback: Object_FocusEventSignalCallback): number
    on(sigName: "focus-event", callback: Object_FocusEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: Object_FocusEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: Object_FocusEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "focus-event", ...args: any[]): void
    connect(sigName: "property-change", callback: Object_PropertyChangeSignalCallback): number
    on(sigName: "property-change", callback: Object_PropertyChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: Object_PropertyChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: Object_PropertyChangeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "property-change", ...args: any[]): void
    connect(sigName: "state-change", callback: Object_StateChangeSignalCallback): number
    on(sigName: "state-change", callback: Object_StateChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: Object_StateChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: Object_StateChangeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "state-change", arg2: boolean, ...args: any[]): void
    connect(sigName: "visible-data-changed", callback: Object_VisibleDataChangedSignalCallback): number
    on(sigName: "visible-data-changed", callback: Object_VisibleDataChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: Object_VisibleDataChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: Object_VisibleDataChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed", ...args: any[]): void

    // Class property signals of Atk-1.0.Atk.Object

    connect(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This class is the primary class for accessibility support via the
 * Accessibility ToolKit (ATK).  Objects which are instances of
 * #AtkObject (or instances of AtkObject-derived types) are queried
 * for properties which relate basic (and generic) properties of a UI
 * component such as name and description.  Instances of #AtkObject
 * may also be queried as to whether they implement other ATK
 * interfaces (e.g. #AtkAction, #AtkComponent, etc.), as appropriate
 * to the role which a given UI component plays in a user interface.
 * 
 * All UI components in an application which provide useful
 * information or services to the user must provide corresponding
 * #AtkObject instances on request (in GTK+, for instance, usually on
 * a call to #gtk_widget_get_accessible ()), either via ATK support
 * built into the toolkit for the widget class or ancestor class, or
 * in the case of custom widgets, if the inherited #AtkObject
 * implementation is insufficient, via instances of a new #AtkObject
 * subclass.
 * 
 * See also: #AtkObjectFactory, #AtkRegistry.  (GTK+ users see also
 * #GtkAccessible).
 * @interface 
 */
class Object extends GObject.Object {

    // Own properties of Atk-1.0.Atk.Object

    static name: string
    static $gtype: GObject.GType<Object>

    // Constructors of Atk-1.0.Atk.Object

    constructor(config?: Object_ConstructProps) 
    _init(config?: Object_ConstructProps): void
}

interface ObjectFactory_ConstructProps extends GObject.Object_ConstructProps {
}

interface ObjectFactory {

    // Own fields of Atk-1.0.Atk.ObjectFactory

    parent: GObject.Object

    // Owm methods of Atk-1.0.Atk.ObjectFactory

    /**
     * Provides an #AtkObject that implements an accessibility interface
     * on behalf of `obj`
     * @param obj a #GObject
     */
    createAccessible(obj: GObject.Object): Object
    /**
     * Gets the GType of the accessible which is created by the factory.
     */
    getAccessibleType(): GObject.GType
    /**
     * Inform `factory` that it is no longer being used to create
     * accessibles. When called, `factory` may need to inform
     * #AtkObjects which it has created that they need to be re-instantiated.
     * Note: primarily used for runtime replacement of #AtkObjectFactorys
     * in object registries.
     */
    invalidate(): void

    // Class property signals of Atk-1.0.Atk.ObjectFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This class is the base object class for a factory used to create an
 * accessible object for a specific GType. The function
 * atk_registry_set_factory_type() is normally called to store in the
 * registry the factory type to be used to create an accessible of a
 * particular GType.
 * @class 
 */
class ObjectFactory extends GObject.Object {

    // Own properties of Atk-1.0.Atk.ObjectFactory

    static name: string
    static $gtype: GObject.GType<ObjectFactory>

    // Constructors of Atk-1.0.Atk.ObjectFactory

    constructor(config?: ObjectFactory_ConstructProps) 
    _init(config?: ObjectFactory_ConstructProps): void
}

interface Plug_ConstructProps extends Component_ConstructProps, Object_ConstructProps {
}

interface Plug extends Component {

    // Own fields of Atk-1.0.Atk.Plug

    parent: Object

    // Owm methods of Atk-1.0.Atk.Plug

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
     * @param child an #AtkObject to be set as accessible child of `plug`.
     */
    setChild(child: Object): void

    // Class property signals of Atk-1.0.Atk.Plug

    connect(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * See #AtkSocket
 * @class 
 */
class Plug extends Object {

    // Own properties of Atk-1.0.Atk.Plug

    static name: string
    static $gtype: GObject.GType<Plug>

    // Constructors of Atk-1.0.Atk.Plug

    constructor(config?: Plug_ConstructProps) 
    /**
     * Creates a new #AtkPlug instance.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AtkPlug instance.
     * @constructor 
     */
    static new(): Plug
    _init(config?: Plug_ConstructProps): void
}

interface Registry_ConstructProps extends GObject.Object_ConstructProps {
}

interface Registry {

    // Own fields of Atk-1.0.Atk.Registry

    parent: GObject.Object
    factoryTypeRegistry: GLib.HashTable
    factorySingletonCache: GLib.HashTable

    // Owm methods of Atk-1.0.Atk.Registry

    /**
     * Gets an #AtkObjectFactory appropriate for creating #AtkObjects
     * appropriate for `type`.
     * @param type a #GType with which to look up the associated #AtkObjectFactory
     */
    getFactory(type: GObject.GType): ObjectFactory
    /**
     * Provides a #GType indicating the #AtkObjectFactory subclass
     * associated with `type`.
     * @param type a #GType with which to look up the associated #AtkObjectFactory subclass
     */
    getFactoryType(type: GObject.GType): GObject.GType
    /**
     * Associate an #AtkObjectFactory subclass with a #GType. Note:
     * The associated `factory_type` will thereafter be responsible for
     * the creation of new #AtkObject implementations for instances
     * appropriate for `type`.
     * @param type an #AtkObject type
     * @param factoryType an #AtkObjectFactory type to associate with `type`.  Must implement AtkObject appropriate for `type`.
     */
    setFactoryType(type: GObject.GType, factoryType: GObject.GType): void

    // Class property signals of Atk-1.0.Atk.Registry

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The AtkRegistry is normally used to create appropriate ATK "peers"
 * for user interface components.  Application developers usually need
 * only interact with the AtkRegistry by associating appropriate ATK
 * implementation classes with GObject classes via the
 * atk_registry_set_factory_type call, passing the appropriate GType
 * for application custom widget classes.
 * @class 
 */
class Registry extends GObject.Object {

    // Own properties of Atk-1.0.Atk.Registry

    static name: string
    static $gtype: GObject.GType<Registry>

    // Constructors of Atk-1.0.Atk.Registry

    constructor(config?: Registry_ConstructProps) 
    _init(config?: Registry_ConstructProps): void
}

interface Relation_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Atk-1.0.Atk.Relation

    relationType?: RelationType | null
    target?: GObject.ValueArray | null
}

interface Relation {

    // Own properties of Atk-1.0.Atk.Relation

    relationType: RelationType

    // Own fields of Atk-1.0.Atk.Relation

    parent: GObject.Object
    target: object[]
    relationship: RelationType

    // Owm methods of Atk-1.0.Atk.Relation

    /**
     * Adds the specified AtkObject to the target for the relation, if it is
     * not already present.  See also atk_object_add_relationship().
     * @param target an #AtkObject
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
     * @param target an #AtkObject
     */
    removeTarget(target: Object): boolean

    // Class property signals of Atk-1.0.Atk.Relation

    connect(sigName: "notify::relation-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * An AtkRelation describes a relation between an object and one or
 * more other objects. The actual relations that an object has with
 * other objects are defined as an AtkRelationSet, which is a set of
 * AtkRelations.
 * @class 
 */
class Relation extends GObject.Object {

    // Own properties of Atk-1.0.Atk.Relation

    static name: string
    static $gtype: GObject.GType<Relation>

    // Constructors of Atk-1.0.Atk.Relation

    constructor(config?: Relation_ConstructProps) 
    /**
     * Create a new relation for the specified key and the specified list
     * of targets.  See also atk_object_add_relationship().
     * @constructor 
     * @param targets an array of pointers to  #AtkObjects
     * @param relationship an #AtkRelationType with which to create the new  #AtkRelation
     */
    constructor(targets: Object[], relationship: RelationType) 
    /**
     * Create a new relation for the specified key and the specified list
     * of targets.  See also atk_object_add_relationship().
     * @constructor 
     * @param targets an array of pointers to  #AtkObjects
     * @param relationship an #AtkRelationType with which to create the new  #AtkRelation
     */
    static new(targets: Object[], relationship: RelationType): Relation
    _init(config?: Relation_ConstructProps): void
}

interface RelationSet_ConstructProps extends GObject.Object_ConstructProps {
}

interface RelationSet {

    // Own fields of Atk-1.0.Atk.RelationSet

    parent: GObject.Object
    relations: object[]

    // Owm methods of Atk-1.0.Atk.RelationSet

    /**
     * Add a new relation to the current relation set if it is not already
     * present.
     * This function ref's the AtkRelation so the caller of this function
     * should unref it to ensure that it will be destroyed when the AtkRelationSet
     * is destroyed.
     * @param relation an #AtkRelation
     */
    add(relation: Relation): void
    /**
     * Add a new relation of the specified type with the specified target to
     * the current relation set if the relation set does not contain a relation
     * of that type. If it is does contain a relation of that typea the target
     * is added to the relation.
     * @param relationship an #AtkRelationType
     * @param target an #AtkObject
     */
    addRelationByType(relationship: RelationType, target: Object): void
    /**
     * Determines whether the relation set contains a relation that matches the
     * specified type.
     * @param relationship an #AtkRelationType
     */
    contains(relationship: RelationType): boolean
    /**
     * Determines whether the relation set contains a relation that
     * matches the specified pair formed by type `relationship` and object
     * `target`.
     * @param relationship an #AtkRelationType
     * @param target an #AtkObject
     */
    containsTarget(relationship: RelationType, target: Object): boolean
    /**
     * Determines the number of relations in a relation set.
     */
    getNRelations(): number
    /**
     * Determines the relation at the specified position in the relation set.
     * @param i a gint representing a position in the set, starting from 0.
     */
    getRelation(i: number): Relation
    /**
     * Finds a relation that matches the specified type.
     * @param relationship an #AtkRelationType
     */
    getRelationByType(relationship: RelationType): Relation
    /**
     * Removes a relation from the relation set.
     * This function unref's the #AtkRelation so it will be deleted unless there
     * is another reference to it.
     * @param relation an #AtkRelation
     */
    remove(relation: Relation): void

    // Class property signals of Atk-1.0.Atk.RelationSet

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The AtkRelationSet held by an object establishes its relationships
 * with objects beyond the normal "parent/child" hierarchical
 * relationships that all user interface objects have.
 * AtkRelationSets establish whether objects are labelled or
 * controlled by other components, share group membership with other
 * components (for instance within a radio-button group), or share
 * content which "flows" between them, among other types of possible
 * relationships.
 * @class 
 */
class RelationSet extends GObject.Object {

    // Own properties of Atk-1.0.Atk.RelationSet

    static name: string
    static $gtype: GObject.GType<RelationSet>

    // Constructors of Atk-1.0.Atk.RelationSet

    constructor(config?: RelationSet_ConstructProps) 
    /**
     * Creates a new empty relation set.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new empty relation set.
     * @constructor 
     */
    static new(): RelationSet
    _init(config?: RelationSet_ConstructProps): void
}

interface Socket_ConstructProps extends Component_ConstructProps, Object_ConstructProps {
}

interface Socket extends Component {

    // Own fields of Atk-1.0.Atk.Socket

    parent: Object

    // Owm methods of Atk-1.0.Atk.Socket

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
     * @param plugId the ID of an #AtkPlug
     */
    embed(plugId: string): void
    /**
     * Determines whether or not the socket has an embedded plug.
     */
    isOccupied(): boolean

    // Class property signals of Atk-1.0.Atk.Socket

    connect(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Together with #AtkPlug, #AtkSocket provides the ability to embed
 * accessibles from one process into another in a fashion that is
 * transparent to assistive technologies. #AtkSocket works as the
 * container of #AtkPlug, embedding it using the method
 * atk_socket_embed(). Any accessible contained in the #AtkPlug will
 * appear to the assistive technologies as being inside the
 * application that created the #AtkSocket.
 * 
 * The communication between a #AtkSocket and a #AtkPlug is done by
 * the IPC layer of the accessibility framework, normally implemented
 * by the D-Bus based implementation of AT-SPI (at-spi2). If that is
 * the case, at-spi-atk2 is the responsible to implement the abstract
 * methods atk_plug_get_id() and atk_socket_embed(), so an ATK
 * implementor shouldn't reimplement them. The process that contains
 * the #AtkPlug is responsible to send the ID returned by
 * atk_plug_id() to the process that contains the #AtkSocket, so it
 * could call the method atk_socket_embed() in order to embed it.
 * 
 * For the same reasons, an implementor doesn't need to implement
 * atk_object_get_n_accessible_children() and
 * atk_object_ref_accessible_child(). All the logic related to those
 * functions will be implemented by the IPC layer.
 * @class 
 */
class Socket extends Object {

    // Own properties of Atk-1.0.Atk.Socket

    static name: string
    static $gtype: GObject.GType<Socket>

    // Constructors of Atk-1.0.Atk.Socket

    constructor(config?: Socket_ConstructProps) 
    /**
     * Creates a new #AtkSocket.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AtkSocket.
     * @constructor 
     */
    static new(): Socket
    _init(config?: Socket_ConstructProps): void
}

interface StateSet_ConstructProps extends GObject.Object_ConstructProps {
}

interface StateSet {

    // Own fields of Atk-1.0.Atk.StateSet

    parent: GObject.Object

    // Owm methods of Atk-1.0.Atk.StateSet

    /**
     * Adds the state of the specified type to the state set if it is not already
     * present.
     * 
     * Note that because an #AtkStateSet is a read-only object, this method should
     * be used to add a state to a newly-created set which will then be returned by
     * #atk_object_ref_state_set. It should not be used to modify the existing state
     * of an object. See also #atk_object_notify_state_change.
     * @param type an #AtkStateType
     */
    addState(type: StateType): boolean
    /**
     * Adds the states of the specified types to the state set.
     * 
     * Note that because an #AtkStateSet is a read-only object, this method should
     * be used to add states to a newly-created set which will then be returned by
     * #atk_object_ref_state_set. It should not be used to modify the existing state
     * of an object. See also #atk_object_notify_state_change.
     * @param types an array of #AtkStateType
     */
    addStates(types: StateType[]): void
    /**
     * Constructs the intersection of the two sets, returning %NULL if the
     * intersection is empty.
     * @param compareSet another #AtkStateSet
     */
    andSets(compareSet: StateSet): StateSet
    /**
     * Removes all states from the state set.
     */
    clearStates(): void
    /**
     * Checks whether the state for the specified type is in the specified set.
     * @param type an #AtkStateType
     */
    containsState(type: StateType): boolean
    /**
     * Checks whether the states for all the specified types are in the
     * specified set.
     * @param types an array of #AtkStateType
     */
    containsStates(types: StateType[]): boolean
    /**
     * Checks whether the state set is empty, i.e. has no states set.
     */
    isEmpty(): boolean
    /**
     * Constructs the union of the two sets.
     * @param compareSet another #AtkStateSet
     */
    orSets(compareSet: StateSet): StateSet | null
    /**
     * Removes the state for the specified type from the state set.
     * 
     * Note that because an #AtkStateSet is a read-only object, this method should
     * be used to remove a state to a newly-created set which will then be returned
     * by #atk_object_ref_state_set. It should not be used to modify the existing
     * state of an object. See also #atk_object_notify_state_change.
     * @param type an #AtkType
     */
    removeState(type: StateType): boolean
    /**
     * Constructs the exclusive-or of the two sets, returning %NULL is empty.
     * The set returned by this operation contains the states in exactly
     * one of the two sets.
     * @param compareSet another #AtkStateSet
     */
    xorSets(compareSet: StateSet): StateSet

    // Class property signals of Atk-1.0.Atk.StateSet

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * An AtkStateSet is a read-only representation of the full set of #AtkStates
 * that apply to an object at a given time. This set is not meant to be
 * modified, but rather created when #atk_object_ref_state_set() is called.
 * @class 
 */
class StateSet extends GObject.Object {

    // Own properties of Atk-1.0.Atk.StateSet

    static name: string
    static $gtype: GObject.GType<StateSet>

    // Constructors of Atk-1.0.Atk.StateSet

    constructor(config?: StateSet_ConstructProps) 
    /**
     * Creates a new empty state set.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new empty state set.
     * @constructor 
     */
    static new(): StateSet
    _init(config?: StateSet_ConstructProps): void
}

interface Util_ConstructProps extends GObject.Object_ConstructProps {
}

interface Util {

    // Own fields of Atk-1.0.Atk.Util

    parent: GObject.Object

    // Class property signals of Atk-1.0.Atk.Util

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * A set of ATK utility functions which are used to support event
 * registration of various types, and obtaining the 'root' accessible
 * of a process and information about the current ATK implementation
 * and toolkit version.
 * @class 
 */
class Util extends GObject.Object {

    // Own properties of Atk-1.0.Atk.Util

    static name: string
    static $gtype: GObject.GType<Util>

    // Constructors of Atk-1.0.Atk.Util

    constructor(config?: Util_ConstructProps) 
    _init(config?: Util_ConstructProps): void
}

interface ActionIface {

    // Own fields of Atk-1.0.Atk.ActionIface

    doAction: (action: Action, i: number) => boolean
    getNActions: (action: Action) => number
    getDescription: (action: Action, i: number) => string | null
    getName: (action: Action, i: number) => string | null
    getKeybinding: (action: Action, i: number) => string | null
    setDescription: (action: Action, i: number, desc: string) => boolean
    getLocalizedName: (action: Action, i: number) => string | null
}

/**
 * The #AtkAction interface should be supported by any object that can
 * perform one or more actions. The interface provides the standard
 * mechanism for an assistive technology to determine what those actions
 * are as well as tell the object to perform them. Any object that can
 * be manipulated should support this interface.
 * @record 
 */
abstract class ActionIface {

    // Own properties of Atk-1.0.Atk.ActionIface

    static name: string
}

interface Attribute {

    // Own fields of Atk-1.0.Atk.Attribute

    /**
     * The attribute name.
     * @field 
     */
    name: string
    /**
     * the value of the attribute, represented as a string.
     * @field 
     */
    value: string
}

/**
 * AtkAttribute is a string name/value pair representing a generic
 * attribute. This can be used to expose additional information from
 * an accessible object as a whole (see atk_object_get_attributes())
 * or an document (see atk_document_get_attributes()). In the case of
 * text attributes (see atk_text_get_default_attributes()),
 * #AtkTextAttribute enum defines all the possible text attribute
 * names. You can use atk_text_attribute_get_name() to get the string
 * name from the enum value. See also atk_text_attribute_for_name()
 * and atk_text_attribute_get_value() for more information.
 * 
 * A string name/value pair representing a generic attribute.
 * @record 
 */
class Attribute {

    // Own properties of Atk-1.0.Atk.Attribute

    static name: string

    // Constructors of Atk-1.0.Atk.Attribute

    /**
     * Frees the memory used by an #AtkAttributeSet, including all its
     * #AtkAttributes.
     * @param attribSet The #AtkAttributeSet to free
     */
    static setFree(attribSet: AttributeSet): void
}

interface ComponentIface {

    // Own fields of Atk-1.0.Atk.ComponentIface

    contains: (component: Component, x: number, y: number, coordType: CoordType) => boolean
    refAccessibleAtPoint: (component: Component, x: number, y: number, coordType: CoordType) => Object | null
    getExtents: (component: Component, coordType: CoordType) => [ /* x */ number, /* y */ number, /* width */ number, /* height */ number ]
    getPosition: (component: Component, coordType: CoordType) => [ /* x */ number, /* y */ number ]
    getSize: (component: Component) => [ /* width */ number, /* height */ number ]
    grabFocus: (component: Component) => boolean
    removeFocusHandler: (component: Component, handlerId: number) => void
    setExtents: (component: Component, x: number, y: number, width: number, height: number, coordType: CoordType) => boolean
    setPosition: (component: Component, x: number, y: number, coordType: CoordType) => boolean
    setSize: (component: Component, width: number, height: number) => boolean
    getLayer: (component: Component) => Layer
    getMdiZorder: (component: Component) => number
    boundsChanged: (component: Component, bounds: Rectangle) => void
    getAlpha: (component: Component) => number
    scrollTo: (component: Component, type: ScrollType) => boolean
    scrollToPoint: (component: Component, coords: CoordType, x: number, y: number) => boolean
}

/**
 * The AtkComponent interface should be supported by any object that is
 * rendered on the screen. The interface provides the standard mechanism
 * for an assistive technology to determine and set the graphical
 * representation of an object.
 * @record 
 */
abstract class ComponentIface {

    // Own properties of Atk-1.0.Atk.ComponentIface

    static name: string
}

interface DocumentIface {

    // Own fields of Atk-1.0.Atk.DocumentIface

    parent: GObject.TypeInterface
    getDocumentType: (document: Document) => string
    getDocument: (document: Document) => object | null
    getDocumentLocale: (document: Document) => string
    getDocumentAttributes: (document: Document) => AttributeSet
    getDocumentAttributeValue: (document: Document, attributeName: string) => string | null
    setDocumentAttribute: (document: Document, attributeName: string, attributeValue: string) => boolean
    getCurrentPageNumber: (document: Document) => number
    getPageCount: (document: Document) => number
}

abstract class DocumentIface {

    // Own properties of Atk-1.0.Atk.DocumentIface

    static name: string
}

interface EditableTextIface {

    // Own fields of Atk-1.0.Atk.EditableTextIface

    parentInterface: GObject.TypeInterface
    setRunAttributes: (text: EditableText, attribSet: AttributeSet, startOffset: number, endOffset: number) => boolean
    setTextContents: (text: EditableText, string: string) => void
    insertText: (text: EditableText, string: string, length: number, position: number) => void
    copyText: (text: EditableText, startPos: number, endPos: number) => void
    cutText: (text: EditableText, startPos: number, endPos: number) => void
    deleteText: (text: EditableText, startPos: number, endPos: number) => void
    pasteText: (text: EditableText, position: number) => void
}

abstract class EditableTextIface {

    // Own properties of Atk-1.0.Atk.EditableTextIface

    static name: string
}

interface GObjectAccessibleClass {

    // Own fields of Atk-1.0.Atk.GObjectAccessibleClass

    parentClass: ObjectClass
    pad1: Function
    pad2: Function
}

abstract class GObjectAccessibleClass {

    // Own properties of Atk-1.0.Atk.GObjectAccessibleClass

    static name: string
}

interface HyperlinkClass {

    // Own fields of Atk-1.0.Atk.HyperlinkClass

    parent: GObject.ObjectClass
    getUri: (link: Hyperlink, i: number) => string
    getObject: (link: Hyperlink, i: number) => Object
    getEndIndex: (link: Hyperlink) => number
    getStartIndex: (link: Hyperlink) => number
    isValid: (link: Hyperlink) => boolean
    getNAnchors: (link: Hyperlink) => number
    linkState: (link: Hyperlink) => number
    isSelectedLink: (link: Hyperlink) => boolean
    linkActivated: (link: Hyperlink) => void
    pad1: Function
}

abstract class HyperlinkClass {

    // Own properties of Atk-1.0.Atk.HyperlinkClass

    static name: string
}

interface HyperlinkImplIface {

    // Own fields of Atk-1.0.Atk.HyperlinkImplIface

    parent: GObject.TypeInterface
    getHyperlink: (impl: HyperlinkImpl) => Hyperlink
}

abstract class HyperlinkImplIface {

    // Own properties of Atk-1.0.Atk.HyperlinkImplIface

    static name: string
}

interface HypertextIface {

    // Own fields of Atk-1.0.Atk.HypertextIface

    parent: GObject.TypeInterface
    getLink: (hypertext: Hypertext, linkIndex: number) => Hyperlink
    getNLinks: (hypertext: Hypertext) => number
    getLinkIndex: (hypertext: Hypertext, charIndex: number) => number
    linkSelected: (hypertext: Hypertext, linkIndex: number) => void
}

abstract class HypertextIface {

    // Own properties of Atk-1.0.Atk.HypertextIface

    static name: string
}

interface ImageIface {

    // Own fields of Atk-1.0.Atk.ImageIface

    parent: GObject.TypeInterface
    getImagePosition: (image: Image, coordType: CoordType) => [ /* x */ number, /* y */ number ]
    getImageDescription: (image: Image) => string
    getImageSize: (image: Image) => [ /* width */ number, /* height */ number ]
    setImageDescription: (image: Image, description: string) => boolean
    getImageLocale: (image: Image) => string | null
}

abstract class ImageIface {

    // Own properties of Atk-1.0.Atk.ImageIface

    static name: string
}

interface Implementor {

    // Owm methods of Atk-1.0.Atk.Implementor

    /**
     * Gets a reference to an object's #AtkObject implementation, if
     * the object implements #AtkObjectIface
     */
    refAccessible(): Object
}

class Implementor {

    // Own properties of Atk-1.0.Atk.Implementor

    static name: string
}

interface KeyEventStruct {

    // Own fields of Atk-1.0.Atk.KeyEventStruct

    /**
     * An AtkKeyEventType, generally one of ATK_KEY_EVENT_PRESS or ATK_KEY_EVENT_RELEASE
     * @field 
     */
    type: number
    /**
     * A bitmask representing the state of the modifier keys immediately after the event takes place.
     * The meaning of the bits is currently defined to match the bitmask used by GDK in
     * GdkEventType.state, see
     * http://developer.gnome.org/doc/API/2.0/gdk/gdk-Event-Structures.html#GdkEventKey
     * @field 
     */
    state: number
    /**
     * A guint representing a keysym value corresponding to those used by GDK and X11: see
     * /usr/X11/include/keysymdef.h.
     * @field 
     */
    keyval: number
    /**
     * The length of member #string.
     * @field 
     */
    length: number
    /**
     * A string containing one of the following: either a string approximating the text that would
     * result from this keypress, if the key is a control or graphic character, or a symbolic name for this keypress.
     * Alphanumeric and printable keys will have the symbolic key name in this string member, for instance "A". "0",
     * "semicolon", "aacute".  Keypad keys have the prefix "KP".
     * @field 
     */
    string: string
    /**
     * The raw hardware code that generated the key event.  This field is raraly useful.
     * @field 
     */
    keycode: number
    /**
     * A timestamp in milliseconds indicating when the event occurred.
     * These timestamps are relative to a starting point which should be considered arbitrary,
     * and only used to compare the dispatch times of events to one another.
     * @field 
     */
    timestamp: number
}

/**
 * Encapsulates information about a key event.
 * @record 
 */
class KeyEventStruct {

    // Own properties of Atk-1.0.Atk.KeyEventStruct

    static name: string
}

interface MiscClass {

    // Own fields of Atk-1.0.Atk.MiscClass

    parent: GObject.ObjectClass
    threadsEnter: (misc: Misc) => void
    threadsLeave: (misc: Misc) => void
    vfuncs: object[]
}

/**
 * Usage of AtkMisc is deprecated since 2.12 and heavily discouraged.
 * @record 
 */
abstract class MiscClass {

    // Own properties of Atk-1.0.Atk.MiscClass

    static name: string
}

interface NoOpObjectClass {

    // Own fields of Atk-1.0.Atk.NoOpObjectClass

    parentClass: ObjectClass
}

abstract class NoOpObjectClass {

    // Own properties of Atk-1.0.Atk.NoOpObjectClass

    static name: string
}

interface NoOpObjectFactoryClass {

    // Own fields of Atk-1.0.Atk.NoOpObjectFactoryClass

    parentClass: ObjectFactoryClass
}

abstract class NoOpObjectFactoryClass {

    // Own properties of Atk-1.0.Atk.NoOpObjectFactoryClass

    static name: string
}

interface ObjectClass {

    // Own fields of Atk-1.0.Atk.ObjectClass

    parent: GObject.ObjectClass
    getName: (accessible: Object) => string
    getDescription: (accessible: Object) => string
    getParent: (accessible: Object) => Object
    getNChildren: (accessible: Object) => number
    getIndexInParent: (accessible: Object) => number
    refRelationSet: (accessible: Object) => RelationSet
    getRole: (accessible: Object) => Role
    getLayer: (accessible: Object) => Layer
    getMdiZorder: (accessible: Object) => number
    refStateSet: (accessible: Object) => StateSet
    setName: (accessible: Object, name: string) => void
    setDescription: (accessible: Object, description: string) => void
    setParent: (accessible: Object, parent: Object) => void
    setRole: (accessible: Object, role: Role) => void
    removePropertyChangeHandler: (accessible: Object, handlerId: number) => void
    initialize: (accessible: Object, data: object | null) => void
    childrenChanged: (accessible: Object, changeIndex: number, changedChild: object | null) => void
    focusEvent: (accessible: Object, focusIn: boolean) => void
    propertyChange: (accessible: Object, values: PropertyValues) => void
    stateChange: (accessible: Object, name: string, stateSet: boolean) => void
    visibleDataChanged: (accessible: Object) => void
    activeDescendantChanged: (accessible: Object, child: object | null) => void
    getAttributes: (accessible: Object) => AttributeSet
    getObjectLocale: (accessible: Object) => string
    pad1: Function
}

abstract class ObjectClass {

    // Own properties of Atk-1.0.Atk.ObjectClass

    static name: string
}

interface ObjectFactoryClass {

    // Own fields of Atk-1.0.Atk.ObjectFactoryClass

    parentClass: GObject.ObjectClass
    invalidate: (factory: ObjectFactory) => void
    getAccessibleType: () => GObject.GType
    pad1: Function
    pad2: Function
}

abstract class ObjectFactoryClass {

    // Own properties of Atk-1.0.Atk.ObjectFactoryClass

    static name: string
}

interface PlugClass {

    // Own fields of Atk-1.0.Atk.PlugClass

    parentClass: ObjectClass
    getObjectId: (obj: Plug) => string
}

abstract class PlugClass {

    // Own properties of Atk-1.0.Atk.PlugClass

    static name: string
}

interface PropertyValues {

    // Own fields of Atk-1.0.Atk.PropertyValues

    /**
     * The name of the ATK property which has changed.
     * @field 
     */
    propertyName: string
    /**
     * NULL. This field is not used anymore.
     * @field 
     */
    oldValue: any
    /**
     * The new value of the named property.
     * @field 
     */
    newValue: any
}

/**
 * Note: `old_value` field of #AtkPropertyValues will not contain a
 * valid value. This is a field defined with the purpose of contain
 * the previous value of the property, but is not used anymore.
 * @record 
 */
class PropertyValues {

    // Own properties of Atk-1.0.Atk.PropertyValues

    static name: string
}

interface Range {

    // Owm methods of Atk-1.0.Atk.Range

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
}

/**
 * #AtkRange are used on #AtkValue, in order to represent the full
 * range of a given component (for example an slider or a range
 * control), or to define each individual subrange this full range is
 * splitted if available. See #AtkValue documentation for further
 * details.
 * @record 
 */
class Range {

    // Own properties of Atk-1.0.Atk.Range

    static name: string

    // Constructors of Atk-1.0.Atk.Range

    /**
     * Creates a new #AtkRange.
     * @constructor 
     * @param lowerLimit inferior limit for this range
     * @param upperLimit superior limit for this range
     * @param description human readable description of this range.
     */
    constructor(lowerLimit: number, upperLimit: number, description: string) 
    /**
     * Creates a new #AtkRange.
     * @constructor 
     * @param lowerLimit inferior limit for this range
     * @param upperLimit superior limit for this range
     * @param description human readable description of this range.
     */
    static new(lowerLimit: number, upperLimit: number, description: string): Range
}

interface Rectangle {

    // Own fields of Atk-1.0.Atk.Rectangle

    /**
     * X coordinate of the left side of the rectangle.
     * @field 
     */
    x: number
    /**
     * Y coordinate of the top side of the rectangle.
     * @field 
     */
    y: number
    /**
     * width of the rectangle.
     * @field 
     */
    width: number
    /**
     * height of the rectangle.
     * @field 
     */
    height: number
}

/**
 * A data structure for holding a rectangle. Those coordinates are
 * relative to the component top-level parent.
 * @record 
 */
class Rectangle {

    // Own properties of Atk-1.0.Atk.Rectangle

    static name: string
}

interface RegistryClass {

    // Own fields of Atk-1.0.Atk.RegistryClass

    parentClass: GObject.ObjectClass
}

abstract class RegistryClass {

    // Own properties of Atk-1.0.Atk.RegistryClass

    static name: string
}

interface RelationClass {

    // Own fields of Atk-1.0.Atk.RelationClass

    parent: GObject.ObjectClass
}

abstract class RelationClass {

    // Own properties of Atk-1.0.Atk.RelationClass

    static name: string
}

interface RelationSetClass {

    // Own fields of Atk-1.0.Atk.RelationSetClass

    parent: GObject.ObjectClass
    pad1: Function
    pad2: Function
}

abstract class RelationSetClass {

    // Own properties of Atk-1.0.Atk.RelationSetClass

    static name: string
}

interface SelectionIface {

    // Own fields of Atk-1.0.Atk.SelectionIface

    parent: GObject.TypeInterface
    addSelection: (selection: Selection, i: number) => boolean
    clearSelection: (selection: Selection) => boolean
    refSelection: (selection: Selection, i: number) => Object | null
    getSelectionCount: (selection: Selection) => number
    isChildSelected: (selection: Selection, i: number) => boolean
    removeSelection: (selection: Selection, i: number) => boolean
    selectAllSelection: (selection: Selection) => boolean
    selectionChanged: (selection: Selection) => void
}

abstract class SelectionIface {

    // Own properties of Atk-1.0.Atk.SelectionIface

    static name: string
}

interface SocketClass {

    // Own fields of Atk-1.0.Atk.SocketClass

    parentClass: ObjectClass
    embed: (obj: Socket, plugId: string) => void
}

abstract class SocketClass {

    // Own properties of Atk-1.0.Atk.SocketClass

    static name: string
}

interface StateSetClass {

    // Own fields of Atk-1.0.Atk.StateSetClass

    parent: GObject.ObjectClass
}

abstract class StateSetClass {

    // Own properties of Atk-1.0.Atk.StateSetClass

    static name: string
}

interface StreamableContentIface {

    // Own fields of Atk-1.0.Atk.StreamableContentIface

    parent: GObject.TypeInterface
    getNMimeTypes: (streamable: StreamableContent) => number
    getMimeType: (streamable: StreamableContent, i: number) => string
    getStream: (streamable: StreamableContent, mimeType: string) => GLib.IOChannel
    getUri: (streamable: StreamableContent, mimeType: string) => string | null
    pad1: Function
    pad2: Function
    pad3: Function
}

abstract class StreamableContentIface {

    // Own properties of Atk-1.0.Atk.StreamableContentIface

    static name: string
}

interface TableCellIface {

    // Own fields of Atk-1.0.Atk.TableCellIface

    getColumnSpan: (cell: TableCell) => number
    getColumnHeaderCells: (cell: TableCell) => Object[]
    getPosition: (cell: TableCell) => [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    getRowSpan: (cell: TableCell) => number
    getRowHeaderCells: (cell: TableCell) => Object[]
    getRowColumnSpan: (cell: TableCell) => [ /* returnType */ boolean, /* row */ number, /* column */ number, /* rowSpan */ number, /* columnSpan */ number ]
    getTable: (cell: TableCell) => Object
}

/**
 * AtkTableCell is an interface for cells inside an #AtkTable.
 * @record 
 */
abstract class TableCellIface {

    // Own properties of Atk-1.0.Atk.TableCellIface

    static name: string
}

interface TableIface {

    // Own fields of Atk-1.0.Atk.TableIface

    parent: GObject.TypeInterface
    refAt: (table: Table, row: number, column: number) => Object
    getIndexAt: (table: Table, row: number, column: number) => number
    getColumnAtIndex: (table: Table, index: number) => number
    getRowAtIndex: (table: Table, index: number) => number
    getNColumns: (table: Table) => number
    getNRows: (table: Table) => number
    getColumnExtentAt: (table: Table, row: number, column: number) => number
    getRowExtentAt: (table: Table, row: number, column: number) => number
    getCaption: (table: Table) => Object | null
    getColumnDescription: (table: Table, column: number) => string
    getColumnHeader: (table: Table, column: number) => Object | null
    getRowDescription: (table: Table, row: number) => string | null
    getRowHeader: (table: Table, row: number) => Object | null
    getSummary: (table: Table) => Object
    setCaption: (table: Table, caption: Object) => void
    setColumnDescription: (table: Table, column: number, description: string) => void
    setColumnHeader: (table: Table, column: number, header: Object) => void
    setRowDescription: (table: Table, row: number, description: string) => void
    setRowHeader: (table: Table, row: number, header: Object) => void
    setSummary: (table: Table, accessible: Object) => void
    getSelectedColumns: (table: Table, selected: number) => number
    getSelectedRows: (table: Table, selected: number) => number
    isColumnSelected: (table: Table, column: number) => boolean
    isRowSelected: (table: Table, row: number) => boolean
    isSelected: (table: Table, row: number, column: number) => boolean
    addRowSelection: (table: Table, row: number) => boolean
    removeRowSelection: (table: Table, row: number) => boolean
    addColumnSelection: (table: Table, column: number) => boolean
    removeColumnSelection: (table: Table, column: number) => boolean
    rowInserted: (table: Table, row: number, numInserted: number) => void
    columnInserted: (table: Table, column: number, numInserted: number) => void
    rowDeleted: (table: Table, row: number, numDeleted: number) => void
    columnDeleted: (table: Table, column: number, numDeleted: number) => void
    rowReordered: (table: Table) => void
    columnReordered: (table: Table) => void
    modelChanged: (table: Table) => void
}

abstract class TableIface {

    // Own properties of Atk-1.0.Atk.TableIface

    static name: string
}

interface TextIface {

    // Own fields of Atk-1.0.Atk.TextIface

    parent: GObject.TypeInterface
    getText: (text: Text, startOffset: number, endOffset: number) => string
    getTextAfterOffset: (text: Text, offset: number, boundaryType: TextBoundary) => [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getTextAtOffset: (text: Text, offset: number, boundaryType: TextBoundary) => [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getCharacterAtOffset: (text: Text, offset: number) => string
    getTextBeforeOffset: (text: Text, offset: number, boundaryType: TextBoundary) => [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getCaretOffset: (text: Text) => number
    getRunAttributes: (text: Text, offset: number) => [ /* returnType */ AttributeSet, /* startOffset */ number, /* endOffset */ number ]
    getDefaultAttributes: (text: Text) => AttributeSet
    getCharacterExtents: (text: Text, offset: number, coords: CoordType) => [ /* x */ number, /* y */ number, /* width */ number, /* height */ number ]
    getCharacterCount: (text: Text) => number
    getOffsetAtPoint: (text: Text, x: number, y: number, coords: CoordType) => number
    getNSelections: (text: Text) => number
    getSelection: (text: Text, selectionNum: number) => [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    addSelection: (text: Text, startOffset: number, endOffset: number) => boolean
    removeSelection: (text: Text, selectionNum: number) => boolean
    setSelection: (text: Text, selectionNum: number, startOffset: number, endOffset: number) => boolean
    setCaretOffset: (text: Text, offset: number) => boolean
    textChanged: (text: Text, position: number, length: number) => void
    textCaretMoved: (text: Text, location: number) => void
    textSelectionChanged: (text: Text) => void
    textAttributesChanged: (text: Text) => void
    getRangeExtents: (text: Text, startOffset: number, endOffset: number, coordType: CoordType) => /* rect */ TextRectangle
    getBoundedRanges: (text: Text, rect: TextRectangle, coordType: CoordType, xClipType: TextClipType, yClipType: TextClipType) => TextRange[]
    getStringAtOffset: (text: Text, offset: number, granularity: TextGranularity) => [ /* returnType */ string | null, /* startOffset */ number, /* endOffset */ number ]
    scrollSubstringTo: (text: Text, startOffset: number, endOffset: number, type: ScrollType) => boolean
    scrollSubstringToPoint: (text: Text, startOffset: number, endOffset: number, coords: CoordType, x: number, y: number) => boolean
}

abstract class TextIface {

    // Own properties of Atk-1.0.Atk.TextIface

    static name: string
}

interface TextRange {

    // Own fields of Atk-1.0.Atk.TextRange

    /**
     * A rectangle giving the bounds of the text range
     * @field 
     */
    bounds: TextRectangle
    /**
     * The start offset of a AtkTextRange
     * @field 
     */
    startOffset: number
    /**
     * The end offset of a AtkTextRange
     * @field 
     */
    endOffset: number
    /**
     * The text in the text range
     * @field 
     */
    content: string
}

/**
 * A structure used to describe a text range.
 * @record 
 */
class TextRange {

    // Own properties of Atk-1.0.Atk.TextRange

    static name: string
}

interface TextRectangle {

    // Own fields of Atk-1.0.Atk.TextRectangle

    /**
     * The horizontal coordinate of a rectangle
     * @field 
     */
    x: number
    /**
     * The vertical coordinate of a rectangle
     * @field 
     */
    y: number
    /**
     * The width of a rectangle
     * @field 
     */
    width: number
    /**
     * The height of a rectangle
     * @field 
     */
    height: number
}

/**
 * A structure used to store a rectangle used by AtkText.
 * @record 
 */
class TextRectangle {

    // Own properties of Atk-1.0.Atk.TextRectangle

    static name: string
}

interface UtilClass {

    // Own fields of Atk-1.0.Atk.UtilClass

    parent: GObject.ObjectClass
    removeGlobalEventListener: (listenerId: number) => void
    removeKeyEventListener: (listenerId: number) => void
    getToolkitName: () => string
    getToolkitVersion: () => string
}

abstract class UtilClass {

    // Own properties of Atk-1.0.Atk.UtilClass

    static name: string
}

interface ValueIface {

    // Own fields of Atk-1.0.Atk.ValueIface

    parent: GObject.TypeInterface
    getCurrentValue: (obj: Value) => /* value */ any
    getMaximumValue: (obj: Value) => /* value */ any
    getMinimumValue: (obj: Value) => /* value */ any
    setCurrentValue: (obj: Value, value: any) => boolean
    getMinimumIncrement: (obj: Value) => /* value */ any
    getValueAndText: (obj: Value) => [ /* value */ number, /* text */ string ]
    getRange: (obj: Value) => Range | null
    getIncrement: (obj: Value) => number
    getSubRanges: (obj: Value) => Range[]
    setValue: (obj: Value, newValue: number) => void
}

abstract class ValueIface {

    // Own properties of Atk-1.0.Atk.ValueIface

    static name: string
}

interface WindowIface {

    // Own fields of Atk-1.0.Atk.WindowIface

    parent: GObject.TypeInterface
}

abstract class WindowIface {

    // Own properties of Atk-1.0.Atk.WindowIface

    static name: string
}

    type AttributeSet = GLib.SList
    type State = number
}
export default Atk;