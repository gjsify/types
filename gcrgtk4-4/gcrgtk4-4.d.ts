/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gcrgtk4-4-ambient.d.ts';
import './gcrgtk4-4-import.d.ts';
/**
 * GcrGtk4-4
 */

import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gcr from '@girs/gcr-4';
import type Gck from '@girs/gck-2';

export namespace GcrGtk4 {
    module CertificateWidget {
        // Constructor properties interface
    }

    class CertificateWidget extends Gtk.Widget {
        // Own properties of GcrGtk4-4.CertificateWidget

        certificate: Gcr.Certificate;

        // Constructors of GcrGtk4-4.CertificateWidget

        static ['new'](certificate?: Gcr.Certificate | null): CertificateWidget;

        // Owm methods of GcrGtk4-4.CertificateWidget

        /**
         * Get the certificate displayed in the widget.
         * @returns the certificate
         */
        get_certificate(): Gcr.Certificate | null;
        /**
         * Set the certificate displayed in the widget
         * @param certificate the certificate to display
         */
        set_certificate(certificate?: Gcr.Certificate | null): void;
    }

    class CertificateWidgetClass {}

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

export default GcrGtk4;
// END
