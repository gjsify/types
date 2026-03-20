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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace PantheonWayland {
    /**
     * PantheonWayland-1
     */

    /**
     * @gir-type Alias
     */
    type ExtendedBehaviorIface = typeof ExtendedBehavior;
    namespace ExtendedBehavior {
        // Constructor properties interface

        interface ConstructorProps extends Gtk.Widget.ConstructorProps {}
    }

    export interface ExtendedBehaviorNamespace {
        $gtype: GObject.GType<ExtendedBehavior>;
        prototype: ExtendedBehavior;
    }
    /**
     * @gir-type Interface
     */
    interface ExtendedBehavior extends Gtk.Widget {
        // Methods

        connect_to_shell(): void;
        set_keep_above(): void;
        make_centered(): void;
        focus(): void;
        /**
         * @param dim
         */
        make_modal(dim: boolean): void;
    }

    export const ExtendedBehavior: ExtendedBehaviorNamespace & {
        new (): ExtendedBehavior; // This allows `obj instanceof ExtendedBehavior`
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

export default PantheonWayland;

// END
