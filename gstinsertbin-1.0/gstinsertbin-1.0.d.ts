
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * GstInsertBin-1.0
 */

import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstInsertBin {

/**
 * This is the prototype of callbacks to be called when the operation completes.
 * It could be called at any time, including as a re-entrant call while the
 * operation is requested.
 * @callback 
 * @param insertbin A #GstInsertBin
 * @param element The #GstElement on which the operation was performed
 * @param success %TRUE if the operation was successful
 */
interface InsertBinCallback {
    (insertbin: InsertBin, element: Gst.Element, success: boolean): void
}
module InsertBin {

    // Signal callback interfaces

    /**
     * Signal callback interface for `append`
     */
    interface AppendSignalCallback {
        ($obj: InsertBin, callback: Gst.Element, user_data: any | null, user_data2: any | null): void
    }

    /**
     * Signal callback interface for `insert-after`
     */
    interface InsertAfterSignalCallback {
        ($obj: InsertBin, sibling: Gst.Element, callback: Gst.Element, user_data: any | null, user_data2: any | null): void
    }

    /**
     * Signal callback interface for `insert-before`
     */
    interface InsertBeforeSignalCallback {
        ($obj: InsertBin, sibling: Gst.Element, callback: Gst.Element, user_data: any | null, user_data2: any | null): void
    }

    /**
     * Signal callback interface for `prepend`
     */
    interface PrependSignalCallback {
        ($obj: InsertBin, callback: Gst.Element, user_data: any | null, user_data2: any | null): void
    }

    /**
     * Signal callback interface for `remove`
     */
    interface RemoveSignalCallback {
        ($obj: InsertBin, callback: Gst.Element, user_data: any | null, user_data2: any | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gst.ChildProxy.ConstructorProperties, Gst.Bin.ConstructorProperties {
    }

}

interface InsertBin extends Gst.ChildProxy {

    // Conflicting properties

    object: any

    // Own fields of GstInsertBin-1.0.GstInsertBin.InsertBin

    parent: Gst.Bin & Gst.Object

    // Owm methods of GstInsertBin-1.0.GstInsertBin.InsertBin

    /**
     * This action signal adds the filter like element after any other element
     * in the bin.
     * 
     * Same as the #GstInsertBin::append signal.
     * @param element the #GstElement to add
     * @param callback the callback to call when the element has been  added or not, or %NULL
     */
    append(element: Gst.Element, callback: InsertBinCallback): void
    /**
     * This action signal adds the filter like element after the `sibling`
     * element in the bin.
     * 
     * Same as the #GstInsertBin::insert-after signal.
     * @param element the #GstElement to add
     * @param sibling the #GstElement to add `element` after
     * @param callback the callback to call when the element has been  added or not, or %NULL
     */
    insert_after(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void
    /**
     * This action signal adds the filter like element before the `sibling`
     * element in the bin.
     * 
     * Same as the #GstInsertBin::insert-before signal.
     * @param element the #GstElement to add
     * @param sibling the #GstElement to add `element` before
     * @param callback the callback to call when the element has been  added or not, or %NULL
     */
    insert_before(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void
    /**
     * This action signal adds the filter like element before any other element
     * in the bin.
     * 
     * Same as the #GstInsertBin::prepend signal.
     * @param element the #GstElement to add
     * @param callback the callback to call when the element has been  added or not, or %NULL
     */
    prepend(element: Gst.Element, callback: InsertBinCallback): void
    /**
     * This action signal removed the filter like element from the bin.
     * 
     * Same as the #GstInsertBin::remove signal.
     * @param element the #GstElement to remove
     * @param callback the callback to call when the element has been  removed or not, or %NULL
     */
    remove(element: Gst.Element, callback: InsertBinCallback): void

    // Overloads of remove

    /**
     * Removes the element from the bin, unparenting it as well.
     * Unparenting the element means that the element will be dereferenced,
     * so if the bin holds the only reference to the element, the element
     * will be freed in the process of removing it from the bin.  If you
     * want the element to still exist after removing, you need to call
     * gst_object_ref() before removing it from the bin.
     * 
     * If the element's pads are linked to other pads, the pads will be unlinked
     * before the element is removed from the bin.
     * @param element the #GstElement to remove
     * @returns %TRUE if the element could be removed, %FALSE if the bin does not want to remove the element.
     */
    remove(element: Gst.Element): boolean

    // Conflicting methods

    /**
     * Gets a single property using the GstChildProxy mechanism.
     * You are responsible for freeing it by calling g_value_unset()
     * @param name name of the property
     */
    get_property(name: string | null): /* value */ any

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string | null, value: any): void
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string | null, value: any): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own signals of GstInsertBin-1.0.GstInsertBin.InsertBin

    connect(sigName: "append", callback: InsertBin.AppendSignalCallback): number
    connect_after(sigName: "append", callback: InsertBin.AppendSignalCallback): number
    emit(sigName: "append", callback: Gst.Element, user_data: any | null, user_data2: any | null, ...args: any[]): void
    connect(sigName: "insert-after", callback: InsertBin.InsertAfterSignalCallback): number
    connect_after(sigName: "insert-after", callback: InsertBin.InsertAfterSignalCallback): number
    emit(sigName: "insert-after", sibling: Gst.Element, callback: Gst.Element, user_data: any | null, user_data2: any | null, ...args: any[]): void
    connect(sigName: "insert-before", callback: InsertBin.InsertBeforeSignalCallback): number
    connect_after(sigName: "insert-before", callback: InsertBin.InsertBeforeSignalCallback): number
    emit(sigName: "insert-before", sibling: Gst.Element, callback: Gst.Element, user_data: any | null, user_data2: any | null, ...args: any[]): void
    connect(sigName: "prepend", callback: InsertBin.PrependSignalCallback): number
    connect_after(sigName: "prepend", callback: InsertBin.PrependSignalCallback): number
    emit(sigName: "prepend", callback: Gst.Element, user_data: any | null, user_data2: any | null, ...args: any[]): void
    connect(sigName: "remove", callback: InsertBin.RemoveSignalCallback): number
    connect_after(sigName: "remove", callback: InsertBin.RemoveSignalCallback): number
    emit(sigName: "remove", callback: Gst.Element, user_data: any | null, user_data2: any | null, ...args: any[]): void

    // Class property signals of GstInsertBin-1.0.GstInsertBin.InsertBin

    connect(sigName: "notify::async-handling", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::async-handling", ...args: any[]): void
    connect(sigName: "notify::message-forward", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: InsertBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-forward", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class InsertBin extends Gst.Bin {

    // Own properties of GstInsertBin-1.0.GstInsertBin.InsertBin

    static name: string
    static $gtype: GObject.GType<InsertBin>

    // Constructors of GstInsertBin-1.0.GstInsertBin.InsertBin

    constructor(config?: InsertBin.ConstructorProperties) 
    /**
     * Creates a new #GstInsertBin
     * @constructor 
     * @param name The name of the new #GstInsertBin element (or %NULL)
     * @returns The new #GstInsertBin
     */
    constructor(name: string | null) 
    /**
     * Creates a new #GstInsertBin
     * @constructor 
     * @param name The name of the new #GstInsertBin element (or %NULL)
     * @returns The new #GstInsertBin
     */
    static new(name: string | null): InsertBin
    _init(config?: InsertBin.ConstructorProperties): void
}

interface InsertBinClass {

    // Own fields of GstInsertBin-1.0.GstInsertBin.InsertBinClass

    parent_class: Gst.BinClass
}

/**
 * The object class structure.
 * @record 
 */
abstract class InsertBinClass {

    // Own properties of GstInsertBin-1.0.GstInsertBin.InsertBinClass

    static name: string
}

interface InsertBinPrivate {
}

class InsertBinPrivate {

    // Own properties of GstInsertBin-1.0.GstInsertBin.InsertBinPrivate

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

export default GstInsertBin;
// END