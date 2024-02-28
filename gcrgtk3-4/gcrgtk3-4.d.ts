/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gcrgtk3-4-ambient.d.ts';
import './gcrgtk3-4-import.d.ts';
/**
 * GcrGtk3-4
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
import type Gcr from '@girs/gcr-4';
import type Gck from '@girs/gck-2';

export namespace GcrGtk3 {
    module CertificateWidget {
        // Constructor properties interface
    }

    class CertificateWidget extends Gtk.Box {
        // Own properties of GcrGtk3-4.CertificateWidget

        certificate: Gcr.Certificate;

        // Constructors of GcrGtk3-4.CertificateWidget

        static ['new'](certificate?: Gcr.Certificate | null): CertificateWidget;

        // Owm methods of GcrGtk3-4.CertificateWidget

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

    module SecureEntryBuffer {
        // Constructor properties interface
    }

    /**
     * A [class`Gtk`.EntryBuffer] that uses non-pageable memory.
     *
     * It's good practice to try to keep passwords or sensitive secrets out of
     * pageable memory whenever possible, so that they don't get written to disk.
     *
     * A [class`SecureEntryBuffer]` is a [class`Gtk`.EntryBuffer] to be used with
     * [class`Gtk`.Entry] which uses non-pageable memory to store a password placed
     * in the entry. In order to make any sense at all, the entry must have it's
     * visibility turned off, and just be displaying place holder characters for
     * the text. That is, a password style entry.
     *
     * Use [ctor`Gtk`.Entry.new_with_buffer] or [method`Gtk`.Entry.set_buffer] to set this buffer
     * on an entry.
     */
    class SecureEntryBuffer extends Gtk.EntryBuffer {
        // Constructors of GcrGtk3-4.SecureEntryBuffer

        static ['new'](): SecureEntryBuffer;
    }

    class CertificateWidgetClass {}

    class SecureEntryBufferClass {}

    class SecureEntryBufferPrivate {}

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

export default GcrGtk3;
// END
