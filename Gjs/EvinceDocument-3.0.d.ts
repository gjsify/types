// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EvinceDocument-3.0
 */

import type * as Gjs from './Gjs';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

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
enum DocumentError {
    INVALID,
    UNSUPPORTED_CONTENT,
    ENCRYPTED,
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
/**
 * The major version number of the EV library
 * (e.g. in version 3.1.4 this is 3).
 */
const MAJOR_VERSION: number
/**
 * The minor version number of the EV library
 * (e.g. in version 3.1.4 this is 1).
 */
const MINOR_VERSION: number
function backends_manager_get_document(mime_type: string): Document
function backends_manager_get_document_module_name(document: Document): string
function document_error_quark(): GLib.Quark
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
 */
function file_compress(uri: string, type: CompressionType): string
/**
 * Performs a g_file_copy_attributes() with %G_FILE_COPY_ALL_METADATA
 * from `from` to `to`.
 * @param from the source URI
 * @param to the target URI
 */
function file_copy_metadata(from: string, to: string): boolean
function file_get_mime_type(uri: string, fast: boolean): string
function file_get_mime_type_from_fd(fd: number): string
function file_is_temp(file: Gio.File): boolean
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
 */
function file_uncompress(uri: string, type: CompressionType): string
function get_locale_dir(): string
/**
 * Initializes the evince document library, and binds the evince
 * gettext domain.
 * 
 * You must call this before calling any other function in the evince
 * document library.
 */
function init(): boolean
/**
 * Creates a temp directory in the evince temp directory.
 * @param tmpl a template string; must end in 'XXXXXX'
 */
function mkdtemp(tmpl: string): string
/**
 * Creates a temp file in the evince temp directory.
 * @param tmpl a template string; must contain 'XXXXXX', but not necessarily as a suffix
 * @param file_name a location to store the filename of the temp file
 */
function mkstemp(tmpl: string, file_name: string): number
/**
 * Creates a temp #GFile in the evince temp directory. See ev_mkstemp() for more information.
 * @param tmpl a template string; must contain 'XXXXXX', but not necessarily as a suffix
 */
function mkstemp_file(tmpl: string): Gio.File
function rect_cmp(a: Rectangle, b: Rectangle): number
/**
 * Checks whether evince should use the portal.
 */
function should_use_portal(): boolean
/**
 * Shuts the evince document library down.
 */
function shutdown(): void
function tmp_file_unlink(file: Gio.File): void
function tmp_filename_unlink(filename: string): void
function tmp_uri_unlink(uri: string): void
/**
 * Performs a g_file_copy() from `from` to `to`.
 * @param from the source URI
 * @param to the target URI
 */
function xfer_uri_simple(from: string, to: string): boolean
function xmp_parse(xmp: string, size: number, info: DocumentInfo): boolean
interface AnnotationMarkup_ConstructProps extends Annotation_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup

    can_have_popup?: boolean | null
    has_popup?: boolean | null
    label?: string | null
    opacity?: number | null
    popup_is_open?: boolean | null
    rectangle?: Rectangle | null
}

interface AnnotationMarkup extends Annotation {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup

    can_have_popup: boolean
    has_popup: boolean
    label: string
    opacity: number
    popup_is_open: boolean
    rectangle: Rectangle

    // Owm methods of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup

    get_label(): string
    get_opacity(): number
    get_popup_is_open(): boolean
    get_rectangle(ev_rect: Rectangle): void
    set_has_popup(has_popup: boolean): boolean
    set_label(label: string): boolean
    set_opacity(opacity: number): boolean
    set_popup_is_open(is_open: boolean): boolean
    set_rectangle(ev_rect: Rectangle): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup

