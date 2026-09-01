
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
     * @gir-type Enum
     */
    export namespace IconvResult {
        export const $gtype: GObject.GType<IconvResult>;
    }

    /**
     * Used as the result value of `gfls_iconv_feed()`.
     * @gir-type Enum
     * @since 0.4
     */
    enum IconvResult {
        /**
         * Everything OK.
         */
        OK = 0,
        /**
         * An error occurred.
         */
        ERROR = 1,
        /**
         * Stopped at an invalid character in
         *   the `inbuf`; or the character could not be represented in the target
         *   character set. `*inbuf` is left pointing to the beginning of the invalid or
         *   unconvertible sequence.
         */
        ILLEGAL_SEQUENCE = 2,
        /**
         * The input byte sequence ends with
         *   an incomplete multi-byte character. `*inbuf` is left pointing to the
         *   beginning of the incomplete multi-byte character.
         */
        INCOMPLETE_INPUT = 3,
        /**
         * The output buffer has no more
         *   room for the next converted character.
         */
        OUTPUT_BUFFER_FULL = 4,
        /**
         * A number of nonreversible
         *   conversions have been performed.
         */
        LOSSY_CONVERSION = 5,
    }


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
     * This function converts `input_bytes` from a codeset to another.
     * 
     * `from_codeset` and `to_codeset` must be compatible with iconv, see
     * `gfls_iconv_open()`.
     * 
     * Note that `from_codeset` and `to_codeset` can be equal. It is useful to
     * identify the valid characters from the invalid ones.
     * 
     * The output is the combination of `output_bytes` and
     * `output_bytes_valid_region`. Output bytes that are part of
     * `output_bytes_valid_region` are the valid characters (successfully converted).
     * The other output bytes are invalid characters (copied as is from
     * `input_bytes`).
     * 
     * If `allow_invalid_characters` is `false`:
     * - As soon as an invalid character is encountered, `false` is returned by this
     *   function and `output_bytes` and `output_bytes_valid_region` will return
     *   `null`.
     * - Otherwise, if everything goes well, `true` is returned alongside the
     *   `output_bytes` and `output_bytes_valid_region` (the latter contains in this
     *   case only one, valid sub-region).
     * @param input_bytes the input {@link GLib.Bytes} to convert.
     * @param to_codeset destination codeset.
     * @param from_codeset source codeset.
     * @param allow_invalid_characters whether invalid characters are allowed.
     * @returns `true` on success, `false` otherwise.
     * @since 0.4
     * @throws GLib.Error
     */
    function encoding_convert(input_bytes: GLib.Bytes | Uint8Array, to_codeset: string, from_codeset: string, allow_invalid_characters: boolean): [boolean, GLib.Bytes, BytesRegion];

    /**
     * Tries a conversion on `input_bytes`, discarding the output.
     * 
     * `from_codeset` and `to_codeset` must be compatible with iconv, see
     * `gfls_iconv_open()`.
     * 
     * If `input_bytes` ends with an incomplete multi-byte character, that part is
     * ignored. So `input_bytes` can be for example the first chunk of a file when
     * loading it.
     * @param input_bytes a {@link GLib.Bytes}.
     * @param to_codeset destination codeset.
     * @param from_codeset source codeset.
     * @returns `true` if and only if `input_bytes` can be converted without errors,   without invalid characters and without fallback characters.
     * @since 0.4
     */
    function encoding_try_convert(input_bytes: GLib.Bytes | Uint8Array, to_codeset: string, from_codeset: string): boolean;

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
    function loader_basic_load_async(file: Gio.File, max_size: bigint | number, max_n_bytes_per_line: number, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Bytes>;
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
    function loader_basic_load_async(file: Gio.File, max_size: bigint | number, max_n_bytes_per_line: number, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.File> | null): void;
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
    function loader_basic_load_async(file: Gio.File, max_size: bigint | number, max_n_bytes_per_line: number, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.File> | null): globalThis.Promise<GLib.Bytes> | void;

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
     * @throws GLib.Error
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
    interface SimpleProgressCallback {
        (number: number): void;
    }

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

        static ["new"](): AttributeKeys;

        // Signals
        /** @signal */
        connect<K extends keyof AttributeKeys.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AttributeKeys.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AttributeKeys.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AttributeKeys.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AttributeKeys.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AttributeKeys.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds `str` to `keys`.
         * 
         * `str` has the same semantics as the corresponding parameter of
         * `g_file_query_info()`.
         * @param str the value to add.
         * @since 0.2
         */
        add(str: string): void;

        /**
         * @returns the complete string to pass to   `g_file_query_info()` (for example), or `null` if the list is empty.
         * @since 0.2
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
        connect<K extends keyof LoaderConfigSimple.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LoaderConfigSimple.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LoaderConfigSimple.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LoaderConfigSimple.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LoaderConfigSimple.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LoaderConfigSimple.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the {@link Gio.File} of `config`, or `null`.
         * @since 0.2
         */
        get_file(): Gio.File | null;

        /**
         * @returns the {@link Gio.InputStream} of `config`, or `null`.
         * @since 0.2
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

        static ["new"](): UnsavedDocumentTitles;

        // Signals
        /** @signal */
        connect<K extends keyof UnsavedDocumentTitles.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnsavedDocumentTitles.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UnsavedDocumentTitles.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnsavedDocumentTitles.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UnsavedDocumentTitles.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UnsavedDocumentTitles.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @since 0.1
         */
        static get_default(): UnsavedDocumentTitles;

        // Methods
        /**
         * Allocates a number for an unsaved document. When the document is saved on
         * disk, you need to give back the number with
         * `gfls_unsaved_document_titles_release_number()`.
         * 
         * The returned number is the lowest available value, starting at 1.
         * @returns the allocated number.
         * @since 0.1
         */
        allocate_number(): number;

        /**
         * Generates the title of an unsaved document. To customize the returned string,
         * you can use `gfls_unsaved_document_titles_set_title_callback()`.
         * @param number a number.
         * @returns a suitable title for the unsaved document with the   given `number`.
         * @since 0.1
         */
        get_title(number: number): string;

        /**
         * Call this function to give back `number` to `titles`, so that it becomes
         * available for a next unsaved document. This is usually done when the document
         * is saved on disk.
         * @param number the number to release.
         * @since 0.1
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
     * @gir-type Struct
     */
    abstract class BytesRegion {
        static $gtype: GObject.GType<BytesRegion>;

        // Methods
        /**
         * Frees `region`.
         * @since 0.4
         */
        free(): void;

        /**
         * Frees `iter`.
         * @param iter a {@link Gfls.BytesRegionIter}.
         * @since 0.4
         */
        iter_free(iter: BytesRegionIter | null): void;

        /**
         * Gets the sub-region at this iterator.
         * 
         * `sub_region_size` and `offset` can be used as arguments to
         * `g_bytes_get_region()`.
         * 
         * `is_part_of_region` has the same meaning as for
         * `gfls_bytes_region_builder_append()`. {@link Gfls.BytesRegionIter} iterates on both the
         * region and the holes, so that the corresponding {@link GLib.Bytes} is traversed from
         * start to end.
         * @param iter a {@link Gfls.BytesRegionIter}. It must not be the end iterator.
         * @since 0.4
         */
        iter_get_sub_region(iter: BytesRegionIter): [number, number, boolean];

        /**
         * @param iter a {@link Gfls.BytesRegionIter}.
         * @returns whether `iter` is the end iterator.
         * @since 0.4
         */
        iter_is_end(iter: BytesRegionIter): boolean;

        /**
         * Moves `iter` to the next sub-region.
         * 
         * If all sub-regions have been traversed, `iter` is set to the end iterator.
         * @param iter a {@link Gfls.BytesRegionIter}. The end iterator is accepted as an input   value.
         * @since 0.4
         */
        iter_next(iter: BytesRegionIter): void;

        /**
         * @param bytes a {@link GLib.Bytes}.
         * @returns whether `region` can be applied to `bytes` (it checks the total size).
         * @since 0.4
         */
        match_bytes(bytes: GLib.Bytes | Uint8Array): boolean;

        /**
         * The format is:
         * 
         * `[offset, sub_region_size, is_part_of_region]\n`
         * 
         * One line per sub-region, in order.
         * @returns a string representation of `region`.
         * @since 0.4
         */
        to_string(): string;
    }


    /**
     * @gir-type Struct
     */
    abstract class BytesRegionBuilder {
        static $gtype: GObject.GType<BytesRegionBuilder>;

        // Methods
        /**
         * Appends a sub-region at the end.
         * 
         * If `is_part_of_region` is `false` it creates a hole.
         * 
         * Contiguous sub-regions of the same kind are merged and will thus be treated
         * as a single sub-region. So you can conveniently call this function several
         * times in a row with the same value for `is_part_of_region`.
         * 
         * In order to create a {@link Gfls.BytesRegion} that will traverse a whole {@link GLib.Bytes}, it
         * is required to call this function the right amount of times, even if it ends
         * with a hole. See also `gfls_bytes_region_match_bytes()`.
         * @param sub_region_length the length of the sub-region. Must not be equal to 0.
         * @param is_part_of_region whether the sub-region is part of the region.
         * @since 0.4
         */
        append(sub_region_length: bigint | number, is_part_of_region: boolean): void;

        /**
         * Creates a {@link Gfls.BytesRegion} and frees `builder`.
         * @param free_data if `true`, the data is freed as well.
         * @returns a {@link Gfls.BytesRegion}, or `null` if   `free_data` is `true`.
         * @since 0.4
         */
        free(free_data: boolean): BytesRegion | null;

        /**
         * @returns the current total size, in number of bytes (holes included).
         * @since 0.4
         */
        get_current_size(): number;
    }


    /**
     * @gir-type Struct
     */
    abstract class BytesRegionIter {
        static $gtype: GObject.GType<BytesRegionIter>;
    }


    /**
     * @gir-type Struct
     */
    abstract class Iconv {
        static $gtype: GObject.GType<Iconv>;

        // Methods
        /**
         * Closes and frees `conv`.
         * 
         * If you need to know if closing `conv` returns an error, call
         * `gfls_iconv_close()` explicitly beforehand.
         * @since 0.4
         */
        free(): void;
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
    interface LoaderConfig extends GObject.Object {
    }


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
