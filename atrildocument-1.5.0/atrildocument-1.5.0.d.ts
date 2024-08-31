/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
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
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

export namespace AtrilDocument {
    /**
     * AtrilDocument-1.5.0
     */

    export namespace AnnotationTextIcon {
        export const $gtype: GObject.GType<AnnotationTextIcon>;
    }

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

    export namespace AnnotationType {
        export const $gtype: GObject.GType<AnnotationType>;
    }

    enum AnnotationType {
        UNKNOWN,
        TEXT,
        ATTACHMENT,
    }

    export namespace CompressionType {
        export const $gtype: GObject.GType<CompressionType>;
    }

    enum CompressionType {
        NONE,
        BZIP2,
        GZIP,
        LZMA,
    }
    class DocumentError extends GLib.Error {
        static $gtype: GObject.GType<DocumentError>;

        // Static fields

        static INVALID: number;
        static UNSUPPORTED_CONTENT: number;
        static ENCRYPTED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    export namespace DocumentLayout {
        export const $gtype: GObject.GType<DocumentLayout>;
    }

    enum DocumentLayout {
        SINGLE_PAGE,
        ONE_COLUMN,
        TWO_COLUMN_LEFT,
        TWO_COLUMN_RIGHT,
        TWO_PAGE_LEFT,
        TWO_PAGE_RIGHT,
    }

    export namespace DocumentMode {
        export const $gtype: GObject.GType<DocumentMode>;
    }

    enum DocumentMode {
        NONE,
        USE_OC,
        USE_THUMBS,
        FULL_SCREEN,
        USE_ATTACHMENTS,
        PRESENTATION,
    }

    export namespace FileExporterFormat {
        export const $gtype: GObject.GType<FileExporterFormat>;
    }

    enum FileExporterFormat {
        UNKNOWN,
        PS,
        PDF,
    }

    export namespace FormFieldButtonType {
        export const $gtype: GObject.GType<FormFieldButtonType>;
    }

    enum FormFieldButtonType {
        PUSH,
        CHECK,
        RADIO,
    }

    export namespace FormFieldChoiceType {
        export const $gtype: GObject.GType<FormFieldChoiceType>;
    }

    enum FormFieldChoiceType {
        COMBO,
        LIST,
    }

    export namespace FormFieldTextType {
        export const $gtype: GObject.GType<FormFieldTextType>;
    }

    enum FormFieldTextType {
        NORMAL,
        MULTILINE,
        FILE_SELECT,
    }

    export namespace LinkActionType {
        export const $gtype: GObject.GType<LinkActionType>;
    }

    enum LinkActionType {
        GOTO_DEST,
        GOTO_REMOTE,
        EXTERNAL_URI,
        LAUNCH,
        NAMED,
        LAYERS_STATE,
    }

    export namespace LinkDestType {
        export const $gtype: GObject.GType<LinkDestType>;
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
        HLINK,
        UNKNOWN,
    }

    export namespace SelectionStyle {
        export const $gtype: GObject.GType<SelectionStyle>;
    }

    enum SelectionStyle {
        GLYPH,
        WORD,
        LINE,
    }

    export namespace TransitionEffectAlignment {
        export const $gtype: GObject.GType<TransitionEffectAlignment>;
    }

    enum TransitionEffectAlignment {
        HORIZONTAL,
        VERTICAL,
    }

    export namespace TransitionEffectDirection {
        export const $gtype: GObject.GType<TransitionEffectDirection>;
    }

    enum TransitionEffectDirection {
        INWARD,
        OUTWARD,
    }