    connect(sigName: "notify::can-have-popup", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-have-popup", ...args: any[]): void
    connect(sigName: "notify::has-popup", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-popup", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::popup-is-open", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-is-open", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: "notify::area", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotationMarkup extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup

    static name: string
    static $gtype: GObject.GType<AnnotationMarkup>

    // Constructors of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup

    constructor(config?: AnnotationMarkup_ConstructProps) 
    _init(config?: AnnotationMarkup_ConstructProps): void
}

interface AsyncRenderer_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `render-finished`
 */
interface AsyncRenderer_RenderFinishedSignalCallback {
    ($obj: AsyncRenderer, object: GdkPixbuf.Pixbuf): void
}

interface AsyncRenderer {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.AsyncRenderer

    render_pixbuf(page: number, scale: number, rotation: number): void

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.AsyncRenderer

    vfunc_render_finished(pixbuf: GdkPixbuf.Pixbuf): void
    vfunc_render_pixbuf(page: number, scale: number, rotation: number): void

    // Own signals of EvinceDocument-3.0.EvinceDocument.AsyncRenderer

    connect(sigName: "render-finished", callback: AsyncRenderer_RenderFinishedSignalCallback): number
    connect_after(sigName: "render-finished", callback: AsyncRenderer_RenderFinishedSignalCallback): number
    emit(sigName: "render-finished", object: GdkPixbuf.Pixbuf, ...args: any[]): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.AsyncRenderer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AsyncRenderer extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AsyncRenderer

    static name: string
    static $gtype: GObject.GType<AsyncRenderer>

    // Constructors of EvinceDocument-3.0.EvinceDocument.AsyncRenderer

    constructor(config?: AsyncRenderer_ConstructProps) 
    _init(config?: AsyncRenderer_ConstructProps): void
}

interface DocumentAnnotations_ConstructProps extends GObject.Object_ConstructProps {
}

interface DocumentAnnotations {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentAnnotations

    add_annotation(annot: Annotation, rect: Rectangle): void
    can_add_annotation(): boolean
    can_remove_annotation(): boolean
    document_is_modified(): boolean
    get_annotations(page: Page): MappingList
    over_markup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup
    remove_annotation(annot: Annotation): void
    save_annotation(annot: Annotation, mask: AnnotationsSaveMask): void

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentAnnotations

    vfunc_add_annotation(annot: Annotation, rect: Rectangle): void
    vfunc_document_is_modified(): boolean
    vfunc_get_annotations(page: Page): MappingList
    vfunc_over_markup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup
    vfunc_remove_annotation(annot: Annotation): void
    vfunc_save_annotation(annot: Annotation, mask: AnnotationsSaveMask): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentAnnotations

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentAnnotations extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentAnnotations

    static name: string
    static $gtype: GObject.GType<DocumentAnnotations>

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentAnnotations

    constructor(config?: DocumentAnnotations_ConstructProps) 
    _init(config?: DocumentAnnotations_ConstructProps): void
}

interface DocumentAttachments_ConstructProps extends GObject.Object_ConstructProps {
}

interface DocumentAttachments {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentAttachments

    get_attachments(): Attachment[]
    has_attachments(): boolean

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentAttachments

    vfunc_get_attachments(): Attachment[]
    vfunc_has_attachments(): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentAttachments

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentAttachments extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentAttachments

    static name: string
    static $gtype: GObject.GType<DocumentAttachments>

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentAttachments

    constructor(config?: DocumentAttachments_ConstructProps) 
    _init(config?: DocumentAttachments_ConstructProps): void
}

interface DocumentFind_ConstructProps extends GObject.Object_ConstructProps {
}

interface DocumentFind {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentFind

    find_text(page: Page, text: string, case_sensitive: boolean): Rectangle[]
    find_text_with_options(page: Page, text: string, options: FindOptions): Rectangle[]
    get_supported_options(): FindOptions

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentFind

    vfunc_find_text(page: Page, text: string, case_sensitive: boolean): Rectangle[]
    vfunc_find_text_with_options(page: Page, text: string, options: FindOptions): Rectangle[]
    vfunc_get_supported_options(): FindOptions

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentFind

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentFind extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentFind

    static name: string
    static $gtype: GObject.GType<DocumentFind>

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentFind

    constructor(config?: DocumentFind_ConstructProps) 
    _init(config?: DocumentFind_ConstructProps): void
}

interface DocumentFonts_ConstructProps extends GObject.Object_ConstructProps {
}

interface DocumentFonts {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentFonts

    fill_model(model: Gtk.TreeModel): void
    get_fonts_summary(): string
    get_progress(): number
    scan(n_pages: number): boolean

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentFonts

    vfunc_fill_model(model: Gtk.TreeModel): void
    vfunc_get_fonts_summary(): string
    vfunc_get_progress(): number
    vfunc_scan(n_pages: number): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentFonts

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentFonts extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentFonts

    static name: string
    static $gtype: GObject.GType<DocumentFonts>

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentFonts

    constructor(config?: DocumentFonts_ConstructProps) 
    _init(config?: DocumentFonts_ConstructProps): void
}

interface DocumentForms_ConstructProps extends GObject.Object_ConstructProps {
}

interface DocumentForms {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentForms

    document_is_modified(): boolean
    form_field_button_get_state(field: FormField): boolean
    form_field_button_set_state(field: FormField, state: boolean): void
    form_field_choice_get_item(field: FormField, index: number): string
    form_field_choice_get_n_items(field: FormField): number
    form_field_choice_get_text(field: FormField): string
    form_field_choice_is_item_selected(field: FormField, index: number): boolean
    form_field_choice_select_item(field: FormField, index: number): void
    form_field_choice_set_text(field: FormField, text: string): void
    form_field_choice_toggle_item(field: FormField, index: number): void
    form_field_choice_unselect_all(field: FormField): void
    form_field_text_get_text(field: FormField): string
    form_field_text_set_text(field: FormField, text: string): void
    get_form_fields(page: Page): MappingList
    reset_form(action: LinkAction): void

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentForms

    vfunc_document_is_modified(): boolean
    vfunc_form_field_button_get_state(field: FormField): boolean
    vfunc_form_field_button_set_state(field: FormField, state: boolean): void
    vfunc_form_field_choice_get_item(field: FormField, index: number): string
    vfunc_form_field_choice_get_n_items(field: FormField): number
    vfunc_form_field_choice_get_text(field: FormField): string
    vfunc_form_field_choice_is_item_selected(field: FormField, index: number): boolean
    vfunc_form_field_choice_select_item(field: FormField, index: number): void
    vfunc_form_field_choice_set_text(field: FormField, text: string): void
    vfunc_form_field_choice_toggle_item(field: FormField, index: number): void
    vfunc_form_field_choice_unselect_all(field: FormField): void
    vfunc_form_field_text_get_text(field: FormField): string
    vfunc_form_field_text_set_text(field: FormField, text: string): void
    vfunc_get_form_fields(page: Page): MappingList
    vfunc_reset_form(action: LinkAction): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentForms

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentForms extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentForms

    static name: string
    static $gtype: GObject.GType<DocumentForms>

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentForms

    constructor(config?: DocumentForms_ConstructProps) 
    _init(config?: DocumentForms_ConstructProps): void
}

interface DocumentImages_ConstructProps extends GObject.Object_ConstructProps {
}

interface DocumentImages {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentImages

    get_image(image: Image): GdkPixbuf.Pixbuf
    get_image_mapping(page: Page): MappingList

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentImages

    vfunc_get_image(image: Image): GdkPixbuf.Pixbuf
    vfunc_get_image_mapping(page: Page): MappingList

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentImages

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentImages extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentImages

    static name: string
    static $gtype: GObject.GType<DocumentImages>

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentImages

    constructor(config?: DocumentImages_ConstructProps) 
    _init(config?: DocumentImages_ConstructProps): void
}

interface DocumentLayers_ConstructProps extends GObject.Object_ConstructProps {
}

interface DocumentLayers {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentLayers

    get_layers(): Gtk.TreeModel
    has_layers(): boolean
    hide_layer(layer: Layer): void
    layer_is_visible(layer: Layer): boolean
    show_layer(layer: Layer): void

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentLayers

    vfunc_get_layers(): Gtk.TreeModel
    vfunc_has_layers(): boolean
    vfunc_hide_layer(layer: Layer): void
    vfunc_layer_is_visible(layer: Layer): boolean
    vfunc_show_layer(layer: Layer): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentLayers

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentLayers extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentLayers

    static name: string
    static $gtype: GObject.GType<DocumentLayers>

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentLayers

    constructor(config?: DocumentLayers_ConstructProps) 
    _init(config?: DocumentLayers_ConstructProps): void
}

interface DocumentLinks_ConstructProps extends GObject.Object_ConstructProps {
}

interface DocumentLinks {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentLinks

    find_link_dest(link_name: string): LinkDest
    find_link_page(link_name: string): number
    get_dest_page(dest: LinkDest): number
    get_dest_page_label(dest: LinkDest): string
    get_link_page(link: Link): number
    get_link_page_label(link: Link): string
    get_links(page: Page): MappingList
    get_links_model(): Gtk.TreeModel
    has_document_links(): boolean

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentLinks

    vfunc_find_link_dest(link_name: string): LinkDest
    vfunc_find_link_page(link_name: string): number
    vfunc_get_links(page: Page): MappingList
    vfunc_get_links_model(): Gtk.TreeModel
    vfunc_has_document_links(): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentLinks

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentLinks extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentLinks

    static name: string
    static $gtype: GObject.GType<DocumentLinks>

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentLinks

    constructor(config?: DocumentLinks_ConstructProps) 
    _init(config?: DocumentLinks_ConstructProps): void
}

interface DocumentMedia_ConstructProps extends GObject.Object_ConstructProps {
}

interface DocumentMedia {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentMedia

    get_media_mapping(page: Page): MappingList

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentMedia

    vfunc_get_media_mapping(page: Page): MappingList

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentMedia

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentMedia extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentMedia

    static name: string
    static $gtype: GObject.GType<DocumentMedia>

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentMedia

    constructor(config?: DocumentMedia_ConstructProps) 
    _init(config?: DocumentMedia_ConstructProps): void
}

interface DocumentPrint_ConstructProps extends GObject.Object_ConstructProps {
}

interface DocumentPrint {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentPrint

    print_page(page: Page, cr: cairo.Context): void

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentPrint

    vfunc_print_page(page: Page, cr: cairo.Context): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentPrint

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentPrint extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentPrint

    static name: string
    static $gtype: GObject.GType<DocumentPrint>

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentPrint

    constructor(config?: DocumentPrint_ConstructProps) 
    _init(config?: DocumentPrint_ConstructProps): void
}

interface DocumentSecurity_ConstructProps extends GObject.Object_ConstructProps {
}

interface DocumentSecurity {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentSecurity

    has_document_security(): boolean
    set_password(password: string): void

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentSecurity

    vfunc_has_document_security(): boolean
    vfunc_set_password(password: string): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentSecurity

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentSecurity extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentSecurity

    static name: string
    static $gtype: GObject.GType<DocumentSecurity>

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentSecurity

    constructor(config?: DocumentSecurity_ConstructProps) 
    _init(config?: DocumentSecurity_ConstructProps): void
}

interface DocumentText_ConstructProps extends GObject.Object_ConstructProps {
}

interface DocumentText {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentText

    get_text(page: Page): string
    /**
     * FIXME
     * @param page a #EvPage
     */
    get_text_attrs(page: Page): Pango.AttrList
    get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean
    get_text_mapping(page: Page): cairo.Region

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentText

    vfunc_get_text(page: Page): string
    /**
     * FIXME
     * @virtual 
     * @param page a #EvPage
     */
    vfunc_get_text_attrs(page: Page): Pango.AttrList
    vfunc_get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean
    vfunc_get_text_mapping(page: Page): cairo.Region

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentText

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentText extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentText

    static name: string
    static $gtype: GObject.GType<DocumentText>

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentText

    constructor(config?: DocumentText_ConstructProps) 
    _init(config?: DocumentText_ConstructProps): void
}

interface DocumentTransition_ConstructProps extends GObject.Object_ConstructProps {
}

interface DocumentTransition {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentTransition

    get_effect(page: number): TransitionEffect
    get_page_duration(page: number): number

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentTransition

    vfunc_get_effect(page: number): TransitionEffect
    vfunc_get_page_duration(page: number): number

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentTransition

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentTransition extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentTransition

    static name: string
    static $gtype: GObject.GType<DocumentTransition>

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentTransition

    constructor(config?: DocumentTransition_ConstructProps) 
    _init(config?: DocumentTransition_ConstructProps): void
}

interface FileExporter_ConstructProps extends GObject.Object_ConstructProps {
}

interface FileExporter {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.FileExporter

    begin(fc: FileExporterContext): void
    begin_page(): void
    do_page(rc: RenderContext): void
    end(): void
    end_page(): void
    get_capabilities(): FileExporterCapabilities

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.FileExporter

    vfunc_begin(fc: FileExporterContext): void
    vfunc_begin_page(): void
    vfunc_do_page(rc: RenderContext): void
    vfunc_end(): void
    vfunc_end_page(): void
    vfunc_get_capabilities(): FileExporterCapabilities

    // Class property signals of EvinceDocument-3.0.EvinceDocument.FileExporter

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileExporter extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FileExporter

    static name: string
    static $gtype: GObject.GType<FileExporter>

    // Constructors of EvinceDocument-3.0.EvinceDocument.FileExporter

    constructor(config?: FileExporter_ConstructProps) 
    _init(config?: FileExporter_ConstructProps): void
}

interface Selection_ConstructProps extends GObject.Object_ConstructProps {
}

interface Selection {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Selection

    get_selected_text(page: Page, style: SelectionStyle, points: Rectangle): string
    get_selection_region(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region
    render_selection(rc: RenderContext, surface: cairo.Surface, points: Rectangle, old_points: Rectangle, style: SelectionStyle, text: Gdk.Color, base: Gdk.Color): void

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.Selection

    vfunc_get_selected_text(page: Page, style: SelectionStyle, points: Rectangle): string
    vfunc_get_selection_region(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region
    vfunc_render_selection(rc: RenderContext, surface: cairo.Surface, points: Rectangle, old_points: Rectangle, style: SelectionStyle, text: Gdk.Color, base: Gdk.Color): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Selection

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Selection extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Selection

    static name: string
    static $gtype: GObject.GType<Selection>

    // Constructors of EvinceDocument-3.0.EvinceDocument.Selection

    constructor(config?: Selection_ConstructProps) 
    _init(config?: Selection_ConstructProps): void
}

interface Annotation_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of EvinceDocument-3.0.EvinceDocument.Annotation

    /**
     * The area of the page where the annotation is placed.
     * 
     * Since 3.18
     */
    area?: Rectangle | null
    /**
     * The colour of the annotation as a #GdkColor.
     */
    color?: object | null
    contents?: string | null
    modified?: string | null
    name?: string | null
    page?: Page | null
    /**
     * The colour of the annotation as a #GdkRGBA.
     */
    rgba?: Gdk.RGBA | null
}

interface Annotation {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Annotation

    /**
     * The area of the page where the annotation is placed.
     * 
     * Since 3.18
     */
    area: Rectangle
    /**
     * The colour of the annotation as a #GdkColor.
     */
    color: object
    contents: string
    modified: string
    name: string
    readonly page: Page
    /**
     * The colour of the annotation as a #GdkRGBA.
     */
    rgba: Gdk.RGBA

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Annotation

    /**
     * Compare `annot` and `other`.
     * @param other another #EvAnnotation
     */
    equal(other: Annotation): boolean
    get_annotation_type(): AnnotationType
    get_area(area: Rectangle): void
    /**
     * Get the color of `annot`.
     */
    get_color(): /* color */ Gdk.Color
    /**
     * Get the contents of `annot`. The contents of
     * `annot` is the text that is displayed in the annotation, or an
     * alternate description of the annotation's content for non-text annotations
     */
    get_contents(): string
    /**
     * Get the last modification date of `annot`.
     */
    get_modified(): string
    /**
     * Get the name of `annot`. The name of the annotation is a string
     * that uniquely indenftifies `annot` amongs all the annotations
     * in the same page.
     */
    get_name(): string
    /**
     * Get the page where `annot` appears.
     */
    get_page(): Page
    /**
     * Get the index of the page where `annot` appears. Note that the index
     * is 0 based.
     */
    get_page_index(): number
    /**
     * Gets the color of `annot`.
     */
    get_rgba(): /* rgba */ Gdk.RGBA
    /**
     * Set the area of the annotation to `area`.
     * @param area a #EvRectangle
     */
    set_area(area: Rectangle): boolean
    /**
     * Set the color of the annotation to `color`. You can monitor
     * changes to the annotation's color by connecting to
     * notify::color signal on `annot`.
     * @param color a #GdkColor
     */
    set_color(color: Gdk.Color): boolean
    /**
     * Set the contents of `annot`. You can monitor
     * changes in the annotation's  contents by connecting to
     * notify::contents signal of `annot`.
     * @param contents 
     */
    set_contents(contents: string): boolean
    /**
     * Set the last modification date of `annot` to `modified`. To
     * set the last modification date using a #time_t, use
     * ev_annotation_set_modified_from_time_t() instead. You can monitor
     * changes to the last modification date by connecting to the
     * notify::modified signal on `annot`.
     * @param modified string with the last modification date.
     */
    set_modified(modified: string): boolean
    /**
     * Set the last modification date of `annot` to `utime`.  You can
     * monitor changes to the last modification date by connecting to the
     * notify::modified sinal on `annot`.
     * For the time-format used, see ev_document_misc_format_date().
     * @param utime a #GTime
     */
    set_modified_from_time(utime: GLib.Time): boolean
    /**
     * Set the last modification date of `annot` to `utime`.  You can
     * monitor changes to the last modification date by connecting to the
     * notify::modified sinal on `annot`.
     * For the time-format used, see ev_document_misc_format_datetime().
     * @param utime a #time_t
     */
    set_modified_from_time_t(utime: number): boolean
    /**
     * Set the name of `annot`.
     * You can monitor changes of the annotation name by connecting
     * to the notify::name signal on `annot`.
     * @param name 
     */
    set_name(name: string): boolean
    /**
     * Set the color of the annotation to `rgba`.
     * @param rgba a #GdkRGBA
     */
    set_rgba(rgba: Gdk.RGBA): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Annotation

    connect(sigName: "notify::area", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Annotation extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Annotation

    static name: string
    static $gtype: GObject.GType<Annotation>

    // Constructors of EvinceDocument-3.0.EvinceDocument.Annotation

    constructor(config?: Annotation_ConstructProps) 
    _init(config?: Annotation_ConstructProps): void
}

interface AnnotationAttachment_ConstructProps extends AnnotationMarkup_ConstructProps, Annotation_ConstructProps {

    // Own constructor properties of EvinceDocument-3.0.EvinceDocument.AnnotationAttachment

    attachment?: Attachment | null
}

interface AnnotationAttachment extends AnnotationMarkup {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationAttachment

    attachment: Attachment

    // Owm methods of EvinceDocument-3.0.EvinceDocument.AnnotationAttachment

    get_attachment(): Attachment
    set_attachment(attachment: Attachment): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.AnnotationAttachment

    connect(sigName: "notify::attachment", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attachment", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attachment", ...args: any[]): void
    connect(sigName: "notify::area", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: "notify::can-have-popup", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-have-popup", ...args: any[]): void
    connect(sigName: "notify::has-popup", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-popup", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::popup-is-open", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-is-open", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotationAttachment extends Annotation {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationAttachment

    static name: string
    static $gtype: GObject.GType<AnnotationAttachment>

    // Constructors of EvinceDocument-3.0.EvinceDocument.AnnotationAttachment

    constructor(config?: AnnotationAttachment_ConstructProps) 
    constructor(page: Page, attachment: Attachment) 
    static new(page: Page, attachment: Attachment): AnnotationAttachment
    _init(config?: AnnotationAttachment_ConstructProps): void
}

interface AnnotationText_ConstructProps extends AnnotationMarkup_ConstructProps, Annotation_ConstructProps {

    // Own constructor properties of EvinceDocument-3.0.EvinceDocument.AnnotationText

    icon?: AnnotationTextIcon | null
    is_open?: boolean | null
}

interface AnnotationText extends AnnotationMarkup {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationText

    icon: AnnotationTextIcon
    is_open: boolean

    // Owm methods of EvinceDocument-3.0.EvinceDocument.AnnotationText

    get_icon(): AnnotationTextIcon
    get_is_open(): boolean
    set_icon(icon: AnnotationTextIcon): boolean
    set_is_open(is_open: boolean): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.AnnotationText

    connect(sigName: "notify::icon", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::is-open", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-open", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-open", ...args: any[]): void
    connect(sigName: "notify::area", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: "notify::can-have-popup", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-have-popup", ...args: any[]): void
    connect(sigName: "notify::has-popup", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-popup", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::popup-is-open", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-is-open", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotationText extends Annotation {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationText

    static name: string
    static $gtype: GObject.GType<AnnotationText>

    // Constructors of EvinceDocument-3.0.EvinceDocument.AnnotationText

    constructor(config?: AnnotationText_ConstructProps) 
    constructor(page: Page) 
    static new(page: Page): AnnotationText
    _init(config?: AnnotationText_ConstructProps): void
}

interface AnnotationTextMarkup_ConstructProps extends AnnotationMarkup_ConstructProps, Annotation_ConstructProps {

    // Own constructor properties of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup

    type?: AnnotationTextMarkupType | null
}

interface AnnotationTextMarkup extends AnnotationMarkup {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup

    type: AnnotationTextMarkupType

    // Owm methods of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup

    get_markup_type(): AnnotationTextMarkupType
    set_markup_type(markup_type: AnnotationTextMarkupType): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup

    connect(sigName: "notify::type", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::area", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: "notify::can-have-popup", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-have-popup", ...args: any[]): void
    connect(sigName: "notify::has-popup", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-popup", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::popup-is-open", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-is-open", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AnnotationTextMarkup extends Annotation {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup

    static name: string
    static $gtype: GObject.GType<AnnotationTextMarkup>

    // Constructors of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup

    constructor(config?: AnnotationTextMarkup_ConstructProps) 
    static highlight_new(page: Page): AnnotationTextMarkup
    static squiggly_new(page: Page): AnnotationTextMarkup
    static strike_out_new(page: Page): AnnotationTextMarkup
    static underline_new(page: Page): AnnotationTextMarkup
    _init(config?: AnnotationTextMarkup_ConstructProps): void
}

interface Attachment_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of EvinceDocument-3.0.EvinceDocument.Attachment

    ctime?: number | null
    data?: object | null
    description?: string | null
    mtime?: number | null
    name?: string | null
    size?: number | null
}

interface Attachment {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Attachment

    readonly ctime: number
    readonly data: object
    readonly description: string
    readonly mtime: number
    readonly name: string
    readonly size: number

    // Own fields of EvinceDocument-3.0.EvinceDocument.Attachment

    base_instance: GObject.Object

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Attachment

    get_creation_date(): GLib.Time
    get_description(): string
    get_mime_type(): string
    get_modification_date(): GLib.Time
    get_name(): string
    open(screen: Gdk.Screen, timestamp: number): boolean
    save(file: Gio.File): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Attachment

    connect(sigName: "notify::ctime", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ctime", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ctime", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::mtime", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtime", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mtime", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Attachment extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Attachment

    static name: string
    static $gtype: GObject.GType<Attachment>

    // Constructors of EvinceDocument-3.0.EvinceDocument.Attachment

    constructor(config?: Attachment_ConstructProps) 
    constructor(name: string, description: string, mtime: GLib.Time, ctime: GLib.Time, size: number, data: object | null) 
    static new(name: string, description: string, mtime: GLib.Time, ctime: GLib.Time, size: number, data: object | null): Attachment
    _init(config?: Attachment_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Document_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of EvinceDocument-3.0.EvinceDocument.Document

    modified?: boolean | null
}

interface Document {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Document

    modified: boolean

    // Own fields of EvinceDocument-3.0.EvinceDocument.Document

    base: GObject.Object
    priv: DocumentPrivate

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Document

    check_dimensions(): boolean
    find_page_by_label(page_label: string, page_index: number): boolean
    get_backend_info(info: DocumentBackendInfo): boolean
    /**
     * Returns the #EvDocumentInfo for the document.
     */
    get_info(): DocumentInfo
    get_max_label_len(): number
    get_max_page_size(width: number, height: number): void
    get_min_page_size(width: number, height: number): void
    get_modified(): boolean
    get_n_pages(): number
    get_page(index: number): Page
    get_page_label(page_index: number): string
    get_page_size(page_index: number): [ /* width */ number, /* height */ number ]
    get_size(): number
    get_thumbnail(rc: RenderContext): GdkPixbuf.Pixbuf
    get_thumbnail_surface(rc: RenderContext): cairo.Surface
    get_title(): string
    get_uri(): string
    has_synctex(): boolean
    has_text_page_labels(): boolean
    is_page_size_uniform(): boolean
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
    load(uri: string): boolean
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
    load_fd(fd: number, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): boolean
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
     */
    load_full(uri: string, flags: DocumentLoadFlags): boolean
    /**
     * Synchronously loads the document from `file`.
     * See ev_document_load() for more information.
     * @param file a #GFile
     * @param flags flags from #EvDocumentLoadFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    load_gfile(file: Gio.File, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronously loads the document from `stream`.
     * See ev_document_load() for more information.
     * @param stream a #GInputStream
     * @param flags flags from #EvDocumentLoadFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    load_stream(stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): boolean
    render(rc: RenderContext): cairo.Surface
    /**
     * Saves `document` to `uri`.
     * @param uri the target URI
     */
    save(uri: string): boolean
    /**
     * Set the `document` modification state as `modified`.
     * @param modified a boolean value to set the document as modified or not.
     */
    set_modified(modified: boolean): void
    /**
     * Peforms a Synctex backward search to obtain the TeX input file, line and
     * (possibly) column  corresponding to the  position (`x,``y)` (in 72dpi
     * coordinates) in the  `page` of `document`.
     * @param page_index the target page
     * @param x X coordinate
     * @param y Y coordinate
     */
    synctex_backward_search(page_index: number, x: number, y: number): SourceLink

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.Document

    vfunc_get_backend_info(info: DocumentBackendInfo): boolean
    /**
     * Returns the #EvDocumentInfo for the document.
     * @virtual 
     */
    vfunc_get_info(): DocumentInfo
    vfunc_get_n_pages(): number
    vfunc_get_page(index: number): Page
    vfunc_get_page_label(page: Page): string
    vfunc_get_page_size(page: Page): [ /* width */ number, /* height */ number ]
    vfunc_get_thumbnail(rc: RenderContext): GdkPixbuf.Pixbuf
    vfunc_get_thumbnail_surface(rc: RenderContext): cairo.Surface
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
     * @virtual 
     * @param uri the document's URI
     */
    vfunc_load(uri: string): boolean
    /**
     * Synchronously loads the document from `fd,` which must refer to
     * a regular file.
     * 
     * Note that this function takes ownership of `fd;` you must not ever
     * operate on it again. It will be closed automatically if the document
     * is destroyed, or if this function returns %NULL.
     * 
     * See ev_document_load() for more information.
     * @virtual 
     * @param fd a file descriptor
     * @param flags flags from #EvDocumentLoadFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    vfunc_load_fd(fd: number, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronously loads the document from `file`.
     * See ev_document_load() for more information.
     * @virtual 
     * @param file a #GFile
     * @param flags flags from #EvDocumentLoadFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    vfunc_load_gfile(file: Gio.File, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronously loads the document from `stream`.
     * See ev_document_load() for more information.
     * @virtual 
     * @param stream a #GInputStream
     * @param flags flags from #EvDocumentLoadFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    vfunc_load_stream(stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): boolean
    vfunc_render(rc: RenderContext): cairo.Surface
    /**
     * Saves `document` to `uri`.
     * @virtual 
     * @param uri the target URI
     */
    vfunc_save(uri: string): boolean
    vfunc_support_synctex(): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Document

    connect(sigName: "notify::modified", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Document extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Document

    static name: string
    static $gtype: GObject.GType<Document>

    // Constructors of EvinceDocument-3.0.EvinceDocument.Document

    constructor(config?: Document_ConstructProps) 
    _init(config?: Document_ConstructProps): void
    static doc_mutex_lock(): void
    static doc_mutex_trylock(): boolean
    static doc_mutex_unlock(): void
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
    static factory_add_filters(chooser: Gtk.Widget, document: Document): void
    /**
     * Creates a #EvDocument for the document at `uri;` or, if no backend handling
     * the document's type is found, or an error occurred on opening the document,
     * returns %NULL and fills in `error`.
     * If the document is encrypted, it is returned but also `error` is set to
     * %EV_DOCUMENT_ERROR_ENCRYPTED.
     * @param uri an URI
     */
    static factory_get_document(uri: string): Document
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
    static factory_get_document_for_fd(fd: number, mime_type: string, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): Document
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
    static factory_get_document_for_gfile(file: Gio.File, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): Document
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
    static factory_get_document_for_stream(stream: Gio.InputStream, mime_type: string | null, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): Document
    /**
     * Creates a #EvDocument for the document at `uri;` or, if no backend handling
     * the document's type is found, or an error occurred on opening the document,
     * returns %NULL and fills in `error`.
     * If the document is encrypted, it is returned but also `error` is set to
     * %EV_DOCUMENT_ERROR_ENCRYPTED.
     * @param uri an URI
     * @param flags flags from #EvDocumentLoadFlags
     */
    static factory_get_document_full(uri: string, flags: DocumentLoadFlags): Document
    static fc_mutex_lock(): void
    static fc_mutex_trylock(): boolean
    static fc_mutex_unlock(): void
    static misc_format_date(utime: GLib.Time): string
    /**
     * Determine the preferred date and time representation for the current locale
     * for `dt`.
     * @param dt a #GDateTime
     */
    static misc_format_datetime(dt: GLib.DateTime): string
    static misc_get_loading_thumbnail(width: number, height: number, inverted_colors: boolean): GdkPixbuf.Pixbuf
    static misc_get_page_border_size(page_width: number, page_height: number, border: Gtk.Border): void
    /**
     * Get the pointer's x and y position relative to `widget`.
     * @param widget a #GtkWidget
     */
    static misc_get_pointer_position(widget: Gtk.Widget): [ /* x */ number, /* y */ number ]
    static misc_get_screen_dpi(screen: Gdk.Screen): number
    static misc_get_thumbnail_frame(width: number, height: number, source_pixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf
    /**
     * Returns sensible guess for DPI of monitor on which given widget has been
     * realized. If HiDPI display, use 192, else 96.
     * Returns 96 as fallback value.
     * @param widget a #GtkWidget
     */
    static misc_get_widget_dpi(widget: Gtk.Widget): number
    static misc_invert_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    static misc_invert_surface(surface: cairo.Surface): void
    static misc_paint_one_page(cr: cairo.Context, widget: Gtk.Widget, area: Gdk.Rectangle, border: Gtk.Border, highlight: boolean, inverted_colors: boolean): void
    static misc_pixbuf_from_surface(surface: cairo.Surface): GdkPixbuf.Pixbuf
    static misc_render_loading_thumbnail(widget: Gtk.Widget, width: number, height: number, inverted_colors: boolean): GdkPixbuf.Pixbuf
    static misc_render_loading_thumbnail_surface(widget: Gtk.Widget, width: number, height: number, inverted_colors: boolean): cairo.Surface
    static misc_render_thumbnail_surface_with_frame(widget: Gtk.Widget, source_surface: cairo.Surface, width: number, height: number): cairo.Surface
    static misc_render_thumbnail_with_frame(widget: Gtk.Widget, source_pixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf
    static misc_surface_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): cairo.Surface
    static misc_surface_rotate_and_scale(surface: cairo.Surface, dest_width: number, dest_height: number, dest_rotation: number): cairo.Surface
}

interface FormField_ConstructProps extends GObject.Object_ConstructProps {
}

interface FormField {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormField

    parent: GObject.Object
    id: number
    is_read_only: boolean
    font_size: number
    activation_link: Link
    page: Page
    changed: boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.FormField

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FormField extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormField

    static name: string
    static $gtype: GObject.GType<FormField>

    // Constructors of EvinceDocument-3.0.EvinceDocument.FormField

    constructor(config?: FormField_ConstructProps) 
    _init(config?: FormField_ConstructProps): void
}

interface FormFieldButton_ConstructProps extends FormField_ConstructProps {
}

interface FormFieldButton {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldButton

    parent: FormField
    type: FormFieldButtonType
    state: boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.FormFieldButton

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FormFieldButton extends FormField {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldButton

    static name: string
    static $gtype: GObject.GType<FormFieldButton>

    // Constructors of EvinceDocument-3.0.EvinceDocument.FormFieldButton

    constructor(config?: FormFieldButton_ConstructProps) 
    constructor(id: number, type: FormFieldButtonType) 
    static new(id: number, type: FormFieldButtonType): FormFieldButton
    _init(config?: FormFieldButton_ConstructProps): void
}

interface FormFieldChoice_ConstructProps extends FormField_ConstructProps {
}

interface FormFieldChoice {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldChoice

    parent: FormField
    type: FormFieldChoiceType
    multi_select: boolean
    is_editable: boolean
    do_spell_check: boolean
    commit_on_sel_change: boolean
    selected_items: object[]
    text: string

    // Class property signals of EvinceDocument-3.0.EvinceDocument.FormFieldChoice

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FormFieldChoice extends FormField {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldChoice

    static name: string
    static $gtype: GObject.GType<FormFieldChoice>

    // Constructors of EvinceDocument-3.0.EvinceDocument.FormFieldChoice

    constructor(config?: FormFieldChoice_ConstructProps) 
    constructor(id: number, type: FormFieldChoiceType) 
    static new(id: number, type: FormFieldChoiceType): FormFieldChoice
    _init(config?: FormFieldChoice_ConstructProps): void
}

interface FormFieldSignature_ConstructProps extends FormField_ConstructProps {
}

interface FormFieldSignature {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldSignature

    parent: FormField

    // Class property signals of EvinceDocument-3.0.EvinceDocument.FormFieldSignature

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FormFieldSignature extends FormField {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldSignature

    static name: string
    static $gtype: GObject.GType<FormFieldSignature>

    // Constructors of EvinceDocument-3.0.EvinceDocument.FormFieldSignature

    constructor(config?: FormFieldSignature_ConstructProps) 
    constructor(id: number) 
    static new(id: number): FormFieldSignature
    _init(config?: FormFieldSignature_ConstructProps): void
}

interface FormFieldText_ConstructProps extends FormField_ConstructProps {
}

interface FormFieldText {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldText

    parent: FormField
    type: FormFieldTextType
    do_spell_check: boolean
    do_scroll: boolean
    comb: boolean
    is_rich_text: boolean
    is_password: boolean
    max_len: number
    text: string

    // Class property signals of EvinceDocument-3.0.EvinceDocument.FormFieldText

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FormFieldText extends FormField {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldText

    static name: string
    static $gtype: GObject.GType<FormFieldText>

    // Constructors of EvinceDocument-3.0.EvinceDocument.FormFieldText

    constructor(config?: FormFieldText_ConstructProps) 
    constructor(id: number, type: FormFieldTextType) 
    static new(id: number, type: FormFieldTextType): FormFieldText
    _init(config?: FormFieldText_ConstructProps): void
}

interface Image_ConstructProps extends GObject.Object_ConstructProps {
}

interface Image {

    // Own fields of EvinceDocument-3.0.EvinceDocument.Image

    base_instance: GObject.Object
    priv: ImagePrivate

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Image

    get_id(): number
    get_page(): number
    get_pixbuf(): GdkPixbuf.Pixbuf
    get_tmp_uri(): string
    save_tmp(pixbuf: GdkPixbuf.Pixbuf): string

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Image

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Image extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Image

    static name: string
    static $gtype: GObject.GType<Image>

    // Constructors of EvinceDocument-3.0.EvinceDocument.Image

    constructor(config?: Image_ConstructProps) 
    constructor(page: number, img_id: number) 
    static new(page: number, img_id: number): Image
    static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Image
    _init(config?: Image_ConstructProps): void
}

interface Layer_ConstructProps extends GObject.Object_ConstructProps {
}

interface Layer {

    // Own fields of EvinceDocument-3.0.EvinceDocument.Layer

    base_instance: GObject.Object
    priv: LayerPrivate

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Layer

    get_rb_group(): number
    is_parent(): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Layer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Layer extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Layer

    static name: string
    static $gtype: GObject.GType<Layer>

    // Constructors of EvinceDocument-3.0.EvinceDocument.Layer

    constructor(config?: Layer_ConstructProps) 
    constructor(is_parent: boolean, rb_group: number) 
    static new(is_parent: boolean, rb_group: number): Layer
    _init(config?: Layer_ConstructProps): void
}

interface Link_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of EvinceDocument-3.0.EvinceDocument.Link

    action?: LinkAction | null
    title?: string | null
}

interface Link {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Link

    readonly action: LinkAction
    readonly title: string

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Link

    get_action(): LinkAction
    get_title(): string

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Link

    connect(sigName: "notify::action", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Link extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Link

    static name: string
    static $gtype: GObject.GType<Link>

    // Constructors of EvinceDocument-3.0.EvinceDocument.Link

    constructor(config?: Link_ConstructProps) 
    constructor(title: string, action: LinkAction) 
    static new(title: string, action: LinkAction): Link
    _init(config?: Link_ConstructProps): void
}

interface LinkAction_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of EvinceDocument-3.0.EvinceDocument.LinkAction

    dest?: LinkDest | null
    exclude_reset_fields?: boolean | null
    filename?: string | null
    hide_list?: object | null
    name?: string | null
    params?: string | null
    reset_fields?: object | null
    show_list?: object | null
    toggle_list?: object | null
    type?: LinkActionType | null
    uri?: string | null
}

interface LinkAction {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkAction

    readonly dest: LinkDest
    readonly exclude_reset_fields: boolean
    readonly filename: string
    readonly hide_list: object
    readonly name: string
    readonly params: string
    readonly reset_fields: object
    readonly show_list: object
    readonly toggle_list: object
    readonly type: LinkActionType
    readonly uri: string

    // Owm methods of EvinceDocument-3.0.EvinceDocument.LinkAction

    /**
     * Checks whether `a` and `b` are equal.
     * @param b a #EvLinkAction
     */
    equal(b: LinkAction): boolean
    get_action_type(): LinkActionType
    get_dest(): LinkDest
    get_exclude_reset_fields(): boolean
    get_filename(): string
    get_hide_list(): Layer[]
    get_name(): string
    get_params(): string
    get_show_list(): Layer[]
    get_toggle_list(): Layer[]
    get_uri(): string

    // Class property signals of EvinceDocument-3.0.EvinceDocument.LinkAction

    connect(sigName: "notify::dest", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dest", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dest", ...args: any[]): void
    connect(sigName: "notify::exclude-reset-fields", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exclude-reset-fields", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::exclude-reset-fields", ...args: any[]): void
    connect(sigName: "notify::filename", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::hide-list", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-list", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-list", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::params", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::params", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::params", ...args: any[]): void
    connect(sigName: "notify::reset-fields", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reset-fields", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reset-fields", ...args: any[]): void
    connect(sigName: "notify::show-list", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-list", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-list", ...args: any[]): void
    connect(sigName: "notify::toggle-list", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::toggle-list", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::toggle-list", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LinkAction extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkAction

    static name: string
    static $gtype: GObject.GType<LinkAction>

    // Constructors of EvinceDocument-3.0.EvinceDocument.LinkAction

    constructor(config?: LinkAction_ConstructProps) 
    static new_dest(dest: LinkDest): LinkAction
    static new_external_uri(uri: string): LinkAction
    static new_launch(filename: string, params: string): LinkAction
    static new_layers_state(show_list: Layer[], hide_list: Layer[], toggle_list: Layer[]): LinkAction
    static new_named(name: string): LinkAction
    static new_remote(dest: LinkDest, filename: string): LinkAction
    _init(config?: LinkAction_ConstructProps): void
}

interface LinkDest_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of EvinceDocument-3.0.EvinceDocument.LinkDest

    bottom?: number | null
    change?: number | null
    left?: number | null
    named?: string | null
    page?: number | null
    page_label?: string | null
    right?: number | null
    top?: number | null
    type?: LinkDestType | null
    zoom?: number | null
}

interface LinkDest {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkDest

    readonly bottom: number
    readonly change: number
    readonly left: number
    readonly named: string
    readonly page: number
    readonly page_label: string
    readonly right: number
    readonly top: number
    readonly type: LinkDestType
    readonly zoom: number

    // Owm methods of EvinceDocument-3.0.EvinceDocument.LinkDest

    /**
     * Checks whether `a` and `b` are equal.
     * @param b a #EvLinkDest
     */
    equal(b: LinkDest): boolean
    get_bottom(): number
    get_dest_type(): LinkDestType
    get_left(change_left: boolean): number
    get_named_dest(): string
    get_page(): number
    get_page_label(): string
    get_right(): number
    get_top(change_top: boolean): number
    get_zoom(change_zoom: boolean): number

    // Class property signals of EvinceDocument-3.0.EvinceDocument.LinkDest

    connect(sigName: "notify::bottom", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bottom", ...args: any[]): void
    connect(sigName: "notify::change", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::change", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::change", ...args: any[]): void
    connect(sigName: "notify::left", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::left", ...args: any[]): void
    connect(sigName: "notify::named", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::named", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::named", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::page-label", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-label", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page-label", ...args: any[]): void
    connect(sigName: "notify::right", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right", ...args: any[]): void
    connect(sigName: "notify::top", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::top", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::zoom", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LinkDest extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkDest

    static name: string
    static $gtype: GObject.GType<LinkDest>

    // Constructors of EvinceDocument-3.0.EvinceDocument.LinkDest

    constructor(config?: LinkDest_ConstructProps) 
    static new_fit(page: number): LinkDest
    static new_fith(page: number, top: number, change_top: boolean): LinkDest
    static new_fitr(page: number, left: number, bottom: number, right: number, top: number): LinkDest
    static new_fitv(page: number, left: number, change_left: boolean): LinkDest
    static new_named(named_dest: string): LinkDest
    static new_page(page: number): LinkDest
    static new_page_label(page_label: string): LinkDest
    static new_xyz(page: number, left: number, top: number, zoom: number, change_left: boolean, change_top: boolean, change_zoom: boolean): LinkDest
    _init(config?: LinkDest_ConstructProps): void
}

interface Media_ConstructProps extends GObject.Object_ConstructProps {
}

interface Media {

    // Own fields of EvinceDocument-3.0.EvinceDocument.Media

    base_instance: GObject.Object
    priv: MediaPrivate

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Media

    get_page_index(): number
    get_show_controls(): boolean
    get_uri(): string
    set_show_controls(show_controls: boolean): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Media

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Media extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Media

    static name: string
    static $gtype: GObject.GType<Media>

    // Constructors of EvinceDocument-3.0.EvinceDocument.Media

    constructor(config?: Media_ConstructProps) 
    static new_for_uri(page: Page, uri: string): Media
    _init(config?: Media_ConstructProps): void
}

interface Page_ConstructProps extends GObject.Object_ConstructProps {
}

interface Page {

    // Own fields of EvinceDocument-3.0.EvinceDocument.Page

    base_instance: GObject.Object
    index: number
    backend_page: BackendPage
    backend_destroy_func: BackendPageDestroyFunc

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Page

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Page extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Page

    static name: string
    static $gtype: GObject.GType<Page>

    // Constructors of EvinceDocument-3.0.EvinceDocument.Page

    constructor(config?: Page_ConstructProps) 
    constructor(index: number) 
    static new(index: number): Page
    _init(config?: Page_ConstructProps): void
}

interface RenderContext_ConstructProps extends GObject.Object_ConstructProps {
}

interface RenderContext {

    // Own fields of EvinceDocument-3.0.EvinceDocument.RenderContext

    parent: GObject.Object
    page: Page
    rotation: number
    scale: number
    target_width: number
    target_height: number

    // Owm methods of EvinceDocument-3.0.EvinceDocument.RenderContext

    compute_scaled_size(width_points: number, height_points: number, scaled_width: number, scaled_height: number): void
    compute_scales(width_points: number, height_points: number, scale_x: number, scale_y: number): void
    compute_transformed_size(width_points: number, height_points: number, transformed_width: number, transformed_height: number): void
    set_page(page: Page): void
    set_rotation(rotation: number): void
    set_scale(scale: number): void
    set_target_size(target_width: number, target_height: number): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.RenderContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RenderContext extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.RenderContext

    static name: string
    static $gtype: GObject.GType<RenderContext>

    // Constructors of EvinceDocument-3.0.EvinceDocument.RenderContext

    constructor(config?: RenderContext_ConstructProps) 
    constructor(page: Page, rotation: number, scale: number) 
    static new(page: Page, rotation: number, scale: number): RenderContext
    _init(config?: RenderContext_ConstructProps): void
}

interface TransitionEffect_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of EvinceDocument-3.0.EvinceDocument.TransitionEffect

    alignment?: TransitionEffectAlignment | null
    angle?: number | null
    direction?: TransitionEffectDirection | null
    duration?: number | null
    duration_real?: number | null
    rectangular?: boolean | null
    scale?: number | null
    type?: TransitionEffectType | null
}

interface TransitionEffect {

    // Own properties of EvinceDocument-3.0.EvinceDocument.TransitionEffect

    alignment: TransitionEffectAlignment
    angle: number
    direction: TransitionEffectDirection
    duration: number
    duration_real: number
    rectangular: boolean
    scale: number
    type: TransitionEffectType

    // Own fields of EvinceDocument-3.0.EvinceDocument.TransitionEffect

    parent_instance: GObject.Object

    // Class property signals of EvinceDocument-3.0.EvinceDocument.TransitionEffect

    connect(sigName: "notify::alignment", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::angle", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::angle", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::angle", ...args: any[]): void
    connect(sigName: "notify::direction", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::direction", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::duration-real", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-real", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration-real", ...args: any[]): void
    connect(sigName: "notify::rectangular", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangular", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rectangular", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TransitionEffect extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.TransitionEffect

    static name: string
    static $gtype: GObject.GType<TransitionEffect>

    // Constructors of EvinceDocument-3.0.EvinceDocument.TransitionEffect

    constructor(config?: TransitionEffect_ConstructProps) 
    _init(config?: TransitionEffect_ConstructProps): void
}

interface AnnotationAttachmentClass {
}

abstract class AnnotationAttachmentClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationAttachmentClass

    static name: string
}

interface AnnotationClass {
}

abstract class AnnotationClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationClass

    static name: string
}

interface AnnotationMarkupInterface {
}

abstract class AnnotationMarkupInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkupInterface

    static name: string
}

interface AnnotationTextClass {
}

abstract class AnnotationTextClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationTextClass

    static name: string
}

interface AnnotationTextMarkupClass {
}

abstract class AnnotationTextMarkupClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkupClass

    static name: string
}

interface AsyncRendererInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.AsyncRendererInterface

    base_iface: GObject.TypeInterface
    render_finished: (renderer: AsyncRenderer, pixbuf: GdkPixbuf.Pixbuf) => void
    render_pixbuf: (renderer: AsyncRenderer, page: number, scale: number, rotation: number) => void
}

abstract class AsyncRendererInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AsyncRendererInterface

    static name: string
}

interface AttachmentClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.AttachmentClass

    base_class: GObject.ObjectClass
}

abstract class AttachmentClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AttachmentClass

    static name: string
}

interface DocumentAnnotationsInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentAnnotationsInterface

    base_iface: GObject.TypeInterface
    get_annotations: (document_annots: DocumentAnnotations, page: Page) => MappingList
    document_is_modified: (document_annots: DocumentAnnotations) => boolean
    add_annotation: (document_annots: DocumentAnnotations, annot: Annotation, rect: Rectangle) => void
    save_annotation: (document_annots: DocumentAnnotations, annot: Annotation, mask: AnnotationsSaveMask) => void
    remove_annotation: (document_annots: DocumentAnnotations, annot: Annotation) => void
    over_markup: (document_annots: DocumentAnnotations, annot: Annotation, x: number, y: number) => AnnotationsOverMarkup
}

abstract class DocumentAnnotationsInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentAnnotationsInterface

    static name: string
}

interface DocumentAttachmentsInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentAttachmentsInterface

    base_iface: GObject.TypeInterface
    has_attachments: (document_attachments: DocumentAttachments) => boolean
    get_attachments: (document_attachments: DocumentAttachments) => Attachment[]
}

abstract class DocumentAttachmentsInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentAttachmentsInterface

    static name: string
}

interface DocumentBackendInfo {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentBackendInfo

    name: string
    version: string
}

class DocumentBackendInfo {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentBackendInfo

    static name: string
}

interface DocumentClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentClass

    base_class: GObject.ObjectClass
    load: (document: Document, uri: string) => boolean
    save: (document: Document, uri: string) => boolean
    get_n_pages: (document: Document) => number
    get_page: (document: Document, index: number) => Page
    get_page_size: (document: Document, page: Page) => [ /* width */ number, /* height */ number ]
    get_page_label: (document: Document, page: Page) => string
    render: (document: Document, rc: RenderContext) => cairo.Surface
    get_thumbnail: (document: Document, rc: RenderContext) => GdkPixbuf.Pixbuf
    get_info: (document: Document) => DocumentInfo
    get_backend_info: (document: Document, info: DocumentBackendInfo) => boolean
    support_synctex: (document: Document) => boolean
    load_stream: (document: Document, stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null) => boolean
    load_gfile: (document: Document, file: Gio.File, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null) => boolean
    get_thumbnail_surface: (document: Document, rc: RenderContext) => cairo.Surface
    load_fd: (document: Document, fd: number, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null) => boolean
}

abstract class DocumentClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentClass

    static name: string
}

interface DocumentFindInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentFindInterface

    base_iface: GObject.TypeInterface
    find_text: (document_find: DocumentFind, page: Page, text: string, case_sensitive: boolean) => Rectangle[]
    find_text_with_options: (document_find: DocumentFind, page: Page, text: string, options: FindOptions) => Rectangle[]
    get_supported_options: (document_find: DocumentFind) => FindOptions
}

abstract class DocumentFindInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentFindInterface

    static name: string
}

interface DocumentFontsInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentFontsInterface

    base_iface: GObject.TypeInterface
    scan: (document_fonts: DocumentFonts, n_pages: number) => boolean
    get_progress: (document_fonts: DocumentFonts) => number
    fill_model: (document_fonts: DocumentFonts, model: Gtk.TreeModel) => void
    get_fonts_summary: (document_fonts: DocumentFonts) => string
}

abstract class DocumentFontsInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentFontsInterface

    static name: string
}

interface DocumentFormsInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentFormsInterface

    base_iface: GObject.TypeInterface
    get_form_fields: (document_forms: DocumentForms, page: Page) => MappingList
    document_is_modified: (document_forms: DocumentForms) => boolean
    form_field_text_get_text: (document_forms: DocumentForms, field: FormField) => string
    form_field_text_set_text: (document_forms: DocumentForms, field: FormField, text: string) => void
    form_field_button_get_state: (document_forms: DocumentForms, field: FormField) => boolean
    form_field_button_set_state: (document_forms: DocumentForms, field: FormField, state: boolean) => void
    form_field_choice_get_item: (document_forms: DocumentForms, field: FormField, index: number) => string
    form_field_choice_get_n_items: (document_forms: DocumentForms, field: FormField) => number
    form_field_choice_is_item_selected: (document_forms: DocumentForms, field: FormField, index: number) => boolean
    form_field_choice_select_item: (document_forms: DocumentForms, field: FormField, index: number) => void
    form_field_choice_toggle_item: (document_forms: DocumentForms, field: FormField, index: number) => void
    form_field_choice_unselect_all: (document_forms: DocumentForms, field: FormField) => void
    form_field_choice_set_text: (document_forms: DocumentForms, field: FormField, text: string) => void
    form_field_choice_get_text: (document_forms: DocumentForms, field: FormField) => string
    reset_form: (document_forms: DocumentForms, action: LinkAction) => void
}

abstract class DocumentFormsInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentFormsInterface

    static name: string
}

interface DocumentImagesInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentImagesInterface

