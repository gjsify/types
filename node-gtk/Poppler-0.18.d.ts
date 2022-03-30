/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Poppler-0.18
 */

import type cairo from './cairo-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Poppler {

/**
 * Layer actions
 */
enum ActionLayerAction {
    /**
     * set layer visibility on
     */
    ON,
    /**
     * set layer visibility off
     */
    OFF,
    /**
     * reverse the layer visibility state
     */
    TOGGLE,
}
/**
 * Movie operations
 */
enum ActionMovieOperation {
    /**
     * play movie
     */
    PLAY,
    /**
     * pause playing movie
     */
    PAUSE,
    /**
     * resume paused movie
     */
    RESUME,
    /**
     * stop playing movie
     */
    STOP,
}
/**
 * Action types
 */
enum ActionType {
    /**
     * unknown action
     */
    UNKNOWN,
    /**
     * no action specified
     */
    NONE,
    /**
     * go to destination
     */
    GOTO_DEST,
    /**
     * go to destination in another document
     */
    GOTO_REMOTE,
    /**
     * launch app (or open document
     */
    LAUNCH,
    /**
     * URI
     */
    URI,
    /**
     * predefined action
     */
    NAMED,
    /**
     * play movies. Since 0.14
     */
    MOVIE,
    /**
     * play multimedia content. Since 0.14
     */
    RENDITION,
    /**
     * state of layer. Since 0.14
     */
    OCG_STATE,
    /**
     * Javascript. Since 0.18
     */
    JAVASCRIPT,
    /**
     * resets form. Since 0.90
     */
    RESET_FORM,
}
/**
 * Form field additional action types to be passed to `poppler_form_field_get_additional_action`
 */
enum AdditionalActionType {
    /**
     * The action to be performed when the user modifies the field.
     */
    FIELD_MODIFIED,
    /**
     * The action to be performed before the field is formatted to
     * display its value.
     */
    FORMAT_FIELD,
    /**
     * The action to be performed when the field value changes.
     */
    VALIDATE_FIELD,
    /**
     * The action to be performed when the field needs to be
     * recalculated.
     */
    CALCULATE_FIELD,
}
enum AnnotExternalDataType {
    TODO_3D,
    UNKNOWN,
}
enum AnnotFreeTextQuadding {
    LEFT_JUSTIFIED,
    CENTERED,
    RIGHT_JUSTIFIED,
}
enum AnnotMarkupReplyType {
    R,
    GROUP,
}
enum AnnotTextState {
    MARKED,
    UNMARKED,
    ACCEPTED,
    REJECTED,
    CANCELLED,
    COMPLETED,
    NONE,
    UNKNOWN,
}
enum AnnotType {
    UNKNOWN,
    TEXT,
    LINK,
    FREE_TEXT,
    LINE,
    SQUARE,
    CIRCLE,
    POLYGON,
    POLY_LINE,
    HIGHLIGHT,
    UNDERLINE,
    SQUIGGLY,
    STRIKE_OUT,
    STAMP,
    CARET,
    INK,
    POPUP,
    FILE_ATTACHMENT,
    SOUND,
    MOVIE,
    WIDGET,
    SCREEN,
    PRINTER_MARK,
    TRAP_NET,
    WATERMARK,
    TODO_3D,
}
/**
 * Backend codes returned by poppler_get_backend().
 */
enum Backend {
    /**
     * Unknown backend
     */
    UNKNOWN,
    /**
     * Splash backend
     */
    SPLASH,
    /**
     * Cairo backend
     */
    CAIRO,
}
/**
 * Destination types
 */
enum DestType {
    /**
     * unknown destination
     */
    UNKNOWN,
    /**
     * go to page with coordinates (left, top)
     * positioned at the upper-left corner of the window and the contents of
     * the page magnified by the factor zoom
     */
    XYZ,
    /**
     * go to page with its contents magnified just
     * enough to fit the entire page within the window both horizontally and
     * vertically
     */
    FIT,
    /**
     * go to page with the vertical coordinate top
     * positioned at the top edge of the window and the contents of the page
     * magnified just enough to fit the entire width of the page within the window
     */
    FITH,
    /**
     * go to page with the horizontal coordinate
     * left positioned at the left edge of the window and the contents of the
     * page magnified just enough to fit the entire height of the page within the window
     */
    FITV,
    /**
     * go to page with its contents magnified just
     * enough to fit the rectangle specified by the coordinates left, bottom,
     * right, and top entirely within the window both horizontally and vertically
     */
    FITR,
    /**
     * go to page with its contents magnified just enough to fit
     * its bounding box entirely within the window both horizontally and vertically
     */
    FITB,
    /**
     * go to page with the vertical
     * coordinate top positioned at the top edge of the window and the
     * contents of the page magnified just enough to fit the entire width of its
     * bounding box within the window
     */
    FITBH,
    /**
     * go to page with the horizontal
     * coordinate left positioned at the left edge of the window and the
     * contents of the page magnified just enough to fit the entire height of its
     * bounding box within the window
     */
    FITBV,
    /**
     * got to page specified by a name. See poppler_document_find_dest()
     */
    NAMED,
}
/**
 * Error codes returned by #PopplerDocument
 */
enum Error {
    /**
     * Generic error when a document operation fails
     */
    INVALID,
    /**
     * Document is encrypted
     */
    ENCRYPTED,
    /**
     * File could not be opened for writing when saving document
     */
    OPEN_FILE,
    /**
     * Failed to read the document catalog
     */
    BAD_CATALOG,
    /**
     * Document is damaged
     */
    DAMAGED,
}
/**
 * Font types
 */
enum FontType {
    /**
     * unknown font type
     */
    UNKNOWN,
    /**
     * Type 1 font type
     */
    TYPE1,
    /**
     * Type 1 font type embedded in Compact Font Format (CFF) font program
     */
    TYPE1C,
    /**
     * Type 1 font type embedded in OpenType font program
     */
    TYPE1COT,
    /**
     * A font type that is defined with PDF graphics operators
     */
    TYPE3,
    /**
     * TrueType font type
     */
    TRUETYPE,
    /**
     * TrueType font type embedded in OpenType font program
     */
    TRUETYPEOT,
    /**
     * CIDFont type based on Type 1 font technology
     */
    CID_TYPE0,
    /**
     * CIDFont type based on Type 1 font technology embedded in CFF font program
     */
    CID_TYPE0C,
    /**
     * CIDFont type based on Type 1 font technology embedded in OpenType font program
     */
    CID_TYPE0COT,
    /**
     * CIDFont type based on TrueType font technology
     */
    CID_TYPE2,
    /**
     * CIDFont type based on TrueType font technology embedded in OpenType font program
     */
    CID_TYPE2OT,
}
enum FormButtonType {
    PUSH,
    CHECK,
    RADIO,
}
enum FormChoiceType {
    COMBO,
    LIST,
}
enum FormFieldType {
    UNKNOWN,
    BUTTON,
    TEXT,
    CHOICE,
    SIGNATURE,
}
enum FormTextType {
    NORMAL,
    MULTILINE,
    FILE_SELECT,
}
/**
 * Play mode enum values.
 */
enum MoviePlayMode {
    /**
     * the movie should be played once and controls should be closed at the end.
     */
    ONCE,
    /**
     * the movie should be played once, but controls should be left open.
     */
    OPEN,
    /**
     * the movie should be played in loop, until manually stopped.
     */
    REPEAT,
    /**
     * the movie should be played forward and backward, forward and backward,
     *   and so forth, until manually stopped.
     */
    PALINDROME,
}
/**
 * PDF Subtype Conformance
 */
enum PDFConformance {
    /**
     * Null
     */
    UNSET,
    /**
     * Level A (accessible) conformance (PDF/A)
     */
    A,
    /**
     * Level B (basic) conformance (PDF/A)
     */
    B,
    /**
     * Level G (external graphical content) (PDF/X)
     */
    G,
    /**
     * Level N (external ICC Profile) (PDF/X)
     */
    N,
    /**
     * Level P (ICC Profile) (PDF/X)
     */
    P,
    /**
     * Level PG (conjunction of P and G) (PDF/X)
     */
    PG,
    /**
     * Level U (Unicode) conformance (PDF/A)
     */
    U,
    /**
     * No conformance level available
     */
    NONE,
}
/**
 * PDF Subtype Part
 */
enum PDFPart {
    /**
     * Null
     */
    UNSET,
    /**
     * 1
     */
    TODO_1,
    /**
     * 2
     */
    TODO_2,
    /**
     * 3
     */
    TODO_3,
    /**
     * 4
     */
    TODO_4,
    /**
     * 5
     */
    TODO_5,
    /**
     * 6
     */
    TODO_6,
    /**
     * 7
     */
    TODO_7,
    /**
     * 8
     */
    TODO_8,
    /**
     * No part available
     */
    NONE,
}
/**
 * PDF Subtype
 */
enum PDFSubtype {
    /**
     * Null
     */
    UNSET,
    /**
     * ISO 19005 - Document management -- Electronic document file format for long-term preservation (PDF/A)
     */
    PDF_A,
    /**
     * ISO 24517 - Document management -- Engineering document format using PDF (PDF/E)
     */
    PDF_E,
    /**
     * ISO 14289 - Document management applications -- Electronic document file format enhancement for accessibility (PDF/UA)
     */
    PDF_UA,
    /**
     * ISO 16612 - Graphic technology -- Variable data exchange (PDF/VT)
     */
    PDF_VT,
    /**
     * ISO 15930 - Graphic technology -- Prepress digital data exchange (PDF/X)
     */
    PDF_X,
    /**
     * Not compliant with the above standards
     */
    NONE,
}
/**
 * Page layout types
 */
enum PageLayout {
    /**
     * no specific layout set
     */
    UNSET,
    /**
     * one page at a time
     */
    SINGLE_PAGE,
    /**
     * pages in one column
     */
    ONE_COLUMN,
    /**
     * pages in two columns with odd numbered pages on the left
     */
    TWO_COLUMN_LEFT,
    /**
     * pages in two columns with odd numbered pages on the right
     */
    TWO_COLUMN_RIGHT,
    /**
     * two pages at a time with odd numbered pages on the left
     */
    TWO_PAGE_LEFT,
    /**
     * two pages at a time with odd numbered pages on the right
     */
    TWO_PAGE_RIGHT,
}
/**
 * Page modes
 */
enum PageMode {
    /**
     * no specific mode set
     */
    UNSET,
    /**
     * neither document outline nor thumbnails visible
     */
    NONE,
    /**
     * document outline visible
     */
    USE_OUTLINES,
    /**
     * thumbnails visible
     */
    USE_THUMBS,
    /**
     * full-screen mode
     */
    FULL_SCREEN,
    /**
     * layers panel visible
     */
    USE_OC,
    /**
     * attachments panel visible
     */
    USE_ATTACHMENTS,
}
/**
 * Page transition alignment types for #POPPLER_PAGE_TRANSITION_SPLIT
 * and #POPPLER_PAGE_TRANSITION_BLINDS transition types
 */
enum PageTransitionAlignment {
    /**
     * horizontal dimension
     */
    HORIZONTAL,
    /**
     * vertical dimension
     */
    VERTICAL,
}
/**
 * Page transition direction types for #POPPLER_PAGE_TRANSITION_SPLIT,
 * #POPPLER_PAGE_TRANSITION_BOX and #POPPLER_PAGE_TRANSITION_FLY transition types
 */
enum PageTransitionDirection {
    /**
     * inward from the edges of the page
     */
    INWARD,
    /**
     * outward from the center of the page
     */
    OUTWARD,
}
/**
 * Page transition types
 */
enum PageTransitionType {
    /**
     * the new page replace the old one
     */
    REPLACE,
    /**
     * two lines sweep across the screen, revealing the new page
     */
    SPLIT,
    /**
     * multiple lines, evenly spaced across the screen, synchronously
     * sweep in the same direction to reveal the new page
     */
    BLINDS,
    /**
     * a rectangular box sweeps inward from the edges of the page or
     * outward from the center revealing the new page
     */
    BOX,
    /**
     * a single line sweeps across the screen from one edge to the other
     * revealing the new page
     */
    WIPE,
    /**
     * the old page dissolves gradually to reveal the new one
     */
    DISSOLVE,
    /**
     * similar to #POPPLER_PAGE_TRANSITION_DISSOLVE, except that the effect
     * sweeps across the page in a wide band moving from one side of the screen to the other
     */
    GLITTER,
    /**
     * changes are flown out or in to or from a location that is offscreen
     */
    FLY,
    /**
     * the old page slides off the screen while the new page slides in
     */
    PUSH,
    /**
     * the new page slides on to the screen covering the old page
     */
    COVER,
    /**
     * the old page slides off the screen uncovering the new page
     */
    UNCOVER,
    /**
     * the new page gradually becomes visible through the old one
     */
    FADE,
}
/**
 * Duplex viewer preference
 */
enum PrintDuplex {
    /**
     * No preference on duplex printing
     */
    NONE,
    /**
     * Print single-sided
     */
    SIMPLEX,
    /**
     * Duplex and flip on the short edge of the sheet
     */
    DUPLEX_FLIP_SHORT_EDGE,
    /**
     * Duplex and flip on the long edge of the sheet
     */
    DUPLEX_FLIP_LONG_EDGE,
}
/**
 * PrintScaling viewer preference
 */
enum PrintScaling {
    /**
     * application's default page scaling
     */
    APP_DEFAULT,
    /**
     * no page scaling
     */
    NONE,
}
/**
 * Selection styles
 */
enum SelectionStyle {
    /**
     * glyph is the minimum unit for selection
     */
    GLYPH,
    /**
     * word is the minimum unit for selection
     */
    WORD,
    /**
     * line is the minimum unit for selection
     */
    LINE,
}
enum StructureBlockAlign {
    BEFORE,
    MIDDLE,
    AFTER,
    JUSTIFY,
}
enum StructureBorderStyle {
    NONE,
    HIDDEN,
    DOTTED,
    DASHED,
    SOLID,
    DOUBLE,
    GROOVE,
    INSET,
    OUTSET,
}
enum StructureElementKind {
    CONTENT,
    OBJECT_REFERENCE,
    DOCUMENT,
    PART,
    ARTICLE,
    SECTION,
    DIV,
    SPAN,
    QUOTE,
    NOTE,
    REFERENCE,
    BIBENTRY,
    CODE,
    LINK,
    ANNOT,
    BLOCKQUOTE,
    CAPTION,
    NONSTRUCT,
    TOC,
    TOC_ITEM,
    INDEX,
    PRIVATE,
    PARAGRAPH,
    HEADING,
    HEADING_1,
    HEADING_2,
    HEADING_3,
    HEADING_4,
    HEADING_5,
    HEADING_6,
    LIST,
    LIST_ITEM,
    LIST_LABEL,
    LIST_BODY,
    TABLE,
    TABLE_ROW,
    TABLE_HEADING,
    TABLE_DATA,
    TABLE_HEADER,
    TABLE_FOOTER,
    TABLE_BODY,
    RUBY,
    RUBY_BASE_TEXT,
    RUBY_ANNOT_TEXT,
    RUBY_PUNCTUATION,
    WARICHU,
    WARICHU_TEXT,
    WARICHU_PUNCTUATION,
    FIGURE,
    FORMULA,
    FORM,
}
enum StructureFormRole {
    UNDEFINED,
    RADIO_BUTTON,
    PUSH_BUTTON,
    TEXT_VALUE,
    CHECKBOX,
}
enum StructureFormState {
    ON,
    OFF,
    NEUTRAL,
}
enum StructureGlyphOrientation {
    AUTO,
    TODO_0,
    TODO_90,
    TODO_180,
    TODO_270,
}
enum StructureInlineAlign {
    START,
    CENTER,
    END,
}
enum StructureListNumbering {
    NONE,
    DISC,
    CIRCLE,
    SQUARE,
    DECIMAL,
    UPPER_ROMAN,
    LOWER_ROMAN,
    UPPER_ALPHA,
    LOWER_ALPHA,
}
enum StructurePlacement {
    BLOCK,
    INLINE,
    BEFORE,
    START,
    END,
}
enum StructureRubyAlign {
    START,
    CENTER,
    END,
    JUSTIFY,
    DISTRIBUTE,
}
enum StructureRubyPosition {
    BEFORE,
    AFTER,
    WARICHU,
    INLINE,
}
enum StructureTableScope {
    ROW,
    COLUMN,
    BOTH,
}
enum StructureTextAlign {
    START,
    CENTER,
    END,
    JUSTIFY,
}
enum StructureTextDecoration {
    NONE,
    UNDERLINE,
    OVERLINE,
    LINETHROUGH,
}
enum StructureWritingMode {
    LR_TB,
    RL_TB,
    TB_RL,
}
enum AnnotFlag {
    UNKNOWN,
    INVISIBLE,
    HIDDEN,
    PRINT,
    NO_ZOOM,
    NO_ROTATE,
    NO_VIEW,
    READ_ONLY,
    LOCKED,
    TOGGLE_NO_VIEW,
    LOCKED_CONTENTS,
}
/**
 * Flags using while searching text in a page
 */
