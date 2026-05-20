
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
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type Gcr from '@girs/gcr-3';
import type Gck from '@girs/gck-1';

export namespace GcrUi {

    /**
     * GcrUi-3
     */


    /**
     * If a {@link CollectionModel} is created with a mode of
     * {@link GcrUi.CollectionModelMode.TREE}, then any included objects that are themselves a
     * {@link Gcr.Collection}, will have all child
     * objects include as child rows in a tree form.
     * @gir-type Enum
     */
    enum CollectionModelMode {
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
     * renderers should have been preregistered via `gcr_renderer_register()`.
     * @param label The label for the renderer
     * @param attrs The attributes to render
     * @returns a new renderer, or `null` if no renderer          matched the attributes; the render should be released with `g_object_unref()`
     */
    function renderer_create(label: string | null, attrs: Gck.Attributes): Renderer | null;

    /**
     * Register a renderer to be created when matching attributes are passed to
     * `gcr_renderer_create()`.
     * @param renderer_type The renderer class type
     * @param attrs The attributes to match
     */
    function renderer_register(renderer_type: GObject.GType, attrs: Gck.Attributes): void;

    /**
     * Register all the well known renderers for certificates and keys known to the
     * Gcr library.
     */
    function renderer_register_well_known(): void;

    /**
     * Get an implementation of {@link GcrUi.Viewer} that supports a view
     * of multiple renderers.
     * @returns a newly allocated {@link GcrUi.Viewer}, which should be          released with `g_object_unref()`
     */
    function viewer_new(): Viewer;

    /**
     * Get an implementation of {@link GcrUi.Viewer} that supports a scrolled view
     * of multiple renderers.
     * @returns a {@link GcrUi.Viewer} which is also a {@link Gtk.Widget}
     */
    function viewer_new_scrolled(): Viewer;

    namespace CertificateRenderer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::certificate": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::expiry": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::issuer": (pspec: GObject.ParamSpec) => void;
            "notify::markup": (pspec: GObject.ParamSpec) => void;
            "notify::subject": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gcr.Certificate.ConstructorProps, Gcr.Comparable.ConstructorProps, Renderer.ConstructorProps {
            attributes: Gck.Attributes | any;
            certificate: Gcr.Certificate;
            label: string;
        }
    }

    /**
     * An implementation of {@link GcrUi.Renderer} which renders certificates.
     * @gir-type Class
     */
    class CertificateRenderer extends GObject.Object implements Gcr.Certificate, Gcr.Comparable, Renderer {
        static $gtype: GObject.GType<CertificateRenderer>;

        // Properties
        /**
         * The certificate attributes to display. One of the attributes must be
         * a CKA_VALUE type attribute which contains a DER encoded certificate.
         */
    // This accessor conflicts with another accessor's type in a parent class or interface.
        get attributes(): Gck.Attributes | any;
    // This accessor conflicts with another accessor's type in a parent class or interface.
        set attributes(val: Gck.Attributes | any);

        /**
         * The certificate to display. May be `null`.
         */
        get certificate(): Gcr.Certificate;
        set certificate(val: Gcr.Certificate);

        /**
         * The label to display.
         */
        get label(): string;
        set label(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CertificateRenderer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CertificateRenderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](certificate: Gcr.Certificate): CertificateRenderer;

        static new_for_attributes(label: string | null, attrs: null): CertificateRenderer;

        // Signals
        /** @signal */
        connect<K extends keyof CertificateRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CertificateRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CertificateRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the certificate displayed in the renderer. If no certificate was
         * explicitly set, then the renderer will return itself since it acts as
         * a valid certificate.
         * @returns The certificate, owned by the renderer.
         */
        get_certificate(): Gcr.Certificate;

        /**
         * Set a certificate to display in the renderer.
         * @param certificate the certificate to display
         */
        set_certificate(certificate: Gcr.Certificate | null): void;

        /**
         * A readable description for this certificate
         * @read-only
          * @category Inherited from Gcr.Certificate
         */
        get description(): string;

        /**
         * The expiry date of the certificate
         * @read-only
          * @category Inherited from Gcr.Certificate
         */
        get expiry(): GLib.Date;

        /**
         * An icon representing the certificate
         * @read-only
          * @category Inherited from Gcr.Certificate
         */
        get icon(): Gio.Icon;

        /**
         * Common name part of the certificate issuer
         * @read-only
          * @category Inherited from Gcr.Certificate
         */
        get issuer(): string;

        /**
         * GLib markup to describe the certificate
         * @read-only
          * @category Inherited from Gcr.Certificate
         */
        get markup(): string;

        /**
         * Common name part of the certificate subject
         * @read-only
          * @category Inherited from Gcr.Certificate
         */
        get subject(): string;

        /**
         * Get the basic constraints for the certificate if present. If `false` is
         * returned then no basic constraints are present and the `is_ca` and
         * `path_len` arguments are not changed.
         * @returns whether basic constraints are present or not
         */
        get_basic_constraints(): [boolean, boolean, number];

        /**
         * Gets the raw DER data for an X.509 certificate.
         * @returns raw DER data of the X.509 certificate
         */
        get_der_data(): Uint8Array;

        /**
         * Get the expiry date of this certificate.
         * 
         * The {@link GLib.Date} returned should be freed by the caller using
         * `g_date_free()` when no longer required.
         * @returns An allocated expiry date of this certificate.
         */
        get_expiry_date(): GLib.Date;

        /**
         * Calculate the fingerprint for this certificate.
         * 
         * The caller should free the returned data using `g_free()` when
         * it is no longer required.
         * @param type the type of algorithm for the fingerprint.
         * @returns the raw binary fingerprint
         */
        get_fingerprint(type: GLib.ChecksumType): Uint8Array;

        /**
         * Calculate the fingerprint for this certificate, and return it
         * as a hex string.
         * 
         * The caller should free the returned data using `g_free()` when
         * it is no longer required.
         * @param type the type of algorithm for the fingerprint.
         * @returns an allocated hex string which contains the fingerprint.
         */
        get_fingerprint_hex(type: GLib.ChecksumType): string;

        /**
         * Get the issued date of this certificate.
         * 
         * The {@link GLib.Date} returned should be freed by the caller using
         * `g_date_free()` when no longer required.
         * @returns An allocated issued date of this certificate.
         */
        get_issued_date(): GLib.Date;

        /**
         * Get the common name of the issuer of this certificate.
         * 
         * The string returned should be freed by the caller when no longer
         * required.
         * @returns The allocated issuer CN, or `null` if no issuer CN present.
         */
        get_issuer_cn(): string;

        /**
         * Get the full issuer DN of the certificate as a (mostly)
         * readable string.
         * 
         * The string returned should be freed by the caller when no longer
         * required.
         * @returns The allocated issuer DN of the certificate.
         */
        get_issuer_dn(): string;

        /**
         * Get a name to represent the issuer of this certificate.
         * 
         * This will try to lookup the common name, orianizational unit,
         * organization in that order.
         * @returns the allocated issuer name, or `null` if no issuer name
         */
        get_issuer_name(): string;

        /**
         * Get a part of the DN of the issuer of this certificate.
         * 
         * Examples of a `part` might be the 'OU' (organizational unit)
         * or the 'CN' (common name). Only the value of that part
         * of the DN is returned.
         * 
         * The string returned should be freed by the caller when no longer
         * required.
         * @param part a DN type string or OID.
         * @returns the allocated part of the issuer DN, or `null` if no          such part is present
         */
        get_issuer_part(part: string): string | null;

        /**
         * Get the raw DER data for the issuer DN of the certificate.
         * 
         * The data should be freed by using `g_free()` when no longer required.
         * @returns allocated memory containing          the raw issuer
         */
        get_issuer_raw(): Uint8Array;

        /**
         * Get the key size in bits of the public key represented
         * by this certificate.
         * @returns The key size of the certificate.
         */
        get_key_size(): number;

        /**
         * Calculate a GMarkup string for displaying this certificate.
         * @returns the markup string
         */
        get_markup_text(): string;

        /**
         * Get the raw binary serial number of the certificate.
         * 
         * The caller should free the returned data using `g_free()` when
         * it is no longer required.
         * @returns the raw binary serial number.
         */
        get_serial_number(): Uint8Array;

        /**
         * Get the serial number of the certificate as a hex string.
         * 
         * The caller should free the returned data using `g_free()` when
         * it is no longer required.
         * @returns an allocated string containing the serial number as hex.
         */
        get_serial_number_hex(): string;

        /**
         * Get the common name of the subject of this certificate.
         * 
         * The string returned should be freed by the caller when no longer
         * required.
         * @returns The allocated subject CN, or `null` if no subject CN present.
         */
        get_subject_cn(): string;

        /**
         * Get the full subject DN of the certificate as a (mostly)
         * readable string.
         * 
         * The string returned should be freed by the caller when no longer
         * required.
         * @returns The allocated subject DN of the certificate.
         */
        get_subject_dn(): string;

        /**
         * Get a name to represent the subject of this certificate.
         * 
         * This will try to lookup the common name, orianizational unit,
         * organization in that order.
         * @returns the allocated subject name, or `null` if no subject name
         */
        get_subject_name(): string;

        /**
         * Get a part of the DN of the subject of this certificate.
         * 
         * Examples of a `part` might be the 'OU' (organizational unit)
         * or the 'CN' (common name). Only the value of that part
         * of the DN is returned.
         * 
         * The string returned should be freed by the caller when no longer
         * required.
         * @param part a DN type string or OID.
         * @returns the allocated part of the subject DN, or `null` if no          such part is present.
         */
        get_subject_part(part: string): string | null;

        /**
         * Get the raw DER data for the subject DN of the certificate.
         * 
         * The data should be freed by using `g_free()` when no longer required.
         * @returns allocated memory containing          the raw subject
         */
        get_subject_raw(): Uint8Array;

        /**
         * Check if `issuer` could be the issuer of this certificate. This is done by
         * comparing the relevant subject and issuer fields. No signature check is
         * done. Proper verification of certificates must be done via a crypto
         * library.
         * @param issuer a possible issuer {@link Gcr.Certificate}
         * @returns whether `issuer` could be the issuer of the certificate.
         */
        is_issuer(issuer: Gcr.Certificate): boolean;

        /**
         * Implementers of the {@link Gcr.Certificate} mixin should call this function to notify
         * when the certificate has changed to emit notifications on the various
         * properties.
         */
        mixin_emit_notify(): void;

        /**
         * Gets the raw DER data for an X.509 certificate.
         * @virtual
         */
        vfunc_get_der_data(): Uint8Array | string;

        /**
         * Compare whether two objects represent the same thing. The return value can
         * also be used to sort the objects.
         * @param other Another comparable object
         * @returns Zero if the two objects represent the same thing, non-zero if not.
         */
        compare(other: Gcr.Comparable | null): number;

        /**
         * Compare whether two objects represent the same thing. The return value can
         * also be used to sort the objects.
         * @param other Another comparable object
         * @virtual
         */
        vfunc_compare(other: Gcr.Comparable | null): number;

        /**
         * Emit the {@link GcrUi.Renderer.SignalSignatures.data_changed | GcrUi.Renderer::data-changed} signal on the renderer. This is used by
         * renderer implementations.
         */
        emit_data_changed(): void;

        /**
         * Get the PKCS#11 attributes, if any, set for this renderer to display.
         * @returns the attributes, owned by the renderer
         */
        get_attributes(): Gck.Attributes | null;

