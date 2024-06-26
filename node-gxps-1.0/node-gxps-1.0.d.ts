
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gxps-1.0-import.d.ts';
    
/**
 * Gxps-1.0
 */

import type cairo from '@girs/node-cairo-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type Gio from '@girs/node-gio-2.0';

export namespace Gxps {

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
function errorQuark(): GLib.Quark
module CoreProperties {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gxps-1.0.Gxps.CoreProperties

        source?: string | null
    }

}

interface CoreProperties extends Gio.Initable {

    // Own properties of Gxps-1.0.Gxps.CoreProperties

    readonly source: string | null
    __gtype__: number

    // Own fields of Gxps-1.0.Gxps.CoreProperties

    parent: GObject.Object

    // Owm methods of Gxps-1.0.Gxps.CoreProperties

    /**
     * Get the category.
     * @returns a string containing the category or %NULL
     */
    getCategory(): string
    /**
     * Get the status of the content (e.g. Draft, Reviewed, Final)
     * @returns a string containing the status of the content or %NULL
     */
    getContentStatus(): string
    /**
     * Get the type of content represented, generally defined by a
     * specific use and intended audience. This is not the MIME-Type.
     * @returns a string containing the type of content or %NULL
     */
    getContentType(): string
    /**
     * Get the creating date.
     * @returns the creating date as a <type>time_t</type> or -1.
     */
    getCreated(): number
    /**
     * Get the creator.
     * @returns a string containing the creator or %NULL
     */
    getCreator(): string
    /**
     * Get the description.
     * @returns a string containing the description or %NULL
     */
    getDescription(): string
    /**
     * Get the unique identifier.
     * @returns a string containing the identifier or %NULL
     */
    getIdentifier(): string
    /**
     * Get the keywords.
     * @returns a string containing the keywords or %NULL
     */
    getKeywords(): string
    /**
     * Get the language.
     * @returns a string containing the language or %NULL
     */
    getLanguage(): string
    /**
     * Get the user who performed the last modification.
     * @returns a string containing the user who performed the    last modification or %NULL
     */
    getLastModifiedBy(): string
    /**
     * Get the date of the last printing.
     * @returns the date of the last printing as a <type>time_t</type> or -1.
     */
    getLastPrinted(): number
    /**
     * Get the last modification date.
     * @returns the modification date as a <type>time_t</type> or -1.
     */
    getModified(): number
    /**
     * Get the revision number.
     * @returns a string containing the revision number or %NULL
     */
    getRevision(): string
    /**
     * Get the subject.
     * @returns a string containing the subject or %NULL
     */
    getSubject(): string
    /**
     * Get the title.
     * @returns a string containing the title or %NULL
     */
    getTitle(): string
    /**
     * Get the version number.
     * @returns a string containing the version number or %NULL
     */
    getVersion(): string

    // Class property signals of Gxps-1.0.Gxps.CoreProperties

    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>GXPSCoreProperties</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
class CoreProperties extends GObject.Object {

    // Own properties of Gxps-1.0.Gxps.CoreProperties

    static name: string

    // Constructors of Gxps-1.0.Gxps.CoreProperties

    constructor(config?: CoreProperties.ConstructorProperties) 
    _init(config?: CoreProperties.ConstructorProperties): void
}

module Document {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gxps-1.0.Gxps.Document

        source?: string | null
    }

}

interface Document extends Gio.Initable {

    // Own properties of Gxps-1.0.Gxps.Document

    readonly source: string | null
    __gtype__: number

    // Own fields of Gxps-1.0.Gxps.Document

    parent: GObject.Object

    // Owm methods of Gxps-1.0.Gxps.Document

