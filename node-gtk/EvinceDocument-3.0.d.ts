// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EvinceDocument-3.0
 */

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
function backendsManagerGetDocument(mimeType: string): Document
function backendsManagerGetDocumentModuleName(document: Document): string
function documentErrorQuark(): GLib.Quark
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
function fileCompress(uri: string, type: CompressionType): string
/**
 * Performs a g_file_copy_attributes() with %G_FILE_COPY_ALL_METADATA
 * from `from` to `to`.
 * @param from the source URI
 * @param to the target URI
 */
function fileCopyMetadata(from: string, to: string): boolean
function fileGetMimeType(uri: string, fast: boolean): string
function fileGetMimeTypeFromFd(fd: number): string
function fileIsTemp(file: Gio.File): boolean
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
function fileUncompress(uri: string, type: CompressionType): string
function getLocaleDir(): string
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
 * @param fileName a location to store the filename of the temp file
 */
function mkstemp(tmpl: string, fileName: string): number
/**
 * Creates a temp #GFile in the evince temp directory. See ev_mkstemp() for more information.
 * @param tmpl a template string; must contain 'XXXXXX', but not necessarily as a suffix
 */
function mkstempFile(tmpl: string): Gio.File
function rectCmp(a: Rectangle, b: Rectangle): number
/**
 * Checks whether evince should use the portal.
 */
function shouldUsePortal(): boolean
/**
 * Shuts the evince document library down.
 */
function shutdown(): void
function tmpFileUnlink(file: Gio.File): void
function tmpFilenameUnlink(filename: string): void
function tmpUriUnlink(uri: string): void
/**
 * Performs a g_file_copy() from `from` to `to`.
 * @param from the source URI
 * @param to the target URI
 */
function xferUriSimple(from: string, to: string): boolean
function xmpParse(xmp: string, size: number, info: DocumentInfo): boolean
interface AnnotationMarkup_ConstructProps extends Annotation_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup

    canHavePopup?: boolean | null
    hasPopup?: boolean | null
    label?: string | null
    opacity?: number | null
    popupIsOpen?: boolean | null
    rectangle?: Rectangle | null
}

interface AnnotationMarkup extends Annotation {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup

    canHavePopup: boolean
    hasPopup: boolean
    label: string
    opacity: number
    popupIsOpen: boolean
    rectangle: Rectangle

    // Owm methods of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup

    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getRectangle(evRect: Rectangle): void
    setHasPopup(hasPopup: boolean): boolean
    setLabel(label: string): boolean
    setOpacity(opacity: number): boolean
    setPopupIsOpen(isOpen: boolean): boolean
    setRectangle(evRect: Rectangle): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup

    connect(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-have-popup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-have-popup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-have-popup", ...args: any[]): void
    connect(sigName: "notify::has-popup", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-popup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-popup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-popup", ...args: any[]): void
    connect(sigName: "notify::label", callback: (...args: any[]) => void): number
    on(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): number
    on(sigName: "notify::popup-is-open", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::popup-is-open", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::popup-is-open", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: (...args: any[]) => void): number
    on(sigName: "notify::rectangle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rectangle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: "notify::area", callback: (...args: any[]) => void): number
    on(sigName: "notify::area", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::area", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: (...args: any[]) => void): number
    on(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: (...args: any[]) => void): number
    on(sigName: "notify::contents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (...args: any[]) => void): number
    on(sigName: "notify::page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    (object: GdkPixbuf.Pixbuf): void
}

interface AsyncRenderer {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.AsyncRenderer

    renderPixbuf(page: number, scale: number, rotation: number): void

    // Own signals of EvinceDocument-3.0.EvinceDocument.AsyncRenderer

    connect(sigName: "render-finished", callback: AsyncRenderer_RenderFinishedSignalCallback): number
    on(sigName: "render-finished", callback: AsyncRenderer_RenderFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "render-finished", callback: AsyncRenderer_RenderFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "render-finished", callback: AsyncRenderer_RenderFinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "render-finished", ...args: any[]): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.AsyncRenderer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    addAnnotation(annot: Annotation, rect: Rectangle): void
    canAddAnnotation(): boolean
    canRemoveAnnotation(): boolean
    documentIsModified(): boolean
    getAnnotations(page: Page): MappingList
    overMarkup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup
    removeAnnotation(annot: Annotation): void
    saveAnnotation(annot: Annotation, mask: AnnotationsSaveMask): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentAnnotations

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    getAttachments(): Attachment[]
    hasAttachments(): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentAttachments

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    findText(page: Page, text: string, caseSensitive: boolean): Rectangle[]
    findTextWithOptions(page: Page, text: string, options: FindOptions): Rectangle[]
    getSupportedOptions(): FindOptions

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentFind

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    fillModel(model: Gtk.TreeModel): void
    getFontsSummary(): string
    getProgress(): number
    scan(nPages: number): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentFonts

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    documentIsModified(): boolean
    formFieldButtonGetState(field: FormField): boolean
    formFieldButtonSetState(field: FormField, state: boolean): void
    formFieldChoiceGetItem(field: FormField, index: number): string
    formFieldChoiceGetNItems(field: FormField): number
    formFieldChoiceGetText(field: FormField): string
    formFieldChoiceIsItemSelected(field: FormField, index: number): boolean
    formFieldChoiceSelectItem(field: FormField, index: number): void
    formFieldChoiceSetText(field: FormField, text: string): void
    formFieldChoiceToggleItem(field: FormField, index: number): void
    formFieldChoiceUnselectAll(field: FormField): void
    formFieldTextGetText(field: FormField): string
    formFieldTextSetText(field: FormField, text: string): void
    getFormFields(page: Page): MappingList
    resetForm(action: LinkAction): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentForms

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    getImage(image: Image): GdkPixbuf.Pixbuf
    getImageMapping(page: Page): MappingList

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentImages

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    getLayers(): Gtk.TreeModel
    hasLayers(): boolean
    hideLayer(layer: Layer): void
    layerIsVisible(layer: Layer): boolean
    showLayer(layer: Layer): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentLayers

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    findLinkDest(linkName: string): LinkDest
    findLinkPage(linkName: string): number
    getDestPage(dest: LinkDest): number
    getDestPageLabel(dest: LinkDest): string
    getLinkPage(link: Link): number
    getLinkPageLabel(link: Link): string
    getLinks(page: Page): MappingList
    getLinksModel(): Gtk.TreeModel
    hasDocumentLinks(): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentLinks

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    getMediaMapping(page: Page): MappingList

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentMedia

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    printPage(page: Page, cr: cairo.Context): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentPrint

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    hasDocumentSecurity(): boolean
    setPassword(password: string): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentSecurity

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    getText(page: Page): string
    /**
     * FIXME
     * @param page a #EvPage
     */
    getTextAttrs(page: Page): Pango.AttrList
    getTextLayout(page: Page, areas: Rectangle, nAreas: number): boolean
    getTextMapping(page: Page): cairo.Region

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentText

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    getEffect(page: number): TransitionEffect
    getPageDuration(page: number): number

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentTransition

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    beginPage(): void
    doPage(rc: RenderContext): void
    end(): void
    endPage(): void
    getCapabilities(): FileExporterCapabilities

    // Class property signals of EvinceDocument-3.0.EvinceDocument.FileExporter

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    getSelectedText(page: Page, style: SelectionStyle, points: Rectangle): string
    getSelectionRegion(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region
    renderSelection(rc: RenderContext, surface: cairo.Surface, points: Rectangle, oldPoints: Rectangle, style: SelectionStyle, text: Gdk.Color, base: Gdk.Color): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Selection

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    getAnnotationType(): AnnotationType
    getArea(area: Rectangle): void
    /**
     * Get the color of `annot`.
     */
    getColor(): /* color */ Gdk.Color
    /**
     * Get the contents of `annot`. The contents of
     * `annot` is the text that is displayed in the annotation, or an
     * alternate description of the annotation's content for non-text annotations
     */
    getContents(): string
    /**
     * Get the last modification date of `annot`.
     */
    getModified(): string
    /**
     * Get the name of `annot`. The name of the annotation is a string
     * that uniquely indenftifies `annot` amongs all the annotations
     * in the same page.
     */
    getName(): string
    /**
     * Get the page where `annot` appears.
     */
    getPage(): Page
    /**
     * Get the index of the page where `annot` appears. Note that the index
     * is 0 based.
     */
    getPageIndex(): number
    /**
     * Gets the color of `annot`.
     */
    getRgba(): /* rgba */ Gdk.RGBA
    /**
     * Set the area of the annotation to `area`.
     * @param area a #EvRectangle
     */
    setArea(area: Rectangle): boolean
    /**
     * Set the color of the annotation to `color`. You can monitor
     * changes to the annotation's color by connecting to
     * notify::color signal on `annot`.
     * @param color a #GdkColor
     */
    setColor(color: Gdk.Color): boolean
    /**
     * Set the contents of `annot`. You can monitor
     * changes in the annotation's  contents by connecting to
     * notify::contents signal of `annot`.
     * @param contents 
     */
    setContents(contents: string): boolean
    /**
     * Set the last modification date of `annot` to `modified`. To
     * set the last modification date using a #time_t, use
     * ev_annotation_set_modified_from_time_t() instead. You can monitor
     * changes to the last modification date by connecting to the
     * notify::modified signal on `annot`.
     * @param modified string with the last modification date.
     */
    setModified(modified: string): boolean
    /**
     * Set the last modification date of `annot` to `utime`.  You can
     * monitor changes to the last modification date by connecting to the
     * notify::modified sinal on `annot`.
     * For the time-format used, see ev_document_misc_format_date().
     * @param utime a #GTime
     */
    setModifiedFromTime(utime: GLib.Time): boolean
    /**
     * Set the last modification date of `annot` to `utime`.  You can
     * monitor changes to the last modification date by connecting to the
     * notify::modified sinal on `annot`.
     * For the time-format used, see ev_document_misc_format_datetime().
     * @param utime a #time_t
     */
    setModifiedFromTimeT(utime: number): boolean
    /**
     * Set the name of `annot`.
     * You can monitor changes of the annotation name by connecting
     * to the notify::name signal on `annot`.
     * @param name 
     */
    setName(name: string): boolean
    /**
     * Set the color of the annotation to `rgba`.
     * @param rgba a #GdkRGBA
     */
    setRgba(rgba: Gdk.RGBA): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Annotation

    connect(sigName: "notify::area", callback: (...args: any[]) => void): number
    on(sigName: "notify::area", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::area", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: (...args: any[]) => void): number
    on(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: (...args: any[]) => void): number
    on(sigName: "notify::contents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (...args: any[]) => void): number
    on(sigName: "notify::page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    getAttachment(): Attachment
    setAttachment(attachment: Attachment): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.AnnotationAttachment

    connect(sigName: "notify::attachment", callback: (...args: any[]) => void): number
    on(sigName: "notify::attachment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::attachment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::attachment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::attachment", ...args: any[]): void
    connect(sigName: "notify::area", callback: (...args: any[]) => void): number
    on(sigName: "notify::area", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::area", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: (...args: any[]) => void): number
    on(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: (...args: any[]) => void): number
    on(sigName: "notify::contents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (...args: any[]) => void): number
    on(sigName: "notify::page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-have-popup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-have-popup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-have-popup", ...args: any[]): void
    connect(sigName: "notify::has-popup", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-popup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-popup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-popup", ...args: any[]): void
    connect(sigName: "notify::label", callback: (...args: any[]) => void): number
    on(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): number
    on(sigName: "notify::popup-is-open", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::popup-is-open", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::popup-is-open", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: (...args: any[]) => void): number
    on(sigName: "notify::rectangle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rectangle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    isOpen?: boolean | null
}

interface AnnotationText extends AnnotationMarkup {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationText

    icon: AnnotationTextIcon
    isOpen: boolean

    // Owm methods of EvinceDocument-3.0.EvinceDocument.AnnotationText

    getIcon(): AnnotationTextIcon
    getIsOpen(): boolean
    setIcon(icon: AnnotationTextIcon): boolean
    setIsOpen(isOpen: boolean): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.AnnotationText

    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::is-open", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-open", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-open", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-open", ...args: any[]): void
    connect(sigName: "notify::area", callback: (...args: any[]) => void): number
    on(sigName: "notify::area", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::area", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: (...args: any[]) => void): number
    on(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: (...args: any[]) => void): number
    on(sigName: "notify::contents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (...args: any[]) => void): number
    on(sigName: "notify::page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-have-popup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-have-popup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-have-popup", ...args: any[]): void
    connect(sigName: "notify::has-popup", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-popup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-popup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-popup", ...args: any[]): void
    connect(sigName: "notify::label", callback: (...args: any[]) => void): number
    on(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): number
    on(sigName: "notify::popup-is-open", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::popup-is-open", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::popup-is-open", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: (...args: any[]) => void): number
    on(sigName: "notify::rectangle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rectangle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    getMarkupType(): AnnotationTextMarkupType
    setMarkupType(markupType: AnnotationTextMarkupType): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup

    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::area", callback: (...args: any[]) => void): number
    on(sigName: "notify::area", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::area", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: (...args: any[]) => void): number
    on(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: (...args: any[]) => void): number
    on(sigName: "notify::contents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (...args: any[]) => void): number
    on(sigName: "notify::page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-have-popup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-have-popup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-have-popup", ...args: any[]): void
    connect(sigName: "notify::has-popup", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-popup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-popup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-popup", ...args: any[]): void
    connect(sigName: "notify::label", callback: (...args: any[]) => void): number
    on(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): number
    on(sigName: "notify::popup-is-open", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::popup-is-open", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::popup-is-open", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: (...args: any[]) => void): number
    on(sigName: "notify::rectangle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rectangle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AnnotationTextMarkup extends Annotation {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup

    static name: string
    static $gtype: GObject.GType<AnnotationTextMarkup>

    // Constructors of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup

    constructor(config?: AnnotationTextMarkup_ConstructProps) 
    static highlightNew(page: Page): AnnotationTextMarkup
    static squigglyNew(page: Page): AnnotationTextMarkup
    static strikeOutNew(page: Page): AnnotationTextMarkup
    static underlineNew(page: Page): AnnotationTextMarkup
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

    baseInstance: GObject.Object

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Attachment

    getCreationDate(): GLib.Time
    getDescription(): string
    getMimeType(): string
    getModificationDate(): GLib.Time
    getName(): string
    open(screen: Gdk.Screen, timestamp: number): boolean
    save(file: Gio.File): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Attachment

    connect(sigName: "notify::ctime", callback: (...args: any[]) => void): number
    on(sigName: "notify::ctime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ctime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ctime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ctime", ...args: any[]): void
    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::mtime", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtime", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static errorQuark(): GLib.Quark
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

    checkDimensions(): boolean
    findPageByLabel(pageLabel: string, pageIndex: number): boolean
    getBackendInfo(info: DocumentBackendInfo): boolean
    /**
     * Returns the #EvDocumentInfo for the document.
     */
    getInfo(): DocumentInfo
    getMaxLabelLen(): number
    getMaxPageSize(width: number, height: number): void
    getMinPageSize(width: number, height: number): void
    getModified(): boolean
    getNPages(): number
    getPage(index: number): Page
    getPageLabel(pageIndex: number): string
    getPageSize(pageIndex: number): [ /* width */ number, /* height */ number ]
    getSize(): number
    getThumbnail(rc: RenderContext): GdkPixbuf.Pixbuf
    getThumbnailSurface(rc: RenderContext): cairo.Surface
    getTitle(): string
    getUri(): string
    hasSynctex(): boolean
    hasTextPageLabels(): boolean
    isPageSizeUniform(): boolean
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
    loadFd(fd: number, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): boolean
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
    loadFull(uri: string, flags: DocumentLoadFlags): boolean
    /**
     * Synchronously loads the document from `file`.
     * See ev_document_load() for more information.
     * @param file a #GFile
     * @param flags flags from #EvDocumentLoadFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    loadGfile(file: Gio.File, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronously loads the document from `stream`.
     * See ev_document_load() for more information.
     * @param stream a #GInputStream
     * @param flags flags from #EvDocumentLoadFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    loadStream(stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): boolean
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
    setModified(modified: boolean): void
    /**
     * Peforms a Synctex backward search to obtain the TeX input file, line and
     * (possibly) column  corresponding to the  position (`x,``y)` (in 72dpi
     * coordinates) in the  `page` of `document`.
     * @param pageIndex the target page
     * @param x X coordinate
     * @param y Y coordinate
     */
    synctexBackwardSearch(pageIndex: number, x: number, y: number): SourceLink

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Document

    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Document extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Document

    static name: string
    static $gtype: GObject.GType<Document>

    // Constructors of EvinceDocument-3.0.EvinceDocument.Document

    constructor(config?: Document_ConstructProps) 
    _init(config?: Document_ConstructProps): void
    static docMutexLock(): void
    static docMutexTrylock(): boolean
    static docMutexUnlock(): void
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
    static factoryAddFilters(chooser: Gtk.Widget, document: Document): void
    /**
     * Creates a #EvDocument for the document at `uri;` or, if no backend handling
     * the document's type is found, or an error occurred on opening the document,
     * returns %NULL and fills in `error`.
     * If the document is encrypted, it is returned but also `error` is set to
     * %EV_DOCUMENT_ERROR_ENCRYPTED.
     * @param uri an URI
     */
    static factoryGetDocument(uri: string): Document
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
     * @param mimeType the mime type
     * @param flags flags from #EvDocumentLoadFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    static factoryGetDocumentForFd(fd: number, mimeType: string, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): Document
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
    static factoryGetDocumentForGfile(file: Gio.File, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): Document
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
     * @param mimeType a mime type hint
     * @param flags flags from #EvDocumentLoadFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    static factoryGetDocumentForStream(stream: Gio.InputStream, mimeType: string | null, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): Document
    /**
     * Creates a #EvDocument for the document at `uri;` or, if no backend handling
     * the document's type is found, or an error occurred on opening the document,
     * returns %NULL and fills in `error`.
     * If the document is encrypted, it is returned but also `error` is set to
     * %EV_DOCUMENT_ERROR_ENCRYPTED.
     * @param uri an URI
     * @param flags flags from #EvDocumentLoadFlags
     */
    static factoryGetDocumentFull(uri: string, flags: DocumentLoadFlags): Document
    static fcMutexLock(): void
    static fcMutexTrylock(): boolean
    static fcMutexUnlock(): void
    static miscFormatDate(utime: GLib.Time): string
    /**
     * Determine the preferred date and time representation for the current locale
     * for `dt`.
     * @param dt a #GDateTime
     */
    static miscFormatDatetime(dt: GLib.DateTime): string
    static miscGetLoadingThumbnail(width: number, height: number, invertedColors: boolean): GdkPixbuf.Pixbuf
    static miscGetPageBorderSize(pageWidth: number, pageHeight: number, border: Gtk.Border): void
    /**
     * Get the pointer's x and y position relative to `widget`.
     * @param widget a #GtkWidget
     */
    static miscGetPointerPosition(widget: Gtk.Widget): [ /* x */ number, /* y */ number ]
    static miscGetScreenDpi(screen: Gdk.Screen): number
    static miscGetThumbnailFrame(width: number, height: number, sourcePixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf
    /**
     * Returns sensible guess for DPI of monitor on which given widget has been
     * realized. If HiDPI display, use 192, else 96.
     * Returns 96 as fallback value.
     * @param widget a #GtkWidget
     */
    static miscGetWidgetDpi(widget: Gtk.Widget): number
    static miscInvertPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    static miscInvertSurface(surface: cairo.Surface): void
    static miscPaintOnePage(cr: cairo.Context, widget: Gtk.Widget, area: Gdk.Rectangle, border: Gtk.Border, highlight: boolean, invertedColors: boolean): void
    static miscPixbufFromSurface(surface: cairo.Surface): GdkPixbuf.Pixbuf
    static miscRenderLoadingThumbnail(widget: Gtk.Widget, width: number, height: number, invertedColors: boolean): GdkPixbuf.Pixbuf
    static miscRenderLoadingThumbnailSurface(widget: Gtk.Widget, width: number, height: number, invertedColors: boolean): cairo.Surface
    static miscRenderThumbnailSurfaceWithFrame(widget: Gtk.Widget, sourceSurface: cairo.Surface, width: number, height: number): cairo.Surface
    static miscRenderThumbnailWithFrame(widget: Gtk.Widget, sourcePixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf
    static miscSurfaceFromPixbuf(pixbuf: GdkPixbuf.Pixbuf): cairo.Surface
    static miscSurfaceRotateAndScale(surface: cairo.Surface, destWidth: number, destHeight: number, destRotation: number): cairo.Surface
}

interface FormField_ConstructProps extends GObject.Object_ConstructProps {
}

interface FormField {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormField

    parent: GObject.Object
    id: number
    isReadOnly: boolean
    fontSize: number
    activationLink: Link
    page: Page
    changed: boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.FormField

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    multiSelect: boolean
    isEditable: boolean
    doSpellCheck: boolean
    commitOnSelChange: boolean
    selectedItems: object[]
    text: string

    // Class property signals of EvinceDocument-3.0.EvinceDocument.FormFieldChoice

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    doSpellCheck: boolean
    doScroll: boolean
    comb: boolean
    isRichText: boolean
    isPassword: boolean
    maxLen: number
    text: string

    // Class property signals of EvinceDocument-3.0.EvinceDocument.FormFieldText

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    baseInstance: GObject.Object
    priv: ImagePrivate

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Image

    getId(): number
    getPage(): number
    getPixbuf(): GdkPixbuf.Pixbuf
    getTmpUri(): string
    saveTmp(pixbuf: GdkPixbuf.Pixbuf): string

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Image

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Image extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Image

    static name: string
    static $gtype: GObject.GType<Image>

    // Constructors of EvinceDocument-3.0.EvinceDocument.Image

    constructor(config?: Image_ConstructProps) 
    constructor(page: number, imgId: number) 
    static new(page: number, imgId: number): Image
    static newFromPixbuf(pixbuf: GdkPixbuf.Pixbuf): Image
    _init(config?: Image_ConstructProps): void
}

interface Layer_ConstructProps extends GObject.Object_ConstructProps {
}

interface Layer {

    // Own fields of EvinceDocument-3.0.EvinceDocument.Layer

    baseInstance: GObject.Object
    priv: LayerPrivate

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Layer

    getRbGroup(): number
    isParent(): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Layer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Layer extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Layer

    static name: string
    static $gtype: GObject.GType<Layer>

    // Constructors of EvinceDocument-3.0.EvinceDocument.Layer

    constructor(config?: Layer_ConstructProps) 
    constructor(isParent: boolean, rbGroup: number) 
    static new(isParent: boolean, rbGroup: number): Layer
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

    getAction(): LinkAction
    getTitle(): string

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Link

    connect(sigName: "notify::action", callback: (...args: any[]) => void): number
    on(sigName: "notify::action", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::action", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::action", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    excludeResetFields?: boolean | null
    filename?: string | null
    hideList?: object | null
    name?: string | null
    params?: string | null
    resetFields?: object | null
    showList?: object | null
    toggleList?: object | null
    type?: LinkActionType | null
    uri?: string | null
}

interface LinkAction {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkAction

    readonly dest: LinkDest
    readonly excludeResetFields: boolean
    readonly filename: string
    readonly hideList: object
    readonly name: string
    readonly params: string
    readonly resetFields: object
    readonly showList: object
    readonly toggleList: object
    readonly type: LinkActionType
    readonly uri: string

    // Owm methods of EvinceDocument-3.0.EvinceDocument.LinkAction

    /**
     * Checks whether `a` and `b` are equal.
     * @param b a #EvLinkAction
     */
    equal(b: LinkAction): boolean
    getActionType(): LinkActionType
    getDest(): LinkDest
    getExcludeResetFields(): boolean
    getFilename(): string
    getHideList(): Layer[]
    getName(): string
    getParams(): string
    getShowList(): Layer[]
    getToggleList(): Layer[]
    getUri(): string

    // Class property signals of EvinceDocument-3.0.EvinceDocument.LinkAction

    connect(sigName: "notify::dest", callback: (...args: any[]) => void): number
    on(sigName: "notify::dest", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dest", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dest", ...args: any[]): void
    connect(sigName: "notify::exclude-reset-fields", callback: (...args: any[]) => void): number
    on(sigName: "notify::exclude-reset-fields", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::exclude-reset-fields", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::exclude-reset-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::exclude-reset-fields", ...args: any[]): void
    connect(sigName: "notify::filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::hide-list", callback: (...args: any[]) => void): number
    on(sigName: "notify::hide-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hide-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hide-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hide-list", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::params", callback: (...args: any[]) => void): number
    on(sigName: "notify::params", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::params", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::params", ...args: any[]): void
    connect(sigName: "notify::reset-fields", callback: (...args: any[]) => void): number
    on(sigName: "notify::reset-fields", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reset-fields", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reset-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reset-fields", ...args: any[]): void
    connect(sigName: "notify::show-list", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-list", ...args: any[]): void
    connect(sigName: "notify::toggle-list", callback: (...args: any[]) => void): number
    on(sigName: "notify::toggle-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::toggle-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::toggle-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::toggle-list", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class LinkAction extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkAction

    static name: string
    static $gtype: GObject.GType<LinkAction>

    // Constructors of EvinceDocument-3.0.EvinceDocument.LinkAction

    constructor(config?: LinkAction_ConstructProps) 
    static newDest(dest: LinkDest): LinkAction
    static newExternalUri(uri: string): LinkAction
    static newLaunch(filename: string, params: string): LinkAction
    static newLayersState(showList: Layer[], hideList: Layer[], toggleList: Layer[]): LinkAction
    static newNamed(name: string): LinkAction
    static newRemote(dest: LinkDest, filename: string): LinkAction
    _init(config?: LinkAction_ConstructProps): void
}

interface LinkDest_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of EvinceDocument-3.0.EvinceDocument.LinkDest

    bottom?: number | null
    change?: number | null
    left?: number | null
    named?: string | null
    page?: number | null
    pageLabel?: string | null
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
    readonly pageLabel: string
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
    getBottom(): number
    getDestType(): LinkDestType
    getLeft(changeLeft: boolean): number
    getNamedDest(): string
    getPage(): number
    getPageLabel(): string
    getRight(): number
    getTop(changeTop: boolean): number
    getZoom(changeZoom: boolean): number

    // Class property signals of EvinceDocument-3.0.EvinceDocument.LinkDest

    connect(sigName: "notify::bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bottom", ...args: any[]): void
    connect(sigName: "notify::change", callback: (...args: any[]) => void): number
    on(sigName: "notify::change", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::change", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::change", ...args: any[]): void
    connect(sigName: "notify::left", callback: (...args: any[]) => void): number
    on(sigName: "notify::left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::left", ...args: any[]): void
    connect(sigName: "notify::named", callback: (...args: any[]) => void): number
    on(sigName: "notify::named", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::named", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::named", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::named", ...args: any[]): void
    connect(sigName: "notify::page", callback: (...args: any[]) => void): number
    on(sigName: "notify::page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::page-label", callback: (...args: any[]) => void): number
    on(sigName: "notify::page-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::page-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::page-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::page-label", ...args: any[]): void
    connect(sigName: "notify::right", callback: (...args: any[]) => void): number
    on(sigName: "notify::right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::right", ...args: any[]): void
    connect(sigName: "notify::top", callback: (...args: any[]) => void): number
    on(sigName: "notify::top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::top", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::zoom", callback: (...args: any[]) => void): number
    on(sigName: "notify::zoom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::zoom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::zoom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::zoom", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class LinkDest extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkDest

    static name: string
    static $gtype: GObject.GType<LinkDest>

    // Constructors of EvinceDocument-3.0.EvinceDocument.LinkDest

    constructor(config?: LinkDest_ConstructProps) 
    static newFit(page: number): LinkDest
    static newFith(page: number, top: number, changeTop: boolean): LinkDest
    static newFitr(page: number, left: number, bottom: number, right: number, top: number): LinkDest
    static newFitv(page: number, left: number, changeLeft: boolean): LinkDest
    static newNamed(namedDest: string): LinkDest
    static newPage(page: number): LinkDest
    static newPageLabel(pageLabel: string): LinkDest
    static newXyz(page: number, left: number, top: number, zoom: number, changeLeft: boolean, changeTop: boolean, changeZoom: boolean): LinkDest
    _init(config?: LinkDest_ConstructProps): void
}

interface Media_ConstructProps extends GObject.Object_ConstructProps {
}

interface Media {

    // Own fields of EvinceDocument-3.0.EvinceDocument.Media

    baseInstance: GObject.Object
    priv: MediaPrivate

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Media

    getPageIndex(): number
    getShowControls(): boolean
    getUri(): string
    setShowControls(showControls: boolean): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Media

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Media extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Media

    static name: string
    static $gtype: GObject.GType<Media>

    // Constructors of EvinceDocument-3.0.EvinceDocument.Media

    constructor(config?: Media_ConstructProps) 
    static newForUri(page: Page, uri: string): Media
    _init(config?: Media_ConstructProps): void
}

interface Page_ConstructProps extends GObject.Object_ConstructProps {
}

interface Page {

    // Own fields of EvinceDocument-3.0.EvinceDocument.Page

    baseInstance: GObject.Object
    index: number
    backendPage: BackendPage
    backendDestroyFunc: BackendPageDestroyFunc

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Page

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    targetWidth: number
    targetHeight: number

    // Owm methods of EvinceDocument-3.0.EvinceDocument.RenderContext

    computeScaledSize(widthPoints: number, heightPoints: number, scaledWidth: number, scaledHeight: number): void
    computeScales(widthPoints: number, heightPoints: number, scaleX: number, scaleY: number): void
    computeTransformedSize(widthPoints: number, heightPoints: number, transformedWidth: number, transformedHeight: number): void
    setPage(page: Page): void
    setRotation(rotation: number): void
    setScale(scale: number): void
    setTargetSize(targetWidth: number, targetHeight: number): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.RenderContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    durationReal?: number | null
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
    durationReal: number
    rectangular: boolean
    scale: number
    type: TransitionEffectType

    // Own fields of EvinceDocument-3.0.EvinceDocument.TransitionEffect

    parentInstance: GObject.Object

    // Class property signals of EvinceDocument-3.0.EvinceDocument.TransitionEffect

    connect(sigName: "notify::alignment", callback: (...args: any[]) => void): number
    on(sigName: "notify::alignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::alignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::angle", callback: (...args: any[]) => void): number
    on(sigName: "notify::angle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::angle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::angle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::angle", ...args: any[]): void
    connect(sigName: "notify::direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::direction", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::duration-real", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration-real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration-real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration-real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration-real", ...args: any[]): void
    connect(sigName: "notify::rectangular", callback: (...args: any[]) => void): number
    on(sigName: "notify::rectangular", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rectangular", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rectangular", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rectangular", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    baseIface: GObject.TypeInterface
    renderFinished: (renderer: AsyncRenderer, pixbuf: GdkPixbuf.Pixbuf) => void
    renderPixbuf: (renderer: AsyncRenderer, page: number, scale: number, rotation: number) => void
}

abstract class AsyncRendererInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AsyncRendererInterface

    static name: string
}

interface AttachmentClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.AttachmentClass

    baseClass: GObject.ObjectClass
}

abstract class AttachmentClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AttachmentClass

    static name: string
}

interface DocumentAnnotationsInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentAnnotationsInterface

    baseIface: GObject.TypeInterface
    getAnnotations: (documentAnnots: DocumentAnnotations, page: Page) => MappingList
    documentIsModified: (documentAnnots: DocumentAnnotations) => boolean
    addAnnotation: (documentAnnots: DocumentAnnotations, annot: Annotation, rect: Rectangle) => void
    saveAnnotation: (documentAnnots: DocumentAnnotations, annot: Annotation, mask: AnnotationsSaveMask) => void
    removeAnnotation: (documentAnnots: DocumentAnnotations, annot: Annotation) => void
    overMarkup: (documentAnnots: DocumentAnnotations, annot: Annotation, x: number, y: number) => AnnotationsOverMarkup
}

abstract class DocumentAnnotationsInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentAnnotationsInterface

    static name: string
}

interface DocumentAttachmentsInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentAttachmentsInterface

    baseIface: GObject.TypeInterface
    hasAttachments: (documentAttachments: DocumentAttachments) => boolean
    getAttachments: (documentAttachments: DocumentAttachments) => Attachment[]
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

    baseClass: GObject.ObjectClass
    load: (document: Document, uri: string) => boolean
    save: (document: Document, uri: string) => boolean
    getNPages: (document: Document) => number
    getPage: (document: Document, index: number) => Page
    getPageSize: (document: Document, page: Page) => [ /* width */ number, /* height */ number ]
    getPageLabel: (document: Document, page: Page) => string
    render: (document: Document, rc: RenderContext) => cairo.Surface
    getThumbnail: (document: Document, rc: RenderContext) => GdkPixbuf.Pixbuf
    getInfo: (document: Document) => DocumentInfo
    getBackendInfo: (document: Document, info: DocumentBackendInfo) => boolean
    supportSynctex: (document: Document) => boolean
    loadStream: (document: Document, stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null) => boolean
    loadGfile: (document: Document, file: Gio.File, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null) => boolean
    getThumbnailSurface: (document: Document, rc: RenderContext) => cairo.Surface
    loadFd: (document: Document, fd: number, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null) => boolean
}

abstract class DocumentClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentClass

    static name: string
}

interface DocumentFindInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentFindInterface

    baseIface: GObject.TypeInterface
    findText: (documentFind: DocumentFind, page: Page, text: string, caseSensitive: boolean) => Rectangle[]
    findTextWithOptions: (documentFind: DocumentFind, page: Page, text: string, options: FindOptions) => Rectangle[]
    getSupportedOptions: (documentFind: DocumentFind) => FindOptions
}

abstract class DocumentFindInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentFindInterface

    static name: string
}

interface DocumentFontsInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentFontsInterface

    baseIface: GObject.TypeInterface
    scan: (documentFonts: DocumentFonts, nPages: number) => boolean
    getProgress: (documentFonts: DocumentFonts) => number
    fillModel: (documentFonts: DocumentFonts, model: Gtk.TreeModel) => void
    getFontsSummary: (documentFonts: DocumentFonts) => string
}

abstract class DocumentFontsInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentFontsInterface

    static name: string
}

interface DocumentFormsInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentFormsInterface

    baseIface: GObject.TypeInterface
    getFormFields: (documentForms: DocumentForms, page: Page) => MappingList
    documentIsModified: (documentForms: DocumentForms) => boolean
    formFieldTextGetText: (documentForms: DocumentForms, field: FormField) => string
    formFieldTextSetText: (documentForms: DocumentForms, field: FormField, text: string) => void
    formFieldButtonGetState: (documentForms: DocumentForms, field: FormField) => boolean
    formFieldButtonSetState: (documentForms: DocumentForms, field: FormField, state: boolean) => void
    formFieldChoiceGetItem: (documentForms: DocumentForms, field: FormField, index: number) => string
    formFieldChoiceGetNItems: (documentForms: DocumentForms, field: FormField) => number
    formFieldChoiceIsItemSelected: (documentForms: DocumentForms, field: FormField, index: number) => boolean
    formFieldChoiceSelectItem: (documentForms: DocumentForms, field: FormField, index: number) => void
    formFieldChoiceToggleItem: (documentForms: DocumentForms, field: FormField, index: number) => void
    formFieldChoiceUnselectAll: (documentForms: DocumentForms, field: FormField) => void
    formFieldChoiceSetText: (documentForms: DocumentForms, field: FormField, text: string) => void
    formFieldChoiceGetText: (documentForms: DocumentForms, field: FormField) => string
    resetForm: (documentForms: DocumentForms, action: LinkAction) => void
}

abstract class DocumentFormsInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentFormsInterface

    static name: string
}

interface DocumentImagesInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentImagesInterface

    baseIface: GObject.TypeInterface
    getImageMapping: (documentImages: DocumentImages, page: Page) => MappingList
    getImage: (documentImages: DocumentImages, image: Image) => GdkPixbuf.Pixbuf
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
    creationDate: GLib.Time
    modifiedDate: GLib.Time
    layout: DocumentLayout
    mode: DocumentMode
    uiHints: number
    permissions: number
    nPages: number
    paperHeight: number
    paperWidth: number
    license: DocumentLicense
    containsJs: DocumentContainsJS
    fieldsMask: number

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentInfo

    copy(): DocumentInfo
    /**
     * Frees `info`.
     */
    free(): void
    getCreatedDatetime(): GLib.DateTime | null
    getModifiedDatetime(): GLib.DateTime | null
    setFromXmp(xmp: string, size: number): boolean
    takeCreatedDatetime(datetime: GLib.DateTime): void
    takeModifiedDatetime(datetime: GLib.DateTime): void
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

    baseIface: GObject.TypeInterface
    hasLayers: (documentLayers: DocumentLayers) => boolean
    getLayers: (documentLayers: DocumentLayers) => Gtk.TreeModel
    showLayer: (documentLayers: DocumentLayers, layer: Layer) => void
    hideLayer: (documentLayers: DocumentLayers, layer: Layer) => void
    layerIsVisible: (documentLayers: DocumentLayers, layer: Layer) => boolean
}

abstract class DocumentLayersInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentLayersInterface

    static name: string
}

interface DocumentLicense {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentLicense

    text: string
    uri: string
    webStatement: string

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentLicense

    copy(): DocumentLicense
    /**
     * Frees `license`.
     */
    free(): void
    getText(): string | null
    getUri(): string | null
    getWebStatement(): string | null
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

    baseIface: GObject.TypeInterface
    hasDocumentLinks: (documentLinks: DocumentLinks) => boolean
    getLinksModel: (documentLinks: DocumentLinks) => Gtk.TreeModel
    getLinks: (documentLinks: DocumentLinks, page: Page) => MappingList
    findLinkDest: (documentLinks: DocumentLinks, linkName: string) => LinkDest
    findLinkPage: (documentLinks: DocumentLinks, linkName: string) => number
}

abstract class DocumentLinksInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentLinksInterface

    static name: string
}

interface DocumentMediaInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentMediaInterface

    baseIface: GObject.TypeInterface
    getMediaMapping: (documentMedia: DocumentMedia, page: Page) => MappingList
}

abstract class DocumentMediaInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentMediaInterface

    static name: string
}

interface DocumentPrintInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentPrintInterface

    baseIface: GObject.TypeInterface
    printPage: (documentPrint: DocumentPrint, page: Page, cr: cairo.Context) => void
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

    baseIface: GObject.TypeInterface
    hasDocumentSecurity: (documentSecurity: DocumentSecurity) => boolean
    setPassword: (documentSecurity: DocumentSecurity, password: string) => void
}

abstract class DocumentSecurityInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentSecurityInterface

    static name: string
}

interface DocumentTextInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentTextInterface

    baseIface: GObject.TypeInterface
    getTextMapping: (documentText: DocumentText, page: Page) => cairo.Region
    getText: (documentText: DocumentText, page: Page) => string
    getTextLayout: (documentText: DocumentText, page: Page, areas: Rectangle, nAreas: number) => boolean
    getTextAttrs: (documentText: DocumentText, page: Page) => Pango.AttrList
}

abstract class DocumentTextInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentTextInterface

    static name: string
}

interface DocumentTransitionInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentTransitionInterface

    baseIface: GObject.TypeInterface
    getPageDuration: (documentTrans: DocumentTransition, page: number) => number
    getEffect: (documentTrans: DocumentTransition, page: number) => TransitionEffect
}

abstract class DocumentTransitionInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentTransitionInterface

    static name: string
}

interface FileExporterContext {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FileExporterContext

    format: FileExporterFormat
    filename: string
    firstPage: number
    lastPage: number
    paperWidth: number
    paperHeight: number
    duplex: boolean
    pagesPerSheet: number
}

class FileExporterContext {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FileExporterContext

    static name: string
}

interface FileExporterInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FileExporterInterface

    baseIface: GObject.TypeInterface
    begin: (exporter: FileExporter, fc: FileExporterContext) => void
    beginPage: (exporter: FileExporter) => void
    doPage: (exporter: FileExporter, rc: RenderContext) => void
    endPage: (exporter: FileExporter) => void
    end: (exporter: FileExporter) => void
    getCapabilities: (exporter: FileExporter) => FileExporterCapabilities
}

abstract class FileExporterInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FileExporterInterface

    static name: string
}

interface FormFieldButtonClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldButtonClass

    parentClass: FormFieldClass
}

abstract class FormFieldButtonClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldButtonClass

    static name: string
}

interface FormFieldChoiceClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldChoiceClass

    parentClass: FormFieldClass
}

abstract class FormFieldChoiceClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldChoiceClass

    static name: string
}

interface FormFieldClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldClass

    parentClass: GObject.ObjectClass
}

abstract class FormFieldClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldClass

    static name: string
}

interface FormFieldSignatureClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldSignatureClass

    parentClass: FormFieldClass
}

abstract class FormFieldSignatureClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldSignatureClass

    static name: string
}

interface FormFieldTextClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldTextClass

    parentClass: FormFieldClass
}

abstract class FormFieldTextClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldTextClass

    static name: string
}

interface ImageClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.ImageClass

    baseClass: GObject.ObjectClass
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

    baseClass: GObject.ObjectClass
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
    findCustom(data: object | null, func: GLib.CompareFunc): Mapping
    get(x: number, y: number): Mapping
    getData(x: number, y: number): object | null
    getList(): Mapping[]
    getPage(): number
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

    constructor(page: number, list: Mapping[], dataDestroyFunc: GLib.DestroyNotify) 
    static new(page: number, list: Mapping[], dataDestroyFunc: GLib.DestroyNotify): MappingList
}

interface MediaClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.MediaClass

    baseClass: GObject.ObjectClass
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

    baseClass: GObject.ObjectClass
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

    baseIface: GObject.TypeInterface
    renderSelection: (selection: Selection, rc: RenderContext, surface: cairo.Surface, points: Rectangle, oldPoints: Rectangle, style: SelectionStyle, text: Gdk.Color, base: Gdk.Color) => void
    getSelectedText: (selection: Selection, page: Page, style: SelectionStyle, points: Rectangle) => string
    getSelectionRegion: (selection: Selection, rc: RenderContext, style: SelectionStyle, points: Rectangle) => cairo.Region
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

    parentClass: GObject.ObjectClass
}

abstract class TransitionEffectClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.TransitionEffectClass

    static name: string
}

interface TypeInfo {

    // Own fields of EvinceDocument-3.0.EvinceDocument.TypeInfo

    desc: string
    mimeTypes: string
}

class TypeInfo {

    // Own properties of EvinceDocument-3.0.EvinceDocument.TypeInfo

    static name: string
}

    type BackendPage = object
    type BackendPageDestroyFunc = GLib.DestroyNotify
}
export default EvinceDocument;