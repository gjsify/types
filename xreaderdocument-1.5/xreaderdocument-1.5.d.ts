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

export namespace XreaderDocument {
    /**
     * XreaderDocument-1.5
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

    export namespace AnnotationTextMarkupType {
        export const $gtype: GObject.GType<AnnotationTextMarkupType>;
    }

    enum AnnotationTextMarkupType {
        HIGHLIGHT,
        STRIKE_OUT,
        UNDERLINE,
        SQUIGGLY,
    }

    export namespace AnnotationType {
        export const $gtype: GObject.GType<AnnotationType>;
    }

    enum AnnotationType {
        UNKNOWN,
        TEXT,
        ATTACHMENT,
        TEXT_MARKUP,
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
    function file_compress(uri: string, type: CompressionType | null): string;
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
    function file_uncompress(uri: string, type: CompressionType | null): string;
    /**
     * Initializes the xreader document library, and binds the xreader
     * gettext domain.
     *
     * You must call this before calling any other function in the xreader
     * document library.
     * @returns %TRUE if any backends were found; %FALSE otherwise
     */
    function init(): boolean;
    /**
     * Creates a temp directory in the xreader temp directory.
     * @param template a template string; must end in 'XXXXXX'
     * @returns a newly allocated string with the temp directory name, or %NULL   on error with @error filled in
     */
    function mkdtemp(template: string): string;
    /**
     * Creates a temp file in the xreader temp directory.
     * @param template a template string; must contain 'XXXXXX', but not necessarily as a suffix
     * @param file_name a location to store the filename of the temp file
     * @returns a file descriptor to the newly created temp file name, or %-1   on error with @error filled in
     */
    function mkstemp(template: string, file_name: string): number;
    function rect_cmp(a: Rectangle, b: Rectangle): number;
    /**
     * Shuts the xreader document library down.
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

    abstract class Annotation extends GObject.Object {
        static $gtype: GObject.GType<Annotation>;

        // Properties

        /**
         * The area of the page where the annotation is placed.
         *
         * Since 2.0.2
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

        connect<K extends keyof Annotation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Annotation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Annotation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Annotation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Annotation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Annotation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Compare `annot` and `other`.
         * @param other another #EvAnnotation
         * @returns %TRUE if @annot is equal to @other, %FALSE otherwise
         */
        equal(other: Annotation): boolean;
        get_annotation_type(): AnnotationType;
        get_area(area: Rectangle): void;
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
         * @param utime a #time_t
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

        connect<K extends keyof AnnotationAttachment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnnotationAttachment.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnnotationAttachment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnnotationAttachment.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnnotationAttachment.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AnnotationAttachment.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_attachment(): Attachment;
        set_attachment(attachment: Attachment): boolean;

        // Inherited properties
        // This accessor conflicts with a field or function name in a parent class or interface.
        can_have_popup: boolean | any;
        get canHavePopup(): boolean;
        set canHavePopup(val: boolean);
        // This accessor conflicts with a field or function name in a parent class or interface.
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
         * Since 2.0.2
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
        get_area(area: Rectangle): void;
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
         * @param utime a #time_t
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

        connect<K extends keyof AnnotationText.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnnotationText.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnnotationText.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnnotationText.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnnotationText.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AnnotationText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_icon(): AnnotationTextIcon;
        get_is_open(): boolean;
        set_icon(icon: AnnotationTextIcon | null): boolean;
        set_is_open(is_open: boolean): boolean;

        // Inherited properties
        // This accessor conflicts with a field or function name in a parent class or interface.
        can_have_popup: boolean | any;
        get canHavePopup(): boolean;
        set canHavePopup(val: boolean);
        // This accessor conflicts with a field or function name in a parent class or interface.
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
         * Since 2.0.2
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
        get_area(area: Rectangle): void;
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
         * @param utime a #time_t
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

        connect<K extends keyof AnnotationTextMarkup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnnotationTextMarkup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnnotationTextMarkup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnnotationTextMarkup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnnotationTextMarkup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AnnotationTextMarkup.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_markup_type(): AnnotationTextMarkupType;
        set_markup_type(markup_type: AnnotationTextMarkupType | null): boolean;