    export namespace TransitionEffectType {
        export const $gtype: GObject.GType<TransitionEffectType>;
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
     * The micro version number of the EV library
     * (e.g. in version 3.1.4 this is 4).
     */
    const MICRO_VERSION: number;
    /**
     * The minor version number of the EV library
     * (e.g. in version 3.1.4 this is 1).
     */
    const MINOR_VERSION: number;
    function backends_manager_get_backends_dir(): string;
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
     * Note: on unknown MIME types, this may return NULL without `error`
     * being filled in.
     * @param uri the URI
     * @param fast whether to use fast MIME type detection
     * @returns a newly allocated string with the MIME type of the file at   @uri, or %NULL on error or if the MIME type could not be determined
     */
    function file_get_mime_type(uri: string, fast: boolean): string;
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
     * Initializes the atril document library.
     *
     * You must call this before calling any other function in the atril
     * document library.
     * @returns %TRUE if any backends were found; %FALSE otherwise
     */
    function init(): boolean;
    /**
     * Creates a temp directory in the atril temp directory.
     * @param template a template string; must end in 'XXXXXX'
     * @returns a newly allocated string with the temp directory name, or %NULL   on error with @error filled in
     */
    function mkdtemp(template: string): string;
    /**
     * Creates a temp file in the atril temp directory.
     * @param template a template string; must contain 'XXXXXX', but not necessarily as a suffix
     * @param file_name a location to store the filename of the temp file
     * @returns a file descriptor to the newly created temp file name, or %-1   on error with @error filled in
     */
    function mkstemp(template: string, file_name: string): number;
    function rect_cmp(a: Rectangle, b: Rectangle): number;
    /**
     * Shuts the atril document library down.
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

    export namespace AnnotationsSaveMask {
        export const $gtype: GObject.GType<AnnotationsSaveMask>;
    }

    enum AnnotationsSaveMask {
        NONE,
        CONTENTS,
        COLOR,
        LABEL,
        OPACITY,
        POPUP_RECT,
        POPUP_IS_OPEN,
        TEXT_IS_OPEN,
        TEXT_ICON,
        ATTACHMENT,
        ALL,
    }

    export namespace DocumentInfoFields {
        export const $gtype: GObject.GType<DocumentInfoFields>;
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
    }

    export namespace DocumentPermissions {
        export const $gtype: GObject.GType<DocumentPermissions>;
    }

    enum DocumentPermissions {
        OK_TO_PRINT,
        OK_TO_MODIFY,
        OK_TO_COPY,
        OK_TO_ADD_NOTES,
        FULL,
    }

    export namespace DocumentUIHints {
        export const $gtype: GObject.GType<DocumentUIHints>;
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

    export namespace FileExporterCapabilities {
        export const $gtype: GObject.GType<FileExporterCapabilities>;
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
    module Annotation {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<Annotation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Compare `annot` and `other`.
         * @param other another #EvAnnotation
         * @returns %TRUE if @annot is equal to @other, %FALSE otherwise
         */
        equal(other: Annotation): boolean;
        get_annotation_type(): AnnotationType;
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
         * set the last modification date using a #gint64, use
         * ev_annotation_set_modified_from_time() instead. You can monitor
         * changes to the last modification date by connecting to the
         * notify::modified signal on `annot`.
         * @param modified string with the last modification date.
         * @returns %TRUE if the last modification date has been updated, %FALSE otherwise.
         */
        set_modified(modified: string): boolean;
        /**
         * Set the last modification date of `annot` to `utime`.  You can
         * monitor changes to the last modification date by connectin to the
         * notify::modified sinal on `annot`.
         * For the time-format used, see ev_document_misc_format_date().
         * @param utime a #gint64
         * @returns %TRUE if the last modified date has been updated, %FALSE otherwise.
         */
        set_modified_from_time(utime: number): boolean;
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

        // Properties

        get attachment(): Attachment;
        set attachment(val: Attachment);

        // Constructors

        constructor(properties?: Partial<AnnotationAttachment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](page: Page, attachment: Attachment): AnnotationAttachment;

        // Methods

        get_attachment(): Attachment;
        set_attachment(attachment: Attachment): boolean;

