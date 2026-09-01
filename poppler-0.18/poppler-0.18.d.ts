
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
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Poppler {

    /**
     * Poppler-0.18
     */


    /**
     * @gir-type Enum
     */
    export namespace ActionLayerAction {
        export const $gtype: GObject.GType<ActionLayerAction>;
    }

    /**
     * Layer actions
     * @gir-type Enum
     * @since 0.14
     */
    enum ActionLayerAction {
        /**
         * set layer visibility on
         */
        ON = 0,
        /**
         * set layer visibility off
         */
        OFF = 1,
        /**
         * reverse the layer visibility state
         */
        TOGGLE = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace ActionMovieOperation {
        export const $gtype: GObject.GType<ActionMovieOperation>;
    }

    /**
     * Movie operations
     * @gir-type Enum
     * @since 0.14
     */
    enum ActionMovieOperation {
        /**
         * play movie
         */
        PLAY = 0,
        /**
         * pause playing movie
         */
        PAUSE = 1,
        /**
         * resume paused movie
         */
        RESUME = 2,
        /**
         * stop playing movie
         */
        STOP = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace ActionType {
        export const $gtype: GObject.GType<ActionType>;
    }

    /**
     * Action types
     * @gir-type Enum
     */
    enum ActionType {
        /**
         * unknown action
         */
        UNKNOWN = 0,
        /**
         * no action specified
         */
        NONE = 1,
        /**
         * go to destination
         */
        GOTO_DEST = 2,
        /**
         * go to destination in another document
         */
        GOTO_REMOTE = 3,
        /**
         * launch app (or open document)
         */
        LAUNCH = 4,
        /**
         * URI
         */
        URI = 5,
        /**
         * predefined action
         */
        NAMED = 6,
        /**
         * play movies. Since 0.14
         */
        MOVIE = 7,
        /**
         * play multimedia content. Since 0.14
         */
        RENDITION = 8,
        /**
         * state of layer. Since 0.14
         */
        OCG_STATE = 9,
        /**
         * Javascript. Since 0.18
         */
        JAVASCRIPT = 10,
        /**
         * resets form. Since 0.90
         */
        RESET_FORM = 11,
    }


    /**
     * @gir-type Enum
     */
    export namespace AdditionalActionType {
        export const $gtype: GObject.GType<AdditionalActionType>;
    }

    /**
     * Form field additional action types to be passed to `poppler_form_field_get_additional_action`
     * @gir-type Enum
     * @since 0.72
     */
    enum AdditionalActionType {
        /**
         * The action to be performed when the user modifies the field.
         */
        FIELD_MODIFIED = 0,
        /**
         * The action to be performed before the field is formatted to
         * display its value.
         */
        FORMAT_FIELD = 1,
        /**
         * The action to be performed when the field value changes.
         */
        VALIDATE_FIELD = 2,
        /**
         * The action to be performed when the field needs to be
         * recalculated.
         */
        CALCULATE_FIELD = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace AnnotExternalDataType {
        export const $gtype: GObject.GType<AnnotExternalDataType>;
    }

    /**
     * @gir-type Enum
     */
    enum AnnotExternalDataType {
        "3D" = 0,
        UNKNOWN = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace AnnotFreeTextQuadding {
        export const $gtype: GObject.GType<AnnotFreeTextQuadding>;
    }

    /**
     * @gir-type Enum
     */
    enum AnnotFreeTextQuadding {
        LEFT_JUSTIFIED = 0,
        CENTERED = 1,
        RIGHT_JUSTIFIED = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace AnnotMarkupReplyType {
        export const $gtype: GObject.GType<AnnotMarkupReplyType>;
    }

    /**
     * @gir-type Enum
     */
    enum AnnotMarkupReplyType {
        R = 0,
        GROUP = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace AnnotStampIcon {
        export const $gtype: GObject.GType<AnnotStampIcon>;
    }

    /**
     * @gir-type Enum
     */
    enum AnnotStampIcon {
        UNKNOWN = 0,
        APPROVED = 1,
        AS_IS = 2,
        CONFIDENTIAL = 3,
        FINAL = 4,
        EXPERIMENTAL = 5,
        EXPIRED = 6,
        NOT_APPROVED = 7,
        NOT_FOR_PUBLIC_RELEASE = 8,
        SOLD = 9,
        DEPARTMENTAL = 10,
        FOR_COMMENT = 11,
        FOR_PUBLIC_RELEASE = 12,
        TOP_SECRET = 13,
        NONE = 14,
    }


    /**
     * @gir-type Enum
     */
    export namespace AnnotTextState {
        export const $gtype: GObject.GType<AnnotTextState>;
    }

    /**
     * @gir-type Enum
     */
    enum AnnotTextState {
        MARKED = 0,
        UNMARKED = 1,
        ACCEPTED = 2,
        REJECTED = 3,
        CANCELLED = 4,
        COMPLETED = 5,
        NONE = 6,
        UNKNOWN = 7,
    }


    /**
     * @gir-type Enum
     */
    export namespace AnnotType {
        export const $gtype: GObject.GType<AnnotType>;
    }

    /**
     * @gir-type Enum
     */
    enum AnnotType {
        UNKNOWN = 0,
        TEXT = 1,
        LINK = 2,
        FREE_TEXT = 3,
        LINE = 4,
        SQUARE = 5,
        CIRCLE = 6,
        POLYGON = 7,
        POLY_LINE = 8,
        HIGHLIGHT = 9,
        UNDERLINE = 10,
        SQUIGGLY = 11,
        STRIKE_OUT = 12,
        STAMP = 13,
        CARET = 14,
        INK = 15,
        POPUP = 16,
        FILE_ATTACHMENT = 17,
        SOUND = 18,
        MOVIE = 19,
        WIDGET = 20,
        SCREEN = 21,
        PRINTER_MARK = 22,
        TRAP_NET = 23,
        WATERMARK = 24,
        "3D" = 25,
    }


    /**
     * @gir-type Enum
     */
    export namespace Backend {
        export const $gtype: GObject.GType<Backend>;
    }

    /**
     * Backend codes returned by `poppler_get_backend()`.
     * @gir-type Enum
     */
    enum Backend {
        /**
         * Unknown backend
         */
        UNKNOWN = 0,
        /**
         * Splash backend
         */
        SPLASH = 1,
        /**
         * Cairo backend
         */
        CAIRO = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace CertificateStatus {
        export const $gtype: GObject.GType<CertificateStatus>;
    }

    /**
     * Signature certificate verification results
     * @gir-type Enum
     * @since 21.12.0
     */
    enum CertificateStatus {
        /**
         * certificate is considered trusted
         */
        TRUSTED = 0,
        /**
         * the issuer of this certificate has been marked as untrusted by the user
         */
        UNTRUSTED_ISSUER = 1,
        /**
         * this certificate trust chain has not finished in a trusted root certificate
         */
        UNKNOWN_ISSUER = 2,
        /**
         * certificate was revoked by the issuing certificate authority
         */
        REVOKED = 3,
        /**
         * signing time is outside the validity bounds of this certificate
         */
        EXPIRED = 4,
        /**
         * failed to verify certificate
         */
        GENERIC_ERROR = 5,
        /**
         * certificate not yet verified
         */
        NOT_VERIFIED = 6,
    }


    /**
     * @gir-type Enum
     */
    export namespace DestType {
        export const $gtype: GObject.GType<DestType>;
    }

    /**
     * Destination types
     * @gir-type Enum
     */
    enum DestType {
        /**
         * unknown destination
         */
        UNKNOWN = 0,
        /**
         * go to page with coordinates (left, top)
         * positioned at the upper-left corner of the window and the contents of
         * the page magnified by the factor zoom
         */
        XYZ = 1,
        /**
         * go to page with its contents magnified just
         * enough to fit the entire page within the window both horizontally and
         * vertically
         */
        FIT = 2,
        /**
         * go to page with the vertical coordinate top
         * positioned at the top edge of the window and the contents of the page
         * magnified just enough to fit the entire width of the page within the window
         */
        FITH = 3,
        /**
         * go to page with the horizontal coordinate
         * left positioned at the left edge of the window and the contents of the
         * page magnified just enough to fit the entire height of the page within the window
         */
        FITV = 4,
        /**
         * go to page with its contents magnified just
         * enough to fit the rectangle specified by the coordinates left, bottom,
         * right, and top entirely within the window both horizontally and vertically
         */
        FITR = 5,
        /**
         * go to page with its contents magnified just enough to fit
         * its bounding box entirely within the window both horizontally and vertically
         */
        FITB = 6,
        /**
         * go to page with the vertical
         * coordinate top positioned at the top edge of the window and the
         * contents of the page magnified just enough to fit the entire width of its
         * bounding box within the window
         */
        FITBH = 7,
        /**
         * go to page with the horizontal
         * coordinate left positioned at the left edge of the window and the
         * contents of the page magnified just enough to fit the entire height of its
         * bounding box within the window
         */
        FITBV = 8,
        /**
         * got to page specified by a name. See `poppler_document_find_dest()`
         */
        NAMED = 9,
    }


    /**
     * Error codes returned by {@link Poppler.Document}
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * Generic error when a document operation fails
         */
        static INVALID: number;

        /**
         * Document is encrypted
         */
        static ENCRYPTED: number;

        /**
         * File could not be opened for writing when saving document
         */
        static OPEN_FILE: number;

        /**
         * Failed to read the document catalog
         */
        static BAD_CATALOG: number;

        /**
         * Document is damaged
         */
        static DAMAGED: number;

        static SIGNING: number;

        // Constructors
        constructor(options: { message: string; code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace FontType {
        export const $gtype: GObject.GType<FontType>;
    }

    /**
     * Font types
     * @gir-type Enum
     */
    enum FontType {
        /**
         * unknown font type
         */
        UNKNOWN = 0,
        /**
         * Type 1 font type
         */
        TYPE1 = 1,
        /**
         * Type 1 font type embedded in Compact Font Format (CFF) font program
         */
        TYPE1C = 2,
        /**
         * Type 1 font type embedded in OpenType font program
         */
        TYPE1COT = 3,
        /**
         * A font type that is defined with PDF graphics operators
         */
        TYPE3 = 4,
        /**
         * TrueType font type
         */
        TRUETYPE = 5,
        /**
         * TrueType font type embedded in OpenType font program
         */
        TRUETYPEOT = 6,
        /**
         * CIDFont type based on Type 1 font technology
         */
        CID_TYPE0 = 7,
        /**
         * CIDFont type based on Type 1 font technology embedded in CFF font program
         */
        CID_TYPE0C = 8,
        /**
         * CIDFont type based on Type 1 font technology embedded in OpenType font program
         */
        CID_TYPE0COT = 9,
        /**
         * CIDFont type based on TrueType font technology
         */
        CID_TYPE2 = 10,
        /**
         * CIDFont type based on TrueType font technology embedded in OpenType font program
         */
        CID_TYPE2OT = 11,
    }


    /**
     * @gir-type Enum
     */
    export namespace FormButtonType {
        export const $gtype: GObject.GType<FormButtonType>;
    }

    /**
     * @gir-type Enum
     */
    enum FormButtonType {
        PUSH = 0,
        CHECK = 1,
        RADIO = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace FormChoiceType {
        export const $gtype: GObject.GType<FormChoiceType>;
    }

    /**
     * @gir-type Enum
     */
    enum FormChoiceType {
        COMBO = 0,
        LIST = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace FormFieldType {
        export const $gtype: GObject.GType<FormFieldType>;
    }

    /**
     * @gir-type Enum
     */
    enum FormFieldType {
        UNKNOWN = 0,
        BUTTON = 1,
        TEXT = 2,
        CHOICE = 3,
        SIGNATURE = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace FormTextType {
        export const $gtype: GObject.GType<FormTextType>;
    }

    /**
     * @gir-type Enum
     */
    enum FormTextType {
        NORMAL = 0,
        MULTILINE = 1,
        FILE_SELECT = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace MoviePlayMode {
        export const $gtype: GObject.GType<MoviePlayMode>;
    }

    /**
     * Play mode enum values.
     * @gir-type Enum
     * @since 0.54
     */
    enum MoviePlayMode {
        /**
         * the movie should be played once and controls should be closed at the end.
         */
        ONCE = 0,
        /**
         * the movie should be played once, but controls should be left open.
         */
        OPEN = 1,
        /**
         * the movie should be played in loop, until manually stopped.
         */
        REPEAT = 2,
        /**
         * the movie should be played forward and backward, forward and backward,
         *   and so forth, until manually stopped.
         */
        PALINDROME = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace PDFConformance {
        export const $gtype: GObject.GType<PDFConformance>;
    }

    /**
     * PDF Subtype Conformance
     * @gir-type Enum
     * @since 0.70
     */
    enum PDFConformance {
        /**
         * Null
         */
        UNSET = 0,
        /**
         * Level A (accessible) conformance (PDF/A)
         */
        A = 1,
        /**
         * Level B (basic) conformance (PDF/A)
         */
        B = 2,
        /**
         * Level G (external graphical content) (PDF/X)
         */
        G = 3,
        /**
         * Level N (external ICC Profile) (PDF/X)
         */
        N = 4,
        /**
         * Level P (ICC Profile) (PDF/X)
         */
        P = 5,
        /**
         * Level PG (conjunction of P and G) (PDF/X)
         */
        PG = 6,
        /**
         * Level U (Unicode) conformance (PDF/A)
         */
        U = 7,
        /**
         * No conformance level available
         */
        NONE = 8,
    }


    /**
     * PDF Subtype Part
     * @gir-type Struct
     */
    class PDFPart {
        static $gtype: GObject.GType<PDFPart>;

        // Static fields
        /**
         * Null
         */
        static UNSET: number;

        /**
         * 1
         */
        static "1": number;

        /**
         * 2
         */
        static "2": number;

        /**
         * 3
         */
        static "3": number;

        /**
         * 4
         */
        static "4": number;

        /**
         * 5
         */
        static "5": number;

        /**
         * 6
         */
        static "6": number;

        /**
         * 7
         */
        static "7": number;

        /**
         * 8
         */
        static "8": number;

        /**
         * No part available
         */
        static NONE: number;
    }


    /**
     * @gir-type Enum
     */
    export namespace PDFSubtype {
        export const $gtype: GObject.GType<PDFSubtype>;
    }

    /**
     * PDF Subtype
     * @gir-type Enum
     * @since 0.70
     */
    enum PDFSubtype {
        /**
         * Null
         */
        UNSET = 0,
        /**
         * ISO 19005 - Document management -- Electronic document file format for long-term preservation (PDF/A)
         */
        PDF_A = 1,
        /**
         * ISO 24517 - Document management -- Engineering document format using PDF (PDF/E)
         */
        PDF_E = 2,
        /**
         * ISO 14289 - Document management applications -- Electronic document file format enhancement for accessibility (PDF/UA)
         */
        PDF_UA = 3,
        /**
         * ISO 16612 - Graphic technology -- Variable data exchange (PDF/VT)
         */
        PDF_VT = 4,
        /**
         * ISO 15930 - Graphic technology -- Prepress digital data exchange (PDF/X)
         */
        PDF_X = 5,
        /**
         * Not compliant with the above standards
         */
        NONE = 6,
    }


    /**
     * @gir-type Enum
     */
    export namespace PageLayout {
        export const $gtype: GObject.GType<PageLayout>;
    }

    /**
     * Page layout types
     * @gir-type Enum
     */
    enum PageLayout {
        /**
         * no specific layout set
         */
        UNSET = 0,
        /**
         * one page at a time
         */
        SINGLE_PAGE = 1,
        /**
         * pages in one column
         */
        ONE_COLUMN = 2,
        /**
         * pages in two columns with odd numbered pages on the left
         */
        TWO_COLUMN_LEFT = 3,
        /**
         * pages in two columns with odd numbered pages on the right
         */
        TWO_COLUMN_RIGHT = 4,
        /**
         * two pages at a time with odd numbered pages on the left
         */
        TWO_PAGE_LEFT = 5,
        /**
         * two pages at a time with odd numbered pages on the right
         */
        TWO_PAGE_RIGHT = 6,
    }


    /**
     * @gir-type Enum
     */
    export namespace PageMode {
        export const $gtype: GObject.GType<PageMode>;
    }

    /**
     * Page modes
     * @gir-type Enum
     */
    enum PageMode {
        /**
         * no specific mode set
         */
        UNSET = 0,
        /**
         * neither document outline nor thumbnails visible
         */
        NONE = 1,
        /**
         * document outline visible
         */
        USE_OUTLINES = 2,
        /**
         * thumbnails visible
         */
        USE_THUMBS = 3,
        /**
         * full-screen mode
         */
        FULL_SCREEN = 4,
        /**
         * layers panel visible
         */
        USE_OC = 5,
        /**
         * attachments panel visible
         */
        USE_ATTACHMENTS = 6,
    }


    /**
     * @gir-type Enum
     */
    export namespace PageTransitionAlignment {
        export const $gtype: GObject.GType<PageTransitionAlignment>;
    }

    /**
     * Page transition alignment types for #POPPLER_PAGE_TRANSITION_SPLIT
     * and #POPPLER_PAGE_TRANSITION_BLINDS transition types
     * @gir-type Enum
     */
    enum PageTransitionAlignment {
        /**
         * horizontal dimension
         */
        HORIZONTAL = 0,
        /**
         * vertical dimension
         */
        VERTICAL = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace PageTransitionDirection {
        export const $gtype: GObject.GType<PageTransitionDirection>;
    }

    /**
     * Page transition direction types for #POPPLER_PAGE_TRANSITION_SPLIT,
     * #POPPLER_PAGE_TRANSITION_BOX and #POPPLER_PAGE_TRANSITION_FLY transition types
     * @gir-type Enum
     */
    enum PageTransitionDirection {
        /**
         * inward from the edges of the page
         */
        INWARD = 0,
        /**
         * outward from the center of the page
         */
        OUTWARD = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace PageTransitionType {
        export const $gtype: GObject.GType<PageTransitionType>;
    }

    /**
     * Page transition types
     * @gir-type Enum
     */
    enum PageTransitionType {
        /**
         * the new page replace the old one
         */
        REPLACE = 0,
        /**
         * two lines sweep across the screen, revealing the new page
         */
        SPLIT = 1,
        /**
         * multiple lines, evenly spaced across the screen, synchronously
         * sweep in the same direction to reveal the new page
         */
        BLINDS = 2,
        /**
         * a rectangular box sweeps inward from the edges of the page or
         * outward from the center revealing the new page
         */
        BOX = 3,
        /**
         * a single line sweeps across the screen from one edge to the other
         * revealing the new page
         */
        WIPE = 4,
        /**
         * the old page dissolves gradually to reveal the new one
         */
        DISSOLVE = 5,
        /**
         * similar to #POPPLER_PAGE_TRANSITION_DISSOLVE, except that the effect
         * sweeps across the page in a wide band moving from one side of the screen to the other
         */
        GLITTER = 6,
        /**
         * changes are flown out or in to or from a location that is offscreen
         */
        FLY = 7,
        /**
         * the old page slides off the screen while the new page slides in
         */
        PUSH = 8,
        /**
         * the new page slides on to the screen covering the old page
         */
        COVER = 9,
        /**
         * the old page slides off the screen uncovering the new page
         */
        UNCOVER = 10,
        /**
         * the new page gradually becomes visible through the old one
         */
        FADE = 11,
    }


    /**
     * @gir-type Enum
     */
    export namespace PrintDuplex {
        export const $gtype: GObject.GType<PrintDuplex>;
    }

    /**
     * Duplex viewer preference
     * @gir-type Enum
     * @since 0.80
     */
    enum PrintDuplex {
        /**
         * No preference on duplex printing
         */
        NONE = 0,
        /**
         * Print single-sided
         */
        SIMPLEX = 1,
        /**
         * Duplex and flip on the short edge of the sheet
         */
        DUPLEX_FLIP_SHORT_EDGE = 2,
        /**
         * Duplex and flip on the long edge of the sheet
         */
        DUPLEX_FLIP_LONG_EDGE = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace PrintScaling {
        export const $gtype: GObject.GType<PrintScaling>;
    }

    /**
     * PrintScaling viewer preference
     * @gir-type Enum
     * @since 0.73
     */
    enum PrintScaling {
        /**
         * application's default page scaling
         */
        APP_DEFAULT = 0,
        /**
         * no page scaling
         */
        NONE = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace SelectionStyle {
        export const $gtype: GObject.GType<SelectionStyle>;
    }

    /**
     * Selection styles
     * @gir-type Enum
     */
    enum SelectionStyle {
        /**
         * glyph is the minimum unit for selection
         */
        GLYPH = 0,
        /**
         * word is the minimum unit for selection
         */
        WORD = 1,
        /**
         * line is the minimum unit for selection
         */
        LINE = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace SignatureStatus {
        export const $gtype: GObject.GType<SignatureStatus>;
    }

    /**
     * Signature verification results
     * @gir-type Enum
     * @since 21.12.0
     */
    enum SignatureStatus {
        /**
         * signature is cryptographically valid
         */
        VALID = 0,
        /**
         * signature is cryptographically invalid
         */
        INVALID = 1,
        /**
         * document content was changed after the signature was applied
         */
        DIGEST_MISMATCH = 2,
        /**
         * signature CMS/PKCS7 structure is malformed
         */
        DECODING_ERROR = 3,
        /**
         * failed to verify signature
         */
        GENERIC_ERROR = 4,
        /**
         * requested signature is not present in the document
         */
        NOT_FOUND = 5,
        /**
         * signature not yet verified
         */
        NOT_VERIFIED = 6,
    }


    /**
     * @gir-type Enum
     */
    export namespace Stretch {
        export const $gtype: GObject.GType<Stretch>;
    }

    /**
     * @gir-type Enum
     * @since 24.12
     */
    enum Stretch {
        ULTRA_CONDENSED = 0,
        EXTRA_CONDENSED = 1,
        CONDENSED = 2,
        SEMI_CONDENSED = 3,
        NORMAL = 4,
        SEMI_EXPANDED = 5,
        EXPANDED = 6,
        EXTRA_EXPANDED = 7,
        ULTRA_EXPANDED = 8,
    }


    /**
     * @gir-type Enum
     */
    export namespace StructureBlockAlign {
        export const $gtype: GObject.GType<StructureBlockAlign>;
    }

    /**
     * @gir-type Enum
     */
    enum StructureBlockAlign {
        BEFORE = 0,
        MIDDLE = 1,
        AFTER = 2,
        JUSTIFY = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace StructureBorderStyle {
        export const $gtype: GObject.GType<StructureBorderStyle>;
    }

    /**
     * @gir-type Enum
     */
    enum StructureBorderStyle {
        NONE = 0,
        HIDDEN = 1,
        DOTTED = 2,
        DASHED = 3,
        SOLID = 4,
        DOUBLE = 5,
        GROOVE = 6,
        INSET = 7,
        OUTSET = 8,
    }


    /**
     * @gir-type Enum
     */
    export namespace StructureElementKind {
        export const $gtype: GObject.GType<StructureElementKind>;
    }

    /**
     * @gir-type Enum
     */
    enum StructureElementKind {
        CONTENT = 0,
        OBJECT_REFERENCE = 1,
        DOCUMENT = 2,
        PART = 3,
        ARTICLE = 4,
        SECTION = 5,
        DIV = 6,
        SPAN = 7,
        QUOTE = 8,
        NOTE = 9,
        REFERENCE = 10,
        BIBENTRY = 11,
        CODE = 12,
        LINK = 13,
        ANNOT = 14,
        BLOCKQUOTE = 15,
        CAPTION = 16,
        NONSTRUCT = 17,
        TOC = 18,
        TOC_ITEM = 19,
        INDEX = 20,
        PRIVATE = 21,
        PARAGRAPH = 22,
        HEADING = 23,
        HEADING_1 = 24,
        HEADING_2 = 25,
        HEADING_3 = 26,
        HEADING_4 = 27,
        HEADING_5 = 28,
        HEADING_6 = 29,
        LIST = 30,
        LIST_ITEM = 31,
        LIST_LABEL = 32,
        LIST_BODY = 33,
        TABLE = 34,
        TABLE_ROW = 35,
        TABLE_HEADING = 36,
        TABLE_DATA = 37,
        TABLE_HEADER = 38,
        TABLE_FOOTER = 39,
        TABLE_BODY = 40,
        RUBY = 41,
        RUBY_BASE_TEXT = 42,
        RUBY_ANNOT_TEXT = 43,
        RUBY_PUNCTUATION = 44,
        WARICHU = 45,
        WARICHU_TEXT = 46,
        WARICHU_PUNCTUATION = 47,
        FIGURE = 48,
        FORMULA = 49,
        FORM = 50,
    }


    /**
     * @gir-type Enum
     */
    export namespace StructureFormRole {
        export const $gtype: GObject.GType<StructureFormRole>;
    }

    /**
     * @gir-type Enum
     */
    enum StructureFormRole {
        UNDEFINED = 0,
        RADIO_BUTTON = 1,
        PUSH_BUTTON = 2,
        TEXT_VALUE = 3,
        CHECKBOX = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace StructureFormState {
        export const $gtype: GObject.GType<StructureFormState>;
    }

    /**
     * @gir-type Enum
     */
    enum StructureFormState {
        ON = 0,
        OFF = 1,
        NEUTRAL = 2,
    }


    /**
     * @gir-type Struct
     */
    class StructureGlyphOrientation {
        static $gtype: GObject.GType<StructureGlyphOrientation>;

        // Static fields
        static AUTO: number;

        static "0": number;

        static "90": number;

        static "180": number;

        static "270": number;
    }


    /**
     * @gir-type Enum
     */
    export namespace StructureInlineAlign {
        export const $gtype: GObject.GType<StructureInlineAlign>;
    }

    /**
     * @gir-type Enum
     */
    enum StructureInlineAlign {
        START = 0,
        CENTER = 1,
        END = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace StructureListNumbering {
        export const $gtype: GObject.GType<StructureListNumbering>;
    }

    /**
     * @gir-type Enum
     */
    enum StructureListNumbering {
        NONE = 0,
        DISC = 1,
        CIRCLE = 2,
        SQUARE = 3,
        DECIMAL = 4,
        UPPER_ROMAN = 5,
        LOWER_ROMAN = 6,
        UPPER_ALPHA = 7,
        LOWER_ALPHA = 8,
    }


    /**
     * @gir-type Enum
     */
    export namespace StructurePlacement {
        export const $gtype: GObject.GType<StructurePlacement>;
    }

    /**
     * @gir-type Enum
     */
    enum StructurePlacement {
        BLOCK = 0,
        INLINE = 1,
        BEFORE = 2,
        START = 3,
        END = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace StructureRubyAlign {
        export const $gtype: GObject.GType<StructureRubyAlign>;
    }

    /**
     * @gir-type Enum
     */
    enum StructureRubyAlign {
        START = 0,
        CENTER = 1,
        END = 2,
        JUSTIFY = 3,
        DISTRIBUTE = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace StructureRubyPosition {
        export const $gtype: GObject.GType<StructureRubyPosition>;
    }

    /**
     * @gir-type Enum
     */
    enum StructureRubyPosition {
        BEFORE = 0,
        AFTER = 1,
        WARICHU = 2,
        INLINE = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace StructureTableScope {
        export const $gtype: GObject.GType<StructureTableScope>;
    }

    /**
     * @gir-type Enum
     */
    enum StructureTableScope {
        ROW = 0,
        COLUMN = 1,
        BOTH = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace StructureTextAlign {
        export const $gtype: GObject.GType<StructureTextAlign>;
    }

    /**
     * @gir-type Enum
     */
    enum StructureTextAlign {
        START = 0,
        CENTER = 1,
        END = 2,
        JUSTIFY = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace StructureTextDecoration {
        export const $gtype: GObject.GType<StructureTextDecoration>;
    }

    /**
     * @gir-type Enum
     */
    enum StructureTextDecoration {
        NONE = 0,
        UNDERLINE = 1,
        OVERLINE = 2,
        LINETHROUGH = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace StructureWritingMode {
        export const $gtype: GObject.GType<StructureWritingMode>;
    }

    /**
     * @gir-type Enum
     */
    enum StructureWritingMode {
        LR_TB = 0,
        RL_TB = 1,
        TB_RL = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace Style {
        export const $gtype: GObject.GType<Style>;
    }

    /**
     * @gir-type Enum
     * @since 24.12
     */
    enum Style {
        NORMAL = 0,
        OBLIQUE = 1,
        ITALIC = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace Weight {
        export const $gtype: GObject.GType<Weight>;
    }

    /**
     * @gir-type Enum
     * @since 24.12
     */
    enum Weight {
        THIN = 100,
        ULTRALIGHT = 200,
        LIGHT = 300,
        NORMAL = 400,
        MEDIUM = 500,
        SEMIBOLD = 600,
        BOLD = 700,
        ULTRABOLD = 800,
        HEAVY = 900,
    }


    /**
     * @since 26.01
     * @default Check
     */
    const ANNOT_TEXT_ICON_CHECK: string;

    /**
     * @default Circle
     */
    const ANNOT_TEXT_ICON_CIRCLE: string;

    /**
     * @default Comment
     */
    const ANNOT_TEXT_ICON_COMMENT: string;

    /**
     * @default Cross
     */
    const ANNOT_TEXT_ICON_CROSS: string;

    /**
     * @since 26.01
     * @default CrossHairs
     */
    const ANNOT_TEXT_ICON_CROSS_HAIRS: string;

    /**
     * @default Help
     */
    const ANNOT_TEXT_ICON_HELP: string;

    /**
     * @default Insert
     */
    const ANNOT_TEXT_ICON_INSERT: string;

    /**
     * @default Key
     */
    const ANNOT_TEXT_ICON_KEY: string;

    /**
     * @default NewParagraph
     */
    const ANNOT_TEXT_ICON_NEW_PARAGRAPH: string;

    /**
     * @default Note
     */
    const ANNOT_TEXT_ICON_NOTE: string;

    /**
     * @default Paragraph
     */
    const ANNOT_TEXT_ICON_PARAGRAPH: string;

    /**
     * @since 26.01
     * @default RightArrow
     */
    const ANNOT_TEXT_ICON_RIGHT_ARROW: string;

    /**
     * @since 26.01
     * @default RightPointer
     */
    const ANNOT_TEXT_ICON_RIGHT_POINTER: string;

    /**
     * @since 26.01
     * @default Star
     */
    const ANNOT_TEXT_ICON_STAR: string;

    /**
     * @since 26.01
     * @default UpArrow
     */
    const ANNOT_TEXT_ICON_UP_ARROW: string;

    /**
     * @since 26.01
     * @default UpLeftArrow
     */
    const ANNOT_TEXT_ICON_UP_LEFT_ARROW: string;

    /**
     * Defined if poppler was compiled with cairo support.
     * @default 1
     */
    const HAS_CAIRO: number;

    /**
     * The major version number of the poppler header files (e.g. in poppler version
     * 0.1.2 this is 0.)
     * @since 0.12
     * @default 26
     */
    const MAJOR_VERSION: number;

    /**
     * The micro version number of the poppler header files (e.g. in poppler version
     * 0.1.2 this is 2.)
     * @since 0.12
     * @default 0
     */
    const MICRO_VERSION: number;

    /**
     * The major version number of the poppler header files (e.g. in poppler version
     * 0.1.2 this is 1.)
     * @since 0.12
     * @default 8
     */
    const MINOR_VERSION: number;

    /**
     * Parses a PDF format date string and converts it to a `time_t`. Returns `FALSE`
     * if the parsing fails or the input string is not a valid PDF format date string
     * @param date string to parse
     * @param timet an uninitialized `time_t`
     * @returns `TRUE`, if `timet` was set
     * @since 0.12
     */
    function date_parse(date: string, timet: bigint | number): boolean;

    function error_quark(): GLib.Quark;

    /**
     * Get all available signing certificate information
     * @returns all available signing certificate information
     */
    function get_available_signing_certificates(): CertificateInfo[];

    /**
     * Returns the backend compiled into the poppler library.
     * @returns The backend used by poppler
     */
    function get_backend(): Backend;

    /**
     * Get certificate by nick name
     * @param id 
     * @returns a {@link Poppler.CertificateInfo} or `null` if not found
     */
    function get_certificate_info_by_id(id: string): CertificateInfo;

    /**
     * Get NSS directory
     * @returns nss directroy.
     * @since 23.07.0
     */
    function get_nss_dir(): string;

    /**
     * Returns the version of poppler in use.  This result is not to be freed.
     * @returns the version of poppler.
     */
    function get_version(): string;

    /**
     * Converts a bytestring into a zero-terminated string suitable to
     * pass to `poppler_document_find_dest()`.
     * 
     * Note that the returned string has no defined encoding and is not
     * suitable for display to the user.
     * 
     * The returned data must be freed using `g_free()`.
     * @param data the bytestring data
     * @returns the named dest
     * @since 0.73
     */
    function named_dest_from_bytestring(data: Uint8Array | string): string;

    /**
     * Converts a named dest string (e.g. from {@link Poppler.Dest}.named_dest) into a
     * bytestring, inverting the transformation of
     * `poppler_named_dest_from_bytestring()`.
     * 
     * Note that the returned data is not zero terminated and may also
     * contains embedded NUL bytes.
     * 
     * If `name` is not a valid named dest string, returns `null`.
     * 
     * The returned data must be freed using `g_free()`.
     * @param name the named dest string
     * @returns a new bytestring,   or `null`
     * @since 0.73
     */
    function named_dest_to_bytestring(name: string): Uint8Array | null;

    /**
     * Set NSS directory
     * @param path 
     * @since 23.07.0
     */
    function set_nss_dir(path: string): void;

    /**
     * A callback which asks for certificate password
     * @param func a {@link Poppler.NssPasswordFunc} that represents a signature annotation
     * @since 23.07.0
     */
    function set_nss_password_callback(func: NssPasswordFunc): void;

    /**
     * @gir-type Callback
     */
    interface AttachmentSaveFunc {
        (buf: Uint8Array): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface MediaSaveFunc {
        (buf: Uint8Array): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface NssPasswordFunc {
        (text: string): string;
    }

    /**
     * @gir-type Flags
     */
    export namespace AnnotFlag {
        export const $gtype: GObject.GType<AnnotFlag>;
    }

    /**
     * @gir-type Flags
     */
    enum AnnotFlag {
        UNKNOWN = 0,
        INVISIBLE = 1,
        HIDDEN = 2,
        PRINT = 4,
        NO_ZOOM = 8,
        NO_ROTATE = 16,
        NO_VIEW = 32,
        READ_ONLY = 64,
        LOCKED = 128,
        TOGGLE_NO_VIEW = 256,
        LOCKED_CONTENTS = 512,
    }


    /**
     * @gir-type Flags
     */
    export namespace FindFlags {
        export const $gtype: GObject.GType<FindFlags>;
    }

    /**
     * Flags using while searching text in a page
     * @gir-type Flags
     * @since 0.22
     */
    enum FindFlags {
        /**
         * use default search settings
         */
        DEFAULT = 0,
        /**
         * do case sensitive search
         */
        CASE_SENSITIVE = 1,
        /**
         * search backwards
         */
        BACKWARDS = 2,
        /**
         * search only whole words
         */
        WHOLE_WORDS_ONLY = 4,
        /**
         * do diacritics insensitive search,
         * i.e. ignore accents, umlauts, diaeresis,etc. while matching. This
         * option will be ignored if the search term is not pure ascii. Since 0.73.
         */
        IGNORE_DIACRITICS = 8,
        /**
         * allows to match on text spanning from
         * end of a line to the next line. (Currently it won't match on text spanning
         * more than two lines.) Automatically ignores hyphen at end of line, and
         * allows whitespace in search term to match on newline char. Since: 21.05.0.
         */
        MULTILINE = 16,
    }


    /**
     * @gir-type Flags
     */
    export namespace Permissions {
        export const $gtype: GObject.GType<Permissions>;
    }

    /**
     * Permissions
     * @gir-type Flags
     */
    enum Permissions {
        /**
         * document can be printer
         */
        OK_TO_PRINT = 1,
        /**
         * document contents can be modified
         */
        OK_TO_MODIFY = 2,
        /**
         * document can be copied
         */
        OK_TO_COPY = 4,
        /**
         * annotations can added to the document
         */
        OK_TO_ADD_NOTES = 8,
        /**
         * interactive form fields can be filled in
         */
        OK_TO_FILL_FORM = 16,
        /**
         * extract text and graphics
         * (in support of accessibility to users with disabilities or for other purposes). Since 0.18
         */
        OK_TO_EXTRACT_CONTENTS = 32,
        /**
         * assemble the document (insert, rotate, or delete pages and create
         * bookmarks or thumbnail images). Since 0.18
         */
        OK_TO_ASSEMBLE = 64,
        /**
         * document can be printer at high resolution. Since 0.18
         */
        OK_TO_PRINT_HIGH_RESOLUTION = 128,
        /**
         * document permits all operations
         */
        FULL = 255,
    }


    /**
     * @gir-type Flags
     */
    export namespace PrintFlags {
        export const $gtype: GObject.GType<PrintFlags>;
    }

    /**
     * Printing flags
     * @gir-type Flags
     * @since 0.16
     * @deprecated since 25.02: Use `poppler_page_render_full()` and {@link Poppler.RenderAnnotsFlags} instead.
     */
    enum PrintFlags {
        /**
         * print main document contents
         */
        DOCUMENT = 0,
        /**
         * print document and markup annotations
         */
        MARKUP_ANNOTS = 1,
        /**
         * print document and only stamp annotations
         */
        STAMP_ANNOTS_ONLY = 2,
        /**
         * print main document contents and all markup annotations
         */
        ALL = 1,
    }


    /**
     * @gir-type Flags
     */
    export namespace RenderAnnotsFlags {
        export const $gtype: GObject.GType<RenderAnnotsFlags>;
    }

    /**
     * Flags to select which annotations to render. If the flag corresponding to a
     * certain annotation type is on, then such annotation type will be rendered,
     * when appropriate (e.g: won't be renderer if the annotation is not visible).
     * This allows to combine multiple flags, like
     * `POPPLER_RENDER_ANNOTS_LINK | POPPLER_RENDER_ANNOTS_TEXT`, or disable some
     * specific annotations like
     * `POPPLER_RENDER_ANNOTS_ALL & (~POPPLER_RENDER_ANNOTS_TEXT)`
     * @gir-type Flags
     * @since 25.02
     */
    enum RenderAnnotsFlags {
        /**
         * do not render annotations
         */
        NONE = 0,
        /**
         * render text annotations
         */
        TEXT = 1,
        /**
         * render link annotations
         */
        LINK = 2,
        /**
         * render freetext annotations,
         */
        FREETEXT = 4,
        /**
         * render line annotations,
         */
        LINE = 8,
        /**
         * render square annotations,
         */
        SQUARE = 16,
        /**
         * render circle annotations,
         */
        CIRCLE = 32,
        /**
         * render polygon annotations,
         */
        POLYGON = 64,
        /**
         * render polyline annotations,
         */
        POLYLINE = 128,
        /**
         * render highlight annotations,
         */
        HIGHLIGHT = 256,
        /**
         * render underline annotations,
         */
        UNDERLINE = 512,
        /**
         * render squiggly annotations,
         */
        SQUIGGLY = 1024,
        /**
         * render strikeout annotations,
         */
        STRIKEOUT = 2048,
        /**
         * render stamp annotations,
         */
        STAMP = 4096,
        /**
         * render caret annotations,
         */
        CARET = 8192,
        /**
         * render ink annotations,
         */
        INK = 16384,
        /**
         * render popup annotations,
         */
        POPUP = 32768,
        /**
         * render fileattachment annotations,
         */
        FILEATTACHMENT = 65536,
        /**
         * render sound annotations,
         */
        SOUND = 131072,
        /**
         * render movie annotations,
         */
        MOVIE = 262144,
        /**
         * render widget annotations,
         */
        WIDGET = 524288,
        /**
         * render screen annotations,
         */
        SCREEN = 1048576,
        /**
         * render printermark annotations,
         */
        PRINTERMARK = 2097152,
        /**
         * render trapnet annotations,
         */
        TRAPNET = 4194304,
        /**
         * render watermark annotations,
         */
        WATERMARK = 8388608,
        /**
         * render 3D annotations,
         */
        "3D" = 16777216,
        /**
         * render richmedia annotations,
         */
        RICHMEDIA = 33554432,
        /**
         * render the default annotations used for printing
         */
        PRINT_DOCUMENT = 524288,
        /**
         * render markup annotations and default annotations used for printing
         */
        PRINT_MARKUP = -32800771,
        /**
         * render stamp annotations and default annotations used for printing
         */
        PRINT_STAMP = 528384,
        /**
         * render all possible annotations used for printing
         */
        PRINT_ALL = -32800771,
        /**
         * render all annotations
         */
        ALL = 67108863,
    }


    /**
     * @gir-type Flags
     */
    export namespace SignatureValidationFlags {
        export const $gtype: GObject.GType<SignatureValidationFlags>;
    }

    /**
     * Signature validation flags
     * @gir-type Flags
     * @since 21.12.0
     */
    enum SignatureValidationFlags {
        /**
         * Whether to validate also the certificate of the signature
         */
        VALIDATE_CERTIFICATE = 1,
        /**
         * Whether to not do OCSP (Online Certificate Status Protocol) revocation check
         */
        WITHOUT_OCSP_REVOCATION_CHECK = 2,
        /**
         * Whether to use AIA (Authority Information Access) extension for certificate fetching
         */
        USE_AIA_CERTIFICATE_FETCH = 4,
    }


    /**
     * @gir-type Flags
     */
    export namespace StructureGetTextFlags {
        export const $gtype: GObject.GType<StructureGetTextFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum StructureGetTextFlags {
        /**
         * No flags.
         */
        NONE = 0,
        /**
         * For non-leaf, non-content
         *    elements, recursively obtain the text from all the elements
         *    enclosed in the subtree.
         */
        RECURSIVE = 1,
    }


    /**
     * @gir-type Flags
     */
    export namespace ViewerPreferences {
        export const $gtype: GObject.GType<ViewerPreferences>;
    }

    /**
     * Viewer preferences
     * @gir-type Flags
     */
    enum ViewerPreferences {
        /**
         * no preferences set
         */
        UNSET = 0,
        /**
         * hider toolbars when document is active
         */
        HIDE_TOOLBAR = 1,
        /**
         * hide menu bar when document is active
         */
        HIDE_MENUBAR = 2,
        /**
         * hide UI elements in document's window
         */
        HIDE_WINDOWUI = 4,
        /**
         * resize document's window to fit the size of the first displayed page
         */
        FIT_WINDOW = 8,
        /**
         * position the document's window in the center of the screen
         */
        CENTER_WINDOW = 16,
        /**
         * display document title in window's title bar
         */
        DISPLAY_DOC_TITLE = 32,
        /**
         * the predominant reading order for text is right to left
         */
        DIRECTION_RTL = 64,
    }


    namespace Annot {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Annot extends GObject.Object {
        static $gtype: GObject.GType<Annot>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Annot.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Annot.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Annot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Annot.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Annot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Annot.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Annot.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Annot.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the type of `poppler_annot`
         * @returns {@link Poppler.AnnotType} of `poppler_annot`.
         */
        get_annot_type(): AnnotType;

        /**
         * Returns the border width of the annotation. Some PDF editors set a border
         * width even if the border is not actually drawn.
         * @param width a valid pointer to a double
         * @returns true and sets `border_width` to the actual border width if a border is defined, otherwise returns false and sets `border_width` to 0.
         * @since 24.12.0
         */
        get_border_width(width: number): boolean;

        /**
         * Retrieves the color of `poppler_annot`.
         * @returns a new allocated {@link Poppler.Color} with the color values of               `poppler_annot`, or `null`. It must be freed with `g_free()` when done.
         */
        get_color(): Color;

        /**
         * Retrieves the contents of `poppler_annot`.
         * @returns a new allocated string with the contents of `poppler_annot`. It               must be freed with `g_free()` when done.
         */
        get_contents(): string;

        /**
         * Retrieves the flag field specifying various characteristics of the
         * `poppler_annot`.
         * @returns the flag field of `poppler_annot`.
         */
        get_flags(): AnnotFlag;

        /**
         * Retrieves the last modification data of `poppler_annot`. The returned
         * string will be either a PDF format date or a text string.
         * See also `poppler_date_parse`()
         * @returns a new allocated string with the last modification data of               `poppler_annot`. It must be freed with `g_free()` when done.
         */
        get_modified(): string;

        /**
         * Retrieves the name of `poppler_annot`.
         * @returns a new allocated string with the name of `poppler_annot`. It must               be freed with `g_free()` when done.
         */
        get_name(): string;

        /**
         * Returns the page index to which `poppler_annot` is associated, or -1 if unknown
         * @returns page index or -1
         * @since 0.14
         */
        get_page_index(): number;

        /**
         * Retrieves the rectangle representing the page coordinates where the
         * annotation `poppler_annot` is placed.
         * @since 0.26
         */
        get_rectangle(): Rectangle;

        /**
         * Sets the border width of the annotation. Since there is currently no
         * mechanism in the GLib binding to control the appearance of the border width,
         * this should generally only be used to disable the border, although the
         * API might be completed in the future.
         * @param width the new border width
         * @since 24.12.0
         */
        set_border_width(width: number): void;

        /**
         * Sets the color of `poppler_annot`.
         * @param poppler_color a {@link Poppler.Color}, or `null`
         * @since 0.16
         */
        set_color(poppler_color: Color | null): void;

        /**
         * Sets the contents of `poppler_annot` to the given value,
         * replacing the current contents.
         * @param contents a text string containing the new contents
         * @since 0.12
         */
        set_contents(contents: string): void;

        /**
         * Sets the flag field specifying various characteristics of the
         * `poppler_annot`.
         * @param flags a {@link Poppler.AnnotFlag}
         * @since 0.22
         */
        set_flags(flags: AnnotFlag): void;

        /**
         * Move the annotation to the rectangle representing the page coordinates
         * where the annotation `poppler_annot` should be placed.
         * @param poppler_rect a {@link Poppler.Rectangle} with the new annotation's coordinates
         * @since 0.26
         */
        set_rectangle(poppler_rect: Rectangle): void;
    }


    namespace AnnotCircle {
        // Signal signatures
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }

    /**
     * An annotation for circle.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class AnnotCircle extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotCircle>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotCircle.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotCircle.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](doc: Document, rect: Rectangle): AnnotCircle;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotCircle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotCircle.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotCircle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotCircle.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotCircle.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotCircle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves the interior color of `poppler_annot`.
         * @returns a new allocated {@link Poppler.Color} with the color values of               `poppler_annot`, or `null`. It must be freed with `g_free()` when done.
         * @since 0.26
         */
        get_interior_color(): Color;

        /**
         * Sets the interior color of `poppler_annot`.
         * @param poppler_color a {@link Poppler.Color}, or `null`
         * @since 0.26
         */
        set_interior_color(poppler_color: Color | null): void;
    }


    namespace AnnotFileAttachment {
        // Signal signatures
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }

    /**
     * An annotation for file attachment.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class AnnotFileAttachment extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotFileAttachment>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotFileAttachment.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotFileAttachment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotFileAttachment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotFileAttachment.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotFileAttachment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotFileAttachment.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotFileAttachment.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotFileAttachment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Creates a {@link Poppler.Attachment} for the file of the file attachment annotation `annot`.
         * The {@link Poppler.Attachment} must be unrefed with g_object_unref by the caller.
         * @returns `PopplerAttachment`
         * @since 0.14
         */
        get_attachment(): Attachment;

        /**
         * Retrieves the name of `poppler_annot`.
         * @returns a new allocated string with the name of `poppler_annot`. It must               be freed with `g_free()` when done.
         * @since 0.14
         */
        get_name(): string;
    }


    namespace AnnotFreeText {
        // Signal signatures
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }

    /**
     * An annotation for free text.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class AnnotFreeText extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotFreeText>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotFreeText.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotFreeText.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](doc: Document, rect: Rectangle): AnnotFreeText;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotFreeText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotFreeText.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotFreeText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotFreeText.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotFreeText.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotFreeText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves a {@link Poppler.AnnotCalloutLine} of four or six numbers specifying a callout
         * line attached to the `poppler_annot`.
         * @returns a new allocated {@link Poppler.AnnotCalloutLine} if the annot has a callout               line, `null` in other case. It must be freed with `g_free()` when               done.
         */
        get_callout_line(): AnnotCalloutLine;

        /**
         * Gets the font color.
         * @returns a copy of the font's {@link Poppler.Color}.
         * @since 24.12.0
         */
        get_font_color(): Color;

        /**
         * Gets the font description (i.e. font family name, style, weight, stretch and size).
         * @returns a copy of the annotation font description, or NULL if there is no font description set.
         * @since 24.12.0
         */
        get_font_desc(): FontDescription | null;

        /**
         * Retrieves the justification of the text of `poppler_annot`.
         * @returns {@link Poppler.AnnotFreeTextQuadding} of `poppler_annot`.
         */
        get_quadding(): AnnotFreeTextQuadding;

        /**
         * Sets the font color.
         * @param color a {@link Poppler.Color}
         * @since 24.12.0
         */
        set_font_color(color: Color): void;

        /**
         * Sets the font description (i.e. font family name, style, weight, stretch and size).
         * @param font_desc a {@link Poppler.FontDescription}
         * @since 24.12.0
         */
        set_font_desc(font_desc: FontDescription): void;
    }


    namespace AnnotInk {
        // Signal signatures
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }

    /**
     * @gir-type Class
     * @since 25.06.0
     */
    class AnnotInk extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotInk>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotInk.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotInk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](doc: Document, rect: Rectangle): AnnotInk;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotInk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotInk.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotInk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotInk.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotInk.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotInk.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns whether the annotation is drawn below the page content or not.
         * @since 25.10.0
         */
        get_draw_below(): boolean;

        /**
         * Each element of the return value is a path.
         * @returns a GSList of PopplerPath
         * @since 25.06.0
         */
        get_ink_list(): Path[];

        /**
         * This is typically used for highlight annotations. Technically, this implies that the
         * annotation is drawn using a multiply blend mode.
         * @param draw_below whether the annotation should be drawn below the document content
         * @since 25.10.0
         */
        set_draw_below(draw_below: boolean): void;

        /**
         * Each element of `ink_list` is a path. The annotation must have
         * already been added to a page, otherwise the annotation may be
         * wrongly positioned if the page is rotated or has a cropbox.
         * 
         * This function computes and set the appropriate smallest rectangle
         * area that contains all the points of `ink_list`. Setting the rectangle
         * afterwards with `poppler_annot_set_rectangle` should not be done
         * to preserve scaling and positioning.
         * @param ink_list a list of {@link Poppler.Path}
         * @since 25.06.0
         */
        set_ink_list(ink_list: Path[]): void;
    }


    namespace AnnotLine {
        // Signal signatures
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }

    /**
     * An annotation for line.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class AnnotLine extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotLine>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotLine.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotLine.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](doc: Document, rect: Rectangle, start: Point, end: Point): AnnotLine;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotLine.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotLine.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotLine.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotLine.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotLine.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotLine.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Set the coordinate points where the `poppler_annot` starts and ends.
         * @param start a {@link Poppler.Point} of the starting vertice
         * @param end a {@link Poppler.Point} of the ending vertice
         * @since 0.26
         */
        set_vertices(start: Point, end: Point): void;
    }


    namespace AnnotMarkup {
        // Signal signatures
        interface SignalSignatures extends Annot.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends Annot.ConstructorProps {}
    }

    /**
     * An annotation for markup.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class AnnotMarkup extends Annot {
        static $gtype: GObject.GType<AnnotMarkup>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotMarkup.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotMarkup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotMarkup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotMarkup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotMarkup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotMarkup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotMarkup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotMarkup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the date and time when the annotation was created
         * @returns a {@link GLib.Date} representing the date and time               when the annotation was created, or `null`
         */
        get_date(): GLib.Date;

        /**
         * Gets the external data type of `poppler_annot`.
         * @returns {@link Poppler.AnnotExternalDataType} of `poppler_annot`.
         */
        get_external_data(): AnnotExternalDataType;

        /**
         * Retrieves the label text of `poppler_annot`.
         * @returns the label text of `poppler_annot`.
         */
        get_label(): string;

        /**
         * Retrieves the opacity value of `poppler_annot`.
         * @returns the opacity value of `poppler_annot`,               between 0 (transparent) and 1 (opaque)
         */
        get_opacity(): number;

        /**
         * Retrieves the state of the popup window related to `poppler_annot`.
         * @returns the state of `poppler_annot`. `true` if it's open, `false` in               other case.
         */
        get_popup_is_open(): boolean;

        /**
         * Retrieves the rectangle of the popup window related to `poppler_annot`.
         * @returns `true` if {@link Poppler.Rectangle} was correctly filled, `false` otherwise
         * @since 0.12
         */
        get_popup_rectangle(): [boolean, Rectangle];

        /**
         * Gets the reply type of `poppler_annot`.
         * @returns {@link Poppler.AnnotMarkupReplyType} of `poppler_annot`.
         */
        get_reply_to(): AnnotMarkupReplyType;

        /**
         * Retrives the subject text of `poppler_annot`.
         * @returns the subject text of `poppler_annot`.
         */
        get_subject(): string;

        /**
         * Return `true` if the markup annotation has a popup window associated
         * @returns `true`, if `poppler_annot` has popup, `false` otherwise
         * @since 0.12
         */
        has_popup(): boolean;

        /**
         * Sets the label text of `poppler_annot`, replacing the current one
         * @param label a text string containing the new label, or `null`
         * @since 0.16
         */
        set_label(label: string | null): void;

        /**
         * Sets the opacity of `poppler_annot`. This value applies to
         * all visible elements of `poppler_annot` in its closed state,
         * but not to the pop-up window that appears when it's openened
         * @param opacity a constant opacity value, between 0 (transparent) and 1 (opaque)
         * @since 0.16
         */
        set_opacity(opacity: number): void;

        /**
         * Associates a new popup window for editing contents of `poppler_annot`.
         * Popup window shall be displayed by viewers at `popup_rect` on the page.
         * @param popup_rect a {@link Poppler.Rectangle}
         * @since 0.16
         */
        set_popup(popup_rect: Rectangle): void;

        /**
         * Sets the state of the popup window related to `poppler_annot`.
         * @param is_open whether popup window should initially be displayed open
         * @since 0.16
         */
        set_popup_is_open(is_open: boolean): void;

        /**
         * Sets the rectangle of the popup window related to `poppler_annot`.
         * This doesn't have any effect if `poppler_annot` doesn't have a
         * popup associated, use `poppler_annot_markup_set_popup()` to associate
         * a popup window to a {@link Poppler.AnnotMarkup}.
         * @param poppler_rect a {@link Poppler.Rectangle} to set
         * @since 0.33
         */
        set_popup_rectangle(poppler_rect: Rectangle): void;
    }


    namespace AnnotMovie {
        // Signal signatures
        interface SignalSignatures extends Annot.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends Annot.ConstructorProps {}
    }

    /**
     * An annotation for movie.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class AnnotMovie extends Annot {
        static $gtype: GObject.GType<AnnotMovie>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotMovie.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotMovie.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotMovie.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotMovie.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotMovie.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotMovie.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotMovie.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotMovie.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves the movie object (PopplerMovie) stored in the `poppler_annot`.
         * @returns the movie object stored in the `poppler_annot`. The returned               object is owned by {@link Poppler.AnnotMovie} and should not be freed
         * @since 0.14
         */
        get_movie(): Movie;

        /**
         * Retrieves the movie title of `poppler_annot`.
         * @returns the title text of `poppler_annot`.
         * @since 0.14
         */
        get_title(): string;
    }


    namespace AnnotScreen {
        // Signal signatures
        interface SignalSignatures extends Annot.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends Annot.ConstructorProps {}
    }

    /**
     * An annotation for screen.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class AnnotScreen extends Annot {
        static $gtype: GObject.GType<AnnotScreen>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotScreen.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotScreen.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotScreen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotScreen.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotScreen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotScreen.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotScreen.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotScreen.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves the action ({@link Poppler.Action}) that shall be performed when `poppler_annot` is activated
         * @returns the action to perform. The returned               object is owned by `poppler_annot` and should not be freed
         * @since 0.14
         */
        get_action(): Action;
    }


    namespace AnnotSquare {
        // Signal signatures
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }

    /**
     * An annotation for square.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class AnnotSquare extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotSquare>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotSquare.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotSquare.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](doc: Document, rect: Rectangle): AnnotSquare;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotSquare.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotSquare.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotSquare.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotSquare.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotSquare.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotSquare.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves the interior color of `poppler_annot`.
         * @returns a new allocated {@link Poppler.Color} with the color values of               `poppler_annot`, or `null`. It must be freed with `g_free()` when done.
         * @since 0.26
         */
        get_interior_color(): Color;

        /**
         * Sets the interior color of `poppler_annot`.
         * @param poppler_color a {@link Poppler.Color}, or `null`
         * @since 0.26
         */
        set_interior_color(poppler_color: Color | null): void;
    }


    namespace AnnotStamp {
        // Signal signatures
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }

    /**
     * An annotation for stamp.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class AnnotStamp extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotStamp>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotStamp.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotStamp.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](doc: Document, rect: Rectangle): AnnotStamp;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotStamp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotStamp.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotStamp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotStamp.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotStamp.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotStamp.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the corresponding {@link Poppler.AnnotStampIcon} of the icon
         * @since 22.07.0
         */
        get_icon(): AnnotStampIcon;

        /**
         * Sets the custom image of `poppler_annot` to be `image`
         * @param image an image cairo surface
         * @returns `true` on success, `false` otherwise.
         * @since 22.07.0
         * @throws GLib.Error
         */
        set_custom_image(image: cairo.Surface): boolean;

        /**
         * Sets the icon of `poppler_annot` to be one of the predefined values in {@link Poppler.AnnotStampIcon}
         * @param icon the {@link Poppler.AnnotStampIcon} type of the icon
         * @since 22.07.0
         */
        set_icon(icon: AnnotStampIcon): void;
    }


    namespace AnnotText {
        // Signal signatures
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }

    /**
     * An annotation for text.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class AnnotText extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotText>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotText.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotText.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](doc: Document, rect: Rectangle): AnnotText;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotText.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotText.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotText.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets name of the icon of `poppler_annot`.
         * @returns a new allocated string containing the icon name
         */
        get_icon(): string;

        /**
         * Retrieves the state of `poppler_annot`.
         * @returns the state of `poppler_annot`. `true` if it's open, `false` in               other case.
         */
        get_is_open(): boolean;

        /**
         * Retrieves the state of `poppler_annot`.
         * @returns {@link Poppler.AnnotTextState} of `poppler_annot`.
         */
        get_state(): AnnotTextState;

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
         * 
         * Since 26.1.0, Poppler also knows how to render the following icons,
         * which are somewhat standard and other PDF renderers may also support:
         * <variablelist>
         *  <varlistentry>
         *   <term>#POPPLER_ANNOT_TEXT_ICON_CHECK</term>
         *  </varlistentry>
         *  <varlistentry>
         *   <term>#POPPLER_ANNOT_TEXT_ICON_STAR</term>
         *  </varlistentry>
         *  <varlistentry>
         *   <term>#POPPLER_ANNOT_TEXT_ICON_RIGHT_ARROW</term>
         *  </varlistentry>
         *  <varlistentry>
         *   <term>#POPPLER_ANNOT_TEXT_ICON_RIGHT_POINTER</term>
         *  </varlistentry>
         *  <varlistentry>
         *   <term>#POPPLER_ANNOT_TEXT_ICON_UP_ARROW</term>
         *  </varlistentry>
         *  <varlistentry>
         *   <term>#POPPLER_ANNOT_TEXT_ICON_UP_LEFT_ARROW</term>
         *  </varlistentry>
         *  <varlistentry>
         *   <term>#POPPLER_ANNOT_TEXT_ICON_CROSS_HAIRS</term>
         *  </varlistentry>
         * </variablelist>
         * @param icon the name of an icon
         * @since 0.16
         */
        set_icon(icon: string): void;

        /**
         * Sets whether `poppler_annot` should initially be displayed open
         * @param is_open whether annotation should initially be displayed open
         * @since 0.16
         */
        set_is_open(is_open: boolean): void;
    }


    namespace AnnotTextMarkup {
        // Signal signatures
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }

    /**
     * An annotation for text markup.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class AnnotTextMarkup extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotTextMarkup>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotTextMarkup.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotTextMarkup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_highlight(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup;

        static new_squiggly(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup;

        static new_strikeout(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup;

        static new_underline(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotTextMarkup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotTextMarkup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotTextMarkup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotTextMarkup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotTextMarkup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotTextMarkup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns a {@link GLib.Array} of {@link Poppler.Quadrilateral} items that map from a
         * location on `page` to a {@link Poppler.AnnotTextMarkup}.  This array must be freed
         * when done.
         * @returns A {@link GLib.Array} of {@link Poppler.Quadrilateral}
         * @since 0.26
         */
        get_quadrilaterals(): Quadrilateral[];

        /**
         * Set the regions (Quadrilaterals) to apply the text markup in `poppler_annot`.
         * @param quadrilaterals A {@link GLib.Array} of   {@link Poppler.Quadrilateral}<!-- -->s
         * @since 0.26
         */
        set_quadrilaterals(quadrilaterals: Quadrilateral[]): void;
    }


    namespace Attachment {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class Attachment extends GObject.Object {
        static $gtype: GObject.GType<Attachment>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Attachment.SignalSignatures;

        // Fields
        name: string;

        description: string;

        size: number;

        mtime: GLib.Time;

        ctime: GLib.Time;

        // Constructors
        constructor(properties?: Partial<Attachment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Attachment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Attachment.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Attachment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Attachment.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Attachment.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Attachment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns The attachment's checksum.
         * @since 20.09.0
         */
        get_checksum(): GLib.String;

        /**
         * @returns The attachment's creation date and time as a {@link GLib.DateTime}, or `null` if the creation date and time is not available.
         * @since 20.09.0
         */
        get_ctime(): GLib.DateTime | null;

        /**
         * @returns The attachment's descriptive text.
         * @since 20.09.0
         */
        get_description(): string;

        /**
         * @returns The attachment's modification date and time as a {@link GLib.DateTime}, or `null` if the modification date and time is not available.
         * @since 20.09.0
         */
        get_mtime(): GLib.DateTime | null;

        /**
         * @returns The attachment's name.
         * @since 20.09.0
         */
        get_name(): string;

        /**
         * @returns The attachment's size.
         * @since 20.09.0
         */
        get_size(): number;

        /**
         * Saves `attachment` to a file indicated by `filename`.  If `error` is set, `false`
         * will be returned. Possible errors include those in the #G_FILE_ERROR domain
         * and whatever the save function generates.
         * @param filename name of file to save
         * @returns `true`, if the file successfully saved
         * @throws GLib.Error
         */
        save(filename: string): boolean;

        /**
         * Saves `attachment` by feeding the produced data to `save_func`. Can be used
         * when you want to store the attachment to something other than a file, such as
         * an in-memory buffer or a socket. If `error` is set, `false` will be
         * returned. Possible errors include those in the #G_FILE_ERROR domain and
         * whatever the save function generates.
         * @param save_func a function that is called to save each block of data that the save routine generates.
         * @returns `true`, if the save successfully completed
         * @throws GLib.Error
         */
        save_to_callback(save_func: AttachmentSaveFunc): boolean;

        /**
         * Saves `attachment` to a file referred to by `fd`.  If `error` is set, `false`
         * will be returned. Possible errors include those in the #G_FILE_ERROR domain
         * and whatever the save function generates.
         * Note that this function takes ownership of `fd`; you must not operate on it
         * again, nor close it.
         * @param fd a valid file descriptor open for writing
         * @returns `true`, if the file successfully saved
         * @since 21.12.0
         * @throws GLib.Error
         */
        save_to_fd(fd: number): boolean;
    }


    namespace Document {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::author": (pspec: GObject.ParamSpec) => void;
            "notify::creation-date": (pspec: GObject.ParamSpec) => void;
            "notify::creation-datetime": (pspec: GObject.ParamSpec) => void;
            "notify::creator": (pspec: GObject.ParamSpec) => void;
            "notify::format": (pspec: GObject.ParamSpec) => void;
            "notify::format-major": (pspec: GObject.ParamSpec) => void;
            "notify::format-minor": (pspec: GObject.ParamSpec) => void;
            "notify::keywords": (pspec: GObject.ParamSpec) => void;
            "notify::linearized": (pspec: GObject.ParamSpec) => void;
            "notify::metadata": (pspec: GObject.ParamSpec) => void;
            "notify::mod-date": (pspec: GObject.ParamSpec) => void;
            "notify::mod-datetime": (pspec: GObject.ParamSpec) => void;
            "notify::page-layout": (pspec: GObject.ParamSpec) => void;
            "notify::page-mode": (pspec: GObject.ParamSpec) => void;
            "notify::permissions": (pspec: GObject.ParamSpec) => void;
            "notify::print-duplex": (pspec: GObject.ParamSpec) => void;
            "notify::print-n-copies": (pspec: GObject.ParamSpec) => void;
            "notify::print-ncopies": (pspec: GObject.ParamSpec) => void;
            "notify::print-scaling": (pspec: GObject.ParamSpec) => void;
            "notify::producer": (pspec: GObject.ParamSpec) => void;
            "notify::subject": (pspec: GObject.ParamSpec) => void;
            "notify::subtype": (pspec: GObject.ParamSpec) => void;
            "notify::subtype-conformance": (pspec: GObject.ParamSpec) => void;
            "notify::subtype-part": (pspec: GObject.ParamSpec) => void;
            "notify::subtype-string": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::viewer-preferences": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            author: string;
            creation_date: number;
            creationDate: number;
            creation_datetime: GLib.DateTime;
            creationDatetime: GLib.DateTime;
            creator: string;
            format: string;
            format_major: number;
            formatMajor: number;
            format_minor: number;
            formatMinor: number;
            keywords: string;
            linearized: boolean;
            metadata: string;
            mod_date: number;
            modDate: number;
            mod_datetime: GLib.DateTime;
            modDatetime: GLib.DateTime;
            page_layout: PageLayout;
            pageLayout: PageLayout;
            page_mode: PageMode;
            pageMode: PageMode;
            permissions: Permissions;
            print_duplex: PrintDuplex;
            printDuplex: PrintDuplex;
            print_n_copies: number;
            printNCopies: number;
            print_scaling: PrintScaling;
            printScaling: PrintScaling;
            producer: string;
            subject: string;
            subtype: PDFSubtype;
            subtype_conformance: PDFConformance;
            subtypeConformance: PDFConformance;
            subtype_part: PDFPart;
            subtypePart: PDFPart;
            subtype_string: string;
            subtypeString: string;
            title: string;
            viewer_preferences: ViewerPreferences;
            viewerPreferences: ViewerPreferences;
        }
    }

    /**
     * A poppler document.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class Document extends GObject.Object {
        static $gtype: GObject.GType<Document>;

        // Properties
        /**
         * The author of the document
         * @default null
         */
        get author(): string;
        set author(val: string);

        /**
         * The date the document was created as seconds since the Epoch, or -1
         * @deprecated since 20.09.0: This will overflow in 2038. Use creation-datetime instead.
         * @default -1
         */
        get creation_date(): number;
        set creation_date(val: number);

        /**
         * The date the document was created as seconds since the Epoch, or -1
         * @deprecated since 20.09.0: This will overflow in 2038. Use creation-datetime instead.
         * @default -1
         */
        get creationDate(): number;
        set creationDate(val: number);

        /**
         * The {@link GLib.DateTime} the document was created.
         * @since 20.09.0
         */
        get creation_datetime(): GLib.DateTime;
        set creation_datetime(val: GLib.DateTime);

        /**
         * The {@link GLib.DateTime} the document was created.
         * @since 20.09.0
         */
        get creationDatetime(): GLib.DateTime;
        set creationDatetime(val: GLib.DateTime);

        /**
         * The creator of the document. See also `poppler_document_get_creator()`
         * @default null
         */
        get creator(): string;
        set creator(val: string);

        /**
         * The PDF version as string. See also `poppler_document_get_pdf_version_string()`
         * @read-only
         * @default null
         */
        get format(): string;

        /**
         * The PDF major version number. See also `poppler_document_get_pdf_version()`
         * @read-only
         * @default 1
         */
        get format_major(): number;

        /**
         * The PDF major version number. See also `poppler_document_get_pdf_version()`
         * @read-only
         * @default 1
         */
        get formatMajor(): number;

        /**
         * The PDF minor version number. See also `poppler_document_get_pdf_version()`
         * @read-only
         * @default 0
         */
        get format_minor(): number;

        /**
         * The PDF minor version number. See also `poppler_document_get_pdf_version()`
         * @read-only
         * @default 0
         */
        get formatMinor(): number;

        /**
         * The keywords associated to the document
         * @default null
         */
        get keywords(): string;
        set keywords(val: string);

        /**
         * Whether document is linearized. See also `poppler_document_is_linearized()`
         * @read-only
         * @default false
         */
        get linearized(): boolean;

        /**
         * Document metadata in XML format, or `null`
         * @read-only
         * @default null
         */
        get metadata(): string;

        /**
         * The date the document was most recently modified as seconds since the Epoch, or -1
         * @deprecated since 20.09.0: This will overflow in 2038. Use mod-datetime instead.
         * @default -1
         */
        get mod_date(): number;
        set mod_date(val: number);

        /**
         * The date the document was most recently modified as seconds since the Epoch, or -1
         * @deprecated since 20.09.0: This will overflow in 2038. Use mod-datetime instead.
         * @default -1
         */
        get modDate(): number;
        set modDate(val: number);

        /**
         * The {@link GLib.DateTime} the document was most recently modified.
         * @since 20.09.0
         */
        get mod_datetime(): GLib.DateTime;
        set mod_datetime(val: GLib.DateTime);

        /**
         * The {@link GLib.DateTime} the document was most recently modified.
         * @since 20.09.0
         */
        get modDatetime(): GLib.DateTime;
        set modDatetime(val: GLib.DateTime);

        /**
         * The page layout that should be used when the document is opened
         * @read-only
         * @default Poppler.PageLayout.UNSET
         */
        get page_layout(): PageLayout;

        /**
         * The page layout that should be used when the document is opened
         * @read-only
         * @default Poppler.PageLayout.UNSET
         */
        get pageLayout(): PageLayout;

        /**
         * The mode that should be used when the document is opened
         * @read-only
         * @default Poppler.PageMode.UNSET
         */
        get page_mode(): PageMode;

        /**
         * The mode that should be used when the document is opened
         * @read-only
         * @default Poppler.PageMode.UNSET
         */
        get pageMode(): PageMode;

        /**
         * Flags specifying which operations are permitted when the document is opened
         * @read-only
         * @default Poppler.Permissions.OK_TO_PRINT | Poppler.Permissions.OK_TO_MODIFY | Poppler.Permissions.OK_TO_COPY | Poppler.Permissions.OK_TO_ADD_NOTES | Poppler.Permissions.OK_TO_FILL_FORM | Poppler.Permissions.OK_TO_EXTRACT_CONTENTS | Poppler.Permissions.OK_TO_ASSEMBLE | Poppler.Permissions.OK_TO_PRINT_HIGH_RESOLUTION
         */
        get permissions(): Permissions;

        /**
         * @since 0.80
         * @read-only
         * @default Poppler.PrintDuplex.NONE
         */
        get print_duplex(): PrintDuplex;

        /**
         * @since 0.80
         * @read-only
         * @default Poppler.PrintDuplex.NONE
         */
        get printDuplex(): PrintDuplex;

        /**
         * Suggested number of copies to be printed for this document
         * @since 0.80
         * @read-only
         * @default 1
         */
        get print_n_copies(): number;

        /**
         * Suggested number of copies to be printed for this document
         * @since 0.80
         * @read-only
         * @default 1
         */
        get printNCopies(): number;

        /**
         * @since 0.73
         * @read-only
         * @default Poppler.PrintScaling.APP_DEFAULT
         */
        get print_scaling(): PrintScaling;

        /**
         * @since 0.73
         * @read-only
         * @default Poppler.PrintScaling.APP_DEFAULT
         */
        get printScaling(): PrintScaling;

        /**
         * The producer of the document. See also `poppler_document_get_producer()`
         * @default null
         */
        get producer(): string;
        set producer(val: string);

        /**
         * The subject of the document
         * @default null
         */
        get subject(): string;
        set subject(val: string);

        /**
         * Document PDF subtype type
         * @read-only
         * @default Poppler.PDFSubtype.UNSET
         */
        get subtype(): PDFSubtype;

        /**
         * Document PDF subtype conformance
         * @read-only
         * @default Poppler.PDFConformance.UNSET
         */
        get subtype_conformance(): PDFConformance;

        /**
         * Document PDF subtype conformance
         * @read-only
         * @default Poppler.PDFConformance.UNSET
         */
        get subtypeConformance(): PDFConformance;

        /**
         * Document PDF subtype part
         * @read-only
         * @default Poppler.PDFPart.UNSET
         */
        get subtype_part(): PDFPart;

        /**
         * Document PDF subtype part
         * @read-only
         * @default Poppler.PDFPart.UNSET
         */
        get subtypePart(): PDFPart;

        /**
         * Document PDF subtype. See also `poppler_document_get_pdf_subtype_string()`
         * @read-only
         * @default null
         */
        get subtype_string(): string;

        /**
         * Document PDF subtype. See also `poppler_document_get_pdf_subtype_string()`
         * @read-only
         * @default null
         */
        get subtypeString(): string;

        /**
         * The document's title or `null`
         * @default null
         */
        get title(): string;
        set title(val: string);

        /**
         * @read-only
         * @default Poppler.ViewerPreferences.UNSET
         */
        get viewer_preferences(): ViewerPreferences;

        /**
         * @read-only
         * @default Poppler.ViewerPreferences.UNSET
         */
        get viewerPreferences(): ViewerPreferences;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Document.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Document.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_bytes(bytes: GLib.Bytes | Uint8Array, password: string | null): Document;

        static new_from_data(data: Uint8Array | string, password: string | null): Document;

        static new_from_fd(fd: number, password: string | null): Document;

        static new_from_file(uri: string, password: string | null): Document;

        static new_from_gfile(file: Gio.File, password: string | null, cancellable: Gio.Cancellable | null): Document;

        static new_from_stream(stream: Gio.InputStream, length: bigint | number, password: string | null, cancellable: Gio.Cancellable | null): Document;

        // Signals
        /** @signal */
        connect<K extends keyof Document.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Document.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Document.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Document.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Document.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Document.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Creates a balanced binary tree of all named destinations in `document`
         * 
         * The tree key is strings in the form returned by
         * `poppler_named_dest_to_bytestring()` which constains a destination name.
         * The tree value is the {@link Poppler.Dest} which contains a named destination.
         * The return value must be freed with `g_tree_destroy()`.
         * @returns the {@link GLib.Tree}, or `null`
         * @since 0.78
         */
        create_dests_tree(): GLib.Tree | null;

        /**
         * Creates a {@link Poppler.Dest} for the named destination `link_name` in `document`.
         * 
         * Note that named destinations are bytestrings, not string. That means that
         * unless `link_name` was returned by a poppler function (e.g. is
         * {@link Poppler.Dest}.named_dest), it needs to be converted to string
         * using `poppler_named_dest_from_bytestring()` before being passed to this
         * function.
         * 
         * The returned value must be freed with `poppler_dest_free()`.
         * @param link_name a named destination
         * @returns a new {@link Poppler.Dest} destination, or `null` if   `link_name` is not a destination.
         */
        find_dest(link_name: string): Dest;

        /**
         * Returns a {@link GLib.List} containing {@link Poppler.Attachment}<!-- -->s.  These attachments
         * are unowned, and must be unreffed, and the list must be freed with
         * `g_list_free()`.
         * @returns a list of available attachments.
         */
        get_attachments(): Attachment[];

        /**
         * Returns the author of the document
         * @returns a new allocated string containing the author               of `document`, or `null`
         * @since 0.16
         */
        get_author(): string;

        /**
         * Returns the date the document was created as seconds since the Epoch
         * @returns the date the document was created, or -1
         * @since 0.16
         */
        get_creation_date(): number;

        /**
         * Returns the date the document was created as a {@link GLib.DateTime}
         * @returns the date the document was created, or `null`
         * @since 20.09.0
         */
        get_creation_date_time(): GLib.DateTime | null;

        /**
         * Returns the creator of the document. If the document was converted
         * from another format, the creator is the name of the product
         * that created the original document from which it was converted.
         * @returns a new allocated string containing the creator               of `document`, or `null`
         * @since 0.16
         */
        get_creator(): string;

        /**
         * Returns the {@link Poppler.FormField} for the given `id`. It must be freed with
         * `g_object_unref()`
         * @param id an id of a {@link Poppler.FormField}
         * @returns a new {@link Poppler.FormField} or `null` if not found
         */
        get_form_field(id: number): FormField;

        /**
         * Returns the PDF file identifier represented as two byte string arrays of size 32.
         * `permanent_id` is the permanent identifier that is built based on the file
         * contents at the time it was originally created, so that this identifer
         * never changes. `update_id` is the update identifier that is built based on
         * the file contents at the time it was last updated.
         * 
         * Note that returned strings are not null-terminated, they have a fixed
         * size of 32 bytes.
         * @returns `true` if the `document` contains an id, `false` otherwise
         * @since 0.16
         */
        get_id(): [boolean, string, string];

        /**
         * Returns the keywords associated to the document
         * @returns a new allocated string containing keywords associated               to `document`, or `null`
         * @since 0.16
         */
        get_keywords(): string;

        /**
         * Returns the XML metadata string of the document
         * @returns a new allocated string containing the XML               metadata, or `null`
         * @since 0.16
         */
        get_metadata(): string;

        /**
         * Returns the date the document was most recently modified as seconds since the Epoch
         * @returns the date the document was most recently modified, or -1
         * @since 0.16
         */
        get_modification_date(): number;

        /**
         * Returns the date the document was most recently modified as a {@link GLib.DateTime}
         * @returns the date the document was modified, or `null`
         * @since 20.09.0
         */
        get_modification_date_time(): GLib.DateTime | null;

        /**
         * Returns the number of attachments in a loaded document.
         * See also `poppler_document_get_attachments()`
         * @returns Number of attachments
         * @since 0.18
         */
        get_n_attachments(): number;

        /**
         * Returns the number of pages in a loaded document.
         * @returns Number of pages
         */
        get_n_pages(): number;

        /**
         * Returns how many digital signatures `document` contains.
         * PDF digital signatures ensure that the content hash not been altered since last edit and
         * that it was produced by someone the user can trust
         * @returns The number of signatures found in the document
         * @since 21.12.0
         */
        get_n_signatures(): number;

        /**
         * Returns the {@link Poppler.Page} indexed at `index`.  This object is owned by the
         * caller.
         * @param index a page index
         * @returns The {@link Poppler.Page} at `index`
         */
        get_page(index: number): Page;

        /**
         * Returns the {@link Poppler.Page} reference by `label`.  This object is owned by the
         * caller.  `label` is a human-readable string representation of the page number,
         * and can be document specific.  Typically, it is a value such as "iii" or "3".
         * 
         * By default, "1" refers to the first page.
         * @param label a page label
         * @returns The {@link Poppler.Page} referenced by `label`
         */
        get_page_by_label(label: string): Page;

        /**
         * Returns the page layout that should be used when the document is opened
         * @returns a {@link Poppler.PageLayout} that should be used when the document is opened
         * @since 0.16
         */
        get_page_layout(): PageLayout;

        /**
         * Returns a {@link Poppler.PageMode} representing how the document should
         * be initially displayed when opened.
         * @returns a {@link Poppler.PageMode} that should be used when document is opened
         * @since 0.16
         */
        get_page_mode(): PageMode;

        /**
         * Returns the conformance level of the `document` as {@link Poppler.PDFConformance}.
         * @returns the document's subtype conformance level
         * @since 0.70
         */
        get_pdf_conformance(): PDFConformance;

        /**
         * Returns the part of the conforming standard that the `document` adheres to
         * as a {@link Poppler.PDFSubtype}.
         * @returns the document's subtype part
         * @since 0.70
         */
        get_pdf_part(): PDFPart;

        /**
         * Returns the subtype of `document` as a {@link Poppler.PDFSubtype}.
         * @returns the document's subtype
         * @since 0.70
         */
        get_pdf_subtype(): PDFSubtype;

        /**
         * Returns the PDF subtype version of `document` as a string.
         * @returns a newly allocated string containing the PDF subtype version of `document`, or `null`
         * @since 0.70
         */
        get_pdf_subtype_string(): string | null;

        /**
         * Updates values referenced by `major_version` & `minor_version` with the
         * major and minor PDF versions of `document`.
         * @since 0.16
         */
        get_pdf_version(): [number, number];

        /**
         * Returns the PDF version of `document` as a string (e.g. PDF-1.6)
         * @returns a new allocated string containing the PDF version               of `document`, or `null`
         * @since 0.16
         */
        get_pdf_version_string(): string;

        /**
         * Returns the flags specifying which operations are permitted when the document is opened.
         * @returns a set of flags from  {@link Poppler.Permissions} enumeration
         * @since 0.16
         */
        get_permissions(): Permissions;

        /**
         * Returns the duplex mode value suggested for printing by author of the document.
         * Value POPPLER_PRINT_DUPLEX_NONE means that the document does not specify this
         * preference.
         * @returns a {@link Poppler.PrintDuplex} that should be used when document is printed
         * @since 0.80
         */
        get_print_duplex(): PrintDuplex;

        /**
         * Returns the suggested number of copies to be printed.
         * This preference should be applied only if returned value
         * is greater than 1 since value 1 usually means that
         * the document does not specify it.
         * @returns Number of copies
         * @since 0.80
         */
        get_print_n_copies(): number;

        /**
         * Returns the suggested page ranges to print in the form of array
         * of {@link Poppler.PageRange}<!-- -->s and number of ranges.
         * `null` pointer means that the document does not specify page ranges
         * for printing.
         * @returns an array          of {@link Poppler.PageRange}<!-- -->s or `null`. Free the array when          it is no longer needed.
         * @since 0.80
         */
        get_print_page_ranges(): PageRange[];

        /**
         * Returns the print scaling value suggested by author of the document.
         * @returns a {@link Poppler.PrintScaling} that should be used when document is printed
         * @since 0.73
         */
        get_print_scaling(): PrintScaling;

        /**
         * Returns the producer of the document. If the document was converted
         * from another format, the producer is the name of the product
         * that converted it to PDF
         * @returns a new allocated string containing the producer               of `document`, or `null`
         * @since 0.16
         */
        get_producer(): string;

        /**
         * Returns a {@link GLib.List} containing all signature {@link Poppler.FormField}<!-- -->s in the document.
         * @returns a list of all signature form fields.
         * @since 22.02.0
         */
        get_signature_fields(): FormField[];

        /**
         * Returns the subject of the document
         * @returns a new allocated string containing the subject               of `document`, or `null`
         * @since 0.16
         */
        get_subject(): string;

        /**
         * Returns the document's title
         * @returns a new allocated string containing the title               of `document`, or `null`
         * @since 0.16
         */
        get_title(): string;

        /**
         * Returns `true` of `document` has any attachments.
         * @returns `true`, if `document` has attachments.
         */
        has_attachments(): boolean;

        /**
         * Returns whether `document` has any javascript in it.
         * @since 0.90
         */
        has_javascript(): boolean;

        /**
         * Returns whether `document` is linearized or not. Linearization of PDF
         * enables efficient incremental access of the PDF file in a network environment.
         * @returns `true` if `document` is linearized, `false` otherwise
         * @since 0.16
         */
        is_linearized(): boolean;

        /**
         * Resets the form fields specified by fields if exclude_fields is FALSE.
         * Resets all others if exclude_fields is TRUE.
         * All form fields are reset regardless of the exclude_fields flag
         * if fields is empty.
         * @param fields list of fields to reset
         * @param exclude_fields whether to reset all fields except those in `fields`
         * @since 0.90
         */
        reset_form(fields: string[] | null, exclude_fields: boolean): void;

        /**
         * Saves `document`. Any change made in the document such as
         * form fields filled, annotations added or modified
         * will be saved.
         * If `error` is set, `false` will be returned. Possible errors
         * include those in the #G_FILE_ERROR domain.
         * @param uri uri of file to save
         * @returns `true`, if the document was successfully saved
         * @throws GLib.Error
         */
        save(uri: string): boolean;

        /**
         * Saves a copy of the original `document`.
         * Any change made in the document such as
         * form fields filled by the user will not be saved.
         * If `error` is set, `false` will be returned. Possible errors
         * include those in the #G_FILE_ERROR domain.
         * @param uri uri of file to save
         * @returns `true`, if the document was successfully saved
         * @throws GLib.Error
         */
        save_a_copy(uri: string): boolean;

        /**
         * Saves `document`. Any change made in the document such as
         * form fields filled, annotations added or modified
         * will be saved if `include_changes` is `true`, or discarded i
         * `include_changes` is `false`.
         * 
         * Note that this function takes ownership of `fd`; you must not operate on it
         * again, nor close it.
         * 
         * If `error` is set, `false` will be returned. Possible errors
         * include those in the #G_FILE_ERROR domain.
         * @param fd a valid file descriptor open for writing
         * @param include_changes whether to include user changes (e.g. form fills)
         * @returns `true`, if the document was successfully saved
         * @since 21.12.0
         * @throws GLib.Error
         */
        save_to_fd(fd: number, include_changes: boolean): boolean;

        /**
         * Sets the document's author. If `author` is `null`, Author
         * entry is removed from the document's Info dictionary.
         * @param author A new author
         * @since 0.46
         */
        set_author(author: string): void;

        /**
         * Sets the document's creation date. If `creation_date` is -1, CreationDate
         * entry is removed from the document's Info dictionary.
         * @param creation_date A new creation date
         * @since 0.46
         */
        set_creation_date(creation_date: bigint | number): void;

        /**
         * Sets the document's creation date. If `creation_datetime` is `null`,
         * CreationDate entry is removed from the document's Info dictionary.
         * @param creation_datetime A new creation {@link GLib.DateTime}
         * @since 20.09.0
         */
        set_creation_date_time(creation_datetime: GLib.DateTime | null): void;

        /**
         * Sets the document's creator. If `creator` is `null`, Creator
         * entry is removed from the document's Info dictionary.
         * @param creator A new creator
         * @since 0.46
         */
        set_creator(creator: string): void;

        /**
         * Sets the document's keywords. If `keywords` is `null`,
         * Keywords entry is removed from the document's Info dictionary.
         * @param keywords New keywords
         * @since 0.46
         */
        set_keywords(keywords: string): void;

        /**
         * Sets the document's modification date. If `modification_date` is -1, ModDate
         * entry is removed from the document's Info dictionary.
         * @param modification_date A new modification date
         * @since 0.46
         */
        set_modification_date(modification_date: bigint | number): void;

        /**
         * Sets the document's modification date. If `modification_datetime` is `null`,
         * ModDate entry is removed from the document's Info dictionary.
         * @param modification_datetime A new modification {@link GLib.DateTime}
         * @since 20.09.0
         */
        set_modification_date_time(modification_datetime: GLib.DateTime | null): void;

        /**
         * Sets the document's producer. If `producer` is `null`,
         * Producer entry is removed from the document's Info dictionary.
         * @param producer A new producer
         * @since 0.46
         */
        set_producer(producer: string): void;

        /**
         * Sets the document's subject. If `subject` is `null`, Subject
         * entry is removed from the document's Info dictionary.
         * @param subject A new subject
         * @since 0.46
         */
        set_subject(subject: string): void;

        /**
         * Sets the document's title. If `title` is `null`, Title entry
         * is removed from the document's Info dictionary.
         * @param title A new title
         * @since 0.46
         */
        set_title(title: string): void;

        /**
         * Sign #document using `signing_data`.
         * @param signing_data a {@link Poppler.SigningData}
         * @param cancellable a {@link Gio.Cancellable}
         * @since 23.07.0
         */
        sign(signing_data: SigningData, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Sign #document using `signing_data`.
         * @param signing_data a {@link Poppler.SigningData}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback}
         * @since 23.07.0
         */
        sign(signing_data: SigningData, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Sign #document using `signing_data`.
         * @param signing_data a {@link Poppler.SigningData}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback}
         * @since 23.07.0
         */
        sign(signing_data: SigningData, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finish poppler_sign_document and get return status or error.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on successful signing a document, otherwise `false` and error is set.
         * @since 23.07.0
         * @throws GLib.Error
         */
        sign_finish(result: Gio.AsyncResult): boolean;
    }


    namespace FontInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Interface for getting the Fonts of a poppler_document
     * 
     * Since 24.10 this type supports g_autoptr
     * @gir-type Class
     */
    class FontInfo extends GObject.Object {
        static $gtype: GObject.GType<FontInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FontInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FontInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: Document): FontInfo;

        // Signals
        /** @signal */
        connect<K extends keyof FontInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FontInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FontInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FontInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        free(): void;

        /**
         * Scans the document associated with `font_info` for fonts. At most
         * `n_pages` will be scanned starting from the current iterator. `iter` will
         * point to the first font scanned.
         * 
         * Here is a simple example of code to scan fonts in a document
         * 
         * <informalexample><programlisting>
         * font_info = poppler_font_info_new (document);
         * scanned_pages = 0;
         * while (scanned_pages <= poppler_document_get_n_pages(document)) {
         *         poppler_font_info_scan (font_info, 20, &fonts_iter);
         *         scanned_pages += 20;
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
         * @returns `true`, if fonts were found
         */
        scan(n_pages: number): [boolean, FontsIter];
    }


    namespace FormField {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A {@link Poppler.Document} form field.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class FormField extends GObject.Object {
        static $gtype: GObject.GType<FormField>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FormField.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FormField.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof FormField.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FormField.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FormField.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FormField.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FormField.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FormField.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the button type of `field`
         * @returns {@link Poppler.FormButtonType} of `field`
         */
        button_get_button_type(): FormButtonType;

        /**
         * Queries a {@link Poppler.FormField} and returns its current state. Returns `true` if
         * `field` is pressed in and `false` if it is raised.
         * @returns current state of `field`
         */
        button_get_state(): boolean;

        /**
         * Sets the status of `field`. Set to `true` if you want the {@link Poppler.FormField}
         * to be 'pressed in', and `false` to raise it.
         * @param state `true` or `false`
         */
        button_set_state(state: boolean): void;

        /**
         * Checks whether `field` allows multiple choices to be selected
         * @returns `true` if `field` allows multiple choices to be selected
         */
        choice_can_select_multiple(): boolean;

        choice_commit_on_change(): boolean;

        /**
         * Checks whether spell checking should be done for the contents of `field`
         * @returns `true` if spell checking should be done for `field`
         */
        choice_do_spell_check(): boolean;

        /**
         * Gets the choice type of `field`
         * @returns {@link Poppler.FormChoiceType} of `field`
         */
        choice_get_choice_type(): FormChoiceType;

        /**
         * Returns the contents of the item on `field` at the given index
         * @param index the index of the item
         * @returns a new allocated string. It must be freed with `g_free()` when done.
         */
        choice_get_item(index: number): string;

        /**
         * Returns the number of items on `field`
         * @returns the number of items on `field`
         */
        choice_get_n_items(): number;

        /**
         * Retrieves the contents of `field`.
         * @returns a new allocated string. It must be freed with `g_free()` when done.
         */
        choice_get_text(): string;

        /**
         * Checks whether `field` is editable
         * @returns `true` if `field` is editable
         */
        choice_is_editable(): boolean;

        /**
         * Checks whether the item at the given index on `field` is currently selected
         * @param index the index of the item
         * @returns `true` if item at `index` is currently selected
         */
        choice_is_item_selected(index: number): boolean;

        /**
         * Selects the item at the given index on `field`
         * @param index the index of the item
         */
        choice_select_item(index: number): void;

        /**
         * Sets the text in `field` to the given value, replacing the current contents
         * @param text the new text
         */
        choice_set_text(text: string): void;

        /**
         * Changes the state of the item at the given index
         * @param index the index of the item
         */
        choice_toggle_item(index: number): void;

        /**
         * Unselects all the items on `field`
         */
        choice_unselect_all(): void;

        /**
         * Retrieves the action ({@link Poppler.Action}) that shall be
         * performed when `field` is activated, or `null`
         * @returns the action to perform. The returned               object is owned by `field` and should not be freed
         * @since 0.18
         */
        get_action(): Action;

        /**
         * Retrieves the action ({@link Poppler.Action}) that shall be performed when
         * an additional action is triggered on `field`, or `null`.
         * @param type the type of additional action
         * @returns the action to perform. The returned               object is owned by `field` and should not be freed.
         * @since 0.72
         */
        get_additional_action(type: AdditionalActionType): Action;

        /**
         * Gets the alternate ui name of `field`. This name is also commonly
         * used by pdf producers/readers to show it as a tooltip when `field` area
         * is hovered by a pointing device (eg. mouse).
         * @returns a new allocated string. It must be freed with `g_free()` when done.
         * @since 0.88
         */
        get_alternate_ui_name(): string;

        /**
         * Gets the type of `field`
         * @returns {@link Poppler.FormFieldType} of `field`
         */
        get_field_type(): FormFieldType;

        /**
         * Gets the font size of `field`
         * 
         * WARNING: This function always returns 0. Contact the poppler
         * mailing list if you're interested in implementing it properly
         * @returns the font size of `field`
         */
        get_font_size(): number;

        /**
         * Gets the id of `field`
         * @returns the id of `field`
         */
        get_id(): number;

        /**
         * Gets the mapping name of `field` that is used when
         * exporting interactive form field data from the document
         * @returns a new allocated string. It must be freed with `g_free()` when done.
         * @since 0.16
         */
        get_mapping_name(): string;

        /**
         * Gets the fully qualified name of `field`. It's constructed by concatenating
         * the partial field names of the field and all of its ancestors.
         * @returns a new allocated string. It must be freed with `g_free()` when done.
         * @since 0.16
         */
        get_name(): string;

        /**
         * Gets the partial name of `field`.
         * @returns a new allocated string. It must be freed with `g_free()` when done.
         * @since 0.16
         */
        get_partial_name(): string;

        /**
         * Checks whether `field` is read only
         * @returns `true` if `field` is read only
         */
        is_read_only(): boolean;

        /**
         * Asynchronously validates the cryptographic signature contained in `signature_field`.
         * @param flags {@link Poppler.SignatureValidationFlags} flags influencing process of validation of the field signature
         * @param cancellable optional {@link Gio.Cancellable} object
         * @since 21.12.0
         */
        signature_validate_async(flags: SignatureValidationFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<SignatureInfo>;

        /**
         * Asynchronously validates the cryptographic signature contained in `signature_field`.
         * @param flags {@link Poppler.SignatureValidationFlags} flags influencing process of validation of the field signature
         * @param cancellable optional {@link Gio.Cancellable} object
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the signature is validated
         * @since 21.12.0
         */
        signature_validate_async(flags: SignatureValidationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously validates the cryptographic signature contained in `signature_field`.
         * @param flags {@link Poppler.SignatureValidationFlags} flags influencing process of validation of the field signature
         * @param cancellable optional {@link Gio.Cancellable} object
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the signature is validated
         * @since 21.12.0
         */
        signature_validate_async(flags: SignatureValidationFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<SignatureInfo> | void;

        /**
         * Finishes validation of the cryptographic signature contained in `signature_field`.
         * See `poppler_form_field_signature_validate_async()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link Poppler.SignatureInfo} structure containing signature metadata and validation status                                Free the returned structure with `poppler_signature_info_free()`.
         * @since 21.12.0
         * @throws GLib.Error
         */
        signature_validate_finish(result: Gio.AsyncResult): SignatureInfo;

        /**
         * Synchronously validates the cryptographic signature contained in `signature_field`.
         * @param flags {@link Poppler.SignatureValidationFlags} flags influencing process of validation of the field signature
         * @param cancellable optional {@link Gio.Cancellable} object
         * @returns a {@link Poppler.SignatureInfo} structure containing signature metadata and validation status                                Free the returned structure with `poppler_signature_info_free()`.
         * @since 21.12.0
         * @throws GLib.Error
         */
        signature_validate_sync(flags: SignatureValidationFlags, cancellable: Gio.Cancellable | null): SignatureInfo;

        text_do_scroll(): boolean;

        /**
         * Checks whether spell checking should be done for the contents of `field`
         * @returns `true` if spell checking should be done for `field`
         */
        text_do_spell_check(): boolean;

        /**
         * Retrieves the maximum allowed length of the text in `field`
         * @returns the maximum allowed number of characters in `field`, or -1 if there is no maximum.
         */
        text_get_max_len(): number;

        /**
         * Retrieves the contents of `field`.
         * @returns a new allocated string. It must be freed with `g_free()` when done.
         */
        text_get_text(): string;

        /**
         * Gets the text type of `field`.
         * @returns {@link Poppler.FormTextType} of `field`
         */
        text_get_text_type(): FormTextType;

        /**
         * Checks whether content of `field` is a password and it must be hidden
         * @returns `true` if the content of `field` is a password
         */
        text_is_password(): boolean;

        /**
         * Checks whether the contents of `field` are rich text
         * @returns `true` if the contents of `field` are rich text
         */
        text_is_rich_text(): boolean;

        /**
         * Sets the text in `field` to the given value, replacing the current contents.
         * @param text the new text
         */
        text_set_text(text: string): void;
    }


    namespace Layer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A {@link Poppler.Document} layer.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class Layer extends GObject.Object {
        static $gtype: GObject.GType<Layer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Layer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Layer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Layer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Layer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Layer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Layer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Layer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Layer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the numeric ID the radio button group associated with `layer`.
         * @returns the ID of the radio button group associated with `layer`, or 0 if the layer is not associated to any radio button group
         * @since 0.12
         */
        get_radio_button_group_id(): number;

        /**
         * Returns the name of the layer suitable for
         * presentation as a title in a viewer's GUI
         * @returns a string containing the title of the layer
         * @since 0.12
         */
        get_title(): string;

        /**
         * Hides `layer`. If `layer` is the parent of other nested layers,
         * such layers will be also hidden and will be blocked until `layer`
         * is shown again
         * @since 0.12
         */
        hide(): void;

        /**
         * Returns whether `layer` is parent of other nested layers.
         * @returns `true` if `layer` is a parent layer
         * @since 0.12
         */
        is_parent(): boolean;

        /**
         * Returns whether `layer` is visible
         * @returns `true` if `layer` is visible
         * @since 0.12
         */
        is_visible(): boolean;

        /**
         * Shows `layer`
         * @since 0.12
         */
        show(): void;
    }


    namespace Media {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Media extends GObject.Object {
        static $gtype: GObject.GType<Media>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Media.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Media.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Media.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Media.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Media.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Media.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Media.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Media.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the auto-play parameter.
         * @returns `true` if media should auto-play, `false` otherwise
         * @since 20.04.0
         */
        get_auto_play(): boolean;

        /**
         * Returns the media clip filename, in case of non-embedded media. filename might be
         * a local relative or absolute path or a URI
         * @returns a filename, return value is owned by {@link Poppler.Media} and should not be freed
         * @since 0.14
         */
        get_filename(): string;

        /**
         * Returns the media clip mime-type
         * @returns the mime-type, return value is owned by {@link Poppler.Media} and should not be freed
         * @since 0.14
         */
        get_mime_type(): string;

        /**
         * Returns the repeat count parameter.
         * @returns Repeat count parameter (float)
         * @since 20.04.0
         */
        get_repeat_count(): number;

        /**
         * Returns the show controls parameter.
         * @returns `true` if media should show controls, `false` otherwise
         * @since 20.04.0
         */
        get_show_controls(): boolean;

        /**
         * Whether the media clip is embedded in the PDF. If the result is `true`, the embedded stream
         * can be saved with `poppler_media_save()` or `poppler_media_save_to_callback()` function.
         * If the result is `false`, the media clip filename can be retrieved with
         * `poppler_media_get_filename()` function.
         * @returns `true` if media clip is embedded, `false` otherwise
         * @since 0.14
         */
        is_embedded(): boolean;

        /**
         * Saves embedded stream of `poppler_media` to a file indicated by `filename`.
         * If `error` is set, `false` will be returned.
         * Possible errors include those in the #G_FILE_ERROR domain
         * and whatever the save function generates.
         * @param filename name of file to save
         * @returns `true`, if the file successfully saved
         * @since 0.14
         * @throws GLib.Error
         */
        save(filename: string): boolean;

        /**
         * Saves embedded stream of `poppler_media` by feeding the produced data to `save_func`. Can be used
         * when you want to store the media clip stream to something other than a file, such as
         * an in-memory buffer or a socket. If `error` is set, `false` will be
         * returned. Possible errors include those in the #G_FILE_ERROR domain and
         * whatever the save function generates.
         * @param save_func a function that is called to save each block of data that the save routine generates.
         * @returns `true`, if the save successfully completed
         * @since 0.14
         * @throws GLib.Error
         */
        save_to_callback(save_func: MediaSaveFunc): boolean;

        /**
         * Saves embedded stream of `poppler_media` to a file referred to by `fd`.
         * If `error` is set, `false` will be returned.
         * Possible errors include those in the #G_FILE_ERROR domain
         * and whatever the save function generates.
         * Note that this function takes ownership of `fd`; you must not operate on it
         * again, nor close it.
         * @param fd a valid file descriptor open for writing
         * @returns `true`, if the file successfully saved
         * @since 21.12.0
         * @throws GLib.Error
         */
        save_to_fd(fd: number): boolean;
    }


    namespace Movie {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A {@link Poppler.Document} movie.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class Movie extends GObject.Object {
        static $gtype: GObject.GType<Movie>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Movie.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Movie.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Movie.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Movie.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Movie.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Movie.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Movie.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Movie.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the dimensions of the movie's bounding box (in pixels).
         * The respective PDF movie dictionary entry is optional; if missing,
         * -1x-1 will be returned.
         * @param width width of the movie's bounding box
         * @param height height of the movie's bounding box
         * @since 0.89
         */
        get_aspect(width: number, height: number): void;

        /**
         * Returns the duration of the movie playback
         * @returns the duration of the movie playback (in ns)
         * @since 0.80
         */
        get_duration(): number;

        /**
         * Returns the local filename identifying a self-describing movie file
         * @returns a local filename, return value is owned by {@link Poppler.Movie} and               should not be freed
         * @since 0.14
         */
        get_filename(): string;

        /**
         * Returns the play mode of `poppler_movie`.
         * @returns a {@link Poppler.MoviePlayMode}.
         * @since 0.54
         */
        get_play_mode(): MoviePlayMode;

        /**
         * Returns the relative speed of the movie
         * @returns the relative speed of the movie (1 means no change)
         * @since 0.80
         */
        get_rate(): number;

        /**
         * Returns the rotation angle
         * @returns the number of degrees the movie should be rotated (positive, multiples of 90: 0, 90, 180, 270)
         * @since 0.80
         */
        get_rotation_angle(): number;

        /**
         * Returns the start position of the movie playback
         * @returns the start position of the movie playback (in ns)
         * @since 0.80
         */
        get_start(): number;

        /**
         * Returns the playback audio volume
         * @returns volume setting for the movie (0.0 - 1.0)
         * @since 0.80
         */
        get_volume(): number;

        /**
         * Returns whether the user must wait for the movie to be finished before
         * the PDF viewer accepts any interactive action
         * @returns `true` if yes, `false` otherwise
         * @since 0.80
         */
        is_synchronous(): boolean;

        /**
         * Returns whether a poster image representing the Movie
         * shall be displayed. The poster image must be retrieved
         * from the movie file.
         * @returns `true` if move needs a poster image, `false` otherwise
         * @since 0.14
         */
        need_poster(): boolean;

        /**
         * Returns whether to display a movie controller bar while playing the movie
         * @returns `true` if controller bar should be displayed, `false` otherwise
         * @since 0.14
         */
        show_controls(): boolean;
    }


    namespace PSFile {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PSFile extends GObject.Object {
        static $gtype: GObject.GType<PSFile>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PSFile.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PSFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: Document, filename: string, first_page: number, n_pages: number): PSFile;

        static new_fd(document: Document, fd: number, first_page: number, n_pages: number): PSFile;

        // Signals
        /** @signal */
        connect<K extends keyof PSFile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PSFile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PSFile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PSFile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PSFile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PSFile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Frees `ps_file`
         */
        free(): void;

        /**
         * Enable or disable Duplex printing.
         * @param duplex whether to force duplex printing (on printers which support this)
         */
        set_duplex(duplex: boolean): void;

        /**
         * Set the output paper size. These values will end up in the
         * DocumentMedia, the BoundingBox DSC comments and other places in the
         * generated PostScript.
         * @param width the paper width in 1/72 inch
         * @param height the paper height in 1/72 inch
         */
        set_paper_size(width: number, height: number): void;
    }


    namespace Page {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::label": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            label: string;
        }
    }

    /**
     * A {@link Poppler.Document} page.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class Page extends GObject.Object {
        static $gtype: GObject.GType<Page>;

        // Properties
        /**
         * The label of the page or `null`. See also `poppler_page_get_label()`
         * @read-only
         * @default null
         */
        get label(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Page.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Page.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Page.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Page.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Page.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Page.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Page.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Page.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Frees a list of {@link Poppler.AnnotMapping}<!-- -->s allocated by
         * `poppler_page_get_annot_mapping()`.  It also unreferences the {@link Poppler.Annot}<!-- -->s
         * that each mapping contains, so if you want to keep them around, you need to
         * reference them with `g_object_ref()`.
         * @param list A list of   {@link Poppler.AnnotMapping}<!-- -->s
         */
        static free_annot_mapping(list: AnnotMapping[]): void;

        /**
         * Frees a list of {@link Poppler.FormFieldMapping}<!-- -->s allocated by
         * `poppler_page_get_form_field_mapping()`.
         * @param list A list of   {@link Poppler.FormFieldMapping}<!-- -->s
         */
        static free_form_field_mapping(list: FormFieldMapping[]): void;

        /**
         * Frees a list of {@link Poppler.ImageMapping}<!-- -->s allocated by
         * `poppler_page_get_image_mapping()`.
         * @param list A list of   {@link Poppler.ImageMapping}<!-- -->s
         */
        static free_image_mapping(list: ImageMapping[]): void;

        /**
         * Frees a list of {@link Poppler.LinkMapping}<!-- -->s allocated by
         * `poppler_page_get_link_mapping()`.  It also frees the {@link Poppler.Action}<!-- -->s
         * that each mapping contains, so if you want to keep them around, you need to
         * copy them with `poppler_action_copy()`.
         * @param list A list of   {@link Poppler.LinkMapping}<!-- -->s
         */
        static free_link_mapping(list: LinkMapping[]): void;

        /**
         * Frees a list of {@link Poppler.TextAttributes}<!-- -->s allocated by
         * `poppler_page_get_text_attributes()`.
         * @param list A list of   {@link Poppler.TextAttributes}<!-- -->s
         * @since 0.18
         */
        static free_text_attributes(list: TextAttributes[]): void;

        /**
         * Frees `region`
         * @param region a {@link GLib.List} of   {@link Poppler.Rectangle}
         * @deprecated since 0.16: Use only to free deprecated regions created by `poppler_page_get_selection_region()`. Regions created by `poppler_page_get_selected_region()` should be freed with `cairo_region_destroy()` instead.
         */
        static selection_region_free(region: Rectangle[]): void;

        // Methods
        /**
         * Adds annotation `annot` to `page`.
         * @param annot a {@link Poppler.Annot} to add
         * @since 0.16
         */
        add_annot(annot: Annot): void;

        /**
         * Finds `text` in `page` with the default options ({@link Poppler.FindFlags.DEFAULT}) and
         * returns a {@link GLib.List} of rectangles for each occurrence of the text on the page.
         * The coordinates are in PDF points.
         * @param text the text to search for (UTF-8 encoded)
         * @returns a {@link GLib.List} of {@link Poppler.Rectangle},
         */
        find_text(text: string): Rectangle[];

        /**
         * Finds `text` in `page` with the given {@link Poppler.FindFlags} options and
         * returns a {@link GLib.List} of rectangles for each occurrence of the text on the page.
         * The coordinates are in PDF points.
         * 
         * When {@link Poppler.FindFlags.MULTILINE} is passed in `options`, matches may span more than
         * one line. In this case, the returned list will contain one {@link Poppler.Rectangle}
         * for each part of a match. The function `poppler_rectangle_find_get_match_continued()`
         * will return `true` for all rectangles belonging to the same match, except for
         * the last one. If a hyphen was ignored at the end of the part of the match,
         * `poppler_rectangle_find_get_ignored_hyphen()` will return `true` for that
         * rectangle.
         * 
         * Note that currently matches spanning more than two lines are not found.
         * (This limitation may be lifted in a future version.)
         * 
         * Note also that currently finding multi-line matches backwards is not
         * implemented; if you pass {@link Poppler.FindFlags.BACKWARDS} and {@link Poppler.FindFlags.MULTILINE}
         * together, {@link Poppler.FindFlags.MULTILINE} will be ignored.
         * @param text the text to search for (UTF-8 encoded)
         * @param options find options
         * @returns a newly allocated list of newly allocated {@link Poppler.Rectangle}. Free with `g_list_free_full()` using `poppler_rectangle_free()`.
         * @since 0.22
         */
        find_text_with_options(text: string, options: FindFlags): Rectangle[];

        /**
         * Returns a list of {@link Poppler.AnnotMapping} items that map from a location on
         * `page` to a {@link Poppler.Annot}.  This list must be freed with
         * `poppler_page_free_annot_mapping()` when done.
         * @returns A {@link GLib.List} of {@link Poppler.AnnotMapping}
         */
        get_annot_mapping(): AnnotMapping[];

        /**
         * @param rect 
         */
        get_bounding_box(rect: Rectangle): boolean;

        /**
         * Retrurns the crop box of `page`
         */
        get_crop_box(): Rectangle;

        /**
         * Returns the duration of `page`
         * @returns duration in seconds of `page` or -1.
         */
        get_duration(): number;

        /**
         * Returns a list of {@link Poppler.FormFieldMapping} items that map from a
         * location on `page` to a form field.  This list must be freed
         * with `poppler_page_free_form_field_mapping()` when done.
         * @returns A {@link GLib.List} of {@link Poppler.FormFieldMapping}
         */
        get_form_field_mapping(): FormFieldMapping[];

        /**
         * Returns a cairo surface for the image of the `page`
         * @param image_id The image identifier
         * @returns A cairo surface for the image
         */
        get_image(image_id: number): cairo.Surface;

        /**
         * Returns a list of {@link Poppler.ImageMapping} items that map from a
         * location on `page` to an image of the page. This list must be freed
         * with `poppler_page_free_image_mapping()` when done.
         * @returns A {@link GLib.List} of {@link Poppler.ImageMapping}
         */
        get_image_mapping(): ImageMapping[];

        /**
         * Returns the index of `page`
         * @returns index value of `page`
         */
        get_index(): number;

        /**
         * Returns the label of `page`. Note that page labels
         * and page indices might not coincide.
         * @returns a new allocated string containing the label of `page`,               or `null` if `page` doesn't have a label
         * @since 0.16
         */
        get_label(): string;

        /**
         * Returns a list of {@link Poppler.LinkMapping} items that map from a
         * location on `page` to a {@link Poppler.Action}.  This list must be freed
         * with `poppler_page_free_link_mapping()` when done.
         * @returns A {@link GLib.List} of {@link Poppler.LinkMapping}
         */
        get_link_mapping(): LinkMapping[];

        /**
         * Returns a region containing the area that would be rendered by
         * `poppler_page_render_selection()`.
         * The returned region must be freed with `cairo_region_destroy()`
         * @param scale scale specified as pixels per point
         * @param style a {@link Poppler.SelectionStyle}
         * @param selection start and end point of selection as a rectangle
         * @returns a cairo_region_t
         * @since 0.16
         */
        get_selected_region(scale: number, style: SelectionStyle, selection: Rectangle): cairo.Region;

        /**
         * Retrieves the contents of the specified `selection` as text.
         * @param style a {@link Poppler.SelectionStyle}
         * @param selection the {@link Poppler.Rectangle} including the text
         * @returns a pointer to the contents of the `selection` as a string
         * @since 0.16
         */
        get_selected_text(style: SelectionStyle, selection: Rectangle): string;

        /**
         * Returns a region containing the area that would be rendered by
         * `poppler_page_render_selection()` as a {@link GLib.List} of
         * {@link Poppler.Rectangle}. The returned list must be freed with
         * `poppler_page_selection_region_free()`.
         * @param scale scale specified as pixels per point
         * @param style a {@link Poppler.SelectionStyle}
         * @param selection start and end point of selection as a rectangle
         * @returns a {@link GLib.List} of {@link Poppler.Rectangle}
         * @deprecated since 0.16: Use `poppler_page_get_selected_region()` instead.
         */
        get_selection_region(scale: number, style: SelectionStyle, selection: Rectangle): Rectangle[];

        /**
         * Gets the size of `page` at the current scale and rotation.
         */
        get_size(): [number, number];

        /**
         * Retrieves the text of `page`.
         * @returns a pointer to the text of the `page`               as a string
         * @since 0.16
         */
        get_text(): string;

        /**
         * Obtains the attributes of the text as a {@link GLib.List} of {@link Poppler.TextAttributes}.
         * This list must be freed with `poppler_page_free_text_attributes()` when done.
         * 
         * Each list element is a {@link Poppler.TextAttributes} struct where start_index and
         * end_index indicates the range of text (as returned by `poppler_page_get_text()`)
         * to which text attributes apply.
         * 
         * See also `poppler_page_get_text_attributes_for_area()`
         * @returns A {@link GLib.List} of {@link Poppler.TextAttributes}
         * @since 0.18
         */
        get_text_attributes(): TextAttributes[];

        /**
         * Obtains the attributes of the text in `area` as a {@link GLib.List} of {@link Poppler.TextAttributes}.
         * This list must be freed with `poppler_page_free_text_attributes()` when done.
         * 
         * Each list element is a {@link Poppler.TextAttributes} struct where start_index and
         * end_index indicates the range of text (as returned by `poppler_page_get_text_for_area()`)
         * to which text attributes apply.
         * @param area a {@link Poppler.Rectangle}
         * @returns A {@link GLib.List} of {@link Poppler.TextAttributes}
         * @since 0.26
         */
        get_text_attributes_for_area(area: Rectangle): TextAttributes[];

        /**
         * Retrieves the text of `page` contained in `area`.
         * @param area a {@link Poppler.Rectangle}
         * @returns a pointer to the text as a string
         * @since 0.26
         */
        get_text_for_area(area: Rectangle): string;

        /**
         * Obtains the layout of the text as a list of {@link Poppler.Rectangle}
         * This array must be freed with `g_free()` when done.
         * 
         * The position in the array represents an offset in the text returned by
         * `poppler_page_get_text()`
         * 
         * See also `poppler_page_get_text_layout_for_area()`.
         * @returns `true` if the page contains text, `false` otherwise
         * @since 0.16
         */
        get_text_layout(): [boolean, Rectangle[]];

        /**
         * Obtains the layout of the text contained in `area` as a list of {@link Poppler.Rectangle}
         * This array must be freed with `g_free()` when done.
         * 
         * The position in the array represents an offset in the text returned by
         * `poppler_page_get_text_for_area()`
         * @param area a {@link Poppler.Rectangle}
         * @returns `true` if the page contains text, `false` otherwise
         * @since 0.26
         */
        get_text_layout_for_area(area: Rectangle): [boolean, Rectangle[]];

        /**
         * Get the embedded thumbnail for the specified page.  If the document
         * doesn't have an embedded thumbnail for the page, this function
         * returns `null`.
         * @returns the tumbnail as a cairo_surface_t or `null` if the document doesn't have a thumbnail for this page.
         */
        get_thumbnail(): cairo.Surface;

        /**
         * Returns `true` if `page` has a thumbnail associated with it.  It also
         * fills in `width` and `height` with the width and height of the
         * thumbnail.  The values of width and height are not changed if no
         * appropriate thumbnail exists.
         * @returns `true`, if `page` has a thumbnail associated with it.
         */
        get_thumbnail_size(): [boolean, number, number];

        /**
         * Returns the transition effect of `page`
         * @returns a {@link Poppler.PageTransition} or `null`.
         */
        get_transition(): PageTransition;

        /**
         * Removes annotation `annot` from `page`
         * @param annot a {@link Poppler.Annot} to remove
         * @since 0.22
         */
        remove_annot(annot: Annot): void;

        /**
         * Render the page to the given cairo context. This function
         * is for rendering a page that will be displayed. If you want
         * to render a page that will be printed use
         * `poppler_page_render_for_printing()` instead.  Please see the documentation
         * for that function for the differences between rendering to the screen and
         * rendering to a printer.
         * @param cairo cairo context to render to
         */
        render(cairo: cairo.Context): void;

        /**
         * Render the page to the given cairo context for printing with
         * #POPPLER_PRINT_ALL flags selected.  If you want a different set of flags,
         * use `poppler_page_render_full()` with printing `TRUE` and the corresponding
         * flags.
         * 
         * The difference between `poppler_page_render()` and this function is that some
         * things get rendered differently between screens and printers:
         * 
         * <itemizedlist>
         *   <listitem>
         *     PDF annotations get rendered according to their {@link Poppler.AnnotFlag} value.
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
        render_for_printing(cairo: cairo.Context): void;

        /**
         * Render the page to the given cairo context for printing
         * with the specified options
         * 
         * See the documentation for `poppler_page_render_for_printing()` for the
         * differences between rendering to the screen and rendering to a printer.
         * @param cairo cairo context to render to
         * @param options print options
         * @since 0.16
         * @deprecated since 25.02: Use `poppler_page_render_full()` instead.
         */
        render_for_printing_with_options(cairo: cairo.Context, options: PrintFlags): void;

        /**
         * Render the page to the given cairo context, manually selecting which
         * annotations should be displayed.
         * 
         * The `printing` parameter determines whether a page is rendered for printing
         * or for displaying it on a screen. See the documentation for
         * `poppler_page_render_for_printing()` for the differences between rendering to
         * the screen and rendering to a printer.
         * @param cairo cairo context to render to
         * @param printing cairo context to render to
         * @param flags flags which allow to select which annotations to render
         * @since 25.02
         */
        render_full(cairo: cairo.Context, printing: boolean, flags: RenderAnnotsFlags): void;

        /**
         * Render the selection specified by `selection` for `page` to
         * the given cairo context.  The selection will be rendered, using
         * `glyph_color` for the glyphs and `background_color` for the selection
         * background.
         * 
         * If non-NULL, `old_selection` specifies the selection that is already
         * rendered to `cairo`, in which case this function will (some day)
         * only render the changed part of the selection.
         * @param cairo cairo context to render to
         * @param selection start and end point of selection as a rectangle
         * @param old_selection previous selection
         * @param style a {@link Poppler.SelectionStyle}
         * @param glyph_color color to use for drawing glyphs
         * @param background_color color to use for the selection background
         */
        render_selection(cairo: cairo.Context, selection: Rectangle, old_selection: Rectangle, style: SelectionStyle, glyph_color: Color, background_color: Color): void;

        /**
         * Render the page on a postscript file
         * @param ps_file the PopplerPSFile to render to
         */
        render_to_ps(ps_file: PSFile): void;

        /**
         * Render the selection specified by `selection` for `page` to
         * the given cairo context.  The selection will be rendered using
         * `background_color` and `background_opacity` for the selection
         * background. Glyphs will not be drawn.
         * 
         * If non-NULL, `old_selection` specifies the selection that is already
         * rendered to `cairo`, in which case this function will (some day)
         * only render the changed part of the selection.
         * @param cairo cairo context to render to
         * @param selection start and end point of selection as a rectangle
         * @param old_selection previous selection
         * @param style a {@link Poppler.SelectionStyle}
         * @param background_color color to use for the selection background
         * @param background_opacity opacity to use for the selection background
         * @since 25.08
         */
        render_transparent_selection(cairo: cairo.Context, selection: Rectangle, old_selection: Rectangle, style: SelectionStyle, background_color: Color, background_opacity: number): void;
    }


    namespace StructureElement {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A {@link Poppler.Document} structure element.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Class
     */
    class StructureElement extends GObject.Object {
        static $gtype: GObject.GType<StructureElement>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StructureElement.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StructureElement.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof StructureElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StructureElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StructureElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StructureElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StructureElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StructureElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Acronyms and abbreviations contained in elements of type
         * #POPPLER_STRUCTURE_ELEMENT_SPAN may have an associated expanded
         * text form, which can be retrieved using this function.
         * @returns Text of the expanded abbreviation if the    element text is an abbreviation or acrony, `null` if not.
         * @since 0.26
         */
        get_abbreviation(): string;

        /**
         * Obtains the actual text enclosed by the element (and its child elements).
         * The actual text is mostly used for non-text elements like images and
         * figures which <emphasis>do</emphasis> have the graphical appearance of text, like
         * a logo. For those the actual text is the equivalent text to those
         * graphical elements which look like text when rendered.
         * 
         * Note that for elements containing proper text, the function
         * `poppler_structure_element_get_text()` must be used instead.
         * @returns The actual text for the element, or `null`    if not defined.
         * @since 0.26
         */
        get_actual_text(): string;

        /**
         * Obtains the “alternate” text representation of the element (and its child
         * elements). This is mostly used for non-text elements like images and
         * figures, to specify a textual description of the element.
         * 
         * Note that for elements containing proper text, the function
         * `poppler_structure_element_get_text()` must be used instead.
         * @returns The alternate text representation for the    element, or `null` if not defined.
         * @since 0.26
         */
        get_alt_text(): string;

        /**
         * Obtains the background color of the element. If this attribute is
         * not specified, the element shall be treated as if it were transparent.
         * @returns `true` if a color is defined for the element,    `false` otherwise.
         * @since 0.26
         */
        get_background_color(): [boolean, Color];

        /**
         * Obtains how much the text contained in the inline-level structure element should be shifted,
         * measuring from the baseline of the glyphs.
         * @returns A numeric value.
         * @since 0.26
         */
        get_baseline_shift(): number;

        /**
         * Obtains the block-alignment mode of the block-level structure element.
         * @returns A {@link Poppler.StructureBlockAlign} value.
         * @since 0.26
         */
        get_block_align(): StructureBlockAlign;

        /**
         * Obtains the color of border around the element. The result values
         * are in before-after-start-end ordering (for the typical Western
         * left-to-right writing, that is top-bottom-left-right).
         * If this attribute is not specified, the border color for this element shall
         * be the current text fill color in effect at the start of its associated
         * content.
         * @returns `true` if a color is defined for the element,    `false` otherwise.
         * @since 0.26
         */
        get_border_color(): [boolean, Color[]];

        /**
         * Obtains the border style of a structure element. The result values
         * are in before-after-start-end ordering. For example, using Western
         * left-to-right writing, that is top-bottom-left-right.
         * @since 0.26
         */
        get_border_style(): StructureBorderStyle[];

        /**
         * Obtains the thickness of the border of an element. The result values
         * are in before-after-start-end ordering (for the typical Western
         * left-to-right writing, that is top-bottom-left-right).
         * A value of 0 indicates that the border shall not be drawn.
         * @returns `true` if the border thickness attribute is defined for    the element, `false` otherwise.
         * @since 0.26
         */
        get_border_thickness(): [boolean, number[]];

        /**
         * Obtains the size of the bounding box of a block-level structure element.
         * @returns `true` if a bounding box is defined for the element,    `false` otherwise.
         * @since 0.26
         */
        get_bounding_box(): [boolean, Rectangle];

        /**
         * Obtains the color of the content contained in the element.
         * If this attribute is not specified, the color for this element shall
         * be the current text fill color in effect at the start of its associated content.
         * @returns `true` if a color is defined for the element,    `false` otherwise.
         * @since 0.26
         */
        get_color(): [boolean, Color];

        /**
         * Obtains the number of columns used to lay out the content contained
         * in the grouping element.
         * @returns Number of columns.
         * @since 0.26
         */
        get_column_count(): number;

        /**
         * Obtains the size of the gaps in between adjacent columns. Returns an
         * array of elements: the first one is the size of the gap in between
         * columns 1 and 2, second is the size between columns 2 and 3, and so on.
         * 
         * For elements which use a single column, `null` is returned and `n_values`
         * is set to zero.
         * 
         * If the attribute is undefined, `null` is returned and `n_values` is set
         * to a non-zero value.
         * 
         * The array with the results is allocated by the function. When it is
         * not needed anymore, be sure to call `g_free()` on it.
         * @returns Array containing the values for the column gaps, or `null` if the    array is empty or the attribute is not defined.
         * @since 0.26
         */
        get_column_gaps(): number[];

        /**
         * Obtains an array with the widths of the columns.
         * 
         * The array with the results is allocated by the function. When it is
         * not needed anymore, be sure to call `g_free()` on it.
         * @returns Array containing widths of the columns, or `null` if the attribute    is not defined.
         * @since 0.26
         */
        get_column_widths(): number[];

        /**
         * Obtains the amount of indentation at the end of the block-level structure element.
         * @returns A numeric value.
         * @since 0.26
         */
        get_end_indent(): number;

        /**
         * Obtains the textual description of the form element. Note that the
         * description is for informative purposes, and it is not intended
         * to be rendered. For example, assistive technologies may use the
         * description field to provide an alternate way of presenting an
         * element to the user.
         * 
         * The returned string is allocated by the function. When it is
         * not needed anymore, be sure to call `g_free()` on it.
         * @returns A string, or `null` if the attribute    is not defined.
         * @since 0.26
         */
        get_form_description(): string;

        /**
         * Obtains the role of a form structure element that is part of a form, or is
         * a form field. This hints how the control for the element is intended
         * to be rendered.
         * @returns A {@link Poppler.StructureFormRole} value.
         * @since 0.26
         */
        get_form_role(): StructureFormRole;

        /**
         * For a structure element that is a form field, obtains in which state
         * the associated control is expected to be rendered.
         * @returns A {@link Poppler.StructureFormState} value.
         * @since 0.26
         */
        get_form_state(): StructureFormState;

        /**
         * Obtains the glyph orientation for the text contained in a
         * inline-level structure element.
         * @returns A {@link Poppler.StructureGlyphOrientation} value.
         * @since 0.26
         */
        get_glyph_orientation(): StructureGlyphOrientation;

        /**
         * Obtains the height of the block-level structure element. Note that for elements which do
         * not specify a height, it has to be calculated, and in this case -1 is returned.
         * @returns A positive value if a width is defined, or -1    if the height is to be calculated automatically.
         * @since 0.26
         */
        get_height(): number;

        /**
         * Obtains the identifier of an element.
         * @returns The identifier of the element (if    defined), or `null`.
         * @since 0.26
         */
        get_id(): string;

        /**
         * Obtains the inline-alignment mode of the block-level structure element.
         * @returns A {@link Poppler.StructureInlineAlign} value.
         * @since 0.26
         */
        get_inline_align(): StructureInlineAlign;

        /**
         * @returns A {@link Poppler.StructureElementKind} value.
         * @since 0.26
         */
        get_kind(): StructureElementKind;

        /**
         * Obtains the language and country code for the content in an element,
         * in two-letter ISO format, e.g. <code>en_ES</code>, or `null` if not
         * defined.
         * @returns language and country code, or `null`.
         * @since 0.26
         */
        get_language(): string;

        /**
         * Obtains the line height for the text contained in the inline-level structure element.
         * Note that for elements which do not specify a line height, it has to be calculated,
         * and in this case -1 is returned.
         * @returns A positive value if a line height is defined, or -1    if the height is to be calculated automatically.
         * @since 0.26
         */
        get_line_height(): number;

        /**
         * Obtains the list numbering style for list items.
         * @returns A {@link Poppler.StructureListNumbering} value.
         * @since 0.26
         */
        get_list_numbering(): StructureListNumbering;

        /**
         * Obtains the padding of an element (space around it). The result
         * values are in before-after-start-end ordering. For example using
         * Western left-to-right writing, that is top-bottom-left-right.
         * @since 0.26
         */
        get_padding(): number[];

        /**
         * Obtains the page number in which the element is contained.
         * @returns Number of the page that contains the element, of    <code>-1</code> if not defined.
         * @since 0.26
         */
        get_page(): number;

        /**
         * Obtains the placement type of the structure element.
         * @returns A {@link Poppler.StructurePlacement} value.
         * @since 0.26
         */
        get_placement(): StructurePlacement;

        /**
         * Obtains the alignment for the ruby text contained in a
         * inline-level structure element.
         * @returns A {@link Poppler.StructureRubyAlign} value.
         * @since 0.26
         */
        get_ruby_align(): StructureRubyAlign;

        /**
         * Obtains the position for the ruby text contained in a
         * inline-level structure element.
         * @returns A {@link Poppler.StructureRubyPosition} value.
         * @since 0.26
         */
        get_ruby_position(): StructureRubyPosition;

        /**
         * Obtains the amount of empty space after the block-level structure element.
         * @returns A positive value.
         * @since 0.26
         */
        get_space_after(): number;

        /**
         * Obtains the amount of empty space before the block-level structure element.
         * @returns A positive value.
         * @since 0.26
         */
        get_space_before(): number;

        /**
         * Obtains the amount of indentation at the beginning of the block-level structure element.
         * @returns A numeric value.
         * @since 0.26
         */
        get_start_indent(): number;

        /**
         * Obtains the table cell border style of a block-level structure element. The result values
         * are in before-after-start-end ordering. For example, using Western
         * left-to-right writing, that is top-bottom-left-right.
         * @since 0.26
         */
        get_table_border_style(): StructureBorderStyle[];

        /**
         * Obtains the number of columns the table element spans to.
         * @returns A positive, non-zero value.
         * @since 0.26
         */
        get_table_column_span(): number;

        /**
         * Obtains an array with the names of the table column headers. This is only
         * useful for table header row elements.
         * 
         * The array with the results is allocated by the function. The number
         * of items in the returned array can be obtained with `g_strv_length()`.
         * The returned value must be freed using `g_strfreev()`.
         * @returns Zero-terminated array of strings with the table header names,    or `null` if the attribute is not defined.
         * @since 0.26
         */
        get_table_headers(): string[];

        /**
         * Obtains the padding between the table cell’s content rectangle and the
         * surrounding border of a block-level structure element. The result
         * values are in before-after-start-end ordering (for the typical
         * Western left-to-right writing, that is top-bottom-left-right).
         * @since 0.26
         */
        get_table_padding(): number[];

        /**
         * Obtains the number of rows the table element spans to.
         * @returns A positive, non-zero value.
         * @since 0.26
         */
        get_table_row_span(): number;

        /**
         * Obtains the scope of a table structure element.
         * @returns A {@link Poppler.StructureTableScope} value.
         * @since 0.26
         */
        get_table_scope(): StructureTableScope;

        /**
         * Obtains the textual summary of the contents of the table element. Note that
         * the summary is meant for informative purposes, and it is not intended
         * to be rendered. For example, assistive technologies may use the
         * description field to provide an alternate way of presenting an element
         * to the user, or a document indexer may want to scan it for additional
         * keywords.
         * 
         * The returned string is allocated by the function. When it is
         * not needed anymore, be sure to call `g_free()` on it.
         * @returns A string, or `null` if the attribute    is not defined.
         * @since 0.26
         */
        get_table_summary(): string;

        /**
         * Obtains the text enclosed by an element, or the text enclosed by the
         * elements in the subtree (including the element itself).
         * @param flags A {@link Poppler.StructureGetTextFlags} value, or    {@link Poppler.StructureGetTextFlags.NONE} to disable all the flags.
         * @returns A string.
         * @since 0.26
         */
        get_text(flags: StructureGetTextFlags): string;

        /**
         * Obtains the text alignment mode of the text contained into a
         * block-level structure element.
         * @returns A {@link Poppler.StructureTextAlign} value.
         * @since 0.26
         */
        get_text_align(): StructureTextAlign;

        /**
         * Obtains the color of the text decoration for the text contained
         * in the inline-level structure element.
         * If this attribute is not specified, the color for this element shall be the current fill
         * color in effect at the start of its associated content.
         * @returns `true` if a color is defined for the element,    `false` otherwise.
         * @since 0.26
         */
        get_text_decoration_color(): [boolean, Color];

        /**
         * Obtains the thickness of the text decoration for the text contained
         * in the inline-level structure element.
         * If this attribute is not specified, it shall be derived from the current
         * stroke thickness in effect at the start of the element’s associated content.
         * @returns Thickness of the text decoration, or NAN if not defined.
         * @since 0.26
         */
        get_text_decoration_thickness(): number;

        /**
         * Obtains the text decoration type of the text contained in the
         * inline-level structure element.
         * @returns A {@link Poppler.StructureTextDecoration} value.
         * @since 0.26
         */
        get_text_decoration_type(): StructureTextDecoration;

        /**
         * Obtains the amount of indentation of the text contained in the block-level structure element.
         * @returns A numeric value.
         * @since 0.26
         */
        get_text_indent(): number;

        /**
         * Obtains the text enclosed by an element, as an array of {@link Poppler.TextSpan}
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
         * @returns An array of {@link Poppler.TextSpan} elements.
         * @since 0.26
         */
        get_text_spans(): TextSpan[];

        /**
         * Obtains the title of an element.
         * @returns The title of the element, or `null`.
         * @since 0.26
         */
        get_title(): string;

        /**
         * Obtains the width of the block-level structure element. Note that for elements which do
         * not specify a width, it has to be calculated, and in this case -1 is returned.
         * @returns A positive value if a width is defined, or -1    if the width is to be calculated automatically.
         * @since 0.26
         */
        get_width(): number;

        /**
         * Obtains the writing mode (writing direction) of the content associated
         * with a structure element.
         * @returns A {@link Poppler.StructureWritingMode} value.
         * @since 0.26
         */
        get_writing_mode(): StructureWritingMode;

        /**
         * Checks whether an element is a block element.
         * @returns `true` if  the element is a block element, or `false` otherwise.
         * @since 0.26
         */
        is_block(): boolean;

        /**
         * Checks whether an element is actual document content.
         * @returns `true` if the element is content, or `false` otherwise.
         * @since 0.26
         */
        is_content(): boolean;

        /**
         * Checks whether an element is a grouping element.
         * @returns `true` if the element is a grouping element, `false`    otherwise.
         * @since 0.26
         */
        is_grouping(): boolean;

        /**
         * Checks whether an element is an inline element.
         * @returns `true` if the element is an inline element, or `false` otherwise.
         * @since 0.26
         */
        is_inline(): boolean;
    }


    /**
     * Fields common to all {@link Poppler.Action}<!-- -->s
     * @gir-type Struct
     */
    class ActionAny {
        static $gtype: GObject.GType<ActionAny>;

        // Fields
        type: ActionType;

        title: string;
    }


    /**
     * Go to destination
     * @gir-type Struct
     */
    class ActionGotoDest {
        static $gtype: GObject.GType<ActionGotoDest>;

        // Fields
        type: ActionType;

        title: string;
    }


    /**
     * Go to destination in another document
     * @gir-type Struct
     */
    class ActionGotoRemote {
        static $gtype: GObject.GType<ActionGotoRemote>;

        // Fields
        type: ActionType;

        title: string;

        file_name: string;
    }


    /**
     * Javascript.
     * @gir-type Struct
     * @since 0.18
     */
    class ActionJavascript {
        static $gtype: GObject.GType<ActionJavascript>;

        // Fields
        type: ActionType;

        title: string;

        script: string;
    }


    /**
     * Launch app (or open document)
     * @gir-type Struct
     */
    class ActionLaunch {
        static $gtype: GObject.GType<ActionLaunch>;

        // Fields
        type: ActionType;

        title: string;

        file_name: string;

        params: string;
    }


    /**
     * Action to perform over a list of layers
     * @gir-type Struct
     */
    class ActionLayer {
        static $gtype: GObject.GType<ActionLayer>;

        // Fields
        action: ActionLayerAction;

        layers: Layer[];
    }


    /**
     * Play movies.
     * @gir-type Struct
     * @since 0.14
     */
    class ActionMovie {
        static $gtype: GObject.GType<ActionMovie>;

        // Fields
        type: ActionType;

        title: string;

        operation: ActionMovieOperation;

        movie: Movie;
    }


    /**
     * Predefined action
     * @gir-type Struct
     */
    class ActionNamed {
        static $gtype: GObject.GType<ActionNamed>;

        // Fields
        type: ActionType;

        title: string;

        named_dest: string;
    }


    /**
     * State of layer.
     * @gir-type Struct
     * @since 0.14
     */
    class ActionOCGState {
        static $gtype: GObject.GType<ActionOCGState>;

        // Fields
        type: ActionType;

        title: string;

        state_list: ActionLayer[];
    }


    /**
     * Play multimedia content.
     * @gir-type Struct
     * @since 0.14
     */
    class ActionRendition {
        static $gtype: GObject.GType<ActionRendition>;

        // Fields
        type: ActionType;

        title: string;

        op: number;

        media: Media;
    }


    /**
     * Resets some or all fields within a PDF form.
     * 
     * The default behavior resets only the list of `fields`, but setting
     * `exclude` to `true` will cause the action to reset all fields but those
     * listed. Providing an empty list of fields resets the entire form.
     * @gir-type Struct
     * @since 0.90
     */
    class ActionResetForm {
        static $gtype: GObject.GType<ActionResetForm>;

        // Fields
        type: ActionType;

        title: string;

        fields: string[];

        exclude: boolean;
    }


    /**
     * URI
     * @gir-type Struct
     */
    class ActionUri {
        static $gtype: GObject.GType<ActionUri>;

        // Fields
        type: ActionType;

        title: string;

        uri: string;
    }


    /**
     * An annotation for callout line.
     * 
     * Since 25.06 this type supports g_autoptr
     * @gir-type Struct
     */
    class AnnotCalloutLine {
        static $gtype: GObject.GType<AnnotCalloutLine>;

        // Fields
        multiline: boolean;

        x1: number;

        y1: number;

        x2: number;

        y2: number;

        x3: number;

        y3: number;

        // Constructors

        constructor(properties?: Partial<{
            multiline: boolean;
            x1: number;
            y1: number;
            x2: number;
            y2: number;
            x3: number;
            y3: number;
        }>);

        static ["new"](): AnnotCalloutLine;

        // Methods
        /**
         * It does copy `callout` to a new {@link Poppler.AnnotCalloutLine}.
         * @returns a new allocated {@link Poppler.AnnotCalloutLine} as exact copy of               `callout`, `null` in other case. It must be freed when done.
         */
        copy(): AnnotCalloutLine;

        /**
         * Frees the memory used by {@link Poppler.AnnotCalloutLine}.
         */
        free(): void;
    }


    /**
     * A {@link Poppler.AnnotMapping} structure represents the location
     * of `annot` on the page
     * 
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     */
    class AnnotMapping {
        static $gtype: GObject.GType<AnnotMapping>;

        // Fields
        area: Rectangle;

        annot: Annot;

        // Constructors

        constructor(properties?: Partial<{
            area: Rectangle;
        }>);

        static ["new"](): AnnotMapping;

        // Methods
        /**
         * Creates a copy of `mapping`
         * @returns a new allocated copy of `mapping`
         */
        copy(): AnnotMapping;

        /**
         * Frees the given {@link Poppler.AnnotMapping}
         */
        free(): void;
    }


    /**
     * @gir-type Alias
     */
    type AttachmentClass = typeof Attachment;

    /**
     * PopplerCertificateInfo contains detailed info about a signing certificate.
     * 
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     * @since 23.07.0
     */
    class CertificateInfo {
        static $gtype: GObject.GType<CertificateInfo>;

        // Constructors
        constructor(properties?: Partial<{}>);

        static ["new"](): CertificateInfo;

        // Methods
        /**
         * Copies `certificate_info`, creating an identical {@link Poppler.CertificateInfo}.
         * @returns a new {@link Poppler.CertificateInfo} structure identical to `certificate_info`
         * @since 23.07.0
         */
        copy(): CertificateInfo;

        /**
         * Frees `certificate_info`
         * @since 23.07.0
         */
        free(): void;

        /**
         * Get certificate expiration time
         * @returns certificate expiration time
         * @since 23.08.0
         */
        get_expiration_time(): GLib.DateTime;

        /**
         * Get certificate nick name
         * @returns certificate nick name
         * @since 23.07.0
         */
        get_id(): string;

        /**
         * Get certificate issuance time
         * @returns certificate issuance time
         * @since 23.08.0
         */
        get_issuance_time(): GLib.DateTime;

        /**
         * Get certificate issuer common name
         * @returns certificate issuer common name
         * @since 23.08.0
         */
        get_issuer_common_name(): string;

        /**
         * Get certificate issuer email
         * @returns certificate issuer email
         * @since 23.08.0
         */
        get_issuer_email(): string;

        /**
         * Get certificate issuer organization
         * @returns certificate issuer organization
         * @since 23.08.0
         */
        get_issuer_organization(): string;

        /**
         * Get certificate subject common name
         * @returns certificate subject common name
         * @since 23.07.0
         */
        get_subject_common_name(): string;

        /**
         * Get certificate subject email
         * @returns certificate subject email
         * @since 23.08.0
         */
        get_subject_email(): string;

        /**
         * Get certificate subject organization
         * @returns certificate subject organization
         * @since 23.08.0
         */
        get_subject_organization(): string;
    }


    /**
     * A {@link Poppler.Color} describes a RGB color. Color components
     * are values between 0 and 65535
     * 
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     */
    class Color {
        static $gtype: GObject.GType<Color>;

        // Fields
        red: number;

        green: number;

        blue: number;

        // Constructors

        constructor(properties?: Partial<{
            red: number;
            green: number;
            blue: number;
        }>);

        static ["new"](): Color;

        // Methods
        /**
         * Creates a copy of `color`
         * @returns a new allocated copy of `color`
         */
        copy(): Color;

        /**
         * Frees the given {@link Poppler.Color}
         */
        free(): void;
    }


    /**
     * Data structure for holding a destination
     * 
     * Note that `named_dest` is the string representation of the named
     * destination. This is the right form to pass to poppler functions,
     * e.g. `poppler_document_find_dest()`, but to get the destination as
     * it appears in the PDF itself, you need to convert it to a bytestring
     * with `poppler_named_dest_to_bytestring()` first.
     * Also note that `named_dest` does not have a defined encoding and
     * is not in a form suitable to be displayed to the user.
     * 
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     */
    class Dest {
        static $gtype: GObject.GType<Dest>;

        // Fields
        type: DestType;

        page_num: number;

        left: number;

        bottom: number;

        right: number;

        top: number;

        zoom: number;

        named_dest: string;

        change_left: number;

        change_top: number;

        change_zoom: number;

        // Methods
        /**
         * Copies `dest`, creating an identical {@link Poppler.Dest}.
         * @returns a new destination identical to `dest`
         */
        copy(): Dest;

        /**
         * Frees `dest`
         */
        free(): void;
    }


    /**
     * A {@link Poppler.FontDescription} structure represents the description
     * of a font. When used together with Pango, all the fields are
     * value-compatible with pango equivalent, although Pango font
     * descriptions may contain more information.
     * 
     * This type supports g_autoptr
     * @gir-type Struct
     * @since 24.12.0
     */
    class FontDescription {
        static $gtype: GObject.GType<FontDescription>;

        // Fields
        font_name: string;

        size_pt: number;

        stretch: Stretch;

        weight: Weight;

        style: Style;

        // Constructors
        constructor(font_name: string);

        static ["new"](font_name: string): FontDescription;

        // Methods
        /**
         * Creates a copy of `font_desc`
         * @returns a new allocated copy of `font_desc`
         */
        copy(): FontDescription;

        /**
         * Frees the given {@link Poppler.FontDescription}
         */
        free(): void;
    }


    /**
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     */
    abstract class FontsIter {
        static $gtype: GObject.GType<FontsIter>;

        // Methods
        /**
         * Creates a copy of `iter`
         * @returns a new allocated copy of `iter`
         */
        copy(): FontsIter;

        /**
         * Frees the given {@link Poppler.FontsIter}
         */
        free(): void;

        /**
         * Returns the encoding of the font associated with `iter`
         * @returns the font encoding
         * @since 0.20
         */
        get_encoding(): string;

        /**
         * The filename of the font associated with `iter` or `null` if
         * the font is embedded
         * @returns the filename of the font or `null` if font is embedded
         */
        get_file_name(): string;

        /**
         * Returns the type of the font associated with `iter`
         * @returns the font type
         */
        get_font_type(): FontType;

        /**
         * Returns the full name of the font associated with `iter`
         * @returns the font full name
         */
        get_full_name(): string;

        /**
         * Returns the name of the font associated with `iter`
         * @returns the font name
         */
        get_name(): string;

        /**
         * The name of the substitute font of the font associated with `iter` or `null` if
         * the font is embedded
         * @returns the name of the substitute font or `null` if font is embedded
         * @since 0.20
         */
        get_substitute_name(): string;

        /**
         * Returns whether the font associated with `iter` is embedded in the document
         * @returns `true` if font is embedded, `false` otherwise
         */
        is_embedded(): boolean;

        /**
         * Returns whether the font associated with `iter` is a subset of another font
         * @returns `true` if font is a subset, `false` otherwise
         */
        is_subset(): boolean;

        /**
         * Sets `iter` to point to the next font
         * @returns `true`, if `iter` was set to the next font
         */
        next(): boolean;
    }


    /**
     * A {@link Poppler.FormFieldMapping} structure represents the location
     * of `field` on the page
     * 
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     */
    class FormFieldMapping {
        static $gtype: GObject.GType<FormFieldMapping>;

        // Fields
        area: Rectangle;

        field: FormField;

        // Constructors

        constructor(properties?: Partial<{
            area: Rectangle;
        }>);

        static ["new"](): FormFieldMapping;

        // Methods
        /**
         * Creates a copy of `mapping`
         * @returns a new allocated copy of `mapping`
         */
        copy(): FormFieldMapping;

        /**
         * Frees the given {@link Poppler.FormFieldMapping}
         */
        free(): void;
    }


    /**
     * A {@link Poppler.ImageMapping} structure represents the location
     * of an image on the page
     * 
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     */
    class ImageMapping {
        static $gtype: GObject.GType<ImageMapping>;

        // Fields
        area: Rectangle;

        image_id: number;

        // Constructors

        constructor(properties?: Partial<{
            area: Rectangle;
            image_id: number;
        }>);

        static ["new"](): ImageMapping;

        // Methods
        /**
         * Creates a copy of `mapping`
         * @returns a new allocated copy of `mapping`
         */
        copy(): ImageMapping;

        /**
         * Frees the given {@link Poppler.ImageMapping}
         */
        free(): void;
    }


    /**
     * Interface for getting the Index of a poppler_document
     * 
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     */
    class IndexIter {
        static $gtype: GObject.GType<IndexIter>;

        // Constructors
        constructor(document: Document);

        static ["new"](document: Document): IndexIter;

        // Methods
        /**
         * Creates a new {@link Poppler.IndexIter} as a copy of `iter`.  This must be freed with
         * `poppler_index_iter_free()`.
         * @returns a new {@link Poppler.IndexIter}
         */
        copy(): IndexIter;

        /**
         * Frees `iter`.
         */
        free(): void;

        /**
         * Returns the {@link Poppler.Action} associated with `iter`.  It must be freed with
         * `poppler_action_free()`.
         * @returns a new {@link Poppler.Action}
         */
        get_action(): Action;

        /**
         * Returns a newly created child of `parent`, or `null` if the iter has no child.
         * See `poppler_index_iter_new()` for more information on this function.
         * @returns a new {@link Poppler.IndexIter}
         */
        get_child(): IndexIter;

        /**
         * Returns whether this node should be expanded by default to the user.  The
         * document can provide a hint as to how the document's index should be expanded
         * initially.
         * @returns `true`, if the document wants `iter` to be expanded
         */
        is_open(): boolean;

        /**
         * Sets `iter` to point to the next action at the current level, if valid.  See
         * `poppler_index_iter_new()` for more information.
         * @returns `true`, if `iter` was set to the next action
         */
        next(): boolean;
    }


    /**
     * Interface for getting the Layers of a poppler_document
     * 
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     */
    class LayersIter {
        static $gtype: GObject.GType<LayersIter>;

        // Constructors
        constructor(document: Document);

        static ["new"](document: Document): LayersIter;

        // Methods
        /**
         * Creates a new {@link Poppler.LayersIter} as a copy of `iter`.  This must be freed with
         * `poppler_layers_iter_free()`.
         * @returns a new {@link Poppler.LayersIter} Since 0.12
         */
        copy(): LayersIter;

        /**
         * Frees `iter`.
         * @since 0.12
         */
        free(): void;

        /**
         * Returns a newly created child of `parent`, or `null` if the iter has no child.
         * See `poppler_layers_iter_new()` for more information on this function.
         * @returns a new {@link Poppler.LayersIter}, or `null`
         * @since 0.12
         */
        get_child(): LayersIter;

        /**
         * Returns the {@link Poppler.Layer} associated with `iter`.
         * @returns a new {@link Poppler.Layer}, or `null` if there isn't any layer associated with `iter`
         * @since 0.12
         */
        get_layer(): Layer;

        /**
         * Returns the title associated with `iter`.  It must be freed with
         * `g_free()`.
         * @returns a new string containing the `iter`'s title or `null` if `iter` doesn't have a title. The returned string should be freed with `g_free()` when no longer needed.
         * @since 0.12
         */
        get_title(): string;

        /**
         * Sets `iter` to point to the next action at the current level, if valid.  See
         * `poppler_layers_iter_new()` for more information.
         * @returns `true`, if `iter` was set to the next action
         * @since 0.12
         */
        next(): boolean;
    }


    /**
     * A {@link Poppler.LinkMapping} structure represents the location
     * of `action` on the page
     * 
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     */
    class LinkMapping {
        static $gtype: GObject.GType<LinkMapping>;

        // Fields
        area: Rectangle;

        // Constructors

        constructor(properties?: Partial<{
            area: Rectangle;
        }>);

        static ["new"](): LinkMapping;

        // Methods
        /**
         * Creates a copy of `mapping`
         * @returns a new allocated copy of `mapping`
         */
        copy(): LinkMapping;

        /**
         * Frees the given {@link Poppler.LinkMapping}
         */
        free(): void;
    }


    /**
     * A {@link Poppler.PageRange} is used to specify a range of pages.
     * @gir-type Struct
     * @since 0.80
     */
    class PageRange {
        static $gtype: GObject.GType<PageRange>;

        // Fields
        start_page: number;

        end_page: number;

        // Constructors

        constructor(properties?: Partial<{
            start_page: number;
            end_page: number;
        }>);
    }


    /**
     * A {@link Poppler.PageTransition} structures describes a visual transition
     * to use when moving between pages during a presentation
     * 
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     */
    class PageTransition {
        static $gtype: GObject.GType<PageTransition>;

        // Fields
        type: PageTransitionType;

        alignment: PageTransitionAlignment;

        direction: PageTransitionDirection;

        duration: number;

        angle: number;

        scale: number;

        rectangular: boolean;

        duration_real: number;

        // Constructors

        constructor(properties?: Partial<{
            type: PageTransitionType;
            alignment: PageTransitionAlignment;
            direction: PageTransitionDirection;
            duration: number;
            angle: number;
            scale: number;
            rectangular: boolean;
            duration_real: number;
        }>);

        static ["new"](): PageTransition;

        // Methods
        /**
         * Creates a copy of `transition`
         * @returns a new allocated copy of `transition`
         */
        copy(): PageTransition;

        /**
         * Frees the given {@link Poppler.PageTransition}
         */
        free(): void;
    }


    /**
     * @gir-type Struct
     * @since 25.06.0
     */
    class Path {
        static $gtype: GObject.GType<Path>;

        // Constructors
        constructor(points: Point, n_points: bigint | number);

        static new_from_array(points: Point, n_points: bigint | number): Path;

        // Methods
        /**
         * Creates a copy of `path`.
         * @returns a new allocated copy of `path`
         * @since 25.06.0
         */
        copy(): Path;

        /**
         * Frees the given {@link Poppler.Path}.
         * @since 25.06.0
         */
        free(): void;

        /**
         * Returns the array of points of `path`.
         * @returns all the points of `path`
         * @since 25.06.0
         */
        get_points(): Point[];
    }


    /**
     * A {@link Poppler.Point} is used to describe a location point on a page
     * 
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     */
    class Point {
        static $gtype: GObject.GType<Point>;

        // Fields
        x: number;

        y: number;

        // Constructors

        constructor(properties?: Partial<{
            x: number;
            y: number;
        }>);

        static ["new"](): Point;

        // Methods
        /**
         * Creates a copy of `point`. The copy must be freed with `poppler_point_free()`
         * after use.
         * @returns a new allocated copy of `point`
         * @since 0.26
         */
        copy(): Point;

        /**
         * Frees the memory used by `point`
         * @since 0.26
         */
        free(): void;
    }


    /**
     * A {@link Poppler.Quadrilateral} is used to describe rectangle-like polygon
     *  with arbitrary inclination on a page.
     * 
     *  Since 24.10 this type supports g_autoptr
     * 
     *  Since: 0.26
     * @gir-type Struct
     */
    class Quadrilateral {
        static $gtype: GObject.GType<Quadrilateral>;

        // Fields
        p1: Point;

        p2: Point;

        p3: Point;

        p4: Point;

        // Constructors

        constructor(properties?: Partial<{
            p1: Point;
            p2: Point;
            p3: Point;
            p4: Point;
        }>);

        static ["new"](): Quadrilateral;

        // Methods
        /**
         * Creates a copy of `quad`. The copy must be freed with `poppler_quadrilateral_free()` after use.
         * @returns a new allocated copy of `quad`
         * @since 0.26
         */
        copy(): Quadrilateral;

        /**
         * Frees the memory used by `quad`
         * @since 0.26
         */
        free(): void;
    }


    /**
     * A {@link Poppler.Rectangle} is used to describe
     * locations on a page and bounding boxes
     * 
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     */
    class Rectangle {
        static $gtype: GObject.GType<Rectangle>;

        // Fields
        x1: number;

        y1: number;

        x2: number;

        y2: number;

        // Constructors

        constructor(properties?: Partial<{
            x1: number;
            y1: number;
            x2: number;
            y2: number;
        }>);

        static ["new"](): Rectangle;

        // Methods
        /**
         * Creates a copy of `rectangle`.
         * 
         * Note that you must only use this function on an allocated PopplerRectangle, as
         * returned by `poppler_rectangle_new()`, `poppler_rectangle_copy()`, or the list elements
         * returned from `poppler_page_find_text()` or `poppler_page_find_text_with_options()`.
         * @returns a new allocated copy of `rectangle`
         */
        copy(): Rectangle;

        /**
         * When using `poppler_page_find_text_with_options()` with the
         * {@link Poppler.FindFlags.MULTILINE} flag, a match may span more than one line,
         * and may have been formed by ignoring a hyphen at the end of the line.
         * When this happens at the end of the line corresponding to `rectangle`,
         * this function returns `true` (and then `poppler_rectangle_find_get_match_continued()`
         * will also return `true`); otherwise it returns `false`.
         * 
         * Note that you must only call this function on a {@link Poppler.Rectangle}
         * returned in the list from `poppler_page_find_text()` or
         * `poppler_page_find_text_with_options()`.
         * @returns whether a hyphen was ignored at the end of the line corresponding to `rectangle`.
         * @since 21.05.0
         */
        find_get_ignored_hyphen(): boolean;

        /**
         * When using `poppler_page_find_text_with_options()` with the
         * {@link Poppler.FindFlags.MULTILINE} flag, a match may span more than one line
         * and thus consist of more than one rectangle. Every rectangle belonging
         * to the same match will return `true` from this function, except for
         * the last rectangle, where this function will return `false`.
         * 
         * Note that you must only call this function on a {@link Poppler.Rectangle}
         * returned in the list from `poppler_page_find_text()` or
         * `poppler_page_find_text_with_options()`.
         * @returns whether there are more rectangles belonging to the same match
         * @since 21.05.0
         */
        find_get_match_continued(): boolean;

        /**
         * Frees the given {@link Poppler.Rectangle}.
         * 
         * Note that you must only use this function on an allocated PopplerRectangle, as
         * returned by `poppler_rectangle_new()`, `poppler_rectangle_copy()`, or the list elements
         * returned from `poppler_page_find_text()` or `poppler_page_find_text_with_options()`.
         */
        free(): void;
    }


    /**
     * PopplerSignatureInfo contains detailed info about a signature
     * contained in a form field.
     * 
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     * @since 21.12.0
     */
    abstract class SignatureInfo {
        static $gtype: GObject.GType<SignatureInfo>;

        // Methods
        /**
         * Copies `siginfo`, creating an identical {@link Poppler.SignatureInfo}.
         * @returns a new {@link Poppler.SignatureInfo} structure identical to `siginfo`
         * @since 21.12.0
         */
        copy(): SignatureInfo;

        /**
         * Frees `siginfo`
         * @since 21.12.0
         */
        free(): void;

        /**
         * Returns PopplerCertificateInfo for given PopplerSignatureInfo.
         * @returns certificate info of the signature
         * @since 23.08.0
         */
        get_certificate_info(): CertificateInfo;

        /**
         * Returns status of the certificate for given PopplerSignatureInfo.
         * @returns certificate status of the signature
         * @since 21.12.0
         */
        get_certificate_status(): CertificateStatus;

        /**
         * Returns local time of signing as GDateTime. This does not
         * contain information about time zone since it has not been
         * preserved during conversion.
         * Do not modify returned value since it is internal to
         * PopplerSignatureInfo.
         * @returns GDateTime
         * @since 21.12.0
         */
        get_local_signing_time(): GLib.DateTime;

        /**
         * Returns status of the signature for given PopplerSignatureInfo.
         * @returns signature status of the signature
         * @since 21.12.0
         */
        get_signature_status(): SignatureStatus;

        /**
         * Returns name of signer for given PopplerSignatureInfo.
         * @returns A string.
         * @since 21.12.0
         */
        get_signer_name(): string;
    }


    /**
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     */
    class SigningData {
        static $gtype: GObject.GType<SigningData>;

        // Constructors
        constructor(properties?: Partial<{}>);

        static ["new"](): SigningData;

        // Methods
        /**
         * Copies `signing_data`, creating an identical {@link Poppler.SigningData}.
         * @returns a new {@link Poppler.SigningData} structure identical to `signing_data`
         * @since 23.07.0
         */
        copy(): SigningData;

        /**
         * Frees `signing_data`
         * @since 23.07.0
         */
        free(): void;

        /**
         * Get signature background color.
         * @returns a {@link Poppler.Color}
         * @since 23.07.0
         */
        get_background_color(): Color;

        /**
         * Get signature border color.
         * @returns a {@link Poppler.Color}
         * @since 23.07.0
         */
        get_border_color(): Color;

        /**
         * Get signature border width.
         * @returns border width
         * @since 23.07.0
         */
        get_border_width(): number;

        /**
         * Get certification information.
         * @returns a {@link Poppler.CertificateInfo}
         * @since 23.07.0
         */
        get_certificate_info(): CertificateInfo;

        /**
         * Get destination file name.
         * @returns destination filename
         * @since 23.07.0
         */
        get_destination_filename(): string;

        /**
         * Get document owner password.
         * @returns document owner password (for encrypted files)
         * @since 23.07.0
         */
        get_document_owner_password(): string;

        /**
         * Get document user password.
         * @returns document user password (for encrypted files)
         * @since 23.07.0
         */
        get_document_user_password(): string;

        /**
         * Get field partial name.
         * @returns field partial name
         * @since 23.07.0
         */
        get_field_partial_name(): string;

        /**
         * Get signature font color.
         * @returns a {@link Poppler.Color}
         * @since 23.07.0
         */
        get_font_color(): Color;

        /**
         * Get signature font size.
         * @returns font size
         * @since 23.07.0
         */
        get_font_size(): number;

        /**
         * Get image path.
         * @returns image path
         * @since 23.07.0
         */
        get_image_path(): string;

        /**
         * Get signature left font size.
         * @returns left font size
         * @since 23.07.0
         */
        get_left_font_size(): number;

        /**
         * Get location.
         * @returns location
         * @since 23.07.0
         */
        get_location(): string;

        /**
         * Get page.
         * @returns page number
         * @since 23.07.0
         */
        get_page(): number;

        /**
         * Get signing key password.
         * @returns password
         * @since 23.07.0
         */
        get_password(): string;

        /**
         * Get reason.
         * @returns reason
         * @since 23.07.0
         */
        get_reason(): string;

        /**
         * Get signature rectangle.
         * @returns a {@link Poppler.Rectangle}
         * @since 23.07.0
         */
        get_signature_rectangle(): Rectangle;

        /**
         * Get signature text.
         * @returns signature text
         * @since 23.07.0
         */
        get_signature_text(): string;

        /**
         * Get signature text left.
         * @returns signature text left
         * @since 23.07.0
         */
        get_signature_text_left(): string;

        /**
         * Set signature background color.
         * @param background_color a {@link Poppler.Color} to be used for signature background
         * @since 23.07.0
         */
        set_background_color(background_color: Color): void;

        /**
         * Set signature border color.
         * @param border_color a {@link Poppler.Color} to be used for signature border
         * @since 23.07.0
         */
        set_border_color(border_color: Color): void;

        /**
         * Set signature border width.
         * @param border_width border width
         * @since 23.07.0
         */
        set_border_width(border_width: number): void;

        /**
         * Set certification information.
         * @param certificate_info a {@link Poppler.CertificateInfo}
         * @since 23.07.0
         */
        set_certificate_info(certificate_info: CertificateInfo): void;

        /**
         * Set destination file name.
         * @param filename destination filename
         * @since 23.07.0
         */
        set_destination_filename(filename: string): void;

        /**
         * Set document owner password (for encrypted files).
         * @param document_owner_password document owner password
         * @since 23.07.0
         */
        set_document_owner_password(document_owner_password: string): void;

        /**
         * Set document user password (for encrypted files).
         * @param document_user_password document user password
         * @since 23.07.0
         */
        set_document_user_password(document_user_password: string): void;

        /**
         * Set field partial name (existing field id or a new one) where signature is placed.
         * @param field_partial_name a field partial name
         * @since 23.07.0
         */
        set_field_partial_name(field_partial_name: string): void;

        /**
         * Set signature font color.
         * @param font_color a {@link Poppler.Color} to be used as signature font color
         * @since 23.07.0
         */
        set_font_color(font_color: Color): void;

        /**
         * Set signature font size (>0).
         * @param font_size signature font size
         * @since 23.07.0
         */
        set_font_size(font_size: number): void;

        /**
         * Set signature background (watermark) image path.
         * @param image_path signature image path
         * @since 23.07.0
         */
        set_image_path(image_path: string): void;

        /**
         * Set signature left font size (> 0).
         * @param font_size signature font size
         * @since 23.07.0
         */
        set_left_font_size(font_size: number): void;

        /**
         * Set signature location (e.g. "At my desk").
         * @param location a location
         * @since 23.07.0
         */
        set_location(location: string): void;

        /**
         * Set page (>=0).
         * @param page a page number
         * @since 23.07.0
         */
        set_page(page: number): void;

        /**
         * Set password for the signing key.
         * @param password a password
         * @since 23.07.0
         */
        set_password(password: string): void;

        /**
         * Set reason for signature (e.g. I'm approver).
         * @param reason a reason
         * @since 23.07.0
         */
        set_reason(reason: string): void;

        /**
         * Set signature rectangle.
         * @param signature_rect a {@link Poppler.Rectangle} where signature should be shown
         * @since 23.07.0
         */
        set_signature_rectangle(signature_rect: Rectangle): void;

        /**
         * Set signature text.
         * @param signature_text text to show as main signature
         * @since 23.07.0
         */
        set_signature_text(signature_text: string): void;

        /**
         * Set small signature text on the left hand.
         * @param signature_text_left text to show as small left signature
         * @since 23.07.0
         */
        set_signature_text_left(signature_text_left: string): void;
    }


    /**
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     */
    class StructureElementIter {
        static $gtype: GObject.GType<StructureElementIter>;

        // Constructors
        constructor(poppler_document: Document);

        static ["new"](poppler_document: Document): StructureElementIter;

        // Methods
        /**
         * Creates a new {@link Poppler.StructureElementIter} as a copy of `iter`. The
         * returned value must be freed with `poppler_structure_element_iter_free()`.
         * @returns a new {@link Poppler.StructureElementIter}
         * @since 0.26
         */
        copy(): StructureElementIter;

        /**
         * Frees `iter`.
         * @since 0.26
         */
        free(): void;

        /**
         * Returns a new iterator to the children elements of the
         * {@link Poppler.StructureElement} associated with `iter`. The returned value must
         * be freed with `poppler_structure_element_iter_free()`.
         * @returns a new {@link Poppler.StructureElementIter}
         * @since 0.26
         */
        get_child(): StructureElementIter;

        /**
         * Returns the {@link Poppler.StructureElementIter} associated with `iter`.
         * @returns a new {@link Poppler.StructureElementIter}
         * @since 0.26
         */
        get_element(): StructureElement;

        /**
         * Sets `iter` to point to the next structure element at the current level
         * of the tree, if valid. See `poppler_structure_element_iter_new()` for more
         * information.
         * @returns `true`, if `iter` was set to the next structure element
         * @since 0.26
         */
        next(): boolean;
    }


    /**
     * A {@link Poppler.TextAttributes} is used to describe text attributes of a range of text
     * @gir-type Struct
     * @since 0.18
     */
    class TextAttributes {
        static $gtype: GObject.GType<TextAttributes>;

        // Fields
        font_name: string;

        font_size: number;

        is_underlined: boolean;

        color: Color;

        start_index: number;

        end_index: number;

        // Constructors

        constructor(properties?: Partial<{
            font_name: string;
            font_size: number;
            is_underlined: boolean;
            color: Color;
            start_index: number;
            end_index: number;
        }>);

        static ["new"](): TextAttributes;

        // Methods
        /**
         * Creates a copy of `text_attrs`
         * @returns a new allocated copy of `text_attrs`
         * @since 0.18
         */
        copy(): TextAttributes;

        /**
         * Frees the given {@link Poppler.TextAttributes}
         * @since 0.18
         */
        free(): void;
    }


    /**
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     */
    abstract class TextSpan {
        static $gtype: GObject.GType<TextSpan>;

        // Methods
        /**
         * Makes a copy of a text span.
         * @returns A new {@link Poppler.TextSpan}
         * @since 0.26
         */
        copy(): TextSpan;

        /**
         * Frees a text span.
         * @since 0.26
         */
        free(): void;

        /**
         * Obtains the color in which the text is to be rendered.
         * @since 0.26
         */
        get_color(): Color;

        /**
         * Obtains the name of the font in which the span is to be rendered.
         * @returns A string containing the font name, or   `null` if a font is not defined.
         * @since 0.26
         */
        get_font_name(): string;

        /**
         * Obtains the text contained in the span.
         * @returns A string.
         * @since 0.26
         */
        get_text(): string;

        /**
         * Check whether a text span is meant to be rendered using a bold font.
         * @returns Whether the span uses bold font.
         * @since 0.26
         */
        is_bold_font(): boolean;

        /**
         * Check wether a text span is meant to be rendered using a fixed-width font.
         * @returns Whether the span uses a fixed-width font.
         * @since 0.26
         */
        is_fixed_width_font(): boolean;

        /**
         * Check whether a text span is meant to be rendered using a serif font.
         * @returns Whether the span uses a serif font.
         * @since 0.26
         */
        is_serif_font(): boolean;
    }


    /**
     * A generic wrapper for actions that exposes only {@link Poppler.ActionType}.
     * 
     * Since 24.10 this type supports g_autoptr
     * @gir-type Struct
     */
    class Action {
        static $gtype: GObject.GType<Action>;

        // Fields
        type: ActionType;

        // Methods
        /**
         * Copies `action`, creating an identical {@link Poppler.Action}.
         * @returns a new action identical to `action`
         */
        copy(): Action;

        /**
         * Frees `action`
         */
        free(): void;
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

export default Poppler;

// END
