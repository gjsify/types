/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gepub-0.7-ambient.d.ts';
import './gepub-0.7-import.d.ts';
/**
 * Gepub-0.7
 */

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
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Gepub {
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
    function utils_get_prop(node: libxml2.Node, prop: string): string;
    function utils_get_text_elements(node: libxml2.Node): TextChunk[];
    /**
     * Replacing epub media paths, for css, image and svg files, to be
     * able to provide these files to webkit from the epub file.
     * @param content a #GBytes containing the XML data
     * @param path The path to replace
     * @returns a new #GBytes containing the updated XML data
     */
    function utils_replace_resources(content: GLib.Bytes, path: string): GLib.Bytes;
    module Archive {
        // Constructor properties interface
    }

    class Archive extends GObject.Object {
        // Constructors of Gepub-0.7.Archive

        static ['new'](path: string): Archive;

        // Owm methods of Gepub-0.7.Archive

        get_root_file(): string;
        list_files(): string[];
        read_entry(path: string): GLib.Bytes;
    }

    module Doc {
        // Constructor properties interface
    }

    class Doc extends GObject.Object {
        // Own properties of Gepub-0.7.Doc

        chapter: number;
        path: string;

        // Constructors of Gepub-0.7.Doc

        static ['new'](path: string): Doc;

        // Owm methods of Gepub-0.7.Doc

        get_chapter(): number;
        get_content(): GLib.Bytes;
        get_cover(): string;
        get_current(): GLib.Bytes;
        get_current_id(): string;
        get_current_mime(): string;
        get_current_path(): string;
        get_current_with_epub_uris(): GLib.Bytes;
        get_metadata(mdata: string): string;
        get_n_chapters(): number;
        get_resource(path: string): GLib.Bytes;
        get_resource_by_id(id: string): GLib.Bytes;
        get_resource_mime(path: string): string;
        get_resource_mime_by_id(id: string): string;
        get_resource_path(id: string): string;
        get_resources(): GLib.HashTable<string, Resource>;
        get_text(): TextChunk[];
        get_text_by_id(id: string): TextChunk[];
        get_toc(): NavPoint[];
        go_next(): boolean;
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
    }

    module TextChunk {
        // Constructor properties interface
    }

    class TextChunk extends GObject.Object {
        // Constructors of Gepub-0.7.TextChunk

        static ['new'](type: TextChunkType, text: string): TextChunk;

        // Owm methods of Gepub-0.7.TextChunk

        text(): string;
        type(): TextChunkType;
        type_str(): string;
    }

    module Widget {
        // Constructor properties interface
    }

    class Widget extends WebKit2.WebView {
        // Own properties of Gepub-0.7.Widget

        chapter: number;
        chapter_pos: number;
        chapterPos: number;
        doc: Doc;
        readonly nchapters: number;
        paginate: boolean;

        // Constructors of Gepub-0.7.Widget

        static ['new'](): Widget;

        // Owm methods of Gepub-0.7.Widget

        chapter_next(): boolean;
        chapter_prev(): boolean;
        get_chapter(): number;
        get_chapter_length(): number;
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
        get_n_chapters(): number;
        /**
         * Returns whether pagination is enabled or disabled
         */
        get_paginate(): boolean;
        get_pos(): number;
        page_next(): boolean;
        page_prev(): boolean;
        /**
         * Sets the current chapter in the doc
         * @param index the new chapter
         */
        set_chapter(index: number): void;
        /**
         * Sets `doc` as the document displayed by the widget.
         * @param doc a #GepubDoc
         */
        set_doc(doc?: Doc | null): void;
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

    class ArchiveClass {}

    class DocClass {}

    class NavPoint {
        // Own fields of Gepub-0.7.NavPoint

        label: string;
        content: string;
        playorder: number;

        // Constructors of Gepub-0.7.NavPoint

        constructor(
            properties?: Partial<{
                label: string;
                content: string;
                playorder: number;
            }>,
        );
    }

    class Resource {
        // Own fields of Gepub-0.7.Resource

        mime: string;
        uri: string;

        // Constructors of Gepub-0.7.Resource

        constructor(
            properties?: Partial<{
                mime: string;
                uri: string;
            }>,
        );
    }

    class TextChunkClass {}

    class WidgetClass {}

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