        // Inherited properties
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
         * set the last modification date using a #gint64, use
         * ev_annotation_set_modified_from_time() instead. You can monitor
         * changes to the last modification date by connecting to the
         * notify::modified signal on `annot`.
         * @param modified string with the last modification date.
         * @returns %TRUE if the last modification date has been updated, %FALSE otherwise.
         */
        set_modified(modified: string): boolean;
        /**
         * Set the last modification date of `annot` to `utime`.  You can
         * monitor changes to the last modification date by connectin to the
         * notify::modified sinal on `annot`.
         * For the time-format used, see ev_document_misc_format_date().
         * @param utime a #gint64
         * @returns %TRUE if the last modified date has been updated, %FALSE otherwise.
         */
        set_modified_from_time(utime: number): boolean;
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

        // Properties

        get icon(): AnnotationTextIcon;
        set icon(val: AnnotationTextIcon);
        get is_open(): boolean;
        set is_open(val: boolean);
        get isOpen(): boolean;
        set isOpen(val: boolean);

        // Constructors

        constructor(properties?: Partial<AnnotationText.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](page: Page): AnnotationText;

        // Methods

        get_icon(): AnnotationTextIcon;
        get_is_open(): boolean;
        set_icon(icon: AnnotationTextIcon): boolean;
        set_is_open(is_open: boolean): boolean;

        // Inherited properties
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
         * set the last modification date using a #gint64, use
         * ev_annotation_set_modified_from_time() instead. You can monitor
         * changes to the last modification date by connecting to the
         * notify::modified signal on `annot`.
         * @param modified string with the last modification date.
         * @returns %TRUE if the last modification date has been updated, %FALSE otherwise.
         */
        set_modified(modified: string): boolean;
        /**
         * Set the last modification date of `annot` to `utime`.  You can
         * monitor changes to the last modification date by connectin to the
         * notify::modified sinal on `annot`.
         * For the time-format used, see ev_document_misc_format_date().
         * @param utime a #gint64
         * @returns %TRUE if the last modified date has been updated, %FALSE otherwise.
         */
        set_modified_from_time(utime: number): boolean;
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

        // Properties

        set ctime(val: number);
        set data(val: any);
        set description(val: string);
        set mtime(val: number);
        set name(val: string);
        set size(val: number);

        // Fields

        base_instance: GObject.Object;

        // Constructors

        constructor(properties?: Partial<Attachment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            name: string,
            description: string,
            mtime: number,
            ctime: number,
            size: number,
            data?: any | null,
        ): Attachment;

        // Static methods

        static error_quark(): GLib.Quark;

        // Methods

        get_creation_date(): number;
        get_description(): string;
        get_mime_type(): string;
        get_modification_date(): number;
        get_name(): string;
        open(screen: Gdk.Screen, timestamp: number): boolean;
        save(file: Gio.File): boolean;
    }

    module Document {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class Document extends GObject.Object {
        static $gtype: GObject.GType<Document>;

        // Fields

        base: GObject.Object;
        iswebdocument: boolean;
        synctex_version: string;

        // Constructors

        constructor(properties?: Partial<Document.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

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
         * If `document` is %NULL, adds a #GtkFileFilter for each document type that atril
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
        static fc_mutex_lock(): void;
        static fc_mutex_trylock(): boolean;
        static fc_mutex_unlock(): void;
        static misc_format_date(utime: number): string;
        static misc_get_loading_thumbnail(width: number, height: number, inverted_colors: boolean): GdkPixbuf.Pixbuf;
        static misc_get_monitor_dpi(monitor: Gdk.Monitor): number;
        static misc_get_page_border_size(page_width: number, page_height: number, border: Gtk.Border): void;
        static misc_get_pointer_position(widget: Gtk.Widget, x: number, y: number): void;
        static misc_get_thumbnail_frame(
            width: number,
            height: number,
            source_pixbuf: GdkPixbuf.Pixbuf,
        ): GdkPixbuf.Pixbuf;
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
        static misc_surface_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): cairo.Surface;
        static misc_surface_rotate_and_scale(
            surface: cairo.Surface,
            dest_width: number,
            dest_height: number,
            dest_rotation: number,
        ): cairo.Surface;

