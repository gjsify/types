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

export namespace Hex {
    /**
     * Hex-4
     */

    /**
     * Type of change operation.
     */

    /**
     * Type of change operation.
     */
    export namespace ChangeType {
        export const $gtype: GObject.GType<ChangeType>;
    }

    enum ChangeType {
        /**
         * the change is a string
         */
        STRING,
        /**
         * the change is a single byte/character
         */
        BYTE,
    }
    /**
     * Specifies how data is to be grouped by the #HexWidget.
     */

    /**
     * Specifies how data is to be grouped by the #HexWidget.
     */
    export namespace WidgetGroupType {
        export const $gtype: GObject.GType<WidgetGroupType>;
    }

    enum WidgetGroupType {
        /**
         * group data by byte (8-bit)
         */
        BYTE,
        /**
         * group data by word (16-bit)
         */
        WORD,
        /**
         * group data by long (32-bit)
         */
        LONG,
        /**
         * group data by quadword (64-bit)
         */
        QUAD,
    }
    /**
     * Utility function to obtain the size of a #GFile.
     *
     * Since 4.6, this function will return an unspecified negative value if the
     * file size was unable to be obtained, as opposed to 0 as it previously did.
     * This is to distinguish between valid zero-length files and files for which
     * the size was not able to be obtained (eg, if it was unreadable). In the
     * future, these negative values may be defined as specific enums which have a
     * more specific meaning. But presently and going forward, testing for a
     * negative value is sufficient to determine that the file size was
     * unobtainable.
     * @param file file to obtain size of
     * @returns the size of the file, in bytes
     */
    function buffer_util_get_file_size(file: Gio.File): number;
    /**
     * Utility function to create an on object which implements the HexBuffer
     * interface.
     *
     * The `plugin` parameter will be the unique part of the plugin file name (eg,
     * if the file name is libhex-buffer-mmap.so, you would specify "mmap"). If
     * `NULL` is passed, the fallback (presently the "malloc" backend, but this is
     * an implementation detail and may be subject to change) will be used.
     *
     * The `file` parameter is a valid #GFile if you would like the buffer
     * pre-loaded, or %NULL for an empty buffer.
     * @param plugin the name of the plugin, or %NULL
     * @param file file to initialize the buffer with, or %NULL
     * @returns a pointer to a valid implementation of a [iface@Hex.Buffer] interface, pre-cast as type #HexBuffer, or %NULL if the operation failed. Starting with 4.2, if a specific backend is requested, and the system supports plugins as a whole but cannot load that specified plugin, %NULL will be returned as though the operation failed, so as to customize the fallback scheme programmatically.
     */
    function buffer_util_new(plugin?: string | null, file?: Gio.File | null): Buffer;
    /**
     * Bitwise flags for search options that can be combined as desired.
     */

    /**
     * Bitwise flags for search options that can be combined as desired.
     */
    export namespace SearchFlags {
        export const $gtype: GObject.GType<SearchFlags>;
    }