        /**
         * Called by {@link GcrUi.Viewer} when about to display a popup menu for the content
         * displayed by the renderer. The renderer can add a menu item if desired.
         * @param viewer The viewer that is displaying a popup
         * @param menu The popup menu being displayed
         */
        popuplate_popup(viewer: Viewer, menu: Gtk.Menu): void;

        /**
         * Render the contents of the renderer to the given viewer.
         * @param viewer The viewer to render to.
         */
        render_view(viewer: Viewer): void;

        /**
         * Set the PKCS#11 attributes for this renderer to display.
         * @param attrs attributes to set
         */
        set_attributes(attrs: Gck.Attributes | null): void;

        /**
         * @virtual
         */
        vfunc_data_changed(): void;

        /**
         * @param viewer 
         * @param menu 
         * @virtual
         */
        vfunc_populate_popup(viewer: Viewer, menu: Gtk.Menu): void;

        /**
         * Render the contents of the renderer to the given viewer.
         * @param viewer The viewer to render to.
         * @virtual
         */
        vfunc_render_view(viewer: Viewer): void;
    }


    namespace CertificateWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::certificate": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            attributes: Gck.Attributes | null;
            certificate: Gcr.Certificate | null;
        }
    }

    /**
     * A widget that can be used to display a certificate.
     * 
     * A certificate widget is normally in a collapsed state showing only
     * details, but can be expanded by the user.
     * 
     * Use {@link CertificateWidget.new} to create a new certificate widget. Only
     * one certificate can be displayed. It contains a {@link Viewer} internally
     * and {@link CertificateRenderer} is used to render the certificate to the
     * viewer.
     * 
     * To show more than one certificate in a view, create the viewer and
     * add renderers to it.
     * @gir-type Class
     */
    class CertificateWidget extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<CertificateWidget>;

        // Properties
        get attributes(): Gck.Attributes | null;
        set attributes(val: Gck.Attributes | null);

        get certificate(): Gcr.Certificate | null;
        set certificate(val: Gcr.Certificate | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CertificateWidget.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CertificateWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](certificate: Gcr.Certificate | null): CertificateWidget;

        // Signals
        /** @signal */
        connect<K extends keyof CertificateWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CertificateWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CertificateWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the attributes displayed in the widget. The attributes should contain
         * a certificate.
         * @returns the attributes, owned by the widget
         */
        get_attributes(): Gck.Attributes | null;

        /**
         * Get the certificate displayed in the widget.
         * @returns the certificate
         */
        get_certificate(): Gcr.Certificate | null;

        /**
         * Set the attributes displayed in the widget. The attributes should contain
         * a certificate.
         * @param attrs the attributes to display
         */
        set_attributes(attrs: Gck.Attributes | null): void;

        /**
         * Set the certificate displayed in the widget
         * @param certificate the certificate to display
         */
        set_certificate(certificate: Gcr.Certificate | null): void;
    }


    namespace CollectionModel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::collection": (pspec: GObject.ParamSpec) => void;
            "notify::columns": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gtk.TreeModel.ConstructorProps, Gtk.TreeSortable.ConstructorProps {
            collection: Gcr.Collection;
            columns: never;
        }
    }

    /**
     * Ain implementation of a {@link Gtk.TreeModel} which contains a row for each
     * object in a {@link Gcr.Collection}.
     * 
     * As objects are added or removed from the collection, rows are added and
     * removed from this model.
     * 
     * The row values come from the properties of the objects in the collection. Use
     * {@link CollectionModel.new} to create a new collection model. To have more
     * control over the values use a set of {@link Gcr.Column} structures to
     * define the columns. This can be done with {@link CollectionModel.new_full} or
     * {@link CollectionModel.set_columns}.
     * 
     * Each row can have a selected state, which is represented by a boolean column.
     * The selected state can be toggled with `gcr_collection_model_toggle_selected()`
     * or set with `gcr_collection_model_set_selected_objects()` and retrieved with
     * {@link CollectionModel.get_selected_objects}.
     * 
     * To determine which object a row represents and vice versa, use the
     * {@link CollectionModel.iter_for_object} or
     * {@link CollectionModel.object_for_iter} functions.
     * @gir-type Class
     */
    class CollectionModel extends GObject.Object implements Gtk.TreeModel, Gtk.TreeSortable {
        static $gtype: GObject.GType<CollectionModel>;

        // Properties
        get collection(): Gcr.Collection;
        set collection(val: Gcr.Collection);

        /**
         * @construct-only
         */
        get columns(): null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CollectionModel.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CollectionModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof CollectionModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CollectionModel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CollectionModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CollectionModel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CollectionModel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CollectionModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Set whether a given row is toggled selected or not.
         * @param iter The row
         * @param selected Whether the row should be selected or not.
         */
        change_selected(iter: Gtk.TreeIter, selected: boolean): void;

        /**
         * Get the column identifier for the column that contains the values
         * of the selected state.
         * @returns The column identifier.
         */
        column_for_selected(): number;

        /**
         * Get the collection which this model represents
         * @returns the collection, owned by the model
         */
        get_collection(): Gcr.Collection;

        /**
         * Get a list of checked/selected objects.
         * @returns a list of selected          objects, which should be freed with `g_list_free()`
         */
        get_selected_objects(): GObject.Object[];

        /**
         * Check whether a given row has been toggled as selected.
         * @param iter The row
         * @returns Whether the row has been selected.
         */
        is_selected(iter: Gtk.TreeIter): boolean;

        /**
         * Set `iter` to the row for the given object. If the object is not in this
         * model, then `false` will be returned.
         * @param object The object
         * @param iter The row for the object
         * @returns `true` if the object was present.
         */
        iter_for_object(object: GObject.Object, iter: Gtk.TreeIter): boolean;

        /**
         * Get the object that is represented by the given row in the model.
         * @param iter The row
         * @returns The object, owned by the model.
         */
        object_for_iter<T = GObject.Object>(iter: Gtk.TreeIter): T;

        /**
         * Set the collection which this model represents
         * @param collection the collection or `null`
         */
        set_collection(collection: Gcr.Collection | null): void;

        /**
         * Set the checked/selected objects.
         * @param selected a list of objects to select
         */
        set_selected_objects(selected: GObject.Object[]): void;

        /**
         * Toggle the selected state of a given row.
         * @param iter The row
         */
        toggle_selected(iter: Gtk.TreeIter): void;

        /**
         * Creates a new {@link Gtk.TreeModel}, with `child_model` as the child_model
         * and `root` as the virtual root.
         * @param root A {@link Gtk.TreePath} or `null`.
         * @returns A new {@link Gtk.TreeModel}.
         */
        filter_new(root: Gtk.TreePath | null): Gtk.TreeModel;

        /**
         * Calls func on each node in model in a depth-first fashion.
         * 
         * If `func` returns `true`, then the tree ceases to be walked,
         * and `gtk_tree_model_foreach()` returns.
         * @param func a function to be called on each row
         */
        foreach(func: Gtk.TreeModelForeachFunc): void;

        /**
         * Returns the type of the column.
         * @param index_ the column index
         * @returns the type of the column
         */
        get_column_type(index_: number): GObject.GType;

        /**
         * Returns a set of flags supported by this interface.
         * 
         * The flags are a bitwise combination of {@link Gtk.TreeModelFlags}.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         * @returns the flags supported by this interface
         */
        get_flags(): Gtk.TreeModelFlags;

        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and `false` is returned.
         * @param path the {@link Gtk.TreePath}-struct
         * @returns `true`, if `iter` was set
         */
        get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

        /**
         * Initializes `iter` with the first iterator in the tree
         * (the one at the path "0") and returns `true`. Returns
         * `false` if the tree is empty.
         * @returns `true`, if `iter` was set
         */
        get_iter_first(): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to a valid iterator pointing to `path_string`, if it
         * exists. Otherwise, `iter` is left invalid and `false` is returned.
         * @param path_string a string representation of a {@link Gtk.TreePath}-struct
         * @returns `true`, if `iter` was set
         */
        get_iter_from_string(path_string: string): [boolean, Gtk.TreeIter];

        /**
         * Returns the number of columns supported by `tree_model`.
         * @returns the number of columns
         */
        get_n_columns(): number;

        /**
         * Returns a newly-created {@link Gtk.TreePath}-struct referenced by `iter`.
         * 
         * This path should be freed with `gtk_tree_path_free()`.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns a newly-created {@link Gtk.TreePath}-struct
         */
        get_path(iter: Gtk.TreeIter): Gtk.TreePath;

        /**
         * Generates a string representation of the iter.
         * 
         * This string is a “:” separated list of numbers.
         * For example, “4:10:0:3” would be an acceptable
         * return value for this string.
         * @param iter a {@link Gtk.TreeIter}-struct
         * @returns a newly-allocated string.     Must be freed with `g_free()`.
         */
        get_string_from_iter(iter: Gtk.TreeIter): string;

        /**
         * Initializes and sets `value` to that at `column`.
         * 
         * When done with `value`, `g_value_unset()` needs to be called
         * to free any allocated memory.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @param column the column to lookup the value at
         */
        get_value(iter: Gtk.TreeIter, column: number): unknown;

        /**
         * Sets `iter` to point to the first child of `parent`.
         * 
         * If `parent` has no children, `false` is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         * 
         * If `parent` is `null` returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the {@link Gtk.TreeIter}-struct, or `null`
         * @returns `true`, if `iter` has been set to the first child
         */
        iter_children(parent: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

        /**
         * Returns `true` if `iter` has children, `false` otherwise.
         * @param iter the {@link Gtk.TreeIter}-struct to test for children
         * @returns `true` if `iter` has children
         */
        iter_has_child(iter: Gtk.TreeIter): boolean;

        /**
         * Returns the number of children that `iter` has.
         * 
         * As a special case, if `iter` is `null`, then the number
         * of toplevel nodes is returned.
         * @param iter the {@link Gtk.TreeIter}-struct, or `null`
         * @returns the number of children of `iter`
         */
        iter_n_children(iter: Gtk.TreeIter | null): number;

        /**
         * Sets `iter` to point to the node following it at the current level.
         * 
         * If there is no next `iter`, `false` is returned and `iter` is set
         * to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns `true` if `iter` has been changed to the next node
         */
        iter_next(iter: Gtk.TreeIter): boolean;

        /**
         * Sets `iter` to be the child of `parent`, using the given index.
         * 
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and `false` is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is `null`, then the `n`-th root node
         * is set.
         * @param parent the {@link Gtk.TreeIter}-struct to get the child from, or `null`.
         * @param n the index of the desired child
         * @returns `true`, if `parent` has an `n`-th child
         */
        iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to be the parent of `child`.
         * 
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and `false` is returned.
         * `child` will remain a valid node after this function has been
         * called.
         * 
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the {@link Gtk.TreeIter}-struct
         * @returns `true`, if `iter` is set to the parent of `child`
         */
        iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to point to the previous node at the current level.
         * 
         * If there is no previous `iter`, `false` is returned and `iter` is
         * set to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns `true` if `iter` has been changed to the previous node
         */
        iter_previous(iter: Gtk.TreeIter): boolean;

        /**
         * Lets the tree ref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons.
         * 
         * This function is primarily meant as a way for views to let
         * caching models know when nodes are being displayed (and hence,
         * whether or not to cache that node). Being displayed means a node
         * is in an expanded branch, regardless of whether the node is currently
         * visible in the viewport. For example, a file-system based model
         * would not want to keep the entire file-hierarchy in memory,
         * just the sections that are currently being displayed by
         * every current view.
         * 
         * A model should be expected to be able to get an iter independent
         * of its reffed state.
         * @param iter the {@link Gtk.TreeIter}-struct
         */
        ref_node(iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_changed | Gtk.TreeModel::row-changed} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         */
        row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_deleted | Gtk.TreeModel::row-deleted} signal on `tree_model`.
         * 
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         * 
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a {@link Gtk.TreePath}-struct pointing to the previous location of     the deleted row
         */
        row_deleted(path: Gtk.TreePath): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_has_child_toggled | Gtk.TreeModel::row-has-child-toggled} signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         */
        row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_inserted | Gtk.TreeModel::row-inserted} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the inserted row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the inserted row
         */
        row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.rows_reordered | Gtk.TreeModel::rows-reordered} signal on `tree_model`.
         * 
         * This should be called by models when their rows have been
         * reordered.
         * @param path a {@link Gtk.TreePath}-struct pointing to the tree node whose children     have been reordered
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the node     whose children have been reordered, or `null` if the depth     of `path` is 0
         * @param new_order an array of integers     mapping the current position of each child to its old     position before the re-ordering,     i.e. `new_order``[newpos] = oldpos`
         */
        rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void;

        /**
         * Lets the tree unref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see `gtk_tree_model_ref_node()`.
         * 
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the {@link Gtk.TreeIter}-struct
         */
        unref_node(iter: Gtk.TreeIter): void;

        /**
         * Returns the type of the column.
         * @param index_ the column index
         * @virtual
         */
        vfunc_get_column_type(index_: number): GObject.GType;

        /**
         * Returns a set of flags supported by this interface.
         * 
         * The flags are a bitwise combination of {@link Gtk.TreeModelFlags}.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         * @virtual
         */
        vfunc_get_flags(): Gtk.TreeModelFlags;

        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and `false` is returned.
         * @param path the {@link Gtk.TreePath}-struct
         * @virtual
         */
        vfunc_get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

        /**
         * Returns the number of columns supported by `tree_model`.
         * @virtual
         */
        vfunc_get_n_columns(): number;

        /**
         * Returns a newly-created {@link Gtk.TreePath}-struct referenced by `iter`.
         * 
         * This path should be freed with `gtk_tree_path_free()`.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath;

        /**
         * Initializes and sets `value` to that at `column`.
         * 
         * When done with `value`, `g_value_unset()` needs to be called
         * to free any allocated memory.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @param column the column to lookup the value at
         * @virtual
         */
        vfunc_get_value(iter: Gtk.TreeIter, column: number): GObject.Value | any;

        /**
         * Sets `iter` to point to the first child of `parent`.
         * 
         * If `parent` has no children, `false` is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         * 
         * If `parent` is `null` returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the {@link Gtk.TreeIter}-struct, or `null`
         * @virtual
         */
        vfunc_iter_children(parent: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

        /**
         * Returns `true` if `iter` has children, `false` otherwise.
         * @param iter the {@link Gtk.TreeIter}-struct to test for children
         * @virtual
         */
        vfunc_iter_has_child(iter: Gtk.TreeIter): boolean;

        /**
         * Returns the number of children that `iter` has.
         * 
         * As a special case, if `iter` is `null`, then the number
         * of toplevel nodes is returned.
         * @param iter the {@link Gtk.TreeIter}-struct, or `null`
         * @virtual
         */
        vfunc_iter_n_children(iter: Gtk.TreeIter | null): number;

        /**
         * Sets `iter` to point to the node following it at the current level.
         * 
         * If there is no next `iter`, `false` is returned and `iter` is set
         * to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_next(iter: Gtk.TreeIter): boolean;

        /**
         * Sets `iter` to be the child of `parent`, using the given index.
         * 
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and `false` is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is `null`, then the `n`-th root node
         * is set.
         * @param parent the {@link Gtk.TreeIter}-struct to get the child from, or `null`.
         * @param n the index of the desired child
         * @virtual
         */
        vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to be the parent of `child`.
         * 
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and `false` is returned.
         * `child` will remain a valid node after this function has been
         * called.
         * 
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to point to the previous node at the current level.
         * 
         * If there is no previous `iter`, `false` is returned and `iter` is
         * set to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_previous(iter: Gtk.TreeIter): boolean;

        /**
         * Lets the tree ref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons.
         * 
         * This function is primarily meant as a way for views to let
         * caching models know when nodes are being displayed (and hence,
         * whether or not to cache that node). Being displayed means a node
         * is in an expanded branch, regardless of whether the node is currently
         * visible in the viewport. For example, a file-system based model
         * would not want to keep the entire file-hierarchy in memory,
         * just the sections that are currently being displayed by
         * every current view.
         * 
         * A model should be expected to be able to get an iter independent
         * of its reffed state.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_ref_node(iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_changed | Gtk.TreeModel::row-changed} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         * @virtual
         */
        vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_deleted | Gtk.TreeModel::row-deleted} signal on `tree_model`.
         * 
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         * 
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a {@link Gtk.TreePath}-struct pointing to the previous location of     the deleted row
         * @virtual
         */
        vfunc_row_deleted(path: Gtk.TreePath): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_has_child_toggled | Gtk.TreeModel::row-has-child-toggled} signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         * @virtual
         */
        vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_inserted | Gtk.TreeModel::row-inserted} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the inserted row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the inserted row
         * @virtual
         */
        vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Lets the tree unref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see `gtk_tree_model_ref_node()`.
         * 
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_unref_node(iter: Gtk.TreeIter): void;

        /**
         * Fills in `sort_column_id` and `order` with the current sort column and the
         * order. It returns `true` unless the `sort_column_id` is
         * `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID` or
         * `GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID`.
         * @returns `true` if the sort column is not one of the special sort   column ids.
         */
        get_sort_column_id(): [boolean, number, Gtk.SortType];

        /**
         * Returns `true` if the model has a default sort function. This is used
         * primarily by GtkTreeViewColumns in order to determine if a model can
         * go back to the default state, or not.
         * @returns `true`, if the model has a default sort function
         */
        has_default_sort_func(): boolean;

        /**
         * Sets the default comparison function used when sorting to be `sort_func`.
         * If the current sort column id of `sortable` is
         * `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`, then the model will sort using
         * this function.
         * 
         * If `sort_func` is `null`, then there will be no default comparison function.
         * This means that once the model  has been sorted, it can’t go back to the
         * default state. In this case, when the current sort column id of `sortable`
         * is `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`, the model will be unsorted.
         * @param sort_func The comparison function
         */
        set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc): void;

        /**
         * Sets the current sort column to be `sort_column_id`. The `sortable` will
         * resort itself to reflect this change, after emitting a
         * {@link Gtk.TreeSortable.SignalSignatures.sort_column_changed | Gtk.TreeSortable::sort-column-changed} signal. `sort_column_id` may either be
         * a regular column id, or one of the following special values:
         * 
         * - `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`: the default sort function
         *   will be used, if it is set
         * 
         * - `GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID`: no sorting will occur
         * @param sort_column_id the sort column id to set
         * @param order The sort order of the column
         */
        set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void;

        /**
         * Sets the comparison function used when sorting to be `sort_func`. If the
         * current sort column id of `sortable` is the same as `sort_column_id`, then
         * the model will sort using this function.
         * @param sort_column_id the sort column id to set the function for
         * @param sort_func The comparison function
         */
        set_sort_func(sort_column_id: number, sort_func: Gtk.TreeIterCompareFunc): void;

        /**
         * Emits a {@link Gtk.TreeSortable.SignalSignatures.sort_column_changed | Gtk.TreeSortable::sort-column-changed} signal on `sortable`.
         */
        sort_column_changed(): void;

        /**
         * Fills in `sort_column_id` and `order` with the current sort column and the
         * order. It returns `true` unless the `sort_column_id` is
         * `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID` or
         * `GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID`.
         * @virtual
         */
        vfunc_get_sort_column_id(): [boolean, number, Gtk.SortType];

        /**
         * Returns `true` if the model has a default sort function. This is used
         * primarily by GtkTreeViewColumns in order to determine if a model can
         * go back to the default state, or not.
         * @virtual
         */
        vfunc_has_default_sort_func(): boolean;

        /**
         * Sets the default comparison function used when sorting to be `sort_func`.
         * If the current sort column id of `sortable` is
         * `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`, then the model will sort using
         * this function.
         * 
         * If `sort_func` is `null`, then there will be no default comparison function.
         * This means that once the model  has been sorted, it can’t go back to the
         * default state. In this case, when the current sort column id of `sortable`
         * is `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`, the model will be unsorted.
         * @param sort_func The comparison function
         * @virtual
         */
        vfunc_set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc): void;

        /**
         * Sets the current sort column to be `sort_column_id`. The `sortable` will
         * resort itself to reflect this change, after emitting a
         * {@link Gtk.TreeSortable.SignalSignatures.sort_column_changed | Gtk.TreeSortable::sort-column-changed} signal. `sort_column_id` may either be
         * a regular column id, or one of the following special values:
         * 
         * - `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`: the default sort function
         *   will be used, if it is set
         * 
         * - `GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID`: no sorting will occur
         * @param sort_column_id the sort column id to set
         * @param order The sort order of the column
         * @virtual
         */
        vfunc_set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void;

        /**
         * Sets the comparison function used when sorting to be `sort_func`. If the
         * current sort column id of `sortable` is the same as `sort_column_id`, then
         * the model will sort using this function.
         * @param sort_column_id the sort column id to set the function for
         * @param sort_func The comparison function
         * @virtual
         */
        vfunc_set_sort_func(sort_column_id: number, sort_func: Gtk.TreeIterCompareFunc): void;

        /**
         * Emits a {@link Gtk.TreeSortable.SignalSignatures.sort_column_changed | Gtk.TreeSortable::sort-column-changed} signal on `sortable`.
         * @virtual
         */
        vfunc_sort_column_changed(): void;
    }


    namespace ComboSelector {
        // Signal signatures
        interface SignalSignatures extends Gtk.ComboBox.SignalSignatures {
            "notify::collection": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::button-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::entry-text-column": (pspec: GObject.ParamSpec) => void;
            "notify::has-entry": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::id-column": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::popup-fixed-width": (pspec: GObject.ParamSpec) => void;
            "notify::popup-shown": (pspec: GObject.ParamSpec) => void;
            "notify::row-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
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
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ComboBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.CellLayout.ConstructorProps {
            collection: Gcr.Collection;
        }
    }

    /**
     * A widget that can be used to select a certificate or key. It allows
     * the user to select one object from the selector at a time.
     * @gir-type Class
     */
    class ComboSelector extends Gtk.ComboBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
        static $gtype: GObject.GType<ComboSelector>;

        // Properties
        /**
         * The collection which contains the objects to display in the selector.
         * @construct-only
         */
        get collection(): Gcr.Collection;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ComboSelector.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ComboSelector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](collection: Gcr.Collection): ComboSelector;

        // Conflicted with Gtk.ComboBox.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ComboSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ComboSelector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ComboSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ComboSelector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ComboSelector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ComboSelector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the collection that this selector is displaying objects from.
         * @returns The collection, owned by the selector.
         */
        get_collection(): Gcr.Collection;

        /**
         * Get the selected object in the selector, or `null` if nothing selected.
         * @returns the selected object, owned by the selector, or `null`
         */
        get_selected<T = GObject.Object>(): T;

        /**
         * Set the currently selected object in the selector, or clear the selection
         * if selected is set to `null`.
         * @param selected the object to select or `null`
         */
        set_selected(selected: GObject.Object | null): void;

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: Gdk.Event | null): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: Gdk.Event | null): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         */
        add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         */
        clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         */
        clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @returns the cell area used by `cell_layout`, or `null` in case no cell area is used.
         */
        get_area(): Gtk.CellArea | null;

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @returns a list of cell renderers. The list, but not the renderers has     been newly allocated and should be freed with `g_list_free()`     when no longer needed.
         */
        get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         */
        reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         */
        set_cell_data_func(cell: Gtk.CellRenderer, func: Gtk.CellLayoutDataFunc | null): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         * @virtual
         */
        vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         * @virtual
         */
        vfunc_clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         * @virtual
         */
        vfunc_clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @virtual
         */
        vfunc_get_area(): Gtk.CellArea | null;

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @virtual
         */
        vfunc_get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         * @virtual
         */
        vfunc_reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         * @virtual
         */
        vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func: Gtk.CellLayoutDataFunc | null): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace FailureRenderer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Renderer.ConstructorProps {
            attributes: Gck.Attributes | any;
            label: string;
        }
    }

    /**
     * A renderer that can be used for unsupported data.
     * @gir-type Class
     */
    class FailureRenderer extends GObject.Object implements Renderer {
        static $gtype: GObject.GType<FailureRenderer>;

        // Properties
    // This accessor conflicts with another accessor's type in a parent class or interface.
        get attributes(): Gck.Attributes | any;
    // This accessor conflicts with another accessor's type in a parent class or interface.
        set attributes(val: Gck.Attributes | any);

        get label(): string;
        set label(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FailureRenderer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FailureRenderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](label: string | null, error: GLib.Error): FailureRenderer;

        // Signals
        /** @signal */
        connect<K extends keyof FailureRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FailureRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FailureRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FailureRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FailureRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FailureRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Create a new renderer for unsupported data.
         * @param label the label for the failure
         */
        static new_unsupported(label: string): Renderer;

        /**
         * Emit the {@link GcrUi.Renderer.SignalSignatures.data_changed | GcrUi.Renderer::data-changed} signal on the renderer. This is used by
         * renderer implementations.
         */
        emit_data_changed(): void;

        /**
         * Get the PKCS#11 attributes, if any, set for this renderer to display.
         * @returns the attributes, owned by the renderer
         */
        get_attributes(): Gck.Attributes | null;

        /**
         * Called by {@link GcrUi.Viewer} when about to display a popup menu for the content
         * displayed by the renderer. The renderer can add a menu item if desired.
         * @param viewer The viewer that is displaying a popup
         * @param menu The popup menu being displayed
         */
        popuplate_popup(viewer: Viewer, menu: Gtk.Menu): void;

        /**
         * Render the contents of the renderer to the given viewer.
         * @param viewer The viewer to render to.
         */
        render_view(viewer: Viewer): void;

        /**
         * Set the PKCS#11 attributes for this renderer to display.
         * @param attrs attributes to set
         */
        set_attributes(attrs: Gck.Attributes | null): void;

        /**
         * @virtual
         */
        vfunc_data_changed(): void;

        /**
         * @param viewer 
         * @param menu 
         * @virtual
         */
        vfunc_populate_popup(viewer: Viewer, menu: Gtk.Menu): void;

        /**
         * Render the contents of the renderer to the given viewer.
         * @param viewer The viewer to render to.
         * @virtual
         */
        vfunc_render_view(viewer: Viewer): void;
    }


    namespace ImportButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            /**
             * Signal emitted when an import completes or fails.
             * @signal
             * @run-last
             */
            imported: (arg0: GObject.Object, arg1: GLib.Error) => void;
            /**
             * Signal emitted when an import begins.
             * @signal
             * @run-last
             */
            importing: (arg0: GObject.Object) => void;
            "notify::always-show-image": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::image-position": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::relief": (pspec: GObject.ParamSpec) => void;
            "notify::use-stock": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
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
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::action-target": (pspec: GObject.ParamSpec) => void;
            "notify::related-action": (pspec: GObject.ParamSpec) => void;
            "notify::use-action-appearance": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Button.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * A button which imports keys and certificates.
     * 
     * The import button shows a spinner when the button is activated. When more
     * than one importer is available, it shows a drop down to select which to
     * import to.
     * @gir-type Class
     */
    class ImportButton extends Gtk.Button implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<ImportButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ImportButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ImportButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](label: string | null): ImportButton;

        // Conflicted with Gtk.Button.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ImportButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImportButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ImportButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImportButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ImportButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ImportButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param importer 
         * @param error 
         * @virtual
         */
        vfunc_imported(importer: Gcr.Importer, error: GLib.Error): void;

        /**
         * @param importer 
         * @virtual
         */
        vfunc_importing(importer: Gcr.Importer): void;

        // Methods
        /**
         * Queue an item to import via the button
         * @param parsed a parsed item
         */
        add_parsed(parsed: Gcr.Parsed): void;

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get action_name(): string | null;
        set action_name(val: string | null);

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get actionName(): string | null;
        set actionName(val: string | null);

        /** @category Inherited from Gtk.Actionable */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);

        /** @category Inherited from Gtk.Actionable */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get related_action(): Gtk.Action;
        set related_action(val: Gtk.Action);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get relatedAction(): Gtk.Action;
        set relatedAction(val: Gtk.Action);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get use_action_appearance(): boolean;
        set use_action_appearance(val: boolean);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get useActionAppearance(): boolean;
        set useActionAppearance(val: boolean);

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @returns the action name, or `null` if none is set
         */
        get_action_name(): string | null;

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         */
        set_action_name(action_name: string | null): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         */
        set_action_target_value(target_value: GLib.Variant | null): void;

        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         * 
         * `detailed_action_name` is a string in the format accepted by
         * `g_action_parse_detailed_name()`.
         * 
         * (Note that prior to version 3.22.25,
         * this function is only usable for actions with a simple "s" target, and
         * `detailed_action_name` must be of the form `"action::target"` where
         * `action` is the action name and `target` is the string to use
         * as the target.)
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @virtual
         */
        vfunc_get_action_name(): string | null;

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         * @virtual
         */
        vfunc_set_action_name(action_name: string | null): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         * @virtual
         */
        vfunc_set_action_target_value(target_value: GLib.Variant | null): void;

        /**
         * This is a utility function for {@link Gtk.Activatable} implementors.
         * 
         * When implementing {@link Gtk.Activatable} you must call this when
         * handling changes of the {@link Gtk.Activatable.related_action}, and
         * you must also use this to break references in {@link GObject.Object}->dispose().
         * 
         * This function adds a reference to the currently set related
         * action for you, it also makes sure the {@link Gtk.Activatable}->update()
         * method is called when the related {@link Gtk.Action} properties change
         * and registers to the action’s proxy list.
         * 
         * > Be careful to call this before setting the local
         * > copy of the {@link Gtk.Action} property, since this function uses
         * > `gtk_activatable_get_related_action()` to retrieve the
         * > previous action.
         * @param action the {@link Gtk.Action} to set
         */
        do_set_related_action(action: Gtk.Action): void;

        /**
         * Gets the related {@link Gtk.Action} for `activatable`.
         * @returns the related {@link Gtk.Action} if one is set.
         */
        get_related_action(): Gtk.Action;

        /**
         * Gets whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * @returns whether `activatable` uses its actions appearance.
         */
        get_use_action_appearance(): boolean;

        /**
         * Sets the related action on the `activatable` object.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the {@link Gtk.Activatable.related_action}
         * > property and call `gtk_activatable_do_set_related_action()` when it changes.
         * @param action the {@link Gtk.Action} to set
         */
        set_related_action(action: Gtk.Action): void;

        /**
         * Sets whether this activatable should reset its layout and appearance
         * when setting the related action or when the action changes appearance
         * 
         * > {@link Gtk.Activatable} implementors need to handle the
         * > {@link Gtk.Activatable.use_action_appearance} property and call
         * > `gtk_activatable_sync_action_properties()` to update `activatable`
         * > if needed.
         * @param use_appearance whether to use the actions appearance
         */
        set_use_action_appearance(use_appearance: boolean): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         */
        sync_action_properties(action: Gtk.Action | null): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         * @virtual
         */
        vfunc_sync_action_properties(action: Gtk.Action | null): void;

        /**
         * Called to update the activatable when its related action’s properties change.
         * You must check the {@link Gtk.Activatable.use_action_appearance} property only apply action
         * properties that are meant to effect the appearance accordingly.
         * @param action 
         * @param property_name 
         * @virtual
         */
        vfunc_update(action: Gtk.Action, property_name: string): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace KeyRenderer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::object": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Renderer.ConstructorProps {
            object: Gck.Object;
        }
    }

    /**
     * An implementation of {@link GcrUi.Renderer} which renders keys.
     * @gir-type Class
     */
    class KeyRenderer extends GObject.Object implements Renderer {
        static $gtype: GObject.GType<KeyRenderer>;

        // Properties
        get object(): Gck.Object;
        set object(val: Gck.Object);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: KeyRenderer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<KeyRenderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](label: string | null, attrs: Gck.Attributes | null): KeyRenderer;

        // Signals
        /** @signal */
        connect<K extends keyof KeyRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, KeyRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof KeyRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, KeyRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof KeyRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<KeyRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the attributes displayed in the renderer.
         * @returns the attributes, owned by the renderer
         */
        get_attributes(): Gck.Attributes | null;

        /**
         * Get the attributes displayed in the renderer. The attributes should represent
         * either an RSA, DSA, or EC key in PKCS#11 style.
         * @param attrs the attributes to display
         */
        set_attributes(attrs: Gck.Attributes | null): void;

        /**
         * The attributes to display.
          * @category Inherited from GcrUi.Renderer
         */
        get attributes(): Gck.Attributes | null;
        set attributes(val: Gck.Attributes | null);

        /**
         * The label to display.
          * @category Inherited from GcrUi.Renderer
         */
        get label(): string;
        set label(val: string);

        /**
         * Emit the {@link GcrUi.Renderer.SignalSignatures.data_changed | GcrUi.Renderer::data-changed} signal on the renderer. This is used by
         * renderer implementations.
         */
        emit_data_changed(): void;

        /**
         * Called by {@link GcrUi.Viewer} when about to display a popup menu for the content
         * displayed by the renderer. The renderer can add a menu item if desired.
         * @param viewer The viewer that is displaying a popup
         * @param menu The popup menu being displayed
         */
        popuplate_popup(viewer: Viewer, menu: Gtk.Menu): void;

        /**
         * Render the contents of the renderer to the given viewer.
         * @param viewer The viewer to render to.
         */
        render_view(viewer: Viewer): void;

        /**
         * @virtual
         */
        vfunc_data_changed(): void;

        /**
         * @param viewer 
         * @param menu 
         * @virtual
         */
        vfunc_populate_popup(viewer: Viewer, menu: Gtk.Menu): void;

        /**
         * Render the contents of the renderer to the given viewer.
         * @param viewer The viewer to render to.
         * @virtual
         */
        vfunc_render_view(viewer: Viewer): void;
    }


    namespace KeyWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            attributes: Gck.Attributes | null;
        }
    }

    /**
     * A key widget and renderer
     * 
     * A key widget can be used to display a RSA, DSA or EC key. The widget is
     * normally in a collapsed state showing only details, but can be expanded by
     * the user.
     * 
     * Use {@link KeyWidget.new} to create a new key widget. Only one key can be
     * displayed. A key widget contains a {@link Viewer} internally and
     * {@link KeyRenderer} is used to render the key to the viewer. To show more
     * than one key in a view, create the viewer and add renderers to it.
     * @gir-type Class
     */
    class KeyWidget extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<KeyWidget>;

        // Properties
        get attributes(): Gck.Attributes | null;
        set attributes(val: Gck.Attributes | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: KeyWidget.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<KeyWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](attrs: Gck.Attributes | null): KeyWidget;

        // Signals
        /** @signal */
        connect<K extends keyof KeyWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, KeyWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof KeyWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, KeyWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof KeyWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<KeyWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the attributes displayed in the widget.
         * @returns The attributes, owned by the widget.
         */
        get_attributes(): Gck.Attributes | null;

        /**
         * Get the attributes displayed in the widget. The attributes should represent
         * either an RSA, DSA or EC key in PKCS#11 style.
         * @param attrs the attributes to display
         */
        set_attributes(attrs: Gck.Attributes | null): void;
    }


    namespace ListSelector {
        // Signal signatures
        interface SignalSignatures extends Gtk.TreeView.SignalSignatures {
            "notify::collection": (pspec: GObject.ParamSpec) => void;
            "notify::activate-on-single-click": (pspec: GObject.ParamSpec) => void;
            "notify::enable-grid-lines": (pspec: GObject.ParamSpec) => void;
            "notify::enable-search": (pspec: GObject.ParamSpec) => void;
            "notify::enable-tree-lines": (pspec: GObject.ParamSpec) => void;
            "notify::expander-column": (pspec: GObject.ParamSpec) => void;
            "notify::fixed-height-mode": (pspec: GObject.ParamSpec) => void;
            "notify::headers-clickable": (pspec: GObject.ParamSpec) => void;
            "notify::headers-visible": (pspec: GObject.ParamSpec) => void;
            "notify::hover-expand": (pspec: GObject.ParamSpec) => void;
            "notify::hover-selection": (pspec: GObject.ParamSpec) => void;
            "notify::level-indentation": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::reorderable": (pspec: GObject.ParamSpec) => void;
            "notify::rubber-banding": (pspec: GObject.ParamSpec) => void;
            "notify::rules-hint": (pspec: GObject.ParamSpec) => void;
            "notify::search-column": (pspec: GObject.ParamSpec) => void;
            "notify::show-expanders": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-column": (pspec: GObject.ParamSpec) => void;
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
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscroll-policy": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll-policy": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.TreeView.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            collection: Gcr.Collection;
        }
    }

    /**
     * A selector widget to select 1 or more certificates or keys from a list.
     * 
     * Live search is available for quick filtering.
     * @gir-type Class
     */
    class ListSelector extends Gtk.TreeView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<ListSelector>;

        // Properties
        /**
         * The collection which contains the objects to display in the selector.
         * @construct-only
         */
        get collection(): Gcr.Collection;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ListSelector.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ListSelector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](collection: Gcr.Collection): ListSelector;

        // Conflicted with Gtk.TreeView.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ListSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ListSelector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ListSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ListSelector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ListSelector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ListSelector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the collection that this selector is displaying objects from.
         * @returns The collection, owned by the selector.
         */
        get_collection(): Gcr.Collection;

        /**
         * Get a list of selected objects.
         * @returns the list of          selected objects, to be released with `g_list_free()`
         */
        get_selected(): GObject.Object[];

        /**
         * Select certain objects in the selector.
         * @param selected the list of objects to select
         */
        set_selected(selected: GObject.Object[]): void;

        /**
         * Horizontal {@link Gtk.Adjustment} of the scrollable widget. This adjustment is
         * shared between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Verical {@link Gtk.Adjustment} of the scrollable widget. This adjustment is shared
         * between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @returns `true` if `border` has been set
         */
        get_border(): [boolean, Gtk.Border];

        /**
         * Retrieves the {@link Gtk.Adjustment} used for horizontal scrolling.
         * @returns horizontal {@link Gtk.Adjustment}.
         */
        get_hadjustment(): Gtk.Adjustment;

        /**
         * Gets the horizontal {@link Gtk.ScrollablePolicy}.
         * @returns The horizontal {@link Gtk.ScrollablePolicy}.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Retrieves the {@link Gtk.Adjustment} used for vertical scrolling.
         * @returns vertical {@link Gtk.Adjustment}.
         */
        get_vadjustment(): Gtk.Adjustment;

        /**
         * Gets the vertical {@link Gtk.ScrollablePolicy}.
         * @returns The vertical {@link Gtk.ScrollablePolicy}.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Sets the horizontal adjustment of the {@link Gtk.Scrollable}.
         * @param hadjustment a {@link Gtk.Adjustment}
         */
        set_hadjustment(hadjustment: Gtk.Adjustment | null): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * horizontal scrolling should start below the minimum width or
         * below the natural width.
         * @param policy the horizontal {@link Gtk.ScrollablePolicy}
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Sets the vertical adjustment of the {@link Gtk.Scrollable}.
         * @param vadjustment a {@link Gtk.Adjustment}
         */
        set_vadjustment(vadjustment: Gtk.Adjustment | null): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * vertical scrolling should start below the minimum height or
         * below the natural height.
         * @param policy the vertical {@link Gtk.ScrollablePolicy}
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @virtual
         */
        vfunc_get_border(): [boolean, Gtk.Border];
    }


    namespace PromptDialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            "notify::choice-visible": (pspec: GObject.ParamSpec) => void;
            "notify::confirm-visible": (pspec: GObject.ParamSpec) => void;
            "notify::password-visible": (pspec: GObject.ParamSpec) => void;
            "notify::warning-visible": (pspec: GObject.ParamSpec) => void;
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
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
            "notify::caller-window": (pspec: GObject.ParamSpec) => void;
            "notify::cancel-label": (pspec: GObject.ParamSpec) => void;
            "notify::choice-chosen": (pspec: GObject.ParamSpec) => void;
            "notify::choice-label": (pspec: GObject.ParamSpec) => void;
            "notify::continue-label": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::message": (pspec: GObject.ParamSpec) => void;
            "notify::password-new": (pspec: GObject.ParamSpec) => void;
            "notify::password-strength": (pspec: GObject.ParamSpec) => void;
            "notify::warning": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Dialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gcr.Prompt.ConstructorProps, Gtk.Buildable.ConstructorProps {
            choice_visible: boolean;
            choiceVisible: boolean;
            confirm_visible: boolean;
            confirmVisible: boolean;
            password_visible: boolean;
            passwordVisible: boolean;
            warning_visible: boolean;
            warningVisible: boolean;
        }
    }

    /**
     * A {@link Gcr.Prompt} implementation which shows a GTK dialog. The dialog
     * will remain visible (but insensitive) between prompts. If the user cancels
     * the dialog between prompts, then the dialog will be hidden.
     * @gir-type Class
     */
    class PromptDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gcr.Prompt, Gtk.Buildable {
        static $gtype: GObject.GType<PromptDialog>;

        // Properties
        /**
         * Whether the choice check box is visible or not.
         * @read-only
         */
        get choice_visible(): boolean;

        /**
         * Whether the choice check box is visible or not.
         * @read-only
         */
        get choiceVisible(): boolean;

        /**
         * Whether the password confirm entry is visible or not.
         * @read-only
         */
        get confirm_visible(): boolean;

        /**
         * Whether the password confirm entry is visible or not.
         * @read-only
         */
        get confirmVisible(): boolean;

        /**
         * Whether the password entry is visible or not.
         * @read-only
         */
        get password_visible(): boolean;

        /**
         * Whether the password entry is visible or not.
         * @read-only
         */
        get passwordVisible(): boolean;

        /**
         * Whether the warning label is visible or not.
         * @read-only
         */
        get warning_visible(): boolean;

        /**
         * Whether the warning label is visible or not.
         * @read-only
         */
        get warningVisible(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PromptDialog.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PromptDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PromptDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PromptDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PromptDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PromptDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PromptDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PromptDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The string handle of the caller's window.
         * 
         * The caller window indicates to the prompt which window is prompting the
         * user. The prompt may choose to ignore this information or use it in whatever
         * way it sees fit.
         * 
         * In X11, this will be a stringified version of the XWindow handle; in
         * Wayland this is the result of an export using the XDG foreign
         * protocol.
         * @default null
          * @category Inherited from Gcr.Prompt
         */
        get caller_window(): string;
        set caller_window(val: string);

        /**
         * The string handle of the caller's window.
         * 
         * The caller window indicates to the prompt which window is prompting the
         * user. The prompt may choose to ignore this information or use it in whatever
         * way it sees fit.
         * 
         * In X11, this will be a stringified version of the XWindow handle; in
         * Wayland this is the result of an export using the XDG foreign
         * protocol.
         * @default null
          * @category Inherited from Gcr.Prompt
         */
        get callerWindow(): string;
        set callerWindow(val: string);

        /**
         * The label for the cancel button in the prompt.
         * @default Cancel
          * @category Inherited from Gcr.Prompt
         */
        get cancel_label(): string;
        set cancel_label(val: string);

        /**
         * The label for the cancel button in the prompt.
         * @default Cancel
          * @category Inherited from Gcr.Prompt
         */
        get cancelLabel(): string;
        set cancelLabel(val: string);

        /**
         * Whether the additional choice is chosen or not.
         * 
         * The additional choice would have been setup using {@link Gcr.Prompt.choice_label}.
         * @default false
          * @category Inherited from Gcr.Prompt
         */
        get choice_chosen(): boolean;
        set choice_chosen(val: boolean);

        /**
         * Whether the additional choice is chosen or not.
         * 
         * The additional choice would have been setup using {@link Gcr.Prompt.choice_label}.
         * @default false
          * @category Inherited from Gcr.Prompt
         */
        get choiceChosen(): boolean;
        set choiceChosen(val: boolean);

        /**
         * The label for the additional choice.
         * 
         * If this is a non-`null` value then an additional boolean choice will be
         * displayed by the prompt allowing the user to select or deselect it.
         * 
         * If `null`, then no additional choice is displayed.
         * 
         * The initial value of the choice can be set with {@link Gcr.Prompt.choice_chosen}.
         * @default null
          * @category Inherited from Gcr.Prompt
         */
        get choice_label(): string;
        set choice_label(val: string);

        /**
         * The label for the additional choice.
         * 
         * If this is a non-`null` value then an additional boolean choice will be
         * displayed by the prompt allowing the user to select or deselect it.
         * 
         * If `null`, then no additional choice is displayed.
         * 
         * The initial value of the choice can be set with {@link Gcr.Prompt.choice_chosen}.
         * @default null
          * @category Inherited from Gcr.Prompt
         */
        get choiceLabel(): string;
        set choiceLabel(val: string);

        /**
         * The label for the continue button in the prompt.
         * @default Continue
          * @category Inherited from Gcr.Prompt
         */
        get continue_label(): string;
        set continue_label(val: string);

        /**
         * The label for the continue button in the prompt.
         * @default Continue
          * @category Inherited from Gcr.Prompt
         */
        get continueLabel(): string;
        set continueLabel(val: string);

        /**
         * The detailed description of the prompt.
         * 
         * A prompt implementation may choose not to display this detailed description.
         * The prompt message should contain relevant information.
         * @default null
          * @category Inherited from Gcr.Prompt
         */
        get description(): string;
        set description(val: string);

        /**
         * The prompt message for the user.
         * 
         * A prompt implementation should always display this message.
         * @default null
          * @category Inherited from Gcr.Prompt
         */
        get message(): string;
        set message(val: string);

        /**
         * Whether the prompt will prompt for a new password.
         * 
         * This will cause the prompt implementation to ask the user to confirm the
         * password and/or display other relevant user interface for creating a new
         * password.
         * @default false
          * @category Inherited from Gcr.Prompt
         */
        get password_new(): boolean;
        set password_new(val: boolean);

        /**
         * Whether the prompt will prompt for a new password.
         * 
         * This will cause the prompt implementation to ask the user to confirm the
         * password and/or display other relevant user interface for creating a new
         * password.
         * @default false
          * @category Inherited from Gcr.Prompt
         */
        get passwordNew(): boolean;
        set passwordNew(val: boolean);

        /**
         * Indication of the password strength.
         * 
         * Prompts will return a zero value if the password is empty, and a value
         * greater than zero if the password has any characters.
         * 
         * This is only valid after a successful prompt for a password.
         * @read-only
         * @default 0
          * @category Inherited from Gcr.Prompt
         */
        get password_strength(): number;

        /**
         * Indication of the password strength.
         * 
         * Prompts will return a zero value if the password is empty, and a value
         * greater than zero if the password has any characters.
         * 
         * This is only valid after a successful prompt for a password.
         * @read-only
         * @default 0
          * @category Inherited from Gcr.Prompt
         */
        get passwordStrength(): number;

        /**
         * The title of the prompt.
         * 
         * A prompt implementation may choose not to display the prompt title. The
         * {@link Gcr.Prompt.message} should contain relevant information.
         * @default null
          * @category Inherited from Gcr.Prompt
         */
        // This accessor conflicts with another accessor's type in a parent class or interface.
    get title(): string | any;
        // This accessor conflicts with another accessor's type in a parent class or interface.
    set title(val: string | any);

        /**
         * A prompt warning displayed on the prompt, or `null` for no warning.
         * 
         * This is a warning like "The password is incorrect." usually displayed to the
         * user about a previous 'unsuccessful' prompt.
         * @default null
          * @category Inherited from Gcr.Prompt
         */
        get warning(): string;
        set warning(val: string);

        /**
         * Closes the prompt so that in can no longer be used to prompt. The various
         * prompt methods will return results as if the user dismissed the prompt.
         * 
         * The prompt may also be closed by the implementor of the prompt object.
         * 
         * This emits the `Gcr.Prompt::prompt-close` signal on the prompt object.
         */
        close(): void;

        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this function to
         * represent the question correctly.
         * 
         * This method will block until the a response is returned from the prompter.
         * 
         * {@link Gcr.PromptReply.CONTINUE} will be returned if the user confirms the prompt. The
         * return value will also be {@link Gcr.PromptReply.CANCEL} if the user cancels or if
         * an error occurs. Check the `error` argument to tell the difference.
         * @param cancellable optional cancellation object
         * @returns the reply from the prompt
         */
        confirm(cancellable: Gio.Cancellable | null): Gcr.PromptReply;

        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this method to
         * represent the question correctly.
         * 
         * This method will return immediately and complete asynchronously.
         * @param cancellable optional cancellation object
         */
        confirm_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Gcr.PromptReply>;

        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this method to
         * represent the question correctly.
         * 
         * This method will return immediately and complete asynchronously.
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        confirm_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this method to
         * represent the question correctly.
         * 
         * This method will return immediately and complete asynchronously.
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        confirm_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gcr.PromptReply> | void;

        /**
         * Complete an operation to prompt for confirmation.
         * 
         * {@link Gcr.PromptReply.CONTINUE} will be returned if the user confirms the prompt. The
         * return value will also be {@link Gcr.PromptReply.CANCEL} if the user cancels or if
         * an error occurs. Check the `error` argument to tell the difference.
         * @param result asynchronous result passed to callback
         * @returns the reply from the prompt
         */
        confirm_finish(result: Gio.AsyncResult): Gcr.PromptReply;

        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this function to
         * represent the question correctly.
         * 
         * This method will block until the a response is returned from the prompter
         * and will run a main loop similar to a `gtk_dialog_run()`. The application
         * will remain responsive but care must be taken to handle reentrancy issues.
         * 
         * {@link Gcr.PromptReply.CONTINUE} will be returned if the user confirms the prompt. The
         * return value will also be {@link Gcr.PromptReply.CANCEL} if the user cancels or if
         * an error occurs. Check the `error` argument to tell the difference.
         * @param cancellable optional cancellation object
         * @returns the reply from the prompt
         */
        confirm_run(cancellable: Gio.Cancellable | null): Gcr.PromptReply;

        /**
         * Get the string handle of the caller's window.
         * 
         * The caller window indicates to the prompt which window is prompting the
         * user. The prompt may choose to ignore this information or use it in whatever
         * way it sees fit.
         * @returns a newly allocated string containing the string          handle of the window.
         */
        get_caller_window(): string;

        /**
         * Get the label for the cancel button.
         * 
         * This is the button that results in a {@link Gcr.PromptReply.CANCEL} reply
         * from the prompt.
         * @returns a newly allocated string containing the label
         */
        get_cancel_label(): string;

        /**
         * Get whether the additional choice was chosen or not.
         * 
         * The additional choice would have been setup using
         * `gcr_prompt_set_choice_label()`.
         * @returns whether chosen
         */
        get_choice_chosen(): boolean;

        /**
         * Get the label for the additional choice.
         * 
         * This will be `null` if no additional choice is being displayed.
         * @returns a newly allocated string containing the additional          choice or `null`
         */
        get_choice_label(): string;

        /**
         * Get the label for the continue button.
         * 
         * This is the button that results in a {@link Gcr.PromptReply.CONTINUE} reply
         * from the prompt.
         * @returns a newly allocated string containing the label
         */
        get_continue_label(): string;

        /**
         * Get the detailed description of the prompt.
         * 
         * A prompt implementation may choose not to display this detailed description.
         * The prompt message should contain relevant information.
         * @returns a newly allocated string containing the detailed          description of the prompt
         */
        get_description(): string;

        /**
         * Gets the prompt message for the user.
         * 
         * A prompt implementation should always display this message.
         * @returns a newly allocated string containing the detailed          description of the prompt
         */
        get_message(): string;

        /**
         * Get whether the prompt will prompt for a new password.
         * 
         * This will cause the prompt implementation to ask the user to confirm the
         * password and/or display other relevant user interface for creating a new
         * password.
         * @returns whether in new password mode or not
         */
        get_password_new(): boolean;

        /**
         * Get indication of the password strength.
         * 
         * Prompts will return a zero value if the password is empty, and a value
         * greater than zero if the password has any characters.
         * 
         * This is only valid after a successful prompt for a password.
         * @returns zero if the password is empty, greater than zero if not
         */
        get_password_strength(): number;

        /**
         * Gets the title of the prompt.
         * 
         * A prompt implementation may choose not to display the prompt title. The
         * prompt message should contain relevant information.
         * @returns a newly allocated string containing the prompt          title.
         */
        get_title(): string;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Window.get_title
        get_title(...args: never[]): any;

        /**
         * Get a prompt warning displayed on the prompt.
         * 
         * This is a warning like "The password is incorrect." usually displayed to the
         * user about a previous 'unsuccessful' prompt.
         * 
         * If this string is `null` then no warning is displayed.
         * @returns a newly allocated string containing the prompt          warning, or `null` if no warning
         */
        get_warning(): string;

        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         * 
         * This method will block until the a response is returned from the prompter.
         * 
         * A password will be returned if the user enters a password successfully.
         * The returned password is valid until the next time a method is called
         * to display another prompt.
         * 
         * `null` will be returned if the user cancels or if an error occurs. Check the
         * `error` argument to tell the difference.
         * @param cancellable optional cancellation object
         * @returns the password owned by the prompt, or `null`
         */
        password(cancellable: Gio.Cancellable | null): string;

        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         * 
         * This method will return immediately and complete asynchronously.
         * @param cancellable optional cancellation object
         */
        password_async(cancellable: Gio.Cancellable | null): globalThis.Promise<string>;

        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         * 
         * This method will return immediately and complete asynchronously.
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        password_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         * 
         * This method will return immediately and complete asynchronously.
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        password_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;

        /**
         * Complete an operation to prompt for a password.
         * 
         * A password will be returned if the user enters a password successfully.
         * The returned password is valid until the next time a method is called
         * to display another prompt.
         * 
         * `null` will be returned if the user cancels or if an error occurs. Check the
         * `error` argument to tell the difference.
         * @param result asynchronous result passed to callback
         * @returns the password owned by the prompt, or `null`
         */
        password_finish(result: Gio.AsyncResult): string;

        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         * 
         * This method will block until the a response is returned from the prompter
         * and will run a main loop similar to a `gtk_dialog_run()`. The application
         * will remain responsive but care must be taken to handle reentrancy issues.
         * 
         * A password will be returned if the user enters a password successfully.
         * The returned password is valid until the next time a method is called
         * to display another prompt.
         * 
         * `null` will be returned if the user cancels or if an error occurs. Check the
         * `error` argument to tell the difference.
         * @param cancellable optional cancellation object
         * @returns the password owned by the prompt, or `null`
         */
        password_run(cancellable: Gio.Cancellable | null): string;

        /**
         * Reset the contents and properties of the prompt.
         */
        reset(): void;

        /**
         * Set the string handle of the caller's window.
         * 
         * The caller window indicates to the prompt which window is prompting the
         * user. The prompt may choose to ignore this information or use it in whatever
         * way it sees fit.
         * @param window_id the window id
         */
        set_caller_window(window_id: string): void;

        /**
         * Set the label for the continue button.
         * 
         * This is the button that results in a {@link Gcr.PromptReply.CANCEL} reply
         * from the prompt.
         * @param cancel_label the label
         */
        set_cancel_label(cancel_label: string): void;

        /**
         * Set whether the additional choice is chosen or not.
         * 
         * The additional choice should be set up using `gcr_prompt_set_choice_label()`.
         * @param chosen whether chosen
         */
        set_choice_chosen(chosen: boolean): void;

        /**
         * Set the label for the additional choice.
         * 
         * If this is a non-`null` value then an additional boolean choice will be
         * displayed by the prompt allowing the user to select or deselect it.
         * 
         * The initial value of the choice can be set with the
         * `gcr_prompt_set_choice_label()` method.
         * 
         * If this is `null`, then no additional choice is being displayed.
         * @param choice_label the additional choice or `null`
         */
        set_choice_label(choice_label: string | null): void;

        /**
         * Set the label for the continue button.
         * 
         * This is the button that results in a {@link Gcr.PromptReply.CONTINUE} reply
         * from the prompt.
         * @param continue_label the label
         */
        set_continue_label(continue_label: string): void;

        /**
         * Set the detailed description of the prompt.
         * 
         * A prompt implementation may choose not to display this detailed description.
         * Use `gcr_prompt_set_message()` to set a general message containing relevant
         * information.
         * @param description the detailed description
         */
        set_description(description: string): void;

        /**
         * Sets the prompt message for the user.
         * 
         * A prompt implementation should always display this message.
         * @param message the prompt message
         */
        set_message(message: string): void;

        /**
         * Set whether the prompt will prompt for a new password.
         * 
         * This will cause the prompt implementation to ask the user to confirm the
         * password and/or display other relevant user interface for creating a new
         * password.
         * @param new_password whether in new password mode or not
         */
        set_password_new(new_password: boolean): void;

        /**
         * Sets the title of the prompt.
         * 
         * A prompt implementation may choose not to display the prompt title. The
         * prompt message should contain relevant information.
         * @param title the prompt title
         */
        set_title(title: string): void;

        /**
         * Set a prompt warning displayed on the prompt.
         * 
         * This is a warning like "The password is incorrect." usually displayed to the
         * user about a previous 'unsuccessful' prompt.
         * 
         * If this string is `null` then no warning is displayed.
         * @param warning the warning or `null`
         */
        set_warning(warning: string | null): void;

        /**
         * close a prompt
         * @virtual
         */
        vfunc_prompt_close(): void;

        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this method to
         * represent the question correctly.
         * 
         * This method will return immediately and complete asynchronously.
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         * @virtual
         */
        vfunc_prompt_confirm_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Complete an operation to prompt for confirmation.
         * 
         * {@link Gcr.PromptReply.CONTINUE} will be returned if the user confirms the prompt. The
         * return value will also be {@link Gcr.PromptReply.CANCEL} if the user cancels or if
         * an error occurs. Check the `error` argument to tell the difference.
         * @param result asynchronous result passed to callback
         * @virtual
         */
        vfunc_prompt_confirm_finish(result: Gio.AsyncResult): Gcr.PromptReply;

        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         * 
         * This method will return immediately and complete asynchronously.
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         * @virtual
         */
        vfunc_prompt_password_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Complete an operation to prompt for a password.
         * 
         * A password will be returned if the user enters a password successfully.
         * The returned password is valid until the next time a method is called
         * to display another prompt.
         * 
         * `null` will be returned if the user cancels or if an error occurs. Check the
         * `error` argument to tell the difference.
         * @param result asynchronous result passed to callback
         * @virtual
         */
        vfunc_prompt_password_finish(result: Gio.AsyncResult): string;
    }


    namespace SecureEntryBuffer {
        // Signal signatures
        interface SignalSignatures extends Gtk.EntryBuffer.SignalSignatures {
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.EntryBuffer.ConstructorProps {}
    }

    /**
     * A {@link Gtk.EntryBuffer} that uses non-pageable memory.
     * 
     * It's good practice to try to keep passwords or sensitive secrets out of
     * pageable memory whenever possible, so that they don't get written to disk.
     * 
     * A {@link SecureEntryBuffer} is a {@link Gtk.EntryBuffer} to be used with
     * {@link Gtk.Entry} which uses non-pageable memory to store a password placed
     * in the entry. In order to make any sense at all, the entry must have it's
     * visibility turned off, and just be displaying place holder characters for
     * the text. That is, a password style entry.
     * 
     * Use {@link Gtk.Entry.new_with_buffer} or {@link Gtk.Entry.set_buffer} to set this buffer
     * on an entry.
     * @gir-type Class
     */
    class SecureEntryBuffer extends Gtk.EntryBuffer {
        static $gtype: GObject.GType<SecureEntryBuffer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SecureEntryBuffer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SecureEntryBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SecureEntryBuffer;

        // Signals
        /** @signal */
        connect<K extends keyof SecureEntryBuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SecureEntryBuffer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SecureEntryBuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SecureEntryBuffer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SecureEntryBuffer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SecureEntryBuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace TreeSelector {
        // Signal signatures
        interface SignalSignatures extends Gtk.TreeView.SignalSignatures {
            "notify::collection": (pspec: GObject.ParamSpec) => void;
            "notify::columns": (pspec: GObject.ParamSpec) => void;
            "notify::activate-on-single-click": (pspec: GObject.ParamSpec) => void;
            "notify::enable-grid-lines": (pspec: GObject.ParamSpec) => void;
            "notify::enable-search": (pspec: GObject.ParamSpec) => void;
            "notify::enable-tree-lines": (pspec: GObject.ParamSpec) => void;
            "notify::expander-column": (pspec: GObject.ParamSpec) => void;
            "notify::fixed-height-mode": (pspec: GObject.ParamSpec) => void;
            "notify::headers-clickable": (pspec: GObject.ParamSpec) => void;
            "notify::headers-visible": (pspec: GObject.ParamSpec) => void;
            "notify::hover-expand": (pspec: GObject.ParamSpec) => void;
            "notify::hover-selection": (pspec: GObject.ParamSpec) => void;
            "notify::level-indentation": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::reorderable": (pspec: GObject.ParamSpec) => void;
            "notify::rubber-banding": (pspec: GObject.ParamSpec) => void;
            "notify::rules-hint": (pspec: GObject.ParamSpec) => void;
            "notify::search-column": (pspec: GObject.ParamSpec) => void;
            "notify::show-expanders": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-column": (pspec: GObject.ParamSpec) => void;
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
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscroll-policy": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll-policy": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.TreeView.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            collection: Gcr.Collection;
            columns: never;
        }
    }

    /**
     * A tree selector can be used to select certificates or keys. It allows
     * the user to select multiple objects from a tree.
     * @gir-type Class
     */
    class TreeSelector extends Gtk.TreeView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<TreeSelector>;

        // Properties
        /**
         * The collection which contains the objects to display in the selector.
         * @construct-only
         */
        get collection(): Gcr.Collection;

        /**
         * The columns to use to display the objects.
         * @construct-only
         */
        get columns(): null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TreeSelector.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TreeSelector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof TreeSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeSelector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TreeSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeSelector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TreeSelector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TreeSelector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the collection that this selector is displaying objects from.
         * @returns the collection, owned by the selector
         */
        get_collection(): Gcr.Collection;

        /**
         * Get a list of selected objects.
         * @returns the list of selected          objects, to be released with `g_list_free()`
         */
        get_selected(): GObject.Object[];

        /**
         * Select certain objects in the selector.
         * @param selected the list of objects to select
         */
        set_selected(selected: GObject.Object[]): void;

        /**
         * Horizontal {@link Gtk.Adjustment} of the scrollable widget. This adjustment is
         * shared between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Verical {@link Gtk.Adjustment} of the scrollable widget. This adjustment is shared
         * between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @returns `true` if `border` has been set
         */
        get_border(): [boolean, Gtk.Border];

        /**
         * Retrieves the {@link Gtk.Adjustment} used for horizontal scrolling.
         * @returns horizontal {@link Gtk.Adjustment}.
         */
        get_hadjustment(): Gtk.Adjustment;

        /**
         * Gets the horizontal {@link Gtk.ScrollablePolicy}.
         * @returns The horizontal {@link Gtk.ScrollablePolicy}.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Retrieves the {@link Gtk.Adjustment} used for vertical scrolling.
         * @returns vertical {@link Gtk.Adjustment}.
         */
        get_vadjustment(): Gtk.Adjustment;

        /**
         * Gets the vertical {@link Gtk.ScrollablePolicy}.
         * @returns The vertical {@link Gtk.ScrollablePolicy}.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Sets the horizontal adjustment of the {@link Gtk.Scrollable}.
         * @param hadjustment a {@link Gtk.Adjustment}
         */
        set_hadjustment(hadjustment: Gtk.Adjustment | null): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * horizontal scrolling should start below the minimum width or
         * below the natural width.
         * @param policy the horizontal {@link Gtk.ScrollablePolicy}
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Sets the vertical adjustment of the {@link Gtk.Scrollable}.
         * @param vadjustment a {@link Gtk.Adjustment}
         */
        set_vadjustment(vadjustment: Gtk.Adjustment | null): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * vertical scrolling should start below the minimum height or
         * below the natural height.
         * @param policy the vertical {@link Gtk.ScrollablePolicy}
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @virtual
         */
        vfunc_get_border(): [boolean, Gtk.Border];
    }


    namespace UnlockOptionsWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::choice": (pspec: GObject.ParamSpec) => void;
            "notify::ttl": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            choice: string;
            ttl: number;
        }
    }

    /**
     * This widget displays a set of unlock options for the user to select.
     * 
     * The user can choose between keeping caching the unlock indefinitely, or for
     * a given amount of time.
     * 
     * Each option has a different name, for example #GCR_UNLOCK_OPTION_ALWAYS. These
     * names are used together with the various functions like
     * {@link UnlockOptionsWidget.get_choice}.
     * @gir-type Class
     */
    class UnlockOptionsWidget extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<UnlockOptionsWidget>;

        // Properties
        get choice(): string;
        set choice(val: string);

        get ttl(): number;
        set ttl(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UnlockOptionsWidget.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UnlockOptionsWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): UnlockOptionsWidget;

        // Signals
        /** @signal */
        connect<K extends keyof UnlockOptionsWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnlockOptionsWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UnlockOptionsWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnlockOptionsWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UnlockOptionsWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UnlockOptionsWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the currently selected option, like `GCR_UNLOCK_OPTION_ALWAYS`.
         * @returns The currently selected option name.
         */
        get_choice(): string;

        /**
         * Get the label for one of the options. Use an option name like
         * `GCR_UNLOCK_OPTION_ALWAYS`.
         * @param option The option name
         * @returns The current label for the option.
         */
        get_label(option: string): string;

        /**
         * Get the sensitivity state for one of the options. Use an option name like
         * `GCR_UNLOCK_OPTION_ALWAYS`.
         * @param option The option name
         * @returns Whether the option is sensitive or not.
         */
        get_sensitive(option: string): boolean;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.get_sensitive
        get_sensitive(...args: never[]): any;

        /**
         * Get the timeout setting set for unlock options that have a timeout.
         * This will also return a valid value if the currently selected option
         * does not have a timeout.
         * @returns The unlock timeout in seconds.
         */
        get_ttl(): number;

        /**
         * Set the currently selected option. Use an option name like
         * `GCR_UNLOCK_OPTION_ALWAYS`.
         * @param option The option name
         */
        set_choice(option: string): void;

        /**
         * Set the label for one of the options. Use an option name like
         * `GCR_UNLOCK_OPTION_ALWAYS`.
         * @param option The option name
         * @param text The new label
         */
        set_label(option: string, text: string): void;

        /**
         * Set the sensitivity state for one of the options. Use an option name like
         * `GCR_UNLOCK_OPTION_ALWAYS`. The reason will be displayed as a tooltip.
         * @param option The option name
         * @param sensitive The sensitivity state.
         * @param reason A user displayable string which contains the reason for the sensitivity.
         */
        set_sensitive(option: string, sensitive: boolean, reason: string): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.set_sensitive
        set_sensitive(...args: never[]): any;

        /**
         * Set the current setting for the timeout. This can be set even when the
         * currently selected option does not have a timeout.
         * @param ttl The timeout to set, in seconds
         */
        set_ttl(ttl: number): void;
    }


    namespace ViewerWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * This signal is emitted when an item is added to the viewer widget.
             * @signal
             * @run-last
             */
            added: (arg0: Renderer, arg1: Gcr.Parsed) => void;
            "notify::display-name": (pspec: GObject.ParamSpec) => void;
            "notify::parser": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
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
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            display_name: string;
            displayName: string;
            parser: Gcr.Parser;
        }
    }

    /**
     * A viewer widget which can display certificates and keys that are
     * located in files.
     * @gir-type Class
     */
    class ViewerWidget extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ViewerWidget>;

        // Properties
        /**
         * Display name for data being displayed. This is automatically
         * calculated from a loaded file, or can be explicitly set.
         * 
         * Used as a hint when displaying a title for the data, but may be
         * overridden by the parsed data.
         */
        get display_name(): string;
        set display_name(val: string);

        /**
         * Display name for data being displayed. This is automatically
         * calculated from a loaded file, or can be explicitly set.
         * 
         * Used as a hint when displaying a title for the data, but may be
         * overridden by the parsed data.
         */
        get displayName(): string;
        set displayName(val: string);

        /**
         * The parser used to parse loaded data into viewable items.
         * @read-only
         */
        get parser(): Gcr.Parser;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ViewerWidget.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ViewerWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ViewerWidget;

        // Signals
        /** @signal */
        connect<K extends keyof ViewerWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ViewerWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ViewerWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ViewerWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ViewerWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ViewerWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Clear the error displayed on the viewer widget.
         */
        clear_error(): void;

        /**
         * Get the display name for data being displayed. This is automatically
         * calculated from a loaded file, or can be explicitly set.
         * 
         * Used as a hint when displaying a title for the data, but may be
         * overridden by the parsed data.
         * @returns the display name
         */
        get_display_name(): string;

        /**
         * Get the parser used to parse loaded data into viewable items.
         * @returns the parser
         */
        get_parser(): Gcr.Parser;

        /**
         * Get the viewer used to display the viewable items.
         * @returns the viewer
         */
        get_viewer(): Viewer;

        /**
         * Parse and load some data to be displayed into the viewer widgets. The data
         * may contain multiple parseable items if the format can contain multiple
         * items.
         * @param display_name label for the loaded data
         * @param data data to load
         */
        load_bytes(display_name: string | null, data: GLib.Bytes | Uint8Array): void;

        /**
         * Parse and load some data to be displayed into the viewer widgets. The data
         * may contain multiple parseable items if the format can contain multiple
         * items.
         * 
         * This function will copy the data. Use {@link ViewerWidget.load_bytes} to avoid
         * copying the data.
         * @param display_name label for the loaded data
         * @param data data to load
         */
        load_data(display_name: string | null, data: Uint8Array | string): void;

        /**
         * Display contents of a file in the viewer widget. Multiple files can
         * be loaded.
         * @param file a file to load
         */
        load_file(file: Gio.File): void;

        /**
         * Set the display name for data being displayed. Once explicitly
         * set it will no longer be calculated automatically by loading data.
         * 
         * Used as a hint when displaying a title for the data, but may be
         * overridden by the parsed data.
         * @param display_name the display name
         */
        set_display_name(display_name: string): void;

        /**
         * Show an error on the viewer widget. This is displayed on a info bar near
         * the edge of the widget.
         * @param message descriptive error message
         * @param error detailed error
         */
        show_error(message: string, error: GLib.Error | null): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    /**
     * @gir-type Alias
     */
    type CertificateRendererClass = typeof CertificateRenderer;

    /**
     * @gir-type Struct
     */
    abstract class CertificateRendererPrivate {
        static $gtype: GObject.GType<CertificateRendererPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type CertificateWidgetClass = typeof CertificateWidget;

    /**
     * @gir-type Struct
     */
    abstract class CertificateWidgetPrivate {
        static $gtype: GObject.GType<CertificateWidgetPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type CollectionModelClass = typeof CollectionModel;

    /**
     * @gir-type Struct
     */
    abstract class CollectionModelPrivate {
        static $gtype: GObject.GType<CollectionModelPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ComboSelectorClass = typeof ComboSelector;

    /**
     * @gir-type Struct
     */
    abstract class ComboSelectorPrivate {
        static $gtype: GObject.GType<ComboSelectorPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type FailureRendererClass = typeof FailureRenderer;

    /**
     * @gir-type Struct
     */
    abstract class FailureRendererPrivate {
        static $gtype: GObject.GType<FailureRendererPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ImportButtonClass = typeof ImportButton;

    /**
     * @gir-type Struct
     */
    abstract class ImportButtonPrivate {
        static $gtype: GObject.GType<ImportButtonPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type KeyRendererClass = typeof KeyRenderer;

    /**
     * @gir-type Struct
     */
    abstract class KeyRendererPrivate {
        static $gtype: GObject.GType<KeyRendererPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type KeyWidgetClass = typeof KeyWidget;

    /**
     * @gir-type Struct
     */
    abstract class KeyWidgetPrivate {
        static $gtype: GObject.GType<KeyWidgetPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ListSelectorClass = typeof ListSelector;

    /**
     * @gir-type Struct
     */
    abstract class ListSelectorPrivate {
        static $gtype: GObject.GType<ListSelectorPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PromptDialogClass = typeof PromptDialog;

    /**
     * @gir-type Struct
     */
    abstract class PromptDialogPrivate {
        static $gtype: GObject.GType<PromptDialogPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type RendererIface = typeof Renderer;

    /**
     * @gir-type Alias
     */
    type SecureEntryBufferClass = typeof SecureEntryBuffer;

    /**
     * @gir-type Struct
     */
    abstract class SecureEntryBufferPrivate {
        static $gtype: GObject.GType<SecureEntryBufferPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type TreeSelectorClass = typeof TreeSelector;

    /**
     * @gir-type Struct
     */
    abstract class TreeSelectorPrivate {
        static $gtype: GObject.GType<TreeSelectorPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type UnlockOptionsWidgetClass = typeof UnlockOptionsWidget;

    /**
     * @gir-type Struct
     */
    abstract class UnlockOptionsWidgetPrivate {
        static $gtype: GObject.GType<UnlockOptionsWidgetPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ViewerIface = typeof Viewer;

    /**
     * @gir-type Alias
     */
    type ViewerWidgetClass = typeof ViewerWidget;

    namespace Renderer {
        /**
         * Interface for implementing Renderer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_data_changed(): void;

            /**
             * @param viewer 
             * @param menu 
             * @virtual
             */
            vfunc_populate_popup(viewer: Viewer, menu: Gtk.Menu): void;

            /**
             * Render the contents of the renderer to the given viewer.
             * @param viewer The viewer to render to.
             * @virtual
             */
            vfunc_render_view(viewer: Viewer): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            attributes: Gck.Attributes | null;
            label: string;
        }
    }

    export interface RendererNamespace {
        $gtype: GObject.GType<Renderer>;
        prototype: Renderer;
        /**
        * Create and initialize a renderer for the given attributes and label. These
        * renderers should have been preregistered via `gcr_renderer_register()`.
        * @param label The label for the renderer
        * @param attrs The attributes to render
        */
        create(label: string | null, attrs: Gck.Attributes): Renderer | null;
        /**
        * Register a renderer to be created when matching attributes are passed to
        * `gcr_renderer_create()`.
        * @param renderer_type The renderer class type
        * @param attrs The attributes to match
        */
        register(renderer_type: GObject.GType, attrs: Gck.Attributes): void;
        /**
        * Register all the well known renderers for certificates and keys known to the
        * Gcr library.
        */
        register_well_known(): void;
    }
    /**
     * An interface that's implemented by renderers which wish to render data to a
     * {@link Viewer}.
     * 
     * The interaction between {@link Renderer} and {@link Viewer} is not stable
     * yet, and so new renderers cannot be implemented outside the Gcr library at
     * this time.
     * 
     * To lookup a renderer for a given set of attributes, use the `gcr_renderer_create()`
     * function. This will create and initialize a renderer that's capable of viewing
     * the data in those attributes.
     * @gir-type Interface
     */
    interface Renderer extends GObject.Object, Renderer.Interface {

        // Properties
        /**
         * The attributes to display.
         */
        get attributes(): Gck.Attributes | null;
        set attributes(val: Gck.Attributes | null);

        /**
         * The label to display.
         */
        get label(): string;
        set label(val: string);

        // Methods
        /**
         * Emit the {@link GcrUi.Renderer.SignalSignatures.data_changed | GcrUi.Renderer::data-changed} signal on the renderer. This is used by
         * renderer implementations.
         */
        emit_data_changed(): void;

        /**
         * Get the PKCS#11 attributes, if any, set for this renderer to display.
         * @returns the attributes, owned by the renderer
         */
        get_attributes(): Gck.Attributes | null;

        /**
         * Called by {@link GcrUi.Viewer} when about to display a popup menu for the content
         * displayed by the renderer. The renderer can add a menu item if desired.
         * @param viewer The viewer that is displaying a popup
         * @param menu The popup menu being displayed
         */
        popuplate_popup(viewer: Viewer, menu: Gtk.Menu): void;

        /**
         * Render the contents of the renderer to the given viewer.
         * @param viewer The viewer to render to.
         */
        render_view(viewer: Viewer): void;

        /**
         * Set the PKCS#11 attributes for this renderer to display.
         * @param attrs attributes to set
         */
        set_attributes(attrs: Gck.Attributes | null): void;
    }


    export const Renderer: RendererNamespace & {
        new (): Renderer; // This allows `obj instanceof Renderer`
    };

    namespace Viewer {
        /**
         * Interface for implementing Viewer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Add a renderer to this viewer.
             * @param renderer The renderer to add
             * @virtual
             */
            vfunc_add_renderer(renderer: Renderer): void;

            /**
             * Get the number of renderers present in the viewer.
             * @virtual
             */
            vfunc_count_renderers(): number;

            /**
             * Get a pointer to the renderer at the given index. It is an error to request
             * an index that is out of bounds.
             * @param index_ The index of the renderer to get
             * @virtual
             */
            vfunc_get_renderer(index_: number): Renderer;

            /**
             * Insert a renderer at a specific point in the viewer
             * @param renderer the renderer to insert
             * @param before the renderer to insert before
             * @virtual
             */
            vfunc_insert_renderer(renderer: Renderer, before: Renderer | null): void;

            /**
             * Remove a renderer from this viewer.
             * @param renderer The renderer to remove
             * @virtual
             */
            vfunc_remove_renderer(renderer: Renderer): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps {}
    }

    export interface ViewerNamespace {
        $gtype: GObject.GType<Viewer>;
        prototype: Viewer;
        /**
        * Get an implementation of {@link GcrUi.Viewer} that supports a view
        * of multiple renderers.
        */
        ["new"](): Viewer;
        /**
        * Get an implementation of {@link GcrUi.Viewer} that supports a scrolled view
        * of multiple renderers.
        */
        new_scrolled(): Viewer;
    }
    /**
     * An abstract interface that represents a widget that can hold
     * various renderers and display their contents.
     * 
     * The interaction between {@link Renderer} and {@link Viewer} is not stable
     * yet, and so viewers cannot be implemented outside the Gcr library at this
     * time.
     * 
     * Use the {@link Viewer.new} and {@link Viewer.new_scrolled} to get default
     * implementations of viewers.
     * @gir-type Interface
     */
    interface Viewer extends Gtk.Widget, Viewer.Interface {

        // Methods
        /**
         * Add a renderer to this viewer.
         * @param renderer The renderer to add
         */
        add_renderer(renderer: Renderer): void;

        /**
         * Get the number of renderers present in the viewer.
         * @returns The number of renderers.
         */
        count_renderers(): number;

        /**
         * Get a pointer to the renderer at the given index. It is an error to request
         * an index that is out of bounds.
         * @param index_ The index of the renderer to get
         * @returns the render, owned by the viewer
         */
        get_renderer(index_: number): Renderer;

        /**
         * Insert a renderer at a specific point in the viewer
         * @param renderer the renderer to insert
         * @param before the renderer to insert before
         */
        insert_renderer(renderer: Renderer, before: Renderer | null): void;

        /**
         * Remove a renderer from this viewer.
         * @param renderer The renderer to remove
         */
        remove_renderer(renderer: Renderer): void;
    }


    export const Viewer: ViewerNamespace & {
        new (): Viewer; // This allows `obj instanceof Viewer`
    };

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

export default GcrUi;

// END