    /**
     * Gets the number of pages in `doc`.
     * @returns the number of pages.
     */
    getNPages(): number
    /**
     * Creates a new #GXPSPage representing the page at
     * index `n_doc` in `doc` document.
     * @param nPage the index of the page to get
     * @returns a new #GXPSPage or %NULL on error.     Free the returned object with g_object_unref().
     */
    getPage(nPage: number): Page
    /**
     * Gets the index of the page in `doc` where the given
     * anchor is.
     * @param anchor the name of an anchor
     * @returns the page index of the given anchor.
     */
    getPageForAnchor(anchor: string): number
    /**
     * Gets the typical size of the page at index `n_page` in `doc` document.
     * This function is useful to get the advisory size of pages in a document
     * without creating #GXPSPage objects. This page size might be different than
     * the actual page size so page dimension might need to be updated once the
     * page is loaded. Advisory page sizes are not always available in `doc,`
     * in which case this function returns %FALSE.
     * To get the authoritative size of a page you should use gxps_page_get_size()
     * instead.
     * @param nPage the index of a page in `doc`
     * @returns %TRUE if the page size information is available in @doc,     %FALSE otherwise.
     */
    getPageSize(nPage: number): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /**
     * Creates a new #GXPSDocumentStructure representing the document
     * structure of `doc`.
     * @returns a new #GXPSDocumentStructure or %NULL if document doesn't have a structure.     Free the returned object with g_object_unref().
     */
    getStructure(): DocumentStructure

    // Class property signals of Gxps-1.0.Gxps.Document

    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>GXPSDocument</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
class Document extends GObject.Object {

    // Own properties of Gxps-1.0.Gxps.Document

    static name: string

    // Constructors of Gxps-1.0.Gxps.Document

    constructor(config?: Document.ConstructorProperties) 
    _init(config?: Document.ConstructorProperties): void
}

module DocumentStructure {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gxps-1.0.Gxps.DocumentStructure

        source?: string | null
    }

}

interface DocumentStructure {

    // Own properties of Gxps-1.0.Gxps.DocumentStructure

    readonly source: string | null
    __gtype__: number

    // Own fields of Gxps-1.0.Gxps.DocumentStructure

    parent: GObject.Object

    // Owm methods of Gxps-1.0.Gxps.DocumentStructure

    /**
     * Whether `structure` has an outline or not.
     * @returns %TRUE if @structure has an outline, %FALSE otherwise.
     */
    hasOutline(): boolean

    // Class property signals of Gxps-1.0.Gxps.DocumentStructure

    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>GXPSDocumentStructure</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
class DocumentStructure extends GObject.Object {

    // Own properties of Gxps-1.0.Gxps.DocumentStructure

    static name: string

    // Constructors of Gxps-1.0.Gxps.DocumentStructure

    constructor(config?: DocumentStructure.ConstructorProperties) 
    _init(config?: DocumentStructure.ConstructorProperties): void
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
     * @returns %TRUE if @iter was successfully initialized to the root item,     %FALSE if it failed or @structure does not have an outline.
     */
    static outlineIterInit(iter: OutlineIter, structure: DocumentStructure): boolean
}

module File {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gxps-1.0.Gxps.File

        file?: Gio.File | null
    }

}

interface File extends Gio.Initable {

    // Own properties of Gxps-1.0.Gxps.File

    readonly file: Gio.File
    __gtype__: number

    // Own fields of Gxps-1.0.Gxps.File

    parent: GObject.Object

    // Owm methods of Gxps-1.0.Gxps.File

    /**
     * Create a #GXPSCoreProperties object containing the metadata
     * of `xpsm,` or %NULL in case of error or if the #GXPSFile
     * doesn't contain core properties.
     * @returns a new #GXPSCoreProperties or %NULL.    Free the returned object with g_object_unref().
     */
    getCoreProperties(): CoreProperties
    /**
     * Creates a new #GXPSDocument representing the document at
     * index `n_doc` in `xps` file.
     * @param nDoc the index of the document to get
     * @returns a new #GXPSDocument or %NULL on error.     Free the returned object with g_object_unref().
     */
    getDocument(nDoc: number): Document
    /**
     * Gets the index of the document in `xps` pointed by `target`.
     * If the #GXPSLinkTarget does not reference a document, or
     * referenced document is not found in `xps` file -1 will be
     * returned. In this case you can look for the page pointed by
     * the link target by calling gxps_document_get_page_for_anchor()
     * with the anchor of the #GXPSLinkTarget for every document in
     * `xps`.
     * @param target a #GXPSLinkTarget
     * @returns the index of the document pointed by the given     #GXPSLinkTarget or -1.
     */
    getDocumentForLinkTarget(target: LinkTarget): number
    /**
     * Gets the number of documents in `xps`.
     * @returns the number of documents.
     */
    getNDocuments(): number

