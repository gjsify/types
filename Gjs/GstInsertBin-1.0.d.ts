// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstInsertBin-1.0
 */

import type * as Gjs from './Gjs';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

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
interface InsertBin_ConstructProps extends Gst.ChildProxy_ConstructProps, Gst.Bin_ConstructProps {
}

/**
 * Signal callback interface for `append`
 */
interface InsertBin_AppendSignalCallback {
    ($obj: InsertBin, callback: Gst.Element, user_data: object | null, user_data2: object | null): void
}

/**
 * Signal callback interface for `insert-after`
 */
interface InsertBin_InsertAfterSignalCallback {
    ($obj: InsertBin, sibling: Gst.Element, callback: Gst.Element, user_data: object | null, user_data2: object | null): void
}

/**
 * Signal callback interface for `insert-before`
 */
interface InsertBin_InsertBeforeSignalCallback {
    ($obj: InsertBin, sibling: Gst.Element, callback: Gst.Element, user_data: object | null, user_data2: object | null): void
}

/**
 * Signal callback interface for `prepend`
 */
interface InsertBin_PrependSignalCallback {
    ($obj: InsertBin, callback: Gst.Element, user_data: object | null, user_data2: object | null): void
}

/**
 * Signal callback interface for `remove`
 */
interface InsertBin_RemoveSignalCallback {
    ($obj: InsertBin, callback: Gst.Element, user_data: object | null, user_data2: object | null): void
}

interface InsertBin extends Gst.ChildProxy {

    // Conflicting properties

    object: any

    // Own fields of GstInsertBin-1.0.GstInsertBin.InsertBin

    parent: Gst.Bin

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
    remove(element: Gst.Element, callback?: InsertBinCallback): void

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
     */
    remove(element: Gst.Element): boolean
    remove(...args: any[]): any
    remove(args_or_element: any[] | Gst.Element): void | boolean | any

    // Conflicting methods

    get_property(...args: any[]): any
    ref(...args: any[]): any

    // Own signals of GstInsertBin-1.0.GstInsertBin.InsertBin

    connect(sigName: "append", callback: InsertBin_AppendSignalCallback): number
    connect_after(sigName: "append", callback: InsertBin_AppendSignalCallback): number
    emit(sigName: "append", callback: Gst.Element, user_data: object | null, user_data2: object | null, ...args: any[]): void
    connect(sigName: "insert-after", callback: InsertBin_InsertAfterSignalCallback): number
    connect_after(sigName: "insert-after", callback: InsertBin_InsertAfterSignalCallback): number
    emit(sigName: "insert-after", sibling: Gst.Element, callback: Gst.Element, user_data: object | null, user_data2: object | null, ...args: any[]): void
    connect(sigName: "insert-before", callback: InsertBin_InsertBeforeSignalCallback): number
    connect_after(sigName: "insert-before", callback: InsertBin_InsertBeforeSignalCallback): number
    emit(sigName: "insert-before", sibling: Gst.Element, callback: Gst.Element, user_data: object | null, user_data2: object | null, ...args: any[]): void
    connect(sigName: "prepend", callback: InsertBin_PrependSignalCallback): number
    connect_after(sigName: "prepend", callback: InsertBin_PrependSignalCallback): number
    emit(sigName: "prepend", callback: Gst.Element, user_data: object | null, user_data2: object | null, ...args: any[]): void
    connect(sigName: "remove", callback: InsertBin_RemoveSignalCallback): number
    connect_after(sigName: "remove", callback: InsertBin_RemoveSignalCallback): number
    emit(sigName: "remove", callback: Gst.Element, user_data: object | null, user_data2: object | null, ...args: any[]): void

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

    constructor(config?: InsertBin_ConstructProps) 
    /**
     * Creates a new #GstInsertBin
     * @constructor 
     * @param name The name of the new #GstInsertBin element (or %NULL)
     */
    constructor(name: string | null) 
    /**
     * Creates a new #GstInsertBin
     * @constructor 
     * @param name The name of the new #GstInsertBin element (or %NULL)
     */
    static new(name: string | null): InsertBin
    _init(config?: InsertBin_ConstructProps): void
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

}
export default GstInsertBin;