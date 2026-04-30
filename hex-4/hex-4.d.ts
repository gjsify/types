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
     * @gir-type Enum
     */
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
     * Specifies how data is to be grouped by the {@link Hex.Widget}.
     * @gir-type Enum
     */
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
     * Utility function to obtain the size of a {@link Gio.File}.
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
     * The `file` parameter is a valid {@link Gio.File} if you would like the buffer
     * pre-loaded, or `null` for an empty buffer.
     * @param plugin the name of the plugin, or `null`
     * @param file file to initialize the buffer with, or `null`
     * @returns a pointer to a valid implementation of a {@link Hex.Buffer} interface, pre-cast as type {@link Hex.Buffer}, or `null` if the operation failed. Starting with 4.2, if a specific backend is requested, and the system supports plugins as a whole but cannot load that specified plugin, `null` will be returned as though the operation failed, so as to customize the fallback scheme programmatically.
     */
    function buffer_util_new(plugin: string | null, file: Gio.File | null): Buffer;
    /**
     * Bitwise flags for search options that can be combined as desired.
     * @gir-type Flags
     * @since 4.2
     */
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
            /**
             * @signal
             * @run-first
             */
            'document-changed': (arg0: any | null, arg1: boolean) => void;
            /**
             * @signal
             * @run-first
             */
            'file-loaded': () => void;
            /**
             * @signal
             * @run-first
             */
            'file-name-changed': () => void;
            /**
             * @signal
             * @run-first
             */
            'file-read-started': () => void;
            /**
             * @signal
             * @since 4.6.1
             * @run-first
             */
            'file-save-started': () => void;
            /**
             * @signal
             * @run-first
             */
            'file-saved': () => void;
            /**
             * @signal
             * @run-first
             */
            redo: () => void;
            /**
             * @signal
             * @run-first
             */
            undo: () => void;
            /**
             * @signal
             * @run-first
             */
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
     * {@link Hex.Document} is an object which allows raw data to be loaded,
     * saved and manipulated, intended primarily to be used with the {@link Hex.Widget}
     * widget.
     * @gir-type Class
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

        /** @signal */
        connect<K extends keyof Document.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Document.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Document.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Document.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Document.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Document.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Determine whether a redo operation is possible.
         * @returns `true` if a redo operation is possible; `false` otherwise
         */
        can_redo(): boolean;
        /**
         * Determine whether an undo operation is possible.
         * @returns `true` if an undo operation is possible; `false` otherwise
         */
        can_undo(): boolean;
        /**
         * Convenience method to emit the `Hex.Document::document-changed`
         * signal. This method is mostly only useful for widgets utilizing
         * {@link Hex.Document}.
         * @param change_data pointer to a {@link Hex.ChangeData} structure
         * @param push_undo whether the undo stack should be pushed to
         */
        changed(change_data: any | null, push_undo: boolean): void;
        /**
         * @param what a pointer to the data to   compare to data within the {@link Hex.Document}
         * @param pos offset position of the {@link Hex.Document} data to compare with `what`
         * @returns 0 if the comparison is an exact match; otherwise, a non-zero   value comparable to `strcmp()`.
         */
        compare_data(what: Uint8Array | string, pos: bigint | number): number;
        /**
         * Full version of {@link Hex.Document.compare_data} to allow data
         * comparisons broader than byte-for-byte matches only. However, it is
         * less convenient than the above since it requires the caller to allocate
         * and free a {@link Hex.DocumentFindData} structure.
         * @param find_data a {@link Hex.DocumentFindData} structure
         * @param pos offset position of the {@link Hex.Document} data to compare with the   string contained in the `find_data` structure
         * @returns 0 if the comparison is an exact match; otherwise, a non-zero   value is returned.
         */
        compare_data_full(find_data: DocumentFindData, pos: bigint | number): number;
        /**
         * Delete data at `offset` of `length` within the buffer.
         * @param offset offset in bytes within the payload
         * @param len length in bytes of the data to be set
         * @param undoable whether the operation should be undoable
         */
        delete_data(offset: bigint | number, len: bigint | number, undoable: boolean): void;
        /**
         * Export the {@link Hex.Document} to HTML.
         * @param html_path path to the directory in which the HTML file will be saved
         * @param base_name the base name of the filename to be saved, without the .html   extension.
         * @param start starting offset byte of the payload in the range to save
         * @param end ending offset byte of the payload in the range to save
         * @param cpl columns per line
         * @param lpp lines per page
         * @param cpw characters per word (for grouping of nibbles)
         * @returns `true` if the operation was successful; `false` otherwise.
         */
        export_html(
            html_path: string,
            base_name: string,
            start: bigint | number,
            end: bigint | number,
            cpl: number,
            lpp: number,
            cpw: number,
        ): boolean;
        /**
         * Find a string backwards in a {@link Hex.Document}.
         *
         * This method will block. For a non-blocking version, use
         * {@link Hex.Document.find_backward_async}, which is also recommended
         * for GUI operations, as it, unlike this method, allows for easy passing-in
         * of found/not-found strings to be passed back to the interface.
         * @param start starting offset byte of the payload to commence the search
         * @param what a pointer to the data to   search within the {@link Hex.Document}
         * @returns `true` if `what` was found by the requested operation; `false`   otherwise.
         */
        find_backward(start: bigint | number, what: Uint8Array | string): [boolean, number];
        /**
         * Non-blocking version of {@link Hex.Document.find_backward}. This is the
         * function that should generally be used by a GUI client to find a string
         * backwards in a {@link Hex.Document}.
         * @param start starting offset byte of the payload to commence the search
         * @param what a pointer to the data to   search within the {@link Hex.Document}
         * @param found_msg message intended to be displayed by the client if the string   is found
         * @param not_found_msg message intended to be displayed by the client if the string   is not found
         * @param cancellable
         */
        find_backward_async(
            start: bigint | number,
            what: Uint8Array | string,
            found_msg: string,
            not_found_msg: string,
            cancellable: Gio.Cancellable | null,
        ): [globalThis.Promise<DocumentFindData>, number];
        /**
         * Non-blocking version of {@link Hex.Document.find_backward}. This is the
         * function that should generally be used by a GUI client to find a string
         * backwards in a {@link Hex.Document}.
         * @param start starting offset byte of the payload to commence the search
         * @param what a pointer to the data to   search within the {@link Hex.Document}
         * @param found_msg message intended to be displayed by the client if the string   is found
         * @param not_found_msg message intended to be displayed by the client if the string   is not found
         * @param cancellable
         * @param callback function to be called when the operation is   complete
         */
        find_backward_async(
            start: bigint | number,
            what: Uint8Array | string,
            found_msg: string,
            not_found_msg: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): number;
        /**
         * Non-blocking version of {@link Hex.Document.find_backward}. This is the
         * function that should generally be used by a GUI client to find a string
         * backwards in a {@link Hex.Document}.
         * @param start starting offset byte of the payload to commence the search
         * @param what a pointer to the data to   search within the {@link Hex.Document}
         * @param found_msg message intended to be displayed by the client if the string   is found
         * @param not_found_msg message intended to be displayed by the client if the string   is not found
         * @param cancellable
         * @param callback function to be called when the operation is   complete
         */
        find_backward_async(
            start: bigint | number,
            what: Uint8Array | string,
            found_msg: string,
            not_found_msg: string,
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): [globalThis.Promise<DocumentFindData> | void, number];
        /**
         * Full version of {@link Hex.Document.find_backward} which allows for
         * more flexibility than the above, which is only for a byte-by-byte exact
         * match. However, it is less convenient to call since the caller must
         * create and and free a {@link Hex.DocumentFindData} structure manually.
         *
         * This method will block. For a non-blocking version, use
         * {@link Hex.Document.find_backward_full_async}.
         * @param find_data a {@link Hex.DocumentFindData} structure
         * @returns `true` if the search string contained in `find_data` was found by   the requested operation; `false` otherwise.
         */
        find_backward_full(find_data: DocumentFindData): boolean;
        /**
         * Non-blocking version of {@link Hex.Document.find_backward_full}.
         * @param find_data a {@link Hex.DocumentFindData} structure
         * @param cancellable a {@link Gio.Cancellable}
         */
        find_backward_full_async(
            find_data: DocumentFindData,
            cancellable: Gio.Cancellable | null,
        ): globalThis.Promise<DocumentFindData>;
        /**
         * Non-blocking version of {@link Hex.Document.find_backward_full}.
         * @param find_data a {@link Hex.DocumentFindData} structure
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback function to be called when the operation is   complete
         */
        find_backward_full_async(
            find_data: DocumentFindData,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Non-blocking version of {@link Hex.Document.find_backward_full}.
         * @param find_data a {@link Hex.DocumentFindData} structure
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback function to be called when the operation is   complete
         */
        find_backward_full_async(
            find_data: DocumentFindData,
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<DocumentFindData> | void;
        /**
         * Obtain the result of a completed asynchronous find operation (forwards or
         * backwards).
         * @param result result of the task
         * @returns a pointer to a {@link Hex.DocumentFindData} structure, or `null`
         */
        find_finish(result: Gio.AsyncResult): DocumentFindData;
        /**
         * Find a string forwards in a {@link Hex.Document}.
         *
         * This method will block. For a non-blocking version, use
         * {@link Hex.Document.find_forward_async}, which is also recommended
         * for GUI operations, as it, unlike this method, allows for easy passing-in
         * of found/not-found strings to be passed back to the interface.
         * @param start starting offset byte of the payload to commence the search
         * @param what a pointer to the data to   search within the {@link Hex.Document}
         * @returns `true` if `what` was found by the requested operation; `false`   otherwise.
         */
        find_forward(start: bigint | number, what: Uint8Array | string): [boolean, number];
        /**
         * Non-blocking version of {@link Hex.Document.find_forward}. This is the
         * function that should generally be used by a GUI client to find a string
         * forwards in a {@link Hex.Document}.
         * @param start starting offset byte of the payload to commence the search
         * @param what a pointer to the data to   search within the {@link Hex.Document}
         * @param found_msg message intended to be displayed by the client if the string   is found
         * @param not_found_msg message intended to be displayed by the client if the string   is not found
         * @param cancellable
         */
        find_forward_async(
            start: bigint | number,
            what: Uint8Array | string,
            found_msg: string,
            not_found_msg: string,
            cancellable: Gio.Cancellable | null,
        ): [globalThis.Promise<DocumentFindData>, number];
        /**
         * Non-blocking version of {@link Hex.Document.find_forward}. This is the
         * function that should generally be used by a GUI client to find a string
         * forwards in a {@link Hex.Document}.
         * @param start starting offset byte of the payload to commence the search
         * @param what a pointer to the data to   search within the {@link Hex.Document}
         * @param found_msg message intended to be displayed by the client if the string   is found
         * @param not_found_msg message intended to be displayed by the client if the string   is not found
         * @param cancellable
         * @param callback function to be called when the operation is   complete
         */
        find_forward_async(
            start: bigint | number,
            what: Uint8Array | string,
            found_msg: string,
            not_found_msg: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): number;
        /**
         * Non-blocking version of {@link Hex.Document.find_forward}. This is the
         * function that should generally be used by a GUI client to find a string
         * forwards in a {@link Hex.Document}.
         * @param start starting offset byte of the payload to commence the search
         * @param what a pointer to the data to   search within the {@link Hex.Document}
         * @param found_msg message intended to be displayed by the client if the string   is found
         * @param not_found_msg message intended to be displayed by the client if the string   is not found
         * @param cancellable
         * @param callback function to be called when the operation is   complete
         */
        find_forward_async(
            start: bigint | number,
            what: Uint8Array | string,
            found_msg: string,
            not_found_msg: string,
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): [globalThis.Promise<DocumentFindData> | void, number];
        /**
         * Full version of {@link Hex.Document.find_forward} which allows for
         * more flexibility than the above, which is only for a byte-by-byte exact
         * match. However, it is less convenient to call since the caller must
         * create and and free a {@link Hex.DocumentFindData} structure manually.
         *
         * This method will block. For a non-blocking version, use
         * {@link Hex.Document.find_forward_async}.
         * @param find_data a {@link Hex.DocumentFindData} structure
         * @returns `true` if the search string contained in `find_data` was found by   the requested operation; `false` otherwise.
         */
        find_forward_full(find_data: DocumentFindData): boolean;
        /**
         * Non-blocking version of {@link Hex.Document.find_forward_full}.
         * @param find_data a {@link Hex.DocumentFindData} structure
         * @param cancellable a {@link Gio.Cancellable}
         */
        find_forward_full_async(
            find_data: DocumentFindData,
            cancellable: Gio.Cancellable | null,
        ): globalThis.Promise<DocumentFindData>;
        /**
         * Non-blocking version of {@link Hex.Document.find_forward_full}.
         * @param find_data a {@link Hex.DocumentFindData} structure
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback function to be called when the operation is   complete
         */
        find_forward_full_async(
            find_data: DocumentFindData,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Non-blocking version of {@link Hex.Document.find_forward_full}.
         * @param find_data a {@link Hex.DocumentFindData} structure
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback function to be called when the operation is   complete
         */
        find_forward_full_async(
            find_data: DocumentFindData,
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<DocumentFindData> | void;
        /**
         * Get the {@link Hex.Buffer} connected with the {@link Hex.Document}.
         * @returns a pointer to the {@link Hex.Buffer} connected with the {@link Hex.Document}, or `null` if no such interface is so connected.
         */
        get_buffer(): Buffer;
        /**
         * Get the {@link Gio.File} connected with the {@link Hex.Document}.
         * @returns the {@link Gio.File} connected with the {@link Hex.Document}, or `null` if no such object is so connected.
         */
        get_file(): Gio.File;
        get_file_size(): number;
        /**
         * Get the undo data at the top of the undo stack of a {@link Hex.Document}, if any.
         * @returns a pointer to the {@link Hex.ChangeData}   structure at the top of the undo stack, or `null`
         */
        get_undo_data(): ChangeData;
        /**
         * Method to check whether the {@link Hex.Document} has changed.
         * @returns `true` if the document has changed, `false` otherwise
         */
        has_changed(): boolean;
        /**
         * Read the {@link Gio.File} into the buffer connected to the {@link Hex.Document} object.
         *
         * This method is mostly a wrapper around {@link Hex.Buffer.read_async}
         * but will allow additional steps and appropriate signals to be emitted
         * applicable to the document object above and beyond the buffer, when
         * the operation completes.
         * @param cancellable a {@link Gio.Cancellable}
         */
        read_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Read the {@link Gio.File} into the buffer connected to the {@link Hex.Document} object.
         *
         * This method is mostly a wrapper around {@link Hex.Buffer.read_async}
         * but will allow additional steps and appropriate signals to be emitted
         * applicable to the document object above and beyond the buffer, when
         * the operation completes.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback function to be called when the operation is   complete
         */
        read_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Read the {@link Gio.File} into the buffer connected to the {@link Hex.Document} object.
         *
         * This method is mostly a wrapper around {@link Hex.Buffer.read_async}
         * but will allow additional steps and appropriate signals to be emitted
         * applicable to the document object above and beyond the buffer, when
         * the operation completes.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback function to be called when the operation is   complete
         */
        read_async(
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Obtain the result of a completed file read operation.
         *
         * This method is mostly a wrapper around {@link Hex.Buffer.read_finish}
         * but takes some additional steps and emits the appropriate signals
         * applicable to the document object above and beyond the buffer.
         *
         * This method is typically called from the {@link Gio.AsyncReadyCallback} function
         * passed to {@link Hex.Document.read_async} to obtain the result of the
         * operation.
         * @param result result of the task
         * @returns `true` if the operation was successful; `false` otherwise.
         */
        read_finish(result: Gio.AsyncResult): boolean;
        /**
         * Perform a redo operation.
         * @returns `true` if the operation was successful; `false` otherwise.
         */
        redo(): boolean;
        /**
         * Set the {@link Hex.Buffer} connected with the {@link Hex.Document}.
         * @param buf {@link Hex.Buffer}
         * @returns `true` if the operation was successful; `false` otherwise.
         */
        set_buffer(buf: Buffer): boolean;
        /**
         * Set a particular byte of a {@link Hex.Document} at position `offset` within
         * the payload.
         * @param val a character to set the byte as
         * @param offset offset in bytes within the payload
         * @param insert `true` if the operation should be insert mode, `false` if in   overwrite mode
         * @param undoable whether the operation should be undoable
         */
        set_byte(val: number, offset: bigint | number, insert: boolean, undoable: boolean): void;
        /**
         * A convenience wrapper for {@link Hex.Buffer.set_data}. See the
         * description of that method for details.
         * @param offset offset in bytes within the payload
         * @param rep_len amount of bytes to replace/overwrite (if any)
         * @param data a pointer to the data being   provided
         * @param undoable whether the operation should be undoable
         */
        set_data(offset: bigint | number, rep_len: bigint | number, data: Uint8Array | string, undoable: boolean): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
        /**
         * Set the file of a {@link Hex.Document} object by {@link Gio.File}.
         * @param file a {@link Gio.File} pointing to a valid file on the system
         * @returns `true` if the operation was successful; `false` otherwise.
         */
        set_file(file: Gio.File): boolean;
        /**
         * Set the maximum size of the {@link Hex.Document} undo stack.
         * @param max_undo the new maximum size of the undo stack
         */
        set_max_undo(max_undo: number): void;
        /**
         * Set a particular nibble of a {@link Hex.Document}.
         * @param val a character to set the nibble as
         * @param offset offset in bytes within the payload
         * @param lower_nibble `true` if targetting the lower nibble (2nd hex digit) `false`   if targetting the upper nibble (1st hex digit)
         * @param insert `true` if the operation should be insert mode, `false` if in   overwrite mode
         * @param undoable whether the operation should be undoable
         */
        set_nibble(
            val: number,
            offset: bigint | number,
            lower_nibble: boolean,
            insert: boolean,
            undoable: boolean,
        ): void;
        /**
         * Perform an undo operation.
         * @returns `true` if the operation was successful; `false` otherwise.
         */
        undo(): boolean;
        /**
         * Write the buffer to the pre-existing {@link Gio.File} connected to the {@link Hex.Document}
         * object. This can be used for a 'Save (in place)' operation.
         * @returns `true` if the operation was successful; `false` otherwise.
         */
        write(): boolean;
        /**
         * Write the buffer to the pre-existing {@link Gio.File} connected to the {@link Hex.Document}
         * object. This can be used for a 'Save (in place)' operation. This is the
         * non-blocking version of {@link Hex.Document.write}.
         *
         * Note that for both this method and
         * {@link Hex.Document.write_to_file_async},
         * {@link Hex.Document.write_finish} is the method to retrieve the return
         * value in your {@link Gio.AsyncReadyCallback} function.
         * @param cancellable a {@link Gio.Cancellable}
         */
        write_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Write the buffer to the pre-existing {@link Gio.File} connected to the {@link Hex.Document}
         * object. This can be used for a 'Save (in place)' operation. This is the
         * non-blocking version of {@link Hex.Document.write}.
         *
         * Note that for both this method and
         * {@link Hex.Document.write_to_file_async},
         * {@link Hex.Document.write_finish} is the method to retrieve the return
         * value in your {@link Gio.AsyncReadyCallback} function.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback function to be called when the operation is   complete
         */
        write_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Write the buffer to the pre-existing {@link Gio.File} connected to the {@link Hex.Document}
         * object. This can be used for a 'Save (in place)' operation. This is the
         * non-blocking version of {@link Hex.Document.write}.
         *
         * Note that for both this method and
         * {@link Hex.Document.write_to_file_async},
         * {@link Hex.Document.write_finish} is the method to retrieve the return
         * value in your {@link Gio.AsyncReadyCallback} function.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback function to be called when the operation is   complete
         */
        write_async(
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Obtain the result of a completed write-to-file operation.
         *
         * Currently, this method is mostly a wrapper around
         * {@link Hex.Buffer.write_to_file_finish}.
         *
         * This method is typically called from the {@link Gio.AsyncReadyCallback} function
         * passed to {@link Hex.Document.write_async} or
         * {@link Hex.Document.write_to_file_async} to obtain the result of the
         * operation.
         * @param result result of the task
         * @returns `true` if the operation was successful; `false` otherwise.
         */
        write_finish(result: Gio.AsyncResult): boolean;
        /**
         * Write the buffer to `file`. This can be used for a 'Save As' operation.
         *
         * This operation will block.
         * @param file {@link Gio.File} to be written to
         * @returns `true` if the operation was successful; `false` otherwise.
         */
        write_to_file(file: Gio.File): boolean;
        /**
         * Write the buffer to `file` asynchronously. This can be used for a 'Save As'
         * operation.  This is the non-blocking version of
         * {@link Hex.Document.write_to_file}.
         *
         * Note that for both this method and {@link Hex.Document.write_async},
         * {@link Hex.Document.write_finish} is the method to retrieve the return
         * value in your {@link Gio.AsyncReadyCallback} function.
         * @param file {@link Gio.File} to be written to
         * @param cancellable a {@link Gio.Cancellable}
         */
        write_to_file_async(file: Gio.File, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Write the buffer to `file` asynchronously. This can be used for a 'Save As'
         * operation.  This is the non-blocking version of
         * {@link Hex.Document.write_to_file}.
         *
         * Note that for both this method and {@link Hex.Document.write_async},
         * {@link Hex.Document.write_finish} is the method to retrieve the return
         * value in your {@link Gio.AsyncReadyCallback} function.
         * @param file {@link Gio.File} to be written to
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback function to be called when the operation is   complete
         */
        write_to_file_async(
            file: Gio.File,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Write the buffer to `file` asynchronously. This can be used for a 'Save As'
         * operation.  This is the non-blocking version of
         * {@link Hex.Document.write_to_file}.
         *
         * Note that for both this method and {@link Hex.Document.write_async},
         * {@link Hex.Document.write_finish} is the method to retrieve the return
         * value in your {@link Gio.AsyncReadyCallback} function.
         * @param file {@link Gio.File} to be written to
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback function to be called when the operation is   complete
         */
        write_to_file_async(
            file: Gio.File,
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
    }

    namespace Widget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * Emitted when a copy-to-clipboard operation has occurred.
             * @signal
             * @run-first
             */
            'copy-clipboard': () => void;
            /**
             * Emitted when the cursor has moved.
             * @signal
             * @run-first
             */
            'cursor-moved': () => void;
            /**
             * Emitted when a cut-to-clipboard operation has occurred.
             * @signal
             * @run-first
             */
            'cut-clipboard': () => void;
            /**
             * Emitted when data has changed.
             * @signal
             * @run-first
             */
            'data-changed': () => void;
            /**
             * @signal
             * @run-first
             */
            'draw-complete': () => void;
            /**
             * Emitted when a paste-from-clipboard operation has occurred.
             * @signal
             * @run-first
             */
            'paste-clipboard': () => void;
            'notify::display-control-characters': (pspec: GObject.ParamSpec) => void;
            'notify::document': (pspec: GObject.ParamSpec) => void;
            'notify::fade-zeroes': (pspec: GObject.ParamSpec) => void;
            'notify::insert-mode': (pspec: GObject.ParamSpec) => void;
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
            extends
                Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            display_control_characters: boolean;
            displayControlCharacters: boolean;
            document: Document;
            fade_zeroes: boolean;
            fadeZeroes: boolean;
            insert_mode: boolean;
            insertMode: boolean;
        }
    }

    /**
     * {@link Hex.Widget} is a widget which can display {@link Hex.Document} data as a
     * side-by-side representation of offets, hexadecimal nibbles, and ASCII
     * characters.
     * @gir-type Class
     */
    class Widget extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Widget>;

        // Properties

        /**
         * Whether ASCII control characters (ASCII characters 0x0 through
         * 0x1F) will be rendered as unicode symbols on the ASCII side of the
         * {@link Hex.Widget}.
         * @since 4.10
         * @default false
         */
        get display_control_characters(): boolean;
        set display_control_characters(val: boolean);
        /**
         * Whether ASCII control characters (ASCII characters 0x0 through
         * 0x1F) will be rendered as unicode symbols on the ASCII side of the
         * {@link Hex.Widget}.
         * @since 4.10
         * @default false
         */
        get displayControlCharacters(): boolean;
        set displayControlCharacters(val: boolean);
        /**
         * {@link Hex.Document} affiliated with and owned by the {@link Hex.Widget}.
         * @since 4.2
         * @construct-only
         */
        get document(): Document;
        /**
         * Whether zeroes (`00`) will be faded on the hex side of the {@link Hex.Widget}.
         * @since 4.8
         * @default false
         */
        get fade_zeroes(): boolean;
        set fade_zeroes(val: boolean);
        /**
         * Whether zeroes (`00`) will be faded on the hex side of the {@link Hex.Widget}.
         * @since 4.8
         * @default false
         */
        get fadeZeroes(): boolean;
        set fadeZeroes(val: boolean);
        /**
         * Whether insert-mode (versus overwrite) is currently engaged.
         * @since 4.10
         * @default false
         */
        get insert_mode(): boolean;
        set insert_mode(val: boolean);
        /**
         * Whether insert-mode (versus overwrite) is currently engaged.
         * @since 4.10
         * @default false
         */
        get insertMode(): boolean;
        set insertMode(val: boolean);

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

        static ['new'](document: Document): Widget;

        // Signals

        /** @signal */
        connect<K extends keyof Widget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Widget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Widget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Widget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a mark for a {@link Hex.Widget} object at the specified absolute `start` and
         * `end` offsets.
         *
         * Although the mark obtains an index within the widget internally, this index
         * numeral is private and is not retrievable. As a result, it is recommended
         * that applications wishing to manipulate marks retain the pointer returned by
         * this function, and implement their own tracking mechanism for the marks.
         * @param start The start offset of the mark
         * @param end The start offset of the mark
         * @param color A custom color to set for the mark, or `NULL` to use the   default
         * @returns A pointer to a {@link Hex.WidgetMark} object, owned by the {@link Hex.Widget}.
         */
        add_mark(start: bigint | number, end: bigint | number, color: Gdk.RGBA | null): WidgetMark;
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
         * Delete a {@link Hex.WidgetMark} from a {@link Hex.Widget}.
         * @param mark The {@link Hex.WidgetMark} to delete
         */
        delete_mark(mark: WidgetMark): void;
        /**
         * Delete the current selection. The resulting action will be undoable.
         */
        delete_selection(): void;
        /**
         * Get the {@link Gtk.Adjustment} of the {@link Hex.Widget}.
         * @returns {@link Gtk.Adjustment} of the widget.
         */
        get_adjustment(): Gtk.Adjustment;
        /**
         * Get the value of the byte at requested offset position.
         * @param offset index of the requested byte within the whole of the buffer
         */
        get_byte(offset: bigint | number): number;
        /**
         * Get the cursor position.
         * @returns the cursor position, as index within the whole of the buffer
         */
        get_cursor(): number;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.get_cursor
        get_cursor(...args: never[]): any;
        /**
         * Retrieve whether ASCII control characters are shown in the ASCII display.
         * @returns `TRUE` if control characters are displayed; `FALSE` otherwise
         */
        get_display_control_characters(): boolean;
        /**
         * Get the {@link Hex.Document} owned by the {@link Hex.Widget}.
         * @returns the {@link Hex.Document} owned by the {@link Hex.Widget}, or   `null`.
         */
        get_document(): Document;
        /**
         * Retrieve whether zeroes (`00`) are faded in the hex display.
         * @returns `TRUE` if zeroes are faded; `FALSE` otherwise
         */
        get_fade_zeroes(): boolean;
        /**
         * Get the group type of the data of the {@link Hex.Widget}.
         * @returns the group type of the data of the {@link Hex.Widget}, by   {@link Hex.WidgetGroupType}
         */
        get_group_type(): WidgetGroupType;
        /**
         * Get whether the widget is insert mode.
         * @returns `true` if the {@link Hex.Widget} is in insert mode; `false` if it is in   overwrite mode.
         */
        get_insert_mode(): boolean;
        /**
         * Get the current widget selection (highlights).
         * @returns `true` if there is an active selection (start and end are different), and `false` if there is no selection (start and end are the same).
         */
        get_selection(): [boolean, number, number];
        /**
         * Jump the cursor in the {@link Hex.Widget} specified to the mark in question.
         * @param mark The mark to jump to
         */
        goto_mark(mark: WidgetMark): void;
        /**
         * Insert an auto-highlight of a given search string.
         * @param search search   string to auto-highlight
         * @returns a newly created {@link Hex.WidgetAutoHighlight}   structure, owned by the {@link Hex.Widget}
         */
        insert_autohighlight(search: Uint8Array | string): WidgetAutoHighlight;
        /**
         * Full version of {@link Hex.Widget.insert_autohighlight} which allows
         * for specifying string match types for auto-highlights over and above
         * exact byte-for-byte string matches.
         * @param search search   string to auto-highlight
         * @param flags {@link Hex.SearchFlags} to specify match type
         * @returns a newly created {@link Hex.WidgetAutoHighlight}   structure, owned by the {@link Hex.Widget}
         */
        insert_autohighlight_full(search: Uint8Array | string, flags: SearchFlags): WidgetAutoHighlight;
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
        set_cursor(index: bigint | number): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.set_cursor
        set_cursor(...args: never[]): any;
        /**
         * Move the cursor by row and column, as absolute values.
         * @param col_x column to which the cursor should be moved
         * @param line_y line to which the cursor should be moved, by absolute value, within   the whole buffer (not just the currently visible part)
         */
        set_cursor_by_row_and_col(col_x: number, line_y: bigint | number): void;
        /**
         * Set whether ASCII control characters are shown in the ASCII display.
         * @param display Whether ASCII control characters should be displayed
         */
        set_display_control_characters(display: boolean): void;
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
         * Set the group type of the {@link Hex.Widget}.
         * @param gt group type
         */
        set_group_type(gt: WidgetGroupType): void;
        /**
         * Set whether the {@link Hex.Widget} should be in insert or overwrite mode.
         * @param insert `true` if insert mode should be enabled, `false` if overwrite mode   should be enabled
         */
        set_insert_mode(insert: boolean): void;
        /**
         * Set a custom color for a {@link Hex.WidgetMark} object.
         * @param mark The {@link Hex.WidgetMark} for which the custom color will be set
         * @param color The custom color to be set for the mark
         */
        set_mark_custom_color(mark: WidgetMark, color: Gdk.RGBA): void;
        /**
         * Move the cursor to upper nibble or lower nibble of the current byte.
         * @param lower_nibble `true` if the lower nibble of the current byte should be   selected; `false` for the upper nibble
         */
        set_nibble(lower_nibble: boolean): void;
        /**
         * Set the widget selection (highlights).
         * @param start starting offset by byte within the buffer
         * @param end ending offset by byte within the buffer
         */
        set_selection(start: bigint | number, end: bigint | number): void;
        /**
         * Set whether the ASCII column of the widget should be shown.
         * @param show `true` if the ASCII column should be shown, `false` if it should   be hidden
         */
        show_ascii_column(show: boolean): void;
        /**
         * Set whether the hex column of the widget should be shown.
         * @param show `true` if the hex column should be shown, `false` if it should   be hidden
         */
        show_hex_column(show: boolean): void;
        /**
         * Set whether the offsets column of the widget should be shown.
         * @param show `true` if the offsets column should be shown, `false` if it should   be hidden
         */
        show_offsets(show: boolean): void;
        /**
         * Set the current selection to zero. The resulting action will be undoable.
         */
        zero_selection(): void;
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
        get_accessible_id(): string | null;
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
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
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
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;
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
        vfunc_get_accessible_id(): string | null;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
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
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
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
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;
        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
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
     * {@link Hex.WidgetMark} is a {@link GObject.Object} which contains the metadata associated with a
     * mark for a hex document.
     *
     * To instantiate a {@link Hex.WidgetMark} object, use the {@link HexWidget.add_mark}
     * method.
     * @gir-type Class
     */
    class WidgetMark extends GObject.Object {
        static $gtype: GObject.GType<WidgetMark>;

        // Properties

        /**
         * The custom color of the {@link Hex.WidgetMark}, if applicable.
         */
        get custom_color(): Gdk.RGBA;
        set custom_color(val: Gdk.RGBA);
        /**
         * The custom color of the {@link Hex.WidgetMark}, if applicable.
         */
        get customColor(): Gdk.RGBA;
        set customColor(val: Gdk.RGBA);
        /**
         * Whether the {@link Hex.WidgetMark} has a custom color.
         * @read-only
         * @default false
         */
        get have_custom_color(): boolean;
        /**
         * Whether the {@link Hex.WidgetMark} has a custom color.
         * @read-only
         * @default false
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

        /** @signal */
        connect<K extends keyof WidgetMark.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetMark.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WidgetMark.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetMark.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WidgetMark.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetMark.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Obtains the custom color associated with a {@link Hex.WidgetMark} object, if
         * any.
         */
        get_custom_color(): Gdk.RGBA;
        /**
         * Obtains the end offset of a {@link Hex.WidgetMark}.
         * @returns The end offset of the mark
         */
        get_end_offset(): number;
        /**
         * Returns whether the {@link Hex.WidgetMark} has a custom color associated with it.
         * @returns `TRUE` if the {@link Hex.WidgetMark} has a custom color associated with   it; `FALSE` otherwise.
         */
        get_have_custom_color(): boolean;
        /**
         * Obtains the start offset of a {@link Hex.WidgetMark}.
         * @returns The start offset of the mark
         */
        get_start_offset(): number;
    }

    /**
     * @gir-type Alias
     */
    type BufferInterface = typeof Buffer;
    /**
     * A structure containing metadata about a change made to a
     * {@link Hex.Document}.
     * @gir-type Struct
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
        external_file_change: boolean;
    }

    /**
     * @gir-type Alias
     */
    type DocumentClass = typeof Document;
    /**
     * A structure containing metadata about a find operation in a
     * {@link Hex.Document}.
     * @gir-type Struct
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

        static ['new'](): DocumentFindData;

        // Methods

        /**
         * Copy a {@link Hex.DocumentFindData} structure. This function is likely
         * only useful for language bindings.
         * @returns a newly allocated {@link Hex.DocumentFindData} structure. Can be freed with   `g_free ()`.
         */
        copy(): DocumentFindData;
    }

    /**
     * A structure used to automatically highlight all visible occurrences
     * of a given string.
     * @gir-type Struct
     */
    abstract class WidgetAutoHighlight {
        static $gtype: GObject.GType<WidgetAutoHighlight>;
    }

    /**
     * @gir-type Alias
     */
    type WidgetClass = typeof Widget;
    /**
     * @gir-type Alias
     */
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
             * @virtual
             */
            vfunc_get_byte(offset: number): number;
            /**
             * Get data of a particular size at a particular offset within the buffer.
             * @param offset offset position of the data being requested within the payload
             * @param len size in bytes of the requested data
             * @virtual
             */
            vfunc_get_data(offset: number, len: number): string;
            /**
             * Get the size of the payload of the buffer, in bytes.
             * @virtual
             */
            vfunc_get_payload_size(): bigint | number;
            /**
             * Read the {@link Gio.File}, previously set, into the buffer. This method will block
             * until the operation is complete. For a non-blocking version, use
             * {@link Hex.Buffer.read_async}.
             * @virtual
             */
            vfunc_read(): boolean;
            /**
             * Read the {@link Gio.File}, previously set, into the buffer. This is the non-blocking
             * version of {@link Hex.Buffer.read}.
             * @param cancellable a {@link Gio.Cancellable}
             * @param callback function to be called when the operation is   complete
             * @virtual
             */
            vfunc_read_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Obtain the result of a completed file read operation.
             *
             * This method is typically called from the {@link Gio.AsyncReadyCallback} function
             * passed to {@link Hex.Buffer.read_async} to obtain the result of the
             * operation.
             * @param result result of the task
             * @virtual
             */
            vfunc_read_finish(result: Gio.AsyncResult): boolean;
            /**
             * Set data at of the buffer at a particular offset, replacing some, all or
             * none of the existing data in the buffer as desired.
             *
             * As `data` will be copied to the recipient, it should be freed with
             * `g_free()` after being passed to this method, to avoid a memory leak.
             * @param offset offset position of the data being requested within the payload
             * @param rep_len amount of bytes to replace/overwrite (if any)
             * @param data a pointer to   the data being provided
             * @virtual
             */
            vfunc_set_data(offset: number, rep_len: number, data: Uint8Array): boolean;
            /**
             * Set the {@link Gio.File} to be utilized by the buffer. Once it has been set,
             * you can read it into the buffer with {@link Hex.Buffer.read} or
             * {@link Hex.Buffer.read_async}.
             * @param file the file to be utilized by the buffer
             * @virtual
             */
            vfunc_set_file(file: Gio.File): boolean;
            /**
             * Write the buffer to the {@link Gio.File} specified. This operation will block. For a
             * non-blocking version, use {@link Hex.Buffer.write_to_file_async}.
             * @param file {@link Gio.File} to write to
             * @virtual
             */
            vfunc_write_to_file(file: Gio.File): boolean;
            /**
             * Write the buffer to the {@link Gio.File} specified. This is the non-blocking
             * version of {@link Hex.Buffer.write_to_file}.
             * @param file {@link Gio.File} to write to
             * @param cancellable a {@link Gio.Cancellable}
             * @param callback function to be called when the operation is   complete
             * @virtual
             */
            vfunc_write_to_file_async(
                file: Gio.File,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Obtain the result of a completed write-to-file operation.
             *
             * This method is typically called from the {@link Gio.AsyncReadyCallback} function
             * passed to {@link Hex.Buffer.write_to_file_async} to obtain the result of
             * the operation.
             * @param result result of the task
             * @virtual
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
         * Utility function to obtain the size of a {@link Gio.File}.
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
         * The `file` parameter is a valid {@link Gio.File} if you would like the buffer
         * pre-loaded, or `null` for an empty buffer.
         * @param plugin the name of the plugin, or `null`
         * @param file file to initialize the buffer with, or `null`
         */
        util_new(plugin: string | null, file: Gio.File | null): Buffer;
    }
    /**
     * {@link Hex.Buffer} is an interface which can be implemented to act as a buffer
     * for {@link Hex.Document} data. This allows for a {@link Hex.Document} to be
     * manipulated by different backends.
     *
     * Once a file has been loaded into the buffer, it can be read, written
     * to file, etc.
     *
     * {@link Hex.Buffer} makes reference to the "payload," which is the size of the
     * substantive data in the buffer, not counting items like padding, a gap,
     * etc. (all dependent upon the underlying implementation).
     *
     * Most clients who just want to create an spin up a {@link Hex.Buffer} object should
     * look to the {@link Hex.Buffer.util_new} utility function as a starting
     * point, and then manipulate the returned {@link Hex.Buffer} object with the methods
     * documented herein.
     * @gir-type Interface
     */
    interface Buffer extends GObject.Object, Buffer.Interface {
        // Properties

        /**
         * This property is the file (as {@link Gio.File}) being utilized by the buffer.
         */
        get file(): Gio.File;
        set file(val: Gio.File);

        // Methods

        /**
         * Get a single byte at a particular offset within the buffer.
         * @param offset offset position of the data being requested within the payload
         * @returns the 8-bit character located at `offset` within the payload, or '\0'
         */
        get_byte(offset: bigint | number): number;
        /**
         * Get data of a particular size at a particular offset within the buffer.
         * @param offset offset position of the data being requested within the payload
         * @param len size in bytes of the requested data
         * @returns a pointer to the data requested, to be freed with `g_free()`.
         */
        get_data(offset: bigint | number, len: bigint | number): string;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Get the size of the payload of the buffer, in bytes.
         * @returns the size in bytes of the payload of the buffer
         */
        get_payload_size(): number;
        /**
         * Read the {@link Gio.File}, previously set, into the buffer. This method will block
         * until the operation is complete. For a non-blocking version, use
         * {@link Hex.Buffer.read_async}.
         * @returns `true` if the operation was successful; `false` otherwise.
         */
        read(): boolean;
        /**
         * Read the {@link Gio.File}, previously set, into the buffer. This is the non-blocking
         * version of {@link Hex.Buffer.read}.
         * @param cancellable a {@link Gio.Cancellable}
         */
        read_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Read the {@link Gio.File}, previously set, into the buffer. This is the non-blocking
         * version of {@link Hex.Buffer.read}.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback function to be called when the operation is   complete
         */
        read_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Read the {@link Gio.File}, previously set, into the buffer. This is the non-blocking
         * version of {@link Hex.Buffer.read}.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback function to be called when the operation is   complete
         */
        read_async(
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Obtain the result of a completed file read operation.
         *
         * This method is typically called from the {@link Gio.AsyncReadyCallback} function
         * passed to {@link Hex.Buffer.read_async} to obtain the result of the
         * operation.
         * @param result result of the task
         * @returns `true` if the operation was successful; `false` otherwise.
         */
        read_finish(result: Gio.AsyncResult): boolean;
        /**
         * Set data at of the buffer at a particular offset, replacing some, all or
         * none of the existing data in the buffer as desired.
         *
         * As `data` will be copied to the recipient, it should be freed with
         * `g_free()` after being passed to this method, to avoid a memory leak.
         * @param offset offset position of the data being requested within the payload
         * @param rep_len amount of bytes to replace/overwrite (if any)
         * @param data a pointer to   the data being provided
         * @returns `true` if the operation was successful; `false` otherwise.
         */
        set_data(offset: bigint | number, rep_len: bigint | number, data: Uint8Array | string): boolean;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
        /**
         * Set the {@link Gio.File} to be utilized by the buffer. Once it has been set,
         * you can read it into the buffer with {@link Hex.Buffer.read} or
         * {@link Hex.Buffer.read_async}.
         * @param file the file to be utilized by the buffer
         * @returns `true` if the operation was successful; `false` otherwise.
         */
        set_file(file: Gio.File): boolean;
        /**
         * Write the buffer to the {@link Gio.File} specified. This operation will block. For a
         * non-blocking version, use {@link Hex.Buffer.write_to_file_async}.
         * @param file {@link Gio.File} to write to
         * @returns `true` if the operation was successful; `false` otherwise.
         */
        write_to_file(file: Gio.File): boolean;
        /**
         * Write the buffer to the {@link Gio.File} specified. This is the non-blocking
         * version of {@link Hex.Buffer.write_to_file}.
         * @param file {@link Gio.File} to write to
         * @param cancellable a {@link Gio.Cancellable}
         */
        write_to_file_async(file: Gio.File, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Write the buffer to the {@link Gio.File} specified. This is the non-blocking
         * version of {@link Hex.Buffer.write_to_file}.
         * @param file {@link Gio.File} to write to
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback function to be called when the operation is   complete
         */
        write_to_file_async(
            file: Gio.File,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Write the buffer to the {@link Gio.File} specified. This is the non-blocking
         * version of {@link Hex.Buffer.write_to_file}.
         * @param file {@link Gio.File} to write to
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback function to be called when the operation is   complete
         */
        write_to_file_async(
            file: Gio.File,
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Obtain the result of a completed write-to-file operation.
         *
         * This method is typically called from the {@link Gio.AsyncReadyCallback} function
         * passed to {@link Hex.Buffer.write_to_file_async} to obtain the result of
         * the operation.
         * @param result result of the task
         * @returns `true` if the operation was successful; `false` otherwise.
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
