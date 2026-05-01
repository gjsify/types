
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
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GXPS {

    /**
     * GXPS-0.1
     */


    /**
     * Error codes returned by GXPS functions.
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * Internal source file not found in XPS file
         */
        static SOURCE_NOT_FOUND: number;

        /**
         * Error loading fonts
         */
        static FONT: number;

        /**
         * Error loading images
         */
        static IMAGE: number;

        // Constructors
        constructor(options: { message: string, code: number });
    }


    /**
     * Error codes returned by {@link GXPS.File} functions.
     * @gir-type Enum
     */
    enum FileError {
        /**
         * The XPS is invalid.
         */
        FILE_ERROR_INVALID,
    }


    /**
     * Error codes returned by {@link GXPS.Page} functions
     * @gir-type Enum
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
    const MAJOR_VERSION: number;

    /**
     * The micro version number of the GXPS header files (e.g. in GXPS version
     * 0.1.2 this is 2.)
     */
    const MICRO_VERSION: number;

    /**
     * The major version number of the GXPS header files (e.g. in GXPS version
     * 0.1.2 this is 1.)
     */
    const MINOR_VERSION: number;

    /**
     * The version number of the GXPS library as a string
     * @since 0.2.1
     */
    const VERSION_STRING: string;

    function error_quark(): GLib.Quark;

    namespace CoreProperties {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::source": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            source: string;
        }
    }

    /**
     * The <structname>GXPSCoreProperties</structname> struct contains
     * only private fields and should not be directly accessed.
     * @gir-type Class
     */
    class CoreProperties extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<CoreProperties>;

        // Properties
        /**
         * @construct-only
         * @default null
         */
        set source(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CoreProperties.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CoreProperties.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof CoreProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CoreProperties.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CoreProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CoreProperties.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CoreProperties.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CoreProperties.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the category.
         * @returns a string containing the category or `null`
         */
        get_category(): string;

        /**
         * Get the status of the content (e.g. Draft, Reviewed, Final)
         * @returns a string containing the status of the content or `null`
         */
        get_content_status(): string;

        /**
         * Get the type of content represented, generally defined by a
         * specific use and intended audience. This is not the MIME-Type.
         * @returns a string containing the type of content or `null`
         */
        get_content_type(): string;

        /**
         * Get the creating date.
         * @returns the creating date as a <type>time_t</type> or -1.
         */
        get_created(): number;

        /**
         * Get the creator.
         * @returns a string containing the creator or `null`
         */
        get_creator(): string;

        /**
         * Get the description.
         * @returns a string containing the description or `null`
         */
        get_description(): string;

        /**
         * Get the unique identifier.
         * @returns a string containing the identifier or `null`
         */
        get_identifier(): string;

        /**
         * Get the keywords.
         * @returns a string containing the keywords or `null`
         */
        get_keywords(): string;

        /**
         * Get the language.
         * @returns a string containing the language or `null`
         */
        get_language(): string;

        /**
         * Get the user who performed the last modification.
         * @returns a string containing the user who performed the    last modification or `null`
         */
        get_last_modified_by(): string;

        /**
         * Get the date of the last printing.
         * @returns the date of the last printing as a <type>time_t</type> or -1.
         */
        get_last_printed(): number;

        /**
         * Get the last modification date.
         * @returns the modification date as a <type>time_t</type> or -1.
         */
        get_modified(): number;

        /**
         * Get the revision number.
         * @returns a string containing the revision number or `null`
         */
        get_revision(): string;

        /**
         * Get the subject.
         * @returns a string containing the subject or `null`
         */
        get_subject(): string;

        /**
         * Get the title.
         * @returns a string containing the title or `null`
         */
        get_title(): string;

        /**
         * Get the version number.
         * @returns a string containing the version number or `null`
         */
        get_version(): string;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace Document {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::source": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            source: string;
        }
    }

    /**
     * The <structname>GXPSDocument</structname> struct contains
     * only private fields and should not be directly accessed.
     * @gir-type Class
     */
    class Document extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Document>;

        // Properties
        /**
         * @construct-only
         * @default null
         */
        set source(val: string);

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

        // Methods
        /**
         * Gets the number of pages in `doc`.
         * @returns the number of pages.
         */
        get_n_pages(): number;

        /**
         * Creates a new {@link GXPS.Page} representing the page at
         * index `n_doc` in `doc` document.
         * @param n_page the index of the page to get
         * @returns a new {@link GXPS.Page} or `null` on error.     Free the returned object with `g_object_unref()`.
         */
        get_page(n_page: number): Page;

        /**
         * Gets the index of the page in `doc` where the given
         * anchor is.
         * @param anchor the name of an anchor
         * @returns the page index of the given anchor.
         */
        get_page_for_anchor(anchor: string): number;

        /**
         * Gets the typical size of the page at index `n_page` in `doc` document.
         * This function is useful to get the advisory size of pages in a document
         * without creating {@link GXPS.Page} objects. This page size might be different than
         * the actual page size so page dimension might need to be updated once the
         * page is loaded. Advisory page sizes are not always available in `doc`,
         * in which case this function returns `false`.
         * To get the authoritative size of a page you should use `gxps_page_get_size()`
         * instead.
         * @param n_page the index of a page in `doc`
         * @returns `true` if the page size information is available in `doc`,     `false` otherwise.
         */
        get_page_size(n_page: number): [boolean, number, number];

        /**
         * Creates a new {@link GXPS.DocumentStructure} representing the document
         * structure of `doc`.
         * @returns a new {@link GXPS.DocumentStructure} or `null` if document doesn't have a structure.     Free the returned object with `g_object_unref()`.
         */
        get_structure(): DocumentStructure;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace DocumentStructure {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::source": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            source: string;
        }
    }

    /**
     * The <structname>GXPSDocumentStructure</structname> struct contains
     * only private fields and should not be directly accessed.
     * @gir-type Class
     */
    class DocumentStructure extends GObject.Object {
        static $gtype: GObject.GType<DocumentStructure>;

        // Properties
        /**
         * @construct-only
         * @default null
         */
        set source(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DocumentStructure.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DocumentStructure.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DocumentStructure.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DocumentStructure.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DocumentStructure.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DocumentStructure.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DocumentStructure.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DocumentStructure.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
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
         * @param iter an uninitialized {@link GXPS.OutlineIter}
         * @param structure a {@link GXPS.DocumentStructure}
         */
        static outline_iter_init(iter: OutlineIter, structure: DocumentStructure): boolean;

        // Methods
        /**
         * Whether `structure` has an outline or not.
         * @returns `true` if `structure` has an outline, `false` otherwise.
         */
        has_outline(): boolean;
    }


    namespace File {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::file": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            file: Gio.File;
        }
    }

    /**
     * The <structname>GXPSFile</structname> struct contains
     * only private fields and should not be directly accessed.
     * @gir-type Class
     */
    class File extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<File>;

        // Properties
        /**
         * @construct-only
         */
        set file(val: Gio.File);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: File.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<File.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](filename: Gio.File): File;

        // Signals
        /** @signal */
        connect<K extends keyof File.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, File.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof File.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, File.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof File.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<File.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static error_quark(): GLib.Quark;

        // Methods
        /**
         * Create a {@link GXPS.CoreProperties} object containing the metadata
         * of `xpsm`, or `null` in case of error or if the {@link GXPS.File}
         * doesn't contain core properties.
         * @returns a new {@link GXPS.CoreProperties} or `null`.    Free the returned object with `g_object_unref()`.
         */
        get_core_properties(): CoreProperties;

        /**
         * Creates a new {@link GXPS.Document} representing the document at
         * index `n_doc` in `xps` file.
         * @param n_doc the index of the document to get
         * @returns a new {@link GXPS.Document} or `null` on error.     Free the returned object with `g_object_unref()`.
         */
        get_document(n_doc: number): Document;

        /**
         * Gets the index of the document in `xps` pointed by `target`.
         * If the {@link GXPS.LinkTarget} does not reference a document, or
         * referenced document is not found in `xps` file -1 will be
         * returned. In this case you can look for the page pointed by
         * the link target by calling `gxps_document_get_page_for_anchor()`
         * with the anchor of the {@link GXPS.LinkTarget} for every document in
         * `xps`.
         * @param target a {@link GXPS.LinkTarget}
         * @returns the index of the document pointed by the given     {@link GXPS.LinkTarget} or -1.
         */
        get_document_for_link_target(target: LinkTarget): number;

        /**
         * Gets the number of documents in `xps`.
         * @returns the number of documents.
         */
        get_n_documents(): number;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace Page {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::source": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            source: string;
        }
    }

    /**
     * The <structname>GXPSPage</structname> struct contains
     * only private fields and should not be directly accessed.
     * @gir-type Class
     */
    class Page extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Page>;

        // Properties
        /**
         * @construct-only
         * @default null
         */
        set source(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Page.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Page.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

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

        // Static methods
        static error_quark(): GLib.Quark;

        // Methods
        /**
         * Gets the rectangle of `page` corresponding to the destination
         * of the given anchor. If `anchor` is not found in `page`, `false`
         * will be returned and `error` will contain {@link GXPS.PageError.INVALID_ANCHOR}
         * @param anchor the name of an anchor in `page`
         * @returns `true` if the destination for the anchor was found in page     and `area` contains the rectangle, `false` otherwise.
         */
        get_anchor_destination(anchor: string): [boolean, cairo.Rectangle];

        /**
         * Gets a list of {@link GXPS.Link} items that map from a location
         * in `page` to a {@link GXPS.LinkTarget}. Items in the list should
         * be freed with `gxps_link_free()` and the list itself with
         * `g_list_free()` when done.
         * @returns a {@link GLib.List}     of {@link GXPS.Link} items.
         */
        get_links(): Link[];

        /**
         * Gets the size of the page.
         */
        get_size(): [number, number];

        /**
         * Render the page to the given cairo context. In case of
         * error, `false` is returned and `error` is filled with
         * information about error.
         * @param cr a cairo context to render to
         * @returns `true` if page was successfully rendered,     `false` otherwise.
         */
        render(cr: cairo.Context): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    /**
     * @gir-type Alias
     */
    type CorePropertiesClass = typeof CoreProperties;

    /**
     * @gir-type Struct
     */
    abstract class CorePropertiesPrivate {
        static $gtype: GObject.GType<CorePropertiesPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DocumentClass = typeof Document;

    /**
     * @gir-type Struct
     */
    abstract class DocumentPrivate {
        static $gtype: GObject.GType<DocumentPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DocumentStructureClass = typeof DocumentStructure;

    /**
     * @gir-type Struct
     */
    abstract class DocumentStructurePrivate {
        static $gtype: GObject.GType<DocumentStructurePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type FileClass = typeof File;

    /**
     * @gir-type Struct
     */
    abstract class FilePrivate {
        static $gtype: GObject.GType<FilePrivate>;
    }


    /**
     * GXPSLink maps a location in a page to a {@link GXPS.LinkTarget}.
     * @gir-type Struct
     */
    abstract class Link {
        static $gtype: GObject.GType<Link>;

        // Methods
        /**
         * Creates a copy of a {@link GXPS.Link}.
         * @returns a copy of `link`.     Free the returned object with `gxps_link_free()`.
         */
        copy(): Link;

        /**
         * Frees a {@link GXPS.Link}.
         */
        free(): void;

        /**
         * Gets the rectangle of a page where the {@link GXPS.LinkTarget}
         * mapped by `link` is.
         */
        get_area(): cairo.Rectangle;

        /**
         * Gets the {@link GXPS.LinkTarget} mapped by `link`.
         * @returns the {@link GXPS.LinkTarget} of `link`.
         */
        get_target(): LinkTarget;
    }


    /**
     * GXPSLinkTarget represents a hyperlink source.
     * @gir-type Struct
     */
    abstract class LinkTarget {
        static $gtype: GObject.GType<LinkTarget>;

        // Methods
        /**
         * Creates a copy of a {@link GXPS.LinkTarget}
         * @returns a copy of `target`.     Free the returned object with `gxps_link_target_free()`
         */
        copy(): LinkTarget;

        /**
         * Frees a {@link GXPS.LinkTarget}.
         */
        free(): void;

        /**
         * Gets the anchor name `target` links to. If `target` is
         * an internal {@link GXPS.LinkTarget} this function always returns
         * and anchor, if it is external it might return `null` if the
         * `target` does not have an anchor.
         * @returns the name of the anchor of `target`.
         */
        get_anchor(): string;

        /**
         * Gets the URI `target` links to.
         * @returns the URI of `target`.
         */
        get_uri(): string;

        /**
         * Gets whether `target` destination is internal or not.
         * @returns `true` if the {@link GXPS.LinkTarget} points to an internal location,     `false` if it points to a external one.
         */
        is_internal(): boolean;
    }


    /**
     * GXPSOutlineIter represents an iterator that can be
     * used to iterate over the items of an outline
     * contained in a {@link GXPS.DocumentStructure}
     * @gir-type Struct
     */
    class OutlineIter {
        static $gtype: GObject.GType<OutlineIter>;

        // Constructors

        constructor(properties?: Partial<{

        }>);

        // Methods
        /**
         * Initializes `iter` to the first child item of `parent`.
         * See `gxps_document_structure_outline_iter_init()` for
         * more details.
         * @param parent an initialized {@link GXPS.OutlineIter}
         * @returns `true` if `iter` was set to the first child of `parent`,     `false` if `parent` does not have children.
         */
        children(parent: OutlineIter): boolean;

        /**
         * Gets the description of the outline item associated with `iter`.
         * See `gxps_document_structure_outline_iter_init()` for
         * more details.
         * @returns the description of the outline item
         */
        get_description(): string;

        /**
         * Gets the {@link GXPS.LinkTarget} of the outline item associated with `iter`.
         * See `gxps_document_structure_outline_iter_init()` for
         * more details.
         * @returns a new allocated {@link GXPS.LinkTarget}.     Free the returned object with `gxps_link_target_free()`.
         */
        get_target(): LinkTarget;

        /**
         * Advances `iter` to the next item at the current level.
         * See `gxps_document_structure_outline_iter_init()` for
         * more details.
         * @returns `true` if `iter` was set to the next item,     `false` if the end of the current level has been reached
         */
        next(): boolean;
    }


    /**
     * @gir-type Alias
     */
    type PageClass = typeof Page;

    /**
     * @gir-type Struct
     */
    abstract class PagePrivate {
        static $gtype: GObject.GType<PagePrivate>;
    }


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

export default GXPS;

// END