    base_iface: GObject.TypeInterface
    get_image_mapping: (document_images: DocumentImages, page: Page) => MappingList
    get_image: (document_images: DocumentImages, image: Image) => GdkPixbuf.Pixbuf
}

abstract class DocumentImagesInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentImagesInterface

    static name: string
}

interface DocumentInfo {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentInfo

    title: string
    format: string
    author: string
    subject: string
    keywords: string
    creator: string
    producer: string
    linearized: string
    security: string
    creation_date: GLib.Time
    modified_date: GLib.Time
    layout: DocumentLayout
    mode: DocumentMode
    ui_hints: number
    permissions: number
    n_pages: number
    paper_height: number
    paper_width: number
    license: DocumentLicense
    contains_js: DocumentContainsJS
    fields_mask: number

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentInfo

    copy(): DocumentInfo
    /**
     * Frees `info`.
     */
    free(): void
    get_created_datetime(): GLib.DateTime | null
    get_modified_datetime(): GLib.DateTime | null
    set_from_xmp(xmp: string, size: number): boolean
    take_created_datetime(datetime: GLib.DateTime): void
    take_modified_datetime(datetime: GLib.DateTime): void
}

class DocumentInfo {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentInfo

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentInfo

    constructor() 
    static new(): DocumentInfo
}

