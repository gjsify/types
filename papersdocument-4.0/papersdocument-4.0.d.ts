
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
import type Pango from '@girs/pango-1.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type Gdk from '@girs/gdk-4.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace PapersDocument {

    /**
     * PapersDocument-4.0
     */


    /**
     * @gir-type Enum
     */
    export namespace AnnotationTextIcon {
        export const $gtype: GObject.GType<AnnotationTextIcon>;
    }

    /**
     * @gir-type Enum
     */
    enum AnnotationTextIcon {
        NOTE = 0,
        COMMENT = 1,
        KEY = 2,
        HELP = 3,
        NEW_PARAGRAPH = 4,
        PARAGRAPH = 5,
        INSERT = 6,
        CROSS = 7,
        CIRCLE = 8,
        UNKNOWN = 9,
    }


    /**
     * @gir-type Enum
     */
    export namespace AnnotationTextMarkupType {
        export const $gtype: GObject.GType<AnnotationTextMarkupType>;
    }

    /**
     * @gir-type Enum
     */
    enum AnnotationTextMarkupType {
        HIGHLIGHT = 0,
        STRIKE_OUT = 1,
        UNDERLINE = 2,
        SQUIGGLY = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace AnnotationType {
        export const $gtype: GObject.GType<AnnotationType>;
    }

    /**
     * @gir-type Enum
     */
    enum AnnotationType {
        UNKNOWN = 0,
        TEXT = 1,
        FREE_TEXT = 2,
        ATTACHMENT = 3,
        TEXT_MARKUP = 4,
        STAMP = 5,
        INK = 6,
    }


    /**
     * @gir-type Enum
     */
    export namespace AnnotationsOverMarkup {
        export const $gtype: GObject.GType<AnnotationsOverMarkup>;
    }

    /**
     * @gir-type Enum
     */
    enum AnnotationsOverMarkup {
        NOT_IMPLEMENTED = 0,
        UNKNOWN = 1,
        YES = 2,
        NOT = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace CertificateStatus {
        export const $gtype: GObject.GType<CertificateStatus>;
    }

    /**
     * @gir-type Enum
     */
    enum CertificateStatus {
        TRUSTED = 0,
        UNTRUSTED_ISSUER = 1,
        UNKNOWN_ISSUER = 2,
        REVOKED = 3,
        EXPIRED = 4,
        GENERIC_ERROR = 5,
        NOT_VERIFIED = 6,
    }


    /**
     * @gir-type Enum
     */
    export namespace CompressionType {
        export const $gtype: GObject.GType<CompressionType>;
    }

    /**
     * @gir-type Enum
     */
    enum CompressionType {
        NONE = 0,
        BZIP2 = 1,
        GZIP = 2,
        LZMA = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace DocumentContainsJS {
        export const $gtype: GObject.GType<DocumentContainsJS>;
    }

    /**
     * @gir-type Enum
     */
    enum DocumentContainsJS {
        UNKNOWN = 0,
        NO = 1,
        YES = 2,
    }


    /**
     * @gir-type Struct
     */
    class DocumentError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static INVALID: number;

        static UNSUPPORTED_CONTENT: number;

        static ENCRYPTED: number;

        // Constructors
        constructor(options: { message: string; code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace DocumentLayout {
        export const $gtype: GObject.GType<DocumentLayout>;
    }

    /**
     * @gir-type Enum
     */
    enum DocumentLayout {
        SINGLE_PAGE = 0,
        ONE_COLUMN = 1,
        TWO_COLUMN_LEFT = 2,
        TWO_COLUMN_RIGHT = 3,
        TWO_PAGE_LEFT = 4,
        TWO_PAGE_RIGHT = 5,
    }


    /**
     * @gir-type Enum
     */
    export namespace DocumentMode {
        export const $gtype: GObject.GType<DocumentMode>;
    }

    /**
     * @gir-type Enum
     */
    enum DocumentMode {
        NONE = 0,
        USE_OC = 1,
        USE_THUMBS = 2,
        FULL_SCREEN = 3,
        USE_ATTACHMENTS = 4,
        PRESENTATION = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace FileExporterFormat {
        export const $gtype: GObject.GType<FileExporterFormat>;
    }

    /**
     * @gir-type Enum
     */
    enum FileExporterFormat {
        UNKNOWN = 0,
        PS = 1,
        PDF = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace FormFieldButtonType {
        export const $gtype: GObject.GType<FormFieldButtonType>;
    }

    /**
     * @gir-type Enum
     */
    enum FormFieldButtonType {
        PUSH = 0,
        CHECK = 1,
        RADIO = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace FormFieldChoiceType {
        export const $gtype: GObject.GType<FormFieldChoiceType>;
    }

    /**
     * @gir-type Enum
     */
    enum FormFieldChoiceType {
        COMBO = 0,
        LIST = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace FormFieldTextType {
        export const $gtype: GObject.GType<FormFieldTextType>;
    }

    /**
     * @gir-type Enum
     */
    enum FormFieldTextType {
        NORMAL = 0,
        MULTILINE = 1,
        FILE_SELECT = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace LinkActionType {
        export const $gtype: GObject.GType<LinkActionType>;
    }

    /**
     * @gir-type Enum
     */
    enum LinkActionType {
        GOTO_DEST = 0,
        GOTO_REMOTE = 1,
        EXTERNAL_URI = 2,
        LAUNCH = 3,
        NAMED = 4,
        LAYERS_STATE = 5,
        RESET_FORM = 6,
    }


    /**
     * @gir-type Enum
     */
    export namespace LinkDestType {
        export const $gtype: GObject.GType<LinkDestType>;
    }

    /**
     * @gir-type Enum
     */
    enum LinkDestType {
        PAGE = 0,
        XYZ = 1,
        FIT = 2,
        FITH = 3,
        FITV = 4,
        FITR = 5,
        NAMED = 6,
        PAGE_LABEL = 7,
        UNKNOWN = 8,
    }


    /**
     * @gir-type Enum
     */
    export namespace SelectionStyle {
        export const $gtype: GObject.GType<SelectionStyle>;
    }

    /**
     * @gir-type Enum
     */
    enum SelectionStyle {
        GLYPH = 0,
        WORD = 1,
        LINE = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace SignatureStatus {
        export const $gtype: GObject.GType<SignatureStatus>;
    }

    /**
     * @gir-type Enum
     */
    enum SignatureStatus {
        VALID = 0,
        INVALID = 1,
        DIGEST_MISMATCH = 2,
        DECODING_ERROR = 3,
        GENERIC_ERROR = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace TransitionEffectAlignment {
        export const $gtype: GObject.GType<TransitionEffectAlignment>;
    }

    /**
     * @gir-type Enum
     */
    enum TransitionEffectAlignment {
        HORIZONTAL = 0,
        VERTICAL = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace TransitionEffectDirection {
        export const $gtype: GObject.GType<TransitionEffectDirection>;
    }

    /**
     * @gir-type Enum
     */
    enum TransitionEffectDirection {
        INWARD = 0,
        OUTWARD = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace TransitionEffectType {
        export const $gtype: GObject.GType<TransitionEffectType>;
    }

    /**
     * @gir-type Enum
     */
    enum TransitionEffectType {
        REPLACE = 0,
        SPLIT = 1,
        BLINDS = 2,
        BOX = 3,
        WIPE = 4,
        DISSOLVE = 5,
        GLITTER = 6,
        FLY = 7,
        PUSH = 8,
        COVER = 9,
        UNCOVER = 10,
        FADE = 11,
    }


    /**
     * The major version number of the EV library
     * (e.g. in version 3.1.4 this is 3).
     * @default 51
     */
    const MAJOR_VERSION: number;

    function backend_query_type(): GObject.GType;

    function document_error_quark(): GLib.Quark;

    /**
     * Compresses the file at `uri`.
     * 
     * If `type` is {@link PapersDocument.CompressionType.NONE}, it does nothing and returns `null`.
     * 
     * Otherwise, it returns the filename of a
     * temporary file containing the compressed data from the file at `uri`.
     * 
     * On error it returns `null` and fills in `error`.
     * 
     * It is the caller's responsibility to unlink the temp file after use.
     * @param uri a file URI
     * @param type the compression type
     * @returns a newly allocated string URI, or `null` on error
     * @throws GLib.Error
     */
    function file_compress(uri: string, type: CompressionType): string;

    /**
     * Performs a `g_file_copy_attributes()` with {@link Gio.FileCopyFlags.ALL_METADATA}
     * from `from` to `to`.
     * @param from the source URI
     * @param to the target URI
     * @returns `true` if the attributes were copied successfully, `false` otherwise.
     * @throws GLib.Error
     */
    function file_copy_metadata(from: string, to: string): boolean;

    /**
     * @param uri the URI
     * @param fast whether to use fast MIME type detection
     * @returns a newly allocated string with the MIME type of the file at   `uri`, or `null` on error or if the MIME type could not be determined
     * @throws GLib.Error
     */
    function file_get_mime_type(uri: string, fast: boolean): string;

    /**
     * @param fd an file descriptor (must be seekable)
     * @returns a newly allocated string with the MIME type of the file referred to   by `fd`, or `null` on error or if the MIME type could not be determined
     * @throws GLib.Error
     */
    function file_get_mime_type_from_fd(fd: number): string;

    /**
     * @param file 
     */
    function file_is_temp(file: Gio.File): boolean;

    /**
     * Uncompresses the file at `uri`.
     * 
     * If `type` is {@link PapersDocument.CompressionType.NONE}, it does nothing and returns `null`.
     * 
     * Otherwise, it returns the filename of a
     * temporary file containing the decompressed data from the file at `uri`.
     * On error it returns `null` and fills in `error`.
     * 
     * It is the caller's responsibility to unlink the temp file after use.
     * @param uri a file URI
     * @param type the compression type
     * @returns a newly allocated string URI, or `null` on error
     * @throws GLib.Error
     */
    function file_uncompress(uri: string, type: CompressionType): string;

    /**
     * Initializes the papers document library, and binds the papers
     * gettext domain.
     * 
     * You must call this before calling any other function in the papers
     * document library.
     * @returns `true` if any backends were found; `false` otherwise
     */
    function init(): boolean;

    /**
     * Creates a temp file in the papers temp directory.
     * @param tmpl a template string; must contain 'XXXXXX', but not necessarily as a suffix
     * @returns a file descriptor to the newly created temp file name, or %-1   on error with `error` filled in
     * @throws GLib.Error
     */
    function mkstemp(tmpl: string): [number, string];

    /**
     * Creates a temp {@link Gio.File} in the papers temp directory. See `pps_mkstemp()` for more information.
     * @param tmpl a template string; must contain 'XXXXXX', but not necessarily as a suffix
     * @returns a newly allocated {@link Gio.File} for the newly created temp file name, or `null`   on error with `error` filled in
     * @throws GLib.Error
     */
    function mkstemp_file(tmpl: string): Gio.File;

    /**
     * @param a 
     * @param b 
     */
    function rect_cmp(a: Rectangle, b: Rectangle): number;

    /**
     * Shuts the papers document library down.
     */
    function shutdown(): void;

    /**
     * @param file 
     */
    function tmp_file_unlink(file: Gio.File): void;

    /**
     * @param filename 
     */
    function tmp_filename_unlink(filename: string): void;

    /**
     * @param uri 
     */
    function tmp_uri_unlink(uri: string): void;

    /**
     * Performs a `g_file_copy()` from `from` to `to`.
     * @param from the source URI
     * @param to the target URI
     * @returns `true` on success, or `false` on error with `error` filled in
     * @throws GLib.Error
     */
    function xfer_uri_simple(from: string, to: string): boolean;

    /**
     * Parse XMP based document metadata into {@link DocumentInfo}
     * @param metadata XMP document data
     * @param size size of `metadata` in bytes
     * @param info target to update
     * @returns `true` iff `metadata` could be successfully parsed
     */
    function xmp_parse(metadata: string, size: bigint | number, info: DocumentInfo): boolean;

    /**
     * @gir-type Callback
     */
    interface SignaturePasswordCallback {
        (text: string): string | null;
    }

    /**
     * @gir-type Flags
     */
    export namespace DocumentInfoFields {
        export const $gtype: GObject.GType<DocumentInfoFields>;
    }

    /**
     * @gir-type Flags
     */
    enum DocumentInfoFields {
        TITLE = 1,
        FORMAT = 2,
        AUTHOR = 4,
        SUBJECT = 8,
        KEYWORDS = 16,
        LAYOUT = 32,
        CREATOR = 64,
        PRODUCER = 128,
        CREATION_DATETIME = 256,
        MOD_DATETIME = 512,
        LINEARIZED = 1024,
        START_MODE = 2048,
        UI_HINTS = 4096,
        PERMISSIONS = 8192,
        N_PAGES = 16384,
        SECURITY = 32768,
        PAPER_SIZE = 65536,
        LICENSE = 131072,
        CONTAINS_JS = 262144,
    }


    /**
     * @gir-type Flags
     */
    export namespace DocumentLoadFlags {
        export const $gtype: GObject.GType<DocumentLoadFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum DocumentLoadFlags {
        NONE = 0,
        NO_CACHE = 1,
    }


    /**
     * @gir-type Flags
     */
    export namespace DocumentPermissions {
        export const $gtype: GObject.GType<DocumentPermissions>;
    }

    /**
     * @gir-type Flags
     */
    enum DocumentPermissions {
        OK_TO_PRINT = 1,
        OK_TO_MODIFY = 2,
        OK_TO_COPY = 4,
        OK_TO_ADD_NOTES = 8,
        FULL = 15,
    }


    /**
     * @gir-type Flags
     */
    export namespace DocumentUIHints {
        export const $gtype: GObject.GType<DocumentUIHints>;
    }

    /**
     * @gir-type Flags
     */
    enum DocumentUIHints {
        HIDE_TOOLBAR = 1,
        HIDE_MENUBAR = 2,
        HIDE_WINDOWUI = 4,
        FIT_WINDOW = 8,
        CENTER_WINDOW = 16,
        DISPLAY_DOC_TITLE = 32,
        DIRECTION_RTL = 64,
    }


    /**
     * @gir-type Flags
     */
    export namespace FileExporterCapabilities {
        export const $gtype: GObject.GType<FileExporterCapabilities>;
    }

    /**
     * @gir-type Flags
     */
    enum FileExporterCapabilities {
        PAGE_SET = 1,
        COPIES = 2,
        COLLATE = 4,
        REVERSE = 8,
        SCALE = 16,
        GENERATE_PDF = 32,
        GENERATE_PS = 64,
        PREVIEW = 128,
        NUMBER_UP = 256,
    }


    /**
     * @gir-type Flags
     */
    export namespace FindOptions {
        export const $gtype: GObject.GType<FindOptions>;
    }

    /**
     * @gir-type Flags
     */
    enum FindOptions {
        DEFAULT = 0,
        CASE_SENSITIVE = 1,
        WHOLE_WORDS_ONLY = 2,
    }


    /**
     * @gir-type Flags
     */
    export namespace RenderAnnotsFlags {
        export const $gtype: GObject.GType<RenderAnnotsFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum RenderAnnotsFlags {
        NONE = 0,
        TEXT = 1,
        LINK = 2,
        FREETEXT = 4,
        LINE = 8,
        SQUARE = 16,
        CIRCLE = 32,
        POLYGON = 64,
        POLYLINE = 128,
        HIGHLIGHT = 256,
        UNDERLINE = 512,
        SQUIGGLY = 1024,
        STRIKEOUT = 2048,
        STAMP = 4096,
        CARET = 8192,
        INK = 16384,
        POPUP = 32768,
        FILEATTACHMENT = 65536,
        SOUND = 131072,
        MOVIE = 262144,
        WIDGET = 524288,
        SCREEN = 1048576,
        PRINTERMARK = 2097152,
        TRAPNET = 4194304,
        WATERMARK = 8388608,
        "3D" = 16777216,
        RICHMEDIA = 33554432,
        PRINT_DOCUMENT = 524288,
        PRINT_MARKUP = -32800771,
        PRINT_STAMP = 528384,
        PRINT_ALL = -32800771,
        ALL = 67108863,
    }


    namespace Annotation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::area": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::contents": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::modified": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::page": (pspec: GObject.ParamSpec) => void;
            "notify::rgba": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            area: Rectangle;
            border_width: number;
            borderWidth: number;
            contents: string;
            hidden: boolean;
            modified: string;
            name: string;
            page: Page;
            rgba: Gdk.RGBA;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Annotation extends GObject.Object {
        static $gtype: GObject.GType<Annotation>;

        // Properties
        /**
         * The area of the page where the annotation is placed.
         * 
         * Since 3.18
         */
        get area(): Rectangle;
        set area(val: Rectangle);

        /**
         * The border width of the annotation. This is only partially implemented, as there is no way
         * to set the color. Thus, it may only be used for padding at this moment.
         * @since 48.0
         * @default 0
         */
        get border_width(): number;
        set border_width(val: number);

        /**
         * The border width of the annotation. This is only partially implemented, as there is no way
         * to set the color. Thus, it may only be used for padding at this moment.
         * @since 48.0
         * @default 0
         */
        get borderWidth(): number;
        set borderWidth(val: number);

        /**
         * @default null
         */
        get contents(): string;
        set contents(val: string);

        /**
         * A flag to hide an annotation from the view.
         * @since 48.0
         * @default false
         */
        get hidden(): boolean;
        set hidden(val: boolean);

        /**
         * @default null
         */
        get modified(): string;
        set modified(val: string);

        /**
         * @default null
         */
        get name(): string;
        set name(val: string);

        /**
         * @construct-only
         */
        set page(val: Page);

        /**
         * The colour of the annotation as a {@link Gdk.RGBA}.
         */
        get rgba(): Gdk.RGBA;
        set rgba(val: Gdk.RGBA);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Annotation.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Annotation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Annotation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Annotation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Annotation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Annotation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Annotation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Annotation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Compare `annot` and `other`.
         * @param other another {@link PapersDocument.Annotation}
         * @returns `true` if `annot` is equal to `other`, `false` otherwise
         */
        equal(other: Annotation): boolean;

        get_annotation_type(): AnnotationType;

        /**
         * Gets the area of `annot`.
         */
        get_area(): Rectangle;

        /**
         * Gets the border width of `annot`.
         * @since 48.0
         */
        get_border_width(): number;

        /**
         * Get the contents of `annot`. The contents of
         * `annot` is the text that is displayed in the annotation, or an
         * alternate description of the annotation's content for non-text annotations
         * @returns a string with the contents of the annotation or `null` if `annot` has no contents.
         */
        get_contents(): string;

        /**
         * Gets the hidden flag of `annot`, i.e. whether it is hidden or not.
         * @since 48.0
         */
        get_hidden(): boolean;

        /**
         * Get the last modification date of `annot`.
         * @returns A string containing the last modification date.
         */
        get_modified(): string;

        /**
         * Get the name of `annot`. The name of the annotation is a string
         * that uniquely indenftifies `annot` amongs all the annotations
         * in the same page.
         * @returns the string with the annotation's name.
         */
        get_name(): string;

        /**
         * Get the page where `annot` appears.
         * @returns the {@link PapersDocument.Page} where `annot` appears
         */
        get_page(): Page;

        /**
         * Get the index of the page where `annot` appears. Note that the index
         * is 0 based.
         * @returns the page index.
         */
        get_page_index(): number;

        /**
         * Gets the color of `annot`.
         */
        get_rgba(): Gdk.RGBA;

        /**
         * @param value 
         */
        get_value_last_property(value: GObject.Value | any): void;

        /**
         * Set the area of the annotation to `area`.
         * @param area a {@link PapersDocument.Rectangle}
         * @returns `true` if the area has been changed, `false` otherwise
         */
        set_area(area: Rectangle): boolean;

        /**
         * Set the area of the annotation to `area`.
         * @param width double
         * @returns `true` if the border width has been changed, `false` otherwise
         * @since 48.0
         */
        set_border_width(width: number): boolean;

        /**
         * Set the contents of `annot`. You can monitor
         * changes in the annotation's  contents by connecting to
         * notify::contents signal of `annot`.
         * @param contents 
         * @returns `true` if the contents have been changed, `false` otherwise.
         */
        set_contents(contents: string): boolean;

        /**
         * Set whether the annotation is hidden or not.
         * @param hidden a boolean
         * @returns `true` if the visibility of the annotation has been changed, `false` otherwise
         * @since 48.0
         */
        set_hidden(hidden: boolean): boolean;

        /**
         * Set the last modification date of `annot` to `modified`. To
         * set the last modification date using a `time_t`, use
         * `pps_annotation_set_modified_from_time_t()` instead. You can monitor
         * changes to the last modification date by connecting to the
         * notify::modified signal on `annot`.
         * @param modified string with the last modification date.
         * @returns `true` if the last modification date has been updated, `false` otherwise.
         */
        set_modified(modified: string): boolean;

        /**
         * Set the last modification date of `annot` to `utime`.  You can
         * monitor changes to the last modification date by connecting to the
         * notify::modified sinal on `annot`.
         * For the time-format used, see `pps_document_misc_format_datetime()`.
         * @param utime a `time_t`
         * @returns `true` if the last modified date has been updated, `false` otherwise.
         */
        set_modified_from_time_t(utime: bigint | number): boolean;

        /**
         * Set the name of `annot`.
         * You can monitor changes of the annotation name by connecting
         * to the notify::name signal on `annot`.
         * @param name 
         * @returns `true` when the name has been changed, `false` otherwise.
         */
        set_name(name: string): boolean;

        /**
         * Set the color of the annotation to `rgba`.
         * @param rgba a {@link Gdk.RGBA}
         * @returns `true` if the color has been changed, `false` otherwise
         */
        set_rgba(rgba: Gdk.RGBA): boolean;
    }


    namespace AnnotationAttachment {
        // Signal signatures
        interface SignalSignatures extends AnnotationMarkup.SignalSignatures {
            "notify::attachment": (pspec: GObject.ParamSpec) => void;
            "notify::can-have-popup": (pspec: GObject.ParamSpec) => void;
            "notify::has-popup": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::popup-is-open": (pspec: GObject.ParamSpec) => void;
            "notify::rectangle": (pspec: GObject.ParamSpec) => void;
            "notify::area": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::contents": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::modified": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::page": (pspec: GObject.ParamSpec) => void;
            "notify::rgba": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends AnnotationMarkup.ConstructorProps {
            attachment: Attachment;
        }
    }

    /**
     * @gir-type Class
     */
    class AnnotationAttachment extends AnnotationMarkup {
        static $gtype: GObject.GType<AnnotationAttachment>;

        // Properties
        get attachment(): Attachment;
        set attachment(val: Attachment);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotationAttachment.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotationAttachment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](page: Page, attachment: Attachment): AnnotationAttachment;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotationAttachment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationAttachment.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotationAttachment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationAttachment.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotationAttachment.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotationAttachment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns an {@link PapersDocument.Attachment}
         */
        get_attachment(): Attachment;

        /**
         * @param attachment 
         */
        set_attachment(attachment: Attachment): boolean;
    }


    namespace AnnotationFreeText {
        // Signal signatures
        interface SignalSignatures extends Annotation.SignalSignatures {
            "notify::font-desc": (pspec: GObject.ParamSpec) => void;
            "notify::font-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::area": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::contents": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::modified": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::page": (pspec: GObject.ParamSpec) => void;
            "notify::rgba": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Annotation.ConstructorProps {
            font_desc: Pango.FontDescription;
            fontDesc: Pango.FontDescription;
            font_rgba: Gdk.RGBA;
            fontRgba: Gdk.RGBA;
        }
    }

    /**
     * @gir-type Class
     */
    class AnnotationFreeText extends Annotation {
        static $gtype: GObject.GType<AnnotationFreeText>;

        // Properties
        get font_desc(): Pango.FontDescription;
        set font_desc(val: Pango.FontDescription);

        get fontDesc(): Pango.FontDescription;
        set fontDesc(val: Pango.FontDescription);

        get font_rgba(): Gdk.RGBA;
        set font_rgba(val: Gdk.RGBA);

        get fontRgba(): Gdk.RGBA;
        set fontRgba(val: Gdk.RGBA);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotationFreeText.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotationFreeText.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](page: Page): AnnotationFreeText;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotationFreeText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationFreeText.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotationFreeText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationFreeText.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotationFreeText.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotationFreeText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Resize the annotation so as all the text fits in its rect, according to Pango metrics.
         * This should typically be called every time the content is changed unless the free text
         * annotation is supposed to be fixed width for instance.
         * @param ctx a valid {@link Pango.Context}
         * @since 48.0
         */
        auto_resize(ctx: Pango.Context): void;

        /**
         * Returns a copy of the font descption used by the annotation.
         * @returns the font description used to display the annotation.
         * @since 48.0
         */
        get_font_description(): Pango.FontDescription;

        /**
         * Gets the text color of `annot`.
         * @returns the font RGBA, must be freed by the caller
         * @since 48.0
         */
        get_font_rgba(): Gdk.RGBA;

        /**
         * Set the font of the free text annotation to annotation to `font_desc`.
         * @param font_desc a {@link Pango.FontDescription}
         * @returns `true` if the font description has been changed, `false` otherwise
         * @since 48.0
         */
        set_font_description(font_desc: Pango.FontDescription): boolean;

        /**
         * Set the text color of the annotation to `rgba`.
         * @param rgba a {@link Gdk.RGBA}
         * @returns `true` if the color has been changed, `false` otherwise
         * @since 48.0
         */
        set_font_rgba(rgba: Gdk.RGBA): boolean;
    }


    namespace AnnotationInk {
        // Signal signatures
        interface SignalSignatures extends Annotation.SignalSignatures {
            "notify::highlight": (pspec: GObject.ParamSpec) => void;
            "notify::ink-list": (pspec: GObject.ParamSpec) => void;
            "notify::area": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::contents": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::modified": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::page": (pspec: GObject.ParamSpec) => void;
            "notify::rgba": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Annotation.ConstructorProps {
            highlight: boolean;
            ink_list: InkList;
            inkList: InkList;
        }
    }

    /**
     * @gir-type Class
     */
    class AnnotationInk extends Annotation {
        static $gtype: GObject.GType<AnnotationInk>;

        // Properties
        /**
         * @construct-only
         * @default false
         */
        set highlight(val: boolean);

        get ink_list(): InkList;
        set ink_list(val: InkList);

        get inkList(): InkList;
        set inkList(val: InkList);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotationInk.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotationInk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](page: Page): AnnotationInk;

        static new_highlight(page: Page): AnnotationInk;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotationInk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationInk.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotationInk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationInk.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotationInk.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotationInk.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_highlight(): boolean;

        /**
         * Gets the ink list from the annotation ink object. The ink list is an array
         * of arrays of {@link PapersDocument.Point}.
         * @returns a pointer to the ink list, or `null` if there is no ink list.
         */
        get_ink_list(): InkList;

        /**
         * @returns the time list
         */
        get_time_list(): InkTime[];

        /**
         * Sets the ink list for the annotation ink object. The ink list is an array
         * of arrays of {@link PapersDocument.Point}, representing the ink strokes.
         * 
         * If the ink object already has an ink list, it will be unreferenced and replaced
         * with the new one.
         * @param ink_list an array of arrays of {@link PapersDocument.Point}
         */
        set_ink_list(ink_list: InkList): void;

        /**
         * @param time_list the new time list.
         */
        set_time_list(time_list: InkTime[]): void;
    }


    namespace AnnotationMarkup {
        // Signal signatures
        interface SignalSignatures extends Annotation.SignalSignatures {
            "notify::can-have-popup": (pspec: GObject.ParamSpec) => void;
            "notify::has-popup": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::popup-is-open": (pspec: GObject.ParamSpec) => void;
            "notify::rectangle": (pspec: GObject.ParamSpec) => void;
            "notify::area": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::contents": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::modified": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::page": (pspec: GObject.ParamSpec) => void;
            "notify::rgba": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Annotation.ConstructorProps {
            can_have_popup: boolean;
            canHavePopup: boolean;
            has_popup: boolean;
            hasPopup: boolean;
            label: string;
            opacity: number;
            popup_is_open: boolean;
            popupIsOpen: boolean;
            rectangle: Rectangle;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class AnnotationMarkup extends Annotation {
        static $gtype: GObject.GType<AnnotationMarkup>;

        // Properties
        /**
         * @read-only
         * @default false
         */
        get can_have_popup(): boolean;

        /**
         * @read-only
         * @default false
         */
        get canHavePopup(): boolean;

        /**
         * @default true
         */
        get has_popup(): boolean;
        set has_popup(val: boolean);

        /**
         * @default true
         */
        get hasPopup(): boolean;
        set hasPopup(val: boolean);

        /**
         * @default null
         */
        get label(): string;
        set label(val: string);

        /**
         * @default 1
         */
        get opacity(): number;
        set opacity(val: number);

        /**
         * @default false
         */
        get popup_is_open(): boolean;
        set popup_is_open(val: boolean);

        /**
         * @default false
         */
        get popupIsOpen(): boolean;
        set popupIsOpen(val: boolean);

        get rectangle(): Rectangle;
        set rectangle(val: Rectangle);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotationMarkup.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotationMarkup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotationMarkup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationMarkup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotationMarkup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationMarkup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotationMarkup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotationMarkup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_label(): string;

        get_opacity(): number;

        get_popup_is_open(): boolean;

        /**
         * @param pps_rect 
         */
        get_rectangle(pps_rect: Rectangle): void;

        /**
         * @param has_popup 
         */
        set_has_popup(has_popup: boolean): boolean;

        /**
         * @param label 
         */
        set_label(label: string): boolean;

        /**
         * @param opacity 
         */
        set_opacity(opacity: number): boolean;

        /**
         * @param is_open 
         */
        set_popup_is_open(is_open: boolean): boolean;

        /**
         * @param pps_rect 
         */
        set_rectangle(pps_rect: Rectangle): boolean;
    }


    namespace AnnotationStamp {
        // Signal signatures
        interface SignalSignatures extends AnnotationMarkup.SignalSignatures {
            "notify::can-have-popup": (pspec: GObject.ParamSpec) => void;
            "notify::has-popup": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::popup-is-open": (pspec: GObject.ParamSpec) => void;
            "notify::rectangle": (pspec: GObject.ParamSpec) => void;
            "notify::area": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::contents": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::modified": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::page": (pspec: GObject.ParamSpec) => void;
            "notify::rgba": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends AnnotationMarkup.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class AnnotationStamp extends AnnotationMarkup {
        static $gtype: GObject.GType<AnnotationStamp>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotationStamp.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotationStamp.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](page: Page): AnnotationStamp;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotationStamp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationStamp.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotationStamp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationStamp.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotationStamp.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotationStamp.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Set the custom cairo surface of the stamp.
         * @returns the custom cairo surface of the stamp, if it exists.
         * @since 48.0
         */
        get_surface(): cairo.Surface;

        /**
         * Set the custom cairo surface of the stamp.
         * @param surface a {@link cairo.Surface}
         * @since 48.0
         */
        set_surface(surface: cairo.Surface): void;
    }


    namespace AnnotationText {
        // Signal signatures
        interface SignalSignatures extends AnnotationMarkup.SignalSignatures {
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::is-open": (pspec: GObject.ParamSpec) => void;
            "notify::can-have-popup": (pspec: GObject.ParamSpec) => void;
            "notify::has-popup": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::popup-is-open": (pspec: GObject.ParamSpec) => void;
            "notify::rectangle": (pspec: GObject.ParamSpec) => void;
            "notify::area": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::contents": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::modified": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::page": (pspec: GObject.ParamSpec) => void;
            "notify::rgba": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends AnnotationMarkup.ConstructorProps {
            icon: AnnotationTextIcon;
            is_open: boolean;
            isOpen: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class AnnotationText extends AnnotationMarkup {
        static $gtype: GObject.GType<AnnotationText>;

        // Properties
        /**
         * @default PapersDocument.AnnotationTextIcon.NOTE
         */
        get icon(): AnnotationTextIcon;
        set icon(val: AnnotationTextIcon);

        /**
         * @default false
         */
        get is_open(): boolean;
        set is_open(val: boolean);

        /**
         * @default false
         */
        get isOpen(): boolean;
        set isOpen(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotationText.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotationText.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](page: Page): AnnotationText;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotationText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationText.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotationText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationText.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotationText.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotationText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_icon(): AnnotationTextIcon;

        get_is_open(): boolean;

        /**
         * @param icon 
         */
        set_icon(icon: AnnotationTextIcon): boolean;

        /**
         * @param is_open 
         */
        set_is_open(is_open: boolean): boolean;
    }


    namespace AnnotationTextMarkup {
        // Signal signatures
        interface SignalSignatures extends AnnotationMarkup.SignalSignatures {
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::can-have-popup": (pspec: GObject.ParamSpec) => void;
            "notify::has-popup": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::popup-is-open": (pspec: GObject.ParamSpec) => void;
            "notify::rectangle": (pspec: GObject.ParamSpec) => void;
            "notify::area": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::contents": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::modified": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::page": (pspec: GObject.ParamSpec) => void;
            "notify::rgba": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends AnnotationMarkup.ConstructorProps {
            type: AnnotationTextMarkupType;
        }
    }

    /**
     * @gir-type Class
     */
    class AnnotationTextMarkup extends AnnotationMarkup {
        static $gtype: GObject.GType<AnnotationTextMarkup>;

        // Properties
        /**
         * @default PapersDocument.AnnotationTextMarkupType.HIGHLIGHT
         */
        get type(): AnnotationTextMarkupType;
        set type(val: AnnotationTextMarkupType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotationTextMarkup.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotationTextMarkup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static highlight_new(page: Page): AnnotationTextMarkup;

        static ["new"](page: Page, markup_type: AnnotationTextMarkupType): AnnotationTextMarkup;

        static squiggly_new(page: Page): AnnotationTextMarkup;

        static strike_out_new(page: Page): AnnotationTextMarkup;

        static underline_new(page: Page): AnnotationTextMarkup;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotationTextMarkup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationTextMarkup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotationTextMarkup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationTextMarkup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotationTextMarkup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotationTextMarkup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_markup_type(): AnnotationTextMarkupType;

        /**
         * @param markup_type 
         */
        set_markup_type(markup_type: AnnotationTextMarkupType): boolean;
    }


    namespace Attachment {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::cdatetime": (pspec: GObject.ParamSpec) => void;
            "notify::data": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::mdatetime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cdatetime: GLib.DateTime;
            data: never;
            description: string;
            mdatetime: GLib.DateTime;
            name: string;
            size: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Attachment extends GObject.Object {
        static $gtype: GObject.GType<Attachment>;

        // Properties
        /**
         * @construct-only
         */
        set cdatetime(val: GLib.DateTime);

        /**
         * @construct-only
         */
        set data(val: never);

        /**
         * @construct-only
         * @default null
         */
        set description(val: string);

        /**
         * @construct-only
         */
        set mdatetime(val: GLib.DateTime);

        /**
         * @construct-only
         * @default null
         */
        set name(val: string);

        /**
         * @construct-only
         * @default 0
         */
        set size(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Attachment.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Attachment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string, description: string, mtime: GLib.DateTime, ctime: GLib.DateTime, size: bigint | number, data: null): Attachment;

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

        // Static methods
        static error_quark(): GLib.Quark;

        // Methods
        get_creation_datetime(): GLib.DateTime;

        get_description(): string;

        get_mime_type(): string;

        get_modification_datetime(): GLib.DateTime;

        get_name(): string;

        /**
         * @param context 
         * @throws GLib.Error
         */
        open(context: Gio.AppLaunchContext): boolean;

        /**
         * @param file 
         * @throws GLib.Error
         */
        save(file: Gio.File): boolean;
    }


    namespace CertificateInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::expiration-time": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::issuance-time": (pspec: GObject.ParamSpec) => void;
            "notify::issuer-common-name": (pspec: GObject.ParamSpec) => void;
            "notify::issuer-email": (pspec: GObject.ParamSpec) => void;
            "notify::issuer-organization": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
            "notify::subject-common-name": (pspec: GObject.ParamSpec) => void;
            "notify::subject-email": (pspec: GObject.ParamSpec) => void;
            "notify::subject-organization": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            expiration_time: GLib.DateTime;
            expirationTime: GLib.DateTime;
            id: string;
            issuance_time: GLib.DateTime;
            issuanceTime: GLib.DateTime;
            issuer_common_name: string;
            issuerCommonName: string;
            issuer_email: string;
            issuerEmail: string;
            issuer_organization: string;
            issuerOrganization: string;
            status: CertificateStatus;
            subject_common_name: string;
            subjectCommonName: string;
            subject_email: string;
            subjectEmail: string;
            subject_organization: string;
            subjectOrganization: string;
        }
    }

    /**
     * @gir-type Class
     */
    class CertificateInfo extends GObject.Object {
        static $gtype: GObject.GType<CertificateInfo>;

        // Properties
        /**
         * @construct-only
         */
        get expiration_time(): GLib.DateTime;

        /**
         * @construct-only
         */
        get expirationTime(): GLib.DateTime;

        /**
         * @construct-only
         * @default null
         */
        get id(): string;

        /**
         * @construct-only
         */
        get issuance_time(): GLib.DateTime;

        /**
         * @construct-only
         */
        get issuanceTime(): GLib.DateTime;

        /**
         * @construct-only
         * @default null
         */
        get issuer_common_name(): string;

        /**
         * @construct-only
         * @default null
         */
        get issuerCommonName(): string;

        /**
         * @construct-only
         * @default null
         */
        get issuer_email(): string;

        /**
         * @construct-only
         * @default null
         */
        get issuerEmail(): string;

        /**
         * @construct-only
         * @default null
         */
        get issuer_organization(): string;

        /**
         * @construct-only
         * @default null
         */
        get issuerOrganization(): string;

        /**
         * @construct-only
         * @default PapersDocument.CertificateStatus.NOT_VERIFIED
         */
        get status(): CertificateStatus;

        /**
         * @construct-only
         * @default null
         */
        get subject_common_name(): string;

        /**
         * @construct-only
         * @default null
         */
        get subjectCommonName(): string;

        /**
         * @construct-only
         * @default null
         */
        get subject_email(): string;

        /**
         * @construct-only
         * @default null
         */
        get subjectEmail(): string;

        /**
         * @construct-only
         * @default null
         */
        get subject_organization(): string;

        /**
         * @construct-only
         * @default null
         */
        get subjectOrganization(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CertificateInfo.SignalSignatures;

        // Fields
        base_instance: GObject.Object;

        // Constructors
        constructor(properties?: Partial<CertificateInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: string, subject_common_name: string): CertificateInfo;

        // Signals
        /** @signal */
        connect<K extends keyof CertificateInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CertificateInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CertificateInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace Document {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::modified": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            modified: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Document extends GObject.Object {
        static $gtype: GObject.GType<Document>;

        // Properties
        /**
         * @default false
         */
        get modified(): boolean;
        set modified(val: boolean);

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

        // Static methods
        /**
         * Adds some file filters to `dialog`.
         * 
         * Always add a "All documents" format.
         * 
         * If `document` is not `null`, adds a {@link Gtk.FileFilter} for `document`'s MIME type.
         * 
         * If `document` is `null`, adds a {@link Gtk.FileFilter} for each document type that papers
         * can handle.
         * @param dialog a {@link Gtk.FileDialog}
         * @param document a {@link PapersDocument.Document}, or `null`
         */
        static factory_add_filters(dialog: Gtk.FileDialog, document: Document | null): void;

        /**
         * Creates a {@link PapersDocument.Document} for the document at `uri`; or, if no backend handling
         * the document's type is found, or an error occurred on opening the document,
         * returns `null` and fills in `error`.
         * If the document is encrypted, it is returned but also `error` is set to
         * {@link PapersDocument.DocumentError.ENCRYPTED}.
         * @param uri an URI
         */
        static factory_get_document(uri: string): Document;

        /**
         * Synchronously creates a {@link PapersDocument.Document} for the document from `fd` using the backend
         * for loading documents of type `mime_type`; or, if the backend does not support
         * loading from file descriptors, or an error occurred on opening the document,
         * returns `null` and fills in `error`.
         * If the document is encrypted, it is returned but also `error` is set to
         * {@link PapersDocument.DocumentError.ENCRYPTED}.
         * 
         * If the mime type cannot be inferred from the file descriptor, and `mime_type` is `null`,
         * an error is returned.
         * 
         * Note that this function takes ownership of `fd`; you must not ever
         * operate on it again. It will be closed automatically if the document
         * is destroyed, or if this function returns `null`.
         * @param fd a file descriptor
         * @param mime_type the mime type
         * @since 42.0
         */
        static factory_get_document_for_fd(fd: number, mime_type: string): Document;

        /**
         * Determine the preferred date and time representation for the current locale
         * for `dt`.
         * @param dt a {@link GLib.DateTime}
         */
        static misc_format_datetime(dt: GLib.DateTime): string;

        /**
         * Get the pointer's x and y position relative to `widget`.
         * @param widget a {@link Gtk.Widget}
         */
        static misc_get_pointer_position(widget: Gtk.Widget): [boolean, number, number];

        /**
         * Returns sensible guess for DPI of monitor on which given widget has been
         * realized. If HiDPI display, use 192, else 96.
         * Returns 96 as fallback value.
         * @param widget a {@link Gtk.Widget}
         */
        static misc_get_widget_dpi(widget: Gtk.Widget): number;

        /**
         * @param surface a {@link cairo.Surface}
         */
        static misc_pixbuf_from_surface(surface: cairo.Surface): GdkPixbuf.Pixbuf;

        /**
         * @param pixbuf 
         */
        static misc_surface_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): cairo.Surface;

        /**
         * @param surface 
         * @param dest_width 
         * @param dest_height 
         * @param dest_rotation 
         */
        static misc_surface_rotate_and_scale(surface: cairo.Surface, dest_width: number, dest_height: number, dest_rotation: number): cairo.Surface;

        /**
         * Convert a cairo_surface_t to {@link Gdk.Texture} object.
         * @param surface a {@link cairo.Surface}
         */
        static misc_texture_from_surface(surface: cairo.Surface): Gdk.Texture;

        // Virtual methods
        /**
         * @param info 
         * @virtual
         */
        vfunc_get_backend_info(info: DocumentBackendInfo): boolean;

        /**
         * Returns the {@link PapersDocument.DocumentInfo} for the document.
         * @virtual
         */
        vfunc_get_info(): DocumentInfo;

        /**
         * @virtual
         */
        vfunc_get_n_pages(): number;

        /**
         * @param index index of page
         * @virtual
         */
        vfunc_get_page(index: number): Page;

        /**
         * @param page 
         * @virtual
         */
        vfunc_get_page_label(page: Page): string;

        /**
         * @param page_index index of page
         * @virtual
         */
        vfunc_get_page_size(page_index: Page): [number, number];

        /**
         * @param rc an {@link PapersDocument.RenderContext}
         * @virtual
         */
        vfunc_get_thumbnail(rc: RenderContext): GdkPixbuf.Pixbuf;

        /**
         * @param rc an {@link PapersDocument.RenderContext}
         * @virtual
         */
        vfunc_get_thumbnail_surface(rc: RenderContext): cairo.Surface;

        /**
         * Loads `document` from `uri`.
         * 
         * On failure, `false` is returned and `error` is filled in.
         * If the document is encrypted, PPS_DEFINE_ERROR_ENCRYPTED is returned.
         * If the backend cannot load the specific document, PPS_DOCUMENT_ERROR_INVALID
         * is returned. If the backend does not support the format for the document's
         * contents, PPS_DOCUMENT_ERROR_UNSUPPORTED_CONTENT is returned. Other errors
         * are possible too, depending on the backend used to load the document and
         * the URI, e.g. {@link GLib.IOError}, {@link GLib.FileError}, and {@link GLib.ConvertError}.
         * @param uri the document's URI
         * @virtual
         */
        vfunc_load(uri: string): boolean;

        /**
         * Synchronously loads the document from `fd`, which must refer to
         * a regular file.
         * 
         * Note that this function takes ownership of `fd`; you must not ever
         * operate on it again. It will be closed automatically if the document
         * is destroyed, or if this function returns `null`.
         * 
         * See `pps_document_load()` for more information.
         * @param fd a file descriptor
         * @since 42.0
         * @virtual
         */
        vfunc_load_fd(fd: number): boolean;

        /**
         * @param rc 
         * @virtual
         */
        vfunc_render(rc: RenderContext): cairo.Surface;

        /**
         * Saves `document` to `uri`.
         * @param uri the target URI
         * @virtual
         */
        vfunc_save(uri: string): boolean;

        // Methods
        check_dimensions(): boolean;

        /**
         * @param page_label the page label
         * @returns `true` iff the page index is found
         */
        find_page_by_label(page_label: string): [boolean, number];

        /**
         * @param info 
         */
        get_backend_info(info: DocumentBackendInfo): boolean;

        /**
         * Returns the {@link PapersDocument.DocumentInfo} for the document.
         * @returns a {@link PapersDocument.DocumentInfo}
         */
        get_info(): DocumentInfo;

        get_max_label_len(): number;

        get_max_page_size(): [number, number];

        get_min_page_size(): [number, number];

        /**
         * @returns `true` iff the document has been modified. You can monitor changes to the modification state by connecting to the notify::modified signal on `document`.
         */
        get_modified(): boolean;

        /**
         * @returns the number of pages of the document. This is constant throughout the lifetime of the document.
         */
        get_n_pages(): number;

        /**
         * @param index index of page
         * @returns Newly created {@link PapersDocument.Page} for the given index.
         */
        get_page(index: number): Page;

        /**
         * @param page_index 
         */
        get_page_label(page_index: number): string;

        /**
         * @param page_index index of page
         */
        get_page_size(page_index: number): [number, number];

        /**
         * Calls the `document`'s backend to fetch the page size. This should only be
         * used on very specific cases, where it is not desired that the cache should
         * be loaded. Calling with a loaded cache is a programmers' error.
         * @param page a {@link PapersDocument.Page}
         * @since 49.0
         */
        get_page_size_uncached(page: Page): [number, number];

        get_size(): number;

        /**
         * @param rc an {@link PapersDocument.RenderContext}
         * @returns a {@link GdkPixbuf.Pixbuf}
         */
        get_thumbnail(rc: RenderContext): GdkPixbuf.Pixbuf;

        /**
         * @param rc an {@link PapersDocument.RenderContext}
         * @returns a {@link cairo.Surface}
         */
        get_thumbnail_surface(rc: RenderContext): cairo.Surface;

        get_title(): string;

        get_uri(): string;

        has_text_page_labels(): boolean;

        is_page_size_uniform(): boolean;

        /**
         * Loads `document` from `uri`.
         * 
         * On failure, `false` is returned and `error` is filled in.
         * If the document is encrypted, PPS_DEFINE_ERROR_ENCRYPTED is returned.
         * If the backend cannot load the specific document, PPS_DOCUMENT_ERROR_INVALID
         * is returned. If the backend does not support the format for the document's
         * contents, PPS_DOCUMENT_ERROR_UNSUPPORTED_CONTENT is returned. Other errors
         * are possible too, depending on the backend used to load the document and
         * the URI, e.g. {@link GLib.IOError}, {@link GLib.FileError}, and {@link GLib.ConvertError}.
         * @param uri the document's URI
         * @returns `true` on success, or `false` on failure.
         * @throws GLib.Error
         */
        load(uri: string): boolean;

        /**
         * Synchronously loads the document from `fd`, which must refer to
         * a regular file.
         * 
         * Note that this function takes ownership of `fd`; you must not ever
         * operate on it again. It will be closed automatically if the document
         * is destroyed, or if this function returns `null`.
         * 
         * See `pps_document_load()` for more information.
         * @param fd a file descriptor
         * @returns `true` if loading succeeded, or `false` on error with `error` filled in
         * @since 42.0
         * @throws GLib.Error
         */
        load_fd(fd: number): boolean;

        /**
         * @param rc 
         */
        render(rc: RenderContext): cairo.Surface;

        /**
         * Saves `document` to `uri`.
         * @param uri the target URI
         * @returns `true` on success, or `false` on error with `error` filled in
         * @throws GLib.Error
         */
        save(uri: string): boolean;

        /**
         * Set the `document` modification state as `modified`.
         * @param modified a boolean value to set the document as modified or not.
         */
        set_modified(modified: boolean): void;

        setup_cache(): void;
    }


    namespace FontDescription {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::details": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            details: string;
            name: string;
        }
    }

    /**
     * @gir-type Class
     */
    class FontDescription extends GObject.Object {
        static $gtype: GObject.GType<FontDescription>;

        // Properties
        /**
         * @construct-only
         * @default null
         */
        get details(): string;

        /**
         * @construct-only
         * @default null
         */
        get name(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FontDescription.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FontDescription.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): FontDescription;

        // Signals
        /** @signal */
        connect<K extends keyof FontDescription.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontDescription.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FontDescription.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontDescription.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FontDescription.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FontDescription.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace FormField {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class FormField extends GObject.Object {
        static $gtype: GObject.GType<FormField>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FormField.SignalSignatures;

        // Fields
        id: number;

        is_read_only: boolean;

        font_size: number;

        activation_link: Link;

        page: Page;

        changed: boolean;

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
    }


    namespace FormFieldButton {
        // Signal signatures
        interface SignalSignatures extends FormField.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends FormField.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FormFieldButton extends FormField {
        static $gtype: GObject.GType<FormFieldButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FormFieldButton.SignalSignatures;

        // Fields
        type: FormFieldButtonType;

        state: boolean;

        // Constructors
        constructor(properties?: Partial<FormFieldButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: number, type: FormFieldButtonType): FormFieldButton;

        // Signals
        /** @signal */
        connect<K extends keyof FormFieldButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FormFieldButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FormFieldButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FormFieldButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FormFieldButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FormFieldButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace FormFieldChoice {
        // Signal signatures
        interface SignalSignatures extends FormField.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends FormField.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FormFieldChoice extends FormField {
        static $gtype: GObject.GType<FormFieldChoice>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FormFieldChoice.SignalSignatures;

        // Fields
        type: FormFieldChoiceType;

        multi_select: boolean;

        is_editable: boolean;

        do_spell_check: boolean;

        commit_on_sel_change: boolean;

        selected_items: null[];

        text: string;

        // Constructors
        constructor(properties?: Partial<FormFieldChoice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: number, type: FormFieldChoiceType): FormFieldChoice;

        // Signals
        /** @signal */
        connect<K extends keyof FormFieldChoice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FormFieldChoice.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FormFieldChoice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FormFieldChoice.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FormFieldChoice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FormFieldChoice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace FormFieldSignature {
        // Signal signatures
        interface SignalSignatures extends FormField.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends FormField.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FormFieldSignature extends FormField {
        static $gtype: GObject.GType<FormFieldSignature>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FormFieldSignature.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FormFieldSignature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: number): FormFieldSignature;

        // Signals
        /** @signal */
        connect<K extends keyof FormFieldSignature.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FormFieldSignature.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FormFieldSignature.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FormFieldSignature.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FormFieldSignature.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FormFieldSignature.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace FormFieldText {
        // Signal signatures
        interface SignalSignatures extends FormField.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends FormField.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FormFieldText extends FormField {
        static $gtype: GObject.GType<FormFieldText>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FormFieldText.SignalSignatures;

        // Fields
        type: FormFieldTextType;

        do_spell_check: boolean;

        do_scroll: boolean;

        comb: boolean;

        is_rich_text: boolean;

        is_password: boolean;

        max_len: number;

        text: string;

        // Constructors
        constructor(properties?: Partial<FormFieldText.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: number, type: FormFieldTextType): FormFieldText;

        // Signals
        /** @signal */
        connect<K extends keyof FormFieldText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FormFieldText.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FormFieldText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FormFieldText.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FormFieldText.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FormFieldText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace Image {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Image extends GObject.Object {
        static $gtype: GObject.GType<Image>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Image.SignalSignatures;

        // Fields
        base_instance: GObject.Object;

        // Constructors
        constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](page: number, img_id: number): Image;

        static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Image;

        // Signals
        /** @signal */
        connect<K extends keyof Image.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Image.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Image.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Image.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_id(): number;

        get_page(): number;

        /**
         * @returns a {@link GdkPixbuf.Pixbuf}
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;

        get_tmp_uri(): string;

        /**
         * @param pixbuf 
         */
        save_tmp(pixbuf: GdkPixbuf.Pixbuf): string;
    }


    namespace Layer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::title-only": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            children: Gio.ListModel | null;
            enabled: boolean;
            title: string;
            title_only: boolean;
            titleOnly: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Layer extends GObject.Object {
        static $gtype: GObject.GType<Layer>;

        // Properties
        get children(): Gio.ListModel | null;
        set children(val: Gio.ListModel | null);

        /**
         * @default false
         */
        get enabled(): boolean;
        set enabled(val: boolean);

        /**
         * @default null
         */
        get title(): string;
        set title(val: string);

        /**
         * @default false
         */
        get title_only(): boolean;
        set title_only(val: boolean);

        /**
         * @default false
         */
        get titleOnly(): boolean;
        set titleOnly(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Layer.SignalSignatures;

        // Fields
        base_instance: GObject.Object;

        // Constructors
        constructor(properties?: Partial<Layer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](rb_group: number): Layer;

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
         * @returns The children of the layer
         */
        get_children(): Gio.ListModel | null;

        get_rb_group(): number;

        /**
         * Sets the 'children' property of the layer.
         * @param children The children of the layer
         */
        set_children(children: Gio.ListModel): void;
    }


    namespace Link {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::action": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            action: LinkAction;
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Link extends GObject.Object {
        static $gtype: GObject.GType<Link>;

        // Properties
        /**
         * @construct-only
         */
        get action(): LinkAction;

        /**
         * @construct-only
         * @default null
         */
        get title(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Link.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Link.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: string | null, action: LinkAction): Link;

        // Signals
        /** @signal */
        connect<K extends keyof Link.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Link.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Link.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Link.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Link.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Link.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns an {@link PapersDocument.LinkAction}
         */
        get_action(): LinkAction;

        get_title(): string;
    }


    namespace LinkAction {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::dest": (pspec: GObject.ParamSpec) => void;
            "notify::exclude-reset-fields": (pspec: GObject.ParamSpec) => void;
            "notify::filename": (pspec: GObject.ParamSpec) => void;
            "notify::hide-list": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::params": (pspec: GObject.ParamSpec) => void;
            "notify::reset-fields": (pspec: GObject.ParamSpec) => void;
            "notify::show-list": (pspec: GObject.ParamSpec) => void;
            "notify::toggle-list": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dest: LinkDest;
            exclude_reset_fields: boolean;
            excludeResetFields: boolean;
            filename: string;
            hide_list: never;
            hideList: never;
            name: string;
            params: string;
            reset_fields: never;
            resetFields: never;
            show_list: never;
            showList: never;
            toggle_list: never;
            toggleList: never;
            type: LinkActionType;
            uri: string;
        }
    }

    /**
     * @gir-type Class
     */
    class LinkAction extends GObject.Object {
        static $gtype: GObject.GType<LinkAction>;

        // Properties
        /**
         * @construct-only
         */
        get dest(): LinkDest;

        /**
         * @construct-only
         * @default false
         */
        get exclude_reset_fields(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get excludeResetFields(): boolean;

        /**
         * @construct-only
         * @default null
         */
        get filename(): string;

        /**
         * @construct-only
         */
        get hide_list(): null;

        /**
         * @construct-only
         */
        get hideList(): null;

        /**
         * @construct-only
         * @default null
         */
        get name(): string;

        /**
         * @construct-only
         * @default null
         */
        get params(): string;

        /**
         * @construct-only
         */
        get reset_fields(): null;

        /**
         * @construct-only
         */
        get resetFields(): null;

        /**
         * @construct-only
         */
        get show_list(): null;

        /**
         * @construct-only
         */
        get showList(): null;

        /**
         * @construct-only
         */
        get toggle_list(): null;

        /**
         * @construct-only
         */
        get toggleList(): null;

        /**
         * @construct-only
         * @default PapersDocument.LinkActionType.GOTO_DEST
         */
        get type(): LinkActionType;

        /**
         * @construct-only
         * @default null
         */
        get uri(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LinkAction.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LinkAction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_dest(dest: LinkDest): LinkAction;

        static new_external_uri(uri: string): LinkAction;

        static new_launch(filename: string, params: string): LinkAction;

        static new_layers_state(show_list: Layer[], hide_list: Layer[], toggle_list: Layer[]): LinkAction;

        static new_named(name: string): LinkAction;

        static new_remote(dest: LinkDest, filename: string): LinkAction;

        static new_reset_form(fields: string[], exclude_fields: boolean): LinkAction;

        // Signals
        /** @signal */
        connect<K extends keyof LinkAction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LinkAction.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LinkAction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LinkAction.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LinkAction.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LinkAction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Checks whether `a` and `b` are equal.
         * @param b a {@link PapersDocument.LinkAction}
         * @returns `true` iff `a` and `b` are equal
         */
        equal(b: LinkAction): boolean;

        get_action_type(): LinkActionType;

        /**
         * @returns an {@link PapersDocument.LinkDest}
         */
        get_dest(): LinkDest;

        /**
         * @returns whether to exclude reset fields when resetting form
         */
        get_exclude_reset_fields(): boolean;

        get_filename(): string;

        /**
         * @returns a list of {@link PapersDocument.Layer} objects
         */
        get_hide_list(): Layer[];

        get_name(): string;

        get_params(): string;

        /**
         * @returns a list of fields to reset
         */
        get_reset_fields(): string[];

        /**
         * @returns a list of {@link PapersDocument.Layer} objects
         */
        get_show_list(): Layer[];

        /**
         * @returns a list of {@link PapersDocument.Layer} objects
         */
        get_toggle_list(): Layer[];

        get_uri(): string;
    }


    namespace LinkDest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::bottom": (pspec: GObject.ParamSpec) => void;
            "notify::change": (pspec: GObject.ParamSpec) => void;
            "notify::left": (pspec: GObject.ParamSpec) => void;
            "notify::named": (pspec: GObject.ParamSpec) => void;
            "notify::page": (pspec: GObject.ParamSpec) => void;
            "notify::page-label": (pspec: GObject.ParamSpec) => void;
            "notify::right": (pspec: GObject.ParamSpec) => void;
            "notify::top": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::zoom": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bottom: number;
            change: number;
            left: number;
            named: string;
            page: number;
            page_label: string;
            pageLabel: string;
            right: number;
            top: number;
            type: LinkDestType;
            zoom: number;
        }
    }

    /**
     * @gir-type Class
     */
    class LinkDest extends GObject.Object {
        static $gtype: GObject.GType<LinkDest>;

        // Properties
        /**
         * @construct-only
         * @default 0
         */
        get bottom(): number;

        /**
         * @construct-only
         * @default 0
         */
        get change(): number;

        /**
         * @construct-only
         * @default 0
         */
        get left(): number;

        /**
         * @construct-only
         * @default null
         */
        get named(): string;

        /**
         * @construct-only
         * @default 0
         */
        get page(): number;

        /**
         * @construct-only
         * @default null
         */
        get page_label(): string;

        /**
         * @construct-only
         * @default null
         */
        get pageLabel(): string;

        /**
         * @construct-only
         * @default 0
         */
        get right(): number;

        /**
         * @construct-only
         * @default 0
         */
        get top(): number;

        /**
         * @construct-only
         * @default PapersDocument.LinkDestType.UNKNOWN
         */
        get type(): LinkDestType;

        /**
         * @construct-only
         * @default 0
         */
        get zoom(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LinkDest.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LinkDest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_fit(page: number): LinkDest;

        static new_fith(page: number, top: number, change_top: boolean): LinkDest;

        static new_fitr(page: number, left: number, bottom: number, right: number, top: number): LinkDest;

        static new_fitv(page: number, left: number, change_left: boolean): LinkDest;

        static new_named(named_dest: string): LinkDest;

        static new_page(page: number): LinkDest;

        static new_page_label(page_label: string): LinkDest;

        static new_xyz(page: number, left: number, top: number, zoom: number, change_left: boolean, change_top: boolean, change_zoom: boolean): LinkDest;

        // Signals
        /** @signal */
        connect<K extends keyof LinkDest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LinkDest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LinkDest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LinkDest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LinkDest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LinkDest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Checks whether `a` and `b` are equal.
         * @param b a {@link PapersDocument.LinkDest}
         * @returns `true` iff `a` and `b` are equal
         */
        equal(b: LinkDest): boolean;

        get_bottom(): number;

        get_dest_type(): LinkDestType;

        get_left(): [number, boolean];

        get_named_dest(): string;

        get_page(): number;

        get_page_label(): string;

        get_right(): number;

        get_top(): [number, boolean];

        get_zoom(): [number, boolean];
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

        // Fields
        base_instance: GObject.Object;

        // Constructors
        constructor(properties?: Partial<Media.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_for_uri(page: Page, uri: string): Media;

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
        get_page_index(): number;

        get_show_controls(): boolean;

        get_uri(): string;

        /**
         * @param show_controls 
         */
        set_show_controls(show_controls: boolean): void;
    }


    namespace Outlines {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::link": (pspec: GObject.ParamSpec) => void;
            "notify::markup": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            children: Gio.ListModel | null;
            expand: boolean;
            label: string;
            link: Link | null;
            markup: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Outlines extends GObject.Object {
        static $gtype: GObject.GType<Outlines>;

        // Properties
        get children(): Gio.ListModel | null;
        set children(val: Gio.ListModel | null);

        /**
         * @default false
         */
        get expand(): boolean;
        set expand(val: boolean);

        /**
         * @default null
         */
        get label(): string;
        set label(val: string);

        get link(): Link | null;
        set link(val: Link | null);

        /**
         * @default null
         */
        get markup(): string;
        set markup(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Outlines.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Outlines.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Outlines;

        // Signals
        /** @signal */
        connect<K extends keyof Outlines.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Outlines.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Outlines.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Outlines.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Outlines.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Outlines.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns The children of the outlines
         */
        get_children(): Gio.ListModel | null;

        /**
         * @returns Whether the outlines should be expanded
         */
        get_expand(): boolean;

        /**
         * @returns The {@link PapersDocument.Link} of the outlines
         */
        get_link(): Link | null;

        /**
         * Sets the 'children' property of the outlines.
         * @param children The children of the outlines
         */
        set_children(children: Gio.ListModel): void;

        /**
         * Sets the 'expand' property of the outlines.
         * @param expand Whether the outlines should be expanded
         */
        set_expand(expand: boolean): void;

        /**
         * @param label 
         */
        set_label(label: string): void;

        /**
         * @param link 
         */
        set_link(link: Link): void;

        /**
         * @param markup 
         */
        set_markup(markup: string): void;
    }


    namespace Page {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Page extends GObject.Object {
        static $gtype: GObject.GType<Page>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Page.SignalSignatures;

        // Fields
        base_instance: GObject.Object;

        index: number;

        backend_page: BackendPage;

        backend_destroy_func: BackendPageDestroyFunc;

        // Constructors
        constructor(properties?: Partial<Page.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](index: number): Page;

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
    }


    namespace RenderContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class RenderContext extends GObject.Object {
        static $gtype: GObject.GType<RenderContext>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RenderContext.SignalSignatures;

        // Fields
        page: Page;

        rotation: number;

        scale: number;

        target_width: number;

        target_height: number;

        annot_flags: RenderAnnotsFlags;

        // Constructors
        constructor(properties?: Partial<RenderContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](page: Page, rotation: number, scale: number, annot_flags: RenderAnnotsFlags): RenderContext;

        // Signals
        /** @signal */
        connect<K extends keyof RenderContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RenderContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof RenderContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RenderContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof RenderContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RenderContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param width_points 
         * @param height_points 
         */
        compute_scaled_size(width_points: number, height_points: number): [number, number];

        /**
         * @param width_points 
         * @param height_points 
         */
        compute_scales(width_points: number, height_points: number): [number, number];

        /**
         * @param width_points 
         * @param height_points 
         */
        compute_transformed_size(width_points: number, height_points: number): [number, number];

        /**
         * @param page 
         */
        set_page(page: Page): void;

        /**
         * @param rotation 
         */
        set_rotation(rotation: number): void;

        /**
         * @param scale 
         */
        set_scale(scale: number): void;

        /**
         * @param target_width 
         * @param target_height 
         */
        set_target_size(target_width: number, target_height: number): void;
    }


    namespace Signature {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::certificate-info": (pspec: GObject.ParamSpec) => void;
            "notify::signature-time": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            certificate_info: CertificateInfo;
            certificateInfo: CertificateInfo;
            signature_time: GLib.DateTime;
            signatureTime: GLib.DateTime;
            status: SignatureStatus;
        }
    }

    /**
     * @gir-type Class
     */
    class Signature extends GObject.Object {
        static $gtype: GObject.GType<Signature>;

        // Properties
        /**
         * @construct-only
         */
        get certificate_info(): CertificateInfo;

        /**
         * @construct-only
         */
        get certificateInfo(): CertificateInfo;

        /**
         * @construct-only
         */
        get signature_time(): GLib.DateTime;

        /**
         * @construct-only
         */
        get signatureTime(): GLib.DateTime;

        /**
         * @construct-only
         * @default PapersDocument.SignatureStatus.INVALID
         */
        get status(): SignatureStatus;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Signature.SignalSignatures;

        // Fields
        base_instance: GObject.Object;

        // Constructors
        constructor(properties?: Partial<Signature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](status: SignatureStatus, info: CertificateInfo): Signature;

        // Signals
        /** @signal */
        connect<K extends keyof Signature.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Signature.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Signature.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Signature.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Signature.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Signature.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param color 
         */
        get_background_color(color: Gdk.RGBA): void;

        /**
         * @param color 
         */
        get_border_color(color: Gdk.RGBA): void;

        get_border_width(): number;

        get_destination_file(): string;

        /**
         * @param color 
         */
        get_font_color(color: Gdk.RGBA): void;

        get_font_size(): number;

        get_left_font_size(): number;

        get_owner_password(): string;

        get_page(): number;

        get_password(): string;

        get_rect(): Rectangle;

        get_signature(): string;

        get_signature_left(): string;

        get_user_password(): string;

        /**
         * Checks whether signature is valid
         * @returns signature valid status
         */
        is_valid(): boolean;

        /**
         * @param color 
         */
        set_background_color(color: Gdk.RGBA): void;

        /**
         * @param color 
         */
        set_border_color(color: Gdk.RGBA): void;

        /**
         * @param width 
         */
        set_border_width(width: number): void;

        /**
         * @param file 
         */
        set_destination_file(file: string): void;

        /**
         * @param color 
         */
        set_font_color(color: Gdk.RGBA): void;

        /**
         * @param size 
         */
        set_font_size(size: number): void;

        /**
         * @param size 
         */
        set_left_font_size(size: number): void;

        /**
         * @param password 
         */
        set_owner_password(password: string): void;

        /**
         * @param page 
         */
        set_page(page: number): void;

        /**
         * @param password 
         */
        set_password(password: string): void;

        /**
         * @param rect 
         */
        set_rect(rect: Rectangle): void;

        /**
         * @param signature 
         */
        set_signature(signature: string): void;

        /**
         * @param signature_left 
         */
        set_signature_left(signature_left: string): void;

        /**
         * @param password 
         */
        set_user_password(password: string): void;
    }


    namespace TransitionEffect {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::alignment": (pspec: GObject.ParamSpec) => void;
            "notify::angle": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::duration": (pspec: GObject.ParamSpec) => void;
            "notify::duration-real": (pspec: GObject.ParamSpec) => void;
            "notify::rectangular": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            alignment: TransitionEffectAlignment;
            angle: number;
            direction: TransitionEffectDirection;
            duration: number;
            duration_real: number;
            durationReal: number;
            rectangular: boolean;
            scale: number;
            type: TransitionEffectType;
        }
    }

    /**
     * @gir-type Class
     */
    class TransitionEffect extends GObject.Object {
        static $gtype: GObject.GType<TransitionEffect>;

        // Properties
        /**
         * @default PapersDocument.TransitionEffectAlignment.HORIZONTAL
         */
        get alignment(): TransitionEffectAlignment;
        set alignment(val: TransitionEffectAlignment);

        /**
         * @default 0
         */
        get angle(): number;
        set angle(val: number);

        /**
         * @default PapersDocument.TransitionEffectDirection.INWARD
         */
        get direction(): TransitionEffectDirection;
        set direction(val: TransitionEffectDirection);

        /**
         * @default 0
         */
        get duration(): number;
        set duration(val: number);

        /**
         * @default 0
         */
        get duration_real(): number;
        set duration_real(val: number);

        /**
         * @default 0
         */
        get durationReal(): number;
        set durationReal(val: number);

        /**
         * @default false
         */
        get rectangular(): boolean;
        set rectangular(val: boolean);

        /**
         * @default 1
         */
        get scale(): number;
        set scale(val: number);

        /**
         * @default PapersDocument.TransitionEffectType.REPLACE
         */
        get type(): TransitionEffectType;
        set type(val: TransitionEffectType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TransitionEffect.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TransitionEffect.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof TransitionEffect.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TransitionEffect.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TransitionEffect.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TransitionEffect.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TransitionEffect.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TransitionEffect.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    /**
     * @gir-type Alias
     */
    type AnnotationAttachmentClass = typeof AnnotationAttachment;

    /**
     * @gir-type Alias
     */
    type AnnotationClass = typeof Annotation;

    /**
     * @gir-type Alias
     */
    type AnnotationFreeTextClass = typeof AnnotationFreeText;

    /**
     * @gir-type Alias
     */
    type AnnotationInkClass = typeof AnnotationInk;

    /**
     * @gir-type Alias
     */
    type AnnotationMarkupClass = typeof AnnotationMarkup;

    /**
     * @gir-type Alias
     */
    type AnnotationStampClass = typeof AnnotationStamp;

    /**
     * @gir-type Alias
     */
    type AnnotationTextClass = typeof AnnotationText;

    /**
     * @gir-type Alias
     */
    type AnnotationTextMarkupClass = typeof AnnotationTextMarkup;

    /**
     * @gir-type Alias
     */
    type AttachmentClass = typeof Attachment;

    /**
     * @gir-type Alias
     */
    type CertificateInfoClass = typeof CertificateInfo;

    /**
     * @gir-type Alias
     */
    type DocumentAnnotationsInterface = typeof DocumentAnnotations;

    /**
     * @gir-type Alias
     */
    type DocumentAttachmentsInterface = typeof DocumentAttachments;

    /**
     * @gir-type Struct
     */
    class DocumentBackendInfo {
        static $gtype: GObject.GType<DocumentBackendInfo>;

        // Fields
        name: string;

        version: string;

        // Constructors

        constructor(properties?: Partial<{
            name: string;
            version: string;
        }>);

        static ["new"](): DocumentBackendInfo;

        // Methods
        copy(): DocumentBackendInfo;
    }


    /**
     * @gir-type Alias
     */
    type DocumentClass = typeof Document;

    /**
     * @gir-type Alias
     */
    type DocumentFindInterface = typeof DocumentFind;

    /**
     * @gir-type Alias
     */
    type DocumentFontsInterface = typeof DocumentFonts;

    /**
     * @gir-type Alias
     */
    type DocumentFormsInterface = typeof DocumentForms;

    /**
     * @gir-type Alias
     */
    type DocumentImagesInterface = typeof DocumentImages;

    /**
     * @gir-type Struct
     */
    class DocumentInfo {
        static $gtype: GObject.GType<DocumentInfo>;

        // Fields
        layout: DocumentLayout;

        mode: DocumentMode;

        ui_hints: number;

        n_pages: number;

        page_sizes: DocumentPageSize;

        fields_mask: number;

        // Constructors

        constructor(properties?: Partial<{
            title: string;
            format: string;
            author: string;
            subject: string;
            keywords: string;
            creator: string;
            producer: string;
            linearized: string;
            security: string;
            layout: DocumentLayout;
            mode: DocumentMode;
            ui_hints: number;
            permissions: number;
            n_pages: number;
            contains_js: DocumentContainsJS;
            fields_mask: number;
        }>);

        static ["new"](): DocumentInfo;

        // Methods
        /**
         * @returns `true` iff info has this field
         */
        author(): [boolean, string];

        /**
         * @returns `true` iff info has this field
         */
        contains_js(): [boolean, DocumentContainsJS | null];

        /**
         * @returns a copy of `info`
         */
        copy(): DocumentInfo;

        /**
         * @returns `true` iff info has this field
         */
        creator(): [boolean, string];

        /**
         * @returns `true` iff info has this field
         */
        format(): [boolean, string];

        /**
         * Frees `info`.
         */
        free(): void;

        /**
         * @returns a {@link GLib.DateTime} for when the document was created
         */
        get_created_datetime(): GLib.DateTime | null;

        /**
         * @returns a {@link GLib.DateTime} for when the document was last modified
         */
        get_modified_datetime(): GLib.DateTime | null;

        /**
         * @returns `true` iff info has this field
         */
        keywords(): [boolean, string];

        /**
         * @returns `true` iff info has this field
         */
        license(): [boolean, DocumentLicense | null];

        /**
         * @returns `true` iff info has this field
         */
        linearized(): [boolean, string];

        /**
         * @returns `true` iff info has this field
         */
        pages(): [boolean, number];

        /**
         * @returns `true` iff info has this field
         */
        permissions(): [boolean, DocumentPermissions | null];

        /**
         * @returns `true` iff info has this field
         */
        producer(): [boolean, string];

        /**
         * @returns A string represent the regular paper size
         */
        regular_paper_size(): string | null;

        /**
         * @returns `true` iff info has this field
         */
        security(): [boolean, string];

        /**
         * @param xmp 
         * @param size 
         */
        set_from_xmp(xmp: string, size: bigint | number): boolean;

        /**
         * @returns `true` iff info has this field
         */
        start_mode(): [boolean, DocumentMode | null];

        /**
         * @returns `true` iff info has this field
         */
        subject(): [boolean, string];

        /**
         * @param datetime 
         */
        take_created_datetime(datetime: GLib.DateTime): void;

        /**
         * @param datetime 
         */
        take_modified_datetime(datetime: GLib.DateTime): void;

        /**
         * @returns `true` iff info has this field
         */
        title(): [boolean, string];
    }


    /**
     * @gir-type Alias
     */
    type DocumentLayersInterface = typeof DocumentLayers;

    /**
     * @gir-type Struct
     */
    class DocumentLicense {
        static $gtype: GObject.GType<DocumentLicense>;

        // Fields
        text: string;

        uri: string;

        web_statement: string;

        // Constructors

        constructor(properties?: Partial<{
            text: string;
            uri: string;
            web_statement: string;
        }>);

        static ["new"](): DocumentLicense;

        // Methods
        /**
         * @returns a copy of `license`, or `null`
         */
        copy(): DocumentLicense;

        /**
         * Frees `license`.
         */
        free(): void;

        /**
         * @returns the license text
         */
        get_text(): string | null;

        /**
         * @returns the license URI
         */
        get_uri(): string | null;

        /**
         * @returns the license web statement
         */
        get_web_statement(): string | null;
    }


    /**
     * @gir-type Alias
     */
    type DocumentLinksInterface = typeof DocumentLinks;

    /**
     * @gir-type Alias
     */
    type DocumentMediaInterface = typeof DocumentMedia;

    /**
     * @gir-type Struct
     */
    class DocumentPageSize {
        static $gtype: GObject.GType<DocumentPageSize>;

        // Fields
        width: number;

        height: number;

        // Constructors

        constructor(properties?: Partial<{
            width: number;
            height: number;
        }>);
    }


    /**
     * {@link PapersDocument.DocumentPoint} is a simple boxed structure that is used to uniquely and
     * invariably identify any point in a document. Documents have independent
     * coordinate systems per page, and therefore, to uniquely identify a point, it
     * is necessary to know both the index of the page, and the coordinates of the
     * point within that page.
     * 
     * This structure and its fields `page_index` and `point_on_page` are public.
     * @gir-type Struct
     * @since 48.0
     */
    class DocumentPoint {
        static $gtype: GObject.GType<DocumentPoint>;

        // Fields
        page_index: number;

        point_on_page: Point;

        // Constructors

        constructor(properties?: Partial<{
            page_index: number;
            point_on_page: Point;
        }>);

        // Methods
        copy(): DocumentPoint;
    }


    /**
     * @gir-type Alias
     */
    type DocumentPrintInterface = typeof DocumentPrint;

    /**
     * @gir-type Alias
     */
    type DocumentSecurityInterface = typeof DocumentSecurity;

    /**
     * @gir-type Alias
     */
    type DocumentSignaturesInterface = typeof DocumentSignatures;

    /**
     * @gir-type Alias
     */
    type DocumentTextInterface = typeof DocumentText;

    /**
     * @gir-type Alias
     */
    type DocumentTransitionInterface = typeof DocumentTransition;

    /**
     * @gir-type Struct
     */
    class FileExporterContext {
        static $gtype: GObject.GType<FileExporterContext>;

        // Fields
        format: FileExporterFormat;

        filename: string;

        first_page: number;

        last_page: number;

        paper_width: number;

        paper_height: number;

        duplex: boolean;

        pages_per_sheet: number;
    }


    /**
     * @gir-type Alias
     */
    type FileExporterInterface = typeof FileExporter;

    /**
     * @gir-type Struct
     */
    class FindRectangle {
        static $gtype: GObject.GType<FindRectangle>;

        // Fields
        x1: number;

        y1: number;

        x2: number;

        y2: number;

        next_line: boolean;

        after_hyphen: boolean;

        // Constructors

        constructor(properties?: Partial<{
            x1: number;
            y1: number;
            x2: number;
            y2: number;
            next_line: boolean;
            after_hyphen: boolean;
        }>);

        static ["new"](): FindRectangle;

        // Methods
        copy(): FindRectangle;

        free(): void;
    }


    /**
     * @gir-type Alias
     */
    type FontDescriptionClass = typeof FontDescription;

    /**
     * @gir-type Alias
     */
    type FormFieldButtonClass = typeof FormFieldButton;

    /**
     * @gir-type Alias
     */
    type FormFieldChoiceClass = typeof FormFieldChoice;

    /**
     * @gir-type Alias
     */
    type FormFieldClass = typeof FormField;

    /**
     * @gir-type Alias
     */
    type FormFieldSignatureClass = typeof FormFieldSignature;

    /**
     * @gir-type Alias
     */
    type FormFieldTextClass = typeof FormFieldText;

    /**
     * @gir-type Alias
     */
    type ImageClass = typeof Image;

    /**
     * @gir-type Struct
     */
    class InkList {
        static $gtype: GObject.GType<InkList>;

        // Fields
        n_paths: number;

        // Constructors
        constructor(paths: Path[]);

        static new_for_array(paths: Path[]): InkList;

        static new_for_list(paths: Path[]): InkList;

        // Methods
        /**
         * Creates a deep copy of the ink list.
         * @returns a newly created {@link PapersDocument.InkList} containing copies of all paths
         */
        copy(): InkList;

        free(): void;

        /**
         * Gets the array of paths from the ink list.
         * @returns array of paths in the ink list
         */
        get_array(): Path[];
    }


    /**
     * @gir-type Struct
     */
    class InkTime {
        static $gtype: GObject.GType<InkTime>;

        // Fields
        time: number;

        x: number;

        y: number;

        // Constructors

        constructor(properties?: Partial<{
            time: number;
            x: number;
            y: number;
        }>);

        // Methods
        copy(): InkTime;
    }


    /**
     * @gir-type Alias
     */
    type LayerClass = typeof Layer;

    /**
     * @gir-type Alias
     */
    type LinkActionClass = typeof LinkAction;

    /**
     * @gir-type Alias
     */
    type LinkClass = typeof Link;

    /**
     * @gir-type Alias
     */
    type LinkDestClass = typeof LinkDest;

    /**
     * @gir-type Struct
     */
    class Mapping {
        static $gtype: GObject.GType<Mapping>;

        // Fields
        area: Rectangle;

        data: null;

        // Constructors

        constructor(properties?: Partial<{
            area: Rectangle;
            data: null;
        }>);

        static ["new"](): Mapping;

        // Methods
        copy(): Mapping;

        free(): void;

        get_area(): Rectangle;

        get_data<T = GObject.Object>(): T;

        /**
         * @param area 
         */
        set_area(area: Rectangle): void;

        /**
         * @param data 
         */
        set_data(data: GObject.Object): void;
    }


    /**
     * @gir-type Struct
     */
    class MappingList {
        static $gtype: GObject.GType<MappingList>;

        // Constructors
        constructor(page: number, list: Mapping[]);

        static ["new"](page: number, list: Mapping[]): MappingList;

        // Methods
        /**
         * @param data mapping data to find
         * @returns an {@link PapersDocument.Mapping}
         */
        find(data: null): Mapping;

        /**
         * @param point coordinate
         * @returns the {@link PapersDocument.Mapping} in the list at coordinates (x, y)
         */
        get(point: Point): Mapping;

        /**
         * @param point coordinate
         * @returns the data of a mapping in the list at coordinates (x, y)
         */
        get_data(point: Point): null;

        /**
         * @returns the data for this mapping list
         */
        get_list(): Mapping[];

        get_page(): number;

        length(): number;

        /**
         * @param n the position to retrieve
         * @returns the `Ppsmapping` at position `n` in `mapping_list`
         */
        nth(n: number): Mapping;

        ref(): MappingList;

        /**
         * @param mapping {@link PapersDocument.Mapping} to remove
         */
        remove(mapping: Mapping): void;

        unref(): void;
    }


    /**
     * @gir-type Alias
     */
    type MediaClass = typeof Media;

    /**
     * @gir-type Alias
     */
    type OutlinesClass = typeof Outlines;

    /**
     * @gir-type Alias
     */
    type PageClass = typeof Page;

    /**
     * @gir-type Struct
     */
    class Path {
        static $gtype: GObject.GType<Path>;

        // Fields
        points: Point;

        n_points: number;

        // Constructors
        constructor(points: Point[]);

        static new_for_array(points: Point[]): Path;

        static new_for_list(points: Point[]): Path;

        // Methods
        copy(): Path;

        /**
         * @returns the list of points of the path
         */
        copy_array(): Point[];

        free(): void;
    }


    /**
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
        copy(): Point;
    }


    /**
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
        copy(): Rectangle;
    }


    /**
     * @gir-type Alias
     */
    type RenderContextClass = typeof RenderContext;

    /**
     * @gir-type Alias
     */
    type SelectionInterface = typeof Selection;

    /**
     * @gir-type Alias
     */
    type SignatureClass = typeof Signature;

    /**
     * @gir-type Alias
     */
    type TransitionEffectClass = typeof TransitionEffect;

    namespace DocumentAnnotations {
        /**
         * Interface for implementing DocumentAnnotations.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param annot 
             * @virtual
             */
            vfunc_add_annotation(annot: Annotation): void;

            /**
             * @virtual
             */
            vfunc_document_is_modified(): boolean;

            /**
             * @param page the page from where to get the annotations
             * @virtual
             */
            vfunc_get_annotations(page: Page): Annotation[] | null;

            /**
             * @param annot 
             * @param x 
             * @param y 
             * @virtual
             */
            vfunc_over_markup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup;

            /**
             * @param annot 
             * @virtual
             */
            vfunc_remove_annotation(annot: Annotation): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentAnnotationsNamespace {
        $gtype: GObject.GType<DocumentAnnotations>;
        prototype: DocumentAnnotations;
    }
    /**
     * @gir-type Interface
     */
    interface DocumentAnnotations extends GObject.Object, DocumentAnnotations.Interface {

        // Methods
        /**
         * @param annot 
         */
        add_annotation(annot: Annotation): void;

        can_add_annotation(): boolean;

        can_remove_annotation(): boolean;

        document_is_modified(): boolean;

        /**
         * @param page the page from where to get the annotations
         */
        get_annotations(page: Page): Annotation[] | null;

        /**
         * @param annot 
         * @param x 
         * @param y 
         */
        over_markup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup;

        /**
         * @param annot 
         */
        remove_annotation(annot: Annotation): void;
    }


    export const DocumentAnnotations: DocumentAnnotationsNamespace & {
        new (): DocumentAnnotations; // This allows `obj instanceof DocumentAnnotations`
    };

    namespace DocumentAttachments {
        /**
         * Interface for implementing DocumentAttachments.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_get_attachments(): Attachment[];

            /**
             * @virtual
             */
            vfunc_has_attachments(): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentAttachmentsNamespace {
        $gtype: GObject.GType<DocumentAttachments>;
        prototype: DocumentAttachments;
    }
    /**
     * @gir-type Interface
     */
    interface DocumentAttachments extends GObject.Object, DocumentAttachments.Interface {

        // Methods
        /**
         * @returns a list of {@link PapersDocument.Attachment} objects
         */
        get_attachments(): Attachment[];

        has_attachments(): boolean;
    }


    export const DocumentAttachments: DocumentAttachmentsNamespace & {
        new (): DocumentAttachments; // This allows `obj instanceof DocumentAttachments`
    };

    namespace DocumentFind {
        /**
         * Interface for implementing DocumentFind.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param page an {@link PapersDocument.Page}
             * @param text text to find
             * @param options a set of {@link PapersDocument.FindOptions}
             * @virtual
             */
            vfunc_find_text(page: Page, text: string, options: FindOptions): FindRectangle[];

            /**
             * @virtual
             */
            vfunc_get_supported_options(): FindOptions;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentFindNamespace {
        $gtype: GObject.GType<DocumentFind>;
        prototype: DocumentFind;
    }
    /**
     * @gir-type Interface
     */
    interface DocumentFind extends GObject.Object, DocumentFind.Interface {

        // Methods
        /**
         * @param page an {@link PapersDocument.Page}
         * @param text text to find
         * @param options a set of {@link PapersDocument.FindOptions}
         * @returns a list of results
         */
        find_text(page: Page, text: string, options: FindOptions): FindRectangle[];

        get_supported_options(): FindOptions;
    }


    export const DocumentFind: DocumentFindNamespace & {
        new (): DocumentFind; // This allows `obj instanceof DocumentFind`
    };

    namespace DocumentFonts {
        /**
         * Interface for implementing DocumentFonts.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_get_fonts_summary(): string;

            /**
             * @virtual
             */
            vfunc_get_model(): Gio.ListModel;

            /**
             * Runs through the slow process of finding the fonts being used in a document.
             * To get the results of the scan, use pps_document_fonts_fill_model and
             * pps_document_fonts_get_fonts_summary
             * @virtual
             */
            vfunc_scan(): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentFontsNamespace {
        $gtype: GObject.GType<DocumentFonts>;
        prototype: DocumentFonts;
    }
    /**
     * @gir-type Interface
     */
    interface DocumentFonts extends GObject.Object, DocumentFonts.Interface {

        // Methods
        get_fonts_summary(): string;

        /**
         * @returns A {@link Gio.ListModel} holding {@link PapersDocument.FontDescription} objects
         */
        get_model(): Gio.ListModel;

        /**
         * Runs through the slow process of finding the fonts being used in a document.
         * To get the results of the scan, use pps_document_fonts_fill_model and
         * pps_document_fonts_get_fonts_summary
         */
        scan(): void;
    }


    export const DocumentFonts: DocumentFontsNamespace & {
        new (): DocumentFonts; // This allows `obj instanceof DocumentFonts`
    };

    namespace DocumentForms {
        /**
         * Interface for implementing DocumentForms.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_document_is_modified(): boolean;

            /**
             * @param field 
             * @virtual
             */
            vfunc_form_field_button_get_state(field: FormField): boolean;

            /**
             * @param field 
             * @param state 
             * @virtual
             */
            vfunc_form_field_button_set_state(field: FormField, state: boolean): void;

            /**
             * @param field 
             * @param index 
             * @virtual
             */
            vfunc_form_field_choice_get_item(field: FormField, index: number): string;

            /**
             * @param field 
             * @virtual
             */
            vfunc_form_field_choice_get_n_items(field: FormField): number;

            /**
             * @param field 
             * @virtual
             */
            vfunc_form_field_choice_get_text(field: FormField): string;

            /**
             * @param field 
             * @param index 
             * @virtual
             */
            vfunc_form_field_choice_is_item_selected(field: FormField, index: number): boolean;

            /**
             * @param field 
             * @param index 
             * @virtual
             */
            vfunc_form_field_choice_select_item(field: FormField, index: number): void;

            /**
             * @param field 
             * @param text 
             * @virtual
             */
            vfunc_form_field_choice_set_text(field: FormField, text: string): void;

            /**
             * @param field 
             * @param index 
             * @virtual
             */
            vfunc_form_field_choice_toggle_item(field: FormField, index: number): void;

            /**
             * @param field 
             * @virtual
             */
            vfunc_form_field_choice_unselect_all(field: FormField): void;

            /**
             * @param field 
             * @virtual
             */
            vfunc_form_field_text_get_text(field: FormField): string;

            /**
             * @param field 
             * @param text 
             * @virtual
             */
            vfunc_form_field_text_set_text(field: FormField, text: string): void;

            /**
             * @param page 
             * @virtual
             */
            vfunc_get_form_fields(page: Page): MappingList;

            /**
             * @param action 
             * @virtual
             */
            vfunc_reset_form(action: LinkAction): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentFormsNamespace {
        $gtype: GObject.GType<DocumentForms>;
        prototype: DocumentForms;
    }
    /**
     * @gir-type Interface
     */
    interface DocumentForms extends GObject.Object, DocumentForms.Interface {

        // Methods
        document_is_modified(): boolean;

        /**
         * @param field 
         */
        form_field_button_get_state(field: FormField): boolean;

        /**
         * @param field 
         * @param state 
         */
        form_field_button_set_state(field: FormField, state: boolean): void;

        /**
         * @param field 
         * @param index 
         */
        form_field_choice_get_item(field: FormField, index: number): string;

        /**
         * @param field 
         */
        form_field_choice_get_n_items(field: FormField): number;

        /**
         * @param field 
         */
        form_field_choice_get_text(field: FormField): string;

        /**
         * @param field 
         * @param index 
         */
        form_field_choice_is_item_selected(field: FormField, index: number): boolean;

        /**
         * @param field 
         * @param index 
         */
        form_field_choice_select_item(field: FormField, index: number): void;

        /**
         * @param field 
         * @param text 
         */
        form_field_choice_set_text(field: FormField, text: string): void;

        /**
         * @param field 
         * @param index 
         */
        form_field_choice_toggle_item(field: FormField, index: number): void;

        /**
         * @param field 
         */
        form_field_choice_unselect_all(field: FormField): void;

        /**
         * @param field 
         */
        form_field_text_get_text(field: FormField): string;

        /**
         * @param field 
         * @param text 
         */
        form_field_text_set_text(field: FormField, text: string): void;

        /**
         * @param page 
         */
        get_form_fields(page: Page): MappingList;

        /**
         * @param action 
         */
        reset_form(action: LinkAction): void;
    }


    export const DocumentForms: DocumentFormsNamespace & {
        new (): DocumentForms; // This allows `obj instanceof DocumentForms`
    };

    namespace DocumentImages {
        /**
         * Interface for implementing DocumentImages.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param image an {@link PapersDocument.Image}
             * @virtual
             */
            vfunc_get_image(image: Image): GdkPixbuf.Pixbuf;

            /**
             * @param page 
             * @virtual
             */
            vfunc_get_image_mapping(page: Page): MappingList;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentImagesNamespace {
        $gtype: GObject.GType<DocumentImages>;
        prototype: DocumentImages;
    }
    /**
     * @gir-type Interface
     */
    interface DocumentImages extends GObject.Object, DocumentImages.Interface {

        // Methods
        /**
         * @param image an {@link PapersDocument.Image}
         * @returns a {@link GdkPixbuf.Pixbuf}
         */
        get_image(image: Image): GdkPixbuf.Pixbuf;

        /**
         * @param page 
         */
        get_image_mapping(page: Page): MappingList;
    }


    export const DocumentImages: DocumentImagesNamespace & {
        new (): DocumentImages; // This allows `obj instanceof DocumentImages`
    };

    namespace DocumentLayers {
        /**
         * Interface for implementing DocumentLayers.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_get_layers(): Gio.ListModel;

            /**
             * @virtual
             */
            vfunc_has_layers(): boolean;

            /**
             * @param layer 
             * @virtual
             */
            vfunc_hide_layer(layer: Layer): void;

            /**
             * @param layer 
             * @virtual
             */
            vfunc_layer_is_visible(layer: Layer): boolean;

            /**
             * @param layer 
             * @virtual
             */
            vfunc_show_layer(layer: Layer): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentLayersNamespace {
        $gtype: GObject.GType<DocumentLayers>;
        prototype: DocumentLayers;
    }
    /**
     * @gir-type Interface
     */
    interface DocumentLayers extends GObject.Object, DocumentLayers.Interface {

        // Methods
        /**
         * @returns a {@link Gio.ListModel}
         */
        get_layers(): Gio.ListModel;

        has_layers(): boolean;

        /**
         * @param layer 
         */
        hide_layer(layer: Layer): void;

        /**
         * @param layer 
         */
        layer_is_visible(layer: Layer): boolean;

        /**
         * @param layer 
         */
        show_layer(layer: Layer): void;
    }


    export const DocumentLayers: DocumentLayersNamespace & {
        new (): DocumentLayers; // This allows `obj instanceof DocumentLayers`
    };

    namespace DocumentLinks {
        /**
         * Interface for implementing DocumentLinks.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param link_name the link name
             * @virtual
             */
            vfunc_find_link_dest(link_name: string): LinkDest;

            /**
             * @param link_name 
             * @virtual
             */
            vfunc_find_link_page(link_name: string): number;

            /**
             * @param page 
             * @virtual
             */
            vfunc_get_links(page: Page): MappingList;

            /**
             * @virtual
             */
            vfunc_get_links_model(): Gio.ListModel | null;

            /**
             * @virtual
             */
            vfunc_has_document_links(): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentLinksNamespace {
        $gtype: GObject.GType<DocumentLinks>;
        prototype: DocumentLinks;
    }
    /**
     * @gir-type Interface
     */
    interface DocumentLinks extends GObject.Object, DocumentLinks.Interface {

        // Methods
        /**
         * @param link_name the link name
         * @returns an {@link PapersDocument.LinkDest}
         */
        find_link_dest(link_name: string): LinkDest;

        /**
         * @param link_name 
         */
        find_link_page(link_name: string): number;

        /**
         * @param dest 
         */
        get_dest_page(dest: LinkDest): number;

        /**
         * @param dest 
         */
        get_dest_page_label(dest: LinkDest): string;

        /**
         * @param link 
         */
        get_link_page(link: Link): number;

        /**
         * @param link 
         */
        get_link_page_label(link: Link): string;

        /**
         * @param page 
         */
        get_links(page: Page): MappingList;

        /**
         * @returns a {@link Gio.ListModel}
         */
        get_links_model(): Gio.ListModel | null;

        has_document_links(): boolean;
    }


    export const DocumentLinks: DocumentLinksNamespace & {
        new (): DocumentLinks; // This allows `obj instanceof DocumentLinks`
    };

    namespace DocumentMedia {
        /**
         * Interface for implementing DocumentMedia.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param page 
             * @virtual
             */
            vfunc_get_media_mapping(page: Page): MappingList;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentMediaNamespace {
        $gtype: GObject.GType<DocumentMedia>;
        prototype: DocumentMedia;
    }
    /**
     * @gir-type Interface
     */
    interface DocumentMedia extends GObject.Object, DocumentMedia.Interface {

        // Methods
        /**
         * @param page 
         */
        get_media_mapping(page: Page): MappingList;
    }


    export const DocumentMedia: DocumentMediaNamespace & {
        new (): DocumentMedia; // This allows `obj instanceof DocumentMedia`
    };

    namespace DocumentPrint {
        /**
         * Interface for implementing DocumentPrint.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param page 
             * @param cr 
             * @virtual
             */
            vfunc_print_page(page: Page, cr: cairo.Context): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentPrintNamespace {
        $gtype: GObject.GType<DocumentPrint>;
        prototype: DocumentPrint;
    }
    /**
     * @gir-type Interface
     */
    interface DocumentPrint extends GObject.Object, DocumentPrint.Interface {

        // Methods
        /**
         * @param page 
         * @param cr 
         */
        print_page(page: Page, cr: cairo.Context): void;
    }


    export const DocumentPrint: DocumentPrintNamespace & {
        new (): DocumentPrint; // This allows `obj instanceof DocumentPrint`
    };

    namespace DocumentSecurity {
        /**
         * Interface for implementing DocumentSecurity.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_has_document_security(): boolean;

            /**
             * @param password 
             * @virtual
             */
            vfunc_set_password(password: string): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentSecurityNamespace {
        $gtype: GObject.GType<DocumentSecurity>;
        prototype: DocumentSecurity;
    }
    /**
     * @gir-type Interface
     */
    interface DocumentSecurity extends GObject.Object, DocumentSecurity.Interface {

        // Methods
        has_document_security(): boolean;

        /**
         * @param password 
         */
        set_password(password: string): void;
    }


    export const DocumentSecurity: DocumentSecurityNamespace & {
        new (): DocumentSecurity; // This allows `obj instanceof DocumentSecurity`
    };

    namespace DocumentSignatures {
        /**
         * Interface for implementing DocumentSignatures.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Checks whether document supports digital signing.
             * @virtual
             */
            vfunc_can_sign(): boolean;

            /**
             * @virtual
             */
            vfunc_get_available_signing_certificates(): CertificateInfo[];

            /**
             * @param nick_name certificate nick name
             * @virtual
             */
            vfunc_get_certificate_info(nick_name: string): CertificateInfo;

            /**
             * @virtual
             */
            vfunc_get_signatures(): Signature[];

            /**
             * @virtual
             */
            vfunc_has_signatures(): boolean;

            /**
             * Popplers crypto backend asks for certificate password before access,
             * so set a helper function to actually allow the user to enter his password.
             * @param cb (closure user_data) an {@link PapersDocument.SignaturePasswordCallback}
             * @virtual
             */
            vfunc_set_password_callback(cb: SignaturePasswordCallback): void;

            /**
             * @param signature 
             * @param cancellable 
             * @param callback 
             * @virtual
             */
            vfunc_sign(signature: Signature, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * Finish `pps_document_signatures_sign` operation,
             * @param result a {@link Gio.AsyncResult}
             * @virtual
             */
            vfunc_sign_finish(result: Gio.AsyncResult): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentSignaturesNamespace {
        $gtype: GObject.GType<DocumentSignatures>;
        prototype: DocumentSignatures;
    }
    /**
     * @gir-type Interface
     */
    interface DocumentSignatures extends GObject.Object, DocumentSignatures.Interface {

        // Methods
        /**
         * Checks whether document supports digital signing.
         * @returns `true` if signing is supported,otherwise `false`
         */
        can_sign(): boolean;

        /**
         * @returns a list of {@link PapersDocument.CertificateInfo} objects or `null`
         */
        get_available_signing_certificates(): CertificateInfo[];

        /**
         * @param nick_name certificate nick name
         * @returns a new {@link PapersDocument.CertificateInfo}, or `null`
         */
        get_certificate_info(nick_name: string): CertificateInfo;

        /**
         * @returns a list of {@link PapersDocument.Signature} objects
         */
        get_signatures(): Signature[];

        /**
         * @returns if the document has digital signatures
         */
        has_signatures(): boolean;

        /**
         * Popplers crypto backend asks for certificate password before access,
         * so set a helper function to actually allow the user to enter his password.
         * @param cb (closure user_data) an {@link PapersDocument.SignaturePasswordCallback}
         */
        set_password_callback(cb: SignaturePasswordCallback): void;

        /**
         * Start the final async process of signing a document using the prepared signature.
         * @param signature a {@link PapersDocument.Signature}
         * @param cancellable a {@link Gio.Cancellable}
         * @returns `true` if signing has been started,otherwise `false`
         */
        sign(signature: Signature, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Start the final async process of signing a document using the prepared signature.
         * @param signature a {@link PapersDocument.Signature}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback}
         * @returns `true` if signing has been started,otherwise `false`
         */
        sign(signature: Signature, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Start the final async process of signing a document using the prepared signature.
         * @param signature a {@link PapersDocument.Signature}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback}
         * @returns `true` if signing has been started,otherwise `false`
         */
        sign(signature: Signature, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finish `pps_document_signatures_sign` operation,
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if signing finish has been started,otherwise `false`
         * @throws GLib.Error
         */
        sign_finish(result: Gio.AsyncResult): boolean;
    }


    export const DocumentSignatures: DocumentSignaturesNamespace & {
        new (): DocumentSignatures; // This allows `obj instanceof DocumentSignatures`
    };

    namespace DocumentText {
        /**
         * Interface for implementing DocumentText.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param page 
             * @virtual
             */
            vfunc_get_text(page: Page): string;

            /**
             * FIXME
             * @param page a {@link PapersDocument.Page}
             * @virtual
             */
            vfunc_get_text_attrs(page: Page): Pango.AttrList;

            /**
             * @param page a {@link PapersDocument.Page} of that document
             * @param area a {@link PapersDocument.Rectangle} on that page
             * @since 47
             * @virtual
             */
            vfunc_get_text_in_area(page: Page, area: Rectangle): string | null;

            /**
             * @param page a {@link PapersDocument.Page}
             * @virtual
             */
            vfunc_get_text_layout(page: Page): [boolean, Rectangle[] | null];

            /**
             * @param page 
             * @virtual
             */
            vfunc_get_text_mapping(page: Page): cairo.Region;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentTextNamespace {
        $gtype: GObject.GType<DocumentText>;
        prototype: DocumentText;
    }
    /**
     * @gir-type Interface
     */
    interface DocumentText extends GObject.Object, DocumentText.Interface {

        // Methods
        /**
         * @param page 
         */
        get_text(page: Page): string;

        /**
         * FIXME
         * @param page a {@link PapersDocument.Page}
         * @returns a newly created {@link Pango.AttrList}
         */
        get_text_attrs(page: Page): Pango.AttrList;

        /**
         * @param page a {@link PapersDocument.Page} of that document
         * @param area a {@link PapersDocument.Rectangle} on that page
         * @returns the text inside the area of the specified page or `null`
         * @since 47
         */
        get_text_in_area(page: Page, area: Rectangle): string | null;

        /**
         * @param page a {@link PapersDocument.Page}
         * @returns whether the text layout is empty, i.e. there is text on the page
         */
        get_text_layout(page: Page): [boolean, Rectangle[] | null];

        /**
         * @param page 
         */
        get_text_mapping(page: Page): cairo.Region;
    }


    export const DocumentText: DocumentTextNamespace & {
        new (): DocumentText; // This allows `obj instanceof DocumentText`
    };

    namespace DocumentTransition {
        /**
         * Interface for implementing DocumentTransition.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param page a page index
             * @virtual
             */
            vfunc_get_effect(page: number): TransitionEffect;

            /**
             * @param page 
             * @virtual
             */
            vfunc_get_page_duration(page: number): number;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentTransitionNamespace {
        $gtype: GObject.GType<DocumentTransition>;
        prototype: DocumentTransition;
    }
    /**
     * @gir-type Interface
     */
    interface DocumentTransition extends GObject.Object, DocumentTransition.Interface {

        // Methods
        /**
         * @param page a page index
         * @returns an {@link PapersDocument.TransitionEffect}
         */
        get_effect(page: number): TransitionEffect;

        /**
         * @param page 
         */
        get_page_duration(page: number): number;
    }


    export const DocumentTransition: DocumentTransitionNamespace & {
        new (): DocumentTransition; // This allows `obj instanceof DocumentTransition`
    };

    namespace FileExporter {
        /**
         * Interface for implementing FileExporter.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param fc 
             * @virtual
             */
            vfunc_begin(fc: FileExporterContext): void;

            /**
             * @virtual
             */
            vfunc_begin_page(): void;

            /**
             * @param rc 
             * @virtual
             */
            vfunc_do_page(rc: RenderContext): void;

            /**
             * @virtual
             */
            vfunc_end(): void;

            /**
             * @virtual
             */
            vfunc_end_page(): void;

            /**
             * @virtual
             */
            vfunc_get_capabilities(): FileExporterCapabilities;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface FileExporterNamespace {
        $gtype: GObject.GType<FileExporter>;
        prototype: FileExporter;
    }
    /**
     * @gir-type Interface
     */
    interface FileExporter extends GObject.Object, FileExporter.Interface {

        // Methods
        /**
         * @param fc 
         */
        begin(fc: FileExporterContext): void;

        begin_page(): void;

        /**
         * @param rc 
         */
        do_page(rc: RenderContext): void;

        end(): void;

        end_page(): void;

        get_capabilities(): FileExporterCapabilities;
    }


    export const FileExporter: FileExporterNamespace & {
        new (): FileExporter; // This allows `obj instanceof FileExporter`
    };

    namespace Selection {
        /**
         * Interface for implementing Selection.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param page 
             * @param style 
             * @param points 
             * @virtual
             */
            vfunc_get_selected_text(page: Page, style: SelectionStyle, points: Rectangle): string;

            /**
             * @param rc 
             * @param style 
             * @param points 
             * @virtual
             */
            vfunc_get_selection_region(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region;

            /**
             * @param rc a {@link PapersDocument.RenderContext}
             * @param points current selection points
             * @param old_points old selection points
             * @param style a {@link PapersDocument.SelectionStyle}
             * @param text foreground text color
             * @param base base color
             * @virtual
             */
            vfunc_render_selection(rc: RenderContext, points: Rectangle, old_points: Rectangle, style: SelectionStyle, text: Gdk.RGBA, base: Gdk.RGBA): cairo.Surface;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SelectionNamespace {
        $gtype: GObject.GType<Selection>;
        prototype: Selection;
    }
    /**
     * @gir-type Interface
     */
    interface Selection extends GObject.Object, Selection.Interface {

        // Methods
        /**
         * @param page 
         * @param style 
         * @param points 
         */
        get_selected_text(page: Page, style: SelectionStyle, points: Rectangle): string;

        /**
         * @param rc 
         * @param style 
         * @param points 
         */
        get_selection_region(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region;

        /**
         * @param rc a {@link PapersDocument.RenderContext}
         * @param points current selection points
         * @param old_points old selection points
         * @param style a {@link PapersDocument.SelectionStyle}
         * @param text foreground text color
         * @param base base color
         */
        render_selection(rc: RenderContext, points: Rectangle, old_points: Rectangle, style: SelectionStyle, text: Gdk.RGBA, base: Gdk.RGBA): cairo.Surface;
    }


    export const Selection: SelectionNamespace & {
        new (): Selection; // This allows `obj instanceof Selection`
    };

    /**
     * @gir-type Alias
     */
    type BackendPage = never;

    /**
     * @gir-type Alias
     */
    type BackendPageDestroyFunc = GLib.DestroyNotify;

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

export default PapersDocument;

// END
