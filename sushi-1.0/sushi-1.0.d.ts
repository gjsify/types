/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './sushi-1.0-ambient.d.ts';
import './sushi-1.0-import.d.ts';
/**
 * Sushi-1.0
 */

import type xlib from '@girs/xlib-2.0';
import type libxml2 from '@girs/libxml2-2.0';
import type freetype2 from '@girs/freetype2-2.0';
import type fontconfig from '@girs/fontconfig-2.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type PangoFT2 from '@girs/pangoft2-1.0';
import type PangoFc from '@girs/pangofc-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type Gio from '@girs/gio-2.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Json from '@girs/json-1.0';
import type GtkSource from '@girs/gtksource-3.0';
import type Gtk from '@girs/gtk-3.0';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';
import type GstTag from '@girs/gsttag-0.10';
import type Gst from '@girs/gst-0.10';
import type GstPbutils from '@girs/gstpbutils-0.10';
import type GstBase from '@girs/gstbase-0.10';
import type GL from '@girs/gl-1.0';
import type EvinceDocument from '@girs/evincedocument-3.0';
import type CoglPango from '@girs/coglpango-1.0';
import type Cogl from '@girs/cogl-1.0';
import type Clutter from '@girs/clutter-1.0';

export namespace Sushi {
    enum SoundPlayerState {
        UNKNOWN,
        IDLE,
        PLAYING,
        DONE,
        ERROR,
    }
    function create_foreign_window(xid: number): Gdk.Window;
    function create_rounded_background(): Clutter.Actor;
    function query_supported_document_types(): string[];
    module CoverArtFetcher {
        // Constructor properties interface
    }

    class CoverArtFetcher extends GObject.Object {
        // Own properties of Sushi-1.0.CoverArtFetcher

        readonly cover: GdkPixbuf.Pixbuf;
        taglist: Gst.TagList;

        // Constructors of Sushi-1.0.CoverArtFetcher

        static ['new'](taglist: Gst.TagList): CoverArtFetcher;
    }

    module FileLoader {
        // Constructor properties interface
    }

    class FileLoader extends GObject.Object {
        // Own properties of Sushi-1.0.FileLoader

        readonly content_type: string;
        readonly contentType: string;
        file: Gio.File;
        readonly icon: GdkPixbuf.Pixbuf;
        readonly name: string;
        readonly size: string;
        readonly time: string;

        // Constructors of Sushi-1.0.FileLoader

        static ['new'](file: Gio.File): FileLoader;

        // Owm methods of Sushi-1.0.FileLoader

        get_content_type_string(): string;
        get_date_string(): string;
        get_display_name(): string;
        get_icon(): GdkPixbuf.Pixbuf;
        get_loading(): boolean;
        get_size_string(): string;
        stop(): void;
    }

    module FontWidget {
        // Signal callback interfaces

        interface Loaded {
            (): void;
        }

        // Constructor properties interface
    }

    class FontWidget extends Gtk.DrawingArea {
        // Own properties of Sushi-1.0.FontWidget

        uri: string;

        // Constructors of Sushi-1.0.FontWidget

        static ['new'](uri: string): FontWidget;
    }

    module PdfLoader {
        // Constructor properties interface
    }

    class PdfLoader extends GObject.Object {
        // Own properties of Sushi-1.0.PdfLoader

        readonly document: EvinceDocument.Document;
        uri: string;

        // Constructors of Sushi-1.0.PdfLoader

        static ['new'](uri: string): PdfLoader;

        // Owm methods of Sushi-1.0.PdfLoader

        cleanup_document(): void;
        get_max_page_size(): void;
    }

    module SoundPlayer {
        // Constructor properties interface
    }

    class SoundPlayer extends GObject.Object {
        // Own properties of Sushi-1.0.SoundPlayer

        readonly duration: number;
        playing: boolean;
        progress: number;
        readonly state: SoundPlayerState;
        readonly taglist: Gst.TagList;
        uri: string;
    }

    module TextLoader {
        // Signal callback interfaces

        interface Loaded {
            (object: GtkSource.Buffer): void;
        }

        // Constructor properties interface
    }

    class TextLoader extends GObject.Object {
        // Own properties of Sushi-1.0.TextLoader

        uri: string;

        // Constructors of Sushi-1.0.TextLoader

        static ['new'](uri: string): TextLoader;
    }

    class CoverArtFetcherClass {}

    class CoverArtFetcherPrivate {}

    class FileLoaderClass {}

    class FileLoaderPrivate {}

    class FontWidgetClass {}

    class FontWidgetPrivate {}

    class PdfLoaderClass {}

    class PdfLoaderPrivate {}

    class SoundPlayerClass {}

    class SoundPlayerPrivate {}

    class TextLoaderClass {}

    class TextLoaderPrivate {}

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

export default Sushi;
// END