interface DocumentLayersInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentLayersInterface

    base_iface: GObject.TypeInterface
    has_layers: (document_layers: DocumentLayers) => boolean
    get_layers: (document_layers: DocumentLayers) => Gtk.TreeModel
    show_layer: (document_layers: DocumentLayers, layer: Layer) => void
    hide_layer: (document_layers: DocumentLayers, layer: Layer) => void
    layer_is_visible: (document_layers: DocumentLayers, layer: Layer) => boolean
}

abstract class DocumentLayersInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentLayersInterface

    static name: string
}

interface DocumentLicense {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentLicense

    text: string
    uri: string
    web_statement: string

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentLicense

    copy(): DocumentLicense
    /**
     * Frees `license`.
     */
    free(): void
    get_text(): string | null
    get_uri(): string | null
    get_web_statement(): string | null
}

class DocumentLicense {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentLicense

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentLicense

    constructor() 
    static new(): DocumentLicense
}

interface DocumentLinksInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentLinksInterface

    base_iface: GObject.TypeInterface
    has_document_links: (document_links: DocumentLinks) => boolean
    get_links_model: (document_links: DocumentLinks) => Gtk.TreeModel
    get_links: (document_links: DocumentLinks, page: Page) => MappingList
    find_link_dest: (document_links: DocumentLinks, link_name: string) => LinkDest
    find_link_page: (document_links: DocumentLinks, link_name: string) => number
}

