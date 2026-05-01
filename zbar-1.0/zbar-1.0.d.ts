
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
import Gtk__ from '@girs/gtk-3.0';
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

export namespace ZBar {

    /**
     * ZBar-1.0
     */


    namespace Gtk {
        // Signal signatures
        interface SignalSignatures extends Gtk__.Widget.SignalSignatures {
            /**
             * emitted when a barcode is decoded from an image.
             * the symbol type and contained data are provided as separate
             * parameters
             * @signal
             * @run-cleanup
             */
            decoded: (arg0: number, arg1: string) => void;
            /**
             * emitted when a barcode is decoded from an image.
             * the symbol type name is prefixed to the data, separated by a
             * colon
             * @signal
             * @run-cleanup
             */
            "decoded-text": (arg0: string) => void;
            "notify::video-device": (pspec: GObject.ParamSpec) => void;
            "notify::video-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::video-opened": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk__.Widget.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk__.Buildable.ConstructorProps {
            video_device: string;
            videoDevice: string;
            video_enabled: boolean;
            videoEnabled: boolean;
            video_opened: boolean;
            videoOpened: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Gtk extends Gtk__.Widget implements Atk.ImplementorIface, Gtk__.Buildable {
        static $gtype: GObject.GType<Gtk>;

        // Properties
        /**
         * @default null
         */
        get video_device(): string;
        set video_device(val: string);

        /**
         * @default null
         */
        get videoDevice(): string;
        set videoDevice(val: string);

        /**
         * @default false
         */
        get video_enabled(): boolean;
        set video_enabled(val: boolean);

        /**
         * @default false
         */
        get videoEnabled(): boolean;
        set videoEnabled(val: boolean);

        /**
         * @read-only
         * @default false
         */
        get video_opened(): boolean;

        /**
         * @read-only
         * @default false
         */
        get videoOpened(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Gtk.SignalSignatures;

        // Fields
        widget: Gtk__.Widget;

        // Constructors
        constructor(properties?: Partial<Gtk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Gtk;

        // Signals
        /** @signal */
        connect<K extends keyof Gtk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Gtk.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Gtk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Gtk.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Gtk.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Gtk.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * utility function to populate a zbar_image_t from a GdkPixbuf.
         * @param image the zbar library image destination to populate
         * @param pixbuf the GdkPixbuf source
         */
        static image_from_pixbuf(image: (any | null), pixbuf: GdkPixbuf.Pixbuf): boolean;

        // Virtual methods
        /**
         * @param text 
         * @virtual
         */
        vfunc_decoded_text(text: string): void;

        /**
         * @param image the GdkPixbuf used to store the image
         * @virtual
         */
        vfunc_scan_image(image: GdkPixbuf.Pixbuf): void;

        // Methods
        /**
         * retrieve the currently opened video device.
         * @returns the current video device or NULL if no device is opened
         */
        get_video_device(): string;

        /**
         * retrieve the current video enabled state.
         * @returns true if video scanning is currently enabled, false otherwise
         */
        get_video_enabled(): boolean;

        /**
         * retrieve the current video opened state.
         * @returns true if video device is currently opened, false otherwise
         */
        get_video_opened(): boolean;

        /**
         * set video camera resolution.
         * `note` this call must be made before video is initialized
         * @param width width in pixels
         * @param height height in pixels
         */
        request_video_size(width: number, height: number): void;

        /**
         * @param image the GdkPixbuf used to store the image
         */
        scan_image(image: GdkPixbuf.Pixbuf): void;

        /**
         * open a new video device.
         * `note` since opening a device may take some time, this call will
         * return immediately and the device will be opened asynchronously
         * @param video_device the platform specific name of   the device to open. use NULL to close a currently opened device.
         */
        set_video_device(video_device: (string | null)): void;

        /**
         * enable/disable video scanning.
         * has no effect unless a video device is opened
         * @param video_enabled true to enable video scanning, false to disable
         */
        set_video_enabled(video_enabled: boolean): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk__.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk__.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk__.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk__.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(builder: Gtk__.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, any];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk__.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @returns the name set with `gtk_buildable_set_name()`
         */
        get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         */
        parser_finished(builder: Gtk__.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk__.Builder, name: string, value: (GObject.Value | any)): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        set_name(name: string): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk__.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @virtual
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk__.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk__.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk__.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk__.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, any];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk__.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk__.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk__.Builder, name: string, value: unknown): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         * @virtual
         */
        vfunc_set_name(name: string): void;
    }


    /**
     * @gir-type Alias
     */
    type GtkClass = typeof Gtk;

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

export default ZBar;

// END
