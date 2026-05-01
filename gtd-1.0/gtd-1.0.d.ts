
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
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace Gtd {

    /**
     * Gtd-1.0
     */


    /**
     * @gir-type Callback
     */
    interface ErrorActionFunc {
        (notification: Notification): void;
    }

    /**
     * @gir-type Callback
     */
    interface ListModelFilterFunc<A = GObject.Object> {
        (object: A): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface MenuButtonCreatePopupFunc {
        (self: MenuButton): void;
    }

    /**
     * @gir-type Callback
     */
    interface NotificationActionFunc {
        (notification: Notification): void;
    }

    /**
     * @gir-type Callback
     */
    interface TaskListViewHeaderFunc {
        (task: Task, previous_task: Task): (Gtk.Widget | null);
    }

    namespace BinLayout {
        // Signal signatures
        interface SignalSignatures extends Gtk.LayoutManager.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.LayoutManager.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class BinLayout extends Gtk.LayoutManager {
        static $gtype: GObject.GType<BinLayout>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BinLayout.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<BinLayout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): BinLayout;

        // Signals
        /** @signal */
        connect<K extends keyof BinLayout.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BinLayout.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof BinLayout.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BinLayout.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof BinLayout.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BinLayout.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace Clock {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "day-changed": () => void;
            /**
             * @signal
             * @run-last
             */
            "hour-changed": () => void;
            /**
             * @signal
             * @run-last
             */
            "minute-changed": () => void;
            "notify::loading": (pspec: GObject.ParamSpec) => void;
            "notify::uid": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class Clock extends Object {
        static $gtype: GObject.GType<Clock>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Clock.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Clock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Clock;

        // Signals
        /** @signal */
        connect<K extends keyof Clock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Clock.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Clock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Clock.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Clock.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Clock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace ListModelFilter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::child-model": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            child_model: Gio.ListModel;
            childModel: Gio.ListModel;
        }
    }

    /**
     * @gir-type Class
     */
    class ListModelFilter<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<ListModelFilter>;

        // Properties
        /**
         * @read-only
         */
        get child_model(): Gio.ListModel;

        /**
         * @read-only
         */
        get childModel(): Gio.ListModel;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ListModelFilter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ListModelFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](child_model: Gio.ListModel): ListModelFilter;

        // Signals
        /** @signal */
        connect<K extends keyof ListModelFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ListModelFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ListModelFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ListModelFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ListModelFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ListModelFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the child model that is being filtered.
         * @returns A {@link Gio.ListModel}.
         */
        get_child_model(): Gio.ListModel;

        invalidate(): void;

        /**
         * @param filter_func 
         */
        set_filter_func(filter_func: ListModelFilterFunc): void;

        /**
         * Gets the type of the items in `list`.
         * 
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         * 
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;

        /**
         * Get the item at `position`.
         * 
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         * 
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         * 
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         * 
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): (A | null);

        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         * 
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         * 
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         * 
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;

        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         * 
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         * 
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): (A | null);

        /**
         * Gets the type of the items in `list`.
         * 
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         * 
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
         */
        vfunc_get_n_items(): number;
    }


    namespace ListStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::item-type": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            item_type: GObject.GTypeInput;
            itemType: GObject.GTypeInput;
        }
    }

    /**
     * {@link Gtd.ListStore} is a simple implementation of {@link Gio.ListModel} that stores all
     * items in memory.
     * 
     * It provides insertions, deletions, and lookups in logarithmic time
     * with a fast path for the common case of iterating the list linearly.
     * @gir-type Class
     */
    class ListStore<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<ListStore>;

        // Properties
        /**
         * The type of items contained in this list store. Items must be
         * subclasses of {@link GObject.Object}.
         * @construct-only
         */
        get item_type(): GObject.GType;

        /**
         * The type of items contained in this list store. Items must be
         * subclasses of {@link GObject.Object}.
         * @construct-only
         */
        get itemType(): GObject.GType;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ListStore.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ListStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](item_type: GObject.GType): ListStore;

        // Signals
        /** @signal */
        connect<K extends keyof ListStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ListStore.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ListStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ListStore.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ListStore.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ListStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Appends `item` to `store`. `item` must be of type {@link Gtd.ListStore.item_type}.
         * 
         * This function takes a ref on `item`.
         * 
         * Use `gtd_list_store_splice()` to append multiple items at the same time
         * efficiently.
         * @param item the new item
         */
        append(item: GObject.Object): void;

        /**
         * Retrieves the position of `items` inside `store`. It is a programming
         * error to pass an `item` that is not contained in `store`.
         * @param item the item to retrieve the position
         * @returns the position of `item` in `store`.
         */
        get_item_position(item: (any | null)): number;

        /**
         * Inserts `item` into `store` at `position`. `item` must be of type
         * {@link Gtd.ListStore.item_type} or derived from it. `position` must be smaller
         * than the length of the list, or equal to it to append.
         * 
         * This function takes a ref on `item`.
         * 
         * Use `gtd_list_store_splice()` to insert multiple items at the same time
         * efficiently.
         * @param position the position at which to insert the new item
         * @param item the new item
         */
        insert(position: number, item: GObject.Object): void;

        /**
         * Inserts `item` into `store` at a position to be determined by the
         * `compare_func`.
         * 
         * The list must already be sorted before calling this function or the
         * result is undefined.  Usually you would approach this by only ever
         * inserting items by way of this function.
         * 
         * This function takes a ref on `item`.
         * @param item the new item
         * @param compare_func pairwise comparison function for sorting
         * @returns the position at which `item` was inserted
         */
        insert_sorted(item: GObject.Object, compare_func: GLib.CompareDataFunc): number;

        /**
         * Removes the item from `store`.
         * 
         * Use `gtd_list_store_splice()` to remove multiple items at the same time
         * efficiently.
         * @param item the item that is to be removed
         */
        remove(item: (any | null)): void;

        /**
         * Removes all items from `store`.
         */
        remove_all(): void;

        /**
         * Removes the item from `store` that is at `position`. `position` must be
         * smaller than the current length of the list.
         * 
         * Use `gtd_list_store_splice()` to remove multiple items at the same time
         * efficiently.
         * @param position the position of the item that is to be removed
         */
        remove_at_position(position: number): void;

        /**
         * Sort the items in `store` according to `compare_func`.
         * @param compare_func pairwise comparison function for sorting
         */
        sort(compare_func: GLib.CompareDataFunc): void;

        /**
         * Changes `store` by removing `n_removals` items and adding `n_additions`
         * items to it. `additions` must contain `n_additions` items of type
         * {@link Gtd.ListStore.item_type}.  `null` is not permitted.
         * 
         * This function is more efficient than `gtd_list_store_insert()` and
         * `gtd_list_store_remove()`, because it only emits
         * {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} once for the change.
         * 
         * This function takes a ref on each item in `additions`.
         * 
         * The parameters `position` and `n_removals` must be correct (ie:
         * `position` + `n_removals` must be less than or equal to the length of
         * the list at the time this function is called).
         * @param position the position at which to make the change
         * @param n_removals the number of items to remove
         * @param additions the items to add
         */
        splice(position: number, n_removals: number, additions: GObject.Object[]): void;

        /**
         * Gets the type of the items in `list`.
         * 
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         * 
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;

        /**
         * Get the item at `position`.
         * 
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         * 
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         * 
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         * 
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): (A | null);

        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         * 
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         * 
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         * 
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;

        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         * 
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         * 
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): (A | null);

        /**
         * Gets the type of the items in `list`.
         * 
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         * 
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
         */
        vfunc_get_n_items(): number;
    }


    namespace Manager {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * The ::list-added signal is emmited after a {@link Gtd.TaskList}
             * is connected.
             * @signal
             * @run-last
             */
            "list-added": (arg0: TaskList) => void;
            /**
             * The ::list-changed signal is emmited after a {@link Gtd.TaskList}
             * has any of it's properties changed.
             * @signal
             * @run-last
             */
            "list-changed": (arg0: TaskList) => void;
            /**
             * The ::list-removed signal is emmited after a {@link Gtd.TaskList}
             * is disconnected.
             * @signal
             * @run-last
             */
            "list-removed": (arg0: TaskList) => void;
            /**
             * The ::provider-added signal is emmited after a {@link Gtd.Provider}
             * is added.
             * @signal
             * @run-last
             */
            "provider-added": (arg0: Provider) => void;
            /**
             * The ::provider-removed signal is emmited after a {@link Gtd.Provider}
             * is removed from the list.
             * @signal
             * @run-last
             */
            "provider-removed": (arg0: Provider) => void;
            /**
             * Notifies about errors, and sends the error message for widgets
             * to display.
             * @signal
             * @run-last
             */
            "show-error-message": (arg0: string, arg1: string, arg2: (any | null), arg3: (any | null)) => void;
            /**
             * Sends a notification.
             * @signal
             * @run-last
             */
            "show-notification": (arg0: Notification) => void;
            "notify::clock": (pspec: GObject.ParamSpec) => void;
            "notify::default-provider": (pspec: GObject.ParamSpec) => void;
            "notify::loading": (pspec: GObject.ParamSpec) => void;
            "notify::uid": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            clock: Clock;
            default_provider: Provider;
            defaultProvider: Provider;
        }
    }

    /**
     * @gir-type Class
     */
    class Manager extends Object {
        static $gtype: GObject.GType<Manager>;

        // Properties
        /**
         * @read-only
         */
        get clock(): Clock;

        get default_provider(): Provider;
        set default_provider(val: Provider);

        get defaultProvider(): Provider;
        set defaultProvider(val: Provider);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Manager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Manager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Manager;

        // Signals
        /** @signal */
        connect<K extends keyof Manager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Manager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Manager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Manager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Retrieves the singleton {@link Gtd.Manager} instance. You should always
         * use this function instead of `gtd_manager_new`.
         */
        static get_default(): Manager;

        // Methods
        /**
         * Adds `provider` to the list of providers.
         * @param provider a {@link Gtd.Provider}
         */
        add_provider(provider: Provider): void;

        /**
         * Reports an error.
         * @param title the title of the error
         * @param description detailed description of the error
         * @param _function function to be called when the notification is dismissed
         */
        emit_error_message(title: (string | null), description: (string | null), _function: (ErrorActionFunc | null)): void;

        /**
         * Retrieves the {@link Gio.ListModel} containing `GtdTasks` from
         * `self`. You can use the this model to bind to GtkListBox
         * or other widgets.
         * 
         * The model is sorted.
         * @returns a {@link Gio.ListModel}
         */
        get_all_tasks_model(): Gio.ListModel;

        /**
         * Retrieves the {@link Gtd.Clock} from `self`. You can use the
         * clock to know when your code should be updated.
         * @returns a {@link Gtd.Clock}
         */
        get_clock(): Clock;

        /**
         * Retrieves the default provider location. Default is "local".
         * @returns the default provider.
         */
        get_default_provider(): Provider;

        /**
         * Retrieves the local inbox.
         * @returns a {@link Gtd.TaskList}
         */
        get_inbox(): (TaskList | null);

        /**
         * Retrieves the {@link Gio.ListModel} containing `GtdTaskLists` that are
         * inbox.
         * @returns a {@link Gio.ListModel}
         */
        get_inbox_model(): Gio.ListModel;

        /**
         * Retrieves the 'first-run' setting.
         * @returns `true` if Endeavour was never run before, `false` otherwise.
         */
        get_is_first_run(): boolean;

        /**
         * Retrieves the list of available {@link Gtd.Provider}.
         * @returns a newly allocated {@link GLib.List} of {@link Gtd.Storage}. Free with `g_list_free` after use.
         */
        get_providers(): Provider[];

        /**
         * Retrieves the {@link Gio.ListModel} containing `GtdProviders`.
         * @returns a {@link Gio.ListModel}
         */
        get_providers_model(): Gio.ListModel;

        /**
         * Retrieves the internal {@link Gio.Settings} from `manager`.
         * @returns the internal {@link Gio.Settings} of `manager`
         */
        get_settings(): Gio.Settings;

        /**
         * Retrieves the {@link Gio.ListModel} containing `GtdTaskLists` from
         * `self`. You can use the this model to bind to GtkListBox
         * or other widgets.
         * 
         * The model is sorted.
         * @returns a {@link Gio.ListModel}
         */
        get_task_lists_model(): Gio.ListModel;

        /**
         * Retrieves the {@link Gio.ListModel} containing `GtdTasks` from
         * `self`. You can use the this model to bind to GtkListBox
         * or other widgets.
         * 
         * The model returned by this function is filtered to only
         * contain tasks from unarchived lists. If you need all tasks,
         * see `gtd_manager_get_all_tasks_model()`.
         * 
         * The model is sorted.
         * @returns a {@link Gio.ListModel}
         */
        get_tasks_model(): Gio.ListModel;

        /**
         * Removes `provider` from the list of providers.
         * @param provider a {@link Gtd.Provider}
         */
        remove_provider(provider: Provider): void;

        /**
         * Sends a notification to the notification system.
         * @param notification a {@link Gtd.Notification}
         */
        send_notification(notification: Notification): void;

        /**
         * Sets the provider.
         * @param provider the default provider.
         */
        set_default_provider(provider: (Provider | null)): void;

        /**
         * Sets the 'first-run' setting.
         * @param is_first_run `true` to make it first run, `false` otherwise.
         */
        set_is_first_run(is_first_run: boolean): void;
    }


    namespace MaxSizeLayout {
        // Signal signatures
        interface SignalSignatures extends Gtk.LayoutManager.SignalSignatures {
            "notify::max-height": (pspec: GObject.ParamSpec) => void;
            "notify::max-width": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.LayoutManager.ConstructorProps {
            max_height: number;
            maxHeight: number;
            max_width: number;
            maxWidth: number;
            max_width_chars: number;
            maxWidthChars: number;
            width_chars: number;
            widthChars: number;
        }
    }

    /**
     * @gir-type Class
     */
    class MaxSizeLayout extends Gtk.LayoutManager {
        static $gtype: GObject.GType<MaxSizeLayout>;

        // Properties
        /**
         * Sets the maximum height of the {@link Gtk.Widget}.
         * @default -1
         */
        get max_height(): number;
        set max_height(val: number);

        /**
         * Sets the maximum height of the {@link Gtk.Widget}.
         * @default -1
         */
        get maxHeight(): number;
        set maxHeight(val: number);

        /**
         * Sets the maximum width of the {@link Gtk.Widget}.
         * @default -1
         */
        get max_width(): number;
        set max_width(val: number);

        /**
         * Sets the maximum width of the {@link Gtk.Widget}.
         * @default -1
         */
        get maxWidth(): number;
        set maxWidth(val: number);

        /**
         * Sets the maximum size of the {@link Gtk.Widget} in characters.
         * @default -1
         */
        get max_width_chars(): number;
        set max_width_chars(val: number);

        /**
         * Sets the maximum size of the {@link Gtk.Widget} in characters.
         * @default -1
         */
        get maxWidthChars(): number;
        set maxWidthChars(val: number);

        /**
         * Sets the size of the {@link Gtk.Widget} in characters.
         * @default -1
         */
        get width_chars(): number;
        set width_chars(val: number);

        /**
         * Sets the size of the {@link Gtk.Widget} in characters.
         * @default -1
         */
        get widthChars(): number;
        set widthChars(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MaxSizeLayout.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MaxSizeLayout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MaxSizeLayout;

        // Signals
        /** @signal */
        connect<K extends keyof MaxSizeLayout.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MaxSizeLayout.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MaxSizeLayout.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MaxSizeLayout.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MaxSizeLayout.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MaxSizeLayout.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves the maximum height of `self`.
         * @returns maximum height
         */
        get_max_height(): number;

        /**
         * Retrieves the maximum width of `self`.
         * @returns maximum width
         */
        get_max_width(): number;

        /**
         * Retrieves the maximum width in characters of `self`.
         * @returns maximum width in characters
         */
        get_max_width_chars(): number;

        /**
         * Retrieves the minimum width in characters of `self`.
         * @returns minimum width in characters
         */
        get_width_chars(): number;

        /**
         * Sets the maximum height `self` has.
         * @param max_height maximum height of the widget `self` is attached to
         */
        set_max_height(max_height: number): void;

        /**
         * Sets the maximum width `self` has.
         * @param max_width maximum width of the widget `self` is attached to
         */
        set_max_width(max_width: number): void;

        /**
         * Sets the maximum width `self` has, in characters length. It is a programming
         * error to set a value smaller than {@link Gtd.MaxSizeLayout.width_layout}.
         * @param max_width_chars maximum width of the widget `self` is attached to, in character length
         */
        set_max_width_chars(max_width_chars: number): void;

        /**
         * Sets the minimum width `self` has, in characters length. It is a programming
         * error to set a value bigger than {@link Gtd.MaxSizeLayout.max_width_layout}.
         * @param width_chars minimum width of the widget `self` is attached to, in character length
         */
        set_width_chars(width_chars: number): void;
    }


    namespace MenuButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::align-widget": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::gicon": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::menu-model": (pspec: GObject.ParamSpec) => void;
            "notify::popover": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            align_widget: (Gtk.Widget | null);
            alignWidget: (Gtk.Widget | null);
            direction: Gtk.ArrowType;
            gicon: Gio.Icon;
            has_frame: boolean;
            hasFrame: boolean;
            label: string;
            menu_model: (Gio.MenuModel | null);
            menuModel: (Gio.MenuModel | null);
            popover: (Gtk.Popover | null);
            use_underline: boolean;
            useUnderline: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class MenuButton extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<MenuButton>;

        // Properties
        /**
         * The {@link Gtk.Widget} to use to align the menu with.
         */
        get align_widget(): (Gtk.Widget | null);
        set align_widget(val: (Gtk.Widget | null));

        /**
         * The {@link Gtk.Widget} to use to align the menu with.
         */
        get alignWidget(): (Gtk.Widget | null);
        set alignWidget(val: (Gtk.Widget | null));

        /**
         * The {@link Gtk.ArrowType} representing the direction in which the
         * menu or popover will be popped out.
         * @default Gtk.ArrowType.DOWN
         */
        get direction(): Gtk.ArrowType;
        set direction(val: Gtk.ArrowType);

        get gicon(): Gio.Icon;
        set gicon(val: Gio.Icon);

        /**
         * @default true
         */
        get has_frame(): boolean;
        set has_frame(val: boolean);

        /**
         * @default true
         */
        get hasFrame(): boolean;
        set hasFrame(val: boolean);

        /**
         * @default null
         */
        get label(): string;
        set label(val: string);

        /**
         * The {@link Gio.MenuModel} from which the popup will be created.
         * 
         * See `gtd_menu_button_set_menu_model()` for the interaction with the
         * {@link Gtd.MenuButton.popup} property.
         */
        get menu_model(): (Gio.MenuModel | null);
        set menu_model(val: (Gio.MenuModel | null));

        /**
         * The {@link Gio.MenuModel} from which the popup will be created.
         * 
         * See `gtd_menu_button_set_menu_model()` for the interaction with the
         * {@link Gtd.MenuButton.popup} property.
         */
        get menuModel(): (Gio.MenuModel | null);
        set menuModel(val: (Gio.MenuModel | null));

        /**
         * The {@link Gtk.Popover} that will be popped up when the button is clicked.
         */
        get popover(): (Gtk.Popover | null);
        set popover(val: (Gtk.Popover | null));

        /**
         * @default false
         */
        get use_underline(): boolean;
        set use_underline(val: boolean);

        /**
         * @default false
         */
        get useUnderline(): boolean;
        set useUnderline(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MenuButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MenuButton;

        // Signals
        /** @signal */
        connect<K extends keyof MenuButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MenuButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MenuButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MenuButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the parent {@link Gtk.Widget} to use to line up with menu.
         * @returns a {@link Gtk.Widget} value or `null`
         */
        get_align_widget(): (Gtk.Widget | null);

        /**
         * Returns the direction the popup will be pointing at when popped up.
         * @returns a {@link Gtk.ArrowType} value
         */
        get_direction(): Gtk.ArrowType;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.get_direction
        get_direction(...args: never[]): any;

        /**
         * Gets the name of the icon shown in the button.
         * @returns the name of the icon shown in the button
         */
        get_gicon(): Gio.Icon;

        /**
         * Returns whether the button has a frame.
         * @returns `true` if the button has a frame
         */
        get_has_frame(): boolean;

        /**
         * Gets the label shown in the button
         * @returns the label shown in the button
         */
        get_label(): string;

        /**
         * Returns the {@link Gio.MenuModel} used to generate the popup.
         * @returns a {@link Gio.MenuModel} or `null`
         */
        get_menu_model(): (Gio.MenuModel | null);

        /**
         * Returns the {@link Gtk.Popover} that pops out of the button.
         * If the button is not using a {@link Gtk.Popover}, this function
         * returns `null`.
         * @returns a {@link Gtk.Popover} or `null`
         */
        get_popover(): (Gtk.Popover | null);

        /**
         * Returns whether an embedded underline in the text indicates a
         * mnemonic. See `gtd_menu_button_set_use_underline()`.
         * @returns `true` whether an embedded underline in the text indicates     the mnemonic accelerator keys.
         */
        get_use_underline(): boolean;

        /**
         * Dismiss the menu.
         */
        popdown(): void;

        /**
         * Pop up the menu.
         */
        popup(): void;

        /**
         * Sets the {@link Gtk.Widget} to use to line the menu with when popped up.
         * Note that the `align_widget` must contain the {@link Gtd.MenuButton} itself.
         * 
         * Setting it to `null` means that the menu will be aligned with the
         * button itself.
         * 
         * Note that this property is only used with menus currently,
         * and not for popovers.
         * @param align_widget a {@link Gtk.Widget}
         */
        set_align_widget(align_widget: (Gtk.Widget | null)): void;

        /**
         * Sets `func` to be called when a popup is about to be shown.
         * `func` should use one of
         * 
         *  - `gtd_menu_button_set_popover()`
         *  - `gtd_menu_button_set_menu_model()`
         * 
         * to set a popup for `menu_button`.
         * If `func` is non-`null`, `menu_button` will always be sensitive.
         * 
         * Using this function will not reset the menu widget attached to `menu_button`.
         * Instead, this can be done manually in `func`.
         * @param func function to call when a popuop is about to   be shown, but none has been provided via other means, or `null`   to reset to default behavior.
         * @param destroy_notify destroy notify for `user_data`
         */
        set_create_popup_func(func: (MenuButtonCreatePopupFunc | null), destroy_notify: (GLib.DestroyNotify | null)): void;

        /**
         * Sets the direction in which the popup will be popped up, as
         * well as changing the arrow’s direction. The child will not
         * be changed to an arrow if it was customized.
         * 
         * If the does not fit in the available space in the given direction,
         * GTK+ will its best to keep it inside the screen and fully visible.
         * 
         * If you pass {@link Gtk.ArrowType.NONE} for a `direction`, the popup will behave
         * as if you passed {@link Gtk.ArrowType.DOWN} (although you won’t see any arrows).
         * @param direction a {@link Gtk.ArrowType}
         */
        set_direction(direction: Gtk.ArrowType): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.set_direction
        set_direction(...args: never[]): any;

        /**
         * @param icon 
         */
        set_gicon(icon: Gio.Icon): void;

        /**
         * Sets the style of the button.
         * @param has_frame whether the button should have a visible frame
         */
        set_has_frame(has_frame: boolean): void;

        /**
         * Sets the label to show inside the menu button.
         * @param label the label
         */
        set_label(label: string): void;

        /**
         * Sets the {@link Gio.MenuModel} from which the popup will be constructed,
         * or `null` to dissociate any existing menu model and disable the button.
         * 
         * A {@link Gtk.Popover} will be created from the menu model with `gtk_popover_menu_new_from_model()`.
         * Actions will be connected as documented for this function.
         * 
         * If {@link Gtd.MenuButton.popover} is already set, it will be dissociated from the `menu_button`,
         * and the property is set to `null`.
         * @param menu_model a {@link Gio.MenuModel}, or `null` to unset and disable the   button
         */
        set_menu_model(menu_model: (Gio.MenuModel | null)): void;

        /**
         * Sets the {@link Gtk.Popover} that will be popped up when the `menu_button` is clicked,
         * or `null` to dissociate any existing popover and disable the button.
         * 
         * If {@link Gtd.MenuButton.menu_model} is set, the menu model is dissociated from the
         * `menu_button`, and the property is set to `null`.
         * @param popover a {@link Gtk.Popover}, or `null` to unset and disable the button
         */
        set_popover(popover: (Gtk.Widget | null)): void;

        /**
         * If true, an underline in the text indicates the next character should be
         * used for the mnemonic accelerator key.
         * @param use_underline `true` if underlines in the text indicate mnemonics
         */
        set_use_underline(use_underline: boolean): void;

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, any];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace Notification {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * The ::executed signal is emitted after the primary or secondary
             * {@link Gtd.Notification} action is executed.
             * @signal
             * @run-first
             */
            executed: () => void;
            "notify::has-dismissal-action": (pspec: GObject.ParamSpec) => void;
            "notify::has-secondary-action": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-action-name": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::loading": (pspec: GObject.ParamSpec) => void;
            "notify::uid": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            has_dismissal_action: boolean;
            hasDismissalAction: boolean;
            has_secondary_action: boolean;
            hasSecondaryAction: boolean;
            secondary_action_name: string;
            secondaryActionName: string;
            text: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Notification extends Object {
        static $gtype: GObject.GType<Notification>;

        // Properties
        /**
         * @read-only
         * @default false
         */
        get has_dismissal_action(): boolean;

        /**
         * @read-only
         * @default false
         */
        get hasDismissalAction(): boolean;

        /**
         * @read-only
         * @default false
         */
        get has_secondary_action(): boolean;

        /**
         * @read-only
         * @default false
         */
        get hasSecondaryAction(): boolean;

        get secondary_action_name(): string;
        set secondary_action_name(val: string);

        get secondaryActionName(): string;
        set secondaryActionName(val: string);

        get text(): string;
        set text(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Notification.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Notification.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](text: (string | null)): Notification;

        // Conflicted with Gtd.Object.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Notification.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notification.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Notification.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notification.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Notification.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Notification.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Executes the dismissal action of `notification` if any.
         */
        execute_dismissal_action(): void;

        /**
         * Executes the secondary action of `notification` if any.
         */
        execute_secondary_action(): void;

        /**
         * Gets the text of `notification`.
         * @returns the text of `notification`.
         */
        get_text(): string;

        /**
         * Sets the dismissal action of `notification`
         * @param func the dismissal action function
         */
        set_dismissal_action(func: (NotificationActionFunc | null)): void;

        /**
         * Sets the secondary action of `notification`, which is triggered
         * only on user explicit input.
         * @param name the name of the secondary action
         * @param func the secondary action function
         */
        set_secondary_action(name: string, func: (NotificationActionFunc | null)): void;

        /**
         * Sets the text of `notification` to `text`.
         * @param text the user-visible text of `notification`
         */
        set_text(text: string): void;
    }


    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::loading": (pspec: GObject.ParamSpec) => void;
            "notify::uid": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            loading: boolean;
            uid: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;

        // Properties
        /**
         * @read-only
         * @default true
         */
        get loading(): boolean;

        /**
         * @default null
         */
        get uid(): string;
        set uid(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Object.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](uid: string): Object;

        // Signals
        /** @signal */
        connect<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Object.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Retrieves the internal unique identifier of `object`.
         * @virtual
         */
        vfunc_get_uid(): string;

        /**
         * Sets the unique identifier of `object` to `uid`. Only
         * a `GtdBackend` should do it.
         * @param uid the unique identifier of `object`
         * @virtual
         */
        vfunc_set_uid(uid: string): void;

        // Methods
        /**
         * Whether `object` is loading or not.
         * @returns `true` if `object` is loading, `false` otherwise.
         */
        get_loading(): boolean;

        /**
         * Retrieves the internal unique identifier of `object`.
         * @returns the unique identifier of `object`. Do not free after usage.
         */
        get_uid(): string;

        /**
         * Decreases the loading counter of `object` by one. The object is marked
         * as loading while the loading counter is greater than zero.
         * 
         * It is a programming error to pop more times then push the loading the
         * counter.
         */
        pop_loading(): void;

        /**
         * Increases the loading counter of `object` by one. The object is marked
         * as loading while the loading counter is greater than zero.
         */
        push_loading(): void;

        /**
         * Sets the unique identifier of `object` to `uid`. Only
         * a `GtdBackend` should do it.
         * @param uid the unique identifier of `object`
         */
        set_uid(uid: string): void;
    }


    namespace OmniArea {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            "notify::pivot-point": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-x": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-y": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-z": (pspec: GObject.ParamSpec) => void;
            "notify::scale-x": (pspec: GObject.ParamSpec) => void;
            "notify::scale-y": (pspec: GObject.ParamSpec) => void;
            "notify::scale-z": (pspec: GObject.ParamSpec) => void;
            "notify::translation-x": (pspec: GObject.ParamSpec) => void;
            "notify::translation-y": (pspec: GObject.ParamSpec) => void;
            "notify::translation-z": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class OmniArea extends Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<OmniArea>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OmniArea.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<OmniArea.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof OmniArea.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OmniArea.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof OmniArea.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OmniArea.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof OmniArea.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OmniArea.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Pushes a new message to `self`.
         * @param id an identifier for this notification
         * @param text user visible text of the notification
         * @param icon a {@link Gio.Icon}
         */
        push_message(id: string, text: string, icon: (Gio.Icon | null)): void;

        /**
         * Withdraws a message from `self`. If a message with `id` doesn't
         * exist, nothing happens.
         * @param id an identifier for this notification
         */
        withdraw_message(id: string): void;
    }


    namespace ProviderPopover {
        // Signal signatures
        interface SignalSignatures extends Gtk.Popover.SignalSignatures {
            "notify::autohide": (pspec: GObject.ParamSpec) => void;
            "notify::cascade-popdown": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::default-widget": (pspec: GObject.ParamSpec) => void;
            "notify::has-arrow": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::pointing-to": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Popover.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Native.ConstructorProps, Gtk.ShortcutManager.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class ProviderPopover extends Gtk.Popover implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.ShortcutManager {
        static $gtype: GObject.GType<ProviderPopover>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProviderPopover.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ProviderPopover.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ProviderPopover;

        // Signals
        /** @signal */
        connect<K extends keyof ProviderPopover.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProviderPopover.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ProviderPopover.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProviderPopover.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ProviderPopover.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProviderPopover.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Returns the renderer that is used for this {@link Gtk.Native}.
         * @returns the renderer for `self`
         */
        get_renderer(): (Gsk.Renderer | null);

        /**
         * Returns the surface of this {@link Gtk.Native}.
         * @returns the surface of `self`
         */
        get_surface(): (Gdk.Surface | null);

        /**
         * Retrieves the surface transform of `self`.
         * 
         * This is the translation from `self`'s surface coordinates into
         * `self`'s widget coordinates.
         */
        get_surface_transform(): [number, number];

        /**
         * Realizes a {@link Gtk.Native}.
         * 
         * This should only be used by subclasses.
         */
        realize(): void;

        /**
         * Unrealizes a {@link Gtk.Native}.
         * 
         * This should only be used by subclasses.
         */
        unrealize(): void;

        /**
         * Add a {@link Gtk.ShortcutController} to be managed.
         * @param controller 
         * @virtual
         */
        vfunc_add_controller(controller: Gtk.ShortcutController): void;

        /**
         * Remove a {@link Gtk.ShortcutController} that had previously
         *   been added
         * @param controller 
         * @virtual
         */
        vfunc_remove_controller(controller: Gtk.ShortcutController): void;
    }


    namespace StarWidget {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::pivot-point": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-x": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-y": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-z": (pspec: GObject.ParamSpec) => void;
            "notify::scale-x": (pspec: GObject.ParamSpec) => void;
            "notify::scale-y": (pspec: GObject.ParamSpec) => void;
            "notify::scale-z": (pspec: GObject.ParamSpec) => void;
            "notify::translation-x": (pspec: GObject.ParamSpec) => void;
            "notify::translation-y": (pspec: GObject.ParamSpec) => void;
            "notify::translation-z": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            active: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class StarWidget extends Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<StarWidget>;

        // Properties
        /**
         * Whether the star widget is active or not. When active, the
         * star appears filled.
         * @default false
         */
        get active(): boolean;
        set active(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StarWidget.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StarWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): StarWidget;

        // Signals
        /** @signal */
        connect<K extends keyof StarWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StarWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StarWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StarWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StarWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StarWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_active(): boolean;

        /**
         * @param active 
         */
        set_active(active: boolean): void;
    }


    namespace Task {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::complete": (pspec: GObject.ParamSpec) => void;
            "notify::creation-date": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::due-date": (pspec: GObject.ParamSpec) => void;
            "notify::important": (pspec: GObject.ParamSpec) => void;
            "notify::list": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::loading": (pspec: GObject.ParamSpec) => void;
            "notify::uid": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            complete: boolean;
            creation_date: GLib.DateTime;
            creationDate: GLib.DateTime;
            description: string;
            due_date: (GLib.DateTime | null);
            dueDate: (GLib.DateTime | null);
            important: boolean;
            list: TaskList;
            position: (bigint | number);
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Task extends Object {
        static $gtype: GObject.GType<Task>;

        // Properties
        /**
         * @default false
         */
        get complete(): boolean;
        set complete(val: boolean);

        get creation_date(): GLib.DateTime;
        set creation_date(val: GLib.DateTime);

        get creationDate(): GLib.DateTime;
        set creationDate(val: GLib.DateTime);

        /**
         * @default null
         */
        get description(): string;
        set description(val: string);

        get due_date(): (GLib.DateTime | null);
        set due_date(val: (GLib.DateTime | null));

        get dueDate(): (GLib.DateTime | null);
        set dueDate(val: (GLib.DateTime | null));

        /**
         * @default false
         */
        get important(): boolean;
        set important(val: boolean);

        get list(): TaskList;
        set list(val: TaskList);

        /**
         * @default 0
         */
        get position(): number;
        set position(val: (bigint | number));

        /**
         * @default null
         */
        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Task.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Task.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Task;

        // Signals
        /** @signal */
        connect<K extends keyof Task.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Task.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Task.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Task.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Task.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Task.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Retrieves whether the task is complete or not.
         * @virtual
         */
        vfunc_get_complete(): boolean;

        /**
         * Returns the {@link GLib.DateTime} that represents the task's completion date.
         * Returns `null` if no date is set.
         * @virtual
         */
        vfunc_get_completion_date(): (GLib.DateTime | null);

        /**
         * Returns the {@link GLib.DateTime} that represents the task's creation date.
         * The value is referenced for thread safety. Returns `null` if
         * no date is set.
         * @virtual
         */
        vfunc_get_creation_date(): GLib.DateTime;

        /**
         * Retrieves the description of the task.
         * @virtual
         */
        vfunc_get_description(): string;

        /**
         * Returns the {@link GLib.DateTime} that represents the task's due date.
         * The value is referenced for thread safety. Returns `null` if
         * no date is set.
         * @virtual
         */
        vfunc_get_due_date(): (GLib.DateTime | null);

        /**
         * Retrieves whether `self` is `important` or not.
         * @virtual
         */
        vfunc_get_important(): boolean;

        /**
         * Returns the position of `task` inside the parent {@link Gtd.TaskList},
         * or -1 if not set.
         * @virtual
         */
        vfunc_get_position(): (bigint | number);

        /**
         * Retrieves the title of the task, or `null`.
         * @virtual
         */
        vfunc_get_title(): string;

        /**
         * Updates the complete state of `task`.
         * @param complete the new value
         * @virtual
         */
        vfunc_set_complete(complete: boolean): void;

        /**
         * @param dt 
         * @virtual
         */
        vfunc_set_completion_date(dt: GLib.DateTime): void;

        /**
         * Sets the creation date of `task`.
         * @param dt 
         * @virtual
         */
        vfunc_set_creation_date(dt: GLib.DateTime): void;

        /**
         * Updates the description of `task`. The string is not stripped off of
         * spaces to preserve user data.
         * @param description the new description, or `null`
         * @virtual
         */
        vfunc_set_description(description: (string | null)): void;

        /**
         * Updates the internal `GtdTask`::due-date property.
         * @param dt a {@link GLib.DateTime}
         * @virtual
         */
        vfunc_set_due_date(dt: (GLib.DateTime | null)): void;

        /**
         * Sets whether `self` is `important` or not.
         * @param important whether `self` is important or not
         * @virtual
         */
        vfunc_set_important(important: boolean): void;

        /**
         * Sets the `task` position inside the parent {@link Gtd.TaskList}. It
         * is up to the interface to handle two or more {@link Gtd.Task} with
         * the same position value.
         * @param position the priority of `task`, or -1
         * @virtual
         */
        vfunc_set_position(position: number): void;

        /**
         * Updates the title of `task`. The string is stripped off of
         * leading spaces.
         * @param title the new title, or `null`
         * @virtual
         */
        vfunc_set_title(title: (string | null)): void;

        // Methods
        /**
         * Compare `t1` and `t2`.
         * @param t2 a {@link Gtd.Task}
         * @returns %-1 if `t1` comes before `t2`, %1 for the opposite, %0 if they're equal
         */
        compare(t2: (Task | null)): number;

        /**
         * Retrieves whether the task is complete or not.
         * @returns `true` if the task is complete, `false` otherwise
         */
        get_complete(): boolean;

        /**
         * Returns the {@link GLib.DateTime} that represents the task's completion date.
         * Returns `null` if no date is set.
         * @returns the internal {@link GLib.DateTime} or `null`. Unreference it after use.
         */
        get_completion_date(): (GLib.DateTime | null);

        /**
         * Returns the {@link GLib.DateTime} that represents the task's creation date.
         * The value is referenced for thread safety. Returns `null` if
         * no date is set.
         * @returns the internal {@link GLib.DateTime} referenced for thread safety, or `null`. Unreference it after use.
         */
        get_creation_date(): GLib.DateTime;

        /**
         * Retrieves the description of the task.
         * @returns the description of `task`
         */
        get_description(): string;

        /**
         * Returns the {@link GLib.DateTime} that represents the task's due date.
         * The value is referenced for thread safety. Returns `null` if
         * no date is set.
         * @returns the internal {@link GLib.DateTime} referenced for thread safety, or `null`. Unreference it after use.
         */
        get_due_date(): (GLib.DateTime | null);

        /**
         * Retrieves whether `self` is `important` or not.
         * @returns `true` if `self` is important, `false` otherwise
         */
        get_important(): boolean;

        /**
         * Returns a weak reference to the {@link Gtd.TaskList} that
         * owns the given `task`.
         * @returns a weak reference to the {@link Gtd.TaskList} that owns `task`. Do not free after usage.
         */
        get_list(): TaskList;

        /**
         * Returns the position of `task` inside the parent {@link Gtd.TaskList},
         * or -1 if not set.
         * @returns the position of the task, or -1
         */
        get_position(): number;

        /**
         * Utility function to retrieve the data provider that backs this
         * task. Notice that this is exactly the same as writing:
         * 
         * 
         * ```c
         * GtdTaskList *list;
         * GtdProvider *provider;
         * 
         * list = gtd_task_get_list (task);
         * provider = gtd_task_list_get_provider (list);
         * ```
         * 
         * @returns the {@link Gtd.Provider} of this task's list.
         */
        get_provider(): (Provider | null);

        /**
         * Retrieves the title of the task, or `null`.
         * @returns the title of `task`, or `null`
         */
        get_title(): string;

        /**
         * Updates the complete state of `task`.
         * @param complete the new value
         */
        set_complete(complete: boolean): void;

        /**
         * Sets the creation date of `task`.
         * @param dt 
         */
        set_creation_date(dt: GLib.DateTime): void;

        /**
         * Updates the description of `task`. The string is not stripped off of
         * spaces to preserve user data.
         * @param description the new description, or `null`
         */
        set_description(description: (string | null)): void;

        /**
         * Updates the internal `GtdTask`::due-date property.
         * @param dt a {@link GLib.DateTime}
         */
        set_due_date(dt: (GLib.DateTime | null)): void;

        /**
         * Sets whether `self` is `important` or not.
         * @param important whether `self` is important or not
         */
        set_important(important: boolean): void;

        /**
         * Sets the parent {@link Gtd.TaskList} of `task`.
         * @param list a {@link Gtd.TaskList}
         */
        set_list(list: (TaskList | null)): void;

        /**
         * Sets the `task` position inside the parent {@link Gtd.TaskList}. It
         * is up to the interface to handle two or more {@link Gtd.Task} with
         * the same position value.
         * @param position the priority of `task`, or -1
         */
        set_position(position: (bigint | number)): void;

        /**
         * Updates the title of `task`. The string is stripped off of
         * leading spaces.
         * @param title the new title, or `null`
         */
        set_title(title: (string | null)): void;
    }


    namespace TaskList {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * The ::task-added signal is emitted after a {@link Gtd.Task}
             * is added to the list.
             * @signal
             * @run-last
             */
            "task-added": (arg0: Task) => void;
            /**
             * The ::task-removed signal is emitted after a {@link Gtd.Task}
             * is removed from the list.
             * @signal
             * @run-last
             */
            "task-removed": (arg0: Task) => void;
            /**
             * The ::task-updated signal is emitted after a {@link Gtd.Task}
             * in the list is updated.
             * @signal
             * @run-last
             */
            "task-updated": (arg0: Task) => void;
            "notify::archived": (pspec: GObject.ParamSpec) => void;
            "notify::color": (pspec: GObject.ParamSpec) => void;
            "notify::is-removable": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::provider": (pspec: GObject.ParamSpec) => void;
            "notify::loading": (pspec: GObject.ParamSpec) => void;
            "notify::uid": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            archived: boolean;
            color: Gdk.RGBA;
            is_removable: boolean;
            isRemovable: boolean;
            name: string;
            provider: Provider;
        }
    }

    /**
     * @gir-type Class
     */
    class TaskList<A extends GObject.Object = GObject.Object> extends Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<TaskList>;

        // Properties
        /**
         * @default false
         */
        get archived(): boolean;
        set archived(val: boolean);

        get color(): Gdk.RGBA;
        set color(val: Gdk.RGBA);

        /**
         * @default false
         */
        get is_removable(): boolean;
        set is_removable(val: boolean);

        /**
         * @default false
         */
        get isRemovable(): boolean;
        set isRemovable(val: boolean);

        /**
         * @default null
         */
        get name(): string;
        set name(val: string);

        get provider(): Provider;
        set provider(val: Provider);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TaskList.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TaskList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](provider: (Provider | null)): TaskList;

        // Conflicted with Gtd.Object.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof TaskList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TaskList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TaskList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TaskList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TaskList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TaskList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Retrieves whether `self` is archived or not. Archived task lists
         * are hidden by default, and new tasks cannot be added.
         * @virtual
         */
        vfunc_get_archived(): boolean;

        /**
         * Sets the "archive" property of `self` to `archived`.
         * @param archived whether `self` is archived or not
         * @virtual
         */
        vfunc_set_archived(archived: boolean): void;

        /**
         * @param task 
         * @virtual
         */
        vfunc_task_added(task: Task): void;

        /**
         * @param task 
         * @virtual
         */
        vfunc_task_removed(task: Task): void;

        /**
         * @param task 
         * @virtual
         */
        vfunc_task_updated(task: Task): void;

        // Methods
        /**
         * Adds `task` to `list`.
         * @param task a {@link Gtd.Task}
         */
        add_task(task: Task): void;

        /**
         * Checks if `task` is inside `list`.
         * @param task a {@link Gtd.Task}
         * @returns `true` if `list` contains `task`, `false` otherwise
         */
        contains(task: Task): boolean;

        /**
         * Retrieves whether `self` is archived or not. Archived task lists
         * are hidden by default, and new tasks cannot be added.
         * @returns `true` if `self` is archived, `false` otherwise.
         */
        get_archived(): boolean;

        /**
         * Retrieves the color of %list. It is guarantee that it always returns a
         * color, given a valid {@link Gtd.TaskList}.
         * @returns the color of %list. Free with %gdk_rgba_free after use.
         */
        get_color(): Gdk.RGBA;

        /**
         * Retrieves the user-visible name of `list`, or `null`.
         * @returns the internal name of `list`. Do not free after use.
         */
        get_name(): string;

        /**
         * Retrieves the {@link Gtd.Provider} who owns this list.
         * @returns a {@link Gtd.Provider}
         */
        get_provider(): Provider;

        /**
         * Retrieves a task from `self` with the given `id`.
         * @param id the id of the task
         * @returns a {@link Gtd.Task}, or `null`
         */
        get_task_by_id(id: string): (Task | null);

        /**
         * Imports task into `self`
         * @param task a {@link Gtd.Task}
         * @param cancellable 
         */
        import_task(task: Task, cancellable: (Gio.Cancellable | null)): globalThis.Promise<Gio.Task>;

        /**
         * Imports task into `self`
         * @param task a {@link Gtd.Task}
         * @param cancellable 
         * @param callback 
         */
        import_task(task: Task, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Imports task into `self`
         * @param task a {@link Gtd.Task}
         * @param cancellable 
         * @param callback 
         */
        import_task(task: Task, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Gio.Task> | void);

        /**
         * Imports task into `self`
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link Gio.Task}
         */
        import_task_finish(result: Gio.AsyncResult): Gio.Task;

        /**
         * Retrieves whether `self` is the inbox task list of its provider.
         * @returns `true` if `self` is the inbox of it's provider, `false` otherwise.
         */
        is_inbox(): boolean;

        /**
         * Moves `task` to `new_position`, and repositions the elements
         * in between as well.
         * 
         * `task` must belong to `self`.
         * @param task a {@link Gtd.Task}
         * @param new_position the new position of `task` inside `self`
         */
        move_task_to_position(task: Task, new_position: number): void;

        /**
         * Removes `task` from `list` if it's inside the list.
         * @param task a {@link Gtd.Task}
         */
        remove_task(task: Task): void;

        /**
         * Sets the "archive" property of `self` to `archived`.
         * @param archived whether `self` is archived or not
         */
        set_archived(archived: boolean): void;

        /**
         * sets the color of `list`.
         * @param color 
         */
        set_color(color: Gdk.RGBA): void;

        /**
         * Sets whether `list` can be deleted or not.
         * @param is_removable `true` if `list` can be deleted, `false` otherwise
         */
        set_is_removable(is_removable: boolean): void;

        /**
         * Sets the `list` name to `name`.
         * @param name the name of `list`
         */
        set_name(name: (string | null)): void;

        /**
         * Sets the provider of this tasklist.
         * @param provider a {@link Gtd.Provider}, or `null`
         */
        set_provider(provider: (Provider | null)): void;

        /**
         * Updates `task` at `list`.
         * @param task a {@link Gtd.Task}
         */
        update_task(task: Task): void;

        /**
         * Gets the type of the items in `list`.
         * 
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         * 
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;

        /**
         * Get the item at `position`.
         * 
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         * 
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         * 
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         * 
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): (A | null);

        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         * 
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         * 
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         * 
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;

        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         * 
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         * 
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): (A | null);

        /**
         * Gets the type of the items in `list`.
         * 
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         * 
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
         */
        vfunc_get_n_items(): number;
    }


    namespace TaskListView {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::show-due-date": (pspec: GObject.ParamSpec) => void;
            "notify::show-list-name": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-child": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {
            show_due_date: boolean;
            showDueDate: boolean;
            show_list_name: boolean;
            showListName: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class TaskListView extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<TaskListView>;

        // Properties
        /**
         * @default true
         */
        get show_due_date(): boolean;
        set show_due_date(val: boolean);

        /**
         * @default true
         */
        get showDueDate(): boolean;
        set showDueDate(val: boolean);

        /**
         * @default false
         */
        get show_list_name(): boolean;
        set show_list_name(val: boolean);

        /**
         * @default false
         */
        get showListName(): boolean;
        set showListName(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TaskListView.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TaskListView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): TaskListView;

        // Signals
        /** @signal */
        connect<K extends keyof TaskListView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TaskListView.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TaskListView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TaskListView.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TaskListView.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TaskListView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves the current default date which new tasks are set to.
         * @returns a {@link GLib.DateTime}, or `null`
         */
        get_default_date(): (GLib.DateTime | null);

        /**
         * Retrieves the {@link Gtd.TaskList} from `view`, or `null` if none was set.
         * @returns the {@link Gio.ListModel} of `view`, or `null` is none was set.
         */
        get_model(): Gio.ListModel;

        /**
         * Retrieves whether the `self` is showing the due dates of the tasks
         * or not.
         * @returns `true` if due dates are visible, `false` otherwise.
         */
        get_show_due_date(): boolean;

        /**
         * Whether `view` shows the tasks' list names.
         * @returns `true` if `view` show the tasks' list names, `false` otherwise
         */
        get_show_list_name(): boolean;

        /**
         * Sets the current default date.
         * @param default_date the default_date, or `null`
         */
        set_default_date(default_date: (GLib.DateTime | null)): void;

        /**
         * Sets `func` as the header function of `view`. You can safely call
         * %gtk_list_box_row_set_header from within `func`.
         * 
         * Do not unref nor free any of the passed data.
         * @param func the header function
         */
        set_header_func(func: (TaskListViewHeaderFunc | null)): void;

        /**
         * Sets the internal {@link Gio.ListModel} of `view`. The model must have
         * its element GType as `GtdTask`.
         * @param model a {@link Gio.ListModel}
         */
        set_model(model: Gio.ListModel): void;

        /**
         * Sets whether `self` shows the due dates of the tasks or not.
         * @param show_due_date `true` to show due dates, `false` otherwise
         */
        set_show_due_date(show_due_date: boolean): void;

        /**
         * Whether `view` should should it's tasks' list name.
         * @param show_list_name `true` to show list names, `false` to hide it
         */
        set_show_list_name(show_list_name: boolean): void;

        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace Widget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transitions-completed signal is emitted once all transitions
             * involving `actor` are complete.
             * @signal
             * @since 1.10
             * @run-last
             */
            "transitions-completed": () => void;
            "notify::pivot-point": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-x": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-y": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-z": (pspec: GObject.ParamSpec) => void;
            "notify::scale-x": (pspec: GObject.ParamSpec) => void;
            "notify::scale-y": (pspec: GObject.ParamSpec) => void;
            "notify::scale-z": (pspec: GObject.ParamSpec) => void;
            "notify::translation-x": (pspec: GObject.ParamSpec) => void;
            "notify::translation-y": (pspec: GObject.ParamSpec) => void;
            "notify::translation-z": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::pivot-point": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::rotation-x": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::rotation-y": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::rotation-z": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::scale-x": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::scale-y": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::scale-z": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::translation-x": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::translation-y": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::translation-z": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::can-focus": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::can-target": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::css-classes": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::css-name": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::cursor": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::focus-on-click": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::focusable": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::halign": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::has-default": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::has-focus": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::has-tooltip": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::height-request": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::hexpand": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::hexpand-set": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::layout-manager": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::limit-events": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::margin-bottom": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::margin-end": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::margin-start": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::margin-top": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::name": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::opacity": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::overflow": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::parent": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::receives-default": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::root": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::scale-factor": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::sensitive": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::tooltip-markup": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::tooltip-text": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::valign": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::vexpand": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::vexpand-set": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::visible": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::width-request": (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             * @detailed
             * @run-last
             */
            "transition-stopped::accessible-role": (arg0: string, arg1: boolean) => void;
            [key: `transition-stopped::${string}`]: (arg0: string, arg1: boolean) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            pivot_point: Graphene.Point3D;
            pivotPoint: Graphene.Point3D;
            rotation_x: number;
            rotationX: number;
            rotation_y: number;
            rotationY: number;
            rotation_z: number;
            rotationZ: number;
            scale_x: number;
            scaleX: number;
            scale_y: number;
            scaleY: number;
            scale_z: number;
            scaleZ: number;
            translation_x: number;
            translationX: number;
            translation_y: number;
            translationY: number;
            translation_z: number;
            translationZ: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Widget extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Widget>;

        // Properties
        get pivot_point(): Graphene.Point3D;
        set pivot_point(val: Graphene.Point3D);

        get pivotPoint(): Graphene.Point3D;
        set pivotPoint(val: Graphene.Point3D);

        /**
         * @default 0
         */
        get rotation_x(): number;
        set rotation_x(val: number);

        /**
         * @default 0
         */
        get rotationX(): number;
        set rotationX(val: number);

        /**
         * @default 0
         */
        get rotation_y(): number;
        set rotation_y(val: number);

        /**
         * @default 0
         */
        get rotationY(): number;
        set rotationY(val: number);

        /**
         * @default 0
         */
        get rotation_z(): number;
        set rotation_z(val: number);

        /**
         * @default 0
         */
        get rotationZ(): number;
        set rotationZ(val: number);

        /**
         * @default 1
         */
        get scale_x(): number;
        set scale_x(val: number);

        /**
         * @default 1
         */
        get scaleX(): number;
        set scaleX(val: number);

        /**
         * @default 1
         */
        get scale_y(): number;
        set scale_y(val: number);

        /**
         * @default 1
         */
        get scaleY(): number;
        set scaleY(val: number);

        /**
         * @default 1
         */
        get scale_z(): number;
        set scale_z(val: number);

        /**
         * @default 1
         */
        get scaleZ(): number;
        set scaleZ(val: number);

        /**
         * @default 0
         */
        get translation_x(): number;
        set translation_x(val: number);

        /**
         * @default 0
         */
        get translationX(): number;
        set translationX(val: number);

        /**
         * @default 0
         */
        get translation_y(): number;
        set translation_y(val: number);

        /**
         * @default 0
         */
        get translationY(): number;
        set translationY(val: number);

        /**
         * @default 0
         */
        get translation_z(): number;
        set translation_z(val: number);

        /**
         * @default 0
         */
        get translationZ(): number;
        set translationZ(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Widget.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Widget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Widget;

        // Signals
        /** @signal */
        connect<K extends keyof Widget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Widget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Widget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Widget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds a `transition` to the {@link Gtd.Widget}'s list of animations.
         * 
         * The `name` string is a per-widget unique identifier of the `transition`: only
         * one {@link Gtd.Transition} can be associated to the specified `name`.
         * 
         * The `transition` will be started once added.
         * 
         * This function will take a reference on the `transition`.
         * 
         * This function is usually called implicitly when modifying an animatable
         * property.
         * @param name the name of the transition to add
         * @param transition the {@link Gtd.Transition} to add
         */
        add_transition(name: string, transition: Transition): void;

        /**
         * @param transform 
         */
        apply_transform(transform: Gsk.Transform): Gsk.Transform;

        /**
         * Retrieves the delay that should be applied when tweening animatable
         * properties.
         * @returns a delay, in milliseconds
         */
        get_easing_delay(): number;

        /**
         * Retrieves the duration of the tweening for animatable
         * properties of `self` for the current easing state.
         * @returns the duration of the tweening, in milliseconds
         */
        get_easing_duration(): number;

        /**
         * @param out_pivot_point 
         */
        get_pivot_point(out_pivot_point: Graphene.Point3D): void;

        /**
         * @param rotation_x 
         * @param rotation_y 
         * @param rotation_z 
         */
        get_rotation(rotation_x: number, rotation_y: number, rotation_z: number): void;

        /**
         * @param scale_x 
         * @param scale_y 
         * @param scale_z 
         */
        get_scale(scale_x: number, scale_y: number, scale_z: number): void;

        /**
         * Retrieves the {@link Gtd.Transition} of a {@link Gtd.Widget} by using the
         * transition `name`.
         * 
         * Transitions created for animatable properties use the name of the
         * property itself, for instance the code below:
         * 
         * 
         * ```c
         *   gtd_widget_set_easing_duration (widget, 1000);
         *   gtd_widget_set_rotation_angle (widget, GTD_Y_AXIS, 360.0);
         * 
         *   transition = gtd_widget_get_transition (widget, "rotation-angle-y");
         *   g_signal_connect (transition, "stopped",
         *                     G_CALLBACK (on_transition_stopped),
         *                     widget);
         * ```
         * 
         * 
         * will call the `on_transition_stopped` callback when the transition
         * is finished.
         * 
         * If you just want to get notifications of the completion of a transition,
         * you should use the {@link Gtd.Widget.SignalSignatures.transition_stopped | Gtd.Widget::transition-stopped} signal, using the
         * transition name as the signal detail.
         * @param name the name of the transition
         * @returns a {@link Gtd.Transition}, or `null` is none   was found to match the passed name; the returned instance is owned   by Gtd and it should not be freed
         */
        get_transition(name: string): Transition;

        /**
         * @param translation_x 
         * @param translation_y 
         * @param translation_z 
         */
        get_translation(translation_x: number, translation_y: number, translation_z: number): void;

        /**
         * Removes all transitions associated to `self`.
         */
        remove_all_transitions(): void;

        /**
         * Removes the transition stored inside a {@link Gtd.Widget} using `name`
         * identifier.
         * 
         * If the transition is currently in progress, it will be stopped.
         * 
         * This function releases the reference acquired when the transition
         * was added to the {@link Gtd.Widget}.
         * @param name the name of the transition to remove
         */
        remove_transition(name: string): void;

        /**
         * Restores the easing state as it was prior to a call to
         * `gtd_widget_save_easing_state()`.
         */
        restore_easing_state(): void;

        /**
         * Saves the current easing state for animatable properties, and creates
         * a new state with the default values for easing mode and duration.
         * 
         * New transitions created after calling this function will inherit the
         * duration, easing mode, and delay of the new easing state; this also
         * applies to transitions modified in flight.
         */
        save_easing_state(): void;

        /**
         * Sets the delay that should be applied before tweening animatable
         * properties.
         * @param msecs the delay before the start of the tweening, in milliseconds
         */
        set_easing_delay(msecs: number): void;

        /**
         * Sets the duration of the tweening for animatable properties
         * of `self` for the current easing state.
         * @param msecs the duration of the easing, or `null`
         */
        set_easing_duration(msecs: number): void;

        /**
         * @param pivot_point 
         */
        set_pivot_point(pivot_point: Graphene.Point3D): void;

        /**
         * @param rotation_x 
         * @param rotation_y 
         * @param rotation_z 
         */
        set_rotation(rotation_x: number, rotation_y: number, rotation_z: number): void;

        /**
         * @param scale_x 
         * @param scale_y 
         * @param scale_z 
         */
        set_scale(scale_x: number, scale_y: number, scale_z: number): void;

        /**
         * @param translation_x 
         * @param translation_y 
         * @param translation_z 
         */
        set_translation(translation_x: number, translation_y: number, translation_z: number): void;

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, any];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace Window {
        // Signal signatures
        interface SignalSignatures extends Gtk.ApplicationWindow.SignalSignatures {
            "notify::current-workspace": (pspec: GObject.ParamSpec) => void;
            "notify::show-menubar": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-widget": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::focus-widget": (pspec: GObject.ParamSpec) => void;
            "notify::fullscreened": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::handle-menubar-accel": (pspec: GObject.ParamSpec) => void;
            "notify::hide-on-close": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::suspended": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::titlebar": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ApplicationWindow.ConstructorProps, Gio.ActionGroup.ConstructorProps, Gio.ActionMap.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Native.ConstructorProps, Gtk.Root.ConstructorProps, Gtk.ShortcutManager.ConstructorProps {
            current_workspace: Workspace;
            currentWorkspace: Workspace;
        }
    }

    /**
     * @gir-type Class
     */
    class Window extends Gtk.ApplicationWindow implements Gio.ActionGroup, Gio.ActionMap, Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager {
        static $gtype: GObject.GType<Window>;

        // Properties
        /**
         * @read-only
         */
        get current_workspace(): Workspace;

        /**
         * @read-only
         */
        get currentWorkspace(): Workspace;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Window.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](application: Application): Window;

        // Conflicted with Gtk.ApplicationWindow.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Window.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Window.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param widget 
         * @param position 
         */
        embed_widget_in_header(widget: Gtk.Widget, position: Gtk.PositionType): void;

        /**
         * Retrieves the currently active workspace
         * @returns a {@link Gtd.Workspace}
         */
        get_current_workspace(): Workspace;

        /**
         * Emits the `Gio.ActionGroup::action-added` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         */
        action_added(action_name: string): void;

        /**
         * Emits the `Gio.ActionGroup::action-enabled-changed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param enabled whether the action is now enabled
         */
        action_enabled_changed(action_name: string, enabled: boolean): void;

        /**
         * Emits the `Gio.ActionGroup::action-removed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         */
        action_removed(action_name: string): void;

        /**
         * Emits the `Gio.ActionGroup::action-state-changed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param state the new state of the named action
         */
        action_state_changed(action_name: string, state: GLib.Variant): void;

        /**
         * Activate the named action within `action_group`.
         * 
         * If the action is expecting a parameter, then the correct type of
         * parameter must be given as `parameter`.  If the action is expecting no
         * parameters then `parameter` must be `NULL`.  See
         * {@link Gio.ActionGroup.get_action_parameter_type}.
         * 
         * If the {@link Gio.ActionGroup} implementation supports asynchronous remote
         * activation over D-Bus, this call may return before the relevant
         * D-Bus traffic has been sent, or any replies have been received. In
         * order to block on such asynchronous activation calls,
         * {@link Gio.DBusConnection.flush} should be called prior to the code, which
         * depends on the result of the action activation. Without flushing
         * the D-Bus connection, there is no guarantee that the action would
         * have been activated.
         * 
         * The following code which runs in a remote app instance, shows an
         * example of a ‘quit’ action being activated on the primary app
         * instance over D-Bus. Here {@link Gio.DBusConnection.flush} is called
         * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
         * may fail to be activated on the primary instance.
         * 
         * ```c
         * // call ‘quit’ action on primary instance
         * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
         * 
         * // make sure the action is activated now
         * g_dbus_connection_flush (…);
         * 
         * g_debug ("Application has been terminated. Exiting.");
         * 
         * exit (0);
         * ```
         * @param action_name the name of the action to activate
         * @param parameter parameters to the activation
         */
        activate_action(action_name: string, parameter: (GLib.Variant | null)): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.activate_action
        activate_action(...args: never[]): any;

        /**
         * Request for the state of the named action within `action_group` to be
         * changed to `value`.
         * 
         * The action must be stateful and `value` must be of the correct type.
         * See {@link Gio.ActionGroup.get_action_state_type}.
         * 
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See {@link Gio.ActionGroup.get_action_state_hint}.
         * 
         * If the `value` GVariant is floating, it is consumed.
         * @param action_name the name of the action to request the change on
         * @param value the new state
         */
        change_action_state(action_name: string, value: GLib.Variant): void;

        /**
         * Checks if the named action within `action_group` is currently enabled.
         * 
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @param action_name the name of the action to query
         * @returns whether the action is currently enabled
         */
        get_action_enabled(action_name: string): boolean;

        /**
         * Queries the type of the parameter that must be given when activating
         * the named action within `action_group`.
         * 
         * When activating the action using {@link Gio.ActionGroup.activate_action},
         * the {@link GLib.Variant} given to that function must be of the type returned
         * by this function.
         * 
         * In the case that this function returns `NULL`, you must not give any
         * {@link GLib.Variant}, but `NULL` instead.
         * 
         * The parameter type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different parameter type.
         * @param action_name the name of the action to query
         * @returns the parameter type
         */
        get_action_parameter_type(action_name: string): (GLib.VariantType | null);

        /**
         * Queries the current state of the named action within `action_group`.
         * 
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by {@link Gio.ActionGroup.get_action_state_type}.
         * 
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @returns the current state of the action
         */
        get_action_state(action_name: string): (GLib.Variant | null);

        /**
         * Requests a hint about the valid range of values for the state of the
         * named action within `action_group`.
         * 
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         * 
         * If a {@link GLib.Variant} array is returned then each item in the array is a
         * possible value for the state.  If a {@link GLib.Variant} pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         * 
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         * 
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @returns the state range hint
         */
        get_action_state_hint(action_name: string): (GLib.Variant | null);

        /**
         * Queries the type of the state of the named action within
         * `action_group`.
         * 
         * If the action is stateful then this function returns the
         * {@link GLib.VariantType} of the state.  All calls to
         * {@link Gio.ActionGroup.change_action_state} must give a {@link GLib.Variant} of this
         * type and {@link Gio.ActionGroup.get_action_state} will return a {@link GLib.Variant}
         * of the same type.
         * 
         * If the action is not stateful then this function will return `NULL`.
         * In that case, {@link Gio.ActionGroup.get_action_state} will return `NULL`
         * and you must not call {@link Gio.ActionGroup.change_action_state}.
         * 
         * The state type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different state type.
         * @param action_name the name of the action to query
         * @returns the state type, if the action is stateful
         */
        get_action_state_type(action_name: string): (GLib.VariantType | null);

        /**
         * Checks if the named action exists within `action_group`.
         * @param action_name the name of the action to check for
         * @returns whether the named action exists
         */
        has_action(action_name: string): boolean;

        /**
         * Lists the actions contained within `action_group`.
         * 
         * The caller is responsible for freeing the list with {@link GLib.strfreev} when
         * it is no longer required.
         * @returns a `NULL`-terminated array   of the names of the actions in the group
         */
        list_actions(): string[];

        /**
         * Queries all aspects of the named action within an `action_group`.
         * 
         * This function acquires the information available from
         * {@link Gio.ActionGroup.has_action}, {@link Gio.ActionGroup.get_action_enabled},
         * {@link Gio.ActionGroup.get_action_parameter_type},
         * {@link Gio.ActionGroup.get_action_state_type},
         * {@link Gio.ActionGroup.get_action_state_hint} and
         * {@link Gio.ActionGroup.get_action_state} with a single function call.
         * 
         * This provides two main benefits.
         * 
         * The first is the improvement in efficiency that comes with not having
         * to perform repeated lookups of the action in order to discover
         * different things about it.  The second is that implementing
         * {@link Gio.ActionGroup} can now be done by only overriding this one virtual
         * function.
         * 
         * The interface provides a default implementation of this function that
         * calls the individual functions, as required, to fetch the
         * information.  The interface also provides default implementations of
         * those functions that call this function.  All implementations,
         * therefore, must override either this function or all of the others.
         * 
         * If the action exists, `TRUE` is returned and any of the requested
         * fields (as indicated by having a non-`NULL` reference passed in) are
         * filled.  If the action doesn’t exist, `FALSE` is returned and the
         * fields may or may not have been modified.
         * @param action_name the name of an action in the group
         * @returns `TRUE` if the action exists, else `FALSE`
         */
        query_action(action_name: string): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];

        /**
         * Emits the `Gio.ActionGroup::action-added` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_action_added(action_name: string): void;

        /**
         * Emits the `Gio.ActionGroup::action-enabled-changed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param enabled whether the action is now enabled
         * @virtual
         */
        vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;

        /**
         * Emits the `Gio.ActionGroup::action-removed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_action_removed(action_name: string): void;

        /**
         * Emits the `Gio.ActionGroup::action-state-changed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param state the new state of the named action
         * @virtual
         */
        vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;

        /**
         * Activate the named action within `action_group`.
         * 
         * If the action is expecting a parameter, then the correct type of
         * parameter must be given as `parameter`.  If the action is expecting no
         * parameters then `parameter` must be `NULL`.  See
         * {@link Gio.ActionGroup.get_action_parameter_type}.
         * 
         * If the {@link Gio.ActionGroup} implementation supports asynchronous remote
         * activation over D-Bus, this call may return before the relevant
         * D-Bus traffic has been sent, or any replies have been received. In
         * order to block on such asynchronous activation calls,
         * {@link Gio.DBusConnection.flush} should be called prior to the code, which
         * depends on the result of the action activation. Without flushing
         * the D-Bus connection, there is no guarantee that the action would
         * have been activated.
         * 
         * The following code which runs in a remote app instance, shows an
         * example of a ‘quit’ action being activated on the primary app
         * instance over D-Bus. Here {@link Gio.DBusConnection.flush} is called
         * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
         * may fail to be activated on the primary instance.
         * 
         * ```c
         * // call ‘quit’ action on primary instance
         * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
         * 
         * // make sure the action is activated now
         * g_dbus_connection_flush (…);
         * 
         * g_debug ("Application has been terminated. Exiting.");
         * 
         * exit (0);
         * ```
         * @param action_name the name of the action to activate
         * @param parameter parameters to the activation
         * @virtual
         */
        vfunc_activate_action(action_name: string, parameter: (GLib.Variant | null)): void;

        /**
         * Request for the state of the named action within `action_group` to be
         * changed to `value`.
         * 
         * The action must be stateful and `value` must be of the correct type.
         * See {@link Gio.ActionGroup.get_action_state_type}.
         * 
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See {@link Gio.ActionGroup.get_action_state_hint}.
         * 
         * If the `value` GVariant is floating, it is consumed.
         * @param action_name the name of the action to request the change on
         * @param value the new state
         * @virtual
         */
        vfunc_change_action_state(action_name: string, value: GLib.Variant): void;

        /**
         * Checks if the named action within `action_group` is currently enabled.
         * 
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_enabled(action_name: string): boolean;

        /**
         * Queries the type of the parameter that must be given when activating
         * the named action within `action_group`.
         * 
         * When activating the action using {@link Gio.ActionGroup.activate_action},
         * the {@link GLib.Variant} given to that function must be of the type returned
         * by this function.
         * 
         * In the case that this function returns `NULL`, you must not give any
         * {@link GLib.Variant}, but `NULL` instead.
         * 
         * The parameter type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different parameter type.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_parameter_type(action_name: string): (GLib.VariantType | null);

        /**
         * Queries the current state of the named action within `action_group`.
         * 
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by {@link Gio.ActionGroup.get_action_state_type}.
         * 
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state(action_name: string): (GLib.Variant | null);

        /**
         * Requests a hint about the valid range of values for the state of the
         * named action within `action_group`.
         * 
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         * 
         * If a {@link GLib.Variant} array is returned then each item in the array is a
         * possible value for the state.  If a {@link GLib.Variant} pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         * 
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         * 
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state_hint(action_name: string): (GLib.Variant | null);

        /**
         * Queries the type of the state of the named action within
         * `action_group`.
         * 
         * If the action is stateful then this function returns the
         * {@link GLib.VariantType} of the state.  All calls to
         * {@link Gio.ActionGroup.change_action_state} must give a {@link GLib.Variant} of this
         * type and {@link Gio.ActionGroup.get_action_state} will return a {@link GLib.Variant}
         * of the same type.
         * 
         * If the action is not stateful then this function will return `NULL`.
         * In that case, {@link Gio.ActionGroup.get_action_state} will return `NULL`
         * and you must not call {@link Gio.ActionGroup.change_action_state}.
         * 
         * The state type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different state type.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state_type(action_name: string): (GLib.VariantType | null);

        /**
         * Checks if the named action exists within `action_group`.
         * @param action_name the name of the action to check for
         * @virtual
         */
        vfunc_has_action(action_name: string): boolean;

        /**
         * Lists the actions contained within `action_group`.
         * 
         * The caller is responsible for freeing the list with {@link GLib.strfreev} when
         * it is no longer required.
         * @virtual
         */
        vfunc_list_actions(): string[];

        /**
         * Queries all aspects of the named action within an `action_group`.
         * 
         * This function acquires the information available from
         * {@link Gio.ActionGroup.has_action}, {@link Gio.ActionGroup.get_action_enabled},
         * {@link Gio.ActionGroup.get_action_parameter_type},
         * {@link Gio.ActionGroup.get_action_state_type},
         * {@link Gio.ActionGroup.get_action_state_hint} and
         * {@link Gio.ActionGroup.get_action_state} with a single function call.
         * 
         * This provides two main benefits.
         * 
         * The first is the improvement in efficiency that comes with not having
         * to perform repeated lookups of the action in order to discover
         * different things about it.  The second is that implementing
         * {@link Gio.ActionGroup} can now be done by only overriding this one virtual
         * function.
         * 
         * The interface provides a default implementation of this function that
         * calls the individual functions, as required, to fetch the
         * information.  The interface also provides default implementations of
         * those functions that call this function.  All implementations,
         * therefore, must override either this function or all of the others.
         * 
         * If the action exists, `TRUE` is returned and any of the requested
         * fields (as indicated by having a non-`NULL` reference passed in) are
         * filled.  If the action doesn’t exist, `FALSE` is returned and the
         * fields may or may not have been modified.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_query_action(action_name: string): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];

        /**
         * Adds an action to the `action_map`.
         * 
         * If the action map already contains an action with the same name
         * as `action` then the old action is dropped from the action map.
         * 
         * The action map takes its own reference on `action`.
         * @param action a {@link Gio.Action}
         */
        add_action(action: Gio.Action): void;

        /**
         * A convenience function for creating multiple simple actions. 
         * See Gio.ActionEntryObj for the structure of the action entry.
         * @param entries Array of action entries to add
         */
        add_action_entries(entries: Gio.ActionEntryObj[]): void;

        /**
         * Looks up the action with the name `action_name` in `action_map`.
         * 
         * If no such action exists, returns `NULL`.
         * @param action_name the name of an action
         * @returns a {@link Gio.Action}
         */
        lookup_action(action_name: string): (Gio.Action | null);

        /**
         * Removes the named action from the action map.
         * 
         * If no action of this name is in the map then nothing happens.
         * @param action_name the name of the action
         */
        remove_action(action_name: string): void;

        /**
         * Remove actions from a {@link Gio.ActionMap}. This is meant as the reverse of
         * {@link Gio.ActionMap.add_action_entries}.
         * 
         * 
         * ```c
         * static const GActionEntry entries[] = {
         *     { "quit",         activate_quit              },
         *     { "print-string", activate_print_string, "s" }
         * };
         * 
         * void
         * add_actions (GActionMap *map)
         * {
         *   g_action_map_add_action_entries (map, entries, G_N_ELEMENTS (entries), NULL);
         * }
         * 
         * void
         * remove_actions (GActionMap *map)
         * {
         *   g_action_map_remove_action_entries (map, entries, G_N_ELEMENTS (entries));
         * }
         * ```
         * @param entries a pointer to   the first item in an array of {@link Gio.ActionEntry} structs
         */
        remove_action_entries(entries: Gio.ActionEntry[]): void;

        /**
         * Adds an action to the `action_map`.
         * 
         * If the action map already contains an action with the same name
         * as `action` then the old action is dropped from the action map.
         * 
         * The action map takes its own reference on `action`.
         * @param action a {@link Gio.Action}
         * @virtual
         */
        vfunc_add_action(action: Gio.Action): void;

        /**
         * Looks up the action with the name `action_name` in `action_map`.
         * 
         * If no such action exists, returns `NULL`.
         * @param action_name the name of an action
         * @virtual
         */
        vfunc_lookup_action(action_name: string): (Gio.Action | null);

        /**
         * Removes the named action from the action map.
         * 
         * If no action of this name is in the map then nothing happens.
         * @param action_name the name of the action
         * @virtual
         */
        vfunc_remove_action(action_name: string): void;
    }


    /**
     * @gir-type Alias
     */
    type ActivatableInterface = typeof Activatable;

    /**
     * @gir-type Struct
     */
    abstract class Animatable {
        static $gtype: GObject.GType<Animatable>;
    }


    /**
     * @gir-type Struct
     */
    abstract class Application {
        static $gtype: GObject.GType<Application>;
    }


    /**
     * @gir-type Alias
     */
    type BinLayoutClass = typeof BinLayout;

    /**
     * @gir-type Alias
     */
    type ClockClass = typeof Clock;

    /**
     * @gir-type Struct
     */
    abstract class DoneButton {
        static $gtype: GObject.GType<DoneButton>;
    }


    /**
     * @gir-type Struct
     */
    abstract class InitialSetupWindow {
        static $gtype: GObject.GType<InitialSetupWindow>;
    }


    /**
     * @gir-type Struct
     */
    abstract class Interval {
        static $gtype: GObject.GType<Interval>;
    }


    /**
     * @gir-type Alias
     */
    type ListModelFilterClass = typeof ListModelFilter;

    /**
     * @gir-type Alias
     */
    type ListStoreClass = typeof ListStore;

    /**
     * @gir-type Struct
     */
    abstract class ListView {
        static $gtype: GObject.GType<ListView>;
    }


    /**
     * @gir-type Alias
     */
    type ManagerClass = typeof Manager;

    /**
     * @gir-type Struct
     */
    abstract class MarkdownRenderer {
        static $gtype: GObject.GType<MarkdownRenderer>;
    }


    /**
     * @gir-type Alias
     */
    type MaxSizeLayoutClass = typeof MaxSizeLayout;

    /**
     * @gir-type Alias
     */
    type MenuButtonClass = typeof MenuButton;

    /**
     * @gir-type Alias
     */
    type NotificationClass = typeof Notification;

    /**
     * @gir-type Alias
     */
    type ObjectClass = typeof Object;

    /**
     * @gir-type Alias
     */
    type OmniAreaAddinInterface = typeof OmniAreaAddin;

    /**
     * @gir-type Alias
     */
    type OmniAreaClass = typeof OmniArea;

    /**
     * @gir-type Alias
     */
    type PanelInterface = typeof Panel;

    /**
     * @gir-type Struct
     */
    abstract class PluginManager {
        static $gtype: GObject.GType<PluginManager>;
    }


    /**
     * @gir-type Alias
     */
    type ProviderInterface = typeof Provider;

    /**
     * @gir-type Alias
     */
    type ProviderPopoverClass = typeof ProviderPopover;

    /**
     * @gir-type Alias
     */
    type StarWidgetClass = typeof StarWidget;

    /**
     * @gir-type Struct
     */
    abstract class Storage {
        static $gtype: GObject.GType<Storage>;
    }


    /**
     * @gir-type Struct
     */
    abstract class StoragePopover {
        static $gtype: GObject.GType<StoragePopover>;
    }


    /**
     * @gir-type Struct
     */
    abstract class StorageRow {
        static $gtype: GObject.GType<StorageRow>;
    }


    /**
     * @gir-type Struct
     */
    abstract class StorageSelector {
        static $gtype: GObject.GType<StorageSelector>;
    }


    /**
     * @gir-type Alias
     */
    type TaskClass = typeof Task;

    /**
     * @gir-type Alias
     */
    type TaskListClass = typeof TaskList;

    /**
     * @gir-type Struct
     */
    abstract class TaskListItem {
        static $gtype: GObject.GType<TaskListItem>;
    }


    /**
     * @gir-type Alias
     */
    type TaskListViewClass = typeof TaskListView;

    /**
     * @gir-type Struct
     */
    abstract class TaskRow {
        static $gtype: GObject.GType<TaskRow>;
    }


    /**
     * @gir-type Struct
     */
    abstract class Transition {
        static $gtype: GObject.GType<Transition>;
    }


    /**
     * @gir-type Alias
     */
    type WidgetClass = typeof Widget;

    /**
     * @gir-type Alias
     */
    type WindowClass = typeof Window;

    /**
     * @gir-type Alias
     */
    type WorkspaceInterface = typeof Workspace;

    namespace Activatable {
        /**
         * Interface for implementing Activatable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Activates the extension. This is the starting point where
             * the implementation does everything it needs to do. Avoid
             * doing it earlier than this call.
             * 
             * This function is called after the extension is loaded and
             * the signals are connected. If you want to do anything before
             * that, the _init function should be used instead.
             * @virtual
             */
            vfunc_activate(): void;

            /**
             * Deactivates the extension. Here, the extension should remove
             * all providers and panels it set.
             * 
             * This function is called before the extension is removed. At
             * this point, the plugin manager already removed all providers
             * and widgets this extension exported. If you want to do anything
             * after the extension is removed, use GObject::finalize instead.
             * @virtual
             */
            vfunc_deactivate(): void;

            /**
             * Retrieve the preferences panel of `activatable` if any.
             * @virtual
             */
            vfunc_get_preferences_panel(): (Gtk.Widget | null);
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            preferences_panel: (Gtk.Widget | null);
            preferencesPanel: (Gtk.Widget | null);
        }
    }

    export interface ActivatableNamespace {
        $gtype: GObject.GType<Activatable>;
        prototype: Activatable;
    }
    /**
     * @gir-type Interface
     */
    interface Activatable extends GObject.Object, Activatable.Interface {

        // Properties
        /**
         * @read-only
         */
        get preferences_panel(): (Gtk.Widget | null);

        /**
         * @read-only
         */
        get preferencesPanel(): (Gtk.Widget | null);

        // Methods
        /**
         * Activates the extension. This is the starting point where
         * the implementation does everything it needs to do. Avoid
         * doing it earlier than this call.
         * 
         * This function is called after the extension is loaded and
         * the signals are connected. If you want to do anything before
         * that, the _init function should be used instead.
         */
        activate(): void;

        /**
         * Deactivates the extension. Here, the extension should remove
         * all providers and panels it set.
         * 
         * This function is called before the extension is removed. At
         * this point, the plugin manager already removed all providers
         * and widgets this extension exported. If you want to do anything
         * after the extension is removed, use GObject::finalize instead.
         */
        deactivate(): void;

        /**
         * Retrieve the preferences panel of `activatable` if any.
         * @returns a {@link Gtk.Widget}, or `null`
         */
        get_preferences_panel(): (Gtk.Widget | null);
    }


    export const Activatable: ActivatableNamespace & {
        new (): Activatable; // This allows `obj instanceof Activatable`
    };

    namespace OmniAreaAddin {
        /**
         * Interface for implementing OmniAreaAddin.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Requests that the {@link Gtd.OmniAreaAddin} initialize, possibly modifying
             * `omni_bar` as necessary.
             * @param omni_bar an {@link Gtd.OmniArea}
             * @virtual
             */
            vfunc_load(omni_bar: OmniArea): void;

            /**
             * Requests that the {@link Gtd.OmniAreaAddin} shutdown, possibly modifying
             * `omni_bar` as necessary to return it to the original state before
             * the addin was loaded.
             * @param omni_bar an {@link Gtd.OmniArea}
             * @virtual
             */
            vfunc_unload(omni_bar: OmniArea): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface OmniAreaAddinNamespace {
        $gtype: GObject.GType<OmniAreaAddin>;
        prototype: OmniAreaAddin;
    }
    /**
     * @gir-type Interface
     */
    interface OmniAreaAddin extends GObject.Object, OmniAreaAddin.Interface {

        // Methods
        /**
         * Requests that the {@link Gtd.OmniAreaAddin} initialize, possibly modifying
         * `omni_bar` as necessary.
         * @param omni_bar an {@link Gtd.OmniArea}
         */
        load(omni_bar: OmniArea): void;

        /**
         * Requests that the {@link Gtd.OmniAreaAddin} shutdown, possibly modifying
         * `omni_bar` as necessary to return it to the original state before
         * the addin was loaded.
         * @param omni_bar an {@link Gtd.OmniArea}
         */
        unload(omni_bar: OmniArea): void;
    }


    export const OmniAreaAddin: OmniAreaAddinNamespace & {
        new (): OmniAreaAddin; // This allows `obj instanceof OmniAreaAddin`
    };

    namespace Panel {
        /**
         * Interface for implementing Panel.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Activates the panel with `parameters`. The passed parameters
             * are in free form, to allow panels have any input they want.
             * 
             * This is an optional vfunc.
             * @param parameters parameters of the panel
             * @virtual
             */
            vfunc_activate(parameters: (GLib.Variant | null)): void;

            /**
             * Retrieves the list of widgets to be placed at headerbar. The
             * position of the widget is determined by the {@link Gtk.Widget.SignalSignatures.halign | Gtk.Widget::halign}
             * property.
             * 
             * Widgets with `GTK_ALIGN_START` halign will be packed into the
             * start of the headerbar, and `GTK_ALIGN_END` at the end. Other
             * values are silently ignored.
             * @virtual
             */
            vfunc_get_header_widgets(): Gtk.Widget[];

            /**
             * Retrieves the icon of `self`.
             * @virtual
             */
            vfunc_get_icon(): (Gio.Icon | null);

            /**
             * Retrieves the gear menu of `panel`.
             * @virtual
             */
            vfunc_get_menu(): Gio.Menu;

            /**
             * Retrieves the name of `panel`
             * @virtual
             */
            vfunc_get_panel_name(): string;

            /**
             * Retrieves the title of `panel`
             * @virtual
             */
            vfunc_get_panel_title(): string;

            /**
             * Retrieves the popover of `self`. It is used as the
             * window menu when available.
             * @virtual
             */
            vfunc_get_popover(): (Gtk.Popover | null);

            /**
             * Retrieves the priority of `self`. This value is used to
             * determine the position of the panel in the sidebar.
             * @virtual
             */
            vfunc_get_priority(): number;

            /**
             * Retrieves the subtitle of `panel`
             * @virtual
             */
            vfunc_get_subtitle(): string;
        }


        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            icon: (Gio.Icon | null);
            menu: Gio.Menu;
            name: string;
            priority: number;
            subtitle: string;
            title: string;
        }
    }

    export interface PanelNamespace {
        $gtype: GObject.GType<Panel>;
        prototype: Panel;
    }
    /**
     * @gir-type Interface
     */
    interface Panel extends Gtk.Widget, Panel.Interface {

        // Properties
        /**
         * @read-only
         */
        get icon(): (Gio.Icon | null);

        /**
         * @read-only
         */
        get menu(): Gio.Menu;

        /**
         * @read-only
         * @default null
         */
        get name(): string;

        /**
         * @read-only
         * @default 0
         */
        get priority(): number;

        /**
         * @read-only
         * @default null
         */
        get subtitle(): string;

        /**
         * @read-only
         * @default null
         */
        get title(): string;

        // Methods
        /**
         * Activates the panel with `parameters`. The passed parameters
         * are in free form, to allow panels have any input they want.
         * 
         * This is an optional vfunc.
         * @param parameters parameters of the panel
         */
        activate(parameters: (GLib.Variant | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.activate
        activate(...args: never[]): any;

        /**
         * Retrieves the list of widgets to be placed at headerbar. The
         * position of the widget is determined by the {@link Gtk.Widget.SignalSignatures.halign | Gtk.Widget::halign}
         * property.
         * 
         * Widgets with `GTK_ALIGN_START` halign will be packed into the
         * start of the headerbar, and `GTK_ALIGN_END` at the end. Other
         * values are silently ignored.
         * @returns the list of {@link Gtk.Widget}
         */
        get_header_widgets(): Gtk.Widget[];

        /**
         * Retrieves the icon of `self`.
         * @returns a {@link Gio.Icon}
         */
        get_icon(): (Gio.Icon | null);

        /**
         * Retrieves the gear menu of `panel`.
         * @returns a {@link Gio.Menu}
         */
        get_menu(): Gio.Menu;

        /**
         * Retrieves the name of `panel`
         * @returns the name of `panel`
         */
        get_panel_name(): string;

        /**
         * Retrieves the title of `panel`
         * @returns the title of `panel`
         */
        get_panel_title(): string;

        /**
         * Retrieves the popover of `self`. It is used as the
         * window menu when available.
         * @returns a {@link Gtk.Popover}
         */
        get_popover(): (Gtk.Popover | null);

        /**
         * Retrieves the priority of `self`. This value is used to
         * determine the position of the panel in the sidebar.
         * @returns the priority of `self`
         */
        get_priority(): number;

        /**
         * Retrieves the subtitle of `panel`
         * @returns the subtitle of `panel`
         */
        get_subtitle(): string;
    }


    export const Panel: PanelNamespace & {
        new (): Panel; // This allows `obj instanceof Panel`
    };

    namespace Provider {
        /**
         * Interface for implementing Provider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Creates the given task in `provider`.
             * @param list a `GtdTaskLast`
             * @param title The task title
             * @param due_date a {@link GLib.DateTime}
             * @param cancellable a {@link Gio.Cancellable}
             * @param callback a callback
             * @virtual
             */
            vfunc_create_task(list: TaskList, title: string, due_date: (GLib.DateTime | null), cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

            /**
             * Finishes creating the task.
             * @param result a {@link Gio.AsyncResult}
             * @virtual
             */
            vfunc_create_task_finish(result: Gio.AsyncResult): (Task | null);

            /**
             * Creates the given list in `provider`.
             * @param name the name of the new task list
             * @param cancellable a {@link Gio.Cancellable}
             * @param callback a callback
             * @virtual
             */
            vfunc_create_task_list(name: (string | null), cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

            /**
             * Finishes creating the task list. The provider will emit the
             * GtdProvider:list-added signal after creating the task list.
             * @param result a {@link Gio.AsyncResult}
             * @virtual
             */
            vfunc_create_task_list_finish(result: Gio.AsyncResult): boolean;

            /**
             * Retrieves the description of `provider`.
             * @virtual
             */
            vfunc_get_description(): string;

            /**
             * Retrieves whether `provider` is enabled or not. A disabled
             * provider cannot be selected to be default nor be selected
             * to add tasks to it.
             * @virtual
             */
            vfunc_get_enabled(): boolean;

            /**
             * The icon of `provider`.
             * @virtual
             */
            vfunc_get_icon(): Gio.Icon;

            /**
             * Retrieves the identifier of `provider`.
             * @virtual
             */
            vfunc_get_id(): string;

            /**
             * Retrieves the inbox of `provider`.
             * @virtual
             */
            vfunc_get_inbox(): (TaskList | null);

            /**
             * Retrieves the user-visible name of `provider`.
             * @virtual
             */
            vfunc_get_name(): string;

            /**
             * Retrieves the type of the `provider`. This should return the
             * same value, regardless of the account name.
             * 
             * For example: "todoist", "todo-txt" or "google"
             * @virtual
             */
            vfunc_get_provider_type(): string;

            /**
             * Retrieves the tasklists that this provider contains.
             * @virtual
             */
            vfunc_get_task_lists(): TaskList[];

            /**
             * Asks the provider to refresh. Online providers may want to
             * synchronize tasks and tasklists, credentials, etc, when this
             * is called.
             * 
             * This is an optional feature. Providers that do not implement
             * the "refresh" vfunc will be ignored.
             * @virtual
             */
            vfunc_refresh(): void;

            /**
             * Removes the given task from `provider`.
             * @param task a {@link Gtd.Task}
             * @param cancellable a {@link Gio.Cancellable}
             * @param callback a callback
             * @virtual
             */
            vfunc_remove_task(task: Task, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

            /**
             * Finishes removing the task.
             * @param result a {@link Gio.AsyncResult}
             * @virtual
             */
            vfunc_remove_task_finish(result: Gio.AsyncResult): boolean;

            /**
             * Removes the given list from `provider`.
             * @param list a {@link Gtd.TaskList}
             * @param cancellable a {@link Gio.Cancellable}
             * @param callback a callback
             * @virtual
             */
            vfunc_remove_task_list(list: TaskList, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

            /**
             * Finishes removing the task list. The provider will emit the
             * GtdProvider:list-removed signal after removing the task list.
             * @param result a {@link Gio.AsyncResult}
             * @virtual
             */
            vfunc_remove_task_list_finish(result: Gio.AsyncResult): boolean;

            /**
             * Updates the given task in `provider`.
             * @param task a {@link Gtd.Task}
             * @param cancellable a {@link Gio.Cancellable}
             * @param callback a callback
             * @virtual
             */
            vfunc_update_task(task: Task, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

            /**
             * Finishes updating the task list.
             * @param result a {@link Gio.AsyncResult}
             * @virtual
             */
            vfunc_update_task_finish(result: Gio.AsyncResult): boolean;

            /**
             * Updates the given list in `provider`.
             * @param list a {@link Gtd.TaskList}
             * @param cancellable a {@link Gio.Cancellable}
             * @param callback a callback
             * @virtual
             */
            vfunc_update_task_list(list: TaskList, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

            /**
             * Finishes updating the task list. The provider will emit the
             * GtdProvider:list-updated signal after updating the task list.
             * @param result a {@link Gio.AsyncResult}
             * @virtual
             */
            vfunc_update_task_list_finish(result: Gio.AsyncResult): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            description: string;
            enabled: boolean;
            icon: Gio.Icon;
            id: string;
            name: string;
            provider_type: string;
            providerType: string;
        }
    }

    export interface ProviderNamespace {
        $gtype: GObject.GType<Provider>;
        prototype: Provider;
    }
    /**
     * @gir-type Interface
     */
    interface Provider extends Object, Provider.Interface {

        // Properties
        /**
         * @read-only
         * @default null
         */
        get description(): string;

        /**
         * @read-only
         * @default false
         */
        get enabled(): boolean;

        /**
         * @read-only
         */
        get icon(): Gio.Icon;

        /**
         * @read-only
         * @default null
         */
        get id(): string;

        /**
         * @read-only
         * @default null
         */
        get name(): string;

        /**
         * @read-only
         * @default null
         */
        get provider_type(): string;

        /**
         * @read-only
         * @default null
         */
        get providerType(): string;

        // Methods
        /**
         * Compares `a` and `b`. The sorting criteria is internal and
         * may change.
         * @param b a {@link Gtd.Provider}
         * @returns -1 if `a` comes before `b`, 1 for the oposite, and 0 if they're equal
         */
        compare(b: Provider): number;

        /**
         * Creates the given task in `provider`.
         * @param list a `GtdTaskLast`
         * @param title The task title
         * @param due_date a {@link GLib.DateTime}
         * @param cancellable a {@link Gio.Cancellable}
         */
        create_task(list: TaskList, title: string, due_date: (GLib.DateTime | null), cancellable: (Gio.Cancellable | null)): globalThis.Promise<(Task | null)>;

        /**
         * Creates the given task in `provider`.
         * @param list a `GtdTaskLast`
         * @param title The task title
         * @param due_date a {@link GLib.DateTime}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        create_task(list: TaskList, title: string, due_date: (GLib.DateTime | null), cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Creates the given task in `provider`.
         * @param list a `GtdTaskLast`
         * @param title The task title
         * @param due_date a {@link GLib.DateTime}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        create_task(list: TaskList, title: string, due_date: (GLib.DateTime | null), cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<(Task | null)> | void);

        /**
         * Finishes creating the task.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link Gtd.Task}
         */
        create_task_finish(result: Gio.AsyncResult): (Task | null);

        /**
         * Creates the given list in `provider`.
         * @param name the name of the new task list
         * @param cancellable a {@link Gio.Cancellable}
         */
        create_task_list(name: (string | null), cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Creates the given list in `provider`.
         * @param name the name of the new task list
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        create_task_list(name: (string | null), cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Creates the given list in `provider`.
         * @param name the name of the new task list
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        create_task_list(name: (string | null), cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes creating the task list. The provider will emit the
         * GtdProvider:list-added signal after creating the task list.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if task list was successfully created, `false` otherwise
         */
        create_task_list_finish(result: Gio.AsyncResult): boolean;

        /**
         * Retrieves the description of `provider`.
         * @returns the description of `provider`
         */
        get_description(): string;

        /**
         * Retrieves whether `provider` is enabled or not. A disabled
         * provider cannot be selected to be default nor be selected
         * to add tasks to it.
         * @returns `true` if provider is enabled, `false` otherwise.
         */
        get_enabled(): boolean;

        /**
         * The icon of `provider`.
         * @returns a {@link Gio.Icon}
         */
        get_icon(): Gio.Icon;

        /**
         * Retrieves the identifier of `provider`.
         * @returns the id of `provider`
         */
        get_id(): string;

        /**
         * Retrieves the inbox of `provider`.
         * @returns a {@link Gtd.TaskList}
         */
        get_inbox(): (TaskList | null);

        /**
         * Retrieves the user-visible name of `provider`.
         * @returns the name of `provider`
         */
        get_name(): string;

        /**
         * Retrieves the type of the `provider`. This should return the
         * same value, regardless of the account name.
         * 
         * For example: "todoist", "todo-txt" or "google"
         * @returns the type of the `provider`
         */
        get_provider_type(): string;

        /**
         * Retrieves the tasklists that this provider contains.
         * @returns the list of tasks, or `null`
         */
        get_task_lists(): TaskList[];

        /**
         * Asks the provider to refresh. Online providers may want to
         * synchronize tasks and tasklists, credentials, etc, when this
         * is called.
         * 
         * This is an optional feature. Providers that do not implement
         * the "refresh" vfunc will be ignored.
         */
        refresh(): void;

        /**
         * Removes the given task from `provider`.
         * @param task a {@link Gtd.Task}
         * @param cancellable a {@link Gio.Cancellable}
         */
        remove_task(task: Task, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Removes the given task from `provider`.
         * @param task a {@link Gtd.Task}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        remove_task(task: Task, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Removes the given task from `provider`.
         * @param task a {@link Gtd.Task}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        remove_task(task: Task, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes removing the task.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if task was successfully removed, `false` otherwise
         */
        remove_task_finish(result: Gio.AsyncResult): boolean;

        /**
         * Removes the given list from `provider`.
         * @param list a {@link Gtd.TaskList}
         * @param cancellable a {@link Gio.Cancellable}
         */
        remove_task_list(list: TaskList, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Removes the given list from `provider`.
         * @param list a {@link Gtd.TaskList}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        remove_task_list(list: TaskList, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Removes the given list from `provider`.
         * @param list a {@link Gtd.TaskList}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        remove_task_list(list: TaskList, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes removing the task list. The provider will emit the
         * GtdProvider:list-removed signal after removing the task list.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if task list was successfully removed, `false` otherwise
         */
        remove_task_list_finish(result: Gio.AsyncResult): boolean;

        /**
         * Updates the given task in `provider`.
         * @param task a {@link Gtd.Task}
         * @param cancellable a {@link Gio.Cancellable}
         */
        update_task(task: Task, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Updates the given task in `provider`.
         * @param task a {@link Gtd.Task}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        update_task(task: Task, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Updates the given task in `provider`.
         * @param task a {@link Gtd.Task}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        update_task(task: Task, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes updating the task list.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if task list was successfully updated, `false` otherwise
         */
        update_task_finish(result: Gio.AsyncResult): boolean;

        /**
         * Updates the given list in `provider`.
         * @param list a {@link Gtd.TaskList}
         * @param cancellable a {@link Gio.Cancellable}
         */
        update_task_list(list: TaskList, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Updates the given list in `provider`.
         * @param list a {@link Gtd.TaskList}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        update_task_list(list: TaskList, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Updates the given list in `provider`.
         * @param list a {@link Gtd.TaskList}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        update_task_list(list: TaskList, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes updating the task list. The provider will emit the
         * GtdProvider:list-updated signal after updating the task list.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if task list was successfully updated, `false` otherwise
         */
        update_task_list_finish(result: Gio.AsyncResult): boolean;
    }


    export const Provider: ProviderNamespace & {
        new (): Provider; // This allows `obj instanceof Provider`
    };

    namespace Workspace {
        /**
         * Interface for implementing Workspace.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Activates `self`. This happens when the workspace
             * becomes the active workspace in the main window.
             * @param parameters workspace-specific parameters
             * @virtual
             */
            vfunc_activate(parameters: (GLib.Variant | null)): void;

            /**
             * Deactivates `self`. This happens when the workspace
             * is switched away in the main window.
             * @virtual
             */
            vfunc_deactivate(): void;

            /**
             * Retrieves the icon of `self`. It is mandatory to implement
             * this.
             * @virtual
             */
            vfunc_get_icon(): Gio.Icon;

            /**
             * Retrieves the id of `self`. It is mandatory to implement
             * this.
             * @virtual
             */
            vfunc_get_id(): string;

            /**
             * Retrieves the priority of `self`. It is mandatory to implement
             * this.
             * @virtual
             */
            vfunc_get_priority(): number;

            /**
             * Retrieves the title of `self`. It is mandatory to implement
             * this.
             * @virtual
             */
            vfunc_get_title(): string;
        }


        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            icon: Gio.Icon;
            title: string;
        }
    }

    export interface WorkspaceNamespace {
        $gtype: GObject.GType<Workspace>;
        prototype: Workspace;
    }
    /**
     * @gir-type Interface
     */
    interface Workspace extends Gtk.Widget, Workspace.Interface {

        // Properties
        /**
         * @read-only
         */
        get icon(): Gio.Icon;

        /**
         * @read-only
         * @default null
         */
        get title(): string;

        // Methods
        /**
         * Activates `self`. This happens when the workspace
         * becomes the active workspace in the main window.
         * @param parameters workspace-specific parameters
         */
        activate(parameters: (GLib.Variant | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.activate
        activate(...args: never[]): any;

        /**
         * Deactivates `self`. This happens when the workspace
         * is switched away in the main window.
         */
        deactivate(): void;

        /**
         * Retrieves the icon of `self`. It is mandatory to implement
         * this.
         * @returns a {@link Gio.Icon}
         */
        get_icon(): Gio.Icon;

        /**
         * Retrieves the id of `self`. It is mandatory to implement
         * this.
         * @returns the id of `self`
         */
        get_id(): string;

        /**
         * Retrieves the priority of `self`. It is mandatory to implement
         * this.
         * @returns the priority of `self`
         */
        get_priority(): number;

        /**
         * Retrieves the title of `self`. It is mandatory to implement
         * this.
         * @returns the title of `self`
         */
        get_title(): string;
    }


    export const Workspace: WorkspaceNamespace & {
        new (): Workspace; // This allows `obj instanceof Workspace`
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

export default Gtd;

// END