abstract class DocumentLinksInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentLinksInterface

    static name: string
}

interface DocumentMediaInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentMediaInterface

    base_iface: GObject.TypeInterface
    get_media_mapping: (document_media: DocumentMedia, page: Page) => MappingList
}

abstract class DocumentMediaInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentMediaInterface

    static name: string
}

interface DocumentPrintInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentPrintInterface

    base_iface: GObject.TypeInterface
    print_page: (document_print: DocumentPrint, page: Page, cr: cairo.Context) => void
}

abstract class DocumentPrintInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentPrintInterface

    static name: string
}

interface DocumentPrivate {
}

class DocumentPrivate {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentPrivate

    static name: string
}

interface DocumentSecurityInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentSecurityInterface

    base_iface: GObject.TypeInterface
    has_document_security: (document_security: DocumentSecurity) => boolean
    set_password: (document_security: DocumentSecurity, password: string) => void
}

abstract class DocumentSecurityInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentSecurityInterface

    static name: string
}

interface DocumentTextInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentTextInterface

    base_iface: GObject.TypeInterface
    get_text_mapping: (document_text: DocumentText, page: Page) => cairo.Region
    get_text: (document_text: DocumentText, page: Page) => string
    get_text_layout: (document_text: DocumentText, page: Page, areas: Rectangle, n_areas: number) => boolean
    get_text_attrs: (document_text: DocumentText, page: Page) => Pango.AttrList
}

