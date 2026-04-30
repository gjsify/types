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
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstInsertBin {
    /**
     * GstInsertBin-1.0
     */

    /**
     * @gir-type Callback
     */
    interface InsertBinCallback {
        (insertbin: InsertBin, element: Gst.Element, success: boolean): void;
    }
    namespace InsertBin {
        // Signal signatures
        interface SignalSignatures extends Gst.Bin.SignalSignatures {
            /**
             * This action signal adds the filter like element after any other element
             * in the bin.
             *
             * Same as `gst_insert_bin_append()`
             * @signal
             * @action
             * @run-last
             */
            append: (arg0: Gst.Element, arg1: any | null, arg2: any | null) => void;
            /**
             * This action signal adds the filter like element after the `sibling`
             * element in the bin.
             * element in the bin.
             *
             * Same as `gst_insert_bin_insert_after()`
             * @signal
             * @action
             * @run-last
             */
            'insert-after': (arg0: Gst.Element, arg1: Gst.Element, arg2: any | null, arg3: any | null) => void;
            /**
             * This action signal adds the filter like element before the `sibling`
             * element in the bin.
             *
             * Same as `gst_insert_bin_insert_before()`
             * @signal
             * @action
             * @run-last
             */
            'insert-before': (arg0: Gst.Element, arg1: Gst.Element, arg2: any | null, arg3: any | null) => void;
            /**
             * This action signal adds the filter like element before any other element
             * in the bin.
             *
             * Same as `gst_insert_bin_prepend()`
             * @signal
             * @action
             * @run-last
             */
            prepend: (arg0: Gst.Element, arg1: any | null, arg2: any | null) => void;
            /**
             * This action signal removed the filter like element from the bin.
             *
             * Same as `gst_insert_bin_remove()`
             * @signal
             * @action
             * @run-last
             */
            remove: (arg0: Gst.Element, arg1: any | null, arg2: any | null) => void;
            'notify::async-handling': (pspec: GObject.ParamSpec) => void;
            'notify::message-forward': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Bin.ConstructorProps, Gst.ChildProxy.ConstructorProps {}
    }

    /**
     * This element is a {@link Gst.Bin} that has a single source and sink pad. It allows
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
     * @gir-type Class
     * @since 1.2
     */
    class InsertBin extends Gst.Bin implements Gst.ChildProxy {
        static $gtype: GObject.GType<InsertBin>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InsertBin.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InsertBin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string | null): InsertBin;

        // Signals

        /** @signal */
        connect<K extends keyof InsertBin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InsertBin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof InsertBin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InsertBin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof InsertBin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InsertBin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * This action signal adds the filter like element after any other element
         * in the bin.
         *
         * Same as the {@link GstInsertBin.InsertBin.SignalSignatures.append | GstInsertBin.InsertBin::append} signal.
         * @param element the {@link Gst.Element} to add
         * @param callback the callback to call when the element has been  added or not, or `null`
         */
        append(element: Gst.Element, callback: InsertBinCallback): void;
        /**
         * This action signal adds the filter like element after the `sibling`
         * element in the bin.
         *
         * Same as the {@link GstInsertBin.InsertBin.SignalSignatures.insert_after | GstInsertBin.InsertBin::insert-after} signal.
         * @param element the {@link Gst.Element} to add
         * @param sibling the {@link Gst.Element} to add `element` after
         * @param callback the callback to call when the element has been  added or not, or `null`
         */
        insert_after(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void;
        /**
         * This action signal adds the filter like element before the `sibling`
         * element in the bin.
         *
         * Same as the {@link GstInsertBin.InsertBin.SignalSignatures.insert_before | GstInsertBin.InsertBin::insert-before} signal.
         * @param element the {@link Gst.Element} to add
         * @param sibling the {@link Gst.Element} to add `element` before
         * @param callback the callback to call when the element has been  added or not, or `null`
         */
        insert_before(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void;
        /**
         * This action signal adds the filter like element before any other element
         * in the bin.
         *
         * Same as the {@link GstInsertBin.InsertBin.SignalSignatures.prepend | GstInsertBin.InsertBin::prepend} signal.
         * @param element the {@link Gst.Element} to add
         * @param callback the callback to call when the element has been  added or not, or `null`
         */
        prepend(element: Gst.Element, callback: InsertBinCallback): void;
        /**
         * This action signal removed the filter like element from the bin.
         *
         * Same as the {@link GstInsertBin.InsertBin.SignalSignatures.remove | GstInsertBin.InsertBin::remove} signal.
         * @param element the {@link Gst.Element} to remove
         * @param callback the callback to call when the element has been  removed or not, or `null`
         */
        remove(element: Gst.Element, callback: InsertBinCallback): void;
        /**
         * @param args
         */
        // Conflicted with Gst.Bin.remove
        remove(...args: never[]): any;
        /**
         * Emits the {@link Gst.ChildProxy.SignalSignatures.child_added | Gst.ChildProxy::child-added} signal.
         * @param child the newly added child
         * @param name the name of the new child
         */
        child_added(child: GObject.Object, name: string): void;
        /**
         * Emits the {@link Gst.ChildProxy.SignalSignatures.child_removed | Gst.ChildProxy::child-removed} signal.
         * @param child the removed child
         * @param name the name of the old child
         */
        child_removed(child: GObject.Object, name: string): void;
        /**
         * Fetches a child by its number.
         * @param index the child's position in the child list
         * @returns the child object or `null` if     not found (index too high).
         */
        get_child_by_index<T = GObject.Object>(index: number): T;
        /**
         * Looks up a child element by the given name.
         *
         * This virtual method has a default implementation that uses {@link Gst.Object}
         * together with `gst_object_get_name()`. If the interface is to be used with
         * `GObjects`, this methods needs to be overridden.
         * @param name the child's name
         * @returns the child object or `null` if     not found.
         */
        get_child_by_name<T = GObject.Object>(name: string): T;
        /**
         * Looks up a child element by the given full-path name.
         *
         * Similar to `gst_child_proxy_get_child_by_name()`, this method
         * searches and returns a child given a name. The difference is that
         * this method allows a hierarchical path in the form of
         * child1::child2::child3. In the later example this method would
         * return a reference to child3, if found. The name should be made of
         * element names only and should not contain any property names.
         * @param name the full-path child's name
         * @returns the child object or `null` if     not found.
         */
        get_child_by_name_recurse<T = GObject.Object>(name: string): T;
        /**
         * Gets the number of child objects this parent contains.
         * @returns the number of child objects
         */
        get_children_count(): number;
        /**
         * Gets a single property using the GstChildProxy mechanism.
         * You are responsible for freeing it by calling `g_value_unset()`
         * @param name name of the property
         */
        get_property(name: string): unknown;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.get_property
        get_property(...args: never[]): any;
        /**
         * Looks up which object and {@link GObject.ParamSpec} would be effected by the given `name`.
         * @param name name of the property to look up
         * @returns `true` if `target` and `pspec` could be found. `false` otherwise. In that case the values for `pspec` and `target` are not modified. Unref `target` after usage. For plain {@link GObject.Object} `target` is the same as `object`.
         */
        lookup(name: string): [boolean, GObject.Object | null, GObject.ParamSpec | null];
        /**
         * Sets a single property using the GstChildProxy mechanism.
         * @param name name of the property to set
         * @param value new {@link GObject.Value} for the property
         */
        set_property(name: string, value: GObject.Value | any): void;
        /**
         * Emits the {@link Gst.ChildProxy.SignalSignatures.child_added | Gst.ChildProxy::child-added} signal.
         * @param child the newly added child
         * @param name the name of the new child
         * @virtual
         */
        vfunc_child_added(child: GObject.Object, name: string): void;
        /**
         * Emits the {@link Gst.ChildProxy.SignalSignatures.child_removed | Gst.ChildProxy::child-removed} signal.
         * @param child the removed child
         * @param name the name of the old child
         * @virtual
         */
        vfunc_child_removed(child: GObject.Object, name: string): void;
        /**
         * Fetches a child by its number.
         * @param index the child's position in the child list
         * @virtual
         */
        vfunc_get_child_by_index<T = GObject.Object>(index: number): T;
        /**
         * Looks up a child element by the given name.
         *
         * This virtual method has a default implementation that uses {@link Gst.Object}
         * together with `gst_object_get_name()`. If the interface is to be used with
         * `GObjects`, this methods needs to be overridden.
         * @param name the child's name
         * @virtual
         */
        vfunc_get_child_by_name<T = GObject.Object>(name: string): T;
        /**
         * Gets the number of child objects this parent contains.
         * @virtual
         */
        vfunc_get_children_count(): number;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * @param args
         */
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type InsertBinClass = typeof InsertBin;
    /**
     * @gir-type Struct
     */
    abstract class InsertBinPrivate {
        static $gtype: GObject.GType<InsertBinPrivate>;
    }

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
