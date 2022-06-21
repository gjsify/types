// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GXPS-0.1
 */

import type * as Gjs from './Gjs';
import type cairo from './cairo-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GXPS {

/**
 * Error codes returned by GXPS functions.
 */
enum Error {
    /**
     * Internal source file not found in XPS file
     */
    SOURCE_NOT_FOUND,
    /**
     * Error loading fonts
     */
    FONT,
    /**
     * Error loading images
     */
    IMAGE,
}
/**
 * Error codes returned by #GXPSFile functions.
 */
enum FileError {
    /**
     * The XPS is invalid.
     */
    FILE_ERROR_INVALID,
}
/**
 * Error codes returned by #GXPSPage functions
 */
enum PageError {
    /**
     * The page is invalid.
     */
    INVALID,
    /**
     * Error rendering the page.
     */
    RENDER,
    /**
     * Anchor is invalid for the page.
     */
    INVALID_ANCHOR,
}
/**
 * The major version number of the GXPS header files (e.g. in GXPS version
 * 0.1.2 this is 0.)
 */
const MAJOR_VERSION: number
/**
 * The micro version number of the GXPS header files (e.g. in GXPS version
 * 0.1.2 this is 2.)
 */
const MICRO_VERSION: number
/**
 * The major version number of the GXPS header files (e.g. in GXPS version
 * 0.1.2 this is 1.)
 */
const MINOR_VERSION: number
/**
 * The version number of the GXPS library as a string
 */
const VERSION_STRING: string
function error_quark(): GLib.Quark
interface CoreProperties_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GXPS-0.1.GXPS.CoreProperties

    source?: string | null
}

interface CoreProperties extends Gio.Initable {

    // Own properties of GXPS-0.1.GXPS.CoreProperties

    readonly source: string

    // Own fields of GXPS-0.1.GXPS.CoreProperties

    parent: GObject.Object

    // Owm methods of GXPS-0.1.GXPS.CoreProperties

    /**
     * Get the category.
     */
    get_category(): string
    /**
     * Get the status of the content (e.g. Draft, Reviewed, Final)
     */
    get_content_status(): string
    /**
     * Get the type of content represented, generally defined by a
     * specific use and intended audience. This is not the MIME-Type.
     */
    get_content_type(): string
    /**
     * Get the creating date.
     */
    get_created(): number
    /**
     * Get the creator.
     */
    get_creator(): string
    /**
     * Get the description.
     */
    get_description(): string
    /**
     * Get the unique identifier.
     */
    get_identifier(): string
    /**
     * Get the keywords.
     */
    get_keywords(): string
    /**
     * Get the language.
     */
    get_language(): string
    /**
     * Get the user who performed the last modification.
     */
    get_last_modified_by(): string
    /**
     * Get the date of the last printing.
     */
    get_last_printed(): number
    /**
     * Get the last modification date.
     */
    get_modified(): number
    /**
     * Get the revision number.
     */
    get_revision(): string
    /**
     * Get the subject.
     */
    get_subject(): string
    /**
     * Get the title.
     */
    get_title(): string
    /**
     * Get the version number.
     */
    get_version(): string

    // Class property signals of GXPS-0.1.GXPS.CoreProperties