abstract class DocumentTextInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentTextInterface

    static name: string
}

interface DocumentTransitionInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentTransitionInterface

    base_iface: GObject.TypeInterface
    get_page_duration: (document_trans: DocumentTransition, page: number) => number
    get_effect: (document_trans: DocumentTransition, page: number) => TransitionEffect
}

abstract class DocumentTransitionInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentTransitionInterface

    static name: string
}

interface FileExporterContext {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FileExporterContext

    format: FileExporterFormat
    filename: string
    first_page: number
    last_page: number
    paper_width: number
    paper_height: number
    duplex: boolean
    pages_per_sheet: number
}

class FileExporterContext {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FileExporterContext

    static name: string
}

interface FileExporterInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FileExporterInterface

    base_iface: GObject.TypeInterface
    begin: (exporter: FileExporter, fc: FileExporterContext) => void
    begin_page: (exporter: FileExporter) => void
    do_page: (exporter: FileExporter, rc: RenderContext) => void
    end_page: (exporter: FileExporter) => void
    end: (exporter: FileExporter) => void
    get_capabilities: (exporter: FileExporter) => FileExporterCapabilities
}

abstract class FileExporterInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FileExporterInterface

    static name: string
}

interface FormFieldButtonClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldButtonClass

    parent_class: FormFieldClass
}

