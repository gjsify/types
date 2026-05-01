
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
import type GtkSource from '@girs/gtksource-5';
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

export namespace Workbench {

    /**
     * Workbench-0
     */


    /**
     * @gir-type Enum
     */
    export namespace RequestState {
        export const $gtype: GObject.GType<RequestState>;
    }

    /**
     * Enumeration of request states.
     * @gir-type Enum
     */
    enum RequestState {
        /**
         * the request state is unknown
         */
        UNKNOWN,
        /**
         * the request was cancelled
         */
        CANCELLED,
        /**
         * the request is complete
         */
        COMPLETE,
    }


    namespace CompletionProvider {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a request is made for completion proposals.
             * 
             * This is emitted in place of {@link GtkSource.CompletionProvider.populate}
             * (both synchronous and asynchronous), with a request object that allows
             * handlers to negotiate the completion of asynchronous requests manually.
             * @signal
             * @run-last
             */
            "completion-request": (arg0: CompletionRequest) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, GtkSource.CompletionProvider.ConstructorProps {

        }
    }

    /**
     * A base class for completion providers in Workbench.
     * @gir-type Class
     */
    class CompletionProvider extends GObject.Object implements GtkSource.CompletionProvider {
        static $gtype: GObject.GType<CompletionProvider>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CompletionProvider.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CompletionProvider.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof CompletionProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionProvider.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CompletionProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionProvider.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CompletionProvider.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompletionProvider.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * the class closure for {@link Workbench.CompletionProvider.SignalSignatures.completion_request | Workbench.CompletionProvider::completion-request}
         * @param request 
         * @virtual
         */
        vfunc_completion_request(request: CompletionRequest): void;

        /**
         * This function requests `proposal` to be activated by the
         * {@link GtkSource.CompletionProvider}.
         * 
         * What the provider does to activate the proposal is specific to that
         * provider. Many providers may choose to insert a {@link GtkSource.Snippet} with
         * edit points the user may cycle through.
         * 
         * See also: {@link Snippet}, {@link SnippetChunk}, {@link View.push_snippet}
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         */
        activate(context: GtkSource.CompletionContext, proposal: GtkSource.CompletionProposal): void;

        /**
         * This function requests that the {@link GtkSource.CompletionProvider} prepares
         * `cell` to display the contents of `proposal`.
         * 
         * Based on `cells` column type, you may want to display different information.
         * 
         * This allows for columns of information among completion proposals
         * resulting in better alignment of similar content (icons, return types,
         * method names, and parameter lists).
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @param cell a {@link GtkSource.CompletionCell}
         */
        display(context: GtkSource.CompletionContext, proposal: GtkSource.CompletionProposal, cell: GtkSource.CompletionCell): void;

        /**
         * This function should return the priority of `self` in `context`.
         * 
         * The priority is used to sort groups of completion proposals by
         * provider so that higher priority providers results are shown
         * above lower priority providers.
         * 
         * Higher value indicates higher priority.
         * @param context a {@link GtkSource.CompletionContext}
         */
        get_priority(context: GtkSource.CompletionContext): number;

        /**
         * Gets the title of the completion provider, if any.
         * 
         * Currently, titles are not displayed in the completion results, but may be
         * at some point in the future when non-`null`.
         * @returns a title for the provider or `null`
         */
        get_title(): (string | null);

        /**
         * This function is used to determine if a character inserted into the text
         * editor should cause a new completion request to be triggered.
         * 
         * An example would be period '.' which might indicate that the user wants
         * to complete method or field names of an object.
         * 
         * This method will only trigger when text is inserted into the {@link Gtk.TextBuffer}
         * while the completion list is visible and a proposal is selected. Incremental
         * key-presses (like shift, control, or alt) are not triggerable.
         * @param iter a {@link Gtk.TextIter}
         * @param ch a #gunichar of the character inserted
         */
        is_trigger(iter: Gtk.TextIter, ch: string): boolean;