enum FindFlags {
    /**
     * use default search settings
     */
    DEFAULT,
    /**
     * do case sensitive search
     */
    CASE_SENSITIVE,
    /**
     * search backwards
     */
    BACKWARDS,
    /**
     * search only whole words
     */
    WHOLE_WORDS_ONLY,
    /**
     * do diacritics insensitive search,
     * i.e. ignore accents, umlauts, diaeresis,etc. while matching. This
     * option will be ignored if the search term is not pure ascii. Since 0.73.
     */
    IGNORE_DIACRITICS,
}
/**
 * Permissions
 */
enum Permissions {
    /**
     * document can be printer
     */
    OK_TO_PRINT,
    /**
     * document contents can be modified
     */
    OK_TO_MODIFY,
    /**
     * document can be copied
     */
    OK_TO_COPY,
    /**
     * annotations can added to the document
     */
    OK_TO_ADD_NOTES,
    /**
     * interactive form fields can be filled in
     */
    OK_TO_FILL_FORM,
    /**
     * extract text and graphics
     * (in support of accessibility to users with disabilities or for other purposes). Since 0.18
     */
    OK_TO_EXTRACT_CONTENTS,
    /**
     * assemble the document (insert, rotate, or delete pages and create
     * bookmarks or thumbnail images). Since 0.18
     */
    OK_TO_ASSEMBLE,
    /**
     * document can be printer at high resolution. Since 0.18
     */
    OK_TO_PRINT_HIGH_RESOLUTION,
    /**
     * document permits all operations
     */
    FULL,
}
/**
 * Printing flags
 */
enum PrintFlags {
    /**
     * print main document contents
     */
    DOCUMENT,
    /**
     * print document and markup annotations
     */
    MARKUP_ANNOTS,
    /**
     * print document and only stamp annotations
     */
    STAMP_ANNOTS_ONLY,
    /**
     * print main document contents and all markup annotations
     */
    ALL,
}
enum StructureGetTextFlags {
    /**
     * No flags.
     */
    NONE,
    /**
     * For non-leaf, non-content
     *    elements, recursively obtain the text from all the elements
     *    enclosed in the subtree.
     */
    RECURSIVE,
}
/**
 * Viewer preferences
 */
enum ViewerPreferences {
    /**
     * no preferences set
     */
    UNSET,
    /**
     * hider toolbars when document is active
     */
    HIDE_TOOLBAR,
    /**
     * hide menu bar when document is active
     */
    HIDE_MENUBAR,
    /**
     * hide UI elements in document's window
     */
    HIDE_WINDOWUI,
    /**
     * resize document's window to fit the size of the first displayed page
     */
    FIT_WINDOW,
    /**
     * position the document's window in the center of the screen
     */
    CENTER_WINDOW,
    /**
     * display document title in window's title bar
     */
    DISPLAY_DOC_TITLE,
    /**
     * the predominant reading order for text is right to left
     */
    DIRECTION_RTL,
}
const ANNOT_TEXT_ICON_CIRCLE: string
const ANNOT_TEXT_ICON_COMMENT: string
const ANNOT_TEXT_ICON_CROSS: string
const ANNOT_TEXT_ICON_HELP: string
const ANNOT_TEXT_ICON_INSERT: string
const ANNOT_TEXT_ICON_KEY: string
const ANNOT_TEXT_ICON_NEW_PARAGRAPH: string
const ANNOT_TEXT_ICON_NOTE: string
const ANNOT_TEXT_ICON_PARAGRAPH: string
/**
 * Defined if poppler was compiled with cairo support.
 */
const HAS_CAIRO: number
/**
 * The major version number of the poppler header files (e.g. in poppler version
 * 0.1.2 this is 0.)
 */
const MAJOR_VERSION: number
/**
 * The micro version number of the poppler header files (e.g. in poppler version
 * 0.1.2 this is 2.)
 */
const MICRO_VERSION: number
/**
 * The major version number of the poppler header files (e.g. in poppler version
 * 0.1.2 this is 1.)
 */
const MINOR_VERSION: number
function dateParse(date: string, timet: number): boolean
function errorQuark(): GLib.Quark
function getBackend(): Backend
function getVersion(): string
function namedDestFromBytestring(data: Uint8Array): string
function namedDestToBytestring(name: string): Uint8Array | null
/**
 * Specifies the type of the function passed to
 * poppler_attachment_save_to_callback().  It is called once for each block of
 * bytes that is "written" by poppler_attachment_save_to_callback().  If
 * successful it should return %TRUE.  If an error occurs it should set
 * `error` and return %FALSE, in which case poppler_attachment_save_to_callback()
 * will fail with the same error.
 */
interface AttachmentSaveFunc {
    (buf: Uint8Array): boolean
}
/**
 * Specifies the type of the function passed to
 * poppler_media_save_to_callback().  It is called once for each block of
 * bytes that is "written" by poppler_media_save_to_callback().  If
 * successful it should return %TRUE.  If an error occurs it should set
 * `error` and return %FALSE, in which case poppler_media_save_to_callback()
 * will fail with the same error.
 */
