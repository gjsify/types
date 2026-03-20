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
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Gfls {
    /**
     * Gfls-1
     */

    /**
     * An error code used with the `GFLS_LOADER_ERROR` domain.
     * @gir-type Struct
     */
    class LoaderError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * The content is too big.
         */
        static TOO_BIG: number;
        /**
         * The content is not a valid UTF-8 string. Used by
         *   basic loaders that don't support charset conversion.
         */
        static NOT_UTF8: number;
        /**
         * The content contains a very long line.
         */
        static HAS_VERY_LONG_LINE: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * Free the resources allocated by Gfls. For example it unrefs the singleton
     * objects.
     *
     * It is not mandatory to call this function, it's just to be friendlier to
     * memory debugging tools. This function is meant to be called at the end of
     * `main()`. It can be called several times.
     * @since 0.1
     */
    function finalize(): void;
    /**
     * Initializes the Gfls library (e.g. for the internationalization).
     *
     * This function can be called several times, but is meant to be called at the
     * beginning of `main()`, before any other Gfls function call.
     * @since 0.1
     */
    function init(): void;
    /**
     * This function starts a read operation on `input_stream`. It is meant to be
     * used as the only read operation on `input_stream`, to get a {@link GLib.Bytes} as a
     * result, with `max_size` as the provided maximum number of bytes to read.
     *
     * `expected_size` is typically a {@link Gio.File} size as returned by
     * `g_file_info_get_size()`. But note that in that case, the returned {@link GLib.Bytes} may
     * contain a different number of bytes than what was expected (the
     * TOC/TOU problem: time of check to time of use). `expected_size` is used as an
     * indication to how much memory to allocate initially.
     *
     * See the {@link Gio.AsyncResult} documentation to know how to use this function.
     * @param input_stream a {@link Gio.InputStream}.
     * @param expected_size the expected number of bytes contained in `input_stream`.
     * @param max_size the maximum number of bytes to read.
     * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
     * @since 0.1
     */
    function input_stream_read_async(
        input_stream: Gio.InputStream,
        expected_size: number,
        max_size: number,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
    ): globalThis.Promise<GLib.Bytes>;
    /**
     * This function starts a read operation on `input_stream`. It is meant to be
     * used as the only read operation on `input_stream`, to get a {@link GLib.Bytes} as a
     * result, with `max_size` as the provided maximum number of bytes to read.
     *
     * `expected_size` is typically a {@link Gio.File} size as returned by
     * `g_file_info_get_size()`. But note that in that case, the returned {@link GLib.Bytes} may
     * contain a different number of bytes than what was expected (the
     * TOC/TOU problem: time of check to time of use). `expected_size` is used as an
     * indication to how much memory to allocate initially.
     *
     * See the {@link Gio.AsyncResult} documentation to know how to use this function.
     * @param input_stream a {@link Gio.InputStream}.
     * @param expected_size the expected number of bytes contained in `input_stream`.
     * @param max_size the maximum number of bytes to read.
     * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
     * @param callback a {@link Gio.AsyncReadyCallback} to call when the operation   is finished.
     * @since 0.1
     */
    function input_stream_read_async(
        input_stream: Gio.InputStream,
        expected_size: number,
        max_size: number,
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Gio.InputStream> | null,
    ): void;
    /**
     * This function starts a read operation on `input_stream`. It is meant to be
     * used as the only read operation on `input_stream`, to get a {@link GLib.Bytes} as a
     * result, with `max_size` as the provided maximum number of bytes to read.
     *
     * `expected_size` is typically a {@link Gio.File} size as returned by
     * `g_file_info_get_size()`. But note that in that case, the returned {@link GLib.Bytes} may
     * contain a different number of bytes than what was expected (the
     * TOC/TOU problem: time of check to time of use). `expected_size` is used as an
     * indication to how much memory to allocate initially.
     *
     * See the {@link Gio.AsyncResult} documentation to know how to use this function.
     * @param input_stream a {@link Gio.InputStream}.
     * @param expected_size the expected number of bytes contained in `input_stream`.
     * @param max_size the maximum number of bytes to read.
     * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
     * @param callback a {@link Gio.AsyncReadyCallback} to call when the operation   is finished.
     * @since 0.1
     */
    function input_stream_read_async(
        input_stream: Gio.InputStream,
        expected_size: number,
        max_size: number,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Gio.InputStream> | null,
    ): globalThis.Promise<GLib.Bytes> | void;
    /**
     * Finishes an operation started with `gfls_input_stream_read_async()`.
     *
     * If `is_truncated` is set to `true`, it is not an error (`error` is not set), and
     * a {@link GLib.Bytes} is returned. However, since `gfls_input_stream_read_async()` is meant
     * to be used as the only read operation on `input_stream`, it is an undefined
     * behavior if you try to read more content from `input_stream`.
     *
     * The data contained in the resulting {@link GLib.Bytes} is always zero-terminated, but
     * this is not included in the {@link GLib.Bytes} length. The resulting {@link GLib.Bytes} should be
     * freed with `g_bytes_unref()` when no longer in use.
     * @param input_stream a {@link Gio.InputStream}.
     * @param result a {@link Gio.AsyncResult}.
     * @param is_truncated will be set to `true` if the `input_stream` contains more data   to be read, but the maximum number of bytes to read has been reached.
     * @returns a {@link GLib.Bytes}, or `null` on error.
     * @since 0.1
     */
    function input_stream_read_finish(
        input_stream: Gio.InputStream,
        result: Gio.AsyncResult,
        is_truncated: boolean,
    ): GLib.Bytes;
    /**
     * Starts a basic file loading operation.
     *
     * If the `file` content is not a valid UTF-8 string, or if the `max_size` or
     * `max_n_bytes_per_line` conditions are not satisfied, an error will be returned
     * without the file content.
     *
     * See the {@link Gio.AsyncResult} documentation to know how to use this function.
     * @param file a {@link Gio.File}.
     * @param max_size the maximum allowed number of bytes in total.
     * @param max_n_bytes_per_line the maximum allowed number of bytes per line, as per   `gfls_utf8_find_very_long_line()`.
     * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
     * @since 0.1
     */
    function loader_basic_load_async(
        file: Gio.File,
        max_size: number,
        max_n_bytes_per_line: number,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
    ): globalThis.Promise<GLib.Bytes>;
    /**
     * Starts a basic file loading operation.
     *
     * If the `file` content is not a valid UTF-8 string, or if the `max_size` or
     * `max_n_bytes_per_line` conditions are not satisfied, an error will be returned
     * without the file content.
     *
     * See the {@link Gio.AsyncResult} documentation to know how to use this function.
     * @param file a {@link Gio.File}.
     * @param max_size the maximum allowed number of bytes in total.
     * @param max_n_bytes_per_line the maximum allowed number of bytes per line, as per   `gfls_utf8_find_very_long_line()`.
     * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
     * @param callback a {@link Gio.AsyncReadyCallback} to call when the operation   is finished.
     * @since 0.1
     */
    function loader_basic_load_async(
        file: Gio.File,
        max_size: number,
        max_n_bytes_per_line: number,
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Gio.File> | null,
    ): void;
    /**
     * Starts a basic file loading operation.
     *
     * If the `file` content is not a valid UTF-8 string, or if the `max_size` or
     * `max_n_bytes_per_line` conditions are not satisfied, an error will be returned
     * without the file content.
     *
     * See the {@link Gio.AsyncResult} documentation to know how to use this function.
     * @param file a {@link Gio.File}.
     * @param max_size the maximum allowed number of bytes in total.
     * @param max_n_bytes_per_line the maximum allowed number of bytes per line, as per   `gfls_utf8_find_very_long_line()`.
     * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
     * @param callback a {@link Gio.AsyncReadyCallback} to call when the operation   is finished.
     * @since 0.1
     */
    function loader_basic_load_async(
        file: Gio.File,
        max_size: number,
        max_n_bytes_per_line: number,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Gio.File> | null,
    ): globalThis.Promise<GLib.Bytes> | void;
    /**
     * Finishes an operation started with `gfls_loader_basic_load_async()`.
     *
     * If everything went well, a {@link GLib.Bytes} with the {@link Gio.File} content (unmodified) is
     * returned. It is guaranteed to be a valid UTF-8 string.
     *
     * Otherwise an error is returned. The `GFLS_LOADER_ERROR` domain is used, among
     * others.
     *
     * The data contained in the resulting {@link GLib.Bytes} is always zero-terminated, but
     * this is not included in the {@link GLib.Bytes} length. The resulting {@link GLib.Bytes} should be
     * freed with `g_bytes_unref()` when no longer in use.
     * @param file a {@link Gio.File}.
     * @param result a {@link Gio.AsyncResult}.
     * @returns a {@link GLib.Bytes}, or `null` on error.
     * @since 0.1
     */
    function loader_basic_load_finish(file: Gio.File, result: Gio.AsyncResult): GLib.Bytes;
    function loader_error_quark(): GLib.Quark;
    /**
     * Finds if a line in `str` exceeds `max_n_bytes_per_line`.
     *
     * For performance reasons, `str` is not checked whether it is a valid UTF-8
     * string. So you must call for example `g_utf8_validate()` beforehand.
     * @param str a UTF-8 nul-terminated string.
     * @param max_n_bytes_per_line the maximum number of bytes per line, without counting   the newline character(s).
     * @returns a pointer to the beginning of the first very long line found, or   `null` if not found.
     * @since 0.3
     */
    function utf8_find_very_long_line(str: string, max_n_bytes_per_line: number): string;
    /**
     * @gir-type Callback
     */
    interface UnsavedDocumentTitleCallback {
        (num: number): string;
    }
    namespace AttributeKeys {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class AttributeKeys extends GObject.Object {
        static $gtype: GObject.GType<AttributeKeys>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AttributeKeys.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AttributeKeys.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): AttributeKeys;

        // Signals

        /** @signal */
        connect<K extends keyof AttributeKeys.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AttributeKeys.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AttributeKeys.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AttributeKeys.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AttributeKeys.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AttributeKeys.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds `str` to `keys`.
         *
         * `str` has the same semantics as the corresponding parameter of
         * `g_file_query_info()`.
         * @param str the value to add.
         */
        add(str: string): void;
        /**
         * @returns the complete string to pass to   `g_file_query_info()` (for example), or `null` if the list is empty.
         */
        to_string(): string | null;
    }

    namespace LoaderConfigSimple {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class LoaderConfigSimple extends GObject.Object {
        static $gtype: GObject.GType<LoaderConfigSimple>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LoaderConfigSimple.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LoaderConfigSimple.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_file(file: Gio.File): LoaderConfigSimple;

        static new_from_stream(input_stream: Gio.InputStream): LoaderConfigSimple;

        // Signals

        /** @signal */
        connect<K extends keyof LoaderConfigSimple.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LoaderConfigSimple.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LoaderConfigSimple.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LoaderConfigSimple.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LoaderConfigSimple.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LoaderConfigSimple.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the {@link Gio.File} of `config`, or `null`.
         */
        get_file(): Gio.File | null;
        /**
         * @returns the {@link Gio.InputStream} of `config`, or `null`.
         */
        get_stream(): Gio.InputStream | null;
    }

    namespace UnsavedDocumentTitles {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class UnsavedDocumentTitles extends GObject.Object {
        static $gtype: GObject.GType<UnsavedDocumentTitles>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UnsavedDocumentTitles.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UnsavedDocumentTitles.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UnsavedDocumentTitles;

        // Signals

        /** @signal */
        connect<K extends keyof UnsavedDocumentTitles.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UnsavedDocumentTitles.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UnsavedDocumentTitles.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UnsavedDocumentTitles.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UnsavedDocumentTitles.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UnsavedDocumentTitles.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): UnsavedDocumentTitles;

        // Methods

        /**
         * Allocates a number for an unsaved document. When the document is saved on
         * disk, you need to give back the number with
         * `gfls_unsaved_document_titles_release_number()`.
         *
         * The returned number is the lowest available value, starting at 1.
         * @returns the allocated number.
         */
        allocate_number(): number;
        /**
         * Generates the title of an unsaved document. To customize the returned string,
         * you can use `gfls_unsaved_document_titles_set_title_callback()`.
         * @param number a number.
         * @returns a suitable title for the unsaved document with the   given `number`.
         */
        get_title(number: number): string;
        /**
         * Call this function to give back `number` to `titles`, so that it becomes
         * available for a next unsaved document. This is usually done when the document
         * is saved on disk.
         * @param number the number to release.
         */
        release_number(number: number): void;
    }

    /**
     * @gir-type Alias
     */
    type AttributeKeysClass = typeof AttributeKeys;
    /**
     * @gir-type Struct
     */
    abstract class AttributeKeysPrivate {
        static $gtype: GObject.GType<AttributeKeysPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type LoaderConfigInterface = typeof LoaderConfig;
    /**
     * @gir-type Alias
     */
    type LoaderConfigSimpleClass = typeof LoaderConfigSimple;
    /**
     * @gir-type Struct
     */
    abstract class LoaderConfigSimplePrivate {
        static $gtype: GObject.GType<LoaderConfigSimplePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type UnsavedDocumentTitlesClass = typeof UnsavedDocumentTitles;
    /**
     * @gir-type Struct
     */
    abstract class UnsavedDocumentTitlesPrivate {
        static $gtype: GObject.GType<UnsavedDocumentTitlesPrivate>;
    }

    namespace LoaderConfig {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface LoaderConfigNamespace {
        $gtype: GObject.GType<LoaderConfig>;
        prototype: LoaderConfig;
    }
    /**
     * @gir-type Interface
     */
    interface LoaderConfig extends GObject.Object {}

    export const LoaderConfig: LoaderConfigNamespace & {
        new (): LoaderConfig; // This allows `obj instanceof LoaderConfig`
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

export default Gfls;

// END