        // Virtual methods

        vfunc_check_add_night_sheet(): void;
        vfunc_get_backend_info(info: DocumentBackendInfo): boolean;
        vfunc_get_info(): DocumentInfo;
        vfunc_get_n_pages(): number;
        vfunc_get_page_label(page: Page): string;
        vfunc_get_page_size(page: Page, width: number, height: number): void;
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
         */
        vfunc_load(uri: string): boolean;
        vfunc_render(rc: RenderContext): cairo.Surface;
        /**
         * Saves `document` to `uri`.
         * @param uri the target URI
         */
        vfunc_save(uri: string): boolean;
        vfunc_support_synctex(): boolean;
        vfunc_toggle_night_mode(night: boolean): void;

        // Methods

        check_add_night_sheet(): void;
        check_dimensions(): boolean;
        find_page_by_label(page_label: string, page_index: number): boolean;
        get_backend_info(info: DocumentBackendInfo): boolean;
        get_info(): DocumentInfo;
        get_max_label_len(): number;
        get_max_page_size(width: number, height: number): void;
        get_min_page_size(width: number, height: number): void;
        get_n_pages(): number;
        get_page_label(page_index: number): string;
        get_page_size(page_index: number, width: number, height: number): void;
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
         * is returned. Other errors are possible too, depending on the backend
         * used to load the document and the URI, e.g. #GIOError, #GFileError, and
         * #GConvertError.
         * @param uri the document's URI
         * @returns %TRUE on success, or %FALSE on failure.
         */
        load(uri: string): boolean;
        render(rc: RenderContext): cairo.Surface;
        /**
         * Saves `document` to `uri`.
         * @param uri the target URI
         * @returns %TRUE on success, or %FALSE on error with @error filled in
         */
        save(uri: string): boolean;
        /**
         * Peforms a Synctex backward search to obtain the TeX input file, line and
         * (possibly) column  corresponding to the  position (`x,``y)` (in 72dpi
         * coordinates) in the  `page` of `document`.
         * @param page_index
         * @param x
         * @param y
         * @returns A pointer to the EvSourceLink structure that holds the result. @NULL if synctex is not enabled for the document or no result is found. The EvSourceLink pointer should be freed with g_free after it is used.
         */
        synctex_backward_search(page_index: number, x: number, y: number): SourceLink;
        toggle_night_mode(night: boolean): void;
    }

    module FormField {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class FormField extends GObject.Object {
        static $gtype: GObject.GType<FormField>;

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
    }

    module FormFieldButton {
        // Constructor properties interface

        interface ConstructorProps extends FormField.ConstructorProps {}
    }

    class FormFieldButton extends FormField {
        static $gtype: GObject.GType<FormFieldButton>;

        // Fields

        partent: FormField;
        type: FormFieldButtonType;
        state: boolean;

        // Constructors

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

        // Fields

        partent: FormField;
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
    }

    module FormFieldSignature {
        // Constructor properties interface

        interface ConstructorProps extends FormField.ConstructorProps {}
    }

    class FormFieldSignature extends FormField {
        static $gtype: GObject.GType<FormFieldSignature>;

        // Fields

        partent: FormField;

        // Constructors

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

        // Fields

        partent: FormField;
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
    }

    module Image {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Image extends GObject.Object {
        static $gtype: GObject.GType<Image>;

        // Fields

        base_instance: GObject.Object;

        // Constructors

        constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](page: number, img_id: number): Image;

        static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Image;

        // Methods

        get_id(): number;
        get_page(): number;
        get_tmp_uri(): string;
        save_tmp(pixbuf: GdkPixbuf.Pixbuf): string;
    }

    module Layer {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Layer extends GObject.Object {
        static $gtype: GObject.GType<Layer>;

        // Fields

        base_instance: GObject.Object;

        // Constructors

