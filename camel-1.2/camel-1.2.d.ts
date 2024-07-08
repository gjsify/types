/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './camel-1.2-ambient.d.ts';

/**
 * Camel-1.2
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Camel {
    /**
     * Authentication result codes used by #CamelService.
     */
    enum AuthenticationResult {
        /**
         * An error occurred while authenticating.
         */
        ERROR,
        /**
         * Server accepted our authentication attempt.
         */
        ACCEPTED,
        /**
         * Server rejected our authentication attempt.
         */
        REJECTED,
    }
    enum CertTrust {
        UNKNOWN,
        NEVER,
        MARGINAL,
        FULLY,
        ULTIMATE,
        TEMPORARY,
    }
    enum CipherContextError {
        /**
         * one or more recipient's public key was not found
         */
        CIPHER_CONTEXT_ERROR_KEY_NOT_FOUND,
    }
    enum CipherHash {
        DEFAULT,
        MD2,
        MD5,
        SHA1,
        SHA256,
        SHA384,
        SHA512,
        RIPEMD160,
        TIGER192,
        HAVAL5160,
    }
    enum CipherValidityEncrypt {
        NONE,
        WEAK,
        ENCRYPTED,
        STRONG,
    }
    enum CipherValidityMode {
        SIGN,
        ENCRYPT,
    }
    enum CipherValiditySign {
        NONE,
        GOOD,
        BAD,
        UNKNOWN,
        NEED_PUBLIC_KEY,
    }
    /**
     * Declares the compare type to use.
     */
    enum CompareType {
        /**
         * compare case insensitively
         */
        INSENSITIVE,
        /**
         * compare case sensitively
         */
        SENSITIVE,
    }
    enum DBError {
        /**
         * database is corrupt
         */
        DB_ERROR_CORRUPT,
    }
    /**
     * An enum of all the known columns, which can be used for a quick column lookups.
     */
    enum DBKnownColumnNames {
        /**
         * unknown column name
         */
        UNKNOWN,
        /**
         * attachment
         */
        ATTACHMENT,
        /**
         * bdata
         */
        BDATA,
        /**
         * cinfo
         */
        CINFO,
        /**
         * deleted
         */
        DELETED,
        /**
         * deleted_count
         */
        DELETED_COUNT,
        /**
         * dreceived
         */
        DRECEIVED,
        /**
         * dsent
         */
        DSENT,
        /**
         * flags
         */
        FLAGS,
        /**
         * folder_name
         */
        FOLDER_NAME,
        /**
         * followup_completed_on
         */
        FOLLOWUP_COMPLETED_ON,
        /**
         * followup_due_by
         */
        FOLLOWUP_DUE_BY,
        /**
         * followup_flag
         */
        FOLLOWUP_FLAG,
        /**
         * important
         */
        IMPORTANT,
        /**
         * jnd_count
         */
        JND_COUNT,
        /**
         * junk
         */
        JUNK,
        /**
         * junk_count
         */
        JUNK_COUNT,
        /**
         * labels
         */
        LABELS,
        /**
         * mail_cc
         */
        MAIL_CC,
        /**
         * mail_from
         */
        MAIL_FROM,
        /**
         * mail_to
         */
        MAIL_TO,
        /**
         * mlist
         */
        MLIST,
        /**
         * nextuid
         */
        NEXTUID,
        /**
         * part
         */
        PART,
        /**
         * preview
         */
        PREVIEW,
        /**
         * read
         */
        READ,
        /**
         * replied
         */
        REPLIED,
        /**
         * saved_count
         */
        SAVED_COUNT,
        /**
         * size
         */
        SIZE,
        /**
         * subject
         */
        SUBJECT,
        /**
         * time
         */
        TIME,
        /**
         * uid
         */
        UID,
        /**
         * unread_count
         */
        UNREAD_COUNT,
        /**
         * userheaders
         */
        USERHEADERS,
        /**
         * usertags
         */
        USERTAGS,
        /**
         * version
         */
        VERSION,
        /**
         * visible_count
         */
        VISIBLE_COUNT,
        /**
         * vuid
         */
        VUID,
    }
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

        // Static fields of Camel.Error

        /**
         * a generic (fallback) error code
         */
        static ERROR_GENERIC: number;

        // Constructors of Camel.Error

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    /**
     * Describes what headers to fetch when downloading message summaries.
     */
    enum FetchHeadersType {
        /**
         * Fetch only basic headers (Date, From, To, Subject, etc.).
         */
        BASIC,
        /**
         * Fetch all basic headers and mailing list headers.
         */
        BASIC_AND_MAILING_LIST,
        /**
         * Fetch all available message headers.
         */
        ALL,
    }
    enum FetchType {
        /**
         * fetch old messages
         */
        OLD_MESSAGES,
        /**
         * fetch new messages
         */
        NEW_MESSAGES,
    }
    class FolderError extends GLib.Error {
        static $gtype: GObject.GType<FolderError>;

        // Static fields of Camel.FolderError

        /**
         * a generic error about invalid operation with the folder
         */
        static INVALID: number;
        /**
         * the folder is in an invalid state
         */
        static INVALID_STATE: number;
        /**
         * the folder is not empty
         */
        static NON_EMPTY: number;
        /**
         * requested UID is not a UID
         */
        static NON_UID: number;
        /**
         * insufficient permissions for the requested operation
         */
        static INSUFFICIENT_PERMISSION: number;
        /**
         * the folder path is invalid
         */
        static INVALID_PATH: number;
        /**
         * requested UID is invalid/cannot be found
         */
        static INVALID_UID: number;
        /**
         * the folder's summary is invalid/broken
         */
        static SUMMARY_INVALID: number;

        // Constructors of Camel.FolderError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Own static methods of Camel.FolderError

        static quark(): GLib.Quark;
    }

    /**
     * GPG key trust levels.
     */
    enum GpgTrust {
        /**
         * no trust set
         */
        NONE,
        /**
         * unknown trust level
         */
        UNKNOWN,
        /**
         * never trust the key
         */
        NEVER,
        /**
         * marginally trust the key
         */
        MARGINAL,
        /**
         * fully trust the key
         */
        FULL,
        /**
         * ultimately trust the key
         */
        ULTIMATE,
    }
    enum HTMLParserState {
        DATA,
        ENT,
        ELEMENT,
        TAG,
        DTDENT,
        COMMENT0,
        COMMENT,
        ATTR0,
        ATTR,
        VAL0,
        VAL,
        VAL_ENT,
        EOD,
        EOF,
    }
    enum HeaderAddressType {
        NONE,
        NAME,
        GROUP,
    }
    /**
     * These are result codes used when passing messages through a junk filter.
     */
    enum JunkStatus {
        /**
         * An error occurred while invoking the junk filter.
         */
        ERROR,
        /**
         * The junk filter could not determine whether the message is junk.
         */
        INCONCLUSIVE,
        /**
         * The junk filter believes the message is junk.
         */
        MESSAGE_IS_JUNK,
        /**
         * The junk filter believes the message is not junk.
         */
        MESSAGE_IS_NOT_JUNK,
    }
    enum LockType {
        READ,
        WRITE,
    }
    enum MemPoolFlags {
        /**
         * Allocate to native structure alignment
         */
        STRUCT,
        /**
         * Allocate to words - 16 bit alignment
         */
        WORD,
        /**
         * Allocate to bytes - 8 bit alignment
         */
        BYTE,
        /**
         * Which bits determine the alignment information
         */
        MASK,
    }
    enum MimeFilterBasicType {
        INVALID,
        BASE64_ENC,
        BASE64_DEC,
        QP_ENC,
        QP_DEC,
        UU_ENC,
        UU_DEC,
    }
    enum MimeFilterCRLFDirection {
        ENCODE,
        DECODE,
    }
    enum MimeFilterCRLFMode {
        DOTS,
        ONLY,
    }
    enum MimeFilterGZipMode {
        ZIP,
        UNZIP,
    }
    enum MimeFilterYencDirection {
        ENCODE,
        DECODE,
    }
    enum MimeParserState {
        INITIAL,
        PRE_FROM,
        FROM,
        HEADER,
        BODY,
        MULTIPART,
        MESSAGE,
        PART,
        END,
        EOF,
        PRE_FROM_END,
        FROM_END,
        HEADER_END,
        BODY_END,
        MULTIPART_END,
        MESSAGE_END,
    }
    /**
     * Methods for establishing an encrypted (or unencrypted) network connection.
     */
    enum NetworkSecurityMethod {
        /**
         * Use an unencrypted network connection.
         */
        NONE,
        /**
         * Use SSL by connecting to an alternate port number.
         */
        SSL_ON_ALTERNATE_PORT,
        /**
         * Use SSL or TLS by connecting to the standard port and invoking
         *   STARTTLS before authenticating.  This is the recommended method.
         */
        STARTTLS_ON_STANDARD_PORT,
    }
    enum ProviderConfType {
        END,
        SECTION_START,
        SECTION_END,
        CHECKBOX,
        CHECKSPIN,
        ENTRY,
        LABEL,
        HIDDEN,
        OPTIONS,
        PLACEHOLDER,
        ADVANCED_SECTION_START,
    }
    enum ProviderType {
        STORE,
        TRANSPORT,
    }
    /**
     * Defines type of a #CamelSExpResult.
     */
    enum SExpResultType {
        /**
         * type is a ptrarray, what it points to is implementation dependant
         */
        ARRAY_PTR,
        /**
         * type is a number
         */
        INT,
        /**
         * type is a pointer to a single string
         */
        STRING,
        /**
         * boolean type
         */
        BOOL,
        /**
         * time_t type
         */
        TIME,
        /**
         * unknown type
         */
        UNDEFINED,
    }
    /**
     * Defines type of a #CamelSExpTerm and partly also #CamelSExpSymbol
     */
    enum SExpTermType {
        /**
         * integer literal
         */
        INT,
        /**
         * boolean literal
         */
        BOOL,
        /**
         * string literal
         */
        STRING,
        /**
         * time_t literal (number of seconds past the epoch)
         */
        TIME,
        /**
         * normal function, arguments are evaluated before calling
         */
        FUNC,
        /**
         * immediate function, raw terms are arguments
         */
        IFUNC,
        /**
         * variable reference
         */
        VAR,
    }
    enum SMIMESign {
        CLEARSIGN,
        ENVELOPED,
    }
    enum SaslAnonTraceType {
        EMAIL,
        OPAQUE,
        EMPTY,
    }
    /**
     * Connection status returned by camel_service_get_connection_status().
     */
    enum ServiceConnectionStatus {
        /**
         * #CamelService is disconnected from a remote server.
         */
        DISCONNECTED,
        /**
         * #CamelService is connecting to a remote server.
         */
        CONNECTING,
        /**
         * #CamelService is connected to a remote server.
         */
        CONNECTED,
        /**
         * #CamelService is disconnecting from a remote server.
         */
        DISCONNECTING,
    }
    class ServiceError extends GLib.Error {
        static $gtype: GObject.GType<ServiceError>;

        // Static fields of Camel.ServiceError

        /**
         * a generic service error code
         */
        static INVALID: number;
        /**
         * the URL for the service is invalid
         */
        static URL_INVALID: number;
        /**
         * the service is unavailable
         */
        static UNAVAILABLE: number;
        /**
         * failed to authenitcate
         */
        static CANT_AUTHENTICATE: number;
        /**
         * the service is not connected
         */
        static NOT_CONNECTED: number;

        // Constructors of Camel.ServiceError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Own static methods of Camel.ServiceError

        static quark(): GLib.Quark;
    }

    enum SessionAlertType {
        INFO,
        WARNING,
        ERROR,
    }
    /**
     * Determines the direction of a sort.
     */
    enum SortType {
        /**
         * Sorting is in ascending order.
         */
        ASCENDING,
        /**
         * Sorting is in descending order.
         */
        DESCENDING,
    }
    class StoreError extends GLib.Error {
        static $gtype: GObject.GType<StoreError>;

        // Static fields of Camel.StoreError

        /**
         * an invalid store operation had been requested
         */
        static INVALID: number;
        /**
         * requested operation cannot be performed with the given folder
         */
        static NO_FOLDER: number;

        // Constructors of Camel.StoreError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Own static methods of Camel.StoreError

        static quark(): GLib.Quark;
    }

    enum StreamBufferMode {
        BUFFER,
        NONE,
        READ,
        WRITE,
        MODE,
    }
    /**
     * Describes a three-state value, which can be either Off, On or Inconsistent.
     */
    enum ThreeState {
        /**
         * the three-state value is Off
         */
        OFF,
        /**
         * the three-state value is On
         */
        ON,
        /**
         * the three-state value is neither On, nor Off
         */
        INCONSISTENT,
    }
    /**
     * Declares time unit, which serves to interpret the time value,
     * like in #CamelOfflineSettings.
     */
    enum TimeUnit {
        /**
         * days
         */
        DAYS,
        /**
         * weeks
         */
        WEEKS,
        /**
         * months
         */
        MONTHS,
        /**
         * years
         */
        YEARS,
    }
    enum TransferEncoding {
        ENCODING_DEFAULT,
        ENCODING_7BIT,
        ENCODING_8BIT,
        ENCODING_BASE64,
        ENCODING_QUOTEDPRINTABLE,
        ENCODING_BINARY,
        ENCODING_UUENCODE,
        NUM_ENCODINGS,
    }
    enum VTrashFolderType {
        TRASH,
        JUNK,
        LAST,
    }
    enum _search_match_t {
        EXACT,
        CONTAINS,
        WORD,
        STARTS,
        ENDS,
        SOUNDEX,
    }
    enum _search_t {
        ASIS,
        ENCODED,
        ADDRESS,
        ADDRESS_ENCODED,
        MLIST,
    }
    enum _search_word_t {
        SIMPLE,
        COMPLEX,
        '8BIT',
    }
    const AI_CANONNAME: number;
    const AI_NUMERICHOST: number;
    const BLOCK_SIZE: number;
    const BLOCK_SIZE_BITS: number;
    /**
     * Name of the photo-filename property which can be stored
     * on a #CamelCipherCertInfo.
     */
    const CIPHER_CERT_INFO_PROPERTY_PHOTO_FILENAME: string;
    /**
     * A string containing a list of email addresses of all signers
     * including their alternative emails. Use camel_address_unformat()
     * to break them back into separate addresses. This can be set
     * only on the first signer of the first validity, even the addresses
     * can belong to a different signer.
     */
    const CIPHER_CERT_INFO_PROPERTY_SIGNERS_ALT_EMAILS: string;
    const DB_FILE: string;
    const DB_FREE_CACHE_SIZE: number;
    const DB_IN_MEMORY_DB: string;
    const DB_IN_MEMORY_TABLE: string;
    const DB_IN_MEMORY_TABLE_LIMIT: number;
    const DB_SLEEP_INTERVAL: number;
    const DEBUG_IMAP: string;
    const DEBUG_IMAP_FOLDER: string;
    const DOT_LOCK_REFRESH: number;
    const EAI_ADDRFAMILY: number;
    const EAI_AGAIN: number;
    const EAI_BADFLAGS: number;
    const EAI_FAIL: number;
    const EAI_FAMILY: number;
    const EAI_MEMORY: number;
    const EAI_NODATA: number;
    const EAI_NONAME: number;
    const EAI_OVERFLOW: number;
    const EAI_SERVICE: number;
    const EAI_SOCKTYPE: number;
    const EAI_SYSTEM: number;
    /**
     * This environment variable configures where the camel
     * provider modules are loaded from.
     */
    const EDS_CAMEL_PROVIDER_DIR: string;
    /**
     * The folder type bitshift value.
     */
    const FOLDER_TYPE_BIT: number;
    /**
     * The folder type mask value.
     */
    const FOLDER_TYPE_MASK: number;
    const FOLD_MAX_SIZE: number;
    const FOLD_SIZE: number;
    const INDEX_DELETED: number;
    const KEY_TABLE_MAX_KEY: number;
    const LOCK_DELAY: number;
    const LOCK_DOT_DELAY: number;
    const LOCK_DOT_RETRY: number;
    const LOCK_DOT_STALE: number;
    const LOCK_RETRY: number;
    const MESSAGE_DATE_CURRENT: number;
    const MESSAGE_SYSTEM_MASK: number;
    const MIME_YDECODE_STATE_BEGIN: number;
    const MIME_YDECODE_STATE_DECODE: number;
    const MIME_YDECODE_STATE_END: number;
    const MIME_YDECODE_STATE_EOLN: number;
    const MIME_YDECODE_STATE_ESCAPE: number;
    const MIME_YDECODE_STATE_INIT: number;
    const MIME_YDECODE_STATE_PART: number;
    const MIME_YENCODE_CRC_INIT: number;
    const MIME_YENCODE_STATE_INIT: number;
    const NI_DGRAM: number;
    const NI_NAMEREQD: number;
    const NI_NOFQDN: number;
    const NI_NUMERICHOST: number;
    const NI_NUMERICSERV: number;
    const O_BINARY: number;
    const RECIPIENT_TYPE_BCC: string;
    const RECIPIENT_TYPE_CC: string;
    const RECIPIENT_TYPE_RESENT_BCC: string;
    const RECIPIENT_TYPE_RESENT_CC: string;
    const RECIPIENT_TYPE_RESENT_TO: string;
    const RECIPIENT_TYPE_TO: string;
    /**
     * Can be used with camel_session_addressbook_contains_sync() as the book UID,
     * meaning to check in all configured address books.
     */
    const SESSION_BOOK_UID_ANY: string;
    /**
     * Can be used with camel_session_addressbook_contains_sync() as the book UID,
     * meaning to check in all address books enabled for auto-completion.
     */
    const SESSION_BOOK_UID_COMPLETION: string;
    /**
     * The folder store info type bitshift value.
     */
    const STORE_INFO_FOLDER_TYPE_BIT: number;
    /**
     * The folder store info type mask value.
     */
    const STORE_INFO_FOLDER_TYPE_MASK: number;
    const STORE_INFO_FOLDER_UNKNOWN: number;
    const STORE_SETUP_ARCHIVE_FOLDER: string;
    const STORE_SETUP_DRAFTS_FOLDER: string;
    const STORE_SETUP_SENT_FOLDER: string;
    const STORE_SETUP_TEMPLATES_FOLDER: string;
    const UNMATCHED_NAME: string;
    const URL_HIDE_ALL: number;
    const URL_PART_AUTH: number;
    const URL_PART_HIDDEN: number;
    const URL_PART_HOST: number;
    const URL_PART_NEED: number;
    const URL_PART_PASSWORD: number;
    const URL_PART_PATH: number;
    const URL_PART_PATH_DIR: number;
    const URL_PART_PORT: number;
    const URL_PART_USER: number;
    const UTILS_MAX_USER_HEADERS: number;
    const UUDECODE_STATE_MASK: number;
    const VJUNK_NAME: string;
    const VTRASH_NAME: string;
    /**
     * Thread safe variant of g_object_bind_property(). See its documentation
     * for more information on arguments and return value.
     * @param source the source #GObject
     * @param source_property the property on @source to bind
     * @param target the target #GObject
     * @param target_property the property on @target to bind
     * @param flags flags to pass to #GBinding
     */
    function binding_bind_property(
        source: GObject.Object,
        source_property: string,
        target: GObject.Object,
        target_property: string,
        flags: GObject.BindingFlags,
    ): GObject.Binding;
    /**
     * Thread safe variant of g_object_bind_property_with_closures(). See its
     * documentation for more information on arguments and return value.
     * @param source the source #GObject
     * @param source_property the property on @source to bind
     * @param target the target #GObject
     * @param target_property the property on @target to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function   from the @source to the @target, or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function   from the @target to the @source, or %NULL to use the default
     * @returns the #GBinding instance representing the   binding between the two #GObject instances. The binding is released   whenever the #GBinding reference count reaches zero.
     */
    function binding_bind_property_full(
        source: GObject.Object,
        source_property: string,
        target: GObject.Object,
        target_property: string,
        flags: GObject.BindingFlags,
        transform_to: GObject.Closure,
        transform_from: GObject.Closure,
    ): GObject.Binding;
    /**
     * Finds the minimum charset for this string NULL means US-ASCII.
     * @param _in input text
     * @returns the minimum charset or NULL for US_ASCII.
     */
    function charset_best(_in: number[]): string | null;
    function charset_iso_to_windows(isocharset: string): string;
    function cipher_can_load_photos(): boolean;
    /**
     * Writes a part to a stream in a canonicalised format, suitable for signing/encrypting.
     *
     * The transfer encoding paramaters for the part may be changed by this function.
     * @param part Part to write.
     * @param flags flags for the canonicalisation filter (CamelMimeFilterCanon)
     * @param ostream stream to write canonicalised output to.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns -1 on error;
     */
    function cipher_canonical_to_stream(
        part: MimePart,
        flags: number,
        ostream: Stream,
        cancellable?: Gio.Cancellable | null,
    ): number;
    /**
     * Gets a named property `name` value for the given `cert_info`.
     * @param cert_info a #CamelCipherCertInfo
     * @param name a property name
     * @returns Value of a named property of the @cert_info,    or %NULL when no such property exists. The returned value is owned by    the @cert_info and is valid until the @cert_info is freed.
     */
    function cipher_certinfo_get_property(cert_info: CipherCertInfo, name: string): any | null;
    /**
     * Sets a named property `name` value `value` for the given `cert_info`.
     * If the `value` is %NULL, then the property is removed. With a non-%NULL
     * `value` also `value_free` and `value_clone` functions cannot be %NULL.
     * @param cert_info a #CamelCipherCertInfo
     * @param name a property name
     * @param value a property value, or %NULL
     * @param value_free a free function for the @value
     * @param value_clone a clone function for the @value
     */
    function cipher_certinfo_set_property(
        cert_info: CipherCertInfo,
        name: string,
        value?: any | null,
        value_free?: GLib.DestroyNotify | null,
        value_clone?: CipherCloneFunc | null,
    ): void;
    function content_disposition_decode(_in: string): ContentDisposition;
    function content_transfer_encoding_decode(_in: string): string;
    function content_type_decode(_in: string): ContentType;
    /**
     * Check to see if a debug mode is activated.  `mode` takes one of two forms,
     * a fully qualified 'module:target', or a wildcard 'module' name.  It
     * returns a boolean to indicate if the module or module and target is
     * currently activated for debug output.
     * @param mode string name of the mode to check for
     * @returns Whether the debug @mode is activated
     */
    function debug(mode: string): boolean;
    /**
     * Demangles `bt,` possibly got from camel_debug_get_raw_backtrace(), by
     * replacing addresses with actual function calls and eventually line numbers, if
     * available. It modifies lines of `bt,` but skips those it cannot parse.
     *
     * Note: Getting backtraces only works if the library was
     * configured with --enable-backtraces.
     *
     * See also camel_debug_get_raw_backtrace()
     * @param bt a #GString with a raw backtrace, or %NULL
     */
    function debug_demangle_backtrace(bt?: GLib.String | null): GLib.String | null;
    /**
     * Call this when you're done with your debug output.  If and only if
     * you called camel_debug_start, and if it returns TRUE.
     */
    function debug_end(): void;
    /**
     * Gets current backtrace leading to this function call and demangles it.
     * @returns Current backtrace, or %NULL, if cannot determine it. Note: Getting backtraces only works if the library was configured with --enable-backtraces. See also camel_debug_get_raw_backtrace()
     */
    function debug_get_backtrace(): GLib.String | null;
    /**
     * Gets current raw backtrace leading to this function call.
     * This is quicker than camel_debug_get_backtrace(), because it
     * doesn't demangle the backtrace. To demangle it (replace addresses
     * with actual function calls and eventually line numbers, if
     * available) call camel_debug_demangle_backtrace().
     * @returns Current raw backtrace, or %NULL, if cannot determine it. Note: Getting backtraces only works if the library was configured with --enable-backtraces. See also camel_debug_get_backtrace()
     */
    function debug_get_raw_backtrace(): GLib.String | null;
    /**
     * Init camel debug.
     *
     * CAMEL_DEBUG is set to a comma separated list of modules to debug.
     * The modules can contain module-specific specifiers after a ':', or
     * just act as a wildcard for the module or even specifier.  e.g. 'imap'
     * for imap debug, or 'imap:folder' for imap folder debug.  Additionaly,
     * ':folder' can be used for a wildcard for any folder operations.
     */
    function debug_init(): void;
    /**
     * Prints current backtraces stored with camel_debug_ref_unref_push_backtrace()
     * or with camel_debug_ref_unref_push_backtrace_for_object().
     *
     * It's usually not needed to use this function, as the left backtraces, if any,
     * are printed at the end of the application.
     */
    function debug_ref_unref_dump_backtraces(): void;
    /**
     * Adds this backtrace into the set of backtraces related to some object
     * reference counting issues debugging. This is usually called inside g_object_ref()
     * and g_object_unref(). If the backtrace corresponds to a g_object_unref()
     * call, and a corresponding g_object_ref() backtrace is found in the current list,
     * then the previous backtrace is removed and this one is skipped.
     *
     * Any left backtraces in the list are printed at the application end.
     *
     * A convenient function camel_debug_ref_unref_push_backtrace_for_object()
     * is provided too.
     * @param backtrace a backtrace to push, taken from camel_debug_get_backtrace()
     * @param object_ref_count the current object reference count when the push is done
     */
    function debug_ref_unref_push_backtrace(backtrace: GLib.String, object_ref_count: number): void;
    /**
     * Gets current backtrace of this call and adds it to the list
     * of backtraces with camel_debug_ref_unref_push_backtrace().
     *
     * Usual usage would be, once GNOME bug 758358 is applied to the GLib sources,
     * or a patched GLib is used, to call this function in an object init() function,
     * like this:
     *
     * static void
     * my_object_init (MyObject *obj)
     * {
     *    camel_debug_ref_unref_push_backtrace_for_object (obj);
     *    g_track_object_ref_unref (obj, (GFunc) camel_debug_ref_unref_push_backtrace_for_object, NULL);
     * }
     *
     * Note that the g_track_object_ref_unref() can track only one pointer, thus make
     * sure you track the right one (add some logic if multiple objects are created at once).
     * @param _object a #GObject, for which add the backtrace
     */
    function debug_ref_unref_push_backtrace_for_object(_object?: any | null): void;
    /**
     * Start debug output for a given mode, used to make sure debug output
     * is output atomically and not interspersed with unrelated stuff.
     * @param mode string name of the mode to start the debug for
     * @returns %TRUE if mode is set, and in which case, you must call camel_debug_end() when finished any screen output.
     */
    function debug_start(mode: string): boolean;
    /**
     * Convert `in` from text/plain into text/enriched or text/richtext
     * based on `flags`.
     * @param _in input textual string
     * @param flags flags specifying filter behaviour
     * @returns a newly allocated string containing the enriched or richtext version of @in.
     */
    function enriched_to_html(_in: string, flags: MimeFilterEnrichedFlags): string;
    function error_quark(): GLib.Quark;
    /**
     * Retrieve a gint32.
     * @param _in file to read from
     * @param dest pointer to a variable to store the value in
     * @returns 0 on success, -1 on error.
     */
    function file_util_decode_fixed_int32(_in: any | null, dest: number): number;
    /**
     * Decode a normal string from the input file.
     * @param _in file to read from
     * @param str pointer to a variable to store the value in
     * @param len total-len to decode.
     * @returns 0 on success, -1 on error.
     */
    function file_util_decode_fixed_string(_in: any | null, str: string, len: number): number;
    /**
     * Decode a gint64 type.
     * @param _in file to read from
     * @param dest pointer to a variable to put the value in
     * @returns 0 on success, -1 on failure.
     */
    function file_util_decode_gint64(_in: any | null, dest: number): number;
    /**
     * Decode an gsize type.
     * @param _in file to read from
     * @param dest pointer to a variable to put the value in
     * @returns 0 on success, -1 on failure.
     */
    function file_util_decode_gsize(_in: any | null, dest: number): number;
    /**
     * Decode an off_t type.
     * @param _in file to read from
     * @param dest pointer to a variable to put the value in
     * @returns 0 on success, -1 on failure.
     */
    function file_util_decode_off_t(_in: any | null, dest: number): number;
    /**
     * Decode a normal string from the input file.
     * @param _in file to read from
     * @param str pointer to a variable to store the value in
     * @returns 0 on success, -1 on error.
     */
    function file_util_decode_string(_in: any | null, str: string): number;
    /**
     * Decode a time_t value.
     * @param _in file to read from
     * @param dest pointer to a variable to store the value in
     * @returns 0 on success, -1 on error.
     */
    function file_util_decode_time_t(_in: any | null, dest: number): number;
    /**
     * Retrieve an encoded uint32 from a file.
     * @param _in file to read from
     * @param dest pointer to a variable to store the value in
     * @returns 0 on success, -1 on error.  @*dest will contain the decoded value.
     */
    function file_util_decode_uint32(_in: any | null, dest: number): number;
    /**
     * Encode a gint32, performing no compression, but converting
     * to network order.
     * @param out file to output to
     * @param value value to output
     * @returns 0 on success, -1 on error.
     */
    function file_util_encode_fixed_int32(out: any | null, value: number): number;
    /**
     * Encode a normal string and save it in the output file.
     * Unlike `camel_file_util_encode_string,` it pads the
     * `str` with "NULL" bytes, if `len` is > strlen(str)
     * @param out file to output to
     * @param str value to output
     * @param len total-len of str to store
     * @returns 0 on success, -1 on error.
     */
    function file_util_encode_fixed_string(out: any | null, str: string, len: number): number;
    /**
     * Encode a gint64 type.
     * @param out file to output to
     * @param value value to output
     * @returns 0 on success, -1 on error.
     */
    function file_util_encode_gint64(out: any | null, value: number): number;
    /**
     * Encode an gsize type.
     * @param out file to output to
     * @param value value to output
     * @returns 0 on success, -1 on error.
     */
    function file_util_encode_gsize(out: any | null, value: number): number;
    /**
     * Encode an off_t type.
     * @param out file to output to
     * @param value value to output
     * @returns 0 on success, -1 on error.
     */
    function file_util_encode_off_t(out: any | null, value: number): number;
    /**
     * Encode a normal string and save it in the output file.
     * @param out file to output to
     * @param str value to output
     * @returns 0 on success, -1 on error.
     */
    function file_util_encode_string(out: any | null, str: string): number;
    /**
     * Encode a time_t value to the file.
     * @param out file to output to
     * @param value value to output
     * @returns 0 on success, -1 on error.
     */
    function file_util_encode_time_t(out: any | null, value: number): number;
    /**
     * Utility function to save an uint32 to a file.
     * @param out file to output to
     * @param value value to output
     * @returns 0 on success, -1 on error.
     */
    function file_util_encode_uint32(out: any | null, value: number): number;
    /**
     * 'Flattens' `name` into a safe filename string by hex encoding any
     * chars that may cause problems on the filesystem.
     * @param name string to 'flattened' into a safe filename
     * @returns a safe filename string.
     */
    function file_util_safe_filename(name: string): string;
    /**
     * Builds a pathname where the basename is of the form ".#" + the
     * basename of `filename,` for instance used in a two-stage commit file
     * write.
     * @param filename a pathname
     * @returns The new pathname.  It must be free'd with g_free().
     */
    function file_util_savename(filename: string): string;
    function folder_error_quark(): GLib.Quark;
    /**
     * This takes an array of folders and attaches them together according
     * to the hierarchy described by their full_names and `separator`. If
     * `namespace_` is non-%NULL, then it will be ignored as a full_name
     * prefix, for purposes of comparison. If necessary,
     * camel_folder_info_build() will create additional #CamelFolderInfo with
     * %NULL urls to fill in gaps in the tree. The value of `short_names`
     * is used in constructing the names of these intermediate folders.
     * @param folders an array of #CamelFolderInfo
     * @param namespace_ an ignorable prefix on the folder names
     * @param separator the hieararchy separator character
     * @param short_names %TRUE if the (short) name of a folder is the part after the last @separator in the full name. %FALSE if it is the full name.
     * @returns the top level of the tree of linked folder info.
     */
    function folder_info_build(
        folders: FolderInfo[],
        namespace_: string,
        separator: number,
        short_names: boolean,
    ): FolderInfo;
    /**
     * Frees a structure returned with camel_getaddrinfo(). It does
     * nothing when the `host` is %NULL.
     * @param host a host address information structure to free, or %NULL
     */
    function freeaddrinfo(host?: any | null): void;
    /**
     * Resolves a host `name` and returns an information about its address.
     * @param name an address name to resolve
     * @param service a service name to use
     * @param hints an #addrinfo hints, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns a newly allocated #addrinfo. Free it    with camel_freeaddrinfo() when done with it.
     */
    function getaddrinfo(
        name: string,
        service: string,
        hints?: any | null,
        cancellable?: Gio.Cancellable | null,
    ): any | null;
    function header_address_decode(_in: string, charset: string): HeaderAddress;
    function header_address_fold(_in: string, headerlen: number): string;
    /**
     * TODO: Document me.
     * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
     * @param addr the #CamelHeaderAddress to add
     */
    function header_address_list_append(addrlistp: HeaderAddress[], addr: HeaderAddress): void;
    /**
     * TODO: Document me.
     * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
     * @param addrs a NULL-terminated list of #CamelHeaderAddress to add
     */
    function header_address_list_append_list(addrlistp: HeaderAddress[], addrs: HeaderAddress[]): void;
    /**
     * TODO: Document me.
     * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
     */
    function header_address_list_clear(addrlistp: HeaderAddress[]): void;
    /**
     * TODO: Document me.
     * @param addrlist a NULL-terminated list of #CamelHeaderAddress objects
     */
    function header_address_list_encode(addrlist: HeaderAddress[]): string;
    /**
     * TODO: Document me.
     * @param addrlist a NULL-terminated list of #CamelHeaderAddress objects
     */
    function header_address_list_format(addrlist: HeaderAddress[]): string;
    /**
     * Extract a content-id from `in`.
     * @param _in input string
     * @returns the extracted content-id
     */
    function header_contentid_decode(_in: string): string;
    /**
     * Decodes the rfc822 date string and saves the GMT offset into
     * `tz_offset` if non-NULL.
     * @param str input date string
     * @param tz_offset timezone offset
     * @returns the time_t representation of the date string specified by @str or (time_t) 0 on error. If @tz_offset is non-NULL, the value of the timezone offset will be stored.
     */
    function header_decode_date(str: string, tz_offset: number): number;
    /**
     * Extracts an integer token from `in` and updates the pointer to point
     * to after the end of the integer token (sort of like strtol).
     * @param _in pointer to input string
     * @returns the gint value
     */
    function header_decode_int(_in: string): number;
    /**
     * Decodes rfc2047 encoded-word tokens
     * @param _in input header value string
     * @param default_charset default charset to use if improperly encoded
     * @returns a string containing the UTF-8 version of the decoded header value
     */
    function header_decode_string(_in: string, default_charset: string): string;
    /**
     * Encodes a 'phrase' header according to the rules in rfc2047.
     * @param _in header to encode
     * @returns the encoded 'phrase'
     */
    function header_encode_phrase(_in: number): string;
    /**
     * Encodes a 'text' header according to the rules of rfc2047.
     * @param _in input string
     * @returns the rfc2047 encoded header
     */
    function header_encode_string(_in: number): string;
    function header_fold(_in: string, headerlen: number): string;
    /**
     * Decodes a header which contains rfc2047 encoded-word tokens that
     * may or may not be within a comment.
     * @param _in input header value string
     * @param default_charset default charset to use if improperly encoded
     * @returns a string containing the UTF-8 version of the decoded header value
     */
    function header_format_ctext(_in: string, default_charset: string): string;
    /**
     * Allocates a string buffer containing the rfc822 formatted date
     * string represented by `time` and `tz_offset`.
     * @param date time_t date representation
     * @param tz_offset Timezone offset
     * @returns a valid string representation of the date.
     */
    function header_format_date(date: number, tz_offset: number): string;
    function header_location_decode(_in: string): string;
    function header_mailbox_decode(_in: string, charset: string): HeaderAddress;
    function header_mime_decode(_in: string, maj: number, min: number): void;
    /**
     * Extract a message-id token from `in`.
     * @param _in input string
     * @returns the msg-id
     */
    function header_msgid_decode(_in: string): string;
    /**
     * Either the `domain` is used, or the user's local hostname,
     * in case it's %NULL or empty.
     * @param domain domain to use (like "example.com") for the ID suffix; can be %NULL
     * @returns Unique message ID.
     */
    function header_msgid_generate(domain?: string | null): string;
    function header_newsgroups_decode(_in: string): string[];
    /**
     * Searches `params` for a param named `name` and gets the value.
     * @param params parameters
     * @param name name of param to find
     * @returns the value of the @name param
     */
    function header_param(params: any | null, name: string): string;
    function header_param_list_decode(_in?: string | null): any | null;
    function header_param_list_format(params?: any | null): string;
    function header_param_list_format_append(out: GLib.String, params?: any | null): void;
    /**
     * Free the list of params.
     * @param params a list of params
     */
    function header_param_list_free(params?: any | null): void;
    /**
     * Generate a list of references, from most recent up.
     * @param _in References header value
     * @returns a list of references decoedd from @in
     */
    function header_references_decode(_in: string): string[];
    /**
     * Set a parameter in the list.
     * @param paramsp poinetr to a list of params
     * @param name name of param to set
     * @param value value to set
     * @returns the set param
     */
    function header_set_param(paramsp: any | null, name: string, value: string): any | null;
    /**
     * Gets the first token in the string according to the rules of
     * rfc0822.
     * @param _in input string
     * @returns a new string containing the first token in @in
     */
    function header_token_decode(_in: string): string;
    function header_unfold(_in: string): string;
    /**
     * Searches for a mailing list information among known headers and returns
     * a newly allocated string with its value.
     * @param headers a #CamelNameValueArray with headers
     * @returns The mailing list header, or %NULL, if none is found
     */
    function headers_dup_mailing_list(headers: NameValueArray): string | null;
    /**
     * Converts IDN (Internationalized Domain Name) into ASCII representation.
     * If there's a failure or the `host` has only ASCII letters, then a copy
     * of `host` is returned.
     * @param host Host name, with or without non-ascii letters in utf8
     * @returns Newly allocated string with only ASCII letters   describing the @host or %NULL, when the @host is %NULL. Free the returned   string with g_free() when no longer needed.
     */
    function host_idna_to_ascii(host?: string | null): string | null;
    /**
     * Check whether the `hostname` requires conversion to ASCII. That can
     * be when a character in it can look like an ASCII character, even
     * it being a Unicode letter. This can be used to display host names
     * in a way of invulnerable to IDN homograph attacks.
     * @param hostname a host name
     * @returns %TRUE, when the @hostname should be converted to an ASCII equivalent,    %FALSE, when it can be shown as is.
     */
    function hostname_utils_requires_ascii(hostname: string): boolean;
    function iconv_charset_language(charset: string): string;
    function iconv_charset_name(charset: string): string;
    function iconv_locale_charset(): string;
    function iconv_locale_language(): string;
    function init(certdb_dir: string, nss_init: boolean): number;
    /**
     * Converts the calendar time representation `tt` to a broken-down
     * time representation, stored in `tm,` and provides the offset in
     * seconds from UTC time, stored in `offset`.
     * @param tt the #time_t to convert
     * @param tm the #tm to store the result in
     * @param offset the #gint to store the offset in
     */
    function localtime_with_offset(tt: number, tm: any | null, offset: number): void;
    /**
     * Create an exclusive lock using .lock semantics.
     * All locks are equivalent to write locks (exclusive).
     *
     * The function does nothing and returns success (zero),
     * when dot locking had not been compiled.
     * @param path a path to lock
     * @returns -1 on error, sets @ex appropriately.
     */
    function lock_dot(path: string): number;
    /**
     * Create a lock using fcntl(2).
     *
     * `type` is CAMEL_LOCK_WRITE or CAMEL_LOCK_READ,
     * to create exclusive or shared read locks
     *
     * The function does nothing and returns success (zero),
     * when fcntl locking had not been compiled.
     * @param fd a file descriptor
     * @param type a #CamelLockType
     * @returns -1 on error.
     */
    function lock_fcntl(fd: number, type: LockType): number;
    /**
     * Create a lock using flock(2).
     *
     * `type` is CAMEL_LOCK_WRITE or CAMEL_LOCK_READ,
     * to create exclusive or shared read locks
     *
     * The function does nothing and returns success (zero),
     * when flock locking had not been compiled.
     * @param fd a file descriptor
     * @param type a #CamelLockType
     * @returns -1 on error.
     */
    function lock_flock(fd: number, type: LockType): number;
    /**
     * Attempt to lock a folder, multiple attempts will be made using all
     * locking strategies available.
     * @param path Path to the file to lock (used for .locking only).
     * @param fd Open file descriptor of the right type to lock.
     * @param type Type of lock, CAMEL_LOCK_READ or CAMEL_LOCK_WRITE.
     * @returns -1 on error, @ex will describe the locking system that failed.
     */
    function lock_folder(path: string, fd: number, type: LockType): number;
    function lock_helper_lock(path: string): number;
    function lock_helper_unlock(lockid: number): number;
    /**
     * Like mktime(3), but assumes UTC instead of local timezone.
     * @param tm the #tm to convert to a calendar time representation
     * @returns the calendar time representation of @tm
     */
    function mktime_utc(tm?: any | null): number;
    /**
     * This copies an mbox file from a shared directory with multiple
     * readers and writers into a private (presumably Camel-controlled)
     * directory. Dot locking is used on the source file (but not the
     * destination).
     * @param source source file
     * @param dest destination file
     * @returns Returns -1 on error or 0 on success.
     */
    function movemail(source: string, dest: string): number;
    /**
     * Prints information about currently stored pointers
     * in the pointer tracker. This is called automatically
     * on application exit if camel_pointer_tracker_track() or
     * camel_pointer_tracker_track_with_info() was called.
     *
     * Note: If the library is configured with --enable-backtraces,
     * then also backtraces where the pointer was added is printed
     * in the summary.
     */
    function pointer_tracker_dump(): void;
    /**
     * Adds pointer to the pointer tracker, with associated information,
     * which is printed in summary of pointer tracker printed by
     * camel_pointer_tracker_dump(). For convenience can be used
     * camel_pointer_tracker_track(), which adds place of the caller
     * as `info`. Added pointer should be removed with pair function
     * camel_pointer_tracker_untrack().
     * @param ptr pointer to add to the pointer tracker
     * @param info info to print in tracker summary
     */
    function pointer_tracker_track_with_info(ptr: any | null, info: string): void;
    /**
     * Removes pointer from the pointer tracker. It's an error to try
     * to remove pointer which was not added to the tracker by
     * camel_pointer_tracker_track() or camel_pointer_tracker_track_with_info(),
     * or a pointer which was already removed.
     * @param ptr pointer to remove from the tracker
     */
    function pointer_tracker_untrack(ptr?: any | null): void;
    /**
     * Returns the registered #CamelProvider for `protocol,` loading it
     * from disk if necessary.  If no #CamelProvider can be found for
     * `protocol,` or the provider module fails to load, the function
     * sets `error` and returns %NULL.
     *
     * The returned #CamelProvider is owned by Camel and should not be
     * modified or freed.
     * @param protocol a #CamelProvider protocol name
     * @returns a #CamelProvider for @protocol, or %NULL on error
     */
    function provider_get(protocol: string): Provider;
    /**
     * Initialize the Camel provider system by reading in the .urls
     * files in the provider directory and creating a hash table mapping
     * URLs to module names.
     *
     * A .urls file has the same initial prefix as the shared library it
     * correspond to, and consists of a series of lines containing the URL
     * protocols that that library handles.
     *
     * TODO: This should be pathed?
     * TODO: This should be plugin-d?
     */
    function provider_init(): void;
    /**
     * This returns a list of available providers. If `load` is %TRUE, it will
     * first load in all available providers that haven't yet been loaded.
     *
     * Free the returned list with g_list_free().  The #CamelProvider structs
     * in the list are owned by Camel and should not be modified or freed.
     * @param load whether or not to load in providers that are not already loaded
     * @returns a #GList of #CamelProvider structs
     */
    function provider_list(load: boolean): Provider[];
    /**
     * Loads the provider at `path,` and calls its initialization function,
     * passing `session` as an argument. The provider should then register
     * itself with `session`.
     * @param path the path to a shared library
     * @returns %TRUE on success, %FALSE on failure
     */
    function provider_load(path: string): boolean;
    function provider_module_init(): void;
    /**
     * Add `string` to the pool.
     *
     * The %NULL and empty strings are special cased to constant values.
     *
     * Unreference the returned string with camel_pstring_free().
     * @param string string to add to the string pool
     * @param own whether the string pool will own the memory pointed to by       @string, if @string is not yet in the pool
     * @returns a canonicalized copy of @string
     */
    function pstring_add(string: string | null, own: boolean): string | null;
    /**
     * Returns whether the `string` exists in the string pool.
     *
     * The %NULL and empty strings are special cased to constant values.
     * @param string string to look up in the string pool
     * @returns Whether the @string exists in the string pool
     */
    function pstring_contains(string?: string | null): boolean;
    /**
     * Dumps to stdout memory statistic about the string pool.
     */
    function pstring_dump_stat(): void;
    /**
     * Unreferences a pooled string.  If the string's reference count drops to
     * zero it will be deallocated.  %NULL and the empty string are special cased.
     * @param string string to free
     */
    function pstring_free(string?: string | null): void;
    /**
     * Returns the canonicalized copy of `string` without increasing its
     * reference count in the string pool.  If necessary, `string` is first
     * added to the string pool.
     *
     * The %NULL and empty strings are special cased to constant values.
     * @param string string to fetch from the string pool
     * @returns a canonicalized copy of @string
     */
    function pstring_peek(string?: string | null): string | null;
    /**
     * Create a new pooled string entry for `strings`.  A pooled string
     * is a table where common strings are canonicalized.  They are also
     * reference counted and freed when no longer referenced.
     *
     * The %NULL and empty strings are special cased to constant values.
     *
     * Unreference the returned string with camel_pstring_free().
     * @param string string to copy
     * @returns a canonicalized copy of @string
     */
    function pstring_strdup(string?: string | null): string | null;
    /**
     * Decodes a block of quoted-printable encoded data. Performs a
     * 'decode step' on a chunk of QP encoded data.
     * @param _in input stream
     * @param out output stream
     * @param saveme leftover bits that have not yet been decoded
     * @returns the number of bytes decoded
     */
    function quoted_decode_step(
        _in: Uint8Array | string,
        out: Uint8Array | string,
        saveme: number[],
    ): [number, Uint8Array, number[]];
    /**
     * Quoted-printable encodes a block of text. Call this when finished
     * encoding data with camel_quoted_encode_step() to flush off
     * the last little bit.
     * @param _in input stream
     * @param out output string
     * @param save leftover bits that have not yet been encoded
     * @returns the number of bytes encoded
     */
    function quoted_encode_close(
        _in: Uint8Array | string,
        out: Uint8Array | string,
        save: number[],
    ): [number, Uint8Array, number[]];
    /**
     * Quoted-printable encodes a block of text. Performs an 'encode
     * step', saves left-over state in state and save (initialise to -1 on
     * first invocation).
     * @param _in input stream
     * @param out output string
     * @param save leftover bits that have not yet been encoded
     * @returns the number of bytes encoded
     */
    function quoted_encode_step(
        _in: Uint8Array | string,
        out: Uint8Array | string,
        save: number[],
    ): [number, Uint8Array, number[]];
    /**
     * Cancellable libc read() replacement.
     *
     * Code that intends to be portable to Win32 should call this function
     * only on file descriptors returned from open(), not on sockets.
     * @param fd file descriptor
     * @param buf buffer to fill
     * @param n number of bytes to read into @buf
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns number of bytes read or -1 on fail. On failure, errno will be set appropriately.
     */
    function read(fd: number, buf: string, n: number, cancellable?: Gio.Cancellable | null): number;
    function search_camel_header_soundex(header: string, match: string): boolean;
    function search_get_all_headers_decoded(message: MimeMessage): string;
    function search_get_default_charset_from_headers(headers: NameValueArray): string;
    function search_get_default_charset_from_message(message: MimeMessage): string;
    /**
     * Decodes `header_value,` if needed, either from an address header
     * or the Subject header. Other `header_name` headers are returned
     * as is.
     * @param header_name the header name
     * @param header_value the header value
     * @param default_charset the default charset to use for the decode, or %NULL
     * @returns decoded header value, suitable for text comparison.    Free the returned pointer with g_free() when done with it.
     */
    function search_get_header_decoded(
        header_name: string,
        header_value: string,
        default_charset?: string | null,
    ): string;
    function search_get_headers_decoded(headers: NameValueArray, default_charset?: string | null): string;
    function search_header_is_address(header_name: string): boolean;
    function search_header_match(
        value: string,
        match: string,
        how: _search_match_t,
        type: _search_t,
        default_charset: string,
    ): boolean;
    function search_words_free(words?: any | null): void;
    function search_words_simple(words?: any | null): any | null;
    function search_words_split(_in: number): any | null;
    function service_error_quark(): GLib.Quark;
    function shutdown(): void;
    function store_error_quark(): GLib.Quark;
    /**
     * Returns the last segment of the path string from `info`.
     * @param summary a #CamelStoreSummary
     * @param info a #CamelStoreInfo
     * @returns the last segment of the path string from @info
     */
    function store_info_name(summary: StoreSummary, info: StoreInfo): string;
    /**
     * Returns the path string from `info`.
     * @param summary a #CamelStoreSummary
     * @param info a #CamelStoreInfo
     * @returns the path string from @info
     */
    function store_info_path(summary: StoreSummary, info: StoreInfo): string;
    /**
     * Set a specific string on the `info`.
     * @param summary a #CamelStoreSummary object
     * @param info a #CamelStoreInfo
     * @param type specific string being set
     * @param value string value to set
     */
    function store_info_set_string(summary: StoreSummary, info: StoreInfo, type: number, value: string): void;
    function strcase_equal(a?: any | null, b?: any | null): number;
    function strcase_hash(v?: any | null): number;
    function strdown(str: string): string;
    function string_is_all_ascii(str?: string | null): boolean;
    function strstrcase(haystack: string, needle: string): string;
    function system_flag(name: string): MessageFlags;
    /**
     * Find the state of the flag `name` in `flags`.
     * @param flags bitwise system flags
     * @param name name of the flag to check for
     * @returns %TRUE if the named flag is set or %FALSE otherwise
     */
    function system_flag_get(flags: MessageFlags, name: string): boolean;
    /**
     * Convert `in` from plain text into HTML.
     * @param _in input text
     * @param flags bitwise flags defining the html conversion behaviour
     * @param color color to use when syntax highlighting
     * @returns a newly allocated string containing the HTMLified version of @in
     */
    function text_to_html(_in: string, flags: MimeFilterToHTMLFlags, color: number): string;
    /**
     * Applies the given time `value` in unit `unit` to the `src_time`.
     * Use negative value to subtract it. The time part is rounded
     * to the beginning of the day.
     * @param src_time a time_t to apply the value to, or -1 to use the current time
     * @param unit a #CamelTimeUnit
     * @param value a value to apply
     * @returns @src_time modified by the given parameters as date, with    the time part being beginning of the day.
     */
    function time_value_apply(src_time: number, unit: TimeUnit, value: number): number;
    function transfer_encoding_from_string(string: string): TransferEncoding;
    function transfer_encoding_to_string(encoding: TransferEncoding): string;
    /**
     * Convert a ucs2 string into a UTF-8 one. The ucs2 string is treated
     * as network byte ordered, and terminated with a 16-bit %NULL.
     * @param ptr a ucs2 string to convert
     * @returns The converted string. Free it with g_free(),    when no longer needed.
     */
    function ucs2_utf8(ptr: string): string;
    /**
     * Frees the array of UIDs.
     * @param uids an array returned from camel_uid_cache_get_new_uids()
     */
    function uid_cache_free_uids(uids: string[]): void;
    /**
     * Attempt to unlock a .lock lock.
     *
     * The function does nothing, when dot locking had not been compiled.
     * @param path a path to unlock
     */
    function unlock_dot(path: string): void;
    /**
     * Unlock an fcntl lock.
     *
     * The function does nothing, when fcntl locking had not been compiled.
     * @param fd a file descriptor
     */
    function unlock_fcntl(fd: number): void;
    /**
     * Unlock an flock lock.
     *
     * The function does nothing, when flock locking had not been compiled.
     * @param fd a file descriptor
     */
    function unlock_flock(fd: number): void;
    /**
     * Free a lock on a folder.
     * @param path Filename of folder.
     * @param fd Open descrptor on which locks were placed.
     */
    function unlock_folder(path: string, fd: number): void;
    function url_addrspec_end(_in: string, pos: string, inend: string, match: UrlMatch): boolean;
    function url_addrspec_start(_in: string, pos: string, inend: string, match: UrlMatch): boolean;
    /**
     * &percnt;-decodes the passed-in URL *in place*. The decoded version is
     * never longer than the encoded version, so there does not need to
     * be any additional space at the end of the string.
     * @param part a URL part
     */
    function url_decode(part: string): void;
    function url_decode_path(path: string): string;
    /**
     * This &percnt;-encodes the given URL part and returns the escaped version
     * in allocated memory, which the caller must free when it is done.
     * @param part a URL part
     * @param escape_extra additional characters beyond " \"%#<>{}|\^[]`" to escape (or %NULL)
     * @returns the encoded string
     */
    function url_encode(part: string, escape_extra?: string | null): string;
    function url_file_end(_in: string, pos: string, inend: string, match: UrlMatch): boolean;
    function url_file_start(_in: string, pos: string, inend: string, match: UrlMatch): boolean;
    function url_web_end(_in: string, pos: string, inend: string, match: UrlMatch): boolean;
    function url_web_start(_in: string, pos: string, inend: string, match: UrlMatch): boolean;
    function ustrstrcase(haystack: string, needle: string): string;
    /**
     * Convert a modified UTF-7 string to UTF-8.  If the UTF-7 string
     * contains 8 bit characters, they are treated as iso-8859-1.
     *
     * The IMAP rules [rfc2060] are used in the UTF-7 encoding.
     * @param ptr a UTF-7 string to convert
     * @returns The converted string. Free it with g_free(),    when no longer needed.
     */
    function utf7_utf8(ptr: string): string;
    /**
     * Get a Unicode character from a UTF-8 stream.  `ptr` will be advanced
     * to the next character position.  Invalid utf8 characters will be
     * silently skipped. The `ptr` should point to a NUL terminated array.
     * @param ptr a pointer to read the character from
     * @returns The next Unicode character. The @ptr will be advanced to    the next character always.
     */
    function utf8_getc(ptr: number): [number, number];
    /**
     * Get the next UTF-8 gchar at `ptr,` and return it, advancing `ptr` to
     * the next character. If `end` is reached before a full UTF-8
     * character can be read, then the invalid Unicode gchar 0xffff is
     * returned as a sentinel (Unicode 3.1, section 2.7), and `ptr` is not
     * advanced.
     * @param ptr a pointer to read the character from
     * @param end upper limit for the read, must not be %NULL
     * @returns The next UTF-8 char, or 0xffff.
     */
    function utf8_getc_limit(ptr: number, end: number): [number, number];
    /**
     * Ensures the returned text will be valid UTF-8 string, with incorrect letters
     * changed to question marks.
     * @param text a text to make valid
     * @returns Valid UTF-8 string, with replaced incorrect letters.    Free it with g_free(), when no longer needed.
     */
    function utf8_make_valid(text: string): string;
    /**
     * Ensures the returned text will be valid UTF-8 string, with incorrect letters
     * changed to question marks.
     * @param text a text to make valid
     * @param text_len length of the @text, or -1 if NUL-terminated
     * @returns Valid UTF-8 string, with replaced incorrect letters.    Free it with g_free(), when no longer needed.
     */
    function utf8_make_valid_len(text: string, text_len: number): string;
    /**
     * Output a 32 bit unicode character as UTF-8 octets.  At most 4 octets will
     * be written to `ptr`. The `ptr` will be advanced to the next character position.
     * @param ptr pointer to write the character to
     * @param c a Unicode character to write
     */
    function utf8_putc(ptr: number, c: number): number;
    /**
     * Convert a UTF-8 string into a ucs2 one. The ucs string will be in
     * network byte order, and terminated with a 16-bit %NULL.
     * @param ptr a UTF-8 string to convert
     * @returns The converted string. Free it with g_free(),    when no longer needed.
     */
    function utf8_ucs2(ptr: string): string;
    /**
     * Convert a UTF-8 string to a modified UTF-7 format.
     *
     * The IMAP rules [rfc2060] are used in the UTF-7 encoding.
     * @param ptr a UTF-8 string to convert
     * @returns The converted string. Free it with g_free(),    when no longer needed.
     */
    function utf8_utf7(ptr: string): string;
    /**
     * Reads a numeric data from the `bdata_ptr` and moves the `bdata_ptr`
     * after that number. If the number cannot be read, then the `default_value`
     * is returned instead and the `bdata_ptr` is left unchanged. The number
     * might be previously stored with the camel_util_bdata_put_number().
     * @param bdata_ptr a backend specific data (bdata) pointer
     * @param default_value a value to return, when no data can be read
     * @returns The read number, or the @default_value, if the @bdata_ptr doesn't    point to a number.
     */
    function util_bdata_get_number(bdata_ptr: string, default_value: number): number;
    /**
     * Reads a string data from the `bdata_ptr` and moves the `bdata_ptr`
     * after that string. If the string cannot be read, then the `default_value`
     * is returned instead and the `bdata_ptr` is left unchanged. The string
     * might be previously stored with the camel_util_bdata_put_string().
     * @param bdata_ptr a backend specific data (bdata) pointer
     * @param default_value a value to return, when no data can be read
     * @returns Newly allocated string, which was read, or    dupped the @default_value, if the @bdata_ptr doesn't point to a string.    Free returned pointer with g_free() when done with it.
     */
    function util_bdata_get_string(bdata_ptr: string, default_value: string): string;
    /**
     * Puts the number `value` at the end of the `bdata_str`. In case the `bdata_str`
     * is not empty a space is added before the numeric `value`. The stored value
     * can be read back with the camel_util_bdata_get_number().
     * @param bdata_str a #GString to store a backend specific data (bdata)
     * @param value a value to store
     */
    function util_bdata_put_number(bdata_str: GLib.String, value: number): void;
    /**
     * Puts the string `value` at the end of the `bdata_str`. In case the `bdata_str`
     * is not empty a space is added before the string `value`. The stored value
     * can be read back with the camel_util_bdata_get_string().
     *
     * The strings are encoded as "length-value", quotes for clarity only.
     * @param bdata_str a #GString to store a backend specific data (bdata)
     * @param value a value to store
     */
    function util_bdata_put_string(bdata_str: GLib.String, value: string): void;
    /**
     * Decode the values previously encoded by camel_util_encode_user_header_setting().
     * The `out_header_name` points to the `setting_value,` thus it's valid as long
     * as the `setting_value` is valid and unchanged.
     *
     * The `out_header_name` can result in %NULL when the `setting_value`
     * contains invalid data.
     *
     * The `out_display_name` can result in %NULL when the `setting_value`
     * does not contain the display name. In such case the header name can
     * be used as the display name.
     * @param setting_value the value to decode
     */
    function util_decode_user_header_setting(setting_value: string): [string, string];
    /**
     * Encode the optional `display_name` and the `header_name` to a value suitable
     * for GSettings schema org.gnome.evolution-data-server and key camel-message-info-user-headers.
     *
     * Free the returned string with g_free(), when no longer needed.
     * @param display_name display name for the header name, or %NULL
     * @param header_name the header name
     * @returns a newly allocated string with encoded @display_name    and @header_name
     */
    function util_encode_user_header_setting(display_name: string | null, header_name: string): string;
    /**
     * Fill `info` 's user-headers with the user-defined headers from
     * the `headers` array.
     * @param info a #CamelMessageInfo
     * @param headers a #CamelNameValueArray with the headers to read from
     * @returns Whether the @info's user headers changed
     */
    function util_fill_message_info_user_headers(info: MessageInfo, headers: NameValueArray): boolean;
    /**
     * The `main_path` is a directory, which will be always used. It
     * should have as its prefix the `replace_prefix,` otherwise
     * the function returns only the `main_path` in the paths array.
     *
     * When there's exported an environment variable EDS_EXTRA_PREFIXES,
     * it is used as a list of alternative prefixes where to look for
     * the `main_path` (rest after the `replace_prefix)`.
     *
     * When the `with_modules_dir` is %TRUE, there's also added
     * g_get_user_data_dir() + "evolution/modules/", aka
     * ~/.local/share/evolution/modules/, into the resulting array.
     * @param main_path the main path to work with
     * @param replace_prefix path prefix to replace
     * @param with_modules_dir whether to add also the modules directory
     * @returns a %GPtrArray    with paths to use, including the @main_path. Free it with    g_ptr_array_unref(), when no longer needed.
     */
    function util_get_directory_variants(
        main_path: string,
        replace_prefix: string,
        with_modules_dir: boolean,
    ): string[];
    /**
     * Checks whether the domain in the `email_address` requires
     * conversion to ASCII and if it does it also converts it.
     * When the `do_format` is %TRUE, the output string is formatted
     * for display, otherwise it's encoded for use in the message
     * headers. A %NULL is returned when no conversion was needed.
     * @param email_address an email address as string
     * @param do_format what format will be returned
     * @returns the @email_address with only ASCII letters,    if such conversion is needed or %NULL, when no conversion was    required. See: camel_hostname_utils_requires_ascii(), camel_internet_address_sanitize_ascii_domain(),    camel_utils_sanitize_ascii_domain_in_url_str()
     */
    function utils_sanitize_ascii_domain_in_address(email_address: string | null, do_format: boolean): string | null;
    /**
     * Checks whether the host name of the `url` requires conversion
     * to ASCII and converts it, if needed.
     * @param url a #CamelURL
     * @returns %TRUE, when the conversion was required. See: camel_hostname_utils_requires_ascii(), camel_utils_sanitize_ascii_domain_in_url_str()
     */
    function utils_sanitize_ascii_domain_in_url(url: URL): boolean;
    /**
     * Checks whether the host name of the `url_str` requires conversion
     * to ASCII and converts it if needed. Returns %NULL, when no conversion
     * was required.
     * @param url_str a URL as string
     * @returns converted @url_str to ASCII host name, or %NULL, when    no conversion was needed. See: camel_hostname_utils_requires_ascii(), camel_utils_sanitize_ascii_domain_in_url()
     */
    function utils_sanitize_ascii_domain_in_url_str(url_str?: string | null): string | null;
    /**
     * Uudecodes a chunk of data. Performs a 'decode step' on a chunk of
     * uuencoded data. Assumes the "begin mode filename" line has
     * been stripped off.
     * @param _in input stream
     * @param out output stream
     * @param save leftover bits that have not yet been decoded
     * @returns the number of bytes decoded
     */
    function uudecode_step(
        _in: Uint8Array | string,
        out: Uint8Array | string,
        save: number[],
    ): [number, Uint8Array, number[]];
    /**
     * Uuencodes a chunk of data. Call this when finished encoding data
     * with camel_uuencode_step() to flush off the last little bit.
     * @param _in input stream
     * @param out output stream
     * @param uubuf temporary buffer of 60 bytes
     * @param save leftover bits that have not yet been encoded
     * @returns the number of bytes encoded
     */
    function uuencode_close(
        _in: Uint8Array | string,
        out: Uint8Array | string,
        uubuf: Uint8Array | string,
        save: number[],
    ): [number, Uint8Array, Uint8Array, number[]];
    /**
     * Uuencodes a chunk of data. Performs an 'encode step', only encodes
     * blocks of 45 characters to the output at a time, saves left-over
     * state in `uubuf,` `state` and `save` (initialize to 0 on first
     * invocation).
     * @param _in input stream
     * @param out output stream
     * @param uubuf temporary buffer of 60 bytes
     * @param save leftover bits that have not yet been encoded
     * @returns the number of bytes encoded
     */
    function uuencode_step(
        _in: Uint8Array | string,
        out: Uint8Array | string,
        uubuf: Uint8Array | string,
        save: number[],
    ): [number, Uint8Array, Uint8Array, number[]];
    /**
     * Cancellable libc write() replacement.
     *
     * Code that intends to be portable to Win32 should call this function
     * only on file descriptors returned from open(), not on sockets.
     * @param fd file descriptor
     * @param buf buffer to write
     * @param n number of bytes of @buf to write
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns number of bytes written or -1 on fail. On failure, errno will be set appropriately.
     */
    function write(fd: number, buf: string, n: number, cancellable?: Gio.Cancellable | null): number;
    /**
     * Performs a 'decode step' on a chunk of yEncoded data of length
     * `inlen` pointed to by `in` and writes to `out`. Assumes the =ybegin
     * and =ypart lines have already been stripped off.
     *
     * To get the crc32 value of the part, use #CAMEL_MIME_YENCODE_CRC_FINAL
     * (`pcrc)`. If there are more parts, you should reuse `crc` without
     * re-initializing. Once all parts have been decoded, you may get the
     * combined crc32 value of all the parts using #CAMEL_MIME_YENCODE_CRC_FINAL
     * (`crc)`.
     * @param _in input buffer
     * @returns the number of bytes decoded
     */
    function ydecode_step(_in: Uint8Array | string): [number, Uint8Array, number, number, number];
    /**
     * Call this function when finished encoding data with
     * camel_yencode_step() to flush off the remaining state.
     *
     * #CAMEL_MIME_YENCODE_CRC_FINAL (`pcrc)` will give you the crc32 of the
     * encoded "part". If there are more "parts" to encode, you should
     * re-use `crc` when encoding the next "parts" and then use
     * #CAMEL_MIME_YENCODE_CRC_FINAL (`crc)` to get the combined crc32 value of
     * all the parts.
     * @param _in input buffer
     * @returns the number of bytes encoded.
     */
    function yencode_close(_in: Uint8Array | string): [number, Uint8Array, number, number, number];
    /**
     * Performs an yEncode 'encode step' on a chunk of raw data of length
     * `inlen` pointed to by `in` and writes to `out`.
     *
     * `state` should be initialized to #CAMEL_MIME_YENCODE_STATE_INIT before
     * beginning making the first call to this function. Subsequent calls
     * should reuse `state`.
     *
     * Along the same lines, `pcrc` and `crc` should be initialized to
     * #CAMEL_MIME_YENCODE_CRC_INIT before using.
     * @param _in input buffer
     * @returns the number of bytes encoded
     */
    function yencode_step(_in: Uint8Array | string): [number, Uint8Array, number, number, number];
    interface CipherCloneFunc {
        (value?: any | null): any | null;
    }
    interface CopyFunc {
        (object?: any | null): any | null;
    }
    interface DBCollate {
        (enc: any | null, length1: number, data1: any | null, length2: number, data2?: any | null): number;
    }
    interface DBSelectCB {
        (colvalues: string[], colnames: string[]): number;
    }
    interface DataCacheRemoveFunc {
        (cdc: DataCache, filename: string): boolean;
    }
    interface FilterPlaySoundFunc {
        (driver: FilterDriver, filename: string): void;
    }
    interface FilterShellFunc {
        (driver: FilterDriver, argc: number, argv: string): void;
    }
    interface FilterStatusFunc {
        (driver: FilterDriver, status: any | null, pc: number, desc: string): void;
    }
    interface FilterSystemBeepFunc {
        (driver: FilterDriver): void;
    }
    interface ForeachInfoData {
        (mi_data: VeeMessageInfoData, subfolder: Folder): void;
    }
    interface ForeachPartFunc {
        (message: MimeMessage, part: MimePart, parent_part?: MimePart | null): boolean;
    }
    interface IndexNorm {
        (index: Index, word: string): string;
    }
    interface MessageContentInfoTraverseCallback {
        (ci: MessageContentInfo, depth: number): boolean;
    }
    interface ProviderAutoDetectFunc {
        (url: URL): number;
    }
    interface SessionCallback {
        (session: Session, cancellable?: Gio.Cancellable | null): void;
    }
    interface TextIndexFunc {
        (idx: TextIndex, word: string, buffer: string): void;
    }
    interface UrlScanFunc {
        (_in: string, pos: string, inend: string, match: UrlMatch): boolean;
    }
    enum BestencEncoding {
        '7BIT',
        '8BIT',
        BINARY,
        TEXT,
    }
    enum BestencRequired {
        GET_ENCODING,
        GET_CHARSET,
        LF_IS_CRLF,
        NO_FROM,
    }
    enum BlockFileFlags {
        BLOCK_FILE_SYNC,
    }
    enum BlockFlags {
        DIRTY,
        DETACHED,
    }
    enum FolderFlags {
        HAS_SUMMARY_CAPABILITY,
        FILTER_RECENT,
        HAS_BEEN_DELETED,
        IS_TRASH,
        IS_JUNK,
        FILTER_JUNK,
    }
    /**
     * These flags are abstractions.  It's up to the CamelProvider to give
     * them suitable interpretations.  Use #CAMEL_FOLDER_TYPE_MASK to isolate
     * the folder's type.
     */
    enum FolderInfoFlags {
        /**
         * The folder cannot contain messages.
         */
        NOSELECT,
        /**
         * The folder cannot have child folders.
         */
        NOINFERIORS,
        /**
         * The folder has children (not yet fully implemented).
         */
        CHILDREN,
        /**
         * The folder does not have children (not yet fully implemented).
         */
        NOCHILDREN,
        /**
         * The folder is subscribed.
         */
        SUBSCRIBED,
        /**
         * The folder is virtual.  Messages cannot be copied or moved to
         *    virtual folders since they are only queries of other folders.
         */
        VIRTUAL,
        /**
         * The folder is a built-in "system" folder.  System folders
         *    cannot be renamed or deleted.
         */
        SYSTEM,
        /**
         * The folder is a virtual trash folder.  It cannot be copied to,
         *    and can only be moved to if in an existing folder.
         */
        VTRASH,
        /**
         * A folder being shared by someone else.
         */
        SHARED_TO_ME,
        /**
         * A folder being shared by the user.
         */
        SHARED_BY_ME,
        /**
         * The folder is a normal folder.
         */
        TYPE_NORMAL,
        /**
         * The folder is an inbox folder.
         */
        TYPE_INBOX,
        /**
         * The folder is an outbox folder.
         */
        TYPE_OUTBOX,
        /**
         * The folder shows deleted messages.
         */
        TYPE_TRASH,
        /**
         * The folder shows junk messages.
         */
        TYPE_JUNK,
        /**
         * The folder shows sent messages.
         */
        TYPE_SENT,
        /**
         * The folder contains contacts, instead of mail messages.
         */
        TYPE_CONTACTS,
        /**
         * The folder contains calendar events, instead of mail messages.
         */
        TYPE_EVENTS,
        /**
         * The folder contains memos, instead of mail messages.
         */
        TYPE_MEMOS,
        /**
         * The folder contains tasks, instead of mail messages.
         */
        TYPE_TASKS,
        /**
         * This folder contains all the messages. Used by RFC 6154.
         */
        TYPE_ALL,
        /**
         * This folder contains archived messages. Used by RFC 6154.
         */
        TYPE_ARCHIVE,
        /**
         * This folder contains drafts. Used by RFC 6154.
         */
        TYPE_DRAFTS,
        /**
         * The folder is read only.
         */
        READONLY,
        /**
         * The folder is write only.
         */
        WRITEONLY,
        /**
         * This folder contains flagged messages. Some clients call this "starred". Used by RFC 6154.
         */
        FLAGGED,
        /**
         * The last define bit of the flags. The #CamelProvider can use this and
         *    upper bits to store its own flags.
         */
        FLAGS_LAST,
    }
    enum FolderSummaryFlags {
        /**
         * There are changes in summary, which should be saved.
         */
        DIRTY,
        /**
         * Summary with this flag doesn't use DB for storing its content,
         *    it is always created on the fly.
         */
        IN_MEMORY_ONLY,
    }
    enum MessageFlags {
        ANSWERED,
        DELETED,
        DRAFT,
        FLAGGED,
        SEEN,
        ATTACHMENTS,
        ANSWERED_ALL,
        JUNK,
        SECURE,
        NOTJUNK,
        FORWARDED,
        FOLDER_FLAGGED,
        JUNK_LEARN,
        USER,
    }
    enum MimeFilterCanonFlags {
        CRLF,
        FROM,
        STRIP,
    }
    enum MimeFilterEnrichedFlags {
        NONE,
        IS_RICHTEXT,
    }
    /**
     * Flags for converting text/plain content into text/html.
     */
    enum MimeFilterToHTMLFlags {
        /**
         * Enclose the content in &lt;pre&gt; ... &lt;/pre&gt; tags.
         *     Cannot be used together with %CAMEL_MIME_FILTER_TOHTML_DIV.
         */
        PRE,
        /**
         * Convert newline characters to &lt;br&gt; tags.
         */
        CONVERT_NL,
        /**
         * Convert space and tab characters to a non-breaking space (&amp;nbsp;).
         */
        CONVERT_SPACES,
        /**
         * Convert recognized URLs to &lt;a href="foo"&gt;foo&lt;/a&gt;.
         */
        CONVERT_URLS,
        /**
         * Color quoted lines (lines beginning with '&gt;').
         */
        MARK_CITATION,
        /**
         * Convert mailto: URLs to &lt;a href="mailto:foo"&gt;mailto:foo&lt;/a&gt;.
         */
        CONVERT_ADDRESSES,
        /**
         * Convert 8-bit characters to escaped hexdecimal (&amp;#nnn;).
         */
        ESCAPE_8BIT,
        /**
         * Prefix each line with "&gt; ".
         */
        CITE,
        /**
         * This flag is not used by #CamelMimeFilterToHTML.
         */
        PRESERVE_8BIT,
        /**
         * This flag is not used by #CamelMimeFilterToHTML.
         */
        FORMAT_FLOWED,
        /**
         * Group lines beginning with one or more '&gt;' characters in
         *     &lt;blockquote type="cite"&gt; ... &lt;/blockquote&gt; tags. The tags
         *     are nested according to the number of '&gt;' characters.
         */
        QUOTE_CITATION,
        /**
         * Enclose the paragraphs in &lt;div&gt; ... &lt;/div&gt; tags.
         *     Cannot be used together with %CAMEL_MIME_FILTER_TOHTML_PRE.
         */
        DIV,
        /**
         * Set in combination with %CAMEL_MIME_FILTER_TOHTML_CONVERT_SPACES,
         *     to keep tab characters. If not set, converts them into the spaces.
         */
        PRESERVE_TABS,
    }
    /**
     * These flags extend #GParamFlags.  Most of the time you will use them
     * in conjunction with g_object_class_install_property().
     */
    enum ParamFlags {
        /**
         * The parameter is persistent, which means its value is saved to
         *     #CamelObject:state-filename during camel_object_state_write(),
         *     and restored during camel_object_state_read().
         */
        PARAM_PERSISTENT,
    }
    enum ProviderFlags {
        /**
         * Provider works with remote data.
         */
        IS_REMOTE,
        /**
         * Provider can be used as a backend for local folder tree folders.
         *   (Not just the opposite of #CAMEL_PROVIDER_IS_REMOTE.)
         */
        IS_LOCAL,
        /**
         * Provider appears in the folder tree but is not created by the
         *   mail component.
         */
        IS_EXTERNAL,
        /**
         * Mail arrives there, so it should be offered as an option in the
         *   mail config dialog.
         */
        IS_SOURCE,
        /**
         * Mail is stored there.  It will appear in the folder tree.
         */
        IS_STORAGE,
        /**
         * Provider supports SSL/TLS connections.
         */
        SUPPORTS_SSL,
        /**
         * Provider configuration first needs the license to be accepted.
         *   (No longer used.)
         */
        HAS_LICENSE,
        /**
         * Provider requests to not use the Sent folder when sending with it.
         */
        DISABLE_SENT_FOLDER,
        /**
         * Provider may use a real trash folder instead of a virtual folder.
         */
        ALLOW_REAL_TRASH_FOLDER,
        /**
         * Provider may use a real junk folder instead of a virtual folder.
         */
        ALLOW_REAL_JUNK_FOLDER,
        /**
         * Download limited set of emails instead of operating on full cache.
         */
        SUPPORTS_MOBILE_DEVICES,
        /**
         * Support to fetch messages in batch.
         */
        SUPPORTS_BATCH_FETCH,
        /**
         * Support to remove oldest downloaded messages to conserve space.
         */
        SUPPORTS_PURGE_MESSAGE_CACHE,
    }
    enum ProviderURLFlags {
        ALLOW_USER,
        ALLOW_AUTH,
        ALLOW_PASSWORD,
        ALLOW_HOST,
        ALLOW_PORT,
        ALLOW_PATH,
        NEED_USER,
        NEED_AUTH,
        NEED_PASSWORD,
        NEED_HOST,
        NEED_PORT,
        NEED_PATH,
        NEED_PATH_DIR,
        HIDDEN_USER,
        HIDDEN_AUTH,
        HIDDEN_PASSWORD,
        HIDDEN_HOST,
        HIDDEN_PORT,
        HIDDEN_PATH,
        FRAGMENT_IS_PATH,
        PATH_IS_ABSOLUTE,
    }
    /**
     * Flags used to camel_session_get_recipient_certificates_sync() call.
     */
    enum RecipientCertificateFlags {
        /**
         * Retrieve S/MIME certificates; this cannot be used
         *    together with `CAMEL_RECIPIENT_CERTIFICATE_PGP`
         */
        SMIME,
        /**
         * Retrieve PGP keys; this cannot be used
         *    together with `CAMEL_RECIPIENT_CERTIFICATE_SMIME`.
         */
        PGP,
    }
    enum SMIMEDescribe {
        SIGNED,
        ENCRYPTED,
        CERTS,
        CRLS,
    }
    enum StoreFlags {
        VTRASH,
        VJUNK,
        PROXY,
        IS_MIGRATING,
        REAL_JUNK_FOLDER,
        CAN_EDIT_FOLDERS,
        USE_CACHE_DIR,
        CAN_DELETE_FOLDERS_AT_ONCE,
        SUPPORTS_INITIAL_SETUP,
        IS_BUILTIN,
    }
    /**
     * Open mode for folder.
     */
    enum StoreGetFolderFlags {
        /**
         * no flags
         */
        NONE,
        /**
         * create the folder
         */
        CREATE,
        /**
         * deprecated, not honored
         */
        EXCL,
        /**
         * save the body index
         */
        BODY_INDEX,
        /**
         * a private folder that should not show up in
         *  unmatched, folder info's, etc.
         */
        PRIVATE,
    }
    enum StoreGetFolderInfoFlags {
        FAST,
        RECURSIVE,
        SUBSCRIBED,
        /**
         * Do not include virtual trash or junk folders.
         */
        NO_VIRTUAL,
        /**
         * Fetch only the subscription list. Clients should use this
         *   flag for requesting the list of folders available for
         *   subscription. Used in Exchange / IMAP connectors for public
         *   folder fetching.
         */
        SUBSCRIPTION_LIST,
        /**
         * Treat this call as a request to refresh the folder summary;
         *   for remote accounts it can be to re-fetch fresh folder
         *   content from the server and update the local cache.
         */
        REFRESH,
    }
    enum StoreInfoFlags {
        NOSELECT,
        NOINFERIORS,
        CHILDREN,
        NOCHILDREN,
        SUBSCRIBED,
        VIRTUAL,
        SYSTEM,
        VTRASH,
        SHARED_TO_ME,
        SHARED_BY_ME,
        TYPE_NORMAL,
        TYPE_INBOX,
        TYPE_OUTBOX,
        TYPE_TRASH,
        TYPE_JUNK,
        TYPE_SENT,
        TYPE_CONTACTS,
        TYPE_EVENTS,
        TYPE_MEMOS,
        TYPE_TASKS,
        TYPE_ALL,
        TYPE_ARCHIVE,
        TYPE_DRAFTS,
        READONLY,
        WRITEONLY,
        FLAGGED,
    }
    enum StorePermissionFlags {
        READ,
        WRITE,
    }
    enum URLFlags {
        PARAMS,
        AUTH,
    }
    enum UUDecodeState {
        INIT,
        BEGIN,
        END,
    }
    enum _search_flags_t {
        START,
        END,
        REGEX,
        ICASE,
        NEWLINE,
    }
    module Address {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Address extends GObject.Object {
        static $gtype: GObject.GType<Address>;

        // Constructors of Camel.Address

        constructor(properties?: Partial<Address.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Address;

        // Own virtual methods of Camel.Address

        /**
         * Concatenate one address onto another. The addresses must
         * be of the same type.
         * @param source source #CamelAddress object
         */
        vfunc_cat(source: Address): number;
        /**
         * Construct a new address from a raw address field.
         * @param raw raw address description
         */
        vfunc_decode(raw: string): number;
        /**
         * Encode an address in a format suitable for a raw header.
         */
        vfunc_encode(): string;
        /**
         * Format an address in a format suitable for display.
         */
        vfunc_format(): string;
        /**
         * Get the number of addresses stored in the address `addr`.
         */
        vfunc_length(): number;
        /**
         * Remove an address by index, or all addresses.
         * @param index The address to remove, use -1 to remove all address.
         */
        vfunc_remove(index: number): void;
        /**
         * Attempt to convert a previously formatted and/or edited
         * address back into internal form.
         * @param raw raw address description
         */
        vfunc_unformat(raw: string): number;

        // Own methods of Camel.Address

        /**
         * Concatenate one address onto another. The addresses must
         * be of the same type.
         * @param source source #CamelAddress object
         * @returns the number of addresses concatenated
         */
        cat(source: Address): number;
        /**
         * Copy the contents of one address into another.
         * @param source source #CamelAddress object
         * @returns the number of addresses copied
         */
        copy(source: Address): number;
        /**
         * Construct a new address from a raw address field.
         * @param raw raw address description
         * @returns the number of addresses parsed or -1 on fail
         */
        decode(raw: string): number;
        /**
         * Encode an address in a format suitable for a raw header.
         * @returns the encoded address
         */
        encode(): string;
        /**
         * Format an address in a format suitable for display.
         * @returns a newly allocated string containing the formatted addresses
         */
        format(): string;
        /**
         * Get the number of addresses stored in the address `addr`.
         * @returns the number of addresses contained in @addr
         */
        length(): number;
        /**
         * Clone an existing address type.
         * @returns the cloned address
         */
        new_clone(): Address;
        /**
         * Remove an address by index, or all addresses.
         * @param index The address to remove, use -1 to remove all address.
         */
        remove(index: number): void;
        /**
         * Attempt to convert a previously formatted and/or edited
         * address back into internal form.
         * @param raw raw address description
         * @returns the number of addresses parsed or -1 on fail
         */
        unformat(raw: string): number;
    }

    module BlockFile {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class BlockFile extends GObject.Object {
        static $gtype: GObject.GType<BlockFile>;

        // Constructors of Camel.BlockFile

        constructor(properties?: Partial<BlockFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, flags: number, version: string, block_size: number): BlockFile;

        // Own virtual methods of Camel.BlockFile

        vfunc_init_root(): number;
        vfunc_validate_root(): number;

        // Own methods of Camel.BlockFile

        /**
         * Reattach a block that has been detached.
         * @param bl a #CamelBlock
         */
        attach_block(bl: Block): void;
        /**
         * Deletes existing block file.
         * @returns 0 on success, -1 on error.
         */
        ['delete'](): number;
        /**
         * Detatch a block from the block file's cache.  The block should
         * be unref'd or attached when finished with.  The block file will
         * perform no writes of this block or flushing of it if the cache
         * fills.
         * @param bl a #CamelBlock
         */
        detach_block(bl: Block): void;
        free_block(id: _block_t): number;
        get_cache_limit(): number;
        get_root(): BlockRoot;
        get_root_block(): Block;
        /**
         * Renames existing block file to a new `path`.
         * @param path path with filename to rename to
         * @returns 0 on success, -1 on error; errno is set on failure
         */
        rename(path: string): number;
        /**
         * Sets a new block cache limit for `bs`.
         * @param block_cache_limit a new block cache limit to set
         */
        set_cache_limit(block_cache_limit: number): void;
        /**
         * Sync all dirty blocks to disk, including the root block.
         * @returns -1 on io error.
         */
        sync(): number;
        /**
         * Flush a block to disk immediately.  The block will only
         * be flushed to disk if it is marked as dirty (touched).
         * @param bl a #CamelBlock
         * @returns -1 on io error.
         */
        sync_block(bl: Block): number;
        /**
         * Mark a block as dirty.  The block will be written to disk if
         * it ever expires from the cache.
         * @param bl a #CamelBlock
         */
        touch_block(bl: Block): void;
        /**
         * Mark a block as unused.  If a block is used it will not be
         * written to disk, or flushed from memory.
         *
         * If a block is detatched and this is the last reference, the
         * block will be freed.
         * @param bl a #CamelBlock
         */
        unref_block(bl: Block): void;
    }

    module CertDB {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class CertDB extends GObject.Object {
        static $gtype: GObject.GType<CertDB>;

        // Constructors of Camel.CertDB

        constructor(properties?: Partial<CertDB.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CertDB;

        // Own static methods of Camel.CertDB

        /**
         * FIXME Document me!
         */
        static get_default(): CertDB;

        // Own virtual methods of Camel.CertDB

        vfunc_cert_load(istream?: any | null): Cert;
        vfunc_cert_save(cert: Cert, ostream?: any | null): number;
        vfunc_header_load(istream?: any | null): number;
        vfunc_header_save(ostream?: any | null): number;

        // Own methods of Camel.CertDB

        clear(): void;
        get_host(hostname: string, fingerprint: string): Cert | null;
        /**
         * Gathers a list of known certificates. Each certificate in the returned #GSList
         * is referenced, thus unref it with camel_cert_unref() when done with it, the same
         * as free the list itself.
         * @returns Newly allocated list of   referenced CamelCert-s, which are stored in the @certdb.
         */
        list_certs(): Cert[];
        load(): number;
        /**
         * Puts a certificate to the database. In case there exists a certificate
         * with the same hostname and fingerprint, then it is replaced. This adds
         * its own reference on the `cert`.
         * @param cert a #CamelCert
         */
        put(cert: Cert): void;
        /**
         * Removes a certificate identified by the `hostname` and `fingerprint`.
         * @param hostname a host name of a certificate
         * @param fingerprint a fingerprint of a certificate
         */
        remove_host(hostname: string, fingerprint: string): void;
        save(): number;
        set_default(): void;
        set_filename(filename: string): void;
        touch(): void;
    }

    module CipherContext {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            session: Session;
        }
    }

    class CipherContext extends GObject.Object {
        static $gtype: GObject.GType<CipherContext>;

        // Own properties of Camel.CipherContext

        get session(): Session;

        // Constructors of Camel.CipherContext

        constructor(properties?: Partial<CipherContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](session?: Session | null): CipherContext;

        // Own static methods of Camel.CipherContext

        static error_quark(): GLib.Quark;

        // Own virtual methods of Camel.CipherContext

        /**
         * Decrypts `ipart` into `opart`.
         * @param ipart cipher-text #CamelMimePart
         * @param opart clear-text #CamelMimePart
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_decrypt_sync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity;
        /**
         * Encrypts the clear-text `ipart` and writes the resulting cipher-text to `opart`.
         *
         * Note: The `userid` is unused, %NULL should be passed for it.
         * @param userid unused
         * @param recipients an array of recipient key IDs and/or email addresses
         * @param ipart clear-text #CamelMimePart
         * @param opart cipher-text #CamelMimePart
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_encrypt_sync(
            userid: string | null,
            recipients: string[],
            ipart: MimePart,
            opart: MimePart,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        vfunc_hash_to_id(hash: CipherHash): string;
        vfunc_id_to_hash(id: string): CipherHash;
        /**
         * Converts the (unsigned) part `ipart` into a new self-contained MIME
         * part `opart`.  This may be a multipart/signed part, or a simple part
         * for enveloped types.
         * @param userid a private key to use to sign the stream
         * @param hash preferred Message-Integrity-Check hash algorithm
         * @param ipart input #CamelMimePart
         * @param opart output #CamelMimePart
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_sign_sync(
            userid: string,
            hash: CipherHash,
            ipart: MimePart,
            opart: MimePart,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Verifies the signature.
         * @param ipart the #CamelMimePart to verify
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_verify_sync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity;

        // Own methods of Camel.CipherContext

        /**
         * Asynchronously decrypts `ipart` into `opart`.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call camel_cipher_context_decrypt_finish() to get the result of
         * the operation.
         * @param ipart cipher-text #CamelMimePart
         * @param opart clear-text #CamelMimePart
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        decrypt(
            ipart: MimePart,
            opart: MimePart,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_cipher_context_decrypt().
         * @param result a #GAsyncResult
         * @returns a validity/encryption status, or %NULL on error
         */
        decrypt_finish(result: Gio.AsyncResult): CipherValidity;
        /**
         * Decrypts `ipart` into `opart`.
         * @param ipart cipher-text #CamelMimePart
         * @param opart clear-text #CamelMimePart
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns a validity/encryption status, or %NULL on error
         */
        decrypt_sync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity;
        /**
         * Asynchronously encrypts the clear-text `ipart` and
         * writes the resulting cipher-text to `opart`.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call camel_cipher_context_encrypt_finish() to get the result of
         * the operation.
         *
         * Note: The `userid` is unused, %NULL should be passed for it.
         * @param userid unused
         * @param recipients an array of recipient key IDs and/or email addresses
         * @param ipart clear-text #CamelMimePart
         * @param opart cipher-text #CamelMimePart
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        encrypt(
            userid: string | null,
            recipients: string[],
            ipart: MimePart,
            opart: MimePart,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_cipher_context_encrypt().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        encrypt_finish(result: Gio.AsyncResult): boolean;
        /**
         * Encrypts the clear-text `ipart` and writes the resulting cipher-text to `opart`.
         *
         * Note: The `userid` is unused, %NULL should be passed for it.
         * @param userid unused
         * @param recipients an array of recipient key IDs and/or email addresses
         * @param ipart clear-text #CamelMimePart
         * @param opart cipher-text #CamelMimePart
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        encrypt_sync(
            userid: string | null,
            recipients: string[],
            ipart: MimePart,
            opart: MimePart,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        get_session(): Session | null;
        hash_to_id(hash: CipherHash): string;
        id_to_hash(id: string): CipherHash;
        /**
         * Asynchronously converts the (unsigned) part `ipart` into a new
         * self-contained MIME part `opart`.  This may be a multipart/signed part,
         * or a simple part for enveloped types.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_cipher_context_sign_finish() to get the result of the operation.
         * @param userid a private key to use to sign the stream
         * @param hash preferred Message-Integrity-Check hash algorithm
         * @param ipart input #CamelMimePart
         * @param opart output #CamelMimePart
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        sign(
            userid: string,
            hash: CipherHash,
            ipart: MimePart,
            opart: MimePart,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_cipher_context_sign().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        sign_finish(result: Gio.AsyncResult): boolean;
        /**
         * Converts the (unsigned) part `ipart` into a new self-contained MIME
         * part `opart`.  This may be a multipart/signed part, or a simple part
         * for enveloped types.
         * @param userid a private key to use to sign the stream
         * @param hash preferred Message-Integrity-Check hash algorithm
         * @param ipart input #CamelMimePart
         * @param opart output #CamelMimePart
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        sign_sync(
            userid: string,
            hash: CipherHash,
            ipart: MimePart,
            opart: MimePart,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously verifies the signature.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call camel_cipher_context_verify_finish() to get the result of
         * the operation.
         * @param ipart the #CamelMimePart to verify
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        verify(
            ipart: MimePart,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_cipher_context_verify().
         * @param result a #GAsyncResult
         * @returns a #CamelCipherValidity structure containing information about the integrity of the input stream, or %NULL on failure to execute at all
         */
        verify_finish(result: Gio.AsyncResult): CipherValidity;
        /**
         * Verifies the signature.
         * @param ipart the #CamelMimePart to verify
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns a #CamelCipherValidity structure containing information about the integrity of the input stream, or %NULL on failure to execute at all
         */
        verify_sync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity;
    }

    module DB {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class DB extends GObject.Object {
        static $gtype: GObject.GType<DB>;

        // Constructors of Camel.DB

        constructor(properties?: Partial<DB.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](filename: string): DB;

        // Own static methods of Camel.DB

        /**
         * Frees the `record` and all of its associated data.
         * @param record a #CamelMIRecord
         */
        static camel_mir_free(record?: MIRecord | null): void;
        static error_quark(): GLib.Quark;
        /**
         * Frees a string previosuly returned by camel_db_sqlize_string().
         * @param string a string to free
         */
        static free_sqlized_string(string?: string | null): void;
        /**
         * Traverses column name from index `index` into an enum
         * #CamelDBKnownColumnNames value.  The `col_names` contains `ncols` columns.
         * First time this is called is created the `hash` from col_names indexes into
         * the enum, and this is reused for every other call.  The function expects
         * that column names are returned always in the same order.  When all rows
         * are read the `hash` table can be freed with g_hash_table_destroy().
         * @param hash a #GHashTable
         * @param index an index to start with, between 0 and @ncols
         * @param col_names column names to traverse
         */
        static get_column_ident(
            hash: { [key: string]: any } | GLib.HashTable<any, any>,
            index: number,
            col_names: string[],
        ): [DBKnownColumnNames, GLib.HashTable<any, any>];
        static get_column_name(raw_name: string): string | null;
        /**
         * Instructs sqlite to release its memory, if possible. This can be avoided
         * when CAMEL_SQLITE_FREE_CACHE environment variable is set.
         */
        static release_cache_memory(): void;
        /**
         * Converts the `string` to be usable in the SQLite statements.
         * @param string a string to "sqlize"
         */
        static sqlize_string(string: string): string;

        // Own methods of Camel.DB

        /**
         * Ends an ongoing transaction by ignoring the changes.
         * @returns 0 on success, -1 on error
         */
        abort_transaction(): number;
        /**
         * Adds a statement to an ongoing transaction.
         * @param query an SQL (SQLite) statement
         * @returns 0 on success, -1 on error
         */
        add_to_transaction(query: string): number;
        /**
         * Begins transaction. End it with camel_db_end_transaction() or camel_db_abort_transaction().
         * @returns 0 on success, -1 on error
         */
        begin_transaction(): number;
        /**
         * Deletes the given folder from the 'folders' table and empties
         * its message info table.
         * @param folder_name full name of the folder
         * @returns 0 on success, -1 on error
         */
        clear_folder_summary(folder_name: string): number;
        /**
         * Executes an SQLite command.
         * @param stmt an SQL (SQLite) statement to execute
         * @returns 0 on success, -1 on error
         */
        command(stmt: string): number;
        /**
         * Counts how many deleted messages is stored in the given table.
         * @param table_name name of the table
         * @returns 0 on success, -1 on error
         */
        count_deleted_message_info(table_name: string): [number, number];
        /**
         * Counts how many junk messages is stored in the given table.
         * @param table_name name of the table
         * @returns 0 on success, -1 on error
         */
        count_junk_message_info(table_name: string): [number, number];
        count_junk_not_deleted_message_info(table_name: string, count: number): number;
        /**
         * Executes a COUNT() query (like "SELECT COUNT(*) FROM table") and provides
         * the result of it as an unsigned 32-bit integer.
         * @param query a COUNT() query
         * @returns 0 on success, -1 on error
         */
        count_message_info(query: string): [number, number];
        /**
         * Counts how many messages is stored in the given table.
         * @param table_name name of the table
         * @returns 0 on success, -1 on error
         */
        count_total_message_info(table_name: string): [number, number];
        /**
         * Counts how many unread messages is stored in the given table.
         * @param table_name name of the table
         * @returns 0 on success, -1 on error
         */
        count_unread_message_info(table_name: string): [number, number];
        /**
         * Counts how many visible (not deleted and not junk) messages is stored in the given table.
         * @param table_name name of the table
         * @returns 0 on success, -1 on error
         */
        count_visible_message_info(table_name: string): [number, number];
        /**
         * Counts how many visible (not deleted and not junk) and unread messages is stored in the given table.
         * @param table_name name of the table
         * @returns 0 on success, -1 on error
         */
        count_visible_unread_message_info(table_name: string): [number, number];
        /**
         * Creates a 'folders' table, if it doesn't exist yet.
         * @returns 0 on success, -1 on error
         */
        create_folders_table(): number;
        /**
         * Deletes the given folder from the 'folders' table and also drops
         * its message info table.
         * @param folder_name full name of the folder
         * @returns 0 on success, -1 on error
         */
        delete_folder(folder_name: string): number;
        /**
         * Deletes single mesage info in the given folder with
         * the given UID.
         * @param folder_name full name of the folder
         * @param uid a message info UID to delete
         * @returns 0 on success, -1 on error
         */
        delete_uid(folder_name: string, uid: string): number;
        /**
         * Deletes a list of message UIDs as one transaction.
         * @param folder_name full name of the folder
         * @param uids A #GList of uids
         * @returns 0 on success, -1 on error
         */
        delete_uids(folder_name: string, uids: string[]): number;
        /**
         * Ends an ongoing transaction by committing the changes.
         * @returns 0 on success, -1 on error
         */
        end_transaction(): number;
        /**
         * A pair function for camel_db_start_in_memory_transactions(),
         * to commit the changes to `folder_name` and free the in-memory table.
         * @param folder_name full name of the folder
         * @returns 0 on success, -1 on error
         */
        flush_in_memory_transactions(folder_name: string): number;
        get_filename(): string;
        get_folder_deleted_uids(folder_name: string): string[] | null;
        get_folder_junk_uids(folder_name: string): string[] | null;
        /**
         * Fills hash with uid->GUINT_TO_POINTER (flag). Use camel_pstring_free()
         * to free the keys of the `hash`.
         * @param folder_name full name of the folder
         * @param sort_by optional ORDER BY clause (without the "ORDER BY" prefix)
         * @param collate optional collate function name to use
         * @param hash a hash table to fill
         * @returns 0 on success, -1 on error
         */
        get_folder_uids(
            folder_name: string,
            sort_by: string | null,
            collate: string | null,
            hash: { [key: string]: any } | GLib.HashTable<string, number>,
        ): number;
        /**
         * Runs a `cdb` maintenance, which includes vacuum, if necessary.
         * @returns Whether succeeded.
         */
        maybe_run_maintenance(): boolean;
        /**
         * Prepares message info table for the given folder.
         * @param folder_name full name of the folder
         * @returns 0 on success, -1 on error
         */
        prepare_message_info_table(folder_name: string): number;
        /**
         * reads folder information for the given folder and stores it into the `record`.
         * @param folder_name full name of the folder
         * @returns 0 on success, -1 on error
         */
        read_folder_info_record(folder_name: string): [number, FIRecord];
        /**
         * Selects single message info for the given `uid` in folder `folder_name` and calls
         * the `callback` for it.
         * @param folder_name full name of the folder
         * @param uid a message info UID to read the record for
         * @param callback callback to call for the found row
         * @returns 0 on success, -1 on error
         */
        read_message_info_record_with_uid(folder_name: string, uid: string, callback: DBSelectCB): number;
        /**
         * Reads all mesasge info records for the given folder and calls `callback` for them.
         * @param folder_name full name of the folder
         * @param callback callback to call for each found row
         * @returns 0 on success, -1 on error
         */
        read_message_info_records(folder_name: string, callback: DBSelectCB): number;
        /**
         * Renames tables for the `old_folder_name` to be used with `new_folder_name`.
         * @param old_folder_name full name of the existing folder
         * @param new_folder_name full name of the folder to rename it to
         * @returns 0 on success, -1 on error
         */
        rename_folder(old_folder_name: string, new_folder_name: string): number;
        /**
         * Sets a version number for the given folder.
         * @param folder_name full name of the folder
         * @param reset_version version number to set
         * @returns 0 on success, -1 on error
         */
        reset_folder_version(folder_name: string, reset_version: number): number;
        /**
         * Executes a SELECT staement and calls the `callback` for each selected row.
         * @param stmt a SELECT statment to execute
         * @param callback a callback to call for each row
         * @returns 0 on success, -1 on error
         */
        select(stmt: string, callback: DBSelectCB): number;
        /**
         * Defines a collation `collate,` which can be used in SQL (SQLite)
         * statement as a collation function. The `func` is called when
         * colation is used.
         * @param col a column name; currently unused
         * @param collate collation name
         * @param func a #CamelDBCollate collation function
         */
        set_collate(col: string, collate: string, func: DBCollate): number;
        /**
         * Creates an in-memory table for a batch transactions. Use camel_db_flush_in_memory_transactions()
         * to commit the changes and free the in-memory table.
         * @returns 0 on success, -1 on error
         */
        start_in_memory_transactions(): number;
        /**
         * Runs the list of commands as a single transaction.
         * @param qry_list A #GList of querries
         * @returns 0 on success, -1 on error
         */
        transaction_command(qry_list: string[]): number;
        /**
         * Write the `record` to the 'folders' table.
         * @param record a #CamelFIRecord
         * @returns 0 on success, -1 on error
         */
        write_folder_info_record(record: FIRecord): number;
        /**
         * Write the `record` to the message info table of the given folder.
         * @param folder_name full name of the folder
         * @param record a #CamelMIRecord
         * @returns 0 on success, -1 on error
         */
        write_message_info_record(folder_name: string, record: MIRecord): number;
    }

    module DataCache {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            expire_enabled: boolean;
            expireEnabled: boolean;
            path: string;
        }
    }

    class DataCache extends GObject.Object {
        static $gtype: GObject.GType<DataCache>;

        // Own properties of Camel.DataCache

        get expire_enabled(): boolean;
        set expire_enabled(val: boolean);
        get expireEnabled(): boolean;
        set expireEnabled(val: boolean);
        get path(): string;
        set path(val: string);

        // Constructors of Camel.DataCache

        constructor(properties?: Partial<DataCache.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string): DataCache;

        // Own methods of Camel.DataCache

        /**
         * Add a new item to the cache, returning a #GIOStream to the new item.
         *
         * The key and the path combine to form a unique key used to store the item.
         *
         * Potentially, expiry processing will be performed while this call is
         * executing.
         *
         * The returned #GIOStream is referenced for thread-safety and must be
         * unreferenced with g_object_unref() when finished with it.
         * @param path Relative path of item to add.
         * @param key Key of item to add.
         * @returns a #GIOStream for the new cache item, or %NULL on error
         */
        add(path: string, key: string): Gio.IOStream;
        /**
         * Clear cache's content in `path`.
         * @param path Path to the (sub) cache the item exists in.
         */
        clear(path: string): void;
        /**
         * Traverses the `cdc` sub-cache identified by `path` and calls `func` for each found file.
         * If the `func` returns %TRUE, then the file is removed, if %FALSE, it's kept in the cache.
         * @param path Path to the (sub) cache the items exist in
         * @param func a callback to call for each found file in the cache
         */
        foreach_remove(path: string, func: DataCacheRemoveFunc): void;
        /**
         * Lookup an item in the cache.  If the item exists, a #GIOStream is returned
         * for the item.  The stream may be shared by multiple callers, so ensure the
         * stream is in a valid state through external locking.
         *
         * The returned #GIOStream is referenced for thread-safety and must be
         * unreferenced with g_object_unref() when finished with it.
         * @param path Path to the (sub) cache the item exists in.
         * @param key Key for the cache item.
         * @returns a #GIOStream for the requested cache item, or %NULL on error
         */
        get(path: string, key: string): Gio.IOStream;
        /**
         * Gets whether expire of cache data is enabled.
         *
         * This is a complementary property for camel_data_cache_set_expire_age()
         * and camel_data_cache_set_expire_access(), which allows to disable expiry
         * without touching the two values. Having expire enabled, but not have set
         * any of the two times, still behaves like not having expiry enabled.
         * @returns Whether expire is enabled.
         */
        get_expire_enabled(): boolean;
        /**
         * Lookup the filename for an item in the cache
         * @param path Path to the (sub) cache the item exists in.
         * @param key Key for the cache item.
         * @returns The filename for a cache item
         */
        get_filename(path: string, key: string): string;
        /**
         * Returns the path to the data cache.
         * @returns the path to the data cache
         */
        get_path(): string;
        /**
         * Remove/expire a cache item.
         * @param path Path to the (sub) cache the item exists in.
         * @param key Key for the cache item.
         * @returns 0 on success, -1 on error
         */
        remove(path: string, key: string): number;
        /**
         * Set the cache expiration policy for access times.
         *
         * Items in the cache which haven't been accessed for `when`
         * seconds may be expired at any time.  Items are expired in a lazy
         * manner, so it is indeterminate when the items will
         * physically be removed.
         *
         * Note you can set both an age and an access limit.  The
         * age acts as a hard limit on cache entries.
         * @param when Timeout for access, or -1 to disable access expiry.
         */
        set_expire_access(when: number): void;
        /**
         * Set the cache expiration policy for aged entries.
         *
         * Items in the cache older than `when` seconds may be
         * flushed at any time.  Items are expired in a lazy
         * manner, so it is indeterminate when the items will
         * physically be removed.
         *
         * Note you can set both an age and an access limit.  The
         * age acts as a hard limit on cache entries.
         * @param when Timeout for age expiry, or -1 to disable.
         */
        set_expire_age(when: number): void;
        /**
         * Sets whether expire of cache data is enabled.
         *
         * This is a complementary property for camel_data_cache_set_expire_age()
         * and camel_data_cache_set_expire_access(), which allows to disable expiry
         * without touching the two values. Having expire enabled, but not have set
         * any of the two times, still behaves like not having expiry enabled.
         * @param expire_enabled a value to set
         */
        set_expire_enabled(expire_enabled: boolean): void;
        /**
         * Sets the path to the data cache.
         * @param path path to the data cache
         */
        set_path(path: string): void;
    }

    module DataWrapper {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class DataWrapper extends GObject.Object {
        static $gtype: GObject.GType<DataWrapper>;

        // Constructors of Camel.DataWrapper

        constructor(properties?: Partial<DataWrapper.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DataWrapper;

        // Own virtual methods of Camel.DataWrapper

        /**
         * Constructs the content of `data_wrapper` from `input_stream`.
         * @param input_stream a #GInputStream
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_construct_from_input_stream_sync(
            input_stream: Gio.InputStream,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Constructs the content of `data_wrapper` from the given `stream`.
         * @param stream an input #CamelStream
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Writes the decoded data content to `output_stream`.
         *
         * <note>
         *   <para>
         *     This function may block even if the given output stream does not.
         *     For example, the content may have to be fetched across a network
         *     before it can be written to `output_stream`.
         *   </para>
         * </note>
         * @param output_stream a #GOutputStream
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_decode_to_output_stream_sync(
            output_stream: Gio.OutputStream,
            cancellable?: Gio.Cancellable | null,
        ): number;
        /**
         * Writes the decoded data content to `stream`.
         *
         * <note>
         *   <para>
         *     This function may block even if the given output stream does not.
         *     For example, the content may have to be fetched across a network
         *     before it can be written to `stream`.
         *   </para>
         * </note>
         * @param stream a #CamelStream for decoded data to be written to
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number;
        vfunc_get_mime_type(): string;
        vfunc_get_mime_type_field(): ContentType | null;
        vfunc_is_offline(): boolean;
        /**
         * This sets the data wrapper's MIME type.
         *
         * It might fail, but you won't know. It will allow you to set
         * Content-Type parameters on the data wrapper, which are meaningless.
         * You should not be allowed to change the MIME type of a data wrapper
         * that contains data, or at least, if you do, it should invalidate the
         * data.
         * @param mime_type a MIME type
         */
        vfunc_set_mime_type(mime_type: string): void;
        /**
         * This sets the data wrapper's MIME type. It adds its own reference
         * to `mime_type,` if not %NULL.
         *
         * It suffers from the same flaws as camel_data_wrapper_set_mime_type().
         * @param mime_type a #CamelContentType
         */
        vfunc_set_mime_type_field(mime_type?: ContentType | null): void;
        /**
         * Writes the content of `data_wrapper` to `output_stream` in a
         * machine-independent format appropriate for the data.
         *
         * <note>
         *   <para>
         *     This function may block even if the given output stream does not.
         *     For example, the content may have to be fetched across a network
         *     before it can be written to `output_stream`.
         *   </para>
         * </note>
         * @param output_stream a #GOutputStream
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_write_to_output_stream_sync(
            output_stream: Gio.OutputStream,
            cancellable?: Gio.Cancellable | null,
        ): number;
        /**
         * Writes the content of `data_wrapper` to `stream` in a machine-independent
         * format appropriate for the data.  It should be possible to construct an
         * equivalent data wrapper object later by passing this stream to
         * camel_data_wrapper_construct_from_stream_sync().
         *
         * <note>
         *   <para>
         *     This function may block even if the given output stream does not.
         *     For example, the content may have to be fetched across a network
         *     before it can be written to `stream`.
         *   </para>
         * </note>
         * @param stream a #CamelStream for output
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number;

        // Own methods of Camel.DataWrapper

        /**
         * Calculates decoded size of the `data_wrapper` by saving it to a null-stream
         * and returns how many bytes had been written. It's using
         * camel_data_wrapper_decode_to_stream_sync() internally.
         * @param cancellable a #GCancellable, or %NULL
         * @returns how many bytes the @data_wrapper would use when saved,   or -1 on error.
         */
        calculate_decoded_size_sync(cancellable?: Gio.Cancellable | null): number;
        /**
         * Calculates size of the `data_wrapper` by saving it to a null-stream
         * and returns how many bytes had been written. It's using
         * camel_data_wrapper_write_to_stream_sync() internally.
         * @param cancellable a #GCancellable, or %NULL
         * @returns how many bytes the @data_wrapper would use when saved,   or -1 on error.
         */
        calculate_size_sync(cancellable?: Gio.Cancellable | null): number;
        /**
         * Constructs the content of `data_wrapper` from `data` of length `data_len`.
         * @param data data to set
         * @param data_len length of @data
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        construct_from_data_sync(data: any, data_len: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously constructs the content of `data_wrapper` from `input_stream`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_data_wrapper_construct_from_input_stream_finish() to get the
         * result of the operation.
         * @param input_stream a #GInputStream
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        construct_from_input_stream(
            input_stream: Gio.InputStream,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with
         * camel_data_wrapper_construct_from_input_stream().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        construct_from_input_stream_finish(result: Gio.AsyncResult): boolean;
        /**
         * Constructs the content of `data_wrapper` from `input_stream`.
         * @param input_stream a #GInputStream
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously constructs the content of `data_wrapper` from the given
         * `stream`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_data_wrapper_construct_from_stream_finish() to get the result
         * of the operation.
         * @param stream an input #CamelStream
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        construct_from_stream(
            stream: Stream,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with
         * camel_data_wrapper_construct_from_stream().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        construct_from_stream_finish(result: Gio.AsyncResult): boolean;
        /**
         * Constructs the content of `data_wrapper` from the given `stream`.
         * @param stream an input #CamelStream
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously writes the decoded data content to `output_stream`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_data_wrapper_decode_to_output_stream_finish() to get the result
         * of the operation.
         * @param output_stream a #GOutputStream
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        decode_to_output_stream(
            output_stream: Gio.OutputStream,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with
         * camel_data_wrapper_decode_to_output_stream().
         * @param result a #GAsyncResult
         * @returns the number of bytes written, or -1 on error
         */
        decode_to_output_stream_finish(result: Gio.AsyncResult): number;
        /**
         * Writes the decoded data content to `output_stream`.
         *
         * <note>
         *   <para>
         *     This function may block even if the given output stream does not.
         *     For example, the content may have to be fetched across a network
         *     before it can be written to `output_stream`.
         *   </para>
         * </note>
         * @param output_stream a #GOutputStream
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the number of bytes written, or -1 on error
         */
        decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number;
        /**
         * Asynchronously writes the decoded data content to `stream`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_data_wrapper_decode_to_stream_finish() to get the result of
         * the operation.
         * @param stream a #CamelStream for decoded data to be written to
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        decode_to_stream(
            stream: Stream,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_data_wrapper_decode_to_stream().
         * @param result a #GAsyncResult
         * @returns the number of bytes written, or -1 on error
         */
        decode_to_stream_finish(result: Gio.AsyncResult): number;
        /**
         * Writes the decoded data content to `stream`.
         *
         * <note>
         *   <para>
         *     This function may block even if the given output stream does not.
         *     For example, the content may have to be fetched across a network
         *     before it can be written to `stream`.
         *   </para>
         * </note>
         * @param stream a #CamelStream for decoded data to be written to
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the number of bytes written, or -1 on error
         */
        decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number;
        /**
         * Returns the #GByteArray being used to hold the contents of `data_wrapper`.
         *
         * Note, it's up to the caller to use this in a thread-safe manner.
         * @returns the #GByteArray for @data_wrapper
         */
        get_byte_array(): Uint8Array;
        get_encoding(): TransferEncoding;
        get_mime_type(): string;
        get_mime_type_field(): ContentType | null;
        is_offline(): boolean;
        /**
         * Sets encoding (#CamelTransferEncoding) for the `data_wrapper`.
         * It doesn't re-encode the content, if the encoding changes.
         * @param encoding an encoding to set
         */
        set_encoding(encoding: TransferEncoding): void;
        /**
         * This sets the data wrapper's MIME type.
         *
         * It might fail, but you won't know. It will allow you to set
         * Content-Type parameters on the data wrapper, which are meaningless.
         * You should not be allowed to change the MIME type of a data wrapper
         * that contains data, or at least, if you do, it should invalidate the
         * data.
         * @param mime_type a MIME type
         */
        set_mime_type(mime_type: string): void;
        /**
         * This sets the data wrapper's MIME type. It adds its own reference
         * to `mime_type,` if not %NULL.
         *
         * It suffers from the same flaws as camel_data_wrapper_set_mime_type().
         * @param mime_type a #CamelContentType
         */
        set_mime_type_field(mime_type?: ContentType | null): void;
        /**
         * Sets whether the `data_wrapper` is "offline". It applies only to this
         * concrete instance. See camel_data_wrapper_is_offline().
         * @param offline whether the @data_wrapper is "offline"
         */
        set_offline(offline: boolean): void;
        /**
         * Sets mime-type filed to be `mime_type` and consumes it, aka unlike
         * camel_data_wrapper_set_mime_type_field(), this doesn't add its own
         * reference to `mime_type`.
         *
         * It suffers from the same flaws as camel_data_wrapper_set_mime_type().
         * @param mime_type a #CamelContentType
         */
        take_mime_type_field(mime_type?: ContentType | null): void;
        /**
         * Asynchronously writes the content of `data_wrapper` to `output_stream` in
         * a machine-independent format appropriate for the data.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_data_wrapper_write_to_output_stream_finish() to get the result
         * of the operation.
         * @param output_stream a #GOutputStream
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        write_to_output_stream(
            output_stream: Gio.OutputStream,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with
         * camel_data_wrapper_write_to_output_stream().
         * @param result a #GAsyncResult
         * @returns the number of bytes written, or -1 on error
         */
        write_to_output_stream_finish(result: Gio.AsyncResult): number;
        /**
         * Writes the content of `data_wrapper` to `output_stream` in a
         * machine-independent format appropriate for the data.
         *
         * <note>
         *   <para>
         *     This function may block even if the given output stream does not.
         *     For example, the content may have to be fetched across a network
         *     before it can be written to `output_stream`.
         *   </para>
         * </note>
         * @param output_stream a #GOutputStream
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the number of bytes written, or -1 on error
         */
        write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number;
        /**
         * Asynchronously writes the content of `data_wrapper` to `stream` in a
         * machine-independent format appropriate for the data.  It should be
         * possible to construct an equivalent data wrapper object later by
         * passing this stream to camel_data_wrapper_construct_from_stream().
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_data_wrapper_write_to_stream_finish() to get the result of
         * the operation.
         * @param stream a #CamelStream for writed data to be written to
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        write_to_stream(
            stream: Stream,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_data_wrapper_write_to_stream().
         * @param result a #GAsyncResult
         * @returns the number of bytes written, or -1 or error
         */
        write_to_stream_finish(result: Gio.AsyncResult): number;
        /**
         * Writes the content of `data_wrapper` to `stream` in a machine-independent
         * format appropriate for the data.  It should be possible to construct an
         * equivalent data wrapper object later by passing this stream to
         * camel_data_wrapper_construct_from_stream_sync().
         *
         * <note>
         *   <para>
         *     This function may block even if the given output stream does not.
         *     For example, the content may have to be fetched across a network
         *     before it can be written to `stream`.
         *   </para>
         * </note>
         * @param stream a #CamelStream for output
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the number of bytes written, or -1 on error
         */
        write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number;
    }

    module FilterDriver {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FilterDriver extends GObject.Object {
        static $gtype: GObject.GType<FilterDriver>;

        // Constructors of Camel.FilterDriver

        constructor(properties?: Partial<FilterDriver.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](session: Session): FilterDriver;

        // Own methods of Camel.FilterDriver

        /**
         * Adds a new rule to set of rules to process by the filter driver.
         * @param name name of the rule
         * @param match a code (#CamelSExp) to execute to check whether the rule can be applied
         * @param action an action code (#CamelSExp) to execute, when the @match evaluates to %TRUE
         */
        add_rule(name: string, match: string, action: string): void;
        /**
         * Filters a folder based on rules defined in the FilterDriver
         * object.
         * @param folder CamelFolder to be filtered
         * @param cache UID cache (needed for POP folders)
         * @param uids message uids to be filtered or         %NULL (as a shortcut to filter all messages)
         * @param remove TRUE to mark filtered messages as deleted
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns -1 if errors were encountered during filtering, otherwise returns 0.
         */
        filter_folder(
            folder: Folder,
            cache: UIDCache,
            uids: string[] | null,
            remove: boolean,
            cancellable?: Gio.Cancellable | null,
        ): number;
        /**
         * Filters an mbox file based on rules defined in the FilterDriver
         * object. Is more efficient as it doesn't need to open the folder
         * through Camel directly.
         * @param mbox mbox filename to be filtered
         * @param original_source_url URI of the @mbox, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns -1 if errors were encountered during filtering, otherwise returns 0.
         */
        filter_mbox(mbox: string, original_source_url?: string | null, cancellable?: Gio.Cancellable | null): number;
        /**
         * Filters a message based on rules defined in the FilterDriver
         * object. If the source folder (`source)` and the uid (`uid)` are
         * provided, the filter will operate on the CamelFolder (which in
         * certain cases is more efficient than using the default
         * camel_folder_append_message() function).
         * @param message message to filter or %NULL
         * @param info message info or %NULL
         * @param uid message uid or %NULL
         * @param source source folder or %NULL
         * @param store_uid UID of source store, or %NULL
         * @param original_store_uid UID of source store (pre-movemail), or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns -1 if errors were encountered during filtering, otherwise returns 0.
         */
        filter_message(
            message?: MimeMessage | null,
            info?: MessageInfo | null,
            uid?: string | null,
            source?: Folder | null,
            store_uid?: string | null,
            original_store_uid?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): number;
        /**
         * Flush all of the only-once filter actions.
         */
        flush(): void;
        /**
         * Removes a rule by name, added by camel_filter_driver_add_rule().
         * @param name rule name
         * @returns Whether the rule had been found and removed.
         */
        remove_rule_by_name(name: string): boolean;
        /**
         * Sets a default folder for the driver. The function adds
         * its own reference for the folder.
         * @param def a default #CamelFolder
         */
        set_default_folder(def?: Folder | null): void;
        /**
         * Sets a log file to use for logging.
         * @param logfile a FILE handle where to write logging
         */
        set_logfile(logfile?: any | null): void;
        /**
         * Sets a callback to call when a play of a sound is requested.
         * @param func a callback to play a sound
         */
        set_play_sound_func(func: FilterPlaySoundFunc): void;
        /**
         * Sets a shell command callback, which is called when a shell command
         * execution is requested.
         * @param func a shell command callback
         */
        set_shell_func(func: FilterShellFunc): void;
        /**
         * Sets a status callback, which is used to report progress/status.
         * @param func a callback to report progress
         */
        set_status_func(func: FilterStatusFunc): void;
        /**
         * Sets a callback to use for system beep.
         * @param func a system beep callback
         */
        set_system_beep_func(func: FilterSystemBeepFunc): void;
    }

    module FilterInputStream {
        // Constructor properties interface

        interface ConstructorProps extends Gio.FilterInputStream.ConstructorProps {
            filter: MimeFilter;
        }
    }

    class FilterInputStream extends Gio.FilterInputStream {
        static $gtype: GObject.GType<FilterInputStream>;

        // Own properties of Camel.FilterInputStream

        get filter(): MimeFilter;

        // Constructors of Camel.FilterInputStream

        constructor(properties?: Partial<FilterInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](base_stream: Gio.InputStream, filter: MimeFilter): FilterInputStream;

        // Own methods of Camel.FilterInputStream

        /**
         * Gets the #CamelMimeFilter that is used by `filter_stream`.
         * @returns a #CamelMimeFilter
         */
        get_filter(): MimeFilter;
    }

    module FilterOutputStream {
        // Constructor properties interface

        interface ConstructorProps extends Gio.FilterOutputStream.ConstructorProps {
            filter: MimeFilter;
        }
    }

    class FilterOutputStream extends Gio.FilterOutputStream {
        static $gtype: GObject.GType<FilterOutputStream>;

        // Own properties of Camel.FilterOutputStream

        get filter(): MimeFilter;

        // Constructors of Camel.FilterOutputStream

        constructor(properties?: Partial<FilterOutputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](base_stream: Gio.OutputStream, filter: MimeFilter): FilterOutputStream;

        // Own methods of Camel.FilterOutputStream

        /**
         * Gets the #CamelMimeFilter that is used by `filter_stream`.
         * @returns a #CamelMimeFilter
         */
        get_filter(): MimeFilter;
    }

    module Folder {
        // Signal callback interfaces

        interface Changed {
            (changes: FolderChangeInfo): void;
        }

        interface Deleted {
            (): void;
        }

        interface Renamed {
            (old_name: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            description: string;
            display_name: string;
            displayName: string;
            full_name: string;
            fullName: string;
            mark_seen: ThreeState;
            markSeen: ThreeState;
            mark_seen_timeout: number;
            markSeenTimeout: number;
            parent_store: Store;
            parentStore: Store;
        }
    }

    abstract class Folder extends Object {
        static $gtype: GObject.GType<Folder>;

        // Own properties of Camel.Folder

        /**
         * The folder's description.
         */
        get description(): string;
        set description(val: string);
        /**
         * The folder's display name.
         */
        get display_name(): string;
        set display_name(val: string);
        /**
         * The folder's display name.
         */
        get displayName(): string;
        set displayName(val: string);
        /**
         * The folder's fully qualified name.
         */
        get full_name(): string;
        set full_name(val: string);
        /**
         * The folder's fully qualified name.
         */
        get fullName(): string;
        set fullName(val: string);
        /**
         * A #CamelThreeState persistent option of the folder,
         * which can override global option to mark messages
         * as seen after certain interval.
         */
        get mark_seen(): ThreeState;
        set mark_seen(val: ThreeState);
        /**
         * A #CamelThreeState persistent option of the folder,
         * which can override global option to mark messages
         * as seen after certain interval.
         */
        get markSeen(): ThreeState;
        set markSeen(val: ThreeState);
        /**
         * Timeout in milliseconds for marking messages as seen.
         */
        get mark_seen_timeout(): number;
        set mark_seen_timeout(val: number);
        /**
         * Timeout in milliseconds for marking messages as seen.
         */
        get markSeenTimeout(): number;
        set markSeenTimeout(val: number);
        /**
         * The #CamelStore to which the folder belongs.
         */
        get parent_store(): Store;
        /**
         * The #CamelStore to which the folder belongs.
         */
        get parentStore(): Store;

        // Constructors of Camel.Folder

        constructor(properties?: Partial<Folder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Camel.Folder

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'changed', callback: (_source: this, changes: FolderChangeInfo) => void): number;
        connect_after(signal: 'changed', callback: (_source: this, changes: FolderChangeInfo) => void): number;
        emit(signal: 'changed', changes: FolderChangeInfo): void;
        connect(signal: 'deleted', callback: (_source: this) => void): number;
        connect_after(signal: 'deleted', callback: (_source: this) => void): number;
        emit(signal: 'deleted'): void;
        connect(signal: 'renamed', callback: (_source: this, old_name: string) => void): number;
        connect_after(signal: 'renamed', callback: (_source: this, old_name: string) => void): number;
        emit(signal: 'renamed', old_name: string): void;

        // Own static methods of Camel.Folder

        static threaded_messages_dump(c: FolderThreadNode): number;

        // Own virtual methods of Camel.Folder

        /**
         * Appends `message` to `folder`.  Only the flag and tag data from `info`
         * are used.  If `info` is %NULL, no flags or tags will be set.
         * @param message a #CamelMimeMessage
         * @param info a #CamelMessageInfo with additional flags/etc to set        on the new message, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_append_message_sync(
            message: MimeMessage,
            info: MessageInfo | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Emits the #CamelFolder::changed signal from an idle source on the
         * main loop.  The idle source's priority is #G_PRIORITY_LOW.
         * @param changes change information for @folder
         */
        vfunc_changed(changes: FolderChangeInfo): void;
        /**
         * Compares two uids. The return value meaning is the same as in any other compare function.
         *
         * Note that the default compare function expects a decimal number at the beginning of a uid,
         * thus if provider uses different uid values, then it should subclass this function.
         * @param uid1 The first uid.
         * @param uid2 the second uid.
         */
        vfunc_cmp_uids(uid1: string, uid2: string): number;
        /**
         * Searches the folder for count of messages matching the given search expression.
         * @param expression a search expression
         * @param cancellable a #GCancellable
         */
        vfunc_count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number;
        vfunc_delete_(): void;
        vfunc_deleted(): void;
        /**
         * Deletes messages which have been marked as "DELETED".
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_expunge_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Frees the summary array returned by camel_folder_get_summary().
         * @param array the summary array to free
         */
        vfunc_free_summary(array: MessageInfo[]): void;
        /**
         * Frees the array of UIDs returned by camel_folder_get_uids().
         * @param array the array of uids to free
         */
        vfunc_free_uids(array: string[]): void;
        /**
         * Freezes the folder so that a series of operation can be performed
         * without "folder_changed" signals being emitted.  When the folder is
         * later thawed with camel_folder_thaw(), the suppressed signals will
         * be emitted.
         */
        vfunc_freeze(): void;
        vfunc_get_filename(uid: string): string;
        /**
         * Similar to the camel_folder_get_full_name(), only returning
         * full path to the `folder` suitable for the display to a user.
         */
        vfunc_get_full_display_name(): string;
        /**
         * Gets the message corresponding to `message_uid` from the `folder` cache,
         * if available locally. This should not do any network I/O, only check
         * if message is already downloaded and return it quickly, not being
         * blocked by the folder's lock. Returning NULL is not considered as
         * an error, it just means that the message is still to-be-downloaded.
         *
         * Note: This function is called automatically within camel_folder_get_message_sync().
         * @param message_uid the message UID
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null;
        vfunc_get_message_count(): number;
        vfunc_get_message_flags(uid: string): number;
        /**
         * Retrieve the #CamelMessageInfo for the specified `uid`.
         * @param uid the uid of a message
         */
        vfunc_get_message_info(uid: string): MessageInfo | null;
        /**
         * Gets the message corresponding to `message_uid` from `folder`.
         * @param message_uid the message UID
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage;
        vfunc_get_message_user_flag(uid: string, name: string): boolean;
        vfunc_get_message_user_tag(uid: string, name: string): string;
        vfunc_get_permanent_flags(): number;
        /**
         * Gets a list of known quotas for `folder`.  Free the returned
         * #CamelFolderQuotaInfo struct with camel_folder_quota_info_free().
         *
         * If quotas are not supported for `folder,` the function returns %NULL
         * and sets `error` to #G_IO_ERROR_NOT_SUPPORTED.
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo;
        /**
         * This returns the summary information for the folder. This array
         * should not be modified, and must be freed with
         * camel_folder_free_summary().
         */
        vfunc_get_summary(): string[];
        /**
         * Get the list of UIDs available in a folder. This routine is useful
         * for finding what messages are available when the folder does not
         * support summaries. The returned array should not be modified, and
         * must be freed by passing it to camel_folder_free_uids().
         */
        vfunc_get_uids(): string[];
        /**
         * Returns the known-uncached uids from a list of uids. It may return uids
         * which are locally cached but should never filter out a uid which is not
         * locally cached. Free the result by called camel_folder_free_uids().
         * Frees the array of UIDs returned by camel_folder_get_uids().
         * @param uids the array of uids to filter down to uncached ones.
         */
        vfunc_get_uncached_uids(uids: string[]): string[];
        vfunc_has_search_capability(): boolean;
        vfunc_is_frozen(): boolean;
        /**
         * Lets the `folder` know that it should refresh its content
         * the next time from fresh. This is useful for remote accounts,
         * to fully re-check the folder content against the server.
         */
        vfunc_prepare_content_refresh(): void;
        /**
         * Delete the local cache of all messages between these uids.
         * @param start_uid the start message UID
         * @param end_uid the end message UID
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_purge_message_cache_sync(
            start_uid: string,
            end_uid: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Synchronizes a folder's summary with its backing store.
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Marks `folder` as renamed.
         *
         * This also emits the #CamelFolder::renamed signal from an idle source on
         * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
         *
         * NOTE: This is an internal function used by camel stores, no locking
         * is performed on the folder.
         * @param new_name new name for the folder
         */
        vfunc_rename(new_name: string): void;
        vfunc_renamed(old_name: string): void;
        /**
         * Searches the folder for messages matching the given search expression.
         * @param expression a search expression
         * @param cancellable a #GCancellable
         */
        vfunc_search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[];
        /**
         * Search a subset of uid's for an expression match.
         * @param expression search expression
         * @param uids array of uid's to match against.
         * @param cancellable a #GCancellable
         */
        vfunc_search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[];
        /**
         * Free the result of a search as gotten by camel_folder_search_by_expression()
         * or camel_folder_search_by_uids().
         * @param result search results to free
         */
        vfunc_search_free(result: string[]): void;
        /**
         * Sets those flags specified by `mask` to the values specified by `set`
         * on the indicated message. (This may or may not persist after the
         * folder or store is closed. See camel_folder_get_permanent_flags())
         *
         * E.g. to set the deleted flag and clear the draft flag, use
         * camel_folder_set_message_flags (folder, uid, CAMEL_MESSAGE_DELETED|CAMEL_MESSAGE_DRAFT, CAMEL_MESSAGE_DELETED);
         * @param uid the UID of a message in @folder
         * @param mask a mask of #CamelMessageFlags bit-or values to use
         * @param set the flags to ser, also bit-or of #CamelMessageFlags
         */
        vfunc_set_message_flags(uid: string, mask: number, set: number): boolean;
        vfunc_set_message_user_flag(uid: string, name: string, value: boolean): void;
        vfunc_set_message_user_tag(uid: string, name: string, value: string): void;
        /**
         * Sorts the array of UIDs.
         * @param uids array of uids
         */
        vfunc_sort_uids(uids: string[]): void;
        /**
         * Ensure that a message identified by `message_uid` has been synchronized in
         * `folder` so that calling camel_folder_get_message() on it later will work
         * in offline mode.
         * @param message_uid a message UID
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Synchronizes any changes that have been made to `folder` to its
         * backing store, optionally expunging deleted messages as well.
         * @param expunge whether to expunge after synchronizing
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Thaws the folder and emits any pending folder_changed
         * signals.
         */
        vfunc_thaw(): void;
        /**
         * Copies or moves messages from one folder to another.  If the
         * `source` and `destination` folders have the same parent_store, this
         * may be more efficient than using camel_folder_append_message_sync().
         * @param message_uids message UIDs in @source
         * @param destination the destination #CamelFolder
         * @param delete_originals whether or not to delete the original messages
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_transfer_messages_to_sync(
            message_uids: string[],
            destination: Folder,
            delete_originals: boolean,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string[] | null];

        // Own methods of Camel.Folder

        /**
         * Appends `message` to `folder` asynchronously.  Only the flag and tag data
         * from `info` are used.  If `info` is %NULL, no flags or tags will be set.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call camel_folder_append_message_finish() to get the result of
         * the operation.
         * @param message a #CamelMimeMessage
         * @param info a #CamelMessageInfo with additional flags/etc to set        on the new message, or %NULL
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        append_message(
            message: MimeMessage,
            info: MessageInfo | null,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_folder_append_message_finish().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        append_message_finish(result: Gio.AsyncResult): [boolean, string];
        /**
         * Appends `message` to `folder`.  Only the flag and tag data from `info`
         * are used.  If `info` is %NULL, no flags or tags will be set.
         * @param message a #CamelMimeMessage
         * @param info a #CamelMessageInfo with additional flags/etc to set        on the new message, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        append_message_sync(
            message: MimeMessage,
            info: MessageInfo | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Emits the #CamelFolder::changed signal from an idle source on the
         * main loop.  The idle source's priority is #G_PRIORITY_LOW.
         * @param changes change information for @folder
         */
        changed(changes: FolderChangeInfo): void;
        /**
         * Compares two uids. The return value meaning is the same as in any other compare function.
         *
         * Note that the default compare function expects a decimal number at the beginning of a uid,
         * thus if provider uses different uid values, then it should subclass this function.
         * @param uid1 The first uid.
         * @param uid2 the second uid.
         */
        cmp_uids(uid1: string, uid2: string): number;
        /**
         * Searches the folder for count of messages matching the given search expression.
         * @param expression a search expression
         * @param cancellable a #GCancellable
         * @returns an interger
         */
        count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number;
        /**
         * Marks `folder` as deleted and performs any required cleanup.
         *
         * This also emits the #CamelFolder::deleted signal from an idle source on
         * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
         */
        ['delete'](): void;
        /**
         * Thread-safe variation of camel_folder_get_description().
         * Use this function when accessing `folder` from multiple threads.
         *
         * The returned string should be freed with g_free() when no longer needed.
         * @returns a newly-allocated copy of #CamelFolder:description
         */
        dup_description(): string;
        /**
         * Thread-safe variation of camel_folder_get_display_name().
         * Use this function when accessing `folder` from multiple threads.
         *
         * The returned string should be freed with g_free() when no longer needed.
         * @returns a newly-allocated copy of #CamelFolder:display-name
         */
        dup_display_name(): string;
        /**
         * Thread-safe variation of camel_folder_get_full_name().
         * Use this function when accessing `folder` from multiple threads.
         *
         * The returned string should be freed with g_free() when no longer needed.
         * @returns a newly-allocated copy of #CamelFolder:full-name
         */
        dup_full_name(): string;
        /**
         * Asynchronously deletes messages which have been marked as "DELETED".
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_folder_expunge_finish() to get the result of the operation.
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        expunge(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_folder_expunge().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        expunge_finish(result: Gio.AsyncResult): boolean;
        /**
         * Deletes messages which have been marked as "DELETED".
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        expunge_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Frees the provided array and its contents. Used by #CamelFolder
         * subclasses as an implementation for free_uids when the provided
         * information was created explicitly by the corresponding get_ call.
         * @param array an array of uids
         */
        free_deep(array: string[]): void;
        /**
         * Frees the provided array but not its contents. Used by #CamelFolder
         * subclasses as an implementation for free_uids or free_summary when
         * the returned array needs to be freed but its contents come from
         * "static" information.
         * @param array an array of uids or #CamelMessageInfo
         */
        free_shallow(array: string[]): void;
        /**
         * Frees the summary array returned by camel_folder_get_summary().
         * @param array the summary array to free
         */
        free_summary(array: MessageInfo[]): void;
        /**
         * Frees the array of UIDs returned by camel_folder_get_uids().
         * @param array the array of uids to free
         */
        free_uids(array: string[]): void;
        /**
         * Freezes the folder so that a series of operation can be performed
         * without "folder_changed" signals being emitted.  When the folder is
         * later thawed with camel_folder_thaw(), the suppressed signals will
         * be emitted.
         */
        freeze(): void;
        get_deleted_message_count(): number;
        /**
         * Returns a description of the folder suitable for displaying to the user.
         * @returns a description of the folder
         */
        get_description(): string;
        /**
         * Returns the display name for the folder.  The fully qualified name
         * can be obtained with camel_folder_get_full_name().
         * @returns the display name of the folder
         */
        get_display_name(): string;
        get_filename(uid: string): string;
        get_flags(): number;
        get_folder_summary(): FolderSummary;
        get_frozen_count(): number;
        /**
         * Similar to the camel_folder_get_full_name(), only returning
         * full path to the `folder` suitable for the display to a user.
         * @returns full path to the @folder suitable for the display to a user
         */
        get_full_display_name(): string;
        /**
         * Returns the fully qualified name of the folder.
         * @returns the fully qualified name of the folder
         */
        get_full_name(): string;
        get_mark_seen(): ThreeState;
        get_mark_seen_timeout(): number;
        /**
         * Asynchronously gets the message corresponding to `message_uid` from `folder`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_folder_get_message_finish() to get the result of the operation.
         * @param message_uid the message UID
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_message(
            message_uid: string,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the message corresponding to `message_uid` from the `folder` cache,
         * if available locally. This should not do any network I/O, only check
         * if message is already downloaded and return it quickly, not being
         * blocked by the folder's lock. Returning NULL is not considered as
         * an error, it just means that the message is still to-be-downloaded.
         *
         * Note: This function is called automatically within camel_folder_get_message_sync().
         * @param message_uid the message UID
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns a cached #CamelMimeMessage corresponding    to the requested UID
         */
        get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null;
        get_message_count(): number;
        /**
         * Finishes the operation started with camel_folder_get_message().
         * @param result a #GAsyncResult
         * @returns a #CamelMimeMessage corresponding to the requested UID
         */
        get_message_finish(result: Gio.AsyncResult): MimeMessage;
        get_message_flags(uid: string): number;
        /**
         * Retrieve the #CamelMessageInfo for the specified `uid`.
         * @param uid the uid of a message
         * @returns The summary information for the   indicated message, or %NULL if the uid does not exist. Free the returned   object with g_object_unref(), when done with it.
         */
        get_message_info(uid: string): MessageInfo | null;
        /**
         * Gets the message corresponding to `message_uid` from `folder`.
         * @param message_uid the message UID
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns a #CamelMimeMessage corresponding to the requested UID
         */
        get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage;
        get_message_user_flag(uid: string, name: string): boolean;
        get_message_user_tag(uid: string, name: string): string;
        get_parent_store(): any | null;
        get_permanent_flags(): number;
        /**
         * Asynchronously gets a list of known quotas for `folder`.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call camel_folder_get_quota_info_finish() to get the result of
         * the operation.
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_quota_info(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_folder_get_quota_info().
         * Free the returned #CamelFolderQuotaInfo struct with
         * camel_folder_quota_info_free().
         *
         * If quotas are not supported for `folder,` the function returns %NULL
         * and sets `error` to #G_IO_ERROR_NOT_SUPPORTED.
         * @param result a #GAsyncResult
         * @returns a #CamelFolderQuotaInfo, or %NULL on error
         */
        get_quota_info_finish(result: Gio.AsyncResult): FolderQuotaInfo;
        /**
         * Gets a list of known quotas for `folder`.  Free the returned
         * #CamelFolderQuotaInfo struct with camel_folder_quota_info_free().
         *
         * If quotas are not supported for `folder,` the function returns %NULL
         * and sets `error` to #G_IO_ERROR_NOT_SUPPORTED.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns a #CamelFolderQuotaInfo, or %NULL on error
         */
        get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo;
        /**
         * This returns the summary information for the folder. This array
         * should not be modified, and must be freed with
         * camel_folder_free_summary().
         * @returns an array of UID-s of #CamelMessageInfo
         */
        get_summary(): string[];
        /**
         * Get the list of UIDs available in a folder. This routine is useful
         * for finding what messages are available when the folder does not
         * support summaries. The returned array should not be modified, and
         * must be freed by passing it to camel_folder_free_uids().
         * @returns a GPtrArray of UIDs corresponding to the messages available in the folder
         */
        get_uids(): string[];
        /**
         * Returns the known-uncached uids from a list of uids. It may return uids
         * which are locally cached but should never filter out a uid which is not
         * locally cached. Free the result by called camel_folder_free_uids().
         * Frees the array of UIDs returned by camel_folder_get_uids().
         * @param uids the array of uids to filter down to uncached ones.
         */
        get_uncached_uids(uids: string[]): string[];
        get_unread_message_count(): number;
        /**
         * Get whether or not the folder has a summary.
         * @returns %TRUE if a summary is available or %FALSE otherwise
         */
        has_summary_capability(): boolean;
        is_frozen(): boolean;
        /**
         * Locks `folder`. Unlock it with camel_folder_unlock().
         */
        lock(): void;
        /**
         * Lets the `folder` know that it should refresh its content
         * the next time from fresh. This is useful for remote accounts,
         * to fully re-check the folder content against the server.
         */
        prepare_content_refresh(): void;
        /**
         * Delete the local cache of all messages between these uids.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_folder_purge_message_cache_finish() to get the result of the
         * operation.
         * @param start_uid the start message UID
         * @param end_uid the end message UID
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        purge_message_cache(
            start_uid: string,
            end_uid: string,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_folder_purge_message_cache().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on failure
         */
        purge_message_cache_finish(result: Gio.AsyncResult): boolean;
        /**
         * Delete the local cache of all messages between these uids.
         * @param start_uid the start message UID
         * @param end_uid the end message UID
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on failure
         */
        purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously synchronizes a folder's summary with its backing store.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_folder_refresh_info_finish() to get the result of the operation.
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        refresh_info(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_folder_refresh_info().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        refresh_info_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronizes a folder's summary with its backing store.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Marks `folder` as renamed.
         *
         * This also emits the #CamelFolder::renamed signal from an idle source on
         * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
         *
         * NOTE: This is an internal function used by camel stores, no locking
         * is performed on the folder.
         * @param new_name new name for the folder
         */
        rename(new_name: string): void;
        /**
         * Searches the folder for messages matching the given search expression.
         * @param expression a search expression
         * @param cancellable a #GCancellable
         * @returns a #GPtrArray of uids of matching messages. The caller must free the list and each of the elements when it is done.
         */
        search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[];
        /**
         * Search a subset of uid's for an expression match.
         * @param expression search expression
         * @param uids array of uid's to match against.
         * @param cancellable a #GCancellable
         * @returns a #GPtrArray of uids of matching messages. The caller must free the list and each of the elements when it is done.
         */
        search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[];
        /**
         * Free the result of a search as gotten by camel_folder_search_by_expression()
         * or camel_folder_search_by_uids().
         * @param result search results to free
         */
        search_free(result: string[]): void;
        /**
         * Sets a description of the folder suitable for displaying to the user.
         * @param description a description of the folder
         */
        set_description(description: string): void;
        /**
         * Sets the display name for the folder.
         * @param display_name a display name for the folder
         */
        set_display_name(display_name: string): void;
        /**
         * Sets folder flags (bit-or of #CamelFolderFlags) for the `folder`.
         * @param folder_flags flags (bit-or of #CamelFolderFlags) to set
         */
        set_flags(folder_flags: number): void;
        /**
         * Sets the fully qualified name of the folder.
         * @param full_name a fully qualified name for the folder
         */
        set_full_name(full_name: string): void;
        /**
         * Sets whether folder locking (camel_folder_lock() and camel_folder_unlock())
         * should be used. When set to %FALSE, the two functions do nothing and simply
         * return.
         * @param skip_folder_lock a value to set
         */
        set_lock_async(skip_folder_lock: boolean): void;
        /**
         * Sets whether the messages in this `folder` should be marked
         * as seen automatically. An inconsistent state means to use
         * global option.
         * @param mark_seen a #CamelThreeState as the value to set
         */
        set_mark_seen(mark_seen: ThreeState): void;
        /**
         * Sets the `timeout` in milliseconds for marking messages
         * as seen in this `folder`. Whether the timeout is used
         * depends on camel_folder_get_mark_seen().
         * @param timeout a timeout in milliseconds
         */
        set_mark_seen_timeout(timeout: number): void;
        /**
         * Sets those flags specified by `mask` to the values specified by `set`
         * on the indicated message. (This may or may not persist after the
         * folder or store is closed. See camel_folder_get_permanent_flags())
         *
         * E.g. to set the deleted flag and clear the draft flag, use
         * camel_folder_set_message_flags (folder, uid, CAMEL_MESSAGE_DELETED|CAMEL_MESSAGE_DRAFT, CAMEL_MESSAGE_DELETED);
         * @param uid the UID of a message in @folder
         * @param mask a mask of #CamelMessageFlags bit-or values to use
         * @param set the flags to ser, also bit-or of #CamelMessageFlags
         * @returns %TRUE if the flags were changed or %FALSE otherwise
         */
        set_message_flags(uid: string, mask: number, set: number): boolean;
        set_message_user_flag(uid: string, name: string, value: boolean): void;
        set_message_user_tag(uid: string, name: string, value: string): void;
        /**
         * Sorts the array of UIDs.
         * @param uids array of uids
         */
        sort_uids(uids: string[]): void;
        /**
         * Synchronizes any changes that have been made to `folder` to its backing
         * store asynchronously, optionally expunging deleted messages as well.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_folder_synchronize_finish() to get the result of the operation.
         * @param expunge whether to expunge after synchronizing
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        synchronize(
            expunge: boolean,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_folder_synchronize().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        synchronize_finish(result: Gio.AsyncResult): boolean;
        /**
         * Asynchronously ensure that a message identified by `message_uid` has been
         * synchronized in `folder` so that calling camel_folder_get_message() on it
         * later will work in offline mode.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_folder_synchronize_message_finish() to get the result of the
         * operation.
         * @param message_uid a message UID
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        synchronize_message(
            message_uid: string,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_folder_synchronize_message().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        synchronize_message_finish(result: Gio.AsyncResult): boolean;
        /**
         * Ensure that a message identified by `message_uid` has been synchronized in
         * `folder` so that calling camel_folder_get_message() on it later will work
         * in offline mode.
         * @param message_uid a message UID
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Synchronizes any changes that have been made to `folder` to its
         * backing store, optionally expunging deleted messages as well.
         * @param expunge whether to expunge after synchronizing
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets a #CamelFolderSummary of the folder. It consumes the `summary`.
         *
         * This is supposed to be called only by the descendants of
         * the #CamelFolder and only at the construction time. Calling
         * this function twice yeilds to an error.
         * @param summary a #CamelFolderSummary
         */
        take_folder_summary(summary: FolderSummary): void;
        /**
         * Thaws the folder and emits any pending folder_changed
         * signals.
         */
        thaw(): void;
        /**
         * Asynchronously copies or moves messages from one folder to another.
         * If the `source` or `destination` folders have the same parent store,
         * this may be more efficient than using camel_folder_append_message().
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_folder_transfer_messages_to_finish() to get the result of the
         * operation.
         * @param message_uids message UIDs in @source
         * @param destination the destination #CamelFolder
         * @param delete_originals whether or not to delete the original messages
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        transfer_messages_to(
            message_uids: string[],
            destination: Folder,
            delete_originals: boolean,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_folder_transfer_messages_to().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        transfer_messages_to_finish(result: Gio.AsyncResult): [boolean, string[] | null];
        /**
         * Copies or moves messages from one folder to another.  If the
         * `source` and `destination` folders have the same parent_store, this
         * may be more efficient than using camel_folder_append_message_sync().
         * @param message_uids message UIDs in @source
         * @param destination the destination #CamelFolder
         * @param delete_originals whether or not to delete the original messages
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on failure
         */
        transfer_messages_to_sync(
            message_uids: string[],
            destination: Folder,
            delete_originals: boolean,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string[] | null];
        /**
         * Unlocks `folder,` previously locked with camel_folder_lock().
         */
        unlock(): void;
    }

    module FolderSearch {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FolderSearch extends GObject.Object {
        static $gtype: GObject.GType<FolderSearch>;

        // Constructors of Camel.FolderSearch

        constructor(properties?: Partial<FolderSearch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FolderSearch;

        // Own static methods of Camel.FolderSearch

        /**
         * Increases time `t` by the given number of months (or decreases, if
         * `months` is negative).
         * @param t Initial time
         * @param months number of months to add or subtract
         */
        static util_add_months(t: number, months: number): number;
        /**
         * Compares date portion of the two date-time values, first converted
         * into the local time zone. The returned value is like with strcmp().
         * @param datetime1 a time_t-like value of the first date-time
         * @param datetime2 a time_t-like value of the second date-time
         */
        static util_compare_date(datetime1: number, datetime2: number): number;
        /**
         * Calculates a hash of the Message-ID header value `message_id`.
         * @param message_id a raw Message-ID header value
         * @param needs_decode whether the @message_id requires camel_header_msgid_decode() first
         */
        static util_hash_message_id(message_id: string, needs_decode: boolean): number;
        /**
         * Implementation of 'make-time' function, which expects one argument,
         * a string or an integer, to be converted into time_t.
         * @param argc number of arguments in @argv
         * @param argv array or arguments
         */
        static util_make_time(argc: number, argv: SExpResult): number;

        // Own methods of Camel.FolderSearch

        /**
         * Run a search.  Search must have had Folder already set on it, and
         * it must implement summaries.
         * @param expr a search expression to run
         * @param cancellable a #GCancellable
         * @returns Number of messages that match the query.
         */
        count(expr: string, cancellable?: Gio.Cancellable | null): number;
        /**
         * Frees result of camel_folder_search_search() call.
         * @param result a result to free
         */
        free_result(result?: string[] | null): void;
        get_current_message_info(): MessageInfo | null;
        get_current_summary(): string[];
        get_folder(): Folder;
        get_only_cached_messages(): boolean;
        get_summary(): string[];
        get_summary_empty(): boolean;
        /**
         * Run a search.  Search must have had Folder already set on it, and
         * it must implement summaries.
         * @param expr a search expression to run
         * @param uids to search against, NULL for all uid's.
         * @param cancellable a #GCancellable
         * @returns a #GPtrArray with matching UIDs,    or %NULL on error. Use camel_folder_search_free_result() to free it when    no longer needed.
         */
        search(expr: string, uids: string[], cancellable?: Gio.Cancellable | null): string[];
        /**
         * Set the index representing the contents of all messages
         * in this folder.  If this is not set, then the folder implementation
         * should sub-class the CamelFolderSearch and provide its own
         * body-contains function.
         * @param body_index a #CamelIndex
         */
        set_body_index(body_index?: Index | null): void;
        /**
         * Sets, or unsets, the `info` as the currently processing #CamelMessageInfo.
         * The function adds its own reference to `info,` if not %NULL.
         * @param info a #CamelMessageInfo
         */
        set_current_message_info(info?: MessageInfo | null): void;
        /**
         * Set the folder attribute of the search. This can be used to perform a slow-search
         * when indexes and so forth are not available. Or for use by subclasses.
         * @param folder a #CamelFolder
         */
        set_folder(folder: Folder): void;
        /**
         * Sets whether only locally cached messages can be searched. The default
         * value is %FALSE, which means that when a message is required and it is
         * not available locally, then it is downloaded from the server, if possible.
         * @param only_cached_messages a value to set
         */
        set_only_cached_messages(only_cached_messages: boolean): void;
        /**
         * Set the array of summary objects representing the span of the search.
         *
         * If this is not set, then a subclass must provide the functions
         * for searching headers and for the match-all operator.
         * @param summary An array of UID-s of #CamelMessageInfo.
         */
        set_summary(summary: string[]): void;
        /**
         * Sets, or unsets, the `info` as the currently processing #CamelMessageInfo.
         * Unlike camel_folder_search_set_current_message_info(), this function
         * assumes ownership of the `info,` if not %NULL.
         * @param info a #CamelMessageInfo
         */
        take_current_message_info(info?: MessageInfo | null): void;
    }

    module FolderSummary {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            deleted_count: number;
            deletedCount: number;
            folder: Folder;
            junk_count: number;
            junkCount: number;
            junk_not_deleted_count: number;
            junkNotDeletedCount: number;
            saved_count: number;
            savedCount: number;
            unread_count: number;
            unreadCount: number;
            visible_count: number;
            visibleCount: number;
        }
    }

    class FolderSummary extends GObject.Object {
        static $gtype: GObject.GType<FolderSummary>;

        // Own properties of Camel.FolderSummary

        /**
         * How many deleted infos is saved in a summary.
         */
        get deleted_count(): number;
        /**
         * How many deleted infos is saved in a summary.
         */
        get deletedCount(): number;
        /**
         * The #CamelFolder to which the folder summary belongs.
         */
        get folder(): Folder;
        /**
         * How many junk infos is saved in a summary.
         */
        get junk_count(): number;
        /**
         * How many junk infos is saved in a summary.
         */
        get junkCount(): number;
        /**
         * How many junk and not deleted infos is saved in a summary.
         */
        get junk_not_deleted_count(): number;
        /**
         * How many junk and not deleted infos is saved in a summary.
         */
        get junkNotDeletedCount(): number;
        /**
         * How many infos is saved in a summary.
         */
        get saved_count(): number;
        /**
         * How many infos is saved in a summary.
         */
        get savedCount(): number;
        /**
         * How many unread infos is saved in a summary.
         */
        get unread_count(): number;
        /**
         * How many unread infos is saved in a summary.
         */
        get unreadCount(): number;
        /**
         * How many visible (not deleted and not junk) infos is saved in a summary.
         */
        get visible_count(): number;
        /**
         * How many visible (not deleted and not junk) infos is saved in a summary.
         */
        get visibleCount(): number;

        // Constructors of Camel.FolderSummary

        constructor(properties?: Partial<FolderSummary.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](folder: Folder): FolderSummary;

        // Own signals of Camel.FolderSummary

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'changed', callback: (_source: this) => void): number;
        connect_after(signal: 'changed', callback: (_source: this) => void): number;
        emit(signal: 'changed'): void;

        // Own static methods of Camel.FolderSummary

        /**
         * Free's array and its elements returned from camel_folder_summary_get_array().
         * @param array a #GPtrArray returned from camel_folder_summary_get_array()
         */
        static free_array(array: string[]): void;

        // Own virtual methods of Camel.FolderSummary

        /**
         * Retrieve a summary item by uid.
         *
         * A referenced to the summary item is returned, which may be
         * ref'd or free'd as appropriate.
         * @param uid a uid
         */
        vfunc_message_info_from_uid(uid: string): MessageInfo | null;
        /**
         * Create a new info record from a header.
         * @param headers rfc822 headers as #CamelNameValueArray
         */
        vfunc_message_info_new_from_headers(headers: NameValueArray): MessageInfo;
        /**
         * Create a summary item from a message.
         * @param message a #CamelMimeMessage object
         */
        vfunc_message_info_new_from_message(message: MimeMessage): MessageInfo;
        /**
         * Create a new info record from a parser.  If the parser cannot
         * determine a uid, then none will be assigned.
         *
         * If indexing is enabled, and the parser cannot determine a new uid, then
         * one is automatically assigned.
         *
         * If indexing is enabled, then the content will be indexed based
         * on this new uid.  In this case, the message info MUST be
         * added using :add().
         *
         * Once complete, the parser will be positioned at the end of
         * the message.
         * @param parser a #CamelMimeParser object
         */
        vfunc_message_info_new_from_parser(parser: MimeParser): MessageInfo;
        /**
         * Retrieve the next uid, but as a formatted string.
         */
        vfunc_next_uid_string(): string;
        vfunc_prepare_fetch_all(): void;
        vfunc_summary_header_load(fir?: any | null): boolean;
        vfunc_summary_header_save(): any | null;

        // Own methods of Camel.FolderSummary

        /**
         * Adds a new `info` record to the summary. If the `force_keep_uid` is %FALSE,
         * then a new uid is automatically re-assigned by calling
         * camel_folder_summary_next_uid_string(). It's an error to use
         * `force_keep_uid` when the `info` has none set.
         *
         * The `summary` adds its own reference to `info,` if needed, and any
         * previously loaded info is replaced with the new one.
         * @param info a #CamelMessageInfo
         * @param force_keep_uid whether to keep set UID of the @info
         */
        add(info: MessageInfo, force_keep_uid: boolean): void;
        /**
         * Check if the uid is valid. This isn't very efficient, so it shouldn't be called iteratively.
         * @param uid a uid
         * @returns if the uid is present in the summary or not  (%TRUE or %FALSE)
         */
        check_uid(uid: string): boolean;
        /**
         * Empty the summary contents.
         * @returns whether succeeded
         */
        clear(): boolean;
        /**
         * Get the number of summary items stored in this summary.
         * @returns the number of items in the summary
         */
        count(): number;
        /**
         * Retrieve a summary item by uid.
         *
         * A referenced to the summary item is returned, which may be
         * ref'd or free'd as appropriate.
         * @param uid a uid
         * @returns the summary item, or %NULL if the uid @uid is not available See camel_folder_summary_get_info_flags().
         */
        get(uid: string): MessageInfo | null;
        /**
         * Obtain a copy of the summary array.  This is done atomically,
         * so cannot contain empty entries.
         *
         * Free with camel_folder_summary_free_array()
         * @returns a #GPtrArray of uids
         */
        get_array(): string[];
        /**
         * Returns an array of changed UID-s. A UID is considered changed
         * when its corresponding CamelMesageInfo is 'dirty' or when it has
         * set the #CAMEL_MESSAGE_FOLDER_FLAGGED flag.
         * @returns a #GPtrArray with changed UID-s.    Free it with camel_folder_summary_free_array() when no longer needed.
         */
        get_changed(): string[];
        get_deleted_count(): number;
        get_flags(): number;
        get_folder(): any | null;
        /**
         * Returns hash of current stored 'uids' in summary, where key is 'uid'
         * from the string pool, and value is 1. The returned pointer should
         * be freed with g_hash_table_destroy().
         *
         * Note: When searching for values always use uids from the string pool.
         */
        get_hash(): GLib.HashTable<string, number>;
        get_index(): Index | null;
        /**
         * Retrieve CamelMessageInfo::flags for a message info with UID `uid`.
         * This is much quicker than camel_folder_summary_get(), because it
         * doesn't require reading the message info from a disk.
         * @param uid a uid
         * @returns the flags currently stored for message info with UID @uid,          or (~0) on error
         */
        get_info_flags(uid: string): number;
        get_junk_count(): number;
        get_junk_not_deleted_count(): number;
        get_next_uid(): number;
        get_saved_count(): number;
        get_timestamp(): number;
        get_unread_count(): number;
        get_version(): number;
        get_visible_count(): number;
        /**
         * Loads a summary header for the `summary,` which corresponds to `folder_name`
         * provided by `store`.
         * @param store a #CamelStore
         * @param folder_name a folder name corresponding to @summary
         * @returns whether succeeded
         */
        header_load(store: any | null, folder_name: string): boolean;
        /**
         * Saves summary header information into the disk. The function does
         * nothing, if the summary doesn't support save to disk.
         * @returns whether succeeded
         */
        header_save(): boolean;
        /**
         * Create a new info record from a header.
         * @param headers rfc822 headers as #CamelNameValueArray
         * @returns a newly created #CamelMessageInfo. Unref it   with g_object_unref(), when done with it.
         */
        info_new_from_headers(headers: NameValueArray): MessageInfo;
        /**
         * Create a summary item from a message.
         * @param message a #CamelMimeMessage object
         * @returns a newly created #CamelMessageInfo. Unref it   with g_object_unref(), when done with it.
         */
        info_new_from_message(message: MimeMessage): MessageInfo;
        /**
         * Create a new info record from a parser.  If the parser cannot
         * determine a uid, then none will be assigned.
         *
         * If indexing is enabled, and the parser cannot determine a new uid, then
         * one is automatically assigned.
         *
         * If indexing is enabled, then the content will be indexed based
         * on this new uid.  In this case, the message info MUST be
         * added using :add().
         *
         * Once complete, the parser will be positioned at the end of
         * the message.
         * @param parser a #CamelMimeParser object
         * @returns a newly created #CamelMessageInfo. Unref it   with g_object_unref(), when done with it.
         */
        info_new_from_parser(parser: MimeParser): MessageInfo;
        /**
         * Loads the summary from the disk. It also saves any pending
         * changes first.
         * @returns whether succeeded
         */
        load(): boolean;
        /**
         * Locks `summary`. Unlock it with camel_folder_summary_unlock().
         */
        lock(): void;
        /**
         * Generate a new unique uid value as an integer.  This
         * may be used to create a unique sequence of numbers.
         * @returns the next unique uid value
         */
        next_uid(): number;
        /**
         * Retrieve the next uid, but as a formatted string.
         * @returns the next uid as an unsigned integer string. This string must be freed by the caller.
         */
        next_uid_string(): string;
        peek_loaded(uid: string): MessageInfo | null;
        /**
         * Loads all infos into memory, if they are not yet and ensures
         * they will not be freed in next couple minutes. Call this function
         * before any mass operation or when all message infos will be needed,
         * for better performance.
         */
        prepare_fetch_all(): void;
        /**
         * Remove a specific `info` record from the summary.
         * @param info a #CamelMessageInfo
         * @returns Whether the @info was found and removed from the @summary.
         */
        remove(info: MessageInfo): boolean;
        /**
         * Remove a specific info record from the summary, by `uid`.
         * @param uid a uid
         * @returns Whether the @uid was found and removed from the @summary.
         */
        remove_uid(uid: string): boolean;
        /**
         * Remove a specific info record from the summary, by `uid`.
         * @param uids a GList of uids
         * @returns Whether the @uid was found and removed from the @summary.
         */
        remove_uids(uids: string[]): boolean;
        /**
         * Updates internal counts based on the flags in `info`.
         * @param info a #CamelMessageInfo
         * @returns Whether any count changed
         */
        replace_flags(info: MessageInfo): boolean;
        /**
         * Saves the content of the `summary` to disk. It does nothing,
         * when the summary is not changed or when it doesn't support
         * permanent save.
         * @returns whether succeeded
         */
        save(): boolean;
        /**
         * Sets flags of the `summary,` a bit-or of #CamelFolderSummaryFlags.
         * @param flags flags to set
         */
        set_flags(flags: number): void;
        /**
         * Set the index used to index body content.  If the index is %NULL, or
         * not set (the default), no indexing of body content will take place.
         * @param index a #CamelIndex
         */
        set_index(index?: Index | null): void;
        /**
         * Set the next minimum uid available.  This can be used to
         * ensure new uid's do not clash with existing uid's.
         * @param uid The next minimum uid to assign.  To avoid clashing uid's, set this to the uid of a given messages + 1.
         */
        set_next_uid(uid: number): void;
        /**
         * Sets timestamp of the `summary,` provided by the descendants. This doesn't
         * change the 'dirty' flag of the `summary`.
         * @param timestamp a timestamp to set
         */
        set_timestamp(timestamp: number): void;
        /**
         * Sets version of the `summary`.
         * @param version version to set
         */
        set_version(version: number): void;
        /**
         * Mark the summary as changed, so that a save will force it to be
         * written back to disk.
         */
        touch(): void;
        /**
         * Unlocks `summary,` previously locked with camel_folder_summary_lock().
         */
        unlock(): void;
    }

    module GpgContext {
        // Constructor properties interface

        interface ConstructorProps extends CipherContext.ConstructorProps {
            always_trust: boolean;
            alwaysTrust: boolean;
            locate_keys: boolean;
            locateKeys: boolean;
            prefer_inline: boolean;
            preferInline: boolean;
        }
    }

    class GpgContext extends CipherContext {
        static $gtype: GObject.GType<GpgContext>;

        // Own properties of Camel.GpgContext

        get always_trust(): boolean;
        set always_trust(val: boolean);
        get alwaysTrust(): boolean;
        set alwaysTrust(val: boolean);
        get locate_keys(): boolean;
        set locate_keys(val: boolean);
        get locateKeys(): boolean;
        set locateKeys(val: boolean);
        get prefer_inline(): boolean;
        set prefer_inline(val: boolean);
        get preferInline(): boolean;
        set preferInline(val: boolean);

        // Constructors of Camel.GpgContext

        constructor(properties?: Partial<GpgContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](session?: Session | null): GpgContext;

        // Own methods of Camel.GpgContext

        get_always_trust(): boolean;
        /**
         * Receives information about a key stored in `data` of size `data_size`.
         *
         * The `flags` argument is currently unused and should be set to 0.
         *
         * Free the returned `out_infos` with g_slist_free_full (infos, camel_gpg_key_info_free);
         * when no longer needed.
         * @param data the public key data
         * @param data_size the @data size
         * @param flags flags for the operation
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns whether succeeded
         */
        get_key_data_info_sync(
            data: number,
            data_size: number,
            flags: number,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, GpgKeyInfo[]];
        /**
         * Returns, whether gpg can locate keys using Web Key Directory (WKD) lookup
         * when encrypting messages. The default is %TRUE.
         * @returns whether gpg can locate keys using Web Key Directory (WKD) lookup    when encrypting messages.
         */
        get_locate_keys(): boolean;
        get_prefer_inline(): boolean;
        /**
         * Receives information about a key `keyid`.
         *
         * The `keyid` can be either key ID or an email address.
         *
         * The `flags` argument is currently unused and should be set to 0.
         *
         * Free the returned `out_infos` with g_slist_free_full (infos, camel_gpg_key_info_free);
         * when no longer needed.
         * @param keyid a key ID or an email address
         * @param flags flags for the operation
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns whether succeeded
         */
        get_public_key_info_sync(
            keyid: string,
            flags: number,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, GpgKeyInfo[]];
        /**
         * Returns a public key with `keyid`.
         *
         * The `keyid` can be either key ID or an email address.
         *
         * The `flags` argument is currently unused and should be set to 0.
         *
         * The `out_data` content should be freed with g_free(), when
         * no longer needed.
         * @param keyid a key ID or an email address
         * @param flags flags for the operation
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns whether succeeded
         */
        get_public_key_sync(
            keyid: string,
            flags: number,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, number, number];
        /**
         * Checks whether there exists a public key with `keyid`.
         *
         * The `keyid` can be either key ID or an email address.
         * @param keyid a key ID or an email address
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns whether the key could be found
         */
        has_public_key_sync(keyid: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Imports a (public) key provided in a binary form stored in the `data`
         * of size `data_size`.
         * @param data the public key data
         * @param data_size the @data size
         * @param flags bit-or of CamelPgpImportFlags, flags for the operation
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns whether succeeded
         */
        import_key_sync(data: number, data_size: number, flags: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the `always_trust` flag on the gpg context which is used for
         * encryption.
         * @param always_trust always trust flag
         */
        set_always_trust(always_trust: boolean): void;
        /**
         * Sets `trust` level on the key `keyid`.
         *
         * The `keyid` can be either key ID or an email address.
         * @param keyid a key ID or an email address
         * @param trust a #CamelGpgTrust to set
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns whether succeeded
         */
        set_key_trust_sync(keyid: string, trust: GpgTrust, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the `locate_keys` on the gpg context which is used to instruct
         * gpg to locate keys using Web Key Directory (WKD) lookup when encrypting
         * messages.
         * @param locate_keys value to set
         */
        set_locate_keys(locate_keys: boolean): void;
        /**
         * Sets the `prefer_inline` flag on the gpg context.
         * @param prefer_inline whether prefer inline sign/encrypt
         */
        set_prefer_inline(prefer_inline: boolean): void;
    }

    module HTMLParser {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class HTMLParser extends GObject.Object {
        static $gtype: GObject.GType<HTMLParser>;

        // Constructors of Camel.HTMLParser

        constructor(properties?: Partial<HTMLParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): HTMLParser;

        // Own methods of Camel.HTMLParser

        attr(name: string): string;
        /**
         * Provides parsed array of values and attributes. Both arrays are
         * owned by the `hp`.
         * @param values an output #GPtrArray with values, or %NULL
         * @returns a #GPtrArray of parsed attributes
         */
        attr_list(values?: string[] | null): [string[], string[] | null];
        left(lenp: number): string;
        set_data(start: string, len: number, last: number): void;
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
        step(datap: string, lenp: number): HTMLParserState;
        tag(): string;
    }

    module Index {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Index extends GObject.Object {
        static $gtype: GObject.GType<Index>;

        // Own fields of Camel.Index

        path: string;
        version: number;
        flags: number;
        state: number;
        normalize: IndexNorm;
        normalize_data: any;

        // Constructors of Camel.Index

        constructor(properties?: Partial<Index.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Camel.Index

        vfunc_add_name(name: string): IndexName | null;
        vfunc_compress(): number;
        vfunc_delete_(): number;
        /**
         * Deletes the given `name` from `index`.
         * @param name a name to delete
         */
        vfunc_delete_name(name: string): void;
        vfunc_find(word: string): IndexCursor | null;
        vfunc_find_name(name: string): IndexCursor | null;
        vfunc_has_name(name: string): number;
        vfunc_rename(path: string): number;
        vfunc_sync(): number;
        vfunc_words(): IndexCursor | null;
        vfunc_write_name(idn: IndexName): number;

        // Own methods of Camel.Index

        add_name(name: string): IndexName | null;
        compress(): number;
        construct(path: string, flags: number): void;
        ['delete'](): number;
        /**
         * Deletes the given `name` from `index`.
         * @param name a name to delete
         */
        delete_name(name: string): void;
        find(word: string): IndexCursor | null;
        find_name(name: string): IndexCursor | null;
        has_name(name: string): number;
        rename(path: string): number;
        set_normalize(func: IndexNorm): void;
        sync(): number;
        words(): IndexCursor | null;
        write_name(idn: IndexName): number;
    }

    module IndexCursor {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class IndexCursor extends GObject.Object {
        static $gtype: GObject.GType<IndexCursor>;

        // Own fields of Camel.IndexCursor

        index: Index;

        // Constructors of Camel.IndexCursor

        constructor(properties?: Partial<IndexCursor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Camel.IndexCursor

        vfunc_next(): string;

        // Own methods of Camel.IndexCursor

        next(): string;
    }

    module IndexName {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class IndexName extends GObject.Object {
        static $gtype: GObject.GType<IndexName>;

        // Own fields of Camel.IndexName

        index: Index;
        name: string;
        buffer: Uint8Array;

        // Constructors of Camel.IndexName

        constructor(properties?: Partial<IndexName.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Camel.IndexName

        vfunc_add_buffer(buffer: string, len: number): number;
        vfunc_add_word(word: string): void;

        // Own methods of Camel.IndexName

        add_buffer(buffer: string, len: number): number;
        add_word(word: string): void;
    }

    module InternetAddress {
        // Constructor properties interface

        interface ConstructorProps extends Address.ConstructorProps {}
    }

    class InternetAddress extends Address {
        static $gtype: GObject.GType<InternetAddress>;

        // Constructors of Camel.InternetAddress

        constructor(properties?: Partial<InternetAddress.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): InternetAddress;

        // Own static methods of Camel.InternetAddress

        /**
         * Encode a single address ready for internet usage.  Header folding
         * as per rfc822 is also performed, based on the length *`len`.  If `len`
         * is %NULL, then no folding will occur.
         *
         * Note: The value at *`in` will be updated based on any linewrapping done
         * @param len the length of the line the address is being appended to
         * @param name the unencoded real name associated with the address
         * @param addr the routing address
         */
        static encode_address(len: number | null, name: string, addr: string): string;
        /**
         * Function to format a single address, suitable for display.
         * @param name a name, quotes may be stripped from it
         * @param addr an rfc822 routing address
         */
        static format_address(name: string, addr: string): string;

        // Own methods of Camel.InternetAddress

        /**
         * Add a new internet address to `addr`.
         * @param name name associated with the new address
         * @param address routing address associated with the new address
         * @returns the index of added entry
         */
        add(name: string, address: string): number;
        /**
         * Ensures that all email address' domains will be ASCII encoded,
         * which means that any non-ASCII letters will be properly encoded.
         * This includes IDN (Internationalized Domain Names).
         */
        ensure_ascii_domains(): void;
        /**
         * Find an address by address.
         * @param address address to lookup
         * @returns the index of the address, or -1 if not found
         */
        find_address(address: string): [number, string];
        /**
         * Find address by real name.
         * @param name name to lookup
         * @returns the index of the address matching the name, or -1 if no match was found
         */
        find_name(name: string): [number, string];
        /**
         * Get the address at `index`.
         * @param index address's array index
         * @returns %TRUE if such an address exists, or %FALSE otherwise
         */
        get(index: number): [boolean, string, string];
        /**
         * Checks the addresses in `addr` for any suspicious characters in the domain
         * name and coverts those domains into their representation. In contrast to
         * camel_internet_address_ensure_ascii_domains(), this converts the domains
         * into ASCII only when needed, as returned by camel_hostname_utils_requires_ascii().
         * @returns %TRUE, when converted at least one address
         */
        sanitize_ascii_domain(): boolean;
    }

    module KeyFile {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class KeyFile extends GObject.Object {
        static $gtype: GObject.GType<KeyFile>;

        // Constructors of Camel.KeyFile

        constructor(properties?: Partial<KeyFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, flags: number, version: string): KeyFile;

        // Own methods of Camel.KeyFile

        ['delete'](): number;
        /**
         * Read the next block of data from the key file.  Returns the number of
         * records.
         * @param start The record pointer.  This will be set to the next record pointer on success.
         * @param records Records, allocated, must be freed with g_free, if != NULL.
         * @returns -1 on io error.
         */
        read(start: _block_t, records?: _key_t[] | null): number;
        rename(path: string): number;
        /**
         * Write a new list of records to the key file.
         * @param parent a #camel_block_t
         * @param records an array of #camel_key_t to write
         * @returns -1 on io error.  The key file will remain unchanged.
         */
        write(parent: _block_t, records: _key_t[]): number;
    }

    module KeyTable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class KeyTable extends GObject.Object {
        static $gtype: GObject.GType<KeyTable>;

        // Constructors of Camel.KeyTable

        constructor(properties?: Partial<KeyTable.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](bs: BlockFile, root: _block_t): KeyTable;

        // Own methods of Camel.KeyTable

        add(key: string, data: _block_t, flags: number): _key_t;
        lookup(keyid: _key_t, key: string, flags: number): _block_t;
        next(next: _key_t, keyp: string, flagsp: number, datap: _block_t): _key_t;
        set_data(keyid: _key_t, data: _block_t): boolean;
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
        set_flags(keyid: _key_t, flags: number, set: number): boolean;
        sync(): number;
    }

    module LocalSettings {
        // Constructor properties interface

        interface ConstructorProps extends StoreSettings.ConstructorProps {
            filter_all: boolean;
            filterAll: boolean;
            filter_junk: boolean;
            filterJunk: boolean;
            maildir_alt_flag_sep: boolean;
            maildirAltFlagSep: boolean;
            path: string;
        }
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class LocalSettings extends StoreSettings {
        static $gtype: GObject.GType<LocalSettings>;

        // Own properties of Camel.LocalSettings

        get filter_all(): boolean;
        set filter_all(val: boolean);
        get filterAll(): boolean;
        set filterAll(val: boolean);
        get filter_junk(): boolean;
        set filter_junk(val: boolean);
        get filterJunk(): boolean;
        set filterJunk(val: boolean);
        get maildir_alt_flag_sep(): boolean;
        set maildir_alt_flag_sep(val: boolean);
        get maildirAltFlagSep(): boolean;
        set maildirAltFlagSep(val: boolean);
        get path(): string;
        set path(val: string);

        // Constructors of Camel.LocalSettings

        constructor(properties?: Partial<LocalSettings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Camel.LocalSettings

        /**
         * Thread-safe variation of camel_local_settings_get_path().
         * Use this function when accessing `settings` from multiple threads.
         *
         * The returned string should be freed with g_free() when no longer needed.
         * @returns a newly-allocated copy of #CamelLocalSettings:path
         */
        dup_path(): string;
        /**
         * Returns whether apply filters in all folders.
         * @returns whether to apply filters in all folders
         */
        get_filter_all(): boolean;
        /**
         * Returns whether to check new messages for junk.
         * @returns whether to check new messages for junk
         */
        get_filter_junk(): boolean;
        /**
         * Returns, whether the Maildir provider should use alternative
         * flag separator in the file name. When %TRUE, uses an exclamation
         * mark (!), when %FALSE, uses the colon (:). The default
         * is %FALSE, to be consistent with the Maildir specification.
         * The flag separator is flipped on the Windows build.
         * @returns whether the Maildir provider should use an alternative flag separator
         */
        get_maildir_alt_flag_sep(): boolean;
        /**
         * Returns the file path to the root of the local mail store.
         * @returns the file path to the local store
         */
        get_path(): string;
        /**
         * Sets whether to apply filters in all folders.
         * @param filter_all whether to apply filters in all folders
         */
        set_filter_all(filter_all: boolean): void;
        /**
         * Sets whether to check new messages for junk.
         * @param filter_junk whether to check new messages for junk
         */
        set_filter_junk(filter_junk: boolean): void;
        /**
         * Sets whether Maildir should use alternative flag separator.
         * See camel_local_settings_get_maildir_alt_flag_sep() for more
         * information on what it means.
         *
         * Note: Change to this setting takes effect only for newly created
         *     Maildir stores.
         * @param maildir_alt_flag_sep value to set
         */
        set_maildir_alt_flag_sep(maildir_alt_flag_sep: boolean): void;
        /**
         * Sets the file path to the root of the local mail store.  Any
         * trailing directory separator characters will be stripped off
         * of the #CamelLocalSettings:path property.
         * @param path the file path to the local store
         */
        set_path(path: string): void;
    }

    module Medium {
        // Constructor properties interface

        interface ConstructorProps extends DataWrapper.ConstructorProps {
            content: DataWrapper;
        }
    }

    abstract class Medium extends DataWrapper {
        static $gtype: GObject.GType<Medium>;

        // Own properties of Camel.Medium

        get content(): DataWrapper;
        set content(val: DataWrapper);

        // Constructors of Camel.Medium

        constructor(properties?: Partial<Medium.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Camel.Medium

        /**
         * Adds a header to a #CamelMedium.
         * @param name name of the header
         * @param value value of the header
         */
        vfunc_add_header(name: string, value: string): void;
        /**
         * Gets an array of all header name/value pairs. The values will be
         * decoded to UTF-8 for any headers that are recognized by Camel.
         * See also camel_medium_get_headers().
         */
        vfunc_dup_headers(): NameValueArray;
        /**
         * Gets a data wrapper that represents the content of the medium,
         * without its headers.
         */
        vfunc_get_content(): DataWrapper | null;
        /**
         * Gets the value of the named header in the medium, or %NULL if
         * it is unset. The caller should not modify or free the data.
         *
         * If the header occurs more than once, only retrieve the first
         * instance of the header.  For multi-occuring headers, use
         * camel_medium_dup_headers() or camel_medium_get_headers().
         * @param name the name of the header
         */
        vfunc_get_header(name: string): string | null;
        /**
         * Gets an array of all header name/value pairs. The values will be
         * decoded to UTF-8 for any headers that are recognized by Camel.
         * See also camel_medium_dup_headers().
         */
        vfunc_get_headers(): NameValueArray;
        /**
         * Removes the named header from the medium.  All occurances of the
         * header are removed.
         * @param name the name of the header
         */
        vfunc_remove_header(name: string): void;
        /**
         * Sets the content of `medium` to be `content`.
         * @param content a #CamelDataWrapper object
         */
        vfunc_set_content(content?: DataWrapper | null): void;
        /**
         * Sets the value of a header.  Any other occurances of the header
         * will be removed.  Setting a %NULL header can be used to remove
         * the header also.
         * @param name name of the header
         * @param value value of the header
         */
        vfunc_set_header(name: string, value?: string | null): void;

        // Own methods of Camel.Medium

        /**
         * Adds a header to a #CamelMedium.
         * @param name name of the header
         * @param value value of the header
         */
        add_header(name: string, value: string): void;
        /**
         * Gets an array of all header name/value pairs. The values will be
         * decoded to UTF-8 for any headers that are recognized by Camel.
         * See also camel_medium_get_headers().
         * @returns the array of headers, which must be freed with camel_name_value_array_free().
         */
        dup_headers(): NameValueArray;
        /**
         * Gets a data wrapper that represents the content of the medium,
         * without its headers.
         * @returns a #CamelDataWrapper containing @medium's content. Can return %NULL.
         */
        get_content(): DataWrapper | null;
        /**
         * Gets the value of the named header in the medium, or %NULL if
         * it is unset. The caller should not modify or free the data.
         *
         * If the header occurs more than once, only retrieve the first
         * instance of the header.  For multi-occuring headers, use
         * camel_medium_dup_headers() or camel_medium_get_headers().
         * @param name the name of the header
         * @returns the value of the named header, or %NULL
         */
        get_header(name: string): string | null;
        /**
         * Gets an array of all header name/value pairs. The values will be
         * decoded to UTF-8 for any headers that are recognized by Camel.
         * See also camel_medium_dup_headers().
         * @returns the array of headers, owned by @medium.
         */
        get_headers(): NameValueArray;
        /**
         * Removes the named header from the medium.  All occurances of the
         * header are removed.
         * @param name the name of the header
         */
        remove_header(name: string): void;
        /**
         * Sets the content of `medium` to be `content`.
         * @param content a #CamelDataWrapper object
         */
        set_content(content?: DataWrapper | null): void;
        /**
         * Sets the value of a header.  Any other occurances of the header
         * will be removed.  Setting a %NULL header can be used to remove
         * the header also.
         * @param name name of the header
         * @param value value of the header
         */
        set_header(name: string, value?: string | null): void;
    }

    module MessageInfo {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            abort_notifications: boolean;
            abortNotifications: boolean;
            cc: string;
            date_received: number;
            dateReceived: number;
            date_sent: number;
            dateSent: number;
            dirty: boolean;
            flags: MessageFlags;
            folder_flagged: boolean;
            folderFlagged: boolean;
            folder_flagged_stamp: number;
            folderFlaggedStamp: number;
            from: string;
            headers: NameValueArray;
            message_id: number;
            messageId: number;
            mlist: string;
            preview: string;
            references: any[];
            size: number;
            subject: string;
            summary: FolderSummary;
            to: string;
            uid: string;
            user_flags: NamedFlags;
            userFlags: NamedFlags;
            user_headers: NameValueArray;
            userHeaders: NameValueArray;
            user_tags: NameValueArray;
            userTags: NameValueArray;
        }
    }

    abstract class MessageInfo extends GObject.Object {
        static $gtype: GObject.GType<MessageInfo>;

        // Own properties of Camel.MessageInfo

        /**
         * Flag, whether the info is currently aborting notifications. It is used to avoid
         * unnecessary 'folder-flagged' and 'dirty' flags changes and also to avoid
         * associated folder's "changed" signal.
         * f
         */
        get abort_notifications(): boolean;
        set abort_notifications(val: boolean);
        /**
         * Flag, whether the info is currently aborting notifications. It is used to avoid
         * unnecessary 'folder-flagged' and 'dirty' flags changes and also to avoid
         * associated folder's "changed" signal.
         * f
         */
        get abortNotifications(): boolean;
        set abortNotifications(val: boolean);
        /**
         * CC address of the associated message.
         */
        get cc(): string;
        set cc(val: string);
        /**
         * Received date of the associated message.
         */
        get date_received(): number;
        set date_received(val: number);
        /**
         * Received date of the associated message.
         */
        get dateReceived(): number;
        set dateReceived(val: number);
        /**
         * Sent Date of the associated message.
         */
        get date_sent(): number;
        set date_sent(val: number);
        /**
         * Sent Date of the associated message.
         */
        get dateSent(): number;
        set dateSent(val: number);
        /**
         * Flag, whether the info is changed and requires save to disk.
         * Compare with CamelMessageInfo:folder-flagged
         */
        get dirty(): boolean;
        set dirty(val: boolean);
        /**
         * Bit-or of #CamelMessageFlags.
         */
        get flags(): MessageFlags;
        set flags(val: MessageFlags);
        /**
         * Flag, whether the info is changed and requires save to
         * the destination store/server. This is different from
         * the CamelMessageInfo:dirty, which takes care of the local
         * information only.
         */
        get folder_flagged(): boolean;
        set folder_flagged(val: boolean);
        /**
         * Flag, whether the info is changed and requires save to
         * the destination store/server. This is different from
         * the CamelMessageInfo:dirty, which takes care of the local
         * information only.
         */
        get folderFlagged(): boolean;
        set folderFlagged(val: boolean);
        /**
         * The 'folder-flagged-stamp' is a stamp of the 'folder-flagged' flag. This stamp
         * changes whenever anything would mark the `mi` 'folder-flagged', regardless the `mi`
         * being already 'folder-flagged'. It can be used to recognize changes
         * on the 'folder-flagged' flag during the time.
         */
        get folder_flagged_stamp(): number;
        /**
         * The 'folder-flagged-stamp' is a stamp of the 'folder-flagged' flag. This stamp
         * changes whenever anything would mark the `mi` 'folder-flagged', regardless the `mi`
         * being already 'folder-flagged'. It can be used to recognize changes
         * on the 'folder-flagged' flag during the time.
         */
        get folderFlaggedStamp(): number;
        /**
         * From address of the associated message.
         */
        get from(): string;
        set from(val: string);
        /**
         * Headers of the associated message. Can be %NULL.
         */
        get headers(): NameValueArray;
        set headers(val: NameValueArray);
        /**
         * Encoded Message-ID of the associated message as a guint64 number,
         * partial MD5 sum. The value can be cast to #CamelSummaryMessageID.
         */
        get message_id(): number;
        set message_id(val: number);
        /**
         * Encoded Message-ID of the associated message as a guint64 number,
         * partial MD5 sum. The value can be cast to #CamelSummaryMessageID.
         */
        get messageId(): number;
        set messageId(val: number);
        /**
         * Mailing list address of the associated message.
         */
        get mlist(): string;
        set mlist(val: string);
        /**
         * Body preview of the associated message. Can be %NULL.
         */
        get preview(): string;
        set preview(val: string);
        /**
         * Encoded In-Reply-To and References headers of the associated message
         * as an array of guint64 numbers, partial MD5 sums. Each value can be
         * cast to #CamelSummaryMessageID.
         */
        get references(): any[];
        set references(val: any[]);
        /**
         * Size of the associated message.
         */
        get size(): number;
        set size(val: number);
        /**
         * Subject of the associated message.
         */
        get subject(): string;
        set subject(val: string);
        /**
         * The #CamelFolderSummary to which the message info belongs, or %NULL.
         * It can be set only during construction of the object.
         */
        get summary(): FolderSummary;
        /**
         * To address of the associated message.
         */
        get to(): string;
        set to(val: string);
        /**
         * A unique ID of the message in its folder.
         */
        get uid(): string;
        set uid(val: string);
        /**
         * User flags for the associated message. Can be %NULL.
         * Unlike user-tags, which can contain various values, the user-flags
         * can only be set or not.
         */
        get user_flags(): NamedFlags;
        set user_flags(val: NamedFlags);
        /**
         * User flags for the associated message. Can be %NULL.
         * Unlike user-tags, which can contain various values, the user-flags
         * can only be set or not.
         */
        get userFlags(): NamedFlags;
        set userFlags(val: NamedFlags);
        /**
         * User-defined headers of the associated message. Can be %NULL.
         */
        get user_headers(): NameValueArray;
        set user_headers(val: NameValueArray);
        /**
         * User-defined headers of the associated message. Can be %NULL.
         */
        get userHeaders(): NameValueArray;
        set userHeaders(val: NameValueArray);
        /**
         * User tags for the associated message. Can be %NULL.
         * Unlike user-flags, which can be set or not, the user-tags
         * can contain various values.
         */
        get user_tags(): NameValueArray;
        set user_tags(val: NameValueArray);
        /**
         * User tags for the associated message. Can be %NULL.
         * Unlike user-flags, which can be set or not, the user-tags
         * can contain various values.
         */
        get userTags(): NameValueArray;
        set userTags(val: NameValueArray);

        // Constructors of Camel.MessageInfo

        constructor(properties?: Partial<MessageInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](summary?: FolderSummary | null): MessageInfo;

        static new_from_headers(summary: FolderSummary | null, headers: NameValueArray): MessageInfo;

        // Own virtual methods of Camel.MessageInfo

        /**
         * Clones the `mi` as a new #CamelMessageInfo and eventually assigns
         * a new #CamelFolderSummary to it. If it's not set, then the same
         * summary as the one with `mi` is used.
         * @param assign_summary parent #CamelFolderSummary object, or %NULL, to set on the clone
         */
        vfunc_clone(assign_summary?: FolderSummary | null): MessageInfo;
        vfunc_dup_user_flags(): NamedFlags | null;
        vfunc_dup_user_tags(): NameValueArray | null;
        vfunc_get_cc(): string;
        vfunc_get_date_received(): number;
        vfunc_get_date_sent(): number;
        vfunc_get_flags(): number;
        vfunc_get_from(): string;
        vfunc_get_headers(): NameValueArray | null;
        /**
         * Encoded Message-ID of the associated message as a guint64 number,
         * partial MD5 sum. The value can be cast to #CamelSummaryMessageID.
         */
        vfunc_get_message_id(): number;
        vfunc_get_mlist(): string;
        vfunc_get_preview(): string | null;
        /**
         * Gets encoded In-Reply-To and References headers of the associated
         * message as an array of guint64 numbers, partial MD5 sums. Each value
         * can be cast to #CamelSummaryMessageID.
         */
        vfunc_get_references(): number[] | null;
        vfunc_get_size(): number;
        vfunc_get_subject(): string;
        vfunc_get_to(): string;
        vfunc_get_user_flag(name: string): boolean;
        vfunc_get_user_flags(): NamedFlags | null;
        vfunc_get_user_header(name: string): string | null;
        vfunc_get_user_headers(): NameValueArray | null;
        vfunc_get_user_tag(name: string): string | null;
        vfunc_get_user_tags(): NameValueArray | null;
        /**
         * Load content of `mi` from the data stored in `record`. The `bdata_ptr` points
         * to the current position of the record->bdata, where the read can continue.
         * Use helper functions camel_util_bdata_get_number() and camel_util_bdata_get_string()
         * to read data from it and also move forward the *bdata_ptr.
         *
         * After successful load of the `mi,` the 'dirty' flag is unset.
         * @param record a #CamelMIRecord to load the @mi from
         * @param bdata_ptr a backend specific data (bdata) pointer
         */
        vfunc_load(record: MIRecord | null, bdata_ptr: string): boolean;
        /**
         * Save the `mi` content to the message info record `record`. It can populate all
         * but the record->bdata value, which is set fro mthe `bdata_str`. Use helper functions
         * camel_util_bdata_put_number() and camel_util_bdata_put_string() to put data into the `bdata_str`.
         * @param record a #CamelMIRecord to populate
         * @param bdata_str a #GString with a string to save as backend specific data (bdata)
         */
        vfunc_save(record: MIRecord | null, bdata_str: GLib.String): boolean;
        /**
         * Sets CC from the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param cc a CC to set
         */
        vfunc_set_cc(cc?: string | null): boolean;
        /**
         * Sets received date (the Received header) of the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param date_received a received date to set
         */
        vfunc_set_date_received(date_received: number): boolean;
        /**
         * Sets sent date (the Date header) of the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param date_sent a sent date to set
         */
        vfunc_set_date_sent(date_sent: number): boolean;
        /**
         * Change the state of the flags on the `mi`. Both `mask` and `set` are bit-or
         * of #CamelMessageFlags.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is also emitted
         * folder's "changed" signal for this `mi,` if necessary. In case
         * the CAMEL_MESSAGE_FOLDER_FLAGGED flag would be set and the `mi` is
         * not aborting notifications, the 'folder-flagged-stamp' changes too.
         * @param mask mask of flags to change
         * @param set state the flags should be changed to
         */
        vfunc_set_flags(mask: number, set: number): boolean;
        /**
         * Sets From from the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param from a From to set
         */
        vfunc_set_from(from?: string | null): boolean;
        /**
         * Sets encoded Message-ID of the associated message as a guint64 number,
         * partial MD5 sum. The value can be cast to #CamelSummaryMessageID.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param message_id a message id to set
         */
        vfunc_set_message_id(message_id: number): boolean;
        /**
         * Sets mesage list address from the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param mlist a message list address to set
         */
        vfunc_set_mlist(mlist?: string | null): boolean;
        /**
         * Set `preview` as the body preview of the associated message. Use %NULL or an empty
         * string to unset the value.
         *
         * If the `mi` changed, the 'dirty' flag is set automatically, unless the `mi` is
         * aborting notifications. There is not emitted folder's "changed" signal for this `mi`.
         * @param preview message body preview, or %NULL
         */
        vfunc_set_preview(preview?: string | null): boolean;
        /**
         * Sets size of the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param size a size to set
         */
        vfunc_set_size(size: number): boolean;
        /**
         * Sets Subject from the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param subject a Subject to set
         */
        vfunc_set_subject(subject?: string | null): boolean;
        /**
         * Sets To from the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param to a To to set
         */
        vfunc_set_to(to?: string | null): boolean;
        /**
         * Change `state` of the flag named `name`. Unlike user tags, user flags
         * can only be set or unset, while the user tags can contain certain values.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is also emitted
         * folder's "changed" signal for this `mi,` if necessary.
         * @param name user flag name
         * @param state state to set for the flag
         */
        vfunc_set_user_flag(name: string, state: boolean): boolean;
        /**
         * Set `value` for a single user-defined message header of the associated message.
         * When the `value` is %NULL, the header `name` is removed from the user-defined
         * headers.
         *
         * If the `mi` changed, the 'dirty' flag is set automatically, unless the `mi` is
         * aborting notifications. There is not emitted folder's "changed" signal for this `mi`.
         * @param name header name
         * @param value header value, or %NULL
         */
        vfunc_set_user_header(name: string, value?: string | null): boolean;
        /**
         * Set user tag `name` to `value,` or remove it, if `value` is %NULL.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is also emitted
         * folder's "changed" signal for this `mi,` if necessary.
         * @param name user tag name
         * @param value user tag value, or %NULL to remove the user tag
         */
        vfunc_set_user_tag(name: string, value?: string | null): boolean;
        /**
         * Takes headers of the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         *
         * Note that it's not safe to use the `headers` after the call to this function,
         * because it can be freed due to no change.
         * @param headers headers to set, as #CamelNameValueArray, or %NULL
         */
        vfunc_take_headers(headers?: NameValueArray | null): boolean;
        /**
         * Takes encoded In-Reply-To and References headers of the associated message
         * as an array of guint64 numbers, partial MD5 sums. Each value can be
         * cast to #CamelSummaryMessageID.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         *
         * Note that it's not safe to use the `references` after the call to this function,
         * because it can be freed due to no change.
         * @param references a references to set
         */
        vfunc_take_references(references?: number[] | null): boolean;
        /**
         * Takes all the `user_flags,` which replaces any current user flags on the `mi`.
         * The passed-in `user_flags` is consumed by the `mi,` which becomes an owner
         * of it. The caller should not change `user_flags` afterwards.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is also emitted
         * folder's "changed" signal for this `mi,` if necessary.
         *
         * Note that it's not safe to use the `user_flags` after the call to this function,
         * because it can be freed due to no change.
         * @param user_flags user flags to set
         */
        vfunc_take_user_flags(user_flags?: NamedFlags | null): boolean;
        /**
         * Takes user-defined message headers of the associated message.
         *
         * If the `mi` changed, the 'dirty' flag is set automatically, unless the `mi` is
         * aborting notifications. There is not emitted folder's "changed" signal for this `mi`.
         *
         * Note that it's not safe to use the `headers` after the call to this function,
         * because it can be freed due to no change.
         * @param headers headers to set, as #CamelNameValueArray, or %NULL
         */
        vfunc_take_user_headers(headers?: NameValueArray | null): boolean;
        /**
         * Takes all the `user_tags,` which replaces any current user tags on the `mi`.
         * The passed-in `user_tags` is consumed by the `mi,` which becomes an owner
         * of it. The caller should not change `user_tags` afterwards.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is also emitted
         * folder's "changed" signal for this `mi,` if necessary.
         *
         * Note that it's not safe to use the `user_tags` after the call to this function,
         * because it can be freed due to no change.
         * @param user_tags user tags to set
         */
        vfunc_take_user_tags(user_tags?: NameValueArray | null): boolean;

        // Own methods of Camel.MessageInfo

        /**
         * Clones the `mi` as a new #CamelMessageInfo and eventually assigns
         * a new #CamelFolderSummary to it. If it's not set, then the same
         * summary as the one with `mi` is used.
         * @param assign_summary parent #CamelFolderSummary object, or %NULL, to set on the clone
         * @returns a new #CamelMessageInfo object, clone of the @mi
         */
        clone(assign_summary?: FolderSummary | null): MessageInfo;
        /**
         * Dumps the mesasge info `mi` to stdout. This is meand for debugging
         * purposes only.
         */
        dump(): void;
        /**
         * Duplicates array of headers for the `mi`.
         * @returns All the message headers of the associated   message, or %NULL, when none are available. Free returned array with   camel_name_value_array_free() when no longer needed.
         */
        dup_headers(): NameValueArray | null;
        dup_preview(): string | null;
        /**
         * Duplicates encoded In-Reply-To and References headers of the associated
         * message as an array of guint64 numbers, partial MD5 sums. Each value
         * can be cast to #CamelSummaryMessageID.
         * @returns A #GArray of   guint64 encoded Message-ID-s; or %NULL when none are available. Free returned   array with g_array_unref() when no longer needed.
         */
        dup_references(): number[] | null;
        dup_user_flags(): NamedFlags | null;
        dup_user_header(name: string): string | null;
        dup_user_headers(): NameValueArray | null;
        dup_user_tag(name: string): string | null;
        dup_user_tags(): NameValueArray | null;
        /**
         * Freezes all the notifications until the camel_message_info_thaw_notifications() is called.
         * This function can be called multiple times, where the last thaw will do the notifications.
         */
        freeze_notifications(): void;
        get_abort_notifications(): boolean;
        get_cc(): string;
        get_date_received(): number;
        get_date_sent(): number;
        get_dirty(): boolean;
        get_flags(): number;
        /**
         * The folder flagged flag is used to mark the message infor as being changed
         * and this change should be propagated to the remote store (server). This is
         * different from the 'dirty' flag, which is set for local changes only. It
         * can happen that the 'folder-flagged' flag is set, but the 'dirty' flag not.
         *
         * This is only a convenient wrapper around CAMEL_MESSAGE_FOLDER_FLAGGED flag,
         * for better readiness of the code.
         * @returns Whether requires save of the local changes into the remote store.
         */
        get_folder_flagged(): boolean;
        /**
         * The 'folder-flagged-stamp' is a stamp of the 'folder-flagged' flag. This stamp
         * changes whenever anything would mark the `mi` as 'folder-flagged', regardless
         * the `mi` being already 'folder-flagged'. It can be used to recognize changes
         * on the 'folder-flagged' flag during the time.
         * @returns Stamp of the 'folder-flagged' flag.
         */
        get_folder_flagged_stamp(): number;
        get_from(): string;
        get_headers(): NameValueArray | null;
        /**
         * Encoded Message-ID of the associated message as a guint64 number,
         * partial MD5 sum. The value can be cast to #CamelSummaryMessageID.
         * @returns Partial MD5 hash of the Message-ID header of the associated message.
         */
        get_message_id(): number;
        get_mlist(): string;
        get_notifications_frozen(): boolean;
        get_preview(): string | null;
        /**
         * Gets encoded In-Reply-To and References headers of the associated
         * message as an array of guint64 numbers, partial MD5 sums. Each value
         * can be cast to #CamelSummaryMessageID.
         * @returns A #GArray of   guint64 encoded Message-ID-s; or %NULL when none are available.
         */
        get_references(): number[] | null;
        get_size(): number;
        get_subject(): string;
        get_to(): string;
        /**
         * Get the UID of the #mi.
         * @returns The UID of the @mi.
         */
        get_uid(): string;
        get_user_flag(name: string): boolean;
        get_user_flags(): NamedFlags | null;
        get_user_header(name: string): string | null;
        get_user_headers(): NameValueArray | null;
        get_user_tag(name: string): string | null;
        get_user_tags(): NameValueArray | null;
        /**
         * Load content of `mi` from the data stored in `record`. The `bdata_ptr` points
         * to the current position of the record->bdata, where the read can continue.
         * Use helper functions camel_util_bdata_get_number() and camel_util_bdata_get_string()
         * to read data from it and also move forward the *bdata_ptr.
         *
         * After successful load of the `mi,` the 'dirty' flag is unset.
         * @param record a #CamelMIRecord to load the @mi from
         * @param bdata_ptr a backend specific data (bdata) pointer
         * @returns Whether the load was successful.
         */
        load(record: MIRecord, bdata_ptr: string): boolean;
        /**
         * Get the UID of the #mi, duplicated on the Camel's string pool.
         * This is good for thread safety, though the UID should not change once set.
         * @returns A newly references string in the string pool, the #mi UID.   Free it with camel_pstring_free() when no longer needed.
         */
        pooldup_uid(): string;
        /**
         * Acquires a property lock, which is used to ensure thread safety
         * when properties are changing. Release the lock with
         * camel_message_info_property_unlock().
         *
         * Note: Make sure the CamelFolderSummary lock is held before this lock,
         * if there will be called any 'set' function on the `mi,` to avoid deadlock
         * when the summary would be set as dirty while another thread might try
         * to read values from the `mi,` waiting for the property lock and holding
         * the summary lock at the same time.
         */
        property_lock(): void;
        /**
         * Releases a property lock, previously acquired with
         * camel_message_info_property_lock().
         */
        property_unlock(): void;
        ref_summary(): any | null;
        /**
         * Save the `mi` content to the message info record `record`. It can populate all
         * but the record->bdata value, which is set fro mthe `bdata_str`. Use helper functions
         * camel_util_bdata_put_number() and camel_util_bdata_put_string() to put data into the `bdata_str`.
         * @param record a #CamelMIRecord to populate
         * @param bdata_str a #GString with a string to save as backend specific data (bdata)
         * @returns Whether the save succeeded.
         */
        save(record: MIRecord, bdata_str: GLib.String): boolean;
        /**
         * Marks the `mi` to abort any notifications, which means that it
         * will not influence 'dirty' and 'folder-flagged' flags in
         * the set/take functions, neither it will emit any GObject::notify
         * signals on change, nor associated folder's "changed" signal.
         * @param abort_notifications a state to set
         */
        set_abort_notifications(abort_notifications: boolean): void;
        /**
         * Sets CC from the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param cc a CC to set
         * @returns Whether the value changed.
         */
        set_cc(cc?: string | null): boolean;
        /**
         * Sets received date (the Received header) of the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param date_received a received date to set
         * @returns Whether the value changed.
         */
        set_date_received(date_received: number): boolean;
        /**
         * Sets sent date (the Date header) of the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param date_sent a sent date to set
         * @returns Whether the value changed.
         */
        set_date_sent(date_sent: number): boolean;
        /**
         * Marks the `mi` as dirty, which means a save to the local summary
         * is required.
         * @param dirty a dirty state to set
         */
        set_dirty(dirty: boolean): void;
        /**
         * Change the state of the flags on the `mi`. Both `mask` and `set` are bit-or
         * of #CamelMessageFlags.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is also emitted
         * folder's "changed" signal for this `mi,` if necessary. In case
         * the CAMEL_MESSAGE_FOLDER_FLAGGED flag would be set and the `mi` is
         * not aborting notifications, the 'folder-flagged-stamp' changes too.
         * @param mask mask of flags to change
         * @param set state the flags should be changed to
         * @returns Whether the flags changed.
         */
        set_flags(mask: number, set: number): boolean;
        /**
         * Changes the folder-flagged flag to the `folder_flagged` value. See
         * camel_message_info_get_folder_flagged() for more information about
         * the use of this flag.
         *
         * This is only a convenient wrapper around CAMEL_MESSAGE_FOLDER_FLAGGED flag,
         * for better readiness of the code.
         * @param folder_flagged a value to set to
         * @returns Whether the flag had been changed.
         */
        set_folder_flagged(folder_flagged: boolean): boolean;
        /**
         * Sets From from the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param from a From to set
         * @returns Whether the value changed.
         */
        set_from(from?: string | null): boolean;
        /**
         * Sets encoded Message-ID of the associated message as a guint64 number,
         * partial MD5 sum. The value can be cast to #CamelSummaryMessageID.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param message_id a message id to set
         * @returns Whether the value changed.
         */
        set_message_id(message_id: number): boolean;
        /**
         * Sets mesage list address from the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param mlist a message list address to set
         * @returns Whether the value changed.
         */
        set_mlist(mlist?: string | null): boolean;
        /**
         * Set `preview` as the body preview of the associated message. Use %NULL or an empty
         * string to unset the value.
         *
         * If the `mi` changed, the 'dirty' flag is set automatically, unless the `mi` is
         * aborting notifications. There is not emitted folder's "changed" signal for this `mi`.
         * @param preview message body preview, or %NULL
         * @returns Whether the value changed.
         */
        set_preview(preview?: string | null): boolean;
        /**
         * Sets size of the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param size a size to set
         * @returns Whether the value changed.
         */
        set_size(size: number): boolean;
        /**
         * Sets Subject from the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param subject a Subject to set
         * @returns Whether the value changed.
         */
        set_subject(subject?: string | null): boolean;
        /**
         * Sets To from the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         * @param to a To to set
         * @returns Whether the value changed.
         */
        set_to(to?: string | null): boolean;
        /**
         * Changes UID of the `mi` to `uid`. If it changes, the 'dirty' flag
         * of the `mi` is set too, unless the `mi` is aborting notifications. This change
         * does not influence the 'folder-flagged' flag.
         * @param uid a UID to set
         * @returns Whether the UID changed.
         */
        set_uid(uid: string): boolean;
        /**
         * Change `state` of the flag named `name`. Unlike user tags, user flags
         * can only be set or unset, while the user tags can contain certain values.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is also emitted
         * folder's "changed" signal for this `mi,` if necessary.
         * @param name user flag name
         * @param state state to set for the flag
         * @returns Whether the message info changed.
         */
        set_user_flag(name: string, state: boolean): boolean;
        /**
         * Set `value` for a single user-defined message header of the associated message.
         * When the `value` is %NULL, the header `name` is removed from the user-defined
         * headers.
         *
         * If the `mi` changed, the 'dirty' flag is set automatically, unless the `mi` is
         * aborting notifications. There is not emitted folder's "changed" signal for this `mi`.
         * @param name header name
         * @param value header value, or %NULL
         * @returns Whether the value changed.
         */
        set_user_header(name: string, value?: string | null): boolean;
        /**
         * Set user tag `name` to `value,` or remove it, if `value` is %NULL.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is also emitted
         * folder's "changed" signal for this `mi,` if necessary.
         * @param name user tag name
         * @param value user tag value, or %NULL to remove the user tag
         * @returns Whether the @mi changed.
         */
        set_user_tag(name: string, value?: string | null): boolean;
        /**
         * Takes headers of the associated message.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         *
         * Note that it's not safe to use the `headers` after the call to this function,
         * because it can be freed due to no change.
         * @param headers headers to set, as #CamelNameValueArray, or %NULL
         * @returns Whether the value changed.
         */
        take_headers(headers?: NameValueArray | null): boolean;
        /**
         * Takes encoded In-Reply-To and References headers of the associated message
         * as an array of guint64 numbers, partial MD5 sums. Each value can be
         * cast to #CamelSummaryMessageID.
         *
         * This property is considered static, in a meaning that it should
         * not change during the life-time of the `mi,` the same as it doesn't
         * change in the associated message.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is not emitted
         * folder's "changed" signal for this `mi`.
         *
         * Note that it's not safe to use the `references` after the call to this function,
         * because it can be freed due to no change.
         * @param references a references to set
         * @returns Whether the value changed.
         */
        take_references(references?: number[] | null): boolean;
        /**
         * Takes all the `user_flags,` which replaces any current user flags on the `mi`.
         * The passed-in `user_flags` is consumed by the `mi,` which becomes an owner
         * of it. The caller should not change `user_flags` afterwards.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is also emitted
         * folder's "changed" signal for this `mi,` if necessary.
         *
         * Note that it's not safe to use the `user_flags` after the call to this function,
         * because it can be freed due to no change.
         * @param user_flags user flags to set
         * @returns Whether the message info changed.
         */
        take_user_flags(user_flags?: NamedFlags | null): boolean;
        /**
         * Takes user-defined message headers of the associated message.
         *
         * If the `mi` changed, the 'dirty' flag is set automatically, unless the `mi` is
         * aborting notifications. There is not emitted folder's "changed" signal for this `mi`.
         *
         * Note that it's not safe to use the `headers` after the call to this function,
         * because it can be freed due to no change.
         * @param headers headers to set, as #CamelNameValueArray, or %NULL
         * @returns Whether the value changed.
         */
        take_user_headers(headers?: NameValueArray | null): boolean;
        /**
         * Takes all the `user_tags,` which replaces any current user tags on the `mi`.
         * The passed-in `user_tags` is consumed by the `mi,` which becomes an owner
         * of it. The caller should not change `user_tags` afterwards.
         *
         * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
         * set automatically, unless the `mi` is aborting notifications. There is also emitted
         * folder's "changed" signal for this `mi,` if necessary.
         *
         * Note that it's not safe to use the `user_tags` after the call to this function,
         * because it can be freed due to no change.
         * @param user_tags user tags to set
         * @returns Whether the @mi changed.
         */
        take_user_tags(user_tags?: NameValueArray | null): boolean;
        /**
         * Reverses the call of the camel_message_info_freeze_notifications().
         * If this is the last freeze, then the associated folder is also notified
         * about the change, if any happened during the freeze.
         */
        thaw_notifications(): void;
    }

    module MessageInfoBase {
        // Constructor properties interface

        interface ConstructorProps extends MessageInfo.ConstructorProps {}
    }

    class MessageInfoBase extends MessageInfo {
        static $gtype: GObject.GType<MessageInfoBase>;

        // Constructors of Camel.MessageInfoBase

        constructor(properties?: Partial<MessageInfoBase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module MimeFilter {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class MimeFilter extends GObject.Object {
        static $gtype: GObject.GType<MimeFilter>;

        // Own fields of Camel.MimeFilter

        outreal: string;
        outbuf: string;
        outptr: string;
        outsize: number;
        outpre: number;
        backbuf: string;
        backsize: number;
        backlen: number;

        // Constructors of Camel.MimeFilter

        constructor(properties?: Partial<MimeFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MimeFilter;

        // Own virtual methods of Camel.MimeFilter

        /**
         * Passes the input buffer, `in,` through `filter` and generates an
         * output buffer, `out` and makes sure that all data is flushed to the
         * output buffer. This must be the last filtering call made, no
         * further calls to camel_mime_filter_filter() may be called on `filter`
         * until `filter` has been reset using camel_mime_filter_reset().
         * @param _in input buffer
         * @param prespace amount of prespace
         */
        vfunc_complete(_in: Uint8Array | string, prespace: number): [Uint8Array, number];
        /**
         * Passes the input buffer, `in,` through `filter` and generates an
         * output buffer, `out`.
         * @param _in input buffer
         * @param prespace amount of prespace
         */
        vfunc_filter(_in: Uint8Array | string, prespace: number): [Uint8Array, number];
        /**
         * Resets the state on `filter` so that it may be used again.
         */
        vfunc_reset(): void;

        // Own methods of Camel.MimeFilter

        /**
         * Saves `data` to be used as prespace input data to the next call to
         * camel_mime_filter_filter() or camel_mime_filter_complete().
         *
         * Note: New calls replace old data.
         * @param data data buffer to backup
         */
        backup(data: Uint8Array | string): void;
        /**
         * Passes the input buffer, `in,` through `filter` and generates an
         * output buffer, `out` and makes sure that all data is flushed to the
         * output buffer. This must be the last filtering call made, no
         * further calls to camel_mime_filter_filter() may be called on `filter`
         * until `filter` has been reset using camel_mime_filter_reset().
         * @param _in input buffer
         * @param prespace amount of prespace
         */
        complete(_in: Uint8Array | string, prespace: number): [Uint8Array, number];
        /**
         * Passes the input buffer, `in,` through `filter` and generates an
         * output buffer, `out`.
         * @param _in input buffer
         * @param prespace amount of prespace
         */
        filter(_in: Uint8Array | string, prespace: number): [Uint8Array, number];
        /**
         * Resets the state on `filter` so that it may be used again.
         */
        reset(): void;
        /**
         * Ensure that `filter` has enough storage space to store `size` bytes
         * for filter output.
         * @param size requested amount of storage space
         * @param keep %TRUE to keep existing buffered data or %FALSE otherwise
         */
        set_size(size: number, keep: number): void;
    }

    module MimeFilterBasic {
        // Constructor properties interface

        interface ConstructorProps extends MimeFilter.ConstructorProps {}
    }

    class MimeFilterBasic extends MimeFilter {
        static $gtype: GObject.GType<MimeFilterBasic>;

        // Constructors of Camel.MimeFilterBasic

        constructor(properties?: Partial<MimeFilterBasic.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: MimeFilterBasicType): MimeFilterBasic;
        // Conflicted with Camel.MimeFilter.new

        static ['new'](...args: never[]): any;
    }

    module MimeFilterBestenc {
        // Constructor properties interface

        interface ConstructorProps extends MimeFilter.ConstructorProps {}
    }

    class MimeFilterBestenc extends MimeFilter {
        static $gtype: GObject.GType<MimeFilterBestenc>;

        // Constructors of Camel.MimeFilterBestenc

        constructor(properties?: Partial<MimeFilterBestenc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](flags: number): MimeFilterBestenc;
        // Conflicted with Camel.MimeFilter.new

        static ['new'](...args: never[]): any;

        // Own methods of Camel.MimeFilterBestenc

        /**
         * Gets the best charset that can be used to contain this content.
         * @returns the name of the best charset to use to encode the input text filtered by @filter
         */
        get_best_charset(): string;
        /**
         * Get the best encoding, given specific constraints, that can be used to
         * encode a stream of bytes.
         * @param required maximum level of output encoding allowed.
         * @returns the best encoding to use
         */
        get_best_encoding(required: BestencEncoding): TransferEncoding;
        /**
         * Set the flags for subsequent operations.
         * @param flags bestenc filter flags
         */
        set_flags(flags: number): void;
    }

    module MimeFilterCRLF {
        // Constructor properties interface

        interface ConstructorProps extends MimeFilter.ConstructorProps {}
    }

    class MimeFilterCRLF extends MimeFilter {
        static $gtype: GObject.GType<MimeFilterCRLF>;

        // Constructors of Camel.MimeFilterCRLF

        constructor(properties?: Partial<MimeFilterCRLF.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](direction: MimeFilterCRLFDirection, mode: MimeFilterCRLFMode): MimeFilterCRLF;
        // Conflicted with Camel.MimeFilter.new

        static ['new'](...args: never[]): any;

        // Own methods of Camel.MimeFilterCRLF

        get_ensure_crlf_end(): boolean;
        /**
         * When set to true, the filter will ensure that the output stream will
         * end with CRLF, in case it does not. The default is to not do that.
         * The option is used only when encoding the stream.
         * @param ensure_crlf_end value to set
         */
        set_ensure_crlf_end(ensure_crlf_end: boolean): void;
    }

    module MimeFilterCanon {
        // Constructor properties interface

        interface ConstructorProps extends MimeFilter.ConstructorProps {}
    }

    class MimeFilterCanon extends MimeFilter {
        static $gtype: GObject.GType<MimeFilterCanon>;

        // Constructors of Camel.MimeFilterCanon

        constructor(properties?: Partial<MimeFilterCanon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](flags: MimeFilterCanonFlags): MimeFilterCanon;
        // Conflicted with Camel.MimeFilter.new

        static ['new'](...args: never[]): any;
    }

    module MimeFilterCharset {
        // Constructor properties interface

        interface ConstructorProps extends MimeFilter.ConstructorProps {}
    }

    class MimeFilterCharset extends MimeFilter {
        static $gtype: GObject.GType<MimeFilterCharset>;

        // Constructors of Camel.MimeFilterCharset

        constructor(properties?: Partial<MimeFilterCharset.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](from_charset: string, to_charset: string): MimeFilterCharset;
        // Conflicted with Camel.MimeFilter.new

        static ['new'](...args: never[]): any;
    }

    module MimeFilterEnriched {
        // Constructor properties interface

        interface ConstructorProps extends MimeFilter.ConstructorProps {}
    }

    class MimeFilterEnriched extends MimeFilter {
        static $gtype: GObject.GType<MimeFilterEnriched>;

        // Constructors of Camel.MimeFilterEnriched

        constructor(properties?: Partial<MimeFilterEnriched.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](flags: MimeFilterEnrichedFlags): MimeFilterEnriched;
        // Conflicted with Camel.MimeFilter.new

        static ['new'](...args: never[]): any;
    }

    module MimeFilterFrom {
        // Constructor properties interface

        interface ConstructorProps extends MimeFilter.ConstructorProps {}
    }

    class MimeFilterFrom extends MimeFilter {
        static $gtype: GObject.GType<MimeFilterFrom>;

        // Constructors of Camel.MimeFilterFrom

        constructor(properties?: Partial<MimeFilterFrom.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MimeFilterFrom;
    }

    module MimeFilterGZip {
        // Constructor properties interface

        interface ConstructorProps extends MimeFilter.ConstructorProps {}
    }

    class MimeFilterGZip extends MimeFilter {
        static $gtype: GObject.GType<MimeFilterGZip>;

        // Constructors of Camel.MimeFilterGZip

        constructor(properties?: Partial<MimeFilterGZip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](mode: MimeFilterGZipMode, level: number): MimeFilterGZip;
        // Conflicted with Camel.MimeFilter.new

        static ['new'](...args: never[]): any;
    }

    module MimeFilterHTML {
        // Constructor properties interface

        interface ConstructorProps extends MimeFilter.ConstructorProps {}
    }

    class MimeFilterHTML extends MimeFilter {
        static $gtype: GObject.GType<MimeFilterHTML>;

        // Constructors of Camel.MimeFilterHTML

        constructor(properties?: Partial<MimeFilterHTML.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MimeFilterHTML;
    }

    module MimeFilterIndex {
        // Constructor properties interface

        interface ConstructorProps extends MimeFilter.ConstructorProps {}
    }

    class MimeFilterIndex extends MimeFilter {
        static $gtype: GObject.GType<MimeFilterIndex>;

        // Constructors of Camel.MimeFilterIndex

        constructor(properties?: Partial<MimeFilterIndex.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](index: Index): MimeFilterIndex;
        // Conflicted with Camel.MimeFilter.new

        static ['new'](...args: never[]): any;

        // Own methods of Camel.MimeFilterIndex

        /**
         * Set `index` on `filter`.
         * @param index a #CamelIndex object
         */
        set_index(index: Index): void;
        /**
         * Set the match name for any indexed words.
         * @param name a #CamelIndexName object
         */
        set_name(name: IndexName): void;
    }

    module MimeFilterLinewrap {
        // Constructor properties interface

        interface ConstructorProps extends MimeFilter.ConstructorProps {}
    }

    class MimeFilterLinewrap extends MimeFilter {
        static $gtype: GObject.GType<MimeFilterLinewrap>;

        // Constructors of Camel.MimeFilterLinewrap

        constructor(properties?: Partial<MimeFilterLinewrap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](preferred_len: number, max_len: number, indent_char: number, flags: number): MimeFilterLinewrap;
        // Conflicted with Camel.MimeFilter.new

        static ['new'](...args: never[]): any;
    }

    module MimeFilterPgp {
        // Constructor properties interface

        interface ConstructorProps extends MimeFilter.ConstructorProps {}
    }

    class MimeFilterPgp extends MimeFilter {
        static $gtype: GObject.GType<MimeFilterPgp>;

        // Constructors of Camel.MimeFilterPgp

        constructor(properties?: Partial<MimeFilterPgp.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MimeFilterPgp;
    }

    module MimeFilterProgress {
        // Constructor properties interface

        interface ConstructorProps extends MimeFilter.ConstructorProps {}
    }

    class MimeFilterProgress extends MimeFilter {
        static $gtype: GObject.GType<MimeFilterProgress>;

        // Constructors of Camel.MimeFilterProgress

        constructor(properties?: Partial<MimeFilterProgress.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](cancellable: Gio.Cancellable | null, total: number): MimeFilterProgress;
        // Conflicted with Camel.MimeFilter.new

        static ['new'](...args: never[]): any;
    }

    module MimeFilterToHTML {
        // Constructor properties interface

        interface ConstructorProps extends MimeFilter.ConstructorProps {}
    }

    class MimeFilterToHTML extends MimeFilter {
        static $gtype: GObject.GType<MimeFilterToHTML>;

        // Constructors of Camel.MimeFilterToHTML

        constructor(properties?: Partial<MimeFilterToHTML.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](flags: MimeFilterToHTMLFlags, color: number): MimeFilterToHTML;
        // Conflicted with Camel.MimeFilter.new

        static ['new'](...args: never[]): any;
    }

    module MimeFilterWindows {
        // Constructor properties interface

        interface ConstructorProps extends MimeFilter.ConstructorProps {}
    }

    class MimeFilterWindows extends MimeFilter {
        static $gtype: GObject.GType<MimeFilterWindows>;

        // Constructors of Camel.MimeFilterWindows

        constructor(properties?: Partial<MimeFilterWindows.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](claimed_charset: string): MimeFilterWindows;
        // Conflicted with Camel.MimeFilter.new

        static ['new'](...args: never[]): any;

        // Own methods of Camel.MimeFilterWindows

        /**
         * Get whether or not the textual content filtered by `filter` is
         * really in a Microsoft Windows charset rather than the claimed ISO
         * charset.
         * @returns %TRUE if the text was found to be in a Microsoft Windows CP125x charset or %FALSE otherwise.
         */
        is_windows_charset(): boolean;
        /**
         * Get the name of the actual charset used to encode the textual
         * content filtered by `filter` (it will either be the original
         * claimed_charset passed in at creation time or the Windows-CP125x
         * equivalent).
         * @returns the name of the actual charset
         */
        real_charset(): string;
    }

    module MimeFilterYenc {
        // Constructor properties interface

        interface ConstructorProps extends MimeFilter.ConstructorProps {}
    }

    class MimeFilterYenc extends MimeFilter {
        static $gtype: GObject.GType<MimeFilterYenc>;

        // Constructors of Camel.MimeFilterYenc

        constructor(properties?: Partial<MimeFilterYenc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](direction: MimeFilterYencDirection): MimeFilterYenc;
        // Conflicted with Camel.MimeFilter.new

        static ['new'](...args: never[]): any;

        // Own methods of Camel.MimeFilterYenc

        /**
         * Get the computed crc or (#guint32) -1 on fail.
         * @returns the computed crc or (#guint32) -1 on fail.
         */
        get_crc(): number;
        /**
         * Get the computed part crc or (#guint32) -1 on fail.
         * @returns the computed part crc or (#guint32) -1 on fail.
         */
        get_pcrc(): number;
        /**
         * Sets the current crc32 value on the yEnc filter `yenc` to `crc`.
         * @param crc crc32 value
         */
        set_crc(crc: number): void;
        /**
         * Sets the current state of the yencoder/ydecoder
         * @param state encode/decode state
         */
        set_state(state: number): void;
    }

    module MimeMessage {
        // Constructor properties interface

        interface ConstructorProps extends MimePart.ConstructorProps {}
    }

    class MimeMessage extends MimePart {
        static $gtype: GObject.GType<MimeMessage>;

        // Constructors of Camel.MimeMessage

        constructor(properties?: Partial<MimeMessage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MimeMessage;

        // Own methods of Camel.MimeMessage

        /**
         * Build an MBox from-line from `message`.
         * @returns an MBox from-line suitable for use in an mbox file
         */
        build_mbox_from(): string;
        /**
         * Dump information about the mime message to stdout.
         *
         * If body is TRUE, then dump body content of the message as well.
         * @param body whether to dump also message body
         */
        dump(body: number): void;
        /**
         * Encode all message parts to a suitable transfer encoding for transport (7bit clean).
         */
        encode_8bit_parts(): void;
        /**
         * Calls `callback` for each part of the `message,` including the message itself.
         * The traverse of the `message` parts can be stopped when the `callback`
         * returns %FALSE.
         */
        foreach_part(): void;
        /**
         * Get the date and UTC offset of a message.
         * See camel_mime_message_set_date() for information about the `offset` format.
         * @returns the date of the message
         */
        get_date(): [number, number];
        /**
         * Get the received date and UTC offset of a message.
         * See camel_mime_message_set_date() for information about the `offset` format.
         * @returns the received date of the message
         */
        get_date_received(): [number, number];
        /**
         * Get the from address of a message.
         * @returns the from address of the message
         */
        get_from(): InternetAddress | null;
        /**
         * Get the message-id of a message.
         * @returns the message-id of a message
         */
        get_message_id(): string | null;
        /**
         * Get a MIME part by id from a message.
         * @param content_id content-id to search for
         * @returns the MIME part with the requested id, or %NULL if not found
         */
        get_part_by_content_id(content_id: string): MimePart | null;
        /**
         * Get the message recipients of a specified type.
         * @param type recipient type
         * @returns the requested recipients
         */
        get_recipients(type: string): InternetAddress | null;
        /**
         * Get the Reply-To of a message.
         * @returns the Reply-To address of the message
         */
        get_reply_to(): InternetAddress | null;
        /**
         * Get the UID of the source account of the message.
         * @returns the uid of the source account
         */
        get_source(): string | null;
        /**
         * Get the UTF-8 subject text of a message.
         * @returns the message subject
         */
        get_subject(): string | null;
        /**
         * Find out if a message contains 8bit or binary encoded parts.
         * @returns %TRUE if the message contains 8bit parts or %FALSE otherwise
         */
        has_8bit_parts(): boolean;
        /**
         * Returns whether message contains at least one attachment part.
         */
        has_attachment(): boolean;
        /**
         * Re-encode all message parts to conform with the required encoding rules.
         *
         * If `enctype` is #CAMEL_BESTENC_7BIT, then all parts will be re-encoded into
         * one of the 7bit transfer encodings. If `enctype` is #CAMEL_BESTENC_8BIT, all
         * parts will be re-encoded to either a 7bit encoding or, if the part is 8bit
         * text, allowed to stay 8bit. If `enctype` is #CAMEL_BESTENC_BINARY, then binary
         * parts will be encoded as binary and 8bit textual parts will be encoded as 8bit.
         * @param required a bitwise ORing of #CAMEL_BESTENC_GET_ENCODING and #CAMEL_BESTENC_GET_CHARSET
         * @param enctype an encoding to enforce
         */
        set_best_encoding(required: BestencRequired, enctype: BestencEncoding): void;
        /**
         * Set the date on a message.
         *
         * In most cases, this is used to set the current date:
         *
         * ```c
         * camel_mime_message_set_date (message, CAMEL_MESSAGE_DATE_CURRENT, 0);
         * ```
         *
         * @param date a time_t date or %CAMEL_MESSAGE_DATE_CURRENT to use the current local date and time
         * @param offset an offset from UTC in decimal number using the +HHMM format (for instance an offset   of -10:45 is -1045). If @date set to %CAMEL_MESSAGE_DATE_CURRENT, this parameter is ignored
         */
        set_date(date: number, offset: number): void;
        /**
         * Set the from address of a message.
         * @param from a #CamelInternetAddress object
         */
        set_from(from?: InternetAddress | null): void;
        /**
         * Set the message-id on a message.
         * @param message_id id of the message, or %NULL to generate a new one using the from address
         */
        set_message_id(message_id?: string | null): void;
        /**
         * Set the recipients of a message.
         * @param type recipient type (one of #CAMEL_RECIPIENT_TYPE_TO, #CAMEL_RECIPIENT_TYPE_CC, or #CAMEL_RECIPIENT_TYPE_BCC)
         * @param recipients a #CamelInternetAddress with the recipient addresses set or %NULL   to remove the already defined one
         */
        set_recipients(type: string, recipients?: InternetAddress | null): void;
        /**
         * Set the Reply-To of a message.
         * @param reply_to a #CamelInternetAddress object
         */
        set_reply_to(reply_to?: InternetAddress | null): void;
        /**
         * Set the UID of the source account of the message.
         * @param source_uid the uid of the source account
         */
        set_source(source_uid?: string | null): void;
        /**
         * Set the subject text of a message.
         * @param subject UTF-8 message subject
         */
        set_subject(subject?: string | null): void;
    }

    module MimeParser {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class MimeParser extends GObject.Object {
        static $gtype: GObject.GType<MimeParser>;

        // Constructors of Camel.MimeParser

        constructor(properties?: Partial<MimeParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MimeParser;

        // Own virtual methods of Camel.MimeParser

        vfunc_content(): void;
        vfunc_message(headers?: any | null): void;
        vfunc_part(): void;

        // Own methods of Camel.MimeParser

        /**
         * Get the content type defined in the current part.
         * @returns A content_type structure, or %NULL if there is no content-type defined for this part of state of the parser.
         */
        content_type(): ContentType | null;
        /**
         * Drop the last step call.  This should only be used
         * in conjunction with seeking of the stream as the
         * stream may be in an undefined state relative to the
         * state of the parser.
         *
         * Use this call with care.
         */
        drop_step(): void;
        /**
         * Get the list of the raw headers which are defined for the
         * current state of the parser.  These headers are valid
         * until the next call to camel_mime_parser_step(), or camel_mime_parser_drop_step().
         * @returns The headers, or %NULL, if there are no headers defined for the current part or state. Free it with camel_name_value_array_free().
         */
        dup_headers(): NameValueArray | null;
        errno(): number;
        /**
         * Add a filter that will be applied to any body content before it is passed
         * to the caller.  Filters may be pipelined to perform multi-pass operations
         * on the content, and are applied in the order they were added.
         *
         * Note that filters are only applied to the body content of messages, and once
         * a filter has been set, all content returned by a camel_mime_parser_step()
         * with a state of CAMEL_MIME_PARSER_STATE_BODY will have passed through the
         * filter.
         * @param mf a #CamelMimeFilter
         * @returns An id that may be passed to camel_mime_parser_filter_remove() to remove the filter, or -1 if the operation failed.
         */
        filter_add(mf: MimeFilter): number;
        /**
         * Remove a processing filter from the pipeline.  There is no
         * restriction on the order the filters can be removed.
         * @param id id of the filter to remove, as returned from camel_mime_parser_filter_add()
         */
        filter_remove(id: number): void;
        /**
         * Get the last scanned "From " line, from a recently scanned from.
         * This should only be called in the CAMEL_MIME_PARSER_STATE_FROM state.  The
         * from line will include the closing \n found (if there was one).
         *
         * The return value will remain valid while in the CAMEL_MIME_PARSER_STATE_FROM
         * state, or any deeper state.
         * @returns The From line, or %NULL if called out of context.
         */
        from_line(): string | null;
        /**
         * Lookup a header by name.
         * @param name Name of header.
         * @param offset Pointer that can receive the offset of the header in the stream from the start of parsing.
         * @returns The header value, or %NULL if the header is not defined.
         */
        header(name: string, offset: number): string | null;
        /**
         * Convenience function creates a #GMemoryInputStream from `bytes` and hands
         * it off to camel_mime_parser_init_with_input_stream().
         * @param bytes a #GBytes containing the message content
         */
        init_with_bytes(bytes: GLib.Bytes | Uint8Array): void;
        /**
         * Initialise the scanner with an fd.  The scanner's offsets
         * will be relative to the current file position of the file
         * descriptor.  As a result, seekable descritors should
         * be seeked using the parser seek functions.
         * @param fd A valid file descriptor.
         * @returns Returns -1 on error.
         */
        init_with_fd(fd: number): number;
        /**
         * Initialize the scanner with `input_stream`.  The scanner's offsets will
         * be relative to the current file position of the stream.  As a result,
         * seekable streams should only be seeked using the parser seek function.
         * @param input_stream a #GInputStream
         */
        init_with_input_stream(input_stream: Gio.InputStream): void;
        /**
         * Initialise the scanner with a source stream.  The scanner's
         * offsets will be relative to the current file position of
         * the stream.  As a result, seekable streams should only
         * be seeked using the parser seek function.
         * @param stream a #CamelStream to init with
         * @returns -1 on error.
         */
        init_with_stream(stream: Stream): number;
        /**
         * Retrieve the postface text for the current multipart.
         * Only returns valid data when the current state if
         * CAMEL_MIME_PARSER_STATE_MULTIPART_END.
         * @returns The postface text, or %NULL if there wasn't any.
         */
        postface(): string | null;
        /**
         * Retrieve the preface text for the current multipart.
         * Can only be used when the state is CAMEL_MIME_PARSER_STATE_MULTIPART_END.
         * @returns The preface text, or %NULL if there wasn't any.
         */
        preface(): string | null;
        /**
         * Pre-load a new parser state.  Used to post-parse multipart content
         * without headers.
         * @param newstate New state
         * @param boundary Boundary marker for state.
         */
        push_state(newstate: MimeParserState, boundary: string): void;
        /**
         * Read at most `len` bytes from the internal mime parser buffer.
         *
         * Returns the address of the internal buffer in `databuffer,`
         * and the length of useful data.
         *
         * `len` may be specified as %G_MAXSSIZE, in which case you will
         * get the full remainder of the buffer at each call.
         *
         * Note that no parsing of the data read through this function
         * occurs, so no state changes occur, but the seek position
         * is updated appropriately.
         * @param len The length of data to read
         * @returns The number of bytes available, or -1 on error.
         */
        read(len: number): [number, Uint8Array];
        /**
         * Tell the scanner if it should scan "^From " lines or not.
         *
         * If the scanner is scanning from lines, two additional
         * states CAMEL_MIME_PARSER_STATE_FROM and CAMEL_MIME_PARSER_STATE_FROM_END will be returned
         * to the caller during parsing.
         *
         * This may also be preceeded by an optional
         * CAMEL_MIME_PARSER_STATE_PRE_FROM state which contains the scanned data
         * found before the From line is encountered.  See also
         * camel_mime_parser_scan_pre_from().
         * @param scan_from %TRUE if the scanner should scan From lines.
         */
        scan_from(scan_from: boolean): void;
        /**
         * Tell the scanner whether we want to know abou the pre-from
         * data during a scan.  If we do, then we may get an additional
         * state CAMEL_MIME_PARSER_STATE_PRE_FROM which returns the specified data.
         * @param scan_pre_from %TRUE if we want to get pre-from data.
         */
        scan_pre_from(scan_pre_from: boolean): void;
        /**
         * Reset the source position to a known value.
         *
         * Note that if the source stream/descriptor was not
         * positioned at 0 to begin with, and an absolute seek
         * is specified (whence != SEEK_CUR), then the seek
         * position may not match the desired seek position.
         * @param offset Number of bytes to offset the seek by.
         * @param whence SEEK_SET, SEEK_CUR, SEEK_END
         * @returns The new seek offset, or -1 on an error (for example, trying to seek on a non-seekable stream or file descriptor).
         */
        seek(offset: number, whence: number): number;
        set_header_regex(matchstr: string): number;
        /**
         * Get the current parser state.
         * @returns The current parser state.
         */
        state(): MimeParserState;
        /**
         * Parse the next part of the MIME message.  If camel_mime_parser_unstep()
         * has been called, then continue to return the same state
         * for that many calls.
         *
         * If the step is CAMEL_MIME_PARSER_STATE_BODY then the databuffer and datalength
         * pointers will be setup to point to the internal data buffer
         * of the scanner and may be processed as required.  Any
         * filters will have already been applied to this data.
         *
         * Refer to the state diagram elsewhere for a full listing of
         * the states an application is gauranteed to get from the
         * scanner.
         * @param databuffer Pointer to accept a pointer to the data associated with this step (if any).  May be %NULL, in which case datalength is also ingored.
         * @returns The current new state of the parser is returned.
         */
        step(databuffer?: Uint8Array | string): [MimeParserState, Uint8Array];
        /**
         * Get the stream, if any, the parser has been initialised
         * with.  May be used to setup sub-streams, but should not
         * be read from directly (without saving and restoring
         * the seek position in between).
         * @returns The stream from camel_mime_parser_init_with_stream(), or NULL if the parser is reading from a file descriptor or is uninitialised.
         */
        stream(): Stream | null;
        /**
         * Return the current scanning offset.  The meaning of this
         * value will depend on the current state of the parser.
         *
         * An incomplete listing of the states:
         *
         * CAMEL_MIME_PARSER_STATE_INITIAL, The start of the current message.
         * CAMEL_MIME_PARSER_STATE_HEADER, CAMEL_MIME_PARSER_STATE_MESSAGE, CAMEL_MIME_PARSER_STATE_MULTIPART, the character
         * position immediately after the end of the header.
         * CAMEL_MIME_PARSER_STATE_BODY, Position within the message of the start
         * of the current data block.
         * CAMEL_MIME_PARSER_STATE_*_END, The position of the character starting
         * the next section of the scan (the last position + 1 of
         * the respective current state).
         * @returns See above.
         */
        tell(): number;
        /**
         * When parsing a multipart, this returns the start of the last
         * boundary.
         * @returns The start of the boundary, or -1 if there was no boundary encountered yet.
         */
        tell_start_boundary(): number;
        /**
         * If the parser is scanning From lines, then this returns
         * the position of the start of the From line.
         * @returns The start of the from line, or -1 if there was no From line, or From lines are not being scanned.
         */
        tell_start_from(): number;
        /**
         * Find out the position within the file of where the
         * headers started, this is cached by the parser
         * at the time.
         * @returns The header start position, or -1 if no headers were scanned in the current state.
         */
        tell_start_headers(): number;
        /**
         * Cause the last step operation to repeat itself.  If this is
         * called repeated times, then the same step will be repeated
         * that many times.
         *
         * Note that it is not possible to scan back using this function,
         * only to have a way of peeking the next state.
         */
        unstep(): void;
    }

    module MimePart {
        // Constructor properties interface

        interface ConstructorProps extends Medium.ConstructorProps {
            content_id: string;
            contentId: string;
            content_md5: string;
            contentMd5: string;
            description: string;
            disposition: string;
        }
    }

    class MimePart extends Medium {
        static $gtype: GObject.GType<MimePart>;

        // Own properties of Camel.MimePart

        get content_id(): string;
        set content_id(val: string);
        get contentId(): string;
        set contentId(val: string);
        get content_md5(): string;
        set content_md5(val: string);
        get contentMd5(): string;
        set contentMd5(val: string);
        get description(): string;
        set description(val: string);
        get disposition(): string;
        set disposition(val: string);

        // Constructors of Camel.MimePart

        constructor(properties?: Partial<MimePart.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MimePart;

        // Own virtual methods of Camel.MimePart

        /**
         * Constructs a MIME part from a parser.
         * @param parser a #CamelMimeParser
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_construct_from_parser_sync(parser: MimeParser, cancellable?: Gio.Cancellable | null): boolean;

        // Own methods of Camel.MimePart

        /**
         * Constructs the contnet of `mime_part` from the given mime parser.
         * @param mp a #CamelMimeParser
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns whether succeeded
         */
        construct_content_from_parser(mp: MimeParser, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously constructs a MIME part from a parser.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_mime_part_construct_from_parser_finish() to get the result of
         * the operation.
         * @param parser a #CamelMimeParser
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        construct_from_parser(
            parser: MimeParser,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_mime_part_construct_from_parser().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        construct_from_parser_finish(result: Gio.AsyncResult): boolean;
        /**
         * Constructs a MIME part from a parser.
         * @param parser a #CamelMimeParser
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        construct_from_parser_sync(parser: MimeParser, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Get the disposition of the MIME part as a structure.
         * Returned pointer is owned by `mime_part`.
         * @returns the disposition structure
         */
        get_content_disposition(): ContentDisposition | null;
        /**
         * Get the content-id field of a MIME part.
         * @returns the content-id field of the MIME part
         */
        get_content_id(): string | null;
        /**
         * Get the Content-Languages set on the MIME part.
         * @returns a #GList of languages
         */
        get_content_languages(): string[] | null;
        /**
         * Get the content-location field of a MIME part.
         * @returns the content-location field of a MIME part
         */
        get_content_location(): string | null;
        /**
         * Get the content-md5 field of the MIME part.
         * @returns the content-md5 field of the MIME part
         */
        get_content_md5(): string | null;
        /**
         * Get the Content-Type of a MIME part.
         * @returns the parsed #CamelContentType of the MIME part
         */
        get_content_type(): ContentType | null;
        /**
         * Get the description of the MIME part.
         * @returns the description
         */
        get_description(): string | null;
        /**
         * Get the disposition of the MIME part.
         * @returns the disposition
         */
        get_disposition(): string | null;
        /**
         * Get the Content-Transfer-Encoding of a MIME part.
         * @returns a #CamelTransferEncoding
         */
        get_encoding(): TransferEncoding;
        /**
         * Get the filename of a MIME part.
         * @returns the filename of the MIME part
         */
        get_filename(): string | null;
        /**
         * Utility function used to set the content of a mime part object to
         * be the provided data. If `length` is 0, this routine can be used as
         * a way to remove old content (in which case `data` and `type` are
         * ignored and may be %NULL).
         * @param data data to put into the part
         * @param type Content-Type of the data
         */
        set_content(data?: Uint8Array | null, type?: string | null): void;
        // Conflicted with Camel.Medium.set_content
        set_content(...args: never[]): any;
        /**
         * Set the content-id field on a MIME part.
         * @param contentid content id
         */
        set_content_id(contentid?: string | null): void;
        /**
         * Set the Content-Languages field of a MIME part.
         * @param content_languages list of languages
         */
        set_content_languages(content_languages?: string[] | null): void;
        /**
         * Set the content-location field of the MIME part.
         * @param location the content-location value of the MIME part
         */
        set_content_location(location?: string | null): void;
        /**
         * Set the content-md5 field of the MIME part.
         * @param md5sum the md5sum of the MIME part
         */
        set_content_md5(md5sum?: string | null): void;
        /**
         * Set the content-type on a MIME part.
         * @param content_type content-type string
         */
        set_content_type(content_type?: string | null): void;
        /**
         * Set a description on the MIME part.
         * @param description description of the MIME part
         */
        set_description(description: string): void;
        /**
         * Set a disposition on the MIME part.
         * @param disposition disposition of the MIME part
         */
        set_disposition(disposition?: string | null): void;
        /**
         * Set the Content-Transfer-Encoding to use on a MIME part.
         * @param encoding a #CamelTransferEncoding
         */
        set_encoding(encoding: TransferEncoding): void;
        /**
         * Set the filename on a MIME part.
         * @param filename filename given to the MIME part
         */
        set_filename(filename?: string | null): void;
    }

    module Multipart {
        // Constructor properties interface

        interface ConstructorProps extends DataWrapper.ConstructorProps {}
    }

    class Multipart extends DataWrapper {
        static $gtype: GObject.GType<Multipart>;

        // Constructors of Camel.Multipart

        constructor(properties?: Partial<Multipart.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Multipart;

        // Own virtual methods of Camel.Multipart

        /**
         * Appends the part to the multipart object.
         * @param part a #CamelMimePart to add
         */
        vfunc_add_part(part: MimePart): void;
        /**
         * Construct a multipart from a parser.
         * @param parser a #CamelMimeParser object
         */
        vfunc_construct_from_parser(parser: MimeParser): number;
        vfunc_get_boundary(): string;
        vfunc_get_number(): number;
        vfunc_get_part(index: number): MimePart | null;
        /**
         * Sets the message boundary for `multipart` to `boundary`. This should
         * be a string which does not occur anywhere in any of `multipart'`s
         * subparts. If `boundary` is %NULL, a randomly-generated boundary will
         * be used.
         * @param boundary the message boundary, or %NULL
         */
        vfunc_set_boundary(boundary?: string | null): void;

        // Own methods of Camel.Multipart

        /**
         * Appends the part to the multipart object.
         * @param part a #CamelMimePart to add
         */
        add_part(part: MimePart): void;
        /**
         * Construct a multipart from a parser.
         * @param parser a #CamelMimeParser object
         * @returns 0 on success or -1 on fail
         */
        construct_from_parser(parser: MimeParser): number;
        get_boundary(): string;
        get_number(): number;
        get_part(index: number): MimePart | null;
        /**
         * Returns the postface text for `multipart`.
         * @returns the postface text
         */
        get_postface(): string;
        /**
         * Returns the preface text for `multipart`.
         * @returns the preface text
         */
        get_preface(): string;
        /**
         * Sets the message boundary for `multipart` to `boundary`. This should
         * be a string which does not occur anywhere in any of `multipart'`s
         * subparts. If `boundary` is %NULL, a randomly-generated boundary will
         * be used.
         * @param boundary the message boundary, or %NULL
         */
        set_boundary(boundary?: string | null): void;
        /**
         * Set the postface text for this multipart.  Will be written out after
         * the last boundary of the multipart, and ignored by any MIME mail
         * client.
         *
         * Generally postface texts should not be sent with multipart messages.
         * @param postface multipat postface
         */
        set_postface(postface: string): void;
        /**
         * Set the preface text for this multipart.  Will be written out infront
         * of the multipart.  This text should only include US-ASCII strings, and
         * be relatively short, and will be ignored by any MIME mail client.
         * @param preface the multipart preface
         */
        set_preface(preface: string): void;
    }

    module MultipartEncrypted {
        // Constructor properties interface

        interface ConstructorProps extends Multipart.ConstructorProps {}
    }

    class MultipartEncrypted extends Multipart {
        static $gtype: GObject.GType<MultipartEncrypted>;

        // Constructors of Camel.MultipartEncrypted

        constructor(properties?: Partial<MultipartEncrypted.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MultipartEncrypted;
    }

    module MultipartSigned {
        // Constructor properties interface

        interface ConstructorProps extends Multipart.ConstructorProps {}
    }

    class MultipartSigned extends Multipart {
        static $gtype: GObject.GType<MultipartSigned>;

        // Constructors of Camel.MultipartSigned

        constructor(properties?: Partial<MultipartSigned.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MultipartSigned;

        // Own methods of Camel.MultipartSigned

        /**
         * Get the raw signed content stream of the multipart/signed MIME part
         * suitable for use with verification of the signature.
         * @returns the signed content stream
         */
        get_content_stream(): Stream;
        /**
         * Explicits sets the raw signed content stream of the multipart/signed
         * MIME part.
         * @param content_stream a #CamelStream
         */
        set_content_stream(content_stream: Stream): void;
        /**
         * Explicitly sets the signature part of `mps`.
         * @param signature a #CamelMimePart
         */
        set_signature(signature: MimePart): void;
    }

    module NNTPAddress {
        // Constructor properties interface

        interface ConstructorProps extends Address.ConstructorProps {}
    }

    class NNTPAddress extends Address {
        static $gtype: GObject.GType<NNTPAddress>;

        // Constructors of Camel.NNTPAddress

        constructor(properties?: Partial<NNTPAddress.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NNTPAddress;

        // Own methods of Camel.NNTPAddress

        /**
         * Add a new nntp address to the address object.  Duplicates are not added twice.
         * @param name a new NNTP address to add
         * @returns Index of added entry, or existing matching entry.
         */
        add(name: string): number;
        /**
         * Get the address at `index`.
         * @param index address's array index
         * @param namep Holder for the returned address, or NULL, if not required.
         * @returns TRUE if such an address exists, or FALSE otherwise.
         */
        get(index: number, namep: string): boolean;
    }

    module NullOutputStream {
        // Constructor properties interface

        interface ConstructorProps extends Gio.OutputStream.ConstructorProps {}
    }

    class NullOutputStream extends Gio.OutputStream {
        static $gtype: GObject.GType<NullOutputStream>;

        // Constructors of Camel.NullOutputStream

        constructor(properties?: Partial<NullOutputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NullOutputStream;

        // Own methods of Camel.NullOutputStream

        /**
         * Gets the total number of bytes written to `null_stream`.
         * @returns total byte count
         */
        get_bytes_written(): number;
        get_ends_with_crlf(): boolean;
    }

    module Object {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            state_filename: string;
            stateFilename: string;
        }
    }

    abstract class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;

        // Own properties of Camel.Object

        /**
         * The file in which to store persistent property values for this
         * instance.
         */
        get state_filename(): string;
        set state_filename(val: string);
        /**
         * The file in which to store persistent property values for this
         * instance.
         */
        get stateFilename(): string;
        set stateFilename(val: string);

        // Constructors of Camel.Object

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Camel.Object

        vfunc_state_read(fp?: any | null): number;
        vfunc_state_write(fp?: any | null): number;

        // Own methods of Camel.Object

        /**
         * Returns the name of the file in which persistent property values for
         * `object` are stored.  The file is used by camel_object_state_write()
         * and camel_object_state_read() to save and restore object state.
         * @returns the name of the persistent property file
         */
        get_state_filename(): string;
        /**
         * Sets the name of the file in which persistent property values for
         * `object` are stored.  The file is used by camel_object_state_write()
         * and camel_object_state_read() to save and restore object state.
         * @param state_filename path to a local file
         */
        set_state_filename(state_filename: string): void;
        /**
         * Read persistent object state from #CamelObject:state-filename.
         * @returns -1 on error.
         */
        state_read(): number;
        /**
         * Write persistent object state #CamelObject:state-filename.
         * @returns -1 on error.
         */
        state_write(): number;
    }

    module OfflineFolder {
        // Constructor properties interface

        interface ConstructorProps extends Folder.ConstructorProps {
            offline_sync: ThreeState;
            offlineSync: ThreeState;
        }
    }

    class OfflineFolder extends Folder {
        static $gtype: GObject.GType<OfflineFolder>;

        // Own properties of Camel.OfflineFolder

        get offline_sync(): ThreeState;
        set offline_sync(val: ThreeState);
        get offlineSync(): ThreeState;
        set offlineSync(val: ThreeState);

        // Constructors of Camel.OfflineFolder

        constructor(properties?: Partial<OfflineFolder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Camel.OfflineFolder

        /**
         * Synchronizes messages in `folder` described by the search `expression` to
         * the local machine for offline availability.
         * @param expression search expression describing which set of messages              to downsync (%NULL for all)
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_downsync_sync(expression?: string | null, cancellable?: Gio.Cancellable | null): boolean;

        // Own methods of Camel.OfflineFolder

        /**
         * Checks whether the `folder` can run downsync according to its
         * settings (camel_offline_folder_get_offline_sync()) and to
         * the parent's #CamelOfflineStore settings (camel_offline_settings_get_stay_synchronized()).
         * @returns %TRUE, when the @folder can be synchronized for offline; %FALSE otherwise.
         */
        can_downsync(): boolean;
        /**
         * Synchronizes messages in `folder` described by the search `expression` to
         * the local machine asynchronously for offline availability.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_offline_folder_downsync_finish() to get the result of the
         * operation.
         * @param expression search expression describing which set of messages              to downsync (%NULL for all)
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        downsync(
            expression: string | null,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_offline_folder_downsync().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        downsync_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronizes messages in `folder` described by the search `expression` to
         * the local machine for offline availability.
         * @param expression search expression describing which set of messages              to downsync (%NULL for all)
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        downsync_sync(expression?: string | null, cancellable?: Gio.Cancellable | null): boolean;
        get_offline_sync(): ThreeState;
        /**
         * The %CAMEL_THREE_STATE_INCONSISTENT means what the parent store has set.
         * @param offline_sync whether to synchronize for offline use, as a #CamelThreeState enum
         */
        set_offline_sync(offline_sync: ThreeState): void;
    }

    module OfflineSettings {
        // Constructor properties interface

        interface ConstructorProps extends StoreSettings.ConstructorProps {
            limit_by_age: boolean;
            limitByAge: boolean;
            limit_unit: TimeUnit;
            limitUnit: TimeUnit;
            limit_value: number;
            limitValue: number;
            stay_synchronized: boolean;
            staySynchronized: boolean;
        }
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class OfflineSettings extends StoreSettings {
        static $gtype: GObject.GType<OfflineSettings>;

        // Own properties of Camel.OfflineSettings

        get limit_by_age(): boolean;
        set limit_by_age(val: boolean);
        get limitByAge(): boolean;
        set limitByAge(val: boolean);
        get limit_unit(): TimeUnit;
        set limit_unit(val: TimeUnit);
        get limitUnit(): TimeUnit;
        set limitUnit(val: TimeUnit);
        get limit_value(): number;
        set limit_value(val: number);
        get limitValue(): number;
        set limitValue(val: number);
        get stay_synchronized(): boolean;
        set stay_synchronized(val: boolean);
        get staySynchronized(): boolean;
        set staySynchronized(val: boolean);

        // Constructors of Camel.OfflineSettings

        constructor(properties?: Partial<OfflineSettings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Camel.OfflineSettings

        get_limit_by_age(): boolean;
        get_limit_unit(): TimeUnit;
        get_limit_value(): number;
        /**
         * Returns whether to synchronize the local cache with the remote server
         * before switching to offline mode, so the store's content can still be
         * read while offline.
         * @returns whether to stay synchronized with the remote server
         */
        get_stay_synchronized(): boolean;
        /**
         * Returns the interval, in seconds, for the changes in the folder being
         * saved automatically. 0 means immediately, while -1 means turning off
         * automatic folder change saving.
         * @returns the interval for automatic store of folder changes
         */
        get_store_changes_interval(): number;
        /**
         * Set whether the messages to download for offline should be limited
         * by age. If set to %TRUE, then messages older than 'limit-value'
         * will not be downloaded automatically.
         * @param limit_by_age a value to set
         */
        set_limit_by_age(limit_by_age: boolean): void;
        /**
         * Set the limit unit to use when interpreting 'limit-value'.
         * @param limit_unit a #CamelTimeUnit with a unit to use
         */
        set_limit_unit(limit_unit: TimeUnit): void;
        /**
         * Set the limit, in 'limit-unit', to use when 'limit-by-age' is set to %TRUE.
         * @param limit_value a value to set
         */
        set_limit_value(limit_value: boolean): void;
        /**
         * Sets whether to synchronize the local cache with the remote server before
         * switching to offline mode, so the store's content can still be read while
         * offline.
         * @param stay_synchronized whether to stay synchronized with the remote server
         */
        set_stay_synchronized(stay_synchronized: boolean): void;
        /**
         * Sets the interval, in seconds, for the changes in the folder being
         * saved automatically. 0 means immediately, while -1 means turning off
         * automatic folder change saving.
         * @param interval the interval, in seconds
         */
        set_store_changes_interval(interval: number): void;
    }

    module OfflineStore {
        // Constructor properties interface

        interface ConstructorProps extends Store.ConstructorProps, Gio.Initable.ConstructorProps {
            online: boolean;
        }
    }

    class OfflineStore extends Store implements Gio.Initable {
        static $gtype: GObject.GType<OfflineStore>;

        // Own properties of Camel.OfflineStore

        get online(): boolean;

        // Constructors of Camel.OfflineStore

        constructor(properties?: Partial<OfflineStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Camel.OfflineStore

        /**
         * Returns a #GPtrArray of #CamelFolder objects which should be checked
         * for offline synchronization. Free the returned pointer with the below
         * calls, when no longer needed:
         *
         *
         * ```
         *     g_ptr_array_foreach (array, (GFunc) g_object_unref, NULL);
         *     g_ptr_array_free (array, TRUE);
         * ```
         *
         */
        vfunc_dup_downsync_folders(): Folder[];

        // Own methods of Camel.OfflineStore

        /**
         * Returns a #GPtrArray of #CamelFolder objects which should be checked
         * for offline synchronization. Free the returned pointer with the below
         * calls, when no longer needed:
         *
         *
         * ```
         *     g_ptr_array_foreach (array, (GFunc) g_object_unref, NULL);
         *     g_ptr_array_free (array, TRUE);
         * ```
         *
         * @returns an array with folders   to be checked for offline synchronization.
         */
        dup_downsync_folders(): Folder[];
        /**
         * Returns %TRUE if `store` is online.
         */
        get_online(): boolean;
        /**
         * Downloads messages for offline, when setup to do so and when
         * the host is reachable.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns whether succeeded
         */
        prepare_for_offline_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Check whether the `store` requires synchronization for offline usage.
         * This is not blocking, it only checks settings on the store and its
         * currently opened folders.
         *
         * Returns %TRUE if the `store` requires synchronization for offline usage
         */
        requires_downsync(): boolean;
        /**
         * An asynchronous variant of camel_offline_store_set_online_sync().
         * Call camel_offline_store_set_online_finish() from within the `callback`.
         * @param online %TRUE for online, %FALSE for offline
         * @param io_priority the I/O priority for the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        set_online(
            online: boolean,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_offline_store_set_online().
         * @param result a #GAsyncResult
         * @returns Whether succeeded.
         */
        set_online_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the online/offline state of `store` according to `online`.
         * @param online %TRUE for online, %FALSE for offline
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded. See: camel_offline_store_set_online
         */
        set_online_sync(online: boolean, cancellable?: Gio.Cancellable | null): boolean;

        // Inherited methods
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
        set_property(property_name: string, value: any): void;
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
        disconnect(id: number): void;
        // Conflicted with Camel.Service.disconnect
        disconnect(...args: never[]): any;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Operation {
        // Signal callback interfaces

        interface PopMessage {
            (): void;
        }

        interface Progress {
            (object: number): void;
        }

        interface PushMessage {
            (object: string): void;
        }

        interface Status {
            (object: string, p0: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gio.Cancellable.ConstructorProps {}
    }

    class Operation extends Gio.Cancellable {
        static $gtype: GObject.GType<Operation>;

        // Constructors of Camel.Operation

        constructor(properties?: Partial<Operation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Operation;

        static new_proxy(cancellable?: Gio.Cancellable | null): Operation;

        // Own signals of Camel.Operation

        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect_after(signal: 'pop-message', callback: (_source: this) => void): number;
        emit(signal: 'pop-message'): void;
        connect_after(signal: 'progress', callback: (_source: this, object: number) => void): number;
        emit(signal: 'progress', object: number): void;
        connect_after(signal: 'push-message', callback: (_source: this, object: string) => void): number;
        emit(signal: 'push-message', object: string): void;
        connect_after(signal: 'status', callback: (_source: this, object: string, p0: number) => void): number;
        emit(signal: 'status', object: string, p0: number): void;

        // Own static methods of Camel.Operation

        /**
         * Cancel all outstanding operations.
         */
        static cancel_all(): void;
        /**
         * Pops the most recently pushed message.
         *
         * This function only works if `cancellable` is a #CamelOperation cast as a
         * #GCancellable.  If `cancellable` is a plain #GCancellable or %NULL, the
         * function does nothing and returns silently.
         * @param cancellable a #GCancellable
         */
        static pop_message(cancellable?: Gio.Cancellable | null): void;
        /**
         * Report progress on the current operation.  `percent` reports the current
         * percentage of completion, which should be in the range of 0 to 100.
         *
         * This function only works if `cancellable` is a #CamelOperation cast as a
         * #GCancellable.  If `cancellable` is a plain #GCancellable or %NULL, the
         * function does nothing and returns silently.
         * @param cancellable a #GCancellable or %NULL
         * @param percent percent complete, 0 to 100.
         */
        static progress(cancellable: Gio.Cancellable | null, percent: number): void;

        // Own virtual methods of Camel.Operation

        vfunc_status(what: string, pc: number): void;
    }

    module PartitionTable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class PartitionTable extends GObject.Object {
        static $gtype: GObject.GType<PartitionTable>;

        // Constructors of Camel.PartitionTable

        constructor(properties?: Partial<PartitionTable.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](bs: BlockFile, root: _block_t): PartitionTable;

        // Own methods of Camel.PartitionTable

        add(key: string, keyid: _key_t): number;
        lookup(key: string): _key_t;
        remove(key: string): boolean;
        sync(): number;
    }

    module SExp {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class SExp extends GObject.Object {
        static $gtype: GObject.GType<SExp>;

        // Constructors of Camel.SExp

        constructor(properties?: Partial<SExp.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SExp;

        // Own static methods of Camel.SExp

        /**
         * Encode a bool into an s-expression `string`.  Bools are
         * encoded using #t #f syntax.
         * @param string Destination #GString
         * @param v_bool the value
         */
        static encode_bool(string: GLib.String, v_bool: boolean): void;
        /**
         * Add a c string `v_string` to the s-expression stored in
         * the gstring `s`.  Quotes are added, and special characters
         * are escaped appropriately.
         * @param string Destination #GString
         * @param v_string String expression.
         */
        static encode_string(string: GLib.String, v_string: string): void;
        /**
         * Converts a search expression to an SQL 'WHERE' part statement,
         * without the 'WHERE' keyword.
         * @param sexp a search expression to convert
         */
        static to_sql_sexp(sexp: string): string | null;

        // Own methods of Camel.SExp

        /**
         * Adds a variable named `name` to the given `scope,` set to the given `value`.
         * @param scope a scope
         * @param name a variable name
         * @param value a variable value, as a #CamelSExpTerm
         */
        add_variable(scope: number, name: string, value: SExpTerm): void;
        error(): string | null;
        evaluate_occur_times(start: number, end: number): boolean;
        /**
         * Prepares to scan a file.
         * @param fd a file descriptor
         */
        input_file(fd: number): void;
        /**
         * Prepares to scan a text buffer.
         * @param text a text buffer to scan
         * @param len the length of the text buffer
         */
        input_text(text: string, len: number): void;
        parse(): number;
        /**
         * Revoes a symbol from a scope.
         * @param scope a scope
         * @param name a symbol name
         */
        remove_symbol(scope: number, name: string): void;
        /**
         * Frees the `result` and its internal data. Does nothing,
         * when the `result` is %NULL.
         * @param result a #CamelSExpResult to free
         */
        result_free(result?: SExpResult | null): void;
        /**
         * Frees an array of results.
         * @param argv an array of #CamelSExpResult to free
         */
        resultv_free(argv: SExpResult[]): void;
        /**
         * sets the current scope for the scanner.
         * @param scope a scope to set
         * @returns the previous scope id
         */
        set_scope(scope: number): number;
    }

    module SMIMEContext {
        // Constructor properties interface

        interface ConstructorProps extends CipherContext.ConstructorProps {}
    }

    class SMIMEContext extends CipherContext {
        static $gtype: GObject.GType<SMIMEContext>;

        // Constructors of Camel.SMIMEContext

        constructor(properties?: Partial<SMIMEContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](session: Session): SMIMEContext;
        // Conflicted with Camel.CipherContext.new

        static ['new'](...args: never[]): any;

        // Own methods of Camel.SMIMEContext

        describe_part(part?: any | null): number;
        set_encrypt_key(use: boolean, key: string): void;
        set_sign_mode(type: SMIMESign): void;
    }

    module Sasl {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            authenticated: boolean;
            mechanism: string;
            service: Service;
            service_name: string;
            serviceName: string;
        }
    }

    abstract class Sasl extends GObject.Object {
        static $gtype: GObject.GType<Sasl>;

        // Own properties of Camel.Sasl

        get authenticated(): boolean;
        set authenticated(val: boolean);
        get mechanism(): string;
        get service(): Service;
        get service_name(): string;
        get serviceName(): string;

        // Constructors of Camel.Sasl

        constructor(properties?: Partial<Sasl.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](service_name: string, mechanism: string, service: Service): Sasl;

        // Own static methods of Camel.Sasl

        static authtype(mechanism: string): ServiceAuthType | null;
        static authtype_list(include_plain: boolean): ServiceAuthType[];
        /**
         * Checks whether exists a #CamelSasl method for the `mechanism` and
         * whether it derives from #CamelSaslXOAuth2. Such mechanisms are
         * also treated as XOAUTH2, even their real name is different.
         * @param mechanism an authentication mechanism
         */
        static is_xoauth2_alias(mechanism?: string | null): boolean;

        // Own virtual methods of Camel.Sasl

        /**
         * If `token` is %NULL, generate the initial SASL message to send to
         * the server.  (This will be %NULL if the client doesn't initiate the
         * exchange.)  Otherwise, `token` is a challenge from the server, and
         * the return value is the response.
         *
         * Free the returned #GByteArray with g_byte_array_free().
         * @param token a token, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_challenge_sync(token?: Uint8Array | null, cancellable?: Gio.Cancellable | null): Uint8Array | null;
        vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean;

        // Own methods of Camel.Sasl

        /**
         * If `token` is %NULL, asynchronously generate the initial SASL message
         * to send to the server.  (This will be %NULL if the client doesn't
         * initiate the exchange.)  Otherwise, `token` is a challenge from the
         * server, and the asynchronous result is the response.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_sasl_challenge_finish() to get the result of the operation.
         * @param token a token, or %NULL
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        challenge(
            token: Uint8Array | null,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * As with camel_sasl_challenge(), but the challenge `token` and the
         * response are both base64-encoded.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call camel_sasl_challenge_base64_finish() to get the result of
         * the operation.
         * @param token a base64-encoded token
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        challenge_base64(
            token: string,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_sasl_challenge_base64().
         * @param result a #GAsyncResult
         * @returns the base64-encoded response
         */
        challenge_base64_finish(result: Gio.AsyncResult): string;
        /**
         * As with camel_sasl_challenge_sync(), but the challenge `token` and the
         * response are both base64-encoded.
         * @param token a base64-encoded token
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the base64-encoded response
         */
        challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string;
        /**
         * Finishes the operation started with camel_sasl_challenge().  Free the
         * returned #GByteArray with g_byte_array_free().
         * @param result a #GAsyncResult
         * @returns the SASL response or %NULL.  If an error occurred, @error will also be set.
         */
        challenge_finish(result: Gio.AsyncResult): Uint8Array | null;
        /**
         * If `token` is %NULL, generate the initial SASL message to send to
         * the server.  (This will be %NULL if the client doesn't initiate the
         * exchange.)  Otherwise, `token` is a challenge from the server, and
         * the return value is the response.
         *
         * Free the returned #GByteArray with g_byte_array_free().
         * @param token a token, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the SASL response or %NULL. If an error occurred, @error will also be set.
         */
        challenge_sync(token?: Uint8Array | null, cancellable?: Gio.Cancellable | null): Uint8Array | null;
        get_authenticated(): boolean;
        get_mechanism(): string;
        get_service(): Service;
        get_service_name(): string;
        set_authenticated(authenticated: boolean): void;
        /**
         * Asynchronously determine whether `sasl` can be used for password-less
         * authentication, for example single-sign-on using system credentials.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_sasl_try_empty_password_finish() to get the result of the
         * operation.
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        try_empty_password(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_sasl_try_empty_password().
         * @param result a #GAsyncResult
         * @returns the SASL response.  If an error occurred, @error will also be set.
         */
        try_empty_password_finish(result: Gio.AsyncResult): boolean;
        try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean;
    }

    module SaslAnonymous {
        // Constructor properties interface

        interface ConstructorProps extends Sasl.ConstructorProps {}
    }

    class SaslAnonymous extends Sasl {
        static $gtype: GObject.GType<SaslAnonymous>;

        // Constructors of Camel.SaslAnonymous

        constructor(properties?: Partial<SaslAnonymous.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: SaslAnonTraceType, trace_info: string): SaslAnonymous;
        // Conflicted with Camel.Sasl.new

        static ['new'](...args: never[]): any;
    }

    module SaslCramMd5 {
        // Constructor properties interface

        interface ConstructorProps extends Sasl.ConstructorProps {}
    }

    class SaslCramMd5 extends Sasl {
        static $gtype: GObject.GType<SaslCramMd5>;

        // Constructors of Camel.SaslCramMd5

        constructor(properties?: Partial<SaslCramMd5.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module SaslDigestMd5 {
        // Constructor properties interface

        interface ConstructorProps extends Sasl.ConstructorProps {}
    }

    class SaslDigestMd5 extends Sasl {
        static $gtype: GObject.GType<SaslDigestMd5>;

        // Constructors of Camel.SaslDigestMd5

        constructor(properties?: Partial<SaslDigestMd5.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module SaslGssapi {
        // Constructor properties interface

        interface ConstructorProps extends Sasl.ConstructorProps {}
    }

    class SaslGssapi extends Sasl {
        static $gtype: GObject.GType<SaslGssapi>;

        // Constructors of Camel.SaslGssapi

        constructor(properties?: Partial<SaslGssapi.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Camel.SaslGssapi

        static is_available(): boolean;

        // Own methods of Camel.SaslGssapi

        /**
         * Set host and user to use, instead of those in CamelService's settings.
         * It's both or none, aka either set both, or the settings values are used.
         * This is used to not require CamelService instance at all.
         * @param override_host Host name to use during challenge processing; can be %NULL
         * @param override_user User name to use during challenge processing; can be %NULL
         */
        override_host_and_user(override_host?: string | null, override_user?: string | null): void;
    }

    module SaslLogin {
        // Constructor properties interface

        interface ConstructorProps extends Sasl.ConstructorProps {}
    }

    class SaslLogin extends Sasl {
        static $gtype: GObject.GType<SaslLogin>;

        // Constructors of Camel.SaslLogin

        constructor(properties?: Partial<SaslLogin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module SaslNTLM {
        // Constructor properties interface

        interface ConstructorProps extends Sasl.ConstructorProps {}
    }

    class SaslNTLM extends Sasl {
        static $gtype: GObject.GType<SaslNTLM>;

        // Constructors of Camel.SaslNTLM

        constructor(properties?: Partial<SaslNTLM.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module SaslPOPB4SMTP {
        // Constructor properties interface

        interface ConstructorProps extends Sasl.ConstructorProps {}
    }

    class SaslPOPB4SMTP extends Sasl {
        static $gtype: GObject.GType<SaslPOPB4SMTP>;

        // Constructors of Camel.SaslPOPB4SMTP

        constructor(properties?: Partial<SaslPOPB4SMTP.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module SaslPlain {
        // Constructor properties interface

        interface ConstructorProps extends Sasl.ConstructorProps {}
    }

    class SaslPlain extends Sasl {
        static $gtype: GObject.GType<SaslPlain>;

        // Constructors of Camel.SaslPlain

        constructor(properties?: Partial<SaslPlain.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module SaslXOAuth2 {
        // Constructor properties interface

        interface ConstructorProps extends Sasl.ConstructorProps {}
    }

    class SaslXOAuth2 extends Sasl {
        static $gtype: GObject.GType<SaslXOAuth2>;

        // Constructors of Camel.SaslXOAuth2

        constructor(properties?: Partial<SaslXOAuth2.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module SaslXOAuth2Google {
        // Constructor properties interface

        interface ConstructorProps extends SaslXOAuth2.ConstructorProps {}
    }

    class SaslXOAuth2Google extends SaslXOAuth2 {
        static $gtype: GObject.GType<SaslXOAuth2Google>;

        // Constructors of Camel.SaslXOAuth2Google

        constructor(properties?: Partial<SaslXOAuth2Google.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module SaslXOAuth2Outlook {
        // Constructor properties interface

        interface ConstructorProps extends SaslXOAuth2.ConstructorProps {}
    }

    class SaslXOAuth2Outlook extends SaslXOAuth2 {
        static $gtype: GObject.GType<SaslXOAuth2Outlook>;

        // Constructors of Camel.SaslXOAuth2Outlook

        constructor(properties?: Partial<SaslXOAuth2Outlook.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module SaslXOAuth2Yahoo {
        // Constructor properties interface

        interface ConstructorProps extends SaslXOAuth2.ConstructorProps {}
    }

    class SaslXOAuth2Yahoo extends SaslXOAuth2 {
        static $gtype: GObject.GType<SaslXOAuth2Yahoo>;

        // Constructors of Camel.SaslXOAuth2Yahoo

        constructor(properties?: Partial<SaslXOAuth2Yahoo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module Service {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps, Gio.Initable.ConstructorProps {
            connection_status: ServiceConnectionStatus;
            connectionStatus: ServiceConnectionStatus;
            display_name: string;
            displayName: string;
            password: string;
            provider: Provider;
            proxy_resolver: Gio.ProxyResolver;
            proxyResolver: Gio.ProxyResolver;
            session: Session;
            settings: Settings;
            uid: string;
        }
    }

    abstract class Service extends Object implements Gio.Initable {
        static $gtype: GObject.GType<Service>;

        // Own properties of Camel.Service

        get connection_status(): ServiceConnectionStatus;
        get connectionStatus(): ServiceConnectionStatus;
        get display_name(): string;
        set display_name(val: string);
        get displayName(): string;
        set displayName(val: string);
        get password(): string;
        set password(val: string);
        get provider(): Provider;
        get proxy_resolver(): Gio.ProxyResolver;
        set proxy_resolver(val: Gio.ProxyResolver);
        get proxyResolver(): Gio.ProxyResolver;
        set proxyResolver(val: Gio.ProxyResolver);
        get session(): Session;
        get settings(): Settings;
        set settings(val: Settings);
        get uid(): string;

        // Constructors of Camel.Service

        constructor(properties?: Partial<Service.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Camel.Service

        /**
         * Attempts to authenticate `service` using `mechanism` and, if necessary,
         * `service'`s #CamelService:password property.  The function makes only
         * ONE attempt at authentication and does not loop.
         *
         * If the authentication attempt completed and the server accepted the
         * credentials, the function returns #CAMEL_AUTHENTICATION_ACCEPTED.
         *
         * If the authentication attempt completed but the server rejected the
         * credentials, the function returns #CAMEL_AUTHENTICATION_REJECTED.
         *
         * If the authentication attempt failed to complete due to a network
         * communication issue or some other mishap, the function sets `error`
         * and returns #CAMEL_AUTHENTICATION_ERROR.
         *
         * Generally this function should only be called from a #CamelSession
         * subclass in order to implement its own authentication loop.
         * @param mechanism a SASL mechanism name, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult;
        /**
         * Connects `service` to a remote server using the information in its
         * #CamelService:settings instance.
         *
         * If a connect operation is already in progress when this function is
         * called, its results will be reflected in this connect operation.
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Disconnect from the service. If `clean` is %FALSE, it should not
         * try to do any synchronizing or other cleanup of the connection.
         *
         * If a disconnect operation is already in progress when this function is
         * called, its results will be reflected in this disconnect operation.
         *
         * If any connect operations are in progress when this function is called,
         * they will be cancelled.
         * @param clean whether or not to try to disconnect cleanly
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * This gets the name of the service in a "friendly" (suitable for
         * humans) form. If `brief` is %TRUE, this should be a brief description
         * such as for use in the folder tree. If `brief` is %FALSE, it should
         * be a more complete and mostly unambiguous description.
         * @param brief whether or not to use a briefer form
         */
        vfunc_get_name(brief: boolean): string;
        /**
         * Obtains a list of authentication types supported by `service`.
         * Free the returned list with g_list_free().
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[];

        // Own methods of Camel.Service

        /**
         * Asynchronously attempts to authenticate `service` using `mechanism` and,
         * if necessary, `service'`s #CamelService:password property.  The function
         * makes only ONE attempt at authentication and does not loop.
         *
         * Generally this function should only be called from a #CamelSession
         * subclass in order to implement its own authentication loop.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call camel_service_authenticate_finish() to get the result of
         * the operation.
         * @param mechanism a SASL mechanism name, or %NULL
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        authenticate(
            mechanism: string | null,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_service_authenticate().
         *
         * If the authentication attempt completed and the server accepted the
         * credentials, the function returns #CAMEL_AUTHENTICATION_ACCEPTED.
         *
         * If the authentication attempt completed but the server rejected the
         * credentials, the function returns #CAMEL_AUTHENTICATION_REJECTED.
         *
         * If the authentication attempt failed to complete due to a network
         * communication issue or some other mishap, the function sets `error`
         * and returns #CAMEL_AUTHENTICATION_ERROR.
         * @param result a #GAsyncResult
         * @returns the authentication result
         */
        authenticate_finish(result: Gio.AsyncResult): AuthenticationResult;
        /**
         * Attempts to authenticate `service` using `mechanism` and, if necessary,
         * `service'`s #CamelService:password property.  The function makes only
         * ONE attempt at authentication and does not loop.
         *
         * If the authentication attempt completed and the server accepted the
         * credentials, the function returns #CAMEL_AUTHENTICATION_ACCEPTED.
         *
         * If the authentication attempt completed but the server rejected the
         * credentials, the function returns #CAMEL_AUTHENTICATION_REJECTED.
         *
         * If the authentication attempt failed to complete due to a network
         * communication issue or some other mishap, the function sets `error`
         * and returns #CAMEL_AUTHENTICATION_ERROR.
         *
         * Generally this function should only be called from a #CamelSession
         * subclass in order to implement its own authentication loop.
         * @param mechanism a SASL mechanism name, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the authentication result
         */
        authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult;
        /**
         * Asynchronously connects `service` to a remote server using the information
         * in its #CamelService:settings instance.
         *
         * If a connect operation is already in progress when this function is
         * called, its results will be reflected in this connect operation.
         *
         * If any disconnect operations are in progress when this function is
         * called, they will be cancelled.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call camel_service_connect_finish() to get the result of the
         * operation.
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        connect(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        connect(...args: never[]): any;
        /**
         * Finishes the operation started with camel_service_connect().
         * @param result a #GAsyncResult
         * @returns %TRUE if the connection was made or %FALSE otherwise
         */
        connect_finish(result: Gio.AsyncResult): boolean;
        /**
         * Connects `service` to a remote server using the information in its
         * #CamelService:settings instance.
         *
         * If a connect operation is already in progress when this function is
         * called, its results will be reflected in this connect operation.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE if the connection is made or %FALSE otherwise
         */
        connect_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * If a disconnect operation is already in progress when this function is
         * called, its results will be reflected in this disconnect operation.
         *
         * If any connect operations are in progress when this function is called,
         * they will be cancelled.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call camel_service_disconnect_finish() to get the result of the
         * operation.
         * @param clean whether or not to try to disconnect cleanly
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        disconnect(
            clean: boolean,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        // Conflicted with GObject.Object.disconnect
        disconnect(...args: never[]): any;
        /**
         * Finishes the operation started with camel_service_disconnect().
         * @param result a #GAsyncResult
         * @returns %TRUE if the connection was severed or %FALSE otherwise
         */
        disconnect_finish(result: Gio.AsyncResult): boolean;
        /**
         * Disconnect from the service. If `clean` is %FALSE, it should not
         * try to do any synchronizing or other cleanup of the connection.
         *
         * If a disconnect operation is already in progress when this function is
         * called, its results will be reflected in this disconnect operation.
         *
         * If any connect operations are in progress when this function is called,
         * they will be cancelled.
         * @param clean whether or not to try to disconnect cleanly
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE if the connection was severed or %FALSE otherwise
         */
        disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Thread-safe variation of camel_service_get_display_name().
         * Use this function when accessing `service` from multiple threads.
         *
         * The returned string should be freed with g_free() when no longer needed.
         * @returns a newly-allocated copy of #CamelService:display-name
         */
        dup_display_name(): string | null;
        /**
         * Thread-safe variation of camel_service_get_password().
         * Use this function when accessing `service` from multiple threads.
         *
         * The returned string should be freed with g_free() when no longer needed.
         * @returns a newly-allocated copy of #CamelService:password
         */
        dup_password(): string;
        /**
         * Returns the connection status for `service`.
         * @returns the connection status
         */
        get_connection_status(): ServiceConnectionStatus;
        /**
         * Returns the display name for `service,` or %NULL if `service` has not
         * been given a display name.  The display name is intended for use in
         * a user interface and should generally be given a user-defined name.
         *
         * Compare this with camel_service_get_name(), which returns a built-in
         * description of the type of service (IMAP, SMTP, etc.).
         * @returns the display name for @service, or %NULL
         */
        get_display_name(): string | null;
        /**
         * This gets the name of the service in a "friendly" (suitable for
         * humans) form. If `brief` is %TRUE, this should be a brief description
         * such as for use in the folder tree. If `brief` is %FALSE, it should
         * be a more complete and mostly unambiguous description.
         * @param brief whether or not to use a briefer form
         * @returns a description of the service which the caller must free
         */
        get_name(brief: boolean): string;
        /**
         * Returns the password for `service`.  Some SASL mechanisms use this
         * when attempting to authenticate.
         * @returns the password for @service
         */
        get_password(): string;
        /**
         * Gets the #CamelProvider associated with the service.
         * @returns the #CamelProvider
         */
        get_provider(): Provider;
        /**
         * Gets the unique identifier string associated with the service.
         * @returns the UID string
         */
        get_uid(): string;
        /**
         * Returns the base directory under which to store cache data
         * for `service`.  The directory is formed by appending the directory
         * returned by camel_session_get_user_cache_dir() with the service's
         * #CamelService:uid value.
         * @returns the base cache directory for @service
         */
        get_user_cache_dir(): string;
        /**
         * Returns the base directory under which to store user-specific data
         * for `service`.  The directory is formed by appending the directory
         * returned by camel_session_get_user_data_dir() with the service's
         * #CamelService:uid value.
         * @returns the base directory for @service
         */
        get_user_data_dir(): string;
        /**
         * Performs any necessary file migrations for `service`.  This should be
         * called after installing or configuring the `service'`s #CamelSettings,
         * since it requires building a URL string for `service`.
         */
        migrate_files(): void;
        /**
         * Returns a new #CamelURL representing `service`.
         * Free the returned #CamelURL with camel_url_free().
         * @returns a new #CamelURL
         */
        new_camel_url(): URL;
        /**
         * Asynchronously obtains a list of authentication types supported by
         * `service`.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call camel_service_query_auth_types_finish() to get the result
         * of the operation.
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        query_auth_types(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_service_query_auth_types().
         * Free the returned list with g_list_free().
         * @param result a #GAsyncResult
         * @returns a list of #CamelServiceAuthType structs
         */
        query_auth_types_finish(result: Gio.AsyncResult): ServiceAuthType[];
        /**
         * Obtains a list of authentication types supported by `service`.
         * Free the returned list with g_list_free().
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns a list of #CamelServiceAuthType structs
         */
        query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[];
        /**
         * Adds `task` to a queue of waiting tasks with the same source object.
         * Queued tasks execute one at a time in the order they were added.  When
         * `task` reaches the front of the queue, it will be dispatched by invoking
         * `task_func` in a separate thread.  If `task` is cancelled while queued,
         * it will complete immediately with an appropriate error.
         *
         * This is primarily intended for use by #CamelStore, #CamelTransport and
         * #CamelFolder to achieve ordered invocation of synchronous class methods.
         * @param task a #GTask
         * @param task_func function to call when @task is dispatched
         */
        queue_task(task: Gio.Task, task_func: Gio.TaskThreadFunc): void;
        /**
         * Returns the #GProxyResolver for `service`.  If an application needs to
         * override this, it should do so prior to calling functions on `service`
         * that may require a network connection.
         *
         * The returned #GProxyResolver is referenced for thread-safety and must
         * be unreferenced with g_object_unref() when finished with it.
         * @returns a #GProxyResolver, or %NULL
         */
        ref_proxy_resolver(): Gio.ProxyResolver | null;
        /**
         * Returns the #CamelSession associated with the service.
         *
         * The returned #CamelSession is referenced for thread-safety.  Unreference
         * the #CamelSession with g_object_unref() when finished with it.
         * @returns the #CamelSession
         */
        ref_session(): Session;
        /**
         * Returns the #CamelSettings instance associated with the service.
         *
         * The returned #CamelSettings is referenced for thread-safety and must
         * be unreferenced with g_object_unref() when finished with it.
         * @returns the #CamelSettings
         */
        ref_settings(): Settings;
        /**
         * Assigns a UTF-8 display name to `service`.  The display name is intended
         * for use in a user interface and should generally be given a user-defined
         * name.
         *
         * Compare this with camel_service_get_name(), which returns a built-in
         * description of the type of service (IMAP, SMTP, etc.).
         * @param display_name a valid UTF-8 string, or %NULL
         */
        set_display_name(display_name?: string | null): void;
        /**
         * Sets the password for `service`.  Use this function to cache the password
         * in memory after obtaining it through camel_session_get_password().  Some
         * SASL mechanisms use this when attempting to authenticate.
         * @param password the password for @service
         */
        set_password(password: string): void;
        /**
         * Sets the #GProxyResolver for `service`.  If an application needs to
         * override this, it should do so prior to calling functions on `service`
         * that may require a network connection.
         * @param proxy_resolver a #GProxyResolver, or %NULL for the default
         */
        set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void;
        /**
         * Associates a new #CamelSettings instance with the service.
         * The `settings` instance must match the settings type defined in
         * #CamelServiceClass.  If `settings` is %NULL, a new #CamelSettings
         * instance of the appropriate type is created with all properties
         * set to defaults.
         * @param settings an instance derviced from #CamelSettings, or %NULL
         */
        set_settings(settings?: Settings | null): void;

        // Inherited methods
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
        set_property(property_name: string, value: any): void;
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
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Session {
        // Signal callback interfaces

        interface JobFinished {
            (object: Gio.Cancellable | null, p0: GLib.Error): void;
        }

        interface JobStarted {
            (object?: Gio.Cancellable | null): void;
        }

        interface UserAlert {
            (service: Service, type: SessionAlertType, message: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            junk_filter: JunkFilter;
            junkFilter: JunkFilter;
            main_context: GLib.MainContext;
            mainContext: GLib.MainContext;
            network_monitor: Gio.NetworkMonitor;
            networkMonitor: Gio.NetworkMonitor;
            online: boolean;
            user_cache_dir: string;
            userCacheDir: string;
            user_data_dir: string;
            userDataDir: string;
        }
    }

    class Session extends GObject.Object {
        static $gtype: GObject.GType<Session>;

        // Own properties of Camel.Session

        get junk_filter(): JunkFilter;
        set junk_filter(val: JunkFilter);
        get junkFilter(): JunkFilter;
        set junkFilter(val: JunkFilter);
        get main_context(): GLib.MainContext;
        get mainContext(): GLib.MainContext;
        get network_monitor(): Gio.NetworkMonitor;
        set network_monitor(val: Gio.NetworkMonitor);
        get networkMonitor(): Gio.NetworkMonitor;
        set networkMonitor(val: Gio.NetworkMonitor);
        get online(): boolean;
        set online(val: boolean);
        get user_cache_dir(): string;
        set user_cache_dir(val: string);
        get userCacheDir(): string;
        set userCacheDir(val: string);
        get user_data_dir(): string;
        set user_data_dir(val: string);
        get userDataDir(): string;
        set userDataDir(val: string);

        // Constructors of Camel.Session

        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Camel.Session

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'job-finished',
            callback: (_source: this, object: Gio.Cancellable | null, p0: GLib.Error) => void,
        ): number;
        connect_after(
            signal: 'job-finished',
            callback: (_source: this, object: Gio.Cancellable | null, p0: GLib.Error) => void,
        ): number;
        emit(signal: 'job-finished', object: Gio.Cancellable | null, p0: GLib.Error): void;
        connect(signal: 'job-started', callback: (_source: this, object: Gio.Cancellable | null) => void): number;
        connect_after(signal: 'job-started', callback: (_source: this, object: Gio.Cancellable | null) => void): number;
        emit(signal: 'job-started', object?: Gio.Cancellable | null): void;
        connect(
            signal: 'user-alert',
            callback: (_source: this, service: Service, type: SessionAlertType, message: string) => void,
        ): number;
        connect_after(
            signal: 'user-alert',
            callback: (_source: this, service: Service, type: SessionAlertType, message: string) => void,
        ): number;
        emit(signal: 'user-alert', service: Service, type: SessionAlertType, message: string): void;

        // Own virtual methods of Camel.Session

        /**
         * Instantiates a new #CamelService for `session`.  The `uid` identifies the
         * service for future lookup.  The `protocol` indicates which #CamelProvider
         * holds the #GType of the #CamelService subclass to instantiate.  The `type`
         * explicitly designates the service as a #CamelStore or #CamelTransport.
         *
         * If the given `uid` has already been added, the existing #CamelService
         * with that `uid` is returned regardless of whether it agrees with the
         * given `protocol` and `type`.
         *
         * If no #CamelProvider is available to handle the given `protocol,` or
         * if the #CamelProvider does not specify a valid #GType for `type,` the
         * function sets `error` and returns %NULL.
         *
         * The returned #CamelService is referenced for thread-safety and must be
         * unreferenced with g_object_unref() when finished with it.
         * @param uid a unique identifier string
         * @param protocol the service protocol
         * @param type the service type
         */
        vfunc_add_service(uid: string, protocol: string, type: ProviderType): Service;
        /**
         * Look up in an address book `book_uid` for an address `email_address`
         * and returns whether any such contact exists.
         *
         * The `book_uid` can be either one of the special constants
         * %CAMEL_SESSION_BOOK_UID_ANY or %CAMEL_SESSION_BOOK_UID_COMPLETION,
         * or it can be a UID of a configured address book.
         *
         * The `email_address` can contain multiple addresses, then the function
         * checks whether any of the given addresses is in the address book.
         * @param book_uid an address book UID
         * @param email_address an email address to check for
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_addressbook_contains_sync(
            book_uid: string,
            email_address: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Authenticates `service,` which may involve repeated calls to
         * camel_service_authenticate() or camel_service_authenticate_sync().
         * A #CamelSession subclass is largely responsible for implementing this,
         * and should handle things like user prompts and secure password storage.
         * These issues are out-of-scope for Camel.
         *
         * If an error occurs, or if authentication is aborted, the function sets
         * `error` and returns %FALSE.
         * @param service a #CamelService
         * @param mechanism a SASL mechanism name, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_authenticate_sync(
            service: Service,
            mechanism?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * This function is used by a #CamelService to tell the application
         * that the authentication information it provided via
         * camel_session_get_password() was rejected by the service. If the
         * application was caching this information, it should stop,
         * and if the service asks for it again, it should ask the user.
         *
         * `service` and `item` identify the rejected authentication information,
         * as with camel_session_get_password().
         * @param service the #CamelService rejecting the password
         * @param item an identifier, unique within this service, for the information
         */
        vfunc_forget_password(service: Service, item: string): boolean;
        /**
         * Forwards `message` in `folder` to the email address(es) given by `address`.
         *
         * If an error occurs, the function sets `error` and returns %FALSE.
         * @param folder the #CamelFolder where @message is located
         * @param message the #CamelMimeMessage to forward
         * @param address the recipient's email address
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_forward_to_sync(
            folder: Folder,
            message: MimeMessage,
            address: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * The optional `for_folder` can be used to determine which filters
         * to add and which not.
         * @param type the type of filter (eg, "incoming")
         * @param for_folder an optional #CamelFolder, for which the filter driver will run, or %NULL
         */
        vfunc_get_filter_driver(type: string, for_folder?: Folder | null): FilterDriver;
        /**
         * Obtains the OAuth 2.0 access token for `service` along with its expiry
         * in seconds from the current time (or 0 if unknown).
         *
         * Free the returned access token with g_free() when no longer needed.
         * @param service a #CamelService
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_get_oauth2_access_token_sync(
            service: Service,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string, number];
        /**
         * This function is used by a #CamelService to ask the application and
         * the user for a password or other authentication data.
         *
         * `service` and `item` together uniquely identify the piece of data the
         * caller is concerned with.
         *
         * `prompt` is a question to ask the user (if the application doesn't
         * already have the answer cached). If %CAMEL_SESSION_PASSWORD_SECRET
         * is set, the user's input will not be echoed back.
         *
         * If %CAMEL_SESSION_PASSWORD_STATIC is set, it means the password returned
         * will be stored statically by the caller automatically, for the current
         * session.
         *
         * The authenticator should set `error` to %G_IO_ERROR_CANCELLED if
         * the user did not provide the information. The caller must g_free()
         * the information returned when it is done with it.
         * @param service the #CamelService this query is being made by
         * @param prompt prompt to provide to user
         * @param item an identifier, unique within this service, for the information
         * @param flags %CAMEL_SESSION_PASSWORD_REPROMPT, the prompt should force a reprompt %CAMEL_SESSION_PASSWORD_SECRET, whether the password is secret %CAMEL_SESSION_PASSWORD_STATIC, the password is remembered externally
         */
        vfunc_get_password(service: Service, prompt: string, item: string, flags: number): string;
        /**
         * Searches for S/MIME certificates or PGP keys for the given `recipients,`
         * which are returned as base64 encoded strings in `out_certificates`.
         * This is used when encrypting messages. The `flags` influence what
         * the `out_certificates` will contain. The order of items in `out_certificates`
         * should match the order of items in `recipients,` with %NULL data for those
         * which could not be found.
         *
         * The function should return failure only if some fatal error happened.
         * It's not an error when certificates for some, or all, recipients
         * could not be found.
         *
         * This method is optional and the default implementation returns %TRUE
         * and sets the `out_certificates` to %NULL. It's the only exception
         * when the length of `recipients` and `out_certificates` can differ.
         * In all other cases the length of the two should match.
         *
         * The `out_certificates` will be freed with g_slist_free_full (certificates, g_free);
         * when done with it.
         * @param flags bit-or of #CamelRecipientCertificateFlags
         * @param recipients a #GPtrArray of recipients
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_get_recipient_certificates_sync(
            flags: number,
            recipients: string[],
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string[]];
        vfunc_job_finished(cancellable: Gio.Cancellable | null, error: GLib.Error): void;
        vfunc_job_started(cancellable?: Gio.Cancellable | null): void;
        /**
         * Looks up for the `name` in address books.
         * @param name a name/address to lookup for
         */
        vfunc_lookup_addressbook(name: string): boolean;
        /**
         * Removes a #CamelService previously added by camel_session_add_service().
         * @param service the #CamelService to remove
         */
        vfunc_remove_service(service: Service): void;
        /**
         * Prompts the user whether to accept `certificate` for `service`.  The
         * set of flags given in `errors` indicate why the `certificate` failed
         * validation.
         *
         * If an error occurs during prompting or if the user declines to respond,
         * the function returns #CAMEL_CERT_TRUST_UNKNOWN and the certificate will
         * be rejected.
         * @param service a #CamelService
         * @param certificate the peer's #GTlsCertificate
         * @param errors the problems with @certificate
         */
        vfunc_trust_prompt(
            service: Service,
            certificate: Gio.TlsCertificate,
            errors: Gio.TlsCertificateFlags,
        ): CertTrust;
        /**
         * Emits a #CamelSession:user_alert signal from an idle source on the main
         * loop.  The idle source's priority is #G_PRIORITY_LOW.
         *
         * The purpose of the signal is to propagate a server-issued alert message
         * from `service` to a user interface.  The `type` hints at the nature of the
         * alert message.
         * @param service a #CamelService
         * @param type a #CamelSessionAlertType
         * @param message the message for the user
         */
        vfunc_user_alert(service: Service, type: SessionAlertType, message: string): void;

        // Own methods of Camel.Session

        /**
         * Instantiates a new #CamelService for `session`.  The `uid` identifies the
         * service for future lookup.  The `protocol` indicates which #CamelProvider
         * holds the #GType of the #CamelService subclass to instantiate.  The `type`
         * explicitly designates the service as a #CamelStore or #CamelTransport.
         *
         * If the given `uid` has already been added, the existing #CamelService
         * with that `uid` is returned regardless of whether it agrees with the
         * given `protocol` and `type`.
         *
         * If no #CamelProvider is available to handle the given `protocol,` or
         * if the #CamelProvider does not specify a valid #GType for `type,` the
         * function sets `error` and returns %NULL.
         *
         * The returned #CamelService is referenced for thread-safety and must be
         * unreferenced with g_object_unref() when finished with it.
         * @param uid a unique identifier string
         * @param protocol the service protocol
         * @param type the service type
         * @returns a #CamelService instance, or %NULL on error
         */
        add_service(uid: string, protocol: string, type: ProviderType): Service;
        /**
         * Look up in an address book `book_uid` for an address `email_address`
         * and returns whether any such contact exists.
         *
         * The `book_uid` can be either one of the special constants
         * %CAMEL_SESSION_BOOK_UID_ANY or %CAMEL_SESSION_BOOK_UID_COMPLETION,
         * or it can be a UID of a configured address book.
         *
         * The `email_address` can contain multiple addresses, then the function
         * checks whether any of the given addresses is in the address book.
         * @param book_uid an address book UID
         * @param email_address an email address to check for
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE, when the @email_address could be found in the @book_uid
         */
        addressbook_contains_sync(
            book_uid: string,
            email_address: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously authenticates `service,` which may involve repeated calls
         * to camel_service_authenticate() or camel_service_authenticate_sync().
         * A #CamelSession subclass is largely responsible for implementing this,
         * and should handle things like user prompts and secure password storage.
         * These issues are out-of-scope for Camel.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call camel_session_authenticate_finish() to get the result of
         * the operation.
         * @param service a #CamelService
         * @param mechanism a SASL mechanism name, or %NULL
         * @param io_priority the I/O priority for the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        authenticate(
            service: Service,
            mechanism: string | null,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_session_authenticate().
         *
         * If an error occurred, or if authentication was aborted, the function
         * sets `error` and returns %FALSE.
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on failure
         */
        authenticate_finish(result: Gio.AsyncResult): boolean;
        /**
         * Authenticates `service,` which may involve repeated calls to
         * camel_service_authenticate() or camel_service_authenticate_sync().
         * A #CamelSession subclass is largely responsible for implementing this,
         * and should handle things like user prompts and secure password storage.
         * These issues are out-of-scope for Camel.
         *
         * If an error occurs, or if authentication is aborted, the function sets
         * `error` and returns %FALSE.
         * @param service a #CamelService
         * @param mechanism a SASL mechanism name, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on failure
         */
        authenticate_sync(service: Service, mechanism?: string | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * This function is used by a #CamelService to tell the application
         * that the authentication information it provided via
         * camel_session_get_password() was rejected by the service. If the
         * application was caching this information, it should stop,
         * and if the service asks for it again, it should ask the user.
         *
         * `service` and `item` identify the rejected authentication information,
         * as with camel_session_get_password().
         * @param service the #CamelService rejecting the password
         * @param item an identifier, unique within this service, for the information
         * @returns %TRUE on success, %FALSE on failure
         */
        forget_password(service: Service, item: string): boolean;
        /**
         * Asynchronously forwards `message` in `folder` to the email address(s)
         * given by `address`.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call camel_session_forward_to_finish() to get the result of the
         * operation.
         * @param folder the #CamelFolder where @message is located
         * @param message the #CamelMimeMessage to forward
         * @param address the recipient's email address
         * @param io_priority the I/O priority for the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        forward_to(
            folder: Folder,
            message: MimeMessage,
            address: string,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_session_forward_to().
         *
         * If an error occurred, the function sets `error` and returns %FALSE.
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on failure
         */
        forward_to_finish(result: Gio.AsyncResult): boolean;
        /**
         * Forwards `message` in `folder` to the email address(es) given by `address`.
         *
         * If an error occurs, the function sets `error` and returns %FALSE.
         * @param folder the #CamelFolder where @message is located
         * @param message the #CamelMimeMessage to forward
         * @param address the recipient's email address
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on failure
         */
        forward_to_sync(
            folder: Folder,
            message: MimeMessage,
            address: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * The optional `for_folder` can be used to determine which filters
         * to add and which not.
         * @param type the type of filter (eg, "incoming")
         * @param for_folder an optional #CamelFolder, for which the filter driver will run, or %NULL
         * @returns a filter driver, loaded with applicable rules
         */
        get_filter_driver(type: string, for_folder?: Folder | null): FilterDriver;
        /**
         * Returns the #CamelJunkFilter instance used to classify messages as
         * junk or not junk during filtering.
         *
         * Note that #CamelJunkFilter itself is just an interface.  The application
         * must implement the interface and install a #CamelJunkFilter instance for
         * junk filtering to take place.
         * @returns a #CamelJunkFilter, or %NULL
         */
        get_junk_filter(): JunkFilter | null;
        get_junk_headers(): GLib.HashTable<string, string>;
        /**
         * Obtains the OAuth 2.0 access token for `service` along with its expiry
         * in seconds from the current time (or 0 if unknown).
         *
         * Free the returned access token with g_free() when no longer needed.
         * @param service a #CamelService
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns whether succeeded
         */
        get_oauth2_access_token_sync(service: Service, cancellable?: Gio.Cancellable | null): [boolean, string, number];
        get_online(): boolean;
        /**
         * This function is used by a #CamelService to ask the application and
         * the user for a password or other authentication data.
         *
         * `service` and `item` together uniquely identify the piece of data the
         * caller is concerned with.
         *
         * `prompt` is a question to ask the user (if the application doesn't
         * already have the answer cached). If %CAMEL_SESSION_PASSWORD_SECRET
         * is set, the user's input will not be echoed back.
         *
         * If %CAMEL_SESSION_PASSWORD_STATIC is set, it means the password returned
         * will be stored statically by the caller automatically, for the current
         * session.
         *
         * The authenticator should set `error` to %G_IO_ERROR_CANCELLED if
         * the user did not provide the information. The caller must g_free()
         * the information returned when it is done with it.
         * @param service the #CamelService this query is being made by
         * @param prompt prompt to provide to user
         * @param item an identifier, unique within this service, for the information
         * @param flags %CAMEL_SESSION_PASSWORD_REPROMPT, the prompt should force a reprompt %CAMEL_SESSION_PASSWORD_SECRET, whether the password is secret %CAMEL_SESSION_PASSWORD_STATIC, the password is remembered externally
         * @returns the authentication information or %NULL on error
         */
        get_password(service: Service, prompt: string, item: string, flags: number): string;
        /**
         * Searches for S/MIME certificates or PGP keys for the given `recipients,`
         * which are returned as base64 encoded strings in `out_certificates`.
         * This is used when encrypting messages. The `flags` influence what
         * the `out_certificates` will contain. The order of items in `out_certificates`
         * should match the order of items in `recipients,` with %NULL data for those
         * which could not be found.
         *
         * The function should return failure only if some fatal error happened.
         * It's not an error when certificates for some, or all, recipients
         * could not be found.
         *
         * This method is optional and the default implementation returns %TRUE
         * and sets the `out_certificates` to %NULL. It's the only exception
         * when the length of `recipients` and `out_certificates` can differ.
         * In all other cases the length of the two should match.
         *
         * The `out_certificates` will be freed with g_slist_free_full (certificates, g_free);
         * when done with it.
         * @param flags bit-or of #CamelRecipientCertificateFlags
         * @param recipients a #GPtrArray of recipients
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded, or better whether no fatal error happened.
         */
        get_recipient_certificates_sync(
            flags: number,
            recipients: string[],
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string[]];
        /**
         * Returns the base directory under which to store user-specific mail cache.
         * @returns the base directory for mail cache
         */
        get_user_cache_dir(): string;
        /**
         * Returns the base directory under which to store user-specific mail data.
         * @returns the base directory for mail data
         */
        get_user_data_dir(): string;
        /**
         * Adds a function to be called whenever there are no higher priority events
         * pending.  If `function` returns %FALSE it is automatically removed from the
         * list of event sources and will not be called again.
         *
         * This internally creates a main loop source using g_idle_source_new()
         * and attaches it to `session'`s own #CamelSession:main-context using
         * g_source_attach().
         *
         * The `priority` is typically in the range between %G_PRIORITY_DEFAULT_IDLE
         * and %G_PRIORITY_HIGH_IDLE.
         * @param priority the priority of the idle source
         * @param _function a function to call
         * @returns the ID (greater than 0) of the event source
         */
        idle_add(priority: number, _function: GLib.SourceFunc): number;
        /**
         * Returns a list of all #CamelService objects previously added using
         * camel_session_add_service().
         *
         * The services returned in the list are referenced for thread-safety.
         * They must each be unreferenced with g_object_unref() when finished
         * with them.  Free the returned list itself with g_list_free().
         *
         * An easy way to free the list property in one step is as follows:
         *
         *
         * ```
         *   g_list_free_full (list, g_object_unref);
         * ```
         *
         * @returns an unsorted list of #CamelService objects
         */
        list_services(): Service[];
        /**
         * Looks up for the `name` in address books.
         * @param name a name/address to lookup for
         * @returns whether found the @name in any address book.
         */
        lookup_addressbook(name: string): boolean;
        /**
         * Returns the #GMainContext on which event sources for `session` are to
         * be attached.
         * @returns a #GMainContext
         */
        ref_main_context(): GLib.MainContext;
        /**
         * References a #GNetworkMonitor instance, which had been previously set
         * by camel_session_set_network_monitor(). If none is set, then the default
         * #GNetworkMonitor is returned, as provided by g_network_monitor_get_default().
         * The returned pointer is referenced for thread safety, unref it with
         * g_object_unref() when no longer needed.
         * @returns A referenced #GNetworkMonitor instance to use   for network availability tests.
         */
        ref_network_monitor(): Gio.NetworkMonitor;
        /**
         * Looks up a #CamelService by its unique identifier string.  The service
         * must have been previously added using camel_session_add_service().
         *
         * The returned #CamelService is referenced for thread-safety and must be
         * unreferenced with g_object_unref() when finished with it.
         * @param uid a unique identifier string
         * @returns a #CamelService instance, or %NULL
         */
        ref_service(uid: string): Service | null;
        /**
         * Looks up a #CamelService by trying to match its #CamelURL against the
         * given `url` and then checking that the object is of the desired `type`.
         * The service must have been previously added using
         * camel_session_add_service().
         *
         * The returned #CamelService is referenced for thread-safety and must be
         * unreferenced with g_object_unref() when finished with it.
         *
         * Note this function is significantly slower than camel_session_ref_service().
         * @param url a #CamelURL
         * @param type a #CamelProviderType
         * @returns a #CamelService instance, or %NULL
         */
        ref_service_by_url(url: URL, type: ProviderType): Service | null;
        /**
         * Removes a #CamelService previously added by camel_session_add_service().
         * @param service the #CamelService to remove
         */
        remove_service(service: Service): void;
        /**
         * Removes all #CamelService instances added by camel_session_add_service().
         *
         * This can be useful during application shutdown to ensure all #CamelService
         * instances are freed properly, especially since #CamelSession instances are
         * prone to reference cycles.
         */
        remove_services(): void;
        /**
         * Installs the #CamelJunkFilter instance used to classify messages as
         * junk or not junk during filtering.
         *
         * Note that #CamelJunkFilter itself is just an interface.  The application
         * must implement the interface and install a #CamelJunkFilter instance for
         * junk filtering to take place.
         * @param junk_filter a #CamelJunkFilter, or %NULL
         */
        set_junk_filter(junk_filter?: JunkFilter | null): void;
        set_junk_headers(headers: string[], values: string[]): void;
        /**
         * Sets a network monitor instance for the `session`. This can be used
         * to override which #GNetworkMonitor should be used to check network
         * availability and whether a server is reachable.
         * @param network_monitor a #GNetworkMonitor or %NULL
         */
        set_network_monitor(network_monitor?: Gio.NetworkMonitor | null): void;
        /**
         * Sets the online status of `session` to `online`.
         * @param online whether or not the session should be online
         */
        set_online(online: boolean): void;
        /**
         * This function provides a simple mechanism for providers to initiate
         * low-priority background jobs.  Jobs can be submitted from any thread,
         * but execution of the jobs is always as follows:
         *
         * 1) The #CamelSession:job-started signal is emitted from the thread
         *    in which `session` was created.  This is typically the same thread
         *    that hosts the global default #GMainContext, or "main" thread.
         *
         * 2) The `callback` function is invoked from a different thread where
         *    it's safe to call synchronous functions.
         *
         * 3) Once `callback` has returned, the #CamelSesson:job-finished signal
         *    is emitted from the same thread as #CamelSession:job-started was
         *    emitted.
         *
         * 4) Finally if a `notify` function was provided, it is invoked and
         *    passed `user_data` so that `user_data` can be freed.
         * @param description human readable description of the job, shown to a user
         * @param callback a #CamelSessionCallback
         */
        submit_job(description: string, callback: SessionCallback): void;
        /**
         * Prompts the user whether to accept `certificate` for `service`.  The
         * set of flags given in `errors` indicate why the `certificate` failed
         * validation.
         *
         * If an error occurs during prompting or if the user declines to respond,
         * the function returns #CAMEL_CERT_TRUST_UNKNOWN and the certificate will
         * be rejected.
         * @param service a #CamelService
         * @param certificate the peer's #GTlsCertificate
         * @param errors the problems with @certificate
         * @returns the user's trust level for @certificate
         */
        trust_prompt(service: Service, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): CertTrust;
        /**
         * Emits a #CamelSession:user_alert signal from an idle source on the main
         * loop.  The idle source's priority is #G_PRIORITY_LOW.
         *
         * The purpose of the signal is to propagate a server-issued alert message
         * from `service` to a user interface.  The `type` hints at the nature of the
         * alert message.
         * @param service a #CamelService
         * @param type a #CamelSessionAlertType
         * @param message the message for the user
         */
        user_alert(service: Service, type: SessionAlertType, message: string): void;
    }

    module Settings {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class Settings extends GObject.Object {
        static $gtype: GObject.GType<Settings>;

        // Constructors of Camel.Settings

        constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Camel.Settings

        static list_settings(n_settings: number): GObject.ParamSpec;

        // Own virtual methods of Camel.Settings

        /**
         * Creates a copy of `settings,` such that passing `settings` and the
         * copied instance to camel_settings_equal() would return %TRUE.
         *
         * By default, this creates a new settings instance with the same #GType
         * as `settings,` and copies all #GObject property values from `settings`
         * to the new instance.
         */
        vfunc_clone(): Settings;
        /**
         * Returns %TRUE if `settings_a` and `settings_b` are equal.
         *
         * By default, equality requires both instances to have the same #GType
         * with the same set of #GObject properties, and each property value in
         * `settings_a` is equal to the corresponding value in `settings_b`.
         * @param settings_b another #CamelSettings
         */
        vfunc_equal(settings_b: Settings): boolean;

        // Own methods of Camel.Settings

        /**
         * Creates a copy of `settings,` such that passing `settings` and the
         * copied instance to camel_settings_equal() would return %TRUE.
         *
         * By default, this creates a new settings instance with the same #GType
         * as `settings,` and copies all #GObject property values from `settings`
         * to the new instance.
         * @returns a newly-created copy of @settings
         */
        clone(): Settings;
        /**
         * Returns %TRUE if `settings_a` and `settings_b` are equal.
         *
         * By default, equality requires both instances to have the same #GType
         * with the same set of #GObject properties, and each property value in
         * `settings_a` is equal to the corresponding value in `settings_b`.
         * @param settings_b another #CamelSettings
         * @returns %TRUE if @settings_a and @settings_b are equal
         */
        equal(settings_b: Settings): boolean;
    }

    module Store {
        // Signal callback interfaces

        interface FolderCreated {
            (object: FolderInfo): void;
        }

        interface FolderDeleted {
            (object: FolderInfo): void;
        }

        interface FolderInfoStale {
            (): void;
        }

        interface FolderOpened {
            (object: Folder): void;
        }

        interface FolderRenamed {
            (object: string, p0: FolderInfo): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Service.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    abstract class Store extends Service implements Gio.Initable {
        static $gtype: GObject.GType<Store>;

        // Constructors of Camel.Store

        constructor(properties?: Partial<Store.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Camel.Store

        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect_after(signal: 'folder-created', callback: (_source: this, object: FolderInfo) => void): number;
        emit(signal: 'folder-created', object: FolderInfo): void;
        connect_after(signal: 'folder-deleted', callback: (_source: this, object: FolderInfo) => void): number;
        emit(signal: 'folder-deleted', object: FolderInfo): void;
        connect_after(signal: 'folder-info-stale', callback: (_source: this) => void): number;
        emit(signal: 'folder-info-stale'): void;
        connect_after(signal: 'folder-opened', callback: (_source: this, object: Folder) => void): number;
        emit(signal: 'folder-opened', object: Folder): void;
        connect_after(
            signal: 'folder-renamed',
            callback: (_source: this, object: string, p0: FolderInfo) => void,
        ): number;
        emit(signal: 'folder-renamed', object: string, p0: FolderInfo): void;

        // Own virtual methods of Camel.Store

        /**
         * Returns if this folder (param info) should be checked for new mail or not.
         * It should not look into sub infos (info->child) or next infos, it should
         * return value only for the actual folder info.
         * Default behavior is that all Inbox folders are intended to be refreshed.
         * @param info a #CamelFolderInfo
         */
        vfunc_can_refresh_folder(info: FolderInfo): boolean;
        /**
         * Creates a new folder as a child of an existing folder.
         * `parent_name` can be %NULL to create a new top-level folder.
         * The returned #CamelFolderInfo struct should be freed with
         * camel_folder_info_free().
         * @param parent_name name of the new folder's parent, or %NULL
         * @param folder_name name of the folder to create
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_create_folder_sync(
            parent_name: string | null,
            folder_name: string,
            cancellable?: Gio.Cancellable | null,
        ): FolderInfo | null;
        /**
         * Deletes the folder described by `folder_name`.  The folder must be empty.
         * @param folder_name name of the folder to delete
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Emits the #CamelStore::folder-created signal from an idle source on
         * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
         *
         * This function is only intended for Camel providers.
         * @param folder_info information about the created folder
         */
        vfunc_folder_created(folder_info: FolderInfo): void;
        /**
         * Emits the #CamelStore::folder-deleted signal from an idle source on
         * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
         *
         * This function is only intended for Camel providers.
         * @param folder_info information about the deleted folder
         */
        vfunc_folder_deleted(folder_info: FolderInfo): void;
        /**
         * Emits the #CamelStore::folder-info-stale signal from an idle source
         * on the main loop.  The idle source's priority is #G_PRIORITY_LOW.
         *
         * See the #CamelStore::folder-info-stale documentation for details on
         * when to use this signal.
         *
         * This function is only intended for Camel providers.
         */
        vfunc_folder_info_stale(): void;
        /**
         * Emits the #CamelStore::folder-opened signal from an idle source on
         * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
         *
         * This function is only intended for Camel providers.
         * @param folder the #CamelFolder that was opened
         */
        vfunc_folder_opened(folder: Folder): void;
        /**
         * Emits the #CamelStore::folder-renamed signal from an idle source on
         * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
         *
         * This function is only intended for Camel providers.
         * @param old_name the old name of the folder
         * @param folder_info information about the renamed folder
         */
        vfunc_folder_renamed(old_name: string, folder_info: FolderInfo): void;
        /**
         * Returns whether there can be done automatic save of folder changes.
         * Default is TRUE. The descendants can overwrite it with CamelStoreClass::get_can_auto_save_changes().
         */
        vfunc_get_can_auto_save_changes(): boolean;
        /**
         * This fetches information about the folder structure of `store,`
         * starting with `top,` and returns a tree of #CamelFolderInfo
         * structures. If `flags` includes %CAMEL_STORE_FOLDER_INFO_SUBSCRIBED,
         * only subscribed folders will be listed.   If the store doesn't support
         * subscriptions, then it will list all folders.  If `flags` includes
         * %CAMEL_STORE_FOLDER_INFO_RECURSIVE, the returned tree will include
         * all levels of hierarchy below `top`. If not, it will only include
         * the immediate subfolders of `top`. If `flags` includes
         * %CAMEL_STORE_FOLDER_INFO_FAST, the unread_message_count fields of
         * some or all of the structures may be set to -1, if the store cannot
         * determine that information quickly.  If `flags` includes
         * %CAMEL_STORE_FOLDER_INFO_NO_VIRTUAL, don't include special virtual
         * folders (such as vTrash or vJunk).
         *
         * The returned #CamelFolderInfo tree should be freed with
         * camel_folder_info_free().
         *
         * The CAMEL_STORE_FOLDER_INFO_FAST flag should be considered
         * deprecated; most backends will behave the same whether it is
         * supplied or not.  The only guaranteed way to get updated folder
         * counts is to both open the folder and invoke camel_folder_refresh_info() it.
         * @param top the name of the folder to start from
         * @param flags various CAMEL_STORE_FOLDER_INFO_* flags to control behavior
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_get_folder_info_sync(
            top: string | null,
            flags: StoreGetFolderInfoFlags,
            cancellable?: Gio.Cancellable | null,
        ): FolderInfo | null;
        /**
         * Gets a specific folder object from `store` by name.
         * @param folder_name name of the folder to get
         * @param flags folder flags (create, save body index, etc)
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_get_folder_sync(
            folder_name: string,
            flags: StoreGetFolderFlags,
            cancellable?: Gio.Cancellable | null,
        ): Folder | null;
        /**
         * Gets the folder in `store` into which new mail is delivered.
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null;
        /**
         * Gets the folder in `store` into which junk is delivered.
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null;
        /**
         * Gets the folder in `store` into which trash is delivered.
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null;
        /**
         * Runs initial setup for the `store`. It's meant to preset some
         * values the first time the account connects to the server after
         * it had been created. The function should return %TRUE even if
         * it didn't populate anything. The default implementation does
         * just that.
         *
         * The save_setup result, if not %NULL, should be freed using
         * g_hash_table_destroy(). It's not an error to have it %NULL,
         * it only means the `store` doesn't have anything to save.
         * Both the key and the value in the hash are newly allocated
         * UTF-8 strings, owned by the hash table.
         *
         * The `store` advertises support of this function by including
         * CAMEL_STORE_SUPPORTS_INITIAL_SETUP in CamelStore::flags.
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_initial_setup_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.HashTable<string, string>];
        /**
         * Renames the folder described by `old_name` to `new_name`.
         * @param old_name the current name of the folder
         * @param new_name the new name of the folder
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Synchronizes any changes that have been made to `store` and its folders
         * with the real store.
         * @param expunge whether to expunge after synchronizing
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean;

        // Own methods of Camel.Store

        /**
         * Returns if this folder (param info) should be checked for new mail or not.
         * It should not look into sub infos (info->child) or next infos, it should
         * return value only for the actual folder info.
         * Default behavior is that all Inbox folders are intended to be refreshed.
         * @param info a #CamelFolderInfo
         * @returns whether folder should be checked for new mails
         */
        can_refresh_folder(info: FolderInfo): boolean;
        /**
         * Asynchronously creates a new folder as a child of an existing folder.
         * `parent_name` can be %NULL to create a new top-level folder.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_store_create_folder_finish() to get the result of the operation.
         * @param parent_name name of the new folder's parent, or %NULL
         * @param folder_name name of the folder to create
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        create_folder(
            parent_name: string | null,
            folder_name: string,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_store_create_folder().
         * The returned #CamelFolderInfo struct should be freed with
         * camel_folder_info_free().
         * @param result a #GAsyncResult
         * @returns info about the created folder, or %NULL on error
         */
        create_folder_finish(result: Gio.AsyncResult): FolderInfo | null;
        /**
         * Creates a new folder as a child of an existing folder.
         * `parent_name` can be %NULL to create a new top-level folder.
         * The returned #CamelFolderInfo struct should be freed with
         * camel_folder_info_free().
         * @param parent_name name of the new folder's parent, or %NULL
         * @param folder_name name of the folder to create
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns info about the created folder, or %NULL on error
         */
        create_folder_sync(
            parent_name: string | null,
            folder_name: string,
            cancellable?: Gio.Cancellable | null,
        ): FolderInfo | null;
        /**
         * Deletes local data for the given `folder_name`. The folder should
         * be part of the opened folders.
         *
         * It doesn't delete the folder in the store (server) as such.
         * Use camel_store_delete_folder(), or its synchronous variant,
         * if you want to do that instead.
         * @param folder_name a folder full name to delete from the cache
         */
        delete_cached_folder(folder_name: string): void;
        /**
         * Asynchronously deletes the folder described by `folder_name`.  The
         * folder must be empty.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_store_delete_folder_finish() to get the result of the operation.
         * @param folder_name name of the folder to delete
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        delete_folder(
            folder_name: string,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_store_delete_folder().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        delete_folder_finish(result: Gio.AsyncResult): boolean;
        /**
         * Deletes the folder described by `folder_name`.  The folder must be empty.
         * @param folder_name name of the folder to delete
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on failure
         */
        delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Returns a #GPtrArray of all the opened folders for the `store`. The caller owns
         * both the array and the folder references, so to free the array use:
         *
         *
         * ```
         *     g_ptr_array_foreach (array, (GFunc) g_object_unref, NULL);
         *     g_ptr_array_free (array, TRUE);
         * ```
         *
         * @returns an array with all currently   opened folders for the @store.
         */
        dup_opened_folders(): Folder[];
        /**
         * Emits the #CamelStore::folder-created signal from an idle source on
         * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
         *
         * This function is only intended for Camel providers.
         * @param folder_info information about the created folder
         */
        folder_created(folder_info: FolderInfo): void;
        /**
         * Emits the #CamelStore::folder-deleted signal from an idle source on
         * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
         *
         * This function is only intended for Camel providers.
         * @param folder_info information about the deleted folder
         */
        folder_deleted(folder_info: FolderInfo): void;
        /**
         * Emits the #CamelStore::folder-info-stale signal from an idle source
         * on the main loop.  The idle source's priority is #G_PRIORITY_LOW.
         *
         * See the #CamelStore::folder-info-stale documentation for details on
         * when to use this signal.
         *
         * This function is only intended for Camel providers.
         */
        folder_info_stale(): void;
        /**
         * Emits the #CamelStore::folder-opened signal from an idle source on
         * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
         *
         * This function is only intended for Camel providers.
         * @param folder the #CamelFolder that was opened
         */
        folder_opened(folder: Folder): void;
        /**
         * Emits the #CamelStore::folder-renamed signal from an idle source on
         * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
         *
         * This function is only intended for Camel providers.
         * @param old_name the old name of the folder
         * @param folder_info information about the renamed folder
         */
        folder_renamed(old_name: string, folder_info: FolderInfo): void;
        /**
         * Returns whether there can be done automatic save of folder changes.
         * Default is TRUE. The descendants can overwrite it with CamelStoreClass::get_can_auto_save_changes().
         * @returns Whether there can be done automatic save of folder changes.
         */
        get_can_auto_save_changes(): boolean;
        get_db(): DB;
        get_flags(): number;
        /**
         * Asynchronously gets a specific folder object from `store` by name.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_store_get_folder_finish() to get the result of the operation.
         * @param folder_name name of the folder to get
         * @param flags folder flags (create, save body index, etc)
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_folder(
            folder_name: string,
            flags: StoreGetFolderFlags,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_store_get_folder().
         * @param result a #GAsyncResult
         * @returns the requested #CamelFolder object, or %NULL on error
         */
        get_folder_finish(result: Gio.AsyncResult): Folder | null;
        /**
         * Asynchronously fetches information about the folder structure of `store,`
         * starting with `top`.  For details of the behavior, see
         * camel_store_get_folder_info_sync().
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call camel_store_get_folder_info_finish() to get the result of
         * the operation.
         * @param top the name of the folder to start from
         * @param flags various CAMEL_STORE_FOLDER_INFO_* flags to control behavior
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_folder_info(
            top: string | null,
            flags: StoreGetFolderInfoFlags,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_store_get_folder_info().
         * The returned #CamelFolderInfo tree should be freed with
         * camel_folder_info_free().
         * @param result a #GAsyncResult
         * @returns a #CamelFolderInfo tree, or %NULL on error
         */
        get_folder_info_finish(result: Gio.AsyncResult): FolderInfo | null;
        /**
         * This fetches information about the folder structure of `store,`
         * starting with `top,` and returns a tree of #CamelFolderInfo
         * structures. If `flags` includes %CAMEL_STORE_FOLDER_INFO_SUBSCRIBED,
         * only subscribed folders will be listed.   If the store doesn't support
         * subscriptions, then it will list all folders.  If `flags` includes
         * %CAMEL_STORE_FOLDER_INFO_RECURSIVE, the returned tree will include
         * all levels of hierarchy below `top`. If not, it will only include
         * the immediate subfolders of `top`. If `flags` includes
         * %CAMEL_STORE_FOLDER_INFO_FAST, the unread_message_count fields of
         * some or all of the structures may be set to -1, if the store cannot
         * determine that information quickly.  If `flags` includes
         * %CAMEL_STORE_FOLDER_INFO_NO_VIRTUAL, don't include special virtual
         * folders (such as vTrash or vJunk).
         *
         * The returned #CamelFolderInfo tree should be freed with
         * camel_folder_info_free().
         *
         * The CAMEL_STORE_FOLDER_INFO_FAST flag should be considered
         * deprecated; most backends will behave the same whether it is
         * supplied or not.  The only guaranteed way to get updated folder
         * counts is to both open the folder and invoke camel_folder_refresh_info() it.
         * @param top the name of the folder to start from
         * @param flags various CAMEL_STORE_FOLDER_INFO_* flags to control behavior
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns a #CamelFolderInfo tree, or %NULL on error
         */
        get_folder_info_sync(
            top: string | null,
            flags: StoreGetFolderInfoFlags,
            cancellable?: Gio.Cancellable | null,
        ): FolderInfo | null;
        /**
         * Gets a specific folder object from `store` by name.
         * @param folder_name name of the folder to get
         * @param flags folder flags (create, save body index, etc)
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the requested #CamelFolder object, or %NULL on error
         */
        get_folder_sync(
            folder_name: string,
            flags: StoreGetFolderFlags,
            cancellable?: Gio.Cancellable | null,
        ): Folder | null;
        get_folders_bag(): ObjectBag;
        /**
         * Asynchronously gets the folder in `store` into which new mail is delivered.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call camel_store_get_inbox_folder_finish() to get the result of
         * the operation.
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_inbox_folder(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_store_get_inbox_folder().
         * @param result a #GAsyncResult
         * @returns the inbox folder for @store, or %NULL on error or if no such folder exists
         */
        get_inbox_folder_finish(result: Gio.AsyncResult): Folder | null;
        /**
         * Gets the folder in `store` into which new mail is delivered.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the inbox folder for @store, or %NULL on error or if no such folder exists
         */
        get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null;
        /**
         * Asynchronously gets the folder in `store` into which junk is delivered.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call camel_store_get_junk_folder_finish() to get the result of
         * the operation.
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_junk_folder(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_store_get_junk_folder().
         * @param result a #GAsyncResult
         * @returns the junk folder for @store, or %NULL on error or if no such folder exists
         */
        get_junk_folder_finish(result: Gio.AsyncResult): Folder | null;
        /**
         * Gets the folder in `store` into which junk is delivered.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the junk folder for @store, or %NULL on error or if no such folder exists
         */
        get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null;
        get_permissions(): number;
        /**
         * Asynchronously gets the folder in `store` into which trash is delivered.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call camel_store_get_trash_folder_finish() to get the result of
         * the operation.
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_trash_folder(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_store_get_trash_folder().
         * @param result a #GAsyncResult
         * @returns the trash folder for @store, or %NULL on error or if no such folder exists
         */
        get_trash_folder_finish(result: Gio.AsyncResult): Folder | null;
        /**
         * Gets the folder in `store` into which trash is delivered.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the trash folder for @store, or %NULL on error or if no such folder exists
         */
        get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null;
        /**
         * Runs initial setup for the `store` asynchronously.
         *
         * When the operation is finished, `callback` will be called. You can then
         * call camel_store_initial_setup_finish() to get the result of the operation.
         *
         * The `store` advertises support of this function by including
         * CAMEL_STORE_SUPPORTS_INITIAL_SETUP in CamelStore::flags.
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        initial_setup(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_store_initial_setup().
         *
         * The save_setup result, if not %NULL, should be freed using
         * g_hash_table_destroy(). It's not an error to have it %NULL,
         * it only means the `store` doesn't have anything to save.
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        initial_setup_finish(result: Gio.AsyncResult): [boolean, GLib.HashTable<string, string>];
        /**
         * Runs initial setup for the `store`. It's meant to preset some
         * values the first time the account connects to the server after
         * it had been created. The function should return %TRUE even if
         * it didn't populate anything. The default implementation does
         * just that.
         *
         * The save_setup result, if not %NULL, should be freed using
         * g_hash_table_destroy(). It's not an error to have it %NULL,
         * it only means the `store` doesn't have anything to save.
         * Both the key and the value in the hash are newly allocated
         * UTF-8 strings, owned by the hash table.
         *
         * The `store` advertises support of this function by including
         * CAMEL_STORE_SUPPORTS_INITIAL_SETUP in CamelStore::flags.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        initial_setup_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.HashTable<string, string>];
        /**
         * Checks the state of the current CamelDB used for the `store` and eventually
         * runs maintenance routines on it.
         * @returns Whether succeeded.
         */
        maybe_run_db_maintenance(): boolean;
        /**
         * Asynchronously renames the folder described by `old_name` to `new_name`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_store_rename_folder_finish() to get the result of the operation.
         * @param old_name the current name of the folder
         * @param new_name the new name of the folder
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        rename_folder(
            old_name: string,
            new_name: string,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_store_rename_folder().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        rename_folder_finish(result: Gio.AsyncResult): boolean;
        /**
         * Renames the folder described by `old_name` to `new_name`.
         * @param old_name the current name of the folder
         * @param new_name the new name of the folder
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets flags for the `store,` a bit-or of #CamelStoreFlags.
         * @param flags bit-or of #CamelStoreFlags
         */
        set_flags(flags: number): void;
        /**
         * Sets permissions for the `store,` a bit-or of #CamelStorePermissionFlags
         * @param permissions permissions of the @store, a bit-or of #CamelStorePermissionFlags
         */
        set_permissions(permissions: number): void;
        /**
         * Synchronizes any changes that have been made to `store` and its folders
         * with the real store asynchronously.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_store_synchronize_finish() to get the result of the operation.
         * @param expunge whether to expunge after synchronizing
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        synchronize(
            expunge: boolean,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_store_synchronize().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        synchronize_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronizes any changes that have been made to `store` and its folders
         * with the real store.
         * @param expunge whether to expunge after synchronizing
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean;

        // Inherited methods
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
        set_property(property_name: string, value: any): void;
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
        disconnect(id: number): void;
        // Conflicted with Camel.Service.disconnect
        disconnect(...args: never[]): any;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module StoreSettings {
        // Constructor properties interface

        interface ConstructorProps extends Settings.ConstructorProps {
            filter_inbox: boolean;
            filterInbox: boolean;
            store_changes_interval: number;
            storeChangesInterval: number;
        }
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class StoreSettings extends Settings {
        static $gtype: GObject.GType<StoreSettings>;

        // Own properties of Camel.StoreSettings

        get filter_inbox(): boolean;
        set filter_inbox(val: boolean);
        get filterInbox(): boolean;
        set filterInbox(val: boolean);
        get store_changes_interval(): number;
        set store_changes_interval(val: number);
        get storeChangesInterval(): number;
        set storeChangesInterval(val: number);

        // Constructors of Camel.StoreSettings

        constructor(properties?: Partial<StoreSettings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Camel.StoreSettings

        /**
         * Returns whether to automatically apply filters to newly arrived messages
         * in the store's Inbox folder (assuming it has an Inbox folder).
         * @returns whether to filter new messages in Inbox
         */
        get_filter_inbox(): boolean;
        /**
         * Returns the interval, in seconds, for the changes in the folder being
         * saved automatically. 0 means immediately, while -1 means turning off
         * automatic folder change saving.
         * @returns the interval for automatic store of folder changes
         */
        get_store_changes_interval(): number;
        /**
         * Sets whether to automatically apply filters to newly arrived messages
         * in the store's Inbox folder (assuming it has an Inbox folder).
         * @param filter_inbox whether to filter new messages in Inbox
         */
        set_filter_inbox(filter_inbox: boolean): void;
        /**
         * Sets the interval, in seconds, for the changes in the folder being
         * saved automatically. 0 means immediately, while -1 means turning off
         * automatic folder change saving.
         * @param interval the interval, in seconds
         */
        set_store_changes_interval(interval: number): void;
    }

    module StoreSummary {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class StoreSummary extends GObject.Object {
        static $gtype: GObject.GType<StoreSummary>;

        // Constructors of Camel.StoreSummary

        constructor(properties?: Partial<StoreSummary.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StoreSummary;

        // Own virtual methods of Camel.StoreSummary

        vfunc_store_info_free(info: StoreInfo): void;
        vfunc_store_info_load(file?: any | null): StoreInfo;
        vfunc_store_info_new(path: string): StoreInfo;
        vfunc_store_info_save(file: any | null, info: StoreInfo): number;
        vfunc_store_info_set_value(info: StoreInfo, type: number, value: string): void;
        vfunc_summary_header_load(file?: any | null): number;
        vfunc_summary_header_save(file?: any | null): number;

        // Own methods of Camel.StoreSummary

        /**
         * The `info` record should have been generated by calling one of the
         * info_new_*() functions, as it will be free'd based on the summary
         * class.  And MUST NOT be allocated directly using malloc.
         * @param info a #CamelStoreInfo
         */
        add(info: StoreInfo): void;
        /**
         * Build a new info record based on the name, and add it to the summary.
         * @param path item path
         * @returns the newly added record or %NULL if the @path already exists
         */
        add_from_path(path: string): StoreInfo | null;
        /**
         * Obtain a copy of the summary array.  This is done atomically,
         * so cannot contain empty entries.
         *
         * It must be freed using g_ptr_array_unref().
         * @returns the summary array
         */
        array(): StoreInfo[];
        /**
         * Free the folder summary array.
         * @param array the summary array as gotten from camel_store_summary_array()
         */
        array_free(array: StoreInfo[]): void;
        /**
         * Connects listeners for count changes on `folder_summary` to keep
         * CamelStoreInfo.total and CamelStoreInfo.unread in sync transparently.
         * The `folder_summary` is stored in `summary` as `path`. Use
         * camel_store_summary_disconnect_folder_summary() to disconnect from
         * listening.
         * @param path used path for @folder_summary
         * @param folder_summary a #CamelFolderSummary object
         * @returns Whether successfully connect callbacks for count change notifications.
         */
        connect_folder_summary(path: string, folder_summary: FolderSummary): boolean;
        /**
         * Get the number of summary items stored in this summary.
         * @returns the number of items gint he summary.
         */
        count(): number;
        /**
         * Diconnects count change listeners previously connected
         * by camel_store_summary_connect_folder_summary().
         * @param folder_summary a #CamelFolderSummary object
         * @returns Whether such connection existed and whether was successfully removed.
         */
        disconnect_folder_summary(folder_summary: FolderSummary): boolean;
        /**
         * Allocate a new #CamelStoreInfo, suitable for adding to this
         * summary.
         * @returns the newly allocated #CamelStoreInfo
         */
        info_new(): StoreInfo;
        /**
         * Unref and potentially free `info,` and all associated memory.
         * @param info a #CamelStoreInfo
         */
        info_unref(info: StoreInfo): void;
        /**
         * Load the summary off disk.
         * @returns 0 on success or -1 on fail
         */
        load(): number;
        /**
         * Remove a specific `info` record from the summary.
         * @param info a #CamelStoreInfo
         */
        remove(info: StoreInfo): void;
        /**
         * Remove a specific info record from the summary, by `path`.
         * @param path item path
         */
        remove_path(path: string): void;
        /**
         * Writes the summary to disk.  The summary is only written if changes
         * have occurred.
         * @returns 0 on success or -1 on fail
         */
        save(): number;
        /**
         * Set the filename where the summary will be loaded to/saved from.
         * @param filename a filename
         */
        set_filename(filename: string): void;
        /**
         * Sorts the array of the folders using the `compare_func`.
         * @param compare_func a compare function
         */
        sort(compare_func: GLib.CompareDataFunc): void;
        /**
         * Mark the summary as changed, so that a save will force it to be
         * written back to disk.
         */
        touch(): void;
    }

    module Stream {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Seekable.ConstructorProps {
            base_stream: Gio.IOStream;
            baseStream: Gio.IOStream;
        }
    }

    class Stream extends GObject.Object implements Gio.Seekable {
        static $gtype: GObject.GType<Stream>;

        // Own properties of Camel.Stream

        get base_stream(): Gio.IOStream;
        set base_stream(val: Gio.IOStream);
        get baseStream(): Gio.IOStream;
        set baseStream(val: Gio.IOStream);

        // Constructors of Camel.Stream

        constructor(properties?: Partial<Stream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](base_stream: Gio.IOStream): Stream;

        // Own virtual methods of Camel.Stream

        /**
         * Closes the stream.
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_close(cancellable?: Gio.Cancellable | null): number;
        /**
         * Tests if there are bytes left to read on the `stream` object.
         */
        vfunc_eos(): boolean;
        /**
         * Flushes any buffered data to the stream's backing store.  Only
         * meaningful for writable streams.
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_flush(cancellable?: Gio.Cancellable | null): number;
        /**
         * Attempts to read up to `n` bytes from `stream` into `buffer`.
         * @param buffer output buffer
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_read(buffer: number[], cancellable?: Gio.Cancellable | null): number;
        /**
         * Attempts to write up to `n` bytes of `buffer` into `stream`.
         * @param buffer buffer to write.
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_write(buffer: number[], cancellable?: Gio.Cancellable | null): number;

        // Own methods of Camel.Stream

        /**
         * Closes the stream.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns 0 on success or -1 on error.
         */
        close(cancellable?: Gio.Cancellable | null): number;
        /**
         * Tests if there are bytes left to read on the `stream` object.
         * @returns %TRUE on EOS or %FALSE otherwise.
         */
        eos(): boolean;
        /**
         * Flushes any buffered data to the stream's backing store.  Only
         * meaningful for writable streams.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns 0 on success or -1 on fail along with setting @error
         */
        flush(cancellable?: Gio.Cancellable | null): number;
        /**
         * Attempts to read up to `n` bytes from `stream` into `buffer`.
         * @param buffer output buffer
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the number of bytes actually read, or -1 on error and set errno.
         */
        read(buffer: number[], cancellable?: Gio.Cancellable | null): number;
        /**
         * Returns the #GIOStream for `stream`.  This is only valid if `stream` was
         * created with camel_stream_new().  For all other #CamelStream subclasses
         * this function returns %NULL.
         *
         * The returned #GIOStream is referenced for thread-safety and should be
         * unreferenced with g_object_unref() when finished with it.
         * @returns a #GIOStream, or %NULL
         */
        ref_base_stream(): Gio.IOStream | null;
        /**
         * Replaces the #GIOStream passed to camel_stream_new() with `base_stream`.
         * The new `base_stream` should wrap the original #GIOStream, such as when
         * adding Transport Layer Security after issuing a STARTTLS command.
         * @param base_stream a #GIOStream
         */
        set_base_stream(base_stream: Gio.IOStream): void;
        /**
         * Attempts to write up to `n` bytes of `buffer` into `stream`.
         * @param buffer buffer to write.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the number of bytes written to the stream, or -1 on error along with setting errno.
         */
        write(buffer: number[], cancellable?: Gio.Cancellable | null): number;
        /**
         * Writes the string to the stream.
         * @param string a string
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the number of characters written or -1 on error.
         */
        write_string(string: string, cancellable?: Gio.Cancellable | null): number;
        /**
         * Write all of a stream (until eos) into another stream, in a
         * blocking fashion.
         * @param output_stream destination #CamelStream object
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns -1 on error, or the number of bytes successfully copied across streams.
         */
        write_to_stream(output_stream: Stream, cancellable?: Gio.Cancellable | null): number;

        // Inherited methods
        /**
         * Tests if the stream supports the #GSeekableIface.
         * @returns %TRUE if @seekable can be seeked. %FALSE otherwise.
         */
        can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         * @returns %TRUE if the stream can be truncated, %FALSE otherwise.
         */
        can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         * @returns the (positive or zero) offset from the beginning of the buffer, zero if the target is not seekable.
         */
        tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tests if the stream supports the #GSeekableIface.
         */
        vfunc_can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         */
        vfunc_can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         */
        vfunc_tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
        set_property(property_name: string, value: any): void;
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
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module StreamBuffer {
        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps, Gio.Seekable.ConstructorProps {}
    }

    class StreamBuffer extends Stream implements Gio.Seekable {
        static $gtype: GObject.GType<StreamBuffer>;

        // Constructors of Camel.StreamBuffer

        constructor(properties?: Partial<StreamBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](stream: Stream, mode: StreamBufferMode): StreamBuffer;
        // Conflicted with Camel.Stream.new

        static ['new'](...args: never[]): any;

        // Own virtual methods of Camel.StreamBuffer

        vfunc_init(stream: Stream, mode: StreamBufferMode): void;
        vfunc_init_vbuf(stream: Stream, mode: StreamBufferMode, buf: string, size: number): void;

        // Own methods of Camel.StreamBuffer

        /**
         * Discards any cached data in the `sbf`. The next read reads
         * from the stream.
         */
        discard_cache(): void;
        /**
         * Read a line of characters up to the next newline character or
         * `max-1` characters.
         *
         * If the newline character is encountered, then it will be
         * included in the buffer `buf`.  The buffer will be %NULL terminated.
         * @param buf Memory to write the string to.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the number of characters read, or 0 for end of file, and -1 on error.
         */
        gets(buf: number[], cancellable?: Gio.Cancellable | null): number;
        /**
         * This function reads a complete newline-terminated line from the stream
         * and returns it in allocated memory. The trailing newline (and carriage
         * return if any) are not included in the returned string.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the line read, which the caller must free when done with, or %NULL on eof. If an error occurs, @error will be set.
         */
        read_line(cancellable?: Gio.Cancellable | null): string | null;

        // Inherited methods
        /**
         * Tests if the stream supports the #GSeekableIface.
         * @returns %TRUE if @seekable can be seeked. %FALSE otherwise.
         */
        can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         * @returns %TRUE if the stream can be truncated, %FALSE otherwise.
         */
        can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         * @returns the (positive or zero) offset from the beginning of the buffer, zero if the target is not seekable.
         */
        tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tests if the stream supports the #GSeekableIface.
         */
        vfunc_can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         */
        vfunc_can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         */
        vfunc_tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
        set_property(property_name: string, value: any): void;
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
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module StreamFilter {
        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps, Gio.Seekable.ConstructorProps {}
    }

    class StreamFilter extends Stream implements Gio.Seekable {
        static $gtype: GObject.GType<StreamFilter>;

        // Constructors of Camel.StreamFilter

        constructor(properties?: Partial<StreamFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: Stream): StreamFilter;
        // Conflicted with Camel.Stream.new

        static ['new'](...args: never[]): any;

        // Own methods of Camel.StreamFilter

        /**
         * Add a new #CamelMimeFilter to execute during the processing of this
         * stream.  Each filter added is processed after the previous one.
         *
         * Note that a filter should only be added to a single stream
         * at a time, otherwise unpredictable results may occur.
         * @param filter a #CamelMimeFilter object
         * @returns a filter id for the added @filter.
         */
        add(filter: MimeFilter): number;
        get_source(): Stream;
        /**
         * Remove a processing filter from the stream by id.
         * @param id Filter id, as returned from camel_stream_filter_add()
         */
        remove(id: number): void;

        // Inherited methods
        /**
         * Tests if the stream supports the #GSeekableIface.
         * @returns %TRUE if @seekable can be seeked. %FALSE otherwise.
         */
        can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         * @returns %TRUE if the stream can be truncated, %FALSE otherwise.
         */
        can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         * @returns the (positive or zero) offset from the beginning of the buffer, zero if the target is not seekable.
         */
        tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tests if the stream supports the #GSeekableIface.
         */
        vfunc_can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         */
        vfunc_can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         */
        vfunc_tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
        set_property(property_name: string, value: any): void;
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
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module StreamFs {
        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps, Gio.Seekable.ConstructorProps {}
    }

    class StreamFs extends Stream implements Gio.Seekable {
        static $gtype: GObject.GType<StreamFs>;

        // Constructors of Camel.StreamFs

        constructor(properties?: Partial<StreamFs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_with_fd(fd: number): StreamFs;

        static new_with_name(name: string, flags: number, mode: number): StreamFs;

        // Own methods of Camel.StreamFs

        get_fd(): number;

        // Inherited methods
        /**
         * Tests if the stream supports the #GSeekableIface.
         * @returns %TRUE if @seekable can be seeked. %FALSE otherwise.
         */
        can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         * @returns %TRUE if the stream can be truncated, %FALSE otherwise.
         */
        can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         * @returns the (positive or zero) offset from the beginning of the buffer, zero if the target is not seekable.
         */
        tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tests if the stream supports the #GSeekableIface.
         */
        vfunc_can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         */
        vfunc_can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         */
        vfunc_tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
        set_property(property_name: string, value: any): void;
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
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module StreamMem {
        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps, Gio.Seekable.ConstructorProps {}
    }

    class StreamMem extends Stream implements Gio.Seekable {
        static $gtype: GObject.GType<StreamMem>;

        // Constructors of Camel.StreamMem

        constructor(properties?: Partial<StreamMem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StreamMem;

        static new_with_buffer(buffer: Uint8Array | string): StreamMem;

        static new_with_byte_array(buffer: Uint8Array | string): StreamMem;

        // Own methods of Camel.StreamMem

        get_byte_array(): Uint8Array;
        /**
         * Set `buffer` to be the backing data to the existing #CamelStreamMem, `mem`.
         *
         * Note: `buffer` will be copied into an internal #GByteArray structure
         * and so may have resource implications to consider.
         * @param buffer a memory buffer
         */
        set_buffer(buffer: Uint8Array | string): void;
        /**
         * Set `buffer` to be the backing data to the existing #CamelStreamMem, `mem`.
         *
         * Note: `mem` will not take ownership of `buffer` and so will need to
         * be freed separately from `mem`.
         * @param buffer a #GByteArray
         */
        set_byte_array(buffer: Uint8Array | string): void;
        /**
         * Mark the memory stream as secure.  At the very least this means the
         * data in the buffer will be cleared when the buffer is finalized.
         * This only applies to buffers owned by the stream.
         */
        set_secure(): void;

        // Inherited methods
        /**
         * Tests if the stream supports the #GSeekableIface.
         * @returns %TRUE if @seekable can be seeked. %FALSE otherwise.
         */
        can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         * @returns %TRUE if the stream can be truncated, %FALSE otherwise.
         */
        can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         * @returns the (positive or zero) offset from the beginning of the buffer, zero if the target is not seekable.
         */
        tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tests if the stream supports the #GSeekableIface.
         */
        vfunc_can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         */
        vfunc_can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         */
        vfunc_tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
        set_property(property_name: string, value: any): void;
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
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module StreamNull {
        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps, Gio.Seekable.ConstructorProps {}
    }

    class StreamNull extends Stream implements Gio.Seekable {
        static $gtype: GObject.GType<StreamNull>;

        // Constructors of Camel.StreamNull

        constructor(properties?: Partial<StreamNull.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StreamNull;

        // Own methods of Camel.StreamNull

        get_bytes_written(): number;
        get_ends_with_crlf(): boolean;

        // Inherited methods
        /**
         * Tests if the stream supports the #GSeekableIface.
         * @returns %TRUE if @seekable can be seeked. %FALSE otherwise.
         */
        can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         * @returns %TRUE if the stream can be truncated, %FALSE otherwise.
         */
        can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         * @returns the (positive or zero) offset from the beginning of the buffer, zero if the target is not seekable.
         */
        tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tests if the stream supports the #GSeekableIface.
         */
        vfunc_can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         */
        vfunc_can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         */
        vfunc_tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
        set_property(property_name: string, value: any): void;
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
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module StreamProcess {
        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps, Gio.Seekable.ConstructorProps {}
    }

    class StreamProcess extends Stream implements Gio.Seekable {
        static $gtype: GObject.GType<StreamProcess>;

        // Constructors of Camel.StreamProcess

        constructor(properties?: Partial<StreamProcess.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StreamProcess;

        // Own methods of Camel.StreamProcess

        connect(command: string, env: string): number;
        connect(...args: never[]): any;

        // Inherited methods
        /**
         * Tests if the stream supports the #GSeekableIface.
         * @returns %TRUE if @seekable can be seeked. %FALSE otherwise.
         */
        can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         * @returns %TRUE if the stream can be truncated, %FALSE otherwise.
         */
        can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         * @returns the (positive or zero) offset from the beginning of the buffer, zero if the target is not seekable.
         */
        tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tests if the stream supports the #GSeekableIface.
         */
        vfunc_can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         */
        vfunc_can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         */
        vfunc_tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
        set_property(property_name: string, value: any): void;
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
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module TextIndex {
        // Constructor properties interface

        interface ConstructorProps extends Index.ConstructorProps {}
    }

    class TextIndex extends Index {
        static $gtype: GObject.GType<TextIndex>;

        // Constructors of Camel.TextIndex

        constructor(properties?: Partial<TextIndex.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, flags: number): TextIndex;

        // Own static methods of Camel.TextIndex

        static check(path: string): number;
        static remove(old: string): number;
        static rename(old: string, new_: string): number;

        // Own methods of Camel.TextIndex

        dump(): void;
        info(): void;
        validate(): void;
    }

    module TextIndexCursor {
        // Constructor properties interface

        interface ConstructorProps extends IndexCursor.ConstructorProps {}
    }

    class TextIndexCursor extends IndexCursor {
        static $gtype: GObject.GType<TextIndexCursor>;

        // Constructors of Camel.TextIndexCursor

        constructor(properties?: Partial<TextIndexCursor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module TextIndexKeyCursor {
        // Constructor properties interface

        interface ConstructorProps extends IndexCursor.ConstructorProps {}
    }

    class TextIndexKeyCursor extends IndexCursor {
        static $gtype: GObject.GType<TextIndexKeyCursor>;

        // Constructors of Camel.TextIndexKeyCursor

        constructor(properties?: Partial<TextIndexKeyCursor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module TextIndexName {
        // Constructor properties interface

        interface ConstructorProps extends IndexName.ConstructorProps {}
    }

    class TextIndexName extends IndexName {
        static $gtype: GObject.GType<TextIndexName>;

        // Constructors of Camel.TextIndexName

        constructor(properties?: Partial<TextIndexName.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module Transport {
        // Constructor properties interface

        interface ConstructorProps extends Service.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    abstract class Transport extends Service implements Gio.Initable {
        static $gtype: GObject.GType<Transport>;

        // Constructors of Camel.Transport

        constructor(properties?: Partial<Transport.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Camel.Transport

        /**
         * Sends the message to the given recipients, regardless of the contents
         * of `message`.  If the message contains a "Bcc" header, the transport
         * is responsible for stripping it.
         * @param message a #CamelMimeMessage to send
         * @param from a #CamelAddress to send from
         * @param recipients a #CamelAddress containing all recipients
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_send_to_sync(
            message: MimeMessage,
            from: Address,
            recipients: Address,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, boolean];

        // Own methods of Camel.Transport

        /**
         * Returns whether should request Delivery Status Notification
         * in the "send_to" operation.
         * @returns whether should request Delivery Status Notification
         */
        get_request_dsn(): boolean;
        /**
         * Sends the message asynchronously to the given recipients, regardless of
         * the contents of `message`.  If the message contains a "Bcc" header, the
         * transport is responsible for stripping it.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_transport_send_to_finish() to get the result of the operation.
         * @param message a #CamelMimeMessage to send
         * @param from a #CamelAddress to send from
         * @param recipients a #CamelAddress containing all recipients
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        send_to(
            message: MimeMessage,
            from: Address,
            recipients: Address,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_transport_send_to().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        send_to_finish(result: Gio.AsyncResult): [boolean, boolean];
        /**
         * Sends the message to the given recipients, regardless of the contents
         * of `message`.  If the message contains a "Bcc" header, the transport
         * is responsible for stripping it.
         * @param message a #CamelMimeMessage to send
         * @param from a #CamelAddress to send from
         * @param recipients a #CamelAddress containing all recipients
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success or %FALSE on error
         */
        send_to_sync(
            message: MimeMessage,
            from: Address,
            recipients: Address,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, boolean];
        /**
         * Sets whether should request Delivery Status Notification
         * during the "send_to" operation.
         * @param request_dsn a value to set
         */
        set_request_dsn(request_dsn: boolean): void;

        // Inherited methods
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
        set_property(property_name: string, value: any): void;
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
        disconnect(id: number): void;
        // Conflicted with Camel.Service.disconnect
        disconnect(...args: never[]): any;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module VTrashFolder {
        // Constructor properties interface

        interface ConstructorProps extends VeeFolder.ConstructorProps {}
    }

    class VTrashFolder extends VeeFolder {
        static $gtype: GObject.GType<VTrashFolder>;

        // Constructors of Camel.VTrashFolder

        constructor(properties?: Partial<VTrashFolder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parent_store: Store, type: VTrashFolderType): VTrashFolder;
        // Conflicted with Camel.VeeFolder.new

        static ['new'](...args: never[]): any;

        // Own methods of Camel.VTrashFolder

        get_folder_type(): VTrashFolderType;
    }

    module VeeDataCache {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class VeeDataCache extends GObject.Object {
        static $gtype: GObject.GType<VeeDataCache>;

        // Constructors of Camel.VeeDataCache

        constructor(properties?: Partial<VeeDataCache.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): VeeDataCache;

        // Own methods of Camel.VeeDataCache

        /**
         * Adds the `subfolder` to the `data_cache` to be tracked by it. The `subfolder`
         * is referenced for later use. The function does nothing when the `subfolder`
         * is already in the `data_cache`. The subfolders can be removed with
         * camel_vee_data_cache_remove_subfolder().
         * @param subfolder a #CamelFolder
         */
        add_subfolder(subfolder: Folder): void;
        /**
         * Returns whether data_cache contains given `orig_message_uid` for the given `folder`.
         * Unlike camel_vee_data_cache_get_message_info_data(), this only
         * returns %FALSE if not, while camel_vee_data_cache_get_message_info_data()
         * auto-adds it to data_cache.
         * @param folder a #CamelFolder to which the @orig_message_uid belongs
         * @param orig_message_uid a message UID from the @folder to check
         */
        contains_message_info_data(folder: Folder, orig_message_uid: string): boolean;
        /**
         * Calls the `func` for each message info data from the given `fromfolder`
         * @param fromfolder a #CamelFolder
         * @param func a #CamelForeachInfoData function to call
         */
        foreach_message_info_data(fromfolder: Folder, func: ForeachInfoData): void;
        /**
         * Returns a referenced #CamelVeeMessageInfoData referencing the given `folder`
         * and `orig_message_uid`. If it's not part of the `data_cache,` then it is
         * created and auto-added. Use camel_vee_data_cache_contains_message_info_data()
         * when you only want to check the existence, without adding it to the `data_cache`.
         * @param folder a #CamelFolder to which the @orig_message_uid belongs
         * @param orig_message_uid a message UID from the @folder to return
         * @returns a referenced #CamelVeeMessageInfoData; unref it    with g_object_unref(), when no longer needed.
         */
        get_message_info_data(folder: Folder, orig_message_uid: string): VeeMessageInfoData;
        get_message_info_data_by_vuid(vee_message_uid: string): VeeMessageInfoData | null;
        /**
         * Returns a #CamelVeeSubfolderData for the given `folder`.
         * @param folder a #CamelFolder for which to return subfolder data
         * @returns a referenced #CamelVeeSubfolderData; unref it    with g_object_unref(), when no longer needed.
         */
        get_subfolder_data(folder: Folder): VeeSubfolderData;
        /**
         * Removes given `mi_data` from the `data_cache`.
         * @param mi_data a #CamelVeeMessageInfoData to remove
         */
        remove_message_info_data(mi_data: VeeMessageInfoData): void;
        /**
         * Removes given `subfolder` from the `data_cache,` which had been
         * previously added with camel_vee_data_cache_add_subfolder().
         * The function does nothing, when the `subfolder` is not part
         * of the `data_cache`.
         * @param subfolder a #CamelFolder to remove
         */
        remove_subfolder(subfolder: Folder): void;
    }

    module VeeFolder {
        // Constructor properties interface

        interface ConstructorProps extends Folder.ConstructorProps {
            auto_update: boolean;
            autoUpdate: boolean;
        }
    }

    class VeeFolder extends Folder {
        static $gtype: GObject.GType<VeeFolder>;

        // Own properties of Camel.VeeFolder

        get auto_update(): boolean;
        set auto_update(val: boolean);
        get autoUpdate(): boolean;
        set autoUpdate(val: boolean);

        // Constructors of Camel.VeeFolder

        constructor(properties?: Partial<VeeFolder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parent_store: Store, full: string, flags: number): VeeFolder;

        // Own virtual methods of Camel.VeeFolder

        /**
         * Adds `subfolder` as a source folder to `vfolder`.
         * @param subfolder source CamelFolder to add to @vfolder
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_add_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void;
        vfunc_folder_changed(subfolder: Folder, changes: FolderChangeInfo): void;
        /**
         * Rebuild the folder `subfolder,` if it should be.
         * @param subfolder source CamelFolder to add to @vfolder
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_rebuild_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void;
        /**
         * Removed the source folder, `subfolder,` from the virtual folder, `vfolder`.
         * @param subfolder source CamelFolder to remove from @vfolder
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_remove_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void;
        /**
         * Sets an SExp expression to be used for this `vfolder`
         * @param expression an SExp expression to set
         */
        vfunc_set_expression(expression: string): void;

        // Own methods of Camel.VeeFolder

        /**
         * Adds `subfolder` as a source folder to `vfolder`.
         * @param subfolder source CamelFolder to add to @vfolder
         * @param cancellable optional #GCancellable object, or %NULL
         */
        add_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void;
        /**
         * Adds the `mi_data` to the `vfolder`. The `changes` can be
         * updated with the made change and later used to notify others
         * with camel_folder_changed() on the `vfolder`. This can be used
         * only for the Unmatched folder.
         * @param mi_data a #CamelVeeMessageInfoData to add
         * @param changes an optional #CamelFolderChangeInfo to update with the made change, or %NULL
         */
        add_vuid(mi_data?: any | null, changes?: FolderChangeInfo | null): void;
        /**
         * Initializes internal structures of the `vf`. This is meant to be
         * called by the descendants of #CamelVeeFolder.
         * @param flags flags for the @vf
         */
        construct(flags: number): void;
        get_auto_update(): boolean;
        get_expression(): string;
        get_flags(): number;
        /**
         * Find the real folder (and message info UID) for the given `vinfo`.
         * When the `realuid` is not %NULL and it's set, then use g_free() to
         * free it, when no longer needed.
         * @param vinfo a #CamelVeeMessageInfo to search for
         * @returns a real (not virtual) #CamelFolder, which the @vinfo is for.
         */
        get_location(vinfo: VeeMessageInfo): [Folder, string];
        get_vee_uid_folder(vee_message_uid: string): Folder | null;
        /**
         * The next `subfolder-'`s 'changed' event will be silently ignored. This
         * is usually used in virtual folders when the change was done in them,
         * but it is neither vTrash nor vJunk folder. Doing this avoids unnecessary
         * removals of messages which don't satisfy search criteria anymore,
         * which could be done on asynchronous delivery of folder's 'changed' signal.
         * These ignored changes are accumulated and used on folder refresh.
         * @param subfolder a #CamelFolder folder
         */
        ignore_next_changed_event(subfolder: Folder): void;
        /**
         * Propagate any skipped changes into the `vf`. The skipped changes are used to not
         * hide the messages from the search folder unexpectedly. The function does nothing
         * when there are no changes to be propagated.
         */
        propagate_skipped_changes(): void;
        /**
         * Rebuild the folder `subfolder,` if it should be.
         * @param subfolder source CamelFolder to add to @vfolder
         * @param cancellable optional #GCancellable object, or %NULL
         */
        rebuild_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void;
        /**
         * Returns a #GList of all folders of this `vfolder,` which
         * are used to populate it. These are in no particular order.
         *
         * Free the returned #GList with
         * g_list_free_full (folders, g_object_unref);
         * when no longer needed.
         * @returns a #GList of all    folders of this @vfolder.
         */
        ref_folders(): Folder[];
        /**
         * Removed the source folder, `subfolder,` from the virtual folder, `vfolder`.
         * @param subfolder source CamelFolder to remove from @vfolder
         * @param cancellable optional #GCancellable object, or %NULL
         */
        remove_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void;
        /**
         * Make sure the next `subfolder-'`s 'changed' event will not be silently ignored.
         * This is a counter-part function of camel_vee_folder_ignore_next_changed_event(),
         * when there was expected a change, which did not happen, to take back the previous
         * ignore event request.
         * @param subfolder a #CamelFolder folder
         */
        remove_from_ignore_changed_event(subfolder: Folder): void;
        /**
         * Removes given `mi_data` from the `vfolder`. The `changes` can be
         * updated with the made change and later used to notify others
         * with camel_folder_changed() on the `vfolder`. This can be used
         * only for the Unmatched folder.
         * @param mi_data a #CamelVeeMessageInfoData to remove
         * @param changes an optional #CamelFolderChangeInfo to update with the made change, or %NULL
         */
        remove_vuid(mi_data?: any | null, changes?: FolderChangeInfo | null): void;
        /**
         * Sets whether the `vfolder` can automatically update when of its
         * subfolders changes.
         * @param auto_update a value to set
         */
        set_auto_update(auto_update: boolean): void;
        /**
         * Sets an SExp expression to be used for this `vfolder`
         * @param expression an SExp expression to set
         */
        set_expression(expression: string): void;
        /**
         * Set the whole list of folder sources on a vee folder.
         * @param folders a #GList of #CamelFolder to add
         * @param cancellable optional #GCancellable object, or %NULL
         */
        set_folders(folders: Folder[], cancellable?: Gio.Cancellable | null): void;
    }

    module VeeMessageInfo {
        // Constructor properties interface

        interface ConstructorProps extends MessageInfo.ConstructorProps {}
    }

    class VeeMessageInfo extends MessageInfo {
        static $gtype: GObject.GType<VeeMessageInfo>;

        // Constructors of Camel.VeeMessageInfo

        constructor(properties?: Partial<VeeMessageInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](summary: FolderSummary, original_summary: FolderSummary, vuid: string): VeeMessageInfo;
        // Conflicted with Camel.MessageInfo.new

        static ['new'](...args: never[]): any;

        // Own methods of Camel.VeeMessageInfo

        get_original_folder(): Folder;
        get_original_summary(): FolderSummary;
    }

    module VeeMessageInfoData {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class VeeMessageInfoData extends GObject.Object {
        static $gtype: GObject.GType<VeeMessageInfoData>;

        // Constructors of Camel.VeeMessageInfoData

        constructor(properties?: Partial<VeeMessageInfoData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](subfolder_data: VeeSubfolderData, orig_message_uid: string): VeeMessageInfoData;

        // Own methods of Camel.VeeMessageInfoData

        get_orig_message_uid(): string;
        get_subfolder_data(): VeeSubfolderData;
        get_vee_message_uid(): string;
    }

    module VeeStore {
        // Constructor properties interface

        interface ConstructorProps extends Store.ConstructorProps, Gio.Initable.ConstructorProps {
            unmatched_enabled: boolean;
            unmatchedEnabled: boolean;
        }
    }

    class VeeStore extends Store implements Gio.Initable {
        static $gtype: GObject.GType<VeeStore>;

        // Own properties of Camel.VeeStore

        get unmatched_enabled(): boolean;
        set unmatched_enabled(val: boolean);
        get unmatchedEnabled(): boolean;
        set unmatchedEnabled(val: boolean);

        // Constructors of Camel.VeeStore

        constructor(properties?: Partial<VeeStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): VeeStore;

        // Own methods of Camel.VeeStore

        get_unmatched_enabled(): boolean;
        get_unmatched_folder(): any | null;
        get_vee_data_cache(): VeeFolder;
        /**
         * This is a counter part of camel_vee_store_note_subfolder_used(). Once
         * the `subfolder` is claimed to be not used by all folders its message infos
         * are removed from the Unmatched folder.
         * @param subfolder a #CamelFolder
         * @param unused_by a #CamelVeeFolder
         */
        note_subfolder_unused(subfolder: Folder, unused_by: VeeFolder): void;
        /**
         * Notes that the `subfolder` is used by `used_by` folder, which
         * is used to determine what folders will be included in
         * the Unmatched folders.
         * @param subfolder a #CamelFolder
         * @param used_by a #CamelVeeFolder
         */
        note_subfolder_used(subfolder: Folder, used_by: VeeFolder): void;
        /**
         * A counter part of camel_vee_store_note_vuid_used(). Once the `unused_by`
         * claims the `mi_data` is not used by it anymore, and neither any other
         * virtual folder is using it, then the Unmatched folder will have it added.
         * @param mi_data a #CamelVeeMessageInfoData
         * @param unused_by a #CamelVeeFolder
         */
        note_vuid_unused(mi_data: VeeMessageInfoData, unused_by: VeeFolder): void;
        /**
         * Notes the `mi_data` is used by the `used_by` virtual folder, which
         * removes it from the Unmatched folder, if not used anywhere else.
         * @param mi_data a #CamelVeeMessageInfoData
         * @param used_by a #CamelVeeFolder
         */
        note_vuid_used(mi_data: VeeMessageInfoData, used_by: VeeFolder): void;
        /**
         * Let's the `vstore` know to rebuild the Unmatched folder. This is done
         * as a separate job, when the `cancellable` is %NULL, otherwise it's run
         * synchronously.
         * @param cancellable optional #GCancellable object, or %NULL
         */
        rebuild_unmatched_folder(cancellable?: Gio.Cancellable | null): void;
        /**
         * Sets whether the Unmatched folder processing is enabled.
         * @param is_enabled value to set
         */
        set_unmatched_enabled(is_enabled: boolean): void;

        // Inherited methods
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
        set_property(property_name: string, value: any): void;
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
        disconnect(id: number): void;
        // Conflicted with Camel.Service.disconnect
        disconnect(...args: never[]): any;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module VeeSubfolderData {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class VeeSubfolderData extends GObject.Object {
        static $gtype: GObject.GType<VeeSubfolderData>;

        // Constructors of Camel.VeeSubfolderData

        constructor(properties?: Partial<VeeSubfolderData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](folder: Folder): VeeSubfolderData;

        // Own methods of Camel.VeeSubfolderData

        get_folder(): Folder;
        get_folder_id(): string;
    }

    module VeeSummary {
        // Constructor properties interface

        interface ConstructorProps extends FolderSummary.ConstructorProps {}
    }

    class VeeSummary extends FolderSummary {
        static $gtype: GObject.GType<VeeSummary>;

        // Constructors of Camel.VeeSummary

        constructor(properties?: Partial<VeeSummary.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parent: Folder): VeeSummary;

        // Own methods of Camel.VeeSummary

        /**
         * Unref returned pointer with g_object_unref()
         * @param mi_data the #CamelVeeMessageInfoData to add
         * @returns A new #CamelVeeMessageInfo object.
         */
        add(mi_data: VeeMessageInfoData): VeeMessageInfo;
        // Conflicted with Camel.FolderSummary.add
        add(...args: never[]): any;
        /**
         * Returns a hash table of all virtual message info UID-s known to the `summary`.
         * The key of the hash table is the virtual message info UID, the value is
         * only the number 1.
         * @param subfolder a #CamelFolder
         * @returns a #GHashTable with    all the virtual mesasge info UID-s knwn to the @summary.
         */
        get_uids_for_subfolder(subfolder: Folder): GLib.HashTable<string, number>;
        /**
         * Removes the given `vuid` of the `subfolder` from the `summary`.
         * @param vuid a virtual message info UID to remove
         * @param subfolder a #CamelFolder to which @vuid belongs
         */
        remove(vuid: string, subfolder: Folder): void;
        // Conflicted with Camel.FolderSummary.remove
        remove(...args: never[]): any;
        /**
         * Makes sure `summary` flags on `uid` corresponds to those
         * in the subfolder of vee-folder, and updates internal counts
         * on `summary` as well.
         * @param uid a message UID to update flags for
         */
        replace_flags(uid: string): void;
        // Conflicted with Camel.FolderSummary.replace_flags
        replace_flags(...args: never[]): any;
    }

    type AddressClass = typeof Address;
    abstract class AddressPrivate {
        static $gtype: GObject.GType<AddressPrivate>;

        // Constructors of Camel.AddressPrivate

        _init(...args: any[]): void;
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    abstract class AsyncClosure {
        static $gtype: GObject.GType<AsyncClosure>;

        // Constructors of Camel.AsyncClosure

        _init(...args: any[]): void;
    }

    class Block {
        static $gtype: GObject.GType<Block>;

        // Own fields of Camel.Block

        id: _block_t;
        flags: BlockFlags;
        refcount: number;
        align00: number;
        data: Uint8Array;

        // Constructors of Camel.Block

        _init(...args: any[]): void;
    }

    type BlockFileClass = typeof BlockFile;
    abstract class BlockFilePrivate {
        static $gtype: GObject.GType<BlockFilePrivate>;

        // Constructors of Camel.BlockFilePrivate

        _init(...args: any[]): void;
    }

    class BlockRoot {
        static $gtype: GObject.GType<BlockRoot>;

        // Own fields of Camel.BlockRoot

        version: number[];
        flags: number;
        block_size: number;
        free: _block_t;
        last: _block_t;

        // Constructors of Camel.BlockRoot

        constructor(
            properties?: Partial<{
                version: number[];
                flags: number;
                block_size: number;
                free: _block_t;
                last: _block_t;
            }>,
        );
        _init(...args: any[]): void;
    }

    class Cert {
        static $gtype: GObject.GType<Cert>;

        // Own fields of Camel.Cert

        refcount: number;
        issuer: string;
        subject: string;
        hostname: string;
        fingerprint: string;
        trust: CertTrust;

        // Constructors of Camel.Cert

        constructor(
            properties?: Partial<{
                refcount: number;
                issuer: string;
                subject: string;
                hostname: string;
                fingerprint: string;
                trust: CertTrust;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): Cert;

        // Own methods of Camel.Cert

        load_cert_file(): boolean;
        ref(): Cert;
        save_cert_file(der_data: Uint8Array | string): boolean;
        unref(): void;
    }

    type CertDBClass = typeof CertDB;
    abstract class CertDBPrivate {
        static $gtype: GObject.GType<CertDBPrivate>;

        // Constructors of Camel.CertDBPrivate

        _init(...args: any[]): void;
    }

    class Charset {
        static $gtype: GObject.GType<Charset>;

        // Own fields of Camel.Charset

        mask: number;
        level: number;

        // Constructors of Camel.Charset

        constructor(
            properties?: Partial<{
                mask: number;
                level: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Camel.Charset

        /**
         * Finds the minimum charset for this string NULL means US-ASCII.
         * @param _in input text
         */
        static best(_in: number[]): string | null;
        static iso_to_windows(isocharset: string): string;

        // Own methods of Camel.Charset

        best_name(): string;
        init(): void;
        /**
         * Processes more input text with the `cc`.
         * @param _in input text
         */
        step(_in: number[]): void;
    }

    class CipherCertInfo {
        static $gtype: GObject.GType<CipherCertInfo>;

        // Own fields of Camel.CipherCertInfo

        name: string;
        email: string;
        cert_data: any;
        cert_data_free: GLib.DestroyNotify;
        cert_data_clone: CipherCloneFunc;
        properties: any[];

        // Constructors of Camel.CipherCertInfo

        _init(...args: any[]): void;
    }

    class CipherCertInfoProperty {
        static $gtype: GObject.GType<CipherCertInfoProperty>;

        // Own fields of Camel.CipherCertInfoProperty

        name: string;
        value: any;
        value_free: GLib.DestroyNotify;
        value_clone: CipherCloneFunc;

        // Constructors of Camel.CipherCertInfoProperty

        _init(...args: any[]): void;
    }

    type CipherContextClass = typeof CipherContext;
    abstract class CipherContextPrivate {
        static $gtype: GObject.GType<CipherContextPrivate>;

        // Constructors of Camel.CipherContextPrivate

        _init(...args: any[]): void;
    }

    class CipherValidity {
        static $gtype: GObject.GType<CipherValidity>;

        // Own fields of Camel.CipherValidity

        children: GLib.Queue;
        sign: any;
        encrypt: any;

        // Constructors of Camel.CipherValidity

        constructor(
            properties?: Partial<{
                children: GLib.Queue;
                sign: any;
                encrypt: any;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): CipherValidity;

        // Own methods of Camel.CipherValidity

        /**
         * Add a cert info to the signer or encrypter info.
         * @param mode a #CamelCipherValidityMode, where to add the additional certificate information
         * @param name a name to add
         * @param email an e-mail address to add
         * @returns Index of the added certinfo; -1 on error
         */
        add_certinfo(mode: CipherValidityMode, name: string, email: string): number;
        /**
         * Add a cert info to the signer or encrypter info, with extended data set.
         * @param mode a #CamelCipherValidityMode, where to add the additional certificate information
         * @param name a name to add
         * @param email an e-mail address to add
         * @param cert_data a certificate data, or %NULL
         * @param cert_data_free a destroy function for @cert_data; required, when @cert_data is not %NULL
         * @param cert_data_clone a copy function for @cert_data, to copy the data; required, when @cert_data is not %NULL
         * @returns Index of the added certinfo; -1 on error
         */
        add_certinfo_ex(
            mode: CipherValidityMode,
            name: string,
            email: string,
            cert_data?: any | null,
            cert_data_free?: GLib.DestroyNotify | null,
            cert_data_clone?: CipherCloneFunc | null,
        ): number;
        clear(): void;
        clone(): CipherValidity;
        /**
         * Calculate a conglomerate validity based on wrapping one secure part inside
         * another one.
         * @param valid a new #CamelCipherValidity to conglomerate the @parent with
         */
        envelope(valid: CipherValidity): void;
        free(): void;
        /**
         * Gets a named property `name` value for the given `info_index` of the `mode` validity part.
         * @param mode which cipher validity part to use
         * @param info_index a 0-based index of the requested #CamelCipherCertInfo
         * @param name a property name
         * @returns Value of a named property of a #CamelCipherCertInfo, or %NULL when no such    property exists. The returned value is owned by the associated #CamelCipherCertInfo    and is valid until the cert info is freed.
         */
        get_certinfo_property(mode: CipherValidityMode, info_index: number, name: string): any | null;
        get_description(): string;
        get_valid(): boolean;
        init(): void;
        /**
         * Sets a named property `name` value `value` for the given `info_index`
         * of the `mode` validity part. If the `value` is %NULL, then the property
         * is removed. With a non-%NULL `value` also `value_free` and `value_clone`
         * functions cannot be %NULL.
         * @param mode which cipher validity part to use
         * @param info_index a 0-based index of the requested #CamelCipherCertInfo
         * @param name a property name
         * @param value a property value, or %NULL
         * @param value_free a free function for the @value
         * @param value_clone a clone function for the @value
         */
        set_certinfo_property(
            mode: CipherValidityMode,
            info_index: number,
            name: string,
            value?: any | null,
            value_free?: GLib.DestroyNotify | null,
            value_clone?: CipherCloneFunc | null,
        ): void;
        set_description(description: string): void;
        set_valid(valid: boolean): void;
    }

    class ContentDisposition {
        static $gtype: GObject.GType<ContentDisposition>;

        // Own fields of Camel.ContentDisposition

        disposition: string;
        params: any;
        refcount: number;

        // Constructors of Camel.ContentDisposition

        constructor(
            properties?: Partial<{
                disposition: string;
                params: any;
                refcount: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): ContentDisposition;

        // Own static methods of Camel.ContentDisposition

        static decode(_in: string): ContentDisposition;

        // Own methods of Camel.ContentDisposition

        format(): string;
        is_attachment(content_type: ContentType): boolean;
        is_attachment_ex(content_type: ContentType, parent_content_type: ContentType): boolean;
        ref(): ContentDisposition;
        unref(): void;
    }

    class ContentType {
        static $gtype: GObject.GType<ContentType>;

        // Own fields of Camel.ContentType

        type: string;
        subtype: string;
        params: any;
        refcount: number;

        // Constructors of Camel.ContentType

        constructor(
            properties?: Partial<{
                type: string;
                subtype: string;
                params: any;
                refcount: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](type: string, subtype: string): ContentType;

        // Own static methods of Camel.ContentType

        static decode(_in: string): ContentType;

        // Own methods of Camel.ContentType

        dump(): void;
        format(): string;
        /**
         * The subtype of "*" will match any subtype.  If `ct` is %NULL, then
         * it will match the type "text/plain".
         * @param type A type to check against.
         * @param subtype A subtype to check against, or "*" to match any subtype.
         * @returns %TRUE if the content type @ct is of type @type/@subtype or %FALSE otherwise
         */
        is(type: string, subtype: string): boolean;
        /**
         * Searches the params on s #CamelContentType for a param named `name`
         * and gets the value.
         * @param name name of param to find
         * @returns the value of the @name param
         */
        param(name: string): string;
        /**
         * Refs the content type.
         */
        ref(): ContentType;
        /**
         * Set a parameter on `content_type`.
         * @param name name of param to set
         * @param value value of param to set
         */
        set_param(name: string, value: string): void;
        simple(): string;
        /**
         * Unrefs, and potentially frees, the content type.
         */
        unref(): void;
    }

    type DBClass = typeof DB;
    abstract class DBPrivate {
        static $gtype: GObject.GType<DBPrivate>;

        // Constructors of Camel.DBPrivate

        _init(...args: any[]): void;
    }

    type DataCacheClass = typeof DataCache;
    abstract class DataCachePrivate {
        static $gtype: GObject.GType<DataCachePrivate>;

        // Constructors of Camel.DataCachePrivate

        _init(...args: any[]): void;
    }

    type DataWrapperClass = typeof DataWrapper;
    abstract class DataWrapperPrivate {
        static $gtype: GObject.GType<DataWrapperPrivate>;

        // Constructors of Camel.DataWrapperPrivate

        _init(...args: any[]): void;
    }

    /**
     * Values to store/load for single folder's #CamelFolderSummary structure.
     */
    class FIRecord {
        static $gtype: GObject.GType<FIRecord>;

        // Own fields of Camel.FIRecord

        folder_name: string;
        version: number;
        flags: number;
        nextuid: number;
        timestamp: number;
        saved_count: number;
        unread_count: number;
        deleted_count: number;
        junk_count: number;
        visible_count: number;
        jnd_count: number;
        bdata: string;

        // Constructors of Camel.FIRecord

        constructor(
            properties?: Partial<{
                folder_name: string;
                version: number;
                flags: number;
                nextuid: number;
                timestamp: number;
                saved_count: number;
                unread_count: number;
                deleted_count: number;
                junk_count: number;
                visible_count: number;
                jnd_count: number;
                bdata: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    type FilterDriverClass = typeof FilterDriver;
    abstract class FilterDriverPrivate {
        static $gtype: GObject.GType<FilterDriverPrivate>;

        // Constructors of Camel.FilterDriverPrivate

        _init(...args: any[]): void;
    }

    type FilterInputStreamClass = typeof FilterInputStream;
    abstract class FilterInputStreamPrivate {
        static $gtype: GObject.GType<FilterInputStreamPrivate>;

        // Constructors of Camel.FilterInputStreamPrivate

        _init(...args: any[]): void;
    }

    type FilterOutputStreamClass = typeof FilterOutputStream;
    abstract class FilterOutputStreamPrivate {
        static $gtype: GObject.GType<FilterOutputStreamPrivate>;

        // Constructors of Camel.FilterOutputStreamPrivate

        _init(...args: any[]): void;
    }

    class FolderChangeInfo {
        static $gtype: GObject.GType<FolderChangeInfo>;

        // Own fields of Camel.FolderChangeInfo

        uid_added: any[];
        uid_removed: any[];
        uid_changed: any[];
        uid_recent: any[];

        // Constructors of Camel.FolderChangeInfo

        constructor(
            properties?: Partial<{
                uid_added: any[];
                uid_removed: any[];
                uid_changed: any[];
                uid_recent: any[];
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): FolderChangeInfo;

        // Own methods of Camel.FolderChangeInfo

        /**
         * Add a source uid for generating a changeset.
         * @param uid a uid
         */
        add_source(uid: string): void;
        /**
         * Add a list of source uid's for generating a changeset.
         * @param list a list of uids
         */
        add_source_list(list: string[]): void;
        /**
         * Add a new uid to the changeinfo.
         * @param uid a uid
         */
        add_uid(uid: string): void;
        /**
         * Add a uid from the updated list, used to generate a changeset diff.
         * @param uid a uid
         */
        add_update(uid: string): void;
        /**
         * Add a list of uid's from the updated list.
         * @param list a list of uids
         */
        add_update_list(list: string[]): void;
        /**
         * Compare the source uid set to the updated uid set and generate the
         * differences into the added and removed lists.
         */
        build_diff(): void;
        /**
         * Concatenate one change info onto antoher. Can be used to copy them
         * too.
         * @param src a #CamelFolderChangeInfo to append from
         */
        cat(src: FolderChangeInfo): void;
        /**
         * Add a uid to the changed uid list.
         * @param uid a uid
         */
        change_uid(uid: string): void;
        /**
         * Gets whether or not there have been any changes.
         * @returns %TRUE if the changeset contains any changes or %FALSE otherwise
         */
        changed(): boolean;
        /**
         * Empty out the change info; called after changes have been
         * processed.
         */
        clear(): void;
        /**
         * Creates a copy of the `src`.
         * @returns Copy of the @src.
         */
        copy(): FolderChangeInfo;
        /**
         * Free memory associated with the folder change info lists.
         */
        free(): void;
        /**
         * Returns an array of added messages UIDs. The returned array, the same as its content,
         * is owned by the `info`.
         * @returns An array of added UIDs.
         */
        get_added_uids(): string[];
        /**
         * Returns an array of changed messages UIDs. The returned array, the same as its content,
         * is owned by the `info`.
         * @returns An array of changed UIDs.
         */
        get_changed_uids(): string[];
        /**
         * Returns an array of recent messages UIDs. The returned array, the same as its content,
         * is owned by the `info`.
         * @returns An array of recent UIDs.
         */
        get_recent_uids(): string[];
        /**
         * Returns an array of removed messages UIDs. The returned array, the same as its content,
         * is owned by the `info`.
         * @returns An array of removed UIDs.
         */
        get_removed_uids(): string[];
        /**
         * Add a recent uid to the changedinfo.
         * This will also add the uid to the uid_filter array for potential
         * filtering
         * @param uid a uid
         */
        recent_uid(uid: string): void;
        /**
         * Add a uid to the removed uid list.
         * @param uid a uid
         */
        remove_uid(uid: string): void;
    }

    abstract class FolderChangeInfoPrivate {
        static $gtype: GObject.GType<FolderChangeInfoPrivate>;

        // Constructors of Camel.FolderChangeInfoPrivate

        _init(...args: any[]): void;
    }

    type FolderClass = typeof Folder;
    class FolderInfo {
        static $gtype: GObject.GType<FolderInfo>;

        // Own fields of Camel.FolderInfo

        next: any;
        child: any;
        full_name: string;
        display_name: string;
        flags: FolderInfoFlags;
        unread: number;
        total: number;

        // Constructors of Camel.FolderInfo

        constructor(
            properties?: Partial<{
                next: any;
                parent: any;
                child: any;
                full_name: string;
                display_name: string;
                flags: FolderInfoFlags;
                unread: number;
                total: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): FolderInfo;

        // Own static methods of Camel.FolderInfo

        /**
         * This takes an array of folders and attaches them together according
         * to the hierarchy described by their full_names and `separator`. If
         * `namespace_` is non-%NULL, then it will be ignored as a full_name
         * prefix, for purposes of comparison. If necessary,
         * camel_folder_info_build() will create additional #CamelFolderInfo with
         * %NULL urls to fill in gaps in the tree. The value of `short_names`
         * is used in constructing the names of these intermediate folders.
         * @param folders an array of #CamelFolderInfo
         * @param namespace_ an ignorable prefix on the folder names
         * @param separator the hieararchy separator character
         * @param short_names %TRUE if the (short) name of a folder is the part after the last @separator in the full name. %FALSE if it is the full name.
         */
        static build(folders: FolderInfo[], namespace_: string, separator: number, short_names: boolean): FolderInfo;

        // Own methods of Camel.FolderInfo

        /**
         * Clones `fi` recursively.
         * @returns the cloned #CamelFolderInfo tree.
         */
        clone(): FolderInfo;
        /**
         * Frees `fi`.
         */
        free(): void;
    }

    abstract class FolderPrivate {
        static $gtype: GObject.GType<FolderPrivate>;

        // Constructors of Camel.FolderPrivate

        _init(...args: any[]): void;
    }

    class FolderQuotaInfo {
        static $gtype: GObject.GType<FolderQuotaInfo>;

        // Own fields of Camel.FolderQuotaInfo

        name: string;
        used: number;
        total: number;
        next: any;

        // Constructors of Camel.FolderQuotaInfo

        constructor(
            properties?: Partial<{
                name: string;
                used: number;
                total: number;
                next: any;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](name: string, used: number, total: number): FolderQuotaInfo;

        // Own methods of Camel.FolderQuotaInfo

        /**
         * Makes a copy of the given info and all next-s.
         */
        clone(): FolderQuotaInfo;
        /**
         * Frees this and all next objects.
         */
        free(): void;
    }

    type FolderSearchClass = typeof FolderSearch;
    abstract class FolderSearchPrivate {
        static $gtype: GObject.GType<FolderSearchPrivate>;

        // Constructors of Camel.FolderSearchPrivate

        _init(...args: any[]): void;
    }

    type FolderSummaryClass = typeof FolderSummary;
    abstract class FolderSummaryPrivate {
        static $gtype: GObject.GType<FolderSummaryPrivate>;

        // Constructors of Camel.FolderSummaryPrivate

        _init(...args: any[]): void;
    }

    class FolderThread {
        static $gtype: GObject.GType<FolderThread>;

        // Own fields of Camel.FolderThread

        refcount: number;
        subject: number;
        tree: any;
        folder: Folder;
        summary: any[];

        // Constructors of Camel.FolderThread

        constructor(folder: Folder, uids: string[], thread_subject: boolean);
        _init(...args: any[]): void;

        static ['new'](folder: Folder, uids: string[], thread_subject: boolean): FolderThread;

        // Own methods of Camel.FolderThread

        /**
         * Adds new `uids` into the threaded tree.
         * @param uids a #GPtrArray array of UID-s
         */
        apply(uids: string[]): void;
        /**
         * Increase the reference of `thread`
         * @returns the referenced @thread
         */
        ref(): FolderThread;
        /**
         * Free all memory associated with the thread descriptor `thread`.
         */
        unref(): void;
    }

    class FolderThreadNode {
        static $gtype: GObject.GType<FolderThreadNode>;

        // Own fields of Camel.FolderThreadNode

        next: any;
        child: any;
        message: MessageInfo;
        root_subject: string;
        order: number;
        re: number;

        // Constructors of Camel.FolderThreadNode

        _init(...args: any[]): void;
    }

    type GpgContextClass = typeof GpgContext;
    abstract class GpgContextPrivate {
        static $gtype: GObject.GType<GpgContextPrivate>;

        // Constructors of Camel.GpgContextPrivate

        _init(...args: any[]): void;
    }

    /**
     * An opaque structure holding information about a user key.
     */
    abstract class GpgKeyInfo {
        static $gtype: GObject.GType<GpgKeyInfo>;

        // Constructors of Camel.GpgKeyInfo

        _init(...args: any[]): void;

        // Own methods of Camel.GpgKeyInfo

        /**
         * Copies the `src` to a new #CamelGpgKeyInfo structure.
         * @returns a copy of the @src, or %NULL,    when the @src is also %NULL
         */
        copy(): GpgKeyInfo | null;
        /**
         * Frees the `info` previously allocated by camel_gpg_context_get_public_key_info_sync(),
         * camel_gpg_context_get_key_data_info_sync() or camel_gpg_key_info_copy().
         */
        free(): void;
        /**
         * Gets the key creating date, as seconds since the Unix Epoch.
         * @returns key creation date
         */
        get_creation_date(): number;
        /**
         * Gets the key fingerprint.
         * @returns key fingerprint
         */
        get_fingerprint(): string;
        /**
         * Gets the key ID.
         * @returns key ID
         */
        get_id(): string;
        /**
         * Gets the key trust level, as one of #CamelGpgTrust.
         * @returns key trust level
         */
        get_trust(): GpgTrust;
        /**
         * Gets the user IDs associated with the key.
         * @returns key user IDs
         */
        get_user_ids(): string[];
    }

    type HTMLParserClass = typeof HTMLParser;
    abstract class HTMLParserPrivate {
        static $gtype: GObject.GType<HTMLParserPrivate>;

        // Constructors of Camel.HTMLParserPrivate

        _init(...args: any[]): void;
    }

    class HeaderAddress {
        static $gtype: GObject.GType<HeaderAddress>;

        // Own fields of Camel.HeaderAddress

        next: any;
        type: HeaderAddressType;
        name: string;
        refcount: number;

        // Constructors of Camel.HeaderAddress

        constructor(
            properties?: Partial<{
                next: any;
                type: HeaderAddressType;
                name: string;
                refcount: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): HeaderAddress;

        static new_group(name: string): HeaderAddress;

        static new_name(name: string, addr: string): HeaderAddress;

        // Own static methods of Camel.HeaderAddress

        static decode(_in: string, charset: string): HeaderAddress;
        static fold(_in: string, headerlen: number): string;
        /**
         * TODO: Document me.
         * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
         * @param addr the #CamelHeaderAddress to add
         */
        static list_append(addrlistp: HeaderAddress[], addr: HeaderAddress): void;
        /**
         * TODO: Document me.
         * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
         * @param addrs a NULL-terminated list of #CamelHeaderAddress to add
         */
        static list_append_list(addrlistp: HeaderAddress[], addrs: HeaderAddress[]): void;
        /**
         * TODO: Document me.
         * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
         */
        static list_clear(addrlistp: HeaderAddress[]): void;
        /**
         * TODO: Document me.
         * @param addrlist a NULL-terminated list of #CamelHeaderAddress objects
         */
        static list_encode(addrlist: HeaderAddress[]): string;
        /**
         * TODO: Document me.
         * @param addrlist a NULL-terminated list of #CamelHeaderAddress objects
         */
        static list_format(addrlist: HeaderAddress[]): string;

        // Own methods of Camel.HeaderAddress

        add_member(member: HeaderAddress): void;
        ref(): HeaderAddress;
        set_addr(addr: string): void;
        /**
         * TODO: Document me.
         * @param group a NULL-terminated list of #CamelHeaderAddress
         */
        set_members(group: HeaderAddress[]): void;
        set_name(name: string): void;
        unref(): void;
    }

    class HeaderParam {
        static $gtype: GObject.GType<HeaderParam>;

        // Own fields of Camel.HeaderParam

        next: any;
        name: string;
        value: string;

        // Constructors of Camel.HeaderParam

        constructor(
            properties?: Partial<{
                next: any;
                name: string;
                value: string;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Camel.HeaderParam

        static list_decode(_in?: string | null): any | null;
        static list_format(params?: any | null): string;
        static list_format_append(out: GLib.String, params?: any | null): void;
        /**
         * Free the list of params.
         * @param params a list of params
         */
        static list_free(params?: any | null): void;
    }

    type IndexClass = typeof Index;
    type IndexCursorClass = typeof IndexCursor;
    abstract class IndexCursorPrivate {
        static $gtype: GObject.GType<IndexCursorPrivate>;

        // Constructors of Camel.IndexCursorPrivate

        _init(...args: any[]): void;
    }

    type IndexNameClass = typeof IndexName;
    abstract class IndexNamePrivate {
        static $gtype: GObject.GType<IndexNamePrivate>;

        // Constructors of Camel.IndexNamePrivate

        _init(...args: any[]): void;
    }

    abstract class IndexPrivate {
        static $gtype: GObject.GType<IndexPrivate>;

        // Constructors of Camel.IndexPrivate

        _init(...args: any[]): void;
    }

    type InternetAddressClass = typeof InternetAddress;
    abstract class InternetAddressPrivate {
        static $gtype: GObject.GType<InternetAddressPrivate>;

        // Constructors of Camel.InternetAddressPrivate

        _init(...args: any[]): void;
    }

    type JunkFilterInterface = typeof JunkFilter;
    class KeyBlock {
        static $gtype: GObject.GType<KeyBlock>;

        // Own fields of Camel.KeyBlock

        next: _block_t;
        used: number;

        // Constructors of Camel.KeyBlock

        constructor(
            properties?: Partial<{
                next: _block_t;
                used: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type KeyFileClass = typeof KeyFile;
    abstract class KeyFilePrivate {
        static $gtype: GObject.GType<KeyFilePrivate>;

        // Constructors of Camel.KeyFilePrivate

        _init(...args: any[]): void;
    }

    class KeyRootBlock {
        static $gtype: GObject.GType<KeyRootBlock>;

        // Own fields of Camel.KeyRootBlock

        first: _block_t;
        last: _block_t;
        free: _key_t;

        // Constructors of Camel.KeyRootBlock

        constructor(
            properties?: Partial<{
                first: _block_t;
                last: _block_t;
                free: _key_t;
            }>,
        );
        _init(...args: any[]): void;
    }

    type KeyTableClass = typeof KeyTable;
    abstract class KeyTablePrivate {
        static $gtype: GObject.GType<KeyTablePrivate>;

        // Constructors of Camel.KeyTablePrivate

        _init(...args: any[]): void;
    }

    type LocalSettingsClass = typeof LocalSettings;
    abstract class LocalSettingsPrivate {
        static $gtype: GObject.GType<LocalSettingsPrivate>;

        // Constructors of Camel.LocalSettingsPrivate

        _init(...args: any[]): void;
    }

    /**
     * The extensive DB format, supporting basic searching and sorting.
     */
    class MIRecord {
        static $gtype: GObject.GType<MIRecord>;

        // Own fields of Camel.MIRecord

        uid: string;
        flags: number;
        msg_type: number;
        dirty: number;
        read: boolean;
        deleted: boolean;
        replied: boolean;
        important: boolean;
        junk: boolean;
        attachment: boolean;
        size: number;
        dsent: number;
        dreceived: number;
        subject: string;
        from: string;
        to: string;
        cc: string;
        mlist: string;
        followup_flag: string;
        followup_completed_on: string;
        followup_due_by: string;
        part: string;
        labels: string;
        usertags: string;
        cinfo: string;
        bdata: string;
        userheaders: string;
        preview: string;

        // Constructors of Camel.MIRecord

        constructor(
            properties?: Partial<{
                uid: string;
                flags: number;
                msg_type: number;
                dirty: number;
                read: boolean;
                deleted: boolean;
                replied: boolean;
                important: boolean;
                junk: boolean;
                attachment: boolean;
                size: number;
                dsent: number;
                dreceived: number;
                subject: string;
                from: string;
                to: string;
                cc: string;
                mlist: string;
                followup_flag: string;
                followup_completed_on: string;
                followup_due_by: string;
                part: string;
                labels: string;
                usertags: string;
                cinfo: string;
                bdata: string;
                userheaders: string;
                preview: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    type MediumClass = typeof Medium;
    abstract class MediumPrivate {
        static $gtype: GObject.GType<MediumPrivate>;

        // Constructors of Camel.MediumPrivate

        _init(...args: any[]): void;
    }

    abstract class MemChunk {
        static $gtype: GObject.GType<MemChunk>;

        // Constructors of Camel.MemChunk

        _init(...args: any[]): void;
    }

    abstract class MemPool {
        static $gtype: GObject.GType<MemPool>;

        // Constructors of Camel.MemPool

        _init(...args: any[]): void;
    }

    class MessageContentInfo {
        static $gtype: GObject.GType<MessageContentInfo>;

        // Own fields of Camel.MessageContentInfo

        type: ContentType;
        disposition: ContentDisposition;
        id: string;
        description: string;
        encoding: string;
        size: number;

        // Constructors of Camel.MessageContentInfo

        constructor(
            properties?: Partial<{
                id: string;
                description: string;
                encoding: string;
                size: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): MessageContentInfo;

        static new_from_headers(headers: NameValueArray): MessageContentInfo;

        static new_from_message(mime_part: MimePart): MessageContentInfo;

        static new_from_parser(parser: MimeParser): MessageContentInfo;

        // Own methods of Camel.MessageContentInfo

        copy(): MessageContentInfo | null;
        dump(depth: number): void;
        /**
         * Recursively frees the content info `ci,` and all associated memory.
         */
        free(): void;
        /**
         * Calls the `func` for each #CamelMessageContentInfo, including the top one.
         * The `func` can return %TRUE to continue processing or %FALSE to stop it.
         * @param func a #CamelMessageContentInfoTraverseCallback
         * @returns %FALSE on error or when the @func returned %FALSE, otherwise %TRUE
         */
        traverse(func: MessageContentInfoTraverseCallback): boolean;
    }

    type MessageInfoBaseClass = typeof MessageInfoBase;
    abstract class MessageInfoBasePrivate {
        static $gtype: GObject.GType<MessageInfoBasePrivate>;

        // Constructors of Camel.MessageInfoBasePrivate

        _init(...args: any[]): void;
    }

    type MessageInfoClass = typeof MessageInfo;
    abstract class MessageInfoPrivate {
        static $gtype: GObject.GType<MessageInfoPrivate>;

        // Constructors of Camel.MessageInfoPrivate

        _init(...args: any[]): void;
    }

    type MimeFilterBasicClass = typeof MimeFilterBasic;
    abstract class MimeFilterBasicPrivate {
        static $gtype: GObject.GType<MimeFilterBasicPrivate>;

        // Constructors of Camel.MimeFilterBasicPrivate

        _init(...args: any[]): void;
    }

    type MimeFilterBestencClass = typeof MimeFilterBestenc;
    abstract class MimeFilterBestencPrivate {
        static $gtype: GObject.GType<MimeFilterBestencPrivate>;

        // Constructors of Camel.MimeFilterBestencPrivate

        _init(...args: any[]): void;
    }

    type MimeFilterCRLFClass = typeof MimeFilterCRLF;
    abstract class MimeFilterCRLFPrivate {
        static $gtype: GObject.GType<MimeFilterCRLFPrivate>;

        // Constructors of Camel.MimeFilterCRLFPrivate

        _init(...args: any[]): void;
    }

    type MimeFilterCanonClass = typeof MimeFilterCanon;
    abstract class MimeFilterCanonPrivate {
        static $gtype: GObject.GType<MimeFilterCanonPrivate>;

        // Constructors of Camel.MimeFilterCanonPrivate

        _init(...args: any[]): void;
    }

    type MimeFilterCharsetClass = typeof MimeFilterCharset;
    abstract class MimeFilterCharsetPrivate {
        static $gtype: GObject.GType<MimeFilterCharsetPrivate>;

        // Constructors of Camel.MimeFilterCharsetPrivate

        _init(...args: any[]): void;
    }

    type MimeFilterClass = typeof MimeFilter;
    type MimeFilterEnrichedClass = typeof MimeFilterEnriched;
    abstract class MimeFilterEnrichedPrivate {
        static $gtype: GObject.GType<MimeFilterEnrichedPrivate>;

        // Constructors of Camel.MimeFilterEnrichedPrivate

        _init(...args: any[]): void;
    }

    type MimeFilterFromClass = typeof MimeFilterFrom;
    abstract class MimeFilterFromPrivate {
        static $gtype: GObject.GType<MimeFilterFromPrivate>;

        // Constructors of Camel.MimeFilterFromPrivate

        _init(...args: any[]): void;
    }

    type MimeFilterGZipClass = typeof MimeFilterGZip;
    abstract class MimeFilterGZipPrivate {
        static $gtype: GObject.GType<MimeFilterGZipPrivate>;

        // Constructors of Camel.MimeFilterGZipPrivate

        _init(...args: any[]): void;
    }

    type MimeFilterHTMLClass = typeof MimeFilterHTML;
    abstract class MimeFilterHTMLPrivate {
        static $gtype: GObject.GType<MimeFilterHTMLPrivate>;

        // Constructors of Camel.MimeFilterHTMLPrivate

        _init(...args: any[]): void;
    }

    type MimeFilterIndexClass = typeof MimeFilterIndex;
    abstract class MimeFilterIndexPrivate {
        static $gtype: GObject.GType<MimeFilterIndexPrivate>;

        // Constructors of Camel.MimeFilterIndexPrivate

        _init(...args: any[]): void;
    }

    type MimeFilterLinewrapClass = typeof MimeFilterLinewrap;
    abstract class MimeFilterLinewrapPrivate {
        static $gtype: GObject.GType<MimeFilterLinewrapPrivate>;

        // Constructors of Camel.MimeFilterLinewrapPrivate

        _init(...args: any[]): void;
    }

    type MimeFilterPgpClass = typeof MimeFilterPgp;
    abstract class MimeFilterPgpPrivate {
        static $gtype: GObject.GType<MimeFilterPgpPrivate>;

        // Constructors of Camel.MimeFilterPgpPrivate

        _init(...args: any[]): void;
    }

    abstract class MimeFilterPrivate {
        static $gtype: GObject.GType<MimeFilterPrivate>;

        // Constructors of Camel.MimeFilterPrivate

        _init(...args: any[]): void;
    }

    type MimeFilterProgressClass = typeof MimeFilterProgress;
    abstract class MimeFilterProgressPrivate {
        static $gtype: GObject.GType<MimeFilterProgressPrivate>;

        // Constructors of Camel.MimeFilterProgressPrivate

        _init(...args: any[]): void;
    }

    type MimeFilterToHTMLClass = typeof MimeFilterToHTML;
    abstract class MimeFilterToHTMLPrivate {
        static $gtype: GObject.GType<MimeFilterToHTMLPrivate>;

        // Constructors of Camel.MimeFilterToHTMLPrivate

        _init(...args: any[]): void;
    }

    type MimeFilterWindowsClass = typeof MimeFilterWindows;
    abstract class MimeFilterWindowsPrivate {
        static $gtype: GObject.GType<MimeFilterWindowsPrivate>;

        // Constructors of Camel.MimeFilterWindowsPrivate

        _init(...args: any[]): void;
    }

    type MimeFilterYencClass = typeof MimeFilterYenc;
    abstract class MimeFilterYencPrivate {
        static $gtype: GObject.GType<MimeFilterYencPrivate>;

        // Constructors of Camel.MimeFilterYencPrivate

        _init(...args: any[]): void;
    }

    type MimeMessageClass = typeof MimeMessage;
    abstract class MimeMessagePrivate {
        static $gtype: GObject.GType<MimeMessagePrivate>;

        // Constructors of Camel.MimeMessagePrivate

        _init(...args: any[]): void;
    }

    type MimeParserClass = typeof MimeParser;
    abstract class MimeParserPrivate {
        static $gtype: GObject.GType<MimeParserPrivate>;

        // Constructors of Camel.MimeParserPrivate

        _init(...args: any[]): void;
    }

    type MimePartClass = typeof MimePart;
    abstract class MimePartPrivate {
        static $gtype: GObject.GType<MimePartPrivate>;

        // Constructors of Camel.MimePartPrivate

        _init(...args: any[]): void;
    }

    class Msg {
        static $gtype: GObject.GType<Msg>;

        // Constructors of Camel.Msg

        _init(...args: any[]): void;
    }

    abstract class MsgPort {
        static $gtype: GObject.GType<MsgPort>;

        // Constructors of Camel.MsgPort

        _init(...args: any[]): void;
    }

    type MultipartClass = typeof Multipart;
    type MultipartEncryptedClass = typeof MultipartEncrypted;
    abstract class MultipartEncryptedPrivate {
        static $gtype: GObject.GType<MultipartEncryptedPrivate>;

        // Constructors of Camel.MultipartEncryptedPrivate

        _init(...args: any[]): void;
    }

    abstract class MultipartPrivate {
        static $gtype: GObject.GType<MultipartPrivate>;

        // Constructors of Camel.MultipartPrivate

        _init(...args: any[]): void;
    }

    type MultipartSignedClass = typeof MultipartSigned;
    abstract class MultipartSignedPrivate {
        static $gtype: GObject.GType<MultipartSignedPrivate>;

        // Constructors of Camel.MultipartSignedPrivate

        _init(...args: any[]): void;
    }

    type NNTPAddressClass = typeof NNTPAddress;
    abstract class NNTPAddressPrivate {
        static $gtype: GObject.GType<NNTPAddressPrivate>;

        // Constructors of Camel.NNTPAddressPrivate

        _init(...args: any[]): void;
    }

    class NameValueArray {
        static $gtype: GObject.GType<NameValueArray>;

        // Constructors of Camel.NameValueArray

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): NameValueArray;

        static new_sized(reserve_size: number): NameValueArray;

        // Own methods of Camel.NameValueArray

        /**
         * Appends a new element of the name `name` and the value `value`
         * at the end of `array`.
         *
         * See: camel_name_value_array_set_named
         * @param name a name
         * @param value a value
         */
        append(name: string, value: string): void;
        /**
         * Removes all elements of the `array`.
         */
        clear(): void;
        /**
         * Creates a new copy of the `array`. The returned pointer should be freed
         * with camel_name_value_array_free() when no longer needed.
         * @returns A new copy of the @array. See: camel_name_value_array_new, camel_name_value_array_new_sized
         */
        copy(): NameValueArray;
        /**
         * Compares content of the two #CamelNameValueArray and returns whether
         * they equal. Note this is an expensive operation for large arrays.
         * @param array_b the second #CamelNameValueArray
         * @param compare_type a compare type, one of #CamelCompareType
         * @returns Whether the two #CamelNameValueArray have the same content.
         */
        equal(array_b: NameValueArray | null, compare_type: CompareType): boolean;
        /**
         * Frees the `array,` previously allocated by camel_name_value_array_new(),
         * camel_name_value_array_new_sized() or camel_name_value_array_copy().
         * If the `array` is %NULL, then does nothing.
         */
        free(): void;
        /**
         * Returns the name and the value of the element at index `index`. Either
         * of the `out_name` and `out_value` can be %NULL, to not return that part.
         * @param index an index
         * @returns %TRUE on success, %FALSE otherwise. See: camel_name_value_array_get_name, camel_name_value_array_get_value, camel_name_value_array_get_named
         */
        get(index: number): [boolean, string, string];
        get_length(): number;
        /**
         * Returns the name of the element at index `index`.
         * @param index an index
         * @returns Name of the element at the given @index,    or %NULL on error. See: camel_name_value_array_get, camel_name_value_array_get_value
         */
        get_name(index: number): string | null;
        /**
         * Returns the value of the first element named `name,` or %NULL when there
         * is no element of such `name` in the `array`. The `compare_type` determines
         * how to compare the names.
         * @param compare_type a compare type, one of #CamelCompareType
         * @param name a name
         * @returns Value of the first element named @name, or %NULL. See: camel_name_value_array_get, camel_name_value_array_get_name
         */
        get_named(compare_type: CompareType, name: string): string | null;
        /**
         * Returns the value of the element at index `index`.
         * @param index an index
         * @returns Value of the element at the given @index,    or %NULL on error. See: camel_name_value_array_get, camel_name_value_array_get_name
         */
        get_value(index: number): string | null;
        /**
         * Removes element at index `index`.
         * @param index an index to remove
         * @returns Whether the element was removed.
         */
        remove(index: number): boolean;
        /**
         * Removes elements of the `array` with the given `name`.
         * The `compare_type` determines hot to compare the names.
         * If the `all_occurrences` is set to %TRUE, then every elements with the `name`
         * are removed, otherwise only the first occurrence is removed.
         * @param compare_type a compare type, one of #CamelCompareType
         * @param name a name to remove
         * @param all_occurrences whether to remove all occurrences of the @name
         * @returns How many elements had been removed.
         */
        remove_named(compare_type: CompareType, name: string, all_occurrences: boolean): number;
        /**
         * Sets both the `name` and the `value` of the element at index `index`.
         * @param index an index
         * @param name a name
         * @param value a value
         * @returns Whether the @array changed. See: camel_name_value_array_append, camel_name_value_array_set_name, camel_name_value_array_set_value
         */
        set(index: number, name: string, value: string): boolean;
        /**
         * Sets the `name` of the element at index `index`.
         * @param index an index
         * @param name a name
         * @returns Whether the @array changed. See: camel_name_value_array_set, camel_name_value_array_set_value
         */
        set_name(index: number, name: string): boolean;
        /**
         * Finds an element named `name` and sets its value to `value,` or appends
         * a new element, in case no such named element exists in the `array` yet.
         * In case there are more elements named with `name` only the first
         * occurrence is changed. The `compare_type` determines how to compare
         * the names.
         * @param compare_type a compare type, one of #CamelCompareType
         * @param name a name
         * @param value a value
         * @returns Whether the @array changed. See: camel_name_value_array_append, camel_name_value_array_set
         */
        set_named(compare_type: CompareType, name: string, value: string): boolean;
        /**
         * Sets the `value` of the element at index `index`.
         * @param index an index
         * @param value a value
         * @returns Whether the @array changed. See: camel_name_value_array_set, camel_name_value_array_set_name
         */
        set_value(index: number, value: string): boolean;
    }

    class NamedFlags {
        static $gtype: GObject.GType<NamedFlags>;

        // Constructors of Camel.NamedFlags

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): NamedFlags;

        static new_sized(reserve_size: number): NamedFlags;

        // Own methods of Camel.NamedFlags

        /**
         * Removes all the elements of the array.
         */
        clear(): void;
        contains(name: string): boolean;
        /**
         * Creates a copy of the `named_flags` and returns it.
         * @returns A newly allocated #CamelNamedFlags.    Free it with camel_named_flags_free() when done with it.
         */
        copy(): NamedFlags;
        /**
         * Compares content of the two #CamelNamedFlags and returns whether
         * they equal. Note this is an expensive operation for large sets.
         * @param named_flags_b the second #CamelNamedFlags
         * @returns Whether the two #CamelNamedFlags have the same content.
         */
        equal(named_flags_b?: NamedFlags | null): boolean;
        /**
         * Frees memory associated iwth the `named_flags`. Does nothing,
         * if `named_flags` is %NULL.
         */
        free(): void;
        get(index: number): string | null;
        get_length(): number;
        /**
         * Inserts a flag named `name` into the `named_flags,` if it is not included
         * already (comparing case sensitively), or does nothing otherwise.
         * @param name name of the flag
         * @returns %TRUE the flag named @name was inserted; %FALSE otherwise.
         */
        insert(name: string): boolean;
        /**
         * Removes a flag named `name` from the `named_flags`.
         * @param name name of the flag
         * @returns %TRUE when the @named_flags contained a flag named @name,    comparing case sensitively, and it was removed; %FALSE otherwise.
         */
        remove(name: string): boolean;
    }

    type NetworkServiceInterface = typeof NetworkService;
    type NetworkSettingsInterface = typeof NetworkSettings;
    type NullOutputStreamClass = typeof NullOutputStream;
    abstract class NullOutputStreamPrivate {
        static $gtype: GObject.GType<NullOutputStreamPrivate>;

        // Constructors of Camel.NullOutputStreamPrivate

        _init(...args: any[]): void;
    }

    abstract class ObjectBag {
        static $gtype: GObject.GType<ObjectBag>;

        // Constructors of Camel.ObjectBag

        _init(...args: any[]): void;

        // Own methods of Camel.ObjectBag

        /**
         * Aborts a key reservation.
         * @param key a reserved key
         */
        abort(key?: any | null): void;
        /**
         * Adds `object` to `bag`.  The `key` MUST have been previously reserved using
         * camel_object_bag_reserve().
         * @param key a reserved key
         * @param object a #GObject
         */
        add(key?: any | null, object?: any | null): void;
        /**
         * Frees `bag`.  As a precaution, the function will emit a warning to standard
         * error and return without freeing `bag` if `bag` still has reserved keys.
         */
        destroy(): void;
        /**
         * Lookup an object by `key`.  If the key is currently reserved, the function
         * will block until another thread commits or aborts the reservation.  The
         * caller owns the reference to the returned object.  Use g_object_unref ()
         * to unreference it.
         * @param key a key
         * @returns the object corresponding to @key, or %NULL if not found
         */
        get(key?: any | null): any | null;
        /**
         * Returns a #GPtrArray of all the objects in the bag.  The caller owns
         * both the array and the object references, so to free the array use:
         *
         *
         * ```
         *     g_ptr_array_foreach (array, (GFunc) g_object_unref, NULL);
         *     g_ptr_array_free (array, TRUE);
         * ```
         *
         * @returns an array of objects in @bag
         */
        list(): GObject.Object[];
        /**
         * Returns the object for `key` in `bag,` ignoring any reservations.  If it
         * isn't committed, then it isn't considered.  This should only be used
         * where reliable transactional-based state is not required.
         *
         * Unlink other "peek" operations, the caller owns the returned object
         * reference.  Use g_object_unref () to unreference it.
         * @param key an unreserved key
         * @returns the object for @key, or %NULL if @key is reserved or not found
         */
        peek(key?: any | null): any | null;
        /**
         * Changes the key for `object` to `new_key,` atomically.
         *
         * It is considered a programming error if `object` is not found in `bag`.
         * In such case the function will emit a terminal warning and return.
         * @param object a #GObject
         * @param new_key a new key for @object
         */
        rekey(object?: any | null, new_key?: any | null): void;
        /**
         * Removes `object` from `bag`.
         * @param object a #GObject
         */
        remove(object?: any | null): void;
        /**
         * Reserves `key` in `bag`.  If `key` is already reserved in another thread,
         * then wait until the reservation has been committed.
         *
         * After reserving `key,` you either get a reference to the object
         * corresponding to `key` (similar to camel_object_bag_get()) or you get
         * %NULL, signifying that you MUST call either camel_object_bag_add() or
         * camel_object_bag_abort().
         * @param key the key to reserve
         * @returns the object for @key, or %NULL if @key is not found
         */
        reserve(key?: any | null): any | null;
    }

    type ObjectClass = typeof Object;
    abstract class ObjectPrivate {
        static $gtype: GObject.GType<ObjectPrivate>;

        // Constructors of Camel.ObjectPrivate

        _init(...args: any[]): void;
    }

    type OfflineFolderClass = typeof OfflineFolder;
    abstract class OfflineFolderPrivate {
        static $gtype: GObject.GType<OfflineFolderPrivate>;

        // Constructors of Camel.OfflineFolderPrivate

        _init(...args: any[]): void;
    }

    type OfflineSettingsClass = typeof OfflineSettings;
    abstract class OfflineSettingsPrivate {
        static $gtype: GObject.GType<OfflineSettingsPrivate>;

        // Constructors of Camel.OfflineSettingsPrivate

        _init(...args: any[]): void;
    }

    type OfflineStoreClass = typeof OfflineStore;
    abstract class OfflineStorePrivate {
        static $gtype: GObject.GType<OfflineStorePrivate>;

        // Constructors of Camel.OfflineStorePrivate

        _init(...args: any[]): void;
    }

    type OperationClass = typeof Operation;
    abstract class OperationPrivate {
        static $gtype: GObject.GType<OperationPrivate>;

        // Constructors of Camel.OperationPrivate

        _init(...args: any[]): void;
    }

    class PartitionKey {
        static $gtype: GObject.GType<PartitionKey>;

        // Own fields of Camel.PartitionKey

        hashid: _hash_t;
        keyid: _key_t;

        // Constructors of Camel.PartitionKey

        constructor(
            properties?: Partial<{
                hashid: _hash_t;
                keyid: _key_t;
            }>,
        );
        _init(...args: any[]): void;
    }

    class PartitionKeyBlock {
        static $gtype: GObject.GType<PartitionKeyBlock>;

        // Own fields of Camel.PartitionKeyBlock

        used: number;
        keys: any[];

        // Constructors of Camel.PartitionKeyBlock

        constructor(
            properties?: Partial<{
                used: number;
                keys: any[];
            }>,
        );
        _init(...args: any[]): void;
    }

    class PartitionMap {
        static $gtype: GObject.GType<PartitionMap>;

        // Own fields of Camel.PartitionMap

        hashid: _hash_t;
        blockid: _block_t;

        // Constructors of Camel.PartitionMap

        constructor(
            properties?: Partial<{
                hashid: _hash_t;
                blockid: _block_t;
            }>,
        );
        _init(...args: any[]): void;
    }

    class PartitionMapBlock {
        static $gtype: GObject.GType<PartitionMapBlock>;

        // Own fields of Camel.PartitionMapBlock

        next: _block_t;
        used: number;
        partition: any[];

        // Constructors of Camel.PartitionMapBlock

        constructor(
            properties?: Partial<{
                next: _block_t;
                used: number;
                partition: any[];
            }>,
        );
        _init(...args: any[]): void;
    }

    type PartitionTableClass = typeof PartitionTable;
    abstract class PartitionTablePrivate {
        static $gtype: GObject.GType<PartitionTablePrivate>;

        // Constructors of Camel.PartitionTablePrivate

        _init(...args: any[]): void;
    }

    class Provider {
        static $gtype: GObject.GType<Provider>;

        // Own fields of Camel.Provider

        protocol: string;
        name: string;
        description: string;
        domain: string;
        flags: ProviderFlags;
        url_flags: ProviderURLFlags;
        port_entries: ProviderPortEntry;
        object_types: GObject.GType[];
        authtypes: any[];
        url_hash: GLib.HashFunc;
        url_equal: GLib.EqualFunc;
        translation_domain: string;
        priv: any;

        // Constructors of Camel.Provider

        _init(...args: any[]): void;

        // Own static methods of Camel.Provider

        /**
         * Returns the registered #CamelProvider for `protocol,` loading it
         * from disk if necessary.  If no #CamelProvider can be found for
         * `protocol,` or the provider module fails to load, the function
         * sets `error` and returns %NULL.
         *
         * The returned #CamelProvider is owned by Camel and should not be
         * modified or freed.
         * @param protocol a #CamelProvider protocol name
         */
        static get(protocol: string): Provider;
        /**
         * Initialize the Camel provider system by reading in the .urls
         * files in the provider directory and creating a hash table mapping
         * URLs to module names.
         *
         * A .urls file has the same initial prefix as the shared library it
         * correspond to, and consists of a series of lines containing the URL
         * protocols that that library handles.
         *
         * TODO: This should be pathed?
         * TODO: This should be plugin-d?
         */
        static init(): void;
        /**
         * This returns a list of available providers. If `load` is %TRUE, it will
         * first load in all available providers that haven't yet been loaded.
         *
         * Free the returned list with g_list_free().  The #CamelProvider structs
         * in the list are owned by Camel and should not be modified or freed.
         * @param load whether or not to load in providers that are not already loaded
         */
        static list(load: boolean): Provider[];
        /**
         * Loads the provider at `path,` and calls its initialization function,
         * passing `session` as an argument. The provider should then register
         * itself with `session`.
         * @param path the path to a shared library
         */
        static load(path: string): boolean;

        // Own methods of Camel.Provider

        /**
         * After filling in the standard Username/Hostname/Port/Path settings
         * (which must be set in `url)`, if the provider supports it, you
         * may wish to have the provider auto-detect further settings based on
         * the aformentioned settings.
         *
         * If the provider does not support auto-detection, `auto_detected`
         * will be set to %NULL. Otherwise the provider will attempt to
         * auto-detect whatever it can and file them into `auto_detected`. If
         * for some reason it cannot auto-detect anything (not enough
         * information provided in `url?`) then `auto_detected` will be
         * set to %NULL and an exception may be set to explain why it failed.
         * @param url a #CamelURL
         * @returns 0 on success or -1 on fail.
         */
        auto_detect(url: URL): [number, GLib.HashTable<string, string> | null];
        /**
         * Registers a provider.
         */
        register(): void;
    }

    class ProviderConfEntry {
        static $gtype: GObject.GType<ProviderConfEntry>;

        // Own fields of Camel.ProviderConfEntry

        type: ProviderConfType;
        name: string;
        depname: string;
        text: string;
        value: string;

        // Constructors of Camel.ProviderConfEntry

        _init(...args: any[]): void;
    }

    class ProviderModule {
        static $gtype: GObject.GType<ProviderModule>;

        // Own fields of Camel.ProviderModule

        path: string;
        types: any[];
        loaded: number;

        // Constructors of Camel.ProviderModule

        constructor(
            properties?: Partial<{
                path: string;
                loaded: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Camel.ProviderModule

        static init(): void;
    }

    class ProviderPortEntry {
        static $gtype: GObject.GType<ProviderPortEntry>;

        // Own fields of Camel.ProviderPortEntry

        port: number;
        desc: string;
        is_ssl: boolean;

        // Constructors of Camel.ProviderPortEntry

        constructor(
            properties?: Partial<{
                port: number;
                desc: string;
                is_ssl: boolean;
            }>,
        );
        _init(...args: any[]): void;
    }

    type SExpClass = typeof SExp;
    abstract class SExpPrivate {
        static $gtype: GObject.GType<SExpPrivate>;

        // Constructors of Camel.SExpPrivate

        _init(...args: any[]): void;
    }

    class SExpResult {
        static $gtype: GObject.GType<SExpResult>;

        // Own fields of Camel.SExpResult

        type: SExpResultType;
        time_generator: boolean;
        occuring_start: number;
        occuring_end: number;

        // Constructors of Camel.SExpResult

        _init(...args: any[]): void;
    }

    /**
     * Describes a function or a variable symbol
     */
    class SExpSymbol {
        static $gtype: GObject.GType<SExpSymbol>;

        // Own fields of Camel.SExpSymbol

        type: number;
        name: string;
        data: any;

        // Constructors of Camel.SExpSymbol

        constructor(
            properties?: Partial<{
                type: number;
                name: string;
                data: any;
            }>,
        );
        _init(...args: any[]): void;
    }

    class SExpTerm {
        static $gtype: GObject.GType<SExpTerm>;

        // Own fields of Camel.SExpTerm

        type: SExpTermType;

        // Constructors of Camel.SExpTerm

        _init(...args: any[]): void;
    }

    type SMIMEContextClass = typeof SMIMEContext;
    abstract class SMIMEContextPrivate {
        static $gtype: GObject.GType<SMIMEContextPrivate>;

        // Constructors of Camel.SMIMEContextPrivate

        _init(...args: any[]): void;
    }

    type SaslAnonymousClass = typeof SaslAnonymous;
    abstract class SaslAnonymousPrivate {
        static $gtype: GObject.GType<SaslAnonymousPrivate>;

        // Constructors of Camel.SaslAnonymousPrivate

        _init(...args: any[]): void;
    }

    type SaslClass = typeof Sasl;
    type SaslCramMd5Class = typeof SaslCramMd5;
    abstract class SaslCramMd5Private {
        static $gtype: GObject.GType<SaslCramMd5Private>;

        // Constructors of Camel.SaslCramMd5Private

        _init(...args: any[]): void;
    }

    type SaslDigestMd5Class = typeof SaslDigestMd5;
    abstract class SaslDigestMd5Private {
        static $gtype: GObject.GType<SaslDigestMd5Private>;

        // Constructors of Camel.SaslDigestMd5Private

        _init(...args: any[]): void;
    }

    type SaslGssapiClass = typeof SaslGssapi;
    abstract class SaslGssapiPrivate {
        static $gtype: GObject.GType<SaslGssapiPrivate>;

        // Constructors of Camel.SaslGssapiPrivate

        _init(...args: any[]): void;
    }

    type SaslLoginClass = typeof SaslLogin;
    abstract class SaslLoginPrivate {
        static $gtype: GObject.GType<SaslLoginPrivate>;

        // Constructors of Camel.SaslLoginPrivate

        _init(...args: any[]): void;
    }

    type SaslNTLMClass = typeof SaslNTLM;
    abstract class SaslNTLMPrivate {
        static $gtype: GObject.GType<SaslNTLMPrivate>;

        // Constructors of Camel.SaslNTLMPrivate

        _init(...args: any[]): void;
    }

    type SaslPOPB4SMTPClass = typeof SaslPOPB4SMTP;
    abstract class SaslPOPB4SMTPPrivate {
        static $gtype: GObject.GType<SaslPOPB4SMTPPrivate>;

        // Constructors of Camel.SaslPOPB4SMTPPrivate

        _init(...args: any[]): void;
    }

    type SaslPlainClass = typeof SaslPlain;
    abstract class SaslPlainPrivate {
        static $gtype: GObject.GType<SaslPlainPrivate>;

        // Constructors of Camel.SaslPlainPrivate

        _init(...args: any[]): void;
    }

    abstract class SaslPrivate {
        static $gtype: GObject.GType<SaslPrivate>;

        // Constructors of Camel.SaslPrivate

        _init(...args: any[]): void;
    }

    type SaslXOAuth2Class = typeof SaslXOAuth2;
    type SaslXOAuth2GoogleClass = typeof SaslXOAuth2Google;
    abstract class SaslXOAuth2GooglePrivate {
        static $gtype: GObject.GType<SaslXOAuth2GooglePrivate>;

        // Constructors of Camel.SaslXOAuth2GooglePrivate

        _init(...args: any[]): void;
    }

    type SaslXOAuth2OutlookClass = typeof SaslXOAuth2Outlook;
    abstract class SaslXOAuth2OutlookPrivate {
        static $gtype: GObject.GType<SaslXOAuth2OutlookPrivate>;

        // Constructors of Camel.SaslXOAuth2OutlookPrivate

        _init(...args: any[]): void;
    }

    abstract class SaslXOAuth2Private {
        static $gtype: GObject.GType<SaslXOAuth2Private>;

        // Constructors of Camel.SaslXOAuth2Private

        _init(...args: any[]): void;
    }

    type SaslXOAuth2YahooClass = typeof SaslXOAuth2Yahoo;
    abstract class SaslXOAuth2YahooPrivate {
        static $gtype: GObject.GType<SaslXOAuth2YahooPrivate>;

        // Constructors of Camel.SaslXOAuth2YahooPrivate

        _init(...args: any[]): void;
    }

    class ServiceAuthType {
        static $gtype: GObject.GType<ServiceAuthType>;

        // Own fields of Camel.ServiceAuthType

        name: string;
        description: string;
        authproto: string;
        need_password: boolean;

        // Constructors of Camel.ServiceAuthType

        constructor(
            properties?: Partial<{
                name: string;
                description: string;
                authproto: string;
                need_password: boolean;
            }>,
        );
        _init(...args: any[]): void;

        // Own methods of Camel.ServiceAuthType

        /**
         * Copies the `service_auth_type` struct.
         * Does nothing and returns the given object in reality, needed for the introspection.
         * @returns the copy of @service_auth_type
         */
        copy(): ServiceAuthType;
        /**
         * Frees the `service_auth_type` struct.
         * Does nothing in reality, needed for the introspection.
         */
        free(): void;
    }

    type ServiceClass = typeof Service;
    abstract class ServicePrivate {
        static $gtype: GObject.GType<ServicePrivate>;

        // Constructors of Camel.ServicePrivate

        _init(...args: any[]): void;
    }

    type SessionClass = typeof Session;
    abstract class SessionPrivate {
        static $gtype: GObject.GType<SessionPrivate>;

        // Constructors of Camel.SessionPrivate

        _init(...args: any[]): void;
    }

    type SettingsClass = typeof Settings;
    abstract class SettingsPrivate {
        static $gtype: GObject.GType<SettingsPrivate>;

        // Constructors of Camel.SettingsPrivate

        _init(...args: any[]): void;
    }

    type StoreClass = typeof Store;
    class StoreInfo {
        static $gtype: GObject.GType<StoreInfo>;

        // Own fields of Camel.StoreInfo

        refcount: number;
        summary: StoreSummary;
        path: string;
        flags: number;
        unread: number;
        total: number;

        // Constructors of Camel.StoreInfo

        _init(...args: any[]): void;

        // Own static methods of Camel.StoreInfo

        /**
         * Returns the last segment of the path string from `info`.
         * @param summary a #CamelStoreSummary
         * @param info a #CamelStoreInfo
         */
        static name(summary: StoreSummary, info: StoreInfo): string;
        /**
         * Set a specific string on the `info`.
         * @param summary a #CamelStoreSummary object
         * @param info a #CamelStoreInfo
         * @param type specific string being set
         * @param value string value to set
         */
        static set_string(summary: StoreSummary, info: StoreInfo, type: number, value: string): void;

        // Own methods of Camel.StoreInfo

        /**
         * Returns the last segment of the path string from `info`.
         * @returns the last segment of the path string from @info
         */
        get_name(): string;
        /**
         * Returns the path string from `info`.
         * @returns the path string from @info
         */
        get_path(): string;
        /**
         * Increase the reference count of `info`.
         * @returns the @info argument
         */
        ref(): StoreInfo;
        /**
         * Set a specific string on the `info`.
         * @param type specific string being set
         * @param value string value to set
         */
        set_value(type: number, value: string): void;
        /**
         * Unref and potentially free `info,` and all associated memory.
         */
        unref(): void;
    }

    abstract class StorePrivate {
        static $gtype: GObject.GType<StorePrivate>;

        // Constructors of Camel.StorePrivate

        _init(...args: any[]): void;
    }

    type StoreSettingsClass = typeof StoreSettings;
    abstract class StoreSettingsPrivate {
        static $gtype: GObject.GType<StoreSettingsPrivate>;

        // Constructors of Camel.StoreSettingsPrivate

        _init(...args: any[]): void;
    }

    type StoreSummaryClass = typeof StoreSummary;
    abstract class StoreSummaryPrivate {
        static $gtype: GObject.GType<StoreSummaryPrivate>;

        // Constructors of Camel.StoreSummaryPrivate

        _init(...args: any[]): void;
    }

    type StreamBufferClass = typeof StreamBuffer;
    abstract class StreamBufferPrivate {
        static $gtype: GObject.GType<StreamBufferPrivate>;

        // Constructors of Camel.StreamBufferPrivate

        _init(...args: any[]): void;
    }

    type StreamClass = typeof Stream;
    type StreamFilterClass = typeof StreamFilter;
    abstract class StreamFilterPrivate {
        static $gtype: GObject.GType<StreamFilterPrivate>;

        // Constructors of Camel.StreamFilterPrivate

        _init(...args: any[]): void;
    }

    type StreamFsClass = typeof StreamFs;
    abstract class StreamFsPrivate {
        static $gtype: GObject.GType<StreamFsPrivate>;

        // Constructors of Camel.StreamFsPrivate

        _init(...args: any[]): void;
    }

    type StreamMemClass = typeof StreamMem;
    abstract class StreamMemPrivate {
        static $gtype: GObject.GType<StreamMemPrivate>;

        // Constructors of Camel.StreamMemPrivate

        _init(...args: any[]): void;
    }

    type StreamNullClass = typeof StreamNull;
    abstract class StreamNullPrivate {
        static $gtype: GObject.GType<StreamNullPrivate>;

        // Constructors of Camel.StreamNullPrivate

        _init(...args: any[]): void;
    }

    abstract class StreamPrivate {
        static $gtype: GObject.GType<StreamPrivate>;

        // Constructors of Camel.StreamPrivate

        _init(...args: any[]): void;
    }

    type StreamProcessClass = typeof StreamProcess;
    abstract class StreamProcessPrivate {
        static $gtype: GObject.GType<StreamProcessPrivate>;

        // Constructors of Camel.StreamProcessPrivate

        _init(...args: any[]): void;
    }

    type SubscribableInterface = typeof Subscribable;
    class SummaryMessageID {
        static $gtype: GObject.GType<SummaryMessageID>;

        // Constructors of Camel.SummaryMessageID

        _init(...args: any[]): void;
    }

    type TextIndexClass = typeof TextIndex;
    type TextIndexCursorClass = typeof TextIndexCursor;
    abstract class TextIndexCursorPrivate {
        static $gtype: GObject.GType<TextIndexCursorPrivate>;

        // Constructors of Camel.TextIndexCursorPrivate

        _init(...args: any[]): void;
    }

    type TextIndexKeyCursorClass = typeof TextIndexKeyCursor;
    abstract class TextIndexKeyCursorPrivate {
        static $gtype: GObject.GType<TextIndexKeyCursorPrivate>;

        // Constructors of Camel.TextIndexKeyCursorPrivate

        _init(...args: any[]): void;
    }

    type TextIndexNameClass = typeof TextIndexName;
    abstract class TextIndexNamePrivate {
        static $gtype: GObject.GType<TextIndexNamePrivate>;

        // Constructors of Camel.TextIndexNamePrivate

        _init(...args: any[]): void;
    }

    abstract class TextIndexPrivate {
        static $gtype: GObject.GType<TextIndexPrivate>;

        // Constructors of Camel.TextIndexPrivate

        _init(...args: any[]): void;
    }

    type TransportClass = typeof Transport;
    abstract class TransportPrivate {
        static $gtype: GObject.GType<TransportPrivate>;

        // Constructors of Camel.TransportPrivate

        _init(...args: any[]): void;
    }

    /**
     * A trie data structure.
     */
    abstract class Trie {
        static $gtype: GObject.GType<Trie>;

        // Constructors of Camel.Trie

        _init(...args: any[]): void;
    }

    class UIDCache {
        static $gtype: GObject.GType<UIDCache>;

        // Own fields of Camel.UIDCache

        filename: string;
        level: number;
        expired: number;
        size: number;
        fd: number;

        // Constructors of Camel.UIDCache

        _init(...args: any[]): void;

        // Own static methods of Camel.UIDCache

        /**
         * Frees the array of UIDs.
         * @param uids an array returned from camel_uid_cache_get_new_uids()
         */
        static free_uids(uids: string[]): void;

        // Own methods of Camel.UIDCache

        /**
         * Destroys `cache` and frees its data.
         */
        destroy(): void;
        /**
         * Returns an array of UIDs from `uids` that are not in `cache,` and
         * removes UIDs from `cache` that aren't in `uids`.
         * @param uids an array of UIDs
         * @returns an array of new UIDs, which must be freed with camel_uid_cache_free_uids().
         */
        get_new_uids(uids: string[]): string[];
        /**
         * Attempts to save `cache` back to disk.
         * @returns success or failure
         */
        save(): boolean;
        /**
         * Marks a uid for saving.
         * @param uid a uid to save
         */
        save_uid(uid: string): void;
    }

    class URL {
        static $gtype: GObject.GType<URL>;

        // Own fields of Camel.URL

        protocol: string;
        user: string;
        authmech: string;
        host: string;
        port: number;
        path: string;
        query: string;
        fragment: string;

        // Constructors of Camel.URL

        constructor(url_string: string);
        _init(...args: any[]): void;

        static ['new'](url_string: string): URL;

        // Own static methods of Camel.URL

        static addrspec_end(_in: string, pos: string, inend: string, match: UrlMatch): boolean;
        static addrspec_start(_in: string, pos: string, inend: string, match: UrlMatch): boolean;
        /**
         * &percnt;-decodes the passed-in URL *in place*. The decoded version is
         * never longer than the encoded version, so there does not need to
         * be any additional space at the end of the string.
         * @param part a URL part
         */
        static decode(part: string): void;
        static decode_path(path: string): string;
        /**
         * This &percnt;-encodes the given URL part and returns the escaped version
         * in allocated memory, which the caller must free when it is done.
         * @param part a URL part
         * @param escape_extra additional characters beyond " \"%#<>{}|\^[]`" to escape (or %NULL)
         */
        static encode(part: string, escape_extra?: string | null): string;
        static file_end(_in: string, pos: string, inend: string, match: UrlMatch): boolean;
        static file_start(_in: string, pos: string, inend: string, match: UrlMatch): boolean;
        static web_end(_in: string, pos: string, inend: string, match: UrlMatch): boolean;
        static web_start(_in: string, pos: string, inend: string, match: UrlMatch): boolean;

        // Own methods of Camel.URL

        /**
         * Copy a #CamelURL.
         * @returns a duplicate copy of @in
         */
        copy(): URL;
        equal(u2: URL): boolean;
        /**
         * Frees `url`.
         */
        free(): void;
        /**
         * Get the value of the specified param on the URL.
         * @param name name of the param
         * @returns the value of a param if found or %NULL otherwise
         */
        get_param(name: string): string | null;
        hash(): number;
        /**
         * Parses `url_string` relative to `base`.
         * @param url_string the URL
         * @returns a parsed #CamelURL
         */
        new_with_base(url_string: string): URL;
        /**
         * Set the authmech of a #CamelURL.
         * @param authmech authentication mechanism
         */
        set_authmech(authmech: string): void;
        /**
         * Set the fragment of a #CamelURL.
         * @param fragment url fragment
         */
        set_fragment(fragment: string): void;
        /**
         * Set the hostname of a #CamelURL.
         * @param host hostname
         */
        set_host(host: string): void;
        /**
         * Set a param on the #CamelURL.
         * @param name name of the param to set
         * @param value value of the param to set
         */
        set_param(name: string, value: string): void;
        /**
         * Set the path component of a #CamelURL.
         * @param path path
         */
        set_path(path: string): void;
        /**
         * Set the port on a #CamelURL.
         * @param port port
         */
        set_port(port: number): void;
        /**
         * Set the protocol of a #CamelURL.
         * @param protocol protocol schema
         */
        set_protocol(protocol: string): void;
        /**
         * Set the query of a #CamelURL.
         * @param query url query
         */
        set_query(query: string): void;
        /**
         * Set the user of a #CamelURL.
         * @param user username
         */
        set_user(user: string): void;
        /**
         * Flatten a #CamelURL into a string.
         * @param flags additional translation options
         * @returns a string representing @url, which the caller must free
         */
        to_string(flags: URLFlags): string;
    }

    class UrlMatch {
        static $gtype: GObject.GType<UrlMatch>;

        // Own fields of Camel.UrlMatch

        pattern: string;
        prefix: string;
        um_so: number;
        um_eo: number;

        // Constructors of Camel.UrlMatch

        constructor(
            properties?: Partial<{
                pattern: string;
                prefix: string;
                um_so: number;
                um_eo: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class UrlPattern {
        static $gtype: GObject.GType<UrlPattern>;

        // Own fields of Camel.UrlPattern

        pattern: string;
        prefix: string;
        start: UrlScanFunc;
        end: UrlScanFunc;

        // Constructors of Camel.UrlPattern

        _init(...args: any[]): void;
    }

    abstract class UrlScanner {
        static $gtype: GObject.GType<UrlScanner>;

        // Constructors of Camel.UrlScanner

        _init(...args: any[]): void;
    }

    type VTrashFolderClass = typeof VTrashFolder;
    abstract class VTrashFolderPrivate {
        static $gtype: GObject.GType<VTrashFolderPrivate>;

        // Constructors of Camel.VTrashFolderPrivate

        _init(...args: any[]): void;
    }

    type VeeDataCacheClass = typeof VeeDataCache;
    abstract class VeeDataCachePrivate {
        static $gtype: GObject.GType<VeeDataCachePrivate>;

        // Constructors of Camel.VeeDataCachePrivate

        _init(...args: any[]): void;
    }

    type VeeFolderClass = typeof VeeFolder;
    abstract class VeeFolderPrivate {
        static $gtype: GObject.GType<VeeFolderPrivate>;

        // Constructors of Camel.VeeFolderPrivate

        _init(...args: any[]): void;
    }

    type VeeMessageInfoClass = typeof VeeMessageInfo;
    type VeeMessageInfoDataClass = typeof VeeMessageInfoData;
    abstract class VeeMessageInfoDataPrivate {
        static $gtype: GObject.GType<VeeMessageInfoDataPrivate>;

        // Constructors of Camel.VeeMessageInfoDataPrivate

        _init(...args: any[]): void;
    }

    abstract class VeeMessageInfoPrivate {
        static $gtype: GObject.GType<VeeMessageInfoPrivate>;

        // Constructors of Camel.VeeMessageInfoPrivate

        _init(...args: any[]): void;
    }

    type VeeStoreClass = typeof VeeStore;
    abstract class VeeStorePrivate {
        static $gtype: GObject.GType<VeeStorePrivate>;

        // Constructors of Camel.VeeStorePrivate

        _init(...args: any[]): void;
    }

    type VeeSubfolderDataClass = typeof VeeSubfolderData;
    abstract class VeeSubfolderDataPrivate {
        static $gtype: GObject.GType<VeeSubfolderDataPrivate>;

        // Constructors of Camel.VeeSubfolderDataPrivate

        _init(...args: any[]): void;
    }

    type VeeSummaryClass = typeof VeeSummary;
    abstract class VeeSummaryPrivate {
        static $gtype: GObject.GType<VeeSummaryPrivate>;

        // Constructors of Camel.VeeSummaryPrivate

        _init(...args: any[]): void;
    }

    class WeakRefGroup {
        static $gtype: GObject.GType<WeakRefGroup>;

        // Constructors of Camel.WeakRefGroup

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): WeakRefGroup;

        // Own methods of Camel.WeakRefGroup

        get(): any | null;
        /**
         * Increases a reference count of the `group`.
         * @returns the @group
         */
        ref(): WeakRefGroup;
        /**
         * Sets the `object` as the object help by this `group`. If
         * the `object` is %NULL, then unsets any previously set.
         * @param object a #GObject descendant, or %NULL
         */
        set(object?: any | null): void;
        /**
         * Decreases a reference count of the `group`. The `group` is
         * freed when the reference count reaches zero.
         */
        unref(): void;
    }

    class _KeyKey {
        static $gtype: GObject.GType<_KeyKey>;

        // Own fields of Camel._KeyKey

        data: _block_t;
        offset: number;
        flags: number;

        // Constructors of Camel._KeyKey

        constructor(
            properties?: Partial<{
                data: _block_t;
                offset: number;
                flags: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class _LockHelperMsg {
        static $gtype: GObject.GType<_LockHelperMsg>;

        // Own fields of Camel._LockHelperMsg

        magic: number;
        seq: number;
        id: number;
        data: number;

        // Constructors of Camel._LockHelperMsg

        constructor(
            properties?: Partial<{
                magic: number;
                seq: number;
                id: number;
                data: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    abstract class __search_word {
        static $gtype: GObject.GType<__search_word>;

        // Own fields of Camel.__search_word

        type: _search_word_t;
        word: string;

        // Constructors of Camel.__search_word

        _init(...args: any[]): void;
    }

    abstract class __search_words {
        static $gtype: GObject.GType<__search_words>;

        // Own fields of Camel.__search_words

        len: number;
        type: _search_word_t;
        words: any;

        // Constructors of Camel.__search_words

        _init(...args: any[]): void;
    }

    abstract class _encrypt {
        static $gtype: GObject.GType<_encrypt>;

        // Own fields of Camel._encrypt

        status: CipherValidityEncrypt;
        description: string;
        encrypters: GLib.Queue;

        // Constructors of Camel._encrypt

        _init(...args: any[]): void;
    }

    abstract class _sign {
        static $gtype: GObject.GType<_sign>;

        // Own fields of Camel._sign

        status: CipherValiditySign;
        description: string;
        signers: GLib.Queue;

        // Constructors of Camel._sign

        _init(...args: any[]): void;
    }

    module JunkFilter {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface JunkFilterNamespace {
        $gtype: GObject.GType<JunkFilter>;
        prototype: JunkFilter;
    }
    interface JunkFilter extends GObject.Object {
        // Own methods of Camel.JunkFilter

        /**
         * Classifies `message` as junk, not junk or inconclusive.
         *
         * If an error occurs, the function sets `error` and returns
         * %CAMEL_JUNK_STATUS_ERROR.
         * @param message a #CamelMimeMessage
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns the junk status determined by @junk_filter
         */
        classify(message: MimeMessage, cancellable?: Gio.Cancellable | null): JunkStatus;
        /**
         * Instructs `junk_filter` to classify `message` as junk.  If using an
         * adaptive junk filtering algorithm, explicitly marking `message` as
         * junk will influence the classification of future messages.
         *
         * If an error occurs, the function sets `error` and returns %FALSE.
         * @param message a #CamelMimeMessage
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE if @message was successfully classified
         */
        learn_junk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Instructs `junk_filter` to classify `message` as not junk.  If using an
         * adaptive junk filtering algorithm, explicitly marking `message` as not
         * junk will influence the classification of future messages.
         *
         * If an error occurs, the function sets `error` and returns %FALSE.
         * @param message a #CamelMimeMessage
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE if @message was successfully classified
         */
        learn_not_junk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Instructs `junk_filter` to flush any in-memory caches to disk, if
         * applicable.  When filtering many messages, delaying this step until
         * all messages have been classified can improve performance.
         *
         * If an error occurs, the function sets `error` and returns %FALSE.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE if @junk_filter was successfully synchronized
         */
        synchronize(cancellable?: Gio.Cancellable | null): boolean;

        // Own virtual methods of Camel.JunkFilter

        /**
         * Classifies `message` as junk, not junk or inconclusive.
         *
         * If an error occurs, the function sets `error` and returns
         * %CAMEL_JUNK_STATUS_ERROR.
         * @param message a #CamelMimeMessage
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_classify(message: MimeMessage, cancellable?: Gio.Cancellable | null): JunkStatus;
        /**
         * Instructs `junk_filter` to classify `message` as junk.  If using an
         * adaptive junk filtering algorithm, explicitly marking `message` as
         * junk will influence the classification of future messages.
         *
         * If an error occurs, the function sets `error` and returns %FALSE.
         * @param message a #CamelMimeMessage
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_learn_junk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Instructs `junk_filter` to classify `message` as not junk.  If using an
         * adaptive junk filtering algorithm, explicitly marking `message` as not
         * junk will influence the classification of future messages.
         *
         * If an error occurs, the function sets `error` and returns %FALSE.
         * @param message a #CamelMimeMessage
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_learn_not_junk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Instructs `junk_filter` to flush any in-memory caches to disk, if
         * applicable.  When filtering many messages, delaying this step until
         * all messages have been classified can improve performance.
         *
         * If an error occurs, the function sets `error` and returns %FALSE.
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_synchronize(cancellable?: Gio.Cancellable | null): boolean;
    }

    export const JunkFilter: JunkFilterNamespace;

    module NetworkService {
        // Constructor properties interface

        interface ConstructorProps extends Service.ConstructorProps {
            connectable: Gio.SocketConnectable;
            host_reachable: boolean;
            hostReachable: boolean;
        }
    }

    export interface NetworkServiceNamespace {
        $gtype: GObject.GType<NetworkService>;
        prototype: NetworkService;
    }
    interface NetworkService extends Service {
        // Own properties of Camel.NetworkService

        get connectable(): Gio.SocketConnectable;
        set connectable(val: Gio.SocketConnectable);
        get host_reachable(): boolean;
        get hostReachable(): boolean;

        // Own methods of Camel.NetworkService

        /**
         * Asynchronously attempts to determine whether or not the host described by
         * `service'`s #CamelNetworkService:connectable property can be reached, without
         * actually trying to connect to it.
         *
         * For more details, see camel_network_service_can_reach_sync().
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_network_service_can_reach_finish() to get the result of the
         * operation.
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        can_reach(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes the operation started with camel_network_service_can_reach().
         * @param result a #GAsyncResult
         * @returns whether the host for @service can be reached
         */
        can_reach_finish(result: Gio.AsyncResult): boolean;
        /**
         * Attempts to determine whether or not the host described by `service'`s
         * #CamelNetworkService:connectable property can be reached, without actually
         * trying to connect to it.
         *
         * If `service` believes an attempt to connect will succeed, the function
         * returns %TRUE.  Otherwise the function returns %FALSE and sets `error`
         * to an appropriate error (such as %G_IO_ERROR_HOST_UNREACHABLE).
         *
         * The function will also update the `service'`s
         * #CamelNetworkService:host-reachable property based on the result.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns whether the host for @service can be reached
         */
        can_reach_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Attempts to establish a network connection to the server described by
         * `service,` using the preferred #CamelNetworkSettings:security-method to
         * secure the connection.  If a connection cannot be established, or the
         * connection attempt is cancelled, the function sets `error` and returns
         * %NULL.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns a #GIOStream, or %NULL on error
         */
        connect_sync(cancellable?: Gio.Cancellable | null): Gio.IOStream;
        // Conflicted with Camel.Service.connect_sync
        connect_sync(...args: never[]): any;
        /**
         * Returns the default network port number for `service` and the security
         * method `method,` as defined in /etc/services.  For example, the default
         * port for unencrypted IMAP or encrypted IMAP using STARTTLS is 143, but
         * the default port for IMAP over SSL is 993.
         * @param method a #CamelNetworkSecurityMethod
         * @returns the default port number for @service and @method
         */
        get_default_port(method: NetworkSecurityMethod): number;
        /**
         * Returns %TRUE if `service` believes that the host pointed to by
         * #CamelNetworkService:connectable can be reached.  This property
         * is updated automatically as network conditions change.
         * @returns whether the host is reachable
         */
        get_host_reachable(): boolean;
        /**
         * Returns the standard network service name for `service` and the security
         * method `method,` as defined in /etc/services.  For example, the service
         * name for unencrypted IMAP or encrypted IMAP using STARTTLS is "imap",
         * but the service name for IMAP over SSL is "imaps".
         * @param method a #CamelNetworkSecurityMethod
         * @returns the network service name for @service and @method, or %NULL
         */
        get_service_name(method: NetworkSecurityMethod): string | null;
        /**
         * Returns the socket endpoint for the network service to which `service`
         * is a client.
         *
         * The returned #GSocketConnectable is referenced for thread-safety and
         * must be unreferenced with g_object_unref() when finished with it.
         * @returns a #GSocketConnectable
         */
        ref_connectable(): Gio.SocketConnectable;
        /**
         * Sets the socket endpoint for the network service to which `service` is
         * a client.  If `connectable` is %NULL, a #GSocketConnectable is derived
         * from the `service'`s #CamelNetworkSettings.
         * @param connectable a #GSocketConnectable, or %NULL
         */
        set_connectable(connectable?: Gio.SocketConnectable | null): void;
        /**
         * Creates a #GTlsClientConnection wrapping `base_stream,` which is
         * assumed to communicate with the server identified by `service'`s
         * #CamelNetworkService:connectable.
         *
         * This should typically be called after issuing a STARTTLS command
         * to a server to initiate a Transport Layer Security handshake.
         * @param base_stream a #GIOStream
         * @returns the new #GTlsClientConnection, or %NULL on error
         */
        starttls(base_stream: Gio.IOStream): Gio.IOStream | null;

        // Own virtual methods of Camel.NetworkService

        /**
         * Attempts to establish a network connection to the server described by
         * `service,` using the preferred #CamelNetworkSettings:security-method to
         * secure the connection.  If a connection cannot be established, or the
         * connection attempt is cancelled, the function sets `error` and returns
         * %NULL.
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_connect_sync(cancellable?: Gio.Cancellable | null): Gio.IOStream;
        // Conflicted with Camel.Service.vfunc_connect_sync
        vfunc_connect_sync(...args: never[]): any;
        /**
         * Returns the default network port number for `service` and the security
         * method `method,` as defined in /etc/services.  For example, the default
         * port for unencrypted IMAP or encrypted IMAP using STARTTLS is 143, but
         * the default port for IMAP over SSL is 993.
         * @param method a #CamelNetworkSecurityMethod
         */
        vfunc_get_default_port(method: NetworkSecurityMethod): number;
        /**
         * Returns the standard network service name for `service` and the security
         * method `method,` as defined in /etc/services.  For example, the service
         * name for unencrypted IMAP or encrypted IMAP using STARTTLS is "imap",
         * but the service name for IMAP over SSL is "imaps".
         * @param method a #CamelNetworkSecurityMethod
         */
        vfunc_get_service_name(method: NetworkSecurityMethod): string | null;
    }

    export const NetworkService: NetworkServiceNamespace;

    module NetworkSettings {
        // Constructor properties interface

        interface ConstructorProps extends Settings.ConstructorProps {
            auth_mechanism: string;
            authMechanism: string;
            host: string;
            port: number;
            security_method: NetworkSecurityMethod;
            securityMethod: NetworkSecurityMethod;
            user: string;
        }
    }

    export interface NetworkSettingsNamespace {
        $gtype: GObject.GType<NetworkSettings>;
        prototype: NetworkSettings;
    }
    interface NetworkSettings extends Settings {
        // Own properties of Camel.NetworkSettings

        get auth_mechanism(): string;
        set auth_mechanism(val: string);
        get authMechanism(): string;
        set authMechanism(val: string);
        get host(): string;
        set host(val: string);
        get port(): number;
        set port(val: number);
        get security_method(): NetworkSecurityMethod;
        set security_method(val: NetworkSecurityMethod);
        get securityMethod(): NetworkSecurityMethod;
        set securityMethod(val: NetworkSecurityMethod);
        get user(): string;
        set user(val: string);

        // Own methods of Camel.NetworkSettings

        /**
         * Thread-safe variation of camel_network_settings_get_auth_mechanism().
         * Use this function when accessing `settings` from multiple threads.
         *
         * The returned string should be freed with g_free() when no longer needed.
         * @returns a newly-allocated copy of #CamelNetworkSettings:auth-mechanism
         */
        dup_auth_mechanism(): string | null;
        /**
         * Thread-safe variation of camel_network_settings_get_host().
         * Use this function when accessing `settings` from multiple threads.
         *
         * The returned string should be freed with g_free() when no longer needed.
         * @returns a newly-allocated copy of #CamelNetworkSettings:host
         */
        dup_host(): string;
        /**
         * Just like camel_network_settings_dup_host(), only makes sure that
         * the returned host name will be converted into its ASCII form in case
         * of IDNA value.
         * @returns a newly-allocated copy of #CamelNetworkSettings:host with    only ASCII letters.
         */
        dup_host_ensure_ascii(): string;
        /**
         * Thread-safe variation of camel_network_settings_get_user().
         * Use this function when accessing `settings` from multiple threads.
         *
         * The returned string should be freed with g_free() when no longer needed.
         * @returns a newly-allocated copy of #CamelNetworkSettings:user
         */
        dup_user(): string;
        /**
         * Returns the mechanism name used to authenticate to a network service.
         * Often this refers to a SASL mechanism such as "LOGIN" or "GSSAPI".
         * @returns the authentication mechanism name
         */
        get_auth_mechanism(): string | null;
        /**
         * Returns the host name used to authenticate to a network service.
         * @returns the host name of a network service
         */
        get_host(): string;
        /**
         * Returns the port number used to authenticate to a network service.
         * @returns the port number of a network service
         */
        get_port(): number;
        /**
         * Returns the method used to establish a secure (or unsecure) network
         * connection.
         * @returns the security method
         */
        get_security_method(): NetworkSecurityMethod;
        /**
         * Returns the user name used to authenticate to a network service.
         * @returns the user name of a network service
         */
        get_user(): string;
        /**
         * Sets the mechanism name used to authenticate to a network service.
         * Often this refers to a SASL mechanism such as "LOGIN" or "GSSAPI".
         * The #CamelNetworkSettings:auth-mechanism property is automatically
         * stripped of leading and trailing whitespace.
         * @param auth_mechanism an authentication mechanism name, or %NULL
         */
        set_auth_mechanism(auth_mechanism?: string | null): void;
        /**
         * Sets the host name used to authenticate to a network service.  The
         * #CamelNetworkSettings:host property is automatically stripped of
         * leading and trailing whitespace.
         * @param host a host name, or %NULL
         */
        set_host(host?: string | null): void;
        /**
         * Sets the port number used to authenticate to a network service.
         * @param port a port number
         */
        set_port(port: number): void;
        /**
         * Sets the method used to establish a secure (or unsecure) network
         * connection.  Note that changing this setting has no effect on an
         * already-established network connection.
         * @param method the security method
         */
        set_security_method(method: NetworkSecurityMethod): void;
        /**
         * Sets the user name used to authenticate to a network service.  The
         * #CamelNetworkSettings:user property is automatically stripped of
         * leading and trailing whitespace.
         * @param user a user name, or %NULL
         */
        set_user(user?: string | null): void;
    }

    export const NetworkSettings: NetworkSettingsNamespace;

    module Subscribable {
        // Constructor properties interface

        interface ConstructorProps extends Store.ConstructorProps {}
    }

    export interface SubscribableNamespace {
        $gtype: GObject.GType<Subscribable>;
        prototype: Subscribable;
    }
    interface Subscribable extends Store {
        // Own methods of Camel.Subscribable

        /**
         * Find out if a folder has been subscribed to.
         * @param folder_name full path of the folder
         * @returns %TRUE if the folder has been subscribed to or %FALSE otherwise
         */
        folder_is_subscribed(folder_name: string): boolean;
        /**
         * Emits the #CamelSubscribable::folder-subscribed signal from an idle source
         * on the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
         *
         * This function is only intended for Camel providers.
         * @param folder_info information about the subscribed folder
         */
        folder_subscribed(folder_info: FolderInfo): void;
        /**
         * Emits the #CamelSubscribable::folder-unsubscribed signal from an idle source
         * on the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
         *
         * This function is only intended for Camel providers.
         * @param folder_info information about the unsubscribed folder
         */
        folder_unsubscribed(folder_info: FolderInfo): void;
        /**
         * Asynchronously subscribes to the folder described by `folder_name`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_subscribable_subscribe_folder_finish() to get the result of
         * the operation.
         * @param folder_name full path of the folder
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        subscribe_folder(
            folder_name: string,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_subscribable_subscribe_folder().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        subscribe_folder_finish(result: Gio.AsyncResult): boolean;
        /**
         * Subscribes to the folder described by `folder_name`.
         * @param folder_name full path of the folder
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        subscribe_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously unsubscribes from the folder described by `folder_name`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call camel_subscribable_unsubscribe_folder_finish() to get the result of
         * the operation.
         * @param folder_name full path of the folder
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        unsubscribe_folder(
            folder_name: string,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with camel_subscribable_unsubscribe_folder().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        unsubscribe_folder_finish(result: Gio.AsyncResult): boolean;
        /**
         * Unsubscribes from the folder described by `folder_name`.
         * @param folder_name full path of the folder
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        unsubscribe_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean;

        // Own virtual methods of Camel.Subscribable

        /**
         * Find out if a folder has been subscribed to.
         * @param folder_name full path of the folder
         */
        vfunc_folder_is_subscribed(folder_name: string): boolean;
        /**
         * Emits the #CamelSubscribable::folder-subscribed signal from an idle source
         * on the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
         *
         * This function is only intended for Camel providers.
         * @param folder_info information about the subscribed folder
         */
        vfunc_folder_subscribed(folder_info: FolderInfo): void;
        /**
         * Emits the #CamelSubscribable::folder-unsubscribed signal from an idle source
         * on the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
         *
         * This function is only intended for Camel providers.
         * @param folder_info information about the unsubscribed folder
         */
        vfunc_folder_unsubscribed(folder_info: FolderInfo): void;
        /**
         * Subscribes to the folder described by `folder_name`.
         * @param folder_name full path of the folder
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_subscribe_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Unsubscribes from the folder described by `folder_name`.
         * @param folder_name full path of the folder
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_unsubscribe_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean;
    }

    export const Subscribable: SubscribableNamespace;

    type _block_t = number;
    type _hash_t = number;
    type _key_t = number;
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

export default Camel;
// END
