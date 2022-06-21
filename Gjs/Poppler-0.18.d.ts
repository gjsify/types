// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Poppler-0.18
 */

import type * as Gjs from './Gjs';
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
/**
 * Parses a PDF format date string and converts it to a #time_t. Returns #FALSE
 * if the parsing fails or the input string is not a valid PDF format date string
 * @param date string to parse
 * @param timet an uninitialized #time_t
 */
function date_parse(date: string, timet: number): boolean
function error_quark(): GLib.Quark
/**
 * Returns the backend compiled into the poppler library.
 */
function get_backend(): Backend
/**
 * Returns the version of poppler in use.  This result is not to be freed.
 */
function get_version(): string
/**
 * Converts a bytestring into a zero-terminated string suitable to
 * pass to poppler_document_find_dest().
 * 
 * Note that the returned string has no defined encoding and is not
 * suitable for display to the user.
 * 
 * The returned data must be freed using g_free().
 * @param data the bytestring data
 */
function named_dest_from_bytestring(data: Uint8Array): string
/**
 * Converts a named dest string (e.g. from #PopplerDest.named_dest) into a
 * bytestring, inverting the transformation of
 * poppler_named_dest_from_bytestring().
 * 
 * Note that the returned data is not zero terminated and may also
 * contains embedded NUL bytes.
 * 
 * If `name` is not a valid named dest string, returns %NULL.
 * 
 * The returned data must be freed using g_free().
 * @param name the named dest string
 */
function named_dest_to_bytestring(name: string): Uint8Array | null
/**
 * Specifies the type of the function passed to
 * poppler_attachment_save_to_callback().  It is called once for each block of
 * bytes that is "written" by poppler_attachment_save_to_callback().  If
 * successful it should return %TRUE.  If an error occurs it should set
 * `error` and return %FALSE, in which case poppler_attachment_save_to_callback()
 * will fail with the same error.
 * @callback 
 * @param buf buffer containing   bytes to be written.
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
 * @callback 
 * @param buf buffer containing   bytes to be written.
 */
interface MediaSaveFunc {
    (buf: Uint8Array): boolean
}
interface Annot_ConstructProps extends GObject.Object_ConstructProps {
}

interface Annot {

    // Owm methods of Poppler-0.18.Poppler.Annot

    /**
     * Gets the type of `poppler_annot`
     */
    get_annot_type(): AnnotType
    /**
     * Retrieves the color of `poppler_annot`.
     */
    get_color(): Color
    /**
     * Retrieves the contents of `poppler_annot`.
     */
    get_contents(): string
    /**
     * Retrieves the flag field specifying various characteristics of the
     * `poppler_annot`.
     */
    get_flags(): AnnotFlag
    /**
     * Retrieves the last modification data of `poppler_annot`. The returned
     * string will be either a PDF format date or a text string.
     * See also #poppler_date_parse()
     */
    get_modified(): string
    /**
     * Retrieves the name of `poppler_annot`.
     */
    get_name(): string
    /**
     * Returns the page index to which `poppler_annot` is associated, or -1 if unknown
     */
    get_page_index(): number
    /**
     * Retrieves the rectangle representing the page coordinates where the
     * annotation `poppler_annot` is placed.
     */
    get_rectangle(): /* poppler_rect */ Rectangle
    /**
     * Sets the color of `poppler_annot`.
     * @param poppler_color a #PopplerColor, or %NULL
     */
    set_color(poppler_color: Color | null): void
    /**
     * Sets the contents of `poppler_annot` to the given value,
     * replacing the current contents.
     * @param contents a text string containing the new contents
     */
    set_contents(contents: string): void
    /**
     * Sets the flag field specifying various characteristics of the
     * `poppler_annot`.
     * @param flags a #PopplerAnnotFlag
     */
    set_flags(flags: AnnotFlag): void
    /**
     * Move the annotation to the rectangle representing the page coordinates
     * where the annotation `poppler_annot` should be placed.
     * @param poppler_rect a #PopplerRectangle with the new annotation's coordinates
     */
    set_rectangle(poppler_rect: Rectangle): void

    // Class property signals of Poppler-0.18.Poppler.Annot

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Annot extends GObject.Object {

    // Own properties of Poppler-0.18.Poppler.Annot

    static name: string
    static $gtype: GObject.GType<Annot>

    // Constructors of Poppler-0.18.Poppler.Annot

    constructor(config?: Annot_ConstructProps) 
    _init(config?: Annot_ConstructProps): void
}

interface AnnotCircle_ConstructProps extends AnnotMarkup_ConstructProps {
}

interface AnnotCircle {

    // Owm methods of Poppler-0.18.Poppler.AnnotCircle

    /**
     * Retrieves the interior color of `poppler_annot`.
     */
    get_interior_color(): Color
    /**
     * Sets the interior color of `poppler_annot`.
     * @param poppler_color a #PopplerColor, or %NULL
     */
    set_interior_color(poppler_color: Color | null): void

    // Class property signals of Poppler-0.18.Poppler.AnnotCircle

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotCircle extends AnnotMarkup {

    // Own properties of Poppler-0.18.Poppler.AnnotCircle

    static name: string
    static $gtype: GObject.GType<AnnotCircle>

    // Constructors of Poppler-0.18.Poppler.AnnotCircle

    constructor(config?: AnnotCircle_ConstructProps) 
    /**
     * Creates a new Circle annotation that will be
     * located on `rect` when added to a page. See
     * poppler_page_add_annot()
     * @constructor 
     * @param doc a #PopplerDocument
     * @param rect a #PopplerRectangle
     */
    constructor(doc: Document, rect: Rectangle) 
    /**
     * Creates a new Circle annotation that will be
     * located on `rect` when added to a page. See
     * poppler_page_add_annot()
     * @constructor 
     * @param doc a #PopplerDocument
     * @param rect a #PopplerRectangle
     */
    static new(doc: Document, rect: Rectangle): AnnotCircle
    _init(config?: AnnotCircle_ConstructProps): void
}

interface AnnotFileAttachment_ConstructProps extends AnnotMarkup_ConstructProps {
}

interface AnnotFileAttachment {

    // Owm methods of Poppler-0.18.Poppler.AnnotFileAttachment

    /**
     * Creates a #PopplerAttachment for the file of the file attachment annotation `annot`.
     * The #PopplerAttachment must be unrefed with g_object_unref by the caller.
     */
    get_attachment(): Attachment
    /**
     * Retrieves the name of `poppler_annot`.
     */
    get_name(): string

    // Class property signals of Poppler-0.18.Poppler.AnnotFileAttachment

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotFileAttachment extends AnnotMarkup {

    // Own properties of Poppler-0.18.Poppler.AnnotFileAttachment

    static name: string
    static $gtype: GObject.GType<AnnotFileAttachment>

    // Constructors of Poppler-0.18.Poppler.AnnotFileAttachment

    constructor(config?: AnnotFileAttachment_ConstructProps) 
    _init(config?: AnnotFileAttachment_ConstructProps): void
}

interface AnnotFreeText_ConstructProps extends AnnotMarkup_ConstructProps {
}

interface AnnotFreeText {

    // Owm methods of Poppler-0.18.Poppler.AnnotFreeText

    /**
     * Retrieves a #PopplerAnnotCalloutLine of four or six numbers specifying a callout
     * line attached to the `poppler_annot`.
     */
    get_callout_line(): AnnotCalloutLine
    /**
     * Retrieves the justification of the text of `poppler_annot`.
     */
    get_quadding(): AnnotFreeTextQuadding

    // Class property signals of Poppler-0.18.Poppler.AnnotFreeText

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotFreeText extends AnnotMarkup {

    // Own properties of Poppler-0.18.Poppler.AnnotFreeText

    static name: string
    static $gtype: GObject.GType<AnnotFreeText>

    // Constructors of Poppler-0.18.Poppler.AnnotFreeText

    constructor(config?: AnnotFreeText_ConstructProps) 
    _init(config?: AnnotFreeText_ConstructProps): void
}

interface AnnotLine_ConstructProps extends AnnotMarkup_ConstructProps {
}

interface AnnotLine {

    // Owm methods of Poppler-0.18.Poppler.AnnotLine

    /**
     * Set the coordinate points where the `poppler_annot` starts and ends.
     * @param start a #PopplerPoint of the starting vertice
     * @param end a #PopplerPoint of the ending vertice
     */
    set_vertices(start: Point, end: Point): void

    // Class property signals of Poppler-0.18.Poppler.AnnotLine

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotLine extends AnnotMarkup {

    // Own properties of Poppler-0.18.Poppler.AnnotLine

    static name: string
    static $gtype: GObject.GType<AnnotLine>

    // Constructors of Poppler-0.18.Poppler.AnnotLine

    constructor(config?: AnnotLine_ConstructProps) 
    /**
     * Creates a new Line annotation that will be
     * located on `rect` when added to a page. See
     * poppler_page_add_annot()
     * @constructor 
     * @param doc a #PopplerDocument
     * @param rect a #PopplerRectangle
     * @param start a #PopplerPoint of the starting vertice
     * @param end a #PopplerPoint of the ending vertice
     */
    constructor(doc: Document, rect: Rectangle, start: Point, end: Point) 
    /**
     * Creates a new Line annotation that will be
     * located on `rect` when added to a page. See
     * poppler_page_add_annot()
     * @constructor 
     * @param doc a #PopplerDocument
     * @param rect a #PopplerRectangle
     * @param start a #PopplerPoint of the starting vertice
     * @param end a #PopplerPoint of the ending vertice
     */
    static new(doc: Document, rect: Rectangle, start: Point, end: Point): AnnotLine
    _init(config?: AnnotLine_ConstructProps): void
}

interface AnnotMarkup_ConstructProps extends Annot_ConstructProps {
}

interface AnnotMarkup {

    // Owm methods of Poppler-0.18.Poppler.AnnotMarkup

    /**
     * Returns the date and time when the annotation was created
     */
    get_date(): GLib.Date
    /**
     * Gets the external data type of `poppler_annot`.
     */
    get_external_data(): AnnotExternalDataType
    /**
     * Retrieves the label text of `poppler_annot`.
     */
    get_label(): string
    /**
     * Retrieves the opacity value of `poppler_annot`.
     */
    get_opacity(): number
    /**
     * Retrieves the state of the popup window related to `poppler_annot`.
     */
    get_popup_is_open(): boolean
    /**
     * Retrieves the rectangle of the popup window related to `poppler_annot`.
     */
    get_popup_rectangle(): [ /* returnType */ boolean, /* poppler_rect */ Rectangle ]
    /**
     * Gets the reply type of `poppler_annot`.
     */
    get_reply_to(): AnnotMarkupReplyType
    /**
     * Retrives the subject text of `poppler_annot`.
     */
    get_subject(): string
    /**
     * Return %TRUE if the markup annotation has a popup window associated
     */
    has_popup(): boolean
    /**
     * Sets the label text of `poppler_annot,` replacing the current one
     * @param label a text string containing the new label, or %NULL
     */
    set_label(label: string | null): void
    /**
     * Sets the opacity of `poppler_annot`. This value applies to
     * all visible elements of `poppler_annot` in its closed state,
     * but not to the pop-up window that appears when it's openened
     * @param opacity a constant opacity value, between 0 (transparent) and 1 (opaque)
     */
    set_opacity(opacity: number): void
    /**
     * Associates a new popup window for editing contents of `poppler_annot`.
     * Popup window shall be displayed by viewers at `popup_rect` on the page.
     * @param popup_rect a #PopplerRectangle
     */
    set_popup(popup_rect: Rectangle): void
    /**
     * Sets the state of the popup window related to `poppler_annot`.
     * @param is_open whether popup window should initially be displayed open
     */
    set_popup_is_open(is_open: boolean): void
    /**
     * Sets the rectangle of the popup window related to `poppler_annot`.
     * This doesn't have any effect if `poppler_annot` doesn't have a
     * popup associated, use poppler_annot_markup_set_popup() to associate
     * a popup window to a #PopplerAnnotMarkup.
     * @param poppler_rect a #PopplerRectangle to set
     */
    set_popup_rectangle(poppler_rect: Rectangle): void