        constructor(properties?: Partial<Layer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](is_parent: boolean, rb_group: number): Layer;

        // Methods

        get_rb_group(): number;
        is_parent(): boolean;
    }

    module Link {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            action: any;
            title: string;
        }
    }

    class Link extends GObject.Object {
        static $gtype: GObject.GType<Link>;

        // Properties

        get action(): any;
        get title(): string;

        // Constructors

        constructor(properties?: Partial<Link.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string, action: LinkAction): Link;

        // Methods

        get_title(): string;
    }

    module LinkAction {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dest: any;
            filename: string;
            hide_list: any;
            hideList: any;
            name: string;
            params: string;
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

        // Properties

        get dest(): any;
        get filename(): string;
        get hide_list(): any;
        get hideList(): any;
        get name(): string;
        get params(): string;
        get show_list(): any;
        get showList(): any;
        get toggle_list(): any;
        get toggleList(): any;
        get type(): LinkActionType;
        get uri(): string;

        // Constructors

        constructor(properties?: Partial<LinkAction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_dest(dest: LinkDest): LinkAction;

        static new_external_uri(uri: string): LinkAction;

        static new_launch(filename: string, params: string): LinkAction;

        static new_named(name: string): LinkAction;

        static new_remote(dest: LinkDest, filename: string): LinkAction;

        // Methods

        get_action_type(): LinkActionType;
        get_filename(): string;
        get_name(): string;
        get_params(): string;
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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<LinkDest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_fit(page: number): LinkDest;

        static new_fith(page: number, top: number, change_top: boolean): LinkDest;

        static new_fitr(page: number, left: number, bottom: number, right: number, top: number): LinkDest;

        static new_fitv(page: number, left: number, change_left: boolean): LinkDest;

        static new_hlink(hlink: string, page: number): LinkDest;

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

        // Methods

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

    module Page {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Page extends GObject.Object {
        static $gtype: GObject.GType<Page>;

        // Fields

        base_instance: GObject.Object;
        index: number;
        backend_page: BackendPage;
        backend_destroy_func: BackendPageDestroyFunc;

        // Constructors

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

        // Fields

        page: Page;
        rotation: number;
        scale: number;

        // Constructors

        constructor(properties?: Partial<RenderContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](page: Page, rotation: number, scale: number): RenderContext;

        // Methods

        set_page(page: Page): void;
        set_rotation(rotation: number): void;
        set_scale(scale: number): void;
    }

    module TransitionEffect {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            alignment: TransitionEffectAlignment;
            angle: number;
            direction: TransitionEffectDirection;
            duration: number;
            rectangular: boolean;
            scale: number;
            type: TransitionEffectType;
        }
    }

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
        get rectangular(): boolean;
        set rectangular(val: boolean);
        get scale(): number;
        set scale(val: number);
        get type(): TransitionEffectType;
        set type(val: TransitionEffectType);

        // Constructors

        constructor(properties?: Partial<TransitionEffect.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    type AnnotationAttachmentClass = typeof AnnotationAttachment;
    type AnnotationClass = typeof Annotation;
    type AnnotationMarkupInterface = typeof AnnotationMarkup;
    type AnnotationTextClass = typeof AnnotationText;
    type AsyncRendererInterface = typeof AsyncRenderer;
    type AttachmentClass = typeof Attachment;
    abstract class AttachmentPrivate {
        static $gtype: GObject.GType<AttachmentPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DocumentAnnotationsInterface = typeof DocumentAnnotations;
    type DocumentAttachmentsInterface = typeof DocumentAttachments;
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
        _init(...args: any[]): void;
    }

    type DocumentClass = typeof Document;
    type DocumentFindInterface = typeof DocumentFind;
    type DocumentFontsInterface = typeof DocumentFonts;
    type DocumentFormsInterface = typeof DocumentForms;
    type DocumentImagesInterface = typeof DocumentImages;
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
        creation_date: number;
        modified_date: number;
        layout: DocumentLayout;
        mode: DocumentMode;
        ui_hints: number;
        permissions: number;
        n_pages: number;
        paper_height: number;
        paper_width: number;
        license: DocumentLicense;
        fields_mask: number;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        copy(): DocumentInfo;
        free(): void;
    }

    type DocumentLayersInterface = typeof DocumentLayers;
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
        _init(...args: any[]): void;

        static ['new'](): DocumentLicense;

        // Methods

        copy(): DocumentLicense;
        free(): void;
        get_text(): string;
        get_uri(): string;
        get_web_statement(): string;
    }

