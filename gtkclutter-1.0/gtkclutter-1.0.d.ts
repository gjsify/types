/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gtkclutter-1.0-ambient.d.ts';
import './gtkclutter-1.0-import.d.ts';
/**
 * GtkClutter-1.0
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
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type Clutter from '@girs/clutter-1.0';
import type Json from '@girs/json-1.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Cogl from '@girs/cogl-1.0';

export namespace GtkClutter {
    /**
     * Error enumeration for #GtkClutterTexture
     */
    enum TextureError {
        /**
         * Invalid stock id
         */
        TEXTURE_ERROR_INVALID_STOCK_ID,
    }
    /**
     * This function should be called instead of clutter_init() and
     * gtk_init().
     * @param argv pointer to the   arguments vector, or %NULL
     * @returns %CLUTTER_INIT_SUCCESS on success, a negative integer   on failure.
     */
    function init(argv?: string[] | null): Clutter.InitError;
    /**
     * This function should be called instead of clutter_init() and
     * gtk_init_with_args().
     * @param argv a pointer to the array   of command line arguments, or %NULL
     * @param parameter_string a string which is displayed in    the first line of &lt;option&gt;--help&lt;/option&gt; output, after    &lt;literal&gt;&lt;replaceable&gt;programname&lt;/replaceable&gt; [OPTION...]&lt;/literal&gt;
     * @param entries a    %NULL-terminated array of #GOptionEntry&lt;!-- --&gt;s describing the    options of your program
     * @param translation_domain a translation domain to use for    translating the &lt;option&gt;--help&lt;/option&gt; output for the options    in @entries with gettext(), or %NULL
     * @returns %CLUTTER_INIT_SUCCESS on success, a negative integer   on failure.
     */
    function init_with_args(
        argv?: string[] | null,
        parameter_string?: string | null,
        entries?: GLib.OptionEntry[] | null,
        translation_domain?: string | null,
    ): Clutter.InitError;
    module Actor {
        // Constructor properties interface
    }

    /**
     * A ClutterActor containing a #GtkWidget.
     */
    class Actor extends Clutter.Actor {
        // Own properties of GtkClutter-1.0.Actor

        /**
         * The #GtkWidget to be embedded into the #GtkClutterActor
         */
        contents: Gtk.Widget;

        // Constructors of GtkClutter-1.0.Actor

        static ['new'](): Actor;

        static new_with_contents(contents: Gtk.Widget): Actor;

        // Owm methods of GtkClutter-1.0.Actor

        /**
         * Retrieves the child of the #GtkBin used to hold the contents of `actor`.
         *
         * This convenience function is the logical equivalent of:
         *
         *
         * ```
         * GtkWidget *bin;
         *
         * bin = gtk_clutter_actor_get_widget (GTK_CLUTTER_ACTOR (actor));
         * return gtk_bin_get_child (GTK_BIN (bin));
         * ```
         *
         * @returns a #GtkWidget, or %NULL if not content   has been set
         */
        get_contents(): Gtk.Widget;
        /**
         * Retrieves the #GtkBin used to hold the #GtkClutterActor:contents widget
         * @returns a #GtkBin
         */
        get_widget(): Gtk.Widget;
    }

    module Embed {
        // Constructor properties interface
    }

    /**
     * A #GtkWidget containing the default Clutter stage.
     *
     * The &lt;structname&gt;GtkClutterEmbed&lt;/structname&gt; structure contains only
     * private data and should be accessed using the provided API.
     */
    class Embed extends Gtk.Container {
        // Own properties of GtkClutter-1.0.Embed

        /**
         * The #GtkWidget to be embedded into the #GtkClutterActor
         */
        use_layout_size: boolean;
        /**
         * The #GtkWidget to be embedded into the #GtkClutterActor
         */
        useLayoutSize: boolean;

        // Constructors of GtkClutter-1.0.Embed

        static ['new'](): Embed;

        // Owm methods of GtkClutter-1.0.Embed

        /**
         * Retrieves the #ClutterStage from `embed`. The returned stage can be
         * used to add actors to the Clutter scene.
         * @returns the Clutter stage. You should never   destroy or unref the returned actor.
         */
        get_stage(): Clutter.Actor;
        /**
         * Retrieves whether the embedding uses the layout size, see
         * gtk_clutter_embed_set_use_layout_size() for details.
         * @returns %TRUE if reporting stage size as widget size, %FALSE otherwise.
         */
        get_use_layout_size(): boolean;
        /**
         * Changes the way `embed` requests size. If `use_layout_size` is
         * %TRUE, the `embed` widget will request the size that the
         * LayoutManager reports as the preferred size. This means that
         * a Gtk+ window will automatically get the natural and minimum
         * toplevel window sizes. This is useful when the contents of the
         * clutter stage is similar to a traditional UI.
         *
         * If `use_layout_size` is %FALSE (which is the default) then `embed`
         * will not request any size and its up to the embedder to make sure
         * there is some size (by setting a custom size on the widget or a default
         * size on the toplevel. This makes more sense when using the `embed`
         * as a viewport into a potentially unlimited clutter space.
         * @param use_layout_size a boolean
         */
        set_use_layout_size(use_layout_size: boolean): void;
    }

    module Texture {
        // Constructor properties interface
    }

    /**
     * The &lt;structname&gt;GtkClutterTexture&lt;/structname&gt; structure contains
     * only private data and should be accessed using the provided API.
     */
    class Texture extends Clutter.Texture {
        // Constructors of GtkClutter-1.0.Texture

        static ['new'](): Texture;

        // Owm methods of GtkClutter-1.0.Texture

        static error_quark(): GLib.Quark;

        // Owm methods of GtkClutter-1.0.Texture

        /**
         * Sets the contents of `texture` using the `icon_name` from the
         * current icon theme.
         * @param widget a #GtkWidget or %NULL
         * @param icon_name the name of the icon
         * @param icon_size the icon size or -1
         * @returns %TRUE on success, %FALSE on failure
         */
        set_from_icon_name(widget: Gtk.Widget | null, icon_name: string, icon_size: Gtk.IconSize): boolean;
        /**
         * Sets the contents of `texture` with a copy of `pixbuf`.
         * @param pixbuf a #GdkPixbuf
         * @returns %TRUE on success, %FALSE on failure.
         */
        set_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): boolean;
        /**
         * Sets the contents of `texture` using the stock icon `stock_id,` as
         * rendered by `widget`.
         * @param widget a #GtkWidget
         * @param stock_id the stock id of the icon
         * @param icon_size the size of the icon, or -1
         * @returns %TRUE on success, %FALSE on failure.
         */
        set_from_stock(widget: Gtk.Widget, stock_id: string, icon_size: Gtk.IconSize): boolean;
    }

    module Window {
        // Constructor properties interface
    }

    /**
     * A #GtkWindow containing a #ClutterStage.
     *
     * The &lt;structname&gt;GtkClutterWindow&lt;/structname&gt; structure contains only
     * private data and it should be accessed using the provided API.
     */
    class Window extends Gtk.Window {
        // Constructors of GtkClutter-1.0.Window

        static ['new'](): Window;

        // Owm methods of GtkClutter-1.0.Window

        /**
         * Retrieves the #ClutterStage that this window is embedding
         *
         * Use this function if you wish to add other actors to the #ClutterStage.
         * @returns the window's #ClutterStage
         */
        get_stage(): Clutter.Actor;
    }

    /**
     * Base class for #GtkClutterActor.
     */
    class ActorClass {}

    class ActorPrivate {}

    /**
     * Base class for #GtkClutterEmbed.
     *
     * The &lt;structname&gt;GtkClutterEmbedClass&lt;/structname&gt; contains only private
     * data.
     */
    class EmbedClass {}

    class EmbedPrivate {}

    /**
     * The &lt;structname&gt;GtkClutterTextureClass&lt;/structname&gt; structure contains
     * only private data.
     */
    class TextureClass {}

    /**
     * Base class for #GtkClutterWindow.
     *
     * The &lt;structname&gt;GtkClutterWindowClass&lt;/structname&gt; structure contains
     * only private data.
     */
    class WindowClass {}

    class WindowPrivate {}

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

export default GtkClutter;
// END