    // Class property signals of Poppler-0.18.Poppler.AnnotMarkup

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotMarkup extends Annot {

    // Own properties of Poppler-0.18.Poppler.AnnotMarkup

    static name: string
    static $gtype: GObject.GType<AnnotMarkup>

    // Constructors of Poppler-0.18.Poppler.AnnotMarkup

    constructor(config?: AnnotMarkup_ConstructProps) 
    _init(config?: AnnotMarkup_ConstructProps): void
}

interface AnnotMovie_ConstructProps extends Annot_ConstructProps {
}

interface AnnotMovie {

    // Owm methods of Poppler-0.18.Poppler.AnnotMovie

    /**
     * Retrieves the movie object (PopplerMovie) stored in the `poppler_annot`.
     */
    get_movie(): Movie
    /**
     * Retrieves the movie title of `poppler_annot`.
     */
    get_title(): string

    // Class property signals of Poppler-0.18.Poppler.AnnotMovie

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotMovie extends Annot {

    // Own properties of Poppler-0.18.Poppler.AnnotMovie

    static name: string
    static $gtype: GObject.GType<AnnotMovie>

    // Constructors of Poppler-0.18.Poppler.AnnotMovie

    constructor(config?: AnnotMovie_ConstructProps) 
    _init(config?: AnnotMovie_ConstructProps): void
}

interface AnnotScreen_ConstructProps extends Annot_ConstructProps {
}

interface AnnotScreen {

    // Owm methods of Poppler-0.18.Poppler.AnnotScreen

    /**
     * Retrieves the action (#PopplerAction) that shall be performed when `poppler_annot` is activated
     */
    get_action(): Action

    // Class property signals of Poppler-0.18.Poppler.AnnotScreen

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotScreen extends Annot {

    // Own properties of Poppler-0.18.Poppler.AnnotScreen

    static name: string
    static $gtype: GObject.GType<AnnotScreen>

    // Constructors of Poppler-0.18.Poppler.AnnotScreen

    constructor(config?: AnnotScreen_ConstructProps) 
    _init(config?: AnnotScreen_ConstructProps): void
}

interface AnnotSquare_ConstructProps extends AnnotMarkup_ConstructProps {
}

interface AnnotSquare {

    // Owm methods of Poppler-0.18.Poppler.AnnotSquare

    /**
     * Retrieves the interior color of `poppler_annot`.
     */
    get_interior_color(): Color
    /**
     * Sets the interior color of `poppler_annot`.
     * @param poppler_color a #PopplerColor, or %NULL
     */
    set_interior_color(poppler_color: Color | null): void

    // Class property signals of Poppler-0.18.Poppler.AnnotSquare

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotSquare extends AnnotMarkup {

    // Own properties of Poppler-0.18.Poppler.AnnotSquare

    static name: string
    static $gtype: GObject.GType<AnnotSquare>

    // Constructors of Poppler-0.18.Poppler.AnnotSquare

    constructor(config?: AnnotSquare_ConstructProps) 
    /**
     * Creates a new Square annotation that will be
     * located on `rect` when added to a page. See
     * poppler_page_add_annot()
     * @constructor 
     * @param doc a #PopplerDocument
     * @param rect a #PopplerRectangle
     */
    constructor(doc: Document, rect: Rectangle) 
    /**
     * Creates a new Square annotation that will be
     * located on `rect` when added to a page. See
     * poppler_page_add_annot()
     * @constructor 
     * @param doc a #PopplerDocument
     * @param rect a #PopplerRectangle
     */
    static new(doc: Document, rect: Rectangle): AnnotSquare
    _init(config?: AnnotSquare_ConstructProps): void
}

interface AnnotText_ConstructProps extends AnnotMarkup_ConstructProps {
}

interface AnnotText {

    // Owm methods of Poppler-0.18.Poppler.AnnotText

    /**
     * Gets name of the icon of `poppler_annot`.
     */
    get_icon(): string
    /**
     * Retrieves the state of `poppler_annot`.
     */
    get_is_open(): boolean
    /**
     * Retrieves the state of `poppler_annot`.
     */
    get_state(): AnnotTextState
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
    set_icon(icon: string): void
    /**
     * Sets whether `poppler_annot` should initially be displayed open
     * @param is_open whether annotation should initially be displayed open
     */
    set_is_open(is_open: boolean): void

    // Class property signals of Poppler-0.18.Poppler.AnnotText

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotText extends AnnotMarkup {

    // Own properties of Poppler-0.18.Poppler.AnnotText

    static name: string
    static $gtype: GObject.GType<AnnotText>

    // Constructors of Poppler-0.18.Poppler.AnnotText

    constructor(config?: AnnotText_ConstructProps) 
    /**
     * Creates a new Text annotation that will be
     * located on `rect` when added to a page. See
     * poppler_page_add_annot()
     * @constructor 
     * @param doc a #PopplerDocument
     * @param rect a #PopplerRectangle
     */
    constructor(doc: Document, rect: Rectangle) 
    /**
     * Creates a new Text annotation that will be
     * located on `rect` when added to a page. See
     * poppler_page_add_annot()
     * @constructor 
     * @param doc a #PopplerDocument
     * @param rect a #PopplerRectangle
     */
    static new(doc: Document, rect: Rectangle): AnnotText
    _init(config?: AnnotText_ConstructProps): void
}

interface AnnotTextMarkup_ConstructProps extends AnnotMarkup_ConstructProps {
}

interface AnnotTextMarkup {

    // Owm methods of Poppler-0.18.Poppler.AnnotTextMarkup

    /**
     * Returns a #GArray of #PopplerQuadrilateral items that map from a
     * location on `page` to a #PopplerAnnotTextMarkup.  This array must be freed
     * when done.
     */
    get_quadrilaterals(): Quadrilateral[]
    /**
     * Set the regions (Quadrilaterals) to apply the text markup in `poppler_annot`.
     * @param quadrilaterals A #GArray of   #PopplerQuadrilateral<!-- -->s
     */
    set_quadrilaterals(quadrilaterals: Quadrilateral[]): void