    type DocumentLinksInterface = typeof DocumentLinks;
    type DocumentPrintInterface = typeof DocumentPrint;
    abstract class DocumentPrivate {
        static $gtype: GObject.GType<DocumentPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DocumentSecurityInterface = typeof DocumentSecurity;
    type DocumentTextInterface = typeof DocumentText;
    type DocumentThumbnailsInterface = typeof DocumentThumbnails;
    type DocumentTransitionInterface = typeof DocumentTransition;
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

        // Constructors

        _init(...args: any[]): void;
    }

    type FileExporterInterface = typeof FileExporter;
    type FormFieldButtonClass = typeof FormFieldButton;
    type FormFieldChoiceClass = typeof FormFieldChoice;
    type FormFieldClass = typeof FormField;
    type FormFieldSignatureClass = typeof FormFieldSignature;
    type FormFieldTextClass = typeof FormFieldText;
    type ImageClass = typeof Image;
    abstract class ImagePrivate {
        static $gtype: GObject.GType<ImagePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LayerClass = typeof Layer;
    abstract class LayerPrivate {
        static $gtype: GObject.GType<LayerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LinkActionClass = typeof LinkAction;
    abstract class LinkActionPrivate {
        static $gtype: GObject.GType<LinkActionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LinkClass = typeof Link;
    type LinkDestClass = typeof LinkDest;
    abstract class LinkDestPrivate {
        static $gtype: GObject.GType<LinkDestPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class LinkPrivate {
        static $gtype: GObject.GType<LinkPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

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
        _init(...args: any[]): void;
    }

    class MappingList {
        static $gtype: GObject.GType<MappingList>;

        // Constructors

        constructor(page: number, list: Mapping[]);
        _init(...args: any[]): void;

        static ['new'](page: number, list: Mapping[]): MappingList;

        // Methods

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

    type PageClass = typeof Page;
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
        _init(...args: any[]): void;
    }

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
        _init(...args: any[]): void;

        static ['new'](): Rectangle;

        // Methods

        copy(): Rectangle;
        free(): void;
    }

    type RenderContextClass = typeof RenderContext;
    type SelectionInterface = typeof Selection;
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
        _init(...args: any[]): void;

        static ['new'](filename: string, line: number, col: number): SourceLink;

        // Methods

        copy(): SourceLink;
        free(): void;
    }

    type TransitionEffectClass = typeof TransitionEffect;
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
        _init(...args: any[]): void;
    }

    module AnnotationMarkup {
        // Constructor properties interface

        interface ConstructorProps extends Annotation.ConstructorProps {
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
        // Properties

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
        // Methods

        render_pixbuf(page: number, scale: number, rotation: number): void;

        // Virtual methods

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
        // Methods

        add_annotation(annot: Annotation, rect: Rectangle): void;
        can_add_annotation(): boolean;
        can_remove_annotation(): boolean;
        document_is_modified(): boolean;
        get_annotations(page: Page): MappingList;
        remove_annotation(annot: Annotation): void;
        save_annotation(annot: Annotation, mask: AnnotationsSaveMask): void;

        // Virtual methods

        vfunc_add_annotation(annot: Annotation, rect: Rectangle): void;
        vfunc_document_is_modified(): boolean;
        vfunc_get_annotations(page: Page): MappingList;
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
        // Methods

        get_attachments(): Attachment[];
        has_attachments(): boolean;

        // Virtual methods

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
        // Methods

