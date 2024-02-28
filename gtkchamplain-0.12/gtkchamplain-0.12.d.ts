/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gtkchamplain-0.12-ambient.d.ts';
import './gtkchamplain-0.12-import.d.ts';
/**
 * GtkChamplain-0.12
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';
import type Clutter from '@girs/clutter-1.0';
import type Json from '@girs/json-1.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Cogl from '@girs/cogl-1.0';
import type Champlain from '@girs/champlain-0.12';

export namespace GtkChamplain {
    module Embed {
        // Constructor properties interface
    }

    /**
     * The #GtkChamplainEmbed structure contains only private data
     * and should be accessed using the provided API
     */
    class Embed extends Gtk.Alignment {
        // Own properties of GtkChamplain-0.12.Embed

        /**
         * The #ChamplainView to embed in the Gtk+ widget.
         */
        readonly champlain_view: Champlain.View;
        /**
         * The #ChamplainView to embed in the Gtk+ widget.
         */
        readonly champlainView: Champlain.View;

        // Own fields of GtkChamplain-0.12.Embed

        bin: Gtk.Alignment;

        // Constructors of GtkChamplain-0.12.Embed

        static ['new'](): Embed;

        // Owm methods of GtkChamplain-0.12.Embed

        /**
         * Gets a #ChamplainView from the #GtkChamplainEmbed object.
         * @returns a #ChamplainView ready to be used
         */
        get_view(): Champlain.View;
    }

    class EmbedClass {}

    class EmbedPrivate {}

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

export default GtkChamplain;
// END