    // Class property signals of Poppler-0.18.Poppler.AnnotTextMarkup

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotTextMarkup extends AnnotMarkup {

    // Own properties of Poppler-0.18.Poppler.AnnotTextMarkup

    static name: string
    static $gtype: GObject.GType<AnnotTextMarkup>

    // Constructors of Poppler-0.18.Poppler.AnnotTextMarkup

    constructor(config?: AnnotTextMarkup_ConstructProps) 
    /**
     * Creates a new Highlight Text annotation that will be
     * located on `rect` when added to a page. See poppler_page_add_annot()
     * @constructor 
     * @param doc a #PopplerDocument
     * @param rect a #PopplerRectangle
     * @param quadrilaterals A #GArray of   #PopplerQuadrilateral<!-- -->s
     */
    static new_highlight(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    /**
     * Creates a new Squiggly Text annotation that will be
     * located on `rect` when added to a page. See poppler_page_add_annot()
     * @constructor 
     * @param doc a #PopplerDocument
     * @param rect a #PopplerRectangle
     * @param quadrilaterals A #GArray of   #PopplerQuadrilateral<!-- -->s
     */
    static new_squiggly(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    /**
     * Creates a new Strike Out Text annotation that will be
     * located on `rect` when added to a page. See poppler_page_add_annot()
     * @constructor 
     * @param doc a #PopplerDocument
     * @param rect a #PopplerRectangle
     * @param quadrilaterals A #GArray of   #PopplerQuadrilateral<!-- -->s
     */
    static new_strikeout(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    /**
     * Creates a new Underline Text annotation that will be
     * located on `rect` when added to a page. See poppler_page_add_annot()
     * @constructor 
     * @param doc a #PopplerDocument
     * @param rect a #PopplerRectangle
     * @param quadrilaterals A #GArray of   #PopplerQuadrilateral<!-- -->s
     */
    static new_underline(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    _init(config?: AnnotTextMarkup_ConstructProps): void
}

interface Attachment_ConstructProps extends GObject.Object_ConstructProps {
}

interface Attachment {

    // Own fields of Poppler-0.18.Poppler.Attachment

    parent: GObject.Object
    /**
     * The filename. Deprecated in poppler 20.09.0. Use
     *   poppler_attachment_get_name() instead.
     * @field 
     */
    name: string
    /**
     * Descriptive text. Deprecated in poppler 20.09.0. Use
     *   poppler_attachment_get_description() instead.
     * @field 
     */
    description: string
    /**
     * The size of the file. Deprecated in poppler 20.09.0. Use
     *   poppler_attachment_get_size() instead.
     * @field 
     */
    size: number
    /**
     * The date and time when the file was last modified. Deprecated in
     *   poppler 20.09.0. Use poppler_attachment_get_mtime() instead.
     * @field 
     */
    mtime: GLib.Time
    /**
     * The date and time when the file was created. Deprecated in poppler
     *   20.09.0. Use poppler_attachment_get_ctime() instead.
     * @field 
     */
    ctime: GLib.Time
    /**
     * A 16-byte checksum of the file. Deprecated in poppler 20.09.0. Use
     *   poppler_attachment_get_checksum() instead.
     * @field 
     */
    checksum: GLib.String

    // Owm methods of Poppler-0.18.Poppler.Attachment

    get_checksum(): GLib.String
    get_ctime(): GLib.DateTime | null
    get_description(): string
    get_mtime(): GLib.DateTime | null
    get_name(): string
    get_size(): number
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
     * @param save_func a function that is called to save each block of data that the save routine generates.
     */
    save_to_callback(save_func: AttachmentSaveFunc): boolean

    // Class property signals of Poppler-0.18.Poppler.Attachment

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Attachment extends GObject.Object {

    // Own properties of Poppler-0.18.Poppler.Attachment

    static name: string
    static $gtype: GObject.GType<Attachment>

    // Constructors of Poppler-0.18.Poppler.Attachment

    constructor(config?: Attachment_ConstructProps) 
    _init(config?: Attachment_ConstructProps): void
}

interface Document_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Poppler-0.18.Poppler.Document

    /**
     * The author of the document
     */
    author?: string | null
    /**
     * The date the document was created as seconds since the Epoch, or -1
     */
    creation_date?: number | null
    /**
     * The #GDateTime the document was created.
     */
    creation_datetime?: GLib.DateTime | null
    /**
     * The creator of the document. See also poppler_document_get_creator()
     */
    creator?: string | null
    /**
     * The keywords associated to the document
     */
    keywords?: string | null
    /**
     * The date the document was most recently modified as seconds since the Epoch, or -1
     */
    mod_date?: number | null
    /**
     * The #GDateTime the document was most recently modified.
     */
    mod_datetime?: GLib.DateTime | null
    /**
     * The producer of the document. See also poppler_document_get_producer()
     */
    producer?: string | null
    /**
     * The subject of the document
     */
    subject?: string | null
    /**
     * The document's title or %NULL
     */
    title?: string | null
}

interface Document {

    // Own properties of Poppler-0.18.Poppler.Document

    /**
     * The author of the document
     */
    author: string
    /**
     * The date the document was created as seconds since the Epoch, or -1
     */
    creation_date: number
    /**
     * The #GDateTime the document was created.
     */
    creation_datetime: GLib.DateTime
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
    readonly format_major: number
    /**
     * The PDF minor version number. See also poppler_document_get_pdf_version()
     */
    readonly format_minor: number
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
    mod_date: number
    /**
     * The #GDateTime the document was most recently modified.
     */
    mod_datetime: GLib.DateTime
    /**
     * The page layout that should be used when the document is opened
     */
    readonly page_layout: PageLayout
    /**
     * The mode that should be used when the document is opened
     */
    readonly page_mode: PageMode
    /**
     * Flags specifying which operations are permitted when the document is opened
     */
    readonly permissions: Permissions
    readonly print_duplex: PrintDuplex
    /**
     * Suggested number of copies to be printed for this document
     */
    readonly print_n_copies: number
    readonly print_scaling: PrintScaling
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
    readonly subtype_conformance: PDFConformance
    /**
     * Document PDF subtype part
     */
    readonly subtype_part: PDFPart
    /**
     * Document PDF subtype. See also poppler_document_get_pdf_subtype_string()
     */
    readonly subtype_string: string
    /**
     * The document's title or %NULL
     */
    title: string
    readonly viewer_preferences: ViewerPreferences

    // Owm methods of Poppler-0.18.Poppler.Document

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
     * @param link_name a named destination
     */
    find_dest(link_name: string): Dest
    /**
     * Returns a #GList containing #PopplerAttachment<!-- -->s.  These attachments
     * are unowned, and must be unreffed, and the list must be freed with
     * g_list_free().
     */
    get_attachments(): Attachment[]
    /**
     * Returns the author of the document
     */
    get_author(): string
    /**
     * Returns the date the document was created as seconds since the Epoch
     */
    get_creation_date(): number
    /**
     * Returns the date the document was created as a #GDateTime
     */
    get_creation_date_time(): GLib.DateTime | null
    /**
     * Returns the creator of the document. If the document was converted
     * from another format, the creator is the name of the product
     * that created the original document from which it was converted.
     */
    get_creator(): string
    /**
     * Returns the #PopplerFormField for the given `id`. It must be freed with
     * g_object_unref()
     * @param id an id of a #PopplerFormField
     */
    get_form_field(id: number): FormField
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
    get_id(): [ /* returnType */ boolean, /* permanent_id */ string, /* update_id */ string ]
    /**
     * Returns the keywords associated to the document
     */
    get_keywords(): string
    /**
     * Returns the XML metadata string of the document
     */
    get_metadata(): string
    /**
     * Returns the date the document was most recently modified as seconds since the Epoch
     */
    get_modification_date(): number
    /**
     * Returns the date the document was most recently modified as a #GDateTime
     */
    get_modification_date_time(): GLib.DateTime | null
    /**
     * Returns the number of attachments in a loaded document.
     * See also poppler_document_get_attachments()
     */
    get_n_attachments(): number
    /**
     * Returns the number of pages in a loaded document.
     */
    get_n_pages(): number
    /**
     * Returns the #PopplerPage indexed at `index`.  This object is owned by the
     * caller.
     * @param index a page index
     */
    get_page(index: number): Page
    /**
     * Returns the #PopplerPage reference by `label`.  This object is owned by the
     * caller.  `label` is a human-readable string representation of the page number,
     * and can be document specific.  Typically, it is a value such as "iii" or "3".
     * 
     * By default, "1" refers to the first page.
     * @param label a page label
     */
    get_page_by_label(label: string): Page
    /**
     * Returns the page layout that should be used when the document is opened
     */
    get_page_layout(): PageLayout
    /**
     * Returns a #PopplerPageMode representing how the document should
     * be initially displayed when opened.
     */
    get_page_mode(): PageMode
    /**
     * Returns the conformance level of the `document` as #PopplerPDFConformance.
     */
    get_pdf_conformance(): PDFConformance
    /**
     * Returns the part of the conforming standard that the `document` adheres to
     * as a #PopplerPDFSubtype.
     */
    get_pdf_part(): PDFPart
    /**
     * Returns the subtype of `document` as a #PopplerPDFSubtype.
     */
    get_pdf_subtype(): PDFSubtype
    /**
     * Returns the PDF subtype version of `document` as a string.
     */
    get_pdf_subtype_string(): string | null
    get_pdf_version(): [ /* major_version */ number, /* minor_version */ number ]
    /**
     * Returns the PDF version of `document` as a string (e.g. PDF-1.6)
     */
    get_pdf_version_string(): string
    /**
     * Returns the flags specifying which operations are permitted when the document is opened.
     */
    get_permissions(): Permissions
    /**
     * Returns the duplex mode value suggested for printing by author of the document.
     * Value POPPLER_PRINT_DUPLEX_NONE means that the document does not specify this
     * preference.
     */
    get_print_duplex(): PrintDuplex
    /**
     * Returns the suggested number of copies to be printed.
     * This preference should be applied only if returned value
     * is greater than 1 since value 1 usually means that
     * the document does not specify it.
     */
    get_print_n_copies(): number
    /**
     * Returns the suggested page ranges to print in the form of array
     * of #PopplerPageRanges and number of ranges.
     * NULL pointer means that the document does not specify page ranges
     * for printing.
     */
    get_print_page_ranges(): PageRange[]
    /**
     * Returns the print scaling value suggested by author of the document.
     */
    get_print_scaling(): PrintScaling
    /**
     * Returns the producer of the document. If the document was converted
     * from another format, the producer is the name of the product
     * that converted it to PDF
     */
    get_producer(): string
    /**
     * Returns the subject of the document
     */
    get_subject(): string
    /**
     * Returns the document's title
     */
    get_title(): string
    /**
     * Returns %TRUE of `document` has any attachments.
     */
    has_attachments(): boolean
    /**
     * Returns whether `document` has any javascript in it.
     */
    has_javascript(): boolean
    /**
     * Returns whether `document` is linearized or not. Linearization of PDF
     * enables efficient incremental access of the PDF file in a network environment.
     */
    is_linearized(): boolean
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
    save_a_copy(uri: string): boolean
    /**
     * Sets the document's author. If `author` is %NULL, Author
     * entry is removed from the document's Info dictionary.
     * @param author A new author
     */
    set_author(author: string): void
    /**
     * Sets the document's creation date. If `creation_date` is -1, CreationDate
     * entry is removed from the document's Info dictionary.
     * @param creation_date A new creation date
     */
    set_creation_date(creation_date: number): void
    /**
     * Sets the document's creation date. If `creation_datetime` is %NULL,
     * CreationDate entry is removed from the document's Info dictionary.
     * @param creation_datetime A new creation #GDateTime
     */
    set_creation_date_time(creation_datetime: GLib.DateTime | null): void
    /**
     * Sets the document's creator. If `creator` is %NULL, Creator
     * entry is removed from the document's Info dictionary.
     * @param creator A new creator
     */
    set_creator(creator: string): void
    /**
     * Sets the document's keywords. If `keywords` is %NULL,
     * Keywords entry is removed from the document's Info dictionary.
     * @param keywords New keywords
     */
    set_keywords(keywords: string): void
    /**
     * Sets the document's modification date. If `modification_date` is -1, ModDate
     * entry is removed from the document's Info dictionary.
     * @param modification_date A new modification date
     */
    set_modification_date(modification_date: number): void
    /**
     * Sets the document's modification date. If `modification_datetime` is %NULL,
     * ModDate entry is removed from the document's Info dictionary.
     * @param modification_datetime A new modification #GDateTime
     */
    set_modification_date_time(modification_datetime: GLib.DateTime | null): void
    /**
     * Sets the document's producer. If `producer` is %NULL,
     * Producer entry is removed from the document's Info dictionary.
     * @param producer A new producer
     */
    set_producer(producer: string): void
    /**
     * Sets the document's subject. If `subject` is %NULL, Subject
     * entry is removed from the document's Info dictionary.
     * @param subject A new subject
     */
    set_subject(subject: string): void
    /**
     * Sets the document's title. If `title` is %NULL, Title entry
     * is removed from the document's Info dictionary.
     * @param title A new title
     */
    set_title(title: string): void

    // Class property signals of Poppler-0.18.Poppler.Document

    connect(sigName: "notify::author", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::creation-date", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creation-date", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creation-date", ...args: any[]): void
    connect(sigName: "notify::creation-datetime", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creation-datetime", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creation-datetime", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::format", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::format-major", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-major", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format-major", ...args: any[]): void
    connect(sigName: "notify::format-minor", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-minor", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format-minor", ...args: any[]): void
    connect(sigName: "notify::keywords", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keywords", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keywords", ...args: any[]): void
    connect(sigName: "notify::linearized", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linearized", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::linearized", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::mod-date", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mod-date", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mod-date", ...args: any[]): void
    connect(sigName: "notify::mod-datetime", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mod-datetime", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mod-datetime", ...args: any[]): void
    connect(sigName: "notify::page-layout", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-layout", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page-layout", ...args: any[]): void
    connect(sigName: "notify::page-mode", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-mode", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page-mode", ...args: any[]): void
    connect(sigName: "notify::permissions", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::permissions", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::permissions", ...args: any[]): void
    connect(sigName: "notify::print-duplex", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-duplex", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::print-duplex", ...args: any[]): void
    connect(sigName: "notify::print-n-copies", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-n-copies", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::print-n-copies", ...args: any[]): void
    connect(sigName: "notify::print-scaling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-scaling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::print-scaling", ...args: any[]): void
    connect(sigName: "notify::producer", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::producer", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::producer", ...args: any[]): void
    connect(sigName: "notify::subject", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subject", ...args: any[]): void
    connect(sigName: "notify::subtype", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtype", ...args: any[]): void
    connect(sigName: "notify::subtype-conformance", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype-conformance", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtype-conformance", ...args: any[]): void
    connect(sigName: "notify::subtype-part", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype-part", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtype-part", ...args: any[]): void
    connect(sigName: "notify::subtype-string", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype-string", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtype-string", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::viewer-preferences", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::viewer-preferences", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::viewer-preferences", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Document extends GObject.Object {

    // Own properties of Poppler-0.18.Poppler.Document

    static name: string
    static $gtype: GObject.GType<Document>

    // Constructors of Poppler-0.18.Poppler.Document

    constructor(config?: Document_ConstructProps) 
    /**
     * Creates a new #PopplerDocument from `bytes`. The returned document
     * will hold a reference to `bytes`.
     * 
     * On error,  %NULL is returned, with `error` set. Possible errors include
     * those in the #POPPLER_ERROR and #G_FILE_ERROR domains.
     * @constructor 
     * @param bytes a #GBytes
     * @param password password to unlock the file with, or %NULL
     */
    static new_from_bytes(bytes: GLib.Bytes, password: string | null): Document
    /**
     * Creates a new #PopplerDocument.  If %NULL is returned, then `error` will be
     * set. Possible errors include those in the #POPPLER_ERROR and #G_FILE_ERROR
     * domains.
     * 
     * Note that `data` must remain valid for as long as the returned document exists.
     * Prefer using poppler_document_new_from_bytes().
     * @constructor 
     * @param data the pdf data
     * @param password password to unlock the file with, or %NULL
     */
    static new_from_data(data: Uint8Array, password: string | null): Document
    /**
     * Creates a new #PopplerDocument.  If %NULL is returned, then `error` will be
     * set. Possible errors include those in the #POPPLER_ERROR and #G_FILE_ERROR
     * domains.
     * @constructor 
     * @param uri uri of the file to load
     * @param password password to unlock the file with, or %NULL
     */
    static new_from_file(uri: string, password: string | null): Document
    /**
     * Creates a new #PopplerDocument reading the PDF contents from `file`.
     * Possible errors include those in the #POPPLER_ERROR and #G_FILE_ERROR
     * domains.
     * @constructor 
     * @param file a #GFile to load
     * @param password password to unlock the file with, or %NULL
     * @param cancellable a #GCancellable, or %NULL
     */
    static new_from_gfile(file: Gio.File, password: string | null, cancellable: Gio.Cancellable | null): Document
    /**
     * Creates a new #PopplerDocument reading the PDF contents from `stream`.
     * Note that the given #GInputStream must be seekable or %G_IO_ERROR_NOT_SUPPORTED
     * will be returned.
     * Possible errors include those in the #POPPLER_ERROR, #G_FILE_ERROR
     * and #G_IO_ERROR domains.
     * @constructor 
     * @param stream a #GInputStream to read from
     * @param length the stream length, or -1 if not known
     * @param password password to unlock the file with, or %NULL
     * @param cancellable a #GCancellable, or %NULL
     */
    static new_from_stream(stream: Gio.InputStream, length: number, password: string | null, cancellable: Gio.Cancellable | null): Document
    _init(config?: Document_ConstructProps): void
}

interface FontInfo_ConstructProps extends GObject.Object_ConstructProps {
}

interface FontInfo {

    // Owm methods of Poppler-0.18.Poppler.FontInfo

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
     * @param n_pages number of pages to scan
     */
    scan(n_pages: number): [ /* returnType */ boolean, /* iter */ FontsIter ]

    // Class property signals of Poppler-0.18.Poppler.FontInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FontInfo extends GObject.Object {

    // Own properties of Poppler-0.18.Poppler.FontInfo

    static name: string
    static $gtype: GObject.GType<FontInfo>

    // Constructors of Poppler-0.18.Poppler.FontInfo

    constructor(config?: FontInfo_ConstructProps) 
    /**
     * Creates a new #PopplerFontInfo object
     * @constructor 
     * @param document a #PopplerDocument
     */
    constructor(document: Document) 
    /**
     * Creates a new #PopplerFontInfo object
     * @constructor 
     * @param document a #PopplerDocument
     */
    static new(document: Document): FontInfo
    _init(config?: FontInfo_ConstructProps): void
}

interface FormField_ConstructProps extends GObject.Object_ConstructProps {
}

interface FormField {

    // Owm methods of Poppler-0.18.Poppler.FormField

    /**
     * Gets the button type of `field`
     */
    button_get_button_type(): FormButtonType
    /**
     * Queries a #PopplerFormField and returns its current state. Returns %TRUE if
     * `field` is pressed in and %FALSE if it is raised.
     */
    button_get_state(): boolean
    /**
     * Sets the status of `field`. Set to %TRUE if you want the #PopplerFormField
     * to be 'pressed in', and %FALSE to raise it.
     * @param state %TRUE or %FALSE
     */
    button_set_state(state: boolean): void
    /**
     * Checks whether `field` allows multiple choices to be selected
     */
    choice_can_select_multiple(): boolean
    choice_commit_on_change(): boolean
    /**
     * Checks whether spell checking should be done for the contents of `field`
     */
    choice_do_spell_check(): boolean
    /**
     * Gets the choice type of `field`
     */
    choice_get_choice_type(): FormChoiceType
    /**
     * Returns the contents of the item on `field` at the given index
     * @param index the index of the item
     */
    choice_get_item(index: number): string
    /**
     * Returns the number of items on `field`
     */
    choice_get_n_items(): number
    /**
     * Retrieves the contents of `field`.
     */
    choice_get_text(): string
    /**
     * Checks whether `field` is editable
     */
    choice_is_editable(): boolean
    /**
     * Checks whether the item at the given index on `field` is currently selected
     * @param index the index of the item
     */
    choice_is_item_selected(index: number): boolean
    /**
     * Selects the item at the given index on `field`
     * @param index the index of the item
     */
    choice_select_item(index: number): void
    /**
     * Sets the text in `field` to the given value, replacing the current contents
     * @param text the new text
     */
    choice_set_text(text: string): void
    /**
     * Changes the state of the item at the given index
     * @param index the index of the item
     */
    choice_toggle_item(index: number): void
    /**
     * Unselects all the items on `field`
     */
    choice_unselect_all(): void
    /**
     * Retrieves the action (#PopplerAction) that shall be
     * performed when `field` is activated, or %NULL
     */
    get_action(): Action
    /**
     * Retrieves the action (#PopplerAction) that shall be performed when
     * an additional action is triggered on `field,` or %NULL.
     * @param type the type of additional action
     */
    get_additional_action(type: AdditionalActionType): Action
    /**
     * Gets the alternate ui name of `field`. This name is also commonly
     * used by pdf producers/readers to show it as a tooltip when `field` area
     * is hovered by a pointing device (eg. mouse).
     */
    get_alternate_ui_name(): string
    /**
     * Gets the type of `field`
     */
    get_field_type(): FormFieldType
    /**
     * Gets the font size of `field`
     * 
     * WARNING: This function always returns 0. Contact the poppler
     * mailing list if you're interested in implementing it properly
     */
    get_font_size(): number
    /**
     * Gets the id of `field`
     */
    get_id(): number
    /**
     * Gets the mapping name of `field` that is used when
     * exporting interactive form field data from the document
     */
    get_mapping_name(): string
    /**
     * Gets the fully qualified name of `field`. It's constructed by concatenating
     * the partial field names of the field and all of its ancestors.
     */
    get_name(): string
    /**
     * Gets the partial name of `field`.
     */
    get_partial_name(): string
    /**
     * Checks whether `field` is read only
     */
    is_read_only(): boolean
    text_do_scroll(): boolean
    /**
     * Checks whether spell checking should be done for the contents of `field`
     */
    text_do_spell_check(): boolean
    /**
     * Retrieves the maximum allowed length of the text in `field`
     */
    text_get_max_len(): number
    /**
     * Retrieves the contents of `field`.
     */
    text_get_text(): string
    /**
     * Gets the text type of `field`.
     */
    text_get_text_type(): FormTextType
    /**
     * Checks whether content of `field` is a password and it must be hidden
     */
    text_is_password(): boolean
    /**
     * Checks whether the contents of `field` are rich text
     */
    text_is_rich_text(): boolean
    /**
     * Sets the text in `field` to the given value, replacing the current contents.
     * @param text the new text
     */
    text_set_text(text: string): void

    // Class property signals of Poppler-0.18.Poppler.FormField

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FormField extends GObject.Object {

    // Own properties of Poppler-0.18.Poppler.FormField

    static name: string
    static $gtype: GObject.GType<FormField>

    // Constructors of Poppler-0.18.Poppler.FormField

    constructor(config?: FormField_ConstructProps) 
    _init(config?: FormField_ConstructProps): void
}

interface Layer_ConstructProps extends GObject.Object_ConstructProps {
}

interface Layer {

    // Owm methods of Poppler-0.18.Poppler.Layer

    /**
     * Returns the numeric ID the radio button group associated with `layer`.
     */
    get_radio_button_group_id(): number
    /**
     * Returns the name of the layer suitable for
     * presentation as a title in a viewer's GUI
     */
    get_title(): string
    /**
     * Hides `layer`. If `layer` is the parent of other nested layers,
     * such layers will be also hidden and will be blocked until `layer`
     * is shown again
     */
    hide(): void
    /**
     * Returns whether `layer` is parent of other nested layers.
     */
    is_parent(): boolean
    /**
     * Returns whether `layer` is visible
     */
    is_visible(): boolean
    /**
     * Shows `layer`
     */
    show(): void

    // Class property signals of Poppler-0.18.Poppler.Layer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Layer extends GObject.Object {

    // Own properties of Poppler-0.18.Poppler.Layer

    static name: string
    static $gtype: GObject.GType<Layer>

    // Constructors of Poppler-0.18.Poppler.Layer

    constructor(config?: Layer_ConstructProps) 
    _init(config?: Layer_ConstructProps): void
}

interface Media_ConstructProps extends GObject.Object_ConstructProps {
}

interface Media {

    // Owm methods of Poppler-0.18.Poppler.Media

    /**
     * Returns the media clip filename, in case of non-embedded media. filename might be
     * a local relative or absolute path or a URI
     */
    get_filename(): string
    /**
     * Returns the media clip mime-type
     */
    get_mime_type(): string
    /**
     * Whether the media clip is embedded in the PDF. If the result is %TRUE, the embedded stream
     * can be saved with poppler_media_save() or poppler_media_save_to_callback() function.
     * If the result is %FALSE, the media clip filename can be retrieved with
     * poppler_media_get_filename() function.
     */
    is_embedded(): boolean
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
     * @param save_func a function that is called to save each block of data that the save routine generates.
     */
    save_to_callback(save_func: MediaSaveFunc): boolean

    // Class property signals of Poppler-0.18.Poppler.Media

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Media extends GObject.Object {

    // Own properties of Poppler-0.18.Poppler.Media

    static name: string
    static $gtype: GObject.GType<Media>

    // Constructors of Poppler-0.18.Poppler.Media

    constructor(config?: Media_ConstructProps) 
    _init(config?: Media_ConstructProps): void
}

interface Movie_ConstructProps extends GObject.Object_ConstructProps {
}

interface Movie {

    // Owm methods of Poppler-0.18.Poppler.Movie

    /**
     * Returns the dimensions of the movie's bounding box (in pixels).
     * The respective PDF movie dictionary entry is optional; if missing,
     * -1x-1 will be returned.
     * @param width width of the movie's bounding box
     * @param height height of the movie's bounding box
     */
    get_aspect(width: number, height: number): void
    /**
     * Returns the duration of the movie playback
     */
    get_duration(): number
    /**
     * Returns the local filename identifying a self-describing movie file
     */
    get_filename(): string
    /**
     * Returns the play mode of `poppler_movie`.
     */
    get_play_mode(): MoviePlayMode
    /**
     * Returns the relative speed of the movie
     */
    get_rate(): number
    /**
     * Returns the rotation angle
     */
    get_rotation_angle(): number
    /**
     * Returns the start position of the movie playback
     */
    get_start(): number
    /**
     * Returns the playback audio volume
     */
    get_volume(): number
    /**
     * Returns whether the user must wait for the movie to be finished before
     * the PDF viewer accepts any interactive action
     */
    is_synchronous(): boolean
    /**
     * Returns whether a poster image representing the Movie
     * shall be displayed. The poster image must be retrieved
     * from the movie file.
     */
    need_poster(): boolean
    /**
     * Returns whether to display a movie controller bar while playing the movie
     */
    show_controls(): boolean

    // Class property signals of Poppler-0.18.Poppler.Movie

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Movie extends GObject.Object {

    // Own properties of Poppler-0.18.Poppler.Movie

    static name: string
    static $gtype: GObject.GType<Movie>

    // Constructors of Poppler-0.18.Poppler.Movie

    constructor(config?: Movie_ConstructProps) 
    _init(config?: Movie_ConstructProps): void
}

interface PSFile_ConstructProps extends GObject.Object_ConstructProps {
}

interface PSFile {

    // Owm methods of Poppler-0.18.Poppler.PSFile

    /**
     * Frees `ps_file`
     */
    free(): void
    /**
     * Enable or disable Duplex printing.
     * @param duplex whether to force duplex printing (on printers which support this)
     */
    set_duplex(duplex: boolean): void
    /**
     * Set the output paper size. These values will end up in the
     * DocumentMedia, the BoundingBox DSC comments and other places in the
     * generated PostScript.
     * @param width the paper width in 1/72 inch
     * @param height the paper height in 1/72 inch
     */
    set_paper_size(width: number, height: number): void

    // Class property signals of Poppler-0.18.Poppler.PSFile

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PSFile extends GObject.Object {

    // Own properties of Poppler-0.18.Poppler.PSFile

    static name: string
    static $gtype: GObject.GType<PSFile>

    // Constructors of Poppler-0.18.Poppler.PSFile

    constructor(config?: PSFile_ConstructProps) 
    /**
     * Create a new postscript file to render to
     * @constructor 
     * @param document a #PopplerDocument
     * @param filename the path of the output filename
     * @param first_page the first page to print
     * @param n_pages the number of pages to print
     */
    constructor(document: Document, filename: string, first_page: number, n_pages: number) 
    /**
     * Create a new postscript file to render to
     * @constructor 
     * @param document a #PopplerDocument
     * @param filename the path of the output filename
     * @param first_page the first page to print
     * @param n_pages the number of pages to print
     */
    static new(document: Document, filename: string, first_page: number, n_pages: number): PSFile
    _init(config?: PSFile_ConstructProps): void
}

interface Page_ConstructProps extends GObject.Object_ConstructProps {
}

interface Page {

    // Own properties of Poppler-0.18.Poppler.Page

    /**
     * The label of the page or %NULL. See also poppler_page_get_label()
     */
    readonly label: string

    // Owm methods of Poppler-0.18.Poppler.Page

    /**
     * Adds annotation `annot` to `page`.
     * @param annot a #PopplerAnnot to add
     */
    add_annot(annot: Annot): void
    /**
     * Finds `text` in `page` with the default options (%POPPLER_FIND_DEFAULT) and
     * returns a #GList of rectangles for each occurrence of the text on the page.
     * The coordinates are in PDF points.
     * @param text the text to search for (UTF-8 encoded)
     */
    find_text(text: string): Rectangle[]
    /**
     * Finds `text` in `page` with the given #PopplerFindFlags options and
     * returns a #GList of rectangles for each occurrence of the text on the page.
     * The coordinates are in PDF points.
     * @param text the text to search for (UTF-8 encoded)
     * @param options find options
     */
    find_text_with_options(text: string, options: FindFlags): Rectangle[]
    /**
     * Returns a list of #PopplerAnnotMapping items that map from a location on
     * `page` to a #PopplerAnnot.  This list must be freed with
     * poppler_page_free_annot_mapping() when done.
     */
    get_annot_mapping(): AnnotMapping[]
    get_bounding_box(rect: Rectangle): boolean
    /**
     * Retrurns the crop box of `page`
     */
    get_crop_box(): /* rect */ Rectangle
    /**
     * Returns the duration of `page`
     */
    get_duration(): number
    /**
     * Returns a list of #PopplerFormFieldMapping items that map from a
     * location on `page` to a form field.  This list must be freed
     * with poppler_page_free_form_field_mapping() when done.
     */
    get_form_field_mapping(): FormFieldMapping[]
    /**
     * Returns a cairo surface for the image of the `page`
     * @param image_id The image identifier
     */
    get_image(image_id: number): cairo.Surface
    /**
     * Returns a list of #PopplerImageMapping items that map from a
     * location on `page` to an image of the page. This list must be freed
     * with poppler_page_free_image_mapping() when done.
     */
    get_image_mapping(): ImageMapping[]
    /**
     * Returns the index of `page`
     */
    get_index(): number
    /**
     * Returns the label of `page`. Note that page labels
     * and page indices might not coincide.
     */
    get_label(): string
    /**
     * Returns a list of #PopplerLinkMapping items that map from a
     * location on `page` to a #PopplerAction.  This list must be freed
     * with poppler_page_free_link_mapping() when done.
     */
    get_link_mapping(): LinkMapping[]
    /**
     * Returns a region containing the area that would be rendered by
     * poppler_page_render_selection().
     * The returned region must be freed with cairo_region_destroy()
     * @param scale scale specified as pixels per point
     * @param style a #PopplerSelectionStyle
     * @param selection start and end point of selection as a rectangle
     */
    get_selected_region(scale: number, style: SelectionStyle, selection: Rectangle): cairo.Region
    /**
     * Retrieves the contents of the specified `selection` as text.
     * @param style a #PopplerSelectionStyle
     * @param selection the #PopplerRectangle including the text
     */
    get_selected_text(style: SelectionStyle, selection: Rectangle): string
    /**
     * Returns a region containing the area that would be rendered by
     * poppler_page_render_selection() as a #GList of
     * #PopplerRectangle. The returned list must be freed with
     * poppler_page_selection_region_free().
     * @param scale scale specified as pixels per point
     * @param style a #PopplerSelectionStyle
     * @param selection start and end point of selection as a rectangle
     */
    get_selection_region(scale: number, style: SelectionStyle, selection: Rectangle): Rectangle[]
    /**
     * Gets the size of `page` at the current scale and rotation.
     */
    get_size(): [ /* width */ number, /* height */ number ]
    /**
     * Retrieves the text of `page`.
     */
    get_text(): string
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
    get_text_attributes(): TextAttributes[]
    /**
     * Obtains the attributes of the text in `area` as a #GList of #PopplerTextAttributes.
     * This list must be freed with poppler_page_free_text_attributes() when done.
     * 
     * Each list element is a #PopplerTextAttributes struct where start_index and
     * end_index indicates the range of text (as returned by poppler_page_get_text_for_area())
     * to which text attributes apply.
     * @param area a #PopplerRectangle
     */
    get_text_attributes_for_area(area: Rectangle): TextAttributes[]
    /**
     * Retrieves the text of `page` contained in `area`.
     * @param area a #PopplerRectangle
     */
    get_text_for_area(area: Rectangle): string
    /**
     * Obtains the layout of the text as a list of #PopplerRectangle
     * This array must be freed with g_free() when done.
     * 
     * The position in the array represents an offset in the text returned by
     * poppler_page_get_text()
     * 
     * See also poppler_page_get_text_layout_for_area().
     */
    get_text_layout(): [ /* returnType */ boolean, /* rectangles */ Rectangle[] ]
    /**
     * Obtains the layout of the text contained in `area` as a list of #PopplerRectangle
     * This array must be freed with g_free() when done.
     * 
     * The position in the array represents an offset in the text returned by
     * poppler_page_get_text_for_area()
     * @param area a #PopplerRectangle
     */
    get_text_layout_for_area(area: Rectangle): [ /* returnType */ boolean, /* rectangles */ Rectangle[] ]
    /**
     * Get the embedded thumbnail for the specified page.  If the document
     * doesn't have an embedded thumbnail for the page, this function
     * returns %NULL.
     */
    get_thumbnail(): cairo.Surface
    /**
     * Returns %TRUE if `page` has a thumbnail associated with it.  It also
     * fills in `width` and `height` with the width and height of the
     * thumbnail.  The values of width and height are not changed if no
     * appropriate thumbnail exists.
     */
    get_thumbnail_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /**
     * Returns the transition effect of `page`
     */
    get_transition(): PageTransition
    /**
     * Removes annotation `annot` from `page`
     * @param annot a #PopplerAnnot to remove
     */
    remove_annot(annot: Annot): void
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
    render_for_printing(cairo: cairo.Context): void
    /**
     * Render the page to the given cairo context for printing
     * with the specified options
     * 
     * See the documentation for poppler_page_render_for_printing() for the
     * differences between rendering to the screen and rendering to a printer.
     * @param cairo cairo context to render to
     * @param options print options
     */
    render_for_printing_with_options(cairo: cairo.Context, options: PrintFlags): void
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
     * @param old_selection previous selection
     * @param style a #PopplerSelectionStyle
     * @param glyph_color color to use for drawing glyphs
     * @param background_color color to use for the selection background
     */
    render_selection(cairo: cairo.Context, selection: Rectangle, old_selection: Rectangle, style: SelectionStyle, glyph_color: Color, background_color: Color): void
    /**
     * Render the page on a postscript file
     * @param ps_file the PopplerPSFile to render to
     */
    render_to_ps(ps_file: PSFile): void

    // Class property signals of Poppler-0.18.Poppler.Page

    connect(sigName: "notify::label", callback: (($obj: Page, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Page, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Page extends GObject.Object {

    // Own properties of Poppler-0.18.Poppler.Page

    static name: string
    static $gtype: GObject.GType<Page>

    // Constructors of Poppler-0.18.Poppler.Page

    constructor(config?: Page_ConstructProps) 
    _init(config?: Page_ConstructProps): void
    /**
     * Frees a list of #PopplerAnnotMapping<!-- -->s allocated by
     * poppler_page_get_annot_mapping().  It also unreferences the #PopplerAnnot<!-- -->s
     * that each mapping contains, so if you want to keep them around, you need to
     * reference them with g_object_ref().
     * @param list A list of   #PopplerAnnotMapping<!-- -->s
     */
    static free_annot_mapping(list: AnnotMapping[]): void
    /**
     * Frees a list of #PopplerFormFieldMapping<!-- -->s allocated by
     * poppler_page_get_form_field_mapping().
     * @param list A list of   #PopplerFormFieldMapping<!-- -->s
     */
    static free_form_field_mapping(list: FormFieldMapping[]): void
    /**
     * Frees a list of #PopplerImageMapping<!-- -->s allocated by
     * poppler_page_get_image_mapping().
     * @param list A list of   #PopplerImageMapping<!-- -->s
     */
    static free_image_mapping(list: ImageMapping[]): void
    /**
     * Frees a list of #PopplerLinkMapping<!-- -->s allocated by
     * poppler_page_get_link_mapping().  It also frees the #PopplerAction<!-- -->s
     * that each mapping contains, so if you want to keep them around, you need to
     * copy them with poppler_action_copy().
     * @param list A list of   #PopplerLinkMapping<!-- -->s
     */
    static free_link_mapping(list: LinkMapping[]): void
    /**
     * Frees a list of #PopplerTextAttributes<!-- -->s allocated by
     * poppler_page_get_text_attributes().
     * @param list A list of   #PopplerTextAttributes<!-- -->s
     */
    static free_text_attributes(list: TextAttributes[]): void
    /**
     * Frees `region`
     * @param region a #GList of   #PopplerRectangle
     */
    static selection_region_free(region: Rectangle[]): void
}

interface StructureElement_ConstructProps extends GObject.Object_ConstructProps {
}

interface StructureElement {

    // Owm methods of Poppler-0.18.Poppler.StructureElement

    /**
     * Acronyms and abbreviations contained in elements of type
     * #POPPLER_STRUCTURE_ELEMENT_SPAN may have an associated expanded
     * text form, which can be retrieved using this function.
     */
    get_abbreviation(): string
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
    get_actual_text(): string
    /**
     * Obtains the “alternate” text representation of the element (and its child
     * elements). This is mostly used for non-text elements like images and
     * figures, to specify a textual description of the element.
     * 
     * Note that for elements containing proper text, the function
     * poppler_structure_element_get_text() must be used instead.
     */
    get_alt_text(): string
    /**
     * Obtains the background color of the element. If this attribute is
     * not specified, the element shall be treated as if it were transparent.
     */
    get_background_color(): [ /* returnType */ boolean, /* color */ Color ]
    /**
     * Obtains how much the text contained in the inline-level structure element should be shifted,
     * measuring from the baseline of the glyphs.
     */
    get_baseline_shift(): number
    /**
     * Obtains the block-alignment mode of the block-level structure element.
     */
    get_block_align(): StructureBlockAlign
    /**
     * Obtains the color of border around the element. The result values
     * are in before-after-start-end ordering (for the typical Western
     * left-to-right writing, that is top-bottom-left-right).
     * If this attribute is not specified, the border color for this element shall
     * be the current text fill color in effect at the start of its associated
     * content.
     */
    get_border_color(): [ /* returnType */ boolean, /* colors */ Color[] ]
    /**
     * Obtains the border style of a structure element. The result values
     * are in before-after-start-end ordering. For example, using Western
     * left-to-right writing, that is top-bottom-left-right.
     */
    get_border_style(): /* border_styles */ StructureBorderStyle[]
    /**
     * Obtains the thickness of the border of an element. The result values
     * are in before-after-start-end ordering (for the typical Western
     * left-to-right writing, that is top-bottom-left-right).
     * A value of 0 indicates that the border shall not be drawn.
     */
    get_border_thickness(): [ /* returnType */ boolean, /* border_thicknesses */ number[] ]
    /**
     * Obtains the size of the bounding box of a block-level structure element.
     */
    get_bounding_box(): [ /* returnType */ boolean, /* bounding_box */ Rectangle ]
    /**
     * Obtains the color of the content contained in the element.
     * If this attribute is not specified, the color for this element shall
     * be the current text fill color in effect at the start of its associated content.
     */
    get_color(): [ /* returnType */ boolean, /* color */ Color ]
    /**
     * Obtains the number of columns used to lay out the content contained
     * in the grouping element.
     */
    get_column_count(): number
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
    get_column_gaps(): number[]
    /**
     * Obtains an array with the widths of the columns.
     * 
     * The array with the results is allocated by the function. When it is
     * not needed anymore, be sure to call g_free() on it.
     */
    get_column_widths(): number[]
    /**
     * Obtains the amount of indentation at the end of the block-level structure element.
     */
    get_end_indent(): number
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
    get_form_description(): string
    /**
     * Obtains the role of a form structure element that is part of a form, or is
     * a form field. This hints how the control for the element is intended
     * to be rendered.
     */
    get_form_role(): StructureFormRole
    /**
     * For a structure element that is a form field, obtains in which state
     * the associated control is expected to be rendered.
     */
    get_form_state(): StructureFormState
    /**
     * Obtains the glyph orientation for the text contained in a
     * inline-level structure element.
     */
    get_glyph_orientation(): StructureGlyphOrientation
    /**
     * Obtains the height of the block-level structure element. Note that for elements which do
     * not specify a height, it has to be calculated, and in this case -1 is returned.
     */
    get_height(): number
    /**
     * Obtains the identifier of an element.
     */
    get_id(): string
    /**
     * Obtains the inline-alignment mode of the block-level structure element.
     */
    get_inline_align(): StructureInlineAlign
    get_kind(): StructureElementKind
    /**
     * Obtains the language and country code for the content in an element,
     * in two-letter ISO format, e.g. <code>en_ES</code>, or %NULL if not
     * defined.
     */
    get_language(): string
    /**
     * Obtains the line height for the text contained in the inline-level structure element.
     * Note that for elements which do not specify a line height, it has to be calculated,
     * and in this case -1 is returned.
     */
    get_line_height(): number
    /**
     * Obtains the list numbering style for list items.
     */
    get_list_numbering(): StructureListNumbering
    /**
     * Obtains the padding of an element (space around it). The result
     * values are in before-after-start-end ordering. For example using
     * Western left-to-right writing, that is top-bottom-left-right.
     */
    get_padding(): /* paddings */ number[]
    /**
     * Obtains the page number in which the element is contained.
     */
    get_page(): number
    /**
     * Obtains the placement type of the structure element.
     */
    get_placement(): StructurePlacement
    /**
     * Obtains the alignment for the ruby text contained in a
     * inline-level structure element.
     */
    get_ruby_align(): StructureRubyAlign
    /**
     * Obtains the position for the ruby text contained in a
     * inline-level structure element.
     */
    get_ruby_position(): StructureRubyPosition
    /**
     * Obtains the amount of empty space after the block-level structure element.
     */
    get_space_after(): number
    /**
     * Obtains the amount of empty space before the block-level structure element.
     */
    get_space_before(): number
    /**
     * Obtains the amount of indentation at the beginning of the block-level structure element.
     */
    get_start_indent(): number
    /**
     * Obtains the table cell border style of a block-level structure element. The result values
     * are in before-after-start-end ordering. For example, using Western
     * left-to-right writing, that is top-bottom-left-right.
     */
    get_table_border_style(): /* border_styles */ StructureBorderStyle[]
    /**
     * Obtains the number of columns the table element spans to.
     */
    get_table_column_span(): number
    /**
     * Obtains an array with the names of the table column headers. This is only
     * useful for table header row elements.
     * 
     * The array with the results is allocated by the function. The number
     * of items in the returned array can be obtained with g_strv_length().
     * The returned value must be freed using g_strfreev().
     */
    get_table_headers(): string[]
    /**
     * Obtains the padding between the table cell’s content rectangle and the
     * surrounding border of a block-level structure element. The result
     * values are in before-after-start-end ordering (for the typical
     * Western left-to-right writing, that is top-bottom-left-right).
     */
    get_table_padding(): /* paddings */ number[]
    /**
     * Obtains the number of rows the table element spans to.
     */
    get_table_row_span(): number
    /**
     * Obtains the scope of a table structure element.
     */
    get_table_scope(): StructureTableScope
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
    get_table_summary(): string
    /**
     * Obtains the text enclosed by an element, or the text enclosed by the
     * elements in the subtree (including the element itself).
     * @param flags A #PopplerStructureGetTextFlags value, or    %POPPLER_STRUCTURE_GET_TEXT_NONE to disable all the flags.
     */
    get_text(flags: StructureGetTextFlags): string
    /**
     * Obtains the text alignment mode of the text contained into a
     * block-level structure element.
     */
    get_text_align(): StructureTextAlign
    /**
     * Obtains the color of the text decoration for the text contained
     * in the inline-level structure element.
     * If this attribute is not specified, the color for this element shall be the current fill
     * color in effect at the start of its associated content.
     */
    get_text_decoration_color(): [ /* returnType */ boolean, /* color */ Color ]
    /**
     * Obtains the thickness of the text decoration for the text contained
     * in the inline-level structure element.
     * If this attribute is not specified, it shall be derived from the current
     * stroke thickness in effect at the start of the element’s associated content.
     */
    get_text_decoration_thickness(): number
    /**
     * Obtains the text decoration type of the text contained in the
     * inline-level structure element.
     */
    get_text_decoration_type(): StructureTextDecoration
    /**
     * Obtains the amount of indentation of the text contained in the block-level structure element.
     */
    get_text_indent(): number
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
    get_text_spans(): TextSpan[]
    /**
     * Obtains the title of an element.
     */
    get_title(): string
    /**
     * Obtains the width of the block-level structure element. Note that for elements which do
     * not specify a width, it has to be calculated, and in this case -1 is returned.
     */
    get_width(): number
    /**
     * Obtains the writing mode (writing direction) of the content associated
     * with a structure element.
     */
    get_writing_mode(): StructureWritingMode
    /**
     * Checks whether an element is a block element.
     */
    is_block(): boolean
    /**
     * Checks whether an element is actual document content.
     */
    is_content(): boolean
    /**
     * Checks whether an element is a grouping element.
     */
    is_grouping(): boolean
    /**
     * Checks whether an element is an inline element.
     */
    is_inline(): boolean

    // Class property signals of Poppler-0.18.Poppler.StructureElement

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StructureElement extends GObject.Object {

    // Own properties of Poppler-0.18.Poppler.StructureElement

    static name: string
    static $gtype: GObject.GType<StructureElement>

    // Constructors of Poppler-0.18.Poppler.StructureElement

    constructor(config?: StructureElement_ConstructProps) 
    _init(config?: StructureElement_ConstructProps): void
}

interface ActionAny {

    // Own fields of Poppler-0.18.Poppler.ActionAny

    type: ActionType
    title: string
}

class ActionAny {

    // Own properties of Poppler-0.18.Poppler.ActionAny

    static name: string
}

interface ActionGotoDest {

    // Own fields of Poppler-0.18.Poppler.ActionGotoDest

    type: ActionType
    title: string
    dest: Dest
}

class ActionGotoDest {

    // Own properties of Poppler-0.18.Poppler.ActionGotoDest

    static name: string
}

interface ActionGotoRemote {

    // Own fields of Poppler-0.18.Poppler.ActionGotoRemote

    type: ActionType
    title: string
    file_name: string
    dest: Dest
}

class ActionGotoRemote {

    // Own properties of Poppler-0.18.Poppler.ActionGotoRemote

    static name: string
}

interface ActionJavascript {

    // Own fields of Poppler-0.18.Poppler.ActionJavascript

    type: ActionType
    title: string
    script: string
}

class ActionJavascript {

    // Own properties of Poppler-0.18.Poppler.ActionJavascript

    static name: string
}

interface ActionLaunch {

    // Own fields of Poppler-0.18.Poppler.ActionLaunch

    type: ActionType
    title: string
    file_name: string
    params: string
}

class ActionLaunch {

    // Own properties of Poppler-0.18.Poppler.ActionLaunch

    static name: string
}

interface ActionLayer {

    // Own fields of Poppler-0.18.Poppler.ActionLayer

    /**
     * a #PopplerActionLayerAction
     * @field 
     */
    action: ActionLayerAction
    /**
     * list of #PopplerLayer<!-- -->s
     * @field 
     */
    layers: object[]
}

/**
 * Action to perform over a list of layers
 * @record 
 */
class ActionLayer {

    // Own properties of Poppler-0.18.Poppler.ActionLayer

    static name: string
}

interface ActionMovie {

    // Own fields of Poppler-0.18.Poppler.ActionMovie

    type: ActionType
    title: string
    operation: ActionMovieOperation
    movie: Movie
}

class ActionMovie {

    // Own properties of Poppler-0.18.Poppler.ActionMovie

    static name: string
}

interface ActionNamed {

    // Own fields of Poppler-0.18.Poppler.ActionNamed

    type: ActionType
    title: string
    named_dest: string
}

class ActionNamed {

    // Own properties of Poppler-0.18.Poppler.ActionNamed

    static name: string
}

interface ActionOCGState {

    // Own fields of Poppler-0.18.Poppler.ActionOCGState

    type: ActionType
    title: string
    state_list: object[]
}

class ActionOCGState {

    // Own properties of Poppler-0.18.Poppler.ActionOCGState

    static name: string
}

interface ActionRendition {

    // Own fields of Poppler-0.18.Poppler.ActionRendition

    type: ActionType
    title: string
    op: number
    media: Media
}

class ActionRendition {

    // Own properties of Poppler-0.18.Poppler.ActionRendition

    static name: string
}

interface ActionResetForm {

    // Own fields of Poppler-0.18.Poppler.ActionResetForm

    type: ActionType
    title: string
    fields: object[]
    exclude: boolean
}

class ActionResetForm {

    // Own properties of Poppler-0.18.Poppler.ActionResetForm

    static name: string
}

interface ActionUri {

    // Own fields of Poppler-0.18.Poppler.ActionUri

    type: ActionType
    title: string
    uri: string
}

class ActionUri {

    // Own properties of Poppler-0.18.Poppler.ActionUri

    static name: string
}

interface AnnotCalloutLine {

    // Own fields of Poppler-0.18.Poppler.AnnotCalloutLine

    multiline: boolean
    x1: number
    y1: number
    x2: number
    y2: number
    x3: number
    y3: number

    // Owm methods of Poppler-0.18.Poppler.AnnotCalloutLine

    /**
     * It does copy `callout` to a new #PopplerAnnotCalloutLine.
     */
    copy(): AnnotCalloutLine
    /**
     * Frees the memory used by #PopplerAnnotCalloutLine.
     */
    free(): void
}

class AnnotCalloutLine {

    // Own properties of Poppler-0.18.Poppler.AnnotCalloutLine

    static name: string

    // Constructors of Poppler-0.18.Poppler.AnnotCalloutLine

    /**
     * Creates a new empty #PopplerAnnotCalloutLine.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new empty #PopplerAnnotCalloutLine.
     * @constructor 
     */
    static new(): AnnotCalloutLine
}

interface AnnotMapping {

    // Own fields of Poppler-0.18.Poppler.AnnotMapping

    /**
     * a #PopplerRectangle representing an area of the page
     * @field 
     */
    area: Rectangle
    /**
     * a #PopplerAnnot
     * @field 
     */
    annot: Annot

    // Owm methods of Poppler-0.18.Poppler.AnnotMapping

    /**
     * Creates a copy of `mapping`
     */
    copy(): AnnotMapping
    /**
     * Frees the given #PopplerAnnotMapping
     */
    free(): void
}

/**
 * A #PopplerAnnotMapping structure represents the location
 * of `annot` on the page
 * @record 
 */
class AnnotMapping {

    // Own properties of Poppler-0.18.Poppler.AnnotMapping

    static name: string

    // Constructors of Poppler-0.18.Poppler.AnnotMapping

    /**
     * Creates a new #PopplerAnnotMapping
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #PopplerAnnotMapping
     * @constructor 
     */
    static new(): AnnotMapping
}

interface AttachmentClass {

    // Own fields of Poppler-0.18.Poppler.AttachmentClass

    parent_class: GObject.ObjectClass
}

abstract class AttachmentClass {

    // Own properties of Poppler-0.18.Poppler.AttachmentClass

    static name: string
}

interface Color {

    // Own fields of Poppler-0.18.Poppler.Color

    /**
     * the red component of color
     * @field 
     */
    red: number
    /**
     * the green component of color
     * @field 
     */
    green: number
    /**
     * the blue component of color
     * @field 
     */
    blue: number

    // Owm methods of Poppler-0.18.Poppler.Color

    /**
     * Creates a copy of `color`
     */
    copy(): Color
    /**
     * Frees the given #PopplerColor
     */
    free(): void
}

/**
 * A #PopplerColor describes a RGB color. Color components
 * are values between 0 and 65535
 * @record 
 */
class Color {

    // Own properties of Poppler-0.18.Poppler.Color

    static name: string

    // Constructors of Poppler-0.18.Poppler.Color

    /**
     * Creates a new #PopplerColor
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #PopplerColor
     * @constructor 
     */
    static new(): Color
}

interface Dest {

    // Own fields of Poppler-0.18.Poppler.Dest

    /**
     * type of destination
     * @field 
     */
    type: DestType
    /**
     * page number
     * @field 
     */
    page_num: number
    /**
     * left coordinate
     * @field 
     */
    left: number
    /**
     * bottom coordinate
     * @field 
     */
    bottom: number
    /**
     * right coordinate
     * @field 
     */
    right: number
    /**
     * top coordinate
     * @field 
     */
    top: number
    /**
     * scale factor
     * @field 
     */
    zoom: number
    /**
     * name of the destination (#POPPLER_DEST_NAMED only)
     * @field 
     */
    named_dest: string
    /**
     * whether left coordinate should be changed
     * @field 
     */
    change_left: number
    /**
     * whether top coordinate should be changed
     * @field 
     */
    change_top: number
    /**
     * whether scale factor should be changed
     * @field 
     */
    change_zoom: number

    // Owm methods of Poppler-0.18.Poppler.Dest

    /**
     * Copies `dest,` creating an identical #PopplerDest.
     */
    copy(): Dest
    /**
     * Frees `dest`
     */
    free(): void
}

/**
 * Data structure for holding a destination
 * 
 * Note that `named_dest` is the string representation of the named
 * destination. This is the right form to pass to poppler functions,
 * e.g. poppler_document_find_dest(), but to get the destination as
 * it appears in the PDF itself, you need to convert it to a bytestring
 * with poppler_named_dest_to_bytestring() first.
 * Also note that `named_dest` does not have a defined encoding and
 * is not in a form suitable to be displayed to the user.
 * @record 
 */
class Dest {

    // Own properties of Poppler-0.18.Poppler.Dest

    static name: string
}

interface FontsIter {

    // Owm methods of Poppler-0.18.Poppler.FontsIter

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
    get_encoding(): string
    /**
     * The filename of the font associated with `iter` or %NULL if
     * the font is embedded
     */
    get_file_name(): string
    /**
     * Returns the type of the font associated with `iter`
     */
    get_font_type(): FontType
    /**
     * Returns the full name of the font associated with `iter`
     */
    get_full_name(): string
    /**
     * Returns the name of the font associated with `iter`
     */
    get_name(): string
    /**
     * The name of the substitute font of the font associated with `iter` or %NULL if
     * the font is embedded
     */
    get_substitute_name(): string
    /**
     * Returns whether the font associated with `iter` is embedded in the document
     */
    is_embedded(): boolean
    /**
     * Returns whether the font associated with `iter` is a subset of another font
     */
    is_subset(): boolean
    /**
     * Sets `iter` to point to the next font
     */
    next(): boolean
}

class FontsIter {

    // Own properties of Poppler-0.18.Poppler.FontsIter

    static name: string
}

interface FormFieldMapping {

    // Own fields of Poppler-0.18.Poppler.FormFieldMapping

    /**
     * a #PopplerRectangle representing an area of the page
     * @field 
     */
    area: Rectangle
    /**
     * a #PopplerFormField
     * @field 
     */
    field: FormField

    // Owm methods of Poppler-0.18.Poppler.FormFieldMapping

    /**
     * Creates a copy of `mapping`
     */
    copy(): FormFieldMapping
    /**
     * Frees the given #PopplerFormFieldMapping
     */
    free(): void
}

/**
 * A #PopplerFormFieldMapping structure represents the location
 * of `field` on the page
 * @record 
 */
class FormFieldMapping {

    // Own properties of Poppler-0.18.Poppler.FormFieldMapping

    static name: string

    // Constructors of Poppler-0.18.Poppler.FormFieldMapping

    /**
     * Creates a new #PopplerFormFieldMapping
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #PopplerFormFieldMapping
     * @constructor 
     */
    static new(): FormFieldMapping
}

interface ImageMapping {

    // Own fields of Poppler-0.18.Poppler.ImageMapping

    /**
     * a #PopplerRectangle representing an area of the page
     * @field 
     */
    area: Rectangle
    /**
     * an image identifier
     * @field 
     */
    image_id: number

    // Owm methods of Poppler-0.18.Poppler.ImageMapping

    /**
     * Creates a copy of `mapping`
     */
    copy(): ImageMapping
    /**
     * Frees the given #PopplerImageMapping
     */
    free(): void
}

/**
 * A #PopplerImageMapping structure represents the location
 * of an image on the page
 * @record 
 */
class ImageMapping {

    // Own properties of Poppler-0.18.Poppler.ImageMapping

    static name: string

    // Constructors of Poppler-0.18.Poppler.ImageMapping

    /**
     * Creates a new #PopplerImageMapping
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #PopplerImageMapping
     * @constructor 
     */
    static new(): ImageMapping
}

interface IndexIter {

    // Owm methods of Poppler-0.18.Poppler.IndexIter

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
    get_action(): Action
    /**
     * Returns a newly created child of `parent,` or %NULL if the iter has no child.
     * See poppler_index_iter_new() for more information on this function.
     */
    get_child(): IndexIter
    /**
     * Returns whether this node should be expanded by default to the user.  The
     * document can provide a hint as to how the document's index should be expanded
     * initially.
     */
    is_open(): boolean
    /**
     * Sets `iter` to point to the next action at the current level, if valid.  See
     * poppler_index_iter_new() for more information.
     */
    next(): boolean
}

class IndexIter {

    // Own properties of Poppler-0.18.Poppler.IndexIter

    static name: string

    // Constructors of Poppler-0.18.Poppler.IndexIter

    /**
     * Returns the root #PopplerIndexIter for `document,` or %NULL.  This must be
     * freed with poppler_index_iter_free().
     * 
     * Certain documents have an index associated with them.  This index can be used
     * to help the user navigate the document, and is similar to a table of
     * contents.  Each node in the index will contain a #PopplerAction that can be
     * displayed to the user &mdash; typically a #POPPLER_ACTION_GOTO_DEST or a
     * #POPPLER_ACTION_URI<!-- -->.
     * 
     * Here is a simple example of some code that walks the full index:
     * 
     * <informalexample><programlisting>
     * static void
     * walk_index (PopplerIndexIter *iter)
     * {
     *   do
     *     {
     *       /<!-- -->* Get the action and do something with it *<!-- -->/
     *       PopplerIndexIter *child = poppler_index_iter_get_child (iter);
     *       if (child)
     *         walk_index (child);
     *       poppler_index_iter_free (child);
     *     }
     *   while (poppler_index_iter_next (iter));
     * }
     * ...
     * {
     *   iter = poppler_index_iter_new (document);
     *   walk_index (iter);
     *   poppler_index_iter_free (iter);
     * }
     * </programlisting></informalexample>
     * @constructor 
     * @param document a #PopplerDocument
     */
    constructor(document: Document) 
    /**
     * Returns the root #PopplerIndexIter for `document,` or %NULL.  This must be
     * freed with poppler_index_iter_free().
     * 
     * Certain documents have an index associated with them.  This index can be used
     * to help the user navigate the document, and is similar to a table of
     * contents.  Each node in the index will contain a #PopplerAction that can be
     * displayed to the user &mdash; typically a #POPPLER_ACTION_GOTO_DEST or a
     * #POPPLER_ACTION_URI<!-- -->.
     * 
     * Here is a simple example of some code that walks the full index:
     * 
     * <informalexample><programlisting>
     * static void
     * walk_index (PopplerIndexIter *iter)
     * {
     *   do
     *     {
     *       /<!-- -->* Get the action and do something with it *<!-- -->/
     *       PopplerIndexIter *child = poppler_index_iter_get_child (iter);
     *       if (child)
     *         walk_index (child);
     *       poppler_index_iter_free (child);
     *     }
     *   while (poppler_index_iter_next (iter));
     * }
     * ...
     * {
     *   iter = poppler_index_iter_new (document);
     *   walk_index (iter);
     *   poppler_index_iter_free (iter);
     * }
     * </programlisting></informalexample>
     * @constructor 
     * @param document a #PopplerDocument
     */
    static new(document: Document): IndexIter
}

interface LayersIter {

    // Owm methods of Poppler-0.18.Poppler.LayersIter

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
    get_child(): LayersIter
    /**
     * Returns the #PopplerLayer associated with `iter`.
     */
    get_layer(): Layer
    /**
     * Returns the title associated with `iter`.  It must be freed with
     * g_free().
     */
    get_title(): string
    /**
     * Sets `iter` to point to the next action at the current level, if valid.  See
     * poppler_layers_iter_new() for more information.
     */
    next(): boolean
}

class LayersIter {

    // Own properties of Poppler-0.18.Poppler.LayersIter

    static name: string

    // Constructors of Poppler-0.18.Poppler.LayersIter

    constructor(document: Document) 
    static new(document: Document): LayersIter
}

interface LinkMapping {

    // Own fields of Poppler-0.18.Poppler.LinkMapping

    /**
     * a #PopplerRectangle representing an area of the page
     * @field 
     */
    area: Rectangle
    /**
     * a #PopplerAction
     * @field 
     */
    action: Action

    // Owm methods of Poppler-0.18.Poppler.LinkMapping

    /**
     * Creates a copy of `mapping`
     */
    copy(): LinkMapping
    /**
     * Frees the given #PopplerLinkMapping
     */
    free(): void
}

/**
 * A #PopplerLinkMapping structure represents the location
 * of `action` on the page
 * @record 
 */
class LinkMapping {

    // Own properties of Poppler-0.18.Poppler.LinkMapping

    static name: string

    // Constructors of Poppler-0.18.Poppler.LinkMapping

    /**
     * Creates a new #PopplerLinkMapping
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #PopplerLinkMapping
     * @constructor 
     */
    static new(): LinkMapping
}

interface PageRange {

    // Own fields of Poppler-0.18.Poppler.PageRange

    /**
     * first page in the range of pages
     * @field 
     */
    start_page: number
    /**
     * last page in the range of pages
     * @field 
     */
    end_page: number
}

/**
 * A #PopplerPageRange is used to specify a range of pages.
 * @record 
 */
class PageRange {

    // Own properties of Poppler-0.18.Poppler.PageRange

    static name: string
}

interface PageTransition {

    // Own fields of Poppler-0.18.Poppler.PageTransition

    /**
     * the type of transtition
     * @field 
     */
    type: PageTransitionType
    /**
     * the dimension in which the transition effect shall occur.
     * Only for #POPPLER_PAGE_TRANSITION_SPLIT and #POPPLER_PAGE_TRANSITION_BLINDS transition types
     * @field 
     */
    alignment: PageTransitionAlignment
    /**
     * the direction of motion for the transition effect.
     * Only for #POPPLER_PAGE_TRANSITION_SPLIT, #POPPLER_PAGE_TRANSITION_BOX and #POPPLER_PAGE_TRANSITION_FLY
     * transition types
     * @field 
     */
    direction: PageTransitionDirection
    /**
     * the duration of the transition effect
     * @field 
     */
    duration: number
    /**
     * the direction in which the specified transition effect shall moves,
     * expressed in degrees counterclockwise starting from a left-to-right direction.
     * Only for #POPPLER_PAGE_TRANSITION_WIPE, #POPPLER_PAGE_TRANSITION_GLITTER, #POPPLER_PAGE_TRANSITION_FLY,
     * #POPPLER_PAGE_TRANSITION_COVER, #POPPLER_PAGE_TRANSITION_UNCOVER and #POPPLER_PAGE_TRANSITION_PUSH
     * transition types
     * @field 
     */
    angle: number
    /**
     * the starting or ending scale at which the changes shall be drawn.
     * Only for #POPPLER_PAGE_TRANSITION_FLY transition type
     * @field 
     */
    scale: number
    /**
     * whether the area that will be flown is rectangular and opaque.
     * Only for #POPPLER_PAGE_TRANSITION_FLY transition type
     * @field 
     */
    rectangular: boolean
    duration_real: number

    // Owm methods of Poppler-0.18.Poppler.PageTransition

    /**
     * Creates a copy of `transition`
     */
    copy(): PageTransition
    /**
     * Frees the given #PopplerPageTransition
     */
    free(): void
}

/**
 * A #PopplerPageTransition structures describes a visual transition
 * to use when moving between pages during a presentation
 * @record 
 */
class PageTransition {

    // Own properties of Poppler-0.18.Poppler.PageTransition

    static name: string

    // Constructors of Poppler-0.18.Poppler.PageTransition

    /**
     * Creates a new #PopplerPageTransition
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #PopplerPageTransition
     * @constructor 
     */
    static new(): PageTransition
}

interface Point {

    // Own fields of Poppler-0.18.Poppler.Point

    /**
     * x coordinate
     * @field 
     */
    x: number
    /**
     * y coordinate
     * @field 
     */
    y: number

    // Owm methods of Poppler-0.18.Poppler.Point

    /**
     * Creates a copy of `point`. The copy must be freed with poppler_point_free()
     * after use.
     */
    copy(): Point
    /**
     * Frees the memory used by `point`
     */
    free(): void
}

/**
 * A #PopplerPoint is used to describe a location point on a page
 * @record 
 */
class Point {

    // Own properties of Poppler-0.18.Poppler.Point

    static name: string

    // Constructors of Poppler-0.18.Poppler.Point

    /**
     * Creates a new #PopplerPoint. It must be freed with poppler_point_free() after use.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #PopplerPoint. It must be freed with poppler_point_free() after use.
     * @constructor 
     */
    static new(): Point
}

interface Quadrilateral {

    // Own fields of Poppler-0.18.Poppler.Quadrilateral

    /**
     * a #PopplerPoint with the first vertex coordinates
     * @field 
     */
    p1: Point
    /**
     * a #PopplerPoint with the second vertex coordinates
     * @field 
     */
    p2: Point
    /**
     * a #PopplerPoint with the third vertex coordinates
     * @field 
     */
    p3: Point
    /**
     * a #PopplerPoint with the fourth vertex coordinates
     * @field 
     */
    p4: Point

    // Owm methods of Poppler-0.18.Poppler.Quadrilateral

    /**
     * Creates a copy of `quad`. The copy must be freed with poppler_quadrilateral_free() after use.
     */
    copy(): Quadrilateral
    /**
     * Frees the memory used by `quad`
     */
    free(): void
}

/**
 * A #PopplerQuadrilateral is used to describe rectangle-like polygon
 *  with arbitrary inclination on a page.
 * 
 *  Since: 0.26
 * @record 
 */
class Quadrilateral {

    // Own properties of Poppler-0.18.Poppler.Quadrilateral

    static name: string

    // Constructors of Poppler-0.18.Poppler.Quadrilateral

    /**
     * Creates a new #PopplerQuadrilateral. It must be freed with poppler_quadrilateral_free() after use.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #PopplerQuadrilateral. It must be freed with poppler_quadrilateral_free() after use.
     * @constructor 
     */
    static new(): Quadrilateral
}

interface Rectangle {

    // Own fields of Poppler-0.18.Poppler.Rectangle

    /**
     * x coordinate of lower left corner
     * @field 
     */
    x1: number
    /**
     * y coordinate of lower left corner
     * @field 
     */
    y1: number
    /**
     * x coordinate of upper right corner
     * @field 
     */
    x2: number
    /**
     * y coordinate of upper right corner
     * @field 
     */
    y2: number

    // Owm methods of Poppler-0.18.Poppler.Rectangle

    /**
     * Creates a copy of `rectangle`
     */
    copy(): Rectangle
    /**
     * Frees the given #PopplerRectangle
     */
    free(): void
}

/**
 * A #PopplerRectangle is used to describe
 * locations on a page and bounding boxes
 * @record 
 */
class Rectangle {

    // Own properties of Poppler-0.18.Poppler.Rectangle

    static name: string

    // Constructors of Poppler-0.18.Poppler.Rectangle

    /**
     * Creates a new #PopplerRectangle
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #PopplerRectangle
     * @constructor 
     */
    static new(): Rectangle
}

interface StructureElementIter {

    // Owm methods of Poppler-0.18.Poppler.StructureElementIter

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
    get_child(): StructureElementIter
    /**
     * Returns the #PopplerStructureElementIter associated with `iter`.
     */
    get_element(): StructureElement
    /**
     * Sets `iter` to point to the next structure element at the current level
     * of the tree, if valid. See poppler_structure_element_iter_new() for more
     * information.
     */
    next(): boolean
}

class StructureElementIter {

    // Own properties of Poppler-0.18.Poppler.StructureElementIter

    static name: string

    // Constructors of Poppler-0.18.Poppler.StructureElementIter

    /**
     * Returns the root #PopplerStructureElementIter for `document,` or %NULL. The
     * returned value must be freed with poppler_structure_element_iter_free().
     * 
     * Documents may have an associated structure tree &mdashmostly, Tagged-PDF
     * compliant documents&mdash; which can be used to obtain information about
     * the document structure and its contents. Each node in the tree contains
     * a #PopplerStructureElement.
     * 
     * Here is a simple example that walks the whole tree:
     * 
     * <informalexample><programlisting>
     * static void
     * walk_structure (PopplerStructureElementIter *iter)
     * {
     *   do {
     *     /<!-- -->* Get the element and do something with it *<!-- -->/
     *     PopplerStructureElementIter *child = poppler_structure_element_iter_get_child (iter);
     *     if (child)
     *       walk_structure (child);
     *     poppler_structure_element_iter_free (child);
     *   } while (poppler_structure_element_iter_next (iter));
     * }
     * ...
     * {
     *   iter = poppler_structure_element_iter_new (document);
     *   walk_structure (iter);
     *   poppler_structure_element_iter_free (iter);
     * }
     * </programlisting></informalexample>
     * @constructor 
     * @param poppler_document a #PopplerDocument.
     */
    constructor(poppler_document: Document) 
    /**
     * Returns the root #PopplerStructureElementIter for `document,` or %NULL. The
     * returned value must be freed with poppler_structure_element_iter_free().
     * 
     * Documents may have an associated structure tree &mdashmostly, Tagged-PDF
     * compliant documents&mdash; which can be used to obtain information about
     * the document structure and its contents. Each node in the tree contains
     * a #PopplerStructureElement.
     * 
     * Here is a simple example that walks the whole tree:
     * 
     * <informalexample><programlisting>
     * static void
     * walk_structure (PopplerStructureElementIter *iter)
     * {
     *   do {
     *     /<!-- -->* Get the element and do something with it *<!-- -->/
     *     PopplerStructureElementIter *child = poppler_structure_element_iter_get_child (iter);
     *     if (child)
     *       walk_structure (child);
     *     poppler_structure_element_iter_free (child);
     *   } while (poppler_structure_element_iter_next (iter));
     * }
     * ...
     * {
     *   iter = poppler_structure_element_iter_new (document);
     *   walk_structure (iter);
     *   poppler_structure_element_iter_free (iter);
     * }
     * </programlisting></informalexample>
     * @constructor 
     * @param poppler_document a #PopplerDocument.
     */
    static new(poppler_document: Document): StructureElementIter
}

interface TextAttributes {

    // Own fields of Poppler-0.18.Poppler.TextAttributes

    /**
     * font name
     * @field 
     */
    font_name: string
    /**
     * font size
     * @field 
     */
    font_size: number
    /**
     * if text is underlined
     * @field 
     */
    is_underlined: boolean
    /**
     * a #PopplerColor, the foreground color
     * @field 
     */
    color: Color
    /**
     * start position this text attributes apply
     * @field 
     */
    start_index: number
    /**
     * end position this text attributes apply
     * @field 
     */
    end_index: number

    // Owm methods of Poppler-0.18.Poppler.TextAttributes

    /**
     * Creates a copy of `text_attrs`
     */
    copy(): TextAttributes
    /**
     * Frees the given #PopplerTextAttributes
     */
    free(): void
}

/**
 * A #PopplerTextAttributes is used to describe text attributes of a range of text
 * @record 
 */
class TextAttributes {

    // Own properties of Poppler-0.18.Poppler.TextAttributes

    static name: string

    // Constructors of Poppler-0.18.Poppler.TextAttributes

    /**
     * Creates a new #PopplerTextAttributes
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #PopplerTextAttributes
     * @constructor 
     */
    static new(): TextAttributes
}

interface TextSpan {

    // Owm methods of Poppler-0.18.Poppler.TextSpan

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
    get_color(): /* color */ Color
    /**
     * Obtains the name of the font in which the span is to be rendered.
     */
    get_font_name(): string
    /**
     * Obtains the text contained in the span.
     */
    get_text(): string
    /**
     * Check whether a text span is meant to be rendered using a bold font.
     */
    is_bold_font(): boolean
    /**
     * Check wether a text span is meant to be rendered using a fixed-width font.
     */
    is_fixed_width_font(): boolean
    /**
     * Check whether a text span is meant to be rendered using a serif font.
     */
    is_serif_font(): boolean
}

class TextSpan {

    // Own properties of Poppler-0.18.Poppler.TextSpan

    static name: string
}

interface Action {

    // Own fields of Poppler-0.18.Poppler.Action

    type: ActionType
    any: ActionAny
    goto_dest: ActionGotoDest
    goto_remote: ActionGotoRemote
    launch: ActionLaunch
    uri: ActionUri
    named: ActionNamed
    movie: ActionMovie
    rendition: ActionRendition
    ocg_state: ActionOCGState
    javascript: ActionJavascript
    reset_form: ActionResetForm

    // Owm methods of Poppler-0.18.Poppler.Action

    /**
     * Copies `action,` creating an identical #PopplerAction.
     */
    copy(): Action
    /**
     * Frees `action`
     */
    free(): void
}

/**
 * A data structure for holding actions
 * @union 
 */
class Action {

    // Own properties of Poppler-0.18.Poppler.Action

    static name: string
}

}
export default Poppler;