    // Class property signals of Gxps-1.0.Gxps.File

    connect(sigName: "notify::file", callback: (...args: any[]) => void): number
    on(sigName: "notify::file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>GXPSFile</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
class File extends GObject.Object {

    // Own properties of Gxps-1.0.Gxps.File

    static name: string

    // Constructors of Gxps-1.0.Gxps.File

    constructor(config?: File.ConstructorProperties) 
    /**
     * Creates a new #GXPSFile for the given #GFile.
     * @constructor 
     * @param filename a #GFile
     * @returns a #GXPSFile or %NULL on error.
     */
    constructor(filename: Gio.File) 
    /**
     * Creates a new #GXPSFile for the given #GFile.
     * @constructor 
     * @param filename a #GFile
     * @returns a #GXPSFile or %NULL on error.
     */
    static new(filename: Gio.File): File
    _init(config?: File.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module Page {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gxps-1.0.Gxps.Page

        source?: string | null
    }

}

interface Page extends Gio.Initable {

    // Own properties of Gxps-1.0.Gxps.Page

    readonly source: string | null
    __gtype__: number

    // Own fields of Gxps-1.0.Gxps.Page

    parent: GObject.Object

    // Owm methods of Gxps-1.0.Gxps.Page

    /**
     * Gets a list of #GXPSLink items that map from a location
     * in `page` to a #GXPSLinkTarget. Items in the list should
     * be freed with gxps_link_free() and the list itself with
     * g_list_free() when done.
     * @returns a #GList     of #GXPSLink items.
     */
    getLinks(): any[]
    /**
     * Gets the size of the page.
     */
    getSize(): [ /* width */ number, /* height */ number ]
    /**
     * Render the page to the given cairo context. In case of
     * error, %FALSE is returned and `error` is filled with
     * information about error.
     * @param cr a cairo context to render to
     * @returns %TRUE if page was successfully rendered,     %FALSE otherwise.
     */
    render(cr: cairo.Context): boolean

    // Class property signals of Gxps-1.0.Gxps.Page

    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>GXPSPage</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
class Page extends GObject.Object {

    // Own properties of Gxps-1.0.Gxps.Page

    static name: string

    // Constructors of Gxps-1.0.Gxps.Page

    constructor(config?: Page.ConstructorProperties) 
    _init(config?: Page.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

interface CorePropertiesClass {

    // Own fields of Gxps-1.0.Gxps.CorePropertiesClass

    parentClass: GObject.ObjectClass
}

abstract class CorePropertiesClass {

    // Own properties of Gxps-1.0.Gxps.CorePropertiesClass

    static name: string
}

interface CorePropertiesPrivate {
}

class CorePropertiesPrivate {

    // Own properties of Gxps-1.0.Gxps.CorePropertiesPrivate

    static name: string
}

interface DocumentClass {

    // Own fields of Gxps-1.0.Gxps.DocumentClass

    parentClass: GObject.ObjectClass
}

abstract class DocumentClass {

    // Own properties of Gxps-1.0.Gxps.DocumentClass

    static name: string
}

interface DocumentPrivate {
}

class DocumentPrivate {

    // Own properties of Gxps-1.0.Gxps.DocumentPrivate

    static name: string
}

interface DocumentStructureClass {

    // Own fields of Gxps-1.0.Gxps.DocumentStructureClass

    parentClass: GObject.ObjectClass
}

abstract class DocumentStructureClass {

    // Own properties of Gxps-1.0.Gxps.DocumentStructureClass

    static name: string
}

interface DocumentStructurePrivate {
}

class DocumentStructurePrivate {

    // Own properties of Gxps-1.0.Gxps.DocumentStructurePrivate

    static name: string
}

interface FileClass {

    // Own fields of Gxps-1.0.Gxps.FileClass

    parentClass: GObject.ObjectClass
}

abstract class FileClass {

    // Own properties of Gxps-1.0.Gxps.FileClass

    static name: string
}

interface FilePrivate {
}

class FilePrivate {

    // Own properties of Gxps-1.0.Gxps.FilePrivate

    static name: string
}

interface Link {

    // Owm methods of Gxps-1.0.Gxps.Link

    /**
     * Creates a copy of a #GXPSLink.
     * @returns a copy of @link.     Free the returned object with gxps_link_free().
     */
    copy(): Link
    /**
     * Frees a #GXPSLink.
     */
    free(): void
    /**
     * Gets the #GXPSLinkTarget mapped by `link`.
     * @returns the #GXPSLinkTarget of @link.
     */
    getTarget(): LinkTarget
}

/**
 * GXPSLink maps a location in a page to a #GXPSLinkTarget.
 * @record 
 */
class Link {

    // Own properties of Gxps-1.0.Gxps.Link

    static name: string
}

interface LinkTarget {

    // Owm methods of Gxps-1.0.Gxps.LinkTarget

    /**
     * Creates a copy of a #GXPSLinkTarget
     * @returns a copy of @target.     Free the returned object with gxps_link_target_free()
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
     * @returns the name of the anchor of @target.
     */
    getAnchor(): string
    /**
     * Gets the URI `target` links to.
     * @returns the URI of @target.
     */
    getUri(): string
    /**
     * Gets whether `target` destination is internal or not.
     * @returns %TRUE if the #GXPSLinkTarget points to an internal location,     %FALSE if it points to a external one.
     */
    isInternal(): boolean
}

/**
 * GXPSLinkTarget represents a hyperlink source.
 * @record 
 */
class LinkTarget {

    // Own properties of Gxps-1.0.Gxps.LinkTarget

    static name: string
}

interface OutlineIter {

    // Owm methods of Gxps-1.0.Gxps.OutlineIter

    /**
     * Initializes `iter` to the first child item of `parent`.
     * See gxps_document_structure_outline_iter_init() for
     * more details.
     * @param parent an initialized #GXPSOutlineIter
     * @returns %TRUE if @iter was set to the first child of @parent,     %FALSE if @parent does not have children.
     */
    children(parent: OutlineIter): boolean
    /**
     * Gets the description of the outline item associated with `iter`.
     * See gxps_document_structure_outline_iter_init() for
     * more details.
     * @returns the description of the outline item
     */
    getDescription(): string
    /**
     * Gets the #GXPSLinkTarget of the outline item associated with `iter`.
     * See gxps_document_structure_outline_iter_init() for
     * more details.
     * @returns a new allocated #GXPSLinkTarget.     Free the returned object with gxps_link_target_free().
     */
    getTarget(): LinkTarget
    /**
     * Advances `iter` to the next item at the current level.
     * See gxps_document_structure_outline_iter_init() for
     * more details.
     * @returns %TRUE if @iter was set to the next item,     %FALSE if the end of the current level has been reached
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

    // Own properties of Gxps-1.0.Gxps.OutlineIter

    static name: string
}

interface PageClass {

    // Own fields of Gxps-1.0.Gxps.PageClass

    parentClass: GObject.ObjectClass
}

abstract class PageClass {

    // Own properties of Gxps-1.0.Gxps.PageClass

    static name: string
}

interface PagePrivate {
}

class PagePrivate {

    // Own properties of Gxps-1.0.Gxps.PagePrivate

    static name: string
}

}

export default Gxps;
// END