interface MediaSaveFunc {
    (buf: Uint8Array): boolean
}
interface Annot_ConstructProps extends GObject.Object_ConstructProps {
}
class Annot {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.Annot */
    /**
     * Gets the type of `poppler_annot`
     */
    getAnnotType(): AnnotType
    /**
     * Retrieves the color of `poppler_annot`.
     */
    getColor(): Color
    /**
     * Retrieves the contents of `poppler_annot`.
     */
    getContents(): string
    /**
     * Retrieves the flag field specifying various characteristics of the
     * `poppler_annot`.
     */
    getFlags(): AnnotFlag
    /**
     * Retrieves the last modification data of `poppler_annot`. The returned
     * string will be either a PDF format date or a text string.
     * See also #poppler_date_parse()
     */
    getModified(): string
    /**
     * Retrieves the name of `poppler_annot`.
     */
    getName(): string
    /**
     * Returns the page index to which `poppler_annot` is associated, or -1 if unknown
     */
    getPageIndex(): number
    /**
     * Retrieves the rectangle representing the page coordinates where the
     * annotation `poppler_annot` is placed.
     */
    getRectangle(): /* popplerRect */ Rectangle
    /**
     * Sets the color of `poppler_annot`.
     * @param popplerColor a #PopplerColor, or %NULL
     */
    setColor(popplerColor?: Color | null): void
    /**
     * Sets the contents of `poppler_annot` to the given value,
     * replacing the current contents.
     * @param contents a text string containing the new contents
     */
    setContents(contents: string): void
    /**
     * Sets the flag field specifying various characteristics of the
     * `poppler_annot`.
     * @param flags a #PopplerAnnotFlag
     */
    setFlags(flags: AnnotFlag): void
    /**
     * Move the annotation to the rectangle representing the page coordinates
     * where the annotation `poppler_annot` should be placed.
     * @param popplerRect a #PopplerRectangle with the new annotation's coordinates
     */
    setRectangle(popplerRect: Rectangle): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: Annot_ConstructProps)
    _init (config?: Annot_ConstructProps): void
    static $gtype: GObject.Type
}
interface AnnotCircle_ConstructProps extends AnnotMarkup_ConstructProps {
}
class AnnotCircle {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotCircle */
    /**
     * Retrieves the interior color of `poppler_annot`.
     */
    getInteriorColor(): Color
    /**
     * Sets the interior color of `poppler_annot`.
     * @param popplerColor a #PopplerColor, or %NULL
     */
    setInteriorColor(popplerColor?: Color | null): void
    /* Methods of Poppler-0.18.Poppler.AnnotMarkup */
    /**
     * Returns the date and time when the annotation was created
     */
    getDate(): GLib.Date
    /**
     * Gets the external data type of `poppler_annot`.
     */
    getExternalData(): AnnotExternalDataType
    /**
     * Retrieves the label text of `poppler_annot`.
     */
    getLabel(): string
    /**
     * Retrieves the opacity value of `poppler_annot`.
     */
    getOpacity(): number
    /**
     * Retrieves the state of the popup window related to `poppler_annot`.
     */
    getPopupIsOpen(): boolean
    /**
     * Retrieves the rectangle of the popup window related to `poppler_annot`.
     */
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    /**
     * Gets the reply type of `poppler_annot`.
     */
    getReplyTo(): AnnotMarkupReplyType
    /**
     * Retrives the subject text of `poppler_annot`.
     */
    getSubject(): string
    /**
     * Return %TRUE if the markup annotation has a popup window associated
     */
    hasPopup(): boolean
    /**
     * Sets the label text of `poppler_annot,` replacing the current one
     * @param label a text string containing the new label, or %NULL
     */
    setLabel(label?: string | null): void
    /**
     * Sets the opacity of `poppler_annot`. This value applies to
     * all visible elements of `poppler_annot` in its closed state,
     * but not to the pop-up window that appears when it's openened
     * @param opacity a constant opacity value, between 0 (transparent) and 1 (opaque)
     */
    setOpacity(opacity: number): void
    /**
     * Associates a new popup window for editing contents of `poppler_annot`.
     * Popup window shall be displayed by viewers at `popup_rect` on the page.
     * @param popupRect a #PopplerRectangle
     */
    setPopup(popupRect: Rectangle): void
    /**
     * Sets the state of the popup window related to `poppler_annot`.
     * @param isOpen whether popup window should initially be displayed open
     */
    setPopupIsOpen(isOpen: boolean): void
    /**
     * Sets the rectangle of the popup window related to `poppler_annot`.
     * This doesn't have any effect if `poppler_annot` doesn't have a
     * popup associated, use poppler_annot_markup_set_popup() to associate
     * a popup window to a #PopplerAnnotMarkup.
     * @param popplerRect a #PopplerRectangle to set
     */
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler-0.18.Poppler.Annot */
    /**
     * Gets the type of `poppler_annot`
     */
    getAnnotType(): AnnotType
    /**
     * Retrieves the color of `poppler_annot`.
     */
    getColor(): Color
    /**
     * Retrieves the contents of `poppler_annot`.
     */
    getContents(): string
    /**
     * Retrieves the flag field specifying various characteristics of the
     * `poppler_annot`.
     */
    getFlags(): AnnotFlag
    /**
     * Retrieves the last modification data of `poppler_annot`. The returned
     * string will be either a PDF format date or a text string.
     * See also #poppler_date_parse()
     */
    getModified(): string
    /**
     * Retrieves the name of `poppler_annot`.
     */
    getName(): string
    /**
     * Returns the page index to which `poppler_annot` is associated, or -1 if unknown
     */
    getPageIndex(): number
    /**
     * Retrieves the rectangle representing the page coordinates where the
     * annotation `poppler_annot` is placed.
     */
    getRectangle(): /* popplerRect */ Rectangle
    /**
     * Sets the color of `poppler_annot`.
     * @param popplerColor a #PopplerColor, or %NULL
     */
    setColor(popplerColor?: Color | null): void
    /**
     * Sets the contents of `poppler_annot` to the given value,
     * replacing the current contents.
     * @param contents a text string containing the new contents
     */
    setContents(contents: string): void
    /**
     * Sets the flag field specifying various characteristics of the
     * `poppler_annot`.
     * @param flags a #PopplerAnnotFlag
     */
    setFlags(flags: AnnotFlag): void
    /**
     * Move the annotation to the rectangle representing the page coordinates
     * where the annotation `poppler_annot` should be placed.
     * @param popplerRect a #PopplerRectangle with the new annotation's coordinates
     */
    setRectangle(popplerRect: Rectangle): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: AnnotCircle_ConstructProps)
    _init (config?: AnnotCircle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: Document, rect: Rectangle): AnnotCircle
    static $gtype: GObject.Type
}
interface AnnotFileAttachment_ConstructProps extends AnnotMarkup_ConstructProps {
}
class AnnotFileAttachment {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotFileAttachment */
    /**
     * Creates a #PopplerAttachment for the file of the file attachment annotation `annot`.
     * The #PopplerAttachment must be unrefed with g_object_unref by the caller.
     */
    getAttachment(): Attachment
    /**
     * Retrieves the name of `poppler_annot`.
     */
    getName(): string
    /* Methods of Poppler-0.18.Poppler.AnnotMarkup */
    /**
     * Returns the date and time when the annotation was created
     */
    getDate(): GLib.Date
    /**
     * Gets the external data type of `poppler_annot`.
     */
    getExternalData(): AnnotExternalDataType
    /**
     * Retrieves the label text of `poppler_annot`.
     */
    getLabel(): string
    /**
     * Retrieves the opacity value of `poppler_annot`.
     */
    getOpacity(): number
    /**
     * Retrieves the state of the popup window related to `poppler_annot`.
     */
    getPopupIsOpen(): boolean
    /**
     * Retrieves the rectangle of the popup window related to `poppler_annot`.
     */
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    /**
     * Gets the reply type of `poppler_annot`.
     */
    getReplyTo(): AnnotMarkupReplyType
    /**
     * Retrives the subject text of `poppler_annot`.
     */
    getSubject(): string
    /**
     * Return %TRUE if the markup annotation has a popup window associated
     */
    hasPopup(): boolean
    /**
     * Sets the label text of `poppler_annot,` replacing the current one
     * @param label a text string containing the new label, or %NULL
     */
    setLabel(label?: string | null): void
    /**
     * Sets the opacity of `poppler_annot`. This value applies to
     * all visible elements of `poppler_annot` in its closed state,
     * but not to the pop-up window that appears when it's openened
     * @param opacity a constant opacity value, between 0 (transparent) and 1 (opaque)
     */
    setOpacity(opacity: number): void
    /**
     * Associates a new popup window for editing contents of `poppler_annot`.
     * Popup window shall be displayed by viewers at `popup_rect` on the page.
     * @param popupRect a #PopplerRectangle
     */
    setPopup(popupRect: Rectangle): void
    /**
     * Sets the state of the popup window related to `poppler_annot`.
     * @param isOpen whether popup window should initially be displayed open
     */
    setPopupIsOpen(isOpen: boolean): void
    /**
     * Sets the rectangle of the popup window related to `poppler_annot`.
     * This doesn't have any effect if `poppler_annot` doesn't have a
     * popup associated, use poppler_annot_markup_set_popup() to associate
     * a popup window to a #PopplerAnnotMarkup.
     * @param popplerRect a #PopplerRectangle to set
     */
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler-0.18.Poppler.Annot */
    /**
     * Gets the type of `poppler_annot`
     */
    getAnnotType(): AnnotType
    /**
     * Retrieves the color of `poppler_annot`.
     */
    getColor(): Color
    /**
     * Retrieves the contents of `poppler_annot`.
     */
    getContents(): string
    /**
     * Retrieves the flag field specifying various characteristics of the
     * `poppler_annot`.
     */
    getFlags(): AnnotFlag
    /**
     * Retrieves the last modification data of `poppler_annot`. The returned
     * string will be either a PDF format date or a text string.
     * See also #poppler_date_parse()
     */
    getModified(): string
    /**
     * Returns the page index to which `poppler_annot` is associated, or -1 if unknown
     */
    getPageIndex(): number
    /**
     * Retrieves the rectangle representing the page coordinates where the
     * annotation `poppler_annot` is placed.
     */
    getRectangle(): /* popplerRect */ Rectangle
    /**
     * Sets the color of `poppler_annot`.
     * @param popplerColor a #PopplerColor, or %NULL
     */
    setColor(popplerColor?: Color | null): void
    /**
     * Sets the contents of `poppler_annot` to the given value,
     * replacing the current contents.
     * @param contents a text string containing the new contents
     */
    setContents(contents: string): void
    /**
     * Sets the flag field specifying various characteristics of the
     * `poppler_annot`.
     * @param flags a #PopplerAnnotFlag
     */
    setFlags(flags: AnnotFlag): void
    /**
     * Move the annotation to the rectangle representing the page coordinates
     * where the annotation `poppler_annot` should be placed.
     * @param popplerRect a #PopplerRectangle with the new annotation's coordinates
     */
    setRectangle(popplerRect: Rectangle): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: AnnotFileAttachment_ConstructProps)
    _init (config?: AnnotFileAttachment_ConstructProps): void
    static $gtype: GObject.Type
}
interface AnnotFreeText_ConstructProps extends AnnotMarkup_ConstructProps {
}
class AnnotFreeText {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotFreeText */
    /**
     * Retrieves a #PopplerAnnotCalloutLine of four or six numbers specifying a callout
     * line attached to the `poppler_annot`.
     */
    getCalloutLine(): AnnotCalloutLine
    /**
     * Retrieves the justification of the text of `poppler_annot`.
     */
    getQuadding(): AnnotFreeTextQuadding
    /* Methods of Poppler-0.18.Poppler.AnnotMarkup */
    /**
     * Returns the date and time when the annotation was created
     */
    getDate(): GLib.Date
    /**
     * Gets the external data type of `poppler_annot`.
     */
    getExternalData(): AnnotExternalDataType
    /**
     * Retrieves the label text of `poppler_annot`.
     */
    getLabel(): string
    /**
     * Retrieves the opacity value of `poppler_annot`.
     */
    getOpacity(): number
    /**
     * Retrieves the state of the popup window related to `poppler_annot`.
     */
    getPopupIsOpen(): boolean
    /**
     * Retrieves the rectangle of the popup window related to `poppler_annot`.
     */
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    /**
     * Gets the reply type of `poppler_annot`.
     */
    getReplyTo(): AnnotMarkupReplyType
    /**
     * Retrives the subject text of `poppler_annot`.
     */
    getSubject(): string
    /**
     * Return %TRUE if the markup annotation has a popup window associated
     */
    hasPopup(): boolean
    /**
     * Sets the label text of `poppler_annot,` replacing the current one
     * @param label a text string containing the new label, or %NULL
     */
    setLabel(label?: string | null): void
    /**
     * Sets the opacity of `poppler_annot`. This value applies to
     * all visible elements of `poppler_annot` in its closed state,
     * but not to the pop-up window that appears when it's openened
     * @param opacity a constant opacity value, between 0 (transparent) and 1 (opaque)
     */
    setOpacity(opacity: number): void
    /**
     * Associates a new popup window for editing contents of `poppler_annot`.
     * Popup window shall be displayed by viewers at `popup_rect` on the page.
     * @param popupRect a #PopplerRectangle
     */
    setPopup(popupRect: Rectangle): void
    /**
     * Sets the state of the popup window related to `poppler_annot`.
     * @param isOpen whether popup window should initially be displayed open
     */
    setPopupIsOpen(isOpen: boolean): void
    /**
     * Sets the rectangle of the popup window related to `poppler_annot`.
     * This doesn't have any effect if `poppler_annot` doesn't have a
     * popup associated, use poppler_annot_markup_set_popup() to associate
     * a popup window to a #PopplerAnnotMarkup.
     * @param popplerRect a #PopplerRectangle to set
     */
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler-0.18.Poppler.Annot */
    /**
     * Gets the type of `poppler_annot`
     */
    getAnnotType(): AnnotType
    /**
     * Retrieves the color of `poppler_annot`.
     */
    getColor(): Color
    /**
     * Retrieves the contents of `poppler_annot`.
     */
    getContents(): string
    /**
     * Retrieves the flag field specifying various characteristics of the
     * `poppler_annot`.
     */
    getFlags(): AnnotFlag
    /**
     * Retrieves the last modification data of `poppler_annot`. The returned
     * string will be either a PDF format date or a text string.
     * See also #poppler_date_parse()
     */
    getModified(): string
    /**
     * Retrieves the name of `poppler_annot`.
     */
    getName(): string
    /**
     * Returns the page index to which `poppler_annot` is associated, or -1 if unknown
     */
    getPageIndex(): number
    /**
     * Retrieves the rectangle representing the page coordinates where the
     * annotation `poppler_annot` is placed.
     */
    getRectangle(): /* popplerRect */ Rectangle
    /**
     * Sets the color of `poppler_annot`.
     * @param popplerColor a #PopplerColor, or %NULL
     */
    setColor(popplerColor?: Color | null): void
    /**
     * Sets the contents of `poppler_annot` to the given value,
     * replacing the current contents.
     * @param contents a text string containing the new contents
     */
    setContents(contents: string): void
    /**
     * Sets the flag field specifying various characteristics of the
     * `poppler_annot`.
     * @param flags a #PopplerAnnotFlag
     */
    setFlags(flags: AnnotFlag): void
    /**
     * Move the annotation to the rectangle representing the page coordinates
     * where the annotation `poppler_annot` should be placed.
     * @param popplerRect a #PopplerRectangle with the new annotation's coordinates
     */
    setRectangle(popplerRect: Rectangle): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: AnnotFreeText_ConstructProps)
    _init (config?: AnnotFreeText_ConstructProps): void
    static $gtype: GObject.Type
}
interface AnnotLine_ConstructProps extends AnnotMarkup_ConstructProps {
}
class AnnotLine {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotLine */
    /**
     * Set the coordinate points where the `poppler_annot` starts and ends.
     * @param start a #PopplerPoint of the starting vertice
     * @param end a #PopplerPoint of the ending vertice
     */
    setVertices(start: Point, end: Point): void
    /* Methods of Poppler-0.18.Poppler.AnnotMarkup */
    /**
     * Returns the date and time when the annotation was created
     */
    getDate(): GLib.Date
    /**
     * Gets the external data type of `poppler_annot`.
     */
    getExternalData(): AnnotExternalDataType
    /**
     * Retrieves the label text of `poppler_annot`.
     */
    getLabel(): string
    /**
     * Retrieves the opacity value of `poppler_annot`.
     */
    getOpacity(): number
    /**
     * Retrieves the state of the popup window related to `poppler_annot`.
     */
    getPopupIsOpen(): boolean
    /**
     * Retrieves the rectangle of the popup window related to `poppler_annot`.
     */
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    /**
     * Gets the reply type of `poppler_annot`.
     */
    getReplyTo(): AnnotMarkupReplyType
    /**
     * Retrives the subject text of `poppler_annot`.
     */
    getSubject(): string
    /**
     * Return %TRUE if the markup annotation has a popup window associated
     */
    hasPopup(): boolean
    /**
     * Sets the label text of `poppler_annot,` replacing the current one
     * @param label a text string containing the new label, or %NULL
     */
    setLabel(label?: string | null): void
    /**
     * Sets the opacity of `poppler_annot`. This value applies to
     * all visible elements of `poppler_annot` in its closed state,
     * but not to the pop-up window that appears when it's openened
     * @param opacity a constant opacity value, between 0 (transparent) and 1 (opaque)
     */
    setOpacity(opacity: number): void
    /**
     * Associates a new popup window for editing contents of `poppler_annot`.
     * Popup window shall be displayed by viewers at `popup_rect` on the page.
     * @param popupRect a #PopplerRectangle
     */
    setPopup(popupRect: Rectangle): void
    /**
     * Sets the state of the popup window related to `poppler_annot`.
     * @param isOpen whether popup window should initially be displayed open
     */
    setPopupIsOpen(isOpen: boolean): void
    /**
     * Sets the rectangle of the popup window related to `poppler_annot`.
     * This doesn't have any effect if `poppler_annot` doesn't have a
     * popup associated, use poppler_annot_markup_set_popup() to associate
     * a popup window to a #PopplerAnnotMarkup.
     * @param popplerRect a #PopplerRectangle to set
     */
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler-0.18.Poppler.Annot */
    /**
     * Gets the type of `poppler_annot`
     */
    getAnnotType(): AnnotType
    /**
     * Retrieves the color of `poppler_annot`.
     */
    getColor(): Color
    /**
     * Retrieves the contents of `poppler_annot`.
     */
    getContents(): string
    /**
     * Retrieves the flag field specifying various characteristics of the
     * `poppler_annot`.
     */
    getFlags(): AnnotFlag
    /**
     * Retrieves the last modification data of `poppler_annot`. The returned
     * string will be either a PDF format date or a text string.
     * See also #poppler_date_parse()
     */
    getModified(): string
    /**
     * Retrieves the name of `poppler_annot`.
     */
    getName(): string
    /**
     * Returns the page index to which `poppler_annot` is associated, or -1 if unknown
     */
    getPageIndex(): number
    /**
     * Retrieves the rectangle representing the page coordinates where the
     * annotation `poppler_annot` is placed.
     */
    getRectangle(): /* popplerRect */ Rectangle
    /**
     * Sets the color of `poppler_annot`.
     * @param popplerColor a #PopplerColor, or %NULL
     */
    setColor(popplerColor?: Color | null): void
    /**
     * Sets the contents of `poppler_annot` to the given value,
     * replacing the current contents.
     * @param contents a text string containing the new contents
     */
    setContents(contents: string): void
    /**
     * Sets the flag field specifying various characteristics of the
     * `poppler_annot`.
     * @param flags a #PopplerAnnotFlag
     */
    setFlags(flags: AnnotFlag): void
    /**
     * Move the annotation to the rectangle representing the page coordinates
     * where the annotation `poppler_annot` should be placed.
     * @param popplerRect a #PopplerRectangle with the new annotation's coordinates
     */
    setRectangle(popplerRect: Rectangle): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: AnnotLine_ConstructProps)
    _init (config?: AnnotLine_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: Document, rect: Rectangle, start: Point, end: Point): AnnotLine
    static $gtype: GObject.Type
}
interface AnnotMarkup_ConstructProps extends Annot_ConstructProps {
}
class AnnotMarkup {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotMarkup */
    /**
     * Returns the date and time when the annotation was created
     */
    getDate(): GLib.Date
    /**
     * Gets the external data type of `poppler_annot`.
     */
    getExternalData(): AnnotExternalDataType
    /**
     * Retrieves the label text of `poppler_annot`.
     */
    getLabel(): string
    /**
     * Retrieves the opacity value of `poppler_annot`.
     */
    getOpacity(): number
    /**
     * Retrieves the state of the popup window related to `poppler_annot`.
     */
    getPopupIsOpen(): boolean
    /**
     * Retrieves the rectangle of the popup window related to `poppler_annot`.
     */
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    /**
     * Gets the reply type of `poppler_annot`.
     */
    getReplyTo(): AnnotMarkupReplyType
    /**
     * Retrives the subject text of `poppler_annot`.
     */
    getSubject(): string
    /**
     * Return %TRUE if the markup annotation has a popup window associated
     */
    hasPopup(): boolean
    /**
     * Sets the label text of `poppler_annot,` replacing the current one
     * @param label a text string containing the new label, or %NULL
     */
    setLabel(label?: string | null): void
    /**
     * Sets the opacity of `poppler_annot`. This value applies to
     * all visible elements of `poppler_annot` in its closed state,
     * but not to the pop-up window that appears when it's openened
     * @param opacity a constant opacity value, between 0 (transparent) and 1 (opaque)
     */
    setOpacity(opacity: number): void
    /**
     * Associates a new popup window for editing contents of `poppler_annot`.
     * Popup window shall be displayed by viewers at `popup_rect` on the page.
     * @param popupRect a #PopplerRectangle
     */
    setPopup(popupRect: Rectangle): void
    /**
     * Sets the state of the popup window related to `poppler_annot`.
     * @param isOpen whether popup window should initially be displayed open
     */
    setPopupIsOpen(isOpen: boolean): void
    /**
     * Sets the rectangle of the popup window related to `poppler_annot`.
     * This doesn't have any effect if `poppler_annot` doesn't have a
     * popup associated, use poppler_annot_markup_set_popup() to associate
     * a popup window to a #PopplerAnnotMarkup.
     * @param popplerRect a #PopplerRectangle to set
     */
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler-0.18.Poppler.Annot */
    /**
     * Gets the type of `poppler_annot`
     */
    getAnnotType(): AnnotType
    /**
     * Retrieves the color of `poppler_annot`.
     */
    getColor(): Color
    /**
     * Retrieves the contents of `poppler_annot`.
     */
    getContents(): string
    /**
     * Retrieves the flag field specifying various characteristics of the
     * `poppler_annot`.
     */
    getFlags(): AnnotFlag
    /**
     * Retrieves the last modification data of `poppler_annot`. The returned
     * string will be either a PDF format date or a text string.
     * See also #poppler_date_parse()
     */
    getModified(): string
    /**
     * Retrieves the name of `poppler_annot`.
     */
    getName(): string
    /**
     * Returns the page index to which `poppler_annot` is associated, or -1 if unknown
     */
    getPageIndex(): number
    /**
     * Retrieves the rectangle representing the page coordinates where the
     * annotation `poppler_annot` is placed.
     */
    getRectangle(): /* popplerRect */ Rectangle
    /**
     * Sets the color of `poppler_annot`.
     * @param popplerColor a #PopplerColor, or %NULL
     */
    setColor(popplerColor?: Color | null): void
    /**
     * Sets the contents of `poppler_annot` to the given value,
     * replacing the current contents.
     * @param contents a text string containing the new contents
     */
    setContents(contents: string): void
    /**
     * Sets the flag field specifying various characteristics of the
     * `poppler_annot`.
     * @param flags a #PopplerAnnotFlag
     */
    setFlags(flags: AnnotFlag): void
    /**
     * Move the annotation to the rectangle representing the page coordinates
     * where the annotation `poppler_annot` should be placed.
     * @param popplerRect a #PopplerRectangle with the new annotation's coordinates
     */
    setRectangle(popplerRect: Rectangle): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: AnnotMarkup_ConstructProps)
    _init (config?: AnnotMarkup_ConstructProps): void
    static $gtype: GObject.Type
}
interface AnnotMovie_ConstructProps extends Annot_ConstructProps {
}
class AnnotMovie {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotMovie */
    /**
     * Retrieves the movie object (PopplerMovie) stored in the `poppler_annot`.
     */
    getMovie(): Movie
    /**
     * Retrieves the movie title of `poppler_annot`.
     */
    getTitle(): string
    /* Methods of Poppler-0.18.Poppler.Annot */
    /**
     * Gets the type of `poppler_annot`
     */
    getAnnotType(): AnnotType
    /**
     * Retrieves the color of `poppler_annot`.
     */
    getColor(): Color
    /**
     * Retrieves the contents of `poppler_annot`.
     */
    getContents(): string
    /**
     * Retrieves the flag field specifying various characteristics of the
     * `poppler_annot`.
     */
    getFlags(): AnnotFlag
    /**
     * Retrieves the last modification data of `poppler_annot`. The returned
     * string will be either a PDF format date or a text string.
     * See also #poppler_date_parse()
     */
    getModified(): string
    /**
     * Retrieves the name of `poppler_annot`.
     */
    getName(): string
    /**
     * Returns the page index to which `poppler_annot` is associated, or -1 if unknown
     */
    getPageIndex(): number
    /**
     * Retrieves the rectangle representing the page coordinates where the
     * annotation `poppler_annot` is placed.
     */
    getRectangle(): /* popplerRect */ Rectangle
    /**
     * Sets the color of `poppler_annot`.
     * @param popplerColor a #PopplerColor, or %NULL
     */
    setColor(popplerColor?: Color | null): void
    /**
     * Sets the contents of `poppler_annot` to the given value,
     * replacing the current contents.
     * @param contents a text string containing the new contents
     */
    setContents(contents: string): void
    /**
     * Sets the flag field specifying various characteristics of the
     * `poppler_annot`.
     * @param flags a #PopplerAnnotFlag
     */
    setFlags(flags: AnnotFlag): void
    /**
     * Move the annotation to the rectangle representing the page coordinates
     * where the annotation `poppler_annot` should be placed.
     * @param popplerRect a #PopplerRectangle with the new annotation's coordinates
     */
    setRectangle(popplerRect: Rectangle): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: AnnotMovie_ConstructProps)
    _init (config?: AnnotMovie_ConstructProps): void
    static $gtype: GObject.Type
}
interface AnnotScreen_ConstructProps extends Annot_ConstructProps {
}
class AnnotScreen {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotScreen */
    /**
     * Retrieves the action (#PopplerAction) that shall be performed when `poppler_annot` is activated
     */
    getAction(): Action
    /* Methods of Poppler-0.18.Poppler.Annot */
    /**
     * Gets the type of `poppler_annot`
     */
    getAnnotType(): AnnotType
    /**
     * Retrieves the color of `poppler_annot`.
     */
    getColor(): Color
    /**
     * Retrieves the contents of `poppler_annot`.
     */
    getContents(): string
    /**
     * Retrieves the flag field specifying various characteristics of the
     * `poppler_annot`.
     */
    getFlags(): AnnotFlag
    /**
     * Retrieves the last modification data of `poppler_annot`. The returned
     * string will be either a PDF format date or a text string.
     * See also #poppler_date_parse()
     */
    getModified(): string
    /**
     * Retrieves the name of `poppler_annot`.
     */
    getName(): string
    /**
     * Returns the page index to which `poppler_annot` is associated, or -1 if unknown
     */
    getPageIndex(): number
    /**
     * Retrieves the rectangle representing the page coordinates where the
     * annotation `poppler_annot` is placed.
     */
    getRectangle(): /* popplerRect */ Rectangle
    /**
     * Sets the color of `poppler_annot`.
     * @param popplerColor a #PopplerColor, or %NULL
     */
    setColor(popplerColor?: Color | null): void
    /**
     * Sets the contents of `poppler_annot` to the given value,
     * replacing the current contents.
     * @param contents a text string containing the new contents
     */
    setContents(contents: string): void
    /**
     * Sets the flag field specifying various characteristics of the
     * `poppler_annot`.
     * @param flags a #PopplerAnnotFlag
     */
    setFlags(flags: AnnotFlag): void
    /**
     * Move the annotation to the rectangle representing the page coordinates
     * where the annotation `poppler_annot` should be placed.
     * @param popplerRect a #PopplerRectangle with the new annotation's coordinates
     */
    setRectangle(popplerRect: Rectangle): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: AnnotScreen_ConstructProps)
    _init (config?: AnnotScreen_ConstructProps): void
    static $gtype: GObject.Type
}
interface AnnotSquare_ConstructProps extends AnnotMarkup_ConstructProps {
}
class AnnotSquare {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotSquare */
    /**
     * Retrieves the interior color of `poppler_annot`.
     */
    getInteriorColor(): Color
    /**
     * Sets the interior color of `poppler_annot`.
     * @param popplerColor a #PopplerColor, or %NULL
     */
    setInteriorColor(popplerColor?: Color | null): void
    /* Methods of Poppler-0.18.Poppler.AnnotMarkup */
    /**
     * Returns the date and time when the annotation was created
     */
    getDate(): GLib.Date
    /**
     * Gets the external data type of `poppler_annot`.
     */
    getExternalData(): AnnotExternalDataType
    /**
     * Retrieves the label text of `poppler_annot`.
     */
    getLabel(): string
    /**
     * Retrieves the opacity value of `poppler_annot`.
     */
    getOpacity(): number
    /**
     * Retrieves the state of the popup window related to `poppler_annot`.
     */
    getPopupIsOpen(): boolean
    /**
     * Retrieves the rectangle of the popup window related to `poppler_annot`.
     */
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    /**
     * Gets the reply type of `poppler_annot`.
     */
    getReplyTo(): AnnotMarkupReplyType
    /**
     * Retrives the subject text of `poppler_annot`.
     */
    getSubject(): string
    /**
     * Return %TRUE if the markup annotation has a popup window associated
     */
    hasPopup(): boolean
    /**
     * Sets the label text of `poppler_annot,` replacing the current one
     * @param label a text string containing the new label, or %NULL
     */
    setLabel(label?: string | null): void
    /**
     * Sets the opacity of `poppler_annot`. This value applies to
     * all visible elements of `poppler_annot` in its closed state,
     * but not to the pop-up window that appears when it's openened
     * @param opacity a constant opacity value, between 0 (transparent) and 1 (opaque)
     */
    setOpacity(opacity: number): void
    /**
     * Associates a new popup window for editing contents of `poppler_annot`.
     * Popup window shall be displayed by viewers at `popup_rect` on the page.
     * @param popupRect a #PopplerRectangle
     */
    setPopup(popupRect: Rectangle): void
    /**
     * Sets the state of the popup window related to `poppler_annot`.
     * @param isOpen whether popup window should initially be displayed open
     */
    setPopupIsOpen(isOpen: boolean): void
    /**
     * Sets the rectangle of the popup window related to `poppler_annot`.
     * This doesn't have any effect if `poppler_annot` doesn't have a
     * popup associated, use poppler_annot_markup_set_popup() to associate
     * a popup window to a #PopplerAnnotMarkup.
     * @param popplerRect a #PopplerRectangle to set
     */
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler-0.18.Poppler.Annot */
    /**
     * Gets the type of `poppler_annot`
     */
    getAnnotType(): AnnotType
    /**
     * Retrieves the color of `poppler_annot`.
     */
    getColor(): Color
    /**
     * Retrieves the contents of `poppler_annot`.
     */
    getContents(): string
    /**
     * Retrieves the flag field specifying various characteristics of the
     * `poppler_annot`.
     */
    getFlags(): AnnotFlag
    /**
     * Retrieves the last modification data of `poppler_annot`. The returned
     * string will be either a PDF format date or a text string.
     * See also #poppler_date_parse()
     */
    getModified(): string
    /**
     * Retrieves the name of `poppler_annot`.
     */
    getName(): string
    /**
     * Returns the page index to which `poppler_annot` is associated, or -1 if unknown
     */
    getPageIndex(): number
    /**
     * Retrieves the rectangle representing the page coordinates where the
     * annotation `poppler_annot` is placed.
     */
    getRectangle(): /* popplerRect */ Rectangle
    /**
     * Sets the color of `poppler_annot`.
     * @param popplerColor a #PopplerColor, or %NULL
     */
    setColor(popplerColor?: Color | null): void
    /**
     * Sets the contents of `poppler_annot` to the given value,
     * replacing the current contents.
     * @param contents a text string containing the new contents
     */
    setContents(contents: string): void
    /**
     * Sets the flag field specifying various characteristics of the
     * `poppler_annot`.
     * @param flags a #PopplerAnnotFlag
     */
    setFlags(flags: AnnotFlag): void
    /**
     * Move the annotation to the rectangle representing the page coordinates
     * where the annotation `poppler_annot` should be placed.
     * @param popplerRect a #PopplerRectangle with the new annotation's coordinates
     */
    setRectangle(popplerRect: Rectangle): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: AnnotSquare_ConstructProps)
    _init (config?: AnnotSquare_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: Document, rect: Rectangle): AnnotSquare
    static $gtype: GObject.Type
}
interface AnnotText_ConstructProps extends AnnotMarkup_ConstructProps {
}
class AnnotText {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotText */
    /**
     * Gets name of the icon of `poppler_annot`.
     */
    getIcon(): string
    /**
     * Retrieves the state of `poppler_annot`.
     */
    getIsOpen(): boolean
    /**
     * Retrieves the state of `poppler_annot`.
     */
    getState(): AnnotTextState
    /**
     * Sets the icon of `poppler_annot`. The following predefined
     * icons are currently supported:
     * <variablelist>
     *  <varlistentry>
     *   <term>#POPPLER_ANNOT_TEXT_ICON_NOTE</term>
     *  </varlistentry>
     *  <varlistentry>
     *   <term>#POPPLER_ANNOT_TEXT_ICON_COMMENT</term>
     *  </varlistentry>
     *  <varlistentry>
     *   <term>#POPPLER_ANNOT_TEXT_ICON_KEY</term>
     *  </varlistentry>
     *  <varlistentry>
     *   <term>#POPPLER_ANNOT_TEXT_ICON_HELP</term>
     *  </varlistentry>
     *  <varlistentry>
     *   <term>#POPPLER_ANNOT_TEXT_ICON_NEW_PARAGRAPH</term>
     *  </varlistentry>
     *  <varlistentry>
     *   <term>#POPPLER_ANNOT_TEXT_ICON_PARAGRAPH</term>
     *  </varlistentry>
     *  <varlistentry>
     *   <term>#POPPLER_ANNOT_TEXT_ICON_INSERT</term>
     *  </varlistentry>
     *  <varlistentry>
     *   <term>#POPPLER_ANNOT_TEXT_ICON_CROSS</term>
     *  </varlistentry>
     *  <varlistentry>
     *   <term>#POPPLER_ANNOT_TEXT_ICON_CIRCLE</term>
     *  </varlistentry>
     * </variablelist>
     * @param icon the name of an icon
     */
    setIcon(icon: string): void
    /**
     * Sets whether `poppler_annot` should initially be displayed open
     * @param isOpen whether annotation should initially be displayed open
     */
    setIsOpen(isOpen: boolean): void
    /* Methods of Poppler-0.18.Poppler.AnnotMarkup */
    /**
     * Returns the date and time when the annotation was created
     */
    getDate(): GLib.Date
    /**
     * Gets the external data type of `poppler_annot`.
     */
    getExternalData(): AnnotExternalDataType
    /**
     * Retrieves the label text of `poppler_annot`.
     */
    getLabel(): string
    /**
     * Retrieves the opacity value of `poppler_annot`.
     */
    getOpacity(): number
    /**
     * Retrieves the state of the popup window related to `poppler_annot`.
     */
    getPopupIsOpen(): boolean
    /**
     * Retrieves the rectangle of the popup window related to `poppler_annot`.
     */
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    /**
     * Gets the reply type of `poppler_annot`.
     */
    getReplyTo(): AnnotMarkupReplyType
    /**
     * Retrives the subject text of `poppler_annot`.
     */
    getSubject(): string
    /**
     * Return %TRUE if the markup annotation has a popup window associated
     */
    hasPopup(): boolean
    /**
     * Sets the label text of `poppler_annot,` replacing the current one
     * @param label a text string containing the new label, or %NULL
     */
    setLabel(label?: string | null): void
    /**
     * Sets the opacity of `poppler_annot`. This value applies to
     * all visible elements of `poppler_annot` in its closed state,
     * but not to the pop-up window that appears when it's openened
     * @param opacity a constant opacity value, between 0 (transparent) and 1 (opaque)
     */
    setOpacity(opacity: number): void
    /**
     * Associates a new popup window for editing contents of `poppler_annot`.
     * Popup window shall be displayed by viewers at `popup_rect` on the page.
     * @param popupRect a #PopplerRectangle
     */
    setPopup(popupRect: Rectangle): void
    /**
     * Sets the state of the popup window related to `poppler_annot`.
     * @param isOpen whether popup window should initially be displayed open
     */
    setPopupIsOpen(isOpen: boolean): void
    /**
     * Sets the rectangle of the popup window related to `poppler_annot`.
     * This doesn't have any effect if `poppler_annot` doesn't have a
     * popup associated, use poppler_annot_markup_set_popup() to associate
     * a popup window to a #PopplerAnnotMarkup.
     * @param popplerRect a #PopplerRectangle to set
     */
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler-0.18.Poppler.Annot */
    /**
     * Gets the type of `poppler_annot`
     */
    getAnnotType(): AnnotType
    /**
     * Retrieves the color of `poppler_annot`.
     */
    getColor(): Color
    /**
     * Retrieves the contents of `poppler_annot`.
     */
    getContents(): string
    /**
     * Retrieves the flag field specifying various characteristics of the
     * `poppler_annot`.
     */
    getFlags(): AnnotFlag
    /**
     * Retrieves the last modification data of `poppler_annot`. The returned
     * string will be either a PDF format date or a text string.
     * See also #poppler_date_parse()
     */
    getModified(): string
    /**
     * Retrieves the name of `poppler_annot`.
     */
    getName(): string
    /**
     * Returns the page index to which `poppler_annot` is associated, or -1 if unknown
     */
    getPageIndex(): number
    /**
     * Retrieves the rectangle representing the page coordinates where the
     * annotation `poppler_annot` is placed.
     */
    getRectangle(): /* popplerRect */ Rectangle
    /**
     * Sets the color of `poppler_annot`.
     * @param popplerColor a #PopplerColor, or %NULL
     */
    setColor(popplerColor?: Color | null): void
    /**
     * Sets the contents of `poppler_annot` to the given value,
     * replacing the current contents.
     * @param contents a text string containing the new contents
     */
    setContents(contents: string): void
    /**
     * Sets the flag field specifying various characteristics of the
     * `poppler_annot`.
     * @param flags a #PopplerAnnotFlag
     */
    setFlags(flags: AnnotFlag): void
    /**
     * Move the annotation to the rectangle representing the page coordinates
     * where the annotation `poppler_annot` should be placed.
     * @param popplerRect a #PopplerRectangle with the new annotation's coordinates
     */
    setRectangle(popplerRect: Rectangle): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: AnnotText_ConstructProps)
    _init (config?: AnnotText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: Document, rect: Rectangle): AnnotText
    static $gtype: GObject.Type
}
interface AnnotTextMarkup_ConstructProps extends AnnotMarkup_ConstructProps {
}
class AnnotTextMarkup {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotTextMarkup */
    /**
     * Returns a #GArray of #PopplerQuadrilateral items that map from a
     * location on `page` to a #PopplerAnnotTextMarkup.  This array must be freed
     * when done.
     */
    getQuadrilaterals(): Quadrilateral[]
    /**
     * Set the regions (Quadrilaterals) to apply the text markup in `poppler_annot`.
     * @param quadrilaterals A #GArray of   #PopplerQuadrilateral<!-- -->s
     */
    setQuadrilaterals(quadrilaterals: Quadrilateral[]): void
    /* Methods of Poppler-0.18.Poppler.AnnotMarkup */
    /**
     * Returns the date and time when the annotation was created
     */
    getDate(): GLib.Date
    /**
     * Gets the external data type of `poppler_annot`.
     */
    getExternalData(): AnnotExternalDataType
    /**
     * Retrieves the label text of `poppler_annot`.
     */
    getLabel(): string
    /**
     * Retrieves the opacity value of `poppler_annot`.
     */
    getOpacity(): number
    /**
     * Retrieves the state of the popup window related to `poppler_annot`.
     */
    getPopupIsOpen(): boolean
    /**
     * Retrieves the rectangle of the popup window related to `poppler_annot`.
     */
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    /**
     * Gets the reply type of `poppler_annot`.
     */
    getReplyTo(): AnnotMarkupReplyType
    /**
     * Retrives the subject text of `poppler_annot`.
     */
    getSubject(): string
    /**
     * Return %TRUE if the markup annotation has a popup window associated
     */
    hasPopup(): boolean
    /**
     * Sets the label text of `poppler_annot,` replacing the current one
     * @param label a text string containing the new label, or %NULL
     */
    setLabel(label?: string | null): void
    /**
     * Sets the opacity of `poppler_annot`. This value applies to
     * all visible elements of `poppler_annot` in its closed state,
     * but not to the pop-up window that appears when it's openened
     * @param opacity a constant opacity value, between 0 (transparent) and 1 (opaque)
     */
    setOpacity(opacity: number): void
    /**
     * Associates a new popup window for editing contents of `poppler_annot`.
     * Popup window shall be displayed by viewers at `popup_rect` on the page.
     * @param popupRect a #PopplerRectangle
     */
    setPopup(popupRect: Rectangle): void
    /**
     * Sets the state of the popup window related to `poppler_annot`.
     * @param isOpen whether popup window should initially be displayed open
     */
    setPopupIsOpen(isOpen: boolean): void
    /**
     * Sets the rectangle of the popup window related to `poppler_annot`.
     * This doesn't have any effect if `poppler_annot` doesn't have a
     * popup associated, use poppler_annot_markup_set_popup() to associate
     * a popup window to a #PopplerAnnotMarkup.
     * @param popplerRect a #PopplerRectangle to set
     */
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler-0.18.Poppler.Annot */
    /**
     * Gets the type of `poppler_annot`
     */
    getAnnotType(): AnnotType
    /**
     * Retrieves the color of `poppler_annot`.
     */
    getColor(): Color
    /**
     * Retrieves the contents of `poppler_annot`.
     */
    getContents(): string
    /**
     * Retrieves the flag field specifying various characteristics of the
     * `poppler_annot`.
     */
    getFlags(): AnnotFlag
    /**
     * Retrieves the last modification data of `poppler_annot`. The returned
     * string will be either a PDF format date or a text string.
     * See also #poppler_date_parse()
     */
    getModified(): string
    /**
     * Retrieves the name of `poppler_annot`.
     */
    getName(): string
    /**
     * Returns the page index to which `poppler_annot` is associated, or -1 if unknown
     */
    getPageIndex(): number
    /**
     * Retrieves the rectangle representing the page coordinates where the
     * annotation `poppler_annot` is placed.
     */
    getRectangle(): /* popplerRect */ Rectangle
    /**
     * Sets the color of `poppler_annot`.
     * @param popplerColor a #PopplerColor, or %NULL
     */
    setColor(popplerColor?: Color | null): void
    /**
     * Sets the contents of `poppler_annot` to the given value,
     * replacing the current contents.
     * @param contents a text string containing the new contents
     */
    setContents(contents: string): void
    /**
     * Sets the flag field specifying various characteristics of the
     * `poppler_annot`.
     * @param flags a #PopplerAnnotFlag
     */
    setFlags(flags: AnnotFlag): void
    /**
     * Move the annotation to the rectangle representing the page coordinates
     * where the annotation `poppler_annot` should be placed.
     * @param popplerRect a #PopplerRectangle with the new annotation's coordinates
     */
    setRectangle(popplerRect: Rectangle): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: AnnotTextMarkup_ConstructProps)
    _init (config?: AnnotTextMarkup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newHighlight(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    static newSquiggly(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    static newStrikeout(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    static newUnderline(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    static $gtype: GObject.Type
}
interface Attachment_ConstructProps extends GObject.Object_ConstructProps {
}
class Attachment {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.Attachment */
    getChecksum(): GLib.String
    getCtime(): GLib.DateTime | null
    getDescription(): string
    getMtime(): GLib.DateTime | null
    getName(): string
    getSize(): number
    /**
     * Saves `attachment` to a file indicated by `filename`.  If `error` is set, %FALSE
     * will be returned. Possible errors include those in the #G_FILE_ERROR domain
     * and whatever the save function generates.
     * @param filename name of file to save
     */
    save(filename: string): boolean
    /**
     * Saves `attachment` by feeding the produced data to `save_func`. Can be used
     * when you want to store the attachment to something other than a file, such as
     * an in-memory buffer or a socket. If `error` is set, %FALSE will be
     * returned. Possible errors include those in the #G_FILE_ERROR domain and
     * whatever the save function generates.
     * @param saveFunc a function that is called to save each block of data that the save routine generates.
     */
    saveToCallback(saveFunc: AttachmentSaveFunc): boolean
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: Attachment_ConstructProps)
    _init (config?: Attachment_ConstructProps): void
    static $gtype: GObject.Type
}
interface Document_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Poppler-0.18.Poppler.Document */
    /**
     * The author of the document
     */
    author?: string
    /**
     * The date the document was created as seconds since the Epoch, or -1
     */
    creationDate?: number
    /**
     * The #GDateTime the document was created.
     */
    creationDatetime?: GLib.DateTime
    /**
     * The creator of the document. See also poppler_document_get_creator()
     */
    creator?: string
    /**
     * The keywords associated to the document
     */
    keywords?: string
    /**
     * The date the document was most recently modified as seconds since the Epoch, or -1
     */
    modDate?: number
    /**
     * The #GDateTime the document was most recently modified.
     */
    modDatetime?: GLib.DateTime
    /**
     * The producer of the document. See also poppler_document_get_producer()
     */
    producer?: string
    /**
     * The subject of the document
     */
    subject?: string
    /**
     * The document's title or %NULL
     */
    title?: string
}
class Document {
    /* Properties of Poppler-0.18.Poppler.Document */
    /**
     * The author of the document
     */
    author: string
    /**
     * The date the document was created as seconds since the Epoch, or -1
     */
    creationDate: number
    /**
     * The #GDateTime the document was created.
     */
    creationDatetime: GLib.DateTime
    /**
     * The creator of the document. See also poppler_document_get_creator()
     */
    creator: string
    /**
     * The PDF version as string. See also poppler_document_get_pdf_version_string()
     */
    readonly format: string
    /**
     * The PDF major version number. See also poppler_document_get_pdf_version()
     */
    readonly formatMajor: number
    /**
     * The PDF minor version number. See also poppler_document_get_pdf_version()
     */
    readonly formatMinor: number
    /**
     * The keywords associated to the document
     */
    keywords: string
    /**
     * Whether document is linearized. See also poppler_document_is_linearized()
     */
    readonly linearized: boolean
    /**
     * Document metadata in XML format, or %NULL
     */
    readonly metadata: string
    /**
     * The date the document was most recently modified as seconds since the Epoch, or -1
     */
    modDate: number
    /**
     * The #GDateTime the document was most recently modified.
     */
    modDatetime: GLib.DateTime
    /**
     * The page layout that should be used when the document is opened
     */
    readonly pageLayout: PageLayout
    /**
     * The mode that should be used when the document is opened
     */
    readonly pageMode: PageMode
    /**
     * Flags specifying which operations are permitted when the document is opened
     */
    readonly permissions: Permissions
    readonly printDuplex: PrintDuplex
    /**
     * Suggested number of copies to be printed for this document
     */
    readonly printNCopies: number
    readonly printScaling: PrintScaling
    /**
     * The producer of the document. See also poppler_document_get_producer()
     */
    producer: string
    /**
     * The subject of the document
     */
    subject: string
    /**
     * Document PDF subtype type
     */
    readonly subtype: PDFSubtype
    /**
     * Document PDF subtype conformance
     */
    readonly subtypeConformance: PDFConformance
    /**
     * Document PDF subtype part
     */
    readonly subtypePart: PDFPart
    /**
     * Document PDF subtype. See also poppler_document_get_pdf_subtype_string()
     */
    readonly subtypeString: string
    /**
     * The document's title or %NULL
     */
    title: string
    readonly viewerPreferences: ViewerPreferences
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.Document */
    /**
     * Creates a #PopplerDest for the named destination `link_name` in `document`.
     * 
     * Note that named destinations are bytestrings, not string. That means that
     * unless `link_name` was returned by a poppler function (e.g. is
     * #PopplerDest.named_dest), it needs to be converted to string
     * using poppler_named_dest_from_bytestring() before being passed to this
     * function.
     * 
     * The returned value must be freed with poppler_dest_free().
     * @param linkName a named destination
     */
    findDest(linkName: string): Dest
    /**
     * Returns a #GList containing #PopplerAttachment<!-- -->s.  These attachments
     * are unowned, and must be unreffed, and the list must be freed with
     * g_list_free().
     */
    getAttachments(): Attachment[]
    /**
     * Returns the author of the document
     */
    getAuthor(): string
    /**
     * Returns the date the document was created as seconds since the Epoch
     */
    getCreationDate(): number
    /**
     * Returns the date the document was created as a #GDateTime
     */
    getCreationDateTime(): GLib.DateTime | null
    /**
     * Returns the creator of the document. If the document was converted
     * from another format, the creator is the name of the product
     * that created the original document from which it was converted.
     */
    getCreator(): string
    /**
     * Returns the #PopplerFormField for the given `id`. It must be freed with
     * g_object_unref()
     * @param id an id of a #PopplerFormField
     */
    getFormField(id: number): FormField
    /**
     * Returns the PDF file identifier represented as two byte string arrays of size 32.
     * `permanent_id` is the permanent identifier that is built based on the file
     * contents at the time it was originally created, so that this identifer
     * never changes. `update_id` is the update identifier that is built based on
     * the file contents at the time it was last updated.
     * 
     * Note that returned strings are not null-terminated, they have a fixed
     * size of 32 bytes.
     */
    getId(): [ /* returnType */ boolean, /* permanentId */ string | null, /* updateId */ string | null ]
    /**
     * Returns the keywords associated to the document
     */
    getKeywords(): string
    /**
     * Returns the XML metadata string of the document
     */
    getMetadata(): string
    /**
     * Returns the date the document was most recently modified as seconds since the Epoch
     */
    getModificationDate(): number
    /**
     * Returns the date the document was most recently modified as a #GDateTime
     */
    getModificationDateTime(): GLib.DateTime | null
    /**
     * Returns the number of attachments in a loaded document.
     * See also poppler_document_get_attachments()
     */
    getNAttachments(): number
    /**
     * Returns the number of pages in a loaded document.
     */
    getNPages(): number
    /**
     * Returns the #PopplerPage indexed at `index`.  This object is owned by the
     * caller.
     * @param index a page index
     */
    getPage(index: number): Page
    /**
     * Returns the #PopplerPage reference by `label`.  This object is owned by the
     * caller.  `label` is a human-readable string representation of the page number,
     * and can be document specific.  Typically, it is a value such as "iii" or "3".
     * 
     * By default, "1" refers to the first page.
     * @param label a page label
     */
    getPageByLabel(label: string): Page
    /**
     * Returns the page layout that should be used when the document is opened
     */
    getPageLayout(): PageLayout
    /**
     * Returns a #PopplerPageMode representing how the document should
     * be initially displayed when opened.
     */
    getPageMode(): PageMode
    /**
     * Returns the conformance level of the `document` as #PopplerPDFConformance.
     */
    getPdfConformance(): PDFConformance
    /**
     * Returns the part of the conforming standard that the `document` adheres to
     * as a #PopplerPDFSubtype.
     */
    getPdfPart(): PDFPart
    /**
     * Returns the subtype of `document` as a #PopplerPDFSubtype.
     */
    getPdfSubtype(): PDFSubtype
    /**
     * Returns the PDF subtype version of `document` as a string.
     */
    getPdfSubtypeString(): string | null
    getPdfVersion(): [ /* majorVersion */ number | null, /* minorVersion */ number | null ]
    /**
     * Returns the PDF version of `document` as a string (e.g. PDF-1.6)
     */
    getPdfVersionString(): string
    /**
     * Returns the flags specifying which operations are permitted when the document is opened.
     */
    getPermissions(): Permissions
    /**
     * Returns the duplex mode value suggested for printing by author of the document.
     * Value POPPLER_PRINT_DUPLEX_NONE means that the document does not specify this
     * preference.
     */
    getPrintDuplex(): PrintDuplex
    /**
     * Returns the suggested number of copies to be printed.
     * This preference should be applied only if returned value
     * is greater than 1 since value 1 usually means that
     * the document does not specify it.
     */
    getPrintNCopies(): number
    /**
     * Returns the suggested page ranges to print in the form of array
     * of #PopplerPageRanges and number of ranges.
     * NULL pointer means that the document does not specify page ranges
     * for printing.
     */
    getPrintPageRanges(): PageRange[]
    /**
     * Returns the print scaling value suggested by author of the document.
     */
    getPrintScaling(): PrintScaling
    /**
     * Returns the producer of the document. If the document was converted
     * from another format, the producer is the name of the product
     * that converted it to PDF
     */
    getProducer(): string
    /**
     * Returns the subject of the document
     */
    getSubject(): string
    /**
     * Returns the document's title
     */
    getTitle(): string
    /**
     * Returns %TRUE of `document` has any attachments.
     */
    hasAttachments(): boolean
    /**
     * Returns whether `document` has any javascript in it.
     */
    hasJavascript(): boolean
    /**
     * Returns whether `document` is linearized or not. Linearization of PDF
     * enables efficient incremental access of the PDF file in a network environment.
     */
    isLinearized(): boolean
    /**
     * Saves `document`. Any change made in the document such as
     * form fields filled, annotations added or modified
     * will be saved.
     * If `error` is set, %FALSE will be returned. Possible errors
     * include those in the #G_FILE_ERROR domain.
     * @param uri uri of file to save
     */
    save(uri: string): boolean
    /**
     * Saves a copy of the original `document`.
     * Any change made in the document such as
     * form fields filled by the user will not be saved.
     * If `error` is set, %FALSE will be returned. Possible errors
     * include those in the #G_FILE_ERROR domain.
     * @param uri uri of file to save
     */
    saveACopy(uri: string): boolean
    /**
     * Sets the document's author. If `author` is %NULL, Author
     * entry is removed from the document's Info dictionary.
     * @param author A new author
     */
    setAuthor(author: string): void
    /**
     * Sets the document's creation date. If `creation_date` is -1, CreationDate
     * entry is removed from the document's Info dictionary.
     * @param creationDate A new creation date
     */
    setCreationDate(creationDate: number): void
    /**
     * Sets the document's creation date. If `creation_datetime` is %NULL,
     * CreationDate entry is removed from the document's Info dictionary.
     * @param creationDatetime A new creation #GDateTime
     */
    setCreationDateTime(creationDatetime?: GLib.DateTime | null): void
    /**
     * Sets the document's creator. If `creator` is %NULL, Creator
     * entry is removed from the document's Info dictionary.
     * @param creator A new creator
     */
    setCreator(creator: string): void
    /**
     * Sets the document's keywords. If `keywords` is %NULL,
     * Keywords entry is removed from the document's Info dictionary.
     * @param keywords New keywords
     */
    setKeywords(keywords: string): void
    /**
     * Sets the document's modification date. If `modification_date` is -1, ModDate
     * entry is removed from the document's Info dictionary.
     * @param modificationDate A new modification date
     */
    setModificationDate(modificationDate: number): void
    /**
     * Sets the document's modification date. If `modification_datetime` is %NULL,
     * ModDate entry is removed from the document's Info dictionary.
     * @param modificationDatetime A new modification #GDateTime
     */
    setModificationDateTime(modificationDatetime?: GLib.DateTime | null): void
    /**
     * Sets the document's producer. If `producer` is %NULL,
     * Producer entry is removed from the document's Info dictionary.
     * @param producer A new producer
     */
    setProducer(producer: string): void
    /**
     * Sets the document's subject. If `subject` is %NULL, Subject
     * entry is removed from the document's Info dictionary.
     * @param subject A new subject
     */
    setSubject(subject: string): void
    /**
     * Sets the document's title. If `title` is %NULL, Title entry
     * is removed from the document's Info dictionary.
     * @param title A new title
     */
    setTitle(title: string): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creation-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creation-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creation-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creation-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creation-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creation-datetime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creation-datetime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creation-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creation-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creation-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format-major", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-major", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format-minor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-minor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keywords", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keywords", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::linearized", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linearized", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::linearized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::linearized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::linearized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mod-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mod-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mod-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mod-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mod-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mod-datetime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mod-datetime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mod-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mod-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mod-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::page-layout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-layout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::page-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::page-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::page-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::page-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::page-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::page-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::page-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::permissions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::permissions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::permissions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::permissions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::permissions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::print-duplex", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-duplex", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::print-duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::print-duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::print-n-copies", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-n-copies", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-n-copies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::print-n-copies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::print-n-copies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::print-scaling", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-scaling", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-scaling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::print-scaling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::print-scaling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::producer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::producer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::producer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::producer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::producer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subject", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtype", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtype-conformance", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype-conformance", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtype-conformance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtype-conformance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtype-conformance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtype-part", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype-part", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtype-part", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtype-part", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtype-part", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtype-string", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype-string", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtype-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtype-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtype-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::viewer-preferences", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::viewer-preferences", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::viewer-preferences", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::viewer-preferences", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::viewer-preferences", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Document_ConstructProps)
    _init (config?: Document_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromBytes(bytes: any, password?: string | null): Document
    static newFromData(data: Uint8Array, password?: string | null): Document
    static newFromFile(uri: string, password?: string | null): Document
    static newFromGfile(file: Gio.File, password?: string | null, cancellable?: Gio.Cancellable | null): Document
    static newFromStream(stream: Gio.InputStream, length: number, password?: string | null, cancellable?: Gio.Cancellable | null): Document
    static $gtype: GObject.Type
}
interface FontInfo_ConstructProps extends GObject.Object_ConstructProps {
}
class FontInfo {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.FontInfo */
    free(): void
    /**
     * Scans the document associated with `font_info` for fonts. At most
     * `n_pages` will be scanned starting from the current iterator. `iter` will
     * point to the first font scanned.
     * 
     * Here is a simple example of code to scan fonts in a document
     * 
     * <informalexample><programlisting>
     * font_info = poppler_font_info_new (document);
     * while (poppler_font_info_scan (font_info, 20, &fonts_iter)) {
     *         if (!fonts_iter)
     *                 continue; /<!-- -->* No fonts found in these 20 pages *<!-- -->/
     *         do {
     *                 /<!-- -->* Do something with font iter *<!-- -->/
     *                 g_print ("Font Name: %s\n", poppler_fonts_iter_get_name (fonts_iter));
     *         } while (poppler_fonts_iter_next (fonts_iter));
     *         poppler_fonts_iter_free (fonts_iter);
     * }
     * </programlisting></informalexample>
     * @param nPages number of pages to scan
     */
    scan(nPages: number): [ /* returnType */ boolean, /* iter */ FontsIter ]
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: FontInfo_ConstructProps)
    _init (config?: FontInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: Document): FontInfo
    static $gtype: GObject.Type
}
interface FormField_ConstructProps extends GObject.Object_ConstructProps {
}
class FormField {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.FormField */
    /**
     * Gets the button type of `field`
     */
    buttonGetButtonType(): FormButtonType
    /**
     * Queries a #PopplerFormField and returns its current state. Returns %TRUE if
     * `field` is pressed in and %FALSE if it is raised.
     */
    buttonGetState(): boolean
    /**
     * Sets the status of `field`. Set to %TRUE if you want the #PopplerFormField
     * to be 'pressed in', and %FALSE to raise it.
     * @param state %TRUE or %FALSE
     */
    buttonSetState(state: boolean): void
    /**
     * Checks whether `field` allows multiple choices to be selected
     */
    choiceCanSelectMultiple(): boolean
    choiceCommitOnChange(): boolean
    /**
     * Checks whether spell checking should be done for the contents of `field`
     */
    choiceDoSpellCheck(): boolean
    /**
     * Gets the choice type of `field`
     */
    choiceGetChoiceType(): FormChoiceType
    /**
     * Returns the contents of the item on `field` at the given index
     * @param index the index of the item
     */
    choiceGetItem(index: number): string
    /**
     * Returns the number of items on `field`
     */
    choiceGetNItems(): number
    /**
     * Retrieves the contents of `field`.
     */
    choiceGetText(): string
    /**
     * Checks whether `field` is editable
     */
    choiceIsEditable(): boolean
    /**
     * Checks whether the item at the given index on `field` is currently selected
     * @param index the index of the item
     */
    choiceIsItemSelected(index: number): boolean
    /**
     * Selects the item at the given index on `field`
     * @param index the index of the item
     */
    choiceSelectItem(index: number): void
    /**
     * Sets the text in `field` to the given value, replacing the current contents
     * @param text the new text
     */
    choiceSetText(text: string): void
    /**
     * Changes the state of the item at the given index
     * @param index the index of the item
     */
    choiceToggleItem(index: number): void
    /**
     * Unselects all the items on `field`
     */
    choiceUnselectAll(): void
    /**
     * Retrieves the action (#PopplerAction) that shall be
     * performed when `field` is activated, or %NULL
     */
    getAction(): Action
    /**
     * Retrieves the action (#PopplerAction) that shall be performed when
     * an additional action is triggered on `field,` or %NULL.
     * @param type the type of additional action
     */
    getAdditionalAction(type: AdditionalActionType): Action
    /**
     * Gets the alternate ui name of `field`. This name is also commonly
     * used by pdf producers/readers to show it as a tooltip when `field` area
     * is hovered by a pointing device (eg. mouse).
     */
    getAlternateUiName(): string
    /**
     * Gets the type of `field`
     */
    getFieldType(): FormFieldType
    /**
     * Gets the font size of `field`
     * 
     * WARNING: This function always returns 0. Contact the poppler
     * mailing list if you're interested in implementing it properly
     */
    getFontSize(): number
    /**
     * Gets the id of `field`
     */
    getId(): number
    /**
     * Gets the mapping name of `field` that is used when
     * exporting interactive form field data from the document
     */
    getMappingName(): string
    /**
     * Gets the fully qualified name of `field`. It's constructed by concatenating
     * the partial field names of the field and all of its ancestors.
     */
    getName(): string
    /**
     * Gets the partial name of `field`.
     */
    getPartialName(): string
    /**
     * Checks whether `field` is read only
     */
    isReadOnly(): boolean
    textDoScroll(): boolean
    /**
     * Checks whether spell checking should be done for the contents of `field`
     */
    textDoSpellCheck(): boolean
    /**
     * Retrieves the maximum allowed length of the text in `field`
     */
    textGetMaxLen(): number
    /**
     * Retrieves the contents of `field`.
     */
    textGetText(): string
    /**
     * Gets the text type of `field`.
     */
    textGetTextType(): FormTextType
    /**
     * Checks whether content of `field` is a password and it must be hidden
     */
    textIsPassword(): boolean
    /**
     * Checks whether the contents of `field` are rich text
     */
    textIsRichText(): boolean
    /**
     * Sets the text in `field` to the given value, replacing the current contents.
     * @param text the new text
     */
    textSetText(text: string): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: FormField_ConstructProps)
    _init (config?: FormField_ConstructProps): void
    static $gtype: GObject.Type
}
interface Layer_ConstructProps extends GObject.Object_ConstructProps {
}
class Layer {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.Layer */
    /**
     * Returns the numeric ID the radio button group associated with `layer`.
     */
    getRadioButtonGroupId(): number
    /**
     * Returns the name of the layer suitable for
     * presentation as a title in a viewer's GUI
     */
    getTitle(): string
    /**
     * Hides `layer`. If `layer` is the parent of other nested layers,
     * such layers will be also hidden and will be blocked until `layer`
     * is shown again
     */
    hide(): void
    /**
     * Returns whether `layer` is parent of other nested layers.
     */
    isParent(): boolean
    /**
     * Returns whether `layer` is visible
     */
    isVisible(): boolean
    /**
     * Shows `layer`
     */
    show(): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: Layer_ConstructProps)
    _init (config?: Layer_ConstructProps): void
    static $gtype: GObject.Type
}
interface Media_ConstructProps extends GObject.Object_ConstructProps {
}
class Media {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.Media */
    /**
     * Returns the media clip filename, in case of non-embedded media. filename might be
     * a local relative or absolute path or a URI
     */
    getFilename(): string
    /**
     * Returns the media clip mime-type
     */
    getMimeType(): string
    /**
     * Whether the media clip is embedded in the PDF. If the result is %TRUE, the embedded stream
     * can be saved with poppler_media_save() or poppler_media_save_to_callback() function.
     * If the result is %FALSE, the media clip filename can be retrieved with
     * poppler_media_get_filename() function.
     */
    isEmbedded(): boolean
    /**
     * Saves embedded stream of `poppler_media` to a file indicated by `filename`.
     * If `error` is set, %FALSE will be returned.
     * Possible errors include those in the #G_FILE_ERROR domain
     * and whatever the save function generates.
     * @param filename name of file to save
     */
    save(filename: string): boolean
    /**
     * Saves embedded stream of `poppler_media` by feeding the produced data to `save_func`. Can be used
     * when you want to store the media clip stream to something other than a file, such as
     * an in-memory buffer or a socket. If `error` is set, %FALSE will be
     * returned. Possible errors include those in the #G_FILE_ERROR domain and
     * whatever the save function generates.
     * @param saveFunc a function that is called to save each block of data that the save routine generates.
     */
    saveToCallback(saveFunc: MediaSaveFunc): boolean
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: Media_ConstructProps)
    _init (config?: Media_ConstructProps): void
    static $gtype: GObject.Type
}
interface Movie_ConstructProps extends GObject.Object_ConstructProps {
}
class Movie {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.Movie */
    /**
     * Returns the dimensions of the movie's bounding box (in pixels).
     * The respective PDF movie dictionary entry is optional; if missing,
     * -1x-1 will be returned.
     * @param width width of the movie's bounding box
     * @param height height of the movie's bounding box
     */
    getAspect(width: number, height: number): void
    /**
     * Returns the duration of the movie playback
     */
    getDuration(): number
    /**
     * Returns the local filename identifying a self-describing movie file
     */
    getFilename(): string
    /**
     * Returns the play mode of `poppler_movie`.
     */
    getPlayMode(): MoviePlayMode
    /**
     * Returns the relative speed of the movie
     */
    getRate(): number
    /**
     * Returns the rotation angle
     */
    getRotationAngle(): number
    /**
     * Returns the start position of the movie playback
     */
    getStart(): number
    /**
     * Returns the playback audio volume
     */
    getVolume(): number
    /**
     * Returns whether the user must wait for the movie to be finished before
     * the PDF viewer accepts any interactive action
     */
    isSynchronous(): boolean
    /**
     * Returns whether a poster image representing the Movie
     * shall be displayed. The poster image must be retrieved
     * from the movie file.
     */
    needPoster(): boolean
    /**
     * Returns whether to display a movie controller bar while playing the movie
     */
    showControls(): boolean
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: Movie_ConstructProps)
    _init (config?: Movie_ConstructProps): void
    static $gtype: GObject.Type
}
interface PSFile_ConstructProps extends GObject.Object_ConstructProps {
}
class PSFile {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.PSFile */
    /**
     * Frees `ps_file`
     */
    free(): void
    /**
     * Enable or disable Duplex printing.
     * @param duplex whether to force duplex printing (on printers which support this)
     */
    setDuplex(duplex: boolean): void
    /**
     * Set the output paper size. These values will end up in the
     * DocumentMedia, the BoundingBox DSC comments and other places in the
     * generated PostScript.
     * @param width the paper width in 1/72 inch
     * @param height the paper height in 1/72 inch
     */
    setPaperSize(width: number, height: number): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: PSFile_ConstructProps)
    _init (config?: PSFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: Document, filename: string, firstPage: number, nPages: number): PSFile
    static $gtype: GObject.Type
}
interface Page_ConstructProps extends GObject.Object_ConstructProps {
}
class Page {
    /* Properties of Poppler-0.18.Poppler.Page */
    /**
     * The label of the page or %NULL. See also poppler_page_get_label()
     */
    readonly label: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.Page */
    /**
     * Adds annotation `annot` to `page`.
     * @param annot a #PopplerAnnot to add
     */
    addAnnot(annot: Annot): void
    /**
     * Finds `text` in `page` with the default options (%POPPLER_FIND_DEFAULT) and
     * returns a #GList of rectangles for each occurrence of the text on the page.
     * The coordinates are in PDF points.
     * @param text the text to search for (UTF-8 encoded)
     */
    findText(text: string): Rectangle[]
    /**
     * Finds `text` in `page` with the given #PopplerFindFlags options and
     * returns a #GList of rectangles for each occurrence of the text on the page.
     * The coordinates are in PDF points.
     * @param text the text to search for (UTF-8 encoded)
     * @param options find options
     */
    findTextWithOptions(text: string, options: FindFlags): Rectangle[]
    /**
     * Returns a list of #PopplerAnnotMapping items that map from a location on
     * `page` to a #PopplerAnnot.  This list must be freed with
     * poppler_page_free_annot_mapping() when done.
     */
    getAnnotMapping(): AnnotMapping[]
    getBoundingBox(rect: Rectangle): boolean
    /**
     * Retrurns the crop box of `page`
     */
    getCropBox(): /* rect */ Rectangle
    /**
     * Returns the duration of `page`
     */
    getDuration(): number
    /**
     * Returns a list of #PopplerFormFieldMapping items that map from a
     * location on `page` to a form field.  This list must be freed
     * with poppler_page_free_form_field_mapping() when done.
     */
    getFormFieldMapping(): FormFieldMapping[]
    /**
     * Returns a cairo surface for the image of the `page`
     * @param imageId The image identifier
     */
    getImage(imageId: number): cairo.Surface
    /**
     * Returns a list of #PopplerImageMapping items that map from a
     * location on `page` to an image of the page. This list must be freed
     * with poppler_page_free_image_mapping() when done.
     */
    getImageMapping(): ImageMapping[]
    /**
     * Returns the index of `page`
     */
    getIndex(): number
    /**
     * Returns the label of `page`. Note that page labels
     * and page indices might not coincide.
     */
    getLabel(): string
    /**
     * Returns a list of #PopplerLinkMapping items that map from a
     * location on `page` to a #PopplerAction.  This list must be freed
     * with poppler_page_free_link_mapping() when done.
     */
    getLinkMapping(): LinkMapping[]
    /**
     * Returns a region containing the area that would be rendered by
     * poppler_page_render_selection().
     * The returned region must be freed with cairo_region_destroy()
     * @param scale scale specified as pixels per point
     * @param style a #PopplerSelectionStyle
     * @param selection start and end point of selection as a rectangle
     */
    getSelectedRegion(scale: number, style: SelectionStyle, selection: Rectangle): cairo.Region
    /**
     * Retrieves the contents of the specified `selection` as text.
     * @param style a #PopplerSelectionStyle
     * @param selection the #PopplerRectangle including the text
     */
    getSelectedText(style: SelectionStyle, selection: Rectangle): string
    /**
     * Returns a region containing the area that would be rendered by
     * poppler_page_render_selection() as a #GList of
     * #PopplerRectangle. The returned list must be freed with
     * poppler_page_selection_region_free().
     * @param scale scale specified as pixels per point
     * @param style a #PopplerSelectionStyle
     * @param selection start and end point of selection as a rectangle
     */
    getSelectionRegion(scale: number, style: SelectionStyle, selection: Rectangle): Rectangle[]
    /**
     * Gets the size of `page` at the current scale and rotation.
     */
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Retrieves the text of `page`.
     */
    getText(): string
    /**
     * Obtains the attributes of the text as a #GList of #PopplerTextAttributes.
     * This list must be freed with poppler_page_free_text_attributes() when done.
     * 
     * Each list element is a #PopplerTextAttributes struct where start_index and
     * end_index indicates the range of text (as returned by poppler_page_get_text())
     * to which text attributes apply.
     * 
     * See also poppler_page_get_text_attributes_for_area()
     */
    getTextAttributes(): TextAttributes[]
    /**
     * Obtains the attributes of the text in `area` as a #GList of #PopplerTextAttributes.
     * This list must be freed with poppler_page_free_text_attributes() when done.
     * 
     * Each list element is a #PopplerTextAttributes struct where start_index and
     * end_index indicates the range of text (as returned by poppler_page_get_text_for_area())
     * to which text attributes apply.
     * @param area a #PopplerRectangle
     */
    getTextAttributesForArea(area: Rectangle): TextAttributes[]
    /**
     * Retrieves the text of `page` contained in `area`.
     * @param area a #PopplerRectangle
     */
    getTextForArea(area: Rectangle): string
    /**
     * Obtains the layout of the text as a list of #PopplerRectangle
     * This array must be freed with g_free() when done.
     * 
     * The position in the array represents an offset in the text returned by
     * poppler_page_get_text()
     * 
     * See also poppler_page_get_text_layout_for_area().
     */
    getTextLayout(): [ /* returnType */ boolean, /* rectangles */ Rectangle[] ]
    /**
     * Obtains the layout of the text contained in `area` as a list of #PopplerRectangle
     * This array must be freed with g_free() when done.
     * 
     * The position in the array represents an offset in the text returned by
     * poppler_page_get_text_for_area()
     * @param area a #PopplerRectangle
     */
    getTextLayoutForArea(area: Rectangle): [ /* returnType */ boolean, /* rectangles */ Rectangle[] ]
    /**
     * Get the embedded thumbnail for the specified page.  If the document
     * doesn't have an embedded thumbnail for the page, this function
     * returns %NULL.
     */
    getThumbnail(): cairo.Surface
    /**
     * Returns %TRUE if `page` has a thumbnail associated with it.  It also
     * fills in `width` and `height` with the width and height of the
     * thumbnail.  The values of width and height are not changed if no
     * appropriate thumbnail exists.
     */
    getThumbnailSize(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /**
     * Returns the transition effect of `page`
     */
    getTransition(): PageTransition
    /**
     * Removes annotation `annot` from `page`
     * @param annot a #PopplerAnnot to remove
     */
    removeAnnot(annot: Annot): void
    /**
     * Render the page to the given cairo context. This function
     * is for rendering a page that will be displayed. If you want
     * to render a page that will be printed use
     * poppler_page_render_for_printing() instead.  Please see the documentation
     * for that function for the differences between rendering to the screen and
     * rendering to a printer.
     * @param cairo cairo context to render to
     */
    render(cairo: cairo.Context): void
    /**
     * Render the page to the given cairo context for printing with
     * #POPPLER_PRINT_ALL flags selected.  If you want a different set of flags,
     * use poppler_page_render_for_printing_with_options().
     * 
     * The difference between poppler_page_render() and this function is that some
     * things get rendered differently between screens and printers:
     * 
     * <itemizedlist>
     *   <listitem>
     *     PDF annotations get rendered according to their #PopplerAnnotFlag value.
     *     For example, #POPPLER_ANNOT_FLAG_PRINT refers to whether an annotation
     *     is printed or not, whereas #POPPLER_ANNOT_FLAG_NO_VIEW refers to whether
     *     an annotation is invisible when displaying to the screen.
     *   </listitem>
     *   <listitem>
     *     PDF supports "hairlines" of width 0.0, which often get rendered as
     *     having a width of 1 device pixel.  When displaying on a screen, Cairo
     *     may render such lines wide so that they are hard to see, and Poppler
     *     makes use of PDF's Stroke Adjust graphics parameter to make the lines
     *     easier to see.  However, when printing, Poppler is able to directly use a
     *     printer's pixel size instead.
     *   </listitem>
     *   <listitem>
     *     Some advanced features in PDF may require an image to be rasterized
     *     before sending off to a printer.  This may produce raster images which
     *     exceed Cairo's limits.  The "printing" functions will detect this condition
     *     and try to down-scale the intermediate surfaces as appropriate.
     *   </listitem>
     * </itemizedlist>
     * @param cairo cairo context to render to
     */
    renderForPrinting(cairo: cairo.Context): void
    /**
     * Render the page to the given cairo context for printing
     * with the specified options
     * 
     * See the documentation for poppler_page_render_for_printing() for the
     * differences between rendering to the screen and rendering to a printer.
     * @param cairo cairo context to render to
     * @param options print options
     */
    renderForPrintingWithOptions(cairo: cairo.Context, options: PrintFlags): void
    /**
     * Render the selection specified by `selection` for `page` to
     * the given cairo context.  The selection will be rendered, using
     * `glyph_color` for the glyphs and `background_color` for the selection
     * background.
     * 
     * If non-NULL, `old_selection` specifies the selection that is already
     * rendered to `cairo,` in which case this function will (some day)
     * only render the changed part of the selection.
     * @param cairo cairo context to render to
     * @param selection start and end point of selection as a rectangle
     * @param oldSelection previous selection
     * @param style a #PopplerSelectionStyle
     * @param glyphColor color to use for drawing glyphs
     * @param backgroundColor color to use for the selection background
     */
    renderSelection(cairo: cairo.Context, selection: Rectangle, oldSelection: Rectangle, style: SelectionStyle, glyphColor: Color, backgroundColor: Color): void
    /**
     * Render the page on a postscript file
     * @param psFile the PopplerPSFile to render to
     */
    renderToPs(psFile: PSFile): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Page_ConstructProps)
    _init (config?: Page_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Frees a list of #PopplerAnnotMapping<!-- -->s allocated by
     * poppler_page_get_annot_mapping().  It also unreferences the #PopplerAnnot<!-- -->s
     * that each mapping contains, so if you want to keep them around, you need to
     * reference them with g_object_ref().
     * @param list A list of   #PopplerAnnotMapping<!-- -->s
     */
    static freeAnnotMapping(list: AnnotMapping[]): void
    /**
     * Frees a list of #PopplerFormFieldMapping<!-- -->s allocated by
     * poppler_page_get_form_field_mapping().
     * @param list A list of   #PopplerFormFieldMapping<!-- -->s
     */
    static freeFormFieldMapping(list: FormFieldMapping[]): void
    /**
     * Frees a list of #PopplerImageMapping<!-- -->s allocated by
     * poppler_page_get_image_mapping().
     * @param list A list of   #PopplerImageMapping<!-- -->s
     */
    static freeImageMapping(list: ImageMapping[]): void
    /**
     * Frees a list of #PopplerLinkMapping<!-- -->s allocated by
     * poppler_page_get_link_mapping().  It also frees the #PopplerAction<!-- -->s
     * that each mapping contains, so if you want to keep them around, you need to
     * copy them with poppler_action_copy().
     * @param list A list of   #PopplerLinkMapping<!-- -->s
     */
    static freeLinkMapping(list: LinkMapping[]): void
    /**
     * Frees a list of #PopplerTextAttributes<!-- -->s allocated by
     * poppler_page_get_text_attributes().
     * @param list A list of   #PopplerTextAttributes<!-- -->s
     */
    static freeTextAttributes(list: TextAttributes[]): void
    /**
     * Frees `region`
     * @param region a #GList of   #PopplerRectangle
     */
    static selectionRegionFree(region: Rectangle[]): void
    static $gtype: GObject.Type
}
interface StructureElement_ConstructProps extends GObject.Object_ConstructProps {
}
class StructureElement {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.StructureElement */
    /**
     * Acronyms and abbreviations contained in elements of type
     * #POPPLER_STRUCTURE_ELEMENT_SPAN may have an associated expanded
     * text form, which can be retrieved using this function.
     */
    getAbbreviation(): string
    /**
     * Obtains the actual text enclosed by the element (and its child elements).
     * The actual text is mostly used for non-text elements like images and
     * figures which <emphasis>do</emphasis> have the graphical appearance of text, like
     * a logo. For those the actual text is the equivalent text to those
     * graphical elements which look like text when rendered.
     * 
     * Note that for elements containing proper text, the function
     * poppler_structure_element_get_text() must be used instead.
     */
    getActualText(): string
    /**
     * Obtains the “alternate” text representation of the element (and its child
     * elements). This is mostly used for non-text elements like images and
     * figures, to specify a textual description of the element.
     * 
     * Note that for elements containing proper text, the function
     * poppler_structure_element_get_text() must be used instead.
     */
    getAltText(): string
    /**
     * Obtains the background color of the element. If this attribute is
     * not specified, the element shall be treated as if it were transparent.
     */
    getBackgroundColor(): [ /* returnType */ boolean, /* color */ Color ]
    /**
     * Obtains how much the text contained in the inline-level structure element should be shifted,
     * measuring from the baseline of the glyphs.
     */
    getBaselineShift(): number
    /**
     * Obtains the block-alignment mode of the block-level structure element.
     */
    getBlockAlign(): StructureBlockAlign
    /**
     * Obtains the color of border around the element. The result values
     * are in before-after-start-end ordering (for the typical Western
     * left-to-right writing, that is top-bottom-left-right).
     * If this attribute is not specified, the border color for this element shall
     * be the current text fill color in effect at the start of its associated
     * content.
     */
    getBorderColor(): [ /* returnType */ boolean, /* colors */ Color[] ]
    /**
     * Obtains the border style of a structure element. The result values
     * are in before-after-start-end ordering. For example, using Western
     * left-to-right writing, that is top-bottom-left-right.
     */
    getBorderStyle(): /* borderStyles */ StructureBorderStyle[]
    /**
     * Obtains the thickness of the border of an element. The result values
     * are in before-after-start-end ordering (for the typical Western
     * left-to-right writing, that is top-bottom-left-right).
     * A value of 0 indicates that the border shall not be drawn.
     */
    getBorderThickness(): [ /* returnType */ boolean, /* borderThicknesses */ number[] ]
    /**
     * Obtains the size of the bounding box of a block-level structure element.
     */
    getBoundingBox(): [ /* returnType */ boolean, /* boundingBox */ Rectangle ]
    /**
     * Obtains the color of the content contained in the element.
     * If this attribute is not specified, the color for this element shall
     * be the current text fill color in effect at the start of its associated content.
     */
    getColor(): [ /* returnType */ boolean, /* color */ Color ]
    /**
     * Obtains the number of columns used to lay out the content contained
     * in the grouping element.
     */
    getColumnCount(): number
    /**
     * Obtains the size of the gaps in between adjacent columns. Returns an
     * array of elements: the first one is the size of the gap in between
     * columns 1 and 2, second is the size between columns 2 and 3, and so on.
     * 
     * For elements which use a single column, %NULL is returned and `n_values`
     * is set to zero.
     * 
     * If the attribute is undefined, %NULL is returned and `n_values` is set
     * to a non-zero value.
     * 
     * The array with the results is allocated by the function. When it is
     * not needed anymore, be sure to call g_free() on it.
     */
    getColumnGaps(): number[]
    /**
     * Obtains an array with the widths of the columns.
     * 
     * The array with the results is allocated by the function. When it is
     * not needed anymore, be sure to call g_free() on it.
     */
    getColumnWidths(): number[]
    /**
     * Obtains the amount of indentation at the end of the block-level structure element.
     */
    getEndIndent(): number
    /**
     * Obtains the textual description of the form element. Note that the
     * description is for informative purposes, and it is not intended
     * to be rendered. For example, assistive technologies may use the
     * description field to provide an alternate way of presenting an
     * element to the user.
     * 
     * The returned string is allocated by the function. When it is
     * not needed anymore, be sure to call g_free() on it.
     */
    getFormDescription(): string
    /**
     * Obtains the role of a form structure element that is part of a form, or is
     * a form field. This hints how the control for the element is intended
     * to be rendered.
     */
    getFormRole(): StructureFormRole
    /**
     * For a structure element that is a form field, obtains in which state
     * the associated control is expected to be rendered.
     */
    getFormState(): StructureFormState
    /**
     * Obtains the glyph orientation for the text contained in a
     * inline-level structure element.
     */
    getGlyphOrientation(): StructureGlyphOrientation
    /**
     * Obtains the height of the block-level structure element. Note that for elements which do
     * not specify a height, it has to be calculated, and in this case -1 is returned.
     */
    getHeight(): number
    /**
     * Obtains the identifier of an element.
     */
    getId(): string
    /**
     * Obtains the inline-alignment mode of the block-level structure element.
     */
    getInlineAlign(): StructureInlineAlign
    getKind(): StructureElementKind
    /**
     * Obtains the language and country code for the content in an element,
     * in two-letter ISO format, e.g. <code>en_ES</code>, or %NULL if not
     * defined.
     */
    getLanguage(): string
    /**
     * Obtains the line height for the text contained in the inline-level structure element.
     * Note that for elements which do not specify a line height, it has to be calculated,
     * and in this case -1 is returned.
     */
    getLineHeight(): number
    /**
     * Obtains the list numbering style for list items.
     */
    getListNumbering(): StructureListNumbering
    /**
     * Obtains the padding of an element (space around it). The result
     * values are in before-after-start-end ordering. For example using
     * Western left-to-right writing, that is top-bottom-left-right.
     */
    getPadding(): /* paddings */ number[]
    /**
     * Obtains the page number in which the element is contained.
     */
    getPage(): number
    /**
     * Obtains the placement type of the structure element.
     */
    getPlacement(): StructurePlacement
    /**
     * Obtains the alignment for the ruby text contained in a
     * inline-level structure element.
     */
    getRubyAlign(): StructureRubyAlign
    /**
     * Obtains the position for the ruby text contained in a
     * inline-level structure element.
     */
    getRubyPosition(): StructureRubyPosition
    /**
     * Obtains the amount of empty space after the block-level structure element.
     */
    getSpaceAfter(): number
    /**
     * Obtains the amount of empty space before the block-level structure element.
     */
    getSpaceBefore(): number
    /**
     * Obtains the amount of indentation at the beginning of the block-level structure element.
     */
    getStartIndent(): number
    /**
     * Obtains the table cell border style of a block-level structure element. The result values
     * are in before-after-start-end ordering. For example, using Western
     * left-to-right writing, that is top-bottom-left-right.
     */
    getTableBorderStyle(): /* borderStyles */ StructureBorderStyle[]
    /**
     * Obtains the number of columns the table element spans to.
     */
    getTableColumnSpan(): number
    /**
     * Obtains an array with the names of the table column headers. This is only
     * useful for table header row elements.
     * 
     * The array with the results is allocated by the function. The number
     * of items in the returned array can be obtained with g_strv_length().
     * The returned value must be freed using g_strfreev().
     */
    getTableHeaders(): string[]
    /**
     * Obtains the padding between the table cell’s content rectangle and the
     * surrounding border of a block-level structure element. The result
     * values are in before-after-start-end ordering (for the typical
     * Western left-to-right writing, that is top-bottom-left-right).
     */
    getTablePadding(): /* paddings */ number[]
    /**
     * Obtains the number of rows the table element spans to.
     */
    getTableRowSpan(): number
    /**
     * Obtains the scope of a table structure element.
     */
    getTableScope(): StructureTableScope
    /**
     * Obtains the textual summary of the contents of the table element. Note that
     * the summary is meant for informative purposes, and it is not intended
     * to be rendered. For example, assistive technologies may use the
     * description field to provide an alternate way of presenting an element
     * to the user, or a document indexer may want to scan it for additional
     * keywords.
     * 
     * The returned string is allocated by the function. When it is
     * not needed anymore, be sure to call g_free() on it.
     */
    getTableSummary(): string
    /**
     * Obtains the text enclosed by an element, or the text enclosed by the
     * elements in the subtree (including the element itself).
     * @param flags A #PopplerStructureGetTextFlags value, or    %POPPLER_STRUCTURE_GET_TEXT_NONE to disable all the flags.
     */
    getText(flags: StructureGetTextFlags): string
    /**
     * Obtains the text alignment mode of the text contained into a
     * block-level structure element.
     */
    getTextAlign(): StructureTextAlign
    /**
     * Obtains the color of the text decoration for the text contained
     * in the inline-level structure element.
     * If this attribute is not specified, the color for this element shall be the current fill
     * color in effect at the start of its associated content.
     */
    getTextDecorationColor(): [ /* returnType */ boolean, /* color */ Color ]
    /**
     * Obtains the thickness of the text decoration for the text contained
     * in the inline-level structure element.
     * If this attribute is not specified, it shall be derived from the current
     * stroke thickness in effect at the start of the element’s associated content.
     */
    getTextDecorationThickness(): number
    /**
     * Obtains the text decoration type of the text contained in the
     * inline-level structure element.
     */
    getTextDecorationType(): StructureTextDecoration
    /**
     * Obtains the amount of indentation of the text contained in the block-level structure element.
     */
    getTextIndent(): number
    /**
     * Obtains the text enclosed by an element, as an array of #PopplerTextSpan
     * structures. Each item in the list is a piece of text which share the same
     * attributes, plus its attributes. The following example shows how to
     * obtain and free the text spans of an element:
     * 
     * <informalexample><programlisting>
     * guint i, n_spans;
     * PopplerTextSpan **text_spans =
     *    poppler_structure_element_get_text_spans (element, &n_spans);
     * /<!-- -->* Use the text spans *<!-- -->/
     * for (i = 0; i < n_spans; i++)
     *    poppler_text_span_free (text_spans[i]);
     * g_free (text_spans);
     * </programlisting></informalexample>
     */
    getTextSpans(): TextSpan[]
    /**
     * Obtains the title of an element.
     */
    getTitle(): string
    /**
     * Obtains the width of the block-level structure element. Note that for elements which do
     * not specify a width, it has to be calculated, and in this case -1 is returned.
     */
    getWidth(): number
    /**
     * Obtains the writing mode (writing direction) of the content associated
     * with a structure element.
     */
    getWritingMode(): StructureWritingMode
    /**
     * Checks whether an element is a block element.
     */
    isBlock(): boolean
    /**
     * Checks whether an element is actual document content.
     */
    isContent(): boolean
    /**
     * Checks whether an element is a grouping element.
     */
    isGrouping(): boolean
    /**
     * Checks whether an element is an inline element.
     */
    isInline(): boolean
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param propertyName the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec the #GParamSpec of the property which changed.
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
    constructor (config?: StructureElement_ConstructProps)
    _init (config?: StructureElement_ConstructProps): void
    static $gtype: GObject.Type
}
class ActionAny {
    /* Fields of Poppler-0.18.Poppler.ActionAny */
    type: ActionType
    title: string
    static name: string
}
class ActionGotoDest {
    /* Fields of Poppler-0.18.Poppler.ActionGotoDest */
    type: ActionType
    title: string
    dest: Dest
    static name: string
}
class ActionGotoRemote {
    /* Fields of Poppler-0.18.Poppler.ActionGotoRemote */
    type: ActionType
    title: string
    fileName: string
    dest: Dest
    static name: string
}
class ActionJavascript {
    /* Fields of Poppler-0.18.Poppler.ActionJavascript */
    type: ActionType
    title: string
    script: string
    static name: string
}
class ActionLaunch {
    /* Fields of Poppler-0.18.Poppler.ActionLaunch */
    type: ActionType
    title: string
    fileName: string
    params: string
    static name: string
}
class ActionLayer {
    /* Fields of Poppler-0.18.Poppler.ActionLayer */
    /**
     * a #PopplerActionLayerAction
     */
    action: ActionLayerAction
    /**
     * list of #PopplerLayer<!-- -->s
     */
    layers: object[]
    static name: string
}
class ActionMovie {
    /* Fields of Poppler-0.18.Poppler.ActionMovie */
    type: ActionType
    title: string
    operation: ActionMovieOperation
    movie: Movie
    static name: string
}
class ActionNamed {
    /* Fields of Poppler-0.18.Poppler.ActionNamed */
    type: ActionType
    title: string
    namedDest: string
    static name: string
}
class ActionOCGState {
    /* Fields of Poppler-0.18.Poppler.ActionOCGState */
    type: ActionType
    title: string
    stateList: object[]
    static name: string
}
class ActionRendition {
    /* Fields of Poppler-0.18.Poppler.ActionRendition */
    type: ActionType
    title: string
    op: number
    media: Media
    static name: string
}
class ActionResetForm {
    /* Fields of Poppler-0.18.Poppler.ActionResetForm */
    type: ActionType
    title: string
    fields: object[]
    exclude: boolean
    static name: string
}
class ActionUri {
    /* Fields of Poppler-0.18.Poppler.ActionUri */
    type: ActionType
    title: string
    uri: string
    static name: string
}
class AnnotCalloutLine {
    /* Fields of Poppler-0.18.Poppler.AnnotCalloutLine */
    multiline: boolean
    x1: number
    y1: number
    x2: number
    y2: number
    x3: number
    y3: number
    /* Methods of Poppler-0.18.Poppler.AnnotCalloutLine */
    /**
     * It does copy `callout` to a new #PopplerAnnotCalloutLine.
     */
    copy(): AnnotCalloutLine
    /**
     * Frees the memory used by #PopplerAnnotCalloutLine.
     */
    free(): void
    static name: string
    static new(): AnnotCalloutLine
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AnnotCalloutLine
}
class AnnotMapping {
    /* Fields of Poppler-0.18.Poppler.AnnotMapping */
    /**
     * a #PopplerRectangle representing an area of the page
     */
    area: Rectangle
    /**
     * a #PopplerAnnot
     */
    annot: Annot
    /* Methods of Poppler-0.18.Poppler.AnnotMapping */
    /**
     * Creates a copy of `mapping`
     */
    copy(): AnnotMapping
    /**
     * Frees the given #PopplerAnnotMapping
     */
    free(): void
    static name: string
    static new(): AnnotMapping
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AnnotMapping
}
abstract class AttachmentClass {
    /* Fields of Poppler-0.18.Poppler.AttachmentClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class Color {
    /* Fields of Poppler-0.18.Poppler.Color */
    /**
     * the red component of color
     */
    red: number
    /**
     * the green component of color
     */
    green: number
    /**
     * the blue component of color
     */
    blue: number
    /* Methods of Poppler-0.18.Poppler.Color */
    /**
     * Creates a copy of `color`
     */
    copy(): Color
    /**
     * Frees the given #PopplerColor
     */
    free(): void
    static name: string
    static new(): Color
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Color
}
class Dest {
    /* Fields of Poppler-0.18.Poppler.Dest */
    /**
     * type of destination
     */
    type: DestType
    /**
     * page number
     */
    pageNum: number
    /**
     * left coordinate
     */
    left: number
    /**
     * bottom coordinate
     */
    bottom: number
    /**
     * right coordinate
     */
    right: number
    /**
     * top coordinate
     */
    top: number
    /**
     * scale factor
     */
    zoom: number
    /**
     * name of the destination (#POPPLER_DEST_NAMED only)
     */
    namedDest: string
    /**
     * whether left coordinate should be changed
     */
    changeLeft: number
    /**
     * whether top coordinate should be changed
     */
    changeTop: number
    /**
     * whether scale factor should be changed
     */
    changeZoom: number
    /* Methods of Poppler-0.18.Poppler.Dest */
    /**
     * Copies `dest,` creating an identical #PopplerDest.
     */
    copy(): Dest
    /**
     * Frees `dest`
     */
    free(): void
    static name: string
}
class FontsIter {
    /* Methods of Poppler-0.18.Poppler.FontsIter */
    /**
     * Creates a copy of `iter`
     */
    copy(): FontsIter
    /**
     * Frees the given #PopplerFontsIter
     */
    free(): void
    /**
     * Returns the encoding of the font associated with `iter`
     */
    getEncoding(): string
    /**
     * The filename of the font associated with `iter` or %NULL if
     * the font is embedded
     */
    getFileName(): string
    /**
     * Returns the type of the font associated with `iter`
     */
    getFontType(): FontType
    /**
     * Returns the full name of the font associated with `iter`
     */
    getFullName(): string
    /**
     * Returns the name of the font associated with `iter`
     */
    getName(): string
    /**
     * The name of the substitute font of the font associated with `iter` or %NULL if
     * the font is embedded
     */
    getSubstituteName(): string
    /**
     * Returns whether the font associated with `iter` is embedded in the document
     */
    isEmbedded(): boolean
    /**
     * Returns whether the font associated with `iter` is a subset of another font
     */
    isSubset(): boolean
    /**
     * Sets `iter` to point to the next font
     */
    next(): boolean
    static name: string
}
class FormFieldMapping {
    /* Fields of Poppler-0.18.Poppler.FormFieldMapping */
    /**
     * a #PopplerRectangle representing an area of the page
     */
    area: Rectangle
    /**
     * a #PopplerFormField
     */
    field: FormField
    /* Methods of Poppler-0.18.Poppler.FormFieldMapping */
    /**
     * Creates a copy of `mapping`
     */
    copy(): FormFieldMapping
    /**
     * Frees the given #PopplerFormFieldMapping
     */
    free(): void
    static name: string
    static new(): FormFieldMapping
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FormFieldMapping
}
class ImageMapping {
    /* Fields of Poppler-0.18.Poppler.ImageMapping */
    /**
     * a #PopplerRectangle representing an area of the page
     */
    area: Rectangle
    /**
     * an image identifier
     */
    imageId: number
    /* Methods of Poppler-0.18.Poppler.ImageMapping */
    /**
     * Creates a copy of `mapping`
     */
    copy(): ImageMapping
    /**
     * Frees the given #PopplerImageMapping
     */
    free(): void
    static name: string
    static new(): ImageMapping
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ImageMapping
}
class IndexIter {
    /* Methods of Poppler-0.18.Poppler.IndexIter */
    /**
     * Creates a new #PopplerIndexIter as a copy of `iter`.  This must be freed with
     * poppler_index_iter_free().
     */
    copy(): IndexIter
    /**
     * Frees `iter`.
     */
    free(): void
    /**
     * Returns the #PopplerAction associated with `iter`.  It must be freed with
     * poppler_action_free().
     */
    getAction(): Action
    /**
     * Returns a newly created child of `parent,` or %NULL if the iter has no child.
     * See poppler_index_iter_new() for more information on this function.
     */
    getChild(): IndexIter
    /**
     * Returns whether this node should be expanded by default to the user.  The
     * document can provide a hint as to how the document's index should be expanded
     * initially.
     */
    isOpen(): boolean
    /**
     * Sets `iter` to point to the next action at the current level, if valid.  See
     * poppler_index_iter_new() for more information.
     */
    next(): boolean
    static name: string
    static new(document: Document): IndexIter
    constructor(document: Document)
    /* Static methods and pseudo-constructors */
    static new(document: Document): IndexIter
}
class LayersIter {
    /* Methods of Poppler-0.18.Poppler.LayersIter */
    /**
     * Creates a new #PopplerLayersIter as a copy of `iter`.  This must be freed with
     * poppler_layers_iter_free().
     */
    copy(): LayersIter
    /**
     * Frees `iter`.
     */
    free(): void
    /**
     * Returns a newly created child of `parent,` or %NULL if the iter has no child.
     * See poppler_layers_iter_new() for more information on this function.
     */
    getChild(): LayersIter
    /**
     * Returns the #PopplerLayer associated with `iter`.
     */
    getLayer(): Layer
    /**
     * Returns the title associated with `iter`.  It must be freed with
     * g_free().
     */
    getTitle(): string
    /**
     * Sets `iter` to point to the next action at the current level, if valid.  See
     * poppler_layers_iter_new() for more information.
     */
    next(): boolean
    static name: string
    static new(document: Document): LayersIter
    constructor(document: Document)
    /* Static methods and pseudo-constructors */
    static new(document: Document): LayersIter
}
class LinkMapping {
    /* Fields of Poppler-0.18.Poppler.LinkMapping */
    /**
     * a #PopplerRectangle representing an area of the page
     */
    area: Rectangle
    /**
     * a #PopplerAction
     */
    action: Action
    /* Methods of Poppler-0.18.Poppler.LinkMapping */
    /**
     * Creates a copy of `mapping`
     */
    copy(): LinkMapping
    /**
     * Frees the given #PopplerLinkMapping
     */
    free(): void
    static name: string
    static new(): LinkMapping
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): LinkMapping
}
class PageRange {
    /* Fields of Poppler-0.18.Poppler.PageRange */
    /**
     * first page in the range of pages
     */
    startPage: number
    /**
     * last page in the range of pages
     */
    endPage: number
    static name: string
}
class PageTransition {
    /* Fields of Poppler-0.18.Poppler.PageTransition */
    /**
     * the type of transtition
     */
    type: PageTransitionType
    /**
     * the dimension in which the transition effect shall occur.
     * Only for #POPPLER_PAGE_TRANSITION_SPLIT and #POPPLER_PAGE_TRANSITION_BLINDS transition types
     */
    alignment: PageTransitionAlignment
    /**
     * the direction of motion for the transition effect.
     * Only for #POPPLER_PAGE_TRANSITION_SPLIT, #POPPLER_PAGE_TRANSITION_BOX and #POPPLER_PAGE_TRANSITION_FLY
     * transition types
     */
    direction: PageTransitionDirection
    /**
     * the duration of the transition effect
     */
    duration: number
    /**
     * the direction in which the specified transition effect shall moves,
     * expressed in degrees counterclockwise starting from a left-to-right direction.
     * Only for #POPPLER_PAGE_TRANSITION_WIPE, #POPPLER_PAGE_TRANSITION_GLITTER, #POPPLER_PAGE_TRANSITION_FLY,
     * #POPPLER_PAGE_TRANSITION_COVER, #POPPLER_PAGE_TRANSITION_UNCOVER and #POPPLER_PAGE_TRANSITION_PUSH
     * transition types
     */
    angle: number
    /**
     * the starting or ending scale at which the changes shall be drawn.
     * Only for #POPPLER_PAGE_TRANSITION_FLY transition type
     */
    scale: number
    /**
     * whether the area that will be flown is rectangular and opaque.
     * Only for #POPPLER_PAGE_TRANSITION_FLY transition type
     */
    rectangular: boolean
    durationReal: number
    /* Methods of Poppler-0.18.Poppler.PageTransition */
    /**
     * Creates a copy of `transition`
     */
    copy(): PageTransition
    /**
     * Frees the given #PopplerPageTransition
     */
    free(): void
    static name: string
    static new(): PageTransition
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PageTransition
}
class Point {
    /* Fields of Poppler-0.18.Poppler.Point */
    /**
     * x coordinate
     */
    x: number
    /**
     * y coordinate
     */
    y: number
    /* Methods of Poppler-0.18.Poppler.Point */
    /**
     * Creates a copy of `point`. The copy must be freed with poppler_point_free()
     * after use.
     */
    copy(): Point
    /**
     * Frees the memory used by `point`
     */
    free(): void
    static name: string
    static new(): Point
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Point
}
class Quadrilateral {
    /* Fields of Poppler-0.18.Poppler.Quadrilateral */
    /**
     * a #PopplerPoint with the first vertex coordinates
     */
    p1: Point
    /**
     * a #PopplerPoint with the second vertex coordinates
     */
    p2: Point
    /**
     * a #PopplerPoint with the third vertex coordinates
     */
    p3: Point
    /**
     * a #PopplerPoint with the fourth vertex coordinates
     */
    p4: Point
    /* Methods of Poppler-0.18.Poppler.Quadrilateral */
    /**
     * Creates a copy of `quad`. The copy must be freed with poppler_quadrilateral_free() after use.
     */
    copy(): Quadrilateral
    /**
     * Frees the memory used by `quad`
     */
    free(): void
    static name: string
    static new(): Quadrilateral
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Quadrilateral
}
class Rectangle {
    /* Fields of Poppler-0.18.Poppler.Rectangle */
    /**
     * x coordinate of lower left corner
     */
    x1: number
    /**
     * y coordinate of lower left corner
     */
    y1: number
    /**
     * x coordinate of upper right corner
     */
    x2: number
    /**
     * y coordinate of upper right corner
     */
    y2: number
    /* Methods of Poppler-0.18.Poppler.Rectangle */
    /**
     * Creates a copy of `rectangle`
     */
    copy(): Rectangle
    /**
     * Frees the given #PopplerRectangle
     */
    free(): void
    static name: string
    static new(): Rectangle
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Rectangle
}
class StructureElementIter {
    /* Methods of Poppler-0.18.Poppler.StructureElementIter */
    /**
     * Creates a new #PopplerStructureElementIter as a copy of `iter`. The
     * returned value must be freed with poppler_structure_element_iter_free().
     */
    copy(): StructureElementIter
    /**
     * Frees `iter`.
     */
    free(): void
    /**
     * Returns a new iterator to the children elements of the
     * #PopplerStructureElement associated with `iter`. The returned value must
     * be freed with poppler_structure_element_iter_free().
     */
    getChild(): StructureElementIter
    /**
     * Returns the #PopplerStructureElementIter associated with `iter`.
     */
    getElement(): StructureElement
    /**
     * Sets `iter` to point to the next structure element at the current level
     * of the tree, if valid. See poppler_structure_element_iter_new() for more
     * information.
     */
    next(): boolean
    static name: string
    static new(popplerDocument: Document): StructureElementIter
    constructor(popplerDocument: Document)
    /* Static methods and pseudo-constructors */
    static new(popplerDocument: Document): StructureElementIter
}
class TextAttributes {
    /* Fields of Poppler-0.18.Poppler.TextAttributes */
    /**
     * font name
     */
    fontName: string
    /**
     * font size
     */
    fontSize: number
    /**
     * if text is underlined
     */
    isUnderlined: boolean
    /**
     * a #PopplerColor, the foreground color
     */
    color: Color
    /**
     * start position this text attributes apply
     */
    startIndex: number
    /**
     * end position this text attributes apply
     */
    endIndex: number
    /* Methods of Poppler-0.18.Poppler.TextAttributes */
    /**
     * Creates a copy of `text_attrs`
     */
    copy(): TextAttributes
    /**
     * Frees the given #PopplerTextAttributes
     */
    free(): void
    static name: string
    static new(): TextAttributes
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): TextAttributes
}
class TextSpan {
    /* Methods of Poppler-0.18.Poppler.TextSpan */
    /**
     * Makes a copy of a text span.
     */
    copy(): TextSpan
    /**
     * Frees a text span.
     */
    free(): void
    /**
     * Obtains the color in which the text is to be rendered.
     */
    getColor(): /* color */ Color
    /**
     * Obtains the name of the font in which the span is to be rendered.
     */
    getFontName(): string
    /**
     * Obtains the text contained in the span.
     */
    getText(): string
    /**
     * Check whether a text span is meant to be rendered using a bold font.
     */
    isBoldFont(): boolean
    /**
     * Check wether a text span is meant to be rendered using a fixed-width font.
     */
    isFixedWidthFont(): boolean
    /**
     * Check whether a text span is meant to be rendered using a serif font.
     */
    isSerifFont(): boolean
    static name: string
}
class Action {
    /* Methods of Poppler-0.18.Poppler.Action */
    /**
     * Copies `action,` creating an identical #PopplerAction.
     */
    copy(): Action
    /**
     * Frees `action`
     */
    free(): void
    static name: string
}
}
export default Poppler;