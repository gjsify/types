
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gcrui-3-ambient.d.ts';
import './gcrui-3-import.d.ts';
/**
 * GcrUi-3
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';
import type Gcr from '@girs/gcr-3';
import type Gck from '@girs/gck-1';

/**
 * If a [class`CollectionModel]` is created with a mode of
 * %GCR_COLLECTION_MODEL_TREE, then any included objects that are themselves a
 * [iface`Gcr`.Collection], will have all child
 * objects include as child rows in a tree form.
 */
export enum CollectionModelMode {
    /**
     * only objects in the top collection, no child objects
     */
    LIST,
    /**
     * show objects in the collection, and child objects in a tree form
     */
    TREE,
}
/**
 * Create and initialize a renderer for the given attributes and label. These
 * renderers should have been preregistered via gcr_renderer_register().
 * @param label The label for the renderer
 * @param attrs The attributes to render
 * @returns a new renderer, or %NULL if no renderer          matched the attributes; the render should be released with g_object_unref()
 */
export function renderer_create(label: string | null, attrs: Gck.Attributes): Renderer | null
/**
 * Register a renderer to be created when matching attributes are passed to
 * gcr_renderer_create().
 * @param renderer_type The renderer class type
 * @param attrs The attributes to match
 */
export function renderer_register(renderer_type: GObject.GType, attrs: Gck.Attributes): void
/**
 * Register all the well known renderers for certificates and keys known to the
 * Gcr library.
 */
export function renderer_register_well_known(): void
/**
 * Get an implementation of #GcrViewer that supports a view
 * of multiple renderers.
 * @returns a newly allocated #GcrViewer, which should be          released with g_object_unref()
 */
export function viewer_new(): Viewer
/**
 * Get an implementation of #GcrViewer that supports a scrolled view
 * of multiple renderers.
 * @returns a #GcrViewer which is also a #GtkWidget
 */
export function viewer_new_scrolled(): Viewer
export module Renderer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `data-changed`
     */
    export interface DataChangedSignalCallback {
        ($obj: Renderer): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.Renderer

        /**
         * The attributes to display.
         */
        attributes?: Gck.Attributes | null
        /**
         * The label to display.
         */
        label?: string | null
    }

}

export interface Renderer {

    // Own properties of GcrUi-3.GcrUi.Renderer

    /**
     * The attributes to display.
     */
    attributes: Gck.Attributes
    /**
     * The label to display.
     */
    label: string | null

    // Owm methods of GcrUi-3.GcrUi.Renderer

    /**
     * Emit the #GcrRenderer::data-changed signal on the renderer. This is used by
     * renderer implementations.
     */
    emit_data_changed(): void
    /**
     * Get the PKCS#11 attributes, if any, set for this renderer to display.
     * @returns the attributes, owned by the renderer
     */
    get_attributes(): Gck.Attributes | null
    /**
     * Called by #GcrViewer when about to display a popup menu for the content
     * displayed by the renderer. The renderer can add a menu item if desired.
     * @param viewer The viewer that is displaying a popup
     * @param menu The popup menu being displayed
     */
    popuplate_popup(viewer: Viewer, menu: Gtk.Menu): void
    /**
     * Render the contents of the renderer to the given viewer.
     * @param viewer The viewer to render to.
     */
    render_view(viewer: Viewer): void
    /**
     * Set the PKCS#11 attributes for this renderer to display.
     * @param attrs attributes to set
     */
    set_attributes(attrs: Gck.Attributes | null): void

    // Own virtual methods of GcrUi-3.GcrUi.Renderer

    vfunc_data_changed(): void
    vfunc_populate_popup(viewer: Viewer, menu: Gtk.Menu): void
    /**
     * Render the contents of the renderer to the given viewer.
     * @virtual 
     * @param viewer The viewer to render to.
     */
    vfunc_render_view(viewer: Viewer): void

    // Own signals of GcrUi-3.GcrUi.Renderer

    connect(sigName: "data-changed", callback: Renderer.DataChangedSignalCallback): number
    connect_after(sigName: "data-changed", callback: Renderer.DataChangedSignalCallback): number
    emit(sigName: "data-changed", ...args: any[]): void

    // Class property signals of GcrUi-3.GcrUi.Renderer