abstract class FormFieldButtonClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldButtonClass

    static name: string
}

interface FormFieldChoiceClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldChoiceClass

    parent_class: FormFieldClass
}

abstract class FormFieldChoiceClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldChoiceClass

    static name: string
}

interface FormFieldClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldClass

    parent_class: GObject.ObjectClass
}

abstract class FormFieldClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldClass

    static name: string
}

interface FormFieldSignatureClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldSignatureClass

    parent_class: FormFieldClass
}

abstract class FormFieldSignatureClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldSignatureClass

    static name: string
}

interface FormFieldTextClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldTextClass

    parent_class: FormFieldClass
}

abstract class FormFieldTextClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldTextClass

    static name: string
}

interface ImageClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.ImageClass

    base_class: GObject.ObjectClass
}

abstract class ImageClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.ImageClass

    static name: string
}

interface ImagePrivate {
}

class ImagePrivate {

    // Own properties of EvinceDocument-3.0.EvinceDocument.ImagePrivate

    static name: string
}

interface LayerClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.LayerClass

    base_class: GObject.ObjectClass
}

abstract class LayerClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LayerClass

    static name: string
}

interface LayerPrivate {
}

class LayerPrivate {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LayerPrivate

    static name: string
}

