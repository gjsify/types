/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './evincedocument-3.0-ambient.d.ts';

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
        static $gtype: GObject.GType<DocumentError>;

        // Static fields of EvinceDocument.DocumentError

        static INVALID: number;
        static UNSUPPORTED_CONTENT: number;
        static ENCRYPTED: number;

        // Constructors of EvinceDocument.DocumentError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Own static methods of EvinceDocument.DocumentError

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

    abstract class Annotation extends GObject.Object {
        static $gtype: GObject.GType<Annotation>;

        // Own properties of EvinceDocument.Annotation

        /**
         * The area of the page where the annotation is placed.
         *
         * Since 3.18
         */
        get area(): Rectangle;
        set area(val: Rectangle);
        /**
         * The colour of the annotation as a #GdkColor.
         */
        get color(): any;
        set color(val: any);
        get contents(): string;
        set contents(val: string);
        get modified(): string;
        set modified(val: string);
        get name(): string;
        set name(val: string);
        set page(val: Page);
        /**
         * The colour of the annotation as a #GdkRGBA.
         */
        get rgba(): Gdk.RGBA;
        set rgba(val: Gdk.RGBA);

        // Constructors of EvinceDocument.Annotation

        constructor(properties?: Partial<Annotation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of EvinceDocument.Annotation

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
        get_area(): Rectangle;
        /**
         * Get the color of `annot`.
         */
        get_color(): Gdk.Color;
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
        get_rgba(): Gdk.RGBA;
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
        set_modified_from_time_t(utime: never): boolean;
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

        interface ConstructorProps extends Annotation.ConstructorProps, AnnotationMarkup.ConstructorProps {
            attachment: Attachment;
        }
    }

    class AnnotationAttachment extends Annotation implements AnnotationMarkup {
        static $gtype: GObject.GType<AnnotationAttachment>;

        // Own properties of EvinceDocument.AnnotationAttachment

        get attachment(): Attachment;
        set attachment(val: Attachment);

        // Constructors of EvinceDocument.AnnotationAttachment

        constructor(properties?: Partial<AnnotationAttachment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](page: Page, attachment: Attachment): AnnotationAttachment;

        // Own methods of EvinceDocument.AnnotationAttachment

        get_attachment(): Attachment;
        set_attachment(attachment: Attachment): boolean;

        // Inherited properties
        // This accessor conflicts with a property or field in a parent class or interface.
        can_have_popup: boolean | any;
        get canHavePopup(): boolean;
        set canHavePopup(val: boolean);
        // This accessor conflicts with a property or field in a parent class or interface.
        has_popup: boolean | any;
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
        /**
         * The area of the page where the annotation is placed.
         *
         * Since 3.18
         */
        get area(): Rectangle;
        set area(val: Rectangle);
        /**
         * The colour of the annotation as a #GdkColor.
         */
        get color(): any;
        set color(val: any);
        get contents(): string;
        set contents(val: string);
        get modified(): string;
        set modified(val: string);
        get name(): string;
        set name(val: string);
        set page(val: Page);
        /**
         * The colour of the annotation as a #GdkRGBA.
         */
        get rgba(): Gdk.RGBA;
        set rgba(val: Gdk.RGBA);

        // Inherited methods
        get_label(): string;
        get_opacity(): number;
        get_popup_is_open(): boolean;
        get_rectangle(ev_rect: Rectangle): void;
        set_has_popup(has_popup: boolean): boolean;
        set_label(label: string): boolean;
        set_opacity(opacity: number): boolean;
        set_popup_is_open(is_open: boolean): boolean;
        set_rectangle(ev_rect: Rectangle): boolean;
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
        get_area(): Rectangle;
        /**
         * Get the color of `annot`.
         */
        get_color(): Gdk.Color;
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
        get_rgba(): Gdk.RGBA;
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
        set_modified_from_time_t(utime: never): boolean;
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

    module AnnotationText {
        // Constructor properties interface

        interface ConstructorProps extends Annotation.ConstructorProps, AnnotationMarkup.ConstructorProps {
            icon: AnnotationTextIcon;
            is_open: boolean;
            isOpen: boolean;
        }
    }

    class AnnotationText extends Annotation implements AnnotationMarkup {
        static $gtype: GObject.GType<AnnotationText>;

        // Own properties of EvinceDocument.AnnotationText

        get icon(): AnnotationTextIcon;
        set icon(val: AnnotationTextIcon);
        get is_open(): boolean;
        set is_open(val: boolean);
        get isOpen(): boolean;
        set isOpen(val: boolean);

        // Constructors of EvinceDocument.AnnotationText

        constructor(properties?: Partial<AnnotationText.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](page: Page): AnnotationText;

        // Own methods of EvinceDocument.AnnotationText

        get_icon(): AnnotationTextIcon;
        get_is_open(): boolean;
        set_icon(icon: AnnotationTextIcon): boolean;
        set_is_open(is_open: boolean): boolean;

        // Inherited properties
        // This accessor conflicts with a property or field in a parent class or interface.
        can_have_popup: boolean | any;
        get canHavePopup(): boolean;
        set canHavePopup(val: boolean);
        // This accessor conflicts with a property or field in a parent class or interface.
        has_popup: boolean | any;
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
        /**
         * The area of the page where the annotation is placed.
         *
         * Since 3.18
         */
        get area(): Rectangle;
        set area(val: Rectangle);
        /**
         * The colour of the annotation as a #GdkColor.
         */
        get color(): any;
        set color(val: any);
        get contents(): string;
        set contents(val: string);
        get modified(): string;
        set modified(val: string);
        get name(): string;
        set name(val: string);
        set page(val: Page);
        /**
         * The colour of the annotation as a #GdkRGBA.
         */
        get rgba(): Gdk.RGBA;
        set rgba(val: Gdk.RGBA);

        // Inherited methods
        get_label(): string;
        get_opacity(): number;
        get_popup_is_open(): boolean;
        get_rectangle(ev_rect: Rectangle): void;
        set_has_popup(has_popup: boolean): boolean;
        set_label(label: string): boolean;
        set_opacity(opacity: number): boolean;
        set_popup_is_open(is_open: boolean): boolean;
        set_rectangle(ev_rect: Rectangle): boolean;
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
        get_area(): Rectangle;
        /**
         * Get the color of `annot`.
         */
        get_color(): Gdk.Color;
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
        get_rgba(): Gdk.RGBA;
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
        set_modified_from_time_t(utime: never): boolean;
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

    module AnnotationTextMarkup {
        // Constructor properties interface

        interface ConstructorProps extends Annotation.ConstructorProps, AnnotationMarkup.ConstructorProps {
            type: AnnotationTextMarkupType;
        }
    }

    class AnnotationTextMarkup extends Annotation implements AnnotationMarkup {
        static $gtype: GObject.GType<AnnotationTextMarkup>;

        // Own properties of EvinceDocument.AnnotationTextMarkup

        get type(): AnnotationTextMarkupType;
        set type(val: AnnotationTextMarkupType);

        // Constructors of EvinceDocument.AnnotationTextMarkup

        constructor(properties?: Partial<AnnotationTextMarkup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static highlight_new(page: Page): AnnotationTextMarkup;

        static squiggly_new(page: Page): AnnotationTextMarkup;

        static strike_out_new(page: Page): AnnotationTextMarkup;

        static underline_new(page: Page): AnnotationTextMarkup;

        // Own methods of EvinceDocument.AnnotationTextMarkup

        get_markup_type(): AnnotationTextMarkupType;
        set_markup_type(markup_type: AnnotationTextMarkupType): boolean;

        // Inherited properties
        // This accessor conflicts with a property or field in a parent class or interface.
        can_have_popup: boolean | any;
        get canHavePopup(): boolean;
        set canHavePopup(val: boolean);
        // This accessor conflicts with a property or field in a parent class or interface.
        has_popup: boolean | any;
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
        /**
         * The area of the page where the annotation is placed.
         *
         * Since 3.18
         */
        get area(): Rectangle;
        set area(val: Rectangle);
        /**
         * The colour of the annotation as a #GdkColor.
         */
        get color(): any;
        set color(val: any);
        get contents(): string;
        set contents(val: string);
        get modified(): string;
        set modified(val: string);
        get name(): string;
        set name(val: string);
        set page(val: Page);
        /**
         * The colour of the annotation as a #GdkRGBA.
         */
        get rgba(): Gdk.RGBA;
        set rgba(val: Gdk.RGBA);

        // Inherited methods
        get_label(): string;
        get_opacity(): number;
        get_popup_is_open(): boolean;
        get_rectangle(ev_rect: Rectangle): void;
        set_has_popup(has_popup: boolean): boolean;
        set_label(label: string): boolean;
        set_opacity(opacity: number): boolean;
        set_popup_is_open(is_open: boolean): boolean;
        set_rectangle(ev_rect: Rectangle): boolean;
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
        get_area(): Rectangle;
        /**
         * Get the color of `annot`.
         */
        get_color(): Gdk.Color;
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
        get_rgba(): Gdk.RGBA;
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
        set_modified_from_time_t(utime: never): boolean;
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

    module Attachment {
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

    class Attachment extends GObject.Object {
        static $gtype: GObject.GType<Attachment>;

        // Own properties of EvinceDocument.Attachment

        set ctime(val: number);
        set data(val: any);
        set description(val: string);
        set mtime(val: number);
        set name(val: string);
        set size(val: number);

        // Own fields of EvinceDocument.Attachment

        base_instance: GObject.Object;

        // Constructors of EvinceDocument.Attachment

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

        // Own static methods of EvinceDocument.Attachment

        static error_quark(): GLib.Quark;

        // Own methods of EvinceDocument.Attachment

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            modified: boolean;
        }
    }

    abstract class Document extends GObject.Object {
        static $gtype: GObject.GType<Document>;

        // Own properties of EvinceDocument.Document

        get modified(): boolean;
        set modified(val: boolean);

        // Own fields of EvinceDocument.Document

        base: GObject.Object;

        // Constructors of EvinceDocument.Document

        constructor(properties?: Partial<Document.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of EvinceDocument.Document

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
        static misc_get_pointer_position(widget: Gtk.Widget): [number, number];
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

        // Own virtual methods of EvinceDocument.Document

        vfunc_get_backend_info(info: DocumentBackendInfo): boolean;
        /**
         * Returns the #EvDocumentInfo for the document.
         */
        vfunc_get_info(): DocumentInfo;
        vfunc_get_n_pages(): number;
        vfunc_get_page(index: number): Page;
        vfunc_get_page_label(page: Page): string;
        vfunc_get_page_size(page_index: Page): [number, number];
        vfunc_get_thumbnail(rc: RenderContext): GdkPixbuf.Pixbuf;
        vfunc_get_thumbnail_surface(rc: RenderContext): cairo.Surface;
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
         */
        vfunc_load(uri: string): boolean;
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
         */
        vfunc_load_fd(fd: number, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Synchronously loads the document from `file`.
         * See ev_document_load() for more information.
         * @param file a #GFile
         * @param flags flags from #EvDocumentLoadFlags
         * @param cancellable a #GCancellable, or %NULL
         */
        vfunc_load_gfile(file: Gio.File, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Synchronously loads the document from `stream`.
         * See ev_document_load() for more information.
         * @param stream a #GInputStream
         * @param flags flags from #EvDocumentLoadFlags
         * @param cancellable a #GCancellable, or %NULL
         */
        vfunc_load_stream(
            stream: Gio.InputStream,
            flags: DocumentLoadFlags,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        vfunc_render(rc: RenderContext): cairo.Surface;
        /**
         * Saves `document` to `uri`.
         * @param uri the target URI
         */
        vfunc_save(uri: string): boolean;
        vfunc_support_synctex(): boolean;

        // Own methods of EvinceDocument.Document

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
        get_page_size(page_index: number): [number, number];
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

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class FormField extends GObject.Object {
        static $gtype: GObject.GType<FormField>;

        // Own fields of EvinceDocument.FormField

        id: number;
        is_read_only: boolean;
        font_size: number;
        activation_link: Link;
        page: Page;
        changed: boolean;

        // Constructors of EvinceDocument.FormField

        constructor(properties?: Partial<FormField.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module FormFieldButton {
        // Constructor properties interface

        interface ConstructorProps extends FormField.ConstructorProps {}
    }

    class FormFieldButton extends FormField {
        static $gtype: GObject.GType<FormFieldButton>;

        // Own fields of EvinceDocument.FormFieldButton

        type: FormFieldButtonType;
        state: boolean;

        // Constructors of EvinceDocument.FormFieldButton

        constructor(properties?: Partial<FormFieldButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number, type: FormFieldButtonType): FormFieldButton;
    }

    module FormFieldChoice {
        // Constructor properties interface

        interface ConstructorProps extends FormField.ConstructorProps {}
    }

    class FormFieldChoice extends FormField {
        static $gtype: GObject.GType<FormFieldChoice>;

        // Own fields of EvinceDocument.FormFieldChoice

        type: FormFieldChoiceType;
        multi_select: boolean;
        is_editable: boolean;
        do_spell_check: boolean;
        commit_on_sel_change: boolean;
        selected_items: any[];
        text: string;

        // Constructors of EvinceDocument.FormFieldChoice

        constructor(properties?: Partial<FormFieldChoice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number, type: FormFieldChoiceType): FormFieldChoice;
    }

    module FormFieldSignature {
        // Constructor properties interface

        interface ConstructorProps extends FormField.ConstructorProps {}
    }

    class FormFieldSignature extends FormField {
        static $gtype: GObject.GType<FormFieldSignature>;

        // Constructors of EvinceDocument.FormFieldSignature

        constructor(properties?: Partial<FormFieldSignature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number): FormFieldSignature;
    }

    module FormFieldText {
        // Constructor properties interface

        interface ConstructorProps extends FormField.ConstructorProps {}
    }

    class FormFieldText extends FormField {
        static $gtype: GObject.GType<FormFieldText>;

        // Own fields of EvinceDocument.FormFieldText

        type: FormFieldTextType;
        do_spell_check: boolean;
        do_scroll: boolean;
        comb: boolean;
        is_rich_text: boolean;
        is_password: boolean;
        max_len: number;
        text: string;

        // Constructors of EvinceDocument.FormFieldText

        constructor(properties?: Partial<FormFieldText.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number, type: FormFieldTextType): FormFieldText;
    }

    module Image {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Image extends GObject.Object {
        static $gtype: GObject.GType<Image>;

        // Own fields of EvinceDocument.Image

        base_instance: GObject.Object;

        // Constructors of EvinceDocument.Image

        constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](page: number, img_id: number): Image;

        static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Image;

        // Own methods of EvinceDocument.Image

        get_id(): number;
        get_page(): number;
        get_pixbuf(): GdkPixbuf.Pixbuf;
        get_tmp_uri(): string;
        save_tmp(pixbuf: GdkPixbuf.Pixbuf): string;
    }

    module Layer {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Layer extends GObject.Object {
        static $gtype: GObject.GType<Layer>;

        // Own fields of EvinceDocument.Layer

        base_instance: GObject.Object;

        // Constructors of EvinceDocument.Layer

        constructor(properties?: Partial<Layer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](is_parent: boolean, rb_group: number): Layer;

        // Own methods of EvinceDocument.Layer

        get_rb_group(): number;
        is_parent(): boolean;
    }

    module Link {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            action: LinkAction;
            title: string;
        }
    }

    class Link extends GObject.Object {
        static $gtype: GObject.GType<Link>;

        // Own properties of EvinceDocument.Link

        get action(): LinkAction;
        get title(): string;

        // Constructors of EvinceDocument.Link

        constructor(properties?: Partial<Link.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string, action: LinkAction): Link;

        // Own methods of EvinceDocument.Link

        get_action(): LinkAction;
        get_title(): string;
    }

    module LinkAction {
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

    class LinkAction extends GObject.Object {
        static $gtype: GObject.GType<LinkAction>;

        // Own properties of EvinceDocument.LinkAction

        get dest(): LinkDest;
        get exclude_reset_fields(): boolean;
        get excludeResetFields(): boolean;
        get filename(): string;
        get hide_list(): any;
        get hideList(): any;
        get name(): string;
        get params(): string;
        get reset_fields(): any;
        get resetFields(): any;
        get show_list(): any;
        get showList(): any;
        get toggle_list(): any;
        get toggleList(): any;
        get type(): LinkActionType;
        get uri(): string;

        // Constructors of EvinceDocument.LinkAction

        constructor(properties?: Partial<LinkAction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_dest(dest: LinkDest): LinkAction;

        static new_external_uri(uri: string): LinkAction;

        static new_launch(filename: string, params: string): LinkAction;

        static new_layers_state(show_list: Layer[], hide_list: Layer[], toggle_list: Layer[]): LinkAction;

        static new_named(name: string): LinkAction;

        static new_remote(dest: LinkDest, filename: string): LinkAction;

        static new_reset_form(fields: string[], exclude_fields: boolean): LinkAction;

        // Own methods of EvinceDocument.LinkAction

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

    class LinkDest extends GObject.Object {
        static $gtype: GObject.GType<LinkDest>;

        // Own properties of EvinceDocument.LinkDest

        get bottom(): number;
        get change(): number;
        get left(): number;
        get named(): string;
        get page(): number;
        get page_label(): string;
        get pageLabel(): string;
        get right(): number;
        get top(): number;
        get type(): LinkDestType;
        get zoom(): number;

        // Constructors of EvinceDocument.LinkDest

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

        // Own methods of EvinceDocument.LinkDest

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Media extends GObject.Object {
        static $gtype: GObject.GType<Media>;

        // Own fields of EvinceDocument.Media

        base_instance: GObject.Object;

        // Constructors of EvinceDocument.Media

        constructor(properties?: Partial<Media.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_for_uri(page: Page, uri: string): Media;

        // Own methods of EvinceDocument.Media

        get_page_index(): number;
        get_show_controls(): boolean;
        get_uri(): string;
        set_show_controls(show_controls: boolean): void;
    }

    module Page {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Page extends GObject.Object {
        static $gtype: GObject.GType<Page>;

        // Own fields of EvinceDocument.Page

        base_instance: GObject.Object;
        index: number;
        backend_page: BackendPage;
        backend_destroy_func: BackendPageDestroyFunc;

        // Constructors of EvinceDocument.Page

        constructor(properties?: Partial<Page.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](index: number): Page;
    }

    module RenderContext {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class RenderContext extends GObject.Object {
        static $gtype: GObject.GType<RenderContext>;

        // Own fields of EvinceDocument.RenderContext

        page: Page;
        rotation: number;
        scale: number;
        target_width: number;
        target_height: number;

        // Constructors of EvinceDocument.RenderContext

        constructor(properties?: Partial<RenderContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](page: Page, rotation: number, scale: number): RenderContext;

        // Own methods of EvinceDocument.RenderContext

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

    class TransitionEffect extends GObject.Object {
        static $gtype: GObject.GType<TransitionEffect>;

        // Own properties of EvinceDocument.TransitionEffect

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

        // Constructors of EvinceDocument.TransitionEffect

        constructor(properties?: Partial<TransitionEffect.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    type AnnotationAttachmentClass = typeof AnnotationAttachment;
    type AnnotationClass = typeof Annotation;
    type AnnotationMarkupInterface = typeof AnnotationMarkup;
    type AnnotationTextClass = typeof AnnotationText;
    type AnnotationTextMarkupClass = typeof AnnotationTextMarkup;
    type AsyncRendererInterface = typeof AsyncRenderer;
    type AttachmentClass = typeof Attachment;
    type DocumentAnnotationsInterface = typeof DocumentAnnotations;
    type DocumentAttachmentsInterface = typeof DocumentAttachments;
    class DocumentBackendInfo {
        static $gtype: GObject.GType<DocumentBackendInfo>;

        // Own fields of EvinceDocument.DocumentBackendInfo

        name: string;
        version: string;

        // Constructors of EvinceDocument.DocumentBackendInfo

        constructor(
            properties?: Partial<{
                name: string;
                version: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    type DocumentClass = typeof Document;
    type DocumentFindInterface = typeof DocumentFind;
    type DocumentFontsInterface = typeof DocumentFonts;
    type DocumentFormsInterface = typeof DocumentForms;
    type DocumentImagesInterface = typeof DocumentImages;
    class DocumentInfo {
        static $gtype: GObject.GType<DocumentInfo>;

        // Own fields of EvinceDocument.DocumentInfo

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

        // Constructors of EvinceDocument.DocumentInfo

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
        _init(...args: any[]): void;

        static ['new'](): DocumentInfo;

        // Own methods of EvinceDocument.DocumentInfo

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

    type DocumentLayersInterface = typeof DocumentLayers;
    class DocumentLicense {
        static $gtype: GObject.GType<DocumentLicense>;

        // Own fields of EvinceDocument.DocumentLicense

        text: string;
        uri: string;
        web_statement: string;

        // Constructors of EvinceDocument.DocumentLicense

        constructor(
            properties?: Partial<{
                text: string;
                uri: string;
                web_statement: string;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): DocumentLicense;

        // Own methods of EvinceDocument.DocumentLicense

        copy(): DocumentLicense;
        /**
         * Frees `license`.
         */
        free(): void;
        get_text(): string | null;
        get_uri(): string | null;
        get_web_statement(): string | null;
    }

    type DocumentLinksInterface = typeof DocumentLinks;
    type DocumentMediaInterface = typeof DocumentMedia;
    type DocumentPrintInterface = typeof DocumentPrint;
    abstract class DocumentPrivate {
        static $gtype: GObject.GType<DocumentPrivate>;

        // Constructors of EvinceDocument.DocumentPrivate

        _init(...args: any[]): void;
    }

    type DocumentSecurityInterface = typeof DocumentSecurity;
    type DocumentTextInterface = typeof DocumentText;
    type DocumentTransitionInterface = typeof DocumentTransition;
    class FileExporterContext {
        static $gtype: GObject.GType<FileExporterContext>;

        // Own fields of EvinceDocument.FileExporterContext

        format: FileExporterFormat;
        filename: string;
        first_page: number;
        last_page: number;
        paper_width: number;
        paper_height: number;
        duplex: boolean;
        pages_per_sheet: number;

        // Constructors of EvinceDocument.FileExporterContext

        _init(...args: any[]): void;
    }

    type FileExporterInterface = typeof FileExporter;
    class FindRectangle {
        static $gtype: GObject.GType<FindRectangle>;

        // Own fields of EvinceDocument.FindRectangle

        x1: number;
        y1: number;
        x2: number;
        y2: number;
        next_line: boolean;
        after_hyphen: boolean;

        // Constructors of EvinceDocument.FindRectangle

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
        _init(...args: any[]): void;

        static ['new'](): FindRectangle;

        // Own methods of EvinceDocument.FindRectangle

        copy(): FindRectangle;
        free(): void;
    }

    type FormFieldButtonClass = typeof FormFieldButton;
    type FormFieldChoiceClass = typeof FormFieldChoice;
    type FormFieldClass = typeof FormField;
    type FormFieldSignatureClass = typeof FormFieldSignature;
    type FormFieldTextClass = typeof FormFieldText;
    type ImageClass = typeof Image;
    abstract class ImagePrivate {
        static $gtype: GObject.GType<ImagePrivate>;

        // Constructors of EvinceDocument.ImagePrivate

        _init(...args: any[]): void;
    }

    type LayerClass = typeof Layer;
    abstract class LayerPrivate {
        static $gtype: GObject.GType<LayerPrivate>;

        // Constructors of EvinceDocument.LayerPrivate

        _init(...args: any[]): void;
    }

    type LinkActionClass = typeof LinkAction;
    abstract class LinkActionPrivate {
        static $gtype: GObject.GType<LinkActionPrivate>;

        // Constructors of EvinceDocument.LinkActionPrivate

        _init(...args: any[]): void;
    }

    type LinkClass = typeof Link;
    type LinkDestClass = typeof LinkDest;
    abstract class LinkDestPrivate {
        static $gtype: GObject.GType<LinkDestPrivate>;

        // Constructors of EvinceDocument.LinkDestPrivate

        _init(...args: any[]): void;
    }

    abstract class LinkPrivate {
        static $gtype: GObject.GType<LinkPrivate>;

        // Constructors of EvinceDocument.LinkPrivate

        _init(...args: any[]): void;
    }

    class Mapping {
        static $gtype: GObject.GType<Mapping>;

        // Own fields of EvinceDocument.Mapping

        area: Rectangle;
        data: any;

        // Constructors of EvinceDocument.Mapping

        constructor(
            properties?: Partial<{
                area: Rectangle;
                data: any;
            }>,
        );
        _init(...args: any[]): void;
    }

    class MappingList {
        static $gtype: GObject.GType<MappingList>;

        // Constructors of EvinceDocument.MappingList

        constructor(page: number, list: Mapping[]);
        _init(...args: any[]): void;

        static ['new'](page: number, list: Mapping[]): MappingList;

        // Own methods of EvinceDocument.MappingList

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

    type MediaClass = typeof Media;
    abstract class MediaPrivate {
        static $gtype: GObject.GType<MediaPrivate>;

        // Constructors of EvinceDocument.MediaPrivate

        _init(...args: any[]): void;
    }

    type PageClass = typeof Page;
    class Point {
        static $gtype: GObject.GType<Point>;

        // Own fields of EvinceDocument.Point

        x: number;
        y: number;

        // Constructors of EvinceDocument.Point

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class Rectangle {
        static $gtype: GObject.GType<Rectangle>;

        // Own fields of EvinceDocument.Rectangle

        x1: number;
        y1: number;
        x2: number;
        y2: number;

        // Constructors of EvinceDocument.Rectangle

        constructor(
            properties?: Partial<{
                x1: number;
                y1: number;
                x2: number;
                y2: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): Rectangle;

        // Own methods of EvinceDocument.Rectangle

        copy(): Rectangle;
        free(): void;
    }

    type RenderContextClass = typeof RenderContext;
    type SelectionInterface = typeof Selection;
    class SourceLink {
        static $gtype: GObject.GType<SourceLink>;

        // Own fields of EvinceDocument.SourceLink

        filename: string;
        line: number;
        col: number;

        // Constructors of EvinceDocument.SourceLink

        constructor(
            properties?: Partial<{
                filename: string;
                line: number;
                col: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](filename: string, line: number, col: number): SourceLink;

        // Own methods of EvinceDocument.SourceLink

        copy(): SourceLink;
        free(): void;
    }

    type TransitionEffectClass = typeof TransitionEffect;
    class TypeInfo {
        static $gtype: GObject.GType<TypeInfo>;

        // Own fields of EvinceDocument.TypeInfo

        desc: string;
        mime_types: string;

        // Constructors of EvinceDocument.TypeInfo

        constructor(
            properties?: Partial<{
                desc: string;
                mime_types: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    module AnnotationMarkup {
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
    interface AnnotationMarkup extends Annotation {
        // Own properties of EvinceDocument.AnnotationMarkup

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

        // Own methods of EvinceDocument.AnnotationMarkup

        get_label(): string;
        get_opacity(): number;
        get_popup_is_open(): boolean;
        get_rectangle(ev_rect: Rectangle): void;
        set_has_popup(has_popup: boolean): boolean;
        set_label(label: string): boolean;
        set_opacity(opacity: number): boolean;
        set_popup_is_open(is_open: boolean): boolean;
        set_rectangle(ev_rect: Rectangle): boolean;
    }

    export const AnnotationMarkup: AnnotationMarkupNamespace;

    module AsyncRenderer {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface AsyncRendererNamespace {
        $gtype: GObject.GType<AsyncRenderer>;
        prototype: AsyncRenderer;
    }
    interface AsyncRenderer extends GObject.Object {
        // Own methods of EvinceDocument.AsyncRenderer

        render_pixbuf(page: number, scale: number, rotation: number): void;

        // Own virtual methods of EvinceDocument.AsyncRenderer

        vfunc_render_finished(pixbuf: GdkPixbuf.Pixbuf): void;
        vfunc_render_pixbuf(page: number, scale: number, rotation: number): void;
    }

    export const AsyncRenderer: AsyncRendererNamespace;

    module DocumentAnnotations {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentAnnotationsNamespace {
        $gtype: GObject.GType<DocumentAnnotations>;
        prototype: DocumentAnnotations;
    }
    interface DocumentAnnotations extends GObject.Object {
        // Own methods of EvinceDocument.DocumentAnnotations

        add_annotation(annot: Annotation, rect: Rectangle): void;
        can_add_annotation(): boolean;
        can_remove_annotation(): boolean;
        document_is_modified(): boolean;
        get_annotations(page: Page): MappingList;
        over_markup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup;
        remove_annotation(annot: Annotation): void;
        save_annotation(annot: Annotation, mask: AnnotationsSaveMask): void;

        // Own virtual methods of EvinceDocument.DocumentAnnotations

        vfunc_add_annotation(annot: Annotation, rect: Rectangle): void;
        vfunc_document_is_modified(): boolean;
        vfunc_get_annotations(page: Page): MappingList;
        vfunc_over_markup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup;
        vfunc_remove_annotation(annot: Annotation): void;
        vfunc_save_annotation(annot: Annotation, mask: AnnotationsSaveMask): void;
    }

    export const DocumentAnnotations: DocumentAnnotationsNamespace;

    module DocumentAttachments {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentAttachmentsNamespace {
        $gtype: GObject.GType<DocumentAttachments>;
        prototype: DocumentAttachments;
    }
    interface DocumentAttachments extends GObject.Object {
        // Own methods of EvinceDocument.DocumentAttachments

        get_attachments(): Attachment[];
        has_attachments(): boolean;

        // Own virtual methods of EvinceDocument.DocumentAttachments

        vfunc_get_attachments(): Attachment[];
        vfunc_has_attachments(): boolean;
    }

    export const DocumentAttachments: DocumentAttachmentsNamespace;

    module DocumentFind {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentFindNamespace {
        $gtype: GObject.GType<DocumentFind>;
        prototype: DocumentFind;
    }
    interface DocumentFind extends GObject.Object {
        // Own methods of EvinceDocument.DocumentFind

        find_text(page: Page, text: string, case_sensitive: boolean): Rectangle[];
        find_text_extended(page: Page, text: string, options: FindOptions): FindRectangle[];
        find_text_with_options(page: Page, text: string, options: FindOptions): Rectangle[];
        get_supported_options(): FindOptions;

        // Own virtual methods of EvinceDocument.DocumentFind

        vfunc_find_text(page: Page, text: string, case_sensitive: boolean): Rectangle[];
        vfunc_find_text_extended(page: Page, text: string, options: FindOptions): FindRectangle[];
        vfunc_find_text_with_options(page: Page, text: string, options: FindOptions): Rectangle[];
        vfunc_get_supported_options(): FindOptions;
    }

    export const DocumentFind: DocumentFindNamespace;

    module DocumentFonts {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentFontsNamespace {
        $gtype: GObject.GType<DocumentFonts>;
        prototype: DocumentFonts;
    }
    interface DocumentFonts extends GObject.Object {
        // Own methods of EvinceDocument.DocumentFonts

        fill_model(model: Gtk.TreeModel): void;
        get_fonts_summary(): string;
        get_progress(): number;
        scan(n_pages: number): boolean;

        // Own virtual methods of EvinceDocument.DocumentFonts

        vfunc_fill_model(model: Gtk.TreeModel): void;
        vfunc_get_fonts_summary(): string;
        vfunc_get_progress(): number;
        vfunc_scan(n_pages: number): boolean;
    }

    export const DocumentFonts: DocumentFontsNamespace;

    module DocumentForms {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentFormsNamespace {
        $gtype: GObject.GType<DocumentForms>;
        prototype: DocumentForms;
    }
    interface DocumentForms extends GObject.Object {
        // Own methods of EvinceDocument.DocumentForms

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

        // Own virtual methods of EvinceDocument.DocumentForms

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

    export const DocumentForms: DocumentFormsNamespace;

    module DocumentImages {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentImagesNamespace {
        $gtype: GObject.GType<DocumentImages>;
        prototype: DocumentImages;
    }
    interface DocumentImages extends GObject.Object {
        // Own methods of EvinceDocument.DocumentImages

        get_image(image: Image): GdkPixbuf.Pixbuf;
        get_image_mapping(page: Page): MappingList;

        // Own virtual methods of EvinceDocument.DocumentImages

        vfunc_get_image(image: Image): GdkPixbuf.Pixbuf;
        vfunc_get_image_mapping(page: Page): MappingList;
    }

    export const DocumentImages: DocumentImagesNamespace;

    module DocumentLayers {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentLayersNamespace {
        $gtype: GObject.GType<DocumentLayers>;
        prototype: DocumentLayers;
    }
    interface DocumentLayers extends GObject.Object {
        // Own methods of EvinceDocument.DocumentLayers

        get_layers(): Gtk.TreeModel;
        has_layers(): boolean;
        hide_layer(layer: Layer): void;
        layer_is_visible(layer: Layer): boolean;
        show_layer(layer: Layer): void;

        // Own virtual methods of EvinceDocument.DocumentLayers

        vfunc_get_layers(): Gtk.TreeModel;
        vfunc_has_layers(): boolean;
        vfunc_hide_layer(layer: Layer): void;
        vfunc_layer_is_visible(layer: Layer): boolean;
        vfunc_show_layer(layer: Layer): void;
    }

    export const DocumentLayers: DocumentLayersNamespace;

    module DocumentLinks {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentLinksNamespace {
        $gtype: GObject.GType<DocumentLinks>;
        prototype: DocumentLinks;
    }
    interface DocumentLinks extends GObject.Object {
        // Own methods of EvinceDocument.DocumentLinks

        find_link_dest(link_name: string): LinkDest;
        find_link_page(link_name: string): number;
        get_dest_page(dest: LinkDest): number;
        get_dest_page_label(dest: LinkDest): string;
        get_link_page(link: Link): number;
        get_link_page_label(link: Link): string;
        get_links(page: Page): MappingList;
        get_links_model(): Gtk.TreeModel;
        has_document_links(): boolean;

        // Own virtual methods of EvinceDocument.DocumentLinks

        vfunc_find_link_dest(link_name: string): LinkDest;
        vfunc_find_link_page(link_name: string): number;
        vfunc_get_links(page: Page): MappingList;
        vfunc_get_links_model(): Gtk.TreeModel;
        vfunc_has_document_links(): boolean;
    }

    export const DocumentLinks: DocumentLinksNamespace;

    module DocumentMedia {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentMediaNamespace {
        $gtype: GObject.GType<DocumentMedia>;
        prototype: DocumentMedia;
    }
    interface DocumentMedia extends GObject.Object {
        // Own methods of EvinceDocument.DocumentMedia

        get_media_mapping(page: Page): MappingList;

        // Own virtual methods of EvinceDocument.DocumentMedia

        vfunc_get_media_mapping(page: Page): MappingList;
    }

    export const DocumentMedia: DocumentMediaNamespace;

    module DocumentPrint {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentPrintNamespace {
        $gtype: GObject.GType<DocumentPrint>;
        prototype: DocumentPrint;
    }
    interface DocumentPrint extends GObject.Object {
        // Own methods of EvinceDocument.DocumentPrint

        print_page(page: Page, cr: cairo.Context): void;

        // Own virtual methods of EvinceDocument.DocumentPrint

        vfunc_print_page(page: Page, cr: cairo.Context): void;
    }

    export const DocumentPrint: DocumentPrintNamespace;

    module DocumentSecurity {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentSecurityNamespace {
        $gtype: GObject.GType<DocumentSecurity>;
        prototype: DocumentSecurity;
    }
    interface DocumentSecurity extends GObject.Object {
        // Own methods of EvinceDocument.DocumentSecurity

        has_document_security(): boolean;
        set_password(password: string): void;

        // Own virtual methods of EvinceDocument.DocumentSecurity

        vfunc_has_document_security(): boolean;
        vfunc_set_password(password: string): void;
    }

    export const DocumentSecurity: DocumentSecurityNamespace;

    module DocumentText {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentTextNamespace {
        $gtype: GObject.GType<DocumentText>;
        prototype: DocumentText;
    }
    interface DocumentText extends GObject.Object {
        // Own methods of EvinceDocument.DocumentText

        get_text(page: Page): string;
        /**
         * FIXME
         * @param page a #EvPage
         * @returns a newly created #PangoAttrList
         */
        get_text_attrs(page: Page): Pango.AttrList;
        get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean;
        get_text_mapping(page: Page): cairo.Region;

        // Own virtual methods of EvinceDocument.DocumentText

        vfunc_get_text(page: Page): string;
        /**
         * FIXME
         * @param page a #EvPage
         */
        vfunc_get_text_attrs(page: Page): Pango.AttrList;
        vfunc_get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean;
        vfunc_get_text_mapping(page: Page): cairo.Region;
    }

    export const DocumentText: DocumentTextNamespace;

    module DocumentTransition {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentTransitionNamespace {
        $gtype: GObject.GType<DocumentTransition>;
        prototype: DocumentTransition;
    }
    interface DocumentTransition extends GObject.Object {
        // Own methods of EvinceDocument.DocumentTransition

        get_effect(page: number): TransitionEffect;
        get_page_duration(page: number): number;

        // Own virtual methods of EvinceDocument.DocumentTransition

        vfunc_get_effect(page: number): TransitionEffect;
        vfunc_get_page_duration(page: number): number;
    }

    export const DocumentTransition: DocumentTransitionNamespace;

    module FileExporter {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface FileExporterNamespace {
        $gtype: GObject.GType<FileExporter>;
        prototype: FileExporter;
    }
    interface FileExporter extends GObject.Object {
        // Own methods of EvinceDocument.FileExporter

        begin(fc: FileExporterContext): void;
        begin_page(): void;
        do_page(rc: RenderContext): void;
        end(): void;
        end_page(): void;
        get_capabilities(): FileExporterCapabilities;

        // Own virtual methods of EvinceDocument.FileExporter

        vfunc_begin(fc: FileExporterContext): void;
        vfunc_begin_page(): void;
        vfunc_do_page(rc: RenderContext): void;
        vfunc_end(): void;
        vfunc_end_page(): void;
        vfunc_get_capabilities(): FileExporterCapabilities;
    }

    export const FileExporter: FileExporterNamespace;

    module Selection {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SelectionNamespace {
        $gtype: GObject.GType<Selection>;
        prototype: Selection;
    }
    interface Selection extends GObject.Object {
        // Own methods of EvinceDocument.Selection

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

        // Own virtual methods of EvinceDocument.Selection

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

    export const Selection: SelectionNamespace;

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
