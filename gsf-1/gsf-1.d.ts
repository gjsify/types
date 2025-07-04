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
import type libxml2 from '@girs/libxml2-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Gsf {
    /**
     * Gsf-1
     */

    export namespace ClipFormat {
        export const $gtype: GObject.GType<ClipFormat>;
    }

    enum ClipFormat {
        /**
         * Windows clipboard format
         */
        WINDOWS_CLIPBOARD,
        /**
         * Macintosh clipboard format
         */
        MACINTOSH_CLIPBOARD,
        /**
         * GUID that contains a format identifier
         */
        GUID,
        /**
         * No clipboard data
         */
        NO_DATA,
        /**
         * Custom clipboard format
         */
        CLIPBOARD_FORMAT_NAME,
        /**
         * Unknown clipboard type or invalid data
         */
        UNKNOWN,
    }

    export namespace ClipFormatWindows {
        export const $gtype: GObject.GType<ClipFormatWindows>;
    }

    enum ClipFormatWindows {
        /**
         * error
         */
        ERROR,
        /**
         * unknown
         */
        UNKNOWN,
        /**
         * CF_METAFILEPICT
         */
        METAFILE,
        /**
         * CF_DIB
         */
        DIB,
        /**
         * CF_ENHMETAFILE
         */
        ENHANCED_METAFILE,
    }
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

        // Static fields

        /**
         * Memory allocation failed
         */
        static OUT_OF_MEMORY: number;
        /**
         * Invalid data encountered (e.g. not enough data)
         */
        static INVALID_DATA: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    /**
     * Controls when to add quotes around fields.
     */

    /**
     * Controls when to add quotes around fields.
     */
    export namespace OutputCsvQuotingMode {
        export const $gtype: GObject.GType<OutputCsvQuotingMode>;
    }

    enum OutputCsvQuotingMode {
        /**
         * never add quotes around fields
         */
        NEVER,
        /**
         * add quotes around fields when needed
         */
        AUTO,
        /**
         * always add quotes around fields
         */
        ALWAYS,
    }
    /**
     * Controls the handling of character data within a parser node.
     */

    /**
     * Controls the handling of character data within a parser node.
     */
    export namespace XMLContent {
        export const $gtype: GObject.GType<XMLContent>;
    }

    enum XMLContent {
        /**
         * node has no cstr contents
         */
        NO_CONTENT,
        /**
         * node has cstr contents
         */
        CONTENT,
        /**
         * node has contents that is shared with children
         */
        SHARED_CONTENT,
        /**
         * node is second or later occurrence
         */
        '2ND',
    }

    export namespace ZipCompressionMethod {
        export const $gtype: GObject.GType<ZipCompressionMethod>;
    }

    enum ZipCompressionMethod {
        STORED,
        SHRUNK,
        REDUCEDX1,
        REDUCEDX2,
        REDUCEDX3,
        REDUCEDX4,
        IMPLODED,
        TOKENIZED,
        DEFLATED,
        DEFLATED_BETTER,
        IMPLODED_BETTER,
    }
    /**
     * (Integer) Count of bytes in the document.
     */
    const META_NAME_BYTE_COUNT: string;
    /**
     * (Unsigned Integer) Identifier representing the case-sensitiveness.
     * <note>of what ?? why is it an integer ??</note>
     */
    const META_NAME_CASE_SENSITIVE: string;
    /**
     * (String) Category of the document. <note>example???</note>
     */
    const META_NAME_CATEGORY: string;
    /**
     * (Integer) Count of cells in the spread-sheet document, if appropriate.
     */
    const META_NAME_CELL_COUNT: string;
    /**
     * (Integer) Count of characters in the document.
     *
     * TODO See how to sync this with ODF's document-statistic
     */
    const META_NAME_CHARACTER_COUNT: string;
    /**
     * (UnsignedShort) The MS codepage to encode strings for metadata
     * 1.14.0	Clarified that this is unique from _NAME_CODEPAGE in msole
     */
    const META_NAME_CODEPAGE: string;
    /**
     * (String) Name of the company/organization that the "CREATOR" entity is
     * associated with.
     *
     * 1.14.1	Moved from "gsf:company" to "dc:publisher".
     */
    const META_NAME_COMPANY: string;
    /**
     * (String) An entity primarily responsible for making the content of the
     * resource typically a person, organization, or service.
     *
     * 1.14.0	Moved from "gsf" to "dc".
     */
    const META_NAME_CREATOR: string;
    /**
     * (Date as ISO String) A date associated with an event in the life cycle of
     * the resource (creation/publication date).
     * Moved from gsf:date-created to meta:creation-date. This way can be used correctly
     * by OpenDocument and Gnumeric.
     */
    const META_NAME_DATE_CREATED: string;
    /**
     * (GsfTimestamp) The last time this document was saved.
     *
     * 1.14.0	Moved from dc:date-modified to dc:date.
     */
    const META_NAME_DATE_MODIFIED: string;
    /**
     * (String) An account of the content of the resource.
     */
    const META_NAME_DESCRIPTION: string;
    /**
     * (None) Reserved name (PID) for Dictionary
     */
    const META_NAME_DICTIONARY: string;
    /**
     * (Vector of strings) Names of the 'interesting' parts of the document.  In
     * spreadsheets this is a list of the sheet names, and the named expressions.
     * From MSOLE
     */
    const META_NAME_DOCUMENT_PARTS: string;
    /**
     * (Date as ISO String) The total-time taken until the last modification.
     * Moved from "gsf" to "meta". This way can be used correctly by OpenDocument
     * and Gnumeric.
     */
    const META_NAME_EDITING_DURATION: string;
    /**
     * (String) The application that generated this document. AbiWord, Gnumeric,
     * etc...
     *
     * 1.14.0 Moved from "gsf" to "meta".
     */
    const META_NAME_GENERATOR: string;
    /**
     * (Vector of string value pairs stored in alternating elements) Store the
     * counts of objects in the document as names 'worksheet' and count '4'
     * From MSOLE
     */
    const META_NAME_HEADING_PAIRS: string;
    /**
     * (Integer) Count of hidden-slides in the presentation document.
     */
    const META_NAME_HIDDEN_SLIDE_COUNT: string;
    /**
     * (Integer) Count of images in the document, if appropriate.
     */
    const META_NAME_IMAGE_COUNT: string;
    /**
     * (String) Specifies the name of the person who created the document
     * initially.
     * 1.14.0 Moved from "gsf" to "meta".
     */
    const META_NAME_INITIAL_CREATOR: string;
    /**
     * (String) Searchable, indexable keywords. Similar to PDF keywords or HTML's
     * meta block.
     */
    const META_NAME_KEYWORD: string;
    /**
     * (GsfDocPropVector of String) Searchable, indexable keywords. Similar to PDF
     * keywords or HTML's meta block.
     */
    const META_NAME_KEYWORDS: string;
    /**
     * (String) The locale language of the intellectual content of the resource
     * 	(basically xx_YY form for us).
     * 1.14.0	Clarified that this is unique from _NAME_CODEPAGE in msole
     */
    const META_NAME_LANGUAGE: string;
    /**
     * (GSF_META_NAME_HEADING_PAIRS) The last time this document was printed.
     *
     * 1.14.0	Moved from "gsf" to "dc".
     * 1.14.1	Moved back to "gsf" from "dc".
     */
    const META_NAME_LAST_PRINTED: string;
    /**
     * (String) The entity that made the last change to the document, typically a
     * person, organization, or service.
     */
    const META_NAME_LAST_SAVED_BY: string;
    /**
     * (Integer) Count of liness in the document.
     */
    const META_NAME_LINE_COUNT: string;
    /**
     * (Boolean) ???????
     */
    const META_NAME_LINKS_DIRTY: string;
    /**
     * (Unsigned Integer) Identifier representing the default system locale.
     */
    const META_NAME_LOCALE_SYSTEM_DEFAULT: string;
    /**
     * (String) Name of the manager of "CREATOR" entity.
     */
    const META_NAME_MANAGER: string;
    /**
     * (Integer) Count of "multi-media" clips in the document.
     */
    const META_NAME_MM_CLIP_COUNT: string;
    /**
     * (Unknown) User-defined name
     */
    const META_NAME_MSOLE_UNKNOWN_17: string;
    /**
     * (Unknown) User-defined name
     */
    const META_NAME_MSOLE_UNKNOWN_18: string;
    /**
     * (Boolean) User-defined name
     */
    const META_NAME_MSOLE_UNKNOWN_19: string;
    /**
     * (Unknown) User-defined name
     */
    const META_NAME_MSOLE_UNKNOWN_20: string;
    /**
     * (Unknown) User-defined name
     */
    const META_NAME_MSOLE_UNKNOWN_21: string;
    /**
     * (Boolean) User-defined name
     */
    const META_NAME_MSOLE_UNKNOWN_22: string;
    /**
     * (i4) User-defined name
     */
    const META_NAME_MSOLE_UNKNOWN_23: string;
    /**
     * (Integer) Count of "notes" in the document.
     */
    const META_NAME_NOTE_COUNT: string;
    /**
     * (Integer) Count of objects (OLE and other graphics) in the document, if
     * appropriate.
     */
    const META_NAME_OBJECT_COUNT: string;
    /**
     * (Integer) Count of pages in the document, if appropriate.
     */
    const META_NAME_PAGE_COUNT: string;
    /**
     * (Integer) Count of paragraphs in the document, if appropriate.
     */
    const META_NAME_PARAGRAPH_COUNT: string;
    /**
     * (String) Type of presentation, like "On-screen Show", "SlideView" etc.
     */
    const META_NAME_PRESENTATION_FORMAT: string;
    /**
     * (String) Specifies the name of the last person who printed the document.
     *
     * 1.14.0	Moved from "gsf" to "meta".
     */
    const META_NAME_PRINTED_BY: string;
    /**
     * (GsfTimestamp) Specifies the date and time when the document was last
     * printed.
     */
    const META_NAME_PRINT_DATE: string;
    /**
     * (Integer) Count of revision on the document, if appropriate.
     * Moved from gsf:revision-count to meta:editing-cycles. This way can be used
     * correctly by OpenDocument and Gnumeric.
     */
    const META_NAME_REVISION_COUNT: string;
    /**
     * (Boolean) ?????
     */
    const META_NAME_SCALE: string;
    /**
     * (Integer) Level of security.
     *
     * <informaltable frame="none" role="params">
     * <tgroup cols="2">
     * <thead>
     * <row><entry align="left">Level</entry><entry>Value</entry></row>
     * </thead>
     * <tbody>
     * <row><entry>None</entry><entry>0</entry></row>
     * <row><entry>Password protected</entry><entry>1</entry></row>
     * <row><entry>Read-only recommended</entry><entry>2</entry></row>
     * <row><entry>Read-only enforced</entry><entry>3</entry></row>
     * <row><entry>Locked for annotations</entry><entry>4</entry></row>
     * </tbody></tgroup></informaltable>
     */
    const META_NAME_SECURITY: string;
    /**
     * (Integer) Count of slides in the presentation document.
     */
    const META_NAME_SLIDE_COUNT: string;
    /**
     * (Integer) Count of pages in the document, if appropriate.
     */
    const META_NAME_SPREADSHEET_COUNT: string;
    /**
     * (String) The topic of the content of the resource,
     * <emphasis>typically</emphasis> including keywords.
     */
    const META_NAME_SUBJECT: string;
    /**
     * (Integer) Count of tables in the document, if appropriate.
     */
    const META_NAME_TABLE_COUNT: string;
    /**
     * (String) The template file that is been used to generate this document.
     *
     * 1.14.0 Moved from "gsf" to "meta"
     */
    const META_NAME_TEMPLATE: string;
    /**
     * (GsfClipData) Thumbnail data of the document, typically a
     * preview image of the document.
     */
    const META_NAME_THUMBNAIL: string;
    /**
     * (String) A formal name given to the resource.
     */
    const META_NAME_TITLE: string;
    /**
     * (Integer) Count of words in the document.
     */
    const META_NAME_WORD_COUNT: string;
    /**
     * Decodes a chunk of base64 encoded data from `data` back into `data`.
     * @param data data stream
     * @param len max length of data to decode
     * @returns the number of bytes converted
     */
    function base64_decode_simple(data: Uint8Array | string, len: number): number;
    /**
     * Decodes a chunk of base64 encoded data
     * @param _in input stream
     * @param len max length of data to decode
     * @param out output stream
     * @param state holds the number of bits that are stored in @save
     * @param save leftover bits that have not yet been decoded
     * @returns the number of bytes converted
     */
    function base64_decode_step(
        _in: Uint8Array | string,
        len: number,
        out: Uint8Array | string,
        state: number,
        save: number,
    ): [number, number, number];
    /**
     * This funcion should be called to when finished encoding everything, to
     * flush off the last little bit.
     * @param _in Data to be encoded
     * @param break_lines Whether to use line breaks
     * @param out Encoded data.
     * @param state holds the number of bits that are stored in @save
     * @param save leftover bits that have not yet been decoded
     * @returns a count of the number of bytes in the final block.
     */
    function base64_encode_close(
        _in: Uint8Array | string,
        break_lines: boolean,
        out: Uint8Array | string,
        state: number,
        save: number,
    ): [number, number, number];
    /**
     * Encodes data from `data` back into `data` using base64 encoding.
     * @param data data stream
     * @param len max length of data to encode
     * @returns the number of bytes encoded
     */
    function base64_encode_simple(data: Uint8Array | string, len: number): number;
    /**
     * Performs an 'encode step', only encodes blocks of 3 characters from `in` into
     * the output `out` at a time, saves left-over state in `state` and `save`
     * (initialise to 0 on first invocation).
     * @param _in input stream
     * @param len max length of data to decode
     * @param break_lines Whether to use line breaks
     * @param out output stream
     * @param state holds the number of bits that are stored in @save
     * @param save leftover bits that have not yet been decoded
     * @returns the number of bytes encoded
     */
    function base64_encode_step(
        _in: Uint8Array | string,
        len: number,
        break_lines: boolean,
        out: Uint8Array | string,
        state: number,
        save: number,
    ): [number, number, number];
    function debug_flag(flag: string): boolean;
    /**
     * A debugging utility to dump the content of `meta` via g_print
     * @param meta #GsfDocMetaData
     */
    function doc_meta_dump(meta: DocMetaData): void;
    function error_quark(): GLib.Quark;
    /**
     * Extracts the extension from the end of a filename (the part after the final
     * '.' in the filename).
     * @param path A filename or file path.
     * @returns A pointer to the extension part of the filename, or a pointer to the end of the string if the filename does not have an extension.
     */
    function extension_pointer(path: string): string;
    /**
     * A utility wrapper to make sure filenames are valid utf8.
     * Caller must g_free the result.
     * @param filename file name suitable for open(2).
     * @param quoted if %TRUE, the resulting utf8 file name will be quoted    (unless it is invalid).
     * @returns @filename using utf-8 encoding for display
     */
    function filename_to_utf8(filename: string, quoted: boolean): string;
    /**
     * Initializes the GSF library
     */
    function init(): void;
    /**
     * Initializes the GSF library and associates it with a type module `mod`.
     * @param module #GTypeModule.
     */
    function init_dynamic(module: GObject.TypeModule): void;
    /**
     * Interpret binary data as a double in little endian order.
     * @param p pointer to storage
     * @returns interpreted data
     */
    function le_get_double(p?: any | null): number;
    /**
     * Interpret binary data as a float in little endian order.
     * @param p pointer to storage
     * @returns interpreted data
     */
    function le_get_float(p?: any | null): number;
    /**
     * Interpret binary data as a guint64 (8 byte unsigned integer type) in little
     * endian order.
     * @param p pointer to storage
     * @returns interpreted data
     */
    function le_get_guint64(p?: any | null): number;
    /**
     * Store a value of type double in memory in little endian order
     * @param p pointer to storage
     * @param d double to be stored
     */
    function le_set_double(p: any | null, d: number): void;
    /**
     * Store a value of type float in memory in little endian order.
     * @param p pointer to storage
     * @param f float to be stored
     */
    function le_set_float(p: any | null, f: number): void;
    /**
     * Dump `len` bytes from the memory location given by `ptr`.
     * @param ptr memory area to be dumped.
     * @param len how many bytes will be dumped.
     */
    function mem_dump(ptr: number, len: number): void;
    function msole_codepage_to_lid(codepage: number): number;
    function msole_iconv_win_codepage(): number;
    /**
     * Decompresses an LZ compressed stream.
     * @param input stream to read from
     * @param offset offset into it for start byte of compresse stream
     * @returns A GByteArray that the caller is responsible for freeing
     */
    function msole_inflate(input: Input, offset: gsf_off_t): Uint8Array;
    function msole_language_for_lid(lid: number): string;
    function msole_lid_for_language(lang?: string | null): number;
    function msole_lid_to_codepage(lid: number): number;
    function msole_lid_to_codepage_str(lid: number): string;
    function odf_get_ns(): XMLInNS;
    /**
     * Gives the ODF version used by libgsf when writing Open Document files.
     * @returns the ODF version: 102.
     */
    function odf_get_version(): number;
    /**
     * Gives the ODF version used by libgsf when writing Open Document files.
     * @returns the ODF version as a string: "1.2".
     */
    function odf_get_version_string(): string;
    function open_pkg_error_id(): number;
    /**
     * New in 1.14.9
     *
     * Walks each relationship associated with `opkg` and calls `func` with `user_data`.
     * @param opkg #GsfInput
     * @param func #GsfOpenPkgIter
     */
    function open_pkg_foreach_rel(opkg: Input, func: OpenPkgIter): void;
    function open_pkg_open_rel(opkg: Input, rel: OpenPkgRel): Input;
    /**
     * New in 1.14.7
     *
     * Open `opkg'`s relation `id`
     * @param opkg #GsfInput
     * @param id target id
     * @returns A new GsfInput or %NULL, and sets @err if possible.
     */
    function open_pkg_open_rel_by_id(opkg: Input, id: string): Input;
    /**
     * New in 1.14.9
     *
     * Open one of `opkg'`s relationships with type=`type`.
     * @param opkg #GsfInput
     * @param type target type
     * @returns A new GsfInput or %NULL, and sets @err if possible.
     */
    function open_pkg_open_rel_by_type(opkg: Input, type: string): Input;
    /**
     * Convenience function to parse a related part.
     * @param xin #GsfXMLIn
     * @param id target id
     * @param dtd #GsfXMLInNode
     * @param ns #GsfXMLInNS
     * @returns %NULL on success or a #GError on failure.
     */
    function open_pkg_parse_rel_by_id(xin: XMLIn, id: string, dtd: XMLInNode, ns: XMLInNS): GLib.Error;
    function property_settings_find(name: string, params: GObject.Parameter[]): GObject.Parameter;
    function property_settings_free(params: GObject.Parameter[]): void;
    /**
     * De-intializes the GSF library
     * Currently does nothing.
     */
    function shutdown(): void;
    /**
     * De-intializes the GSF library from a type module.
     * Currently does nothing.
     * @param module currently unused
     */
    function shutdown_dynamic(module: GObject.TypeModule): void;
    /**
     * This function returns the array of values inside #GsfDocPropVector.
     * No additional references are created.
     * @param value A GValue of type #GsfDocPropVector.
     * @returns A #GArray of #GValue
     */
    function value_get_docprop_array(value: GObject.Value | any): GObject.Value[] | null;
    function value_get_docprop_varray(value: GObject.Value | any): GObject.ValueArray;
    /**
     * This function returns a pointer to the GsfDocPropVector structure in `value`.
     * No additional references are created.
     * @param value A GValue of type #GsfDocPropVector.
     * @returns A pointer to the #GsfDocPropVector structure in @value
     */
    function value_get_docprop_vector(value: GObject.Value | any): DocPropVector;
    /**
     * Decompresses VBA stream.
     * @param input stream to read from
     * @param offset offset into it for start byte of compressed stream
     * @param size size of the returned array
     * @param add_null_terminator whenever add or not null at the end of array
     * @returns A pointer to guint8 array
     */
    function vba_inflate(input: Input, offset: gsf_off_t, size: number, add_null_terminator: boolean): number;
    /**
     * Dumps the document `cur` into `output`.
     * @param output #GsfOutput
     * @param cur #xmlDocPtr
     * @param encoding The encoding to use.
     * @param format %TRUE to reformat the output.
     * @returns status from xmlSaveFormatFileTo.
     */
    function xmlDocFormatDump(output: Output, cur: libxml2.Doc, encoding: string | null, format: boolean): number;
    /**
     * Try to parse `str` as a value of type `t` into `res`.
     * @param res Result value
     * @param t Type of data
     * @param str Value string
     * @returns True when parsing of @str as a value of type @t was succesfull; false otherwise.
     */
    function xml_gvalue_from_str(res: GObject.Value | any, t: GObject.GType, str: string): boolean;
    function xml_probe(input: Input, func: XMLProbeFunc): boolean;
    interface OpenPkgIter {
        (opkg: Input, rel: OpenPkgRel): void;
    }
    interface XMLInExtDtor {
        (xin: XMLIn, old_state?: any | null): void;
    }
    interface XMLInUnknownFunc {
        (xin: XMLIn, elem: libxml2.Char, attrs: libxml2.Char): boolean;
    }
    interface XMLProbeFunc {
        (
            name: libxml2.Char,
            prefix: libxml2.Char,
            URI: libxml2.Char,
            nb_namespaces: number,
            namespaces: libxml2.Char,
            nb_attributes: number,
            nb_defaulted: number,
            attributes: libxml2.Char,
        ): boolean;
    }
    namespace Blob {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Blob extends GObject.Object {
        static $gtype: GObject.GType<Blob>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Blob.SignalSignatures;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<Blob.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_to_copy: Uint8Array | string): Blob;

        // Signals

        connect<K extends keyof Blob.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Blob.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Blob.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Blob.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Blob.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Blob.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Queries the size in bytes of the data stored in the blob.
         * @returns Size in bytes, or 0 if the data is %NULL.
         */
        get_size(): number;
        /**
         * Queries a pointer to the data stored in the blob.  This does not
         * copy the data for you; it returns a pointer to the actual buffer
         * which the blob uses internally, so you should not free this buffer
         * on your own.
         * @returns Pointer to the data stored in the blob, or %NULL if the size of the data is zero.
         */
        peek_data(): any | null;
    }

    namespace ClipData {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ClipData extends GObject.Object {
        static $gtype: GObject.GType<ClipData>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClipData.SignalSignatures;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<ClipData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](format: ClipFormat, data_blob: Blob): ClipData;

        // Signals

        connect<K extends keyof ClipData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClipData.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClipData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClipData.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClipData.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClipData.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Queries the data blob that actually stores a #GsfClipData's binary data.
         * @returns A new reference to the #GsfBlob that stores this @clip_data's binary data.  You must use g_object_unref() to dispose of that data blob when you are done with it.
         */
        get_data_blob(): Blob;
        /**
         * Queries the clipboard data format of a #GsfClipData.  The format refers to the data
         * blob inside the `clip_data;` use gsf_clip_data_get_data_blob() to get that data blob.
         * @returns The format in which the #GsfClipData's data blob is stored.
         */
        get_format(): ClipFormat;
        /**
         * Queries the Windows clipboard data format for a #GsfClipData.  The `clip_data` must
         * have been created with #GSF_CLIP_FORMAT_WINDOWS_CLIPBOARD.
         * @returns A #GsfClipFormatWindows value. Possible errors: #GSF_ERROR_INVALID_DATA if the data blob in the @clip_data is smaller than it should be; in this case GSF_CLIP_FORMAT_WINDOWS_ERROR will be returned.
         */
        get_windows_clipboard_format(): ClipFormatWindows;
        /**
         * Queries a pointer directly to the clipboard data of a #GsfClipData.  The
         * resulting pointer is not necessarily the same data pointer that was passed to
         * gsf_blob_new() prior to creating the `clip_data`.  For example, if the data is
         * in #GSF_CLIP_FORMAT_WINDOWS_CLIPBOARD format, then it will have extra header
         * bytes in front of the actual metafile data.  This function will skip over
         * those header bytes if necessary and return a pointer to the "real" data.
         * @param ret_size Location to return the size of the returned data buffer.
         * @returns Pointer to the real clipboard data.  The size in bytes of this buffer is returned in the @ret_size argument.
         */
        peek_real_data(ret_size: number): any | null;
    }

    namespace DocMetaData {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Class representing information about a document, such as creator and time of
     * last modification.
     */
    class DocMetaData extends GObject.Object {
        static $gtype: GObject.GType<DocMetaData>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DocMetaData.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DocMetaData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DocMetaData;

        // Signals

        connect<K extends keyof DocMetaData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DocMetaData.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DocMetaData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DocMetaData.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DocMetaData.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DocMetaData.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Iterate through each (key, value) pair in this collection
         * @param func the function called once for each element in the collection
         */
        foreach(func: GLib.HFunc): void;
        /**
         * Take ownership of `name` and `value` and insert a property into `meta`.
         * If a property exists with `name,` it is replaced (The link is lost)
         * @param name the id.
         * @param value #GValue
         */
        insert(name: string, value: GObject.Value | any): void;
        lookup(name: string): DocProp | null;
        /**
         * Extend `xin` so that it can parse a subtree in OpenDoc metadata format
         * @param doc #GsfXMLInDoc
         */
        odf_subtree(doc: XMLIn): void;
        /**
         * Read a stream formated as a set of MS OLE properties from `in` and store the
         * results in `accum`.
         * @param _in #GsfInput
         * @returns A #GError if there was an error.
         */
        read_from_msole(_in: Input): GLib.Error;
        /**
         * Read an OpenDocument metadata stream from `input` and store the properties
         * into `md`.  Overwrite any existing properties with the same id.
         * @param input #GsfInput
         * @returns a #GError if there is a problem.
         */
        read_from_odf(input: Input): GLib.Error;
        /**
         * If `name` does not exist in the collection, do nothing. If `name` does exist,
         * remove it and its value from the collection
         * @param name the non-null string name of the property
         */
        remove(name: string): void;
        size(): number;
        steal(name: string): DocProp | null;
        store(prop: DocProp): void;
        write_to_msole(out: Output, doc_not_component: boolean): boolean;
        write_to_odf(output: XMLOut): boolean;
    }

    namespace DocPropVector {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class DocPropVector extends GObject.Object {
        static $gtype: GObject.GType<DocPropVector>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DocPropVector.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DocPropVector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DocPropVector;

        // Signals

        connect<K extends keyof DocPropVector.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DocPropVector.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DocPropVector.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DocPropVector.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DocPropVector.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DocPropVector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Insert a copy of `value` as the last element of `vector`.
         * @param value The GValue to add to @vector
         */
        append(value: GObject.Value | any): void;
        /**
         * This function returns a string which represents all the GValues in `vector`.
         * The caller is responsible for freeing the result.
         *
         * Returns (transfer full): a string of comma-separated values
         */
        as_string(): string;
    }

    namespace Infile {
        // Signal signatures
        interface SignalSignatures extends Input.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::eof': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::remaining': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Input.ConstructorProps {}
    }

    /**
     * Class representing an input file.
     */
    abstract class Infile extends Input {
        static $gtype: GObject.GType<Infile>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Infile.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Infile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Infile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Infile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Infile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Infile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Infile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Infile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_name_by_index(i: number): string | null;
        vfunc_num_children(): number;

        // Methods

        /**
         * This function finds a child that is several directory levels down
         * the tree.  If, for example, the names "foo", "bar", and "baz" are
         * given, then this function first finds the "foo" directory in the
         * root infile, then locates "bar" within that directory, and finally
         * locates "baz" within that and returns the "baz" child.  In other
         * words, this function finds the "foo/bar/baz" child.
         *
         * New in 1.14.9.
         * @param names A %NULL terminated array of names (e.g. from g_strsplit)
         * @returns a newly created child which must be unrefed.
         */
        child_by_aname(names: string[]): Input;
        /**
         * TODO : For 2.0 api will change to include a #GError.
         * @param i target index
         * @returns a newly created child which must be unrefed.
         */
        child_by_index(i: number): Input;
        /**
         * The function returns a named child of the given infile.  This only
         * works for an immediate child.  If you need to go several levels
         * down use gsf_infile_child_by_aname, for example.
         *
         * TODO : For 2.0 api will change to include a #GError.
         * @param name target name
         * @returns a newly created child which must be unrefed.
         */
        child_by_name(name: string): Input;
        name_by_index(i: number): string | null;
        num_children(): number;
    }

    namespace InfileMSOle {
        // Signal signatures
        interface SignalSignatures extends Infile.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::eof': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::remaining': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Infile.ConstructorProps {}
    }

    class InfileMSOle extends Infile {
        static $gtype: GObject.GType<InfileMSOle>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InfileMSOle.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InfileMSOle.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: Input): InfileMSOle;

        // Signals

        connect<K extends keyof InfileMSOle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfileMSOle.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InfileMSOle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfileMSOle.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InfileMSOle.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InfileMSOle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieves the 16 byte indentifier (often a GUID in MS Windows apps)
         * stored within the directory associated with `ole` and stores it in `res`.
         * @param res 16 byte identifier (often a GUID in MS Windows apps)
         * @returns TRUE on success
         */
        get_class_id(res: number): boolean;
    }

    namespace InfileMSVBA {
        // Signal signatures
        interface SignalSignatures extends Infile.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::eof': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::remaining': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Infile.ConstructorProps {}
    }

    class InfileMSVBA extends Infile {
        static $gtype: GObject.GType<InfileMSVBA>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InfileMSVBA.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InfileMSVBA.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: Infile): InfileMSVBA;

        // Signals

        connect<K extends keyof InfileMSVBA.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfileMSVBA.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InfileMSVBA.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfileMSVBA.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InfileMSVBA.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InfileMSVBA.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * a collection of names and source code.
         * @returns A #GHashTable of names and source code (unknown encoding).
         */
        get_modules(): GLib.HashTable<string, any> | null;
        /**
         * A collection of names and source code which the caller is responsible for destroying.
         * @returns A #GHashTable of names and source code (unknown encoding).
         */
        steal_modules(): GLib.HashTable<string, any> | null;
    }

    namespace InfileStdio {
        // Signal signatures
        interface SignalSignatures extends Infile.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::eof': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::remaining': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Infile.ConstructorProps {}
    }

    class InfileStdio extends Infile {
        static $gtype: GObject.GType<InfileStdio>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InfileStdio.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InfileStdio.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](root: string): InfileStdio;

        // Signals

        connect<K extends keyof InfileStdio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfileStdio.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InfileStdio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfileStdio.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InfileStdio.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InfileStdio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace InfileTar {
        // Signal signatures
        interface SignalSignatures extends Infile.SignalSignatures {
            'notify::source': (pspec: GObject.ParamSpec) => void;
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::eof': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::remaining': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Infile.ConstructorProps {
            source: Input;
        }
    }

    class InfileTar extends Infile {
        static $gtype: GObject.GType<InfileTar>;

        // Properties

        get source(): Input;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InfileTar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InfileTar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: Input): InfileTar;

        // Signals

        connect<K extends keyof InfileTar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfileTar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InfileTar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfileTar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InfileTar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InfileTar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace InfileZip {
        // Signal signatures
        interface SignalSignatures extends Infile.SignalSignatures {
            'notify::compression-level': (pspec: GObject.ParamSpec) => void;
            'notify::internal-parent': (pspec: GObject.ParamSpec) => void;
            'notify::source': (pspec: GObject.ParamSpec) => void;
            'notify::zip64': (pspec: GObject.ParamSpec) => void;
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::eof': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::remaining': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Infile.ConstructorProps {
            compression_level: number;
            compressionLevel: number;
            internal_parent: InfileZip;
            internalParent: InfileZip;
            source: Input;
            zip64: boolean;
        }
    }

    class InfileZip extends Infile {
        static $gtype: GObject.GType<InfileZip>;

        // Properties

        /**
         * Controls the level of compression used for new members.
         */
        get compression_level(): number;
        /**
         * Controls the level of compression used for new members.
         */
        get compressionLevel(): number;
        set internal_parent(val: InfileZip);
        set internalParent(val: InfileZip);
        get source(): Input;
        get zip64(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InfileZip.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InfileZip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: Input): InfileZip;

        // Signals

        connect<K extends keyof InfileZip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfileZip.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InfileZip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfileZip.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InfileZip.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InfileZip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Input {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::eof': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::remaining': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            container: Infile;
            eof: boolean;
            modtime: GLib.DateTime;
            name: string;
            position: number;
            remaining: number;
            size: number;
        }
    }

    /**
     * Class representing an input stream.
     */
    abstract class Input extends GObject.Object {
        static $gtype: GObject.GType<Input>;

        // Properties

        /**
         * The container, optionally %NULL, in which this input lives.
         */
        get container(): Infile;
        /**
         * %TRUE if the end of the file has been reached.
         */
        get eof(): boolean;
        /**
         * The time the input was last updated.  This represents the
         * timestamp from the originating file or `GsfInfile` member.
         * It is not supported by all derived classes.
         */
        get modtime(): GLib.DateTime;
        get name(): string;
        /**
         * The current position in the input.
         */
        get position(): number;
        /**
         * The number of bytes remaining in the file.
         */
        get remaining(): number;
        /**
         * The total number of bytes in the file.
         */
        get size(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Input.SignalSignatures;

        // Fields

        g_object: GObject.Object;
        cur_offset: gsf_off_t;

        // Constructors

        constructor(properties?: Partial<Input.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static mmap_new(filename: string): Input;

        // Signals

        connect<K extends keyof Input.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Input.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Input.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Input.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Input.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Input.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_id(): GLib.Quark;

        // Virtual methods

        /**
         * Duplicates `input` leaving the new one at the same offset.
         */
        vfunc_Dup(): Input | null;
        /**
         * UNIMPLEMENTED BY ANY BACKEND
         * 	and it is probably unnecessary.   gsf_input_get_container provides
         * 	enough power to do what is necessary.
         *
         * Attempts to open a 'sibling' of `input`.  The caller is responsible for
         * managing the resulting object.
         * @param name name.
         */
        vfunc_OpenSibling(name: string): Input;
        /**
         * Move the current location in the input stream.
         * @param offset target offset
         * @param whence determines whether the offset is relative to the beginning or          the end of the stream, or to the current location.
         */
        vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean;

        // Methods

        /**
         * Copy the contents from `input` to `output` from their respective
         * current positions. So if you want to be sure to copy *everything*,
         * make sure to call gsf_input_seek (input, 0, G_SEEK_SET) and
         * gsf_output_seek (output, 0, G_SEEK_SET) first, if applicable.
         * @param output a non-null #GsfOutput
         * @returns %TRUE on success
         */
        copy(output: Output): boolean;
        /**
         * Dumps `input'`s contents to STDOUT, optionally in hex format.
         * @param dump_as_hex If %TRUE, dump in hexidecmal format
         */
        dump(dump_as_hex: boolean): void;
        /**
         * Duplicates `input` leaving the new one at the same offset.
         * @returns the duplicate
         */
        dup(): Input | null;
        /**
         * A utility routine that attempts to find the VBA file withint a stream.
         * @returns a GsfInfile
         */
        find_vba(): InfileMSVBA | null;
        get_modtime(): GLib.DateTime;
        /**
         * Read `num_bytes`.  Does not change the current position if there
         * is an error.  Will only read if the entire amount can be read.
         * @param num_bytes number of bytes to read
         * @returns the data read.
         */
        read(num_bytes: number): Uint8Array;
        /**
         * Move the current location in the input stream.
         * @param offset target offset
         * @param whence determines whether the offset is relative to the beginning or          the end of the stream, or to the current location.
         * @returns %TRUE on error.
         */
        seek(offset: gsf_off_t, whence: GLib.SeekType | null): boolean;
        /**
         * Emulate forward seeks by reading.
         * @param pos absolute position to seek to
         * @returns %TRUE if the emulation failed.
         */
        seek_emulate(pos: gsf_off_t): boolean;
        set_container(container?: Infile | null): boolean;
        /**
         * protected.
         * @param modtime the new modification time.
         * @returns %TRUE if the assignment was ok.
         */
        set_modtime(modtime?: GLib.DateTime | null): boolean;
        set_modtime_from_stat(st?: any | null): boolean;
        /**
         * protected.
         * @param name the new name of the stream
         * @returns %TRUE if the assignment was ok.
         */
        set_name(name?: string | null): boolean;
        /**
         * protected.
         * @param filename the (fs-sys encoded) filename
         * @returns %TRUE if the assignment was ok.
         */
        set_name_from_filename(filename: string): boolean;
        set_size(size: gsf_off_t): boolean;
        /**
         * UNIMPLEMENTED BY ANY BACKEND
         * 	and it is probably unnecessary.   gsf_input_get_container provides
         * 	enough power to do what is necessary.
         *
         * Attempts to open a 'sibling' of `input`.  The caller is responsible for
         * managing the resulting object.
         * @param name name.
         * @returns A related #GsfInput
         */
        sibling(name: string): Input;
        tell(): gsf_off_t;
        /**
         * This functions takes ownership of the incoming reference and yields a
         * new one as its output.
         * @returns A stream equivalent to the source stream, but uncompressed if the source was compressed.
         */
        uncompress(): Input;
    }

    namespace InputGZip {
        // Signal signatures
        interface SignalSignatures extends Input.SignalSignatures {
            'notify::raw': (pspec: GObject.ParamSpec) => void;
            'notify::source': (pspec: GObject.ParamSpec) => void;
            'notify::uncompressed-size': (pspec: GObject.ParamSpec) => void;
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::eof': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::remaining': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Input.ConstructorProps {
            raw: boolean;
            source: Input;
            uncompressed_size: number;
            uncompressedSize: number;
        }
    }

    class InputGZip extends Input {
        static $gtype: GObject.GType<InputGZip>;

        // Properties

        get raw(): boolean;
        get source(): Input;
        get uncompressed_size(): number;
        get uncompressedSize(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InputGZip.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InputGZip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: Input): InputGZip;

        // Signals

        connect<K extends keyof InputGZip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputGZip.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InputGZip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputGZip.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputGZip.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InputGZip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace InputGio {
        // Signal signatures
        interface SignalSignatures extends Input.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::eof': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::remaining': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Input.ConstructorProps {}
    }

    class InputGio extends Input {
        static $gtype: GObject.GType<InputGio>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InputGio.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InputGio.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file: Gio.File): InputGio;

        static new_for_path(path: string): InputGio;

        static new_for_uri(uri: string): InputGio;

        // Signals

        connect<K extends keyof InputGio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputGio.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InputGio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputGio.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputGio.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InputGio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace InputHTTP {
        // Signal signatures
        interface SignalSignatures extends Input.SignalSignatures {
            'notify::content-type': (pspec: GObject.ParamSpec) => void;
            'notify::url': (pspec: GObject.ParamSpec) => void;
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::eof': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::remaining': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Input.ConstructorProps {
            content_type: string;
            contentType: string;
            url: string;
        }
    }

    class InputHTTP extends Input {
        static $gtype: GObject.GType<InputHTTP>;

        // Properties

        get content_type(): string;
        get contentType(): string;
        get url(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InputHTTP.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InputHTTP.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](url: string): InputHTTP;

        // Signals

        connect<K extends keyof InputHTTP.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputHTTP.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InputHTTP.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputHTTP.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputHTTP.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InputHTTP.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_content_type(): string;
        get_url(): string;
    }

    namespace InputMemory {
        // Signal signatures
        interface SignalSignatures extends Input.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::eof': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::remaining': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Input.ConstructorProps {}
    }

    class InputMemory extends Input {
        static $gtype: GObject.GType<InputMemory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InputMemory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InputMemory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buf: Uint8Array | string, needs_free: boolean): InputMemory;

        static new_clone(buf: Uint8Array | string): InputMemory;

        static new_from_bzip(source: Input): InputMemory;

        static new_from_iochannel(channel: GLib.IOChannel): InputMemory;

        // Signals

        connect<K extends keyof InputMemory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputMemory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InputMemory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputMemory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputMemory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InputMemory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace InputProxy {
        // Signal signatures
        interface SignalSignatures extends Input.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::eof': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::remaining': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Input.ConstructorProps {}
    }

    class InputProxy extends Input {
        static $gtype: GObject.GType<InputProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InputProxy.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InputProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: Input): InputProxy;

        static new_section(source: Input, offset: gsf_off_t, size: gsf_off_t): InputProxy;

        // Signals

        connect<K extends keyof InputProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputProxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InputProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputProxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputProxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InputProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace InputStdio {
        // Signal signatures
        interface SignalSignatures extends Input.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::eof': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::remaining': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Input.ConstructorProps {}
    }

    class InputStdio extends Input {
        static $gtype: GObject.GType<InputStdio>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InputStdio.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InputStdio.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](filename: string): InputStdio;

        static new_FILE(filename: string, file: any | null, keep_open: boolean): InputStdio;

        // Signals

        connect<K extends keyof InputStdio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputStdio.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InputStdio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputStdio.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputStdio.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InputStdio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace InputTextline {
        // Signal signatures
        interface SignalSignatures extends Input.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::eof': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::remaining': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Input.ConstructorProps {}
    }

    class InputTextline extends Input {
        static $gtype: GObject.GType<InputTextline>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InputTextline.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InputTextline.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: Input): InputTextline;

        // Signals

        connect<K extends keyof InputTextline.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputTextline.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InputTextline.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputTextline.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputTextline.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InputTextline.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * A utility routine to read things line by line from the underlying source.
         * Trailing newlines and carriage returns are stripped, and the resultant buffer
         * can be edited.
         * @returns the string read, or %NULL on eof.
         */
        ascii_gets(): Uint8Array | null;
        /**
         * A utility routine to read things line by line from the underlying source.
         * Trailing newlines and carriage returns are stripped, and the resultant buffer
         * can be edited.
         * @returns the string read, or %NULL on eof.
         */
        utf8_gets(): Uint8Array | null;
    }

    namespace ODFOut {
        // Signal signatures
        interface SignalSignatures extends XMLOut.SignalSignatures {
            'notify::odf-version': (pspec: GObject.ParamSpec) => void;
            'notify::pretty-print': (pspec: GObject.ParamSpec) => void;
            'notify::sink': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends XMLOut.ConstructorProps {
            odf_version: number;
            odfVersion: number;
        }
    }

    class ODFOut extends XMLOut {
        static $gtype: GObject.GType<ODFOut>;

        // Properties

        get odf_version(): number;
        get odfVersion(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ODFOut.SignalSignatures;

        // Fields

        base: XMLOut;
        priv: any;

        // Constructors

        constructor(properties?: Partial<ODFOut.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ODFOut.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ODFOut.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ODFOut.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ODFOut.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ODFOut.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ODFOut.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_version(): number;
        get_version_string(): string;
    }

    namespace Outfile {
        // Signal signatures
        interface SignalSignatures extends Output.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::is-closed': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Output.ConstructorProps {}
    }

    /**
     * Class representing an output file, counterpart to #GsfInfile.
     */
    abstract class Outfile extends Output {
        static $gtype: GObject.GType<Outfile>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Outfile.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Outfile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Outfile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Outfile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Outfile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Outfile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Outfile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Outfile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        new_child(name: string, is_dir: boolean): Output;
        /**
         * A convenience wrapper to create a child in `dir` of `content_type` then create
         * a `type` relation to `parent`
         * @param name target name
         * @param content_type non-%NULL content type
         * @param parent #GsfOutfile
         * @param type target type
         * @returns the new part.
         */
        open_pkg_add_rel(name: string, content_type: string, parent: Outfile, type: string): Output;
    }

    namespace OutfileMSOle {
        // Signal signatures
        interface SignalSignatures extends Outfile.SignalSignatures {
            'notify::big-block-size': (pspec: GObject.ParamSpec) => void;
            'notify::sink': (pspec: GObject.ParamSpec) => void;
            'notify::small-block-size': (pspec: GObject.ParamSpec) => void;
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::is-closed': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Outfile.ConstructorProps {
            big_block_size: number;
            bigBlockSize: number;
            sink: Output;
            small_block_size: number;
            smallBlockSize: number;
        }
    }

    class OutfileMSOle extends Outfile {
        static $gtype: GObject.GType<OutfileMSOle>;

        // Properties

        get big_block_size(): number;
        get bigBlockSize(): number;
        get sink(): Output;
        get small_block_size(): number;
        get smallBlockSize(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OutfileMSOle.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OutfileMSOle.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sink: Output): OutfileMSOle;

        static new_full(sink: Output, bb_size: number, sb_size: number): OutfileMSOle;

        // Signals

        connect<K extends keyof OutfileMSOle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutfileMSOle.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutfileMSOle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutfileMSOle.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutfileMSOle.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OutfileMSOle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Write `clsid` to the directory associated with `ole`.
         * @param clsid Identifier (often a GUID in MS Windows apps)
         * @returns %TRUE on success.
         */
        set_class_id(clsid: Uint8Array | string): boolean;
    }

    namespace OutfileOpenPkg {
        // Signal signatures
        interface SignalSignatures extends Outfile.SignalSignatures {
            'notify::content-type': (pspec: GObject.ParamSpec) => void;
            'notify::is-dir': (pspec: GObject.ParamSpec) => void;
            'notify::sink': (pspec: GObject.ParamSpec) => void;
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::is-closed': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Outfile.ConstructorProps {
            content_type: string;
            contentType: string;
            is_dir: boolean;
            isDir: boolean;
            sink: Outfile;
        }
    }

    class OutfileOpenPkg extends Outfile {
        static $gtype: GObject.GType<OutfileOpenPkg>;

        // Properties

        get content_type(): string;
        get contentType(): string;
        get is_dir(): boolean;
        get isDir(): boolean;
        get sink(): Outfile;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OutfileOpenPkg.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OutfileOpenPkg.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sink: Outfile): OutfileOpenPkg;

        // Signals

        connect<K extends keyof OutfileOpenPkg.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutfileOpenPkg.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutfileOpenPkg.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutfileOpenPkg.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutfileOpenPkg.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OutfileOpenPkg.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add an external relation to `parent`.
         * @param target target type
         * @param content_type target content
         * @returns The id of the relation.  The string is managed by the parent and should not be changed or freed by the caller.
         */
        add_extern_rel(target: string, content_type: string): string;
        /**
         * Create a relationship between `child` and `parent` of `type`.
         * @param parent #GsfOutfileOpenPkg
         * @param type target type
         * @returns the relID which the caller does not own 	but will live as long as @parent.
         */
        relate(parent: OutfileOpenPkg, type: string): string;
        set_content_type(content_type: string): void;
        /**
         * Assigns a GsfOutput (`sink)` to store the package into.
         * @param sink #GsfOutput
         */
        set_sink(sink: Output): void;
    }

    namespace OutfileStdio {
        // Signal signatures
        interface SignalSignatures extends Outfile.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::is-closed': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Outfile.ConstructorProps {}
    }

    class OutfileStdio extends Outfile {
        static $gtype: GObject.GType<OutfileStdio>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OutfileStdio.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OutfileStdio.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](root: string): OutfileStdio;

        // Signals

        connect<K extends keyof OutfileStdio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutfileStdio.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutfileStdio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutfileStdio.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutfileStdio.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OutfileStdio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace OutfileZip {
        // Signal signatures
        interface SignalSignatures extends Outfile.SignalSignatures {
            'notify::compression-level': (pspec: GObject.ParamSpec) => void;
            'notify::deflate-level': (pspec: GObject.ParamSpec) => void;
            'notify::entry-name': (pspec: GObject.ParamSpec) => void;
            'notify::sink': (pspec: GObject.ParamSpec) => void;
            'notify::zip64': (pspec: GObject.ParamSpec) => void;
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::is-closed': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Outfile.ConstructorProps {
            compression_level: number;
            compressionLevel: number;
            deflate_level: number;
            deflateLevel: number;
            entry_name: string;
            entryName: string;
            sink: Output;
            zip64: number;
        }
    }

    class OutfileZip extends Outfile {
        static $gtype: GObject.GType<OutfileZip>;

        // Properties

        get compression_level(): number;
        get compressionLevel(): number;
        get deflate_level(): number;
        get deflateLevel(): number;
        get entry_name(): string;
        get entryName(): string;
        get sink(): Output;
        get zip64(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OutfileZip.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OutfileZip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sink: Output): OutfileZip;

        // Signals

        connect<K extends keyof OutfileZip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutfileZip.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutfileZip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutfileZip.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutfileZip.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OutfileZip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_compression_method(method: ZipCompressionMethod | null): boolean;
    }

    namespace Output {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::is-closed': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            container: Outfile;
            is_closed: boolean;
            isClosed: boolean;
            modtime: GLib.DateTime;
            name: string;
            position: number;
            size: number;
        }
    }

    /**
     * Class representing an output stream, counterpart to #GsfInput.
     */
    abstract class Output extends GObject.Object {
        static $gtype: GObject.GType<Output>;

        // Properties

        /**
         * The container, optionally %NULL, in which this output lives.
         */
        get container(): Outfile;
        set container(val: Outfile);
        /**
         * %TRUE if the output has been closed.
         */
        get is_closed(): boolean;
        /**
         * %TRUE if the output has been closed.
         */
        get isClosed(): boolean;
        /**
         * The time the output was last updated.  This must be set on object
         * construction and represents the timestamp to put on the resulting
         * file or #GsfOutfile member.  Not all derived classes will actually
         * do anything with this property.
         */
        get modtime(): GLib.DateTime;
        get name(): string;
        set name(val: string);
        /**
         * The current position in the output.
         */
        get position(): number;
        /**
         * The current file size.
         */
        get size(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Output.SignalSignatures;

        // Fields

        g_object: GObject.Object;
        cur_size: gsf_off_t;
        cur_offset: gsf_off_t;
        wrapped_by: GObject.Object;
        err: GLib.Error;
        printf_buf: string;
        printf_buf_size: number;

        // Constructors

        constructor(properties?: Partial<Output.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Output.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Output.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Output.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Output.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Output.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Output.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_id(): GLib.Quark;
        static unwrap(wrapper: GObject.Object, wrapee: Output): boolean;
        static wrap(wrapper: GObject.Object, wrapee: Output): boolean;

        // Virtual methods

        /**
         * Close a stream.
         */
        vfunc_Close(): boolean;
        /**
         * Reposition in output stream `output`. `whence` specifies what the offset is
         * relative to: the beginning of the stream (%G_SEEK_SET), current position in
         * the stream (%G_SEEK_CUR) or the end of the stream (%G_SEEK_END).
         * This function is similar to
         * <citerefentry><refentrytitle>fseek</refentrytitle>
         * <manvolnum>3</manvolnum></citerefentry>.
         * @param offset Relative amount to reposition
         * @param whence What the offset is relative to.
         */
        vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean;
        /**
         * Write `num_bytes` of `data` to `output`.
         * @param data Data to write.
         */
        vfunc_Write(data: Uint8Array | string): boolean;

        // Methods

        /**
         * Close a stream.
         * @returns %FALSE on error
         */
        close(): boolean;
        error(): GLib.Error | null;
        get_modtime(): GLib.DateTime | null;
        /**
         * Like fputs, this assumes that the line already ends with a newline
         * @param line Nul terminated string to write
         * @returns %TRUE if successful, %FALSE if not
         */
        puts(line: string): boolean;
        /**
         * Reposition in output stream `output`. `whence` specifies what the offset is
         * relative to: the beginning of the stream (%G_SEEK_SET), current position in
         * the stream (%G_SEEK_CUR) or the end of the stream (%G_SEEK_END).
         * This function is similar to
         * <citerefentry><refentrytitle>fseek</refentrytitle>
         * <manvolnum>3</manvolnum></citerefentry>.
         * @param offset Relative amount to reposition
         * @param whence What the offset is relative to.
         * @returns %FALSE on error.
         */
        seek(offset: gsf_off_t, whence: GLib.SeekType | null): boolean;
        /**
         * <note>This is a utility routine that should only be used by derived
         * outputs.</note>
         * @param container #GsfOutfile
         * @returns %TRUE if the assignment was ok.
         */
        set_container(container?: Outfile | null): boolean;
        set_modtime(modtime?: GLib.DateTime | null): boolean;
        /**
         * <note>This is a utility routine that should only be used by derived
         * outputs.</note>
         * @param name the new name
         * @returns %TRUE if the assignment was ok.
         */
        set_name(name?: string | null): boolean;
        /**
         * <note>This is a utility routine that should only be used by derived
         * outputs.</note>
         * @param filename the (fs-sys encoded) filename
         * @returns %TRUE if the assignment was ok.
         */
        set_name_from_filename(filename?: string | null): boolean;
        /**
         * Tell the current position in `output,` similar to
         * <citerefentry><refentrytitle>ftell</refentrytitle>
         * <manvolnum>3</manvolnum></citerefentry>.
         * @returns the current position in the file
         */
        tell(): gsf_off_t;
        /**
         * Write `num_bytes` of `data` to `output`.
         * @param data Data to write.
         * @returns %FALSE on error.
         */
        write(data: Uint8Array | string): boolean;
    }

    namespace OutputBzip {
        // Signal signatures
        interface SignalSignatures extends Output.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::is-closed': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Output.ConstructorProps {}
    }

    class OutputBzip extends Output {
        static $gtype: GObject.GType<OutputBzip>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OutputBzip.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OutputBzip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sink: Output): OutputBzip;

        // Signals

        connect<K extends keyof OutputBzip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputBzip.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutputBzip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputBzip.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutputBzip.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OutputBzip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace OutputCsv {
        // Signal signatures
        interface SignalSignatures extends Output.SignalSignatures {
            'notify::eol': (pspec: GObject.ParamSpec) => void;
            'notify::quote': (pspec: GObject.ParamSpec) => void;
            'notify::quoting-mode': (pspec: GObject.ParamSpec) => void;
            'notify::quoting-on-whitespace': (pspec: GObject.ParamSpec) => void;
            'notify::quoting-triggers': (pspec: GObject.ParamSpec) => void;
            'notify::separator': (pspec: GObject.ParamSpec) => void;
            'notify::sink': (pspec: GObject.ParamSpec) => void;
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::is-closed': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Output.ConstructorProps {
            eol: string;
            quote: string;
            quoting_mode: OutputCsvQuotingMode;
            quotingMode: OutputCsvQuotingMode;
            quoting_on_whitespace: boolean;
            quotingOnWhitespace: boolean;
            quoting_triggers: string;
            quotingTriggers: string;
            separator: string;
            sink: Output;
        }
    }

    class OutputCsv extends Output {
        static $gtype: GObject.GType<OutputCsv>;

        // Properties

        get eol(): string;
        set eol(val: string);
        get quote(): string;
        set quote(val: string);
        get quoting_mode(): OutputCsvQuotingMode;
        set quoting_mode(val: OutputCsvQuotingMode);
        get quotingMode(): OutputCsvQuotingMode;
        set quotingMode(val: OutputCsvQuotingMode);
        get quoting_on_whitespace(): boolean;
        set quoting_on_whitespace(val: boolean);
        get quotingOnWhitespace(): boolean;
        set quotingOnWhitespace(val: boolean);
        get quoting_triggers(): string;
        set quoting_triggers(val: string);
        get quotingTriggers(): string;
        set quotingTriggers(val: string);
        get separator(): string;
        set separator(val: string);
        get sink(): Output;
        set sink(val: Output);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OutputCsv.SignalSignatures;

        // Fields

        output: Output;
        quote_len: number;
        eol_len: number;
        separator_len: number;
        fields_on_line: boolean;
        buf: GLib.String;

        // Constructors

        constructor(properties?: Partial<OutputCsv.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof OutputCsv.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputCsv.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutputCsv.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputCsv.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutputCsv.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OutputCsv.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        write_eol(): boolean;
        write_field(field: string, len: number): boolean;
    }

    namespace OutputGZip {
        // Signal signatures
        interface SignalSignatures extends Output.SignalSignatures {
            'notify::deflate-level': (pspec: GObject.ParamSpec) => void;
            'notify::raw': (pspec: GObject.ParamSpec) => void;
            'notify::sink': (pspec: GObject.ParamSpec) => void;
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::is-closed': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Output.ConstructorProps {
            deflate_level: number;
            deflateLevel: number;
            raw: boolean;
            sink: Output;
        }
    }

    class OutputGZip extends Output {
        static $gtype: GObject.GType<OutputGZip>;

        // Properties

        get deflate_level(): number;
        set deflate_level(val: number);
        get deflateLevel(): number;
        set deflateLevel(val: number);
        get raw(): boolean;
        get sink(): Output;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OutputGZip.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OutputGZip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sink: Output): OutputGZip;

        // Signals

        connect<K extends keyof OutputGZip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputGZip.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutputGZip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputGZip.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutputGZip.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OutputGZip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace OutputGio {
        // Signal signatures
        interface SignalSignatures extends Output.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::is-closed': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Output.ConstructorProps {}
    }

    class OutputGio extends Output {
        static $gtype: GObject.GType<OutputGio>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OutputGio.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OutputGio.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file: Gio.File): OutputGio;

        static new_for_path(path: string): OutputGio;

        static new_for_uri(uri: string): OutputGio;

        // Signals

        connect<K extends keyof OutputGio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputGio.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutputGio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputGio.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutputGio.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OutputGio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace OutputIOChannel {
        // Signal signatures
        interface SignalSignatures extends Output.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::is-closed': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Output.ConstructorProps {}
    }

    class OutputIOChannel extends Output {
        static $gtype: GObject.GType<OutputIOChannel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OutputIOChannel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OutputIOChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](channel: GLib.IOChannel): OutputIOChannel;

        // Signals

        connect<K extends keyof OutputIOChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputIOChannel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutputIOChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputIOChannel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutputIOChannel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OutputIOChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace OutputIconv {
        // Signal signatures
        interface SignalSignatures extends Output.SignalSignatures {
            'notify::fallback': (pspec: GObject.ParamSpec) => void;
            'notify::input-charset': (pspec: GObject.ParamSpec) => void;
            'notify::output-charset': (pspec: GObject.ParamSpec) => void;
            'notify::sink': (pspec: GObject.ParamSpec) => void;
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::is-closed': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Output.ConstructorProps {
            fallback: string;
            input_charset: string;
            inputCharset: string;
            output_charset: string;
            outputCharset: string;
            sink: Output;
        }
    }

    class OutputIconv extends Output {
        static $gtype: GObject.GType<OutputIconv>;

        // Properties

        /**
         * Either NULL or a UTF-8 string (representable in the target encoding)
         * to convert and output in place of characters that cannot be represented
         * in the target encoding.  NULL means use \u1234 or \U12345678 format.
         */
        get fallback(): string;
        set fallback(val: string);
        get input_charset(): string;
        get inputCharset(): string;
        get output_charset(): string;
        get outputCharset(): string;
        get sink(): Output;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OutputIconv.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OutputIconv.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sink: Output, dst: string, src: string): OutputIconv;

        // Signals

        connect<K extends keyof OutputIconv.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputIconv.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutputIconv.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputIconv.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutputIconv.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OutputIconv.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace OutputMemory {
        // Signal signatures
        interface SignalSignatures extends Output.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::is-closed': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Output.ConstructorProps {}
    }

    class OutputMemory extends Output {
        static $gtype: GObject.GType<OutputMemory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OutputMemory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OutputMemory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): OutputMemory;

        // Signals

        connect<K extends keyof OutputMemory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputMemory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutputMemory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputMemory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutputMemory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OutputMemory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_bytes(): Uint8Array | null;
        steal_bytes(): Uint8Array | null;
    }

    namespace OutputStdio {
        // Signal signatures
        interface SignalSignatures extends Output.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::is-closed': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Output.ConstructorProps {}
    }

    class OutputStdio extends Output {
        static $gtype: GObject.GType<OutputStdio>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OutputStdio.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OutputStdio.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](filename: string): OutputStdio;

        // Signals

        connect<K extends keyof OutputStdio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputStdio.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutputStdio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputStdio.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutputStdio.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OutputStdio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace SharedMemory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class SharedMemory extends GObject.Object {
        static $gtype: GObject.GType<SharedMemory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SharedMemory.SignalSignatures;

        // Fields

        g_object: GObject.Object;
        buf: any;
        size: gsf_off_t;
        needs_free: boolean;
        needs_unmap: boolean;

        // Constructors

        constructor(properties?: Partial<SharedMemory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static mmapped_new(buf: any | null, size: gsf_off_t): SharedMemory;

        static ['new'](buf: any | null, size: gsf_off_t, needs_free: boolean): SharedMemory;

        // Signals

        connect<K extends keyof SharedMemory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SharedMemory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SharedMemory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SharedMemory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SharedMemory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SharedMemory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace StructuredBlob {
        // Signal signatures
        interface SignalSignatures extends Infile.SignalSignatures {
            'notify::container': (pspec: GObject.ParamSpec) => void;
            'notify::eof': (pspec: GObject.ParamSpec) => void;
            'notify::modtime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::remaining': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Infile.ConstructorProps {}
    }

    class StructuredBlob extends Infile {
        static $gtype: GObject.GType<StructuredBlob>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StructuredBlob.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StructuredBlob.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof StructuredBlob.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StructuredBlob.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StructuredBlob.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StructuredBlob.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StructuredBlob.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StructuredBlob.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Create a tree of binary blobs with unknown content from a #GsfInput or
         * #GsfInfile and store it in a newly created #GsfStructuredBlob.
         * @param input An input (potentially a GsfInfile) holding the blob
         */
        static read(input: Input): StructuredBlob;

        // Methods

        /**
         * Dumps structured blob `blob` onto the `container`.  Will fail if the output is
         * not an Outfile and blob has multiple streams.
         * @param container #GsfOutfile
         * @returns %TRUE on success.
         */
        write(container: Outfile): boolean;
    }

    namespace XMLOut {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::pretty-print': (pspec: GObject.ParamSpec) => void;
            'notify::sink': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            pretty_print: boolean;
            prettyPrint: boolean;
            sink: Output;
        }
    }

    class XMLOut extends GObject.Object {
        static $gtype: GObject.GType<XMLOut>;

        // Properties

        get pretty_print(): boolean;
        set pretty_print(val: boolean);
        get prettyPrint(): boolean;
        set prettyPrint(val: boolean);
        get sink(): Output;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: XMLOut.SignalSignatures;

        // Fields

        base: GObject.Object;
        output: Output;
        priv: any;

        // Constructors

        constructor(properties?: Partial<XMLOut.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](output: Output): XMLOut;

        // Signals

        connect<K extends keyof XMLOut.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XMLOut.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof XMLOut.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XMLOut.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof XMLOut.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<XMLOut.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Dump `len` bytes in `data` into the content of node `id` using base64
         * @param id tag id, or %NULL for node content
         * @param data Data to be written
         */
        add_base64(id: string | null, data: Uint8Array | string): void;
        /**
         * dump boolean value `val` to an attribute named `id` or as the nodes content
         * Use '1' or '0' to simplify import
         * @param id tag id, or %NULL for node content
         * @param val a boolean
         */
        add_bool(id: string | null, val: boolean): void;
        /**
         * dump Color `r`.`g`.`b` to an attribute named `id` or as the nodes content
         * @param id tag id, or %NULL for node content
         * @param r Red value
         * @param g Green value
         * @param b Blue value
         */
        add_color(id: string | null, r: number, g: number, b: number): void;
        /**
         * dump `val_utf8` to an attribute named `id` or as the nodes content escaping
         * characters as necessary.  If `val_utf8` is %NULL do nothing (no warning, no
         * output)
         * @param id tag id, or %NULL for node content
         * @param val_utf8 a utf8 encoded string
         */
        add_cstr(id?: string | null, val_utf8?: string | null): void;
        /**
         * dump `val_utf8` to an attribute named `id` without checking to see if
         * the content needs escaping.  A useful performance enhancement when
         * the application knows that structure of the content well.  If
         * `val_utf8` is %NULL do nothing (no warning, no output)
         * @param id tag id, or %NULL for node content
         * @param val_utf8 a utf8 encoded string to export
         */
        add_cstr_unchecked(id?: string | null, val_utf8?: string | null): void;
        /**
         * Output the name of value `val` of enumeration type `etype`.
         * @param id tag id, or %NULL for node content
         * @param etype #GType
         * @param val enum element number
         */
        add_enum(id: string | null, etype: GObject.GType, val: number): void;
        /**
         * dump float value `val` to an attribute named `id` or as the nodes
         * content with precision `precision`.  The number will be formattted
         * according to the "C" locale.
         * @param id tag id, or %NULL for node content
         * @param val the value
         * @param precision the number of significant digits to use, -1 meaning "enough".
         */
        add_float(id: string | null, val: number, precision: number): void;
        /**
         * Output the value of `val` as a string.  Does NOT store any type information
         * with the string, just thevalue.
         * @param id tag id, or %NULL for node content
         * @param val #GValue
         */
        add_gvalue(id: string | null, val: GObject.Value | any): void;
        /**
         * dump integer value `val` to an attribute named `id` or as the nodes content
         * @param id tag id, or %NULL for node content
         * @param val the value
         */
        add_int(id: string | null, val: number): void;
        /**
         * dump unsigned integer value `val` to an attribute named `id` or as the nodes
         * content
         * @param id tag id, or %NULL for node content
         * @param val the value
         */
        add_uint(id: string | null, val: number): void;
        /**
         * Closes/ends an XML element.
         * @returns the element that has been closed.
         */
        end_element(): string;
        /**
         * Get the #GsfOutput we are writing to..
         * @returns #GsfInput
         */
        get_output(): Output | null;
        get_pretty_print(): boolean;
        /**
         * Store some optional &lt;!DOCTYPE .. &gt; content
         * @param type the document type declaration
         */
        set_doc_type(type: string): void;
        set_pretty_print(pp: boolean): boolean;
        /**
         * Convenience routine to output a simple `id` element with content `content`.
         * @param id Element name
         * @param content Content of the element
         */
        simple_element(id: string, content: string): void;
        /**
         * Convenience routine to output an element `id` with float value `val` using
         * `precision` significant digits.
         * @param id Element name
         * @param val Element value
         * @param precision the number of significant digits to use, -1 meaning "enough".
         */
        simple_float_element(id: string, val: number, precision: number): void;
        /**
         * Convenience routine to output an element `id` with integer value `val`.
         * @param id Element name
         * @param val Element value
         */
        simple_int_element(id: string, val: number): void;
        /**
         * Output a start element `id,` if necessary preceeded by an XML declaration.
         * @param id Element name
         */
        start_element(id: string): void;
    }

    type BlobClass = typeof Blob;
    abstract class BlobPrivate {
        static $gtype: GObject.GType<BlobPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ClipDataClass = typeof ClipData;
    abstract class ClipDataPrivate {
        static $gtype: GObject.GType<ClipDataPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Class representing a properties of a document.
     */
    class DocProp {
        static $gtype: GObject.GType<DocProp>;

        // Constructors

        constructor(name: string);
        _init(...args: any[]): void;

        static ['new'](name: string): DocProp;

        // Methods

        /**
         * A debugging utility to dump `prop` as text via g_print
         * New in 1.14.2
         */
        dump(): void;
        /**
         * Release the given property.
         */
        free(): void;
        get_link(): string | null;
        get_name(): string;
        get_val(): unknown;
        /**
         * Sets `prop'`s link to `link`
         * @param link a link.
         */
        set_link(link?: string | null): void;
        /**
         * Assigns `val` to `prop,` and unsets and frees the current value.
         * @param val #GValue
         */
        set_val(val: GObject.Value | any): void;
        swap_val(val: GObject.Value | any): unknown;
    }

    type InfileClass = typeof Infile;
    type InputClass = typeof Input;
    class MSOleSortingKey {
        static $gtype: GObject.GType<MSOleSortingKey>;

        // Constructors

        constructor(name: string);
        _init(...args: any[]): void;

        static ['new'](name: string): MSOleSortingKey;

        // Methods

        cmp(b: MSOleSortingKey): number;
        free(): void;
    }

    type ODFOutClass = typeof ODFOut;
    abstract class OpenPkgRel {
        static $gtype: GObject.GType<OpenPkgRel>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        get_target(): string;
        get_type(): string;
        is_extern(): boolean;
    }

    abstract class OpenPkgRels {
        static $gtype: GObject.GType<OpenPkgRels>;

        // Constructors

        _init(...args: any[]): void;
    }

    type OutfileClass = typeof Outfile;
    type OutputClass = typeof Output;
    type OutputCsvClass = typeof OutputCsv;
    type OutputIconvClass = typeof OutputIconv;
    /**
     * A point in time.
     */
    class Timestamp {
        static $gtype: GObject.GType<Timestamp>;

        // Fields

        date: GLib.Date;
        seconds: number;
        time_zone: GLib.String;
        timet: number;

        // Constructors

        constructor(
            properties?: Partial<{
                date: GLib.Date;
                seconds: number;
                time_zone: GLib.String;
                timet: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): Timestamp;

        // Methods

        /**
         * Produce a string representation (ISO 8601 format) of `stamp`.
         * @returns a string representation of @stamp. When @stamp is invalid, the representation is "&lt;invalid&gt;".
         */
        as_string(): string;
        /**
         * Copies a timestamp.
         * @returns a separate copy of @stamp.
         */
        copy(): Timestamp;
        /**
         * Compare timestamps `a` and `b`.
         * @param b another timestamp
         * @returns true if @a and @b represent the same point in time; false otherwise.
         */
        equal(b: Timestamp): boolean;
        /**
         * Releases the memory in use for `stamp` (if any).
         */
        free(): void;
        hash(): number;
        /**
         * Parser for time stamps.  Requires a ISO 8601 formatted string.
         * @param spec The string to parse
         * @returns %TRUE on success
         */
        load_from_string(spec: string): number;
        set_time(t: number): void;
        /**
         * Calls g_value_set_box (value, stamp);
         * @param value #GValue
         */
        to_value(value: GObject.Value | any): void;
    }

    abstract class XMLBlob {
        static $gtype: GObject.GType<XMLBlob>;

        // Constructors

        _init(...args: any[]): void;
    }

    class XMLIn {
        static $gtype: GObject.GType<XMLIn>;

        // Fields

        user_state: any;
        content: GLib.String;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * According to `state` is `str` in the namespace `ns_id` ?
         * @param str string to check
         * @param ns_id the namespace id
         * @returns a pointer to @str after the namespace if successful, otherwise %NULL.
         */
        check_ns(str: string, ns_id: number): string | null;
        /**
         * (New in 1.14.2)
         * @returns (but does not reference) the stream being parsed.
         */
        get_input(): Input;
        /**
         * Checks to see if `str` is the same as `ns_id:`:`name` with either an explicit
         * namespace or the current default namespace.
         * @param str The potentially namespace qualified node name.
         * @param ns_id The name space id to check
         * @param name The target node name
         * @returns %TRUE if @str == @ns_id:@name according to @state.
         */
        namecmp(str: string, ns_id: number, name: string): boolean;
        /**
         * Take the first node from `doc` as the current node and call its start handler.
         * @param doc #GsfXMLInDoc
         * @param new_state arbitrary content for the parser
         * @param dtor #GsfXMLInExtDtor
         * @param attrs array of xmlChar const *
         */
        push_state(doc: XMLInDoc, new_state: any | null, dtor: XMLInExtDtor, attrs: string[]): void;
        /**
         * (New in 1.14.33)
         *
         * This provides a means to silently ignore unknown tags in contexts where
         * they are expected.
         * @param silent whether to be silent about unknown tags
         */
        set_silent_unknowns(silent: boolean): void;
    }

    class XMLInDoc {
        static $gtype: GObject.GType<XMLInDoc>;

        // Constructors

        constructor(nodes: XMLInNode[], ns: XMLInNS[]);
        _init(...args: any[]): void;

        static ['new'](nodes: XMLInNode[], ns: XMLInNS[]): XMLInDoc;

        // Methods

        /**
         * Adds additional nodes to the structure of `doc`
         * @param nodes %NULL terminated array of #GsfXMLInNode
         */
        add_nodes(nodes: XMLInNode[]): void;
        /**
         * Free up resources
         */
        free(): void;
        /**
         * Read an xml document from `input` and parse based on the the descriptor in
         * `doc`
         * @param input #GsfInput
         * @param user_state arbitrary content stored in the parser
         * @returns %FALSE on error
         */
        parse(input: Input, user_state?: any | null): boolean;
        /**
         * Call the function `handler` when an unexpected child node is found
         * @param handler The function to call
         */
        set_unknown_handler(handler: XMLInUnknownFunc): void;
    }

    class XMLInNS {
        static $gtype: GObject.GType<XMLInNS>;

        // Fields

        uri: string;
        ns_id: number;

        // Constructors

        constructor(
            properties?: Partial<{
                uri: string;
                ns_id: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class XMLInNode {
        static $gtype: GObject.GType<XMLInNode>;

        // Fields

        id: string;
        ns_id: number;
        name: string;
        parent_id: string;
        has_content: XMLContent;
        check_children_for_ns: number;
        share_children_with_parent: number;

        // Constructors

        _init(...args: any[]): void;
    }

    type XMLOutClass = typeof XMLOut;
    type gsf_off_t = number;
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

export default Gsf;

// END