        check_for_hits(page: Page, text: string, case_sensitive: boolean): number;
        find_text(page: Page, text: string, case_sensitive: boolean): Rectangle[];

        // Virtual methods

        vfunc_check_for_hits(page: Page, text: string, case_sensitive: boolean): number;
        vfunc_find_text(page: Page, text: string, case_sensitive: boolean): Rectangle[];
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
        // Methods

        fill_model(model: Gtk.TreeModel): void;
        get_progress(): number;
        scan(n_pages: number): boolean;

        // Virtual methods

        vfunc_fill_model(model: Gtk.TreeModel): void;
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
        // Methods

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

        // Virtual methods

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
        // Methods

        get_image(image: Image): GdkPixbuf.Pixbuf;
        get_image_mapping(page: Page): MappingList;

        // Virtual methods

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
        // Methods

        get_layers(): Gtk.TreeModel;
        has_layers(): boolean;
        hide_layer(layer: Layer): void;
        layer_is_visible(layer: Layer): boolean;
        show_layer(layer: Layer): void;

        // Virtual methods

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
        // Methods

        find_link_dest(link_name: string): LinkDest;
        find_link_page(link_name: string): number;
        get_dest_page(dest: LinkDest): number;
        get_dest_page_label(dest: LinkDest): string;
        get_link_page(link: Link): number;
        get_link_page_label(link: Link): string;
        get_links(page: Page): MappingList;
        get_links_model(): Gtk.TreeModel;
        has_document_links(): boolean;

        // Virtual methods

        vfunc_find_link_dest(link_name: string): LinkDest;
        vfunc_find_link_page(link_name: string): number;
        vfunc_get_links(page: Page): MappingList;
        vfunc_get_links_model(): Gtk.TreeModel;
        vfunc_has_document_links(): boolean;
    }

    export const DocumentLinks: DocumentLinksNamespace;

    module DocumentPrint {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentPrintNamespace {
        $gtype: GObject.GType<DocumentPrint>;
        prototype: DocumentPrint;
    }
    interface DocumentPrint extends GObject.Object {
        // Methods

        print_page(page: Page, cr: cairo.Context): void;

        // Virtual methods

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
        // Methods

        has_document_security(): boolean;
        set_password(password: string): void;

        // Virtual methods

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
        // Methods

        get_text(page: Page): string;
        get_text_attrs(page: Page): Pango.AttrList;
        get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean;
        get_text_mapping(page: Page): cairo.Region;

        // Virtual methods

        vfunc_get_text(page: Page): string;
        vfunc_get_text_attrs(page: Page): Pango.AttrList;
        vfunc_get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean;
        vfunc_get_text_mapping(page: Page): cairo.Region;
    }

    export const DocumentText: DocumentTextNamespace;

    module DocumentThumbnails {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentThumbnailsNamespace {
        $gtype: GObject.GType<DocumentThumbnails>;
        prototype: DocumentThumbnails;
    }
    interface DocumentThumbnails extends GObject.Object {
        // Methods

        get_dimensions(rc: RenderContext, width: number, height: number): void;

        // Virtual methods

        vfunc_get_dimensions(rc: RenderContext, width: number, height: number): void;
    }

    export const DocumentThumbnails: DocumentThumbnailsNamespace;

    module DocumentTransition {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentTransitionNamespace {
        $gtype: GObject.GType<DocumentTransition>;
        prototype: DocumentTransition;
    }
    interface DocumentTransition extends GObject.Object {
        // Methods

        get_effect(page: number): TransitionEffect;
        get_page_duration(page: number): number;

        // Virtual methods

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
        // Methods

        begin(fc: FileExporterContext): void;
        begin_page(): void;
        do_page(rc: RenderContext): void;
        end(): void;
        end_page(): void;
        get_capabilities(): FileExporterCapabilities;

        // Virtual methods

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
        // Methods

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

        // Virtual methods

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

export default AtrilDocument;

// END