    connect(sigName: "notify::source", callback: (($obj: CoreProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: CoreProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>GXPSCoreProperties</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
class CoreProperties extends GObject.Object {

    // Own properties of GXPS-0.1.GXPS.CoreProperties

    static name: string
    static $gtype: GObject.GType<CoreProperties>

    // Constructors of GXPS-0.1.GXPS.CoreProperties

    constructor(config?: CoreProperties_ConstructProps) 
    _init(config?: CoreProperties_ConstructProps): void
}

interface Document_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GXPS-0.1.GXPS.Document

    source?: string | null
}

interface Document extends Gio.Initable {

    // Own properties of GXPS-0.1.GXPS.Document

    readonly source: string

    // Own fields of GXPS-0.1.GXPS.Document

    parent: GObject.Object

    // Owm methods of GXPS-0.1.GXPS.Document

    /**
     * Gets the number of pages in `doc`.
     */
    get_n_pages(): number
    /**
     * Creates a new #GXPSPage representing the page at
     * index `n_doc` in `doc` document.
     * @param n_page the index of the page to get
     */
    get_page(n_page: number): Page
    /**
     * Gets the index of the page in `doc` where the given
     * anchor is.
     * @param anchor the name of an anchor
     */
    get_page_for_anchor(anchor: string): number
    /**
     * Gets the typical size of the page at index `n_page` in `doc` document.
     * This function is useful to get the advisory size of pages in a document
     * without creating #GXPSPage objects. This page size might be different than
     * the actual page size so page dimension might need to be updated once the
     * page is loaded. Advisory page sizes are not always available in `doc,`
     * in which case this function returns %FALSE.
     * To get the authoritative size of a page you should use gxps_page_get_size()
     * instead.
     * @param n_page the index of a page in `doc`
     */
    get_page_size(n_page: number): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /**
     * Creates a new #GXPSDocumentStructure representing the document
     * structure of `doc`.
     */
    get_structure(): DocumentStructure

    // Class property signals of GXPS-0.1.GXPS.Document

    connect(sigName: "notify::source", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>GXPSDocument</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
class Document extends GObject.Object {

    // Own properties of GXPS-0.1.GXPS.Document

    static name: string
    static $gtype: GObject.GType<Document>

    // Constructors of GXPS-0.1.GXPS.Document

    constructor(config?: Document_ConstructProps) 
    _init(config?: Document_ConstructProps): void
}

interface DocumentStructure_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GXPS-0.1.GXPS.DocumentStructure

    source?: string | null
}

interface DocumentStructure {

    // Own properties of GXPS-0.1.GXPS.DocumentStructure

    readonly source: string

    // Own fields of GXPS-0.1.GXPS.DocumentStructure

    parent: GObject.Object

    // Owm methods of GXPS-0.1.GXPS.DocumentStructure

    /**
     * Whether `structure` has an outline or not.
     */
    has_outline(): boolean

    // Class property signals of GXPS-0.1.GXPS.DocumentStructure

    connect(sigName: "notify::source", callback: (($obj: DocumentStructure, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: DocumentStructure, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>GXPSDocumentStructure</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
class DocumentStructure extends GObject.Object {

    // Own properties of GXPS-0.1.GXPS.DocumentStructure

    static name: string
    static $gtype: GObject.GType<DocumentStructure>

    // Constructors of GXPS-0.1.GXPS.DocumentStructure

    constructor(config?: DocumentStructure_ConstructProps) 
    _init(config?: DocumentStructure_ConstructProps): void
    /**
     * Initializes `iter` to the root item of the outline contained by `structure`
     * and a associates it with `structure`.
     * 
     * Here is a simple example of some code that walks the full outline:
     * 
     * <informalexample><programlisting>
     * static void
     * walk_outline (GXPSOutlineIter *iter)
     * {
     *     do {
     *         GXPSOutlineIter child_iter;
     *         const gchar    *description = gxps_outline_iter_get_description (iter);
     *         GXPSLinkTarget *target = gxps_outline_iter_get_target (iter);
     * 
     *         /<!-- -->* Do something with description and taregt *<!-- -->/
     *         if (gxps_outline_iter_children (&child_iter, iter))
     *             walk_outline (&child_iter);
     *     } while (gxps_outline_iter_next (iter));
     * }
     * ...
     * {
     *     GXPSOutlineIter iter;
     *     if (gxps_document_structure_outline_iter_init (&iter, structure))
     *         walk_outline (&iter);
     * }
     * </programlisting></informalexample>
     * @param iter an uninitialized #GXPSOutlineIter
     * @param structure a #GXPSDocumentStructure
     */
    static outline_iter_init(iter: OutlineIter, structure: DocumentStructure): boolean
}

interface File_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GXPS-0.1.GXPS.File

    file?: Gio.File | null
}

interface File extends Gio.Initable {

    // Own properties of GXPS-0.1.GXPS.File

    readonly file: Gio.File

    // Own fields of GXPS-0.1.GXPS.File

    parent: GObject.Object

    // Owm methods of GXPS-0.1.GXPS.File

    /**
     * Create a #GXPSCoreProperties object containing the metadata
     * of `xpsm,` or %NULL in case of error or if the #GXPSFile
     * doesn't contain core properties.
     */
    get_core_properties(): CoreProperties
    /**
     * Creates a new #GXPSDocument representing the document at
     * index `n_doc` in `xps` file.
     * @param n_doc the index of the document to get
     */
    get_document(n_doc: number): Document
    /**
     * Gets the index of the document in `xps` pointed by `target`.
     * If the #GXPSLinkTarget does not reference a document, or
     * referenced document is not found in `xps` file -1 will be
     * returned. In this case you can look for the page pointed by
     * the link target by calling gxps_document_get_page_for_anchor()
     * with the anchor of the #GXPSLinkTarget for every document in
     * `xps`.
     * @param target a #GXPSLinkTarget
     */
    get_document_for_link_target(target: LinkTarget): number
    /**
     * Gets the number of documents in `xps`.
     */
    get_n_documents(): number

    // Class property signals of GXPS-0.1.GXPS.File

    connect(sigName: "notify::file", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>GXPSFile</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
class File extends GObject.Object {

    // Own properties of GXPS-0.1.GXPS.File

    static name: string
    static $gtype: GObject.GType<File>

    // Constructors of GXPS-0.1.GXPS.File

    constructor(config?: File_ConstructProps) 
    /**
     * Creates a new #GXPSFile for the given #GFile.
     * @constructor 
     * @param filename a #GFile
     */
    constructor(filename: Gio.File) 
    /**
     * Creates a new #GXPSFile for the given #GFile.
     * @constructor 
     * @param filename a #GFile
     */
    static new(filename: Gio.File): File
    _init(config?: File_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Page_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GXPS-0.1.GXPS.Page

    source?: string | null
}

interface Page extends Gio.Initable {

    // Own properties of GXPS-0.1.GXPS.Page

    readonly source: string

    // Own fields of GXPS-0.1.GXPS.Page

    parent: GObject.Object

    // Owm methods of GXPS-0.1.GXPS.Page

    /**
     * Gets the rectangle of `page` corresponding to the destination
     * of the given anchor. If `anchor` is not found in `page,` %FALSE
     * will be returned and `error` will contain %GXPS_PAGE_ERROR_INVALID_ANCHOR
     * @param anchor the name of an anchor in `page`
     */
    get_anchor_destination(anchor: string): [ /* returnType */ boolean, /* area */ cairo.Rectangle ]
    /**
     * Gets a list of #GXPSLink items that map from a location
     * in `page` to a #GXPSLinkTarget. Items in the list should
     * be freed with gxps_link_free() and the list itself with
     * g_list_free() when done.
     */
    get_links(): Link[]
    /**
     * Gets the size of the page.
     */
    get_size(): [ /* width */ number, /* height */ number ]
    /**
     * Render the page to the given cairo context. In case of
     * error, %FALSE is returned and `error` is filled with
     * information about error.
     * @param cr a cairo context to render to
     */
    render(cr: cairo.Context): boolean

    // Class property signals of GXPS-0.1.GXPS.Page

    connect(sigName: "notify::source", callback: (($obj: Page, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: Page, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>GXPSPage</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
class Page extends GObject.Object {

    // Own properties of GXPS-0.1.GXPS.Page

    static name: string
    static $gtype: GObject.GType<Page>

    // Constructors of GXPS-0.1.GXPS.Page

    constructor(config?: Page_ConstructProps) 
    _init(config?: Page_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface CorePropertiesClass {

    // Own fields of GXPS-0.1.GXPS.CorePropertiesClass

    parent_class: GObject.ObjectClass
}

abstract class CorePropertiesClass {

    // Own properties of GXPS-0.1.GXPS.CorePropertiesClass

    static name: string
}

interface CorePropertiesPrivate {
}

class CorePropertiesPrivate {

    // Own properties of GXPS-0.1.GXPS.CorePropertiesPrivate

    static name: string
}

interface DocumentClass {

    // Own fields of GXPS-0.1.GXPS.DocumentClass

    parent_class: GObject.ObjectClass
}

abstract class DocumentClass {

    // Own properties of GXPS-0.1.GXPS.DocumentClass

    static name: string
}

interface DocumentPrivate {
}

class DocumentPrivate {

    // Own properties of GXPS-0.1.GXPS.DocumentPrivate

    static name: string
}

interface DocumentStructureClass {

    // Own fields of GXPS-0.1.GXPS.DocumentStructureClass

    parent_class: GObject.ObjectClass
}

abstract class DocumentStructureClass {

    // Own properties of GXPS-0.1.GXPS.DocumentStructureClass

    static name: string
}

interface DocumentStructurePrivate {
}

class DocumentStructurePrivate {

    // Own properties of GXPS-0.1.GXPS.DocumentStructurePrivate

    static name: string
}

interface FileClass {

    // Own fields of GXPS-0.1.GXPS.FileClass

    parent_class: GObject.ObjectClass
}

abstract class FileClass {

    // Own properties of GXPS-0.1.GXPS.FileClass

    static name: string
}

interface FilePrivate {
}

class FilePrivate {

    // Own properties of GXPS-0.1.GXPS.FilePrivate

    static name: string
}

interface Link {

    // Owm methods of GXPS-0.1.GXPS.Link

    /**
     * Creates a copy of a #GXPSLink.
     */
    copy(): Link
    /**
     * Frees a #GXPSLink.
     */
    free(): void
    /**
     * Gets the rectangle of a page where the #GXPSLinkTarget
     * mapped by `link` is.
     */
    get_area(): /* area */ cairo.Rectangle
    /**
     * Gets the #GXPSLinkTarget mapped by `link`.
     */
    get_target(): LinkTarget
}

/**
 * GXPSLink maps a location in a page to a #GXPSLinkTarget.
 * @record 
 */
class Link {

    // Own properties of GXPS-0.1.GXPS.Link

    static name: string
}

interface LinkTarget {

    // Owm methods of GXPS-0.1.GXPS.LinkTarget

    /**
     * Creates a copy of a #GXPSLinkTarget
     */
    copy(): LinkTarget
    /**
     * Frees a #GXPSLinkTarget.
     */
    free(): void
    /**
     * Gets the anchor name `target` links to. If `target` is
     * an internal #GXPSLinkTarget this function always returns
     * and anchor, if it is external it might return %NULL if the
     * `target` does not have an anchor.
     */
    get_anchor(): string
    /**
     * Gets the URI `target` links to.
     */
    get_uri(): string
    /**
     * Gets whether `target` destination is internal or not.
     */
    is_internal(): boolean
}

/**
 * GXPSLinkTarget represents a hyperlink source.
 * @record 
 */
class LinkTarget {

    // Own properties of GXPS-0.1.GXPS.LinkTarget

    static name: string
}

interface OutlineIter {

    // Owm methods of GXPS-0.1.GXPS.OutlineIter

    /**
     * Initializes `iter` to the first child item of `parent`.
     * See gxps_document_structure_outline_iter_init() for
     * more details.
     * @param parent an initialized #GXPSOutlineIter
     */
    children(parent: OutlineIter): boolean
    /**
     * Gets the description of the outline item associated with `iter`.
     * See gxps_document_structure_outline_iter_init() for
     * more details.
     */
    get_description(): string
    /**
     * Gets the #GXPSLinkTarget of the outline item associated with `iter`.
     * See gxps_document_structure_outline_iter_init() for
     * more details.
     */
    get_target(): LinkTarget
    /**
     * Advances `iter` to the next item at the current level.
     * See gxps_document_structure_outline_iter_init() for
     * more details.
     */
    next(): boolean
}

/**
 * GXPSOutlineIter represents an iterator that can be
 * used to iterate over the items of an outline
 * contained in a #GXPSDocumentStructure
 * @record 
 */
class OutlineIter {

    // Own properties of GXPS-0.1.GXPS.OutlineIter

    static name: string
}

interface PageClass {

    // Own fields of GXPS-0.1.GXPS.PageClass

    parent_class: GObject.ObjectClass
}

abstract class PageClass {

    // Own properties of GXPS-0.1.GXPS.PageClass

    static name: string
}

interface PagePrivate {
}

class PagePrivate {

    // Own properties of GXPS-0.1.GXPS.PagePrivate

    static name: string
}

}
export default GXPS;