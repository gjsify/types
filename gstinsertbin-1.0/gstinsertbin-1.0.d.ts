/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstinsertbin-1.0-ambient.d.ts';
import './gstinsertbin-1.0-import.d.ts';
/**
 * GstInsertBin-1.0
 */

import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstInsertBin {
    interface InsertBinCallback {
        (insertbin: InsertBin, element: Gst.Element, success: boolean): void;
    }
    module InsertBin {
        // Signal callback interfaces

        interface Append {
            (callback: Gst.Element, user_data?: any | null, user_data2?: any | null): void;
        }

        interface InsertAfter {
            (sibling: Gst.Element, callback: Gst.Element, user_data?: any | null, user_data2?: any | null): void;
        }

        interface InsertBefore {
            (sibling: Gst.Element, callback: Gst.Element, user_data?: any | null, user_data2?: any | null): void;
        }

        interface Prepend {
            (callback: Gst.Element, user_data?: any | null, user_data2?: any | null): void;
        }

        interface Remove {
            (callback: Gst.Element, user_data?: any | null, user_data2?: any | null): void;
        }

        // Constructor properties interface
    }

    /**
     * This element is a #GstBin that has a single source and sink pad. It allows
     * the user (the application) to easily add and remove filter-like element
     * (that has a single source and sink pad), to the pipeline while it is running.
     * It features a fully asynchronous API inspired by GLib's GAsyncResult based
     * APIs.
     *
     * Each operation (addition or removal) can take a callback, this callback
     * is guaranteed to be called. Unlike GIO, there is no guarantee about where
     * this callback will be called from, it could be called before the action
     * returns or it could be called later from another thread. The signature of
     * this callback GstInsertBinCallback().
     */
    class InsertBin extends Gst.Bin {
        // Constructors of GstInsertBin-1.0.InsertBin

        static ['new'](name?: string | null): InsertBin;

        // Owm methods of GstInsertBin-1.0.InsertBin

        /**
         * This action signal adds the filter like element after any other element
         * in the bin.
         *
         * Same as the #GstInsertBin::append signal.
         * @param element the #GstElement to add
         * @param callback the callback to call when the element has been  added or not, or %NULL
         */
        append(element: Gst.Element, callback: InsertBinCallback): void;
        /**
         * This action signal adds the filter like element after the `sibling`
         * element in the bin.
         *
         * Same as the #GstInsertBin::insert-after signal.
         * @param element the #GstElement to add
         * @param sibling the #GstElement to add @element after
         * @param callback the callback to call when the element has been  added or not, or %NULL
         */
        insert_after(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void;
        /**
         * This action signal adds the filter like element before the `sibling`
         * element in the bin.
         *
         * Same as the #GstInsertBin::insert-before signal.
         * @param element the #GstElement to add
         * @param sibling the #GstElement to add @element before
         * @param callback the callback to call when the element has been  added or not, or %NULL
         */
        insert_before(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void;
        /**
         * This action signal adds the filter like element before any other element
         * in the bin.
         *
         * Same as the #GstInsertBin::prepend signal.
         * @param element the #GstElement to add
         * @param callback the callback to call when the element has been  added or not, or %NULL
         */
        prepend(element: Gst.Element, callback: InsertBinCallback): void;
        /**
         * This action signal removed the filter like element from the bin.
         *
         * Same as the #GstInsertBin::remove signal.
         * @param element the #GstElement to remove
         * @param callback the callback to call when the element has been  removed or not, or %NULL
         */
        remove(element: Gst.Element, callback: InsertBinCallback): void;
    }

    /**
     * The object class structure.
     */
    class InsertBinClass {}

    class InsertBinPrivate {}

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

export default GstInsertBin;
// END
