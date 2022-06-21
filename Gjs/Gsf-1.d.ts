// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gsf-1
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Gsf {

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
enum Error {
    /**
     * Memory allocation failed
     */
    OUT_OF_MEMORY,
    /**
     * Invalid data encountered (e.g. not enough data)
     */
    INVALID_DATA,
}
/**
 * Controls when to add quotes around fields.
 */
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
    TODO_2ND,
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
const META_NAME_BYTE_COUNT: string
/**
 * (Unsigned Integer) Identifier representing the case-sensitiveness.
 * <note>of what ?? why is it an integer ??</note>
 */
const META_NAME_CASE_SENSITIVE: string
/**
 * (String) Category of the document. <note>example???</note>
 */
const META_NAME_CATEGORY: string
/**
 * (Integer) Count of cells in the spread-sheet document, if appropriate.
 */
const META_NAME_CELL_COUNT: string
/**
 * (Integer) Count of characters in the document.
 * 
 * TODO See how to sync this with ODF's document-statistic
 */
const META_NAME_CHARACTER_COUNT: string
/**
 * (UnsignedShort) The MS codepage to encode strings for metadata
 * 1.14.0	Clarified that this is unique from _NAME_CODEPAGE in msole
 */
const META_NAME_CODEPAGE: string
/**
 * (String) Name of the company/organization that the "CREATOR" entity is
 * associated with.
 * 
 * 1.14.1	Moved from "gsf:company" to "dc:publisher".
 */
const META_NAME_COMPANY: string
/**
 * (String) An entity primarily responsible for making the content of the
 * resource typically a person, organization, or service.
 * 
 * 1.14.0	Moved from "gsf" to "dc".
 */
const META_NAME_CREATOR: string
/**
 * (Date as ISO String) A date associated with an event in the life cycle of
 * the resource (creation/publication date).
 * Moved from gsf:date-created to meta:creation-date. This way can be used correctly
 * by OpenDocument and Gnumeric.
 */
const META_NAME_DATE_CREATED: string
/**
 * (GsfTimestamp) The last time this document was saved.
 * 
 * 1.14.0	Moved from dc:date-modified to dc:date.
 */
const META_NAME_DATE_MODIFIED: string
/**
 * (String) An account of the content of the resource.
 */
const META_NAME_DESCRIPTION: string
/**
 * (None) Reserved name (PID) for Dictionary
 */
const META_NAME_DICTIONARY: string
/**
 * (Vector of strings) Names of the 'interesting' parts of the document.  In
 * spreadsheets this is a list of the sheet names, and the named expressions.
 * From MSOLE
 */
const META_NAME_DOCUMENT_PARTS: string
/**
 * (Date as ISO String) The total-time taken until the last modification.
 * Moved from "gsf" to "meta". This way can be used correctly by OpenDocument
 * and Gnumeric.
 */
const META_NAME_EDITING_DURATION: string
/**
 * (String) The application that generated this document. AbiWord, Gnumeric,
 * etc...
 * 
 * 1.14.0 Moved from "gsf" to "meta".
 */
const META_NAME_GENERATOR: string
/**
 * (Vector of string value pairs stored in alternating elements) Store the
 * counts of objects in the document as names 'worksheet' and count '4'
 * From MSOLE
 */
const META_NAME_HEADING_PAIRS: string
/**
 * (Integer) Count of hidden-slides in the presentation document.
 */
const META_NAME_HIDDEN_SLIDE_COUNT: string
/**
 * (Integer) Count of images in the document, if appropriate.
 */
const META_NAME_IMAGE_COUNT: string
/**
 * (String) Specifies the name of the person who created the document
 * initially.
 * 1.14.0 Moved from "gsf" to "meta".
 */
const META_NAME_INITIAL_CREATOR: string
/**
 * (String) Searchable, indexable keywords. Similar to PDF keywords or HTML's
 * meta block.
 */
const META_NAME_KEYWORD: string
/**
 * (GsfDocPropVector of String) Searchable, indexable keywords. Similar to PDF
 * keywords or HTML's meta block.
 */
const META_NAME_KEYWORDS: string
/**
 * (String) The locale language of the intellectual content of the resource
 * 	(basically xx_YY form for us).
 * 1.14.0	Clarified that this is unique from _NAME_CODEPAGE in msole
 */
const META_NAME_LANGUAGE: string
/**
 * (GSF_META_NAME_HEADING_PAIRS) The last time this document was printed.
 * 
 * 1.14.0	Moved from "gsf" to "dc".
 * 1.14.1	Moved back to "gsf" from "dc".
 */
const META_NAME_LAST_PRINTED: string
/**
 * (String) The entity that made the last change to the document, typically a
 * person, organization, or service.
 */
const META_NAME_LAST_SAVED_BY: string
/**
 * (Integer) Count of liness in the document.
 */
const META_NAME_LINE_COUNT: string
/**
 * (Boolean) ???????
 */
const META_NAME_LINKS_DIRTY: string
/**
 * (Unsigned Integer) Identifier representing the default system locale.
 */
const META_NAME_LOCALE_SYSTEM_DEFAULT: string
/**
 * (String) Name of the manager of "CREATOR" entity.
 */
const META_NAME_MANAGER: string
/**
 * (Integer) Count of "multi-media" clips in the document.
 */
const META_NAME_MM_CLIP_COUNT: string
/**
 * (Unknown) User-defined name
 */
const META_NAME_MSOLE_UNKNOWN_17: string
/**
 * (Unknown) User-defined name
 */
const META_NAME_MSOLE_UNKNOWN_18: string
/**
 * (Boolean) User-defined name
 */
const META_NAME_MSOLE_UNKNOWN_19: string
/**
 * (Unknown) User-defined name
 */
const META_NAME_MSOLE_UNKNOWN_20: string
/**
 * (Unknown) User-defined name
 */
const META_NAME_MSOLE_UNKNOWN_21: string
/**
 * (Boolean) User-defined name
 */
const META_NAME_MSOLE_UNKNOWN_22: string
/**
 * (i4) User-defined name
 */
const META_NAME_MSOLE_UNKNOWN_23: string
/**
 * (Integer) Count of "notes" in the document.
 */
const META_NAME_NOTE_COUNT: string
/**
 * (Integer) Count of objects (OLE and other graphics) in the document, if
 * appropriate.
 */
const META_NAME_OBJECT_COUNT: string
/**
 * (Integer) Count of pages in the document, if appropriate.
 */
const META_NAME_PAGE_COUNT: string
/**
 * (Integer) Count of paragraphs in the document, if appropriate.
 */
const META_NAME_PARAGRAPH_COUNT: string
/**
 * (String) Type of presentation, like "On-screen Show", "SlideView" etc.
 */
const META_NAME_PRESENTATION_FORMAT: string
/**
 * (String) Specifies the name of the last person who printed the document.
 * 
 * 1.14.0	Moved from "gsf" to "meta".
 */
const META_NAME_PRINTED_BY: string
/**
 * (GsfTimestamp) Specifies the date and time when the document was last
 * printed.
 */
const META_NAME_PRINT_DATE: string
/**
 * (Integer) Count of revision on the document, if appropriate.
 * Moved from gsf:revision-count to meta:editing-cycles. This way can be used
 * correctly by OpenDocument and Gnumeric.
 */
const META_NAME_REVISION_COUNT: string
/**
 * (Boolean) ?????
 */
const META_NAME_SCALE: string
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
const META_NAME_SECURITY: string
/**
 * (Integer) Count of slides in the presentation document.
 */
const META_NAME_SLIDE_COUNT: string
/**
 * (Integer) Count of pages in the document, if appropriate.
 */
const META_NAME_SPREADSHEET_COUNT: string
/**
 * (String) The topic of the content of the resource,
 * <emphasis>typically</emphasis> including keywords.
 */
const META_NAME_SUBJECT: string
/**
 * (Integer) Count of tables in the document, if appropriate.
 */
const META_NAME_TABLE_COUNT: string
/**
 * (String) The template file that is been used to generate this document.
 * 
 * 1.14.0 Moved from "gsf" to "meta"
 */
const META_NAME_TEMPLATE: string
/**
 * (GsfClipData) Thumbnail data of the document, typically a
 * preview image of the document.
 */
const META_NAME_THUMBNAIL: string
/**
 * (String) A formal name given to the resource.
 */
const META_NAME_TITLE: string
/**
 * (Integer) Count of words in the document.
 */
const META_NAME_WORD_COUNT: string
/**
 * Decodes a chunk of base64 encoded data from `data` back into `data`.
 * @param data data stream
 * @param len max length of data to decode
 */
function base64_decode_simple(data: Uint8Array, len: number): number
/**
 * Decodes a chunk of base64 encoded data
 * @param in_ input stream
 * @param len max length of data to decode
 * @param out output stream
 * @param state holds the number of bits that are stored in `save`
 * @param save leftover bits that have not yet been decoded
 */
function base64_decode_step(in_: Uint8Array, len: number, out: Uint8Array, state: number, save: number): [ /* returnType */ number, /* state */ number, /* save */ number ]
/**
 * This funcion should be called to when finished encoding everything, to
 * flush off the last little bit.
 * @param in_ Data to be encoded
 * @param break_lines Whether to use line breaks
 * @param out Encoded data.
 * @param state holds the number of bits that are stored in `save`
 * @param save leftover bits that have not yet been decoded
 */
function base64_encode_close(in_: Uint8Array, break_lines: boolean, out: Uint8Array, state: number, save: number): [ /* returnType */ number, /* state */ number, /* save */ number ]
/**
 * Encodes data from `data` back into `data` using base64 encoding.
 * @param data data stream
 * @param len max length of data to encode
 */
function base64_encode_simple(data: Uint8Array, len: number): number
/**
 * Performs an 'encode step', only encodes blocks of 3 characters from `in` into
 * the output `out` at a time, saves left-over state in `state` and `save`
 * (initialise to 0 on first invocation).
 * @param in_ input stream
 * @param len max length of data to decode
 * @param break_lines Whether to use line breaks
 * @param out output stream
 * @param state holds the number of bits that are stored in `save`
 * @param save leftover bits that have not yet been decoded
 */
function base64_encode_step(in_: Uint8Array, len: number, break_lines: boolean, out: Uint8Array, state: number, save: number): [ /* returnType */ number, /* state */ number, /* save */ number ]
function debug_flag(flag: string): boolean
/**
 * A debugging utility to dump the content of `meta` via g_print
 * @param meta #GsfDocMetaData
 */
function doc_meta_dump(meta: DocMetaData): void
function error_quark(): GLib.Quark
/**
 * Extracts the extension from the end of a filename (the part after the final
 * '.' in the filename).
 * @param path A filename or file path.
 */
function extension_pointer(path: string): string
/**
 * A utility wrapper to make sure filenames are valid utf8.
 * Caller must g_free the result.
 * @param filename file name suitable for open(2).
 * @param quoted if %TRUE, the resulting utf8 file name will be quoted    (unless it is invalid).
 */
function filename_to_utf8(filename: string, quoted: boolean): string
/**
 * Initializes the GSF library
 */
function init(): void
/**
 * Initializes the GSF library and associates it with a type module `mod`.
 * @param module #GTypeModule.
 */
function init_dynamic(module: GObject.TypeModule): void
/**
 * Interpret binary data as a double in little endian order.
 * @param p pointer to storage
 */
function le_get_double(p: object | null): number
/**
 * Interpret binary data as a float in little endian order.
 * @param p pointer to storage
 */
function le_get_float(p: object | null): number
/**
 * Interpret binary data as a guint64 (8 byte unsigned integer type) in little
 * endian order.
 * @param p pointer to storage
 */
function le_get_guint64(p: object | null): number
/**
 * Store a value of type double in memory in little endian order
 * @param p pointer to storage
 * @param d double to be stored
 */
function le_set_double(p: object | null, d: number): void
/**
 * Store a value of type float in memory in little endian order.
 * @param p pointer to storage
 * @param f float to be stored
 */
function le_set_float(p: object | null, f: number): void
/**
 * Dump `len` bytes from the memory location given by `ptr`.
 * @param ptr memory area to be dumped.
 * @param len how many bytes will be dumped.
 */
function mem_dump(ptr: number, len: number): void
function msole_codepage_to_lid(codepage: number): number
function msole_iconv_win_codepage(): number
/**
 * Decompresses an LZ compressed stream.
 * @param input stream to read from
 * @param offset offset into it for start byte of compresse stream
 */
function msole_inflate(input: Input, offset: gsf_off_t): Uint8Array
function msole_language_for_lid(lid: number): string
function msole_lid_for_language(lang: string | null): number
function msole_lid_to_codepage(lid: number): number
function msole_lid_to_codepage_str(lid: number): string
function odf_get_ns(): XMLInNS
/**
 * Gives the ODF version used by libgsf when writing Open Document files.
 */
function odf_get_version(): number
/**
 * Gives the ODF version used by libgsf when writing Open Document files.
 */
function odf_get_version_string(): string
function open_pkg_error_id(): number
/**
 * New in 1.14.9
 * 
 * Walks each relationship associated with `opkg` and calls `func` with `user_data`.
 * @param opkg #GsfInput
 * @param func #GsfOpenPkgIter
 */
function open_pkg_foreach_rel(opkg: Input, func: OpenPkgIter): void
function open_pkg_open_rel(opkg: Input, rel: OpenPkgRel): Input
/**
 * New in 1.14.7
 * 
 * Open `opkg'`s relation `id`
 * @param opkg #GsfInput
 * @param id target id
 */
function open_pkg_open_rel_by_id(opkg: Input, id: string): Input
/**
 * New in 1.14.9
 * 
 * Open one of `opkg'`s relationships with type=`type`.
 * @param opkg #GsfInput
 * @param type target type
 */
function open_pkg_open_rel_by_type(opkg: Input, type: string): Input
/**
 * Convenience function to parse a related part.
 * @param xin #GsfXMLIn
 * @param id target id
 * @param dtd #GsfXMLInNode
 * @param ns #GsfXMLInNS
 */
function open_pkg_parse_rel_by_id(xin: XMLIn, id: string, dtd: XMLInNode, ns: XMLInNS): GLib.Error
function property_settings_find(name: string, params: GObject.Parameter[]): GObject.Parameter
function property_settings_free(params: GObject.Parameter[]): void
/**
 * De-intializes the GSF library
 * Currently does nothing.
 */
function shutdown(): void
/**
 * De-intializes the GSF library from a type module.
 * Currently does nothing.
 * @param module currently unused
 */
function shutdown_dynamic(module: GObject.TypeModule): void
/**
 * This function returns the array of values inside #GsfDocPropVector.
 * No additional references are created.
 * @param value A GValue of type #GsfDocPropVector.
 */
function value_get_docprop_array(value: any): any[] | null
function value_get_docprop_varray(value: any): GObject.ValueArray
/**
 * This function returns a pointer to the GsfDocPropVector structure in `value`.
 * No additional references are created.
 * @param value A GValue of type #GsfDocPropVector.
 */
function value_get_docprop_vector(value: any): DocPropVector
/**
 * Decompresses VBA stream.
 * @param input stream to read from
 * @param offset offset into it for start byte of compressed stream
 * @param size size of the returned array
 * @param add_null_terminator whenever add or not null at the end of array
 */
function vba_inflate(input: Input, offset: gsf_off_t, size: number, add_null_terminator: boolean): number
/**
 * Dumps the document `cur` into `output`.
 * @param output #GsfOutput
 * @param cur #xmlDocPtr
 * @param encoding The encoding to use.
 * @param format %TRUE to reformat the output.
 */
function xmlDocFormatDump(output: Output, cur: libxml2.Doc, encoding: string | null, format: boolean): number
/**
 * Try to parse `str` as a value of type `t` into `res`.
 * @param res Result value
 * @param t Type of data
 * @param str Value string
 */
function xml_gvalue_from_str(res: any, t: GObject.GType, str: string): boolean
function xml_probe(input: Input, func: XMLProbeFunc): boolean
interface OpenPkgIter {
    (opkg: Input, rel: OpenPkgRel): void
}
interface XMLInExtDtor {
    (xin: XMLIn, old_state: object | null): void
}
interface XMLInUnknownFunc {
    (xin: XMLIn, elem: libxml2.Char, attrs: libxml2.Char): boolean
}
interface XMLProbeFunc {
    (name: libxml2.Char, prefix: libxml2.Char, URI: libxml2.Char, nb_namespaces: number, namespaces: libxml2.Char, nb_attributes: number, nb_defaulted: number, attributes: libxml2.Char): boolean
}
interface Blob_ConstructProps extends GObject.Object_ConstructProps {
}

interface Blob {

    // Own fields of Gsf-1.Gsf.Blob

    object: GObject.Object
    priv: BlobPrivate

    // Owm methods of Gsf-1.Gsf.Blob

    /**
     * Queries the size in bytes of the data stored in the blob.
     */
    get_size(): number
    /**
     * Queries a pointer to the data stored in the blob.  This does not
     * copy the data for you; it returns a pointer to the actual buffer
     * which the blob uses internally, so you should not free this buffer
     * on your own.
     */
    peek_data(): object | null

    // Class property signals of Gsf-1.Gsf.Blob

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Blob extends GObject.Object {

    // Own properties of Gsf-1.Gsf.Blob

    static name: string
    static $gtype: GObject.GType<Blob>

    // Constructors of Gsf-1.Gsf.Blob

    constructor(config?: Blob_ConstructProps) 
    /**
     * Creates a new #GsfBlob object to hold the specified data.  The blob can then
     * be used as a facility for reference-counting for the data.  The data is
     * copied internally, so the blob does not hold references to external chunks
     * of memory.
     * @constructor 
     * @param data_to_copy  Data which will be copied into the blob, or %NULL if `size` is zero.
     */
    constructor(data_to_copy: Uint8Array) 
    /**
     * Creates a new #GsfBlob object to hold the specified data.  The blob can then
     * be used as a facility for reference-counting for the data.  The data is
     * copied internally, so the blob does not hold references to external chunks
     * of memory.
     * @constructor 
     * @param data_to_copy  Data which will be copied into the blob, or %NULL if `size` is zero.
     */
    static new(data_to_copy: Uint8Array): Blob
    _init(config?: Blob_ConstructProps): void
}

interface ClipData_ConstructProps extends GObject.Object_ConstructProps {
}

interface ClipData {

    // Own fields of Gsf-1.Gsf.ClipData

    object: GObject.Object
    priv: ClipDataPrivate

    // Owm methods of Gsf-1.Gsf.ClipData

    /**
     * Queries the data blob that actually stores a #GsfClipData's binary data.
     */
    get_data_blob(): Blob
    /**
     * Queries the clipboard data format of a #GsfClipData.  The format refers to the data
     * blob inside the `clip_data;` use gsf_clip_data_get_data_blob() to get that data blob.
     */
    get_format(): ClipFormat
    /**
     * Queries the Windows clipboard data format for a #GsfClipData.  The `clip_data` must
     * have been created with #GSF_CLIP_FORMAT_WINDOWS_CLIPBOARD.
     */
    get_windows_clipboard_format(): ClipFormatWindows
    /**
     * Queries a pointer directly to the clipboard data of a #GsfClipData.  The
     * resulting pointer is not necessarily the same data pointer that was passed to
     * gsf_blob_new() prior to creating the `clip_data`.  For example, if the data is
     * in #GSF_CLIP_FORMAT_WINDOWS_CLIPBOARD format, then it will have extra header
     * bytes in front of the actual metafile data.  This function will skip over
     * those header bytes if necessary and return a pointer to the "real" data.
     * @param ret_size Location to return the size of the returned data buffer.
     */
    peek_real_data(ret_size: number): object | null

    // Class property signals of Gsf-1.Gsf.ClipData

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ClipData extends GObject.Object {

    // Own properties of Gsf-1.Gsf.ClipData

    static name: string
    static $gtype: GObject.GType<ClipData>

    // Constructors of Gsf-1.Gsf.ClipData

    constructor(config?: ClipData_ConstructProps) 
    /**
     * Creates a new #GsfClipData object.  This function acquires a reference to the
     * `data_blob,` so you should unref the blob on your own if you no longer need it
     * directly.
     * @constructor 
     * @param format Format for the data inside the `data_blob`
     * @param data_blob Object which holds the binary contents for the #GsfClipData
     */
    constructor(format: ClipFormat, data_blob: Blob) 
    /**
     * Creates a new #GsfClipData object.  This function acquires a reference to the
     * `data_blob,` so you should unref the blob on your own if you no longer need it
     * directly.
     * @constructor 
     * @param format Format for the data inside the `data_blob`
     * @param data_blob Object which holds the binary contents for the #GsfClipData
     */
    static new(format: ClipFormat, data_blob: Blob): ClipData
    _init(config?: ClipData_ConstructProps): void
}

interface DocMetaData_ConstructProps extends GObject.Object_ConstructProps {
}

interface DocMetaData {

    // Owm methods of Gsf-1.Gsf.DocMetaData

    /**
     * Iterate through each (key, value) pair in this collection
     * @param func the function called once for each element in the collection
     */
    foreach(func: GLib.HFunc): void
    /**
     * Take ownership of `name` and `value` and insert a property into `meta`.
     * If a property exists with `name,` it is replaced (The link is lost)
     * @param name the id.
     * @param value #GValue
     */
    insert(name: string, value: any): void
    lookup(name: string): DocProp | null
    /**
     * Extend `xin` so that it can parse a subtree in OpenDoc metadata format
     * @param doc #GsfXMLInDoc
     */
    odf_subtree(doc: XMLIn): void
    /**
     * Read a stream formated as a set of MS OLE properties from `in` and store the
     * results in `accum`.
     * @param in_ #GsfInput
     */
    read_from_msole(in_: Input): GLib.Error
    /**
     * Read an OpenDocument metadata stream from `input` and store the properties
     * into `md`.  Overwrite any existing properties with the same id.
     * @param input #GsfInput
     */
    read_from_odf(input: Input): GLib.Error
    /**
     * If `name` does not exist in the collection, do nothing. If `name` does exist,
     * remove it and its value from the collection
     * @param name the non-null string name of the property
     */
    remove(name: string): void
    size(): number
    steal(name: string): DocProp | null
    store(prop: DocProp): void
    write_to_msole(out: Output, doc_not_component: boolean): boolean
    write_to_odf(output: XMLOut): boolean

    // Class property signals of Gsf-1.Gsf.DocMetaData

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Class representing information about a document, such as creator and time of
 * last modification.
 * @class 
 */
class DocMetaData extends GObject.Object {

    // Own properties of Gsf-1.Gsf.DocMetaData

    static name: string
    static $gtype: GObject.GType<DocMetaData>

    // Constructors of Gsf-1.Gsf.DocMetaData

    constructor(config?: DocMetaData_ConstructProps) 
    constructor() 
    static new(): DocMetaData
    _init(config?: DocMetaData_ConstructProps): void
}

interface DocPropVector_ConstructProps extends GObject.Object_ConstructProps {
}

interface DocPropVector {

    // Owm methods of Gsf-1.Gsf.DocPropVector

    /**
     * Insert a copy of `value` as the last element of `vector`.
     * @param value The GValue to add to `vector`
     */
    append(value: any): void
    /**
     * This function returns a string which represents all the GValues in `vector`.
     * The caller is responsible for freeing the result.
     * 
     * Returns (transfer full): a string of comma-separated values
     */
    as_string(): string

    // Class property signals of Gsf-1.Gsf.DocPropVector

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocPropVector extends GObject.Object {

    // Own properties of Gsf-1.Gsf.DocPropVector

    static name: string
    static $gtype: GObject.GType<DocPropVector>

    // Constructors of Gsf-1.Gsf.DocPropVector

    constructor(config?: DocPropVector_ConstructProps) 
    /**
     * This function creates a new gsf_docprop_vector object.
     * @constructor 
     */
    constructor() 
    /**
     * This function creates a new gsf_docprop_vector object.
     * @constructor 
     */
    static new(): DocPropVector
    _init(config?: DocPropVector_ConstructProps): void
}

interface Infile_ConstructProps extends Input_ConstructProps {
}

interface Infile {

    // Own fields of Gsf-1.Gsf.Infile

    parent: Input

    // Owm methods of Gsf-1.Gsf.Infile

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
     */
    child_by_aname(names: string[]): Input
    /**
     * TODO : For 2.0 api will change to include a #GError.
     * @param i target index
     */
    child_by_index(i: number): Input
    /**
     * The function returns a named child of the given infile.  This only
     * works for an immediate child.  If you need to go several levels
     * down use gsf_infile_child_by_aname, for example.
     * 
     * TODO : For 2.0 api will change to include a #GError.
     * @param name target name
     */
    child_by_name(name: string): Input
    name_by_index(i: number): string | null
    num_children(): number

    // Own virtual methods of Gsf-1.Gsf.Infile

    vfunc_name_by_index(i: number): string | null
    vfunc_num_children(): number

    // Class property signals of Gsf-1.Gsf.Infile

    connect(sigName: "notify::eof", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Class representing an input file.
 * @class 
 */
class Infile extends Input {

    // Own properties of Gsf-1.Gsf.Infile

    static name: string
    static $gtype: GObject.GType<Infile>

    // Constructors of Gsf-1.Gsf.Infile

    constructor(config?: Infile_ConstructProps) 
    _init(config?: Infile_ConstructProps): void
}

interface InfileMSOle_ConstructProps extends Infile_ConstructProps {
}

interface InfileMSOle {

    // Owm methods of Gsf-1.Gsf.InfileMSOle

    /**
     * Retrieves the 16 byte indentifier (often a GUID in MS Windows apps)
     * stored within the directory associated with `ole` and stores it in `res`.
     * @param res 16 byte identifier (often a GUID in MS Windows apps)
     */
    get_class_id(res: number): boolean

    // Class property signals of Gsf-1.Gsf.InfileMSOle

    connect(sigName: "notify::eof", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InfileMSOle extends Infile {

    // Own properties of Gsf-1.Gsf.InfileMSOle

    static name: string
    static $gtype: GObject.GType<InfileMSOle>

    // Constructors of Gsf-1.Gsf.InfileMSOle

    constructor(config?: InfileMSOle_ConstructProps) 
    /**
     * Opens the root directory of an MS OLE file.
     * <note>This adds a reference to `source`.</note>
     * @constructor 
     * @param source #GsfInput
     */
    constructor(source: Input) 
    /**
     * Opens the root directory of an MS OLE file.
     * <note>This adds a reference to `source`.</note>
     * @constructor 
     * @param source #GsfInput
     */
    static new(source: Input): InfileMSOle
    _init(config?: InfileMSOle_ConstructProps): void
}

interface InfileMSVBA_ConstructProps extends Infile_ConstructProps {
}

interface InfileMSVBA {

    // Owm methods of Gsf-1.Gsf.InfileMSVBA

    /**
     * a collection of names and source code.
     */
    get_modules(): GLib.HashTable | null
    /**
     * A collection of names and source code which the caller is responsible for destroying.
     */
    steal_modules(): GLib.HashTable | null

    // Class property signals of Gsf-1.Gsf.InfileMSVBA

    connect(sigName: "notify::eof", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InfileMSVBA extends Infile {

    // Own properties of Gsf-1.Gsf.InfileMSVBA

    static name: string
    static $gtype: GObject.GType<InfileMSVBA>

    // Constructors of Gsf-1.Gsf.InfileMSVBA

    constructor(config?: InfileMSVBA_ConstructProps) 
    constructor(source: Infile) 
    static new(source: Infile): InfileMSVBA
    _init(config?: InfileMSVBA_ConstructProps): void
}

interface InfileStdio_ConstructProps extends Infile_ConstructProps {
}

interface InfileStdio {

    // Class property signals of Gsf-1.Gsf.InfileStdio

    connect(sigName: "notify::eof", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InfileStdio extends Infile {

    // Own properties of Gsf-1.Gsf.InfileStdio

    static name: string
    static $gtype: GObject.GType<InfileStdio>

    // Constructors of Gsf-1.Gsf.InfileStdio

    constructor(config?: InfileStdio_ConstructProps) 
    constructor(root: string) 
    static new(root: string): InfileStdio
    _init(config?: InfileStdio_ConstructProps): void
}

interface InfileTar_ConstructProps extends Infile_ConstructProps {

    // Own constructor properties of Gsf-1.Gsf.InfileTar

    source?: Input | null
}

interface InfileTar {

    // Own properties of Gsf-1.Gsf.InfileTar

    readonly source: Input

    // Class property signals of Gsf-1.Gsf.InfileTar

    connect(sigName: "notify::source", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::eof", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InfileTar extends Infile {

    // Own properties of Gsf-1.Gsf.InfileTar

    static name: string
    static $gtype: GObject.GType<InfileTar>

    // Constructors of Gsf-1.Gsf.InfileTar

    constructor(config?: InfileTar_ConstructProps) 
    /**
     * Opens the root directory of a Tar file.
     * <note>This adds a reference to `source`.</note>
     * @constructor 
     * @param source A base #GsfInput
     */
    constructor(source: Input) 
    /**
     * Opens the root directory of a Tar file.
     * <note>This adds a reference to `source`.</note>
     * @constructor 
     * @param source A base #GsfInput
     */
    static new(source: Input): InfileTar
    _init(config?: InfileTar_ConstructProps): void
}

interface InfileZip_ConstructProps extends Infile_ConstructProps {

    // Own constructor properties of Gsf-1.Gsf.InfileZip

    internal_parent?: InfileZip | null
    source?: Input | null
}

interface InfileZip {

    // Own properties of Gsf-1.Gsf.InfileZip

    /**
     * Controls the level of compression used for new members.
     */
    readonly compression_level: number
    readonly internal_parent: InfileZip
    readonly source: Input
    readonly zip64: boolean

    // Class property signals of Gsf-1.Gsf.InfileZip

    connect(sigName: "notify::compression-level", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression-level", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compression-level", ...args: any[]): void
    connect(sigName: "notify::internal-parent", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::internal-parent", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::internal-parent", ...args: any[]): void
    connect(sigName: "notify::source", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::zip64", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zip64", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zip64", ...args: any[]): void
    connect(sigName: "notify::eof", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InfileZip extends Infile {

    // Own properties of Gsf-1.Gsf.InfileZip

    static name: string
    static $gtype: GObject.GType<InfileZip>

    // Constructors of Gsf-1.Gsf.InfileZip

    constructor(config?: InfileZip_ConstructProps) 
    /**
     * Opens the root directory of a Zip file.
     * <note>This adds a reference to `source`.</note>
     * @constructor 
     * @param source A base #GsfInput
     */
    constructor(source: Input) 
    /**
     * Opens the root directory of a Zip file.
     * <note>This adds a reference to `source`.</note>
     * @constructor 
     * @param source A base #GsfInput
     */
    static new(source: Input): InfileZip
    _init(config?: InfileZip_ConstructProps): void
}

interface Input_ConstructProps extends GObject.Object_ConstructProps {
}

interface Input {

    // Own properties of Gsf-1.Gsf.Input

    /**
     * %TRUE if the end of the file has been reached.
     */
    readonly eof: boolean
    /**
     * The time the input was last updated.  This represents the
     * timestamp from the originating file or `GsfInfile` member.
     * It is not supported by all derived classes.
     */
    readonly modtime: GLib.DateTime
    /**
     * The current position in the input.
     */
    readonly position: number
    /**
     * The number of bytes remaining in the file.
     */
    readonly remaining: number

    // Own fields of Gsf-1.Gsf.Input

    g_object: GObject.Object
    size: gsf_off_t
    cur_offset: gsf_off_t
    name: string
    container: Infile

    // Owm methods of Gsf-1.Gsf.Input

    /**
     * Copy the contents from `input` to `output` from their respective
     * current positions. So if you want to be sure to copy *everything*,
     * make sure to call gsf_input_seek (input, 0, G_SEEK_SET) and
     * gsf_output_seek (output, 0, G_SEEK_SET) first, if applicable.
     * @param output a non-null #GsfOutput
     */
    copy(output: Output): boolean
    /**
     * Dumps `input'`s contents to STDOUT, optionally in hex format.
     * @param dump_as_hex If %TRUE, dump in hexidecmal format
     */
    dump(dump_as_hex: boolean): void
    /**
     * Duplicates `input` leaving the new one at the same offset.
     */
    dup(): Input | null
    /**
     * A utility routine that attempts to find the VBA file withint a stream.
     */
    find_vba(): InfileMSVBA | null
    get_modtime(): GLib.DateTime
    /**
     * Read `num_bytes`.  Does not change the current position if there
     * is an error.  Will only read if the entire amount can be read.
     * @param num_bytes number of bytes to read
     */
    read(num_bytes: number): Uint8Array
    /**
     * Move the current location in the input stream.
     * @param offset target offset
     * @param whence determines whether the offset is relative to the beginning or          the end of the stream, or to the current location.
     */
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /**
     * Emulate forward seeks by reading.
     * @param pos absolute position to seek to
     */
    seek_emulate(pos: gsf_off_t): boolean
    set_container(container: Infile | null): boolean
    /**
     * protected.
     * @param modtime the new modification time.
     */
    set_modtime(modtime: GLib.DateTime | null): boolean
    set_modtime_from_stat(st: object | null): boolean
    /**
     * protected.
     * @param name the new name of the stream
     */
    set_name(name: string | null): boolean
    /**
     * protected.
     * @param filename the (fs-sys encoded) filename
     */
    set_name_from_filename(filename: string): boolean
    set_size(size: gsf_off_t): boolean
    /**
     * UNIMPLEMENTED BY ANY BACKEND
     * 	and it is probably unnecessary.   gsf_input_get_container provides
     * 	enough power to do what is necessary.
     * 
     * Attempts to open a 'sibling' of `input`.  The caller is responsible for
     * managing the resulting object.
     * @param name name.
     */
    sibling(name: string): Input
    tell(): gsf_off_t
    /**
     * This functions takes ownership of the incoming reference and yields a
     * new one as its output.
     */
    uncompress(): Input

    // Own virtual methods of Gsf-1.Gsf.Input

    /**
     * Duplicates `input` leaving the new one at the same offset.
     * @virtual 
     */
    vfunc_Dup(): Input | null
    /**
     * UNIMPLEMENTED BY ANY BACKEND
     * 	and it is probably unnecessary.   gsf_input_get_container provides
     * 	enough power to do what is necessary.
     * 
     * Attempts to open a 'sibling' of `input`.  The caller is responsible for
     * managing the resulting object.
     * @virtual 
     * @param name name.
     */
    vfunc_OpenSibling(name: string): Input
    /**
     * Move the current location in the input stream.
     * @virtual 
     * @param offset target offset
     * @param whence determines whether the offset is relative to the beginning or          the end of the stream, or to the current location.
     */
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean

    // Class property signals of Gsf-1.Gsf.Input

    connect(sigName: "notify::eof", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Class representing an input stream.
 * @class 
 */
class Input extends GObject.Object {

    // Own properties of Gsf-1.Gsf.Input

    static name: string
    static $gtype: GObject.GType<Input>

    // Constructors of Gsf-1.Gsf.Input

    constructor(config?: Input_ConstructProps) 
    static mmap_new(filename: string): Input
    _init(config?: Input_ConstructProps): void
    static error_id(): GLib.Quark
}

interface InputGZip_ConstructProps extends Input_ConstructProps {

    // Own constructor properties of Gsf-1.Gsf.InputGZip

    raw?: boolean | null
    source?: Input | null
    uncompressed_size?: number | null
}

interface InputGZip {

    // Own properties of Gsf-1.Gsf.InputGZip

    readonly raw: boolean
    readonly source: Input
    readonly uncompressed_size: number

    // Class property signals of Gsf-1.Gsf.InputGZip

    connect(sigName: "notify::raw", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::raw", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::raw", ...args: any[]): void
    connect(sigName: "notify::source", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::uncompressed-size", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uncompressed-size", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uncompressed-size", ...args: any[]): void
    connect(sigName: "notify::eof", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InputGZip extends Input {

    // Own properties of Gsf-1.Gsf.InputGZip

    static name: string
    static $gtype: GObject.GType<InputGZip>

    // Constructors of Gsf-1.Gsf.InputGZip

    constructor(config?: InputGZip_ConstructProps) 
    /**
     * Adds a reference to `source`.
     * @constructor 
     * @param source The underlying data source.
     */
    constructor(source: Input) 
    /**
     * Adds a reference to `source`.
     * @constructor 
     * @param source The underlying data source.
     */
    static new(source: Input): InputGZip
    _init(config?: InputGZip_ConstructProps): void
}

interface InputGio_ConstructProps extends Input_ConstructProps {
}

interface InputGio {

    // Class property signals of Gsf-1.Gsf.InputGio

    connect(sigName: "notify::eof", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InputGio extends Input {

    // Own properties of Gsf-1.Gsf.InputGio

    static name: string
    static $gtype: GObject.GType<InputGio>

    // Constructors of Gsf-1.Gsf.InputGio

    constructor(config?: InputGio_ConstructProps) 
    constructor(file: Gio.File) 
    static new(file: Gio.File): InputGio
    static new_for_path(path: string): InputGio
    static new_for_uri(uri: string): InputGio
    _init(config?: InputGio_ConstructProps): void
}

interface InputHTTP_ConstructProps extends Input_ConstructProps {

    // Own constructor properties of Gsf-1.Gsf.InputHTTP

    content_type?: string | null
    url?: string | null
}

interface InputHTTP {

    // Own properties of Gsf-1.Gsf.InputHTTP

    readonly content_type: string
    readonly url: string

    // Owm methods of Gsf-1.Gsf.InputHTTP

    get_content_type(): string
    get_url(): string

    // Class property signals of Gsf-1.Gsf.InputHTTP

    connect(sigName: "notify::content-type", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::eof", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InputHTTP extends Input {

    // Own properties of Gsf-1.Gsf.InputHTTP

    static name: string
    static $gtype: GObject.GType<InputHTTP>

    // Constructors of Gsf-1.Gsf.InputHTTP

    constructor(config?: InputHTTP_ConstructProps) 
    constructor(url: string) 
    static new(url: string): InputHTTP
    _init(config?: InputHTTP_ConstructProps): void
}

interface InputMemory_ConstructProps extends Input_ConstructProps {
}

interface InputMemory {

    // Class property signals of Gsf-1.Gsf.InputMemory

    connect(sigName: "notify::eof", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InputMemory extends Input {

    // Own properties of Gsf-1.Gsf.InputMemory

    static name: string
    static $gtype: GObject.GType<InputMemory>

    // Constructors of Gsf-1.Gsf.InputMemory

    constructor(config?: InputMemory_ConstructProps) 
    constructor(buf: Uint8Array, needs_free: boolean) 
    static new(buf: Uint8Array, needs_free: boolean): InputMemory
    static new_clone(buf: Uint8Array): InputMemory
    static new_from_bzip(source: Input): InputMemory
    static new_from_iochannel(channel: GLib.IOChannel): InputMemory
    _init(config?: InputMemory_ConstructProps): void
}

interface InputProxy_ConstructProps extends Input_ConstructProps {
}

interface InputProxy {

    // Class property signals of Gsf-1.Gsf.InputProxy

    connect(sigName: "notify::eof", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InputProxy extends Input {

    // Own properties of Gsf-1.Gsf.InputProxy

    static name: string
    static $gtype: GObject.GType<InputProxy>

    // Constructors of Gsf-1.Gsf.InputProxy

    constructor(config?: InputProxy_ConstructProps) 
    /**
     * This creates a new proxy to the entire, given input source.  See
     * gsf_input_proxy_new_section for details.
     * @constructor 
     * @param source The underlying data source.
     */
    constructor(source: Input) 
    /**
     * This creates a new proxy to the entire, given input source.  See
     * gsf_input_proxy_new_section for details.
     * @constructor 
     * @param source The underlying data source.
     */
    static new(source: Input): InputProxy
    /**
     * This creates a new proxy to a section of the given source.  The new
     * object will have its own current position, but any operation on it
     * can change the source's position.
     * 
     * If a proxy to a proxy is created, the intermediate proxy is short-
     * circuited.
     * 
     * This function will ref the source.
     * @constructor 
     * @param source The underlying data source.
     * @param offset Offset into source for start of section.
     * @param size Length of section.
     */
    static new_section(source: Input, offset: gsf_off_t, size: gsf_off_t): InputProxy
    _init(config?: InputProxy_ConstructProps): void
}

interface InputStdio_ConstructProps extends Input_ConstructProps {
}

interface InputStdio {

    // Class property signals of Gsf-1.Gsf.InputStdio

    connect(sigName: "notify::eof", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InputStdio extends Input {

    // Own properties of Gsf-1.Gsf.InputStdio

    static name: string
    static $gtype: GObject.GType<InputStdio>

    // Constructors of Gsf-1.Gsf.InputStdio

    constructor(config?: InputStdio_ConstructProps) 
    constructor(filename: string) 
    static new(filename: string): InputStdio
    /**
     * Assumes ownership of `file` when succeeding.  If `keep_open` is true,
     * ownership reverts to caller when the #GsfInput is closed.
     * @constructor 
     * @param filename The filename corresponding to `file`.
     * @param file an existing stdio <type>FILE</type> *
     * @param keep_open Should `file` be closed when the wrapper is closed
     */
    static new_FILE(filename: string, file: object | null, keep_open: boolean): InputStdio
    _init(config?: InputStdio_ConstructProps): void
}

interface InputTextline_ConstructProps extends Input_ConstructProps {
}

interface InputTextline {

    // Owm methods of Gsf-1.Gsf.InputTextline

    /**
     * A utility routine to read things line by line from the underlying source.
     * Trailing newlines and carriage returns are stripped, and the resultant buffer
     * can be edited.
     */
    ascii_gets(): Uint8Array | null
    /**
     * A utility routine to read things line by line from the underlying source.
     * Trailing newlines and carriage returns are stripped, and the resultant buffer
     * can be edited.
     */
    utf8_gets(): Uint8Array | null

    // Class property signals of Gsf-1.Gsf.InputTextline

    connect(sigName: "notify::eof", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InputTextline extends Input {

    // Own properties of Gsf-1.Gsf.InputTextline

    static name: string
    static $gtype: GObject.GType<InputTextline>

    // Constructors of Gsf-1.Gsf.InputTextline

    constructor(config?: InputTextline_ConstructProps) 
    /**
     * <note>This adds a reference to `source`.</note>
     * @constructor 
     * @param source in some combination of ascii and utf8
     */
    constructor(source: Input) 
    /**
     * <note>This adds a reference to `source`.</note>
     * @constructor 
     * @param source in some combination of ascii and utf8
     */
    static new(source: Input): InputTextline
    _init(config?: InputTextline_ConstructProps): void
}

interface ODFOut_ConstructProps extends XMLOut_ConstructProps {

    // Own constructor properties of Gsf-1.Gsf.ODFOut

    odf_version?: number | null
}

interface ODFOut {

    // Own properties of Gsf-1.Gsf.ODFOut

    readonly odf_version: number

    // Own fields of Gsf-1.Gsf.ODFOut

    base: XMLOut
    priv: object

    // Owm methods of Gsf-1.Gsf.ODFOut

    get_version(): number
    get_version_string(): string

    // Class property signals of Gsf-1.Gsf.ODFOut

    connect(sigName: "notify::odf-version", callback: (($obj: ODFOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::odf-version", callback: (($obj: ODFOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::odf-version", ...args: any[]): void
    connect(sigName: "notify::pretty-print", callback: (($obj: ODFOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pretty-print", callback: (($obj: ODFOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pretty-print", ...args: any[]): void
    connect(sigName: "notify::sink", callback: (($obj: ODFOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: ODFOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ODFOut extends XMLOut {

    // Own properties of Gsf-1.Gsf.ODFOut

    static name: string
    static $gtype: GObject.GType<ODFOut>

    // Constructors of Gsf-1.Gsf.ODFOut

    constructor(config?: ODFOut_ConstructProps) 
    _init(config?: ODFOut_ConstructProps): void
}

interface Outfile_ConstructProps extends Output_ConstructProps {
}

interface Outfile {

    // Own fields of Gsf-1.Gsf.Outfile

    parent: Output

    // Owm methods of Gsf-1.Gsf.Outfile

    new_child(name: string, is_dir: boolean): Output
    /**
     * A convenience wrapper to create a child in `dir` of `content_type` then create
     * a `type` relation to `parent`
     * @param name target name
     * @param content_type non-%NULL content type
     * @param parent #GsfOutfile
     * @param type target type
     */
    open_pkg_add_rel(name: string, content_type: string, parent: Outfile, type: string): Output

    // Class property signals of Gsf-1.Gsf.Outfile

    connect(sigName: "notify::modtime", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Class representing an output file, counterpart to #GsfInfile.
 * @class 
 */
class Outfile extends Output {

    // Own properties of Gsf-1.Gsf.Outfile

    static name: string
    static $gtype: GObject.GType<Outfile>

    // Constructors of Gsf-1.Gsf.Outfile

    constructor(config?: Outfile_ConstructProps) 
    _init(config?: Outfile_ConstructProps): void
}

interface OutfileMSOle_ConstructProps extends Outfile_ConstructProps {

    // Own constructor properties of Gsf-1.Gsf.OutfileMSOle

    big_block_size?: number | null
    sink?: Output | null
    small_block_size?: number | null
}

interface OutfileMSOle {

    // Own properties of Gsf-1.Gsf.OutfileMSOle

    readonly big_block_size: number
    readonly sink: Output
    readonly small_block_size: number

    // Owm methods of Gsf-1.Gsf.OutfileMSOle

    /**
     * Write `clsid` to the directory associated with `ole`.
     * @param clsid Identifier (often a GUID in MS Windows apps)
     */
    set_class_id(clsid: Uint8Array): boolean

    // Class property signals of Gsf-1.Gsf.OutfileMSOle

    connect(sigName: "notify::big-block-size", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::big-block-size", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::big-block-size", ...args: any[]): void
    connect(sigName: "notify::sink", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: "notify::small-block-size", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::small-block-size", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::small-block-size", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OutfileMSOle extends Outfile {

    // Own properties of Gsf-1.Gsf.OutfileMSOle

    static name: string
    static $gtype: GObject.GType<OutfileMSOle>

    // Constructors of Gsf-1.Gsf.OutfileMSOle

    constructor(config?: OutfileMSOle_ConstructProps) 
    /**
     * Creates the root directory of an MS OLE file and manages the addition of
     * children.
     * 
     * <note>This adds a reference to `sink`.</note>
     * @constructor 
     * @param sink a #GsfOutput to hold the OLE2 file
     */
    constructor(sink: Output) 
    /**
     * Creates the root directory of an MS OLE file and manages the addition of
     * children.
     * 
     * <note>This adds a reference to `sink`.</note>
     * @constructor 
     * @param sink a #GsfOutput to hold the OLE2 file
     */
    static new(sink: Output): OutfileMSOle
    /**
     * Creates the root directory of an MS OLE file and manages the addition of
     * children.
     * 
     * <note>This adds a reference to `sink`.</note>
     * @constructor 
     * @param sink a #GsfOutput to hold the OLE2 file.
     * @param bb_size size of large blocks.
     * @param sb_size size of small blocks.
     */
    static new_full(sink: Output, bb_size: number, sb_size: number): OutfileMSOle
    _init(config?: OutfileMSOle_ConstructProps): void
}

interface OutfileOpenPkg_ConstructProps extends Outfile_ConstructProps {

    // Own constructor properties of Gsf-1.Gsf.OutfileOpenPkg

    content_type?: string | null
    is_dir?: boolean | null
    sink?: Outfile | null
}

interface OutfileOpenPkg {

    // Own properties of Gsf-1.Gsf.OutfileOpenPkg

    readonly content_type: string
    readonly is_dir: boolean
    readonly sink: Outfile

    // Owm methods of Gsf-1.Gsf.OutfileOpenPkg

    /**
     * Add an external relation to `parent`.
     * @param target target type
     * @param content_type target content
     */
    add_extern_rel(target: string, content_type: string): string
    /**
     * Create a relationship between `child` and `parent` of `type`.
     * @param parent #GsfOutfileOpenPkg
     * @param type target type
     */
    relate(parent: OutfileOpenPkg, type: string): string
    set_content_type(content_type: string): void
    /**
     * Assigns a GsfOutput (`sink)` to store the package into.
     * @param sink #GsfOutput
     */
    set_sink(sink: Output): void

    // Class property signals of Gsf-1.Gsf.OutfileOpenPkg

    connect(sigName: "notify::content-type", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::is-dir", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-dir", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-dir", ...args: any[]): void
    connect(sigName: "notify::sink", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OutfileOpenPkg extends Outfile {

    // Own properties of Gsf-1.Gsf.OutfileOpenPkg

    static name: string
    static $gtype: GObject.GType<OutfileOpenPkg>

    // Constructors of Gsf-1.Gsf.OutfileOpenPkg

    constructor(config?: OutfileOpenPkg_ConstructProps) 
    /**
     * Convenience routine to create a GsfOutfileOpenPkg inside `sink`.
     * @constructor 
     * @param sink #GsfOutfile
     */
    constructor(sink: Outfile) 
    /**
     * Convenience routine to create a GsfOutfileOpenPkg inside `sink`.
     * @constructor 
     * @param sink #GsfOutfile
     */
    static new(sink: Outfile): OutfileOpenPkg
    _init(config?: OutfileOpenPkg_ConstructProps): void
}

interface OutfileStdio_ConstructProps extends Outfile_ConstructProps {
}

interface OutfileStdio {

    // Class property signals of Gsf-1.Gsf.OutfileStdio

    connect(sigName: "notify::modtime", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OutfileStdio extends Outfile {

    // Own properties of Gsf-1.Gsf.OutfileStdio

    static name: string
    static $gtype: GObject.GType<OutfileStdio>

    // Constructors of Gsf-1.Gsf.OutfileStdio

    constructor(config?: OutfileStdio_ConstructProps) 
    constructor(root: string) 
    static new(root: string): OutfileStdio
    _init(config?: OutfileStdio_ConstructProps): void
}

interface OutfileZip_ConstructProps extends Outfile_ConstructProps {

    // Own constructor properties of Gsf-1.Gsf.OutfileZip

    compression_level?: number | null
    deflate_level?: number | null
    entry_name?: string | null
    sink?: Output | null
    zip64?: number | null
}

interface OutfileZip {

    // Own properties of Gsf-1.Gsf.OutfileZip

    readonly compression_level: number
    readonly deflate_level: number
    readonly entry_name: string
    readonly sink: Output
    readonly zip64: number

    // Owm methods of Gsf-1.Gsf.OutfileZip

    set_compression_method(method: ZipCompressionMethod): boolean

    // Class property signals of Gsf-1.Gsf.OutfileZip

    connect(sigName: "notify::compression-level", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression-level", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compression-level", ...args: any[]): void
    connect(sigName: "notify::deflate-level", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deflate-level", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deflate-level", ...args: any[]): void
    connect(sigName: "notify::entry-name", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entry-name", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entry-name", ...args: any[]): void
    connect(sigName: "notify::sink", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: "notify::zip64", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zip64", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zip64", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OutfileZip extends Outfile {

    // Own properties of Gsf-1.Gsf.OutfileZip

    static name: string
    static $gtype: GObject.GType<OutfileZip>

    // Constructors of Gsf-1.Gsf.OutfileZip

    constructor(config?: OutfileZip_ConstructProps) 
    /**
     * Creates the root directory of a Zip file and manages the addition of
     * children.
     * 
     * <note>This adds a reference to `sink`.</note>
     * @constructor 
     * @param sink a #GsfOutput to hold the ZIP file
     */
    constructor(sink: Output) 
    /**
     * Creates the root directory of a Zip file and manages the addition of
     * children.
     * 
     * <note>This adds a reference to `sink`.</note>
     * @constructor 
     * @param sink a #GsfOutput to hold the ZIP file
     */
    static new(sink: Output): OutfileZip
    _init(config?: OutfileZip_ConstructProps): void
}

interface Output_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gsf-1.Gsf.Output

    /**
     * The container, optionally %NULL, in which this output lives.
     */
    container?: Outfile | null
    /**
     * The time the output was last updated.  This must be set on object
     * construction and represents the timestamp to put on the resulting
     * file or #GsfOutfile member.  Not all derived classes will actually
     * do anything with this property.
     */
    modtime?: GLib.DateTime | null
    name?: string | null
}

interface Output {

    // Own properties of Gsf-1.Gsf.Output

    /**
     * The time the output was last updated.  This must be set on object
     * construction and represents the timestamp to put on the resulting
     * file or #GsfOutfile member.  Not all derived classes will actually
     * do anything with this property.
     */
    readonly modtime: GLib.DateTime
    /**
     * The current position in the output.
     */
    readonly position: number
    /**
     * The current file size.
     */
    readonly size: number

    // Own fields of Gsf-1.Gsf.Output

    g_object: GObject.Object
    cur_size: gsf_off_t
    cur_offset: gsf_off_t
    name: string
    wrapped_by: GObject.Object
    container: Outfile
    err: GLib.Error
    is_closed: boolean
    printf_buf: string
    printf_buf_size: number

    // Owm methods of Gsf-1.Gsf.Output

    /**
     * Close a stream.
     */
    close(): boolean
    error(): GLib.Error | null
    get_modtime(): GLib.DateTime | null
    /**
     * Like fputs, this assumes that the line already ends with a newline
     * @param line Nul terminated string to write
     */
    puts(line: string): boolean
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
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /**
     * <note>This is a utility routine that should only be used by derived
     * outputs.</note>
     * @param container #GsfOutfile
     */
    set_container(container: Outfile | null): boolean
    set_modtime(modtime: GLib.DateTime | null): boolean
    /**
     * <note>This is a utility routine that should only be used by derived
     * outputs.</note>
     * @param name the new name
     */
    set_name(name: string | null): boolean
    /**
     * <note>This is a utility routine that should only be used by derived
     * outputs.</note>
     * @param filename the (fs-sys encoded) filename
     */
    set_name_from_filename(filename: string | null): boolean
    /**
     * Tell the current position in `output,` similar to
     * <citerefentry><refentrytitle>ftell</refentrytitle>
     * <manvolnum>3</manvolnum></citerefentry>.
     */
    tell(): gsf_off_t
    /**
     * Write `num_bytes` of `data` to `output`.
     * @param data Data to write.
     */
    write(data: Uint8Array): boolean

    // Own virtual methods of Gsf-1.Gsf.Output

    /**
     * Close a stream.
     * @virtual 
     */
    vfunc_Close(): boolean
    /**
     * Reposition in output stream `output`. `whence` specifies what the offset is
     * relative to: the beginning of the stream (%G_SEEK_SET), current position in
     * the stream (%G_SEEK_CUR) or the end of the stream (%G_SEEK_END).
     * This function is similar to
     * <citerefentry><refentrytitle>fseek</refentrytitle>
     * <manvolnum>3</manvolnum></citerefentry>.
     * @virtual 
     * @param offset Relative amount to reposition
     * @param whence What the offset is relative to.
     */
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /**
     * Write `num_bytes` of `data` to `output`.
     * @virtual 
     * @param data Data to write.
     */
    vfunc_Write(data: Uint8Array): boolean

    // Class property signals of Gsf-1.Gsf.Output

    connect(sigName: "notify::modtime", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Class representing an output stream, counterpart to #GsfInput.
 * @class 
 */
class Output extends GObject.Object {

    // Own properties of Gsf-1.Gsf.Output

    static name: string
    static $gtype: GObject.GType<Output>

    // Constructors of Gsf-1.Gsf.Output

    constructor(config?: Output_ConstructProps) 
    _init(config?: Output_ConstructProps): void
    static error_id(): GLib.Quark
    static unwrap(wrapper: GObject.Object, wrapee: Output): boolean
    static wrap(wrapper: GObject.Object, wrapee: Output): boolean
}

interface OutputBzip_ConstructProps extends Output_ConstructProps {
}

interface OutputBzip {

    // Class property signals of Gsf-1.Gsf.OutputBzip

    connect(sigName: "notify::modtime", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OutputBzip extends Output {

    // Own properties of Gsf-1.Gsf.OutputBzip

    static name: string
    static $gtype: GObject.GType<OutputBzip>

    // Constructors of Gsf-1.Gsf.OutputBzip

    constructor(config?: OutputBzip_ConstructProps) 
    /**
     * Adds a reference to `sink`.
     * @constructor 
     * @param sink The underlying data source.
     */
    constructor(sink: Output) 
    /**
     * Adds a reference to `sink`.
     * @constructor 
     * @param sink The underlying data source.
     */
    static new(sink: Output): OutputBzip
    _init(config?: OutputBzip_ConstructProps): void
}

interface OutputCsv_ConstructProps extends Output_ConstructProps {

    // Own constructor properties of Gsf-1.Gsf.OutputCsv

    eol?: string | null
    quote?: string | null
    quoting_mode?: OutputCsvQuotingMode | null
    quoting_on_whitespace?: boolean | null
    quoting_triggers?: string | null
    separator?: string | null
    sink?: Output | null
}

interface OutputCsv {

    // Own properties of Gsf-1.Gsf.OutputCsv

    quoting_on_whitespace: boolean

    // Own fields of Gsf-1.Gsf.OutputCsv

    output: Output
    sink: Output
    quote: string
    quote_len: number
    quoting_mode: OutputCsvQuotingMode
    quoting_triggers: string
    eol: string
    eol_len: number
    separator: string
    separator_len: number
    fields_on_line: boolean
    buf: GLib.String

    // Owm methods of Gsf-1.Gsf.OutputCsv

    write_eol(): boolean
    write_field(field: string, len: number): boolean

    // Class property signals of Gsf-1.Gsf.OutputCsv

    connect(sigName: "notify::quoting-on-whitespace", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quoting-on-whitespace", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quoting-on-whitespace", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OutputCsv extends Output {

    // Own properties of Gsf-1.Gsf.OutputCsv

    static name: string
    static $gtype: GObject.GType<OutputCsv>

    // Constructors of Gsf-1.Gsf.OutputCsv

    constructor(config?: OutputCsv_ConstructProps) 
    _init(config?: OutputCsv_ConstructProps): void
}

interface OutputGZip_ConstructProps extends Output_ConstructProps {

    // Own constructor properties of Gsf-1.Gsf.OutputGZip

    deflate_level?: number | null
    raw?: boolean | null
    sink?: Output | null
}

interface OutputGZip {

    // Own properties of Gsf-1.Gsf.OutputGZip

    deflate_level: number
    readonly raw: boolean
    readonly sink: Output

    // Class property signals of Gsf-1.Gsf.OutputGZip

    connect(sigName: "notify::deflate-level", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deflate-level", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deflate-level", ...args: any[]): void
    connect(sigName: "notify::raw", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::raw", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::raw", ...args: any[]): void
    connect(sigName: "notify::sink", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OutputGZip extends Output {

    // Own properties of Gsf-1.Gsf.OutputGZip

    static name: string
    static $gtype: GObject.GType<OutputGZip>

    // Constructors of Gsf-1.Gsf.OutputGZip

    constructor(config?: OutputGZip_ConstructProps) 
    /**
     * Adds a reference to `sink`.
     * @constructor 
     * @param sink The underlying data source.
     */
    constructor(sink: Output) 
    /**
     * Adds a reference to `sink`.
     * @constructor 
     * @param sink The underlying data source.
     */
    static new(sink: Output): OutputGZip
    _init(config?: OutputGZip_ConstructProps): void
}

interface OutputGio_ConstructProps extends Output_ConstructProps {
}

interface OutputGio {

    // Class property signals of Gsf-1.Gsf.OutputGio

    connect(sigName: "notify::modtime", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OutputGio extends Output {

    // Own properties of Gsf-1.Gsf.OutputGio

    static name: string
    static $gtype: GObject.GType<OutputGio>

    // Constructors of Gsf-1.Gsf.OutputGio

    constructor(config?: OutputGio_ConstructProps) 
    constructor(file: Gio.File) 
    static new(file: Gio.File): OutputGio
    static new_for_path(path: string): OutputGio
    static new_for_uri(uri: string): OutputGio
    _init(config?: OutputGio_ConstructProps): void
}

interface OutputIOChannel_ConstructProps extends Output_ConstructProps {
}

interface OutputIOChannel {

    // Class property signals of Gsf-1.Gsf.OutputIOChannel

    connect(sigName: "notify::modtime", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OutputIOChannel extends Output {

    // Own properties of Gsf-1.Gsf.OutputIOChannel

    static name: string
    static $gtype: GObject.GType<OutputIOChannel>

    // Constructors of Gsf-1.Gsf.OutputIOChannel

    constructor(config?: OutputIOChannel_ConstructProps) 
    constructor(channel: GLib.IOChannel) 
    static new(channel: GLib.IOChannel): OutputIOChannel
    _init(config?: OutputIOChannel_ConstructProps): void
}

interface OutputIconv_ConstructProps extends Output_ConstructProps {

    // Own constructor properties of Gsf-1.Gsf.OutputIconv

    /**
     * Either NULL or a UTF-8 string (representable in the target encoding)
     * to convert and output in place of characters that cannot be represented
     * in the target encoding.  NULL means use \u1234 or \U12345678 format.
     */
    fallback?: string | null
    input_charset?: string | null
    output_charset?: string | null
    sink?: Output | null
}

interface OutputIconv {

    // Own properties of Gsf-1.Gsf.OutputIconv

    /**
     * Either NULL or a UTF-8 string (representable in the target encoding)
     * to convert and output in place of characters that cannot be represented
     * in the target encoding.  NULL means use \u1234 or \U12345678 format.
     */
    fallback: string
    readonly input_charset: string
    readonly output_charset: string
    readonly sink: Output

    // Class property signals of Gsf-1.Gsf.OutputIconv

    connect(sigName: "notify::fallback", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fallback", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fallback", ...args: any[]): void
    connect(sigName: "notify::input-charset", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-charset", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-charset", ...args: any[]): void
    connect(sigName: "notify::output-charset", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-charset", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::output-charset", ...args: any[]): void
    connect(sigName: "notify::sink", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OutputIconv extends Output {

    // Own properties of Gsf-1.Gsf.OutputIconv

    static name: string
    static $gtype: GObject.GType<OutputIconv>

    // Constructors of Gsf-1.Gsf.OutputIconv

    constructor(config?: OutputIconv_ConstructProps) 
    /**
     * Adds a reference to `sink`.
     * @constructor 
     * @param sink The underlying data source.
     * @param dst The target character set.
     * @param src The source character set.
     */
    constructor(sink: Output, dst: string, src: string) 
    /**
     * Adds a reference to `sink`.
     * @constructor 
     * @param sink The underlying data source.
     * @param dst The target character set.
     * @param src The source character set.
     */
    static new(sink: Output, dst: string, src: string): OutputIconv
    _init(config?: OutputIconv_ConstructProps): void
}

interface OutputMemory_ConstructProps extends Output_ConstructProps {
}

interface OutputMemory {

    // Owm methods of Gsf-1.Gsf.OutputMemory

    get_bytes(): Uint8Array | null
    steal_bytes(): Uint8Array | null

    // Class property signals of Gsf-1.Gsf.OutputMemory

    connect(sigName: "notify::modtime", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OutputMemory extends Output {

    // Own properties of Gsf-1.Gsf.OutputMemory

    static name: string
    static $gtype: GObject.GType<OutputMemory>

    // Constructors of Gsf-1.Gsf.OutputMemory

    constructor(config?: OutputMemory_ConstructProps) 
    constructor() 
    static new(): OutputMemory
    _init(config?: OutputMemory_ConstructProps): void
}

interface OutputStdio_ConstructProps extends Output_ConstructProps {
}

interface OutputStdio {

    // Class property signals of Gsf-1.Gsf.OutputStdio

    connect(sigName: "notify::modtime", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OutputStdio extends Output {

    // Own properties of Gsf-1.Gsf.OutputStdio

    static name: string
    static $gtype: GObject.GType<OutputStdio>

    // Constructors of Gsf-1.Gsf.OutputStdio

    constructor(config?: OutputStdio_ConstructProps) 
    constructor(filename: string) 
    static new(filename: string): OutputStdio
    _init(config?: OutputStdio_ConstructProps): void
}

interface SharedMemory_ConstructProps extends GObject.Object_ConstructProps {
}

interface SharedMemory {

    // Own fields of Gsf-1.Gsf.SharedMemory

    g_object: GObject.Object
    buf: object
    size: gsf_off_t
    needs_free: boolean
    needs_unmap: boolean

    // Class property signals of Gsf-1.Gsf.SharedMemory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SharedMemory extends GObject.Object {

    // Own properties of Gsf-1.Gsf.SharedMemory

    static name: string
    static $gtype: GObject.GType<SharedMemory>

    // Constructors of Gsf-1.Gsf.SharedMemory

    constructor(config?: SharedMemory_ConstructProps) 
    static mmapped_new(buf: object | null, size: gsf_off_t): SharedMemory
    constructor(buf: object | null, size: gsf_off_t, needs_free: boolean) 
    static new(buf: object | null, size: gsf_off_t, needs_free: boolean): SharedMemory
    _init(config?: SharedMemory_ConstructProps): void
}

interface StructuredBlob_ConstructProps extends Infile_ConstructProps {
}

interface StructuredBlob {

    // Owm methods of Gsf-1.Gsf.StructuredBlob

    /**
     * Dumps structured blob `blob` onto the `container`.  Will fail if the output is
     * not an Outfile and blob has multiple streams.
     * @param container #GsfOutfile
     */
    write(container: Outfile): boolean

    // Class property signals of Gsf-1.Gsf.StructuredBlob

    connect(sigName: "notify::eof", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StructuredBlob extends Infile {

    // Own properties of Gsf-1.Gsf.StructuredBlob

    static name: string
    static $gtype: GObject.GType<StructuredBlob>

    // Constructors of Gsf-1.Gsf.StructuredBlob

    constructor(config?: StructuredBlob_ConstructProps) 
    _init(config?: StructuredBlob_ConstructProps): void
    /**
     * Create a tree of binary blobs with unknown content from a #GsfInput or
     * #GsfInfile and store it in a newly created #GsfStructuredBlob.
     * @param input An input (potentially a GsfInfile) holding the blob
     */
    static read(input: Input): StructuredBlob
}

interface XMLOut_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gsf-1.Gsf.XMLOut

    pretty_print?: boolean | null
    sink?: Output | null
}

interface XMLOut {

    // Own properties of Gsf-1.Gsf.XMLOut

    pretty_print: boolean
    readonly sink: Output

    // Own fields of Gsf-1.Gsf.XMLOut

    base: GObject.Object
    output: Output
    priv: object

    // Owm methods of Gsf-1.Gsf.XMLOut

    /**
     * Dump `len` bytes in `data` into the content of node `id` using base64
     * @param id tag id, or %NULL for node content
     * @param data Data to be written
     */
    add_base64(id: string | null, data: Uint8Array): void
    /**
     * dump boolean value `val` to an attribute named `id` or as the nodes content
     * Use '1' or '0' to simplify import
     * @param id tag id, or %NULL for node content
     * @param val a boolean
     */
    add_bool(id: string | null, val: boolean): void
    /**
     * dump Color `r`.`g`.`b` to an attribute named `id` or as the nodes content
     * @param id tag id, or %NULL for node content
     * @param r Red value
     * @param g Green value
     * @param b Blue value
     */
    add_color(id: string | null, r: number, g: number, b: number): void
    /**
     * dump `val_utf8` to an attribute named `id` or as the nodes content escaping
     * characters as necessary.  If `val_utf8` is %NULL do nothing (no warning, no
     * output)
     * @param id tag id, or %NULL for node content
     * @param val_utf8 a utf8 encoded string
     */
    add_cstr(id: string | null, val_utf8: string | null): void
    /**
     * dump `val_utf8` to an attribute named `id` without checking to see if
     * the content needs escaping.  A useful performance enhancement when
     * the application knows that structure of the content well.  If
     * `val_utf8` is %NULL do nothing (no warning, no output)
     * @param id tag id, or %NULL for node content
     * @param val_utf8 a utf8 encoded string to export
     */
    add_cstr_unchecked(id: string | null, val_utf8: string | null): void
    /**
     * Output the name of value `val` of enumeration type `etype`.
     * @param id tag id, or %NULL for node content
     * @param etype #GType
     * @param val enum element number
     */
    add_enum(id: string | null, etype: GObject.GType, val: number): void
    /**
     * dump float value `val` to an attribute named `id` or as the nodes
     * content with precision `precision`.  The number will be formattted
     * according to the "C" locale.
     * @param id tag id, or %NULL for node content
     * @param val the value
     * @param precision the number of significant digits to use, -1 meaning "enough".
     */
    add_float(id: string | null, val: number, precision: number): void
    /**
     * Output the value of `val` as a string.  Does NOT store any type information
     * with the string, just thevalue.
     * @param id tag id, or %NULL for node content
     * @param val #GValue
     */
    add_gvalue(id: string | null, val: any): void
    /**
     * dump integer value `val` to an attribute named `id` or as the nodes content
     * @param id tag id, or %NULL for node content
     * @param val the value
     */
    add_int(id: string | null, val: number): void
    /**
     * dump unsigned integer value `val` to an attribute named `id` or as the nodes
     * content
     * @param id tag id, or %NULL for node content
     * @param val the value
     */
    add_uint(id: string | null, val: number): void
    /**
     * Closes/ends an XML element.
     */
    end_element(): string
    /**
     * Get the #GsfOutput we are writing to..
     */
    get_output(): Output | null
    get_pretty_print(): boolean
    /**
     * Store some optional &lt;!DOCTYPE .. &gt; content
     * @param type the document type declaration
     */
    set_doc_type(type: string): void
    set_pretty_print(pp: boolean): boolean
    /**
     * Convenience routine to output a simple `id` element with content `content`.
     * @param id Element name
     * @param content Content of the element
     */
    simple_element(id: string, content: string): void
    /**
     * Convenience routine to output an element `id` with float value `val` using
     * `precision` significant digits.
     * @param id Element name
     * @param val Element value
     * @param precision the number of significant digits to use, -1 meaning "enough".
     */
    simple_float_element(id: string, val: number, precision: number): void
    /**
     * Convenience routine to output an element `id` with integer value `val`.
     * @param id Element name
     * @param val Element value
     */
    simple_int_element(id: string, val: number): void
    /**
     * Output a start element `id,` if necessary preceeded by an XML declaration.
     * @param id Element name
     */
    start_element(id: string): void

    // Class property signals of Gsf-1.Gsf.XMLOut

    connect(sigName: "notify::pretty-print", callback: (($obj: XMLOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pretty-print", callback: (($obj: XMLOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pretty-print", ...args: any[]): void
    connect(sigName: "notify::sink", callback: (($obj: XMLOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: XMLOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XMLOut extends GObject.Object {

    // Own properties of Gsf-1.Gsf.XMLOut

    static name: string
    static $gtype: GObject.GType<XMLOut>

    // Constructors of Gsf-1.Gsf.XMLOut

    constructor(config?: XMLOut_ConstructProps) 
    /**
     * Create an XML output stream.
     * @constructor 
     * @param output #GsfOutput
     */
    constructor(output: Output) 
    /**
     * Create an XML output stream.
     * @constructor 
     * @param output #GsfOutput
     */
    static new(output: Output): XMLOut
    _init(config?: XMLOut_ConstructProps): void
}

interface BlobClass {
}

abstract class BlobClass {

    // Own properties of Gsf-1.Gsf.BlobClass

    static name: string
}

interface BlobPrivate {
}

class BlobPrivate {

    // Own properties of Gsf-1.Gsf.BlobPrivate

    static name: string
}

interface ClipDataClass {
}

abstract class ClipDataClass {

    // Own properties of Gsf-1.Gsf.ClipDataClass

    static name: string
}

interface ClipDataPrivate {
}

class ClipDataPrivate {

    // Own properties of Gsf-1.Gsf.ClipDataPrivate

    static name: string
}

interface DocProp {

    // Owm methods of Gsf-1.Gsf.DocProp

    /**
     * A debugging utility to dump `prop` as text via g_print
     * New in 1.14.2
     */
    dump(): void
    /**
     * Release the given property.
     */
    free(): void
    get_link(): string | null
    get_name(): string
    get_val(): any
    /**
     * Sets `prop'`s link to `link`
     * @param link a link.
     */
    set_link(link: string | null): void
    /**
     * Assigns `val` to `prop,` and unsets and frees the current value.
     * @param val #GValue
     */
    set_val(val: any): void
    swap_val(val: any): any
}

/**
 * Class representing a properties of a document.
 * @record 
 */
class DocProp {

    // Own properties of Gsf-1.Gsf.DocProp

    static name: string

    // Constructors of Gsf-1.Gsf.DocProp

    constructor(name: string) 
    static new(name: string): DocProp
}

interface InfileClass {

    // Own fields of Gsf-1.Gsf.InfileClass

    input_class: InputClass
    num_children: (infile: Infile) => number
    name_by_index: (infile: Infile, i: number) => string | null
}

abstract class InfileClass {

    // Own properties of Gsf-1.Gsf.InfileClass

    static name: string
}

interface InputClass {

    // Own fields of Gsf-1.Gsf.InputClass

    g_object_class: GObject.ObjectClass
    Dup: (input: Input) => Input | null
    Read: (input: Input, num_bytes: number, optional_buffer: Uint8Array | null) => Uint8Array | null
    Seek: (input: Input, offset: gsf_off_t, whence: GLib.SeekType) => boolean
    OpenSibling: (input: Input, name: string) => Input
}

abstract class InputClass {

    // Own properties of Gsf-1.Gsf.InputClass

    static name: string
}

interface MSOleSortingKey {

    // Owm methods of Gsf-1.Gsf.MSOleSortingKey

    cmp(b: MSOleSortingKey): number
    free(): void
}

class MSOleSortingKey {

    // Own properties of Gsf-1.Gsf.MSOleSortingKey

    static name: string

    // Constructors of Gsf-1.Gsf.MSOleSortingKey

    constructor(name: string) 
    static new(name: string): MSOleSortingKey
}

interface ODFOutClass {

    // Own fields of Gsf-1.Gsf.ODFOutClass

    base: XMLOutClass
}

abstract class ODFOutClass {

    // Own properties of Gsf-1.Gsf.ODFOutClass

    static name: string
}

interface OpenPkgRel {

    // Owm methods of Gsf-1.Gsf.OpenPkgRel

    get_target(): string
    get_type(): string
    is_extern(): boolean
}

class OpenPkgRel {

    // Own properties of Gsf-1.Gsf.OpenPkgRel

    static name: string
}

interface OpenPkgRels {
}

class OpenPkgRels {

    // Own properties of Gsf-1.Gsf.OpenPkgRels

    static name: string
}

interface OutfileClass {

    // Own fields of Gsf-1.Gsf.OutfileClass

    output_class: OutputClass
}

abstract class OutfileClass {

    // Own properties of Gsf-1.Gsf.OutfileClass

    static name: string
}

interface OutputClass {

    // Own fields of Gsf-1.Gsf.OutputClass

    g_object_class: GObject.ObjectClass
    Close: (output: Output) => boolean
    Seek: (output: Output, offset: gsf_off_t, whence: GLib.SeekType) => boolean
    Write: (output: Output, data: Uint8Array) => boolean
}

abstract class OutputClass {

    // Own properties of Gsf-1.Gsf.OutputClass

    static name: string
}

interface OutputCsvClass {

    // Own fields of Gsf-1.Gsf.OutputCsvClass

    output_class: OutputClass
}

abstract class OutputCsvClass {

    // Own properties of Gsf-1.Gsf.OutputCsvClass

    static name: string
}

interface OutputIconvClass {

    // Own fields of Gsf-1.Gsf.OutputIconvClass

    output_class: OutputClass
}

abstract class OutputIconvClass {

    // Own properties of Gsf-1.Gsf.OutputIconvClass

    static name: string
}

interface Timestamp {

    // Own fields of Gsf-1.Gsf.Timestamp

    /**
     * #GDate in local timezone
     * @field 
     */
    date: GLib.Date
    /**
     * #glong number of seconds since `date`.
     * @field 
     */
    seconds: number
    /**
     * possibly blank #GString of the timezone
     * @field 
     */
    time_zone: GLib.String
    /**
     * as from g_date_time_to_unix.
     * @field 
     */
    timet: number

    // Owm methods of Gsf-1.Gsf.Timestamp

    /**
     * Produce a string representation (ISO 8601 format) of `stamp`.
     */
    as_string(): string
    /**
     * Copies a timestamp.
     */
    copy(): Timestamp
    /**
     * Compare timestamps `a` and `b`.
     * @param b another timestamp
     */
    equal(b: Timestamp): boolean
    /**
     * Releases the memory in use for `stamp` (if any).
     */
    free(): void
    hash(): number
    /**
     * Parser for time stamps.  Requires a ISO 8601 formatted string.
     * @param spec The string to parse
     */
    load_from_string(spec: string): number
    set_time(t: number): void
    /**
     * Calls g_value_set_box (value, stamp);
     * @param value #GValue
     */
    to_value(value: any): void
}

/**
 * A point in time.
 * @record 
 */
class Timestamp {

    // Own properties of Gsf-1.Gsf.Timestamp

    static name: string

    // Constructors of Gsf-1.Gsf.Timestamp

    constructor() 
    static new(): Timestamp
}

interface XMLBlob {
}

class XMLBlob {

    // Own properties of Gsf-1.Gsf.XMLBlob

    static name: string
}

interface XMLIn {

    // Own fields of Gsf-1.Gsf.XMLIn

    /**
     * user data
     * @field 
     */
    user_state: object
    /**
     * the current node content
     * @field 
     */
    content: GLib.String
    /**
     * Current document being parsed #GsfXMLInDoc
     * @field 
     */
    doc: XMLInDoc
    /**
     * current node (not on the stack)
     * @field 
     */
    node: XMLInNode

    // Owm methods of Gsf-1.Gsf.XMLIn

    /**
     * According to `state` is `str` in the namespace `ns_id` ?
     * @param str string to check
     * @param ns_id the namespace id
     */
    check_ns(str: string, ns_id: number): string | null
    /**
     * (New in 1.14.2)
     */
    get_input(): Input
    /**
     * Checks to see if `str` is the same as `ns_id:`:`name` with either an explicit
     * namespace or the current default namespace.
     * @param str The potentially namespace qualified node name.
     * @param ns_id The name space id to check
     * @param name The target node name
     */
    namecmp(str: string, ns_id: number, name: string): boolean
    /**
     * Take the first node from `doc` as the current node and call its start handler.
     * @param doc #GsfXMLInDoc
     * @param new_state arbitrary content for the parser
     * @param dtor #GsfXMLInExtDtor
     * @param attrs array of xmlChar const *
     */
    push_state(doc: XMLInDoc, new_state: object | null, dtor: XMLInExtDtor, attrs: string[]): void
    /**
     * (New in 1.14.33)
     * 
     * This provides a means to silently ignore unknown tags in contexts where
     * they are expected.
     * @param silent whether to be silent about unknown tags
     */
    set_silent_unknowns(silent: boolean): void
}

class XMLIn {

    // Own properties of Gsf-1.Gsf.XMLIn

    static name: string
}

interface XMLInDoc {

    // Owm methods of Gsf-1.Gsf.XMLInDoc

    /**
     * Adds additional nodes to the structure of `doc`
     * @param nodes %NULL terminated array of #GsfXMLInNode
     */
    add_nodes(nodes: XMLInNode[]): void
    /**
     * Free up resources
     */
    free(): void
    /**
     * Read an xml document from `input` and parse based on the the descriptor in
     * `doc`
     * @param input #GsfInput
     * @param user_state arbitrary content stored in the parser
     */
    parse(input: Input, user_state: object | null): boolean
    /**
     * Call the function `handler` when an unexpected child node is found
     * @param handler The function to call
     */
    set_unknown_handler(handler: XMLInUnknownFunc): void
}

class XMLInDoc {

    // Own properties of Gsf-1.Gsf.XMLInDoc

    static name: string

    // Constructors of Gsf-1.Gsf.XMLInDoc

    /**
     * Combine the nodes in the %NULL terminated array starting at `nodes` with the
     * name spaces in the %NULL terminated array starting at `ns`.  Prepare the
     * data structures necessary to validate a doument based on that description.
     * @constructor 
     * @param nodes an array of node descriptors
     * @param ns an array of namespace identifiers
     */
    constructor(nodes: XMLInNode[], ns: XMLInNS[]) 
    /**
     * Combine the nodes in the %NULL terminated array starting at `nodes` with the
     * name spaces in the %NULL terminated array starting at `ns`.  Prepare the
     * data structures necessary to validate a doument based on that description.
     * @constructor 
     * @param nodes an array of node descriptors
     * @param ns an array of namespace identifiers
     */
    static new(nodes: XMLInNode[], ns: XMLInNS[]): XMLInDoc
}

interface XMLInNS {

    // Own fields of Gsf-1.Gsf.XMLInNS

    /**
     * URI
     * @field 
     */
    uri: string
    ns_id: number
}

class XMLInNS {

    // Own properties of Gsf-1.Gsf.XMLInNS

    static name: string
}

interface XMLInNode {

    // Own fields of Gsf-1.Gsf.XMLInNode

    /**
     * identifier unique in the entire tree
     * @field 
     */
    id: string
    /**
     * namespace identifier
     * @field 
     */
    ns_id: number
    /**
     * node name
     * @field 
     */
    name: string
    /**
     * parent node identifier
     * @field 
     */
    parent_id: string
    start: (xin: XMLIn, attrs: libxml2.Char) => void
    end: (xin: XMLIn, unknown: XMLBlob) => void
    /**
     * whether the node has content
     * @field 
     */
    has_content: XMLContent
    /**
     * whether to check namespace for children
     * @field 
     */
    check_children_for_ns: number
    /**
     * whether to share children with parent.
     * @field 
     */
    share_children_with_parent: number
}

class XMLInNode {

    // Own properties of Gsf-1.Gsf.XMLInNode

    static name: string
}

interface XMLOutClass {

    // Own fields of Gsf-1.Gsf.XMLOutClass

    base: GObject.ObjectClass
}

abstract class XMLOutClass {

    // Own properties of Gsf-1.Gsf.XMLOutClass

    static name: string
}

    type gsf_off_t = number
}
export default Gsf;