        /**
         * This function is used to determine if a key typed by the user should
         * activate `proposal` (resulting in committing the text to the editor).
         * 
         * This is useful when using languages where convention may lead to less
         * typing by the user. One example may be the use of "." or "-" to expand
         * a field access in the C programming language.
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @param keyval a keyval such as {@link Gdk.KEY_period}
         * @param state a {@link Gdk.ModifierType} or 0
         */
        key_activates(context: GtkSource.CompletionContext, proposal: GtkSource.CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean;

        /**
         * Providers should return a list of alternates to `proposal` or `null` if
         * there are no alternates available.
         * 
         * This can be used by the completion view to allow the user to move laterally
         * through similar proposals, such as overrides of methods by the same name.
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @returns a {@link GLib.PtrArray} of {@link GtkSource.CompletionProposal} or `null`.
         */
        list_alternates(context: GtkSource.CompletionContext, proposal: GtkSource.CompletionProposal): (GtkSource.CompletionProposal[] | null);

        /**
         * Asynchronously requests that the provider populates the completion
         * results for `context`.
         * 
         * For providers that would like to populate a {@link Gio.ListModel} while those
         * results are displayed to the user,
         * {@link CompletionContext.set_proposals_for_provider} may be used
         * to reduce latency until the user sees results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        populate_async(context: GtkSource.CompletionContext, cancellable: (Gio.Cancellable | null)): globalThis.Promise<Gio.ListModel>;

        /**
         * Asynchronously requests that the provider populates the completion
         * results for `context`.
         * 
         * For providers that would like to populate a {@link Gio.ListModel} while those
         * results are displayed to the user,
         * {@link CompletionContext.set_proposals_for_provider} may be used
         * to reduce latency until the user sees results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a callback to execute upon completion
         */
        populate_async(context: GtkSource.CompletionContext, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously requests that the provider populates the completion
         * results for `context`.
         * 
         * For providers that would like to populate a {@link Gio.ListModel} while those
         * results are displayed to the user,
         * {@link CompletionContext.set_proposals_for_provider} may be used
         * to reduce latency until the user sees results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a callback to execute upon completion
         */
        populate_async(context: GtkSource.CompletionContext, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Gio.ListModel> | void);

        /**
         * Completes an asynchronous operation to populate a completion provider.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns a {@link Gio.ListModel} of {@link GtkSource.CompletionProposal}
         */
        populate_finish(result: Gio.AsyncResult): Gio.ListModel;

        /**
         * This function can be used to filter results previously provided to
         * the {@link CompletionContext} by the {@link GtkSource.CompletionProvider}.
         * 
         * This can happen as the user types additional text onto the word so
         * that previously matched items may be removed from the list instead of
         * generating new {@link Gio.ListModel} of results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param model a {@link Gio.ListModel}
         */
        refilter(context: GtkSource.CompletionContext, model: Gio.ListModel): void;

        /**
         * This function requests `proposal` to be activated by the
         * {@link GtkSource.CompletionProvider}.
         * 
         * What the provider does to activate the proposal is specific to that
         * provider. Many providers may choose to insert a {@link GtkSource.Snippet} with
         * edit points the user may cycle through.
         * 
         * See also: {@link Snippet}, {@link SnippetChunk}, {@link View.push_snippet}
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @virtual
         */
        vfunc_activate(context: GtkSource.CompletionContext, proposal: GtkSource.CompletionProposal): void;

        /**
         * This function requests that the {@link GtkSource.CompletionProvider} prepares
         * `cell` to display the contents of `proposal`.
         * 
         * Based on `cells` column type, you may want to display different information.
         * 
         * This allows for columns of information among completion proposals
         * resulting in better alignment of similar content (icons, return types,
         * method names, and parameter lists).
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @param cell a {@link GtkSource.CompletionCell}
         * @virtual
         */
        vfunc_display(context: GtkSource.CompletionContext, proposal: GtkSource.CompletionProposal, cell: GtkSource.CompletionCell): void;

        /**
         * This function should return the priority of `self` in `context`.
         * 
         * The priority is used to sort groups of completion proposals by
         * provider so that higher priority providers results are shown
         * above lower priority providers.
         * 
         * Higher value indicates higher priority.
         * @param context a {@link GtkSource.CompletionContext}
         * @virtual
         */
        vfunc_get_priority(context: GtkSource.CompletionContext): number;

        /**
         * Gets the title of the completion provider, if any.
         * 
         * Currently, titles are not displayed in the completion results, but may be
         * at some point in the future when non-`null`.
         * @virtual
         */
        vfunc_get_title(): (string | null);

        /**
         * This function is used to determine if a character inserted into the text
         * editor should cause a new completion request to be triggered.
         * 
         * An example would be period '.' which might indicate that the user wants
         * to complete method or field names of an object.
         * 
         * This method will only trigger when text is inserted into the {@link Gtk.TextBuffer}
         * while the completion list is visible and a proposal is selected. Incremental
         * key-presses (like shift, control, or alt) are not triggerable.
         * @param iter a {@link Gtk.TextIter}
         * @param ch a #gunichar of the character inserted
         * @virtual
         */
        vfunc_is_trigger(iter: Gtk.TextIter, ch: string): boolean;

        /**
         * This function is used to determine if a key typed by the user should
         * activate `proposal` (resulting in committing the text to the editor).
         * 
         * This is useful when using languages where convention may lead to less
         * typing by the user. One example may be the use of "." or "-" to expand
         * a field access in the C programming language.
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @param keyval a keyval such as {@link Gdk.KEY_period}
         * @param state a {@link Gdk.ModifierType} or 0
         * @virtual
         */
        vfunc_key_activates(context: GtkSource.CompletionContext, proposal: GtkSource.CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean;

        /**
         * Providers should return a list of alternates to `proposal` or `null` if
         * there are no alternates available.
         * 
         * This can be used by the completion view to allow the user to move laterally
         * through similar proposals, such as overrides of methods by the same name.
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @virtual
         */
        vfunc_list_alternates(context: GtkSource.CompletionContext, proposal: GtkSource.CompletionProposal): (GtkSource.CompletionProposal[] | null);

        /**
         * Asynchronously requests that the provider populates the completion
         * results for `context`.
         * 
         * For providers that would like to populate a {@link Gio.ListModel} while those
         * results are displayed to the user,
         * {@link CompletionContext.set_proposals_for_provider} may be used
         * to reduce latency until the user sees results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a callback to execute upon completion
         * @virtual
         */
        vfunc_populate_async(context: GtkSource.CompletionContext, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Completes an asynchronous operation to populate a completion provider.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @virtual
         */
        vfunc_populate_finish(result: Gio.AsyncResult): Gio.ListModel;

        /**
         * This function can be used to filter results previously provided to
         * the {@link CompletionContext} by the {@link GtkSource.CompletionProvider}.
         * 
         * This can happen as the user types additional text onto the word so
         * that previously matched items may be removed from the list instead of
         * generating new {@link Gio.ListModel} of results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param model a {@link Gio.ListModel}
         * @virtual
         */
        vfunc_refilter(context: GtkSource.CompletionContext, model: Gio.ListModel): void;
    }


    namespace CompletionRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::cancellable": (pspec: GObject.ParamSpec) => void;
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::item-type": (pspec: GObject.ParamSpec) => void;
            "notify::n-items": (pspec: GObject.ParamSpec) => void;
            "notify::provider": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            cancellable: (Gio.Cancellable | null);
            context: (GtkSource.CompletionContext | null);
            item_type: GObject.GTypeInput;
            itemType: GObject.GTypeInput;
            n_items: number;
            nItems: number;
            provider: (GtkSource.CompletionProvider | null);
            state: RequestState;
        }
    }

    /**
     * A helper object for {@link GtkSource.CompletionProvider}.
     * 
     * A {@link Workbench.CompletionRequest} instance represents an asynchronous request
     * for completion suggestions. Specifically, it is an object that can be used
     * to implement {@link GtkSource.CompletionProvider.populate_async} with more
     * flexibility for introspected languages.
     * 
     * Requests are created to populate completion proposals for emissions of
     * `Workbench.CompletionProvider::completion-request`. Handlers should
     * call {@link Workbench.CompletionRequest.add} and
     * {@link Workbench.CompletionRequest.splice} to compose the response, then
     * set {@link Workbench.CompletionRequest.complete} to `true`.
     * @gir-type Class
     */
    class CompletionRequest<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<CompletionRequest>;

        // Properties
        /**
         * @construct-only
         */
        get cancellable(): (Gio.Cancellable | null);

        /**
         * The {@link GtkSource.CompletionContext} of the request.
         * @construct-only
         */
        get context(): (GtkSource.CompletionContext | null);

        /**
         * The {@link GtkSource.CompletionProposal} type.
         * @read-only
         */
        get item_type(): GObject.GType;

        /**
         * The {@link GtkSource.CompletionProposal} type.
         * @read-only
         */
        get itemType(): GObject.GType;

        /**
         * The current number of proposals.
         * @read-only
         * @default 0
         */
        get n_items(): number;

        /**
         * The current number of proposals.
         * @read-only
         * @default 0
         */
        get nItems(): number;

        /**
         * The {@link GtkSource.CompletionProvider} of the request.
         * @construct-only
         */
        get provider(): (GtkSource.CompletionProvider | null);

        /**
         * The state of the request.
         * 
         * Handlers of the request should update the state of the request by calling
         * {@link Workbench.CompletionRequest.state_changed}.
         * 
         * If a handler does not change the state, the value is guaranteed to change
         * to `WORKBENCH_REQUEST_STATE_CANCELLED` before finalization.
         * @read-only
         * @default Workbench.RequestState.UNKNOWN
         */
        get state(): RequestState;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CompletionRequest.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CompletionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof CompletionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CompletionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CompletionRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompletionRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Add a {@link GObject.Object} to `request`.
         * @param proposal a {@link GtkSource.CompletionProposal}
         */
        add(proposal: GtkSource.CompletionProposal): void;

        /**
         * Get the cancellable for the request.
         * @returns a {@link Gio.Cancellable}
         */
        get_cancellable(): (Gio.Cancellable | null);

        /**
         * Get the completion context for the request.
         * @returns a {@link GtkSource.CompletionContext}
         */
        get_context(): (GtkSource.CompletionContext | null);

        /**
         * Get the completion provider for the request.
         * @returns a {@link GtkSource.CompletionProvider}
         */
        get_provider(): (GtkSource.CompletionProvider | null);

        /**
         * Get the state of the request.
         * @returns a {@link Workbench.RequestState}
         */
        get_state(): RequestState;

        /**
         * Changes `request` by removing `n_removals` items and adding `n_additions`.
         * 
         * The combined value of `position` and `n_removals` must be less than or equal
         * to the length of the list at the time this function is called.
         * @param position the position at which to make the change
         * @param n_removals the number of items to remove
         * @param additions the items to add
         */
        splice(position: number, n_removals: number, additions: GtkSource.CompletionProposal[]): void;

        /**
         * Update the state of the request.
         * 
         * If `state` is `WORKBENCH_REQUEST_STATE_CANCELLED`, this will also call
         * {@link Gio.Cancellable.cancel} on the request's cancellable object.
         * @param state a {@link Workbench.RequestState}
         */
        state_changed(state: RequestState): void;

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


    namespace PreviewWindow {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
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
        interface ConstructorProps extends Gtk.Window.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Native.ConstructorProps, Gtk.Root.ConstructorProps, Gtk.ShortcutManager.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class PreviewWindow extends Gtk.Window implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager {
        static $gtype: GObject.GType<PreviewWindow>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreviewWindow.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PreviewWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): PreviewWindow;

        // Signals
        /** @signal */
        connect<K extends keyof PreviewWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreviewWindow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PreviewWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreviewWindow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PreviewWindow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PreviewWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_content(): Gtk.Widget;

        /**
         * @param content 
         */
        set_content(content: Gtk.Widget): void;

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
         * Returns the display that this {@link Gtk.Root} is on.
         * @returns the display of `root`
         */
        get_display(): Gdk.Display;

        /**
         * Retrieves the current focused widget within the root.
         * 
         * Note that this is the widget that would have the focus
         * if the root is active; if the root is not focused then
         * `gtk_widget_has_focus (widget)` will be `false` for the
         * widget.
         * @returns the currently focused widget
         */
        get_focus(): (Gtk.Widget | null);

        /**
         * If `focus` is not the current focus widget, and is focusable, sets
         * it as the focus widget for the root.
         * 
         * If `focus` is `null`, unsets the focus widget for the root.
         * 
         * To set the focus to a particular widget in the root, it is usually
         * more convenient to use {@link Gtk.Widget.grab_focus} instead of
         * this function.
         * @param focus widget to be the new focus widget, or `null`    to unset the focus widget
         */
        set_focus(focus: (Gtk.Widget | null)): void;

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


    /**
     * @gir-type Alias
     */
    type CompletionProviderClass = typeof CompletionProvider;

    /**
     * @gir-type Alias
     */
    type CompletionRequestClass = typeof CompletionRequest;

    /**
     * @gir-type Alias
     */
    type PreviewWindowClass = typeof PreviewWindow;

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

export default Workbench;

// END