        // Inherited properties
        // This accessor conflicts with a field or function name in a parent class or interface.
        can_have_popup: boolean | any;
        get canHavePopup(): boolean;
        set canHavePopup(val: boolean);
        // This accessor conflicts with a field or function name in a parent class or interface.
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
         * Since 2.0.2
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
        get_area(area: Rectangle): void;
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
         * @param utime a #time_t
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
            ctime: GObject.GType;
            data: any;
            description: string;
            mtime: GObject.GType;
            name: string;
            size: number;
        }
    }

    class Attachment extends GObject.Object {
        static $gtype: GObject.GType<Attachment>;

        // Properties

        set ctime(val: GObject.GType);
        set data(val: any);
        set description(val: string);
        set mtime(val: GObject.GType);
        set name(val: string);
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
            mtime: GLib.DateTime,
            ctime: GLib.DateTime,
            size: number,
            data?: any | null,
        ): Attachment;

        // Signals

        connect<K extends keyof Attachment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Attachment.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Attachment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Attachment.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Attachment.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Attachment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): GLib.Quark;

        // Methods

        get_creation_date(): GLib.DateTime;
        get_description(): string;
        get_mime_type(): string;
        get_modification_date(): GLib.DateTime;
        get_name(): string;
        open(screen: Gdk.Screen, timestamp: number): boolean;
        save(file: Gio.File): boolean;
    }

    namespace Document {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class Document extends GObject.Object {
        static $gtype: GObject.GType<Document>;

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
        iswebdocument: boolean;

        // Constructors

        constructor(properties?: Partial<Document.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Document.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Document.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Document.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Document.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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
         * If `document` is not %NULL, adds a #GtkFileFilter for `document'`s MIME type.
         *
         * If `document` is %NULL, adds a #GtkFileFilter for each document type that xreader
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
        static misc_get_page_border_size(page_width: number, page_height: number, border: Gtk.Border): void;
        static misc_get_pointer_position(widget: Gtk.Widget, x: number, y: number): void;
        static misc_get_screen_dpi(screen: Gdk.Screen, monitor: Gdk.Monitor): number;
        static misc_get_screen_dpi_at_window(window: Gtk.Window): number;
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
        get_modified(): boolean;
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
        set_modified(modified: boolean): void;
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

    namespace FormField {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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
        page: Page;
        changed: boolean;

        // Constructors

        constructor(properties?: Partial<FormField.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FormField.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormField.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FormField.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormField.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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

        partent: FormField;
        type: FormFieldButtonType;
        state: boolean;

        // Constructors

        constructor(properties?: Partial<FormFieldButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number, type: FormFieldButtonType): FormFieldButton;

        // Signals

        connect<K extends keyof FormFieldButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormFieldButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FormFieldButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormFieldButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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

        // Signals

        connect<K extends keyof FormFieldChoice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormFieldChoice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FormFieldChoice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormFieldChoice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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

        // Fields

        partent: FormField;

        // Constructors

        constructor(properties?: Partial<FormFieldSignature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number): FormFieldSignature;

        // Signals

        connect<K extends keyof FormFieldSignature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormFieldSignature.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FormFieldSignature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormFieldSignature.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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

        // Signals

        connect<K extends keyof FormFieldText.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormFieldText.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FormFieldText.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormFieldText.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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

        connect<K extends keyof Image.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Image.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Image.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Image.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_id(): number;
        get_page(): number;
        get_tmp_uri(): string;
        save_tmp(pixbuf: GdkPixbuf.Pixbuf): string;
    }

    namespace Layer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        connect<K extends keyof Layer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Layer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Layer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Layer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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

    class Link extends GObject.Object {
        static $gtype: GObject.GType<Link>;

        // Properties

        get action(): LinkAction;
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

        connect<K extends keyof Link.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Link.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Link.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Link.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Link.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Link.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_title(): string;
    }

    namespace LinkAction {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::dest': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::hide-list': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::params': (pspec: GObject.ParamSpec) => void;
            'notify::show-list': (pspec: GObject.ParamSpec) => void;
            'notify::toggle-list': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dest: LinkDest;
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

        get dest(): LinkDest;
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

        static new_named(name: string): LinkAction;

        static new_remote(dest: LinkDest, filename: string): LinkAction;

        // Signals

        connect<K extends keyof LinkAction.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LinkAction.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LinkAction.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LinkAction.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LinkAction.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LinkAction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        equal(b: LinkAction): boolean;
        get_action_type(): LinkActionType;
        get_filename(): string;
        get_name(): string;
        get_params(): string;
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

        // Signals

        connect<K extends keyof LinkDest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LinkDest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LinkDest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LinkDest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LinkDest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LinkDest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace Page {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        connect<K extends keyof Page.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Page.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Page.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Page.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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

        // Constructors

        constructor(properties?: Partial<RenderContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](page: Page, rotation: number, scale: number): RenderContext;

        // Signals

        connect<K extends keyof RenderContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RenderContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RenderContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RenderContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RenderContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RenderContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_page(page: Page): void;
        set_rotation(rotation: number): void;
        set_scale(scale: number): void;
    }

    namespace TransitionEffect {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::alignment': (pspec: GObject.ParamSpec) => void;
            'notify::angle': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::duration': (pspec: GObject.ParamSpec) => void;
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

        connect<K extends keyof TransitionEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TransitionEffect.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TransitionEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TransitionEffect.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TransitionEffect.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TransitionEffect.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    type AnnotationAttachmentClass = typeof AnnotationAttachment;
    type AnnotationClass = typeof Annotation;
    type AnnotationMarkupInterface = typeof AnnotationMarkup;
    type AnnotationTextClass = typeof AnnotationText;
    type AnnotationTextMarkupClass = typeof AnnotationTextMarkup;
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

    abstract class MappingList {
        static $gtype: GObject.GType<MappingList>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        get_data(x: number, y: number): any | null;
        get_page(): number;
        length(): number;
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
        get_rectangle(ev_rect: Rectangle): void;
        set_has_popup(has_popup: boolean): boolean;
        set_label(label: string): boolean;
        set_opacity(opacity: number): boolean;
        set_popup_is_open(is_open: boolean): boolean;
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

            vfunc_render_finished(pixbuf: GdkPixbuf.Pixbuf): void;
            vfunc_render_pixbuf(page: number, scale: number, rotation: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface AsyncRendererNamespace {
        $gtype: GObject.GType<AsyncRenderer>;
        prototype: AsyncRenderer;
    }
    interface AsyncRenderer extends GObject.Object, AsyncRenderer.Interface {
        // Methods

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

            vfunc_add_annotation(annot: Annotation, rect: Rectangle): void;
            vfunc_document_is_modified(): boolean;
            vfunc_remove_annotation(annot: Annotation): void;
            vfunc_save_annotation(annot: Annotation, mask: AnnotationsSaveMask): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentAnnotationsNamespace {
        $gtype: GObject.GType<DocumentAnnotations>;
        prototype: DocumentAnnotations;
    }
    interface DocumentAnnotations extends GObject.Object, DocumentAnnotations.Interface {
        // Methods

        add_annotation(annot: Annotation, rect: Rectangle): void;
        can_add_annotation(): boolean;
        can_remove_annotation(): boolean;
        document_is_modified(): boolean;
        remove_annotation(annot: Annotation): void;
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

            vfunc_has_attachments(): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentAttachmentsNamespace {
        $gtype: GObject.GType<DocumentAttachments>;
        prototype: DocumentAttachments;
    }
    interface DocumentAttachments extends GObject.Object, DocumentAttachments.Interface {
        // Methods

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

            vfunc_check_for_hits(page: Page, text: string, case_sensitive: boolean): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentFindNamespace {
        $gtype: GObject.GType<DocumentFind>;
        prototype: DocumentFind;
    }
    interface DocumentFind extends GObject.Object, DocumentFind.Interface {
        // Methods

        check_for_hits(page: Page, text: string, case_sensitive: boolean): number;
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

            vfunc_fill_model(model: Gtk.TreeModel): void;
            vfunc_get_progress(): number;
            vfunc_scan(n_pages: number): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentFontsNamespace {
        $gtype: GObject.GType<DocumentFonts>;
        prototype: DocumentFonts;
    }
    interface DocumentFonts extends GObject.Object, DocumentFonts.Interface {
        // Methods

        fill_model(model: Gtk.TreeModel): void;
        get_progress(): number;
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
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentFormsNamespace {
        $gtype: GObject.GType<DocumentForms>;
        prototype: DocumentForms;
    }
    interface DocumentForms extends GObject.Object, DocumentForms.Interface {
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
    }

    export const DocumentForms: DocumentFormsNamespace & {
        new (): DocumentForms; // This allows `obj instanceof DocumentForms`
    };

    namespace DocumentImages {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentImagesNamespace {
        $gtype: GObject.GType<DocumentImages>;
        prototype: DocumentImages;
    }
    interface DocumentImages extends GObject.Object {}

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

            vfunc_has_layers(): boolean;
            vfunc_hide_layer(layer: Layer): void;
            vfunc_layer_is_visible(layer: Layer): boolean;
            vfunc_show_layer(layer: Layer): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentLayersNamespace {
        $gtype: GObject.GType<DocumentLayers>;
        prototype: DocumentLayers;
    }
    interface DocumentLayers extends GObject.Object, DocumentLayers.Interface {
        // Methods

        has_layers(): boolean;
        hide_layer(layer: Layer): void;
        layer_is_visible(layer: Layer): boolean;
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

            vfunc_find_link_page(link_name: string): number;
            vfunc_has_document_links(): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentLinksNamespace {
        $gtype: GObject.GType<DocumentLinks>;
        prototype: DocumentLinks;
    }
    interface DocumentLinks extends GObject.Object, DocumentLinks.Interface {
        // Methods

        find_link_page(link_name: string): number;
        get_dest_page(dest: LinkDest): number;
        get_dest_page_label(dest: LinkDest): string;
        get_link_page(link: Link): number;
        get_link_page_label(link: Link): string;
        has_document_links(): boolean;
    }

    export const DocumentLinks: DocumentLinksNamespace & {
        new (): DocumentLinks; // This allows `obj instanceof DocumentLinks`
    };

    namespace DocumentPrint {
        /**
         * Interface for implementing DocumentPrint.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_print_page(page: Page, cr: cairo.Context): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentPrintNamespace {
        $gtype: GObject.GType<DocumentPrint>;
        prototype: DocumentPrint;
    }
    interface DocumentPrint extends GObject.Object, DocumentPrint.Interface {
        // Methods

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

            vfunc_has_document_security(): boolean;
            vfunc_set_password(password: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentSecurityNamespace {
        $gtype: GObject.GType<DocumentSecurity>;
        prototype: DocumentSecurity;
    }
    interface DocumentSecurity extends GObject.Object, DocumentSecurity.Interface {
        // Methods

        has_document_security(): boolean;
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

            vfunc_get_text(page: Page): string;
            vfunc_get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean;
            vfunc_get_text_mapping(page: Page): cairo.Region;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentTextNamespace {
        $gtype: GObject.GType<DocumentText>;
        prototype: DocumentText;
    }
    interface DocumentText extends GObject.Object, DocumentText.Interface {
        // Methods

        get_text(page: Page): string;
        get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean;
        get_text_mapping(page: Page): cairo.Region;
    }

    export const DocumentText: DocumentTextNamespace & {
        new (): DocumentText; // This allows `obj instanceof DocumentText`
    };

    namespace DocumentThumbnails {
        /**
         * Interface for implementing DocumentThumbnails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_get_dimensions(rc: RenderContext, width: number, height: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentThumbnailsNamespace {
        $gtype: GObject.GType<DocumentThumbnails>;
        prototype: DocumentThumbnails;
    }
    interface DocumentThumbnails extends GObject.Object, DocumentThumbnails.Interface {
        // Methods

        get_dimensions(rc: RenderContext, width: number, height: number): void;
    }

    export const DocumentThumbnails: DocumentThumbnailsNamespace & {
        new (): DocumentThumbnails; // This allows `obj instanceof DocumentThumbnails`
    };

    namespace DocumentTransition {
        /**
         * Interface for implementing DocumentTransition.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_get_page_duration(page: number): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DocumentTransitionNamespace {
        $gtype: GObject.GType<DocumentTransition>;
        prototype: DocumentTransition;
    }
    interface DocumentTransition extends GObject.Object, DocumentTransition.Interface {
        // Methods

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

            vfunc_begin(fc: FileExporterContext): void;
            vfunc_begin_page(): void;
            vfunc_do_page(rc: RenderContext): void;
            vfunc_end(): void;
            vfunc_end_page(): void;
            vfunc_get_capabilities(): FileExporterCapabilities;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface FileExporterNamespace {
        $gtype: GObject.GType<FileExporter>;
        prototype: FileExporter;
    }
    interface FileExporter extends GObject.Object, FileExporter.Interface {
        // Methods

        begin(fc: FileExporterContext): void;
        begin_page(): void;
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

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SelectionNamespace {
        $gtype: GObject.GType<Selection>;
        prototype: Selection;
    }
    interface Selection extends GObject.Object, Selection.Interface {
        // Methods

        get_selected_text(page: Page, style: SelectionStyle | null, points: Rectangle): string;
        get_selection_region(rc: RenderContext, style: SelectionStyle | null, points: Rectangle): cairo.Region;
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

export default XreaderDocument;

// END
