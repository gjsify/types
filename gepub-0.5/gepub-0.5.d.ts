/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gepub-0.5-ambient.d.ts';
import './gepub-0.5-import.d.ts';
/**
 * Gepub-0.5
 */

import type libxml2 from '@girs/libxml2-2.0';
import type WebKit2 from '@girs/webkit2-4.0';
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type JavaScriptCore from '@girs/javascriptcore-4.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Gepub {
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
    module Doc {
        // Constructor properties interface
    }

    class Doc extends GObject.Object {
        // Own properties of Gepub-0.5.Doc

        file: Gio.File;
        page: number;
        path: string;

        // Constructors of Gepub-0.5.Doc

        static ['new'](path: string): Doc;

        // Owm methods of Gepub-0.5.Doc

        get_cover(): string;
        get_current(): GLib.Bytes;
        get_current_id(): string;
        get_current_mime(): string;
        get_current_path(): string;
        get_current_with_epub_uris(): GLib.Bytes;
        get_metadata(mdata: string): string;
        get_n_pages(): number;
        get_page(): number;
        get_resource(path: string): GLib.Bytes;
        get_resource_by_id(id: string): GLib.Bytes;
        get_resource_mime(path: string): string;
        get_resource_mime_by_id(id: string): string;
        get_resource_path(id: string): string;
        go_next(): boolean;
        go_prev(): boolean;
        /**
         * Sets the document current page to `index`.
         * @param index the index of the new page
         */
        set_page(index: number): void;
    }

    module Widget {
        // Constructor properties interface
    }

    class Widget extends WebKit2.WebView {
        // Own properties of Gepub-0.5.Widget

        doc: Doc;

        // Constructors of Gepub-0.5.Widget

        static ['new'](): Widget;

        // Owm methods of Gepub-0.5.Widget

        get_doc(): Doc;
        /**
         * Sets `doc` as the document displayed by the widget.
         * @param doc a #GepubDoc
         */
        set_doc(doc?: Doc | null): void;
    }

    class DocClass {}

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
