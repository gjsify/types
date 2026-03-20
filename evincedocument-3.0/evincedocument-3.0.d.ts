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
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace EvinceDocument {
    /**
     * EvinceDocument-3.0
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
        NOTE,
        COMMENT,
        KEY,
        HELP,
        NEW_PARAGRAPH,
        PARAGRAPH,
        INSERT,
        CROSS,
        CIRCLE,
        UNKNOWN,
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
        HIGHLIGHT,
        STRIKE_OUT,
        UNDERLINE,
        SQUIGGLY,
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
        UNKNOWN,
        TEXT,
        ATTACHMENT,
        TEXT_MARKUP,
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
        NOT_IMPLEMENTED,
        UNKNOWN,
        YES,
        NOT,
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
        NONE,
        BZIP2,
        GZIP,
        LZMA,
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
        UNKNOWN,
        NO,
        YES,
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
        SINGLE_PAGE,
        ONE_COLUMN,
        TWO_COLUMN_LEFT,
        TWO_COLUMN_RIGHT,
        TWO_PAGE_LEFT,
        TWO_PAGE_RIGHT,
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
        NONE,
        USE_OC,
        USE_THUMBS,
        FULL_SCREEN,
        USE_ATTACHMENTS,
        PRESENTATION,
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
        UNKNOWN,
        PS,
        PDF,
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
        PUSH,
        CHECK,
        RADIO,
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
        COMBO,
        LIST,
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
        NORMAL,
        MULTILINE,
        FILE_SELECT,
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
        GOTO_DEST,
        GOTO_REMOTE,
        EXTERNAL_URI,
        LAUNCH,
        NAMED,
        LAYERS_STATE,
        RESET_FORM,
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
        PAGE,
        XYZ,
        FIT,
        FITH,
        FITV,
        FITR,
        NAMED,
        PAGE_LABEL,
        UNKNOWN,
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
        GLYPH,
        WORD,
        LINE,
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
        HORIZONTAL,
        VERTICAL,
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
        INWARD,
        OUTWARD,
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
        REPLACE,
        SPLIT,
        BLINDS,
        BOX,
        WIPE,
        DISSOLVE,
        GLITTER,
        FLY,
        PUSH,
        COVER,
        UNCOVER,
        FADE,
    }

    /**
     * The major version number of the EV library
     * (e.g. in version 3.1.4 this is 3).
     */
    const MAJOR_VERSION: number;
    /**
     * The minor version number of the EV library
     * (e.g. in version 3.1.4 this is 1).
     */
    const MINOR_VERSION: number;
    /**
     * @param mime_type a mime type hint
     * @returns a new {@link EvinceDocument.Document}
     */
    function backends_manager_get_document(mime_type: string): Document;
    /**
     * @param document
     */
    function backends_manager_get_document_module_name(document: Document): string;
    function document_error_quark(): GLib.Quark;
    /**
     * Compresses the file at `uri`.
     *
     * If `type` is {@link EvinceDocument.CompressionType.NONE}, it does nothing and returns `null`.
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
     */
    function file_compress(uri: string, type: CompressionType | null): string;
    /**
     * Performs a `g_file_copy_attributes()` with {@link Gio.FileCopyFlags.ALL_METADATA}
     * from `from` to `to`.
     * @param from the source URI
     * @param to the target URI
     * @returns `true` if the attributes were copied successfully, `false` otherwise.
     * @since 3.4
     */
    function file_copy_metadata(from: string, to: string): boolean;
    /**
     * @param uri the URI
     * @param fast whether to use fast MIME type detection
     * @returns a newly allocated string with the MIME type of the file at   `uri`, or `null` on error or if the MIME type could not be determined
     */
    function file_get_mime_type(uri: string, fast: boolean): string;
    /**
     * @param fd an file descriptor (must be seekable)
     * @returns a newly allocated string with the MIME type of the file referred to   by `fd`, or `null` on error or if the MIME type could not be determined
     */
    function file_get_mime_type_from_fd(fd: number): string;
    /**
     * @param file
     */
    function file_is_temp(file: Gio.File): boolean;
    /**
     * Uncompresses the file at `uri`.
     *
     * If `type` is {@link EvinceDocument.CompressionType.NONE}, it does nothing and returns `null`.
     *
     * Otherwise, it returns the filename of a
     * temporary file containing the decompressed data from the file at `uri`.
     * On error it returns `null` and fills in `error`.
     *
     * It is the caller's responsibility to unlink the temp file after use.
     * @param uri a file URI
     * @param type the compression type
     * @returns a newly allocated string URI, or `null` on error
     */
    function file_uncompress(uri: string, type: CompressionType | null): string;
    function get_locale_dir(): string;
    /**
     * Initializes the evince document library, and binds the evince
     * gettext domain.
     *
     * You must call this before calling any other function in the evince
     * document library.
     * @returns `true` if any backends were found; `false` otherwise
     */
    function init(): boolean;
    /**
     * Creates a temp directory in the evince temp directory.
     * @param tmpl a template string; must end in 'XXXXXX'
     * @returns a newly allocated string with the temp directory name, or `null`   on error with `error` filled in
     */
    function mkdtemp(tmpl: string): string;
    /**
     * Creates a temp file in the evince temp directory.
     * @param tmpl a template string; must contain 'XXXXXX', but not necessarily as a suffix
     * @param file_name a location to store the filename of the temp file
     * @returns a file descriptor to the newly created temp file name, or %-1   on error with `error` filled in
     */
    function mkstemp(tmpl: string, file_name: string): number;
    /**
     * Creates a temp {@link Gio.File} in the evince temp directory. See `ev_mkstemp()` for more information.
     * @param tmpl a template string; must contain 'XXXXXX', but not necessarily as a suffix
     * @returns a newly allocated {@link Gio.File} for the newly created temp file name, or `null`   on error with `error` filled in
     */
    function mkstemp_file(tmpl: string): Gio.File;
    /**
     * @param a
     * @param b
     */
    function rect_cmp(a: Rectangle, b: Rectangle): number;
    /**
     * Checks whether evince should use the portal.
     * @returns whether evince should use the portal
     * @since 3.30
     */
    function should_use_portal(): boolean;
    /**
     * Shuts the evince document library down.
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
     */
    function xfer_uri_simple(from: string, to: string): boolean;
    /**
     * @param xmp
     * @param size
     * @param info
     */
    function xmp_parse(xmp: string, size: number, info: DocumentInfo): boolean;
    /**
     * @gir-type Flags
     */
    export namespace AnnotationsSaveMask {
        export const $gtype: GObject.GType<AnnotationsSaveMask>;
    }

    /**
     * @gir-type Flags
     */
    enum AnnotationsSaveMask {
        NONE,
        CONTENTS,
        COLOR,
        AREA,
        LABEL,
        OPACITY,
        POPUP_RECT,
        POPUP_IS_OPEN,
        TEXT_IS_OPEN,
        TEXT_ICON,
        ATTACHMENT,
        TEXT_MARKUP_TYPE,
        ALL,
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
        TITLE,
        FORMAT,
        AUTHOR,
        SUBJECT,
        KEYWORDS,
        LAYOUT,
        CREATOR,
        PRODUCER,
        CREATION_DATE,
        MOD_DATE,
        LINEARIZED,
        START_MODE,
        UI_HINTS,
        PERMISSIONS,
        N_PAGES,
        SECURITY,
        PAPER_SIZE,
        LICENSE,
        CONTAINS_JS,
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
        NONE,
        NO_CACHE,
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
        OK_TO_PRINT,
        OK_TO_MODIFY,
        OK_TO_COPY,
        OK_TO_ADD_NOTES,
        FULL,
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
        HIDE_TOOLBAR,
        HIDE_MENUBAR,
        HIDE_WINDOWUI,
        FIT_WINDOW,
        CENTER_WINDOW,
        DISPLAY_DOC_TITLE,
        DIRECTION_RTL,
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
        PAGE_SET,
        COPIES,
        COLLATE,
        REVERSE,
        SCALE,
        GENERATE_PDF,
        GENERATE_PS,
        PREVIEW,
        NUMBER_UP,
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
        DEFAULT,
        CASE_SENSITIVE,
        WHOLE_WORDS_ONLY,
    }

    namespace Annotation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::area': (pspec: GObject.ParamSpec) => void;
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::contents': (pspec: GObject.ParamSpec) => void;
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::page': (pspec: GObject.ParamSpec) => void;
            'notify::rgba': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            area: Rectangle;
            color: any;
            contents: string;
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
         * The colour of the annotation as a {@link Gdk.Color}.
         * @deprecated since 3.6: Use {@link EvinceDocument.Annotation.rgba} instead.
         */
        get color(): any;
        set color(val: any);
        get contents(): string;
        set contents(val: string);
        get modified(): string;
        set modified(val: string);
        get name(): string;
        set name(val: string);
        /**
         * @construct-only
         */
        set page(val: Page);
        /**
         * The colour of the annotation as a {@link Gdk.RGBA}.
         * @since 3.6
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
        connect<K extends keyof Annotation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Annotation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Annotation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Annotation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Annotation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Annotation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Compare `annot` and `other`.
         * @param other another {@link EvinceDocument.Annotation}
         * @returns `true` if `annot` is equal to `other`, `false` otherwise
         */
        equal(other: Annotation): boolean;
        get_annotation_type(): AnnotationType;
        /**
         * Gets the area of `annot`.
         */
        get_area(): Rectangle;
        /**
         * Get the color of `annot`.
         */
        get_color(): Gdk.Color;
        /**
         * Get the contents of `annot`. The contents of
         * `annot` is the text that is displayed in the annotation, or an
         * alternate description of the annotation's content for non-text annotations
         * @returns a string with the contents of the annotation or `null` if `annot` has no contents.
         */
        get_contents(): string;
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
         * @returns the {@link EvinceDocument.Page} where `annot` appears
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
         * Set the area of the annotation to `area`.
         * @param area a {@link EvinceDocument.Rectangle}
         * @returns `true` if the area has been changed, `false` otherwise
         */
        set_area(area: Rectangle): boolean;
        /**
         * Set the color of the annotation to `color`. You can monitor
         * changes to the annotation's color by connecting to
         * notify::color signal on `annot`.
         * @param color a {@link Gdk.Color}
         * @returns `true`  when the color has been changed, `false` otherwise.
         */
        set_color(color: Gdk.Color): boolean;
        /**
         * Set the contents of `annot`. You can monitor
         * changes in the annotation's  contents by connecting to
         * notify::contents signal of `annot`.
         * @param contents
         * @returns `true` if the contents have been changed, `false` otherwise.
         */
        set_contents(contents: string): boolean;
        /**
         * Set the last modification date of `annot` to `modified`. To
         * set the last modification date using a `time_t`, use
         * `ev_annotation_set_modified_from_time_t()` instead. You can monitor
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
         * For the time-format used, see `ev_document_misc_format_date()`.
         * @param utime a {@link GLib.Time}
         * @returns `true` if the last modified date has been updated, `false` otherwise.
         */
        set_modified_from_time(utime: GLib.Time): boolean;
        /**
         * Set the last modification date of `annot` to `utime`.  You can
         * monitor changes to the last modification date by connecting to the
         * notify::modified sinal on `annot`.
         * For the time-format used, see `ev_document_misc_format_datetime()`.
         * @param utime a `time_t`
         * @returns `true` if the last modified date has been updated, `false` otherwise.
         */
        set_modified_from_time_t(utime: number): boolean;
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
        interface SignalSignatures extends Annotation.SignalSignatures {
            'notify::attachment': (pspec: GObject.ParamSpec) => void;
            'notify::area': (pspec: GObject.ParamSpec) => void;
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::contents': (pspec: GObject.ParamSpec) => void;
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::page': (pspec: GObject.ParamSpec) => void;
            'notify::rgba': (pspec: GObject.ParamSpec) => void;
            'notify::can-have-popup': (pspec: GObject.ParamSpec) => void;
            'notify::has-popup': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::popup-is-open': (pspec: GObject.ParamSpec) => void;
            'notify::rectangle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Annotation.ConstructorProps, AnnotationMarkup.ConstructorProps {
            attachment: Attachment;
        }
    }

    /**
     * @gir-type Class
     */
    class AnnotationAttachment extends Annotation implements AnnotationMarkup {
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

        static ['new'](page: Page, attachment: Attachment): AnnotationAttachment;

        // Signals

        /** @signal */
        connect<K extends keyof AnnotationAttachment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnnotationAttachment.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AnnotationAttachment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnnotationAttachment.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AnnotationAttachment.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AnnotationAttachment.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns an {@link EvinceDocument.Attachment}
         */
        get_attachment(): Attachment;
        /**
         * @param attachment
         */
        set_attachment(attachment: Attachment): boolean;
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        // This accessor conflicts with a field or function name in a parent class or interface.
        can_have_popup: boolean | any;
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get canHavePopup(): boolean;
        set canHavePopup(val: boolean);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        // This accessor conflicts with a field or function name in a parent class or interface.
        has_popup: boolean | any;
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get hasPopup(): boolean;
        set hasPopup(val: boolean);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get label(): string;
        set label(val: string);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get opacity(): number;
        set opacity(val: number);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get popup_is_open(): boolean;
        set popup_is_open(val: boolean);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get popupIsOpen(): boolean;
        set popupIsOpen(val: boolean);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get rectangle(): Rectangle;
        set rectangle(val: Rectangle);
        /**
         * The area of the page where the annotation is placed.
         *
         * Since 3.18
         * @category Inherited from EvinceDocument.Annotation
         */
        get area(): Rectangle;
        set area(val: Rectangle);
        /**
         * The colour of the annotation as a {@link Gdk.Color}.
         * @deprecated since 3.6: Use {@link EvinceDocument.Annotation.rgba} instead.
         * @category Inherited from EvinceDocument.Annotation
         */
        get color(): any;
        set color(val: any);
        /** @category Inherited from EvinceDocument.Annotation */
        get contents(): string;
        set contents(val: string);
        /** @category Inherited from EvinceDocument.Annotation */
        get modified(): string;
        set modified(val: string);
        /** @category Inherited from EvinceDocument.Annotation */
        get name(): string;
        set name(val: string);
        /**
         * @construct-only
         * @category Inherited from EvinceDocument.Annotation
         */
        set page(val: Page);
        /**
         * The colour of the annotation as a {@link Gdk.RGBA}.
         * @since 3.6
         * @category Inherited from EvinceDocument.Annotation
         */
        get rgba(): Gdk.RGBA;
        set rgba(val: Gdk.RGBA);
        get_label(): string;
        get_opacity(): number;
        get_popup_is_open(): boolean;
        /**
         * @param ev_rect
         */
        get_rectangle(ev_rect: Rectangle): void;
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
         * @param ev_rect
         */
        set_rectangle(ev_rect: Rectangle): boolean;
        /**
         * Compare `annot` and `other`.
         * @param other another {@link EvinceDocument.Annotation}
         * @returns `true` if `annot` is equal to `other`, `false` otherwise
         */
        equal(other: Annotation): boolean;
        get_annotation_type(): AnnotationType;
        /**
         * Gets the area of `annot`.
         */
        get_area(): Rectangle;
        /**
         * Get the color of `annot`.
         */
        get_color(): Gdk.Color;
        /**
         * Get the contents of `annot`. The contents of
         * `annot` is the text that is displayed in the annotation, or an
         * alternate description of the annotation's content for non-text annotations
         * @returns a string with the contents of the annotation or `null` if `annot` has no contents.
         */
        get_contents(): string;
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
         * @returns the {@link EvinceDocument.Page} where `annot` appears
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
         * Set the area of the annotation to `area`.
         * @param area a {@link EvinceDocument.Rectangle}
         * @returns `true` if the area has been changed, `false` otherwise
         */
        set_area(area: Rectangle): boolean;
        /**
         * Set the color of the annotation to `color`. You can monitor
         * changes to the annotation's color by connecting to
         * notify::color signal on `annot`.
         * @param color a {@link Gdk.Color}
         * @returns `true`  when the color has been changed, `false` otherwise.
         */
        set_color(color: Gdk.Color): boolean;
        /**
         * Set the contents of `annot`. You can monitor
         * changes in the annotation's  contents by connecting to
         * notify::contents signal of `annot`.
         * @param contents
         * @returns `true` if the contents have been changed, `false` otherwise.
         */
        set_contents(contents: string): boolean;
        /**
         * Set the last modification date of `annot` to `modified`. To
         * set the last modification date using a `time_t`, use
         * `ev_annotation_set_modified_from_time_t()` instead. You can monitor
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
         * For the time-format used, see `ev_document_misc_format_date()`.
         * @param utime a {@link GLib.Time}
         * @returns `true` if the last modified date has been updated, `false` otherwise.
         */
        set_modified_from_time(utime: GLib.Time): boolean;
        /**
         * Set the last modification date of `annot` to `utime`.  You can
         * monitor changes to the last modification date by connecting to the
         * notify::modified sinal on `annot`.
         * For the time-format used, see `ev_document_misc_format_datetime()`.
         * @param utime a `time_t`
         * @returns `true` if the last modified date has been updated, `false` otherwise.
         */
        set_modified_from_time_t(utime: number): boolean;
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

    namespace AnnotationText {
        // Signal signatures
        interface SignalSignatures extends Annotation.SignalSignatures {
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::is-open': (pspec: GObject.ParamSpec) => void;
            'notify::area': (pspec: GObject.ParamSpec) => void;
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::contents': (pspec: GObject.ParamSpec) => void;
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::page': (pspec: GObject.ParamSpec) => void;
            'notify::rgba': (pspec: GObject.ParamSpec) => void;
            'notify::can-have-popup': (pspec: GObject.ParamSpec) => void;
            'notify::has-popup': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::popup-is-open': (pspec: GObject.ParamSpec) => void;
            'notify::rectangle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Annotation.ConstructorProps, AnnotationMarkup.ConstructorProps {
            icon: AnnotationTextIcon;
            is_open: boolean;
            isOpen: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class AnnotationText extends Annotation implements AnnotationMarkup {
        static $gtype: GObject.GType<AnnotationText>;

        // Properties

        get icon(): AnnotationTextIcon;
        set icon(val: AnnotationTextIcon);
        get is_open(): boolean;
        set is_open(val: boolean);
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

        static ['new'](page: Page): AnnotationText;

        // Signals

        /** @signal */
        connect<K extends keyof AnnotationText.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnnotationText.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AnnotationText.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnnotationText.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AnnotationText.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AnnotationText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_icon(): AnnotationTextIcon;
        get_is_open(): boolean;
        /**
         * @param icon
         */
        set_icon(icon: AnnotationTextIcon | null): boolean;
        /**
         * @param is_open
         */
        set_is_open(is_open: boolean): boolean;
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        // This accessor conflicts with a field or function name in a parent class or interface.
        can_have_popup: boolean | any;
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get canHavePopup(): boolean;
        set canHavePopup(val: boolean);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        // This accessor conflicts with a field or function name in a parent class or interface.
        has_popup: boolean | any;
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get hasPopup(): boolean;
        set hasPopup(val: boolean);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get label(): string;
        set label(val: string);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get opacity(): number;
        set opacity(val: number);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get popup_is_open(): boolean;
        set popup_is_open(val: boolean);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get popupIsOpen(): boolean;
        set popupIsOpen(val: boolean);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get rectangle(): Rectangle;
        set rectangle(val: Rectangle);
        /**
         * The area of the page where the annotation is placed.
         *
         * Since 3.18
         * @category Inherited from EvinceDocument.Annotation
         */
        get area(): Rectangle;
        set area(val: Rectangle);
        /**
         * The colour of the annotation as a {@link Gdk.Color}.
         * @deprecated since 3.6: Use {@link EvinceDocument.Annotation.rgba} instead.
         * @category Inherited from EvinceDocument.Annotation
         */
        get color(): any;
        set color(val: any);
        /** @category Inherited from EvinceDocument.Annotation */
        get contents(): string;
        set contents(val: string);
        /** @category Inherited from EvinceDocument.Annotation */
        get modified(): string;
        set modified(val: string);
        /** @category Inherited from EvinceDocument.Annotation */
        get name(): string;
        set name(val: string);
        /**
         * @construct-only
         * @category Inherited from EvinceDocument.Annotation
         */
        set page(val: Page);
        /**
         * The colour of the annotation as a {@link Gdk.RGBA}.
         * @since 3.6
         * @category Inherited from EvinceDocument.Annotation
         */
        get rgba(): Gdk.RGBA;
        set rgba(val: Gdk.RGBA);
        get_label(): string;
        get_opacity(): number;
        get_popup_is_open(): boolean;
        /**
         * @param ev_rect
         */
        get_rectangle(ev_rect: Rectangle): void;
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
         * @param ev_rect
         */
        set_rectangle(ev_rect: Rectangle): boolean;
        /**
         * Compare `annot` and `other`.
         * @param other another {@link EvinceDocument.Annotation}
         * @returns `true` if `annot` is equal to `other`, `false` otherwise
         */
        equal(other: Annotation): boolean;
        get_annotation_type(): AnnotationType;
        /**
         * Gets the area of `annot`.
         */
        get_area(): Rectangle;
        /**
         * Get the color of `annot`.
         */
        get_color(): Gdk.Color;
        /**
         * Get the contents of `annot`. The contents of
         * `annot` is the text that is displayed in the annotation, or an
         * alternate description of the annotation's content for non-text annotations
         * @returns a string with the contents of the annotation or `null` if `annot` has no contents.
         */
        get_contents(): string;
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
         * @returns the {@link EvinceDocument.Page} where `annot` appears
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
         * Set the area of the annotation to `area`.
         * @param area a {@link EvinceDocument.Rectangle}
         * @returns `true` if the area has been changed, `false` otherwise
         */
        set_area(area: Rectangle): boolean;
        /**
         * Set the color of the annotation to `color`. You can monitor
         * changes to the annotation's color by connecting to
         * notify::color signal on `annot`.
         * @param color a {@link Gdk.Color}
         * @returns `true`  when the color has been changed, `false` otherwise.
         */
        set_color(color: Gdk.Color): boolean;
        /**
         * Set the contents of `annot`. You can monitor
         * changes in the annotation's  contents by connecting to
         * notify::contents signal of `annot`.
         * @param contents
         * @returns `true` if the contents have been changed, `false` otherwise.
         */
        set_contents(contents: string): boolean;
        /**
         * Set the last modification date of `annot` to `modified`. To
         * set the last modification date using a `time_t`, use
         * `ev_annotation_set_modified_from_time_t()` instead. You can monitor
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
         * For the time-format used, see `ev_document_misc_format_date()`.
         * @param utime a {@link GLib.Time}
         * @returns `true` if the last modified date has been updated, `false` otherwise.
         */
        set_modified_from_time(utime: GLib.Time): boolean;
        /**
         * Set the last modification date of `annot` to `utime`.  You can
         * monitor changes to the last modification date by connecting to the
         * notify::modified sinal on `annot`.
         * For the time-format used, see `ev_document_misc_format_datetime()`.
         * @param utime a `time_t`
         * @returns `true` if the last modified date has been updated, `false` otherwise.
         */
        set_modified_from_time_t(utime: number): boolean;
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

    namespace AnnotationTextMarkup {
        // Signal signatures
        interface SignalSignatures extends Annotation.SignalSignatures {
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::area': (pspec: GObject.ParamSpec) => void;
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::contents': (pspec: GObject.ParamSpec) => void;
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::page': (pspec: GObject.ParamSpec) => void;
            'notify::rgba': (pspec: GObject.ParamSpec) => void;
            'notify::can-have-popup': (pspec: GObject.ParamSpec) => void;
            'notify::has-popup': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::popup-is-open': (pspec: GObject.ParamSpec) => void;
            'notify::rectangle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Annotation.ConstructorProps, AnnotationMarkup.ConstructorProps {
            type: AnnotationTextMarkupType;
        }
    }

    /**
     * @gir-type Class
     */
    class AnnotationTextMarkup extends Annotation implements AnnotationMarkup {
        static $gtype: GObject.GType<AnnotationTextMarkup>;

        // Properties

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

        static squiggly_new(page: Page): AnnotationTextMarkup;

        static strike_out_new(page: Page): AnnotationTextMarkup;

        static underline_new(page: Page): AnnotationTextMarkup;

        // Signals

        /** @signal */
        connect<K extends keyof AnnotationTextMarkup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnnotationTextMarkup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AnnotationTextMarkup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnnotationTextMarkup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AnnotationTextMarkup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AnnotationTextMarkup.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_markup_type(): AnnotationTextMarkupType;
        /**
         * @param markup_type
         */
        set_markup_type(markup_type: AnnotationTextMarkupType | null): boolean;
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        // This accessor conflicts with a field or function name in a parent class or interface.
        can_have_popup: boolean | any;
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get canHavePopup(): boolean;
        set canHavePopup(val: boolean);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        // This accessor conflicts with a field or function name in a parent class or interface.
        has_popup: boolean | any;
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get hasPopup(): boolean;
        set hasPopup(val: boolean);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get label(): string;
        set label(val: string);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get opacity(): number;
        set opacity(val: number);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get popup_is_open(): boolean;
        set popup_is_open(val: boolean);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get popupIsOpen(): boolean;
        set popupIsOpen(val: boolean);
        /** @category Inherited from EvinceDocument.AnnotationMarkup */
        get rectangle(): Rectangle;
        set rectangle(val: Rectangle);
        /**
         * The area of the page where the annotation is placed.
         *
         * Since 3.18
         * @category Inherited from EvinceDocument.Annotation
         */
        get area(): Rectangle;
        set area(val: Rectangle);
        /**
         * The colour of the annotation as a {@link Gdk.Color}.
         * @deprecated since 3.6: Use {@link EvinceDocument.Annotation.rgba} instead.
         * @category Inherited from EvinceDocument.Annotation
         */
        get color(): any;
        set color(val: any);
        /** @category Inherited from EvinceDocument.Annotation */
        get contents(): string;
        set contents(val: string);
        /** @category Inherited from EvinceDocument.Annotation */
        get modified(): string;
        set modified(val: string);
        /** @category Inherited from EvinceDocument.Annotation */
        get name(): string;
        set name(val: string);
        /**
         * @construct-only
         * @category Inherited from EvinceDocument.Annotation
         */
        set page(val: Page);
        /**
         * The colour of the annotation as a {@link Gdk.RGBA}.
         * @since 3.6
         * @category Inherited from EvinceDocument.Annotation
         */
        get rgba(): Gdk.RGBA;
        set rgba(val: Gdk.RGBA);
        get_label(): string;
        get_opacity(): number;
        get_popup_is_open(): boolean;
        /**
         * @param ev_rect
         */
        get_rectangle(ev_rect: Rectangle): void;
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
         * @param ev_rect
         */
        set_rectangle(ev_rect: Rectangle): boolean;
        /**
         * Compare `annot` and `other`.
         * @param other another {@link EvinceDocument.Annotation}
         * @returns `true` if `annot` is equal to `other`, `false` otherwise
         */
        equal(other: Annotation): boolean;
        get_annotation_type(): AnnotationType;
        /**
         * Gets the area of `annot`.
         */
        get_area(): Rectangle;
        /**
         * Get the color of `annot`.
         */
        get_color(): Gdk.Color;
        /**
         * Get the contents of `annot`. The contents of
         * `annot` is the text that is displayed in the annotation, or an
         * alternate description of the annotation's content for non-text annotations
         * @returns a string with the contents of the annotation or `null` if `annot` has no contents.
         */
        get_contents(): string;
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
         * @returns the {@link EvinceDocument.Page} where `annot` appears
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
         * Set the area of the annotation to `area`.
         * @param area a {@link EvinceDocument.Rectangle}
         * @returns `true` if the area has been changed, `false` otherwise
         */
        set_area(area: Rectangle): boolean;
        /**
         * Set the color of the annotation to `color`. You can monitor
         * changes to the annotation's color by connecting to
         * notify::color signal on `annot`.
         * @param color a {@link Gdk.Color}
         * @returns `true`  when the color has been changed, `false` otherwise.
         */
        set_color(color: Gdk.Color): boolean;
        /**
         * Set the contents of `annot`. You can monitor
         * changes in the annotation's  contents by connecting to
         * notify::contents signal of `annot`.
         * @param contents
         * @returns `true` if the contents have been changed, `false` otherwise.
         */
        set_contents(contents: string): boolean;
        /**
         * Set the last modification date of `annot` to `modified`. To
         * set the last modification date using a `time_t`, use
         * `ev_annotation_set_modified_from_time_t()` instead. You can monitor
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
         * For the time-format used, see `ev_document_misc_format_date()`.
         * @param utime a {@link GLib.Time}
         * @returns `true` if the last modified date has been updated, `false` otherwise.
         */
        set_modified_from_time(utime: GLib.Time): boolean;
        /**
         * Set the last modification date of `annot` to `utime`.  You can
         * monitor changes to the last modification date by connecting to the
         * notify::modified sinal on `annot`.
         * For the time-format used, see `ev_document_misc_format_datetime()`.
         * @param utime a `time_t`
         * @returns `true` if the last modified date has been updated, `false` otherwise.
         */
        set_modified_from_time_t(utime: number): boolean;
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

    namespace Attachment {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::ctime': (pspec: GObject.ParamSpec) => void;
            'notify::data': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::mtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            ctime: number;
            data: any;
            description: string;
            mtime: number;
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
        set ctime(val: number);
        /**
         * @construct-only
         */
        set data(val: any);
        /**
         * @construct-only
         */
        set description(val: string);
        /**
         * @construct-only
         */
        set mtime(val: number);
        /**
         * @construct-only
         */
        set name(val: string);
        /**
         * @construct-only
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

        // Fields

        base_instance: GObject.Object;

        // Constructors

        constructor(properties?: Partial<Attachment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            name: string,
            description: string,
            mtime: GLib.Time,
            ctime: GLib.Time,
            size: number,
            data?: any | null,
        ): Attachment;

        // Signals

        /** @signal */
        connect<K extends keyof Attachment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Attachment.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Attachment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Attachment.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Attachment.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Attachment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): GLib.Quark;

        // Methods

        get_creation_date(): GLib.Time;
        get_description(): string;
        get_mime_type(): string;
        get_modification_date(): GLib.Time;
        get_name(): string;
        /**
         * @param screen
         * @param timestamp
         */
        open(screen: Gdk.Screen, timestamp: number): boolean;
        /**
         * @param file
         */
        save(file: Gio.File): boolean;
    }

    namespace Document {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::modified': (pspec: GObject.ParamSpec) => void;
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

        // Fields

        base: GObject.Object;

        // Constructors

        constructor(properties?: Partial<Document.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Document.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Document.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Document.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Document.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Document.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Document.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static doc_mutex_lock(): void;
        static doc_mutex_trylock(): boolean;
        static doc_mutex_unlock(): void;
        /**
         * Adds some file filters to `chooser`.
         *
         * Always add a "All documents" format.
         *
         * If `document` is not `null`, adds a {@link Gtk.FileFilter} for `document`'s MIME type.
         *
         * If `document` is `null`, adds a {@link Gtk.FileFilter} for each document type that evince
         * can handle.
         * @param chooser a {@link Gtk.FileChooser}
         * @param document a {@link EvinceDocument.Document}, or `null`
         */
        static factory_add_filters(chooser: Gtk.Widget, document: Document): void;
        /**
         * Creates a {@link EvinceDocument.Document} for the document at `uri`; or, if no backend handling
         * the document's type is found, or an error occurred on opening the document,
         * returns `null` and fills in `error`.
         * If the document is encrypted, it is returned but also `error` is set to
         * {@link EvinceDocument.DocumentError.ENCRYPTED}.
         * @param uri an URI
         */
        static factory_get_document(uri: string): Document;
        /**
         * Synchronously creates a {@link EvinceDocument.Document} for the document from `fd` using the backend
         * for loading documents of type `mime_type`; or, if the backend does not support
         * loading from file descriptors, or an error occurred on opening the document,
         * returns `null` and fills in `error`.
         * If the document is encrypted, it is returned but also `error` is set to
         * {@link EvinceDocument.DocumentError.ENCRYPTED}.
         *
         * If the mime type cannot be inferred from the file descriptor, and `mime_type` is `null`,
         * an error is returned.
         *
         * Note that this function takes ownership of `fd`; you must not ever
         * operate on it again. It will be closed automatically if the document
         * is destroyed, or if this function returns `null`.
         * @param fd a file descriptor
         * @param mime_type the mime type
         * @param flags flags from {@link EvinceDocument.DocumentLoadFlags}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        static factory_get_document_for_fd(
            fd: number,
            mime_type: string,
            flags: DocumentLoadFlags,
            cancellable?: Gio.Cancellable | null,
        ): Document;
        /**
         * Synchronously creates a {@link EvinceDocument.Document} for the document at `file`; or, if no
         * backend handling the document's type is found, or an error occurred on
         * opening the document, returns `null` and fills in `error`.
         * If the document is encrypted, it is returned but also `error` is set to
         * {@link EvinceDocument.DocumentError.ENCRYPTED}.
         * @param file a {@link Gio.File}
         * @param flags flags from {@link EvinceDocument.DocumentLoadFlags}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        static factory_get_document_for_gfile(
            file: Gio.File,
            flags: DocumentLoadFlags,
            cancellable?: Gio.Cancellable | null,
        ): Document;
        /**
         * Synchronously creates a {@link EvinceDocument.Document} for the document from `stream`; or, if no
         * backend handling the document's type is found, or an error occurred
         * on opening the document, returns `null` and fills in `error`.
         * If the document is encrypted, it is returned but also `error` is set to
         * {@link EvinceDocument.DocumentError.ENCRYPTED}.
         *
         * If `mime_type` is non-`null`, this overrides any type inferred from the stream.
         * If the mime type cannot be inferred from the stream, and `mime_type` is `null`,
         * an error is returned.
         * @param stream a {@link Gio.InputStream}
         * @param mime_type a mime type hint
         * @param flags flags from {@link EvinceDocument.DocumentLoadFlags}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        static factory_get_document_for_stream(
            stream: Gio.InputStream,
            mime_type: string | null,
            flags: DocumentLoadFlags,
            cancellable?: Gio.Cancellable | null,
        ): Document;
        /**
         * Creates a {@link EvinceDocument.Document} for the document at `uri`; or, if no backend handling
         * the document's type is found, or an error occurred on opening the document,
         * returns `null` and fills in `error`.
         * If the document is encrypted, it is returned but also `error` is set to
         * {@link EvinceDocument.DocumentError.ENCRYPTED}.
         * @param uri an URI
         * @param flags flags from {@link EvinceDocument.DocumentLoadFlags}
         */
        static factory_get_document_full(uri: string, flags: DocumentLoadFlags): Document;
        static fc_mutex_lock(): void;
        static fc_mutex_trylock(): boolean;
        static fc_mutex_unlock(): void;
        /**
         * @param utime a {@link GLib.Time}
         */
        static misc_format_date(utime: GLib.Time): string;
        /**
         * Determine the preferred date and time representation for the current locale
         * for `dt`.
         * @param dt a {@link GLib.DateTime}
         */
        static misc_format_datetime(dt: GLib.DateTime): string;
        /**
         * @param width the desired width
         * @param height the desired height
         * @param inverted_colors whether to invert colors
         */
        static misc_get_loading_thumbnail(width: number, height: number, inverted_colors: boolean): GdkPixbuf.Pixbuf;
        /**
         * @param page_width
         * @param page_height
         * @param border
         */
        static misc_get_page_border_size(page_width: number, page_height: number, border: Gtk.Border): void;
        /**
         * Get the pointer's x and y position relative to `widget`.
         * @param widget a {@link Gtk.Widget}
         */
        static misc_get_pointer_position(widget: Gtk.Widget): [number, number];
        /**
         * @param screen a {@link Gdk.Screen}
         */
        static misc_get_screen_dpi(screen: Gdk.Screen): number;
        /**
         * @param width the desired width
         * @param height the desired height
         * @param source_pixbuf a {@link GdkPixbuf.Pixbuf}
         */
        static misc_get_thumbnail_frame(
            width: number,
            height: number,
            source_pixbuf: GdkPixbuf.Pixbuf,
        ): GdkPixbuf.Pixbuf;
        /**
         * Returns sensible guess for DPI of monitor on which given widget has been
         * realized. If HiDPI display, use 192, else 96.
         * Returns 96 as fallback value.
         * @param widget a {@link Gtk.Widget}
         */
        static misc_get_widget_dpi(widget: Gtk.Widget): number;
        /**
         * @param pixbuf
         */
        static misc_invert_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
        /**
         * @param surface
         */
        static misc_invert_surface(surface: cairo.Surface): void;
        /**
         * @param cr a #cairo_tEvannotation `widget` a {@link Gtk.Widget}
         * @param widget
         * @param area a {@link Gdk.Rectangle}
         * @param border a {@link Gtk.Border}
         * @param highlight whether to highlight the text
         * @param inverted_colors whether to invert colors
         */
        static misc_paint_one_page(
            cr: cairo.Context,
            widget: Gtk.Widget,
            area: Gdk.Rectangle,
            border: Gtk.Border,
            highlight: boolean,
            inverted_colors: boolean,
        ): void;
        /**
         * @param surface a {@link cairo.Surface}
         */
        static misc_pixbuf_from_surface(surface: cairo.Surface): GdkPixbuf.Pixbuf;
        /**
         * @param widget a {@link Gtk.Widget} to use for style information
         * @param width the desired width
         * @param height the desired height
         * @param inverted_colors whether to invert colors
         */
        static misc_render_loading_thumbnail(
            widget: Gtk.Widget,
            width: number,
            height: number,
            inverted_colors: boolean,
        ): GdkPixbuf.Pixbuf;
        /**
         * @param widget a {@link Gtk.Widget} to use for style information
         * @param width the desired width
         * @param height the desired height
         * @param inverted_colors whether to invert colors
         */
        static misc_render_loading_thumbnail_surface(
            widget: Gtk.Widget,
            width: number,
            height: number,
            inverted_colors: boolean,
        ): cairo.Surface;
        /**
         * @param widget a {@link Gtk.Widget} to use for style information
         * @param source_surface a {@link cairo.Surface}
         * @param width the desired width
         * @param height the desired height
         */
        static misc_render_thumbnail_surface_with_frame(
            widget: Gtk.Widget,
            source_surface: cairo.Surface,
            width: number,
            height: number,
        ): cairo.Surface;
        /**
         * @param widget a {@link Gtk.Widget} to use for style information
         * @param source_pixbuf a {@link GdkPixbuf.Pixbuf}
         */
        static misc_render_thumbnail_with_frame(widget: Gtk.Widget, source_pixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf;
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
        static misc_surface_rotate_and_scale(
            surface: cairo.Surface,
            dest_width: number,
            dest_height: number,
            dest_rotation: number,
        ): cairo.Surface;

        // Virtual methods

        /**
         * @param info
         * @virtual
         */
        vfunc_get_backend_info(info: DocumentBackendInfo): boolean;
        /**
         * Returns the {@link EvinceDocument.DocumentInfo} for the document.
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
         * @param rc an {@link EvinceDocument.RenderContext}
         * @virtual
         */
        vfunc_get_thumbnail(rc: RenderContext): GdkPixbuf.Pixbuf;
        /**
         * @param rc an {@link EvinceDocument.RenderContext}
         * @virtual
         */
        vfunc_get_thumbnail_surface(rc: RenderContext): cairo.Surface;
        /**
         * Loads `document` from `uri`.
         *
         * On failure, `false` is returned and `error` is filled in.
         * If the document is encrypted, EV_DEFINE_ERROR_ENCRYPTED is returned.
         * If the backend cannot load the specific document, EV_DOCUMENT_ERROR_INVALID
         * is returned. If the backend does not support the format for the document's
         * contents, EV_DOCUMENT_ERROR_UNSUPPORTED_CONTENT is returned. Other errors
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
         * See `ev_document_load()` for more information.
         * @param fd a file descriptor
         * @param flags flags from {@link EvinceDocument.DocumentLoadFlags}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @virtual
         */
        vfunc_load_fd(fd: number, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Synchronously loads the document from `file`.
         * See `ev_document_load()` for more information.
         * @param file a {@link Gio.File}
         * @param flags flags from {@link EvinceDocument.DocumentLoadFlags}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @virtual
         */
        vfunc_load_gfile(file: Gio.File, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Synchronously loads the document from `stream`.
         * See `ev_document_load()` for more information.
         * @param stream a {@link Gio.InputStream}
         * @param flags flags from {@link EvinceDocument.DocumentLoadFlags}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @virtual
         */
        vfunc_load_stream(
            stream: Gio.InputStream,
            flags: DocumentLoadFlags,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        /**
         * @virtual
         */
        vfunc_support_synctex(): boolean;

        // Methods

        check_dimensions(): boolean;
        /**
         * @param page_label
         * @param page_index
         */
        find_page_by_label(page_label: string, page_index: number): boolean;
        /**
         * @param info
         */
        get_backend_info(info: DocumentBackendInfo): boolean;
        /**
         * Returns the {@link EvinceDocument.DocumentInfo} for the document.
         * @returns a {@link EvinceDocument.DocumentInfo}
         */
        get_info(): DocumentInfo;
        get_max_label_len(): number;
        /**
         * @param width
         * @param height
         */
        get_max_page_size(width: number, height: number): void;
        /**
         * @param width
         * @param height
         */
        get_min_page_size(width: number, height: number): void;
        /**
         * @returns `true` iff the document has been modified. You can monitor changes to the modification state by connecting to the notify::modified signal on `document`.
         */
        get_modified(): boolean;
        get_n_pages(): number;
        /**
         * @param index index of page
         * @returns Newly created {@link EvinceDocument.Page} for the given index.
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
        get_size(): number;
        /**
         * @param rc an {@link EvinceDocument.RenderContext}
         * @returns a {@link GdkPixbuf.Pixbuf}
         */
        get_thumbnail(rc: RenderContext): GdkPixbuf.Pixbuf;
        /**
         * @param rc an {@link EvinceDocument.RenderContext}
         * @returns a {@link cairo.Surface}
         */
        get_thumbnail_surface(rc: RenderContext): cairo.Surface;
        get_title(): string;
        get_uri(): string;
        has_synctex(): boolean;
        has_text_page_labels(): boolean;
        is_page_size_uniform(): boolean;
        /**
         * Loads `document` from `uri`.
         *
         * On failure, `false` is returned and `error` is filled in.
         * If the document is encrypted, EV_DEFINE_ERROR_ENCRYPTED is returned.
         * If the backend cannot load the specific document, EV_DOCUMENT_ERROR_INVALID
         * is returned. If the backend does not support the format for the document's
         * contents, EV_DOCUMENT_ERROR_UNSUPPORTED_CONTENT is returned. Other errors
         * are possible too, depending on the backend used to load the document and
         * the URI, e.g. {@link GLib.IOError}, {@link GLib.FileError}, and {@link GLib.ConvertError}.
         * @param uri the document's URI
         * @returns `true` on success, or `false` on failure.
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
         * See `ev_document_load()` for more information.
         * @param fd a file descriptor
         * @param flags flags from {@link EvinceDocument.DocumentLoadFlags}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns `true` if loading succeeded, or `false` on error with `error` filled in
         */
        load_fd(fd: number, flags: DocumentLoadFlags | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Loads `document` from `uri`.
         *
         * On failure, `false` is returned and `error` is filled in.
         * If the document is encrypted, EV_DEFINE_ERROR_ENCRYPTED is returned.
         * If the backend cannot load the specific document, EV_DOCUMENT_ERROR_INVALID
         * is returned. Other errors are possible too, depending on the backend
         * used to load the document and the URI, e.g. {@link GLib.IOError}, {@link GLib.FileError}, and
         * {@link GLib.ConvertError}.
         * @param uri the document's URI
         * @param flags flags from {@link EvinceDocument.DocumentLoadFlags}
         * @returns `true` on success, or `false` on failure.
         */
        load_full(uri: string, flags: DocumentLoadFlags | null): boolean;
        /**
         * Synchronously loads the document from `file`.
         * See `ev_document_load()` for more information.
         * @param file a {@link Gio.File}
         * @param flags flags from {@link EvinceDocument.DocumentLoadFlags}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns `true` if loading succeeded, or `false` on error with `error` filled in
         */
        load_gfile(file: Gio.File, flags: DocumentLoadFlags | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Synchronously loads the document from `stream`.
         * See `ev_document_load()` for more information.
         * @param stream a {@link Gio.InputStream}
         * @param flags flags from {@link EvinceDocument.DocumentLoadFlags}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns `true` if loading succeeded, or `false` on error with `error` filled in
         */
        load_stream(
            stream: Gio.InputStream,
            flags: DocumentLoadFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * @param rc
         */
        render(rc: RenderContext): cairo.Surface;
        /**
         * Saves `document` to `uri`.
         * @param uri the target URI
         * @returns `true` on success, or `false` on error with `error` filled in
         */
        save(uri: string): boolean;
        /**
         * Set the `document` modification state as `modified`.
         * @param modified a boolean value to set the document as modified or not.
         */
        set_modified(modified: boolean): void;
        /**
         * Peforms a Synctex backward search to obtain the TeX input file, line and
         * (possibly) column  corresponding to the  position (`x`,`y`) (in 72dpi
         * coordinates) in the  `page` of `document`.
         * @param page_index the target page
         * @param x X coordinate
         * @param y Y coordinate
         * @returns A pointer to the EvSourceLink structure that holds the result. `NULL` if synctex is not enabled for the document or no result is found. The EvSourceLink pointer should be freed with g_free after it is used.
         */
        synctex_backward_search(page_index: number, x: number, y: number): SourceLink;
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
        connect<K extends keyof FormField.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormField.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FormField.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormField.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FormField.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FormField.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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

        static ['new'](id: number, type: FormFieldButtonType): FormFieldButton;

        // Signals

        /** @signal */
        connect<K extends keyof FormFieldButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormFieldButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FormFieldButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormFieldButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FormFieldButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FormFieldButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
        selected_items: any[];
        text: string;

        // Constructors

        constructor(properties?: Partial<FormFieldChoice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number, type: FormFieldChoiceType): FormFieldChoice;

        // Signals

        /** @signal */
        connect<K extends keyof FormFieldChoice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormFieldChoice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FormFieldChoice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormFieldChoice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FormFieldChoice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FormFieldChoice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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

        static ['new'](id: number): FormFieldSignature;

        // Signals

        /** @signal */
        connect<K extends keyof FormFieldSignature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormFieldSignature.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FormFieldSignature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormFieldSignature.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FormFieldSignature.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FormFieldSignature.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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

        static ['new'](id: number, type: FormFieldTextType): FormFieldText;

        // Signals

        /** @signal */
        connect<K extends keyof FormFieldText.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormFieldText.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FormFieldText.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormFieldText.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FormFieldText.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FormFieldText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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

        static ['new'](page: number, img_id: number): Image;

        static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Image;

        // Signals

        /** @signal */
        connect<K extends keyof Image.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Image.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Image.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Image.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
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

        // Fields

        base_instance: GObject.Object;

        // Constructors

        constructor(properties?: Partial<Layer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](is_parent: boolean, rb_group: number): Layer;

        // Signals

        /** @signal */
        connect<K extends keyof Layer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Layer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Layer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Layer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Layer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Layer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_rb_group(): number;
        is_parent(): boolean;
    }

    namespace Link {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::action': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
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

        static ['new'](title: string, action: LinkAction): Link;

        // Signals

        /** @signal */
        connect<K extends keyof Link.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Link.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Link.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Link.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Link.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Link.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns an {@link EvinceDocument.LinkAction}
         */
        get_action(): LinkAction;
        get_title(): string;
    }

    namespace LinkAction {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::dest': (pspec: GObject.ParamSpec) => void;
            'notify::exclude-reset-fields': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::hide-list': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::params': (pspec: GObject.ParamSpec) => void;
            'notify::reset-fields': (pspec: GObject.ParamSpec) => void;
            'notify::show-list': (pspec: GObject.ParamSpec) => void;
            'notify::toggle-list': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dest: LinkDest;
            exclude_reset_fields: boolean;
            excludeResetFields: boolean;
            filename: string;
            hide_list: any;
            hideList: any;
            name: string;
            params: string;
            reset_fields: any;
            resetFields: any;
            show_list: any;
            showList: any;
            toggle_list: any;
            toggleList: any;
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
         */
        get exclude_reset_fields(): boolean;
        /**
         * @construct-only
         */
        get excludeResetFields(): boolean;
        /**
         * @construct-only
         */
        get filename(): string;
        /**
         * @construct-only
         */
        get hide_list(): any;
        /**
         * @construct-only
         */
        get hideList(): any;
        /**
         * @construct-only
         */
        get name(): string;
        /**
         * @construct-only
         */
        get params(): string;
        /**
         * @construct-only
         */
        get reset_fields(): any;
        /**
         * @construct-only
         */
        get resetFields(): any;
        /**
         * @construct-only
         */
        get show_list(): any;
        /**
         * @construct-only
         */
        get showList(): any;
        /**
         * @construct-only
         */
        get toggle_list(): any;
        /**
         * @construct-only
         */
        get toggleList(): any;
        /**
         * @construct-only
         */
        get type(): LinkActionType;
        /**
         * @construct-only
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
        connect<K extends keyof LinkAction.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LinkAction.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LinkAction.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LinkAction.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LinkAction.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LinkAction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Checks whether `a` and `b` are equal.
         * @param b a {@link EvinceDocument.LinkAction}
         * @returns `true` iff `a` and `b` are equal
         */
        equal(b: LinkAction): boolean;
        get_action_type(): LinkActionType;
        /**
         * @returns an {@link EvinceDocument.LinkDest}
         */
        get_dest(): LinkDest;
        /**
         * @returns whether to exclude reset fields when resetting form
         */
        get_exclude_reset_fields(): boolean;
        get_filename(): string;
        /**
         * @returns a list of {@link EvinceDocument.Layer} objects
         */
        get_hide_list(): Layer[];
        get_name(): string;
        get_params(): string;
        /**
         * @returns a list of fields to reset
         */
        get_reset_fields(): string[];
        /**
         * @returns a list of {@link EvinceDocument.Layer} objects
         */
        get_show_list(): Layer[];
        /**
         * @returns a list of {@link EvinceDocument.Layer} objects
         */
        get_toggle_list(): Layer[];
        get_uri(): string;
    }

    namespace LinkDest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::bottom': (pspec: GObject.ParamSpec) => void;
            'notify::change': (pspec: GObject.ParamSpec) => void;
            'notify::left': (pspec: GObject.ParamSpec) => void;
            'notify::named': (pspec: GObject.ParamSpec) => void;
            'notify::page': (pspec: GObject.ParamSpec) => void;
            'notify::page-label': (pspec: GObject.ParamSpec) => void;
            'notify::right': (pspec: GObject.ParamSpec) => void;
            'notify::top': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::zoom': (pspec: GObject.ParamSpec) => void;
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
         */
        get bottom(): number;
        /**
         * @construct-only
         */
        get change(): number;
        /**
         * @construct-only
         */
        get left(): number;
        /**
         * @construct-only
         */
        get named(): string;
        /**
         * @construct-only
         */
        get page(): number;
        /**
         * @construct-only
         */
        get page_label(): string;
        /**
         * @construct-only
         */
        get pageLabel(): string;
        /**
         * @construct-only
         */
        get right(): number;
        /**
         * @construct-only
         */
        get top(): number;
        /**
         * @construct-only
         */
        get type(): LinkDestType;
        /**
         * @construct-only
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

        static new_xyz(
            page: number,
            left: number,
            top: number,
            zoom: number,
            change_left: boolean,
            change_top: boolean,
            change_zoom: boolean,
        ): LinkDest;

        // Signals

        /** @signal */
        connect<K extends keyof LinkDest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LinkDest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LinkDest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LinkDest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LinkDest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LinkDest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Checks whether `a` and `b` are equal.
         * @param b a {@link EvinceDocument.LinkDest}
         * @returns `true` iff `a` and `b` are equal
         */
        equal(b: LinkDest): boolean;
        get_bottom(): number;
        get_dest_type(): LinkDestType;
        /**
         * @param change_left
         */
        get_left(change_left: boolean): number;
        get_named_dest(): string;
        get_page(): number;
        get_page_label(): string;
        get_right(): number;
        /**
         * @param change_top
         */
        get_top(change_top: boolean): number;
        /**
         * @param change_zoom
         */
        get_zoom(change_zoom: boolean): number;
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
        connect<K extends keyof Media.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Media.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Media.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Media.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Media.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Media.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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

        static ['new'](index: number): Page;

        // Signals

        /** @signal */
        connect<K extends keyof Page.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Page.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Page.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Page.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Page.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Page.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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

        // Constructors

        constructor(properties?: Partial<RenderContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](page: Page, rotation: number, scale: number): RenderContext;

        // Signals

        /** @signal */
        connect<K extends keyof RenderContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RenderContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RenderContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RenderContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RenderContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RenderContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param width_points
         * @param height_points
         * @param scaled_width
         * @param scaled_height
         */
        compute_scaled_size(
            width_points: number,
            height_points: number,
            scaled_width: number,
            scaled_height: number,
        ): void;
        /**
         * @param width_points
         * @param height_points
         * @param scale_x
         * @param scale_y
         */
        compute_scales(width_points: number, height_points: number, scale_x: number, scale_y: number): void;
        /**
         * @param width_points
         * @param height_points
         * @param transformed_width
         * @param transformed_height
         */
        compute_transformed_size(
            width_points: number,
            height_points: number,
            transformed_width: number,
            transformed_height: number,
        ): void;
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

    namespace TransitionEffect {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::alignment': (pspec: GObject.ParamSpec) => void;
            'notify::angle': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::duration-real': (pspec: GObject.ParamSpec) => void;
            'notify::rectangular': (pspec: GObject.ParamSpec) => void;
            'notify::scale': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
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

        get alignment(): TransitionEffectAlignment;
        set alignment(val: TransitionEffectAlignment);
        get angle(): number;
        set angle(val: number);
        get direction(): TransitionEffectDirection;
        set direction(val: TransitionEffectDirection);
        get duration(): number;
        set duration(val: number);
        get duration_real(): number;
        set duration_real(val: number);
        get durationReal(): number;
        set durationReal(val: number);
        get rectangular(): boolean;
        set rectangular(val: boolean);
        get scale(): number;
        set scale(val: number);
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
        connect<K extends keyof TransitionEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TransitionEffect.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TransitionEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TransitionEffect.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TransitionEffect.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TransitionEffect.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
    type AnnotationMarkupInterface = typeof AnnotationMarkup;
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
    type AsyncRendererInterface = typeof AsyncRenderer;
    /**
     * @gir-type Alias
     */
    type AttachmentClass = typeof Attachment;
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

        constructor(
            properties?: Partial<{
                name: string;
                version: string;
            }>,
        );
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

        title: string;
        format: string;
        author: string;
        subject: string;
        keywords: string;
        creator: string;
        producer: string;
        linearized: string;
        security: string;
        creation_date: GLib.Time;
        modified_date: GLib.Time;
        layout: DocumentLayout;
        mode: DocumentMode;
        ui_hints: number;
        permissions: number;
        n_pages: number;
        paper_height: number;
        paper_width: number;
        license: DocumentLicense;
        contains_js: DocumentContainsJS;
        fields_mask: number;

        // Constructors

        constructor(
            properties?: Partial<{
                title: string;
                format: string;
                author: string;
                subject: string;
                keywords: string;
                creator: string;
                producer: string;
                linearized: string;
                security: string;
                creation_date: GLib.Time;
                modified_date: GLib.Time;
                layout: DocumentLayout;
                mode: DocumentMode;
                ui_hints: number;
                permissions: number;
                n_pages: number;
                paper_height: number;
                paper_width: number;
                contains_js: DocumentContainsJS;
                fields_mask: number;
            }>,
        );

        static ['new'](): DocumentInfo;

        // Methods

        /**
         * @returns a copy of `info`
         */
        copy(): DocumentInfo;
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
         * @param xmp
         * @param size
         */
        set_from_xmp(xmp: string, size: number): boolean;
        /**
         * @param datetime
         */
        take_created_datetime(datetime: GLib.DateTime): void;
        /**
         * @param datetime
         */
        take_modified_datetime(datetime: GLib.DateTime): void;
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

        constructor(
            properties?: Partial<{
                text: string;
                uri: string;
                web_statement: string;
            }>,
        );

        static ['new'](): DocumentLicense;

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
     * @gir-type Alias
     */
    type DocumentPrintInterface = typeof DocumentPrint;
    /**
     * @gir-type Struct
     */
    abstract class DocumentPrivate {
        static $gtype: GObject.GType<DocumentPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DocumentSecurityInterface = typeof DocumentSecurity;
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

        constructor(
            properties?: Partial<{
                x1: number;
                y1: number;
                x2: number;
                y2: number;
                next_line: boolean;
                after_hyphen: boolean;
            }>,
        );

        static ['new'](): FindRectangle;

        // Methods

        copy(): FindRectangle;
        free(): void;
    }

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
    abstract class ImagePrivate {
        static $gtype: GObject.GType<ImagePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type LayerClass = typeof Layer;
    /**
     * @gir-type Struct
     */
    abstract class LayerPrivate {
        static $gtype: GObject.GType<LayerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type LinkActionClass = typeof LinkAction;
    /**
     * @gir-type Struct
     */
    abstract class LinkActionPrivate {
        static $gtype: GObject.GType<LinkActionPrivate>;
    }

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
    abstract class LinkDestPrivate {
        static $gtype: GObject.GType<LinkDestPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class LinkPrivate {
        static $gtype: GObject.GType<LinkPrivate>;
    }

    /**
     * @gir-type Struct
     */
    class Mapping {
        static $gtype: GObject.GType<Mapping>;

        // Fields

        area: Rectangle;
        data: any;

        // Constructors

        constructor(
            properties?: Partial<{
                area: Rectangle;
                data: any;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class MappingList {
        static $gtype: GObject.GType<MappingList>;

        // Constructors

        constructor(page: number, list: Mapping[]);

        static ['new'](page: number, list: Mapping[]): MappingList;

        // Methods

        /**
         * @param data mapping data to find
         * @returns an {@link EvinceDocument.Mapping}
         */
        find(data?: any | null): Mapping;
        /**
         * @param data mapping data to find
         * @param func function to use for equality check
         * @returns an {@link EvinceDocument.Mapping}
         */
        find_custom(data: any | null, func: GLib.CompareFunc): Mapping;
        /**
         * @param x X coordinate
         * @param y Y coordinate
         * @returns the {@link EvinceDocument.Mapping} in the list at coordinates (x, y)
         */
        get(x: number, y: number): Mapping;
        /**
         * @param x X coordinate
         * @param y Y coordinate
         * @returns the data of a mapping in the list at coordinates (x, y)
         */
        get_data(x: number, y: number): any | null;
        /**
         * @returns the data for this mapping list
         */
        get_list(): Mapping[];
        get_page(): number;
        length(): number;
        /**
         * @param n the position to retrieve
         * @returns the `Evmapping` at position `n` in `mapping_list`
         */
        nth(n: number): Mapping;
        ref(): MappingList;
        /**
         * @param mapping {@link EvinceDocument.Mapping} to remove
         */
        remove(mapping: Mapping): void;
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type MediaClass = typeof Media;
    /**
     * @gir-type Struct
     */
    abstract class MediaPrivate {
        static $gtype: GObject.GType<MediaPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PageClass = typeof Page;
    /**
     * @gir-type Struct
     */
    class Point {
        static $gtype: GObject.GType<Point>;

        // Fields

        x: number;
        y: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
            }>,
        );
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

        constructor(
            properties?: Partial<{
                x1: number;
                y1: number;
                x2: number;
                y2: number;
            }>,
        );

        static ['new'](): Rectangle;

        // Methods

        copy(): Rectangle;
        free(): void;
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
     * @gir-type Struct
     */
    class SourceLink {
        static $gtype: GObject.GType<SourceLink>;

        // Fields

        filename: string;
        line: number;
        col: number;

        // Constructors

        constructor(
            properties?: Partial<{
                filename: string;
                line: number;
                col: number;
            }>,
        );

        static ['new'](filename: string, line: number, col: number): SourceLink;

        // Methods

        copy(): SourceLink;
        free(): void;
    }

    /**
     * @gir-type Alias
     */
    type TransitionEffectClass = typeof TransitionEffect;
    /**
     * @gir-type Struct
     */
    class TypeInfo {
        static $gtype: GObject.GType<TypeInfo>;

        // Fields

        desc: string;
        mime_types: string;

        // Constructors

        constructor(
            properties?: Partial<{
                desc: string;
                mime_types: string;
            }>,
        );
    }

    namespace AnnotationMarkup {
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

    export interface AnnotationMarkupNamespace {
        $gtype: GObject.GType<AnnotationMarkup>;
        prototype: AnnotationMarkup;
    }
    /**
     * @gir-type Interface
     */
    interface AnnotationMarkup extends Annotation {
        // Properties

        get can_have_popup(): boolean;
        set can_have_popup(val: boolean);
        get canHavePopup(): boolean;
        set canHavePopup(val: boolean);
        get has_popup(): boolean;
        set has_popup(val: boolean);
        get hasPopup(): boolean;
        set hasPopup(val: boolean);
        get label(): string;
        set label(val: string);
        get opacity(): number;
        set opacity(val: number);
        get popup_is_open(): boolean;
        set popup_is_open(val: boolean);
        get popupIsOpen(): boolean;
        set popupIsOpen(val: boolean);
        get rectangle(): Rectangle;
        set rectangle(val: Rectangle);

        // Methods

        get_label(): string;
        get_opacity(): number;
        get_popup_is_open(): boolean;
        /**
         * @param ev_rect
         */
        get_rectangle(ev_rect: Rectangle): void;
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
         * @param ev_rect
         */
        set_rectangle(ev_rect: Rectangle): boolean;
    }

    export const AnnotationMarkup: AnnotationMarkupNamespace & {
        new (): AnnotationMarkup; // This allows `obj instanceof AnnotationMarkup`
    };

    namespace AsyncRenderer {
        /**
         * Interface for implementing AsyncRenderer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param pixbuf
             * @virtual
             */
            vfunc_render_finished(pixbuf: GdkPixbuf.Pixbuf): void;
            /**
             * @param page
             * @param scale
             * @param rotation
             * @virtual
             */
            vfunc_render_pixbuf(page: number, scale: number, rotation: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface AsyncRendererNamespace {
        $gtype: GObject.GType<AsyncRenderer>;
        prototype: AsyncRenderer;
    }
    /**
     * @gir-type Interface
     */
    interface AsyncRenderer extends GObject.Object, AsyncRenderer.Interface {
        // Methods

        /**
         * @param page
         * @param scale
         * @param rotation
         */
        render_pixbuf(page: number, scale: number, rotation: number): void;
    }

    export const AsyncRenderer: AsyncRendererNamespace & {
        new (): AsyncRenderer; // This allows `obj instanceof AsyncRenderer`
    };

    namespace DocumentAnnotations {
        /**
         * Interface for implementing DocumentAnnotations.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param annot
             * @param rect
             * @virtual
             */
            vfunc_add_annotation(annot: Annotation, rect: Rectangle): void;
            /**
             * @virtual
             */
            vfunc_document_is_modified(): boolean;
            /**
             * @param page
             * @virtual
             */
            vfunc_get_annotations(page: Page): MappingList;
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
            /**
             * @param annot
             * @param mask
             * @virtual
             */
            vfunc_save_annotation(annot: Annotation, mask: AnnotationsSaveMask): void;
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
         * @param rect
         */
        add_annotation(annot: Annotation, rect: Rectangle): void;
        can_add_annotation(): boolean;
        can_remove_annotation(): boolean;
        document_is_modified(): boolean;
        /**
         * @param page
         */
        get_annotations(page: Page): MappingList;
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
        /**
         * @param annot
         * @param mask
         */
        save_annotation(annot: Annotation, mask: AnnotationsSaveMask | null): void;
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
         * @returns a list of {@link EvinceDocument.Attachment} objects
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
             * @param page an {@link EvinceDocument.Page}
             * @param text text to find
             * @param case_sensitive whether to match the string case
             * @virtual
             */
            vfunc_find_text(page: Page, text: string, case_sensitive: boolean): Rectangle[];
            /**
             * @param page an {@link EvinceDocument.Page}
             * @param text text to find
             * @param options a set of {@link EvinceDocument.FindOptions}
             * @virtual
             */
            vfunc_find_text_extended(page: Page, text: string, options: FindOptions): FindRectangle[];
            /**
             * @param page an {@link EvinceDocument.Page}
             * @param text text to find
             * @param options a set of {@link EvinceDocument.FindOptions}
             * @virtual
             */
            vfunc_find_text_with_options(page: Page, text: string, options: FindOptions): Rectangle[];
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
         * @param page an {@link EvinceDocument.Page}
         * @param text text to find
         * @param case_sensitive whether to match the string case
         * @returns a list of results
         */
        find_text(page: Page, text: string, case_sensitive: boolean): Rectangle[];
        /**
         * @param page an {@link EvinceDocument.Page}
         * @param text text to find
         * @param options a set of {@link EvinceDocument.FindOptions}
         * @returns a list of results
         */
        find_text_extended(page: Page, text: string, options: FindOptions | null): FindRectangle[];
        /**
         * @param page an {@link EvinceDocument.Page}
         * @param text text to find
         * @param options a set of {@link EvinceDocument.FindOptions}
         * @returns a list of results
         */
        find_text_with_options(page: Page, text: string, options: FindOptions | null): Rectangle[];
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
             * @param model
             * @virtual
             */
            vfunc_fill_model(model: Gtk.TreeModel): void;
            /**
             * @virtual
             */
            vfunc_get_fonts_summary(): string;
            /**
             * @virtual
             */
            vfunc_get_progress(): number;
            /**
             * @param n_pages
             * @virtual
             */
            vfunc_scan(n_pages: number): boolean;
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

        /**
         * @param model
         */
        fill_model(model: Gtk.TreeModel): void;
        get_fonts_summary(): string;
        get_progress(): number;
        /**
         * @param n_pages
         */
        scan(n_pages: number): boolean;
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
             * @param image an {@link EvinceDocument.Image}
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
         * @param image an {@link EvinceDocument.Image}
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
            vfunc_get_layers(): Gtk.TreeModel;
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
         * @returns a {@link Gtk.TreeModel}
         */
        get_layers(): Gtk.TreeModel;
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
            vfunc_get_links_model(): Gtk.TreeModel;
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
         * @returns an {@link EvinceDocument.LinkDest}
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
         * @returns a {@link Gtk.TreeModel}
         */
        get_links_model(): Gtk.TreeModel;
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
             * @param page a {@link EvinceDocument.Page}
             * @virtual
             */
            vfunc_get_text_attrs(page: Page): Pango.AttrList;
            /**
             * @param page
             * @param areas
             * @param n_areas
             * @virtual
             */
            vfunc_get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean;
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
         * @param page a {@link EvinceDocument.Page}
         * @returns a newly created {@link Pango.AttrList}
         */
        get_text_attrs(page: Page): Pango.AttrList;
        /**
         * @param page
         * @param areas
         * @param n_areas
         */
        get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean;
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
         * @returns an {@link EvinceDocument.TransitionEffect}
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
             * @param rc
             * @param surface
             * @param points
             * @param old_points
             * @param style
             * @param text
             * @param base
             * @virtual
             */
            vfunc_render_selection(
                rc: RenderContext,
                surface: cairo.Surface,
                points: Rectangle,
                old_points: Rectangle,
                style: SelectionStyle,
                text: Gdk.Color,
                base: Gdk.Color,
            ): void;
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
        get_selected_text(page: Page, style: SelectionStyle | null, points: Rectangle): string;
        /**
         * @param rc
         * @param style
         * @param points
         */
        get_selection_region(rc: RenderContext, style: SelectionStyle | null, points: Rectangle): cairo.Region;
        /**
         * @param rc
         * @param surface
         * @param points
         * @param old_points
         * @param style
         * @param text
         * @param base
         */
        render_selection(
            rc: RenderContext,
            surface: cairo.Surface,
            points: Rectangle,
            old_points: Rectangle,
            style: SelectionStyle | null,
            text: Gdk.Color,
            base: Gdk.Color,
        ): void;
    }

    export const Selection: SelectionNamespace & {
        new (): Selection; // This allows `obj instanceof Selection`
    };

    /**
     * @gir-type Alias
     */
    type BackendPage = any;
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

export default EvinceDocument;

// END