    enum SearchFlags {
        /**
         * no search flags (byte-for-byte match)
         */
        NONE,
        /**
         * regular expression search
         */
        REGEX,
        /**
         * case-insensitive search
         */
        IGNORE_CASE,
    }
    namespace Document {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'document-changed': (arg0: any | null, arg1: boolean) => void;
            'file-loaded': () => void;
            'file-name-changed': () => void;
            'file-read-started': () => void;
            'file-save-started': () => void;
            'file-saved': () => void;
            redo: () => void;
            undo: () => void;
            'undo-stack-forget': () => void;
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            file: Gio.File;
        }
    }

    /**
     * `HexDocument` is an object which allows raw data to be loaded,
     * saved and manipulated, intended primarily to be used with the `HexWidget`
     * widget.
     */
    class Document extends GObject.Object {
        static $gtype: GObject.GType<Document>;

        // Properties

        get buffer(): Buffer;
        set buffer(val: Buffer);
        get file(): Gio.File;
        set file(val: Gio.File);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Document.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Document.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Document;

        static new_from_file(file: Gio.File): Document;

        // Signals

        connect<K extends keyof Document.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Document.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Document.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Document.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Document.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Document.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Determine whether a redo operation is possible.
         * @returns %TRUE if a redo operation is possible; %FALSE otherwise
         */
        can_redo(): boolean;
        /**
         * Determine whether an undo operation is possible.
         * @returns %TRUE if an undo operation is possible; %FALSE otherwise
         */
        can_undo(): boolean;
        /**
         * Convenience method to emit the [signal`Hex`.Document::document-changed]
         * signal. This method is mostly only useful for widgets utilizing
         * #HexDocument.
         * @param change_data pointer to a [struct@Hex.ChangeData] structure
         * @param push_undo whether the undo stack should be pushed to
         */
        changed(change_data: any | null, push_undo: boolean): void;
        compare_data(what: Uint8Array | string, pos: number): number;
        /**
         * Full version of [method`Hex`.Document.compare_data] to allow data
         * comparisons broader than byte-for-byte matches only. However, it is
         * less convenient than the above since it requires the caller to allocate
         * and free a #HexDocumentFindData structure.
         * @param find_data a #HexDocumentFindData structure
         * @param pos offset position of the #HexDocument data to compare with the   string contained in the `find_data` structure
         * @returns 0 if the comparison is an exact match; otherwise, a non-zero   value is returned.
         */
        compare_data_full(find_data: DocumentFindData, pos: number): number;
        /**
         * Delete data at `offset` of `length` within the buffer.
         * @param offset offset in bytes within the payload
         * @param len length in bytes of the data to be set
         * @param undoable whether the operation should be undoable
         */
        delete_data(offset: number, len: number, undoable: boolean): void;
        /**
         * Export the #HexDocument to HTML.
         * @param html_path path to the directory in which the HTML file will be saved
         * @param base_name the base name of the filename to be saved, without the .html   extension.
         * @param start starting offset byte of the payload in the range to save
         * @param end ending offset byte of the payload in the range to save
         * @param cpl columns per line
         * @param lpp lines per page
         * @param cpw characters per word (for grouping of nibbles)
         * @returns %TRUE if the operation was successful; %FALSE otherwise.
         */
        export_html(
            html_path: string,
            base_name: string,
            start: number,
            end: number,
            cpl: number,
            lpp: number,
            cpw: number,
        ): boolean;
        /**
         * Find a string backwards in a #HexDocument.
         *
         * This method will block. For a non-blocking version, use
         * [method`Hex`.Document.find_backward_async], which is also recommended
         * for GUI operations, as it, unlike this method, allows for easy passing-in
         * of found/not-found strings to be passed back to the interface.
         * @param start starting offset byte of the payload to commence the search
         * @param what a pointer to the data to   search within the #HexDocument
         * @returns %TRUE if @what was found by the requested operation; %FALSE   otherwise.
         */
        find_backward(start: number, what: Uint8Array | string): [boolean, number];
        /**
         * Non-blocking version of [method`Hex`.Document.find_backward]. This is the
         * function that should generally be used by a GUI client to find a string
         * backwards in a #HexDocument.
         * @param start starting offset byte of the payload to commence the search
         * @param what a pointer to the data to   search within the #HexDocument
         * @param found_msg message intended to be displayed by the client if the string   is found
         * @param not_found_msg message intended to be displayed by the client if the string   is not found
         * @param cancellable
         * @param callback function to be called when the operation is   complete
         */
        find_backward_async(
            start: number,
            what: Uint8Array | string,
            found_msg: string,
            not_found_msg: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): number;
        /**
         * Full version of [method`Hex`.Document.find_backward] which allows for
         * more flexibility than the above, which is only for a byte-by-byte exact
         * match. However, it is less convenient to call since the caller must
         * create and and free a #HexDocumentFindData structure manually.
         *
         * This method will block. For a non-blocking version, use
         * [method`Hex`.Document.find_backward_full_async].
         * @param find_data a #HexDocumentFindData structure
         * @returns %TRUE if the search string contained in `find_data` was found by   the requested operation; %FALSE otherwise.
         */
        find_backward_full(find_data: DocumentFindData): boolean;
        /**
         * Non-blocking version of [method`Hex`.Document.find_backward_full].
         * @param find_data a #HexDocumentFindData structure
         * @param cancellable a #GCancellable
         * @param callback function to be called when the operation is   complete
         */
        find_backward_full_async(
            find_data: DocumentFindData,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Obtain the result of a completed asynchronous find operation (forwards or
         * backwards).
         * @param result result of the task
         * @returns a pointer to a [struct@Hex.DocumentFindData] structure, or %NULL
         */
        find_finish(result: Gio.AsyncResult): DocumentFindData;
        /**
         * Find a string forwards in a #HexDocument.
         *
         * This method will block. For a non-blocking version, use
         * [method`Hex`.Document.find_forward_async], which is also recommended
         * for GUI operations, as it, unlike this method, allows for easy passing-in
         * of found/not-found strings to be passed back to the interface.
         * @param start starting offset byte of the payload to commence the search
         * @param what a pointer to the data to   search within the #HexDocument
         * @returns %TRUE if @what was found by the requested operation; %FALSE   otherwise.
         */
        find_forward(start: number, what: Uint8Array | string): [boolean, number];
        /**
         * Non-blocking version of [method`Hex`.Document.find_forward]. This is the
         * function that should generally be used by a GUI client to find a string
         * forwards in a #HexDocument.
         * @param start starting offset byte of the payload to commence the search
         * @param what a pointer to the data to   search within the #HexDocument
         * @param found_msg message intended to be displayed by the client if the string   is found
         * @param not_found_msg message intended to be displayed by the client if the string   is not found
         * @param cancellable
         * @param callback function to be called when the operation is   complete
         */
        find_forward_async(
            start: number,
            what: Uint8Array | string,
            found_msg: string,
            not_found_msg: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): number;
        /**
         * Full version of [method`Hex`.Document.find_forward] which allows for
         * more flexibility than the above, which is only for a byte-by-byte exact
         * match. However, it is less convenient to call since the caller must
         * create and and free a #HexDocumentFindData structure manually.
         *
         * This method will block. For a non-blocking version, use
         * [method`Hex`.Document.find_forward_async].
         * @param find_data a #HexDocumentFindData structure
         * @returns %TRUE if the search string contained in `find_data` was found by   the requested operation; %FALSE otherwise.
         */
        find_forward_full(find_data: DocumentFindData): boolean;
        /**
         * Non-blocking version of [method`Hex`.Document.find_forward_full].
         * @param find_data a #HexDocumentFindData structure
         * @param cancellable a #GCancellable
         * @param callback function to be called when the operation is   complete
         */
        find_forward_full_async(
            find_data: DocumentFindData,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Get the [iface`Hex`.Buffer] connected with the #HexDocument.
         * @returns a pointer to the [iface@Hex.Buffer] connected with the #HexDocument, or %NULL if no such interface is so connected.
         */
        get_buffer(): Buffer;
        /**
         * Get the #GFile connected with the #HexDocument.
         * @returns the #GFile connected with the #HexDocument, or %NULL if no such object is so connected.
         */
        get_file(): Gio.File;
        get_file_size(): number;
        /**
         * Get the undo data at the top of the undo stack of a #HexDocument, if any.
         * @returns a pointer to the [struct@Hex.ChangeData]   structure at the top of the undo stack, or %NULL
         */
        get_undo_data(): ChangeData;
        /**
         * Method to check whether the #HexDocument has changed.
         * @returns %TRUE if the document has changed, %FALSE otherwise
         */
        has_changed(): boolean;
        /**
         * Read the #GFile into the buffer connected to the #HexDocument object.
         *
         * This method is mostly a wrapper around [method`Hex`.Buffer.read_async]
         * but will allow additional steps and appropriate signals to be emitted
         * applicable to the document object above and beyond the buffer, when
         * the operation completes.
         * @param cancellable a #GCancellable
         */
        read_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Read the #GFile into the buffer connected to the #HexDocument object.
         *
         * This method is mostly a wrapper around [method`Hex`.Buffer.read_async]
         * but will allow additional steps and appropriate signals to be emitted
         * applicable to the document object above and beyond the buffer, when
         * the operation completes.
         * @param cancellable a #GCancellable
         * @param callback function to be called when the operation is   complete
         */
        read_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Read the #GFile into the buffer connected to the #HexDocument object.
         *
         * This method is mostly a wrapper around [method`Hex`.Buffer.read_async]
         * but will allow additional steps and appropriate signals to be emitted
         * applicable to the document object above and beyond the buffer, when
         * the operation completes.
         * @param cancellable a #GCancellable
         * @param callback function to be called when the operation is   complete
         */
        read_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Obtain the result of a completed file read operation.
         *
         * This method is mostly a wrapper around [method`Hex`.Buffer.read_finish]
         * but takes some additional steps and emits the appropriate signals
         * applicable to the document object above and beyond the buffer.
         *
         * This method is typically called from the #GAsyncReadyCallback function
         * passed to [method`Hex`.Document.read_async] to obtain the result of the
         * operation.
         * @param result result of the task
         * @returns %TRUE if the operation was successful; %FALSE otherwise.
         */
        read_finish(result: Gio.AsyncResult): boolean;
        /**
         * Perform a redo operation.
         * @returns %TRUE if the operation was successful; %FALSE otherwise.
         */
        redo(): boolean;
        /**
         * Set the [iface`Hex`.Buffer] connected with the #HexDocument.
         * @param buf [iface@Hex.Buffer]
         * @returns %TRUE if the operation was successful; %FALSE otherwise.
         */
        set_buffer(buf: Buffer): boolean;
        /**
         * Set a particular byte of a #HexDocument at position `offset` within
         * the payload.
         * @param val a character to set the byte as
         * @param offset offset in bytes within the payload
         * @param insert %TRUE if the operation should be insert mode, %FALSE if in   overwrite mode
         * @param undoable whether the operation should be undoable
         */
        set_byte(val: number, offset: number, insert: boolean, undoable: boolean): void;
        /**
         * A convenience wrapper for [method`Hex`.Buffer.set_data]. See the
         * description of that method for details.
         * @param offset offset in bytes within the payload
         * @param rep_len amount of bytes to replace/overwrite (if any)
         * @param data a pointer to the data being   provided
         * @param undoable whether the operation should be undoable
         */
        set_data(offset: number, rep_len: number, data: Uint8Array | string, undoable: boolean): void;
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
        /**
         * Set the file of a [class`Hex`.Document] object by #GFile.
         * @param file a #GFile pointing to a valid file on the system
         * @returns %TRUE if the operation was successful; %FALSE otherwise.
         */
        set_file(file: Gio.File): boolean;
        /**
         * Set the maximum size of the #HexDocument undo stack.
         * @param max_undo the new maximum size of the undo stack
         */
        set_max_undo(max_undo: number): void;
        /**
         * Set a particular nibble of a #HexDocument.
         * @param val a character to set the nibble as
         * @param offset offset in bytes within the payload
         * @param lower_nibble %TRUE if targetting the lower nibble (2nd hex digit) %FALSE   if targetting the upper nibble (1st hex digit)
         * @param insert %TRUE if the operation should be insert mode, %FALSE if in   overwrite mode
         * @param undoable whether the operation should be undoable
         */
        set_nibble(val: number, offset: number, lower_nibble: boolean, insert: boolean, undoable: boolean): void;
        /**
         * Perform an undo operation.
         * @returns %TRUE if the operation was successful; %FALSE otherwise.
         */
        undo(): boolean;
        /**
         * Write the buffer to the pre-existing #GFile connected to the #HexDocument
         * object. This can be used for a 'Save (in place)' operation.
         * @returns %TRUE if the operation was successful; %FALSE otherwise.
         */
        write(): boolean;
        /**
         * Write the buffer to the pre-existing #GFile connected to the #HexDocument
         * object. This can be used for a 'Save (in place)' operation. This is the
         * non-blocking version of [method`Hex`.Document.write].
         *
         * Note that for both this method and
         * [method`Hex`.Document.write_to_file_async],
         * [method`Hex`.Document.write_finish] is the method to retrieve the return
         * value in your #GAsyncReadyCallback function.
         * @param cancellable a #GCancellable
         */
        write_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Write the buffer to the pre-existing #GFile connected to the #HexDocument
         * object. This can be used for a 'Save (in place)' operation. This is the
         * non-blocking version of [method`Hex`.Document.write].
         *
         * Note that for both this method and
         * [method`Hex`.Document.write_to_file_async],
         * [method`Hex`.Document.write_finish] is the method to retrieve the return
         * value in your #GAsyncReadyCallback function.
         * @param cancellable a #GCancellable
         * @param callback function to be called when the operation is   complete
         */
        write_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Write the buffer to the pre-existing #GFile connected to the #HexDocument
         * object. This can be used for a 'Save (in place)' operation. This is the
         * non-blocking version of [method`Hex`.Document.write].
         *
         * Note that for both this method and
         * [method`Hex`.Document.write_to_file_async],
         * [method`Hex`.Document.write_finish] is the method to retrieve the return
         * value in your #GAsyncReadyCallback function.
         * @param cancellable a #GCancellable
         * @param callback function to be called when the operation is   complete
         */
        write_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Obtain the result of a completed write-to-file operation.
         *
         * Currently, this method is mostly a wrapper around
         * [method`Hex`.Buffer.write_to_file_finish].
         *
         * This method is typically called from the #GAsyncReadyCallback function
         * passed to [method`Hex`.Document.write_async] or
         * [method`Hex`.Document.write_to_file_async] to obtain the result of the
         * operation.
         * @param result result of the task
         * @returns %TRUE if the operation was successful; %FALSE otherwise.
         */
        write_finish(result: Gio.AsyncResult): boolean;
        /**
         * Write the buffer to `file`. This can be used for a 'Save As' operation.
         *
         * This operation will block.
         * @param file #GFile to be written to
         * @returns %TRUE if the operation was successful; %FALSE otherwise.
         */
        write_to_file(file: Gio.File): boolean;
        /**
         * Write the buffer to `file` asynchronously. This can be used for a 'Save As'
         * operation.  This is the non-blocking version of
         * [method`Hex`.Document.write_to_file].
         *
         * Note that for both this method and [method`Hex`.Document.write_async],
         * [method`Hex`.Document.write_finish] is the method to retrieve the return
         * value in your #GAsyncReadyCallback function.
         * @param file #GFile to be written to
         * @param cancellable a #GCancellable
         * @param callback function to be called when the operation is   complete
         */
        write_to_file_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
    }

    namespace Widget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'copy-clipboard': () => void;
            'cursor-moved': () => void;
            'cut-clipboard': () => void;
            'data-changed': () => void;
            'draw-complete': () => void;
            'paste-clipboard': () => void;
            'notify::document': (pspec: GObject.ParamSpec) => void;
            'notify::fade-zeroes': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            document: Document;
            fade_zeroes: boolean;
            fadeZeroes: boolean;
        }
    }

    /**
     * #HexWidget is a widget which can display #HexDocument data as a
     * side-by-side representation of offets, hexadecimal nibbles, and ASCII
     * characters.
     */
    class Widget extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Widget>;

        // Properties

        /**
         * `HexDocument` affiliated with and owned by the `HexWidget`.
         */
        get document(): Document;
        /**
         * Whether zeroes (`00`) will be faded on the hex side of the `HexWidget`.
         */
        get fade_zeroes(): boolean;
        set fade_zeroes(val: boolean);
        /**
         * Whether zeroes (`00`) will be faded on the hex side of the `HexWidget`.
         */
        get fadeZeroes(): boolean;
        set fadeZeroes(val: boolean);

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

        static ['new'](owner: Document): Widget;

        // Signals

        connect<K extends keyof Widget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Widget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Widget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Widget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a mark for a `HexWidget` object at the specified absolute `start` and
         * `end` offsets.
         *
         * Although the mark obtains an index within the widget internally, this index
         * numeral is private and is not retrievable. As a result, it is recommended
         * that applications wishing to manipulate marks retain the pointer returned by
         * this function, and implement their own tracking mechanism for the marks.
         * @param start The start offset of the mark
         * @param end The start offset of the mark
         * @param color A custom color to set for the mark, or `NULL` to use the   default
         * @returns A pointer to a `HexWidgetMark` object, owned by the `HexWidget`.
         */
        add_mark(start: number, end: number, color?: Gdk.RGBA | null): WidgetMark;
        /**
         * Clear the selection (if any). Any autohighlights will remain intact.
         */
        clear_selection(): void;
        /**
         * Copy selection to clipboard.
         */
        copy_to_clipboard(): void;
        /**
         * Cut selection to clipboard.
         */
        cut_to_clipboard(): void;
        /**
         * Delete the requested autohighlight.
         * @param ahl the autohighlight to be deleted
         */
        delete_autohighlight(ahl: WidgetAutoHighlight): void;
        /**
         * Delete a `HexWidgetMark` from a `HexWidget`.
         * @param mark The `HexWidgetMark` to delete
         */
        delete_mark(mark: WidgetMark): void;
        /**
         * Delete the current selection. The resulting action will be undoable.
         */
        delete_selection(): void;
        /**
         * Get the [class`Gtk`.Adjustment] of the #HexWidget.
         * @returns #GtkAdjustment of the widget.
         */
        get_adjustment(): Gtk.Adjustment;
        /**
         * Get the value of the byte at requested offset position.
         * @param offset index of the requested byte within the whole of the buffer
         */
        get_byte(offset: number): number;
        /**
         * Get the cursor position.
         * @returns the cursor position, as index within the whole of the buffer
         */
        get_cursor(): number;
        // Conflicted with Gtk.Widget.get_cursor
        get_cursor(...args: never[]): any;
        /**
         * Get the [class`Hex`.Document] owned by the #HexWidget.
         * @returns the #HexDocument owned by the #HexWidget, or   %NULL.
         */
        get_document(): Document;
        /**
         * Retrieve whether zeroes (`00`) are faded in the hex display.
         * @returns `TRUE` if zeroes are faded; `FALSE` otherwise
         */
        get_fade_zeroes(): boolean;
        /**
         * Get the group type of the data of the #HexWidget.
         * @returns the group type of the data of the #HexWidget, by   [enum@Hex.WidgetGroupType]
         */
        get_group_type(): WidgetGroupType;
        /**
         * Get whether the widget is insert mode.
         * @returns %TRUE if the #HexWidget is in insert mode; %FALSE if it is in   overwrite mode.
         */
        get_insert_mode(): boolean;
        /**
         * Get the current widget selection (highlights).
         * @returns %TRUE if the operation was successful; %FALSE otherwise.
         */
        get_selection(): [boolean, number, number];
        /**
         * Jump the cursor in the `HexWidget` specified to the mark in question.
         * @param mark The mark to jump to
         */
        goto_mark(mark: WidgetMark): void;
        /**
         * Insert an auto-highlight of a given search string.
         * @param search search   string to auto-highlight
         * @returns a newly created [struct@Hex.WidgetAutoHighlight]   structure, owned by the `HexWidget`
         */
        insert_autohighlight(search: Uint8Array | string): WidgetAutoHighlight;
        /**
         * Full version of [method`Hex`.Widget.insert_autohighlight] which allows
         * for specifying string match types for auto-highlights over and above
         * exact byte-for-byte string matches.
         * @param search search   string to auto-highlight
         * @param flags #HexSearchFlags to specify match type
         * @returns a newly created [struct@Hex.WidgetAutoHighlight]   structure, owned by the `HexWidget`
         */
        insert_autohighlight_full(search: Uint8Array | string, flags: SearchFlags | null): WidgetAutoHighlight;
        /**
         * Paste clipboard data to widget at position of cursor.
         *
         * Since 4.6, the behaviour of this method has changed. With 4.4 and earlier,
         * paste operations always inserted data into the payload, even if insert mode
         * was disabled.
         *
         * Commencing in 4.6, if insert mode is not enabled, data will be overwritten
         * by default with a paste operation, and possibly truncated in the event the
         * payload is not large enough to absorb the paste data. This is to avoid
         * increasing the payload size of a hex document when insert mode is disabled.
         */
        paste_from_clipboard(): void;
        /**
         * Move cursor to `index`.
         * @param index where the cursor should be moved to, as offset by byte within   the buffer
         */
        set_cursor(index: number): void;
        // Conflicted with Gtk.Widget.set_cursor
        set_cursor(...args: never[]): any;
        /**
         * Move the cursor by row and column, as absolute values.
         * @param col_x column to which the cursor should be moved
         * @param line_y line to which the cursor should be moved, by absolute value, within   the whole buffer (not just the currently visible part)
         */
        set_cursor_by_row_and_col(col_x: number, line_y: number): void;
        /**
         * Set whether zeroes (`00`) are faded in the hex display.
         * @param fade Whether zeroes (`00` in the hex display) should be faded
         */
        set_fade_zeroes(fade: boolean): void;
        /**
         * Set the geometry of the widget to specified dimensions.
         * @param cpl columns per line which should be displayed, or 0 for default
         * @param vis_lines number of lines which should be displayed, or 0 for default
         */
        set_geometry(cpl: number, vis_lines: number): void;
        /**
         * Set the group type of the #HexWidget.
         * @param gt group type
         */
        set_group_type(gt: WidgetGroupType | null): void;
        /**
         * Set whether the #HexWidget should be in insert or overwrite mode.
         * @param insert %TRUE if insert mode should be enabled, %FALSE if overwrite mode   should be enabled
         */
        set_insert_mode(insert: boolean): void;
        /**
         * Set a custom color for a `HexWidgetMark` object.
         * @param mark The `HexWidgetMark` for which the custom color will be set
         * @param color The custom color to be set for the mark
         */
        set_mark_custom_color(mark: WidgetMark, color: Gdk.RGBA): void;
        /**
         * Move the cursor to upper nibble or lower nibble of the current byte.
         * @param lower_nibble %TRUE if the lower nibble of the current byte should be   selected; %FALSE for the upper nibble
         */
        set_nibble(lower_nibble: boolean): void;
        /**
         * Set the widget selection (highlights).
         * @param start starting offset by byte within the buffer
         * @param end ending offset by byte within the buffer
         */
        set_selection(start: number, end: number): void;
        /**
         * Set whether the ASCII column of the widget should be shown.
         * @param show %TRUE if the ASCII column should be shown, %FALSE if it should   be hidden
         */
        show_ascii_column(show: boolean): void;
        /**
         * Set whether the hex column of the widget should be shown.
         * @param show %TRUE if the hex column should be shown, %FALSE if it should   be hidden
         */
        show_hex_column(show: boolean): void;
        /**
         * Set whether the offsets column of the widget should be shown.
         * @param show %TRUE if the offsets column should be shown, %FALSE if it should   be hidden
         */
        show_offsets(show: boolean): void;
        /**
         * Set the current selection to zero. The resulting action will be undoable.
         */
        zero_selection(): void;

        // Inherited properties
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        // Inherited methods
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
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority | null): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
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
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty | null): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation | null): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState | null): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the `GtkAccessible`
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by `GtkAccessible` implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the implementation for the given accessible object.
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * `GtkBuilder` sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a `GtkBuilder`
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a `GtkBuilder`
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a `GtkBuilder`
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. `GtkWindow` sets
         *  the `GtkWidget:visible` property here.
         * @param builder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, g_object_set_property()
         *  is used by default. `GtkWindow` implements this to delay showing itself
         *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the `GtkBuilder` UI definition.
         *   `GtkWidget` stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         */
        vfunc_set_id(id: string): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WidgetMark {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::custom-color': (pspec: GObject.ParamSpec) => void;
            'notify::have-custom-color': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            custom_color: Gdk.RGBA;
            customColor: Gdk.RGBA;
            have_custom_color: boolean;
            haveCustomColor: boolean;
        }
    }

    /**
     * `HexWidgetMark` is a `GObject` which contains the metadata associated with a
     * mark for a hex document.
     *
     * To instantiate a `HexWidgetMark` object, use the [method`HexWidget`.add_mark]
     * method.
     */
    class WidgetMark extends GObject.Object {
        static $gtype: GObject.GType<WidgetMark>;

        // Properties

        /**
         * The custom color of the `HexWidgetMark`, if applicable.
         */
        get custom_color(): Gdk.RGBA;
        set custom_color(val: Gdk.RGBA);
        /**
         * The custom color of the `HexWidgetMark`, if applicable.
         */
        get customColor(): Gdk.RGBA;
        set customColor(val: Gdk.RGBA);
        /**
         * Whether the `HexWidgetMark` has a custom color.
         */
        get have_custom_color(): boolean;
        /**
         * Whether the `HexWidgetMark` has a custom color.
         */
        get haveCustomColor(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetMark.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetMark.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof WidgetMark.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetMark.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetMark.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetMark.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetMark.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetMark.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Obtains the custom color associated with a `HexWidgetMark` object, if
         * any.
         */
        get_custom_color(): Gdk.RGBA;
        /**
         * Obtains the end offset of a `HexWidgetMark`.
         * @returns The end offset of the mark
         */
        get_end_offset(): number;
        /**
         * Returns whether the `HexWidgetMark` has a custom color associated with it.
         * @returns `TRUE` if the `HexWidgetMark` has a custom color associated with   it; `FALSE` otherwise.
         */
        get_have_custom_color(): boolean;
        /**
         * Obtains the start offset of a `HexWidgetMark`.
         * @returns The start offset of the mark
         */
        get_start_offset(): number;
    }

    type BufferInterface = typeof Buffer;
    /**
     * A structure containing metadata about a change made to a
     * [class`Hex`.Document].
     */
    class ChangeData {
        static $gtype: GObject.GType<ChangeData>;

        // Fields

        start: number;
        end: number;
        rep_len: number;
        lower_nibble: boolean;
        insert: boolean;
        type: ChangeType;
        v_string: string;
        v_byte: number;

        // Constructors

        _init(...args: any[]): void;
    }

    type DocumentClass = typeof Document;
    /**
     * A structure containing metadata about a find operation in a
     * [class`Hex`.Document].
     */
    class DocumentFindData {
        static $gtype: GObject.GType<DocumentFindData>;

        // Fields

        found: boolean;
        start: number;
        what: Uint8Array;
        len: number;
        flags: SearchFlags;
        offset: number;
        found_len: number;
        found_msg: string;
        not_found_msg: string;

        // Constructors

        constructor(
            properties?: Partial<{
                found: boolean;
                start: number;
                what: Uint8Array;
                len: number;
                flags: SearchFlags;
                offset: number;
                found_len: number;
                found_msg: string;
                not_found_msg: string;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): DocumentFindData;

        // Methods

        /**
         * Copy a [struct`Hex`.DocumentFindData] structure. This function is likely
         * only useful for language bindings.
         * @returns a newly allocated #HexDocumentFindData structure. Can be freed with   `g_free ()`.
         */
        copy(): DocumentFindData;
    }

    /**
     * A structure used to automatically highlight all visible occurrences
     * of a given string.
     */
    abstract class WidgetAutoHighlight {
        static $gtype: GObject.GType<WidgetAutoHighlight>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetClass = typeof Widget;
    type WidgetMarkClass = typeof WidgetMark;
    namespace Buffer {
        /**
         * Interface for implementing Buffer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Get a single byte at a particular offset within the buffer.
             * @param offset offset position of the data being requested within the payload
             */
            vfunc_get_byte(offset: number): number;
            /**
             * Get data of a particular size at a particular offset within the buffer.
             * @param offset offset position of the data being requested within the payload
             * @param len size in bytes of the requested data
             */
            vfunc_get_data(offset: number, len: number): string;
            /**
             * Get the size of the payload of the buffer, in bytes.
             */
            vfunc_get_payload_size(): number;
            /**
             * Read the #GFile, previously set, into the buffer. This method will block
             * until the operation is complete. For a non-blocking version, use
             * [method`Hex`.Buffer.read_async].
             */
            vfunc_read(): boolean;
            /**
             * Read the #GFile, previously set, into the buffer. This is the non-blocking
             * version of [method`Hex`.Buffer.read].
             * @param cancellable a #GCancellable
             * @param callback function to be called when the operation is   complete
             */
            vfunc_read_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Obtain the result of a completed file read operation.
             *
             * This method is typically called from the #GAsyncReadyCallback function
             * passed to [method`Hex`.Buffer.read_async] to obtain the result of the
             * operation.
             * @param result result of the task
             */
            vfunc_read_finish(result: Gio.AsyncResult): boolean;
            /**
             * Set data at of the buffer at a particular offset, replacing some, all or
             * none of the existing data in the buffer as desired.
             *
             * As `data` will be copied to the recipient, it should be freed with
             * g_free() after being passed to this method, to avoid a memory leak.
             * @param offset offset position of the data being requested within the payload
             * @param rep_len amount of bytes to replace/overwrite (if any)
             * @param data a pointer to   the data being provided
             */
            vfunc_set_data(offset: number, rep_len: number, data: Uint8Array | string): boolean;
            /**
             * Set the #GFile to be utilized by the buffer. Once it has been set,
             * you can read it into the buffer with [method`Hex`.Buffer.read] or
             * [method`Hex`.Buffer.read_async].
             * @param file the file to be utilized by the buffer
             */
            vfunc_set_file(file: Gio.File): boolean;
            /**
             * Write the buffer to the #GFile specified. This operation will block. For a
             * non-blocking version, use [method`Hex`.Buffer.write_to_file_async].
             * @param file #GFile to write to
             */
            vfunc_write_to_file(file: Gio.File): boolean;
            /**
             * Write the buffer to the #GFile specified. This is the non-blocking
             * version of [method`Hex`.Buffer.write_to_file].
             * @param file #GFile to write to
             * @param cancellable a #GCancellable
             * @param callback function to be called when the operation is   complete
             */
            vfunc_write_to_file_async(
                file: Gio.File,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Obtain the result of a completed write-to-file operation.
             *
             * This method is typically called from the #GAsyncReadyCallback function
             * passed to [method`Hex`.Buffer.write_to_file_async] to obtain the result of
             * the operation.
             * @param result result of the task
             */
            vfunc_write_to_file_finish(result: Gio.AsyncResult): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            file: Gio.File;
        }
    }

    export interface BufferNamespace {
        $gtype: GObject.GType<Buffer>;
        prototype: Buffer;

        /**
         * Utility function to obtain the size of a #GFile.
         *
         * Since 4.6, this function will return an unspecified negative value if the
         * file size was unable to be obtained, as opposed to 0 as it previously did.
         * This is to distinguish between valid zero-length files and files for which
         * the size was not able to be obtained (eg, if it was unreadable). In the
         * future, these negative values may be defined as specific enums which have a
         * more specific meaning. But presently and going forward, testing for a
         * negative value is sufficient to determine that the file size was
         * unobtainable.
         * @param file file to obtain size of
         */
        util_get_file_size(file: Gio.File): number;
        /**
         * Utility function to create an on object which implements the HexBuffer
         * interface.
         *
         * The `plugin` parameter will be the unique part of the plugin file name (eg,
         * if the file name is libhex-buffer-mmap.so, you would specify "mmap"). If
         * `NULL` is passed, the fallback (presently the "malloc" backend, but this is
         * an implementation detail and may be subject to change) will be used.
         *
         * The `file` parameter is a valid #GFile if you would like the buffer
         * pre-loaded, or %NULL for an empty buffer.
         * @param plugin the name of the plugin, or %NULL
         * @param file file to initialize the buffer with, or %NULL
         */
        util_new(plugin?: string | null, file?: Gio.File | null): Buffer;
    }
    interface Buffer extends GObject.Object, Buffer.Interface {
        // Properties

        /**
         * This property is the file (as #GFile) being utilized by the buffer.
         */
        get file(): Gio.File;
        set file(val: Gio.File);

        // Methods

        /**
         * Get a single byte at a particular offset within the buffer.
         * @param offset offset position of the data being requested within the payload
         * @returns the 8-bit character located at `offset` within the payload, or '\0'
         */
        get_byte(offset: number): number;
        /**
         * Get data of a particular size at a particular offset within the buffer.
         * @param offset offset position of the data being requested within the payload
         * @param len size in bytes of the requested data
         * @returns a pointer to the data requested, to be freed with g_free().
         */
        get_data(offset: number, len: number): string;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Get the size of the payload of the buffer, in bytes.
         * @returns the size in bytes of the payload of the buffer
         */
        get_payload_size(): number;
        /**
         * Read the #GFile, previously set, into the buffer. This method will block
         * until the operation is complete. For a non-blocking version, use
         * [method`Hex`.Buffer.read_async].
         * @returns %TRUE if the operation was successful; %FALSE otherwise.
         */
        read(): boolean;
        /**
         * Read the #GFile, previously set, into the buffer. This is the non-blocking
         * version of [method`Hex`.Buffer.read].
         * @param cancellable a #GCancellable
         */
        read_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Read the #GFile, previously set, into the buffer. This is the non-blocking
         * version of [method`Hex`.Buffer.read].
         * @param cancellable a #GCancellable
         * @param callback function to be called when the operation is   complete
         */
        read_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Read the #GFile, previously set, into the buffer. This is the non-blocking
         * version of [method`Hex`.Buffer.read].
         * @param cancellable a #GCancellable
         * @param callback function to be called when the operation is   complete
         */
        read_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Obtain the result of a completed file read operation.
         *
         * This method is typically called from the #GAsyncReadyCallback function
         * passed to [method`Hex`.Buffer.read_async] to obtain the result of the
         * operation.
         * @param result result of the task
         * @returns %TRUE if the operation was successful; %FALSE otherwise.
         */
        read_finish(result: Gio.AsyncResult): boolean;
        /**
         * Set data at of the buffer at a particular offset, replacing some, all or
         * none of the existing data in the buffer as desired.
         *
         * As `data` will be copied to the recipient, it should be freed with
         * g_free() after being passed to this method, to avoid a memory leak.
         * @param offset offset position of the data being requested within the payload
         * @param rep_len amount of bytes to replace/overwrite (if any)
         * @param data a pointer to   the data being provided
         * @returns %TRUE if the operation was successful; %FALSE otherwise.
         */
        set_data(offset: number, rep_len: number, data: Uint8Array | string): boolean;
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
        /**
         * Set the #GFile to be utilized by the buffer. Once it has been set,
         * you can read it into the buffer with [method`Hex`.Buffer.read] or
         * [method`Hex`.Buffer.read_async].
         * @param file the file to be utilized by the buffer
         * @returns %TRUE if the operation was successful; %FALSE otherwise.
         */
        set_file(file: Gio.File): boolean;
        /**
         * Write the buffer to the #GFile specified. This operation will block. For a
         * non-blocking version, use [method`Hex`.Buffer.write_to_file_async].
         * @param file #GFile to write to
         * @returns %TRUE if the operation was successful; %FALSE otherwise.
         */
        write_to_file(file: Gio.File): boolean;
        /**
         * Write the buffer to the #GFile specified. This is the non-blocking
         * version of [method`Hex`.Buffer.write_to_file].
         * @param file #GFile to write to
         * @param cancellable a #GCancellable
         */
        write_to_file_async(file: Gio.File, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Write the buffer to the #GFile specified. This is the non-blocking
         * version of [method`Hex`.Buffer.write_to_file].
         * @param file #GFile to write to
         * @param cancellable a #GCancellable
         * @param callback function to be called when the operation is   complete
         */
        write_to_file_async(
            file: Gio.File,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Write the buffer to the #GFile specified. This is the non-blocking
         * version of [method`Hex`.Buffer.write_to_file].
         * @param file #GFile to write to
         * @param cancellable a #GCancellable
         * @param callback function to be called when the operation is   complete
         */
        write_to_file_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Obtain the result of a completed write-to-file operation.
         *
         * This method is typically called from the #GAsyncReadyCallback function
         * passed to [method`Hex`.Buffer.write_to_file_async] to obtain the result of
         * the operation.
         * @param result result of the task
         * @returns %TRUE if the operation was successful; %FALSE otherwise.
         */
        write_to_file_finish(result: Gio.AsyncResult): boolean;
    }

    export const Buffer: BufferNamespace & {
        new (): Buffer; // This allows `obj instanceof Buffer`
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

export default Hex;

// END