    connect(sigName: "notify::attributes", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An interface that's implemented by renderers which wish to render data to a
 * [iface`Viewer]`.
 * 
 * The interaction between [iface`Renderer]` and [iface`Viewer]` is not stable
 * yet, and so new renderers cannot be implemented outside the Gcr library at
 * this time.
 * 
 * To lookup a renderer for a given set of attributes, use the gcr_renderer_create()
 * function. This will create and initialize a renderer that's capable of viewing
 * the data in those attributes.
 * @interface 
 */
export class Renderer extends GObject.Object {

    // Own properties of GcrUi-3.GcrUi.Renderer

    static name: string
    static $gtype: GObject.GType<Renderer>

    // Constructors of GcrUi-3.GcrUi.Renderer

    constructor(config?: Renderer.ConstructorProperties) 
    _init(config?: Renderer.ConstructorProperties): void
    /**
     * Create and initialize a renderer for the given attributes and label. These
     * renderers should have been preregistered via gcr_renderer_register().
     * @param label The label for the renderer
     * @param attrs The attributes to render
     * @returns a new renderer, or %NULL if no renderer          matched the attributes; the render should be released with g_object_unref()
     */
    static create(label: string | null, attrs: Gck.Attributes): Renderer | null
    /**
     * Register a renderer to be created when matching attributes are passed to
     * gcr_renderer_create().
     * @param renderer_type The renderer class type
     * @param attrs The attributes to match
     */
    static register(renderer_type: GObject.GType, attrs: Gck.Attributes): void
    /**
     * Register all the well known renderers for certificates and keys known to the
     * Gcr library.
     */
    static register_well_known(): void
}

export module Viewer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Viewer extends Gtk.Widget {

    // Owm methods of GcrUi-3.GcrUi.Viewer

    /**
     * Add a renderer to this viewer.
     * @param renderer The renderer to add
     */
    add_renderer(renderer: Renderer): void
    /**
     * Get the number of renderers present in the viewer.
     * @returns The number of renderers.
     */
    count_renderers(): number
    /**
     * Get a pointer to the renderer at the given index. It is an error to request
     * an index that is out of bounds.
     * @param index_ The index of the renderer to get
     * @returns the render, owned by the viewer
     */
    get_renderer(index_: number): Renderer
    /**
     * Insert a renderer at a specific point in the viewer
     * @param renderer the renderer to insert
     * @param before the renderer to insert before
     */
    insert_renderer(renderer: Renderer, before: Renderer | null): void
    /**
     * Remove a renderer from this viewer.
     * @param renderer The renderer to remove
     */
    remove_renderer(renderer: Renderer): void

    // Own virtual methods of GcrUi-3.GcrUi.Viewer

    /**
     * Add a renderer to this viewer.
     * @virtual 
     * @param renderer The renderer to add
     */
    vfunc_add_renderer(renderer: Renderer): void
    /**
     * Get the number of renderers present in the viewer.
     * @virtual 
     * @returns The number of renderers.
     */
    vfunc_count_renderers(): number
    /**
     * Get a pointer to the renderer at the given index. It is an error to request
     * an index that is out of bounds.
     * @virtual 
     * @param index_ The index of the renderer to get
     * @returns the render, owned by the viewer
     */
    vfunc_get_renderer(index_: number): Renderer
    /**
     * Insert a renderer at a specific point in the viewer
     * @virtual 
     * @param renderer the renderer to insert
     * @param before the renderer to insert before
     */
    vfunc_insert_renderer(renderer: Renderer, before: Renderer | null): void
    /**
     * Remove a renderer from this viewer.
     * @virtual 
     * @param renderer The renderer to remove
     */
    vfunc_remove_renderer(renderer: Renderer): void

    // Class property signals of GcrUi-3.GcrUi.Viewer

    connect(sigName: "notify::app-paintable", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Viewer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An abstract interface that represents a widget that can hold
 * various renderers and display their contents.
 * 
 * The interaction between [iface`Renderer]` and [iface`Viewer]` is not stable
 * yet, and so viewers cannot be implemented outside the Gcr library at this
 * time.
 * 
 * Use the [func`Viewer`.new] and [func`Viewer`.new_scrolled] to get default
 * implementations of viewers.
 * @interface 
 */
export class Viewer extends GObject.Object {

    // Own properties of GcrUi-3.GcrUi.Viewer

    static name: string
    static $gtype: GObject.GType<Viewer>

    // Constructors of GcrUi-3.GcrUi.Viewer

    constructor(config?: Viewer.ConstructorProperties) 
    _init(config?: Viewer.ConstructorProperties): void
    /**
     * Get an implementation of #GcrViewer that supports a view
     * of multiple renderers.
     * @returns a newly allocated #GcrViewer, which should be          released with g_object_unref()
     */
    static new(): Viewer
    /**
     * Get an implementation of #GcrViewer that supports a scrolled view
     * of multiple renderers.
     * @returns a #GcrViewer which is also a #GtkWidget
     */
    static new_scrolled(): Viewer
}

export module CertificateRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gcr.Certificate.ConstructorProperties, Gcr.Comparable.ConstructorProperties, Renderer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.CertificateRenderer

        /**
         * The certificate attributes to display. One of the attributes must be
         * a CKA_VALUE type attribute which contains a DER encoded certificate.
         */
        attributes?: Gck.Attributes | null
        /**
         * The certificate to display. May be %NULL.
         */
        certificate?: Gcr.Certificate | null
        /**
         * The label to display.
         */
        label?: string | null
    }

}

export interface CertificateRenderer extends Gcr.Certificate, Gcr.Comparable, Renderer {

    // Own properties of GcrUi-3.GcrUi.CertificateRenderer

    /**
     * The certificate attributes to display. One of the attributes must be
     * a CKA_VALUE type attribute which contains a DER encoded certificate.
     */
    attributes: Gck.Attributes
    /**
     * The certificate to display. May be %NULL.
     */
    certificate: Gcr.Certificate
    /**
     * The label to display.
     */
    label: any

    // Own fields of GcrUi-3.GcrUi.CertificateRenderer

    parent: GObject.Object

    // Owm methods of GcrUi-3.GcrUi.CertificateRenderer

    /**
     * Get the certificate displayed in the renderer. If no certificate was
     * explicitly set, then the renderer will return itself since it acts as
     * a valid certificate.
     * @returns The certificate, owned by the renderer.
     */
    get_certificate(): Gcr.Certificate
    /**
     * Set a certificate to display in the renderer.
     * @param certificate the certificate to display
     */
    set_certificate(certificate: Gcr.Certificate | null): void

    // Class property signals of GcrUi-3.GcrUi.CertificateRenderer

    connect(sigName: "notify::attributes", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::certificate", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::certificate", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::expiry", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expiry", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expiry", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::issuer", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::issuer", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::issuer", ...args: any[]): void
    connect(sigName: "notify::markup", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::markup", ...args: any[]): void
    connect(sigName: "notify::subject", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: CertificateRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subject", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An implementation of #GcrRenderer which renders certificates.
 * @class 
 */
export class CertificateRenderer extends GObject.Object {

    // Own properties of GcrUi-3.GcrUi.CertificateRenderer

    static name: string
    static $gtype: GObject.GType<CertificateRenderer>

    // Constructors of GcrUi-3.GcrUi.CertificateRenderer

    constructor(config?: CertificateRenderer.ConstructorProperties) 
    /**
     * Create a new certificate renderer to display the certificate.
     * @constructor 
     * @param certificate The certificate to display
     * @returns a newly allocated #GcrCertificateRenderer, which          should be released with g_object_unref()
     */
    constructor(certificate: Gcr.Certificate) 
    /**
     * Create a new certificate renderer to display the certificate.
     * @constructor 
     * @param certificate The certificate to display
     * @returns a newly allocated #GcrCertificateRenderer, which          should be released with g_object_unref()
     */
    static new(certificate: Gcr.Certificate): CertificateRenderer
    /**
     * Create a new certificate renderer to display the label and attributes. One
     * of the attributes should be a CKA_VALUE type attribute containing a DER
     * encoded certificate.
     * @constructor 
     * @param label the label to display
     * @param attrs The attributes to display
     * @returns a newly allocated #GcrCertificateRenderer, which          should be released with g_object_unref()
     */
    static new_for_attributes(label: string | null, attrs: any | null): CertificateRenderer
    _init(config?: CertificateRenderer.ConstructorProperties): void
}

export module CertificateWidget {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.CertificateWidget

        attributes?: Gck.Attributes | null
        certificate?: Gcr.Certificate | null
    }

}

export interface CertificateWidget extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of GcrUi-3.GcrUi.CertificateWidget

    attributes: Gck.Attributes
    certificate: Gcr.Certificate

    // Owm methods of GcrUi-3.GcrUi.CertificateWidget

    /**
     * Get the attributes displayed in the widget. The attributes should contain
     * a certificate.
     * @returns the attributes, owned by the widget
     */
    get_attributes(): Gck.Attributes | null
    /**
     * Get the certificate displayed in the widget.
     * @returns the certificate
     */
    get_certificate(): Gcr.Certificate | null
    /**
     * Set the attributes displayed in the widget. The attributes should contain
     * a certificate.
     * @param attrs the attributes to display
     */
    set_attributes(attrs: Gck.Attributes | null): void
    /**
     * Set the certificate displayed in the widget
     * @param certificate the certificate to display
     */
    set_certificate(certificate: Gcr.Certificate | null): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of GcrUi-3.GcrUi.CertificateWidget

    connect(sigName: "notify::attributes", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::certificate", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::certificate", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
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
    connect(sigName: "notify::is-focus", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
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
    connect(sigName: "notify::window", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: CertificateWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A widget that can be used to display a certificate.
 * 
 * A certificate widget is normally in a collapsed state showing only
 * details, but can be expanded by the user.
 * 
 * Use [ctor`CertificateWidget`.new] to create a new certificate widget. Only
 * one certificate can be displayed. It contains a [iface`Viewer]` internally
 * and [class`CertificateRenderer]` is used to render the certificate to the
 * viewer.
 * 
 * To show more than one certificate in a view, create the viewer and
 * add renderers to it.
 * @class 
 */
export class CertificateWidget extends Gtk.Bin {

    // Own properties of GcrUi-3.GcrUi.CertificateWidget

    static name: string
    static $gtype: GObject.GType<CertificateWidget>

    // Constructors of GcrUi-3.GcrUi.CertificateWidget

    constructor(config?: CertificateWidget.ConstructorProperties) 
    /**
     * Create a new certificate widget which displays a given certificate.
     * @constructor 
     * @param certificate certificate to display, or %NULL
     * @returns a new certificate widget
     */
    constructor(certificate: Gcr.Certificate | null) 
    /**
     * Create a new certificate widget which displays a given certificate.
     * @constructor 
     * @param certificate certificate to display, or %NULL
     * @returns a new certificate widget
     */
    static new(certificate: Gcr.Certificate | null): CertificateWidget
    _init(config?: CertificateWidget.ConstructorProperties): void
}

export module CollectionModel {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TreeModel.ConstructorProperties, Gtk.TreeSortable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.CollectionModel

        collection?: Gcr.Collection | null
        columns?: any | null
    }

}

export interface CollectionModel extends Gtk.TreeModel, Gtk.TreeSortable {

    // Own properties of GcrUi-3.GcrUi.CollectionModel

    collection: Gcr.Collection
    readonly columns: any

    // Own fields of GcrUi-3.GcrUi.CollectionModel

    parent: GObject.Object

    // Owm methods of GcrUi-3.GcrUi.CollectionModel

    /**
     * Set whether a given row is toggled selected or not.
     * @param iter The row
     * @param selected Whether the row should be selected or not.
     */
    change_selected(iter: Gtk.TreeIter, selected: boolean): void
    /**
     * Get the column identifier for the column that contains the values
     * of the selected state.
     * @returns The column identifier.
     */
    column_for_selected(): number
    /**
     * Get the collection which this model represents
     * @returns the collection, owned by the model
     */
    get_collection(): Gcr.Collection
    /**
     * Get a list of checked/selected objects.
     * @returns a list of selected          objects, which should be freed with g_list_free()
     */
    get_selected_objects(): GObject.Object[]
    /**
     * Check whether a given row has been toggled as selected.
     * @param iter The row
     * @returns Whether the row has been selected.
     */
    is_selected(iter: Gtk.TreeIter): boolean
    /**
     * Set `iter` to the row for the given object. If the object is not in this
     * model, then %FALSE will be returned.
     * @param object The object
     * @param iter The row for the object
     * @returns %TRUE if the object was present.
     */
    iter_for_object(object: GObject.Object, iter: Gtk.TreeIter): boolean
    /**
     * Get the object that is represented by the given row in the model.
     * @param iter The row
     * @returns The object, owned by the model.
     */
    object_for_iter(iter: Gtk.TreeIter): GObject.Object
    /**
     * Set the collection which this model represents
     * @param collection the collection or %NULL
     */
    set_collection(collection: Gcr.Collection | null): void
    /**
     * Set the checked/selected objects.
     * @param selected a list of objects to select
     */
    set_selected_objects(selected: GObject.Object[]): void
    /**
     * Toggle the selected state of a given row.
     * @param iter The row
     */
    toggle_selected(iter: Gtk.TreeIter): void

    // Class property signals of GcrUi-3.GcrUi.CollectionModel

    connect(sigName: "notify::collection", callback: (($obj: CollectionModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collection", callback: (($obj: CollectionModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collection", ...args: any[]): void
    connect(sigName: "notify::columns", callback: (($obj: CollectionModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::columns", callback: (($obj: CollectionModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::columns", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Ain implementation of a [iface`Gtk`.TreeModel] which contains a row for each
 * object in a [iface`Gcr`.Collection].
 * 
 * As objects are added or removed from the collection, rows are added and
 * removed from this model.
 * 
 * The row values come from the properties of the objects in the collection. Use
 * [ctor`CollectionModel`.new] to create a new collection model. To have more
 * control over the values use a set of [struct`Gcr`.Column] structures to
 * define the columns. This can be done with [ctor`CollectionModel`.new_full] or
 * [method`CollectionModel`.set_columns].
 * 
 * Each row can have a selected state, which is represented by a boolean column.
 * The selected state can be toggled with gcr_collection_model_toggle_selected()
 * or set with gcr_collection_model_set_selected_objects() and retrieved with
 * [method`CollectionModel`.get_selected_objects].
 * 
 * To determine which object a row represents and vice versa, use the
 * [method`CollectionModel`.iter_for_object] or
 * [method`CollectionModel`.object_for_iter] functions.
 * @class 
 */
export class CollectionModel extends GObject.Object {

    // Own properties of GcrUi-3.GcrUi.CollectionModel

    static name: string
    static $gtype: GObject.GType<CollectionModel>

    // Constructors of GcrUi-3.GcrUi.CollectionModel

    constructor(config?: CollectionModel.ConstructorProperties) 
    _init(config?: CollectionModel.ConstructorProperties): void
}

export module ComboSelector {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.CellEditable.ConstructorProperties, Gtk.CellLayout.ConstructorProperties, Gtk.ComboBox.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.ComboSelector

        /**
         * The collection which contains the objects to display in the selector.
         */
        collection?: Gcr.Collection | null
    }

}

export interface ComboSelector extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {

    // Own properties of GcrUi-3.GcrUi.ComboSelector

    /**
     * The collection which contains the objects to display in the selector.
     */
    readonly collection: Gcr.Collection

    // Conflicting properties

    parent_instance: Gtk.Bin & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Own fields of GcrUi-3.GcrUi.ComboSelector

    parent: Gtk.ComboBox & Gtk.Container

    // Owm methods of GcrUi-3.GcrUi.ComboSelector

    /**
     * Get the collection that this selector is displaying objects from.
     * @returns The collection, owned by the selector.
     */
    get_collection(): Gcr.Collection
    /**
     * Get the selected object in the selector, or %NULL if nothing selected.
     * @returns the selected object, owned by the selector, or %NULL
     */
    get_selected(): GObject.Object
    /**
     * Set the currently selected object in the selector, or clear the selection
     * if selected is set to %NULL.
     * @param selected the object to select or %NULL
     */
    set_selected(selected: GObject.Object | null): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of GcrUi-3.GcrUi.ComboSelector

    connect(sigName: "notify::collection", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collection", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collection", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::active-id", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-id", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-id", ...args: any[]): void
    connect(sigName: "notify::add-tearoffs", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-tearoffs", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::add-tearoffs", ...args: any[]): void
    connect(sigName: "notify::button-sensitivity", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::button-sensitivity", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::button-sensitivity", ...args: any[]): void
    connect(sigName: "notify::cell-area", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-area", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-area", ...args: any[]): void
    connect(sigName: "notify::column-span-column", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-span-column", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-span-column", ...args: any[]): void
    connect(sigName: "notify::entry-text-column", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entry-text-column", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entry-text-column", ...args: any[]): void
    connect(sigName: "notify::has-entry", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-entry", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-entry", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::id-column", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-column", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-column", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::popup-fixed-width", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-fixed-width", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-fixed-width", ...args: any[]): void
    connect(sigName: "notify::popup-shown", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-shown", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-shown", ...args: any[]): void
    connect(sigName: "notify::row-span-column", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-span-column", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-span-column", ...args: any[]): void
    connect(sigName: "notify::tearoff-title", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tearoff-title", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tearoff-title", ...args: any[]): void
    connect(sigName: "notify::wrap-width", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-width", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-width", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::editing-canceled", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: ComboSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A widget that can be used to select a certificate or key. It allows
 * the user to select one object from the selector at a time.
 * @class 
 */
export class ComboSelector extends Gtk.ComboBox {

    // Own properties of GcrUi-3.GcrUi.ComboSelector

    static name: string
    static $gtype: GObject.GType<ComboSelector>

    // Constructors of GcrUi-3.GcrUi.ComboSelector

    constructor(config?: ComboSelector.ConstructorProperties) 
    /**
     * Create a new #GcrTreeSelector.
     * @constructor 
     * @param collection The collection that contains the objects to display
     * @returns A newly allocated selector, which should be released with     g_object_unref().
     */
    constructor(collection: Gcr.Collection) 
    /**
     * Create a new #GcrTreeSelector.
     * @constructor 
     * @param collection The collection that contains the objects to display
     * @returns A newly allocated selector, which should be released with     g_object_unref().
     */
    static new(collection: Gcr.Collection): ComboSelector

    // Overloads of new

    /**
     * Creates a new empty #GtkComboBox.
     * @constructor 
     * @returns A new #GtkComboBox.
     */
    static new(): Gtk.ComboBox
    _init(config?: ComboSelector.ConstructorProperties): void
}

export module FailureRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends Renderer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.FailureRenderer

        attributes?: Gck.Attributes | null
        label?: string | null
    }

}

export interface FailureRenderer extends Renderer {

    // Own properties of GcrUi-3.GcrUi.FailureRenderer

    attributes: Gck.Attributes
    label: string | null

    // Class property signals of GcrUi-3.GcrUi.FailureRenderer

    connect(sigName: "notify::attributes", callback: (($obj: FailureRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: FailureRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: FailureRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: FailureRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A renderer that can be used for unsupported data.
 * @class 
 */
export class FailureRenderer extends GObject.Object {

    // Own properties of GcrUi-3.GcrUi.FailureRenderer

    static name: string
    static $gtype: GObject.GType<FailureRenderer>

    // Constructors of GcrUi-3.GcrUi.FailureRenderer

    constructor(config?: FailureRenderer.ConstructorProperties) 
    /**
     * Create a new renderer for an error.
     * @constructor 
     * @param label the label for the failure
     * @param error the error to display
     * @returns the new renderer
     */
    constructor(label: string | null, error: GLib.Error) 
    /**
     * Create a new renderer for an error.
     * @constructor 
     * @param label the label for the failure
     * @param error the error to display
     * @returns the new renderer
     */
    static new(label: string | null, error: GLib.Error): FailureRenderer
    _init(config?: FailureRenderer.ConstructorProperties): void
    /**
     * Create a new renderer for unsupported data.
     * @param label the label for the failure
     * @returns the new renderer
     */
    static new_unsupported(label: string | null): Renderer
}

export module ImportButton {

    // Signal callback interfaces

    /**
     * Signal callback interface for `imported`
     */
    export interface ImportedSignalCallback {
        ($obj: ImportButton, importer: GObject.Object, error: GLib.Error): void
    }

    /**
     * Signal callback interface for `importing`
     */
    export interface ImportingSignalCallback {
        ($obj: ImportButton, importer: GObject.Object): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Activatable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Button.ConstructorProperties {
    }

}

export interface ImportButton extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {

    // Own fields of GcrUi-3.GcrUi.ImportButton

    parent: Gtk.Button & Gtk.Container

    // Owm methods of GcrUi-3.GcrUi.ImportButton

    /**
     * Queue an item to import via the button
     * @param parsed a parsed item
     */
    add_parsed(parsed: Gcr.Parsed): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Own virtual methods of GcrUi-3.GcrUi.ImportButton

    vfunc_imported(importer: Gcr.Importer, error: GLib.Error): void
    vfunc_importing(importer: Gcr.Importer): void

    // Own signals of GcrUi-3.GcrUi.ImportButton

    connect(sigName: "imported", callback: ImportButton.ImportedSignalCallback): number
    connect_after(sigName: "imported", callback: ImportButton.ImportedSignalCallback): number
    emit(sigName: "imported", importer: GObject.Object, error: GLib.Error, ...args: any[]): void
    connect(sigName: "importing", callback: ImportButton.ImportingSignalCallback): number
    connect_after(sigName: "importing", callback: ImportButton.ImportingSignalCallback): number
    emit(sigName: "importing", importer: GObject.Object, ...args: any[]): void

    // Class property signals of GcrUi-3.GcrUi.ImportButton

    connect(sigName: "notify::always-show-image", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-show-image", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-position", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relief", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relief", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-stock", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::related-action", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: (($obj: ImportButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A button which imports keys and certificates.
 * 
 * The import button shows a spinner when the button is activated. When more
 * than one importer is available, it shows a drop down to select which to
 * import to.
 * @class 
 */
export class ImportButton extends Gtk.Button {

    // Own properties of GcrUi-3.GcrUi.ImportButton

    static name: string
    static $gtype: GObject.GType<ImportButton>

    // Constructors of GcrUi-3.GcrUi.ImportButton

    constructor(config?: ImportButton.ConstructorProperties) 
    /**
     * Create a new #GcrImportButton.
     * @constructor 
     * @param label label to display on the button
     * @returns a newly created #GcrImportButton
     */
    constructor(label: string | null) 
    /**
     * Create a new #GcrImportButton.
     * @constructor 
     * @param label label to display on the button
     * @returns a newly created #GcrImportButton
     */
    static new(label: string | null): ImportButton

    // Overloads of new

    /**
     * Creates a new #GtkButton widget. To add a child widget to the button,
     * use gtk_container_add().
     * @constructor 
     * @returns The newly created #GtkButton widget.
     */
    static new(): Gtk.Button
    _init(config?: ImportButton.ConstructorProperties): void
}

export module KeyRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends Renderer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.KeyRenderer

        object?: Gck.Object | null
    }

}

export interface KeyRenderer extends Renderer {

    // Own properties of GcrUi-3.GcrUi.KeyRenderer

    object: Gck.Object

    // Own fields of GcrUi-3.GcrUi.KeyRenderer

    parent: GObject.Object

    // Owm methods of GcrUi-3.GcrUi.KeyRenderer

    /**
     * Get the attributes displayed in the renderer.
     * @returns the attributes, owned by the renderer
     */
    get_attributes(): Gck.Attributes | null
    /**
     * Get the attributes displayed in the renderer. The attributes should represent
     * either an RSA, DSA, or EC key in PKCS#11 style.
     * @param attrs the attributes to display
     */
    set_attributes(attrs: Gck.Attributes | null): void

    // Class property signals of GcrUi-3.GcrUi.KeyRenderer

    connect(sigName: "notify::object", callback: (($obj: KeyRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object", callback: (($obj: KeyRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: KeyRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: KeyRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: KeyRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: KeyRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An implementation of #GcrRenderer which renders keys.
 * @class 
 */
export class KeyRenderer extends GObject.Object {

    // Own properties of GcrUi-3.GcrUi.KeyRenderer

    static name: string
    static $gtype: GObject.GType<KeyRenderer>

    // Constructors of GcrUi-3.GcrUi.KeyRenderer

    constructor(config?: KeyRenderer.ConstructorProperties) 
    /**
     * Create a new key renderer which renders a given key in the attributes.
     * @constructor 
     * @param label label describing the key
     * @param attrs key to display, or %NULL
     * @returns a newly allocated #GcrKeyRenderer, which should be          freed with g_object_unref()
     */
    constructor(label: string | null, attrs: Gck.Attributes | null) 
    /**
     * Create a new key renderer which renders a given key in the attributes.
     * @constructor 
     * @param label label describing the key
     * @param attrs key to display, or %NULL
     * @returns a newly allocated #GcrKeyRenderer, which should be          freed with g_object_unref()
     */
    static new(label: string | null, attrs: Gck.Attributes | null): KeyRenderer
    _init(config?: KeyRenderer.ConstructorProperties): void
}

export module KeyWidget {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.KeyWidget

        attributes?: Gck.Attributes | null
    }

}

export interface KeyWidget extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of GcrUi-3.GcrUi.KeyWidget

    attributes: Gck.Attributes

    // Owm methods of GcrUi-3.GcrUi.KeyWidget

    /**
     * Get the attributes displayed in the widget.
     * @returns The attributes, owned by the widget.
     */
    get_attributes(): Gck.Attributes | null
    /**
     * Get the attributes displayed in the widget. The attributes should represent
     * either an RSA, DSA or EC key in PKCS#11 style.
     * @param attrs the attributes to display
     */
    set_attributes(attrs: Gck.Attributes | null): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of GcrUi-3.GcrUi.KeyWidget

    connect(sigName: "notify::attributes", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: KeyWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A key widget and renderer
 * 
 * A key widget can be used to display a RSA, DSA or EC key. The widget is
 * normally in a collapsed state showing only details, but can be expanded by
 * the user.
 * 
 * Use [ctor`KeyWidget`.new] to create a new key widget. Only one key can be
 * displayed. A key widget contains a [iface`Viewer]` internally and
 * [class`KeyRenderer]` is used to render the key to the viewer. To show more
 * than one key in a view, create the viewer and add renderers to it.
 * @class 
 */
export class KeyWidget extends Gtk.Bin {

    // Own properties of GcrUi-3.GcrUi.KeyWidget

    static name: string
    static $gtype: GObject.GType<KeyWidget>

    // Constructors of GcrUi-3.GcrUi.KeyWidget

    constructor(config?: KeyWidget.ConstructorProperties) 
    /**
     * Create a new key widget which displays a given key in the attributes.
     * @constructor 
     * @param attrs key to display, or %NULL
     * @returns A newly allocated #GcrKeyWidget, which should be freed     with g_object_unref().
     */
    constructor(attrs: Gck.Attributes | null) 
    /**
     * Create a new key widget which displays a given key in the attributes.
     * @constructor 
     * @param attrs key to display, or %NULL
     * @returns A newly allocated #GcrKeyWidget, which should be freed     with g_object_unref().
     */
    static new(attrs: Gck.Attributes | null): KeyWidget
    _init(config?: KeyWidget.ConstructorProperties): void
}

export module ListSelector {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.TreeView.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.ListSelector

        /**
         * The collection which contains the objects to display in the selector.
         */
        collection?: Gcr.Collection | null
    }

}

export interface ListSelector extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of GcrUi-3.GcrUi.ListSelector

    /**
     * The collection which contains the objects to display in the selector.
     */
    readonly collection: Gcr.Collection

    // Own fields of GcrUi-3.GcrUi.ListSelector

    parent: Gtk.TreeView & Gtk.Container & Gtk.Container

    // Owm methods of GcrUi-3.GcrUi.ListSelector

    /**
     * Get the collection that this selector is displaying objects from.
     * @returns The collection, owned by the selector.
     */
    get_collection(): Gcr.Collection
    /**
     * Get a list of selected objects.
     * @returns the list of          selected objects, to be released with g_list_free()
     */
    get_selected(): GObject.Object[]
    /**
     * Select certain objects in the selector.
     * @param selected the list of objects to select
     */
    set_selected(selected: GObject.Object[]): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of GcrUi-3.GcrUi.ListSelector

    connect(sigName: "notify::collection", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collection", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collection", ...args: any[]): void
    connect(sigName: "notify::activate-on-single-click", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::enable-grid-lines", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-grid-lines", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-grid-lines", ...args: any[]): void
    connect(sigName: "notify::enable-search", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-search", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-search", ...args: any[]): void
    connect(sigName: "notify::enable-tree-lines", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tree-lines", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-tree-lines", ...args: any[]): void
    connect(sigName: "notify::expander-column", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expander-column", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expander-column", ...args: any[]): void
    connect(sigName: "notify::fixed-height-mode", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-height-mode", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-height-mode", ...args: any[]): void
    connect(sigName: "notify::headers-clickable", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-clickable", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-clickable", ...args: any[]): void
    connect(sigName: "notify::headers-visible", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-visible", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-visible", ...args: any[]): void
    connect(sigName: "notify::hover-expand", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-expand", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-expand", ...args: any[]): void
    connect(sigName: "notify::hover-selection", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-selection", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-selection", ...args: any[]): void
    connect(sigName: "notify::level-indentation", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level-indentation", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level-indentation", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::rubber-banding", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rubber-banding", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rubber-banding", ...args: any[]): void
    connect(sigName: "notify::rules-hint", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rules-hint", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rules-hint", ...args: any[]): void
    connect(sigName: "notify::search-column", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-column", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-column", ...args: any[]): void
    connect(sigName: "notify::show-expanders", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expanders", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-expanders", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: ListSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A selector widget to select 1 or more certificates or keys from a list.
 * 
 * Live search is available for quick filtering.
 * @class 
 */
export class ListSelector extends Gtk.TreeView {

    // Own properties of GcrUi-3.GcrUi.ListSelector

    static name: string
    static $gtype: GObject.GType<ListSelector>

    // Constructors of GcrUi-3.GcrUi.ListSelector

    constructor(config?: ListSelector.ConstructorProperties) 
    /**
     * Create a new #GcrListSelector.
     * @constructor 
     * @param collection The collection that contains the objects to display
     * @returns a newly allocated selector, which should be          released with g_object_unref()
     */
    constructor(collection: Gcr.Collection) 
    /**
     * Create a new #GcrListSelector.
     * @constructor 
     * @param collection The collection that contains the objects to display
     * @returns a newly allocated selector, which should be          released with g_object_unref()
     */
    static new(collection: Gcr.Collection): ListSelector

    // Overloads of new

    /**
     * Creates a new #GtkTreeView widget.
     * @constructor 
     * @returns A newly created #GtkTreeView widget.
     */
    static new(): Gtk.TreeView
    _init(config?: ListSelector.ConstructorProperties): void
}

export module PromptDialog {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gcr.Prompt.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Dialog.ConstructorProperties {
    }

}

export interface PromptDialog extends Atk.ImplementorIface, Gcr.Prompt, Gtk.Buildable {

    // Own properties of GcrUi-3.GcrUi.PromptDialog

    /**
     * Whether the choice check box is visible or not.
     */
    readonly choice_visible: boolean
    /**
     * Whether the password confirm entry is visible or not.
     */
    readonly confirm_visible: boolean
    /**
     * Whether the password entry is visible or not.
     */
    readonly password_visible: boolean
    /**
     * Whether the warning label is visible or not.
     */
    readonly warning_visible: boolean

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window

    // Own fields of GcrUi-3.GcrUi.PromptDialog

    parent: Gtk.Dialog & Gtk.Container

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of GcrUi-3.GcrUi.PromptDialog

    connect(sigName: "notify::choice-visible", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::choice-visible", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::choice-visible", ...args: any[]): void
    connect(sigName: "notify::confirm-visible", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::confirm-visible", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::confirm-visible", ...args: any[]): void
    connect(sigName: "notify::password-visible", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-visible", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password-visible", ...args: any[]): void
    connect(sigName: "notify::warning-visible", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-visible", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::warning-visible", ...args: any[]): void
    connect(sigName: "notify::use-header-bar", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::caller-window", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caller-window", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caller-window", ...args: any[]): void
    connect(sigName: "notify::cancel-label", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancel-label", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancel-label", ...args: any[]): void
    connect(sigName: "notify::choice-chosen", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::choice-chosen", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::choice-chosen", ...args: any[]): void
    connect(sigName: "notify::choice-label", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::choice-label", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::choice-label", ...args: any[]): void
    connect(sigName: "notify::continue-label", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::continue-label", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::continue-label", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::message", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::password-new", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-new", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password-new", ...args: any[]): void
    connect(sigName: "notify::password-strength", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-strength", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password-strength", ...args: any[]): void
    connect(sigName: "notify::warning", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: (($obj: PromptDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::warning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A [iface`Gcr`.Prompt] implementation which shows a GTK dialog. The dialog
 * will remain visible (but insensitive) between prompts. If the user cancels
 * the dialog between prompts, then the dialog will be hidden.
 * @class 
 */
export class PromptDialog extends Gtk.Dialog {

    // Own properties of GcrUi-3.GcrUi.PromptDialog

    static name: string
    static $gtype: GObject.GType<PromptDialog>

    // Constructors of GcrUi-3.GcrUi.PromptDialog

    constructor(config?: PromptDialog.ConstructorProperties) 
    _init(config?: PromptDialog.ConstructorProperties): void

    // Conflicting static methods

    static new(...args: any[]): any
}

export module SecureEntryBuffer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.EntryBuffer.ConstructorProperties {
    }

}

export interface SecureEntryBuffer {

    // Own fields of GcrUi-3.GcrUi.SecureEntryBuffer

    parent: Gtk.EntryBuffer

    // Class property signals of GcrUi-3.GcrUi.SecureEntryBuffer

    connect(sigName: "notify::length", callback: (($obj: SecureEntryBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: SecureEntryBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: SecureEntryBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: SecureEntryBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: SecureEntryBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: SecureEntryBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
export class SecureEntryBuffer extends Gtk.EntryBuffer {

    // Own properties of GcrUi-3.GcrUi.SecureEntryBuffer

    static name: string
    static $gtype: GObject.GType<SecureEntryBuffer>

    // Constructors of GcrUi-3.GcrUi.SecureEntryBuffer

    constructor(config?: SecureEntryBuffer.ConstructorProperties) 
    /**
     * Create a new secure entry buffer.
     * @constructor 
     * @returns the new entry buffer
     */
    constructor() 
    /**
     * Create a new secure entry buffer.
     * @constructor 
     * @returns the new entry buffer
     */
    static new(): SecureEntryBuffer

    // Overloads of new

    /**
     * Create a new GtkEntryBuffer object.
     * 
     * Optionally, specify initial text to set in the buffer.
     * @constructor 
     * @param initial_chars initial buffer text, or %NULL
     * @param n_initial_chars number of characters in `initial_chars,` or -1
     * @returns A new GtkEntryBuffer object.
     */
    static new(initial_chars: string | null, n_initial_chars: number): Gtk.EntryBuffer
    _init(config?: SecureEntryBuffer.ConstructorProperties): void
}

export module TreeSelector {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.TreeView.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.TreeSelector

        /**
         * The collection which contains the objects to display in the selector.
         */
        collection?: Gcr.Collection | null
        /**
         * The columns to use to display the objects.
         */
        columns?: any | null
    }

}

export interface TreeSelector extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of GcrUi-3.GcrUi.TreeSelector

    /**
     * The collection which contains the objects to display in the selector.
     */
    readonly collection: Gcr.Collection
    /**
     * The columns to use to display the objects.
     */
    readonly columns: any

    // Own fields of GcrUi-3.GcrUi.TreeSelector

    parent: Gtk.TreeView & Gtk.Container & Gtk.Container

    // Owm methods of GcrUi-3.GcrUi.TreeSelector

    /**
     * Get the collection that this selector is displaying objects from.
     * @returns the collection, owned by the selector
     */
    get_collection(): Gcr.Collection
    /**
     * Get a list of selected objects.
     * @returns the list of selected          objects, to be released with g_list_free()
     */
    get_selected(): GObject.Object[]
    /**
     * Select certain objects in the selector.
     * @param selected the list of objects to select
     */
    set_selected(selected: GObject.Object[]): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of GcrUi-3.GcrUi.TreeSelector

    connect(sigName: "notify::collection", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collection", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collection", ...args: any[]): void
    connect(sigName: "notify::columns", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::columns", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::columns", ...args: any[]): void
    connect(sigName: "notify::activate-on-single-click", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::enable-grid-lines", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-grid-lines", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-grid-lines", ...args: any[]): void
    connect(sigName: "notify::enable-search", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-search", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-search", ...args: any[]): void
    connect(sigName: "notify::enable-tree-lines", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tree-lines", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-tree-lines", ...args: any[]): void
    connect(sigName: "notify::expander-column", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expander-column", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expander-column", ...args: any[]): void
    connect(sigName: "notify::fixed-height-mode", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-height-mode", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-height-mode", ...args: any[]): void
    connect(sigName: "notify::headers-clickable", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-clickable", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-clickable", ...args: any[]): void
    connect(sigName: "notify::headers-visible", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-visible", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-visible", ...args: any[]): void
    connect(sigName: "notify::hover-expand", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-expand", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-expand", ...args: any[]): void
    connect(sigName: "notify::hover-selection", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-selection", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-selection", ...args: any[]): void
    connect(sigName: "notify::level-indentation", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level-indentation", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level-indentation", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::rubber-banding", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rubber-banding", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rubber-banding", ...args: any[]): void
    connect(sigName: "notify::rules-hint", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rules-hint", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rules-hint", ...args: any[]): void
    connect(sigName: "notify::search-column", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-column", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-column", ...args: any[]): void
    connect(sigName: "notify::show-expanders", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expanders", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-expanders", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: TreeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A tree selector can be used to select certificates or keys. It allows
 * the user to select multiple objects from a tree.
 * @class 
 */
export class TreeSelector extends Gtk.TreeView {

    // Own properties of GcrUi-3.GcrUi.TreeSelector

    static name: string
    static $gtype: GObject.GType<TreeSelector>

    // Constructors of GcrUi-3.GcrUi.TreeSelector

    constructor(config?: TreeSelector.ConstructorProperties) 
    _init(config?: TreeSelector.ConstructorProperties): void
}

export module UnlockOptionsWidget {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.UnlockOptionsWidget

        choice?: string | null
        ttl?: number | null
    }

}

export interface UnlockOptionsWidget extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of GcrUi-3.GcrUi.UnlockOptionsWidget

    choice: string | null
    ttl: number

    // Owm methods of GcrUi-3.GcrUi.UnlockOptionsWidget

    /**
     * Get the currently selected option, like %GCR_UNLOCK_OPTION_ALWAYS.
     * @returns The currently selected option name.
     */
    get_choice(): string | null
    /**
     * Get the label for one of the options. Use an option name like
     * %GCR_UNLOCK_OPTION_ALWAYS.
     * @param option The option name
     * @returns The current label for the option.
     */
    get_label(option: string | null): string | null
    /**
     * Get the sensitivity state for one of the options. Use an option name like
     * %GCR_UNLOCK_OPTION_ALWAYS.
     * @param option The option name
     * @returns Whether the option is sensitive or not.
     */
    get_sensitive(option: string | null): boolean

    // Overloads of get_sensitive

    /**
     * Returns the widget’s sensitivity (in the sense of returning
     * the value that has been set using gtk_widget_set_sensitive()).
     * 
     * The effective sensitivity of a widget is however determined by both its
     * own and its parent widget’s sensitivity. See gtk_widget_is_sensitive().
     * @returns %TRUE if the widget is sensitive
     */
    get_sensitive(): boolean
    /**
     * Get the timeout setting set for unlock options that have a timeout.
     * This will also return a valid value if the currently selected option
     * does not have a timeout.
     * @returns The unlock timeout in seconds.
     */
    get_ttl(): number
    /**
     * Set the currently selected option. Use an option name like
     * %GCR_UNLOCK_OPTION_ALWAYS.
     * @param option The option name
     */
    set_choice(option: string | null): void
    /**
     * Set the label for one of the options. Use an option name like
     * %GCR_UNLOCK_OPTION_ALWAYS.
     * @param option The option name
     * @param text The new label
     */
    set_label(option: string | null, text: string | null): void
    /**
     * Set the sensitivity state for one of the options. Use an option name like
     * %GCR_UNLOCK_OPTION_ALWAYS. The reason will be displayed as a tooltip.
     * @param option The option name
     * @param sensitive The sensitivity state.
     * @param reason A user displayable string which contains the reason for the sensitivity.
     */
    set_sensitive(option: string | null, sensitive: boolean, reason: string | null): void

    // Overloads of set_sensitive

    /**
     * Sets the sensitivity of a widget. A widget is sensitive if the user
     * can interact with it. Insensitive widgets are “grayed out” and the
     * user can’t interact with them. Insensitive widgets are known as
     * “inactive”, “disabled”, or “ghosted” in some other toolkits.
     * @param sensitive %TRUE to make the widget sensitive
     */
    set_sensitive(sensitive: boolean): void
    /**
     * Set the current setting for the timeout. This can be set even when the
     * currently selected option does not have a timeout.
     * @param ttl The timeout to set, in seconds
     */
    set_ttl(ttl: number): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of GcrUi-3.GcrUi.UnlockOptionsWidget

    connect(sigName: "notify::choice", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::choice", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::choice", ...args: any[]): void
    connect(sigName: "notify::ttl", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ttl", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ttl", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: UnlockOptionsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This widget displays a set of unlock options for the user to select.
 * 
 * The user can choose between keeping caching the unlock indefinitely, or for
 * a given amount of time.
 * 
 * Each option has a different name, for example #GCR_UNLOCK_OPTION_ALWAYS. These
 * names are used together with the various functions like
 * [method`UnlockOptionsWidget`.get_choice].
 * @class 
 */
export class UnlockOptionsWidget extends Gtk.Bin {

    // Own properties of GcrUi-3.GcrUi.UnlockOptionsWidget

    static name: string
    static $gtype: GObject.GType<UnlockOptionsWidget>

    // Constructors of GcrUi-3.GcrUi.UnlockOptionsWidget

    constructor(config?: UnlockOptionsWidget.ConstructorProperties) 
    /**
     * Create a new #GcrUnlockOptionsWidget.
     * @constructor 
     * @returns a new #GcrUnlockOptionsWidget
     */
    constructor() 
    /**
     * Create a new #GcrUnlockOptionsWidget.
     * @constructor 
     * @returns a new #GcrUnlockOptionsWidget
     */
    static new(): UnlockOptionsWidget
    _init(config?: UnlockOptionsWidget.ConstructorProperties): void
}

export module ViewerWidget {

    // Signal callback interfaces

    /**
     * Signal callback interface for `added`
     */
    export interface AddedSignalCallback {
        ($obj: ViewerWidget, renderer: Renderer, parsed: Gcr.Parsed): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.ViewerWidget

        /**
         * Display name for data being displayed. This is automatically
         * calculated from a loaded file, or can be explicitly set.
         * 
         * Used as a hint when displaying a title for the data, but may be
         * overridden by the parsed data.
         */
        display_name?: string | null
    }

}

export interface ViewerWidget extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of GcrUi-3.GcrUi.ViewerWidget

    /**
     * Display name for data being displayed. This is automatically
     * calculated from a loaded file, or can be explicitly set.
     * 
     * Used as a hint when displaying a title for the data, but may be
     * overridden by the parsed data.
     */
    display_name: string | null
    /**
     * The parser used to parse loaded data into viewable items.
     */
    readonly parser: Gcr.Parser

    // Owm methods of GcrUi-3.GcrUi.ViewerWidget

    /**
     * Clear the error displayed on the viewer widget.
     */
    clear_error(): void
    /**
     * Get the display name for data being displayed. This is automatically
     * calculated from a loaded file, or can be explicitly set.
     * 
     * Used as a hint when displaying a title for the data, but may be
     * overridden by the parsed data.
     * @returns the display name
     */
    get_display_name(): string | null
    /**
     * Get the parser used to parse loaded data into viewable items.
     * @returns the parser
     */
    get_parser(): Gcr.Parser
    /**
     * Get the viewer used to display the viewable items.
     * @returns the viewer
     */
    get_viewer(): Viewer
    /**
     * Parse and load some data to be displayed into the viewer widgets. The data
     * may contain multiple parseable items if the format can contain multiple
     * items.
     * @param display_name label for the loaded data
     * @param data data to load
     */
    load_bytes(display_name: string | null, data: GLib.Bytes): void
    /**
     * Parse and load some data to be displayed into the viewer widgets. The data
     * may contain multiple parseable items if the format can contain multiple
     * items.
     * 
     * This function will copy the data. Use [method`ViewerWidget`.load_bytes] to avoid
     * copying the data.
     * @param display_name label for the loaded data
     * @param data data to load
     */
    load_data(display_name: string | null, data: Uint8Array): void
    /**
     * Display contents of a file in the viewer widget. Multiple files can
     * be loaded.
     * @param file a file to load
     */
    load_file(file: Gio.File): void
    /**
     * Set the display name for data being displayed. Once explicitly
     * set it will no longer be calculated automatically by loading data.
     * 
     * Used as a hint when displaying a title for the data, but may be
     * overridden by the parsed data.
     * @param display_name the display name
     */
    set_display_name(display_name: string | null): void
    /**
     * Show an error on the viewer widget. This is displayed on a info bar near
     * the edge of the widget.
     * @param message descriptive error message
     * @param error detailed error
     */
    show_error(message: string | null, error: GLib.Error | null): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Own signals of GcrUi-3.GcrUi.ViewerWidget

    connect(sigName: "added", callback: ViewerWidget.AddedSignalCallback): number
    connect_after(sigName: "added", callback: ViewerWidget.AddedSignalCallback): number
    emit(sigName: "added", renderer: Renderer, parsed: Gcr.Parsed, ...args: any[]): void

    // Class property signals of GcrUi-3.GcrUi.ViewerWidget

    connect(sigName: "notify::display-name", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::parser", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parser", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parser", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: ViewerWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A viewer widget which can display certificates and keys that are
 * located in files.
 * @class 
 */
export class ViewerWidget extends Gtk.Box {

    // Own properties of GcrUi-3.GcrUi.ViewerWidget

    static name: string
    static $gtype: GObject.GType<ViewerWidget>

    // Constructors of GcrUi-3.GcrUi.ViewerWidget

    constructor(config?: ViewerWidget.ConstructorProperties) 
    /**
     * Create a new viewer widget.
     * @constructor 
     * @returns A new #GcrViewerWidget object
     */
    constructor() 
    /**
     * Create a new viewer widget.
     * @constructor 
     * @returns A new #GcrViewerWidget object
     */
    static new(): ViewerWidget

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: ViewerWidget.ConstructorProperties): void
}

export interface CertificateRendererClass {

    // Own fields of GcrUi-3.GcrUi.CertificateRendererClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * The class for #GcrCertificateRenderer.
 * @record 
 */
export abstract class CertificateRendererClass {

    // Own properties of GcrUi-3.GcrUi.CertificateRendererClass

    static name: string
}

export interface CertificateRendererPrivate {
}

export class CertificateRendererPrivate {

    // Own properties of GcrUi-3.GcrUi.CertificateRendererPrivate

    static name: string
}

export interface CertificateWidgetClass {
}

export abstract class CertificateWidgetClass {

    // Own properties of GcrUi-3.GcrUi.CertificateWidgetClass

    static name: string
}

export interface CertificateWidgetPrivate {
}

export class CertificateWidgetPrivate {

    // Own properties of GcrUi-3.GcrUi.CertificateWidgetPrivate

    static name: string
}

export interface CollectionModelClass {

    // Own fields of GcrUi-3.GcrUi.CollectionModelClass

    /**
     * The parent class
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * The class for #GcrCollectionModel.
 * @record 
 */
export abstract class CollectionModelClass {

    // Own properties of GcrUi-3.GcrUi.CollectionModelClass

    static name: string
}

export interface CollectionModelPrivate {
}

export class CollectionModelPrivate {

    // Own properties of GcrUi-3.GcrUi.CollectionModelPrivate

    static name: string
}

export interface ComboSelectorClass {
}

export abstract class ComboSelectorClass {

    // Own properties of GcrUi-3.GcrUi.ComboSelectorClass

    static name: string
}

export interface ComboSelectorPrivate {
}

export class ComboSelectorPrivate {

    // Own properties of GcrUi-3.GcrUi.ComboSelectorPrivate

    static name: string
}

export interface FailureRendererClass {
}

export abstract class FailureRendererClass {

    // Own properties of GcrUi-3.GcrUi.FailureRendererClass

    static name: string
}

export interface FailureRendererPrivate {
}

export class FailureRendererPrivate {

    // Own properties of GcrUi-3.GcrUi.FailureRendererPrivate

    static name: string
}

export interface ImportButtonClass {

    // Own fields of GcrUi-3.GcrUi.ImportButtonClass

    /**
     * The parent class
     * @field 
     */
    parent_class: Gtk.ButtonClass
    importing: (self: ImportButton, importer: Gcr.Importer) => void
    imported: (self: ImportButton, importer: Gcr.Importer, error: GLib.Error) => void
}

/**
 * Class struct for [class`ImportButton]`.
 * @record 
 */
export abstract class ImportButtonClass {

    // Own properties of GcrUi-3.GcrUi.ImportButtonClass

    static name: string
}

export interface ImportButtonPrivate {
}

export class ImportButtonPrivate {

    // Own properties of GcrUi-3.GcrUi.ImportButtonPrivate

    static name: string
}

export interface KeyRendererClass {

    // Own fields of GcrUi-3.GcrUi.KeyRendererClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * The class for #GcrKeyRenderer.
 * @record 
 */
export abstract class KeyRendererClass {

    // Own properties of GcrUi-3.GcrUi.KeyRendererClass

    static name: string
}

export interface KeyRendererPrivate {
}

export class KeyRendererPrivate {

    // Own properties of GcrUi-3.GcrUi.KeyRendererPrivate

    static name: string
}

export interface KeyWidgetClass {
}

export abstract class KeyWidgetClass {

    // Own properties of GcrUi-3.GcrUi.KeyWidgetClass

    static name: string
}

export interface KeyWidgetPrivate {
}

export class KeyWidgetPrivate {

    // Own properties of GcrUi-3.GcrUi.KeyWidgetPrivate

    static name: string
}

export interface ListSelectorClass {
}

export abstract class ListSelectorClass {

    // Own properties of GcrUi-3.GcrUi.ListSelectorClass

    static name: string
}

export interface ListSelectorPrivate {
}

export class ListSelectorPrivate {

    // Own properties of GcrUi-3.GcrUi.ListSelectorPrivate

    static name: string
}

export interface PromptDialogClass {

    // Own fields of GcrUi-3.GcrUi.PromptDialogClass

    parent_class: Gtk.DialogClass
}

export abstract class PromptDialogClass {

    // Own properties of GcrUi-3.GcrUi.PromptDialogClass

    static name: string
}

export interface PromptDialogPrivate {
}

export class PromptDialogPrivate {

    // Own properties of GcrUi-3.GcrUi.PromptDialogPrivate

    static name: string
}

export interface RendererIface {

    // Own fields of GcrUi-3.GcrUi.RendererIface

    /**
     * the parent interface type
     * @field 
     */
    parent: GObject.TypeInterface
    data_changed: (self: Renderer) => void
    render_view: (self: Renderer, viewer: Viewer) => void
    populate_popup: (self: Renderer, viewer: Viewer, menu: Gtk.Menu) => void
}

/**
 * The interface for #GcrRenderer
 * @record 
 */
export abstract class RendererIface {

    // Own properties of GcrUi-3.GcrUi.RendererIface

    static name: string
}

export interface SecureEntryBufferClass {

    // Own fields of GcrUi-3.GcrUi.SecureEntryBufferClass

    parent_class: Gtk.EntryBufferClass
}

export abstract class SecureEntryBufferClass {

    // Own properties of GcrUi-3.GcrUi.SecureEntryBufferClass

    static name: string
}

export interface SecureEntryBufferPrivate {
}

export class SecureEntryBufferPrivate {

    // Own properties of GcrUi-3.GcrUi.SecureEntryBufferPrivate

    static name: string
}

export interface TreeSelectorClass {
}

export abstract class TreeSelectorClass {

    // Own properties of GcrUi-3.GcrUi.TreeSelectorClass

    static name: string
}

export interface TreeSelectorPrivate {
}

export class TreeSelectorPrivate {

    // Own properties of GcrUi-3.GcrUi.TreeSelectorPrivate

    static name: string
}

export interface UnlockOptionsWidgetClass {
}

export abstract class UnlockOptionsWidgetClass {

    // Own properties of GcrUi-3.GcrUi.UnlockOptionsWidgetClass

    static name: string
}

export interface UnlockOptionsWidgetPrivate {
}

export class UnlockOptionsWidgetPrivate {

    // Own properties of GcrUi-3.GcrUi.UnlockOptionsWidgetPrivate

    static name: string
}

export interface ViewerIface {

    // Own fields of GcrUi-3.GcrUi.ViewerIface

    /**
     * The parent interface
     * @field 
     */
    parent: GObject.TypeInterface
    add_renderer: (viewer: Viewer, renderer: Renderer) => void
    insert_renderer: (viewer: Viewer, renderer: Renderer, before: Renderer | null) => void
    remove_renderer: (viewer: Viewer, renderer: Renderer) => void
    count_renderers: (viewer: Viewer) => number
    get_renderer: (viewer: Viewer, index_: number) => Renderer
}

/**
 * The interface for #GcrViewer
 * @record 
 */
export abstract class ViewerIface {

    // Own properties of GcrUi-3.GcrUi.ViewerIface

    static name: string
}

export interface ViewerWidgetClass {

    // Own fields of GcrUi-3.GcrUi.ViewerWidgetClass

    parent_class: Gtk.BoxClass
}

export abstract class ViewerWidgetClass {

    // Own properties of GcrUi-3.GcrUi.ViewerWidgetClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END