
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

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of GcrGtk4-4.GcrGtk4.CertificateWidget

        certificate?: Gcr.Certificate | null
    }

}

interface CertificateWidget extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of GcrGtk4-4.GcrGtk4.CertificateWidget

    certificate: Gcr.Certificate

    // Owm methods of GcrGtk4-4.GcrGtk4.CertificateWidget

    /**
     * Get the certificate displayed in the widget.
     * @returns the certificate
     */
    get_certificate(): Gcr.Certificate | null
    /**
     * Set the certificate displayed in the widget
     * @param certificate the certificate to display
     */
    set_certificate(certificate: Gcr.Certificate | null): void

    // Class property signals of GcrGtk4-4.GcrGtk4.CertificateWidget

    connect(sigName: "notify::certificate", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::certificate", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CertificateWidget extends Gtk.Widget {

    // Own properties of GcrGtk4-4.GcrGtk4.CertificateWidget

    static name: string
    static $gtype: GObject.GType<CertificateWidget>

    // Constructors of GcrGtk4-4.GcrGtk4.CertificateWidget

    constructor(config?: CertificateWidget.ConstructorProperties) 
    /**
     * Create a new certificate widget which displays a given certificate.
     * @constructor 
     * @param certificate certificate to display, or %NULL
     * @returns a newly allocated #GcrCertificateWidget, which          should be freed with g_object_unref()
     */
    constructor(certificate: Gcr.Certificate | null) 
    /**
     * Create a new certificate widget which displays a given certificate.
     * @constructor 
     * @param certificate certificate to display, or %NULL
     * @returns a newly allocated #GcrCertificateWidget, which          should be freed with g_object_unref()
     */
    static new(certificate: Gcr.Certificate | null): CertificateWidget
    _init(config?: CertificateWidget.ConstructorProperties): void
}

interface CertificateWidgetClass {

    // Own fields of GcrGtk4-4.GcrGtk4.CertificateWidgetClass

    parent_class: Gtk.WidgetClass
}

abstract class CertificateWidgetClass {

    // Own properties of GcrGtk4-4.GcrGtk4.CertificateWidgetClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GcrGtk4;
// END