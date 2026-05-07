
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
import type Libxfce4util from '@girs/libxfce4util-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Libxfce4panel {

    /**
     * Libxfce4panel-2.0
     */


    /**
     * @gir-type Enum
     */
    export namespace PanelPluginMode {
        export const $gtype: GObject.GType<PanelPluginMode>;
    }

    /**
     * Orientation of the plugin in the panel.
     * @gir-type Enum
     * @since 4.10
     */
    enum PanelPluginMode {
        /**
         * Horizontal panel and plugins
         */
        HORIZONTAL,
        /**
         * Vertical rotated panel and plugins
         */
        VERTICAL,
        /**
         * Vertical panel with horizontal plugins
         */
        DESKBAR,
    }


    /**
     * @gir-type Enum
     */
    enum PanelPluginProviderPropType {
        SET_SIZE,
        SET_ICON_SIZE,
        SET_DARK_MODE,
        SET_MODE,
        SET_SCREEN_POSITION,
        SET_BACKGROUND_ALPHA,
        SET_NROWS,
        SET_LOCKED,
        SET_SENSITIVE,
        ACTION_REMOVED,
        ACTION_SAVE,
        ACTION_QUIT,
        ACTION_QUIT_FOR_RESTART,
        ACTION_BACKGROUND_UNSET,
        ACTION_SHOW_CONFIGURE,
        ACTION_SHOW_ABOUT,
        ACTION_ASK_REMOVE,
        EVENT_HIDDEN,
        SET_OPACITY,
        SET_BACKGROUND_COLOR,
        SET_BACKGROUND_IMAGE,
        SET_MONITOR,
        SET_GEOMETRY,
    }


    /**
     * @gir-type Enum
     */
    enum PanelPluginProviderSignal {
        MOVE_PLUGIN,
        EXPAND_PLUGIN,
        COLLAPSE_PLUGIN,
        SMALL_PLUGIN,
        UNSMALL_PLUGIN,
        LOCK_PANEL,
        UNLOCK_PANEL,
        REMOVE_PLUGIN,
        ADD_NEW_ITEMS,
        PANEL_PREFERENCES,
        PANEL_LOGOUT,
        PANEL_ABOUT,
        PANEL_HELP,
        SHOW_CONFIGURE,
        SHOW_ABOUT,
        FOCUS_PLUGIN,
        SHRINK_PLUGIN,
        UNSHRINK_PLUGIN,
    }


    /**
     * @gir-type Enum
     */
    export namespace ScreenPosition {
        export const $gtype: GObject.GType<ScreenPosition>;
    }

    /**
     * There are three screen positions for each side of the screen:
     * LEFT/TOP, CENTER and RIGHT/BOTTOM. The XfceScreenPosition is expressed
     * as navigational direction, with possible addition of H or V to denote
     * horizontal and vertical orientation. Additionally there are two floating
     * positions, horizontal and vertical.
     * @gir-type Enum
     */
    enum ScreenPosition {
        /**
         * No position has been set.
         */
        NONE,
        /**
         * North West Horizontal
         */
        NW_H,
        /**
         * North
         */
        N,
        /**
         * North East Horizontal
         */
        NE_H,
        /**
         * North West Vertical
         */
        NW_V,
        /**
         * West
         */
        W,
        /**
         * South West Vertical
         */
        SW_V,
        /**
         * North East Vertical
         */
        NE_V,
        /**
         * East
         */
        E,
        /**
         * South East Vertical
         */
        SE_V,
        /**
         * South West Horizontal
         */
        SW_H,
        /**
         * South
         */
        S,
        /**
         * South East Horizontal
         */
        SE_H,
        /**
         * Floating Horizontal
         */
        FLOATING_H,
        /**
         * Floating Vertical
         */
        FLOATING_V,
    }


    /**
     * Defines padding to be used for panel plugin icons (size difference between the button and the icon)
     * @since 4.19.6
     */
    const PANEL_PLUGIN_ICON_PADDING: number;

    /**
     * Create regular {@link Gtk.Button} with a few properties set to be useful in the
     * Xfce panel: Flat ({@link Gtk.ReliefStyle.NONE}), no focus on click and minimal padding.
     * @returns newly created {@link Gtk.Button}.
     */
    function panel_create_button(): Gtk.Widget;

    /**
     * Create regular {@link Gtk.ToggleButton} with a few properties set to be useful in
     * Xfce panel: Flat ({@link Gtk.ReliefStyle.NONE}), no focus on click and minimal padding.
     * @returns newly created {@link Gtk.ToggleButton}.
     */
    function panel_create_toggle_button(): Gtk.Widget;

    /**
     * Function for the name of the Xfconf channel used by the panel. By default
     * this returns "xfce4-panel", but you can override this value with the
     * environment variable XFCE_PANEL_CHANNEL_NAME.
     * @returns name of the Xfconf channel See also: XFCE_PANEL_CHANNEL_NAME,           xfce_panel_plugin_xfconf_channel_new and           xfce_panel_plugin_get_property_base
     * @since 4.8
     */
    function panel_get_channel_name(): string;

    /**
     * See xfce_panel_pixbuf_from_source_at_size
     * @param source string that contains the location of an icon
     * @param icon_theme icon theme or `null` to use the default icon theme
     * @param size size the icon that should be loaded
     * @returns a GdkPixbuf or `null` if nothing was found. The value should          be released with g_object_unref when no longer used. See also: XfcePanelImage
     * @since 4.8
     */
    function panel_pixbuf_from_source(source: string, icon_theme: (Gtk.IconTheme | null), size: number): GdkPixbuf.Pixbuf;

    /**
     * Try to load a pixbuf from a source string. The source could be
     * an abolute path, an icon name or a filename that points to a
     * file in the pixmaps directory.
     * 
     * This function is particularly usefull for loading names from
     * the Icon key of desktop files.
     * 
     * The pixbuf is never bigger than `dest_width` and `dest_height`.
     * If it is when loaded from the disk, the pixbuf is scaled
     * preserving the aspect ratio.
     * @param source string that contains the location of an icon
     * @param icon_theme icon theme or `null` to use the default icon theme
     * @param dest_width the maximum returned width of the GdkPixbuf
     * @param dest_height the maximum returned height of the GdkPixbuf
     * @returns a GdkPixbuf or `null` if nothing was found. The value should          be released with g_object_unref when no longer used. See also: XfcePanelImage
     * @since 4.10
     */
    function panel_pixbuf_from_source_at_size(source: string, icon_theme: (Gtk.IconTheme | null), dest_width: number, dest_height: number): GdkPixbuf.Pixbuf;

    /**
     * See `xfce_panel_pixbuf_from_source_at_size()`
     * 
     * See also: {@link Libxfce4panel.PanelImage}
     * @param image {@link Gtk.Image} to be set
     * @param source string that contains the location of an icon
     * @param icon_theme icon theme or `null` to use the default icon theme
     * @param size size the icon that should be loaded
     * @param scale desired scale (see `gtk_widget_get_scale_factor()`)
     * @since 4.17.4
     */
    function panel_set_image_from_source(image: Gtk.Image, source: string, icon_theme: (Gtk.IconTheme | null), size: number, scale: number): void;

    /**
     * @gir-type Callback
     */
    interface InitFunc {
        (module: GObject.TypeModule, make_resident: boolean): GObject.GType;
    }

    /**
     * @gir-type Callback
     */
    interface PanelPluginCheck {
        (screen: Gdk.Screen): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface PanelPluginFunc {
        (plugin: PanelPlugin): void;
    }

    /**
     * @gir-type Callback
     */
    interface PanelPluginPreInit {
        (argc: number, argv: string): boolean;
    }

    namespace ArrowButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.ToggleButton.SignalSignatures {
            /**
             * Emitted when the arrow direction of the menu button changes.
             * This value also determines the direction of the popup menu.
             * @signal
             * @run-last
             */
            "arrow-type-changed": (arg0: Gtk.ArrowType) => void;
            "notify::arrow-type": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::draw-indicator": (pspec: GObject.ParamSpec) => void;
            "notify::inconsistent": (pspec: GObject.ParamSpec) => void;
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
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ToggleButton.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {
            arrow_type: Gtk.ArrowType;
            arrowType: Gtk.ArrowType;
        }
    }

    /**
     * This struct contain private data only and should be accessed by
     * the functions below.
     * @gir-type Class
     */
    class ArrowButton extends Gtk.ToggleButton implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<ArrowButton>;

        // Properties
        /**
         * The arrow type of the button. This value also determines the direction
         * of the popup menu.
         * @default Gtk.ArrowType.UP
         */
        get arrow_type(): Gtk.ArrowType;
        set arrow_type(val: Gtk.ArrowType);

        /**
         * The arrow type of the button. This value also determines the direction
         * of the popup menu.
         * @default Gtk.ArrowType.UP
         */
        get arrowType(): Gtk.ArrowType;
        set arrowType(val: Gtk.ArrowType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ArrowButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ArrowButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](arrow_type: Gtk.ArrowType): ArrowButton;

        // Conflicted with Gtk.ToggleButton.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ArrowButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ArrowButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ArrowButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ArrowButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ArrowButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ArrowButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param type 
         * @virtual
         */
        vfunc_arrow_type_changed(type: Gtk.ArrowType): void;

        // Methods
        /**
         * Returns the value of the ::arrow-type property.
         * @returns the {@link Gtk.ArrowType} of `button`.
         */
        get_arrow_type(): Gtk.ArrowType;

        /**
         * Whether the button is blinking. If the blink timeout is finished
         * and the button is still highlighted, this functions returns `true`.
         * @returns `true` when `button` is blinking.
         */
        get_blinking(): boolean;

        /**
         * Sets the arrow type for `button`.
         * @param arrow_type a valid  {@link Gtk.ArrowType}
         */
        set_arrow_type(arrow_type: Gtk.ArrowType): void;

        /**
         * Make the button blink.
         * @param blinking `true` when the button should start blinking, `false` to             stop the blinking.
         */
        set_blinking(blinking: boolean): void;

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


    namespace PanelImage {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::source": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            pixbuf: GdkPixbuf.Pixbuf;
            size: number;
            source: string;
        }
    }

    /**
     * This struct contain private data only and should be accessed by
     * the functions below.
     * @gir-type Class
     */
    class PanelImage extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PanelImage>;

        // Properties
        /**
         * @deprecated since 4.18.1: Use {@link Gtk.Image.pixbuf} instead.
         */
        get pixbuf(): GdkPixbuf.Pixbuf;
        set pixbuf(val: GdkPixbuf.Pixbuf);

        /**
         * @deprecated since 4.18.1: Use {@link Gtk.Image.pixel_size} instead.
         * @default -1
         */
        get size(): number;
        set size(val: number);

        /**
         * @deprecated since 4.18.1: Use {@link Gtk.Image.storage_type} instead.
         * @default null
         */
        get source(): string;
        set source(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PanelImage.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PanelImage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): PanelImage;

        static new_from_pixbuf(pixbuf: (GdkPixbuf.Pixbuf | null)): PanelImage;

        static new_from_source(source: (string | null)): PanelImage;

        // Signals
        /** @signal */
        connect<K extends keyof PanelImage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PanelImage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PanelImage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PanelImage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PanelImage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PanelImage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Resets the image to be empty.
         */
        clear(): void;

        /**
         * The size of the image, set by `xfce_panel_image_set_size()` or -1
         * if no size is forced and the image is scaled to the allocation size.
         * @returns icon size in pixels of the image or -1.
         */
        get_size(): number;

        /**
         * See `xfce_panel_image_new_from_pixbuf()` for details.
         * @param pixbuf a {@link GdkPixbuf.Pixbuf}, or `null`.
         */
        set_from_pixbuf(pixbuf: (GdkPixbuf.Pixbuf | null)): void;

        /**
         * See `xfce_panel_image_new_from_source()` for details.
         * @param source source of the image. This can be an absolute path or           an icon-name or `null`.
         */
        set_from_source(source: (string | null)): void;

        /**
         * This will force an image size, instead of looking at the allocation
         * size, see introduction for more details. You can set a `size` of
         * -1 to turn this off.
         * @param size a new size in pixels.
         */
        set_size(size: number): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, null];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

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
        parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk.Builder, name: string, value: (GObject.Value | any)): void;

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
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @virtual
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, never];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

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
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         * @virtual
         */
        vfunc_set_name(name: string): void;
    }


    namespace PanelPlugin {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            /**
             * This signal is emmitted when the About entry in the right-click
             * menu is clicked. Plugin writers can use it to show information
             * about the plugin and display credits of the developers, translators
             * and other contributors.
             * 
             * See also: `xfce_panel_plugin_menu_show_about()`.
             * @signal
             * @run-last
             */
            about: () => void;
            /**
             * This signal is emmitted when the Properties entry in the right-click
             * menu is clicked. Plugin writers can use this signal to open a
             * plugin settings dialog. It is their responsibility to block/unblock panel
             * autohide when the dialog is shown/hidden.
             * 
             * See also: `xfce_panel_plugin_menu_show_configure()` and
             *           xfce_titled_dialog_new ().
             * @signal
             * @run-last
             */
            "configure-plugin": () => void;
            /**
             * This signal is emmitted when the plugin is closing. Plugin
             * writers should use this signal to free any allocated resources.
             * @signal
             * @run-last
             */
            "free-data": () => void;
            /**
             * This signal is emmitted when the panel the `plugin` is on
             * is transitioning between hidden/visble.
             * @signal
             * @since 4.21.0
             * @run-last
             */
            "hidden-event": (arg0: boolean) => void;
            /**
             * This signal is emmitted whenever the mode of the panel
             * the `plugin` is on changes.
             * @signal
             * @since 4.10
             * @run-last
             */
            "mode-changed": (arg0: PanelPluginMode) => void;
            /**
             * This signal is emmitted whenever the nrows of the panel
             * the `plugin` is on changes.
             * @signal
             * @since 4.10
             * @run-last
             */
            "nrows-changed": (arg0: number) => void;
            /**
             * This signal is emmitted whenever the orientation of the panel
             * the `plugin` is on changes. Plugins writers can for example use
             * this signal to change the order of widgets in the plugin.
             * @signal
             * @run-last
             */
            "orientation-changed": (arg0: Gtk.Orientation) => void;
            /**
             * This signal is emmitted by the user by running
             * xfce4-panel --plugin-event=plugin-name:name:type:value. It can be
             * used for remote communication, like for example to popup a menu.
             * @signal
             * @run-last
             */
            "remote-event": (arg0: string, arg1: unknown) => (boolean | void);
            /**
             * This signal is emmitted when the plugin is permanently removed from
             * the panel configuration by the user. Developers can use this signal
             * to cleanup custom setting locations that for example store passwords.
             * 
             * The free-data signal is emitted after this signal!
             * 
             * Note that if you use the xfconf channel and base property provided
             * by `xfce_panel_plugin_get_property_base()` or the rc file location
             * returned by `xfce_panel_plugin_save_location()`, the panel will take
             * care of removing those settings.
             * @signal
             * @since 4.8
             * @run-last
             */
            removed: () => void;
            /**
             * This signal is emitted when the plugin should save it's
             * configuration. The signal is always emmitted before the plugin
             * closes (before the "free-data" signal) and also once in 10
             * minutes or so.
             * 
             * See also: `xfce_panel_plugin_save_location()`.
             * @signal
             * @run-last
             */
            save: () => void;
            /**
             * This signal is emmitted whenever the screen position of the panel
             * the `plugin` is on changes. Plugins writers can for example use
             * this signal to change the arrow direction of buttons.
             * @signal
             * @run-last
             */
            "screen-position-changed": (arg0: ScreenPosition) => void;
            /**
             * This signal is emmitted whenever the size of the panel
             * the `plugin` is on changes. Plugins writers can for example use
             * this signal to update their icon size.
             * 
             * If the function returns `false` or is not used, the panel will force
             * a square size to the plugin. If you want non-square plugins and you
             * don't need this signal you can use something like this:
             * 
             * g_signal_connect (plugin, "size-changed", G_CALLBACK (gtk_true), NULL);
             * @signal
             * @run-last
             */
            "size-changed": (arg0: number) => (boolean | void);
            "notify::arguments": (pspec: GObject.ParamSpec) => void;
            "notify::comment": (pspec: GObject.ParamSpec) => void;
            "notify::dark-mode": (pspec: GObject.ParamSpec) => void;
            "notify::display-name": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::icon-size": (pspec: GObject.ParamSpec) => void;
            "notify::mode": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::nrows": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
            "notify::screen-position": (pspec: GObject.ParamSpec) => void;
            "notify::shrink": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::small": (pspec: GObject.ParamSpec) => void;
            "notify::unique-id": (pspec: GObject.ParamSpec) => void;
            "notify::above-child": (pspec: GObject.ParamSpec) => void;
            "notify::visible-window": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.EventBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, PanelPluginProvider.ConstructorProps {
            "arguments": string[];
            comment: string;
            dark_mode: boolean;
            darkMode: boolean;
            display_name: string;
            displayName: string;
            expand: boolean;
            icon_size: number;
            iconSize: number;
            mode: PanelPluginMode;
            name: string;
            nrows: number;
            orientation: Gtk.Orientation;
            screen_position: ScreenPosition;
            screenPosition: ScreenPosition;
            shrink: boolean;
            size: number;
            small: boolean;
            unique_id: number;
            uniqueId: number;
        }
    }

    /**
     * This struct contain private data only and should be accessed by
     * the functions below.
     * @gir-type Class
     */
    class PanelPlugin extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable, PanelPluginProvider {
        static $gtype: GObject.GType<PanelPlugin>;

        // Properties
        /**
         * The arguments the plugin was started with. If the plugin was not
         * started with any arguments this value is `null`. Plugin writer can
         * use it to read the arguments array, but
         * `xfce_panel_plugin_get_arguments()` is recommended.
         * @construct-only
         */
        get "arguments"(): string[];

        /**
         * The translated description of the {@link Libxfce4panel.PanelPlugin}. This property is set
         * during plugin construction and can't be set twice. Plugin writer can use
         * it to read the plugin description, but `xfce_panel_plugin_get_comment()`
         * is recommended.
         * @since 4.8
         * @construct-only
         * @default null
         */
        get comment(): string;

        /**
         * Whether the {@link Libxfce4panel.PanelPlugin} shall request the Gtk dark theme variant (based on the panel
         * setting).
         * @since 4.14
         * @default false
         */
        get dark_mode(): boolean;
        set dark_mode(val: boolean);

        /**
         * Whether the {@link Libxfce4panel.PanelPlugin} shall request the Gtk dark theme variant (based on the panel
         * setting).
         * @since 4.14
         * @default false
         */
        get darkMode(): boolean;
        set darkMode(val: boolean);

        /**
         * The translated display name of the {@link Libxfce4panel.PanelPlugin}. This property is set
         * during plugin construction and can't be set twice. Plugin writer can use
         * it to read the plugin display name, but `xfce_panel_plugin_get_display_name()`
         * is recommended.
         * @construct-only
         * @default null
         */
        get display_name(): string;

        /**
         * The translated display name of the {@link Libxfce4panel.PanelPlugin}. This property is set
         * during plugin construction and can't be set twice. Plugin writer can use
         * it to read the plugin display name, but `xfce_panel_plugin_get_display_name()`
         * is recommended.
         * @construct-only
         * @default null
         */
        get displayName(): string;

        /**
         * Whether the {@link Libxfce4panel.PanelPlugin} expands on the panel. Plugin writers can use it
         * to read or set this property, but `xfce_panel_plugin_set_expand()`
         * is recommended.
         * @default false
         */
        get expand(): boolean;
        set expand(val: boolean);

        /**
         * The icon-size in pixels of the {@link Libxfce4panel.PanelPlugin}. Plugin writers can use it to read the
         * plugin's icon size, but `xfce_panel_plugin_get_icon_size()` is recommended.
         * @since 4.14
         * @read-only
         * @default 0
         */
        get icon_size(): number;

        /**
         * The icon-size in pixels of the {@link Libxfce4panel.PanelPlugin}. Plugin writers can use it to read the
         * plugin's icon size, but `xfce_panel_plugin_get_icon_size()` is recommended.
         * @since 4.14
         * @read-only
         * @default 0
         */
        get iconSize(): number;

        /**
         * Display mode of the plugin.
         * @since 4.10
         * @read-only
         * @default Libxfce4panel.PanelPluginMode.HORIZONTAL
         */
        get mode(): PanelPluginMode;

        /**
         * The internal, unstranslated, name of the {@link Libxfce4panel.PanelPlugin}. Plugin
         * writer can use it to read the plugin name, but
         * `xfce_panel_plugin_get_name()` is recommended since that returns
         * a const string.
         * @construct-only
         * @default null
         */
        get name(): string;

        /**
         * Number of rows the plugin is embedded on.
         * @since 4.10
         * @read-only
         * @default 1
         */
        get nrows(): number;

        /**
         * The {@link Gtk.Orientation} of the {@link Libxfce4panel.PanelPlugin}. Plugin writer can use it to read the
         * plugin orientation, but `xfce_panel_plugin_get_orientation()` is recommended.
         * @read-only
         * @default Gtk.Orientation.HORIZONTAL
         */
        get orientation(): Gtk.Orientation;

        /**
         * The {@link Libxfce4panel.ScreenPosition} of the {@link Libxfce4panel.PanelPlugin}. Plugin writer can use it
         * to read the plugin's screen position, but `xfce_panel_plugin_get_screen_position()`
         * is recommended.
         * @read-only
         * @default Libxfce4panel.ScreenPosition.NONE
         */
        get screen_position(): ScreenPosition;

        /**
         * The {@link Libxfce4panel.ScreenPosition} of the {@link Libxfce4panel.PanelPlugin}. Plugin writer can use it
         * to read the plugin's screen position, but `xfce_panel_plugin_get_screen_position()`
         * is recommended.
         * @read-only
         * @default Libxfce4panel.ScreenPosition.NONE
         */
        get screenPosition(): ScreenPosition;

        /**
         * Whether the {@link Libxfce4panel.PanelPlugin} can shrink when there is no space left on the panel.
         * Plugin writers can use it to read or set this property, but `xfce_panel_plugin_set_shrink()`
         * is recommended.
         * @since 4.10
         * @default false
         */
        get shrink(): boolean;
        set shrink(val: boolean);

        /**
         * The size in pixels of the {@link Libxfce4panel.PanelPlugin}. Plugin writer can use it to read the
         * plugin size, but `xfce_panel_plugin_get_size()` is recommended.
         * @read-only
         * @default 0
         */
        get size(): number;

        /**
         * Whether the {@link Libxfce4panel.PanelPlugin} is small enough to fit a single row of a multi-row panel.
         * Plugin writers can use it to read or set this property, but `xfce_panel_plugin_set_small()`
         * is recommended.
         * @since 4.10
         * @default false
         */
        get small(): boolean;
        set small(val: boolean);

        /**
         * @construct-only
         * @default -1
         */
        get unique_id(): number;

        /**
         * @construct-only
         * @default -1
         */
        get uniqueId(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PanelPlugin.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PanelPlugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PanelPlugin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PanelPlugin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PanelPlugin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PanelPlugin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PanelPlugin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PanelPlugin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Function to be used as {@link Gtk.MenuPositionFunc} in a call to `gtk_menu_popup()`.
         * As data argument it needs an {@link Libxfce4panel.PanelPlugin}.
         * 
         * The menu is normally positioned relative to `panel_plugin`. If you want the
         * menu to be positioned relative to another widget, you can use
         * `gtk_menu_attach_to_widget()` to explicitly set a 'parent' widget.
         * 
         * As a convenience, `xfce_panel_plugin_position_menu()` calls
         * `xfce_panel_plugin_register_menu()` for the menu.
         * 
         * <example>
         * void
         * myplugin_popup_menu (XfcePanelPlugin *plugin,
         *                      GtkMenu         *menu,
         *                      GdkEventButton  *ev)
         * {
         *     gtk_menu_popup (menu, NULL, NULL,
         *                     xfce_panel_plugin_position_menu, plugin,
         *                     ev->button, ev->time );
         * }
         * </example>
         * 
         * For a custom widget that will be used as a popup menu, use
         * `xfce_panel_plugin_position_widget()` instead.
         * 
         * See also: `gtk_menu_popup()`.
         * @param menu a {@link Gtk.Menu}.
         * @param push_in keep inside the screen (see {@link Gtk.MenuPositionFunc})
         * @param panel_plugin an {@link Libxfce4panel.PanelPlugin}.
         */
        static position_menu(menu: Gtk.Menu, push_in: boolean, panel_plugin: null): [number, number];

        // Virtual methods
        /**
         * See {@link Libxfce4panel.PanelPlugin.SignalSignatures.about | Libxfce4panel.PanelPlugin::about} for more information.
         * @virtual
         */
        vfunc_about(): void;

        /**
         * See {@link Libxfce4panel.PanelPlugin.SignalSignatures.configure_plugin | Libxfce4panel.PanelPlugin::configure-plugin} for more information.
         * @virtual
         */
        vfunc_configure_plugin(): void;

        /**
         * This function is for object orientated plugins and
         *                            triggered after the init function of the object.
         *                            When this function is triggered, the plugin
         *                            information like name, display name, comment and unique
         *                            id are available. This is also the place where you would
         *                            call functions like `xfce_panel_plugin_menu_show_configure()`.
         *                            You can see this as the replacement of {@link Libxfce4panel.PanelPluginFunc}
         *                            for object based plugins. Since 4.8.
         * @virtual
         */
        vfunc_construct(): void;

        /**
         * See {@link Libxfce4panel.PanelPlugin.SignalSignatures.free_data | Libxfce4panel.PanelPlugin::free-data} for more information.
         * @virtual
         */
        vfunc_free_data(): void;

        /**
         * See {@link Libxfce4panel.PanelPlugin.SignalSignatures.hidden_event | Libxfce4panel.PanelPlugin::hidden-event} for more information.
         * @param hidden 
         * @virtual
         */
        vfunc_hidden_event(hidden: boolean): void;

        /**
         * See {@link Libxfce4panel.PanelPlugin.SignalSignatures.mode_changed | Libxfce4panel.PanelPlugin::mode-changed} for more information.
         * @param mode 
         * @virtual
         */
        vfunc_mode_changed(mode: PanelPluginMode): void;

        /**
         * See {@link Libxfce4panel.PanelPlugin.SignalSignatures.nrows_changed | Libxfce4panel.PanelPlugin::nrows-changed} for more information.
         * @param rows 
         * @virtual
         */
        vfunc_nrows_changed(rows: number): void;

        /**
         * See {@link Libxfce4panel.PanelPlugin.SignalSignatures.orientation_changed | Libxfce4panel.PanelPlugin::orientation-changed} for more information.
         * @param orientation 
         * @virtual
         */
        vfunc_orientation_changed(orientation: Gtk.Orientation): void;

        /**
         * See {@link Libxfce4panel.PanelPlugin.SignalSignatures.remote_event | Libxfce4panel.PanelPlugin::remote-event} for more information.
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_remote_event(name: string, value: unknown): boolean;

        /**
         * See {@link Libxfce4panel.PanelPlugin.SignalSignatures.removed | Libxfce4panel.PanelPlugin::removed} for more information.
         * @virtual
         */
        vfunc_removed(): void;

        /**
         * See {@link Libxfce4panel.PanelPlugin.SignalSignatures.save | Libxfce4panel.PanelPlugin::save} for more information.
         * @virtual
         */
        vfunc_save(): void;

        /**
         * See {@link Libxfce4panel.PanelPlugin.SignalSignatures.screen_position_changed | Libxfce4panel.PanelPlugin::screen-position-changed} for more information.
         * @param position 
         * @virtual
         */
        vfunc_screen_position_changed(position: ScreenPosition): void;

        /**
         * See {@link Libxfce4panel.PanelPlugin.SignalSignatures.size_changed | Libxfce4panel.PanelPlugin::size-changed} for more information.
         * @param size 
         * @virtual
         */
        vfunc_size_changed(size: number): boolean;

        // Methods
        /**
         * Attach the plugin menu to this widget. Plugin writers should call this
         * for every widget that can receive mouse events. If you forget to call this
         * the plugin will not have a right-click menu and the user won't be able to
         * remove it.
         * @param widget a {@link Gtk.Widget} that receives mouse events.
         */
        add_action_widget(widget: Gtk.Widget): void;

        /**
         * Determine the {@link Gtk.ArrowType} for a widget that opens a menu.
         * @returns the {@link Gtk.ArrowType} to use.
         */
        arrow_type(): Gtk.ArrowType;

        /**
         * Whether this plugin blocks the autohide functionality of the panel. Use
         * this when you 'popup' something that is visually attached to the
         * plugin at it will look weird for a user if the panel will hide while
         * he/she is working in the popup.
         * 
         * Be sure to use this function as lock/unlock pairs, as a counter is
         * incremented/decremented under the hood. For menus, you can use
         * `xfce_panel_plugin_register_menu()` which will take care of this.
         * @param blocked new blocking state of this plugin.
         */
        block_autohide(blocked: boolean): void;

        /**
         * Block configuring the plugin. This will make the "Properties" menu
         * item insensitive.
         */
        block_menu(): void;

        /**
         * Grab the focus on `widget`. Asks the panel to allow focus on its items
         * and set the focus to the requested widget.
         * @param widget a {@link Gtk.Widget} inside the plugins that should be focussed.
         */
        focus_widget(widget: Gtk.Widget): void;

        /**
         * Argument vector passed to the plugin when it was added. Most of the
         * time the return value will be `null`, but if could for example contain
         * a list of filenames when the user added the plugin with
         * 
         * xfce4-panel --add=launcher *.desktop
         * 
         * see the code of the launcher plugin how to use this.
         * @returns the argument vector. The vector is owned by the plugin and          should not be freed.
         */
        get_arguments(): string[];

        /**
         * This returns the translated comment of the plugin set in
         * the .desktop file of the plugin.
         * @returns the (translated) comment of the plugin.
         */
        get_comment(): string;

        /**
         * This returns the translated name of the plugin set in the .desktop
         * file of the plugin.
         * @returns the (translated) display name of the plugin.
         */
        get_display_name(): string;

        /**
         * Whether the plugin is expanded or not. This set by the plugin using
         * `xfce_panel_plugin_set_expand()`.
         * @returns `true` when the plugin should expand,          `false` otherwise.
         */
        get_expand(): boolean;

        /**
         * Returns either the icon size defined in the panel's settings or
         * a preferred icon size.
         */
        get_icon_size(): number;

        /**
         * Whether the plugin is locked (not allowing customization). This
         * is emitted through the panel based on the Xfconf locking of the
         * panel window the plugin is embedded on.
         * 
         * It is however possible to send a fake signal to the plugin to
         * override this propery, so you should only use this for interface
         * elements and (if you use Xfconf) check the locking yourself
         * before you write any values or query the kiosk mode using the
         * api in libxfce4util.
         * @returns `true` if the user is not allowed to modify the plugin,          `false` is customization is allowed.
         */
        get_locked(): boolean;

        /**
         * The mode of the panel in which the plugin is embedded.
         * @returns the current {@link Libxfce4panel.PanelPluginMode} of the panel.
         */
        get_mode(): PanelPluginMode;

        /**
         * The internal name of the panel plugin.
         * @returns the name of the panel plugin.
         */
        get_name(): string;

        /**
         * The number of rows of the panel in which the plugin is embedded.
         * @returns the current number of rows of the panel.
         */
        get_nrows(): number;

        /**
         * The orientation of the panel in which the plugin is embedded.
         * @returns the current {@link Gtk.Orientation} of the panel.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * The property base for this plugin in the xfce4-panel XfconfChannel,
         * this name is something like /plugins/plugin-1.
         * @returns the property base for the xfconf channel userd by a plugin. See also: xfconf_channel_new_with_property_base.           XFCE_PANEL_PLUGIN_CHANNEL_NAME and           xfce_panel_get_channel_name
         */
        get_property_base(): string;

        /**
         * The screen position of the panel in which the plugin is embedded.
         * @returns the current {@link Libxfce4panel.ScreenPosition} of the panel.
         */
        get_screen_position(): ScreenPosition;

        /**
         * Whether the plugin can shrink if the size on the panel is limited. This
         * is effective with plugins that do not have expand set, but can accept
         * a smaller size when needed.
         * @returns `true` when the plugin can shrink,          `false` otherwise.
         */
        get_shrink(): boolean;

        /**
         * The size of the panel in which the plugin is embedded.
         * @returns the current size of the panel.
         */
        get_size(): number;

        /**
         * Whether the plugin is small enough to fit in a single row of
         * a multi-row panel. E.g. if it is a button-like applet.
         * @returns `true` when the plugin is small,          `false` otherwise.
         */
        get_small(): boolean;

        /**
         * The internal unique id of the plugin. Each plugin in the panel has
         * a unique number that is for example used for the config file name
         * or property base in the xfconf channel.
         * @returns the unique id of the plugin. Since 4.8
         */
        get_unique_id(): number;

        /**
         * Looks for the plugin resource file. This should be used to get the
         * plugin read location of the config file. You should only use the
         * returned path to read information from, since it might point to a
         * not-writable file (in kiosk mode for example).
         * 
         * See also: `xfce_panel_plugin_save_location()` and `xfce_resource_lookup()`
         * @returns The path to a config file or `null` if no file was found.          The returned string must be freed using `g_free()`
         */
        lookup_rc_file(): string;

        /**
         * Remove all custom menu items added through `xfce_panel_plugin_menu_insert_item`
         * from the menu.
         */
        menu_destroy(): void;

        /**
         * Insert a custom menu item to the plugin's right click menu. This item
         * is packed below the first item in the menu, which displays the plugin's
         * name.
         * @param item a {@link Gtk.MenuItem}.
         */
        menu_insert_item(item: Gtk.MenuItem): void;

        /**
         * Show the "About" item in the menu. Clicking on the menu item
         * will emit the "about" signal.
         */
        menu_show_about(): void;

        /**
         * Show the "Properties" item in the menu. Clicking on the menu item
         * will emit the "configure-plugin" signal.
         */
        menu_show_configure(): void;

        /**
         * Pops up `menu` at `widget` if `widget` is non-`null` and if appropriate given
         * the panel position, otherwise pops up `menu` at pointer.
         * 
         * As a convenience, `xfce_panel_plugin_popup_menu()` calls
         * `xfce_panel_plugin_register_menu()` for the `menu`.
         * 
         * For a custom widget that will be used as a popup menu, use
         * `xfce_panel_plugin_popup_window()` instead if this widget is a {@link Gtk.Window},
         * or `xfce_panel_plugin_position_widget()`.
         * 
         * See also: `gtk_menu_popup_at_widget()` and `gtk_menu_popup_at_pointer()`.
         * @param menu a {@link Gtk.Menu}.
         * @param widget the {@link Gtk.Widget} to align `menu` with or `null`                  to pop up `menu` at pointer.
         * @param trigger_event the {@link Gdk.Event} that initiated this request or                  `null` if it's the current event.
         */
        popup_menu(menu: Gtk.Menu, widget: (Gtk.Widget | null), trigger_event: (Gdk.Event | null)): void;

        /**
         * Pops up `window` at `widget` if `widget` is non-`null`, otherwise pops up `window`
         * at `plugin`. The user should not have to set any property of `window`: this
         * function takes care of setting the necessary properties to make `window` appear
         * as a menu widget.
         * 
         * This function tries to produce for a {@link Gtk.Window} a behavior similar to that
         * produced by `xfce_panel_plugin_popup_menu()` for a {@link Gtk.Menu}. In particular,
         * clicking outside the window or pressing Esc should hide it, and the function
         * takes care to lock panel autohide when the window is shown.
         * 
         * However, it may be that, especially on Wayland and depending on the compositor
         * used, hiding the window works more or less well. Also, `window` positioning at
         * `widget` only works on Wayland if the compositor supports the layer-shell
         * protocol, on which many of the panel features also depend.
         * 
         * See also: `xfce_panel_plugin_popup_menu()` and `xfce_panel_plugin_position_widget()`.
         * @param window a {@link Gtk.Window}.
         * @param widget the {@link Gtk.Widget} to align `window` with or `null` to use `plugin` as `widget`.
         */
        popup_window(window: Gtk.Window, widget: (Gtk.Widget | null)): void;

        /**
         * Computes the x and y coordinates to position the `menu_widget`
         * relative to `attach_widget`. If `attach_widget` is NULL, the computed
         * position will be relative to `plugin`.
         * 
         * Note that if the panel is hidden (autohide), you should delay calling this
         * function until the panel is shown, so that it returns the correct coordinates.
         * 
         * This function is intended for custom menu widgets and should rarely be used
         * since 4.19.0. For a regular {@link Gtk.Menu} you should use `xfce_panel_plugin_popup_menu()`
         * instead, and for a {@link Gtk.Window} `xfce_panel_plugin_popup_window()`, which take care
         * of positioning for you, among other things.
         * 
         * See also: `xfce_panel_plugin_popup_menu()` and `xfce_panel_plugin_popup_window()`.
         * @param menu_widget a {@link Gtk.Widget} that will be used as popup menu.
         * @param attach_widget a {@link Gtk.Widget} relative to which the menu should be positioned.
         */
        position_widget(menu_widget: Gtk.Widget, attach_widget: (Gtk.Widget | null)): [number, number];

        /**
         * Register a menu that is about to popup. This will make sure the panel
         * will properly handle its autohide behaviour. You have to call this
         * function every time the menu is opened (e.g. using `gtk_menu_popup_at_widget()`).
         * 
         * If you want to open the menu aligned to the side of the panel (and the
         * plugin), you should use `xfce_panel_plugin_popup_menu()`. This function
         * will take care of calling `xfce_panel_plugin_register_menu()` as well.
         * 
         * See also: `xfce_panel_plugin_popup_menu()` and `xfce_panel_plugin_block_autohide()`.
         * @param menu a {@link Gtk.Menu} that will be opened
         */
        register_menu(menu: Gtk.Menu): void;

        /**
         * Remove this plugin from the panel and remove all its configuration.
         * 
         * Plugins should not use this function to implement their own
         * menu item or button to remove theirselfs from the panel, but only
         * in case the there are problems with the plugin in the panel. Always
         * try to inform the user why this occured.
         */
        remove(): void;

        /**
         * Returns the path that can be used to store configuration information.
         * Don't use this function if you want to read from the config file, but
         * use `xfce_panel_plugin_lookup_rc_file()` instead.
         * 
         * See also: `xfce_panel_plugin_lookup_rc_file()` and `xfce_resource_save_location()`
         * @param create whether to create missing directories.
         * @returns The path to a config file or `null` if no file was found.          The returned string must be freed u sing `g_free()`.
         */
        save_location(create: boolean): string;

        /**
         * Whether the plugin should expand of not
         * @param expand whether to expand the plugin.
         */
        set_expand(expand: boolean): void;

        /**
         * Whether the plugin can shrink if the size on the panel
         * is limited. This does not work if the plugin is expanded.
         * @param shrink whether the plugin can shrink.
         */
        set_shrink(shrink: boolean): void;

        /**
         * Whether the plugin is small enough to fit in a single row of
         * a multi-row panel. E.g. if it is a button-like applet.
         * @param small whether the plugin is a small button-like applet.
         */
        set_small(small: boolean): void;

        /**
         * Connect a dialog to a plugin. When the `plugin` is closed, it will
         * destroy the `window`.
         * @param window a {@link Gtk.Window}.
         */
        take_window(window: Gtk.Window): void;

        /**
         * Unblock configuring the plugin. This will make the "Properties" menu
         * item sensitive.
         */
        unblock_menu(): void;

        ask_remove(): void;

        /**
         * @param hidden 
         */
        emit_hidden_event(hidden: boolean): void;

        /**
         * @param provider_signal 
         */
        emit_signal(provider_signal: PanelPluginProviderSignal): void;

        get_show_about(): boolean;

        get_show_configure(): boolean;

        /**
         * @param name 
         * @param value 
         * @param handle 
         */
        remote_event(name: string, value: (GObject.Value | any), handle: number): boolean;

        removed(): void;

        save(): void;

        /**
         * @param dark_mode 
         */
        set_dark_mode(dark_mode: boolean): void;

        /**
         * @param icon_size 
         */
        set_icon_size(icon_size: number): void;

        /**
         * @param locked 
         */
        set_locked(locked: boolean): void;

        /**
         * @param mode 
         */
        set_mode(mode: PanelPluginMode): void;

        /**
         * @param rows 
         */
        set_nrows(rows: number): void;

        /**
         * @param screen_position 
         */
        set_screen_position(screen_position: ScreenPosition): void;

        /**
         * @param size 
         */
        set_size(size: number): void;

        show_about(): void;

        show_configure(): void;

        /**
         * @virtual
         */
        vfunc_ask_remove(): void;

        /**
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * @virtual
         */
        vfunc_get_show_about(): boolean;

        /**
         * @virtual
         */
        vfunc_get_show_configure(): boolean;

        /**
         * @virtual
         */
        vfunc_get_unique_id(): number;

        /**
         * @param dark_mode 
         * @virtual
         */
        vfunc_set_dark_mode(dark_mode: boolean): void;

        /**
         * @param icon_size 
         * @virtual
         */
        vfunc_set_icon_size(icon_size: number): void;

        /**
         * @param locked 
         * @virtual
         */
        vfunc_set_locked(locked: boolean): void;

        /**
         * @param mode 
         * @virtual
         */
        vfunc_set_mode(mode: PanelPluginMode): void;

        /**
         * @param rows 
         * @virtual
         */
        vfunc_set_nrows(rows: number): void;

        /**
         * @param screen_position 
         * @virtual
         */
        vfunc_set_screen_position(screen_position: ScreenPosition): void;

        /**
         * @param size 
         * @virtual
         */
        vfunc_set_size(size: number): void;

        /**
         * @virtual
         */
        vfunc_show_about(): void;

        /**
         * @virtual
         */
        vfunc_show_configure(): void;
    }


    /**
     * @gir-type Alias
     */
    type ArrowButtonClass = typeof ArrowButton;

    /**
     * @gir-type Struct
     */
    abstract class ArrowButtonPrivate {
        static $gtype: GObject.GType<ArrowButtonPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PanelImageClass = typeof PanelImage;

    /**
     * @gir-type Struct
     */
    abstract class PanelImagePrivate {
        static $gtype: GObject.GType<PanelImagePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PanelPluginClass = typeof PanelPlugin;

    /**
     * @gir-type Struct
     */
    abstract class PanelPluginPrivate {
        static $gtype: GObject.GType<PanelPluginPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PanelPluginProviderInterface = typeof PanelPluginProvider;

    namespace PanelPluginProvider {
        /**
         * Interface for implementing PanelPluginProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_ask_remove(): void;

            /**
             * @virtual
             */
            vfunc_get_name(): string;

            /**
             * @virtual
             */
            vfunc_get_show_about(): boolean;

            /**
             * @virtual
             */
            vfunc_get_show_configure(): boolean;

            /**
             * @virtual
             */
            vfunc_get_unique_id(): number;

            /**
             * @param hidden 
             * @virtual
             */
            vfunc_hidden_event(hidden: boolean): void;

            /**
             * @param name 
             * @param value 
             * @param handle 
             * @virtual
             */
            vfunc_remote_event(name: string, value: unknown, handle: number): boolean;

            /**
             * @virtual
             */
            vfunc_removed(): void;

            /**
             * @virtual
             */
            vfunc_save(): void;

            /**
             * @param dark_mode 
             * @virtual
             */
            vfunc_set_dark_mode(dark_mode: boolean): void;

            /**
             * @param icon_size 
             * @virtual
             */
            vfunc_set_icon_size(icon_size: number): void;

            /**
             * @param locked 
             * @virtual
             */
            vfunc_set_locked(locked: boolean): void;

            /**
             * @param mode 
             * @virtual
             */
            vfunc_set_mode(mode: PanelPluginMode): void;

            /**
             * @param rows 
             * @virtual
             */
            vfunc_set_nrows(rows: number): void;

            /**
             * @param screen_position 
             * @virtual
             */
            vfunc_set_screen_position(screen_position: ScreenPosition): void;

            /**
             * @param size 
             * @virtual
             */
            vfunc_set_size(size: number): void;

            /**
             * @virtual
             */
            vfunc_show_about(): void;

            /**
             * @virtual
             */
            vfunc_show_configure(): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface PanelPluginProviderNamespace {
        $gtype: GObject.GType<PanelPluginProvider>;
        prototype: PanelPluginProvider;
    }
    /**
     * @gir-type Interface
     */
    interface PanelPluginProvider extends GObject.Object, PanelPluginProvider.Interface {

        // Methods
        ask_remove(): void;

        /**
         * @param hidden 
         */
        emit_hidden_event(hidden: boolean): void;

        /**
         * @param provider_signal 
         */
        emit_signal(provider_signal: PanelPluginProviderSignal): void;

        get_name(): string;

        get_show_about(): boolean;

        get_show_configure(): boolean;

        get_unique_id(): number;

        /**
         * @param name 
         * @param value 
         * @param handle 
         */
        remote_event(name: string, value: (GObject.Value | any), handle: number): boolean;

        removed(): void;

        save(): void;

        /**
         * @param dark_mode 
         */
        set_dark_mode(dark_mode: boolean): void;

        /**
         * @param icon_size 
         */
        set_icon_size(icon_size: number): void;

        /**
         * @param locked 
         */
        set_locked(locked: boolean): void;

        /**
         * @param mode 
         */
        set_mode(mode: PanelPluginMode): void;

        /**
         * @param rows 
         */
        set_nrows(rows: number): void;

        /**
         * @param screen_position 
         */
        set_screen_position(screen_position: ScreenPosition): void;

        /**
         * @param size 
         */
        set_size(size: number): void;

        show_about(): void;

        show_configure(): void;
    }


    export const PanelPluginProvider: PanelPluginProviderNamespace & {
        new (): PanelPluginProvider; // This allows `obj instanceof PanelPluginProvider`
    };

    /**
     * Typedef for GTypeModule for possible future expansion.
     * @gir-type Alias
     */
    type PanelTypeModule = GObject.TypeModule;

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

export default Libxfce4panel;

// END
