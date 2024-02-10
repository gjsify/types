/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './evincedocument-3.0-ambient.d.ts';
import './evincedocument-3.0-import.d.ts';
/**
 * EvinceDocument-3.0
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
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
    enum AnnotationTextMarkupType {
        HIGHLIGHT,
        STRIKE_OUT,
        UNDERLINE,
        SQUIGGLY,
    }
    enum AnnotationType {
        UNKNOWN,
        TEXT,
        ATTACHMENT,
        TEXT_MARKUP,
    }
    enum AnnotationsOverMarkup {
        NOT_IMPLEMENTED,
        UNKNOWN,
        YES,
        NOT,
    }
    enum CompressionType {
        NONE,
        BZIP2,
        GZIP,
        LZMA,
    }
    enum DocumentContainsJS {
        UNKNOWN,
        NO,
        YES,
    }
    class DocumentError extends GLib.Error {
        // Own fields of EvinceDocument-3.0.DocumentError

        INVALID: number;
        UNSUPPORTED_CONTENT: number;
        ENCRYPTED: number;

        // Constructors of EvinceDocument-3.0.DocumentError

        constructor(options: { message: string; code: number });

        // Owm methods of EvinceDocument-3.0.DocumentError

        static quark(): GLib.Quark;
    }

    enum DocumentLayout {
        SINGLE_PAGE,
        ONE_COLUMN,
        TWO_COLUMN_LEFT,
        TWO_COLUMN_RIGHT,
        TWO_PAGE_LEFT,
        TWO_PAGE_RIGHT,
    }
    enum DocumentMode {
        NONE,
        USE_OC,
        USE_THUMBS,
        FULL_SCREEN,
        USE_ATTACHMENTS,
        PRESENTATION,
    }
    enum FileExporterFormat {
        UNKNOWN,
        PS,
        PDF,
    }
    enum FormFieldButtonType {
        PUSH,
        CHECK,
        RADIO,
    }
    enum FormFieldChoiceType {
        COMBO,
        LIST,
    }
    enum FormFieldTextType {
        NORMAL,
        MULTILINE,
        FILE_SELECT,
    }
    enum LinkActionType {
        GOTO_DEST,
        GOTO_REMOTE,
        EXTERNAL_URI,
        LAUNCH,
        NAMED,
        LAYERS_STATE,
        RESET_FORM,
    }
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
    enum SelectionStyle {
        GLYPH,
        WORD,
        LINE,
    }
    enum TransitionEffectAlignment {
        HORIZONTAL,
        VERTICAL,
    }
    enum TransitionEffectDirection {
        INWARD,
        OUTWARD,
    }
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
    function backends_manager_get_document(mime_type: string): Document;
    function backends_manager_get_document_module_name(document: Document): string;
    function document_error_quark(): GLib.Quark;
    /**
     * Compresses the file at `uri`.
     *
     * If `type` is %EV_COMPRESSION_NONE, it does nothing and returns %NULL.
     *
     * Otherwise, it returns the filename of a
     * temporary file containing the compressed data from the file at `uri`.
     *
     * On error it returns %NULL and fills in `error`.
     *
     * It is the caller's responsibility to unlink the temp file after use.
     * @param uri a file URI
     * @param type the compression type
     * @returns a newly allocated string URI, or %NULL on error
     */
    function file_compress(uri: string, type: CompressionType): string;
    /**
     * Performs a g_file_copy_attributes() with %G_FILE_COPY_ALL_METADATA
     * from `from` to `to`.
     * @param from the source URI
     * @param to the target URI
     * @returns %TRUE if the attributes were copied successfully, %FALSE otherwise.
     */
    function file_copy_metadata(from: string, to: string): boolean;
    function file_get_mime_type(uri: string, fast: boolean): string;
    function file_get_mime_type_from_fd(fd: number): string;
    function file_is_temp(file: Gio.File): boolean;
    /**
     * Uncompresses the file at `uri`.
     *
     * If `type` is %EV_COMPRESSION_NONE, it does nothing and returns %NULL.
     *
     * Otherwise, it returns the filename of a
     * temporary file containing the decompressed data from the file at `uri`.
     * On error it returns %NULL and fills in `error`.
     *
     * It is the caller's responsibility to unlink the temp file after use.
     * @param uri a file URI
     * @param type the compression type
     * @returns a newly allocated string URI, or %NULL on error
     */
    function file_uncompress(uri: string, type: CompressionType): string;
    function get_locale_dir(): string;
    /**
     * Initializes the evince document library, and binds the evince
     * gettext domain.
     *
     * You must call this before calling any other function in the evince
     * document library.
     * @returns %TRUE if any backends were found; %FALSE otherwise
     */
    function init(): boolean;
    /**
     * Creates a temp directory in the evince temp directory.
     * @param tmpl a template string; must end in 'XXXXXX'
     * @returns a newly allocated string with the temp directory name, or %NULL   on error with @error filled in
     */
    function mkdtemp(tmpl: string): string;
    /**
     * Creates a temp file in the evince temp directory.
     * @param tmpl a template string; must contain 'XXXXXX', but not necessarily as a suffix
     * @param file_name a location to store the filename of the temp file
     * @returns a file descriptor to the newly created temp file name, or %-1   on error with @error filled in
     */
    function mkstemp(tmpl: string, file_name: string): number;
    /**
     * Creates a temp #GFile in the evince temp directory. See ev_mkstemp() for more information.
     * @param tmpl a template string; must contain 'XXXXXX', but not necessarily as a suffix
     * @returns a newly allocated #GFile for the newly created temp file name, or %NULL   on error with @error filled in
     */
    function mkstemp_file(tmpl: string): Gio.File;
    function rect_cmp(a: Rectangle, b: Rectangle): number;
    /**
     * Checks whether evince should use the portal.
     * @returns whether evince should use the portal
     */
    function should_use_portal(): boolean;
    /**
     * Shuts the evince document library down.
     */
    function shutdown(): void;
    function tmp_file_unlink(file: Gio.File): void;
    function tmp_filename_unlink(filename: string): void;
    function tmp_uri_unlink(uri: string): void;
    /**
     * Performs a g_file_copy() from `from` to `to`.
     * @param from the source URI
     * @param to the target URI
     * @returns %TRUE on success, or %FALSE on error with @error filled in
     */
    function xfer_uri_simple(from: string, to: string): boolean;
    function xmp_parse(xmp: string, size: number, info: DocumentInfo): boolean;
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
    enum DocumentLoadFlags {
        NONE,
        NO_CACHE,
    }
    enum DocumentPermissions {
        OK_TO_PRINT,
        OK_TO_MODIFY,
        OK_TO_COPY,
        OK_TO_ADD_NOTES,
        FULL,
    }
    enum DocumentUIHints {
        HIDE_TOOLBAR,
        HIDE_MENUBAR,
        HIDE_WINDOWUI,
        FIT_WINDOW,
        CENTER_WINDOW,
        DISPLAY_DOC_TITLE,
        DIRECTION_RTL,
    }
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
    enum FindOptions {
        DEFAULT,
        CASE_SENSITIVE,
        WHOLE_WORDS_ONLY,
    }
    module Annotation {
        // Constructor properties interface
    }

    abstract class Annotation extends GObject.Object {
        // Own properties of EvinceDocument-3.0.Annotation

        /**
         * The area of the page where the annotation is placed.
         *
         * Since 3.18
         */
        area: Rectangle;
        /**
         * The colour of the annotation as a #GdkColor.
         */
        color: any;
        contents: string;
        modified: string;
        name: string;
        page: Page;
        /**
         * The colour of the annotation as a #GdkRGBA.
         */
        rgba: Gdk.RGBA;

        // Owm methods of EvinceDocument-3.0.Annotation

        /**
         * Compare `annot` and `other`.
         * @param other another #EvAnnotation
         * @returns %TRUE if @annot is equal to @other, %FALSE otherwise
         */
        equal(other: Annotation): boolean;
        get_annotation_type(): AnnotationType;
        /**
         * Gets the area of `annot`.
         */
        get_area(): void;
        /**
         * Get the color of `annot`.
         */
        get_color(): void;
        /**
         * Get the contents of `annot`. The contents of
         * `annot` is the text that is displayed in the annotation, or an
         * alternate description of the annotation's content for non-text annotations
         * @returns a string with the contents of the annotation or %NULL if @annot has no contents.
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
         * @returns the #EvPage where @annot appears
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
        get_rgba(): void;
        /**
         * Set the area of the annotation to `area`.
         * @param area a #EvRectangle
         * @returns %TRUE if the area has been changed, %FALSE otherwise
         */
        set_area(area: Rectangle): boolean;
        /**
         * Set the color of the annotation to `color`. You can monitor
         * changes to the annotation's color by connecting to
         * notify::color signal on `annot`.
         * @param color a #GdkColor
         * @returns %TRUE  when the color has been changed, %FALSE otherwise.
         */
        set_color(color: Gdk.Color): boolean;
        /**
         * Set the contents of `annot`. You can monitor
         * changes in the annotation's  contents by connecting to
         * notify::contents signal of `annot`.
         * @param contents
         * @returns %TRUE if the contents have been changed, %FALSE otherwise.
         */
        set_contents(contents: string): boolean;
        /**
         * Set the last modification date of `annot` to `modified`. To
         * set the last modification date using a #time_t, use
         * ev_annotation_set_modified_from_time_t() instead. You can monitor
         * changes to the last modification date by connecting to the
         * notify::modified signal on `annot`.
         * @param modified string with the last modification date.
         * @returns %TRUE if the last modification date has been updated, %FALSE otherwise.
         */
        set_modified(modified: string): boolean;
        /**
         * Set the last modification date of `annot` to `utime`.  You can
         * monitor changes to the last modification date by connecting to the
         * notify::modified sinal on `annot`.
         * For the time-format used, see ev_document_misc_format_date().
         * @param utime a #GTime
         * @returns %TRUE if the last modified date has been updated, %FALSE otherwise.
         */
        set_modified_from_time(utime: GLib.Time): boolean;
        /**
         * Set the last modification date of `annot` to `utime`.  You can
         * monitor changes to the last modification date by connecting to the
         * notify::modified sinal on `annot`.
         * For the time-format used, see ev_document_misc_format_datetime().
         * @param utime a #time_t
         * @returns %TRUE if the last modified date has been updated, %FALSE otherwise.
         */
        set_modified_from_time_t(utime: number): boolean;
        /**
         * Set the name of `annot`.
         * You can monitor changes of the annotation name by connecting
         * to the notify::name signal on `annot`.
         * @param name
         * @returns %TRUE when the name has been changed, %FALSE otherwise.
         */
        set_name(name: string): boolean;
        /**
         * Set the color of the annotation to `rgba`.
         * @param rgba a #GdkRGBA
         * @returns %TRUE if the color has been changed, %FALSE otherwise
         */
        set_rgba(rgba: Gdk.RGBA): boolean;
    }

    module AnnotationAttachment {
        // Constructor properties interface
    }

    class AnnotationAttachment extends Annotation {
        // Own properties of EvinceDocument-3.0.AnnotationAttachment

        attachment: Attachment;

        // Constructors of EvinceDocument-3.0.AnnotationAttachment

        static ['new'](page: Page, attachment: Attachment): AnnotationAttachment;

        // Owm methods of EvinceDocument-3.0.AnnotationAttachment

        get_attachment(): Attachment;
        set_attachment(attachment: Attachment): boolean;
    }

    module AnnotationText {
        // Constructor properties interface
    }

    class AnnotationText extends Annotation {
        // Own properties of EvinceDocument-3.0.AnnotationText

        icon: AnnotationTextIcon;
        is_open: boolean;
        isOpen: boolean;

        // Constructors of EvinceDocument-3.0.AnnotationText

        static ['new'](page: Page): AnnotationText;

        // Owm methods of EvinceDocument-3.0.AnnotationText

        get_icon(): AnnotationTextIcon;
        get_is_open(): boolean;
        set_icon(icon: AnnotationTextIcon): boolean;
        set_is_open(is_open: boolean): boolean;
    }

    module AnnotationTextMarkup {
        // Constructor properties interface
    }

    class AnnotationTextMarkup extends Annotation {
        // Own properties of EvinceDocument-3.0.AnnotationTextMarkup

        type: AnnotationTextMarkupType;

        // Constructors of EvinceDocument-3.0.AnnotationTextMarkup

        static highlight_new(page: Page): AnnotationTextMarkup;

        static squiggly_new(page: Page): AnnotationTextMarkup;

        static strike_out_new(page: Page): AnnotationTextMarkup;

        static underline_new(page: Page): AnnotationTextMarkup;

        // Owm methods of EvinceDocument-3.0.AnnotationTextMarkup

        get_markup_type(): AnnotationTextMarkupType;
        set_markup_type(markup_type: AnnotationTextMarkupType): boolean;
    }

    module Attachment {
        // Constructor properties interface
    }

    class Attachment extends GObject.Object {
        // Own properties of EvinceDocument-3.0.Attachment

        ctime: number;
        data: any;
        description: string;
        mtime: number;
        name: string;
        size: number;

        // Own fields of EvinceDocument-3.0.Attachment

        base_instance: GObject.Object;

        // Constructors of EvinceDocument-3.0.Attachment

        static ['new'](
            name: string,
            description: string,
            mtime: GLib.Time,
            ctime: GLib.Time,
            size: number,
            data?: any | null,
        ): Attachment;

        // Owm methods of EvinceDocument-3.0.Attachment

        static error_quark(): GLib.Quark;

        // Owm methods of EvinceDocument-3.0.Attachment

        get_creation_date(): GLib.Time;
        get_description(): string;
        get_mime_type(): string;
        get_modification_date(): GLib.Time;
        get_name(): string;
        open(screen: Gdk.Screen, timestamp: number): boolean;
        save(file: Gio.File): boolean;
    }

    module Document {
        // Constructor properties interface
    }

    abstract class Document extends GObject.Object {
        // Own properties of EvinceDocument-3.0.Document

        modified: boolean;

        // Own fields of EvinceDocument-3.0.Document

        base: GObject.Object;

        // Owm methods of EvinceDocument-3.0.Document

        static doc_mutex_lock(): void;
        static doc_mutex_trylock(): boolean;
        static doc_mutex_unlock(): void;
        /**
         * Adds some file filters to `chooser`.
         *
         * Always add a "All documents" format.
         *
         * If `document` is not %NULL, adds a #GtkFileFilter for `document'`s MIME type.
         *
         * If `document` is %NULL, adds a #GtkFileFilter for each document type that evince
         * can handle.
         * @param chooser a #GtkFileChooser
         * @param document a #EvDocument, or %NULL
         */
        static factory_add_filters(chooser: Gtk.Widget, document: Document): void;
        /**
         * Creates a #EvDocument for the document at `uri;` or, if no backend handling
         * the document's type is found, or an error occurred on opening the document,
         * returns %NULL and fills in `error`.
         * If the document is encrypted, it is returned but also `error` is set to
         * %EV_DOCUMENT_ERROR_ENCRYPTED.
         * @param uri an URI
         */
        static factory_get_document(uri: string): Document;
        /**
         * Synchronously creates a #EvDocument for the document from `fd` using the backend
         * for loading documents of type `mime_type;` or, if the backend does not support
         * loading from file descriptors, or an error occurred on opening the document,
         * returns %NULL and fills in `error`.
         * If the document is encrypted, it is returned but also `error` is set to
         * %EV_DOCUMENT_ERROR_ENCRYPTED.
         *
         * If the mime type cannot be inferred from the file descriptor, and `mime_type` is %NULL,
         * an error is returned.
         *
         * Note that this function takes ownership of `fd;` you must not ever
         * operate on it again. It will be closed automatically if the document
         * is destroyed, or if this function returns %NULL.
         * @param fd a file descriptor
         * @param mime_type the mime type
         * @param flags flags from #EvDocumentLoadFlags
         * @param cancellable a #GCancellable, or %NULL
         */
        static factory_get_document_for_fd(
            fd: number,
            mime_type: string,
            flags: DocumentLoadFlags,
            cancellable?: Gio.Cancellable | null,
        ): Document;
        /**
         * Synchronously creates a #EvDocument for the document at `file;` or, if no
         * backend handling the document's type is found, or an error occurred on
         * opening the document, returns %NULL and fills in `error`.
         * If the document is encrypted, it is returned but also `error` is set to
         * %EV_DOCUMENT_ERROR_ENCRYPTED.
         * @param file a #GFile
         * @param flags flags from #EvDocumentLoadFlags
         * @param cancellable a #GCancellable, or %NULL
         */
        static factory_get_document_for_gfile(
            file: Gio.File,
            flags: DocumentLoadFlags,
            cancellable?: Gio.Cancellable | null,
        ): Document;
        /**
         * Synchronously creates a #EvDocument for the document from `stream;` or, if no
         * backend handling the document's type is found, or an error occurred
         * on opening the document, returns %NULL and fills in `error`.
         * If the document is encrypted, it is returned but also `error` is set to
         * %EV_DOCUMENT_ERROR_ENCRYPTED.
         *
         * If `mime_type` is non-%NULL, this overrides any type inferred from the stream.
         * If the mime type cannot be inferred from the stream, and `mime_type` is %NULL,
         * an error is returned.
         * @param stream a #GInputStream
         * @param mime_type a mime type hint
         * @param flags flags from #EvDocumentLoadFlags
         * @param cancellable a #GCancellable, or %NULL
         */
        static factory_get_document_for_stream(
            stream: Gio.InputStream,
            mime_type: string | null,
            flags: DocumentLoadFlags,
            cancellable?: Gio.Cancellable | null,
        ): Document;
        /**
         * Creates a #EvDocument for the document at `uri;` or, if no backend handling
         * the document's type is found, or an error occurred on opening the document,
         * returns %NULL and fills in `error`.
         * If the document is encrypted, it is returned but also `error` is set to
         * %EV_DOCUMENT_ERROR_ENCRYPTED.
         * @param uri an URI
         * @param flags flags from #EvDocumentLoadFlags
         */
        static factory_get_document_full(uri: string, flags: DocumentLoadFlags): Document;
        static fc_mutex_lock(): void;
        static fc_mutex_trylock(): boolean;
        static fc_mutex_unlock(): void;
        static misc_format_date(utime: GLib.Time): string;
        /**
         * Determine the preferred date and time representation for the current locale
         * for `dt`.
         * @param dt a #GDateTime
         */
        static misc_format_datetime(dt: GLib.DateTime): string;
        static misc_get_loading_thumbnail(width: number, height: number, inverted_colors: boolean): GdkPixbuf.Pixbuf;
        static misc_get_page_border_size(page_width: number, page_height: number, border: Gtk.Border): void;
        /**
         * Get the pointer's x and y position relative to `widget`.
         * @param widget a #GtkWidget
         */
        static misc_get_pointer_position(widget: Gtk.Widget): void;
        static misc_get_screen_dpi(screen: Gdk.Screen): number;
        static misc_get_thumbnail_frame(
            width: number,
            height: number,
            source_pixbuf: GdkPixbuf.Pixbuf,
        ): GdkPixbuf.Pixbuf;
        /**
         * Returns sensible guess for DPI of monitor on which given widget has been
         * realized. If HiDPI display, use 192, else 96.
         * Returns 96 as fallback value.
         * @param widget a #GtkWidget
         */
        static misc_get_widget_dpi(widget: Gtk.Widget): number;
        static misc_invert_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
        static misc_invert_surface(surface: cairo.Surface): void;
        static misc_paint_one_page(
            cr: cairo.Context,
            widget: Gtk.Widget,
            area: Gdk.Rectangle,
            border: Gtk.Border,
            highlight: boolean,
            inverted_colors: boolean,
        ): void;
        static misc_pixbuf_from_surface(surface: cairo.Surface): GdkPixbuf.Pixbuf;
        static misc_render_loading_thumbnail(
            widget: Gtk.Widget,
            width: number,
            height: number,
            inverted_colors: boolean,
        ): GdkPixbuf.Pixbuf;
        static misc_render_loading_thumbnail_surface(
            widget: Gtk.Widget,
            width: number,
            height: number,
            inverted_colors: boolean,
        ): cairo.Surface;
        static misc_render_thumbnail_surface_with_frame(
            widget: Gtk.Widget,
            source_surface: cairo.Surface,
            width: number,
            height: number,
        ): cairo.Surface;
        static misc_render_thumbnail_with_frame(widget: Gtk.Widget, source_pixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf;
        static misc_surface_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): cairo.Surface;
        static misc_surface_rotate_and_scale(
            surface: cairo.Surface,
            dest_width: number,
            dest_height: number,
            dest_rotation: number,
        ): cairo.Surface;

        // Owm methods of EvinceDocument-3.0.Document

        check_dimensions(): boolean;
        find_page_by_label(page_label: string, page_index: number): boolean;
        get_backend_info(info: DocumentBackendInfo): boolean;
        /**
         * Returns the #EvDocumentInfo for the document.
         * @returns a #EvDocumentInfo
         */
        get_info(): DocumentInfo;
        get_max_label_len(): number;
        get_max_page_size(width: number, height: number): void;
        get_min_page_size(width: number, height: number): void;
        get_modified(): boolean;
        get_n_pages(): number;
        get_page(index: number): Page;
        get_page_label(page_index: number): string;
        get_page_size(page_index: number): void;
        get_size(): number;
        get_thumbnail(rc: RenderContext): GdkPixbuf.Pixbuf;
        get_thumbnail_surface(rc: RenderContext): cairo.Surface;
        get_title(): string;
        get_uri(): string;
        has_synctex(): boolean;
        has_text_page_labels(): boolean;
        is_page_size_uniform(): boolean;
        /**
         * Loads `document` from `uri`.
         *
         * On failure, %FALSE is returned and `error` is filled in.
         * If the document is encrypted, EV_DEFINE_ERROR_ENCRYPTED is returned.
         * If the backend cannot load the specific document, EV_DOCUMENT_ERROR_INVALID
         * is returned. If the backend does not support the format for the document's
         * contents, EV_DOCUMENT_ERROR_UNSUPPORTED_CONTENT is returned. Other errors
         * are possible too, depending on the backend used to load the document and
         * the URI, e.g. #GIOError, #GFileError, and #GConvertError.
         * @param uri the document's URI
         * @returns %TRUE on success, or %FALSE on failure.
         */
        load(uri: string): boolean;
        /**
         * Synchronously loads the document from `fd,` which must refer to
         * a regular file.
         *
         * Note that this function takes ownership of `fd;` you must not ever
         * operate on it again. It will be closed automatically if the document
         * is destroyed, or if this function returns %NULL.
         *
         * See ev_document_load() for more information.
         * @param fd a file descriptor
         * @param flags flags from #EvDocumentLoadFlags
         * @param cancellable a #GCancellable, or %NULL
         * @returns %TRUE if loading succeeded, or %FALSE on error with @error filled in
         */
        load_fd(fd: number, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Loads `document` from `uri`.
         *
         * On failure, %FALSE is returned and `error` is filled in.
         * If the document is encrypted, EV_DEFINE_ERROR_ENCRYPTED is returned.
         * If the backend cannot load the specific document, EV_DOCUMENT_ERROR_INVALID
         * is returned. Other errors are possible too, depending on the backend
         * used to load the document and the URI, e.g. #GIOError, #GFileError, and
         * #GConvertError.
         * @param uri the document's URI
         * @param flags flags from #EvDocumentLoadFlags
         * @returns %TRUE on success, or %FALSE on failure.
         */
        load_full(uri: string, flags: DocumentLoadFlags): boolean;
        /**
         * Synchronously loads the document from `file`.
         * See ev_document_load() for more information.
         * @param file a #GFile
         * @param flags flags from #EvDocumentLoadFlags
         * @param cancellable a #GCancellable, or %NULL
         * @returns %TRUE if loading succeeded, or %FALSE on error with @error filled in
         */
        load_gfile(file: Gio.File, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Synchronously loads the document from `stream`.
         * See ev_document_load() for more information.
         * @param stream a #GInputStream
         * @param flags flags from #EvDocumentLoadFlags
         * @param cancellable a #GCancellable, or %NULL
         * @returns %TRUE if loading succeeded, or %FALSE on error with @error filled in
         */
        load_stream(stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean;
        render(rc: RenderContext): cairo.Surface;
        /**
         * Saves `document` to `uri`.
         * @param uri the target URI
         * @returns %TRUE on success, or %FALSE on error with @error filled in
         */
        save(uri: string): boolean;
        /**
         * Set the `document` modification state as `modified`.
         * @param modified a boolean value to set the document as modified or not.
         */
        set_modified(modified: boolean): void;
        /**
         * Peforms a Synctex backward search to obtain the TeX input file, line and
         * (possibly) column  corresponding to the  position (`x,``y)` (in 72dpi
         * coordinates) in the  `page` of `document`.
         * @param page_index the target page
         * @param x X coordinate
         * @param y Y coordinate
         * @returns A pointer to the EvSourceLink structure that holds the result. @NULL if synctex is not enabled for the document or no result is found. The EvSourceLink pointer should be freed with g_free after it is used.
         */
        synctex_backward_search(page_index: number, x: number, y: number): SourceLink;
    }

    module FormField {
        // Constructor properties interface
    }

    abstract class FormField extends GObject.Object {
        // Own fields of EvinceDocument-3.0.FormField

        id: number;
        is_read_only: boolean;
        font_size: number;
        activation_link: Link;
        page: Page;
        changed: boolean;
    }

    module FormFieldButton {
        // Constructor properties interface
    }

    class FormFieldButton extends FormField {
        // Own fields of EvinceDocument-3.0.FormFieldButton

        type: FormFieldButtonType;
        state: boolean;

        // Constructors of EvinceDocument-3.0.FormFieldButton

        static ['new'](id: number, type: FormFieldButtonType): FormFieldButton;
    }

    module FormFieldChoice {
        // Constructor properties interface
    }

    class FormFieldChoice extends FormField {
        // Own fields of EvinceDocument-3.0.FormFieldChoice

        type: FormFieldChoiceType;
        multi_select: boolean;
        is_editable: boolean;
        do_spell_check: boolean;
        commit_on_sel_change: boolean;
        selected_items: any[];
        text: string;

        // Constructors of EvinceDocument-3.0.FormFieldChoice

        static ['new'](id: number, type: FormFieldChoiceType): FormFieldChoice;
    }

    module FormFieldSignature {
        // Constructor properties interface
    }

    class FormFieldSignature extends FormField {
        // Constructors of EvinceDocument-3.0.FormFieldSignature

        static ['new'](id: number): FormFieldSignature;
    }

    module FormFieldText {
        // Constructor properties interface
    }

    class FormFieldText extends FormField {
        // Own fields of EvinceDocument-3.0.FormFieldText

        type: FormFieldTextType;
        do_spell_check: boolean;
        do_scroll: boolean;
        comb: boolean;
        is_rich_text: boolean;
        is_password: boolean;
        max_len: number;
        text: string;

        // Constructors of EvinceDocument-3.0.FormFieldText

        static ['new'](id: number, type: FormFieldTextType): FormFieldText;
    }

    module Image {
        // Constructor properties interface
    }

    class Image extends GObject.Object {
        // Own fields of EvinceDocument-3.0.Image

        base_instance: GObject.Object;

        // Constructors of EvinceDocument-3.0.Image

        static ['new'](page: number, img_id: number): Image;

        static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Image;

        // Owm methods of EvinceDocument-3.0.Image

        get_id(): number;
        get_page(): number;
        get_pixbuf(): GdkPixbuf.Pixbuf;
        get_tmp_uri(): string;
        save_tmp(pixbuf: GdkPixbuf.Pixbuf): string;
    }

    module Layer {
        // Constructor properties interface
    }

    class Layer extends GObject.Object {
        // Own fields of EvinceDocument-3.0.Layer

        base_instance: GObject.Object;

        // Constructors of EvinceDocument-3.0.Layer

        static ['new'](is_parent: boolean, rb_group: number): Layer;

        // Owm methods of EvinceDocument-3.0.Layer

        get_rb_group(): number;
        is_parent(): boolean;
    }

    module Link {
        // Constructor properties interface
    }

    class Link extends GObject.Object {
        // Own properties of EvinceDocument-3.0.Link

        action: LinkAction;
        title: string;

        // Constructors of EvinceDocument-3.0.Link

        static ['new'](title: string, action: LinkAction): Link;

        // Owm methods of EvinceDocument-3.0.Link

        get_action(): LinkAction;
        get_title(): string;
    }

    module LinkAction {
        // Constructor properties interface
    }

    class LinkAction extends GObject.Object {
        // Own properties of EvinceDocument-3.0.LinkAction

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

        // Constructors of EvinceDocument-3.0.LinkAction

        static new_dest(dest: LinkDest): LinkAction;

        static new_external_uri(uri: string): LinkAction;

        static new_launch(filename: string, params: string): LinkAction;

        static new_layers_state(show_list: Layer[], hide_list: Layer[], toggle_list: Layer[]): LinkAction;

        static new_named(name: string): LinkAction;

        static new_remote(dest: LinkDest, filename: string): LinkAction;

        static new_reset_form(fields: string[], exclude_fields: boolean): LinkAction;

        // Owm methods of EvinceDocument-3.0.LinkAction

        /**
         * Checks whether `a` and `b` are equal.
         * @param b a #EvLinkAction
         * @returns %TRUE iff @a and @b are equal
         */
        equal(b: LinkAction): boolean;
        get_action_type(): LinkActionType;
        get_dest(): LinkDest;
        get_exclude_reset_fields(): boolean;
        get_filename(): string;
        get_hide_list(): Layer[];
        get_name(): string;
        get_params(): string;
        get_reset_fields(): string[];
        get_show_list(): Layer[];
        get_toggle_list(): Layer[];
        get_uri(): string;
    }

    module LinkDest {
        // Constructor properties interface
    }

    class LinkDest extends GObject.Object {
        // Own properties of EvinceDocument-3.0.LinkDest

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

        // Constructors of EvinceDocument-3.0.LinkDest

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

        // Owm methods of EvinceDocument-3.0.LinkDest

        /**
         * Checks whether `a` and `b` are equal.
         * @param b a #EvLinkDest
         * @returns %TRUE iff @a and @b are equal
         */
        equal(b: LinkDest): boolean;
        get_bottom(): number;
        get_dest_type(): LinkDestType;
        get_left(change_left: boolean): number;
        get_named_dest(): string;
        get_page(): number;
        get_page_label(): string;
        get_right(): number;
        get_top(change_top: boolean): number;
        get_zoom(change_zoom: boolean): number;
    }

    module Media {
        // Constructor properties interface
    }

    class Media extends GObject.Object {
        // Own fields of EvinceDocument-3.0.Media

        base_instance: GObject.Object;

        // Constructors of EvinceDocument-3.0.Media

        static new_for_uri(page: Page, uri: string): Media;

        // Owm methods of EvinceDocument-3.0.Media

        get_page_index(): number;
        get_show_controls(): boolean;
        get_uri(): string;
        set_show_controls(show_controls: boolean): void;
    }

    module Page {
        // Constructor properties interface
    }

    class Page extends GObject.Object {
        // Own fields of EvinceDocument-3.0.Page

        base_instance: GObject.Object;
        index: number;
        backend_page: BackendPage;
        backend_destroy_func: BackendPageDestroyFunc;

        // Constructors of EvinceDocument-3.0.Page

        static ['new'](index: number): Page;
    }

    module RenderContext {
        // Constructor properties interface
    }

    class RenderContext extends GObject.Object {
        // Own fields of EvinceDocument-3.0.RenderContext

        page: Page;
        rotation: number;
        scale: number;
        target_width: number;
        target_height: number;

        // Constructors of EvinceDocument-3.0.RenderContext

        static ['new'](page: Page, rotation: number, scale: number): RenderContext;

        // Owm methods of EvinceDocument-3.0.RenderContext

        compute_scaled_size(
            width_points: number,
            height_points: number,
            scaled_width: number,
            scaled_height: number,
        ): void;
        compute_scales(width_points: number, height_points: number, scale_x: number, scale_y: number): void;
        compute_transformed_size(
            width_points: number,
            height_points: number,
            transformed_width: number,
            transformed_height: number,
        ): void;
        set_page(page: Page): void;
        set_rotation(rotation: number): void;
        set_scale(scale: number): void;
        set_target_size(target_width: number, target_height: number): void;
    }

    module TransitionEffect {
        // Constructor properties interface
    }

    class TransitionEffect extends GObject.Object {
        // Own properties of EvinceDocument-3.0.TransitionEffect

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

    class AnnotationAttachmentClass {}

    class AnnotationClass {}

    class AnnotationMarkupInterface {}

    class AnnotationTextClass {}

    class AnnotationTextMarkupClass {}

    class AsyncRendererInterface {}

    class AttachmentClass {}

    class DocumentAnnotationsInterface {}

    class DocumentAttachmentsInterface {}

    class DocumentBackendInfo {
        // Own fields of EvinceDocument-3.0.DocumentBackendInfo

        name: string;
        version: string;

        // Constructors of EvinceDocument-3.0.DocumentBackendInfo

        constructor(
            properties?: Partial<{
                name: string;
                version: string;
            }>,
        );
    }

    class DocumentClass {}

    class DocumentFindInterface {}

    class DocumentFontsInterface {}

    class DocumentFormsInterface {}

    class DocumentImagesInterface {}

    class DocumentInfo {
        // Own fields of EvinceDocument-3.0.DocumentInfo

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

        // Constructors of EvinceDocument-3.0.DocumentInfo

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

        // Owm methods of EvinceDocument-3.0.DocumentInfo

        copy(): DocumentInfo;
        /**
         * Frees `info`.
         */
        free(): void;
        get_created_datetime(): GLib.DateTime | null;
        get_modified_datetime(): GLib.DateTime | null;
        set_from_xmp(xmp: string, size: number): boolean;
        take_created_datetime(datetime: GLib.DateTime): void;
        take_modified_datetime(datetime: GLib.DateTime): void;
    }

    class DocumentLayersInterface {}

    class DocumentLicense {
        // Own fields of EvinceDocument-3.0.DocumentLicense

        text: string;
        uri: string;
        web_statement: string;

        // Constructors of EvinceDocument-3.0.DocumentLicense

        constructor(
            properties?: Partial<{
                text: string;
                uri: string;
                web_statement: string;
            }>,
        );

        static ['new'](): DocumentLicense;

        // Owm methods of EvinceDocument-3.0.DocumentLicense

        copy(): DocumentLicense;
        /**
         * Frees `license`.
         */
        free(): void;
        get_text(): string | null;
        get_uri(): string | null;
        get_web_statement(): string | null;
    }

    class DocumentLinksInterface {}

    class DocumentMediaInterface {}

    class DocumentPrintInterface {}

    class DocumentPrivate {}

    class DocumentSecurityInterface {}

    class DocumentTextInterface {}

    class DocumentTransitionInterface {}

    class FileExporterContext {
        // Own fields of EvinceDocument-3.0.FileExporterContext

        format: FileExporterFormat;
        filename: string;
        first_page: number;
        last_page: number;
        paper_width: number;
        paper_height: number;
        duplex: boolean;
        pages_per_sheet: number;
    }

    class FileExporterInterface {}

    class FindRectangle {
        // Own fields of EvinceDocument-3.0.FindRectangle

        x1: number;
        y1: number;
        x2: number;
        y2: number;
        next_line: boolean;
        after_hyphen: boolean;

        // Constructors of EvinceDocument-3.0.FindRectangle

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

        // Owm methods of EvinceDocument-3.0.FindRectangle

        copy(): FindRectangle;
        free(): void;
    }

    class FormFieldButtonClass {}

    class FormFieldChoiceClass {}

    class FormFieldClass {}

    class FormFieldSignatureClass {}

    class FormFieldTextClass {}

    class ImageClass {}

    class ImagePrivate {}

    class LayerClass {}

    class LayerPrivate {}

    class LinkActionClass {}

    class LinkActionPrivate {}

    class LinkClass {}

    class LinkDestClass {}

    class LinkDestPrivate {}

    class LinkPrivate {}

    class Mapping {
        // Own fields of EvinceDocument-3.0.Mapping

        area: Rectangle;
        data: any;

        // Constructors of EvinceDocument-3.0.Mapping

        constructor(
            properties?: Partial<{
                area: Rectangle;
                data: any;
            }>,
        );
    }

    class MappingList {
        // Constructors of EvinceDocument-3.0.MappingList

        constructor(page: number, list: Mapping[]);

        static ['new'](page: number, list: Mapping[]): MappingList;

        // Owm methods of EvinceDocument-3.0.MappingList

        find(data?: any | null): Mapping;
        find_custom(data: any | null, func: GLib.CompareFunc): Mapping;
        get(x: number, y: number): Mapping;
        get_data(x: number, y: number): any | null;
        get_list(): Mapping[];
        get_page(): number;
        length(): number;
        nth(n: number): Mapping;
        ref(): MappingList;
        remove(mapping: Mapping): void;
        unref(): void;
    }

    class MediaClass {}

    class MediaPrivate {}

    class PageClass {}

    class Point {
        // Own fields of EvinceDocument-3.0.Point

        x: number;
        y: number;

        // Constructors of EvinceDocument-3.0.Point

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
            }>,
        );
    }

    class Rectangle {
        // Own fields of EvinceDocument-3.0.Rectangle

        x1: number;
        y1: number;
        x2: number;
        y2: number;

        // Constructors of EvinceDocument-3.0.Rectangle

        constructor(
            properties?: Partial<{
                x1: number;
                y1: number;
                x2: number;
                y2: number;
            }>,
        );

        static ['new'](): Rectangle;

        // Owm methods of EvinceDocument-3.0.Rectangle

        copy(): Rectangle;
        free(): void;
    }

    class RenderContextClass {}

    class SelectionInterface {}

    class SourceLink {
        // Own fields of EvinceDocument-3.0.SourceLink

        filename: string;
        line: number;
        col: number;

        // Constructors of EvinceDocument-3.0.SourceLink

        constructor(
            properties?: Partial<{
                filename: string;
                line: number;
                col: number;
            }>,
        );

        static ['new'](filename: string, line: number, col: number): SourceLink;

        // Owm methods of EvinceDocument-3.0.SourceLink

        copy(): SourceLink;
        free(): void;
    }

    class TransitionEffectClass {}

    class TypeInfo {
        // Own fields of EvinceDocument-3.0.TypeInfo

        desc: string;
        mime_types: string;

        // Constructors of EvinceDocument-3.0.TypeInfo

        constructor(
            properties?: Partial<{
                desc: string;
                mime_types: string;
            }>,
        );
    }

    interface AnnotationMarkup {
        // Own properties of EvinceDocument-3.0.AnnotationMarkup

        can_have_popup: boolean;
        canHavePopup: boolean;
        has_popup: boolean;
        hasPopup: boolean;
        label: string;
        opacity: number;
        popup_is_open: boolean;
        popupIsOpen: boolean;
        rectangle: Rectangle;

        // Owm methods of EvinceDocument-3.0.AnnotationMarkup

        can_have_popup(): boolean;
        get_label(): string;
        get_opacity(): number;
        get_popup_is_open(): boolean;
        get_rectangle(ev_rect: Rectangle): void;
        has_popup(): boolean;
        set_has_popup(has_popup: boolean): boolean;
        set_label(label: string): boolean;
        set_opacity(opacity: number): boolean;
        set_popup_is_open(is_open: boolean): boolean;
        set_rectangle(ev_rect: Rectangle): boolean;
    }

    interface AsyncRenderer {
        // Owm methods of EvinceDocument-3.0.AsyncRenderer

        render_pixbuf(page: number, scale: number, rotation: number): void;

        // Own virtual methods of EvinceDocument-3.0.AsyncRenderer

        vfunc_render_finished(pixbuf: GdkPixbuf.Pixbuf): void;
        vfunc_render_pixbuf(page: number, scale: number, rotation: number): void;
    }

    interface DocumentAnnotations {
        // Owm methods of EvinceDocument-3.0.DocumentAnnotations

        add_annotation(annot: Annotation, rect: Rectangle): void;
        can_add_annotation(): boolean;
        can_remove_annotation(): boolean;
        document_is_modified(): boolean;
        get_annotations(page: Page): MappingList;
        over_markup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup;
        remove_annotation(annot: Annotation): void;
        save_annotation(annot: Annotation, mask: AnnotationsSaveMask): void;

        // Own virtual methods of EvinceDocument-3.0.DocumentAnnotations

        vfunc_add_annotation(annot: Annotation, rect: Rectangle): void;
        vfunc_document_is_modified(): boolean;
        vfunc_get_annotations(page: Page): MappingList;
        vfunc_over_markup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup;
        vfunc_remove_annotation(annot: Annotation): void;
        vfunc_save_annotation(annot: Annotation, mask: AnnotationsSaveMask): void;
    }

    interface DocumentAttachments {
        // Owm methods of EvinceDocument-3.0.DocumentAttachments

        get_attachments(): Attachment[];
        has_attachments(): boolean;

        // Own virtual methods of EvinceDocument-3.0.DocumentAttachments

        vfunc_get_attachments(): Attachment[];
        vfunc_has_attachments(): boolean;
    }

    interface DocumentFind {
        // Owm methods of EvinceDocument-3.0.DocumentFind

        find_text(page: Page, text: string, case_sensitive: boolean): Rectangle[];
        find_text_extended(page: Page, text: string, options: FindOptions): FindRectangle[];
        find_text_with_options(page: Page, text: string, options: FindOptions): Rectangle[];
        get_supported_options(): FindOptions;

        // Own virtual methods of EvinceDocument-3.0.DocumentFind

        vfunc_find_text(page: Page, text: string, case_sensitive: boolean): Rectangle[];
        vfunc_find_text_extended(page: Page, text: string, options: FindOptions): FindRectangle[];
        vfunc_find_text_with_options(page: Page, text: string, options: FindOptions): Rectangle[];
        vfunc_get_supported_options(): FindOptions;
    }

    interface DocumentFonts {
        // Owm methods of EvinceDocument-3.0.DocumentFonts

        fill_model(model: Gtk.TreeModel): void;
        get_fonts_summary(): string;
        get_progress(): number;
        scan(n_pages: number): boolean;

        // Own virtual methods of EvinceDocument-3.0.DocumentFonts

        vfunc_fill_model(model: Gtk.TreeModel): void;
        vfunc_get_fonts_summary(): string;
        vfunc_get_progress(): number;
        vfunc_scan(n_pages: number): boolean;
    }

    interface DocumentForms {
        // Owm methods of EvinceDocument-3.0.DocumentForms

        document_is_modified(): boolean;
        form_field_button_get_state(field: FormField): boolean;
        form_field_button_set_state(field: FormField, state: boolean): void;
        form_field_choice_get_item(field: FormField, index: number): string;
        form_field_choice_get_n_items(field: FormField): number;
        form_field_choice_get_text(field: FormField): string;
        form_field_choice_is_item_selected(field: FormField, index: number): boolean;
        form_field_choice_select_item(field: FormField, index: number): void;
        form_field_choice_set_text(field: FormField, text: string): void;
        form_field_choice_toggle_item(field: FormField, index: number): void;
        form_field_choice_unselect_all(field: FormField): void;
        form_field_text_get_text(field: FormField): string;
        form_field_text_set_text(field: FormField, text: string): void;
        get_form_fields(page: Page): MappingList;
        reset_form(action: LinkAction): void;

        // Own virtual methods of EvinceDocument-3.0.DocumentForms

        vfunc_document_is_modified(): boolean;
        vfunc_form_field_button_get_state(field: FormField): boolean;
        vfunc_form_field_button_set_state(field: FormField, state: boolean): void;
        vfunc_form_field_choice_get_item(field: FormField, index: number): string;
        vfunc_form_field_choice_get_n_items(field: FormField): number;
        vfunc_form_field_choice_get_text(field: FormField): string;
        vfunc_form_field_choice_is_item_selected(field: FormField, index: number): boolean;
        vfunc_form_field_choice_select_item(field: FormField, index: number): void;
        vfunc_form_field_choice_set_text(field: FormField, text: string): void;
        vfunc_form_field_choice_toggle_item(field: FormField, index: number): void;
        vfunc_form_field_choice_unselect_all(field: FormField): void;
        vfunc_form_field_text_get_text(field: FormField): string;
        vfunc_form_field_text_set_text(field: FormField, text: string): void;
        vfunc_get_form_fields(page: Page): MappingList;
        vfunc_reset_form(action: LinkAction): void;
    }

    interface DocumentImages {
        // Owm methods of EvinceDocument-3.0.DocumentImages

        get_image(image: Image): GdkPixbuf.Pixbuf;
        get_image_mapping(page: Page): MappingList;

        // Own virtual methods of EvinceDocument-3.0.DocumentImages

        vfunc_get_image(image: Image): GdkPixbuf.Pixbuf;
        vfunc_get_image_mapping(page: Page): MappingList;
    }

    interface DocumentLayers {
        // Owm methods of EvinceDocument-3.0.DocumentLayers

        get_layers(): Gtk.TreeModel;
        has_layers(): boolean;
        hide_layer(layer: Layer): void;
        layer_is_visible(layer: Layer): boolean;
        show_layer(layer: Layer): void;

        // Own virtual methods of EvinceDocument-3.0.DocumentLayers

        vfunc_get_layers(): Gtk.TreeModel;
        vfunc_has_layers(): boolean;
        vfunc_hide_layer(layer: Layer): void;
        vfunc_layer_is_visible(layer: Layer): boolean;
        vfunc_show_layer(layer: Layer): void;
    }

    interface DocumentLinks {
        // Owm methods of EvinceDocument-3.0.DocumentLinks

        find_link_dest(link_name: string): LinkDest;
        find_link_page(link_name: string): number;
        get_dest_page(dest: LinkDest): number;
        get_dest_page_label(dest: LinkDest): string;
        get_link_page(link: Link): number;
        get_link_page_label(link: Link): string;
        get_links(page: Page): MappingList;
        get_links_model(): Gtk.TreeModel;
        has_document_links(): boolean;

        // Own virtual methods of EvinceDocument-3.0.DocumentLinks

        vfunc_find_link_dest(link_name: string): LinkDest;
        vfunc_find_link_page(link_name: string): number;
        vfunc_get_links(page: Page): MappingList;
        vfunc_get_links_model(): Gtk.TreeModel;
        vfunc_has_document_links(): boolean;
    }

    interface DocumentMedia {
        // Owm methods of EvinceDocument-3.0.DocumentMedia

        get_media_mapping(page: Page): MappingList;

        // Own virtual methods of EvinceDocument-3.0.DocumentMedia

        vfunc_get_media_mapping(page: Page): MappingList;
    }

    interface DocumentPrint {
        // Owm methods of EvinceDocument-3.0.DocumentPrint

        print_page(page: Page, cr: cairo.Context): void;

        // Own virtual methods of EvinceDocument-3.0.DocumentPrint

        vfunc_print_page(page: Page, cr: cairo.Context): void;
    }

    interface DocumentSecurity {
        // Owm methods of EvinceDocument-3.0.DocumentSecurity

        has_document_security(): boolean;
        set_password(password: string): void;

        // Own virtual methods of EvinceDocument-3.0.DocumentSecurity

        vfunc_has_document_security(): boolean;
        vfunc_set_password(password: string): void;
    }

    interface DocumentText {
        // Owm methods of EvinceDocument-3.0.DocumentText

        get_text(page: Page): string;
        /**
         * FIXME
         * @param page a #EvPage
         * @returns a newly created #PangoAttrList
         */
        get_text_attrs(page: Page): Pango.AttrList;
        get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean;
        get_text_mapping(page: Page): cairo.Region;

        // Own virtual methods of EvinceDocument-3.0.DocumentText

        vfunc_get_text(page: Page): string;
        /**
         * FIXME
         * @param page a #EvPage
         */
        vfunc_get_text_attrs(page: Page): Pango.AttrList;
        vfunc_get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean;
        vfunc_get_text_mapping(page: Page): cairo.Region;
    }

    interface DocumentTransition {
        // Owm methods of EvinceDocument-3.0.DocumentTransition

        get_effect(page: number): TransitionEffect;
        get_page_duration(page: number): number;

        // Own virtual methods of EvinceDocument-3.0.DocumentTransition

        vfunc_get_effect(page: number): TransitionEffect;
        vfunc_get_page_duration(page: number): number;
    }

    interface FileExporter {
        // Owm methods of EvinceDocument-3.0.FileExporter

        begin(fc: FileExporterContext): void;
        begin_page(): void;
        do_page(rc: RenderContext): void;
        end(): void;
        end_page(): void;
        get_capabilities(): FileExporterCapabilities;

        // Own virtual methods of EvinceDocument-3.0.FileExporter

        vfunc_begin(fc: FileExporterContext): void;
        vfunc_begin_page(): void;
        vfunc_do_page(rc: RenderContext): void;
        vfunc_end(): void;
        vfunc_end_page(): void;
        vfunc_get_capabilities(): FileExporterCapabilities;
    }

    interface Selection {
        // Owm methods of EvinceDocument-3.0.Selection

        get_selected_text(page: Page, style: SelectionStyle, points: Rectangle): string;
        get_selection_region(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region;
        render_selection(
            rc: RenderContext,
            surface: cairo.Surface,
            points: Rectangle,
            old_points: Rectangle,
            style: SelectionStyle,
            text: Gdk.Color,
            base: Gdk.Color,
        ): void;

        // Own virtual methods of EvinceDocument-3.0.Selection

        vfunc_get_selected_text(page: Page, style: SelectionStyle, points: Rectangle): string;
        vfunc_get_selection_region(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region;
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

    type BackendPage = any;
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
