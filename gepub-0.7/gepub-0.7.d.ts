
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
import type libxml2 from '@girs/libxml2-2.0';
import type WebKit2 from '@girs/webkit2-4.1';
import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type JavaScriptCore from '@girs/javascriptcore-4.1';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Gepub {

    /**
     * Gepub-0.7
     */


    /**
     * @gir-type Enum
     */
    enum TextChunkType {
        EPUBTEXTHEADER,
        EPUBTEXTBOLD,
        EPUBTEXTITALIC,
        EPUBTEXTNORMAL,
    }


    /**
     * The book author.
     */
    const META_AUTHOR: string;

    /**
     * The book description.
     */
    const META_DESC: string;

    /**
     * The book id.
     */
    const META_ID: string;

    /**
     * The book lang.
     */
    const META_LANG: string;

    /**
     * The book title.
     */
    const META_TITLE: string;

    /**
     * @param node an #xmlNode
     * @param prop a property
     * @returns a string with the property contained in `prop`
     */
    function utils_get_prop(node: libxml2.Node, prop: string): string;

    /**
     * @param node an #xmlNode
     * @returns the text elements  of `node`.
     */
    function utils_get_text_elements(node: libxml2.Node): TextChunk[];

    /**
     * Replacing epub media paths, for css, image and svg files, to be
     * able to provide these files to webkit from the epub file.
     * @param content a {@link GLib.Bytes} containing the XML data
     * @param path The path to replace
     * @returns a new {@link GLib.Bytes} containing the updated XML data
     */
    function utils_replace_resources(content: (GLib.Bytes | Uint8Array), path: string): GLib.Bytes;

    namespace Archive {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class Archive extends GObject.Object {
        static $gtype: GObject.GType<Archive>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Archive.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Archive.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](path: string): Archive;

        // Signals
        /** @signal */
        connect<K extends keyof Archive.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Archive.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Archive.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Archive.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Archive.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Archive.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_root_file(): string;

        /**
         * @returns list of files in the archive
         */
        list_files(): string[];

        /**
         * @param path 
         */
        read_entry(path: string): GLib.Bytes;
    }


    namespace Doc {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::chapter": (pspec: GObject.ParamSpec) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            chapter: number;
            path: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Doc extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Doc>;

        // Properties
        /**
         * @default 0
         */
        get chapter(): number;
        set chapter(val: number);

        /**
         * @construct-only
         * @default null
         */
        get path(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Doc.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Doc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](path: string): Doc;

        // Signals
        /** @signal */
        connect<K extends keyof Doc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Doc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Doc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Doc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Doc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Doc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the current chapter index, starting from 0
         */
        get_chapter(): number;

        /**
         * @returns the document content
         */
        get_content(): GLib.Bytes;

        /**
         * @returns cover file path to retrieve with gepub_doc_get_resource
         */
        get_cover(): string;

        /**
         * @returns the current chapter data
         */
        get_current(): GLib.Bytes;

        /**
         * @returns the current resource id
         */
        get_current_id(): string;

        /**
         * @returns the current resource mime
         */
        get_current_mime(): string;

        /**
         * @returns the current resource path
         */
        get_current_path(): string;

        /**
         * @returns the current chapter data, with resource uris renamed so they have the epub:/// prefix and all are relative to the root file
         */
        get_current_with_epub_uris(): GLib.Bytes;

        /**
         * @param mdata a metadata name string, GEPUB_META_TITLE for example
         * @returns metadata string
         */
        get_metadata(mdata: string): string;

        /**
         * @returns the number of chapters in the document
         */
        get_n_chapters(): number;

        /**
         * @param path the resource path
         * @returns the resource content
         */
        get_resource(path: string): GLib.Bytes;

        /**
         * @param id the resource id
         * @returns the resource content
         */
        get_resource_by_id(id: string): GLib.Bytes;

        /**
         * @param path the resource path
         * @returns the resource mime
         */
        get_resource_mime(path: string): string;

        /**
         * @param id the resource id
         * @returns the resource content
         */
        get_resource_mime_by_id(id: string): string;

        /**
         * @param id the resource id
         * @returns the resource path
         */
        get_resource_path(id: string): string;

        /**
         * @returns doc resource table
         */
        get_resources(): GLib.HashTable<string, Resource>;

        /**
         * @returns the list of text in the current chapter.
         */
        get_text(): TextChunk[];

        /**
         * @param id the resource id
         * @returns the list of text in the current chapter.
         */
        get_text_by_id(id: string): TextChunk[];

        /**
         * @returns the navigation list in order
         */
        get_toc(): NavPoint[];

        /**
         * @returns TRUE on success, FALSE if there's no next chapter
         */
        go_next(): boolean;

        /**
         * @returns TRUE on success, FALSE if there's no previous chapter
         */
        go_prev(): boolean;

        /**
         * This method tries to find the resource by id in the doc spine and
         * will return the index in that list. If the resourse isn't there this method
         * will return -1.
         * @param id The resource id
         * @returns the chapter index to use with gepub_doc_set_chapter or -1 if the resource isn't found
         */
        resource_id_to_chapter(id: string): number;

        /**
         * This method tries to find the resource by path in the doc spine and
         * will return the index in that list. If the resourse isn't there this method
         * will return -1.
         * @param uri The resource path
         * @returns the chapter index to use with gepub_doc_set_chapter or -1 if the resource isn't found
         */
        resource_uri_to_chapter(uri: string): number;

        /**
         * Sets the document current chapter to `index`.
         * @param index the index of the new chapter
         */
        set_chapter(index: number): void;

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


    namespace TextChunk {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class TextChunk extends GObject.Object {
        static $gtype: GObject.GType<TextChunk>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TextChunk.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TextChunk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](type: TextChunkType, text: string): TextChunk;

        // Signals
        /** @signal */
        connect<K extends keyof TextChunk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TextChunk.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TextChunk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TextChunk.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TextChunk.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TextChunk.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the chunk text
         */
        text(): string;

        /**
         * @returns the chunk type
         */
        type(): TextChunkType;

        /**
         * @returns the chunk text
         */
        type_str(): string;
    }


    namespace Widget {
        // Signal signatures
        interface SignalSignatures extends WebKit2.WebView.SignalSignatures {
            "notify::chapter": (pspec: GObject.ParamSpec) => void;
            "notify::chapter-pos": (pspec: GObject.ParamSpec) => void;
            "notify::doc": (pspec: GObject.ParamSpec) => void;
            "notify::nchapters": (pspec: GObject.ParamSpec) => void;
            "notify::paginate": (pspec: GObject.ParamSpec) => void;
            "notify::automation-presentation-type": (pspec: GObject.ParamSpec) => void;
            "notify::camera-capture-state": (pspec: GObject.ParamSpec) => void;
            "notify::default-content-security-policy": (pspec: GObject.ParamSpec) => void;
            "notify::display-capture-state": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::estimated-load-progress": (pspec: GObject.ParamSpec) => void;
            "notify::favicon": (pspec: GObject.ParamSpec) => void;
            "notify::is-controlled-by-automation": (pspec: GObject.ParamSpec) => void;
            "notify::is-ephemeral": (pspec: GObject.ParamSpec) => void;
            "notify::is-immersive-mode-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::is-loading": (pspec: GObject.ParamSpec) => void;
            "notify::is-muted": (pspec: GObject.ParamSpec) => void;
            "notify::is-playing-audio": (pspec: GObject.ParamSpec) => void;
            "notify::is-web-process-responsive": (pspec: GObject.ParamSpec) => void;
            "notify::microphone-capture-state": (pspec: GObject.ParamSpec) => void;
            "notify::page-id": (pspec: GObject.ParamSpec) => void;
            "notify::related-view": (pspec: GObject.ParamSpec) => void;
            "notify::settings": (pspec: GObject.ParamSpec) => void;
            "notify::theme-color": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
            "notify::user-content-manager": (pspec: GObject.ParamSpec) => void;
            "notify::web-context": (pspec: GObject.ParamSpec) => void;
            "notify::web-extension-mode": (pspec: GObject.ParamSpec) => void;
            "notify::website-policies": (pspec: GObject.ParamSpec) => void;
            "notify::zoom-level": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends WebKit2.WebView.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            chapter: number;
            chapter_pos: number;
            chapterPos: number;
            doc: Doc;
            nchapters: number;
            paginate: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Widget extends WebKit2.WebView implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Widget>;

        // Properties
        /**
         * @default 0
         */
        get chapter(): number;
        set chapter(val: number);

        /**
         * @default 0
         */
        get chapter_pos(): number;
        set chapter_pos(val: number);

        /**
         * @default 0
         */
        get chapterPos(): number;
        set chapterPos(val: number);

        get doc(): Doc;
        set doc(val: Doc);

        /**
         * @read-only
         * @default 0
         */
        get nchapters(): number;

        /**
         * @default false
         */
        get paginate(): boolean;
        set paginate(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Widget.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Widget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Widget;

        // Signals
        /** @signal */
        connect<K extends keyof Widget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Widget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Widget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Widget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns TRUE on success, FALSE if there's no next chapter
         */
        chapter_next(): boolean;

        /**
         * @returns TRUE on success, FALSE if there's no prev chapter
         */
        chapter_prev(): boolean;

        /**
         * @returns the current chapter in the document
         */
        get_chapter(): number;

        /**
         * @returns the current chapter length
         */
        get_chapter_length(): number;

        /**
         * @returns the {@link Gepub.Doc}
         */
        get_doc(): Doc;

        /**
         * Gets the widget custom font family
         */
        get_fontfamily(): string;

        /**
         * Gets the widget custom font size in pt, if 0, it's not set
         */
        get_fontsize(): number;

        /**
         * Gets the widget custom line height, if 0, it's not set
         */
        get_lineheight(): number;

        /**
         * Gets the widget left and right margin
         */
        get_margin(): number;

        /**
         * @returns the number of chapters in the document
         */
        get_n_chapters(): number;

        /**
         * Returns whether pagination is enabled or disabled
         */
        get_paginate(): boolean;

        /**
         * @returns the current position in the chapter
         */
        get_pos(): number;

        /**
         * @returns TRUE on success, FALSE if there's no next page
         */
        page_next(): boolean;

        /**
         * @returns TRUE on success, FALSE if there's no next page
         */
        page_prev(): boolean;

        /**
         * Sets the current chapter in the doc
         * @param index the new chapter
         */
        set_chapter(index: number): void;

        /**
         * Sets `doc` as the document displayed by the widget.
         * @param doc a {@link Gepub.Doc}
         */
        set_doc(doc: (Doc | null)): void;

        /**
         * Sets the widget custom font family
         * @param family the custom font family name
         */
        set_fontfamily(family: string): void;

        /**
         * Sets the widget custom font size, use 0 to show book's styles
         * @param size the custom font size in pt
         */
        set_fontsize(size: number): void;

        /**
         * Sets the widget custom line height, the real size will be this
         * number multiplied by the font size.
         * Use 0 to show book's styles
         * @param size the custom line height
         */
        set_lineheight(size: number): void;

        /**
         * Sets the widget left and right margin
         * @param margin the margin in pixels
         */
        set_margin(margin: number): void;

        /**
         * Enable or disable pagination
         * @param p true if the widget should paginate
         */
        set_paginate(p: boolean): void;

        /**
         * Sets the current position in the chapter
         * @param index the new pos
         */
        set_pos(index: number): void;
    }


    /**
     * @gir-type Alias
     */
    type ArchiveClass = typeof Archive;

    /**
     * @gir-type Alias
     */
    type DocClass = typeof Doc;

    /**
     * @gir-type Struct
     */
    class NavPoint {
        static $gtype: GObject.GType<NavPoint>;

        // Fields
        label: string;

        content: string;

        playorder: number;
    }


    /**
     * @gir-type Struct
     */
    class Resource {
        static $gtype: GObject.GType<Resource>;

        // Fields
        mime: string;

        uri: string;

        // Constructors

        constructor(properties?: Partial<{
            mime: string;
            uri: string;
        }>);
    }


    /**
     * @gir-type Alias
     */
    type TextChunkClass = typeof TextChunk;

    /**
     * @gir-type Alias
     */
    type WidgetClass = typeof Widget;

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

export default Gepub;

// END