interface LinkActionClass {
}

abstract class LinkActionClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkActionClass

    static name: string
}

interface LinkActionPrivate {
}

class LinkActionPrivate {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkActionPrivate

    static name: string
}

interface LinkClass {
}

abstract class LinkClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkClass

    static name: string
}

interface LinkDestClass {
}

abstract class LinkDestClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkDestClass

    static name: string
}

interface LinkDestPrivate {
}

class LinkDestPrivate {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkDestPrivate

    static name: string
}

interface LinkPrivate {
}

class LinkPrivate {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkPrivate

    static name: string
}

interface Mapping {

    // Own fields of EvinceDocument-3.0.EvinceDocument.Mapping

    area: Rectangle
    data: object
}

class Mapping {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Mapping

    static name: string
}

interface MappingList {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.MappingList

    find(data: object | null): Mapping
    find_custom(data: object | null, func: GLib.CompareFunc): Mapping
    get(x: number, y: number): Mapping
    get_data(x: number, y: number): object | null
    get_list(): Mapping[]
    get_page(): number
    length(): number
    nth(n: number): Mapping
    ref(): MappingList
    remove(mapping: Mapping): void
    unref(): void
}

class MappingList {

    // Own properties of EvinceDocument-3.0.EvinceDocument.MappingList

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.MappingList

    constructor(page: number, list: Mapping[], data_destroy_func: GLib.DestroyNotify) 
    static new(page: number, list: Mapping[], data_destroy_func: GLib.DestroyNotify): MappingList
}

interface MediaClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.MediaClass

    base_class: GObject.ObjectClass
}

abstract class MediaClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.MediaClass

    static name: string
}

interface MediaPrivate {
}

class MediaPrivate {

    // Own properties of EvinceDocument-3.0.EvinceDocument.MediaPrivate

    static name: string
}

interface PageClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.PageClass

    base_class: GObject.ObjectClass
}

abstract class PageClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.PageClass

    static name: string
}

interface Point {

    // Own fields of EvinceDocument-3.0.EvinceDocument.Point

    x: number
    y: number
}

class Point {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Point

    static name: string
}

interface Rectangle {

    // Own fields of EvinceDocument-3.0.EvinceDocument.Rectangle

    x1: number
    y1: number
    x2: number
    y2: number

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Rectangle

    copy(): Rectangle
    free(): void
}

class Rectangle {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Rectangle

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.Rectangle

    constructor() 
    static new(): Rectangle
}

interface RenderContextClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.RenderContextClass

    klass: GObject.ObjectClass
}

abstract class RenderContextClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.RenderContextClass

    static name: string
}

interface SelectionInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.SelectionInterface

    base_iface: GObject.TypeInterface
    render_selection: (selection: Selection, rc: RenderContext, surface: cairo.Surface, points: Rectangle, old_points: Rectangle, style: SelectionStyle, text: Gdk.Color, base: Gdk.Color) => void
    get_selected_text: (selection: Selection, page: Page, style: SelectionStyle, points: Rectangle) => string
    get_selection_region: (selection: Selection, rc: RenderContext, style: SelectionStyle, points: Rectangle) => cairo.Region
}

abstract class SelectionInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.SelectionInterface

    static name: string
}

interface SourceLink {

    // Own fields of EvinceDocument-3.0.EvinceDocument.SourceLink

    filename: string
    line: number
    col: number

    // Owm methods of EvinceDocument-3.0.EvinceDocument.SourceLink

    copy(): SourceLink
    free(): void
}

class SourceLink {

    // Own properties of EvinceDocument-3.0.EvinceDocument.SourceLink

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.SourceLink

    constructor(filename: string, line: number, col: number) 
    static new(filename: string, line: number, col: number): SourceLink
}

interface TransitionEffectClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.TransitionEffectClass

    parent_class: GObject.ObjectClass
}

abstract class TransitionEffectClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.TransitionEffectClass

    static name: string
}

interface TypeInfo {

    // Own fields of EvinceDocument-3.0.EvinceDocument.TypeInfo

    desc: string
    mime_types: string
}

class TypeInfo {

    // Own properties of EvinceDocument-3.0.EvinceDocument.TypeInfo

    static name: string
}

    type BackendPage = object
    type BackendPageDestroyFunc = GLib.DestroyNotify
}
export default EvinceDocument;