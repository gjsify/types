
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-camel-1.2-import.d.ts';
    
/**
 * Camel-1.2
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

/**
 * Authentication result codes used by #CamelService.
 */
export enum AuthenticationResult {
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
export enum CertTrust {
    UNKNOWN,
    NEVER,
    MARGINAL,
    FULLY,
    ULTIMATE,
    TEMPORARY,
}
export enum CipherHash {
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
export enum CipherValidityEncrypt {
    NONE,
    WEAK,
    ENCRYPTED,
    STRONG,
}
export enum CipherValidityMode {
    SIGN,
    ENCRYPT,
}
export enum CipherValiditySign {
    NONE,
    GOOD,
    BAD,
    UNKNOWN,
    NEED_PUBLIC_KEY,
}
/**
 * Declares the compare type to use.
 */
export enum CompareType {
    /**
     * compare case insensitively
     */
    INSENSITIVE,
    /**
     * compare case sensitively
     */
    SENSITIVE,
}
export enum DBError {
    /**
     * database is corrupt
     */
    DB_ERROR_CORRUPT,
}
/**
 * An enum of all the known columns, which can be used for a quick column lookups.
 */
export enum DBKnownColumnNames {
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
export enum Error {
    /**
     * a generic (fallback) error code
     */
    ERROR_GENERIC,
}
/**
 * Describes what headers to fetch when downloading message summaries.
 */
export enum FetchHeadersType {
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
export enum FetchType {
    /**
     * fetch old messages
     */
    OLD_MESSAGES,
    /**
     * fetch new messages
     */
    NEW_MESSAGES,
}
export enum FolderError {
    /**
     * a generic error about invalid operation with the folder
     */
    INVALID,
    /**
     * the folder is in an invalid state
     */
    INVALID_STATE,
    /**
     * the folder is not empty
     */
    NON_EMPTY,
    /**
     * requested UID is not a UID
     */
    NON_UID,
    /**
     * insufficient permissions for the requested operation
     */
    INSUFFICIENT_PERMISSION,
    /**
     * the folder path is invalid
     */
    INVALID_PATH,
    /**
     * requested UID is invalid/cannot be found
     */
    INVALID_UID,
    /**
     * the folder's summary is invalid/broken
     */
    SUMMARY_INVALID,
}
export enum HTMLParserState {
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
export enum HeaderAddressType {
    NONE,
    NAME,
    GROUP,
}
/**
 * These are result codes used when passing messages through a junk filter.
 */
export enum JunkStatus {
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
export enum LockType {
    READ,
    WRITE,
}
export enum MemPoolFlags {
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
export enum MimeFilterBasicType {
    INVALID,
    BASE64_ENC,
    BASE64_DEC,
    QP_ENC,
    QP_DEC,
    UU_ENC,
    UU_DEC,
}
export enum MimeFilterCRLFDirection {
    ENCODE,
    DECODE,
}
export enum MimeFilterCRLFMode {
    DOTS,
    ONLY,
}
export enum MimeFilterGZipMode {
    ZIP,
    UNZIP,
}
export enum MimeFilterYencDirection {
    ENCODE,
    DECODE,
}
export enum MimeParserState {
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
export enum NetworkSecurityMethod {
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
export enum ProviderConfType {
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
export enum ProviderType {
    STORE,
    TRANSPORT,
}
/**
 * Defines type of a #CamelSExpResult.
 */
export enum SExpResultType {
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
export enum SExpTermType {
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
export enum SMIMESign {
    CLEARSIGN,
    ENVELOPED,
}
export enum SaslAnonTraceType {
    EMAIL,
    OPAQUE,
    EMPTY,
}
/**
 * Connection status returned by camel_service_get_connection_status().
 */
export enum ServiceConnectionStatus {
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
export enum ServiceError {
    /**
     * a generic service error code
     */
    INVALID,
    /**
     * the URL for the service is invalid
     */
    URL_INVALID,
    /**
     * the service is unavailable
     */
    UNAVAILABLE,
    /**
     * failed to authenitcate
     */
    CANT_AUTHENTICATE,
    /**
     * the service is not connected
     */
    NOT_CONNECTED,
}
export enum SessionAlertType {
    INFO,
    WARNING,
    ERROR,
}
/**
 * Determines the direction of a sort.
 */
export enum SortType {
    /**
     * Sorting is in ascending order.
     */
    ASCENDING,
    /**
     * Sorting is in descending order.
     */
    DESCENDING,
}
export enum StoreError {
    /**
     * an invalid store operation had been requested
     */
    INVALID,
    /**
     * requested operation cannot be performed with the given folder
     */
    NO_FOLDER,
}
export enum StreamBufferMode {
    BUFFER,
    NONE,
    READ,
    WRITE,
    MODE,
}
/**
 * Describes a three-state value, which can be either Off, On or Inconsistent.
 */
export enum ThreeState {
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
export enum TimeUnit {
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
export enum TransferEncoding {
    ENCODING_DEFAULT,
    ENCODING_7BIT,
    ENCODING_8BIT,
    ENCODING_BASE64,
    ENCODING_QUOTEDPRINTABLE,
    ENCODING_BINARY,
    ENCODING_UUENCODE,
    NUM_ENCODINGS,
}
export enum VTrashFolderType {
    TRASH,
    JUNK,
    LAST,
}
export enum _search_match_t {
    EXACT,
    CONTAINS,
    WORD,
    STARTS,
    ENDS,
    SOUNDEX,
}
export enum _search_t {
    ASIS,
    ENCODED,
    ADDRESS,
    ADDRESS_ENCODED,
    MLIST,
}
export enum _search_word_t {
    SIMPLE,
    COMPLEX,
    TODO_8BIT,
}
export enum BestencEncoding {
    TODO_7BIT,
    TODO_8BIT,
    BINARY,
    TEXT,
}
export enum BestencRequired {
    GET_ENCODING,
    GET_CHARSET,
    LF_IS_CRLF,
    NO_FROM,
}
export enum BlockFileFlags {
    BLOCK_FILE_SYNC,
}
export enum BlockFlags {
    DIRTY,
    DETACHED,
}
export enum FolderFlags {
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
 * @bitfield 
 */
export enum FolderInfoFlags {
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
export enum FolderSummaryFlags {
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
export enum MessageFlags {
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
export enum MimeFilterCanonFlags {
    CRLF,
    FROM,
    STRIP,
}
export enum MimeFilterEnrichedFlags {
    NONE,
    IS_RICHTEXT,
}
/**
 * Flags for converting text/plain content into text/html.
 * @bitfield 
 */
export enum MimeFilterToHTMLFlags {
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
 * @bitfield 
 */
export enum ParamFlags {
    /**
     * The parameter is persistent, which means its value is saved to
     *     #CamelObject:state-filename during camel_object_state_write(),
     *     and restored during camel_object_state_read().
     */
    PARAM_PERSISTENT,
}
export enum ProviderFlags {
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
export enum ProviderURLFlags {
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
 * @bitfield 
 */
export enum RecipientCertificateFlags {
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
export enum SMIMEDescribe {
    SIGNED,
    ENCRYPTED,
    CERTS,
    CRLS,
}
export enum StoreFlags {
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
 * @bitfield 
 */
export enum StoreGetFolderFlags {
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
export enum StoreGetFolderInfoFlags {
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
export enum StoreInfoFlags {
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
export enum StorePermissionFlags {
    READ,
    WRITE,
}
export enum URLFlags {
    PARAMS,
    AUTH,
}
export enum UUDecodeState {
    INIT,
    BEGIN,
    END,
}
export enum _search_flags_t {
    START,
    END,
    REGEX,
    ICASE,
    NEWLINE,
}
export const AI_CANONNAME: number
export const AI_NUMERICHOST: number
export const BLOCK_SIZE: number
export const BLOCK_SIZE_BITS: number
/**
 * Name of the photo-filename property which can be stored
 * on a #CamelCipherCertInfo.
 */
export const CIPHER_CERT_INFO_PROPERTY_PHOTO_FILENAME: string | null
/**
 * A string containing a list of email addresses of all signers
 * including their alternative emails. Use camel_address_unformat()
 * to break them back into separate addresses. This can be set
 * only on the first signer of the first validity, even the addresses
 * can belong to a different signer.
 */
export const CIPHER_CERT_INFO_PROPERTY_SIGNERS_ALT_EMAILS: string | null
export const DB_FILE: string | null
export const DB_FREE_CACHE_SIZE: number
export const DB_IN_MEMORY_DB: string | null
export const DB_IN_MEMORY_TABLE: string | null
export const DB_IN_MEMORY_TABLE_LIMIT: number
export const DB_SLEEP_INTERVAL: number
export const DEBUG_IMAP: string | null
export const DEBUG_IMAP_FOLDER: string | null
export const DOT_LOCK_REFRESH: number
export const EAI_ADDRFAMILY: number
export const EAI_AGAIN: number
export const EAI_BADFLAGS: number
export const EAI_FAIL: number
export const EAI_FAMILY: number
export const EAI_MEMORY: number
export const EAI_NODATA: number
export const EAI_NONAME: number
export const EAI_OVERFLOW: number
export const EAI_SERVICE: number
export const EAI_SOCKTYPE: number
export const EAI_SYSTEM: number
/**
 * This environment variable configures where the camel
 * provider modules are loaded from.
 */
export const EDS_CAMEL_PROVIDER_DIR: string | null
/**
 * The folder type bitshift value.
 */
export const FOLDER_TYPE_BIT: number
/**
 * The folder type mask value.
 */
export const FOLDER_TYPE_MASK: number
export const FOLD_MAX_SIZE: number
export const FOLD_SIZE: number
export const INDEX_DELETED: number
export const KEY_TABLE_MAX_KEY: number
export const LOCK_DELAY: number
export const LOCK_DOT_DELAY: number
export const LOCK_DOT_RETRY: number
export const LOCK_DOT_STALE: number
export const LOCK_RETRY: number
export const MESSAGE_DATE_CURRENT: number
export const MESSAGE_SYSTEM_MASK: number
export const MIME_YDECODE_STATE_BEGIN: number
export const MIME_YDECODE_STATE_DECODE: number
export const MIME_YDECODE_STATE_END: number
export const MIME_YDECODE_STATE_EOLN: number
export const MIME_YDECODE_STATE_ESCAPE: number
export const MIME_YDECODE_STATE_INIT: number
export const MIME_YDECODE_STATE_PART: number
export const MIME_YENCODE_CRC_INIT: number
export const MIME_YENCODE_STATE_INIT: number
export const NI_DGRAM: number
export const NI_NAMEREQD: number
export const NI_NOFQDN: number
export const NI_NUMERICHOST: number
export const NI_NUMERICSERV: number
export const O_BINARY: number
export const RECIPIENT_TYPE_BCC: string | null
export const RECIPIENT_TYPE_CC: string | null
export const RECIPIENT_TYPE_RESENT_BCC: string | null
export const RECIPIENT_TYPE_RESENT_CC: string | null
export const RECIPIENT_TYPE_RESENT_TO: string | null
export const RECIPIENT_TYPE_TO: string | null
/**
 * Can be used with camel_session_addressbook_contains_sync() as the book UID,
 * meaning to check in all configured address books.
 */
export const SESSION_BOOK_UID_ANY: string | null
/**
 * Can be used with camel_session_addressbook_contains_sync() as the book UID,
 * meaning to check in all address books enabled for auto-completion.
 */
export const SESSION_BOOK_UID_COMPLETION: string | null
/**
 * The folder store info type bitshift value.
 */
export const STORE_INFO_FOLDER_TYPE_BIT: number
/**
 * The folder store info type mask value.
 */
export const STORE_INFO_FOLDER_TYPE_MASK: number
export const STORE_INFO_FOLDER_UNKNOWN: number
export const STORE_SETUP_ARCHIVE_FOLDER: string | null
export const STORE_SETUP_DRAFTS_FOLDER: string | null
export const STORE_SETUP_SENT_FOLDER: string | null
export const STORE_SETUP_TEMPLATES_FOLDER: string | null
export const UNMATCHED_NAME: string | null
export const URL_HIDE_ALL: number
export const URL_PART_AUTH: number
export const URL_PART_HIDDEN: number
export const URL_PART_HOST: number
export const URL_PART_NEED: number
export const URL_PART_PASSWORD: number
export const URL_PART_PATH: number
export const URL_PART_PATH_DIR: number
export const URL_PART_PORT: number
export const URL_PART_USER: number
export const UTILS_MAX_USER_HEADERS: number
export const UUDECODE_STATE_MASK: number
export const VJUNK_NAME: string | null
export const VTRASH_NAME: string | null
/**
 * Thread safe variant of g_object_bind_property(). See its documentation
 * for more information on arguments and return value.
 * @param source the source #GObject
 * @param sourceProperty the property on `source` to bind
 * @param target the target #GObject
 * @param targetProperty the property on `target` to bind
 * @param flags flags to pass to #GBinding
 */
export function bindingBindProperty(source: GObject.Object, sourceProperty: string | null, target: GObject.Object, targetProperty: string | null, flags: GObject.BindingFlags): GObject.Binding
/**
 * Thread safe variant of g_object_bind_property_with_closures(). See its
 * documentation for more information on arguments and return value.
 * @param source the source #GObject
 * @param sourceProperty the property on `source` to bind
 * @param target the target #GObject
 * @param targetProperty the property on `target` to bind
 * @param flags flags to pass to #GBinding
 * @param transformTo a #GClosure wrapping the transformation function   from the `source` to the `target,` or %NULL to use the default
 * @param transformFrom a #GClosure wrapping the transformation function   from the `target` to the `source,` or %NULL to use the default
 * @returns the #GBinding instance representing the   binding between the two #GObject instances. The binding is released   whenever the #GBinding reference count reaches zero.
 */
export function bindingBindPropertyFull(source: GObject.Object, sourceProperty: string | null, target: GObject.Object, targetProperty: string | null, flags: GObject.BindingFlags, transformTo: GObject.TClosure, transformFrom: GObject.TClosure): GObject.Binding
/**
 * Finds the minimum charset for this string NULL means US-ASCII.
 * @param in_ input text
 * @returns the minimum charset or NULL for US_ASCII.
 */
export function charsetBest(in_: number[]): string | null
export function charsetIsoToWindows(isocharset: string | null): string | null
export function cipherCanLoadPhotos(): boolean
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
export function cipherCanonicalToStream(part: MimePart, flags: number, ostream: Stream, cancellable: Gio.Cancellable | null): number
/**
 * Gets a named property `name` value for the given `cert_info`.
 * @param certInfo a #CamelCipherCertInfo
 * @param name a property name
 * @returns Value of a named property of the @cert_info,    or %NULL when no such property exists. The returned value is owned by    the @cert_info and is valid until the @cert_info is freed.
 */
export function cipherCertinfoGetProperty(certInfo: CipherCertInfo, name: string | null): any | null
/**
 * Sets a named property `name` value `value` for the given `cert_info`.
 * If the `value` is %NULL, then the property is removed. With a non-%NULL
 * `value` also `value_free` and `value_clone` functions cannot be %NULL.
 * @param certInfo a #CamelCipherCertInfo
 * @param name a property name
 * @param value a property value, or %NULL
 * @param valueClone a clone function for the `value`
 */
export function cipherCertinfoSetProperty(certInfo: CipherCertInfo, name: string | null, value: any | null, valueClone: CipherCloneFunc | null): void
export function contentDispositionDecode(in_: string | null): ContentDisposition
export function contentTransferEncodingDecode(in_: string | null): string | null
export function contentTypeDecode(in_: string | null): ContentType
/**
 * Check to see if a debug mode is activated.  `mode` takes one of two forms,
 * a fully qualified 'module:target', or a wildcard 'module' name.  It
 * returns a boolean to indicate if the module or module and target is
 * currently activated for debug output.
 * @param mode string name of the mode to check for
 * @returns Whether the debug @mode is activated
 */
export function debug(mode: string | null): boolean
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
export function debugDemangleBacktrace(bt: GLib.String | null): /* bt */ GLib.String | null
/**
 * Call this when you're done with your debug output.  If and only if
 * you called camel_debug_start, and if it returns TRUE.
 */
export function debugEnd(): void
/**
 * Gets current backtrace leading to this function call and demangles it.
 * @returns Current backtrace, or %NULL, if cannot determine it. Note: Getting backtraces only works if the library was configured with --enable-backtraces. See also camel_debug_get_raw_backtrace()
 */
export function debugGetBacktrace(): GLib.String | null
/**
 * Gets current raw backtrace leading to this function call.
 * This is quicker than camel_debug_get_backtrace(), because it
 * doesn't demangle the backtrace. To demangle it (replace addresses
 * with actual function calls and eventually line numbers, if
 * available) call camel_debug_demangle_backtrace().
 * @returns Current raw backtrace, or %NULL, if cannot determine it. Note: Getting backtraces only works if the library was configured with --enable-backtraces. See also camel_debug_get_backtrace()
 */
export function debugGetRawBacktrace(): GLib.String | null
/**
 * Init camel debug.
 * 
 * CAMEL_DEBUG is set to a comma separated list of modules to debug.
 * The modules can contain module-specific specifiers after a ':', or
 * just act as a wildcard for the module or even specifier.  e.g. 'imap'
 * for imap debug, or 'imap:folder' for imap folder debug.  Additionaly,
 * ':folder' can be used for a wildcard for any folder operations.
 */
export function debugInit(): void
/**
 * Prints current backtraces stored with camel_debug_ref_unref_push_backtrace()
 * or with camel_debug_ref_unref_push_backtrace_for_object().
 * 
 * It's usually not needed to use this function, as the left backtraces, if any,
 * are printed at the end of the application.
 */
export function debugRefUnrefDumpBacktraces(): void
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
 * @param objectRefCount the current object reference count when the push is done
 */
export function debugRefUnrefPushBacktrace(backtrace: GLib.String, objectRefCount: number): void
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
 * @param object a #GObject, for which add the backtrace
 */
export function debugRefUnrefPushBacktraceForObject(object: any | null): void
/**
 * Start debug output for a given mode, used to make sure debug output
 * is output atomically and not interspersed with unrelated stuff.
 * @param mode string name of the mode to start the debug for
 * @returns %TRUE if mode is set, and in which case, you must call camel_debug_end() when finished any screen output.
 */
export function debugStart(mode: string | null): boolean
/**
 * Convert `in` from text/plain into text/enriched or text/richtext
 * based on `flags`.
 * @param in_ input textual string
 * @param flags flags specifying filter behaviour
 * @returns a newly allocated string containing the enriched or richtext version of @in.
 */
export function enrichedToHtml(in_: string | null, flags: MimeFilterEnrichedFlags): string | null
export function errorQuark(): GLib.Quark
/**
 * Retrieve a gint32.
 * @param in_ file to read from
 * @param dest pointer to a variable to store the value in
 * @returns 0 on success, -1 on error.
 */
export function fileUtilDecodeFixedInt32(in_: any | null, dest: number): number
/**
 * Decode a normal string from the input file.
 * @param in_ file to read from
 * @param str pointer to a variable to store the value in
 * @param len total-len to decode.
 * @returns 0 on success, -1 on error.
 */
export function fileUtilDecodeFixedString(in_: any | null, str: string | null, len: number): number
/**
 * Decode an gsize type.
 * @param in_ file to read from
 * @param dest pointer to a variable to put the value in
 * @returns 0 on success, -1 on failure.
 */
export function fileUtilDecodeGsize(in_: any | null, dest: number): number
/**
 * Decode an off_t type.
 * @param in_ file to read from
 * @param dest pointer to a variable to put the value in
 * @returns 0 on success, -1 on failure.
 */
export function fileUtilDecodeOffT(in_: any | null, dest: number): number
/**
 * Decode a normal string from the input file.
 * @param in_ file to read from
 * @param str pointer to a variable to store the value in
 * @returns 0 on success, -1 on error.
 */
export function fileUtilDecodeString(in_: any | null, str: string | null): number
/**
 * Decode a time_t value.
 * @param in_ file to read from
 * @param dest pointer to a variable to store the value in
 * @returns 0 on success, -1 on error.
 */
export function fileUtilDecodeTimeT(in_: any | null, dest: number): number
/**
 * Retrieve an encoded uint32 from a file.
 * @param in_ file to read from
 * @param dest pointer to a variable to store the value in
 * @returns 0 on success, -1 on error.  @*dest will contain the decoded value.
 */
export function fileUtilDecodeUint32(in_: any | null, dest: number): number
/**
 * Encode a gint32, performing no compression, but converting
 * to network order.
 * @param out file to output to
 * @param value value to output
 * @returns 0 on success, -1 on error.
 */
export function fileUtilEncodeFixedInt32(out: any | null, value: number): number
/**
 * Encode a normal string and save it in the output file.
 * Unlike `camel_file_util_encode_string,` it pads the
 * `str` with "NULL" bytes, if `len` is > strlen(str)
 * @param out file to output to
 * @param str value to output
 * @param len total-len of str to store
 * @returns 0 on success, -1 on error.
 */
export function fileUtilEncodeFixedString(out: any | null, str: string | null, len: number): number
/**
 * Encode an gsize type.
 * @param out file to output to
 * @param value value to output
 * @returns 0 on success, -1 on error.
 */
export function fileUtilEncodeGsize(out: any | null, value: number): number
/**
 * Encode an off_t type.
 * @param out file to output to
 * @param value value to output
 * @returns 0 on success, -1 on error.
 */
export function fileUtilEncodeOffT(out: any | null, value: number): number
/**
 * Encode a normal string and save it in the output file.
 * @param out file to output to
 * @param str value to output
 * @returns 0 on success, -1 on error.
 */
export function fileUtilEncodeString(out: any | null, str: string | null): number
/**
 * Encode a time_t value to the file.
 * @param out file to output to
 * @param value value to output
 * @returns 0 on success, -1 on error.
 */
export function fileUtilEncodeTimeT(out: any | null, value: number): number
/**
 * Utility function to save an uint32 to a file.
 * @param out file to output to
 * @param value value to output
 * @returns 0 on success, -1 on error.
 */
export function fileUtilEncodeUint32(out: any | null, value: number): number
/**
 * 'Flattens' `name` into a safe filename string by hex encoding any
 * chars that may cause problems on the filesystem.
 * @param name string to 'flattened' into a safe filename
 * @returns a safe filename string.
 */
export function fileUtilSafeFilename(name: string | null): string | null
/**
 * Builds a pathname where the basename is of the form ".#" + the
 * basename of `filename,` for instance used in a two-stage commit file
 * write.
 * @param filename a pathname
 * @returns The new pathname.  It must be free'd with g_free().
 */
export function fileUtilSavename(filename: string | null): string | null
export function folderErrorQuark(): GLib.Quark
/**
 * This takes an array of folders and attaches them together according
 * to the hierarchy described by their full_names and `separator`. If
 * `namespace_` is non-%NULL, then it will be ignored as a full_name
 * prefix, for purposes of comparison. If necessary,
 * camel_folder_info_build() will create additional #CamelFolderInfo with
 * %NULL urls to fill in gaps in the tree. The value of `short_names`
 * is used in constructing the names of these intermediate folders.
 * @param folders an array of #CamelFolderInfo
 * @param namespace an ignorable prefix on the folder names
 * @param separator the hieararchy separator character
 * @param shortNames %TRUE if the (short) name of a folder is the part after the last `separator` in the full name. %FALSE if it is the full name.
 * @returns the top level of the tree of linked folder info.
 */
export function folderInfoBuild(folders: FolderInfo[], namespace: string | null, separator: number, shortNames: boolean): FolderInfo
/**
 * Frees a structure returned with camel_getaddrinfo(). It does
 * nothing when the `host` is %NULL.
 * @param host a host address information structure to free, or %NULL
 */
export function freeaddrinfo(host: any | null): void
/**
 * Resolves a host `name` and returns an information about its address.
 * @param name an address name to resolve
 * @param service a service name to use
 * @param hints an #addrinfo hints, or %NULL
 * @param cancellable optional #GCancellable object, or %NULL
 * @returns a newly allocated #addrinfo. Free it    with camel_freeaddrinfo() when done with it.
 */
export function getaddrinfo(name: string | null, service: string | null, hints: any | null, cancellable: Gio.Cancellable | null): any | null
export function headerAddressDecode(in_: string | null, charset: string | null): HeaderAddress
export function headerAddressFold(in_: string | null, headerlen: number): string | null
/**
 * TODO: Document me.
 * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
 * @param addr the #CamelHeaderAddress to add
 */
export function headerAddressListAppend(addrlistp: HeaderAddress[], addr: HeaderAddress): void
/**
 * TODO: Document me.
 * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
 * @param addrs a NULL-terminated list of #CamelHeaderAddress to add
 */
export function headerAddressListAppendList(addrlistp: HeaderAddress[], addrs: HeaderAddress[]): void
/**
 * TODO: Document me.
 * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
 */
export function headerAddressListClear(addrlistp: HeaderAddress[]): void
/**
 * TODO: Document me.
 * @param addrlist a NULL-terminated list of #CamelHeaderAddress objects
 */
export function headerAddressListEncode(addrlist: HeaderAddress[]): string | null
/**
 * TODO: Document me.
 * @param addrlist a NULL-terminated list of #CamelHeaderAddress objects
 */
export function headerAddressListFormat(addrlist: HeaderAddress[]): string | null
/**
 * Extract a content-id from `in`.
 * @param in_ input string
 * @returns the extracted content-id
 */
export function headerContentidDecode(in_: string | null): string | null
/**
 * Decodes the rfc822 date string and saves the GMT offset into
 * `tz_offset` if non-NULL.
 * @param str input date string
 * @param tzOffset timezone offset
 * @returns the time_t representation of the date string specified by @str or (time_t) 0 on error. If @tz_offset is non-NULL, the value of the timezone offset will be stored.
 */
export function headerDecodeDate(str: string | null, tzOffset: number): number
/**
 * Extracts an integer token from `in` and updates the pointer to point
 * to after the end of the integer token (sort of like strtol).
 * @param in_ pointer to input string
 * @returns the gint value
 */
export function headerDecodeInt(in_: string | null): number
/**
 * Decodes rfc2047 encoded-word tokens
 * @param in_ input header value string
 * @param defaultCharset default charset to use if improperly encoded
 * @returns a string containing the UTF-8 version of the decoded header value
 */
export function headerDecodeString(in_: string | null, defaultCharset: string | null): string | null
/**
 * Encodes a 'phrase' header according to the rules in rfc2047.
 * @param in_ header to encode
 * @returns the encoded 'phrase'
 */
export function headerEncodePhrase(in_: number): string | null
/**
 * Encodes a 'text' header according to the rules of rfc2047.
 * @param in_ input string
 * @returns the rfc2047 encoded header
 */
export function headerEncodeString(in_: number): string | null
export function headerFold(in_: string | null, headerlen: number): string | null
/**
 * Decodes a header which contains rfc2047 encoded-word tokens that
 * may or may not be within a comment.
 * @param in_ input header value string
 * @param defaultCharset default charset to use if improperly encoded
 * @returns a string containing the UTF-8 version of the decoded header value
 */
export function headerFormatCtext(in_: string | null, defaultCharset: string | null): string | null
/**
 * Allocates a string buffer containing the rfc822 formatted date
 * string represented by `time` and `tz_offset`.
 * @param date time_t date representation
 * @param tzOffset Timezone offset
 * @returns a valid string representation of the date.
 */
export function headerFormatDate(date: number, tzOffset: number): string | null
export function headerLocationDecode(in_: string | null): string | null
export function headerMailboxDecode(in_: string | null, charset: string | null): HeaderAddress
export function headerMimeDecode(in_: string | null, maj: number, min: number): void
/**
 * Extract a message-id token from `in`.
 * @param in_ input string
 * @returns the msg-id
 */
export function headerMsgidDecode(in_: string | null): string | null
/**
 * Either the `domain` is used, or the user's local hostname,
 * in case it's %NULL or empty.
 * @param domain domain to use (like "example.com") for the ID suffix; can be %NULL
 * @returns Unique message ID.
 */
export function headerMsgidGenerate(domain: string | null): string | null
export function headerNewsgroupsDecode(in_: string | null): string[]
/**
 * Searches `params` for a param named `name` and gets the value.
 * @param params parameters
 * @param name name of param to find
 * @returns the value of the @name param
 */
export function headerParam(params: any | null, name: string | null): string | null
export function headerParamListDecode(in_: string | null): any | null
export function headerParamListFormat(params: any | null): string | null
export function headerParamListFormatAppend(out: GLib.String, params: any | null): void
/**
 * Free the list of params.
 * @param params a list of params
 */
export function headerParamListFree(params: any | null): void
/**
 * Generate a list of references, from most recent up.
 * @param in_ References header value
 * @returns a list of references decoedd from @in
 */
export function headerReferencesDecode(in_: string | null): string[]
/**
 * Set a parameter in the list.
 * @param paramsp poinetr to a list of params
 * @param name name of param to set
 * @param value value to set
 * @returns the set param
 */
export function headerSetParam(paramsp: any | null, name: string | null, value: string | null): any | null
/**
 * Gets the first token in the string according to the rules of
 * rfc0822.
 * @param in_ input string
 * @returns a new string containing the first token in @in
 */
export function headerTokenDecode(in_: string | null): string | null
export function headerUnfold(in_: string | null): string | null
/**
 * Searches for a mailing list information among known headers and returns
 * a newly allocated string with its value.
 * @param headers a #CamelNameValueArray with headers
 * @returns The mailing list header, or %NULL, if none is found
 */
export function headersDupMailingList(headers: NameValueArray): string | null
/**
 * Converts IDN (Internationalized Domain Name) into ASCII representation.
 * If there's a failure or the `host` has only ASCII letters, then a copy
 * of `host` is returned.
 * @param host Host name, with or without non-ascii letters in utf8
 * @returns Newly allocated string with only ASCII letters   describing the @host or %NULL, when the @host is %NULL. Free the returned   string with g_free() when no longer needed.
 */
export function hostIdnaToAscii(host: string | null): string | null
/**
 * Check whether the `hostname` requires conversion to ASCII. That can
 * be when a character in it can look like an ASCII character, even
 * it being a Unicode letter. This can be used to display host names
 * in a way of invulnerable to IDN homograph attacks.
 * @param hostname a host name
 * @returns %TRUE, when the @hostname should be converted to an ASCII equivalent,    %FALSE, when it can be shown as is.
 */
export function hostnameUtilsRequiresAscii(hostname: string | null): boolean
export function iconvCharsetLanguage(charset: string | null): string | null
export function iconvCharsetName(charset: string | null): string | null
export function iconvLocaleCharset(): string | null
export function iconvLocaleLanguage(): string | null
export function init(certdbDir: string | null, nssInit: boolean): number
/**
 * Converts the calendar time representation `tt` to a broken-down
 * time representation, stored in `tm,` and provides the offset in
 * seconds from UTC time, stored in `offset`.
 * @param tt the #time_t to convert
 * @param tm the #tm to store the result in
 * @param offset the #gint to store the offset in
 */
export function localtimeWithOffset(tt: number, tm: any | null, offset: number): void
/**
 * Create an exclusive lock using .lock semantics.
 * All locks are equivalent to write locks (exclusive).
 * 
 * The function does nothing and returns success (zero),
 * when dot locking had not been compiled.
 * @param path a path to lock
 * @returns -1 on error, sets @ex appropriately.
 */
export function lockDot(path: string | null): number
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
export function lockFcntl(fd: number, type: LockType): number
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
export function lockFlock(fd: number, type: LockType): number
/**
 * Attempt to lock a folder, multiple attempts will be made using all
 * locking strategies available.
 * @param path Path to the file to lock (used for .locking only).
 * @param fd Open file descriptor of the right type to lock.
 * @param type Type of lock, CAMEL_LOCK_READ or CAMEL_LOCK_WRITE.
 * @returns -1 on error, @ex will describe the locking system that failed.
 */
export function lockFolder(path: string | null, fd: number, type: LockType): number
export function lockHelperLock(path: string | null): number
export function lockHelperUnlock(lockid: number): number
/**
 * Like mktime(3), but assumes UTC instead of local timezone.
 * @param tm the #tm to convert to a calendar time representation
 * @returns the calendar time representation of @tm
 */
export function mktimeUtc(tm: any | null): number
/**
 * This copies an mbox file from a shared directory with multiple
 * readers and writers into a private (presumably Camel-controlled)
 * directory. Dot locking is used on the source file (but not the
 * destination).
 * @param source source file
 * @param dest destination file
 * @returns Returns -1 on error or 0 on success.
 */
export function movemail(source: string | null, dest: string | null): number
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
export function pointerTrackerDump(): void
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
export function pointerTrackerTrackWithInfo(ptr: any | null, info: string | null): void
/**
 * Removes pointer from the pointer tracker. It's an error to try
 * to remove pointer which was not added to the tracker by
 * camel_pointer_tracker_track() or camel_pointer_tracker_track_with_info(),
 * or a pointer which was already removed.
 * @param ptr pointer to remove from the tracker
 */
export function pointerTrackerUntrack(ptr: any | null): void
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
export function providerGet(protocol: string | null): Provider
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
export function providerInit(): void
/**
 * This returns a list of available providers. If `load` is %TRUE, it will
 * first load in all available providers that haven't yet been loaded.
 * 
 * Free the returned list with g_list_free().  The #CamelProvider structs
 * in the list are owned by Camel and should not be modified or freed.
 * @param load whether or not to load in providers that are not already loaded
 * @returns a #GList of #CamelProvider structs
 */
export function providerList(load: boolean): Provider[]
/**
 * Loads the provider at `path,` and calls its initialization function,
 * passing `session` as an argument. The provider should then register
 * itself with `session`.
 * @param path the path to a shared library
 * @returns %TRUE on success, %FALSE on failure
 */
export function providerLoad(path: string | null): boolean
export function providerModuleInit(): void
/**
 * Add `string` to the pool.
 * 
 * The %NULL and empty strings are special cased to constant values.
 * 
 * Unreference the returned string with camel_pstring_free().
 * @param string string to add to the string pool
 * @param own whether the string pool will own the memory pointed to by       `string,` if `string` is not yet in the pool
 * @returns a canonicalized copy of @string
 */
export function pstringAdd(string: string | null, own: boolean): string | null
/**
 * Returns whether the `string` exists in the string pool.
 * 
 * The %NULL and empty strings are special cased to constant values.
 * @param string string to look up in the string pool
 * @returns Whether the @string exists in the string pool
 */
export function pstringContains(string: string | null): boolean
/**
 * Dumps to stdout memory statistic about the string pool.
 */
export function pstringDumpStat(): void
/**
 * Unreferences a pooled string.  If the string's reference count drops to
 * zero it will be deallocated.  %NULL and the empty string are special cased.
 * @param string string to free
 */
export function pstringFree(string: string | null): void
/**
 * Returns the canonicalized copy of `string` without increasing its
 * reference count in the string pool.  If necessary, `string` is first
 * added to the string pool.
 * 
 * The %NULL and empty strings are special cased to constant values.
 * @param string string to fetch from the string pool
 * @returns a canonicalized copy of @string
 */
export function pstringPeek(string: string | null): string | null
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
export function pstringStrdup(string: string | null): string | null
/**
 * Decodes a block of quoted-printable encoded data. Performs a
 * 'decode step' on a chunk of QP encoded data.
 * @param in_ input stream
 * @param out output stream
 * @param saveme leftover bits that have not yet been decoded
 * @returns the number of bytes decoded
 */
export function quotedDecodeStep(in_: Uint8Array, out: Uint8Array, saveme: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* saveme */ number[] ]
/**
 * Quoted-printable encodes a block of text. Call this when finished
 * encoding data with camel_quoted_encode_step() to flush off
 * the last little bit.
 * @param in_ input stream
 * @param out output string
 * @param save leftover bits that have not yet been encoded
 * @returns the number of bytes encoded
 */
export function quotedEncodeClose(in_: Uint8Array, out: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* save */ number[] ]
/**
 * Quoted-printable encodes a block of text. Performs an 'encode
 * step', saves left-over state in state and save (initialise to -1 on
 * first invocation).
 * @param in_ input stream
 * @param out output string
 * @param save leftover bits that have not yet been encoded
 * @returns the number of bytes encoded
 */
export function quotedEncodeStep(in_: Uint8Array, out: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* save */ number[] ]
/**
 * Cancellable libc read() replacement.
 * 
 * Code that intends to be portable to Win32 should call this function
 * only on file descriptors returned from open(), not on sockets.
 * @param fd file descriptor
 * @param buf buffer to fill
 * @param n number of bytes to read into `buf`
 * @param cancellable optional #GCancellable object, or %NULL
 * @returns number of bytes read or -1 on fail. On failure, errno will be set appropriately.
 */
export function read(fd: number, buf: string | null, n: number, cancellable: Gio.Cancellable | null): number
export function searchCamelHeaderSoundex(header: string | null, match: string | null): boolean
export function searchGetAllHeadersDecoded(message: MimeMessage): string | null
export function searchGetDefaultCharsetFromHeaders(headers: NameValueArray): string | null
export function searchGetDefaultCharsetFromMessage(message: MimeMessage): string | null
/**
 * Decodes `header_value,` if needed, either from an address header
 * or the Subject header. Other `header_name` headers are returned
 * as is.
 * @param headerName the header name
 * @param headerValue the header value
 * @param defaultCharset the default charset to use for the decode, or %NULL
 * @returns decoded header value, suitable for text comparison.    Free the returned pointer with g_free() when done with it.
 */
export function searchGetHeaderDecoded(headerName: string | null, headerValue: string | null, defaultCharset: string | null): string | null
export function searchGetHeadersDecoded(headers: NameValueArray, defaultCharset: string | null): string | null
export function searchHeaderIsAddress(headerName: string | null): boolean
export function searchHeaderMatch(value: string | null, match: string | null, how: _search_match_t, type: _search_t, defaultCharset: string | null): boolean
export function searchWordsFree(words: any | null): void
export function searchWordsSimple(words: any | null): any | null
export function searchWordsSplit(in_: number): any | null
export function serviceErrorQuark(): GLib.Quark
export function shutdown(): void
export function storeErrorQuark(): GLib.Quark
/**
 * Returns the last segment of the path string from `info`.
 * @param summary a #CamelStoreSummary
 * @param info a #CamelStoreInfo
 * @returns the last segment of the path string from @info
 */
export function storeInfoName(summary: StoreSummary, info: StoreInfo): string | null
/**
 * Returns the path string from `info`.
 * @param summary a #CamelStoreSummary
 * @param info a #CamelStoreInfo
 * @returns the path string from @info
 */
export function storeInfoPath(summary: StoreSummary, info: StoreInfo): string | null
/**
 * Set a specific string on the `info`.
 * @param summary a #CamelStoreSummary object
 * @param info a #CamelStoreInfo
 * @param type specific string being set
 * @param value string value to set
 */
export function storeInfoSetString(summary: StoreSummary, info: StoreInfo, type: number, value: string | null): void
export function strcaseEqual(a: any | null, b: any | null): number
export function strcaseHash(v: any | null): number
export function strdown(str: string | null): string | null
export function stringIsAllAscii(str: string | null): boolean
export function strstrcase(haystack: string | null, needle: string | null): string | null
export function systemFlag(name: string | null): MessageFlags
/**
 * Find the state of the flag `name` in `flags`.
 * @param flags bitwise system flags
 * @param name name of the flag to check for
 * @returns %TRUE if the named flag is set or %FALSE otherwise
 */
export function systemFlagGet(flags: MessageFlags, name: string | null): boolean
/**
 * Convert `in` from plain text into HTML.
 * @param in_ input text
 * @param flags bitwise flags defining the html conversion behaviour
 * @param color color to use when syntax highlighting
 * @returns a newly allocated string containing the HTMLified version of @in
 */
export function textToHtml(in_: string | null, flags: MimeFilterToHTMLFlags, color: number): string | null
/**
 * Applies the given time `value` in unit `unit` to the `src_time`.
 * Use negative value to subtract it. The time part is rounded
 * to the beginning of the day.
 * @param srcTime a time_t to apply the value to, or -1 to use the current time
 * @param unit a #CamelTimeUnit
 * @param value a value to apply
 * @returns @src_time modified by the given parameters as date, with    the time part being beginning of the day.
 */
export function timeValueApply(srcTime: number, unit: TimeUnit, value: number): number
export function transferEncodingFromString(string: string | null): TransferEncoding
export function transferEncodingToString(encoding: TransferEncoding): string | null
/**
 * Convert a ucs2 string into a UTF-8 one. The ucs2 string is treated
 * as network byte ordered, and terminated with a 16-bit %NULL.
 * @param ptr a ucs2 string to convert
 * @returns The converted string. Free it with g_free(),    when no longer needed.
 */
export function ucs2Utf8(ptr: string | null): string | null
/**
 * Frees the array of UIDs.
 * @param uids an array returned from camel_uid_cache_get_new_uids()
 */
export function uidCacheFreeUids(uids: string[]): void
/**
 * Attempt to unlock a .lock lock.
 * 
 * The function does nothing, when dot locking had not been compiled.
 * @param path a path to unlock
 */
export function unlockDot(path: string | null): void
/**
 * Unlock an fcntl lock.
 * 
 * The function does nothing, when fcntl locking had not been compiled.
 * @param fd a file descriptor
 */
export function unlockFcntl(fd: number): void
/**
 * Unlock an flock lock.
 * 
 * The function does nothing, when flock locking had not been compiled.
 * @param fd a file descriptor
 */
export function unlockFlock(fd: number): void
/**
 * Free a lock on a folder.
 * @param path Filename of folder.
 * @param fd Open descrptor on which locks were placed.
 */
export function unlockFolder(path: string | null, fd: number): void
export function urlAddrspecEnd(in_: string | null, pos: string | null, inend: string | null, match: UrlMatch): boolean
export function urlAddrspecStart(in_: string | null, pos: string | null, inend: string | null, match: UrlMatch): boolean
/**
 * &percnt;-decodes the passed-in URL *in place*. The decoded version is
 * never longer than the encoded version, so there does not need to
 * be any additional space at the end of the string.
 * @param part a URL part
 */
export function urlDecode(part: string | null): void
export function urlDecodePath(path: string | null): string | null
/**
 * This &percnt;-encodes the given URL part and returns the escaped version
 * in allocated memory, which the caller must free when it is done.
 * @param part a URL part
 * @param escapeExtra additional characters beyond " \"%#<>{}|\^[]`" to escape (or %NULL)
 * @returns the encoded string
 */
export function urlEncode(part: string | null, escapeExtra: string | null): string | null
export function urlFileEnd(in_: string | null, pos: string | null, inend: string | null, match: UrlMatch): boolean
export function urlFileStart(in_: string | null, pos: string | null, inend: string | null, match: UrlMatch): boolean
export function urlWebEnd(in_: string | null, pos: string | null, inend: string | null, match: UrlMatch): boolean
export function urlWebStart(in_: string | null, pos: string | null, inend: string | null, match: UrlMatch): boolean
export function ustrstrcase(haystack: string | null, needle: string | null): string | null
/**
 * Convert a modified UTF-7 string to UTF-8.  If the UTF-7 string
 * contains 8 bit characters, they are treated as iso-8859-1.
 * 
 * The IMAP rules [rfc2060] are used in the UTF-7 encoding.
 * @param ptr a UTF-7 string to convert
 * @returns The converted string. Free it with g_free(),    when no longer needed.
 */
export function utf7Utf8(ptr: string | null): string | null
/**
 * Get a Unicode character from a UTF-8 stream.  `ptr` will be advanced
 * to the next character position.  Invalid utf8 characters will be
 * silently skipped. The `ptr` should point to a NUL terminated array.
 * @param ptr a pointer to read the character from
 * @returns The next Unicode character. The @ptr will be advanced to    the next character always.
 */
export function utf8Getc(ptr: number): [ /* returnType */ number, /* ptr */ number ]
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
export function utf8GetcLimit(ptr: number, end: number): [ /* returnType */ number, /* ptr */ number ]
/**
 * Ensures the returned text will be valid UTF-8 string, with incorrect letters
 * changed to question marks.
 * @param text a text to make valid
 * @returns Valid UTF-8 string, with replaced incorrect letters.    Free it with g_free(), when no longer needed.
 */
export function utf8MakeValid(text: string | null): string | null
/**
 * Ensures the returned text will be valid UTF-8 string, with incorrect letters
 * changed to question marks.
 * @param text a text to make valid
 * @param textLen length of the `text,` or -1 if NUL-terminated
 * @returns Valid UTF-8 string, with replaced incorrect letters.    Free it with g_free(), when no longer needed.
 */
export function utf8MakeValidLen(text: string | null, textLen: number): string | null
/**
 * Output a 32 bit unicode character as UTF-8 octets.  At most 4 octets will
 * be written to `ptr`. The `ptr` will be advanced to the next character position.
 * @param ptr pointer to write the character to
 * @param c a Unicode character to write
 */
export function utf8Putc(ptr: number, c: number): /* ptr */ number
/**
 * Convert a UTF-8 string into a ucs2 one. The ucs string will be in
 * network byte order, and terminated with a 16-bit %NULL.
 * @param ptr a UTF-8 string to convert
 * @returns The converted string. Free it with g_free(),    when no longer needed.
 */
export function utf8Ucs2(ptr: string | null): string | null
/**
 * Convert a UTF-8 string to a modified UTF-7 format.
 * 
 * The IMAP rules [rfc2060] are used in the UTF-7 encoding.
 * @param ptr a UTF-8 string to convert
 * @returns The converted string. Free it with g_free(),    when no longer needed.
 */
export function utf8Utf7(ptr: string | null): string | null
/**
 * Reads a numeric data from the `bdata_ptr` and moves the `bdata_ptr`
 * after that number. If the number cannot be read, then the `default_value`
 * is returned instead and the `bdata_ptr` is left unchanged. The number
 * might be previously stored with the camel_util_bdata_put_number().
 * @param bdataPtr a backend specific data (bdata) pointer
 * @param defaultValue a value to return, when no data can be read
 * @returns The read number, or the @default_value, if the @bdata_ptr doesn't    point to a number.
 */
export function utilBdataGetNumber(bdataPtr: string | null, defaultValue: number): number
/**
 * Reads a string data from the `bdata_ptr` and moves the `bdata_ptr`
 * after that string. If the string cannot be read, then the `default_value`
 * is returned instead and the `bdata_ptr` is left unchanged. The string
 * might be previously stored with the camel_util_bdata_put_string().
 * @param bdataPtr a backend specific data (bdata) pointer
 * @param defaultValue a value to return, when no data can be read
 * @returns Newly allocated string, which was read, or    dupped the @default_value, if the @bdata_ptr doesn't point to a string.    Free returned pointer with g_free() when done with it.
 */
export function utilBdataGetString(bdataPtr: string | null, defaultValue: string | null): string | null
/**
 * Puts the number `value` at the end of the `bdata_str`. In case the `bdata_str`
 * is not empty a space is added before the numeric `value`. The stored value
 * can be read back with the camel_util_bdata_get_number().
 * @param bdataStr a #GString to store a backend specific data (bdata)
 * @param value a value to store
 */
export function utilBdataPutNumber(bdataStr: GLib.String, value: number): void
/**
 * Puts the string `value` at the end of the `bdata_str`. In case the `bdata_str`
 * is not empty a space is added before the string `value`. The stored value
 * can be read back with the camel_util_bdata_get_string().
 * 
 * The strings are encoded as "length-value", quotes for clarity only.
 * @param bdataStr a #GString to store a backend specific data (bdata)
 * @param value a value to store
 */
export function utilBdataPutString(bdataStr: GLib.String, value: string | null): void
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
 * @param settingValue the value to decode
 */
export function utilDecodeUserHeaderSetting(settingValue: string | null): [ /* outDisplayName */ string | null, /* outHeaderName */ string | null ]
/**
 * Encode the optional `display_name` and the `header_name` to a value suitable
 * for GSettings schema org.gnome.evolution-data-server and key camel-message-info-user-headers.
 * 
 * Free the returned string with g_free(), when no longer needed.
 * @param displayName display name for the header name, or %NULL
 * @param headerName the header name
 * @returns a newly allocated string with encoded @display_name    and @header_name
 */
export function utilEncodeUserHeaderSetting(displayName: string | null, headerName: string | null): string | null
/**
 * Fill `info` 's user-headers with the user-defined headers from
 * the `headers` array.
 * @param info a #CamelMessageInfo
 * @param headers a #CamelNameValueArray with the headers to read from
 * @returns Whether the @info's user headers changed
 */
export function utilFillMessageInfoUserHeaders(info: MessageInfo, headers: NameValueArray): boolean
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
 * @param mainPath the main path to work with
 * @param replacePrefix path prefix to replace
 * @param withModulesDir whether to add also the modules directory
 * @returns a %GPtrArray    with paths to use, including the @main_path. Free it with    g_ptr_array_unref(), when no longer needed.
 */
export function utilGetDirectoryVariants(mainPath: string | null, replacePrefix: string | null, withModulesDir: boolean): string[]
/**
 * Checks whether the domain in the `email_address` requires
 * conversion to ASCII and if it does it also converts it.
 * When the `do_format` is %TRUE, the output string is formatted
 * for display, otherwise it's encoded for use in the message
 * headers. A %NULL is returned when no conversion was needed.
 * @param emailAddress an email address as string
 * @param doFormat what format will be returned
 * @returns the @email_address with only ASCII letters,    if such conversion is needed or %NULL, when no conversion was    required. See: camel_hostname_utils_requires_ascii(), camel_internet_address_sanitize_ascii_domain(),    camel_utils_sanitize_ascii_domain_in_url_str()
 */
export function utilsSanitizeAsciiDomainInAddress(emailAddress: string | null, doFormat: boolean): string | null
/**
 * Checks whether the host name of the `url` requires conversion
 * to ASCII and converts it, if needed.
 * @param url a #CamelURL
 * @returns %TRUE, when the conversion was required. See: camel_hostname_utils_requires_ascii(), camel_utils_sanitize_ascii_domain_in_url_str()
 */
export function utilsSanitizeAsciiDomainInUrl(url: URL): boolean
/**
 * Checks whether the host name of the `url_str` requires conversion
 * to ASCII and converts it if needed. Returns %NULL, when no conversion
 * was required.
 * @param urlStr a URL as string
 * @returns converted @url_str to ASCII host name, or %NULL, when    no conversion was needed. See: camel_hostname_utils_requires_ascii(), camel_utils_sanitize_ascii_domain_in_url()
 */
export function utilsSanitizeAsciiDomainInUrlStr(urlStr: string | null): string | null
/**
 * Uudecodes a chunk of data. Performs a 'decode step' on a chunk of
 * uuencoded data. Assumes the "begin mode filename" line has
 * been stripped off.
 * @param in_ input stream
 * @param out output stream
 * @param save leftover bits that have not yet been decoded
 * @returns the number of bytes decoded
 */
export function uudecodeStep(in_: Uint8Array, out: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* save */ number[] ]
/**
 * Uuencodes a chunk of data. Call this when finished encoding data
 * with camel_uuencode_step() to flush off the last little bit.
 * @param in_ input stream
 * @param out output stream
 * @param uubuf temporary buffer of 60 bytes
 * @param save leftover bits that have not yet been encoded
 * @returns the number of bytes encoded
 */
export function uuencodeClose(in_: Uint8Array, out: Uint8Array, uubuf: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* uubuf */ Uint8Array, /* save */ number[] ]
/**
 * Uuencodes a chunk of data. Performs an 'encode step', only encodes
 * blocks of 45 characters to the output at a time, saves left-over
 * state in `uubuf,` `state` and `save` (initialize to 0 on first
 * invocation).
 * @param in_ input stream
 * @param out output stream
 * @param uubuf temporary buffer of 60 bytes
 * @param save leftover bits that have not yet been encoded
 * @returns the number of bytes encoded
 */
export function uuencodeStep(in_: Uint8Array, out: Uint8Array, uubuf: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* uubuf */ Uint8Array, /* save */ number[] ]
/**
 * Cancellable libc write() replacement.
 * 
 * Code that intends to be portable to Win32 should call this function
 * only on file descriptors returned from open(), not on sockets.
 * @param fd file descriptor
 * @param buf buffer to write
 * @param n number of bytes of `buf` to write
 * @param cancellable optional #GCancellable object, or %NULL
 * @returns number of bytes written or -1 on fail. On failure, errno will be set appropriately.
 */
export function write(fd: number, buf: string | null, n: number, cancellable: Gio.Cancellable | null): number
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
 * @param in_ input buffer
 * @returns the number of bytes decoded
 */
export function ydecodeStep(in_: Uint8Array): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* pcrc */ number, /* crc */ number ]
/**
 * Call this function when finished encoding data with
 * camel_yencode_step() to flush off the remaining state.
 * 
 * #CAMEL_MIME_YENCODE_CRC_FINAL (`pcrc)` will give you the crc32 of the
 * encoded "part". If there are more "parts" to encode, you should
 * re-use `crc` when encoding the next "parts" and then use
 * #CAMEL_MIME_YENCODE_CRC_FINAL (`crc)` to get the combined crc32 value of
 * all the parts.
 * @param in_ input buffer
 * @returns the number of bytes encoded.
 */
export function yencodeClose(in_: Uint8Array): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* pcrc */ number, /* crc */ number ]
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
 * @param in_ input buffer
 * @returns the number of bytes encoded
 */
export function yencodeStep(in_: Uint8Array): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* pcrc */ number, /* crc */ number ]
export interface CipherCloneFunc {
    (value: any | null): any | null
}
export interface CopyFunc {
    (object: any | null): any | null
}
/**
 * A collation callback function.
 * @callback 
 * @param enc a used encoding (SQLITE_UTF8)
 * @param length1 length of the `data1`
 * @param data1 the first value, of lenth `length1`
 * @param length2 length of the `data2`
 * @param data2 the second value, of lenth `length2`
 * @returns less than zero, zero, or greater than zero value, the same as for example strcmp() does.
 */
export interface DBCollate {
    (enc: any | null, length1: number, data1: any | null, length2: number, data2: any | null): number
}
/**
 * A callback called for the SELECT statements. The items at the same index of `colvalues`
 * and `colnames` correspond to each other.
 * @callback 
 * @param colvalues array of column values, as UTF-8 strings
 * @param colnames array of column names
 * @returns 0 to continue the SELECT execution, non-zero to abort the execution.
 */
export interface DBSelectCB {
    (colvalues: string[], colnames: string[]): number
}
/**
 * A callback called for each found file in the cache, used
 * by camel_data_cache_foreach_remove(). The `filename` corresponds
 * to the result of camel_data_cache_get_filename().
 * @callback 
 * @param cdc a #CamelDataCache
 * @param filename a file name found in the cache
 * @returns %TRUE, to delete the file, %FALSE to keep in in the cache
 */
export interface DataCacheRemoveFunc {
    (cdc: DataCache, filename: string | null): boolean
}
export interface FilterPlaySoundFunc {
    (driver: FilterDriver, filename: string | null): void
}
export interface FilterShellFunc {
    (driver: FilterDriver, argc: number, argv: string | null): void
}
export interface FilterStatusFunc {
    (driver: FilterDriver, status: any | null, pc: number, desc: string | null): void
}
export interface FilterSystemBeepFunc {
    (driver: FilterDriver): void
}
/**
 * A callback prototype for camel_vee_data_cache_foreach_message_info_data()
 * @callback 
 * @param miData a #CamelVeeMessageInfoData
 * @param subfolder a #CamelFolder which `mi_data` references
 */
export interface ForeachInfoData {
    (miData: VeeMessageInfoData, subfolder: Folder): void
}
/**
 * Callback used to traverse parts of the `message` using camel_mime_message_foreach_part().
 * @callback 
 * @param message a #CamelMimeMessage
 * @param part a #CamelMimePart, for which the function is called
 * @param parentPart a #CamelMimePart, parent of the `part;` can be %NULL
 * @returns %TRUE, when the traverse should continue, %FALSE to stop    traversing parts of the @message
 */
export interface ForeachPartFunc {
    (message: MimeMessage, part: MimePart, parentPart: MimePart | null): boolean
}
export interface IndexNorm {
    (index: Index, word: string | null): string | null
}
/**
 * This is the callback signature for camel_message_content_info_traverse().
 * @callback 
 * @param ci a #CamelMessageContentInfo
 * @param depth the current depth
 * @returns %TRUE to continue processing or %FALSE to stop it.
 */
export interface MessageContentInfoTraverseCallback {
    (ci: MessageContentInfo, depth: number): boolean
}
/**
 * Function used in camel_provider_auto_detect().
 * @callback 
 * @param url a #CamelURL
 * @returns 0 on success or -1 on fail.
 */
export interface ProviderAutoDetectFunc {
    (url: URL): number
}
/**
 * This is the callback signature for jobs submitted to the CamelSession
 * via camel_session_submit_job().  The `error` pointer is always non-%NULL,
 * so it's safe to dereference to check if a #GError has been set.
 * @callback 
 * @param session a #CamelSession
 * @param cancellable a #CamelOperation cast as a #GCancellable
 */
export interface SessionCallback {
    (session: Session, cancellable: Gio.Cancellable | null): void
}
export interface TextIndexFunc {
    (idx: TextIndex, word: string | null, buffer: string | null): void
}
export interface UrlScanFunc {
    (in_: string | null, pos: string | null, inend: string | null, match: UrlMatch): boolean
}
export module JunkFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface JunkFilter {

    // Own properties of Camel-1.2.Camel.JunkFilter

    __gtype__: number

    // Owm methods of Camel-1.2.Camel.JunkFilter

    // Has conflict: classify(message: MimeMessage, cancellable: Gio.Cancellable | null): JunkStatus
    // Has conflict: learnJunk(message: MimeMessage, cancellable: Gio.Cancellable | null): boolean
    // Has conflict: learnNotJunk(message: MimeMessage, cancellable: Gio.Cancellable | null): boolean
    // Has conflict: synchronize(cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of Camel-1.2.Camel.JunkFilter

    /**
     * Classifies `message` as junk, not junk or inconclusive.
     * 
     * If an error occurs, the function sets `error` and returns
     * %CAMEL_JUNK_STATUS_ERROR.
     * @virtual 
     * @param message a #CamelMimeMessage
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the junk status determined by @junk_filter
     */
    classify(message: MimeMessage, cancellable: Gio.Cancellable | null): JunkStatus
    /**
     * Instructs `junk_filter` to classify `message` as junk.  If using an
     * adaptive junk filtering algorithm, explicitly marking `message` as
     * junk will influence the classification of future messages.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @virtual 
     * @param message a #CamelMimeMessage
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE if @message was successfully classified
     */
    learnJunk(message: MimeMessage, cancellable: Gio.Cancellable | null): boolean
    /**
     * Instructs `junk_filter` to classify `message` as not junk.  If using an
     * adaptive junk filtering algorithm, explicitly marking `message` as not
     * junk will influence the classification of future messages.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @virtual 
     * @param message a #CamelMimeMessage
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE if @message was successfully classified
     */
    learnNotJunk(message: MimeMessage, cancellable: Gio.Cancellable | null): boolean
    /**
     * Instructs `junk_filter` to flush any in-memory caches to disk, if
     * applicable.  When filtering many messages, delaying this step until
     * all messages have been classified can improve performance.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE if @junk_filter was successfully synchronized
     */
    synchronize(cancellable: Gio.Cancellable | null): boolean

    // Class property signals of Camel-1.2.Camel.JunkFilter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class JunkFilter extends GObject.Object {

    // Own properties of Camel-1.2.Camel.JunkFilter

    static name: string

    // Constructors of Camel-1.2.Camel.JunkFilter

    constructor(config?: JunkFilter.ConstructorProperties) 
    _init(config?: JunkFilter.ConstructorProperties): void
}

export module NetworkService {

    // Constructor properties interface

    export interface ConstructorProperties extends Service.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.NetworkService

        connectable?: Gio.SocketConnectable | null
    }

}

export interface NetworkService extends Service {

    // Own properties of Camel-1.2.Camel.NetworkService

    connectable: Gio.SocketConnectable
    readonly hostReachable: boolean
    __gtype__: number

    // Conflicting properties

    parent: Object & GObject.Object & GObject.Object
    priv: any & ObjectPrivate

    // Owm methods of Camel-1.2.Camel.NetworkService

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
    canReach(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_network_service_can_reach().
     * @param result a #GAsyncResult
     * @returns whether the host for @service can be reached
     */
    canReachFinish(result: Gio.AsyncResult): boolean
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
    canReachSync(cancellable: Gio.Cancellable | null): boolean
    // Has conflict: connectSync(cancellable: Gio.Cancellable | null): Gio.IOStream
    // Has conflict: getDefaultPort(method: NetworkSecurityMethod): number
    /**
     * Returns %TRUE if `service` believes that the host pointed to by
     * #CamelNetworkService:connectable can be reached.  This property
     * is updated automatically as network conditions change.
     * @returns whether the host is reachable
     */
    getHostReachable(): boolean
    // Has conflict: getServiceName(method: NetworkSecurityMethod): string | null
    /**
     * Returns the socket endpoint for the network service to which `service`
     * is a client.
     * 
     * The returned #GSocketConnectable is referenced for thread-safety and
     * must be unreferenced with g_object_unref() when finished with it.
     * @returns a #GSocketConnectable
     */
    refConnectable(): Gio.SocketConnectable
    /**
     * Sets the socket endpoint for the network service to which `service` is
     * a client.  If `connectable` is %NULL, a #GSocketConnectable is derived
     * from the `service'`s #CamelNetworkSettings.
     * @param connectable a #GSocketConnectable, or %NULL
     */
    setConnectable(connectable: Gio.SocketConnectable | null): void
    /**
     * Creates a #GTlsClientConnection wrapping `base_stream,` which is
     * assumed to communicate with the server identified by `service'`s
     * #CamelNetworkService:connectable.
     * 
     * This should typically be called after issuing a STARTTLS command
     * to a server to initiate a Transport Layer Security handshake.
     * @param baseStream a #GIOStream
     * @returns the new #GTlsClientConnection, or %NULL on error
     */
    starttls(baseStream: Gio.IOStream): Gio.IOStream | null

    // Own virtual methods of Camel-1.2.Camel.NetworkService

    /**
     * Attempts to establish a network connection to the server described by
     * `service,` using the preferred #CamelNetworkSettings:security-method to
     * secure the connection.  If a connection cannot be established, or the
     * connection attempt is cancelled, the function sets `error` and returns
     * %NULL.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns a #GIOStream, or %NULL on error
     */
    connectSync(cancellable: Gio.Cancellable | null): Gio.IOStream

    // Overloads of connectSync

    /**
     * Connects `service` to a remote server using the information in its
     * #CamelService:settings instance.
     * 
     * If a connect operation is already in progress when this function is
     * called, its results will be reflected in this connect operation.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE if the connection is made or %FALSE otherwise
     */
    connectSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns the default network port number for `service` and the security
     * method `method,` as defined in /etc/services.  For example, the default
     * port for unencrypted IMAP or encrypted IMAP using STARTTLS is 143, but
     * the default port for IMAP over SSL is 993.
     * @virtual 
     * @param method a #CamelNetworkSecurityMethod
     * @returns the default port number for @service and @method
     */
    getDefaultPort(method: NetworkSecurityMethod): number
    /**
     * Returns the standard network service name for `service` and the security
     * method `method,` as defined in /etc/services.  For example, the service
     * name for unencrypted IMAP or encrypted IMAP using STARTTLS is "imap",
     * but the service name for IMAP over SSL is "imaps".
     * @virtual 
     * @param method a #CamelNetworkSecurityMethod
     * @returns the network service name for @service and @method, or %NULL
     */
    getServiceName(method: NetworkSecurityMethod): string | null

    // Class property signals of Camel-1.2.Camel.NetworkService

    connect(sigName: "notify::connectable", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connectable", ...args: any[]): void
    connect(sigName: "notify::host-reachable", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::host-reachable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host-reachable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host-reachable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host-reachable", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::connection-status", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::connection-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection-status", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::session", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class NetworkService extends GObject.Object {

    // Own properties of Camel-1.2.Camel.NetworkService

    static name: string

    // Constructors of Camel-1.2.Camel.NetworkService

    constructor(config?: NetworkService.ConstructorProperties) 
    _init(config?: NetworkService.ConstructorProperties): void
}

export module NetworkSettings {

    // Constructor properties interface

    export interface ConstructorProperties extends Settings.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.NetworkSettings

        authMechanism?: string | null
        host?: string | null
        port?: number | null
        securityMethod?: NetworkSecurityMethod | null
        user?: string | null
    }

}

export interface NetworkSettings extends Settings {

    // Own properties of Camel-1.2.Camel.NetworkSettings

    authMechanism: string | null
    host: string | null
    port: number
    securityMethod: NetworkSecurityMethod
    user: string | null
    __gtype__: number

    // Owm methods of Camel-1.2.Camel.NetworkSettings

    /**
     * Thread-safe variation of camel_network_settings_get_auth_mechanism().
     * Use this function when accessing `settings` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #CamelNetworkSettings:auth-mechanism
     */
    dupAuthMechanism(): string | null
    /**
     * Thread-safe variation of camel_network_settings_get_host().
     * Use this function when accessing `settings` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #CamelNetworkSettings:host
     */
    dupHost(): string | null
    /**
     * Just like camel_network_settings_dup_host(), only makes sure that
     * the returned host name will be converted into its ASCII form in case
     * of IDNA value.
     * @returns a newly-allocated copy of #CamelNetworkSettings:host with    only ASCII letters.
     */
    dupHostEnsureAscii(): string | null
    /**
     * Thread-safe variation of camel_network_settings_get_user().
     * Use this function when accessing `settings` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #CamelNetworkSettings:user
     */
    dupUser(): string | null
    /**
     * Returns the mechanism name used to authenticate to a network service.
     * Often this refers to a SASL mechanism such as "LOGIN" or "GSSAPI".
     * @returns the authentication mechanism name
     */
    getAuthMechanism(): string | null
    /**
     * Returns the host name used to authenticate to a network service.
     * @returns the host name of a network service
     */
    getHost(): string | null
    /**
     * Returns the port number used to authenticate to a network service.
     * @returns the port number of a network service
     */
    getPort(): number
    /**
     * Returns the method used to establish a secure (or unsecure) network
     * connection.
     * @returns the security method
     */
    getSecurityMethod(): NetworkSecurityMethod
    /**
     * Returns the user name used to authenticate to a network service.
     * @returns the user name of a network service
     */
    getUser(): string | null
    /**
     * Sets the mechanism name used to authenticate to a network service.
     * Often this refers to a SASL mechanism such as "LOGIN" or "GSSAPI".
     * The #CamelNetworkSettings:auth-mechanism property is automatically
     * stripped of leading and trailing whitespace.
     * @param authMechanism an authentication mechanism name, or %NULL
     */
    setAuthMechanism(authMechanism: string | null): void
    /**
     * Sets the host name used to authenticate to a network service.  The
     * #CamelNetworkSettings:host property is automatically stripped of
     * leading and trailing whitespace.
     * @param host a host name, or %NULL
     */
    setHost(host: string | null): void
    /**
     * Sets the port number used to authenticate to a network service.
     * @param port a port number
     */
    setPort(port: number): void
    /**
     * Sets the method used to establish a secure (or unsecure) network
     * connection.  Note that changing this setting has no effect on an
     * already-established network connection.
     * @param method the security method
     */
    setSecurityMethod(method: NetworkSecurityMethod): void
    /**
     * Sets the user name used to authenticate to a network service.  The
     * #CamelNetworkSettings:user property is automatically stripped of
     * leading and trailing whitespace.
     * @param user a user name, or %NULL
     */
    setUser(user: string | null): void

    // Class property signals of Camel-1.2.Camel.NetworkSettings

    connect(sigName: "notify::auth-mechanism", callback: (...args: any[]) => void): number
    on(sigName: "notify::auth-mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auth-mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auth-mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auth-mechanism", ...args: any[]): void
    connect(sigName: "notify::host", callback: (...args: any[]) => void): number
    on(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::security-method", callback: (...args: any[]) => void): number
    on(sigName: "notify::security-method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::security-method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::security-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::security-method", ...args: any[]): void
    connect(sigName: "notify::user", callback: (...args: any[]) => void): number
    on(sigName: "notify::user", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class NetworkSettings extends GObject.Object {

    // Own properties of Camel-1.2.Camel.NetworkSettings

    static name: string

    // Constructors of Camel-1.2.Camel.NetworkSettings

    constructor(config?: NetworkSettings.ConstructorProperties) 
    _init(config?: NetworkSettings.ConstructorProperties): void
}

export module Subscribable {

    // Signal callback interfaces

    /**
     * Signal callback interface for `folder-subscribed`
     */
    export interface FolderSubscribedSignalCallback {
        (object: FolderInfo): void
    }

    /**
     * Signal callback interface for `folder-unsubscribed`
     */
    export interface FolderUnsubscribedSignalCallback {
        (object: FolderInfo): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Store.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Subscribable extends Store {

    // Own properties of Camel-1.2.Camel.Subscribable

    __gtype__: number

    // Conflicting properties

    parent: Service & Object & GObject.Object
    priv: any & ObjectPrivate

    // Owm methods of Camel-1.2.Camel.Subscribable

    // Has conflict: folderIsSubscribed(folderName: string | null): boolean
    // Has conflict: folderSubscribed(folderInfo: FolderInfo): void
    // Has conflict: folderUnsubscribed(folderInfo: FolderInfo): void
    /**
     * Asynchronously subscribes to the folder described by `folder_name`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_subscribable_subscribe_folder_finish() to get the result of
     * the operation.
     * @param folderName full path of the folder
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    subscribeFolder(folderName: string | null, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_subscribable_subscribe_folder().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    subscribeFolderFinish(result: Gio.AsyncResult): boolean
    // Has conflict: subscribeFolderSync(folderName: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously unsubscribes from the folder described by `folder_name`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_subscribable_unsubscribe_folder_finish() to get the result of
     * the operation.
     * @param folderName full path of the folder
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    unsubscribeFolder(folderName: string | null, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_subscribable_unsubscribe_folder().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    unsubscribeFolderFinish(result: Gio.AsyncResult): boolean
    // Has conflict: unsubscribeFolderSync(folderName: string | null, cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of Camel-1.2.Camel.Subscribable

    /**
     * Find out if a folder has been subscribed to.
     * @virtual 
     * @param folderName full path of the folder
     * @returns %TRUE if the folder has been subscribed to or %FALSE otherwise
     */
    folderIsSubscribed(folderName: string | null): boolean
    /**
     * Emits the #CamelSubscribable::folder-subscribed signal from an idle source
     * on the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @virtual 
     * @param folderInfo information about the subscribed folder
     */
    folderSubscribed(folderInfo: FolderInfo): void
    /**
     * Emits the #CamelSubscribable::folder-unsubscribed signal from an idle source
     * on the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @virtual 
     * @param folderInfo information about the unsubscribed folder
     */
    folderUnsubscribed(folderInfo: FolderInfo): void
    /**
     * Subscribes to the folder described by `folder_name`.
     * @virtual 
     * @param folderName full path of the folder
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    subscribeFolderSync(folderName: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Unsubscribes from the folder described by `folder_name`.
     * @virtual 
     * @param folderName full path of the folder
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    unsubscribeFolderSync(folderName: string | null, cancellable: Gio.Cancellable | null): boolean

    // Own signals of Camel-1.2.Camel.Subscribable

    connect(sigName: "folder-subscribed", callback: Subscribable.FolderSubscribedSignalCallback): number
    
    // Overloads of connect
    
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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "folder-subscribed", callback: Subscribable.FolderSubscribedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-subscribed", callback: Subscribable.FolderSubscribedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-subscribed", callback: Subscribable.FolderSubscribedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "folder-subscribed", ...args: any[]): void
    connect(sigName: "folder-unsubscribed", callback: Subscribable.FolderUnsubscribedSignalCallback): number
    
    // Overloads of connect
    
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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "folder-unsubscribed", callback: Subscribable.FolderUnsubscribedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-unsubscribed", callback: Subscribable.FolderUnsubscribedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-unsubscribed", callback: Subscribable.FolderUnsubscribedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "folder-unsubscribed", ...args: any[]): void

    // Class property signals of Camel-1.2.Camel.Subscribable

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Subscribable extends GObject.Object {

    // Own properties of Camel-1.2.Camel.Subscribable

    static name: string

    // Constructors of Camel-1.2.Camel.Subscribable

    constructor(config?: Subscribable.ConstructorProperties) 
    _init(config?: Subscribable.ConstructorProperties): void
}

export module Address {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Address {

    // Own properties of Camel-1.2.Camel.Address

    __gtype__: number

    // Own fields of Camel-1.2.Camel.Address

    parent: GObject.Object
    priv: AddressPrivate

    // Owm methods of Camel-1.2.Camel.Address

    // Has conflict: cat(source: Address): number
    /**
     * Copy the contents of one address into another.
     * @param source source #CamelAddress object
     * @returns the number of addresses copied
     */
    copy(source: Address): number
    // Has conflict: decode(raw: string | null): number
    // Has conflict: encode(): string | null
    // Has conflict: format(): string | null
    // Has conflict: length(): number
    /**
     * Clone an existing address type.
     * @returns the cloned address
     */
    newClone(): Address
    // Has conflict: remove(index: number): void
    // Has conflict: unformat(raw: string | null): number

    // Own virtual methods of Camel-1.2.Camel.Address

    /**
     * Concatenate one address onto another. The addresses must
     * be of the same type.
     * @virtual 
     * @param source source #CamelAddress object
     * @returns the number of addresses concatenated
     */
    cat(source: Address): number
    /**
     * Construct a new address from a raw address field.
     * @virtual 
     * @param raw raw address description
     * @returns the number of addresses parsed or -1 on fail
     */
    decode(raw: string | null): number
    /**
     * Encode an address in a format suitable for a raw header.
     * @virtual 
     * @returns the encoded address
     */
    encode(): string | null
    /**
     * Format an address in a format suitable for display.
     * @virtual 
     * @returns a newly allocated string containing the formatted addresses
     */
    format(): string | null
    /**
     * Get the number of addresses stored in the address `addr`.
     * @virtual 
     * @returns the number of addresses contained in @addr
     */
    length(): number
    /**
     * Remove an address by index, or all addresses.
     * @virtual 
     * @param index The address to remove, use -1 to remove all address.
     */
    remove(index: number): void
    /**
     * Attempt to convert a previously formatted and/or edited
     * address back into internal form.
     * @virtual 
     * @param raw raw address description
     * @returns the number of addresses parsed or -1 on fail
     */
    unformat(raw: string | null): number

    // Class property signals of Camel-1.2.Camel.Address

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Address extends GObject.Object {

    // Own properties of Camel-1.2.Camel.Address

    static name: string

    // Constructors of Camel-1.2.Camel.Address

    constructor(config?: Address.ConstructorProperties) 
    /**
     * Create a new #CamelAddress object.
     * @constructor 
     * @returns a new #CamelAddress object
     */
    constructor() 
    /**
     * Create a new #CamelAddress object.
     * @constructor 
     * @returns a new #CamelAddress object
     */
    static new(): Address
    _init(config?: Address.ConstructorProperties): void
}

export module BlockFile {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface BlockFile {

    // Own properties of Camel-1.2.Camel.BlockFile

    __gtype__: number

    // Own fields of Camel-1.2.Camel.BlockFile

    parent: GObject.Object
    priv: BlockFilePrivate

    // Owm methods of Camel-1.2.Camel.BlockFile

    /**
     * Reattach a block that has been detached.
     * @param bl a #CamelBlock
     */
    attachBlock(bl: Block): void
    /**
     * Deletes existing block file.
     * @returns 0 on success, -1 on error.
     */
    delete(): number
    /**
     * Detatch a block from the block file's cache.  The block should
     * be unref'd or attached when finished with.  The block file will
     * perform no writes of this block or flushing of it if the cache
     * fills.
     * @param bl a #CamelBlock
     */
    detachBlock(bl: Block): void
    freeBlock(id: _block_t): number
    getCacheLimit(): number
    getRoot(): BlockRoot
    getRootBlock(): Block
    /**
     * Renames existing block file to a new `path`.
     * @param path path with filename to rename to
     * @returns 0 on success, -1 on error; errno is set on failure
     */
    rename(path: string | null): number
    /**
     * Sets a new block cache limit for `bs`.
     * @param blockCacheLimit a new block cache limit to set
     */
    setCacheLimit(blockCacheLimit: number): void
    /**
     * Sync all dirty blocks to disk, including the root block.
     * @returns -1 on io error.
     */
    sync(): number
    /**
     * Flush a block to disk immediately.  The block will only
     * be flushed to disk if it is marked as dirty (touched).
     * @param bl a #CamelBlock
     * @returns -1 on io error.
     */
    syncBlock(bl: Block): number
    /**
     * Mark a block as dirty.  The block will be written to disk if
     * it ever expires from the cache.
     * @param bl a #CamelBlock
     */
    touchBlock(bl: Block): void
    /**
     * Mark a block as unused.  If a block is used it will not be
     * written to disk, or flushed from memory.
     * 
     * If a block is detatched and this is the last reference, the
     * block will be freed.
     * @param bl a #CamelBlock
     */
    unrefBlock(bl: Block): void

    // Own virtual methods of Camel-1.2.Camel.BlockFile

    initRoot(): number
    validateRoot(): number

    // Class property signals of Camel-1.2.Camel.BlockFile

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class BlockFile extends GObject.Object {

    // Own properties of Camel-1.2.Camel.BlockFile

    static name: string

    // Constructors of Camel-1.2.Camel.BlockFile

    constructor(config?: BlockFile.ConstructorProperties) 
    /**
     * Allocate a new block file, stored at `path`.  `version` contains an 8 character
     * version string which must match the head of the file, or the file will be
     * intitialised.
     * 
     * `block_size` is currently ignored and is set to CAMEL_BLOCK_SIZE.
     * @constructor 
     * @param path a path with file name of the new #CamelBlockFile
     * @param flags file open flags to use
     * @param version a version string
     * @param blockSize block size, currently ignored
     * @returns The new block file, or %NULL if it could not be created.
     */
    constructor(path: string | null, flags: number, version: string | null, blockSize: number) 
    /**
     * Allocate a new block file, stored at `path`.  `version` contains an 8 character
     * version string which must match the head of the file, or the file will be
     * intitialised.
     * 
     * `block_size` is currently ignored and is set to CAMEL_BLOCK_SIZE.
     * @constructor 
     * @param path a path with file name of the new #CamelBlockFile
     * @param flags file open flags to use
     * @param version a version string
     * @param blockSize block size, currently ignored
     * @returns The new block file, or %NULL if it could not be created.
     */
    static new(path: string | null, flags: number, version: string | null, blockSize: number): BlockFile
    _init(config?: BlockFile.ConstructorProperties): void
}

export module CertDB {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CertDB {

    // Own properties of Camel-1.2.Camel.CertDB

    __gtype__: number

    // Own fields of Camel-1.2.Camel.CertDB

    parent: GObject.Object
    priv: CertDBPrivate

    // Owm methods of Camel-1.2.Camel.CertDB

    clear(): void
    getHost(hostname: string | null, fingerprint: string | null): Cert | null
    /**
     * Gathers a list of known certificates. Each certificate in the returned #GSList
     * is referenced, thus unref it with camel_cert_unref() when done with it, the same
     * as free the list itself.
     * @returns Newly allocated list of   referenced CamelCert-s, which are stored in the @certdb.
     */
    listCerts(): Cert[]
    load(): number
    /**
     * Puts a certificate to the database. In case there exists a certificate
     * with the same hostname and fingerprint, then it is replaced. This adds
     * its own reference on the `cert`.
     * @param cert a #CamelCert
     */
    put(cert: Cert): void
    /**
     * Removes a certificate identified by the `hostname` and `fingerprint`.
     * @param hostname a host name of a certificate
     * @param fingerprint a fingerprint of a certificate
     */
    removeHost(hostname: string | null, fingerprint: string | null): void
    save(): number
    setDefault(): void
    setFilename(filename: string | null): void
    touch(): void

    // Own virtual methods of Camel-1.2.Camel.CertDB

    certLoad(istream: any | null): Cert
    certSave(cert: Cert, ostream: any | null): number
    headerLoad(istream: any | null): number
    headerSave(ostream: any | null): number

    // Class property signals of Camel-1.2.Camel.CertDB

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class CertDB extends GObject.Object {

    // Own properties of Camel-1.2.Camel.CertDB

    static name: string

    // Constructors of Camel-1.2.Camel.CertDB

    constructor(config?: CertDB.ConstructorProperties) 
    constructor() 
    static new(): CertDB
    _init(config?: CertDB.ConstructorProperties): void
    /**
     * FIXME Document me!
     */
    static getDefault(): CertDB
}

export module CipherContext {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.CipherContext

        session?: Session | null
    }

}

export interface CipherContext {

    // Own properties of Camel-1.2.Camel.CipherContext

    readonly session: Session
    __gtype__: number

    // Own fields of Camel-1.2.Camel.CipherContext

    parent: GObject.Object
    priv: CipherContextPrivate

    // Owm methods of Camel-1.2.Camel.CipherContext

    /**
     * Asynchronously decrypts `ipart` into `opart`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call camel_cipher_context_decrypt_finish() to get the result of
     * the operation.
     * @param ipart cipher-text #CamelMimePart
     * @param opart clear-text #CamelMimePart
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    decrypt(ipart: MimePart, opart: MimePart, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_cipher_context_decrypt().
     * @param result a #GAsyncResult
     * @returns a validity/encryption status, or %NULL on error
     */
    decryptFinish(result: Gio.AsyncResult): CipherValidity
    // Has conflict: decryptSync(ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null): CipherValidity
    /**
     * Asynchronously encrypts (and optionally signs) the clear-text `ipart` and
     * writes the resulting cipher-text to `opart`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call camel_cipher_context_encrypt_finish() to get the result of
     * the operation.
     * @param userid key id (or email address) to use when signing, or %NULL to not sign
     * @param recipients an array of recipient key IDs and/or email addresses
     * @param ipart clear-text #CamelMimePart
     * @param opart cipher-text #CamelMimePart
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    encrypt(userid: string | null, recipients: string[], ipart: MimePart, opart: MimePart, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_cipher_context_encrypt().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    encryptFinish(result: Gio.AsyncResult): boolean
    // Has conflict: encryptSync(userid: string | null, recipients: string[], ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null): boolean
    getSession(): Session
    // Has conflict: hashToId(hash: CipherHash): string | null
    // Has conflict: idToHash(id: string | null): CipherHash
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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    sign(userid: string | null, hash: CipherHash, ipart: MimePart, opart: MimePart, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_cipher_context_sign().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    signFinish(result: Gio.AsyncResult): boolean
    // Has conflict: signSync(userid: string | null, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously verifies the signature.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call camel_cipher_context_verify_finish() to get the result of
     * the operation.
     * @param ipart the #CamelMimePart to verify
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    verify(ipart: MimePart, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_cipher_context_verify().
     * @param result a #GAsyncResult
     * @returns a #CamelCipherValidity structure containing information about the integrity of the input stream, or %NULL on failure to execute at all
     */
    verifyFinish(result: Gio.AsyncResult): CipherValidity
    // Has conflict: verifySync(ipart: MimePart, cancellable: Gio.Cancellable | null): CipherValidity

    // Own virtual methods of Camel-1.2.Camel.CipherContext

    /**
     * Decrypts `ipart` into `opart`.
     * @virtual 
     * @param ipart cipher-text #CamelMimePart
     * @param opart clear-text #CamelMimePart
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns a validity/encryption status, or %NULL on error
     */
    decryptSync(ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null): CipherValidity
    /**
     * Encrypts (and optionally signs) the clear-text `ipart` and writes the
     * resulting cipher-text to `opart`.
     * @virtual 
     * @param userid key ID (or email address) to use when signing, or %NULL to not sign
     * @param recipients an array of recipient key IDs and/or email addresses
     * @param ipart clear-text #CamelMimePart
     * @param opart cipher-text #CamelMimePart
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    encryptSync(userid: string | null, recipients: string[], ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null): boolean
    hashToId(hash: CipherHash): string | null
    idToHash(id: string | null): CipherHash
    /**
     * Converts the (unsigned) part `ipart` into a new self-contained MIME
     * part `opart`.  This may be a multipart/signed part, or a simple part
     * for enveloped types.
     * @virtual 
     * @param userid a private key to use to sign the stream
     * @param hash preferred Message-Integrity-Check hash algorithm
     * @param ipart input #CamelMimePart
     * @param opart output #CamelMimePart
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    signSync(userid: string | null, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null): boolean
    /**
     * Verifies the signature.
     * @virtual 
     * @param ipart the #CamelMimePart to verify
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns a #CamelCipherValidity structure containing information about the integrity of the input stream, or %NULL on failure to execute at all
     */
    verifySync(ipart: MimePart, cancellable: Gio.Cancellable | null): CipherValidity

    // Class property signals of Camel-1.2.Camel.CipherContext

    connect(sigName: "notify::session", callback: (...args: any[]) => void): number
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class CipherContext extends GObject.Object {

    // Own properties of Camel-1.2.Camel.CipherContext

    static name: string

    // Constructors of Camel-1.2.Camel.CipherContext

    constructor(config?: CipherContext.ConstructorProperties) 
    /**
     * This creates a new CamelCipherContext object which is used to sign,
     * verify, encrypt and decrypt streams.
     * @constructor 
     * @param session a #CamelSession
     * @returns the new CamelCipherContext
     */
    constructor(session: Session) 
    /**
     * This creates a new CamelCipherContext object which is used to sign,
     * verify, encrypt and decrypt streams.
     * @constructor 
     * @param session a #CamelSession
     * @returns the new CamelCipherContext
     */
    static new(session: Session): CipherContext
    _init(config?: CipherContext.ConstructorProperties): void
}

export module DB {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DB {

    // Own properties of Camel-1.2.Camel.DB

    __gtype__: number

    // Owm methods of Camel-1.2.Camel.DB

    /**
     * Ends an ongoing transaction by ignoring the changes.
     * @returns 0 on success, -1 on error
     */
    abortTransaction(): number
    /**
     * Adds a statement to an ongoing transaction.
     * @param query an SQL (SQLite) statement
     * @returns 0 on success, -1 on error
     */
    addToTransaction(query: string | null): number
    /**
     * Begins transaction. End it with camel_db_end_transaction() or camel_db_abort_transaction().
     * @returns 0 on success, -1 on error
     */
    beginTransaction(): number
    /**
     * Deletes the given folder from the 'folders' table and empties
     * its message info table.
     * @param folderName full name of the folder
     * @returns 0 on success, -1 on error
     */
    clearFolderSummary(folderName: string | null): number
    /**
     * Executes an SQLite command.
     * @param stmt an SQL (SQLite) statement to execute
     * @returns 0 on success, -1 on error
     */
    command(stmt: string | null): number
    /**
     * Counts how many deleted messages is stored in the given table.
     * @param tableName name of the table
     * @returns 0 on success, -1 on error
     */
    countDeletedMessageInfo(tableName: string | null): [ /* returnType */ number, /* count */ number ]
    /**
     * Counts how many junk messages is stored in the given table.
     * @param tableName name of the table
     * @returns 0 on success, -1 on error
     */
    countJunkMessageInfo(tableName: string | null): [ /* returnType */ number, /* count */ number ]
    countJunkNotDeletedMessageInfo(tableName: string | null, count: number): number
    /**
     * Executes a COUNT() query (like "SELECT COUNT(*) FROM table") and provides
     * the result of it as an unsigned 32-bit integer.
     * @param query a COUNT() query
     * @returns 0 on success, -1 on error
     */
    countMessageInfo(query: string | null): [ /* returnType */ number, /* count */ number ]
    /**
     * Counts how many messages is stored in the given table.
     * @param tableName name of the table
     * @returns 0 on success, -1 on error
     */
    countTotalMessageInfo(tableName: string | null): [ /* returnType */ number, /* count */ number ]
    /**
     * Counts how many unread messages is stored in the given table.
     * @param tableName name of the table
     * @returns 0 on success, -1 on error
     */
    countUnreadMessageInfo(tableName: string | null): [ /* returnType */ number, /* count */ number ]
    /**
     * Counts how many visible (not deleted and not junk) messages is stored in the given table.
     * @param tableName name of the table
     * @returns 0 on success, -1 on error
     */
    countVisibleMessageInfo(tableName: string | null): [ /* returnType */ number, /* count */ number ]
    /**
     * Counts how many visible (not deleted and not junk) and unread messages is stored in the given table.
     * @param tableName name of the table
     * @returns 0 on success, -1 on error
     */
    countVisibleUnreadMessageInfo(tableName: string | null): [ /* returnType */ number, /* count */ number ]
    /**
     * Creates a 'folders' table, if it doesn't exist yet.
     * @returns 0 on success, -1 on error
     */
    createFoldersTable(): number
    /**
     * Deletes the given folder from the 'folders' table and also drops
     * its message info table.
     * @param folderName full name of the folder
     * @returns 0 on success, -1 on error
     */
    deleteFolder(folderName: string | null): number
    /**
     * Deletes single mesage info in the given folder with
     * the given UID.
     * @param folderName full name of the folder
     * @param uid a message info UID to delete
     * @returns 0 on success, -1 on error
     */
    deleteUid(folderName: string | null, uid: string | null): number
    /**
     * Deletes a list of message UIDs as one transaction.
     * @param folderName full name of the folder
     * @param uids A #GList of uids
     * @returns 0 on success, -1 on error
     */
    deleteUids(folderName: string | null, uids: string[]): number
    /**
     * Ends an ongoing transaction by committing the changes.
     * @returns 0 on success, -1 on error
     */
    endTransaction(): number
    /**
     * A pair function for camel_db_start_in_memory_transactions(),
     * to commit the changes to `folder_name` and free the in-memory table.
     * @param folderName full name of the folder
     * @returns 0 on success, -1 on error
     */
    flushInMemoryTransactions(folderName: string | null): number
    getFilename(): string | null
    getFolderDeletedUids(folderName: string | null): string[] | null
    getFolderJunkUids(folderName: string | null): string[] | null
    /**
     * Fills hash with uid->GUINT_TO_POINTER (flag). Use camel_pstring_free()
     * to free the keys of the `hash`.
     * @param folderName full name of the folder
     * @param sortBy optional ORDER BY clause (without the "ORDER BY" prefix)
     * @param collate optional collate function name to use
     * @param hash a hash table to fill
     * @returns 0 on success, -1 on error
     */
    getFolderUids(folderName: string | null, sortBy: string | null, collate: string | null, hash: GLib.HashTable): number
    /**
     * Runs a `cdb` maintenance, which includes vacuum, if necessary.
     * @returns Whether succeeded.
     */
    maybeRunMaintenance(): boolean
    /**
     * Prepares message info table for the given folder.
     * @param folderName full name of the folder
     * @returns 0 on success, -1 on error
     */
    prepareMessageInfoTable(folderName: string | null): number
    /**
     * reads folder information for the given folder and stores it into the `record`.
     * @param folderName full name of the folder
     * @returns 0 on success, -1 on error
     */
    readFolderInfoRecord(folderName: string | null): [ /* returnType */ number, /* record */ FIRecord ]
    /**
     * Selects single message info for the given `uid` in folder `folder_name` and calls
     * the `callback` for it.
     * @param folderName full name of the folder
     * @param uid a message info UID to read the record for
     * @param callback callback to call for the found row
     * @returns 0 on success, -1 on error
     */
    readMessageInfoRecordWithUid(folderName: string | null, uid: string | null, callback: DBSelectCB): number
    /**
     * Reads all mesasge info records for the given folder and calls `callback` for them.
     * @param folderName full name of the folder
     * @param callback callback to call for each found row
     * @returns 0 on success, -1 on error
     */
    readMessageInfoRecords(folderName: string | null, callback: DBSelectCB): number
    /**
     * Renames tables for the `old_folder_name` to be used with `new_folder_name`.
     * @param oldFolderName full name of the existing folder
     * @param newFolderName full name of the folder to rename it to
     * @returns 0 on success, -1 on error
     */
    renameFolder(oldFolderName: string | null, newFolderName: string | null): number
    /**
     * Sets a version number for the given folder.
     * @param folderName full name of the folder
     * @param resetVersion version number to set
     * @returns 0 on success, -1 on error
     */
    resetFolderVersion(folderName: string | null, resetVersion: number): number
    /**
     * Executes a SELECT staement and calls the `callback` for each selected row.
     * @param stmt a SELECT statment to execute
     * @param callback a callback to call for each row
     * @returns 0 on success, -1 on error
     */
    select(stmt: string | null, callback: DBSelectCB): number
    /**
     * Defines a collation `collate,` which can be used in SQL (SQLite)
     * statement as a collation function. The `func` is called when
     * colation is used.
     * @param col a column name; currently unused
     * @param collate collation name
     * @param func a #CamelDBCollate collation function
     */
    setCollate(col: string | null, collate: string | null, func: DBCollate): number
    /**
     * Creates an in-memory table for a batch transactions. Use camel_db_flush_in_memory_transactions()
     * to commit the changes and free the in-memory table.
     * @returns 0 on success, -1 on error
     */
    startInMemoryTransactions(): number
    /**
     * Runs the list of commands as a single transaction.
     * @param qryList A #GList of querries
     * @returns 0 on success, -1 on error
     */
    transactionCommand(qryList: string[]): number
    /**
     * Write the `record` to the 'folders' table.
     * @param record a #CamelFIRecord
     * @returns 0 on success, -1 on error
     */
    writeFolderInfoRecord(record: FIRecord): number
    /**
     * Write the `record` to the message info table of the given folder.
     * @param folderName full name of the folder
     * @param record a #CamelMIRecord
     * @returns 0 on success, -1 on error
     */
    writeMessageInfoRecord(folderName: string | null, record: MIRecord): number

    // Class property signals of Camel-1.2.Camel.DB

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DB extends GObject.Object {

    // Own properties of Camel-1.2.Camel.DB

    static name: string

    // Constructors of Camel-1.2.Camel.DB

    constructor(config?: DB.ConstructorProperties) 
    constructor(filename: string | null) 
    static new(filename: string | null): DB
    _init(config?: DB.ConstructorProperties): void
    /**
     * Frees the `record` and all of its associated data.
     * @param record a #CamelMIRecord
     */
    static camelMirFree(record: MIRecord | null): void
    static errorQuark(): GLib.Quark
    /**
     * Frees a string previosuly returned by camel_db_sqlize_string().
     * @param string a string to free
     */
    static freeSqlizedString(string: string | null): void
    /**
     * Traverses column name from index `index` into an enum
     * #CamelDBKnownColumnNames value.  The `col_names` contains `ncols` columns.
     * First time this is called is created the `hash` from col_names indexes into
     * the enum, and this is reused for every other call.  The function expects
     * that column names are returned always in the same order.  When all rows
     * are read the `hash` table can be freed with g_hash_table_destroy().
     * @param hash a #GHashTable
     * @param index an index to start with, between 0 and `ncols`
     * @param colNames column names to traverse
     */
    static getColumnIdent(hash: GLib.HashTable, index: number, colNames: string[]): [ /* returnType */ DBKnownColumnNames, /* hash */ GLib.HashTable ]
    static getColumnName(rawName: string | null): string | null
    /**
     * Instructs sqlite to release its memory, if possible. This can be avoided
     * when CAMEL_SQLITE_FREE_CACHE environment variable is set.
     */
    static releaseCacheMemory(): void
    /**
     * Converts the `string` to be usable in the SQLite statements.
     * @param string a string to "sqlize"
     * @returns A newly allocated sqlized @string. The returned    value should be freed with camel_db_sqlize_string(), when no longer needed.
     */
    static sqlizeString(string: string | null): string | null
}

export module DataCache {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.DataCache

        expireEnabled?: boolean | null
        path?: string | null
    }

}

export interface DataCache {

    // Own properties of Camel-1.2.Camel.DataCache

    expireEnabled: boolean
    path: string | null
    __gtype__: number

    // Own fields of Camel-1.2.Camel.DataCache

    parent: GObject.Object
    priv: DataCachePrivate

    // Owm methods of Camel-1.2.Camel.DataCache

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
    add(path: string | null, key: string | null): Gio.IOStream
    /**
     * Clear cache's content in `path`.
     * @param path Path to the (sub) cache the item exists in.
     */
    clear(path: string | null): void
    /**
     * Traverses the `cdc` sub-cache identified by `path` and calls `func` for each found file.
     * If the `func` returns %TRUE, then the file is removed, if %FALSE, it's kept in the cache.
     * @param path Path to the (sub) cache the items exist in
     * @param func a callback to call for each found file in the cache
     */
    foreachRemove(path: string | null, func: DataCacheRemoveFunc): void
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
    get(path: string | null, key: string | null): Gio.IOStream
    /**
     * Gets whether expire of cache data is enabled.
     * 
     * This is a complementary property for camel_data_cache_set_expire_age()
     * and camel_data_cache_set_expire_access(), which allows to disable expiry
     * without touching the two values. Having expire enabled, but not have set
     * any of the two times, still behaves like not having expiry enabled.
     * @returns Whether expire is enabled.
     */
    getExpireEnabled(): boolean
    /**
     * Lookup the filename for an item in the cache
     * @param path Path to the (sub) cache the item exists in.
     * @param key Key for the cache item.
     * @returns The filename for a cache item
     */
    getFilename(path: string | null, key: string | null): string | null
    /**
     * Returns the path to the data cache.
     * @returns the path to the data cache
     */
    getPath(): string | null
    /**
     * Remove/expire a cache item.
     * @param path Path to the (sub) cache the item exists in.
     * @param key Key for the cache item.
     * @returns 0 on success, -1 on error
     */
    remove(path: string | null, key: string | null): number
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
    setExpireAccess(when: number): void
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
    setExpireAge(when: number): void
    /**
     * Sets whether expire of cache data is enabled.
     * 
     * This is a complementary property for camel_data_cache_set_expire_age()
     * and camel_data_cache_set_expire_access(), which allows to disable expiry
     * without touching the two values. Having expire enabled, but not have set
     * any of the two times, still behaves like not having expiry enabled.
     * @param expireEnabled a value to set
     */
    setExpireEnabled(expireEnabled: boolean): void
    /**
     * Sets the path to the data cache.
     * @param path path to the data cache
     */
    setPath(path: string | null): void

    // Class property signals of Camel-1.2.Camel.DataCache

    connect(sigName: "notify::expire-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::expire-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expire-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expire-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expire-enabled", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DataCache extends GObject.Object {

    // Own properties of Camel-1.2.Camel.DataCache

    static name: string

    // Constructors of Camel-1.2.Camel.DataCache

    constructor(config?: DataCache.ConstructorProperties) 
    /**
     * Create a new data cache.
     * @constructor 
     * @param path Base path of cache, subdirectories will be created here.
     * @returns A new cache object, or %NULL if the base path cannot    be written to.
     */
    constructor(path: string | null) 
    /**
     * Create a new data cache.
     * @constructor 
     * @param path Base path of cache, subdirectories will be created here.
     * @returns A new cache object, or %NULL if the base path cannot    be written to.
     */
    static new(path: string | null): DataCache
    _init(config?: DataCache.ConstructorProperties): void
}

export module DataWrapper {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DataWrapper {

    // Own properties of Camel-1.2.Camel.DataWrapper

    __gtype__: number

    // Own fields of Camel-1.2.Camel.DataWrapper

    parent: GObject.Object
    priv: DataWrapperPrivate

    // Owm methods of Camel-1.2.Camel.DataWrapper

    /**
     * Calculates decoded size of the `data_wrapper` by saving it to a null-stream
     * and returns how many bytes had been written. It's using
     * camel_data_wrapper_decode_to_stream_sync() internally.
     * @param cancellable a #GCancellable, or %NULL
     * @returns how many bytes the @data_wrapper would use when saved,   or -1 on error.
     */
    calculateDecodedSizeSync(cancellable: Gio.Cancellable | null): number
    /**
     * Calculates size of the `data_wrapper` by saving it to a null-stream
     * and returns how many bytes had been written. It's using
     * camel_data_wrapper_write_to_stream_sync() internally.
     * @param cancellable a #GCancellable, or %NULL
     * @returns how many bytes the @data_wrapper would use when saved,   or -1 on error.
     */
    calculateSizeSync(cancellable: Gio.Cancellable | null): number
    /**
     * Constructs the content of `data_wrapper` from `data` of length `data_len`.
     * @param data data to set
     * @param dataLen length of `data`
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    constructFromDataSync(data: any, dataLen: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously constructs the content of `data_wrapper` from `input_stream`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_data_wrapper_construct_from_input_stream_finish() to get the
     * result of the operation.
     * @param inputStream a #GInputStream
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    constructFromInputStream(inputStream: Gio.InputStream, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with
     * camel_data_wrapper_construct_from_input_stream().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    constructFromInputStreamFinish(result: Gio.AsyncResult): boolean
    // Has conflict: constructFromInputStreamSync(inputStream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously constructs the content of `data_wrapper` from the given
     * `stream`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_data_wrapper_construct_from_stream_finish() to get the result
     * of the operation.
     * @param stream an input #CamelStream
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    constructFromStream(stream: Stream, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with
     * camel_data_wrapper_construct_from_stream().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    constructFromStreamFinish(result: Gio.AsyncResult): boolean
    // Has conflict: constructFromStreamSync(stream: Stream, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously writes the decoded data content to `output_stream`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_data_wrapper_decode_to_output_stream_finish() to get the result
     * of the operation.
     * @param outputStream a #GOutputStream
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    decodeToOutputStream(outputStream: Gio.OutputStream, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with
     * camel_data_wrapper_decode_to_output_stream().
     * @param result a #GAsyncResult
     * @returns the number of bytes written, or -1 on error
     */
    decodeToOutputStreamFinish(result: Gio.AsyncResult): number
    // Has conflict: decodeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable: Gio.Cancellable | null): number
    /**
     * Asynchronously writes the decoded data content to `stream`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_data_wrapper_decode_to_stream_finish() to get the result of
     * the operation.
     * @param stream a #CamelStream for decoded data to be written to
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    decodeToStream(stream: Stream, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_data_wrapper_decode_to_stream().
     * @param result a #GAsyncResult
     * @returns the number of bytes written, or -1 on error
     */
    decodeToStreamFinish(result: Gio.AsyncResult): number
    // Has conflict: decodeToStreamSync(stream: Stream, cancellable: Gio.Cancellable | null): number
    /**
     * Returns the #GByteArray being used to hold the contents of `data_wrapper`.
     * 
     * Note, it's up to the caller to use this in a thread-safe manner.
     * @returns the #GByteArray for @data_wrapper
     */
    getByteArray(): Uint8Array
    getEncoding(): TransferEncoding
    // Has conflict: getMimeType(): string | null
    // Has conflict: getMimeTypeField(): ContentType | null
    // Has conflict: isOffline(): boolean
    /**
     * Sets encoding (#CamelTransferEncoding) for the `data_wrapper`.
     * It doesn't re-encode the content, if the encoding changes.
     * @param encoding an encoding to set
     */
    setEncoding(encoding: TransferEncoding): void
    // Has conflict: setMimeType(mimeType: string | null): void
    // Has conflict: setMimeTypeField(mimeType: ContentType | null): void
    /**
     * Sets whether the `data_wrapper` is "offline". It applies only to this
     * concrete instance. See camel_data_wrapper_is_offline().
     * @param offline whether the `data_wrapper` is "offline"
     */
    setOffline(offline: boolean): void
    /**
     * Sets mime-type filed to be `mime_type` and consumes it, aka unlike
     * camel_data_wrapper_set_mime_type_field(), this doesn't add its own
     * reference to `mime_type`.
     * 
     * It suffers from the same flaws as camel_data_wrapper_set_mime_type().
     * @param mimeType a #CamelContentType
     */
    takeMimeTypeField(mimeType: ContentType | null): void
    /**
     * Asynchronously writes the content of `data_wrapper` to `output_stream` in
     * a machine-independent format appropriate for the data.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_data_wrapper_write_to_output_stream_finish() to get the result
     * of the operation.
     * @param outputStream a #GOutputStream
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    writeToOutputStream(outputStream: Gio.OutputStream, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with
     * camel_data_wrapper_write_to_output_stream().
     * @param result a #GAsyncResult
     * @returns the number of bytes written, or -1 on error
     */
    writeToOutputStreamFinish(result: Gio.AsyncResult): number
    // Has conflict: writeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable: Gio.Cancellable | null): number
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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    writeToStream(stream: Stream, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_data_wrapper_write_to_stream().
     * @param result a #GAsyncResult
     * @returns the number of bytes written, or -1 or error
     */
    writeToStreamFinish(result: Gio.AsyncResult): number
    // Has conflict: writeToStreamSync(stream: Stream, cancellable: Gio.Cancellable | null): number

    // Own virtual methods of Camel-1.2.Camel.DataWrapper

    /**
     * Constructs the content of `data_wrapper` from `input_stream`.
     * @virtual 
     * @param inputStream a #GInputStream
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    constructFromInputStreamSync(inputStream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean
    /**
     * Constructs the content of `data_wrapper` from the given `stream`.
     * @virtual 
     * @param stream an input #CamelStream
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    constructFromStreamSync(stream: Stream, cancellable: Gio.Cancellable | null): boolean
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
     * @virtual 
     * @param outputStream a #GOutputStream
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the number of bytes written, or -1 on error
     */
    decodeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable: Gio.Cancellable | null): number
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
     * @virtual 
     * @param stream a #CamelStream for decoded data to be written to
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the number of bytes written, or -1 on error
     */
    decodeToStreamSync(stream: Stream, cancellable: Gio.Cancellable | null): number
    getMimeType(): string | null
    getMimeTypeField(): ContentType | null
    isOffline(): boolean
    /**
     * This sets the data wrapper's MIME type.
     * 
     * It might fail, but you won't know. It will allow you to set
     * Content-Type parameters on the data wrapper, which are meaningless.
     * You should not be allowed to change the MIME type of a data wrapper
     * that contains data, or at least, if you do, it should invalidate the
     * data.
     * @virtual 
     * @param mimeType a MIME type
     */
    setMimeType(mimeType: string | null): void
    /**
     * This sets the data wrapper's MIME type. It adds its own reference
     * to `mime_type,` if not %NULL.
     * 
     * It suffers from the same flaws as camel_data_wrapper_set_mime_type().
     * @virtual 
     * @param mimeType a #CamelContentType
     */
    setMimeTypeField(mimeType: ContentType | null): void
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
     * @virtual 
     * @param outputStream a #GOutputStream
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the number of bytes written, or -1 on error
     */
    writeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable: Gio.Cancellable | null): number
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
     * @virtual 
     * @param stream a #CamelStream for output
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the number of bytes written, or -1 on error
     */
    writeToStreamSync(stream: Stream, cancellable: Gio.Cancellable | null): number

    // Class property signals of Camel-1.2.Camel.DataWrapper

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DataWrapper extends GObject.Object {

    // Own properties of Camel-1.2.Camel.DataWrapper

    static name: string

    // Constructors of Camel-1.2.Camel.DataWrapper

    constructor(config?: DataWrapper.ConstructorProperties) 
    /**
     * Create a new #CamelDataWrapper object.
     * @constructor 
     * @returns a new #CamelDataWrapper object
     */
    constructor() 
    /**
     * Create a new #CamelDataWrapper object.
     * @constructor 
     * @returns a new #CamelDataWrapper object
     */
    static new(): DataWrapper
    _init(config?: DataWrapper.ConstructorProperties): void
}

export module FilterDriver {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FilterDriver {

    // Own properties of Camel-1.2.Camel.FilterDriver

    __gtype__: number

    // Own fields of Camel-1.2.Camel.FilterDriver

    parent: GObject.Object
    priv: FilterDriverPrivate

    // Owm methods of Camel-1.2.Camel.FilterDriver

    /**
     * Adds a new rule to set of rules to process by the filter driver.
     * @param name name of the rule
     * @param match a code (#CamelSExp) to execute to check whether the rule can be applied
     * @param action an action code (#CamelSExp) to execute, when the `match` evaluates to %TRUE
     */
    addRule(name: string | null, match: string | null, action: string | null): void
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
    filterFolder(folder: Folder, cache: UIDCache, uids: string[] | null, remove: boolean, cancellable: Gio.Cancellable | null): number
    /**
     * Filters an mbox file based on rules defined in the FilterDriver
     * object. Is more efficient as it doesn't need to open the folder
     * through Camel directly.
     * @param mbox mbox filename to be filtered
     * @param originalSourceUrl URI of the `mbox,` or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns -1 if errors were encountered during filtering, otherwise returns 0.
     */
    filterMbox(mbox: string | null, originalSourceUrl: string | null, cancellable: Gio.Cancellable | null): number
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
     * @param storeUid UID of source store, or %NULL
     * @param originalStoreUid UID of source store (pre-movemail), or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns -1 if errors were encountered during filtering, otherwise returns 0.
     */
    filterMessage(message: MimeMessage | null, info: MessageInfo | null, uid: string | null, source: Folder | null, storeUid: string | null, originalStoreUid: string | null, cancellable: Gio.Cancellable | null): number
    /**
     * Flush all of the only-once filter actions.
     */
    flush(): void
    /**
     * Removes a rule by name, added by camel_filter_driver_add_rule().
     * @param name rule name
     * @returns Whether the rule had been found and removed.
     */
    removeRuleByName(name: string | null): boolean
    /**
     * Sets a default folder for the driver. The function adds
     * its own reference for the folder.
     * @param def a default #CamelFolder
     */
    setDefaultFolder(def: Folder | null): void
    /**
     * Sets a log file to use for logging.
     * @param logfile a FILE handle where to write logging
     */
    setLogfile(logfile: any | null): void
    /**
     * Sets a callback to call when a play of a sound is requested.
     * @param func a callback to play a sound
     */
    setPlaySoundFunc(func: FilterPlaySoundFunc): void
    /**
     * Sets a shell command callback, which is called when a shell command
     * execution is requested.
     * @param func a shell command callback
     */
    setShellFunc(func: FilterShellFunc): void
    /**
     * Sets a status callback, which is used to report progress/status.
     * @param func a callback to report progress
     */
    setStatusFunc(func: FilterStatusFunc): void
    /**
     * Sets a callback to use for system beep.
     * @param func a system beep callback
     */
    setSystemBeepFunc(func: FilterSystemBeepFunc): void

    // Class property signals of Camel-1.2.Camel.FilterDriver

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FilterDriver extends GObject.Object {

    // Own properties of Camel-1.2.Camel.FilterDriver

    static name: string

    // Constructors of Camel-1.2.Camel.FilterDriver

    constructor(config?: FilterDriver.ConstructorProperties) 
    constructor(session: Session) 
    static new(session: Session): FilterDriver
    _init(config?: FilterDriver.ConstructorProperties): void
}

export module FilterInputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.FilterInputStream.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.FilterInputStream

        filter?: MimeFilter | null
    }

}

export interface FilterInputStream {

    // Own properties of Camel-1.2.Camel.FilterInputStream

    readonly filter: MimeFilter
    __gtype__: number

    // Conflicting properties

    parentInstance: any

    // Own fields of Camel-1.2.Camel.FilterInputStream

    parent: Gio.FilterInputStream
    priv: FilterInputStreamPrivate

    // Owm methods of Camel-1.2.Camel.FilterInputStream

    /**
     * Gets the #CamelMimeFilter that is used by `filter_stream`.
     * @returns a #CamelMimeFilter
     */
    getFilter(): MimeFilter

    // Class property signals of Camel-1.2.Camel.FilterInputStream

    connect(sigName: "notify::filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::close-base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FilterInputStream extends Gio.FilterInputStream {

    // Own properties of Camel-1.2.Camel.FilterInputStream

    static name: string

    // Constructors of Camel-1.2.Camel.FilterInputStream

    constructor(config?: FilterInputStream.ConstructorProperties) 
    /**
     * Creates a new filtered input stream for the `base_stream`.
     * @constructor 
     * @param baseStream a #GInputStream
     * @param filter a #CamelMimeFilter
     * @returns a new #GInputStream
     */
    constructor(baseStream: Gio.InputStream, filter: MimeFilter) 
    /**
     * Creates a new filtered input stream for the `base_stream`.
     * @constructor 
     * @param baseStream a #GInputStream
     * @param filter a #CamelMimeFilter
     * @returns a new #GInputStream
     */
    static new(baseStream: Gio.InputStream, filter: MimeFilter): FilterInputStream
    _init(config?: FilterInputStream.ConstructorProperties): void
}

export module FilterOutputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.FilterOutputStream.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.FilterOutputStream

        filter?: MimeFilter | null
    }

}

export interface FilterOutputStream {

    // Own properties of Camel-1.2.Camel.FilterOutputStream

    readonly filter: MimeFilter
    __gtype__: number

    // Conflicting properties

    parentInstance: any

    // Own fields of Camel-1.2.Camel.FilterOutputStream

    parent: Gio.FilterOutputStream
    priv: FilterOutputStreamPrivate

    // Owm methods of Camel-1.2.Camel.FilterOutputStream

    /**
     * Gets the #CamelMimeFilter that is used by `filter_stream`.
     * @returns a #CamelMimeFilter
     */
    getFilter(): MimeFilter

    // Class property signals of Camel-1.2.Camel.FilterOutputStream

    connect(sigName: "notify::filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::close-base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FilterOutputStream extends Gio.FilterOutputStream {

    // Own properties of Camel-1.2.Camel.FilterOutputStream

    static name: string

    // Constructors of Camel-1.2.Camel.FilterOutputStream

    constructor(config?: FilterOutputStream.ConstructorProperties) 
    /**
     * Creates a new filtered output stream for the `base_stream`.
     * @constructor 
     * @param baseStream a #GOutputStream
     * @param filter a #CamelMimeFilter
     * @returns a new #GOutputStream
     */
    constructor(baseStream: Gio.OutputStream, filter: MimeFilter) 
    /**
     * Creates a new filtered output stream for the `base_stream`.
     * @constructor 
     * @param baseStream a #GOutputStream
     * @param filter a #CamelMimeFilter
     * @returns a new #GOutputStream
     */
    static new(baseStream: Gio.OutputStream, filter: MimeFilter): FilterOutputStream
    _init(config?: FilterOutputStream.ConstructorProperties): void
}

export module Folder {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (changes: FolderChangeInfo): void
    }

    /**
     * Signal callback interface for `deleted`
     */
    export interface DeletedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `renamed`
     */
    export interface RenamedSignalCallback {
        (oldName: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.Folder

        /**
         * The folder's description.
         */
        description?: string | null
        /**
         * The folder's display name.
         */
        displayName?: string | null
        /**
         * The folder's fully qualified name.
         */
        fullName?: string | null
        /**
         * A #CamelThreeState persistent option of the folder,
         * which can override global option to mark messages
         * as seen after certain interval.
         */
        markSeen?: ThreeState | null
        /**
         * Timeout in milliseconds for marking messages as seen.
         */
        markSeenTimeout?: number | null
        /**
         * The #CamelStore to which the folder belongs.
         */
        parentStore?: Store | null
    }

}

export interface Folder {

    // Own properties of Camel-1.2.Camel.Folder

    /**
     * The folder's description.
     */
    description: string | null
    /**
     * The folder's display name.
     */
    displayName: string | null
    /**
     * The folder's fully qualified name.
     */
    fullName: string | null
    /**
     * A #CamelThreeState persistent option of the folder,
     * which can override global option to mark messages
     * as seen after certain interval.
     */
    markSeen: ThreeState
    /**
     * Timeout in milliseconds for marking messages as seen.
     */
    markSeenTimeout: number
    /**
     * The #CamelStore to which the folder belongs.
     */
    readonly parentStore: Store
    __gtype__: number

    // Own fields of Camel-1.2.Camel.Folder

    parent: Object & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.Folder

    /**
     * Appends `message` to `folder` asynchronously.  Only the flag and tag data
     * from `info` are used.  If `info` is %NULL, no flags or tags will be set.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call camel_folder_append_message_finish() to get the result of
     * the operation.
     * @param message a #CamelMimeMessage
     * @param info a #CamelMessageInfo with additional flags/etc to set        on the new message, or %NULL
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    appendMessage(message: MimeMessage, info: MessageInfo | null, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_folder_append_message_finish().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    appendMessageFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* appendedUid */ string | null ]
    // Has conflict: appendMessageSync(message: MimeMessage, info: MessageInfo | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* appendedUid */ string | null ]
    // Has conflict: changed(changes: FolderChangeInfo): void
    // Has conflict: cmpUids(uid1: string | null, uid2: string | null): number
    // Has conflict: countByExpression(expression: string | null, cancellable: Gio.Cancellable | null): number
    // Has conflict: delete(): void
    /**
     * Thread-safe variation of camel_folder_get_description().
     * Use this function when accessing `folder` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #CamelFolder:description
     */
    dupDescription(): string | null
    /**
     * Thread-safe variation of camel_folder_get_display_name().
     * Use this function when accessing `folder` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #CamelFolder:display-name
     */
    dupDisplayName(): string | null
    /**
     * Thread-safe variation of camel_folder_get_full_name().
     * Use this function when accessing `folder` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #CamelFolder:full-name
     */
    dupFullName(): string | null
    /**
     * Asynchronously deletes messages which have been marked as "DELETED".
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_folder_expunge_finish() to get the result of the operation.
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    expunge(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_folder_expunge().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    expungeFinish(result: Gio.AsyncResult): boolean
    // Has conflict: expungeSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Frees the provided array and its contents. Used by #CamelFolder
     * subclasses as an implementation for free_uids when the provided
     * information was created explicitly by the corresponding get_ call.
     * @param array an array of uids
     */
    freeDeep(array: string[]): void
    /**
     * Frees the provided array but not its contents. Used by #CamelFolder
     * subclasses as an implementation for free_uids or free_summary when
     * the returned array needs to be freed but its contents come from
     * "static" information.
     * @param array an array of uids or #CamelMessageInfo
     */
    freeShallow(array: string[]): void
    // Has conflict: freeSummary(array: MessageInfo[]): void
    // Has conflict: freeUids(array: string[]): void
    // Has conflict: freeze(): void
    getDeletedMessageCount(): number
    /**
     * Returns a description of the folder suitable for displaying to the user.
     * @returns a description of the folder
     */
    getDescription(): string | null
    /**
     * Returns the display name for the folder.  The fully qualified name
     * can be obtained with camel_folder_get_full_name().
     * @returns the display name of the folder
     */
    getDisplayName(): string | null
    // Has conflict: getFilename(uid: string | null): string | null
    getFlags(): number
    getFolderSummary(): FolderSummary
    getFrozenCount(): number
    // Has conflict: getFullDisplayName(): string | null
    /**
     * Returns the fully qualified name of the folder.
     * @returns the fully qualified name of the folder
     */
    getFullName(): string | null
    getMarkSeen(): ThreeState
    getMarkSeenTimeout(): number
    /**
     * Asynchronously gets the message corresponding to `message_uid` from `folder`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_folder_get_message_finish() to get the result of the operation.
     * @param messageUid the message UID
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    getMessage(messageUid: string | null, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: getMessageCached(messageUid: string | null, cancellable: Gio.Cancellable | null): MimeMessage | null
    // Has conflict: getMessageCount(): number
    /**
     * Finishes the operation started with camel_folder_get_message().
     * @param result a #GAsyncResult
     * @returns a #CamelMimeMessage corresponding to the requested UID
     */
    getMessageFinish(result: Gio.AsyncResult): MimeMessage
    // Has conflict: getMessageFlags(uid: string | null): number
    // Has conflict: getMessageInfo(uid: string | null): MessageInfo | null
    // Has conflict: getMessageSync(messageUid: string | null, cancellable: Gio.Cancellable | null): MimeMessage
    // Has conflict: getMessageUserFlag(uid: string | null, name: string | null): boolean
    // Has conflict: getMessageUserTag(uid: string | null, name: string | null): string | null
    getParentStore(): any | null
    // Has conflict: getPermanentFlags(): number
    /**
     * Asynchronously gets a list of known quotas for `folder`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call camel_folder_get_quota_info_finish() to get the result of
     * the operation.
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    getQuotaInfo(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getQuotaInfoFinish(result: Gio.AsyncResult): FolderQuotaInfo
    // Has conflict: getQuotaInfoSync(cancellable: Gio.Cancellable | null): FolderQuotaInfo
    // Has conflict: getSummary(): string[]
    // Has conflict: getUids(): string[]
    // Has conflict: getUncachedUids(uids: string[]): string[]
    getUnreadMessageCount(): number
    /**
     * Get whether or not the folder has a summary.
     * @returns %TRUE if a summary is available or %FALSE otherwise
     */
    hasSummaryCapability(): boolean
    // Has conflict: isFrozen(): boolean
    /**
     * Locks `folder`. Unlock it with camel_folder_unlock().
     */
    lock(): void
    // Has conflict: prepareContentRefresh(): void
    /**
     * Delete the local cache of all messages between these uids.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_folder_purge_message_cache_finish() to get the result of the
     * operation.
     * @param startUid the start message UID
     * @param endUid the end message UID
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    purgeMessageCache(startUid: string | null, endUid: string | null, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_folder_purge_message_cache().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    purgeMessageCacheFinish(result: Gio.AsyncResult): boolean
    // Has conflict: purgeMessageCacheSync(startUid: string | null, endUid: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously synchronizes a folder's summary with its backing store.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_folder_refresh_info_finish() to get the result of the operation.
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    refreshInfo(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_folder_refresh_info().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    refreshInfoFinish(result: Gio.AsyncResult): boolean
    // Has conflict: refreshInfoSync(cancellable: Gio.Cancellable | null): boolean
    // Has conflict: rename(newName: string | null): void
    // Has conflict: searchByExpression(expression: string | null, cancellable: Gio.Cancellable | null): string[]
    // Has conflict: searchByUids(expression: string | null, uids: string[], cancellable: Gio.Cancellable | null): string[]
    // Has conflict: searchFree(result: string[]): void
    /**
     * Sets a description of the folder suitable for displaying to the user.
     * @param description a description of the folder
     */
    setDescription(description: string | null): void
    /**
     * Sets the display name for the folder.
     * @param displayName a display name for the folder
     */
    setDisplayName(displayName: string | null): void
    /**
     * Sets folder flags (bit-or of #CamelFolderFlags) for the `folder`.
     * @param folderFlags flags (bit-or of #CamelFolderFlags) to set
     */
    setFlags(folderFlags: number): void
    /**
     * Sets the fully qualified name of the folder.
     * @param fullName a fully qualified name for the folder
     */
    setFullName(fullName: string | null): void
    /**
     * Sets whether folder locking (camel_folder_lock() and camel_folder_unlock())
     * should be used. When set to %FALSE, the two functions do nothing and simply
     * return.
     * @param skipFolderLock a value to set
     */
    setLockAsync(skipFolderLock: boolean): void
    /**
     * Sets whether the messages in this `folder` should be marked
     * as seen automatically. An inconsistent state means to use
     * global option.
     * @param markSeen a #CamelThreeState as the value to set
     */
    setMarkSeen(markSeen: ThreeState): void
    /**
     * Sets the `timeout` in milliseconds for marking messages
     * as seen in this `folder`. Whether the timeout is used
     * depends on camel_folder_get_mark_seen().
     * @param timeout a timeout in milliseconds
     */
    setMarkSeenTimeout(timeout: number): void
    // Has conflict: setMessageFlags(uid: string | null, mask: number, set: number): boolean
    // Has conflict: setMessageUserFlag(uid: string | null, name: string | null, value: boolean): void
    // Has conflict: setMessageUserTag(uid: string | null, name: string | null, value: string | null): void
    // Has conflict: sortUids(uids: string[]): void
    /**
     * Synchronizes any changes that have been made to `folder` to its backing
     * store asynchronously, optionally expunging deleted messages as well.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_folder_synchronize_finish() to get the result of the operation.
     * @param expunge whether to expunge after synchronizing
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    synchronize(expunge: boolean, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_folder_synchronize().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    synchronizeFinish(result: Gio.AsyncResult): boolean
    /**
     * Asynchronously ensure that a message identified by `message_uid` has been
     * synchronized in `folder` so that calling camel_folder_get_message() on it
     * later will work in offline mode.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_folder_synchronize_message_finish() to get the result of the
     * operation.
     * @param messageUid a message UID
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    synchronizeMessage(messageUid: string | null, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_folder_synchronize_message().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    synchronizeMessageFinish(result: Gio.AsyncResult): boolean
    // Has conflict: synchronizeMessageSync(messageUid: string | null, cancellable: Gio.Cancellable | null): boolean
    // Has conflict: synchronizeSync(expunge: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets a #CamelFolderSummary of the folder. It consumes the `summary`.
     * 
     * This is supposed to be called only by the descendants of
     * the #CamelFolder and only at the construction time. Calling
     * this function twice yeilds to an error.
     * @param summary a #CamelFolderSummary
     */
    takeFolderSummary(summary: FolderSummary): void
    // Has conflict: thaw(): void
    /**
     * Asynchronously copies or moves messages from one folder to another.
     * If the `source` or `destination` folders have the same parent store,
     * this may be more efficient than using camel_folder_append_message().
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_folder_transfer_messages_to_finish() to get the result of the
     * operation.
     * @param messageUids message UIDs in `source`
     * @param destination the destination #CamelFolder
     * @param deleteOriginals whether or not to delete the original messages
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    transferMessagesTo(messageUids: string[], destination: Folder, deleteOriginals: boolean, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_folder_transfer_messages_to().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    transferMessagesToFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* transferredUids */ string[] | null ]
    // Has conflict: transferMessagesToSync(messageUids: string[], destination: Folder, deleteOriginals: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferredUids */ string[] | null ]
    /**
     * Unlocks `folder,` previously locked with camel_folder_lock().
     */
    unlock(): void

    // Own virtual methods of Camel-1.2.Camel.Folder

    /**
     * Appends `message` to `folder`.  Only the flag and tag data from `info`
     * are used.  If `info` is %NULL, no flags or tags will be set.
     * @virtual 
     * @param message a #CamelMimeMessage
     * @param info a #CamelMessageInfo with additional flags/etc to set        on the new message, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    appendMessageSync(message: MimeMessage, info: MessageInfo | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* appendedUid */ string | null ]
    /**
     * Emits the #CamelFolder::changed signal from an idle source on the
     * main loop.  The idle source's priority is #G_PRIORITY_LOW.
     * @virtual 
     * @param changes change information for `folder`
     */
    changed(changes: FolderChangeInfo): void
    /**
     * Compares two uids. The return value meaning is the same as in any other compare function.
     * 
     * Note that the default compare function expects a decimal number at the beginning of a uid,
     * thus if provider uses different uid values, then it should subclass this function.
     * @virtual 
     * @param uid1 The first uid.
     * @param uid2 the second uid.
     */
    cmpUids(uid1: string | null, uid2: string | null): number
    /**
     * Searches the folder for count of messages matching the given search expression.
     * @virtual 
     * @param expression a search expression
     * @param cancellable a #GCancellable
     * @returns an interger
     */
    countByExpression(expression: string | null, cancellable: Gio.Cancellable | null): number
    delete(): void
    deleted(): void
    /**
     * Deletes messages which have been marked as "DELETED".
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    expungeSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Frees the summary array returned by camel_folder_get_summary().
     * @virtual 
     * @param array the summary array to free
     */
    freeSummary(array: MessageInfo[]): void
    /**
     * Frees the array of UIDs returned by camel_folder_get_uids().
     * @virtual 
     * @param array the array of uids to free
     */
    freeUids(array: string[]): void
    /**
     * Freezes the folder so that a series of operation can be performed
     * without "folder_changed" signals being emitted.  When the folder is
     * later thawed with camel_folder_thaw(), the suppressed signals will
     * be emitted.
     * @virtual 
     */
    freeze(): void
    getFilename(uid: string | null): string | null
    /**
     * Similar to the camel_folder_get_full_name(), only returning
     * full path to the `folder` suitable for the display to a user.
     * @virtual 
     * @returns full path to the @folder suitable for the display to a user
     */
    getFullDisplayName(): string | null
    /**
     * Gets the message corresponding to `message_uid` from the `folder` cache,
     * if available locally. This should not do any network I/O, only check
     * if message is already downloaded and return it quickly, not being
     * blocked by the folder's lock. Returning NULL is not considered as
     * an error, it just means that the message is still to-be-downloaded.
     * 
     * Note: This function is called automatically within camel_folder_get_message_sync().
     * @virtual 
     * @param messageUid the message UID
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns a cached #CamelMimeMessage corresponding    to the requested UID
     */
    getMessageCached(messageUid: string | null, cancellable: Gio.Cancellable | null): MimeMessage | null
    getMessageCount(): number
    getMessageFlags(uid: string | null): number
    /**
     * Retrieve the #CamelMessageInfo for the specified `uid`.
     * @virtual 
     * @param uid the uid of a message
     * @returns The summary information for the   indicated message, or %NULL if the uid does not exist. Free the returned   object with g_object_unref(), when done with it.
     */
    getMessageInfo(uid: string | null): MessageInfo | null
    /**
     * Gets the message corresponding to `message_uid` from `folder`.
     * @virtual 
     * @param messageUid the message UID
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns a #CamelMimeMessage corresponding to the requested UID
     */
    getMessageSync(messageUid: string | null, cancellable: Gio.Cancellable | null): MimeMessage
    getMessageUserFlag(uid: string | null, name: string | null): boolean
    getMessageUserTag(uid: string | null, name: string | null): string | null
    getPermanentFlags(): number
    /**
     * Gets a list of known quotas for `folder`.  Free the returned
     * #CamelFolderQuotaInfo struct with camel_folder_quota_info_free().
     * 
     * If quotas are not supported for `folder,` the function returns %NULL
     * and sets `error` to #G_IO_ERROR_NOT_SUPPORTED.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns a #CamelFolderQuotaInfo, or %NULL on error
     */
    getQuotaInfoSync(cancellable: Gio.Cancellable | null): FolderQuotaInfo
    /**
     * This returns the summary information for the folder. This array
     * should not be modified, and must be freed with
     * camel_folder_free_summary().
     * @virtual 
     * @returns an array of UID-s of #CamelMessageInfo
     */
    getSummary(): string[]
    /**
     * Get the list of UIDs available in a folder. This routine is useful
     * for finding what messages are available when the folder does not
     * support summaries. The returned array should not be modified, and
     * must be freed by passing it to camel_folder_free_uids().
     * @virtual 
     * @returns a GPtrArray of UIDs corresponding to the messages available in the folder
     */
    getUids(): string[]
    /**
     * Returns the known-uncached uids from a list of uids. It may return uids
     * which are locally cached but should never filter out a uid which is not
     * locally cached. Free the result by called camel_folder_free_uids().
     * Frees the array of UIDs returned by camel_folder_get_uids().
     * @virtual 
     * @param uids the array of uids to filter down to uncached ones.
     */
    getUncachedUids(uids: string[]): string[]
    hasSearchCapability(): boolean
    isFrozen(): boolean
    /**
     * Lets the `folder` know that it should refresh its content
     * the next time from fresh. This is useful for remote accounts,
     * to fully re-check the folder content against the server.
     * @virtual 
     */
    prepareContentRefresh(): void
    /**
     * Delete the local cache of all messages between these uids.
     * @virtual 
     * @param startUid the start message UID
     * @param endUid the end message UID
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    purgeMessageCacheSync(startUid: string | null, endUid: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronizes a folder's summary with its backing store.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    refreshInfoSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Marks `folder` as renamed.
     * 
     * This also emits the #CamelFolder::renamed signal from an idle source on
     * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * NOTE: This is an internal function used by camel stores, no locking
     * is performed on the folder.
     * @virtual 
     * @param newName new name for the folder
     */
    rename(newName: string | null): void
    renamed(oldName: string | null): void
    /**
     * Searches the folder for messages matching the given search expression.
     * @virtual 
     * @param expression a search expression
     * @param cancellable a #GCancellable
     * @returns a #GPtrArray of uids of matching messages. The caller must free the list and each of the elements when it is done.
     */
    searchByExpression(expression: string | null, cancellable: Gio.Cancellable | null): string[]
    /**
     * Search a subset of uid's for an expression match.
     * @virtual 
     * @param expression search expression
     * @param uids array of uid's to match against.
     * @param cancellable a #GCancellable
     * @returns a #GPtrArray of uids of matching messages. The caller must free the list and each of the elements when it is done.
     */
    searchByUids(expression: string | null, uids: string[], cancellable: Gio.Cancellable | null): string[]
    /**
     * Free the result of a search as gotten by camel_folder_search_by_expression()
     * or camel_folder_search_by_uids().
     * @virtual 
     * @param result search results to free
     */
    searchFree(result: string[]): void
    /**
     * Sets those flags specified by `mask` to the values specified by `set`
     * on the indicated message. (This may or may not persist after the
     * folder or store is closed. See camel_folder_get_permanent_flags())
     * 
     * E.g. to set the deleted flag and clear the draft flag, use
     * camel_folder_set_message_flags (folder, uid, CAMEL_MESSAGE_DELETED|CAMEL_MESSAGE_DRAFT, CAMEL_MESSAGE_DELETED);
     * @virtual 
     * @param uid the UID of a message in `folder`
     * @param mask a mask of #CamelMessageFlags bit-or values to use
     * @param set the flags to ser, also bit-or of #CamelMessageFlags
     * @returns %TRUE if the flags were changed or %FALSE otherwise
     */
    setMessageFlags(uid: string | null, mask: number, set: number): boolean
    setMessageUserFlag(uid: string | null, name: string | null, value: boolean): void
    setMessageUserTag(uid: string | null, name: string | null, value: string | null): void
    /**
     * Sorts the array of UIDs.
     * @virtual 
     * @param uids array of uids
     */
    sortUids(uids: string[]): void
    /**
     * Ensure that a message identified by `message_uid` has been synchronized in
     * `folder` so that calling camel_folder_get_message() on it later will work
     * in offline mode.
     * @virtual 
     * @param messageUid a message UID
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    synchronizeMessageSync(messageUid: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronizes any changes that have been made to `folder` to its
     * backing store, optionally expunging deleted messages as well.
     * @virtual 
     * @param expunge whether to expunge after synchronizing
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    synchronizeSync(expunge: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Thaws the folder and emits any pending folder_changed
     * signals.
     * @virtual 
     */
    thaw(): void
    /**
     * Copies or moves messages from one folder to another.  If the
     * `source` and `destination` folders have the same parent_store, this
     * may be more efficient than using camel_folder_append_message_sync().
     * @virtual 
     * @param messageUids message UIDs in `source`
     * @param destination the destination #CamelFolder
     * @param deleteOriginals whether or not to delete the original messages
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    transferMessagesToSync(messageUids: string[], destination: Folder, deleteOriginals: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferredUids */ string[] | null ]

    // Own signals of Camel-1.2.Camel.Folder

    connect(sigName: "changed", callback: Folder.ChangedSignalCallback): number
    on(sigName: "changed", callback: Folder.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Folder.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Folder.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "deleted", callback: Folder.DeletedSignalCallback): number
    on(sigName: "deleted", callback: Folder.DeletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deleted", callback: Folder.DeletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deleted", callback: Folder.DeletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "deleted", ...args: any[]): void
    connect(sigName: "renamed", callback: Folder.RenamedSignalCallback): number
    on(sigName: "renamed", callback: Folder.RenamedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "renamed", callback: Folder.RenamedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "renamed", callback: Folder.RenamedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "renamed", ...args: any[]): void

    // Class property signals of Camel-1.2.Camel.Folder

    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::mark-seen", callback: (...args: any[]) => void): number
    on(sigName: "notify::mark-seen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mark-seen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mark-seen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mark-seen", ...args: any[]): void
    connect(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mark-seen-timeout", ...args: any[]): void
    connect(sigName: "notify::parent-store", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-store", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Folder extends Object {

    // Own properties of Camel-1.2.Camel.Folder

    static name: string

    // Constructors of Camel-1.2.Camel.Folder

    constructor(config?: Folder.ConstructorProperties) 
    _init(config?: Folder.ConstructorProperties): void
    static threadedMessagesDump(c: FolderThreadNode): number
}

export module FolderSearch {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FolderSearch {

    // Own properties of Camel-1.2.Camel.FolderSearch

    __gtype__: number

    // Own fields of Camel-1.2.Camel.FolderSearch

    parent: GObject.Object
    priv: FolderSearchPrivate

    // Owm methods of Camel-1.2.Camel.FolderSearch

    /**
     * Run a search.  Search must have had Folder already set on it, and
     * it must implement summaries.
     * @param expr a search expression to run
     * @param cancellable a #GCancellable
     * @returns Number of messages that match the query.
     */
    count(expr: string | null, cancellable: Gio.Cancellable | null): number
    /**
     * Frees result of camel_folder_search_search() call.
     * @param result a result to free
     */
    freeResult(result: string[] | null): void
    getCurrentMessageInfo(): MessageInfo | null
    getCurrentSummary(): string[]
    getFolder(): Folder
    getOnlyCachedMessages(): boolean
    getSummary(): string[]
    getSummaryEmpty(): boolean
    /**
     * Run a search.  Search must have had Folder already set on it, and
     * it must implement summaries.
     * @param expr a search expression to run
     * @param uids to search against, NULL for all uid's.
     * @param cancellable a #GCancellable
     * @returns a #GPtrArray with matching UIDs,    or %NULL on error. Use camel_folder_search_free_result() to free it when    no longer needed.
     */
    search(expr: string | null, uids: string[], cancellable: Gio.Cancellable | null): string[]
    /**
     * Set the index representing the contents of all messages
     * in this folder.  If this is not set, then the folder implementation
     * should sub-class the CamelFolderSearch and provide its own
     * body-contains function.
     * @param bodyIndex a #CamelIndex
     */
    setBodyIndex(bodyIndex: Index | null): void
    /**
     * Sets, or unsets, the `info` as the currently processing #CamelMessageInfo.
     * The function adds its own reference to `info,` if not %NULL.
     * @param info a #CamelMessageInfo
     */
    setCurrentMessageInfo(info: MessageInfo | null): void
    /**
     * Set the folder attribute of the search. This can be used to perform a slow-search
     * when indexes and so forth are not available. Or for use by subclasses.
     * @param folder a #CamelFolder
     */
    setFolder(folder: Folder): void
    /**
     * Sets whether only locally cached messages can be searched. The default
     * value is %FALSE, which means that when a message is required and it is
     * not available locally, then it is downloaded from the server, if possible.
     * @param onlyCachedMessages a value to set
     */
    setOnlyCachedMessages(onlyCachedMessages: boolean): void
    /**
     * Set the array of summary objects representing the span of the search.
     * 
     * If this is not set, then a subclass must provide the functions
     * for searching headers and for the match-all operator.
     * @param summary An array of UID-s of #CamelMessageInfo.
     */
    setSummary(summary: string[]): void
    /**
     * Sets, or unsets, the `info` as the currently processing #CamelMessageInfo.
     * Unlike camel_folder_search_set_current_message_info(), this function
     * assumes ownership of the `info,` if not %NULL.
     * @param info a #CamelMessageInfo
     */
    takeCurrentMessageInfo(info: MessageInfo | null): void

    // Class property signals of Camel-1.2.Camel.FolderSearch

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FolderSearch extends GObject.Object {

    // Own properties of Camel-1.2.Camel.FolderSearch

    static name: string

    // Constructors of Camel-1.2.Camel.FolderSearch

    constructor(config?: FolderSearch.ConstructorProperties) 
    /**
     * Create a new CamelFolderSearch object.
     * 
     * A CamelFolderSearch is a subclassable, extensible s-exp
     * evaluator which enforces a particular set of s-expressions.
     * Particular methods may be overriden by an implementation to
     * implement a search for any sort of backend.
     * @constructor 
     * @returns A new CamelFolderSearch intstance.
     */
    constructor() 
    /**
     * Create a new CamelFolderSearch object.
     * 
     * A CamelFolderSearch is a subclassable, extensible s-exp
     * evaluator which enforces a particular set of s-expressions.
     * Particular methods may be overriden by an implementation to
     * implement a search for any sort of backend.
     * @constructor 
     * @returns A new CamelFolderSearch intstance.
     */
    static new(): FolderSearch
    _init(config?: FolderSearch.ConstructorProperties): void
    /**
     * Increases time `t` by the given number of months (or decreases, if
     * `months` is negative).
     * @param t Initial time
     * @param months number of months to add or subtract
     * @returns a new #time_t value
     */
    static utilAddMonths(t: number, months: number): number
    /**
     * Compares date portion of the two date-time values, first converted
     * into the local time zone. The returned value is like with strcmp().
     * @param datetime1 a time_t-like value of the first date-time
     * @param datetime2 a time_t-like value of the second date-time
     * @returns 0 when the dates are equal, < 0 when first is before second and    > 0 when the first is after the second date
     */
    static utilCompareDate(datetime1: number, datetime2: number): number
    /**
     * Calculates a hash of the Message-ID header value `message_id`.
     * @param messageId a raw Message-ID header value
     * @param needsDecode whether the `message_id` requires camel_header_msgid_decode() first
     * @returns hash of the @message_id, or 0 on any error.
     */
    static utilHashMessageId(messageId: string | null, needsDecode: boolean): number
    /**
     * Implementation of 'make-time' function, which expects one argument,
     * a string or an integer, to be converted into time_t.
     * @param argc number of arguments in `argv`
     * @param argv array or arguments
     * @returns time_t equivalent of the passed in argument, or (time_t) -1 on error.
     */
    static utilMakeTime(argc: number, argv: SExpResult): number
}

export module FolderSummary {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.FolderSummary

        /**
         * The #CamelFolder to which the folder summary belongs.
         */
        folder?: Folder | null
    }

}

export interface FolderSummary {

    // Own properties of Camel-1.2.Camel.FolderSummary

    /**
     * How many deleted infos is saved in a summary.
     */
    readonly deletedCount: number
    /**
     * The #CamelFolder to which the folder summary belongs.
     */
    readonly folder: Folder
    /**
     * How many junk infos is saved in a summary.
     */
    readonly junkCount: number
    /**
     * How many junk and not deleted infos is saved in a summary.
     */
    readonly junkNotDeletedCount: number
    /**
     * How many infos is saved in a summary.
     */
    readonly savedCount: number
    /**
     * How many unread infos is saved in a summary.
     */
    readonly unreadCount: number
    /**
     * How many visible (not deleted and not junk) infos is saved in a summary.
     */
    readonly visibleCount: number
    __gtype__: number

    // Own fields of Camel-1.2.Camel.FolderSummary

    parent: GObject.Object
    priv: FolderSummaryPrivate

    // Owm methods of Camel-1.2.Camel.FolderSummary

    /**
     * Adds a new `info` record to the summary. If the `force_keep_uid` is %FALSE,
     * then a new uid is automatically re-assigned by calling
     * camel_folder_summary_next_uid_string(). It's an error to use
     * `force_keep_uid` when the `info` has none set.
     * 
     * The `summary` adds its own reference to `info,` if needed, and any
     * previously loaded info is replaced with the new one.
     * @param info a #CamelMessageInfo
     * @param forceKeepUid whether to keep set UID of the `info`
     */
    add(info: MessageInfo, forceKeepUid: boolean): void
    /**
     * Check if the uid is valid. This isn't very efficient, so it shouldn't be called iteratively.
     * @param uid a uid
     * @returns if the uid is present in the summary or not  (%TRUE or %FALSE)
     */
    checkUid(uid: string | null): boolean
    /**
     * Empty the summary contents.
     * @returns whether succeeded
     */
    clear(): boolean
    /**
     * Get the number of summary items stored in this summary.
     * @returns the number of items in the summary
     */
    count(): number
    /**
     * Retrieve a summary item by uid.
     * 
     * A referenced to the summary item is returned, which may be
     * ref'd or free'd as appropriate.
     * @param uid a uid
     * @returns the summary item, or %NULL if the uid @uid is not available See camel_folder_summary_get_info_flags().
     */
    get(uid: string | null): MessageInfo | null
    /**
     * Obtain a copy of the summary array.  This is done atomically,
     * so cannot contain empty entries.
     * 
     * Free with camel_folder_summary_free_array()
     * @returns a #GPtrArray of uids
     */
    getArray(): string[]
    /**
     * Returns an array of changed UID-s. A UID is considered changed
     * when its corresponding CamelMesageInfo is 'dirty' or when it has
     * set the #CAMEL_MESSAGE_FOLDER_FLAGGED flag.
     * @returns a #GPtrArray with changed UID-s.    Free it with camel_folder_summary_free_array() when no longer needed.
     */
    getChanged(): string[]
    getDeletedCount(): number
    getFlags(): number
    getFolder(): any | null
    /**
     * Returns hash of current stored 'uids' in summary, where key is 'uid'
     * from the string pool, and value is 1. The returned pointer should
     * be freed with g_hash_table_destroy().
     * 
     * Note: When searching for values always use uids from the string pool.
     */
    getHash(): GLib.HashTable
    getIndex(): Index | null
    /**
     * Retrieve CamelMessageInfo::flags for a message info with UID `uid`.
     * This is much quicker than camel_folder_summary_get(), because it
     * doesn't require reading the message info from a disk.
     * @param uid a uid
     * @returns the flags currently stored for message info with UID @uid,          or (~0) on error
     */
    getInfoFlags(uid: string | null): number
    getJunkCount(): number
    getJunkNotDeletedCount(): number
    getNextUid(): number
    getSavedCount(): number
    getTimestamp(): number
    getUnreadCount(): number
    getVersion(): number
    getVisibleCount(): number
    /**
     * Loads a summary header for the `summary,` which corresponds to `folder_name`
     * provided by `store`.
     * @param store a #CamelStore
     * @param folderName a folder name corresponding to `summary`
     * @returns whether succeeded
     */
    headerLoad(store: any | null, folderName: string | null): boolean
    /**
     * Saves summary header information into the disk. The function does
     * nothing, if the summary doesn't support save to disk.
     * @returns whether succeeded
     */
    headerSave(): boolean
    /**
     * Create a new info record from a header.
     * @param headers rfc822 headers as #CamelNameValueArray
     * @returns a newly created #CamelMessageInfo. Unref it   with g_object_unref(), when done with it.
     */
    infoNewFromHeaders(headers: NameValueArray): MessageInfo
    /**
     * Create a summary item from a message.
     * @param message a #CamelMimeMessage object
     * @returns a newly created #CamelMessageInfo. Unref it   with g_object_unref(), when done with it.
     */
    infoNewFromMessage(message: MimeMessage): MessageInfo
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
    infoNewFromParser(parser: MimeParser): MessageInfo
    /**
     * Loads the summary from the disk. It also saves any pending
     * changes first.
     * @returns whether succeeded
     */
    load(): boolean
    /**
     * Locks `summary`. Unlock it with camel_folder_summary_unlock().
     */
    lock(): void
    /**
     * Generate a new unique uid value as an integer.  This
     * may be used to create a unique sequence of numbers.
     * @returns the next unique uid value
     */
    nextUid(): number
    // Has conflict: nextUidString(): string | null
    peekLoaded(uid: string | null): MessageInfo | null
    // Has conflict: prepareFetchAll(): void
    /**
     * Remove a specific `info` record from the summary.
     * @param info a #CamelMessageInfo
     * @returns Whether the @info was found and removed from the @summary.
     */
    remove(info: MessageInfo): boolean
    /**
     * Remove a specific info record from the summary, by `uid`.
     * @param uid a uid
     * @returns Whether the @uid was found and removed from the @summary.
     */
    removeUid(uid: string | null): boolean
    /**
     * Remove a specific info record from the summary, by `uid`.
     * @param uids a GList of uids
     * @returns Whether the @uid was found and removed from the @summary.
     */
    removeUids(uids: string[]): boolean
    /**
     * Updates internal counts based on the flags in `info`.
     * @param info a #CamelMessageInfo
     * @returns Whether any count changed
     */
    replaceFlags(info: MessageInfo): boolean
    /**
     * Saves the content of the `summary` to disk. It does nothing,
     * when the summary is not changed or when it doesn't support
     * permanent save.
     * @returns whether succeeded
     */
    save(): boolean
    /**
     * Sets flags of the `summary,` a bit-or of #CamelFolderSummaryFlags.
     * @param flags flags to set
     */
    setFlags(flags: number): void
    /**
     * Set the index used to index body content.  If the index is %NULL, or
     * not set (the default), no indexing of body content will take place.
     * @param index a #CamelIndex
     */
    setIndex(index: Index | null): void
    /**
     * Set the next minimum uid available.  This can be used to
     * ensure new uid's do not clash with existing uid's.
     * @param uid The next minimum uid to assign.  To avoid clashing uid's, set this to the uid of a given messages + 1.
     */
    setNextUid(uid: number): void
    /**
     * Sets timestamp of the `summary,` provided by the descendants. This doesn't
     * change the 'dirty' flag of the `summary`.
     * @param timestamp a timestamp to set
     */
    setTimestamp(timestamp: number): void
    /**
     * Sets version of the `summary`.
     * @param version version to set
     */
    setVersion(version: number): void
    /**
     * Mark the summary as changed, so that a save will force it to be
     * written back to disk.
     */
    touch(): void
    /**
     * Unlocks `summary,` previously locked with camel_folder_summary_lock().
     */
    unlock(): void

    // Own virtual methods of Camel-1.2.Camel.FolderSummary

    /**
     * Retrieve a summary item by uid.
     * 
     * A referenced to the summary item is returned, which may be
     * ref'd or free'd as appropriate.
     * @virtual 
     * @param uid a uid
     * @returns the summary item, or %NULL if the uid @uid is not available See camel_folder_summary_get_info_flags().
     */
    messageInfoFromUid(uid: string | null): MessageInfo | null
    /**
     * Create a new info record from a header.
     * @virtual 
     * @param headers rfc822 headers as #CamelNameValueArray
     * @returns a newly created #CamelMessageInfo. Unref it   with g_object_unref(), when done with it.
     */
    messageInfoNewFromHeaders(headers: NameValueArray): MessageInfo
    /**
     * Create a summary item from a message.
     * @virtual 
     * @param message a #CamelMimeMessage object
     * @returns a newly created #CamelMessageInfo. Unref it   with g_object_unref(), when done with it.
     */
    messageInfoNewFromMessage(message: MimeMessage): MessageInfo
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
     * @virtual 
     * @param parser a #CamelMimeParser object
     * @returns a newly created #CamelMessageInfo. Unref it   with g_object_unref(), when done with it.
     */
    messageInfoNewFromParser(parser: MimeParser): MessageInfo
    /**
     * Retrieve the next uid, but as a formatted string.
     * @virtual 
     * @returns the next uid as an unsigned integer string. This string must be freed by the caller.
     */
    nextUidString(): string | null
    prepareFetchAll(): void
    summaryHeaderLoad(fir: any | null): boolean
    summaryHeaderSave(): any | null

    // Own signals of Camel-1.2.Camel.FolderSummary

    connect(sigName: "changed", callback: FolderSummary.ChangedSignalCallback): number
    on(sigName: "changed", callback: FolderSummary.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: FolderSummary.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: FolderSummary.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Camel-1.2.Camel.FolderSummary

    connect(sigName: "notify::deleted-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::deleted-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::deleted-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::deleted-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::deleted-count", ...args: any[]): void
    connect(sigName: "notify::folder", callback: (...args: any[]) => void): number
    on(sigName: "notify::folder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::folder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::folder", ...args: any[]): void
    connect(sigName: "notify::junk-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::junk-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::junk-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::junk-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::junk-count", ...args: any[]): void
    connect(sigName: "notify::junk-not-deleted-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::junk-not-deleted-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::junk-not-deleted-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::junk-not-deleted-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::junk-not-deleted-count", ...args: any[]): void
    connect(sigName: "notify::saved-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::saved-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::saved-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::saved-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::saved-count", ...args: any[]): void
    connect(sigName: "notify::unread-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::unread-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::unread-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::unread-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::unread-count", ...args: any[]): void
    connect(sigName: "notify::visible-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible-count", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FolderSummary extends GObject.Object {

    // Own properties of Camel-1.2.Camel.FolderSummary

    static name: string

    // Constructors of Camel-1.2.Camel.FolderSummary

    constructor(config?: FolderSummary.ConstructorProperties) 
    /**
     * Create a new #CamelFolderSummary object.
     * @constructor 
     * @param folder parent #CamelFolder object
     * @returns a new #CamelFolderSummary object
     */
    constructor(folder: Folder) 
    /**
     * Create a new #CamelFolderSummary object.
     * @constructor 
     * @param folder parent #CamelFolder object
     * @returns a new #CamelFolderSummary object
     */
    static new(folder: Folder): FolderSummary
    _init(config?: FolderSummary.ConstructorProperties): void
    /**
     * Free's array and its elements returned from camel_folder_summary_get_array().
     * @param array a #GPtrArray returned from camel_folder_summary_get_array()
     */
    static freeArray(array: string[]): void
}

export module GpgContext {

    // Constructor properties interface

    export interface ConstructorProperties extends CipherContext.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.GpgContext

        alwaysTrust?: boolean | null
        locateKeys?: boolean | null
        preferInline?: boolean | null
    }

}

export interface GpgContext {

    // Own properties of Camel-1.2.Camel.GpgContext

    alwaysTrust: boolean
    locateKeys: boolean
    preferInline: boolean
    __gtype__: number

    // Own fields of Camel-1.2.Camel.GpgContext

    parent: CipherContext & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.GpgContext

    getAlwaysTrust(): boolean
    /**
     * Returns, whether gpg can locate keys using Web Key Directory (WKD) lookup
     * when encrypting messages. The default is %TRUE.
     * @returns whether gpg can locate keys using Web Key Directory (WKD) lookup    when encrypting messages.
     */
    getLocateKeys(): boolean
    getPreferInline(): boolean
    /**
     * Sets the `always_trust` flag on the gpg context which is used for
     * encryption.
     * @param alwaysTrust always trust flag
     */
    setAlwaysTrust(alwaysTrust: boolean): void
    /**
     * Sets the `locate_keys` on the gpg context which is used to instruct
     * gpg to locate keys using Web Key Directory (WKD) lookup when encrypting
     * messages.
     * @param locateKeys value to set
     */
    setLocateKeys(locateKeys: boolean): void
    /**
     * Sets the `prefer_inline` flag on the gpg context.
     * @param preferInline whether prefer inline sign/encrypt
     */
    setPreferInline(preferInline: boolean): void

    // Class property signals of Camel-1.2.Camel.GpgContext

    connect(sigName: "notify::always-trust", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-trust", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-trust", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-trust", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-trust", ...args: any[]): void
    connect(sigName: "notify::locate-keys", callback: (...args: any[]) => void): number
    on(sigName: "notify::locate-keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::locate-keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::locate-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::locate-keys", ...args: any[]): void
    connect(sigName: "notify::prefer-inline", callback: (...args: any[]) => void): number
    on(sigName: "notify::prefer-inline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::prefer-inline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::prefer-inline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::prefer-inline", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::session", callback: (...args: any[]) => void): number
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class GpgContext extends CipherContext {

    // Own properties of Camel-1.2.Camel.GpgContext

    static name: string

    // Constructors of Camel-1.2.Camel.GpgContext

    constructor(config?: GpgContext.ConstructorProperties) 
    /**
     * Creates a new gpg cipher context object.
     * @constructor 
     * @param session session
     * @returns a new gpg cipher context object.
     */
    constructor(session: Session) 
    /**
     * Creates a new gpg cipher context object.
     * @constructor 
     * @param session session
     * @returns a new gpg cipher context object.
     */
    static new(session: Session): GpgContext
    _init(config?: GpgContext.ConstructorProperties): void
}

export module HTMLParser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface HTMLParser {

    // Own properties of Camel-1.2.Camel.HTMLParser

    __gtype__: number

    // Own fields of Camel-1.2.Camel.HTMLParser

    parent: GObject.Object
    priv: HTMLParserPrivate

    // Owm methods of Camel-1.2.Camel.HTMLParser

    attr(name: string | null): string | null
    /**
     * Provides parsed array of values and attributes. Both arrays are
     * owned by the `hp`.
     * @param values an output #GPtrArray with values, or %NULL
     * @returns a #GPtrArray of parsed attributes
     */
    attrList(values: string[] | null): [ /* returnType */ string[], /* values */ string[] | null ]
    left(lenp: number): string | null
    setData(start: string | null, len: number, last: number): void

    // Overloads of setData

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
    setData(key: string | null, data: any | null): void
    step(datap: string | null, lenp: number): HTMLParserState
    tag(): string | null

    // Class property signals of Camel-1.2.Camel.HTMLParser

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class HTMLParser extends GObject.Object {

    // Own properties of Camel-1.2.Camel.HTMLParser

    static name: string

    // Constructors of Camel-1.2.Camel.HTMLParser

    constructor(config?: HTMLParser.ConstructorProperties) 
    /**
     * Create a new CamelHTMLParser object.
     * @constructor 
     * @returns A new #CamelHTMLParser object
     */
    constructor() 
    /**
     * Create a new CamelHTMLParser object.
     * @constructor 
     * @returns A new #CamelHTMLParser object
     */
    static new(): HTMLParser
    _init(config?: HTMLParser.ConstructorProperties): void
}

export module Index {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Index {

    // Own properties of Camel-1.2.Camel.Index

    __gtype__: number

    // Own fields of Camel-1.2.Camel.Index

    parent: GObject.Object
    priv: IndexPrivate
    path: string | null
    version: number
    flags: number
    state: number
    normalize: IndexNorm
    normalizeData: any

    // Owm methods of Camel-1.2.Camel.Index

    // Has conflict: addName(name: string | null): IndexName | null
    // Has conflict: compress(): number
    construct(path: string | null, flags: number): void
    // Has conflict: delete(): number
    // Has conflict: deleteName(name: string | null): void
    // Has conflict: find(word: string | null): IndexCursor | null
    // Has conflict: findName(name: string | null): IndexCursor | null
    // Has conflict: hasName(name: string | null): number
    // Has conflict: rename(path: string | null): number
    setNormalize(func: IndexNorm): void
    // Has conflict: sync(): number
    // Has conflict: words(): IndexCursor | null
    // Has conflict: writeName(idn: IndexName): number

    // Own virtual methods of Camel-1.2.Camel.Index

    addName(name: string | null): IndexName | null
    compress(): number
    delete(): number
    /**
     * Deletes the given `name` from `index`.
     * @virtual 
     * @param name a name to delete
     */
    deleteName(name: string | null): void
    find(word: string | null): IndexCursor | null
    findName(name: string | null): IndexCursor | null
    hasName(name: string | null): number
    rename(path: string | null): number
    sync(): number
    words(): IndexCursor | null
    writeName(idn: IndexName): number

    // Class property signals of Camel-1.2.Camel.Index

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Index extends GObject.Object {

    // Own properties of Camel-1.2.Camel.Index

    static name: string

    // Constructors of Camel-1.2.Camel.Index

    constructor(config?: Index.ConstructorProperties) 
    _init(config?: Index.ConstructorProperties): void
}

export module IndexCursor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface IndexCursor {

    // Own properties of Camel-1.2.Camel.IndexCursor

    __gtype__: number

    // Own fields of Camel-1.2.Camel.IndexCursor

    parent: GObject.Object
    priv: IndexCursorPrivate
    index: Index

    // Owm methods of Camel-1.2.Camel.IndexCursor

    // Has conflict: next(): string | null

    // Own virtual methods of Camel-1.2.Camel.IndexCursor

    next(): string | null

    // Class property signals of Camel-1.2.Camel.IndexCursor

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class IndexCursor extends GObject.Object {

    // Own properties of Camel-1.2.Camel.IndexCursor

    static name: string

    // Constructors of Camel-1.2.Camel.IndexCursor

    constructor(config?: IndexCursor.ConstructorProperties) 
    _init(config?: IndexCursor.ConstructorProperties): void
}

export module IndexName {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface IndexName {

    // Own properties of Camel-1.2.Camel.IndexName

    __gtype__: number

    // Own fields of Camel-1.2.Camel.IndexName

    parent: GObject.Object
    priv: IndexNamePrivate
    index: Index
    name: string | null
    buffer: Uint8Array
    words: GLib.HashTable

    // Owm methods of Camel-1.2.Camel.IndexName

    // Has conflict: addBuffer(buffer: string | null, len: number): number
    // Has conflict: addWord(word: string | null): void

    // Own virtual methods of Camel-1.2.Camel.IndexName

    addBuffer(buffer: string | null, len: number): number
    addWord(word: string | null): void

    // Class property signals of Camel-1.2.Camel.IndexName

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class IndexName extends GObject.Object {

    // Own properties of Camel-1.2.Camel.IndexName

    static name: string

    // Constructors of Camel-1.2.Camel.IndexName

    constructor(config?: IndexName.ConstructorProperties) 
    _init(config?: IndexName.ConstructorProperties): void
}

export module InternetAddress {

    // Constructor properties interface

    export interface ConstructorProperties extends Address.ConstructorProperties {
    }

}

export interface InternetAddress {

    // Own properties of Camel-1.2.Camel.InternetAddress

    __gtype__: number

    // Own fields of Camel-1.2.Camel.InternetAddress

    parent: Address & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.InternetAddress

    /**
     * Add a new internet address to `addr`.
     * @param name name associated with the new address
     * @param address routing address associated with the new address
     * @returns the index of added entry
     */
    add(name: string | null, address: string | null): number
    /**
     * Ensures that all email address' domains will be ASCII encoded,
     * which means that any non-ASCII letters will be properly encoded.
     * This includes IDN (Internationalized Domain Names).
     */
    ensureAsciiDomains(): void
    /**
     * Find an address by address.
     * @param address address to lookup
     * @returns the index of the address, or -1 if not found
     */
    findAddress(address: string | null): [ /* returnType */ number, /* namep */ string | null ]
    /**
     * Find address by real name.
     * @param name name to lookup
     * @returns the index of the address matching the name, or -1 if no match was found
     */
    findName(name: string | null): [ /* returnType */ number, /* addressp */ string | null ]
    /**
     * Get the address at `index`.
     * @param index address's array index
     * @returns %TRUE if such an address exists, or %FALSE otherwise
     */
    get(index: number): [ /* returnType */ boolean, /* namep */ string | null, /* addressp */ string | null ]
    /**
     * Checks the addresses in `addr` for any suspicious characters in the domain
     * name and coverts those domains into their representation. In contrast to
     * camel_internet_address_ensure_ascii_domains(), this converts the domains
     * into ASCII only when needed, as returned by camel_hostname_utils_requires_ascii().
     * @returns %TRUE, when converted at least one address
     */
    sanitizeAsciiDomain(): boolean

    // Class property signals of Camel-1.2.Camel.InternetAddress

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class InternetAddress extends Address {

    // Own properties of Camel-1.2.Camel.InternetAddress

    static name: string

    // Constructors of Camel-1.2.Camel.InternetAddress

    constructor(config?: InternetAddress.ConstructorProperties) 
    /**
     * Create a new #CamelInternetAddress object.
     * @constructor 
     * @returns a new #CamelInternetAddress object
     */
    constructor() 
    /**
     * Create a new #CamelInternetAddress object.
     * @constructor 
     * @returns a new #CamelInternetAddress object
     */
    static new(): InternetAddress

    // Overloads of new

    /**
     * Create a new #CamelAddress object.
     * @constructor 
     * @returns a new #CamelAddress object
     */
    static new(): Address
    _init(config?: InternetAddress.ConstructorProperties): void
    /**
     * Encode a single address ready for internet usage.  Header folding
     * as per rfc822 is also performed, based on the length *`len`.  If `len`
     * is %NULL, then no folding will occur.
     * 
     * Note: The value at *`in` will be updated based on any linewrapping done
     * @param len the length of the line the address is being appended to
     * @param name the unencoded real name associated with the address
     * @param addr the routing address
     * @returns the encoded address
     */
    static encodeAddress(len: number | null, name: string | null, addr: string | null): string | null
    /**
     * Function to format a single address, suitable for display.
     * @param name a name, quotes may be stripped from it
     * @param addr an rfc822 routing address
     * @returns a nicely formatted string containing the rfc822 address
     */
    static formatAddress(name: string | null, addr: string | null): string | null
}

export module KeyFile {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface KeyFile {

    // Own properties of Camel-1.2.Camel.KeyFile

    __gtype__: number

    // Own fields of Camel-1.2.Camel.KeyFile

    parent: GObject.Object
    priv: KeyFilePrivate

    // Owm methods of Camel-1.2.Camel.KeyFile

    delete(): number
    /**
     * Read the next block of data from the key file.  Returns the number of
     * records.
     * @param start The record pointer.  This will be set to the next record pointer on success.
     * @param records Records, allocated, must be freed with g_free, if != NULL.
     * @returns -1 on io error.
     */
    read(start: _block_t, records: _key_t[] | null): number
    rename(path: string | null): number
    /**
     * Write a new list of records to the key file.
     * @param parent a #camel_block_t
     * @param records an array of #camel_key_t to write
     * @returns -1 on io error.  The key file will remain unchanged.
     */
    write(parent: _block_t, records: _key_t[]): number

    // Class property signals of Camel-1.2.Camel.KeyFile

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class KeyFile extends GObject.Object {

    // Own properties of Camel-1.2.Camel.KeyFile

    static name: string

    // Constructors of Camel-1.2.Camel.KeyFile

    constructor(config?: KeyFile.ConstructorProperties) 
    /**
     * Create a new key file.  A linked list of record blocks.
     * @constructor 
     * @param path a filename with path of the #CamelKeyFile to create
     * @param flags open flags
     * @param version Version string (header) of file.  Currently written but not checked.
     * @returns A new key file, or %NULL if the file could not    be opened/created/initialised.
     */
    constructor(path: string | null, flags: number, version: string | null) 
    /**
     * Create a new key file.  A linked list of record blocks.
     * @constructor 
     * @param path a filename with path of the #CamelKeyFile to create
     * @param flags open flags
     * @param version Version string (header) of file.  Currently written but not checked.
     * @returns A new key file, or %NULL if the file could not    be opened/created/initialised.
     */
    static new(path: string | null, flags: number, version: string | null): KeyFile
    _init(config?: KeyFile.ConstructorProperties): void
}

export module KeyTable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface KeyTable {

    // Own properties of Camel-1.2.Camel.KeyTable

    __gtype__: number

    // Own fields of Camel-1.2.Camel.KeyTable

    parent: GObject.Object
    priv: KeyTablePrivate

    // Owm methods of Camel-1.2.Camel.KeyTable

    add(key: string | null, data: _block_t, flags: number): _key_t
    lookup(keyid: _key_t, key: string | null, flags: number): _block_t
    next(next: _key_t, keyp: string | null, flagsp: number, datap: _block_t): _key_t
    setData(keyid: _key_t, data: _block_t): boolean

    // Overloads of setData

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
    setData(key: string | null, data: any | null): void
    setFlags(keyid: _key_t, flags: number, set: number): boolean
    sync(): number

    // Class property signals of Camel-1.2.Camel.KeyTable

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class KeyTable extends GObject.Object {

    // Own properties of Camel-1.2.Camel.KeyTable

    static name: string

    // Constructors of Camel-1.2.Camel.KeyTable

    constructor(config?: KeyTable.ConstructorProperties) 
    constructor(bs: BlockFile, root: _block_t) 
    static new(bs: BlockFile, root: _block_t): KeyTable
    _init(config?: KeyTable.ConstructorProperties): void
}

export module LocalSettings {

    // Constructor properties interface

    export interface ConstructorProperties extends StoreSettings.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.LocalSettings

        filterAll?: boolean | null
        filterJunk?: boolean | null
        maildirAltFlagSep?: boolean | null
        path?: string | null
    }

}

export interface LocalSettings {

    // Own properties of Camel-1.2.Camel.LocalSettings

    filterAll: boolean
    filterJunk: boolean
    maildirAltFlagSep: boolean
    path: string | null
    __gtype__: number

    // Owm methods of Camel-1.2.Camel.LocalSettings

    /**
     * Thread-safe variation of camel_local_settings_get_path().
     * Use this function when accessing `settings` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #CamelLocalSettings:path
     */
    dupPath(): string | null
    /**
     * Returns whether apply filters in all folders.
     * @returns whether to apply filters in all folders
     */
    getFilterAll(): boolean
    /**
     * Returns whether to check new messages for junk.
     * @returns whether to check new messages for junk
     */
    getFilterJunk(): boolean
    /**
     * Returns, whether the Maildir provider should use alternative
     * flag separator in the file name. When %TRUE, uses an exclamation
     * mark (!), when %FALSE, uses the colon (:). The default
     * is %FALSE, to be consistent with the Maildir specification.
     * The flag separator is flipped on the Windows build.
     * @returns whether the Maildir provider should use an alternative flag separator
     */
    getMaildirAltFlagSep(): boolean
    /**
     * Returns the file path to the root of the local mail store.
     * @returns the file path to the local store
     */
    getPath(): string | null
    /**
     * Sets whether to apply filters in all folders.
     * @param filterAll whether to apply filters in all folders
     */
    setFilterAll(filterAll: boolean): void
    /**
     * Sets whether to check new messages for junk.
     * @param filterJunk whether to check new messages for junk
     */
    setFilterJunk(filterJunk: boolean): void
    /**
     * Sets whether Maildir should use alternative flag separator.
     * See camel_local_settings_get_maildir_alt_flag_sep() for more
     * information on what it means.
     * 
     * Note: Change to this setting takes effect only for newly created
     *     Maildir stores.
     * @param maildirAltFlagSep value to set
     */
    setMaildirAltFlagSep(maildirAltFlagSep: boolean): void
    /**
     * Sets the file path to the root of the local mail store.  Any
     * trailing directory separator characters will be stripped off
     * of the #CamelLocalSettings:path property.
     * @param path the file path to the local store
     */
    setPath(path: string | null): void

    // Class property signals of Camel-1.2.Camel.LocalSettings

    connect(sigName: "notify::filter-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter-all", ...args: any[]): void
    connect(sigName: "notify::filter-junk", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter-junk", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter-junk", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter-junk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter-junk", ...args: any[]): void
    connect(sigName: "notify::maildir-alt-flag-sep", callback: (...args: any[]) => void): number
    on(sigName: "notify::maildir-alt-flag-sep", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::maildir-alt-flag-sep", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::maildir-alt-flag-sep", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::maildir-alt-flag-sep", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::filter-inbox", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter-inbox", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter-inbox", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter-inbox", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter-inbox", ...args: any[]): void
    connect(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void): number
    on(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::store-changes-interval", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class LocalSettings extends StoreSettings {

    // Own properties of Camel-1.2.Camel.LocalSettings

    static name: string

    // Constructors of Camel-1.2.Camel.LocalSettings

    constructor(config?: LocalSettings.ConstructorProperties) 
    _init(config?: LocalSettings.ConstructorProperties): void
}

export module Medium {

    // Constructor properties interface

    export interface ConstructorProperties extends DataWrapper.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.Medium

        content?: DataWrapper | null
    }

}

export interface Medium {

    // Own properties of Camel-1.2.Camel.Medium

    content: DataWrapper
    __gtype__: number

    // Own fields of Camel-1.2.Camel.Medium

    parent: DataWrapper & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.Medium

    // Has conflict: addHeader(name: string | null, value: string | null): void
    // Has conflict: dupHeaders(): NameValueArray
    // Has conflict: getContent(): DataWrapper | null
    // Has conflict: getHeader(name: string | null): string | null
    // Has conflict: getHeaders(): NameValueArray
    // Has conflict: removeHeader(name: string | null): void
    // Has conflict: setContent(content: DataWrapper | null): void
    // Has conflict: setHeader(name: string | null, value: string | null): void

    // Own virtual methods of Camel-1.2.Camel.Medium

    /**
     * Adds a header to a #CamelMedium.
     * @virtual 
     * @param name name of the header
     * @param value value of the header
     */
    addHeader(name: string | null, value: string | null): void
    /**
     * Gets an array of all header name/value pairs. The values will be
     * decoded to UTF-8 for any headers that are recognized by Camel.
     * See also camel_medium_get_headers().
     * @virtual 
     * @returns the array of headers, which must be freed with camel_name_value_array_free().
     */
    dupHeaders(): NameValueArray
    /**
     * Gets a data wrapper that represents the content of the medium,
     * without its headers.
     * @virtual 
     * @returns a #CamelDataWrapper containing @medium's content. Can return %NULL.
     */
    getContent(): DataWrapper | null
    /**
     * Gets the value of the named header in the medium, or %NULL if
     * it is unset. The caller should not modify or free the data.
     * 
     * If the header occurs more than once, only retrieve the first
     * instance of the header.  For multi-occuring headers, use
     * camel_medium_dup_headers() or camel_medium_get_headers().
     * @virtual 
     * @param name the name of the header
     * @returns the value of the named header, or %NULL
     */
    getHeader(name: string | null): string | null
    /**
     * Gets an array of all header name/value pairs. The values will be
     * decoded to UTF-8 for any headers that are recognized by Camel.
     * See also camel_medium_dup_headers().
     * @virtual 
     * @returns the array of headers, owned by @medium.
     */
    getHeaders(): NameValueArray
    /**
     * Removes the named header from the medium.  All occurances of the
     * header are removed.
     * @virtual 
     * @param name the name of the header
     */
    removeHeader(name: string | null): void
    /**
     * Sets the content of `medium` to be `content`.
     * @virtual 
     * @param content a #CamelDataWrapper object
     */
    setContent(content: DataWrapper | null): void
    /**
     * Sets the value of a header.  Any other occurances of the header
     * will be removed.  Setting a %NULL header can be used to remove
     * the header also.
     * @virtual 
     * @param name name of the header
     * @param value value of the header
     */
    setHeader(name: string | null, value: string | null): void

    // Class property signals of Camel-1.2.Camel.Medium

    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Medium extends DataWrapper {

    // Own properties of Camel-1.2.Camel.Medium

    static name: string

    // Constructors of Camel-1.2.Camel.Medium

    constructor(config?: Medium.ConstructorProperties) 
    _init(config?: Medium.ConstructorProperties): void
}

export module MessageInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.MessageInfo

        /**
         * Flag, whether the info is currently aborting notifications. It is used to avoid
         * unnecessary 'folder-flagged' and 'dirty' flags changes and also to avoid
         * associated folder's "changed" signal.
         * f
         */
        abortNotifications?: boolean | null
        /**
         * CC address of the associated message.
         */
        cc?: string | null
        /**
         * Received date of the associated message.
         */
        dateReceived?: number | null
        /**
         * Sent Date of the associated message.
         */
        dateSent?: number | null
        /**
         * Flag, whether the info is changed and requires save to disk.
         * Compare with CamelMessageInfo:folder-flagged
         */
        dirty?: boolean | null
        /**
         * Bit-or of #CamelMessageFlags.
         */
        flags?: MessageFlags | null
        /**
         * Flag, whether the info is changed and requires save to
         * the destination store/server. This is different from
         * the CamelMessageInfo:dirty, which takes care of the local
         * information only.
         */
        folderFlagged?: boolean | null
        /**
         * From address of the associated message.
         */
        from?: string | null
        /**
         * Headers of the associated message. Can be %NULL.
         */
        headers?: NameValueArray | null
        /**
         * Encoded Message-ID of the associated message as a guint64 number,
         * partial MD5 sum. The value can be cast to #CamelSummaryMessageID.
         */
        messageId?: number | null
        /**
         * Mailing list address of the associated message.
         */
        mlist?: string | null
        /**
         * Body preview of the associated message. Can be %NULL.
         */
        preview?: string | null
        /**
         * Encoded In-Reply-To and References headers of the associated message
         * as an array of guint64 numbers, partial MD5 sums. Each value can be
         * cast to #CamelSummaryMessageID.
         */
        references?: any[] | null
        /**
         * Size of the associated message.
         */
        size?: number | null
        /**
         * Subject of the associated message.
         */
        subject?: string | null
        /**
         * The #CamelFolderSummary to which the message info belongs, or %NULL.
         * It can be set only during construction of the object.
         */
        summary?: FolderSummary | null
        /**
         * To address of the associated message.
         */
        to?: string | null
        /**
         * A unique ID of the message in its folder.
         */
        uid?: string | null
        /**
         * User flags for the associated message. Can be %NULL.
         * Unlike user-tags, which can contain various values, the user-flags
         * can only be set or not.
         */
        userFlags?: NamedFlags | null
        /**
         * User-defined headers of the associated message. Can be %NULL.
         */
        userHeaders?: NameValueArray | null
        /**
         * User tags for the associated message. Can be %NULL.
         * Unlike user-flags, which can be set or not, the user-tags
         * can contain various values.
         */
        userTags?: NameValueArray | null
    }

}

export interface MessageInfo {

    // Own properties of Camel-1.2.Camel.MessageInfo

    /**
     * Flag, whether the info is currently aborting notifications. It is used to avoid
     * unnecessary 'folder-flagged' and 'dirty' flags changes and also to avoid
     * associated folder's "changed" signal.
     * f
     */
    abortNotifications: boolean
    /**
     * CC address of the associated message.
     */
    cc: string | null
    /**
     * Received date of the associated message.
     */
    dateReceived: number
    /**
     * Sent Date of the associated message.
     */
    dateSent: number
    /**
     * Flag, whether the info is changed and requires save to disk.
     * Compare with CamelMessageInfo:folder-flagged
     */
    dirty: boolean
    /**
     * Bit-or of #CamelMessageFlags.
     */
    flags: MessageFlags
    /**
     * Flag, whether the info is changed and requires save to
     * the destination store/server. This is different from
     * the CamelMessageInfo:dirty, which takes care of the local
     * information only.
     */
    folderFlagged: boolean
    /**
     * The 'folder-flagged-stamp' is a stamp of the 'folder-flagged' flag. This stamp
     * changes whenever anything would mark the `mi` 'folder-flagged', regardless the `mi`
     * being already 'folder-flagged'. It can be used to recognize changes
     * on the 'folder-flagged' flag during the time.
     */
    readonly folderFlaggedStamp: number
    /**
     * From address of the associated message.
     */
    from: string | null
    /**
     * Headers of the associated message. Can be %NULL.
     */
    headers: NameValueArray
    /**
     * Encoded Message-ID of the associated message as a guint64 number,
     * partial MD5 sum. The value can be cast to #CamelSummaryMessageID.
     */
    messageId: number
    /**
     * Mailing list address of the associated message.
     */
    mlist: string | null
    /**
     * Body preview of the associated message. Can be %NULL.
     */
    preview: string | null
    /**
     * Encoded In-Reply-To and References headers of the associated message
     * as an array of guint64 numbers, partial MD5 sums. Each value can be
     * cast to #CamelSummaryMessageID.
     */
    references: any[]
    /**
     * Size of the associated message.
     */
    size: number
    /**
     * Subject of the associated message.
     */
    subject: string | null
    /**
     * The #CamelFolderSummary to which the message info belongs, or %NULL.
     * It can be set only during construction of the object.
     */
    readonly summary: FolderSummary
    /**
     * To address of the associated message.
     */
    to: string | null
    /**
     * A unique ID of the message in its folder.
     */
    uid: string | null
    /**
     * User flags for the associated message. Can be %NULL.
     * Unlike user-tags, which can contain various values, the user-flags
     * can only be set or not.
     */
    userFlags: NamedFlags
    /**
     * User-defined headers of the associated message. Can be %NULL.
     */
    userHeaders: NameValueArray
    /**
     * User tags for the associated message. Can be %NULL.
     * Unlike user-flags, which can be set or not, the user-tags
     * can contain various values.
     */
    userTags: NameValueArray
    __gtype__: number

    // Own fields of Camel-1.2.Camel.MessageInfo

    parent: GObject.Object
    priv: MessageInfoPrivate

    // Owm methods of Camel-1.2.Camel.MessageInfo

    // Has conflict: clone(assignSummary: FolderSummary | null): MessageInfo
    /**
     * Dumps the mesasge info `mi` to stdout. This is meand for debugging
     * purposes only.
     */
    dump(): void
    /**
     * Duplicates array of headers for the `mi`.
     * @returns All the message headers of the associated   message, or %NULL, when none are available. Free returned array with   camel_name_value_array_free() when no longer needed.
     */
    dupHeaders(): NameValueArray | null
    dupPreview(): string | null
    /**
     * Duplicates encoded In-Reply-To and References headers of the associated
     * message as an array of guint64 numbers, partial MD5 sums. Each value
     * can be cast to #CamelSummaryMessageID.
     * @returns A #GArray of   guint64 encoded Message-ID-s; or %NULL when none are available. Free returned   array with g_array_unref() when no longer needed.
     */
    dupReferences(): number[] | null
    // Has conflict: dupUserFlags(): NamedFlags | null
    dupUserHeader(name: string | null): string | null
    dupUserHeaders(): NameValueArray | null
    dupUserTag(name: string | null): string | null
    // Has conflict: dupUserTags(): NameValueArray | null
    /**
     * Freezes all the notifications until the camel_message_info_thaw_notifications() is called.
     * This function can be called multiple times, where the last thaw will do the notifications.
     */
    freezeNotifications(): void
    getAbortNotifications(): boolean
    // Has conflict: getCc(): string | null
    // Has conflict: getDateReceived(): number
    // Has conflict: getDateSent(): number
    getDirty(): boolean
    // Has conflict: getFlags(): number
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
    getFolderFlagged(): boolean
    /**
     * The 'folder-flagged-stamp' is a stamp of the 'folder-flagged' flag. This stamp
     * changes whenever anything would mark the `mi` as 'folder-flagged', regardless
     * the `mi` being already 'folder-flagged'. It can be used to recognize changes
     * on the 'folder-flagged' flag during the time.
     * @returns Stamp of the 'folder-flagged' flag.
     */
    getFolderFlaggedStamp(): number
    // Has conflict: getFrom(): string | null
    // Has conflict: getHeaders(): NameValueArray | null
    // Has conflict: getMessageId(): number
    // Has conflict: getMlist(): string | null
    getNotificationsFrozen(): boolean
    // Has conflict: getPreview(): string | null
    // Has conflict: getReferences(): number[] | null
    // Has conflict: getSize(): number
    // Has conflict: getSubject(): string | null
    // Has conflict: getTo(): string | null
    /**
     * Get the UID of the #mi.
     * @returns The UID of the @mi.
     */
    getUid(): string | null
    // Has conflict: getUserFlag(name: string | null): boolean
    // Has conflict: getUserFlags(): NamedFlags | null
    // Has conflict: getUserHeader(name: string | null): string | null
    // Has conflict: getUserHeaders(): NameValueArray | null
    // Has conflict: getUserTag(name: string | null): string | null
    // Has conflict: getUserTags(): NameValueArray | null
    // Has conflict: load(record: MIRecord, bdataPtr: string | null): boolean
    /**
     * Get the UID of the #mi, duplicated on the Camel's string pool.
     * This is good for thread safety, though the UID should not change once set.
     * @returns A newly references string in the string pool, the #mi UID.   Free it with camel_pstring_free() when no longer needed.
     */
    pooldupUid(): string | null
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
    propertyLock(): void
    /**
     * Releases a property lock, previously acquired with
     * camel_message_info_property_lock().
     */
    propertyUnlock(): void
    refSummary(): any | null
    // Has conflict: save(record: MIRecord, bdataStr: GLib.String): boolean
    /**
     * Marks the `mi` to abort any notifications, which means that it
     * will not influence 'dirty' and 'folder-flagged' flags in
     * the set/take functions, neither it will emit any GObject::notify
     * signals on change, nor associated folder's "changed" signal.
     * @param abortNotifications a state to set
     */
    setAbortNotifications(abortNotifications: boolean): void
    // Has conflict: setCc(cc: string | null): boolean
    // Has conflict: setDateReceived(dateReceived: number): boolean
    // Has conflict: setDateSent(dateSent: number): boolean
    /**
     * Marks the `mi` as dirty, which means a save to the local summary
     * is required.
     * @param dirty a dirty state to set
     */
    setDirty(dirty: boolean): void
    // Has conflict: setFlags(mask: number, set: number): boolean
    /**
     * Changes the folder-flagged flag to the `folder_flagged` value. See
     * camel_message_info_get_folder_flagged() for more information about
     * the use of this flag.
     * 
     * This is only a convenient wrapper around CAMEL_MESSAGE_FOLDER_FLAGGED flag,
     * for better readiness of the code.
     * @param folderFlagged a value to set to
     * @returns Whether the flag had been changed.
     */
    setFolderFlagged(folderFlagged: boolean): boolean
    // Has conflict: setFrom(from: string | null): boolean
    // Has conflict: setMessageId(messageId: number): boolean
    // Has conflict: setMlist(mlist: string | null): boolean
    // Has conflict: setPreview(preview: string | null): boolean
    // Has conflict: setSize(size: number): boolean
    // Has conflict: setSubject(subject: string | null): boolean
    // Has conflict: setTo(to: string | null): boolean
    /**
     * Changes UID of the `mi` to `uid`. If it changes, the 'dirty' flag
     * of the `mi` is set too, unless the `mi` is aborting notifications. This change
     * does not influence the 'folder-flagged' flag.
     * @param uid a UID to set
     * @returns Whether the UID changed.
     */
    setUid(uid: string | null): boolean
    // Has conflict: setUserFlag(name: string | null, state: boolean): boolean
    // Has conflict: setUserHeader(name: string | null, value: string | null): boolean
    // Has conflict: setUserTag(name: string | null, value: string | null): boolean
    // Has conflict: takeHeaders(headers: NameValueArray | null): boolean
    // Has conflict: takeReferences(references: number[] | null): boolean
    // Has conflict: takeUserFlags(userFlags: NamedFlags | null): boolean
    // Has conflict: takeUserHeaders(headers: NameValueArray | null): boolean
    // Has conflict: takeUserTags(userTags: NameValueArray | null): boolean
    /**
     * Reverses the call of the camel_message_info_freeze_notifications().
     * If this is the last freeze, then the associated folder is also notified
     * about the change, if any happened during the freeze.
     */
    thawNotifications(): void

    // Own virtual methods of Camel-1.2.Camel.MessageInfo

    /**
     * Clones the `mi` as a new #CamelMessageInfo and eventually assigns
     * a new #CamelFolderSummary to it. If it's not set, then the same
     * summary as the one with `mi` is used.
     * @virtual 
     * @param assignSummary parent #CamelFolderSummary object, or %NULL, to set on the clone
     * @returns a new #CamelMessageInfo object, clone of the @mi
     */
    clone(assignSummary: FolderSummary | null): MessageInfo
    dupUserFlags(): NamedFlags | null
    dupUserTags(): NameValueArray | null
    getCc(): string | null
    getDateReceived(): number
    getDateSent(): number
    getFlags(): number
    getFrom(): string | null
    getHeaders(): NameValueArray | null
    /**
     * Encoded Message-ID of the associated message as a guint64 number,
     * partial MD5 sum. The value can be cast to #CamelSummaryMessageID.
     * @virtual 
     * @returns Partial MD5 hash of the Message-ID header of the associated message.
     */
    getMessageId(): number
    getMlist(): string | null
    getPreview(): string | null
    /**
     * Gets encoded In-Reply-To and References headers of the associated
     * message as an array of guint64 numbers, partial MD5 sums. Each value
     * can be cast to #CamelSummaryMessageID.
     * @virtual 
     * @returns A #GArray of   guint64 encoded Message-ID-s; or %NULL when none are available.
     */
    getReferences(): number[] | null
    getSize(): number
    getSubject(): string | null
    getTo(): string | null
    getUserFlag(name: string | null): boolean
    getUserFlags(): NamedFlags | null
    getUserHeader(name: string | null): string | null
    getUserHeaders(): NameValueArray | null
    getUserTag(name: string | null): string | null
    getUserTags(): NameValueArray | null
    /**
     * Load content of `mi` from the data stored in `record`. The `bdata_ptr` points
     * to the current position of the record->bdata, where the read can continue.
     * Use helper functions camel_util_bdata_get_number() and camel_util_bdata_get_string()
     * to read data from it and also move forward the *bdata_ptr.
     * 
     * After successful load of the `mi,` the 'dirty' flag is unset.
     * @virtual 
     * @param record a #CamelMIRecord to load the `mi` from
     * @param bdataPtr a backend specific data (bdata) pointer
     * @returns Whether the load was successful.
     */
    load(record: MIRecord | null, bdataPtr: string | null): boolean
    /**
     * Save the `mi` content to the message info record `record`. It can populate all
     * but the record->bdata value, which is set fro mthe `bdata_str`. Use helper functions
     * camel_util_bdata_put_number() and camel_util_bdata_put_string() to put data into the `bdata_str`.
     * @virtual 
     * @param record a #CamelMIRecord to populate
     * @param bdataStr a #GString with a string to save as backend specific data (bdata)
     * @returns Whether the save succeeded.
     */
    save(record: MIRecord | null, bdataStr: GLib.String): boolean
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
     * @virtual 
     * @param cc a CC to set
     * @returns Whether the value changed.
     */
    setCc(cc: string | null): boolean
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
     * @virtual 
     * @param dateReceived a received date to set
     * @returns Whether the value changed.
     */
    setDateReceived(dateReceived: number): boolean
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
     * @virtual 
     * @param dateSent a sent date to set
     * @returns Whether the value changed.
     */
    setDateSent(dateSent: number): boolean
    /**
     * Change the state of the flags on the `mi`. Both `mask` and `set` are bit-or
     * of #CamelMessageFlags.
     * 
     * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
     * set automatically, unless the `mi` is aborting notifications. There is also emitted
     * folder's "changed" signal for this `mi,` if necessary. In case
     * the CAMEL_MESSAGE_FOLDER_FLAGGED flag would be set and the `mi` is
     * not aborting notifications, the 'folder-flagged-stamp' changes too.
     * @virtual 
     * @param mask mask of flags to change
     * @param set state the flags should be changed to
     * @returns Whether the flags changed.
     */
    setFlags(mask: number, set: number): boolean
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
     * @virtual 
     * @param from a From to set
     * @returns Whether the value changed.
     */
    setFrom(from: string | null): boolean
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
     * @virtual 
     * @param messageId a message id to set
     * @returns Whether the value changed.
     */
    setMessageId(messageId: number): boolean
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
     * @virtual 
     * @param mlist a message list address to set
     * @returns Whether the value changed.
     */
    setMlist(mlist: string | null): boolean
    /**
     * Set `preview` as the body preview of the associated message. Use %NULL or an empty
     * string to unset the value.
     * 
     * If the `mi` changed, the 'dirty' flag is set automatically, unless the `mi` is
     * aborting notifications. There is not emitted folder's "changed" signal for this `mi`.
     * @virtual 
     * @param preview message body preview, or %NULL
     * @returns Whether the value changed.
     */
    setPreview(preview: string | null): boolean
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
     * @virtual 
     * @param size a size to set
     * @returns Whether the value changed.
     */
    setSize(size: number): boolean
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
     * @virtual 
     * @param subject a Subject to set
     * @returns Whether the value changed.
     */
    setSubject(subject: string | null): boolean
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
     * @virtual 
     * @param to a To to set
     * @returns Whether the value changed.
     */
    setTo(to: string | null): boolean
    /**
     * Change `state` of the flag named `name`. Unlike user tags, user flags
     * can only be set or unset, while the user tags can contain certain values.
     * 
     * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
     * set automatically, unless the `mi` is aborting notifications. There is also emitted
     * folder's "changed" signal for this `mi,` if necessary.
     * @virtual 
     * @param name user flag name
     * @param state state to set for the flag
     * @returns Whether the message info changed.
     */
    setUserFlag(name: string | null, state: boolean): boolean
    /**
     * Set `value` for a single user-defined message header of the associated message.
     * When the `value` is %NULL, the header `name` is removed from the user-defined
     * headers.
     * 
     * If the `mi` changed, the 'dirty' flag is set automatically, unless the `mi` is
     * aborting notifications. There is not emitted folder's "changed" signal for this `mi`.
     * @virtual 
     * @param name header name
     * @param value header value, or %NULL
     * @returns Whether the value changed.
     */
    setUserHeader(name: string | null, value: string | null): boolean
    /**
     * Set user tag `name` to `value,` or remove it, if `value` is %NULL.
     * 
     * If the `mi` changed, the 'dirty' flag and the 'folder-flagged' flag are
     * set automatically, unless the `mi` is aborting notifications. There is also emitted
     * folder's "changed" signal for this `mi,` if necessary.
     * @virtual 
     * @param name user tag name
     * @param value user tag value, or %NULL to remove the user tag
     * @returns Whether the @mi changed.
     */
    setUserTag(name: string | null, value: string | null): boolean
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
     * @virtual 
     * @param headers headers to set, as #CamelNameValueArray, or %NULL
     * @returns Whether the value changed.
     */
    takeHeaders(headers: NameValueArray | null): boolean
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
     * @virtual 
     * @param references a references to set
     * @returns Whether the value changed.
     */
    takeReferences(references: number[] | null): boolean
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
     * @virtual 
     * @param userFlags user flags to set
     * @returns Whether the message info changed.
     */
    takeUserFlags(userFlags: NamedFlags | null): boolean
    /**
     * Takes user-defined message headers of the associated message.
     * 
     * If the `mi` changed, the 'dirty' flag is set automatically, unless the `mi` is
     * aborting notifications. There is not emitted folder's "changed" signal for this `mi`.
     * 
     * Note that it's not safe to use the `headers` after the call to this function,
     * because it can be freed due to no change.
     * @virtual 
     * @param headers headers to set, as #CamelNameValueArray, or %NULL
     * @returns Whether the value changed.
     */
    takeUserHeaders(headers: NameValueArray | null): boolean
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
     * @virtual 
     * @param userTags user tags to set
     * @returns Whether the @mi changed.
     */
    takeUserTags(userTags: NameValueArray | null): boolean

    // Class property signals of Camel-1.2.Camel.MessageInfo

    connect(sigName: "notify::abort-notifications", callback: (...args: any[]) => void): number
    on(sigName: "notify::abort-notifications", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::abort-notifications", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::abort-notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::abort-notifications", ...args: any[]): void
    connect(sigName: "notify::cc", callback: (...args: any[]) => void): number
    on(sigName: "notify::cc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cc", ...args: any[]): void
    connect(sigName: "notify::date-received", callback: (...args: any[]) => void): number
    on(sigName: "notify::date-received", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date-received", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date-received", ...args: any[]): void
    connect(sigName: "notify::date-sent", callback: (...args: any[]) => void): number
    on(sigName: "notify::date-sent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date-sent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date-sent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date-sent", ...args: any[]): void
    connect(sigName: "notify::dirty", callback: (...args: any[]) => void): number
    on(sigName: "notify::dirty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dirty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dirty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dirty", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::folder-flagged", callback: (...args: any[]) => void): number
    on(sigName: "notify::folder-flagged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::folder-flagged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::folder-flagged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::folder-flagged", ...args: any[]): void
    connect(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::folder-flagged-stamp", ...args: any[]): void
    connect(sigName: "notify::from", callback: (...args: any[]) => void): number
    on(sigName: "notify::from", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::from", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::from", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::from", ...args: any[]): void
    connect(sigName: "notify::headers", callback: (...args: any[]) => void): number
    on(sigName: "notify::headers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::headers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::headers", ...args: any[]): void
    connect(sigName: "notify::message-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::message-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message-id", ...args: any[]): void
    connect(sigName: "notify::mlist", callback: (...args: any[]) => void): number
    on(sigName: "notify::mlist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mlist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mlist", ...args: any[]): void
    connect(sigName: "notify::preview", callback: (...args: any[]) => void): number
    on(sigName: "notify::preview", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::preview", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::preview", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::preview", ...args: any[]): void
    connect(sigName: "notify::references", callback: (...args: any[]) => void): number
    on(sigName: "notify::references", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::references", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::references", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::subject", callback: (...args: any[]) => void): number
    on(sigName: "notify::subject", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subject", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subject", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::to", callback: (...args: any[]) => void): number
    on(sigName: "notify::to", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::to", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::to", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::user-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-flags", ...args: any[]): void
    connect(sigName: "notify::user-headers", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-headers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-headers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-headers", ...args: any[]): void
    connect(sigName: "notify::user-tags", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-tags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-tags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-tags", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MessageInfo extends GObject.Object {

    // Own properties of Camel-1.2.Camel.MessageInfo

    static name: string

    // Constructors of Camel-1.2.Camel.MessageInfo

    constructor(config?: MessageInfo.ConstructorProperties) 
    /**
     * Create a new #CamelMessageInfo object, optionally for given `summary`.
     * @constructor 
     * @param summary parent #CamelFolderSummary object, or %NULL
     * @returns a new #CamelMessageInfo object
     */
    constructor(summary: FolderSummary | null) 
    /**
     * Create a new #CamelMessageInfo object, optionally for given `summary`.
     * @constructor 
     * @param summary parent #CamelFolderSummary object, or %NULL
     * @returns a new #CamelMessageInfo object
     */
    static new(summary: FolderSummary | null): MessageInfo
    /**
     * Create a new #CamelMessageInfo pre-populated with info from
     * `headers`.
     * @constructor 
     * @param summary a #CamelFolderSummary object or %NULL
     * @param headers a #CamelNameValueArray
     * @returns a new #CamelMessageInfo
     */
    static newFromHeaders(summary: FolderSummary | null, headers: NameValueArray): MessageInfo
    _init(config?: MessageInfo.ConstructorProperties): void
}

export module MessageInfoBase {

    // Constructor properties interface

    export interface ConstructorProperties extends MessageInfo.ConstructorProperties {
    }

}

export interface MessageInfoBase {

    // Own properties of Camel-1.2.Camel.MessageInfoBase

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MessageInfoBase

    parent: MessageInfo & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.MessageInfoBase

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::abort-notifications", callback: (...args: any[]) => void): number
    on(sigName: "notify::abort-notifications", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::abort-notifications", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::abort-notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::abort-notifications", ...args: any[]): void
    connect(sigName: "notify::cc", callback: (...args: any[]) => void): number
    on(sigName: "notify::cc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cc", ...args: any[]): void
    connect(sigName: "notify::date-received", callback: (...args: any[]) => void): number
    on(sigName: "notify::date-received", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date-received", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date-received", ...args: any[]): void
    connect(sigName: "notify::date-sent", callback: (...args: any[]) => void): number
    on(sigName: "notify::date-sent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date-sent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date-sent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date-sent", ...args: any[]): void
    connect(sigName: "notify::dirty", callback: (...args: any[]) => void): number
    on(sigName: "notify::dirty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dirty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dirty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dirty", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::folder-flagged", callback: (...args: any[]) => void): number
    on(sigName: "notify::folder-flagged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::folder-flagged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::folder-flagged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::folder-flagged", ...args: any[]): void
    connect(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::folder-flagged-stamp", ...args: any[]): void
    connect(sigName: "notify::from", callback: (...args: any[]) => void): number
    on(sigName: "notify::from", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::from", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::from", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::from", ...args: any[]): void
    connect(sigName: "notify::headers", callback: (...args: any[]) => void): number
    on(sigName: "notify::headers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::headers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::headers", ...args: any[]): void
    connect(sigName: "notify::message-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::message-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message-id", ...args: any[]): void
    connect(sigName: "notify::mlist", callback: (...args: any[]) => void): number
    on(sigName: "notify::mlist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mlist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mlist", ...args: any[]): void
    connect(sigName: "notify::preview", callback: (...args: any[]) => void): number
    on(sigName: "notify::preview", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::preview", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::preview", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::preview", ...args: any[]): void
    connect(sigName: "notify::references", callback: (...args: any[]) => void): number
    on(sigName: "notify::references", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::references", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::references", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::subject", callback: (...args: any[]) => void): number
    on(sigName: "notify::subject", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subject", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subject", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::to", callback: (...args: any[]) => void): number
    on(sigName: "notify::to", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::to", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::to", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::user-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-flags", ...args: any[]): void
    connect(sigName: "notify::user-headers", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-headers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-headers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-headers", ...args: any[]): void
    connect(sigName: "notify::user-tags", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-tags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-tags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-tags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MessageInfoBase extends MessageInfo {

    // Own properties of Camel-1.2.Camel.MessageInfoBase

    static name: string

    // Constructors of Camel-1.2.Camel.MessageInfoBase

    constructor(config?: MessageInfoBase.ConstructorProperties) 
    _init(config?: MessageInfoBase.ConstructorProperties): void
}

export module MimeFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilter

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeFilter

    parent: GObject.Object
    priv: MimeFilterPrivate
    outreal: string | null
    outbuf: string | null
    outptr: string | null
    outsize: number
    outpre: number
    backbuf: string | null
    backsize: number
    backlen: number

    // Owm methods of Camel-1.2.Camel.MimeFilter

    /**
     * Saves `data` to be used as prespace input data to the next call to
     * camel_mime_filter_filter() or camel_mime_filter_complete().
     * 
     * Note: New calls replace old data.
     * @param data data buffer to backup
     */
    backup(data: Uint8Array): void
    // Has conflict: complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    // Has conflict: filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    // Has conflict: reset(): void
    /**
     * Ensure that `filter` has enough storage space to store `size` bytes
     * for filter output.
     * @param size requested amount of storage space
     * @param keep %TRUE to keep existing buffered data or %FALSE otherwise
     */
    setSize(size: number, keep: number): void

    // Own virtual methods of Camel-1.2.Camel.MimeFilter

    /**
     * Passes the input buffer, `in,` through `filter` and generates an
     * output buffer, `out` and makes sure that all data is flushed to the
     * output buffer. This must be the last filtering call made, no
     * further calls to camel_mime_filter_filter() may be called on `filter`
     * until `filter` has been reset using camel_mime_filter_reset().
     * @virtual 
     * @param in_ input buffer
     * @param prespace amount of prespace
     */
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    /**
     * Passes the input buffer, `in,` through `filter` and generates an
     * output buffer, `out`.
     * @virtual 
     * @param in_ input buffer
     * @param prespace amount of prespace
     */
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    /**
     * Resets the state on `filter` so that it may be used again.
     * @virtual 
     */
    reset(): void

    // Class property signals of Camel-1.2.Camel.MimeFilter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeFilter extends GObject.Object {

    // Own properties of Camel-1.2.Camel.MimeFilter

    static name: string

    // Constructors of Camel-1.2.Camel.MimeFilter

    constructor(config?: MimeFilter.ConstructorProperties) 
    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     * @returns a new #CamelMimeFilter
     */
    constructor() 
    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     * @returns a new #CamelMimeFilter
     */
    static new(): MimeFilter
    _init(config?: MimeFilter.ConstructorProperties): void
}

export module MimeFilterBasic {

    // Constructor properties interface

    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
    }

}

export interface MimeFilterBasic {

    // Own properties of Camel-1.2.Camel.MimeFilterBasic

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeFilterBasic

    parent: MimeFilter & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.MimeFilterBasic

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeFilterBasic extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterBasic

    static name: string

    // Constructors of Camel-1.2.Camel.MimeFilterBasic

    constructor(config?: MimeFilterBasic.ConstructorProperties) 
    /**
     * Create a new #CamelMimeFilterBasic object of type `type`.
     * @constructor 
     * @param type a #CamelMimeFilterBasicType type
     * @returns a new #CamelMimeFilterBasic object
     */
    constructor(type: MimeFilterBasicType) 
    /**
     * Create a new #CamelMimeFilterBasic object of type `type`.
     * @constructor 
     * @param type a #CamelMimeFilterBasicType type
     * @returns a new #CamelMimeFilterBasic object
     */
    static new(type: MimeFilterBasicType): MimeFilterBasic

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     * @returns a new #CamelMimeFilter
     */
    static new(): MimeFilter
    _init(config?: MimeFilterBasic.ConstructorProperties): void
}

export module MimeFilterBestenc {

    // Constructor properties interface

    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
    }

}

export interface MimeFilterBestenc {

    // Own properties of Camel-1.2.Camel.MimeFilterBestenc

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeFilterBestenc

    parent: MimeFilter & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.MimeFilterBestenc

    /**
     * Gets the best charset that can be used to contain this content.
     * @returns the name of the best charset to use to encode the input text filtered by @filter
     */
    getBestCharset(): string | null
    /**
     * Get the best encoding, given specific constraints, that can be used to
     * encode a stream of bytes.
     * @param required maximum level of output encoding allowed.
     * @returns the best encoding to use
     */
    getBestEncoding(required: BestencEncoding): TransferEncoding
    /**
     * Set the flags for subsequent operations.
     * @param flags bestenc filter flags
     */
    setFlags(flags: number): void

    // Class property signals of Camel-1.2.Camel.MimeFilterBestenc

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeFilterBestenc extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterBestenc

    static name: string

    // Constructors of Camel-1.2.Camel.MimeFilterBestenc

    constructor(config?: MimeFilterBestenc.ConstructorProperties) 
    /**
     * Create a new #CamelMimeFilterBestenc object.
     * @constructor 
     * @param flags a bitmask of data required.
     * @returns a new #CamelMimeFilterBestenc object
     */
    constructor(flags: number) 
    /**
     * Create a new #CamelMimeFilterBestenc object.
     * @constructor 
     * @param flags a bitmask of data required.
     * @returns a new #CamelMimeFilterBestenc object
     */
    static new(flags: number): MimeFilterBestenc

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     * @returns a new #CamelMimeFilter
     */
    static new(): MimeFilter
    _init(config?: MimeFilterBestenc.ConstructorProperties): void
}

export module MimeFilterCRLF {

    // Constructor properties interface

    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
    }

}

export interface MimeFilterCRLF {

    // Own properties of Camel-1.2.Camel.MimeFilterCRLF

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeFilterCRLF

    parent: MimeFilter & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.MimeFilterCRLF

    getEnsureCrlfEnd(): boolean
    /**
     * When set to true, the filter will ensure that the output stream will
     * end with CRLF, in case it does not. The default is to not do that.
     * The option is used only when encoding the stream.
     * @param ensureCrlfEnd value to set
     */
    setEnsureCrlfEnd(ensureCrlfEnd: boolean): void

    // Class property signals of Camel-1.2.Camel.MimeFilterCRLF

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeFilterCRLF extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterCRLF

    static name: string

    // Constructors of Camel-1.2.Camel.MimeFilterCRLF

    constructor(config?: MimeFilterCRLF.ConstructorProperties) 
    /**
     * Create a new #CamelMimeFilterCRLF object.
     * @constructor 
     * @param direction encode vs decode
     * @param mode whether or not to perform SMTP dot-escaping
     * @returns a new #CamelMimeFilterCRLF object
     */
    constructor(direction: MimeFilterCRLFDirection, mode: MimeFilterCRLFMode) 
    /**
     * Create a new #CamelMimeFilterCRLF object.
     * @constructor 
     * @param direction encode vs decode
     * @param mode whether or not to perform SMTP dot-escaping
     * @returns a new #CamelMimeFilterCRLF object
     */
    static new(direction: MimeFilterCRLFDirection, mode: MimeFilterCRLFMode): MimeFilterCRLF

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     * @returns a new #CamelMimeFilter
     */
    static new(): MimeFilter
    _init(config?: MimeFilterCRLF.ConstructorProperties): void
}

export module MimeFilterCanon {

    // Constructor properties interface

    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
    }

}

export interface MimeFilterCanon {

    // Own properties of Camel-1.2.Camel.MimeFilterCanon

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeFilterCanon

    parent: MimeFilter & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.MimeFilterCanon

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeFilterCanon extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterCanon

    static name: string

    // Constructors of Camel-1.2.Camel.MimeFilterCanon

    constructor(config?: MimeFilterCanon.ConstructorProperties) 
    /**
     * Create a new filter to canonicalise an input stream.
     * @constructor 
     * @param flags bitwise flags defining the behaviour of the filter
     * @returns a new #CamelMimeFilterCanon
     */
    constructor(flags: MimeFilterCanonFlags) 
    /**
     * Create a new filter to canonicalise an input stream.
     * @constructor 
     * @param flags bitwise flags defining the behaviour of the filter
     * @returns a new #CamelMimeFilterCanon
     */
    static new(flags: MimeFilterCanonFlags): MimeFilterCanon

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     * @returns a new #CamelMimeFilter
     */
    static new(): MimeFilter
    _init(config?: MimeFilterCanon.ConstructorProperties): void
}

export module MimeFilterCharset {

    // Constructor properties interface

    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
    }

}

export interface MimeFilterCharset {

    // Own properties of Camel-1.2.Camel.MimeFilterCharset

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeFilterCharset

    parent: MimeFilter & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.MimeFilterCharset

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeFilterCharset extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterCharset

    static name: string

    // Constructors of Camel-1.2.Camel.MimeFilterCharset

    constructor(config?: MimeFilterCharset.ConstructorProperties) 
    /**
     * Create a new #CamelMimeFilterCharset object to convert text from
     * `from_charset` to `to_charset`.
     * @constructor 
     * @param fromCharset charset to convert from
     * @param toCharset charset to convert to
     * @returns a new #CamelMimeFilterCharset object
     */
    constructor(fromCharset: string | null, toCharset: string | null) 
    /**
     * Create a new #CamelMimeFilterCharset object to convert text from
     * `from_charset` to `to_charset`.
     * @constructor 
     * @param fromCharset charset to convert from
     * @param toCharset charset to convert to
     * @returns a new #CamelMimeFilterCharset object
     */
    static new(fromCharset: string | null, toCharset: string | null): MimeFilterCharset

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     * @returns a new #CamelMimeFilter
     */
    static new(): MimeFilter
    _init(config?: MimeFilterCharset.ConstructorProperties): void
}

export module MimeFilterEnriched {

    // Constructor properties interface

    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
    }

}

export interface MimeFilterEnriched {

    // Own properties of Camel-1.2.Camel.MimeFilterEnriched

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeFilterEnriched

    parent: MimeFilter & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.MimeFilterEnriched

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeFilterEnriched extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterEnriched

    static name: string

    // Constructors of Camel-1.2.Camel.MimeFilterEnriched

    constructor(config?: MimeFilterEnriched.ConstructorProperties) 
    /**
     * Create a new #CamelMimeFilterEnriched object to convert input text
     * streams from text/plain into text/enriched or text/richtext.
     * @constructor 
     * @param flags bitwise set of flags to specify filter behaviour
     * @returns a new #CamelMimeFilterEnriched object
     */
    constructor(flags: MimeFilterEnrichedFlags) 
    /**
     * Create a new #CamelMimeFilterEnriched object to convert input text
     * streams from text/plain into text/enriched or text/richtext.
     * @constructor 
     * @param flags bitwise set of flags to specify filter behaviour
     * @returns a new #CamelMimeFilterEnriched object
     */
    static new(flags: MimeFilterEnrichedFlags): MimeFilterEnriched

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     * @returns a new #CamelMimeFilter
     */
    static new(): MimeFilter
    _init(config?: MimeFilterEnriched.ConstructorProperties): void
}

export module MimeFilterFrom {

    // Constructor properties interface

    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
    }

}

export interface MimeFilterFrom {

    // Own properties of Camel-1.2.Camel.MimeFilterFrom

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeFilterFrom

    parent: MimeFilter & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.MimeFilterFrom

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeFilterFrom extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterFrom

    static name: string

    // Constructors of Camel-1.2.Camel.MimeFilterFrom

    constructor(config?: MimeFilterFrom.ConstructorProperties) 
    /**
     * Create a new #CamelMimeFilterFrom object.
     * @constructor 
     * @returns a new #CamelMimeFilterFrom object
     */
    constructor() 
    /**
     * Create a new #CamelMimeFilterFrom object.
     * @constructor 
     * @returns a new #CamelMimeFilterFrom object
     */
    static new(): MimeFilterFrom
    _init(config?: MimeFilterFrom.ConstructorProperties): void
}

export module MimeFilterGZip {

    // Constructor properties interface

    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
    }

}

export interface MimeFilterGZip {

    // Own properties of Camel-1.2.Camel.MimeFilterGZip

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeFilterGZip

    parent: MimeFilter & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.MimeFilterGZip

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeFilterGZip extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterGZip

    static name: string

    // Constructors of Camel-1.2.Camel.MimeFilterGZip

    constructor(config?: MimeFilterGZip.ConstructorProperties) 
    /**
     * Creates a new gzip (or gunzip) filter.
     * @constructor 
     * @param mode zip or unzip
     * @param level compression level
     * @returns a new gzip (or gunzip) filter.
     */
    constructor(mode: MimeFilterGZipMode, level: number) 
    /**
     * Creates a new gzip (or gunzip) filter.
     * @constructor 
     * @param mode zip or unzip
     * @param level compression level
     * @returns a new gzip (or gunzip) filter.
     */
    static new(mode: MimeFilterGZipMode, level: number): MimeFilterGZip

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     * @returns a new #CamelMimeFilter
     */
    static new(): MimeFilter
    _init(config?: MimeFilterGZip.ConstructorProperties): void
}

export module MimeFilterHTML {

    // Constructor properties interface

    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
    }

}

export interface MimeFilterHTML {

    // Own properties of Camel-1.2.Camel.MimeFilterHTML

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeFilterHTML

    parent: MimeFilter & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.MimeFilterHTML

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeFilterHTML extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterHTML

    static name: string

    // Constructors of Camel-1.2.Camel.MimeFilterHTML

    constructor(config?: MimeFilterHTML.ConstructorProperties) 
    /**
     * Create a new #CamelMimeFilterHTML object.
     * @constructor 
     * @returns a new #CamelMimeFilterHTML object
     */
    constructor() 
    /**
     * Create a new #CamelMimeFilterHTML object.
     * @constructor 
     * @returns a new #CamelMimeFilterHTML object
     */
    static new(): MimeFilterHTML
    _init(config?: MimeFilterHTML.ConstructorProperties): void
}

export module MimeFilterIndex {

    // Constructor properties interface

    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
    }

}

export interface MimeFilterIndex {

    // Own properties of Camel-1.2.Camel.MimeFilterIndex

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeFilterIndex

    parent: MimeFilter & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.MimeFilterIndex

    /**
     * Set `index` on `filter`.
     * @param index a #CamelIndex object
     */
    setIndex(index: Index): void
    /**
     * Set the match name for any indexed words.
     * @param name a #CamelIndexName object
     */
    setName(name: IndexName): void

    // Class property signals of Camel-1.2.Camel.MimeFilterIndex

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeFilterIndex extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterIndex

    static name: string

    // Constructors of Camel-1.2.Camel.MimeFilterIndex

    constructor(config?: MimeFilterIndex.ConstructorProperties) 
    /**
     * Create a new #CamelMimeFilterIndex based on `index`.
     * @constructor 
     * @param index a #CamelIndex object
     * @returns a new #CamelMimeFilterIndex object
     */
    constructor(index: Index) 
    /**
     * Create a new #CamelMimeFilterIndex based on `index`.
     * @constructor 
     * @param index a #CamelIndex object
     * @returns a new #CamelMimeFilterIndex object
     */
    static new(index: Index): MimeFilterIndex

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     * @returns a new #CamelMimeFilter
     */
    static new(): MimeFilter
    _init(config?: MimeFilterIndex.ConstructorProperties): void
}

export module MimeFilterLinewrap {

    // Constructor properties interface

    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
    }

}

export interface MimeFilterLinewrap {

    // Own properties of Camel-1.2.Camel.MimeFilterLinewrap

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeFilterLinewrap

    parent: MimeFilter & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.MimeFilterLinewrap

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeFilterLinewrap extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterLinewrap

    static name: string

    // Constructors of Camel-1.2.Camel.MimeFilterLinewrap

    constructor(config?: MimeFilterLinewrap.ConstructorProperties) 
    constructor(preferredLen: number, maxLen: number, indentChar: number, flags: number) 
    static new(preferredLen: number, maxLen: number, indentChar: number, flags: number): MimeFilterLinewrap

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     * @returns a new #CamelMimeFilter
     */
    static new(): MimeFilter
    _init(config?: MimeFilterLinewrap.ConstructorProperties): void
}

export module MimeFilterPgp {

    // Constructor properties interface

    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
    }

}

export interface MimeFilterPgp {

    // Own properties of Camel-1.2.Camel.MimeFilterPgp

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeFilterPgp

    parent: MimeFilter & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.MimeFilterPgp

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeFilterPgp extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterPgp

    static name: string

    // Constructors of Camel-1.2.Camel.MimeFilterPgp

    constructor(config?: MimeFilterPgp.ConstructorProperties) 
    constructor() 
    static new(): MimeFilterPgp
    _init(config?: MimeFilterPgp.ConstructorProperties): void
}

export module MimeFilterProgress {

    // Constructor properties interface

    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
    }

}

export interface MimeFilterProgress {

    // Own properties of Camel-1.2.Camel.MimeFilterProgress

    __gtype__: number

    // Class property signals of Camel-1.2.Camel.MimeFilterProgress

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeFilterProgress extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterProgress

    static name: string

    // Constructors of Camel-1.2.Camel.MimeFilterProgress

    constructor(config?: MimeFilterProgress.ConstructorProperties) 
    /**
     * Create a new #CamelMimeFilterProgress object that will report streaming
     * progress.  While the function will silently accept `cancellable` being
     * %NULL or a plain #GCancellable for convenience sake, no progress will be
     * reported unless `cancellable` is a #CamelOperation.
     * @constructor 
     * @param cancellable a #CamelOperation cast as a #GCancellable
     * @param total total number of bytes to report progress on
     * @returns a new #CamelMimeFilter object
     */
    constructor(cancellable: Gio.Cancellable | null, total: number) 
    /**
     * Create a new #CamelMimeFilterProgress object that will report streaming
     * progress.  While the function will silently accept `cancellable` being
     * %NULL or a plain #GCancellable for convenience sake, no progress will be
     * reported unless `cancellable` is a #CamelOperation.
     * @constructor 
     * @param cancellable a #CamelOperation cast as a #GCancellable
     * @param total total number of bytes to report progress on
     * @returns a new #CamelMimeFilter object
     */
    static new(cancellable: Gio.Cancellable | null, total: number): MimeFilterProgress

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     * @returns a new #CamelMimeFilter
     */
    static new(): MimeFilter
    _init(config?: MimeFilterProgress.ConstructorProperties): void
}

export module MimeFilterToHTML {

    // Constructor properties interface

    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
    }

}

export interface MimeFilterToHTML {

    // Own properties of Camel-1.2.Camel.MimeFilterToHTML

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeFilterToHTML

    parent: MimeFilter & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.MimeFilterToHTML

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeFilterToHTML extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterToHTML

    static name: string

    // Constructors of Camel-1.2.Camel.MimeFilterToHTML

    constructor(config?: MimeFilterToHTML.ConstructorProperties) 
    /**
     * Create a new #CamelMimeFilterToHTML object to convert plain text
     * into HTML.
     * @constructor 
     * @param flags bitwise flags defining the behaviour
     * @param color color to use when highlighting quoted text
     * @returns a new #CamelMimeFilterToHTML object
     */
    constructor(flags: MimeFilterToHTMLFlags, color: number) 
    /**
     * Create a new #CamelMimeFilterToHTML object to convert plain text
     * into HTML.
     * @constructor 
     * @param flags bitwise flags defining the behaviour
     * @param color color to use when highlighting quoted text
     * @returns a new #CamelMimeFilterToHTML object
     */
    static new(flags: MimeFilterToHTMLFlags, color: number): MimeFilterToHTML

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     * @returns a new #CamelMimeFilter
     */
    static new(): MimeFilter
    _init(config?: MimeFilterToHTML.ConstructorProperties): void
}

export module MimeFilterWindows {

    // Constructor properties interface

    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
    }

}

export interface MimeFilterWindows {

    // Own properties of Camel-1.2.Camel.MimeFilterWindows

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeFilterWindows

    parent: MimeFilter & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.MimeFilterWindows

    /**
     * Get whether or not the textual content filtered by `filter` is
     * really in a Microsoft Windows charset rather than the claimed ISO
     * charset.
     * @returns %TRUE if the text was found to be in a Microsoft Windows CP125x charset or %FALSE otherwise.
     */
    isWindowsCharset(): boolean
    /**
     * Get the name of the actual charset used to encode the textual
     * content filtered by `filter` (it will either be the original
     * claimed_charset passed in at creation time or the Windows-CP125x
     * equivalent).
     * @returns the name of the actual charset
     */
    realCharset(): string | null

    // Class property signals of Camel-1.2.Camel.MimeFilterWindows

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeFilterWindows extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterWindows

    static name: string

    // Constructors of Camel-1.2.Camel.MimeFilterWindows

    constructor(config?: MimeFilterWindows.ConstructorProperties) 
    /**
     * Create a new #CamelMimeFilterWindows object that will analyse
     * whether or not the text is really encoded in `claimed_charset`.
     * @constructor 
     * @param claimedCharset ISO charset name
     * @returns a new #CamelMimeFilter object
     */
    constructor(claimedCharset: string | null) 
    /**
     * Create a new #CamelMimeFilterWindows object that will analyse
     * whether or not the text is really encoded in `claimed_charset`.
     * @constructor 
     * @param claimedCharset ISO charset name
     * @returns a new #CamelMimeFilter object
     */
    static new(claimedCharset: string | null): MimeFilterWindows

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     * @returns a new #CamelMimeFilter
     */
    static new(): MimeFilter
    _init(config?: MimeFilterWindows.ConstructorProperties): void
}

export module MimeFilterYenc {

    // Constructor properties interface

    export interface ConstructorProperties extends MimeFilter.ConstructorProperties {
    }

}

export interface MimeFilterYenc {

    // Own properties of Camel-1.2.Camel.MimeFilterYenc

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeFilterYenc

    parent: MimeFilter & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.MimeFilterYenc

    /**
     * Get the computed crc or (#guint32) -1 on fail.
     * @returns the computed crc or (#guint32) -1 on fail.
     */
    getCrc(): number
    /**
     * Get the computed part crc or (#guint32) -1 on fail.
     * @returns the computed part crc or (#guint32) -1 on fail.
     */
    getPcrc(): number
    /**
     * Sets the current crc32 value on the yEnc filter `yenc` to `crc`.
     * @param crc crc32 value
     */
    setCrc(crc: number): void
    /**
     * Sets the current state of the yencoder/ydecoder
     * @param state encode/decode state
     */
    setState(state: number): void

    // Class property signals of Camel-1.2.Camel.MimeFilterYenc

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeFilterYenc extends MimeFilter {

    // Own properties of Camel-1.2.Camel.MimeFilterYenc

    static name: string

    // Constructors of Camel-1.2.Camel.MimeFilterYenc

    constructor(config?: MimeFilterYenc.ConstructorProperties) 
    /**
     * Create a new #CamelMimeFilterYenc filter object.
     * @constructor 
     * @param direction encode direction
     * @returns a new #CamelMimeFilterYenc object
     */
    constructor(direction: MimeFilterYencDirection) 
    /**
     * Create a new #CamelMimeFilterYenc filter object.
     * @constructor 
     * @param direction encode direction
     * @returns a new #CamelMimeFilterYenc object
     */
    static new(direction: MimeFilterYencDirection): MimeFilterYenc

    // Overloads of new

    /**
     * Create a new #CamelMimeFilter object.
     * @constructor 
     * @returns a new #CamelMimeFilter
     */
    static new(): MimeFilter
    _init(config?: MimeFilterYenc.ConstructorProperties): void
}

export module MimeMessage {

    // Constructor properties interface

    export interface ConstructorProperties extends MimePart.ConstructorProperties {
    }

}

export interface MimeMessage {

    // Own properties of Camel-1.2.Camel.MimeMessage

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeMessage

    parent: MimePart & Medium & DataWrapper & GObject.Object & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.MimeMessage

    /**
     * Build an MBox from-line from `message`.
     * @returns an MBox from-line suitable for use in an mbox file
     */
    buildMboxFrom(): string | null
    /**
     * Dump information about the mime message to stdout.
     * 
     * If body is TRUE, then dump body content of the message as well.
     * @param body whether to dump also message body
     */
    dump(body: number): void
    /**
     * Encode all message parts to a suitable transfer encoding for transport (7bit clean).
     */
    encode8bitParts(): void
    /**
     * Calls `callback` for each part of the `message,` including the message itself.
     * The traverse of the `message` parts can be stopped when the `callback`
     * returns %FALSE.
     */
    foreachPart(): void
    /**
     * Get the date and UTC offset of a message.
     * See camel_mime_message_set_date() for information about the `offset` format.
     * @returns the date of the message
     */
    getDate(): [ /* returnType */ number, /* offset */ number ]
    /**
     * Get the received date and UTC offset of a message.
     * See camel_mime_message_set_date() for information about the `offset` format.
     * @returns the received date of the message
     */
    getDateReceived(): [ /* returnType */ number, /* offset */ number ]
    /**
     * Get the from address of a message.
     * @returns the from address of the message
     */
    getFrom(): InternetAddress | null
    /**
     * Get the message-id of a message.
     * @returns the message-id of a message
     */
    getMessageId(): string | null
    /**
     * Get a MIME part by id from a message.
     * @param contentId content-id to search for
     * @returns the MIME part with the requested id, or %NULL if not found
     */
    getPartByContentId(contentId: string | null): MimePart | null
    /**
     * Get the message recipients of a specified type.
     * @param type recipient type
     * @returns the requested recipients
     */
    getRecipients(type: string | null): InternetAddress | null
    /**
     * Get the Reply-To of a message.
     * @returns the Reply-To address of the message
     */
    getReplyTo(): InternetAddress | null
    /**
     * Get the UID of the source account of the message.
     * @returns the uid of the source account
     */
    getSource(): string | null
    /**
     * Get the UTF-8 subject text of a message.
     * @returns the message subject
     */
    getSubject(): string | null
    /**
     * Find out if a message contains 8bit or binary encoded parts.
     * @returns %TRUE if the message contains 8bit parts or %FALSE otherwise
     */
    has8bitParts(): boolean
    /**
     * Returns whether message contains at least one attachment part.
     */
    hasAttachment(): boolean
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
    setBestEncoding(required: BestencRequired, enctype: BestencEncoding): void
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
     * @param offset an offset from UTC in decimal number using the +HHMM format (for instance an offset   of -10:45 is -1045). If `date` set to %CAMEL_MESSAGE_DATE_CURRENT, this parameter is ignored
     */
    setDate(date: number, offset: number): void
    /**
     * Set the from address of a message.
     * @param from a #CamelInternetAddress object
     */
    setFrom(from: InternetAddress | null): void
    /**
     * Set the message-id on a message.
     * @param messageId id of the message, or %NULL to generate a new one using the from address
     */
    setMessageId(messageId: string | null): void
    /**
     * Set the recipients of a message.
     * @param type recipient type (one of #CAMEL_RECIPIENT_TYPE_TO, #CAMEL_RECIPIENT_TYPE_CC, or #CAMEL_RECIPIENT_TYPE_BCC)
     * @param recipients a #CamelInternetAddress with the recipient addresses set or %NULL   to remove the already defined one
     */
    setRecipients(type: string | null, recipients: InternetAddress | null): void
    /**
     * Set the Reply-To of a message.
     * @param replyTo a #CamelInternetAddress object
     */
    setReplyTo(replyTo: InternetAddress | null): void
    /**
     * Set the UID of the source account of the message.
     * @param sourceUid the uid of the source account
     */
    setSource(sourceUid: string | null): void
    /**
     * Set the subject text of a message.
     * @param subject UTF-8 message subject
     */
    setSubject(subject: string | null): void

    // Conflicting methods

    /**
     * Utility function used to set the content of a mime part object to
     * be the provided data. If `length` is 0, this routine can be used as
     * a way to remove old content (in which case `data` and `type` are
     * ignored and may be %NULL).
     * @param data data to put into the part
     * @param type Content-Type of the data
     */
    setContent(data: Uint8Array | null, type: string | null): void

    // Overloads of setContent

    /**
     * Sets the content of `medium` to be `content`.
     * @virtual 
     * @param content a #CamelDataWrapper object
     */
    setContent(content: DataWrapper | null): void
    /**
     * Sets the content of `medium` to be `content`.
     * @virtual 
     * @param content a #CamelDataWrapper object
     */
    setContent(content: DataWrapper | null): void

    // Class property signals of Camel-1.2.Camel.MimeMessage

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::content-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-id", ...args: any[]): void
    connect(sigName: "notify::content-md5", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-md5", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-md5", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-md5", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-md5", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::disposition", callback: (...args: any[]) => void): number
    on(sigName: "notify::disposition", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disposition", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disposition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disposition", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeMessage extends MimePart {

    // Own properties of Camel-1.2.Camel.MimeMessage

    static name: string

    // Constructors of Camel-1.2.Camel.MimeMessage

    constructor(config?: MimeMessage.ConstructorProperties) 
    /**
     * Create a new #CamelMimeMessage object.
     * @constructor 
     * @returns a new #CamelMimeMessage object
     */
    constructor() 
    /**
     * Create a new #CamelMimeMessage object.
     * @constructor 
     * @returns a new #CamelMimeMessage object
     */
    static new(): MimeMessage

    // Overloads of new

    /**
     * Create a new MIME part.
     * @constructor 
     * @returns a new #CamelMimePart
     */
    static new(): MimePart
    /**
     * Create a new #CamelDataWrapper object.
     * @constructor 
     * @returns a new #CamelDataWrapper object
     */
    static new(): DataWrapper
    _init(config?: MimeMessage.ConstructorProperties): void
}

export module MimeParser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MimeParser {

    // Own properties of Camel-1.2.Camel.MimeParser

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimeParser

    parent: GObject.Object
    priv: MimeParserPrivate

    // Owm methods of Camel-1.2.Camel.MimeParser

    /**
     * Get the content type defined in the current part.
     * @returns A content_type structure, or %NULL if there is no content-type defined for this part of state of the parser.
     */
    contentType(): ContentType | null
    /**
     * Drop the last step call.  This should only be used
     * in conjunction with seeking of the stream as the
     * stream may be in an undefined state relative to the
     * state of the parser.
     * 
     * Use this call with care.
     */
    dropStep(): void
    /**
     * Get the list of the raw headers which are defined for the
     * current state of the parser.  These headers are valid
     * until the next call to camel_mime_parser_step(), or camel_mime_parser_drop_step().
     * @returns The headers, or %NULL, if there are no headers defined for the current part or state. Free it with camel_name_value_array_free().
     */
    dupHeaders(): NameValueArray | null
    errno(): number
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
    filterAdd(mf: MimeFilter): number
    /**
     * Remove a processing filter from the pipeline.  There is no
     * restriction on the order the filters can be removed.
     * @param id id of the filter to remove, as returned from camel_mime_parser_filter_add()
     */
    filterRemove(id: number): void
    /**
     * Get the last scanned "From " line, from a recently scanned from.
     * This should only be called in the CAMEL_MIME_PARSER_STATE_FROM state.  The
     * from line will include the closing \n found (if there was one).
     * 
     * The return value will remain valid while in the CAMEL_MIME_PARSER_STATE_FROM
     * state, or any deeper state.
     * @returns The From line, or %NULL if called out of context.
     */
    fromLine(): string | null
    /**
     * Lookup a header by name.
     * @param name Name of header.
     * @param offset Pointer that can receive the offset of the header in the stream from the start of parsing.
     * @returns The header value, or %NULL if the header is not defined.
     */
    header(name: string | null, offset: number): string | null
    /**
     * Convenience function creates a #GMemoryInputStream from `bytes` and hands
     * it off to camel_mime_parser_init_with_input_stream().
     * @param bytes a #GBytes containing the message content
     */
    initWithBytes(bytes: any): void
    /**
     * Initialise the scanner with an fd.  The scanner's offsets
     * will be relative to the current file position of the file
     * descriptor.  As a result, seekable descritors should
     * be seeked using the parser seek functions.
     * @param fd A valid file descriptor.
     * @returns Returns -1 on error.
     */
    initWithFd(fd: number): number
    /**
     * Initialize the scanner with `input_stream`.  The scanner's offsets will
     * be relative to the current file position of the stream.  As a result,
     * seekable streams should only be seeked using the parser seek function.
     * @param inputStream a #GInputStream
     */
    initWithInputStream(inputStream: Gio.InputStream): void
    /**
     * Initialise the scanner with a source stream.  The scanner's
     * offsets will be relative to the current file position of
     * the stream.  As a result, seekable streams should only
     * be seeked using the parser seek function.
     * @param stream a #CamelStream to init with
     * @returns -1 on error.
     */
    initWithStream(stream: Stream): number
    /**
     * Retrieve the postface text for the current multipart.
     * Only returns valid data when the current state if
     * CAMEL_MIME_PARSER_STATE_MULTIPART_END.
     * @returns The postface text, or %NULL if there wasn't any.
     */
    postface(): string | null
    /**
     * Retrieve the preface text for the current multipart.
     * Can only be used when the state is CAMEL_MIME_PARSER_STATE_MULTIPART_END.
     * @returns The preface text, or %NULL if there wasn't any.
     */
    preface(): string | null
    /**
     * Pre-load a new parser state.  Used to post-parse multipart content
     * without headers.
     * @param newstate New state
     * @param boundary Boundary marker for state.
     */
    pushState(newstate: MimeParserState, boundary: string | null): void
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
    read(len: number): [ /* returnType */ number, /* databuffer */ Uint8Array ]
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
     * @param scanFrom %TRUE if the scanner should scan From lines.
     */
    scanFrom(scanFrom: boolean): void
    /**
     * Tell the scanner whether we want to know abou the pre-from
     * data during a scan.  If we do, then we may get an additional
     * state CAMEL_MIME_PARSER_STATE_PRE_FROM which returns the specified data.
     * @param scanPreFrom %TRUE if we want to get pre-from data.
     */
    scanPreFrom(scanPreFrom: boolean): void
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
    seek(offset: number, whence: number): number
    setHeaderRegex(matchstr: string | null): number
    /**
     * Get the current parser state.
     * @returns The current parser state.
     */
    state(): MimeParserState
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
    step(databuffer?: Uint8Array): [ /* returnType */ MimeParserState, /* databuffer */ Uint8Array ]
    /**
     * Get the stream, if any, the parser has been initialised
     * with.  May be used to setup sub-streams, but should not
     * be read from directly (without saving and restoring
     * the seek position in between).
     * @returns The stream from camel_mime_parser_init_with_stream(), or NULL if the parser is reading from a file descriptor or is uninitialised.
     */
    stream(): Stream | null
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
    tell(): number
    /**
     * When parsing a multipart, this returns the start of the last
     * boundary.
     * @returns The start of the boundary, or -1 if there was no boundary encountered yet.
     */
    tellStartBoundary(): number
    /**
     * If the parser is scanning From lines, then this returns
     * the position of the start of the From line.
     * @returns The start of the from line, or -1 if there was no From line, or From lines are not being scanned.
     */
    tellStartFrom(): number
    /**
     * Find out the position within the file of where the
     * headers started, this is cached by the parser
     * at the time.
     * @returns The header start position, or -1 if no headers were scanned in the current state.
     */
    tellStartHeaders(): number
    /**
     * Cause the last step operation to repeat itself.  If this is
     * called repeated times, then the same step will be repeated
     * that many times.
     * 
     * Note that it is not possible to scan back using this function,
     * only to have a way of peeking the next state.
     */
    unstep(): void

    // Own virtual methods of Camel-1.2.Camel.MimeParser

    content(): void
    message(headers: any | null): void
    part(): void

    // Class property signals of Camel-1.2.Camel.MimeParser

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimeParser extends GObject.Object {

    // Own properties of Camel-1.2.Camel.MimeParser

    static name: string

    // Constructors of Camel-1.2.Camel.MimeParser

    constructor(config?: MimeParser.ConstructorProperties) 
    /**
     * Create a new CamelMimeParser object.
     * @constructor 
     * @returns A new #CamelMimeParser object
     */
    constructor() 
    /**
     * Create a new CamelMimeParser object.
     * @constructor 
     * @returns A new #CamelMimeParser object
     */
    static new(): MimeParser
    _init(config?: MimeParser.ConstructorProperties): void
}

export module MimePart {

    // Constructor properties interface

    export interface ConstructorProperties extends Medium.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.MimePart

        contentId?: string | null
        contentMd5?: string | null
        description?: string | null
        disposition?: string | null
    }

}

export interface MimePart {

    // Own properties of Camel-1.2.Camel.MimePart

    contentId: string | null
    contentMd5: string | null
    description: string | null
    disposition: string | null
    __gtype__: number

    // Own fields of Camel-1.2.Camel.MimePart

    parent: Medium & DataWrapper & GObject.Object & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.MimePart

    /**
     * Constructs the contnet of `mime_part` from the given mime parser.
     * @param mp a #CamelMimeParser
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    constructContentFromParser(mp: MimeParser, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously constructs a MIME part from a parser.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_mime_part_construct_from_parser_finish() to get the result of
     * the operation.
     * @param parser a #CamelMimeParser
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    constructFromParser(parser: MimeParser, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_mime_part_construct_from_parser().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    constructFromParserFinish(result: Gio.AsyncResult): boolean
    // Has conflict: constructFromParserSync(parser: MimeParser, cancellable: Gio.Cancellable | null): boolean
    /**
     * Get the disposition of the MIME part as a structure.
     * Returned pointer is owned by `mime_part`.
     * @returns the disposition structure
     */
    getContentDisposition(): ContentDisposition | null
    /**
     * Get the content-id field of a MIME part.
     * @returns the content-id field of the MIME part
     */
    getContentId(): string | null
    /**
     * Get the Content-Languages set on the MIME part.
     * @returns a #GList of languages
     */
    getContentLanguages(): string[] | null
    /**
     * Get the content-location field of a MIME part.
     * @returns the content-location field of a MIME part
     */
    getContentLocation(): string | null
    /**
     * Get the content-md5 field of the MIME part.
     * @returns the content-md5 field of the MIME part
     */
    getContentMd5(): string | null
    /**
     * Get the Content-Type of a MIME part.
     * @returns the parsed #CamelContentType of the MIME part
     */
    getContentType(): ContentType | null
    /**
     * Get the description of the MIME part.
     * @returns the description
     */
    getDescription(): string | null
    /**
     * Get the disposition of the MIME part.
     * @returns the disposition
     */
    getDisposition(): string | null
    /**
     * Get the Content-Transfer-Encoding of a MIME part.
     * @returns a #CamelTransferEncoding
     */
    getEncoding(): TransferEncoding
    /**
     * Get the filename of a MIME part.
     * @returns the filename of the MIME part
     */
    getFilename(): string | null
    /**
     * Utility function used to set the content of a mime part object to
     * be the provided data. If `length` is 0, this routine can be used as
     * a way to remove old content (in which case `data` and `type` are
     * ignored and may be %NULL).
     * @param data data to put into the part
     * @param type Content-Type of the data
     */
    setContent(data: Uint8Array | null, type: string | null): void

    // Overloads of setContent

    /**
     * Sets the content of `medium` to be `content`.
     * @virtual 
     * @param content a #CamelDataWrapper object
     */
    setContent(content: DataWrapper | null): void
    /**
     * Set the content-id field on a MIME part.
     * @param contentid content id
     */
    setContentId(contentid: string | null): void
    /**
     * Set the Content-Languages field of a MIME part.
     * @param contentLanguages list of languages
     */
    setContentLanguages(contentLanguages: string[] | null): void
    /**
     * Set the content-location field of the MIME part.
     * @param location the content-location value of the MIME part
     */
    setContentLocation(location: string | null): void
    /**
     * Set the content-md5 field of the MIME part.
     * @param md5sum the md5sum of the MIME part
     */
    setContentMd5(md5sum: string | null): void
    /**
     * Set the content-type on a MIME part.
     * @param contentType content-type string
     */
    setContentType(contentType: string | null): void
    /**
     * Set a description on the MIME part.
     * @param description description of the MIME part
     */
    setDescription(description: string | null): void
    /**
     * Set a disposition on the MIME part.
     * @param disposition disposition of the MIME part
     */
    setDisposition(disposition: string | null): void
    /**
     * Set the Content-Transfer-Encoding to use on a MIME part.
     * @param encoding a #CamelTransferEncoding
     */
    setEncoding(encoding: TransferEncoding): void
    /**
     * Set the filename on a MIME part.
     * @param filename filename given to the MIME part
     */
    setFilename(filename: string | null): void

    // Own virtual methods of Camel-1.2.Camel.MimePart

    /**
     * Constructs a MIME part from a parser.
     * @virtual 
     * @param parser a #CamelMimeParser
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    constructFromParserSync(parser: MimeParser, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of Camel-1.2.Camel.MimePart

    connect(sigName: "notify::content-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-id", ...args: any[]): void
    connect(sigName: "notify::content-md5", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-md5", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-md5", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-md5", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-md5", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::disposition", callback: (...args: any[]) => void): number
    on(sigName: "notify::disposition", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disposition", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disposition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disposition", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MimePart extends Medium {

    // Own properties of Camel-1.2.Camel.MimePart

    static name: string

    // Constructors of Camel-1.2.Camel.MimePart

    constructor(config?: MimePart.ConstructorProperties) 
    /**
     * Create a new MIME part.
     * @constructor 
     * @returns a new #CamelMimePart
     */
    constructor() 
    /**
     * Create a new MIME part.
     * @constructor 
     * @returns a new #CamelMimePart
     */
    static new(): MimePart

    // Overloads of new

    /**
     * Create a new #CamelDataWrapper object.
     * @constructor 
     * @returns a new #CamelDataWrapper object
     */
    static new(): DataWrapper
    _init(config?: MimePart.ConstructorProperties): void
}

export module Multipart {

    // Constructor properties interface

    export interface ConstructorProperties extends DataWrapper.ConstructorProperties {
    }

}

export interface Multipart {

    // Own properties of Camel-1.2.Camel.Multipart

    __gtype__: number

    // Own fields of Camel-1.2.Camel.Multipart

    parent: DataWrapper & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.Multipart

    // Has conflict: addPart(part: MimePart): void
    // Has conflict: constructFromParser(parser: MimeParser): number
    // Has conflict: getBoundary(): string | null
    // Has conflict: getNumber(): number
    // Has conflict: getPart(index: number): MimePart | null
    /**
     * Returns the postface text for `multipart`.
     * @returns the postface text
     */
    getPostface(): string | null
    /**
     * Returns the preface text for `multipart`.
     * @returns the preface text
     */
    getPreface(): string | null
    // Has conflict: setBoundary(boundary: string | null): void
    /**
     * Set the postface text for this multipart.  Will be written out after
     * the last boundary of the multipart, and ignored by any MIME mail
     * client.
     * 
     * Generally postface texts should not be sent with multipart messages.
     * @param postface multipat postface
     */
    setPostface(postface: string | null): void
    /**
     * Set the preface text for this multipart.  Will be written out infront
     * of the multipart.  This text should only include US-ASCII strings, and
     * be relatively short, and will be ignored by any MIME mail client.
     * @param preface the multipart preface
     */
    setPreface(preface: string | null): void

    // Own virtual methods of Camel-1.2.Camel.Multipart

    /**
     * Appends the part to the multipart object.
     * @virtual 
     * @param part a #CamelMimePart to add
     */
    addPart(part: MimePart): void
    /**
     * Construct a multipart from a parser.
     * @virtual 
     * @param parser a #CamelMimeParser object
     * @returns 0 on success or -1 on fail
     */
    constructFromParser(parser: MimeParser): number
    getBoundary(): string | null
    getNumber(): number
    getPart(index: number): MimePart | null
    /**
     * Sets the message boundary for `multipart` to `boundary`. This should
     * be a string which does not occur anywhere in any of `multipart'`s
     * subparts. If `boundary` is %NULL, a randomly-generated boundary will
     * be used.
     * @virtual 
     * @param boundary the message boundary, or %NULL
     */
    setBoundary(boundary: string | null): void

    // Class property signals of Camel-1.2.Camel.Multipart

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Multipart extends DataWrapper {

    // Own properties of Camel-1.2.Camel.Multipart

    static name: string

    // Constructors of Camel-1.2.Camel.Multipart

    constructor(config?: Multipart.ConstructorProperties) 
    /**
     * Create a new #CamelMultipart object.
     * @constructor 
     * @returns a new #CamelMultipart object
     */
    constructor() 
    /**
     * Create a new #CamelMultipart object.
     * @constructor 
     * @returns a new #CamelMultipart object
     */
    static new(): Multipart

    // Overloads of new

    /**
     * Create a new #CamelDataWrapper object.
     * @constructor 
     * @returns a new #CamelDataWrapper object
     */
    static new(): DataWrapper
    _init(config?: Multipart.ConstructorProperties): void
}

export module MultipartEncrypted {

    // Constructor properties interface

    export interface ConstructorProperties extends Multipart.ConstructorProperties {
    }

}

export interface MultipartEncrypted {

    // Own properties of Camel-1.2.Camel.MultipartEncrypted

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MultipartEncrypted

    parent: Multipart & DataWrapper & GObject.Object & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.MultipartEncrypted

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MultipartEncrypted extends Multipart {

    // Own properties of Camel-1.2.Camel.MultipartEncrypted

    static name: string

    // Constructors of Camel-1.2.Camel.MultipartEncrypted

    constructor(config?: MultipartEncrypted.ConstructorProperties) 
    /**
     * Create a new #CamelMultipartEncrypted object.
     * 
     * A MultipartEncrypted should be used to store and create parts of
     * type "multipart/encrypted".
     * @constructor 
     * @returns a new #CamelMultipartEncrypted object
     */
    constructor() 
    /**
     * Create a new #CamelMultipartEncrypted object.
     * 
     * A MultipartEncrypted should be used to store and create parts of
     * type "multipart/encrypted".
     * @constructor 
     * @returns a new #CamelMultipartEncrypted object
     */
    static new(): MultipartEncrypted

    // Overloads of new

    /**
     * Create a new #CamelMultipart object.
     * @constructor 
     * @returns a new #CamelMultipart object
     */
    static new(): Multipart
    /**
     * Create a new #CamelDataWrapper object.
     * @constructor 
     * @returns a new #CamelDataWrapper object
     */
    static new(): DataWrapper
    _init(config?: MultipartEncrypted.ConstructorProperties): void
}

export module MultipartSigned {

    // Constructor properties interface

    export interface ConstructorProperties extends Multipart.ConstructorProperties {
    }

}

export interface MultipartSigned {

    // Own properties of Camel-1.2.Camel.MultipartSigned

    __gtype__: number

    // Own fields of Camel-1.2.Camel.MultipartSigned

    parent: Multipart & DataWrapper & GObject.Object & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.MultipartSigned

    /**
     * Get the raw signed content stream of the multipart/signed MIME part
     * suitable for use with verification of the signature.
     * @returns the signed content stream
     */
    getContentStream(): Stream
    /**
     * Explicits sets the raw signed content stream of the multipart/signed
     * MIME part.
     * @param contentStream a #CamelStream
     */
    setContentStream(contentStream: Stream): void
    /**
     * Explicitly sets the signature part of `mps`.
     * @param signature a #CamelMimePart
     */
    setSignature(signature: MimePart): void

    // Class property signals of Camel-1.2.Camel.MultipartSigned

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MultipartSigned extends Multipart {

    // Own properties of Camel-1.2.Camel.MultipartSigned

    static name: string

    // Constructors of Camel-1.2.Camel.MultipartSigned

    constructor(config?: MultipartSigned.ConstructorProperties) 
    /**
     * Create a new #CamelMultipartSigned object.
     * 
     * A MultipartSigned should be used to store and create parts of
     * type "multipart/signed".  This is because multipart/signed is
     * entirely broken-by-design (tm) and uses completely
     * different semantics to other mutlipart types.  It must be treated
     * as opaque data by any transport.  See rfc 3156 for details.
     * 
     * There are 3 ways to create the part:
     * Use construct_from_stream.  If this is used, then you must
     * set the mime_type appropriately to match the data uses, so
     * that the multiple parts my be extracted.
     * 
     * Use construct_from_parser.  The parser MUST be in the #CAMEL_MIME_PARSER_STATE_HEADER
     * state, and the current content_type MUST be "multipart/signed" with
     * the appropriate boundary and it SHOULD include the appropriate protocol
     * and hash specifiers.
     * 
     * Use sign_part.  A signature part will automatically be created
     * and the whole part may be written using write_to_stream to
     * create a 'transport-safe' version (as safe as can be expected with
     * such a broken specification).
     * @constructor 
     * @returns a new #CamelMultipartSigned object
     */
    constructor() 
    /**
     * Create a new #CamelMultipartSigned object.
     * 
     * A MultipartSigned should be used to store and create parts of
     * type "multipart/signed".  This is because multipart/signed is
     * entirely broken-by-design (tm) and uses completely
     * different semantics to other mutlipart types.  It must be treated
     * as opaque data by any transport.  See rfc 3156 for details.
     * 
     * There are 3 ways to create the part:
     * Use construct_from_stream.  If this is used, then you must
     * set the mime_type appropriately to match the data uses, so
     * that the multiple parts my be extracted.
     * 
     * Use construct_from_parser.  The parser MUST be in the #CAMEL_MIME_PARSER_STATE_HEADER
     * state, and the current content_type MUST be "multipart/signed" with
     * the appropriate boundary and it SHOULD include the appropriate protocol
     * and hash specifiers.
     * 
     * Use sign_part.  A signature part will automatically be created
     * and the whole part may be written using write_to_stream to
     * create a 'transport-safe' version (as safe as can be expected with
     * such a broken specification).
     * @constructor 
     * @returns a new #CamelMultipartSigned object
     */
    static new(): MultipartSigned

    // Overloads of new

    /**
     * Create a new #CamelMultipart object.
     * @constructor 
     * @returns a new #CamelMultipart object
     */
    static new(): Multipart
    /**
     * Create a new #CamelDataWrapper object.
     * @constructor 
     * @returns a new #CamelDataWrapper object
     */
    static new(): DataWrapper
    _init(config?: MultipartSigned.ConstructorProperties): void
}

export module NNTPAddress {

    // Constructor properties interface

    export interface ConstructorProperties extends Address.ConstructorProperties {
    }

}

export interface NNTPAddress {

    // Own properties of Camel-1.2.Camel.NNTPAddress

    __gtype__: number

    // Own fields of Camel-1.2.Camel.NNTPAddress

    parent: Address & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.NNTPAddress

    /**
     * Add a new nntp address to the address object.  Duplicates are not added twice.
     * @param name a new NNTP address to add
     * @returns Index of added entry, or existing matching entry.
     */
    add(name: string | null): number
    /**
     * Get the address at `index`.
     * @param index address's array index
     * @param namep Holder for the returned address, or NULL, if not required.
     * @returns TRUE if such an address exists, or FALSE otherwise.
     */
    get(index: number, namep: string | null): boolean

    // Class property signals of Camel-1.2.Camel.NNTPAddress

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class NNTPAddress extends Address {

    // Own properties of Camel-1.2.Camel.NNTPAddress

    static name: string

    // Constructors of Camel-1.2.Camel.NNTPAddress

    constructor(config?: NNTPAddress.ConstructorProperties) 
    /**
     * Create a new CamelNNTPAddress object.
     * @constructor 
     * @returns A new CamelNNTPAddress object.
     */
    constructor() 
    /**
     * Create a new CamelNNTPAddress object.
     * @constructor 
     * @returns A new CamelNNTPAddress object.
     */
    static new(): NNTPAddress

    // Overloads of new

    /**
     * Create a new #CamelAddress object.
     * @constructor 
     * @returns a new #CamelAddress object
     */
    static new(): Address
    _init(config?: NNTPAddress.ConstructorProperties): void
}

export module NullOutputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.OutputStream.ConstructorProperties {
    }

}

export interface NullOutputStream {

    // Own properties of Camel-1.2.Camel.NullOutputStream

    __gtype__: number

    // Own fields of Camel-1.2.Camel.NullOutputStream

    parent: Gio.OutputStream
    priv: NullOutputStreamPrivate

    // Owm methods of Camel-1.2.Camel.NullOutputStream

    /**
     * Gets the total number of bytes written to `null_stream`.
     * @returns total byte count
     */
    getBytesWritten(): number
    getEndsWithCrlf(): boolean

    // Class property signals of Camel-1.2.Camel.NullOutputStream

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class NullOutputStream extends Gio.OutputStream {

    // Own properties of Camel-1.2.Camel.NullOutputStream

    static name: string

    // Constructors of Camel-1.2.Camel.NullOutputStream

    constructor(config?: NullOutputStream.ConstructorProperties) 
    /**
     * Creates a new "null" output stream.
     * @constructor 
     * @returns a new #GOutputStream
     */
    constructor() 
    /**
     * Creates a new "null" output stream.
     * @constructor 
     * @returns a new #GOutputStream
     */
    static new(): NullOutputStream
    _init(config?: NullOutputStream.ConstructorProperties): void
}

export module Object {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.Object

        /**
         * The file in which to store persistent property values for this
         * instance.
         */
        stateFilename?: string | null
    }

}

export interface Object {

    // Own properties of Camel-1.2.Camel.Object

    /**
     * The file in which to store persistent property values for this
     * instance.
     */
    stateFilename: string | null
    __gtype__: number

    // Own fields of Camel-1.2.Camel.Object

    parent: GObject.Object
    priv: ObjectPrivate

    // Owm methods of Camel-1.2.Camel.Object

    /**
     * Returns the name of the file in which persistent property values for
     * `object` are stored.  The file is used by camel_object_state_write()
     * and camel_object_state_read() to save and restore object state.
     * @returns the name of the persistent property file
     */
    getStateFilename(): string | null
    /**
     * Sets the name of the file in which persistent property values for
     * `object` are stored.  The file is used by camel_object_state_write()
     * and camel_object_state_read() to save and restore object state.
     * @param stateFilename path to a local file
     */
    setStateFilename(stateFilename: string | null): void
    // Has conflict: stateRead(): number
    // Has conflict: stateWrite(): number

    // Own virtual methods of Camel-1.2.Camel.Object

    stateRead(fp: any | null): number
    stateWrite(fp: any | null): number

    // Class property signals of Camel-1.2.Camel.Object

    connect(sigName: "notify::state-filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Object extends GObject.Object {

    // Own properties of Camel-1.2.Camel.Object

    static name: string

    // Constructors of Camel-1.2.Camel.Object

    constructor(config?: Object.ConstructorProperties) 
    _init(config?: Object.ConstructorProperties): void
}

export module OfflineFolder {

    // Constructor properties interface

    export interface ConstructorProperties extends Folder.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.OfflineFolder

        offlineSync?: ThreeState | null
    }

}

export interface OfflineFolder {

    // Own properties of Camel-1.2.Camel.OfflineFolder

    offlineSync: ThreeState
    __gtype__: number

    // Own fields of Camel-1.2.Camel.OfflineFolder

    parent: Folder & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.OfflineFolder

    /**
     * Checks whether the `folder` can run downsync according to its
     * settings (camel_offline_folder_get_offline_sync()) and to
     * the parent's #CamelOfflineStore settings (camel_offline_settings_get_stay_synchronized()).
     * @returns %TRUE, when the @folder can be synchronized for offline; %FALSE otherwise.
     */
    canDownsync(): boolean
    /**
     * Synchronizes messages in `folder` described by the search `expression` to
     * the local machine asynchronously for offline availability.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_offline_folder_downsync_finish() to get the result of the
     * operation.
     * @param expression search expression describing which set of messages              to downsync (%NULL for all)
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    downsync(expression: string | null, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_offline_folder_downsync().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    downsyncFinish(result: Gio.AsyncResult): boolean
    // Has conflict: downsyncSync(expression: string | null, cancellable: Gio.Cancellable | null): boolean
    getOfflineSync(): ThreeState
    /**
     * The %CAMEL_THREE_STATE_INCONSISTENT means what the parent store has set.
     * @param offlineSync whether to synchronize for offline use, as a #CamelThreeState enum
     */
    setOfflineSync(offlineSync: ThreeState): void

    // Own virtual methods of Camel-1.2.Camel.OfflineFolder

    /**
     * Synchronizes messages in `folder` described by the search `expression` to
     * the local machine for offline availability.
     * @virtual 
     * @param expression search expression describing which set of messages              to downsync (%NULL for all)
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    downsyncSync(expression: string | null, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of Camel-1.2.Camel.OfflineFolder

    connect(sigName: "notify::offline-sync", callback: (...args: any[]) => void): number
    on(sigName: "notify::offline-sync", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offline-sync", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offline-sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offline-sync", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::mark-seen", callback: (...args: any[]) => void): number
    on(sigName: "notify::mark-seen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mark-seen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mark-seen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mark-seen", ...args: any[]): void
    connect(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mark-seen-timeout", ...args: any[]): void
    connect(sigName: "notify::parent-store", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-store", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class OfflineFolder extends Folder {

    // Own properties of Camel-1.2.Camel.OfflineFolder

    static name: string

    // Constructors of Camel-1.2.Camel.OfflineFolder

    constructor(config?: OfflineFolder.ConstructorProperties) 
    _init(config?: OfflineFolder.ConstructorProperties): void
}

export module OfflineSettings {

    // Constructor properties interface

    export interface ConstructorProperties extends StoreSettings.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.OfflineSettings

        limitByAge?: boolean | null
        limitUnit?: TimeUnit | null
        limitValue?: number | null
        staySynchronized?: boolean | null
    }

}

export interface OfflineSettings {

    // Own properties of Camel-1.2.Camel.OfflineSettings

    limitByAge: boolean
    limitUnit: TimeUnit
    limitValue: number
    staySynchronized: boolean
    __gtype__: number

    // Owm methods of Camel-1.2.Camel.OfflineSettings

    getLimitByAge(): boolean
    getLimitUnit(): TimeUnit
    getLimitValue(): number
    /**
     * Returns whether to synchronize the local cache with the remote server
     * before switching to offline mode, so the store's content can still be
     * read while offline.
     * @returns whether to stay synchronized with the remote server
     */
    getStaySynchronized(): boolean
    /**
     * Returns the interval, in seconds, for the changes in the folder being
     * saved automatically. 0 means immediately, while -1 means turning off
     * automatic folder change saving.
     * @returns the interval for automatic store of folder changes
     */
    getStoreChangesInterval(): number
    /**
     * Set whether the messages to download for offline should be limited
     * by age. If set to %TRUE, then messages older than 'limit-value'
     * will not be downloaded automatically.
     * @param limitByAge a value to set
     */
    setLimitByAge(limitByAge: boolean): void
    /**
     * Set the limit unit to use when interpreting 'limit-value'.
     * @param limitUnit a #CamelTimeUnit with a unit to use
     */
    setLimitUnit(limitUnit: TimeUnit): void
    /**
     * Set the limit, in 'limit-unit', to use when 'limit-by-age' is set to %TRUE.
     * @param limitValue a value to set
     */
    setLimitValue(limitValue: boolean): void
    /**
     * Sets whether to synchronize the local cache with the remote server before
     * switching to offline mode, so the store's content can still be read while
     * offline.
     * @param staySynchronized whether to stay synchronized with the remote server
     */
    setStaySynchronized(staySynchronized: boolean): void
    /**
     * Sets the interval, in seconds, for the changes in the folder being
     * saved automatically. 0 means immediately, while -1 means turning off
     * automatic folder change saving.
     * @param interval the interval, in seconds
     */
    setStoreChangesInterval(interval: number): void

    // Class property signals of Camel-1.2.Camel.OfflineSettings

    connect(sigName: "notify::limit-by-age", callback: (...args: any[]) => void): number
    on(sigName: "notify::limit-by-age", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::limit-by-age", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::limit-by-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::limit-by-age", ...args: any[]): void
    connect(sigName: "notify::limit-unit", callback: (...args: any[]) => void): number
    on(sigName: "notify::limit-unit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::limit-unit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::limit-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::limit-unit", ...args: any[]): void
    connect(sigName: "notify::limit-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::limit-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::limit-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::limit-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::limit-value", ...args: any[]): void
    connect(sigName: "notify::stay-synchronized", callback: (...args: any[]) => void): number
    on(sigName: "notify::stay-synchronized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stay-synchronized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stay-synchronized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stay-synchronized", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::filter-inbox", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter-inbox", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter-inbox", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter-inbox", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter-inbox", ...args: any[]): void
    connect(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void): number
    on(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::store-changes-interval", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class OfflineSettings extends StoreSettings {

    // Own properties of Camel-1.2.Camel.OfflineSettings

    static name: string

    // Constructors of Camel-1.2.Camel.OfflineSettings

    constructor(config?: OfflineSettings.ConstructorProperties) 
    _init(config?: OfflineSettings.ConstructorProperties): void
}

export module OfflineStore {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Store.ConstructorProperties {
    }

}

export interface OfflineStore extends Gio.Initable {

    // Own properties of Camel-1.2.Camel.OfflineStore

    readonly online: boolean
    __gtype__: number

    // Own fields of Camel-1.2.Camel.OfflineStore

    parent: Store & Service & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.OfflineStore

    // Has conflict: dupDownsyncFolders(): Folder[]
    /**
     * Returns %TRUE if `store` is online.
     */
    getOnline(): boolean
    /**
     * Downloads messages for offline, when setup to do so and when
     * the host is reachable.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    prepareForOfflineSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Check whether the `store` requires synchronization for offline usage.
     * This is not blocking, it only checks settings on the store and its
     * currently opened folders.
     * 
     * Returns %TRUE if the `store` requires synchronization for offline usage
     */
    requiresDownsync(): boolean
    /**
     * An asynchronous variant of camel_offline_store_set_online_sync().
     * Call camel_offline_store_set_online_finish() from within the `callback`.
     * @param online %TRUE for online, %FALSE for offline
     * @param ioPriority the I/O priority for the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    setOnline(online: boolean, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_offline_store_set_online().
     * @param result a #GAsyncResult
     * @returns Whether succeeded.
     */
    setOnlineFinish(result: Gio.AsyncResult): boolean
    /**
     * Sets the online/offline state of `store` according to `online`.
     * @param online %TRUE for online, %FALSE for offline
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded. See: camel_offline_store_set_online
     */
    setOnlineSync(online: boolean, cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of Camel-1.2.Camel.OfflineStore

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
     * @virtual 
     * @returns an array with folders   to be checked for offline synchronization.
     */
    dupDownsyncFolders(): Folder[]

    // Class property signals of Camel-1.2.Camel.OfflineStore

    connect(sigName: "notify::online", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::connection-status", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::connection-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection-status", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::session", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class OfflineStore extends Store {

    // Own properties of Camel-1.2.Camel.OfflineStore

    static name: string

    // Constructors of Camel-1.2.Camel.OfflineStore

    constructor(config?: OfflineStore.ConstructorProperties) 
    _init(config?: OfflineStore.ConstructorProperties): void
}

export module Operation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `pop-message`
     */
    export interface PopMessageSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `progress`
     */
    export interface ProgressSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `push-message`
     */
    export interface PushMessageSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `status`
     */
    export interface StatusSignalCallback {
        (object: string | null, p0: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Cancellable.ConstructorProperties {
    }

}

export interface Operation {

    // Own properties of Camel-1.2.Camel.Operation

    __gtype__: number

    // Own fields of Camel-1.2.Camel.Operation

    parent: Gio.Cancellable
    priv: OperationPrivate

    // Own virtual methods of Camel-1.2.Camel.Operation

    status(what: string | null, pc: number): void

    // Own signals of Camel-1.2.Camel.Operation

    connect(sigName: "pop-message", callback: Operation.PopMessageSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Convenience function to connect to the #GCancellable::cancelled
     * signal. Also handles the race condition that may happen
     * if the cancellable is cancelled right before connecting.
     * 
     * `callback` is called at most once, either directly at the
     * time of the connect if `cancellable` is already cancelled,
     * or when `cancellable` is cancelled in some thread.
     * 
     * `data_destroy_func` will be called when the handler is
     * disconnected, or immediately if the cancellable is already
     * cancelled.
     * 
     * See #GCancellable::cancelled for details on how to use this.
     * 
     * Since GLib 2.40, the lock protecting `cancellable` is not held when
     * `callback` is invoked.  This lifts a restriction in place for
     * earlier GLib versions which now makes it easier to write cleanup
     * code that unconditionally invokes e.g. g_cancellable_cancel().
     * @param callback The #GCallback to connect.
     * @returns The id of the signal handler or 0 if @cancellable has already          been cancelled.
     */
    connect(callback: GObject.Callback): number
    on(sigName: "pop-message", callback: Operation.PopMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pop-message", callback: Operation.PopMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pop-message", callback: Operation.PopMessageSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pop-message", ...args: any[]): void
    connect(sigName: "progress", callback: Operation.ProgressSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Convenience function to connect to the #GCancellable::cancelled
     * signal. Also handles the race condition that may happen
     * if the cancellable is cancelled right before connecting.
     * 
     * `callback` is called at most once, either directly at the
     * time of the connect if `cancellable` is already cancelled,
     * or when `cancellable` is cancelled in some thread.
     * 
     * `data_destroy_func` will be called when the handler is
     * disconnected, or immediately if the cancellable is already
     * cancelled.
     * 
     * See #GCancellable::cancelled for details on how to use this.
     * 
     * Since GLib 2.40, the lock protecting `cancellable` is not held when
     * `callback` is invoked.  This lifts a restriction in place for
     * earlier GLib versions which now makes it easier to write cleanup
     * code that unconditionally invokes e.g. g_cancellable_cancel().
     * @param callback The #GCallback to connect.
     * @returns The id of the signal handler or 0 if @cancellable has already          been cancelled.
     */
    connect(callback: GObject.Callback): number
    on(sigName: "progress", callback: Operation.ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: Operation.ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: Operation.ProgressSignalCallback): NodeJS.EventEmitter
    emit(sigName: "progress", ...args: any[]): void
    connect(sigName: "push-message", callback: Operation.PushMessageSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Convenience function to connect to the #GCancellable::cancelled
     * signal. Also handles the race condition that may happen
     * if the cancellable is cancelled right before connecting.
     * 
     * `callback` is called at most once, either directly at the
     * time of the connect if `cancellable` is already cancelled,
     * or when `cancellable` is cancelled in some thread.
     * 
     * `data_destroy_func` will be called when the handler is
     * disconnected, or immediately if the cancellable is already
     * cancelled.
     * 
     * See #GCancellable::cancelled for details on how to use this.
     * 
     * Since GLib 2.40, the lock protecting `cancellable` is not held when
     * `callback` is invoked.  This lifts a restriction in place for
     * earlier GLib versions which now makes it easier to write cleanup
     * code that unconditionally invokes e.g. g_cancellable_cancel().
     * @param callback The #GCallback to connect.
     * @returns The id of the signal handler or 0 if @cancellable has already          been cancelled.
     */
    connect(callback: GObject.Callback): number
    on(sigName: "push-message", callback: Operation.PushMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "push-message", callback: Operation.PushMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "push-message", callback: Operation.PushMessageSignalCallback): NodeJS.EventEmitter
    emit(sigName: "push-message", ...args: any[]): void
    connect(sigName: "status", callback: Operation.StatusSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Convenience function to connect to the #GCancellable::cancelled
     * signal. Also handles the race condition that may happen
     * if the cancellable is cancelled right before connecting.
     * 
     * `callback` is called at most once, either directly at the
     * time of the connect if `cancellable` is already cancelled,
     * or when `cancellable` is cancelled in some thread.
     * 
     * `data_destroy_func` will be called when the handler is
     * disconnected, or immediately if the cancellable is already
     * cancelled.
     * 
     * See #GCancellable::cancelled for details on how to use this.
     * 
     * Since GLib 2.40, the lock protecting `cancellable` is not held when
     * `callback` is invoked.  This lifts a restriction in place for
     * earlier GLib versions which now makes it easier to write cleanup
     * code that unconditionally invokes e.g. g_cancellable_cancel().
     * @param callback The #GCallback to connect.
     * @returns The id of the signal handler or 0 if @cancellable has already          been cancelled.
     */
    connect(callback: GObject.Callback): number
    on(sigName: "status", callback: Operation.StatusSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status", callback: Operation.StatusSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status", callback: Operation.StatusSignalCallback): NodeJS.EventEmitter
    emit(sigName: "status", p0: number, ...args: any[]): void

    // Class property signals of Camel-1.2.Camel.Operation

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Convenience function to connect to the #GCancellable::cancelled
     * signal. Also handles the race condition that may happen
     * if the cancellable is cancelled right before connecting.
     * 
     * `callback` is called at most once, either directly at the
     * time of the connect if `cancellable` is already cancelled,
     * or when `cancellable` is cancelled in some thread.
     * 
     * `data_destroy_func` will be called when the handler is
     * disconnected, or immediately if the cancellable is already
     * cancelled.
     * 
     * See #GCancellable::cancelled for details on how to use this.
     * 
     * Since GLib 2.40, the lock protecting `cancellable` is not held when
     * `callback` is invoked.  This lifts a restriction in place for
     * earlier GLib versions which now makes it easier to write cleanup
     * code that unconditionally invokes e.g. g_cancellable_cancel().
     * @param callback The #GCallback to connect.
     * @returns The id of the signal handler or 0 if @cancellable has already          been cancelled.
     */
    connect(callback: GObject.Callback): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Convenience function to connect to the #GCancellable::cancelled
     * signal. Also handles the race condition that may happen
     * if the cancellable is cancelled right before connecting.
     * 
     * `callback` is called at most once, either directly at the
     * time of the connect if `cancellable` is already cancelled,
     * or when `cancellable` is cancelled in some thread.
     * 
     * `data_destroy_func` will be called when the handler is
     * disconnected, or immediately if the cancellable is already
     * cancelled.
     * 
     * See #GCancellable::cancelled for details on how to use this.
     * 
     * Since GLib 2.40, the lock protecting `cancellable` is not held when
     * `callback` is invoked.  This lifts a restriction in place for
     * earlier GLib versions which now makes it easier to write cleanup
     * code that unconditionally invokes e.g. g_cancellable_cancel().
     * @param callback The #GCallback to connect.
     * @returns The id of the signal handler or 0 if @cancellable has already          been cancelled.
     */
    connect(callback: GObject.Callback): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Operation extends Gio.Cancellable {

    // Own properties of Camel-1.2.Camel.Operation

    static name: string

    // Constructors of Camel-1.2.Camel.Operation

    constructor(config?: Operation.ConstructorProperties) 
    /**
     * Create a new camel operation handle.  Camel operation handles can
     * be used in a multithreaded application (or a single operation
     * handle can be used in a non threaded appliation) to cancel running
     * operations and to obtain notification messages of the internal
     * status of messages.
     * @constructor 
     * @returns A new operation handle.
     */
    constructor() 
    /**
     * Create a new camel operation handle.  Camel operation handles can
     * be used in a multithreaded application (or a single operation
     * handle can be used in a non threaded appliation) to cancel running
     * operations and to obtain notification messages of the internal
     * status of messages.
     * @constructor 
     * @returns A new operation handle.
     */
    static new(): Operation
    /**
     * Proxies the `cancellable` in a way that if it is cancelled,
     * then the returned cancellable is also cancelled, but when
     * the returned cancellable is cancelled, then it doesn't
     * influence the original cancellable. Other CamelOperation
     * actions being done on the returned cancellable are also
     * propagated to the `cancellable`.
     * 
     * The passed-in `cancellable` can be %NULL, in which case
     * a plain CamelOperation is returned.
     * 
     * This is useful when some operation can be cancelled from
     * elsewhere (like by a user), but also by the code on its own,
     * when it doesn't make sense to cancel also any larger operation
     * to which the passed-in cancellable belongs.
     * @constructor 
     * @param cancellable a #GCancellable to proxy
     * @returns A new operation handle, proxying @cancellable.
     */
    static newProxy(cancellable: Gio.Cancellable | null): Operation
    _init(config?: Operation.ConstructorProperties): void
    /**
     * Cancel all outstanding operations.
     */
    static cancelAll(): void
    /**
     * Pops the most recently pushed message.
     * 
     * This function only works if `cancellable` is a #CamelOperation cast as a
     * #GCancellable.  If `cancellable` is a plain #GCancellable or %NULL, the
     * function does nothing and returns silently.
     * @param cancellable a #GCancellable
     */
    static popMessage(cancellable: Gio.Cancellable | null): void
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
    static progress(cancellable: Gio.Cancellable | null, percent: number): void
}

export module PartitionTable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PartitionTable {

    // Own properties of Camel-1.2.Camel.PartitionTable

    __gtype__: number

    // Own fields of Camel-1.2.Camel.PartitionTable

    parent: GObject.Object
    priv: PartitionTablePrivate

    // Owm methods of Camel-1.2.Camel.PartitionTable

    add(key: string | null, keyid: _key_t): number
    lookup(key: string | null): _key_t
    remove(key: string | null): boolean
    sync(): number

    // Class property signals of Camel-1.2.Camel.PartitionTable

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class PartitionTable extends GObject.Object {

    // Own properties of Camel-1.2.Camel.PartitionTable

    static name: string

    // Constructors of Camel-1.2.Camel.PartitionTable

    constructor(config?: PartitionTable.ConstructorProperties) 
    constructor(bs: BlockFile, root: _block_t) 
    static new(bs: BlockFile, root: _block_t): PartitionTable
    _init(config?: PartitionTable.ConstructorProperties): void
}

export module SExp {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SExp {

    // Own properties of Camel-1.2.Camel.SExp

    __gtype__: number

    // Owm methods of Camel-1.2.Camel.SExp

    /**
     * Adds a variable named `name` to the given `scope,` set to the given `value`.
     * @param scope a scope
     * @param name a variable name
     * @param value a variable value, as a #CamelSExpTerm
     */
    addVariable(scope: number, name: string | null, value: SExpTerm): void
    error(): string | null
    evaluateOccurTimes(start: number, end: number): boolean
    /**
     * Prepares to scan a file.
     * @param fd a file descriptor
     */
    inputFile(fd: number): void
    /**
     * Prepares to scan a text buffer.
     * @param text a text buffer to scan
     * @param len the length of the text buffer
     */
    inputText(text: string | null, len: number): void
    parse(): number
    /**
     * Revoes a symbol from a scope.
     * @param scope a scope
     * @param name a symbol name
     */
    removeSymbol(scope: number, name: string | null): void
    /**
     * Frees the `result` and its internal data. Does nothing,
     * when the `result` is %NULL.
     * @param result a #CamelSExpResult to free
     */
    resultFree(result: SExpResult | null): void
    /**
     * Frees an array of results.
     * @param argv an array of #CamelSExpResult to free
     */
    resultvFree(argv: SExpResult[]): void
    /**
     * sets the current scope for the scanner.
     * @param scope a scope to set
     * @returns the previous scope id
     */
    setScope(scope: number): number

    // Class property signals of Camel-1.2.Camel.SExp

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SExp extends GObject.Object {

    // Own properties of Camel-1.2.Camel.SExp

    static name: string

    // Constructors of Camel-1.2.Camel.SExp

    constructor(config?: SExp.ConstructorProperties) 
    constructor() 
    static new(): SExp
    _init(config?: SExp.ConstructorProperties): void
    /**
     * Encode a bool into an s-expression `string`.  Bools are
     * encoded using #t #f syntax.
     * @param string Destination #GString
     * @param vBool the value
     */
    static encodeBool(string: GLib.String, vBool: boolean): void
    /**
     * Add a c string `v_string` to the s-expression stored in
     * the gstring `s`.  Quotes are added, and special characters
     * are escaped appropriately.
     * @param string Destination #GString
     * @param vString String expression.
     */
    static encodeString(string: GLib.String, vString: string | null): void
    /**
     * Converts a search expression to an SQL 'WHERE' part statement,
     * without the 'WHERE' keyword.
     * @param sexp a search expression to convert
     * @returns a newly allocated string, an SQL    'WHERE' part statement, or %NULL, when could not convert it. Free it with    g_free(), when done with it.
     */
    static toSqlSexp(sexp: string | null): string | null
}

export module SMIMEContext {

    // Constructor properties interface

    export interface ConstructorProperties extends CipherContext.ConstructorProperties {
    }

}

export interface SMIMEContext {

    // Own properties of Camel-1.2.Camel.SMIMEContext

    __gtype__: number

    // Own fields of Camel-1.2.Camel.SMIMEContext

    parent: CipherContext & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.SMIMEContext

    describePart(part: any | null): number
    setEncryptKey(use: boolean, key: string | null): void
    setSignMode(type: SMIMESign): void

    // Class property signals of Camel-1.2.Camel.SMIMEContext

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::session", callback: (...args: any[]) => void): number
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SMIMEContext extends CipherContext {

    // Own properties of Camel-1.2.Camel.SMIMEContext

    static name: string

    // Constructors of Camel-1.2.Camel.SMIMEContext

    constructor(config?: SMIMEContext.ConstructorProperties) 
    /**
     * Creates a new sm cipher context object.
     * @constructor 
     * @param session session
     * @returns a new sm cipher context object.
     */
    constructor(session: Session) 
    /**
     * Creates a new sm cipher context object.
     * @constructor 
     * @param session session
     * @returns a new sm cipher context object.
     */
    static new(session: Session): SMIMEContext
    _init(config?: SMIMEContext.ConstructorProperties): void
}

export module Sasl {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.Sasl

        authenticated?: boolean | null
        mechanism?: string | null
        service?: Service | null
        serviceName?: string | null
    }

}

export interface Sasl {

    // Own properties of Camel-1.2.Camel.Sasl

    authenticated: boolean
    readonly mechanism: string | null
    readonly service: Service
    readonly serviceName: string | null
    __gtype__: number

    // Own fields of Camel-1.2.Camel.Sasl

    parent: GObject.Object
    priv: SaslPrivate

    // Owm methods of Camel-1.2.Camel.Sasl

    /**
     * If `token` is %NULL, asynchronously generate the initial SASL message
     * to send to the server.  (This will be %NULL if the client doesn't
     * initiate the exchange.)  Otherwise, `token` is a challenge from the
     * server, and the asynchronous result is the response.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_sasl_challenge_finish() to get the result of the operation.
     * @param token a token, or %NULL
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    challenge(token: Uint8Array | null, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * As with camel_sasl_challenge(), but the challenge `token` and the
     * response are both base64-encoded.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call camel_sasl_challenge_base64_finish() to get the result of
     * the operation.
     * @param token a base64-encoded token
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    challengeBase64(token: string | null, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_sasl_challenge_base64().
     * @param result a #GAsyncResult
     * @returns the base64-encoded response
     */
    challengeBase64Finish(result: Gio.AsyncResult): string | null
    /**
     * As with camel_sasl_challenge_sync(), but the challenge `token` and the
     * response are both base64-encoded.
     * @param token a base64-encoded token
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the base64-encoded response
     */
    challengeBase64Sync(token: string | null, cancellable: Gio.Cancellable | null): string | null
    /**
     * Finishes the operation started with camel_sasl_challenge().  Free the
     * returned #GByteArray with g_byte_array_free().
     * @param result a #GAsyncResult
     * @returns the SASL response or %NULL.  If an error occurred, @error will also be set.
     */
    challengeFinish(result: Gio.AsyncResult): Uint8Array | null
    // Has conflict: challengeSync(token: Uint8Array | null, cancellable: Gio.Cancellable | null): Uint8Array | null
    getAuthenticated(): boolean
    getMechanism(): string | null
    getService(): Service
    getServiceName(): string | null
    setAuthenticated(authenticated: boolean): void
    /**
     * Asynchronously determine whether `sasl` can be used for password-less
     * authentication, for example single-sign-on using system credentials.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_sasl_try_empty_password_finish() to get the result of the
     * operation.
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    tryEmptyPassword(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_sasl_try_empty_password().
     * @param result a #GAsyncResult
     * @returns the SASL response.  If an error occurred, @error will also be set.
     */
    tryEmptyPasswordFinish(result: Gio.AsyncResult): boolean
    // Has conflict: tryEmptyPasswordSync(cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of Camel-1.2.Camel.Sasl

    /**
     * If `token` is %NULL, generate the initial SASL message to send to
     * the server.  (This will be %NULL if the client doesn't initiate the
     * exchange.)  Otherwise, `token` is a challenge from the server, and
     * the return value is the response.
     * 
     * Free the returned #GByteArray with g_byte_array_free().
     * @virtual 
     * @param token a token, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the SASL response or %NULL. If an error occurred, @error will also be set.
     */
    challengeSync(token: Uint8Array | null, cancellable: Gio.Cancellable | null): Uint8Array | null
    tryEmptyPasswordSync(cancellable: Gio.Cancellable | null): boolean

    // Class property signals of Camel-1.2.Camel.Sasl

    connect(sigName: "notify::authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (...args: any[]) => void): number
    on(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (...args: any[]) => void): number
    on(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Sasl extends GObject.Object {

    // Own properties of Camel-1.2.Camel.Sasl

    static name: string

    // Constructors of Camel-1.2.Camel.Sasl

    constructor(config?: Sasl.ConstructorProperties) 
    constructor(serviceName: string | null, mechanism: string | null, service: Service) 
    static new(serviceName: string | null, mechanism: string | null, service: Service): Sasl
    _init(config?: Sasl.ConstructorProperties): void
    static authtype(mechanism: string | null): ServiceAuthType | null
    static authtypeList(includePlain: boolean): ServiceAuthType[]
    /**
     * Checks whether exists a #CamelSasl method for the `mechanism` and
     * whether it derives from #CamelSaslXOAuth2. Such mechanisms are
     * also treated as XOAUTH2, even their real name is different.
     * @param mechanism an authentication mechanism
     * @returns whether exists #CamelSasl for the given @mechanism,    which also derives from #CamelSaslXOAuth2.
     */
    static isXoauth2Alias(mechanism: string | null): boolean
}

export module SaslAnonymous {

    // Constructor properties interface

    export interface ConstructorProperties extends Sasl.ConstructorProperties {
    }

}

export interface SaslAnonymous {

    // Own properties of Camel-1.2.Camel.SaslAnonymous

    __gtype__: number

    // Own fields of Camel-1.2.Camel.SaslAnonymous

    parent: Sasl & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.SaslAnonymous

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (...args: any[]) => void): number
    on(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (...args: any[]) => void): number
    on(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SaslAnonymous extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslAnonymous

    static name: string

    // Constructors of Camel-1.2.Camel.SaslAnonymous

    constructor(config?: SaslAnonymous.ConstructorProperties) 
    /**
     * Create a new #CamelSaslAnonymous object.
     * @constructor 
     * @param type trace type
     * @param traceInfo trace info
     * @returns a new #CamelSasl object
     */
    constructor(type: SaslAnonTraceType, traceInfo: string | null) 
    /**
     * Create a new #CamelSaslAnonymous object.
     * @constructor 
     * @param type trace type
     * @param traceInfo trace info
     * @returns a new #CamelSasl object
     */
    static new(type: SaslAnonTraceType, traceInfo: string | null): SaslAnonymous

    // Overloads of new

    static new(serviceName: string | null, mechanism: string | null, service: Service): Sasl
    _init(config?: SaslAnonymous.ConstructorProperties): void
}

export module SaslCramMd5 {

    // Constructor properties interface

    export interface ConstructorProperties extends Sasl.ConstructorProperties {
    }

}

export interface SaslCramMd5 {

    // Own properties of Camel-1.2.Camel.SaslCramMd5

    __gtype__: number

    // Own fields of Camel-1.2.Camel.SaslCramMd5

    parent: Sasl & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.SaslCramMd5

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (...args: any[]) => void): number
    on(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (...args: any[]) => void): number
    on(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SaslCramMd5 extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslCramMd5

    static name: string

    // Constructors of Camel-1.2.Camel.SaslCramMd5

    constructor(config?: SaslCramMd5.ConstructorProperties) 
    _init(config?: SaslCramMd5.ConstructorProperties): void
}

export module SaslDigestMd5 {

    // Constructor properties interface

    export interface ConstructorProperties extends Sasl.ConstructorProperties {
    }

}

export interface SaslDigestMd5 {

    // Own properties of Camel-1.2.Camel.SaslDigestMd5

    __gtype__: number

    // Own fields of Camel-1.2.Camel.SaslDigestMd5

    parent: Sasl & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.SaslDigestMd5

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (...args: any[]) => void): number
    on(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (...args: any[]) => void): number
    on(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SaslDigestMd5 extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslDigestMd5

    static name: string

    // Constructors of Camel-1.2.Camel.SaslDigestMd5

    constructor(config?: SaslDigestMd5.ConstructorProperties) 
    _init(config?: SaslDigestMd5.ConstructorProperties): void
}

export module SaslGssapi {

    // Constructor properties interface

    export interface ConstructorProperties extends Sasl.ConstructorProperties {
    }

}

export interface SaslGssapi {

    // Own properties of Camel-1.2.Camel.SaslGssapi

    __gtype__: number

    // Own fields of Camel-1.2.Camel.SaslGssapi

    parent: Sasl & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.SaslGssapi

    /**
     * Set host and user to use, instead of those in CamelService's settings.
     * It's both or none, aka either set both, or the settings values are used.
     * This is used to not require CamelService instance at all.
     * @param overrideHost Host name to use during challenge processing; can be %NULL
     * @param overrideUser User name to use during challenge processing; can be %NULL
     */
    overrideHostAndUser(overrideHost: string | null, overrideUser: string | null): void

    // Class property signals of Camel-1.2.Camel.SaslGssapi

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (...args: any[]) => void): number
    on(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (...args: any[]) => void): number
    on(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SaslGssapi extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslGssapi

    static name: string

    // Constructors of Camel-1.2.Camel.SaslGssapi

    constructor(config?: SaslGssapi.ConstructorProperties) 
    _init(config?: SaslGssapi.ConstructorProperties): void
    static isAvailable(): boolean
}

export module SaslLogin {

    // Constructor properties interface

    export interface ConstructorProperties extends Sasl.ConstructorProperties {
    }

}

export interface SaslLogin {

    // Own properties of Camel-1.2.Camel.SaslLogin

    __gtype__: number

    // Own fields of Camel-1.2.Camel.SaslLogin

    parent: Sasl & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.SaslLogin

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (...args: any[]) => void): number
    on(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (...args: any[]) => void): number
    on(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SaslLogin extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslLogin

    static name: string

    // Constructors of Camel-1.2.Camel.SaslLogin

    constructor(config?: SaslLogin.ConstructorProperties) 
    _init(config?: SaslLogin.ConstructorProperties): void
}

export module SaslNTLM {

    // Constructor properties interface

    export interface ConstructorProperties extends Sasl.ConstructorProperties {
    }

}

export interface SaslNTLM {

    // Own properties of Camel-1.2.Camel.SaslNTLM

    __gtype__: number

    // Own fields of Camel-1.2.Camel.SaslNTLM

    parent: Sasl & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.SaslNTLM

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (...args: any[]) => void): number
    on(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (...args: any[]) => void): number
    on(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SaslNTLM extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslNTLM

    static name: string

    // Constructors of Camel-1.2.Camel.SaslNTLM

    constructor(config?: SaslNTLM.ConstructorProperties) 
    _init(config?: SaslNTLM.ConstructorProperties): void
}

export module SaslPOPB4SMTP {

    // Constructor properties interface

    export interface ConstructorProperties extends Sasl.ConstructorProperties {
    }

}

export interface SaslPOPB4SMTP {

    // Own properties of Camel-1.2.Camel.SaslPOPB4SMTP

    __gtype__: number

    // Own fields of Camel-1.2.Camel.SaslPOPB4SMTP

    parent: Sasl & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.SaslPOPB4SMTP

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (...args: any[]) => void): number
    on(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (...args: any[]) => void): number
    on(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SaslPOPB4SMTP extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslPOPB4SMTP

    static name: string

    // Constructors of Camel-1.2.Camel.SaslPOPB4SMTP

    constructor(config?: SaslPOPB4SMTP.ConstructorProperties) 
    _init(config?: SaslPOPB4SMTP.ConstructorProperties): void
}

export module SaslPlain {

    // Constructor properties interface

    export interface ConstructorProperties extends Sasl.ConstructorProperties {
    }

}

export interface SaslPlain {

    // Own properties of Camel-1.2.Camel.SaslPlain

    __gtype__: number

    // Own fields of Camel-1.2.Camel.SaslPlain

    parent: Sasl & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.SaslPlain

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (...args: any[]) => void): number
    on(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (...args: any[]) => void): number
    on(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SaslPlain extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslPlain

    static name: string

    // Constructors of Camel-1.2.Camel.SaslPlain

    constructor(config?: SaslPlain.ConstructorProperties) 
    _init(config?: SaslPlain.ConstructorProperties): void
}

export module SaslXOAuth2 {

    // Constructor properties interface

    export interface ConstructorProperties extends Sasl.ConstructorProperties {
    }

}

export interface SaslXOAuth2 {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2

    __gtype__: number

    // Own fields of Camel-1.2.Camel.SaslXOAuth2

    parent: Sasl & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.SaslXOAuth2

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (...args: any[]) => void): number
    on(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (...args: any[]) => void): number
    on(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SaslXOAuth2 extends Sasl {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2

    static name: string

    // Constructors of Camel-1.2.Camel.SaslXOAuth2

    constructor(config?: SaslXOAuth2.ConstructorProperties) 
    _init(config?: SaslXOAuth2.ConstructorProperties): void
}

export module SaslXOAuth2Google {

    // Constructor properties interface

    export interface ConstructorProperties extends SaslXOAuth2.ConstructorProperties {
    }

}

export interface SaslXOAuth2Google {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2Google

    __gtype__: number

    // Own fields of Camel-1.2.Camel.SaslXOAuth2Google

    parent: SaslXOAuth2 & Sasl & GObject.Object & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.SaslXOAuth2Google

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (...args: any[]) => void): number
    on(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (...args: any[]) => void): number
    on(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SaslXOAuth2Google extends SaslXOAuth2 {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2Google

    static name: string

    // Constructors of Camel-1.2.Camel.SaslXOAuth2Google

    constructor(config?: SaslXOAuth2Google.ConstructorProperties) 
    _init(config?: SaslXOAuth2Google.ConstructorProperties): void
}

export module SaslXOAuth2Outlook {

    // Constructor properties interface

    export interface ConstructorProperties extends SaslXOAuth2.ConstructorProperties {
    }

}

export interface SaslXOAuth2Outlook {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2Outlook

    __gtype__: number

    // Own fields of Camel-1.2.Camel.SaslXOAuth2Outlook

    parent: SaslXOAuth2 & Sasl & GObject.Object & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.SaslXOAuth2Outlook

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (...args: any[]) => void): number
    on(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (...args: any[]) => void): number
    on(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SaslXOAuth2Outlook extends SaslXOAuth2 {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2Outlook

    static name: string

    // Constructors of Camel-1.2.Camel.SaslXOAuth2Outlook

    constructor(config?: SaslXOAuth2Outlook.ConstructorProperties) 
    _init(config?: SaslXOAuth2Outlook.ConstructorProperties): void
}

export module SaslXOAuth2Yahoo {

    // Constructor properties interface

    export interface ConstructorProperties extends SaslXOAuth2.ConstructorProperties {
    }

}

export interface SaslXOAuth2Yahoo {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2Yahoo

    __gtype__: number

    // Own fields of Camel-1.2.Camel.SaslXOAuth2Yahoo

    parent: SaslXOAuth2 & Sasl & GObject.Object & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.SaslXOAuth2Yahoo

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::authenticated", ...args: any[]): void
    connect(sigName: "notify::mechanism", callback: (...args: any[]) => void): number
    on(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mechanism", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mechanism", ...args: any[]): void
    connect(sigName: "notify::service", callback: (...args: any[]) => void): number
    on(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SaslXOAuth2Yahoo extends SaslXOAuth2 {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2Yahoo

    static name: string

    // Constructors of Camel-1.2.Camel.SaslXOAuth2Yahoo

    constructor(config?: SaslXOAuth2Yahoo.ConstructorProperties) 
    _init(config?: SaslXOAuth2Yahoo.ConstructorProperties): void
}

export module Service {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Object.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.Service

        displayName?: string | null
        password?: string | null
        provider?: Provider | null
        proxyResolver?: Gio.ProxyResolver | null
        session?: Session | null
        settings?: Settings | null
        uid?: string | null
    }

}

export interface Service extends Gio.Initable {

    // Own properties of Camel-1.2.Camel.Service

    readonly connectionStatus: ServiceConnectionStatus
    displayName: string | null
    password: string | null
    readonly provider: Provider
    proxyResolver: Gio.ProxyResolver
    readonly session: Session
    settings: Settings
    readonly uid: string | null
    __gtype__: number

    // Own fields of Camel-1.2.Camel.Service

    parent: Object & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.Service

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    authenticate(mechanism: string | null, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    authenticateFinish(result: Gio.AsyncResult): AuthenticationResult
    // Has conflict: authenticateSync(mechanism: string | null, cancellable: Gio.Cancellable | null): AuthenticationResult
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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_service_connect().
     * @param result a #GAsyncResult
     * @returns %TRUE if the connection was made or %FALSE otherwise
     */
    connectFinish(result: Gio.AsyncResult): boolean
    // Has conflict: connectSync(cancellable: Gio.Cancellable | null): boolean
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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    disconnect(clean: boolean, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_service_disconnect().
     * @param result a #GAsyncResult
     * @returns %TRUE if the connection was severed or %FALSE otherwise
     */
    disconnectFinish(result: Gio.AsyncResult): boolean
    // Has conflict: disconnectSync(clean: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Thread-safe variation of camel_service_get_display_name().
     * Use this function when accessing `service` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #CamelService:display-name
     */
    dupDisplayName(): string | null
    /**
     * Thread-safe variation of camel_service_get_password().
     * Use this function when accessing `service` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #CamelService:password
     */
    dupPassword(): string | null
    /**
     * Returns the connection status for `service`.
     * @returns the connection status
     */
    getConnectionStatus(): ServiceConnectionStatus
    /**
     * Returns the display name for `service,` or %NULL if `service` has not
     * been given a display name.  The display name is intended for use in
     * a user interface and should generally be given a user-defined name.
     * 
     * Compare this with camel_service_get_name(), which returns a built-in
     * description of the type of service (IMAP, SMTP, etc.).
     * @returns the display name for @service, or %NULL
     */
    getDisplayName(): string | null
    // Has conflict: getName(brief: boolean): string | null
    /**
     * Returns the password for `service`.  Some SASL mechanisms use this
     * when attempting to authenticate.
     * @returns the password for @service
     */
    getPassword(): string | null
    /**
     * Gets the #CamelProvider associated with the service.
     * @returns the #CamelProvider
     */
    getProvider(): Provider
    /**
     * Gets the unique identifier string associated with the service.
     * @returns the UID string
     */
    getUid(): string | null
    /**
     * Returns the base directory under which to store cache data
     * for `service`.  The directory is formed by appending the directory
     * returned by camel_session_get_user_cache_dir() with the service's
     * #CamelService:uid value.
     * @returns the base cache directory for @service
     */
    getUserCacheDir(): string | null
    /**
     * Returns the base directory under which to store user-specific data
     * for `service`.  The directory is formed by appending the directory
     * returned by camel_session_get_user_data_dir() with the service's
     * #CamelService:uid value.
     * @returns the base directory for @service
     */
    getUserDataDir(): string | null
    /**
     * Performs any necessary file migrations for `service`.  This should be
     * called after installing or configuring the `service'`s #CamelSettings,
     * since it requires building a URL string for `service`.
     */
    migrateFiles(): void
    /**
     * Returns a new #CamelURL representing `service`.
     * Free the returned #CamelURL with camel_url_free().
     * @returns a new #CamelURL
     */
    newCamelUrl(): URL
    /**
     * Asynchronously obtains a list of authentication types supported by
     * `service`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call camel_service_query_auth_types_finish() to get the result
     * of the operation.
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    queryAuthTypes(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_service_query_auth_types().
     * Free the returned list with g_list_free().
     * @param result a #GAsyncResult
     * @returns a list of #CamelServiceAuthType structs
     */
    queryAuthTypesFinish(result: Gio.AsyncResult): ServiceAuthType[]
    // Has conflict: queryAuthTypesSync(cancellable: Gio.Cancellable | null): ServiceAuthType[]
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
     * @param taskFunc function to call when `task` is dispatched
     */
    queueTask(task: Gio.Task, taskFunc: Gio.TaskThreadFunc): void
    /**
     * Returns the #GProxyResolver for `service`.  If an application needs to
     * override this, it should do so prior to calling functions on `service`
     * that may require a network connection.
     * 
     * The returned #GProxyResolver is referenced for thread-safety and must
     * be unreferenced with g_object_unref() when finished with it.
     * @returns a #GProxyResolver, or %NULL
     */
    refProxyResolver(): Gio.ProxyResolver | null
    /**
     * Returns the #CamelSession associated with the service.
     * 
     * The returned #CamelSession is referenced for thread-safety.  Unreference
     * the #CamelSession with g_object_unref() when finished with it.
     * @returns the #CamelSession
     */
    refSession(): Session
    /**
     * Returns the #CamelSettings instance associated with the service.
     * 
     * The returned #CamelSettings is referenced for thread-safety and must
     * be unreferenced with g_object_unref() when finished with it.
     * @returns the #CamelSettings
     */
    refSettings(): Settings
    /**
     * Assigns a UTF-8 display name to `service`.  The display name is intended
     * for use in a user interface and should generally be given a user-defined
     * name.
     * 
     * Compare this with camel_service_get_name(), which returns a built-in
     * description of the type of service (IMAP, SMTP, etc.).
     * @param displayName a valid UTF-8 string, or %NULL
     */
    setDisplayName(displayName: string | null): void
    /**
     * Sets the password for `service`.  Use this function to cache the password
     * in memory after obtaining it through camel_session_get_password().  Some
     * SASL mechanisms use this when attempting to authenticate.
     * @param password the password for `service`
     */
    setPassword(password: string | null): void
    /**
     * Sets the #GProxyResolver for `service`.  If an application needs to
     * override this, it should do so prior to calling functions on `service`
     * that may require a network connection.
     * @param proxyResolver a #GProxyResolver, or %NULL for the default
     */
    setProxyResolver(proxyResolver: Gio.ProxyResolver | null): void
    /**
     * Associates a new #CamelSettings instance with the service.
     * The `settings` instance must match the settings type defined in
     * #CamelServiceClass.  If `settings` is %NULL, a new #CamelSettings
     * instance of the appropriate type is created with all properties
     * set to defaults.
     * @param settings an instance derviced from #CamelSettings, or %NULL
     */
    setSettings(settings: Settings | null): void

    // Own virtual methods of Camel-1.2.Camel.Service

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
     * @virtual 
     * @param mechanism a SASL mechanism name, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the authentication result
     */
    authenticateSync(mechanism: string | null, cancellable: Gio.Cancellable | null): AuthenticationResult
    /**
     * Connects `service` to a remote server using the information in its
     * #CamelService:settings instance.
     * 
     * If a connect operation is already in progress when this function is
     * called, its results will be reflected in this connect operation.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE if the connection is made or %FALSE otherwise
     */
    connectSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Disconnect from the service. If `clean` is %FALSE, it should not
     * try to do any synchronizing or other cleanup of the connection.
     * 
     * If a disconnect operation is already in progress when this function is
     * called, its results will be reflected in this disconnect operation.
     * 
     * If any connect operations are in progress when this function is called,
     * they will be cancelled.
     * @virtual 
     * @param clean whether or not to try to disconnect cleanly
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE if the connection was severed or %FALSE otherwise
     */
    disconnectSync(clean: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * This gets the name of the service in a "friendly" (suitable for
     * humans) form. If `brief` is %TRUE, this should be a brief description
     * such as for use in the folder tree. If `brief` is %FALSE, it should
     * be a more complete and mostly unambiguous description.
     * @virtual 
     * @param brief whether or not to use a briefer form
     * @returns a description of the service which the caller must free
     */
    getName(brief: boolean): string | null
    /**
     * Obtains a list of authentication types supported by `service`.
     * Free the returned list with g_list_free().
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns a list of #CamelServiceAuthType structs
     */
    queryAuthTypesSync(cancellable: Gio.Cancellable | null): ServiceAuthType[]

    // Class property signals of Camel-1.2.Camel.Service

    connect(sigName: "notify::connection-status", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection-status", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (...args: any[]) => void): number
    on(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::session", callback: (...args: any[]) => void): number
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (...args: any[]) => void): number
    on(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Service extends Object {

    // Own properties of Camel-1.2.Camel.Service

    static name: string

    // Constructors of Camel-1.2.Camel.Service

    constructor(config?: Service.ConstructorProperties) 
    _init(config?: Service.ConstructorProperties): void
}

export module Session {

    // Signal callback interfaces

    /**
     * Signal callback interface for `job-finished`
     */
    export interface JobFinishedSignalCallback {
        (object: Gio.Cancellable | null, p0: GLib.Error): void
    }

    /**
     * Signal callback interface for `job-started`
     */
    export interface JobStartedSignalCallback {
        (object: Gio.Cancellable | null): void
    }

    /**
     * Signal callback interface for `user-alert`
     */
    export interface UserAlertSignalCallback {
        (service: Service, type: SessionAlertType, message: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.Session

        junkFilter?: JunkFilter | null
        networkMonitor?: Gio.NetworkMonitor | null
        online?: boolean | null
        userCacheDir?: string | null
        userDataDir?: string | null
    }

}

export interface Session {

    // Own properties of Camel-1.2.Camel.Session

    junkFilter: JunkFilter
    readonly mainContext: GLib.MainContext
    networkMonitor: Gio.NetworkMonitor
    online: boolean
    userCacheDir: string | null
    userDataDir: string | null
    __gtype__: number

    // Own fields of Camel-1.2.Camel.Session

    parent: GObject.Object
    priv: SessionPrivate

    // Owm methods of Camel-1.2.Camel.Session

    // Has conflict: addService(uid: string | null, protocol: string | null, type: ProviderType): Service
    // Has conflict: addressbookContainsSync(bookUid: string | null, emailAddress: string | null, cancellable: Gio.Cancellable | null): boolean
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
     * @param ioPriority the I/O priority for the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    authenticate(service: Service, mechanism: string | null, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_session_authenticate().
     * 
     * If an error occurred, or if authentication was aborted, the function
     * sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    authenticateFinish(result: Gio.AsyncResult): boolean
    // Has conflict: authenticateSync(service: Service, mechanism: string | null, cancellable: Gio.Cancellable | null): boolean
    // Has conflict: forgetPassword(service: Service, item: string | null): boolean
    /**
     * Asynchronously forwards `message` in `folder` to the email address(s)
     * given by `address`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call camel_session_forward_to_finish() to get the result of the
     * operation.
     * @param folder the #CamelFolder where `message` is located
     * @param message the #CamelMimeMessage to forward
     * @param address the recipient's email address
     * @param ioPriority the I/O priority for the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    forwardTo(folder: Folder, message: MimeMessage, address: string | null, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_session_forward_to().
     * 
     * If an error occurred, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    forwardToFinish(result: Gio.AsyncResult): boolean
    // Has conflict: forwardToSync(folder: Folder, message: MimeMessage, address: string | null, cancellable: Gio.Cancellable | null): boolean
    // Has conflict: getFilterDriver(type: string | null, forFolder: Folder | null): FilterDriver
    /**
     * Returns the #CamelJunkFilter instance used to classify messages as
     * junk or not junk during filtering.
     * 
     * Note that #CamelJunkFilter itself is just an interface.  The application
     * must implement the interface and install a #CamelJunkFilter instance for
     * junk filtering to take place.
     * @returns a #CamelJunkFilter, or %NULL
     */
    getJunkFilter(): JunkFilter | null
    getJunkHeaders(): GLib.HashTable
    // Has conflict: getOauth2AccessTokenSync(service: Service, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    getOnline(): boolean
    // Has conflict: getPassword(service: Service, prompt: string | null, item: string | null, flags: number): string | null
    // Has conflict: getRecipientCertificatesSync(flags: number, recipients: string[], cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCertificates */ string[] ]
    /**
     * Returns the base directory under which to store user-specific mail cache.
     * @returns the base directory for mail cache
     */
    getUserCacheDir(): string | null
    /**
     * Returns the base directory under which to store user-specific mail data.
     * @returns the base directory for mail data
     */
    getUserDataDir(): string | null
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
     * @param function_ a function to call
     * @returns the ID (greater than 0) of the event source
     */
    idleAdd(priority: number, function_: GLib.SourceFunc): number
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
    listServices(): Service[]
    // Has conflict: lookupAddressbook(name: string | null): boolean
    /**
     * Returns the #GMainContext on which event sources for `session` are to
     * be attached.
     * @returns a #GMainContext
     */
    refMainContext(): GLib.MainContext
    /**
     * References a #GNetworkMonitor instance, which had been previously set
     * by camel_session_set_network_monitor(). If none is set, then the default
     * #GNetworkMonitor is returned, as provided by g_network_monitor_get_default().
     * The returned pointer is referenced for thread safety, unref it with
     * g_object_unref() when no longer needed.
     * @returns A referenced #GNetworkMonitor instance to use   for network availability tests.
     */
    refNetworkMonitor(): Gio.NetworkMonitor
    /**
     * Looks up a #CamelService by its unique identifier string.  The service
     * must have been previously added using camel_session_add_service().
     * 
     * The returned #CamelService is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @param uid a unique identifier string
     * @returns a #CamelService instance, or %NULL
     */
    refService(uid: string | null): Service | null
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
    refServiceByUrl(url: URL, type: ProviderType): Service | null
    // Has conflict: removeService(service: Service): void
    /**
     * Removes all #CamelService instances added by camel_session_add_service().
     * 
     * This can be useful during application shutdown to ensure all #CamelService
     * instances are freed properly, especially since #CamelSession instances are
     * prone to reference cycles.
     */
    removeServices(): void
    /**
     * Installs the #CamelJunkFilter instance used to classify messages as
     * junk or not junk during filtering.
     * 
     * Note that #CamelJunkFilter itself is just an interface.  The application
     * must implement the interface and install a #CamelJunkFilter instance for
     * junk filtering to take place.
     * @param junkFilter a #CamelJunkFilter, or %NULL
     */
    setJunkFilter(junkFilter: JunkFilter | null): void
    setJunkHeaders(headers: string[], values: string[]): void
    /**
     * Sets a network monitor instance for the `session`. This can be used
     * to override which #GNetworkMonitor should be used to check network
     * availability and whether a server is reachable.
     * @param networkMonitor a #GNetworkMonitor or %NULL
     */
    setNetworkMonitor(networkMonitor: Gio.NetworkMonitor | null): void
    /**
     * Sets the online status of `session` to `online`.
     * @param online whether or not the session should be online
     */
    setOnline(online: boolean): void
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
    submitJob(description: string | null, callback: SessionCallback): void
    // Has conflict: trustPrompt(service: Service, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): CertTrust
    // Has conflict: userAlert(service: Service, type: SessionAlertType, message: string | null): void

    // Own virtual methods of Camel-1.2.Camel.Session

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
     * @virtual 
     * @param uid a unique identifier string
     * @param protocol the service protocol
     * @param type the service type
     * @returns a #CamelService instance, or %NULL on error
     */
    addService(uid: string | null, protocol: string | null, type: ProviderType): Service
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
     * @virtual 
     * @param bookUid an address book UID
     * @param emailAddress an email address to check for
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE, when the @email_address could be found in the @book_uid
     */
    addressbookContainsSync(bookUid: string | null, emailAddress: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Authenticates `service,` which may involve repeated calls to
     * camel_service_authenticate() or camel_service_authenticate_sync().
     * A #CamelSession subclass is largely responsible for implementing this,
     * and should handle things like user prompts and secure password storage.
     * These issues are out-of-scope for Camel.
     * 
     * If an error occurs, or if authentication is aborted, the function sets
     * `error` and returns %FALSE.
     * @virtual 
     * @param service a #CamelService
     * @param mechanism a SASL mechanism name, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    authenticateSync(service: Service, mechanism: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * This function is used by a #CamelService to tell the application
     * that the authentication information it provided via
     * camel_session_get_password() was rejected by the service. If the
     * application was caching this information, it should stop,
     * and if the service asks for it again, it should ask the user.
     * 
     * `service` and `item` identify the rejected authentication information,
     * as with camel_session_get_password().
     * @virtual 
     * @param service the #CamelService rejecting the password
     * @param item an identifier, unique within this service, for the information
     * @returns %TRUE on success, %FALSE on failure
     */
    forgetPassword(service: Service, item: string | null): boolean
    /**
     * Forwards `message` in `folder` to the email address(es) given by `address`.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @virtual 
     * @param folder the #CamelFolder where `message` is located
     * @param message the #CamelMimeMessage to forward
     * @param address the recipient's email address
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    forwardToSync(folder: Folder, message: MimeMessage, address: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * The optional `for_folder` can be used to determine which filters
     * to add and which not.
     * @virtual 
     * @param type the type of filter (eg, "incoming")
     * @param forFolder an optional #CamelFolder, for which the filter driver will run, or %NULL
     * @returns a filter driver, loaded with applicable rules
     */
    getFilterDriver(type: string | null, forFolder: Folder | null): FilterDriver
    /**
     * Obtains the OAuth 2.0 access token for `service` along with its expiry
     * in seconds from the current time (or 0 if unknown).
     * 
     * Free the returned access token with g_free() when no longer needed.
     * @virtual 
     * @param service a #CamelService
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    getOauth2AccessTokenSync(service: Service, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
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
     * @virtual 
     * @param service the #CamelService this query is being made by
     * @param prompt prompt to provide to user
     * @param item an identifier, unique within this service, for the information
     * @param flags %CAMEL_SESSION_PASSWORD_REPROMPT, the prompt should force a reprompt %CAMEL_SESSION_PASSWORD_SECRET, whether the password is secret %CAMEL_SESSION_PASSWORD_STATIC, the password is remembered externally
     * @returns the authentication information or %NULL on error
     */
    getPassword(service: Service, prompt: string | null, item: string | null, flags: number): string | null
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
     * @virtual 
     * @param flags bit-or of #CamelRecipientCertificateFlags
     * @param recipients a #GPtrArray of recipients
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded, or better whether no fatal error happened.
     */
    getRecipientCertificatesSync(flags: number, recipients: string[], cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCertificates */ string[] ]
    jobFinished(cancellable: Gio.Cancellable | null, error: GLib.Error): void
    jobStarted(cancellable: Gio.Cancellable | null): void
    /**
     * Looks up for the `name` in address books.
     * @virtual 
     * @param name a name/address to lookup for
     * @returns whether found the @name in any address book.
     */
    lookupAddressbook(name: string | null): boolean
    /**
     * Removes a #CamelService previously added by camel_session_add_service().
     * @virtual 
     * @param service the #CamelService to remove
     */
    removeService(service: Service): void
    /**
     * Prompts the user whether to accept `certificate` for `service`.  The
     * set of flags given in `errors` indicate why the `certificate` failed
     * validation.
     * 
     * If an error occurs during prompting or if the user declines to respond,
     * the function returns #CAMEL_CERT_TRUST_UNKNOWN and the certificate will
     * be rejected.
     * @virtual 
     * @param service a #CamelService
     * @param certificate the peer's #GTlsCertificate
     * @param errors the problems with `certificate`
     * @returns the user's trust level for @certificate
     */
    trustPrompt(service: Service, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): CertTrust
    /**
     * Emits a #CamelSession:user_alert signal from an idle source on the main
     * loop.  The idle source's priority is #G_PRIORITY_LOW.
     * 
     * The purpose of the signal is to propagate a server-issued alert message
     * from `service` to a user interface.  The `type` hints at the nature of the
     * alert message.
     * @virtual 
     * @param service a #CamelService
     * @param type a #CamelSessionAlertType
     * @param message the message for the user
     */
    userAlert(service: Service, type: SessionAlertType, message: string | null): void

    // Own signals of Camel-1.2.Camel.Session

    connect(sigName: "job-finished", callback: Session.JobFinishedSignalCallback): number
    on(sigName: "job-finished", callback: Session.JobFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "job-finished", callback: Session.JobFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "job-finished", callback: Session.JobFinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "job-finished", p0: GLib.Error, ...args: any[]): void
    connect(sigName: "job-started", callback: Session.JobStartedSignalCallback): number
    on(sigName: "job-started", callback: Session.JobStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "job-started", callback: Session.JobStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "job-started", callback: Session.JobStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "job-started", ...args: any[]): void
    connect(sigName: "user-alert", callback: Session.UserAlertSignalCallback): number
    on(sigName: "user-alert", callback: Session.UserAlertSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-alert", callback: Session.UserAlertSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-alert", callback: Session.UserAlertSignalCallback): NodeJS.EventEmitter
    emit(sigName: "user-alert", type: SessionAlertType, message: string | null, ...args: any[]): void

    // Class property signals of Camel-1.2.Camel.Session

    connect(sigName: "notify::junk-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::junk-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::junk-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::junk-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::junk-filter", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::network-monitor", callback: (...args: any[]) => void): number
    on(sigName: "notify::network-monitor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::network-monitor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::network-monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::network-monitor", ...args: any[]): void
    connect(sigName: "notify::online", callback: (...args: any[]) => void): number
    on(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::user-cache-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-cache-dir", ...args: any[]): void
    connect(sigName: "notify::user-data-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-data-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-data-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-data-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-data-dir", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Session extends GObject.Object {

    // Own properties of Camel-1.2.Camel.Session

    static name: string

    // Constructors of Camel-1.2.Camel.Session

    constructor(config?: Session.ConstructorProperties) 
    _init(config?: Session.ConstructorProperties): void
}

export module Settings {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Settings {

    // Own properties of Camel-1.2.Camel.Settings

    __gtype__: number

    // Owm methods of Camel-1.2.Camel.Settings

    // Has conflict: clone(): Settings
    // Has conflict: equal(settingsB: Settings): boolean

    // Own virtual methods of Camel-1.2.Camel.Settings

    /**
     * Creates a copy of `settings,` such that passing `settings` and the
     * copied instance to camel_settings_equal() would return %TRUE.
     * 
     * By default, this creates a new settings instance with the same #GType
     * as `settings,` and copies all #GObject property values from `settings`
     * to the new instance.
     * @virtual 
     * @returns a newly-created copy of @settings
     */
    clone(): Settings
    /**
     * Returns %TRUE if `settings_a` and `settings_b` are equal.
     * 
     * By default, equality requires both instances to have the same #GType
     * with the same set of #GObject properties, and each property value in
     * `settings_a` is equal to the corresponding value in `settings_b`.
     * @virtual 
     * @param settingsB another #CamelSettings
     * @returns %TRUE if @settings_a and @settings_b are equal
     */
    equal(settingsB: Settings): boolean

    // Class property signals of Camel-1.2.Camel.Settings

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @interface 
 */
export class Settings extends GObject.Object {

    // Own properties of Camel-1.2.Camel.Settings

    static name: string

    // Constructors of Camel-1.2.Camel.Settings

    constructor(config?: Settings.ConstructorProperties) 
    _init(config?: Settings.ConstructorProperties): void
    /**
     * Returns an array of #GParamSpec for properties of `class` which are
     * considered to be settings.  By default all properties are considered
     * to be settings, but subclasses may wish to exclude certain properties.
     * Free the returned array with g_free().
     * @param nSettings return location for the length of the returned array
     * @returns an array of #GParamSpec which should be freed after use
     */
    static listSettings(settings_class: Settings | Function | GObject.GType, nSettings: number): GObject.ParamSpec
}

export module Store {

    // Signal callback interfaces

    /**
     * Signal callback interface for `folder-created`
     */
    export interface FolderCreatedSignalCallback {
        (object: FolderInfo): void
    }

    /**
     * Signal callback interface for `folder-deleted`
     */
    export interface FolderDeletedSignalCallback {
        (object: FolderInfo): void
    }

    /**
     * Signal callback interface for `folder-info-stale`
     */
    export interface FolderInfoStaleSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `folder-opened`
     */
    export interface FolderOpenedSignalCallback {
        (object: Folder): void
    }

    /**
     * Signal callback interface for `folder-renamed`
     */
    export interface FolderRenamedSignalCallback {
        (object: string | null, p0: FolderInfo): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Service.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Store extends Gio.Initable {

    // Own properties of Camel-1.2.Camel.Store

    __gtype__: number

    // Own fields of Camel-1.2.Camel.Store

    parent: Service & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.Store

    // Has conflict: canRefreshFolder(info: FolderInfo): boolean
    /**
     * Asynchronously creates a new folder as a child of an existing folder.
     * `parent_name` can be %NULL to create a new top-level folder.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_store_create_folder_finish() to get the result of the operation.
     * @param parentName name of the new folder's parent, or %NULL
     * @param folderName name of the folder to create
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    createFolder(parentName: string | null, folderName: string | null, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_create_folder().
     * The returned #CamelFolderInfo struct should be freed with
     * camel_folder_info_free().
     * @param result a #GAsyncResult
     * @returns info about the created folder, or %NULL on error
     */
    createFolderFinish(result: Gio.AsyncResult): FolderInfo | null
    // Has conflict: createFolderSync(parentName: string | null, folderName: string | null, cancellable: Gio.Cancellable | null): FolderInfo | null
    /**
     * Deletes local data for the given `folder_name`. The folder should
     * be part of the opened folders.
     * 
     * It doesn't delete the folder in the store (server) as such.
     * Use camel_store_delete_folder(), or its synchronous variant,
     * if you want to do that instead.
     * @param folderName a folder full name to delete from the cache
     */
    deleteCachedFolder(folderName: string | null): void
    /**
     * Asynchronously deletes the folder described by `folder_name`.  The
     * folder must be empty.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_store_delete_folder_finish() to get the result of the operation.
     * @param folderName name of the folder to delete
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    deleteFolder(folderName: string | null, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_delete_folder().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    deleteFolderFinish(result: Gio.AsyncResult): boolean
    // Has conflict: deleteFolderSync(folderName: string | null, cancellable: Gio.Cancellable | null): boolean
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
    dupOpenedFolders(): Folder[]
    // Has conflict: folderCreated(folderInfo: FolderInfo): void
    // Has conflict: folderDeleted(folderInfo: FolderInfo): void
    // Has conflict: folderInfoStale(): void
    // Has conflict: folderOpened(folder: Folder): void
    // Has conflict: folderRenamed(oldName: string | null, folderInfo: FolderInfo): void
    // Has conflict: getCanAutoSaveChanges(): boolean
    getDb(): DB
    getFlags(): number
    /**
     * Asynchronously gets a specific folder object from `store` by name.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_store_get_folder_finish() to get the result of the operation.
     * @param folderName name of the folder to get
     * @param flags folder flags (create, save body index, etc)
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    getFolder(folderName: string | null, flags: StoreGetFolderFlags, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_get_folder().
     * @param result a #GAsyncResult
     * @returns the requested #CamelFolder object, or %NULL on error
     */
    getFolderFinish(result: Gio.AsyncResult): Folder | null
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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    getFolderInfo(top: string | null, flags: StoreGetFolderInfoFlags, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_get_folder_info().
     * The returned #CamelFolderInfo tree should be freed with
     * camel_folder_info_free().
     * @param result a #GAsyncResult
     * @returns a #CamelFolderInfo tree, or %NULL on error
     */
    getFolderInfoFinish(result: Gio.AsyncResult): FolderInfo | null
    // Has conflict: getFolderInfoSync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable: Gio.Cancellable | null): FolderInfo | null
    // Has conflict: getFolderSync(folderName: string | null, flags: StoreGetFolderFlags, cancellable: Gio.Cancellable | null): Folder | null
    getFoldersBag(): ObjectBag
    /**
     * Asynchronously gets the folder in `store` into which new mail is delivered.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call camel_store_get_inbox_folder_finish() to get the result of
     * the operation.
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    getInboxFolder(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_get_inbox_folder().
     * @param result a #GAsyncResult
     * @returns the inbox folder for @store, or %NULL on error or if no such folder exists
     */
    getInboxFolderFinish(result: Gio.AsyncResult): Folder | null
    // Has conflict: getInboxFolderSync(cancellable: Gio.Cancellable | null): Folder | null
    /**
     * Asynchronously gets the folder in `store` into which junk is delivered.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call camel_store_get_junk_folder_finish() to get the result of
     * the operation.
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    getJunkFolder(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_get_junk_folder().
     * @param result a #GAsyncResult
     * @returns the junk folder for @store, or %NULL on error or if no such folder exists
     */
    getJunkFolderFinish(result: Gio.AsyncResult): Folder | null
    // Has conflict: getJunkFolderSync(cancellable: Gio.Cancellable | null): Folder | null
    getPermissions(): number
    /**
     * Asynchronously gets the folder in `store` into which trash is delivered.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call camel_store_get_trash_folder_finish() to get the result of
     * the operation.
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    getTrashFolder(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_get_trash_folder().
     * @param result a #GAsyncResult
     * @returns the trash folder for @store, or %NULL on error or if no such folder exists
     */
    getTrashFolderFinish(result: Gio.AsyncResult): Folder | null
    // Has conflict: getTrashFolderSync(cancellable: Gio.Cancellable | null): Folder | null
    /**
     * Runs initial setup for the `store` asynchronously.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call camel_store_initial_setup_finish() to get the result of the operation.
     * 
     * The `store` advertises support of this function by including
     * CAMEL_STORE_SUPPORTS_INITIAL_SETUP in CamelStore::flags.
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    initialSetup(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_initial_setup().
     * 
     * The save_setup result, if not %NULL, should be freed using
     * g_hash_table_destroy(). It's not an error to have it %NULL,
     * it only means the `store` doesn't have anything to save.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    initialSetupFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outSaveSetup */ GLib.HashTable ]
    // Has conflict: initialSetupSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSaveSetup */ GLib.HashTable ]
    /**
     * Checks the state of the current CamelDB used for the `store` and eventually
     * runs maintenance routines on it.
     * @returns Whether succeeded.
     */
    maybeRunDbMaintenance(): boolean
    /**
     * Asynchronously renames the folder described by `old_name` to `new_name`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_store_rename_folder_finish() to get the result of the operation.
     * @param oldName the current name of the folder
     * @param newName the new name of the folder
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    renameFolder(oldName: string | null, newName: string | null, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_rename_folder().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    renameFolderFinish(result: Gio.AsyncResult): boolean
    // Has conflict: renameFolderSync(oldName: string | null, newName: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets flags for the `store,` a bit-or of #CamelStoreFlags.
     * @param flags bit-or of #CamelStoreFlags
     */
    setFlags(flags: number): void
    /**
     * Sets permissions for the `store,` a bit-or of #CamelStorePermissionFlags
     * @param permissions permissions of the `store,` a bit-or of #CamelStorePermissionFlags
     */
    setPermissions(permissions: number): void
    /**
     * Synchronizes any changes that have been made to `store` and its folders
     * with the real store asynchronously.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call camel_store_synchronize_finish() to get the result of the operation.
     * @param expunge whether to expunge after synchronizing
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    synchronize(expunge: boolean, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_store_synchronize().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    synchronizeFinish(result: Gio.AsyncResult): boolean
    // Has conflict: synchronizeSync(expunge: boolean, cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of Camel-1.2.Camel.Store

    /**
     * Returns if this folder (param info) should be checked for new mail or not.
     * It should not look into sub infos (info->child) or next infos, it should
     * return value only for the actual folder info.
     * Default behavior is that all Inbox folders are intended to be refreshed.
     * @virtual 
     * @param info a #CamelFolderInfo
     * @returns whether folder should be checked for new mails
     */
    canRefreshFolder(info: FolderInfo): boolean
    /**
     * Creates a new folder as a child of an existing folder.
     * `parent_name` can be %NULL to create a new top-level folder.
     * The returned #CamelFolderInfo struct should be freed with
     * camel_folder_info_free().
     * @virtual 
     * @param parentName name of the new folder's parent, or %NULL
     * @param folderName name of the folder to create
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns info about the created folder, or %NULL on error
     */
    createFolderSync(parentName: string | null, folderName: string | null, cancellable: Gio.Cancellable | null): FolderInfo | null
    /**
     * Deletes the folder described by `folder_name`.  The folder must be empty.
     * @virtual 
     * @param folderName name of the folder to delete
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    deleteFolderSync(folderName: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Emits the #CamelStore::folder-created signal from an idle source on
     * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @virtual 
     * @param folderInfo information about the created folder
     */
    folderCreated(folderInfo: FolderInfo): void
    /**
     * Emits the #CamelStore::folder-deleted signal from an idle source on
     * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @virtual 
     * @param folderInfo information about the deleted folder
     */
    folderDeleted(folderInfo: FolderInfo): void
    /**
     * Emits the #CamelStore::folder-info-stale signal from an idle source
     * on the main loop.  The idle source's priority is #G_PRIORITY_LOW.
     * 
     * See the #CamelStore::folder-info-stale documentation for details on
     * when to use this signal.
     * 
     * This function is only intended for Camel providers.
     * @virtual 
     */
    folderInfoStale(): void
    /**
     * Emits the #CamelStore::folder-opened signal from an idle source on
     * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @virtual 
     * @param folder the #CamelFolder that was opened
     */
    folderOpened(folder: Folder): void
    /**
     * Emits the #CamelStore::folder-renamed signal from an idle source on
     * the main loop.  The idle source's priority is #G_PRIORITY_HIGH_IDLE.
     * 
     * This function is only intended for Camel providers.
     * @virtual 
     * @param oldName the old name of the folder
     * @param folderInfo information about the renamed folder
     */
    folderRenamed(oldName: string | null, folderInfo: FolderInfo): void
    /**
     * Returns whether there can be done automatic save of folder changes.
     * Default is TRUE. The descendants can overwrite it with CamelStoreClass::get_can_auto_save_changes().
     * @virtual 
     * @returns Whether there can be done automatic save of folder changes.
     */
    getCanAutoSaveChanges(): boolean
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
     * @virtual 
     * @param top the name of the folder to start from
     * @param flags various CAMEL_STORE_FOLDER_INFO_* flags to control behavior
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns a #CamelFolderInfo tree, or %NULL on error
     */
    getFolderInfoSync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable: Gio.Cancellable | null): FolderInfo | null
    /**
     * Gets a specific folder object from `store` by name.
     * @virtual 
     * @param folderName name of the folder to get
     * @param flags folder flags (create, save body index, etc)
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the requested #CamelFolder object, or %NULL on error
     */
    getFolderSync(folderName: string | null, flags: StoreGetFolderFlags, cancellable: Gio.Cancellable | null): Folder | null
    /**
     * Gets the folder in `store` into which new mail is delivered.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the inbox folder for @store, or %NULL on error or if no such folder exists
     */
    getInboxFolderSync(cancellable: Gio.Cancellable | null): Folder | null
    /**
     * Gets the folder in `store` into which junk is delivered.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the junk folder for @store, or %NULL on error or if no such folder exists
     */
    getJunkFolderSync(cancellable: Gio.Cancellable | null): Folder | null
    /**
     * Gets the folder in `store` into which trash is delivered.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the trash folder for @store, or %NULL on error or if no such folder exists
     */
    getTrashFolderSync(cancellable: Gio.Cancellable | null): Folder | null
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
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    initialSetupSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSaveSetup */ GLib.HashTable ]
    /**
     * Renames the folder described by `old_name` to `new_name`.
     * @virtual 
     * @param oldName the current name of the folder
     * @param newName the new name of the folder
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    renameFolderSync(oldName: string | null, newName: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronizes any changes that have been made to `store` and its folders
     * with the real store.
     * @virtual 
     * @param expunge whether to expunge after synchronizing
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on error
     */
    synchronizeSync(expunge: boolean, cancellable: Gio.Cancellable | null): boolean

    // Own signals of Camel-1.2.Camel.Store

    connect(sigName: "folder-created", callback: Store.FolderCreatedSignalCallback): number
    
    // Overloads of connect
    
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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "folder-created", callback: Store.FolderCreatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-created", callback: Store.FolderCreatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-created", callback: Store.FolderCreatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "folder-created", ...args: any[]): void
    connect(sigName: "folder-deleted", callback: Store.FolderDeletedSignalCallback): number
    
    // Overloads of connect
    
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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "folder-deleted", callback: Store.FolderDeletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-deleted", callback: Store.FolderDeletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-deleted", callback: Store.FolderDeletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "folder-deleted", ...args: any[]): void
    connect(sigName: "folder-info-stale", callback: Store.FolderInfoStaleSignalCallback): number
    
    // Overloads of connect
    
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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "folder-info-stale", callback: Store.FolderInfoStaleSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-info-stale", callback: Store.FolderInfoStaleSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-info-stale", callback: Store.FolderInfoStaleSignalCallback): NodeJS.EventEmitter
    emit(sigName: "folder-info-stale", ...args: any[]): void
    connect(sigName: "folder-opened", callback: Store.FolderOpenedSignalCallback): number
    
    // Overloads of connect
    
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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "folder-opened", callback: Store.FolderOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-opened", callback: Store.FolderOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-opened", callback: Store.FolderOpenedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "folder-opened", ...args: any[]): void
    connect(sigName: "folder-renamed", callback: Store.FolderRenamedSignalCallback): number
    
    // Overloads of connect
    
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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "folder-renamed", callback: Store.FolderRenamedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-renamed", callback: Store.FolderRenamedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-renamed", callback: Store.FolderRenamedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "folder-renamed", p0: FolderInfo, ...args: any[]): void

    // Class property signals of Camel-1.2.Camel.Store

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::connection-status", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::connection-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection-status", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::session", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Store extends Service {

    // Own properties of Camel-1.2.Camel.Store

    static name: string

    // Constructors of Camel-1.2.Camel.Store

    constructor(config?: Store.ConstructorProperties) 
    _init(config?: Store.ConstructorProperties): void
}

export module StoreSettings {

    // Constructor properties interface

    export interface ConstructorProperties extends Settings.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.StoreSettings

        filterInbox?: boolean | null
        storeChangesInterval?: number | null
    }

}

export interface StoreSettings {

    // Own properties of Camel-1.2.Camel.StoreSettings

    filterInbox: boolean
    storeChangesInterval: number
    __gtype__: number

    // Owm methods of Camel-1.2.Camel.StoreSettings

    /**
     * Returns whether to automatically apply filters to newly arrived messages
     * in the store's Inbox folder (assuming it has an Inbox folder).
     * @returns whether to filter new messages in Inbox
     */
    getFilterInbox(): boolean
    /**
     * Returns the interval, in seconds, for the changes in the folder being
     * saved automatically. 0 means immediately, while -1 means turning off
     * automatic folder change saving.
     * @returns the interval for automatic store of folder changes
     */
    getStoreChangesInterval(): number
    /**
     * Sets whether to automatically apply filters to newly arrived messages
     * in the store's Inbox folder (assuming it has an Inbox folder).
     * @param filterInbox whether to filter new messages in Inbox
     */
    setFilterInbox(filterInbox: boolean): void
    /**
     * Sets the interval, in seconds, for the changes in the folder being
     * saved automatically. 0 means immediately, while -1 means turning off
     * automatic folder change saving.
     * @param interval the interval, in seconds
     */
    setStoreChangesInterval(interval: number): void

    // Class property signals of Camel-1.2.Camel.StoreSettings

    connect(sigName: "notify::filter-inbox", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter-inbox", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter-inbox", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter-inbox", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter-inbox", ...args: any[]): void
    connect(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void): number
    on(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::store-changes-interval", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class StoreSettings extends Settings {

    // Own properties of Camel-1.2.Camel.StoreSettings

    static name: string

    // Constructors of Camel-1.2.Camel.StoreSettings

    constructor(config?: StoreSettings.ConstructorProperties) 
    _init(config?: StoreSettings.ConstructorProperties): void
}

export module StoreSummary {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface StoreSummary {

    // Own properties of Camel-1.2.Camel.StoreSummary

    __gtype__: number

    // Own fields of Camel-1.2.Camel.StoreSummary

    parent: GObject.Object
    priv: StoreSummaryPrivate

    // Owm methods of Camel-1.2.Camel.StoreSummary

    /**
     * The `info` record should have been generated by calling one of the
     * info_new_*() functions, as it will be free'd based on the summary
     * class.  And MUST NOT be allocated directly using malloc.
     * @param info a #CamelStoreInfo
     */
    add(info: StoreInfo): void
    /**
     * Build a new info record based on the name, and add it to the summary.
     * @param path item path
     * @returns the newly added record or %NULL if the @path already exists
     */
    addFromPath(path: string | null): StoreInfo | null
    /**
     * Obtain a copy of the summary array.  This is done atomically,
     * so cannot contain empty entries.
     * 
     * It must be freed using g_ptr_array_unref().
     * @returns the summary array
     */
    array(): StoreInfo[]
    /**
     * Free the folder summary array.
     * @param array the summary array as gotten from camel_store_summary_array()
     */
    arrayFree(array: StoreInfo[]): void
    /**
     * Connects listeners for count changes on `folder_summary` to keep
     * CamelStoreInfo.total and CamelStoreInfo.unread in sync transparently.
     * The `folder_summary` is stored in `summary` as `path`. Use
     * camel_store_summary_disconnect_folder_summary() to disconnect from
     * listening.
     * @param path used path for `folder_summary`
     * @param folderSummary a #CamelFolderSummary object
     * @returns Whether successfully connect callbacks for count change notifications.
     */
    connectFolderSummary(path: string | null, folderSummary: FolderSummary): boolean
    /**
     * Get the number of summary items stored in this summary.
     * @returns the number of items gint he summary.
     */
    count(): number
    /**
     * Diconnects count change listeners previously connected
     * by camel_store_summary_connect_folder_summary().
     * @param folderSummary a #CamelFolderSummary object
     * @returns Whether such connection existed and whether was successfully removed.
     */
    disconnectFolderSummary(folderSummary: FolderSummary): boolean
    /**
     * Allocate a new #CamelStoreInfo, suitable for adding to this
     * summary.
     * @returns the newly allocated #CamelStoreInfo
     */
    infoNew(): StoreInfo
    /**
     * Unref and potentially free `info,` and all associated memory.
     * @param info a #CamelStoreInfo
     */
    infoUnref(info: StoreInfo): void
    /**
     * Load the summary off disk.
     * @returns 0 on success or -1 on fail
     */
    load(): number
    /**
     * Remove a specific `info` record from the summary.
     * @param info a #CamelStoreInfo
     */
    remove(info: StoreInfo): void
    /**
     * Remove a specific info record from the summary, by `path`.
     * @param path item path
     */
    removePath(path: string | null): void
    /**
     * Writes the summary to disk.  The summary is only written if changes
     * have occurred.
     * @returns 0 on success or -1 on fail
     */
    save(): number
    /**
     * Set the filename where the summary will be loaded to/saved from.
     * @param filename a filename
     */
    setFilename(filename: string | null): void
    /**
     * Sorts the array of the folders using the `compare_func`.
     * @param compareFunc a compare function
     */
    sort(compareFunc: GLib.CompareDataFunc): void
    /**
     * Mark the summary as changed, so that a save will force it to be
     * written back to disk.
     */
    touch(): void

    // Own virtual methods of Camel-1.2.Camel.StoreSummary

    storeInfoFree(info: StoreInfo): void
    storeInfoLoad(file: any | null): StoreInfo
    storeInfoNew(path: string | null): StoreInfo
    storeInfoSave(file: any | null, info: StoreInfo): number
    storeInfoSetValue(info: StoreInfo, type: number, value: string | null): void
    summaryHeaderLoad(file: any | null): number
    summaryHeaderSave(file: any | null): number

    // Class property signals of Camel-1.2.Camel.StoreSummary

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class StoreSummary extends GObject.Object {

    // Own properties of Camel-1.2.Camel.StoreSummary

    static name: string

    // Constructors of Camel-1.2.Camel.StoreSummary

    constructor(config?: StoreSummary.ConstructorProperties) 
    /**
     * Create a new #CamelStoreSummary object.
     * @constructor 
     * @returns a new #CamelStoreSummary object
     */
    constructor() 
    /**
     * Create a new #CamelStoreSummary object.
     * @constructor 
     * @returns a new #CamelStoreSummary object
     */
    static new(): StoreSummary
    _init(config?: StoreSummary.ConstructorProperties): void
}

export module Stream {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Seekable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.Stream

        baseStream?: Gio.IOStream | null
    }

}

export interface Stream extends Gio.Seekable {

    // Own properties of Camel-1.2.Camel.Stream

    baseStream: Gio.IOStream
    __gtype__: number

    // Own fields of Camel-1.2.Camel.Stream

    parent: GObject.Object
    priv: StreamPrivate

    // Owm methods of Camel-1.2.Camel.Stream

    // Has conflict: close(cancellable: Gio.Cancellable | null): number
    // Has conflict: eos(): boolean
    // Has conflict: flush(cancellable: Gio.Cancellable | null): number
    // Has conflict: read(buffer: number[], cancellable: Gio.Cancellable | null): number
    /**
     * Returns the #GIOStream for `stream`.  This is only valid if `stream` was
     * created with camel_stream_new().  For all other #CamelStream subclasses
     * this function returns %NULL.
     * 
     * The returned #GIOStream is referenced for thread-safety and should be
     * unreferenced with g_object_unref() when finished with it.
     * @returns a #GIOStream, or %NULL
     */
    refBaseStream(): Gio.IOStream | null
    /**
     * Replaces the #GIOStream passed to camel_stream_new() with `base_stream`.
     * The new `base_stream` should wrap the original #GIOStream, such as when
     * adding Transport Layer Security after issuing a STARTTLS command.
     * @param baseStream a #GIOStream
     */
    setBaseStream(baseStream: Gio.IOStream): void
    // Has conflict: write(buffer: number[], cancellable: Gio.Cancellable | null): number
    /**
     * Writes the string to the stream.
     * @param string a string
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the number of characters written or -1 on error.
     */
    writeString(string: string | null, cancellable: Gio.Cancellable | null): number
    /**
     * Write all of a stream (until eos) into another stream, in a
     * blocking fashion.
     * @param outputStream destination #CamelStream object
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns -1 on error, or the number of bytes successfully copied across streams.
     */
    writeToStream(outputStream: Stream, cancellable: Gio.Cancellable | null): number

    // Own virtual methods of Camel-1.2.Camel.Stream

    /**
     * Closes the stream.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns 0 on success or -1 on error.
     */
    close(cancellable: Gio.Cancellable | null): number
    /**
     * Tests if there are bytes left to read on the `stream` object.
     * @virtual 
     * @returns %TRUE on EOS or %FALSE otherwise.
     */
    eos(): boolean
    /**
     * Flushes any buffered data to the stream's backing store.  Only
     * meaningful for writable streams.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns 0 on success or -1 on fail along with setting @error
     */
    flush(cancellable: Gio.Cancellable | null): number
    /**
     * Attempts to read up to `n` bytes from `stream` into `buffer`.
     * @virtual 
     * @param buffer output buffer
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the number of bytes actually read, or -1 on error and set errno.
     */
    read(buffer: number[], cancellable: Gio.Cancellable | null): number
    /**
     * Attempts to write up to `n` bytes of `buffer` into `stream`.
     * @virtual 
     * @param buffer buffer to write.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the number of bytes written to the stream, or -1 on error along with setting errno.
     */
    write(buffer: number[], cancellable: Gio.Cancellable | null): number

    // Class property signals of Camel-1.2.Camel.Stream

    connect(sigName: "notify::base-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-stream", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Stream extends GObject.Object {

    // Own properties of Camel-1.2.Camel.Stream

    static name: string

    // Constructors of Camel-1.2.Camel.Stream

    constructor(config?: Stream.ConstructorProperties) 
    /**
     * Creates a #CamelStream as a thin wrapper for `base_stream`.
     * @constructor 
     * @param baseStream a #GIOStream
     * @returns a #CamelStream
     */
    constructor(baseStream: Gio.IOStream) 
    /**
     * Creates a #CamelStream as a thin wrapper for `base_stream`.
     * @constructor 
     * @param baseStream a #GIOStream
     * @returns a #CamelStream
     */
    static new(baseStream: Gio.IOStream): Stream
    _init(config?: Stream.ConstructorProperties): void
}

export module StreamBuffer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Seekable.ConstructorProperties, Stream.ConstructorProperties {
    }

}

export interface StreamBuffer extends Gio.Seekable {

    // Own properties of Camel-1.2.Camel.StreamBuffer

    __gtype__: number

    // Own fields of Camel-1.2.Camel.StreamBuffer

    parent: Stream & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.StreamBuffer

    /**
     * Discards any cached data in the `sbf`. The next read reads
     * from the stream.
     */
    discardCache(): void
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
    gets(buf: number[], cancellable: Gio.Cancellable | null): number
    /**
     * This function reads a complete newline-terminated line from the stream
     * and returns it in allocated memory. The trailing newline (and carriage
     * return if any) are not included in the returned string.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the line read, which the caller must free when done with, or %NULL on eof. If an error occurs, @error will be set.
     */
    readLine(cancellable: Gio.Cancellable | null): string | null

    // Own virtual methods of Camel-1.2.Camel.StreamBuffer

    init(stream: Stream, mode: StreamBufferMode): void
    initVbuf(stream: Stream, mode: StreamBufferMode, buf: string | null, size: number): void

    // Class property signals of Camel-1.2.Camel.StreamBuffer

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::base-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class StreamBuffer extends Stream {

    // Own properties of Camel-1.2.Camel.StreamBuffer

    static name: string

    // Constructors of Camel-1.2.Camel.StreamBuffer

    constructor(config?: StreamBuffer.ConstructorProperties) 
    /**
     * Create a new buffered stream of another stream.  A default
     * buffer size (1024 bytes), automatically managed will be used
     * for buffering.
     * 
     * The following values are available for `mode:`
     * 
     * #CAMEL_STREAM_BUFFER_BUFFER, Buffer the input/output in blocks.
     * #CAMEL_STREAM_BUFFER_NEWLINE, Buffer on newlines (for output).
     * #CAMEL_STREAM_BUFFER_NONE, Perform no buffering.
     * 
     * Note that currently this is ignored and #CAMEL_STREAM_BUFFER_BUFFER
     * is always used.
     * 
     * In addition, one of the following mode options should be or'd
     * together with the buffering mode:
     * 
     * #CAMEL_STREAM_BUFFER_WRITE, Buffer in write mode.
     * #CAMEL_STREAM_BUFFER_READ, Buffer in read mode.
     * 
     * Buffering can only be done in one direction for any
     * buffer instance.
     * @constructor 
     * @param stream a #CamelStream object to buffer
     * @param mode Operational mode of buffered stream.
     * @returns a newly created buffered stream.
     */
    constructor(stream: Stream, mode: StreamBufferMode) 
    /**
     * Create a new buffered stream of another stream.  A default
     * buffer size (1024 bytes), automatically managed will be used
     * for buffering.
     * 
     * The following values are available for `mode:`
     * 
     * #CAMEL_STREAM_BUFFER_BUFFER, Buffer the input/output in blocks.
     * #CAMEL_STREAM_BUFFER_NEWLINE, Buffer on newlines (for output).
     * #CAMEL_STREAM_BUFFER_NONE, Perform no buffering.
     * 
     * Note that currently this is ignored and #CAMEL_STREAM_BUFFER_BUFFER
     * is always used.
     * 
     * In addition, one of the following mode options should be or'd
     * together with the buffering mode:
     * 
     * #CAMEL_STREAM_BUFFER_WRITE, Buffer in write mode.
     * #CAMEL_STREAM_BUFFER_READ, Buffer in read mode.
     * 
     * Buffering can only be done in one direction for any
     * buffer instance.
     * @constructor 
     * @param stream a #CamelStream object to buffer
     * @param mode Operational mode of buffered stream.
     * @returns a newly created buffered stream.
     */
    static new(stream: Stream, mode: StreamBufferMode): StreamBuffer

    // Overloads of new

    /**
     * Creates a #CamelStream as a thin wrapper for `base_stream`.
     * @constructor 
     * @param baseStream a #GIOStream
     * @returns a #CamelStream
     */
    static new(baseStream: Gio.IOStream): Stream
    _init(config?: StreamBuffer.ConstructorProperties): void
}

export module StreamFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Seekable.ConstructorProperties, Stream.ConstructorProperties {
    }

}

export interface StreamFilter extends Gio.Seekable {

    // Own properties of Camel-1.2.Camel.StreamFilter

    __gtype__: number

    // Own fields of Camel-1.2.Camel.StreamFilter

    parent: Stream & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.StreamFilter

    /**
     * Add a new #CamelMimeFilter to execute during the processing of this
     * stream.  Each filter added is processed after the previous one.
     * 
     * Note that a filter should only be added to a single stream
     * at a time, otherwise unpredictable results may occur.
     * @param filter a #CamelMimeFilter object
     * @returns a filter id for the added @filter.
     */
    add(filter: MimeFilter): number
    getSource(): Stream
    /**
     * Remove a processing filter from the stream by id.
     * @param id Filter id, as returned from camel_stream_filter_add()
     */
    remove(id: number): void

    // Class property signals of Camel-1.2.Camel.StreamFilter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::base-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class StreamFilter extends Stream {

    // Own properties of Camel-1.2.Camel.StreamFilter

    static name: string

    // Constructors of Camel-1.2.Camel.StreamFilter

    constructor(config?: StreamFilter.ConstructorProperties) 
    /**
     * Create a new #CamelStreamFilter object. The `source` stream
     * is referenced, thus the caller can unref it, if not needed.
     * @constructor 
     * @param source a #CamelStream to filter
     * @returns a new #CamelStreamFilter object.
     */
    constructor(source: Stream) 
    /**
     * Create a new #CamelStreamFilter object. The `source` stream
     * is referenced, thus the caller can unref it, if not needed.
     * @constructor 
     * @param source a #CamelStream to filter
     * @returns a new #CamelStreamFilter object.
     */
    static new(source: Stream): StreamFilter

    // Overloads of new

    /**
     * Creates a #CamelStream as a thin wrapper for `base_stream`.
     * @constructor 
     * @param baseStream a #GIOStream
     * @returns a #CamelStream
     */
    static new(baseStream: Gio.IOStream): Stream
    _init(config?: StreamFilter.ConstructorProperties): void
}

export module StreamFs {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Seekable.ConstructorProperties, Stream.ConstructorProperties {
    }

}

export interface StreamFs extends Gio.Seekable {

    // Own properties of Camel-1.2.Camel.StreamFs

    __gtype__: number

    // Own fields of Camel-1.2.Camel.StreamFs

    parent: Stream & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.StreamFs

    getFd(): number

    // Class property signals of Camel-1.2.Camel.StreamFs

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::base-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class StreamFs extends Stream {

    // Own properties of Camel-1.2.Camel.StreamFs

    static name: string

    // Constructors of Camel-1.2.Camel.StreamFs

    constructor(config?: StreamFs.ConstructorProperties) 
    /**
     * Creates a new fs stream using the given file descriptor `fd` as the
     * backing store. When the stream is destroyed, the file descriptor
     * will be closed.
     * @constructor 
     * @param fd a file descriptor
     * @returns a new #CamelStreamFs
     */
    static newWithFd(fd: number): StreamFs
    /**
     * Creates a new #CamelStreamFs corresponding to the named file, flags,
     * and mode.
     * @constructor 
     * @param name a local filename
     * @param flags flags as in open(2)
     * @param mode a file mode
     * @returns the new stream, or %NULL on error
     */
    static newWithName(name: string | null, flags: number, mode: number): StreamFs
    _init(config?: StreamFs.ConstructorProperties): void
}

export module StreamMem {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Seekable.ConstructorProperties, Stream.ConstructorProperties {
    }

}

export interface StreamMem extends Gio.Seekable {

    // Own properties of Camel-1.2.Camel.StreamMem

    __gtype__: number

    // Own fields of Camel-1.2.Camel.StreamMem

    parent: Stream & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.StreamMem

    getByteArray(): Uint8Array
    /**
     * Set `buffer` to be the backing data to the existing #CamelStreamMem, `mem`.
     * 
     * Note: `buffer` will be copied into an internal #GByteArray structure
     * and so may have resource implications to consider.
     * @param buffer a memory buffer
     */
    setBuffer(buffer: Uint8Array): void
    /**
     * Set `buffer` to be the backing data to the existing #CamelStreamMem, `mem`.
     * 
     * Note: `mem` will not take ownership of `buffer` and so will need to
     * be freed separately from `mem`.
     * @param buffer a #GByteArray
     */
    setByteArray(buffer: Uint8Array): void
    /**
     * Mark the memory stream as secure.  At the very least this means the
     * data in the buffer will be cleared when the buffer is finalized.
     * This only applies to buffers owned by the stream.
     */
    setSecure(): void

    // Class property signals of Camel-1.2.Camel.StreamMem

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::base-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class StreamMem extends Stream {

    // Own properties of Camel-1.2.Camel.StreamMem

    static name: string

    // Constructors of Camel-1.2.Camel.StreamMem

    constructor(config?: StreamMem.ConstructorProperties) 
    /**
     * Create a new #CamelStreamMem object.
     * @constructor 
     * @returns a new #CamelStreamMem
     */
    constructor() 
    /**
     * Create a new #CamelStreamMem object.
     * @constructor 
     * @returns a new #CamelStreamMem
     */
    static new(): StreamMem

    // Overloads of new

    /**
     * Creates a #CamelStream as a thin wrapper for `base_stream`.
     * @constructor 
     * @param baseStream a #GIOStream
     * @returns a #CamelStream
     */
    static new(baseStream: Gio.IOStream): Stream
    /**
     * Create a new memory stream using `buffer` as the stream data.
     * 
     * Note: `buffer` will be copied into an internal #GByteArray structure
     * for use as the stream backing. This may have resource implications
     * you may wish to consider.
     * @constructor 
     * @param buffer a memory buffer to use as the stream data
     * @returns a new #CamelStreamMem
     */
    static newWithBuffer(buffer: Uint8Array): StreamMem
    /**
     * Create a new #CamelStreamMem using `buffer` as the stream data.
     * 
     * Note: The newly created #CamelStreamMem will destroy `buffer`
     * when destroyed.
     * @constructor 
     * @param buffer a #GByteArray to use as the stream data
     * @returns a new #CamelStreamMem
     */
    static newWithByteArray(buffer: Uint8Array): StreamMem
    _init(config?: StreamMem.ConstructorProperties): void
}

export module StreamNull {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Seekable.ConstructorProperties, Stream.ConstructorProperties {
    }

}

export interface StreamNull extends Gio.Seekable {

    // Own properties of Camel-1.2.Camel.StreamNull

    __gtype__: number

    // Own fields of Camel-1.2.Camel.StreamNull

    parent: Stream & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.StreamNull

    getBytesWritten(): number
    getEndsWithCrlf(): boolean

    // Class property signals of Camel-1.2.Camel.StreamNull

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::base-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class StreamNull extends Stream {

    // Own properties of Camel-1.2.Camel.StreamNull

    static name: string

    // Constructors of Camel-1.2.Camel.StreamNull

    constructor(config?: StreamNull.ConstructorProperties) 
    /**
     * Returns a null stream.  A null stream is always at eof, and
     * always returns success for all reads and writes.
     * @constructor 
     * @returns a new #CamelStreamNull
     */
    constructor() 
    /**
     * Returns a null stream.  A null stream is always at eof, and
     * always returns success for all reads and writes.
     * @constructor 
     * @returns a new #CamelStreamNull
     */
    static new(): StreamNull

    // Overloads of new

    /**
     * Creates a #CamelStream as a thin wrapper for `base_stream`.
     * @constructor 
     * @param baseStream a #GIOStream
     * @returns a #CamelStream
     */
    static new(baseStream: Gio.IOStream): Stream
    _init(config?: StreamNull.ConstructorProperties): void
}

export module StreamProcess {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Seekable.ConstructorProperties, Stream.ConstructorProperties {
    }

}

export interface StreamProcess extends Gio.Seekable {

    // Own properties of Camel-1.2.Camel.StreamProcess

    __gtype__: number

    // Own fields of Camel-1.2.Camel.StreamProcess

    parent: Stream & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.StreamProcess

    connect(command: string | null, env: string | null): number

    // Class property signals of Camel-1.2.Camel.StreamProcess

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::base-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class StreamProcess extends Stream {

    // Own properties of Camel-1.2.Camel.StreamProcess

    static name: string

    // Constructors of Camel-1.2.Camel.StreamProcess

    constructor(config?: StreamProcess.ConstructorProperties) 
    /**
     * Returns a PROCESS stream.
     * @constructor 
     * @returns the stream
     */
    constructor() 
    /**
     * Returns a PROCESS stream.
     * @constructor 
     * @returns the stream
     */
    static new(): StreamProcess

    // Overloads of new

    /**
     * Creates a #CamelStream as a thin wrapper for `base_stream`.
     * @constructor 
     * @param baseStream a #GIOStream
     * @returns a #CamelStream
     */
    static new(baseStream: Gio.IOStream): Stream
    _init(config?: StreamProcess.ConstructorProperties): void
}

export module TextIndex {

    // Constructor properties interface

    export interface ConstructorProperties extends Index.ConstructorProperties {
    }

}

export interface TextIndex {

    // Own properties of Camel-1.2.Camel.TextIndex

    __gtype__: number

    // Own fields of Camel-1.2.Camel.TextIndex

    parent: Index & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.TextIndex

    dump(): void
    info(): void
    validate(): void

    // Class property signals of Camel-1.2.Camel.TextIndex

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class TextIndex extends Index {

    // Own properties of Camel-1.2.Camel.TextIndex

    static name: string

    // Constructors of Camel-1.2.Camel.TextIndex

    constructor(config?: TextIndex.ConstructorProperties) 
    constructor(path: string | null, flags: number) 
    static new(path: string | null, flags: number): TextIndex
    _init(config?: TextIndex.ConstructorProperties): void
    static check(path: string | null): number
    static remove(old: string | null): number
    static rename(old: string | null, new_: string | null): number
}

export module TextIndexCursor {

    // Constructor properties interface

    export interface ConstructorProperties extends IndexCursor.ConstructorProperties {
    }

}

export interface TextIndexCursor {

    // Own properties of Camel-1.2.Camel.TextIndexCursor

    __gtype__: number

    // Own fields of Camel-1.2.Camel.TextIndexCursor

    parent: IndexCursor & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.TextIndexCursor

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class TextIndexCursor extends IndexCursor {

    // Own properties of Camel-1.2.Camel.TextIndexCursor

    static name: string

    // Constructors of Camel-1.2.Camel.TextIndexCursor

    constructor(config?: TextIndexCursor.ConstructorProperties) 
    _init(config?: TextIndexCursor.ConstructorProperties): void
}

export module TextIndexKeyCursor {

    // Constructor properties interface

    export interface ConstructorProperties extends IndexCursor.ConstructorProperties {
    }

}

export interface TextIndexKeyCursor {

    // Own properties of Camel-1.2.Camel.TextIndexKeyCursor

    __gtype__: number

    // Own fields of Camel-1.2.Camel.TextIndexKeyCursor

    parent: IndexCursor & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.TextIndexKeyCursor

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class TextIndexKeyCursor extends IndexCursor {

    // Own properties of Camel-1.2.Camel.TextIndexKeyCursor

    static name: string

    // Constructors of Camel-1.2.Camel.TextIndexKeyCursor

    constructor(config?: TextIndexKeyCursor.ConstructorProperties) 
    _init(config?: TextIndexKeyCursor.ConstructorProperties): void
}

export module TextIndexName {

    // Constructor properties interface

    export interface ConstructorProperties extends IndexName.ConstructorProperties {
    }

}

export interface TextIndexName {

    // Own properties of Camel-1.2.Camel.TextIndexName

    __gtype__: number

    // Own fields of Camel-1.2.Camel.TextIndexName

    parent: IndexName & GObject.Object
    priv: any

    // Class property signals of Camel-1.2.Camel.TextIndexName

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class TextIndexName extends IndexName {

    // Own properties of Camel-1.2.Camel.TextIndexName

    static name: string

    // Constructors of Camel-1.2.Camel.TextIndexName

    constructor(config?: TextIndexName.ConstructorProperties) 
    _init(config?: TextIndexName.ConstructorProperties): void
}

export module Transport {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Service.ConstructorProperties {
    }

}

export interface Transport extends Gio.Initable {

    // Own properties of Camel-1.2.Camel.Transport

    __gtype__: number

    // Own fields of Camel-1.2.Camel.Transport

    parent: Service & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.Transport

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    sendTo(message: MimeMessage, from: Address, recipients: Address, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with camel_transport_send_to().
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on error
     */
    sendToFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outSentMessageSaved */ boolean ]
    // Has conflict: sendToSync(message: MimeMessage, from: Address, recipients: Address, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSentMessageSaved */ boolean ]

    // Own virtual methods of Camel-1.2.Camel.Transport

    /**
     * Sends the message to the given recipients, regardless of the contents
     * of `message`.  If the message contains a "Bcc" header, the transport
     * is responsible for stripping it.
     * @virtual 
     * @param message a #CamelMimeMessage to send
     * @param from a #CamelAddress to send from
     * @param recipients a #CamelAddress containing all recipients
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success or %FALSE on error
     */
    sendToSync(message: MimeMessage, from: Address, recipients: Address, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSentMessageSaved */ boolean ]

    // Class property signals of Camel-1.2.Camel.Transport

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::connection-status", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::connection-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection-status", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::session", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Transport extends Service {

    // Own properties of Camel-1.2.Camel.Transport

    static name: string

    // Constructors of Camel-1.2.Camel.Transport

    constructor(config?: Transport.ConstructorProperties) 
    _init(config?: Transport.ConstructorProperties): void
}

export module VTrashFolder {

    // Constructor properties interface

    export interface ConstructorProperties extends VeeFolder.ConstructorProperties {
    }

}

export interface VTrashFolder {

    // Own properties of Camel-1.2.Camel.VTrashFolder

    __gtype__: number

    // Own fields of Camel-1.2.Camel.VTrashFolder

    parent: VeeFolder & Folder & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.VTrashFolder

    getFolderType(): VTrashFolderType

    // Class property signals of Camel-1.2.Camel.VTrashFolder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::auto-update", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-update", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-update", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-update", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::mark-seen", callback: (...args: any[]) => void): number
    on(sigName: "notify::mark-seen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mark-seen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mark-seen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mark-seen", ...args: any[]): void
    connect(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mark-seen-timeout", ...args: any[]): void
    connect(sigName: "notify::parent-store", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-store", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VTrashFolder extends VeeFolder {

    // Own properties of Camel-1.2.Camel.VTrashFolder

    static name: string

    // Constructors of Camel-1.2.Camel.VTrashFolder

    constructor(config?: VTrashFolder.ConstructorProperties) 
    /**
     * Create a new CamelVTrashFolder object.
     * @constructor 
     * @param parentStore the parent #CamelVeeStore object
     * @param type type of vfolder, #CAMEL_VTRASH_FOLDER_TRASH or #CAMEL_VTRASH_FOLDER_JUNK currently.
     * @returns a new #CamelVTrashFolder object
     */
    constructor(parentStore: Store, type: VTrashFolderType) 
    /**
     * Create a new CamelVTrashFolder object.
     * @constructor 
     * @param parentStore the parent #CamelVeeStore object
     * @param type type of vfolder, #CAMEL_VTRASH_FOLDER_TRASH or #CAMEL_VTRASH_FOLDER_JUNK currently.
     * @returns a new #CamelVTrashFolder object
     */
    static new(parentStore: Store, type: VTrashFolderType): VTrashFolder

    // Overloads of new

    static new(parentStore: Store, full: string | null, flags: number): VeeFolder
    _init(config?: VTrashFolder.ConstructorProperties): void
}

export module VeeDataCache {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface VeeDataCache {

    // Own properties of Camel-1.2.Camel.VeeDataCache

    __gtype__: number

    // Owm methods of Camel-1.2.Camel.VeeDataCache

    /**
     * Adds the `subfolder` to the `data_cache` to be tracked by it. The `subfolder`
     * is referenced for later use. The function does nothing when the `subfolder`
     * is already in the `data_cache`. The subfolders can be removed with
     * camel_vee_data_cache_remove_subfolder().
     * @param subfolder a #CamelFolder
     */
    addSubfolder(subfolder: Folder): void
    /**
     * Returns whether data_cache contains given `orig_message_uid` for the given `folder`.
     * Unlike camel_vee_data_cache_get_message_info_data(), this only
     * returns %FALSE if not, while camel_vee_data_cache_get_message_info_data()
     * auto-adds it to data_cache.
     * @param folder a #CamelFolder to which the `orig_message_uid` belongs
     * @param origMessageUid a message UID from the `folder` to check
     */
    containsMessageInfoData(folder: Folder, origMessageUid: string | null): boolean
    /**
     * Calls the `func` for each message info data from the given `fromfolder`
     * @param fromfolder a #CamelFolder
     * @param func a #CamelForeachInfoData function to call
     */
    foreachMessageInfoData(fromfolder: Folder, func: ForeachInfoData): void
    /**
     * Returns a referenced #CamelVeeMessageInfoData referencing the given `folder`
     * and `orig_message_uid`. If it's not part of the `data_cache,` then it is
     * created and auto-added. Use camel_vee_data_cache_contains_message_info_data()
     * when you only want to check the existence, without adding it to the `data_cache`.
     * @param folder a #CamelFolder to which the `orig_message_uid` belongs
     * @param origMessageUid a message UID from the `folder` to return
     * @returns a referenced #CamelVeeMessageInfoData; unref it    with g_object_unref(), when no longer needed.
     */
    getMessageInfoData(folder: Folder, origMessageUid: string | null): VeeMessageInfoData
    getMessageInfoDataByVuid(veeMessageUid: string | null): VeeMessageInfoData | null
    /**
     * Returns a #CamelVeeSubfolderData for the given `folder`.
     * @param folder a #CamelFolder for which to return subfolder data
     * @returns a referenced #CamelVeeSubfolderData; unref it    with g_object_unref(), when no longer needed.
     */
    getSubfolderData(folder: Folder): VeeSubfolderData
    /**
     * Removes given `mi_data` from the `data_cache`.
     * @param miData a #CamelVeeMessageInfoData to remove
     */
    removeMessageInfoData(miData: VeeMessageInfoData): void
    /**
     * Removes given `subfolder` from the `data_cache,` which had been
     * previously added with camel_vee_data_cache_add_subfolder().
     * The function does nothing, when the `subfolder` is not part
     * of the `data_cache`.
     * @param subfolder a #CamelFolder to remove
     */
    removeSubfolder(subfolder: Folder): void

    // Class property signals of Camel-1.2.Camel.VeeDataCache

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class VeeDataCache extends GObject.Object {

    // Own properties of Camel-1.2.Camel.VeeDataCache

    static name: string

    // Constructors of Camel-1.2.Camel.VeeDataCache

    constructor(config?: VeeDataCache.ConstructorProperties) 
    constructor() 
    static new(): VeeDataCache
    _init(config?: VeeDataCache.ConstructorProperties): void
}

export module VeeFolder {

    // Constructor properties interface

    export interface ConstructorProperties extends Folder.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.VeeFolder

        autoUpdate?: boolean | null
    }

}

export interface VeeFolder {

    // Own properties of Camel-1.2.Camel.VeeFolder

    autoUpdate: boolean
    __gtype__: number

    // Own fields of Camel-1.2.Camel.VeeFolder

    parent: Folder & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.VeeFolder

    // Has conflict: addFolder(subfolder: Folder, cancellable: Gio.Cancellable | null): void
    /**
     * Adds the `mi_data` to the `vfolder`. The `changes` can be
     * updated with the made change and later used to notify others
     * with camel_folder_changed() on the `vfolder`. This can be used
     * only for the Unmatched folder.
     * @param miData a #CamelVeeMessageInfoData to add
     * @param changes an optional #CamelFolderChangeInfo to update with the made change, or %NULL
     */
    addVuid(miData: any | null, changes: FolderChangeInfo | null): void
    /**
     * Initializes internal structures of the `vf`. This is meant to be
     * called by the descendants of #CamelVeeFolder.
     * @param flags flags for the `vf`
     */
    construct(flags: number): void
    getAutoUpdate(): boolean
    getExpression(): string | null
    getFlags(): number
    /**
     * Find the real folder (and message info UID) for the given `vinfo`.
     * When the `realuid` is not %NULL and it's set, then use g_free() to
     * free it, when no longer needed.
     * @param vinfo a #CamelVeeMessageInfo to search for
     * @returns a real (not virtual) #CamelFolder, which the @vinfo is for.
     */
    getLocation(vinfo: VeeMessageInfo): [ /* returnType */ Folder, /* realuid */ string | null ]
    getVeeUidFolder(veeMessageUid: string | null): Folder | null
    /**
     * The next `subfolder-'`s 'changed' event will be silently ignored. This
     * is usually used in virtual folders when the change was done in them,
     * but it is neither vTrash nor vJunk folder. Doing this avoids unnecessary
     * removals of messages which don't satisfy search criteria anymore,
     * which could be done on asynchronous delivery of folder's 'changed' signal.
     * These ignored changes are accumulated and used on folder refresh.
     * @param subfolder a #CamelFolder folder
     */
    ignoreNextChangedEvent(subfolder: Folder): void
    /**
     * Propagate any skipped changes into the `vf`. The skipped changes are used to not
     * hide the messages from the search folder unexpectedly. The function does nothing
     * when there are no changes to be propagated.
     */
    propagateSkippedChanges(): void
    // Has conflict: rebuildFolder(subfolder: Folder, cancellable: Gio.Cancellable | null): void
    /**
     * Returns a #GList of all folders of this `vfolder,` which
     * are used to populate it. These are in no particular order.
     * 
     * Free the returned #GList with
     * g_list_free_full (folders, g_object_unref);
     * when no longer needed.
     * @returns a #GList of all    folders of this @vfolder.
     */
    refFolders(): Folder[]
    // Has conflict: removeFolder(subfolder: Folder, cancellable: Gio.Cancellable | null): void
    /**
     * Make sure the next `subfolder-'`s 'changed' event will not be silently ignored.
     * This is a counter-part function of camel_vee_folder_ignore_next_changed_event(),
     * when there was expected a change, which did not happen, to take back the previous
     * ignore event request.
     * @param subfolder a #CamelFolder folder
     */
    removeFromIgnoreChangedEvent(subfolder: Folder): void
    /**
     * Removes given `mi_data` from the `vfolder`. The `changes` can be
     * updated with the made change and later used to notify others
     * with camel_folder_changed() on the `vfolder`. This can be used
     * only for the Unmatched folder.
     * @param miData a #CamelVeeMessageInfoData to remove
     * @param changes an optional #CamelFolderChangeInfo to update with the made change, or %NULL
     */
    removeVuid(miData: any | null, changes: FolderChangeInfo | null): void
    /**
     * Sets whether the `vfolder` can automatically update when of its
     * subfolders changes.
     * @param autoUpdate a value to set
     */
    setAutoUpdate(autoUpdate: boolean): void
    // Has conflict: setExpression(expression: string | null): void
    /**
     * Set the whole list of folder sources on a vee folder.
     * @param folders a #GList of #CamelFolder to add
     * @param cancellable optional #GCancellable object, or %NULL
     */
    setFolders(folders: Folder[], cancellable: Gio.Cancellable | null): void

    // Own virtual methods of Camel-1.2.Camel.VeeFolder

    /**
     * Adds `subfolder` as a source folder to `vfolder`.
     * @virtual 
     * @param subfolder source CamelFolder to add to `vfolder`
     * @param cancellable optional #GCancellable object, or %NULL
     */
    addFolder(subfolder: Folder, cancellable: Gio.Cancellable | null): void
    folderChanged(subfolder: Folder, changes: FolderChangeInfo): void
    /**
     * Rebuild the folder `subfolder,` if it should be.
     * @virtual 
     * @param subfolder source CamelFolder to add to `vfolder`
     * @param cancellable optional #GCancellable object, or %NULL
     */
    rebuildFolder(subfolder: Folder, cancellable: Gio.Cancellable | null): void
    /**
     * Removed the source folder, `subfolder,` from the virtual folder, `vfolder`.
     * @virtual 
     * @param subfolder source CamelFolder to remove from `vfolder`
     * @param cancellable optional #GCancellable object, or %NULL
     */
    removeFolder(subfolder: Folder, cancellable: Gio.Cancellable | null): void
    /**
     * Sets an SExp expression to be used for this `vfolder`
     * @virtual 
     * @param expression an SExp expression to set
     */
    setExpression(expression: string | null): void

    // Class property signals of Camel-1.2.Camel.VeeFolder

    connect(sigName: "notify::auto-update", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-update", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-update", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-update", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::mark-seen", callback: (...args: any[]) => void): number
    on(sigName: "notify::mark-seen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mark-seen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mark-seen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mark-seen", ...args: any[]): void
    connect(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mark-seen-timeout", ...args: any[]): void
    connect(sigName: "notify::parent-store", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-store", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VeeFolder extends Folder {

    // Own properties of Camel-1.2.Camel.VeeFolder

    static name: string

    // Constructors of Camel-1.2.Camel.VeeFolder

    constructor(config?: VeeFolder.ConstructorProperties) 
    constructor(parentStore: Store, full: string | null, flags: number) 
    static new(parentStore: Store, full: string | null, flags: number): VeeFolder
    _init(config?: VeeFolder.ConstructorProperties): void
}

export module VeeMessageInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends MessageInfo.ConstructorProperties {
    }

}

export interface VeeMessageInfo {

    // Own properties of Camel-1.2.Camel.VeeMessageInfo

    __gtype__: number

    // Own fields of Camel-1.2.Camel.VeeMessageInfo

    parent: MessageInfo & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.VeeMessageInfo

    getOriginalFolder(): Folder
    getOriginalSummary(): FolderSummary

    // Class property signals of Camel-1.2.Camel.VeeMessageInfo

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::abort-notifications", callback: (...args: any[]) => void): number
    on(sigName: "notify::abort-notifications", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::abort-notifications", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::abort-notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::abort-notifications", ...args: any[]): void
    connect(sigName: "notify::cc", callback: (...args: any[]) => void): number
    on(sigName: "notify::cc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cc", ...args: any[]): void
    connect(sigName: "notify::date-received", callback: (...args: any[]) => void): number
    on(sigName: "notify::date-received", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date-received", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date-received", ...args: any[]): void
    connect(sigName: "notify::date-sent", callback: (...args: any[]) => void): number
    on(sigName: "notify::date-sent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date-sent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date-sent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date-sent", ...args: any[]): void
    connect(sigName: "notify::dirty", callback: (...args: any[]) => void): number
    on(sigName: "notify::dirty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dirty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dirty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dirty", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::folder-flagged", callback: (...args: any[]) => void): number
    on(sigName: "notify::folder-flagged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::folder-flagged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::folder-flagged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::folder-flagged", ...args: any[]): void
    connect(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::folder-flagged-stamp", ...args: any[]): void
    connect(sigName: "notify::from", callback: (...args: any[]) => void): number
    on(sigName: "notify::from", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::from", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::from", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::from", ...args: any[]): void
    connect(sigName: "notify::headers", callback: (...args: any[]) => void): number
    on(sigName: "notify::headers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::headers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::headers", ...args: any[]): void
    connect(sigName: "notify::message-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::message-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message-id", ...args: any[]): void
    connect(sigName: "notify::mlist", callback: (...args: any[]) => void): number
    on(sigName: "notify::mlist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mlist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mlist", ...args: any[]): void
    connect(sigName: "notify::preview", callback: (...args: any[]) => void): number
    on(sigName: "notify::preview", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::preview", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::preview", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::preview", ...args: any[]): void
    connect(sigName: "notify::references", callback: (...args: any[]) => void): number
    on(sigName: "notify::references", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::references", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::references", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::subject", callback: (...args: any[]) => void): number
    on(sigName: "notify::subject", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subject", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subject", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::to", callback: (...args: any[]) => void): number
    on(sigName: "notify::to", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::to", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::to", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::user-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-flags", ...args: any[]): void
    connect(sigName: "notify::user-headers", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-headers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-headers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-headers", ...args: any[]): void
    connect(sigName: "notify::user-tags", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-tags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-tags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-tags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VeeMessageInfo extends MessageInfo {

    // Own properties of Camel-1.2.Camel.VeeMessageInfo

    static name: string

    // Constructors of Camel-1.2.Camel.VeeMessageInfo

    constructor(config?: VeeMessageInfo.ConstructorProperties) 
    /**
     * Creates a new instance of #CamelVeeMessageInfo which references
     * a message from the `original_summary` internally.
     * 
     * The `vuid` should be encoded in a way which the vFolder understands,
     * which is like the one returned by camel_vee_message_info_data_get_vee_message_uid().
     * @constructor 
     * @param summary a #CamelVeeSummary, the "owner" of the created message info
     * @param originalSummary an original #CamelFolderSummary to reference to
     * @param vuid what UID to set on the resulting message info
     * @returns a newly created #CamelVeeMessageInfo   which references @orig_mi. Free with g_object_unref() when done   with it.
     */
    constructor(summary: FolderSummary, originalSummary: FolderSummary, vuid: string | null) 
    /**
     * Creates a new instance of #CamelVeeMessageInfo which references
     * a message from the `original_summary` internally.
     * 
     * The `vuid` should be encoded in a way which the vFolder understands,
     * which is like the one returned by camel_vee_message_info_data_get_vee_message_uid().
     * @constructor 
     * @param summary a #CamelVeeSummary, the "owner" of the created message info
     * @param originalSummary an original #CamelFolderSummary to reference to
     * @param vuid what UID to set on the resulting message info
     * @returns a newly created #CamelVeeMessageInfo   which references @orig_mi. Free with g_object_unref() when done   with it.
     */
    static new(summary: FolderSummary, originalSummary: FolderSummary, vuid: string | null): VeeMessageInfo

    // Overloads of new

    /**
     * Create a new #CamelMessageInfo object, optionally for given `summary`.
     * @constructor 
     * @param summary parent #CamelFolderSummary object, or %NULL
     * @returns a new #CamelMessageInfo object
     */
    static new(summary: FolderSummary | null): MessageInfo
    _init(config?: VeeMessageInfo.ConstructorProperties): void
}

export module VeeMessageInfoData {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface VeeMessageInfoData {

    // Own properties of Camel-1.2.Camel.VeeMessageInfoData

    __gtype__: number

    // Owm methods of Camel-1.2.Camel.VeeMessageInfoData

    getOrigMessageUid(): string | null
    getSubfolderData(): VeeSubfolderData
    getVeeMessageUid(): string | null

    // Class property signals of Camel-1.2.Camel.VeeMessageInfoData

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class VeeMessageInfoData extends GObject.Object {

    // Own properties of Camel-1.2.Camel.VeeMessageInfoData

    static name: string

    // Constructors of Camel-1.2.Camel.VeeMessageInfoData

    constructor(config?: VeeMessageInfoData.ConstructorProperties) 
    constructor(subfolderData: VeeSubfolderData, origMessageUid: string | null) 
    static new(subfolderData: VeeSubfolderData, origMessageUid: string | null): VeeMessageInfoData
    _init(config?: VeeMessageInfoData.ConstructorProperties): void
}

export module VeeStore {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Store.ConstructorProperties {

        // Own constructor properties of Camel-1.2.Camel.VeeStore

        unmatchedEnabled?: boolean | null
    }

}

export interface VeeStore extends Gio.Initable {

    // Own properties of Camel-1.2.Camel.VeeStore

    unmatchedEnabled: boolean
    __gtype__: number

    // Own fields of Camel-1.2.Camel.VeeStore

    parent: Store & Service & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.VeeStore

    getUnmatchedEnabled(): boolean
    getUnmatchedFolder(): any | null
    getVeeDataCache(): VeeFolder
    /**
     * This is a counter part of camel_vee_store_note_subfolder_used(). Once
     * the `subfolder` is claimed to be not used by all folders its message infos
     * are removed from the Unmatched folder.
     * @param subfolder a #CamelFolder
     * @param unusedBy a #CamelVeeFolder
     */
    noteSubfolderUnused(subfolder: Folder, unusedBy: VeeFolder): void
    /**
     * Notes that the `subfolder` is used by `used_by` folder, which
     * is used to determine what folders will be included in
     * the Unmatched folders.
     * @param subfolder a #CamelFolder
     * @param usedBy a #CamelVeeFolder
     */
    noteSubfolderUsed(subfolder: Folder, usedBy: VeeFolder): void
    /**
     * A counter part of camel_vee_store_note_vuid_used(). Once the `unused_by`
     * claims the `mi_data` is not used by it anymore, and neither any other
     * virtual folder is using it, then the Unmatched folder will have it added.
     * @param miData a #CamelVeeMessageInfoData
     * @param unusedBy a #CamelVeeFolder
     */
    noteVuidUnused(miData: VeeMessageInfoData, unusedBy: VeeFolder): void
    /**
     * Notes the `mi_data` is used by the `used_by` virtual folder, which
     * removes it from the Unmatched folder, if not used anywhere else.
     * @param miData a #CamelVeeMessageInfoData
     * @param usedBy a #CamelVeeFolder
     */
    noteVuidUsed(miData: VeeMessageInfoData, usedBy: VeeFolder): void
    /**
     * Let's the `vstore` know to rebuild the Unmatched folder. This is done
     * as a separate job, when the `cancellable` is %NULL, otherwise it's run
     * synchronously.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    rebuildUnmatchedFolder(cancellable: Gio.Cancellable | null): void
    /**
     * Sets whether the Unmatched folder processing is enabled.
     * @param isEnabled value to set
     */
    setUnmatchedEnabled(isEnabled: boolean): void

    // Class property signals of Camel-1.2.Camel.VeeStore

    connect(sigName: "notify::unmatched-enabled", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::unmatched-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::unmatched-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::unmatched-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::unmatched-enabled", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::connection-status", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::connection-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection-status", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::session", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::state-filename", callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state-filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

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
     * @param ioPriority the I/O priority of the request
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VeeStore extends Store {

    // Own properties of Camel-1.2.Camel.VeeStore

    static name: string

    // Constructors of Camel-1.2.Camel.VeeStore

    constructor(config?: VeeStore.ConstructorProperties) 
    /**
     * Create a new #CamelVeeStore object.
     * @constructor 
     * @returns new #CamelVeeStore object
     */
    constructor() 
    /**
     * Create a new #CamelVeeStore object.
     * @constructor 
     * @returns new #CamelVeeStore object
     */
    static new(): VeeStore
    _init(config?: VeeStore.ConstructorProperties): void
}

export module VeeSubfolderData {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface VeeSubfolderData {

    // Own properties of Camel-1.2.Camel.VeeSubfolderData

    __gtype__: number

    // Owm methods of Camel-1.2.Camel.VeeSubfolderData

    getFolder(): Folder
    getFolderId(): string | null

    // Class property signals of Camel-1.2.Camel.VeeSubfolderData

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class VeeSubfolderData extends GObject.Object {

    // Own properties of Camel-1.2.Camel.VeeSubfolderData

    static name: string

    // Constructors of Camel-1.2.Camel.VeeSubfolderData

    constructor(config?: VeeSubfolderData.ConstructorProperties) 
    /**
     * Creates a new #CamelVeeSubfolderData object for the given `folder`.
     * The `folder` is referenced for later use.
     * @constructor 
     * @param folder a #CamelFolder for which create the object
     * @returns a new #CamelVeeSubfolderData. Use g_object_unref()    to unref it, when no longer needed.
     */
    constructor(folder: Folder) 
    /**
     * Creates a new #CamelVeeSubfolderData object for the given `folder`.
     * The `folder` is referenced for later use.
     * @constructor 
     * @param folder a #CamelFolder for which create the object
     * @returns a new #CamelVeeSubfolderData. Use g_object_unref()    to unref it, when no longer needed.
     */
    static new(folder: Folder): VeeSubfolderData
    _init(config?: VeeSubfolderData.ConstructorProperties): void
}

export module VeeSummary {

    // Constructor properties interface

    export interface ConstructorProperties extends FolderSummary.ConstructorProperties {
    }

}

export interface VeeSummary {

    // Own properties of Camel-1.2.Camel.VeeSummary

    __gtype__: number

    // Own fields of Camel-1.2.Camel.VeeSummary

    parent: FolderSummary & GObject.Object
    priv: any

    // Owm methods of Camel-1.2.Camel.VeeSummary

    /**
     * Unref returned pointer with g_object_unref()
     * @param miData the #CamelVeeMessageInfoData to add
     * @returns A new #CamelVeeMessageInfo object.
     */
    add(miData: VeeMessageInfoData): VeeMessageInfo

    // Overloads of add

    /**
     * Adds a new `info` record to the summary. If the `force_keep_uid` is %FALSE,
     * then a new uid is automatically re-assigned by calling
     * camel_folder_summary_next_uid_string(). It's an error to use
     * `force_keep_uid` when the `info` has none set.
     * 
     * The `summary` adds its own reference to `info,` if needed, and any
     * previously loaded info is replaced with the new one.
     * @param info a #CamelMessageInfo
     * @param forceKeepUid whether to keep set UID of the `info`
     */
    add(info: MessageInfo, forceKeepUid: boolean): void
    /**
     * Returns a hash table of all virtual message info UID-s known to the `summary`.
     * The key of the hash table is the virtual message info UID, the value is
     * only the number 1.
     * @param subfolder a #CamelFolder
     * @returns a #GHashTable with    all the virtual mesasge info UID-s knwn to the @summary.
     */
    getUidsForSubfolder(subfolder: Folder): GLib.HashTable
    /**
     * Removes the given `vuid` of the `subfolder` from the `summary`.
     * @param vuid a virtual message info UID to remove
     * @param subfolder a #CamelFolder to which `vuid` belongs
     */
    remove(vuid: string | null, subfolder: Folder): void

    // Overloads of remove

    /**
     * Remove a specific `info` record from the summary.
     * @param info a #CamelMessageInfo
     * @returns Whether the @info was found and removed from the @summary.
     */
    remove(info: MessageInfo): boolean
    /**
     * Makes sure `summary` flags on `uid` corresponds to those
     * in the subfolder of vee-folder, and updates internal counts
     * on `summary` as well.
     * @param uid a message UID to update flags for
     */
    replaceFlags(uid: string | null): void

    // Overloads of replaceFlags

    /**
     * Updates internal counts based on the flags in `info`.
     * @param info a #CamelMessageInfo
     * @returns Whether any count changed
     */
    replaceFlags(info: MessageInfo): boolean

    // Class property signals of Camel-1.2.Camel.VeeSummary

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::deleted-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::deleted-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::deleted-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::deleted-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::deleted-count", ...args: any[]): void
    connect(sigName: "notify::folder", callback: (...args: any[]) => void): number
    on(sigName: "notify::folder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::folder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::folder", ...args: any[]): void
    connect(sigName: "notify::junk-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::junk-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::junk-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::junk-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::junk-count", ...args: any[]): void
    connect(sigName: "notify::junk-not-deleted-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::junk-not-deleted-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::junk-not-deleted-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::junk-not-deleted-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::junk-not-deleted-count", ...args: any[]): void
    connect(sigName: "notify::saved-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::saved-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::saved-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::saved-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::saved-count", ...args: any[]): void
    connect(sigName: "notify::unread-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::unread-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::unread-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::unread-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::unread-count", ...args: any[]): void
    connect(sigName: "notify::visible-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VeeSummary extends FolderSummary {

    // Own properties of Camel-1.2.Camel.VeeSummary

    static name: string

    // Constructors of Camel-1.2.Camel.VeeSummary

    constructor(config?: VeeSummary.ConstructorProperties) 
    /**
     * This will create a new CamelVeeSummary object and read in the
     * summary data from disk, if it exists.
     * @constructor 
     * @param parent Folder its attached to.
     * @returns A new CamelVeeSummary object.
     */
    constructor(parent: Folder) 
    /**
     * This will create a new CamelVeeSummary object and read in the
     * summary data from disk, if it exists.
     * @constructor 
     * @param parent Folder its attached to.
     * @returns A new CamelVeeSummary object.
     */
    static new(parent: Folder): VeeSummary
    _init(config?: VeeSummary.ConstructorProperties): void
}

export interface AddressClass {

    // Own fields of Camel-1.2.Camel.AddressClass

    parentClass: GObject.ObjectClass
    length: (addr: Address) => number
    decode: (addr: Address, raw: string | null) => number
    encode: (addr: Address) => string | null
    unformat: (addr: Address, raw: string | null) => number
    format: (addr: Address) => string | null
    cat: (dest: Address, source: Address) => number
    remove: (addr: Address, index: number) => void
    reserved: any[]
}

export abstract class AddressClass {

    // Own properties of Camel-1.2.Camel.AddressClass

    static name: string
}

export interface AddressPrivate {
}

export class AddressPrivate {

    // Own properties of Camel-1.2.Camel.AddressPrivate

    static name: string
}

export interface AsyncClosure {
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @record 
 */
export class AsyncClosure {

    // Own properties of Camel-1.2.Camel.AsyncClosure

    static name: string
}

export interface Block {

    // Own fields of Camel-1.2.Camel.Block

    id: _block_t
    flags: BlockFlags
    refcount: number
    align00: number
    data: Uint8Array
}

export class Block {

    // Own properties of Camel-1.2.Camel.Block

    static name: string
}

export interface BlockFileClass {

    // Own fields of Camel-1.2.Camel.BlockFileClass

    parentClass: GObject.ObjectClass
    validateRoot: (bs: BlockFile) => number
    initRoot: (bs: BlockFile) => number
    reserved: any[]
}

export abstract class BlockFileClass {

    // Own properties of Camel-1.2.Camel.BlockFileClass

    static name: string
}

export interface BlockFilePrivate {
}

export class BlockFilePrivate {

    // Own properties of Camel-1.2.Camel.BlockFilePrivate

    static name: string
}

export interface BlockRoot {

    // Own fields of Camel-1.2.Camel.BlockRoot

    version: number[]
    flags: number
    blockSize: number
    free: _block_t
    last: _block_t
}

export class BlockRoot {

    // Own properties of Camel-1.2.Camel.BlockRoot

    static name: string
}

export interface Cert {

    // Own fields of Camel-1.2.Camel.Cert

    refcount: number
    issuer: string | null
    subject: string | null
    hostname: string | null
    fingerprint: string | null
    trust: CertTrust
    rawcert: any

    // Owm methods of Camel-1.2.Camel.Cert

    loadCertFile(): boolean
    ref(): Cert
    saveCertFile(derData: Uint8Array): boolean
    unref(): void
}

export class Cert {

    // Own properties of Camel-1.2.Camel.Cert

    static name: string

    // Constructors of Camel-1.2.Camel.Cert

    constructor() 
    static new(): Cert
}

export interface CertDBClass {

    // Own fields of Camel-1.2.Camel.CertDBClass

    parentClass: GObject.ObjectClass
    headerLoad: (certdb: CertDB, istream: any | null) => number
    headerSave: (certdb: CertDB, ostream: any | null) => number
    certLoad: (certdb: CertDB, istream: any | null) => Cert
    certSave: (certdb: CertDB, cert: Cert, ostream: any | null) => number
    reserved: any[]
}

export abstract class CertDBClass {

    // Own properties of Camel-1.2.Camel.CertDBClass

    static name: string
}

export interface CertDBPrivate {
}

export class CertDBPrivate {

    // Own properties of Camel-1.2.Camel.CertDBPrivate

    static name: string
}

export interface Charset {

    // Own fields of Camel-1.2.Camel.Charset

    mask: number
    level: number

    // Owm methods of Camel-1.2.Camel.Charset

    bestName(): string | null
    init(): void
    /**
     * Processes more input text with the `cc`.
     * @param in_ input text
     */
    step(in_: number[]): void
}

export class Charset {

    // Own properties of Camel-1.2.Camel.Charset

    static name: string

    // Constructors of Camel-1.2.Camel.Charset

    /**
     * Finds the minimum charset for this string NULL means US-ASCII.
     * @param in_ input text
     * @returns the minimum charset or NULL for US_ASCII.
     */
    static best(in_: number[]): string | null
    static isoToWindows(isocharset: string | null): string | null
}

export interface CipherCertInfo {

    // Own fields of Camel-1.2.Camel.CipherCertInfo

    name: string | null
    email: string | null
    certData: any
    certDataFree: GLib.DestroyNotify
    certDataClone: CipherCloneFunc
    properties: any[]
}

export class CipherCertInfo {

    // Own properties of Camel-1.2.Camel.CipherCertInfo

    static name: string
}

export interface CipherCertInfoProperty {

    // Own fields of Camel-1.2.Camel.CipherCertInfoProperty

    name: string | null
    value: any
    valueFree: GLib.DestroyNotify
    valueClone: CipherCloneFunc
}

export class CipherCertInfoProperty {

    // Own properties of Camel-1.2.Camel.CipherCertInfoProperty

    static name: string
}

export interface CipherContextClass {

    // Own fields of Camel-1.2.Camel.CipherContextClass

    parentClass: GObject.ObjectClass
    signProtocol: string | null
    encryptProtocol: string | null
    keyProtocol: string | null
    idToHash: (context: CipherContext, id: string | null) => CipherHash
    hashToId: (context: CipherContext, hash: CipherHash) => string | null
    signSync: (context: CipherContext, userid: string | null, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null) => boolean
    verifySync: (context: CipherContext, ipart: MimePart, cancellable: Gio.Cancellable | null) => CipherValidity
    encryptSync: (context: CipherContext, userid: string | null, recipients: string[], ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null) => boolean
    decryptSync: (context: CipherContext, ipart: MimePart, opart: MimePart, cancellable: Gio.Cancellable | null) => CipherValidity
    reserved: any[]
}

export abstract class CipherContextClass {

    // Own properties of Camel-1.2.Camel.CipherContextClass

    static name: string
}

export interface CipherContextPrivate {
}

export class CipherContextPrivate {

    // Own properties of Camel-1.2.Camel.CipherContextPrivate

    static name: string
}

export interface CipherValidity {

    // Own fields of Camel-1.2.Camel.CipherValidity

    children: GLib.Queue
    sign: any
    encrypt: any

    // Owm methods of Camel-1.2.Camel.CipherValidity

    /**
     * Add a cert info to the signer or encrypter info.
     * @param mode a #CamelCipherValidityMode, where to add the additional certificate information
     * @param name a name to add
     * @param email an e-mail address to add
     * @returns Index of the added certinfo; -1 on error
     */
    addCertinfo(mode: CipherValidityMode, name: string | null, email: string | null): number
    /**
     * Add a cert info to the signer or encrypter info, with extended data set.
     * @param mode a #CamelCipherValidityMode, where to add the additional certificate information
     * @param name a name to add
     * @param email an e-mail address to add
     * @param certData a certificate data, or %NULL
     * @param certDataClone a copy function for `cert_data,` to copy the data; required, when `cert_data` is not %NULL
     * @returns Index of the added certinfo; -1 on error
     */
    addCertinfoEx(mode: CipherValidityMode, name: string | null, email: string | null, certData: any | null, certDataClone: CipherCloneFunc | null): number
    clear(): void
    clone(): CipherValidity
    /**
     * Calculate a conglomerate validity based on wrapping one secure part inside
     * another one.
     * @param valid a new #CamelCipherValidity to conglomerate the `parent` with
     */
    envelope(valid: CipherValidity): void
    free(): void
    /**
     * Gets a named property `name` value for the given `info_index` of the `mode` validity part.
     * @param mode which cipher validity part to use
     * @param infoIndex a 0-based index of the requested #CamelCipherCertInfo
     * @param name a property name
     * @returns Value of a named property of a #CamelCipherCertInfo, or %NULL when no such    property exists. The returned value is owned by the associated #CamelCipherCertInfo    and is valid until the cert info is freed.
     */
    getCertinfoProperty(mode: CipherValidityMode, infoIndex: number, name: string | null): any | null
    getDescription(): string | null
    getValid(): boolean
    init(): void
    /**
     * Sets a named property `name` value `value` for the given `info_index`
     * of the `mode` validity part. If the `value` is %NULL, then the property
     * is removed. With a non-%NULL `value` also `value_free` and `value_clone`
     * functions cannot be %NULL.
     * @param mode which cipher validity part to use
     * @param infoIndex a 0-based index of the requested #CamelCipherCertInfo
     * @param name a property name
     * @param value a property value, or %NULL
     * @param valueClone a clone function for the `value`
     */
    setCertinfoProperty(mode: CipherValidityMode, infoIndex: number, name: string | null, value: any | null, valueClone: CipherCloneFunc | null): void
    setDescription(description: string | null): void
    setValid(valid: boolean): void
}

export class CipherValidity {

    // Own properties of Camel-1.2.Camel.CipherValidity

    static name: string

    // Constructors of Camel-1.2.Camel.CipherValidity

    constructor() 
    static new(): CipherValidity
}

export interface ContentDisposition {

    // Own fields of Camel-1.2.Camel.ContentDisposition

    disposition: string | null
    params: any
    refcount: number

    // Owm methods of Camel-1.2.Camel.ContentDisposition

    format(): string | null
    isAttachment(contentType: ContentType): boolean
    isAttachmentEx(contentType: ContentType, parentContentType: ContentType): boolean
    ref(): ContentDisposition
    unref(): void
}

export class ContentDisposition {

    // Own properties of Camel-1.2.Camel.ContentDisposition

    static name: string

    // Constructors of Camel-1.2.Camel.ContentDisposition

    constructor() 
    static new(): ContentDisposition
    static decode(in_: string | null): ContentDisposition
}

export interface ContentType {

    // Own fields of Camel-1.2.Camel.ContentType

    type: string | null
    subtype: string | null
    params: any
    refcount: number

    // Owm methods of Camel-1.2.Camel.ContentType

    dump(): void
    format(): string | null
    /**
     * The subtype of "*" will match any subtype.  If `ct` is %NULL, then
     * it will match the type "text/plain".
     * @param type A type to check against.
     * @param subtype A subtype to check against, or "*" to match any subtype.
     * @returns %TRUE if the content type @ct is of type @type/@subtype or %FALSE otherwise
     */
    is(type: string | null, subtype: string | null): boolean
    /**
     * Searches the params on s #CamelContentType for a param named `name`
     * and gets the value.
     * @param name name of param to find
     * @returns the value of the @name param
     */
    param(name: string | null): string | null
    /**
     * Refs the content type.
     */
    ref(): ContentType
    /**
     * Set a parameter on `content_type`.
     * @param name name of param to set
     * @param value value of param to set
     */
    setParam(name: string | null, value: string | null): void
    simple(): string | null
    /**
     * Unrefs, and potentially frees, the content type.
     */
    unref(): void
}

export class ContentType {

    // Own properties of Camel-1.2.Camel.ContentType

    static name: string

    // Constructors of Camel-1.2.Camel.ContentType

    /**
     * Create a new #CamelContentType.
     * @constructor 
     * @param type the major type of the new content-type
     * @param subtype the subtype
     * @returns the new #CamelContentType
     */
    constructor(type: string | null, subtype: string | null) 
    /**
     * Create a new #CamelContentType.
     * @constructor 
     * @param type the major type of the new content-type
     * @param subtype the subtype
     * @returns the new #CamelContentType
     */
    static new(type: string | null, subtype: string | null): ContentType
    static decode(in_: string | null): ContentType
}

export interface DBClass {
}

export abstract class DBClass {

    // Own properties of Camel-1.2.Camel.DBClass

    static name: string
}

export interface DBPrivate {
}

export class DBPrivate {

    // Own properties of Camel-1.2.Camel.DBPrivate

    static name: string
}

export interface DataCacheClass {

    // Own fields of Camel-1.2.Camel.DataCacheClass

    parentClass: GObject.ObjectClass
    reserved: any[]
}

export abstract class DataCacheClass {

    // Own properties of Camel-1.2.Camel.DataCacheClass

    static name: string
}

export interface DataCachePrivate {
}

export class DataCachePrivate {

    // Own properties of Camel-1.2.Camel.DataCachePrivate

    static name: string
}

export interface DataWrapperClass {

    // Own fields of Camel-1.2.Camel.DataWrapperClass

    parentClass: GObject.ObjectClass
    setMimeType: (dataWrapper: DataWrapper, mimeType: string | null) => void
    getMimeType: (dataWrapper: DataWrapper) => string | null
    getMimeTypeField: (dataWrapper: DataWrapper) => ContentType | null
    setMimeTypeField: (dataWrapper: DataWrapper, mimeType: ContentType | null) => void
    isOffline: (dataWrapper: DataWrapper) => boolean
    writeToStreamSync: (dataWrapper: DataWrapper, stream: Stream, cancellable: Gio.Cancellable | null) => number
    decodeToStreamSync: (dataWrapper: DataWrapper, stream: Stream, cancellable: Gio.Cancellable | null) => number
    constructFromStreamSync: (dataWrapper: DataWrapper, stream: Stream, cancellable: Gio.Cancellable | null) => boolean
    writeToOutputStreamSync: (dataWrapper: DataWrapper, outputStream: Gio.OutputStream, cancellable: Gio.Cancellable | null) => number
    decodeToOutputStreamSync: (dataWrapper: DataWrapper, outputStream: Gio.OutputStream, cancellable: Gio.Cancellable | null) => number
    constructFromInputStreamSync: (dataWrapper: DataWrapper, inputStream: Gio.InputStream, cancellable: Gio.Cancellable | null) => boolean
    reserved: any[]
}

export abstract class DataWrapperClass {

    // Own properties of Camel-1.2.Camel.DataWrapperClass

    static name: string
}

export interface DataWrapperPrivate {
}

export class DataWrapperPrivate {

    // Own properties of Camel-1.2.Camel.DataWrapperPrivate

    static name: string
}

export interface FIRecord {

    // Own fields of Camel-1.2.Camel.FIRecord

    /**
     * name of the folder
     * @field 
     */
    folderName: string | null
    /**
     * version of the saved information
     * @field 
     */
    version: number
    /**
     * folder flags
     * @field 
     */
    flags: number
    /**
     * next free uid
     * @field 
     */
    nextuid: number
    /**
     * timestamp of the summary
     * @field 
     */
    timestamp: number
    /**
     * count of all messages
     * @field 
     */
    savedCount: number
    /**
     * count of unread messages
     * @field 
     */
    unreadCount: number
    /**
     * count of deleted messages
     * @field 
     */
    deletedCount: number
    /**
     * count of junk messages
     * @field 
     */
    junkCount: number
    /**
     * count of visible (not deleted and not junk) messages
     * @field 
     */
    visibleCount: number
    /**
     * count of junk and not deleted messages
     * @field 
     */
    jndCount: number
    /**
     * custom data of the #CamelFolderSummary descendants
     * @field 
     */
    bdata: string | null
}

/**
 * Values to store/load for single folder's #CamelFolderSummary structure.
 * @record 
 */
export class FIRecord {

    // Own properties of Camel-1.2.Camel.FIRecord

    static name: string
}

export interface FilterDriverClass {

    // Own fields of Camel-1.2.Camel.FilterDriverClass

    parentClass: GObject.ObjectClass
    reserved: any[]
}

export abstract class FilterDriverClass {

    // Own properties of Camel-1.2.Camel.FilterDriverClass

    static name: string
}

export interface FilterDriverPrivate {
}

export class FilterDriverPrivate {

    // Own properties of Camel-1.2.Camel.FilterDriverPrivate

    static name: string
}

export interface FilterInputStreamClass {

    // Own fields of Camel-1.2.Camel.FilterInputStreamClass

    parentClass: Gio.FilterInputStreamClass
    reserved: any[]
}

export abstract class FilterInputStreamClass {

    // Own properties of Camel-1.2.Camel.FilterInputStreamClass

    static name: string
}

export interface FilterInputStreamPrivate {
}

export class FilterInputStreamPrivate {

    // Own properties of Camel-1.2.Camel.FilterInputStreamPrivate

    static name: string
}

export interface FilterOutputStreamClass {

    // Own fields of Camel-1.2.Camel.FilterOutputStreamClass

    parentClass: Gio.FilterOutputStreamClass
    reserved: any[]
}

export abstract class FilterOutputStreamClass {

    // Own properties of Camel-1.2.Camel.FilterOutputStreamClass

    static name: string
}

export interface FilterOutputStreamPrivate {
}

export class FilterOutputStreamPrivate {

    // Own properties of Camel-1.2.Camel.FilterOutputStreamPrivate

    static name: string
}

export interface FolderChangeInfo {

    // Own fields of Camel-1.2.Camel.FolderChangeInfo

    uidAdded: any[]
    uidRemoved: any[]
    uidChanged: any[]
    uidRecent: any[]

    // Owm methods of Camel-1.2.Camel.FolderChangeInfo

    /**
     * Add a source uid for generating a changeset.
     * @param uid a uid
     */
    addSource(uid: string | null): void
    /**
     * Add a list of source uid's for generating a changeset.
     * @param list a list of uids
     */
    addSourceList(list: string[]): void
    /**
     * Add a new uid to the changeinfo.
     * @param uid a uid
     */
    addUid(uid: string | null): void
    /**
     * Add a uid from the updated list, used to generate a changeset diff.
     * @param uid a uid
     */
    addUpdate(uid: string | null): void
    /**
     * Add a list of uid's from the updated list.
     * @param list a list of uids
     */
    addUpdateList(list: string[]): void
    /**
     * Compare the source uid set to the updated uid set and generate the
     * differences into the added and removed lists.
     */
    buildDiff(): void
    /**
     * Concatenate one change info onto antoher. Can be used to copy them
     * too.
     * @param src a #CamelFolderChangeInfo to append from
     */
    cat(src: FolderChangeInfo): void
    /**
     * Add a uid to the changed uid list.
     * @param uid a uid
     */
    changeUid(uid: string | null): void
    /**
     * Gets whether or not there have been any changes.
     * @returns %TRUE if the changeset contains any changes or %FALSE otherwise
     */
    changed(): boolean
    /**
     * Empty out the change info; called after changes have been
     * processed.
     */
    clear(): void
    /**
     * Creates a copy of the `src`.
     * @returns Copy of the @src.
     */
    copy(): FolderChangeInfo
    /**
     * Free memory associated with the folder change info lists.
     */
    free(): void
    /**
     * Returns an array of added messages UIDs. The returned array, the same as its content,
     * is owned by the `info`.
     * @returns An array of added UIDs.
     */
    getAddedUids(): string[]
    /**
     * Returns an array of changed messages UIDs. The returned array, the same as its content,
     * is owned by the `info`.
     * @returns An array of changed UIDs.
     */
    getChangedUids(): string[]
    /**
     * Returns an array of recent messages UIDs. The returned array, the same as its content,
     * is owned by the `info`.
     * @returns An array of recent UIDs.
     */
    getRecentUids(): string[]
    /**
     * Returns an array of removed messages UIDs. The returned array, the same as its content,
     * is owned by the `info`.
     * @returns An array of removed UIDs.
     */
    getRemovedUids(): string[]
    /**
     * Add a recent uid to the changedinfo.
     * This will also add the uid to the uid_filter array for potential
     * filtering
     * @param uid a uid
     */
    recentUid(uid: string | null): void
    /**
     * Add a uid to the removed uid list.
     * @param uid a uid
     */
    removeUid(uid: string | null): void
}

export class FolderChangeInfo {

    // Own properties of Camel-1.2.Camel.FolderChangeInfo

    static name: string

    // Constructors of Camel-1.2.Camel.FolderChangeInfo

    /**
     * Create a new folder change info structure.
     * 
     * Change info structures are not MT-SAFE and must be
     * locked for exclusive access externally.
     * @constructor 
     * @returns a new #CamelFolderChangeInfo
     */
    constructor() 
    /**
     * Create a new folder change info structure.
     * 
     * Change info structures are not MT-SAFE and must be
     * locked for exclusive access externally.
     * @constructor 
     * @returns a new #CamelFolderChangeInfo
     */
    static new(): FolderChangeInfo
}

export interface FolderChangeInfoPrivate {
}

export class FolderChangeInfoPrivate {

    // Own properties of Camel-1.2.Camel.FolderChangeInfoPrivate

    static name: string
}

export interface FolderClass {

    // Own fields of Camel-1.2.Camel.FolderClass

    parentClass: ObjectClass
    getMessageCount: (folder: Folder) => number
    getPermanentFlags: (folder: Folder) => number
    getMessageFlags: (folder: Folder, uid: string | null) => number
    setMessageFlags: (folder: Folder, uid: string | null, mask: number, set: number) => boolean
    getMessageUserFlag: (folder: Folder, uid: string | null, name: string | null) => boolean
    setMessageUserFlag: (folder: Folder, uid: string | null, name: string | null, value: boolean) => void
    getMessageUserTag: (folder: Folder, uid: string | null, name: string | null) => string | null
    setMessageUserTag: (folder: Folder, uid: string | null, name: string | null, value: string | null) => void
    getUids: (folder: Folder) => string[]
    freeUids: (folder: Folder, array: string[]) => void
    cmpUids: (folder: Folder, uid1: string | null, uid2: string | null) => number
    sortUids: (folder: Folder, uids: string[]) => void
    getSummary: (folder: Folder) => string[]
    freeSummary: (folder: Folder, array: MessageInfo[]) => void
    hasSearchCapability: (folder: Folder) => boolean
    searchByExpression: (folder: Folder, expression: string | null, cancellable: Gio.Cancellable | null) => string[]
    searchByUids: (folder: Folder, expression: string | null, uids: string[], cancellable: Gio.Cancellable | null) => string[]
    searchFree: (folder: Folder, result: string[]) => void
    getMessageInfo: (folder: Folder, uid: string | null) => MessageInfo | null
    delete_: (folder: Folder) => void
    rename: (folder: Folder, newName: string | null) => void
    freeze: (folder: Folder) => void
    thaw: (folder: Folder) => void
    isFrozen: (folder: Folder) => boolean
    countByExpression: (folder: Folder, expression: string | null, cancellable: Gio.Cancellable | null) => number
    getUncachedUids: (folder: Folder, uids: string[]) => string[]
    getFilename: (folder: Folder, uid: string | null) => string | null
    getMessageCached: (folder: Folder, messageUid: string | null, cancellable: Gio.Cancellable | null) => MimeMessage | null
    appendMessageSync: (folder: Folder, message: MimeMessage, info: MessageInfo | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* appendedUid */ string | null ]
    expungeSync: (folder: Folder, cancellable: Gio.Cancellable | null) => boolean
    getMessageSync: (folder: Folder, messageUid: string | null, cancellable: Gio.Cancellable | null) => MimeMessage
    getQuotaInfoSync: (folder: Folder, cancellable: Gio.Cancellable | null) => FolderQuotaInfo
    purgeMessageCacheSync: (folder: Folder, startUid: string | null, endUid: string | null, cancellable: Gio.Cancellable | null) => boolean
    refreshInfoSync: (folder: Folder, cancellable: Gio.Cancellable | null) => boolean
    synchronizeSync: (folder: Folder, expunge: boolean, cancellable: Gio.Cancellable | null) => boolean
    synchronizeMessageSync: (folder: Folder, messageUid: string | null, cancellable: Gio.Cancellable | null) => boolean
    transferMessagesToSync: (source: Folder, messageUids: string[], destination: Folder, deleteOriginals: boolean, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* transferredUids */ string[] | null ]
    prepareContentRefresh: (folder: Folder) => void
    getFullDisplayName: (folder: Folder) => string | null
    reservedMethods: any[]
    changed: (folder: Folder, changes: FolderChangeInfo) => void
    deleted: (folder: Folder) => void
    renamed: (folder: Folder, oldName: string | null) => void
    reservedSignals: any[]
}

export abstract class FolderClass {

    // Own properties of Camel-1.2.Camel.FolderClass

    static name: string
}

export interface FolderInfo {

    // Own fields of Camel-1.2.Camel.FolderInfo

    next: any
    parent: any
    child: any
    fullName: string | null
    displayName: string | null
    flags: FolderInfoFlags
    unread: number
    total: number

    // Owm methods of Camel-1.2.Camel.FolderInfo

    /**
     * Clones `fi` recursively.
     * @returns the cloned #CamelFolderInfo tree.
     */
    clone(): FolderInfo
    /**
     * Frees `fi`.
     */
    free(): void
}

export class FolderInfo {

    // Own properties of Camel-1.2.Camel.FolderInfo

    static name: string

    // Constructors of Camel-1.2.Camel.FolderInfo

    /**
     * Allocates a new #CamelFolderInfo instance.  Free it with
     * camel_folder_info_free().
     * @constructor 
     * @returns a new #CamelFolderInfo instance
     */
    constructor() 
    /**
     * Allocates a new #CamelFolderInfo instance.  Free it with
     * camel_folder_info_free().
     * @constructor 
     * @returns a new #CamelFolderInfo instance
     */
    static new(): FolderInfo
    /**
     * This takes an array of folders and attaches them together according
     * to the hierarchy described by their full_names and `separator`. If
     * `namespace_` is non-%NULL, then it will be ignored as a full_name
     * prefix, for purposes of comparison. If necessary,
     * camel_folder_info_build() will create additional #CamelFolderInfo with
     * %NULL urls to fill in gaps in the tree. The value of `short_names`
     * is used in constructing the names of these intermediate folders.
     * @param folders an array of #CamelFolderInfo
     * @param namespace an ignorable prefix on the folder names
     * @param separator the hieararchy separator character
     * @param shortNames %TRUE if the (short) name of a folder is the part after the last `separator` in the full name. %FALSE if it is the full name.
     * @returns the top level of the tree of linked folder info.
     */
    static build(folders: FolderInfo[], namespace: string | null, separator: number, shortNames: boolean): FolderInfo
}

export interface FolderPrivate {
}

export class FolderPrivate {

    // Own properties of Camel-1.2.Camel.FolderPrivate

    static name: string
}

export interface FolderQuotaInfo {

    // Own fields of Camel-1.2.Camel.FolderQuotaInfo

    /**
     * name, aka identification, of the quota type
     * @field 
     */
    name: string | null
    /**
     * how many bytes is currently in use
     * @field 
     */
    used: number
    /**
     * what is the maximum quota to use
     * @field 
     */
    total: number
    /**
     * a reference to a follwing #CamelFolderQuotaInfo
     * @field 
     */
    next: any

    // Owm methods of Camel-1.2.Camel.FolderQuotaInfo

    /**
     * Makes a copy of the given info and all next-s.
     */
    clone(): FolderQuotaInfo
    /**
     * Frees this and all next objects.
     */
    free(): void
}

export class FolderQuotaInfo {

    // Own properties of Camel-1.2.Camel.FolderQuotaInfo

    static name: string

    // Constructors of Camel-1.2.Camel.FolderQuotaInfo

    constructor(name: string | null, used: number, total: number) 
    static new(name: string | null, used: number, total: number): FolderQuotaInfo
}

export interface FolderSearchClass {

    // Own fields of Camel-1.2.Camel.FolderSearchClass

    parentClass: GObject.ObjectClass
    reserved: any[]
}

export abstract class FolderSearchClass {

    // Own properties of Camel-1.2.Camel.FolderSearchClass

    static name: string
}

export interface FolderSearchPrivate {
}

export class FolderSearchPrivate {

    // Own properties of Camel-1.2.Camel.FolderSearchPrivate

    static name: string
}

export interface FolderSummaryClass {

    // Own fields of Camel-1.2.Camel.FolderSummaryClass

    parentClass: GObject.ObjectClass
    messageInfoType: GObject.GType
    collate: string | null
    sortBy: string | null
    summaryHeaderLoad: (summary: FolderSummary, fir: any | null) => boolean
    summaryHeaderSave: (summary: FolderSummary) => any | null
    messageInfoNewFromHeaders: (summary: FolderSummary, headers: NameValueArray) => MessageInfo
    messageInfoNewFromParser: (summary: FolderSummary, parser: MimeParser) => MessageInfo
    messageInfoNewFromMessage: (summary: FolderSummary, message: MimeMessage) => MessageInfo
    messageInfoFromUid: (summary: FolderSummary, uid: string | null) => MessageInfo | null
    nextUidString: (summary: FolderSummary) => string | null
    prepareFetchAll: (summary: FolderSummary) => void
    reserved: any[]
}

export abstract class FolderSummaryClass {

    // Own properties of Camel-1.2.Camel.FolderSummaryClass

    static name: string
}

export interface FolderSummaryPrivate {
}

export class FolderSummaryPrivate {

    // Own properties of Camel-1.2.Camel.FolderSummaryPrivate

    static name: string
}

export interface FolderThread {

    // Own fields of Camel-1.2.Camel.FolderThread

    refcount: number
    subject: number
    tree: any
    nodeChunks: MemChunk
    folder: Folder
    summary: any[]

    // Owm methods of Camel-1.2.Camel.FolderThread

    /**
     * Adds new `uids` into the threaded tree.
     * @param uids a #GPtrArray array of UID-s
     */
    apply(uids: string[]): void
    /**
     * Increase the reference of `thread`
     * @returns the referenced @thread
     */
    ref(): FolderThread
    /**
     * Free all memory associated with the thread descriptor `thread`.
     */
    unref(): void
}

export class FolderThread {

    // Own properties of Camel-1.2.Camel.FolderThread

    static name: string

    // Constructors of Camel-1.2.Camel.FolderThread

    /**
     * Thread a (subset) of the messages in a folder.  And sort the result
     * in summary order.
     * 
     * If `thread_subject` is %TRUE, messages with
     * related subjects will also be threaded. The default behaviour is to
     * only thread based on message-id.
     * 
     * This function is probably to be removed soon.
     * @constructor 
     * @param folder a #CamelFolder
     * @param uids The subset of uid's to thread. If %NULL, then thread    all UID-s in the `folder`
     * @param threadSubject thread based on subject also
     * @returns A CamelFolderThread contianing a tree of CamelFolderThreadNode's which represent the threaded structure of the messages.
     */
    constructor(folder: Folder, uids: string[], threadSubject: boolean) 
    /**
     * Thread a (subset) of the messages in a folder.  And sort the result
     * in summary order.
     * 
     * If `thread_subject` is %TRUE, messages with
     * related subjects will also be threaded. The default behaviour is to
     * only thread based on message-id.
     * 
     * This function is probably to be removed soon.
     * @constructor 
     * @param folder a #CamelFolder
     * @param uids The subset of uid's to thread. If %NULL, then thread    all UID-s in the `folder`
     * @param threadSubject thread based on subject also
     * @returns A CamelFolderThread contianing a tree of CamelFolderThreadNode's which represent the threaded structure of the messages.
     */
    static new(folder: Folder, uids: string[], threadSubject: boolean): FolderThread
}

export interface FolderThreadNode {

    // Own fields of Camel-1.2.Camel.FolderThreadNode

    next: any
    parent: any
    child: any
    message: MessageInfo
    rootSubject: string | null
    order: number
    re: number
}

export class FolderThreadNode {

    // Own properties of Camel-1.2.Camel.FolderThreadNode

    static name: string
}

export interface GpgContextClass {

    // Own fields of Camel-1.2.Camel.GpgContextClass

    parentClass: CipherContextClass
    reserved: any[]
}

export abstract class GpgContextClass {

    // Own properties of Camel-1.2.Camel.GpgContextClass

    static name: string
}

export interface GpgContextPrivate {
}

export class GpgContextPrivate {

    // Own properties of Camel-1.2.Camel.GpgContextPrivate

    static name: string
}

export interface HTMLParserClass {

    // Own fields of Camel-1.2.Camel.HTMLParserClass

    parentClass: GObject.ObjectClass
    reserved: any[]
}

export abstract class HTMLParserClass {

    // Own properties of Camel-1.2.Camel.HTMLParserClass

    static name: string
}

export interface HTMLParserPrivate {
}

export class HTMLParserPrivate {

    // Own properties of Camel-1.2.Camel.HTMLParserPrivate

    static name: string
}

export interface HeaderAddress {

    // Own fields of Camel-1.2.Camel.HeaderAddress

    next: any
    type: HeaderAddressType
    name: string | null
    refcount: number

    // Owm methods of Camel-1.2.Camel.HeaderAddress

    addMember(member: HeaderAddress): void
    ref(): HeaderAddress
    setAddr(addr: string | null): void
    /**
     * TODO: Document me.
     * @param group a NULL-terminated list of #CamelHeaderAddress
     */
    setMembers(group: HeaderAddress[]): void
    setName(name: string | null): void
    unref(): void
}

export class HeaderAddress {

    // Own properties of Camel-1.2.Camel.HeaderAddress

    static name: string

    // Constructors of Camel-1.2.Camel.HeaderAddress

    constructor() 
    static new(): HeaderAddress
    static newGroup(name: string | null): HeaderAddress
    static newName(name: string | null, addr: string | null): HeaderAddress
    static decode(in_: string | null, charset: string | null): HeaderAddress
    static fold(in_: string | null, headerlen: number): string | null
    /**
     * TODO: Document me.
     * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
     * @param addr the #CamelHeaderAddress to add
     */
    static listAppend(addrlistp: HeaderAddress[], addr: HeaderAddress): void
    /**
     * TODO: Document me.
     * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
     * @param addrs a NULL-terminated list of #CamelHeaderAddress to add
     */
    static listAppendList(addrlistp: HeaderAddress[], addrs: HeaderAddress[]): void
    /**
     * TODO: Document me.
     * @param addrlistp a NULL-terminated list of #CamelHeaderAddress objects
     */
    static listClear(addrlistp: HeaderAddress[]): void
    /**
     * TODO: Document me.
     * @param addrlist a NULL-terminated list of #CamelHeaderAddress objects
     */
    static listEncode(addrlist: HeaderAddress[]): string | null
    /**
     * TODO: Document me.
     * @param addrlist a NULL-terminated list of #CamelHeaderAddress objects
     */
    static listFormat(addrlist: HeaderAddress[]): string | null
}

export interface HeaderParam {

    // Own fields of Camel-1.2.Camel.HeaderParam

    next: any
    name: string | null
    value: string | null
}

export class HeaderParam {

    // Own properties of Camel-1.2.Camel.HeaderParam

    static name: string

    // Constructors of Camel-1.2.Camel.HeaderParam

    static listDecode(in_: string | null): any | null
    static listFormat(params: any | null): string | null
    static listFormatAppend(out: GLib.String, params: any | null): void
    /**
     * Free the list of params.
     * @param params a list of params
     */
    static listFree(params: any | null): void
}

export interface IndexClass {

    // Own fields of Camel-1.2.Camel.IndexClass

    parentClass: GObject.ObjectClass
    sync: (index: Index) => number
    compress: (index: Index) => number
    delete_: (index: Index) => number
    rename: (index: Index, path: string | null) => number
    hasName: (index: Index, name: string | null) => number
    addName: (index: Index, name: string | null) => IndexName | null
    writeName: (index: Index, idn: IndexName) => number
    findName: (index: Index, name: string | null) => IndexCursor | null
    deleteName: (index: Index, name: string | null) => void
    find: (index: Index, word: string | null) => IndexCursor | null
    words: (index: Index) => IndexCursor | null
}

export abstract class IndexClass {

    // Own properties of Camel-1.2.Camel.IndexClass

    static name: string
}

export interface IndexCursorClass {

    // Own fields of Camel-1.2.Camel.IndexCursorClass

    parent: GObject.ObjectClass
    next: (idc: IndexCursor) => string | null
    reserved: any[]
}

export abstract class IndexCursorClass {

    // Own properties of Camel-1.2.Camel.IndexCursorClass

    static name: string
}

export interface IndexCursorPrivate {
}

export class IndexCursorPrivate {

    // Own properties of Camel-1.2.Camel.IndexCursorPrivate

    static name: string
}

export interface IndexNameClass {

    // Own fields of Camel-1.2.Camel.IndexNameClass

    parent: GObject.ObjectClass
    addWord: (name: IndexName, word: string | null) => void
    addBuffer: (name: IndexName, buffer: string | null, len: number) => number
}

export abstract class IndexNameClass {

    // Own properties of Camel-1.2.Camel.IndexNameClass

    static name: string
}

export interface IndexNamePrivate {
}

export class IndexNamePrivate {

    // Own properties of Camel-1.2.Camel.IndexNamePrivate

    static name: string
}

export interface IndexPrivate {
}

export class IndexPrivate {

    // Own properties of Camel-1.2.Camel.IndexPrivate

    static name: string
}

export interface InternetAddressClass {

    // Own fields of Camel-1.2.Camel.InternetAddressClass

    parentClass: AddressClass
    reserved: any[]
}

export abstract class InternetAddressClass {

    // Own properties of Camel-1.2.Camel.InternetAddressClass

    static name: string
}

export interface InternetAddressPrivate {
}

export class InternetAddressPrivate {

    // Own properties of Camel-1.2.Camel.InternetAddressPrivate

    static name: string
}

export interface JunkFilterInterface {

    // Own fields of Camel-1.2.Camel.JunkFilterInterface

    parentInterface: GObject.TypeInterface
    classify: (junkFilter: JunkFilter, message: MimeMessage, cancellable: Gio.Cancellable | null) => JunkStatus
    learnJunk: (junkFilter: JunkFilter, message: MimeMessage, cancellable: Gio.Cancellable | null) => boolean
    learnNotJunk: (junkFilter: JunkFilter, message: MimeMessage, cancellable: Gio.Cancellable | null) => boolean
    synchronize: (junkFilter: JunkFilter, cancellable: Gio.Cancellable | null) => boolean
    reserved: any[]
}

export abstract class JunkFilterInterface {

    // Own properties of Camel-1.2.Camel.JunkFilterInterface

    static name: string
}

export interface KeyBlock {

    // Own fields of Camel-1.2.Camel.KeyBlock

    next: _block_t
    used: number
}

export class KeyBlock {

    // Own properties of Camel-1.2.Camel.KeyBlock

    static name: string
}

export interface KeyFileClass {

    // Own fields of Camel-1.2.Camel.KeyFileClass

    parentClass: GObject.ObjectClass
    reserved: any[]
}

export abstract class KeyFileClass {

    // Own properties of Camel-1.2.Camel.KeyFileClass

    static name: string
}

export interface KeyFilePrivate {
}

export class KeyFilePrivate {

    // Own properties of Camel-1.2.Camel.KeyFilePrivate

    static name: string
}

export interface KeyRootBlock {

    // Own fields of Camel-1.2.Camel.KeyRootBlock

    first: _block_t
    last: _block_t
    free: _key_t
}

export class KeyRootBlock {

    // Own properties of Camel-1.2.Camel.KeyRootBlock

    static name: string
}

export interface KeyTableClass {

    // Own fields of Camel-1.2.Camel.KeyTableClass

    parent: GObject.ObjectClass
    reserved: any[]
}

export abstract class KeyTableClass {

    // Own properties of Camel-1.2.Camel.KeyTableClass

    static name: string
}

export interface KeyTablePrivate {
}

export class KeyTablePrivate {

    // Own properties of Camel-1.2.Camel.KeyTablePrivate

    static name: string
}

export interface LocalSettingsClass {
}

export abstract class LocalSettingsClass {

    // Own properties of Camel-1.2.Camel.LocalSettingsClass

    static name: string
}

export interface LocalSettingsPrivate {
}

export class LocalSettingsPrivate {

    // Own properties of Camel-1.2.Camel.LocalSettingsPrivate

    static name: string
}

export interface MIRecord {

    // Own fields of Camel-1.2.Camel.MIRecord

    /**
     * Message UID
     * @field 
     */
    uid: string | null
    /**
     * Camel Message info flags
     * @field 
     */
    flags: number
    /**
     * unused
     * @field 
     */
    msgType: number
    /**
     * whether the message info requires upload to the server; it corresponds to #CAMEL_MESSAGE_FOLDER_FLAGGED
     * @field 
     */
    dirty: number
    /**
     * boolean read status
     * @field 
     */
    read: boolean
    /**
     * boolean deleted status
     * @field 
     */
    deleted: boolean
    /**
     * boolean replied status
     * @field 
     */
    replied: boolean
    /**
     * boolean important status
     * @field 
     */
    important: boolean
    /**
     * boolean junk status
     * @field 
     */
    junk: boolean
    /**
     * boolean attachment status
     * @field 
     */
    attachment: boolean
    /**
     * size of the mail
     * @field 
     */
    size: number
    /**
     * date sent
     * @field 
     */
    dsent: number
    /**
     * date received
     * @field 
     */
    dreceived: number
    /**
     * subject of the mail
     * @field 
     */
    subject: string | null
    /**
     * sender
     * @field 
     */
    from: string | null
    /**
     * recipient
     * @field 
     */
    to: string | null
    /**
     * CC members
     * @field 
     */
    cc: string | null
    /**
     * message list headers
     * @field 
     */
    mlist: string | null
    /**
     * followup flag / also can be queried to see for followup or not
     * @field 
     */
    followupFlag: string | null
    /**
     * completed date, can be used to see if completed
     * @field 
     */
    followupCompletedOn: string | null
    /**
     * to see the due by date
     * @field 
     */
    followupDueBy: string | null
    /**
     * part / references / thread id
     * @field 
     */
    part: string | null
    /**
     * labels of mails also called as userflags
     * @field 
     */
    labels: string | null
    /**
     * composite string of user tags
     * @field 
     */
    usertags: string | null
    /**
     * content info string - composite string
     * @field 
     */
    cinfo: string | null
    /**
     * provider specific data
     * @field 
     */
    bdata: string | null
    /**
     * value for user-defined message headers; Since: 3.42
     * @field 
     */
    userheaders: string | null
    /**
     * message body preview; Since: 3.42
     * @field 
     */
    preview: string | null
}

/**
 * The extensive DB format, supporting basic searching and sorting.
 * @record 
 */
export class MIRecord {

    // Own properties of Camel-1.2.Camel.MIRecord

    static name: string
}

export interface MediumClass {

    // Own fields of Camel-1.2.Camel.MediumClass

    parentClass: DataWrapperClass
    addHeader: (medium: Medium, name: string | null, value: string | null) => void
    setHeader: (medium: Medium, name: string | null, value: string | null) => void
    removeHeader: (medium: Medium, name: string | null) => void
    getHeader: (medium: Medium, name: string | null) => string | null
    dupHeaders: (medium: Medium) => NameValueArray
    getHeaders: (medium: Medium) => NameValueArray
    getContent: (medium: Medium) => DataWrapper | null
    setContent: (medium: Medium, content: DataWrapper | null) => void
    reserved: any[]
}

export abstract class MediumClass {

    // Own properties of Camel-1.2.Camel.MediumClass

    static name: string
}

export interface MediumPrivate {
}

export class MediumPrivate {

    // Own properties of Camel-1.2.Camel.MediumPrivate

    static name: string
}

export interface MemChunk {
}

export class MemChunk {

    // Own properties of Camel-1.2.Camel.MemChunk

    static name: string
}

export interface MemPool {
}

export class MemPool {

    // Own properties of Camel-1.2.Camel.MemPool

    static name: string
}

export interface MessageContentInfo {

    // Own fields of Camel-1.2.Camel.MessageContentInfo

    next: MessageContentInfo
    childs: MessageContentInfo
    parent: MessageContentInfo
    type: ContentType
    disposition: ContentDisposition
    id: string | null
    description: string | null
    encoding: string | null
    size: number

    // Owm methods of Camel-1.2.Camel.MessageContentInfo

    copy(): MessageContentInfo | null
    dump(depth: number): void
    /**
     * Recursively frees the content info `ci,` and all associated memory.
     */
    free(): void
    /**
     * Calls the `func` for each #CamelMessageContentInfo, including the top one.
     * The `func` can return %TRUE to continue processing or %FALSE to stop it.
     * @param func a #CamelMessageContentInfoTraverseCallback
     * @returns %FALSE on error or when the @func returned %FALSE, otherwise %TRUE
     */
    traverse(func: MessageContentInfoTraverseCallback): boolean
}

export class MessageContentInfo {

    // Own properties of Camel-1.2.Camel.MessageContentInfo

    static name: string

    // Constructors of Camel-1.2.Camel.MessageContentInfo

    /**
     * Allocate a new #CamelMessageContentInfo.
     * @constructor 
     * @returns a newly allocated #CamelMessageContentInfo
     */
    constructor() 
    /**
     * Allocate a new #CamelMessageContentInfo.
     * @constructor 
     * @returns a newly allocated #CamelMessageContentInfo
     */
    static new(): MessageContentInfo
    static newFromHeaders(headers: NameValueArray): MessageContentInfo
    static newFromMessage(mimePart: MimePart): MessageContentInfo
    static newFromParser(parser: MimeParser): MessageContentInfo
}

export interface MessageInfoBaseClass {

    // Own fields of Camel-1.2.Camel.MessageInfoBaseClass

    parentClass: MessageInfoClass
    reserved: any[]
}

export abstract class MessageInfoBaseClass {

    // Own properties of Camel-1.2.Camel.MessageInfoBaseClass

    static name: string
}

export interface MessageInfoBasePrivate {
}

export class MessageInfoBasePrivate {

    // Own properties of Camel-1.2.Camel.MessageInfoBasePrivate

    static name: string
}

export interface MessageInfoClass {

    // Own fields of Camel-1.2.Camel.MessageInfoClass

    parentClass: GObject.ObjectClass
    clone: (mi: MessageInfo, assignSummary: FolderSummary | null) => MessageInfo
    load: (mi: MessageInfo, record: MIRecord | null, bdataPtr: string | null) => boolean
    save: (mi: MessageInfo, record: MIRecord | null, bdataStr: GLib.String) => boolean
    getFlags: (mi: MessageInfo) => number
    setFlags: (mi: MessageInfo, mask: number, set: number) => boolean
    getUserFlag: (mi: MessageInfo, name: string | null) => boolean
    setUserFlag: (mi: MessageInfo, name: string | null, state: boolean) => boolean
    getUserFlags: (mi: MessageInfo) => NamedFlags | null
    dupUserFlags: (mi: MessageInfo) => NamedFlags | null
    takeUserFlags: (mi: MessageInfo, userFlags: NamedFlags | null) => boolean
    getUserTag: (mi: MessageInfo, name: string | null) => string | null
    setUserTag: (mi: MessageInfo, name: string | null, value: string | null) => boolean
    getUserTags: (mi: MessageInfo) => NameValueArray | null
    dupUserTags: (mi: MessageInfo) => NameValueArray | null
    takeUserTags: (mi: MessageInfo, userTags: NameValueArray | null) => boolean
    getSubject: (mi: MessageInfo) => string | null
    setSubject: (mi: MessageInfo, subject: string | null) => boolean
    getFrom: (mi: MessageInfo) => string | null
    setFrom: (mi: MessageInfo, from: string | null) => boolean
    getTo: (mi: MessageInfo) => string | null
    setTo: (mi: MessageInfo, to: string | null) => boolean
    getCc: (mi: MessageInfo) => string | null
    setCc: (mi: MessageInfo, cc: string | null) => boolean
    getMlist: (mi: MessageInfo) => string | null
    setMlist: (mi: MessageInfo, mlist: string | null) => boolean
    getSize: (mi: MessageInfo) => number
    setSize: (mi: MessageInfo, size: number) => boolean
    getDateSent: (mi: MessageInfo) => number
    setDateSent: (mi: MessageInfo, dateSent: number) => boolean
    getDateReceived: (mi: MessageInfo) => number
    setDateReceived: (mi: MessageInfo, dateReceived: number) => boolean
    getMessageId: (mi: MessageInfo) => number
    setMessageId: (mi: MessageInfo, messageId: number) => boolean
    getReferences: (mi: MessageInfo) => number[] | null
    takeReferences: (mi: MessageInfo, references: number[] | null) => boolean
    getHeaders: (mi: MessageInfo) => NameValueArray | null
    takeHeaders: (mi: MessageInfo, headers: NameValueArray | null) => boolean
    getUserHeader: (mi: MessageInfo, name: string | null) => string | null
    setUserHeader: (mi: MessageInfo, name: string | null, value: string | null) => boolean
    getUserHeaders: (mi: MessageInfo) => NameValueArray | null
    takeUserHeaders: (mi: MessageInfo, headers: NameValueArray | null) => boolean
    getPreview: (mi: MessageInfo) => string | null
    setPreview: (mi: MessageInfo, preview: string | null) => boolean
    reserved: any[]
}

export abstract class MessageInfoClass {

    // Own properties of Camel-1.2.Camel.MessageInfoClass

    static name: string
}

export interface MessageInfoPrivate {
}

export class MessageInfoPrivate {

    // Own properties of Camel-1.2.Camel.MessageInfoPrivate

    static name: string
}

export interface MimeFilterBasicClass {

    // Own fields of Camel-1.2.Camel.MimeFilterBasicClass

    parentClass: MimeFilterClass
    reserved: any[]
}

export abstract class MimeFilterBasicClass {

    // Own properties of Camel-1.2.Camel.MimeFilterBasicClass

    static name: string
}

export interface MimeFilterBasicPrivate {
}

export class MimeFilterBasicPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterBasicPrivate

    static name: string
}

export interface MimeFilterBestencClass {

    // Own fields of Camel-1.2.Camel.MimeFilterBestencClass

    parentClass: MimeFilterClass
    reserved: any[]
}

export abstract class MimeFilterBestencClass {

    // Own properties of Camel-1.2.Camel.MimeFilterBestencClass

    static name: string
}

export interface MimeFilterBestencPrivate {
}

export class MimeFilterBestencPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterBestencPrivate

    static name: string
}

export interface MimeFilterCRLFClass {

    // Own fields of Camel-1.2.Camel.MimeFilterCRLFClass

    parentClass: MimeFilterClass
    reserved: any[]
}

export abstract class MimeFilterCRLFClass {

    // Own properties of Camel-1.2.Camel.MimeFilterCRLFClass

    static name: string
}

export interface MimeFilterCRLFPrivate {
}

export class MimeFilterCRLFPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterCRLFPrivate

    static name: string
}

export interface MimeFilterCanonClass {

    // Own fields of Camel-1.2.Camel.MimeFilterCanonClass

    parentClass: MimeFilterClass
    reserved: any[]
}

export abstract class MimeFilterCanonClass {

    // Own properties of Camel-1.2.Camel.MimeFilterCanonClass

    static name: string
}

export interface MimeFilterCanonPrivate {
}

export class MimeFilterCanonPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterCanonPrivate

    static name: string
}

export interface MimeFilterCharsetClass {

    // Own fields of Camel-1.2.Camel.MimeFilterCharsetClass

    parentClass: MimeFilterClass
    reserved: any[]
}

export abstract class MimeFilterCharsetClass {

    // Own properties of Camel-1.2.Camel.MimeFilterCharsetClass

    static name: string
}

export interface MimeFilterCharsetPrivate {
}

export class MimeFilterCharsetPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterCharsetPrivate

    static name: string
}

export interface MimeFilterClass {

    // Own fields of Camel-1.2.Camel.MimeFilterClass

    parentClass: GObject.ObjectClass
    filter: (filter: MimeFilter, in_: Uint8Array, prespace: number) => [ /* out */ Uint8Array, /* outprespace */ number ]
    complete: (filter: MimeFilter, in_: Uint8Array, prespace: number) => [ /* out */ Uint8Array, /* outprespace */ number ]
    reset: (filter: MimeFilter) => void
    reserved: any[]
}

export abstract class MimeFilterClass {

    // Own properties of Camel-1.2.Camel.MimeFilterClass

    static name: string
}

export interface MimeFilterEnrichedClass {

    // Own fields of Camel-1.2.Camel.MimeFilterEnrichedClass

    parentClass: MimeFilterClass
    reserved: any[]
}

export abstract class MimeFilterEnrichedClass {

    // Own properties of Camel-1.2.Camel.MimeFilterEnrichedClass

    static name: string
}

export interface MimeFilterEnrichedPrivate {
}

export class MimeFilterEnrichedPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterEnrichedPrivate

    static name: string
}

export interface MimeFilterFromClass {

    // Own fields of Camel-1.2.Camel.MimeFilterFromClass

    parentClass: MimeFilterClass
    reserved: any[]
}

export abstract class MimeFilterFromClass {

    // Own properties of Camel-1.2.Camel.MimeFilterFromClass

    static name: string
}

export interface MimeFilterFromPrivate {
}

export class MimeFilterFromPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterFromPrivate

    static name: string
}

export interface MimeFilterGZipClass {

    // Own fields of Camel-1.2.Camel.MimeFilterGZipClass

    parentClass: MimeFilterClass
    reserved: any[]
}

export abstract class MimeFilterGZipClass {

    // Own properties of Camel-1.2.Camel.MimeFilterGZipClass

    static name: string
}

export interface MimeFilterGZipPrivate {
}

export class MimeFilterGZipPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterGZipPrivate

    static name: string
}

export interface MimeFilterHTMLClass {

    // Own fields of Camel-1.2.Camel.MimeFilterHTMLClass

    parentClass: MimeFilterClass
    reserved: any[]
}

export abstract class MimeFilterHTMLClass {

    // Own properties of Camel-1.2.Camel.MimeFilterHTMLClass

    static name: string
}

export interface MimeFilterHTMLPrivate {
}

export class MimeFilterHTMLPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterHTMLPrivate

    static name: string
}

export interface MimeFilterIndexClass {

    // Own fields of Camel-1.2.Camel.MimeFilterIndexClass

    parentClass: MimeFilterClass
    reserved: any[]
}

export abstract class MimeFilterIndexClass {

    // Own properties of Camel-1.2.Camel.MimeFilterIndexClass

    static name: string
}

export interface MimeFilterIndexPrivate {
}

export class MimeFilterIndexPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterIndexPrivate

    static name: string
}

export interface MimeFilterLinewrapClass {

    // Own fields of Camel-1.2.Camel.MimeFilterLinewrapClass

    parentClass: MimeFilterClass
    reserved: any[]
}

export abstract class MimeFilterLinewrapClass {

    // Own properties of Camel-1.2.Camel.MimeFilterLinewrapClass

    static name: string
}

export interface MimeFilterLinewrapPrivate {
}

export class MimeFilterLinewrapPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterLinewrapPrivate

    static name: string
}

export interface MimeFilterPgpClass {

    // Own fields of Camel-1.2.Camel.MimeFilterPgpClass

    parentClass: MimeFilterClass
    reserved: any[]
}

export abstract class MimeFilterPgpClass {

    // Own properties of Camel-1.2.Camel.MimeFilterPgpClass

    static name: string
}

export interface MimeFilterPgpPrivate {
}

export class MimeFilterPgpPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterPgpPrivate

    static name: string
}

export interface MimeFilterPrivate {
}

export class MimeFilterPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterPrivate

    static name: string
}

export interface MimeFilterProgressClass {

    // Own fields of Camel-1.2.Camel.MimeFilterProgressClass

    parentClass: MimeFilterClass
    reserved: any[]
}

export abstract class MimeFilterProgressClass {

    // Own properties of Camel-1.2.Camel.MimeFilterProgressClass

    static name: string
}

export interface MimeFilterProgressPrivate {
}

export class MimeFilterProgressPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterProgressPrivate

    static name: string
}

export interface MimeFilterToHTMLClass {

    // Own fields of Camel-1.2.Camel.MimeFilterToHTMLClass

    parentClass: MimeFilterClass
    reserved: any[]
}

export abstract class MimeFilterToHTMLClass {

    // Own properties of Camel-1.2.Camel.MimeFilterToHTMLClass

    static name: string
}

export interface MimeFilterToHTMLPrivate {
}

export class MimeFilterToHTMLPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterToHTMLPrivate

    static name: string
}

export interface MimeFilterWindowsClass {

    // Own fields of Camel-1.2.Camel.MimeFilterWindowsClass

    parentClass: MimeFilterClass
    reserved: any[]
}

export abstract class MimeFilterWindowsClass {

    // Own properties of Camel-1.2.Camel.MimeFilterWindowsClass

    static name: string
}

export interface MimeFilterWindowsPrivate {
}

export class MimeFilterWindowsPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterWindowsPrivate

    static name: string
}

export interface MimeFilterYencClass {

    // Own fields of Camel-1.2.Camel.MimeFilterYencClass

    parentClass: MimeFilterClass
    reserved: any[]
}

export abstract class MimeFilterYencClass {

    // Own properties of Camel-1.2.Camel.MimeFilterYencClass

    static name: string
}

export interface MimeFilterYencPrivate {
}

export class MimeFilterYencPrivate {

    // Own properties of Camel-1.2.Camel.MimeFilterYencPrivate

    static name: string
}

export interface MimeMessageClass {

    // Own fields of Camel-1.2.Camel.MimeMessageClass

    parentClass: MimePartClass
    reserved: any[]
}

export abstract class MimeMessageClass {

    // Own properties of Camel-1.2.Camel.MimeMessageClass

    static name: string
}

export interface MimeMessagePrivate {
}

export class MimeMessagePrivate {

    // Own properties of Camel-1.2.Camel.MimeMessagePrivate

    static name: string
}

export interface MimeParserClass {

    // Own fields of Camel-1.2.Camel.MimeParserClass

    parentClass: GObject.ObjectClass
    message: (parser: MimeParser, headers: any | null) => void
    part: (parser: MimeParser) => void
    content: (parser: MimeParser) => void
    reserved: any[]
}

export abstract class MimeParserClass {

    // Own properties of Camel-1.2.Camel.MimeParserClass

    static name: string
}

export interface MimeParserPrivate {
}

export class MimeParserPrivate {

    // Own properties of Camel-1.2.Camel.MimeParserPrivate

    static name: string
}

export interface MimePartClass {

    // Own fields of Camel-1.2.Camel.MimePartClass

    parentClass: MediumClass
    constructFromParserSync: (mimePart: MimePart, parser: MimeParser, cancellable: Gio.Cancellable | null) => boolean
    reserved: any[]
}

export abstract class MimePartClass {

    // Own properties of Camel-1.2.Camel.MimePartClass

    static name: string
}

export interface MimePartPrivate {
}

export class MimePartPrivate {

    // Own properties of Camel-1.2.Camel.MimePartPrivate

    static name: string
}

export interface Msg {

    // Own fields of Camel-1.2.Camel.Msg

    /**
     * a #CamelMsgPort this #CamelMsg belongs to
     * @field 
     */
    replyPort: MsgPort
}

export class Msg {

    // Own properties of Camel-1.2.Camel.Msg

    static name: string
}

export interface MsgPort {
}

export class MsgPort {

    // Own properties of Camel-1.2.Camel.MsgPort

    static name: string
}

export interface MultipartClass {

    // Own fields of Camel-1.2.Camel.MultipartClass

    parentClass: DataWrapperClass
    addPart: (multipart: Multipart, part: MimePart) => void
    getPart: (multipart: Multipart, index: number) => MimePart | null
    getNumber: (multipart: Multipart) => number
    getBoundary: (multipart: Multipart) => string | null
    setBoundary: (multipart: Multipart, boundary: string | null) => void
    constructFromParser: (multipart: Multipart, parser: MimeParser) => number
    reserved: any[]
}

export abstract class MultipartClass {

    // Own properties of Camel-1.2.Camel.MultipartClass

    static name: string
}

export interface MultipartEncryptedClass {

    // Own fields of Camel-1.2.Camel.MultipartEncryptedClass

    parentClass: MultipartClass
    reserved: any[]
}

export abstract class MultipartEncryptedClass {

    // Own properties of Camel-1.2.Camel.MultipartEncryptedClass

    static name: string
}

export interface MultipartEncryptedPrivate {
}

export class MultipartEncryptedPrivate {

    // Own properties of Camel-1.2.Camel.MultipartEncryptedPrivate

    static name: string
}

export interface MultipartPrivate {
}

export class MultipartPrivate {

    // Own properties of Camel-1.2.Camel.MultipartPrivate

    static name: string
}

export interface MultipartSignedClass {

    // Own fields of Camel-1.2.Camel.MultipartSignedClass

    parentClass: MultipartClass
    reserved: any[]
}

export abstract class MultipartSignedClass {

    // Own properties of Camel-1.2.Camel.MultipartSignedClass

    static name: string
}

export interface MultipartSignedPrivate {
}

export class MultipartSignedPrivate {

    // Own properties of Camel-1.2.Camel.MultipartSignedPrivate

    static name: string
}

export interface NNTPAddressClass {

    // Own fields of Camel-1.2.Camel.NNTPAddressClass

    parentClass: AddressClass
    reserved: any[]
}

export abstract class NNTPAddressClass {

    // Own properties of Camel-1.2.Camel.NNTPAddressClass

    static name: string
}

export interface NNTPAddressPrivate {
}

export class NNTPAddressPrivate {

    // Own properties of Camel-1.2.Camel.NNTPAddressPrivate

    static name: string
}

export interface NameValueArray {

    // Owm methods of Camel-1.2.Camel.NameValueArray

    /**
     * Appends a new element of the name `name` and the value `value`
     * at the end of `array`.
     * 
     * See: camel_name_value_array_set_named
     * @param name a name
     * @param value a value
     */
    append(name: string | null, value: string | null): void
    /**
     * Removes all elements of the `array`.
     */
    clear(): void
    /**
     * Creates a new copy of the `array`. The returned pointer should be freed
     * with camel_name_value_array_free() when no longer needed.
     * @returns A new copy of the @array. See: camel_name_value_array_new, camel_name_value_array_new_sized
     */
    copy(): NameValueArray
    /**
     * Compares content of the two #CamelNameValueArray and returns whether
     * they equal. Note this is an expensive operation for large arrays.
     * @param arrayB the second #CamelNameValueArray
     * @param compareType a compare type, one of #CamelCompareType
     * @returns Whether the two #CamelNameValueArray have the same content.
     */
    equal(arrayB: NameValueArray | null, compareType: CompareType): boolean
    /**
     * Frees the `array,` previously allocated by camel_name_value_array_new(),
     * camel_name_value_array_new_sized() or camel_name_value_array_copy().
     * If the `array` is %NULL, then does nothing.
     */
    free(): void
    /**
     * Returns the name and the value of the element at index `index`. Either
     * of the `out_name` and `out_value` can be %NULL, to not return that part.
     * @param index an index
     * @returns %TRUE on success, %FALSE otherwise. See: camel_name_value_array_get_name, camel_name_value_array_get_value, camel_name_value_array_get_named
     */
    get(index: number): [ /* returnType */ boolean, /* outName */ string | null, /* outValue */ string | null ]
    getLength(): number
    /**
     * Returns the name of the element at index `index`.
     * @param index an index
     * @returns Name of the element at the given @index,    or %NULL on error. See: camel_name_value_array_get, camel_name_value_array_get_value
     */
    getName(index: number): string | null
    /**
     * Returns the value of the first element named `name,` or %NULL when there
     * is no element of such `name` in the `array`. The `compare_type` determines
     * how to compare the names.
     * @param compareType a compare type, one of #CamelCompareType
     * @param name a name
     * @returns Value of the first element named @name, or %NULL. See: camel_name_value_array_get, camel_name_value_array_get_name
     */
    getNamed(compareType: CompareType, name: string | null): string | null
    /**
     * Returns the value of the element at index `index`.
     * @param index an index
     * @returns Value of the element at the given @index,    or %NULL on error. See: camel_name_value_array_get, camel_name_value_array_get_name
     */
    getValue(index: number): string | null
    /**
     * Removes element at index `index`.
     * @param index an index to remove
     * @returns Whether the element was removed.
     */
    remove(index: number): boolean
    /**
     * Removes elements of the `array` with the given `name`.
     * The `compare_type` determines hot to compare the names.
     * If the `all_occurrences` is set to %TRUE, then every elements with the `name`
     * are removed, otherwise only the first occurrence is removed.
     * @param compareType a compare type, one of #CamelCompareType
     * @param name a name to remove
     * @param allOccurrences whether to remove all occurrences of the `name`
     * @returns How many elements had been removed.
     */
    removeNamed(compareType: CompareType, name: string | null, allOccurrences: boolean): number
    /**
     * Sets both the `name` and the `value` of the element at index `index`.
     * @param index an index
     * @param name a name
     * @param value a value
     * @returns Whether the @array changed. See: camel_name_value_array_append, camel_name_value_array_set_name, camel_name_value_array_set_value
     */
    set(index: number, name: string | null, value: string | null): boolean
    /**
     * Sets the `name` of the element at index `index`.
     * @param index an index
     * @param name a name
     * @returns Whether the @array changed. See: camel_name_value_array_set, camel_name_value_array_set_value
     */
    setName(index: number, name: string | null): boolean
    /**
     * Finds an element named `name` and sets its value to `value,` or appends
     * a new element, in case no such named element exists in the `array` yet.
     * In case there are more elements named with `name` only the first
     * occurrence is changed. The `compare_type` determines how to compare
     * the names.
     * @param compareType a compare type, one of #CamelCompareType
     * @param name a name
     * @param value a value
     * @returns Whether the @array changed. See: camel_name_value_array_append, camel_name_value_array_set
     */
    setNamed(compareType: CompareType, name: string | null, value: string | null): boolean
    /**
     * Sets the `value` of the element at index `index`.
     * @param index an index
     * @param value a value
     * @returns Whether the @array changed. See: camel_name_value_array_set, camel_name_value_array_set_name
     */
    setValue(index: number, value: string | null): boolean
}

export class NameValueArray {

    // Own properties of Camel-1.2.Camel.NameValueArray

    static name: string

    // Constructors of Camel-1.2.Camel.NameValueArray

    /**
     * Creates a new #CamelNameValueArray. The returned pointer should be freed
     * with camel_name_value_array_free() when no longer needed.
     * @constructor 
     * @returns A new #CamelNameValueArray. See: camel_name_value_array_new_sized, camel_name_value_array_copy
     */
    constructor() 
    /**
     * Creates a new #CamelNameValueArray. The returned pointer should be freed
     * with camel_name_value_array_free() when no longer needed.
     * @constructor 
     * @returns A new #CamelNameValueArray. See: camel_name_value_array_new_sized, camel_name_value_array_copy
     */
    static new(): NameValueArray
    /**
     * Creates a new #CamelNameValueArray, which has reserved `reserve_size`
     * elements. This value doesn't influence the camel_name_value_array_get_length(),
     * which returns zero on the array returned from this function. The returned
     * pointer should be freed with camel_name_value_array_free() when no longer needed.
     * @constructor 
     * @param reserveSize an array size to reserve
     * @returns A new #CamelNameValueArray. See: camel_name_value_array_new, camel_name_value_array_copy
     */
    static newSized(reserveSize: number): NameValueArray
}

export interface NamedFlags {

    // Owm methods of Camel-1.2.Camel.NamedFlags

    /**
     * Removes all the elements of the array.
     */
    clear(): void
    contains(name: string | null): boolean
    /**
     * Creates a copy of the `named_flags` and returns it.
     * @returns A newly allocated #CamelNamedFlags.    Free it with camel_named_flags_free() when done with it.
     */
    copy(): NamedFlags
    /**
     * Compares content of the two #CamelNamedFlags and returns whether
     * they equal. Note this is an expensive operation for large sets.
     * @param namedFlagsB the second #CamelNamedFlags
     * @returns Whether the two #CamelNamedFlags have the same content.
     */
    equal(namedFlagsB: NamedFlags | null): boolean
    /**
     * Frees memory associated iwth the `named_flags`. Does nothing,
     * if `named_flags` is %NULL.
     */
    free(): void
    get(index: number): string | null
    getLength(): number
    /**
     * Inserts a flag named `name` into the `named_flags,` if it is not included
     * already (comparing case sensitively), or does nothing otherwise.
     * @param name name of the flag
     * @returns %TRUE the flag named @name was inserted; %FALSE otherwise.
     */
    insert(name: string | null): boolean
    /**
     * Removes a flag named `name` from the `named_flags`.
     * @param name name of the flag
     * @returns %TRUE when the @named_flags contained a flag named @name,    comparing case sensitively, and it was removed; %FALSE otherwise.
     */
    remove(name: string | null): boolean
}

export class NamedFlags {

    // Own properties of Camel-1.2.Camel.NamedFlags

    static name: string

    // Constructors of Camel-1.2.Camel.NamedFlags

    /**
     * Creates a new #CamelNamedFlags.
     * @constructor 
     * @returns A newly allocated #CamelNamedFlags.    Free it with camel_named_flags_free() when done with it.
     */
    constructor() 
    /**
     * Creates a new #CamelNamedFlags.
     * @constructor 
     * @returns A newly allocated #CamelNamedFlags.    Free it with camel_named_flags_free() when done with it.
     */
    static new(): NamedFlags
    /**
     * Created a new #CamelNamedFlags, which has reserved `reserve_size`
     * elements. This value doesn't influence the camel_named_flags_get_length(),
     * which returns zero on the array returned from this function.
     * @constructor 
     * @param reserveSize an array size to reserve
     * @returns A newly allocated #CamelNameValueArray.    Free it with camel_named_flags_free() when done with it. See: camel_name_value_array_new, camel_name_value_array_copy
     */
    static newSized(reserveSize: number): NamedFlags
}

export interface NetworkServiceInterface {

    // Own fields of Camel-1.2.Camel.NetworkServiceInterface

    parentInterface: GObject.TypeInterface
    getServiceName: (service: NetworkService, method: NetworkSecurityMethod) => string | null
    getDefaultPort: (service: NetworkService, method: NetworkSecurityMethod) => number
    connectSync: (service: NetworkService, cancellable: Gio.Cancellable | null) => Gio.IOStream
    reserved: any[]
}

export abstract class NetworkServiceInterface {

    // Own properties of Camel-1.2.Camel.NetworkServiceInterface

    static name: string
}

export interface NetworkSettingsInterface {

    // Own fields of Camel-1.2.Camel.NetworkSettingsInterface

    parentInterface: GObject.TypeInterface
    reserved: any[]
}

export abstract class NetworkSettingsInterface {

    // Own properties of Camel-1.2.Camel.NetworkSettingsInterface

    static name: string
}

export interface NullOutputStreamClass {

    // Own fields of Camel-1.2.Camel.NullOutputStreamClass

    parentClass: Gio.OutputStreamClass
    reserved: any[]
}

export abstract class NullOutputStreamClass {

    // Own properties of Camel-1.2.Camel.NullOutputStreamClass

    static name: string
}

export interface NullOutputStreamPrivate {
}

export class NullOutputStreamPrivate {

    // Own properties of Camel-1.2.Camel.NullOutputStreamPrivate

    static name: string
}

export interface ObjectBag {

    // Owm methods of Camel-1.2.Camel.ObjectBag

    /**
     * Aborts a key reservation.
     * @param key a reserved key
     */
    abort(key: any | null): void
    /**
     * Adds `object` to `bag`.  The `key` MUST have been previously reserved using
     * camel_object_bag_reserve().
     * @param key a reserved key
     * @param object a #GObject
     */
    add(key: any | null, object: any | null): void
    /**
     * Frees `bag`.  As a precaution, the function will emit a warning to standard
     * error and return without freeing `bag` if `bag` still has reserved keys.
     */
    destroy(): void
    /**
     * Lookup an object by `key`.  If the key is currently reserved, the function
     * will block until another thread commits or aborts the reservation.  The
     * caller owns the reference to the returned object.  Use g_object_unref ()
     * to unreference it.
     * @param key a key
     * @returns the object corresponding to @key, or %NULL if not found
     */
    get(key: any | null): any | null
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
    list(): GObject.Object[]
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
    peek(key: any | null): any | null
    /**
     * Changes the key for `object` to `new_key,` atomically.
     * 
     * It is considered a programming error if `object` is not found in `bag`.
     * In such case the function will emit a terminal warning and return.
     * @param object a #GObject
     * @param newKey a new key for `object`
     */
    rekey(object: any | null, newKey: any | null): void
    /**
     * Removes `object` from `bag`.
     * @param object a #GObject
     */
    remove(object: any | null): void
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
    reserve(key: any | null): any | null
}

export class ObjectBag {

    // Own properties of Camel-1.2.Camel.ObjectBag

    static name: string
}

export interface ObjectClass {

    // Own fields of Camel-1.2.Camel.ObjectClass

    parentClass: GObject.ObjectClass
    stateRead: (object: Object, fp: any | null) => number
    stateWrite: (object: Object, fp: any | null) => number
    reserved: any[]
}

export abstract class ObjectClass {

    // Own properties of Camel-1.2.Camel.ObjectClass

    static name: string
}

export interface ObjectPrivate {
}

export class ObjectPrivate {

    // Own properties of Camel-1.2.Camel.ObjectPrivate

    static name: string
}

export interface OfflineFolderClass {

    // Own fields of Camel-1.2.Camel.OfflineFolderClass

    parentClass: FolderClass
    downsyncSync: (folder: OfflineFolder, expression: string | null, cancellable: Gio.Cancellable | null) => boolean
    reserved: any[]
}

export abstract class OfflineFolderClass {

    // Own properties of Camel-1.2.Camel.OfflineFolderClass

    static name: string
}

export interface OfflineFolderPrivate {
}

export class OfflineFolderPrivate {

    // Own properties of Camel-1.2.Camel.OfflineFolderPrivate

    static name: string
}

export interface OfflineSettingsClass {

    // Own fields of Camel-1.2.Camel.OfflineSettingsClass

    parentClass: StoreSettingsClass
    reserved: any[]
}

export abstract class OfflineSettingsClass {

    // Own properties of Camel-1.2.Camel.OfflineSettingsClass

    static name: string
}

export interface OfflineSettingsPrivate {
}

export class OfflineSettingsPrivate {

    // Own properties of Camel-1.2.Camel.OfflineSettingsPrivate

    static name: string
}

export interface OfflineStoreClass {

    // Own fields of Camel-1.2.Camel.OfflineStoreClass

    parentClass: StoreClass
    dupDownsyncFolders: (store: OfflineStore) => Folder[]
    reserved: any[]
}

export abstract class OfflineStoreClass {

    // Own properties of Camel-1.2.Camel.OfflineStoreClass

    static name: string
}

export interface OfflineStorePrivate {
}

export class OfflineStorePrivate {

    // Own properties of Camel-1.2.Camel.OfflineStorePrivate

    static name: string
}

export interface OperationClass {

    // Own fields of Camel-1.2.Camel.OperationClass

    parentClass: Gio.CancellableClass
    status: (operation: Operation, what: string | null, pc: number) => void
    reserved: any[]
}

export abstract class OperationClass {

    // Own properties of Camel-1.2.Camel.OperationClass

    static name: string
}

export interface OperationPrivate {
}

export class OperationPrivate {

    // Own properties of Camel-1.2.Camel.OperationPrivate

    static name: string
}

export interface PartitionKey {

    // Own fields of Camel-1.2.Camel.PartitionKey

    hashid: _hash_t
    keyid: _key_t
}

export class PartitionKey {

    // Own properties of Camel-1.2.Camel.PartitionKey

    static name: string
}

export interface PartitionKeyBlock {

    // Own fields of Camel-1.2.Camel.PartitionKeyBlock

    used: number
    keys: any[]
}

export class PartitionKeyBlock {

    // Own properties of Camel-1.2.Camel.PartitionKeyBlock

    static name: string
}

export interface PartitionMap {

    // Own fields of Camel-1.2.Camel.PartitionMap

    hashid: _hash_t
    blockid: _block_t
}

export class PartitionMap {

    // Own properties of Camel-1.2.Camel.PartitionMap

    static name: string
}

export interface PartitionMapBlock {

    // Own fields of Camel-1.2.Camel.PartitionMapBlock

    next: _block_t
    used: number
    partition: any[]
}

export class PartitionMapBlock {

    // Own properties of Camel-1.2.Camel.PartitionMapBlock

    static name: string
}

export interface PartitionTableClass {

    // Own fields of Camel-1.2.Camel.PartitionTableClass

    parent: GObject.ObjectClass
    reserved: any[]
}

export abstract class PartitionTableClass {

    // Own properties of Camel-1.2.Camel.PartitionTableClass

    static name: string
}

export interface PartitionTablePrivate {
}

export class PartitionTablePrivate {

    // Own properties of Camel-1.2.Camel.PartitionTablePrivate

    static name: string
}

export interface Provider {

    // Own fields of Camel-1.2.Camel.Provider

    protocol: string | null
    name: string | null
    description: string | null
    domain: string | null
    flags: ProviderFlags
    urlFlags: ProviderURLFlags
    extraConf: ProviderConfEntry
    portEntries: ProviderPortEntry
    autoDetect: ProviderAutoDetectFunc
    objectTypes: GObject.GType[]
    authtypes: any[]
    urlHash: GLib.HashFunc
    urlEqual: GLib.EqualFunc
    translationDomain: string | null
    priv: any

    // Owm methods of Camel-1.2.Camel.Provider

    /**
     * Registers a provider.
     */
    register(): void
}

export class Provider {

    // Own properties of Camel-1.2.Camel.Provider

    static name: string

    // Constructors of Camel-1.2.Camel.Provider

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
    static get(protocol: string | null): Provider
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
    static init(): void
    /**
     * This returns a list of available providers. If `load` is %TRUE, it will
     * first load in all available providers that haven't yet been loaded.
     * 
     * Free the returned list with g_list_free().  The #CamelProvider structs
     * in the list are owned by Camel and should not be modified or freed.
     * @param load whether or not to load in providers that are not already loaded
     * @returns a #GList of #CamelProvider structs
     */
    static list(load: boolean): Provider[]
    /**
     * Loads the provider at `path,` and calls its initialization function,
     * passing `session` as an argument. The provider should then register
     * itself with `session`.
     * @param path the path to a shared library
     * @returns %TRUE on success, %FALSE on failure
     */
    static load(path: string | null): boolean
}

export interface ProviderConfEntry {

    // Own fields of Camel-1.2.Camel.ProviderConfEntry

    type: ProviderConfType
    name: string | null
    depname: string | null
    text: string | null
    value: string | null
}

export class ProviderConfEntry {

    // Own properties of Camel-1.2.Camel.ProviderConfEntry

    static name: string
}

export interface ProviderModule {

    // Own fields of Camel-1.2.Camel.ProviderModule

    path: string | null
    types: any[]
    loaded: number
}

export class ProviderModule {

    // Own properties of Camel-1.2.Camel.ProviderModule

    static name: string

    // Constructors of Camel-1.2.Camel.ProviderModule

    static init(): void
}

export interface ProviderPortEntry {

    // Own fields of Camel-1.2.Camel.ProviderPortEntry

    /**
     * port number
     * @field 
     */
    port: number
    /**
     * human description of the port
     * @field 
     */
    desc: string | null
    /**
     * a boolean whether the port is used together with TLS/SSL
     * @field 
     */
    isSsl: boolean
}

export class ProviderPortEntry {

    // Own properties of Camel-1.2.Camel.ProviderPortEntry

    static name: string
}

export interface SExpClass {

    // Own fields of Camel-1.2.Camel.SExpClass

    parentClass: GObject.ObjectClass
    reserved: any[]
}

export abstract class SExpClass {

    // Own properties of Camel-1.2.Camel.SExpClass

    static name: string
}

export interface SExpPrivate {
}

export class SExpPrivate {

    // Own properties of Camel-1.2.Camel.SExpPrivate

    static name: string
}

export interface SExpResult {

    // Own fields of Camel-1.2.Camel.SExpResult

    /**
     * a #CamelSExpResultType, defining the `value` type
     * @field 
     */
    type: SExpResultType
    /**
     * a boolean whether the occuring times are used
     * @field 
     */
    timeGenerator: boolean
    /**
     * start time
     * @field 
     */
    occuringStart: number
    /**
     * end time
     * @field 
     */
    occuringEnd: number
}

export class SExpResult {

    // Own properties of Camel-1.2.Camel.SExpResult

    static name: string
}

export interface SExpSymbol {

    // Own fields of Camel-1.2.Camel.SExpSymbol

    /**
     * a type of the symbol, either CAMEL_SEXP_TERM_FUNC or CAMEL_SEXP_TERM_VAR
     * @field 
     */
    type: number
    /**
     * name of the symbol
     * @field 
     */
    name: string | null
    /**
     * user data for the callback
     * `f`.func: a #CamelSExpFunc callback
     * `f`.ifunc: a #CamelSExpIFunc callback
     * @field 
     */
    data: any
}

/**
 * Describes a function or a variable symbol
 * @record 
 */
export class SExpSymbol {

    // Own properties of Camel-1.2.Camel.SExpSymbol

    static name: string
}

export interface SExpTerm {

    // Own fields of Camel-1.2.Camel.SExpTerm

    /**
     * a type of the term; one of #CamelSExpTermType
     * @field 
     */
    type: SExpTermType
}

export class SExpTerm {

    // Own properties of Camel-1.2.Camel.SExpTerm

    static name: string
}

export interface SMIMEContextClass {

    // Own fields of Camel-1.2.Camel.SMIMEContextClass

    parentClass: CipherContextClass
    reserved: any[]
}

export abstract class SMIMEContextClass {

    // Own properties of Camel-1.2.Camel.SMIMEContextClass

    static name: string
}

export interface SMIMEContextPrivate {
}

export class SMIMEContextPrivate {

    // Own properties of Camel-1.2.Camel.SMIMEContextPrivate

    static name: string
}

export interface SaslAnonymousClass {

    // Own fields of Camel-1.2.Camel.SaslAnonymousClass

    parentClass: SaslClass
    reserved: any[]
}

export abstract class SaslAnonymousClass {

    // Own properties of Camel-1.2.Camel.SaslAnonymousClass

    static name: string
}

export interface SaslAnonymousPrivate {
}

export class SaslAnonymousPrivate {

    // Own properties of Camel-1.2.Camel.SaslAnonymousPrivate

    static name: string
}

export interface SaslClass {

    // Own fields of Camel-1.2.Camel.SaslClass

    parentClass: GObject.ObjectClass
    authType: ServiceAuthType
    tryEmptyPasswordSync: (sasl: Sasl, cancellable: Gio.Cancellable | null) => boolean
    challengeSync: (sasl: Sasl, token: Uint8Array | null, cancellable: Gio.Cancellable | null) => Uint8Array | null
    reserved: any[]
}

export abstract class SaslClass {

    // Own properties of Camel-1.2.Camel.SaslClass

    static name: string
}

export interface SaslCramMd5Class {

    // Own fields of Camel-1.2.Camel.SaslCramMd5Class

    parentClass: SaslClass
    reserved: any[]
}

export abstract class SaslCramMd5Class {

    // Own properties of Camel-1.2.Camel.SaslCramMd5Class

    static name: string
}

export interface SaslCramMd5Private {
}

export class SaslCramMd5Private {

    // Own properties of Camel-1.2.Camel.SaslCramMd5Private

    static name: string
}

export interface SaslDigestMd5Class {

    // Own fields of Camel-1.2.Camel.SaslDigestMd5Class

    parentClass: SaslClass
    reserved: any[]
}

export abstract class SaslDigestMd5Class {

    // Own properties of Camel-1.2.Camel.SaslDigestMd5Class

    static name: string
}

export interface SaslDigestMd5Private {
}

export class SaslDigestMd5Private {

    // Own properties of Camel-1.2.Camel.SaslDigestMd5Private

    static name: string
}

export interface SaslGssapiClass {

    // Own fields of Camel-1.2.Camel.SaslGssapiClass

    parentClass: SaslClass
    reserved: any[]
}

export abstract class SaslGssapiClass {

    // Own properties of Camel-1.2.Camel.SaslGssapiClass

    static name: string
}

export interface SaslGssapiPrivate {
}

export class SaslGssapiPrivate {

    // Own properties of Camel-1.2.Camel.SaslGssapiPrivate

    static name: string
}

export interface SaslLoginClass {

    // Own fields of Camel-1.2.Camel.SaslLoginClass

    parentClass: SaslClass
    reserved: any[]
}

export abstract class SaslLoginClass {

    // Own properties of Camel-1.2.Camel.SaslLoginClass

    static name: string
}

export interface SaslLoginPrivate {
}

export class SaslLoginPrivate {

    // Own properties of Camel-1.2.Camel.SaslLoginPrivate

    static name: string
}

export interface SaslNTLMClass {

    // Own fields of Camel-1.2.Camel.SaslNTLMClass

    parentClass: SaslClass
    reserved: any[]
}

export abstract class SaslNTLMClass {

    // Own properties of Camel-1.2.Camel.SaslNTLMClass

    static name: string
}

export interface SaslNTLMPrivate {
}

export class SaslNTLMPrivate {

    // Own properties of Camel-1.2.Camel.SaslNTLMPrivate

    static name: string
}

export interface SaslPOPB4SMTPClass {

    // Own fields of Camel-1.2.Camel.SaslPOPB4SMTPClass

    parentClass: SaslClass
    reserved: any[]
}

export abstract class SaslPOPB4SMTPClass {

    // Own properties of Camel-1.2.Camel.SaslPOPB4SMTPClass

    static name: string
}

export interface SaslPOPB4SMTPPrivate {
}

export class SaslPOPB4SMTPPrivate {

    // Own properties of Camel-1.2.Camel.SaslPOPB4SMTPPrivate

    static name: string
}

export interface SaslPlainClass {

    // Own fields of Camel-1.2.Camel.SaslPlainClass

    parentClass: SaslClass
    reserved: any[]
}

export abstract class SaslPlainClass {

    // Own properties of Camel-1.2.Camel.SaslPlainClass

    static name: string
}

export interface SaslPlainPrivate {
}

export class SaslPlainPrivate {

    // Own properties of Camel-1.2.Camel.SaslPlainPrivate

    static name: string
}

export interface SaslPrivate {
}

export class SaslPrivate {

    // Own properties of Camel-1.2.Camel.SaslPrivate

    static name: string
}

export interface SaslXOAuth2Class {

    // Own fields of Camel-1.2.Camel.SaslXOAuth2Class

    parentClass: SaslClass
}

export abstract class SaslXOAuth2Class {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2Class

    static name: string
}

export interface SaslXOAuth2GoogleClass {

    // Own fields of Camel-1.2.Camel.SaslXOAuth2GoogleClass

    parentClass: SaslXOAuth2Class
}

export abstract class SaslXOAuth2GoogleClass {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2GoogleClass

    static name: string
}

export interface SaslXOAuth2GooglePrivate {
}

export class SaslXOAuth2GooglePrivate {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2GooglePrivate

    static name: string
}

export interface SaslXOAuth2OutlookClass {

    // Own fields of Camel-1.2.Camel.SaslXOAuth2OutlookClass

    parentClass: SaslXOAuth2Class
}

export abstract class SaslXOAuth2OutlookClass {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2OutlookClass

    static name: string
}

export interface SaslXOAuth2OutlookPrivate {
}

export class SaslXOAuth2OutlookPrivate {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2OutlookPrivate

    static name: string
}

export interface SaslXOAuth2Private {
}

export class SaslXOAuth2Private {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2Private

    static name: string
}

export interface SaslXOAuth2YahooClass {

    // Own fields of Camel-1.2.Camel.SaslXOAuth2YahooClass

    parentClass: SaslXOAuth2Class
}

export abstract class SaslXOAuth2YahooClass {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2YahooClass

    static name: string
}

export interface SaslXOAuth2YahooPrivate {
}

export class SaslXOAuth2YahooPrivate {

    // Own properties of Camel-1.2.Camel.SaslXOAuth2YahooPrivate

    static name: string
}

export interface ServiceAuthType {

    // Own fields of Camel-1.2.Camel.ServiceAuthType

    name: string | null
    description: string | null
    authproto: string | null
    needPassword: boolean

    // Owm methods of Camel-1.2.Camel.ServiceAuthType

    /**
     * Copies the `service_auth_type` struct.
     * Does nothing and returns the given object in reality, needed for the introspection.
     * @returns the copy of @service_auth_type
     */
    copy(): ServiceAuthType
    /**
     * Frees the `service_auth_type` struct.
     * Does nothing in reality, needed for the introspection.
     */
    free(): void
}

export class ServiceAuthType {

    // Own properties of Camel-1.2.Camel.ServiceAuthType

    static name: string
}

export interface ServiceClass {

    // Own fields of Camel-1.2.Camel.ServiceClass

    parentClass: ObjectClass
    settingsType: GObject.GType
    getName: (service: Service, brief: boolean) => string | null
    connectSync: (service: Service, cancellable: Gio.Cancellable | null) => boolean
    disconnectSync: (service: Service, clean: boolean, cancellable: Gio.Cancellable | null) => boolean
    authenticateSync: (service: Service, mechanism: string | null, cancellable: Gio.Cancellable | null) => AuthenticationResult
    queryAuthTypesSync: (service: Service, cancellable: Gio.Cancellable | null) => ServiceAuthType[]
    reserved: any[]
}

export abstract class ServiceClass {

    // Own properties of Camel-1.2.Camel.ServiceClass

    static name: string
}

export interface ServicePrivate {
}

export class ServicePrivate {

    // Own properties of Camel-1.2.Camel.ServicePrivate

    static name: string
}

export interface SessionClass {

    // Own fields of Camel-1.2.Camel.SessionClass

    parentClass: GObject.ObjectClass
    addService: (session: Session, uid: string | null, protocol: string | null, type: ProviderType) => Service
    removeService: (session: Session, service: Service) => void
    getPassword: (session: Session, service: Service, prompt: string | null, item: string | null, flags: number) => string | null
    forgetPassword: (session: Session, service: Service, item: string | null) => boolean
    trustPrompt: (session: Session, service: Service, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => CertTrust
    getFilterDriver: (session: Session, type: string | null, forFolder: Folder | null) => FilterDriver
    lookupAddressbook: (session: Session, name: string | null) => boolean
    authenticateSync: (session: Session, service: Service, mechanism: string | null, cancellable: Gio.Cancellable | null) => boolean
    forwardToSync: (session: Session, folder: Folder, message: MimeMessage, address: string | null, cancellable: Gio.Cancellable | null) => boolean
    getOauth2AccessTokenSync: (session: Session, service: Service, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    getRecipientCertificatesSync: (session: Session, flags: number, recipients: string[], cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outCertificates */ string[] ]
    addressbookContainsSync: (session: Session, bookUid: string | null, emailAddress: string | null, cancellable: Gio.Cancellable | null) => boolean
    reservedMethods: any[]
    jobStarted: (session: Session, cancellable: Gio.Cancellable | null) => void
    jobFinished: (session: Session, cancellable: Gio.Cancellable | null, error: GLib.Error) => void
    userAlert: (session: Session, service: Service, type: SessionAlertType, message: string | null) => void
    reservedSignals: any[]
}

export abstract class SessionClass {

    // Own properties of Camel-1.2.Camel.SessionClass

    static name: string
}

export interface SessionPrivate {
}

export class SessionPrivate {

    // Own properties of Camel-1.2.Camel.SessionPrivate

    static name: string
}

export interface SettingsClass {

    // Own fields of Camel-1.2.Camel.SettingsClass

    parentClass: GObject.ObjectClass
    clone: (settings: Settings) => Settings
    equal: (settingsA: Settings, settingsB: Settings) => boolean
    reserved: any[]
}

export abstract class SettingsClass {

    // Own properties of Camel-1.2.Camel.SettingsClass

    static name: string

    // Owm static methods of Camel-1.2.Camel.SettingsClass

    /**
     * Returns an array of #GParamSpec for properties of `class` which are
     * considered to be settings.  By default all properties are considered
     * to be settings, but subclasses may wish to exclude certain properties.
     * Free the returned array with g_free().
     * @param nSettings return location for the length of the returned array
     * @returns an array of #GParamSpec which should be freed after use
     */
    static listSettings(settings_class: Settings | Function | GObject.GType, nSettings: number): GObject.ParamSpec
}

export interface SettingsPrivate {
}

export class SettingsPrivate {

    // Own properties of Camel-1.2.Camel.SettingsPrivate

    static name: string
}

export interface StoreClass {

    // Own fields of Camel-1.2.Camel.StoreClass

    parentClass: ServiceClass
    hashFolderName: GLib.HashFunc
    equalFolderName: GLib.EqualFunc
    canRefreshFolder: (store: Store, info: FolderInfo) => boolean
    getFolderSync: (store: Store, folderName: string | null, flags: StoreGetFolderFlags, cancellable: Gio.Cancellable | null) => Folder | null
    getFolderInfoSync: (store: Store, top: string | null, flags: StoreGetFolderInfoFlags, cancellable: Gio.Cancellable | null) => FolderInfo | null
    getInboxFolderSync: (store: Store, cancellable: Gio.Cancellable | null) => Folder | null
    getJunkFolderSync: (store: Store, cancellable: Gio.Cancellable | null) => Folder | null
    getTrashFolderSync: (store: Store, cancellable: Gio.Cancellable | null) => Folder | null
    createFolderSync: (store: Store, parentName: string | null, folderName: string | null, cancellable: Gio.Cancellable | null) => FolderInfo | null
    deleteFolderSync: (store: Store, folderName: string | null, cancellable: Gio.Cancellable | null) => boolean
    renameFolderSync: (store: Store, oldName: string | null, newName: string | null, cancellable: Gio.Cancellable | null) => boolean
    synchronizeSync: (store: Store, expunge: boolean, cancellable: Gio.Cancellable | null) => boolean
    initialSetupSync: (store: Store, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outSaveSetup */ GLib.HashTable ]
    getCanAutoSaveChanges: (store: Store) => boolean
    reservedMethods: any[]
    folderCreated: (store: Store, folderInfo: FolderInfo) => void
    folderDeleted: (store: Store, folderInfo: FolderInfo) => void
    folderOpened: (store: Store, folder: Folder) => void
    folderRenamed: (store: Store, oldName: string | null, folderInfo: FolderInfo) => void
    folderInfoStale: (store: Store) => void
    reservedSignals: any[]
}

export abstract class StoreClass {

    // Own properties of Camel-1.2.Camel.StoreClass

    static name: string
}

export interface StoreInfo {

    // Own fields of Camel-1.2.Camel.StoreInfo

    refcount: number
    summary: StoreSummary
    path: string | null
    flags: number
    unread: number
    total: number

    // Owm methods of Camel-1.2.Camel.StoreInfo

    /**
     * Returns the last segment of the path string from `info`.
     * @returns the last segment of the path string from @info
     */
    getName(): string | null
    /**
     * Returns the path string from `info`.
     * @returns the path string from @info
     */
    getPath(): string | null
    /**
     * Increase the reference count of `info`.
     * @returns the @info argument
     */
    ref(): StoreInfo
    /**
     * Set a specific string on the `info`.
     * @param type specific string being set
     * @param value string value to set
     */
    setValue(type: number, value: string | null): void
    /**
     * Unref and potentially free `info,` and all associated memory.
     */
    unref(): void
}

export class StoreInfo {

    // Constructors of Camel-1.2.Camel.StoreInfo

    /**
     * Returns the last segment of the path string from `info`.
     * @param summary a #CamelStoreSummary
     * @param info a #CamelStoreInfo
     * @returns the last segment of the path string from @info
     */
    static name(summary: StoreSummary, info: StoreInfo): string | null
    /**
     * Returns the path string from `info`.
     * @param summary a #CamelStoreSummary
     * @param info a #CamelStoreInfo
     * @returns the path string from @info
     */
    static path(summary: StoreSummary, info: StoreInfo): string | null
    /**
     * Set a specific string on the `info`.
     * @param summary a #CamelStoreSummary object
     * @param info a #CamelStoreInfo
     * @param type specific string being set
     * @param value string value to set
     */
    static setString(summary: StoreSummary, info: StoreInfo, type: number, value: string | null): void
}

export interface StorePrivate {
}

export class StorePrivate {

    // Own properties of Camel-1.2.Camel.StorePrivate

    static name: string
}

export interface StoreSettingsClass {

    // Own fields of Camel-1.2.Camel.StoreSettingsClass

    parentClass: SettingsClass
    reserved: any[]
}

export abstract class StoreSettingsClass {

    // Own properties of Camel-1.2.Camel.StoreSettingsClass

    static name: string
}

export interface StoreSettingsPrivate {
}

export class StoreSettingsPrivate {

    // Own properties of Camel-1.2.Camel.StoreSettingsPrivate

    static name: string
}

export interface StoreSummaryClass {

    // Own fields of Camel-1.2.Camel.StoreSummaryClass

    parentClass: GObject.ObjectClass
    storeInfoSize: number
    summaryHeaderLoad: (summary: StoreSummary, file: any | null) => number
    summaryHeaderSave: (summary: StoreSummary, file: any | null) => number
    storeInfoNew: (summary: StoreSummary, path: string | null) => StoreInfo
    storeInfoLoad: (summary: StoreSummary, file: any | null) => StoreInfo
    storeInfoSave: (summary: StoreSummary, file: any | null, info: StoreInfo) => number
    storeInfoFree: (summary: StoreSummary, info: StoreInfo) => void
    storeInfoSetValue: (summary: StoreSummary, info: StoreInfo, type: number, value: string | null) => void
    reserved: any[]
}

export abstract class StoreSummaryClass {

    // Own properties of Camel-1.2.Camel.StoreSummaryClass

    static name: string
}

export interface StoreSummaryPrivate {
}

export class StoreSummaryPrivate {

    // Own properties of Camel-1.2.Camel.StoreSummaryPrivate

    static name: string
}

export interface StreamBufferClass {

    // Own fields of Camel-1.2.Camel.StreamBufferClass

    parentClass: StreamClass
    init: (streamBuffer: StreamBuffer, stream: Stream, mode: StreamBufferMode) => void
    initVbuf: (streamBuffer: StreamBuffer, stream: Stream, mode: StreamBufferMode, buf: string | null, size: number) => void
    reserved: any[]
}

export abstract class StreamBufferClass {

    // Own properties of Camel-1.2.Camel.StreamBufferClass

    static name: string
}

export interface StreamBufferPrivate {
}

export class StreamBufferPrivate {

    // Own properties of Camel-1.2.Camel.StreamBufferPrivate

    static name: string
}

export interface StreamClass {

    // Own fields of Camel-1.2.Camel.StreamClass

    parentClass: GObject.ObjectClass
    read: (stream: Stream, buffer: number[], cancellable: Gio.Cancellable | null) => number
    write: (stream: Stream, buffer: number[], cancellable: Gio.Cancellable | null) => number
    close: (stream: Stream, cancellable: Gio.Cancellable | null) => number
    flush: (stream: Stream, cancellable: Gio.Cancellable | null) => number
    eos: (stream: Stream) => boolean
    reserved: any[]
}

export abstract class StreamClass {

    // Own properties of Camel-1.2.Camel.StreamClass

    static name: string
}

export interface StreamFilterClass {

    // Own fields of Camel-1.2.Camel.StreamFilterClass

    parentClass: StreamClass
    reserved: any[]
}

export abstract class StreamFilterClass {

    // Own properties of Camel-1.2.Camel.StreamFilterClass

    static name: string
}

export interface StreamFilterPrivate {
}

export class StreamFilterPrivate {

    // Own properties of Camel-1.2.Camel.StreamFilterPrivate

    static name: string
}

export interface StreamFsClass {

    // Own fields of Camel-1.2.Camel.StreamFsClass

    parentClass: StreamClass
    reserved: any[]
}

export abstract class StreamFsClass {

    // Own properties of Camel-1.2.Camel.StreamFsClass

    static name: string
}

export interface StreamFsPrivate {
}

export class StreamFsPrivate {

    // Own properties of Camel-1.2.Camel.StreamFsPrivate

    static name: string
}

export interface StreamMemClass {

    // Own fields of Camel-1.2.Camel.StreamMemClass

    parentClass: StreamClass
    reserved: any[]
}

export abstract class StreamMemClass {

    // Own properties of Camel-1.2.Camel.StreamMemClass

    static name: string
}

export interface StreamMemPrivate {
}

export class StreamMemPrivate {

    // Own properties of Camel-1.2.Camel.StreamMemPrivate

    static name: string
}

export interface StreamNullClass {

    // Own fields of Camel-1.2.Camel.StreamNullClass

    parentClass: StreamClass
    reserved: any[]
}

export abstract class StreamNullClass {

    // Own properties of Camel-1.2.Camel.StreamNullClass

    static name: string
}

export interface StreamNullPrivate {
}

export class StreamNullPrivate {

    // Own properties of Camel-1.2.Camel.StreamNullPrivate

    static name: string
}

export interface StreamPrivate {
}

export class StreamPrivate {

    // Own properties of Camel-1.2.Camel.StreamPrivate

    static name: string
}

export interface StreamProcessClass {

    // Own fields of Camel-1.2.Camel.StreamProcessClass

    parentClass: StreamClass
    reserved: any[]
}

export abstract class StreamProcessClass {

    // Own properties of Camel-1.2.Camel.StreamProcessClass

    static name: string
}

export interface StreamProcessPrivate {
}

export class StreamProcessPrivate {

    // Own properties of Camel-1.2.Camel.StreamProcessPrivate

    static name: string
}

export interface SubscribableInterface {

    // Own fields of Camel-1.2.Camel.SubscribableInterface

    parentInterface: GObject.TypeInterface
    folderIsSubscribed: (subscribable: Subscribable, folderName: string | null) => boolean
    subscribeFolderSync: (subscribable: Subscribable, folderName: string | null, cancellable: Gio.Cancellable | null) => boolean
    unsubscribeFolderSync: (subscribable: Subscribable, folderName: string | null, cancellable: Gio.Cancellable | null) => boolean
    reservedMethods: any[]
    folderSubscribed: (subscribable: Subscribable, folderInfo: FolderInfo) => void
    folderUnsubscribed: (subscribable: Subscribable, folderInfo: FolderInfo) => void
    reservedSignals: any[]
}

export abstract class SubscribableInterface {

    // Own properties of Camel-1.2.Camel.SubscribableInterface

    static name: string
}

export interface SummaryMessageID {
}

export class SummaryMessageID {

    // Own properties of Camel-1.2.Camel.SummaryMessageID

    static name: string
}

export interface TextIndexClass {

    // Own fields of Camel-1.2.Camel.TextIndexClass

    parentClass: IndexClass
    reserved: any[]
}

export abstract class TextIndexClass {

    // Own properties of Camel-1.2.Camel.TextIndexClass

    static name: string
}

export interface TextIndexCursorClass {

    // Own fields of Camel-1.2.Camel.TextIndexCursorClass

    parentClass: IndexCursorClass
    reserved: any[]
}

export abstract class TextIndexCursorClass {

    // Own properties of Camel-1.2.Camel.TextIndexCursorClass

    static name: string
}

export interface TextIndexCursorPrivate {
}

export class TextIndexCursorPrivate {

    // Own properties of Camel-1.2.Camel.TextIndexCursorPrivate

    static name: string
}

export interface TextIndexKeyCursorClass {

    // Own fields of Camel-1.2.Camel.TextIndexKeyCursorClass

    parentClass: IndexCursorClass
    reserved: any[]
}

export abstract class TextIndexKeyCursorClass {

    // Own properties of Camel-1.2.Camel.TextIndexKeyCursorClass

    static name: string
}

export interface TextIndexKeyCursorPrivate {
}

export class TextIndexKeyCursorPrivate {

    // Own properties of Camel-1.2.Camel.TextIndexKeyCursorPrivate

    static name: string
}

export interface TextIndexNameClass {

    // Own fields of Camel-1.2.Camel.TextIndexNameClass

    parentClass: IndexNameClass
    reserved: any[]
}

export abstract class TextIndexNameClass {

    // Own properties of Camel-1.2.Camel.TextIndexNameClass

    static name: string
}

export interface TextIndexNamePrivate {
}

export class TextIndexNamePrivate {

    // Own properties of Camel-1.2.Camel.TextIndexNamePrivate

    static name: string
}

export interface TextIndexPrivate {
}

export class TextIndexPrivate {

    // Own properties of Camel-1.2.Camel.TextIndexPrivate

    static name: string
}

export interface TransportClass {

    // Own fields of Camel-1.2.Camel.TransportClass

    parentClass: ServiceClass
    sendToSync: (transport: Transport, message: MimeMessage, from: Address, recipients: Address, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outSentMessageSaved */ boolean ]
    reserved: any[]
}

export abstract class TransportClass {

    // Own properties of Camel-1.2.Camel.TransportClass

    static name: string
}

export interface TransportPrivate {
}

export class TransportPrivate {

    // Own properties of Camel-1.2.Camel.TransportPrivate

    static name: string
}

export interface Trie {
}

/**
 * A trie data structure.
 * @record 
 */
export class Trie {

    // Own properties of Camel-1.2.Camel.Trie

    static name: string
}

export interface UIDCache {

    // Own fields of Camel-1.2.Camel.UIDCache

    filename: string | null
    uids: GLib.HashTable
    level: number
    expired: number
    size: number
    fd: number

    // Owm methods of Camel-1.2.Camel.UIDCache

    /**
     * Destroys `cache` and frees its data.
     */
    destroy(): void
    /**
     * Returns an array of UIDs from `uids` that are not in `cache,` and
     * removes UIDs from `cache` that aren't in `uids`.
     * @param uids an array of UIDs
     * @returns an array of new UIDs, which must be freed with camel_uid_cache_free_uids().
     */
    getNewUids(uids: string[]): string[]
    /**
     * Attempts to save `cache` back to disk.
     * @returns success or failure
     */
    save(): boolean
    /**
     * Marks a uid for saving.
     * @param uid a uid to save
     */
    saveUid(uid: string | null): void
}

export class UIDCache {

    // Own properties of Camel-1.2.Camel.UIDCache

    static name: string

    // Constructors of Camel-1.2.Camel.UIDCache

    /**
     * Frees the array of UIDs.
     * @param uids an array returned from camel_uid_cache_get_new_uids()
     */
    static freeUids(uids: string[]): void
}

export interface URL {

    // Own fields of Camel-1.2.Camel.URL

    protocol: string | null
    user: string | null
    authmech: string | null
    host: string | null
    port: number
    path: string | null
    params: GLib.Data
    query: string | null
    fragment: string | null

    // Owm methods of Camel-1.2.Camel.URL

    /**
     * Copy a #CamelURL.
     * @returns a duplicate copy of @in
     */
    copy(): URL
    equal(u2: URL): boolean
    /**
     * Frees `url`.
     */
    free(): void
    /**
     * Get the value of the specified param on the URL.
     * @param name name of the param
     * @returns the value of a param if found or %NULL otherwise
     */
    getParam(name: string | null): string | null
    hash(): number
    /**
     * Parses `url_string` relative to `base`.
     * @param urlString the URL
     * @returns a parsed #CamelURL
     */
    newWithBase(urlString: string | null): URL
    /**
     * Set the authmech of a #CamelURL.
     * @param authmech authentication mechanism
     */
    setAuthmech(authmech: string | null): void
    /**
     * Set the fragment of a #CamelURL.
     * @param fragment url fragment
     */
    setFragment(fragment: string | null): void
    /**
     * Set the hostname of a #CamelURL.
     * @param host hostname
     */
    setHost(host: string | null): void
    /**
     * Set a param on the #CamelURL.
     * @param name name of the param to set
     * @param value value of the param to set
     */
    setParam(name: string | null, value: string | null): void
    /**
     * Set the path component of a #CamelURL.
     * @param path path
     */
    setPath(path: string | null): void
    /**
     * Set the port on a #CamelURL.
     * @param port port
     */
    setPort(port: number): void
    /**
     * Set the protocol of a #CamelURL.
     * @param protocol protocol schema
     */
    setProtocol(protocol: string | null): void
    /**
     * Set the query of a #CamelURL.
     * @param query url query
     */
    setQuery(query: string | null): void
    /**
     * Set the user of a #CamelURL.
     * @param user username
     */
    setUser(user: string | null): void
    /**
     * Flatten a #CamelURL into a string.
     * @param flags additional translation options
     * @returns a string representing @url, which the caller must free
     */
    toString(flags: URLFlags): string | null
}

export class URL {

    // Own properties of Camel-1.2.Camel.URL

    static name: string

    // Constructors of Camel-1.2.Camel.URL

    /**
     * Parses an absolute URL.
     * @constructor 
     * @param urlString a URL string
     * @returns a #CamelURL if it can be parsed, or %NULL otherwise
     */
    constructor(urlString: string | null) 
    /**
     * Parses an absolute URL.
     * @constructor 
     * @param urlString a URL string
     * @returns a #CamelURL if it can be parsed, or %NULL otherwise
     */
    static new(urlString: string | null): URL
    static addrspecEnd(in_: string | null, pos: string | null, inend: string | null, match: UrlMatch): boolean
    static addrspecStart(in_: string | null, pos: string | null, inend: string | null, match: UrlMatch): boolean
    /**
     * &percnt;-decodes the passed-in URL *in place*. The decoded version is
     * never longer than the encoded version, so there does not need to
     * be any additional space at the end of the string.
     * @param part a URL part
     */
    static decode(part: string | null): void
    static decodePath(path: string | null): string | null
    /**
     * This &percnt;-encodes the given URL part and returns the escaped version
     * in allocated memory, which the caller must free when it is done.
     * @param part a URL part
     * @param escapeExtra additional characters beyond " \"%#<>{}|\^[]`" to escape (or %NULL)
     * @returns the encoded string
     */
    static encode(part: string | null, escapeExtra: string | null): string | null
    static fileEnd(in_: string | null, pos: string | null, inend: string | null, match: UrlMatch): boolean
    static fileStart(in_: string | null, pos: string | null, inend: string | null, match: UrlMatch): boolean
    static webEnd(in_: string | null, pos: string | null, inend: string | null, match: UrlMatch): boolean
    static webStart(in_: string | null, pos: string | null, inend: string | null, match: UrlMatch): boolean
}

export interface UrlMatch {

    // Own fields of Camel-1.2.Camel.UrlMatch

    pattern: string | null
    prefix: string | null
    umSo: number
    umEo: number
}

export class UrlMatch {

    // Own properties of Camel-1.2.Camel.UrlMatch

    static name: string
}

export interface UrlPattern {

    // Own fields of Camel-1.2.Camel.UrlPattern

    pattern: string | null
    prefix: string | null
    start: UrlScanFunc
    end: UrlScanFunc
}

export class UrlPattern {

    // Own properties of Camel-1.2.Camel.UrlPattern

    static name: string
}

export interface UrlScanner {
}

export class UrlScanner {

    // Own properties of Camel-1.2.Camel.UrlScanner

    static name: string
}

export interface VTrashFolderClass {

    // Own fields of Camel-1.2.Camel.VTrashFolderClass

    parentClass: VeeFolderClass
    reserved: any[]
}

export abstract class VTrashFolderClass {

    // Own properties of Camel-1.2.Camel.VTrashFolderClass

    static name: string
}

export interface VTrashFolderPrivate {
}

export class VTrashFolderPrivate {

    // Own properties of Camel-1.2.Camel.VTrashFolderPrivate

    static name: string
}

export interface VeeDataCacheClass {

    // Own fields of Camel-1.2.Camel.VeeDataCacheClass

    parentClass: GObject.ObjectClass
    reserved: any[]
}

export abstract class VeeDataCacheClass {

    // Own properties of Camel-1.2.Camel.VeeDataCacheClass

    static name: string
}

export interface VeeDataCachePrivate {
}

export class VeeDataCachePrivate {

    // Own properties of Camel-1.2.Camel.VeeDataCachePrivate

    static name: string
}

export interface VeeFolderClass {

    // Own fields of Camel-1.2.Camel.VeeFolderClass

    parentClass: FolderClass
    addFolder: (vfolder: VeeFolder, subfolder: Folder, cancellable: Gio.Cancellable | null) => void
    removeFolder: (vfolder: VeeFolder, subfolder: Folder, cancellable: Gio.Cancellable | null) => void
    rebuildFolder: (vfolder: VeeFolder, subfolder: Folder, cancellable: Gio.Cancellable | null) => void
    setExpression: (vfolder: VeeFolder, expression: string | null) => void
    folderChanged: (vfolder: VeeFolder, subfolder: Folder, changes: FolderChangeInfo) => void
    reserved: any[]
}

export abstract class VeeFolderClass {

    // Own properties of Camel-1.2.Camel.VeeFolderClass

    static name: string
}

export interface VeeFolderPrivate {
}

export class VeeFolderPrivate {

    // Own properties of Camel-1.2.Camel.VeeFolderPrivate

    static name: string
}

export interface VeeMessageInfoClass {

    // Own fields of Camel-1.2.Camel.VeeMessageInfoClass

    parentClass: MessageInfoClass
    reserved: any[]
}

export abstract class VeeMessageInfoClass {

    // Own properties of Camel-1.2.Camel.VeeMessageInfoClass

    static name: string
}

export interface VeeMessageInfoDataClass {

    // Own fields of Camel-1.2.Camel.VeeMessageInfoDataClass

    parentClass: GObject.ObjectClass
    reserved: any[]
}

export abstract class VeeMessageInfoDataClass {

    // Own properties of Camel-1.2.Camel.VeeMessageInfoDataClass

    static name: string
}

export interface VeeMessageInfoDataPrivate {
}

export class VeeMessageInfoDataPrivate {

    // Own properties of Camel-1.2.Camel.VeeMessageInfoDataPrivate

    static name: string
}

export interface VeeMessageInfoPrivate {
}

export class VeeMessageInfoPrivate {

    // Own properties of Camel-1.2.Camel.VeeMessageInfoPrivate

    static name: string
}

export interface VeeStoreClass {

    // Own fields of Camel-1.2.Camel.VeeStoreClass

    parentClass: StoreClass
    reserved: any[]
}

export abstract class VeeStoreClass {

    // Own properties of Camel-1.2.Camel.VeeStoreClass

    static name: string
}

export interface VeeStorePrivate {
}

export class VeeStorePrivate {

    // Own properties of Camel-1.2.Camel.VeeStorePrivate

    static name: string
}

export interface VeeSubfolderDataClass {

    // Own fields of Camel-1.2.Camel.VeeSubfolderDataClass

    parentClass: GObject.ObjectClass
    reserved: any[]
}

export abstract class VeeSubfolderDataClass {

    // Own properties of Camel-1.2.Camel.VeeSubfolderDataClass

    static name: string
}

export interface VeeSubfolderDataPrivate {
}

export class VeeSubfolderDataPrivate {

    // Own properties of Camel-1.2.Camel.VeeSubfolderDataPrivate

    static name: string
}

export interface VeeSummaryClass {

    // Own fields of Camel-1.2.Camel.VeeSummaryClass

    parentClass: FolderSummaryClass
    reserved: any[]
}

export abstract class VeeSummaryClass {

    // Own properties of Camel-1.2.Camel.VeeSummaryClass

    static name: string
}

export interface VeeSummaryPrivate {
}

export class VeeSummaryPrivate {

    // Own properties of Camel-1.2.Camel.VeeSummaryPrivate

    static name: string
}

export interface WeakRefGroup {

    // Owm methods of Camel-1.2.Camel.WeakRefGroup

    get(): any | null
    /**
     * Increases a reference count of the `group`.
     * @returns the @group
     */
    ref(): WeakRefGroup
    /**
     * Sets the `object` as the object help by this `group`. If
     * the `object` is %NULL, then unsets any previously set.
     * @param object a #GObject descendant, or %NULL
     */
    set(object: any | null): void
    /**
     * Decreases a reference count of the `group`. The `group` is
     * freed when the reference count reaches zero.
     */
    unref(): void
}

export class WeakRefGroup {

    // Own properties of Camel-1.2.Camel.WeakRefGroup

    static name: string

    // Constructors of Camel-1.2.Camel.WeakRefGroup

    constructor() 
    static new(): WeakRefGroup
}

export interface _KeyKey {

    // Own fields of Camel-1.2.Camel._KeyKey

    data: _block_t
    offset: number
    flags: number
}

export class _KeyKey {

    // Own properties of Camel-1.2.Camel._KeyKey

    static name: string
}

export interface _LockHelperMsg {

    // Own fields of Camel-1.2.Camel._LockHelperMsg

    magic: number
    seq: number
    id: number
    data: number
}

export class _LockHelperMsg {

    // Own properties of Camel-1.2.Camel._LockHelperMsg

    static name: string
}

export interface __search_word {

    // Own fields of Camel-1.2.Camel.__search_word

    type: _search_word_t
    word: string | null
}

export class __search_word {

    // Own properties of Camel-1.2.Camel.__search_word

    static name: string
}

export interface __search_words {

    // Own fields of Camel-1.2.Camel.__search_words

    len: number
    type: _search_word_t
    words: any
}

export class __search_words {

    // Own properties of Camel-1.2.Camel.__search_words

    static name: string
}

export interface _encrypt {

    // Own fields of Camel-1.2.Camel._encrypt

    status: CipherValidityEncrypt
    description: string | null
    encrypters: GLib.Queue
}

export class _encrypt {

    // Own properties of Camel-1.2.Camel._encrypt

    static name: string
}

export interface _sign {

    // Own fields of Camel-1.2.Camel._sign

    status: CipherValiditySign
    description: string | null
    signers: GLib.Queue
}

export class _sign {

    // Own properties of Camel-1.2.Camel._sign

    static name: string
}

    export type _block_t = number
    export type _hash_t = number
    export type _key_t = number
// END